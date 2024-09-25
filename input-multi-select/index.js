import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useState as a,isValidElement as l,createRef as s,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as p,forwardRef as g,useContext as m}from"react";import v,{css as y,useTheme as b,keyframes as w}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import*as x from"react-dom";import{findDOMNode as $,createPortal as F}from"react-dom";import{ExclamationCircleFillIcon as D}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as B}from"@lifesg/react-icons/square";import{SquareTickFillIcon as E}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as O}from"@lifesg/react-icons/tick";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{MagnifierIcon as A}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as R}from"@lifesg/react-icons/chevron-down";var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1};var M=function(){this.__data__=[],this.size=0};var j=function(e,t){return e===t||e!=e&&t!=t},L=j;var _=function(e,t){for(var n=e.length;n--;)if(L(e[n][0],t))return n;return-1},z=_,P=Array.prototype.splice;var I=function(e){var t=this.__data__,n=z(t,e);return!(n<0)&&(n==t.length-1?t.pop():P.call(t,n,1),--this.size,!0)},N=_;var W=function(e){var t=this.__data__,n=N(t,e);return n<0?void 0:t[n][1]},Y=_;var V=_;var U=function(e,t){var n=this.__data__,r=V(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},J=M,Z=I,q=W,X=function(e){return Y(this.__data__,e)>-1},G=U;function K(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}K.prototype.clear=J,K.prototype.delete=Z,K.prototype.get=q,K.prototype.has=X,K.prototype.set=G;var Q=K,ee=Q;var te=function(){this.__data__=new ee,this.size=0};var ne=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var re=function(e){return this.__data__.get(e)};var oe=function(e){return this.__data__.has(e)},ie="object"==typeof T&&T&&T.Object===Object&&T,ae=ie,le="object"==typeof self&&self&&self.Object===Object&&self,se=ae||le||Function("return this")(),ce=se.Symbol,ue=ce,de=Object.prototype,fe=de.hasOwnProperty,he=de.toString,pe=ue?ue.toStringTag:void 0;var ge=function(e){var t=fe.call(e,pe),n=e[pe];try{e[pe]=void 0;var r=!0}catch(e){}var o=he.call(e);return r&&(t?e[pe]=n:delete e[pe]),o},me=Object.prototype.toString;var ve=ge,ye=function(e){return me.call(e)},be=ce?ce.toStringTag:void 0;var we=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":be&&be in Object(e)?ve(e):ye(e)};var Se=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},xe=we,$e=Se;var Fe,De=function(e){if(!$e(e))return!1;var t=xe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Be=se["__core-js_shared__"],Ee=(Fe=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var Oe=function(e){return!!Ee&&Ee in e},ke=Function.prototype.toString;var Ae=function(e){if(null!=e){try{return ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Re=De,Te=Oe,He=Se,Ce=Ae,Me=/^\[object .+?Constructor\]$/,je=Function.prototype,Le=Object.prototype,_e=je.toString,ze=Le.hasOwnProperty,Pe=RegExp("^"+_e.call(ze).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ie=function(e){return!(!He(e)||Te(e))&&(Re(e)?Pe:Me).test(Ce(e))},Ne=function(e,t){return null==e?void 0:e[t]};var We=function(e,t){var n=Ne(e,t);return Ie(n)?n:void 0},Ye=We(se,"Map"),Ve=We(Object,"create"),Ue=Ve;var Je=function(){this.__data__=Ue?Ue(null):{},this.size=0};var Ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},qe=Ve,Xe=Object.prototype.hasOwnProperty;var Ge=function(e){var t=this.__data__;if(qe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Xe.call(t,e)?t[e]:void 0},Ke=Ve,Qe=Object.prototype.hasOwnProperty;var et=Ve;var tt=Je,nt=Ze,rt=Ge,ot=function(e){var t=this.__data__;return Ke?void 0!==t[e]:Qe.call(t,e)},it=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this};function at(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}at.prototype.clear=tt,at.prototype.delete=nt,at.prototype.get=rt,at.prototype.has=ot,at.prototype.set=it;var lt=at,st=Q,ct=Ye;var ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var dt=function(e,t){var n=e.__data__;return ut(t)?n["string"==typeof t?"string":"hash"]:n.map},ft=dt;var ht=dt;var pt=dt;var gt=dt;var mt=function(e,t){var n=gt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},vt=function(){this.size=0,this.__data__={hash:new lt,map:new(ct||st),string:new lt}},yt=function(e){var t=ft(this,e).delete(e);return this.size-=t?1:0,t},bt=function(e){return ht(this,e).get(e)},wt=function(e){return pt(this,e).has(e)},St=mt;function xt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}xt.prototype.clear=vt,xt.prototype.delete=yt,xt.prototype.get=bt,xt.prototype.has=wt,xt.prototype.set=St;var $t=xt,Ft=Q,Dt=Ye,Bt=$t;var Et=Q,Ot=te,kt=ne,At=re,Rt=oe,Tt=function(e,t){var n=this.__data__;if(n instanceof Ft){var r=n.__data__;if(!Dt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Bt(r)}return n.set(e,t),this.size=n.size,this};function Ht(e){var t=this.__data__=new Et(e);this.size=t.size}Ht.prototype.clear=Ot,Ht.prototype.delete=kt,Ht.prototype.get=At,Ht.prototype.has=Rt,Ht.prototype.set=Tt;var Ct=Ht;var Mt=$t,jt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Lt=function(e){return this.__data__.has(e)};function _t(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Mt;++t<n;)this.add(e[t])}_t.prototype.add=_t.prototype.push=jt,_t.prototype.has=Lt;var zt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var Pt=_t,It=zt,Nt=function(e,t){return e.has(t)};var Wt=function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,f=!0,h=2&n?new Pt:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,i):r(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!It(t,(function(e,t){if(!Nt(h,t)&&(p===e||o(p,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var Yt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var Vt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Ut=se.Uint8Array,Jt=j,Zt=Wt,qt=Yt,Xt=Vt,Gt=ce?ce.prototype:void 0,Kt=Gt?Gt.valueOf:void 0;var Qt=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Ut(e),new Ut(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Jt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=qt;case"[object Set]":var s=1&r;if(l||(l=Xt),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Zt(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Kt)return Kt.call(e)==Kt.call(t)}return!1};var en=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},tn=Array.isArray,nn=en,rn=tn;var on=function(e,t,n){var r=t(e);return rn(e)?r:nn(r,n(e))};var an=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var ln=an,sn=function(){return[]},cn=Object.prototype.propertyIsEnumerable,un=Object.getOwnPropertySymbols,dn=un?function(e){return null==e?[]:(e=Object(e),ln(un(e),(function(t){return cn.call(e,t)})))}:sn;var fn=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var hn=function(e){return null!=e&&"object"==typeof e},pn=we,gn=hn;var mn=function(e){return gn(e)&&"[object Arguments]"==pn(e)},vn=hn,yn=Object.prototype,bn=yn.hasOwnProperty,wn=yn.propertyIsEnumerable,Sn=mn(function(){return arguments}())?mn:function(e){return vn(e)&&bn.call(e,"callee")&&!wn.call(e,"callee")},xn={exports:{}};var $n=function(){return!1};!function(e,t){var n=se,r=$n,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(xn,xn.exports);var Fn=xn.exports,Dn=/^(?:0|[1-9]\d*)$/;var Bn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Dn.test(e))&&e>-1&&e%1==0&&e<t};var En=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},On=we,kn=En,An=hn,Rn={};Rn["[object Float32Array]"]=Rn["[object Float64Array]"]=Rn["[object Int8Array]"]=Rn["[object Int16Array]"]=Rn["[object Int32Array]"]=Rn["[object Uint8Array]"]=Rn["[object Uint8ClampedArray]"]=Rn["[object Uint16Array]"]=Rn["[object Uint32Array]"]=!0,Rn["[object Arguments]"]=Rn["[object Array]"]=Rn["[object ArrayBuffer]"]=Rn["[object Boolean]"]=Rn["[object DataView]"]=Rn["[object Date]"]=Rn["[object Error]"]=Rn["[object Function]"]=Rn["[object Map]"]=Rn["[object Number]"]=Rn["[object Object]"]=Rn["[object RegExp]"]=Rn["[object Set]"]=Rn["[object String]"]=Rn["[object WeakMap]"]=!1;var Tn=function(e){return An(e)&&kn(e.length)&&!!Rn[On(e)]};var Hn=function(e){return function(t){return e(t)}},Cn={exports:{}};!function(e,t){var n=ie,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Cn,Cn.exports);var Mn=Cn.exports,jn=Tn,Ln=Hn,_n=Mn&&Mn.isTypedArray,zn=_n?Ln(_n):jn,Pn=fn,In=Sn,Nn=tn,Wn=Fn,Yn=Bn,Vn=zn,Un=Object.prototype.hasOwnProperty;var Jn=function(e,t){var n=Nn(e),r=!n&&In(e),o=!n&&!r&&Wn(e),i=!n&&!r&&!o&&Vn(e),a=n||r||o||i,l=a?Pn(e.length,String):[],s=l.length;for(var c in e)!t&&!Un.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Yn(c,s))||l.push(c);return l},Zn=Object.prototype;var qn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Zn)};var Xn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Gn=qn,Kn=Xn,Qn=Object.prototype.hasOwnProperty;var er=De,tr=En;var nr=function(e){return null!=e&&tr(e.length)&&!er(e)},rr=Jn,or=function(e){if(!Gn(e))return Kn(e);var t=[];for(var n in Object(e))Qn.call(e,n)&&"constructor"!=n&&t.push(n);return t},ir=nr;var ar=function(e){return ir(e)?rr(e):or(e)},lr=on,sr=dn,cr=ar;var ur=function(e){return lr(e,cr,sr)},dr=Object.prototype.hasOwnProperty;var fr=function(e,t,n,r,o,i){var a=1&n,l=ur(e),s=l.length;if(s!=ur(t).length&&!a)return!1;for(var c=s;c--;){var u=l[c];if(!(a?u in t:dr.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++c<s;){var g=e[u=l[c]],m=t[u];if(r)var v=a?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===v?g===m||o(g,m,n,r,i):v)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},hr=We(se,"DataView"),pr=Ye,gr=We(se,"Promise"),mr=We(se,"Set"),vr=We(se,"WeakMap"),yr=we,br=Ae,wr="[object Map]",Sr="[object Promise]",xr="[object Set]",$r="[object WeakMap]",Fr="[object DataView]",Dr=br(hr),Br=br(pr),Er=br(gr),Or=br(mr),kr=br(vr),Ar=yr;(hr&&Ar(new hr(new ArrayBuffer(1)))!=Fr||pr&&Ar(new pr)!=wr||gr&&Ar(gr.resolve())!=Sr||mr&&Ar(new mr)!=xr||vr&&Ar(new vr)!=$r)&&(Ar=function(e){var t=yr(e),n="[object Object]"==t?e.constructor:void 0,r=n?br(n):"";if(r)switch(r){case Dr:return Fr;case Br:return wr;case Er:return Sr;case Or:return xr;case kr:return $r}return t});var Rr=Ct,Tr=Wt,Hr=Qt,Cr=fr,Mr=Ar,jr=tn,Lr=Fn,_r=zn,zr="[object Arguments]",Pr="[object Array]",Ir="[object Object]",Nr=Object.prototype.hasOwnProperty;var Wr=function(e,t,n,r,o,i){var a=jr(e),l=jr(t),s=a?Pr:Mr(e),c=l?Pr:Mr(t),u=(s=s==zr?Ir:s)==Ir,d=(c=c==zr?Ir:c)==Ir,f=s==c;if(f&&Lr(e)){if(!Lr(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new Rr),a||_r(e)?Tr(e,t,n,r,o,i):Hr(e,t,s,n,r,o,i);if(!(1&n)){var h=u&&Nr.call(e,"__wrapped__"),p=d&&Nr.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new Rr),o(g,m,n,r,i)}}return!!f&&(i||(i=new Rr),Cr(e,t,n,r,o,i))},Yr=hn;var Vr=function e(t,n,r,o,i){return t===n||(null==t||null==n||!Yr(t)&&!Yr(n)?t!=t&&n!=n:Wr(t,n,r,o,e,i))},Ur=Ct,Jr=Vr;var Zr=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var s=(l=n[o])[0],c=e[s],u=l[1];if(a&&l[2]){if(void 0===c&&!(s in e))return!1}else{var d=new Ur;if(r)var f=r(c,u,s,e,t,d);if(!(void 0===f?Jr(u,c,3,r,d):f))return!1}}return!0},qr=Se;var Xr=function(e){return e==e&&!qr(e)},Gr=Xr,Kr=ar;var Qr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},eo=Zr,to=function(e){for(var t=Kr(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Gr(o)]}return t},no=Qr;var ro=function(e){var t=to(e);return 1==t.length&&t[0][2]?no(t[0][0],t[0][1]):function(n){return n===e||eo(n,e,t)}},oo=we,io=hn;var ao=function(e){return"symbol"==typeof e||io(e)&&"[object Symbol]"==oo(e)},lo=tn,so=ao,co=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,uo=/^\w*$/;var fo=function(e,t){if(lo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!so(e))||(uo.test(e)||!co.test(e)||null!=t&&e in Object(t))},ho=$t;function po(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(po.Cache||ho),n}po.Cache=ho;var go=po;var mo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vo=/\\(\\)?/g,yo=function(e){var t=go(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mo,(function(e,n,r,o){t.push(r?o.replace(vo,"$1"):n||e)})),t}));var bo=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},wo=bo,So=tn,xo=ao,$o=ce?ce.prototype:void 0,Fo=$o?$o.toString:void 0;var Do=function e(t){if("string"==typeof t)return t;if(So(t))return wo(t,e)+"";if(xo(t))return Fo?Fo.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Bo=Do;var Eo=tn,Oo=fo,ko=yo,Ao=function(e){return null==e?"":Bo(e)};var Ro=function(e,t){return Eo(e)?e:Oo(e,t)?[e]:ko(Ao(e))},To=ao;var Ho=function(e){if("string"==typeof e||To(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Co=Ro,Mo=Ho;var jo=function(e,t){for(var n=0,r=(t=Co(t,e)).length;null!=e&&n<r;)e=e[Mo(t[n++])];return n&&n==r?e:void 0},Lo=jo;var _o=function(e,t,n){var r=null==e?void 0:Lo(e,t);return void 0===r?n:r},zo=H(_o);var Po=Ro,Io=Sn,No=tn,Wo=Bn,Yo=En,Vo=Ho;var Uo=function(e,t,n){for(var r=-1,o=(t=Po(t,e)).length,i=!1;++r<o;){var a=Vo(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Yo(o)&&Wo(a,o)&&(No(e)||Io(e))},Jo=function(e,t){return null!=e&&t in Object(e)},Zo=Uo;var qo=Vr,Xo=_o,Go=function(e,t){return null!=e&&Zo(e,t,Jo)},Ko=fo,Qo=Xr,ei=Qr,ti=Ho;var ni=jo;var ri=function(e){return function(t){return null==t?void 0:t[e]}},oi=function(e){return function(t){return ni(t,e)}},ii=fo,ai=Ho;var li=ro,si=function(e,t){return Ko(e)&&Qo(t)?ei(ti(e),t):function(n){var r=Xo(n,e);return void 0===r&&r===t?Go(n,e):qo(t,r,3)}},ci=function(e){return e},ui=tn,di=function(e){return ii(e)?ri(ai(e)):oi(e)};var fi=function(e){return"function"==typeof e?e:null==e?ci:"object"==typeof e?ui(e)?si(e[0],e[1]):li(e):di(e)},hi=/\s/;var pi=function(e){for(var t=e.length;t--&&hi.test(e.charAt(t)););return t},gi=pi,mi=/^\s+/;var vi=function(e){return e?e.slice(0,gi(e)+1).replace(mi,""):e},yi=Se,bi=ao,wi=/^[-+]0x[0-9a-f]+$/i,Si=/^0b[01]+$/i,xi=/^0o[0-7]+$/i,$i=parseInt;var Fi=function(e){if("number"==typeof e)return e;if(bi(e))return NaN;if(yi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=yi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=vi(e);var n=Si.test(e);return n||xi.test(e)?$i(e.slice(2),n?2:8):wi.test(e)?NaN:+e},Di=1/0;var Bi=function(e){return e?(e=Fi(e))===Di||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Ei=C,Oi=fi,ki=function(e){var t=Bi(e),n=t%1;return t==t?n?t-n:t:0},Ai=Math.max;var Ri=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:ki(n);return o<0&&(o=Ai(r+o,0)),Ei(e,Oi(t),o)},Ti=H(Ri),Hi=function(e,t){return Hi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Hi(e,t)};var Ci=function(){return Ci=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ci.apply(this,arguments)};var Mi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ji=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Li="object"==typeof Mi&&Mi&&Mi.Object===Object&&Mi,_i="object"==typeof self&&self&&self.Object===Object&&self,zi=Li||_i||Function("return this")(),Pi=zi,Ii=function(){return Pi.Date.now()},Ni=/\s/;var Wi=function(e){for(var t=e.length;t--&&Ni.test(e.charAt(t)););return t},Yi=Wi,Vi=/^\s+/;var Ui=function(e){return e?e.slice(0,Yi(e)+1).replace(Vi,""):e},Ji=zi.Symbol,Zi=Ji,qi=Object.prototype,Xi=qi.hasOwnProperty,Gi=qi.toString,Ki=Zi?Zi.toStringTag:void 0;var Qi=function(e){var t=Xi.call(e,Ki),n=e[Ki];try{e[Ki]=void 0;var r=!0}catch(e){}var o=Gi.call(e);return r&&(t?e[Ki]=n:delete e[Ki]),o},ea=Object.prototype.toString;var ta=Qi,na=function(e){return ea.call(e)},ra=Ji?Ji.toStringTag:void 0;var oa=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ra&&ra in Object(e)?ta(e):na(e)},ia=function(e){return null!=e&&"object"==typeof e};var aa=Ui,la=ji,sa=function(e){return"symbol"==typeof e||ia(e)&&"[object Symbol]"==oa(e)},ca=/^[-+]0x[0-9a-f]+$/i,ua=/^0b[01]+$/i,da=/^0o[0-7]+$/i,fa=parseInt;var ha=ji,pa=Ii,ga=function(e){if("number"==typeof e)return e;if(sa(e))return NaN;if(la(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=la(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=aa(e);var n=ua.test(e);return n||da.test(e)?fa(e.slice(2),n?2:8):ca.test(e)?NaN:+e},ma=Math.max,va=Math.min;var ya=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function g(){var e=pa();if(p(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-s);return d?va(n,i-(e-c)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=pa(),n=p(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(g,t),u?h(e):a}(s);if(d)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),a}return t=ga(t)||0,ha(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ma(ga(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},v.flush=function(){return void 0===l?a:m(pa())},v},ba=ya,wa=ji;var Sa=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wa(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ba(e,t,{leading:r,maxWait:t,trailing:o})},xa=function(e,t,n,r){switch(t){case"debounce":return ya(e,n,r);case"throttle":return Sa(e,n,r);default:return e}},$a=function(e){return"function"==typeof e},Fa=function(){return"undefined"==typeof window},Da=function(e){return e instanceof Element||e instanceof HTMLDocument},Ba=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&$a(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Fa()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Fa())return null;if(t)return document.querySelector(t);if(r&&Da(r))return r;if(n.targetRef&&Da(n.targetRef.current))return n.targetRef.current;var o=$(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var s=Ba(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Fa()&&s({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return $a(t)?"renderProp":$a(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,Fa()||(n.resizeHandler=xa(n.createResizeHandler,o,a,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Hi(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Fa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return r.createElement(a,null)}}}(u);var Ea=Fa()?d:f;function Oa(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,l=void 0===o?1e3:o,s=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),v=i(null),y=null!=h?h:v,b=i(),w=a({width:void 0,height:void 0}),S=w[0],x=w[1];return Ea((function(){if(!Fa()){var e=Ba(g,x,u,f);b.current=xa((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!Fa()&&e({width:r,height:o}),m.current=!1}))}),r,l,s);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,s,u,f,g,p,y.current]),Ci({ref:y},S)}const ka={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Aa={D1:{fontFamily:ka.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ka.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ka.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ka.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ka.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ka.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ka.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ka.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ka.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ka.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ka.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ka.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ka.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ka.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ra={D1:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ka.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:ka.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:ka.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:ka.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ka.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ta={D1:{fontFamily:ka.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ka.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ka.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ka.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ka.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ka.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ka.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ka.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ka.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ka.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ka.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ka.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ka.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ka.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},Ha=(e,t,n)=>t?zo(n,t)||zo(e,t):n||e,Ca=(e,t)=>{const n=t||e.defaultValue;return zo(e.collections,n)};var Ma;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ma||(Ma={}));const ja={collections:{base:Aa,oneservice:Ta,plusJakartaSans:Ra},defaultValue:"base"},La=e=>t=>{const n=t.theme,r=Ca(ja,n[Ma.textStyleScheme]);return n.options&&n.options.textStyle?Ha(r,e,n.options.textStyle):Ha(r,e)},_a={D1:{fontFamily:La("D1.fontFamily"),fontSize:La("D1.fontSize"),fontWeight:La("D1.fontWeight"),lineHeight:La("D1.lineHeight"),letterSpacing:La("D1.letterSpacing")},D2:{fontFamily:La("D2.fontFamily"),fontSize:La("D2.fontSize"),fontWeight:La("D2.fontWeight"),lineHeight:La("D2.lineHeight"),letterSpacing:La("D2.letterSpacing")},D3:{fontFamily:La("D3.fontFamily"),fontSize:La("D3.fontSize"),fontWeight:La("D3.fontWeight"),lineHeight:La("D3.lineHeight"),letterSpacing:La("D3.letterSpacing")},D4:{fontFamily:La("D4.fontFamily"),fontSize:La("D4.fontSize"),fontWeight:La("D4.fontWeight"),lineHeight:La("D4.lineHeight"),letterSpacing:La("D4.letterSpacing")},DBody:{fontFamily:La("DBody.fontFamily"),fontSize:La("DBody.fontSize"),fontWeight:La("DBody.fontWeight"),lineHeight:La("DBody.lineHeight"),letterSpacing:La("DBody.letterSpacing")},H1:{fontFamily:La("H1.fontFamily"),fontSize:La("H1.fontSize"),fontWeight:La("H1.fontWeight"),lineHeight:La("H1.lineHeight"),letterSpacing:La("H1.letterSpacing")},H2:{fontFamily:La("H2.fontFamily"),fontSize:La("H2.fontSize"),fontWeight:La("H2.fontWeight"),lineHeight:La("H2.lineHeight"),letterSpacing:La("H2.letterSpacing")},H3:{fontFamily:La("H3.fontFamily"),fontSize:La("H3.fontSize"),fontWeight:La("H3.fontWeight"),lineHeight:La("H3.lineHeight"),letterSpacing:La("H3.letterSpacing")},H4:{fontFamily:La("H4.fontFamily"),fontSize:La("H4.fontSize"),fontWeight:La("H4.fontWeight"),lineHeight:La("H4.lineHeight"),letterSpacing:La("H4.letterSpacing")},H5:{fontFamily:La("H5.fontFamily"),fontSize:La("H5.fontSize"),fontWeight:La("H5.fontWeight"),lineHeight:La("H5.lineHeight"),letterSpacing:La("H5.letterSpacing")},H6:{fontFamily:La("H6.fontFamily"),fontSize:La("H6.fontSize"),fontWeight:La("H6.fontWeight"),lineHeight:La("H6.lineHeight"),letterSpacing:La("H6.letterSpacing")},Body:{fontFamily:La("Body.fontFamily"),fontSize:La("Body.fontSize"),fontWeight:La("Body.fontWeight"),lineHeight:La("Body.lineHeight"),letterSpacing:La("Body.letterSpacing")},BodySmall:{fontFamily:La("BodySmall.fontFamily"),fontSize:La("BodySmall.fontSize"),fontWeight:La("BodySmall.fontWeight"),lineHeight:La("BodySmall.lineHeight"),letterSpacing:La("BodySmall.letterSpacing")},XSmall:{fontFamily:La("XSmall.fontFamily"),fontSize:La("XSmall.fontSize"),fontWeight:La("XSmall.fontWeight"),lineHeight:La("XSmall.lineHeight"),letterSpacing:La("XSmall.letterSpacing")}},za=[ka.OpenSans,ka.PlusJakartaSans],Pa=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Ia=(e,t)=>n=>{var r;const o=_a[e].fontFamily(n),i=_a[e].fontWeight(n),a=za.find((e=>Object.values(e).includes(o)));return a?y`
                font-family: ${Pa(a,t)||Pa(a,i)||o};
                font-weight: normal !important;
            `:y`
            font-family: ${o};
            font-weight: ${null!==(r=Na(t)||i)&&void 0!==r?r:"normal"};
        `},Na=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Wa=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Ya=(e,t,n=!1)=>r=>{const o=_a[e],i=o.fontSize(r);return y`
            ${Ia(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Va=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${Wa(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${Wa(n)}
        `;function Ua(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Ja={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Za=e=>t=>{const n=t.theme,r=Ca(Ja,n[Ma.colorScheme]);return n.options&&n.options.color?Ha(r,e,n.options.color):Ha(r,e)},qa={Brand:{1:Za("Brand.1"),2:Za("Brand.2"),3:Za("Brand.3"),4:Za("Brand.4"),5:Za("Brand.5"),6:Za("Brand.6")},Primary:Za("Primary"),PrimaryDark:Za("PrimaryDark"),Secondary:Za("Secondary"),Accent:{Light:{1:Za("Accent.Light.1"),2:Za("Accent.Light.2"),3:Za("Accent.Light.3"),4:Za("Accent.Light.4"),5:Za("Accent.Light.5"),6:Za("Accent.Light.6")},Dark:{1:Za("Accent.Dark.1"),2:Za("Accent.Dark.2"),3:Za("Accent.Dark.3")}},Neutral:{1:Za("Neutral.1"),2:Za("Neutral.2"),3:Za("Neutral.3"),4:Za("Neutral.4"),5:Za("Neutral.5"),6:Za("Neutral.6"),7:Za("Neutral.7"),8:Za("Neutral.8")},Validation:{Green:{Text:Za("Validation.Green.Text"),Icon:Za("Validation.Green.Icon"),Border:Za("Validation.Green.Border"),Background:Za("Validation.Green.Background")},Orange:{Text:Za("Validation.Orange.Text"),Icon:Za("Validation.Orange.Icon"),Border:Za("Validation.Orange.Border"),Background:Za("Validation.Orange.Background"),Badge:Za("Validation.Orange.Badge")},Red:{Text:Za("Validation.Red.Text"),Icon:Za("Validation.Red.Icon"),Border:Za("Validation.Red.Border"),Background:Za("Validation.Red.Background")},Blue:{Text:Za("Validation.Blue.Text"),Icon:Za("Validation.Blue.Icon"),Border:Za("Validation.Blue.Border"),Background:Za("Validation.Blue.Background")}},Shadow:{Accent:Za("Shadow.Accent"),Red:Za("Shadow.Red"),Elevation:Za("Shadow.Elevation")}};var Xa;!function(e){e.D1=v.h1`
        ${e=>y`
                ${Ya("D1",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${Ya("D2",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${Ya("D3",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${Ya("D4",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${Ya("DBody",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${Ya("H1",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${Ya("H2",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${Ya("H3",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${Ya("H4",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${Ya("H5",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${Ya("H6",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${Ya("Body",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${Ya("BodySmall",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${Ya("XSmall",e.weight,e.paragraph)}
                color: ${qa.Neutral[1]};
                ${Va(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Qa(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Qa(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Xa||(Xa={}));const Ga=v.a`
    ${e=>y`
            ${Ya(e.textStyle,e.weight)}
            color: ${qa.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${qa.Secondary};

                svg {
                    color: ${qa.Secondary};
                }
            }
        `}
`,Ka=v(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qa=n=>{var{external:r=!1,children:o}=n,i=Ua(n,["external","children"]);return e(Ga,Object.assign({},i,{children:[o,r&&t(Ka,{})]}))};var el;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(el||(el={}));const tl={[Ma.colorScheme]:"base",[Ma.textStyleScheme]:"base",[Ma.designTokenScheme]:"base",[Ma.resourceScheme]:"base"};var nl;Ma.colorScheme,Ma.textStyleScheme,Ma.designTokenScheme,Ma.resourceScheme,Ma.colorScheme,Ma.textStyleScheme,Ma.designTokenScheme,Ma.resourceScheme,Ma.colorScheme,Ma.textStyleScheme,Ma.designTokenScheme,Ma.resourceScheme,Ma.colorScheme,Ma.textStyleScheme,Ma.designTokenScheme,Ma.resourceScheme,Ma.colorScheme,Ma.textStyleScheme,Ma.designTokenScheme,Ma.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(nl||(nl={}));const rl=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,ol=v.div`
    ${e=>Ya("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?qa.Primary:qa.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rl}
`,il=v.div`
    color: ${qa.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&rl}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${Ya("BodySmall","semibold")}
                `:y`
                    ${Ya("Body","regular")}
                `}
`,al=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${ol} {
                        display: inline;
                    }

                    ${il} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ll=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,sl=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,cl=({displayType:r="inline",label:o,maxLines:i=2,selected:a,sublabel:l,truncationType:s="middle",variant:c})=>{const u=b()||tl,d=_a.Body.fontSize({theme:u}),f=_a.Body.fontFamily({theme:u}),{ref:g,width:m}=Oa(),v=h((e=>{if("inline"!==r)return!1;return nl.getTextWidth(e,`${d}rem '${f}'`)>m*i-50}),[m,r,d,f,i]),y=p((()=>v(o)),[v,o]),w=p((()=>l&&v(l)),[v,l]),S=y||w?"next-line":r,x=r=>e(n,{children:[t(ll,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r})),t(sl,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r}))]});return e(al,Object.assign({ref:g,$labelDisplayType:S},{children:[t(ol,Object.assign({"aria-label":o,$maxLines:i,$selected:a,$truncateType:s,$variant:c},{children:"middle"===s&&y?x(o):o})),l&&t(il,Object.assign({"aria-label":l,$maxLines:i,$truncateType:s,$labelDisplayType:r},{children:"middle"===s&&w?x(l):l}))]}))};var ul=fi,dl=nr,fl=ar;var hl=function(e){return function(t,n,r){var o=Object(t);if(!dl(t)){var i=ul(n);t=fl(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}},pl=H(hl(Ri)),gl=Vr;var ml=H((function(e,t){return gl(e,t)}));const vl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},yl=e=>Object.keys(vl).reduce(((t,n)=>{const r=vl[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),bl=yl("max-width"),wl=(yl("min-width"),v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Sl=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,xl=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||qa.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Sl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$l=v(xl)`
    animation-delay: -0.45s;
`,Fl=v(xl)`
    animation-delay: -0.3s;
`,Dl=v(xl)`
    animation-delay: -0.15s;
`,Bl={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${qa.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${qa.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${qa.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${qa.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${qa.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${qa.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},El=e=>t=>{var n;const r=t.theme,o=Ca(Bl,r[Ma.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ha(o,e,r.options.designToken):Ha(o,e)},Ol={InputBoxShadow:El("InputBoxShadow"),InputErrorBoxShadow:El("InputErrorBoxShadow"),ElevationBoxShadow:El("ElevationBoxShadow"),Table:{Header:El("Table.Header"),Cell:{Primary:El("Table.Cell.Primary"),Secondary:El("Table.Cell.Secondary"),Selected:El("Table.Cell.Selected"),Hover:El("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:El("Button.Danger.BackgroundColor"),Hover:El("Button.Danger.Hover"),Primary:El("Button.Danger.Primary"),Border:El("Button.Danger.Border")}}};v.button`
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
                    background-color: ${qa.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ol.Button.Danger.Border:qa.Primary};

                    color: ${e.$buttonIsDanger?Ol.Button.Danger.Primary:qa.Primary};
                `;case"light":return y`
                    background-color: ${qa.Neutral[8]};
                    border: 1px solid ${qa.Neutral[5]};

                    color: ${e.$buttonIsDanger?Ol.Button.Danger.Primary:qa.Primary};
                `;case"disabled":return y`
                    background-color: ${qa.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qa.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ol.Button.Danger.Primary:qa.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Ol.Button.Danger.Hover:qa.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Ol.Button.Danger.BackgroundColor:qa.Primary};
                    border: 1px solid transparent;

                    ${bl.mobileL} {
                        width: 100%;
                    }

                    color: ${qa.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${Ya("H5","semibold")}

                    ${bl.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${Ya("H4","semibold")}

                    ${bl.mobileS} {
                        height: auto;
                    }
                `}
`;const kl=v((({color:n,className:r,size:o=18})=>e(wl,Object.assign({className:r,$size:o,$color:n},{children:[t(xl,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t($l,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Fl,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Dl,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ol.Button.Danger.Primary:qa.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=qa.Neutral[3](e);break;default:t=qa.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Al={exports:{}};Al.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],f=u&&u[0],h=u&&u[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,s=o.parser,c=e.slice(r),u=i.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!s&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var v=l||0,y=s||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,w)):new Date(g,m,p,v,y,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Rl,Tl,Hl=H(Al.exports),Cl={exports:{}},Ml=H(Cl.exports=(Rl={year:0,month:1,day:2,hour:3,minute:4,second:5},Tl={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Tl[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Tl[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Rl[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(o-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),jl={exports:{}};jl.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var S="$isDayjsObject",x=function(e){return e instanceof B||!(!e||!e[S])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},D=y;D.l=$,D.i=x,D.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[S]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?v-w:v+(6-w),m);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=D.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[D.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=D.p(u),g=function(e){var t=F(h);return D.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return D.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return l+1;case"MM":return D.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=D.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,w=function(){return D.m(g,v)};switch(m){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case s:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:D.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=B.prototype;return F.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=$,F.isDayjs=x,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var Ll=H(jl.exports),_l={exports:{}};_l.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var zl=H(_l.exports),Pl={exports:{}};Pl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Il=H(Pl.exports),Nl={exports:{}};Nl.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Wl,Yl=H(Nl.exports);Ll.extend(zl),Ll.extend(Il),Ll.extend(Yl),Ll.extend(Hl),Ll.extend(Ml),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ll(t).startOf("week");return Vl(n).map((e=>Ul(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ul(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ll(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ll(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ll(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Ll(r):void 0,o?Ll(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Wl||(Wl={}));const Vl=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ul=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Jl=[1,3,5,7,8,10,12],Zl=[4,6,9,11];var ql,Xl,Gl;function Kl(e){const t=i(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Jl.includes(i)?Math.min(o,31).toString():Zl.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ll(e,n);return Ll(t,n).diff(r,"minute")},e.toDayjs=e=>e?Ll(e):Ll(),e.addMinutesToTime=(e,t,n="HH:mm")=>Ll(e,n).add(t,"minutes").format(n)}(ql||(ql={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Ll(e).isBefore(r,"day"))||!(!o||!Ll(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Ll(e).isValid())return e}return""}}(Xl||(Xl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Gl||(Gl={}));const Ql=e=>{const t=(e=>{const t=i(e),n=i();return d((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},es=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),ts=({children:e})=>{const[n,r]=a(-1);return t(es.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},ns=y`
    border: 1px solid ${qa.Accent.Light[1]};
    box-shadow: ${Ol.InputBoxShadow};
`,rs=y`
    border: 1px solid ${qa.Accent.Light[1]};
    box-shadow: none;
`,os=y`
    border: 1px solid ${qa.Neutral[5]};
    box-shadow: none;
`,is=y`
    border: 1px solid ${qa.Validation.Red.Border};
    box-shadow: ${Ol.InputErrorBoxShadow};
`,as=v.div`
    border: 1px solid ${qa.Neutral[5]};
    border-radius: 4px;
    background: ${qa.Neutral[8]};

    :focus-within {
        ${ns}
    }
    ${e=>e.$focused&&ns}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${rs}
                }
                ${e.$focused&&rs}
            `:e.$disabled?y`
                background: ${qa.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${os}
                }
                ${e.$focused&&os}
            `:e.$error?y`
                border: 1px solid ${qa.Validation.Red.Border};

                :focus-within {
                    ${is}
                }
                ${e.$focused&&is}
            `:void 0}
`;v(as)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ls=v.input`
    ${e=>Ya("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${qa.Neutral[1]};
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
        color: ${qa.Neutral[3]};
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
`,ss=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${qa.Primary};
    }
`,cs=v.div`
    overflow: hidden;
    border: 1px solid ${qa.Neutral[5]};
    border-radius: 4px;
    background: ${qa.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${bl.mobileL} {
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
        background: ${qa.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,us=v.div`
    background: transparent;
    padding: 0.5rem;
`,ds=v.ul`
    list-style-type: none;
`,fs=v.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${qa.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${qa.Accent.Light[5]};
        `}
`,hs=v(O)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${qa.Primary};
`,ps=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,gs=v(E)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${qa.Primary};
`,ms=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${qa.Accent.Light[2]};
`,vs=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,ys=v(ss)`
    ${e=>Ya("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${qa.Primary};
`,bs=v(ys)`
    outline-offset: 0.25rem;
`,ws=v(ys)`
    padding: 0.5rem 1rem;
`,Ss=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,xs=v.div`
    ${e=>Ya("small"===e.$variant?"BodySmall":"Body","regular")}
`,$s=v(D)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${qa.Validation.Red.Icon};
`,Fs=v.button`
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
                background-color: ${qa.Neutral[7]};
            `}
    }
`,Ds=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=Ua(e,["children","focusHighlight","focusOutline","type"]);return t(Fs,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Bs=e=>"small"===e?1:1.125,Es=e=>y`
        height: ${Bs(e)}rem;
        width: ${Bs(e)}rem;
    `,Os=v.div`
    background: ${qa.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,ks=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,As=v(ls)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Rs=v(A)`
    color: ${qa.Neutral[3]};
    flex-shrink: 0;
    ${e=>Es(e.$variant)}
`,Ts=v(Ds)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${qa.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${Es(e.$variant)}
            }
        `}
`,Hs=g(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=Ua(n,["value","variant","onClear"]);return e(Os,{children:[e(ks,{children:[t(Rs,{$variant:i,"aria-hidden":!0}),t(As,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(Ts,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(k,{"aria-hidden":!0})}))]})})),Cs=({listItems:n,multiSelect:r,selectedItems:o,disableItemFocus:l,itemsLoadState:s="success",itemTruncationType:c="end",itemMaxLines:u=2,labelDisplayType:f="inline",variant:h="default",listboxId:p,width:g,onSelectItem:v,onSelectAll:y,onDismiss:b,onRetry:w,valueExtractor:S,listExtractor:x,renderListItem:$,renderCustomCallToAction:F,enableSearch:D,hideNoResultsDisplay:B,searchPlaceholder:E="Search",searchFunction:O,onSearch:k})=>{const{focusedIndex:A,setFocusedIndex:R}=m(es),[T,H]=a(""),[C,M]=a(n),j=Ql(s),L=(()=>{const[e,t]=a(!1);return d((()=>{t(!0)}),[]),e})(),_=i(),z=i(),P=i([]),I=i(),N=e=>x?x(e):e.toString(),W=Kl((()=>O(T))),Y=Kl((()=>n.filter((e=>{var t;const n=N(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=T.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),V=(e,t)=>{R(t),null==v||v(e,(e=>S?S(e):e)(e))},U=e=>{const t=e.target.value;H(t),null==k||k()},J=()=>{var e;H(""),null===(e=I.current)||void 0===e||e.focus(),null==k||k()},Z=()=>{null==w||w()};((e,t,n="window",r)=>{const o=i();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),A<C.length-1){const e=A+1;null===(t=P.current[e])||void 0===t||t.focus(),R(e)}break;case"ArrowUp":if(e.preventDefault(),A>0){const e=A-1;null===(n=P.current[e])||void 0===n||n.focus(),R(e)}else 0===A&&I.current&&(I.current.focus(),R(-1));break;case"Space":document.activeElement===P.current[A]&&(e.preventDefault(),C[A]&&V(C[A],A))}})),d((()=>{L||l||(I.current?(R(-1),setTimeout((()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.focus()}),200)):P.current[A]?setTimeout((()=>{var e;return null===(e=P.current[A])||void 0===e?void 0:e.focus()}),200):(R(0),setTimeout((()=>{var e;return null===(e=P.current[0])||void 0===e?void 0:e.focus()}),200)))}),[l,A,L,R]),d((()=>{L&&j&&(l||"success"===s&&I.current&&(R(-1),I.current.focus()))}),[L,j,s,R,l]),d((()=>{M(""===T?n:O?W():Y())}),[W,Y,n,O,T]);const q=e=>r?t(e?gs:ms,{"aria-hidden":!0}):e?t(hs,{"aria-hidden":!0}):t(ps,{}),X=(e,n)=>{const r=N(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(cl,{displayType:f,label:o,maxLines:u,selected:n,sublabel:i,truncationType:c,variant:h})},G=()=>{if(!w||w&&"success"===s)return C.map(((t,n)=>{const i=(e=>!!pl(o,(t=>ml(t,e))))(t),a=n===A;return e(fs,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>V(t,n),onMouseEnter:()=>(e=>{R(e)})(n),ref:e=>P.current[n]=e,role:"option",tabIndex:a?0:-1,$active:a},{children:[q(i),$?$(t,{selected:i}):X(t,i)]}),((e,t)=>`item_${t}__${S?S(e):e}`)(t,n))}))},K=()=>{if((D||O)&&"success"===s)return t(Hs,{ref:I,onChange:U,value:T,placeholder:E,"data-testid":"search-input","aria-label":"Enter text to search",onClear:J,variant:h})},Q=()=>{if(r&&C.length>0&&!T&&"success"===s)return t(vs,{children:t(ws,Object.assign({onClick:y,type:"button",$variant:h},{children:0===o.length?"Select all":"Clear all"}))})},ee=()=>{if(!B&&(T||!D)&&0===C.length&&"success"===s)return e(Ss,Object.assign({"data-testid":"list-no-results"},{children:[t($s,{"data-testid":"no-result-icon",$variant:h}),t(xs,Object.assign({$variant:h},{children:"No results found."}))]}))},te=()=>{if(w&&"loading"===s){const n="small"===h?16:18;return e(Ss,Object.assign({"data-testid":"list-loading"},{children:[t(kl,{$buttonStyle:"secondary",size:n}),t(xs,Object.assign({$variant:h},{children:"Loading..."}))]}))}},ne=()=>{if(w&&"fail"===s)return e(Ss,Object.assign({"data-testid":"list-fail"},{children:[t($s,{"data-testid":"load-error-icon",$variant:h}),t(xs,Object.assign({$variant:h},{children:"Failed to load."}))," ",t(bs,Object.assign({onClick:Z,type:"button",$variant:h},{children:"Try again."}))]}))};return e(cs,Object.assign({"data-testid":"dropdown-container",ref:_,$width:g},{children:[e(us,Object.assign({ref:z,"data-testid":"dropdown-list"},{children:[K(),Q(),ee(),te(),ne(),t(ds,Object.assign({role:"listbox",id:p},{children:G()}))]})),(()=>{if(F)return t("div",Object.assign({"data-testid":"custom-cta"},{children:F(b,C)}))})()]}))},Ms="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",js=v(ss)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Ya("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Ls=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ms};

    svg {
        color: ${qa.Neutral[3]};
        ${e=>{const t="small"===e.$variant?_a.BodySmall.fontSize:_a.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,_s=g((({children:n,disabled:r,expanded:o,listboxId:i,readOnly:a,variant:l},s)=>e(js,Object.assign({ref:s,type:"button","aria-expanded":o,"aria-haspopup":"listbox","data-testid":"selector",disabled:r,"aria-controls":i,$variant:l},{children:[n,!a&&t(Ls,Object.assign({$expanded:o,$variant:l},{children:t(R,{"aria-hidden":!0})}))]})))),zs=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=zs(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Ps=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>zs(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${qa.Accent.Light[3]};
    }
`,Is=v.button`
    ${Ps}
    cursor: pointer;
`;v.div`
    ${Ps}
`;const Ns=w`
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
    border: 1px solid ${qa.Neutral[5]};
    border-radius: ${"4px"};
    background: ${qa.Neutral[8]};

    :focus-within {
        border: 1px solid ${qa.Accent.Light[1]};
        box-shadow: ${Ol.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Ns} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${qa.Neutral[6](e)};

                ${Is} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${qa.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${Is} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${qa.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${qa.Validation.Red.Border(e)};
                    box-shadow: ${Ol.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Ms};
    margin-left: 1rem;
`,v(R)`
    color: ${qa.Neutral[3]};
    ${e=>{let t=_a.Body.fontSize;return"small"===e.$variant&&(t=_a.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${qa.Neutral[5]};
    margin: 0 0.5rem;
`;const Ws=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Ys=v.div`
    ${e=>Ya("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Vs=v(Ys)`
    color: ${qa.Neutral[3]};
`;function Us(e){return qs(e)?(e.nodeName||"").toLowerCase():"#document"}function Js(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Zs(e){var t;return null==(t=(qs(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function qs(e){return e instanceof Node||e instanceof Js(e).Node}function Xs(e){return e instanceof Element||e instanceof Js(e).Element}function Gs(e){return e instanceof HTMLElement||e instanceof Js(e).HTMLElement}function Ks(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Js(e).ShadowRoot)}function Qs(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=oc(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function ec(e){return["table","td","th"].includes(Us(e))}function tc(e){const t=nc(),n=oc(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function nc(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function rc(e){return["html","body","#document"].includes(Us(e))}function oc(e){return Js(e).getComputedStyle(e)}function ic(e){return Xs(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ac(e){if("html"===Us(e))return e;const t=e.assignedSlot||e.parentNode||Ks(e)&&e.host||Zs(e);return Ks(t)?t.host:t}function lc(e){const t=ac(e);return rc(t)?e.ownerDocument?e.ownerDocument.body:e.body:Gs(t)&&Qs(t)?t:lc(t)}function sc(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=lc(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=Js(o);return i?t.concat(a,a.visualViewport||[],Qs(o)?o:[],a.frameElement&&n?sc(a.frameElement):[]):t.concat(o,sc(o,[],n))}function cc(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function uc(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Ks(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function dc(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function fc(e){return!dc().includes("jsdom/")&&(!hc()&&0===e.width&&0===e.height||hc()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function hc(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(dc())}function pc(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function gc(e){return(null==e?void 0:e.ownerDocument)||document}function mc(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function vc(e){return"composedPath"in e?e.composedPath()[0]:e.target}const yc="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function bc(e){return Gs(e)&&e.matches(yc)}function wc(e){e.preventDefault(),e.stopPropagation()}const Sc=Math.min,xc=Math.max,$c=Math.round,Fc=Math.floor,Dc=e=>({x:e,y:e}),Bc={left:"right",right:"left",bottom:"top",top:"bottom"},Ec={start:"end",end:"start"};function Oc(e,t,n){return xc(e,Sc(t,n))}function kc(e,t){return"function"==typeof e?e(t):e}function Ac(e){return e.split("-")[0]}function Rc(e){return e.split("-")[1]}function Tc(e){return"x"===e?"y":"x"}function Hc(e){return"y"===e?"height":"width"}function Cc(e){return["top","bottom"].includes(Ac(e))?"y":"x"}function Mc(e){return Tc(Cc(e))}function jc(e){return e.replace(/start|end/g,(e=>Ec[e]))}function Lc(e){return e.replace(/left|right|bottom|top/g,(e=>Bc[e]))}function _c(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function zc(e,t,n){let{reference:r,floating:o}=e;const i=Cc(t),a=Mc(t),l=Hc(a),s=Ac(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(s){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(Rc(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function Pc(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=kc(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===d?"reference":"floating":d],m=_c(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:s})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=_c(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:s}):v);return{top:(m.top-w.top+p.top)/b.y,bottom:(w.bottom-m.bottom+p.bottom)/b.y,left:(m.left-w.left+p.left)/b.x,right:(w.right-m.right+p.right)/b.x}}function Ic(e){const t=oc(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Gs(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=$c(n)!==i||$c(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function Nc(e){return Xs(e)?e:e.contextElement}function Wc(e){const t=Nc(e);if(!Gs(t))return Dc(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Ic(t);let a=(i?$c(n.width):n.width)/r,l=(i?$c(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Yc=Dc(0);function Vc(e){const t=Js(e);return nc()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Yc}function Uc(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Nc(e);let a=Dc(1);t&&(r?Xs(r)&&(a=Wc(r)):a=Wc(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Js(e))&&t}(i,n,r)?Vc(i):Dc(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=Js(i),t=r&&Xs(r)?Js(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=Wc(o),t=o.getBoundingClientRect(),r=oc(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,u*=e.x,d*=e.y,s+=i,c+=a,n=Js(o),o=n.frameElement}}return _c({width:u,height:d,x:s,y:c})}const Jc=[":popover-open",":modal"];function Zc(e){return Jc.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function qc(e){return Uc(Zs(e)).left+ic(e).scrollLeft}function Xc(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Js(e),r=Zs(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const e=nc();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=function(e){const t=Zs(e),n=ic(e),r=e.ownerDocument.body,o=xc(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=xc(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+qc(e);const l=-n.scrollTop;return"rtl"===oc(r).direction&&(a+=xc(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(Zs(e));else if(Xs(t))r=function(e,t){const n=Uc(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Gs(e)?Wc(e):Dc(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Vc(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return _c(r)}function Gc(e,t){const n=ac(e);return!(n===t||!Xs(n)||rc(n))&&("fixed"===oc(n).position||Gc(n,t))}function Kc(e,t,n){const r=Gs(t),o=Zs(t),i="fixed"===n,a=Uc(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=Dc(0);if(r||!r&&!i)if(("body"!==Us(t)||Qs(o))&&(l=ic(t)),r){const e=Uc(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=qc(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function Qc(e){return"static"===oc(e).position}function eu(e,t){return Gs(e)&&"fixed"!==oc(e).position?t?t(e):e.offsetParent:null}function tu(e,t){const n=Js(e);if(Zc(e))return n;if(!Gs(e)){let t=ac(e);for(;t&&!rc(t);){if(Xs(t)&&!Qc(t))return t;t=ac(t)}return n}let r=eu(e,t);for(;r&&ec(r)&&Qc(r);)r=eu(r,t);return r&&rc(r)&&Qc(r)&&!tc(r)?n:r||function(e){let t=ac(e);for(;Gs(t)&&!rc(t);){if(tc(t))return t;t=ac(t)}return null}(e)||n}const nu={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Zs(r),l=!!t&&Zc(t.floating);if(r===a||l&&i)return n;let s={scrollLeft:0,scrollTop:0},c=Dc(1);const u=Dc(0),d=Gs(r);if((d||!d&&!i)&&(("body"!==Us(r)||Qs(a))&&(s=ic(r)),Gs(r))){const e=Uc(r);c=Wc(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:Zs,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Zc(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=sc(e,[],!1).filter((e=>Xs(e)&&"body"!==Us(e))),o=null;const i="fixed"===oc(e).position;let a=i?ac(e):e;for(;Xs(a)&&!rc(a);){const t=oc(a),n=tc(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Qs(a)&&!n&&Gc(e,a))?r=r.filter((e=>e!==a)):o=t,a=ac(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=Xc(t,n,o);return e.top=xc(r.top,e.top),e.right=Sc(r.right,e.right),e.bottom=Sc(r.bottom,e.bottom),e.left=xc(r.left,e.left),e}),Xc(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:tu,getElementRects:async function(e){const t=this.getOffsetParent||tu,n=this.getDimensions,r=await n(e.floating);return{reference:Kc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Ic(e);return{width:t,height:n}},getScale:Wc,isElement:Xs,isRTL:function(e){return"rtl"===oc(e).direction}};function ru(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=Nc(e),u=o||i?[...c?sc(c):[],...sc(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&l?function(e,t){let n,r=null;const o=Zs(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h={rootMargin:-Fc(u)+"px "+-Fc(o.clientWidth-(c+d))+"px "+-Fc(o.clientHeight-(u+f))+"px "+-Fc(c)+"px",threshold:xc(0,Sc(1,s))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==s){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!s&&p.observe(c),p.observe(t));let g=s?Uc(e):null;return s&&function t(){const r=Uc(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,s&&cancelAnimationFrame(f)}}const ou=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Ac(n),l=Rc(n),s="y"===Cc(n),c=["left","top"].includes(a)?-1:1,u=i&&s?-1:1,d=kc(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),s?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}}},iu=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=kc(e,t),c={x:n,y:r},u=await Pc(t,s),d=Cc(Ac(o)),f=Tc(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=Oc(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=Oc(p+u["y"===d?"top":"left"],p,p-u[e])}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},au=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:s,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=kc(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=Ac(o),y=Ac(l)===l,b=await(null==s.isRTL?void 0:s.isRTL(c.floating)),w=f||(y||!g?[Lc(l)]:function(e){const t=Lc(e);return[jc(e),t,jc(t)]}(l));f||"none"===p||w.push(...function(e,t,n,r){const o=Rc(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Ac(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(jc)))),i}(l,g,p,b));const S=[l,...w],x=await Pc(t,m),$=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(x[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=Rc(e),o=Mc(e),i=Hc(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Lc(a)),[a,Lc(a)]}(o,a,b);$.push(x[e[0]],x[e[1]])}if(F=[...F,{placement:o,overflows:$}],!$.every((e=>e<=0))){var D,B;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=S[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(B=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:B.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},lu=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=kc(e,t),s=await Pc(t,l),c=Ac(n),u=Rc(n),d="y"===Cc(n),{width:f,height:h}=r.floating;let p,g;"top"===c||"bottom"===c?(p=c,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,p="end"===u?"top":"bottom");const m=h-s.top-s.bottom,v=f-s.left-s.right,y=Sc(h-s[p],m),b=Sc(f-s[g],v),w=!t.middlewareData.shift;let S=y,x=b;if(d?x=u||w?Sc(b,v):v:S=u||w?Sc(y,m):m,w&&!u){const e=xc(s.left,0),t=xc(s.right,0),n=xc(s.top,0),r=xc(s.bottom,0);d?x=f-2*(0!==e||0!==t?e+t:xc(s.left,s.right)):S=h-2*(0!==n||0!==r?n+r:xc(s.top,s.bottom))}await a({...t,availableWidth:x,availableHeight:S});const $=await o.getDimensions(i.floating);return f!==$.width||h!==$.height?{reset:{rects:!0}}:{}}}},su=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=kc(e,t),u={x:n,y:r},d=Cc(o),f=Tc(d);let h=u[f],p=u[d];const g=kc(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(s){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var v,y;const e="y"===f?"width":"height",t=["top","left"].includes(Ac(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(v=a.offset)?void 0:v[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(y=a.offset)?void 0:y[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},cu=(e,t,n)=>{const r=new Map,o={platform:nu,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=zc(c,r,s),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:v,data:y,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=v?v:d,h={...h,[i]:{...h[i],...y}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=zc(c,f,s))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var uu="undefined"!=typeof document?f:d;function du(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!du(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!du(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function fu(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function hu(e,t){const n=fu(e);return Math.round(t*n)/n}function pu(e){const t=r.useRef(e);return uu((()=>{t.current=e})),t}const gu=(e,t)=>({...iu(e),options:[e,t]}),mu=(e,t)=>({...su(e),options:[e,t]}),vu=(e,t)=>({...au(e),options:[e,t]}),yu=(e,t)=>({...lu(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var bu=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),wu="undefined"==typeof Element,Su=wu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,xu=!wu&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},$u=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Fu=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!$u(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),s=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{Su.call(a,bu)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!$u(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Du=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Bu=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Du(e)?0:e.tabIndex},Eu=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ou=function(e){return"INPUT"===e.tagName},ku=function(e){return function(e){return Ou(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||xu(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Au=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Ru=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=Su.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Su.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Au(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=xu(e);if(a&&!a.shadowRoot&&!0===r(a))return Au(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&xu(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var s,c,u;l=!(null===(c=a=null===(s=i=xu(a))||void 0===s?void 0:s.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Tu=function(e,t){return!(t.disabled||$u(t)||function(e){return Ou(e)&&"hidden"===e.type}(t)||Ru(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Su.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},Hu=function(e,t){return!(ku(t)||Bu(t)<0||!Tu(e,t))},Cu=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Mu=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=Bu(e);return n<0&&t&&!Du(e)?0:n}(a,i),s=i?e(t.candidates):a;0===l?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:s})})),r.sort(Eu).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},ju=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Fu([e],t.includeContainer,{filter:Hu.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Cu}):function(e,t,n){if($u(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(bu));return t&&Su.call(e,bu)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,Hu.bind(null,t)),Mu(n)},Lu=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==Su.call(e,bu)&&Hu(t,e)};const _u={...r},zu=_u.useInsertionEffect||(e=>e());function Pu(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return zu((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let Iu=0;function Nu(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(Iu);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():Iu=requestAnimationFrame(i)}var Wu="undefined"!=typeof document?f:d;function Yu(){return Yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yu.apply(this,arguments)}let Vu=!1,Uu=0;const Ju=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Uu++;const Zu=_u.useId||function(){const[e,t]=r.useState((()=>Vu?Ju():void 0));return Wu((()=>{null==e&&t(Ju())}),[]),r.useEffect((()=>{Vu=!0}),[]),e};let qu;"production"!==process.env.NODE_ENV&&(qu=new Set);const Xu=r.createContext(null),Gu=r.createContext(null),Ku=()=>{var e;return(null==(e=r.useContext(Xu))?void 0:e.id)||null},Qu=()=>r.useContext(Gu);function ed(e){return"data-floating-ui-"+e}function td(e){const t=i(e);return Wu((()=>{t.current=e})),t}function nd(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let rd=new WeakMap,od=new WeakSet,id={},ad=0;const ld=e=>e&&(e.host||ld(e.parentNode)),sd=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=ld(t);return e.contains(n)?n:null})).filter((e=>null!=e));function cd(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=gc(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=sd(t,e),l=new Set,s=new Set(a),c=[];id[o]||(id[o]=new WeakMap);const u=id[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!s.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==Us(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(rd.get(t)||0)+1,a=(u.get(t)||0)+1;rd.set(t,r),u.set(t,a),c.push(t),1===r&&n&&od.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),ad++,()=>{c.forEach((e=>{const t=(rd.get(e)||0)-1,n=(u.get(e)||0)-1;rd.set(e,t),u.set(e,n),t||(!od.has(e)&&i&&e.removeAttribute(i),od.delete(e)),n||e.removeAttribute(o)})),ad--,ad||(rd=new WeakMap,rd=new WeakMap,od=new WeakSet,id={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const ud=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function dd(e,t){const n=ju(e,ud());"prev"===t&&n.reverse();const r=n.indexOf(cc(gc(e)));return n.slice(r+1)[0]}function fd(){return dd(document.body,"next")}function hd(){return dd(document.body,"prev")}function pd(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!uc(n,r)}function gd(e){ju(e,ud()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function md(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const vd={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function yd(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const bd=r.forwardRef((function(e,t){const[n,o]=r.useState();Wu((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",yd),()=>{document.removeEventListener("keydown",yd)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[ed("focus-guard")]:"",style:vd};return r.createElement("span",Yu({},e,i))})),wd=r.createContext(null),Sd=ed("portal");function xd(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=Zu(),i=$d(),[a,l]=r.useState(null),s=r.useRef(null);return Wu((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{s.current=null}))}),[a]),Wu((()=>{if(!o)return;if(s.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(Sd,""),e.appendChild(n),s.current=n,l(n)}),[t,o]),Wu((()=>{if(!o)return;if(s.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!Xs(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(Sd,""),e=r||e,e.appendChild(a),s.current=a,l(a)}),[t,n,o,i]),a}({id:n,root:o}),[l,s]=r.useState(null),c=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&pd(e)){("focusin"===e.type?md:gd)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(wd.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:s})),[i,a])},h&&a&&r.createElement(bd,{"data-type":"outside",ref:c,onFocus:e=>{if(pd(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=hd()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:vd}),a&&F(t,a),h&&a&&r.createElement(bd,{"data-type":"outside",ref:u,onFocus:e=>{if(pd(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=fd()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const $d=()=>r.useContext(wd),Fd=20;let Dd=[];function Bd(e){Dd=Dd.filter((e=>e.isConnected));let t=e;if(t&&"body"!==Us(t)){if(!Lu(t,ud())){const e=ju(t,ud())[0];e&&(t=e)}Dd.push(t),Dd.length>Fd&&(Dd=Dd.slice(-Fd))}}function Ed(){return Dd.slice().reverse().find((e=>e.isConnected))}const Od=r.forwardRef((function(e,t){return r.createElement("button",Yu({},e,{type:"button",ref:t,tabIndex:-1,style:vd}))}));function kd(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:s=!0,modal:c=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:v,elements:{domReference:y,floating:b}}=t,w="number"==typeof l&&l<0,S=!!(x=y)&&"combobox"===x.getAttribute("role")&&bc(x)&&w;var x;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,F=td(i),D=td(l),B=td(s),E=Qu(),O=$d(),k=r.useRef(null),A=r.useRef(null),R=r.useRef(!1),T=r.useRef(!1),H=null!=O,C=r.useCallback((function(e){return void 0===e&&(e=b),e?ju(e,ud()):[]}),[b]),M=r.useCallback((e=>{const t=C(e);return F.current.map((e=>y&&"reference"===e?y:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[y,b,F,C]);function j(e){return!o&&u&&c?r.createElement(Od,{ref:"start"===e?k:A,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){uc(b,cc(gc(b)))&&0===C().length&&!S&&wc(e);const t=M(),n=vc(e);"reference"===F.current[0]&&n===y&&(wc(e),e.shiftKey?Nu(t[t.length-1]):Nu(t[1])),"floating"===F.current[1]&&n===b&&e.shiftKey&&(wc(e),Nu(t[0]))}}const t=gc(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,y,b,c,F,S,C,M]),r.useEffect((()=>{if(!o&&d)return b&&Gs(y)?(y.addEventListener("focusout",t),y.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{y.removeEventListener("focusout",t),y.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){T.current=!0,setTimeout((()=>{T.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(uc(y,t)||uc(b,t)||uc(t,b)||uc(null==O?void 0:O.portalNode,t)||null!=t&&t.hasAttribute(ed("focus-guard"))||E&&(nd(E.nodesRef.current,p).find((e=>{var n,r;return uc(null==(n=e.context)?void 0:n.elements.floating,t)||uc(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!T.current&&t!==Ed()&&(R.current=!0,g(!1,e))}))}}),[o,y,b,c,p,E,O,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==O||null==(e=O.portalNode)?void 0:e.querySelectorAll("["+ed("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,A.current,F.current.includes("reference")||S?y:null].filter((e=>null!=e)),n=c||S?cd(e,$,!$):cd(e);return()=>{n()}}}),[o,y,b,c,F,O,S,$]),Wu((()=>{if(o||!b)return;const e=cc(gc(b));queueMicrotask((()=>{const t=M(b),n=D.current,r=("number"==typeof n?t[n]:n.current)||b,o=uc(b,e);w||o||!f||Nu(r,{preventScroll:r===b})}))}),[o,f,b,w,M,D]),Wu((()=>{if(o||!b)return;let e=!1;const t=gc(b),n=cc(t);let r=v.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&Bd(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(hc()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||fc(i)))}return Bd(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=cc(t),o=uc(b,n)||E&&nd(E.nodesRef.current,p).some((e=>{var t;return uc(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&Bd(h.domReference.current);const a=Ed();B.current&&!R.current&&Gs(a)&&(a===n||n===t.body||o)&&Nu(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,B,v,h,m,E,p]),Wu((()=>{if(!o&&O)return O.setFocusManagerState({modal:c,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{O.setFocusManagerState(null)}}),[o,O,c,f,g,h,d]),Wu((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");F.current.includes("floating")||cc(gc(b))!==h.domReference.current&&0===C().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,F,C,w]);const L=!o&&$&&(H||c);return r.createElement(r.Fragment,null,L&&r.createElement(bd,{"data-type":"inside",ref:null==O?void 0:O.beforeInsideRef,onFocus:e=>{if(c){const e=M();Nu("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(R.current=!1,pd(e,O.portalNode)){const e=fd()||y;null==e||e.focus()}else{var t;null==(t=O.beforeOutsideRef.current)||t.focus()}}}),!S&&j("start"),n,j("end"),L&&r.createElement(bd,{"data-type":"inside",ref:null==O?void 0:O.afterInsideRef,onFocus:e=>{if(c)Nu(M()[0]);else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(d&&(R.current=!0),pd(e,O.portalNode)){const e=hd()||y;null==e||e.focus()}else{var t;null==(t=O.afterOutsideRef.current)||t.focus()}}}))}function Ad(e){return Gs(e.target)&&"BUTTON"===e.target.tagName}function Rd(e){return bc(e)}const Td={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Hd={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Cd=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function Md(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=Zu(),a=r.useRef({}),[l]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),s=null!=Ku();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!Xs(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=qu)&&e.has(o)||(null==(i=qu)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=r.useState(o.reference),d=Pu(((e,t,r)=>{a.current.openEvent=e?t:void 0,l.emit("openchange",{open:e,event:t,reason:r,nested:s}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:c||o.reference||null,floating:o.floating||null,domReference:o.reference})),[c,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:l,floatingId:i,refs:f})),[t,d,h,l,i,f])}function jd(e){void 0===e&&(e={});const{nodeId:t}=e,n=Md({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,l]=r.useState(null),[s,c]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=Qu();Wu((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);du(h,o)||p(o);const[g,m]=r.useState(null),[v,y]=r.useState(null),b=r.useCallback((e=>{e!==F.current&&(F.current=e,m(e))}),[]),w=r.useCallback((e=>{e!==D.current&&(D.current=e,y(e))}),[]),S=a||g,$=l||v,F=r.useRef(null),D=r.useRef(null),B=r.useRef(d),E=null!=c,O=pu(c),k=pu(i),A=r.useCallback((()=>{if(!F.current||!D.current)return;const e={placement:t,strategy:n,middleware:h};k.current&&(e.platform=k.current),cu(F.current,D.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!du(B.current,t)&&(B.current=t,x.flushSync((()=>{f(t)})))}))}),[h,t,n,k]);uu((()=>{!1===u&&B.current.isPositioned&&(B.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);uu((()=>(R.current=!0,()=>{R.current=!1})),[]),uu((()=>{if(S&&(F.current=S),$&&(D.current=$),S&&$){if(O.current)return O.current(S,$,A);A()}}),[S,$,A,O,E]);const T=r.useMemo((()=>({reference:F,floating:D,setReference:b,setFloating:w})),[b,w]),H=r.useMemo((()=>({reference:S,floating:$})),[S,$]),C=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!H.floating)return e;const t=hu(H.floating,d.x),r=hu(H.floating,d.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...fu(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,H.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:A,refs:T,elements:H,floatingStyles:C})),[d,A,T,H,C])}({...e,elements:{...i,...s&&{reference:s}}}),p=r.useCallback((e=>{const t=Xs(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(Xs(e)||null===e)&&(d.current=e,l(e)),(Xs(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!Xs(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),v=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),y=r.useMemo((()=>({...h,...o,refs:m,elements:v,nodeId:t})),[h,m,v,t,o]);return Wu((()=>{o.dataRef.current.floatingContext=y;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=y)})),r.useMemo((()=>({...h,context:y,refs:m,elements:v})),[h,m,v,y])}const Ld="active",_d="selected";function zd(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[Ld]:t,[_d]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Ld,_d].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const Pd=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function Id(e,t){return"function"==typeof e?e(t):e}function Nd(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,s]=r.useState("unmounted"),c=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return c||"close"!==l||s("unmounted"),Wu((()=>{if(o){if(n){s("initial");const e=requestAnimationFrame((()=>{s("open")}));return()=>{cancelAnimationFrame(e)}}s("close")}}),[n,o]),{isMounted:c,status:l}}const Wd=v.div`
    display: flex;
    flex-direction: column;
`,Yd=e=>"right"===e?"bottom-end":"bottom-start",Vd=({enabled:o,isOpen:a,onOpen:l,onClose:s,onDismiss:c,renderElement:u,renderDropdown:d,zIndex:f=50,clickToToggle:h=!1,offset:p=0,alignment:g="left",fitAvailableHeight:m})=>{const v=i(null),y=i(null),{width:b}=Oa({targetRef:v,handleHeight:!1}),{refs:w,floatingStyles:S,context:x}=jd({open:a,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!a?null==l||l():!e&&a&&(null==s||s(n))},whileElementsMounted:ru,placement:Yd(g),middleware:[($=p,{...ou($),options:[$,F]}),vu(),gu({limiter:mu()}),yu({apply({availableHeight:e}){y.current&&Object.assign(y.current.style,{maxHeight:m?`${e}px`:void 0,overflowY:m?"hidden":void 0})}})]});var $,F;const{isMounted:D,styles:B}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,s=e.placement,c=s.split("-")[0],u=r.useMemo((()=>({side:c,placement:s})),[c,s]),d="number"==typeof l,f=(d?l:l.open)||0,h=(d?l:l.close)||0,[p,g]=r.useState((()=>({...Id(a,u),...Id(n,u)}))),{isMounted:m,status:v}=Nd(e,{duration:l}),y=td(n),b=td(o),w=td(i),S=td(a);return Wu((()=>{const e=Id(y.current,u),t=Id(w.current,u),n=Id(S.current,u),r=Id(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===v&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===v&&g({transitionProperty:Object.keys(r).map(Pd).join(","),transitionDuration:f+"ms",...n,...r}),"close"===v){const r=t||e;g({transitionProperty:Object.keys(r).map(Pd).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,y,b,S,f,v,u]),{isMounted:m,styles:p}}(x,{initial:{opacity:0},open:{opacity:1},duration:300}),E=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(pc(f.current,!0)&&u||"click"!==s&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===s&&f.current?f.current=void 0:pc(f.current,!0)&&u||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||Ad(e)||(" "!==e.key||Rd(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||Ad(e)||Rd(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[l,i,s,u,d,a,c,n,o])}(x,{enabled:o,toggle:h}),O=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:l},dataRef:s}=e,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:v}=t,y=Qu(),b=Pu("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,S=r.useRef(!1),x=r.useRef(!1),{escapeKey:$,outsidePress:F}=Cd(m),{escapeKey:D,outsidePress:B}=Cd(v),E=Pu((e=>{var t;if(!n||!c||!u||"Escape"!==e.key)return;const r=null==(t=s.current.floatingContext)?void 0:t.nodeId,i=y?nd(y.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),O=Pu((e=>{var t;const n=()=>{var t;E(e),null==(t=vc(e))||t.removeEventListener("keydown",n)};null==(t=vc(e))||t.addEventListener("keydown",n)})),k=Pu((e=>{var t;const n=S.current;S.current=!1;const r=x.current;if(x.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=vc(e),c="["+ed("inert")+"]",u=gc(l).querySelectorAll(c);let d=Xs(i)?i:null;for(;d&&!rc(d);){const e=ac(d);if(rc(e)||!Xs(e))break;d=e}if(u.length&&Xs(i)&&!i.matches("html,body")&&!uc(i,l)&&Array.from(u).every((e=>!uc(d,e))))return;if(Gs(i)&&l){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===oc(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=s.current.floatingContext)?void 0:t.nodeId,p=y&&nd(y.nodesRef.current,h).some((t=>{var n;return mc(e,null==(n=t.context)?void 0:n.elements.floating)}));if(mc(e,l)||mc(e,a)||p)return;const g=y?nd(y.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),A=Pu((e=>{var t;const n=()=>{var t;k(e),null==(t=vc(e))||t.removeEventListener(f,n)};null==(t=vc(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!c)return;function e(e){o(!1,e,"ancestor-scroll")}s.current.__escapeKeyBubbles=$,s.current.__outsidePressBubbles=F;const t=gc(l);u&&t.addEventListener("keydown",D?O:E,D),w&&t.addEventListener(f,B?A:k,B);let r=[];return g&&(Xs(a)&&(r=sc(a)),Xs(l)&&(r=r.concat(sc(l))),!Xs(i)&&i&&i.contextElement&&(r=r.concat(sc(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",D?O:E,D),w&&t.removeEventListener(f,B?A:k,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[s,l,a,i,u,w,f,n,o,g,c,$,F,E,D,O,k,B,A]),r.useEffect((()=>{S.current=!1}),[w,f]),r.useMemo((()=>c?{reference:{onKeyDown:E,[Td[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){x.current=!0},onMouseUp(){x.current=!0},[Hd[f]]:()=>{S.current=!0}}}:{}),[c,h,f,p,o,E])}(x,{enabled:o}),{getReferenceProps:k,getFloatingProps:A}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>zd(t,e,"reference")),t),o=r.useCallback((t=>zd(t,e,"floating")),t),i=r.useCallback((t=>zd(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([E,O]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,w.setReference(e)}},k(),{children:u()})),D&&t(xd,{children:t(kd,Object.assign({context:x,modal:!1,initialFocus:y,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},S),{zIndex:f})},A(),{children:t(Wd,Object.assign({ref:y,style:Object.assign({},B),inert:B.opacity<1?"":void 0},{children:d({elementWidth:b})}))}))}))})]})},Ud=({selectedOptions:e,placeholder:n="Select",options:r,disabled:o,error:l,className:s,"data-testid":c,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,listExtractor:m,onSelectOptions:v,onShowOptions:y,onHideOptions:b,onRetry:w,optionsLoadState:S="success",optionTruncationType:x="end",renderListItem:$,hideNoResultsDisplay:F,renderCustomCallToAction:D,onBlur:B,variant:E="default",readOnly:O,alignment:k,dropdownZIndex:A})=>{const[R,T]=a(e||[]),[H,C]=a(!1),[M,j]=a(!1),[L]=a((()=>Gl.generate())),_=i(),z=i();d((()=>{T(e||[])}),[e]);const P=()=>{R&&R.length>0?(T([]),U([])):(T(r),U(r))},I=(e,t)=>{const n=[...R],r=Ti(R,(e=>(g?g(e):e)===t));r>-1?n.splice(r,1):n.push(e),T(n),U(n)},N=()=>{H&&(C(!1),V(!1))},W=()=>{M||H||j(!0)},Y=e=>{!M||H||_.current.contains(e.relatedTarget)||(j(!1),null==B||B())},V=e=>{!e&&b&&b(),e&&y&&y()},U=e=>{v&&v(e)};return t(ts,{children:t(Vd,{enabled:!O&&!o,isOpen:H,renderElement:()=>t(as,Object.assign({className:s,"data-testid":c,id:u,ref:_,tabIndex:-1,onFocus:W,onBlur:Y,$focused:M,$disabled:o,$readOnly:O,$error:l},{children:t(_s,Object.assign({ref:z,disabled:o,expanded:H,listboxId:L,readOnly:O,variant:E},{children:t(Ws,{children:R&&0!==R.length?t(Ys,Object.assign({$variant:E},{children:r&&R.length===r.length?"All selected":`${R.length} selected`})):t(Vs,Object.assign({truncateType:x,$variant:E},{children:n}))})}))})),renderDropdown:({elementWidth:e})=>t(Cs,{listboxId:L,listItems:r,onSelectItem:I,onDismiss:N,valueExtractor:g,listExtractor:m,enableSearch:f,searchFunction:h,searchPlaceholder:p,multiSelect:!0,selectedItems:R,onSelectAll:P,onRetry:w,itemsLoadState:S,itemTruncationType:x,renderListItem:$,hideNoResultsDisplay:F,renderCustomCallToAction:D,variant:E,width:e}),onOpen:()=>{C(!0),V(!0),j(!0)},onClose:e=>{C(!1),V(!1),"click"!==e&&(j(!1),null==B||B())},onDismiss:()=>{z.current.focus(),C(!1),V(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,zIndex:A})})};export{Ud as InputMultiSelect};
//# sourceMappingURL=index.js.map
