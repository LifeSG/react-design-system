import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{TickIcon as v}from"@lifesg/react-icons/tick";import{CrossIcon as w}from"@lifesg/react-icons/cross";import{MagnifierIcon as S}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as $}from"@lifesg/react-icons/chevron-down";import{ArrowRightIcon as x}from"@lifesg/react-icons";function _(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var k=function(){this.__data__=[],this.size=0};var O=function(e,t){return e===t||e!=e&&t!=t},B=O;var j=function(e,t){for(var n=e.length;n--;)if(B(e[n][0],t))return n;return-1},A=j,E=Array.prototype.splice;var D=j;var C=j;var P=j;var I=k,z=function(e){var t=this.__data__,n=A(t,e);return!(n<0)&&(n==t.length-1?t.pop():E.call(t,n,1),--this.size,!0)},T=function(e){var t=this.__data__,n=D(t,e);return n<0?void 0:t[n][1]},H=function(e){return C(this.__data__,e)>-1},N=function(e,t){var n=this.__data__,r=P(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function M(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}M.prototype.clear=I,M.prototype.delete=z,M.prototype.get=T,M.prototype.has=H,M.prototype.set=N;var V=M,R=V;var L=function(){this.__data__=new R,this.size=0};var W=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var q=function(e){return this.__data__.get(e)};var U=function(e){return this.__data__.has(e)},Q="object"==typeof F&&F&&F.Object===Object&&F,G=Q,X="object"==typeof self&&self&&self.Object===Object&&self,Z=G||X||Function("return this")(),K=Z.Symbol,Y=K,J=Object.prototype,ee=J.hasOwnProperty,te=J.toString,ne=Y?Y.toStringTag:void 0;var re=function(e){var t=ee.call(e,ne),n=e[ne];try{e[ne]=void 0;var r=!0}catch(e){}var i=te.call(e);return r&&(t?e[ne]=n:delete e[ne]),i},ie=Object.prototype.toString;var oe=re,ae=function(e){return ie.call(e)},se=K?K.toStringTag:void 0;var le=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":se&&se in Object(e)?oe(e):ae(e)};var ce=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ue=le,de=ce;var he,pe=function(e){if(!de(e))return!1;var t=ue(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},fe=Z["__core-js_shared__"],ge=(he=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||""))?"Symbol(src)_1."+he:"";var me=function(e){return!!ge&&ge in e},ye=Function.prototype.toString;var be=function(e){if(null!=e){try{return ye.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ve=pe,we=me,Se=ce,$e=be,xe=/^\[object .+?Constructor\]$/,_e=Function.prototype,Fe=Object.prototype,ke=_e.toString,Oe=Fe.hasOwnProperty,Be=RegExp("^"+ke.call(Oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var je=function(e){return!(!Se(e)||we(e))&&(ve(e)?Be:xe).test($e(e))},Ae=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var n=Ae(e,t);return je(n)?n:void 0},De=Ee(Z,"Map"),Ce=Ee(Object,"create"),Pe=Ce;var Ie=function(){this.__data__=Pe?Pe(null):{},this.size=0};var ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Te=Ce,He=Object.prototype.hasOwnProperty;var Ne=function(e){var t=this.__data__;if(Te){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return He.call(t,e)?t[e]:void 0},Me=Ce,Ve=Object.prototype.hasOwnProperty;var Re=Ce;var Le=Ie,We=ze,qe=Ne,Ue=function(e){var t=this.__data__;return Me?void 0!==t[e]:Ve.call(t,e)},Qe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Re&&void 0===t?"__lodash_hash_undefined__":t,this};function Ge(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ge.prototype.clear=Le,Ge.prototype.delete=We,Ge.prototype.get=qe,Ge.prototype.has=Ue,Ge.prototype.set=Qe;var Xe=Ge,Ze=V,Ke=De;var Ye=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Je=function(e,t){var n=e.__data__;return Ye(t)?n["string"==typeof t?"string":"hash"]:n.map},et=Je;var tt=Je;var nt=Je;var rt=Je;var it=function(){this.size=0,this.__data__={hash:new Xe,map:new(Ke||Ze),string:new Xe}},ot=function(e){var t=et(this,e).delete(e);return this.size-=t?1:0,t},at=function(e){return tt(this,e).get(e)},st=function(e){return nt(this,e).has(e)},lt=function(e,t){var n=rt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=it,ct.prototype.delete=ot,ct.prototype.get=at,ct.prototype.has=st,ct.prototype.set=lt;var ut=ct,dt=V,ht=De,pt=ut;var ft=V,gt=L,mt=W,yt=q,bt=U,vt=function(e,t){var n=this.__data__;if(n instanceof dt){var r=n.__data__;if(!ht||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pt(r)}return n.set(e,t),this.size=n.size,this};function wt(e){var t=this.__data__=new ft(e);this.size=t.size}wt.prototype.clear=gt,wt.prototype.delete=mt,wt.prototype.get=yt,wt.prototype.has=bt,wt.prototype.set=vt;var St=wt;var $t=ut,xt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},_t=function(e){return this.__data__.has(e)};function Ft(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new $t;++t<n;)this.add(e[t])}Ft.prototype.add=Ft.prototype.push=xt,Ft.prototype.has=_t;var kt=Ft,Ot=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Bt=function(e,t){return e.has(t)};var jt=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new kt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Ot(t,(function(e,t){if(!Bt(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var At=Z.Uint8Array,Et=O,Dt=jt,Ct=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Pt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},It=K?K.prototype:void 0,zt=It?It.valueOf:void 0;var Tt=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new At(e),new At(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Et(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Ct;case"[object Set]":var l=1&r;if(s||(s=Pt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Dt(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(zt)return zt.call(e)==zt.call(t)}return!1};var Ht=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Nt=Array.isArray,Mt=Ht,Vt=Nt;var Rt=function(e,t,n){var r=t(e);return Vt(e)?r:Mt(r,n(e))};var Lt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Wt=function(){return[]},qt=Object.prototype.propertyIsEnumerable,Ut=Object.getOwnPropertySymbols,Qt=Ut?function(e){return null==e?[]:(e=Object(e),Lt(Ut(e),(function(t){return qt.call(e,t)})))}:Wt;var Gt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Xt=function(e){return null!=e&&"object"==typeof e},Zt=le,Kt=Xt;var Yt=function(e){return Kt(e)&&"[object Arguments]"==Zt(e)},Jt=Xt,en=Object.prototype,tn=en.hasOwnProperty,nn=en.propertyIsEnumerable,rn=Yt(function(){return arguments}())?Yt:function(e){return Jt(e)&&tn.call(e,"callee")&&!nn.call(e,"callee")},on={exports:{}};var an=function(){return!1};!function(e,t){var n=Z,r=an,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(on,on.exports);var sn=/^(?:0|[1-9]\d*)$/;var ln=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&sn.test(e))&&e>-1&&e%1==0&&e<t};var cn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},un=le,dn=cn,hn=Xt,pn={};pn["[object Float32Array]"]=pn["[object Float64Array]"]=pn["[object Int8Array]"]=pn["[object Int16Array]"]=pn["[object Int32Array]"]=pn["[object Uint8Array]"]=pn["[object Uint8ClampedArray]"]=pn["[object Uint16Array]"]=pn["[object Uint32Array]"]=!0,pn["[object Arguments]"]=pn["[object Array]"]=pn["[object ArrayBuffer]"]=pn["[object Boolean]"]=pn["[object DataView]"]=pn["[object Date]"]=pn["[object Error]"]=pn["[object Function]"]=pn["[object Map]"]=pn["[object Number]"]=pn["[object Object]"]=pn["[object RegExp]"]=pn["[object Set]"]=pn["[object String]"]=pn["[object WeakMap]"]=!1;var fn=function(e){return hn(e)&&dn(e.length)&&!!pn[un(e)]};var gn=function(e){return function(t){return e(t)}},mn={exports:{}};!function(e,t){var n=Q,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(mn,mn.exports);var yn=fn,bn=gn,vn=mn.exports,wn=vn&&vn.isTypedArray,Sn=wn?bn(wn):yn,$n=Gt,xn=rn,_n=Nt,Fn=on.exports,kn=ln,On=Sn,Bn=Object.prototype.hasOwnProperty;var jn=function(e,t){var n=_n(e),r=!n&&xn(e),i=!n&&!r&&Fn(e),o=!n&&!r&&!i&&On(e),a=n||r||i||o,s=a?$n(e.length,String):[],l=s.length;for(var c in e)!t&&!Bn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||kn(c,l))||s.push(c);return s},An=Object.prototype;var En=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||An)};var Dn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Cn=En,Pn=Dn,In=Object.prototype.hasOwnProperty;var zn=pe,Tn=cn;var Hn=function(e){return null!=e&&Tn(e.length)&&!zn(e)},Nn=jn,Mn=function(e){if(!Cn(e))return Pn(e);var t=[];for(var n in Object(e))In.call(e,n)&&"constructor"!=n&&t.push(n);return t},Vn=Hn;var Rn=function(e){return Vn(e)?Nn(e):Mn(e)},Ln=Rt,Wn=Qt,qn=Rn;var Un=function(e){return Ln(e,qn,Wn)},Qn=Object.prototype.hasOwnProperty;var Gn=function(e,t,n,r,i,o){var a=1&n,s=Un(e),l=s.length;if(l!=Un(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Qn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Xn=Ee(Z,"DataView"),Zn=De,Kn=Ee(Z,"Promise"),Yn=Ee(Z,"Set"),Jn=Ee(Z,"WeakMap"),er=le,tr=be,nr="[object Map]",rr="[object Promise]",ir="[object Set]",or="[object WeakMap]",ar="[object DataView]",sr=tr(Xn),lr=tr(Zn),cr=tr(Kn),ur=tr(Yn),dr=tr(Jn),hr=er;(Xn&&hr(new Xn(new ArrayBuffer(1)))!=ar||Zn&&hr(new Zn)!=nr||Kn&&hr(Kn.resolve())!=rr||Yn&&hr(new Yn)!=ir||Jn&&hr(new Jn)!=or)&&(hr=function(e){var t=er(e),n="[object Object]"==t?e.constructor:void 0,r=n?tr(n):"";if(r)switch(r){case sr:return ar;case lr:return nr;case cr:return rr;case ur:return ir;case dr:return or}return t});var pr=St,fr=jt,gr=Tt,mr=Gn,yr=hr,br=Nt,vr=on.exports,wr=Sn,Sr="[object Arguments]",$r="[object Array]",xr="[object Object]",_r=Object.prototype.hasOwnProperty;var Fr=function(e,t,n,r,i,o){var a=br(e),s=br(t),l=a?$r:yr(e),c=s?$r:yr(t),u=(l=l==Sr?xr:l)==xr,d=(c=c==Sr?xr:c)==xr,h=l==c;if(h&&vr(e)){if(!vr(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new pr),a||wr(e)?fr(e,t,n,r,i,o):gr(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&_r.call(e,"__wrapped__"),f=d&&_r.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new pr),i(g,m,n,r,o)}}return!!h&&(o||(o=new pr),mr(e,t,n,r,i,o))},kr=Xt;var Or=function e(t,n,r,i,o){return t===n||(null==t||null==n||!kr(t)&&!kr(n)?t!=t&&n!=n:Fr(t,n,r,i,e,o))},Br=St,jr=Or;var Ar=ce;var Er=function(e){return e==e&&!Ar(e)},Dr=Er,Cr=Rn;var Pr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Ir=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Br;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?jr(u,c,3,r,d):h))return!1}}return!0},zr=function(e){for(var t=Cr(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Dr(i)]}return t},Tr=Pr;var Hr=function(e){var t=zr(e);return 1==t.length&&t[0][2]?Tr(t[0][0],t[0][1]):function(n){return n===e||Ir(n,e,t)}},Nr=le,Mr=Xt;var Vr=function(e){return"symbol"==typeof e||Mr(e)&&"[object Symbol]"==Nr(e)},Rr=Nt,Lr=Vr,Wr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qr=/^\w*$/;var Ur=function(e,t){if(Rr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Lr(e))||(qr.test(e)||!Wr.test(e)||null!=t&&e in Object(t))},Qr=ut;function Gr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Gr.Cache||Qr),n}Gr.Cache=Qr;var Xr=Gr;var Zr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kr=/\\(\\)?/g,Yr=function(e){var t=Xr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Zr,(function(e,n,r,i){t.push(r?i.replace(Kr,"$1"):n||e)})),t}));var Jr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ei=Nt,ti=Vr,ni=K?K.prototype:void 0,ri=ni?ni.toString:void 0;var ii=function e(t){if("string"==typeof t)return t;if(ei(t))return Jr(t,e)+"";if(ti(t))return ri?ri.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},oi=ii;var ai=Nt,si=Ur,li=Yr,ci=function(e){return null==e?"":oi(e)};var ui=function(e,t){return ai(e)?e:si(e,t)?[e]:li(ci(e))},di=Vr;var hi=function(e){if("string"==typeof e||di(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},pi=ui,fi=hi;var gi=function(e,t){for(var n=0,r=(t=pi(t,e)).length;null!=e&&n<r;)e=e[fi(t[n++])];return n&&n==r?e:void 0},mi=gi;var yi=function(e,t,n){var r=null==e?void 0:mi(e,t);return void 0===r?n:r};var bi=ui,vi=rn,wi=Nt,Si=ln,$i=cn,xi=hi;var _i=function(e,t){return null!=e&&t in Object(e)},Fi=function(e,t,n){for(var r=-1,i=(t=bi(t,e)).length,o=!1;++r<i;){var a=xi(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&$i(i)&&Si(a,i)&&(wi(e)||vi(e))};var ki=Or,Oi=yi,Bi=function(e,t){return null!=e&&Fi(e,t,_i)},ji=Ur,Ai=Er,Ei=Pr,Di=hi;var Ci=gi;var Pi=function(e){return function(t){return null==t?void 0:t[e]}},Ii=function(e){return function(t){return Ci(t,e)}},zi=Ur,Ti=hi;var Hi=Hr,Ni=function(e,t){return ji(e)&&Ai(t)?Ei(Di(e),t):function(n){var r=Oi(n,e);return void 0===r&&r===t?Bi(n,e):ki(t,r,3)}},Mi=function(e){return e},Vi=Nt,Ri=function(e){return zi(e)?Pi(Ti(e)):Ii(e)};var Li=function(e){return"function"==typeof e?e:null==e?Mi:"object"==typeof e?Vi(e)?Ni(e[0],e[1]):Hi(e):Ri(e)},Wi=Li,qi=Hn,Ui=Rn;var Qi=function(e){return function(t,n,r){var i=Object(t);if(!qi(t)){var o=Wi(n);t=Ui(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var Gi=/\s/;var Xi=function(e){for(var t=e.length;t--&&Gi.test(e.charAt(t)););return t},Zi=/^\s+/;var Ki=function(e){return e?e.slice(0,Xi(e)+1).replace(Zi,""):e},Yi=ce,Ji=Vr,eo=/^[-+]0x[0-9a-f]+$/i,to=/^0b[01]+$/i,no=/^0o[0-7]+$/i,ro=parseInt;var io=function(e){if("number"==typeof e)return e;if(Ji(e))return NaN;if(Yi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Yi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ki(e);var n=to.test(e);return n||no.test(e)?ro(e.slice(2),n?2:8):eo.test(e)?NaN:+e},oo=1/0;var ao=function(e){return e?(e=io(e))===oo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var so=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},lo=Li,co=function(e){var t=ao(e),n=t%1;return t==t?n?t-n:t:0},uo=Math.max;var ho=Qi((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:co(n);return i<0&&(i=uo(r+i,0)),so(e,lo(t),i)})),po=Or;var fo=function(e,t){return po(e,t)};let go=Eo();const mo=e=>Oo(e,go);let yo=Eo();mo.write=e=>Oo(e,yo);let bo=Eo();mo.onStart=e=>Oo(e,bo);let vo=Eo();mo.onFrame=e=>Oo(e,vo);let wo=Eo();mo.onFinish=e=>Oo(e,wo);let So=[];mo.setTimeout=(e,t)=>{let n=mo.now()+t,r=()=>{let e=So.findIndex((e=>e.cancel==r));~e&&So.splice(e,1),Fo-=~e?1:0},i={time:n,handler:e,cancel:r};return So.splice($o(n),0,i),Fo+=1,Bo(),i};let $o=e=>~(~So.findIndex((t=>t.time>e))||~So.length);mo.cancel=e=>{bo.delete(e),vo.delete(e),wo.delete(e),go.delete(e),yo.delete(e)},mo.sync=e=>{ko=!0,mo.batchedUpdates(e),ko=!1},mo.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,mo.onStart(n)}return r.handler=e,r.cancel=()=>{bo.delete(n),t=null},r};let xo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};mo.use=e=>xo=e,mo.now="undefined"!=typeof performance?()=>performance.now():Date.now,mo.batchedUpdates=e=>e(),mo.catch=console.error,mo.frameLoop="always",mo.advance=()=>{"demand"!==mo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ao()};let _o=-1,Fo=0,ko=!1;function Oo(e,t){ko?(t.delete(e),e(0)):(t.add(e),Bo())}function Bo(){_o<0&&(_o=0,"demand"!==mo.frameLoop&&xo(jo))}function jo(){~_o&&(xo(jo),mo.batchedUpdates(Ao))}function Ao(){let e=_o;_o=mo.now();let t=$o(_o);t&&(Do(So.splice(0,t),(e=>e.handler())),Fo-=t),Fo?(bo.flush(),go.flush(e?Math.min(64,_o-e):16.667),vo.flush(),yo.flush(),wo.flush()):_o=-1}function Eo(){let e=new Set,t=e;return{add(n){Fo+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Fo-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Fo-=t.size,Do(t,(t=>t(n)&&e.add(t))),Fo+=e.size,t=e)}}}function Do(e,t){e.forEach((e=>{try{t(e)}catch(e){mo.catch(e)}}))}function Co(){}const Po={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Io(e,t){if(Po.arr(e)){if(!Po.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const zo=(e,t)=>e.forEach(t);function To(e,t,n){if(Po.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Ho=e=>Po.und(e)?[]:Po.arr(e)?e:[e];function No(e,t){if(e.size){const n=Array.from(e);e.clear(),zo(n,t)}}const Mo=(e,...t)=>No(e,(e=>e(...t))),Vo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Ro,Lo,Wo=null,qo=!1,Uo=Co;var Qo=Object.freeze({__proto__:null,get createStringInterpolator(){return Ro},get to(){return Lo},get colors(){return Wo},get skipAnimation(){return qo},get willAdvance(){return Uo},assign:e=>{e.to&&(Lo=e.to),e.now&&(mo.now=e.now),void 0!==e.colors&&(Wo=e.colors),null!=e.skipAnimation&&(qo=e.skipAnimation),e.createStringInterpolator&&(Ro=e.createStringInterpolator),e.requestAnimationFrame&&mo.use(e.requestAnimationFrame),e.batchedUpdates&&(mo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Uo=e.willAdvance),e.frameLoop&&(mo.frameLoop=e.frameLoop)}});const Go=new Set;let Xo=[],Zo=[],Ko=0;const Yo={get idle(){return!Go.size&&!Xo.length},start(e){Ko>e.priority?(Go.add(e),mo.onStart(Jo)):(ea(e),mo(na))},advance:na,sort(e){if(Ko)mo.onFrame((()=>Yo.sort(e)));else{const t=Xo.indexOf(e);~t&&(Xo.splice(t,1),ta(e))}},clear(){Xo=[],Go.clear()}};function Jo(){Go.forEach(ea),Go.clear(),mo(na)}function ea(e){Xo.includes(e)||ta(e)}function ta(e){Xo.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Xo,(t=>t.priority>e.priority)),0,e)}function na(e){const t=Zo;for(let n=0;n<Xo.length;n++){const r=Xo[n];Ko=r.priority,r.idle||(Uo(r),r.advance(e),r.idle||t.push(r))}return Ko=0,Zo=Xo,Zo.length=0,Xo=t,Xo.length>0}const ra="[-+]?\\d*\\.?\\d+",ia=ra+"%";function oa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const aa=new RegExp("rgb"+oa(ra,ra,ra)),sa=new RegExp("rgba"+oa(ra,ra,ra,ra)),la=new RegExp("hsl"+oa(ra,ia,ia)),ca=new RegExp("hsla"+oa(ra,ia,ia,ra)),ua=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,da=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ha=/^#([0-9a-fA-F]{6})$/,pa=/^#([0-9a-fA-F]{8})$/;function fa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ga(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=fa(i,r,e+1/3),a=fa(i,r,e),s=fa(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ma(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ya(e){return(parseFloat(e)%360+360)%360/360}function ba(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function va(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function wa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ha.exec(e))?parseInt(t[1]+"ff",16)>>>0:Wo&&void 0!==Wo[e]?Wo[e]:(t=aa.exec(e))?(ma(t[1])<<24|ma(t[2])<<16|ma(t[3])<<8|255)>>>0:(t=sa.exec(e))?(ma(t[1])<<24|ma(t[2])<<16|ma(t[3])<<8|ba(t[4]))>>>0:(t=ua.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=pa.exec(e))?parseInt(t[1],16)>>>0:(t=da.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=la.exec(e))?(255|ga(ya(t[1]),va(t[2]),va(t[3])))>>>0:(t=ca.exec(e))?(ga(ya(t[1]),va(t[2]),va(t[3]))|ba(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Sa=(e,t,n)=>{if(Po.fun(e))return e;if(Po.arr(e))return Sa({range:e,output:t,extrapolate:n});if(Po.str(e.output[0]))return Ro(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const $a=1.70158,xa=1.525*$a,_a=$a+1,Fa=2*Math.PI/3,ka=2*Math.PI/4.5,Oa=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ba={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>_a*e*e*e-$a*e*e,easeOutBack:e=>1+_a*Math.pow(e-1,3)+$a*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-xa)/2:(Math.pow(2*e-2,2)*((xa+1)*(2*e-2)+xa)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Fa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Fa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ka)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ka)/2+1,easeInBounce:e=>1-Oa(1-e),easeOutBounce:Oa,easeInOutBounce:e=>e<.5?(1-Oa(1-2*e))/2:(1+Oa(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ja.apply(this,arguments)}const Aa=Symbol.for("FluidValue.get"),Ea=Symbol.for("FluidValue.observers"),Da=e=>Boolean(e&&e[Aa]),Ca=e=>e&&e[Aa]?e[Aa]():e,Pa=e=>e[Ea]||null;function Ia(e,t){let n=e[Ea];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class za{constructor(e){if(this[Aa]=void 0,this[Ea]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Ta(this,e)}}const Ta=(e,t)=>Ma(e,Aa,t);function Ha(e,t){if(e[Aa]){let n=e[Ea];n||Ma(e,Ea,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Na(e,t){let n=e[Ea];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ea]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Ma=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Va=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ra=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,La=new RegExp(`(${Va.source})(%|[a-z]+)`,"i"),Wa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,qa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ua=e=>{const[t,n]=Qa(e);if(!t||Vo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&qa.test(n)?Ua(n):n||e},Qa=e=>{const t=qa.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ga;const Xa=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Za=e=>{Ga||(Ga=Wo?new RegExp(`(${Object.keys(Wo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ca(e).replace(qa,Ua).replace(Ra,wa).replace(Ga,wa))),n=t.map((e=>e.match(Va).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Sa(ja({},e,{output:t}))));return e=>{var n;const i=!La.test(t[0])&&(null==(n=t.find((e=>La.test(e))))?void 0:n.replace(Va,""));let o=0;return t[0].replace(Va,(()=>`${r[o++](e)}${i||""}`)).replace(Wa,Xa)}},Ka="react-spring: ",Ya=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ka}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ja=Ya(console.warn);const es=Ya(console.warn);function ts(e){return Po.str(e)&&("#"==e[0]||/\d/.test(e)||!Vo()&&qa.test(e)||e in(Wo||{}))}const ns=Vo()?o:a,rs=()=>{const e=l(!1);return ns((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function is(){const e=s()[1],t=rs();return()=>{t.current&&e(Math.random())}}const os=e=>o(e,as),as=[];function ss(e){const t=l();return o((()=>{t.current=e})),t.current}const ls=Symbol.for("Animated:node"),cs=e=>e&&e[ls],us=(e,t)=>{return n=e,r=ls,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ds=e=>e&&e[ls]&&e[ls].getPayload();class hs{constructor(){this.payload=void 0,us(this,this)}getPayload(){return this.payload||[]}}class ps extends hs{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Po.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ps(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Po.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Po.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class fs extends ps{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Sa({output:[e,e]})}static create(e){return new fs(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Po.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Sa({output:[this.getValue(),e]})),this._value=0,super.reset()}}const gs={dependencies:null};class ms extends hs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return To(this.source,((n,r)=>{var i;(i=n)&&i[ls]===i?t[r]=n.getValue(e):Da(n)?t[r]=Ca(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&zo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return To(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){gs.dependencies&&Da(e)&&gs.dependencies.add(e);const t=ds(e);t&&zo(t,(e=>this.add(e)))}}class ys extends ms{constructor(e){super(e)}static create(e){return new ys(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(bs)),!0)}}function bs(e){return(ts(e)?fs:ps).create(e)}function vs(e){const t=cs(e);return t?t.constructor:Po.arr(e)?ys:ts(e)?fs:ps}function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ws.apply(this,arguments)}const Ss=(e,t)=>{const n=!Po.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=n&&u((e=>{s.current=function(e,t){e&&(Po.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;gs.dependencies=n,e.style&&(e=ws({},e,{style:t.createAnimatedStyle(e.style)}));return e=new ms(e),gs.dependencies=null,[e,n]}(i,t),p=is(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new $s(f,h),m=l();ns((()=>(m.current=g,zo(h,(e=>Ha(e,g))),()=>{m.current&&(zo(m.current.deps,(e=>Na(e,m.current))),mo.cancel(m.current.update))}))),o(f,[]),os((()=>()=>{const e=m.current;zo(e.deps,(t=>Na(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,ws({},y,{ref:c}))}))};class $s{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&mo.write(this.update)}}const xs=Symbol.for("AnimatedComponent"),_s=e=>Po.str(e)?e:e&&Po.str(e.displayName)?e.displayName:Po.fun(e)&&e.name||null;function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fs.apply(this,arguments)}function ks(e,...t){return Po.fun(e)?e(...t):e}const Os=(e,t)=>!0===e||!!(t&&e&&(Po.fun(e)?e(t):Ho(e).includes(t))),Bs=(e,t)=>Po.obj(e)?t&&e[t]:e,js=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,As=e=>e,Es=(e,t=As)=>{let n=Ds;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Po.und(n)||(r[i]=n)}return r},Ds=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Cs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ps(e){const t=function(e){const t={};let n=0;if(To(e,((e,r)=>{Cs[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return To(e,((e,r)=>r in t||(n[r]=e))),n}return Fs({},e)}function Is(e){return e=Ca(e),Po.arr(e)?e.map(Is):ts(e)?Qo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function zs(e){return Po.fun(e)||Po.arr(e)&&Po.obj(e[0])}const Ts=Fs({},{tension:170,friction:26},{mass:1,damping:1,easing:Ba.linear,clamp:!1});class Hs{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Ts)}}function Ns(e,t){if(Po.und(t.decay)){const n=!Po.und(t.tension)||!Po.und(t.friction);!n&&Po.und(t.frequency)&&Po.und(t.damping)&&Po.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Ms=[];class Vs{constructor(){this.changed=!1,this.values=Ms,this.toValues=null,this.fromValues=Ms,this.to=void 0,this.from=void 0,this.config=new Hs,this.immediate=!1}}function Rs(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=Os(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{Po.und(n.pause)||(i.paused=Os(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Os(e,t)),c=ks(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-mo.now()}function p(){c>0&&!Qo.skipAnimation?(i.delayed=!0,u=mo.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Fs({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Ls=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Us(e.get()):t.every((e=>e.noop))?Ws(e.get()):qs(e.get(),t.every((e=>e.finished))),Ws=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),qs=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Us=e=>({value:e,cancelled:!0,finished:!1});function Qs(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Es(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Us(r)||i!==n.asyncId&&qs(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Xs,a=new Zs;return(async()=>{if(Qo.skipAnimation)throw Gs(n),a.result=qs(r,!1),d(a),a;p(o);const s=Po.obj(e)?Fs({},e):Fs({},t,{to:e});s.parentId=i,To(c,((e,t)=>{Po.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Qo.skipAnimation)return Gs(n),qs(r,!1);try{let t;t=Po.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=qs(r.get(),!0,!1)}catch(e){if(e instanceof Xs)g=e.result;else{if(!(e instanceof Zs))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Po.fun(a)&&mo.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Gs(e,t){No(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Xs extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Zs extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Ks=e=>e instanceof Js;let Ys=1;class Js extends za{constructor(...e){super(...e),this.id=Ys++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=cs(this);return e&&e.getValue()}to(...e){return Qo.to(this,e)}interpolate(...e){return Ja(`${Ka}The "interpolate" function is deprecated in v9 (use "to" instead)`),Qo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ia(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Yo.sort(this),Ia(this,{type:"priority",parent:this,priority:e})}}const el=Symbol.for("SpringPhase"),tl=e=>(1&e[el])>0,nl=e=>(2&e[el])>0,rl=e=>(4&e[el])>0,il=(e,t)=>t?e[el]|=3:e[el]&=-3,ol=(e,t)=>t?e[el]|=4:e[el]&=-5;class al extends Js{constructor(e,t){if(super(),this.key=void 0,this.animation=new Vs,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Po.und(e)||!Po.und(t)){const n=Po.obj(e)?Fs({},e):Fs({},t,{from:e});Po.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(nl(this)||this._state.asyncTo)||rl(this)}get goal(){return Ca(this.animation.to)}get velocity(){const e=cs(this);return e instanceof ps?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return tl(this)}get isAnimating(){return nl(this)}get isPaused(){return rl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=ds(r.to);!a&&Da(r.to)&&(o=Ho(Ca(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==fs?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Po.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Po.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Po.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=cs(this),l=s.getValue();if(t){const e=Ca(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return mo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(nl(this)){const{to:e,config:t}=this.animation;mo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Po.und(e)?(n=this.queue||[],this.queue=[]):n=[Po.obj(e)?e:Fs({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Ls(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Gs(this._state,e&&this._lastCallId),mo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Po.obj(n)?n[t]:n,(null==n||zs(n))&&(n=void 0),r=Po.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return tl(this)||(e.reverse&&([n,r]=[r,n]),r=Ca(r),Po.und(r)?cs(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Fs({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Es(n,((e,t)=>/^on/.test(t)?Bs(e,r):e))),pl(this,n,"onProps"),fl(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Rs(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{rl(this)||(ol(this,!0),Mo(a.pauseQueue),fl(this,"onPause",qs(this,sl(this,this.animation.to)),this))},resume:()=>{rl(this)&&(ol(this,!1),nl(this)&&this._resume(),Mo(a.resumeQueue),fl(this,"onResume",qs(this,sl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=ll(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Us(this));const r=!Po.und(e.to),i=!Po.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Us(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Po.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Io(d,c);h&&(s.from=d),d=Ca(d);const p=!Io(u,l);p&&this._focus(u);const f=zs(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Ns(n=Fs({},n),t),t=Fs({},n,t)),Ns(e,t),Object.assign(e,t);for(const t in Ts)null==e[t]&&(e[t]=Ts[t]);let{mass:r,frequency:i,damping:o}=e;Po.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,ks(t.config,o),t.config!==a.config?ks(a.config,o):void 0);let b=cs(this);if(!b||Po.und(u))return n(qs(this,!0));const v=Po.und(t.reset)?i&&!t.default:!Po.und(d)&&Os(t.reset,o),w=v?d:this.get(),S=Is(u),$=Po.num(S)||Po.arr(S)||ts(S),x=!f&&(!$||Os(a.immediate||t.immediate,o));if(p){const e=vs(u);if(e!==b.constructor){if(!x)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(S)}}const _=b.constructor;let F=Da(u),k=!1;if(!F){const e=v||!tl(this)&&h;(p||e)&&(k=Io(Is(w),S),F=!k),(Io(s.immediate,x)||x)&&Io(g.decay,m)&&Io(g.velocity,y)||(F=!0)}if(k&&nl(this)&&(s.changed&&!v?F=!0:F||this._stop(l)),!f&&((F||Da(l))&&(s.values=b.getPayload(),s.toValues=Da(u)?null:_==fs?[1]:Ho(S)),s.immediate!=x&&(s.immediate=x,x||v||this._set(l)),F)){const{onRest:e}=s;zo(hl,(e=>pl(this,t,e)));const r=qs(this,sl(this,l));Mo(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&mo.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?ks(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),f?n(Qs(t.to,t,this._state,this)):F?this._start():nl(this)&&!p?this._pendingCalls.add(n):n(Ws(w))}_focus(e){const t=this.animation;e!==t.to&&(Pa(this)&&this._detach(),t.to=e,Pa(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Da(t)&&(Ha(t,this),Ks(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Da(e)&&Na(e,this)}_set(e,t=!0){const n=Ca(e);if(!Po.und(n)){const e=cs(this);if(!e||!Io(n,e.getValue())){const r=vs(n);e&&e.constructor==r?e.setValue(n):us(this,r.create(n)),e&&mo.batchedUpdates((()=>{this._onChange(n,t)}))}}return cs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,fl(this,"onStart",qs(this,sl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ks(this.animation.onChange,e,this)),ks(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;cs(this).reset(Ca(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),nl(this)||(il(this,!0),rl(this)||this._resume())}_resume(){Qo.skipAnimation?this.finish():Yo.start(this)}_stop(e,t){if(nl(this)){il(this,!1);const n=this.animation;zo(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ia(this,{type:"idle",parent:this});const r=t?Us(this.get()):qs(this.get(),sl(this,null!=e?e:n.to));Mo(this._pendingCalls,r),n.changed&&(n.changed=!1,fl(this,"onRest",r,this))}}}function sl(e,t){const n=Is(t);return Io(Is(e.get()),n)}function ll(e,t=e.loop,n=e.to){let r=ks(t);if(r){const i=!0!==r&&Ps(r),o=(i||e).reverse,a=!i||i.reset;return cl(Fs({},e,{loop:t,default:!1,pause:void 0,to:!o||zs(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function cl(e){const{to:t,from:n}=e=Ps(e),r=new Set;return Po.obj(t)&&dl(t,r),Po.obj(n)&&dl(n,r),e.keys=r.size?Array.from(r):null,e}function ul(e){const t=cl(e);return Po.und(t.default)&&(t.default=Es(t)),t}function dl(e,t){To(e,((e,n)=>null!=e&&t.add(n)))}const hl=["onStart","onRest","onChange","onPause","onResume"];function pl(e,t,n){e.animation[n]=t[n]!==js(t,n)?Bs(t[n],e.key):void 0}function fl(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const gl=["onStart","onChange","onRest"];let ml=1;class yl{constructor(e,t){this.id=ml++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Fs({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Po.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(cl(e)),this}start(e){let{queue:t}=this;return e?t=Ho(e).map(cl):this.queue=[],this._flush?this._flush(this,t):(_l(this,t),bl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;zo(Ho(t),(t=>n[t].stop(!!e)))}else Gs(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Po.und(e))this.start({pause:!0});else{const t=this.springs;zo(Ho(e),(e=>t[e].pause()))}return this}resume(e){if(Po.und(e))this.start({pause:!1});else{const t=this.springs;zo(Ho(e),(e=>t[e].resume()))}return this}each(e){To(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,No(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&No(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,No(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}mo.onFrame(this._onFrame)}}function bl(e,t){return Promise.all(t.map((t=>vl(e,t)))).then((t=>Ls(e,t)))}async function vl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Po.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Po.arr(i)||Po.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):zo(gl,(n=>{const r=t[n];if(Po.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Mo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===js(t,"cancel");(u||p&&d.asyncId)&&h.push(Rs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Co,resume:Co,start(t,n){p?(Gs(d,e._lastAsyncId),n(Us(e))):(t.onRest=s,n(Qs(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Ls(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=ll(t,a,i);if(n)return _l(e,[n]),vl(e,n,!0)}return l&&mo.batchedUpdates((()=>l(f,e,e.item))),f}function wl(e,t){const n=Fs({},e.springs);return t&&zo(Ho(t),(e=>{Po.und(e.keys)&&(e=cl(e)),Po.obj(e.to)||(e=Fs({},e,{to:void 0})),xl(n,e,(e=>$l(e)))})),Sl(e,n),n}function Sl(e,t){To(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ha(t,e))}))}function $l(e,t){const n=new al;return n.key=e,t&&Ha(n,t),n}function xl(e,t,n){t.keys&&zo(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function _l(e,t){zo(t,(t=>{xl(e.springs,t,(t=>$l(t,e)))}))}const Fl=["children"],kl=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Fl);const i=d(Ol),a=n.pause||!!i.pause,c=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=l(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:c})),[a,c]);const{Provider:u}=Ol;return r.createElement(u,{value:n},t)},Ol=(Bl=kl,jl={},Object.assign(Bl,r.createContext(jl)),Bl.Provider._context=Bl,Bl.Consumer._context=Bl,Bl);var Bl,jl;kl.Provider=Ol.Provider,kl.Consumer=Ol.Consumer;const Al=()=>{const e=[],t=function(t){es(`${Ka}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return zo(e,((e,i)=>{if(Po.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return zo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return zo(e,(e=>e.resume(...arguments))),this},t.set=function(t){zo(e,(e=>e.set(t)))},t.start=function(t){const n=[];return zo(e,((e,r)=>{if(Po.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return zo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return zo(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Po.fun(e)?e(n,t):e};return t._getProps=n,t};function El(e,t){const n=Po.fun(e),[[r],i]=function(e,t,n){const r=Po.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?Al():void 0),[]),o=l(0),a=is(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=wl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?bl(e,t):new Promise((r=>{Sl(e,n),s.queue.push((()=>{r(bl(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=ss(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new yl(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=ul(n))}}h((()=>{zo(c.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>wl(e,u[t]))),m=d(kl),y=ss(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);ns((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],zo(e,(e=>e()))),zo(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),os((()=>()=>{zo(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>Fs({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Dl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Dl||(Dl={}));class Cl extends Js{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Sa(...t);const n=this._get(),r=vs(n);us(this,r.create(n))}advance(e){const t=this._get();Io(t,this.get())||(cs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Il(this._active)&&zl(this)}_get(){const e=Po.arr(this.source)?this.source.map(Ca):Ho(Ca(this.source));return this.calc(...e)}_start(){this.idle&&!Il(this._active)&&(this.idle=!1,zo(ds(this),(e=>{e.done=!1})),Qo.skipAnimation?(mo.batchedUpdates((()=>this.advance())),zl(this)):Yo.start(this))}_attach(){let e=1;zo(Ho(this.source),(t=>{Da(t)&&Ha(t,this),Ks(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){zo(Ho(this.source),(e=>{Da(e)&&Na(e,this)})),this._active.clear(),zl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ho(this.source).reduce(((e,t)=>Math.max(e,(Ks(t)?t.priority:0)+1)),0))}}function Pl(e){return!1!==e.idle}function Il(e){return!e.size||Array.from(e).every(Pl)}function zl(e){e.idle||(e.idle=!0,zo(ds(e),(e=>{e.done=!0})),Ia(e,{type:"idle",parent:e}))}function Tl(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Qo.assign({createStringInterpolator:Za,to:(e,t)=>new Cl(e,t)});const Hl=["style","children","scrollTop","scrollLeft","viewBox"],Nl=/^--/;function Ml(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Nl.test(e)||Rl.hasOwnProperty(e)&&Rl[e]?(""+t).trim():t+"px"}const Vl={};let Rl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Ll=["Webkit","Ms","Moz","O"];Rl=Object.keys(Rl).reduce(((e,t)=>(Ll.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Rl);const Wl=["x","y","z"],ql=/^(matrix|translate|scale|rotate|skew)/,Ul=/^(translate)/,Ql=/^(rotate|skew)/,Gl=(e,t)=>Po.num(e)&&0!==e?e+t:e,Xl=(e,t)=>Po.arr(e)?e.every((e=>Xl(e,t))):Po.num(e)?e===t:parseFloat(e)===t;class Zl extends ms{constructor(e){let{x:t,y:n,z:r}=e,i=Tl(e,Wl);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Gl(e,"px"))).join(",")})`,Xl(e,0)]))),To(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(ql.test(t)){if(delete i[t],Po.und(e))return;const n=Ul.test(t)?"px":Ql.test(t)?"deg":"";o.push(Ho(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Gl(i,n)})`,Xl(i,0)]:e=>[`${t}(${e.map((e=>Gl(e,n))).join(",")})`,Xl(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Kl(o,a)),super(i)}}class Kl extends za{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return zo(this.inputs,((n,r)=>{const i=Ca(n[0]),[o,a]=this.transforms[r](Po.arr(i)?i:n.map(Ca));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&zo(this.inputs,(e=>zo(e,(e=>Da(e)&&Ha(e,this)))))}observerRemoved(e){0==e&&zo(this.inputs,(e=>zo(e,(e=>Da(e)&&Na(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ia(this,e)}}const Yl=["scrollTop","scrollLeft"];Qo.assign({batchedUpdates:p,createStringInterpolator:Za,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Jl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ms(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=_s(e)||"Anonymous";return(e=Po.str(e)?o[e]||(o[e]=Ss(e,i)):e[xs]||(e[xs]=Ss(e,i))).displayName=`Animated(${t})`,e};return To(e,((t,n)=>{Po.arr(e)&&(n=_s(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Tl(r,Hl),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Vl[t]||(Vl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Ml(t,i[t]);Nl.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Zl(e),getComponentProps:e=>Tl(e,Yl)}),ec=Jl.animated,tc=(e,t,n)=>t?yi(n,t)||yi(e,t):n||e,nc=(e,t)=>{const n=t||e.defaultValue;return yi(e.collections,n)};var rc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(rc||(rc={}));const ic={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},oc=e=>t=>{const n=t.theme,r=nc(ic,n[rc.colorScheme]);return n.options&&n.options.color?tc(r,e,n.options.color):tc(r,e)},ac={Brand:{1:oc("Brand.1"),2:oc("Brand.2"),3:oc("Brand.3"),4:oc("Brand.4"),5:oc("Brand.5"),6:oc("Brand.6")},Primary:oc("Primary"),PrimaryDark:oc("PrimaryDark"),Secondary:oc("Secondary"),Accent:{Light:{1:oc("Accent.Light.1"),2:oc("Accent.Light.2"),3:oc("Accent.Light.3"),4:oc("Accent.Light.4"),5:oc("Accent.Light.5"),6:oc("Accent.Light.6")},Dark:{1:oc("Accent.Dark.1"),2:oc("Accent.Dark.2"),3:oc("Accent.Dark.3")}},Neutral:{1:oc("Neutral.1"),2:oc("Neutral.2"),3:oc("Neutral.3"),4:oc("Neutral.4"),5:oc("Neutral.5"),6:oc("Neutral.6"),7:oc("Neutral.7"),8:oc("Neutral.8")},Validation:{Green:{Text:oc("Validation.Green.Text"),Icon:oc("Validation.Green.Icon"),Border:oc("Validation.Green.Border"),Background:oc("Validation.Green.Background")},Orange:{Text:oc("Validation.Orange.Text"),Icon:oc("Validation.Orange.Icon"),Border:oc("Validation.Orange.Border"),Background:oc("Validation.Orange.Background"),Badge:oc("Validation.Orange.Badge")},Red:{Text:oc("Validation.Red.Text"),Icon:oc("Validation.Red.Icon"),Border:oc("Validation.Red.Border"),Background:oc("Validation.Red.Background")},Blue:{Text:oc("Validation.Blue.Text"),Icon:oc("Validation.Blue.Icon"),Border:oc("Validation.Blue.Border"),Background:oc("Validation.Blue.Background")}},Shadow:{Accent:oc("Shadow.Accent"),Red:oc("Shadow.Red"),Elevation:oc("Shadow.Elevation")}},sc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},lc=e=>Object.keys(sc).reduce(((t,n)=>{const r=sc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),cc=lc("max-width"),uc=(lc("min-width"),f.div`
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
            font-weight: ${null!==(r=$c(t)||o)&&void 0!==r?r:"normal"};
        `},$c=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xc=(e,t,n=!1)=>r=>{const i=vc[e],o=i.fontSize(r);return m`
            ${Sc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},_c=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `;var Fc;!function(e){e.D1=f.h1`
        ${e=>m`
                ${xc("D1",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${xc("D2",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${xc("D3",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${xc("D4",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${xc("DBody",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${xc("H1",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${xc("H2",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${xc("H3",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${xc("H4",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${xc("H5",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${xc("H6",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${xc("Body",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${xc("BodySmall",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${xc("XSmall",e.weight,e.paragraph)}
                color: ${ac.Neutral[1]};
                ${_c(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Bc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Bc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Fc||(Fc={}));const kc=f.a`
    ${e=>m`
            ${xc(e.textStyle,e.weight)}
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
`,Bc=n=>{var{external:r=!1,children:i}=n,o=_(n,["external","children"]);return e(kc,Object.assign({},o,{children:[i,r&&t(Oc,{})]}))};var jc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(jc||(jc={})),f.button`
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
                    background-color: ${ac.Neutral[8](e)};
                    border: 1px solid ${ac.Primary(e)};

                    span {
                        color: ${ac.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${ac.Neutral[8](e)};
                    border: 1px solid ${ac.Neutral[5](e)};

                    span {
                        color: ${ac.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${ac.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${ac.Neutral[3](e)};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ac.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${ac.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${ac.Primary(e)};
                    border: 1px solid transparent;

                    ${cc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${ac.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${xc("H5","semibold")}
                    }

                    ${cc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${xc("H4","semibold")}
                    }

                    ${cc.mobileS} {
                        height: auto;
                    }
                `}
`;const Ac=f((({color:n,className:r,size:i=18})=>e(uc,Object.assign({className:r,$size:i,$color:n},{children:[t(hc,{id:"inner1",$size:i-2,$borderWidth:2}),t(pc,{id:"inner2",$size:i-2,$borderWidth:2}),t(fc,{id:"inner3",$size:i-2,$borderWidth:2}),t(gc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=ac.Primary(e);break;case"disabled":t=ac.Neutral[3](e);break;default:t=ac.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Ec;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Ec||(Ec={}));const Dc=f.div`
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
    border: 1px solid ${ac.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,n;return e.selected&&(t=ac.Primary(e),n=ac.Primary(e)),e.disabled&&(t=ac.Neutral[6](e),n=ac.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${n};\n\t\t`}}
`,Cc=f.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Pc=f(v)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return m`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?ac.Neutral[4]:ac.Neutral[8]};
`,Ic=f(ec.div)`
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
`,Tc=f.li`
    :hover,
    :focus,
    :active {
        background: ${ac.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${ac.Accent.Light[5]};
            `}}
`,Hc=f.button`
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
`,Nc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Mc=f.div`
    ${xc("Body","regular")}
    color: ${ac.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nc}
`,Vc=f.div`
    color: ${ac.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Nc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${xc("BodySmall","semibold")}
                `:m`
                    ${xc("Body","regular")}
                `}
`,Rc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Mc} {
                        display: inline;
                    }

                    ${Vc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Lc=f.div`
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
`,qc=f((n=>{var{className:r,checked:i,disabled:a,onChange:l,onKeyPress:c,displaySize:u="default"}=n,d=_(n,["className","checked","disabled","onChange","onKeyPress","displaySize"]);const[h,p]=s(i);o((()=>{p(i)}),[i]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),c&&c(t)}};return e(Dc,Object.assign({selected:h,disabled:a,className:r,"data-testid":"checkbox",$displaySize:u,role:"checkbox","aria-checked":h,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f},{children:[t(Cc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:f,disabled:a,checked:h},d)),h&&t(Pc,{id:"checkmark","data-testid":"checkmark",disabled:a,$displaySize:u})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Uc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Qc=f.button`
    ${xc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ac.Primary(e)};\n\t\t`}
`,Gc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Xc=f(Fc.Body)``,Zc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${ac.Validation.Red.Icon};
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

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&m`
                background-color: ${ac.Neutral[7]};
            `}
    }
`,Yc=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=_(e,["children","focusHighlight","focusOutline","type"]);return t(Kc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Jc={collections:{base:{InputBoxShadow:m`
        inset 0 0 6px 1px ${ac.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${ac.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ac.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:m`
        inset 0 0 6px 1px ${ac.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${ac.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ac.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},eu=e=>t=>{var n;const r=t.theme,i=nc(Jc,r[rc.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?tc(i,e,r.options.designToken):tc(i,e)},tu=eu("InputBoxShadow"),nu=eu("InputErrorBoxShadow");eu("ElevationBoxShadow"),eu("Table.Header"),eu("Table.Cell.Primary"),eu("Table.Cell.Secondary"),eu("Table.Cell.Selected"),eu("Table.Cell.Hover");f.div`
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
        box-shadow: ${tu};
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
                    box-shadow: ${nu};
                }
            `:void 0}
`;const ru=f.input`
    ${xc("Body","regular")}
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
`,au=f(S)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${ac.Neutral[3]};
`,su=f(Yc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${ac.Neutral[3]};
    cursor: pointer;
`,lu=f(w)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${ac.Neutral[3]};
`,cu=c(((n,r)=>{const{onClear:i}=n,o=_(n,["onClear"]);return e(iu,{children:[t(au,{}),t(ou,Object.assign({ref:r},o)),o.value&&t(su,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(lu,{})}))]},"search")})),uu=r=>{var{listItems:i,listExtractor:a,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:S,onRetry:$,itemsLoadState:x="success",itemTruncationType:F="end",itemMaxLines:k=2,labelDisplayType:O="inline",renderListItem:B,onBlur:j,hideNoResultsDisplay:A,renderCustomCallToAction:E}=r,D=_(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,P]=s(0),[I,z]=s(""),[T,H]=s(i),[N,M]=s(0),V=El({height:N}),R=l(),L=l(),W=l([]),q=l(),U=l(),Q=l(C),G=l(T),X=e=>{Q.current=e,P(e)},Z=e=>{G.current=e,H(e)};o((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),o((()=>{ee(I)}),[I]),o((()=>{if(z(""),h){if(setTimeout((()=>{M(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else M(0)}),[h]),o((()=>{if(h){const e=te();M(e)}}),[T,x]),o((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>a?a(e):e.toString(),Y=e=>{if("inline"!==O)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return Ec.getTextWidth(e,"1.125rem 'Open Sans'")>t*k},J=e=>!!ho(w,(t=>fo(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{$&&$()},se=()=>{j&&j()},le=r=>e(n,{children:[t(Lc,Object.assign({$maxLines:k,"aria-hidden":!0},{children:r})),t(Wc,Object.assign({$maxLines:k,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=K(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":O;return e(Rc,Object.assign({$labelDisplayType:l},{children:[t(Mc,Object.assign({$truncateType:F,$maxLines:k,"aria-label":i},{children:"middle"===F&&a?le(i):i})),o&&t(Vc,Object.assign({$truncateType:F,$maxLines:k,$labelDisplayType:O,"aria-label":o},{children:"middle"===F&&s?le(o):o}))]}))},ue=()=>{if(!$||$&&"success"===x)return T.map(((n,r)=>t(Tc,Object.assign({$checked:J(n)&&!v},{children:e(Hc,Object.assign({$hasNextLineLabel:"next-line"===O&&T.length>0&&a&&"string"!=typeof a(T[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(qc,{checked:J(n),displaySize:"small"}),B?B(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(n,r))))},de=()=>{if(v&&T.length>0&&!I&&"success"===x)return t(Uc,{children:t(Qc,Object.assign({onClick:S,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!A&&(I||!p)&&0===T.length&&"success"===x)return e(Gc,Object.assign({"data-testid":"list-no-results"},{children:[t(Zc,{"data-testid":"no-result-icon"}),t(Xc,{children:"No results found."})]}),"noResults")},pe=()=>{if($&&"loading"===x)return e(Gc,Object.assign({"data-testid":"list-loading"},{children:[t(Ac,{$buttonStyle:"secondary",size:24}),t(Xc,{children:"Loading..."})]}),"loading")},fe=()=>{if($&&"fail"===x)return e(Gc,Object.assign({"data-testid":"list-fail"},{children:[t(Zc,{"data-testid":"load-error-icon"}),t(Xc,{children:"Failed to load."}),t(Qc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(Ic,Object.assign({style:V,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(zc,Object.assign({ref:L,"data-testid":"dropdown-list",width:d,role:"list"},D,{children:[(p||m)&&"success"===x?t(cu,{ref:q,onChange:ie,value:I,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&E)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:E(y,T)}))})()]}))})},du="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",hu=f.div`
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
        box-shadow: ${tu};
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
                    box-shadow: ${nu};
                }
            `:void 0}
`;f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${du};
    margin-left: 1rem;
`,f($)`
    color: ${ac.Neutral[3]};
    height: ${vc.Body.fontSize}rem;
    width: ${vc.Body.fontSize}rem;
`;const yu=f.div`
    height: 1px;
    background: ${ac.Neutral[5]};
    margin: 0 0.5rem;
`,bu=f.div`
    display: flex;
    flex: 1;
`,vu=f(Fc.Body)`
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
    color: ${ac.Neutral[3]};
`,Su=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:c})=>{const u=l();return((e,t,n="window",r)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),t(hu,{children:t(mu,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a},{children:e}))})},$u=e=>`@media screen and (max-width: ${e}px)`,xu=f.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return m`
                ${$u(e.$minWidthBeforeWrap)} {
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
`,_u=f.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,Fu=f(x)`
    color: ${ac.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,ku=f.div`
    position: absolute;
    background: ${e=>e.$error?ac.Validation.Red.Border(e):ac.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return m`
                    opacity: 1;
                `;case"end":return m`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return m`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$minWidthBeforeWrap)return m`
                ${$u(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,Ou=({children:n,currentActive:r,error:i,className:o,minWidthBeforeWrap:a})=>{const[s,l]=n;return e(xu,Object.assign({className:o,$minWidthBeforeWrap:a},{children:[t(_u,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Fu,{}),t(_u,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(ku,{"data-id":"range-container-indicator",$position:r,$error:i,$minWidthBeforeWrap:a})]}))};f.input`
    ${xc("Body","regular")}
    color: ${ac.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ac.Neutral[3]};
    }

    ${e=>"number"===e.type?m`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?m`
                cursor: not-allowed;
            `:void 0}
`;const Bu=f.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${ac.Neutral[3]};
    background-color: transparent;
    border: none;
`,ju=f(w)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;f.div`
    display: flex;
    width: 100%;
`;const Au=f.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,Eu=f(Bu)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,Du=f(fu)`
    padding-right: 2.75rem;
`,Cu=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:a,disabled:c,className:u,readOnly:d,error:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:y,valueExtractor:b,valueToStringFunction:v,listExtractor:w,displayValueExtractor:S,onSelectOption:$,listStyleWidth:x,onShowOptions:F,onHideOptions:k,onRetry:O,optionsLoadState:B={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:A,renderListItem:E,renderCustomCallToAction:D}=n,C=_(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[P,I]=s(),[z,T]=s(),H=l(),N={from:l(),to:l()},[M,V]=s("none");o((()=>{I(null==r?void 0:r.from),T(null==r?void 0:r.to)}),[r]);const R=e=>t=>{t.stopPropagation(),t.preventDefault(),c||d||V("from"===e?"from":"to"===e&&P?"to":"from")},L=e=>{const t="from"===e?P:z;return S?S(t):b?b(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===j){let n=0;return N[e]&&N[e].current&&(n=N[e].current.getBoundingClientRect().width),Ec.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(t),n,120,8)}return t},q=e=>{!e&&k&&k(),e&&F&&F()},U=e=>{const n="from"===e?P:z;return n?A?A(n):t(vu,Object.assign({truncateType:j},{children:W(e,L(e))})):t(wu,Object.assign({truncateType:j},{children:W(e,i[e])}))},Q=e=>t(bu,Object.assign({onClick:R(e),ref:N[e]},{children:U(e)}));return e(Su,Object.assign({show:"none"!==M,"data-testid":C["data-testid"],error:h&&!("none"!==M),disabled:c,readOnly:d,testId:p,onBlur:()=>{q(!1),V("none"),P&&z||(T(void 0),I(void 0))},className:u},{children:[e(Au,{children:[t(Du,Object.assign({type:"button","data-testid":f||"selector",disabled:c,ref:H,onClick:R()},C,{children:e(Ou,Object.assign({currentActive:(()=>{switch(M){case"from":return"start";case"to":return"end";case"none":return M}})()},{children:[Q("from"),Q("to")]}))})),"none"===M&&P&&z&&!d&&!c&&t(Eu,Object.assign({onClick:e=>{e.stopPropagation(),I(void 0),T(void 0),$&&$({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:t(ju,{"aria-hidden":!0})}))]}),"none"!==M&&t(yu,{}),(()=>{if("none"===M)return null;const e=a[M];if(e&&e.length>0){const n="from"===M?P:z;return t(uu,{listItems:e,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=M)?I(n):T(n),q(!1),H&&H.current.focus(),$&&$({[i]:n},r),void("from"===i?(T(void 0),V("to"),q(!0)):V("none"));var n,r,i},onDismiss:()=>(V("none"),q(!1),H&&H.current.focus(),void(P&&z||(T(void 0),I(void 0)))),valueExtractor:b,listExtractor:w,listStyleWidth:x,visible:!0,enableSearch:g,searchPlaceholder:y,searchFunction:m,"data-testid":`${M}-dropdown-list`,selectedItems:n?[n]:[],onRetry:O,itemsLoadState:B[M],itemTruncationType:j,renderListItem:E,renderCustomCallToAction:D})}return null})()]}))};export{Cu as InputRangeSelect};
//# sourceMappingURL=index.js.map
