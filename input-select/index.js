import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as v}from"@lifesg/react-icons/tick";import{CrossIcon as w}from"@lifesg/react-icons/cross";import{MagnifierIcon as _}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var x=function(){this.__data__=[],this.size=0};var F=function(e,t){return e===t||e!=e&&t!=t},k=F;var B=function(e,t){for(var n=e.length;n--;)if(k(e[n][0],t))return n;return-1},O=B,A=Array.prototype.splice;var j=B;var E=B;var D=B;var C=x,P=function(e){var t=this.__data__,n=O(t,e);return!(n<0)&&(n==t.length-1?t.pop():A.call(t,n,1),--this.size,!0)},I=function(e){var t=this.__data__,n=j(t,e);return n<0?void 0:t[n][1]},z=function(e){return E(this.__data__,e)>-1},T=function(e,t){var n=this.__data__,r=D(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function H(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}H.prototype.clear=C,H.prototype.delete=P,H.prototype.get=I,H.prototype.has=z,H.prototype.set=T;var N=H,M=N;var V=function(){this.__data__=new M,this.size=0};var R=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var L=function(e){return this.__data__.get(e)};var W=function(e){return this.__data__.has(e)},q="object"==typeof $&&$&&$.Object===Object&&$,U=q,Q="object"==typeof self&&self&&self.Object===Object&&self,G=U||Q||Function("return this")(),X=G.Symbol,Z=X,K=Object.prototype,Y=K.hasOwnProperty,J=K.toString,ee=Z?Z.toStringTag:void 0;var te=function(e){var t=Y.call(e,ee),n=e[ee];try{e[ee]=void 0;var r=!0}catch(e){}var i=J.call(e);return r&&(t?e[ee]=n:delete e[ee]),i},ne=Object.prototype.toString;var re=te,ie=function(e){return ne.call(e)},oe=X?X.toStringTag:void 0;var ae=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":oe&&oe in Object(e)?re(e):ie(e)};var se=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},le=ae,ce=se;var ue,de=function(e){if(!ce(e))return!1;var t=le(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},he=G["__core-js_shared__"],pe=(ue=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+ue:"";var fe=function(e){return!!pe&&pe in e},ge=Function.prototype.toString;var me=function(e){if(null!=e){try{return ge.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ye=de,be=fe,ve=se,we=me,_e=/^\[object .+?Constructor\]$/,Se=Function.prototype,$e=Object.prototype,xe=Se.toString,Fe=$e.hasOwnProperty,ke=RegExp("^"+xe.call(Fe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Be=function(e){return!(!ve(e)||be(e))&&(ye(e)?ke:_e).test(we(e))},Oe=function(e,t){return null==e?void 0:e[t]};var Ae=function(e,t){var n=Oe(e,t);return Be(n)?n:void 0},je=Ae(G,"Map"),Ee=Ae(Object,"create"),De=Ee;var Ce=function(){this.__data__=De?De(null):{},this.size=0};var Pe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ie=Ee,ze=Object.prototype.hasOwnProperty;var Te=function(e){var t=this.__data__;if(Ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ze.call(t,e)?t[e]:void 0},He=Ee,Ne=Object.prototype.hasOwnProperty;var Me=Ee;var Ve=Ce,Re=Pe,Le=Te,We=function(e){var t=this.__data__;return He?void 0!==t[e]:Ne.call(t,e)},qe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Me&&void 0===t?"__lodash_hash_undefined__":t,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Ve,Ue.prototype.delete=Re,Ue.prototype.get=Le,Ue.prototype.has=We,Ue.prototype.set=qe;var Qe=Ue,Ge=N,Xe=je;var Ze=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var n=e.__data__;return Ze(t)?n["string"==typeof t?"string":"hash"]:n.map},Ye=Ke;var Je=Ke;var et=Ke;var tt=Ke;var nt=function(){this.size=0,this.__data__={hash:new Qe,map:new(Xe||Ge),string:new Qe}},rt=function(e){var t=Ye(this,e).delete(e);return this.size-=t?1:0,t},it=function(e){return Je(this,e).get(e)},ot=function(e){return et(this,e).has(e)},at=function(e,t){var n=tt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function st(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}st.prototype.clear=nt,st.prototype.delete=rt,st.prototype.get=it,st.prototype.has=ot,st.prototype.set=at;var lt=st,ct=N,ut=je,dt=lt;var ht=N,pt=V,ft=R,gt=L,mt=W,yt=function(e,t){var n=this.__data__;if(n instanceof ct){var r=n.__data__;if(!ut||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new dt(r)}return n.set(e,t),this.size=n.size,this};function bt(e){var t=this.__data__=new ht(e);this.size=t.size}bt.prototype.clear=pt,bt.prototype.delete=ft,bt.prototype.get=gt,bt.prototype.has=mt,bt.prototype.set=yt;var vt=bt;var wt=lt,_t=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},St=function(e){return this.__data__.has(e)};function $t(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new wt;++t<n;)this.add(e[t])}$t.prototype.add=$t.prototype.push=_t,$t.prototype.has=St;var xt=$t,Ft=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},kt=function(e,t){return e.has(t)};var Bt=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new xt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Ft(t,(function(e,t){if(!kt(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Ot=G.Uint8Array,At=F,jt=Bt,Et=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Dt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Ct=X?X.prototype:void 0,Pt=Ct?Ct.valueOf:void 0;var It=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Ot(e),new Ot(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return At(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Et;case"[object Set]":var l=1&r;if(s||(s=Dt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=jt(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Pt)return Pt.call(e)==Pt.call(t)}return!1};var zt=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Tt=Array.isArray,Ht=zt,Nt=Tt;var Mt=function(e,t,n){var r=t(e);return Nt(e)?r:Ht(r,n(e))};var Vt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Rt=function(){return[]},Lt=Object.prototype.propertyIsEnumerable,Wt=Object.getOwnPropertySymbols,qt=Wt?function(e){return null==e?[]:(e=Object(e),Vt(Wt(e),(function(t){return Lt.call(e,t)})))}:Rt;var Ut=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Qt=function(e){return null!=e&&"object"==typeof e},Gt=ae,Xt=Qt;var Zt=function(e){return Xt(e)&&"[object Arguments]"==Gt(e)},Kt=Qt,Yt=Object.prototype,Jt=Yt.hasOwnProperty,en=Yt.propertyIsEnumerable,tn=Zt(function(){return arguments}())?Zt:function(e){return Kt(e)&&Jt.call(e,"callee")&&!en.call(e,"callee")},nn={exports:{}};var rn=function(){return!1};!function(e,t){var n=G,r=rn,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(nn,nn.exports);var on=/^(?:0|[1-9]\d*)$/;var an=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&on.test(e))&&e>-1&&e%1==0&&e<t};var sn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ln=ae,cn=sn,un=Qt,dn={};dn["[object Float32Array]"]=dn["[object Float64Array]"]=dn["[object Int8Array]"]=dn["[object Int16Array]"]=dn["[object Int32Array]"]=dn["[object Uint8Array]"]=dn["[object Uint8ClampedArray]"]=dn["[object Uint16Array]"]=dn["[object Uint32Array]"]=!0,dn["[object Arguments]"]=dn["[object Array]"]=dn["[object ArrayBuffer]"]=dn["[object Boolean]"]=dn["[object DataView]"]=dn["[object Date]"]=dn["[object Error]"]=dn["[object Function]"]=dn["[object Map]"]=dn["[object Number]"]=dn["[object Object]"]=dn["[object RegExp]"]=dn["[object Set]"]=dn["[object String]"]=dn["[object WeakMap]"]=!1;var hn=function(e){return un(e)&&cn(e.length)&&!!dn[ln(e)]};var pn=function(e){return function(t){return e(t)}},fn={exports:{}};!function(e,t){var n=q,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(fn,fn.exports);var gn=hn,mn=pn,yn=fn.exports,bn=yn&&yn.isTypedArray,vn=bn?mn(bn):gn,wn=Ut,_n=tn,Sn=Tt,$n=nn.exports,xn=an,Fn=vn,kn=Object.prototype.hasOwnProperty;var Bn=function(e,t){var n=Sn(e),r=!n&&_n(e),i=!n&&!r&&$n(e),o=!n&&!r&&!i&&Fn(e),a=n||r||i||o,s=a?wn(e.length,String):[],l=s.length;for(var c in e)!t&&!kn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||xn(c,l))||s.push(c);return s},On=Object.prototype;var An=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||On)};var jn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),En=An,Dn=jn,Cn=Object.prototype.hasOwnProperty;var Pn=de,In=sn;var zn=function(e){return null!=e&&In(e.length)&&!Pn(e)},Tn=Bn,Hn=function(e){if(!En(e))return Dn(e);var t=[];for(var n in Object(e))Cn.call(e,n)&&"constructor"!=n&&t.push(n);return t},Nn=zn;var Mn=function(e){return Nn(e)?Tn(e):Hn(e)},Vn=Mt,Rn=qt,Ln=Mn;var Wn=function(e){return Vn(e,Ln,Rn)},qn=Object.prototype.hasOwnProperty;var Un=function(e,t,n,r,i,o){var a=1&n,s=Wn(e),l=s.length;if(l!=Wn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:qn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Qn=Ae(G,"DataView"),Gn=je,Xn=Ae(G,"Promise"),Zn=Ae(G,"Set"),Kn=Ae(G,"WeakMap"),Yn=ae,Jn=me,er="[object Map]",tr="[object Promise]",nr="[object Set]",rr="[object WeakMap]",ir="[object DataView]",or=Jn(Qn),ar=Jn(Gn),sr=Jn(Xn),lr=Jn(Zn),cr=Jn(Kn),ur=Yn;(Qn&&ur(new Qn(new ArrayBuffer(1)))!=ir||Gn&&ur(new Gn)!=er||Xn&&ur(Xn.resolve())!=tr||Zn&&ur(new Zn)!=nr||Kn&&ur(new Kn)!=rr)&&(ur=function(e){var t=Yn(e),n="[object Object]"==t?e.constructor:void 0,r=n?Jn(n):"";if(r)switch(r){case or:return ir;case ar:return er;case sr:return tr;case lr:return nr;case cr:return rr}return t});var dr=vt,hr=Bt,pr=It,fr=Un,gr=ur,mr=Tt,yr=nn.exports,br=vn,vr="[object Arguments]",wr="[object Array]",_r="[object Object]",Sr=Object.prototype.hasOwnProperty;var $r=function(e,t,n,r,i,o){var a=mr(e),s=mr(t),l=a?wr:gr(e),c=s?wr:gr(t),u=(l=l==vr?_r:l)==_r,d=(c=c==vr?_r:c)==_r,h=l==c;if(h&&yr(e)){if(!yr(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new dr),a||br(e)?hr(e,t,n,r,i,o):pr(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&Sr.call(e,"__wrapped__"),f=d&&Sr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new dr),i(g,m,n,r,o)}}return!!h&&(o||(o=new dr),fr(e,t,n,r,i,o))},xr=Qt;var Fr=function e(t,n,r,i,o){return t===n||(null==t||null==n||!xr(t)&&!xr(n)?t!=t&&n!=n:$r(t,n,r,i,e,o))},kr=vt,Br=Fr;var Or=se;var Ar=function(e){return e==e&&!Or(e)},jr=Ar,Er=Mn;var Dr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Cr=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new kr;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Br(u,c,3,r,d):h))return!1}}return!0},Pr=function(e){for(var t=Er(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,jr(i)]}return t},Ir=Dr;var zr=function(e){var t=Pr(e);return 1==t.length&&t[0][2]?Ir(t[0][0],t[0][1]):function(n){return n===e||Cr(n,e,t)}},Tr=ae,Hr=Qt;var Nr=function(e){return"symbol"==typeof e||Hr(e)&&"[object Symbol]"==Tr(e)},Mr=Tt,Vr=Nr,Rr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Lr=/^\w*$/;var Wr=function(e,t){if(Mr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Vr(e))||(Lr.test(e)||!Rr.test(e)||null!=t&&e in Object(t))},qr=lt;function Ur(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ur.Cache||qr),n}Ur.Cache=qr;var Qr=Ur;var Gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xr=/\\(\\)?/g,Zr=function(e){var t=Qr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Gr,(function(e,n,r,i){t.push(r?i.replace(Xr,"$1"):n||e)})),t}));var Kr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Yr=Tt,Jr=Nr,ei=X?X.prototype:void 0,ti=ei?ei.toString:void 0;var ni=function e(t){if("string"==typeof t)return t;if(Yr(t))return Kr(t,e)+"";if(Jr(t))return ti?ti.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ri=ni;var ii=Tt,oi=Wr,ai=Zr,si=function(e){return null==e?"":ri(e)};var li=function(e,t){return ii(e)?e:oi(e,t)?[e]:ai(si(e))},ci=Nr;var ui=function(e){if("string"==typeof e||ci(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},di=li,hi=ui;var pi=function(e,t){for(var n=0,r=(t=di(t,e)).length;null!=e&&n<r;)e=e[hi(t[n++])];return n&&n==r?e:void 0},fi=pi;var gi=function(e,t,n){var r=null==e?void 0:fi(e,t);return void 0===r?n:r};var mi=li,yi=tn,bi=Tt,vi=an,wi=sn,_i=ui;var Si=function(e,t){return null!=e&&t in Object(e)},$i=function(e,t,n){for(var r=-1,i=(t=mi(t,e)).length,o=!1;++r<i;){var a=_i(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&wi(i)&&vi(a,i)&&(bi(e)||yi(e))};var xi=Fr,Fi=gi,ki=function(e,t){return null!=e&&$i(e,t,Si)},Bi=Wr,Oi=Ar,Ai=Dr,ji=ui;var Ei=pi;var Di=function(e){return function(t){return null==t?void 0:t[e]}},Ci=function(e){return function(t){return Ei(t,e)}},Pi=Wr,Ii=ui;var zi=zr,Ti=function(e,t){return Bi(e)&&Oi(t)?Ai(ji(e),t):function(n){var r=Fi(n,e);return void 0===r&&r===t?ki(n,e):xi(t,r,3)}},Hi=function(e){return e},Ni=Tt,Mi=function(e){return Pi(e)?Di(Ii(e)):Ci(e)};var Vi=function(e){return"function"==typeof e?e:null==e?Hi:"object"==typeof e?Ni(e)?Ti(e[0],e[1]):zi(e):Mi(e)},Ri=Vi,Li=zn,Wi=Mn;var qi=function(e){return function(t,n,r){var i=Object(t);if(!Li(t)){var o=Ri(n);t=Wi(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var Ui=/\s/;var Qi=function(e){for(var t=e.length;t--&&Ui.test(e.charAt(t)););return t},Gi=/^\s+/;var Xi=function(e){return e?e.slice(0,Qi(e)+1).replace(Gi,""):e},Zi=se,Ki=Nr,Yi=/^[-+]0x[0-9a-f]+$/i,Ji=/^0b[01]+$/i,eo=/^0o[0-7]+$/i,to=parseInt;var no=function(e){if("number"==typeof e)return e;if(Ki(e))return NaN;if(Zi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Zi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xi(e);var n=Ji.test(e);return n||eo.test(e)?to(e.slice(2),n?2:8):Yi.test(e)?NaN:+e},ro=1/0;var io=function(e){return e?(e=no(e))===ro||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var oo=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},ao=Vi,so=function(e){var t=io(e),n=t%1;return t==t?n?t-n:t:0},lo=Math.max;var co=qi((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:so(n);return i<0&&(i=lo(r+i,0)),oo(e,ao(t),i)})),uo=Fr;var ho=function(e,t){return uo(e,t)};let po=Ao();const fo=e=>Fo(e,po);let go=Ao();fo.write=e=>Fo(e,go);let mo=Ao();fo.onStart=e=>Fo(e,mo);let yo=Ao();fo.onFrame=e=>Fo(e,yo);let bo=Ao();fo.onFinish=e=>Fo(e,bo);let vo=[];fo.setTimeout=(e,t)=>{let n=fo.now()+t,r=()=>{let e=vo.findIndex((e=>e.cancel==r));~e&&vo.splice(e,1),$o-=~e?1:0},i={time:n,handler:e,cancel:r};return vo.splice(wo(n),0,i),$o+=1,ko(),i};let wo=e=>~(~vo.findIndex((t=>t.time>e))||~vo.length);fo.cancel=e=>{mo.delete(e),yo.delete(e),bo.delete(e),po.delete(e),go.delete(e)},fo.sync=e=>{xo=!0,fo.batchedUpdates(e),xo=!1},fo.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,fo.onStart(n)}return r.handler=e,r.cancel=()=>{mo.delete(n),t=null},r};let _o="undefined"!=typeof window?window.requestAnimationFrame:()=>{};fo.use=e=>_o=e,fo.now="undefined"!=typeof performance?()=>performance.now():Date.now,fo.batchedUpdates=e=>e(),fo.catch=console.error,fo.frameLoop="always",fo.advance=()=>{"demand"!==fo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Oo()};let So=-1,$o=0,xo=!1;function Fo(e,t){xo?(t.delete(e),e(0)):(t.add(e),ko())}function ko(){So<0&&(So=0,"demand"!==fo.frameLoop&&_o(Bo))}function Bo(){~So&&(_o(Bo),fo.batchedUpdates(Oo))}function Oo(){let e=So;So=fo.now();let t=wo(So);t&&(jo(vo.splice(0,t),(e=>e.handler())),$o-=t),$o?(mo.flush(),po.flush(e?Math.min(64,So-e):16.667),yo.flush(),go.flush(),bo.flush()):So=-1}function Ao(){let e=new Set,t=e;return{add(n){$o+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>($o-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,$o-=t.size,jo(t,(t=>t(n)&&e.add(t))),$o+=e.size,t=e)}}}function jo(e,t){e.forEach((e=>{try{t(e)}catch(e){fo.catch(e)}}))}function Eo(){}const Do={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Co(e,t){if(Do.arr(e)){if(!Do.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Po=(e,t)=>e.forEach(t);function Io(e,t,n){if(Do.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const zo=e=>Do.und(e)?[]:Do.arr(e)?e:[e];function To(e,t){if(e.size){const n=Array.from(e);e.clear(),Po(n,t)}}const Ho=(e,...t)=>To(e,(e=>e(...t))),No=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Mo,Vo,Ro=null,Lo=!1,Wo=Eo;var qo=Object.freeze({__proto__:null,get createStringInterpolator(){return Mo},get to(){return Vo},get colors(){return Ro},get skipAnimation(){return Lo},get willAdvance(){return Wo},assign:e=>{e.to&&(Vo=e.to),e.now&&(fo.now=e.now),void 0!==e.colors&&(Ro=e.colors),null!=e.skipAnimation&&(Lo=e.skipAnimation),e.createStringInterpolator&&(Mo=e.createStringInterpolator),e.requestAnimationFrame&&fo.use(e.requestAnimationFrame),e.batchedUpdates&&(fo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Wo=e.willAdvance),e.frameLoop&&(fo.frameLoop=e.frameLoop)}});const Uo=new Set;let Qo=[],Go=[],Xo=0;const Zo={get idle(){return!Uo.size&&!Qo.length},start(e){Xo>e.priority?(Uo.add(e),fo.onStart(Ko)):(Yo(e),fo(ea))},advance:ea,sort(e){if(Xo)fo.onFrame((()=>Zo.sort(e)));else{const t=Qo.indexOf(e);~t&&(Qo.splice(t,1),Jo(e))}},clear(){Qo=[],Uo.clear()}};function Ko(){Uo.forEach(Yo),Uo.clear(),fo(ea)}function Yo(e){Qo.includes(e)||Jo(e)}function Jo(e){Qo.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Qo,(t=>t.priority>e.priority)),0,e)}function ea(e){const t=Go;for(let n=0;n<Qo.length;n++){const r=Qo[n];Xo=r.priority,r.idle||(Wo(r),r.advance(e),r.idle||t.push(r))}return Xo=0,Go=Qo,Go.length=0,Qo=t,Qo.length>0}const ta="[-+]?\\d*\\.?\\d+",na=ta+"%";function ra(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ia=new RegExp("rgb"+ra(ta,ta,ta)),oa=new RegExp("rgba"+ra(ta,ta,ta,ta)),aa=new RegExp("hsl"+ra(ta,na,na)),sa=new RegExp("hsla"+ra(ta,na,na,ta)),la=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ca=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ua=/^#([0-9a-fA-F]{6})$/,da=/^#([0-9a-fA-F]{8})$/;function ha(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function pa(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=ha(i,r,e+1/3),a=ha(i,r,e),s=ha(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function fa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ga(e){return(parseFloat(e)%360+360)%360/360}function ma(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ya(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ba(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ua.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ro&&void 0!==Ro[e]?Ro[e]:(t=ia.exec(e))?(fa(t[1])<<24|fa(t[2])<<16|fa(t[3])<<8|255)>>>0:(t=oa.exec(e))?(fa(t[1])<<24|fa(t[2])<<16|fa(t[3])<<8|ma(t[4]))>>>0:(t=la.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=da.exec(e))?parseInt(t[1],16)>>>0:(t=ca.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=aa.exec(e))?(255|pa(ga(t[1]),ya(t[2]),ya(t[3])))>>>0:(t=sa.exec(e))?(pa(ga(t[1]),ya(t[2]),ya(t[3]))|ma(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const va=(e,t,n)=>{if(Do.fun(e))return e;if(Do.arr(e))return va({range:e,output:t,extrapolate:n});if(Do.str(e.output[0]))return Mo(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const wa=1.70158,_a=1.525*wa,Sa=wa+1,$a=2*Math.PI/3,xa=2*Math.PI/4.5,Fa=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},ka={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Sa*e*e*e-wa*e*e,easeOutBack:e=>1+Sa*Math.pow(e-1,3)+wa*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-_a)/2:(Math.pow(2*e-2,2)*((_a+1)*(2*e-2)+_a)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*$a),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*$a)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*xa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*xa)/2+1,easeInBounce:e=>1-Fa(1-e),easeOutBounce:Fa,easeInOutBounce:e=>e<.5?(1-Fa(1-2*e))/2:(1+Fa(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ba(){return Ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ba.apply(this,arguments)}const Oa=Symbol.for("FluidValue.get"),Aa=Symbol.for("FluidValue.observers"),ja=e=>Boolean(e&&e[Oa]),Ea=e=>e&&e[Oa]?e[Oa]():e,Da=e=>e[Aa]||null;function Ca(e,t){let n=e[Aa];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Pa{constructor(e){if(this[Oa]=void 0,this[Aa]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ia(this,e)}}const Ia=(e,t)=>Ha(e,Oa,t);function za(e,t){if(e[Oa]){let n=e[Aa];n||Ha(e,Aa,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ta(e,t){let n=e[Aa];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Aa]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Ha=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Na=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ma=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Va=new RegExp(`(${Na.source})(%|[a-z]+)`,"i"),Ra=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,La=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Wa=e=>{const[t,n]=qa(e);if(!t||No())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&La.test(n)?Wa(n):n||e},qa=e=>{const t=La.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ua;const Qa=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Ga=e=>{Ua||(Ua=Ro?new RegExp(`(${Object.keys(Ro).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ea(e).replace(La,Wa).replace(Ma,ba).replace(Ua,ba))),n=t.map((e=>e.match(Na).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>va(Ba({},e,{output:t}))));return e=>{var n;const i=!Va.test(t[0])&&(null==(n=t.find((e=>Va.test(e))))?void 0:n.replace(Na,""));let o=0;return t[0].replace(Na,(()=>`${r[o++](e)}${i||""}`)).replace(Ra,Qa)}},Xa="react-spring: ",Za=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Xa}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ka=Za(console.warn);const Ya=Za(console.warn);function Ja(e){return Do.str(e)&&("#"==e[0]||/\d/.test(e)||!No()&&La.test(e)||e in(Ro||{}))}const es=No()?o:a,ts=()=>{const e=l(!1);return es((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ns(){const e=s()[1],t=ts();return()=>{t.current&&e(Math.random())}}const rs=e=>o(e,is),is=[];function os(e){const t=l();return o((()=>{t.current=e})),t.current}const as=Symbol.for("Animated:node"),ss=e=>e&&e[as],ls=(e,t)=>{return n=e,r=as,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},cs=e=>e&&e[as]&&e[as].getPayload();class us{constructor(){this.payload=void 0,ls(this,this)}getPayload(){return this.payload||[]}}class ds extends us{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Do.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ds(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Do.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Do.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class hs extends ds{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=va({output:[e,e]})}static create(e){return new hs(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Do.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=va({output:[this.getValue(),e]})),this._value=0,super.reset()}}const ps={dependencies:null};class fs extends us{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Io(this.source,((n,r)=>{var i;(i=n)&&i[as]===i?t[r]=n.getValue(e):ja(n)?t[r]=Ea(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Po(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Io(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ps.dependencies&&ja(e)&&ps.dependencies.add(e);const t=cs(e);t&&Po(t,(e=>this.add(e)))}}class gs extends fs{constructor(e){super(e)}static create(e){return new gs(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(ms)),!0)}}function ms(e){return(Ja(e)?hs:ds).create(e)}function ys(e){const t=ss(e);return t?t.constructor:Do.arr(e)?gs:Ja(e)?hs:ds}function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bs.apply(this,arguments)}const vs=(e,t)=>{const n=!Do.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=n&&u((e=>{s.current=function(e,t){e&&(Do.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;ps.dependencies=n,e.style&&(e=bs({},e,{style:t.createAnimatedStyle(e.style)}));return e=new fs(e),ps.dependencies=null,[e,n]}(i,t),p=ns(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new ws(f,h),m=l();es((()=>(m.current=g,Po(h,(e=>za(e,g))),()=>{m.current&&(Po(m.current.deps,(e=>Ta(e,m.current))),fo.cancel(m.current.update))}))),o(f,[]),rs((()=>()=>{const e=m.current;Po(e.deps,(t=>Ta(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,bs({},y,{ref:c}))}))};class ws{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&fo.write(this.update)}}const _s=Symbol.for("AnimatedComponent"),Ss=e=>Do.str(e)?e:e&&Do.str(e.displayName)?e.displayName:Do.fun(e)&&e.name||null;function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(this,arguments)}function xs(e,...t){return Do.fun(e)?e(...t):e}const Fs=(e,t)=>!0===e||!!(t&&e&&(Do.fun(e)?e(t):zo(e).includes(t))),ks=(e,t)=>Do.obj(e)?t&&e[t]:e,Bs=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Os=e=>e,As=(e,t=Os)=>{let n=js;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Do.und(n)||(r[i]=n)}return r},js=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Es={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ds(e){const t=function(e){const t={};let n=0;if(Io(e,((e,r)=>{Es[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Io(e,((e,r)=>r in t||(n[r]=e))),n}return $s({},e)}function Cs(e){return e=Ea(e),Do.arr(e)?e.map(Cs):Ja(e)?qo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ps(e){return Do.fun(e)||Do.arr(e)&&Do.obj(e[0])}const Is=$s({},{tension:170,friction:26},{mass:1,damping:1,easing:ka.linear,clamp:!1});class zs{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Is)}}function Ts(e,t){if(Do.und(t.decay)){const n=!Do.und(t.tension)||!Do.und(t.friction);!n&&Do.und(t.frequency)&&Do.und(t.damping)&&Do.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Hs=[];class Ns{constructor(){this.changed=!1,this.values=Hs,this.toValues=null,this.fromValues=Hs,this.to=void 0,this.from=void 0,this.config=new zs,this.immediate=!1}}function Ms(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=Fs(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{Do.und(n.pause)||(i.paused=Fs(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Fs(e,t)),c=xs(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-fo.now()}function p(){c>0&&!qo.skipAnimation?(i.delayed=!0,u=fo.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start($s({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Vs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ws(e.get()):t.every((e=>e.noop))?Rs(e.get()):Ls(e.get(),t.every((e=>e.finished))),Rs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ls=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Ws=e=>({value:e,cancelled:!0,finished:!1});function qs(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=As(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Ws(r)||i!==n.asyncId&&Ls(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Qs,a=new Gs;return(async()=>{if(qo.skipAnimation)throw Us(n),a.result=Ls(r,!1),d(a),a;p(o);const s=Do.obj(e)?$s({},e):$s({},t,{to:e});s.parentId=i,Io(c,((e,t)=>{Do.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(qo.skipAnimation)return Us(n),Ls(r,!1);try{let t;t=Do.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Ls(r.get(),!0,!1)}catch(e){if(e instanceof Qs)g=e.result;else{if(!(e instanceof Gs))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Do.fun(a)&&fo.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Us(e,t){To(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Qs extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Gs extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Xs=e=>e instanceof Ks;let Zs=1;class Ks extends Pa{constructor(...e){super(...e),this.id=Zs++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ss(this);return e&&e.getValue()}to(...e){return qo.to(this,e)}interpolate(...e){return Ka(`${Xa}The "interpolate" function is deprecated in v9 (use "to" instead)`),qo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ca(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Zo.sort(this),Ca(this,{type:"priority",parent:this,priority:e})}}const Ys=Symbol.for("SpringPhase"),Js=e=>(1&e[Ys])>0,el=e=>(2&e[Ys])>0,tl=e=>(4&e[Ys])>0,nl=(e,t)=>t?e[Ys]|=3:e[Ys]&=-3,rl=(e,t)=>t?e[Ys]|=4:e[Ys]&=-5;class il extends Ks{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ns,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Do.und(e)||!Do.und(t)){const n=Do.obj(e)?$s({},e):$s({},t,{from:e});Do.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(el(this)||this._state.asyncTo)||tl(this)}get goal(){return Ea(this.animation.to)}get velocity(){const e=ss(this);return e instanceof ds?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Js(this)}get isAnimating(){return el(this)}get isPaused(){return tl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=cs(r.to);!a&&ja(r.to)&&(o=zo(Ea(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==hs?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Do.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Do.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Do.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=ss(this),l=s.getValue();if(t){const e=Ea(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return fo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(el(this)){const{to:e,config:t}=this.animation;fo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Do.und(e)?(n=this.queue||[],this.queue=[]):n=[Do.obj(e)?e:$s({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Vs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Us(this._state,e&&this._lastCallId),fo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Do.obj(n)?n[t]:n,(null==n||Ps(n))&&(n=void 0),r=Do.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Js(this)||(e.reverse&&([n,r]=[r,n]),r=Ea(r),Do.und(r)?ss(this)||this._set(n):this._set(r)),i}_update(e,t){let n=$s({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,As(n,((e,t)=>/^on/.test(t)?ks(e,r):e))),dl(this,n,"onProps"),hl(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ms(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{tl(this)||(rl(this,!0),Ho(a.pauseQueue),hl(this,"onPause",Ls(this,ol(this,this.animation.to)),this))},resume:()=>{tl(this)&&(rl(this,!1),el(this)&&this._resume(),Ho(a.resumeQueue),hl(this,"onResume",Ls(this,ol(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=al(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Ws(this));const r=!Do.und(e.to),i=!Do.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Ws(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Do.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Co(d,c);h&&(s.from=d),d=Ea(d);const p=!Co(u,l);p&&this._focus(u);const f=Ps(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Ts(n=$s({},n),t),t=$s({},n,t)),Ts(e,t),Object.assign(e,t);for(const t in Is)null==e[t]&&(e[t]=Is[t]);let{mass:r,frequency:i,damping:o}=e;Do.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,xs(t.config,o),t.config!==a.config?xs(a.config,o):void 0);let b=ss(this);if(!b||Do.und(u))return n(Ls(this,!0));const v=Do.und(t.reset)?i&&!t.default:!Do.und(d)&&Fs(t.reset,o),w=v?d:this.get(),_=Cs(u),S=Do.num(_)||Do.arr(_)||Ja(_),$=!f&&(!S||Fs(a.immediate||t.immediate,o));if(p){const e=ys(u);if(e!==b.constructor){if(!$)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(_)}}const x=b.constructor;let F=ja(u),k=!1;if(!F){const e=v||!Js(this)&&h;(p||e)&&(k=Co(Cs(w),_),F=!k),(Co(s.immediate,$)||$)&&Co(g.decay,m)&&Co(g.velocity,y)||(F=!0)}if(k&&el(this)&&(s.changed&&!v?F=!0:F||this._stop(l)),!f&&((F||ja(l))&&(s.values=b.getPayload(),s.toValues=ja(u)?null:x==hs?[1]:zo(_)),s.immediate!=$&&(s.immediate=$,$||v||this._set(l)),F)){const{onRest:e}=s;Po(ul,(e=>dl(this,t,e)));const r=Ls(this,ol(this,l));Ho(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&fo.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?xs(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),f?n(qs(t.to,t,this._state,this)):F?this._start():el(this)&&!p?this._pendingCalls.add(n):n(Rs(w))}_focus(e){const t=this.animation;e!==t.to&&(Da(this)&&this._detach(),t.to=e,Da(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ja(t)&&(za(t,this),Xs(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ja(e)&&Ta(e,this)}_set(e,t=!0){const n=Ea(e);if(!Do.und(n)){const e=ss(this);if(!e||!Co(n,e.getValue())){const r=ys(n);e&&e.constructor==r?e.setValue(n):ls(this,r.create(n)),e&&fo.batchedUpdates((()=>{this._onChange(n,t)}))}}return ss(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,hl(this,"onStart",Ls(this,ol(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),xs(this.animation.onChange,e,this)),xs(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ss(this).reset(Ea(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),el(this)||(nl(this,!0),tl(this)||this._resume())}_resume(){qo.skipAnimation?this.finish():Zo.start(this)}_stop(e,t){if(el(this)){nl(this,!1);const n=this.animation;Po(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ca(this,{type:"idle",parent:this});const r=t?Ws(this.get()):Ls(this.get(),ol(this,null!=e?e:n.to));Ho(this._pendingCalls,r),n.changed&&(n.changed=!1,hl(this,"onRest",r,this))}}}function ol(e,t){const n=Cs(t);return Co(Cs(e.get()),n)}function al(e,t=e.loop,n=e.to){let r=xs(t);if(r){const i=!0!==r&&Ds(r),o=(i||e).reverse,a=!i||i.reset;return sl($s({},e,{loop:t,default:!1,pause:void 0,to:!o||Ps(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function sl(e){const{to:t,from:n}=e=Ds(e),r=new Set;return Do.obj(t)&&cl(t,r),Do.obj(n)&&cl(n,r),e.keys=r.size?Array.from(r):null,e}function ll(e){const t=sl(e);return Do.und(t.default)&&(t.default=As(t)),t}function cl(e,t){Io(e,((e,n)=>null!=e&&t.add(n)))}const ul=["onStart","onRest","onChange","onPause","onResume"];function dl(e,t,n){e.animation[n]=t[n]!==Bs(t,n)?ks(t[n],e.key):void 0}function hl(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const pl=["onStart","onChange","onRest"];let fl=1;class gl{constructor(e,t){this.id=fl++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start($s({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Do.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(sl(e)),this}start(e){let{queue:t}=this;return e?t=zo(e).map(sl):this.queue=[],this._flush?this._flush(this,t):(Sl(this,t),ml(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Po(zo(t),(t=>n[t].stop(!!e)))}else Us(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Do.und(e))this.start({pause:!0});else{const t=this.springs;Po(zo(e),(e=>t[e].pause()))}return this}resume(e){if(Do.und(e))this.start({pause:!1});else{const t=this.springs;Po(zo(e),(e=>t[e].resume()))}return this}each(e){Io(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,To(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&To(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,To(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}fo.onFrame(this._onFrame)}}function ml(e,t){return Promise.all(t.map((t=>yl(e,t)))).then((t=>Vs(e,t)))}async function yl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Do.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Do.arr(i)||Do.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Po(pl,(n=>{const r=t[n];if(Do.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ho(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Bs(t,"cancel");(u||p&&d.asyncId)&&h.push(Ms(++e._lastAsyncId,{props:t,state:d,actions:{pause:Eo,resume:Eo,start(t,n){p?(Us(d,e._lastAsyncId),n(Ws(e))):(t.onRest=s,n(qs(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Vs(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=al(t,a,i);if(n)return Sl(e,[n]),yl(e,n,!0)}return l&&fo.batchedUpdates((()=>l(f,e,e.item))),f}function bl(e,t){const n=$s({},e.springs);return t&&Po(zo(t),(e=>{Do.und(e.keys)&&(e=sl(e)),Do.obj(e.to)||(e=$s({},e,{to:void 0})),_l(n,e,(e=>wl(e)))})),vl(e,n),n}function vl(e,t){Io(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,za(t,e))}))}function wl(e,t){const n=new il;return n.key=e,t&&za(n,t),n}function _l(e,t,n){t.keys&&Po(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Sl(e,t){Po(t,(t=>{_l(e.springs,t,(t=>wl(t,e)))}))}const $l=["children"],xl=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,$l);const i=d(Fl),a=n.pause||!!i.pause,c=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=l(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:c})),[a,c]);const{Provider:u}=Fl;return r.createElement(u,{value:n},t)},Fl=(kl=xl,Bl={},Object.assign(kl,r.createContext(Bl)),kl.Provider._context=kl,kl.Consumer._context=kl,kl);var kl,Bl;xl.Provider=Fl.Provider,xl.Consumer=Fl.Consumer;const Ol=()=>{const e=[],t=function(t){Ya(`${Xa}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Po(e,((e,i)=>{if(Do.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Po(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Po(e,(e=>e.resume(...arguments))),this},t.set=function(t){Po(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Po(e,((e,r)=>{if(Do.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Po(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Po(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Do.fun(e)?e(n,t):e};return t._getProps=n,t};function Al(e,t){const n=Do.fun(e),[[r],i]=function(e,t,n){const r=Do.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?Ol():void 0),[]),o=l(0),a=ns(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=bl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ml(e,t):new Promise((r=>{vl(e,n),s.queue.push((()=>{r(ml(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=os(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new gl(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=ll(n))}}h((()=>{Po(c.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>bl(e,u[t]))),m=d(xl),y=os(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);es((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],Po(e,(e=>e()))),Po(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),rs((()=>()=>{Po(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>$s({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let jl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(jl||(jl={}));class El extends Ks{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=va(...t);const n=this._get(),r=ys(n);ls(this,r.create(n))}advance(e){const t=this._get();Co(t,this.get())||(ss(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Cl(this._active)&&Pl(this)}_get(){const e=Do.arr(this.source)?this.source.map(Ea):zo(Ea(this.source));return this.calc(...e)}_start(){this.idle&&!Cl(this._active)&&(this.idle=!1,Po(cs(this),(e=>{e.done=!1})),qo.skipAnimation?(fo.batchedUpdates((()=>this.advance())),Pl(this)):Zo.start(this))}_attach(){let e=1;Po(zo(this.source),(t=>{ja(t)&&za(t,this),Xs(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Po(zo(this.source),(e=>{ja(e)&&Ta(e,this)})),this._active.clear(),Pl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=zo(this.source).reduce(((e,t)=>Math.max(e,(Xs(t)?t.priority:0)+1)),0))}}function Dl(e){return!1!==e.idle}function Cl(e){return!e.size||Array.from(e).every(Dl)}function Pl(e){e.idle||(e.idle=!0,Po(cs(e),(e=>{e.done=!0})),Ca(e,{type:"idle",parent:e}))}function Il(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}qo.assign({createStringInterpolator:Ga,to:(e,t)=>new El(e,t)});const zl=["style","children","scrollTop","scrollLeft","viewBox"],Tl=/^--/;function Hl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Tl.test(e)||Ml.hasOwnProperty(e)&&Ml[e]?(""+t).trim():t+"px"}const Nl={};let Ml={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Vl=["Webkit","Ms","Moz","O"];Ml=Object.keys(Ml).reduce(((e,t)=>(Vl.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ml);const Rl=["x","y","z"],Ll=/^(matrix|translate|scale|rotate|skew)/,Wl=/^(translate)/,ql=/^(rotate|skew)/,Ul=(e,t)=>Do.num(e)&&0!==e?e+t:e,Ql=(e,t)=>Do.arr(e)?e.every((e=>Ql(e,t))):Do.num(e)?e===t:parseFloat(e)===t;class Gl extends fs{constructor(e){let{x:t,y:n,z:r}=e,i=Il(e,Rl);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Ul(e,"px"))).join(",")})`,Ql(e,0)]))),Io(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Ll.test(t)){if(delete i[t],Do.und(e))return;const n=Wl.test(t)?"px":ql.test(t)?"deg":"";o.push(zo(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ul(i,n)})`,Ql(i,0)]:e=>[`${t}(${e.map((e=>Ul(e,n))).join(",")})`,Ql(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Xl(o,a)),super(i)}}class Xl extends Pa{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Po(this.inputs,((n,r)=>{const i=Ea(n[0]),[o,a]=this.transforms[r](Do.arr(i)?i:n.map(Ea));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Po(this.inputs,(e=>Po(e,(e=>ja(e)&&za(e,this)))))}observerRemoved(e){0==e&&Po(this.inputs,(e=>Po(e,(e=>ja(e)&&Ta(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ca(this,e)}}const Zl=["scrollTop","scrollLeft"];qo.assign({batchedUpdates:p,createStringInterpolator:Ga,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Kl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new fs(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Ss(e)||"Anonymous";return(e=Do.str(e)?o[e]||(o[e]=vs(e,i)):e[_s]||(e[_s]=vs(e,i))).displayName=`Animated(${t})`,e};return Io(e,((t,n)=>{Do.arr(e)&&(n=Ss(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Il(r,zl),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Nl[t]||(Nl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Hl(t,i[t]);Tl.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Gl(e),getComponentProps:e=>Il(e,Zl)}),Yl=Kl.animated,Jl=(e,t,n)=>t?gi(n,t)||gi(e,t):n||e,ec=(e,t)=>{const n=t||e.defaultValue;return gi(e.collections,n)};var tc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(tc||(tc={}));const nc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},rc=e=>t=>{const n=t.theme,r=ec(nc,n[tc.colorScheme]);return n.options&&n.options.color?Jl(r,e,n.options.color):Jl(r,e)},ic={Brand:{1:rc("Brand.1"),2:rc("Brand.2"),3:rc("Brand.3"),4:rc("Brand.4"),5:rc("Brand.5"),6:rc("Brand.6")},Primary:rc("Primary"),PrimaryDark:rc("PrimaryDark"),Secondary:rc("Secondary"),Accent:{Light:{1:rc("Accent.Light.1"),2:rc("Accent.Light.2"),3:rc("Accent.Light.3"),4:rc("Accent.Light.4"),5:rc("Accent.Light.5"),6:rc("Accent.Light.6")},Dark:{1:rc("Accent.Dark.1"),2:rc("Accent.Dark.2"),3:rc("Accent.Dark.3")}},Neutral:{1:rc("Neutral.1"),2:rc("Neutral.2"),3:rc("Neutral.3"),4:rc("Neutral.4"),5:rc("Neutral.5"),6:rc("Neutral.6"),7:rc("Neutral.7"),8:rc("Neutral.8")},Validation:{Green:{Text:rc("Validation.Green.Text"),Icon:rc("Validation.Green.Icon"),Border:rc("Validation.Green.Border"),Background:rc("Validation.Green.Background")},Orange:{Text:rc("Validation.Orange.Text"),Icon:rc("Validation.Orange.Icon"),Border:rc("Validation.Orange.Border"),Background:rc("Validation.Orange.Background"),Badge:rc("Validation.Orange.Badge")},Red:{Text:rc("Validation.Red.Text"),Icon:rc("Validation.Red.Icon"),Border:rc("Validation.Red.Border"),Background:rc("Validation.Red.Background")},Blue:{Text:rc("Validation.Blue.Text"),Icon:rc("Validation.Blue.Icon"),Border:rc("Validation.Blue.Border"),Background:rc("Validation.Blue.Background")}},Shadow:{Accent:rc("Shadow.Accent"),Red:rc("Shadow.Red"),Elevation:rc("Shadow.Elevation")}},oc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ac=e=>Object.keys(oc).reduce(((t,n)=>{const r=oc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),sc=ac("max-width"),lc=(ac("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),cc=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,uc=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||ic.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${cc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,dc=f(uc)`
    animation-delay: -0.45s;
`,hc=f(uc)`
    animation-delay: -0.3s;
`,pc=f(uc)`
    animation-delay: -0.15s;
`,fc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},gc={collections:{base:{D1:{fontFamily:fc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:fc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:fc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:fc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:fc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:fc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:fc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:fc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:fc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:fc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:fc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:fc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:fc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:fc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},mc=e=>t=>{const n=t.theme,r=ec(gc,n[tc.textStyleScheme]);return n.options&&n.options.textStyle?Jl(r,e,n.options.textStyle):Jl(r,e)},yc={D1:{fontFamily:mc("D1.fontFamily"),fontSize:mc("D1.fontSize"),fontWeight:mc("D1.fontWeight"),lineHeight:mc("D1.lineHeight"),letterSpacing:mc("D1.letterSpacing")},D2:{fontFamily:mc("D2.fontFamily"),fontSize:mc("D2.fontSize"),fontWeight:mc("D2.fontWeight"),lineHeight:mc("D2.lineHeight"),letterSpacing:mc("D2.letterSpacing")},D3:{fontFamily:mc("D3.fontFamily"),fontSize:mc("D3.fontSize"),fontWeight:mc("D3.fontWeight"),lineHeight:mc("D3.lineHeight"),letterSpacing:mc("D3.letterSpacing")},D4:{fontFamily:mc("D4.fontFamily"),fontSize:mc("D4.fontSize"),fontWeight:mc("D4.fontWeight"),lineHeight:mc("D4.lineHeight"),letterSpacing:mc("D4.letterSpacing")},DBody:{fontFamily:mc("DBody.fontFamily"),fontSize:mc("DBody.fontSize"),fontWeight:mc("DBody.fontWeight"),lineHeight:mc("DBody.lineHeight"),letterSpacing:mc("DBody.letterSpacing")},H1:{fontFamily:mc("H1.fontFamily"),fontSize:mc("H1.fontSize"),fontWeight:mc("H1.fontWeight"),lineHeight:mc("H1.lineHeight"),letterSpacing:mc("H1.letterSpacing")},H2:{fontFamily:mc("H2.fontFamily"),fontSize:mc("H2.fontSize"),fontWeight:mc("H2.fontWeight"),lineHeight:mc("H2.lineHeight"),letterSpacing:mc("H2.letterSpacing")},H3:{fontFamily:mc("H3.fontFamily"),fontSize:mc("H3.fontSize"),fontWeight:mc("H3.fontWeight"),lineHeight:mc("H3.lineHeight"),letterSpacing:mc("H3.letterSpacing")},H4:{fontFamily:mc("H4.fontFamily"),fontSize:mc("H4.fontSize"),fontWeight:mc("H4.fontWeight"),lineHeight:mc("H4.lineHeight"),letterSpacing:mc("H4.letterSpacing")},H5:{fontFamily:mc("H5.fontFamily"),fontSize:mc("H5.fontSize"),fontWeight:mc("H5.fontWeight"),lineHeight:mc("H5.lineHeight"),letterSpacing:mc("H5.letterSpacing")},H6:{fontFamily:mc("H6.fontFamily"),fontSize:mc("H6.fontSize"),fontWeight:mc("H6.fontWeight"),lineHeight:mc("H6.lineHeight"),letterSpacing:mc("H6.letterSpacing")},Body:{fontFamily:mc("Body.fontFamily"),fontSize:mc("Body.fontSize"),fontWeight:mc("Body.fontWeight"),lineHeight:mc("Body.lineHeight"),letterSpacing:mc("Body.letterSpacing")},BodySmall:{fontFamily:mc("BodySmall.fontFamily"),fontSize:mc("BodySmall.fontSize"),fontWeight:mc("BodySmall.fontWeight"),lineHeight:mc("BodySmall.lineHeight"),letterSpacing:mc("BodySmall.letterSpacing")},XSmall:{fontFamily:mc("XSmall.fontFamily"),fontSize:mc("XSmall.fontSize"),fontWeight:mc("XSmall.fontWeight"),lineHeight:mc("XSmall.lineHeight"),letterSpacing:mc("XSmall.letterSpacing")}},bc=e=>{switch(e){case 700:case"bold":return fc.Bold;case 600:case"semibold":return fc.Semibold;case 300:case"light":return fc.Light;case 400:case"regular":return fc.Regular;default:return""}},vc=(e,t)=>n=>{const r=yc[e].fontFamily(n),i=yc[e].fontWeight(n);return Object.values(fc).includes(r)?m`
                font-family: ${bc(t)||bc(i)||r};
                font-weight: normal !important;
            `:m`
            font-family: ${r};
            font-weight: ${(wc(t)||i)??"normal"};
        `},wc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},_c=(e,t,n=!1)=>r=>{const i=yc[e],o=i.fontSize(r);return m`
            ${vc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Sc=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `;var $c;!function(e){e.D1=f.h1`
        ${e=>m`
                ${_c("D1",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${_c("D2",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${_c("D3",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${_c("D4",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${_c("DBody",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${_c("H1",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${_c("H2",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${_c("H3",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${_c("H4",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${_c("H5",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${_c("H6",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${_c("Body",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${_c("BodySmall",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${_c("XSmall",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>kc({...e,textStyle:"Body"}),Small:e=>kc({...e,textStyle:"BodySmall"})}}($c||($c={}));const xc=f.a`
    ${e=>m`
            ${_c(e.textStyle,e.weight)}
            color: ${ic.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ic.Secondary};

                svg {
                    color: ${ic.Secondary};
                }
            }
        `}
`,Fc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,kc=({external:n=!1,children:r,...i})=>e(xc,{...i,children:[r,n&&t(Fc,{})]});var Bc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Bc||(Bc={})),f.button`
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
                    background-color: ${ic.Neutral[8](e)};
                    border: 1px solid ${ic.Primary(e)};

                    span {
                        color: ${ic.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${ic.Neutral[8](e)};
                    border: 1px solid ${ic.Neutral[5](e)};

                    span {
                        color: ${ic.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${ic.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${ic.Neutral[3](e)};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ic.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${ic.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${ic.Primary(e)};
                    border: 1px solid transparent;

                    ${sc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${ic.Neutral[8](e)};
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

                    ${sc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${_c("H4","semibold")}
                    }

                    ${sc.mobileS} {
                        height: auto;
                    }
                `}
`;const Oc=f((({color:n,className:r,size:i=18})=>e(lc,{className:r,$size:i,$color:n,children:[t(uc,{id:"inner1",$size:i-2,$borderWidth:2}),t(dc,{id:"inner2",$size:i-2,$borderWidth:2}),t(hc,{id:"inner3",$size:i-2,$borderWidth:2}),t(pc,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=ic.Primary(e);break;case"disabled":t=ic.Neutral[3](e);break;default:t=ic.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Ac;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Ac||(Ac={}));const jc=f.div`
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
    border: 1px solid ${ic.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=ic.Primary(e),n=ic.Primary(e)),e.disabled&&(t=ic.Neutral[6](e),n=ic.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,Ec=f.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Dc=f(v)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return m`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?ic.Neutral[4]:ic.Neutral[8]};
`,Cc=f(Yl.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Pc=f.ul`
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
        background: ${ic.Neutral[4]};
        border-right: 5px solid ${ic.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${sc.mobileL} {
        max-height: 15rem;
    }
`,Ic=f.li`
    :hover,
    :focus,
    :active {
        background: ${ic.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${ic.Accent.Light[5]};
            `}}
`,zc=f.button`
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
        outline-color: ${ic.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Tc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Hc=f.div`
    ${_c("Body","regular")}
    color: ${ic.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tc}
`,Nc=f.div`
    color: ${ic.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Tc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${_c("BodySmall","semibold")}
                `:m`
                    ${_c("Body","regular")}
                `}
`,Mc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Hc} {
                        display: inline;
                    }

                    ${Nc} {
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
`,Rc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Lc=f((({className:n,checked:r,disabled:i,onChange:a,onKeyPress:l,displaySize:c="default",...u})=>{const[d,h]=s(r);o((()=>{h(r)}),[r]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;a&&a(e),l&&l(t)}};return e(jc,{selected:d,disabled:i,className:n,"data-testid":"checkbox",$displaySize:c,role:"checkbox","aria-checked":d,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,children:[t(Ec,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:i,checked:d,...u}),d&&t(Dc,{id:"checkmark","data-testid":"checkmark",disabled:i,$displaySize:c})]})}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Wc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,qc=f.button`
    ${_c("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ic.Primary(e)};\n\t\t`}
`,Uc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Qc=f($c.Body)``,Gc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${ic.Validation.Red.Icon};
`,Xc=f.button`
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
                background-color: ${ic.Neutral[7]};
            `}
    }
`,Zc=i.forwardRef((({children:e,focusHighlight:n=!0,focusOutline:r="none",type:i="button",...o},a)=>t(Xc,{ref:a,$outline:r,$highlight:n,type:i,...o,children:e}))),Kc={collections:{base:{InputBoxShadow:m`
        inset 0 0 6px 1px ${ic.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${ic.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ic.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:m`
        inset 0 0 6px 1px ${ic.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${ic.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ic.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Yc=e=>t=>{const n=t.theme,r=ec(Kc,n[tc.designTokenScheme]);return n.options?.designToken?Jl(r,e,n.options.designToken):Jl(r,e)},Jc=Yc("InputBoxShadow"),eu=Yc("InputErrorBoxShadow");Yc("ElevationBoxShadow"),Yc("Table.Header"),Yc("Table.Cell.Primary"),Yc("Table.Cell.Secondary"),Yc("Table.Cell.Selected"),Yc("Table.Cell.Hover");f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${ic.Neutral[5]};
    border-radius: 4px;
    background: ${ic.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${ic.Accent.Light[1]};
        box-shadow: ${Jc};
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
                background: ${ic.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${ic.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${ic.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${ic.Validation.Red.Border};
                    box-shadow: ${eu};
                }
            `:void 0}
`;const tu=f.input`
    ${_c("Body","regular")}
    color: ${ic.Neutral[1]};
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
        color: ${ic.Neutral[3]};
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
`,nu=f.li`
    background: ${ic.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,ru=f(tu)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,iu=f(_)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${ic.Neutral[3]};
`,ou=f(Zc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${ic.Neutral[3]};
    cursor: pointer;
`,au=f(w)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${ic.Neutral[3]};
`,su=c(((n,r)=>{const{onClear:i,...o}=n;return e(nu,{children:[t(iu,{}),t(ru,{ref:r,...o}),o.value&&t(ou,{"aria-label":"Clear search",focusOutline:"browser",onClick:i,children:t(au,{})})]},"search")})),lu=({listItems:r,listExtractor:i,valueExtractor:a,onSelectItem:c,listStyleWidth:u,visible:d,enableSearch:h,searchPlaceholder:p="Search",onSearch:f,searchFunction:g,onDismiss:m,disableItemFocus:y,multiSelect:b,selectedItems:v,onSelectAll:w,onRetry:_,itemsLoadState:S="success",itemTruncationType:$="end",itemMaxLines:x=2,labelDisplayType:F="inline",renderListItem:k,onBlur:B,hideNoResultsDisplay:O,renderCustomCallToAction:A,...j})=>{const[E,D]=s(0),[C,P]=s(""),[I,z]=s(r),[T,H]=s(0),N=Al({height:T}),M=l(),V=l(),R=l([]),L=l(),W=l(),q=l(E),U=l(I),Q=e=>{q.current=e,D(e)},G=e=>{U.current=e,z(e)};o((()=>(document.addEventListener("keydown",ee),()=>{document.removeEventListener("keydown",ee)})),[]),o((()=>{Y(C)}),[C]),o((()=>{if(P(""),d){if(setTimeout((()=>{H(J())})),y)return;L&&L.current?(L.current.focus(),Q(-1)):R.current[E]&&R.current[E].focus()}else H(0)}),[d]),o((()=>{if(d){const e=J();H(e)}}),[I,S]),o((()=>{G(r),P(""),Q(0)}),[r]);const X=e=>i?i(e):e.toString(),Z=e=>{if("inline"!==F)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Ac.getTextWidth(e,"1.125rem 'Open Sans'")>t*x},K=e=>!!co(v,(t=>ho(t,e))),Y=e=>{if(""===e)G(r);else if(g){const t=g(e);G(t)}else{const t=r.filter((t=>{const n=X(t),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase();return"object"==typeof n&&n.secondaryLabel?r.includes(e.trim().toLowerCase())||n.secondaryLabel.includes(e.trim().toLowerCase()):r.includes(e.trim().toLowerCase())}));G(t)}},J=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(W.current?W.current.getBoundingClientRect().height:0),ee=e=>{if(M&&M.current.contains(e.target))switch(e.code){case"ArrowDown":if(q.current<U.current.length-1){const e=q.current+1;R.current[e].focus(),Q(e)}break;case"ArrowUp":if(q.current>0){const e=q.current-1;R.current[e].focus(),Q(q.current-1)}break;case"Escape":m&&m(!0)}},te=(e,t)=>{e.preventDefault(),c&&c(t,(e=>a?a(e):e)(t))},ne=e=>{const t=e.target.value;P(t),f&&f()},re=()=>{P(""),L.current.focus(),f&&f()},ie=()=>{_&&_()},oe=()=>{B&&B()},ae=r=>e(n,{children:[t(Vc,{$maxLines:x,"aria-hidden":!0,children:r}),t(Rc,{$maxLines:x,"aria-hidden":!0,children:r})]}),se=n=>{const r=X(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Z(i),s=o&&Z(o);return e(Mc,{$labelDisplayType:a||s?"next-line":F,children:[t(Hc,{$truncateType:$,$maxLines:x,"aria-label":i,children:"middle"===$&&a?ae(i):i}),o&&t(Nc,{$truncateType:$,$maxLines:x,$labelDisplayType:F,"aria-label":o,children:"middle"===$&&s?ae(o):o})]})},le=()=>{if(!_||_&&"success"===S)return I.map(((n,r)=>t(Ic,{$checked:K(n)&&!b,children:e(zc,{$hasNextLineLabel:"next-line"===F&&I.length>0&&i&&"string"!=typeof i(I[0]),onClick:e=>{te(e,n)},ref:e=>R.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:d?0:-1,$multiSelect:b,onBlur:oe,children:[b&&t(Lc,{checked:K(n),displaySize:"small"}),k?k(n,{selected:K(n)}):se(n)]})},((e,t)=>`item_${t}__${a?a(e):e}`)(n,r))))},ce=()=>{if(b&&I.length>0&&!C&&"success"===S)return t(Wc,{children:t(qc,{onClick:w,type:"button",children:0===v.length?"Select all":"Unselect all"})},"selectAll")},ue=()=>{if(!O&&(C||!h)&&0===I.length&&"success"===S)return e(Uc,{"data-testid":"list-no-results",children:[t(Gc,{"data-testid":"no-result-icon"}),t(Qc,{children:"No results found."})]},"noResults")},de=()=>{if(_&&"loading"===S)return e(Uc,{"data-testid":"list-loading",children:[t(Oc,{$buttonStyle:"secondary",size:24}),t(Qc,{children:"Loading..."})]},"loading")},he=()=>{if(_&&"fail"===S)return e(Uc,{"data-testid":"list-fail",children:[t(Gc,{"data-testid":"load-error-icon"}),t(Qc,{children:"Failed to load."}),t(qc,{onClick:ie,type:"button",children:"Try again."})]},"noResults")};return t(n,{children:e(Cc,{style:N,"data-testid":d?"dropdown-container":"dropdown-container-hidden",ref:M,children:[(()=>{if(d)return e(Pc,{ref:V,"data-testid":"dropdown-list",width:u,role:"list",...j,children:[(h||g)&&"success"===S?t(su,{ref:L,onChange:ne,value:C,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:d?0:-1,onClear:re}):null,ce(),ue(),de(),he(),le()]})})(),(()=>{if(d&&A)return t("div",{ref:W,"data-testid":"custom-cta",children:A(m,I)})})()]})})},cu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",uu=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,du=m`
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
        outline: 2px solid ${ic.Accent.Light[3]};
    }
`,hu=f.button`
    ${du}
    cursor: pointer;
`;f.div`
    ${du}
`;const pu=g`
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
`,fu=f.div`
    position: relative;
    border: 1px solid ${ic.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ic.Neutral[8]};

    :focus-within {
        border: 1px solid ${ic.Accent.Light[1]};
        box-shadow: ${Jc};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${pu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${ic.Neutral[6](e)};

                ${hu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ic.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${hu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${ic.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ic.Validation.Red.Border(e)};
                    box-shadow: ${eu};
                }
            `:void 0}
`,gu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${cu};
    margin-left: 1rem;
`,mu=f(S)`
    color: ${ic.Neutral[3]};
    height: ${yc.Body.fontSize}rem;
    width: ${yc.Body.fontSize}rem;
`,yu=f.div`
    height: 1px;
    background: ${ic.Neutral[5]};
    margin: 0 0.5rem;
`,bu=f.div`
    display: flex;
    flex: 1;
`,vu=f($c.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,wu=f(vu)`
    color: ${ic.Neutral[3]};
`,_u=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:c})=>{const u=l();return((e,t,n="window",r)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),t(uu,{children:t(fu,{ref:u,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a,children:e})})},Su=({selectedOption:r,placeholder:i="Select",options:a,disabled:c,error:u,className:d,"data-testid":h,id:p,enableSearch:f=!1,searchFunction:g,searchPlaceholder:m,valueExtractor:y,valueToStringFunction:b,listExtractor:v,displayValueExtractor:w,onSelectOption:_,listStyleWidth:S,onShowOptions:$,onHideOptions:x,onRetry:F,optionsLoadState:k="success",optionTruncationType:B="end",renderCustomSelectedOption:O,renderListItem:A,hideNoResultsDisplay:j,renderCustomCallToAction:E,...D})=>{const[C,P]=s(r),[I,z]=s(!1),T=l(),H=l();o((()=>{P(r)}),[r]);const N=(e,t)=>{P(e),z(!1),R(!1),T&&T.current.focus(),_&&_(e,t)},M=e=>{I&&(z(!1),R(!1)),e&&T&&T.current.focus()},V=e=>{if("middle"===B){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),Ac.truncateOneLine((e=>"string"==typeof e?e:b(e)||e.toString())(e),t,120,8)}return e},R=e=>{!e&&x&&x(),e&&$&&$()};return e(_u,{className:d,show:I,error:u&&!I,disabled:c,readOnly:D.readOnly,testId:h,onBlur:()=>{z(!1),R(!1)},children:[t(hu,{ref:T,type:"button","data-testid":p||"selector",disabled:c,onClick:e=>{e.preventDefault(),c||D.readOnly||(z(!I),R(!I))},...D,children:e(n,{children:[t(bu,{ref:H,children:C?O?O(C):t(vu,{truncateType:B,children:V(w?w(C):y?y(C):C.toString())}):t(wu,{truncateType:B,children:i})}),!D.readOnly&&t(gu,{expanded:I,children:t(mu,{})})]})}),I&&t(yu,{}),a&&a.length>0?t(lu,{listItems:a,onSelectItem:N,onDismiss:M,valueExtractor:y,listExtractor:v,listStyleWidth:S,visible:I,enableSearch:f,searchPlaceholder:m,searchFunction:g,"data-testid":"dropdown-list",selectedItems:C?[C]:[],onRetry:F,itemsLoadState:k,itemTruncationType:B,renderListItem:A,hideNoResultsDisplay:j,renderCustomCallToAction:E}):null]})};export{Su as InputSelect};
//# sourceMappingURL=index.js.map
