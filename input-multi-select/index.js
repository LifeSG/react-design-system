import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as S,SquareIcon as x}from"@lifesg/react-icons";import{CrossIcon as F}from"@lifesg/react-icons/cross";import{MagnifierIcon as $}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var O=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1};var D=function(){this.__data__=[],this.size=0};var A=function(e,t){return e===t||e!=e&&t!=t},j=A;var E=function(e,t){for(var n=e.length;n--;)if(j(e[n][0],t))return n;return-1},C=E,I=Array.prototype.splice;var P=E;var z=E;var H=E;var T=D,N=function(e){var t=this.__data__,n=C(t,e);return!(n<0)&&(n==t.length-1?t.pop():I.call(t,n,1),--this.size,!0)},L=function(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]},M=function(e){return z(this.__data__,e)>-1},R=function(e,t){var n=this.__data__,r=H(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function V(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}V.prototype.clear=T,V.prototype.delete=N,V.prototype.get=L,V.prototype.has=M,V.prototype.set=R;var W=V,q=W;var U=function(){this.__data__=new q,this.size=0};var Q=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var G=function(e){return this.__data__.get(e)};var X=function(e){return this.__data__.has(e)},Z="object"==typeof k&&k&&k.Object===Object&&k,K=Z,Y="object"==typeof self&&self&&self.Object===Object&&self,J=K||Y||Function("return this")(),ee=J.Symbol,te=ee,ne=Object.prototype,re=ne.hasOwnProperty,ie=ne.toString,oe=te?te.toStringTag:void 0;var ae=function(e){var t=re.call(e,oe),n=e[oe];try{e[oe]=void 0;var r=!0}catch(e){}var i=ie.call(e);return r&&(t?e[oe]=n:delete e[oe]),i},se=Object.prototype.toString;var le=ae,ce=function(e){return se.call(e)},ue=ee?ee.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ue&&ue in Object(e)?le(e):ce(e)};var he=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},pe=de,fe=he;var ge,me=function(e){if(!fe(e))return!1;var t=pe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ye=J["__core-js_shared__"],be=(ge=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var ve=function(e){return!!be&&be in e},we=Function.prototype.toString;var Se=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=me,Fe=ve,$e=he,_e=Se,Be=/^\[object .+?Constructor\]$/,ke=Function.prototype,Oe=Object.prototype,De=ke.toString,Ae=Oe.hasOwnProperty,je=RegExp("^"+De.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ee=function(e){return!(!$e(e)||Fe(e))&&(xe(e)?je:Be).test(_e(e))},Ce=function(e,t){return null==e?void 0:e[t]};var Ie=function(e,t){var n=Ce(e,t);return Ee(n)?n:void 0},Pe=Ie(J,"Map"),ze=Ie(Object,"create"),He=ze;var Te=function(){this.__data__=He?He(null):{},this.size=0};var Ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Le=ze,Me=Object.prototype.hasOwnProperty;var Re=function(e){var t=this.__data__;if(Le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Me.call(t,e)?t[e]:void 0},Ve=ze,We=Object.prototype.hasOwnProperty;var qe=ze;var Ue=Te,Qe=Ne,Ge=Re,Xe=function(e){var t=this.__data__;return Ve?void 0!==t[e]:We.call(t,e)},Ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=qe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=Qe,Ke.prototype.get=Ge,Ke.prototype.has=Xe,Ke.prototype.set=Ze;var Ye=Ke,Je=W,et=Pe;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var it=nt;var ot=nt;var at=nt;var st=function(){this.size=0,this.__data__={hash:new Ye,map:new(et||Je),string:new Ye}},lt=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},ct=function(e){return it(this,e).get(e)},ut=function(e){return ot(this,e).has(e)},dt=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=lt,ht.prototype.get=ct,ht.prototype.has=ut,ht.prototype.set=dt;var pt=ht,ft=W,gt=Pe,mt=pt;var yt=W,bt=U,vt=Q,wt=G,St=X,xt=function(e,t){var n=this.__data__;if(n instanceof ft){var r=n.__data__;if(!gt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new mt(r)}return n.set(e,t),this.size=n.size,this};function Ft(e){var t=this.__data__=new yt(e);this.size=t.size}Ft.prototype.clear=bt,Ft.prototype.delete=vt,Ft.prototype.get=wt,Ft.prototype.has=St,Ft.prototype.set=xt;var $t=Ft;var _t=pt,Bt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},kt=function(e){return this.__data__.has(e)};function Ot(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new _t;++t<n;)this.add(e[t])}Ot.prototype.add=Ot.prototype.push=Bt,Ot.prototype.has=kt;var Dt=Ot,At=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},jt=function(e,t){return e.has(t)};var Et=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new Dt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!At(t,(function(e,t){if(!jt(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Ct=J.Uint8Array,It=A,Pt=Et,zt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Ht=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Tt=ee?ee.prototype:void 0,Nt=Tt?Tt.valueOf:void 0;var Lt=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Ct(e),new Ct(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return It(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=zt;case"[object Set]":var l=1&r;if(s||(s=Ht),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Pt(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Nt)return Nt.call(e)==Nt.call(t)}return!1};var Mt=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Rt=Array.isArray,Vt=Mt,Wt=Rt;var qt=function(e,t,n){var r=t(e);return Wt(e)?r:Vt(r,n(e))};var Ut=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Qt=function(){return[]},Gt=Object.prototype.propertyIsEnumerable,Xt=Object.getOwnPropertySymbols,Zt=Xt?function(e){return null==e?[]:(e=Object(e),Ut(Xt(e),(function(t){return Gt.call(e,t)})))}:Qt;var Kt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Yt=function(e){return null!=e&&"object"==typeof e},Jt=de,en=Yt;var tn=function(e){return en(e)&&"[object Arguments]"==Jt(e)},nn=Yt,rn=Object.prototype,on=rn.hasOwnProperty,an=rn.propertyIsEnumerable,sn=tn(function(){return arguments}())?tn:function(e){return nn(e)&&on.call(e,"callee")&&!an.call(e,"callee")},ln={exports:{}};var cn=function(){return!1};!function(e,t){var n=J,r=cn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(ln,ln.exports);var un=/^(?:0|[1-9]\d*)$/;var dn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&un.test(e))&&e>-1&&e%1==0&&e<t};var hn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},pn=de,fn=hn,gn=Yt,mn={};mn["[object Float32Array]"]=mn["[object Float64Array]"]=mn["[object Int8Array]"]=mn["[object Int16Array]"]=mn["[object Int32Array]"]=mn["[object Uint8Array]"]=mn["[object Uint8ClampedArray]"]=mn["[object Uint16Array]"]=mn["[object Uint32Array]"]=!0,mn["[object Arguments]"]=mn["[object Array]"]=mn["[object ArrayBuffer]"]=mn["[object Boolean]"]=mn["[object DataView]"]=mn["[object Date]"]=mn["[object Error]"]=mn["[object Function]"]=mn["[object Map]"]=mn["[object Number]"]=mn["[object Object]"]=mn["[object RegExp]"]=mn["[object Set]"]=mn["[object String]"]=mn["[object WeakMap]"]=!1;var yn=function(e){return gn(e)&&fn(e.length)&&!!mn[pn(e)]};var bn=function(e){return function(t){return e(t)}},vn={exports:{}};!function(e,t){var n=Z,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(vn,vn.exports);var wn=yn,Sn=bn,xn=vn.exports,Fn=xn&&xn.isTypedArray,$n=Fn?Sn(Fn):wn,_n=Kt,Bn=sn,kn=Rt,On=ln.exports,Dn=dn,An=$n,jn=Object.prototype.hasOwnProperty;var En=function(e,t){var n=kn(e),r=!n&&Bn(e),i=!n&&!r&&On(e),o=!n&&!r&&!i&&An(e),a=n||r||i||o,s=a?_n(e.length,String):[],l=s.length;for(var c in e)!t&&!jn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Dn(c,l))||s.push(c);return s},Cn=Object.prototype;var In=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Cn)};var Pn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),zn=In,Hn=Pn,Tn=Object.prototype.hasOwnProperty;var Nn=me,Ln=hn;var Mn=function(e){return null!=e&&Ln(e.length)&&!Nn(e)},Rn=En,Vn=function(e){if(!zn(e))return Hn(e);var t=[];for(var n in Object(e))Tn.call(e,n)&&"constructor"!=n&&t.push(n);return t},Wn=Mn;var qn=function(e){return Wn(e)?Rn(e):Vn(e)},Un=qt,Qn=Zt,Gn=qn;var Xn=function(e){return Un(e,Gn,Qn)},Zn=Object.prototype.hasOwnProperty;var Kn=function(e,t,n,r,i,o){var a=1&n,s=Xn(e),l=s.length;if(l!=Xn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Zn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Yn=Ie(J,"DataView"),Jn=Pe,er=Ie(J,"Promise"),tr=Ie(J,"Set"),nr=Ie(J,"WeakMap"),rr=de,ir=Se,or="[object Map]",ar="[object Promise]",sr="[object Set]",lr="[object WeakMap]",cr="[object DataView]",ur=ir(Yn),dr=ir(Jn),hr=ir(er),pr=ir(tr),fr=ir(nr),gr=rr;(Yn&&gr(new Yn(new ArrayBuffer(1)))!=cr||Jn&&gr(new Jn)!=or||er&&gr(er.resolve())!=ar||tr&&gr(new tr)!=sr||nr&&gr(new nr)!=lr)&&(gr=function(e){var t=rr(e),n="[object Object]"==t?e.constructor:void 0,r=n?ir(n):"";if(r)switch(r){case ur:return cr;case dr:return or;case hr:return ar;case pr:return sr;case fr:return lr}return t});var mr=$t,yr=Et,br=Lt,vr=Kn,wr=gr,Sr=Rt,xr=ln.exports,Fr=$n,$r="[object Arguments]",_r="[object Array]",Br="[object Object]",kr=Object.prototype.hasOwnProperty;var Or=function(e,t,n,r,i,o){var a=Sr(e),s=Sr(t),l=a?_r:wr(e),c=s?_r:wr(t),u=(l=l==$r?Br:l)==Br,d=(c=c==$r?Br:c)==Br,h=l==c;if(h&&xr(e)){if(!xr(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new mr),a||Fr(e)?yr(e,t,n,r,i,o):br(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&kr.call(e,"__wrapped__"),f=d&&kr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new mr),i(g,m,n,r,o)}}return!!h&&(o||(o=new mr),vr(e,t,n,r,i,o))},Dr=Yt;var Ar=function e(t,n,r,i,o){return t===n||(null==t||null==n||!Dr(t)&&!Dr(n)?t!=t&&n!=n:Or(t,n,r,i,e,o))},jr=$t,Er=Ar;var Cr=he;var Ir=function(e){return e==e&&!Cr(e)},Pr=Ir,zr=qn;var Hr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Tr=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new jr;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Er(u,c,3,r,d):h))return!1}}return!0},Nr=function(e){for(var t=zr(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Pr(i)]}return t},Lr=Hr;var Mr=function(e){var t=Nr(e);return 1==t.length&&t[0][2]?Lr(t[0][0],t[0][1]):function(n){return n===e||Tr(n,e,t)}},Rr=de,Vr=Yt;var Wr=function(e){return"symbol"==typeof e||Vr(e)&&"[object Symbol]"==Rr(e)},qr=Rt,Ur=Wr,Qr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gr=/^\w*$/;var Xr=function(e,t){if(qr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ur(e))||(Gr.test(e)||!Qr.test(e)||null!=t&&e in Object(t))},Zr=pt;function Kr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Kr.Cache||Zr),n}Kr.Cache=Zr;var Yr=Kr;var Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ei=/\\(\\)?/g,ti=function(e){var t=Yr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Jr,(function(e,n,r,i){t.push(r?i.replace(ei,"$1"):n||e)})),t}));var ni=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ri=Rt,ii=Wr,oi=ee?ee.prototype:void 0,ai=oi?oi.toString:void 0;var si=function e(t){if("string"==typeof t)return t;if(ri(t))return ni(t,e)+"";if(ii(t))return ai?ai.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},li=si;var ci=Rt,ui=Xr,di=ti,hi=function(e){return null==e?"":li(e)};var pi=function(e,t){return ci(e)?e:ui(e,t)?[e]:di(hi(e))},fi=Wr;var gi=function(e){if("string"==typeof e||fi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},mi=pi,yi=gi;var bi=function(e,t){for(var n=0,r=(t=mi(t,e)).length;null!=e&&n<r;)e=e[yi(t[n++])];return n&&n==r?e:void 0},vi=bi;var wi=function(e,t,n){var r=null==e?void 0:vi(e,t);return void 0===r?n:r};var Si=pi,xi=sn,Fi=Rt,$i=dn,_i=hn,Bi=gi;var ki=function(e,t){return null!=e&&t in Object(e)},Oi=function(e,t,n){for(var r=-1,i=(t=Si(t,e)).length,o=!1;++r<i;){var a=Bi(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&_i(i)&&$i(a,i)&&(Fi(e)||xi(e))};var Di=Ar,Ai=wi,ji=function(e,t){return null!=e&&Oi(e,t,ki)},Ei=Xr,Ci=Ir,Ii=Hr,Pi=gi;var zi=bi;var Hi=function(e){return function(t){return null==t?void 0:t[e]}},Ti=function(e){return function(t){return zi(t,e)}},Ni=Xr,Li=gi;var Mi=Mr,Ri=function(e,t){return Ei(e)&&Ci(t)?Ii(Pi(e),t):function(n){var r=Ai(n,e);return void 0===r&&r===t?ji(n,e):Di(t,r,3)}},Vi=function(e){return e},Wi=Rt,qi=function(e){return Ni(e)?Hi(Li(e)):Ti(e)};var Ui=function(e){return"function"==typeof e?e:null==e?Vi:"object"==typeof e?Wi(e)?Ri(e[0],e[1]):Mi(e):qi(e)},Qi=/\s/;var Gi=function(e){for(var t=e.length;t--&&Qi.test(e.charAt(t)););return t},Xi=/^\s+/;var Zi=function(e){return e?e.slice(0,Gi(e)+1).replace(Xi,""):e},Ki=he,Yi=Wr,Ji=/^[-+]0x[0-9a-f]+$/i,eo=/^0b[01]+$/i,to=/^0o[0-7]+$/i,no=parseInt;var ro=function(e){if("number"==typeof e)return e;if(Yi(e))return NaN;if(Ki(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ki(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zi(e);var n=eo.test(e);return n||to.test(e)?no(e.slice(2),n?2:8):Ji.test(e)?NaN:+e},io=1/0;var oo=function(e){return e?(e=ro(e))===io||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ao=O,so=Ui,lo=function(e){var t=oo(e),n=t%1;return t==t?n?t-n:t:0},co=Math.max;var uo=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:lo(n);return i<0&&(i=co(r+i,0)),ao(e,so(t),i)},ho=Ui,po=Mn,fo=qn;var go=function(e){return function(t,n,r){var i=Object(t);if(!po(t)){var o=ho(n);t=fo(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}}(uo),mo=Ar;var yo=function(e,t){return mo(e,t)},bo=Object.defineProperty,vo={};((e,t)=>{for(var n in t)bo(e,n,{get:t[n],enumerable:!0})})(vo,{assign:()=>Yo,colors:()=>Xo,createStringInterpolator:()=>qo,skipAnimation:()=>Zo,to:()=>Uo,willAdvance:()=>Ko});var wo=zo(),So=e=>Eo(e,wo),xo=zo();So.write=e=>Eo(e,xo);var Fo=zo();So.onStart=e=>Eo(e,Fo);var $o=zo();So.onFrame=e=>Eo(e,$o);var _o=zo();So.onFinish=e=>Eo(e,_o);var Bo=[];So.setTimeout=(e,t)=>{const n=So.now()+t,r=()=>{const e=Bo.findIndex((e=>e.cancel==r));~e&&Bo.splice(e,1),Ao-=~e?1:0},i={time:n,handler:e,cancel:r};return Bo.splice(ko(n),0,i),Ao+=1,Co(),i};var ko=e=>~(~Bo.findIndex((t=>t.time>e))||~Bo.length);So.cancel=e=>{Fo.delete(e),$o.delete(e),_o.delete(e),wo.delete(e),xo.delete(e)},So.sync=e=>{jo=!0,So.batchedUpdates(e),jo=!1},So.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,So.onStart(n)}return r.handler=e,r.cancel=()=>{Fo.delete(n),t=null},r};var Oo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};So.use=e=>Oo=e,So.now="undefined"!=typeof performance?()=>performance.now():Date.now,So.batchedUpdates=e=>e(),So.catch=console.error,So.frameLoop="always",So.advance=()=>{"demand"!==So.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Po()};var Do=-1,Ao=0,jo=!1;function Eo(e,t){jo?(t.delete(e),e(0)):(t.add(e),Co())}function Co(){Do<0&&(Do=0,"demand"!==So.frameLoop&&Oo(Io))}function Io(){~Do&&(Oo(Io),So.batchedUpdates(Po))}function Po(){const e=Do;Do=So.now();const t=ko(Do);t&&(Ho(Bo.splice(0,t),(e=>e.handler())),Ao-=t),Ao?(Fo.flush(),wo.flush(e?Math.min(64,Do-e):16.667),$o.flush(),xo.flush(),_o.flush()):Do=-1}function zo(){let e=new Set,t=e;return{add(n){Ao+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ao-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ao-=t.size,Ho(t,(t=>t(n)&&e.add(t))),Ao+=e.size,t=e)}}}function Ho(e,t){e.forEach((e=>{try{t(e)}catch(e){So.catch(e)}}))}function To(){}var No={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Lo(e,t){if(No.arr(e)){if(!No.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Mo=(e,t)=>e.forEach(t);function Ro(e,t,n){if(No.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Vo=e=>No.und(e)?[]:No.arr(e)?e:[e];function Wo(e,t){if(e.size){const n=Array.from(e);e.clear(),Mo(n,t)}}var qo,Uo,Qo=(e,...t)=>Wo(e,(e=>e(...t))),Go=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Xo=null,Zo=!1,Ko=To,Yo=e=>{e.to&&(Uo=e.to),e.now&&(So.now=e.now),void 0!==e.colors&&(Xo=e.colors),null!=e.skipAnimation&&(Zo=e.skipAnimation),e.createStringInterpolator&&(qo=e.createStringInterpolator),e.requestAnimationFrame&&So.use(e.requestAnimationFrame),e.batchedUpdates&&(So.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ko=e.willAdvance),e.frameLoop&&(So.frameLoop=e.frameLoop)},Jo=new Set,ea=[],ta=[],na=0,ra={get idle(){return!Jo.size&&!ea.length},start(e){na>e.priority?(Jo.add(e),So.onStart(ia)):(oa(e),So(sa))},advance:sa,sort(e){if(na)So.onFrame((()=>ra.sort(e)));else{const t=ea.indexOf(e);~t&&(ea.splice(t,1),aa(e))}},clear(){ea=[],Jo.clear()}};function ia(){Jo.forEach(oa),Jo.clear(),So(sa)}function oa(e){ea.includes(e)||aa(e)}function aa(e){ea.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(ea,(t=>t.priority>e.priority)),0,e)}function sa(e){const t=ta;for(let n=0;n<ea.length;n++){const r=ea[n];na=r.priority,r.idle||(Ko(r),r.advance(e),r.idle||t.push(r))}return na=0,(ta=ea).length=0,(ea=t).length>0}var la="[-+]?\\d*\\.?\\d+",ca=la+"%";function ua(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var da=new RegExp("rgb"+ua(la,la,la)),ha=new RegExp("rgba"+ua(la,la,la,la)),pa=new RegExp("hsl"+ua(la,ca,ca)),fa=new RegExp("hsla"+ua(la,ca,ca,la)),ga=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ma=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ya=/^#([0-9a-fA-F]{6})$/,ba=/^#([0-9a-fA-F]{8})$/;function va(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function wa(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=va(i,r,e+1/3),a=va(i,r,e),s=va(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Sa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function xa(e){return(parseFloat(e)%360+360)%360/360}function Fa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function $a(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function _a(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ya.exec(e))?parseInt(t[1]+"ff",16)>>>0:Xo&&void 0!==Xo[e]?Xo[e]:(t=da.exec(e))?(Sa(t[1])<<24|Sa(t[2])<<16|Sa(t[3])<<8|255)>>>0:(t=ha.exec(e))?(Sa(t[1])<<24|Sa(t[2])<<16|Sa(t[3])<<8|Fa(t[4]))>>>0:(t=ga.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ba.exec(e))?parseInt(t[1],16)>>>0:(t=ma.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=pa.exec(e))?(255|wa(xa(t[1]),$a(t[2]),$a(t[3])))>>>0:(t=fa.exec(e))?(wa(xa(t[1]),$a(t[2]),$a(t[3]))|Fa(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ba=(e,t,n)=>{if(No.fun(e))return e;if(No.arr(e))return Ba({range:e,output:t,extrapolate:n});if(No.str(e.output[0]))return qo(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var ka=1.70158,Oa=1.525*ka,Da=ka+1,Aa=2*Math.PI/3,ja=2*Math.PI/4.5,Ea=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ca={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Da*e*e*e-ka*e*e,easeOutBack:e=>1+Da*Math.pow(e-1,3)+ka*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Oa)/2:(Math.pow(2*e-2,2)*((Oa+1)*(2*e-2)+Oa)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Aa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Aa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ja)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ja)/2+1,easeInBounce:e=>1-Ea(1-e),easeOutBounce:Ea,easeInOutBounce:e=>e<.5?(1-Ea(1-2*e))/2:(1+Ea(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Ia=Symbol.for("FluidValue.get"),Pa=Symbol.for("FluidValue.observers"),za=e=>Boolean(e&&e[Ia]),Ha=e=>e&&e[Ia]?e[Ia]():e,Ta=e=>e[Pa]||null;function Na(e,t){const n=e[Pa];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var La=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ma(this,e)}},Ma=(e,t)=>qa(e,Ia,t);function Ra(e,t){if(e[Ia]){let n=e[Pa];n||qa(e,Pa,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Va(e,t){const n=e[Pa];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Pa]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Wa,qa=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ua=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Qa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ga=new RegExp(`(${Ua.source})(%|[a-z]+)`,"i"),Xa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Za=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ka=e=>{const[t,n]=Ya(e);if(!t||Go())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Za.test(n)?Ka(n):n||e},Ya=e=>{const t=Za.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Ja=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,es=e=>{Wa||(Wa=Xo?new RegExp(`(${Object.keys(Xo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ha(e).replace(Za,Ka).replace(Qa,_a).replace(Wa,_a))),n=t.map((e=>e.match(Ua).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ba({...e,output:t})));return e=>{const n=!Ga.test(t[0])&&t.find((e=>Ga.test(e)))?.replace(Ua,"");let i=0;return t[0].replace(Ua,(()=>`${r[i++](e)}${n||""}`)).replace(Xa,Ja)}},ts="react-spring: ",ns=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${ts}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},rs=ns(console.warn);var is=ns(console.warn);function os(e){return No.str(e)&&("#"==e[0]||/\d/.test(e)||!Go()&&Za.test(e)||e in(Xo||{}))}var as=Go()?o:a,ss=()=>{const e=l(!1);return as((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ls(){const e=s()[1],t=ss();return()=>{t.current&&e(Math.random())}}var cs=e=>o(e,us),us=[];function ds(e){const t=l();return o((()=>{t.current=e})),t.current}var hs=Symbol.for("Animated:node"),ps=e=>e&&e[hs],fs=(e,t)=>{return n=e,r=hs,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},gs=e=>e&&e[hs]&&e[hs].getPayload(),ms=class{constructor(){fs(this,this)}getPayload(){return this.payload||[]}},ys=class extends ms{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,No.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ys(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return No.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,No.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},bs=class extends ys{constructor(e){super(0),this._string=null,this._toString=Ba({output:[e,e]})}static create(e){return new bs(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(No.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ba({output:[this.getValue(),e]})),this._value=0,super.reset()}},vs={dependencies:null},ws=class extends ms{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ro(this.source,((n,r)=>{var i;(i=n)&&i[hs]===i?t[r]=n.getValue(e):za(n)?t[r]=Ha(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Mo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ro(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){vs.dependencies&&za(e)&&vs.dependencies.add(e);const t=gs(e);t&&Mo(t,(e=>this.add(e)))}},Ss=class extends ws{constructor(e){super(e)}static create(e){return new Ss(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(xs)),!0)}};function xs(e){return(os(e)?bs:ys).create(e)}function Fs(e){const t=ps(e);return t?t.constructor:No.arr(e)?Ss:os(e)?bs:ys}var $s=(e,t)=>{const n=!No.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=n&&u((e=>{s.current=function(e,t){e&&(No.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;vs.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ws(e),vs.dependencies=null,[e,n]}(i,t),p=ls(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new _s(f,h),m=l();as((()=>(m.current=g,Mo(h,(e=>Ra(e,g))),()=>{m.current&&(Mo(m.current.deps,(e=>Va(e,m.current))),So.cancel(m.current.update))}))),o(f,[]),cs((()=>()=>{const e=m.current;Mo(e.deps,(t=>Va(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,{...y,ref:c})}))},_s=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&So.write(this.update)}};var Bs=Symbol.for("AnimatedComponent"),ks=e=>No.str(e)?e:e&&No.str(e.displayName)?e.displayName:No.fun(e)&&e.name||null;function Os(e,...t){return No.fun(e)?e(...t):e}var Ds=(e,t)=>!0===e||!!(t&&e&&(No.fun(e)?e(t):Vo(e).includes(t))),As=(e,t)=>No.obj(e)?t&&e[t]:e,js=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Es=e=>e,Cs=(e,t=Es)=>{let n=Is;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);No.und(n)||(r[i]=n)}return r},Is=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ps={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function zs(e){const t=function(e){const t={};let n=0;if(Ro(e,((e,r)=>{Ps[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Ro(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Hs(e){return e=Ha(e),No.arr(e)?e.map(Hs):os(e)?vo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ts(e){return No.fun(e)||No.arr(e)&&No.obj(e[0])}var Ns={tension:170,friction:26,mass:1,damping:1,easing:Ca.linear,clamp:!1},Ls=class{constructor(){this.velocity=0,Object.assign(this,Ns)}};function Ms(e,t){if(No.und(t.decay)){const n=!No.und(t.tension)||!No.und(t.friction);!n&&No.und(t.frequency)&&No.und(t.damping)&&No.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Rs=[],Vs=class{constructor(){this.changed=!1,this.values=Rs,this.toValues=null,this.fromValues=Rs,this.config=new Ls,this.immediate=!1}};function Ws(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=Ds(n.cancel??r?.cancel,t);if(u)p();else{No.und(n.pause)||(i.paused=Ds(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||Ds(e,t)),l=Os(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-So.now()}function h(){l>0&&!vo.skipAnimation?(i.delayed=!0,c=So.setTimeout(p,l),i.pauseQueue.add(d),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var qs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Gs(e.get()):t.every((e=>e.noop))?Us(e.get()):Qs(e.get(),t.every((e=>e.finished))),Us=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Qs=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Gs=e=>({value:e,cancelled:!0,finished:!1});function Xs(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Cs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Gs(r)||i!==n.asyncId&&Qs(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Ks,a=new Ys;return(async()=>{if(vo.skipAnimation)throw Zs(n),a.result=Qs(r,!1),d(a),a;p(o);const s=No.obj(e)?{...e}:{...t,to:e};s.parentId=i,Ro(c,((e,t)=>{No.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(vo.skipAnimation)return Zs(n),Qs(r,!1);try{let t;t=No.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Qs(r.get(),!0,!1)}catch(e){if(e instanceof Ks)g=e.result;else{if(!(e instanceof Ys))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return No.fun(a)&&So.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Zs(e,t){Wo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Ks=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ys=class extends Error{constructor(){super("SkipAnimationSignal")}},Js=e=>e instanceof tl,el=1,tl=class extends La{constructor(){super(...arguments),this.id=el++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ps(this);return e&&e.getValue()}to(...e){return vo.to(this,e)}interpolate(...e){return rs(`${ts}The "interpolate" function is deprecated in v9 (use "to" instead)`),vo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Na(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ra.sort(this),Na(this,{type:"priority",parent:this,priority:e})}},nl=Symbol.for("SpringPhase"),rl=e=>(1&e[nl])>0,il=e=>(2&e[nl])>0,ol=e=>(4&e[nl])>0,al=(e,t)=>t?e[nl]|=3:e[nl]&=-3,sl=(e,t)=>t?e[nl]|=4:e[nl]&=-5,ll=class extends tl{constructor(e,t){if(super(),this.animation=new Vs,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!No.und(e)||!No.und(t)){const n=No.obj(e)?{...e}:{...t,from:e};No.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(il(this)||this._state.asyncTo)||ol(this)}get goal(){return Ha(this.animation.to)}get velocity(){const e=ps(this);return e instanceof ys?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return rl(this)}get isAnimating(){return il(this)}get isPaused(){return ol(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=gs(r.to);!a&&za(r.to)&&(i=Vo(Ha(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==bs?1:a?a[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=No.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(No.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!No.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=ps(this),l=s.getValue();if(t){const e=Ha(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return So.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(il(this)){const{to:e,config:t}=this.animation;So.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return No.und(e)?(n=this.queue||[],this.queue=[]):n=[No.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>qs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Zs(this._state,e&&this._lastCallId),So.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=No.obj(n)?n[t]:n,(null==n||Ts(n))&&(n=void 0),r=No.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return rl(this)||(e.reverse&&([n,r]=[r,n]),r=Ha(r),No.und(r)?ps(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Cs(e,((e,t)=>/^on/.test(t)?As(e,n):e))),gl(this,e,"onProps"),ml(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Ws(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{ol(this)||(sl(this,!0),Qo(o.pauseQueue),ml(this,"onPause",Qs(this,cl(this,this.animation.to)),this))},resume:()=>{ol(this)&&(sl(this,!1),il(this)&&this._resume(),Qo(o.resumeQueue),ml(this,"onResume",Qs(this,cl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=ul(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Gs(this));const r=!No.und(e.to),i=!No.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Gs(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!No.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Lo(d,c);h&&(s.from=d),d=Ha(d);const p=!Lo(u,l);p&&this._focus(u);const f=Ts(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Ms(n={...n},t),t={...n,...t}),Ms(e,t),Object.assign(e,t);for(const t in Ns)null==e[t]&&(e[t]=Ns[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;No.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(g,Os(t.config,o),t.config!==a.config?Os(a.config,o):void 0);let b=ps(this);if(!b||No.und(u))return n(Qs(this,!0));const v=No.und(t.reset)?i&&!t.default:!No.und(d)&&Ds(t.reset,o),w=v?d:this.get(),S=Hs(u),x=No.num(S)||No.arr(S)||os(S),F=!f&&(!x||Ds(a.immediate||t.immediate,o));if(p){const e=Fs(u);if(e!==b.constructor){if(!F)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(S)}}const $=b.constructor;let _=za(u),B=!1;if(!_){const e=v||!rl(this)&&h;(p||e)&&(B=Lo(Hs(w),S),_=!B),(Lo(s.immediate,F)||F)&&Lo(g.decay,m)&&Lo(g.velocity,y)||(_=!0)}if(B&&il(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!f&&((_||za(l))&&(s.values=b.getPayload(),s.toValues=za(u)?null:$==bs?[1]:Vo(S)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),_)){const{onRest:e}=s;Mo(fl,(e=>gl(this,t,e)));const r=Qs(this,cl(this,l));Qo(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&So.batchedUpdates((()=>{s.changed=!v,e?.(r,this),v?Os(a.onRest,r):s.onStart?.(r,this)}))}v&&this._set(w),f?n(Xs(t.to,t,this._state,this)):_?this._start():il(this)&&!p?this._pendingCalls.add(n):n(Us(w))}_focus(e){const t=this.animation;e!==t.to&&(Ta(this)&&this._detach(),t.to=e,Ta(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;za(t)&&(Ra(t,this),Js(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;za(e)&&Va(e,this)}_set(e,t=!0){const n=Ha(e);if(!No.und(n)){const e=ps(this);if(!e||!Lo(n,e.getValue())){const r=Fs(n);e&&e.constructor==r?e.setValue(n):fs(this,r.create(n)),e&&So.batchedUpdates((()=>{this._onChange(n,t)}))}}return ps(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ml(this,"onStart",Qs(this,cl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Os(this.animation.onChange,e,this)),Os(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ps(this).reset(Ha(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),il(this)||(al(this,!0),ol(this)||this._resume())}_resume(){vo.skipAnimation?this.finish():ra.start(this)}_stop(e,t){if(il(this)){al(this,!1);const n=this.animation;Mo(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Na(this,{type:"idle",parent:this});const r=t?Gs(this.get()):Qs(this.get(),cl(this,e??n.to));Qo(this._pendingCalls,r),n.changed&&(n.changed=!1,ml(this,"onRest",r,this))}}};function cl(e,t){const n=Hs(t);return Lo(Hs(e.get()),n)}function ul(e,t=e.loop,n=e.to){const r=Os(t);if(r){const i=!0!==r&&zs(r),o=(i||e).reverse,a=!i||i.reset;return dl({...e,loop:t,default:!1,pause:void 0,to:!o||Ts(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function dl(e){const{to:t,from:n}=e=zs(e),r=new Set;return No.obj(t)&&pl(t,r),No.obj(n)&&pl(n,r),e.keys=r.size?Array.from(r):null,e}function hl(e){const t=dl(e);return No.und(t.default)&&(t.default=Cs(t)),t}function pl(e,t){Ro(e,((e,n)=>null!=e&&t.add(n)))}var fl=["onStart","onRest","onChange","onPause","onResume"];function gl(e,t,n){e.animation[n]=t[n]!==js(t,n)?As(t[n],e.key):void 0}function ml(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var yl=["onStart","onChange","onRest"],bl=1,vl=class{constructor(e,t){this.id=bl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];No.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(dl(e)),this}start(e){let{queue:t}=this;return e?t=Vo(e).map(dl):this.queue=[],this._flush?this._flush(this,t):(Bl(this,t),wl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Mo(Vo(t),(t=>n[t].stop(!!e)))}else Zs(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(No.und(e))this.start({pause:!0});else{const t=this.springs;Mo(Vo(e),(e=>t[e].pause()))}return this}resume(e){if(No.und(e))this.start({pause:!1});else{const t=this.springs;Mo(Vo(e),(e=>t[e].resume()))}return this}each(e){Ro(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Wo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Wo(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Wo(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}So.onFrame(this._onFrame)}};function wl(e,t){return Promise.all(t.map((t=>Sl(e,t)))).then((t=>qs(e,t)))}async function Sl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=No.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=No.arr(i)||No.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Mo(yl,(n=>{const r=t[n];if(No.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Qo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===js(t,"cancel");(u||p&&d.asyncId)&&h.push(Ws(++e._lastAsyncId,{props:t,state:d,actions:{pause:To,resume:To,start(t,n){p?(Zs(d,e._lastAsyncId),n(Gs(e))):(t.onRest=s,n(Xs(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=qs(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=ul(t,a,i);if(n)return Bl(e,[n]),Sl(e,n,!0)}return l&&So.batchedUpdates((()=>l(f,e,e.item))),f}function xl(e,t){const n={...e.springs};return t&&Mo(Vo(t),(e=>{No.und(e.keys)&&(e=dl(e)),No.obj(e.to)||(e={...e,to:void 0}),_l(n,e,(e=>$l(e)))})),Fl(e,n),n}function Fl(e,t){Ro(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ra(t,e))}))}function $l(e,t){const n=new ll;return n.key=e,t&&Ra(n,t),n}function _l(e,t,n){t.keys&&Mo(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Bl(e,t){Mo(t,(t=>{_l(e.springs,t,(t=>$l(t,e)))}))}var kl,Ol,Dl=({children:e,...t})=>{const n=d(Al),i=t.pause||!!n.pause,a=t.immediate||!!n.immediate;t=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=l(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:a})),[i,a]);const{Provider:c}=Al;return r.createElement(c,{value:t},e)},Al=(kl=Dl,Ol={},Object.assign(kl,r.createContext(Ol)),kl.Provider._context=kl,kl.Consumer._context=kl,kl);Dl.Provider=Al.Provider,Dl.Consumer=Al.Consumer;var jl=()=>{const e=[],t=function(t){is(`${ts}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Mo(e,((e,i)=>{if(No.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Mo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Mo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Mo(e,((e,n)=>{const r=No.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Mo(e,((e,r)=>{if(No.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Mo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Mo(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return No.fun(e)?e(n,t):e};return t._getProps=n,t};function El(e,t){const n=No.fun(e),[[r],i]=function(e,t,n){const r=No.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?jl():void 0),[]),o=l(0),a=ls(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=xl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?wl(e,t):new Promise((r=>{Fl(e,n),s.queue.push((()=>{r(wl(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=ds(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new vl(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=hl(n))}}h((()=>{Mo(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>xl(e,u[t]))),m=d(Dl),y=ds(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);as((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],Mo(e,(e=>e()))),Mo(c.current,((e,t)=>{i?.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),cs((()=>()=>{Mo(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var Cl=class extends tl{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ba(...t);const n=this._get(),r=Fs(n);fs(this,r.create(n))}advance(e){const t=this._get();Lo(t,this.get())||(ps(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Pl(this._active)&&zl(this)}_get(){const e=No.arr(this.source)?this.source.map(Ha):Vo(Ha(this.source));return this.calc(...e)}_start(){this.idle&&!Pl(this._active)&&(this.idle=!1,Mo(gs(this),(e=>{e.done=!1})),vo.skipAnimation?(So.batchedUpdates((()=>this.advance())),zl(this)):ra.start(this))}_attach(){let e=1;Mo(Vo(this.source),(t=>{za(t)&&Ra(t,this),Js(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Mo(Vo(this.source),(e=>{za(e)&&Va(e,this)})),this._active.clear(),zl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Vo(this.source).reduce(((e,t)=>Math.max(e,(Js(t)?t.priority:0)+1)),0))}};function Il(e){return!1!==e.idle}function Pl(e){return!e.size||Array.from(e).every(Il)}function zl(e){e.idle||(e.idle=!0,Mo(gs(e),(e=>{e.done=!0})),Na(e,{type:"idle",parent:e}))}vo.assign({createStringInterpolator:es,to:(e,t)=>new Cl(e,t)});var Hl=/^--/;function Tl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Hl.test(e)||Ll.hasOwnProperty(e)&&Ll[e]?(""+t).trim():t+"px"}var Nl={};var Ll={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ml=["Webkit","Ms","Moz","O"];Ll=Object.keys(Ll).reduce(((e,t)=>(Ml.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ll);var Rl=/^(matrix|translate|scale|rotate|skew)/,Vl=/^(translate)/,Wl=/^(rotate|skew)/,ql=(e,t)=>No.num(e)&&0!==e?e+t:e,Ul=(e,t)=>No.arr(e)?e.every((e=>Ul(e,t))):No.num(e)?e===t:parseFloat(e)===t,Ql=class extends ws{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>ql(e,"px"))).join(",")})`,Ul(e,0)]))),Ro(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Rl.test(t)){if(delete r[t],No.und(e))return;const n=Vl.test(t)?"px":Wl.test(t)?"deg":"";i.push(Vo(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${ql(i,n)})`,Ul(i,0)]:e=>[`${t}(${e.map((e=>ql(e,n))).join(",")})`,Ul(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Gl(i,o)),super(r)}},Gl=class extends La{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Mo(this.inputs,((n,r)=>{const i=Ha(n[0]),[o,a]=this.transforms[r](No.arr(i)?i:n.map(Ha));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Mo(this.inputs,(e=>Mo(e,(e=>za(e)&&Ra(e,this)))))}observerRemoved(e){0==e&&Mo(this.inputs,(e=>Mo(e,(e=>za(e)&&Va(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Na(this,e)}};vo.assign({batchedUpdates:p,createStringInterpolator:es,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Xl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ws(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ks(e)||"Anonymous";return(e=No.str(e)?o[e]||(o[e]=$s(e,i)):e[Bs]||(e[Bs]=$s(e,i))).displayName=`Animated(${t})`,e};return Ro(e,((t,n)=>{No.arr(e)&&(n=ks(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Nl[t]||(Nl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=Tl(t,r[t]);Hl.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Ql(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Zl=Xl.animated;const Kl=(e,t,n)=>t?wi(n,t)||wi(e,t):n||e,Yl=(e,t)=>{const n=t||e.defaultValue;return wi(e.collections,n)};var Jl;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Jl||(Jl={}));const ec={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},tc=e=>t=>{const n=t.theme,r=Yl(ec,n[Jl.colorScheme]);return n.options&&n.options.color?Kl(r,e,n.options.color):Kl(r,e)},nc={Brand:{1:tc("Brand.1"),2:tc("Brand.2"),3:tc("Brand.3"),4:tc("Brand.4"),5:tc("Brand.5"),6:tc("Brand.6")},Primary:tc("Primary"),PrimaryDark:tc("PrimaryDark"),Secondary:tc("Secondary"),Accent:{Light:{1:tc("Accent.Light.1"),2:tc("Accent.Light.2"),3:tc("Accent.Light.3"),4:tc("Accent.Light.4"),5:tc("Accent.Light.5"),6:tc("Accent.Light.6")},Dark:{1:tc("Accent.Dark.1"),2:tc("Accent.Dark.2"),3:tc("Accent.Dark.3")}},Neutral:{1:tc("Neutral.1"),2:tc("Neutral.2"),3:tc("Neutral.3"),4:tc("Neutral.4"),5:tc("Neutral.5"),6:tc("Neutral.6"),7:tc("Neutral.7"),8:tc("Neutral.8")},Validation:{Green:{Text:tc("Validation.Green.Text"),Icon:tc("Validation.Green.Icon"),Border:tc("Validation.Green.Border"),Background:tc("Validation.Green.Background")},Orange:{Text:tc("Validation.Orange.Text"),Icon:tc("Validation.Orange.Icon"),Border:tc("Validation.Orange.Border"),Background:tc("Validation.Orange.Background"),Badge:tc("Validation.Orange.Badge")},Red:{Text:tc("Validation.Red.Text"),Icon:tc("Validation.Red.Icon"),Border:tc("Validation.Red.Border"),Background:tc("Validation.Red.Background")},Blue:{Text:tc("Validation.Blue.Text"),Icon:tc("Validation.Blue.Icon"),Border:tc("Validation.Blue.Border"),Background:tc("Validation.Blue.Background")}},Shadow:{Accent:tc("Shadow.Accent"),Red:tc("Shadow.Red"),Elevation:tc("Shadow.Elevation")}},rc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ic=e=>Object.keys(rc).reduce(((t,n)=>{const r=rc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),oc=ic("max-width"),ac=(ic("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),sc=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,lc=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||nc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${sc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cc=f(lc)`
    animation-delay: -0.45s;
`,uc=f(lc)`
    animation-delay: -0.3s;
`,dc=f(lc)`
    animation-delay: -0.15s;
`,hc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},pc={collections:{base:{D1:{fontFamily:hc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:hc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:hc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:hc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:hc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:hc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:hc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:hc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:hc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:hc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:hc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:hc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:hc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:hc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},fc=e=>t=>{const n=t.theme,r=Yl(pc,n[Jl.textStyleScheme]);return n.options&&n.options.textStyle?Kl(r,e,n.options.textStyle):Kl(r,e)},gc={D1:{fontFamily:fc("D1.fontFamily"),fontSize:fc("D1.fontSize"),fontWeight:fc("D1.fontWeight"),lineHeight:fc("D1.lineHeight"),letterSpacing:fc("D1.letterSpacing")},D2:{fontFamily:fc("D2.fontFamily"),fontSize:fc("D2.fontSize"),fontWeight:fc("D2.fontWeight"),lineHeight:fc("D2.lineHeight"),letterSpacing:fc("D2.letterSpacing")},D3:{fontFamily:fc("D3.fontFamily"),fontSize:fc("D3.fontSize"),fontWeight:fc("D3.fontWeight"),lineHeight:fc("D3.lineHeight"),letterSpacing:fc("D3.letterSpacing")},D4:{fontFamily:fc("D4.fontFamily"),fontSize:fc("D4.fontSize"),fontWeight:fc("D4.fontWeight"),lineHeight:fc("D4.lineHeight"),letterSpacing:fc("D4.letterSpacing")},DBody:{fontFamily:fc("DBody.fontFamily"),fontSize:fc("DBody.fontSize"),fontWeight:fc("DBody.fontWeight"),lineHeight:fc("DBody.lineHeight"),letterSpacing:fc("DBody.letterSpacing")},H1:{fontFamily:fc("H1.fontFamily"),fontSize:fc("H1.fontSize"),fontWeight:fc("H1.fontWeight"),lineHeight:fc("H1.lineHeight"),letterSpacing:fc("H1.letterSpacing")},H2:{fontFamily:fc("H2.fontFamily"),fontSize:fc("H2.fontSize"),fontWeight:fc("H2.fontWeight"),lineHeight:fc("H2.lineHeight"),letterSpacing:fc("H2.letterSpacing")},H3:{fontFamily:fc("H3.fontFamily"),fontSize:fc("H3.fontSize"),fontWeight:fc("H3.fontWeight"),lineHeight:fc("H3.lineHeight"),letterSpacing:fc("H3.letterSpacing")},H4:{fontFamily:fc("H4.fontFamily"),fontSize:fc("H4.fontSize"),fontWeight:fc("H4.fontWeight"),lineHeight:fc("H4.lineHeight"),letterSpacing:fc("H4.letterSpacing")},H5:{fontFamily:fc("H5.fontFamily"),fontSize:fc("H5.fontSize"),fontWeight:fc("H5.fontWeight"),lineHeight:fc("H5.lineHeight"),letterSpacing:fc("H5.letterSpacing")},H6:{fontFamily:fc("H6.fontFamily"),fontSize:fc("H6.fontSize"),fontWeight:fc("H6.fontWeight"),lineHeight:fc("H6.lineHeight"),letterSpacing:fc("H6.letterSpacing")},Body:{fontFamily:fc("Body.fontFamily"),fontSize:fc("Body.fontSize"),fontWeight:fc("Body.fontWeight"),lineHeight:fc("Body.lineHeight"),letterSpacing:fc("Body.letterSpacing")},BodySmall:{fontFamily:fc("BodySmall.fontFamily"),fontSize:fc("BodySmall.fontSize"),fontWeight:fc("BodySmall.fontWeight"),lineHeight:fc("BodySmall.lineHeight"),letterSpacing:fc("BodySmall.letterSpacing")},XSmall:{fontFamily:fc("XSmall.fontFamily"),fontSize:fc("XSmall.fontSize"),fontWeight:fc("XSmall.fontWeight"),lineHeight:fc("XSmall.lineHeight"),letterSpacing:fc("XSmall.letterSpacing")}},mc=e=>{switch(e){case 700:case"bold":return hc.Bold;case 600:case"semibold":return hc.Semibold;case 300:case"light":return hc.Light;case 400:case"regular":return hc.Regular;default:return""}},yc=(e,t)=>n=>{var r;const i=gc[e].fontFamily(n),o=gc[e].fontWeight(n);return Object.values(hc).includes(i)?m`
                font-family: ${mc(t)||mc(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=bc(t)||o)&&void 0!==r?r:"normal"};
        `},bc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},vc=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},wc=(e,t,n=!1)=>r=>{const i=gc[e],o=i.fontSize(r);return m`
            ${yc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Sc=(e=!1,t=!1,n=void 0)=>t?m`
            display: block;
            ${vc(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${vc(n)}
        `;var xc;!function(e){e.D1=f.h1`
        ${e=>m`
                ${wc("D1",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${wc("D2",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${wc("D3",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${wc("D4",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${wc("DBody",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${wc("H1",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${wc("H2",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${wc("H3",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${wc("H4",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${wc("H5",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${wc("H6",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${wc("Body",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${wc("BodySmall",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${wc("XSmall",e.weight,e.paragraph)}
                color: ${nc.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>_c(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>_c(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(xc||(xc={}));const Fc=f.a`
    ${e=>m`
            ${wc(e.textStyle,e.weight)}
            color: ${nc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${nc.Secondary};

                svg {
                    color: ${nc.Secondary};
                }
            }
        `}
`,$c=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,_c=n=>{var{external:r=!1,children:i}=n,o=B(n,["external","children"]);return e(Fc,Object.assign({},o,{children:[i,r&&t($c,{})]}))};var Bc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Bc||(Bc={}));const kc={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${nc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${nc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${nc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${nc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${nc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${nc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Oc=e=>t=>{var n;const r=t.theme,i=Yl(kc,r[Jl.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Kl(i,e,r.options.designToken):Kl(i,e)},Dc={InputBoxShadow:Oc("InputBoxShadow"),InputErrorBoxShadow:Oc("InputErrorBoxShadow"),ElevationBoxShadow:Oc("ElevationBoxShadow"),Table:{Header:Oc("Table.Header"),Cell:{Primary:Oc("Table.Cell.Primary"),Secondary:Oc("Table.Cell.Secondary"),Selected:Oc("Table.Cell.Selected"),Hover:Oc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Oc("Button.Danger.BackgroundColor"),Hover:Oc("Button.Danger.Hover"),Primary:Oc("Button.Danger.Primary"),Border:Oc("Button.Danger.Border")}}};f.button`
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
                    background-color: ${nc.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Dc.Button.Danger.Border:nc.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Dc.Button.Danger.Primary:nc.Primary};
                    }
                `;case"light":return m`
                    background-color: ${nc.Neutral[8]};
                    border: 1px solid ${nc.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Dc.Button.Danger.Primary:nc.Primary};
                    }
                `;case"disabled":return m`
                    background-color: ${nc.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${nc.Neutral[3]};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Dc.Button.Danger.Primary:nc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Dc.Button.Danger.Hover:nc.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Dc.Button.Danger.BackgroundColor:nc.Primary};
                    border: 1px solid transparent;

                    ${oc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${nc.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${wc("H5","semibold")}
                    }

                    ${oc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${wc("H4","semibold")}
                    }

                    ${oc.mobileS} {
                        height: auto;
                    }
                `}
`;const Ac=f((({color:n,className:r,size:i=18})=>e(ac,Object.assign({className:r,$size:i,$color:n},{children:[t(lc,{id:"inner1",$size:i-2,$borderWidth:2}),t(cc,{id:"inner2",$size:i-2,$borderWidth:2}),t(uc,{id:"inner3",$size:i-2,$borderWidth:2}),t(dc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Dc.Button.Danger.Primary:nc.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=nc.Neutral[3](e);break;default:t=nc.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var jc;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(jc||(jc={}));const Ec=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Cc=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return m`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Ec};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?nc.Neutral[4](e):e.$unchecked?nc.Accent.Light[2](e):nc.Primary(e)};
    }
`,Ic=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Pc=f(Zl.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,zc=f.ul`
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
        background: ${nc.Neutral[4]};
        border-right: 5px solid ${nc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${oc.mobileL} {
        max-height: 15rem;
    }
`,Hc=f.li`
    :hover,
    :focus,
    :active {
        background: ${nc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${nc.Accent.Light[5]};
            `}}
`,Tc=f.button`
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
        outline-color: ${nc.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Nc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Lc=f.div`
    ${wc("Body","regular")}
    color: ${nc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nc}
`,Mc=f.div`
    color: ${nc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${wc("BodySmall","semibold")}
                `:m`
                    ${wc("Body","regular")}
                `}
`,Rc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Lc} {
                        display: inline;
                    }

                    ${Mc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Vc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Wc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,qc=f((n=>{var{className:r,checked:i,disabled:a,indeterminate:s,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=B(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=l();o((()=>{p.current.indeterminate=s}),[s]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Cc,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,$displaySize:d,$disabled:a,$unchecked:!(s||i||a)},{children:[t(Ic,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:a},h)),s?t(v,{"data-testid":"indeterminate"}):i?t(w,{"data-testid":"checkmark"}):a?t(S,{"data-testid":"disabled-empty-checkbox"}):t(x,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Uc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Qc=f.button`
    ${wc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${nc.Primary(e)};\n\t\t`}
`,Gc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Xc=f(xc.Body)``,Zc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${nc.Validation.Red.Icon};
`,Kc=f.button`
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
                background-color: ${nc.Neutral[7]};
            `}
    }
`,Yc=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(Kc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))}));f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${nc.Neutral[5]};
    border-radius: 4px;
    background: ${nc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${nc.Accent.Light[1]};
        box-shadow: ${Dc.InputBoxShadow};
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
                background: ${nc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${nc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${nc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${nc.Validation.Red.Border};
                    box-shadow: ${Dc.InputErrorBoxShadow};
                }
            `:void 0}
`;const Jc=f.input`
    ${wc("Body","regular")}
    color: ${nc.Neutral[1]};
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
        color: ${nc.Neutral[3]};
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
`,eu=f.li`
    background: ${nc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,tu=f(Jc)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,nu=f($)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${nc.Neutral[3]};
`,ru=f(Yc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${nc.Neutral[3]};
    cursor: pointer;
`,iu=f(F)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${nc.Neutral[3]};
`,ou=c(((n,r)=>{const{onClear:i}=n,o=B(n,["onClear"]);return e(eu,{children:[t(nu,{}),t(tu,Object.assign({ref:r},o)),o.value&&t(ru,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(iu,{})}))]},"search")})),au=r=>{var{listItems:i,listExtractor:a,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:S,onRetry:x,itemsLoadState:F="success",itemTruncationType:$="end",itemMaxLines:_=2,labelDisplayType:k="inline",renderListItem:O,onBlur:D,hideNoResultsDisplay:A,renderCustomCallToAction:j}=r,E=B(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,I]=s(0),[P,z]=s(""),[H,T]=s(i),[N,L]=s(0),M=El({height:N}),R=l(),V=l(),W=l([]),q=l(),U=l(),Q=l(C),G=l(H),X=e=>{Q.current=e,I(e)},Z=e=>{G.current=e,T(e)};o((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),o((()=>{ee(P)}),[P]),o((()=>{if(z(""),h){if(setTimeout((()=>{L(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else L(0)}),[h]),o((()=>{if(h){const e=te();L(e)}}),[H,F]),o((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>a?a(e):e.toString(),Y=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return jc.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},J=e=>!!go(w,(t=>yo(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{x&&x()},se=()=>{D&&D()},le=r=>e(n,{children:[t(Vc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:r})),t(Wc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=K(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":k;return e(Rc,Object.assign({$labelDisplayType:l},{children:[t(Lc,Object.assign({$truncateType:$,$maxLines:_,"aria-label":i},{children:"middle"===$&&a?le(i):i})),o&&t(Mc,Object.assign({$truncateType:$,$maxLines:_,$labelDisplayType:k,"aria-label":o},{children:"middle"===$&&s?le(o):o}))]}))},ue=()=>{if(!x||x&&"success"===F)return H.map(((n,r)=>t(Hc,Object.assign({$checked:J(n)&&!v},{children:e(Tc,Object.assign({$hasNextLineLabel:"next-line"===k&&H.length>0&&a&&"string"!=typeof a(H[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(qc,{checked:J(n),displaySize:"small"}),O?O(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(n,r))))},de=()=>{if(v&&H.length>0&&!P&&"success"===F)return t(Uc,{children:t(Qc,Object.assign({onClick:S,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!A&&(P||!p)&&0===H.length&&"success"===F)return e(Gc,Object.assign({"data-testid":"list-no-results"},{children:[t(Zc,{"data-testid":"no-result-icon"}),t(Xc,{children:"No results found."})]}),"noResults")},pe=()=>{if(x&&"loading"===F)return e(Gc,Object.assign({"data-testid":"list-loading"},{children:[t(Ac,{$buttonStyle:"secondary",size:24}),t(Xc,{children:"Loading..."})]}),"loading")},fe=()=>{if(x&&"fail"===F)return e(Gc,Object.assign({"data-testid":"list-fail"},{children:[t(Zc,{"data-testid":"load-error-icon"}),t(Xc,{children:"Failed to load."}),t(Qc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(Pc,Object.assign({style:M,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(zc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},E,{children:[(p||m)&&"success"===F?t(ou,{ref:q,onChange:ie,value:P,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&j)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:j(y,H)}))})()]}))})},su="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",lu=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,cu=m`
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
        outline: 2px solid ${nc.Accent.Light[3]};
    }
`,uu=f.button`
    ${cu}
    cursor: pointer;
`;f.div`
    ${cu}
`;const du=g`
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
`,hu=f.div`
    position: relative;
    border: 1px solid ${nc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${nc.Neutral[8]};

    :focus-within {
        border: 1px solid ${nc.Accent.Light[1]};
        box-shadow: ${Dc.InputBoxShadow};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${du} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${nc.Neutral[6](e)};

                ${uu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${nc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${uu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${nc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${nc.Validation.Red.Border(e)};
                    box-shadow: ${Dc.InputErrorBoxShadow};
                }
            `:void 0}
`,pu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${su};
    margin-left: 1rem;
`,fu=f(_)`
    color: ${nc.Neutral[3]};
    height: ${gc.Body.fontSize}rem;
    width: ${gc.Body.fontSize}rem;
`,gu=f.div`
    height: 1px;
    background: ${nc.Neutral[5]};
    margin: 0 0.5rem;
`,mu=f.div`
    display: flex;
    flex: 1;
`,yu=f(xc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,bu=f(yu)`
    color: ${nc.Neutral[3]};
`,vu=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:c,className:u})=>{const d=l();return((e,t,n="window",r)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;n&&s()}}),"document"),t(lu,Object.assign({className:u},{children:t(hu,Object.assign({ref:d,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a},{children:e}))}))},wu=r=>{var{selectedOptions:i,placeholder:a="Select",options:c,className:u,disabled:d,error:h,"data-testid":p,enableSearch:f=!1,searchFunction:g,searchPlaceholder:m,valueExtractor:y,listExtractor:b,onSelectOptions:v,listStyleWidth:w,onShowOptions:S,onHideOptions:x,onRetry:F,onBlur:$,optionsLoadState:_="success",optionTruncationType:k="end"}=r,O=B(r,["selectedOptions","placeholder","options","className","disabled","error","data-testid","enableSearch","searchFunction","searchPlaceholder","valueExtractor","listExtractor","onSelectOptions","listStyleWidth","onShowOptions","onHideOptions","onRetry","onBlur","optionsLoadState","optionTruncationType"]);const[D,A]=s(i||[]),[j,E]=s(!1),C=l();o((()=>{A(i||[])}),[i]);const I=(e,t)=>{const n=[...D],r=uo(D,(e=>(y?y(e):e)===t));r>-1?n.splice(r,1):n.push(e),A(n),H(!1),C&&C.current.focus(),T(n)},P=()=>{j&&(E(!1),H(!1)),C&&C.current.focus()},z=()=>{D&&D.length>0?(A([]),T([])):(A(c),T(c))},H=e=>{!e&&x&&x(),e&&S&&S()},T=e=>{v&&v(e)};return e(vu,Object.assign({show:j,error:h&&!j,disabled:d,testId:p,className:u,onBlur:()=>{null==$||$(),E(!1),H(!1)}},{children:[t(uu,Object.assign({ref:C,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),d||(E(!j),H(!j),j&&(null==$||$()))},onBlur:()=>{j||null==$||$()}},O,{children:e(n,{children:[t(mu,{children:D&&0!==D.length?t(yu,{children:D&&0!=D.length?c&&D.length===c.length?"All selected":`${D.length} selected`:a}):t(bu,Object.assign({truncateType:k},{children:a}))}),t(pu,Object.assign({expanded:j},{children:t(fu,{})}))]})})),j&&t(gu,{}),c&&c.length>0||F?t(au,{listItems:c,onSelectItem:I,onDismiss:P,valueExtractor:y,listExtractor:b,listStyleWidth:w,visible:j,enableSearch:f,searchFunction:g,searchPlaceholder:m,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:D,onSelectAll:z,onRetry:F,itemsLoadState:_,itemTruncationType:k}):null]}))};export{wu as InputMultiSelect};
//# sourceMappingURL=index.js.map
