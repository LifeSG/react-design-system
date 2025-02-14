import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,useCallback as b,useMemo as g,forwardRef as f,useContext as m}from"react";import p,{css as y,useTheme as v,keyframes as x}from"styled-components";import{findDOMNode as w}from"react-dom";import{ExclamationCircleFillIcon as $}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as F}from"@lifesg/react-icons/square";import{SquareTickFillIcon as D}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as E}from"@lifesg/react-icons/tick";import{CrossIcon as C}from"@lifesg/react-icons/cross";import{MagnifierIcon as O}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as A}from"@lifesg/react-icons/chevron-down";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as z}from"@lifesg/react-icons/minus-square-fill";import{useFloatingTree as j,useFloating as B,autoUpdate as _,offset as k,flip as S,shift as M,limitShift as T,size as Y,useTransitionStyles as L,useClick as I,useDismiss as R,useInteractions as W,FloatingPortal as H,FloatingFocusManager as P}from"@floating-ui/react";var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z=function(e,r,t,n){for(var i=e.length,o=t+(n?1:-1);n?o--:++o<i;)if(r(e[o],o,e))return o;return-1};var V=function(){this.__data__=[],this.size=0};var q=function(e,r){return e===r||e!=e&&r!=r},J=q;var X=function(e,r){for(var t=e.length;t--;)if(J(e[t][0],r))return t;return-1},G=X,Q=Array.prototype.splice;var K=function(e){var r=this.__data__,t=G(r,e);return!(t<0)&&(t==r.length-1?r.pop():Q.call(r,t,1),--this.size,!0)},ee=X;var re=function(e){var r=this.__data__,t=ee(r,e);return t<0?void 0:r[t][1]},te=X;var ne=function(e){return te(this.__data__,e)>-1},ie=X;var oe=function(e,r){var t=this.__data__,n=ie(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ae=V,se=K,le=re,de=ne,ce=oe;function ue(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ue.prototype.clear=ae,ue.prototype.delete=se,ue.prototype.get=le,ue.prototype.has=de,ue.prototype.set=ce;var he=ue,be=he;var ge=function(){this.__data__=new be,this.size=0};var fe=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var me=function(e){return this.__data__.get(e)};var pe=function(e){return this.__data__.has(e)},ye="object"==typeof N&&N&&N.Object===Object&&N,ve=ye,xe="object"==typeof self&&self&&self.Object===Object&&self,we=ve||xe||Function("return this")(),$e=we.Symbol,Fe=$e,De=Object.prototype,Ee=De.hasOwnProperty,Ce=De.toString,Oe=Fe?Fe.toStringTag:void 0;var Ae=function(e){var r=Ee.call(e,Oe),t=e[Oe];try{e[Oe]=void 0;var n=!0}catch(e){}var i=Ce.call(e);return n&&(r?e[Oe]=t:delete e[Oe]),i},ze=Object.prototype.toString;var je=Ae,Be=function(e){return ze.call(e)},_e=$e?$e.toStringTag:void 0;var ke=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_e&&_e in Object(e)?je(e):Be(e)};var Se=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Me=ke,Te=Se;var Ye,Le=function(e){if(!Te(e))return!1;var r=Me(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ie=we["__core-js_shared__"],Re=(Ye=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||""))?"Symbol(src)_1."+Ye:"";var We=function(e){return!!Re&&Re in e},He=Function.prototype.toString;var Pe=function(e){if(null!=e){try{return He.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ne=Le,Ue=We,Ze=Se,Ve=Pe,qe=/^\[object .+?Constructor\]$/,Je=Function.prototype,Xe=Object.prototype,Ge=Je.toString,Qe=Xe.hasOwnProperty,Ke=RegExp("^"+Ge.call(Qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var er=function(e,r){return null==e?void 0:e[r]},rr=function(e){return!(!Ze(e)||Ue(e))&&(Ne(e)?Ke:qe).test(Ve(e))},tr=er;var nr=function(e,r){var t=tr(e,r);return rr(t)?t:void 0},ir=nr(we,"Map"),or=nr(Object,"create"),ar=or;var sr=function(){this.__data__=ar?ar(null):{},this.size=0};var lr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},dr=or,cr=Object.prototype.hasOwnProperty;var ur=function(e){var r=this.__data__;if(dr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return cr.call(r,e)?r[e]:void 0},hr=or,br=Object.prototype.hasOwnProperty;var gr=function(e){var r=this.__data__;return hr?void 0!==r[e]:br.call(r,e)},fr=or;var mr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=fr&&void 0===r?"__lodash_hash_undefined__":r,this},pr=sr,yr=lr,vr=ur,xr=gr,wr=mr;function $r(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}$r.prototype.clear=pr,$r.prototype.delete=yr,$r.prototype.get=vr,$r.prototype.has=xr,$r.prototype.set=wr;var Fr=$r,Dr=he,Er=ir;var Cr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Or=function(e,r){var t=e.__data__;return Cr(r)?t["string"==typeof r?"string":"hash"]:t.map},Ar=Or;var zr=function(e){var r=Ar(this,e).delete(e);return this.size-=r?1:0,r},jr=Or;var Br=function(e){return jr(this,e).get(e)},_r=Or;var kr=function(e){return _r(this,e).has(e)},Sr=Or;var Mr=function(e,r){var t=Sr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Tr=function(){this.size=0,this.__data__={hash:new Fr,map:new(Er||Dr),string:new Fr}},Yr=zr,Lr=Br,Ir=kr,Rr=Mr;function Wr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Wr.prototype.clear=Tr,Wr.prototype.delete=Yr,Wr.prototype.get=Lr,Wr.prototype.has=Ir,Wr.prototype.set=Rr;var Hr=Wr,Pr=he,Nr=ir,Ur=Hr;var Zr=function(e,r){var t=this.__data__;if(t instanceof Pr){var n=t.__data__;if(!Nr||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new Ur(n)}return t.set(e,r),this.size=t.size,this},Vr=he,qr=ge,Jr=fe,Xr=me,Gr=pe,Qr=Zr;function Kr(e){var r=this.__data__=new Vr(e);this.size=r.size}Kr.prototype.clear=qr,Kr.prototype.delete=Jr,Kr.prototype.get=Xr,Kr.prototype.has=Gr,Kr.prototype.set=Qr;var et=Kr;var rt=Hr,tt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},nt=function(e){return this.__data__.has(e)};function it(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new rt;++r<t;)this.add(e[r])}it.prototype.add=it.prototype.push=tt,it.prototype.has=nt;var ot=function(e,r){return e.has(r)},at=it,st=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},lt=ot;var dt=function(e,r,t,n,i,o){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(e),c=o.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,b=2&t?new at:void 0;for(o.set(e,r),o.set(r,e);++u<s;){var g=e[u],f=r[u];if(n)var m=a?n(f,g,u,r,e,o):n(g,f,u,e,r,o);if(void 0!==m){if(m)continue;h=!1;break}if(b){if(!st(r,(function(e,r){if(!lt(b,r)&&(g===e||i(g,e,t,n,o)))return b.push(r)}))){h=!1;break}}else if(g!==f&&!i(g,f,t,n,o)){h=!1;break}}return o.delete(e),o.delete(r),h};var ct=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var ut=we.Uint8Array,ht=q,bt=dt,gt=ct,ft=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},mt=$e?$e.prototype:void 0,pt=mt?mt.valueOf:void 0;var yt=function(e,r,t,n,i,o,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!o(new ut(e),new ut(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ht(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=gt;case"[object Set]":var l=1&n;if(s||(s=ft),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=bt(s(e),s(r),n,i,o,a);return a.delete(e),c;case"[object Symbol]":if(pt)return pt.call(e)==pt.call(r)}return!1};var vt=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},xt=Array.isArray,wt=vt,$t=xt;var Ft=function(e,r,t){var n=r(e);return $t(e)?n:wt(n,t(e))};var Dt=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,o=[];++t<n;){var a=e[t];r(a,t,e)&&(o[i++]=a)}return o},Et=function(){return[]},Ct=Object.prototype.propertyIsEnumerable,Ot=Object.getOwnPropertySymbols,At=Ot?function(e){return null==e?[]:(e=Object(e),Dt(Ot(e),(function(r){return Ct.call(e,r)})))}:Et;var zt=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n};var jt=function(e){return null!=e&&"object"==typeof e},Bt=ke,_t=jt;var kt=function(e){return _t(e)&&"[object Arguments]"==Bt(e)},St=jt,Mt=Object.prototype,Tt=Mt.hasOwnProperty,Yt=Mt.propertyIsEnumerable,Lt=kt(function(){return arguments}())?kt:function(e){return St(e)&&Tt.call(e,"callee")&&!Yt.call(e,"callee")},It={exports:{}};var Rt=function(){return!1};!function(e,r){var t=we,n=Rt,i=r&&!r.nodeType&&r,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(It,It.exports);var Wt=It.exports,Ht=/^(?:0|[1-9]\d*)$/;var Pt=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&Ht.test(e))&&e>-1&&e%1==0&&e<r};var Nt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ut=ke,Zt=Nt,Vt=jt,qt={};qt["[object Float32Array]"]=qt["[object Float64Array]"]=qt["[object Int8Array]"]=qt["[object Int16Array]"]=qt["[object Int32Array]"]=qt["[object Uint8Array]"]=qt["[object Uint8ClampedArray]"]=qt["[object Uint16Array]"]=qt["[object Uint32Array]"]=!0,qt["[object Arguments]"]=qt["[object Array]"]=qt["[object ArrayBuffer]"]=qt["[object Boolean]"]=qt["[object DataView]"]=qt["[object Date]"]=qt["[object Error]"]=qt["[object Function]"]=qt["[object Map]"]=qt["[object Number]"]=qt["[object Object]"]=qt["[object RegExp]"]=qt["[object Set]"]=qt["[object String]"]=qt["[object WeakMap]"]=!1;var Jt=function(e){return Vt(e)&&Zt(e.length)&&!!qt[Ut(e)]};var Xt=function(e){return function(r){return e(r)}},Gt={exports:{}};!function(e,r){var t=ye,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&t.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Gt,Gt.exports);var Qt=Gt.exports,Kt=Jt,en=Xt,rn=Qt&&Qt.isTypedArray,tn=rn?en(rn):Kt,nn=zt,on=Lt,an=xt,sn=Wt,ln=Pt,dn=tn,cn=Object.prototype.hasOwnProperty;var un=function(e,r){var t=an(e),n=!t&&on(e),i=!t&&!n&&sn(e),o=!t&&!n&&!i&&dn(e),a=t||n||i||o,s=a?nn(e.length,String):[],l=s.length;for(var d in e)!r&&!cn.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||o&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||ln(d,l))||s.push(d);return s},hn=Object.prototype;var bn=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||hn)};var gn=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),fn=bn,mn=gn,pn=Object.prototype.hasOwnProperty;var yn=function(e){if(!fn(e))return mn(e);var r=[];for(var t in Object(e))pn.call(e,t)&&"constructor"!=t&&r.push(t);return r},vn=Le,xn=Nt;var wn=function(e){return null!=e&&xn(e.length)&&!vn(e)},$n=un,Fn=yn,Dn=wn;var En=function(e){return Dn(e)?$n(e):Fn(e)},Cn=Ft,On=At,An=En;var zn=function(e){return Cn(e,An,On)},jn=Object.prototype.hasOwnProperty;var Bn=function(e,r,t,n,i,o){var a=1&t,s=zn(e),l=s.length;if(l!=zn(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:jn.call(r,c)))return!1}var u=o.get(e),h=o.get(r);if(u&&h)return u==r&&h==e;var b=!0;o.set(e,r),o.set(r,e);for(var g=a;++d<l;){var f=e[c=s[d]],m=r[c];if(n)var p=a?n(m,f,c,r,e,o):n(f,m,c,e,r,o);if(!(void 0===p?f===m||i(f,m,t,n,o):p)){b=!1;break}g||(g="constructor"==c)}if(b&&!g){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(b=!1)}return o.delete(e),o.delete(r),b},_n=nr(we,"DataView"),kn=ir,Sn=nr(we,"Promise"),Mn=nr(we,"Set"),Tn=nr(we,"WeakMap"),Yn=ke,Ln=Pe,In="[object Map]",Rn="[object Promise]",Wn="[object Set]",Hn="[object WeakMap]",Pn="[object DataView]",Nn=Ln(_n),Un=Ln(kn),Zn=Ln(Sn),Vn=Ln(Mn),qn=Ln(Tn),Jn=Yn;(_n&&Jn(new _n(new ArrayBuffer(1)))!=Pn||kn&&Jn(new kn)!=In||Sn&&Jn(Sn.resolve())!=Rn||Mn&&Jn(new Mn)!=Wn||Tn&&Jn(new Tn)!=Hn)&&(Jn=function(e){var r=Yn(e),t="[object Object]"==r?e.constructor:void 0,n=t?Ln(t):"";if(n)switch(n){case Nn:return Pn;case Un:return In;case Zn:return Rn;case Vn:return Wn;case qn:return Hn}return r});var Xn=et,Gn=dt,Qn=yt,Kn=Bn,ei=Jn,ri=xt,ti=Wt,ni=tn,ii="[object Arguments]",oi="[object Array]",ai="[object Object]",si=Object.prototype.hasOwnProperty;var li=function(e,r,t,n,i,o){var a=ri(e),s=ri(r),l=a?oi:ei(e),d=s?oi:ei(r),c=(l=l==ii?ai:l)==ai,u=(d=d==ii?ai:d)==ai,h=l==d;if(h&&ti(e)){if(!ti(r))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new Xn),a||ni(e)?Gn(e,r,t,n,i,o):Qn(e,r,l,t,n,i,o);if(!(1&t)){var b=c&&si.call(e,"__wrapped__"),g=u&&si.call(r,"__wrapped__");if(b||g){var f=b?e.value():e,m=g?r.value():r;return o||(o=new Xn),i(f,m,t,n,o)}}return!!h&&(o||(o=new Xn),Kn(e,r,t,n,i,o))},di=jt;var ci=function e(r,t,n,i,o){return r===t||(null==r||null==t||!di(r)&&!di(t)?r!=r&&t!=t:li(r,t,n,i,e,o))},ui=et,hi=ci;var bi=function(e,r,t,n){var i=t.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=t[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=t[i])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new ui;if(n)var h=n(d,c,l,e,r,u);if(!(void 0===h?hi(c,d,3,n,u):h))return!1}}return!0},gi=Se;var fi=function(e){return e==e&&!gi(e)},mi=fi,pi=En;var yi=function(e){for(var r=pi(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,mi(i)]}return r};var vi=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},xi=bi,wi=yi,$i=vi;var Fi=function(e){var r=wi(e);return 1==r.length&&r[0][2]?$i(r[0][0],r[0][1]):function(t){return t===e||xi(t,e,r)}},Di=ke,Ei=jt;var Ci=function(e){return"symbol"==typeof e||Ei(e)&&"[object Symbol]"==Di(e)},Oi=xt,Ai=Ci,zi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ji=/^\w*$/;var Bi=function(e,r){if(Oi(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Ai(e))||(ji.test(e)||!zi.test(e)||null!=r&&e in Object(r))},_i=Hr;function ki(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return t.cache=o.set(i,a)||o,a};return t.cache=new(ki.Cache||_i),t}ki.Cache=_i;var Si=ki;var Mi=function(e){var r=Si(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ti=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yi=/\\(\\)?/g,Li=Mi((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ti,(function(e,t,n,i){r.push(n?i.replace(Yi,"$1"):t||e)})),r}));var Ii=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Ri=xt,Wi=Ci,Hi=$e?$e.prototype:void 0,Pi=Hi?Hi.toString:void 0;var Ni=function e(r){if("string"==typeof r)return r;if(Ri(r))return Ii(r,e)+"";if(Wi(r))return Pi?Pi.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Ui=Ni;var Zi=xt,Vi=Bi,qi=Li,Ji=function(e){return null==e?"":Ui(e)};var Xi=function(e,r){return Zi(e)?e:Vi(e,r)?[e]:qi(Ji(e))},Gi=Ci;var Qi=function(e){if("string"==typeof e||Gi(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Ki=Xi,eo=Qi;var ro=function(e,r){for(var t=0,n=(r=Ki(r,e)).length;null!=e&&t<n;)e=e[eo(r[t++])];return t&&t==n?e:void 0},to=ro;var no=function(e,r,t){var n=null==e?void 0:to(e,r);return void 0===n?t:n},io=U(no);var oo=function(e,r){return null!=e&&r in Object(e)},ao=Xi,so=Lt,lo=xt,co=Pt,uo=Nt,ho=Qi;var bo=function(e,r,t){for(var n=-1,i=(r=ao(r,e)).length,o=!1;++n<i;){var a=ho(r[n]);if(!(o=null!=e&&t(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&uo(i)&&co(a,i)&&(lo(e)||so(e))},go=oo,fo=bo;var mo=ci,po=no,yo=function(e,r){return null!=e&&fo(e,r,go)},vo=Bi,xo=fi,wo=vi,$o=Qi;var Fo=function(e){return function(r){return null==r?void 0:r[e]}},Do=ro;var Eo=Fo,Co=function(e){return function(r){return Do(r,e)}},Oo=Bi,Ao=Qi;var zo=Fi,jo=function(e,r){return vo(e)&&xo(r)?wo($o(e),r):function(t){var n=po(t,e);return void 0===n&&n===r?yo(t,e):mo(r,n,3)}},Bo=function(e){return e},_o=xt,ko=function(e){return Oo(e)?Eo(Ao(e)):Co(e)};var So=function(e){return"function"==typeof e?e:null==e?Bo:"object"==typeof e?_o(e)?jo(e[0],e[1]):zo(e):ko(e)},Mo=/\s/;var To=function(e){for(var r=e.length;r--&&Mo.test(e.charAt(r)););return r},Yo=/^\s+/;var Lo=function(e){return e?e.slice(0,To(e)+1).replace(Yo,""):e},Io=Se,Ro=Ci,Wo=/^[-+]0x[0-9a-f]+$/i,Ho=/^0b[01]+$/i,Po=/^0o[0-7]+$/i,No=parseInt;var Uo=function(e){if("number"==typeof e)return e;if(Ro(e))return NaN;if(Io(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Io(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Lo(e);var t=Ho.test(e);return t||Po.test(e)?No(e.slice(2),t?2:8):Wo.test(e)?NaN:+e},Zo=1/0;var Vo=function(e){return e?(e=Uo(e))===Zo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var qo=Z,Jo=So,Xo=function(e){var r=Vo(e),t=r%1;return r==r?t?r-t:r:0},Go=Math.max;var Qo=function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Xo(t);return i<0&&(i=Go(n+i,0)),qo(e,Jo(r),i)},Ko=U(Qo),ea=function(e,r){return ea=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ea(e,r)};var ra=function(){return ra=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ra.apply(this,arguments)};var ta="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var na=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ia="object"==typeof ta&&ta&&ta.Object===Object&&ta,oa="object"==typeof self&&self&&self.Object===Object&&self,aa=ia||oa||Function("return this")(),sa=aa,la=function(){return sa.Date.now()},da=/\s/;var ca=function(e){for(var r=e.length;r--&&da.test(e.charAt(r)););return r},ua=/^\s+/;var ha=function(e){return e?e.slice(0,ca(e)+1).replace(ua,""):e},ba=aa.Symbol,ga=ba,fa=Object.prototype,ma=fa.hasOwnProperty,pa=fa.toString,ya=ga?ga.toStringTag:void 0;var va=function(e){var r=ma.call(e,ya),t=e[ya];try{e[ya]=void 0;var n=!0}catch(e){}var i=pa.call(e);return n&&(r?e[ya]=t:delete e[ya]),i},xa=Object.prototype.toString;var wa=va,$a=function(e){return xa.call(e)},Fa=ba?ba.toStringTag:void 0;var Da=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fa&&Fa in Object(e)?wa(e):$a(e)},Ea=function(e){return null!=e&&"object"==typeof e};var Ca=ha,Oa=na,Aa=function(e){return"symbol"==typeof e||Ea(e)&&"[object Symbol]"==Da(e)},za=/^[-+]0x[0-9a-f]+$/i,ja=/^0b[01]+$/i,Ba=/^0o[0-7]+$/i,_a=parseInt;var ka=na,Sa=la,Ma=function(e){if("number"==typeof e)return e;if(Aa(e))return NaN;if(Oa(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Oa(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ca(e);var t=ja.test(e);return t||Ba.test(e)?_a(e.slice(2),t?2:8):za.test(e)?NaN:+e},Ta=Math.max,Ya=Math.min;var La=function(e,r,t){var n,i,o,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,o=i;return n=i=void 0,d=r,a=e.apply(o,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function f(){var e=Sa();if(g(e))return m(e);s=setTimeout(f,function(e){var t=r-(e-l);return u?Ya(t,o-(e-d)):t}(e))}function m(e){return s=void 0,h&&n?b(e):(n=i=void 0,a)}function p(){var e=Sa(),t=g(e);if(n=arguments,i=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(f,r),c?b(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,r),b(l)}return void 0===s&&(s=setTimeout(f,r)),a}return r=Ma(r)||0,ka(t)&&(c=!!t.leading,o=(u="maxWait"in t)?Ta(Ma(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},p.flush=function(){return void 0===s?a:m(Sa())},p},Ia=La,Ra=na;var Wa=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ra(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),Ia(e,r,{leading:n,maxWait:r,trailing:i})},Ha=function(e,r,t,n){switch(r){case"debounce":return La(e,t,n);case"throttle":return Wa(e,t,n);default:return e}},Pa=function(e){return"function"==typeof e},Na=function(){return"undefined"==typeof window},Ua=function(e){return e instanceof Element||e instanceof HTMLDocument},Za=function(e,r,t,n){return function(i){var o=i.width,a=i.height;r((function(r){return r.width===o&&r.height===a||r.width===o&&!n||r.height===a&&!t?r:(e&&Pa(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Na()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Na())return null;if(r)return document.querySelector(r);if(n&&Ua(n))return n;if(t.targetRef&&Ua(t.targetRef.current))return t.targetRef.current;var i=w(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,a=void 0===o||o,s=r.onResize;if(i||a){var l=Za(s,t.setState.bind(t),i,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Na()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Pa(r)?"renderProp":Pa(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,a=void 0===o?1e3:o,d=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=l(),t.observableElement=null,Na()||(t.resizeHandler=Ha(t.createResizeHandler,i,a,d),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ea(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Na()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(a,null)}}}(c);var Va=Na()?u:h;function qa(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,g=e.observerOptions,f=e.onResize,m=o(t),p=o(null),y=null!=b?b:p,v=o(),x=a({width:void 0,height:void 0}),w=x[0],$=x[1];return Va((function(){if(!Na()){var e=Za(f,$,c,h);v.current=Ha((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!m.current&&!Na()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,f,g,y.current]),ra({ref:y},w)}const Ja=(e,r,t)=>io(t,r)||io(e,r),Xa=(e,r)=>{const t=r||e.defaultValue;return io(e.collections,t)},Ga={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},Qa=e=>r=>{var t;const n=r.theme,i=Xa(Ga,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Ja(i,e,n.overrides.motion):i[e]},Ka={"duration-150":Qa("duration-150"),"duration-250":Qa("duration-250"),"duration-350":Qa("duration-350"),"duration-500":Qa("duration-500"),"duration-800":Qa("duration-800"),"duration-1000":Qa("duration-1000"),"ease-default":Qa("ease-default"),"ease-standard":Qa("ease-standard"),"ease-entrance":Qa("ease-entrance"),"ease-exit":Qa("ease-exit")},es={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},rs=e=>r=>{var t;const n=r.theme,i=Xa(es,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Ja(i,e,n.overrides.primitiveColour):i[e]},ts={"brand-10":rs("brand-10"),"brand-20":rs("brand-20"),"brand-30":rs("brand-30"),"brand-40":rs("brand-40"),"brand-50":rs("brand-50"),"brand-60":rs("brand-60"),"brand-70":rs("brand-70"),"brand-80":rs("brand-80"),"brand-90":rs("brand-90"),"brand-95":rs("brand-95"),"brand-100":rs("brand-100"),"primary-10":rs("primary-10"),"primary-20":rs("primary-20"),"primary-30":rs("primary-30"),"primary-40":rs("primary-40"),"primary-50":rs("primary-50"),"primary-60":rs("primary-60"),"primary-70":rs("primary-70"),"primary-80":rs("primary-80"),"primary-90":rs("primary-90"),"primary-95":rs("primary-95"),"primary-100":rs("primary-100"),"secondary-10":rs("secondary-10"),"secondary-20":rs("secondary-20"),"secondary-30":rs("secondary-30"),"secondary-40":rs("secondary-40"),"secondary-50":rs("secondary-50"),"secondary-60":rs("secondary-60"),"secondary-70":rs("secondary-70"),"secondary-80":rs("secondary-80"),"secondary-90":rs("secondary-90"),"secondary-95":rs("secondary-95"),"secondary-100":rs("secondary-100"),"neutral-10":rs("neutral-10"),"neutral-20":rs("neutral-20"),"neutral-30":rs("neutral-30"),"neutral-40":rs("neutral-40"),"neutral-50":rs("neutral-50"),"neutral-60":rs("neutral-60"),"neutral-70":rs("neutral-70"),"neutral-80":rs("neutral-80"),"neutral-90":rs("neutral-90"),"neutral-95":rs("neutral-95"),"neutral-100":rs("neutral-100"),"success-10":rs("success-10"),"success-20":rs("success-20"),"success-30":rs("success-30"),"success-40":rs("success-40"),"success-50":rs("success-50"),"success-60":rs("success-60"),"success-70":rs("success-70"),"success-80":rs("success-80"),"success-90":rs("success-90"),"success-95":rs("success-95"),"success-100":rs("success-100"),"warning-10":rs("warning-10"),"warning-20":rs("warning-20"),"warning-30":rs("warning-30"),"warning-40":rs("warning-40"),"warning-50":rs("warning-50"),"warning-60":rs("warning-60"),"warning-70":rs("warning-70"),"warning-80":rs("warning-80"),"warning-90":rs("warning-90"),"warning-95":rs("warning-95"),"warning-100":rs("warning-100"),"error-10":rs("error-10"),"error-20":rs("error-20"),"error-30":rs("error-30"),"error-40":rs("error-40"),"error-50":rs("error-50"),"error-60":rs("error-60"),"error-70":rs("error-70"),"error-80":rs("error-80"),"error-90":rs("error-90"),"error-95":rs("error-95"),"error-100":rs("error-100"),"info-10":rs("info-10"),"info-20":rs("info-20"),"info-30":rs("info-30"),"info-40":rs("info-40"),"info-50":rs("info-50"),"info-60":rs("info-60"),"info-70":rs("info-70"),"info-80":rs("info-80"),"info-90":rs("info-90"),"info-95":rs("info-95"),"info-100":rs("info-100"),white:rs("white"),black:rs("black"),"primary-inverse":rs("primary-inverse")},ns={text:rs("neutral-20"),"text-subtle":rs("neutral-30"),"text-subtler":rs("neutral-50"),"text-subtlest":rs("neutral-60"),"text-primary":rs("primary-50"),"text-hover":rs("primary-40"),"text-selected":rs("primary-50"),"text-selected-hover":rs("primary-40"),"text-disabled":rs("neutral-50"),"text-disabled-subtle":rs("neutral-60"),"text-disabled-subtlest":rs("neutral-80"),"text-selected-disabled":rs("neutral-20"),"text-success":rs("success-40"),"text-warning":rs("warning-40"),"text-error":rs("error-40"),"text-info":rs("info-40"),"text-inverse":rs("white"),icon:rs("neutral-50"),"icon-subtle":rs("neutral-60"),"icon-strongest":rs("neutral-20"),"icon-primary":rs("primary-50"),"icon-primary-subtle":rs("primary-60"),"icon-primary-subtlest":rs("primary-70"),"icon-hover":rs("primary-40"),"icon-selected":rs("primary-50"),"icon-selected-hover":rs("primary-40"),"icon-disabled":rs("neutral-50"),"icon-disabled-subtle":rs("neutral-60"),"icon-selected-disabled":rs("neutral-60"),"icon-success":rs("success-50"),"icon-warning":rs("warning-60"),"icon-error":rs("error-50"),"icon-error-strong":rs("error-40"),"icon-info":rs("info-50"),"icon-inverse":rs("white"),"icon-primary-inverse":rs("primary-inverse"),border:rs("neutral-90"),"border-strong":rs("neutral-70"),"border-stronger":rs("neutral-50"),"border-primary":rs("primary-50"),"border-primary-subtle":rs("primary-60"),"border-hover":rs("primary-90"),"border-hover-strong":rs("primary-60"),"border-selected":rs("primary-50"),"border-selected-subtle":rs("primary-70"),"border-selected-subtlest":rs("primary-90"),"border-selected-hover":rs("primary-40"),"border-focus":rs("primary-60"),"border-focus-strong":rs("primary-50"),"border-disabled":rs("neutral-90"),"border-selected-disabled":rs("neutral-70"),"border-success":rs("success-60"),"border-warning":rs("warning-60"),"border-error":rs("error-60"),"border-error-focus":rs("error-60"),"border-error-focus-strong":rs("error-40"),"border-error-strong":rs("error-40"),"border-info":rs("info-60"),bg:rs("white"),"bg-strong":rs("neutral-100"),"bg-stronger":rs("neutral-95"),"bg-strongest":rs("neutral-90"),"bg-hover":rs("primary-95"),"bg-hover-strong":rs("primary-90"),"bg-hover-subtle":rs("primary-100"),"bg-hover-neutral":rs("neutral-100"),"bg-hover-neutral-strong":rs("neutral-90"),"bg-selected":rs("primary-95"),"bg-selected-hover":rs("primary-90"),"bg-selected-strong":rs("primary-90"),"bg-selected-stronger":rs("primary-70"),"bg-selected-strongest":rs("primary-50"),"bg-selected-strongest-hover":rs("primary-40"),"bg-disabled":rs("neutral-95"),"bg-selected-disabled":rs("neutral-95"),"bg-selected-stronger-disabled":rs("neutral-70"),"bg-success":rs("success-100"),"bg-success-hover":rs("success-95"),"bg-success-strong":rs("success-50"),"bg-success-strong-hover":rs("success-40"),"bg-warning":rs("warning-100"),"bg-warning-hover":rs("warning-95"),"bg-warning-strong":rs("warning-50"),"bg-warning-strong-hover":rs("warning-40"),"bg-info":rs("info-100"),"bg-info-hover":rs("info-95"),"bg-info-strong":rs("info-50"),"bg-info-strong-hover":rs("info-40"),"bg-error":rs("error-100"),"bg-error-hover":rs("error-95"),"bg-error-strong":rs("error-50"),"bg-error-strong-hover":rs("error-40"),"bg-inverse":rs("neutral-20"),"bg-inverse-subtle":rs("neutral-30"),"bg-inverse-subtler":rs("neutral-50"),"bg-inverse-subtlest":rs("neutral-60"),"bg-inverse-hover":rs("neutral-40"),"bg-primary":rs("primary-50"),"bg-primary-subtle":rs("primary-60"),"bg-primary-subtler":rs("primary-95"),"bg-primary-subtlest":rs("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":rs("primary-40"),"bg-primary-subtlest-hover":rs("primary-90"),"bg-primary-subtlest-selected":rs("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:rs("primary-50"),"hyperlink-hover":rs("primary-40"),"hyperlink-visited":rs("primary-40"),"hyperlink-inverse":rs("primary-inverse"),"focus-ring":rs("black"),"focus-ring-inverse":rs("white")},is={collections:{lifesg:ns,bookingsg:ns,rbs:ns,mylegacy:ns,ccube:ns},defaultValue:"lifesg"},os=e=>r=>{var t;const n=r.theme,i=Xa(is,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Ja(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},as={text:os("text"),"text-subtle":os("text-subtle"),"text-subtler":os("text-subtler"),"text-subtlest":os("text-subtlest"),"text-primary":os("text-primary"),"text-hover":os("text-hover"),"text-selected":os("text-selected"),"text-selected-hover":os("text-selected-hover"),"text-disabled":os("text-disabled"),"text-disabled-subtle":os("text-disabled-subtle"),"text-disabled-subtlest":os("text-disabled-subtlest"),"text-selected-disabled":os("text-selected-disabled"),"text-success":os("text-success"),"text-warning":os("text-warning"),"text-error":os("text-error"),"text-info":os("text-info"),"text-inverse":os("text-inverse"),icon:os("icon"),"icon-subtle":os("icon-subtle"),"icon-strongest":os("icon-strongest"),"icon-primary":os("icon-primary"),"icon-primary-subtle":os("icon-primary-subtle"),"icon-primary-subtlest":os("icon-primary-subtlest"),"icon-hover":os("icon-hover"),"icon-selected":os("icon-selected"),"icon-selected-hover":os("icon-selected-hover"),"icon-disabled":os("icon-disabled"),"icon-disabled-subtle":os("icon-disabled-subtle"),"icon-selected-disabled":os("icon-selected-disabled"),"icon-success":os("icon-success"),"icon-warning":os("icon-warning"),"icon-error":os("icon-error"),"icon-error-strong":os("icon-error-strong"),"icon-info":os("icon-info"),"icon-inverse":os("icon-inverse"),"icon-primary-inverse":os("icon-primary-inverse"),border:os("border"),"border-strong":os("border-strong"),"border-stronger":os("border-stronger"),"border-primary":os("border-primary"),"border-primary-subtle":os("border-primary-subtle"),"border-hover":os("border-hover"),"border-hover-strong":os("border-hover-strong"),"border-selected":os("border-selected"),"border-selected-subtle":os("border-selected-subtle"),"border-selected-subtlest":os("border-selected-subtlest"),"border-selected-hover":os("border-selected-hover"),"border-focus":os("border-focus"),"border-focus-strong":os("border-focus-strong"),"border-disabled":os("border-disabled"),"border-selected-disabled":os("border-selected-disabled"),"border-success":os("border-success"),"border-warning":os("border-warning"),"border-error":os("border-error"),"border-error-focus":os("border-error-focus"),"border-error-focus-strong":os("border-error-focus-strong"),"border-error-strong":os("border-error-strong"),"border-info":os("border-info"),bg:os("bg"),"bg-strong":os("bg-strong"),"bg-stronger":os("bg-stronger"),"bg-strongest":os("bg-strongest"),"bg-hover":os("bg-hover"),"bg-hover-strong":os("bg-hover-strong"),"bg-hover-subtle":os("bg-hover-subtle"),"bg-hover-neutral":os("bg-hover-neutral"),"bg-hover-neutral-strong":os("bg-hover-neutral-strong"),"bg-selected":os("bg-selected"),"bg-selected-hover":os("bg-selected-hover"),"bg-selected-strong":os("bg-selected-strong"),"bg-selected-stronger":os("bg-selected-stronger"),"bg-selected-strongest":os("bg-selected-strongest"),"bg-selected-strongest-hover":os("bg-selected-strongest-hover"),"bg-disabled":os("bg-disabled"),"bg-selected-disabled":os("bg-selected-disabled"),"bg-selected-stronger-disabled":os("bg-selected-stronger-disabled"),"bg-success":os("bg-success"),"bg-success-hover":os("bg-success-hover"),"bg-success-strong":os("bg-success-strong"),"bg-success-strong-hover":os("bg-success-strong-hover"),"bg-warning":os("bg-warning"),"bg-warning-hover":os("bg-warning-hover"),"bg-warning-strong":os("bg-warning-strong"),"bg-warning-strong-hover":os("bg-warning-strong-hover"),"bg-info":os("bg-info"),"bg-info-hover":os("bg-info-hover"),"bg-info-strong":os("bg-info-strong"),"bg-info-strong-hover":os("bg-info-strong-hover"),"bg-error":os("bg-error"),"bg-error-hover":os("bg-error-hover"),"bg-error-strong":os("bg-error-strong"),"bg-error-strong-hover":os("bg-error-strong-hover"),"bg-inverse":os("bg-inverse"),"bg-inverse-subtle":os("bg-inverse-subtle"),"bg-inverse-subtler":os("bg-inverse-subtler"),"bg-inverse-subtlest":os("bg-inverse-subtlest"),"bg-inverse-hover":os("bg-inverse-hover"),"bg-primary":os("bg-primary"),"bg-primary-subtle":os("bg-primary-subtle"),"bg-primary-subtler":os("bg-primary-subtler"),"bg-primary-subtlest":os("bg-primary-subtlest"),"bg-available":os("bg-available"),"bg-primary-hover":os("bg-primary-hover"),"bg-primary-subtlest-hover":os("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":os("bg-primary-subtlest-selected"),"overlay-strong":os("overlay-strong"),"overlay-subtle":os("overlay-subtle"),hyperlink:os("hyperlink"),"hyperlink-hover":os("hyperlink-hover"),"hyperlink-visited":os("hyperlink-visited"),"hyperlink-inverse":os("hyperlink-inverse"),"focus-ring":os("focus-ring"),"focus-ring-inverse":os("focus-ring-inverse")},ss={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:cs["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:as.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return y`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},ls=e=>r=>{var t;const n=r.theme,i=Xa(ss,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Ja(i,e,n.overrides.border)}px`:`${i[e]}px`},ds=e=>1===e.length&&"theme"in e[0],cs={"width-010":ls("width-010"),"width-020":ls("width-020"),"width-040":ls("width-040"),solid:(us="solid",e=>{var r;const t=e.theme,n=Xa(ss,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Ja(n,us,t.overrides.border):n[us];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=ds(r)?[]:r,o=ds(r)?r[0]:t,a=o.theme,s=Xa(ss,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?Ja(s,e,a.overrides.border):s[e])(...i)(o)})("dashed-default")};var us;const hs={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},bs=e=>r=>{var t;const n=r.theme,i=Xa(hs,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Ja(i,e,n.overrides.breakpoint):i[e],o},gs={"xxs-min":bs("xxs-min"),"xxs-max":bs("xxs-max"),"xs-min":bs("xs-min"),"xs-max":bs("xs-max"),"sm-min":bs("sm-min"),"sm-max":bs("sm-max"),"md-min":bs("md-min"),"md-max":bs("md-max"),"lg-min":bs("lg-min"),"lg-max":bs("lg-max"),"xl-min":bs("xl-min"),"xl-max":bs("xl-max"),"xxl-min":bs("xxl-min"),"xxs-column":bs("xxs-column"),"xs-column":bs("xs-column"),"sm-column":bs("sm-column"),"md-column":bs("md-column"),"lg-column":bs("lg-column"),"xl-column":bs("xl-column"),"xxl-column":bs("xxl-column"),"xxs-gutter":bs("xxs-gutter"),"xs-gutter":bs("xs-gutter"),"sm-gutter":bs("sm-gutter"),"md-gutter":bs("md-gutter"),"lg-gutter":bs("lg-gutter"),"xl-gutter":bs("xl-gutter"),"xxl-gutter":bs("xxl-gutter"),"xxs-margin":bs("xxs-margin"),"xs-margin":bs("xs-margin"),"sm-margin":bs("sm-margin"),"md-margin":bs("md-margin"),"lg-margin":bs("lg-margin"),"xl-margin":bs("xl-margin"),"xxl-margin":bs("xxl-margin")},fs=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=gs["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),ms={MaxWidth:fs("max-width"),MinWidth:fs("min-width")},ps={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},ys={collections:{lifesg:ps,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:ps,mylegacy:ps,ccube:ps},defaultValue:"lifesg"},vs=e=>r=>{var t;const n=r.theme,i=Xa(ys,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Ja(i,e,n.overrides.fontSpec):i[e]},xs={"header-size-xxl":vs("header-size-xxl"),"header-size-xl":vs("header-size-xl"),"header-size-lg":vs("header-size-lg"),"header-size-md":vs("header-size-md"),"header-size-sm":vs("header-size-sm"),"header-size-xs":vs("header-size-xs"),"header-lh-xxl":vs("header-lh-xxl"),"header-lh-xl":vs("header-lh-xl"),"header-lh-lg":vs("header-lh-lg"),"header-lh-md":vs("header-lh-md"),"header-lh-sm":vs("header-lh-sm"),"header-lh-xs":vs("header-lh-xs"),"header-ls-xxl":vs("header-ls-xxl"),"header-ls-xl":vs("header-ls-xl"),"header-ls-lg":vs("header-ls-lg"),"header-ls-md":vs("header-ls-md"),"header-ls-sm":vs("header-ls-sm"),"header-ls-xs":vs("header-ls-xs"),"weight-light":vs("weight-light"),"weight-regular":vs("weight-regular"),"weight-semibold":vs("weight-semibold"),"weight-bold":vs("weight-bold"),"font-family":vs("font-family"),"body-size-baseline":vs("body-size-baseline"),"body-size-md":vs("body-size-md"),"body-size-sm":vs("body-size-sm"),"body-size-xs":vs("body-size-xs"),"body-lh-baseline":vs("body-lh-baseline"),"body-lh-md":vs("body-lh-md"),"body-lh-sm":vs("body-lh-sm"),"body-lh-xs":vs("body-lh-xs"),"body-ls-baseline":vs("body-ls-baseline"),"body-ls-md":vs("body-ls-md"),"body-ls-sm":vs("body-ls-sm"),"body-ls-xs":vs("body-ls-xs"),"formlabel-size-baseline":vs("formlabel-size-baseline"),"formlabel-size-lg":vs("formlabel-size-lg"),"formlabel-lh-baseline":vs("formlabel-lh-baseline"),"formlabel-lh-lg":vs("formlabel-lh-lg"),"formlabel-ls-baseline":vs("formlabel-ls-baseline"),"formlabel-ls-lg":vs("formlabel-ls-lg")},ws={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},$s=e=>r=>{var t;const n=r.theme,i=Xa(ws,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Ja(i,e,n.overrides.radius)}px`:`${i[e]}px`},Fs={none:$s("none"),xs:$s("xs"),sm:$s("sm"),md:$s("md"),lg:$s("lg"),full:$s("full")},Ds={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Es=e=>r=>{var t;const n=r.theme,i=Xa(Ds,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Ja(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Cs={"spacing-0":Es("spacing-0"),"spacing-4":Es("spacing-4"),"spacing-8":Es("spacing-8"),"spacing-12":Es("spacing-12"),"spacing-16":Es("spacing-16"),"spacing-20":Es("spacing-20"),"spacing-24":Es("spacing-24"),"spacing-32":Es("spacing-32"),"spacing-40":Es("spacing-40"),"spacing-48":Es("spacing-48"),"spacing-64":Es("spacing-64"),"spacing-72":Es("spacing-72"),"layout-xs":Es("layout-xs"),"layout-sm":Es("layout-sm"),"layout-md":Es("layout-md"),"layout-lg":Es("layout-lg"),"layout-xl":Es("layout-xl"),"layout-xxl":Es("layout-xxl"),"layout-xxxl":Es("layout-xxxl")},Os=(e,r,t,n)=>y`
    font-family: ${vs("font-family")};
    font-size: ${vs(e)};
    font-weight: ${vs(r)};
    line-height: ${vs(t)};
    letter-spacing: ${vs(n)};
`,As={"header-xxl-light":Os("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Os("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Os("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Os("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Os("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Os("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Os("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Os("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Os("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Os("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Os("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Os("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Os("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Os("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Os("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Os("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Os("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Os("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Os("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Os("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Os("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Os("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Os("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Os("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Os("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Os("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Os("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Os("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Os("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Os("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Os("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Os("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Os("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Os("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Os("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Os("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Os("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Os("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Os("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Os("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Os("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Os("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},zs={collections:{lifesg:As,bookingsg:As,rbs:As,mylegacy:As,ccube:As},defaultValue:"lifesg"},js=e=>r=>{var t;const n=r.theme,i=Xa(zs,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Ja(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Bs={"header-xxl-light":js("header-xxl-light"),"header-xxl-regular":js("header-xxl-regular"),"header-xxl-semibold":js("header-xxl-semibold"),"header-xxl-bold":js("header-xxl-bold"),"header-xl-light":js("header-xl-light"),"header-xl-regular":js("header-xl-regular"),"header-xl-semibold":js("header-xl-semibold"),"header-xl-bold":js("header-xl-bold"),"header-lg-light":js("header-lg-light"),"header-lg-regular":js("header-lg-regular"),"header-lg-semibold":js("header-lg-semibold"),"header-lg-bold":js("header-lg-bold"),"header-md-light":js("header-md-light"),"header-md-regular":js("header-md-regular"),"header-md-semibold":js("header-md-semibold"),"header-md-bold":js("header-md-bold"),"header-sm-light":js("header-sm-light"),"header-sm-regular":js("header-sm-regular"),"header-sm-semibold":js("header-sm-semibold"),"header-sm-bold":js("header-sm-bold"),"header-xs-light":js("header-xs-light"),"header-xs-regular":js("header-xs-regular"),"header-xs-semibold":js("header-xs-semibold"),"header-xs-bold":js("header-xs-bold"),"body-baseline-light":js("body-baseline-light"),"body-baseline-regular":js("body-baseline-regular"),"body-baseline-semibold":js("body-baseline-semibold"),"body-baseline-bold":js("body-baseline-bold"),"body-md-light":js("body-md-light"),"body-md-regular":js("body-md-regular"),"body-md-semibold":js("body-md-semibold"),"body-md-bold":js("body-md-bold"),"body-sm-light":js("body-sm-light"),"body-sm-regular":js("body-sm-regular"),"body-sm-semibold":js("body-sm-semibold"),"body-sm-bold":js("body-sm-bold"),"body-xs-light":js("body-xs-light"),"body-xs-regular":js("body-xs-regular"),"body-xs-semibold":js("body-xs-semibold"),"body-xs-bold":js("body-xs-bold"),"formlabel-baseline-semibold":js("formlabel-baseline-semibold"),"formlabel-lg-semibold":js("formlabel-lg-semibold")},_s=Object.assign(Object.assign({},as),{Primitive:ts}),ks=Object.assign(Object.assign({},Bs),{Spec:xs}),Ss=Ka,Ms=cs,Ts=Cs,Ys=Fs,Ls=gs,Is=ms;var Rs;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const a=n+o;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(Rs||(Rs={}));const Ws=e=>y`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Hs=p.div`
    font-weight: ${e=>e.$bold?ks.Spec["weight-semibold"]:ks.Spec["weight-regular"]};
    color: ${e=>e.$selected?_s["text-selected"]:_s.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ws(e.$maxLines||2)}
    overflow-wrap: break-word;
`,Ps=p.div`
    color: ${_s["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ws(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${ks["body-md-semibold"]}
                `:y`
                    ${ks["body-baseline-regular"]}
                `}
`,Ns=p.span`
    font-weight: ${ks.Spec["weight-semibold"]};
`,Us=p.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?ks["body-md-regular"]:ks["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${Hs} {
                        display: inline;
                    }

                    ${Ps} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Zs=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Vs=p.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,qs=({bold:n,displayType:i="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:d,truncationType:c="middle",variant:u})=>{const h=v(),f="small"===u?ks.Spec["body-size-md"]({theme:h}):ks.Spec["body-size-baseline"]({theme:h}),m=ks.Spec["font-family"]({theme:h}),{ref:p,width:y}=qa(),x=b((e=>{if("inline"!==i)return!1;return Rs.getTextWidth(e,`${f} '${m}'`)>y*s-50}),[y,i,f,m,s]),w=g((()=>x(o)),[x,o]),$=g((()=>d&&x(d)),[x,d]),F=w||$?"next-line":i,D=n=>{if(!a)return n;const i=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(i),l=s+a.length;return-1===s?n:e(t,{children:[o.slice(0,s),r(Ns,Object.assign({$variant:u},{children:o.slice(s,l)})),o.slice(l)]})},E=n=>e(t,{children:[r(Zs,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)})),r(Vs,Object.assign({$maxLines:s,"aria-hidden":!0},{children:D(n)}))]});return e(Us,Object.assign({ref:p,$labelDisplayType:F,$variant:u},{children:[r(Hs,Object.assign({"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:c},{children:"middle"===c&&w?E(o):D(o)})),d&&r(Ps,Object.assign({"aria-label":d,$maxLines:s,$truncateType:c,$labelDisplayType:i},{children:"middle"===c&&$?E(d):d}))]}))};var Js=So,Xs=wn,Gs=En;var Qs=function(e){return function(r,t,n){var i=Object(r);if(!Xs(r)){var o=Js(t);r=Gs(r),t=function(e){return o(i[e],e,i)}}var a=e(r,t,n);return a>-1?i[o?r[a]:a]:void 0}},Ks=U(Qs(Qo)),el=ci;var rl=U((function(e,r){return el(e,r)})),tl={exports:{}};tl.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,a=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=m;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},F=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var a=r.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},D=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=m.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var t=D(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return D(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<D(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},g=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},f=this.$W,m=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,m):b(0,m+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return b(n?p-x:p+(6-x),m);case s:case h:return g(y+"Hours",0);case a:return g(y+"Minutes",1);case o:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[b](g),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var h,b=this;n=Number(n);var g=E.p(c),f=function(e){var r=D(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return f(1);if(g===l)return f(7);var m=(h={},h[o]=r,h[a]=t,h[i]=e,h)[g]||1,p=this.$d.getTime()+n*m;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),o=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return E.s(o%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return E.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,a,!0);case"A":return g(o,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,b){var g,f=this,m=E.p(h),p=D(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(f,p)};switch(m){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-y)/6048e5;break;case s:g=(v-y)/864e5;break;case a:g=v/t;break;case o:g=v/r;break;case i:g=v/e;break;default:g=v}return b?g:E.a(g)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),O=C.prototype;return D.prototype=O,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){O[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,C,D),e.$i=!0),D},D.locale=F,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var nl=U(tl.exports),il={exports:{}};il.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],b=c&&c[1];a[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=a[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=a||(i||o?1:b.getDate()),f=i||b.getFullYear(),m=0;i&&!o||(m=o>0?o-1:b.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,m,g,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(f,m,g,p,y,v,x)):new Date(f,m,g,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var b=s.length,g=1;g<=b;g+=1){a[1]=s[g-1];var f=t.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}g===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ol=U(il.exports),al={exports:{}};al.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),a=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var sl=U(al.exports),ll={exports:{}};ll.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var dl=U(ll.exports),cl={exports:{}};cl.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ul,hl,bl,gl=U(cl.exports),fl={exports:{}},ml=U(fl.exports=(ul={year:0,month:1,day:2,hour:3,minute:4,second:5},hl={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=hl[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),hl[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=ul[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var a=i&&r,s=i||r||n,l=o(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var a=o(n-=60*(i-r)*1e3,t);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));nl.extend(sl),nl.extend(gl),nl.extend(dl),nl.extend(ol),nl.extend(ml),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=nl(r).startOf("week");return pl(t).map((e=>yl(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return yl(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(nl(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+nl(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=nl(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?nl(n):void 0,i?nl(i):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!a}}(bl||(bl={}));const pl=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},yl=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},vl=[1,3,5,7,8,10,12],xl=[4,6,9,11];var wl,$l,Fl;function Dl(e){const r=o(null);return h((()=>{r.current=e}),[e]),b(((...e)=>r.current(...e)),[])}!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),a=parseInt(n);return 0==i?"1":vl.includes(o)?Math.min(i,31).toString():xl.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=nl(e,t);return nl(r,t).diff(n,"minute")},e.toDayjs=e=>e?nl(e):nl(),e.addMinutesToTime=(e,r,t="HH:mm")=>nl(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>nl(e).isSame(nl(r),t)}(wl||(wl={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!nl(e).isBefore(n,"day"))||!(!i||!nl(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(nl(e).isValid())return e}return""}}($l||($l={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Fl||(Fl={}));const El=e=>{const r=(e=>{const r=o(e),t=o();return u((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e},Cl=i.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ol=({children:e})=>{const[t,n]=a(-1);return r(Cl.Provider,Object.assign({value:{focusedIndex:t,setFocusedIndex:n}},{children:e}))},Al=p.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,zl=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,jl=p.div`
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
    animation: ${zl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Bl=p(jl)`
    animation-delay: -0.45s;
`,_l=p(jl)`
    animation-delay: -0.3s;
`,kl=p(jl)`
    animation-delay: -0.15s;
`,Sl=({color:t,className:n,size:i})=>e(Al,Object.assign({className:n,$size:i,$color:t},{children:[r(jl,{id:"inner1"}),r(Bl,{id:"inner2"}),r(_l,{id:"inner3"}),r(kl,{id:"inner4"})]})),Ml=y`
    outline-offset: -1px;
    outline: ${Ms["width-020"]} ${Ms.solid} ${_s["border-focus"]};
`,Tl=y`
    outline-color: ${_s["border-focus"]};
`,Yl=y`
    outline-color: ${_s["border-disabled"]};
`,Ll=y`
    outline-color: ${_s["border-error-focus"]};
`,Il=p.div`
    border: ${Ms["width-010"]} ${Ms.solid} ${_s.border};
    border-radius: ${Ys.sm};
    background: ${_s.bg};

    :focus-within {
        ${Ml}
    }
    ${e=>e.$focused&&Ml}

    ${e=>e.$readOnly?y`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Tl}
                }
                ${e.$focused&&Tl}
            `:e.$disabled?y`
                background: ${_s["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Yl}
                }
                ${e.$focused&&Yl}
            `:e.$error?y`
                border-color: ${_s["border-error"]};

                :focus-within {
                    ${Ll}
                }
                ${e.$focused&&Ll}
            `:void 0}
`;p(Il)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Ts["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Rl=p.input`
    ${e=>"small"===e.$variant?ks["body-md-regular"]:ks["body-baseline-regular"]}
    color: ${_s.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${_s["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${_s["text-subtler"]};
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
`,Wl=p.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Ms["width-010"]} ${Ms.solid}
            ${_s["border-focus"]};
        border-radius: ${Ys.sm};
    }
`,Hl=p.div`
    overflow: hidden;
    border: ${Ms["width-010"]} ${Ms.solid} ${_s.border};
    border-radius: ${Ys.sm};
    background: ${_s.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?ks["body-md-regular"]:ks["body-baseline-regular"]}

    ${Is.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Ls["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${Is.MaxWidth.xs} {
        width: calc(100vw - ${Ls["xs-margin"]} * 2);
    }

    ${Is.MaxWidth.xxs} {
        width: calc(100vw - ${Ls["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${_s["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,Pl=p.div`
    background: transparent;
    padding: ${Ts["spacing-8"]};
`,Nl=p.ul`
    list-style-type: none;
`,Ul=p.li`
    display: flex;
    align-items: flex-start;
    gap: ${Ts["spacing-8"]};
    padding: ${Ts["spacing-12"]} ${Ts["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?y`
                background: ${_s["bg-hover"]};
            `:e.$active?y`
                background: ${_s["bg-hover-subtle"]};
            `:void 0}
`,Zl=p(E)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${_s["icon-selected"]};
`,Vl=p.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,ql=p(D)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${_s["icon-selected"]};
`,Jl=p(F)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${_s["icon-primary-subtlest"]};
`,Xl=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Gl=p(Wl)`
    cursor: pointer;
    overflow: hidden;
    color: ${_s["text-primary"]};
    font-size: inherit;
`,Ql=p(Gl)`
    ${ks["body-baseline-semibold"]}
`,Kl=p(Gl)`
    ${ks["body-md-semibold"]}
    padding: ${Ts["spacing-8"]} ${Ts["spacing-8"]};
`,ed=p.div`
    width: 100%;
    display: flex;
    padding: ${Ts["spacing-12"]} ${Ts[16]};
    align-items: center;
`,rd=p($)`
    margin-right: ${Ts["spacing-4"]};
    color: ${_s["icon-error"]};
    height: 1em;
    width: 1em;
`,td=p(Sl)`
    margin-right: ${Ts["spacing-8"]};
    color: ${_s.icon};
`;function nd(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const id=p.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Ts["spacing-32"]};
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
                background-color: ${_s["bg-hover-neutral"]};
            `}
    }
`,od=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=nd(e,["children","focusHighlight","focusOutline","type"]);return r(id,Object.assign({ref:t,$outline:o,$highlight:i,type:a},s,{children:n}))})),ad=p.div`
    background: ${_s["bg-strong"]};
    border-radius: ${Ys.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?ks["body-md-regular"]:ks["body-baseline-regular"]}
`,sd=p.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Ts["spacing-8"]};
    padding: ${e=>"small"===e.$variant?y`
                  ${Ts["spacing-8"]} ${Ts["spacing-16"]}
              `:y`10px ${Ts["spacing-16"]}`};
`,ld=p(Rl)`
    flex: 1;
`,dd=p(O)`
    color: ${_s.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,cd=p(od)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Ts["spacing-8"]};
    margin-left: -${Ts["spacing-8"]};
    color: ${_s.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,ud=f(((t,n)=>{var{value:i,variant:o,onClear:a}=t,s=nd(t,["value","variant","onClear"]);return e(ad,Object.assign({$variant:o},{children:[e(sd,Object.assign({$variant:o},{children:[r(dd,{"aria-hidden":!0}),r(ld,Object.assign({ref:n,value:i,$variant:o},s))]})),i&&r(cd,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a},{children:r(C,{"aria-hidden":!0})}))]}))})),hd=({listItems:n,multiSelect:i,selectedItems:s,disableItemFocus:l,itemsLoadState:d="success",itemTruncationType:c="end",itemMaxLines:h=2,labelDisplayType:g="inline",variant:f="default",listboxId:p,width:y,topScrollItem:v,onSelectItem:x,onSelectAll:w,onDismiss:$,onRetry:F,valueExtractor:D,listExtractor:E,renderListItem:C,renderCustomCallToAction:O,enableSearch:A,hideNoResultsDisplay:z,searchPlaceholder:j="Search",searchFunction:B,onSearch:_})=>{const{focusedIndex:k,setFocusedIndex:S}=m(Cl),[M,T]=a(""),[Y,L]=a(n),I=El(d),R=(()=>{const[e,r]=a(!1);return u((()=>{r(!0)}),[]),e})(),W=o(),H=o(),P=o([]),N=o(),U=e=>E?E(e):e.toString(),Z=b((e=>!!Ks(s,(r=>rl(r,e)))),[s]),V=Dl((()=>B(M))),q=Dl((()=>n.filter((e=>{var r;const t=U(e),n="object"==typeof t?t.title.toLowerCase():t.toLowerCase(),i="string"==typeof t||null===(r=t.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=M.trim().toLowerCase();return n.includes(o)||i&&i.includes(o)})))),J=(e,r)=>{S(r),null==x||x(e,(e=>D?D(e):e)(e))},X=e=>{const r=e.target.value;T(r),null==_||_()},G=()=>{var e;T(""),null===(e=N.current)||void 0===e||e.focus(),null==_||_()},Q=()=>{null==F||F()};((e,r,t="window",n)=>{const i=o();u((()=>{i.current=r}),[r]),u((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const o=e=>i.current(e);return r.addEventListener(e,o,n),()=>{r.removeEventListener(e,o,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),k<Y.length-1){const e=k+1;null===(r=P.current[e])||void 0===r||r.focus(),S(e)}break;case"ArrowUp":if(e.preventDefault(),k>0){const e=k-1;null===(t=P.current[e])||void 0===t||t.focus(),S(e)}else 0===k&&N.current&&(N.current.focus(),S(-1));break;case"Space":case"Enter":document.activeElement===P.current[k]&&(e.preventDefault(),Y[k]&&J(Y[k],k))}})),u((()=>{if(void 0===v)return;const e=setTimeout((()=>{var e;const r=n.indexOf(v),t=P.current[r];if(W.current){const r=null!==(e=null==t?void 0:t.offsetTop)&&void 0!==e?e:0;W.current.scrollTop=r-8}S(r)}),0);return()=>clearTimeout(e)}),[P,n,S,v]),u((()=>{if(R)return;if(l)return;const e=n.findIndex((e=>Z(e)));N.current?(S(-1),setTimeout((()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.focus()}),200)):P.current[k]?setTimeout((()=>{var e;return null===(e=P.current[k])||void 0===e?void 0:e.focus()}),200):P.current[e]?(S(e),setTimeout((()=>{var r;return null===(r=P.current[e])||void 0===r?void 0:r.focus()}),200)):(S(0),setTimeout((()=>{var e;return null===(e=P.current[0])||void 0===e?void 0:e.focus()}),200))}),[Z,l,k,n,R,S]),u((()=>{R&&I&&(l||"success"===d&&N.current&&(S(-1),N.current.focus()))}),[R,I,d,S,l]),u((()=>{L(""===M?n:B?V():q())}),[V,q,n,B,M]);const K=e=>i?r(e?ql:Jl,{"aria-hidden":!0}):e?r(Zl,{"aria-hidden":!0}):r(Vl,{}),ee=(e,t)=>{const n=U(e),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel;return r(qs,{displayType:g,label:i,maxLines:h,selected:t,sublabel:o,truncationType:c,variant:f})},re=()=>{if(!F||F&&"success"===d)return Y.map(((n,o)=>{const a=Z(n),s=o===k;return r(Ul,Object.assign({"aria-selected":a,"aria-multiselectable":i,"data-testid":"list-item",onClick:()=>J(n,o),onMouseEnter:()=>(e=>{S(e)})(o),ref:e=>P.current[o]=e,role:"option",tabIndex:s?0:-1,$active:s,$selected:a},{children:C?C(n,{selected:a}):e(t,{children:[K(a),ee(n,a)]})}),((e,r)=>`item_${r}__${D?D(e):e}`)(n,o))}))},te=()=>{if((A||B)&&"success"===d)return r(ud,{ref:N,onChange:X,value:M,placeholder:j,"data-testid":"search-input","aria-label":"Enter text to search",onClear:G,variant:f})},ne=()=>{if(i&&Y.length>0&&!M&&"success"===d)return r(Xl,{children:r(Kl,Object.assign({onClick:w,type:"button",$variant:f},{children:0===s.length?"Select all":"Clear all"}))})},ie=()=>{if(!z&&(M||!A)&&0===Y.length&&"success"===d)return e(ed,Object.assign({"data-testid":"list-no-results"},{children:[r(rd,{"data-testid":"no-result-icon"}),"No results found."]}))},oe=()=>{if(F&&"loading"===d)return e(ed,Object.assign({"data-testid":"list-loading"},{children:[r(td,{}),"Loading..."]}))},ae=()=>{if(F&&"fail"===d)return e(ed,Object.assign({"data-testid":"list-fail"},{children:[r(rd,{"data-testid":"load-error-icon"}),"Failed to load. ",r(Ql,Object.assign({onClick:Q,type:"button",$variant:f},{children:"Try again."}))]}))};return e(Hl,Object.assign({"data-testid":"dropdown-container",ref:W,$width:y,$variant:f},{children:[e(Pl,Object.assign({ref:H,"data-testid":"dropdown-list"},{children:[te(),ne(),ie(),oe(),ae(),r(Nl,Object.assign({role:"listbox",id:p},{children:re()}))]})),(()=>{if(O)return r("div",Object.assign({"data-testid":"custom-cta"},{children:O($,Y)}))})()]}))},bd=p(Wl)`
    display: flex;
    align-items: center;
    gap: ${Ts["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Ts["spacing-16"]};

    ${e=>"small"===e.$variant?ks["body-md-regular"]:ks["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,gd=p.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ss["duration-250"]} ${Ss["ease-default"]};

    svg {
        color: ${_s.icon};
        height: 1em;
        width: 1em;
    }
`,fd=f((({children:t,disabled:n,expanded:i,listboxId:o,popupRole:a,readOnly:s,variant:l},d)=>e(bd,Object.assign({ref:d,type:"button","aria-expanded":i,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":o,$variant:l},{children:[t,!s&&r(gd,Object.assign({$expanded:i,$variant:l},{children:r(A,{"aria-hidden":!0})}))]}))));p.button`
    padding: ${Ts["spacing-8"]} ${Ts["spacing-16"]};
    min-width: 4rem;
    border: ${Ms["width-010"]} ${Ms.solid} transparent;
    border-radius: ${Ys.sm};
    transition: all ${Ss["duration-250"]} ${Ss["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${_s.Primitive.white};
                    border-color: ${e.$buttonIsDanger?_s["border-error-strong"]:_s["border-primary"]};

                    color: ${e.$buttonIsDanger?_s["text-error"]:_s["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${_s["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${_s.bg};
                    border-color: ${_s.border};

                    color: ${e.$buttonIsDanger?_s["text-error"]:_s["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${_s["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?_s["text-error"]:_s["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${_s["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${_s["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${_s["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?_s["bg-error-strong"]:_s["bg-primary"]};

                    ${Is.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${_s["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?_s["bg-error-strong-hover"]:_s["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${ks["body-md-semibold"]}

                    ${Is.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${ks["header-md-semibold"]}

                    ${Is.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${ks["header-xs-semibold"]}

                    ${Is.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,p(Sl)`
    margin-right: 0.5rem;
`,p.li`
    display: ${e=>e.$visible?"flex":"none"};
`,p.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Ts["spacing-8"]};
    padding: ${Ts["spacing-12"]} ${Ts["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&y`
            background: ${_s["bg-hover"]};
        `}
`,p.div`
    height: 1px;
    width: calc((1lh + ${Ts["spacing-8"]}) * ${e=>e.$level});
`,p.div`
    width: 1lh;
    height: 1lh;
    color: ${_s["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ss["duration-350"]}
            ${Ss["ease-standard"]};

        ${e=>{if(e.$expanded)return y`
                    transform: rotate(90deg);
                `}}
    }
`,p.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Ts["spacing-8"]};
`,p.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Ts["spacing-16"]};

    display: flex;
    justify-content: center;
`,p(z)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${_s["icon-selected"]};
`;const md=e=>"small"===e?2.5:3;p.div`
    position: relative;
    width: 100%;
    ${e=>{const r=md(e.$variant);return y`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const pd=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Ts["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>md(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Ys.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${_s["border-focus"]};
    }
`,yd=p.button`
    ${pd}
    cursor: pointer;
`;p.div`
    ${pd}
`;const vd=x`
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
`;p.div`
    position: relative;
    border: ${Ms["width-010"]} ${Ms.solid} ${_s.border};
    border-radius: ${Ys.sm};
    background: ${_s.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${_s["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${_s["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${vd} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${_s["bg-disabled"]};

                ${yd} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${_s.border};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${yd} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border-color: ${_s["border-error"]};

                :focus-within {
                    border-color: ${_s["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${_s["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,p.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Ss["duration-250"]} ${Ss["ease-default"]};
    margin-left: ${Ts["spacing-16"]};
`,p(A)`
    color: ${_s.icon};
`,p.div`
    height: 1px;
    background: ${_s.border};
    margin: 0 ${Ts["spacing-8"]};
`;const xd=p.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return y`
                color: ${_s["text-disabled"]};
            `}}
`,wd=p.div`
    ${e=>"small"===e.$variant?ks["body-md-regular"]:ks["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return y`
                    ${Ws(1)}
                `}}
    overflow: hidden;
`,$d=p(wd)`
    color: ${_s["text-subtler"]};
`;var Fd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Fd||(Fd={}));const Dd=p.div`
    display: flex;
    flex-direction: column;
`,Ed=e=>"right"===e?"bottom-end":"bottom-start",Cd=({enabled:n,isOpen:i,onOpen:s,onClose:l,onDismiss:d,renderElement:c,renderDropdown:h,customZIndex:b,clickToToggle:g=!1,offset:f=0,alignment:m="left",fitAvailableHeight:p})=>{var y;const x=v(),w=Ls["sm-max"]({theme:x}),$=o(null),F=o(null),{width:D}=qa({targetRef:$,handleHeight:!1}),E={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:C,floatingStyles:O,context:A}=B({open:i,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!i?null==s||s():!e&&i&&(null==l||l(t))},whileElementsMounted:_,placement:Ed(m),middleware:[k(f),S(),M({limiter:T()}),Y({apply({availableHeight:e}){F.current&&Object.assign(F.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),E]}),z=(()=>{const[e,r]=a(void 0),t=j();return u((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Fd.Change,e),t.events.emit(Fd.Ready),()=>t.events.off(Fd.Change,e)}),[t]),e})(),{isMounted:N,styles:U}=L(A,{initial:{opacity:0},open:{opacity:1},duration:300}),Z=I(A,{enabled:n,toggle:g}),V=R(A,{enabled:n}),{getReferenceProps:q,getFloatingProps:J}=W([Z,V]);return e(t,{children:[r("div",Object.assign({ref:e=>{$.current=e,C.setReference(e)}},q(),{children:c()})),N&&r(H,{children:r(P,Object.assign({context:A,modal:!1,initialFocus:F,returnFocus:!1},{children:r("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},O),{zIndex:null!==(y=null!=b?b:z)&&void 0!==y?y:50})},J(),{children:r(Dd,Object.assign({ref:F,style:Object.assign({},U),inert:U.opacity<1?"":void 0},{children:h({elementWidth:D})}))}))}))})]})},Od=({selectedOptions:e,placeholder:t="Select",options:n,disabled:i,error:s,className:l,"data-testid":d,id:c,enableSearch:h=!1,searchFunction:b,searchPlaceholder:g,valueExtractor:f,listExtractor:m,onSelectOptions:p,onShowOptions:y,onHideOptions:v,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderListItem:F,hideNoResultsDisplay:D,renderCustomCallToAction:E,onBlur:C,variant:O="default",readOnly:A,alignment:z,dropdownZIndex:j})=>{const[B,_]=a(e||[]),[k,S]=a(!1),[M,T]=a(!1),[Y]=a((()=>Fl.generate())),L=o(),I=o();u((()=>{_(e||[])}),[e]);const R=()=>{B&&B.length>0?(_([]),Z([])):(_(n),Z(n))},W=(e,r)=>{const t=[...B],n=Ko(B,(e=>(f?f(e):e)===r));n>-1?t.splice(n,1):t.push(e),_(t),Z(t)},H=()=>{k&&(S(!1),U(!1))},P=()=>{M||k||T(!0)},N=e=>{!M||k||L.current.contains(e.relatedTarget)||(T(!1),null==C||C())},U=e=>{!e&&v&&v(),e&&y&&y()},Z=e=>{p&&p(e)};return r(Ol,{children:r(Cd,{enabled:!A&&!i,isOpen:k,renderElement:()=>r(Il,Object.assign({className:l,"data-testid":d,id:c,ref:L,tabIndex:-1,onFocus:P,onBlur:N,$focused:M,$disabled:i,$readOnly:A,$error:s},{children:r(fd,Object.assign({ref:I,disabled:i,expanded:k,listboxId:Y,popupRole:"listbox",readOnly:A,variant:O},{children:r(xd,Object.assign({$disabled:i},{children:B&&0!==B.length?r(wd,Object.assign({$variant:O},{children:n&&B.length===n.length?"All selected":`${B.length} selected`})):r($d,Object.assign({truncateType:$,$variant:O},{children:t}))}))}))})),renderDropdown:({elementWidth:e})=>r(hd,{listboxId:Y,listItems:n,onSelectItem:W,onDismiss:H,valueExtractor:f,listExtractor:m,enableSearch:h,searchFunction:b,searchPlaceholder:g,multiSelect:!0,selectedItems:B,onSelectAll:R,onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:F,hideNoResultsDisplay:D,renderCustomCallToAction:E,variant:O,width:e}),onOpen:()=>{S(!0),U(!0),T(!0)},onClose:e=>{S(!1),U(!1),"click"!==e&&(T(!1),null==C||C())},onDismiss:()=>{I.current.focus(),S(!1),U(!1)},clickToToggle:!0,offset:8,alignment:z,fitAvailableHeight:!0,customZIndex:j})})};export{Od as InputMultiSelect};
//# sourceMappingURL=index.js.map
