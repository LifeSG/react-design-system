import e,{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import*as i from"react";import o,{useEffect as a,useLayoutEffect as s,useState as l,useRef as c,forwardRef as u,useCallback as d,useContext as h,useMemo as p}from"react";import{unstable_batchedUpdates as f}from"react-dom";import g,{keyframes as m,css as y}from"styled-components";var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var b=function(){this.__data__=[],this.size=0};var w=function(e,t){return e===t||e!=e&&t!=t},_=w;var x=function(e,t){for(var n=e.length;n--;)if(_(e[n][0],t))return n;return-1},S=x,$=Array.prototype.splice;var C=x;var k=x;var F=x;var B=b,j=function(e){var t=this.__data__,n=S(t,e);return!(n<0)&&(n==t.length-1?t.pop():$.call(t,n,1),--this.size,!0)},O=function(e){var t=this.__data__,n=C(t,e);return n<0?void 0:t[n][1]},A=function(e){return k(this.__data__,e)>-1},I=function(e,t){var n=this.__data__,r=F(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function P(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}P.prototype.clear=B,P.prototype.delete=j,P.prototype.get=O,P.prototype.has=A,P.prototype.set=I;var z=P,E=z;var D=function(){this.__data__=new E,this.size=0};var H=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var N=function(e){return this.__data__.get(e)};var M=function(e){return this.__data__.has(e)},T="object"==typeof v&&v&&v.Object===Object&&v,L=T,V="object"==typeof self&&self&&self.Object===Object&&self,R=L||V||Function("return this")(),W=R.Symbol,q=W,U=Object.prototype,Q=U.hasOwnProperty,Z=U.toString,G=q?q.toStringTag:void 0;var X=function(e){var t=Q.call(e,G),n=e[G];try{e[G]=void 0;var r=!0}catch(e){}var i=Z.call(e);return r&&(t?e[G]=n:delete e[G]),i},K=Object.prototype.toString;var Y=X,J=function(e){return K.call(e)},ee=W?W.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?Y(e):J(e)};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},re=te,ie=ne;var oe,ae=function(e){if(!ie(e))return!1;var t=re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},se=R["__core-js_shared__"],le=(oe=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var ce=function(e){return!!le&&le in e},ue=Function.prototype.toString;var de=function(e){if(null!=e){try{return ue.call(e)}catch(e){}try{return e+""}catch(e){}}return""},he=ae,pe=ce,fe=ne,ge=de,me=/^\[object .+?Constructor\]$/,ye=Function.prototype,ve=Object.prototype,be=ye.toString,we=ve.hasOwnProperty,_e=RegExp("^"+be.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xe=function(e){return!(!fe(e)||pe(e))&&(he(e)?_e:me).test(ge(e))},Se=function(e,t){return null==e?void 0:e[t]};var $e=function(e,t){var n=Se(e,t);return xe(n)?n:void 0},Ce=$e(R,"Map"),ke=$e(Object,"create"),Fe=ke;var Be=function(){this.__data__=Fe?Fe(null):{},this.size=0};var je=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=ke,Ae=Object.prototype.hasOwnProperty;var Ie=function(e){var t=this.__data__;if(Oe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ae.call(t,e)?t[e]:void 0},Pe=ke,ze=Object.prototype.hasOwnProperty;var Ee=ke;var De=Be,He=je,Ne=Ie,Me=function(e){var t=this.__data__;return Pe?void 0!==t[e]:ze.call(t,e)},Te=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ee&&void 0===t?"__lodash_hash_undefined__":t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Le.prototype.clear=De,Le.prototype.delete=He,Le.prototype.get=Ne,Le.prototype.has=Me,Le.prototype.set=Te;var Ve=Le,Re=z,We=Ce;var qe=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ue=function(e,t){var n=e.__data__;return qe(t)?n["string"==typeof t?"string":"hash"]:n.map},Qe=Ue;var Ze=Ue;var Ge=Ue;var Xe=Ue;var Ke=function(){this.size=0,this.__data__={hash:new Ve,map:new(We||Re),string:new Ve}},Ye=function(e){var t=Qe(this,e).delete(e);return this.size-=t?1:0,t},Je=function(e){return Ze(this,e).get(e)},et=function(e){return Ge(this,e).has(e)},tt=function(e,t){var n=Xe(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function nt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}nt.prototype.clear=Ke,nt.prototype.delete=Ye,nt.prototype.get=Je,nt.prototype.has=et,nt.prototype.set=tt;var rt=nt,it=z,ot=Ce,at=rt;var st=z,lt=D,ct=H,ut=N,dt=M,ht=function(e,t){var n=this.__data__;if(n instanceof it){var r=n.__data__;if(!ot||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new at(r)}return n.set(e,t),this.size=n.size,this};function pt(e){var t=this.__data__=new st(e);this.size=t.size}pt.prototype.clear=lt,pt.prototype.delete=ct,pt.prototype.get=ut,pt.prototype.has=dt,pt.prototype.set=ht;var ft=pt;var gt=rt,mt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},yt=function(e){return this.__data__.has(e)};function vt(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new gt;++t<n;)this.add(e[t])}vt.prototype.add=vt.prototype.push=mt,vt.prototype.has=yt;var bt=vt,wt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},_t=function(e,t){return e.has(t)};var xt=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new bt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!wt(t,(function(e,t){if(!_t(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var St=R.Uint8Array,$t=w,Ct=xt,kt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Ft=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Bt=W?W.prototype:void 0,jt=Bt?Bt.valueOf:void 0;var Ot=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new St(e),new St(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return $t(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=kt;case"[object Set]":var l=1&r;if(s||(s=Ft),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Ct(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(jt)return jt.call(e)==jt.call(t)}return!1};var At=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},It=Array.isArray,Pt=At,zt=It;var Et=function(e,t,n){var r=t(e);return zt(e)?r:Pt(r,n(e))};var Dt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Ht=function(){return[]},Nt=Object.prototype.propertyIsEnumerable,Mt=Object.getOwnPropertySymbols,Tt=Mt?function(e){return null==e?[]:(e=Object(e),Dt(Mt(e),(function(t){return Nt.call(e,t)})))}:Ht;var Lt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Vt=function(e){return null!=e&&"object"==typeof e},Rt=te,Wt=Vt;var qt=function(e){return Wt(e)&&"[object Arguments]"==Rt(e)},Ut=Vt,Qt=Object.prototype,Zt=Qt.hasOwnProperty,Gt=Qt.propertyIsEnumerable,Xt=qt(function(){return arguments}())?qt:function(e){return Ut(e)&&Zt.call(e,"callee")&&!Gt.call(e,"callee")},Kt={exports:{}};var Yt=function(){return!1};!function(e,t){var n=R,r=Yt,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(Kt,Kt.exports);var Jt=/^(?:0|[1-9]\d*)$/;var en=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Jt.test(e))&&e>-1&&e%1==0&&e<t};var tn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},nn=te,rn=tn,on=Vt,an={};an["[object Float32Array]"]=an["[object Float64Array]"]=an["[object Int8Array]"]=an["[object Int16Array]"]=an["[object Int32Array]"]=an["[object Uint8Array]"]=an["[object Uint8ClampedArray]"]=an["[object Uint16Array]"]=an["[object Uint32Array]"]=!0,an["[object Arguments]"]=an["[object Array]"]=an["[object ArrayBuffer]"]=an["[object Boolean]"]=an["[object DataView]"]=an["[object Date]"]=an["[object Error]"]=an["[object Function]"]=an["[object Map]"]=an["[object Number]"]=an["[object Object]"]=an["[object RegExp]"]=an["[object Set]"]=an["[object String]"]=an["[object WeakMap]"]=!1;var sn=function(e){return on(e)&&rn(e.length)&&!!an[nn(e)]};var ln=function(e){return function(t){return e(t)}},cn={exports:{}};!function(e,t){var n=T,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(cn,cn.exports);var un=sn,dn=ln,hn=cn.exports,pn=hn&&hn.isTypedArray,fn=pn?dn(pn):un,gn=Lt,mn=Xt,yn=It,vn=Kt.exports,bn=en,wn=fn,_n=Object.prototype.hasOwnProperty;var xn=function(e,t){var n=yn(e),r=!n&&mn(e),i=!n&&!r&&vn(e),o=!n&&!r&&!i&&wn(e),a=n||r||i||o,s=a?gn(e.length,String):[],l=s.length;for(var c in e)!t&&!_n.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||bn(c,l))||s.push(c);return s},Sn=Object.prototype;var $n=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Sn)};var Cn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),kn=$n,Fn=Cn,Bn=Object.prototype.hasOwnProperty;var jn=ae,On=tn;var An=function(e){return null!=e&&On(e.length)&&!jn(e)},In=xn,Pn=function(e){if(!kn(e))return Fn(e);var t=[];for(var n in Object(e))Bn.call(e,n)&&"constructor"!=n&&t.push(n);return t},zn=An;var En=function(e){return zn(e)?In(e):Pn(e)},Dn=Et,Hn=Tt,Nn=En;var Mn=function(e){return Dn(e,Nn,Hn)},Tn=Object.prototype.hasOwnProperty;var Ln=function(e,t,n,r,i,o){var a=1&n,s=Mn(e),l=s.length;if(l!=Mn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Tn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(e),o.delete(t),p},Vn=$e(R,"DataView"),Rn=Ce,Wn=$e(R,"Promise"),qn=$e(R,"Set"),Un=$e(R,"WeakMap"),Qn=te,Zn=de,Gn="[object Map]",Xn="[object Promise]",Kn="[object Set]",Yn="[object WeakMap]",Jn="[object DataView]",er=Zn(Vn),tr=Zn(Rn),nr=Zn(Wn),rr=Zn(qn),ir=Zn(Un),or=Qn;(Vn&&or(new Vn(new ArrayBuffer(1)))!=Jn||Rn&&or(new Rn)!=Gn||Wn&&or(Wn.resolve())!=Xn||qn&&or(new qn)!=Kn||Un&&or(new Un)!=Yn)&&(or=function(e){var t=Qn(e),n="[object Object]"==t?e.constructor:void 0,r=n?Zn(n):"";if(r)switch(r){case er:return Jn;case tr:return Gn;case nr:return Xn;case rr:return Kn;case ir:return Yn}return t});var ar=ft,sr=xt,lr=Ot,cr=Ln,ur=or,dr=It,hr=Kt.exports,pr=fn,fr="[object Arguments]",gr="[object Array]",mr="[object Object]",yr=Object.prototype.hasOwnProperty;var vr=function(e,t,n,r,i,o){var a=dr(e),s=dr(t),l=a?gr:ur(e),c=s?gr:ur(t),u=(l=l==fr?mr:l)==mr,d=(c=c==fr?mr:c)==mr,h=l==c;if(h&&hr(e)){if(!hr(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new ar),a||pr(e)?sr(e,t,n,r,i,o):lr(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&yr.call(e,"__wrapped__"),f=d&&yr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new ar),i(g,m,n,r,o)}}return!!h&&(o||(o=new ar),cr(e,t,n,r,i,o))},br=Vt;var wr=function e(t,n,r,i,o){return t===n||(null==t||null==n||!br(t)&&!br(n)?t!=t&&n!=n:vr(t,n,r,i,e,o))},_r=ft,xr=wr;var Sr=ne;var $r=function(e){return e==e&&!Sr(e)},Cr=$r,kr=En;var Fr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Br=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new _r;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?xr(u,c,3,r,d):h))return!1}}return!0},jr=function(e){for(var t=kr(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Cr(i)]}return t},Or=Fr;var Ar=function(e){var t=jr(e);return 1==t.length&&t[0][2]?Or(t[0][0],t[0][1]):function(n){return n===e||Br(n,e,t)}},Ir=te,Pr=Vt;var zr=function(e){return"symbol"==typeof e||Pr(e)&&"[object Symbol]"==Ir(e)},Er=It,Dr=zr,Hr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nr=/^\w*$/;var Mr=function(e,t){if(Er(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Dr(e))||(Nr.test(e)||!Hr.test(e)||null!=t&&e in Object(t))},Tr=rt;function Lr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Lr.Cache||Tr),n}Lr.Cache=Tr;var Vr=Lr;var Rr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wr=/\\(\\)?/g,qr=function(e){var t=Vr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Rr,(function(e,n,r,i){t.push(r?i.replace(Wr,"$1"):n||e)})),t}));var Ur=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Qr=It,Zr=zr,Gr=W?W.prototype:void 0,Xr=Gr?Gr.toString:void 0;var Kr=function e(t){if("string"==typeof t)return t;if(Qr(t))return Ur(t,e)+"";if(Zr(t))return Xr?Xr.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Yr=Kr;var Jr=It,ei=Mr,ti=qr,ni=function(e){return null==e?"":Yr(e)};var ri=function(e,t){return Jr(e)?e:ei(e,t)?[e]:ti(ni(e))},ii=zr;var oi=function(e){if("string"==typeof e||ii(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},ai=ri,si=oi;var li=function(e,t){for(var n=0,r=(t=ai(t,e)).length;null!=e&&n<r;)e=e[si(t[n++])];return n&&n==r?e:void 0},ci=li;var ui=function(e,t,n){var r=null==e?void 0:ci(e,t);return void 0===r?n:r};var di=ri,hi=Xt,pi=It,fi=en,gi=tn,mi=oi;var yi=function(e,t){return null!=e&&t in Object(e)},vi=function(e,t,n){for(var r=-1,i=(t=di(t,e)).length,o=!1;++r<i;){var a=mi(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&gi(i)&&fi(a,i)&&(pi(e)||hi(e))};var bi=wr,wi=ui,_i=function(e,t){return null!=e&&vi(e,t,yi)},xi=Mr,Si=$r,$i=Fr,Ci=oi;var ki=li;var Fi=function(e){return function(t){return null==t?void 0:t[e]}},Bi=function(e){return function(t){return ki(t,e)}},ji=Mr,Oi=oi;var Ai=Ar,Ii=function(e,t){return xi(e)&&Si(t)?$i(Ci(e),t):function(n){var r=wi(n,e);return void 0===r&&r===t?_i(n,e):bi(t,r,3)}},Pi=function(e){return e},zi=It,Ei=function(e){return ji(e)?Fi(Oi(e)):Bi(e)};var Di=function(e){return"function"==typeof e?e:null==e?Pi:"object"==typeof e?zi(e)?Ii(e[0],e[1]):Ai(e):Ei(e)},Hi=Di,Ni=An,Mi=En;var Ti=function(e){return function(t,n,r){var i=Object(t);if(!Ni(t)){var o=Hi(n);t=Mi(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var Li=/\s/;var Vi=function(e){for(var t=e.length;t--&&Li.test(e.charAt(t)););return t},Ri=/^\s+/;var Wi=function(e){return e?e.slice(0,Vi(e)+1).replace(Ri,""):e},qi=ne,Ui=zr,Qi=/^[-+]0x[0-9a-f]+$/i,Zi=/^0b[01]+$/i,Gi=/^0o[0-7]+$/i,Xi=parseInt;var Ki=function(e){if("number"==typeof e)return e;if(Ui(e))return NaN;if(qi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=qi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Wi(e);var n=Zi.test(e);return n||Gi.test(e)?Xi(e.slice(2),n?2:8):Qi.test(e)?NaN:+e},Yi=1/0;var Ji=function(e){return e?(e=Ki(e))===Yi||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var eo=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},to=Di,no=function(e){var t=Ji(e),n=t%1;return t==t?n?t-n:t:0},ro=Math.max;var io=Ti((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:no(n);return i<0&&(i=ro(r+i,0)),eo(e,to(t),i)})),oo=wr;var ao=function(e,t){return oo(e,t)};let so=$o();const lo=e=>wo(e,so);let co=$o();lo.write=e=>wo(e,co);let uo=$o();lo.onStart=e=>wo(e,uo);let ho=$o();lo.onFrame=e=>wo(e,ho);let po=$o();lo.onFinish=e=>wo(e,po);let fo=[];lo.setTimeout=(e,t)=>{let n=lo.now()+t,r=()=>{let e=fo.findIndex((e=>e.cancel==r));~e&&fo.splice(e,1),vo-=~e?1:0},i={time:n,handler:e,cancel:r};return fo.splice(go(n),0,i),vo+=1,_o(),i};let go=e=>~(~fo.findIndex((t=>t.time>e))||~fo.length);lo.cancel=e=>{uo.delete(e),ho.delete(e),po.delete(e),so.delete(e),co.delete(e)},lo.sync=e=>{bo=!0,lo.batchedUpdates(e),bo=!1},lo.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,lo.onStart(n)}return r.handler=e,r.cancel=()=>{uo.delete(n),t=null},r};let mo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};lo.use=e=>mo=e,lo.now="undefined"!=typeof performance?()=>performance.now():Date.now,lo.batchedUpdates=e=>e(),lo.catch=console.error,lo.frameLoop="always",lo.advance=()=>{"demand"!==lo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):So()};let yo=-1,vo=0,bo=!1;function wo(e,t){bo?(t.delete(e),e(0)):(t.add(e),_o())}function _o(){yo<0&&(yo=0,"demand"!==lo.frameLoop&&mo(xo))}function xo(){~yo&&(mo(xo),lo.batchedUpdates(So))}function So(){let e=yo;yo=lo.now();let t=go(yo);t&&(Co(fo.splice(0,t),(e=>e.handler())),vo-=t),vo?(uo.flush(),so.flush(e?Math.min(64,yo-e):16.667),ho.flush(),co.flush(),po.flush()):yo=-1}function $o(){let e=new Set,t=e;return{add(n){vo+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(vo-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,vo-=t.size,Co(t,(t=>t(n)&&e.add(t))),vo+=e.size,t=e)}}}function Co(e,t){e.forEach((e=>{try{t(e)}catch(e){lo.catch(e)}}))}function ko(){}const Fo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Bo(e,t){if(Fo.arr(e)){if(!Fo.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const jo=(e,t)=>e.forEach(t);function Oo(e,t,n){if(Fo.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Ao=e=>Fo.und(e)?[]:Fo.arr(e)?e:[e];function Io(e,t){if(e.size){const n=Array.from(e);e.clear(),jo(n,t)}}const Po=(e,...t)=>Io(e,(e=>e(...t))),zo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Eo,Do,Ho=null,No=!1,Mo=ko;var To=Object.freeze({__proto__:null,get createStringInterpolator(){return Eo},get to(){return Do},get colors(){return Ho},get skipAnimation(){return No},get willAdvance(){return Mo},assign:e=>{e.to&&(Do=e.to),e.now&&(lo.now=e.now),void 0!==e.colors&&(Ho=e.colors),null!=e.skipAnimation&&(No=e.skipAnimation),e.createStringInterpolator&&(Eo=e.createStringInterpolator),e.requestAnimationFrame&&lo.use(e.requestAnimationFrame),e.batchedUpdates&&(lo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Mo=e.willAdvance),e.frameLoop&&(lo.frameLoop=e.frameLoop)}});const Lo=new Set;let Vo=[],Ro=[],Wo=0;const qo={get idle(){return!Lo.size&&!Vo.length},start(e){Wo>e.priority?(Lo.add(e),lo.onStart(Uo)):(Qo(e),lo(Go))},advance:Go,sort(e){if(Wo)lo.onFrame((()=>qo.sort(e)));else{const t=Vo.indexOf(e);~t&&(Vo.splice(t,1),Zo(e))}},clear(){Vo=[],Lo.clear()}};function Uo(){Lo.forEach(Qo),Lo.clear(),lo(Go)}function Qo(e){Vo.includes(e)||Zo(e)}function Zo(e){Vo.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Vo,(t=>t.priority>e.priority)),0,e)}function Go(e){const t=Ro;for(let n=0;n<Vo.length;n++){const r=Vo[n];Wo=r.priority,r.idle||(Mo(r),r.advance(e),r.idle||t.push(r))}return Wo=0,Ro=Vo,Ro.length=0,Vo=t,Vo.length>0}const Xo="[-+]?\\d*\\.?\\d+",Ko=Xo+"%";function Yo(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Jo=new RegExp("rgb"+Yo(Xo,Xo,Xo)),ea=new RegExp("rgba"+Yo(Xo,Xo,Xo,Xo)),ta=new RegExp("hsl"+Yo(Xo,Ko,Ko)),na=new RegExp("hsla"+Yo(Xo,Ko,Ko,Xo)),ra=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ia=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,oa=/^#([0-9a-fA-F]{6})$/,aa=/^#([0-9a-fA-F]{8})$/;function sa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function la(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=sa(i,r,e+1/3),a=sa(i,r,e),s=sa(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ca(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ua(e){return(parseFloat(e)%360+360)%360/360}function da(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ha(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function pa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=oa.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ho&&void 0!==Ho[e]?Ho[e]:(t=Jo.exec(e))?(ca(t[1])<<24|ca(t[2])<<16|ca(t[3])<<8|255)>>>0:(t=ea.exec(e))?(ca(t[1])<<24|ca(t[2])<<16|ca(t[3])<<8|da(t[4]))>>>0:(t=ra.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=aa.exec(e))?parseInt(t[1],16)>>>0:(t=ia.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ta.exec(e))?(255|la(ua(t[1]),ha(t[2]),ha(t[3])))>>>0:(t=na.exec(e))?(la(ua(t[1]),ha(t[2]),ha(t[3]))|da(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const fa=(e,t,n)=>{if(Fo.fun(e))return e;if(Fo.arr(e))return fa({range:e,output:t,extrapolate:n});if(Fo.str(e.output[0]))return Eo(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const ga=1.70158,ma=1.525*ga,ya=ga+1,va=2*Math.PI/3,ba=2*Math.PI/4.5,wa=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},_a={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ya*e*e*e-ga*e*e,easeOutBack:e=>1+ya*Math.pow(e-1,3)+ga*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ma)/2:(Math.pow(2*e-2,2)*((ma+1)*(2*e-2)+ma)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*va),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*va)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ba)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ba)/2+1,easeInBounce:e=>1-wa(1-e),easeOutBounce:wa,easeInOutBounce:e=>e<.5?(1-wa(1-2*e))/2:(1+wa(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e;return((e,t,n)=>Math.min(Math.max(n,e),t))(0,1,("end"===t?Math.floor(r):Math.ceil(r))/e)}};function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}const Sa=Symbol.for("FluidValue.get"),$a=Symbol.for("FluidValue.observers"),Ca=e=>Boolean(e&&e[Sa]),ka=e=>e&&e[Sa]?e[Sa]():e,Fa=e=>e[$a]||null;function Ba(e,t){let n=e[$a];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class ja{constructor(e){if(this[Sa]=void 0,this[$a]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Oa(this,e)}}const Oa=(e,t)=>Pa(e,Sa,t);function Aa(e,t){if(e[Sa]){let n=e[$a];n||Pa(e,$a,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ia(e,t){let n=e[$a];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[$a]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Pa=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),za=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ea=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Da=new RegExp(`(${za.source})(%|[a-z]+)`,"i"),Ha=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Na=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ma=e=>{const[t,n]=Ta(e);if(!t||zo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Na.test(n)?Ma(n):n||e},Ta=e=>{const t=Na.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let La;const Va=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Ra=e=>{La||(La=Ho?new RegExp(`(${Object.keys(Ho).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ka(e).replace(Na,Ma).replace(Ea,pa).replace(La,pa))),n=t.map((e=>e.match(za).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>fa(xa({},e,{output:t}))));return e=>{var n;const i=!Da.test(t[0])&&(null==(n=t.find((e=>Da.test(e))))?void 0:n.replace(za,""));let o=0;return t[0].replace(za,(()=>`${r[o++](e)}${i||""}`)).replace(Ha,Va)}},Wa="react-spring: ",qa=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Wa}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ua=qa(console.warn);const Qa=qa(console.warn);function Za(e){return Fo.str(e)&&("#"==e[0]||/\d/.test(e)||!zo()&&Na.test(e)||e in(Ho||{}))}const Ga=zo()?a:s,Xa=()=>{const e=c(!1);return Ga((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ka(){const e=l()[1],t=Xa();return()=>{t.current&&e(Math.random())}}const Ya=e=>a(e,Ja),Ja=[];function es(e){const t=c();return a((()=>{t.current=e})),t.current}const ts=Symbol.for("Animated:node"),ns=e=>e&&e[ts],rs=(e,t)=>{return n=e,r=ts,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},is=e=>e&&e[ts]&&e[ts].getPayload();class os{constructor(){this.payload=void 0,rs(this,this)}getPayload(){return this.payload||[]}}class as extends os{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Fo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new as(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Fo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Fo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ss extends as{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=fa({output:[e,e]})}static create(e){return new ss(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Fo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=fa({output:[this.getValue(),e]})),this._value=0,super.reset()}}const ls={dependencies:null};class cs extends os{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Oo(this.source,((n,r)=>{var i;(i=n)&&i[ts]===i?t[r]=n.getValue(e):Ca(n)?t[r]=ka(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&jo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Oo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ls.dependencies&&Ca(e)&&ls.dependencies.add(e);const t=is(e);t&&jo(t,(e=>this.add(e)))}}class us extends cs{constructor(e){super(e)}static create(e){return new us(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(ds)),!0)}}function ds(e){return(Za(e)?ss:as).create(e)}function hs(e){const t=ns(e);return t?t.constructor:Fo.arr(e)?us:Za(e)?ss:as}function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ps.apply(this,arguments)}const fs=(e,t)=>{const n=!Fo.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((r,o)=>{const s=c(null),l=n&&d((e=>{s.current=function(e,t){e&&(Fo.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,h]=function(e,t){const n=new Set;ls.dependencies=n,e.style&&(e=ps({},e,{style:t.createAnimatedStyle(e.style)}));return e=new cs(e),ls.dependencies=null,[e,n]}(r,t),p=Ka(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&p()},g=new gs(f,h),m=c();Ga((()=>(m.current=g,jo(h,(e=>Aa(e,g))),()=>{m.current&&(jo(m.current.deps,(e=>Ia(e,m.current))),lo.cancel(m.current.update))}))),a(f,[]),Ya((()=>()=>{const e=m.current;jo(e.deps,(t=>Ia(t,e)))}));const y=t.getComponentProps(u.getValue());return i.createElement(e,ps({},y,{ref:l}))}))};class gs{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&lo.write(this.update)}}const ms=Symbol.for("AnimatedComponent"),ys=e=>Fo.str(e)?e:e&&Fo.str(e.displayName)?e.displayName:Fo.fun(e)&&e.name||null;function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}function bs(e,...t){return Fo.fun(e)?e(...t):e}const ws=(e,t)=>!0===e||!!(t&&e&&(Fo.fun(e)?e(t):Ao(e).includes(t))),_s=(e,t)=>Fo.obj(e)?t&&e[t]:e,xs=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ss=e=>e,$s=(e,t=Ss)=>{let n=Cs;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Fo.und(n)||(r[i]=n)}return r},Cs=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ks={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Fs(e){const t=function(e){const t={};let n=0;if(Oo(e,((e,r)=>{ks[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Oo(e,((e,r)=>r in t||(n[r]=e))),n}return vs({},e)}function Bs(e){return e=ka(e),Fo.arr(e)?e.map(Bs):Za(e)?To.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function js(e){return Fo.fun(e)||Fo.arr(e)&&Fo.obj(e[0])}const Os=vs({},{tension:170,friction:26},{mass:1,damping:1,easing:_a.linear,clamp:!1});class As{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Os)}}function Is(e,t){if(Fo.und(t.decay)){const n=!Fo.und(t.tension)||!Fo.und(t.friction);!n&&Fo.und(t.frequency)&&Fo.und(t.damping)&&Fo.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Ps=[];class zs{constructor(){this.changed=!1,this.values=Ps,this.toValues=null,this.fromValues=Ps,this.to=void 0,this.from=void 0,this.config=new As,this.immediate=!1}}function Es(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ws(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{Fo.und(n.pause)||(i.paused=ws(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||ws(e,t)),c=bs(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-lo.now()}function p(){c>0&&!To.skipAnimation?(i.delayed=!0,u=lo.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(vs({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Ds=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ms(e.get()):t.every((e=>e.noop))?Hs(e.get()):Ns(e.get(),t.every((e=>e.finished))),Hs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ns=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ms=e=>({value:e,cancelled:!0,finished:!1});function Ts(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=$s(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Ms(r)||i!==n.asyncId&&Ns(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Vs,a=new Rs;return(async()=>{if(To.skipAnimation)throw Ls(n),a.result=Ns(r,!1),d(a),a;p(o);const s=Fo.obj(e)?vs({},e):vs({},t,{to:e});s.parentId=i,Oo(c,((e,t)=>{Fo.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(To.skipAnimation)return Ls(n),Ns(r,!1);try{let t;t=Fo.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Ns(r.get(),!0,!1)}catch(e){if(e instanceof Vs)g=e.result;else{if(!(e instanceof Rs))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Fo.fun(a)&&lo.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Ls(e,t){Io(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Vs extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Rs extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ws=e=>e instanceof Us;let qs=1;class Us extends ja{constructor(...e){super(...e),this.id=qs++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ns(this);return e&&e.getValue()}to(...e){return To.to(this,e)}interpolate(...e){return Ua(`${Wa}The "interpolate" function is deprecated in v9 (use "to" instead)`),To.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ba(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||qo.sort(this),Ba(this,{type:"priority",parent:this,priority:e})}}const Qs=Symbol.for("SpringPhase"),Zs=e=>(1&e[Qs])>0,Gs=e=>(2&e[Qs])>0,Xs=e=>(4&e[Qs])>0,Ks=(e,t)=>t?e[Qs]|=3:e[Qs]&=-3,Ys=(e,t)=>t?e[Qs]|=4:e[Qs]&=-5;class Js extends Us{constructor(e,t){if(super(),this.key=void 0,this.animation=new zs,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Fo.und(e)||!Fo.und(t)){const n=Fo.obj(e)?vs({},e):vs({},t,{from:e});Fo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Gs(this)||this._state.asyncTo)||Xs(this)}get goal(){return ka(this.animation.to)}get velocity(){const e=ns(this);return e instanceof as?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Zs(this)}get isAnimating(){return Gs(this)}get isPaused(){return Xs(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=is(r.to);!a&&Ca(r.to)&&(o=Ao(ka(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ss?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Fo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Fo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Fo.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=ns(this),l=s.getValue();if(t){const e=ka(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return lo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Gs(this)){const{to:e,config:t}=this.animation;lo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Fo.und(e)?(n=this.queue||[],this.queue=[]):n=[Fo.obj(e)?e:vs({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Ds(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ls(this._state,e&&this._lastCallId),lo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Fo.obj(n)?n[t]:n,(null==n||js(n))&&(n=void 0),r=Fo.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Zs(this)||(e.reverse&&([n,r]=[r,n]),r=ka(r),Fo.und(r)?ns(this)||this._set(n):this._set(r)),i}_update(e,t){let n=vs({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,$s(n,((e,t)=>/^on/.test(t)?_s(e,r):e))),al(this,n,"onProps"),sl(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Es(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Xs(this)||(Ys(this,!0),Po(a.pauseQueue),sl(this,"onPause",Ns(this,el(this,this.animation.to)),this))},resume:()=>{Xs(this)&&(Ys(this,!1),Gs(this)&&this._resume(),Po(a.resumeQueue),sl(this,"onResume",Ns(this,el(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=tl(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ms(this));const r=!Fo.und(e.to),i=!Fo.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ms(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Fo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Bo(d,c);h&&(s.from=d),d=ka(d);const p=!Bo(u,l);p&&this._focus(u);const f=js(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Is(n=vs({},n),t),t=vs({},n,t)),Is(e,t),Object.assign(e,t);for(const t in Os)null==e[t]&&(e[t]=Os[t]);let{mass:r,frequency:i,damping:o}=e;Fo.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,bs(t.config,o),t.config!==a.config?bs(a.config,o):void 0);let v=ns(this);if(!v||Fo.und(u))return n(Ns(this,!0));const b=Fo.und(t.reset)?i&&!t.default:!Fo.und(d)&&ws(t.reset,o),w=b?d:this.get(),_=Bs(u),x=Fo.num(_)||Fo.arr(_)||Za(_),S=!f&&(!x||ws(a.immediate||t.immediate,o));if(p){const e=hs(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(_)}}const $=v.constructor;let C=Ca(u),k=!1;if(!C){const e=b||!Zs(this)&&h;(p||e)&&(k=Bo(Bs(w),_),C=!k),(Bo(s.immediate,S)||S)&&Bo(g.decay,m)&&Bo(g.velocity,y)||(C=!0)}if(k&&Gs(this)&&(s.changed&&!b?C=!0:C||this._stop(l)),!f&&((C||Ca(l))&&(s.values=v.getPayload(),s.toValues=Ca(u)?null:$==ss?[1]:Ao(_)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),C)){const{onRest:e}=s;jo(ol,(e=>al(this,t,e)));const r=Ns(this,el(this,l));Po(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&lo.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?bs(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(Ts(t.to,t,this._state,this)):C?this._start():Gs(this)&&!p?this._pendingCalls.add(n):n(Hs(w))}_focus(e){const t=this.animation;e!==t.to&&(Fa(this)&&this._detach(),t.to=e,Fa(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ca(t)&&(Aa(t,this),Ws(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ca(e)&&Ia(e,this)}_set(e,t=!0){const n=ka(e);if(!Fo.und(n)){const e=ns(this);if(!e||!Bo(n,e.getValue())){const r=hs(n);e&&e.constructor==r?e.setValue(n):rs(this,r.create(n)),e&&lo.batchedUpdates((()=>{this._onChange(n,t)}))}}return ns(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,sl(this,"onStart",Ns(this,el(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),bs(this.animation.onChange,e,this)),bs(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ns(this).reset(ka(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Gs(this)||(Ks(this,!0),Xs(this)||this._resume())}_resume(){To.skipAnimation?this.finish():qo.start(this)}_stop(e,t){if(Gs(this)){Ks(this,!1);const n=this.animation;jo(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ba(this,{type:"idle",parent:this});const r=t?Ms(this.get()):Ns(this.get(),el(this,null!=e?e:n.to));Po(this._pendingCalls,r),n.changed&&(n.changed=!1,sl(this,"onRest",r,this))}}}function el(e,t){const n=Bs(t);return Bo(Bs(e.get()),n)}function tl(e,t=e.loop,n=e.to){let r=bs(t);if(r){const i=!0!==r&&Fs(r),o=(i||e).reverse,a=!i||i.reset;return nl(vs({},e,{loop:t,default:!1,pause:void 0,to:!o||js(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function nl(e){const{to:t,from:n}=e=Fs(e),r=new Set;return Fo.obj(t)&&il(t,r),Fo.obj(n)&&il(n,r),e.keys=r.size?Array.from(r):null,e}function rl(e){const t=nl(e);return Fo.und(t.default)&&(t.default=$s(t)),t}function il(e,t){Oo(e,((e,n)=>null!=e&&t.add(n)))}const ol=["onStart","onRest","onChange","onPause","onResume"];function al(e,t,n){e.animation[n]=t[n]!==xs(t,n)?_s(t[n],e.key):void 0}function sl(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const ll=["onStart","onChange","onRest"];let cl=1;class ul{constructor(e,t){this.id=cl++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(vs({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Fo.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(nl(e)),this}start(e){let{queue:t}=this;return e?t=Ao(e).map(nl):this.queue=[],this._flush?this._flush(this,t):(yl(this,t),dl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;jo(Ao(t),(t=>n[t].stop(!!e)))}else Ls(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Fo.und(e))this.start({pause:!0});else{const t=this.springs;jo(Ao(e),(e=>t[e].pause()))}return this}resume(e){if(Fo.und(e))this.start({pause:!1});else{const t=this.springs;jo(Ao(e),(e=>t[e].resume()))}return this}each(e){Oo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Io(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Io(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Io(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}lo.onFrame(this._onFrame)}}function dl(e,t){return Promise.all(t.map((t=>hl(e,t)))).then((t=>Ds(e,t)))}async function hl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Fo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Fo.arr(i)||Fo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):jo(ll,(n=>{const r=t[n];if(Fo.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Po(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===xs(t,"cancel");(u||p&&d.asyncId)&&h.push(Es(++e._lastAsyncId,{props:t,state:d,actions:{pause:ko,resume:ko,start(t,n){p?(Ls(d,e._lastAsyncId),n(Ms(e))):(t.onRest=s,n(Ts(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Ds(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=tl(t,a,i);if(n)return yl(e,[n]),hl(e,n,!0)}return l&&lo.batchedUpdates((()=>l(f,e,e.item))),f}function pl(e,t){const n=vs({},e.springs);return t&&jo(Ao(t),(e=>{Fo.und(e.keys)&&(e=nl(e)),Fo.obj(e.to)||(e=vs({},e,{to:void 0})),ml(n,e,(e=>gl(e)))})),fl(e,n),n}function fl(e,t){Oo(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Aa(t,e))}))}function gl(e,t){const n=new Js;return n.key=e,t&&Aa(n,t),n}function ml(e,t,n){t.keys&&jo(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function yl(e,t){jo(t,(t=>{ml(e.springs,t,(t=>gl(t,e)))}))}const vl=["children"],bl=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,vl);const r=h(wl),o=n.pause||!!r.pause,s=n.immediate||!!r.immediate;n=function(e,t){const[n]=l((()=>({inputs:t,result:e()}))),r=c(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return a((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:s})),[o,s]);const{Provider:u}=wl;return i.createElement(u,{value:n},t)},wl=(_l=bl,xl={},Object.assign(_l,i.createContext(xl)),_l.Provider._context=_l,_l.Consumer._context=_l,_l);var _l,xl;bl.Provider=wl.Provider,bl.Consumer=wl.Consumer;const Sl=()=>{const e=[],t=function(t){Qa(`${Wa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return jo(e,((e,i)=>{if(Fo.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return jo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return jo(e,(e=>e.resume(...arguments))),this},t.set=function(t){jo(e,(e=>e.set(t)))},t.start=function(t){const n=[];return jo(e,((e,r)=>{if(Fo.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return jo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return jo(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Fo.fun(e)?e(n,t):e};return t._getProps=n,t};function $l(e,t){const n=Fo.fun(e),[[r],i]=function(e,t,n){const r=Fo.fun(t)&&t;r&&!n&&(n=[]);const i=p((()=>r||3==arguments.length?Sl():void 0),[]),o=c(0),a=Ka(),s=p((()=>({ctrls:[],queue:[],flush(e,t){const n=pl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?dl(e,t):new Promise((r=>{fl(e,n),s.queue.push((()=>{r(dl(e,t))})),a()}))}})),[]),l=c([...s.ctrls]),u=[],d=es(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=l.current[i]||(l.current[i]=new ul(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=rl(n))}}p((()=>{jo(l.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,f(d,e)}),[e]),p((()=>{f(0,Math.min(d,e))}),n);const g=l.current.map(((e,t)=>pl(e,u[t]))),m=h(bl),y=es(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Ga((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],jo(e,(e=>e()))),jo(l.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Ya((()=>()=>{jo(s.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>vs({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Cl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Cl||(Cl={}));class kl extends Us{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=fa(...t);const n=this._get(),r=hs(n);rs(this,r.create(n))}advance(e){const t=this._get();Bo(t,this.get())||(ns(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Bl(this._active)&&jl(this)}_get(){const e=Fo.arr(this.source)?this.source.map(ka):Ao(ka(this.source));return this.calc(...e)}_start(){this.idle&&!Bl(this._active)&&(this.idle=!1,jo(is(this),(e=>{e.done=!1})),To.skipAnimation?(lo.batchedUpdates((()=>this.advance())),jl(this)):qo.start(this))}_attach(){let e=1;jo(Ao(this.source),(t=>{Ca(t)&&Aa(t,this),Ws(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){jo(Ao(this.source),(e=>{Ca(e)&&Ia(e,this)})),this._active.clear(),jl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ao(this.source).reduce(((e,t)=>Math.max(e,(Ws(t)?t.priority:0)+1)),0))}}function Fl(e){return!1!==e.idle}function Bl(e){return!e.size||Array.from(e).every(Fl)}function jl(e){e.idle||(e.idle=!0,jo(is(e),(e=>{e.done=!0})),Ba(e,{type:"idle",parent:e}))}function Ol(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}To.assign({createStringInterpolator:Ra,to:(e,t)=>new kl(e,t)});const Al=["style","children","scrollTop","scrollLeft","viewBox"],Il=/^--/;function Pl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Il.test(e)||El.hasOwnProperty(e)&&El[e]?(""+t).trim():t+"px"}const zl={};let El={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Dl=["Webkit","Ms","Moz","O"];El=Object.keys(El).reduce(((e,t)=>(Dl.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),El);const Hl=["x","y","z"],Nl=/^(matrix|translate|scale|rotate|skew)/,Ml=/^(translate)/,Tl=/^(rotate|skew)/,Ll=(e,t)=>Fo.num(e)&&0!==e?e+t:e,Vl=(e,t)=>Fo.arr(e)?e.every((e=>Vl(e,t))):Fo.num(e)?e===t:parseFloat(e)===t;class Rl extends cs{constructor(e){let{x:t,y:n,z:r}=e,i=Ol(e,Hl);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Ll(e,"px"))).join(",")})`,Vl(e,0)]))),Oo(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Nl.test(t)){if(delete i[t],Fo.und(e))return;const n=Ml.test(t)?"px":Tl.test(t)?"deg":"";o.push(Ao(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ll(i,n)})`,Vl(i,0)]:e=>[`${t}(${e.map((e=>Ll(e,n))).join(",")})`,Vl(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Wl(o,a)),super(i)}}class Wl extends ja{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return jo(this.inputs,((n,r)=>{const i=ka(n[0]),[o,a]=this.transforms[r](Fo.arr(i)?i:n.map(ka));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&jo(this.inputs,(e=>jo(e,(e=>Ca(e)&&Aa(e,this)))))}observerRemoved(e){0==e&&jo(this.inputs,(e=>jo(e,(e=>Ca(e)&&Ia(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ba(this,e)}}const ql=["scrollTop","scrollLeft"];To.assign({batchedUpdates:f,createStringInterpolator:Ra,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Ul=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new cs(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ys(e)||"Anonymous";return(e=Fo.str(e)?o[e]||(o[e]=fs(e,i)):e[ms]||(e[ms]=fs(e,i))).displayName=`Animated(${t})`,e};return Oo(e,((t,n)=>{Fo.arr(e)&&(n=ys(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Ol(r,Al),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:zl[t]||(zl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Pl(t,i[t]);Il.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Rl(e),getComponentProps:e=>Ol(e,ql)}),Ql=Ul.animated,Zl=(e,t,n)=>t?ui(n,t)||ui(e,t):n||e,Gl=(e,t)=>{const n=t||e.defaultValue;return ui(e.collections,n)};var Xl;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Xl||(Xl={}));const Kl={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yl=e=>t=>{const n=t.theme,r=Gl(Kl,n[Xl.colorScheme]);return n.options&&n.options.color?Zl(r,e,n.options.color):Zl(r,e)},Jl={Brand:{1:Yl("Brand.1"),2:Yl("Brand.2"),3:Yl("Brand.3"),4:Yl("Brand.4"),5:Yl("Brand.5"),6:Yl("Brand.6")},Primary:Yl("Primary"),PrimaryDark:Yl("PrimaryDark"),Secondary:Yl("Secondary"),Accent:{Light:{1:Yl("Accent.Light.1"),2:Yl("Accent.Light.2"),3:Yl("Accent.Light.3"),4:Yl("Accent.Light.4"),5:Yl("Accent.Light.5"),6:Yl("Accent.Light.6")},Dark:{1:Yl("Accent.Dark.1"),2:Yl("Accent.Dark.2"),3:Yl("Accent.Dark.3")}},Neutral:{1:Yl("Neutral.1"),2:Yl("Neutral.2"),3:Yl("Neutral.3"),4:Yl("Neutral.4"),5:Yl("Neutral.5"),6:Yl("Neutral.6"),7:Yl("Neutral.7"),8:Yl("Neutral.8")},Validation:{Green:{Text:Yl("Validation.Green.Text"),Icon:Yl("Validation.Green.Icon"),Border:Yl("Validation.Green.Border"),Background:Yl("Validation.Green.Background")},Orange:{Text:Yl("Validation.Orange.Text"),Icon:Yl("Validation.Orange.Icon"),Border:Yl("Validation.Orange.Border"),Background:Yl("Validation.Orange.Background"),Badge:Yl("Validation.Orange.Badge")},Red:{Text:Yl("Validation.Red.Text"),Icon:Yl("Validation.Red.Icon"),Border:Yl("Validation.Red.Border"),Background:Yl("Validation.Red.Background")},Blue:{Text:Yl("Validation.Blue.Text"),Icon:Yl("Validation.Blue.Icon"),Border:Yl("Validation.Blue.Border"),Background:Yl("Validation.Blue.Background")}},Shadow:{Accent:Yl("Shadow.Accent"),Red:Yl("Shadow.Red"),Elevation:Yl("Shadow.Elevation")}},ec={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},tc=e=>Object.keys(ec).reduce(((t,n)=>{const r=ec[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),nc=tc("max-width"),rc=(tc("min-width"),g.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ic=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,oc=g.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Jl.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ic} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ac=g(oc)`
    animation-delay: -0.45s;
`,sc=g(oc)`
    animation-delay: -0.3s;
`,lc=g(oc)`
    animation-delay: -0.15s;
`,cc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},uc={collections:{base:{D1:{fontFamily:cc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:cc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:cc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:cc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:cc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:cc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:cc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:cc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:cc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:cc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:cc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:cc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:cc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:cc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},dc=e=>t=>{const n=t.theme,r=Gl(uc,n[Xl.textStyleScheme]);return n.options&&n.options.textStyle?Zl(r,e,n.options.textStyle):Zl(r,e)},hc={D1:{fontFamily:dc("D1.fontFamily"),fontSize:dc("D1.fontSize"),fontWeight:dc("D1.fontWeight"),lineHeight:dc("D1.lineHeight"),letterSpacing:dc("D1.letterSpacing")},D2:{fontFamily:dc("D2.fontFamily"),fontSize:dc("D2.fontSize"),fontWeight:dc("D2.fontWeight"),lineHeight:dc("D2.lineHeight"),letterSpacing:dc("D2.letterSpacing")},D3:{fontFamily:dc("D3.fontFamily"),fontSize:dc("D3.fontSize"),fontWeight:dc("D3.fontWeight"),lineHeight:dc("D3.lineHeight"),letterSpacing:dc("D3.letterSpacing")},D4:{fontFamily:dc("D4.fontFamily"),fontSize:dc("D4.fontSize"),fontWeight:dc("D4.fontWeight"),lineHeight:dc("D4.lineHeight"),letterSpacing:dc("D4.letterSpacing")},DBody:{fontFamily:dc("DBody.fontFamily"),fontSize:dc("DBody.fontSize"),fontWeight:dc("DBody.fontWeight"),lineHeight:dc("DBody.lineHeight"),letterSpacing:dc("DBody.letterSpacing")},H1:{fontFamily:dc("H1.fontFamily"),fontSize:dc("H1.fontSize"),fontWeight:dc("H1.fontWeight"),lineHeight:dc("H1.lineHeight"),letterSpacing:dc("H1.letterSpacing")},H2:{fontFamily:dc("H2.fontFamily"),fontSize:dc("H2.fontSize"),fontWeight:dc("H2.fontWeight"),lineHeight:dc("H2.lineHeight"),letterSpacing:dc("H2.letterSpacing")},H3:{fontFamily:dc("H3.fontFamily"),fontSize:dc("H3.fontSize"),fontWeight:dc("H3.fontWeight"),lineHeight:dc("H3.lineHeight"),letterSpacing:dc("H3.letterSpacing")},H4:{fontFamily:dc("H4.fontFamily"),fontSize:dc("H4.fontSize"),fontWeight:dc("H4.fontWeight"),lineHeight:dc("H4.lineHeight"),letterSpacing:dc("H4.letterSpacing")},H5:{fontFamily:dc("H5.fontFamily"),fontSize:dc("H5.fontSize"),fontWeight:dc("H5.fontWeight"),lineHeight:dc("H5.lineHeight"),letterSpacing:dc("H5.letterSpacing")},H6:{fontFamily:dc("H6.fontFamily"),fontSize:dc("H6.fontSize"),fontWeight:dc("H6.fontWeight"),lineHeight:dc("H6.lineHeight"),letterSpacing:dc("H6.letterSpacing")},Body:{fontFamily:dc("Body.fontFamily"),fontSize:dc("Body.fontSize"),fontWeight:dc("Body.fontWeight"),lineHeight:dc("Body.lineHeight"),letterSpacing:dc("Body.letterSpacing")},BodySmall:{fontFamily:dc("BodySmall.fontFamily"),fontSize:dc("BodySmall.fontSize"),fontWeight:dc("BodySmall.fontWeight"),lineHeight:dc("BodySmall.lineHeight"),letterSpacing:dc("BodySmall.letterSpacing")},XSmall:{fontFamily:dc("XSmall.fontFamily"),fontSize:dc("XSmall.fontSize"),fontWeight:dc("XSmall.fontWeight"),lineHeight:dc("XSmall.lineHeight"),letterSpacing:dc("XSmall.letterSpacing")}},pc=e=>{switch(e){case 700:case"bold":return cc.Bold;case 600:case"semibold":return cc.Semibold;case 300:case"light":return cc.Light;case 400:case"regular":return cc.Regular;default:return""}},fc=(e,t)=>n=>{const r=hc[e].fontFamily(n),i=hc[e].fontWeight(n);return Object.values(cc).includes(r)?y`
                font-family: ${pc(t)||pc(i)||r};
                font-weight: normal !important;
            `:y`
            font-family: ${r};
            font-weight: ${(gc(t)||i)??"normal"};
        `},gc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},mc=(e,t,n=!1)=>r=>{const i=hc[e],o=i.fontSize(r);return y`
            ${fc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},yc=(e=!1,t=!1)=>t?y`
            display: block;
        `:e?y`
            display: inline;
        `:y`
            display: block;
        `;var vc,bc={};Object.defineProperty(bc,"__esModule",{value:!0});var wc=e;const _c=e=>wc.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:wc.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var xc;_c.displayName="ExternalIcon",vc=bc.ExternalIcon=_c,function(e){e.D1=g.h1`
        ${e=>y`
                ${mc("D1",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.D2=g.h1`
        ${e=>y`
                ${mc("D2",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.D3=g.h1`
        ${e=>y`
                ${mc("D3",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.D4=g.h1`
        ${e=>y`
                ${mc("D4",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.DBody=g.h1`
        ${e=>y`
                ${mc("DBody",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.H1=g.h1`
        ${e=>y`
                ${mc("H1",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.H2=g.h2`
        ${e=>y`
                ${mc("H2",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.H3=g.h3`
        ${e=>y`
                ${mc("H3",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.H4=g.h4`
        ${e=>y`
                ${mc("H4",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.H5=g.h5`
        ${e=>y`
                ${mc("H5",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.H6=g.h6`
        ${e=>y`
                ${mc("H6",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.Body=g.p`
        ${e=>y`
                ${mc("Body",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=g.p`
        ${e=>y`
                ${mc("BodySmall",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.XSmall=g.span`
        ${e=>y`
                ${mc("XSmall",e.weight,e.paragraph)}
                color: ${Jl.Neutral[1]};
                ${yc(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Cc({...e,textStyle:"Body"}),Small:e=>Cc({...e,textStyle:"BodySmall"})}}(xc||(xc={}));const Sc=g.a`
    ${e=>y`
            ${mc(e.textStyle,e.weight)}
            color: ${Jl.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Jl.Secondary};

                svg {
                    color: ${Jl.Secondary};
                }
            }
        `}
`,$c=g(vc)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Cc=({external:e=!1,children:r,...i})=>t(Sc,{...i,children:[r,e&&n($c,{})]});var kc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(kc||(kc={})),g.button`
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
                    background-color: ${Jl.Neutral[8](e)};
                    border: 1px solid ${Jl.Primary(e)};

                    span {
                        color: ${Jl.Primary(e)};
                    }
                `;case"light":return y`
                    background-color: ${Jl.Neutral[8](e)};
                    border: 1px solid ${Jl.Neutral[5](e)};

                    span {
                        color: ${Jl.Primary(e)};
                    }
                `;case"disabled":return y`
                    background-color: ${Jl.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Jl.Neutral[3](e)};
                    }
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Jl.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Jl.Secondary};
                        }
                    }
                `;default:return y`
                    background-color: ${Jl.Primary(e)};
                    border: 1px solid transparent;

                    ${nc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Jl.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    span {
                        ${mc("H5","semibold")}
                    }

                    ${nc.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    span {
                        ${mc("H4","semibold")}
                    }

                    ${nc.mobileS} {
                        height: auto;
                    }
                `}
`;const Fc=g((({color:e,className:r,size:i=18})=>t(rc,{className:r,$size:i,$color:e,children:[n(oc,{id:"inner1",$size:i-2,$borderWidth:2}),n(ac,{id:"inner2",$size:i-2,$borderWidth:2}),n(sc,{id:"inner3",$size:i-2,$borderWidth:2}),n(lc,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Jl.Primary(e);break;case"disabled":t=Jl.Neutral[3](e);break;default:t=Jl.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Bc;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let i=0;t>n&&(i=Math.floor((t-n)/8));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(Bc||(Bc={}));var jc,Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});var Ac=e;const Ic=e=>Ac.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Ac.jsx("path",{d:"M9.99999 10.792C10.236 10.792 10.441 10.705 10.615 10.531C10.7883 10.3577 10.875 10.153 10.875 9.91701V6.70801C10.875 6.47201 10.7883 6.27067 10.615 6.10401C10.441 5.93734 10.236 5.85401 9.99999 5.85401C9.76399 5.85401 9.55899 5.94101 9.38499 6.11501C9.21166 6.28834 9.12499 6.49301 9.12499 6.72901V9.93801C9.12499 10.174 9.21166 10.3753 9.38499 10.542C9.55899 10.7087 9.76399 10.792 9.99999 10.792ZM9.99999 14.188C10.236 14.188 10.441 14.108 10.615 13.948C10.7883 13.788 10.875 13.576 10.875 13.312C10.875 13.076 10.7883 12.8713 10.615 12.698C10.441 12.5247 10.236 12.438 9.99999 12.438C9.76399 12.438 9.55899 12.5247 9.38499 12.698C9.21166 12.8713 9.12499 13.076 9.12499 13.312C9.12499 13.576 9.21166 13.788 9.38499 13.948C9.55899 14.108 9.76399 14.188 9.99999 14.188ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});Ic.displayName="ExclamationCircleFillIcon",jc=Oc.ExclamationCircleFillIcon=Ic;var Pc,zc={};Object.defineProperty(zc,"__esModule",{value:!0});var Ec=e;const Dc=e=>Ec.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Ec.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Dc.displayName="TickIcon",Pc=zc.TickIcon=Dc;const Hc=g.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return y`
            height: ${t};
            width: ${n};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Jl.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=Jl.Primary(e),n=Jl.Primary(e)),e.disabled&&(t=Jl.Neutral[6](e),n=Jl.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,Nc=g.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Mc=g(Pc)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return y`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Jl.Neutral[4]:Jl.Neutral[8]};
`,Tc=g(Ql.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Lc=g.ul`
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
        background: ${Jl.Neutral[4]};
        border-right: 5px solid ${Jl.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${nc.mobileL} {
        max-height: 15rem;
    }
`,Vc=g.li`
    :hover,
    :focus,
    :active {
        background: ${Jl.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return y`
                background: ${Jl.Accent.Light[5]};
            `}}
`,Rc=g.button`
    display: flex;
    ${e=>e.multiSelect?y`
                padding: 0.5rem 1rem;
            `:y`
                padding: 0 1rem;
                min-height: 3.5rem;
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
        outline-color: ${Jl.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;g.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Jl.Neutral[8]};
`;const Wc=g.div`
    ${mc("Body","regular")}
    color: ${Jl.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,qc=g.span`
    color: ${Jl.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,Uc=g.div`
    display: flex;
    flex-direction: column;
`,Qc=g.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Zc=g.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;g(xc.Hyperlink.Default)`
    color: ${Jl.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Jl.Accent.Light[3]};
        color: ${Jl.Neutral[1]};
    }
`;const Gc=g((({className:e,checked:r,disabled:i,onChange:o,onKeyPress:s,displaySize:c="default",...u})=>{const[d,h]=l(r);a((()=>{h(r)}),[r]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),s&&s(t)}};return t(Hc,{selected:d,disabled:i,className:e,"data-testid":"checkbox",$displaySize:c,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,children:[n(Nc,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:i,checked:d,...u}),d&&n(Mc,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Xc=g.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Kc=g.button`
    ${mc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Jl.Primary(e)};\n\t\t`}
`,Yc=g.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Jc=g(xc.Body)``,eu=g(jc)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Jl.Validation.Red.Icon};
`;var tu,nu={};Object.defineProperty(nu,"__esModule",{value:!0});var ru=e;const iu=e=>ru.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ru.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});iu.displayName="CrossIcon",tu=nu.CrossIcon=iu;var ou,au={};Object.defineProperty(au,"__esModule",{value:!0});var su=e;const lu=e=>su.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:su.jsx("path",{d:"M15.688 16.896L11.125 12.333C10.667 12.6803 10.1703 12.941 9.635 13.115C9.10033 13.2883 8.54133 13.375 7.958 13.375C6.44467 13.375 5.15667 12.8507 4.094 11.802C3.03133 10.7533 2.5 9.472 2.5 7.958C2.5 6.44467 3.03133 5.15667 4.094 4.094C5.15667 3.03133 6.44467 2.5 7.958 2.5C9.472 2.5 10.7533 3.03133 11.802 4.094C12.8507 5.15667 13.375 6.44467 13.375 7.958C13.375 8.54133 13.2917 9.10033 13.125 9.635C12.9583 10.1703 12.6943 10.66 12.333 11.104L16.917 15.708C17.0837 15.8747 17.1633 16.0727 17.156 16.302C17.1493 16.5313 17.0627 16.7293 16.896 16.896C16.7293 17.0627 16.528 17.146 16.292 17.146C16.056 17.146 15.8547 17.0627 15.688 16.896ZM7.958 11.625C8.972 11.625 9.83667 11.2673 10.552 10.552C11.2673 9.83667 11.625 8.972 11.625 7.958C11.625 6.93067 11.2707 6.05567 10.562 5.333C9.854 4.611 8.986 4.25 7.958 4.25C6.93067 4.25 6.05567 4.611 5.333 5.333C4.611 6.05567 4.25 6.93067 4.25 7.958C4.25 8.986 4.611 9.854 5.333 10.562C6.05567 11.2707 6.93067 11.625 7.958 11.625Z",fill:"currentColor"})});lu.displayName="MagnifierIcon",ou=au.MagnifierIcon=lu;const cu=g.button`
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

        ${({$highlight:e})=>e&&y`
                background-color: ${Jl.Neutral[7]};
            `}
    }
`,uu=o.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:r="none",type:i="button",...o},a)=>n(cu,{ref:a,$outline:r,$highlight:t,type:i,...o,children:e}))),du={collections:{base:{InputBoxShadow:y`
        inset 0 0 6px 1px ${Jl.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 6px 1px ${Jl.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Jl.Shadow.Elevation}
 `}},defaultValue:"base"},hu=e=>t=>{const n=t.theme,r=Gl(du,n[Xl.designTokenScheme]);return n.options?.designToken?Zl(r,e,n.options.designToken):Zl(r,e)},pu=hu("InputBoxShadow"),fu=hu("InputErrorBoxShadow");hu("ElevationBoxShadow");g.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Jl.Neutral[5]};
    border-radius: 4px;
    background: ${Jl.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Jl.Accent.Light[1]};
        box-shadow: ${pu};
    }

    ${e=>e.$readOnly?y`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$disabled?y`
                background: ${Jl.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Jl.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?y`
                border: 1px solid ${Jl.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Jl.Validation.Red.Border};
                    box-shadow: ${fu};
                }
            `:void 0}
`;const gu=g.input`
    ${mc("Body","regular")}
    color: ${Jl.Neutral[1]};
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
        color: ${Jl.Neutral[3]};
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
`,mu=g.li`
    background: ${Jl.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,yu=g(gu)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,vu=g(ou)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Jl.Neutral[3]};
`,bu=g(uu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Jl.Neutral[3]};
    cursor: pointer;
`,wu=g(tu)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Jl.Neutral[3]};
`,_u=u(((e,r)=>{const{onClear:i,...o}=e;return t(mu,{children:[n(vu,{}),n(yu,{ref:r,...o}),o.value&&n(bu,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:n(wu,{})})]},"search")})),xu=({listItems:e,listExtractor:i,valueExtractor:o,onSelectItem:s,listStyleWidth:u,visible:d,enableSearch:h,searchPlaceholder:p="Search",onSearch:f,searchFunction:g,onDismiss:m,multiSelect:y,selectedItems:v,onSelectAll:b,onRetry:w,itemsLoadState:_="success",itemTruncationType:x="end",renderListItem:S,onBlur:$,hideNoResultsDisplay:C,renderCustomCallToAction:k,...F})=>{const[B,j]=l(0),[O,A]=l(""),[I,P]=l(e),[z,E]=l(0),D=$l({height:z}),H=c(),N=c(),M=c([]),T=c(),L=c(),V=c(B),R=c(I),W=e=>{V.current=e,j(e)},q=e=>{R.current=e,P(e)};a((()=>(document.addEventListener("keydown",K),()=>{document.removeEventListener("keydown",K)})),[]),a((()=>{G(O)}),[O]),a((()=>{A(""),d?(setTimeout((()=>{E(X())})),T&&T.current?(T.current.focus(),W(-1)):M.current[B]&&M.current[B].focus()):E(0)}),[d]),a((()=>{if(d){const e=X();E(e)}}),[I]),a((()=>{q(e),A(""),W(0)}),[e]);const U=e=>i?i(e):e.toString(),Q=e=>{const t=i?i(e):e.toString();let n=0;return N&&N.current&&(n=N.current.getBoundingClientRect().width-100),Bc.shouldTruncateToTwoLines("string"==typeof t?t:t.title,n)},Z=e=>!!io(v,(t=>ao(t,e))),G=t=>{if(""===t)q(e);else if(g){const e=g(t);q(e)}else{const n=e.filter((e=>{const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase();return"object"==typeof n&&n.secondaryLabel?r.includes(t.trim().toLowerCase())||n.secondaryLabel.includes(t.trim().toLowerCase()):r.includes(t.trim().toLowerCase())}));q(n)}},X=()=>(N&&N.current?N.current.getBoundingClientRect().height:0)+(L.current?L.current.getBoundingClientRect().height:0),K=e=>{if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(V.current<R.current.length-1){const e=V.current+1;M.current[e].focus(),W(e)}break;case"ArrowUp":if(V.current>0){const e=V.current-1;M.current[e].focus(),W(V.current-1)}break;case"Escape":m&&m(!0)}},Y=(e,t)=>{e.preventDefault(),s&&s(t,(e=>o?o(e):e)(t))},J=e=>{const t=e.target.value;A(t),f&&f()},ee=()=>{A(""),T.current.focus(),f&&f()},te=()=>{w&&w()},ne=()=>{$&&$()},re=e=>{const r=U(e),i="string"==typeof r?r:r.title;return t(Uc,{"data-testid":"truncate-middle-container",children:[n(Qc,{children:i}),t(Zc,{children:[" ",i]})]})},ie=e=>{const i=U(e);return"string"==typeof i?n(r,{children:i}):t(r,{children:[i.title,i.secondaryLabel&&n(qc,{children:i.secondaryLabel})]})},oe=()=>{if(!w||w&&"success"===_)return I.map(((e,r)=>n(Vc,{checked:Z(e)&&!y,children:t(Rc,{onClick:t=>{Y(t,e)},ref:e=>M.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,multiSelect:y,onBlur:ne,children:[y&&n(Gc,{checked:Z(e),displaySize:"small"}),S?S(e,{selected:Z(e)}):n(Wc,{truncateType:x,children:"middle"===x&&Q(e)?re(e):ie(e)})]})},((e,t)=>`item_${t}__${o?o(e):e}`)(e,r))))},ae=()=>{if(y&&I.length>0&&!O&&"success"===_)return n(Xc,{children:n(Kc,{onClick:b,type:"button",children:0===v.length?"Select all":"Unselect all"})},"selectAll")},se=()=>{if(!C&&O&&0===I.length)return t(Yc,{"data-testid":"list-no-results",children:[n(eu,{"data-testid":"no-result-icon"}),n(Jc,{children:"No results found."})]},"noResults")},le=()=>{if(w&&"loading"===_)return t(Yc,{"data-testid":"list-loading",children:[n(Fc,{$buttonStyle:"secondary",size:24}),n(Jc,{children:"Loading..."})]},"loading")},ce=()=>{if(w&&"fail"===_)return t(Yc,{"data-testid":"list-fail",children:[n(eu,{"data-testid":"load-error-icon"}),n(Jc,{children:"Failed to load."}),n(Kc,{onClick:te,children:"Try again."})]},"noResults")};return n(r,{children:t(Tc,{style:D,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(d)return t(Lc,{ref:N,"data-testid":"dropdown-list",width:u,role:"list",...F,children:[(h||g)&&"success"===_?n(_u,{ref:T,onChange:J,value:O,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:ee}):null,ae(),se(),le(),ce(),oe()]})})(),(()=>{if(d&&k)return n("div",{ref:L,"data-testid":"custom-cta",children:k(m,I)})})()]})})};var Su,$u={};Object.defineProperty($u,"__esModule",{value:!0});var Cu=e;const ku=e=>Cu.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Cu.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});ku.displayName="ChevronDownIcon",Su=$u.ChevronDownIcon=ku;const Fu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Bu=g.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,ju=g.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 3rem;
    width: 100%;
    border-radius: ${"4px"};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Jl.Accent.Light[3]};
    }
`,Ou=m`
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
`,Au=g.div`
    position: relative;
    border: 1px solid ${Jl.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Jl.Neutral[8]};

    :focus-within {
        border: 1px solid ${Jl.Accent.Light[1]};
        box-shadow: ${pu};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Ou} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Jl.Neutral[6](e)};

                ${ju} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Jl.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${ju} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${Jl.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Jl.Validation.Red.Border(e)};
                    box-shadow: ${fu};
                }
            `:void 0}
`;g.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Fu};
    margin-left: 1rem;
`,g(Su)`
    color: ${Jl.Neutral[3]};
    height: ${hc.Body.fontSize}rem;
    width: ${hc.Body.fontSize}rem;
`;const Iu=g.div`
    height: 1px;
    background: ${Jl.Neutral[5]};
    margin: 0 0.5rem;
`,Pu=g.div`
    display: flex;
    flex: 1;
`,zu=g(xc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Eu=g(zu)`
    color: ${Jl.Neutral[3]};
`,Du=({children:e,show:t,error:r,disabled:i,testId:o,onBlur:s,readOnly:l})=>{const u=c();return((e,t,n=window)=>{const r=c();a((()=>{r.current=t}),[t]),a((()=>{if(!n||!n.addEventListener)return;const t=e=>r.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}),[e,n])})("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;t&&s()}}),document),n(Bu,{children:n(Au,{ref:u,error:r&&!t,disabled:i,$readOnly:l,expanded:t,"data-testid":o,children:e})})},Hu=e=>n("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:n("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});Hu.displayName="ArrowRightIcon";const Nu=e=>`@media screen and (max-width: ${e}px)`,Mu=g.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return y`
                ${Nu(e.$minWidthBeforeWrap)} {
                    /* Parent container need to provide space */
                    flex-wrap: wrap;

                    [data-id="range-container-elem1-container"],
                    [data-id="range-container-elem2-container"] {
                        // 100% - Icon size - 2padding
                        max-width: calc(100% - 1.125rem - 1rem);
                        flex: unset;
                    }

                    [data-id="range-container-elem2-container"] {
                        margin-top: 0.5rem;
                    }
                }
            `}}
`,Tu=g.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,Lu=g(Hu)`
    color: ${Jl.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Vu=g.div`
    position: absolute;
    background: ${e=>e.$error?Jl.Validation.Red.Border(e):Jl.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return y`
                    opacity: 1;
                `;case"end":return y`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return y`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$minWidthBeforeWrap)return y`
                ${Nu(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,Ru=({children:e,currentActive:r,error:i,className:o,minWidthBeforeWrap:a})=>{const[s,l]=e;return t(Mu,{className:o,$minWidthBeforeWrap:a,children:[n(Tu,{"data-id":"range-container-elem1-container",children:s}),n(Lu,{}),n(Tu,{"data-id":"range-container-elem2-container",children:l}),n(Vu,{"data-id":"range-container-indicator",$position:r,$error:i,$minWidthBeforeWrap:a})]})},Wu=({selectedOptions:e,placeholders:r={from:"Select",to:"Select"},options:i,disabled:o,className:s,readOnly:u,error:d,"data-testid":h,id:p,enableSearch:f=!1,searchFunction:g,searchPlaceholder:m,valueExtractor:y,valueToStringFunction:v,listExtractor:b,displayValueExtractor:w,onSelectOption:_,listStyleWidth:x,onShowOptions:S,onHideOptions:$,onRetry:C,optionsLoadState:k={from:"success",to:"success"},optionTruncationType:F="middle",renderCustomSelectedOption:B,renderListItem:j,renderCustomCallToAction:O,...A})=>{const[I,P]=l(),[z,E]=l(),D=c(),H={from:c(),to:c()},[N,M]=l("none");a((()=>{P(e?.from),E(e?.to)}),[e]);const T=e=>t=>{t.stopPropagation(),t.preventDefault(),o||u||M("from"===e?"from":"to"===e&&I?"to":"from")},L=e=>{const t="from"===e?I:z;return w?w(t):y?y(t):t?.toString()},V=(e,t)=>{if("middle"===F){let n=0;return H[e]&&H[e].current&&(n=H[e].current.getBoundingClientRect().width),Bc.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(t),n,120,8)}return t},R=e=>{!e&&$&&$(),e&&S&&S()},W=e=>{const t="from"===e?I:z;return t?B?B(t):n(zu,{truncateType:F,children:V(e,L(e))}):n(Eu,{truncateType:F,children:V(e,r[e])})},q=e=>n(Pu,{onClick:T(e),ref:H[e],children:W(e)});return t(Du,{show:"none"!==N,"data-testid":A["data-testid"],error:d&&!("none"!==N),disabled:o,readOnly:u,testId:h,onBlur:()=>{R(!1),M("none"),I&&z||(E(void 0),P(void 0))},className:s,children:[n(ju,{type:"button","data-testid":p||"selector",disabled:o,ref:D,onClick:T(),...A,children:t(Ru,{currentActive:(()=>{switch(N){case"from":return"start";case"to":return"end";case"none":return N}})(),children:[q("from"),q("to")]})}),"none"!==N&&n(Iu,{}),(()=>{if("none"===N)return null;const e=i[N];if(e&&e.length>0){const t="from"===N?I:z;return n(xu,{listItems:e,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=N)?P(n):E(n),R(!1),D&&D.current.focus(),_&&_({[i]:n},r),void("from"===i?(E(void 0),M("to"),R(!0)):M("none"));var n,r,i},onDismiss:()=>(M("none"),R(!1),D&&D.current.focus(),void(I&&z||(E(void 0),P(void 0)))),valueExtractor:y,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:m,searchFunction:g,"data-testid":`${N}-dropdown-list`,selectedItems:t?[t]:[],onRetry:C,itemsLoadState:k[N],itemTruncationType:F,renderListItem:j,renderCustomCallToAction:O})}return null})()]})};export{Wu as InputRangeSelect};
//# sourceMappingURL=index.js.map
