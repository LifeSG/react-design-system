import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as x,SquareIcon as S}from"@lifesg/react-icons";import{CrossIcon as F}from"@lifesg/react-icons/cross";import{MagnifierIcon as _}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as $}from"@lifesg/react-icons/chevron-down";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var O=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1};var D=function(){this.__data__=[],this.size=0};var j=function(e,t){return e===t||e!=e&&t!=t},A=j;var E=function(e,t){for(var n=e.length;n--;)if(A(e[n][0],t))return n;return-1},C=E,I=Array.prototype.splice;var P=E;var z=E;var T=E;var H=D,N=function(e){var t=this.__data__,n=C(t,e);return!(n<0)&&(n==t.length-1?t.pop():I.call(t,n,1),--this.size,!0)},L=function(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]},M=function(e){return z(this.__data__,e)>-1},R=function(e,t){var n=this.__data__,r=T(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function V(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}V.prototype.clear=H,V.prototype.delete=N,V.prototype.get=L,V.prototype.has=M,V.prototype.set=R;var W=V,q=W;var U=function(){this.__data__=new q,this.size=0};var Q=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var G=function(e){return this.__data__.get(e)};var X=function(e){return this.__data__.has(e)},Z="object"==typeof k&&k&&k.Object===Object&&k,K=Z,Y="object"==typeof self&&self&&self.Object===Object&&self,J=K||Y||Function("return this")(),ee=J.Symbol,te=ee,ne=Object.prototype,re=ne.hasOwnProperty,ie=ne.toString,oe=te?te.toStringTag:void 0;var ae=function(e){var t=re.call(e,oe),n=e[oe];try{e[oe]=void 0;var r=!0}catch(e){}var i=ie.call(e);return r&&(t?e[oe]=n:delete e[oe]),i},se=Object.prototype.toString;var le=ae,ce=function(e){return se.call(e)},ue=ee?ee.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ue&&ue in Object(e)?le(e):ce(e)};var he=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},pe=de,fe=he;var ge,me=function(e){if(!fe(e))return!1;var t=pe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ye=J["__core-js_shared__"],be=(ge=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var ve=function(e){return!!be&&be in e},we=Function.prototype.toString;var xe=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=me,Fe=ve,_e=he,$e=xe,Be=/^\[object .+?Constructor\]$/,ke=Function.prototype,Oe=Object.prototype,De=ke.toString,je=Oe.hasOwnProperty,Ae=RegExp("^"+De.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ee=function(e){return!(!_e(e)||Fe(e))&&(Se(e)?Ae:Be).test($e(e))},Ce=function(e,t){return null==e?void 0:e[t]};var Ie=function(e,t){var n=Ce(e,t);return Ee(n)?n:void 0},Pe=Ie(J,"Map"),ze=Ie(Object,"create"),Te=ze;var He=function(){this.__data__=Te?Te(null):{},this.size=0};var Ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Le=ze,Me=Object.prototype.hasOwnProperty;var Re=function(e){var t=this.__data__;if(Le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Me.call(t,e)?t[e]:void 0},Ve=ze,We=Object.prototype.hasOwnProperty;var qe=ze;var Ue=He,Qe=Ne,Ge=Re,Xe=function(e){var t=this.__data__;return Ve?void 0!==t[e]:We.call(t,e)},Ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=qe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=Qe,Ke.prototype.get=Ge,Ke.prototype.has=Xe,Ke.prototype.set=Ze;var Ye=Ke,Je=W,et=Pe;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var it=nt;var ot=nt;var at=nt;var st=function(){this.size=0,this.__data__={hash:new Ye,map:new(et||Je),string:new Ye}},lt=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},ct=function(e){return it(this,e).get(e)},ut=function(e){return ot(this,e).has(e)},dt=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=lt,ht.prototype.get=ct,ht.prototype.has=ut,ht.prototype.set=dt;var pt=ht,ft=W,gt=Pe,mt=pt;var yt=W,bt=U,vt=Q,wt=G,xt=X,St=function(e,t){var n=this.__data__;if(n instanceof ft){var r=n.__data__;if(!gt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new mt(r)}return n.set(e,t),this.size=n.size,this};function Ft(e){var t=this.__data__=new yt(e);this.size=t.size}Ft.prototype.clear=bt,Ft.prototype.delete=vt,Ft.prototype.get=wt,Ft.prototype.has=xt,Ft.prototype.set=St;var _t=Ft;var $t=pt,Bt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},kt=function(e){return this.__data__.has(e)};function Ot(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new $t;++t<n;)this.add(e[t])}Ot.prototype.add=Ot.prototype.push=Bt,Ot.prototype.has=kt;var Dt=Ot,jt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},At=function(e,t){return e.has(t)};var Et=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new Dt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!jt(t,(function(e,t){if(!At(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Ct=J.Uint8Array,It=j,Pt=Et,zt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Tt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Ht=ee?ee.prototype:void 0,Nt=Ht?Ht.valueOf:void 0;var Lt=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Ct(e),new Ct(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return It(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=zt;case"[object Set]":var l=1&r;if(s||(s=Tt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Pt(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Nt)return Nt.call(e)==Nt.call(t)}return!1};var Mt=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Rt=Array.isArray,Vt=Mt,Wt=Rt;var qt=function(e,t,n){var r=t(e);return Wt(e)?r:Vt(r,n(e))};var Ut=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Qt=function(){return[]},Gt=Object.prototype.propertyIsEnumerable,Xt=Object.getOwnPropertySymbols,Zt=Xt?function(e){return null==e?[]:(e=Object(e),Ut(Xt(e),(function(t){return Gt.call(e,t)})))}:Qt;var Kt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Yt=function(e){return null!=e&&"object"==typeof e},Jt=de,en=Yt;var tn=function(e){return en(e)&&"[object Arguments]"==Jt(e)},nn=Yt,rn=Object.prototype,on=rn.hasOwnProperty,an=rn.propertyIsEnumerable,sn=tn(function(){return arguments}())?tn:function(e){return nn(e)&&on.call(e,"callee")&&!an.call(e,"callee")},ln={exports:{}};var cn=function(){return!1};!function(e,t){var n=J,r=cn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(ln,ln.exports);var un=/^(?:0|[1-9]\d*)$/;var dn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&un.test(e))&&e>-1&&e%1==0&&e<t};var hn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},pn=de,fn=hn,gn=Yt,mn={};mn["[object Float32Array]"]=mn["[object Float64Array]"]=mn["[object Int8Array]"]=mn["[object Int16Array]"]=mn["[object Int32Array]"]=mn["[object Uint8Array]"]=mn["[object Uint8ClampedArray]"]=mn["[object Uint16Array]"]=mn["[object Uint32Array]"]=!0,mn["[object Arguments]"]=mn["[object Array]"]=mn["[object ArrayBuffer]"]=mn["[object Boolean]"]=mn["[object DataView]"]=mn["[object Date]"]=mn["[object Error]"]=mn["[object Function]"]=mn["[object Map]"]=mn["[object Number]"]=mn["[object Object]"]=mn["[object RegExp]"]=mn["[object Set]"]=mn["[object String]"]=mn["[object WeakMap]"]=!1;var yn=function(e){return gn(e)&&fn(e.length)&&!!mn[pn(e)]};var bn=function(e){return function(t){return e(t)}},vn={exports:{}};!function(e,t){var n=Z,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(vn,vn.exports);var wn=yn,xn=bn,Sn=vn.exports,Fn=Sn&&Sn.isTypedArray,_n=Fn?xn(Fn):wn,$n=Kt,Bn=sn,kn=Rt,On=ln.exports,Dn=dn,jn=_n,An=Object.prototype.hasOwnProperty;var En=function(e,t){var n=kn(e),r=!n&&Bn(e),i=!n&&!r&&On(e),o=!n&&!r&&!i&&jn(e),a=n||r||i||o,s=a?$n(e.length,String):[],l=s.length;for(var c in e)!t&&!An.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Dn(c,l))||s.push(c);return s},Cn=Object.prototype;var In=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Cn)};var Pn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),zn=In,Tn=Pn,Hn=Object.prototype.hasOwnProperty;var Nn=me,Ln=hn;var Mn=function(e){return null!=e&&Ln(e.length)&&!Nn(e)},Rn=En,Vn=function(e){if(!zn(e))return Tn(e);var t=[];for(var n in Object(e))Hn.call(e,n)&&"constructor"!=n&&t.push(n);return t},Wn=Mn;var qn=function(e){return Wn(e)?Rn(e):Vn(e)},Un=qt,Qn=Zt,Gn=qn;var Xn=function(e){return Un(e,Gn,Qn)},Zn=Object.prototype.hasOwnProperty;var Kn=function(e,t,n,r,i,o){var a=1&n,s=Xn(e),l=s.length;if(l!=Xn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Zn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Yn=Ie(J,"DataView"),Jn=Pe,er=Ie(J,"Promise"),tr=Ie(J,"Set"),nr=Ie(J,"WeakMap"),rr=de,ir=xe,or="[object Map]",ar="[object Promise]",sr="[object Set]",lr="[object WeakMap]",cr="[object DataView]",ur=ir(Yn),dr=ir(Jn),hr=ir(er),pr=ir(tr),fr=ir(nr),gr=rr;(Yn&&gr(new Yn(new ArrayBuffer(1)))!=cr||Jn&&gr(new Jn)!=or||er&&gr(er.resolve())!=ar||tr&&gr(new tr)!=sr||nr&&gr(new nr)!=lr)&&(gr=function(e){var t=rr(e),n="[object Object]"==t?e.constructor:void 0,r=n?ir(n):"";if(r)switch(r){case ur:return cr;case dr:return or;case hr:return ar;case pr:return sr;case fr:return lr}return t});var mr=_t,yr=Et,br=Lt,vr=Kn,wr=gr,xr=Rt,Sr=ln.exports,Fr=_n,_r="[object Arguments]",$r="[object Array]",Br="[object Object]",kr=Object.prototype.hasOwnProperty;var Or=function(e,t,n,r,i,o){var a=xr(e),s=xr(t),l=a?$r:wr(e),c=s?$r:wr(t),u=(l=l==_r?Br:l)==Br,d=(c=c==_r?Br:c)==Br,h=l==c;if(h&&Sr(e)){if(!Sr(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new mr),a||Fr(e)?yr(e,t,n,r,i,o):br(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&kr.call(e,"__wrapped__"),f=d&&kr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new mr),i(g,m,n,r,o)}}return!!h&&(o||(o=new mr),vr(e,t,n,r,i,o))},Dr=Yt;var jr=function e(t,n,r,i,o){return t===n||(null==t||null==n||!Dr(t)&&!Dr(n)?t!=t&&n!=n:Or(t,n,r,i,e,o))},Ar=_t,Er=jr;var Cr=he;var Ir=function(e){return e==e&&!Cr(e)},Pr=Ir,zr=qn;var Tr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Hr=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Ar;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Er(u,c,3,r,d):h))return!1}}return!0},Nr=function(e){for(var t=zr(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Pr(i)]}return t},Lr=Tr;var Mr=function(e){var t=Nr(e);return 1==t.length&&t[0][2]?Lr(t[0][0],t[0][1]):function(n){return n===e||Hr(n,e,t)}},Rr=de,Vr=Yt;var Wr=function(e){return"symbol"==typeof e||Vr(e)&&"[object Symbol]"==Rr(e)},qr=Rt,Ur=Wr,Qr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gr=/^\w*$/;var Xr=function(e,t){if(qr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ur(e))||(Gr.test(e)||!Qr.test(e)||null!=t&&e in Object(t))},Zr=pt;function Kr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Kr.Cache||Zr),n}Kr.Cache=Zr;var Yr=Kr;var Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ei=/\\(\\)?/g,ti=function(e){var t=Yr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Jr,(function(e,n,r,i){t.push(r?i.replace(ei,"$1"):n||e)})),t}));var ni=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ri=Rt,ii=Wr,oi=ee?ee.prototype:void 0,ai=oi?oi.toString:void 0;var si=function e(t){if("string"==typeof t)return t;if(ri(t))return ni(t,e)+"";if(ii(t))return ai?ai.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},li=si;var ci=Rt,ui=Xr,di=ti,hi=function(e){return null==e?"":li(e)};var pi=function(e,t){return ci(e)?e:ui(e,t)?[e]:di(hi(e))},fi=Wr;var gi=function(e){if("string"==typeof e||fi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},mi=pi,yi=gi;var bi=function(e,t){for(var n=0,r=(t=mi(t,e)).length;null!=e&&n<r;)e=e[yi(t[n++])];return n&&n==r?e:void 0},vi=bi;var wi=function(e,t,n){var r=null==e?void 0:vi(e,t);return void 0===r?n:r};var xi=pi,Si=sn,Fi=Rt,_i=dn,$i=hn,Bi=gi;var ki=function(e,t){return null!=e&&t in Object(e)},Oi=function(e,t,n){for(var r=-1,i=(t=xi(t,e)).length,o=!1;++r<i;){var a=Bi(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&$i(i)&&_i(a,i)&&(Fi(e)||Si(e))};var Di=jr,ji=wi,Ai=function(e,t){return null!=e&&Oi(e,t,ki)},Ei=Xr,Ci=Ir,Ii=Tr,Pi=gi;var zi=bi;var Ti=function(e){return function(t){return null==t?void 0:t[e]}},Hi=function(e){return function(t){return zi(t,e)}},Ni=Xr,Li=gi;var Mi=Mr,Ri=function(e,t){return Ei(e)&&Ci(t)?Ii(Pi(e),t):function(n){var r=ji(n,e);return void 0===r&&r===t?Ai(n,e):Di(t,r,3)}},Vi=function(e){return e},Wi=Rt,qi=function(e){return Ni(e)?Ti(Li(e)):Hi(e)};var Ui=function(e){return"function"==typeof e?e:null==e?Vi:"object"==typeof e?Wi(e)?Ri(e[0],e[1]):Mi(e):qi(e)},Qi=/\s/;var Gi=function(e){for(var t=e.length;t--&&Qi.test(e.charAt(t)););return t},Xi=/^\s+/;var Zi=function(e){return e?e.slice(0,Gi(e)+1).replace(Xi,""):e},Ki=he,Yi=Wr,Ji=/^[-+]0x[0-9a-f]+$/i,eo=/^0b[01]+$/i,to=/^0o[0-7]+$/i,no=parseInt;var ro=function(e){if("number"==typeof e)return e;if(Yi(e))return NaN;if(Ki(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ki(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zi(e);var n=eo.test(e);return n||to.test(e)?no(e.slice(2),n?2:8):Ji.test(e)?NaN:+e},io=1/0;var oo=function(e){return e?(e=ro(e))===io||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ao=O,so=Ui,lo=function(e){var t=oo(e),n=t%1;return t==t?n?t-n:t:0},co=Math.max;var uo=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:lo(n);return i<0&&(i=co(r+i,0)),ao(e,so(t),i)},ho=Ui,po=Mn,fo=qn;var go=function(e){return function(t,n,r){var i=Object(t);if(!po(t)){var o=ho(n);t=fo(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}}(uo),mo=jr;var yo=function(e,t){return mo(e,t)};let bo=Io();const vo=e=>jo(e,bo);let wo=Io();vo.write=e=>jo(e,wo);let xo=Io();vo.onStart=e=>jo(e,xo);let So=Io();vo.onFrame=e=>jo(e,So);let Fo=Io();vo.onFinish=e=>jo(e,Fo);let _o=[];vo.setTimeout=(e,t)=>{let n=vo.now()+t,r=()=>{let e=_o.findIndex((e=>e.cancel==r));~e&&_o.splice(e,1),Oo-=~e?1:0},i={time:n,handler:e,cancel:r};return _o.splice($o(n),0,i),Oo+=1,Ao(),i};let $o=e=>~(~_o.findIndex((t=>t.time>e))||~_o.length);vo.cancel=e=>{xo.delete(e),So.delete(e),Fo.delete(e),bo.delete(e),wo.delete(e)},vo.sync=e=>{Do=!0,vo.batchedUpdates(e),Do=!1},vo.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,vo.onStart(n)}return r.handler=e,r.cancel=()=>{xo.delete(n),t=null},r};let Bo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};vo.use=e=>Bo=e,vo.now="undefined"!=typeof performance?()=>performance.now():Date.now,vo.batchedUpdates=e=>e(),vo.catch=console.error,vo.frameLoop="always",vo.advance=()=>{"demand"!==vo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Co()};let ko=-1,Oo=0,Do=!1;function jo(e,t){Do?(t.delete(e),e(0)):(t.add(e),Ao())}function Ao(){ko<0&&(ko=0,"demand"!==vo.frameLoop&&Bo(Eo))}function Eo(){~ko&&(Bo(Eo),vo.batchedUpdates(Co))}function Co(){let e=ko;ko=vo.now();let t=$o(ko);t&&(Po(_o.splice(0,t),(e=>e.handler())),Oo-=t),Oo?(xo.flush(),bo.flush(e?Math.min(64,ko-e):16.667),So.flush(),wo.flush(),Fo.flush()):ko=-1}function Io(){let e=new Set,t=e;return{add(n){Oo+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Oo-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Oo-=t.size,Po(t,(t=>t(n)&&e.add(t))),Oo+=e.size,t=e)}}}function Po(e,t){e.forEach((e=>{try{t(e)}catch(e){vo.catch(e)}}))}function zo(){}const To={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ho(e,t){if(To.arr(e)){if(!To.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const No=(e,t)=>e.forEach(t);function Lo(e,t,n){if(To.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Mo=e=>To.und(e)?[]:To.arr(e)?e:[e];function Ro(e,t){if(e.size){const n=Array.from(e);e.clear(),No(n,t)}}const Vo=(e,...t)=>Ro(e,(e=>e(...t))),Wo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let qo,Uo,Qo=null,Go=!1,Xo=zo;var Zo=Object.freeze({__proto__:null,get createStringInterpolator(){return qo},get to(){return Uo},get colors(){return Qo},get skipAnimation(){return Go},get willAdvance(){return Xo},assign:e=>{e.to&&(Uo=e.to),e.now&&(vo.now=e.now),void 0!==e.colors&&(Qo=e.colors),null!=e.skipAnimation&&(Go=e.skipAnimation),e.createStringInterpolator&&(qo=e.createStringInterpolator),e.requestAnimationFrame&&vo.use(e.requestAnimationFrame),e.batchedUpdates&&(vo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Xo=e.willAdvance),e.frameLoop&&(vo.frameLoop=e.frameLoop)}});const Ko=new Set;let Yo=[],Jo=[],ea=0;const ta={get idle(){return!Ko.size&&!Yo.length},start(e){ea>e.priority?(Ko.add(e),vo.onStart(na)):(ra(e),vo(oa))},advance:oa,sort(e){if(ea)vo.onFrame((()=>ta.sort(e)));else{const t=Yo.indexOf(e);~t&&(Yo.splice(t,1),ia(e))}},clear(){Yo=[],Ko.clear()}};function na(){Ko.forEach(ra),Ko.clear(),vo(oa)}function ra(e){Yo.includes(e)||ia(e)}function ia(e){Yo.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Yo,(t=>t.priority>e.priority)),0,e)}function oa(e){const t=Jo;for(let n=0;n<Yo.length;n++){const r=Yo[n];ea=r.priority,r.idle||(Xo(r),r.advance(e),r.idle||t.push(r))}return ea=0,Jo=Yo,Jo.length=0,Yo=t,Yo.length>0}const aa="[-+]?\\d*\\.?\\d+",sa=aa+"%";function la(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ca=new RegExp("rgb"+la(aa,aa,aa)),ua=new RegExp("rgba"+la(aa,aa,aa,aa)),da=new RegExp("hsl"+la(aa,sa,sa)),ha=new RegExp("hsla"+la(aa,sa,sa,aa)),pa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,fa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ga=/^#([0-9a-fA-F]{6})$/,ma=/^#([0-9a-fA-F]{8})$/;function ya(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ba(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=ya(i,r,e+1/3),a=ya(i,r,e),s=ya(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function va(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function wa(e){return(parseFloat(e)%360+360)%360/360}function xa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Sa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Fa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ga.exec(e))?parseInt(t[1]+"ff",16)>>>0:Qo&&void 0!==Qo[e]?Qo[e]:(t=ca.exec(e))?(va(t[1])<<24|va(t[2])<<16|va(t[3])<<8|255)>>>0:(t=ua.exec(e))?(va(t[1])<<24|va(t[2])<<16|va(t[3])<<8|xa(t[4]))>>>0:(t=pa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ma.exec(e))?parseInt(t[1],16)>>>0:(t=fa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=da.exec(e))?(255|ba(wa(t[1]),Sa(t[2]),Sa(t[3])))>>>0:(t=ha.exec(e))?(ba(wa(t[1]),Sa(t[2]),Sa(t[3]))|xa(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const _a=(e,t,n)=>{if(To.fun(e))return e;if(To.arr(e))return _a({range:e,output:t,extrapolate:n});if(To.str(e.output[0]))return qo(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const $a=1.70158,Ba=1.525*$a,ka=$a+1,Oa=2*Math.PI/3,Da=2*Math.PI/4.5,ja=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Aa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ka*e*e*e-$a*e*e,easeOutBack:e=>1+ka*Math.pow(e-1,3)+$a*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ba)/2:(Math.pow(2*e-2,2)*((Ba+1)*(2*e-2)+Ba)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Oa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Oa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Da)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Da)/2+1,easeInBounce:e=>1-ja(1-e),easeOutBounce:ja,easeInOutBounce:e=>e<.5?(1-ja(1-2*e))/2:(1+ja(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ea.apply(this,arguments)}const Ca=Symbol.for("FluidValue.get"),Ia=Symbol.for("FluidValue.observers"),Pa=e=>Boolean(e&&e[Ca]),za=e=>e&&e[Ca]?e[Ca]():e,Ta=e=>e[Ia]||null;function Ha(e,t){let n=e[Ia];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Na{constructor(e){if(this[Ca]=void 0,this[Ia]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");La(this,e)}}const La=(e,t)=>Va(e,Ca,t);function Ma(e,t){if(e[Ca]){let n=e[Ia];n||Va(e,Ia,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ra(e,t){let n=e[Ia];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ia]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Va=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Wa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,qa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ua=new RegExp(`(${Wa.source})(%|[a-z]+)`,"i"),Qa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ga=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Xa=e=>{const[t,n]=Za(e);if(!t||Wo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Ga.test(n)?Xa(n):n||e},Za=e=>{const t=Ga.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ka;const Ya=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Ja=e=>{Ka||(Ka=Qo?new RegExp(`(${Object.keys(Qo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>za(e).replace(Ga,Xa).replace(qa,Fa).replace(Ka,Fa))),n=t.map((e=>e.match(Wa).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>_a(Ea({},e,{output:t}))));return e=>{var n;const i=!Ua.test(t[0])&&(null==(n=t.find((e=>Ua.test(e))))?void 0:n.replace(Wa,""));let o=0;return t[0].replace(Wa,(()=>`${r[o++](e)}${i||""}`)).replace(Qa,Ya)}},es="react-spring: ",ts=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${es}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},ns=ts(console.warn);const rs=ts(console.warn);function is(e){return To.str(e)&&("#"==e[0]||/\d/.test(e)||!Wo()&&Ga.test(e)||e in(Qo||{}))}const os=Wo()?o:a,as=()=>{const e=l(!1);return os((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ss(){const e=s()[1],t=as();return()=>{t.current&&e(Math.random())}}const ls=e=>o(e,cs),cs=[];function us(e){const t=l();return o((()=>{t.current=e})),t.current}const ds=Symbol.for("Animated:node"),hs=e=>e&&e[ds],ps=(e,t)=>{return n=e,r=ds,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},fs=e=>e&&e[ds]&&e[ds].getPayload();class gs{constructor(){this.payload=void 0,ps(this,this)}getPayload(){return this.payload||[]}}class ms extends gs{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,To.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ms(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return To.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,To.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ys extends ms{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=_a({output:[e,e]})}static create(e){return new ys(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(To.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=_a({output:[this.getValue(),e]})),this._value=0,super.reset()}}const bs={dependencies:null};class vs extends gs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Lo(this.source,((n,r)=>{var i;(i=n)&&i[ds]===i?t[r]=n.getValue(e):Pa(n)?t[r]=za(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&No(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Lo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){bs.dependencies&&Pa(e)&&bs.dependencies.add(e);const t=fs(e);t&&No(t,(e=>this.add(e)))}}class ws extends vs{constructor(e){super(e)}static create(e){return new ws(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(xs)),!0)}}function xs(e){return(is(e)?ys:ms).create(e)}function Ss(e){const t=hs(e);return t?t.constructor:To.arr(e)?ws:is(e)?ys:ms}function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}const _s=(e,t)=>{const n=!To.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=n&&u((e=>{s.current=function(e,t){e&&(To.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;bs.dependencies=n,e.style&&(e=Fs({},e,{style:t.createAnimatedStyle(e.style)}));return e=new vs(e),bs.dependencies=null,[e,n]}(i,t),p=ss(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new $s(f,h),m=l();os((()=>(m.current=g,No(h,(e=>Ma(e,g))),()=>{m.current&&(No(m.current.deps,(e=>Ra(e,m.current))),vo.cancel(m.current.update))}))),o(f,[]),ls((()=>()=>{const e=m.current;No(e.deps,(t=>Ra(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,Fs({},y,{ref:c}))}))};class $s{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&vo.write(this.update)}}const Bs=Symbol.for("AnimatedComponent"),ks=e=>To.str(e)?e:e&&To.str(e.displayName)?e.displayName:To.fun(e)&&e.name||null;function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}function Ds(e,...t){return To.fun(e)?e(...t):e}const js=(e,t)=>!0===e||!!(t&&e&&(To.fun(e)?e(t):Mo(e).includes(t))),As=(e,t)=>To.obj(e)?t&&e[t]:e,Es=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Cs=e=>e,Is=(e,t=Cs)=>{let n=Ps;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);To.und(n)||(r[i]=n)}return r},Ps=["config","onProps","onStart","onChange","onPause","onResume","onRest"],zs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ts(e){const t=function(e){const t={};let n=0;if(Lo(e,((e,r)=>{zs[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Lo(e,((e,r)=>r in t||(n[r]=e))),n}return Os({},e)}function Hs(e){return e=za(e),To.arr(e)?e.map(Hs):is(e)?Zo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ns(e){return To.fun(e)||To.arr(e)&&To.obj(e[0])}const Ls=Os({},{tension:170,friction:26},{mass:1,damping:1,easing:Aa.linear,clamp:!1});class Ms{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Ls)}}function Rs(e,t){if(To.und(t.decay)){const n=!To.und(t.tension)||!To.und(t.friction);!n&&To.und(t.frequency)&&To.und(t.damping)&&To.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Vs=[];class Ws{constructor(){this.changed=!1,this.values=Vs,this.toValues=null,this.fromValues=Vs,this.to=void 0,this.from=void 0,this.config=new Ms,this.immediate=!1}}function qs(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=js(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{To.und(n.pause)||(i.paused=js(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||js(e,t)),c=Ds(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-vo.now()}function p(){c>0&&!Zo.skipAnimation?(i.delayed=!0,u=vo.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Os({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Us=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Xs(e.get()):t.every((e=>e.noop))?Qs(e.get()):Gs(e.get(),t.every((e=>e.finished))),Qs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Gs=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Xs=e=>({value:e,cancelled:!0,finished:!1});function Zs(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Is(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Xs(r)||i!==n.asyncId&&Gs(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Ys,a=new Js;return(async()=>{if(Zo.skipAnimation)throw Ks(n),a.result=Gs(r,!1),d(a),a;p(o);const s=To.obj(e)?Os({},e):Os({},t,{to:e});s.parentId=i,Lo(c,((e,t)=>{To.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Zo.skipAnimation)return Ks(n),Gs(r,!1);try{let t;t=To.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Gs(r.get(),!0,!1)}catch(e){if(e instanceof Ys)g=e.result;else{if(!(e instanceof Js))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return To.fun(a)&&vo.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Ks(e,t){Ro(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Ys extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Js extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const el=e=>e instanceof nl;let tl=1;class nl extends Na{constructor(...e){super(...e),this.id=tl++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=hs(this);return e&&e.getValue()}to(...e){return Zo.to(this,e)}interpolate(...e){return ns(`${es}The "interpolate" function is deprecated in v9 (use "to" instead)`),Zo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ha(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ta.sort(this),Ha(this,{type:"priority",parent:this,priority:e})}}const rl=Symbol.for("SpringPhase"),il=e=>(1&e[rl])>0,ol=e=>(2&e[rl])>0,al=e=>(4&e[rl])>0,sl=(e,t)=>t?e[rl]|=3:e[rl]&=-3,ll=(e,t)=>t?e[rl]|=4:e[rl]&=-5;class cl extends nl{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ws,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!To.und(e)||!To.und(t)){const n=To.obj(e)?Os({},e):Os({},t,{from:e});To.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ol(this)||this._state.asyncTo)||al(this)}get goal(){return za(this.animation.to)}get velocity(){const e=hs(this);return e instanceof ms?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return il(this)}get isAnimating(){return ol(this)}get isPaused(){return al(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=fs(r.to);!a&&Pa(r.to)&&(o=Mo(za(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ys?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=To.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(To.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!To.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=hs(this),l=s.getValue();if(t){const e=za(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return vo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ol(this)){const{to:e,config:t}=this.animation;vo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return To.und(e)?(n=this.queue||[],this.queue=[]):n=[To.obj(e)?e:Os({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Us(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ks(this._state,e&&this._lastCallId),vo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=To.obj(n)?n[t]:n,(null==n||Ns(n))&&(n=void 0),r=To.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return il(this)||(e.reverse&&([n,r]=[r,n]),r=za(r),To.und(r)?hs(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Os({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Is(n,((e,t)=>/^on/.test(t)?As(e,r):e))),ml(this,n,"onProps"),yl(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return qs(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{al(this)||(ll(this,!0),Vo(a.pauseQueue),yl(this,"onPause",Gs(this,ul(this,this.animation.to)),this))},resume:()=>{al(this)&&(ll(this,!1),ol(this)&&this._resume(),Vo(a.resumeQueue),yl(this,"onResume",Gs(this,ul(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=dl(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Xs(this));const r=!To.und(e.to),i=!To.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Xs(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!To.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ho(d,c);h&&(s.from=d),d=za(d);const p=!Ho(u,l);p&&this._focus(u);const f=Ns(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Rs(n=Os({},n),t),t=Os({},n,t)),Rs(e,t),Object.assign(e,t);for(const t in Ls)null==e[t]&&(e[t]=Ls[t]);let{mass:r,frequency:i,damping:o}=e;To.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Ds(t.config,o),t.config!==a.config?Ds(a.config,o):void 0);let b=hs(this);if(!b||To.und(u))return n(Gs(this,!0));const v=To.und(t.reset)?i&&!t.default:!To.und(d)&&js(t.reset,o),w=v?d:this.get(),x=Hs(u),S=To.num(x)||To.arr(x)||is(x),F=!f&&(!S||js(a.immediate||t.immediate,o));if(p){const e=Ss(u);if(e!==b.constructor){if(!F)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(x)}}const _=b.constructor;let $=Pa(u),B=!1;if(!$){const e=v||!il(this)&&h;(p||e)&&(B=Ho(Hs(w),x),$=!B),(Ho(s.immediate,F)||F)&&Ho(g.decay,m)&&Ho(g.velocity,y)||($=!0)}if(B&&ol(this)&&(s.changed&&!v?$=!0:$||this._stop(l)),!f&&(($||Pa(l))&&(s.values=b.getPayload(),s.toValues=Pa(u)?null:_==ys?[1]:Mo(x)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),$)){const{onRest:e}=s;No(gl,(e=>ml(this,t,e)));const r=Gs(this,ul(this,l));Vo(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&vo.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?Ds(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),f?n(Zs(t.to,t,this._state,this)):$?this._start():ol(this)&&!p?this._pendingCalls.add(n):n(Qs(w))}_focus(e){const t=this.animation;e!==t.to&&(Ta(this)&&this._detach(),t.to=e,Ta(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Pa(t)&&(Ma(t,this),el(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Pa(e)&&Ra(e,this)}_set(e,t=!0){const n=za(e);if(!To.und(n)){const e=hs(this);if(!e||!Ho(n,e.getValue())){const r=Ss(n);e&&e.constructor==r?e.setValue(n):ps(this,r.create(n)),e&&vo.batchedUpdates((()=>{this._onChange(n,t)}))}}return hs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,yl(this,"onStart",Gs(this,ul(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ds(this.animation.onChange,e,this)),Ds(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;hs(this).reset(za(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ol(this)||(sl(this,!0),al(this)||this._resume())}_resume(){Zo.skipAnimation?this.finish():ta.start(this)}_stop(e,t){if(ol(this)){sl(this,!1);const n=this.animation;No(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ha(this,{type:"idle",parent:this});const r=t?Xs(this.get()):Gs(this.get(),ul(this,null!=e?e:n.to));Vo(this._pendingCalls,r),n.changed&&(n.changed=!1,yl(this,"onRest",r,this))}}}function ul(e,t){const n=Hs(t);return Ho(Hs(e.get()),n)}function dl(e,t=e.loop,n=e.to){let r=Ds(t);if(r){const i=!0!==r&&Ts(r),o=(i||e).reverse,a=!i||i.reset;return hl(Os({},e,{loop:t,default:!1,pause:void 0,to:!o||Ns(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function hl(e){const{to:t,from:n}=e=Ts(e),r=new Set;return To.obj(t)&&fl(t,r),To.obj(n)&&fl(n,r),e.keys=r.size?Array.from(r):null,e}function pl(e){const t=hl(e);return To.und(t.default)&&(t.default=Is(t)),t}function fl(e,t){Lo(e,((e,n)=>null!=e&&t.add(n)))}const gl=["onStart","onRest","onChange","onPause","onResume"];function ml(e,t,n){e.animation[n]=t[n]!==Es(t,n)?As(t[n],e.key):void 0}function yl(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const bl=["onStart","onChange","onRest"];let vl=1;class wl{constructor(e,t){this.id=vl++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Os({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];To.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(hl(e)),this}start(e){let{queue:t}=this;return e?t=Mo(e).map(hl):this.queue=[],this._flush?this._flush(this,t):(kl(this,t),xl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;No(Mo(t),(t=>n[t].stop(!!e)))}else Ks(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(To.und(e))this.start({pause:!0});else{const t=this.springs;No(Mo(e),(e=>t[e].pause()))}return this}resume(e){if(To.und(e))this.start({pause:!1});else{const t=this.springs;No(Mo(e),(e=>t[e].resume()))}return this}each(e){Lo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ro(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ro(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ro(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}vo.onFrame(this._onFrame)}}function xl(e,t){return Promise.all(t.map((t=>Sl(e,t)))).then((t=>Us(e,t)))}async function Sl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=To.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=To.arr(i)||To.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):No(bl,(n=>{const r=t[n];if(To.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Vo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Es(t,"cancel");(u||p&&d.asyncId)&&h.push(qs(++e._lastAsyncId,{props:t,state:d,actions:{pause:zo,resume:zo,start(t,n){p?(Ks(d,e._lastAsyncId),n(Xs(e))):(t.onRest=s,n(Zs(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Us(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=dl(t,a,i);if(n)return kl(e,[n]),Sl(e,n,!0)}return l&&vo.batchedUpdates((()=>l(f,e,e.item))),f}function Fl(e,t){const n=Os({},e.springs);return t&&No(Mo(t),(e=>{To.und(e.keys)&&(e=hl(e)),To.obj(e.to)||(e=Os({},e,{to:void 0})),Bl(n,e,(e=>$l(e)))})),_l(e,n),n}function _l(e,t){Lo(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ma(t,e))}))}function $l(e,t){const n=new cl;return n.key=e,t&&Ma(n,t),n}function Bl(e,t,n){t.keys&&No(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function kl(e,t){No(t,(t=>{Bl(e.springs,t,(t=>$l(t,e)))}))}const Ol=["children"],Dl=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Ol);const i=d(jl),a=n.pause||!!i.pause,c=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=l(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:c})),[a,c]);const{Provider:u}=jl;return r.createElement(u,{value:n},t)},jl=(Al=Dl,El={},Object.assign(Al,r.createContext(El)),Al.Provider._context=Al,Al.Consumer._context=Al,Al);var Al,El;Dl.Provider=jl.Provider,Dl.Consumer=jl.Consumer;const Cl=()=>{const e=[],t=function(t){rs(`${es}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return No(e,((e,i)=>{if(To.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return No(e,(e=>e.pause(...arguments))),this},t.resume=function(){return No(e,(e=>e.resume(...arguments))),this},t.set=function(t){No(e,(e=>e.set(t)))},t.start=function(t){const n=[];return No(e,((e,r)=>{if(To.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return No(e,(e=>e.stop(...arguments))),this},t.update=function(t){return No(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return To.fun(e)?e(n,t):e};return t._getProps=n,t};function Il(e,t){const n=To.fun(e),[[r],i]=function(e,t,n){const r=To.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?Cl():void 0),[]),o=l(0),a=ss(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=Fl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?xl(e,t):new Promise((r=>{_l(e,n),s.queue.push((()=>{r(xl(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=us(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new wl(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=pl(n))}}h((()=>{No(c.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>Fl(e,u[t]))),m=d(Dl),y=us(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);os((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],No(e,(e=>e()))),No(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ls((()=>()=>{No(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>Os({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Pl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Pl||(Pl={}));class zl extends nl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=_a(...t);const n=this._get(),r=Ss(n);ps(this,r.create(n))}advance(e){const t=this._get();Ho(t,this.get())||(hs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Hl(this._active)&&Nl(this)}_get(){const e=To.arr(this.source)?this.source.map(za):Mo(za(this.source));return this.calc(...e)}_start(){this.idle&&!Hl(this._active)&&(this.idle=!1,No(fs(this),(e=>{e.done=!1})),Zo.skipAnimation?(vo.batchedUpdates((()=>this.advance())),Nl(this)):ta.start(this))}_attach(){let e=1;No(Mo(this.source),(t=>{Pa(t)&&Ma(t,this),el(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){No(Mo(this.source),(e=>{Pa(e)&&Ra(e,this)})),this._active.clear(),Nl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Mo(this.source).reduce(((e,t)=>Math.max(e,(el(t)?t.priority:0)+1)),0))}}function Tl(e){return!1!==e.idle}function Hl(e){return!e.size||Array.from(e).every(Tl)}function Nl(e){e.idle||(e.idle=!0,No(fs(e),(e=>{e.done=!0})),Ha(e,{type:"idle",parent:e}))}function Ll(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Zo.assign({createStringInterpolator:Ja,to:(e,t)=>new zl(e,t)});const Ml=["style","children","scrollTop","scrollLeft","viewBox"],Rl=/^--/;function Vl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Rl.test(e)||ql.hasOwnProperty(e)&&ql[e]?(""+t).trim():t+"px"}const Wl={};let ql={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Ul=["Webkit","Ms","Moz","O"];ql=Object.keys(ql).reduce(((e,t)=>(Ul.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ql);const Ql=["x","y","z"],Gl=/^(matrix|translate|scale|rotate|skew)/,Xl=/^(translate)/,Zl=/^(rotate|skew)/,Kl=(e,t)=>To.num(e)&&0!==e?e+t:e,Yl=(e,t)=>To.arr(e)?e.every((e=>Yl(e,t))):To.num(e)?e===t:parseFloat(e)===t;class Jl extends vs{constructor(e){let{x:t,y:n,z:r}=e,i=Ll(e,Ql);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Kl(e,"px"))).join(",")})`,Yl(e,0)]))),Lo(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Gl.test(t)){if(delete i[t],To.und(e))return;const n=Xl.test(t)?"px":Zl.test(t)?"deg":"";o.push(Mo(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Kl(i,n)})`,Yl(i,0)]:e=>[`${t}(${e.map((e=>Kl(e,n))).join(",")})`,Yl(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ec(o,a)),super(i)}}class ec extends Na{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return No(this.inputs,((n,r)=>{const i=za(n[0]),[o,a]=this.transforms[r](To.arr(i)?i:n.map(za));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&No(this.inputs,(e=>No(e,(e=>Pa(e)&&Ma(e,this)))))}observerRemoved(e){0==e&&No(this.inputs,(e=>No(e,(e=>Pa(e)&&Ra(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ha(this,e)}}const tc=["scrollTop","scrollLeft"];Zo.assign({batchedUpdates:p,createStringInterpolator:Ja,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const nc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new vs(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ks(e)||"Anonymous";return(e=To.str(e)?o[e]||(o[e]=_s(e,i)):e[Bs]||(e[Bs]=_s(e,i))).displayName=`Animated(${t})`,e};return Lo(e,((t,n)=>{To.arr(e)&&(n=ks(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Ll(r,Ml),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Wl[t]||(Wl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Vl(t,i[t]);Rl.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Jl(e),getComponentProps:e=>Ll(e,tc)}),rc=nc.animated,ic=(e,t,n)=>t?wi(n,t)||wi(e,t):n||e,oc=(e,t)=>{const n=t||e.defaultValue;return wi(e.collections,n)};var ac;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ac||(ac={}));const sc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},lc=e=>t=>{const n=t.theme,r=oc(sc,n[ac.colorScheme]);return n.options&&n.options.color?ic(r,e,n.options.color):ic(r,e)},cc={Brand:{1:lc("Brand.1"),2:lc("Brand.2"),3:lc("Brand.3"),4:lc("Brand.4"),5:lc("Brand.5"),6:lc("Brand.6")},Primary:lc("Primary"),PrimaryDark:lc("PrimaryDark"),Secondary:lc("Secondary"),Accent:{Light:{1:lc("Accent.Light.1"),2:lc("Accent.Light.2"),3:lc("Accent.Light.3"),4:lc("Accent.Light.4"),5:lc("Accent.Light.5"),6:lc("Accent.Light.6")},Dark:{1:lc("Accent.Dark.1"),2:lc("Accent.Dark.2"),3:lc("Accent.Dark.3")}},Neutral:{1:lc("Neutral.1"),2:lc("Neutral.2"),3:lc("Neutral.3"),4:lc("Neutral.4"),5:lc("Neutral.5"),6:lc("Neutral.6"),7:lc("Neutral.7"),8:lc("Neutral.8")},Validation:{Green:{Text:lc("Validation.Green.Text"),Icon:lc("Validation.Green.Icon"),Border:lc("Validation.Green.Border"),Background:lc("Validation.Green.Background")},Orange:{Text:lc("Validation.Orange.Text"),Icon:lc("Validation.Orange.Icon"),Border:lc("Validation.Orange.Border"),Background:lc("Validation.Orange.Background"),Badge:lc("Validation.Orange.Badge")},Red:{Text:lc("Validation.Red.Text"),Icon:lc("Validation.Red.Icon"),Border:lc("Validation.Red.Border"),Background:lc("Validation.Red.Background")},Blue:{Text:lc("Validation.Blue.Text"),Icon:lc("Validation.Blue.Icon"),Border:lc("Validation.Blue.Border"),Background:lc("Validation.Blue.Background")}},Shadow:{Accent:lc("Shadow.Accent"),Red:lc("Shadow.Red"),Elevation:lc("Shadow.Elevation")}},uc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},dc=e=>Object.keys(uc).reduce(((t,n)=>{const r=uc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),hc=dc("max-width"),pc=(dc("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),fc=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,gc=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||cc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${fc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,mc=f(gc)`
    animation-delay: -0.45s;
`,yc=f(gc)`
    animation-delay: -0.3s;
`,bc=f(gc)`
    animation-delay: -0.15s;
`,vc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},wc={collections:{base:{D1:{fontFamily:vc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},xc=e=>t=>{const n=t.theme,r=oc(wc,n[ac.textStyleScheme]);return n.options&&n.options.textStyle?ic(r,e,n.options.textStyle):ic(r,e)},Sc={D1:{fontFamily:xc("D1.fontFamily"),fontSize:xc("D1.fontSize"),fontWeight:xc("D1.fontWeight"),lineHeight:xc("D1.lineHeight"),letterSpacing:xc("D1.letterSpacing")},D2:{fontFamily:xc("D2.fontFamily"),fontSize:xc("D2.fontSize"),fontWeight:xc("D2.fontWeight"),lineHeight:xc("D2.lineHeight"),letterSpacing:xc("D2.letterSpacing")},D3:{fontFamily:xc("D3.fontFamily"),fontSize:xc("D3.fontSize"),fontWeight:xc("D3.fontWeight"),lineHeight:xc("D3.lineHeight"),letterSpacing:xc("D3.letterSpacing")},D4:{fontFamily:xc("D4.fontFamily"),fontSize:xc("D4.fontSize"),fontWeight:xc("D4.fontWeight"),lineHeight:xc("D4.lineHeight"),letterSpacing:xc("D4.letterSpacing")},DBody:{fontFamily:xc("DBody.fontFamily"),fontSize:xc("DBody.fontSize"),fontWeight:xc("DBody.fontWeight"),lineHeight:xc("DBody.lineHeight"),letterSpacing:xc("DBody.letterSpacing")},H1:{fontFamily:xc("H1.fontFamily"),fontSize:xc("H1.fontSize"),fontWeight:xc("H1.fontWeight"),lineHeight:xc("H1.lineHeight"),letterSpacing:xc("H1.letterSpacing")},H2:{fontFamily:xc("H2.fontFamily"),fontSize:xc("H2.fontSize"),fontWeight:xc("H2.fontWeight"),lineHeight:xc("H2.lineHeight"),letterSpacing:xc("H2.letterSpacing")},H3:{fontFamily:xc("H3.fontFamily"),fontSize:xc("H3.fontSize"),fontWeight:xc("H3.fontWeight"),lineHeight:xc("H3.lineHeight"),letterSpacing:xc("H3.letterSpacing")},H4:{fontFamily:xc("H4.fontFamily"),fontSize:xc("H4.fontSize"),fontWeight:xc("H4.fontWeight"),lineHeight:xc("H4.lineHeight"),letterSpacing:xc("H4.letterSpacing")},H5:{fontFamily:xc("H5.fontFamily"),fontSize:xc("H5.fontSize"),fontWeight:xc("H5.fontWeight"),lineHeight:xc("H5.lineHeight"),letterSpacing:xc("H5.letterSpacing")},H6:{fontFamily:xc("H6.fontFamily"),fontSize:xc("H6.fontSize"),fontWeight:xc("H6.fontWeight"),lineHeight:xc("H6.lineHeight"),letterSpacing:xc("H6.letterSpacing")},Body:{fontFamily:xc("Body.fontFamily"),fontSize:xc("Body.fontSize"),fontWeight:xc("Body.fontWeight"),lineHeight:xc("Body.lineHeight"),letterSpacing:xc("Body.letterSpacing")},BodySmall:{fontFamily:xc("BodySmall.fontFamily"),fontSize:xc("BodySmall.fontSize"),fontWeight:xc("BodySmall.fontWeight"),lineHeight:xc("BodySmall.lineHeight"),letterSpacing:xc("BodySmall.letterSpacing")},XSmall:{fontFamily:xc("XSmall.fontFamily"),fontSize:xc("XSmall.fontSize"),fontWeight:xc("XSmall.fontWeight"),lineHeight:xc("XSmall.lineHeight"),letterSpacing:xc("XSmall.letterSpacing")}},Fc=e=>{switch(e){case 700:case"bold":return vc.Bold;case 600:case"semibold":return vc.Semibold;case 300:case"light":return vc.Light;case 400:case"regular":return vc.Regular;default:return""}},_c=(e,t)=>n=>{var r;const i=Sc[e].fontFamily(n),o=Sc[e].fontWeight(n);return Object.values(vc).includes(i)?m`
                font-family: ${Fc(t)||Fc(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=$c(t)||o)&&void 0!==r?r:"normal"};
        `},$c=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Bc=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},kc=(e,t,n=!1)=>r=>{const i=Sc[e],o=i.fontSize(r);return m`
            ${_c(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Oc=(e=!1,t=!1,n=void 0)=>t?m`
            display: block;
            ${Bc(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${Bc(n)}
        `;var Dc;!function(e){e.D1=f.h1`
        ${e=>m`
                ${kc("D1",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${kc("D2",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${kc("D3",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${kc("D4",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${kc("DBody",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${kc("H1",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${kc("H2",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${kc("H3",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${kc("H4",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${kc("H5",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${kc("H6",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${kc("Body",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${kc("BodySmall",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${kc("XSmall",e.weight,e.paragraph)}
                color: ${cc.Neutral[1]};
                ${Oc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ec(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ec(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Dc||(Dc={}));const jc=f.a`
    ${e=>m`
            ${kc(e.textStyle,e.weight)}
            color: ${cc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${cc.Secondary};

                svg {
                    color: ${cc.Secondary};
                }
            }
        `}
`,Ac=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ec=n=>{var{external:r=!1,children:i}=n,o=B(n,["external","children"]);return e(jc,Object.assign({},o,{children:[i,r&&t(Ac,{})]}))};var Cc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Cc||(Cc={}));const Ic={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${cc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${cc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${cc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${cc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${cc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${cc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Pc=e=>t=>{var n;const r=t.theme,i=oc(Ic,r[ac.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ic(i,e,r.options.designToken):ic(i,e)},zc={InputBoxShadow:Pc("InputBoxShadow"),InputErrorBoxShadow:Pc("InputErrorBoxShadow"),ElevationBoxShadow:Pc("ElevationBoxShadow"),Table:{Header:Pc("Table.Header"),Cell:{Primary:Pc("Table.Cell.Primary"),Secondary:Pc("Table.Cell.Secondary"),Selected:Pc("Table.Cell.Selected"),Hover:Pc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Pc("Button.Danger.BackgroundColor"),Hover:Pc("Button.Danger.Hover"),Primary:Pc("Button.Danger.Primary"),Border:Pc("Button.Danger.Border")}}};f.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return m`
                    background-color: ${cc.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?zc.Button.Danger.Border:cc.Primary};

                    span {
                        color: ${e.$buttonIsDanger?zc.Button.Danger.Primary:cc.Primary};
                    }
                `;case"light":return m`
                    background-color: ${cc.Neutral[8]};
                    border: 1px solid ${cc.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?zc.Button.Danger.Primary:cc.Primary};
                    }
                `;case"disabled":return m`
                    background-color: ${cc.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${cc.Neutral[3]};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?zc.Button.Danger.Primary:cc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?zc.Button.Danger.Hover:cc.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?zc.Button.Danger.BackgroundColor:cc.Primary};
                    border: 1px solid transparent;

                    ${hc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${cc.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${kc("H5","semibold")}
                    }

                    ${hc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${kc("H4","semibold")}
                    }

                    ${hc.mobileS} {
                        height: auto;
                    }
                `}
`;const Tc=f((({color:n,className:r,size:i=18})=>e(pc,Object.assign({className:r,$size:i,$color:n},{children:[t(gc,{id:"inner1",$size:i-2,$borderWidth:2}),t(mc,{id:"inner2",$size:i-2,$borderWidth:2}),t(yc,{id:"inner3",$size:i-2,$borderWidth:2}),t(bc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?zc.Button.Danger.Primary:cc.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=cc.Neutral[3](e);break;default:t=cc.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Hc;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Hc||(Hc={}));const Nc=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Lc=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return m`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Nc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?cc.Neutral[4](e):e.$unchecked?cc.Accent.Light[2](e):cc.Primary(e)};
    }
`,Mc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Rc=f(rc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Vc=f.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${cc.Neutral[4]};
        border-right: 5px solid ${cc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${hc.mobileL} {
        max-height: 15rem;
    }
`,Wc=f.li`
    :hover,
    :focus,
    :active {
        background: ${cc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${cc.Accent.Light[5]};
            `}}
`,qc=f.button`
    display: flex;
    ${e=>e.$multiSelect?m`
                padding: 0.5rem 1rem;
            `:m`
                padding: 0 1rem;
                min-height: ${e.$hasNextLineLabel?"4.255rem":"3.5rem"};
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${cc.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Uc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Qc=f.div`
    ${kc("Body","regular")}
    color: ${cc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Uc}
`,Gc=f.div`
    color: ${cc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Uc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${kc("BodySmall","semibold")}
                `:m`
                    ${kc("Body","regular")}
                `}
`,Xc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Qc} {
                        display: inline;
                    }

                    ${Gc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Zc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Kc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Yc=f((n=>{var{className:r,checked:i,disabled:a,indeterminate:s,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=B(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=l();o((()=>{p.current.indeterminate=s}),[s]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Lc,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,$displaySize:d,$disabled:a,$unchecked:!(s||i||a)},{children:[t(Mc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:a},h)),s?t(v,{"data-testid":"indeterminate"}):i?t(w,{"data-testid":"checkmark"}):a?t(x,{"data-testid":"disabled-empty-checkbox"}):t(S,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Jc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,eu=f.button`
    ${kc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${cc.Primary(e)};\n\t\t`}
`,tu=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,nu=f(Dc.Body)``,ru=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${cc.Validation.Red.Icon};
`,iu=f.button`
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

        ${({$highlight:e})=>e&&m`
                background-color: ${cc.Neutral[7]};
            `}
    }
`,ou=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(iu,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))}));f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${cc.Neutral[5]};
    border-radius: 4px;
    background: ${cc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${cc.Accent.Light[1]};
        box-shadow: ${zc.InputBoxShadow};
    }

    ${e=>e.$readOnly?m`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?m`
                background: ${cc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${cc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${cc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${cc.Validation.Red.Border};
                    box-shadow: ${zc.InputErrorBoxShadow};
                }
            `:void 0}
`;const au=f.input`
    ${kc("Body","regular")}
    color: ${cc.Neutral[1]};
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
        color: ${cc.Neutral[3]};
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
`,su=f.li`
    background: ${cc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,lu=f(au)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,cu=f(_)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${cc.Neutral[3]};
`,uu=f(ou)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${cc.Neutral[3]};
    cursor: pointer;
`,du=f(F)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${cc.Neutral[3]};
`,hu=c(((n,r)=>{const{onClear:i}=n,o=B(n,["onClear"]);return e(su,{children:[t(cu,{}),t(lu,Object.assign({ref:r},o)),o.value&&t(uu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(du,{})}))]},"search")})),pu=r=>{var{listItems:i,listExtractor:a,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:x,onRetry:S,itemsLoadState:F="success",itemTruncationType:_="end",itemMaxLines:$=2,labelDisplayType:k="inline",renderListItem:O,onBlur:D,hideNoResultsDisplay:j,renderCustomCallToAction:A}=r,E=B(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,I]=s(0),[P,z]=s(""),[T,H]=s(i),[N,L]=s(0),M=Il({height:N}),R=l(),V=l(),W=l([]),q=l(),U=l(),Q=l(C),G=l(T),X=e=>{Q.current=e,I(e)},Z=e=>{G.current=e,H(e)};o((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),o((()=>{ee(P)}),[P]),o((()=>{if(z(""),h){if(setTimeout((()=>{L(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else L(0)}),[h]),o((()=>{if(h){const e=te();L(e)}}),[T,F]),o((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>a?a(e):e.toString(),Y=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Hc.getTextWidth(e,"1.125rem 'Open Sans'")>t*$},J=e=>!!go(w,(t=>yo(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{S&&S()},se=()=>{D&&D()},le=r=>e(n,{children:[t(Zc,Object.assign({$maxLines:$,"aria-hidden":!0},{children:r})),t(Kc,Object.assign({$maxLines:$,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=K(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":k;return e(Xc,Object.assign({$labelDisplayType:l},{children:[t(Qc,Object.assign({$truncateType:_,$maxLines:$,"aria-label":i},{children:"middle"===_&&a?le(i):i})),o&&t(Gc,Object.assign({$truncateType:_,$maxLines:$,$labelDisplayType:k,"aria-label":o},{children:"middle"===_&&s?le(o):o}))]}))},ue=()=>{if(!S||S&&"success"===F)return T.map(((n,r)=>t(Wc,Object.assign({$checked:J(n)&&!v},{children:e(qc,Object.assign({$hasNextLineLabel:"next-line"===k&&T.length>0&&a&&"string"!=typeof a(T[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Yc,{checked:J(n),displaySize:"small"}),O?O(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(n,r))))},de=()=>{if(v&&T.length>0&&!P&&"success"===F)return t(Jc,{children:t(eu,Object.assign({onClick:x,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!j&&(P||!p)&&0===T.length&&"success"===F)return e(tu,Object.assign({"data-testid":"list-no-results"},{children:[t(ru,{"data-testid":"no-result-icon"}),t(nu,{children:"No results found."})]}),"noResults")},pe=()=>{if(S&&"loading"===F)return e(tu,Object.assign({"data-testid":"list-loading"},{children:[t(Tc,{$buttonStyle:"secondary",size:24}),t(nu,{children:"Loading..."})]}),"loading")},fe=()=>{if(S&&"fail"===F)return e(tu,Object.assign({"data-testid":"list-fail"},{children:[t(ru,{"data-testid":"load-error-icon"}),t(nu,{children:"Failed to load."}),t(eu,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(Rc,Object.assign({style:M,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(Vc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},E,{children:[(p||m)&&"success"===F?t(hu,{ref:q,onChange:ie,value:P,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:A(y,T)}))})()]}))})},fu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",gu=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,mu=m`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${cc.Accent.Light[3]};
    }
`,yu=f.button`
    ${mu}
    cursor: pointer;
`;f.div`
    ${mu}
`;const bu=g`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`,vu=f.div`
    position: relative;
    border: 1px solid ${cc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${cc.Neutral[8]};

    :focus-within {
        border: 1px solid ${cc.Accent.Light[1]};
        box-shadow: ${zc.InputBoxShadow};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${bu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${cc.Neutral[6](e)};

                ${yu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${cc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${yu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${cc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${cc.Validation.Red.Border(e)};
                    box-shadow: ${zc.InputErrorBoxShadow};
                }
            `:void 0}
`,wu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${fu};
    margin-left: 1rem;
`,xu=f($)`
    color: ${cc.Neutral[3]};
    height: ${Sc.Body.fontSize}rem;
    width: ${Sc.Body.fontSize}rem;
`,Su=f.div`
    height: 1px;
    background: ${cc.Neutral[5]};
    margin: 0 0.5rem;
`,Fu=f.div`
    display: flex;
    flex: 1;
`,_u=f(Dc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,$u=f(_u)`
    color: ${cc.Neutral[3]};
`,Bu=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:c,className:u})=>{const d=l();return((e,t,n="window",r)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;n&&s()}}),"document"),t(gu,Object.assign({className:u},{children:t(vu,Object.assign({ref:d,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a},{children:e}))}))},ku=r=>{var{selectedOptions:i,placeholder:a="Select",options:c,className:u,disabled:d,error:h,"data-testid":p,enableSearch:f=!1,searchFunction:g,searchPlaceholder:m,valueExtractor:y,listExtractor:b,onSelectOptions:v,listStyleWidth:w,onShowOptions:x,onHideOptions:S,onRetry:F,onBlur:_,optionsLoadState:$="success",optionTruncationType:k="end"}=r,O=B(r,["selectedOptions","placeholder","options","className","disabled","error","data-testid","enableSearch","searchFunction","searchPlaceholder","valueExtractor","listExtractor","onSelectOptions","listStyleWidth","onShowOptions","onHideOptions","onRetry","onBlur","optionsLoadState","optionTruncationType"]);const[D,j]=s(i||[]),[A,E]=s(!1),C=l();o((()=>{j(i||[])}),[i]);const I=(e,t)=>{const n=[...D],r=uo(D,(e=>(y?y(e):e)===t));r>-1?n.splice(r,1):n.push(e),j(n),T(!1),C&&C.current.focus(),H(n)},P=()=>{A&&(E(!1),T(!1)),C&&C.current.focus()},z=()=>{D&&D.length>0?(j([]),H([])):(j(c),H(c))},T=e=>{!e&&S&&S(),e&&x&&x()},H=e=>{v&&v(e)};return e(Bu,Object.assign({show:A,error:h&&!A,disabled:d,testId:p,className:u,onBlur:()=>{null==_||_(),E(!1),T(!1)}},{children:[t(yu,Object.assign({ref:C,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),d||(E(!A),T(!A),A&&(null==_||_()))},onBlur:()=>{A||null==_||_()}},O,{children:e(n,{children:[t(Fu,{children:D&&0!==D.length?t(_u,{children:D&&0!=D.length?c&&D.length===c.length?"All selected":`${D.length} selected`:a}):t($u,Object.assign({truncateType:k},{children:a}))}),t(wu,Object.assign({expanded:A},{children:t(xu,{})}))]})})),A&&t(Su,{}),c&&c.length>0||F?t(pu,{listItems:c,onSelectItem:I,onDismiss:P,valueExtractor:y,listExtractor:b,listStyleWidth:w,visible:A,enableSearch:f,searchFunction:g,searchPlaceholder:m,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:D,onSelectAll:z,onRetry:F,itemsLoadState:$,itemTruncationType:k}):null]}))};export{ku as InputMultiSelect};
//# sourceMappingURL=index.js.map
