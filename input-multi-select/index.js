import e,{jsxs as t,jsx as n,Fragment as r}from"react/jsx-runtime";import*as i from"react";import o,{useEffect as a,useLayoutEffect as s,useState as l,useRef as c,forwardRef as u,useCallback as d,useContext as h,useMemo as p}from"react";import{unstable_batchedUpdates as f}from"react-dom";import g,{keyframes as m,css as y}from"styled-components";var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var b=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1};var w=function(){this.__data__=[],this.size=0};var _=function(e,t){return e===t||e!=e&&t!=t},S=_;var x=function(e,t){for(var n=e.length;n--;)if(S(e[n][0],t))return n;return-1},$=x,C=Array.prototype.splice;var k=x;var F=x;var B=x;var j=w,O=function(e){var t=this.__data__,n=$(t,e);return!(n<0)&&(n==t.length-1?t.pop():C.call(t,n,1),--this.size,!0)},A=function(e){var t=this.__data__,n=k(t,e);return n<0?void 0:t[n][1]},P=function(e){return F(this.__data__,e)>-1},I=function(e,t){var n=this.__data__,r=B(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function z(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}z.prototype.clear=j,z.prototype.delete=O,z.prototype.get=A,z.prototype.has=P,z.prototype.set=I;var D=z,E=D;var H=function(){this.__data__=new E,this.size=0};var N=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var M=function(e){return this.__data__.get(e)};var V=function(e){return this.__data__.has(e)},T="object"==typeof v&&v&&v.Object===Object&&v,L=T,R="object"==typeof self&&self&&self.Object===Object&&self,W=L||R||Function("return this")(),q=W.Symbol,U=q,Q=Object.prototype,Z=Q.hasOwnProperty,G=Q.toString,X=U?U.toStringTag:void 0;var K=function(e){var t=Z.call(e,X),n=e[X];try{e[X]=void 0;var r=!0}catch(e){}var i=G.call(e);return r&&(t?e[X]=n:delete e[X]),i},Y=Object.prototype.toString;var J=K,ee=function(e){return Y.call(e)},te=q?q.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":te&&te in Object(e)?J(e):ee(e)};var re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=ne,oe=re;var ae,se=function(e){if(!oe(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},le=W["__core-js_shared__"],ce=(ae=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+ae:"";var ue=function(e){return!!ce&&ce in e},de=Function.prototype.toString;var he=function(e){if(null!=e){try{return de.call(e)}catch(e){}try{return e+""}catch(e){}}return""},pe=se,fe=ue,ge=re,me=he,ye=/^\[object .+?Constructor\]$/,ve=Function.prototype,be=Object.prototype,we=ve.toString,_e=be.hasOwnProperty,Se=RegExp("^"+we.call(_e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xe=function(e){return!(!ge(e)||fe(e))&&(pe(e)?Se:ye).test(me(e))},$e=function(e,t){return null==e?void 0:e[t]};var Ce=function(e,t){var n=$e(e,t);return xe(n)?n:void 0},ke=Ce(W,"Map"),Fe=Ce(Object,"create"),Be=Fe;var je=function(){this.__data__=Be?Be(null):{},this.size=0};var Oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ae=Fe,Pe=Object.prototype.hasOwnProperty;var Ie=function(e){var t=this.__data__;if(Ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Pe.call(t,e)?t[e]:void 0},ze=Fe,De=Object.prototype.hasOwnProperty;var Ee=Fe;var He=je,Ne=Oe,Me=Ie,Ve=function(e){var t=this.__data__;return ze?void 0!==t[e]:De.call(t,e)},Te=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ee&&void 0===t?"__lodash_hash_undefined__":t,this};function Le(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Le.prototype.clear=He,Le.prototype.delete=Ne,Le.prototype.get=Me,Le.prototype.has=Ve,Le.prototype.set=Te;var Re=Le,We=D,qe=ke;var Ue=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Qe=function(e,t){var n=e.__data__;return Ue(t)?n["string"==typeof t?"string":"hash"]:n.map},Ze=Qe;var Ge=Qe;var Xe=Qe;var Ke=Qe;var Ye=function(){this.size=0,this.__data__={hash:new Re,map:new(qe||We),string:new Re}},Je=function(e){var t=Ze(this,e).delete(e);return this.size-=t?1:0,t},et=function(e){return Ge(this,e).get(e)},tt=function(e){return Xe(this,e).has(e)},nt=function(e,t){var n=Ke(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rt.prototype.clear=Ye,rt.prototype.delete=Je,rt.prototype.get=et,rt.prototype.has=tt,rt.prototype.set=nt;var it=rt,ot=D,at=ke,st=it;var lt=D,ct=H,ut=N,dt=M,ht=V,pt=function(e,t){var n=this.__data__;if(n instanceof ot){var r=n.__data__;if(!at||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new st(r)}return n.set(e,t),this.size=n.size,this};function ft(e){var t=this.__data__=new lt(e);this.size=t.size}ft.prototype.clear=ct,ft.prototype.delete=ut,ft.prototype.get=dt,ft.prototype.has=ht,ft.prototype.set=pt;var gt=ft;var mt=it,yt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},vt=function(e){return this.__data__.has(e)};function bt(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new mt;++t<n;)this.add(e[t])}bt.prototype.add=bt.prototype.push=yt,bt.prototype.has=vt;var wt=bt,_t=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},St=function(e,t){return e.has(t)};var xt=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new wt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!_t(t,(function(e,t){if(!St(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var $t=W.Uint8Array,Ct=_,kt=xt,Ft=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Bt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},jt=q?q.prototype:void 0,Ot=jt?jt.valueOf:void 0;var At=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new $t(e),new $t(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ct(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ft;case"[object Set]":var l=1&r;if(s||(s=Bt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=kt(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Ot)return Ot.call(e)==Ot.call(t)}return!1};var Pt=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},It=Array.isArray,zt=Pt,Dt=It;var Et=function(e,t,n){var r=t(e);return Dt(e)?r:zt(r,n(e))};var Ht=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Nt=function(){return[]},Mt=Object.prototype.propertyIsEnumerable,Vt=Object.getOwnPropertySymbols,Tt=Vt?function(e){return null==e?[]:(e=Object(e),Ht(Vt(e),(function(t){return Mt.call(e,t)})))}:Nt;var Lt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Rt=function(e){return null!=e&&"object"==typeof e},Wt=ne,qt=Rt;var Ut=function(e){return qt(e)&&"[object Arguments]"==Wt(e)},Qt=Rt,Zt=Object.prototype,Gt=Zt.hasOwnProperty,Xt=Zt.propertyIsEnumerable,Kt=Ut(function(){return arguments}())?Ut:function(e){return Qt(e)&&Gt.call(e,"callee")&&!Xt.call(e,"callee")},Yt={exports:{}};var Jt=function(){return!1};!function(e,t){var n=W,r=Jt,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(Yt,Yt.exports);var en=/^(?:0|[1-9]\d*)$/;var tn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&en.test(e))&&e>-1&&e%1==0&&e<t};var nn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},rn=ne,on=nn,an=Rt,sn={};sn["[object Float32Array]"]=sn["[object Float64Array]"]=sn["[object Int8Array]"]=sn["[object Int16Array]"]=sn["[object Int32Array]"]=sn["[object Uint8Array]"]=sn["[object Uint8ClampedArray]"]=sn["[object Uint16Array]"]=sn["[object Uint32Array]"]=!0,sn["[object Arguments]"]=sn["[object Array]"]=sn["[object ArrayBuffer]"]=sn["[object Boolean]"]=sn["[object DataView]"]=sn["[object Date]"]=sn["[object Error]"]=sn["[object Function]"]=sn["[object Map]"]=sn["[object Number]"]=sn["[object Object]"]=sn["[object RegExp]"]=sn["[object Set]"]=sn["[object String]"]=sn["[object WeakMap]"]=!1;var ln=function(e){return an(e)&&on(e.length)&&!!sn[rn(e)]};var cn=function(e){return function(t){return e(t)}},un={exports:{}};!function(e,t){var n=T,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(un,un.exports);var dn=ln,hn=cn,pn=un.exports,fn=pn&&pn.isTypedArray,gn=fn?hn(fn):dn,mn=Lt,yn=Kt,vn=It,bn=Yt.exports,wn=tn,_n=gn,Sn=Object.prototype.hasOwnProperty;var xn=function(e,t){var n=vn(e),r=!n&&yn(e),i=!n&&!r&&bn(e),o=!n&&!r&&!i&&_n(e),a=n||r||i||o,s=a?mn(e.length,String):[],l=s.length;for(var c in e)!t&&!Sn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||wn(c,l))||s.push(c);return s},$n=Object.prototype;var Cn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||$n)};var kn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Fn=Cn,Bn=kn,jn=Object.prototype.hasOwnProperty;var On=se,An=nn;var Pn=function(e){return null!=e&&An(e.length)&&!On(e)},In=xn,zn=function(e){if(!Fn(e))return Bn(e);var t=[];for(var n in Object(e))jn.call(e,n)&&"constructor"!=n&&t.push(n);return t},Dn=Pn;var En=function(e){return Dn(e)?In(e):zn(e)},Hn=Et,Nn=Tt,Mn=En;var Vn=function(e){return Hn(e,Mn,Nn)},Tn=Object.prototype.hasOwnProperty;var Ln=function(e,t,n,r,i,o){var a=1&n,s=Vn(e),l=s.length;if(l!=Vn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Tn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(e),o.delete(t),p},Rn=Ce(W,"DataView"),Wn=ke,qn=Ce(W,"Promise"),Un=Ce(W,"Set"),Qn=Ce(W,"WeakMap"),Zn=ne,Gn=he,Xn="[object Map]",Kn="[object Promise]",Yn="[object Set]",Jn="[object WeakMap]",er="[object DataView]",tr=Gn(Rn),nr=Gn(Wn),rr=Gn(qn),ir=Gn(Un),or=Gn(Qn),ar=Zn;(Rn&&ar(new Rn(new ArrayBuffer(1)))!=er||Wn&&ar(new Wn)!=Xn||qn&&ar(qn.resolve())!=Kn||Un&&ar(new Un)!=Yn||Qn&&ar(new Qn)!=Jn)&&(ar=function(e){var t=Zn(e),n="[object Object]"==t?e.constructor:void 0,r=n?Gn(n):"";if(r)switch(r){case tr:return er;case nr:return Xn;case rr:return Kn;case ir:return Yn;case or:return Jn}return t});var sr=gt,lr=xt,cr=At,ur=Ln,dr=ar,hr=It,pr=Yt.exports,fr=gn,gr="[object Arguments]",mr="[object Array]",yr="[object Object]",vr=Object.prototype.hasOwnProperty;var br=function(e,t,n,r,i,o){var a=hr(e),s=hr(t),l=a?mr:dr(e),c=s?mr:dr(t),u=(l=l==gr?yr:l)==yr,d=(c=c==gr?yr:c)==yr,h=l==c;if(h&&pr(e)){if(!pr(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new sr),a||fr(e)?lr(e,t,n,r,i,o):cr(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&vr.call(e,"__wrapped__"),f=d&&vr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new sr),i(g,m,n,r,o)}}return!!h&&(o||(o=new sr),ur(e,t,n,r,i,o))},wr=Rt;var _r=function e(t,n,r,i,o){return t===n||(null==t||null==n||!wr(t)&&!wr(n)?t!=t&&n!=n:br(t,n,r,i,e,o))},Sr=gt,xr=_r;var $r=re;var Cr=function(e){return e==e&&!$r(e)},kr=Cr,Fr=En;var Br=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},jr=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Sr;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?xr(u,c,3,r,d):h))return!1}}return!0},Or=function(e){for(var t=Fr(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,kr(i)]}return t},Ar=Br;var Pr=function(e){var t=Or(e);return 1==t.length&&t[0][2]?Ar(t[0][0],t[0][1]):function(n){return n===e||jr(n,e,t)}},Ir=ne,zr=Rt;var Dr=function(e){return"symbol"==typeof e||zr(e)&&"[object Symbol]"==Ir(e)},Er=It,Hr=Dr,Nr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mr=/^\w*$/;var Vr=function(e,t){if(Er(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Hr(e))||(Mr.test(e)||!Nr.test(e)||null!=t&&e in Object(t))},Tr=it;function Lr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Lr.Cache||Tr),n}Lr.Cache=Tr;var Rr=Lr;var Wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/\\(\\)?/g,Ur=function(e){var t=Rr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Wr,(function(e,n,r,i){t.push(r?i.replace(qr,"$1"):n||e)})),t}));var Qr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Zr=It,Gr=Dr,Xr=q?q.prototype:void 0,Kr=Xr?Xr.toString:void 0;var Yr=function e(t){if("string"==typeof t)return t;if(Zr(t))return Qr(t,e)+"";if(Gr(t))return Kr?Kr.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Jr=Yr;var ei=It,ti=Vr,ni=Ur,ri=function(e){return null==e?"":Jr(e)};var ii=function(e,t){return ei(e)?e:ti(e,t)?[e]:ni(ri(e))},oi=Dr;var ai=function(e){if("string"==typeof e||oi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},si=ii,li=ai;var ci=function(e,t){for(var n=0,r=(t=si(t,e)).length;null!=e&&n<r;)e=e[li(t[n++])];return n&&n==r?e:void 0},ui=ci;var di=function(e,t,n){var r=null==e?void 0:ui(e,t);return void 0===r?n:r};var hi=ii,pi=Kt,fi=It,gi=tn,mi=nn,yi=ai;var vi=function(e,t){return null!=e&&t in Object(e)},bi=function(e,t,n){for(var r=-1,i=(t=hi(t,e)).length,o=!1;++r<i;){var a=yi(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&mi(i)&&gi(a,i)&&(fi(e)||pi(e))};var wi=_r,_i=di,Si=function(e,t){return null!=e&&bi(e,t,vi)},xi=Vr,$i=Cr,Ci=Br,ki=ai;var Fi=ci;var Bi=function(e){return function(t){return null==t?void 0:t[e]}},ji=function(e){return function(t){return Fi(t,e)}},Oi=Vr,Ai=ai;var Pi=Pr,Ii=function(e,t){return xi(e)&&$i(t)?Ci(ki(e),t):function(n){var r=_i(n,e);return void 0===r&&r===t?Si(n,e):wi(t,r,3)}},zi=function(e){return e},Di=It,Ei=function(e){return Oi(e)?Bi(Ai(e)):ji(e)};var Hi=function(e){return"function"==typeof e?e:null==e?zi:"object"==typeof e?Di(e)?Ii(e[0],e[1]):Pi(e):Ei(e)},Ni=/\s/;var Mi=function(e){for(var t=e.length;t--&&Ni.test(e.charAt(t)););return t},Vi=/^\s+/;var Ti=function(e){return e?e.slice(0,Mi(e)+1).replace(Vi,""):e},Li=re,Ri=Dr,Wi=/^[-+]0x[0-9a-f]+$/i,qi=/^0b[01]+$/i,Ui=/^0o[0-7]+$/i,Qi=parseInt;var Zi=function(e){if("number"==typeof e)return e;if(Ri(e))return NaN;if(Li(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Li(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ti(e);var n=qi.test(e);return n||Ui.test(e)?Qi(e.slice(2),n?2:8):Wi.test(e)?NaN:+e},Gi=1/0;var Xi=function(e){return e?(e=Zi(e))===Gi||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Ki=b,Yi=Hi,Ji=function(e){var t=Xi(e),n=t%1;return t==t?n?t-n:t:0},eo=Math.max;var to=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Ji(n);return i<0&&(i=eo(r+i,0)),Ki(e,Yi(t),i)},no=Hi,ro=Pn,io=En;var oo=function(e){return function(t,n,r){var i=Object(t);if(!ro(t)){var o=no(n);t=io(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}}(to),ao=_r;var so=function(e,t){return ao(e,t)};let lo=Co();const co=e=>_o(e,lo);let uo=Co();co.write=e=>_o(e,uo);let ho=Co();co.onStart=e=>_o(e,ho);let po=Co();co.onFrame=e=>_o(e,po);let fo=Co();co.onFinish=e=>_o(e,fo);let go=[];co.setTimeout=(e,t)=>{let n=co.now()+t,r=()=>{let e=go.findIndex((e=>e.cancel==r));~e&&go.splice(e,1),bo-=~e?1:0},i={time:n,handler:e,cancel:r};return go.splice(mo(n),0,i),bo+=1,So(),i};let mo=e=>~(~go.findIndex((t=>t.time>e))||~go.length);co.cancel=e=>{ho.delete(e),po.delete(e),fo.delete(e),lo.delete(e),uo.delete(e)},co.sync=e=>{wo=!0,co.batchedUpdates(e),wo=!1},co.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,co.onStart(n)}return r.handler=e,r.cancel=()=>{ho.delete(n),t=null},r};let yo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};co.use=e=>yo=e,co.now="undefined"!=typeof performance?()=>performance.now():Date.now,co.batchedUpdates=e=>e(),co.catch=console.error,co.frameLoop="always",co.advance=()=>{"demand"!==co.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):$o()};let vo=-1,bo=0,wo=!1;function _o(e,t){wo?(t.delete(e),e(0)):(t.add(e),So())}function So(){vo<0&&(vo=0,"demand"!==co.frameLoop&&yo(xo))}function xo(){~vo&&(yo(xo),co.batchedUpdates($o))}function $o(){let e=vo;vo=co.now();let t=mo(vo);t&&(ko(go.splice(0,t),(e=>e.handler())),bo-=t),bo?(ho.flush(),lo.flush(e?Math.min(64,vo-e):16.667),po.flush(),uo.flush(),fo.flush()):vo=-1}function Co(){let e=new Set,t=e;return{add(n){bo+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(bo-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,bo-=t.size,ko(t,(t=>t(n)&&e.add(t))),bo+=e.size,t=e)}}}function ko(e,t){e.forEach((e=>{try{t(e)}catch(e){co.catch(e)}}))}function Fo(){}const Bo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function jo(e,t){if(Bo.arr(e)){if(!Bo.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Oo=(e,t)=>e.forEach(t);function Ao(e,t,n){if(Bo.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Po=e=>Bo.und(e)?[]:Bo.arr(e)?e:[e];function Io(e,t){if(e.size){const n=Array.from(e);e.clear(),Oo(n,t)}}const zo=(e,...t)=>Io(e,(e=>e(...t))),Do=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Eo,Ho,No=null,Mo=!1,Vo=Fo;var To=Object.freeze({__proto__:null,get createStringInterpolator(){return Eo},get to(){return Ho},get colors(){return No},get skipAnimation(){return Mo},get willAdvance(){return Vo},assign:e=>{e.to&&(Ho=e.to),e.now&&(co.now=e.now),void 0!==e.colors&&(No=e.colors),null!=e.skipAnimation&&(Mo=e.skipAnimation),e.createStringInterpolator&&(Eo=e.createStringInterpolator),e.requestAnimationFrame&&co.use(e.requestAnimationFrame),e.batchedUpdates&&(co.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Vo=e.willAdvance),e.frameLoop&&(co.frameLoop=e.frameLoop)}});const Lo=new Set;let Ro=[],Wo=[],qo=0;const Uo={get idle(){return!Lo.size&&!Ro.length},start(e){qo>e.priority?(Lo.add(e),co.onStart(Qo)):(Zo(e),co(Xo))},advance:Xo,sort(e){if(qo)co.onFrame((()=>Uo.sort(e)));else{const t=Ro.indexOf(e);~t&&(Ro.splice(t,1),Go(e))}},clear(){Ro=[],Lo.clear()}};function Qo(){Lo.forEach(Zo),Lo.clear(),co(Xo)}function Zo(e){Ro.includes(e)||Go(e)}function Go(e){Ro.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Ro,(t=>t.priority>e.priority)),0,e)}function Xo(e){const t=Wo;for(let n=0;n<Ro.length;n++){const r=Ro[n];qo=r.priority,r.idle||(Vo(r),r.advance(e),r.idle||t.push(r))}return qo=0,Wo=Ro,Wo.length=0,Ro=t,Ro.length>0}const Ko="[-+]?\\d*\\.?\\d+",Yo=Ko+"%";function Jo(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ea=new RegExp("rgb"+Jo(Ko,Ko,Ko)),ta=new RegExp("rgba"+Jo(Ko,Ko,Ko,Ko)),na=new RegExp("hsl"+Jo(Ko,Yo,Yo)),ra=new RegExp("hsla"+Jo(Ko,Yo,Yo,Ko)),ia=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,oa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,aa=/^#([0-9a-fA-F]{6})$/,sa=/^#([0-9a-fA-F]{8})$/;function la(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ca(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=la(i,r,e+1/3),a=la(i,r,e),s=la(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ua(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function da(e){return(parseFloat(e)%360+360)%360/360}function ha(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function pa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function fa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=aa.exec(e))?parseInt(t[1]+"ff",16)>>>0:No&&void 0!==No[e]?No[e]:(t=ea.exec(e))?(ua(t[1])<<24|ua(t[2])<<16|ua(t[3])<<8|255)>>>0:(t=ta.exec(e))?(ua(t[1])<<24|ua(t[2])<<16|ua(t[3])<<8|ha(t[4]))>>>0:(t=ia.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=sa.exec(e))?parseInt(t[1],16)>>>0:(t=oa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=na.exec(e))?(255|ca(da(t[1]),pa(t[2]),pa(t[3])))>>>0:(t=ra.exec(e))?(ca(da(t[1]),pa(t[2]),pa(t[3]))|ha(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const ga=(e,t,n)=>{if(Bo.fun(e))return e;if(Bo.arr(e))return ga({range:e,output:t,extrapolate:n});if(Bo.str(e.output[0]))return Eo(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const ma=1.70158,ya=1.525*ma,va=ma+1,ba=2*Math.PI/3,wa=2*Math.PI/4.5,_a=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Sa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>va*e*e*e-ma*e*e,easeOutBack:e=>1+va*Math.pow(e-1,3)+ma*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ya)/2:(Math.pow(2*e-2,2)*((ya+1)*(2*e-2)+ya)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ba),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ba)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*wa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*wa)/2+1,easeInBounce:e=>1-_a(1-e),easeOutBounce:_a,easeInOutBounce:e=>e<.5?(1-_a(1-2*e))/2:(1+_a(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}const $a=Symbol.for("FluidValue.get"),Ca=Symbol.for("FluidValue.observers"),ka=e=>Boolean(e&&e[$a]),Fa=e=>e&&e[$a]?e[$a]():e,Ba=e=>e[Ca]||null;function ja(e,t){let n=e[Ca];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Oa{constructor(e){if(this[$a]=void 0,this[Ca]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Aa(this,e)}}const Aa=(e,t)=>za(e,$a,t);function Pa(e,t){if(e[$a]){let n=e[Ca];n||za(e,Ca,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ia(e,t){let n=e[Ca];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ca]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const za=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Da=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ea=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ha=new RegExp(`(${Da.source})(%|[a-z]+)`,"i"),Na=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ma=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Va=e=>{const[t,n]=Ta(e);if(!t||Do())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Ma.test(n)?Va(n):n||e},Ta=e=>{const t=Ma.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let La;const Ra=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Wa=e=>{La||(La=No?new RegExp(`(${Object.keys(No).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Fa(e).replace(Ma,Va).replace(Ea,fa).replace(La,fa))),n=t.map((e=>e.match(Da).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ga(xa({},e,{output:t}))));return e=>{var n;const i=!Ha.test(t[0])&&(null==(n=t.find((e=>Ha.test(e))))?void 0:n.replace(Da,""));let o=0;return t[0].replace(Da,(()=>`${r[o++](e)}${i||""}`)).replace(Na,Ra)}},qa="react-spring: ",Ua=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${qa}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Qa=Ua(console.warn);const Za=Ua(console.warn);function Ga(e){return Bo.str(e)&&("#"==e[0]||/\d/.test(e)||!Do()&&Ma.test(e)||e in(No||{}))}const Xa=Do()?a:s,Ka=()=>{const e=c(!1);return Xa((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ya(){const e=l()[1],t=Ka();return()=>{t.current&&e(Math.random())}}const Ja=e=>a(e,es),es=[];function ts(e){const t=c();return a((()=>{t.current=e})),t.current}const ns=Symbol.for("Animated:node"),rs=e=>e&&e[ns],is=(e,t)=>{return n=e,r=ns,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},os=e=>e&&e[ns]&&e[ns].getPayload();class as{constructor(){this.payload=void 0,is(this,this)}getPayload(){return this.payload||[]}}class ss extends as{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Bo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ss(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Bo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Bo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ls extends ss{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=ga({output:[e,e]})}static create(e){return new ls(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Bo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ga({output:[this.getValue(),e]})),this._value=0,super.reset()}}const cs={dependencies:null};class us extends as{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ao(this.source,((n,r)=>{var i;(i=n)&&i[ns]===i?t[r]=n.getValue(e):ka(n)?t[r]=Fa(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Oo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ao(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){cs.dependencies&&ka(e)&&cs.dependencies.add(e);const t=os(e);t&&Oo(t,(e=>this.add(e)))}}class ds extends us{constructor(e){super(e)}static create(e){return new ds(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(hs)),!0)}}function hs(e){return(Ga(e)?ls:ss).create(e)}function ps(e){const t=rs(e);return t?t.constructor:Bo.arr(e)?ds:Ga(e)?ls:ss}function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fs.apply(this,arguments)}const gs=(e,t)=>{const n=!Bo.fun(e)||e.prototype&&e.prototype.isReactComponent;return u(((r,o)=>{const s=c(null),l=n&&d((e=>{s.current=function(e,t){e&&(Bo.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[u,h]=function(e,t){const n=new Set;cs.dependencies=n,e.style&&(e=fs({},e,{style:t.createAnimatedStyle(e.style)}));return e=new us(e),cs.dependencies=null,[e,n]}(r,t),p=Ya(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&p()},g=new ms(f,h),m=c();Xa((()=>(m.current=g,Oo(h,(e=>Pa(e,g))),()=>{m.current&&(Oo(m.current.deps,(e=>Ia(e,m.current))),co.cancel(m.current.update))}))),a(f,[]),Ja((()=>()=>{const e=m.current;Oo(e.deps,(t=>Ia(t,e)))}));const y=t.getComponentProps(u.getValue());return i.createElement(e,fs({},y,{ref:l}))}))};class ms{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&co.write(this.update)}}const ys=Symbol.for("AnimatedComponent"),vs=e=>Bo.str(e)?e:e&&Bo.str(e.displayName)?e.displayName:Bo.fun(e)&&e.name||null;function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bs.apply(this,arguments)}function ws(e,...t){return Bo.fun(e)?e(...t):e}const _s=(e,t)=>!0===e||!!(t&&e&&(Bo.fun(e)?e(t):Po(e).includes(t))),Ss=(e,t)=>Bo.obj(e)?t&&e[t]:e,xs=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,$s=e=>e,Cs=(e,t=$s)=>{let n=ks;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Bo.und(n)||(r[i]=n)}return r},ks=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Fs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Bs(e){const t=function(e){const t={};let n=0;if(Ao(e,((e,r)=>{Fs[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Ao(e,((e,r)=>r in t||(n[r]=e))),n}return bs({},e)}function js(e){return e=Fa(e),Bo.arr(e)?e.map(js):Ga(e)?To.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Os(e){return Bo.fun(e)||Bo.arr(e)&&Bo.obj(e[0])}const As=bs({},{tension:170,friction:26},{mass:1,damping:1,easing:Sa.linear,clamp:!1});class Ps{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,As)}}function Is(e,t){if(Bo.und(t.decay)){const n=!Bo.und(t.tension)||!Bo.und(t.friction);!n&&Bo.und(t.frequency)&&Bo.und(t.damping)&&Bo.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const zs=[];class Ds{constructor(){this.changed=!1,this.values=zs,this.toValues=null,this.fromValues=zs,this.to=void 0,this.from=void 0,this.config=new Ps,this.immediate=!1}}function Es(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=_s(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{Bo.und(n.pause)||(i.paused=_s(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||_s(e,t)),c=ws(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-co.now()}function p(){c>0&&!To.skipAnimation?(i.delayed=!0,u=co.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(bs({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Hs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Vs(e.get()):t.every((e=>e.noop))?Ns(e.get()):Ms(e.get(),t.every((e=>e.finished))),Ns=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ms=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Vs=e=>({value:e,cancelled:!0,finished:!1});function Ts(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Cs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Vs(r)||i!==n.asyncId&&Ms(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Rs,a=new Ws;return(async()=>{if(To.skipAnimation)throw Ls(n),a.result=Ms(r,!1),d(a),a;p(o);const s=Bo.obj(e)?bs({},e):bs({},t,{to:e});s.parentId=i,Ao(c,((e,t)=>{Bo.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(To.skipAnimation)return Ls(n),Ms(r,!1);try{let t;t=Bo.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Ms(r.get(),!0,!1)}catch(e){if(e instanceof Rs)g=e.result;else{if(!(e instanceof Ws))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Bo.fun(a)&&co.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Ls(e,t){Io(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Rs extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Ws extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const qs=e=>e instanceof Qs;let Us=1;class Qs extends Oa{constructor(...e){super(...e),this.id=Us++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=rs(this);return e&&e.getValue()}to(...e){return To.to(this,e)}interpolate(...e){return Qa(`${qa}The "interpolate" function is deprecated in v9 (use "to" instead)`),To.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){ja(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Uo.sort(this),ja(this,{type:"priority",parent:this,priority:e})}}const Zs=Symbol.for("SpringPhase"),Gs=e=>(1&e[Zs])>0,Xs=e=>(2&e[Zs])>0,Ks=e=>(4&e[Zs])>0,Ys=(e,t)=>t?e[Zs]|=3:e[Zs]&=-3,Js=(e,t)=>t?e[Zs]|=4:e[Zs]&=-5;class el extends Qs{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ds,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Bo.und(e)||!Bo.und(t)){const n=Bo.obj(e)?bs({},e):bs({},t,{from:e});Bo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Xs(this)||this._state.asyncTo)||Ks(this)}get goal(){return Fa(this.animation.to)}get velocity(){const e=rs(this);return e instanceof ss?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Gs(this)}get isAnimating(){return Xs(this)}get isPaused(){return Ks(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=os(r.to);!a&&ka(r.to)&&(o=Po(Fa(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ls?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Bo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Bo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Bo.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=rs(this),l=s.getValue();if(t){const e=Fa(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return co.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Xs(this)){const{to:e,config:t}=this.animation;co.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Bo.und(e)?(n=this.queue||[],this.queue=[]):n=[Bo.obj(e)?e:bs({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Hs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ls(this._state,e&&this._lastCallId),co.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Bo.obj(n)?n[t]:n,(null==n||Os(n))&&(n=void 0),r=Bo.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Gs(this)||(e.reverse&&([n,r]=[r,n]),r=Fa(r),Bo.und(r)?rs(this)||this._set(n):this._set(r)),i}_update(e,t){let n=bs({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Cs(n,((e,t)=>/^on/.test(t)?Ss(e,r):e))),sl(this,n,"onProps"),ll(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Es(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Ks(this)||(Js(this,!0),zo(a.pauseQueue),ll(this,"onPause",Ms(this,tl(this,this.animation.to)),this))},resume:()=>{Ks(this)&&(Js(this,!1),Xs(this)&&this._resume(),zo(a.resumeQueue),ll(this,"onResume",Ms(this,tl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=nl(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Vs(this));const r=!Bo.und(e.to),i=!Bo.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Vs(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Bo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!jo(d,c);h&&(s.from=d),d=Fa(d);const p=!jo(u,l);p&&this._focus(u);const f=Os(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Is(n=bs({},n),t),t=bs({},n,t)),Is(e,t),Object.assign(e,t);for(const t in As)null==e[t]&&(e[t]=As[t]);let{mass:r,frequency:i,damping:o}=e;Bo.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,ws(t.config,o),t.config!==a.config?ws(a.config,o):void 0);let v=rs(this);if(!v||Bo.und(u))return n(Ms(this,!0));const b=Bo.und(t.reset)?i&&!t.default:!Bo.und(d)&&_s(t.reset,o),w=b?d:this.get(),_=js(u),S=Bo.num(_)||Bo.arr(_)||Ga(_),x=!f&&(!S||_s(a.immediate||t.immediate,o));if(p){const e=ps(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(_)}}const $=v.constructor;let C=ka(u),k=!1;if(!C){const e=b||!Gs(this)&&h;(p||e)&&(k=jo(js(w),_),C=!k),(jo(s.immediate,x)||x)&&jo(g.decay,m)&&jo(g.velocity,y)||(C=!0)}if(k&&Xs(this)&&(s.changed&&!b?C=!0:C||this._stop(l)),!f&&((C||ka(l))&&(s.values=v.getPayload(),s.toValues=ka(u)?null:$==ls?[1]:Po(_)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),C)){const{onRest:e}=s;Oo(al,(e=>sl(this,t,e)));const r=Ms(this,tl(this,l));zo(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&co.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?ws(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(Ts(t.to,t,this._state,this)):C?this._start():Xs(this)&&!p?this._pendingCalls.add(n):n(Ns(w))}_focus(e){const t=this.animation;e!==t.to&&(Ba(this)&&this._detach(),t.to=e,Ba(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ka(t)&&(Pa(t,this),qs(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ka(e)&&Ia(e,this)}_set(e,t=!0){const n=Fa(e);if(!Bo.und(n)){const e=rs(this);if(!e||!jo(n,e.getValue())){const r=ps(n);e&&e.constructor==r?e.setValue(n):is(this,r.create(n)),e&&co.batchedUpdates((()=>{this._onChange(n,t)}))}}return rs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ll(this,"onStart",Ms(this,tl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ws(this.animation.onChange,e,this)),ws(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;rs(this).reset(Fa(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Xs(this)||(Ys(this,!0),Ks(this)||this._resume())}_resume(){To.skipAnimation?this.finish():Uo.start(this)}_stop(e,t){if(Xs(this)){Ys(this,!1);const n=this.animation;Oo(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),ja(this,{type:"idle",parent:this});const r=t?Vs(this.get()):Ms(this.get(),tl(this,null!=e?e:n.to));zo(this._pendingCalls,r),n.changed&&(n.changed=!1,ll(this,"onRest",r,this))}}}function tl(e,t){const n=js(t);return jo(js(e.get()),n)}function nl(e,t=e.loop,n=e.to){let r=ws(t);if(r){const i=!0!==r&&Bs(r),o=(i||e).reverse,a=!i||i.reset;return rl(bs({},e,{loop:t,default:!1,pause:void 0,to:!o||Os(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function rl(e){const{to:t,from:n}=e=Bs(e),r=new Set;return Bo.obj(t)&&ol(t,r),Bo.obj(n)&&ol(n,r),e.keys=r.size?Array.from(r):null,e}function il(e){const t=rl(e);return Bo.und(t.default)&&(t.default=Cs(t)),t}function ol(e,t){Ao(e,((e,n)=>null!=e&&t.add(n)))}const al=["onStart","onRest","onChange","onPause","onResume"];function sl(e,t,n){e.animation[n]=t[n]!==xs(t,n)?Ss(t[n],e.key):void 0}function ll(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const cl=["onStart","onChange","onRest"];let ul=1;class dl{constructor(e,t){this.id=ul++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(bs({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Bo.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(rl(e)),this}start(e){let{queue:t}=this;return e?t=Po(e).map(rl):this.queue=[],this._flush?this._flush(this,t):(vl(this,t),hl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Oo(Po(t),(t=>n[t].stop(!!e)))}else Ls(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Bo.und(e))this.start({pause:!0});else{const t=this.springs;Oo(Po(e),(e=>t[e].pause()))}return this}resume(e){if(Bo.und(e))this.start({pause:!1});else{const t=this.springs;Oo(Po(e),(e=>t[e].resume()))}return this}each(e){Ao(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Io(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Io(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Io(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}co.onFrame(this._onFrame)}}function hl(e,t){return Promise.all(t.map((t=>pl(e,t)))).then((t=>Hs(e,t)))}async function pl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Bo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Bo.arr(i)||Bo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Oo(cl,(n=>{const r=t[n];if(Bo.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,zo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===xs(t,"cancel");(u||p&&d.asyncId)&&h.push(Es(++e._lastAsyncId,{props:t,state:d,actions:{pause:Fo,resume:Fo,start(t,n){p?(Ls(d,e._lastAsyncId),n(Vs(e))):(t.onRest=s,n(Ts(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Hs(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=nl(t,a,i);if(n)return vl(e,[n]),pl(e,n,!0)}return l&&co.batchedUpdates((()=>l(f,e,e.item))),f}function fl(e,t){const n=bs({},e.springs);return t&&Oo(Po(t),(e=>{Bo.und(e.keys)&&(e=rl(e)),Bo.obj(e.to)||(e=bs({},e,{to:void 0})),yl(n,e,(e=>ml(e)))})),gl(e,n),n}function gl(e,t){Ao(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Pa(t,e))}))}function ml(e,t){const n=new el;return n.key=e,t&&Pa(n,t),n}function yl(e,t,n){t.keys&&Oo(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function vl(e,t){Oo(t,(t=>{yl(e.springs,t,(t=>ml(t,e)))}))}const bl=["children"],wl=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,bl);const r=h(_l),o=n.pause||!!r.pause,s=n.immediate||!!r.immediate;n=function(e,t){const[n]=l((()=>({inputs:t,result:e()}))),r=c(),i=r.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=n;return a((()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:s})),[o,s]);const{Provider:u}=_l;return i.createElement(u,{value:n},t)},_l=(Sl=wl,xl={},Object.assign(Sl,i.createContext(xl)),Sl.Provider._context=Sl,Sl.Consumer._context=Sl,Sl);var Sl,xl;wl.Provider=_l.Provider,wl.Consumer=_l.Consumer;const $l=()=>{const e=[],t=function(t){Za(`${qa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Oo(e,((e,i)=>{if(Bo.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Oo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Oo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Oo(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Oo(e,((e,r)=>{if(Bo.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Oo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Oo(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Bo.fun(e)?e(n,t):e};return t._getProps=n,t};function Cl(e,t){const n=Bo.fun(e),[[r],i]=function(e,t,n){const r=Bo.fun(t)&&t;r&&!n&&(n=[]);const i=p((()=>r||3==arguments.length?$l():void 0),[]),o=c(0),a=Ya(),s=p((()=>({ctrls:[],queue:[],flush(e,t){const n=fl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?hl(e,t):new Promise((r=>{gl(e,n),s.queue.push((()=>{r(hl(e,t))})),a()}))}})),[]),l=c([...s.ctrls]),u=[],d=ts(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=l.current[i]||(l.current[i]=new dl(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=il(n))}}p((()=>{Oo(l.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,f(d,e)}),[e]),p((()=>{f(0,Math.min(d,e))}),n);const g=l.current.map(((e,t)=>fl(e,u[t]))),m=h(wl),y=ts(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Xa((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],Oo(e,(e=>e()))),Oo(l.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Ja((()=>()=>{Oo(s.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>bs({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let kl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(kl||(kl={}));class Fl extends Qs{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=ga(...t);const n=this._get(),r=ps(n);is(this,r.create(n))}advance(e){const t=this._get();jo(t,this.get())||(rs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&jl(this._active)&&Ol(this)}_get(){const e=Bo.arr(this.source)?this.source.map(Fa):Po(Fa(this.source));return this.calc(...e)}_start(){this.idle&&!jl(this._active)&&(this.idle=!1,Oo(os(this),(e=>{e.done=!1})),To.skipAnimation?(co.batchedUpdates((()=>this.advance())),Ol(this)):Uo.start(this))}_attach(){let e=1;Oo(Po(this.source),(t=>{ka(t)&&Pa(t,this),qs(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Oo(Po(this.source),(e=>{ka(e)&&Ia(e,this)})),this._active.clear(),Ol(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Po(this.source).reduce(((e,t)=>Math.max(e,(qs(t)?t.priority:0)+1)),0))}}function Bl(e){return!1!==e.idle}function jl(e){return!e.size||Array.from(e).every(Bl)}function Ol(e){e.idle||(e.idle=!0,Oo(os(e),(e=>{e.done=!0})),ja(e,{type:"idle",parent:e}))}function Al(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}To.assign({createStringInterpolator:Wa,to:(e,t)=>new Fl(e,t)});const Pl=["style","children","scrollTop","scrollLeft","viewBox"],Il=/^--/;function zl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Il.test(e)||El.hasOwnProperty(e)&&El[e]?(""+t).trim():t+"px"}const Dl={};let El={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Hl=["Webkit","Ms","Moz","O"];El=Object.keys(El).reduce(((e,t)=>(Hl.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),El);const Nl=["x","y","z"],Ml=/^(matrix|translate|scale|rotate|skew)/,Vl=/^(translate)/,Tl=/^(rotate|skew)/,Ll=(e,t)=>Bo.num(e)&&0!==e?e+t:e,Rl=(e,t)=>Bo.arr(e)?e.every((e=>Rl(e,t))):Bo.num(e)?e===t:parseFloat(e)===t;class Wl extends us{constructor(e){let{x:t,y:n,z:r}=e,i=Al(e,Nl);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Ll(e,"px"))).join(",")})`,Rl(e,0)]))),Ao(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Ml.test(t)){if(delete i[t],Bo.und(e))return;const n=Vl.test(t)?"px":Tl.test(t)?"deg":"";o.push(Po(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ll(i,n)})`,Rl(i,0)]:e=>[`${t}(${e.map((e=>Ll(e,n))).join(",")})`,Rl(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ql(o,a)),super(i)}}class ql extends Oa{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Oo(this.inputs,((n,r)=>{const i=Fa(n[0]),[o,a]=this.transforms[r](Bo.arr(i)?i:n.map(Fa));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Oo(this.inputs,(e=>Oo(e,(e=>ka(e)&&Pa(e,this)))))}observerRemoved(e){0==e&&Oo(this.inputs,(e=>Oo(e,(e=>ka(e)&&Ia(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ja(this,e)}}const Ul=["scrollTop","scrollLeft"];To.assign({batchedUpdates:f,createStringInterpolator:Wa,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Ql=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new us(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=vs(e)||"Anonymous";return(e=Bo.str(e)?o[e]||(o[e]=gs(e,i)):e[ys]||(e[ys]=gs(e,i))).displayName=`Animated(${t})`,e};return Ao(e,((t,n)=>{Bo.arr(e)&&(n=vs(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Al(r,Pl),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Dl[t]||(Dl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=zl(t,i[t]);Il.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Wl(e),getComponentProps:e=>Al(e,Ul)}),Zl=Ql.animated,Gl=(e,t,n)=>t?di(n,t)||di(e,t):n||e,Xl=(e,t)=>{const n=t||e.defaultValue;return di(e.collections,n)};var Kl;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Kl||(Kl={}));const Yl={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jl=e=>t=>{const n=t.theme,r=Xl(Yl,n[Kl.colorScheme]);return n.options&&n.options.color?Gl(r,e,n.options.color):Gl(r,e)},ec={Brand:{1:Jl("Brand.1"),2:Jl("Brand.2"),3:Jl("Brand.3"),4:Jl("Brand.4"),5:Jl("Brand.5"),6:Jl("Brand.6")},Primary:Jl("Primary"),PrimaryDark:Jl("PrimaryDark"),Secondary:Jl("Secondary"),Accent:{Light:{1:Jl("Accent.Light.1"),2:Jl("Accent.Light.2"),3:Jl("Accent.Light.3"),4:Jl("Accent.Light.4"),5:Jl("Accent.Light.5"),6:Jl("Accent.Light.6")},Dark:{1:Jl("Accent.Dark.1"),2:Jl("Accent.Dark.2"),3:Jl("Accent.Dark.3")}},Neutral:{1:Jl("Neutral.1"),2:Jl("Neutral.2"),3:Jl("Neutral.3"),4:Jl("Neutral.4"),5:Jl("Neutral.5"),6:Jl("Neutral.6"),7:Jl("Neutral.7"),8:Jl("Neutral.8")},Validation:{Green:{Text:Jl("Validation.Green.Text"),Icon:Jl("Validation.Green.Icon"),Border:Jl("Validation.Green.Border"),Background:Jl("Validation.Green.Background")},Orange:{Text:Jl("Validation.Orange.Text"),Icon:Jl("Validation.Orange.Icon"),Border:Jl("Validation.Orange.Border"),Background:Jl("Validation.Orange.Background"),Badge:Jl("Validation.Orange.Badge")},Red:{Text:Jl("Validation.Red.Text"),Icon:Jl("Validation.Red.Icon"),Border:Jl("Validation.Red.Border"),Background:Jl("Validation.Red.Background")},Blue:{Text:Jl("Validation.Blue.Text"),Icon:Jl("Validation.Blue.Icon"),Border:Jl("Validation.Blue.Border"),Background:Jl("Validation.Blue.Background")}},Shadow:{Accent:Jl("Shadow.Accent"),Red:Jl("Shadow.Red"),Elevation:Jl("Shadow.Elevation")}},tc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},nc=e=>Object.keys(tc).reduce(((t,n)=>{const r=tc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),rc=nc("max-width"),ic=(nc("min-width"),g.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),oc=m`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ac=g.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||ec.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${oc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sc=g(ac)`
    animation-delay: -0.45s;
`,lc=g(ac)`
    animation-delay: -0.3s;
`,cc=g(ac)`
    animation-delay: -0.15s;
`,uc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},dc={collections:{base:{D1:{fontFamily:uc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:uc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:uc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:uc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:uc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:uc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:uc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:uc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:uc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:uc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:uc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:uc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:uc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:uc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},hc=e=>t=>{const n=t.theme,r=Xl(dc,n[Kl.textStyleScheme]);return n.options&&n.options.textStyle?Gl(r,e,n.options.textStyle):Gl(r,e)},pc={D1:{fontFamily:hc("D1.fontFamily"),fontSize:hc("D1.fontSize"),fontWeight:hc("D1.fontWeight"),lineHeight:hc("D1.lineHeight"),letterSpacing:hc("D1.letterSpacing")},D2:{fontFamily:hc("D2.fontFamily"),fontSize:hc("D2.fontSize"),fontWeight:hc("D2.fontWeight"),lineHeight:hc("D2.lineHeight"),letterSpacing:hc("D2.letterSpacing")},D3:{fontFamily:hc("D3.fontFamily"),fontSize:hc("D3.fontSize"),fontWeight:hc("D3.fontWeight"),lineHeight:hc("D3.lineHeight"),letterSpacing:hc("D3.letterSpacing")},D4:{fontFamily:hc("D4.fontFamily"),fontSize:hc("D4.fontSize"),fontWeight:hc("D4.fontWeight"),lineHeight:hc("D4.lineHeight"),letterSpacing:hc("D4.letterSpacing")},DBody:{fontFamily:hc("DBody.fontFamily"),fontSize:hc("DBody.fontSize"),fontWeight:hc("DBody.fontWeight"),lineHeight:hc("DBody.lineHeight"),letterSpacing:hc("DBody.letterSpacing")},H1:{fontFamily:hc("H1.fontFamily"),fontSize:hc("H1.fontSize"),fontWeight:hc("H1.fontWeight"),lineHeight:hc("H1.lineHeight"),letterSpacing:hc("H1.letterSpacing")},H2:{fontFamily:hc("H2.fontFamily"),fontSize:hc("H2.fontSize"),fontWeight:hc("H2.fontWeight"),lineHeight:hc("H2.lineHeight"),letterSpacing:hc("H2.letterSpacing")},H3:{fontFamily:hc("H3.fontFamily"),fontSize:hc("H3.fontSize"),fontWeight:hc("H3.fontWeight"),lineHeight:hc("H3.lineHeight"),letterSpacing:hc("H3.letterSpacing")},H4:{fontFamily:hc("H4.fontFamily"),fontSize:hc("H4.fontSize"),fontWeight:hc("H4.fontWeight"),lineHeight:hc("H4.lineHeight"),letterSpacing:hc("H4.letterSpacing")},H5:{fontFamily:hc("H5.fontFamily"),fontSize:hc("H5.fontSize"),fontWeight:hc("H5.fontWeight"),lineHeight:hc("H5.lineHeight"),letterSpacing:hc("H5.letterSpacing")},H6:{fontFamily:hc("H6.fontFamily"),fontSize:hc("H6.fontSize"),fontWeight:hc("H6.fontWeight"),lineHeight:hc("H6.lineHeight"),letterSpacing:hc("H6.letterSpacing")},Body:{fontFamily:hc("Body.fontFamily"),fontSize:hc("Body.fontSize"),fontWeight:hc("Body.fontWeight"),lineHeight:hc("Body.lineHeight"),letterSpacing:hc("Body.letterSpacing")},BodySmall:{fontFamily:hc("BodySmall.fontFamily"),fontSize:hc("BodySmall.fontSize"),fontWeight:hc("BodySmall.fontWeight"),lineHeight:hc("BodySmall.lineHeight"),letterSpacing:hc("BodySmall.letterSpacing")},XSmall:{fontFamily:hc("XSmall.fontFamily"),fontSize:hc("XSmall.fontSize"),fontWeight:hc("XSmall.fontWeight"),lineHeight:hc("XSmall.lineHeight"),letterSpacing:hc("XSmall.letterSpacing")}},fc=e=>{switch(e){case 700:case"bold":return uc.Bold;case 600:case"semibold":return uc.Semibold;case 300:case"light":return uc.Light;case 400:case"regular":return uc.Regular;default:return""}},gc=(e,t)=>n=>{const r=pc[e].fontFamily(n),i=pc[e].fontWeight(n);return Object.values(uc).includes(r)?y`
                font-family: ${fc(t)||fc(i)||r};
                font-weight: normal !important;
            `:y`
            font-family: ${r};
            font-weight: ${(mc(t)||i)??"normal"};
        `},mc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yc=(e,t,n=!1)=>r=>{const i=pc[e],o=i.fontSize(r);return y`
            ${gc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},vc=(e=!1,t=!1)=>t?y`
            display: block;
        `:e?y`
            display: inline;
        `:y`
            display: block;
        `;var bc,wc={};Object.defineProperty(wc,"__esModule",{value:!0});var _c=e;const Sc=e=>_c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:_c.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var xc;Sc.displayName="ExternalIcon",bc=wc.ExternalIcon=Sc,function(e){e.D1=g.h1`
        ${e=>y`
                ${yc("D1",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.D2=g.h1`
        ${e=>y`
                ${yc("D2",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.D3=g.h1`
        ${e=>y`
                ${yc("D3",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.D4=g.h1`
        ${e=>y`
                ${yc("D4",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.DBody=g.h1`
        ${e=>y`
                ${yc("DBody",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.H1=g.h1`
        ${e=>y`
                ${yc("H1",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.H2=g.h2`
        ${e=>y`
                ${yc("H2",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.H3=g.h3`
        ${e=>y`
                ${yc("H3",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.H4=g.h4`
        ${e=>y`
                ${yc("H4",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.H5=g.h5`
        ${e=>y`
                ${yc("H5",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.H6=g.h6`
        ${e=>y`
                ${yc("H6",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.Body=g.p`
        ${e=>y`
                ${yc("Body",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=g.p`
        ${e=>y`
                ${yc("BodySmall",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.XSmall=g.span`
        ${e=>y`
                ${yc("XSmall",e.weight,e.paragraph)}
                color: ${ec.Neutral[1]};
                ${vc(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>kc({...e,textStyle:"Body"}),Small:e=>kc({...e,textStyle:"BodySmall"})}}(xc||(xc={}));const $c=g.a`
    ${e=>y`
            ${yc(e.textStyle,e.weight)}
            color: ${ec.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ec.Secondary};

                svg {
                    color: ${ec.Secondary};
                }
            }
        `}
`,Cc=g(bc)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,kc=({external:e=!1,children:r,...i})=>t($c,{...i,children:[r,e&&n(Cc,{})]});var Fc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Fc||(Fc={})),g.button`
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
                    background-color: ${ec.Neutral[8](e)};
                    border: 1px solid ${ec.Primary(e)};

                    span {
                        color: ${ec.Primary(e)};
                    }
                `;case"light":return y`
                    background-color: ${ec.Neutral[8](e)};
                    border: 1px solid ${ec.Neutral[5](e)};

                    span {
                        color: ${ec.Primary(e)};
                    }
                `;case"disabled":return y`
                    background-color: ${ec.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${ec.Neutral[3](e)};
                    }
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ec.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${ec.Secondary};
                        }
                    }
                `;default:return y`
                    background-color: ${ec.Primary(e)};
                    border: 1px solid transparent;

                    ${rc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${ec.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    span {
                        ${yc("H5","semibold")}
                    }

                    ${rc.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    span {
                        ${yc("H4","semibold")}
                    }

                    ${rc.mobileS} {
                        height: auto;
                    }
                `}
`;const Bc=g((({color:e,className:r,size:i=18})=>t(ic,{className:r,$size:i,$color:e,children:[n(ac,{id:"inner1",$size:i-2,$borderWidth:2}),n(sc,{id:"inner2",$size:i-2,$borderWidth:2}),n(lc,{id:"inner3",$size:i-2,$borderWidth:2}),n(cc,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=ec.Primary(e);break;case"disabled":t=ec.Neutral[3](e);break;default:t=ec.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var jc;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let i=0;t>n&&(i=Math.floor((t-n)/8));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(jc||(jc={}));var Oc,Ac={};Object.defineProperty(Ac,"__esModule",{value:!0});var Pc=e;const Ic=e=>Pc.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Pc.jsx("path",{d:"M9.99999 10.792C10.236 10.792 10.441 10.705 10.615 10.531C10.7883 10.3577 10.875 10.153 10.875 9.91701V6.70801C10.875 6.47201 10.7883 6.27067 10.615 6.10401C10.441 5.93734 10.236 5.85401 9.99999 5.85401C9.76399 5.85401 9.55899 5.94101 9.38499 6.11501C9.21166 6.28834 9.12499 6.49301 9.12499 6.72901V9.93801C9.12499 10.174 9.21166 10.3753 9.38499 10.542C9.55899 10.7087 9.76399 10.792 9.99999 10.792ZM9.99999 14.188C10.236 14.188 10.441 14.108 10.615 13.948C10.7883 13.788 10.875 13.576 10.875 13.312C10.875 13.076 10.7883 12.8713 10.615 12.698C10.441 12.5247 10.236 12.438 9.99999 12.438C9.76399 12.438 9.55899 12.5247 9.38499 12.698C9.21166 12.8713 9.12499 13.076 9.12499 13.312C9.12499 13.576 9.21166 13.788 9.38499 13.948C9.55899 14.108 9.76399 14.188 9.99999 14.188ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});Ic.displayName="ExclamationCircleFillIcon",Oc=Ac.ExclamationCircleFillIcon=Ic;var zc,Dc={};Object.defineProperty(Dc,"__esModule",{value:!0});var Ec=e;const Hc=e=>Ec.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Ec.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});Hc.displayName="TickIcon",zc=Dc.TickIcon=Hc;const Nc=g.div`
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
    border: 1px solid ${ec.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=ec.Primary(e),n=ec.Primary(e)),e.disabled&&(t=ec.Neutral[6](e),n=ec.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,Mc=g.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Vc=g(zc)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return y`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?ec.Neutral[4]:ec.Neutral[8]};
`,Tc=g(Zl.div)`
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
        background: ${ec.Neutral[4]};
        border-right: 5px solid ${ec.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${rc.mobileL} {
        max-height: 15rem;
    }
`,Rc=g.li`
    :hover,
    :focus,
    :active {
        background: ${ec.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return y`
                background: ${ec.Accent.Light[5]};
            `}}
`,Wc=g.button`
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
        outline-color: ${ec.Accent.Light[3]};
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
    background: ${ec.Neutral[8]};
`;const qc=g.div`
    ${yc("Body","regular")}
    color: ${ec.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Uc=g.span`
    color: ${ec.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,Qc=g.div`
    display: flex;
    flex-direction: column;
`,Zc=g.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Gc=g.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;g(xc.Hyperlink.Default)`
    color: ${ec.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${ec.Accent.Light[3]};
        color: ${ec.Neutral[1]};
    }
`;const Xc=g((({className:e,checked:r,disabled:i,onChange:o,onKeyPress:s,displaySize:c="default",...u})=>{const[d,h]=l(r);a((()=>{h(r)}),[r]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;o&&o(e),s&&s(t)}};return t(Nc,{selected:d,disabled:i,className:e,"data-testid":"checkbox",$displaySize:c,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,children:[n(Mc,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:i,checked:d,...u}),d&&n(Vc,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Kc=g.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Yc=g.button`
    ${yc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ec.Primary(e)};\n\t\t`}
`,Jc=g.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,eu=g(xc.Body)``,tu=g(Oc)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${ec.Validation.Red.Icon};
`;var nu,ru={};Object.defineProperty(ru,"__esModule",{value:!0});var iu=e;const ou=e=>iu.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:iu.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});ou.displayName="CrossIcon",nu=ru.CrossIcon=ou;var au,su={};Object.defineProperty(su,"__esModule",{value:!0});var lu=e;const cu=e=>lu.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:lu.jsx("path",{d:"M15.688 16.896L11.125 12.333C10.667 12.6803 10.1703 12.941 9.635 13.115C9.10033 13.2883 8.54133 13.375 7.958 13.375C6.44467 13.375 5.15667 12.8507 4.094 11.802C3.03133 10.7533 2.5 9.472 2.5 7.958C2.5 6.44467 3.03133 5.15667 4.094 4.094C5.15667 3.03133 6.44467 2.5 7.958 2.5C9.472 2.5 10.7533 3.03133 11.802 4.094C12.8507 5.15667 13.375 6.44467 13.375 7.958C13.375 8.54133 13.2917 9.10033 13.125 9.635C12.9583 10.1703 12.6943 10.66 12.333 11.104L16.917 15.708C17.0837 15.8747 17.1633 16.0727 17.156 16.302C17.1493 16.5313 17.0627 16.7293 16.896 16.896C16.7293 17.0627 16.528 17.146 16.292 17.146C16.056 17.146 15.8547 17.0627 15.688 16.896ZM7.958 11.625C8.972 11.625 9.83667 11.2673 10.552 10.552C11.2673 9.83667 11.625 8.972 11.625 7.958C11.625 6.93067 11.2707 6.05567 10.562 5.333C9.854 4.611 8.986 4.25 7.958 4.25C6.93067 4.25 6.05567 4.611 5.333 5.333C4.611 6.05567 4.25 6.93067 4.25 7.958C4.25 8.986 4.611 9.854 5.333 10.562C6.05567 11.2707 6.93067 11.625 7.958 11.625Z",fill:"currentColor"})});cu.displayName="MagnifierIcon",au=su.MagnifierIcon=cu;const uu=g.button`
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
                background-color: ${ec.Neutral[7]};
            `}
    }
`,du=o.forwardRef((({children:e,focusHighlight:t=!0,focusOutline:r="none",type:i="button",...o},a)=>n(uu,{ref:a,$outline:r,$highlight:t,type:i,...o,children:e}))),hu={collections:{base:{InputBoxShadow:y`
        inset 0 0 6px 1px ${ec.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 6px 1px ${ec.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${ec.Shadow.Elevation}
 `}},defaultValue:"base"},pu=e=>t=>{const n=t.theme,r=Xl(hu,n[Kl.designTokenScheme]);return n.options?.designToken?Gl(r,e,n.options.designToken):Gl(r,e)},fu=pu("InputBoxShadow"),gu=pu("InputErrorBoxShadow");pu("ElevationBoxShadow");g.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${ec.Neutral[5]};
    border-radius: 4px;
    background: ${ec.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${ec.Accent.Light[1]};
        box-shadow: ${fu};
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
                background: ${ec.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${ec.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?y`
                border: 1px solid ${ec.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${ec.Validation.Red.Border};
                    box-shadow: ${gu};
                }
            `:void 0}
`;const mu=g.input`
    ${yc("Body","regular")}
    color: ${ec.Neutral[1]};
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
        color: ${ec.Neutral[3]};
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
`,yu=g.li`
    background: ${ec.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,vu=g(mu)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,bu=g(au)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${ec.Neutral[3]};
`,wu=g(du)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${ec.Neutral[3]};
    cursor: pointer;
`,_u=g(nu)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${ec.Neutral[3]};
`,Su=u(((e,r)=>{const{onClear:i,...o}=e;return t(yu,{children:[n(bu,{}),n(vu,{ref:r,...o}),o.value&&n(wu,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:n(_u,{})})]},"search")})),xu=({listItems:e,listExtractor:i,valueExtractor:o,onSelectItem:s,listStyleWidth:u,visible:d,enableSearch:h,searchPlaceholder:p="Search",onSearch:f,searchFunction:g,onDismiss:m,multiSelect:y,selectedItems:v,onSelectAll:b,onRetry:w,itemsLoadState:_="success",itemTruncationType:S="end",renderListItem:x,onBlur:$,hideNoResultsDisplay:C,renderCustomCallToAction:k,...F})=>{const[B,j]=l(0),[O,A]=l(""),[P,I]=l(e),[z,D]=l(0),E=Cl({height:z}),H=c(),N=c(),M=c([]),V=c(),T=c(),L=c(B),R=c(P),W=e=>{L.current=e,j(e)},q=e=>{R.current=e,I(e)};a((()=>(document.addEventListener("keydown",K),()=>{document.removeEventListener("keydown",K)})),[]),a((()=>{G(O)}),[O]),a((()=>{A(""),d?(setTimeout((()=>{D(X())})),V&&V.current?(V.current.focus(),W(-1)):M.current[B]&&M.current[B].focus()):D(0)}),[d]),a((()=>{if(d){const e=X();D(e)}}),[P]),a((()=>{q(e),A(""),W(0)}),[e]);const U=e=>i?i(e):e.toString(),Q=e=>{const t=i?i(e):e.toString();let n=0;return N&&N.current&&(n=N.current.getBoundingClientRect().width-100),jc.shouldTruncateToTwoLines("string"==typeof t?t:t.title,n)},Z=e=>!!oo(v,(t=>so(t,e))),G=t=>{if(""===t)q(e);else if(g){const e=g(t);q(e)}else{const n=e.filter((e=>{const n=U(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase();return"object"==typeof n&&n.secondaryLabel?r.includes(t.trim().toLowerCase())||n.secondaryLabel.includes(t.trim().toLowerCase()):r.includes(t.trim().toLowerCase())}));q(n)}},X=()=>(N&&N.current?N.current.getBoundingClientRect().height:0)+(T.current?T.current.getBoundingClientRect().height:0),K=e=>{if(H&&H.current.contains(e.target))switch(e.code){case"ArrowDown":if(L.current<R.current.length-1){const e=L.current+1;M.current[e].focus(),W(e)}break;case"ArrowUp":if(L.current>0){const e=L.current-1;M.current[e].focus(),W(L.current-1)}break;case"Escape":m&&m(!0)}},Y=(e,t)=>{e.preventDefault(),s&&s(t,(e=>o?o(e):e)(t))},J=e=>{const t=e.target.value;A(t),f&&f()},ee=()=>{A(""),V.current.focus(),f&&f()},te=()=>{w&&w()},ne=()=>{$&&$()},re=e=>{const r=U(e),i="string"==typeof r?r:r.title;return t(Qc,{"data-testid":"truncate-middle-container",children:[n(Zc,{children:i}),t(Gc,{children:[" ",i]})]})},ie=e=>{const i=U(e);return"string"==typeof i?n(r,{children:i}):t(r,{children:[i.title,i.secondaryLabel&&n(Uc,{children:i.secondaryLabel})]})},oe=()=>{if(!w||w&&"success"===_)return P.map(((e,r)=>n(Rc,{checked:Z(e)&&!y,children:t(Wc,{onClick:t=>{Y(t,e)},ref:e=>M.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,multiSelect:y,onBlur:ne,children:[y&&n(Xc,{checked:Z(e),displaySize:"small"}),x?x(e,{selected:Z(e)}):n(qc,{truncateType:S,children:"middle"===S&&Q(e)?re(e):ie(e)})]})},((e,t)=>`item_${t}__${o?o(e):e}`)(e,r))))},ae=()=>{if(y&&P.length>0&&!O&&"success"===_)return n(Kc,{children:n(Yc,{onClick:b,type:"button",children:0===v.length?"Select all":"Unselect all"})},"selectAll")},se=()=>{if(!C&&O&&0===P.length)return t(Jc,{"data-testid":"list-no-results",children:[n(tu,{"data-testid":"no-result-icon"}),n(eu,{children:"No results found."})]},"noResults")},le=()=>{if(w&&"loading"===_)return t(Jc,{"data-testid":"list-loading",children:[n(Bc,{$buttonStyle:"secondary",size:24}),n(eu,{children:"Loading..."})]},"loading")},ce=()=>{if(w&&"fail"===_)return t(Jc,{"data-testid":"list-fail",children:[n(tu,{"data-testid":"load-error-icon"}),n(eu,{children:"Failed to load."}),n(Yc,{onClick:te,children:"Try again."})]},"noResults")};return n(r,{children:t(Tc,{style:E,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:H,children:[(()=>{if(d)return t(Lc,{ref:N,"data-testid":"dropdown-list",width:u,role:"list",...F,children:[(h||g)&&"success"===_?n(Su,{ref:V,onChange:J,value:O,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:ee}):null,ae(),se(),le(),ce(),oe()]})})(),(()=>{if(d&&k)return n("div",{ref:T,"data-testid":"custom-cta",children:k(m,P)})})()]})})};var $u,Cu={};Object.defineProperty(Cu,"__esModule",{value:!0});var ku=e;const Fu=e=>ku.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ku.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});Fu.displayName="ChevronDownIcon",$u=Cu.ChevronDownIcon=Fu;const Bu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",ju=g.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,Ou=g.button`
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
        outline: 2px solid ${ec.Accent.Light[3]};
    }
`,Au=m`
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
`,Pu=g.div`
    position: relative;
    border: 1px solid ${ec.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ec.Neutral[8]};

    :focus-within {
        border: 1px solid ${ec.Accent.Light[1]};
        box-shadow: ${fu};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Au} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${ec.Neutral[6](e)};

                ${Ou} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ec.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${Ou} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${ec.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ec.Validation.Red.Border(e)};
                    box-shadow: ${gu};
                }
            `:void 0}
`,Iu=g.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Bu};
    margin-left: 1rem;
`,zu=g($u)`
    color: ${ec.Neutral[3]};
    height: ${pc.Body.fontSize}rem;
    width: ${pc.Body.fontSize}rem;
`,Du=g.div`
    height: 1px;
    background: ${ec.Neutral[5]};
    margin: 0 0.5rem;
`,Eu=g.div`
    display: flex;
    flex: 1;
`,Hu=g(xc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Nu=g(Hu)`
    color: ${ec.Neutral[3]};
`,Mu=({children:e,show:t,error:r,disabled:i,testId:o,onBlur:s,readOnly:l})=>{const u=c();return((e,t,n=window)=>{const r=c();a((()=>{r.current=t}),[t]),a((()=>{if(!n||!n.addEventListener)return;const t=e=>r.current(e);return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}),[e,n])})("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;t&&s()}}),document),n(ju,{children:n(Pu,{ref:u,error:r&&!t,disabled:i,$readOnly:l,expanded:t,"data-testid":o,children:e})})},Vu=({selectedOptions:e,placeholder:i="Select",options:o,className:s,disabled:u,error:d,"data-testid":h,enableSearch:p=!1,searchFunction:f,searchPlaceholder:g,valueExtractor:m,listExtractor:y,onSelectOptions:v,listStyleWidth:b,onShowOptions:w,onHideOptions:_,onRetry:S,optionsLoadState:x="success",optionTruncationType:$="end",...C})=>{const[k,F]=l(e||[]),[B,j]=l(!1),O=c();a((()=>{F(e||[])}),[e]);const A=(e,t)=>{const n=[...k],r=to(k,(e=>(m?m(e):e)===t));r>-1?n.splice(r,1):n.push(e),F(n),z(!1),O&&O.current.focus(),D(n)},P=()=>{B&&(j(!1),z(!1)),O&&O.current.focus()},I=()=>{k&&k.length>0?(F([]),D([])):(F(o),D(o))},z=e=>{!e&&_&&_(),e&&w&&w()},D=e=>{v&&v(e)};return t(Mu,{show:B,error:d&&!B,disabled:u,testId:h,className:s,onBlur:()=>{j(!1),z(!1)},children:[n(Ou,{ref:O,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),u||(j(!B),z(!B))},...C,children:t(r,{children:[n(Eu,{children:k&&0!==k.length?n(Hu,{children:k&&0!=k.length?`${k.length} selected`:i}):n(Nu,{truncateType:$,children:i})}),n(Iu,{expanded:B,children:n(zu,{})})]})}),B&&n(Du,{}),o&&o.length>0||S?n(xu,{listItems:o,onSelectItem:A,onDismiss:P,valueExtractor:m,listExtractor:y,listStyleWidth:b,visible:B,enableSearch:p,searchFunction:f,searchPlaceholder:g,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:k,onSelectAll:I,onRetry:S,itemsLoadState:x,itemTruncationType:$}):null]})};export{Vu as InputMultiSelect};
//# sourceMappingURL=index.js.map
