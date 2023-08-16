import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as v}from"@lifesg/react-icons/tick";import{CrossIcon as w}from"@lifesg/react-icons/cross";import{MagnifierIcon as S}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";function x(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var F=function(){this.__data__=[],this.size=0};var k=function(e,t){return e===t||e!=e&&t!=t},O=k;var B=function(e,t){for(var n=e.length;n--;)if(O(e[n][0],t))return n;return-1},j=B,A=Array.prototype.splice;var E=B;var D=B;var C=B;var P=F,I=function(e){var t=this.__data__,n=j(t,e);return!(n<0)&&(n==t.length-1?t.pop():A.call(t,n,1),--this.size,!0)},z=function(e){var t=this.__data__,n=E(t,e);return n<0?void 0:t[n][1]},T=function(e){return D(this.__data__,e)>-1},H=function(e,t){var n=this.__data__,r=C(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function N(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}N.prototype.clear=P,N.prototype.delete=I,N.prototype.get=z,N.prototype.has=T,N.prototype.set=H;var M=N,R=M;var V=function(){this.__data__=new R,this.size=0};var L=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var W=function(e){return this.__data__.get(e)};var q=function(e){return this.__data__.has(e)},U="object"==typeof $&&$&&$.Object===Object&&$,Q=U,G="object"==typeof self&&self&&self.Object===Object&&self,X=Q||G||Function("return this")(),Z=X.Symbol,K=Z,Y=Object.prototype,J=Y.hasOwnProperty,ee=Y.toString,te=K?K.toStringTag:void 0;var ne=function(e){var t=J.call(e,te),n=e[te];try{e[te]=void 0;var r=!0}catch(e){}var i=ee.call(e);return r&&(t?e[te]=n:delete e[te]),i},re=Object.prototype.toString;var ie=ne,oe=function(e){return re.call(e)},ae=Z?Z.toStringTag:void 0;var se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ae&&ae in Object(e)?ie(e):oe(e)};var le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ce=se,ue=le;var de,he=function(e){if(!ue(e))return!1;var t=ce(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},pe=X["__core-js_shared__"],fe=(de=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var ge=function(e){return!!fe&&fe in e},me=Function.prototype.toString;var ye=function(e){if(null!=e){try{return me.call(e)}catch(e){}try{return e+""}catch(e){}}return""},be=he,ve=ge,we=le,Se=ye,_e=/^\[object .+?Constructor\]$/,xe=Function.prototype,$e=Object.prototype,Fe=xe.toString,ke=$e.hasOwnProperty,Oe=RegExp("^"+Fe.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Be=function(e){return!(!we(e)||ve(e))&&(be(e)?Oe:_e).test(Se(e))},je=function(e,t){return null==e?void 0:e[t]};var Ae=function(e,t){var n=je(e,t);return Be(n)?n:void 0},Ee=Ae(X,"Map"),De=Ae(Object,"create"),Ce=De;var Pe=function(){this.__data__=Ce?Ce(null):{},this.size=0};var Ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ze=De,Te=Object.prototype.hasOwnProperty;var He=function(e){var t=this.__data__;if(ze){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Te.call(t,e)?t[e]:void 0},Ne=De,Me=Object.prototype.hasOwnProperty;var Re=De;var Ve=Pe,Le=Ie,We=He,qe=function(e){var t=this.__data__;return Ne?void 0!==t[e]:Me.call(t,e)},Ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Re&&void 0===t?"__lodash_hash_undefined__":t,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Ve,Qe.prototype.delete=Le,Qe.prototype.get=We,Qe.prototype.has=qe,Qe.prototype.set=Ue;var Ge=Qe,Xe=M,Ze=Ee;var Ke=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ye=function(e,t){var n=e.__data__;return Ke(t)?n["string"==typeof t?"string":"hash"]:n.map},Je=Ye;var et=Ye;var tt=Ye;var nt=Ye;var rt=function(){this.size=0,this.__data__={hash:new Ge,map:new(Ze||Xe),string:new Ge}},it=function(e){var t=Je(this,e).delete(e);return this.size-=t?1:0,t},ot=function(e){return et(this,e).get(e)},at=function(e){return tt(this,e).has(e)},st=function(e,t){var n=nt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function lt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}lt.prototype.clear=rt,lt.prototype.delete=it,lt.prototype.get=ot,lt.prototype.has=at,lt.prototype.set=st;var ct=lt,ut=M,dt=Ee,ht=ct;var pt=M,ft=V,gt=L,mt=W,yt=q,bt=function(e,t){var n=this.__data__;if(n instanceof ut){var r=n.__data__;if(!dt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ht(r)}return n.set(e,t),this.size=n.size,this};function vt(e){var t=this.__data__=new pt(e);this.size=t.size}vt.prototype.clear=ft,vt.prototype.delete=gt,vt.prototype.get=mt,vt.prototype.has=yt,vt.prototype.set=bt;var wt=vt;var St=ct,_t=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},xt=function(e){return this.__data__.has(e)};function $t(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new St;++t<n;)this.add(e[t])}$t.prototype.add=$t.prototype.push=_t,$t.prototype.has=xt;var Ft=$t,kt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Ot=function(e,t){return e.has(t)};var Bt=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new Ft:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!kt(t,(function(e,t){if(!Ot(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var jt=X.Uint8Array,At=k,Et=Bt,Dt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Ct=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Pt=Z?Z.prototype:void 0,It=Pt?Pt.valueOf:void 0;var zt=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new jt(e),new jt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return At(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Dt;case"[object Set]":var l=1&r;if(s||(s=Ct),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Et(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(It)return It.call(e)==It.call(t)}return!1};var Tt=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Ht=Array.isArray,Nt=Tt,Mt=Ht;var Rt=function(e,t,n){var r=t(e);return Mt(e)?r:Nt(r,n(e))};var Vt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Lt=function(){return[]},Wt=Object.prototype.propertyIsEnumerable,qt=Object.getOwnPropertySymbols,Ut=qt?function(e){return null==e?[]:(e=Object(e),Vt(qt(e),(function(t){return Wt.call(e,t)})))}:Lt;var Qt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Gt=function(e){return null!=e&&"object"==typeof e},Xt=se,Zt=Gt;var Kt=function(e){return Zt(e)&&"[object Arguments]"==Xt(e)},Yt=Gt,Jt=Object.prototype,en=Jt.hasOwnProperty,tn=Jt.propertyIsEnumerable,nn=Kt(function(){return arguments}())?Kt:function(e){return Yt(e)&&en.call(e,"callee")&&!tn.call(e,"callee")},rn={exports:{}};var on=function(){return!1};!function(e,t){var n=X,r=on,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(rn,rn.exports);var an=/^(?:0|[1-9]\d*)$/;var sn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&an.test(e))&&e>-1&&e%1==0&&e<t};var ln=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},cn=se,un=ln,dn=Gt,hn={};hn["[object Float32Array]"]=hn["[object Float64Array]"]=hn["[object Int8Array]"]=hn["[object Int16Array]"]=hn["[object Int32Array]"]=hn["[object Uint8Array]"]=hn["[object Uint8ClampedArray]"]=hn["[object Uint16Array]"]=hn["[object Uint32Array]"]=!0,hn["[object Arguments]"]=hn["[object Array]"]=hn["[object ArrayBuffer]"]=hn["[object Boolean]"]=hn["[object DataView]"]=hn["[object Date]"]=hn["[object Error]"]=hn["[object Function]"]=hn["[object Map]"]=hn["[object Number]"]=hn["[object Object]"]=hn["[object RegExp]"]=hn["[object Set]"]=hn["[object String]"]=hn["[object WeakMap]"]=!1;var pn=function(e){return dn(e)&&un(e.length)&&!!hn[cn(e)]};var fn=function(e){return function(t){return e(t)}},gn={exports:{}};!function(e,t){var n=U,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(gn,gn.exports);var mn=pn,yn=fn,bn=gn.exports,vn=bn&&bn.isTypedArray,wn=vn?yn(vn):mn,Sn=Qt,_n=nn,xn=Ht,$n=rn.exports,Fn=sn,kn=wn,On=Object.prototype.hasOwnProperty;var Bn=function(e,t){var n=xn(e),r=!n&&_n(e),i=!n&&!r&&$n(e),o=!n&&!r&&!i&&kn(e),a=n||r||i||o,s=a?Sn(e.length,String):[],l=s.length;for(var c in e)!t&&!On.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Fn(c,l))||s.push(c);return s},jn=Object.prototype;var An=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||jn)};var En=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Dn=An,Cn=En,Pn=Object.prototype.hasOwnProperty;var In=he,zn=ln;var Tn=function(e){return null!=e&&zn(e.length)&&!In(e)},Hn=Bn,Nn=function(e){if(!Dn(e))return Cn(e);var t=[];for(var n in Object(e))Pn.call(e,n)&&"constructor"!=n&&t.push(n);return t},Mn=Tn;var Rn=function(e){return Mn(e)?Hn(e):Nn(e)},Vn=Rt,Ln=Ut,Wn=Rn;var qn=function(e){return Vn(e,Wn,Ln)},Un=Object.prototype.hasOwnProperty;var Qn=function(e,t,n,r,i,o){var a=1&n,s=qn(e),l=s.length;if(l!=qn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Un.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Gn=Ae(X,"DataView"),Xn=Ee,Zn=Ae(X,"Promise"),Kn=Ae(X,"Set"),Yn=Ae(X,"WeakMap"),Jn=se,er=ye,tr="[object Map]",nr="[object Promise]",rr="[object Set]",ir="[object WeakMap]",or="[object DataView]",ar=er(Gn),sr=er(Xn),lr=er(Zn),cr=er(Kn),ur=er(Yn),dr=Jn;(Gn&&dr(new Gn(new ArrayBuffer(1)))!=or||Xn&&dr(new Xn)!=tr||Zn&&dr(Zn.resolve())!=nr||Kn&&dr(new Kn)!=rr||Yn&&dr(new Yn)!=ir)&&(dr=function(e){var t=Jn(e),n="[object Object]"==t?e.constructor:void 0,r=n?er(n):"";if(r)switch(r){case ar:return or;case sr:return tr;case lr:return nr;case cr:return rr;case ur:return ir}return t});var hr=wt,pr=Bt,fr=zt,gr=Qn,mr=dr,yr=Ht,br=rn.exports,vr=wn,wr="[object Arguments]",Sr="[object Array]",_r="[object Object]",xr=Object.prototype.hasOwnProperty;var $r=function(e,t,n,r,i,o){var a=yr(e),s=yr(t),l=a?Sr:mr(e),c=s?Sr:mr(t),u=(l=l==wr?_r:l)==_r,d=(c=c==wr?_r:c)==_r,h=l==c;if(h&&br(e)){if(!br(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new hr),a||vr(e)?pr(e,t,n,r,i,o):fr(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&xr.call(e,"__wrapped__"),f=d&&xr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new hr),i(g,m,n,r,o)}}return!!h&&(o||(o=new hr),gr(e,t,n,r,i,o))},Fr=Gt;var kr=function e(t,n,r,i,o){return t===n||(null==t||null==n||!Fr(t)&&!Fr(n)?t!=t&&n!=n:$r(t,n,r,i,e,o))},Or=wt,Br=kr;var jr=le;var Ar=function(e){return e==e&&!jr(e)},Er=Ar,Dr=Rn;var Cr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Pr=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Or;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Br(u,c,3,r,d):h))return!1}}return!0},Ir=function(e){for(var t=Dr(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Er(i)]}return t},zr=Cr;var Tr=function(e){var t=Ir(e);return 1==t.length&&t[0][2]?zr(t[0][0],t[0][1]):function(n){return n===e||Pr(n,e,t)}},Hr=se,Nr=Gt;var Mr=function(e){return"symbol"==typeof e||Nr(e)&&"[object Symbol]"==Hr(e)},Rr=Ht,Vr=Mr,Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wr=/^\w*$/;var qr=function(e,t){if(Rr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Vr(e))||(Wr.test(e)||!Lr.test(e)||null!=t&&e in Object(t))},Ur=ct;function Qr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Qr.Cache||Ur),n}Qr.Cache=Ur;var Gr=Qr;var Xr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zr=/\\(\\)?/g,Kr=function(e){var t=Gr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Xr,(function(e,n,r,i){t.push(r?i.replace(Zr,"$1"):n||e)})),t}));var Yr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Jr=Ht,ei=Mr,ti=Z?Z.prototype:void 0,ni=ti?ti.toString:void 0;var ri=function e(t){if("string"==typeof t)return t;if(Jr(t))return Yr(t,e)+"";if(ei(t))return ni?ni.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ii=ri;var oi=Ht,ai=qr,si=Kr,li=function(e){return null==e?"":ii(e)};var ci=function(e,t){return oi(e)?e:ai(e,t)?[e]:si(li(e))},ui=Mr;var di=function(e){if("string"==typeof e||ui(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},hi=ci,pi=di;var fi=function(e,t){for(var n=0,r=(t=hi(t,e)).length;null!=e&&n<r;)e=e[pi(t[n++])];return n&&n==r?e:void 0},gi=fi;var mi=function(e,t,n){var r=null==e?void 0:gi(e,t);return void 0===r?n:r};var yi=ci,bi=nn,vi=Ht,wi=sn,Si=ln,_i=di;var xi=function(e,t){return null!=e&&t in Object(e)},$i=function(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,o=!1;++r<i;){var a=_i(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Si(i)&&wi(a,i)&&(vi(e)||bi(e))};var Fi=kr,ki=mi,Oi=function(e,t){return null!=e&&$i(e,t,xi)},Bi=qr,ji=Ar,Ai=Cr,Ei=di;var Di=fi;var Ci=function(e){return function(t){return null==t?void 0:t[e]}},Pi=function(e){return function(t){return Di(t,e)}},Ii=qr,zi=di;var Ti=Tr,Hi=function(e,t){return Bi(e)&&ji(t)?Ai(Ei(e),t):function(n){var r=ki(n,e);return void 0===r&&r===t?Oi(n,e):Fi(t,r,3)}},Ni=function(e){return e},Mi=Ht,Ri=function(e){return Ii(e)?Ci(zi(e)):Pi(e)};var Vi=function(e){return"function"==typeof e?e:null==e?Ni:"object"==typeof e?Mi(e)?Hi(e[0],e[1]):Ti(e):Ri(e)},Li=Vi,Wi=Tn,qi=Rn;var Ui=function(e){return function(t,n,r){var i=Object(t);if(!Wi(t)){var o=Li(n);t=qi(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var Qi=/\s/;var Gi=function(e){for(var t=e.length;t--&&Qi.test(e.charAt(t)););return t},Xi=/^\s+/;var Zi=function(e){return e?e.slice(0,Gi(e)+1).replace(Xi,""):e},Ki=le,Yi=Mr,Ji=/^[-+]0x[0-9a-f]+$/i,eo=/^0b[01]+$/i,to=/^0o[0-7]+$/i,no=parseInt;var ro=function(e){if("number"==typeof e)return e;if(Yi(e))return NaN;if(Ki(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ki(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zi(e);var n=eo.test(e);return n||to.test(e)?no(e.slice(2),n?2:8):Ji.test(e)?NaN:+e},io=1/0;var oo=function(e){return e?(e=ro(e))===io||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ao=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},so=Vi,lo=function(e){var t=oo(e),n=t%1;return t==t?n?t-n:t:0},co=Math.max;var uo=Ui((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:lo(n);return i<0&&(i=co(r+i,0)),ao(e,so(t),i)})),ho=kr;var po=function(e,t){return ho(e,t)};let fo=Ao();const go=e=>ko(e,fo);let mo=Ao();go.write=e=>ko(e,mo);let yo=Ao();go.onStart=e=>ko(e,yo);let bo=Ao();go.onFrame=e=>ko(e,bo);let vo=Ao();go.onFinish=e=>ko(e,vo);let wo=[];go.setTimeout=(e,t)=>{let n=go.now()+t,r=()=>{let e=wo.findIndex((e=>e.cancel==r));~e&&wo.splice(e,1),$o-=~e?1:0},i={time:n,handler:e,cancel:r};return wo.splice(So(n),0,i),$o+=1,Oo(),i};let So=e=>~(~wo.findIndex((t=>t.time>e))||~wo.length);go.cancel=e=>{yo.delete(e),bo.delete(e),vo.delete(e),fo.delete(e),mo.delete(e)},go.sync=e=>{Fo=!0,go.batchedUpdates(e),Fo=!1},go.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,go.onStart(n)}return r.handler=e,r.cancel=()=>{yo.delete(n),t=null},r};let _o="undefined"!=typeof window?window.requestAnimationFrame:()=>{};go.use=e=>_o=e,go.now="undefined"!=typeof performance?()=>performance.now():Date.now,go.batchedUpdates=e=>e(),go.catch=console.error,go.frameLoop="always",go.advance=()=>{"demand"!==go.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):jo()};let xo=-1,$o=0,Fo=!1;function ko(e,t){Fo?(t.delete(e),e(0)):(t.add(e),Oo())}function Oo(){xo<0&&(xo=0,"demand"!==go.frameLoop&&_o(Bo))}function Bo(){~xo&&(_o(Bo),go.batchedUpdates(jo))}function jo(){let e=xo;xo=go.now();let t=So(xo);t&&(Eo(wo.splice(0,t),(e=>e.handler())),$o-=t),$o?(yo.flush(),fo.flush(e?Math.min(64,xo-e):16.667),bo.flush(),mo.flush(),vo.flush()):xo=-1}function Ao(){let e=new Set,t=e;return{add(n){$o+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>($o-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,$o-=t.size,Eo(t,(t=>t(n)&&e.add(t))),$o+=e.size,t=e)}}}function Eo(e,t){e.forEach((e=>{try{t(e)}catch(e){go.catch(e)}}))}function Do(){}const Co={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Po(e,t){if(Co.arr(e)){if(!Co.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Io=(e,t)=>e.forEach(t);function zo(e,t,n){if(Co.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const To=e=>Co.und(e)?[]:Co.arr(e)?e:[e];function Ho(e,t){if(e.size){const n=Array.from(e);e.clear(),Io(n,t)}}const No=(e,...t)=>Ho(e,(e=>e(...t))),Mo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ro,Vo,Lo=null,Wo=!1,qo=Do;var Uo=Object.freeze({__proto__:null,get createStringInterpolator(){return Ro},get to(){return Vo},get colors(){return Lo},get skipAnimation(){return Wo},get willAdvance(){return qo},assign:e=>{e.to&&(Vo=e.to),e.now&&(go.now=e.now),void 0!==e.colors&&(Lo=e.colors),null!=e.skipAnimation&&(Wo=e.skipAnimation),e.createStringInterpolator&&(Ro=e.createStringInterpolator),e.requestAnimationFrame&&go.use(e.requestAnimationFrame),e.batchedUpdates&&(go.batchedUpdates=e.batchedUpdates),e.willAdvance&&(qo=e.willAdvance),e.frameLoop&&(go.frameLoop=e.frameLoop)}});const Qo=new Set;let Go=[],Xo=[],Zo=0;const Ko={get idle(){return!Qo.size&&!Go.length},start(e){Zo>e.priority?(Qo.add(e),go.onStart(Yo)):(Jo(e),go(ta))},advance:ta,sort(e){if(Zo)go.onFrame((()=>Ko.sort(e)));else{const t=Go.indexOf(e);~t&&(Go.splice(t,1),ea(e))}},clear(){Go=[],Qo.clear()}};function Yo(){Qo.forEach(Jo),Qo.clear(),go(ta)}function Jo(e){Go.includes(e)||ea(e)}function ea(e){Go.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Go,(t=>t.priority>e.priority)),0,e)}function ta(e){const t=Xo;for(let n=0;n<Go.length;n++){const r=Go[n];Zo=r.priority,r.idle||(qo(r),r.advance(e),r.idle||t.push(r))}return Zo=0,Xo=Go,Xo.length=0,Go=t,Go.length>0}const na="[-+]?\\d*\\.?\\d+",ra=na+"%";function ia(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const oa=new RegExp("rgb"+ia(na,na,na)),aa=new RegExp("rgba"+ia(na,na,na,na)),sa=new RegExp("hsl"+ia(na,ra,ra)),la=new RegExp("hsla"+ia(na,ra,ra,na)),ca=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ua=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,da=/^#([0-9a-fA-F]{6})$/,ha=/^#([0-9a-fA-F]{8})$/;function pa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function fa(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=pa(i,r,e+1/3),a=pa(i,r,e),s=pa(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ga(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ma(e){return(parseFloat(e)%360+360)%360/360}function ya(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ba(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function va(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=da.exec(e))?parseInt(t[1]+"ff",16)>>>0:Lo&&void 0!==Lo[e]?Lo[e]:(t=oa.exec(e))?(ga(t[1])<<24|ga(t[2])<<16|ga(t[3])<<8|255)>>>0:(t=aa.exec(e))?(ga(t[1])<<24|ga(t[2])<<16|ga(t[3])<<8|ya(t[4]))>>>0:(t=ca.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ha.exec(e))?parseInt(t[1],16)>>>0:(t=ua.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=sa.exec(e))?(255|fa(ma(t[1]),ba(t[2]),ba(t[3])))>>>0:(t=la.exec(e))?(fa(ma(t[1]),ba(t[2]),ba(t[3]))|ya(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const wa=(e,t,n)=>{if(Co.fun(e))return e;if(Co.arr(e))return wa({range:e,output:t,extrapolate:n});if(Co.str(e.output[0]))return Ro(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const Sa=1.70158,_a=1.525*Sa,xa=Sa+1,$a=2*Math.PI/3,Fa=2*Math.PI/4.5,ka=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Oa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>xa*e*e*e-Sa*e*e,easeOutBack:e=>1+xa*Math.pow(e-1,3)+Sa*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-_a)/2:(Math.pow(2*e-2,2)*((_a+1)*(2*e-2)+_a)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*$a),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*$a)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Fa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Fa)/2+1,easeInBounce:e=>1-ka(1-e),easeOutBounce:ka,easeInOutBounce:e=>e<.5?(1-ka(1-2*e))/2:(1+ka(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ba.apply(this,arguments)}const ja=Symbol.for("FluidValue.get"),Aa=Symbol.for("FluidValue.observers"),Ea=e=>Boolean(e&&e[ja]),Da=e=>e&&e[ja]?e[ja]():e,Ca=e=>e[Aa]||null;function Pa(e,t){let n=e[Aa];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ia{constructor(e){if(this[ja]=void 0,this[Aa]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");za(this,e)}}const za=(e,t)=>Na(e,ja,t);function Ta(e,t){if(e[ja]){let n=e[Aa];n||Na(e,Aa,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ha(e,t){let n=e[Aa];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Aa]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Na=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ma=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ra=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Va=new RegExp(`(${Ma.source})(%|[a-z]+)`,"i"),La=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Wa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,qa=e=>{const[t,n]=Ua(e);if(!t||Mo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Wa.test(n)?qa(n):n||e},Ua=e=>{const t=Wa.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Qa;const Ga=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Xa=e=>{Qa||(Qa=Lo?new RegExp(`(${Object.keys(Lo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Da(e).replace(Wa,qa).replace(Ra,va).replace(Qa,va))),n=t.map((e=>e.match(Ma).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>wa(Ba({},e,{output:t}))));return e=>{var n;const i=!Va.test(t[0])&&(null==(n=t.find((e=>Va.test(e))))?void 0:n.replace(Ma,""));let o=0;return t[0].replace(Ma,(()=>`${r[o++](e)}${i||""}`)).replace(La,Ga)}},Za="react-spring: ",Ka=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Za}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ya=Ka(console.warn);const Ja=Ka(console.warn);function es(e){return Co.str(e)&&("#"==e[0]||/\d/.test(e)||!Mo()&&Wa.test(e)||e in(Lo||{}))}const ts=Mo()?o:a,ns=()=>{const e=l(!1);return ts((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function rs(){const e=s()[1],t=ns();return()=>{t.current&&e(Math.random())}}const is=e=>o(e,os),os=[];function as(e){const t=l();return o((()=>{t.current=e})),t.current}const ss=Symbol.for("Animated:node"),ls=e=>e&&e[ss],cs=(e,t)=>{return n=e,r=ss,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},us=e=>e&&e[ss]&&e[ss].getPayload();class ds{constructor(){this.payload=void 0,cs(this,this)}getPayload(){return this.payload||[]}}class hs extends ds{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Co.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new hs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Co.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Co.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ps extends hs{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=wa({output:[e,e]})}static create(e){return new ps(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Co.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=wa({output:[this.getValue(),e]})),this._value=0,super.reset()}}const fs={dependencies:null};class gs extends ds{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return zo(this.source,((n,r)=>{var i;(i=n)&&i[ss]===i?t[r]=n.getValue(e):Ea(n)?t[r]=Da(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Io(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return zo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){fs.dependencies&&Ea(e)&&fs.dependencies.add(e);const t=us(e);t&&Io(t,(e=>this.add(e)))}}class ms extends gs{constructor(e){super(e)}static create(e){return new ms(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(ys)),!0)}}function ys(e){return(es(e)?ps:hs).create(e)}function bs(e){const t=ls(e);return t?t.constructor:Co.arr(e)?ms:es(e)?ps:hs}function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}const ws=(e,t)=>{const n=!Co.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=n&&u((e=>{s.current=function(e,t){e&&(Co.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;fs.dependencies=n,e.style&&(e=vs({},e,{style:t.createAnimatedStyle(e.style)}));return e=new gs(e),fs.dependencies=null,[e,n]}(i,t),p=rs(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Ss(f,h),m=l();ts((()=>(m.current=g,Io(h,(e=>Ta(e,g))),()=>{m.current&&(Io(m.current.deps,(e=>Ha(e,m.current))),go.cancel(m.current.update))}))),o(f,[]),is((()=>()=>{const e=m.current;Io(e.deps,(t=>Ha(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,vs({},y,{ref:c}))}))};class Ss{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&go.write(this.update)}}const _s=Symbol.for("AnimatedComponent"),xs=e=>Co.str(e)?e:e&&Co.str(e.displayName)?e.displayName:Co.fun(e)&&e.name||null;function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(this,arguments)}function Fs(e,...t){return Co.fun(e)?e(...t):e}const ks=(e,t)=>!0===e||!!(t&&e&&(Co.fun(e)?e(t):To(e).includes(t))),Os=(e,t)=>Co.obj(e)?t&&e[t]:e,Bs=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,js=e=>e,As=(e,t=js)=>{let n=Es;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Co.und(n)||(r[i]=n)}return r},Es=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ds={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Cs(e){const t=function(e){const t={};let n=0;if(zo(e,((e,r)=>{Ds[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return zo(e,((e,r)=>r in t||(n[r]=e))),n}return $s({},e)}function Ps(e){return e=Da(e),Co.arr(e)?e.map(Ps):es(e)?Uo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Is(e){return Co.fun(e)||Co.arr(e)&&Co.obj(e[0])}const zs=$s({},{tension:170,friction:26},{mass:1,damping:1,easing:Oa.linear,clamp:!1});class Ts{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,zs)}}function Hs(e,t){if(Co.und(t.decay)){const n=!Co.und(t.tension)||!Co.und(t.friction);!n&&Co.und(t.frequency)&&Co.und(t.damping)&&Co.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Ns=[];class Ms{constructor(){this.changed=!1,this.values=Ns,this.toValues=null,this.fromValues=Ns,this.to=void 0,this.from=void 0,this.config=new Ts,this.immediate=!1}}function Rs(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ks(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{Co.und(n.pause)||(i.paused=ks(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||ks(e,t)),c=Fs(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-go.now()}function p(){c>0&&!Uo.skipAnimation?(i.delayed=!0,u=go.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start($s({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Vs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?qs(e.get()):t.every((e=>e.noop))?Ls(e.get()):Ws(e.get(),t.every((e=>e.finished))),Ls=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ws=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),qs=e=>({value:e,cancelled:!0,finished:!1});function Us(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=As(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&qs(r)||i!==n.asyncId&&Ws(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Gs,a=new Xs;return(async()=>{if(Uo.skipAnimation)throw Qs(n),a.result=Ws(r,!1),d(a),a;p(o);const s=Co.obj(e)?$s({},e):$s({},t,{to:e});s.parentId=i,zo(c,((e,t)=>{Co.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Uo.skipAnimation)return Qs(n),Ws(r,!1);try{let t;t=Co.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Ws(r.get(),!0,!1)}catch(e){if(e instanceof Gs)g=e.result;else{if(!(e instanceof Xs))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Co.fun(a)&&go.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Qs(e,t){Ho(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Gs extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Xs extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Zs=e=>e instanceof Ys;let Ks=1;class Ys extends Ia{constructor(...e){super(...e),this.id=Ks++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ls(this);return e&&e.getValue()}to(...e){return Uo.to(this,e)}interpolate(...e){return Ya(`${Za}The "interpolate" function is deprecated in v9 (use "to" instead)`),Uo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Pa(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Ko.sort(this),Pa(this,{type:"priority",parent:this,priority:e})}}const Js=Symbol.for("SpringPhase"),el=e=>(1&e[Js])>0,tl=e=>(2&e[Js])>0,nl=e=>(4&e[Js])>0,rl=(e,t)=>t?e[Js]|=3:e[Js]&=-3,il=(e,t)=>t?e[Js]|=4:e[Js]&=-5;class ol extends Ys{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ms,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Co.und(e)||!Co.und(t)){const n=Co.obj(e)?$s({},e):$s({},t,{from:e});Co.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(tl(this)||this._state.asyncTo)||nl(this)}get goal(){return Da(this.animation.to)}get velocity(){const e=ls(this);return e instanceof hs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return el(this)}get isAnimating(){return tl(this)}get isPaused(){return nl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=us(r.to);!a&&Ea(r.to)&&(o=To(Da(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ps?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Co.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Co.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Co.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=ls(this),l=s.getValue();if(t){const e=Da(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return go.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(tl(this)){const{to:e,config:t}=this.animation;go.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Co.und(e)?(n=this.queue||[],this.queue=[]):n=[Co.obj(e)?e:$s({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Vs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Qs(this._state,e&&this._lastCallId),go.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Co.obj(n)?n[t]:n,(null==n||Is(n))&&(n=void 0),r=Co.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return el(this)||(e.reverse&&([n,r]=[r,n]),r=Da(r),Co.und(r)?ls(this)||this._set(n):this._set(r)),i}_update(e,t){let n=$s({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,As(n,((e,t)=>/^on/.test(t)?Os(e,r):e))),hl(this,n,"onProps"),pl(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Rs(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{nl(this)||(il(this,!0),No(a.pauseQueue),pl(this,"onPause",Ws(this,al(this,this.animation.to)),this))},resume:()=>{nl(this)&&(il(this,!1),tl(this)&&this._resume(),No(a.resumeQueue),pl(this,"onResume",Ws(this,al(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=sl(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(qs(this));const r=!Co.und(e.to),i=!Co.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(qs(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Co.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Po(d,c);h&&(s.from=d),d=Da(d);const p=!Po(u,l);p&&this._focus(u);const f=Is(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Hs(n=$s({},n),t),t=$s({},n,t)),Hs(e,t),Object.assign(e,t);for(const t in zs)null==e[t]&&(e[t]=zs[t]);let{mass:r,frequency:i,damping:o}=e;Co.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Fs(t.config,o),t.config!==a.config?Fs(a.config,o):void 0);let b=ls(this);if(!b||Co.und(u))return n(Ws(this,!0));const v=Co.und(t.reset)?i&&!t.default:!Co.und(d)&&ks(t.reset,o),w=v?d:this.get(),S=Ps(u),_=Co.num(S)||Co.arr(S)||es(S),x=!f&&(!_||ks(a.immediate||t.immediate,o));if(p){const e=bs(u);if(e!==b.constructor){if(!x)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(S)}}const $=b.constructor;let F=Ea(u),k=!1;if(!F){const e=v||!el(this)&&h;(p||e)&&(k=Po(Ps(w),S),F=!k),(Po(s.immediate,x)||x)&&Po(g.decay,m)&&Po(g.velocity,y)||(F=!0)}if(k&&tl(this)&&(s.changed&&!v?F=!0:F||this._stop(l)),!f&&((F||Ea(l))&&(s.values=b.getPayload(),s.toValues=Ea(u)?null:$==ps?[1]:To(S)),s.immediate!=x&&(s.immediate=x,x||v||this._set(l)),F)){const{onRest:e}=s;Io(dl,(e=>hl(this,t,e)));const r=Ws(this,al(this,l));No(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&go.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?Fs(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),f?n(Us(t.to,t,this._state,this)):F?this._start():tl(this)&&!p?this._pendingCalls.add(n):n(Ls(w))}_focus(e){const t=this.animation;e!==t.to&&(Ca(this)&&this._detach(),t.to=e,Ca(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ea(t)&&(Ta(t,this),Zs(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ea(e)&&Ha(e,this)}_set(e,t=!0){const n=Da(e);if(!Co.und(n)){const e=ls(this);if(!e||!Po(n,e.getValue())){const r=bs(n);e&&e.constructor==r?e.setValue(n):cs(this,r.create(n)),e&&go.batchedUpdates((()=>{this._onChange(n,t)}))}}return ls(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,pl(this,"onStart",Ws(this,al(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Fs(this.animation.onChange,e,this)),Fs(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ls(this).reset(Da(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),tl(this)||(rl(this,!0),nl(this)||this._resume())}_resume(){Uo.skipAnimation?this.finish():Ko.start(this)}_stop(e,t){if(tl(this)){rl(this,!1);const n=this.animation;Io(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Pa(this,{type:"idle",parent:this});const r=t?qs(this.get()):Ws(this.get(),al(this,null!=e?e:n.to));No(this._pendingCalls,r),n.changed&&(n.changed=!1,pl(this,"onRest",r,this))}}}function al(e,t){const n=Ps(t);return Po(Ps(e.get()),n)}function sl(e,t=e.loop,n=e.to){let r=Fs(t);if(r){const i=!0!==r&&Cs(r),o=(i||e).reverse,a=!i||i.reset;return ll($s({},e,{loop:t,default:!1,pause:void 0,to:!o||Is(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function ll(e){const{to:t,from:n}=e=Cs(e),r=new Set;return Co.obj(t)&&ul(t,r),Co.obj(n)&&ul(n,r),e.keys=r.size?Array.from(r):null,e}function cl(e){const t=ll(e);return Co.und(t.default)&&(t.default=As(t)),t}function ul(e,t){zo(e,((e,n)=>null!=e&&t.add(n)))}const dl=["onStart","onRest","onChange","onPause","onResume"];function hl(e,t,n){e.animation[n]=t[n]!==Bs(t,n)?Os(t[n],e.key):void 0}function pl(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const fl=["onStart","onChange","onRest"];let gl=1;class ml{constructor(e,t){this.id=gl++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start($s({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Co.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(ll(e)),this}start(e){let{queue:t}=this;return e?t=To(e).map(ll):this.queue=[],this._flush?this._flush(this,t):(xl(this,t),yl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Io(To(t),(t=>n[t].stop(!!e)))}else Qs(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Co.und(e))this.start({pause:!0});else{const t=this.springs;Io(To(e),(e=>t[e].pause()))}return this}resume(e){if(Co.und(e))this.start({pause:!1});else{const t=this.springs;Io(To(e),(e=>t[e].resume()))}return this}each(e){zo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ho(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ho(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ho(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}go.onFrame(this._onFrame)}}function yl(e,t){return Promise.all(t.map((t=>bl(e,t)))).then((t=>Vs(e,t)))}async function bl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Co.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Co.arr(i)||Co.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Io(fl,(n=>{const r=t[n];if(Co.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,No(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Bs(t,"cancel");(u||p&&d.asyncId)&&h.push(Rs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Do,resume:Do,start(t,n){p?(Qs(d,e._lastAsyncId),n(qs(e))):(t.onRest=s,n(Us(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Vs(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=sl(t,a,i);if(n)return xl(e,[n]),bl(e,n,!0)}return l&&go.batchedUpdates((()=>l(f,e,e.item))),f}function vl(e,t){const n=$s({},e.springs);return t&&Io(To(t),(e=>{Co.und(e.keys)&&(e=ll(e)),Co.obj(e.to)||(e=$s({},e,{to:void 0})),_l(n,e,(e=>Sl(e)))})),wl(e,n),n}function wl(e,t){zo(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ta(t,e))}))}function Sl(e,t){const n=new ol;return n.key=e,t&&Ta(n,t),n}function _l(e,t,n){t.keys&&Io(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function xl(e,t){Io(t,(t=>{_l(e.springs,t,(t=>Sl(t,e)))}))}const $l=["children"],Fl=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,$l);const i=d(kl),a=n.pause||!!i.pause,c=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=l(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:c})),[a,c]);const{Provider:u}=kl;return r.createElement(u,{value:n},t)},kl=(Ol=Fl,Bl={},Object.assign(Ol,r.createContext(Bl)),Ol.Provider._context=Ol,Ol.Consumer._context=Ol,Ol);var Ol,Bl;Fl.Provider=kl.Provider,Fl.Consumer=kl.Consumer;const jl=()=>{const e=[],t=function(t){Ja(`${Za}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Io(e,((e,i)=>{if(Co.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Io(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Io(e,(e=>e.resume(...arguments))),this},t.set=function(t){Io(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Io(e,((e,r)=>{if(Co.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Io(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Io(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Co.fun(e)?e(n,t):e};return t._getProps=n,t};function Al(e,t){const n=Co.fun(e),[[r],i]=function(e,t,n){const r=Co.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?jl():void 0),[]),o=l(0),a=rs(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=vl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?yl(e,t):new Promise((r=>{wl(e,n),s.queue.push((()=>{r(yl(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=as(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new ml(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=cl(n))}}h((()=>{Io(c.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>vl(e,u[t]))),m=d(Fl),y=as(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);ts((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],Io(e,(e=>e()))),Io(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),is((()=>()=>{Io(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>$s({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let El;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(El||(El={}));class Dl extends Ys{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=wa(...t);const n=this._get(),r=bs(n);cs(this,r.create(n))}advance(e){const t=this._get();Po(t,this.get())||(ls(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Pl(this._active)&&Il(this)}_get(){const e=Co.arr(this.source)?this.source.map(Da):To(Da(this.source));return this.calc(...e)}_start(){this.idle&&!Pl(this._active)&&(this.idle=!1,Io(us(this),(e=>{e.done=!1})),Uo.skipAnimation?(go.batchedUpdates((()=>this.advance())),Il(this)):Ko.start(this))}_attach(){let e=1;Io(To(this.source),(t=>{Ea(t)&&Ta(t,this),Zs(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Io(To(this.source),(e=>{Ea(e)&&Ha(e,this)})),this._active.clear(),Il(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=To(this.source).reduce(((e,t)=>Math.max(e,(Zs(t)?t.priority:0)+1)),0))}}function Cl(e){return!1!==e.idle}function Pl(e){return!e.size||Array.from(e).every(Cl)}function Il(e){e.idle||(e.idle=!0,Io(us(e),(e=>{e.done=!0})),Pa(e,{type:"idle",parent:e}))}function zl(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Uo.assign({createStringInterpolator:Xa,to:(e,t)=>new Dl(e,t)});const Tl=["style","children","scrollTop","scrollLeft","viewBox"],Hl=/^--/;function Nl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Hl.test(e)||Rl.hasOwnProperty(e)&&Rl[e]?(""+t).trim():t+"px"}const Ml={};let Rl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Vl=["Webkit","Ms","Moz","O"];Rl=Object.keys(Rl).reduce(((e,t)=>(Vl.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Rl);const Ll=["x","y","z"],Wl=/^(matrix|translate|scale|rotate|skew)/,ql=/^(translate)/,Ul=/^(rotate|skew)/,Ql=(e,t)=>Co.num(e)&&0!==e?e+t:e,Gl=(e,t)=>Co.arr(e)?e.every((e=>Gl(e,t))):Co.num(e)?e===t:parseFloat(e)===t;class Xl extends gs{constructor(e){let{x:t,y:n,z:r}=e,i=zl(e,Ll);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Ql(e,"px"))).join(",")})`,Gl(e,0)]))),zo(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Wl.test(t)){if(delete i[t],Co.und(e))return;const n=ql.test(t)?"px":Ul.test(t)?"deg":"";o.push(To(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ql(i,n)})`,Gl(i,0)]:e=>[`${t}(${e.map((e=>Ql(e,n))).join(",")})`,Gl(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Zl(o,a)),super(i)}}class Zl extends Ia{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Io(this.inputs,((n,r)=>{const i=Da(n[0]),[o,a]=this.transforms[r](Co.arr(i)?i:n.map(Da));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Io(this.inputs,(e=>Io(e,(e=>Ea(e)&&Ta(e,this)))))}observerRemoved(e){0==e&&Io(this.inputs,(e=>Io(e,(e=>Ea(e)&&Ha(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Pa(this,e)}}const Kl=["scrollTop","scrollLeft"];Uo.assign({batchedUpdates:p,createStringInterpolator:Xa,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Yl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new gs(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=xs(e)||"Anonymous";return(e=Co.str(e)?o[e]||(o[e]=ws(e,i)):e[_s]||(e[_s]=ws(e,i))).displayName=`Animated(${t})`,e};return zo(e,((t,n)=>{Co.arr(e)&&(n=xs(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=zl(r,Tl),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Ml[t]||(Ml[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Nl(t,i[t]);Hl.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Xl(e),getComponentProps:e=>zl(e,Kl)}),Jl=Yl.animated,ec=(e,t,n)=>t?mi(n,t)||mi(e,t):n||e,tc=(e,t)=>{const n=t||e.defaultValue;return mi(e.collections,n)};var nc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(nc||(nc={}));const rc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ic=e=>t=>{const n=t.theme,r=tc(rc,n[nc.colorScheme]);return n.options&&n.options.color?ec(r,e,n.options.color):ec(r,e)},oc={Brand:{1:ic("Brand.1"),2:ic("Brand.2"),3:ic("Brand.3"),4:ic("Brand.4"),5:ic("Brand.5"),6:ic("Brand.6")},Primary:ic("Primary"),PrimaryDark:ic("PrimaryDark"),Secondary:ic("Secondary"),Accent:{Light:{1:ic("Accent.Light.1"),2:ic("Accent.Light.2"),3:ic("Accent.Light.3"),4:ic("Accent.Light.4"),5:ic("Accent.Light.5"),6:ic("Accent.Light.6")},Dark:{1:ic("Accent.Dark.1"),2:ic("Accent.Dark.2"),3:ic("Accent.Dark.3")}},Neutral:{1:ic("Neutral.1"),2:ic("Neutral.2"),3:ic("Neutral.3"),4:ic("Neutral.4"),5:ic("Neutral.5"),6:ic("Neutral.6"),7:ic("Neutral.7"),8:ic("Neutral.8")},Validation:{Green:{Text:ic("Validation.Green.Text"),Icon:ic("Validation.Green.Icon"),Border:ic("Validation.Green.Border"),Background:ic("Validation.Green.Background")},Orange:{Text:ic("Validation.Orange.Text"),Icon:ic("Validation.Orange.Icon"),Border:ic("Validation.Orange.Border"),Background:ic("Validation.Orange.Background"),Badge:ic("Validation.Orange.Badge")},Red:{Text:ic("Validation.Red.Text"),Icon:ic("Validation.Red.Icon"),Border:ic("Validation.Red.Border"),Background:ic("Validation.Red.Background")},Blue:{Text:ic("Validation.Blue.Text"),Icon:ic("Validation.Blue.Icon"),Border:ic("Validation.Blue.Border"),Background:ic("Validation.Blue.Background")}},Shadow:{Accent:ic("Shadow.Accent"),Red:ic("Shadow.Red"),Elevation:ic("Shadow.Elevation")}},ac={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},sc=e=>Object.keys(ac).reduce(((t,n)=>{const r=ac[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),lc=sc("max-width"),cc=(sc("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),uc=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,dc=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||oc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${uc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,hc=f(dc)`
    animation-delay: -0.45s;
`,pc=f(dc)`
    animation-delay: -0.3s;
`,fc=f(dc)`
    animation-delay: -0.15s;
`,gc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},mc={collections:{base:{D1:{fontFamily:gc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:gc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:gc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:gc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:gc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:gc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:gc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:gc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:gc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:gc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:gc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:gc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},yc=e=>t=>{const n=t.theme,r=tc(mc,n[nc.textStyleScheme]);return n.options&&n.options.textStyle?ec(r,e,n.options.textStyle):ec(r,e)},bc={D1:{fontFamily:yc("D1.fontFamily"),fontSize:yc("D1.fontSize"),fontWeight:yc("D1.fontWeight"),lineHeight:yc("D1.lineHeight"),letterSpacing:yc("D1.letterSpacing")},D2:{fontFamily:yc("D2.fontFamily"),fontSize:yc("D2.fontSize"),fontWeight:yc("D2.fontWeight"),lineHeight:yc("D2.lineHeight"),letterSpacing:yc("D2.letterSpacing")},D3:{fontFamily:yc("D3.fontFamily"),fontSize:yc("D3.fontSize"),fontWeight:yc("D3.fontWeight"),lineHeight:yc("D3.lineHeight"),letterSpacing:yc("D3.letterSpacing")},D4:{fontFamily:yc("D4.fontFamily"),fontSize:yc("D4.fontSize"),fontWeight:yc("D4.fontWeight"),lineHeight:yc("D4.lineHeight"),letterSpacing:yc("D4.letterSpacing")},DBody:{fontFamily:yc("DBody.fontFamily"),fontSize:yc("DBody.fontSize"),fontWeight:yc("DBody.fontWeight"),lineHeight:yc("DBody.lineHeight"),letterSpacing:yc("DBody.letterSpacing")},H1:{fontFamily:yc("H1.fontFamily"),fontSize:yc("H1.fontSize"),fontWeight:yc("H1.fontWeight"),lineHeight:yc("H1.lineHeight"),letterSpacing:yc("H1.letterSpacing")},H2:{fontFamily:yc("H2.fontFamily"),fontSize:yc("H2.fontSize"),fontWeight:yc("H2.fontWeight"),lineHeight:yc("H2.lineHeight"),letterSpacing:yc("H2.letterSpacing")},H3:{fontFamily:yc("H3.fontFamily"),fontSize:yc("H3.fontSize"),fontWeight:yc("H3.fontWeight"),lineHeight:yc("H3.lineHeight"),letterSpacing:yc("H3.letterSpacing")},H4:{fontFamily:yc("H4.fontFamily"),fontSize:yc("H4.fontSize"),fontWeight:yc("H4.fontWeight"),lineHeight:yc("H4.lineHeight"),letterSpacing:yc("H4.letterSpacing")},H5:{fontFamily:yc("H5.fontFamily"),fontSize:yc("H5.fontSize"),fontWeight:yc("H5.fontWeight"),lineHeight:yc("H5.lineHeight"),letterSpacing:yc("H5.letterSpacing")},H6:{fontFamily:yc("H6.fontFamily"),fontSize:yc("H6.fontSize"),fontWeight:yc("H6.fontWeight"),lineHeight:yc("H6.lineHeight"),letterSpacing:yc("H6.letterSpacing")},Body:{fontFamily:yc("Body.fontFamily"),fontSize:yc("Body.fontSize"),fontWeight:yc("Body.fontWeight"),lineHeight:yc("Body.lineHeight"),letterSpacing:yc("Body.letterSpacing")},BodySmall:{fontFamily:yc("BodySmall.fontFamily"),fontSize:yc("BodySmall.fontSize"),fontWeight:yc("BodySmall.fontWeight"),lineHeight:yc("BodySmall.lineHeight"),letterSpacing:yc("BodySmall.letterSpacing")},XSmall:{fontFamily:yc("XSmall.fontFamily"),fontSize:yc("XSmall.fontSize"),fontWeight:yc("XSmall.fontWeight"),lineHeight:yc("XSmall.lineHeight"),letterSpacing:yc("XSmall.letterSpacing")}},vc=e=>{switch(e){case 700:case"bold":return gc.Bold;case 600:case"semibold":return gc.Semibold;case 300:case"light":return gc.Light;case 400:case"regular":return gc.Regular;default:return""}},wc=(e,t)=>n=>{var r;const i=bc[e].fontFamily(n),o=bc[e].fontWeight(n);return Object.values(gc).includes(i)?m`
                font-family: ${vc(t)||vc(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=Sc(t)||o)&&void 0!==r?r:"normal"};
        `},Sc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_c=(e,t,n=!1)=>r=>{const i=bc[e],o=i.fontSize(r);return m`
            ${wc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},xc=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `;var $c;!function(e){e.D1=f.h1`
        ${e=>m`
                ${_c("D1",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${_c("D2",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${_c("D3",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${_c("D4",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${_c("DBody",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${_c("H1",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${_c("H2",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${_c("H3",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${_c("H4",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${_c("H5",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${_c("H6",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${_c("Body",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${_c("BodySmall",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${_c("XSmall",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${xc(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Oc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Oc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}($c||($c={}));const Fc=f.a`
    ${e=>m`
            ${_c(e.textStyle,e.weight)}
            color: ${oc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${oc.Secondary};

                svg {
                    color: ${oc.Secondary};
                }
            }
        `}
`,kc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Oc=n=>{var{external:r=!1,children:i}=n,o=x(n,["external","children"]);return e(Fc,Object.assign({},o,{children:[i,r&&t(kc,{})]}))};var Bc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Bc||(Bc={})),f.button`
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
                    background-color: ${oc.Neutral[8](e)};
                    border: 1px solid ${oc.Primary(e)};

                    span {
                        color: ${oc.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${oc.Neutral[8](e)};
                    border: 1px solid ${oc.Neutral[5](e)};

                    span {
                        color: ${oc.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${oc.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${oc.Neutral[3](e)};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${oc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${oc.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${oc.Primary(e)};
                    border: 1px solid transparent;

                    ${lc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${oc.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${_c("H5","semibold")}
                    }

                    ${lc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${_c("H4","semibold")}
                    }

                    ${lc.mobileS} {
                        height: auto;
                    }
                `}
`;const jc=f((({color:n,className:r,size:i=18})=>e(cc,Object.assign({className:r,$size:i,$color:n},{children:[t(dc,{id:"inner1",$size:i-2,$borderWidth:2}),t(hc,{id:"inner2",$size:i-2,$borderWidth:2}),t(pc,{id:"inner3",$size:i-2,$borderWidth:2}),t(fc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=oc.Primary(e);break;case"disabled":t=oc.Neutral[3](e);break;default:t=oc.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Ac;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Ac||(Ac={}));const Ec=f.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return m`
            height: ${t};
            width: ${n};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${oc.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=oc.Primary(e),n=oc.Primary(e)),e.disabled&&(t=oc.Neutral[6](e),n=oc.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,Dc=f.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Cc=f(v)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return m`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?oc.Neutral[4]:oc.Neutral[8]};
`,Pc=f(Jl.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Ic=f.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${oc.Neutral[4]};
        border-right: 5px solid ${oc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${lc.mobileL} {
        max-height: 15rem;
    }
`,zc=f.li`
    :hover,
    :focus,
    :active {
        background: ${oc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${oc.Accent.Light[5]};
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
        outline-color: ${oc.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Hc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Nc=f.div`
    ${_c("Body","regular")}
    color: ${oc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hc}
`,Mc=f.div`
    color: ${oc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${_c("BodySmall","semibold")}
                `:m`
                    ${_c("Body","regular")}
                `}
`,Rc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Nc} {
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
`,Lc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Wc=f((n=>{var{className:r,checked:i,disabled:a,onChange:l,onKeyPress:c,displaySize:u="default"}=n,d=x(n,["className","checked","disabled","onChange","onKeyPress","displaySize"]);const[h,p]=s(i);o((()=>{p(i)}),[i]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return e(Ec,Object.assign({selected:h,disabled:a,className:r,"data-testid":"checkbox",$displaySize:u,role:"checkbox","aria-checked":h,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f},{children:[t(Dc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:a,checked:h},d)),h&&t(Cc,{id:"checkmark","data-testid":"checkmark",disabled:a,$displaySize:u})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,qc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Uc=f.button`
    ${_c("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${oc.Primary(e)};\n\t\t`}
`,Qc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Gc=f($c.Body)``,Xc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${oc.Validation.Red.Icon};
`,Zc=f.button`
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

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&m`
                background-color: ${oc.Neutral[7]};
            `}
    }
`,Kc=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=x(e,["children","focusHighlight","focusOutline","type"]);return t(Zc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Yc={collections:{base:{InputBoxShadow:m`
        inset 0 0 6px 1px ${oc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${oc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${oc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:m`
        inset 0 0 6px 1px ${oc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${oc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${oc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Jc=e=>t=>{var n;const r=t.theme,i=tc(Yc,r[nc.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ec(i,e,r.options.designToken):ec(i,e)},eu=Jc("InputBoxShadow"),tu=Jc("InputErrorBoxShadow");Jc("ElevationBoxShadow"),Jc("Table.Header"),Jc("Table.Cell.Primary"),Jc("Table.Cell.Secondary"),Jc("Table.Cell.Selected"),Jc("Table.Cell.Hover");f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${oc.Neutral[5]};
    border-radius: 4px;
    background: ${oc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${oc.Accent.Light[1]};
        box-shadow: ${eu};
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
                background: ${oc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${oc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${oc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${oc.Validation.Red.Border};
                    box-shadow: ${tu};
                }
            `:void 0}
`;const nu=f.input`
    ${_c("Body","regular")}
    color: ${oc.Neutral[1]};
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
        color: ${oc.Neutral[3]};
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
`,ru=f.li`
    background: ${oc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,iu=f(nu)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,ou=f(S)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${oc.Neutral[3]};
`,au=f(Kc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${oc.Neutral[3]};
    cursor: pointer;
`,su=f(w)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${oc.Neutral[3]};
`,lu=c(((n,r)=>{const{onClear:i}=n,o=x(n,["onClear"]);return e(ru,{children:[t(ou,{}),t(iu,Object.assign({ref:r},o)),o.value&&t(au,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(su,{})}))]},"search")})),cu=r=>{var{listItems:i,listExtractor:a,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:S,onRetry:_,itemsLoadState:$="success",itemTruncationType:F="end",itemMaxLines:k=2,labelDisplayType:O="inline",renderListItem:B,onBlur:j,hideNoResultsDisplay:A,renderCustomCallToAction:E}=r,D=x(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,P]=s(0),[I,z]=s(""),[T,H]=s(i),[N,M]=s(0),R=Al({height:N}),V=l(),L=l(),W=l([]),q=l(),U=l(),Q=l(C),G=l(T),X=e=>{Q.current=e,P(e)},Z=e=>{G.current=e,H(e)};o((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),o((()=>{ee(I)}),[I]),o((()=>{if(z(""),h){if(setTimeout((()=>{M(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else M(0)}),[h]),o((()=>{if(h){const e=te();M(e)}}),[T,$]),o((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>a?a(e):e.toString(),Y=e=>{if("inline"!==O)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return Ac.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!uo(w,(t=>po(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(V&&V.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{_&&_()},se=()=>{j&&j()},le=r=>e(n,{children:[t(Vc,Object.assign({$maxLines:k,"aria-hidden":!0},{children:r})),t(Lc,Object.assign({$maxLines:k,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=K(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":O;return e(Rc,Object.assign({$labelDisplayType:l},{children:[t(Nc,Object.assign({$truncateType:F,$maxLines:k,"aria-label":i},{children:"middle"===F&&a?le(i):i})),o&&t(Mc,Object.assign({$truncateType:F,$maxLines:k,$labelDisplayType:O,"aria-label":o},{children:"middle"===F&&s?le(o):o}))]}))},ue=()=>{if(!_||_&&"success"===$)return T.map(((n,r)=>t(zc,Object.assign({$checked:J(n)&&!v},{children:e(Tc,Object.assign({$hasNextLineLabel:"next-line"===O&&T.length>0&&a&&"string"!=typeof a(T[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Wc,{checked:J(n),displaySize:"small"}),B?B(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(n,r))))},de=()=>{if(v&&T.length>0&&!I&&"success"===$)return t(qc,{children:t(Uc,Object.assign({onClick:S,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!A&&(I||!p)&&0===T.length&&"success"===$)return e(Qc,Object.assign({"data-testid":"list-no-results"},{children:[t(Xc,{"data-testid":"no-result-icon"}),t(Gc,{children:"No results found."})]}),"noResults")},pe=()=>{if(_&&"loading"===$)return e(Qc,Object.assign({"data-testid":"list-loading"},{children:[t(jc,{$buttonStyle:"secondary",size:24}),t(Gc,{children:"Loading..."})]}),"loading")},fe=()=>{if(_&&"fail"===$)return e(Qc,Object.assign({"data-testid":"list-fail"},{children:[t(Xc,{"data-testid":"load-error-icon"}),t(Gc,{children:"Failed to load."}),t(Uc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(Pc,Object.assign({style:R,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:V},{children:[(()=>{if(h)return e(Ic,Object.assign({ref:L,"data-testid":"dropdown-list",width:d,role:"list"},D,{children:[(p||m)&&"success"===$?t(lu,{ref:q,onChange:ie,value:I,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&E)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:E(y,T)}))})()]}))})},uu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",du=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,hu=m`
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
        outline: 2px solid ${oc.Accent.Light[3]};
    }
`,pu=f.button`
    ${hu}
    cursor: pointer;
`;f.div`
    ${hu}
`;const fu=g`
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
`,gu=f.div`
    position: relative;
    border: 1px solid ${oc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${oc.Neutral[8]};

    :focus-within {
        border: 1px solid ${oc.Accent.Light[1]};
        box-shadow: ${eu};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${fu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${oc.Neutral[6](e)};

                ${pu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${oc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${pu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${oc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${oc.Validation.Red.Border(e)};
                    box-shadow: ${tu};
                }
            `:void 0}
`,mu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${uu};
    margin-left: 1rem;
`,yu=f(_)`
    color: ${oc.Neutral[3]};
    height: ${bc.Body.fontSize}rem;
    width: ${bc.Body.fontSize}rem;
`,bu=f.div`
    height: 1px;
    background: ${oc.Neutral[5]};
    margin: 0 0.5rem;
`,vu=f.div`
    display: flex;
    flex: 1;
`,wu=f($c.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Su=f(wu)`
    color: ${oc.Neutral[3]};
`,_u=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:c})=>{const u=l();return((e,t,n="window",r)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),t(du,{children:t(gu,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a},{children:e}))})},xu=r=>{var{selectedOption:i,placeholder:a="Select",options:c,disabled:u,error:d,className:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:y,valueExtractor:b,valueToStringFunction:v,listExtractor:w,displayValueExtractor:S,onSelectOption:_,listStyleWidth:$,onShowOptions:F,onHideOptions:k,onRetry:O,optionsLoadState:B="success",optionTruncationType:j="end",renderCustomSelectedOption:A,renderListItem:E,hideNoResultsDisplay:D,renderCustomCallToAction:C}=r,P=x(r,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction"]);const[I,z]=s(i),[T,H]=s(!1),N=l(),M=l();o((()=>{z(i)}),[i]);const R=(e,t)=>{z(e),H(!1),W(!1),N&&N.current.focus(),_&&_(e,t)},V=e=>{T&&(H(!1),W(!1)),e&&N&&N.current.focus()},L=e=>{if("middle"===j){let t=0;return M&&M.current&&(t=M.current.getBoundingClientRect().width),Ac.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(e),t,120,8)}return e},W=e=>{!e&&k&&k(),e&&F&&F()};return e(_u,Object.assign({className:h,show:T,error:d&&!T,disabled:u,readOnly:P.readOnly,testId:p,onBlur:()=>{H(!1),W(!1)}},{children:[t(pu,Object.assign({ref:N,type:"button","data-testid":f||"selector",disabled:u,onClick:e=>{e.preventDefault(),u||P.readOnly||(H(!T),W(!T))}},P,{children:e(n,{children:[t(vu,Object.assign({ref:M},{children:I?A?A(I):t(wu,Object.assign({truncateType:j},{children:L(S?S(I):b?b(I):I.toString())})):t(Su,Object.assign({truncateType:j},{children:a}))})),!P.readOnly&&t(mu,Object.assign({expanded:T},{children:t(yu,{})}))]})})),T&&t(bu,{}),c&&c.length>0?t(cu,{listItems:c,onSelectItem:R,onDismiss:V,valueExtractor:b,listExtractor:w,listStyleWidth:$,visible:T,enableSearch:g,searchPlaceholder:y,searchFunction:m,"data-testid":"dropdown-list",selectedItems:I?[I]:[],onRetry:O,itemsLoadState:B,itemTruncationType:j,renderListItem:E,hideNoResultsDisplay:D,renderCustomCallToAction:C}):null]}))};export{xu as InputSelect};
//# sourceMappingURL=index.js.map
