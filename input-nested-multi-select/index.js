import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useState as a,isValidElement as l,createRef as s,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as p,createElement as g,forwardRef as m}from"react";import v,{css as y,useTheme as b,keyframes as S}from"styled-components";import{ExternalIcon as x}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as w}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as $}from"@lifesg/react-icons/square";import{SquareTickFillIcon as F}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as B}from"@lifesg/react-icons/tick";import{CrossIcon as I}from"@lifesg/react-icons/cross";import{MagnifierIcon as T}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{CaretRightIcon as k}from"@lifesg/react-icons/caret-right";import O,{findDOMNode as H}from"react-dom";import{MinusSquareFillIcon as C}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as z,useFloating as E,autoUpdate as _,offset as R,flip as A,shift as P,limitShift as M,size as j,useTransitionStyles as L,useClick as W,useDismiss as N,useInteractions as V,FloatingPortal as Y,FloatingFocusManager as U}from"@floating-ui/react";var G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function J(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z=Object.prototype;var X=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Z)};var q=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),K=X,Q=q,ee=Object.prototype.hasOwnProperty;var te=function(e){if(!K(e))return Q(e);var t=[];for(var n in Object(e))ee.call(e,n)&&"constructor"!=n&&t.push(n);return t},ne="object"==typeof G&&G&&G.Object===Object&&G,re=ne,oe="object"==typeof self&&self&&self.Object===Object&&self,ie=re||oe||Function("return this")(),ae=ie.Symbol,le=ae,se=Object.prototype,ce=se.hasOwnProperty,ue=se.toString,de=le?le.toStringTag:void 0;var fe=function(e){var t=ce.call(e,de),n=e[de];try{e[de]=void 0;var r=!0}catch(e){}var o=ue.call(e);return r&&(t?e[de]=n:delete e[de]),o},he=Object.prototype.toString;var pe=fe,ge=function(e){return he.call(e)},me=ae?ae.toStringTag:void 0;var ve=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?pe(e):ge(e)};var ye=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},be=ve,Se=ye;var xe,we=function(e){if(!Se(e))return!1;var t=be(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},$e=ie["__core-js_shared__"],Fe=(xe=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+xe:"";var Be=function(e){return!!Fe&&Fe in e},Ie=Function.prototype.toString;var Te=function(e){if(null!=e){try{return Ie.call(e)}catch(e){}try{return e+""}catch(e){}}return""},De=we,ke=Be,Oe=ye,He=Te,Ce=/^\[object .+?Constructor\]$/,ze=Function.prototype,Ee=Object.prototype,_e=ze.toString,Re=Ee.hasOwnProperty,Ae=RegExp("^"+_e.call(Re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pe=function(e){return!(!Oe(e)||ke(e))&&(De(e)?Ae:Ce).test(He(e))},Me=function(e,t){return null==e?void 0:e[t]};var je=function(e,t){var n=Me(e,t);return Pe(n)?n:void 0},Le=je(ie,"DataView"),We=je(ie,"Map"),Ne=Le,Ve=We,Ye=je(ie,"Promise"),Ue=je(ie,"Set"),Ge=je(ie,"WeakMap"),Je=ve,Ze=Te,Xe="[object Map]",qe="[object Promise]",Ke="[object Set]",Qe="[object WeakMap]",et="[object DataView]",tt=Ze(Ne),nt=Ze(Ve),rt=Ze(Ye),ot=Ze(Ue),it=Ze(Ge),at=Je;(Ne&&at(new Ne(new ArrayBuffer(1)))!=et||Ve&&at(new Ve)!=Xe||Ye&&at(Ye.resolve())!=qe||Ue&&at(new Ue)!=Ke||Ge&&at(new Ge)!=Qe)&&(at=function(e){var t=Je(e),n="[object Object]"==t?e.constructor:void 0,r=n?Ze(n):"";if(r)switch(r){case tt:return et;case nt:return Xe;case rt:return qe;case ot:return Ke;case it:return Qe}return t});var lt=at;var st=function(e){return null!=e&&"object"==typeof e},ct=ve,ut=st;var dt=function(e){return ut(e)&&"[object Arguments]"==ct(e)},ft=st,ht=Object.prototype,pt=ht.hasOwnProperty,gt=ht.propertyIsEnumerable,mt=dt(function(){return arguments}())?dt:function(e){return ft(e)&&pt.call(e,"callee")&&!gt.call(e,"callee")},vt=Array.isArray;var yt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},bt=we,St=yt;var xt=function(e){return null!=e&&St(e.length)&&!bt(e)},wt={exports:{}};var $t=function(){return!1};!function(e,t){var n=ie,r=$t,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(wt,wt.exports);var Ft=wt.exports,Bt=ve,It=yt,Tt=st,Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;var kt=function(e){return Tt(e)&&It(e.length)&&!!Dt[Bt(e)]};var Ot=function(e){return function(t){return e(t)}},Ht={exports:{}};!function(e,t){var n=ne,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ht,Ht.exports);var Ct=Ht.exports,zt=kt,Et=Ot,_t=Ct&&Ct.isTypedArray,Rt=_t?Et(_t):zt,At=te,Pt=lt,Mt=mt,jt=vt,Lt=xt,Wt=Ft,Nt=X,Vt=Rt,Yt=Object.prototype.hasOwnProperty;var Ut=J((function(e){if(null==e)return!0;if(Lt(e)&&(jt(e)||"string"==typeof e||"function"==typeof e.splice||Wt(e)||Vt(e)||Mt(e)))return!e.length;var t=Pt(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Nt(e))return!At(e).length;for(var n in e)if(Yt.call(e,n))return!1;return!0}));var Gt=function(){this.__data__=[],this.size=0};var Jt=function(e,t){return e===t||e!=e&&t!=t},Zt=Jt;var Xt=function(e,t){for(var n=e.length;n--;)if(Zt(e[n][0],t))return n;return-1},qt=Xt,Kt=Array.prototype.splice;var Qt=Xt;var en=Xt;var tn=Xt;var nn=Gt,rn=function(e){var t=this.__data__,n=qt(t,e);return!(n<0)&&(n==t.length-1?t.pop():Kt.call(t,n,1),--this.size,!0)},on=function(e){var t=this.__data__,n=Qt(t,e);return n<0?void 0:t[n][1]},an=function(e){return en(this.__data__,e)>-1},ln=function(e,t){var n=this.__data__,r=tn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function sn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}sn.prototype.clear=nn,sn.prototype.delete=rn,sn.prototype.get=on,sn.prototype.has=an,sn.prototype.set=ln;var cn=sn,un=cn;var dn=function(){this.__data__=new un,this.size=0};var fn=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var hn=function(e){return this.__data__.get(e)};var pn=function(e){return this.__data__.has(e)},gn=je(Object,"create"),mn=gn;var vn=function(){this.__data__=mn?mn(null):{},this.size=0};var yn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},bn=gn,Sn=Object.prototype.hasOwnProperty;var xn=function(e){var t=this.__data__;if(bn){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Sn.call(t,e)?t[e]:void 0},wn=gn,$n=Object.prototype.hasOwnProperty;var Fn=gn;var Bn=vn,In=yn,Tn=xn,Dn=function(e){var t=this.__data__;return wn?void 0!==t[e]:$n.call(t,e)},kn=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fn&&void 0===t?"__lodash_hash_undefined__":t,this};function On(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}On.prototype.clear=Bn,On.prototype.delete=In,On.prototype.get=Tn,On.prototype.has=Dn,On.prototype.set=kn;var Hn=On,Cn=cn,zn=We;var En=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var _n=function(e,t){var n=e.__data__;return En(t)?n["string"==typeof t?"string":"hash"]:n.map},Rn=_n;var An=_n;var Pn=_n;var Mn=_n;var jn=function(e,t){var n=Mn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Ln=function(){this.size=0,this.__data__={hash:new Hn,map:new(zn||Cn),string:new Hn}},Wn=function(e){var t=Rn(this,e).delete(e);return this.size-=t?1:0,t},Nn=function(e){return An(this,e).get(e)},Vn=function(e){return Pn(this,e).has(e)},Yn=jn;function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Un.prototype.clear=Ln,Un.prototype.delete=Wn,Un.prototype.get=Nn,Un.prototype.has=Vn,Un.prototype.set=Yn;var Gn=Un,Jn=cn,Zn=We,Xn=Gn;var qn=cn,Kn=dn,Qn=fn,er=hn,tr=pn,nr=function(e,t){var n=this.__data__;if(n instanceof Jn){var r=n.__data__;if(!Zn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Xn(r)}return n.set(e,t),this.size=n.size,this};function rr(e){var t=this.__data__=new qn(e);this.size=t.size}rr.prototype.clear=Kn,rr.prototype.delete=Qn,rr.prototype.get=er,rr.prototype.has=tr,rr.prototype.set=nr;var or=rr;var ir=Gn,ar=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},lr=function(e){return this.__data__.has(e)};function sr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ir;++t<n;)this.add(e[t])}sr.prototype.add=sr.prototype.push=ar,sr.prototype.has=lr;var cr=sr,ur=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},dr=function(e,t){return e.has(t)};var fr=function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&n?new cr:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,i):r(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!ur(t,(function(e,t){if(!dr(h,t)&&(p===e||o(p,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var hr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},pr=ie.Uint8Array,gr=Jt,mr=fr,vr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},yr=hr,br=ae?ae.prototype:void 0,Sr=br?br.valueOf:void 0;var xr=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new pr(e),new pr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return gr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=vr;case"[object Set]":var s=1&r;if(l||(l=yr),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=mr(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Sr)return Sr.call(e)==Sr.call(t)}return!1};var wr=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},$r=wr,Fr=vt;var Br=function(e,t,n){var r=t(e);return Fr(e)?r:$r(r,n(e))};var Ir=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i},Tr=function(){return[]},Dr=Object.prototype.propertyIsEnumerable,kr=Object.getOwnPropertySymbols,Or=kr?function(e){return null==e?[]:(e=Object(e),Ir(kr(e),(function(t){return Dr.call(e,t)})))}:Tr;var Hr=/^(?:0|[1-9]\d*)$/;var Cr=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},zr=mt,Er=vt,_r=Ft,Rr=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Hr.test(e))&&e>-1&&e%1==0&&e<t},Ar=Rt,Pr=Object.prototype.hasOwnProperty;var Mr=function(e,t){var n=Er(e),r=!n&&zr(e),o=!n&&!r&&_r(e),i=!n&&!r&&!o&&Ar(e),a=n||r||o||i,l=a?Cr(e.length,String):[],s=l.length;for(var c in e)!t&&!Pr.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Rr(c,s))||l.push(c);return l},jr=te,Lr=xt;var Wr=Br,Nr=Or,Vr=function(e){return Lr(e)?Mr(e):jr(e)};var Yr=function(e){return Wr(e,Vr,Nr)},Ur=Object.prototype.hasOwnProperty;var Gr=or,Jr=fr,Zr=xr,Xr=function(e,t,n,r,o,i){var a=1&n,l=Yr(e),s=l.length;if(s!=Yr(t).length&&!a)return!1;for(var c=s;c--;){var u=l[c];if(!(a?u in t:Ur.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<s;){var g=e[u=l[c]],m=t[u];if(r)var v=a?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===v?g===m||o(g,m,n,r,i):v)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},qr=lt,Kr=vt,Qr=Ft,eo=Rt,to="[object Arguments]",no="[object Array]",ro="[object Object]",oo=Object.prototype.hasOwnProperty;var io=function(e,t,n,r,o,i){var a=Kr(e),l=Kr(t),s=a?no:qr(e),c=l?no:qr(t),u=(s=s==to?ro:s)==ro,d=(c=c==to?ro:c)==ro,f=s==c;if(f&&Qr(e)){if(!Qr(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new Gr),a||eo(e)?Jr(e,t,n,r,o,i):Zr(e,t,s,n,r,o,i);if(!(1&n)){var h=u&&oo.call(e,"__wrapped__"),p=d&&oo.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new Gr),o(g,m,n,r,i)}}return!!f&&(i||(i=new Gr),Xr(e,t,n,r,o,i))},ao=st;var lo=function e(t,n,r,o,i){return t===n||(null==t||null==n||!ao(t)&&!ao(n)?t!=t&&n!=n:io(t,n,r,o,e,i))},so=lo;var co=J((function(e,t){return so(e,t)})),uo=function(e,t){return uo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},uo(e,t)};var fo=function(){return fo=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},fo.apply(this,arguments)};var ho="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var po=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},go="object"==typeof ho&&ho&&ho.Object===Object&&ho,mo="object"==typeof self&&self&&self.Object===Object&&self,vo=go||mo||Function("return this")(),yo=vo,bo=function(){return yo.Date.now()},So=/\s/;var xo=function(e){for(var t=e.length;t--&&So.test(e.charAt(t)););return t},wo=/^\s+/;var $o=function(e){return e?e.slice(0,xo(e)+1).replace(wo,""):e},Fo=vo.Symbol,Bo=Fo,Io=Object.prototype,To=Io.hasOwnProperty,Do=Io.toString,ko=Bo?Bo.toStringTag:void 0;var Oo=function(e){var t=To.call(e,ko),n=e[ko];try{e[ko]=void 0;var r=!0}catch(e){}var o=Do.call(e);return r&&(t?e[ko]=n:delete e[ko]),o},Ho=Object.prototype.toString;var Co=Oo,zo=function(e){return Ho.call(e)},Eo=Fo?Fo.toStringTag:void 0;var _o=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Eo&&Eo in Object(e)?Co(e):zo(e)},Ro=function(e){return null!=e&&"object"==typeof e};var Ao=$o,Po=po,Mo=function(e){return"symbol"==typeof e||Ro(e)&&"[object Symbol]"==_o(e)},jo=/^[-+]0x[0-9a-f]+$/i,Lo=/^0b[01]+$/i,Wo=/^0o[0-7]+$/i,No=parseInt;var Vo=po,Yo=bo,Uo=function(e){if("number"==typeof e)return e;if(Mo(e))return NaN;if(Po(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Po(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ao(e);var n=Lo.test(e);return n||Wo.test(e)?No(e.slice(2),n?2:8):jo.test(e)?NaN:+e},Go=Math.max,Jo=Math.min;var Zo=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function g(){var e=Yo();if(p(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-s);return d?Jo(n,i-(e-c)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=Yo(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(g,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=Uo(t)||0,Vo(n)&&(u=!!n.leading,i=(d="maxWait"in n)?Go(Uo(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},v.flush=function(){return void 0===l?a:m(Yo())},v},Xo=Zo,qo=po;var Ko=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qo(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Xo(e,t,{leading:r,maxWait:t,trailing:o})},Qo=function(e,t,n,r){switch(t){case"debounce":return Zo(e,n,r);case"throttle":return Ko(e,n,r);default:return e}},ei=function(e){return"function"==typeof e},ti=function(){return"undefined"==typeof window},ni=function(e){return e instanceof Element||e instanceof HTMLDocument},ri=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&ei(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ti()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ti())return null;if(t)return document.querySelector(t);if(r&&ni(r))return r;if(n.targetRef&&ni(n.targetRef.current))return n.targetRef.current;var o=H(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=ri(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ti()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ei(t)?"renderProp":ei(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,ti()||(n.resizeHandler=Qo(n.createResizeHandler,o,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}uo(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ti()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(a,null)}}}(u);var oi=ti()?d:f;function ii(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,l=void 0===o?1e3:o,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),v=i(null),y=null!=h?h:v,b=i(),S=a({width:void 0,height:void 0}),x=S[0],w=S[1];return oi((function(){if(!ti()){var e=ri(g,w,u,f);b.current=Qo((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!ti()&&e({width:r,height:o}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,u,f,g,p,y.current]),fo({ref:y},x)}const ai={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},li={D1:{fontFamily:ai.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ai.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ai.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ai.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ai.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ai.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ai.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ai.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ai.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ai.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ai.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ai.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ai.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ai.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},si={D1:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:ai.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:ai.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:ai.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:ai.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:ai.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},ci={D1:{fontFamily:ai.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ai.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ai.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ai.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ai.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ai.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ai.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ai.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ai.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ai.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ai.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ai.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ai.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ai.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var ui=ve,di=st;var fi=function(e){return"symbol"==typeof e||di(e)&&"[object Symbol]"==ui(e)},hi=vt,pi=fi,gi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mi=/^\w*$/;var vi=function(e,t){if(hi(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!pi(e))||(mi.test(e)||!gi.test(e)||null!=t&&e in Object(t))},yi=Gn;function bi(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(bi.Cache||yi),n}bi.Cache=yi;var Si=bi;var xi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wi=/\\(\\)?/g,$i=function(e){var t=Si(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xi,(function(e,n,r,o){t.push(r?o.replace(wi,"$1"):n||e)})),t}));var Fi=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Bi=vt,Ii=fi,Ti=ae?ae.prototype:void 0,Di=Ti?Ti.toString:void 0;var ki=function e(t){if("string"==typeof t)return t;if(Bi(t))return Fi(t,e)+"";if(Ii(t))return Di?Di.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Oi=ki;var Hi=vt,Ci=vi,zi=$i,Ei=function(e){return null==e?"":Oi(e)};var _i=fi;var Ri=function(e,t){return Hi(e)?e:Ci(e,t)?[e]:zi(Ei(e))},Ai=function(e){if("string"==typeof e||_i(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Pi=function(e,t){for(var n=0,r=(t=Ri(t,e)).length;null!=e&&n<r;)e=e[Ai(t[n++])];return n&&n==r?e:void 0};var Mi=J((function(e,t,n){var r=null==e?void 0:Pi(e,t);return void 0===r?n:r}));const ji=(e,t,n)=>t?Mi(n,t)||Mi(e,t):n||e,Li=(e,t)=>{const n=t||e.defaultValue;return Mi(e.collections,n)};var Wi;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Wi||(Wi={}));const Ni={collections:{base:li,oneservice:ci,plusJakartaSans:si},defaultValue:"base"},Vi=e=>t=>{const n=t.theme,r=Li(Ni,n[Wi.textStyleScheme]);return n.options&&n.options.textStyle?ji(r,e,n.options.textStyle):ji(r,e)},Yi={D1:{fontFamily:Vi("D1.fontFamily"),fontSize:Vi("D1.fontSize"),fontWeight:Vi("D1.fontWeight"),lineHeight:Vi("D1.lineHeight"),letterSpacing:Vi("D1.letterSpacing"),fontVariant:Vi("D1.fontVariant")},D2:{fontFamily:Vi("D2.fontFamily"),fontSize:Vi("D2.fontSize"),fontWeight:Vi("D2.fontWeight"),lineHeight:Vi("D2.lineHeight"),letterSpacing:Vi("D2.letterSpacing"),fontVariant:Vi("D2.fontVariant")},D3:{fontFamily:Vi("D3.fontFamily"),fontSize:Vi("D3.fontSize"),fontWeight:Vi("D3.fontWeight"),lineHeight:Vi("D3.lineHeight"),letterSpacing:Vi("D3.letterSpacing"),fontVariant:Vi("D3.fontVariant")},D4:{fontFamily:Vi("D4.fontFamily"),fontSize:Vi("D4.fontSize"),fontWeight:Vi("D4.fontWeight"),lineHeight:Vi("D4.lineHeight"),letterSpacing:Vi("D4.letterSpacing"),fontVariant:Vi("D4.fontVariant")},DBody:{fontFamily:Vi("DBody.fontFamily"),fontSize:Vi("DBody.fontSize"),fontWeight:Vi("DBody.fontWeight"),lineHeight:Vi("DBody.lineHeight"),letterSpacing:Vi("DBody.letterSpacing"),fontVariant:Vi("DBody.fontVariant")},H1:{fontFamily:Vi("H1.fontFamily"),fontSize:Vi("H1.fontSize"),fontWeight:Vi("H1.fontWeight"),lineHeight:Vi("H1.lineHeight"),letterSpacing:Vi("H1.letterSpacing"),fontVariant:Vi("H1.fontVariant")},H2:{fontFamily:Vi("H2.fontFamily"),fontSize:Vi("H2.fontSize"),fontWeight:Vi("H2.fontWeight"),lineHeight:Vi("H2.lineHeight"),letterSpacing:Vi("H2.letterSpacing"),fontVariant:Vi("H2.fontVariant")},H3:{fontFamily:Vi("H3.fontFamily"),fontSize:Vi("H3.fontSize"),fontWeight:Vi("H3.fontWeight"),lineHeight:Vi("H3.lineHeight"),letterSpacing:Vi("H3.letterSpacing"),fontVariant:Vi("H3.fontVariant")},H4:{fontFamily:Vi("H4.fontFamily"),fontSize:Vi("H4.fontSize"),fontWeight:Vi("H4.fontWeight"),lineHeight:Vi("H4.lineHeight"),letterSpacing:Vi("H4.letterSpacing"),fontVariant:Vi("H4.fontVariant")},H5:{fontFamily:Vi("H5.fontFamily"),fontSize:Vi("H5.fontSize"),fontWeight:Vi("H5.fontWeight"),lineHeight:Vi("H5.lineHeight"),letterSpacing:Vi("H5.letterSpacing"),fontVariant:Vi("H5.fontVariant")},H6:{fontFamily:Vi("H6.fontFamily"),fontSize:Vi("H6.fontSize"),fontWeight:Vi("H6.fontWeight"),lineHeight:Vi("H6.lineHeight"),letterSpacing:Vi("H6.letterSpacing"),fontVariant:Vi("H6.fontVariant")},Body:{fontFamily:Vi("Body.fontFamily"),fontSize:Vi("Body.fontSize"),fontWeight:Vi("Body.fontWeight"),lineHeight:Vi("Body.lineHeight"),letterSpacing:Vi("Body.letterSpacing"),fontVariant:Vi("Body.fontVariant")},BodySmall:{fontFamily:Vi("BodySmall.fontFamily"),fontSize:Vi("BodySmall.fontSize"),fontWeight:Vi("BodySmall.fontWeight"),lineHeight:Vi("BodySmall.lineHeight"),letterSpacing:Vi("BodySmall.letterSpacing"),fontVariant:Vi("BodySmall.fontVariant")},XSmall:{fontFamily:Vi("XSmall.fontFamily"),fontSize:Vi("XSmall.fontSize"),fontWeight:Vi("XSmall.fontWeight"),lineHeight:Vi("XSmall.lineHeight"),letterSpacing:Vi("XSmall.letterSpacing"),fontVariant:Vi("XSmall.fontVariant")}},Ui=[ai.OpenSans,ai.PlusJakartaSans],Gi=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Ji=(e,t)=>n=>{var r;const o=Yi[e].fontFamily(n),i=Yi[e].fontWeight(n),a=Ui.find((e=>Object.values(e).includes(o)));return a?y`
                font-family: ${Gi(a,t)||Gi(a,i)||o};
                font-weight: normal !important;
            `:y`
            font-family: ${o};
            font-weight: ${null!==(r=Zi(t)||i)&&void 0!==r?r:"normal"};
        `},Zi=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Xi=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},qi=(e,t,n=!1)=>r=>{const o=Yi[e],i=o.fontSize(r);return y`
            ${Ji(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${y`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Ki=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${Xi(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${Xi(n)}
        `;function Qi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const ea={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ta=e=>t=>{const n=t.theme,r=Li(ea,n[Wi.colorScheme]);return n.options&&n.options.color?ji(r,e,n.options.color):ji(r,e)},na={Brand:{1:ta("Brand.1"),2:ta("Brand.2"),3:ta("Brand.3"),4:ta("Brand.4"),5:ta("Brand.5"),6:ta("Brand.6")},Primary:ta("Primary"),PrimaryDark:ta("PrimaryDark"),Secondary:ta("Secondary"),Accent:{Light:{1:ta("Accent.Light.1"),2:ta("Accent.Light.2"),3:ta("Accent.Light.3"),4:ta("Accent.Light.4"),5:ta("Accent.Light.5"),6:ta("Accent.Light.6")},Dark:{1:ta("Accent.Dark.1"),2:ta("Accent.Dark.2"),3:ta("Accent.Dark.3")}},Neutral:{1:ta("Neutral.1"),2:ta("Neutral.2"),3:ta("Neutral.3"),4:ta("Neutral.4"),5:ta("Neutral.5"),6:ta("Neutral.6"),7:ta("Neutral.7"),8:ta("Neutral.8")},Validation:{Green:{Text:ta("Validation.Green.Text"),Icon:ta("Validation.Green.Icon"),Border:ta("Validation.Green.Border"),Background:ta("Validation.Green.Background")},Orange:{Text:ta("Validation.Orange.Text"),Icon:ta("Validation.Orange.Icon"),Border:ta("Validation.Orange.Border"),Background:ta("Validation.Orange.Background"),Badge:ta("Validation.Orange.Badge")},Red:{Text:ta("Validation.Red.Text"),Icon:ta("Validation.Red.Icon"),Border:ta("Validation.Red.Border"),Background:ta("Validation.Red.Background")},Blue:{Text:ta("Validation.Blue.Text"),Icon:ta("Validation.Blue.Icon"),Border:ta("Validation.Blue.Border"),Background:ta("Validation.Blue.Background")}},Shadow:{Accent:ta("Shadow.Accent"),Red:ta("Shadow.Red"),Elevation:ta("Shadow.Elevation")}};var ra;!function(e){e.D1=v.h1`
        ${e=>y`
                ${qi("D1",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${qi("D2",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${qi("D3",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${qi("D4",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${qi("DBody",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${qi("H1",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${qi("H2",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${qi("H3",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${qi("H4",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${qi("H5",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${qi("H6",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${qi("Body",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${qi("BodySmall",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${qi("XSmall",e.weight,e.paragraph)}
                color: ${na.Neutral[1]};
                ${Ki(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>aa(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>aa(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ra||(ra={}));const oa=v.a`
    ${e=>y`
            ${qi(e.textStyle,e.weight)}
            color: ${na.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${na.Secondary};

                svg {
                    color: ${na.Secondary};
                }
            }
        `}
`,ia=v(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,aa=n=>{var{external:r=!1,children:o}=n,i=Qi(n,["external","children"]);return e(oa,Object.assign({},i,{children:[o,r&&t(ia,{})]}))};var la;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(la||(la={}));const sa={[Wi.colorScheme]:"base",[Wi.textStyleScheme]:"base",[Wi.designTokenScheme]:"base",[Wi.resourceScheme]:"base"};var ca;Wi.colorScheme,Wi.textStyleScheme,Wi.designTokenScheme,Wi.resourceScheme,Wi.colorScheme,Wi.textStyleScheme,Wi.designTokenScheme,Wi.resourceScheme,Wi.colorScheme,Wi.textStyleScheme,Wi.designTokenScheme,Wi.resourceScheme,Wi.colorScheme,Wi.textStyleScheme,Wi.designTokenScheme,Wi.resourceScheme,Wi.colorScheme,Wi.textStyleScheme,Wi.designTokenScheme,Wi.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ca||(ca={}));const ua=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,da=v.div`
    ${e=>qi("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?na.Primary:na.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ua}
`,fa=v.div`
    color: ${na.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ua}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${qi("BodySmall","semibold")}
                `:y`
                    ${qi("Body","regular")}
                `}
`,ha=v.span`
    ${e=>qi("small"===e.$variant?"BodySmall":"Body","semibold")}
`,pa=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${da} {
                        display: inline;
                    }

                    ${fa} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ga=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,ma=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,va=({bold:r,displayType:o="inline",label:i,searchTerm:a,maxLines:l=2,selected:s,sublabel:c,truncationType:u="middle",variant:d})=>{const f=b()||sa,g=Yi.Body.fontSize({theme:f}),m=Yi.Body.fontFamily({theme:f}),{ref:v,width:y}=ii(),S=h((e=>{if("inline"!==o)return!1;return ca.getTextWidth(e,`${g}rem '${m}'`)>y*l-50}),[y,o,g,m,l]),x=p((()=>S(i)),[S,i]),w=p((()=>c&&S(c)),[S,c]),$=x||w?"next-line":o,F=r=>{if(!a)return r;const o=a.toLowerCase().trim(),l=r.toLowerCase().indexOf(o),s=l+a.length;return-1===l?r:e(n,{children:[i.slice(0,l),t(ha,Object.assign({$variant:d},{children:i.slice(l,s)})),i.slice(s)]})},B=r=>e(n,{children:[t(ga,Object.assign({$maxLines:l,"aria-hidden":!0},{children:F(r)})),t(ma,Object.assign({$maxLines:l,"aria-hidden":!0},{children:F(r)}))]});return e(pa,Object.assign({ref:v,$labelDisplayType:$},{children:[t(da,Object.assign({"aria-label":i,$bold:r,$maxLines:l,$selected:s,$truncateType:u,$variant:d},{children:"middle"===u&&x?B(i):F(i)})),c&&t(fa,Object.assign({"aria-label":c,$maxLines:l,$truncateType:u,$labelDisplayType:o},{children:"middle"===u&&w?B(c):c}))]}))};function ya(e){return()=>e}function ba(e){e()}function Sa(e,t){return n=>e(t(n))}function xa(e,t){return()=>e(t)}function wa(e){return void 0!==e}function $a(){}function Fa(e,t){return t(e),e}function Ba(e,t){return t(e)}function Ia(...e){return e}function Ta(e,t){return e(1,t)}function Da(e,t){e(0,t)}function ka(e){e(2)}function Oa(e){return e(4)}function Ha(e,t){return Ta(e,function(e,t){return n=>e(t,n)}(t,0))}function Ca(e,t){const n=e(1,(e=>{n(),t(e)}));return n}function za(e){let t,n;return r=>o=>{t=o,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function Ea(e,t){return e===t}function _a(e=Ea){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function Ra(e){return t=>n=>{e(n)&&t(n)}}function Aa(e){return t=>Sa(t,e)}function Pa(e){return t=>()=>{t(e)}}function Ma(e,...t){const n=function(...e){return t=>e.reduceRight(Ba,t)}(...t);return(t,r)=>{switch(t){case 2:return void ka(e);case 1:return Ta(e,n(r))}}}function ja(e,t){return n=>r=>{n(t=e(t,r))}}function La(e){return t=>n=>{e>0?e--:t(n)}}function Wa(e){let t,n=null;return r=>o=>{n=o,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function Na(...e){const t=new Array(e.length);let n=0,r=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Ta(e,(e=>{const l=n;n|=a,t[i]=e,l!==o&&n===o&&r&&(r(),r=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};n===o?a():r=a}}function Va(e){let t=e;const n=Ua();return(e,r)=>{switch(e){case 0:t=r;break;case 1:r(t);break;case 4:return t}return n(e,r)}}function Ya(e,t){return Fa(Va(t),(t=>Ha(e,t)))}function Ua(){const e=[];return(t,n)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(n)}));case 2:return void e.splice(0,e.length);case 1:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function Ga(e){return Fa(Ua(),(t=>Ha(e,t)))}function Ja(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:Za(),singleton:n}}const Za=()=>Symbol();function Xa(...e){const t=Ua(),n=new Array(e.length);let r=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);Ta(e,(e=>{n[i]=e,r|=a,r===o&&Da(t,n)}))})),function(e,i){switch(e){case 2:return void ka(t);case 1:return r===o&&i(n),Ta(t,i)}}}function qa(e,t=Ea){return Ma(e,_a(t))}function Ka(...e){return function(t,n){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(ba)}}(...e.map((e=>Ta(e,n))))}}}var Qa=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Qa||{});const el={0:"debug",3:"error",1:"log",2:"warn"},tl=Ja((()=>{const e=Va(3);return{log:Va(((t,n,r=1)=>{var o;r>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:Oa(e))&&console[el[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function nl(e,t,n){return rl(e,t,n).callbackRef}function rl(e,t,n){const r=o.useRef(null);let i=e=>{};const a=o.useMemo((()=>typeof ResizeObserver<"u"?new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)})):null),[e,n]);return i=e=>{e&&t?(null==a||a.observe(e),r.current=e):(r.current&&(null==a||a.unobserve(r.current)),r.current=null)},{callbackRef:i,ref:r}}function ol(e,t,n,r,i,a,l,s,c){const u=o.useCallback((n=>{const o=function(e,t,n,r){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const l=parseInt(o.dataset.index),s=parseFloat(o.dataset.knownSize),c=t(o,n);if(0===c&&r("Zero-sized element, this should not happen",{child:o},Qa.ERROR),c===s)continue;const u=i[i.length-1];0===i.length||u.size!==c||u.endIndex!==l-1?i.push({endIndex:l,size:c,startIndex:l}):i[i.length-1].endIndex++}return i}(n.children,t,s?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const u="window"===c.lastElementChild.dataset.viewportType;let d;u&&(d=c.ownerDocument.defaultView);const f=l?s?l.scrollLeft:l.scrollTop:u?s?d.scrollX||d.document.documentElement.scrollLeft:d.scrollY||d.document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,h=l?s?l.scrollWidth:l.scrollHeight:u?s?d.document.documentElement.scrollWidth:d.document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,p=l?s?l.offsetWidth:l.offsetHeight:u?s?d.innerWidth:d.innerHeight:s?c.offsetWidth:c.offsetHeight;r({scrollHeight:h,scrollTop:Math.max(f,0),viewportHeight:p}),null==a||a(s?il("column-gap",getComputedStyle(n).columnGap,i):il("row-gap",getComputedStyle(n).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,l,r,s]);return rl(u,n,c)}function il(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Qa.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function al(e,t,n){const r=o.useRef(null),i=o.useCallback((n=>{if(null==n||!n.offsetParent)return;const o=n.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=o.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else{const e=l.current.ownerDocument.defaultView;s=e.innerHeight-Math.max(0,o.top),a=o.top+e.scrollY}r.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(r.current)}),[e,t]),{callbackRef:a,ref:l}=rl(i,!0,n),s=o.useCallback((()=>{i(l.current)}),[i,l]);return o.useEffect((()=>{var e;if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}{const t=null==(e=l.current)?void 0:e.ownerDocument.defaultView;return null==t||t.addEventListener("scroll",s),null==t||t.addEventListener("resize",s),()=>{null==t||t.removeEventListener("scroll",s),null==t||t.removeEventListener("resize",s)}}}),[s,t,l]),a}const ll=Ja((()=>{const e=Ua(),t=Ua(),n=Va(0),r=Ua(),o=Va(0),i=Ua(),a=Ua(),l=Va(0),s=Va(0),c=Va(0),u=Va(0),d=Ua(),f=Ua(),h=Va(!1),p=Va(!1),g=Va(!1);return Ha(Ma(e,Aa((({scrollTop:e})=>e))),t),Ha(Ma(e,Aa((({scrollHeight:e})=>e))),a),Ha(t,o),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:s,footerHeight:u,headerHeight:l,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:d,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:r,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),sl={lvl:0};function cl(e,t){const n=e.length;if(0===n)return[];let{index:r,value:o}=t(e[0]);const i=[];for(let a=1;a<n;a++){const{index:n,value:l}=t(e[a]);i.push({end:n-1,start:r,value:o}),r=n,o=l}return i.push({end:1/0,start:r,value:o}),i}function ul(e){return e===sl}function dl(e,t){if(!ul(e))return t===e.k?e.v:t<e.k?dl(e.l,t):dl(e.r,t)}function fl(e,t,n="k"){if(ul(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=fl(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return fl(e.l,t,n)}function hl(e,t,n){return ul(e)?Fl(t,n,1):t===e.k?Sl(e,{k:t,v:n}):t<e.k?Bl(Sl(e,{l:hl(e.l,t,n)})):Bl(Sl(e,{r:hl(e.r,t,n)}))}function pl(){return sl}function gl(e,t,n){if(ul(e))return[];return function(e){return cl(e,(({k:e,v:t})=>({index:e,value:t})))}(yl(e,fl(e,t)[0],n))}function ml(e,t){if(ul(e))return sl;const{k:n,l:r,r:o}=e;if(t===n){if(ul(r))return o;if(ul(o))return r;{const[t,n]=$l(r);return bl(Sl(e,{k:t,l:xl(r),v:n}))}}return bl(Sl(e,t<n?{l:ml(r,t)}:{r:ml(o,t)}))}function vl(e){return ul(e)?[]:[...vl(e.l),{k:e.k,v:e.v},...vl(e.r)]}function yl(e,t,n){if(ul(e))return[];const{k:r,l:o,r:i,v:a}=e;let l=[];return r>t&&(l=l.concat(yl(o,t,n))),r>=t&&r<=n&&l.push({k:r,v:a}),r<=n&&(l=l.concat(yl(i,t,n))),l}function bl(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(wl(t))return Il(Sl(e,{lvl:n-1}));if(!ul(t)&&!ul(t.r))return Sl(t.r,{l:Sl(t,{r:t.r.l}),lvl:n,r:Sl(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(wl(e))return Tl(Sl(e,{lvl:n-1}));if(ul(r)||ul(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,o=wl(t)?r.lvl-1:r.lvl;return Sl(t,{l:Sl(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:Tl(Sl(r,{l:t.r,lvl:o}))})}}function Sl(e,t){return Fl(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function xl(e){return ul(e.r)?e.l:bl(Sl(e,{r:xl(e.r)}))}function wl(e){return ul(e)||e.lvl>e.r.lvl}function $l(e){return ul(e.r)?[e.k,e.v]:$l(e.r)}function Fl(e,t,n,r=sl,o=sl){return{k:e,l:r,lvl:n,r:o,v:t}}function Bl(e){return Tl(Il(e))}function Il(e){const{l:t}=e;return ul(t)||t.lvl!==e.lvl?e:Sl(t,{r:Sl(e,{l:t.r})})}function Tl(e){const{lvl:t,r:n}=e;return ul(n)||ul(n.r)||n.lvl!==t||n.r.lvl!==t?e:Sl(n,{l:Sl(e,{r:n.l}),lvl:t+1})}function Dl(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function kl(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Ol=Ja((()=>({recalcInProgress:Va(!1)})),[],{singleton:!0});function Hl(e,t,n){return e[Cl(e,t,n)]}function Cl(e,t,n,r=0){let o=e.length-1;for(;r<=o;){const i=Math.floor((r+o)/2),a=n(e[i],t);if(0===a)return i;if(-1===a){if(o-r<2)return i-1;o=i-1}else{if(o===r)return i;r=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function zl(e,t){return Math.round(e.getBoundingClientRect()[t])}function El(e){return!ul(e.groupOffsetTree)}function _l({index:e},t){return t===e?0:t<e?-1:1}function Rl({offset:e},t){return t===e?0:t<e?-1:1}function Al(e,t,n){if(0===t.length)return 0;const{index:r,offset:o,size:i}=Hl(t,e,_l),a=e-r,l=i*a+(a-1)*n+o;return l>0?l+n:l}function Pl(e,t){if(!El(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function Ml(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=Pl("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function jl(e,t,n,r=0){return r>0&&(t=Math.max(t,Hl(e,r,_l).offset)),cl(function(e,t,n,r){const o=Cl(e,t,r),i=Cl(e,n,r,o);return e.slice(o,i+1)}(e,t,n,Rl),Vl)}function Ll(e,[t,n,r,o]){t.length>0&&r("received item sizes",t,Qa.DEBUG);const i=e.sizeTree;let a=i,l=0;if(n.length>0&&ul(i)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>hl(hl(t,n,e),n+1,r)),a)}else[a,l]=function(e,t){let n=ul(e)?0:1/0;for(const r of t){const{endIndex:t,size:o,startIndex:i}=r;if(n=Math.min(n,i),ul(e)){e=hl(e,0,o);continue}const a=gl(e,i-1,t+1);if(a.some(Yl(r)))continue;let l=!1,s=!1;for(const{end:n,start:r,value:i}of a)l?(t>=r||o===i)&&(e=ml(e,r)):(s=i!==o,l=!0),n>t&&t>=r&&i!==o&&(e=hl(e,t+1,i));s&&(e=hl(e,i,o))}return[e,n]}(a,t);if(a===i)return e;const{lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d}=Nl(e.offsetTree,l,a,o);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>hl(e,t,Al(t,d,o))),pl()),lastIndex:s,lastOffset:c,lastSize:u,offsetTree:d,sizeTree:a}}function Wl(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Nl(e,t,n,r){let o=e,i=0,a=0,l=0,s=0;if(0!==t){s=Cl(o,t-1,_l),l=o[s].offset;const e=fl(n,t-1);i=e[0],a=e[1],o.length&&o[s].size===fl(n,t)[1]&&(s-=1),o=o.slice(0,s+1)}else o=[];for(const{start:e,value:s}of gl(n,t,1/0)){const t=e-i,n=t*a+l+t*r;o.push({index:e,offset:n,size:s}),i=e,l=n,a=s}return{lastIndex:i,lastOffset:l,lastSize:a,offsetTree:o}}function Vl(e){return{index:e.index,value:e}}function Yl(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const Ul={offsetHeight:"height",offsetWidth:"width"},Gl=Ja((([{log:e},{recalcInProgress:t}])=>{const n=Ua(),r=Ua(),o=Ya(r,0),i=Ua(),a=Ua(),l=Va(0),s=Va([]),c=Va(void 0),u=Va(void 0),d=Va(((e,t)=>zl(e,Ul[t]))),f=Va(void 0),h=Va(0),p={groupIndices:[],groupOffsetTree:pl(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:pl()},g=Ya(Ma(n,Na(s,e,h),ja(Ll,p),_a()),p),m=Ya(Ma(s,_a(),ja(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Aa((({prev:e})=>e))),[]);Ha(Ma(s,Ra((e=>e.length>0)),Na(g,h),Aa((([e,t,n])=>{const r=e.reduce(((e,r,o)=>hl(e,r,Al(r,t.offsetTree,n)||o)),pl());return{...t,groupIndices:e,groupOffsetTree:r}}))),g),Ha(Ma(r,Na(g),Ra((([e,{lastIndex:t}])=>e<t)),Aa((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),Ha(c,u);const v=Ya(Ma(c,Aa((e=>void 0===e))),!0);Ha(Ma(u,Ra((e=>void 0!==e&&ul(Oa(g).sizeTree))),Aa((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const y=Ga(Ma(n,Na(g),ja((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),Aa((e=>e.changed))));Ta(Ma(l,ja(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Aa((e=>e.diff))),(e=>{const{groupIndices:n}=Oa(g);if(e>0)Da(t,!0),Da(i,e+Wl(e,n));else if(e<0){const t=Oa(m);t.length>0&&(e-=Wl(-e,t)),Da(a,e)}})),Ta(Ma(l,Na(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:l},Qa.ERROR)}));const b=Ga(i);Ha(Ma(i,Na(g),Aa((([e,t])=>{const n=t.groupIndices.length>0,r=[],o=t.lastSize;if(n){const n=dl(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],l=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+l-1,size:o,startIndex:e+1}),a++,i+=l+1}const l=vl(t.sizeTree);return i!==e&&l.shift(),l.reduce(((t,{k:n,v:r})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:o}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return vl(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),n);const S=Ga(Ma(a,Na(g,h),Aa((([e,{offsetTree:t},n])=>Al(-e,t,n)))));return Ha(Ma(a,Na(g,h),Aa((([e,t,n])=>{if(t.groupIndices.length>0){if(ul(t.sizeTree))return t;let r=pl();const o=Oa(m);let i=0,a=0,l=0;for(;i<-e;){l=o[a];const e=o[a+1]-l-1;a++,i+=e+1}if(r=vl(t.sizeTree).reduce(((t,{k:n,v:r})=>hl(t,Math.max(0,n+e),r)),r),i!==-e){r=hl(r,0,dl(t.sizeTree,l));r=hl(r,1,fl(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Nl(t.offsetTree,0,r,n)}}{const r=vl(t.sizeTree).reduce(((t,{k:n,v:r})=>hl(t,Math.max(0,n+e),r)),pl());return{...t,sizeTree:r,...Nl(t.offsetTree,0,r,n)}}}))),g),{beforeUnshiftWith:b,data:f,defaultItemSize:u,firstItemIndex:l,fixedItemSize:c,gap:h,groupIndices:s,itemSize:d,listRefresh:y,shiftWith:a,shiftWithOffset:S,sizeRanges:n,sizes:g,statefulTotalCount:o,totalCount:r,trackItemSizes:v,unshiftWith:i}}),Ia(tl,Ol),{singleton:!0});function Jl(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Zl=Ja((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:o}])=>{const i=Ua(),a=Ua(),l=Ga(Ma(i,Aa(Jl)));return Ha(Ma(l,Aa((e=>e.totalCount))),n),Ha(Ma(l,Aa((e=>e.groupIndices))),e),Ha(Ma(Xa(o,t,r),Ra((([e,t])=>El(t))),Aa((([e,t,n])=>fl(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),_a(),Aa((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Ia(Gl,ll)),Xl=Ja((([{log:e}])=>{const t=Va(!1),n=Ga(Ma(t,Ra((e=>e)),_a()));return Ta(t,(t=>{t&&Oa(e)("props updated",{},Qa.DEBUG)})),{didMount:n,propsReady:t}}),Ia(tl),{singleton:!0}),ql=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Kl(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!ql)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Ql=Ja((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:l,scrollingInProgress:s,scrollTo:c,smoothScrollTargetReached:u,viewportHeight:d},{log:f}])=>{const h=Ua(),p=Ua(),g=Va(0);let m=null,v=null,y=null;function b(){m&&(m(),m=null),y&&(y(),y=null),v&&(clearTimeout(v),v=null),Da(s,!1)}return Ha(Ma(h,Na(n,d,r,g,l,a,f),Na(e,i,o),Aa((([[e,n,r,o,i,a,l,c],d,f,g])=>{const S=Kl(e),{align:x,behavior:w,offset:$}=S,F=o-1,B=Ml(S,n,F);let I=Al(B,n.offsetTree,d)+a;"end"===x?(I+=f+fl(n.sizeTree,B)[1]-r+g,B===F&&(I+=l)):"center"===x?I+=(f+fl(n.sizeTree,B)[1]-r+g)/2:I-=i,$&&(I+=$);const T=t=>{b(),t?(c("retrying to scroll to",{location:e},Qa.DEBUG),Da(h,e)):(Da(p,!0),c("list did not change, scroll successful",{},Qa.DEBUG))};if(b(),"smooth"===w){let e=!1;y=Ta(t,(t=>{e=e||t})),m=Ca(u,(()=>{T(e)}))}else m=Ca(Ma(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),T);return v=setTimeout((()=>{b()}),1200),Da(s,!0),c("scrolling from index to",{behavior:w,index:B,top:I},Qa.DEBUG),{behavior:w,top:I}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),Ia(Gl,ll,tl),{singleton:!0});function es(e,t){0==e?t():requestAnimationFrame((()=>{es(e-1,t)}))}function ts(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const ns=Ja((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const l=Va(!0),s=Va(0),c=Va(!0);return Ha(Ma(a,Na(s),Ra((([e,t])=>!!t)),Pa(!1)),l),Ha(Ma(a,Na(s),Ra((([e,t])=>!!t)),Pa(!1)),c),Ta(Ma(Xa(t,a),Na(l,n,e,c),Ra((([[,e],t,{sizeTree:n},r,o])=>e&&(!ul(n)||wa(r))&&!t&&!o)),Na(s)),(([,e])=>{Ca(o,(()=>{Da(c,!0)})),es(4,(()=>{Ca(r,(()=>{Da(l,!0)})),Da(i,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:s,scrolledToInitialItem:l}}),Ia(Gl,ll,Ql,Xl),{singleton:!0});function rs(e,t){return Math.abs(e-t)<1.01}const os="up",is="down",as={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},ls=Ja((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:o,viewportHeight:i}])=>{const a=Va(!1),l=Va(!0),s=Ua(),c=Ua(),u=Va(4),d=Va(0),f=Ya(Ma(Ka(Ma(qa(o),La(1),Pa(!0)),Ma(qa(o),La(1),Pa(!1),za(100))),_a()),!1),h=Ya(Ma(Ka(Ma(n,Pa(!0)),Ma(n,Pa(!1),za(200))),_a()),!1);Ha(Ma(Xa(qa(o),qa(d)),Aa((([e,t])=>e<=t)),_a()),l),Ha(Ma(l,Wa(50)),c);const p=Ga(Ma(Xa(r,qa(i),qa(t),qa(e),qa(u)),ja(((e,[{scrollHeight:t,scrollTop:n},r,o,i,a])=>{const l={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:l}}let s;return s=l.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:s,state:l}}),as),_a(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Ya(Ma(r,ja(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(rs(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const o=t-(n+r)<1;return e.scrollTop!==n&&o?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Ra((e=>e.changed)),Aa((e=>e.jump))),0);Ha(Ma(p,Aa((e=>e.atBottom))),a),Ha(Ma(a,Wa(50)),s);const m=Va(is);Ha(Ma(r,Aa((({scrollTop:e})=>e)),_a(),ja(((e,t)=>Oa(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?os:is,prevScrollTop:t}),{direction:is,prevScrollTop:0}),Aa((e=>e.direction))),m),Ha(Ma(r,Wa(50),Pa("none")),m);const v=Va(0);return Ha(Ma(f,Ra((e=>!e)),Pa(0)),v),Ha(Ma(o,Wa(100),Na(f),Ra((([e,t])=>!!t)),ja((([e,t],[n])=>[t,n]),[0,0]),Aa((([e,t])=>t-e))),v),{atBottomState:p,atBottomStateChange:s,atBottomThreshold:u,atTopStateChange:c,atTopThreshold:d,isAtBottom:a,isAtTop:l,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:v}}),Ia(ll)),ss="top",cs="bottom",us="none";function ds(e,t,n){return"number"==typeof e?n===os&&t===ss||n===is&&t===cs?e:0:n===os?t===ss?e.main:e.reverse:t===cs?e.main:e.reverse}function fs(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const hs=Ja((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:o}])=>{const i=Ua(),a=Va(0),l=Va(0),s=Va(0);return{increaseViewportBy:l,listBoundary:i,overscan:s,topListHeight:a,visibleRange:Ya(Ma(Xa(qa(r),qa(o),qa(n),qa(i,kl),qa(s),qa(a),qa(t),qa(e),qa(l)),Aa((([e,t,n,[r,o],i,a,l,s,c])=>{const u=e-s,d=a+l,f=Math.max(n-u,0);let h=us;const p=fs(c,ss),g=fs(c,cs);return r-=s,o+=n+l,(r+=n+l)>e+d-p&&(h=os),(o-=s)<e-f+t+g&&(h=is),h!==us?[Math.max(u-n-ds(i,ss,h)-p,0),u-f-l+t+ds(i,cs,h)+g]:null})),Ra((e=>null!=e)),_a(kl)),[0,0])}}),Ia(ll),{singleton:!0});const ps={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function gs(e,t,n,r,o,i){const{lastIndex:a,lastOffset:l,lastSize:s}=o;let c=0,u=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];u=t.offset+t.size}const d=n-a,f=c,h=l+d*s+(d-1)*r-u;return{bottom:u,firstItemIndex:i,items:vs(e,o,i),offsetBottom:h,offsetTop:c,top:f,topItems:vs(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function ms(e,t,n,r,o,i){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const l=e+a,s=ts(t,l);return gs(Array.from({length:l}).map(((e,t)=>({data:i[t+s],index:t+s,offset:0,size:0}))),[],l,o,n,r)}function vs(e,t,n){if(0===e.length)return[];if(!El(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,o=e[e.length-1].index,i=[],a=gl(t.groupOffsetTree,r,o);let l,s=0;for(const r of e){let e;(!l||l.end<r.index)&&(l=a.shift(),s=t.groupIndices.indexOf(l.start)),e=r.index===l.start?{index:s,type:"group"}:{groupIndex:s,index:r.index-(s+1)+n},i.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return i}const ys=Ja((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:o},i,{listBoundary:a,topListHeight:l,visibleRange:s},{initialTopMostItemIndex:c,scrolledToInitialItem:u},{topListHeight:d},f,{didMount:h},{recalcInProgress:p}])=>{const g=Va([]),m=Va(0),v=Ua();Ha(i.topItemsIndexes,g);const y=Ya(Ma(Xa(h,p,qa(s,kl),qa(o),qa(r),qa(c),u,qa(g),qa(t),qa(n),e),Ra((([e,t,,n,,,,,,,r])=>{const o=r&&r.length!==n;return e&&!t&&!o})),Aa((([,,[e,t],n,r,o,i,a,l,s,c])=>{const u=r,{offsetTree:d,sizeTree:f}=u,h=Oa(m);if(0===n)return{...ps,totalCount:n};if(0===e&&0===t)return 0===h?{...ps,totalCount:n}:ms(h,o,r,l,s,c||[]);if(ul(f))return h>0?null:gs(function(e,t,n){if(El(t)){const r=Pl(e,t);return[{index:fl(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(ts(o,n),u,c),[],n,s,u,l);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of gl(f,e,t)){const o=r.value,i=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=i;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:o}),n+=o}}if(!i)return gs([],p,n,s,u,l);const g=a.length>0?a[a.length-1]+1:0,v=jl(d,e,t,g);if(0===v.length)return null;const y=n-1;return gs(Fa([],(n=>{for(const r of v){const o=r.value;let i=o.offset,a=r.start;const l=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+s)/(l+s));const t=a-r.start;i+=t*l+t*s}a<g&&(i+=(g-a)*l,a=g);const u=Math.min(r.end,y);for(let e=a;e<=u&&!(i>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:i,size:l}),i+=l+s}})),p,n,s,u,l)})),Ra((e=>null!==e)),_a()),ps);Ha(Ma(e,Ra(wa),Aa((e=>null==e?void 0:e.length))),o),Ha(Ma(y,Aa((e=>e.topListHeight))),d),Ha(d,l),Ha(Ma(y,Aa((e=>[e.top,e.bottom]))),a),Ha(Ma(y,Aa((e=>e.items))),v);const b=Ga(Ma(y,Ra((({items:e})=>e.length>0)),Na(o,e),Ra((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Aa((([,e,t])=>[e-1,t])),_a(kl),Aa((([e])=>e)))),S=Ga(Ma(y,Wa(200),Ra((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Aa((({items:e})=>e[0].index)),_a())),x=Ga(Ma(y,Ra((({items:e})=>e.length>0)),Aa((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),_a(Dl)));return{endReached:b,initialItemCount:m,itemsRendered:v,listState:y,rangeChanged:x,startReached:S,topItemsIndexes:g,...f}}),Ia(Gl,Zl,hs,ns,Ql,ls,Xl,Ol),{singleton:!0}),bs=Ja((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:o}])=>{const i=Ua(),a=Ya(Ma(Xa(n,e,r,t,o),Aa((([e,t,n,r,o])=>e+t+n+r+o.offsetBottom+o.bottom))),0);return Ha(qa(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Ia(ll,ys),{singleton:!0}),Ss=Ja((([{viewportHeight:e},{totalListHeight:t}])=>{const n=Va(!1);return{alignToBottom:n,paddingTopAddition:Ya(Ma(Xa(n,e,t),Ra((([e])=>e)),Aa((([,e,t])=>Math.max(0,e-t))),Wa(0),_a()),0)}}),Ia(ll,bs),{singleton:!0});function xs(e){return!!e&&("smooth"===e?"smooth":"auto")}const ws=Ja((([{listRefresh:e,totalCount:t,fixedItemSize:n},{atBottomState:r,isAtBottom:o},{scrollToIndex:i},{scrolledToInitialItem:a},{didMount:l,propsReady:s},{log:c},{scrollingInProgress:u}])=>{const d=Va(!1),f=Ua();let h=null;function p(e){Da(i,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=Ca(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(Oa(c)("scrolling to bottom due to increased size",{},Qa.DEBUG),p("auto"))}));setTimeout(t,100)}return Ta(Ma(Xa(Ma(qa(t),La(1)),l),Na(qa(d),o,a,u),Aa((([[e,t],n,r,o,i])=>{let a=t&&o,l="auto";return a&&(l=((e,t)=>"function"==typeof e?xs(e(t)):t&&xs(e))(n,r||i),a=a&&!!l),{followOutputBehavior:l,shouldFollow:a,totalCount:e}})),Ra((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),Oa(n)?requestAnimationFrame((()=>{Oa(c)("following output to ",{totalCount:r},Qa.DEBUG),p(t)})):h=Ca(e,(()=>{Oa(c)("following output to ",{totalCount:r},Qa.DEBUG),p(t),h=null}))})),Ta(Ma(Xa(qa(d),t,s),Ra((([e,,t])=>e&&t)),ja((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Ra((({refreshed:e})=>e)),Na(d,t)),(([,e])=>{Oa(a)&&g(!1!==e)})),Ta(f,(()=>{g(!1!==Oa(d))})),Ta(Xa(qa(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&p("auto")})),{autoscrollToBottom:f,followOutput:d}}),Ia(Gl,ls,Ql,ns,Xl,tl,ll)),$s=Ja((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:l}])=>(Ha(Ma(l,Na(i),Ra((([,e])=>0!==e)),Na(o,r,t,n,e),Aa((([[,e],t,n,r,o,i=[]])=>ms(e,t,n,r,o,i)))),a),{})),Ia(Gl,ns,ys,Xl),{singleton:!0}),Fs=Ja((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=Va(0);return Ta(Ma(e,Na(r),Ra((([,e])=>0!==e)),Aa((([,e])=>({top:e})))),(e=>{Ca(Ma(n,La(1),Ra((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Da(t,e)}))}))})),{initialScrollTop:r}}),Ia(Xl,ll,ys),{singleton:!0}),Bs=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=n?n:"start",behavior:r}:e>i?{...o,align:null!=n?n:"end",behavior:r}:null,Is=Ja((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:l,viewportHeight:s},{scrollToIndex:c}])=>{const u=Ua();return Ha(Ma(u,Na(t,s,n,i,o,r,l),Na(e),Aa((([[e,t,n,r,o,i,l,s],c])=>{const{align:u,behavior:d,calculateViewLocation:f=Bs,done:h,...p}=e,g=Ml(e,t,r-1),m=Al(g,t.offsetTree,c)+o+i,v=f({itemBottom:m+fl(t.sizeTree,g)[1],itemTop:m,locationParams:{align:u,behavior:d,...p},viewportBottom:s+n-l,viewportTop:s+i});return v?h&&Ca(Ma(a,Ra((e=>!e)),La(Oa(a)?1:2)),h):h&&h(),v})),Ra((e=>null!==e))),c),{scrollIntoView:u}}),Ia(Gl,ll,Ql,ys,tl),{singleton:!0}),Ts=Ja((([{scrollVelocity:e}])=>{const t=Va(!1),n=Ua(),r=Va(!1);return Ha(Ma(e,Na(r,t,n),Ra((([e,t])=>!!t)),Aa((([e,t,n,r])=>{const{enter:o,exit:i}=t;if(n){if(i(e,r))return!1}else if(o(e,r))return!0;return n})),_a()),t),Ta(Ma(Xa(t,e,n),Na(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),Ia(ls),{singleton:!0}),Ds=Ja((([{scrollContainerState:e,scrollTo:t}])=>{const n=Ua(),r=Ua(),o=Ua(),i=Va(!1),a=Va(void 0);return Ha(Ma(Xa(n,r),Aa((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),Ha(Ma(t,Na(r),Aa((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:n,windowScrollTo:o,windowViewportRect:r}}),Ia(ll)),ks=Ja((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:l,windowViewportRect:s}])=>{const c=Ua(),u=Va(void 0),d=Va(null),f=Va(null);return Ha(l,d),Ha(s,f),Ta(Ma(c,Na(t,r,a,d,f,n)),(([e,t,n,r,o,i,a])=>{const l=function(e){return vl(e).map((({k:e,v:t},n,r)=>{const o=r[n+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==o&&null!==i&&(n=o.scrollTop-i.offsetTop),e({ranges:l,scrollTop:n-=a})})),Ha(Ma(u,Ra(wa),Aa(Os)),o),Ha(Ma(i,Na(u),Ra((([,e])=>void 0!==e)),_a(),Aa((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:u}}),Ia(Gl,ll,ns,Xl,Ds));function Os(e){return{align:"start",index:0,offset:e.scrollTop}}const Hs=Ja((([{topItemsIndexes:e}])=>{const t=Va(0);return Ha(Ma(t,Ra((e=>e>=0)),Aa((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Ia(ys));function Cs(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const zs=Cs((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),Es=Ja((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:l},{listState:s},{beforeUnshiftWith:c,gap:u,shiftWithOffset:d,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Ga(Ma(s,Na(a),ja((([,e,t,n],[{bottom:r,items:o,offsetBottom:i,totalCount:a},l])=>{const s=r+i;let c=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(c=s-n,0!==c&&(c+=l))),[c,o,a,s]}),[0,[],0,0]),Ra((([e])=>0!==e)),Na(r,l,n,o,h,p),Ra((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===os)),Aa((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Qa.DEBUG),e)))));function m(n){n>0?(Da(t,{behavior:"auto",top:-n}),Da(e,0)):(Da(e,0),Da(t,{behavior:"auto",top:-n}))}return Ta(Ma(g,Na(e,i)),(([t,n,r])=>{r&&zs()?Da(e,n-t):m(-t)})),Ta(Ma(Xa(Ya(i,!1),e,p),Ra((([e,t,n])=>!e&&!n&&0!==t)),Aa((([e,t])=>t)),Wa(1)),m),Ha(Ma(d,Aa((e=>({top:-e})))),t),Ta(Ma(c,Na(f,u),Aa((([e,{groupIndices:t,lastSize:n,sizeTree:r},o])=>{function i(e){return e*(n+o)}if(0===t.length)return i(e);{let n=0;const o=dl(r,0);let a=0,l=0;for(;a<e;){a++,n+=o;let r=t.length===l+1?1/0:t[l+1]-t[l]-1;a+r>e&&(n-=o,r=e-a+1),a+=r,n+=i(r),l++}return n}}))),(n=>{Da(e,n),requestAnimationFrame((()=>{Da(t,{top:n}),requestAnimationFrame((()=>{Da(e,0),Da(p,!1)}))}))})),{deviation:e}}),Ia(ll,ls,ys,Gl,tl,Ol)),_s=Ja((([e,t,n,r,o,i,a,l,s,c])=>({...e,...t,...n,...r,...o,...i,...a,...l,...s,...c})),Ia(hs,$s,Xl,Ts,bs,Fs,Ss,Ds,Is,tl)),Rs=Ja((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:o,groupIndices:i,itemSize:a,sizeRanges:l,sizes:s,statefulTotalCount:c,totalCount:u,trackItemSizes:d},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,v,{listState:y,topItemsIndexes:b,...S},{scrollToIndex:x},w,{topItemCount:$},{groupCounts:F},B])=>(Ha(S.rangeChanged,B.scrollSeekRangeChanged),Ha(Ma(B.windowViewportRect,Aa((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:o,groupCounts:F,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:l,topItemCount:$,topItemsIndexes:b,totalCount:u,...v,groupIndices:i,itemSize:a,listState:y,scrollToIndex:x,statefulTotalCount:c,trackItemSizes:d,...S,...B,...g,sizes:s,...m})),Ia(Gl,ns,ll,ks,ws,ys,Ql,Es,Hs,Zl,_s));function As(e,t){const n={},r={};let o=0;const i=e.length;for(;o<i;)r[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const Ps=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Ms(e,n,r){const i=Object.keys(n.required||{}),a=Object.keys(n.optional||{}),l=Object.keys(n.methods||{}),s=Object.keys(n.events||{}),c=o.createContext({});function u(e,t){e.propsReady&&Da(e.propsReady,!1);for(const r of i){Da(e[n.required[r]],t[r])}for(const r of a)if(r in t){Da(e[n.optional[r]],t[r])}e.propsReady&&Da(e.propsReady,!0)}function d(e){return s.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?n===i?void 0:(r(),n=i,t=Ta(e,i),t):(r(),$a);case 2:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const f=o.forwardRef(((f,h)=>{const{children:p,...g}=f,[m]=o.useState((()=>Fa(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(r.map((e=>n(e))));return i&&t.set(o,a),a};return n(e)}(e),(e=>{u(e,g)})))),[v]=o.useState(xa(d,m));Ps((()=>{for(const e of s)e in g&&Ta(v[e],g[e]);return()=>{Object.values(v).map(ka)}}),[g,v,m]),Ps((()=>{u(m,g)})),o.useImperativeHandle(h,ya(function(e){return l.reduce(((t,r)=>(t[r]=t=>{Da(e[n.methods[r]],t)},t)),{})}(m)));const y=r;return t(c.Provider,{value:m,children:r?t(y,{...As([...i,...a,...s],g),children:p}):p})}));return{Component:f,useEmitter:(e,t)=>{const n=o.useContext(c)[e];Ps((()=>Ta(n,t)),[t,n])},useEmitterValue:o.version.startsWith("18")?e=>{const t=o.useContext(c)[e],n=o.useCallback((e=>Ta(t,e)),[t]);return o.useSyncExternalStore(n,(()=>Oa(t)),(()=>Oa(t)))}:e=>{const t=o.useContext(c)[e],[n,r]=o.useState(xa(Oa,t));return Ps((()=>Ta(t,(e=>{e!==n&&r(ya(e))}))),[t,n]),n},usePublisher:e=>{const t=o.useContext(c);return o.useCallback((n=>{Da(t[e],n)}),[t,e])}}}const js=o.createContext(void 0),Ls=o.createContext(void 0),Ws=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Ns(e){return"self"in e}function Vs(e,t,n,r=$a,i,a){const l=o.useRef(null),s=o.useRef(null),c=o.useRef(null),u=o.useCallback((n=>{let r,o,i;const l=n.target;if(function(e){return"body"in e}(l)||Ns(l)){const e=Ns(l)?l:l.defaultView;i=a?e.scrollX:e.scrollY,r=a?e.document.documentElement.scrollWidth:e.document.documentElement.scrollHeight,o=a?e.innerWidth:e.innerHeight}else i=a?l.scrollLeft:l.scrollTop,r=a?l.scrollWidth:l.scrollHeight,o=a?l.offsetWidth:l.offsetHeight;const u=()=>{e({scrollHeight:r,scrollTop:Math.max(i,0),viewportHeight:o})};n.suppressFlushSync?u():O.flushSync(u),null!==s.current&&(i===s.current||i<=0||i===r-o)&&(s.current=null,t(!0),c.current&&(clearTimeout(c.current),c.current=null))}),[e,t,a]);return o.useEffect((()=>{const e=i||l.current;return r(i||l.current),u({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",u,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",u)}}),[l,u,n,r,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),l.current.scrollBy(e)},scrollerRef:l,scrollToCallback:function(n){const r=l.current;if(!r||(a?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const o="smooth"===n.behavior;let i,u,d;Ns(r)?(u=Math.max(zl(r.document.documentElement,a?"width":"height"),a?r.document.documentElement.scrollWidth:r.document.documentElement.scrollHeight),i=a?r.innerWidth:r.innerHeight,d=a?window.scrollX:window.scrollY):(u=r[a?"scrollWidth":"scrollHeight"],i=zl(r,a?"width":"height"),d=r[a?"scrollLeft":"scrollTop"]);const f=u-i;if(n.top=Math.ceil(Math.max(Math.min(f,n.top),0)),rs(i,u)||n.top===d)return e({scrollHeight:u,scrollTop:d,viewportHeight:i}),void(o&&t(!0));o?(s.current=n.top,c.current&&clearTimeout(c.current),c.current=setTimeout((()=>{c.current=null,s.current=null,t(!0)}),1e3)):s.current=null,a&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const Ys="-webkit-sticky",Us="sticky",Gs=Cs((()=>{if(typeof document>"u")return Us;const e=document.createElement("div");return e.style.position=Ys,e.style.position===Ys?Ys:Us}));function Js(e){return e}const Zs=Ja((()=>{const e=Va((e=>`Item ${e}`)),t=Va(null),n=Va((e=>`Group ${e}`)),r=Va({}),o=Va(Js),i=Va("div"),a=Va($a),l=(e,t=null)=>Ya(Ma(r,Aa((t=>t[e])),_a()),t);return{components:r,computeItemKey:o,context:t,EmptyPlaceholder:l("EmptyPlaceholder"),FooterComponent:l("Footer"),GroupComponent:l("Group","div"),groupContent:n,HeaderComponent:l("Header"),HeaderFooterTag:i,ItemComponent:l("Item","div"),itemContent:e,ListComponent:l("List","div"),ScrollerComponent:l("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder"),TopItemListComponent:l("TopItemList")}})),Xs=Ja((([e,t])=>({...e,...t})),Ia(Rs,Zs)),qs=({height:e})=>t("div",{style:{height:e}}),Ks={overflowAnchor:"none",position:Gs(),zIndex:1},Qs={overflowAnchor:"none"},ec={...Qs,display:"inline-block",height:"100%"},tc=o.memo((function({showTopList:e=!1}){const n=yc("listState"),r=bc("sizeRanges"),i=yc("useWindowScroll"),a=yc("customScrollParent"),l=bc("windowScrollContainerState"),s=bc("scrollContainerState"),c=a||i?l:s,u=yc("itemContent"),d=yc("context"),f=yc("groupContent"),h=yc("trackItemSizes"),p=yc("itemSize"),m=yc("log"),v=bc("gap"),y=yc("horizontalDirection"),{callbackRef:b}=ol(r,p,h,e?$a:c,m,v,a,y,yc("skipAnimationFrameInResizeObserver")),[S,x]=o.useState(0);vc("deviation",(e=>{S!==e&&x(e)}));const w=yc("EmptyPlaceholder"),$=yc("ScrollSeekPlaceholder")||qs,F=yc("ListComponent"),B=yc("ItemComponent"),I=yc("GroupComponent"),T=yc("computeItemKey"),D=yc("isSeeking"),k=yc("groupIndices").length>0,O=yc("alignToBottom"),H=yc("initialItemFinalLocationReached"),C=e?{}:{boxSizing:"border-box",...y?{display:"inline-block",height:"100%",marginLeft:0!==S?S:O?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==S?S:O?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...H?{}:{visibility:"hidden"}};return!e&&0===n.totalCount&&w?t(w,{...ac(w,d)}):t(F,{...ac(F,d),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:b,style:C,children:(e?n.topItems:n.items).map((e=>{const t=e.originalIndex,r=T(t+n.firstItemIndex,e.data,d);return D?g($,{...ac($,d),height:e.size,index:e.index,key:r,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?g(I,{...ac(I,d),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:r,style:Ks},f(e.index,d)):g(B,{...ac(B,d),...lc(B,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:r,style:y?ec:Qs},k?u(e.index,e.groupIndex,e.data,d):u(e.index,e.data,d))}))})})),nc={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},rc={outline:"none",overflowX:"auto",position:"relative"},oc=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),ic={position:Gs(),top:0,width:"100%",zIndex:1};function ac(e,t){if("string"!=typeof e)return{context:t}}function lc(e,t){return{item:"string"==typeof e?void 0:t}}const sc=o.memo((function(){const e=yc("HeaderComponent"),n=bc("headerHeight"),r=yc("HeaderFooterTag"),i=nl(o.useMemo((()=>e=>{n(zl(e,"height"))}),[n]),!0,yc("skipAnimationFrameInResizeObserver")),a=yc("context");return e?t(r,{ref:i,children:t(e,{...ac(e,a)})}):null})),cc=o.memo((function(){const e=yc("FooterComponent"),n=bc("footerHeight"),r=yc("HeaderFooterTag"),i=nl(o.useMemo((()=>e=>{n(zl(e,"height"))}),[n]),!0,yc("skipAnimationFrameInResizeObserver")),a=yc("context");return e?t(r,{ref:i,children:t(e,{...ac(e,a)})}):null}));function uc({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:o,style:i,...a}){const l=r("scrollContainerState"),s=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),u=n("scrollerRef"),d=n("context"),f=n("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=Vs(l,c,s,u,void 0,f);return e("scrollTo",g),e("scrollBy",h),t(s,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?rc:nc,...i},tabIndex:0,...a,...ac(s,d),children:o})}))}function dc({useEmitter:e,useEmitterValue:n,usePublisher:r}){return o.memo((function({children:i,style:a,...l}){const s=r("windowScrollContainerState"),c=n("ScrollerComponent"),u=r("smoothScrollTargetReached"),d=n("totalListHeight"),f=n("deviation"),h=n("customScrollParent"),p=n("context"),g=o.useRef(null),m=n("scrollerRef"),{scrollByCallback:v,scrollerRef:y,scrollToCallback:b}=Vs(s,u,c,m,h);return Ws((()=>{var e;return y.current=h||(null==(e=g.current)?void 0:e.ownerDocument.defaultView),()=>{y.current=null}}),[y,h]),e("windowScrollTo",b),e("scrollBy",v),t(c,{ref:g,"data-virtuoso-scroller":!0,style:{position:"relative",...a,...0!==d?{height:d+f}:{}},...l,...ac(c,p),children:i})}))}const fc=({children:e})=>{const n=o.useContext(js),r=bc("viewportHeight"),i=bc("fixedItemHeight"),a=yc("alignToBottom"),l=yc("horizontalDirection"),s=nl(o.useMemo((()=>Sa(r,(e=>zl(e,l?"width":"height")))),[r,l]),!0,yc("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),t("div",{"data-viewport-type":"element",ref:s,style:oc(a),children:e})},hc=({children:e})=>{const n=o.useContext(js),r=bc("windowViewportRect"),i=bc("fixedItemHeight"),a=yc("customScrollParent"),l=al(r,a,yc("skipAnimationFrameInResizeObserver")),s=yc("alignToBottom");return o.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),t("div",{"data-viewport-type":"window",ref:l,style:oc(s),children:e})},pc=({children:e})=>{const n=yc("TopItemListComponent")||"div",r=yc("headerHeight"),o={...ic,marginTop:`${r}px`},i=yc("context");return t(n,{style:o,...ac(n,i),children:e})},gc=o.memo((function(n){const r=yc("useWindowScroll"),o=yc("topItemsIndexes").length>0,i=yc("customScrollParent"),a=yc("context"),l=i||r?xc:Sc,s=i||r?hc:fc;return e(l,{...n,...ac(l,a),children:[o&&t(pc,{children:t(tc,{showTopList:!0})}),e(s,{children:[t(sc,{}),t(tc,{}),t(cc,{})]})]})})),{Component:mc,useEmitter:vc,useEmitterValue:yc,usePublisher:bc}=Ms(Xs,{required:{},optional:{restoreStateFrom:"restoreStateFrom",context:"context",followOutput:"followOutput",itemContent:"itemContent",groupContent:"groupContent",overscan:"overscan",increaseViewportBy:"increaseViewportBy",totalCount:"totalCount",groupCounts:"groupCounts",topItemCount:"topItemCount",firstItemIndex:"firstItemIndex",initialTopMostItemIndex:"initialTopMostItemIndex",components:"components",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",computeItemKey:"computeItemKey",defaultItemHeight:"defaultItemHeight",fixedItemHeight:"fixedItemHeight",itemSize:"itemSize",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"HeaderFooterTag",data:"data",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",alignToBottom:"alignToBottom",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",horizontalDirection:"horizontalDirection",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver"},methods:{scrollToIndex:"scrollToIndex",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollBy:"scrollBy",autoscrollToBottom:"autoscrollToBottom",getState:"getState"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",totalListHeightChanged:"totalListHeightChanged",itemsRendered:"itemsRendered",groupIndices:"groupIndices"}},gc),Sc=uc({useEmitter:vc,useEmitterValue:yc,usePublisher:bc}),xc=dc({useEmitter:vc,useEmitterValue:yc,usePublisher:bc}),wc=mc,$c={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Fc={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Bc,floor:Ic,max:Tc,min:Dc,round:kc}=Math;function Oc(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function Hc(e,t){return e&&e.width===t.width&&e.height===t.height}function Cc(e,t){return e&&e.column===t.column&&e.row===t.row}const zc=Ja((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:l,scrollTo:s,scrollTop:c,smoothScrollTargetReached:u,viewportHeight:d},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:v,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S},x])=>{const w=Va(0),$=Va(0),F=Va($c),B=Va({height:0,width:0}),I=Va({height:0,width:0}),T=Ua(),D=Ua(),k=Va(0),O=Va(null),H=Va({column:0,row:0}),C=Ua(),z=Ua(),E=Va(!1),_=Va(0),R=Va(!0),A=Va(!1),P=Va(!1);Ta(Ma(p,Na(_),Ra((([e,t])=>!!t))),(()=>{Da(R,!1)})),Ta(Ma(Xa(p,R,I,B,_,A),Ra((([e,t,n,r,,o])=>e&&!t&&0!==n.height&&0!==r.height&&!o))),(([,,,,e])=>{Da(A,!0),es(1,(()=>{Da(T,e)})),Ca(Ma(c),(()=>{Da(t,[0,0]),Da(R,!0)}))})),Ha(Ma(z,Ra((e=>null!=e&&e.scrollTop>0)),Pa(0)),$),Ta(Ma(p,Na(z),Ra((([,e])=>null!=e))),(([,e])=>{e&&(Da(B,e.viewport),Da(I,e.item),Da(H,e.gap),e.scrollTop>0&&(Da(E,!0),Ca(Ma(c,La(1)),(e=>{Da(E,!1)})),Da(s,{top:e.scrollTop})))})),Ha(Ma(B,Aa((({height:e})=>e))),d),Ha(Ma(Xa(qa(B,Hc),qa(I,Hc),qa(H,((e,t)=>e&&e.column===t.column&&e.row===t.row)),qa(c)),Aa((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),C),Ha(Ma(Xa(qa(w),r,qa(H,Cc),qa(I,Hc),qa(B,Hc),qa(O),qa($),qa(E),qa(R),qa(_)),Ra((([,,,,,,,e])=>!e)),Aa((([e,[t,n],r,o,i,a,l,,s,c])=>{const{column:u,row:d}=r,{height:f,width:h}=o,{width:p}=i;if(0===l&&(0===e||0===p))return $c;if(0===h){const t=ts(c,e);return function(e){return{...Fc,items:e}}(Oc(t,t+Math.max(l-1,0),a))}const g=Ec(p,h,u);let m,v;s?0===t&&0===n&&l>0?(m=0,v=l-1):(m=g*Ic((t+d)/(f+d)),v=g*Bc((n+d)/(f+d))-1,v=Dc(e-1,Tc(v,g-1)),m=Dc(v,Tc(0,m))):(m=0,v=-1);const y=Oc(m,v,a),{bottom:b,top:S}=_c(i,r,o,y),x=Bc(e/g);return{bottom:b,itemHeight:f,items:y,itemWidth:h,offsetBottom:x*f+(x-1)*d-b,offsetTop:S,top:S}}))),F),Ha(Ma(O,Ra((e=>null!==e)),Aa((e=>e.length))),w),Ha(Ma(Xa(B,I,F,H),Ra((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),Aa((([e,t,{items:n},r])=>{const{bottom:o,top:i}=_c(e,r,t,n);return[i,o]})),_a(kl)),t);const M=Va(!1);Ha(Ma(c,Na(M),Aa((([e,t])=>t||0!==e))),M);const j=Ga(Ma(Xa(F,w),Ra((([{items:e}])=>e.length>0)),Na(M),Ra((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),Aa((([[,e]])=>e-1)),_a())),L=Ga(Ma(qa(F),Ra((({items:e})=>e.length>0&&0===e[0].index)),Pa(0),_a())),W=Ga(Ma(qa(F),Na(E),Ra((([{items:e},t])=>e.length>0&&!t)),Aa((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),_a(Dl),Wa(0)));Ha(W,h.scrollSeekRangeChanged),Ha(Ma(T,Na(B,I,w,H),Aa((([e,t,n,r,o])=>{const i=Kl(e),{align:a,behavior:l,offset:s}=i;let c=i.index;"LAST"===c&&(c=r-1),c=Tc(0,c,Dc(r-1,c));let u=Rc(t,o,n,c);return"end"===a?u=kc(u-t.height+n.height):"center"===a&&(u=kc(u-t.height/2+n.height/2)),s&&(u+=s),{behavior:l,top:u}}))),s);const N=Ya(Ma(F,Aa((e=>e.offsetBottom+e.bottom))),0);return Ha(Ma(S,Aa((e=>({height:e.visibleHeight,width:e.visibleWidth})))),B),{customScrollParent:m,data:O,deviation:k,footerHeight:o,gap:H,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:I,overscan:n,restoreStateFrom:z,scrollBy:a,scrollContainerState:l,scrollHeight:D,scrollTo:s,scrollToIndex:T,scrollTop:c,smoothScrollTargetReached:u,totalCount:w,useWindowScroll:v,viewportDimensions:B,windowScrollContainerState:y,windowScrollTo:b,windowViewportRect:S,...h,gridState:F,horizontalDirection:P,initialTopMostItemIndex:_,totalListHeight:N,...f,endReached:j,propsReady:g,rangeChanged:W,startReached:L,stateChanged:C,stateRestoreInProgress:E,...x}}),Ia(hs,ll,ls,Ts,Xl,Ds,tl));function Ec(e,t,n){return Tc(1,Ic((e+n)/(Ic(t)+n)))}function _c(e,t,n,r){const{height:o}=n;if(void 0===o||0===r.length)return{bottom:0,top:0};const i=Rc(e,t,n,r[0].index);return{bottom:Rc(e,t,n,r[r.length-1].index)+o,top:i}}function Rc(e,t,n,r){const o=Ec(e.width,n.width,t.column),i=Ic(r/o),a=i*n.height+Tc(0,i-1)*t.row;return a>0?a+t.row:a}const Ac=Ja((()=>{const e=Va((e=>`Item ${e}`)),t=Va({}),n=Va(null),r=Va("virtuoso-grid-item"),o=Va("virtuoso-grid-list"),i=Va(Js),a=Va("div"),l=Va($a),s=(e,n=null)=>Ya(Ma(t,Aa((t=>t[e])),_a()),n),c=Va(!1),u=Va(!1);return Ha(qa(u),c),{components:t,computeItemKey:i,context:n,FooterComponent:s("Footer"),HeaderComponent:s("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:s("Item","div"),itemContent:e,listClassName:o,ListComponent:s("List","div"),readyStateChanged:c,reportReadyState:u,ScrollerComponent:s("Scroller","div"),scrollerRef:l,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder","div")}})),Pc=Ja((([e,t])=>({...e,...t})),Ia(zc,Ac)),Mc=o.memo((function(){const e=Gc("gridState"),n=Gc("listClassName"),r=Gc("itemClassName"),i=Gc("itemContent"),a=Gc("computeItemKey"),l=Gc("isSeeking"),s=Jc("scrollHeight"),c=Gc("ItemComponent"),u=Gc("ListComponent"),d=Gc("ScrollSeekPlaceholder"),f=Gc("context"),h=Jc("itemDimensions"),p=Jc("gap"),m=Gc("log"),v=Gc("stateRestoreInProgress"),y=Jc("reportReadyState"),b=nl(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;s(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();h({height:e,width:t})}p({column:qc("column-gap",getComputedStyle(e).columnGap,m),row:qc("row-gap",getComputedStyle(e).rowGap,m)})}),[s,h,p,m]),!0,!1);return Ws((()=>{e.itemHeight>0&&e.itemWidth>0&&y(!0)}),[e]),v?null:t(u,{className:n,ref:b,...ac(u,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((n=>{const o=a(n.index,n.data,f);return l?t(d,{...ac(d,f),height:e.itemHeight,index:n.index,width:e.itemWidth},o):g(c,{...ac(c,f),className:r,"data-index":n.index,key:o},i(n.index,n.data,f))}))})})),jc=o.memo((function(){const e=Gc("HeaderComponent"),n=Jc("headerHeight"),r=Gc("headerFooterTag"),i=nl(o.useMemo((()=>e=>{n(zl(e,"height"))}),[n]),!0,!1),a=Gc("context");return e?t(r,{ref:i,children:t(e,{...ac(e,a)})}):null})),Lc=o.memo((function(){const e=Gc("FooterComponent"),n=Jc("footerHeight"),r=Gc("headerFooterTag"),i=nl(o.useMemo((()=>e=>{n(zl(e,"height"))}),[n]),!0,!1),a=Gc("context");return e?t(r,{ref:i,children:t(e,{...ac(e,a)})}):null})),Wc=({children:e})=>{const n=o.useContext(Ls),r=Jc("itemDimensions"),i=Jc("viewportDimensions"),a=nl(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),t("div",{ref:a,style:oc(!1),children:e})},Nc=({children:e})=>{const n=o.useContext(Ls),r=Jc("windowViewportRect"),i=Jc("itemDimensions"),a=Gc("customScrollParent"),l=al(r,a,!1);return o.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),t("div",{ref:l,style:oc(!1),children:e})},Vc=o.memo((function({...n}){const r=Gc("useWindowScroll"),o=Gc("customScrollParent"),i=o||r?Xc:Zc,a=o||r?Nc:Wc,l=Gc("context");return t(i,{...n,...ac(i,l),children:e(a,{children:[t(jc,{}),t(Mc,{}),t(Lc,{})]})})})),{Component:Yc,useEmitter:Uc,useEmitterValue:Gc,usePublisher:Jc}=Ms(Pc,{optional:{context:"context",totalCount:"totalCount",overscan:"overscan",itemContent:"itemContent",components:"components",computeItemKey:"computeItemKey",data:"data",initialItemCount:"initialItemCount",scrollSeekConfiguration:"scrollSeekConfiguration",headerFooterTag:"headerFooterTag",listClassName:"listClassName",itemClassName:"itemClassName",useWindowScroll:"useWindowScroll",customScrollParent:"customScrollParent",scrollerRef:"scrollerRef",logLevel:"logLevel",restoreStateFrom:"restoreStateFrom",initialTopMostItemIndex:"initialTopMostItemIndex",increaseViewportBy:"increaseViewportBy"},methods:{scrollTo:"scrollTo",scrollBy:"scrollBy",scrollToIndex:"scrollToIndex"},events:{isScrolling:"isScrolling",endReached:"endReached",startReached:"startReached",rangeChanged:"rangeChanged",atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",stateChanged:"stateChanged",readyStateChanged:"readyStateChanged"}},Vc),Zc=uc({useEmitter:Uc,useEmitterValue:Gc,usePublisher:Jc}),Xc=dc({useEmitter:Uc,useEmitterValue:Gc,usePublisher:Jc});function qc(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,Qa.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Kc={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${na.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${na.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${na.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${na.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${na.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${na.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Qc=e=>t=>{var n;const r=t.theme,o=Li(Kc,r[Wi.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ji(o,e,r.options.designToken):ji(o,e)},eu={InputBoxShadow:Qc("InputBoxShadow"),InputErrorBoxShadow:Qc("InputErrorBoxShadow"),ElevationBoxShadow:Qc("ElevationBoxShadow"),Table:{Header:Qc("Table.Header"),Cell:{Primary:Qc("Table.Cell.Primary"),Secondary:Qc("Table.Cell.Secondary"),Selected:Qc("Table.Cell.Selected"),Hover:Qc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Qc("Button.Danger.BackgroundColor"),Hover:Qc("Button.Danger.Hover"),Primary:Qc("Button.Danger.Primary"),Border:Qc("Button.Danger.Border")}}},tu={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},nu=e=>Object.keys(tu).reduce(((t,n)=>{const r=tu[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ru=nu("max-width"),ou=(nu("min-width"),tu),iu=v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,au=S`
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
    border-color: ${e=>e.$color||na.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${au} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,su=v(lu)`
    animation-delay: -0.45s;
`,cu=v(lu)`
    animation-delay: -0.3s;
`,uu=v(lu)`
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
                    background-color: ${na.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?eu.Button.Danger.Border:na.Primary};

                    color: ${e.$buttonIsDanger?eu.Button.Danger.Primary:na.Primary};
                `;case"light":return y`
                    background-color: ${na.Neutral[8]};
                    border: 1px solid ${na.Neutral[5]};

                    color: ${e.$buttonIsDanger?eu.Button.Danger.Primary:na.Primary};
                `;case"disabled":return y`
                    background-color: ${na.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${na.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?eu.Button.Danger.Primary:na.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?eu.Button.Danger.Hover:na.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?eu.Button.Danger.BackgroundColor:na.Primary};
                    border: 1px solid transparent;

                    ${ru.mobileL} {
                        width: 100%;
                    }

                    color: ${na.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${qi("H5","semibold")}

                    ${ru.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${qi("H4","semibold")}

                    ${ru.mobileS} {
                        height: auto;
                    }
                `}
`;const du=v((({color:n,className:r,size:o=18})=>e(iu,Object.assign({className:r,$size:o,$color:n,"data-testid":"component-loading-spinner"},{children:[t(lu,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(su,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(cu,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(uu,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?eu.Button.Danger.Primary:na.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=na.Neutral[3](e);break;default:t=na.Neutral[8](e)}return y`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var fu={exports:{}};fu.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",S={};S[b]=m;var x="$isDayjsObject",w=function(e){return e instanceof I||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();S[i]&&(o=i),n&&(S[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;S[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new I(n)},B=y;B.l=$,B.i=w,B.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var I=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),h=function(e,t){var o=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,S=(g<b?g+7:g)-b;return h(r?v-S:v+(6-S),m);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=B.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[B.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=B.p(u),g=function(e){var t=F(h);return B.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return B.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=B.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return B.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return l+1;case"MM":return B.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return B.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=B.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,S=function(){return B.m(g,v)};switch(m){case d:p=S()/12;break;case c:p=S();break;case u:p=S()/3;break;case s:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:B.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return S[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),T=I.prototype;return F.prototype=T,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,I,F),e.$i=!0),F},F.locale=$,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=S[b],F.Ls=S,F.p={},F}();var hu=J(fu.exports),pu={exports:{}};pu.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,o=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},l=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},f={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[o,s("seconds")],ss:[o,s("seconds")],m:[o,s("minutes")],mm:[o,s("minutes")],H:[o,s("hours")],h:[o,s("hours")],HH:[o,s("hours")],hh:[o,s("hours")],D:[o,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[o,s("week")],ww:[r,s("week")],M:[o,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=l(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,o;r=n,o=a&&a.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=i.length,s=0;s<l;s+=1){var c=i[s],u=f[c],d=u&&u[0],h=u&&u[1];i[s]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=i[n];if("string"==typeof o)r+=o.length;else{var a=o.regex,s=o.parser,c=e.slice(r),u=a.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(l=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,i=e.args;this.$u=r;var l=i[1];if("string"==typeof l){var s=!0===i[2],c=!0===i[3],u=s||c,d=i[2];c&&(d=i[2]),a=this.$locale(),!s&&d&&(a=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var o=h(t)(e),i=o.year,a=o.month,l=o.day,s=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,f=o.zone,p=o.week,g=new Date,m=l||(i||a?1:g.getDate()),v=i||g.getFullYear(),y=0;i&&!a||(y=a>0?a-1:g.getMonth());var b,S=s||0,x=c||0,w=u||0,$=d||0;return f?new Date(Date.UTC(v,y,m,S,x,w,$+60*f.offset*1e3)):n?new Date(Date.UTC(v,y,m,S,x,w,$)):(b=new Date(v,y,m,S,x,w,$),p&&(b=r(b).week(p).toDate()),b)}catch(e){return new Date("")}}(t,l,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var f=l.length,p=1;p<=f;p+=1){i[1]=l[p-1];var g=n.apply(this,i);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var gu=J(pu.exports),mu={exports:{}};mu.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var vu=J(mu.exports),yu={exports:{}};yu.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var bu=J(yu.exports),Su={exports:{}};Su.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var xu,wu,$u=J(Su.exports),Fu={exports:{}};Fu.exports=(xu={year:0,month:1,day:2,hour:3,minute:4,second:5},wu={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=wu[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),wu[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=xu[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o,i=this.utcOffset(),a=this.toDate(),l=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(l))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-s;if(Number(c)){if(o=n(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=o.utcOffset();o=o.add(i-u,"minute")}}else o=this.utcOffset(0,t);return o.$x.$timezone=e,o},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var Bu,Iu=J(Fu.exports);hu.extend(vu),hu.extend($u),hu.extend(bu),hu.extend(gu),hu.extend(Iu),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=hu(t).startOf("week");return Tu(n).map((e=>Du(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Du(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(hu(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+hu(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=hu(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?hu(r):void 0,o?hu(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Bu||(Bu={}));const Tu=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Du=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},ku=[1,3,5,7,8,10,12],Ou=[4,6,9,11];var Hu,Cu,zu;function Eu(e){const t=i(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":ku.includes(i)?Math.min(o,31).toString():Ou.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=hu(e,n);return hu(t,n).diff(r,"minute")},e.toDayjs=e=>e?hu(e):hu(),e.addMinutesToTime=(e,t,n="HH:mm")=>hu(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>hu(e).isSame(hu(t),n)}(Hu||(Hu={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!hu(e).isBefore(r,"day"))||!(!o||!hu(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(hu(e).isValid())return e}return""}}(Cu||(Cu={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(zu||(zu={}));o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}});const _u=y`
    border: 1px solid ${na.Accent.Light[1]};
    box-shadow: ${eu.InputBoxShadow};
`,Ru=y`
    border: 1px solid ${na.Accent.Light[1]};
    box-shadow: none;
`,Au=y`
    border: 1px solid ${na.Neutral[5]};
    box-shadow: none;
`,Pu=y`
    border: 1px solid ${na.Validation.Red.Border};
    box-shadow: ${eu.InputErrorBoxShadow};
`,Mu=v.div`
    border: 1px solid ${na.Neutral[5]};
    border-radius: 4px;
    background: ${na.Neutral[8]};

    :focus-within {
        ${_u}
    }
    ${e=>e.$focused&&_u}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ru}
                }
                ${e.$focused&&Ru}
            `:e.$disabled?y`
                background: ${na.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Au}
                }
                ${e.$focused&&Au}
            `:e.$error?y`
                border: 1px solid ${na.Validation.Red.Border};

                :focus-within {
                    ${Pu}
                }
                ${e.$focused&&Pu}
            `:void 0}
`;v(Mu)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ju=v.input`
    ${e=>qi("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${na.Neutral[1]};
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
        color: ${na.Neutral[3]};
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
`,Lu=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${na.Primary};
    }
`,Wu=v.div`
    overflow: hidden;
    border: 1px solid ${na.Neutral[5]};
    border-radius: 4px;
    background: ${na.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${ru.mobileL} {
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
        background: ${na.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Nu=v.div`
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

    outline-color: ${na.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${na.Accent.Light[5]};
        `}
`,v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${na.Primary};
`,v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`;const Vu=v(F)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${na.Primary};
`,Yu=v($)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${na.Accent.Light[2]};
`,Uu=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Gu=v(Lu)`
    ${e=>qi("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${na.Primary};
`,Ju=v(Gu)`
    outline-offset: 0.25rem;
`,Zu=v(Gu)`
    padding: 0.5rem 1rem;
`,Xu=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,qu=v.div`
    ${e=>qi("small"===e.$variant?"BodySmall":"Body","regular")}
`,Ku=v(w)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${na.Validation.Red.Icon};
`,Qu=v.button`
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
                background-color: ${na.Neutral[7]};
            `}
    }
`,ed=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=Qi(e,["children","focusHighlight","focusOutline","type"]);return t(Qu,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),td=e=>"small"===e?1:1.125,nd=e=>y`
        height: ${td(e)}rem;
        width: ${td(e)}rem;
    `,rd=v.div`
    background: ${na.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,od=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,id=v(ju)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,ad=v(T)`
    color: ${na.Neutral[3]};
    flex-shrink: 0;
    ${e=>nd(e.$variant)}
`,ld=v(ed)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${na.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${nd(e.$variant)}
            }
        `}
`,sd=m(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=Qi(n,["value","variant","onClear"]);return e(rd,{children:[e(od,{children:[t(ad,{$variant:i,"aria-hidden":!0}),t(id,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(ld,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(I,{"aria-hidden":!0})}))]})})),cd="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",ud=v(Lu)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>qi("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,dd=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${cd};

    svg {
        color: ${na.Neutral[3]};
        ${e=>{const t="small"===e.$variant?Yi.BodySmall.fontSize:Yi.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,fd=m((({children:n,disabled:r,expanded:o,listboxId:i,popupRole:a,readOnly:l,variant:s},c)=>e(ud,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":a,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s},{children:[n,!l&&t(dd,Object.assign({$expanded:o,$variant:s},{children:t(D,{"aria-hidden":!0})}))]}))));var hd=Symbol.for("immer-nothing"),pd=Symbol.for("immer-draftable"),gd=Symbol.for("immer-state"),md="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function vd(e,...t){if("production"!==process.env.NODE_ENV){const n=md[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var yd=Object.getPrototypeOf;function bd(e){return!!e&&!!e[gd]}function Sd(e){return!!e&&(wd(e)||Array.isArray(e)||!!e[pd]||!!e.constructor?.[pd]||Td(e)||Dd(e))}var xd=Object.prototype.constructor.toString();function wd(e){if(!e||"object"!=typeof e)return!1;const t=yd(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===xd}function $d(e,t){0===Fd(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function Fd(e){const t=e[gd];return t?t.type_:Array.isArray(e)?1:Td(e)?2:Dd(e)?3:0}function Bd(e,t){return 2===Fd(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Id(e,t,n){const r=Fd(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Td(e){return e instanceof Map}function Dd(e){return e instanceof Set}function kd(e){return e.copy_||e.base_}function Od(e,t){if(Td(e))return new Map(e);if(Dd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=wd(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[gd];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(yd(e),t)}{const t=yd(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function Hd(e,t=!1){return zd(e)||bd(e)||!Sd(e)||(Fd(e)>1&&(e.set=e.add=e.clear=e.delete=Cd),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Hd(t,!0)))),e}function Cd(){vd(2)}function zd(e){return Object.isFrozen(e)}var Ed,_d={};function Rd(e){const t=_d[e];return t||vd(0,e),t}function Ad(){return Ed}function Pd(e,t){t&&(Rd("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Md(e){jd(e),e.drafts_.forEach(Wd),e.drafts_=null}function jd(e){e===Ed&&(Ed=e.parent_)}function Ld(e){return Ed={drafts_:[],parent_:Ed,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Wd(e){const t=e[gd];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Nd(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[gd].modified_&&(Md(t),vd(4)),Sd(e)&&(e=Vd(t,e),t.parent_||Ud(t,e)),t.patches_&&Rd("Patches").generateReplacementPatches_(n[gd].base_,e,t.patches_,t.inversePatches_)):e=Vd(t,n,[]),Md(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==hd?e:void 0}function Vd(e,t,n){if(zd(t))return t;const r=t[gd];if(!r)return $d(t,((o,i)=>Yd(e,r,t,o,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return Ud(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,i=!1;3===r.type_&&(o=new Set(t),t.clear(),i=!0),$d(o,((o,a)=>Yd(e,r,t,o,a,n,i))),Ud(e,t,!1),n&&e.patches_&&Rd("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function Yd(e,t,n,r,o,i,a){if("production"!==process.env.NODE_ENV&&o===n&&vd(5),bd(o)){const a=Vd(e,o,i&&t&&3!==t.type_&&!Bd(t.assigned_,r)?i.concat(r):void 0);if(Id(n,r,a),!bd(a))return;e.canAutoFreeze_=!1}else a&&n.add(o);if(Sd(o)&&!zd(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Vd(e,o),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||Ud(e,o)}}function Ud(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Hd(t,n)}var Gd={get(e,t){if(t===gd)return e;const n=kd(e);if(!Bd(n,t))return function(e,t,n){const r=Xd(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!Sd(r)?r:r===Zd(e.base_,t)?(Kd(e),e.copy_[t]=Qd(r,e)):r},has:(e,t)=>t in kd(e),ownKeys:e=>Reflect.ownKeys(kd(e)),set(e,t,n){const r=Xd(kd(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=Zd(kd(e),t),o=r?.[gd];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||Bd(e.base_,t)))return!0;Kd(e),qd(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Zd(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Kd(e),qd(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=kd(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){vd(11)},getPrototypeOf:e=>yd(e.base_),setPrototypeOf(){vd(12)}},Jd={};function Zd(e,t){const n=e[gd];return(n?kd(n):e)[t]}function Xd(e,t){if(!(t in e))return;let n=yd(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=yd(n)}}function qd(e){e.modified_||(e.modified_=!0,e.parent_&&qd(e.parent_))}function Kd(e){e.copy_||(e.copy_=Od(e.base_,e.scope_.immer_.useStrictShallowCopy_))}$d(Gd,((e,t)=>{Jd[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Jd.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&vd(13),Jd.set.call(this,e,t,void 0)},Jd.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&vd(14),Gd.set.call(this,e[0],t,n,e[0])};function Qd(e,t){const n=Td(e)?Rd("MapSet").proxyMap_(e,t):Dd(e)?Rd("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Ad(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=Gd;n&&(o=[r],i=Jd);const{revoke:a,proxy:l}=Proxy.revocable(o,i);return r.draft_=l,r.revoke_=a,l}(e,t);return(t?t.scope_:Ad()).drafts_.push(n),n}function ef(e){if(!Sd(e)||zd(e))return e;const t=e[gd];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Od(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Od(e,!0);return $d(n,((e,t)=>{Id(n,e,ef(t))})),t&&(t.finalized_=!1),n}var tf=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...o){return r.produce(e,(e=>t.call(this,e,...o)))}}let r;if("function"!=typeof t&&vd(6),void 0!==n&&"function"!=typeof n&&vd(7),Sd(e)){const o=Ld(this),i=Qd(e,void 0);let a=!0;try{r=t(i),a=!1}finally{a?Md(o):jd(o)}return Pd(o,n),Nd(r,o)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===hd&&(r=void 0),this.autoFreeze_&&Hd(r,!0),n){const t=[],o=[];Rd("Patches").generateReplacementPatches_(e,r,t,o),n(t,o)}return r}vd(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Sd(e)||vd(8),bd(e)&&(e=function(e){bd(e)||vd(10,e);return ef(e)}(e));const t=Ld(this),n=Qd(e,void 0);return n[gd].isManual_=!0,jd(t),n}finishDraft(e,t){const n=e&&e[gd];n&&n.isManual_||vd(9);const{scope_:r}=n;return Pd(r,t),Nd(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Rd("Patches").applyPatches_;return bd(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},nf=tf.produce;tf.produceWithPatches.bind(tf),tf.setAutoFreeze.bind(tf),tf.setUseStrictShallowCopy.bind(tf),tf.applyPatches.bind(tf),tf.createDraft.bind(tf),tf.finishDraft.bind(tf);const rf=(e,t,n)=>nf(e,(e=>{for(let r=e.length-1;r>=0;r--){const o=e[r],i=of(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&n&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?o.checked=!0:r&&(o.checked="mixed")}}})),of=e=>e.join(","),af=e=>new Set(e.map((e=>e.join(",")))),lf=v.li`
    display: ${e=>e.$visible?"flex":"none"};
`,sf=v.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${na.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${na.Accent.Light[5]};
        `}
`,cf=v.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,uf=v.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${na.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return y`
                    transform: rotate(90deg);
                `}}
    }
`,df=v.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,ff=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,hf=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${na.Primary};
`,pf=v(C)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${na.Primary};
`,gf=({listItems:n,multiSelect:r,selectedKeyPaths:o,itemsLoadState:l="success",itemTruncationType:s="end",itemMaxLines:c=2,variant:u="default",listboxId:f,width:h,mode:g="default",selectableCategory:m,onSelectItem:v,onSelectAll:y,onRetry:b,enableSearch:S,hideNoResultsDisplay:x,searchPlaceholder:w="Search",onSearch:$})=>{const F=r||m,[B,I]=a(""),T=B.toLowerCase().trim(),[D,O]=a(!1),H=i(),C=i(),z=i([]),E=i(),_=(()=>{const[e,t]=a(!1);return d((()=>{t(!0)}),[]),e})(),[R,A]=a([]),[P,M]=a([]),j=D?P:R,L=p((()=>{let e=0;for(const t of R)t.level>e&&(e=t.level);return e}),[R]),[W,N]=a(0),[V,Y]=a([]),[U,G]=a(0),J=e=>{const t=e.target.value;I(t),""===t?O(!1):t.trim().length>=3&&O(!0),null==$||$()},Z=()=>{var e;I(""),O(!1),null===(e=E.current)||void 0===e||e.focus(),null==$||$()},X=()=>{null==b||b()},q=()=>{if(0===o.size){const e=[],t=[];R.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==y||y(e,t)}else null==y||y([],[])},K=Eu(((e,t)=>((e,t,n,r,o)=>{const i=[],a=(e,l)=>{const s=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((u,d)=>{var f,h;const p=l?l.level+1:0,g=l?[...l.keyPath,u.key]:[u.key],m=of(g),v={item:u,index:i.length,indexInParent:d,parentSetSize:e.length,keyPath:g,parentIndex:l?l.index:-1,parentKeyPath:l?l.keyPath:[],level:p,visible:0===p||o||(null==l?void 0:l.expanded),expanded:o,checked:t.has(m),hasSubItems:!!(null===(f=u.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==u.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(s.push(v),i.push(v),null===(h=u.subItems)||void 0===h?void 0:h.length){const e=a(u.subItems,v);if(n&&!0!==v.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?v.checked=!0:n&&(v.checked="mixed")}v.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),v.subItemIndexes=e.map((e=>e.index))}})),s};return a(e,void 0),i})(e,o,r,T,t))),Q=Eu((e=>{return o.size?(t=K(e,!1),nf(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>nf(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const o=e[t].keyPath.length;if(o>r)r=o;else if(o<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],o=r.keyPath.slice(0,-1),i=e[n].keyPath.slice(0,o.length);co(o,i)&&(r.visible=!0)}return e})))(K(e,!1));var t})),ee=Eu((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(T))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),te=Eu((()=>{A((e=>rf(e,o,r))),D&&M((e=>rf(e,o,r)))})),ne=(e,t,n)=>{const r=((e,t,n)=>nf(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,r.length);if(!co(r,a))break;t.visible=n&&i.expanded&&i.visible}})))(j,e,t);N(e),G(n),D?M(r):A(r)};((e,t,n="window",r)=>{const o=i();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(j,(e=>e.visible),W+1);t&&(G((e=>e+1)),N(t.index),z.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(j,(e=>e.visible),W-1);t?(G((e=>e-1)),N(t.index),z.current[t.index].focus()):0===U&&E.current&&(E.current.focus(),G(-1),N(-1));break}case"ArrowRight":e.preventDefault(),ne(W,!0,U);break;case"ArrowLeft":e.preventDefault(),ne(W,!1,U);break;case"Space":if(document.activeElement===z.current[W]){e.preventDefault();const t=j[W];if(t.hasSubItems&&!F)return;null==v||v(t)}}})),d((()=>{let e;"default"===g?e=Q(n):"expand"===g?e=K(n,!0):"collapse"===g&&(e=K(n,!1)),A(e)}),[K,Q,n,g]),d((()=>{Y(j.filter((e=>e.visible)))}),[D,j]),d((()=>{te()}),[r,o,te]),d((()=>{if(D&&B.trim().length>=3){const e=ee(n),t=(e=>nf(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(K(e,!1));M(t)}}),[ee,K,n,D,B]),d((()=>{_||(E.current?(N(-1),G(-1),setTimeout((()=>{var e;return null===(e=E.current)||void 0===e?void 0:e.focus()}),200)):z.current[W]?setTimeout((()=>{var e;return null===(e=z.current[W])||void 0===e?void 0:e.focus()}),200):(N(0),G(0),setTimeout((()=>{var e;return null===(e=z.current[0])||void 0===e?void 0:e.focus()}),200)))}),[W,U,_]);const re=()=>{if(S&&"success"===l)return t(sd,{ref:E,onChange:J,value:B,placeholder:w,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Z,variant:u})},oe=()=>{if(r&&!D&&R.length>0&&"success"===l)return t(Uu,{children:t(Zu,Object.assign({onClick:q,type:"button",$variant:u},{children:0===o.size?"Select all":"Clear all"}))})},ie=()=>{if(!x&&D&&0===P.length&&"success"===l)return e(Xu,Object.assign({"data-testid":"list-no-results"},{children:[t(Ku,{$variant:u}),t(qu,Object.assign({$variant:u},{children:"No results found."}))]}))},ae=()=>{if(b&&"loading"===l){const n="small"===u?16:18;return e(Xu,Object.assign({"data-testid":"list-loading"},{children:[t(du,{$buttonStyle:"secondary",size:n}),t(qu,Object.assign({$variant:u},{children:"Loading..."}))]}))}},le=()=>{if(b&&"fail"===l)return e(Xu,Object.assign({"data-testid":"list-fail"},{children:[t(Ku,{"data-testid":"load-error-icon",$variant:u}),t(qu,Object.assign({$variant:u},{children:"Failed to load."}))," ",t(Ju,Object.assign({onClick:X,type:"button",$variant:u},{children:"Try again."}))]}))},se=e=>{if(r)switch(e.checked){case"mixed":return t(pf,{"aria-hidden":!0});case!0:return t(Vu,{"aria-hidden":!0});default:return t(Yu,{"aria-hidden":!0})}if(!e.hasSubItems)return t(ff,Object.assign({$hasNestedSiblings:e.hasNestedSiblings||0===e.level},{children:e.checked&&t(hf,{"aria-hidden":!0})}))},ce=(n,o)=>{const{level:i,visible:a,expanded:l,keyPath:u,checked:d,hasSubItems:f,indexInParent:h,parentSetSize:p}=n,g=n.index,m=U===o,y=f&&!F;return e(lf,Object.assign({$visible:a},{children:[L>0&&t(cf,{$level:i}),L>0&&!f&&r&&t(df,{}),e(sf,Object.assign({"aria-checked":d,"aria-selected":!!d,"aria-expanded":f?l:void 0,"aria-level":i+1,"aria-posinset":h+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),y?ne(g,!l,o):((e,t)=>{G(t),N(e),null==v||v(j[e])})(g,o)},onMouseEnter:()=>((e,t)=>{N(t.index),G(e)})(o,n),ref:e=>z.current[n.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:y},{children:[f&&t(uf,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ne(g,!l,o)},$expanded:l},{children:t(k,{})})),se(n),t(va,{bold:f,searchTerm:D?T:void 0,label:n.item.label,selected:!!d,truncationType:s,maxLines:c})]}))]}),`[${u.join("---")}]`)},ue=()=>{const e="test"===process.env.NODE_ENV;return t("div",Object.assign({"aria-multiselectable":r,id:f,ref:C,role:"tree"},{children:t(wc,Object.assign({style:{height:"100%"},customScrollParent:H.current,data:V,itemContent:(e,t)=>ce(t,e)},e?{initialItemCount:V.length}:{}),e?V.length:void 0)}))};return t(Wu,Object.assign({"data-testid":"dropdown-container",ref:H,$width:h},{children:e(Nu,Object.assign({"data-testid":"nested-dropdown-list"},{children:[re(),oe(),ie(),ae(),le(),ue()]}))}))},mf=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=mf(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const vf=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>mf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${na.Accent.Light[3]};
    }
`,yf=v.button`
    ${vf}
    cursor: pointer;
`;v.div`
    ${vf}
`;const bf=S`
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
    border: 1px solid ${na.Neutral[5]};
    border-radius: ${"4px"};
    background: ${na.Neutral[8]};

    :focus-within {
        border: 1px solid ${na.Accent.Light[1]};
        box-shadow: ${eu.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${bf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${na.Neutral[6](e)};

                ${yf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${na.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${yf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${na.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${na.Validation.Red.Border(e)};
                    box-shadow: ${eu.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${cd};
    margin-left: 1rem;
`,v(D)`
    color: ${na.Neutral[3]};
    ${e=>{let t=Yi.Body.fontSize;return"small"===e.$variant&&(t=Yi.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${na.Neutral[5]};
    margin: 0 0.5rem;
`;const Sf=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${na.Neutral[3]};
            `}}
`,xf=v.div`
    ${e=>qi("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,wf=v(xf)`
    color: ${na.Neutral[3]};
`;var $f;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}($f||($f={}));const Ff=v.div`
    display: flex;
    flex-direction: column;
`,Bf=e=>"right"===e?"bottom-end":"bottom-start",If=({enabled:r,isOpen:o,onOpen:l,onClose:s,onDismiss:c,renderElement:u,renderDropdown:f,customZIndex:h,clickToToggle:p=!1,offset:g=0,alignment:m="left",fitAvailableHeight:v})=>{var y;const b=i(null),S=i(null),{width:x}=ii({targetRef:b,handleHeight:!1}),w={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<ou.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:$,floatingStyles:F,context:B}=E({open:o,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!o?null==l||l():!e&&o&&(null==s||s(n))},whileElementsMounted:_,placement:Bf(m),middleware:[R(g),A(),P({limiter:M()}),j({apply({availableHeight:e}){S.current&&Object.assign(S.current.style,{maxHeight:v?`${e}px`:void 0,overflowY:v?"hidden":void 0})}}),w]}),I=(()=>{const[e,t]=a(void 0),n=z();return d((()=>{if(!n)return void t(void 0);const e=e=>{t(e.zIndex)};return n.events.on($f.Change,e),n.events.emit($f.Ready),()=>n.events.off($f.Change,e)}),[n]),e})(),{isMounted:T,styles:D}=L(B,{initial:{opacity:0},open:{opacity:1},duration:300}),k=W(B,{enabled:r,toggle:p}),O=N(B,{enabled:r}),{getReferenceProps:H,getFloatingProps:C}=V([k,O]);return e(n,{children:[t("div",Object.assign({ref:e=>{b.current=e,$.setReference(e)}},H(),{children:u()})),T&&t(Y,{children:t(U,Object.assign({context:B,modal:!1,initialFocus:S,returnFocus:!1},{children:t("div",Object.assign({ref:$.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(y=null!=h?h:I)&&void 0!==y?y:50})},C(),{children:t(Ff,Object.assign({ref:S,style:Object.assign({},D),inert:D.opacity<1?"":void 0},{children:f({elementWidth:x})}))}))}))})]})},Tf=(e,t)=>{const[n,...r]=t;if(Ut(e)||!n)return;const o=e.find((e=>e.key===n));return o?r.length?Tf(o.subItems,r):o:void 0},Df=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...Df(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},kf=({placeholder:e="Select",options:n,disabled:r,error:o,className:l,"data-testid":s,id:c,selectedKeyPaths:u,mode:f,valueToStringFunction:h,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,readOnly:v,onSearch:y,onSelectOptions:b,onShowOptions:S,onHideOptions:x,onRetry:w,onBlur:$,optionsLoadState:F="success",optionTruncationType:B="end",variant:I,alignment:T,dropdownZIndex:D})=>{const k=n,[O,H]=a(u?af(u):new Set),[C,z]=a([]),[E,_]=a(!1),[R,A]=a(!1),[P]=a((()=>zu.generate())),M=i(),j=i(),L=i();d((()=>{const e=u||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const o=t[r],i=Tf(e,o);i&&n.push({value:i.value,label:i.label,keyPath:o})}return n})(k,e);H(af(e)),z(t)}),[u,k]);const W=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));H(af(e)),z(n),Z(e,n)},N=e=>{const t=X(e),n=t.map((e=>e.keyPath));z(t),H(af(n)),Z(n,t)},V=()=>{R||E||A(!0)},Y=e=>{R&&!E&&M.current&&!M.current.contains(e.relatedTarget)&&(A(!1),null==$||$())},U=()=>{const{label:e,value:t}=C[0];return C.length>1?`${C.length} selected`:h?h(t)||t.toString():e},G=e=>{if("middle"===B){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),ca.truncateOneLine(e,t,120,6)}return e},J=e=>{!e&&x&&x(),e&&S&&S()},Z=(e,t)=>{if(b){const n=t.map((e=>e.value));b(e,n)}},X=e=>{if(!0===e.checked)return C.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!co(e.keyPath,n)}));{const t=[...C],n=e.hasSubItems?((e,t)=>{const n=Tf(e,t);return n&&n.subItems?Df(n.subItems,t):[]})(k,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{C.find((t=>co(t.keyPath,e.keyPath)))||t.push(e)})),t}};return t(If,{enabled:!v&&!r,isOpen:E,renderElement:()=>t(Mu,Object.assign({className:l,"data-testid":s,id:c,ref:M,tabIndex:-1,onFocus:V,onBlur:Y,$focused:R,$disabled:r,$readOnly:v,$error:o},{children:t(fd,Object.assign({ref:j,disabled:r,expanded:E,listboxId:P,popupRole:"tree",readOnly:v,variant:I},{children:t(Sf,Object.assign({ref:L,$disabled:r},{children:Ut(C)?t(wf,Object.assign({truncateType:B},{children:e})):t(xf,Object.assign({truncateType:B},{children:G(U())}))}))}))})),renderDropdown:({elementWidth:e})=>t(gf,{listboxId:P,listItems:k,multiSelect:!0,selectedKeyPaths:O,itemsLoadState:F,itemTruncationType:B,enableSearch:p,searchPlaceholder:g,hideNoResultsDisplay:m,onSelectItem:N,onSelectAll:W,onRetry:w,onSearch:y,variant:I,mode:f,width:e}),onOpen:()=>{_(!0),J(!0),A(!0)},onClose:e=>{_(!1),J(!1),"click"!==e&&(A(!1),null==$||$())},onDismiss:()=>{var e;null===(e=j.current)||void 0===e||e.focus(),_(!1),J(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,customZIndex:D})};export{kf as InputNestedMultiSelect};
//# sourceMappingURL=index.js.map
