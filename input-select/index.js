import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as S,SquareIcon as x}from"@lifesg/react-icons";import{CrossIcon as F}from"@lifesg/react-icons/cross";import{MagnifierIcon as $}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";function B(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var O=function(){this.__data__=[],this.size=0};var D=function(e,t){return e===t||e!=e&&t!=t},A=D;var j=function(e,t){for(var r=e.length;r--;)if(A(e[r][0],t))return r;return-1},E=j,C=Array.prototype.splice;var I=j;var P=j;var z=j;var T=O,H=function(e){var t=this.__data__,r=E(t,e);return!(r<0)&&(r==t.length-1?t.pop():C.call(t,r,1),--this.size,!0)},N=function(e){var t=this.__data__,r=I(t,e);return r<0?void 0:t[r][1]},L=function(e){return P(this.__data__,e)>-1},R=function(e,t){var r=this.__data__,n=z(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function M(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}M.prototype.clear=T,M.prototype.delete=H,M.prototype.get=N,M.prototype.has=L,M.prototype.set=R;var V=M,W=V;var q=function(){this.__data__=new W,this.size=0};var U=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Q=function(e){return this.__data__.get(e)};var G=function(e){return this.__data__.has(e)},X="object"==typeof k&&k&&k.Object===Object&&k,Z=X,K="object"==typeof self&&self&&self.Object===Object&&self,Y=Z||K||Function("return this")(),J=Y.Symbol,ee=J,te=Object.prototype,re=te.hasOwnProperty,ne=te.toString,ie=ee?ee.toStringTag:void 0;var oe=function(e){var t=re.call(e,ie),r=e[ie];try{e[ie]=void 0;var n=!0}catch(e){}var i=ne.call(e);return n&&(t?e[ie]=r:delete e[ie]),i},ae=Object.prototype.toString;var se=oe,le=function(e){return ae.call(e)},ce=J?J.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?se(e):le(e)};var de=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},he=ue,pe=de;var fe,ge=function(e){if(!pe(e))return!1;var t=he(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=Y["__core-js_shared__"],ye=(fe=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+fe:"";var be=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var we=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=ge,xe=be,Fe=de,$e=we,_e=/^\[object .+?Constructor\]$/,Be=Function.prototype,ke=Object.prototype,Oe=Be.toString,De=ke.hasOwnProperty,Ae=RegExp("^"+Oe.call(De).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var je=function(e){return!(!Fe(e)||xe(e))&&(Se(e)?Ae:_e).test($e(e))},Ee=function(e,t){return null==e?void 0:e[t]};var Ce=function(e,t){var r=Ee(e,t);return je(r)?r:void 0},Ie=Ce(Y,"Map"),Pe=Ce(Object,"create"),ze=Pe;var Te=function(){this.__data__=ze?ze(null):{},this.size=0};var He=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ne=Pe,Le=Object.prototype.hasOwnProperty;var Re=function(e){var t=this.__data__;if(Ne){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Le.call(t,e)?t[e]:void 0},Me=Pe,Ve=Object.prototype.hasOwnProperty;var We=Pe;var qe=Te,Ue=He,Qe=Re,Ge=function(e){var t=this.__data__;return Me?void 0!==t[e]:Ve.call(t,e)},Xe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=We&&void 0===t?"__lodash_hash_undefined__":t,this};function Ze(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ze.prototype.clear=qe,Ze.prototype.delete=Ue,Ze.prototype.get=Qe,Ze.prototype.has=Ge,Ze.prototype.set=Xe;var Ke=Ze,Ye=V,Je=Ie;var et=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var tt=function(e,t){var r=e.__data__;return et(t)?r["string"==typeof t?"string":"hash"]:r.map},rt=tt;var nt=tt;var it=tt;var ot=tt;var at=function(){this.size=0,this.__data__={hash:new Ke,map:new(Je||Ye),string:new Ke}},st=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},lt=function(e){return nt(this,e).get(e)},ct=function(e){return it(this,e).has(e)},ut=function(e,t){var r=ot(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function dt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}dt.prototype.clear=at,dt.prototype.delete=st,dt.prototype.get=lt,dt.prototype.has=ct,dt.prototype.set=ut;var ht=dt,pt=V,ft=Ie,gt=ht;var mt=V,yt=q,bt=U,vt=Q,wt=G,St=function(e,t){var r=this.__data__;if(r instanceof pt){var n=r.__data__;if(!ft||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new gt(n)}return r.set(e,t),this.size=r.size,this};function xt(e){var t=this.__data__=new mt(e);this.size=t.size}xt.prototype.clear=yt,xt.prototype.delete=bt,xt.prototype.get=vt,xt.prototype.has=wt,xt.prototype.set=St;var Ft=xt;var $t=ht,_t=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Bt=function(e){return this.__data__.has(e)};function kt(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new $t;++t<r;)this.add(e[t])}kt.prototype.add=kt.prototype.push=_t,kt.prototype.has=Bt;var Ot=kt,Dt=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},At=function(e,t){return e.has(t)};var jt=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&r?new Ot:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(n)var m=a?n(g,f,d,t,e,o):n(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Dt(t,(function(e,t){if(!At(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var Et=Y.Uint8Array,Ct=D,It=jt,Pt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},zt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Tt=J?J.prototype:void 0,Ht=Tt?Tt.valueOf:void 0;var Nt=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Et(e),new Et(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ct(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Pt;case"[object Set]":var l=1&n;if(s||(s=zt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=It(s(e),s(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Ht)return Ht.call(e)==Ht.call(t)}return!1};var Lt=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Rt=Array.isArray,Mt=Lt,Vt=Rt;var Wt=function(e,t,r){var n=t(e);return Vt(e)?n:Mt(n,r(e))};var qt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Ut=function(){return[]},Qt=Object.prototype.propertyIsEnumerable,Gt=Object.getOwnPropertySymbols,Xt=Gt?function(e){return null==e?[]:(e=Object(e),qt(Gt(e),(function(t){return Qt.call(e,t)})))}:Ut;var Zt=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var Kt=function(e){return null!=e&&"object"==typeof e},Yt=ue,Jt=Kt;var er=function(e){return Jt(e)&&"[object Arguments]"==Yt(e)},tr=Kt,rr=Object.prototype,nr=rr.hasOwnProperty,ir=rr.propertyIsEnumerable,or=er(function(){return arguments}())?er:function(e){return tr(e)&&nr.call(e,"callee")&&!ir.call(e,"callee")},ar={exports:{}};var sr=function(){return!1};!function(e,t){var r=Y,n=sr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(ar,ar.exports);var lr=/^(?:0|[1-9]\d*)$/;var cr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&lr.test(e))&&e>-1&&e%1==0&&e<t};var ur=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},dr=ue,hr=ur,pr=Kt,fr={};fr["[object Float32Array]"]=fr["[object Float64Array]"]=fr["[object Int8Array]"]=fr["[object Int16Array]"]=fr["[object Int32Array]"]=fr["[object Uint8Array]"]=fr["[object Uint8ClampedArray]"]=fr["[object Uint16Array]"]=fr["[object Uint32Array]"]=!0,fr["[object Arguments]"]=fr["[object Array]"]=fr["[object ArrayBuffer]"]=fr["[object Boolean]"]=fr["[object DataView]"]=fr["[object Date]"]=fr["[object Error]"]=fr["[object Function]"]=fr["[object Map]"]=fr["[object Number]"]=fr["[object Object]"]=fr["[object RegExp]"]=fr["[object Set]"]=fr["[object String]"]=fr["[object WeakMap]"]=!1;var gr=function(e){return pr(e)&&hr(e.length)&&!!fr[dr(e)]};var mr=function(e){return function(t){return e(t)}},yr={exports:{}};!function(e,t){var r=X,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(yr,yr.exports);var br=gr,vr=mr,wr=yr.exports,Sr=wr&&wr.isTypedArray,xr=Sr?vr(Sr):br,Fr=Zt,$r=or,_r=Rt,Br=ar.exports,kr=cr,Or=xr,Dr=Object.prototype.hasOwnProperty;var Ar=function(e,t){var r=_r(e),n=!r&&$r(e),i=!r&&!n&&Br(e),o=!r&&!n&&!i&&Or(e),a=r||n||i||o,s=a?Fr(e.length,String):[],l=s.length;for(var c in e)!t&&!Dr.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||kr(c,l))||s.push(c);return s},jr=Object.prototype;var Er=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||jr)};var Cr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Ir=Er,Pr=Cr,zr=Object.prototype.hasOwnProperty;var Tr=ge,Hr=ur;var Nr=function(e){return null!=e&&Hr(e.length)&&!Tr(e)},Lr=Ar,Rr=function(e){if(!Ir(e))return Pr(e);var t=[];for(var r in Object(e))zr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Mr=Nr;var Vr=function(e){return Mr(e)?Lr(e):Rr(e)},Wr=Wt,qr=Xt,Ur=Vr;var Qr=function(e){return Wr(e,Ur,qr)},Gr=Object.prototype.hasOwnProperty;var Xr=function(e,t,r,n,i,o){var a=1&r,s=Qr(e),l=s.length;if(l!=Qr(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Gr.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=a?n(m,g,u,t,e,o):n(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Zr=Ce(Y,"DataView"),Kr=Ie,Yr=Ce(Y,"Promise"),Jr=Ce(Y,"Set"),en=Ce(Y,"WeakMap"),tn=ue,rn=we,nn="[object Map]",on="[object Promise]",an="[object Set]",sn="[object WeakMap]",ln="[object DataView]",cn=rn(Zr),un=rn(Kr),dn=rn(Yr),hn=rn(Jr),pn=rn(en),fn=tn;(Zr&&fn(new Zr(new ArrayBuffer(1)))!=ln||Kr&&fn(new Kr)!=nn||Yr&&fn(Yr.resolve())!=on||Jr&&fn(new Jr)!=an||en&&fn(new en)!=sn)&&(fn=function(e){var t=tn(e),r="[object Object]"==t?e.constructor:void 0,n=r?rn(r):"";if(n)switch(n){case cn:return ln;case un:return nn;case dn:return on;case hn:return an;case pn:return sn}return t});var gn=Ft,mn=jt,yn=Nt,bn=Xr,vn=fn,wn=Rt,Sn=ar.exports,xn=xr,Fn="[object Arguments]",$n="[object Array]",_n="[object Object]",Bn=Object.prototype.hasOwnProperty;var kn=function(e,t,r,n,i,o){var a=wn(e),s=wn(t),l=a?$n:vn(e),c=s?$n:vn(t),u=(l=l==Fn?_n:l)==_n,d=(c=c==Fn?_n:c)==_n,h=l==c;if(h&&Sn(e)){if(!Sn(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new gn),a||xn(e)?mn(e,t,r,n,i,o):yn(e,t,l,r,n,i,o);if(!(1&r)){var p=u&&Bn.call(e,"__wrapped__"),f=d&&Bn.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new gn),i(g,m,r,n,o)}}return!!h&&(o||(o=new gn),bn(e,t,r,n,i,o))},On=Kt;var Dn=function e(t,r,n,i,o){return t===r||(null==t||null==r||!On(t)&&!On(r)?t!=t&&r!=r:kn(t,r,n,i,e,o))},An=Ft,jn=Dn;var En=de;var Cn=function(e){return e==e&&!En(e)},In=Cn,Pn=Vr;var zn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Tn=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new An;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?jn(u,c,3,n,d):h))return!1}}return!0},Hn=function(e){for(var t=Pn(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,In(i)]}return t},Nn=zn;var Ln=function(e){var t=Hn(e);return 1==t.length&&t[0][2]?Nn(t[0][0],t[0][1]):function(r){return r===e||Tn(r,e,t)}},Rn=ue,Mn=Kt;var Vn=function(e){return"symbol"==typeof e||Mn(e)&&"[object Symbol]"==Rn(e)},Wn=Rt,qn=Vn,Un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qn=/^\w*$/;var Gn=function(e,t){if(Wn(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!qn(e))||(Qn.test(e)||!Un.test(e)||null!=t&&e in Object(t))},Xn=ht;function Zn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Zn.Cache||Xn),r}Zn.Cache=Xn;var Kn=Zn;var Yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jn=/\\(\\)?/g,ei=function(e){var t=Kn(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Yn,(function(e,r,n,i){t.push(n?i.replace(Jn,"$1"):r||e)})),t}));var ti=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ri=Rt,ni=Vn,ii=J?J.prototype:void 0,oi=ii?ii.toString:void 0;var ai=function e(t){if("string"==typeof t)return t;if(ri(t))return ti(t,e)+"";if(ni(t))return oi?oi.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},si=ai;var li=Rt,ci=Gn,ui=ei,di=function(e){return null==e?"":si(e)};var hi=function(e,t){return li(e)?e:ci(e,t)?[e]:ui(di(e))},pi=Vn;var fi=function(e){if("string"==typeof e||pi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},gi=hi,mi=fi;var yi=function(e,t){for(var r=0,n=(t=gi(t,e)).length;null!=e&&r<n;)e=e[mi(t[r++])];return r&&r==n?e:void 0},bi=yi;var vi=function(e,t,r){var n=null==e?void 0:bi(e,t);return void 0===n?r:n};var wi=hi,Si=or,xi=Rt,Fi=cr,$i=ur,_i=fi;var Bi=function(e,t){return null!=e&&t in Object(e)},ki=function(e,t,r){for(var n=-1,i=(t=wi(t,e)).length,o=!1;++n<i;){var a=_i(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&$i(i)&&Fi(a,i)&&(xi(e)||Si(e))};var Oi=Dn,Di=vi,Ai=function(e,t){return null!=e&&ki(e,t,Bi)},ji=Gn,Ei=Cn,Ci=zn,Ii=fi;var Pi=yi;var zi=function(e){return function(t){return null==t?void 0:t[e]}},Ti=function(e){return function(t){return Pi(t,e)}},Hi=Gn,Ni=fi;var Li=Ln,Ri=function(e,t){return ji(e)&&Ei(t)?Ci(Ii(e),t):function(r){var n=Di(r,e);return void 0===n&&n===t?Ai(r,e):Oi(t,n,3)}},Mi=function(e){return e},Vi=Rt,Wi=function(e){return Hi(e)?zi(Ni(e)):Ti(e)};var qi=function(e){return"function"==typeof e?e:null==e?Mi:"object"==typeof e?Vi(e)?Ri(e[0],e[1]):Li(e):Wi(e)},Ui=qi,Qi=Nr,Gi=Vr;var Xi=function(e){return function(t,r,n){var i=Object(t);if(!Qi(t)){var o=Ui(r);t=Gi(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var Zi=/\s/;var Ki=function(e){for(var t=e.length;t--&&Zi.test(e.charAt(t)););return t},Yi=/^\s+/;var Ji=function(e){return e?e.slice(0,Ki(e)+1).replace(Yi,""):e},eo=de,to=Vn,ro=/^[-+]0x[0-9a-f]+$/i,no=/^0b[01]+$/i,io=/^0o[0-7]+$/i,oo=parseInt;var ao=function(e){if("number"==typeof e)return e;if(to(e))return NaN;if(eo(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=eo(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ji(e);var r=no.test(e);return r||io.test(e)?oo(e.slice(2),r?2:8):ro.test(e)?NaN:+e},so=1/0;var lo=function(e){return e?(e=ao(e))===so||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var co=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},uo=qi,ho=function(e){var t=lo(e),r=t%1;return t==t?r?t-r:t:0},po=Math.max;var fo=Xi((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ho(r);return i<0&&(i=po(n+i,0)),co(e,uo(t),i)})),go=Dn;var mo=function(e,t){return go(e,t)},yo=Object.defineProperty,bo={};((e,t)=>{for(var r in t)yo(e,r,{get:t[r],enumerable:!0})})(bo,{assign:()=>Ko,colors:()=>Go,createStringInterpolator:()=>Wo,skipAnimation:()=>Xo,to:()=>qo,willAdvance:()=>Zo});var vo=Po(),wo=e=>jo(e,vo),So=Po();wo.write=e=>jo(e,So);var xo=Po();wo.onStart=e=>jo(e,xo);var Fo=Po();wo.onFrame=e=>jo(e,Fo);var $o=Po();wo.onFinish=e=>jo(e,$o);var _o=[];wo.setTimeout=(e,t)=>{const r=wo.now()+t,n=()=>{const e=_o.findIndex((e=>e.cancel==n));~e&&_o.splice(e,1),Do-=~e?1:0},i={time:r,handler:e,cancel:n};return _o.splice(Bo(r),0,i),Do+=1,Eo(),i};var Bo=e=>~(~_o.findIndex((t=>t.time>e))||~_o.length);wo.cancel=e=>{xo.delete(e),Fo.delete(e),$o.delete(e),vo.delete(e),So.delete(e)},wo.sync=e=>{Ao=!0,wo.batchedUpdates(e),Ao=!1},wo.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,wo.onStart(r)}return n.handler=e,n.cancel=()=>{xo.delete(r),t=null},n};var ko="undefined"!=typeof window?window.requestAnimationFrame:()=>{};wo.use=e=>ko=e,wo.now="undefined"!=typeof performance?()=>performance.now():Date.now,wo.batchedUpdates=e=>e(),wo.catch=console.error,wo.frameLoop="always",wo.advance=()=>{"demand"!==wo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Io()};var Oo=-1,Do=0,Ao=!1;function jo(e,t){Ao?(t.delete(e),e(0)):(t.add(e),Eo())}function Eo(){Oo<0&&(Oo=0,"demand"!==wo.frameLoop&&ko(Co))}function Co(){~Oo&&(ko(Co),wo.batchedUpdates(Io))}function Io(){const e=Oo;Oo=wo.now();const t=Bo(Oo);t&&(zo(_o.splice(0,t),(e=>e.handler())),Do-=t),Do?(xo.flush(),vo.flush(e?Math.min(64,Oo-e):16.667),Fo.flush(),So.flush(),$o.flush()):Oo=-1}function Po(){let e=new Set,t=e;return{add(r){Do+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Do-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Do-=t.size,zo(t,(t=>t(r)&&e.add(t))),Do+=e.size,t=e)}}}function zo(e,t){e.forEach((e=>{try{t(e)}catch(e){wo.catch(e)}}))}function To(){}var Ho={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function No(e,t){if(Ho.arr(e)){if(!Ho.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Lo=(e,t)=>e.forEach(t);function Ro(e,t,r){if(Ho.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Mo=e=>Ho.und(e)?[]:Ho.arr(e)?e:[e];function Vo(e,t){if(e.size){const r=Array.from(e);e.clear(),Lo(r,t)}}var Wo,qo,Uo=(e,...t)=>Vo(e,(e=>e(...t))),Qo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Go=null,Xo=!1,Zo=To,Ko=e=>{e.to&&(qo=e.to),e.now&&(wo.now=e.now),void 0!==e.colors&&(Go=e.colors),null!=e.skipAnimation&&(Xo=e.skipAnimation),e.createStringInterpolator&&(Wo=e.createStringInterpolator),e.requestAnimationFrame&&wo.use(e.requestAnimationFrame),e.batchedUpdates&&(wo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Zo=e.willAdvance),e.frameLoop&&(wo.frameLoop=e.frameLoop)},Yo=new Set,Jo=[],ea=[],ta=0,ra={get idle(){return!Yo.size&&!Jo.length},start(e){ta>e.priority?(Yo.add(e),wo.onStart(na)):(ia(e),wo(aa))},advance:aa,sort(e){if(ta)wo.onFrame((()=>ra.sort(e)));else{const t=Jo.indexOf(e);~t&&(Jo.splice(t,1),oa(e))}},clear(){Jo=[],Yo.clear()}};function na(){Yo.forEach(ia),Yo.clear(),wo(aa)}function ia(e){Jo.includes(e)||oa(e)}function oa(e){Jo.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Jo,(t=>t.priority>e.priority)),0,e)}function aa(e){const t=ea;for(let r=0;r<Jo.length;r++){const n=Jo[r];ta=n.priority,n.idle||(Zo(n),n.advance(e),n.idle||t.push(n))}return ta=0,(ea=Jo).length=0,(Jo=t).length>0}var sa="[-+]?\\d*\\.?\\d+",la=sa+"%";function ca(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ua=new RegExp("rgb"+ca(sa,sa,sa)),da=new RegExp("rgba"+ca(sa,sa,sa,sa)),ha=new RegExp("hsl"+ca(sa,la,la)),pa=new RegExp("hsla"+ca(sa,la,la,sa)),fa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ga=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ma=/^#([0-9a-fA-F]{6})$/,ya=/^#([0-9a-fA-F]{8})$/;function ba(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function va(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=ba(i,n,e+1/3),a=ba(i,n,e),s=ba(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function wa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Sa(e){return(parseFloat(e)%360+360)%360/360}function xa(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Fa(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function $a(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ma.exec(e))?parseInt(t[1]+"ff",16)>>>0:Go&&void 0!==Go[e]?Go[e]:(t=ua.exec(e))?(wa(t[1])<<24|wa(t[2])<<16|wa(t[3])<<8|255)>>>0:(t=da.exec(e))?(wa(t[1])<<24|wa(t[2])<<16|wa(t[3])<<8|xa(t[4]))>>>0:(t=fa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ya.exec(e))?parseInt(t[1],16)>>>0:(t=ga.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ha.exec(e))?(255|va(Sa(t[1]),Fa(t[2]),Fa(t[3])))>>>0:(t=pa.exec(e))?(va(Sa(t[1]),Fa(t[2]),Fa(t[3]))|xa(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var _a=(e,t,r)=>{if(Ho.fun(e))return e;if(Ho.arr(e))return _a({range:e,output:t,extrapolate:r});if(Ho.str(e.output[0]))return Wo(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var Ba=1.70158,ka=1.525*Ba,Oa=Ba+1,Da=2*Math.PI/3,Aa=2*Math.PI/4.5,ja=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ea={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Oa*e*e*e-Ba*e*e,easeOutBack:e=>1+Oa*Math.pow(e-1,3)+Ba*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-ka)/2:(Math.pow(2*e-2,2)*((ka+1)*(2*e-2)+ka)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Da),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Da)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Aa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Aa)/2+1,easeInBounce:e=>1-ja(1-e),easeOutBounce:ja,easeInOutBounce:e=>e<.5?(1-ja(1-2*e))/2:(1+ja(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Ca=Symbol.for("FluidValue.get"),Ia=Symbol.for("FluidValue.observers"),Pa=e=>Boolean(e&&e[Ca]),za=e=>e&&e[Ca]?e[Ca]():e,Ta=e=>e[Ia]||null;function Ha(e,t){const r=e[Ia];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Na=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");La(this,e)}},La=(e,t)=>Wa(e,Ca,t);function Ra(e,t){if(e[Ca]){let r=e[Ia];r||Wa(e,Ia,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ma(e,t){const r=e[Ia];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ia]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Va,Wa=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),qa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ua=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Qa=new RegExp(`(${qa.source})(%|[a-z]+)`,"i"),Ga=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Xa=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Za=e=>{const[t,r]=Ka(e);if(!t||Qo())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Xa.test(r)?Za(r):r||e},Ka=e=>{const t=Xa.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Ya=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ja=e=>{Va||(Va=Go?new RegExp(`(${Object.keys(Go).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>za(e).replace(Xa,Za).replace(Ua,$a).replace(Va,$a))),r=t.map((e=>e.match(qa).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>_a({...e,output:t})));return e=>{const r=!Qa.test(t[0])&&t.find((e=>Qa.test(e)))?.replace(qa,"");let i=0;return t[0].replace(qa,(()=>`${n[i++](e)}${r||""}`)).replace(Ga,Ya)}},es="react-spring: ",ts=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${es}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},rs=ts(console.warn);var ns=ts(console.warn);function is(e){return Ho.str(e)&&("#"==e[0]||/\d/.test(e)||!Qo()&&Xa.test(e)||e in(Go||{}))}var os=Qo()?o:a,as=()=>{const e=l(!1);return os((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ss(){const e=s()[1],t=as();return()=>{t.current&&e(Math.random())}}var ls=e=>o(e,cs),cs=[];function us(e){const t=l();return o((()=>{t.current=e})),t.current}var ds=Symbol.for("Animated:node"),hs=e=>e&&e[ds],ps=(e,t)=>{return r=e,n=ds,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},fs=e=>e&&e[ds]&&e[ds].getPayload(),gs=class{constructor(){ps(this,this)}getPayload(){return this.payload||[]}},ms=class extends gs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ho.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ms(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ho.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ho.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ys=class extends ms{constructor(e){super(0),this._string=null,this._toString=_a({output:[e,e]})}static create(e){return new ys(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ho.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=_a({output:[this.getValue(),e]})),this._value=0,super.reset()}},bs={dependencies:null},vs=class extends gs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ro(this.source,((r,n)=>{var i;(i=r)&&i[ds]===i?t[n]=r.getValue(e):Pa(r)?t[n]=za(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Lo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ro(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){bs.dependencies&&Pa(e)&&bs.dependencies.add(e);const t=fs(e);t&&Lo(t,(e=>this.add(e)))}},ws=class extends vs{constructor(e){super(e)}static create(e){return new ws(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ss)),!0)}};function Ss(e){return(is(e)?ys:ms).create(e)}function xs(e){const t=hs(e);return t?t.constructor:Ho.arr(e)?ws:is(e)?ys:ms}var Fs=(e,t)=>{const r=!Ho.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=r&&u((e=>{s.current=function(e,t){e&&(Ho.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const r=new Set;bs.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new vs(e),bs.dependencies=null,[e,r]}(i,t),p=ss(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new $s(f,h),m=l();os((()=>(m.current=g,Lo(h,(e=>Ra(e,g))),()=>{m.current&&(Lo(m.current.deps,(e=>Ma(e,m.current))),wo.cancel(m.current.update))}))),o(f,[]),ls((()=>()=>{const e=m.current;Lo(e.deps,(t=>Ma(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,{...y,ref:c})}))},$s=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&wo.write(this.update)}};var _s=Symbol.for("AnimatedComponent"),Bs=e=>Ho.str(e)?e:e&&Ho.str(e.displayName)?e.displayName:Ho.fun(e)&&e.name||null;function ks(e,...t){return Ho.fun(e)?e(...t):e}var Os=(e,t)=>!0===e||!!(t&&e&&(Ho.fun(e)?e(t):Mo(e).includes(t))),Ds=(e,t)=>Ho.obj(e)?t&&e[t]:e,As=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,js=e=>e,Es=(e,t=js)=>{let r=Cs;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ho.und(r)||(n[i]=r)}return n},Cs=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Is={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ps(e){const t=function(e){const t={};let r=0;if(Ro(e,((e,n)=>{Is[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Ro(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function zs(e){return e=za(e),Ho.arr(e)?e.map(zs):is(e)?bo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ts(e){return Ho.fun(e)||Ho.arr(e)&&Ho.obj(e[0])}var Hs={tension:170,friction:26,mass:1,damping:1,easing:Ea.linear,clamp:!1},Ns=class{constructor(){this.velocity=0,Object.assign(this,Hs)}};function Ls(e,t){if(Ho.und(t.decay)){const r=!Ho.und(t.tension)||!Ho.und(t.friction);!r&&Ho.und(t.frequency)&&Ho.und(t.damping)&&Ho.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Rs=[],Ms=class{constructor(){this.changed=!1,this.values=Rs,this.toValues=null,this.fromValues=Rs,this.config=new Ns,this.immediate=!1}};function Vs(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=Os(r.cancel??n?.cancel,t);if(u)p();else{Ho.und(r.pause)||(i.paused=Os(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Os(e,t)),l=ks(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-wo.now()}function h(){l>0&&!bo.skipAnimation?(i.delayed=!0,c=wo.setTimeout(p,l),i.pauseQueue.add(d),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...r,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Ws=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Qs(e.get()):t.every((e=>e.noop))?qs(e.get()):Us(e.get(),t.every((e=>e.finished))),qs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Us=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Qs=e=>({value:e,cancelled:!0,finished:!1});function Gs(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Es(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(r.cancelId||0)&&Qs(n)||i!==r.asyncId&&Us(n,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Zs,a=new Ks;return(async()=>{if(bo.skipAnimation)throw Xs(r),a.result=Us(n,!1),d(a),a;p(o);const s=Ho.obj(e)?{...e}:{...t,to:e};s.parentId=i,Ro(c,((e,t)=>{Ho.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(bo.skipAnimation)return Xs(r),Us(n,!1);try{let t;t=Ho.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Us(n.get(),!0,!1)}catch(e){if(e instanceof Zs)g=e.result;else{if(!(e instanceof Ks))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Ho.fun(a)&&wo.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Xs(e,t){Vo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Zs=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ks=class extends Error{constructor(){super("SkipAnimationSignal")}},Ys=e=>e instanceof el,Js=1,el=class extends Na{constructor(){super(...arguments),this.id=Js++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=hs(this);return e&&e.getValue()}to(...e){return bo.to(this,e)}interpolate(...e){return rs(`${es}The "interpolate" function is deprecated in v9 (use "to" instead)`),bo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ha(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ra.sort(this),Ha(this,{type:"priority",parent:this,priority:e})}},tl=Symbol.for("SpringPhase"),rl=e=>(1&e[tl])>0,nl=e=>(2&e[tl])>0,il=e=>(4&e[tl])>0,ol=(e,t)=>t?e[tl]|=3:e[tl]&=-3,al=(e,t)=>t?e[tl]|=4:e[tl]&=-5,sl=class extends el{constructor(e,t){if(super(),this.animation=new Ms,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ho.und(e)||!Ho.und(t)){const r=Ho.obj(e)?{...e}:{...t,from:e};Ho.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(nl(this)||this._state.asyncTo)||il(this)}get goal(){return za(this.animation.to)}get velocity(){const e=hs(this);return e instanceof ms?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return rl(this)}get isAnimating(){return nl(this)}get isPaused(){return il(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=fs(n.to);!a&&Pa(n.to)&&(i=Mo(za(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ys?1:a?a[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ho.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Ho.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Ho.und(n),p=r==c?s.v0>0:r<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*n,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+o.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(r=!0)}));const s=hs(this),l=s.getValue();if(t){const e=za(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return wo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(nl(this)){const{to:e,config:t}=this.animation;wo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ho.und(e)?(r=this.queue||[],this.queue=[]):r=[Ho.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Ws(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Xs(this._state,e&&this._lastCallId),wo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ho.obj(r)?r[t]:r,(null==r||Ts(r))&&(r=void 0),n=Ho.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return rl(this)||(e.reverse&&([r,n]=[n,r]),n=za(n),Ho.und(n)?hs(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Es(e,((e,t)=>/^on/.test(t)?Ds(e,r):e))),fl(this,e,"onProps"),gl(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Vs(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{il(this)||(al(this,!0),Uo(o.pauseQueue),gl(this,"onPause",Us(this,ll(this,this.animation.to)),this))},resume:()=>{il(this)&&(al(this,!1),nl(this)&&this._resume(),Uo(o.resumeQueue),gl(this,"onResume",Us(this,ll(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=cl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Qs(this));const n=!Ho.und(e.to),i=!Ho.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Qs(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Ho.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!No(d,c);h&&(s.from=d),d=za(d);const p=!No(u,l);p&&this._focus(u);const f=Ts(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!f&&function(e,t,r){r&&(Ls(r={...r},t),t={...r,...t}),Ls(e,t),Object.assign(e,t);for(const t in Hs)null==e[t]&&(e[t]=Hs[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Ho.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,ks(t.config,o),t.config!==a.config?ks(a.config,o):void 0);let b=hs(this);if(!b||Ho.und(u))return r(Us(this,!0));const v=Ho.und(t.reset)?i&&!t.default:!Ho.und(d)&&Os(t.reset,o),w=v?d:this.get(),S=zs(u),x=Ho.num(S)||Ho.arr(S)||is(S),F=!f&&(!x||Os(a.immediate||t.immediate,o));if(p){const e=xs(u);if(e!==b.constructor){if(!F)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(S)}}const $=b.constructor;let _=Pa(u),B=!1;if(!_){const e=v||!rl(this)&&h;(p||e)&&(B=No(zs(w),S),_=!B),(No(s.immediate,F)||F)&&No(g.decay,m)&&No(g.velocity,y)||(_=!0)}if(B&&nl(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!f&&((_||Pa(l))&&(s.values=b.getPayload(),s.toValues=Pa(u)?null:$==ys?[1]:Mo(S)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),_)){const{onRest:e}=s;Lo(pl,(e=>fl(this,t,e)));const n=Us(this,ll(this,l));Uo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&wo.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?ks(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set(w),f?r(Gs(t.to,t,this._state,this)):_?this._start():nl(this)&&!p?this._pendingCalls.add(r):r(qs(w))}_focus(e){const t=this.animation;e!==t.to&&(Ta(this)&&this._detach(),t.to=e,Ta(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Pa(t)&&(Ra(t,this),Ys(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Pa(e)&&Ma(e,this)}_set(e,t=!0){const r=za(e);if(!Ho.und(r)){const e=hs(this);if(!e||!No(r,e.getValue())){const n=xs(r);e&&e.constructor==n?e.setValue(r):ps(this,n.create(r)),e&&wo.batchedUpdates((()=>{this._onChange(r,t)}))}}return hs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,gl(this,"onStart",Us(this,ll(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ks(this.animation.onChange,e,this)),ks(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;hs(this).reset(za(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),nl(this)||(ol(this,!0),il(this)||this._resume())}_resume(){bo.skipAnimation?this.finish():ra.start(this)}_stop(e,t){if(nl(this)){ol(this,!1);const r=this.animation;Lo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ha(this,{type:"idle",parent:this});const n=t?Qs(this.get()):Us(this.get(),ll(this,e??r.to));Uo(this._pendingCalls,n),r.changed&&(r.changed=!1,gl(this,"onRest",n,this))}}};function ll(e,t){const r=zs(t);return No(zs(e.get()),r)}function cl(e,t=e.loop,r=e.to){const n=ks(t);if(n){const i=!0!==n&&Ps(n),o=(i||e).reverse,a=!i||i.reset;return ul({...e,loop:t,default:!1,pause:void 0,to:!o||Ts(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function ul(e){const{to:t,from:r}=e=Ps(e),n=new Set;return Ho.obj(t)&&hl(t,n),Ho.obj(r)&&hl(r,n),e.keys=n.size?Array.from(n):null,e}function dl(e){const t=ul(e);return Ho.und(t.default)&&(t.default=Es(t)),t}function hl(e,t){Ro(e,((e,r)=>null!=e&&t.add(r)))}var pl=["onStart","onRest","onChange","onPause","onResume"];function fl(e,t,r){e.animation[r]=t[r]!==As(t,r)?Ds(t[r],e.key):void 0}function gl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var ml=["onStart","onChange","onRest"],yl=1,bl=class{constructor(e,t){this.id=yl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ho.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ul(e)),this}start(e){let{queue:t}=this;return e?t=Mo(e).map(ul):this.queue=[],this._flush?this._flush(this,t):(_l(this,t),vl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Lo(Mo(t),(t=>r[t].stop(!!e)))}else Xs(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ho.und(e))this.start({pause:!0});else{const t=this.springs;Lo(Mo(e),(e=>t[e].pause()))}return this}resume(e){if(Ho.und(e))this.start({pause:!1});else{const t=this.springs;Lo(Mo(e),(e=>t[e].resume()))}return this}each(e){Ro(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Vo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Vo(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Vo(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}wo.onFrame(this._onFrame)}};function vl(e,t){return Promise.all(t.map((t=>wl(e,t)))).then((t=>Ws(e,t)))}async function wl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Ho.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Ho.arr(i)||Ho.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Lo(ml,(r=>{const n=t[r];if(Ho.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Uo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===As(t,"cancel");(u||p&&d.asyncId)&&h.push(Vs(++e._lastAsyncId,{props:t,state:d,actions:{pause:To,resume:To,start(t,r){p?(Xs(d,e._lastAsyncId),r(Qs(e))):(t.onRest=s,r(Gs(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Ws(e,await Promise.all(h));if(a&&f.finished&&(!r||!f.noop)){const r=cl(t,a,i);if(r)return _l(e,[r]),wl(e,r,!0)}return l&&wo.batchedUpdates((()=>l(f,e,e.item))),f}function Sl(e,t){const r={...e.springs};return t&&Lo(Mo(t),(e=>{Ho.und(e.keys)&&(e=ul(e)),Ho.obj(e.to)||(e={...e,to:void 0}),$l(r,e,(e=>Fl(e)))})),xl(e,r),r}function xl(e,t){Ro(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Ra(t,e))}))}function Fl(e,t){const r=new sl;return r.key=e,t&&Ra(r,t),r}function $l(e,t,r){t.keys&&Lo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function _l(e,t){Lo(t,(t=>{$l(e.springs,t,(t=>Fl(t,e)))}))}var Bl,kl,Ol=({children:e,...t})=>{const r=d(Dl),i=t.pause||!!r.pause,a=t.immediate||!!r.immediate;t=function(e,t){const[r]=s((()=>({inputs:t,result:e()}))),n=l(),i=n.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=r;return o((()=>{n.current=a,i==r&&(r.inputs=r.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:a})),[i,a]);const{Provider:c}=Dl;return n.createElement(c,{value:t},e)},Dl=(Bl=Ol,kl={},Object.assign(Bl,n.createContext(kl)),Bl.Provider._context=Bl,Bl.Consumer._context=Bl,Bl);Ol.Provider=Dl.Provider,Ol.Consumer=Dl.Consumer;var Al=()=>{const e=[],t=function(t){ns(`${es}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Lo(e,((e,i)=>{if(Ho.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Lo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Lo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Lo(e,((e,r)=>{const n=Ho.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Lo(e,((e,n)=>{if(Ho.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Lo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Lo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ho.fun(e)?e(r,t):e};return t._getProps=r,t};function jl(e,t){const r=Ho.fun(e),[[n],i]=function(e,t,r){const n=Ho.fun(t)&&t;n&&!r&&(r=[]);const i=h((()=>n||3==arguments.length?Al():void 0),[]),o=l(0),a=ss(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const r=Sl(e,t);return o.current>0&&!s.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?vl(e,t):new Promise((n=>{xl(e,r),s.queue.push((()=>{n(vl(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=us(e)||0;function f(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new bl(null,s.flush)),r=n?n(i,e):t[i];r&&(u[i]=dl(r))}}h((()=>{Lo(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),r);const g=c.current.map(((e,t)=>Sl(e,u[t]))),m=d(Ol),y=us(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);os((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],Lo(e,(e=>e()))),Lo(c.current,((e,t)=>{i?.add(e),b&&e.start({default:m});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ls((()=>()=>{Lo(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var El=class extends el{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=_a(...t);const r=this._get(),n=xs(r);ps(this,n.create(r))}advance(e){const t=this._get();No(t,this.get())||(hs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Il(this._active)&&Pl(this)}_get(){const e=Ho.arr(this.source)?this.source.map(za):Mo(za(this.source));return this.calc(...e)}_start(){this.idle&&!Il(this._active)&&(this.idle=!1,Lo(fs(this),(e=>{e.done=!1})),bo.skipAnimation?(wo.batchedUpdates((()=>this.advance())),Pl(this)):ra.start(this))}_attach(){let e=1;Lo(Mo(this.source),(t=>{Pa(t)&&Ra(t,this),Ys(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Lo(Mo(this.source),(e=>{Pa(e)&&Ma(e,this)})),this._active.clear(),Pl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Mo(this.source).reduce(((e,t)=>Math.max(e,(Ys(t)?t.priority:0)+1)),0))}};function Cl(e){return!1!==e.idle}function Il(e){return!e.size||Array.from(e).every(Cl)}function Pl(e){e.idle||(e.idle=!0,Lo(fs(e),(e=>{e.done=!0})),Ha(e,{type:"idle",parent:e}))}bo.assign({createStringInterpolator:Ja,to:(e,t)=>new El(e,t)});var zl=/^--/;function Tl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||zl.test(e)||Nl.hasOwnProperty(e)&&Nl[e]?(""+t).trim():t+"px"}var Hl={};var Nl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ll=["Webkit","Ms","Moz","O"];Nl=Object.keys(Nl).reduce(((e,t)=>(Ll.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Nl);var Rl=/^(matrix|translate|scale|rotate|skew)/,Ml=/^(translate)/,Vl=/^(rotate|skew)/,Wl=(e,t)=>Ho.num(e)&&0!==e?e+t:e,ql=(e,t)=>Ho.arr(e)?e.every((e=>ql(e,t))):Ho.num(e)?e===t:parseFloat(e)===t,Ul=class extends vs{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Wl(e,"px"))).join(",")})`,ql(e,0)]))),Ro(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Rl.test(t)){if(delete n[t],Ho.und(e))return;const r=Ml.test(t)?"px":Vl.test(t)?"deg":"";i.push(Mo(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Wl(i,r)})`,ql(i,0)]:e=>[`${t}(${e.map((e=>Wl(e,r))).join(",")})`,ql(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Ql(i,o)),super(n)}},Ql=class extends Na{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Lo(this.inputs,((r,n)=>{const i=za(r[0]),[o,a]=this.transforms[n](Ho.arr(i)?i:r.map(za));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Lo(this.inputs,(e=>Lo(e,(e=>Pa(e)&&Ra(e,this)))))}observerRemoved(e){0==e&&Lo(this.inputs,(e=>Lo(e,(e=>Pa(e)&&Ma(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ha(this,e)}};bo.assign({batchedUpdates:p,createStringInterpolator:Ja,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Gl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new vs(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Bs(e)||"Anonymous";return(e=Ho.str(e)?o[e]||(o[e]=Fs(e,i)):e[_s]||(e[_s]=Fs(e,i))).displayName=`Animated(${t})`,e};return Ro(e,((t,r)=>{Ho.arr(e)&&(r=Bs(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Hl[t]||(Hl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Tl(t,n[t]);zl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Ul(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Xl=Gl.animated;const Zl=(e,t,r)=>t?vi(r,t)||vi(e,t):r||e,Kl=(e,t)=>{const r=t||e.defaultValue;return vi(e.collections,r)};var Yl;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Yl||(Yl={}));const Jl={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ec=e=>t=>{const r=t.theme,n=Kl(Jl,r[Yl.colorScheme]);return r.options&&r.options.color?Zl(n,e,r.options.color):Zl(n,e)},tc={Brand:{1:ec("Brand.1"),2:ec("Brand.2"),3:ec("Brand.3"),4:ec("Brand.4"),5:ec("Brand.5"),6:ec("Brand.6")},Primary:ec("Primary"),PrimaryDark:ec("PrimaryDark"),Secondary:ec("Secondary"),Accent:{Light:{1:ec("Accent.Light.1"),2:ec("Accent.Light.2"),3:ec("Accent.Light.3"),4:ec("Accent.Light.4"),5:ec("Accent.Light.5"),6:ec("Accent.Light.6")},Dark:{1:ec("Accent.Dark.1"),2:ec("Accent.Dark.2"),3:ec("Accent.Dark.3")}},Neutral:{1:ec("Neutral.1"),2:ec("Neutral.2"),3:ec("Neutral.3"),4:ec("Neutral.4"),5:ec("Neutral.5"),6:ec("Neutral.6"),7:ec("Neutral.7"),8:ec("Neutral.8")},Validation:{Green:{Text:ec("Validation.Green.Text"),Icon:ec("Validation.Green.Icon"),Border:ec("Validation.Green.Border"),Background:ec("Validation.Green.Background")},Orange:{Text:ec("Validation.Orange.Text"),Icon:ec("Validation.Orange.Icon"),Border:ec("Validation.Orange.Border"),Background:ec("Validation.Orange.Background"),Badge:ec("Validation.Orange.Badge")},Red:{Text:ec("Validation.Red.Text"),Icon:ec("Validation.Red.Icon"),Border:ec("Validation.Red.Border"),Background:ec("Validation.Red.Background")},Blue:{Text:ec("Validation.Blue.Text"),Icon:ec("Validation.Blue.Icon"),Border:ec("Validation.Blue.Border"),Background:ec("Validation.Blue.Background")}},Shadow:{Accent:ec("Shadow.Accent"),Red:ec("Shadow.Red"),Elevation:ec("Shadow.Elevation")}},rc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},nc=e=>Object.keys(rc).reduce(((t,r)=>{const n=rc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),ic=nc("max-width"),oc=(nc("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ac=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sc=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||tc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ac} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,lc=f(sc)`
    animation-delay: -0.45s;
`,cc=f(sc)`
    animation-delay: -0.3s;
`,uc=f(sc)`
    animation-delay: -0.15s;
`,dc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},hc={collections:{base:{D1:{fontFamily:dc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:dc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:dc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:dc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:dc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:dc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:dc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:dc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:dc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:dc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:dc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:dc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},pc=e=>t=>{const r=t.theme,n=Kl(hc,r[Yl.textStyleScheme]);return r.options&&r.options.textStyle?Zl(n,e,r.options.textStyle):Zl(n,e)},fc={D1:{fontFamily:pc("D1.fontFamily"),fontSize:pc("D1.fontSize"),fontWeight:pc("D1.fontWeight"),lineHeight:pc("D1.lineHeight"),letterSpacing:pc("D1.letterSpacing")},D2:{fontFamily:pc("D2.fontFamily"),fontSize:pc("D2.fontSize"),fontWeight:pc("D2.fontWeight"),lineHeight:pc("D2.lineHeight"),letterSpacing:pc("D2.letterSpacing")},D3:{fontFamily:pc("D3.fontFamily"),fontSize:pc("D3.fontSize"),fontWeight:pc("D3.fontWeight"),lineHeight:pc("D3.lineHeight"),letterSpacing:pc("D3.letterSpacing")},D4:{fontFamily:pc("D4.fontFamily"),fontSize:pc("D4.fontSize"),fontWeight:pc("D4.fontWeight"),lineHeight:pc("D4.lineHeight"),letterSpacing:pc("D4.letterSpacing")},DBody:{fontFamily:pc("DBody.fontFamily"),fontSize:pc("DBody.fontSize"),fontWeight:pc("DBody.fontWeight"),lineHeight:pc("DBody.lineHeight"),letterSpacing:pc("DBody.letterSpacing")},H1:{fontFamily:pc("H1.fontFamily"),fontSize:pc("H1.fontSize"),fontWeight:pc("H1.fontWeight"),lineHeight:pc("H1.lineHeight"),letterSpacing:pc("H1.letterSpacing")},H2:{fontFamily:pc("H2.fontFamily"),fontSize:pc("H2.fontSize"),fontWeight:pc("H2.fontWeight"),lineHeight:pc("H2.lineHeight"),letterSpacing:pc("H2.letterSpacing")},H3:{fontFamily:pc("H3.fontFamily"),fontSize:pc("H3.fontSize"),fontWeight:pc("H3.fontWeight"),lineHeight:pc("H3.lineHeight"),letterSpacing:pc("H3.letterSpacing")},H4:{fontFamily:pc("H4.fontFamily"),fontSize:pc("H4.fontSize"),fontWeight:pc("H4.fontWeight"),lineHeight:pc("H4.lineHeight"),letterSpacing:pc("H4.letterSpacing")},H5:{fontFamily:pc("H5.fontFamily"),fontSize:pc("H5.fontSize"),fontWeight:pc("H5.fontWeight"),lineHeight:pc("H5.lineHeight"),letterSpacing:pc("H5.letterSpacing")},H6:{fontFamily:pc("H6.fontFamily"),fontSize:pc("H6.fontSize"),fontWeight:pc("H6.fontWeight"),lineHeight:pc("H6.lineHeight"),letterSpacing:pc("H6.letterSpacing")},Body:{fontFamily:pc("Body.fontFamily"),fontSize:pc("Body.fontSize"),fontWeight:pc("Body.fontWeight"),lineHeight:pc("Body.lineHeight"),letterSpacing:pc("Body.letterSpacing")},BodySmall:{fontFamily:pc("BodySmall.fontFamily"),fontSize:pc("BodySmall.fontSize"),fontWeight:pc("BodySmall.fontWeight"),lineHeight:pc("BodySmall.lineHeight"),letterSpacing:pc("BodySmall.letterSpacing")},XSmall:{fontFamily:pc("XSmall.fontFamily"),fontSize:pc("XSmall.fontSize"),fontWeight:pc("XSmall.fontWeight"),lineHeight:pc("XSmall.lineHeight"),letterSpacing:pc("XSmall.letterSpacing")}},gc=e=>{switch(e){case 700:case"bold":return dc.Bold;case 600:case"semibold":return dc.Semibold;case 300:case"light":return dc.Light;case 400:case"regular":return dc.Regular;default:return""}},mc=(e,t)=>r=>{var n;const i=fc[e].fontFamily(r),o=fc[e].fontWeight(r);return Object.values(dc).includes(i)?m`
                font-family: ${gc(t)||gc(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(n=yc(t)||o)&&void 0!==n?n:"normal"};
        `},yc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},bc=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},vc=(e,t,r=!1)=>n=>{const i=fc[e],o=i.fontSize(n);return m`
            ${mc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${m`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},wc=(e=!1,t=!1,r=void 0)=>t?m`
            display: block;
            ${bc(r)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${bc(r)}
        `;var Sc;!function(e){e.D1=f.h1`
        ${e=>m`
                ${vc("D1",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${vc("D2",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${vc("D3",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${vc("D4",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${vc("DBody",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${vc("H1",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${vc("H2",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${vc("H3",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${vc("H4",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${vc("H5",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${vc("H6",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${vc("Body",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${vc("BodySmall",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${vc("XSmall",e.weight,e.paragraph)}
                color: ${tc.Neutral[1]};
                ${wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>$c(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>$c(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Sc||(Sc={}));const xc=f.a`
    ${e=>m`
            ${vc(e.textStyle,e.weight)}
            color: ${tc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${tc.Secondary};

                svg {
                    color: ${tc.Secondary};
                }
            }
        `}
`,Fc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,$c=r=>{var{external:n=!1,children:i}=r,o=B(r,["external","children"]);return e(xc,Object.assign({},o,{children:[i,n&&t(Fc,{})]}))};var _c;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(_c||(_c={}));const Bc={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${tc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${tc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${tc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${tc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${tc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${tc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},kc=e=>t=>{var r;const n=t.theme,i=Kl(Bc,n[Yl.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Zl(i,e,n.options.designToken):Zl(i,e)},Oc={InputBoxShadow:kc("InputBoxShadow"),InputErrorBoxShadow:kc("InputErrorBoxShadow"),ElevationBoxShadow:kc("ElevationBoxShadow"),Table:{Header:kc("Table.Header"),Cell:{Primary:kc("Table.Cell.Primary"),Secondary:kc("Table.Cell.Secondary"),Selected:kc("Table.Cell.Selected"),Hover:kc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:kc("Button.Danger.BackgroundColor"),Hover:kc("Button.Danger.Hover"),Primary:kc("Button.Danger.Primary"),Border:kc("Button.Danger.Border")}}};f.button`
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
                    background-color: ${tc.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Oc.Button.Danger.Border:tc.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Oc.Button.Danger.Primary:tc.Primary};
                    }
                `;case"light":return m`
                    background-color: ${tc.Neutral[8]};
                    border: 1px solid ${tc.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Oc.Button.Danger.Primary:tc.Primary};
                    }
                `;case"disabled":return m`
                    background-color: ${tc.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${tc.Neutral[3]};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Oc.Button.Danger.Primary:tc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Oc.Button.Danger.Hover:tc.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Oc.Button.Danger.BackgroundColor:tc.Primary};
                    border: 1px solid transparent;

                    ${ic.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${tc.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${vc("H5","semibold")}
                    }

                    ${ic.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${vc("H4","semibold")}
                    }

                    ${ic.mobileS} {
                        height: auto;
                    }
                `}
`;const Dc=f((({color:r,className:n,size:i=18})=>e(oc,Object.assign({className:n,$size:i,$color:r},{children:[t(sc,{id:"inner1",$size:i-2,$borderWidth:2}),t(lc,{id:"inner2",$size:i-2,$borderWidth:2}),t(cc,{id:"inner3",$size:i-2,$borderWidth:2}),t(uc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Oc.Button.Danger.Primary:tc.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=tc.Neutral[3](e);break;default:t=tc.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Ac;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Ac||(Ac={}));const jc=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Ec=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return m`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${jc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?tc.Neutral[4](e):e.$unchecked?tc.Accent.Light[2](e):tc.Primary(e)};
    }
`,Cc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Ic=f(Xl.div)`
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
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${tc.Neutral[4]};
        border-right: 5px solid ${tc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${ic.mobileL} {
        max-height: 15rem;
    }
`,zc=f.li`
    :hover,
    :focus,
    :active {
        background: ${tc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${tc.Accent.Light[5]};
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
        outline-color: ${tc.Accent.Light[3]};
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
    ${vc("Body","regular")}
    color: ${tc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hc}
`,Lc=f.div`
    color: ${tc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Hc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${vc("BodySmall","semibold")}
                `:m`
                    ${vc("Body","regular")}
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

                    ${Lc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Mc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Vc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Wc=f((r=>{var{className:n,checked:i,disabled:a,indeterminate:s,onChange:c,onKeyPress:u,displaySize:d="default"}=r,h=B(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=l();o((()=>{p.current.indeterminate=s}),[s]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Ec,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,$displaySize:d,$disabled:a,$unchecked:!(s||i||a)},{children:[t(Cc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:a},h)),s?t(v,{"data-testid":"indeterminate"}):i?t(w,{"data-testid":"checkmark"}):a?t(S,{"data-testid":"disabled-empty-checkbox"}):t(x,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,qc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Uc=f.button`
    ${vc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${tc.Primary(e)};\n\t\t`}
`,Qc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Gc=f(Sc.Body)``,Xc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${tc.Validation.Red.Icon};
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&m`
                background-color: ${tc.Neutral[7]};
            `}
    }
`,Kc=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(Zc,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))}));f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${tc.Neutral[5]};
    border-radius: 4px;
    background: ${tc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${tc.Accent.Light[1]};
        box-shadow: ${Oc.InputBoxShadow};
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
                background: ${tc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${tc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${tc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${tc.Validation.Red.Border};
                    box-shadow: ${Oc.InputErrorBoxShadow};
                }
            `:void 0}
`;const Yc=f.input`
    ${vc("Body","regular")}
    color: ${tc.Neutral[1]};
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
        color: ${tc.Neutral[3]};
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
`,Jc=f.li`
    background: ${tc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,eu=f(Yc)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,tu=f($)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${tc.Neutral[3]};
`,ru=f(Kc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${tc.Neutral[3]};
    cursor: pointer;
`,nu=f(F)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${tc.Neutral[3]};
`,iu=c(((r,n)=>{const{onClear:i}=r,o=B(r,["onClear"]);return e(Jc,{children:[t(tu,{}),t(eu,Object.assign({ref:n},o)),o.value&&t(ru,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(nu,{})}))]},"search")})),ou=n=>{var{listItems:i,listExtractor:a,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:S,onRetry:x,itemsLoadState:F="success",itemTruncationType:$="end",itemMaxLines:_=2,labelDisplayType:k="inline",renderListItem:O,onBlur:D,hideNoResultsDisplay:A,renderCustomCallToAction:j}=n,E=B(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,I]=s(0),[P,z]=s(""),[T,H]=s(i),[N,L]=s(0),R=jl({height:N}),M=l(),V=l(),W=l([]),q=l(),U=l(),Q=l(C),G=l(T),X=e=>{Q.current=e,I(e)},Z=e=>{G.current=e,H(e)};o((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),o((()=>{ee(P)}),[P]),o((()=>{if(z(""),h){if(setTimeout((()=>{L(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else L(0)}),[h]),o((()=>{if(h){const e=te();L(e)}}),[T,F]),o((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>a?a(e):e.toString(),Y=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Ac.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},J=e=>!!fo(w,(t=>mo(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var r;const n=K(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{if(M&&M.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},ne=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{x&&x()},se=()=>{D&&D()},le=n=>e(r,{children:[t(Mc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(Vc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=K(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":k;return e(Rc,Object.assign({$labelDisplayType:l},{children:[t(Nc,Object.assign({$truncateType:$,$maxLines:_,"aria-label":i},{children:"middle"===$&&a?le(i):i})),o&&t(Lc,Object.assign({$truncateType:$,$maxLines:_,$labelDisplayType:k,"aria-label":o},{children:"middle"===$&&s?le(o):o}))]}))},ue=()=>{if(!x||x&&"success"===F)return T.map(((r,n)=>t(zc,Object.assign({$checked:J(r)&&!v},{children:e(Tc,Object.assign({$hasNextLineLabel:"next-line"===k&&T.length>0&&a&&"string"!=typeof a(T[0]),onClick:e=>{ne(e,r)},ref:e=>W.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Wc,{checked:J(r),displaySize:"small"}),O?O(r,{selected:J(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(r,n))))},de=()=>{if(v&&T.length>0&&!P&&"success"===F)return t(qc,{children:t(Uc,Object.assign({onClick:S,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!A&&(P||!p)&&0===T.length&&"success"===F)return e(Qc,Object.assign({"data-testid":"list-no-results"},{children:[t(Xc,{"data-testid":"no-result-icon"}),t(Gc,{children:"No results found."})]}),"noResults")},pe=()=>{if(x&&"loading"===F)return e(Qc,Object.assign({"data-testid":"list-loading"},{children:[t(Dc,{$buttonStyle:"secondary",size:24}),t(Gc,{children:"Loading..."})]}),"loading")},fe=()=>{if(x&&"fail"===F)return e(Qc,Object.assign({"data-testid":"list-fail"},{children:[t(Xc,{"data-testid":"load-error-icon"}),t(Gc,{children:"Failed to load."}),t(Uc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(Ic,Object.assign({style:R,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:M},{children:[(()=>{if(h)return e(Pc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},E,{children:[(p||m)&&"success"===F?t(iu,{ref:q,onChange:ie,value:P,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&j)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:j(y,T)}))})()]}))})},au="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",su=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,lu=m`
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
        outline: 2px solid ${tc.Accent.Light[3]};
    }
`,cu=f.button`
    ${lu}
    cursor: pointer;
`;f.div`
    ${lu}
`;const uu=g`
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
`,du=f.div`
    position: relative;
    border: 1px solid ${tc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${tc.Neutral[8]};

    :focus-within {
        border: 1px solid ${tc.Accent.Light[1]};
        box-shadow: ${Oc.InputBoxShadow};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${uu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${tc.Neutral[6](e)};

                ${cu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${tc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${cu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${tc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${tc.Validation.Red.Border(e)};
                    box-shadow: ${Oc.InputErrorBoxShadow};
                }
            `:void 0}
`,hu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${au};
    margin-left: 1rem;
`,pu=f(_)`
    color: ${tc.Neutral[3]};
    height: ${fc.Body.fontSize}rem;
    width: ${fc.Body.fontSize}rem;
`,fu=f.div`
    height: 1px;
    background: ${tc.Neutral[5]};
    margin: 0 0.5rem;
`,gu=f.div`
    display: flex;
    flex: 1;
`,mu=f(Sc.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,yu=f(mu)`
    color: ${tc.Neutral[3]};
`,bu=({children:e,show:r,error:n,disabled:i,testId:a,onBlur:s,readOnly:c,className:u})=>{const d=l();return((e,t,r="window",n)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;r&&s()}}),"document"),t(su,Object.assign({className:u},{children:t(du,Object.assign({ref:d,error:n&&!r,disabled:i,$readOnly:c,expanded:r,"data-testid":a},{children:e}))}))},vu=n=>{var{selectedOption:i,placeholder:a="Select",options:c,disabled:u,error:d,className:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:y,valueExtractor:b,valueToStringFunction:v,listExtractor:w,displayValueExtractor:S,onSelectOption:x,listStyleWidth:F,onShowOptions:$,onHideOptions:_,onRetry:k,optionsLoadState:O="success",optionTruncationType:D="end",renderCustomSelectedOption:A,renderListItem:j,hideNoResultsDisplay:E,renderCustomCallToAction:C,onBlur:I}=n,P=B(n,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction","onBlur"]);const[z,T]=s(i),[H,N]=s(!1),L=l(),R=l();o((()=>{T(i)}),[i]);const M=(e,t)=>{T(e),N(!1),q(!1),L&&L.current.focus(),x&&x(e,t)},V=e=>{H&&(N(!1),q(!1)),e&&L&&L.current.focus()},W=e=>{if("middle"===D){let t=0;return R&&R.current&&(t=R.current.getBoundingClientRect().width),Ac.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(e),t,120,8)}return e},q=e=>{!e&&_&&_(),e&&$&&$()};return e(bu,Object.assign({className:h,show:H,error:d&&!H,disabled:u,readOnly:P.readOnly,testId:p,onBlur:()=>{null==I||I(),N(!1),q(!1)}},{children:[t(cu,Object.assign({ref:L,type:"button","data-testid":f||"selector",disabled:u,onClick:e=>{e.preventDefault(),u||P.readOnly||(N(!H),q(!H),H&&(null==I||I()))},onBlur:()=>{H||null==I||I()}},P,{children:e(r,{children:[t(gu,Object.assign({ref:R},{children:z?A?A(z):t(mu,Object.assign({truncateType:D},{children:W(S?S(z):b?b(z):z.toString())})):t(yu,Object.assign({truncateType:D},{children:a}))})),!P.readOnly&&t(hu,Object.assign({expanded:H},{children:t(pu,{})}))]})})),H&&t(fu,{}),c&&c.length>0?t(ou,{listItems:c,onSelectItem:M,onDismiss:V,valueExtractor:b,listExtractor:w,listStyleWidth:F,visible:H,enableSearch:g,searchPlaceholder:y,searchFunction:m,"data-testid":"dropdown-list",selectedItems:z?[z]:[],onRetry:k,itemsLoadState:O,itemTruncationType:D,renderListItem:j,hideNoResultsDisplay:E,renderCustomCallToAction:C}):null]}))};export{vu as InputSelect};
//# sourceMappingURL=index.js.map
