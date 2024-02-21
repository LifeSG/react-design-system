import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useState as o,useRef as a,useEffect as s,useLayoutEffect as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as S,SquareIcon as x}from"@lifesg/react-icons";import{CrossIcon as F}from"@lifesg/react-icons/cross";import{MagnifierIcon as $}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1};var A=function(){this.__data__=[],this.size=0};var E=function(e,t){return e===t||e!=e&&t!=t},j=E;var C=function(e,t){for(var n=e.length;n--;)if(j(e[n][0],t))return n;return-1},I=C,P=Array.prototype.splice;var z=C;var H=C;var T=C;var N=A,L=function(e){var t=this.__data__,n=I(t,e);return!(n<0)&&(n==t.length-1?t.pop():P.call(t,n,1),--this.size,!0)},M=function(e){var t=this.__data__,n=z(t,e);return n<0?void 0:t[n][1]},R=function(e){return H(this.__data__,e)>-1},V=function(e,t){var n=this.__data__,r=T(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function W(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}W.prototype.clear=N,W.prototype.delete=L,W.prototype.get=M,W.prototype.has=R,W.prototype.set=V;var q=W,U=q;var Q=function(){this.__data__=new U,this.size=0};var G=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var X=function(e){return this.__data__.get(e)};var Z=function(e){return this.__data__.has(e)},K="object"==typeof k&&k&&k.Object===Object&&k,Y=K,J="object"==typeof self&&self&&self.Object===Object&&self,ee=Y||J||Function("return this")(),te=ee.Symbol,ne=te,re=Object.prototype,ie=re.hasOwnProperty,oe=re.toString,ae=ne?ne.toStringTag:void 0;var se=function(e){var t=ie.call(e,ae),n=e[ae];try{e[ae]=void 0;var r=!0}catch(e){}var i=oe.call(e);return r&&(t?e[ae]=n:delete e[ae]),i},le=Object.prototype.toString;var ce=se,ue=function(e){return le.call(e)},de=te?te.toStringTag:void 0;var he=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?ce(e):ue(e)};var pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fe=he,ge=pe;var me,ye=function(e){if(!ge(e))return!1;var t=fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},be=ee["__core-js_shared__"],ve=(me=/[^.]+$/.exec(be&&be.keys&&be.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var we=function(e){return!!ve&&ve in e},Se=Function.prototype.toString;var xe=function(e){if(null!=e){try{return Se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=ye,$e=we,_e=pe,Be=xe,ke=/^\[object .+?Constructor\]$/,Oe=Function.prototype,De=Object.prototype,Ae=Oe.toString,Ee=De.hasOwnProperty,je=RegExp("^"+Ae.call(Ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ce=function(e){return!(!_e(e)||$e(e))&&(Fe(e)?je:ke).test(Be(e))},Ie=function(e,t){return null==e?void 0:e[t]};var Pe=function(e,t){var n=Ie(e,t);return Ce(n)?n:void 0},ze=Pe(ee,"Map"),He=Pe(Object,"create"),Te=He;var Ne=function(){this.__data__=Te?Te(null):{},this.size=0};var Le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=He,Re=Object.prototype.hasOwnProperty;var Ve=function(e){var t=this.__data__;if(Me){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Re.call(t,e)?t[e]:void 0},We=He,qe=Object.prototype.hasOwnProperty;var Ue=He;var Qe=Ne,Ge=Le,Xe=Ve,Ze=function(e){var t=this.__data__;return We?void 0!==t[e]:qe.call(t,e)},Ke=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Qe,Ye.prototype.delete=Ge,Ye.prototype.get=Xe,Ye.prototype.has=Ze,Ye.prototype.set=Ke;var Je=Ye,et=q,tt=ze;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var rt=function(e,t){var n=e.__data__;return nt(t)?n["string"==typeof t?"string":"hash"]:n.map},it=rt;var ot=rt;var at=rt;var st=rt;var lt=function(){this.size=0,this.__data__={hash:new Je,map:new(tt||et),string:new Je}},ct=function(e){var t=it(this,e).delete(e);return this.size-=t?1:0,t},ut=function(e){return ot(this,e).get(e)},dt=function(e){return at(this,e).has(e)},ht=function(e,t){var n=st(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function pt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pt.prototype.clear=lt,pt.prototype.delete=ct,pt.prototype.get=ut,pt.prototype.has=dt,pt.prototype.set=ht;var ft=pt,gt=q,mt=ze,yt=ft;var bt=q,vt=Q,wt=G,St=X,xt=Z,Ft=function(e,t){var n=this.__data__;if(n instanceof gt){var r=n.__data__;if(!mt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new yt(r)}return n.set(e,t),this.size=n.size,this};function $t(e){var t=this.__data__=new bt(e);this.size=t.size}$t.prototype.clear=vt,$t.prototype.delete=wt,$t.prototype.get=St,$t.prototype.has=xt,$t.prototype.set=Ft;var _t=$t;var Bt=ft,kt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ot=function(e){return this.__data__.has(e)};function Dt(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Bt;++t<n;)this.add(e[t])}Dt.prototype.add=Dt.prototype.push=kt,Dt.prototype.has=Ot;var At=Dt,Et=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},jt=function(e,t){return e.has(t)};var Ct=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new At:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Et(t,(function(e,t){if(!jt(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var It=ee.Uint8Array,Pt=E,zt=Ct,Ht=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Tt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Nt=te?te.prototype:void 0,Lt=Nt?Nt.valueOf:void 0;var Mt=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new It(e),new It(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Pt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ht;case"[object Set]":var l=1&r;if(s||(s=Tt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=zt(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Lt)return Lt.call(e)==Lt.call(t)}return!1};var Rt=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Vt=Array.isArray,Wt=Rt,qt=Vt;var Ut=function(e,t,n){var r=t(e);return qt(e)?r:Wt(r,n(e))};var Qt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Gt=function(){return[]},Xt=Object.prototype.propertyIsEnumerable,Zt=Object.getOwnPropertySymbols,Kt=Zt?function(e){return null==e?[]:(e=Object(e),Qt(Zt(e),(function(t){return Xt.call(e,t)})))}:Gt;var Yt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Jt=function(e){return null!=e&&"object"==typeof e},en=he,tn=Jt;var nn=function(e){return tn(e)&&"[object Arguments]"==en(e)},rn=Jt,on=Object.prototype,an=on.hasOwnProperty,sn=on.propertyIsEnumerable,ln=nn(function(){return arguments}())?nn:function(e){return rn(e)&&an.call(e,"callee")&&!sn.call(e,"callee")},cn={exports:{}};var un=function(){return!1};!function(e,t){var n=ee,r=un,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(cn,cn.exports);var dn=cn.exports,hn=/^(?:0|[1-9]\d*)$/;var pn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&hn.test(e))&&e>-1&&e%1==0&&e<t};var fn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},gn=he,mn=fn,yn=Jt,bn={};bn["[object Float32Array]"]=bn["[object Float64Array]"]=bn["[object Int8Array]"]=bn["[object Int16Array]"]=bn["[object Int32Array]"]=bn["[object Uint8Array]"]=bn["[object Uint8ClampedArray]"]=bn["[object Uint16Array]"]=bn["[object Uint32Array]"]=!0,bn["[object Arguments]"]=bn["[object Array]"]=bn["[object ArrayBuffer]"]=bn["[object Boolean]"]=bn["[object DataView]"]=bn["[object Date]"]=bn["[object Error]"]=bn["[object Function]"]=bn["[object Map]"]=bn["[object Number]"]=bn["[object Object]"]=bn["[object RegExp]"]=bn["[object Set]"]=bn["[object String]"]=bn["[object WeakMap]"]=!1;var vn=function(e){return yn(e)&&mn(e.length)&&!!bn[gn(e)]};var wn=function(e){return function(t){return e(t)}},Sn={exports:{}};!function(e,t){var n=K,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Sn,Sn.exports);var xn=Sn.exports,Fn=vn,$n=wn,_n=xn&&xn.isTypedArray,Bn=_n?$n(_n):Fn,kn=Yt,On=ln,Dn=Vt,An=dn,En=pn,jn=Bn,Cn=Object.prototype.hasOwnProperty;var In=function(e,t){var n=Dn(e),r=!n&&On(e),i=!n&&!r&&An(e),o=!n&&!r&&!i&&jn(e),a=n||r||i||o,s=a?kn(e.length,String):[],l=s.length;for(var c in e)!t&&!Cn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||En(c,l))||s.push(c);return s},Pn=Object.prototype;var zn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pn)};var Hn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Tn=zn,Nn=Hn,Ln=Object.prototype.hasOwnProperty;var Mn=ye,Rn=fn;var Vn=function(e){return null!=e&&Rn(e.length)&&!Mn(e)},Wn=In,qn=function(e){if(!Tn(e))return Nn(e);var t=[];for(var n in Object(e))Ln.call(e,n)&&"constructor"!=n&&t.push(n);return t},Un=Vn;var Qn=function(e){return Un(e)?Wn(e):qn(e)},Gn=Ut,Xn=Kt,Zn=Qn;var Kn=function(e){return Gn(e,Zn,Xn)},Yn=Object.prototype.hasOwnProperty;var Jn=function(e,t,n,r,i,o){var a=1&n,s=Kn(e),l=s.length;if(l!=Kn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Yn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},er=Pe(ee,"DataView"),tr=ze,nr=Pe(ee,"Promise"),rr=Pe(ee,"Set"),ir=Pe(ee,"WeakMap"),or=he,ar=xe,sr="[object Map]",lr="[object Promise]",cr="[object Set]",ur="[object WeakMap]",dr="[object DataView]",hr=ar(er),pr=ar(tr),fr=ar(nr),gr=ar(rr),mr=ar(ir),yr=or;(er&&yr(new er(new ArrayBuffer(1)))!=dr||tr&&yr(new tr)!=sr||nr&&yr(nr.resolve())!=lr||rr&&yr(new rr)!=cr||ir&&yr(new ir)!=ur)&&(yr=function(e){var t=or(e),n="[object Object]"==t?e.constructor:void 0,r=n?ar(n):"";if(r)switch(r){case hr:return dr;case pr:return sr;case fr:return lr;case gr:return cr;case mr:return ur}return t});var br=_t,vr=Ct,wr=Mt,Sr=Jn,xr=yr,Fr=Vt,$r=dn,_r=Bn,Br="[object Arguments]",kr="[object Array]",Or="[object Object]",Dr=Object.prototype.hasOwnProperty;var Ar=function(e,t,n,r,i,o){var a=Fr(e),s=Fr(t),l=a?kr:xr(e),c=s?kr:xr(t),u=(l=l==Br?Or:l)==Or,d=(c=c==Br?Or:c)==Or,h=l==c;if(h&&$r(e)){if(!$r(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new br),a||_r(e)?vr(e,t,n,r,i,o):wr(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&Dr.call(e,"__wrapped__"),f=d&&Dr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new br),i(g,m,n,r,o)}}return!!h&&(o||(o=new br),Sr(e,t,n,r,i,o))},Er=Jt;var jr=function e(t,n,r,i,o){return t===n||(null==t||null==n||!Er(t)&&!Er(n)?t!=t&&n!=n:Ar(t,n,r,i,e,o))},Cr=_t,Ir=jr;var Pr=pe;var zr=function(e){return e==e&&!Pr(e)},Hr=zr,Tr=Qn;var Nr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Lr=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Cr;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Ir(u,c,3,r,d):h))return!1}}return!0},Mr=function(e){for(var t=Tr(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Hr(i)]}return t},Rr=Nr;var Vr=function(e){var t=Mr(e);return 1==t.length&&t[0][2]?Rr(t[0][0],t[0][1]):function(n){return n===e||Lr(n,e,t)}},Wr=he,qr=Jt;var Ur=function(e){return"symbol"==typeof e||qr(e)&&"[object Symbol]"==Wr(e)},Qr=Vt,Gr=Ur,Xr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zr=/^\w*$/;var Kr=function(e,t){if(Qr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Gr(e))||(Zr.test(e)||!Xr.test(e)||null!=t&&e in Object(t))},Yr=ft;function Jr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Jr.Cache||Yr),n}Jr.Cache=Yr;var ei=Jr;var ti=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ni=/\\(\\)?/g,ri=function(e){var t=ei(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ti,(function(e,n,r,i){t.push(r?i.replace(ni,"$1"):n||e)})),t}));var ii=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},oi=Vt,ai=Ur,si=te?te.prototype:void 0,li=si?si.toString:void 0;var ci=function e(t){if("string"==typeof t)return t;if(oi(t))return ii(t,e)+"";if(ai(t))return li?li.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ui=ci;var di=Vt,hi=Kr,pi=ri,fi=function(e){return null==e?"":ui(e)};var gi=function(e,t){return di(e)?e:hi(e,t)?[e]:pi(fi(e))},mi=Ur;var yi=function(e){if("string"==typeof e||mi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},bi=gi,vi=yi;var wi=function(e,t){for(var n=0,r=(t=bi(t,e)).length;null!=e&&n<r;)e=e[vi(t[n++])];return n&&n==r?e:void 0},Si=wi;var xi=function(e,t,n){var r=null==e?void 0:Si(e,t);return void 0===r?n:r},Fi=O(xi);var $i=gi,_i=ln,Bi=Vt,ki=pn,Oi=fn,Di=yi;var Ai=function(e,t){return null!=e&&t in Object(e)},Ei=function(e,t,n){for(var r=-1,i=(t=$i(t,e)).length,o=!1;++r<i;){var a=Di(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Oi(i)&&ki(a,i)&&(Bi(e)||_i(e))};var ji=jr,Ci=xi,Ii=function(e,t){return null!=e&&Ei(e,t,Ai)},Pi=Kr,zi=zr,Hi=Nr,Ti=yi;var Ni=wi;var Li=function(e){return function(t){return null==t?void 0:t[e]}},Mi=function(e){return function(t){return Ni(t,e)}},Ri=Kr,Vi=yi;var Wi=Vr,qi=function(e,t){return Pi(e)&&zi(t)?Hi(Ti(e),t):function(n){var r=Ci(n,e);return void 0===r&&r===t?Ii(n,e):ji(t,r,3)}},Ui=function(e){return e},Qi=Vt,Gi=function(e){return Ri(e)?Li(Vi(e)):Mi(e)};var Xi=function(e){return"function"==typeof e?e:null==e?Ui:"object"==typeof e?Qi(e)?qi(e[0],e[1]):Wi(e):Gi(e)},Zi=/\s/;var Ki=function(e){for(var t=e.length;t--&&Zi.test(e.charAt(t)););return t},Yi=/^\s+/;var Ji=function(e){return e?e.slice(0,Ki(e)+1).replace(Yi,""):e},eo=pe,to=Ur,no=/^[-+]0x[0-9a-f]+$/i,ro=/^0b[01]+$/i,io=/^0o[0-7]+$/i,oo=parseInt;var ao=function(e){if("number"==typeof e)return e;if(to(e))return NaN;if(eo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=eo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ji(e);var n=ro.test(e);return n||io.test(e)?oo(e.slice(2),n?2:8):no.test(e)?NaN:+e},so=1/0;var lo=function(e){return e?(e=ao(e))===so||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var co=D,uo=Xi,ho=function(e){var t=lo(e),n=t%1;return t==t?n?t-n:t:0},po=Math.max;var fo=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ho(n);return i<0&&(i=po(r+i,0)),co(e,uo(t),i)},go=O(fo),mo=Xi,yo=Vn,bo=Qn;var vo=O(function(e){return function(t,n,r){var i=Object(t);if(!yo(t)){var o=mo(n);t=bo(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}}(fo)),wo=jr;var So=O((function(e,t){return wo(e,t)})),xo=Object.defineProperty,Fo={};((e,t)=>{for(var n in t)xo(e,n,{get:t[n],enumerable:!0})})(Fo,{assign:()=>na,colors:()=>Jo,createStringInterpolator:()=>Xo,skipAnimation:()=>ea,to:()=>Zo,willAdvance:()=>ta});var $o=Lo(),_o=e=>zo(e,$o),Bo=Lo();_o.write=e=>zo(e,Bo);var ko=Lo();_o.onStart=e=>zo(e,ko);var Oo=Lo();_o.onFrame=e=>zo(e,Oo);var Do=Lo();_o.onFinish=e=>zo(e,Do);var Ao=[];_o.setTimeout=(e,t)=>{const n=_o.now()+t,r=()=>{const e=Ao.findIndex((e=>e.cancel==r));~e&&Ao.splice(e,1),Io-=~e?1:0},i={time:n,handler:e,cancel:r};return Ao.splice(Eo(n),0,i),Io+=1,Ho(),i};var Eo=e=>~(~Ao.findIndex((t=>t.time>e))||~Ao.length);_o.cancel=e=>{ko.delete(e),Oo.delete(e),Do.delete(e),$o.delete(e),Bo.delete(e)},_o.sync=e=>{Po=!0,_o.batchedUpdates(e),Po=!1},_o.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,_o.onStart(n)}return r.handler=e,r.cancel=()=>{ko.delete(n),t=null},r};var jo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};_o.use=e=>jo=e,_o.now="undefined"!=typeof performance?()=>performance.now():Date.now,_o.batchedUpdates=e=>e(),_o.catch=console.error,_o.frameLoop="always",_o.advance=()=>{"demand"!==_o.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):No()};var Co=-1,Io=0,Po=!1;function zo(e,t){Po?(t.delete(e),e(0)):(t.add(e),Ho())}function Ho(){Co<0&&(Co=0,"demand"!==_o.frameLoop&&jo(To))}function To(){~Co&&(jo(To),_o.batchedUpdates(No))}function No(){const e=Co;Co=_o.now();const t=Eo(Co);t&&(Mo(Ao.splice(0,t),(e=>e.handler())),Io-=t),Io?(ko.flush(),$o.flush(e?Math.min(64,Co-e):16.667),Oo.flush(),Bo.flush(),Do.flush()):Co=-1}function Lo(){let e=new Set,t=e;return{add(n){Io+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Io-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Io-=t.size,Mo(t,(t=>t(n)&&e.add(t))),Io+=e.size,t=e)}}}function Mo(e,t){e.forEach((e=>{try{t(e)}catch(e){_o.catch(e)}}))}function Ro(){}var Vo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Wo(e,t){if(Vo.arr(e)){if(!Vo.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var qo=(e,t)=>e.forEach(t);function Uo(e,t,n){if(Vo.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Qo=e=>Vo.und(e)?[]:Vo.arr(e)?e:[e];function Go(e,t){if(e.size){const n=Array.from(e);e.clear(),qo(n,t)}}var Xo,Zo,Ko=(e,...t)=>Go(e,(e=>e(...t))),Yo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Jo=null,ea=!1,ta=Ro,na=e=>{e.to&&(Zo=e.to),e.now&&(_o.now=e.now),void 0!==e.colors&&(Jo=e.colors),null!=e.skipAnimation&&(ea=e.skipAnimation),e.createStringInterpolator&&(Xo=e.createStringInterpolator),e.requestAnimationFrame&&_o.use(e.requestAnimationFrame),e.batchedUpdates&&(_o.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ta=e.willAdvance),e.frameLoop&&(_o.frameLoop=e.frameLoop)},ra=new Set,ia=[],oa=[],aa=0,sa={get idle(){return!ra.size&&!ia.length},start(e){aa>e.priority?(ra.add(e),_o.onStart(la)):(ca(e),_o(da))},advance:da,sort(e){if(aa)_o.onFrame((()=>sa.sort(e)));else{const t=ia.indexOf(e);~t&&(ia.splice(t,1),ua(e))}},clear(){ia=[],ra.clear()}};function la(){ra.forEach(ca),ra.clear(),_o(da)}function ca(e){ia.includes(e)||ua(e)}function ua(e){ia.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(ia,(t=>t.priority>e.priority)),0,e)}function da(e){const t=oa;for(let n=0;n<ia.length;n++){const r=ia[n];aa=r.priority,r.idle||(ta(r),r.advance(e),r.idle||t.push(r))}return aa=0,(oa=ia).length=0,(ia=t).length>0}var ha="[-+]?\\d*\\.?\\d+",pa=ha+"%";function fa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ga=new RegExp("rgb"+fa(ha,ha,ha)),ma=new RegExp("rgba"+fa(ha,ha,ha,ha)),ya=new RegExp("hsl"+fa(ha,pa,pa)),ba=new RegExp("hsla"+fa(ha,pa,pa,ha)),va=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Sa=/^#([0-9a-fA-F]{6})$/,xa=/^#([0-9a-fA-F]{8})$/;function Fa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function $a(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Fa(i,r,e+1/3),a=Fa(i,r,e),s=Fa(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function _a(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ba(e){return(parseFloat(e)%360+360)%360/360}function ka(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Oa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Da(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Sa.exec(e))?parseInt(t[1]+"ff",16)>>>0:Jo&&void 0!==Jo[e]?Jo[e]:(t=ga.exec(e))?(_a(t[1])<<24|_a(t[2])<<16|_a(t[3])<<8|255)>>>0:(t=ma.exec(e))?(_a(t[1])<<24|_a(t[2])<<16|_a(t[3])<<8|ka(t[4]))>>>0:(t=va.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=xa.exec(e))?parseInt(t[1],16)>>>0:(t=wa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ya.exec(e))?(255|$a(Ba(t[1]),Oa(t[2]),Oa(t[3])))>>>0:(t=ba.exec(e))?($a(Ba(t[1]),Oa(t[2]),Oa(t[3]))|ka(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Aa=(e,t,n)=>{if(Vo.fun(e))return e;if(Vo.arr(e))return Aa({range:e,output:t,extrapolate:n});if(Vo.str(e.output[0]))return Xo(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var Ea=1.70158,ja=1.525*Ea,Ca=Ea+1,Ia=2*Math.PI/3,Pa=2*Math.PI/4.5,za=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ha={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ca*e*e*e-Ea*e*e,easeOutBack:e=>1+Ca*Math.pow(e-1,3)+Ea*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ja)/2:(Math.pow(2*e-2,2)*((ja+1)*(2*e-2)+ja)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ia),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ia)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Pa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Pa)/2+1,easeInBounce:e=>1-za(1-e),easeOutBounce:za,easeInOutBounce:e=>e<.5?(1-za(1-2*e))/2:(1+za(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Ta=Symbol.for("FluidValue.get"),Na=Symbol.for("FluidValue.observers"),La=e=>Boolean(e&&e[Ta]),Ma=e=>e&&e[Ta]?e[Ta]():e,Ra=e=>e[Na]||null;function Va(e,t){const n=e[Na];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Wa=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");qa(this,e)}},qa=(e,t)=>Xa(e,Ta,t);function Ua(e,t){if(e[Ta]){let n=e[Na];n||Xa(e,Na,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Qa(e,t){const n=e[Na];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Na]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Ga,Xa=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Za=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ka=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ya=new RegExp(`(${Za.source})(%|[a-z]+)`,"i"),Ja=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,es=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ts=e=>{const[t,n]=ns(e);if(!t||Yo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&es.test(n)?ts(n):n||e},ns=e=>{const t=es.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},rs=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,is=e=>{Ga||(Ga=Jo?new RegExp(`(${Object.keys(Jo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ma(e).replace(es,ts).replace(Ka,Da).replace(Ga,Da))),n=t.map((e=>e.match(Za).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Aa({...e,output:t})));return e=>{const n=!Ya.test(t[0])&&t.find((e=>Ya.test(e)))?.replace(Za,"");let i=0;return t[0].replace(Za,(()=>`${r[i++](e)}${n||""}`)).replace(Ja,rs)}},os="react-spring: ",as=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${os}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},ss=as(console.warn);var ls=as(console.warn);function cs(e){return Vo.str(e)&&("#"==e[0]||/\d/.test(e)||!Yo()&&es.test(e)||e in(Jo||{}))}var us=Yo()?s:l,ds=()=>{const e=a(!1);return us((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function hs(){const e=o()[1],t=ds();return()=>{t.current&&e(Math.random())}}var ps=e=>s(e,fs),fs=[];function gs(e){const t=a();return s((()=>{t.current=e})),t.current}var ms=Symbol.for("Animated:node"),ys=e=>e&&e[ms],bs=(e,t)=>{return n=e,r=ms,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},vs=e=>e&&e[ms]&&e[ms].getPayload(),ws=class{constructor(){bs(this,this)}getPayload(){return this.payload||[]}},Ss=class extends ws{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Vo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ss(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Vo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Vo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},xs=class extends Ss{constructor(e){super(0),this._string=null,this._toString=Aa({output:[e,e]})}static create(e){return new xs(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Vo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Aa({output:[this.getValue(),e]})),this._value=0,super.reset()}},Fs={dependencies:null},$s=class extends ws{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Uo(this.source,((n,r)=>{var i;(i=n)&&i[ms]===i?t[r]=n.getValue(e):La(n)?t[r]=Ma(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&qo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Uo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Fs.dependencies&&La(e)&&Fs.dependencies.add(e);const t=vs(e);t&&qo(t,(e=>this.add(e)))}},_s=class extends $s{constructor(e){super(e)}static create(e){return new _s(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Bs)),!0)}};function Bs(e){return(cs(e)?xs:Ss).create(e)}function ks(e){const t=ys(e);return t?t.constructor:Vo.arr(e)?_s:cs(e)?xs:Ss}var Os=(e,t)=>{const n=!Vo.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,o)=>{const l=a(null),c=n&&u((e=>{l.current=function(e,t){e&&(Vo.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[d,h]=function(e,t){const n=new Set;Fs.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new $s(e),Fs.dependencies=null,[e,n]}(i,t),p=hs(),f=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Ds(f,h),m=a();us((()=>(m.current=g,qo(h,(e=>Ua(e,g))),()=>{m.current&&(qo(m.current.deps,(e=>Qa(e,m.current))),_o.cancel(m.current.update))}))),s(f,[]),ps((()=>()=>{const e=m.current;qo(e.deps,(t=>Qa(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,{...y,ref:c})}))},Ds=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&_o.write(this.update)}};var As=Symbol.for("AnimatedComponent"),Es=e=>Vo.str(e)?e:e&&Vo.str(e.displayName)?e.displayName:Vo.fun(e)&&e.name||null;function js(e,...t){return Vo.fun(e)?e(...t):e}var Cs=(e,t)=>!0===e||!!(t&&e&&(Vo.fun(e)?e(t):Qo(e).includes(t))),Is=(e,t)=>Vo.obj(e)?t&&e[t]:e,Ps=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,zs=e=>e,Hs=(e,t=zs)=>{let n=Ts;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Vo.und(n)||(r[i]=n)}return r},Ts=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ns={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ls(e){const t=function(e){const t={};let n=0;if(Uo(e,((e,r)=>{Ns[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Uo(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Ms(e){return e=Ma(e),Vo.arr(e)?e.map(Ms):cs(e)?Fo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Rs(e){return Vo.fun(e)||Vo.arr(e)&&Vo.obj(e[0])}var Vs={tension:170,friction:26,mass:1,damping:1,easing:Ha.linear,clamp:!1},Ws=class{constructor(){this.velocity=0,Object.assign(this,Vs)}};function qs(e,t){if(Vo.und(t.decay)){const n=!Vo.und(t.tension)||!Vo.und(t.friction);!n&&Vo.und(t.frequency)&&Vo.und(t.damping)&&Vo.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Us=[],Qs=class{constructor(){this.changed=!1,this.values=Us,this.toValues=null,this.fromValues=Us,this.config=new Ws,this.immediate=!1}};function Gs(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=Cs(n.cancel??r?.cancel,t);if(u)p();else{Vo.und(n.pause)||(i.paused=Cs(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||Cs(e,t)),l=js(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-_o.now()}function h(){l>0&&!Fo.skipAnimation?(i.delayed=!0,c=_o.setTimeout(p,l),i.pauseQueue.add(d),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...n,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Xs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ys(e.get()):t.every((e=>e.noop))?Zs(e.get()):Ks(e.get(),t.every((e=>e.finished))),Zs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ks=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ys=e=>({value:e,cancelled:!0,finished:!1});function Js(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Hs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Ys(r)||i!==n.asyncId&&Ks(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new tl,a=new nl;return(async()=>{if(Fo.skipAnimation)throw el(n),a.result=Ks(r,!1),d(a),a;p(o);const s=Vo.obj(e)?{...e}:{...t,to:e};s.parentId=i,Uo(c,((e,t)=>{Vo.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Fo.skipAnimation)return el(n),Ks(r,!1);try{let t;t=Vo.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Ks(r.get(),!0,!1)}catch(e){if(e instanceof tl)g=e.result;else{if(!(e instanceof nl))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Vo.fun(a)&&_o.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function el(e,t){Go(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var tl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},nl=class extends Error{constructor(){super("SkipAnimationSignal")}},rl=e=>e instanceof ol,il=1,ol=class extends Wa{constructor(){super(...arguments),this.id=il++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ys(this);return e&&e.getValue()}to(...e){return Fo.to(this,e)}interpolate(...e){return ss(`${os}The "interpolate" function is deprecated in v9 (use "to" instead)`),Fo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Va(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||sa.sort(this),Va(this,{type:"priority",parent:this,priority:e})}},al=Symbol.for("SpringPhase"),sl=e=>(1&e[al])>0,ll=e=>(2&e[al])>0,cl=e=>(4&e[al])>0,ul=(e,t)=>t?e[al]|=3:e[al]&=-3,dl=(e,t)=>t?e[al]|=4:e[al]&=-5,hl=class extends ol{constructor(e,t){if(super(),this.animation=new Qs,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Vo.und(e)||!Vo.und(t)){const n=Vo.obj(e)?{...e}:{...t,from:e};Vo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(ll(this)||this._state.asyncTo)||cl(this)}get goal(){return Ma(this.animation.to)}get velocity(){const e=ys(this);return e instanceof Ss?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return sl(this)}get isAnimating(){return ll(this)}get isPaused(){return cl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=vs(r.to);!a&&La(r.to)&&(i=Qo(Ma(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==xs?1:a?a[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Vo.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Vo.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!Vo.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=ys(this),l=s.getValue();if(t){const e=Ma(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return _o.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ll(this)){const{to:e,config:t}=this.animation;_o.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Vo.und(e)?(n=this.queue||[],this.queue=[]):n=[Vo.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Xs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),el(this._state,e&&this._lastCallId),_o.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Vo.obj(n)?n[t]:n,(null==n||Rs(n))&&(n=void 0),r=Vo.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return sl(this)||(e.reverse&&([n,r]=[r,n]),r=Ma(r),Vo.und(r)?ys(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Hs(e,((e,t)=>/^on/.test(t)?Is(e,n):e))),vl(this,e,"onProps"),wl(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Gs(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{cl(this)||(dl(this,!0),Ko(o.pauseQueue),wl(this,"onPause",Ks(this,pl(this,this.animation.to)),this))},resume:()=>{cl(this)&&(dl(this,!1),ll(this)&&this._resume(),Ko(o.resumeQueue),wl(this,"onResume",Ks(this,pl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=fl(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ys(this));const r=!Vo.und(e.to),i=!Vo.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ys(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Vo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Wo(d,c);h&&(s.from=d),d=Ma(d);const p=!Wo(u,l);p&&this._focus(u);const f=Rs(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(qs(n={...n},t),t={...n,...t}),qs(e,t),Object.assign(e,t);for(const t in Vs)null==e[t]&&(e[t]=Vs[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;Vo.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(g,js(t.config,o),t.config!==a.config?js(a.config,o):void 0);let b=ys(this);if(!b||Vo.und(u))return n(Ks(this,!0));const v=Vo.und(t.reset)?i&&!t.default:!Vo.und(d)&&Cs(t.reset,o),w=v?d:this.get(),S=Ms(u),x=Vo.num(S)||Vo.arr(S)||cs(S),F=!f&&(!x||Cs(a.immediate||t.immediate,o));if(p){const e=ks(u);if(e!==b.constructor){if(!F)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(S)}}const $=b.constructor;let _=La(u),B=!1;if(!_){const e=v||!sl(this)&&h;(p||e)&&(B=Wo(Ms(w),S),_=!B),(Wo(s.immediate,F)||F)&&Wo(g.decay,m)&&Wo(g.velocity,y)||(_=!0)}if(B&&ll(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!f&&((_||La(l))&&(s.values=b.getPayload(),s.toValues=La(u)?null:$==xs?[1]:Qo(S)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),_)){const{onRest:e}=s;qo(bl,(e=>vl(this,t,e)));const r=Ks(this,pl(this,l));Ko(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&_o.batchedUpdates((()=>{s.changed=!v,e?.(r,this),v?js(a.onRest,r):s.onStart?.(r,this)}))}v&&this._set(w),f?n(Js(t.to,t,this._state,this)):_?this._start():ll(this)&&!p?this._pendingCalls.add(n):n(Zs(w))}_focus(e){const t=this.animation;e!==t.to&&(Ra(this)&&this._detach(),t.to=e,Ra(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;La(t)&&(Ua(t,this),rl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;La(e)&&Qa(e,this)}_set(e,t=!0){const n=Ma(e);if(!Vo.und(n)){const e=ys(this);if(!e||!Wo(n,e.getValue())){const r=ks(n);e&&e.constructor==r?e.setValue(n):bs(this,r.create(n)),e&&_o.batchedUpdates((()=>{this._onChange(n,t)}))}}return ys(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,wl(this,"onStart",Ks(this,pl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),js(this.animation.onChange,e,this)),js(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ys(this).reset(Ma(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ll(this)||(ul(this,!0),cl(this)||this._resume())}_resume(){Fo.skipAnimation?this.finish():sa.start(this)}_stop(e,t){if(ll(this)){ul(this,!1);const n=this.animation;qo(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Va(this,{type:"idle",parent:this});const r=t?Ys(this.get()):Ks(this.get(),pl(this,e??n.to));Ko(this._pendingCalls,r),n.changed&&(n.changed=!1,wl(this,"onRest",r,this))}}};function pl(e,t){const n=Ms(t);return Wo(Ms(e.get()),n)}function fl(e,t=e.loop,n=e.to){const r=js(t);if(r){const i=!0!==r&&Ls(r),o=(i||e).reverse,a=!i||i.reset;return gl({...e,loop:t,default:!1,pause:void 0,to:!o||Rs(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function gl(e){const{to:t,from:n}=e=Ls(e),r=new Set;return Vo.obj(t)&&yl(t,r),Vo.obj(n)&&yl(n,r),e.keys=r.size?Array.from(r):null,e}function ml(e){const t=gl(e);return Vo.und(t.default)&&(t.default=Hs(t)),t}function yl(e,t){Uo(e,((e,n)=>null!=e&&t.add(n)))}var bl=["onStart","onRest","onChange","onPause","onResume"];function vl(e,t,n){e.animation[n]=t[n]!==Ps(t,n)?Is(t[n],e.key):void 0}function wl(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Sl=["onStart","onChange","onRest"],xl=1,Fl=class{constructor(e,t){this.id=xl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Vo.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(gl(e)),this}start(e){let{queue:t}=this;return e?t=Qo(e).map(gl):this.queue=[],this._flush?this._flush(this,t):(Al(this,t),$l(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;qo(Qo(t),(t=>n[t].stop(!!e)))}else el(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Vo.und(e))this.start({pause:!0});else{const t=this.springs;qo(Qo(e),(e=>t[e].pause()))}return this}resume(e){if(Vo.und(e))this.start({pause:!1});else{const t=this.springs;qo(Qo(e),(e=>t[e].resume()))}return this}each(e){Uo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Go(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Go(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Go(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}_o.onFrame(this._onFrame)}};function $l(e,t){return Promise.all(t.map((t=>_l(e,t)))).then((t=>Xs(e,t)))}async function _l(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Vo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Vo.arr(i)||Vo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):qo(Sl,(n=>{const r=t[n];if(Vo.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ko(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Ps(t,"cancel");(u||p&&d.asyncId)&&h.push(Gs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ro,resume:Ro,start(t,n){p?(el(d,e._lastAsyncId),n(Ys(e))):(t.onRest=s,n(Js(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Xs(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=fl(t,a,i);if(n)return Al(e,[n]),_l(e,n,!0)}return l&&_o.batchedUpdates((()=>l(f,e,e.item))),f}function Bl(e,t){const n={...e.springs};return t&&qo(Qo(t),(e=>{Vo.und(e.keys)&&(e=gl(e)),Vo.obj(e.to)||(e={...e,to:void 0}),Dl(n,e,(e=>Ol(e)))})),kl(e,n),n}function kl(e,t){Uo(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ua(t,e))}))}function Ol(e,t){const n=new hl;return n.key=e,t&&Ua(n,t),n}function Dl(e,t,n){t.keys&&qo(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Al(e,t){qo(t,(t=>{Dl(e.springs,t,(t=>Ol(t,e)))}))}var El,jl,Cl=({children:e,...t})=>{const n=d(Il),i=t.pause||!!n.pause,l=t.immediate||!!n.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let l=i;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=n;return s((()=>{r.current=l,i==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:i,immediate:l})),[i,l]);const{Provider:c}=Il;return r.createElement(c,{value:t},e)},Il=(El=Cl,jl={},Object.assign(El,r.createContext(jl)),El.Provider._context=El,El.Consumer._context=El,El);Cl.Provider=Il.Provider,Cl.Consumer=Il.Consumer;var Pl=()=>{const e=[],t=function(t){ls(`${os}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return qo(e,((e,i)=>{if(Vo.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return qo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return qo(e,(e=>e.resume(...arguments))),this},t.set=function(t){qo(e,((e,n)=>{const r=Vo.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return qo(e,((e,r)=>{if(Vo.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return qo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return qo(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Vo.fun(e)?e(n,t):e};return t._getProps=n,t};function zl(e,t){const n=Vo.fun(e),[[r],i]=function(e,t,n){const r=Vo.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?Pl():void 0),[]),o=a(0),s=hs(),l=h((()=>({ctrls:[],queue:[],flush(e,t){const n=Bl(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?$l(e,t):new Promise((r=>{kl(e,n),l.queue.push((()=>{r($l(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],p=gs(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Fl(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=ml(n))}}h((()=>{qo(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>Bl(e,u[t]))),m=d(Cl),y=gs(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);us((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],qo(e,(e=>e()))),qo(c.current,((e,t)=>{i?.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ps((()=>()=>{qo(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var Hl=class extends ol{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Aa(...t);const n=this._get(),r=ks(n);bs(this,r.create(n))}advance(e){const t=this._get();Wo(t,this.get())||(ys(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Nl(this._active)&&Ll(this)}_get(){const e=Vo.arr(this.source)?this.source.map(Ma):Qo(Ma(this.source));return this.calc(...e)}_start(){this.idle&&!Nl(this._active)&&(this.idle=!1,qo(vs(this),(e=>{e.done=!1})),Fo.skipAnimation?(_o.batchedUpdates((()=>this.advance())),Ll(this)):sa.start(this))}_attach(){let e=1;qo(Qo(this.source),(t=>{La(t)&&Ua(t,this),rl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){qo(Qo(this.source),(e=>{La(e)&&Qa(e,this)})),this._active.clear(),Ll(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Qo(this.source).reduce(((e,t)=>Math.max(e,(rl(t)?t.priority:0)+1)),0))}};function Tl(e){return!1!==e.idle}function Nl(e){return!e.size||Array.from(e).every(Tl)}function Ll(e){e.idle||(e.idle=!0,qo(vs(e),(e=>{e.done=!0})),Va(e,{type:"idle",parent:e}))}Fo.assign({createStringInterpolator:is,to:(e,t)=>new Hl(e,t)});var Ml=/^--/;function Rl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ml.test(e)||Wl.hasOwnProperty(e)&&Wl[e]?(""+t).trim():t+"px"}var Vl={};var Wl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ql=["Webkit","Ms","Moz","O"];Wl=Object.keys(Wl).reduce(((e,t)=>(ql.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Wl);var Ul=/^(matrix|translate|scale|rotate|skew)/,Ql=/^(translate)/,Gl=/^(rotate|skew)/,Xl=(e,t)=>Vo.num(e)&&0!==e?e+t:e,Zl=(e,t)=>Vo.arr(e)?e.every((e=>Zl(e,t))):Vo.num(e)?e===t:parseFloat(e)===t,Kl=class extends $s{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Xl(e,"px"))).join(",")})`,Zl(e,0)]))),Uo(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Ul.test(t)){if(delete r[t],Vo.und(e))return;const n=Ql.test(t)?"px":Gl.test(t)?"deg":"";i.push(Qo(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Xl(i,n)})`,Zl(i,0)]:e=>[`${t}(${e.map((e=>Xl(e,n))).join(",")})`,Zl(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Yl(i,o)),super(r)}},Yl=class extends Wa{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return qo(this.inputs,((n,r)=>{const i=Ma(n[0]),[o,a]=this.transforms[r](Vo.arr(i)?i:n.map(Ma));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&qo(this.inputs,(e=>qo(e,(e=>La(e)&&Ua(e,this)))))}observerRemoved(e){0==e&&qo(this.inputs,(e=>qo(e,(e=>La(e)&&Qa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Va(this,e)}};Fo.assign({batchedUpdates:p,createStringInterpolator:is,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Jl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new $s(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Es(e)||"Anonymous";return(e=Vo.str(e)?o[e]||(o[e]=Os(e,i)):e[As]||(e[As]=Os(e,i))).displayName=`Animated(${t})`,e};return Uo(e,((t,n)=>{Vo.arr(e)&&(n=Es(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Vl[t]||(Vl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=Rl(t,r[t]);Ml.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Kl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),ec=Jl.animated;const tc=(e,t,n)=>t?Fi(n,t)||Fi(e,t):n||e,nc=(e,t)=>{const n=t||e.defaultValue;return Fi(e.collections,n)};var rc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(rc||(rc={}));const ic={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},oc=e=>t=>{const n=t.theme,r=nc(ic,n[rc.colorScheme]);return n.options&&n.options.color?tc(r,e,n.options.color):tc(r,e)},ac={Brand:{1:oc("Brand.1"),2:oc("Brand.2"),3:oc("Brand.3"),4:oc("Brand.4"),5:oc("Brand.5"),6:oc("Brand.6")},Primary:oc("Primary"),PrimaryDark:oc("PrimaryDark"),Secondary:oc("Secondary"),Accent:{Light:{1:oc("Accent.Light.1"),2:oc("Accent.Light.2"),3:oc("Accent.Light.3"),4:oc("Accent.Light.4"),5:oc("Accent.Light.5"),6:oc("Accent.Light.6")},Dark:{1:oc("Accent.Dark.1"),2:oc("Accent.Dark.2"),3:oc("Accent.Dark.3")}},Neutral:{1:oc("Neutral.1"),2:oc("Neutral.2"),3:oc("Neutral.3"),4:oc("Neutral.4"),5:oc("Neutral.5"),6:oc("Neutral.6"),7:oc("Neutral.7"),8:oc("Neutral.8")},Validation:{Green:{Text:oc("Validation.Green.Text"),Icon:oc("Validation.Green.Icon"),Border:oc("Validation.Green.Border"),Background:oc("Validation.Green.Background")},Orange:{Text:oc("Validation.Orange.Text"),Icon:oc("Validation.Orange.Icon"),Border:oc("Validation.Orange.Border"),Background:oc("Validation.Orange.Background"),Badge:oc("Validation.Orange.Badge")},Red:{Text:oc("Validation.Red.Text"),Icon:oc("Validation.Red.Icon"),Border:oc("Validation.Red.Border"),Background:oc("Validation.Red.Background")},Blue:{Text:oc("Validation.Blue.Text"),Icon:oc("Validation.Blue.Icon"),Border:oc("Validation.Blue.Border"),Background:oc("Validation.Blue.Background")}},Shadow:{Accent:oc("Shadow.Accent"),Red:oc("Shadow.Red"),Elevation:oc("Shadow.Elevation")}},sc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},lc=e=>Object.keys(sc).reduce(((t,n)=>{const r=sc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),cc=lc("max-width"),uc=(lc("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),dc=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,hc=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||ac.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${dc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,pc=f(hc)`
    animation-delay: -0.45s;
`,fc=f(hc)`
    animation-delay: -0.3s;
`,gc=f(hc)`
    animation-delay: -0.15s;
`,mc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},yc={collections:{base:{D1:{fontFamily:mc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:mc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:mc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:mc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:mc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:mc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:mc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:mc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:mc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:mc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:mc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:mc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:mc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:mc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},bc=e=>t=>{const n=t.theme,r=nc(yc,n[rc.textStyleScheme]);return n.options&&n.options.textStyle?tc(r,e,n.options.textStyle):tc(r,e)},vc={D1:{fontFamily:bc("D1.fontFamily"),fontSize:bc("D1.fontSize"),fontWeight:bc("D1.fontWeight"),lineHeight:bc("D1.lineHeight"),letterSpacing:bc("D1.letterSpacing")},D2:{fontFamily:bc("D2.fontFamily"),fontSize:bc("D2.fontSize"),fontWeight:bc("D2.fontWeight"),lineHeight:bc("D2.lineHeight"),letterSpacing:bc("D2.letterSpacing")},D3:{fontFamily:bc("D3.fontFamily"),fontSize:bc("D3.fontSize"),fontWeight:bc("D3.fontWeight"),lineHeight:bc("D3.lineHeight"),letterSpacing:bc("D3.letterSpacing")},D4:{fontFamily:bc("D4.fontFamily"),fontSize:bc("D4.fontSize"),fontWeight:bc("D4.fontWeight"),lineHeight:bc("D4.lineHeight"),letterSpacing:bc("D4.letterSpacing")},DBody:{fontFamily:bc("DBody.fontFamily"),fontSize:bc("DBody.fontSize"),fontWeight:bc("DBody.fontWeight"),lineHeight:bc("DBody.lineHeight"),letterSpacing:bc("DBody.letterSpacing")},H1:{fontFamily:bc("H1.fontFamily"),fontSize:bc("H1.fontSize"),fontWeight:bc("H1.fontWeight"),lineHeight:bc("H1.lineHeight"),letterSpacing:bc("H1.letterSpacing")},H2:{fontFamily:bc("H2.fontFamily"),fontSize:bc("H2.fontSize"),fontWeight:bc("H2.fontWeight"),lineHeight:bc("H2.lineHeight"),letterSpacing:bc("H2.letterSpacing")},H3:{fontFamily:bc("H3.fontFamily"),fontSize:bc("H3.fontSize"),fontWeight:bc("H3.fontWeight"),lineHeight:bc("H3.lineHeight"),letterSpacing:bc("H3.letterSpacing")},H4:{fontFamily:bc("H4.fontFamily"),fontSize:bc("H4.fontSize"),fontWeight:bc("H4.fontWeight"),lineHeight:bc("H4.lineHeight"),letterSpacing:bc("H4.letterSpacing")},H5:{fontFamily:bc("H5.fontFamily"),fontSize:bc("H5.fontSize"),fontWeight:bc("H5.fontWeight"),lineHeight:bc("H5.lineHeight"),letterSpacing:bc("H5.letterSpacing")},H6:{fontFamily:bc("H6.fontFamily"),fontSize:bc("H6.fontSize"),fontWeight:bc("H6.fontWeight"),lineHeight:bc("H6.lineHeight"),letterSpacing:bc("H6.letterSpacing")},Body:{fontFamily:bc("Body.fontFamily"),fontSize:bc("Body.fontSize"),fontWeight:bc("Body.fontWeight"),lineHeight:bc("Body.lineHeight"),letterSpacing:bc("Body.letterSpacing")},BodySmall:{fontFamily:bc("BodySmall.fontFamily"),fontSize:bc("BodySmall.fontSize"),fontWeight:bc("BodySmall.fontWeight"),lineHeight:bc("BodySmall.lineHeight"),letterSpacing:bc("BodySmall.letterSpacing")},XSmall:{fontFamily:bc("XSmall.fontFamily"),fontSize:bc("XSmall.fontSize"),fontWeight:bc("XSmall.fontWeight"),lineHeight:bc("XSmall.lineHeight"),letterSpacing:bc("XSmall.letterSpacing")}},wc=e=>{switch(e){case 700:case"bold":return mc.Bold;case 600:case"semibold":return mc.Semibold;case 300:case"light":return mc.Light;case 400:case"regular":return mc.Regular;default:return""}},Sc=(e,t)=>n=>{var r;const i=vc[e].fontFamily(n),o=vc[e].fontWeight(n);return Object.values(mc).includes(i)?m`
                font-family: ${wc(t)||wc(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=xc(t)||o)&&void 0!==r?r:"normal"};
        `},xc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Fc=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$c=(e,t,n=!1)=>r=>{const i=vc[e],o=i.fontSize(r);return m`
            ${Sc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},_c=(e=!1,t=!1,n=void 0)=>t?m`
            display: block;
            ${Fc(n)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${Fc(n)}
        `;var Bc;!function(e){e.D1=f.h1`
        ${e=>m`
                ${$c("D1",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${$c("D2",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${$c("D3",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${$c("D4",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${$c("DBody",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${$c("H1",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${$c("H2",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${$c("H3",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${$c("H4",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${$c("H5",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${$c("H6",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${$c("Body",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${$c("BodySmall",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${$c("XSmall",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Dc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Dc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Bc||(Bc={}));const kc=f.a`
    ${e=>m`
            ${$c(e.textStyle,e.weight)}
            color: ${ac.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ac.Secondary};

                svg {
                    color: ${ac.Secondary};
                }
            }
        `}
`,Oc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Dc=n=>{var{external:r=!1,children:i}=n,o=B(n,["external","children"]);return e(kc,Object.assign({},o,{children:[i,r&&t(Oc,{})]}))};var Ac;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ac||(Ac={}));const Ec={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${ac.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${ac.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ac.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${ac.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${ac.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ac.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jc=e=>t=>{var n;const r=t.theme,i=nc(Ec,r[rc.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?tc(i,e,r.options.designToken):tc(i,e)},Cc={InputBoxShadow:jc("InputBoxShadow"),InputErrorBoxShadow:jc("InputErrorBoxShadow"),ElevationBoxShadow:jc("ElevationBoxShadow"),Table:{Header:jc("Table.Header"),Cell:{Primary:jc("Table.Cell.Primary"),Secondary:jc("Table.Cell.Secondary"),Selected:jc("Table.Cell.Selected"),Hover:jc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:jc("Button.Danger.BackgroundColor"),Hover:jc("Button.Danger.Hover"),Primary:jc("Button.Danger.Primary"),Border:jc("Button.Danger.Border")}}};f.button`
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
                    background-color: ${ac.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Cc.Button.Danger.Border:ac.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Cc.Button.Danger.Primary:ac.Primary};
                    }
                `;case"light":return m`
                    background-color: ${ac.Neutral[8]};
                    border: 1px solid ${ac.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Cc.Button.Danger.Primary:ac.Primary};
                    }
                `;case"disabled":return m`
                    background-color: ${ac.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${ac.Neutral[3]};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Cc.Button.Danger.Primary:ac.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Cc.Button.Danger.Hover:ac.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Cc.Button.Danger.BackgroundColor:ac.Primary};
                    border: 1px solid transparent;

                    ${cc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${ac.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${$c("H5","semibold")}
                    }

                    ${cc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${$c("H4","semibold")}
                    }

                    ${cc.mobileS} {
                        height: auto;
                    }
                `}
`;const Ic=f((({color:n,className:r,size:i=18})=>e(uc,Object.assign({className:r,$size:i,$color:n},{children:[t(hc,{id:"inner1",$size:i-2,$borderWidth:2}),t(pc,{id:"inner2",$size:i-2,$borderWidth:2}),t(fc,{id:"inner3",$size:i-2,$borderWidth:2}),t(gc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Cc.Button.Danger.Primary:ac.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ac.Neutral[3](e);break;default:t=ac.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Pc;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Pc||(Pc={}));const zc=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Hc=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return m`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${zc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?ac.Neutral[4](e):e.$unchecked?ac.Accent.Light[2](e):ac.Primary(e)};
    }
`,Tc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Nc=f(ec.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Lc=f.ul`
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
        background: ${ac.Neutral[4]};
        border-right: 5px solid ${ac.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${cc.mobileL} {
        max-height: 15rem;
    }
`,Mc=f.li`
    :hover,
    :focus,
    :active {
        background: ${ac.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${ac.Accent.Light[5]};
            `}}
`,Rc=f.button`
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
        outline-color: ${ac.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Vc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Wc=f.div`
    ${$c("Body","regular")}
    color: ${ac.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vc}
`,qc=f.div`
    color: ${ac.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${$c("BodySmall","semibold")}
                `:m`
                    ${$c("Body","regular")}
                `}
`,Uc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Wc} {
                        display: inline;
                    }

                    ${qc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Qc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Gc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Xc=f((n=>{var{className:r,checked:i,disabled:o,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=B(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=a();s((()=>{p.current.indeterminate=l}),[l]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Hc,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:d,$disabled:o,$unchecked:!(l||i||o)},{children:[t(Tc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:o},h)),l?t(v,{"data-testid":"indeterminate"}):i?t(w,{"data-testid":"checkmark"}):o?t(S,{"data-testid":"disabled-empty-checkbox"}):t(x,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Zc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Kc=f.button`
    ${$c("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ac.Primary(e)};\n\t\t`}
`,Yc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Jc=f(Bc.Body)``,eu=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${ac.Validation.Red.Icon};
`,tu=f.button`
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
                background-color: ${ac.Neutral[7]};
            `}
    }
`,nu=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(tu,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))}));f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${ac.Neutral[5]};
    border-radius: 4px;
    background: ${ac.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${ac.Accent.Light[1]};
        box-shadow: ${Cc.InputBoxShadow};
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
                background: ${ac.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${ac.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${ac.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${ac.Validation.Red.Border};
                    box-shadow: ${Cc.InputErrorBoxShadow};
                }
            `:void 0}
`;const ru=f.input`
    ${$c("Body","regular")}
    color: ${ac.Neutral[1]};
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
        color: ${ac.Neutral[3]};
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
`,iu=f.li`
    background: ${ac.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,ou=f(ru)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,au=f($)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${ac.Neutral[3]};
`,su=f(nu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${ac.Neutral[3]};
    cursor: pointer;
`,lu=f(F)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${ac.Neutral[3]};
`,cu=c(((n,r)=>{const{onClear:i}=n,o=B(n,["onClear"]);return e(iu,{children:[t(au,{}),t(ou,Object.assign({ref:r},o)),o.value&&t(su,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(lu,{})}))]},"search")})),uu=r=>{var{listItems:i,listExtractor:l,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:S,onRetry:x,itemsLoadState:F="success",itemTruncationType:$="end",itemMaxLines:_=2,labelDisplayType:k="inline",renderListItem:O,onBlur:D,hideNoResultsDisplay:A,renderCustomCallToAction:E}=r,j=B(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,I]=o(0),[P,z]=o(""),[H,T]=o(i),[N,L]=o(0),M=zl({height:N}),R=a(),V=a(),W=a([]),q=a(),U=a(),Q=a(C),G=a(H),X=e=>{Q.current=e,I(e)},Z=e=>{G.current=e,T(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{ee(P)}),[P]),s((()=>{if(z(""),h){if(setTimeout((()=>{L(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else L(0)}),[h]),s((()=>{if(h){const e=te();L(e)}}),[H,F]),s((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>l?l(e):e.toString(),Y=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Pc.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},J=e=>!!vo(w,(t=>So(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{x&&x()},se=()=>{D&&D()},le=r=>e(n,{children:[t(Qc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:r})),t(Gc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=K(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":k;return e(Uc,Object.assign({$labelDisplayType:l},{children:[t(Wc,Object.assign({$truncateType:$,$maxLines:_,"aria-label":i},{children:"middle"===$&&a?le(i):i})),o&&t(qc,Object.assign({$truncateType:$,$maxLines:_,$labelDisplayType:k,"aria-label":o},{children:"middle"===$&&s?le(o):o}))]}))},ue=()=>{if(!x||x&&"success"===F)return H.map(((n,r)=>t(Mc,Object.assign({$checked:J(n)&&!v},{children:e(Rc,Object.assign({$hasNextLineLabel:"next-line"===k&&H.length>0&&l&&"string"!=typeof l(H[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Xc,{checked:J(n),displaySize:"small"}),O?O(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(n,r))))},de=()=>{if(v&&H.length>0&&!P&&"success"===F)return t(Zc,{children:t(Kc,Object.assign({onClick:S,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!A&&(P||!p)&&0===H.length&&"success"===F)return e(Yc,Object.assign({"data-testid":"list-no-results"},{children:[t(eu,{"data-testid":"no-result-icon"}),t(Jc,{children:"No results found."})]}),"noResults")},pe=()=>{if(x&&"loading"===F)return e(Yc,Object.assign({"data-testid":"list-loading"},{children:[t(Ic,{$buttonStyle:"secondary",size:24}),t(Jc,{children:"Loading..."})]}),"loading")},fe=()=>{if(x&&"fail"===F)return e(Yc,Object.assign({"data-testid":"list-fail"},{children:[t(eu,{"data-testid":"load-error-icon"}),t(Jc,{children:"Failed to load."}),t(Kc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(Nc,Object.assign({style:M,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(Lc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},j,{children:[(p||m)&&"success"===F?t(cu,{ref:q,onChange:ie,value:P,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&E)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:E(y,H)}))})()]}))})},du="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",hu=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,pu=m`
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
        outline: 2px solid ${ac.Accent.Light[3]};
    }
`,fu=f.button`
    ${pu}
    cursor: pointer;
`;f.div`
    ${pu}
`;const gu=g`
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
`,mu=f.div`
    position: relative;
    border: 1px solid ${ac.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ac.Neutral[8]};

    :focus-within {
        border: 1px solid ${ac.Accent.Light[1]};
        box-shadow: ${Cc.InputBoxShadow};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${gu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${ac.Neutral[6](e)};

                ${fu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ac.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${fu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${ac.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ac.Validation.Red.Border(e)};
                    box-shadow: ${Cc.InputErrorBoxShadow};
                }
            `:void 0}
`,yu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${du};
    margin-left: 1rem;
`,bu=f(_)`
    color: ${ac.Neutral[3]};
    height: ${vc.Body.fontSize}rem;
    width: ${vc.Body.fontSize}rem;
`,vu=f.div`
    height: 1px;
    background: ${ac.Neutral[5]};
    margin: 0 0.5rem;
`,wu=f.div`
    display: flex;
    flex: 1;
`,Su=f(Bc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,xu=f(Su)`
    color: ${ac.Neutral[3]};
`,Fu=({children:e,show:n,error:r,disabled:i,testId:o,onBlur:l,readOnly:c,className:u})=>{const d=a();return((e,t,n="window",r)=>{const i=a();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;n&&l()}}),"document"),t(hu,Object.assign({className:u},{children:t(mu,Object.assign({ref:d,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":o},{children:e}))}))},$u=r=>{var{selectedOptions:i,placeholder:l="Select",options:c,className:u,disabled:d,error:h,"data-testid":p,enableSearch:f=!1,searchFunction:g,searchPlaceholder:m,valueExtractor:y,listExtractor:b,onSelectOptions:v,listStyleWidth:w,onShowOptions:S,onHideOptions:x,onRetry:F,onBlur:$,optionsLoadState:_="success",optionTruncationType:k="end"}=r,O=B(r,["selectedOptions","placeholder","options","className","disabled","error","data-testid","enableSearch","searchFunction","searchPlaceholder","valueExtractor","listExtractor","onSelectOptions","listStyleWidth","onShowOptions","onHideOptions","onRetry","onBlur","optionsLoadState","optionTruncationType"]);const[D,A]=o(i||[]),[E,j]=o(!1),C=a();s((()=>{A(i||[])}),[i]);const I=(e,t)=>{const n=[...D],r=go(D,(e=>(y?y(e):e)===t));r>-1?n.splice(r,1):n.push(e),A(n),H(!1),C&&C.current.focus(),T(n)},P=()=>{E&&(j(!1),H(!1)),C&&C.current.focus()},z=()=>{D&&D.length>0?(A([]),T([])):(A(c),T(c))},H=e=>{!e&&x&&x(),e&&S&&S()},T=e=>{v&&v(e)};return e(Fu,Object.assign({show:E,error:h&&!E,disabled:d,testId:p,className:u,onBlur:()=>{null==$||$(),j(!1),H(!1)}},{children:[t(fu,Object.assign({ref:C,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),d||(j(!E),H(!E),E&&(null==$||$()))},onBlur:()=>{E||null==$||$()}},O,{children:e(n,{children:[t(wu,{children:D&&0!==D.length?t(Su,{children:D&&0!=D.length?c&&D.length===c.length?"All selected":`${D.length} selected`:l}):t(xu,Object.assign({truncateType:k},{children:l}))}),t(yu,Object.assign({expanded:E},{children:t(bu,{})}))]})})),E&&t(vu,{}),c&&c.length>0||F?t(uu,{listItems:c,onSelectItem:I,onDismiss:P,valueExtractor:y,listExtractor:b,listStyleWidth:w,visible:E,enableSearch:f,searchFunction:g,searchPlaceholder:m,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:D,onSelectAll:z,onRetry:F,itemsLoadState:_,itemTruncationType:k}):null]}))};export{$u as InputMultiSelect};
//# sourceMappingURL=index.js.map
