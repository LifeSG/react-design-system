import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useState as a,useRef as s,forwardRef as l,useCallback as c,useContext as u,useMemo as d}from"react";import{unstable_batchedUpdates as h}from"react-dom";import p,{keyframes as f,css as g}from"styled-components";var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var y=function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1};var v=function(){this.__data__=[],this.size=0};var b=function(t,e){return t===e||t!=t&&e!=e},w=b;var _=function(t,e){for(var n=t.length;n--;)if(w(t[n][0],e))return n;return-1},S=_,x=Array.prototype.splice;var $=_;var k=_;var F=_;var O=v,j=function(t){var e=this.__data__,n=S(e,t);return!(n<0)&&(n==e.length-1?e.pop():x.call(e,n,1),--this.size,!0)},B=function(t){var e=this.__data__,n=$(e,t);return n<0?void 0:e[n][1]},C=function(t){return k(this.__data__,t)>-1},z=function(t,e){var n=this.__data__,r=F(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function A(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}A.prototype.clear=O,A.prototype.delete=j,A.prototype.get=B,A.prototype.has=C,A.prototype.set=z;var P=A,D=P;var E=function(){this.__data__=new D,this.size=0};var I=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var H=function(t){return this.__data__.get(t)};var N=function(t){return this.__data__.has(t)},M="object"==typeof m&&m&&m.Object===Object&&m,T=M,V="object"==typeof self&&self&&self.Object===Object&&self,L=T||V||Function("return this")(),R=L.Symbol,W=R,q=Object.prototype,U=q.hasOwnProperty,Q=q.toString,G=W?W.toStringTag:void 0;var X=function(t){var e=U.call(t,G),n=t[G];try{t[G]=void 0;var r=!0}catch(t){}var i=Q.call(t);return r&&(e?t[G]=n:delete t[G]),i},Z=Object.prototype.toString;var K=X,Y=function(t){return Z.call(t)},J=R?R.toStringTag:void 0;var tt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":J&&J in Object(t)?K(t):Y(t)};var et=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},nt=tt,rt=et;var it,ot=function(t){if(!rt(t))return!1;var e=nt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},at=L["__core-js_shared__"],st=(it=/[^.]+$/.exec(at&&at.keys&&at.keys.IE_PROTO||""))?"Symbol(src)_1."+it:"";var lt=function(t){return!!st&&st in t},ct=Function.prototype.toString;var ut=function(t){if(null!=t){try{return ct.call(t)}catch(t){}try{return t+""}catch(t){}}return""},dt=ot,ht=lt,pt=et,ft=ut,gt=/^\[object .+?Constructor\]$/,mt=Function.prototype,yt=Object.prototype,vt=mt.toString,bt=yt.hasOwnProperty,wt=RegExp("^"+vt.call(bt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _t=function(t){return!(!pt(t)||ht(t))&&(dt(t)?wt:gt).test(ft(t))},St=function(t,e){return null==t?void 0:t[e]};var xt=function(t,e){var n=St(t,e);return _t(n)?n:void 0},$t=xt(L,"Map"),kt=xt(Object,"create"),Ft=kt;var Ot=function(){this.__data__=Ft?Ft(null):{},this.size=0};var jt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Bt=kt,Ct=Object.prototype.hasOwnProperty;var zt=function(t){var e=this.__data__;if(Bt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ct.call(e,t)?e[t]:void 0},At=kt,Pt=Object.prototype.hasOwnProperty;var Dt=kt;var Et=Ot,It=jt,Ht=zt,Nt=function(t){var e=this.__data__;return At?void 0!==e[t]:Pt.call(e,t)},Mt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Dt&&void 0===e?"__lodash_hash_undefined__":e,this};function Tt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Tt.prototype.clear=Et,Tt.prototype.delete=It,Tt.prototype.get=Ht,Tt.prototype.has=Nt,Tt.prototype.set=Mt;var Vt=Tt,Lt=P,Rt=$t;var Wt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var qt=function(t,e){var n=t.__data__;return Wt(e)?n["string"==typeof e?"string":"hash"]:n.map},Ut=qt;var Qt=qt;var Gt=qt;var Xt=qt;var Zt=function(){this.size=0,this.__data__={hash:new Vt,map:new(Rt||Lt),string:new Vt}},Kt=function(t){var e=Ut(this,t).delete(t);return this.size-=e?1:0,e},Yt=function(t){return Qt(this,t).get(t)},Jt=function(t){return Gt(this,t).has(t)},te=function(t,e){var n=Xt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ee(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ee.prototype.clear=Zt,ee.prototype.delete=Kt,ee.prototype.get=Yt,ee.prototype.has=Jt,ee.prototype.set=te;var ne=ee,re=P,ie=$t,oe=ne;var ae=P,se=E,le=I,ce=H,ue=N,de=function(t,e){var n=this.__data__;if(n instanceof re){var r=n.__data__;if(!ie||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new oe(r)}return n.set(t,e),this.size=n.size,this};function he(t){var e=this.__data__=new ae(t);this.size=e.size}he.prototype.clear=se,he.prototype.delete=le,he.prototype.get=ce,he.prototype.has=ue,he.prototype.set=de;var pe=he;var fe=ne,ge=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},me=function(t){return this.__data__.has(t)};function ye(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new fe;++e<n;)this.add(t[e])}ye.prototype.add=ye.prototype.push=ge,ye.prototype.has=me;var ve=ye,be=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},we=function(t,e){return t.has(e)};var _e=function(t,e,n,r,i,o){var a=1&n,s=t.length,l=e.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(t),u=o.get(e);if(c&&u)return c==e&&u==t;var d=-1,h=!0,p=2&n?new ve:void 0;for(o.set(t,e),o.set(e,t);++d<s;){var f=t[d],g=e[d];if(r)var m=a?r(g,f,d,e,t,o):r(f,g,d,t,e,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!be(e,(function(t,e){if(!we(p,e)&&(f===t||i(f,t,n,r,o)))return p.push(e)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(t),o.delete(e),h};var Se=L.Uint8Array,xe=b,$e=_e,ke=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},Fe=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Oe=R?R.prototype:void 0,je=Oe?Oe.valueOf:void 0;var Be=function(t,e,n,r,i,o,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!o(new Se(t),new Se(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return xe(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var s=ke;case"[object Set]":var l=1&r;if(s||(s=Fe),t.size!=e.size&&!l)return!1;var c=a.get(t);if(c)return c==e;r|=2,a.set(t,e);var u=$e(s(t),s(e),r,i,o,a);return a.delete(t),u;case"[object Symbol]":if(je)return je.call(t)==je.call(e)}return!1};var Ce=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t},ze=Array.isArray,Ae=Ce,Pe=ze;var De=function(t,e,n){var r=e(t);return Pe(t)?r:Ae(r,n(t))};var Ee=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o},Ie=function(){return[]},He=Object.prototype.propertyIsEnumerable,Ne=Object.getOwnPropertySymbols,Me=Ne?function(t){return null==t?[]:(t=Object(t),Ee(Ne(t),(function(e){return He.call(t,e)})))}:Ie;var Te=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};var Ve=function(t){return null!=t&&"object"==typeof t},Le=tt,Re=Ve;var We=function(t){return Re(t)&&"[object Arguments]"==Le(t)},qe=Ve,Ue=Object.prototype,Qe=Ue.hasOwnProperty,Ge=Ue.propertyIsEnumerable,Xe=We(function(){return arguments}())?We:function(t){return qe(t)&&Qe.call(t,"callee")&&!Ge.call(t,"callee")},Ze={exports:{}};var Ke=function(){return!1};!function(t,e){var n=L,r=Ke,i=e&&!e.nodeType&&e,o=i&&t&&!t.nodeType&&t,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;t.exports=s}(Ze,Ze.exports);var Ye=/^(?:0|[1-9]\d*)$/;var Je=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Ye.test(t))&&t>-1&&t%1==0&&t<e};var tn=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},en=tt,nn=tn,rn=Ve,on={};on["[object Float32Array]"]=on["[object Float64Array]"]=on["[object Int8Array]"]=on["[object Int16Array]"]=on["[object Int32Array]"]=on["[object Uint8Array]"]=on["[object Uint8ClampedArray]"]=on["[object Uint16Array]"]=on["[object Uint32Array]"]=!0,on["[object Arguments]"]=on["[object Array]"]=on["[object ArrayBuffer]"]=on["[object Boolean]"]=on["[object DataView]"]=on["[object Date]"]=on["[object Error]"]=on["[object Function]"]=on["[object Map]"]=on["[object Number]"]=on["[object Object]"]=on["[object RegExp]"]=on["[object Set]"]=on["[object String]"]=on["[object WeakMap]"]=!1;var an=function(t){return rn(t)&&nn(t.length)&&!!on[en(t)]};var sn=function(t){return function(e){return t(e)}},ln={exports:{}};!function(t,e){var n=M,r=e&&!e.nodeType&&e,i=r&&t&&!t.nodeType&&t,o=i&&i.exports===r&&n.process,a=function(){try{var t=i&&i.require&&i.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a}(ln,ln.exports);var cn=an,un=sn,dn=ln.exports,hn=dn&&dn.isTypedArray,pn=hn?un(hn):cn,fn=Te,gn=Xe,mn=ze,yn=Ze.exports,vn=Je,bn=pn,wn=Object.prototype.hasOwnProperty;var _n=function(t,e){var n=mn(t),r=!n&&gn(t),i=!n&&!r&&yn(t),o=!n&&!r&&!i&&bn(t),a=n||r||i||o,s=a?fn(t.length,String):[],l=s.length;for(var c in t)!e&&!wn.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||vn(c,l))||s.push(c);return s},Sn=Object.prototype;var xn=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Sn)};var $n=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),kn=xn,Fn=$n,On=Object.prototype.hasOwnProperty;var jn=ot,Bn=tn;var Cn=_n,zn=function(t){if(!kn(t))return Fn(t);var e=[];for(var n in Object(t))On.call(t,n)&&"constructor"!=n&&e.push(n);return e},An=function(t){return null!=t&&Bn(t.length)&&!jn(t)};var Pn=function(t){return An(t)?Cn(t):zn(t)},Dn=De,En=Me,In=Pn;var Hn=function(t){return Dn(t,In,En)},Nn=Object.prototype.hasOwnProperty;var Mn=function(t,e,n,r,i,o){var a=1&n,s=Hn(t),l=s.length;if(l!=Hn(e).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in e:Nn.call(e,u)))return!1}var d=o.get(t),h=o.get(e);if(d&&h)return d==e&&h==t;var p=!0;o.set(t,e),o.set(e,t);for(var f=a;++c<l;){var g=t[u=s[c]],m=e[u];if(r)var y=a?r(m,g,u,e,t,o):r(g,m,u,t,e,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var v=t.constructor,b=e.constructor;v==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(t),o.delete(e),p},Tn=xt(L,"DataView"),Vn=$t,Ln=xt(L,"Promise"),Rn=xt(L,"Set"),Wn=xt(L,"WeakMap"),qn=tt,Un=ut,Qn=Un(Tn),Gn=Un(Vn),Xn=Un(Ln),Zn=Un(Rn),Kn=Un(Wn),Yn=qn;(Tn&&"[object DataView]"!=Yn(new Tn(new ArrayBuffer(1)))||Vn&&"[object Map]"!=Yn(new Vn)||Ln&&"[object Promise]"!=Yn(Ln.resolve())||Rn&&"[object Set]"!=Yn(new Rn)||Wn&&"[object WeakMap]"!=Yn(new Wn))&&(Yn=function(t){var e=qn(t),n="[object Object]"==e?t.constructor:void 0,r=n?Un(n):"";if(r)switch(r){case Qn:return"[object DataView]";case Gn:return"[object Map]";case Xn:return"[object Promise]";case Zn:return"[object Set]";case Kn:return"[object WeakMap]"}return e});var Jn=pe,tr=_e,er=Be,nr=Mn,rr=Yn,ir=ze,or=Ze.exports,ar=pn,sr="[object Object]",lr=Object.prototype.hasOwnProperty;var cr=function(t,e,n,r,i,o){var a=ir(t),s=ir(e),l=a?"[object Array]":rr(t),c=s?"[object Array]":rr(e),u=(l="[object Arguments]"==l?sr:l)==sr,d=(c="[object Arguments]"==c?sr:c)==sr,h=l==c;if(h&&or(t)){if(!or(e))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new Jn),a||ar(t)?tr(t,e,n,r,i,o):er(t,e,l,n,r,i,o);if(!(1&n)){var p=u&&lr.call(t,"__wrapped__"),f=d&&lr.call(e,"__wrapped__");if(p||f){var g=p?t.value():t,m=f?e.value():e;return o||(o=new Jn),i(g,m,n,r,o)}}return!!h&&(o||(o=new Jn),nr(t,e,n,r,i,o))},ur=Ve;var dr=function t(e,n,r,i,o){return e===n||(null==e||null==n||!ur(e)&&!ur(n)?e!=e&&n!=n:cr(e,n,r,i,t,o))},hr=pe,pr=dr;var fr=et;var gr=function(t){return t==t&&!fr(t)},mr=gr,yr=Pn;var vr=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}},br=function(t,e,n,r){var i=n.length,o=i,a=!r;if(null==t)return!o;for(t=Object(t);i--;){var s=n[i];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<o;){var l=(s=n[i])[0],c=t[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in t))return!1}else{var d=new hr;if(r)var h=r(c,u,l,t,e,d);if(!(void 0===h?pr(u,c,3,r,d):h))return!1}}return!0},wr=function(t){for(var e=yr(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,mr(i)]}return e},_r=vr;var Sr=function(t){var e=wr(t);return 1==e.length&&e[0][2]?_r(e[0][0],e[0][1]):function(n){return n===t||br(n,t,e)}},xr=tt,$r=Ve;var kr=function(t){return"symbol"==typeof t||$r(t)&&"[object Symbol]"==xr(t)},Fr=ze,Or=kr,jr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Br=/^\w*$/;var Cr=function(t,e){if(Fr(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Or(t))||(Br.test(t)||!jr.test(t)||null!=e&&t in Object(e))},zr=ne;function Ar(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ar.Cache||zr),n}Ar.Cache=zr;var Pr=Ar;var Dr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Er=/\\(\\)?/g,Ir=function(t){var e=Pr(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Dr,(function(t,n,r,i){e.push(r?i.replace(Er,"$1"):n||t)})),e}));var Hr=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Nr=ze,Mr=kr,Tr=R?R.prototype:void 0,Vr=Tr?Tr.toString:void 0;var Lr=function t(e){if("string"==typeof e)return e;if(Nr(e))return Hr(e,t)+"";if(Mr(e))return Vr?Vr.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Rr=Lr;var Wr=ze,qr=Cr,Ur=Ir,Qr=function(t){return null==t?"":Rr(t)};var Gr=function(t,e){return Wr(t)?t:qr(t,e)?[t]:Ur(Qr(t))},Xr=kr;var Zr=function(t){if("string"==typeof t||Xr(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e},Kr=Gr,Yr=Zr;var Jr=function(t,e){for(var n=0,r=(e=Kr(e,t)).length;null!=t&&n<r;)t=t[Yr(e[n++])];return n&&n==r?t:void 0},ti=Jr;var ei=function(t,e,n){var r=null==t?void 0:ti(t,e);return void 0===r?n:r};var ni=Gr,ri=Xe,ii=ze,oi=Je,ai=tn,si=Zr;var li=function(t,e){return null!=t&&e in Object(t)},ci=function(t,e,n){for(var r=-1,i=(e=ni(e,t)).length,o=!1;++r<i;){var a=si(e[r]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&ai(i)&&oi(a,i)&&(ii(t)||ri(t))};var ui=dr,di=ei,hi=function(t,e){return null!=t&&ci(t,e,li)},pi=Cr,fi=gr,gi=vr,mi=Zr;var yi=Jr;var vi=function(t){return function(e){return null==e?void 0:e[t]}},bi=function(t){return function(e){return yi(e,t)}},wi=Cr,_i=Zr;var Si=Sr,xi=function(t,e){return pi(t)&&fi(e)?gi(mi(t),e):function(n){var r=di(n,t);return void 0===r&&r===e?hi(n,t):ui(e,r,3)}},$i=function(t){return t},ki=ze,Fi=function(t){return wi(t)?vi(_i(t)):bi(t)};var Oi=/\s/;var ji=function(t){for(var e=t.length;e--&&Oi.test(t.charAt(e)););return e},Bi=/^\s+/;var Ci=function(t){return t?t.slice(0,ji(t)+1).replace(Bi,""):t},zi=et,Ai=kr,Pi=/^[-+]0x[0-9a-f]+$/i,Di=/^0b[01]+$/i,Ei=/^0o[0-7]+$/i,Ii=parseInt;var Hi=function(t){if("number"==typeof t)return t;if(Ai(t))return NaN;if(zi(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=zi(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=Ci(t);var n=Di.test(t);return n||Ei.test(t)?Ii(t.slice(2),n?2:8):Pi.test(t)?NaN:+t};var Ni=function(t){return t?Infinity===(t=Hi(t))||-Infinity===t?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var Mi=y,Ti=function(t){return"function"==typeof t?t:null==t?$i:"object"==typeof t?ki(t)?xi(t[0],t[1]):Si(t):Fi(t)},Vi=function(t){var e=Ni(t),n=e%1;return e==e?n?e-n:e:0},Li=Math.max;var Ri=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:Vi(n);return i<0&&(i=Li(r+i,0)),Mi(t,Ti(e),i)},Wi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qi=i.createContext&&i.createContext(Wi),Ui=function(){return Ui=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Ui.apply(this,arguments)},Qi=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function Gi(t){return t&&t.map((function(t,e){return i.createElement(t.tag,Ui({key:e},t.attr),Gi(t.child))}))}function Xi(t){return function(e){return i.createElement(Zi,Ui({attr:Ui({},t.attr)},e),Gi(t.child))}}function Zi(t){var e=function(e){var n,r=t.attr,o=t.size,a=t.title,s=Qi(t,["attr","size","title"]),l=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),i.createElement("svg",Ui({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,s,{className:n,style:Ui(Ui({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&i.createElement("title",null,a),t.children)};return void 0!==qi?i.createElement(qi.Consumer,null,(function(t){return e(t)})):e(Wi)}function Ki(t){return Xi({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.6 48 48 141.601 48 256s93.6 208 208 208 208-93.601 208-208S370.4 48 256 48zm24 312h-48v-40h48v40zm0-88h-48V144h48v128z"}}]})(t)}let Yi=go();const Ji=t=>uo(t,Yi);let to=go();Ji.write=t=>uo(t,to);let eo=go();Ji.onStart=t=>uo(t,eo);let no=go();Ji.onFrame=t=>uo(t,no);let ro=go();Ji.onFinish=t=>uo(t,ro);let io=[];Ji.setTimeout=(t,e)=>{let n=Ji.now()+e,r=()=>{let t=io.findIndex((t=>t.cancel==r));~t&&io.splice(t,1),lo-=~t?1:0},i={time:n,handler:t,cancel:r};return io.splice(oo(n),0,i),lo+=1,ho(),i};let oo=t=>~(~io.findIndex((e=>e.time>t))||~io.length);Ji.cancel=t=>{eo.delete(t),no.delete(t),Yi.delete(t),to.delete(t),ro.delete(t)},Ji.sync=t=>{co=!0,Ji.batchedUpdates(t),co=!1},Ji.throttle=t=>{let e;function n(){try{t(...e)}finally{e=null}}function r(...t){e=t,Ji.onStart(n)}return r.handler=t,r.cancel=()=>{eo.delete(n),e=null},r};let ao="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ji.use=t=>ao=t,Ji.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ji.batchedUpdates=t=>t(),Ji.catch=console.error,Ji.frameLoop="always",Ji.advance=()=>{"demand"!==Ji.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):fo()};let so=-1,lo=0,co=!1;function uo(t,e){co?(e.delete(t),t(0)):(e.add(t),ho())}function ho(){so<0&&(so=0,"demand"!==Ji.frameLoop&&ao(po))}function po(){~so&&(ao(po),Ji.batchedUpdates(fo))}function fo(){let t=so;so=Ji.now();let e=oo(so);e&&(mo(io.splice(0,e),(t=>t.handler())),lo-=e),eo.flush(),Yi.flush(t?Math.min(64,so-t):16.667),no.flush(),to.flush(),ro.flush(),lo||(so=-1)}function go(){let t=new Set,e=t;return{add(n){lo+=e!=t||t.has(n)?0:1,t.add(n)},delete:n=>(lo-=e==t&&t.has(n)?1:0,t.delete(n)),flush(n){e.size&&(t=new Set,lo-=e.size,mo(e,(e=>e(n)&&t.add(e))),lo+=t.size,e=t)}}}function mo(t,e){t.forEach((t=>{try{e(t)}catch(t){Ji.catch(t)}}))}function yo(){}const vo={arr:Array.isArray,obj:t=>!!t&&"Object"===t.constructor.name,fun:t=>"function"==typeof t,str:t=>"string"==typeof t,num:t=>"number"==typeof t,und:t=>void 0===t};function bo(t,e){if(vo.arr(t)){if(!vo.arr(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return t===e}const wo=(t,e)=>t.forEach(e);function _o(t,e,n){if(vo.arr(t))for(let r=0;r<t.length;r++)e.call(n,t[r],`${r}`);else for(const r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r)}const So=t=>vo.und(t)?[]:vo.arr(t)?t:[t];function xo(t,e){if(t.size){const n=Array.from(t);t.clear(),wo(n,e)}}const $o=(t,...e)=>xo(t,(t=>t(...e))),ko=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Fo,Oo,jo=null,Bo=!1,Co=yo;var zo=Object.freeze({__proto__:null,get createStringInterpolator(){return Fo},get to(){return Oo},get colors(){return jo},get skipAnimation(){return Bo},get willAdvance(){return Co},assign:t=>{t.to&&(Oo=t.to),t.now&&(Ji.now=t.now),void 0!==t.colors&&(jo=t.colors),null!=t.skipAnimation&&(Bo=t.skipAnimation),t.createStringInterpolator&&(Fo=t.createStringInterpolator),t.requestAnimationFrame&&Ji.use(t.requestAnimationFrame),t.batchedUpdates&&(Ji.batchedUpdates=t.batchedUpdates),t.willAdvance&&(Co=t.willAdvance),t.frameLoop&&(Ji.frameLoop=t.frameLoop)}});const Ao=new Set;let Po=[],Do=[],Eo=0;const Io={get idle(){return!Ao.size&&!Po.length},start(t){Eo>t.priority?(Ao.add(t),Ji.onStart(Ho)):(No(t),Ji(To))},advance:To,sort(t){if(Eo)Ji.onFrame((()=>Io.sort(t)));else{const e=Po.indexOf(t);~e&&(Po.splice(e,1),Mo(t))}},clear(){Po=[],Ao.clear()}};function Ho(){Ao.forEach(No),Ao.clear(),Ji(To)}function No(t){Po.includes(t)||Mo(t)}function Mo(t){Po.splice(function(t,e){const n=t.findIndex(e);return n<0?t.length:n}(Po,(e=>e.priority>t.priority)),0,t)}function To(t){const e=Do;for(let n=0;n<Po.length;n++){const r=Po[n];Eo=r.priority,r.idle||(Co(r),r.advance(t),r.idle||e.push(r))}return Eo=0,Do=Po,Do.length=0,Po=e,Po.length>0}const Vo="[-+]?\\d*\\.?\\d+";function Lo(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const Ro=new RegExp("rgb"+Lo(Vo,Vo,Vo)),Wo=new RegExp("rgba"+Lo(Vo,Vo,Vo,Vo)),qo=new RegExp("hsl"+Lo(Vo,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%")),Uo=new RegExp("hsla"+Lo(Vo,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%",Vo)),Qo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Go=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Xo=/^#([0-9a-fA-F]{6})$/,Zo=/^#([0-9a-fA-F]{8})$/;function Ko(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Yo(t,e,n){const r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,o=Ko(i,r,t+1/3),a=Ko(i,r,t),s=Ko(i,r,t-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Jo(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function ta(t){return(parseFloat(t)%360+360)%360/360}function ea(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(255*e)}function na(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function ra(t){let e=function(t){let e;return"number"==typeof t?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=Xo.exec(t))?parseInt(e[1]+"ff",16)>>>0:jo&&void 0!==jo[t]?jo[t]:(e=Ro.exec(t))?(Jo(e[1])<<24|Jo(e[2])<<16|Jo(e[3])<<8|255)>>>0:(e=Wo.exec(t))?(Jo(e[1])<<24|Jo(e[2])<<16|Jo(e[3])<<8|ea(e[4]))>>>0:(e=Qo.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=Zo.exec(t))?parseInt(e[1],16)>>>0:(e=Go.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=qo.exec(t))?(255|Yo(ta(e[1]),na(e[2]),na(e[3])))>>>0:(e=Uo.exec(t))?(Yo(ta(e[1]),na(e[2]),na(e[3]))|ea(e[4]))>>>0:null}(t);return null===e?t:(e=e||0,`rgba(${(4278190080&e)>>>24}, ${(16711680&e)>>>16}, ${(65280&e)>>>8}, ${(255&e)/255})`)}const ia=(t,e,n)=>{if(vo.fun(t))return t;if(vo.arr(t))return ia({range:t,output:e,extrapolate:n});if(vo.str(t.output[0]))return Fo(t);const r=t,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(t=>t);return t=>{const e=function(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}(t,o);return function(t,e,n,r,i,o,a,s,l){let c=l?l(t):t;if(c<e){if("identity"===a)return c;"clamp"===a&&(c=e)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(e===n)return t<=e?r:i;e===-1/0?c=-c:n===1/0?c-=e:c=(c-e)/(n-e);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(t,o[e],o[e+1],i[e],i[e+1],l,a,s,r.map)}};function oa(){return oa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oa.apply(this,arguments)}const aa=Symbol.for("FluidValue.get"),sa=Symbol.for("FluidValue.observers"),la=t=>Boolean(t&&t[aa]),ca=t=>t&&t[aa]?t[aa]():t,ua=t=>t[sa]||null;function da(t,e){let n=t[sa];n&&n.forEach((t=>{!function(t,e){t.eventObserved?t.eventObserved(e):t(e)}(t,e)}))}class ha{constructor(t){if(this[aa]=void 0,this[sa]=void 0,!t&&!(t=this.get))throw Error("Unknown getter");pa(this,t)}}const pa=(t,e)=>ma(t,aa,e);function fa(t,e){if(t[aa]){let n=t[sa];n||ma(t,sa,n=new Set),n.has(e)||(n.add(e),t.observerAdded&&t.observerAdded(n.size,e))}return e}function ga(t,e){let n=t[sa];if(n&&n.has(e)){const r=n.size-1;r?n.delete(e):t[sa]=null,t.observerRemoved&&t.observerRemoved(r,e)}}const ma=(t,e,n)=>Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0}),ya=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,va=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ba=new RegExp(`(${ya.source})(%|[a-z]+)`,"i"),wa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,_a=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Sa=t=>{const[e,n]=xa(t);if(!e||ko())return t;const r=window.getComputedStyle(document.documentElement).getPropertyValue(e);if(r)return r.trim();if(n&&n.startsWith("--")){const e=window.getComputedStyle(document.documentElement).getPropertyValue(n);return e||t}return n&&_a.test(n)?Sa(n):n||t},xa=t=>{const e=_a.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]};let $a;const ka=(t,e,n,r,i)=>`rgba(${Math.round(e)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Fa=t=>{$a||($a=jo?new RegExp(`(${Object.keys(jo).join("|")})(?!\\w)`,"g"):/^\b$/);const e=t.output.map((t=>ca(t).replace(_a,Sa).replace(va,ra).replace($a,ra))),n=e.map((t=>t.match(ya).map(Number))),r=n[0].map(((t,e)=>n.map((t=>{if(!(e in t))throw Error('The arity of each "output" value must be equal');return t[e]})))).map((e=>ia(oa({},t,{output:e}))));return t=>{var n;const i=!ba.test(e[0])&&(null==(n=e.find((t=>ba.test(t))))?void 0:n.replace(ya,""));let o=0;return e[0].replace(ya,(()=>`${r[o++](t)}${i||""}`)).replace(wa,ka)}},Oa="react-spring: ",ja=t=>{const e=t;let n=!1;if("function"!=typeof e)throw new TypeError(`${Oa}once requires a function parameter`);return(...t)=>{n||(e(...t),n=!0)}},Ba=ja(console.warn);const Ca=ja(console.warn);function za(t){return vo.str(t)&&("#"==t[0]||/\d/.test(t)||!ko()&&_a.test(t)||t in(jo||{}))}const Aa="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect;function Pa(){const t=a()[1],e=(()=>{const t=s(!1);return Aa((()=>(t.current=!0,()=>{t.current=!1})),[]),t})();return()=>{e.current&&t(Math.random())}}const Da=t=>o(t,Ea),Ea=[];function Ia(t){const e=s();return o((()=>{e.current=t})),e.current}const Ha=Symbol.for("Animated:node"),Na=t=>t&&t[Ha],Ma=(t,e)=>{return n=t,r=Ha,i=e,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Ta=t=>t&&t[Ha]&&t[Ha].getPayload();class Va{constructor(){this.payload=void 0,Ma(this,this)}getPayload(){return this.payload||[]}}class La extends Va{constructor(t){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=t,vo.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new La(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,e){return vo.num(t)&&(this.lastPosition=t,e&&(t=Math.round(t/e)*e,this.done&&(this.lastPosition=t))),this._value!==t&&(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,vo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}}class Ra extends La{constructor(t){super(0),this._string=null,this._toString=void 0,this._toString=ia({output:[t,t]})}static create(t){return new Ra(t)}getValue(){let t=this._string;return null==t?this._string=this._toString(this._value):t}setValue(t){if(vo.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else{if(!super.setValue(t))return!1;this._string=null}return!0}reset(t){t&&(this._toString=ia({output:[this.getValue(),t]})),this._value=0,super.reset()}}const Wa={dependencies:null};class qa extends Va{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const e={};return _o(this.source,((n,r)=>{var i;(i=n)&&i[Ha]===i?e[r]=n.getValue(t):la(n)?e[r]=ca(n):t||(e[r]=n)})),e}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&wo(this.payload,(t=>t.reset()))}_makePayload(t){if(t){const e=new Set;return _o(t,this._addToPayload,e),Array.from(e)}}_addToPayload(t){Wa.dependencies&&la(t)&&Wa.dependencies.add(t);const e=Ta(t);e&&wo(e,(t=>this.add(t)))}}class Ua extends qa{constructor(t){super(t)}static create(t){return new Ua(t)}getValue(){return this.source.map((t=>t.getValue()))}setValue(t){const e=this.getPayload();return t.length==e.length?e.map(((e,n)=>e.setValue(t[n]))).some(Boolean):(super.setValue(t.map(Qa)),!0)}}function Qa(t){return(za(t)?Ra:La).create(t)}function Ga(t){const e=Na(t);return e?e.constructor:vo.arr(t)?Ua:za(t)?Ra:La}function Xa(){return Xa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xa.apply(this,arguments)}const Za=(t,e)=>{const n=!vo.fun(t)||t.prototype&&t.prototype.isReactComponent;return l(((i,a)=>{const l=s(null),u=n&&c((t=>{l.current=function(t,e){t&&(vo.fun(t)?t(e):t.current=e);return e}(a,t)}),[a]),[d,h]=function(t,e){const n=new Set;Wa.dependencies=n,t.style&&(t=Xa({},t,{style:e.createAnimatedStyle(t.style)}));return t=new qa(t),Wa.dependencies=null,[t,n]}(i,e),p=Pa(),f=()=>{const t=l.current;if(n&&!t)return;!1===(!!t&&e.applyAnimatedValues(t,d.getValue(!0)))&&p()},g=new Ka(f,h),m=s();Aa((()=>(m.current=g,wo(h,(t=>fa(t,g))),()=>{m.current&&(wo(m.current.deps,(t=>ga(t,m.current))),Ji.cancel(m.current.update))}))),o(f,[]),Da((()=>()=>{const t=m.current;wo(t.deps,(e=>ga(e,t)))}));const y=e.getComponentProps(d.getValue());return r.createElement(t,Xa({},y,{ref:u}))}))};class Ka{constructor(t,e){this.update=t,this.deps=e}eventObserved(t){"change"==t.type&&Ji.write(this.update)}}const Ya=Symbol.for("AnimatedComponent"),Ja=t=>vo.str(t)?t:t&&vo.str(t.displayName)?t.displayName:vo.fun(t)&&t.name||null;function ts(){return ts=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ts.apply(this,arguments)}function es(t,...e){return vo.fun(t)?t(...e):t}const ns=(t,e)=>!0===t||!!(e&&t&&(vo.fun(t)?t(e):So(t).includes(e))),rs=(t,e)=>vo.obj(t)?e&&t[e]:t,is=(t,e)=>!0===t.default?t[e]:t.default?t.default[e]:void 0,os=t=>t,as=(t,e=os)=>{let n=ss;t.default&&!0!==t.default&&(t=t.default,n=Object.keys(t));const r={};for(const i of n){const n=e(t[i],i);vo.und(n)||(r[i]=n)}return r},ss=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ls={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function cs(t){const e=function(t){const e={};let n=0;if(_o(t,((t,r)=>{ls[r]||(e[r]=t,n++)})),n)return e}(t);if(e){const n={to:e};return _o(t,((t,r)=>r in e||(n[r]=t))),n}return ts({},t)}function us(t){return t=ca(t),vo.arr(t)?t.map(us):za(t)?zo.createStringInterpolator({range:[0,1],output:[t,t]})(1):t}function ds(t){for(const e in t)return!0;return!1}function hs(t){return vo.fun(t)||vo.arr(t)&&vo.obj(t[0])}function ps(t,e){var n;null==(n=t.ref)||n.delete(t),null==e||e.delete(t)}function fs(t,e){var n;e&&t.ref!==e&&(null==(n=t.ref)||n.delete(t),e.add(t),t.ref=e)}const gs=1.70158,ms=1.525*gs,ys=2*Math.PI/3,vs=2*Math.PI/4.5,bs=t=>{const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},ws=ts({},{tension:170,friction:26},{mass:1,damping:1,easing:{linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>1-(1-t)*(1-t),easeInOutQuad:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,easeInCubic:t=>t*t*t,easeOutCubic:t=>1-Math.pow(1-t,3),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1-Math.pow(1-t,4),easeInOutQuart:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2,easeInSine:t=>1-Math.cos(t*Math.PI/2),easeOutSine:t=>Math.sin(t*Math.PI/2),easeInOutSine:t=>-(Math.cos(Math.PI*t)-1)/2,easeInExpo:t=>0===t?0:Math.pow(2,10*t-10),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>0===t?0:1===t?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,easeInCirc:t=>1-Math.sqrt(1-Math.pow(t,2)),easeOutCirc:t=>Math.sqrt(1-Math.pow(t-1,2)),easeInOutCirc:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2,easeInBack:t=>2.70158*t*t*t-gs*t*t,easeOutBack:t=>1+2.70158*Math.pow(t-1,3)+gs*Math.pow(t-1,2),easeInOutBack:t=>t<.5?Math.pow(2*t,2)*(7.189819*t-ms)/2:(Math.pow(2*t-2,2)*((ms+1)*(2*t-2)+ms)+2)/2,easeInElastic:t=>0===t?0:1===t?1:-Math.pow(2,10*t-10)*Math.sin((10*t-10.75)*ys),easeOutElastic:t=>0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin((10*t-.75)*ys)+1,easeInOutElastic:t=>0===t?0:1===t?1:t<.5?-Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*vs)/2:Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*vs)/2+1,easeInBounce:t=>1-bs(1-t),easeOutBounce:bs,easeInOutBounce:t=>t<.5?(1-bs(1-2*t))/2:(1+bs(2*t-1))/2}.linear,clamp:!1});class _s{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,ws)}}function Ss(t,e){if(vo.und(e.decay)){const n=!vo.und(e.tension)||!vo.und(e.friction);!n&&vo.und(e.frequency)&&vo.und(e.damping)&&vo.und(e.mass)||(t.duration=void 0,t.decay=void 0),n&&(t.frequency=void 0)}else t.duration=void 0}const xs=[];class $s{constructor(){this.changed=!1,this.values=xs,this.toValues=null,this.fromValues=xs,this.to=void 0,this.from=void 0,this.config=new _s,this.immediate=!1}}function ks(t,{key:e,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ns(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,e);if(d)f();else{vo.und(n.pause)||(i.paused=ns(n.pause,e));let t=null==r?void 0:r.pause;!0!==t&&(t=i.paused||ns(t,e)),c=es(n.delay||0,e),t?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-Ji.now()}function p(){c>0&&!zo.skipAnimation?(i.delayed=!0,u=Ji.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),t<=(i.cancelId||0)&&(d=!0);try{o.start(ts({},n,{callId:t,cancel:d}),a)}catch(t){s(t)}}}))}const Fs=(t,e)=>1==e.length?e[0]:e.some((t=>t.cancelled))?Bs(t.get()):e.every((t=>t.noop))?Os(t.get()):js(t.get(),e.every((t=>t.finished))),Os=t=>({value:t,noop:!0,finished:!0,cancelled:!1}),js=(t,e,n=!1)=>({value:t,finished:e,cancelled:n}),Bs=t=>({value:t,cancelled:!0,finished:!1});function Cs(t,e,n,r){const{callId:i,parentId:o,onRest:a}=e,{asyncTo:s,promise:l}=n;return o||t!==s||e.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=t;const c=as(e,((t,e)=>"onRest"===e?void 0:t));let u,d;const h=new Promise(((t,e)=>(u=t,d=e))),p=t=>{const e=i<=(n.cancelId||0)&&Bs(r)||i!==n.asyncId&&js(r,!1);if(e)throw t.result=e,d(t),t},f=(t,e)=>{const o=new As,a=new Ps;return(async()=>{if(zo.skipAnimation)throw zs(n),a.result=js(r,!1),d(a),a;p(o);const s=vo.obj(t)?ts({},t):ts({},e,{to:t});s.parentId=i,_o(c,((t,e)=>{vo.und(s[e])&&(s[e]=t)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((t=>{n.resumeQueue.add(t)})),l})()};let g;if(zo.skipAnimation)return zs(n),js(r,!1);try{let e;e=vo.arr(t)?(async t=>{for(const e of t)await f(e)})(t):Promise.resolve(t(f,r.stop.bind(r))),await Promise.all([e.then(u),h]),g=js(r.get(),!0,!1)}catch(t){if(t instanceof As)g=t.result;else{if(!(t instanceof Ps))throw t;g=t.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return vo.fun(a)&&Ji.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function zs(t,e){xo(t.timeouts,(t=>t.cancel())),t.pauseQueue.clear(),t.resumeQueue.clear(),t.asyncId=t.asyncTo=t.promise=void 0,e&&(t.cancelId=e)}class As extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Ps extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ds=t=>t instanceof Is;let Es=1;class Is extends ha{constructor(...t){super(...t),this.id=Es++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=Na(this);return t&&t.getValue()}to(...t){return zo.to(this,t)}interpolate(...t){return Ba(`${Oa}The "interpolate" function is deprecated in v9 (use "to" instead)`),zo.to(this,t)}toJSON(){return this.get()}observerAdded(t){1==t&&this._attach()}observerRemoved(t){0==t&&this._detach()}_attach(){}_detach(){}_onChange(t,e=!1){da(this,{type:"change",parent:this,value:t,idle:e})}_onPriorityChange(t){this.idle||Io.sort(this),da(this,{type:"priority",parent:this,priority:t})}}const Hs=Symbol.for("SpringPhase"),Ns=t=>(1&t[Hs])>0,Ms=t=>(2&t[Hs])>0,Ts=t=>(4&t[Hs])>0,Vs=(t,e)=>e?t[Hs]|=3:t[Hs]&=-3,Ls=(t,e)=>e?t[Hs]|=4:t[Hs]&=-5;class Rs extends Is{constructor(t,e){if(super(),this.key=void 0,this.animation=new $s,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!vo.und(t)||!vo.und(e)){const n=vo.obj(t)?ts({},t):ts({},e,{from:t});vo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ms(this)||this._state.asyncTo)||Ts(this)}get goal(){return ca(this.animation.to)}get velocity(){const t=Na(this);return t instanceof La?t.lastVelocity||0:t.getPayload().map((t=>t.lastVelocity||0))}get hasAnimated(){return Ns(this)}get isAnimating(){return Ms(this)}get isPaused(){return Ts(this)}get isDelayed(){return this._state.delayed}advance(t){let e=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Ta(r.to);!a&&la(r.to)&&(o=So(ca(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Ra?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let e=s.elapsedTime+=t;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=vo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;if(vo.und(i.duration))if(i.decay){const t=!0===i.decay?.998:i.decay,r=Math.exp(-(1-t)*e);d=n+o/(1-t)*(1-r),u=Math.abs(s.lastPosition-d)<.1,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const e=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n))),r=i.restVelocity||e/10,l=i.clamp?0:i.bounce,h=!vo.und(l),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(t/m);for(let t=0;t<y&&(f=Math.abs(a)>r,f||(u=Math.abs(c-d)<=e,!u));++t){h&&(g=d==c||d>c==p,g&&(a=-a*l,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,e=s.elapsedTime+=t)),r=(i.progress||0)+e/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/t,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:e=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Na(this),l=s.getValue();if(e){const t=ca(r.to);l===t&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(t),this._onChange(t)),this._stop()}else n&&this._onChange(l)}set(t){return Ji.batchedUpdates((()=>{this._stop(),this._focus(t),this._set(t)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ms(this)){const{to:t,config:e}=this.animation;Ji.batchedUpdates((()=>{this._onStart(),e.decay||this._set(t,!1),this._stop()}))}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,e){let n;return vo.und(t)?(n=this.queue||[],this.queue=[]):n=[vo.obj(t)?t:ts({},e,{to:t})],Promise.all(n.map((t=>this._update(t)))).then((t=>Fs(this,t)))}stop(t){const{to:e}=this.animation;return this._focus(this.get()),zs(this._state,t&&this._lastCallId),Ji.batchedUpdates((()=>this._stop(e,t))),this}reset(){this._update({reset:!0})}eventObserved(t){"change"==t.type?this._start():"priority"==t.type&&(this.priority=t.priority+1)}_prepareNode(t){const e=this.key||"";let{to:n,from:r}=t;n=vo.obj(n)?n[e]:n,(null==n||hs(n))&&(n=void 0),r=vo.obj(r)?r[e]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ns(this)||(t.reverse&&([n,r]=[r,n]),r=ca(r),vo.und(r)?Na(this)||this._set(n):this._set(r)),i}_update(t,e){let n=ts({},t);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,as(n,((t,e)=>/^on/.test(e)?rs(t,r):t))),Zs(this,n,"onProps"),Ks(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return ks(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Ts(this)||(Ls(this,!0),$o(a.pauseQueue),Ks(this,"onPause",js(this,Ws(this,this.animation.to)),this))},resume:()=>{Ts(this)&&(Ls(this,!1),Ms(this)&&this._resume(),$o(a.resumeQueue),Ks(this,"onResume",js(this,Ws(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((t=>{if(n.loop&&t.finished&&(!e||!t.noop)){const t=qs(n);if(t)return this._update(t,!0)}return t}))}_merge(t,e,n){if(e.cancel)return this.stop(!0),n(Bs(this));const r=!vo.und(t.to),i=!vo.und(t.from);if(r||i){if(!(e.callId>this._lastToId))return n(Bs(this));this._lastToId=e.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=t;!i||r||e.default&&!vo.und(u)||(u=d),e.reverse&&([u,d]=[d,u]);const h=!bo(d,c);h&&(s.from=d),d=ca(d);const p=!bo(u,l);p&&this._focus(u);const f=hs(e.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),e.config&&!f&&function(t,e,n){n&&(Ss(n=ts({},n),e),e=ts({},n,e)),Ss(t,e),Object.assign(t,e);for(const e in ws)null==t[e]&&(t[e]=ws[e]);let{mass:r,frequency:i,damping:o}=t;vo.und(i)||(i<.01&&(i=.01),o<0&&(o=0),t.tension=Math.pow(2*Math.PI/i,2)*r,t.friction=4*Math.PI*o*r/i)}(g,es(e.config,o),e.config!==a.config?es(a.config,o):void 0);let v=Na(this);if(!v||vo.und(u))return n(js(this,!0));const b=vo.und(e.reset)?i&&!e.default:!vo.und(d)&&ns(e.reset,o),w=b?d:this.get(),_=us(u),S=vo.num(_)||vo.arr(_)||za(_),x=!f&&(!S||ns(a.immediate||e.immediate,o));if(p){const t=Ga(u);if(t!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${t.name}, as the "to" prop suggests`);v=this._set(_)}}const $=v.constructor;let k=la(u),F=!1;if(!k){const t=b||!Ns(this)&&h;(p||t)&&(F=bo(us(w),_),k=!F),(bo(s.immediate,x)||x)&&bo(g.decay,m)&&bo(g.velocity,y)||(k=!0)}if(F&&Ms(this)&&(s.changed&&!b?k=!0:k||this._stop(l)),!f&&((k||la(l))&&(s.values=v.getPayload(),s.toValues=la(u)?null:$==Ra?[1]:So(_)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),k)){const{onRest:t}=s;wo(Xs,(t=>Zs(this,e,t)));const r=js(this,Ws(this,l));$o(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Ji.batchedUpdates((()=>{s.changed=!b,null==t||t(r,this),b?es(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(Cs(e.to,e,this._state,this)):k?this._start():Ms(this)&&!p?this._pendingCalls.add(n):n(Os(w))}_focus(t){const e=this.animation;t!==e.to&&(ua(this)&&this._detach(),e.to=t,ua(this)&&this._attach())}_attach(){let t=0;const{to:e}=this.animation;la(e)&&(fa(e,this),Ds(e)&&(t=e.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;la(t)&&ga(t,this)}_set(t,e=!0){const n=ca(t);if(!vo.und(n)){const t=Na(this);if(!t||!bo(n,t.getValue())){const r=Ga(n);t&&t.constructor==r?t.setValue(n):Ma(this,r.create(n)),t&&Ji.batchedUpdates((()=>{this._onChange(n,e)}))}}return Na(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,Ks(this,"onStart",js(this,Ws(this,t.to)),this))}_onChange(t,e){e||(this._onStart(),es(this.animation.onChange,t,this)),es(this.defaultProps.onChange,t,this),super._onChange(t,e)}_start(){const t=this.animation;Na(this).reset(ca(t.to)),t.immediate||(t.fromValues=t.values.map((t=>t.lastPosition))),Ms(this)||(Vs(this,!0),Ts(this)||this._resume())}_resume(){zo.skipAnimation?this.finish():Io.start(this)}_stop(t,e){if(Ms(this)){Vs(this,!1);const n=this.animation;wo(n.values,(t=>{t.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),da(this,{type:"idle",parent:this});const r=e?Bs(this.get()):js(this.get(),Ws(this,null!=t?t:n.to));$o(this._pendingCalls,r),n.changed&&(n.changed=!1,Ks(this,"onRest",r,this))}}}function Ws(t,e){const n=us(e);return bo(us(t.get()),n)}function qs(t,e=t.loop,n=t.to){let r=es(e);if(r){const i=!0!==r&&cs(r),o=(i||t).reverse,a=!i||i.reset;return Us(ts({},t,{loop:e,default:!1,pause:void 0,to:!o||hs(n)?n:void 0,from:a?t.from:void 0,reset:a},i))}}function Us(t){const{to:e,from:n}=t=cs(t),r=new Set;return vo.obj(e)&&Gs(e,r),vo.obj(n)&&Gs(n,r),t.keys=r.size?Array.from(r):null,t}function Qs(t){const e=Us(t);return vo.und(e.default)&&(e.default=as(e)),e}function Gs(t,e){_o(t,((t,n)=>null!=t&&e.add(n)))}const Xs=["onStart","onRest","onChange","onPause","onResume"];function Zs(t,e,n){t.animation[n]=e[n]!==is(e,n)?rs(e[n],t.key):void 0}function Ks(t,e,...n){var r,i,o,a;null==(r=(i=t.animation)[e])||r.call(i,...n),null==(o=(a=t.defaultProps)[e])||o.call(a,...n)}const Ys=["onStart","onChange","onRest"];let Js=1;class tl{constructor(t,e){this.id=Js++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),e&&(this._flush=e),t&&this.start(ts({default:!0},t))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((t=>t.idle&&!t.isDelayed&&!t.isPaused))}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each(((e,n)=>t[n]=e.get())),t}set(t){for(const e in t){const n=t[e];vo.und(n)||this.springs[e].set(n)}}update(t){return t&&this.queue.push(Us(t)),this}start(t){let{queue:e}=this;return t?e=So(t).map(Us):this.queue=[],this._flush?this._flush(this,e):(sl(this,e),el(this,e))}stop(t,e){if(t!==!!t&&(e=t),e){const n=this.springs;wo(So(e),(e=>n[e].stop(!!t)))}else zs(this._state,this._lastAsyncId),this.each((e=>e.stop(!!t)));return this}pause(t){if(vo.und(t))this.start({pause:!0});else{const e=this.springs;wo(So(t),(t=>e[t].pause()))}return this}resume(t){if(vo.und(t))this.start({pause:!1});else{const e=this.springs;wo(So(t),(t=>e[t].resume()))}return this}each(t){_o(this.springs,t)}_onFrame(){const{onStart:t,onChange:e,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,xo(t,(([t,e])=>{e.value=this.get(),t(e,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&e.size&&xo(e,(([t,e])=>{e.value=a,t(e,this,this._item)})),o&&(this._started=!1,xo(n,(([t,e])=>{e.value=a,t(e,this,this._item)})))}eventObserved(t){if("change"==t.type)this._changed.add(t.parent),t.idle||this._active.add(t.parent);else{if("idle"!=t.type)return;this._active.delete(t.parent)}Ji.onFrame(this._onFrame)}}function el(t,e){return Promise.all(e.map((e=>nl(t,e)))).then((e=>Fs(t,e)))}async function nl(t,e,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=e,c=vo.obj(e.default)&&e.default;a&&(e.loop=!1),!1===i&&(e.to=null),!1===o&&(e.from=null);const u=vo.arr(i)||vo.fun(i)?i:void 0;u?(e.to=void 0,e.onRest=void 0,c&&(c.onRest=void 0)):wo(Ys,(n=>{const r=e[n];if(vo.fun(r)){const i=t._events[n];e[n]=({finished:t,cancelled:e})=>{const n=i.get(r);n?(t||(n.finished=!1),e&&(n.cancelled=!0)):i.set(r,{value:null,finished:t||!1,cancelled:e||!1})},c&&(c[n]=e[n])}}));const d=t._state;e.pause===!d.paused?(d.paused=e.pause,$o(e.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(e.pause=!0);const h=(r||Object.keys(t.springs)).map((n=>t.springs[n].start(e))),p=!0===e.cancel||!0===is(e,"cancel");(u||p&&d.asyncId)&&h.push(ks(++t._lastAsyncId,{props:e,state:d,actions:{pause:yo,resume:yo,start(e,n){p?(zs(d,t._lastAsyncId),n(Bs(t))):(e.onRest=s,n(Cs(u,e,d,t)))}}})),d.paused&&await new Promise((t=>{d.resumeQueue.add(t)}));const f=Fs(t,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=qs(e,a,i);if(n)return sl(t,[n]),nl(t,n,!0)}return l&&Ji.batchedUpdates((()=>l(f,t,t.item))),f}function rl(t,e){const n=ts({},t.springs);return e&&wo(So(e),(t=>{vo.und(t.keys)&&(t=Us(t)),vo.obj(t.to)||(t=ts({},t,{to:void 0})),al(n,t,(t=>ol(t)))})),il(t,n),n}function il(t,e){_o(e,((e,n)=>{t.springs[n]||(t.springs[n]=e,fa(e,t))}))}function ol(t,e){const n=new Rs;return n.key=t,e&&fa(n,e),n}function al(t,e,n){e.keys&&wo(e.keys,(r=>{(t[r]||(t[r]=n(r)))._prepareNode(e)}))}function sl(t,e){wo(e,(e=>{al(t.springs,e,(e=>ol(e,t)))}))}const ll=["children"],cl=t=>{let{children:e}=t,n=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,ll);const i=u(ul),l=n.pause||!!i.pause,c=n.immediate||!!i.immediate;n=function(t,e){const[n]=a((()=>({inputs:e,result:t()}))),r=s(),i=r.current;let l=i;l?Boolean(e&&l.inputs&&function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}(e,l.inputs))||(l={inputs:e,result:t()}):l=n;return o((()=>{r.current=l,i==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:l,immediate:c})),[l,c]);const{Provider:d}=ul;return r.createElement(d,{value:n},e)},ul=(dl=cl,hl={},Object.assign(dl,r.createContext(hl)),dl.Provider._context=dl,dl.Consumer._context=dl,dl);var dl,hl;cl.Provider=ul.Provider,cl.Consumer=ul.Consumer;const pl=()=>{const t=[],e=function(e){Ca(`${Oa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return wo(t,((t,i)=>{if(vo.und(e))r.push(t.start());else{const o=n(e,t,i);o&&r.push(t.start(o))}})),r};e.current=t,e.add=function(e){t.includes(e)||t.push(e)},e.delete=function(e){const n=t.indexOf(e);~n&&t.splice(n,1)},e.pause=function(){return wo(t,(t=>t.pause(...arguments))),this},e.resume=function(){return wo(t,(t=>t.resume(...arguments))),this},e.set=function(e){wo(t,(t=>t.set(e)))},e.start=function(e){const n=[];return wo(t,((t,r)=>{if(vo.und(e))n.push(t.start());else{const i=this._getProps(e,t,r);i&&n.push(t.start(i))}})),n},e.stop=function(){return wo(t,(t=>t.stop(...arguments))),this},e.update=function(e){return wo(t,((t,n)=>t.update(this._getProps(e,t,n)))),this};const n=function(t,e,n){return vo.fun(t)?t(n,e):t};return e._getProps=n,e};function fl(t,e,n){const r=vo.fun(e)&&e;r&&!n&&(n=[]);const i=d((()=>r||3==arguments.length?pl():void 0),[]),o=s(0),a=Pa(),l=d((()=>({ctrls:[],queue:[],flush(t,e){const n=rl(t,e);return o.current>0&&!l.queue.length&&!Object.keys(n).some((e=>!t.springs[e]))?el(t,e):new Promise((r=>{il(t,n),l.queue.push((()=>{r(el(t,e))})),a()}))}})),[]),c=s([...l.ctrls]),h=[],p=Ia(t)||0;function f(t,n){for(let i=t;i<n;i++){const t=c.current[i]||(c.current[i]=new tl(null,l.flush)),n=r?r(i,t):e[i];n&&(h[i]=Qs(n))}}d((()=>{wo(c.current.slice(t,p),(t=>{ps(t,i),t.stop(!0)})),c.current.length=t,f(p,t)}),[t]),d((()=>{f(0,Math.min(p,t))}),n);const g=c.current.map(((t,e)=>rl(t,h[e]))),m=u(cl),y=Ia(m),v=m!==y&&ds(m);Aa((()=>{o.current++,l.ctrls=c.current;const{queue:t}=l;t.length&&(l.queue=[],wo(t,(t=>t()))),wo(c.current,((t,e)=>{null==i||i.add(t),v&&t.start({default:m});const n=h[e];n&&(fs(t,n.ref),t.ref?t.queue.push(n):t.start(n))}))})),Da((()=>()=>{wo(l.ctrls,(t=>t.stop(!0)))}));const b=g.map((t=>ts({},t)));return i?[b,i]:b}let gl;!function(t){t.MOUNT="mount",t.ENTER="enter",t.UPDATE="update",t.LEAVE="leave"}(gl||(gl={}));class ml extends Is{constructor(t,e){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=t,this.calc=ia(...e);const n=this._get(),r=Ga(n);Ma(this,r.create(n))}advance(t){const e=this._get();bo(e,this.get())||(Na(this).setValue(e),this._onChange(e,this.idle)),!this.idle&&vl(this._active)&&bl(this)}_get(){const t=vo.arr(this.source)?this.source.map(ca):So(ca(this.source));return this.calc(...t)}_start(){this.idle&&!vl(this._active)&&(this.idle=!1,wo(Ta(this),(t=>{t.done=!1})),zo.skipAnimation?(Ji.batchedUpdates((()=>this.advance())),bl(this)):Io.start(this))}_attach(){let t=1;wo(So(this.source),(e=>{la(e)&&fa(e,this),Ds(e)&&(e.idle||this._active.add(e),t=Math.max(t,e.priority+1))})),this.priority=t,this._start()}_detach(){wo(So(this.source),(t=>{la(t)&&ga(t,this)})),this._active.clear(),bl(this)}eventObserved(t){"change"==t.type?t.idle?this.advance():(this._active.add(t.parent),this._start()):"idle"==t.type?this._active.delete(t.parent):"priority"==t.type&&(this.priority=So(this.source).reduce(((t,e)=>Math.max(t,(Ds(e)?e.priority:0)+1)),0))}}function yl(t){return!1!==t.idle}function vl(t){return!t.size||Array.from(t).every(yl)}function bl(t){t.idle||(t.idle=!0,wo(Ta(t),(t=>{t.done=!0})),da(t,{type:"idle",parent:t}))}function wl(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}zo.assign({createStringInterpolator:Fa,to:(t,e)=>new ml(t,e)});const _l=["style","children","scrollTop","scrollLeft"],Sl=/^--/;function xl(t,e){return null==e||"boolean"==typeof e||""===e?"":"number"!=typeof e||0===e||Sl.test(t)||kl.hasOwnProperty(t)&&kl[t]?(""+e).trim():e+"px"}const $l={};let kl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Fl=["Webkit","Ms","Moz","O"];kl=Object.keys(kl).reduce(((t,e)=>(Fl.forEach((n=>t[((t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1))(n,e)]=t[e])),t)),kl);const Ol=["x","y","z"],jl=/^(matrix|translate|scale|rotate|skew)/,Bl=/^(translate)/,Cl=/^(rotate|skew)/,zl=(t,e)=>vo.num(t)&&0!==t?t+e:t,Al=(t,e)=>vo.arr(t)?t.every((t=>Al(t,e))):vo.num(t)?t===e:parseFloat(t)===e;class Pl extends qa{constructor(t){let{x:e,y:n,z:r}=t,i=wl(t,Ol);const o=[],a=[];(e||n||r)&&(o.push([e||0,n||0,r||0]),a.push((t=>[`translate3d(${t.map((t=>zl(t,"px"))).join(",")})`,Al(t,0)]))),_o(i,((t,e)=>{if("transform"===e)o.push([t||""]),a.push((t=>[t,""===t]));else if(jl.test(e)){if(delete i[e],vo.und(t))return;const n=Bl.test(e)?"px":Cl.test(e)?"deg":"";o.push(So(t)),a.push("rotate3d"===e?([t,e,r,i])=>[`rotate3d(${t},${e},${r},${zl(i,n)})`,Al(i,0)]:t=>[`${e}(${t.map((t=>zl(t,n))).join(",")})`,Al(t,e.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Dl(o,a)),super(i)}}class Dl extends ha{constructor(t,e){super(),this._value=null,this.inputs=t,this.transforms=e}get(){return this._value||(this._value=this._get())}_get(){let t="",e=!0;return wo(this.inputs,((n,r)=>{const i=ca(n[0]),[o,a]=this.transforms[r](vo.arr(i)?i:n.map(ca));t+=" "+o,e=e&&a})),e?"none":t}observerAdded(t){1==t&&wo(this.inputs,(t=>wo(t,(t=>la(t)&&fa(t,this)))))}observerRemoved(t){0==t&&wo(this.inputs,(t=>wo(t,(t=>la(t)&&ga(t,this)))))}eventObserved(t){"change"==t.type&&(this._value=null),da(this,t)}}const El=["scrollTop","scrollLeft"];zo.assign({batchedUpdates:h,createStringInterpolator:Fa,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Il=((t,{applyAnimatedValues:e=(()=>!1),createAnimatedStyle:n=(t=>new qa(t)),getComponentProps:r=(t=>t)}={})=>{const i={applyAnimatedValues:e,createAnimatedStyle:n,getComponentProps:r},o=t=>{const e=Ja(t)||"Anonymous";return(t=vo.str(t)?o[t]||(o[t]=Za(t,i)):t[Ya]||(t[Ya]=Za(t,i))).displayName=`Animated(${e})`,t};return _o(t,((e,n)=>{vo.arr(t)&&(n=Ja(e)),o[n]=o(e)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(t,e){if(!t.nodeType||!t.setAttribute)return!1;const n="filter"===t.nodeName||t.parentNode&&"filter"===t.parentNode.nodeName,r=e,{style:i,children:o,scrollTop:a,scrollLeft:s}=r,l=wl(r,_l),c=Object.values(l),u=Object.keys(l).map((e=>n||t.hasAttribute(e)?e:$l[e]||($l[e]=e.replace(/([A-Z])/g,(t=>"-"+t.toLowerCase())))));void 0!==o&&(t.textContent=o);for(let e in i)if(i.hasOwnProperty(e)){const n=xl(e,i[e]);Sl.test(e)?t.style.setProperty(e,n):t.style[e]=n}u.forEach(((e,n)=>{t.setAttribute(e,c[n])})),void 0!==a&&(t.scrollTop=a),void 0!==s&&(t.scrollLeft=s)},createAnimatedStyle:t=>new Pl(t),getComponentProps:t=>wl(t,El)}),Hl=Il.animated,Nl=(t,e,n)=>e?ei(n,e)||ei(t,e):n||t,Ml=(t,e)=>{const n=e||t.defaultValue;return ei(t.collections,n)};var Tl;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme"}(Tl||(Tl={}));const Vl={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},Ll=t=>e=>{const n=e.theme,r=Ml(Vl,n[Tl.colorScheme]);return n.options&&n.options.color?Nl(r,t,n.options.color):Nl(r,t)},Rl={Brand:{1:Ll("Brand.1"),2:Ll("Brand.2"),3:Ll("Brand.3"),4:Ll("Brand.4"),5:Ll("Brand.5"),6:Ll("Brand.6")},Primary:Ll("Primary"),PrimaryDark:Ll("PrimaryDark"),Secondary:Ll("Secondary"),Accent:{Light:{1:Ll("Accent.Light.1"),2:Ll("Accent.Light.2"),3:Ll("Accent.Light.3"),4:Ll("Accent.Light.4"),5:Ll("Accent.Light.5"),6:Ll("Accent.Light.6")},Dark:{1:Ll("Accent.Dark.1"),2:Ll("Accent.Dark.2"),3:Ll("Accent.Dark.3")}},Neutral:{1:Ll("Neutral.1"),2:Ll("Neutral.2"),3:Ll("Neutral.3"),4:Ll("Neutral.4"),5:Ll("Neutral.5"),6:Ll("Neutral.6"),7:Ll("Neutral.7"),8:Ll("Neutral.8")},Validation:{Green:{Text:Ll("Validation.Green.Text"),Icon:Ll("Validation.Green.Icon"),Border:Ll("Validation.Green.Border"),Background:Ll("Validation.Green.Background")},Orange:{Text:Ll("Validation.Orange.Text"),Icon:Ll("Validation.Orange.Icon"),Border:Ll("Validation.Orange.Border"),Background:Ll("Validation.Orange.Background"),Badge:Ll("Validation.Orange.Badge")},Red:{Text:Ll("Validation.Red.Text"),Icon:Ll("Validation.Red.Icon"),Border:Ll("Validation.Red.Border"),Background:Ll("Validation.Red.Background")}}},Wl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ql=t=>Object.keys(Wl).reduce(((e,n)=>{const r=Wl[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ul=ql("max-width"),Ql=(ql("min-width"),p.div`
    display: inline-block;
    position: relative;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
`),Gl=f`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Xl=p.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${t=>t.$size}px;
    height: ${t=>t.$size}px;
    margin: ${t=>t.$borderWidth}px;
    border-width: ${t=>t.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${t=>t.$color||Rl.Neutral[8](t)}
        transparent transparent transparent;
    animation: ${Gl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Zl=p(Xl)`
    animation-delay: -0.45s;
`,Kl=p(Xl)`
    animation-delay: -0.3s;
`,Yl=p(Xl)`
    animation-delay: -0.15s;
`,Jl={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},tc={collections:{base:{D1:{fontFamily:Jl.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Jl.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Jl.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Jl.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Jl.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Jl.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Jl.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Jl.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Jl.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Jl.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Jl.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Jl.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Jl.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Jl.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ec=t=>e=>{const n=e.theme,r=Ml(tc,n[Tl.textStyleScheme]);return n.options&&n.options.textStyle?Nl(r,t,n.options.textStyle):Nl(r,t)},nc={D1:{fontFamily:ec("D1.fontFamily"),fontSize:ec("D1.fontSize"),fontWeight:ec("D1.fontWeight"),lineHeight:ec("D1.lineHeight"),letterSpacing:ec("D1.letterSpacing")},D2:{fontFamily:ec("D2.fontFamily"),fontSize:ec("D2.fontSize"),fontWeight:ec("D2.fontWeight"),lineHeight:ec("D2.lineHeight"),letterSpacing:ec("D2.letterSpacing")},D3:{fontFamily:ec("D3.fontFamily"),fontSize:ec("D3.fontSize"),fontWeight:ec("D3.fontWeight"),lineHeight:ec("D3.lineHeight"),letterSpacing:ec("D3.letterSpacing")},D4:{fontFamily:ec("D4.fontFamily"),fontSize:ec("D4.fontSize"),fontWeight:ec("D4.fontWeight"),lineHeight:ec("D4.lineHeight"),letterSpacing:ec("D4.letterSpacing")},DBody:{fontFamily:ec("DBody.fontFamily"),fontSize:ec("DBody.fontSize"),fontWeight:ec("DBody.fontWeight"),lineHeight:ec("DBody.lineHeight"),letterSpacing:ec("DBody.letterSpacing")},H1:{fontFamily:ec("H1.fontFamily"),fontSize:ec("H1.fontSize"),fontWeight:ec("H1.fontWeight"),lineHeight:ec("H1.lineHeight"),letterSpacing:ec("H1.letterSpacing")},H2:{fontFamily:ec("H2.fontFamily"),fontSize:ec("H2.fontSize"),fontWeight:ec("H2.fontWeight"),lineHeight:ec("H2.lineHeight"),letterSpacing:ec("H2.letterSpacing")},H3:{fontFamily:ec("H3.fontFamily"),fontSize:ec("H3.fontSize"),fontWeight:ec("H3.fontWeight"),lineHeight:ec("H3.lineHeight"),letterSpacing:ec("H3.letterSpacing")},H4:{fontFamily:ec("H4.fontFamily"),fontSize:ec("H4.fontSize"),fontWeight:ec("H4.fontWeight"),lineHeight:ec("H4.lineHeight"),letterSpacing:ec("H4.letterSpacing")},H5:{fontFamily:ec("H5.fontFamily"),fontSize:ec("H5.fontSize"),fontWeight:ec("H5.fontWeight"),lineHeight:ec("H5.lineHeight"),letterSpacing:ec("H5.letterSpacing")},H6:{fontFamily:ec("H6.fontFamily"),fontSize:ec("H6.fontSize"),fontWeight:ec("H6.fontWeight"),lineHeight:ec("H6.lineHeight"),letterSpacing:ec("H6.letterSpacing")},Body:{fontFamily:ec("Body.fontFamily"),fontSize:ec("Body.fontSize"),fontWeight:ec("Body.fontWeight"),lineHeight:ec("Body.lineHeight"),letterSpacing:ec("Body.letterSpacing")},BodySmall:{fontFamily:ec("BodySmall.fontFamily"),fontSize:ec("BodySmall.fontSize"),fontWeight:ec("BodySmall.fontWeight"),lineHeight:ec("BodySmall.lineHeight"),letterSpacing:ec("BodySmall.letterSpacing")},XSmall:{fontFamily:ec("XSmall.fontFamily"),fontSize:ec("XSmall.fontSize"),fontWeight:ec("XSmall.fontWeight"),lineHeight:ec("XSmall.lineHeight"),letterSpacing:ec("XSmall.letterSpacing")}},rc=t=>{switch(t){case 700:case"bold":return Jl.Bold;case 600:case"semibold":return Jl.Semibold;case 300:case"light":return Jl.Light;case 400:case"regular":return Jl.Regular;default:return""}},ic=(t,e)=>n=>{const r=nc[t].fontFamily(n),i=nc[t].fontWeight(n);return Object.values(Jl).includes(r)?g`
                font-family: ${rc(e)||rc(i)||r};
                font-weight: normal !important;
            `:g`
            font-family: ${r};
            font-weight: ${(oc(e)||i)??"normal"};
        `},oc=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ac=(t,e,n=!1)=>r=>{const i=nc[t],o=i.fontSize(r);return g`
            ${ic(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},sc=(t=!1,e=!1)=>e?g`
            display: block;
        `:t?g`
            display: inline;
        `:g`
            display: block;
        `,lc=p.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${Rl.Primary};
`,cc=t=>e(lc,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),uc=t=>e(lc,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),dc=t=>e(lc,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),hc=t=>e(lc,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),pc=t=>e(lc,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...t,children:e("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),fc=({type:t,...n})=>{switch(t){case"arrow-right":return e(cc,{...n});case"info":return e(dc,{...n});case"cross":return e(uc,{...n});case"play":return e(hc,{...n});case"search":return e(pc,{...n});default:{const r=`sgds-icon sgds-icon-${t}`,i=n.className?`${r} ${n.className}`:r;return e(gc,{...n,className:i})}}},gc=p.span`
    font-size: 1rem;
`;var mc;!function(t){t.D1=p.h1`
        ${t=>g`
                ${ac("D1",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.D2=p.h1`
        ${t=>g`
                ${ac("D2",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.D3=p.h1`
        ${t=>g`
                ${ac("D3",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.D4=p.h1`
        ${t=>g`
                ${ac("D4",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.DBody=p.h1`
        ${t=>g`
                ${ac("DBody",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.H1=p.h1`
        ${t=>g`
                ${ac("H1",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.H2=p.h2`
        ${t=>g`
                ${ac("H2",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.H3=p.h3`
        ${t=>g`
                ${ac("H3",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.H4=p.h4`
        ${t=>g`
                ${ac("H4",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.H5=p.h5`
        ${t=>g`
                ${ac("H5",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.H6=p.h6`
        ${t=>g`
                ${ac("H6",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.Body=p.p`
        ${t=>g`
                ${ac("Body",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=p.p`
        ${t=>g`
                ${ac("BodySmall",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.XSmall=p.span`
        ${t=>g`
                ${ac("XSmall",t.weight,t.paragraph)}
                color: ${Rl.Neutral[1]};
                ${sc(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>bc({...t,textStyle:"Body"}),Small:t=>bc({...t,textStyle:"BodySmall"})}}(mc||(mc={}));const yc=p.a`
    ${t=>g`
            ${ac(t.textStyle,t.weight)}
            color: ${Rl.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Rl.Secondary};
            }
        `}
`,vc=p(fc)`
    margin-left: 0.4rem;
`,bc=({external:n=!1,children:r,...i})=>t(yc,{...i,children:[r,n&&e(vc,{type:"external"})]});var wc;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(wc||(wc={})),p.button`
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
    ${t=>{switch(t.$buttonStyle){case"secondary":return g`
                    background-color: ${Rl.Neutral[8](t)};
                    border: 1px solid ${Rl.Primary(t)};

                    span {
                        color: ${Rl.Primary(t)};
                    }
                `;case"light":return g`
                    background-color: ${Rl.Neutral[8](t)};
                    border: 1px solid ${Rl.Neutral[5](t)};

                    span {
                        color: ${Rl.Primary(t)};
                    }
                `;case"disabled":return g`
                    background-color: ${Rl.Neutral[6](t)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Rl.Neutral[3](t)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Rl.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Rl.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${Rl.Primary(t)};
                    border: 1px solid transparent;

                    ${Ul.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Rl.Neutral[8](t)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${t=>"small"===t.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${ac("H5","semibold")}
                    }

                    ${Ul.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${ac("H4","semibold")}
                    }

                    ${Ul.mobileS} {
                        height: auto;
                    }
                `}
`;const _c=p((({color:n,className:r,size:i=18})=>t(Ql,{className:r,$size:i,$color:n,children:[e(Xl,{id:"inner1",$size:i-2,$borderWidth:2}),e(Zl,{id:"inner2",$size:i-2,$borderWidth:2}),e(Kl,{id:"inner3",$size:i-2,$borderWidth:2}),e(Yl,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${t=>{let e;switch(t.$buttonStyle){case"secondary":case"light":case"link":e=Rl.Primary(t);break;case"disabled":e=Rl.Neutral[3](t);break;default:e=Rl.Neutral[8](t)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${e} transparent transparent transparent;
            }
        `}}
`;var Sc;!function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r)=>{let i=0;e>n&&(i=Math.floor((e-n)/8));const o=r+i;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(Sc||(Sc={}));const xc=p.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${t=>{let e,n;if("small"===t.$displaySize)e="1.5rem",n="1.5rem";else e="2rem",n="2rem";return g`
            height: ${e};
            width: ${n};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Rl.Accent.Light[2]};
    background: transparent;

    ${t=>{let e,n;return t.selected&&(e=Rl.Primary(t),n=Rl.Primary(t)),t.disabled&&(e=Rl.Neutral[6](t),n=Rl.Neutral[6](t)),`\n\t\t\tborder: 1px solid ${e};\n\t\t\tbackground: ${n};\n\t\t`}}
`,$c=p.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
`,kc=p(fc)`
    ${t=>{let e;if("small"===t.$displaySize)e="1.3rem";else e="1.5rem";return g`
            font-size: ${e};
        `}}
    font-weight: bold;
    color: ${t=>t.disabled?Rl.Neutral[4]:Rl.Neutral[8]};
`,Fc=p(Hl.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Oc=p.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${t=>t.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Rl.Neutral[4]};
        border-right: 5px solid ${Rl.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${Ul.mobileL} {
        max-height: 15rem;
    }
`,jc=p.li`
    :hover,
    :focus,
    :active {
        background: ${Rl.Accent.Light[5]};
    }
    ${t=>{if(t.checked)return g`
                background: ${Rl.Accent.Light[5]};
            `}}
`,Bc=p.button`
    display: flex;
    ${t=>t.multiSelect?g`
                padding: 0.5rem 1rem;
            `:g`
                padding: 0 1rem;
                height: 3.5rem;
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
        outline-color: ${Rl.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;p.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Rl.Neutral[8]};
`;const Cc=p.div`
    ${ac("Body","regular")}
    color: ${Rl.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${t=>{if("middle"!==t.truncateType)return g`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,zc=p.div`
    display: flex;
    flex-direction: column;
`,Ac=p.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Pc=p.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;p(mc.Hyperlink.Default)`
    color: ${Rl.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Rl.Accent.Light[3]};
        color: ${Rl.Neutral[1]};
    }
`;const Dc=p((({className:n,checked:r,disabled:i,onClick:s,onKeyPress:l,displaySize:c="default",...u})=>{const[d,h]=a(r);o((()=>{h(r)}),[r]);const p=t=>{i||(s&&s(t),l&&l(t))};return t(xc,{selected:d,disabled:i,className:n,"data-testid":"checkbox",onKeyPress:p,tabIndex:i?-1:0,role:"checkbox",$displaySize:c,children:[e($c,{type:"checkbox","data-testid":"checkbox-input",onClick:p,disabled:i,tabIndex:-1,...u}),d&&e(kc,{type:"check",id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Ec=p.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Ic=p.button`
    ${ac("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${t=>`\n\t\t\tcolor: ${Rl.Primary(t)};\n\t\t`}
`,Hc=p.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Nc=p(mc.Body)``,Mc=p.div`
    display: flex;
    align-items: center;
    margin-right: 0.625rem;
    font-size: 1.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    ${t=>g`
            color: ${Rl.Validation.Red.Icon(t)};
        `}
`,Tc=p.li`
    background: ${Rl.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Vc=p.input`
    ${ac("Body","regular")}
    height: 3.5rem;
    border: none;
    background: transparent;
    width: 100%;
    padding: 0 0.5rem 0 0;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Rl.Neutral[3]};
    }
`,Lc=p(fc)`
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.5rem;
    color: ${Rl.Neutral[3]};
`,Rc=l(((n,r)=>t(Tc,{children:[e(Lc,{type:"search"}),e(Vc,{ref:r,...n})]},"search"))),Wc=({listItems:n,listExtractor:r,valueExtractor:i,onSelectItem:l,listStyleWidth:c,visible:u,enableSearch:d,searchPlaceholder:h="Search",onSearch:p,searchFunction:f,onDismiss:g,multiSelect:m,selectedItems:y,onSelectAll:v,onRetry:b,itemsLoadState:w="success",itemTruncationType:_="end",...S})=>{const[x,$]=a(0),[k,F]=a(""),[O,j]=a(n),[B,C]=a(0),z=function(t,e){const n=vo.fun(t),[[r],i]=fl(1,n?t:[t],n?e||[]:e);return n||2==arguments.length?[r,i]:r}({height:B}),A=s(),P=s(),D=s([]),E=s(),I=s(x),H=s(O),N=t=>{I.current=t,$(t)},M=t=>{H.current=t,j(t)};o((()=>(document.addEventListener("keydown",q),()=>{document.removeEventListener("keydown",q)})),[]),o((()=>{R(k)}),[k]),o((()=>{F(""),u?(C(W()),E&&E.current?(E.current.focus(),N(-1)):D.current[x]&&D.current[x].focus()):C(0)}),[u]),o((()=>{if(u){const t=W();C(t)}}),[O]),o((()=>{M(n),F(""),N(0)}),[n]);const T=t=>r?r(t):t.toString(),V=t=>{const e=r?r(t):t.toString();let n=0;return P&&P.current&&(n=P.current.getBoundingClientRect().width-100),Sc.shouldTruncateToTwoLines(e,n)},L=t=>Ri(y,t)>-1,R=t=>{if(""===t)M(n);else if(f){const e=f(t);M(e)}else{const e=n.filter((e=>T(e).toLowerCase().includes(t.trim().toLowerCase())));M(e)}},W=()=>P&&P.current?P.current.getBoundingClientRect().height:0,q=t=>{if(A&&A.current.contains(t.target))switch(t.code){case"ArrowDown":if(I.current<H.current.length-1){const t=I.current+1;D.current[t].focus(),N(t)}break;case"ArrowUp":if(I.current>0){const t=I.current-1;D.current[t].focus(),N(I.current-1)}break;case"Escape":g&&g()}},U=(t,e)=>{t.preventDefault(),l&&l(e,(t=>i?i(t):t)(e))},Q=()=>{b&&b()},G=n=>{const i=r?r(n):n.toString();return t(zc,{"data-testid":"truncate-middle-container",children:[e(Ac,{children:i}),t(Pc,{children:[" ",i]})]})};return e(Fc,{style:z,"data-testid":u?"dropdown-container":"dropdown-container-hidden",ref:A,children:t(Oc,{ref:P,"data-testid":"dropdown-list",width:c,role:"list",...S,children:[(d||f)&&"success"===w?e(Rc,{ref:E,onChange:t=>{const e=t.target.value;F(e),p&&p()},value:k,placeholder:h,"data-testid":"search-input","aria-label":"search-input",tabIndex:u?0:-1}):null,(()=>{if(m&&O.length>0&&!k&&"success"===w)return e(Ec,{children:e(Ic,{onClick:v,children:0===y.length?"Select all":"Unselect all"})},"selectAll")})(),(()=>{if(k&&0===O.length)return t(Hc,{"data-testid":"list-no-results",children:[e(Mc,{"data-testid":"no-result-icon",children:e(Ki,{})}),e(Nc,{children:"No results found."})]},"noResults")})(),(()=>{if(b&&"loading"===w)return t(Hc,{"data-testid":"list-loading",children:[e(_c,{$buttonStyle:"secondary",size:24}),e(Nc,{children:"Loading..."})]},"loading")})(),(()=>{if(b&&"fail"===w)return t(Hc,{"data-testid":"list-fail",children:[e(Mc,{"data-testid":"load-error-icon",children:e(Ki,{})}),e(Nc,{children:"Failed to load."}),e(Ic,{onClick:Q,children:"Try again."})]},"noResults")})(),(()=>{if(!b||b&&"success"===w)return O.map(((n,r)=>e(jc,{checked:L(n)&&!m,children:t(Bc,{onClick:t=>{U(t,n)},ref:t=>D.current[r]=t,"data-testid":"list-item",type:"button",tabIndex:u?0:-1,multiSelect:m,children:[m&&e(Dc,{checked:L(n),displaySize:"small"}),e(Cc,{truncateType:_,children:"middle"===_&&V(n)?G(n):T(n)})]})},((t,e)=>`item_${e}__${i?i(t):t}`)(n,r))))})()]})})},qc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Uc=p.div`
    position: relative;
    min-height: 3rem;
    height: 3rem;
    width: 100%;

    ${Ul.tablet} {
        height: auto;
    }
`,Qc=p.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0.702rem 1rem; // To make it exactly 3rem height
    width: 100%;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }
`,Gc=f`
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
`,Xc=p.div`
    position: relative;
    border: 1px solid ${Rl.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Rl.Neutral[8]};

    :focus-within {
        border: 1px solid ${Rl.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${t=>t.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${Gc} 0.5s ease-in-out;
            `}

    ${t=>t.disabled?g`
                background: ${Rl.Neutral[6](t)};

                ${Qc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Rl.Neutral[5](t)};
                    box-shadow: none;
                }
            `:t.error?g`
                border: 1px solid ${Rl.Validation.Red.Border(t)};

                :focus-within {
                    border: 1px solid ${Rl.Validation.Red.Border(t)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `:void 0}
`,Zc=p.div`
    transform: rotate(${t=>t.expanded?180:0}deg);
    transition: ${qc};
    margin-left: 1rem;
`,Kc=p(fc)`
    color: ${Rl.Neutral[3]};
    font-size: ${nc.Body.fontSize}rem;
    font-weight: bold;
`,Yc=p.div`
    height: 1px;
    background: ${Rl.Neutral[5]};
    margin: 0 0.5rem;
`,Jc=p.div`
    display: flex;
    flex: 1;
`,tu=p(mc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${t=>{if("middle"!==t.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,eu=p(tu)`
    color: ${Rl.Neutral[3]};
`,nu=({children:t,show:n,error:r,disabled:i,testId:a,onBlur:l})=>{const c=s(),u=s(n);o((()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)})),[]),o((()=>{u.current=n}),[n]);const d=t=>{if(!i){if(c&&c.current.contains(t.target))return;u.current&&l()}};return e(Uc,{children:e(Xc,{ref:c,error:r&&!n,disabled:i,expanded:n,"data-testid":a,children:t})})},ru=({selectedOption:r,placeholder:i="Select",options:l,disabled:c,error:u,"data-testid":d,id:h,enableSearch:p=!1,searchFunction:f,searchPlaceholder:g,valueExtractor:m,valueToStringFunction:y,listExtractor:v,displayValueExtractor:b,onSelectOption:w,listStyleWidth:_,onShowOptions:S,onHideOptions:x,onRetry:$,optionsLoadState:k="success",optionTruncationType:F="end",...O})=>{const[j,B]=a(r),[C,z]=a(!1),A=s(),P=s();o((()=>{B(r)}),[r]);const D=(t,e)=>{B(t),z(!1),H(!1),A&&A.current.focus(),w&&w(t,e)},E=()=>{C&&(z(!1),H(!1)),A&&A.current.focus()},I=t=>{if("middle"===F){let e=0;return P&&P.current&&(e=P.current.getBoundingClientRect().width),Sc.truncateOneLine((t=>"string"==typeof t?t:y(t)||t.toString())(t),e,120,8)}return t},H=t=>{!t&&x&&x(),t&&S&&S()};return t(nu,{show:C,error:u&&!C,disabled:c,testId:d,onBlur:()=>{z(!1),H(!1)},children:[e(Qc,{ref:A,type:"button","data-testid":h||"selector",onClick:t=>{t.preventDefault(),c||(z(!C),H(!C))},...O,children:t(n,{children:[e(Jc,{ref:P,children:j?e(tu,{truncateType:F,children:I(b?b(j):m?m(j):j.toString())}):e(eu,{truncateType:F,children:i})}),e(Zc,{expanded:C,children:e(Kc,{type:"chevron-down"})})]})}),C&&e(Yc,{}),l&&l.length>0?e(Wc,{listItems:l,onSelectItem:D,onDismiss:E,valueExtractor:m,listExtractor:v,listStyleWidth:_,visible:C,enableSearch:p,searchPlaceholder:g,searchFunction:f,"data-testid":"dropdown-list",selectedItems:j?[j]:[],onRetry:$,itemsLoadState:k,itemTruncationType:F}):null]})},iu=({selectedOptions:r,placeholder:i="Select",options:l,disabled:c,error:u,"data-testid":d,enableSearch:h=!1,searchFunction:p,searchPlaceholder:f,valueExtractor:g,listExtractor:m,onSelectOptions:y,listStyleWidth:v,onShowOptions:b,onHideOptions:w,onRetry:_,optionsLoadState:S="success",optionTruncationType:x="end",...$})=>{const[k,F]=a(r||[]),[O,j]=a(!1),B=s();o((()=>{F(r||[])}),[r]);const C=(t,e)=>{const n=[...k],r=Ri(k,(t=>(g?g(t):t)===e));r>-1?n.splice(r,1):n.push(t),F(n),P(!1),B&&B.current.focus(),y&&y(n)},z=()=>{O&&(j(!1),P(!1)),B&&B.current.focus()},A=()=>{k&&k.length>0?(F([]),y([])):(F(l),y(l))},P=t=>{!t&&w&&w(),t&&b&&b()};return t(nu,{show:O,error:u&&!O,disabled:c,testId:d,onBlur:()=>{j(!1),P(!1)},children:[e(Qc,{ref:B,type:"button","data-testid":"selector",onClick:t=>{t.preventDefault(),c||(j(!O),P(!O))},...$,children:t(n,{children:[e(Jc,{children:k&&0!==k.length?e(tu,{children:k&&0!=k.length?`${k.length} selected`:i}):e(eu,{truncateType:x,children:i})}),e(Zc,{expanded:O,children:e(Kc,{type:"chevron-down"})})]})}),O&&e(Yc,{}),l&&l.length>0||_?e(Wc,{listItems:l,onSelectItem:C,onDismiss:z,valueExtractor:g,listExtractor:m,listStyleWidth:v,visible:O,enableSearch:h,searchFunction:p,searchPlaceholder:f,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:k,onSelectAll:A,onRetry:_,itemsLoadState:S,itemTruncationType:x}):null]})};export{iu as InputMultiSelect,ru as InputSelect};
//# sourceMappingURL=index.js.map
