import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useState as o,useRef as a,useEffect as s,useLayoutEffect as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as F,SquareIcon as x}from"@lifesg/react-icons";import{CrossIcon as S}from"@lifesg/react-icons/cross";import{MagnifierIcon as $}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";function B(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O=function(){this.__data__=[],this.size=0};var E=function(e,t){return e===t||e!=e&&t!=t},A=E;var C=function(e,t){for(var r=e.length;r--;)if(A(e[r][0],t))return r;return-1},j=C,I=Array.prototype.splice;var P=C;var T=C;var z=C;var H=O,N=function(e){var t=this.__data__,r=j(t,e);return!(r<0)&&(r==t.length-1?t.pop():I.call(t,r,1),--this.size,!0)},L=function(e){var t=this.__data__,r=P(t,e);return r<0?void 0:t[r][1]},R=function(e){return T(this.__data__,e)>-1},M=function(e,t){var r=this.__data__,n=z(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function V(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}V.prototype.clear=H,V.prototype.delete=N,V.prototype.get=L,V.prototype.has=R,V.prototype.set=M;var W=V,q=W;var U=function(){this.__data__=new q,this.size=0};var Q=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var G=function(e){return this.__data__.get(e)};var X=function(e){return this.__data__.has(e)},Z="object"==typeof k&&k&&k.Object===Object&&k,K=Z,Y="object"==typeof self&&self&&self.Object===Object&&self,J=K||Y||Function("return this")(),ee=J.Symbol,te=ee,re=Object.prototype,ne=re.hasOwnProperty,ie=re.toString,oe=te?te.toStringTag:void 0;var ae=function(e){var t=ne.call(e,oe),r=e[oe];try{e[oe]=void 0;var n=!0}catch(e){}var i=ie.call(e);return n&&(t?e[oe]=r:delete e[oe]),i},se=Object.prototype.toString;var le=ae,ce=function(e){return se.call(e)},ue=ee?ee.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ue&&ue in Object(e)?le(e):ce(e)};var he=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},pe=de,fe=he;var ge,me=function(e){if(!fe(e))return!1;var t=pe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ye=J["__core-js_shared__"],be=(ge=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var ve=function(e){return!!be&&be in e},we=Function.prototype.toString;var Fe=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=me,Se=ve,$e=he,_e=Fe,Be=/^\[object .+?Constructor\]$/,ke=Function.prototype,De=Object.prototype,Oe=ke.toString,Ee=De.hasOwnProperty,Ae=RegExp("^"+Oe.call(Ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ce=function(e){return!(!$e(e)||Se(e))&&(xe(e)?Ae:Be).test(_e(e))},je=function(e,t){return null==e?void 0:e[t]};var Ie=function(e,t){var r=je(e,t);return Ce(r)?r:void 0},Pe=Ie(J,"Map"),Te=Ie(Object,"create"),ze=Te;var He=function(){this.__data__=ze?ze(null):{},this.size=0};var Ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Le=Te,Re=Object.prototype.hasOwnProperty;var Me=function(e){var t=this.__data__;if(Le){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Re.call(t,e)?t[e]:void 0},Ve=Te,We=Object.prototype.hasOwnProperty;var qe=Te;var Ue=He,Qe=Ne,Ge=Me,Xe=function(e){var t=this.__data__;return Ve?void 0!==t[e]:We.call(t,e)},Ze=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=qe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ke.prototype.clear=Ue,Ke.prototype.delete=Qe,Ke.prototype.get=Ge,Ke.prototype.has=Xe,Ke.prototype.set=Ze;var Ye=Ke,Je=W,et=Pe;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var rt=function(e,t){var r=e.__data__;return tt(t)?r["string"==typeof t?"string":"hash"]:r.map},nt=rt;var it=rt;var ot=rt;var at=rt;var st=function(){this.size=0,this.__data__={hash:new Ye,map:new(et||Je),string:new Ye}},lt=function(e){var t=nt(this,e).delete(e);return this.size-=t?1:0,t},ct=function(e){return it(this,e).get(e)},ut=function(e){return ot(this,e).has(e)},dt=function(e,t){var r=at(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function ht(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ht.prototype.clear=st,ht.prototype.delete=lt,ht.prototype.get=ct,ht.prototype.has=ut,ht.prototype.set=dt;var pt=ht,ft=W,gt=Pe,mt=pt;var yt=W,bt=U,vt=Q,wt=G,Ft=X,xt=function(e,t){var r=this.__data__;if(r instanceof ft){var n=r.__data__;if(!gt||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new mt(n)}return r.set(e,t),this.size=r.size,this};function St(e){var t=this.__data__=new yt(e);this.size=t.size}St.prototype.clear=bt,St.prototype.delete=vt,St.prototype.get=wt,St.prototype.has=Ft,St.prototype.set=xt;var $t=St;var _t=pt,Bt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},kt=function(e){return this.__data__.has(e)};function Dt(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new _t;++t<r;)this.add(e[t])}Dt.prototype.add=Dt.prototype.push=Bt,Dt.prototype.has=kt;var Ot=Dt,Et=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},At=function(e,t){return e.has(t)};var Ct=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&r?new Ot:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(n)var m=a?n(g,f,d,t,e,o):n(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Et(t,(function(e,t){if(!At(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var jt=J.Uint8Array,It=E,Pt=Ct,Tt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},zt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Ht=ee?ee.prototype:void 0,Nt=Ht?Ht.valueOf:void 0;var Lt=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new jt(e),new jt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return It(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Tt;case"[object Set]":var l=1&n;if(s||(s=zt),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=Pt(s(e),s(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Nt)return Nt.call(e)==Nt.call(t)}return!1};var Rt=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Mt=Array.isArray,Vt=Rt,Wt=Mt;var qt=function(e,t,r){var n=t(e);return Wt(e)?n:Vt(n,r(e))};var Ut=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Qt=function(){return[]},Gt=Object.prototype.propertyIsEnumerable,Xt=Object.getOwnPropertySymbols,Zt=Xt?function(e){return null==e?[]:(e=Object(e),Ut(Xt(e),(function(t){return Gt.call(e,t)})))}:Qt;var Kt=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var Yt=function(e){return null!=e&&"object"==typeof e},Jt=de,er=Yt;var tr=function(e){return er(e)&&"[object Arguments]"==Jt(e)},rr=Yt,nr=Object.prototype,ir=nr.hasOwnProperty,or=nr.propertyIsEnumerable,ar=tr(function(){return arguments}())?tr:function(e){return rr(e)&&ir.call(e,"callee")&&!or.call(e,"callee")},sr={exports:{}};var lr=function(){return!1};!function(e,t){var r=J,n=lr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(sr,sr.exports);var cr=sr.exports,ur=/^(?:0|[1-9]\d*)$/;var dr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&ur.test(e))&&e>-1&&e%1==0&&e<t};var hr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},pr=de,fr=hr,gr=Yt,mr={};mr["[object Float32Array]"]=mr["[object Float64Array]"]=mr["[object Int8Array]"]=mr["[object Int16Array]"]=mr["[object Int32Array]"]=mr["[object Uint8Array]"]=mr["[object Uint8ClampedArray]"]=mr["[object Uint16Array]"]=mr["[object Uint32Array]"]=!0,mr["[object Arguments]"]=mr["[object Array]"]=mr["[object ArrayBuffer]"]=mr["[object Boolean]"]=mr["[object DataView]"]=mr["[object Date]"]=mr["[object Error]"]=mr["[object Function]"]=mr["[object Map]"]=mr["[object Number]"]=mr["[object Object]"]=mr["[object RegExp]"]=mr["[object Set]"]=mr["[object String]"]=mr["[object WeakMap]"]=!1;var yr=function(e){return gr(e)&&fr(e.length)&&!!mr[pr(e)]};var br=function(e){return function(t){return e(t)}},vr={exports:{}};!function(e,t){var r=Z,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(vr,vr.exports);var wr=vr.exports,Fr=yr,xr=br,Sr=wr&&wr.isTypedArray,$r=Sr?xr(Sr):Fr,_r=Kt,Br=ar,kr=Mt,Dr=cr,Or=dr,Er=$r,Ar=Object.prototype.hasOwnProperty;var Cr=function(e,t){var r=kr(e),n=!r&&Br(e),i=!r&&!n&&Dr(e),o=!r&&!n&&!i&&Er(e),a=r||n||i||o,s=a?_r(e.length,String):[],l=s.length;for(var c in e)!t&&!Ar.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Or(c,l))||s.push(c);return s},jr=Object.prototype;var Ir=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||jr)};var Pr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Tr=Ir,zr=Pr,Hr=Object.prototype.hasOwnProperty;var Nr=me,Lr=hr;var Rr=function(e){return null!=e&&Lr(e.length)&&!Nr(e)},Mr=Cr,Vr=function(e){if(!Tr(e))return zr(e);var t=[];for(var r in Object(e))Hr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Wr=Rr;var qr=function(e){return Wr(e)?Mr(e):Vr(e)},Ur=qt,Qr=Zt,Gr=qr;var Xr=function(e){return Ur(e,Gr,Qr)},Zr=Object.prototype.hasOwnProperty;var Kr=function(e,t,r,n,i,o){var a=1&r,s=Xr(e),l=s.length;if(l!=Xr(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Zr.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=a?n(m,g,u,t,e,o):n(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Yr=Ie(J,"DataView"),Jr=Pe,en=Ie(J,"Promise"),tn=Ie(J,"Set"),rn=Ie(J,"WeakMap"),nn=de,on=Fe,an="[object Map]",sn="[object Promise]",ln="[object Set]",cn="[object WeakMap]",un="[object DataView]",dn=on(Yr),hn=on(Jr),pn=on(en),fn=on(tn),gn=on(rn),mn=nn;(Yr&&mn(new Yr(new ArrayBuffer(1)))!=un||Jr&&mn(new Jr)!=an||en&&mn(en.resolve())!=sn||tn&&mn(new tn)!=ln||rn&&mn(new rn)!=cn)&&(mn=function(e){var t=nn(e),r="[object Object]"==t?e.constructor:void 0,n=r?on(r):"";if(n)switch(n){case dn:return un;case hn:return an;case pn:return sn;case fn:return ln;case gn:return cn}return t});var yn=$t,bn=Ct,vn=Lt,wn=Kr,Fn=mn,xn=Mt,Sn=cr,$n=$r,_n="[object Arguments]",Bn="[object Array]",kn="[object Object]",Dn=Object.prototype.hasOwnProperty;var On=function(e,t,r,n,i,o){var a=xn(e),s=xn(t),l=a?Bn:Fn(e),c=s?Bn:Fn(t),u=(l=l==_n?kn:l)==kn,d=(c=c==_n?kn:c)==kn,h=l==c;if(h&&Sn(e)){if(!Sn(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new yn),a||$n(e)?bn(e,t,r,n,i,o):vn(e,t,l,r,n,i,o);if(!(1&r)){var p=u&&Dn.call(e,"__wrapped__"),f=d&&Dn.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new yn),i(g,m,r,n,o)}}return!!h&&(o||(o=new yn),wn(e,t,r,n,i,o))},En=Yt;var An=function e(t,r,n,i,o){return t===r||(null==t||null==r||!En(t)&&!En(r)?t!=t&&r!=r:On(t,r,n,i,e,o))},Cn=$t,jn=An;var In=he;var Pn=function(e){return e==e&&!In(e)},Tn=Pn,zn=qr;var Hn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Nn=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Cn;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?jn(u,c,3,n,d):h))return!1}}return!0},Ln=function(e){for(var t=zn(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Tn(i)]}return t},Rn=Hn;var Mn=function(e){var t=Ln(e);return 1==t.length&&t[0][2]?Rn(t[0][0],t[0][1]):function(r){return r===e||Nn(r,e,t)}},Vn=de,Wn=Yt;var qn=function(e){return"symbol"==typeof e||Wn(e)&&"[object Symbol]"==Vn(e)},Un=Mt,Qn=qn,Gn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Xn=/^\w*$/;var Zn=function(e,t){if(Un(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Qn(e))||(Xn.test(e)||!Gn.test(e)||null!=t&&e in Object(t))},Kn=pt;function Yn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Yn.Cache||Kn),r}Yn.Cache=Kn;var Jn=Yn;var ei=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ti=/\\(\\)?/g,ri=function(e){var t=Jn(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ei,(function(e,r,n,i){t.push(n?i.replace(ti,"$1"):r||e)})),t}));var ni=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},ii=Mt,oi=qn,ai=ee?ee.prototype:void 0,si=ai?ai.toString:void 0;var li=function e(t){if("string"==typeof t)return t;if(ii(t))return ni(t,e)+"";if(oi(t))return si?si.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ci=li;var ui=Mt,di=Zn,hi=ri,pi=function(e){return null==e?"":ci(e)};var fi=function(e,t){return ui(e)?e:di(e,t)?[e]:hi(pi(e))},gi=qn;var mi=function(e){if("string"==typeof e||gi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},yi=fi,bi=mi;var vi=function(e,t){for(var r=0,n=(t=yi(t,e)).length;null!=e&&r<n;)e=e[bi(t[r++])];return r&&r==n?e:void 0},wi=vi;var Fi=function(e,t,r){var n=null==e?void 0:wi(e,t);return void 0===n?r:n},xi=D(Fi);var Si=fi,$i=ar,_i=Mt,Bi=dr,ki=hr,Di=mi;var Oi=function(e,t){return null!=e&&t in Object(e)},Ei=function(e,t,r){for(var n=-1,i=(t=Si(t,e)).length,o=!1;++n<i;){var a=Di(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&ki(i)&&Bi(a,i)&&(_i(e)||$i(e))};var Ai=An,Ci=Fi,ji=function(e,t){return null!=e&&Ei(e,t,Oi)},Ii=Zn,Pi=Pn,Ti=Hn,zi=mi;var Hi=vi;var Ni=function(e){return function(t){return null==t?void 0:t[e]}},Li=function(e){return function(t){return Hi(t,e)}},Ri=Zn,Mi=mi;var Vi=Mn,Wi=function(e,t){return Ii(e)&&Pi(t)?Ti(zi(e),t):function(r){var n=Ci(r,e);return void 0===n&&n===t?ji(r,e):Ai(t,n,3)}},qi=function(e){return e},Ui=Mt,Qi=function(e){return Ri(e)?Ni(Mi(e)):Li(e)};var Gi=function(e){return"function"==typeof e?e:null==e?qi:"object"==typeof e?Ui(e)?Wi(e[0],e[1]):Vi(e):Qi(e)},Xi=Gi,Zi=Rr,Ki=qr;var Yi=function(e){return function(t,r,n){var i=Object(t);if(!Zi(t)){var o=Xi(r);t=Ki(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var Ji=/\s/;var eo=function(e){for(var t=e.length;t--&&Ji.test(e.charAt(t)););return t},to=/^\s+/;var ro=function(e){return e?e.slice(0,eo(e)+1).replace(to,""):e},no=he,io=qn,oo=/^[-+]0x[0-9a-f]+$/i,ao=/^0b[01]+$/i,so=/^0o[0-7]+$/i,lo=parseInt;var co=function(e){if("number"==typeof e)return e;if(io(e))return NaN;if(no(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=no(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ro(e);var r=ao.test(e);return r||so.test(e)?lo(e.slice(2),r?2:8):oo.test(e)?NaN:+e},uo=1/0;var ho=function(e){return e?(e=co(e))===uo||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var po=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},fo=Gi,go=function(e){var t=ho(e),r=t%1;return t==t?r?t-r:t:0},mo=Math.max;var yo=D(Yi((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:go(r);return i<0&&(i=mo(n+i,0)),po(e,fo(t),i)}))),bo=An;var vo=D((function(e,t){return bo(e,t)})),wo=Object.defineProperty,Fo={};((e,t)=>{for(var r in t)wo(e,r,{get:t[r],enumerable:!0})})(Fo,{assign:()=>ea,colors:()=>Ko,createStringInterpolator:()=>Qo,skipAnimation:()=>Yo,to:()=>Go,willAdvance:()=>Jo});var xo=Ho(),So=e=>Io(e,xo),$o=Ho();So.write=e=>Io(e,$o);var _o=Ho();So.onStart=e=>Io(e,_o);var Bo=Ho();So.onFrame=e=>Io(e,Bo);var ko=Ho();So.onFinish=e=>Io(e,ko);var Do=[];So.setTimeout=(e,t)=>{const r=So.now()+t,n=()=>{const e=Do.findIndex((e=>e.cancel==n));~e&&Do.splice(e,1),Co-=~e?1:0},i={time:r,handler:e,cancel:n};return Do.splice(Oo(r),0,i),Co+=1,Po(),i};var Oo=e=>~(~Do.findIndex((t=>t.time>e))||~Do.length);So.cancel=e=>{_o.delete(e),Bo.delete(e),ko.delete(e),xo.delete(e),$o.delete(e)},So.sync=e=>{jo=!0,So.batchedUpdates(e),jo=!1},So.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,So.onStart(r)}return n.handler=e,n.cancel=()=>{_o.delete(r),t=null},n};var Eo="undefined"!=typeof window?window.requestAnimationFrame:()=>{};So.use=e=>Eo=e,So.now="undefined"!=typeof performance?()=>performance.now():Date.now,So.batchedUpdates=e=>e(),So.catch=console.error,So.frameLoop="always",So.advance=()=>{"demand"!==So.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):zo()};var Ao=-1,Co=0,jo=!1;function Io(e,t){jo?(t.delete(e),e(0)):(t.add(e),Po())}function Po(){Ao<0&&(Ao=0,"demand"!==So.frameLoop&&Eo(To))}function To(){~Ao&&(Eo(To),So.batchedUpdates(zo))}function zo(){const e=Ao;Ao=So.now();const t=Oo(Ao);t&&(No(Do.splice(0,t),(e=>e.handler())),Co-=t),Co?(_o.flush(),xo.flush(e?Math.min(64,Ao-e):16.667),Bo.flush(),$o.flush(),ko.flush()):Ao=-1}function Ho(){let e=new Set,t=e;return{add(r){Co+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Co-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Co-=t.size,No(t,(t=>t(r)&&e.add(t))),Co+=e.size,t=e)}}}function No(e,t){e.forEach((e=>{try{t(e)}catch(e){So.catch(e)}}))}function Lo(){}var Ro={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Mo(e,t){if(Ro.arr(e)){if(!Ro.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Vo=(e,t)=>e.forEach(t);function Wo(e,t,r){if(Ro.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var qo=e=>Ro.und(e)?[]:Ro.arr(e)?e:[e];function Uo(e,t){if(e.size){const r=Array.from(e);e.clear(),Vo(r,t)}}var Qo,Go,Xo=(e,...t)=>Uo(e,(e=>e(...t))),Zo=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ko=null,Yo=!1,Jo=Lo,ea=e=>{e.to&&(Go=e.to),e.now&&(So.now=e.now),void 0!==e.colors&&(Ko=e.colors),null!=e.skipAnimation&&(Yo=e.skipAnimation),e.createStringInterpolator&&(Qo=e.createStringInterpolator),e.requestAnimationFrame&&So.use(e.requestAnimationFrame),e.batchedUpdates&&(So.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Jo=e.willAdvance),e.frameLoop&&(So.frameLoop=e.frameLoop)},ta=new Set,ra=[],na=[],ia=0,oa={get idle(){return!ta.size&&!ra.length},start(e){ia>e.priority?(ta.add(e),So.onStart(aa)):(sa(e),So(ca))},advance:ca,sort(e){if(ia)So.onFrame((()=>oa.sort(e)));else{const t=ra.indexOf(e);~t&&(ra.splice(t,1),la(e))}},clear(){ra=[],ta.clear()}};function aa(){ta.forEach(sa),ta.clear(),So(ca)}function sa(e){ra.includes(e)||la(e)}function la(e){ra.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ra,(t=>t.priority>e.priority)),0,e)}function ca(e){const t=na;for(let r=0;r<ra.length;r++){const n=ra[r];ia=n.priority,n.idle||(Jo(n),n.advance(e),n.idle||t.push(n))}return ia=0,(na=ra).length=0,(ra=t).length>0}var ua="[-+]?\\d*\\.?\\d+",da=ua+"%";function ha(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var pa=new RegExp("rgb"+ha(ua,ua,ua)),fa=new RegExp("rgba"+ha(ua,ua,ua,ua)),ga=new RegExp("hsl"+ha(ua,da,da)),ma=new RegExp("hsla"+ha(ua,da,da,ua)),ya=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ba=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,va=/^#([0-9a-fA-F]{6})$/,wa=/^#([0-9a-fA-F]{8})$/;function Fa(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function xa(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Fa(i,n,e+1/3),a=Fa(i,n,e),s=Fa(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Sa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function $a(e){return(parseFloat(e)%360+360)%360/360}function _a(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ba(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ka(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=va.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ko&&void 0!==Ko[e]?Ko[e]:(t=pa.exec(e))?(Sa(t[1])<<24|Sa(t[2])<<16|Sa(t[3])<<8|255)>>>0:(t=fa.exec(e))?(Sa(t[1])<<24|Sa(t[2])<<16|Sa(t[3])<<8|_a(t[4]))>>>0:(t=ya.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=wa.exec(e))?parseInt(t[1],16)>>>0:(t=ba.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ga.exec(e))?(255|xa($a(t[1]),Ba(t[2]),Ba(t[3])))>>>0:(t=ma.exec(e))?(xa($a(t[1]),Ba(t[2]),Ba(t[3]))|_a(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Da=(e,t,r)=>{if(Ro.fun(e))return e;if(Ro.arr(e))return Da({range:e,output:t,extrapolate:r});if(Ro.str(e.output[0]))return Qo(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var Oa=1.70158,Ea=1.525*Oa,Aa=Oa+1,Ca=2*Math.PI/3,ja=2*Math.PI/4.5,Ia=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Pa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Aa*e*e*e-Oa*e*e,easeOutBack:e=>1+Aa*Math.pow(e-1,3)+Oa*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ea)/2:(Math.pow(2*e-2,2)*((Ea+1)*(2*e-2)+Ea)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ca),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ca)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*ja)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*ja)/2+1,easeInBounce:e=>1-Ia(1-e),easeOutBounce:Ia,easeInOutBounce:e=>e<.5?(1-Ia(1-2*e))/2:(1+Ia(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Ta=Symbol.for("FluidValue.get"),za=Symbol.for("FluidValue.observers"),Ha=e=>Boolean(e&&e[Ta]),Na=e=>e&&e[Ta]?e[Ta]():e,La=e=>e[za]||null;function Ra(e,t){const r=e[za];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ma=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Va(this,e)}},Va=(e,t)=>Qa(e,Ta,t);function Wa(e,t){if(e[Ta]){let r=e[za];r||Qa(e,za,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function qa(e,t){const r=e[za];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[za]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ua,Qa=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ga=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Xa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Za=new RegExp(`(${Ga.source})(%|[a-z]+)`,"i"),Ka=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ya=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ja=e=>{const[t,r]=es(e);if(!t||Zo())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ya.test(r)?Ja(r):r||e},es=e=>{const t=Ya.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ts=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,rs=e=>{Ua||(Ua=Ko?new RegExp(`(${Object.keys(Ko).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Na(e).replace(Ya,Ja).replace(Xa,ka).replace(Ua,ka))),r=t.map((e=>e.match(Ga).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Da({...e,output:t})));return e=>{const r=!Za.test(t[0])&&t.find((e=>Za.test(e)))?.replace(Ga,"");let i=0;return t[0].replace(Ga,(()=>`${n[i++](e)}${r||""}`)).replace(Ka,ts)}},ns="react-spring: ",is=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ns}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},os=is(console.warn);var as=is(console.warn);function ss(e){return Ro.str(e)&&("#"==e[0]||/\d/.test(e)||!Zo()&&Ya.test(e)||e in(Ko||{}))}var ls=Zo()?s:l,cs=()=>{const e=a(!1);return ls((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function us(){const e=o()[1],t=cs();return()=>{t.current&&e(Math.random())}}var ds=e=>s(e,hs),hs=[];function ps(e){const t=a();return s((()=>{t.current=e})),t.current}var fs=Symbol.for("Animated:node"),gs=e=>e&&e[fs],ms=(e,t)=>{return r=e,n=fs,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},ys=e=>e&&e[fs]&&e[fs].getPayload(),bs=class{constructor(){ms(this,this)}getPayload(){return this.payload||[]}},vs=class extends bs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ro.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new vs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ro.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ro.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ws=class extends vs{constructor(e){super(0),this._string=null,this._toString=Da({output:[e,e]})}static create(e){return new ws(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ro.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Da({output:[this.getValue(),e]})),this._value=0,super.reset()}},Fs={dependencies:null},xs=class extends bs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Wo(this.source,((r,n)=>{var i;(i=r)&&i[fs]===i?t[n]=r.getValue(e):Ha(r)?t[n]=Na(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Vo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Wo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Fs.dependencies&&Ha(e)&&Fs.dependencies.add(e);const t=ys(e);t&&Vo(t,(e=>this.add(e)))}},Ss=class extends xs{constructor(e){super(e)}static create(e){return new Ss(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map($s)),!0)}};function $s(e){return(ss(e)?ws:vs).create(e)}function _s(e){const t=gs(e);return t?t.constructor:Ro.arr(e)?Ss:ss(e)?ws:vs}var Bs=(e,t)=>{const r=!Ro.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,o)=>{const l=a(null),c=r&&u((e=>{l.current=function(e,t){e&&(Ro.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[d,h]=function(e,t){const r=new Set;Fs.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new xs(e),Fs.dependencies=null,[e,r]}(i,t),p=us(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new ks(f,h),m=a();ls((()=>(m.current=g,Vo(h,(e=>Wa(e,g))),()=>{m.current&&(Vo(m.current.deps,(e=>qa(e,m.current))),So.cancel(m.current.update))}))),s(f,[]),ds((()=>()=>{const e=m.current;Vo(e.deps,(t=>qa(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,{...y,ref:c})}))},ks=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&So.write(this.update)}};var Ds=Symbol.for("AnimatedComponent"),Os=e=>Ro.str(e)?e:e&&Ro.str(e.displayName)?e.displayName:Ro.fun(e)&&e.name||null;function Es(e,...t){return Ro.fun(e)?e(...t):e}var As=(e,t)=>!0===e||!!(t&&e&&(Ro.fun(e)?e(t):qo(e).includes(t))),Cs=(e,t)=>Ro.obj(e)?t&&e[t]:e,js=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Is=e=>e,Ps=(e,t=Is)=>{let r=Ts;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ro.und(r)||(n[i]=r)}return n},Ts=["config","onProps","onStart","onChange","onPause","onResume","onRest"],zs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Hs(e){const t=function(e){const t={};let r=0;if(Wo(e,((e,n)=>{zs[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Wo(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Ns(e){return e=Na(e),Ro.arr(e)?e.map(Ns):ss(e)?Fo.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ls(e){return Ro.fun(e)||Ro.arr(e)&&Ro.obj(e[0])}var Rs={tension:170,friction:26,mass:1,damping:1,easing:Pa.linear,clamp:!1},Ms=class{constructor(){this.velocity=0,Object.assign(this,Rs)}};function Vs(e,t){if(Ro.und(t.decay)){const r=!Ro.und(t.tension)||!Ro.und(t.friction);!r&&Ro.und(t.frequency)&&Ro.und(t.damping)&&Ro.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ws=[],qs=class{constructor(){this.changed=!1,this.values=Ws,this.toValues=null,this.fromValues=Ws,this.config=new Ms,this.immediate=!1}};function Us(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=As(r.cancel??n?.cancel,t);if(u)p();else{Ro.und(r.pause)||(i.paused=As(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||As(e,t)),l=Es(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-So.now()}function h(){l>0&&!Fo.skipAnimation?(i.delayed=!0,c=So.setTimeout(p,l),i.pauseQueue.add(d),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...r,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Qs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Zs(e.get()):t.every((e=>e.noop))?Gs(e.get()):Xs(e.get(),t.every((e=>e.finished))),Gs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Xs=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Zs=e=>({value:e,cancelled:!0,finished:!1});function Ks(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Ps(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(r.cancelId||0)&&Zs(n)||i!==r.asyncId&&Xs(n,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new Js,a=new el;return(async()=>{if(Fo.skipAnimation)throw Ys(r),a.result=Xs(n,!1),d(a),a;p(o);const s=Ro.obj(e)?{...e}:{...t,to:e};s.parentId=i,Wo(c,((e,t)=>{Ro.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Fo.skipAnimation)return Ys(r),Xs(n,!1);try{let t;t=Ro.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Xs(n.get(),!0,!1)}catch(e){if(e instanceof Js)g=e.result;else{if(!(e instanceof el))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Ro.fun(a)&&So.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Ys(e,t){Uo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Js=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},el=class extends Error{constructor(){super("SkipAnimationSignal")}},tl=e=>e instanceof nl,rl=1,nl=class extends Ma{constructor(){super(...arguments),this.id=rl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=gs(this);return e&&e.getValue()}to(...e){return Fo.to(this,e)}interpolate(...e){return os(`${ns}The "interpolate" function is deprecated in v9 (use "to" instead)`),Fo.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ra(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||oa.sort(this),Ra(this,{type:"priority",parent:this,priority:e})}},il=Symbol.for("SpringPhase"),ol=e=>(1&e[il])>0,al=e=>(2&e[il])>0,sl=e=>(4&e[il])>0,ll=(e,t)=>t?e[il]|=3:e[il]&=-3,cl=(e,t)=>t?e[il]|=4:e[il]&=-5,ul=class extends nl{constructor(e,t){if(super(),this.animation=new qs,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ro.und(e)||!Ro.und(t)){const r=Ro.obj(e)?{...e}:{...t,from:e};Ro.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(al(this)||this._state.asyncTo)||sl(this)}get goal(){return Na(this.animation.to)}get velocity(){const e=gs(this);return e instanceof vs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ol(this)}get isAnimating(){return al(this)}get isPaused(){return sl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=ys(n.to);!a&&Ha(n.to)&&(i=qo(Na(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ws?1:a?a[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ro.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Ro.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Ro.und(n),p=r==c?s.v0>0:r<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*n,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+o.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(r=!0)}));const s=gs(this),l=s.getValue();if(t){const e=Na(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return So.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(al(this)){const{to:e,config:t}=this.animation;So.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ro.und(e)?(r=this.queue||[],this.queue=[]):r=[Ro.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Qs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ys(this._state,e&&this._lastCallId),So.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ro.obj(r)?r[t]:r,(null==r||Ls(r))&&(r=void 0),n=Ro.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return ol(this)||(e.reverse&&([r,n]=[n,r]),n=Na(n),Ro.und(n)?gs(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ps(e,((e,t)=>/^on/.test(t)?Cs(e,r):e))),yl(this,e,"onProps"),bl(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Us(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{sl(this)||(cl(this,!0),Xo(o.pauseQueue),bl(this,"onPause",Xs(this,dl(this,this.animation.to)),this))},resume:()=>{sl(this)&&(cl(this,!1),al(this)&&this._resume(),Xo(o.resumeQueue),bl(this,"onResume",Xs(this,dl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=hl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Zs(this));const n=!Ro.und(e.to),i=!Ro.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Zs(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Ro.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Mo(d,c);h&&(s.from=d),d=Na(d);const p=!Mo(u,l);p&&this._focus(u);const f=Ls(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!f&&function(e,t,r){r&&(Vs(r={...r},t),t={...r,...t}),Vs(e,t),Object.assign(e,t);for(const t in Rs)null==e[t]&&(e[t]=Rs[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Ro.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,Es(t.config,o),t.config!==a.config?Es(a.config,o):void 0);let b=gs(this);if(!b||Ro.und(u))return r(Xs(this,!0));const v=Ro.und(t.reset)?i&&!t.default:!Ro.und(d)&&As(t.reset,o),w=v?d:this.get(),F=Ns(u),x=Ro.num(F)||Ro.arr(F)||ss(F),S=!f&&(!x||As(a.immediate||t.immediate,o));if(p){const e=_s(u);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(F)}}const $=b.constructor;let _=Ha(u),B=!1;if(!_){const e=v||!ol(this)&&h;(p||e)&&(B=Mo(Ns(w),F),_=!B),(Mo(s.immediate,S)||S)&&Mo(g.decay,m)&&Mo(g.velocity,y)||(_=!0)}if(B&&al(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!f&&((_||Ha(l))&&(s.values=b.getPayload(),s.toValues=Ha(u)?null:$==ws?[1]:qo(F)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),_)){const{onRest:e}=s;Vo(ml,(e=>yl(this,t,e)));const n=Xs(this,dl(this,l));Xo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&So.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?Es(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set(w),f?r(Ks(t.to,t,this._state,this)):_?this._start():al(this)&&!p?this._pendingCalls.add(r):r(Gs(w))}_focus(e){const t=this.animation;e!==t.to&&(La(this)&&this._detach(),t.to=e,La(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ha(t)&&(Wa(t,this),tl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ha(e)&&qa(e,this)}_set(e,t=!0){const r=Na(e);if(!Ro.und(r)){const e=gs(this);if(!e||!Mo(r,e.getValue())){const n=_s(r);e&&e.constructor==n?e.setValue(r):ms(this,n.create(r)),e&&So.batchedUpdates((()=>{this._onChange(r,t)}))}}return gs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,bl(this,"onStart",Xs(this,dl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Es(this.animation.onChange,e,this)),Es(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;gs(this).reset(Na(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),al(this)||(ll(this,!0),sl(this)||this._resume())}_resume(){Fo.skipAnimation?this.finish():oa.start(this)}_stop(e,t){if(al(this)){ll(this,!1);const r=this.animation;Vo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ra(this,{type:"idle",parent:this});const n=t?Zs(this.get()):Xs(this.get(),dl(this,e??r.to));Xo(this._pendingCalls,n),r.changed&&(r.changed=!1,bl(this,"onRest",n,this))}}};function dl(e,t){const r=Ns(t);return Mo(Ns(e.get()),r)}function hl(e,t=e.loop,r=e.to){const n=Es(t);if(n){const i=!0!==n&&Hs(n),o=(i||e).reverse,a=!i||i.reset;return pl({...e,loop:t,default:!1,pause:void 0,to:!o||Ls(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function pl(e){const{to:t,from:r}=e=Hs(e),n=new Set;return Ro.obj(t)&&gl(t,n),Ro.obj(r)&&gl(r,n),e.keys=n.size?Array.from(n):null,e}function fl(e){const t=pl(e);return Ro.und(t.default)&&(t.default=Ps(t)),t}function gl(e,t){Wo(e,((e,r)=>null!=e&&t.add(r)))}var ml=["onStart","onRest","onChange","onPause","onResume"];function yl(e,t,r){e.animation[r]=t[r]!==js(t,r)?Cs(t[r],e.key):void 0}function bl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var vl=["onStart","onChange","onRest"],wl=1,Fl=class{constructor(e,t){this.id=wl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ro.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(pl(e)),this}start(e){let{queue:t}=this;return e?t=qo(e).map(pl):this.queue=[],this._flush?this._flush(this,t):(Dl(this,t),xl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Vo(qo(t),(t=>r[t].stop(!!e)))}else Ys(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ro.und(e))this.start({pause:!0});else{const t=this.springs;Vo(qo(e),(e=>t[e].pause()))}return this}resume(e){if(Ro.und(e))this.start({pause:!1});else{const t=this.springs;Vo(qo(e),(e=>t[e].resume()))}return this}each(e){Wo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Uo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Uo(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Uo(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}So.onFrame(this._onFrame)}};function xl(e,t){return Promise.all(t.map((t=>Sl(e,t)))).then((t=>Qs(e,t)))}async function Sl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Ro.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Ro.arr(i)||Ro.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Vo(vl,(r=>{const n=t[r];if(Ro.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Xo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===js(t,"cancel");(u||p&&d.asyncId)&&h.push(Us(++e._lastAsyncId,{props:t,state:d,actions:{pause:Lo,resume:Lo,start(t,r){p?(Ys(d,e._lastAsyncId),r(Zs(e))):(t.onRest=s,r(Ks(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Qs(e,await Promise.all(h));if(a&&f.finished&&(!r||!f.noop)){const r=hl(t,a,i);if(r)return Dl(e,[r]),Sl(e,r,!0)}return l&&So.batchedUpdates((()=>l(f,e,e.item))),f}function $l(e,t){const r={...e.springs};return t&&Vo(qo(t),(e=>{Ro.und(e.keys)&&(e=pl(e)),Ro.obj(e.to)||(e={...e,to:void 0}),kl(r,e,(e=>Bl(e)))})),_l(e,r),r}function _l(e,t){Wo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Wa(t,e))}))}function Bl(e,t){const r=new ul;return r.key=e,t&&Wa(r,t),r}function kl(e,t,r){t.keys&&Vo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Dl(e,t){Vo(t,(t=>{kl(e.springs,t,(t=>Bl(t,e)))}))}var Ol,El,Al=({children:e,...t})=>{const r=d(Cl),i=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=o((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let l=i;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,i==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:i,immediate:l})),[i,l]);const{Provider:c}=Cl;return n.createElement(c,{value:t},e)},Cl=(Ol=Al,El={},Object.assign(Ol,n.createContext(El)),Ol.Provider._context=Ol,Ol.Consumer._context=Ol,Ol);Al.Provider=Cl.Provider,Al.Consumer=Cl.Consumer;var jl=()=>{const e=[],t=function(t){as(`${ns}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Vo(e,((e,i)=>{if(Ro.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Vo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Vo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Vo(e,((e,r)=>{const n=Ro.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Vo(e,((e,n)=>{if(Ro.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Vo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Vo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ro.fun(e)?e(r,t):e};return t._getProps=r,t};function Il(e,t){const r=Ro.fun(e),[[n],i]=function(e,t,r){const n=Ro.fun(t)&&t;n&&!r&&(r=[]);const i=h((()=>n||3==arguments.length?jl():void 0),[]),o=a(0),s=us(),l=h((()=>({ctrls:[],queue:[],flush(e,t){const r=$l(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?xl(e,t):new Promise((n=>{_l(e,r),l.queue.push((()=>{n(xl(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],p=ps(e)||0;function f(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new Fl(null,l.flush)),r=n?n(i,e):t[i];r&&(u[i]=fl(r))}}h((()=>{Vo(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),r);const g=c.current.map(((e,t)=>$l(e,u[t]))),m=d(Al),y=ps(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);ls((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Vo(e,(e=>e()))),Vo(c.current,((e,t)=>{i?.add(e),b&&e.start({default:m});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ds((()=>()=>{Vo(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Pl=class extends nl{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Da(...t);const r=this._get(),n=_s(r);ms(this,n.create(r))}advance(e){const t=this._get();Mo(t,this.get())||(gs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&zl(this._active)&&Hl(this)}_get(){const e=Ro.arr(this.source)?this.source.map(Na):qo(Na(this.source));return this.calc(...e)}_start(){this.idle&&!zl(this._active)&&(this.idle=!1,Vo(ys(this),(e=>{e.done=!1})),Fo.skipAnimation?(So.batchedUpdates((()=>this.advance())),Hl(this)):oa.start(this))}_attach(){let e=1;Vo(qo(this.source),(t=>{Ha(t)&&Wa(t,this),tl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Vo(qo(this.source),(e=>{Ha(e)&&qa(e,this)})),this._active.clear(),Hl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=qo(this.source).reduce(((e,t)=>Math.max(e,(tl(t)?t.priority:0)+1)),0))}};function Tl(e){return!1!==e.idle}function zl(e){return!e.size||Array.from(e).every(Tl)}function Hl(e){e.idle||(e.idle=!0,Vo(ys(e),(e=>{e.done=!0})),Ra(e,{type:"idle",parent:e}))}Fo.assign({createStringInterpolator:rs,to:(e,t)=>new Pl(e,t)});var Nl=/^--/;function Ll(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Nl.test(e)||Ml.hasOwnProperty(e)&&Ml[e]?(""+t).trim():t+"px"}var Rl={};var Ml={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vl=["Webkit","Ms","Moz","O"];Ml=Object.keys(Ml).reduce(((e,t)=>(Vl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ml);var Wl=/^(matrix|translate|scale|rotate|skew)/,ql=/^(translate)/,Ul=/^(rotate|skew)/,Ql=(e,t)=>Ro.num(e)&&0!==e?e+t:e,Gl=(e,t)=>Ro.arr(e)?e.every((e=>Gl(e,t))):Ro.num(e)?e===t:parseFloat(e)===t,Xl=class extends xs{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Ql(e,"px"))).join(",")})`,Gl(e,0)]))),Wo(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Wl.test(t)){if(delete n[t],Ro.und(e))return;const r=ql.test(t)?"px":Ul.test(t)?"deg":"";i.push(qo(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Ql(i,r)})`,Gl(i,0)]:e=>[`${t}(${e.map((e=>Ql(e,r))).join(",")})`,Gl(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Zl(i,o)),super(n)}},Zl=class extends Ma{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Vo(this.inputs,((r,n)=>{const i=Na(r[0]),[o,a]=this.transforms[n](Ro.arr(i)?i:r.map(Na));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Vo(this.inputs,(e=>Vo(e,(e=>Ha(e)&&Wa(e,this)))))}observerRemoved(e){0==e&&Vo(this.inputs,(e=>Vo(e,(e=>Ha(e)&&qa(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ra(this,e)}};Fo.assign({batchedUpdates:p,createStringInterpolator:rs,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Kl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new xs(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Os(e)||"Anonymous";return(e=Ro.str(e)?o[e]||(o[e]=Bs(e,i)):e[Ds]||(e[Ds]=Bs(e,i))).displayName=`Animated(${t})`,e};return Wo(e,((t,r)=>{Ro.arr(e)&&(r=Os(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Rl[t]||(Rl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Ll(t,n[t]);Nl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Xl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Yl=Kl.animated;const Jl=(e,t,r)=>t?xi(r,t)||xi(e,t):r||e,ec=(e,t)=>{const r=t||e.defaultValue;return xi(e.collections,r)};var tc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(tc||(tc={}));const rc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},nc=e=>t=>{const r=t.theme,n=ec(rc,r[tc.colorScheme]);return r.options&&r.options.color?Jl(n,e,r.options.color):Jl(n,e)},ic={Brand:{1:nc("Brand.1"),2:nc("Brand.2"),3:nc("Brand.3"),4:nc("Brand.4"),5:nc("Brand.5"),6:nc("Brand.6")},Primary:nc("Primary"),PrimaryDark:nc("PrimaryDark"),Secondary:nc("Secondary"),Accent:{Light:{1:nc("Accent.Light.1"),2:nc("Accent.Light.2"),3:nc("Accent.Light.3"),4:nc("Accent.Light.4"),5:nc("Accent.Light.5"),6:nc("Accent.Light.6")},Dark:{1:nc("Accent.Dark.1"),2:nc("Accent.Dark.2"),3:nc("Accent.Dark.3")}},Neutral:{1:nc("Neutral.1"),2:nc("Neutral.2"),3:nc("Neutral.3"),4:nc("Neutral.4"),5:nc("Neutral.5"),6:nc("Neutral.6"),7:nc("Neutral.7"),8:nc("Neutral.8")},Validation:{Green:{Text:nc("Validation.Green.Text"),Icon:nc("Validation.Green.Icon"),Border:nc("Validation.Green.Border"),Background:nc("Validation.Green.Background")},Orange:{Text:nc("Validation.Orange.Text"),Icon:nc("Validation.Orange.Icon"),Border:nc("Validation.Orange.Border"),Background:nc("Validation.Orange.Background"),Badge:nc("Validation.Orange.Badge")},Red:{Text:nc("Validation.Red.Text"),Icon:nc("Validation.Red.Icon"),Border:nc("Validation.Red.Border"),Background:nc("Validation.Red.Background")},Blue:{Text:nc("Validation.Blue.Text"),Icon:nc("Validation.Blue.Icon"),Border:nc("Validation.Blue.Border"),Background:nc("Validation.Blue.Background")}},Shadow:{Accent:nc("Shadow.Accent"),Red:nc("Shadow.Red"),Elevation:nc("Shadow.Elevation")}},oc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ac=e=>Object.keys(oc).reduce(((t,r)=>{const n=oc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),sc=ac("max-width"),lc=(ac("min-width"),f.div`
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
`,fc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},gc={collections:{base:{D1:{fontFamily:fc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:fc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:fc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:fc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:fc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:fc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:fc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:fc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:fc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:fc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:fc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:fc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:fc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:fc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},mc=e=>t=>{const r=t.theme,n=ec(gc,r[tc.textStyleScheme]);return r.options&&r.options.textStyle?Jl(n,e,r.options.textStyle):Jl(n,e)},yc={D1:{fontFamily:mc("D1.fontFamily"),fontSize:mc("D1.fontSize"),fontWeight:mc("D1.fontWeight"),lineHeight:mc("D1.lineHeight"),letterSpacing:mc("D1.letterSpacing")},D2:{fontFamily:mc("D2.fontFamily"),fontSize:mc("D2.fontSize"),fontWeight:mc("D2.fontWeight"),lineHeight:mc("D2.lineHeight"),letterSpacing:mc("D2.letterSpacing")},D3:{fontFamily:mc("D3.fontFamily"),fontSize:mc("D3.fontSize"),fontWeight:mc("D3.fontWeight"),lineHeight:mc("D3.lineHeight"),letterSpacing:mc("D3.letterSpacing")},D4:{fontFamily:mc("D4.fontFamily"),fontSize:mc("D4.fontSize"),fontWeight:mc("D4.fontWeight"),lineHeight:mc("D4.lineHeight"),letterSpacing:mc("D4.letterSpacing")},DBody:{fontFamily:mc("DBody.fontFamily"),fontSize:mc("DBody.fontSize"),fontWeight:mc("DBody.fontWeight"),lineHeight:mc("DBody.lineHeight"),letterSpacing:mc("DBody.letterSpacing")},H1:{fontFamily:mc("H1.fontFamily"),fontSize:mc("H1.fontSize"),fontWeight:mc("H1.fontWeight"),lineHeight:mc("H1.lineHeight"),letterSpacing:mc("H1.letterSpacing")},H2:{fontFamily:mc("H2.fontFamily"),fontSize:mc("H2.fontSize"),fontWeight:mc("H2.fontWeight"),lineHeight:mc("H2.lineHeight"),letterSpacing:mc("H2.letterSpacing")},H3:{fontFamily:mc("H3.fontFamily"),fontSize:mc("H3.fontSize"),fontWeight:mc("H3.fontWeight"),lineHeight:mc("H3.lineHeight"),letterSpacing:mc("H3.letterSpacing")},H4:{fontFamily:mc("H4.fontFamily"),fontSize:mc("H4.fontSize"),fontWeight:mc("H4.fontWeight"),lineHeight:mc("H4.lineHeight"),letterSpacing:mc("H4.letterSpacing")},H5:{fontFamily:mc("H5.fontFamily"),fontSize:mc("H5.fontSize"),fontWeight:mc("H5.fontWeight"),lineHeight:mc("H5.lineHeight"),letterSpacing:mc("H5.letterSpacing")},H6:{fontFamily:mc("H6.fontFamily"),fontSize:mc("H6.fontSize"),fontWeight:mc("H6.fontWeight"),lineHeight:mc("H6.lineHeight"),letterSpacing:mc("H6.letterSpacing")},Body:{fontFamily:mc("Body.fontFamily"),fontSize:mc("Body.fontSize"),fontWeight:mc("Body.fontWeight"),lineHeight:mc("Body.lineHeight"),letterSpacing:mc("Body.letterSpacing")},BodySmall:{fontFamily:mc("BodySmall.fontFamily"),fontSize:mc("BodySmall.fontSize"),fontWeight:mc("BodySmall.fontWeight"),lineHeight:mc("BodySmall.lineHeight"),letterSpacing:mc("BodySmall.letterSpacing")},XSmall:{fontFamily:mc("XSmall.fontFamily"),fontSize:mc("XSmall.fontSize"),fontWeight:mc("XSmall.fontWeight"),lineHeight:mc("XSmall.lineHeight"),letterSpacing:mc("XSmall.letterSpacing")}},bc=e=>{switch(e){case 700:case"bold":return fc.Bold;case 600:case"semibold":return fc.Semibold;case 300:case"light":return fc.Light;case 400:case"regular":return fc.Regular;default:return""}},vc=(e,t)=>r=>{var n;const i=yc[e].fontFamily(r),o=yc[e].fontWeight(r);return Object.values(fc).includes(i)?m`
                font-family: ${bc(t)||bc(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(n=wc(t)||o)&&void 0!==n?n:"normal"};
        `},wc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Fc=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},xc=(e,t,r=!1)=>n=>{const i=yc[e],o=i.fontSize(n);return m`
            ${vc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${m`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Sc=(e=!1,t=!1,r=void 0)=>t?m`
            display: block;
            ${Fc(r)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${Fc(r)}
        `;var $c;!function(e){e.D1=f.h1`
        ${e=>m`
                ${xc("D1",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${xc("D2",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${xc("D3",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${xc("D4",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${xc("DBody",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${xc("H1",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${xc("H2",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${xc("H3",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${xc("H4",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${xc("H5",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${xc("H6",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${xc("Body",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${xc("BodySmall",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${xc("XSmall",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Sc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>kc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>kc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}($c||($c={}));const _c=f.a`
    ${e=>m`
            ${xc(e.textStyle,e.weight)}
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
`,Bc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,kc=r=>{var{external:n=!1,children:i}=r,o=B(r,["external","children"]);return e(_c,Object.assign({},o,{children:[i,n&&t(Bc,{})]}))};var Dc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Dc||(Dc={}));const Oc={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${ic.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${ic.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ic.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${ic.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${ic.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ic.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ec=e=>t=>{var r;const n=t.theme,i=ec(Oc,n[tc.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Jl(i,e,n.options.designToken):Jl(i,e)},Ac={InputBoxShadow:Ec("InputBoxShadow"),InputErrorBoxShadow:Ec("InputErrorBoxShadow"),ElevationBoxShadow:Ec("ElevationBoxShadow"),Table:{Header:Ec("Table.Header"),Cell:{Primary:Ec("Table.Cell.Primary"),Secondary:Ec("Table.Cell.Secondary"),Selected:Ec("Table.Cell.Selected"),Hover:Ec("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ec("Button.Danger.BackgroundColor"),Hover:Ec("Button.Danger.Hover"),Primary:Ec("Button.Danger.Primary"),Border:Ec("Button.Danger.Border")}}};f.button`
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
                    background-color: ${ic.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ac.Button.Danger.Border:ic.Primary};

                    color: ${e.$buttonIsDanger?Ac.Button.Danger.Primary:ic.Primary};
                `;case"light":return m`
                    background-color: ${ic.Neutral[8]};
                    border: 1px solid ${ic.Neutral[5]};

                    color: ${e.$buttonIsDanger?Ac.Button.Danger.Primary:ic.Primary};
                `;case"disabled":return m`
                    background-color: ${ic.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ic.Neutral[3]};
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ac.Button.Danger.Primary:ic.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Ac.Button.Danger.Hover:ic.Secondary};
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Ac.Button.Danger.BackgroundColor:ic.Primary};
                    border: 1px solid transparent;

                    ${sc.mobileL} {
                        width: 100%;
                    }

                    color: ${ic.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    ${xc("H5","semibold")}

                    ${sc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    ${xc("H4","semibold")}

                    ${sc.mobileS} {
                        height: auto;
                    }
                `}
`;const Cc=f((({color:r,className:n,size:i=18})=>e(lc,Object.assign({className:n,$size:i,$color:r},{children:[t(uc,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(dc,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(hc,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(pc,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ac.Button.Danger.Primary:ic.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ic.Neutral[3](e);break;default:t=ic.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var jc;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(jc||(jc={}));const Ic=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Pc=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return m`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${Ic};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?ic.Neutral[4](e):e.$unchecked?ic.Accent.Light[2](e):ic.Primary(e)};
    }
`,Tc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,zc=f(Yl.div)`
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
    list-style-type: none;

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
`,Nc=f.li`
    :hover,
    :focus,
    :active {
        background: ${ic.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${ic.Accent.Light[5]};
            `}}
`,Lc=f.button`
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
`,Rc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Mc=f.div`
    ${xc("Body","regular")}
    color: ${ic.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}
`,Vc=f.div`
    color: ${ic.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${xc("BodySmall","semibold")}
                `:m`
                    ${xc("Body","regular")}
                `}
`,Wc=f.div`
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
`,Qc=f((r=>{var{className:n,checked:i,disabled:o,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=r,h=B(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=a();s((()=>{p.current.indeterminate=l}),[l]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Pc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:d,$disabled:o,$unchecked:!(l||i||o)},{children:[t(Tc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:o},h)),l?t(v,{"data-testid":"indeterminate"}):i?t(w,{"data-testid":"checkmark"}):o?t(F,{"data-testid":"disabled-empty-checkbox"}):t(x,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Gc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Xc=f.button`
    ${xc("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ic.Primary(e)};\n\t\t`}
`,Zc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Kc=f($c.Body)``,Yc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${ic.Validation.Red.Icon};
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

    svg {
        height: 1.125rem;
        width: 1.125rem;
    }

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&m`
                background-color: ${ic.Neutral[7]};
            `}
    }
`,eu=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(Jc,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))}));f.div`
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
        box-shadow: ${Ac.InputBoxShadow};
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
                    box-shadow: ${Ac.InputErrorBoxShadow};
                }
            `:void 0}
`;const tu=f.input`
    ${xc("Body","regular")}
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
`,ru=f.li`
    background: ${ic.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,nu=f(tu)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,iu=f($)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${ic.Neutral[3]};
`,ou=f(eu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${ic.Neutral[3]};
    cursor: pointer;
`,au=f(S)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${ic.Neutral[3]};
`,su=c(((r,n)=>{const{onClear:i}=r,o=B(r,["onClear"]);return e(ru,{children:[t(iu,{}),t(nu,Object.assign({ref:n},o)),o.value&&t(ou,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(au,{})}))]},"search")})),lu=n=>{var{listItems:i,listExtractor:l,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:F,onRetry:x,itemsLoadState:S="success",itemTruncationType:$="end",itemMaxLines:_=2,labelDisplayType:k="inline",renderListItem:D,onBlur:O,hideNoResultsDisplay:E,renderCustomCallToAction:A}=n,C=B(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[j,I]=o(0),[P,T]=o(""),[z,H]=o(i),[N,L]=o(0),R=Il({height:N}),M=a(),V=a(),W=a([]),q=a(),U=a(),Q=a(j),G=a(z),X=e=>{Q.current=e,I(e)},Z=e=>{G.current=e,H(e)};s((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),s((()=>{ee(P)}),[P]),s((()=>{if(T(""),h){if(setTimeout((()=>{L(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[j]&&W.current[j].focus()}else L(0)}),[h]),s((()=>{if(h){const e=te();L(e)}}),[z,S]),s((()=>{Z(i),T(""),X(0)}),[i]);const K=e=>l?l(e):e.toString(),Y=e=>{if("inline"!==k)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return jc.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},J=e=>!!yo(w,(t=>vo(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var r;const n=K(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{if(M&&M.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},ne=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;T(t),g&&g()},oe=()=>{T(""),q.current.focus(),g&&g()},ae=()=>{x&&x()},se=()=>{O&&O()},le=n=>e(r,{children:[t(qc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(Uc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=K(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":k;return e(Wc,Object.assign({$labelDisplayType:l},{children:[t(Mc,Object.assign({$truncateType:$,$maxLines:_,"aria-label":i},{children:"middle"===$&&a?le(i):i})),o&&t(Vc,Object.assign({$truncateType:$,$maxLines:_,$labelDisplayType:k,"aria-label":o},{children:"middle"===$&&s?le(o):o}))]}))},ue=()=>{if(!x||x&&"success"===S)return z.map(((r,n)=>t(Nc,Object.assign({$checked:J(r)&&!v},{children:e(Lc,Object.assign({$hasNextLineLabel:"next-line"===k&&z.length>0&&l&&"string"!=typeof l(z[0]),onClick:e=>{ne(e,r)},ref:e=>W.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Qc,{checked:J(r),displaySize:"small"}),D?D(r,{selected:J(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(r,n))))},de=()=>{if(v&&z.length>0&&!P&&"success"===S)return t(Gc,{children:t(Xc,Object.assign({onClick:F,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!E&&(P||!p)&&0===z.length&&"success"===S)return e(Zc,Object.assign({"data-testid":"list-no-results"},{children:[t(Yc,{"data-testid":"no-result-icon"}),t(Kc,{children:"No results found."})]}),"noResults")},pe=()=>{if(x&&"loading"===S)return e(Zc,Object.assign({"data-testid":"list-loading"},{children:[t(Cc,{$buttonStyle:"secondary",size:24}),t(Kc,{children:"Loading..."})]}),"loading")},fe=()=>{if(x&&"fail"===S)return e(Zc,Object.assign({"data-testid":"list-fail"},{children:[t(Yc,{"data-testid":"load-error-icon"}),t(Kc,{children:"Failed to load."}),t(Xc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(zc,Object.assign({style:R,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:M},{children:[(()=>{if(h)return e(Hc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},C,{children:[(p||m)&&"success"===S?t(su,{ref:q,onChange:ie,value:P,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:A(y,z)}))})()]}))})},cu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",uu=f.div`
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
        box-shadow: ${Ac.InputBoxShadow};
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
                    box-shadow: ${Ac.InputErrorBoxShadow};
                }
            `:void 0}
`,gu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${cu};
    margin-left: 1rem;
`,mu=f(_)`
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
    word-break: break-all;
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
`,Fu=({children:e,show:r,error:n,disabled:i,testId:o,onBlur:l,readOnly:c,className:u})=>{const d=a();return((e,t,r="window",n)=>{const i=a();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;r&&l()}}),"document"),t(uu,Object.assign({className:u},{children:t(fu,Object.assign({ref:d,error:n&&!r,disabled:i,$readOnly:c,expanded:r,"data-testid":o},{children:e}))}))},xu=n=>{var{selectedOption:i,placeholder:l="Select",options:c,disabled:u,error:d,className:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:y,valueExtractor:b,valueToStringFunction:v,listExtractor:w,displayValueExtractor:F,onSelectOption:x,listStyleWidth:S,onShowOptions:$,onHideOptions:_,onRetry:k,optionsLoadState:D="success",optionTruncationType:O="end",renderCustomSelectedOption:E,renderListItem:A,hideNoResultsDisplay:C,renderCustomCallToAction:j,onBlur:I}=n,P=B(n,["selectedOption","placeholder","options","disabled","error","className","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","hideNoResultsDisplay","renderCustomCallToAction","onBlur"]);const[T,z]=o(i),[H,N]=o(!1),L=a(),R=a();s((()=>{z(i)}),[i]);const M=(e,t)=>{z(e),N(!1),q(!1),L&&L.current.focus(),x&&x(e,t)},V=e=>{H&&(N(!1),q(!1)),e&&L&&L.current.focus()},W=e=>{if("middle"===O){let t=0;return R&&R.current&&(t=R.current.getBoundingClientRect().width),jc.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(e),t,120,8)}return e},q=e=>{!e&&_&&_(),e&&$&&$()};return e(Fu,Object.assign({className:h,show:H,error:d&&!H,disabled:u,readOnly:P.readOnly,testId:p,onBlur:()=>{null==I||I(),N(!1),q(!1)}},{children:[t(hu,Object.assign({ref:L,type:"button","data-testid":f||"selector",disabled:u,onClick:e=>{e.preventDefault(),u||P.readOnly||(N(!H),q(!H),H&&(null==I||I()))},onBlur:()=>{H||null==I||I()}},P,{children:e(r,{children:[t(bu,Object.assign({ref:R},{children:T?E?E(T):t(vu,Object.assign({truncateType:O},{children:W(F?F(T):b?b(T):T.toString())})):t(wu,Object.assign({truncateType:O},{children:l}))})),!P.readOnly&&t(gu,Object.assign({expanded:H},{children:t(mu,{})}))]})})),H&&t(yu,{}),c&&c.length>0?t(lu,{listItems:c,onSelectItem:M,onDismiss:V,valueExtractor:b,listExtractor:w,listStyleWidth:S,visible:H,enableSearch:g,searchPlaceholder:y,searchFunction:m,"data-testid":"dropdown-list",selectedItems:T?[T]:[],onRetry:k,itemsLoadState:D,itemTruncationType:O,renderListItem:A,hideNoResultsDisplay:C,renderCustomCallToAction:j}):null]}))};export{xu as InputSelect};
//# sourceMappingURL=index.js.map
