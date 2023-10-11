import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as S,SquareIcon as _}from"@lifesg/react-icons";import{CrossIcon as x}from"@lifesg/react-icons/cross";import{MagnifierIcon as $}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as F}from"@lifesg/react-icons/chevron-down";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B=function(){this.__data__=[],this.size=0};var j=function(e,t){return e===t||e!=e&&t!=t},A=j;var E=function(e,t){for(var n=e.length;n--;)if(A(e[n][0],t))return n;return-1},D=E,C=Array.prototype.splice;var P=E;var I=E;var z=E;var T=B,H=function(e){var t=this.__data__,n=D(t,e);return!(n<0)&&(n==t.length-1?t.pop():C.call(t,n,1),--this.size,!0)},N=function(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]},M=function(e){return I(this.__data__,e)>-1},R=function(e,t){var n=this.__data__,r=z(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function V(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}V.prototype.clear=T,V.prototype.delete=H,V.prototype.get=N,V.prototype.has=M,V.prototype.set=R;var L=V,W=L;var q=function(){this.__data__=new W,this.size=0};var U=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var Q=function(e){return this.__data__.get(e)};var G=function(e){return this.__data__.has(e)},X="object"==typeof O&&O&&O.Object===Object&&O,Z=X,K="object"==typeof self&&self&&self.Object===Object&&self,Y=Z||K||Function("return this")(),J=Y.Symbol,ee=J,te=Object.prototype,ne=te.hasOwnProperty,re=te.toString,ie=ee?ee.toStringTag:void 0;var oe=function(e){var t=ne.call(e,ie),n=e[ie];try{e[ie]=void 0;var r=!0}catch(e){}var i=re.call(e);return r&&(t?e[ie]=n:delete e[ie]),i},ae=Object.prototype.toString;var se=oe,le=function(e){return ae.call(e)},ce=J?J.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?se(e):le(e)};var de=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},he=ue,pe=de;var fe,ge=function(e){if(!pe(e))return!1;var t=he(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=Y["__core-js_shared__"],ye=(fe=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+fe:"";var be=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var we=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=ge,_e=be,xe=de,$e=we,Fe=/^\[object .+?Constructor\]$/,ke=Function.prototype,Oe=Object.prototype,Be=ke.toString,je=Oe.hasOwnProperty,Ae=RegExp("^"+Be.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ee=function(e){return!(!xe(e)||_e(e))&&(Se(e)?Ae:Fe).test($e(e))},De=function(e,t){return null==e?void 0:e[t]};var Ce=function(e,t){var n=De(e,t);return Ee(n)?n:void 0},Pe=Ce(Y,"Map"),Ie=Ce(Object,"create"),ze=Ie;var Te=function(){this.__data__=ze?ze(null):{},this.size=0};var He=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ne=Ie,Me=Object.prototype.hasOwnProperty;var Re=function(e){var t=this.__data__;if(Ne){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Me.call(t,e)?t[e]:void 0},Ve=Ie,Le=Object.prototype.hasOwnProperty;var We=Ie;var qe=Te,Ue=He,Qe=Re,Ge=function(e){var t=this.__data__;return Ve?void 0!==t[e]:Le.call(t,e)},Xe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=We&&void 0===t?"__lodash_hash_undefined__":t,this};function Ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ze.prototype.clear=qe,Ze.prototype.delete=Ue,Ze.prototype.get=Qe,Ze.prototype.has=Ge,Ze.prototype.set=Xe;var Ke=Ze,Ye=L,Je=Pe;var et=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var tt=function(e,t){var n=e.__data__;return et(t)?n["string"==typeof t?"string":"hash"]:n.map},nt=tt;var rt=tt;var it=tt;var ot=tt;var at=function(){this.size=0,this.__data__={hash:new Ke,map:new(Je||Ye),string:new Ke}},st=function(e){var t=nt(this,e).delete(e);return this.size-=t?1:0,t},lt=function(e){return rt(this,e).get(e)},ct=function(e){return it(this,e).has(e)},ut=function(e,t){var n=ot(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dt.prototype.clear=at,dt.prototype.delete=st,dt.prototype.get=lt,dt.prototype.has=ct,dt.prototype.set=ut;var ht=dt,pt=L,ft=Pe,gt=ht;var mt=L,yt=q,bt=U,vt=Q,wt=G,St=function(e,t){var n=this.__data__;if(n instanceof pt){var r=n.__data__;if(!ft||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new gt(r)}return n.set(e,t),this.size=n.size,this};function _t(e){var t=this.__data__=new mt(e);this.size=t.size}_t.prototype.clear=yt,_t.prototype.delete=bt,_t.prototype.get=vt,_t.prototype.has=wt,_t.prototype.set=St;var xt=_t;var $t=ht,Ft=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},kt=function(e){return this.__data__.has(e)};function Ot(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new $t;++t<n;)this.add(e[t])}Ot.prototype.add=Ot.prototype.push=Ft,Ot.prototype.has=kt;var Bt=Ot,jt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},At=function(e,t){return e.has(t)};var Et=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new Bt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=a?r(g,f,d,t,e,o):r(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!jt(t,(function(e,t){if(!At(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Dt=Y.Uint8Array,Ct=j,Pt=Et,It=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},zt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Tt=J?J.prototype:void 0,Ht=Tt?Tt.valueOf:void 0;var Nt=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Dt(e),new Dt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ct(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=It;case"[object Set]":var l=1&r;if(s||(s=zt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Pt(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Ht)return Ht.call(e)==Ht.call(t)}return!1};var Mt=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Rt=Array.isArray,Vt=Mt,Lt=Rt;var Wt=function(e,t,n){var r=t(e);return Lt(e)?r:Vt(r,n(e))};var qt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Ut=function(){return[]},Qt=Object.prototype.propertyIsEnumerable,Gt=Object.getOwnPropertySymbols,Xt=Gt?function(e){return null==e?[]:(e=Object(e),qt(Gt(e),(function(t){return Qt.call(e,t)})))}:Ut;var Zt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Kt=function(e){return null!=e&&"object"==typeof e},Yt=ue,Jt=Kt;var en=function(e){return Jt(e)&&"[object Arguments]"==Yt(e)},tn=Kt,nn=Object.prototype,rn=nn.hasOwnProperty,on=nn.propertyIsEnumerable,an=en(function(){return arguments}())?en:function(e){return tn(e)&&rn.call(e,"callee")&&!on.call(e,"callee")},sn={exports:{}};var ln=function(){return!1};!function(e,t){var n=Y,r=ln,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(sn,sn.exports);var cn=/^(?:0|[1-9]\d*)$/;var un=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&cn.test(e))&&e>-1&&e%1==0&&e<t};var dn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},hn=ue,pn=dn,fn=Kt,gn={};gn["[object Float32Array]"]=gn["[object Float64Array]"]=gn["[object Int8Array]"]=gn["[object Int16Array]"]=gn["[object Int32Array]"]=gn["[object Uint8Array]"]=gn["[object Uint8ClampedArray]"]=gn["[object Uint16Array]"]=gn["[object Uint32Array]"]=!0,gn["[object Arguments]"]=gn["[object Array]"]=gn["[object ArrayBuffer]"]=gn["[object Boolean]"]=gn["[object DataView]"]=gn["[object Date]"]=gn["[object Error]"]=gn["[object Function]"]=gn["[object Map]"]=gn["[object Number]"]=gn["[object Object]"]=gn["[object RegExp]"]=gn["[object Set]"]=gn["[object String]"]=gn["[object WeakMap]"]=!1;var mn=function(e){return fn(e)&&pn(e.length)&&!!gn[hn(e)]};var yn=function(e){return function(t){return e(t)}},bn={exports:{}};!function(e,t){var n=X,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(bn,bn.exports);var vn=mn,wn=yn,Sn=bn.exports,_n=Sn&&Sn.isTypedArray,xn=_n?wn(_n):vn,$n=Zt,Fn=an,kn=Rt,On=sn.exports,Bn=un,jn=xn,An=Object.prototype.hasOwnProperty;var En=function(e,t){var n=kn(e),r=!n&&Fn(e),i=!n&&!r&&On(e),o=!n&&!r&&!i&&jn(e),a=n||r||i||o,s=a?$n(e.length,String):[],l=s.length;for(var c in e)!t&&!An.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Bn(c,l))||s.push(c);return s},Dn=Object.prototype;var Cn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Dn)};var Pn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),In=Cn,zn=Pn,Tn=Object.prototype.hasOwnProperty;var Hn=ge,Nn=dn;var Mn=function(e){return null!=e&&Nn(e.length)&&!Hn(e)},Rn=En,Vn=function(e){if(!In(e))return zn(e);var t=[];for(var n in Object(e))Tn.call(e,n)&&"constructor"!=n&&t.push(n);return t},Ln=Mn;var Wn=function(e){return Ln(e)?Rn(e):Vn(e)},qn=Wt,Un=Xt,Qn=Wn;var Gn=function(e){return qn(e,Qn,Un)},Xn=Object.prototype.hasOwnProperty;var Zn=function(e,t,n,r,i,o){var a=1&n,s=Gn(e),l=s.length;if(l!=Gn(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Xn.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=a?r(m,g,u,t,e,o):r(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,n,r,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Kn=Ce(Y,"DataView"),Yn=Pe,Jn=Ce(Y,"Promise"),er=Ce(Y,"Set"),tr=Ce(Y,"WeakMap"),nr=ue,rr=we,ir="[object Map]",or="[object Promise]",ar="[object Set]",sr="[object WeakMap]",lr="[object DataView]",cr=rr(Kn),ur=rr(Yn),dr=rr(Jn),hr=rr(er),pr=rr(tr),fr=nr;(Kn&&fr(new Kn(new ArrayBuffer(1)))!=lr||Yn&&fr(new Yn)!=ir||Jn&&fr(Jn.resolve())!=or||er&&fr(new er)!=ar||tr&&fr(new tr)!=sr)&&(fr=function(e){var t=nr(e),n="[object Object]"==t?e.constructor:void 0,r=n?rr(n):"";if(r)switch(r){case cr:return lr;case ur:return ir;case dr:return or;case hr:return ar;case pr:return sr}return t});var gr=xt,mr=Et,yr=Nt,br=Zn,vr=fr,wr=Rt,Sr=sn.exports,_r=xn,xr="[object Arguments]",$r="[object Array]",Fr="[object Object]",kr=Object.prototype.hasOwnProperty;var Or=function(e,t,n,r,i,o){var a=wr(e),s=wr(t),l=a?$r:vr(e),c=s?$r:vr(t),u=(l=l==xr?Fr:l)==Fr,d=(c=c==xr?Fr:c)==Fr,h=l==c;if(h&&Sr(e)){if(!Sr(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new gr),a||_r(e)?mr(e,t,n,r,i,o):yr(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&kr.call(e,"__wrapped__"),f=d&&kr.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new gr),i(g,m,n,r,o)}}return!!h&&(o||(o=new gr),br(e,t,n,r,i,o))},Br=Kt;var jr=function e(t,n,r,i,o){return t===n||(null==t||null==n||!Br(t)&&!Br(n)?t!=t&&n!=n:Or(t,n,r,i,e,o))},Ar=xt,Er=jr;var Dr=de;var Cr=function(e){return e==e&&!Dr(e)},Pr=Cr,Ir=Wn;var zr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Tr=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Ar;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Er(u,c,3,r,d):h))return!1}}return!0},Hr=function(e){for(var t=Ir(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Pr(i)]}return t},Nr=zr;var Mr=function(e){var t=Hr(e);return 1==t.length&&t[0][2]?Nr(t[0][0],t[0][1]):function(n){return n===e||Tr(n,e,t)}},Rr=ue,Vr=Kt;var Lr=function(e){return"symbol"==typeof e||Vr(e)&&"[object Symbol]"==Rr(e)},Wr=Rt,qr=Lr,Ur=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qr=/^\w*$/;var Gr=function(e,t){if(Wr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!qr(e))||(Qr.test(e)||!Ur.test(e)||null!=t&&e in Object(t))},Xr=ht;function Zr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Zr.Cache||Xr),n}Zr.Cache=Xr;var Kr=Zr;var Yr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,ei=function(e){var t=Kr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Yr,(function(e,n,r,i){t.push(r?i.replace(Jr,"$1"):n||e)})),t}));var ti=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ni=Rt,ri=Lr,ii=J?J.prototype:void 0,oi=ii?ii.toString:void 0;var ai=function e(t){if("string"==typeof t)return t;if(ni(t))return ti(t,e)+"";if(ri(t))return oi?oi.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},si=ai;var li=Rt,ci=Gr,ui=ei,di=function(e){return null==e?"":si(e)};var hi=function(e,t){return li(e)?e:ci(e,t)?[e]:ui(di(e))},pi=Lr;var fi=function(e){if("string"==typeof e||pi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},gi=hi,mi=fi;var yi=function(e,t){for(var n=0,r=(t=gi(t,e)).length;null!=e&&n<r;)e=e[mi(t[n++])];return n&&n==r?e:void 0},bi=yi;var vi=function(e,t,n){var r=null==e?void 0:bi(e,t);return void 0===r?n:r};var wi=hi,Si=an,_i=Rt,xi=un,$i=dn,Fi=fi;var ki=function(e,t){return null!=e&&t in Object(e)},Oi=function(e,t,n){for(var r=-1,i=(t=wi(t,e)).length,o=!1;++r<i;){var a=Fi(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&$i(i)&&xi(a,i)&&(_i(e)||Si(e))};var Bi=jr,ji=vi,Ai=function(e,t){return null!=e&&Oi(e,t,ki)},Ei=Gr,Di=Cr,Ci=zr,Pi=fi;var Ii=yi;var zi=function(e){return function(t){return null==t?void 0:t[e]}},Ti=function(e){return function(t){return Ii(t,e)}},Hi=Gr,Ni=fi;var Mi=Mr,Ri=function(e,t){return Ei(e)&&Di(t)?Ci(Pi(e),t):function(n){var r=ji(n,e);return void 0===r&&r===t?Ai(n,e):Bi(t,r,3)}},Vi=function(e){return e},Li=Rt,Wi=function(e){return Hi(e)?zi(Ni(e)):Ti(e)};var qi=function(e){return"function"==typeof e?e:null==e?Vi:"object"==typeof e?Li(e)?Ri(e[0],e[1]):Mi(e):Wi(e)},Ui=qi,Qi=Mn,Gi=Wn;var Xi=function(e){return function(t,n,r){var i=Object(t);if(!Qi(t)){var o=Ui(n);t=Gi(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var Zi=/\s/;var Ki=function(e){for(var t=e.length;t--&&Zi.test(e.charAt(t)););return t},Yi=/^\s+/;var Ji=function(e){return e?e.slice(0,Ki(e)+1).replace(Yi,""):e},eo=de,to=Lr,no=/^[-+]0x[0-9a-f]+$/i,ro=/^0b[01]+$/i,io=/^0o[0-7]+$/i,oo=parseInt;var ao=function(e){if("number"==typeof e)return e;if(to(e))return NaN;if(eo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=eo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ji(e);var n=ro.test(e);return n||io.test(e)?oo(e.slice(2),n?2:8):no.test(e)?NaN:+e},so=1/0;var lo=function(e){return e?(e=ao(e))===so||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var co=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},uo=qi,ho=function(e){var t=lo(e),n=t%1;return t==t?n?t-n:t:0},po=Math.max;var fo=Xi((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ho(n);return i<0&&(i=po(r+i,0)),co(e,uo(t),i)})),go=jr;var mo=function(e,t){return go(e,t)};let yo=Co();const bo=e=>jo(e,yo);let vo=Co();bo.write=e=>jo(e,vo);let wo=Co();bo.onStart=e=>jo(e,wo);let So=Co();bo.onFrame=e=>jo(e,So);let _o=Co();bo.onFinish=e=>jo(e,_o);let xo=[];bo.setTimeout=(e,t)=>{let n=bo.now()+t,r=()=>{let e=xo.findIndex((e=>e.cancel==r));~e&&xo.splice(e,1),Oo-=~e?1:0},i={time:n,handler:e,cancel:r};return xo.splice($o(n),0,i),Oo+=1,Ao(),i};let $o=e=>~(~xo.findIndex((t=>t.time>e))||~xo.length);bo.cancel=e=>{wo.delete(e),So.delete(e),_o.delete(e),yo.delete(e),vo.delete(e)},bo.sync=e=>{Bo=!0,bo.batchedUpdates(e),Bo=!1},bo.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,bo.onStart(n)}return r.handler=e,r.cancel=()=>{wo.delete(n),t=null},r};let Fo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};bo.use=e=>Fo=e,bo.now="undefined"!=typeof performance?()=>performance.now():Date.now,bo.batchedUpdates=e=>e(),bo.catch=console.error,bo.frameLoop="always",bo.advance=()=>{"demand"!==bo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Do()};let ko=-1,Oo=0,Bo=!1;function jo(e,t){Bo?(t.delete(e),e(0)):(t.add(e),Ao())}function Ao(){ko<0&&(ko=0,"demand"!==bo.frameLoop&&Fo(Eo))}function Eo(){~ko&&(Fo(Eo),bo.batchedUpdates(Do))}function Do(){let e=ko;ko=bo.now();let t=$o(ko);t&&(Po(xo.splice(0,t),(e=>e.handler())),Oo-=t),Oo?(wo.flush(),yo.flush(e?Math.min(64,ko-e):16.667),So.flush(),vo.flush(),_o.flush()):ko=-1}function Co(){let e=new Set,t=e;return{add(n){Oo+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Oo-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Oo-=t.size,Po(t,(t=>t(n)&&e.add(t))),Oo+=e.size,t=e)}}}function Po(e,t){e.forEach((e=>{try{t(e)}catch(e){bo.catch(e)}}))}function Io(){}const zo={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function To(e,t){if(zo.arr(e)){if(!zo.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Ho=(e,t)=>e.forEach(t);function No(e,t,n){if(zo.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Mo=e=>zo.und(e)?[]:zo.arr(e)?e:[e];function Ro(e,t){if(e.size){const n=Array.from(e);e.clear(),Ho(n,t)}}const Vo=(e,...t)=>Ro(e,(e=>e(...t))),Lo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Wo,qo,Uo=null,Qo=!1,Go=Io;var Xo=Object.freeze({__proto__:null,get createStringInterpolator(){return Wo},get to(){return qo},get colors(){return Uo},get skipAnimation(){return Qo},get willAdvance(){return Go},assign:e=>{e.to&&(qo=e.to),e.now&&(bo.now=e.now),void 0!==e.colors&&(Uo=e.colors),null!=e.skipAnimation&&(Qo=e.skipAnimation),e.createStringInterpolator&&(Wo=e.createStringInterpolator),e.requestAnimationFrame&&bo.use(e.requestAnimationFrame),e.batchedUpdates&&(bo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Go=e.willAdvance),e.frameLoop&&(bo.frameLoop=e.frameLoop)}});const Zo=new Set;let Ko=[],Yo=[],Jo=0;const ea={get idle(){return!Zo.size&&!Ko.length},start(e){Jo>e.priority?(Zo.add(e),bo.onStart(ta)):(na(e),bo(ia))},advance:ia,sort(e){if(Jo)bo.onFrame((()=>ea.sort(e)));else{const t=Ko.indexOf(e);~t&&(Ko.splice(t,1),ra(e))}},clear(){Ko=[],Zo.clear()}};function ta(){Zo.forEach(na),Zo.clear(),bo(ia)}function na(e){Ko.includes(e)||ra(e)}function ra(e){Ko.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Ko,(t=>t.priority>e.priority)),0,e)}function ia(e){const t=Yo;for(let n=0;n<Ko.length;n++){const r=Ko[n];Jo=r.priority,r.idle||(Go(r),r.advance(e),r.idle||t.push(r))}return Jo=0,Yo=Ko,Yo.length=0,Ko=t,Ko.length>0}const oa="[-+]?\\d*\\.?\\d+",aa=oa+"%";function sa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const la=new RegExp("rgb"+sa(oa,oa,oa)),ca=new RegExp("rgba"+sa(oa,oa,oa,oa)),ua=new RegExp("hsl"+sa(oa,aa,aa)),da=new RegExp("hsla"+sa(oa,aa,aa,oa)),ha=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,pa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,fa=/^#([0-9a-fA-F]{6})$/,ga=/^#([0-9a-fA-F]{8})$/;function ma(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ya(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=ma(i,r,e+1/3),a=ma(i,r,e),s=ma(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ba(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function va(e){return(parseFloat(e)%360+360)%360/360}function wa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Sa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function _a(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=fa.exec(e))?parseInt(t[1]+"ff",16)>>>0:Uo&&void 0!==Uo[e]?Uo[e]:(t=la.exec(e))?(ba(t[1])<<24|ba(t[2])<<16|ba(t[3])<<8|255)>>>0:(t=ca.exec(e))?(ba(t[1])<<24|ba(t[2])<<16|ba(t[3])<<8|wa(t[4]))>>>0:(t=ha.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ga.exec(e))?parseInt(t[1],16)>>>0:(t=pa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ua.exec(e))?(255|ya(va(t[1]),Sa(t[2]),Sa(t[3])))>>>0:(t=da.exec(e))?(ya(va(t[1]),Sa(t[2]),Sa(t[3]))|wa(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const xa=(e,t,n)=>{if(zo.fun(e))return e;if(zo.arr(e))return xa({range:e,output:t,extrapolate:n});if(zo.str(e.output[0]))return Wo(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const $a=1.70158,Fa=1.525*$a,ka=$a+1,Oa=2*Math.PI/3,Ba=2*Math.PI/4.5,ja=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Aa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ka*e*e*e-$a*e*e,easeOutBack:e=>1+ka*Math.pow(e-1,3)+$a*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Fa)/2:(Math.pow(2*e-2,2)*((Fa+1)*(2*e-2)+Fa)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Oa),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Oa)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ba)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ba)/2+1,easeInBounce:e=>1-ja(1-e),easeOutBounce:ja,easeInOutBounce:e=>e<.5?(1-ja(1-2*e))/2:(1+ja(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ea.apply(this,arguments)}const Da=Symbol.for("FluidValue.get"),Ca=Symbol.for("FluidValue.observers"),Pa=e=>Boolean(e&&e[Da]),Ia=e=>e&&e[Da]?e[Da]():e,za=e=>e[Ca]||null;function Ta(e,t){let n=e[Ca];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Ha{constructor(e){if(this[Da]=void 0,this[Ca]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Na(this,e)}}const Na=(e,t)=>Va(e,Da,t);function Ma(e,t){if(e[Da]){let n=e[Ca];n||Va(e,Ca,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ra(e,t){let n=e[Ca];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ca]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Va=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),La=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Wa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,qa=new RegExp(`(${La.source})(%|[a-z]+)`,"i"),Ua=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Qa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ga=e=>{const[t,n]=Xa(e);if(!t||Lo())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Qa.test(n)?Ga(n):n||e},Xa=e=>{const t=Qa.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Za;const Ka=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Ya=e=>{Za||(Za=Uo?new RegExp(`(${Object.keys(Uo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ia(e).replace(Qa,Ga).replace(Wa,_a).replace(Za,_a))),n=t.map((e=>e.match(La).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>xa(Ea({},e,{output:t}))));return e=>{var n;const i=!qa.test(t[0])&&(null==(n=t.find((e=>qa.test(e))))?void 0:n.replace(La,""));let o=0;return t[0].replace(La,(()=>`${r[o++](e)}${i||""}`)).replace(Ua,Ka)}},Ja="react-spring: ",es=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ja}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},ts=es(console.warn);const ns=es(console.warn);function rs(e){return zo.str(e)&&("#"==e[0]||/\d/.test(e)||!Lo()&&Qa.test(e)||e in(Uo||{}))}const is=Lo()?o:a,os=()=>{const e=l(!1);return is((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function as(){const e=s()[1],t=os();return()=>{t.current&&e(Math.random())}}const ss=e=>o(e,ls),ls=[];function cs(e){const t=l();return o((()=>{t.current=e})),t.current}const us=Symbol.for("Animated:node"),ds=e=>e&&e[us],hs=(e,t)=>{return n=e,r=us,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ps=e=>e&&e[us]&&e[us].getPayload();class fs{constructor(){this.payload=void 0,hs(this,this)}getPayload(){return this.payload||[]}}class gs extends fs{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,zo.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new gs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return zo.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,zo.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class ms extends gs{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=xa({output:[e,e]})}static create(e){return new ms(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(zo.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=xa({output:[this.getValue(),e]})),this._value=0,super.reset()}}const ys={dependencies:null};class bs extends fs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return No(this.source,((n,r)=>{var i;(i=n)&&i[us]===i?t[r]=n.getValue(e):Pa(n)?t[r]=Ia(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ho(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return No(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ys.dependencies&&Pa(e)&&ys.dependencies.add(e);const t=ps(e);t&&Ho(t,(e=>this.add(e)))}}class vs extends bs{constructor(e){super(e)}static create(e){return new vs(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(ws)),!0)}}function ws(e){return(rs(e)?ms:gs).create(e)}function Ss(e){const t=ds(e);return t?t.constructor:zo.arr(e)?vs:rs(e)?ms:gs}function _s(){return _s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_s.apply(this,arguments)}const xs=(e,t)=>{const n=!zo.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=n&&u((e=>{s.current=function(e,t){e&&(zo.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;ys.dependencies=n,e.style&&(e=_s({},e,{style:t.createAnimatedStyle(e.style)}));return e=new bs(e),ys.dependencies=null,[e,n]}(i,t),p=as(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new $s(f,h),m=l();is((()=>(m.current=g,Ho(h,(e=>Ma(e,g))),()=>{m.current&&(Ho(m.current.deps,(e=>Ra(e,m.current))),bo.cancel(m.current.update))}))),o(f,[]),ss((()=>()=>{const e=m.current;Ho(e.deps,(t=>Ra(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,_s({},y,{ref:c}))}))};class $s{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&bo.write(this.update)}}const Fs=Symbol.for("AnimatedComponent"),ks=e=>zo.str(e)?e:e&&zo.str(e.displayName)?e.displayName:zo.fun(e)&&e.name||null;function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Os.apply(this,arguments)}function Bs(e,...t){return zo.fun(e)?e(...t):e}const js=(e,t)=>!0===e||!!(t&&e&&(zo.fun(e)?e(t):Mo(e).includes(t))),As=(e,t)=>zo.obj(e)?t&&e[t]:e,Es=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ds=e=>e,Cs=(e,t=Ds)=>{let n=Ps;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);zo.und(n)||(r[i]=n)}return r},Ps=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Is={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function zs(e){const t=function(e){const t={};let n=0;if(No(e,((e,r)=>{Is[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return No(e,((e,r)=>r in t||(n[r]=e))),n}return Os({},e)}function Ts(e){return e=Ia(e),zo.arr(e)?e.map(Ts):rs(e)?Xo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Hs(e){return zo.fun(e)||zo.arr(e)&&zo.obj(e[0])}const Ns=Os({},{tension:170,friction:26},{mass:1,damping:1,easing:Aa.linear,clamp:!1});class Ms{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Ns)}}function Rs(e,t){if(zo.und(t.decay)){const n=!zo.und(t.tension)||!zo.und(t.friction);!n&&zo.und(t.frequency)&&zo.und(t.damping)&&zo.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Vs=[];class Ls{constructor(){this.changed=!1,this.values=Vs,this.toValues=null,this.fromValues=Vs,this.to=void 0,this.from=void 0,this.config=new Ms,this.immediate=!1}}function Ws(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=js(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{zo.und(n.pause)||(i.paused=js(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||js(e,t)),c=Bs(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-bo.now()}function p(){c>0&&!Xo.skipAnimation?(i.delayed=!0,u=bo.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Os({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const qs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Gs(e.get()):t.every((e=>e.noop))?Us(e.get()):Qs(e.get(),t.every((e=>e.finished))),Us=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Qs=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Gs=e=>({value:e,cancelled:!0,finished:!1});function Xs(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Cs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Gs(r)||i!==n.asyncId&&Qs(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Ks,a=new Ys;return(async()=>{if(Xo.skipAnimation)throw Zs(n),a.result=Qs(r,!1),d(a),a;p(o);const s=zo.obj(e)?Os({},e):Os({},t,{to:e});s.parentId=i,No(c,((e,t)=>{zo.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Xo.skipAnimation)return Zs(n),Qs(r,!1);try{let t;t=zo.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Qs(r.get(),!0,!1)}catch(e){if(e instanceof Ks)g=e.result;else{if(!(e instanceof Ys))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return zo.fun(a)&&bo.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Zs(e,t){Ro(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Ks extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Ys extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Js=e=>e instanceof tl;let el=1;class tl extends Ha{constructor(...e){super(...e),this.id=el++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ds(this);return e&&e.getValue()}to(...e){return Xo.to(this,e)}interpolate(...e){return ts(`${Ja}The "interpolate" function is deprecated in v9 (use "to" instead)`),Xo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ta(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ea.sort(this),Ta(this,{type:"priority",parent:this,priority:e})}}const nl=Symbol.for("SpringPhase"),rl=e=>(1&e[nl])>0,il=e=>(2&e[nl])>0,ol=e=>(4&e[nl])>0,al=(e,t)=>t?e[nl]|=3:e[nl]&=-3,sl=(e,t)=>t?e[nl]|=4:e[nl]&=-5;class ll extends tl{constructor(e,t){if(super(),this.key=void 0,this.animation=new Ls,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!zo.und(e)||!zo.und(t)){const n=zo.obj(e)?Os({},e):Os({},t,{from:e});zo.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(il(this)||this._state.asyncTo)||ol(this)}get goal(){return Ia(this.animation.to)}get velocity(){const e=ds(this);return e instanceof gs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return rl(this)}get isAnimating(){return il(this)}get isPaused(){return ol(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=ps(r.to);!a&&Pa(r.to)&&(o=Mo(Ia(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ms?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=zo.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(zo.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!zo.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=ds(this),l=s.getValue();if(t){const e=Ia(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return bo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(il(this)){const{to:e,config:t}=this.animation;bo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return zo.und(e)?(n=this.queue||[],this.queue=[]):n=[zo.obj(e)?e:Os({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>qs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Zs(this._state,e&&this._lastCallId),bo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=zo.obj(n)?n[t]:n,(null==n||Hs(n))&&(n=void 0),r=zo.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return rl(this)||(e.reverse&&([n,r]=[r,n]),r=Ia(r),zo.und(r)?ds(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Os({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Cs(n,((e,t)=>/^on/.test(t)?As(e,r):e))),gl(this,n,"onProps"),ml(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ws(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{ol(this)||(sl(this,!0),Vo(a.pauseQueue),ml(this,"onPause",Qs(this,cl(this,this.animation.to)),this))},resume:()=>{ol(this)&&(sl(this,!1),il(this)&&this._resume(),Vo(a.resumeQueue),ml(this,"onResume",Qs(this,cl(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=ul(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Gs(this));const r=!zo.und(e.to),i=!zo.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Gs(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!zo.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!To(d,c);h&&(s.from=d),d=Ia(d);const p=!To(u,l);p&&this._focus(u);const f=Hs(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Rs(n=Os({},n),t),t=Os({},n,t)),Rs(e,t),Object.assign(e,t);for(const t in Ns)null==e[t]&&(e[t]=Ns[t]);let{mass:r,frequency:i,damping:o}=e;zo.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Bs(t.config,o),t.config!==a.config?Bs(a.config,o):void 0);let b=ds(this);if(!b||zo.und(u))return n(Qs(this,!0));const v=zo.und(t.reset)?i&&!t.default:!zo.und(d)&&js(t.reset,o),w=v?d:this.get(),S=Ts(u),_=zo.num(S)||zo.arr(S)||rs(S),x=!f&&(!_||js(a.immediate||t.immediate,o));if(p){const e=Ss(u);if(e!==b.constructor){if(!x)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(S)}}const $=b.constructor;let F=Pa(u),k=!1;if(!F){const e=v||!rl(this)&&h;(p||e)&&(k=To(Ts(w),S),F=!k),(To(s.immediate,x)||x)&&To(g.decay,m)&&To(g.velocity,y)||(F=!0)}if(k&&il(this)&&(s.changed&&!v?F=!0:F||this._stop(l)),!f&&((F||Pa(l))&&(s.values=b.getPayload(),s.toValues=Pa(u)?null:$==ms?[1]:Mo(S)),s.immediate!=x&&(s.immediate=x,x||v||this._set(l)),F)){const{onRest:e}=s;Ho(fl,(e=>gl(this,t,e)));const r=Qs(this,cl(this,l));Vo(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&bo.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?Bs(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),f?n(Xs(t.to,t,this._state,this)):F?this._start():il(this)&&!p?this._pendingCalls.add(n):n(Us(w))}_focus(e){const t=this.animation;e!==t.to&&(za(this)&&this._detach(),t.to=e,za(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Pa(t)&&(Ma(t,this),Js(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Pa(e)&&Ra(e,this)}_set(e,t=!0){const n=Ia(e);if(!zo.und(n)){const e=ds(this);if(!e||!To(n,e.getValue())){const r=Ss(n);e&&e.constructor==r?e.setValue(n):hs(this,r.create(n)),e&&bo.batchedUpdates((()=>{this._onChange(n,t)}))}}return ds(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ml(this,"onStart",Qs(this,cl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Bs(this.animation.onChange,e,this)),Bs(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ds(this).reset(Ia(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),il(this)||(al(this,!0),ol(this)||this._resume())}_resume(){Xo.skipAnimation?this.finish():ea.start(this)}_stop(e,t){if(il(this)){al(this,!1);const n=this.animation;Ho(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ta(this,{type:"idle",parent:this});const r=t?Gs(this.get()):Qs(this.get(),cl(this,null!=e?e:n.to));Vo(this._pendingCalls,r),n.changed&&(n.changed=!1,ml(this,"onRest",r,this))}}}function cl(e,t){const n=Ts(t);return To(Ts(e.get()),n)}function ul(e,t=e.loop,n=e.to){let r=Bs(t);if(r){const i=!0!==r&&zs(r),o=(i||e).reverse,a=!i||i.reset;return dl(Os({},e,{loop:t,default:!1,pause:void 0,to:!o||Hs(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function dl(e){const{to:t,from:n}=e=zs(e),r=new Set;return zo.obj(t)&&pl(t,r),zo.obj(n)&&pl(n,r),e.keys=r.size?Array.from(r):null,e}function hl(e){const t=dl(e);return zo.und(t.default)&&(t.default=Cs(t)),t}function pl(e,t){No(e,((e,n)=>null!=e&&t.add(n)))}const fl=["onStart","onRest","onChange","onPause","onResume"];function gl(e,t,n){e.animation[n]=t[n]!==Es(t,n)?As(t[n],e.key):void 0}function ml(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const yl=["onStart","onChange","onRest"];let bl=1;class vl{constructor(e,t){this.id=bl++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Os({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];zo.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(dl(e)),this}start(e){let{queue:t}=this;return e?t=Mo(e).map(dl):this.queue=[],this._flush?this._flush(this,t):(kl(this,t),wl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Ho(Mo(t),(t=>n[t].stop(!!e)))}else Zs(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(zo.und(e))this.start({pause:!0});else{const t=this.springs;Ho(Mo(e),(e=>t[e].pause()))}return this}resume(e){if(zo.und(e))this.start({pause:!1});else{const t=this.springs;Ho(Mo(e),(e=>t[e].resume()))}return this}each(e){No(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ro(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ro(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ro(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}bo.onFrame(this._onFrame)}}function wl(e,t){return Promise.all(t.map((t=>Sl(e,t)))).then((t=>qs(e,t)))}async function Sl(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=zo.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=zo.arr(i)||zo.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ho(yl,(n=>{const r=t[n];if(zo.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Vo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Es(t,"cancel");(u||p&&d.asyncId)&&h.push(Ws(++e._lastAsyncId,{props:t,state:d,actions:{pause:Io,resume:Io,start(t,n){p?(Zs(d,e._lastAsyncId),n(Gs(e))):(t.onRest=s,n(Xs(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=qs(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=ul(t,a,i);if(n)return kl(e,[n]),Sl(e,n,!0)}return l&&bo.batchedUpdates((()=>l(f,e,e.item))),f}function _l(e,t){const n=Os({},e.springs);return t&&Ho(Mo(t),(e=>{zo.und(e.keys)&&(e=dl(e)),zo.obj(e.to)||(e=Os({},e,{to:void 0})),Fl(n,e,(e=>$l(e)))})),xl(e,n),n}function xl(e,t){No(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ma(t,e))}))}function $l(e,t){const n=new ll;return n.key=e,t&&Ma(n,t),n}function Fl(e,t,n){t.keys&&Ho(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function kl(e,t){Ho(t,(t=>{Fl(e.springs,t,(t=>$l(t,e)))}))}const Ol=["children"],Bl=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Ol);const i=d(jl),a=n.pause||!!i.pause,c=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=l(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:c})),[a,c]);const{Provider:u}=jl;return r.createElement(u,{value:n},t)},jl=(Al=Bl,El={},Object.assign(Al,r.createContext(El)),Al.Provider._context=Al,Al.Consumer._context=Al,Al);var Al,El;Bl.Provider=jl.Provider,Bl.Consumer=jl.Consumer;const Dl=()=>{const e=[],t=function(t){ns(`${Ja}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Ho(e,((e,i)=>{if(zo.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Ho(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ho(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ho(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Ho(e,((e,r)=>{if(zo.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Ho(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ho(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return zo.fun(e)?e(n,t):e};return t._getProps=n,t};function Cl(e,t){const n=zo.fun(e),[[r],i]=function(e,t,n){const r=zo.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?Dl():void 0),[]),o=l(0),a=as(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=_l(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?wl(e,t):new Promise((r=>{xl(e,n),s.queue.push((()=>{r(wl(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=cs(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new vl(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=hl(n))}}h((()=>{Ho(c.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>_l(e,u[t]))),m=d(Bl),y=cs(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);is((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],Ho(e,(e=>e()))),Ho(c.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ss((()=>()=>{Ho(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>Os({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Pl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Pl||(Pl={}));class Il extends tl{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=xa(...t);const n=this._get(),r=Ss(n);hs(this,r.create(n))}advance(e){const t=this._get();To(t,this.get())||(ds(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Tl(this._active)&&Hl(this)}_get(){const e=zo.arr(this.source)?this.source.map(Ia):Mo(Ia(this.source));return this.calc(...e)}_start(){this.idle&&!Tl(this._active)&&(this.idle=!1,Ho(ps(this),(e=>{e.done=!1})),Xo.skipAnimation?(bo.batchedUpdates((()=>this.advance())),Hl(this)):ea.start(this))}_attach(){let e=1;Ho(Mo(this.source),(t=>{Pa(t)&&Ma(t,this),Js(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ho(Mo(this.source),(e=>{Pa(e)&&Ra(e,this)})),this._active.clear(),Hl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Mo(this.source).reduce(((e,t)=>Math.max(e,(Js(t)?t.priority:0)+1)),0))}}function zl(e){return!1!==e.idle}function Tl(e){return!e.size||Array.from(e).every(zl)}function Hl(e){e.idle||(e.idle=!0,Ho(ps(e),(e=>{e.done=!0})),Ta(e,{type:"idle",parent:e}))}function Nl(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Xo.assign({createStringInterpolator:Ya,to:(e,t)=>new Il(e,t)});const Ml=["style","children","scrollTop","scrollLeft","viewBox"],Rl=/^--/;function Vl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Rl.test(e)||Wl.hasOwnProperty(e)&&Wl[e]?(""+t).trim():t+"px"}const Ll={};let Wl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const ql=["Webkit","Ms","Moz","O"];Wl=Object.keys(Wl).reduce(((e,t)=>(ql.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Wl);const Ul=["x","y","z"],Ql=/^(matrix|translate|scale|rotate|skew)/,Gl=/^(translate)/,Xl=/^(rotate|skew)/,Zl=(e,t)=>zo.num(e)&&0!==e?e+t:e,Kl=(e,t)=>zo.arr(e)?e.every((e=>Kl(e,t))):zo.num(e)?e===t:parseFloat(e)===t;class Yl extends bs{constructor(e){let{x:t,y:n,z:r}=e,i=Nl(e,Ul);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Zl(e,"px"))).join(",")})`,Kl(e,0)]))),No(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Ql.test(t)){if(delete i[t],zo.und(e))return;const n=Gl.test(t)?"px":Xl.test(t)?"deg":"";o.push(Mo(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Zl(i,n)})`,Kl(i,0)]:e=>[`${t}(${e.map((e=>Zl(e,n))).join(",")})`,Kl(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Jl(o,a)),super(i)}}class Jl extends Ha{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ho(this.inputs,((n,r)=>{const i=Ia(n[0]),[o,a]=this.transforms[r](zo.arr(i)?i:n.map(Ia));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ho(this.inputs,(e=>Ho(e,(e=>Pa(e)&&Ma(e,this)))))}observerRemoved(e){0==e&&Ho(this.inputs,(e=>Ho(e,(e=>Pa(e)&&Ra(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ta(this,e)}}const ec=["scrollTop","scrollLeft"];Xo.assign({batchedUpdates:p,createStringInterpolator:Ya,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const tc=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new bs(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=ks(e)||"Anonymous";return(e=zo.str(e)?o[e]||(o[e]=xs(e,i)):e[Fs]||(e[Fs]=xs(e,i))).displayName=`Animated(${t})`,e};return No(e,((t,n)=>{zo.arr(e)&&(n=ks(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=Nl(r,Ml),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Ll[t]||(Ll[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Vl(t,i[t]);Rl.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Yl(e),getComponentProps:e=>Nl(e,ec)}),nc=tc.animated,rc=(e,t,n)=>t?vi(n,t)||vi(e,t):n||e,ic=(e,t)=>{const n=t||e.defaultValue;return vi(e.collections,n)};var oc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(oc||(oc={}));const ac={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},sc=e=>t=>{const n=t.theme,r=ic(ac,n[oc.colorScheme]);return n.options&&n.options.color?rc(r,e,n.options.color):rc(r,e)},lc={Brand:{1:sc("Brand.1"),2:sc("Brand.2"),3:sc("Brand.3"),4:sc("Brand.4"),5:sc("Brand.5"),6:sc("Brand.6")},Primary:sc("Primary"),PrimaryDark:sc("PrimaryDark"),Secondary:sc("Secondary"),Accent:{Light:{1:sc("Accent.Light.1"),2:sc("Accent.Light.2"),3:sc("Accent.Light.3"),4:sc("Accent.Light.4"),5:sc("Accent.Light.5"),6:sc("Accent.Light.6")},Dark:{1:sc("Accent.Dark.1"),2:sc("Accent.Dark.2"),3:sc("Accent.Dark.3")}},Neutral:{1:sc("Neutral.1"),2:sc("Neutral.2"),3:sc("Neutral.3"),4:sc("Neutral.4"),5:sc("Neutral.5"),6:sc("Neutral.6"),7:sc("Neutral.7"),8:sc("Neutral.8")},Validation:{Green:{Text:sc("Validation.Green.Text"),Icon:sc("Validation.Green.Icon"),Border:sc("Validation.Green.Border"),Background:sc("Validation.Green.Background")},Orange:{Text:sc("Validation.Orange.Text"),Icon:sc("Validation.Orange.Icon"),Border:sc("Validation.Orange.Border"),Background:sc("Validation.Orange.Background"),Badge:sc("Validation.Orange.Badge")},Red:{Text:sc("Validation.Red.Text"),Icon:sc("Validation.Red.Icon"),Border:sc("Validation.Red.Border"),Background:sc("Validation.Red.Background")},Blue:{Text:sc("Validation.Blue.Text"),Icon:sc("Validation.Blue.Icon"),Border:sc("Validation.Blue.Border"),Background:sc("Validation.Blue.Background")}},Shadow:{Accent:sc("Shadow.Accent"),Red:sc("Shadow.Red"),Elevation:sc("Shadow.Elevation")}},cc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},uc=e=>Object.keys(cc).reduce(((t,n)=>{const r=cc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),dc=uc("max-width"),hc=(uc("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),pc=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,fc=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||lc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${pc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,gc=f(fc)`
    animation-delay: -0.45s;
`,mc=f(fc)`
    animation-delay: -0.3s;
`,yc=f(fc)`
    animation-delay: -0.15s;
`,bc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},vc={collections:{base:{D1:{fontFamily:bc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},wc=e=>t=>{const n=t.theme,r=ic(vc,n[oc.textStyleScheme]);return n.options&&n.options.textStyle?rc(r,e,n.options.textStyle):rc(r,e)},Sc={D1:{fontFamily:wc("D1.fontFamily"),fontSize:wc("D1.fontSize"),fontWeight:wc("D1.fontWeight"),lineHeight:wc("D1.lineHeight"),letterSpacing:wc("D1.letterSpacing")},D2:{fontFamily:wc("D2.fontFamily"),fontSize:wc("D2.fontSize"),fontWeight:wc("D2.fontWeight"),lineHeight:wc("D2.lineHeight"),letterSpacing:wc("D2.letterSpacing")},D3:{fontFamily:wc("D3.fontFamily"),fontSize:wc("D3.fontSize"),fontWeight:wc("D3.fontWeight"),lineHeight:wc("D3.lineHeight"),letterSpacing:wc("D3.letterSpacing")},D4:{fontFamily:wc("D4.fontFamily"),fontSize:wc("D4.fontSize"),fontWeight:wc("D4.fontWeight"),lineHeight:wc("D4.lineHeight"),letterSpacing:wc("D4.letterSpacing")},DBody:{fontFamily:wc("DBody.fontFamily"),fontSize:wc("DBody.fontSize"),fontWeight:wc("DBody.fontWeight"),lineHeight:wc("DBody.lineHeight"),letterSpacing:wc("DBody.letterSpacing")},H1:{fontFamily:wc("H1.fontFamily"),fontSize:wc("H1.fontSize"),fontWeight:wc("H1.fontWeight"),lineHeight:wc("H1.lineHeight"),letterSpacing:wc("H1.letterSpacing")},H2:{fontFamily:wc("H2.fontFamily"),fontSize:wc("H2.fontSize"),fontWeight:wc("H2.fontWeight"),lineHeight:wc("H2.lineHeight"),letterSpacing:wc("H2.letterSpacing")},H3:{fontFamily:wc("H3.fontFamily"),fontSize:wc("H3.fontSize"),fontWeight:wc("H3.fontWeight"),lineHeight:wc("H3.lineHeight"),letterSpacing:wc("H3.letterSpacing")},H4:{fontFamily:wc("H4.fontFamily"),fontSize:wc("H4.fontSize"),fontWeight:wc("H4.fontWeight"),lineHeight:wc("H4.lineHeight"),letterSpacing:wc("H4.letterSpacing")},H5:{fontFamily:wc("H5.fontFamily"),fontSize:wc("H5.fontSize"),fontWeight:wc("H5.fontWeight"),lineHeight:wc("H5.lineHeight"),letterSpacing:wc("H5.letterSpacing")},H6:{fontFamily:wc("H6.fontFamily"),fontSize:wc("H6.fontSize"),fontWeight:wc("H6.fontWeight"),lineHeight:wc("H6.lineHeight"),letterSpacing:wc("H6.letterSpacing")},Body:{fontFamily:wc("Body.fontFamily"),fontSize:wc("Body.fontSize"),fontWeight:wc("Body.fontWeight"),lineHeight:wc("Body.lineHeight"),letterSpacing:wc("Body.letterSpacing")},BodySmall:{fontFamily:wc("BodySmall.fontFamily"),fontSize:wc("BodySmall.fontSize"),fontWeight:wc("BodySmall.fontWeight"),lineHeight:wc("BodySmall.lineHeight"),letterSpacing:wc("BodySmall.letterSpacing")},XSmall:{fontFamily:wc("XSmall.fontFamily"),fontSize:wc("XSmall.fontSize"),fontWeight:wc("XSmall.fontWeight"),lineHeight:wc("XSmall.lineHeight"),letterSpacing:wc("XSmall.letterSpacing")}},_c=e=>{switch(e){case 700:case"bold":return bc.Bold;case 600:case"semibold":return bc.Semibold;case 300:case"light":return bc.Light;case 400:case"regular":return bc.Regular;default:return""}},xc=(e,t)=>n=>{var r;const i=Sc[e].fontFamily(n),o=Sc[e].fontWeight(n);return Object.values(bc).includes(i)?m`
                font-family: ${_c(t)||_c(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=$c(t)||o)&&void 0!==r?r:"normal"};
        `},$c=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Fc=(e,t,n=!1)=>r=>{const i=Sc[e],o=i.fontSize(r);return m`
            ${xc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},kc=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `;var Oc;!function(e){e.D1=f.h1`
        ${e=>m`
                ${Fc("D1",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${Fc("D2",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${Fc("D3",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${Fc("D4",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${Fc("DBody",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${Fc("H1",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${Fc("H2",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${Fc("H3",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${Fc("H4",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${Fc("H5",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${Fc("H6",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${Fc("Body",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${Fc("BodySmall",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${Fc("XSmall",e.weight,e.paragraph)}
                color: ${lc.Neutral[1]};
                ${kc(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Ac(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ac(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Oc||(Oc={}));const Bc=f.a`
    ${e=>m`
            ${Fc(e.textStyle,e.weight)}
            color: ${lc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${lc.Secondary};

                svg {
                    color: ${lc.Secondary};
                }
            }
        `}
`,jc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ac=n=>{var{external:r=!1,children:i}=n,o=k(n,["external","children"]);return e(Bc,Object.assign({},o,{children:[i,r&&t(jc,{})]}))};var Ec;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ec||(Ec={})),f.button`
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
                    background-color: ${lc.Neutral[8](e)};
                    border: 1px solid ${lc.Primary(e)};

                    span {
                        color: ${lc.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${lc.Neutral[8](e)};
                    border: 1px solid ${lc.Neutral[5](e)};

                    span {
                        color: ${lc.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${lc.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${lc.Neutral[3](e)};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${lc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${lc.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${lc.Primary(e)};
                    border: 1px solid transparent;

                    ${dc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${lc.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${Fc("H5","semibold")}
                    }

                    ${dc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${Fc("H4","semibold")}
                    }

                    ${dc.mobileS} {
                        height: auto;
                    }
                `}
`;const Dc=f((({color:n,className:r,size:i=18})=>e(hc,Object.assign({className:r,$size:i,$color:n},{children:[t(fc,{id:"inner1",$size:i-2,$borderWidth:2}),t(gc,{id:"inner2",$size:i-2,$borderWidth:2}),t(mc,{id:"inner3",$size:i-2,$borderWidth:2}),t(yc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=lc.Primary(e);break;case"disabled":t=lc.Neutral[3](e);break;default:t=lc.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Cc;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Cc||(Cc={}));const Pc=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Ic=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return m`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Pc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?lc.Neutral[4](e):e.$unchecked?lc.Accent.Light[2](e):lc.Primary(e)};
    }
`,zc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Tc=f(nc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Hc=f.ul`
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
        background: ${lc.Neutral[4]};
        border-right: 5px solid ${lc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${dc.mobileL} {
        max-height: 15rem;
    }
`,Nc=f.li`
    :hover,
    :focus,
    :active {
        background: ${lc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${lc.Accent.Light[5]};
            `}}
`,Mc=f.button`
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
        outline-color: ${lc.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Rc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Vc=f.div`
    ${Fc("Body","regular")}
    color: ${lc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}
`,Lc=f.div`
    color: ${lc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${Fc("BodySmall","semibold")}
                `:m`
                    ${Fc("Body","regular")}
                `}
`,Wc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Vc} {
                        display: inline;
                    }

                    ${Lc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,qc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Uc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Qc=f((n=>{var{className:r,checked:i,disabled:a,indeterminate:s,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=k(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=l();o((()=>{p.current.indeterminate=s}),[s]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Ic,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,$displaySize:d,$disabled:a,$unchecked:!(s||i||a)},{children:[t(zc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:a},h)),s?t(v,{"data-testid":"indeterminate"}):i?t(w,{"data-testid":"checkmark"}):a?t(S,{"data-testid":"disabled-empty-checkbox"}):t(_,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Gc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Xc=f.button`
    ${Fc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${lc.Primary(e)};\n\t\t`}
`,Zc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Kc=f(Oc.Body)``,Yc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${lc.Validation.Red.Icon};
`,Jc=f.button`
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
                background-color: ${lc.Neutral[7]};
            `}
    }
`,eu=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(Jc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),tu={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${lc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${lc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${lc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${lc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${lc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${lc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},nu=e=>t=>{var n;const r=t.theme,i=ic(tu,r[oc.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?rc(i,e,r.options.designToken):rc(i,e)},ru=nu("InputBoxShadow"),iu=nu("InputErrorBoxShadow");nu("ElevationBoxShadow"),nu("Table.Header"),nu("Table.Cell.Primary"),nu("Table.Cell.Secondary"),nu("Table.Cell.Selected"),nu("Table.Cell.Hover");f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${lc.Neutral[5]};
    border-radius: 4px;
    background: ${lc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${lc.Accent.Light[1]};
        box-shadow: ${ru};
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
                background: ${lc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${lc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${lc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${lc.Validation.Red.Border};
                    box-shadow: ${iu};
                }
            `:void 0}
`;const ou=f.input`
    ${Fc("Body","regular")}
    color: ${lc.Neutral[1]};
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
        color: ${lc.Neutral[3]};
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
`,au=f.li`
    background: ${lc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,su=f(ou)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,lu=f($)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${lc.Neutral[3]};
`,cu=f(eu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${lc.Neutral[3]};
    cursor: pointer;
`,uu=f(x)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${lc.Neutral[3]};
`,du=c(((n,r)=>{const{onClear:i}=n,o=k(n,["onClear"]);return e(au,{children:[t(lu,{}),t(su,Object.assign({ref:r},o)),o.value&&t(cu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(uu,{})}))]},"search")})),hu=r=>{var{listItems:i,listExtractor:a,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:S,onRetry:_,itemsLoadState:x="success",itemTruncationType:$="end",itemMaxLines:F=2,labelDisplayType:O="inline",renderListItem:B,onBlur:j,hideNoResultsDisplay:A,renderCustomCallToAction:E}=r,D=k(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,P]=s(0),[I,z]=s(""),[T,H]=s(i),[N,M]=s(0),R=Cl({height:N}),V=l(),L=l(),W=l([]),q=l(),U=l(),Q=l(C),G=l(T),X=e=>{Q.current=e,P(e)},Z=e=>{G.current=e,H(e)};o((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),o((()=>{ee(I)}),[I]),o((()=>{if(z(""),h){if(setTimeout((()=>{M(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else M(0)}),[h]),o((()=>{if(h){const e=te();M(e)}}),[T,x]),o((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>a?a(e):e.toString(),Y=e=>{if("inline"!==O)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return Cc.getTextWidth(e,"1.125rem 'Open Sans'")>t*F},J=e=>!!fo(w,(t=>mo(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(V&&V.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},re=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{_&&_()},se=()=>{j&&j()},le=r=>e(n,{children:[t(qc,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r})),t(Uc,Object.assign({$maxLines:F,"aria-hidden":!0},{children:r}))]}),ce=n=>{const r=K(n),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":O;return e(Wc,Object.assign({$labelDisplayType:l},{children:[t(Vc,Object.assign({$truncateType:$,$maxLines:F,"aria-label":i},{children:"middle"===$&&a?le(i):i})),o&&t(Lc,Object.assign({$truncateType:$,$maxLines:F,$labelDisplayType:O,"aria-label":o},{children:"middle"===$&&s?le(o):o}))]}))},ue=()=>{if(!_||_&&"success"===x)return T.map(((n,r)=>t(Nc,Object.assign({$checked:J(n)&&!v},{children:e(Mc,Object.assign({$hasNextLineLabel:"next-line"===O&&T.length>0&&a&&"string"!=typeof a(T[0]),onClick:e=>{re(e,n)},ref:e=>W.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Qc,{checked:J(n),displaySize:"small"}),B?B(n,{selected:J(n)}):ce(n)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(n,r))))},de=()=>{if(v&&T.length>0&&!I&&"success"===x)return t(Gc,{children:t(Xc,Object.assign({onClick:S,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!A&&(I||!p)&&0===T.length&&"success"===x)return e(Zc,Object.assign({"data-testid":"list-no-results"},{children:[t(Yc,{"data-testid":"no-result-icon"}),t(Kc,{children:"No results found."})]}),"noResults")},pe=()=>{if(_&&"loading"===x)return e(Zc,Object.assign({"data-testid":"list-loading"},{children:[t(Dc,{$buttonStyle:"secondary",size:24}),t(Kc,{children:"Loading..."})]}),"loading")},fe=()=>{if(_&&"fail"===x)return e(Zc,Object.assign({"data-testid":"list-fail"},{children:[t(Yc,{"data-testid":"load-error-icon"}),t(Kc,{children:"Failed to load."}),t(Xc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(Tc,Object.assign({style:R,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:V},{children:[(()=>{if(h)return e(Hc,Object.assign({ref:L,"data-testid":"dropdown-list",width:d,role:"list"},D,{children:[(p||m)&&"success"===x?t(du,{ref:q,onChange:ie,value:I,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&E)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:E(y,T)}))})()]}))})},pu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",fu=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,gu=m`
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
        outline: 2px solid ${lc.Accent.Light[3]};
    }
`,mu=f.button`
    ${gu}
    cursor: pointer;
`;f.div`
    ${gu}
`;const yu=g`
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
`,bu=f.div`
    position: relative;
    border: 1px solid ${lc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${lc.Neutral[8]};

    :focus-within {
        border: 1px solid ${lc.Accent.Light[1]};
        box-shadow: ${ru};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${yu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${lc.Neutral[6](e)};

                ${mu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${lc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${mu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${lc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${lc.Validation.Red.Border(e)};
                    box-shadow: ${iu};
                }
            `:void 0}
`,vu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${pu};
    margin-left: 1rem;
`,wu=f(F)`
    color: ${lc.Neutral[3]};
    height: ${Sc.Body.fontSize}rem;
    width: ${Sc.Body.fontSize}rem;
`,Su=f.div`
    height: 1px;
    background: ${lc.Neutral[5]};
    margin: 0 0.5rem;
`,_u=f.div`
    display: flex;
    flex: 1;
`,xu=f(Oc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,$u=f(xu)`
    color: ${lc.Neutral[3]};
`,Fu=({children:e,show:n,error:r,disabled:i,testId:a,onBlur:s,readOnly:c,className:u})=>{const d=l();return((e,t,n="window",r)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;n&&s()}}),"document"),t(fu,Object.assign({className:u},{children:t(bu,Object.assign({ref:d,error:r&&!n,disabled:i,$readOnly:c,expanded:n,"data-testid":a},{children:e}))}))},ku=r=>{var{selectedOption:i,placeholder:a="Select",options:c,disabled:u,error:d,className:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:y,valueExtractor:b,valueToStringFunction:v,listExtractor:w,displayValueExtractor:S,onSelectOption:_,listStyleWidth:x,onShowOptions:$,onHideOptions:F,onRetry:O,optionsLoadState:B="success",optionTruncationType:j="end",renderCustomSelectedOption:A,renderListItem:E,hideNoResultsDisplay:D,renderCustomCallToAction:C}=r,P=k(r,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction"]);const[I,z]=s(i),[T,H]=s(!1),N=l(),M=l();o((()=>{z(i)}),[i]);const R=(e,t)=>{z(e),H(!1),W(!1),N&&N.current.focus(),_&&_(e,t)},V=e=>{T&&(H(!1),W(!1)),e&&N&&N.current.focus()},L=e=>{if("middle"===j){let t=0;return M&&M.current&&(t=M.current.getBoundingClientRect().width),Cc.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(e),t,120,8)}return e},W=e=>{!e&&F&&F(),e&&$&&$()};return e(Fu,Object.assign({className:h,show:T,error:d&&!T,disabled:u,readOnly:P.readOnly,testId:p,onBlur:()=>{H(!1),W(!1)}},{children:[t(mu,Object.assign({ref:N,type:"button","data-testid":f||"selector",disabled:u,onClick:e=>{e.preventDefault(),u||P.readOnly||(H(!T),W(!T))}},P,{children:e(n,{children:[t(_u,Object.assign({ref:M},{children:I?A?A(I):t(xu,Object.assign({truncateType:j},{children:L(S?S(I):b?b(I):I.toString())})):t($u,Object.assign({truncateType:j},{children:a}))})),!P.readOnly&&t(vu,Object.assign({expanded:T},{children:t(wu,{})}))]})})),T&&t(Su,{}),c&&c.length>0?t(hu,{listItems:c,onSelectItem:R,onDismiss:V,valueExtractor:b,listExtractor:w,listStyleWidth:x,visible:T,enableSearch:g,searchPlaceholder:y,searchFunction:m,"data-testid":"dropdown-list",selectedItems:I?[I]:[],onRetry:O,itemsLoadState:B,itemTruncationType:j,renderListItem:E,hideNoResultsDisplay:D,renderCustomCallToAction:C}):null]}))};export{ku as InputSelect};
//# sourceMappingURL=index.js.map
