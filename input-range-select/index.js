import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import i,{useState as s,useRef as a,useEffect as o,useLayoutEffect as l,forwardRef as d,useCallback as c,useContext as u,useMemo as h}from"react";import{unstable_batchedUpdates as g}from"react-dom";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import m,{css as p,keyframes as f}from"styled-components";import{SquareIcon as y,SquareFillIcon as v,SquareTickFillIcon as x,MinusSquareFillIcon as w,CrossIcon as F,ArrowRightIcon as $}from"@lifesg/react-icons";import{MagnifierIcon as C}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";import"@floating-ui/react";import{CrossIcon as E}from"@lifesg/react-icons/cross";function A(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O=function(){this.__data__=[],this.size=0};var j=function(e,r){return e===r||e!=e&&r!=r},B=j;var z=function(e,r){for(var t=e.length;t--;)if(B(e[t][0],r))return t;return-1},S=z,I=Array.prototype.splice;var P=function(e){var r=this.__data__,t=S(r,e);return!(t<0)&&(t==r.length-1?r.pop():I.call(r,t,1),--this.size,!0)},M=z;var T=function(e){var r=this.__data__,t=M(r,e);return t<0?void 0:r[t][1]},V=z;var R=function(e){return V(this.__data__,e)>-1},L=z;var N=function(e,r){var t=this.__data__,n=L(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},q=O,Q=P,U=T,W=R,G=N;function H(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}H.prototype.clear=q,H.prototype.delete=Q,H.prototype.get=U,H.prototype.has=W,H.prototype.set=G;var Z=H,K=Z;var J=function(){this.__data__=new K,this.size=0};var X=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var Y=function(e){return this.__data__.get(e)};var ee=function(e){return this.__data__.has(e)},re="object"==typeof k&&k&&k.Object===Object&&k,te=re,ne="object"==typeof self&&self&&self.Object===Object&&self,ie=te||ne||Function("return this")(),se=ie.Symbol,ae=se,oe=Object.prototype,le=oe.hasOwnProperty,de=oe.toString,ce=ae?ae.toStringTag:void 0;var ue=function(e){var r=le.call(e,ce),t=e[ce];try{e[ce]=void 0;var n=!0}catch(e){}var i=de.call(e);return n&&(r?e[ce]=t:delete e[ce]),i},he=Object.prototype.toString;var ge=ue,be=function(e){return he.call(e)},me=se?se.toStringTag:void 0;var pe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":me&&me in Object(e)?ge(e):be(e)};var fe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ye=pe,ve=fe;var xe,we=function(e){if(!ve(e))return!1;var r=ye(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Fe=ie["__core-js_shared__"],$e=(xe=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||""))?"Symbol(src)_1."+xe:"";var Ce=function(e){return!!$e&&$e in e},_e=Function.prototype.toString;var Ee=function(e){if(null!=e){try{return _e.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ae=we,ke=Ce,De=fe,Oe=Ee,je=/^\[object .+?Constructor\]$/,Be=Function.prototype,ze=Object.prototype,Se=Be.toString,Ie=ze.hasOwnProperty,Pe=RegExp("^"+Se.call(Ie).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e,r){return null==e?void 0:e[r]},Te=function(e){return!(!De(e)||ke(e))&&(Ae(e)?Pe:je).test(Oe(e))},Ve=Me;var Re=function(e,r){var t=Ve(e,r);return Te(t)?t:void 0},Le=Re(ie,"Map"),Ne=Re(Object,"create"),qe=Ne;var Qe=function(){this.__data__=qe?qe(null):{},this.size=0};var Ue=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},We=Ne,Ge=Object.prototype.hasOwnProperty;var He=function(e){var r=this.__data__;if(We){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ge.call(r,e)?r[e]:void 0},Ze=Ne,Ke=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Ze?void 0!==r[e]:Ke.call(r,e)},Xe=Ne;var Ye=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Xe&&void 0===r?"__lodash_hash_undefined__":r,this},er=Qe,rr=Ue,tr=He,nr=Je,ir=Ye;function sr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}sr.prototype.clear=er,sr.prototype.delete=rr,sr.prototype.get=tr,sr.prototype.has=nr,sr.prototype.set=ir;var ar=sr,or=Z,lr=Le;var dr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var cr=function(e,r){var t=e.__data__;return dr(r)?t["string"==typeof r?"string":"hash"]:t.map},ur=cr;var hr=function(e){var r=ur(this,e).delete(e);return this.size-=r?1:0,r},gr=cr;var br=function(e){return gr(this,e).get(e)},mr=cr;var pr=function(e){return mr(this,e).has(e)},fr=cr;var yr=function(e,r){var t=fr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},vr=function(){this.size=0,this.__data__={hash:new ar,map:new(lr||or),string:new ar}},xr=hr,wr=br,Fr=pr,$r=yr;function Cr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Cr.prototype.clear=vr,Cr.prototype.delete=xr,Cr.prototype.get=wr,Cr.prototype.has=Fr,Cr.prototype.set=$r;var _r=Cr,Er=Z,Ar=Le,kr=_r;var Dr=function(e,r){var t=this.__data__;if(t instanceof Er){var n=t.__data__;if(!Ar||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new kr(n)}return t.set(e,r),this.size=t.size,this},Or=Z,jr=J,Br=X,zr=Y,Sr=ee,Ir=Dr;function Pr(e){var r=this.__data__=new Or(e);this.size=r.size}Pr.prototype.clear=jr,Pr.prototype.delete=Br,Pr.prototype.get=zr,Pr.prototype.has=Sr,Pr.prototype.set=Ir;var Mr=Pr;var Tr=_r,Vr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Rr=function(e){return this.__data__.has(e)};function Lr(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Tr;++r<t;)this.add(e[r])}Lr.prototype.add=Lr.prototype.push=Vr,Lr.prototype.has=Rr;var Nr=function(e,r){return e.has(r)},qr=Lr,Qr=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ur=Nr;var Wr=function(e,r,t,n,i,s){var a=1&t,o=e.length,l=r.length;if(o!=l&&!(a&&l>o))return!1;var d=s.get(e),c=s.get(r);if(d&&c)return d==r&&c==e;var u=-1,h=!0,g=2&t?new qr:void 0;for(s.set(e,r),s.set(r,e);++u<o;){var b=e[u],m=r[u];if(n)var p=a?n(m,b,u,r,e,s):n(b,m,u,e,r,s);if(void 0!==p){if(p)continue;h=!1;break}if(g){if(!Qr(r,(function(e,r){if(!Ur(g,r)&&(b===e||i(b,e,t,n,s)))return g.push(r)}))){h=!1;break}}else if(b!==m&&!i(b,m,t,n,s)){h=!1;break}}return s.delete(e),s.delete(r),h};var Gr=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Hr=ie.Uint8Array,Zr=j,Kr=Wr,Jr=Gr,Xr=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Yr=se?se.prototype:void 0,et=Yr?Yr.valueOf:void 0;var rt=function(e,r,t,n,i,s,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!s(new Hr(e),new Hr(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Zr(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var o=Jr;case"[object Set]":var l=1&n;if(o||(o=Xr),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Kr(o(e),o(r),n,i,s,a);return a.delete(e),c;case"[object Symbol]":if(et)return et.call(e)==et.call(r)}return!1};var tt=function(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e},nt=Array.isArray,it=tt,st=nt;var at=function(e,r,t){var n=r(e);return st(e)?n:it(n,t(e))};var ot=function(e,r){for(var t=-1,n=null==e?0:e.length,i=0,s=[];++t<n;){var a=e[t];r(a,t,e)&&(s[i++]=a)}return s},lt=function(){return[]},dt=Object.prototype.propertyIsEnumerable,ct=Object.getOwnPropertySymbols,ut=ct?function(e){return null==e?[]:(e=Object(e),ot(ct(e),(function(r){return dt.call(e,r)})))}:lt;var ht=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n};var gt=function(e){return null!=e&&"object"==typeof e},bt=pe,mt=gt;var pt=function(e){return mt(e)&&"[object Arguments]"==bt(e)},ft=gt,yt=Object.prototype,vt=yt.hasOwnProperty,xt=yt.propertyIsEnumerable,wt=pt(function(){return arguments}())?pt:function(e){return ft(e)&&vt.call(e,"callee")&&!xt.call(e,"callee")},Ft={exports:{}};var $t=function(){return!1};!function(e,r){var t=ie,n=$t,i=r&&!r.nodeType&&r,s=i&&e&&!e.nodeType&&e,a=s&&s.exports===i?t.Buffer:void 0,o=(a?a.isBuffer:void 0)||n;e.exports=o}(Ft,Ft.exports);var Ct=Ft.exports,_t=/^(?:0|[1-9]\d*)$/;var Et=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&_t.test(e))&&e>-1&&e%1==0&&e<r};var At=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},kt=pe,Dt=At,Ot=gt,jt={};jt["[object Float32Array]"]=jt["[object Float64Array]"]=jt["[object Int8Array]"]=jt["[object Int16Array]"]=jt["[object Int32Array]"]=jt["[object Uint8Array]"]=jt["[object Uint8ClampedArray]"]=jt["[object Uint16Array]"]=jt["[object Uint32Array]"]=!0,jt["[object Arguments]"]=jt["[object Array]"]=jt["[object ArrayBuffer]"]=jt["[object Boolean]"]=jt["[object DataView]"]=jt["[object Date]"]=jt["[object Error]"]=jt["[object Function]"]=jt["[object Map]"]=jt["[object Number]"]=jt["[object Object]"]=jt["[object RegExp]"]=jt["[object Set]"]=jt["[object String]"]=jt["[object WeakMap]"]=!1;var Bt=function(e){return Ot(e)&&Dt(e.length)&&!!jt[kt(e)]};var zt=function(e){return function(r){return e(r)}},St={exports:{}};!function(e,r){var t=re,n=r&&!r.nodeType&&r,i=n&&e&&!e.nodeType&&e,s=i&&i.exports===n&&t.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||s&&s.binding&&s.binding("util")}catch(e){}}();e.exports=a}(St,St.exports);var It=St.exports,Pt=Bt,Mt=zt,Tt=It&&It.isTypedArray,Vt=Tt?Mt(Tt):Pt,Rt=ht,Lt=wt,Nt=nt,qt=Ct,Qt=Et,Ut=Vt,Wt=Object.prototype.hasOwnProperty;var Gt=function(e,r){var t=Nt(e),n=!t&&Lt(e),i=!t&&!n&&qt(e),s=!t&&!n&&!i&&Ut(e),a=t||n||i||s,o=a?Rt(e.length,String):[],l=o.length;for(var d in e)!r&&!Wt.call(e,d)||a&&("length"==d||i&&("offset"==d||"parent"==d)||s&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Qt(d,l))||o.push(d);return o},Ht=Object.prototype;var Zt=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ht)};var Kt=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Jt=Zt,Xt=Kt,Yt=Object.prototype.hasOwnProperty;var en=function(e){if(!Jt(e))return Xt(e);var r=[];for(var t in Object(e))Yt.call(e,t)&&"constructor"!=t&&r.push(t);return r},rn=we,tn=At;var nn=function(e){return null!=e&&tn(e.length)&&!rn(e)},sn=Gt,an=en,on=nn;var ln=function(e){return on(e)?sn(e):an(e)},dn=at,cn=ut,un=ln;var hn=function(e){return dn(e,un,cn)},gn=Object.prototype.hasOwnProperty;var bn=function(e,r,t,n,i,s){var a=1&t,o=hn(e),l=o.length;if(l!=hn(r).length&&!a)return!1;for(var d=l;d--;){var c=o[d];if(!(a?c in r:gn.call(r,c)))return!1}var u=s.get(e),h=s.get(r);if(u&&h)return u==r&&h==e;var g=!0;s.set(e,r),s.set(r,e);for(var b=a;++d<l;){var m=e[c=o[d]],p=r[c];if(n)var f=a?n(p,m,c,r,e,s):n(m,p,c,e,r,s);if(!(void 0===f?m===p||i(m,p,t,n,s):f)){g=!1;break}b||(b="constructor"==c)}if(g&&!b){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(g=!1)}return s.delete(e),s.delete(r),g},mn=Re(ie,"DataView"),pn=Le,fn=Re(ie,"Promise"),yn=Re(ie,"Set"),vn=Re(ie,"WeakMap"),xn=pe,wn=Ee,Fn="[object Map]",$n="[object Promise]",Cn="[object Set]",_n="[object WeakMap]",En="[object DataView]",An=wn(mn),kn=wn(pn),Dn=wn(fn),On=wn(yn),jn=wn(vn),Bn=xn;(mn&&Bn(new mn(new ArrayBuffer(1)))!=En||pn&&Bn(new pn)!=Fn||fn&&Bn(fn.resolve())!=$n||yn&&Bn(new yn)!=Cn||vn&&Bn(new vn)!=_n)&&(Bn=function(e){var r=xn(e),t="[object Object]"==r?e.constructor:void 0,n=t?wn(t):"";if(n)switch(n){case An:return En;case kn:return Fn;case Dn:return $n;case On:return Cn;case jn:return _n}return r});var zn=Mr,Sn=Wr,In=rt,Pn=bn,Mn=Bn,Tn=nt,Vn=Ct,Rn=Vt,Ln="[object Arguments]",Nn="[object Array]",qn="[object Object]",Qn=Object.prototype.hasOwnProperty;var Un=function(e,r,t,n,i,s){var a=Tn(e),o=Tn(r),l=a?Nn:Mn(e),d=o?Nn:Mn(r),c=(l=l==Ln?qn:l)==qn,u=(d=d==Ln?qn:d)==qn,h=l==d;if(h&&Vn(e)){if(!Vn(r))return!1;a=!0,c=!1}if(h&&!c)return s||(s=new zn),a||Rn(e)?Sn(e,r,t,n,i,s):In(e,r,l,t,n,i,s);if(!(1&t)){var g=c&&Qn.call(e,"__wrapped__"),b=u&&Qn.call(r,"__wrapped__");if(g||b){var m=g?e.value():e,p=b?r.value():r;return s||(s=new zn),i(m,p,t,n,s)}}return!!h&&(s||(s=new zn),Pn(e,r,t,n,i,s))},Wn=gt;var Gn=function e(r,t,n,i,s){return r===t||(null==r||null==t||!Wn(r)&&!Wn(t)?r!=r&&t!=t:Un(r,t,n,i,e,s))},Hn=Mr,Zn=Gn;var Kn=function(e,r,t,n){var i=t.length,s=i,a=!n;if(null==e)return!s;for(e=Object(e);i--;){var o=t[i];if(a&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<s;){var l=(o=t[i])[0],d=e[l],c=o[1];if(a&&o[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Hn;if(n)var h=n(d,c,l,e,r,u);if(!(void 0===h?Zn(c,d,3,n,u):h))return!1}}return!0},Jn=fe;var Xn=function(e){return e==e&&!Jn(e)},Yn=Xn,ei=ln;var ri=function(e){for(var r=ei(e),t=r.length;t--;){var n=r[t],i=e[n];r[t]=[n,i,Yn(i)]}return r};var ti=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},ni=Kn,ii=ri,si=ti;var ai=function(e){var r=ii(e);return 1==r.length&&r[0][2]?si(r[0][0],r[0][1]):function(t){return t===e||ni(t,e,r)}},oi=pe,li=gt;var di=function(e){return"symbol"==typeof e||li(e)&&"[object Symbol]"==oi(e)},ci=nt,ui=di,hi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gi=/^\w*$/;var bi=function(e,r){if(ci(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ui(e))||(gi.test(e)||!hi.test(e)||null!=r&&e in Object(r))},mi=_r;function pi(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var a=e.apply(this,n);return t.cache=s.set(i,a)||s,a};return t.cache=new(pi.Cache||mi),t}pi.Cache=mi;var fi=pi;var yi=function(e){var r=fi(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},vi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xi=/\\(\\)?/g,wi=yi((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(vi,(function(e,t,n,i){r.push(n?i.replace(xi,"$1"):t||e)})),r}));var Fi=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},$i=nt,Ci=di,_i=se?se.prototype:void 0,Ei=_i?_i.toString:void 0;var Ai=function e(r){if("string"==typeof r)return r;if($i(r))return Fi(r,e)+"";if(Ci(r))return Ei?Ei.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},ki=Ai;var Di=nt,Oi=bi,ji=wi,Bi=function(e){return null==e?"":ki(e)};var zi=function(e,r){return Di(e)?e:Oi(e,r)?[e]:ji(Bi(e))},Si=di;var Ii=function(e){if("string"==typeof e||Si(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},Pi=zi,Mi=Ii;var Ti=function(e,r){for(var t=0,n=(r=Pi(r,e)).length;null!=e&&t<n;)e=e[Mi(r[t++])];return t&&t==n?e:void 0},Vi=Ti;var Ri=function(e,r,t){var n=null==e?void 0:Vi(e,r);return void 0===n?t:n},Li=D(Ri);var Ni=function(e,r){return null!=e&&r in Object(e)},qi=zi,Qi=wt,Ui=nt,Wi=Et,Gi=At,Hi=Ii;var Zi=function(e,r,t){for(var n=-1,i=(r=qi(r,e)).length,s=!1;++n<i;){var a=Hi(r[n]);if(!(s=null!=e&&t(e,a)))break;e=e[a]}return s||++n!=i?s:!!(i=null==e?0:e.length)&&Gi(i)&&Wi(a,i)&&(Ui(e)||Qi(e))},Ki=Ni,Ji=Zi;var Xi=Gn,Yi=Ri,es=function(e,r){return null!=e&&Ji(e,r,Ki)},rs=bi,ts=Xn,ns=ti,is=Ii;var ss=function(e){return function(r){return null==r?void 0:r[e]}},as=Ti;var os=ss,ls=function(e){return function(r){return as(r,e)}},ds=bi,cs=Ii;var us=ai,hs=function(e,r){return rs(e)&&ts(r)?ns(is(e),r):function(t){var n=Yi(t,e);return void 0===n&&n===r?es(t,e):Xi(r,n,3)}},gs=function(e){return e},bs=nt,ms=function(e){return ds(e)?os(cs(e)):ls(e)};var ps=function(e){return"function"==typeof e?e:null==e?gs:"object"==typeof e?bs(e)?hs(e[0],e[1]):us(e):ms(e)},fs=ps,ys=nn,vs=ln;var xs=function(e){return function(r,t,n){var i=Object(r);if(!ys(r)){var s=fs(t);r=vs(r),t=function(e){return s(i[e],e,i)}}var a=e(r,t,n);return a>-1?i[s?r[a]:a]:void 0}};var ws=/\s/;var Fs=function(e){for(var r=e.length;r--&&ws.test(e.charAt(r)););return r},$s=/^\s+/;var Cs=function(e){return e?e.slice(0,Fs(e)+1).replace($s,""):e},_s=fe,Es=di,As=/^[-+]0x[0-9a-f]+$/i,ks=/^0b[01]+$/i,Ds=/^0o[0-7]+$/i,Os=parseInt;var js=function(e){if("number"==typeof e)return e;if(Es(e))return NaN;if(_s(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=_s(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Cs(e);var t=ks.test(e);return t||Ds.test(e)?Os(e.slice(2),t?2:8):As.test(e)?NaN:+e},Bs=1/0;var zs=function(e){return e?(e=js(e))===Bs||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Ss=function(e,r,t,n){for(var i=e.length,s=t+(n?1:-1);n?s--:++s<i;)if(r(e[s],s,e))return s;return-1},Is=ps,Ps=function(e){var r=zs(e),t=r%1;return r==r?t?r-t:r:0},Ms=Math.max;var Ts=D(xs((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var i=null==t?0:Ps(t);return i<0&&(i=Ms(n+i,0)),Ss(e,Is(r),i)}))),Vs=Gn;var Rs=D((function(e,r){return Vs(e,r)})),Ls=Object.defineProperty,Ns={};((e,r)=>{for(var t in r)Ls(e,t,{get:r[t],enumerable:!0})})(Ns,{assign:()=>wa,colors:()=>ya,createStringInterpolator:()=>ba,skipAnimation:()=>va,to:()=>ma,willAdvance:()=>xa});var qs=sa(),Qs=e=>ra(e,qs),Us=sa();Qs.write=e=>ra(e,Us);var Ws=sa();Qs.onStart=e=>ra(e,Ws);var Gs=sa();Qs.onFrame=e=>ra(e,Gs);var Hs=sa();Qs.onFinish=e=>ra(e,Hs);var Zs=[];Qs.setTimeout=(e,r)=>{const t=Qs.now()+r,n=()=>{const e=Zs.findIndex((e=>e.cancel==n));~e&&Zs.splice(e,1),Ys-=~e?1:0},i={time:t,handler:e,cancel:n};return Zs.splice(Ks(t),0,i),Ys+=1,ta(),i};var Ks=e=>~(~Zs.findIndex((r=>r.time>e))||~Zs.length);Qs.cancel=e=>{Ws.delete(e),Gs.delete(e),Hs.delete(e),qs.delete(e),Us.delete(e)},Qs.sync=e=>{ea=!0,Qs.batchedUpdates(e),ea=!1},Qs.throttle=e=>{let r;function t(){try{e(...r)}finally{r=null}}function n(...e){r=e,Qs.onStart(t)}return n.handler=e,n.cancel=()=>{Ws.delete(t),r=null},n};var Js="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qs.use=e=>Js=e,Qs.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qs.batchedUpdates=e=>e(),Qs.catch=console.error,Qs.frameLoop="always",Qs.advance=()=>{"demand"!==Qs.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ia()};var Xs=-1,Ys=0,ea=!1;function ra(e,r){ea?(r.delete(e),e(0)):(r.add(e),ta())}function ta(){Xs<0&&(Xs=0,"demand"!==Qs.frameLoop&&Js(na))}function na(){~Xs&&(Js(na),Qs.batchedUpdates(ia))}function ia(){const e=Xs;Xs=Qs.now();const r=Ks(Xs);r&&(aa(Zs.splice(0,r),(e=>e.handler())),Ys-=r),Ys?(Ws.flush(),qs.flush(e?Math.min(64,Xs-e):16.667),Gs.flush(),Us.flush(),Hs.flush()):Xs=-1}function sa(){let e=new Set,r=e;return{add(t){Ys+=r!=e||e.has(t)?0:1,e.add(t)},delete:t=>(Ys-=r==e&&e.has(t)?1:0,e.delete(t)),flush(t){r.size&&(e=new Set,Ys-=r.size,aa(r,(r=>r(t)&&e.add(r))),Ys+=e.size,r=e)}}}function aa(e,r){e.forEach((e=>{try{r(e)}catch(e){Qs.catch(e)}}))}function oa(){}var la={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function da(e,r){if(la.arr(e)){if(!la.arr(r)||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}return e===r}var ca=(e,r)=>e.forEach(r);function ua(e,r,t){if(la.arr(e))for(let n=0;n<e.length;n++)r.call(t,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n)}var ha=e=>la.und(e)?[]:la.arr(e)?e:[e];function ga(e,r){if(e.size){const t=Array.from(e);e.clear(),ca(t,r)}}var ba,ma,pa=(e,...r)=>ga(e,(e=>e(...r))),fa=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ya=null,va=!1,xa=oa,wa=e=>{e.to&&(ma=e.to),e.now&&(Qs.now=e.now),void 0!==e.colors&&(ya=e.colors),null!=e.skipAnimation&&(va=e.skipAnimation),e.createStringInterpolator&&(ba=e.createStringInterpolator),e.requestAnimationFrame&&Qs.use(e.requestAnimationFrame),e.batchedUpdates&&(Qs.batchedUpdates=e.batchedUpdates),e.willAdvance&&(xa=e.willAdvance),e.frameLoop&&(Qs.frameLoop=e.frameLoop)},Fa=new Set,$a=[],Ca=[],_a=0,Ea={get idle(){return!Fa.size&&!$a.length},start(e){_a>e.priority?(Fa.add(e),Qs.onStart(Aa)):(ka(e),Qs(Oa))},advance:Oa,sort(e){if(_a)Qs.onFrame((()=>Ea.sort(e)));else{const r=$a.indexOf(e);~r&&($a.splice(r,1),Da(e))}},clear(){$a=[],Fa.clear()}};function Aa(){Fa.forEach(ka),Fa.clear(),Qs(Oa)}function ka(e){$a.includes(e)||Da(e)}function Da(e){$a.splice(function(e,r){const t=e.findIndex(r);return t<0?e.length:t}($a,(r=>r.priority>e.priority)),0,e)}function Oa(e){const r=Ca;for(let t=0;t<$a.length;t++){const n=$a[t];_a=n.priority,n.idle||(xa(n),n.advance(e),n.idle||r.push(n))}return _a=0,(Ca=$a).length=0,($a=r).length>0}var ja="[-+]?\\d*\\.?\\d+",Ba=ja+"%";function za(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Sa=new RegExp("rgb"+za(ja,ja,ja)),Ia=new RegExp("rgba"+za(ja,ja,ja,ja)),Pa=new RegExp("hsl"+za(ja,Ba,Ba)),Ma=new RegExp("hsla"+za(ja,Ba,Ba,ja)),Ta=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Va=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ra=/^#([0-9a-fA-F]{6})$/,La=/^#([0-9a-fA-F]{8})$/;function Na(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(r-e)*t:t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function qa(e,r,t){const n=t<.5?t*(1+r):t+r-t*r,i=2*t-n,s=Na(i,n,e+1/3),a=Na(i,n,e),o=Na(i,n,e-1/3);return Math.round(255*s)<<24|Math.round(255*a)<<16|Math.round(255*o)<<8}function Qa(e){const r=parseInt(e,10);return r<0?0:r>255?255:r}function Ua(e){return(parseFloat(e)%360+360)%360/360}function Wa(e){const r=parseFloat(e);return r<0?0:r>1?255:Math.round(255*r)}function Ga(e){const r=parseFloat(e);return r<0?0:r>100?1:r/100}function Ha(e){let r=function(e){let r;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(r=Ra.exec(e))?parseInt(r[1]+"ff",16)>>>0:ya&&void 0!==ya[e]?ya[e]:(r=Sa.exec(e))?(Qa(r[1])<<24|Qa(r[2])<<16|Qa(r[3])<<8|255)>>>0:(r=Ia.exec(e))?(Qa(r[1])<<24|Qa(r[2])<<16|Qa(r[3])<<8|Wa(r[4]))>>>0:(r=Ta.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=La.exec(e))?parseInt(r[1],16)>>>0:(r=Va.exec(e))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=Pa.exec(e))?(255|qa(Ua(r[1]),Ga(r[2]),Ga(r[3])))>>>0:(r=Ma.exec(e))?(qa(Ua(r[1]),Ga(r[2]),Ga(r[3]))|Wa(r[4]))>>>0:null}(e);if(null===r)return e;r=r||0;return`rgba(${(4278190080&r)>>>24}, ${(16711680&r)>>>16}, ${(65280&r)>>>8}, ${(255&r)/255})`}var Za=(e,r,t)=>{if(la.fun(e))return e;if(la.arr(e))return Za({range:e,output:r,extrapolate:t});if(la.str(e.output[0]))return ba(e);const n=e,i=n.output,s=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",o=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const r=function(e,r){for(var t=1;t<r.length-1&&!(r[t]>=e);++t);return t-1}(e,s);return function(e,r,t,n,i,s,a,o,l){let d=l?l(e):e;if(d<r){if("identity"===a)return d;"clamp"===a&&(d=r)}if(d>t){if("identity"===o)return d;"clamp"===o&&(d=t)}if(n===i)return n;if(r===t)return e<=r?n:i;r===-1/0?d=-d:t===1/0?d-=r:d=(d-r)/(t-r);d=s(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,s[r],s[r+1],i[r],i[r+1],l,a,o,n.map)}};var Ka=1.70158,Ja=1.525*Ka,Xa=Ka+1,Ya=2*Math.PI/3,eo=2*Math.PI/4.5,ro=e=>{const r=7.5625,t=2.75;return e<1/t?r*e*e:e<2/t?r*(e-=1.5/t)*e+.75:e<2.5/t?r*(e-=2.25/t)*e+.9375:r*(e-=2.625/t)*e+.984375},to={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Xa*e*e*e-Ka*e*e,easeOutBack:e=>1+Xa*Math.pow(e-1,3)+Ka*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ja)/2:(Math.pow(2*e-2,2)*((Ja+1)*(2*e-2)+Ja)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ya),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ya)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*eo)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*eo)/2+1,easeInBounce:e=>1-ro(1-e),easeOutBounce:ro,easeInOutBounce:e=>e<.5?(1-ro(1-2*e))/2:(1+ro(2*e-1))/2,steps:(e,r="end")=>t=>{const n=(t="end"===r?Math.min(t,.999):Math.max(t,.001))*e,i="end"===r?Math.floor(n):Math.ceil(n);return s=0,a=1,o=i/e,Math.min(Math.max(o,s),a);var s,a,o}},no=Symbol.for("FluidValue.get"),io=Symbol.for("FluidValue.observers"),so=e=>Boolean(e&&e[no]),ao=e=>e&&e[no]?e[no]():e,oo=e=>e[io]||null;function lo(e,r){const t=e[io];t&&t.forEach((e=>{!function(e,r){e.eventObserved?e.eventObserved(r):e(r)}(e,r)}))}var co=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");uo(this,e)}},uo=(e,r)=>mo(e,no,r);function ho(e,r){if(e[no]){let t=e[io];t||mo(e,io,t=new Set),t.has(r)||(t.add(r),e.observerAdded&&e.observerAdded(t.size,r))}return r}function go(e,r){const t=e[io];if(t&&t.has(r)){const n=t.size-1;n?t.delete(r):e[io]=null,e.observerRemoved&&e.observerRemoved(n,r)}}var bo,mo=(e,r,t)=>Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0}),po=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,fo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,yo=new RegExp(`(${po.source})(%|[a-z]+)`,"i"),vo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,xo=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,wo=e=>{const[r,t]=Fo(e);if(!r||fa())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(r);if(n)return n.trim();if(t&&t.startsWith("--")){const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);return r||e}return t&&xo.test(t)?wo(t):t||e},Fo=e=>{const r=xo.exec(e);if(!r)return[,];const[,t,n]=r;return[t,n]},$o=(e,r,t,n,i)=>`rgba(${Math.round(r)}, ${Math.round(t)}, ${Math.round(n)}, ${i})`,Co=e=>{bo||(bo=ya?new RegExp(`(${Object.keys(ya).join("|")})(?!\\w)`,"g"):/^\b$/);const r=e.output.map((e=>ao(e).replace(xo,wo).replace(fo,Ha).replace(bo,Ha))),t=r.map((e=>e.match(po).map(Number))),n=t[0].map(((e,r)=>t.map((e=>{if(!(r in e))throw Error('The arity of each "output" value must be equal');return e[r]})))).map((r=>Za({...e,output:r})));return e=>{const t=!yo.test(r[0])&&r.find((e=>yo.test(e)))?.replace(po,"");let i=0;return r[0].replace(po,(()=>`${n[i++](e)}${t||""}`)).replace(vo,$o)}},_o="react-spring: ",Eo=e=>{const r=e;let t=!1;if("function"!=typeof r)throw new TypeError(`${_o}once requires a function parameter`);return(...e)=>{t||(r(...e),t=!0)}},Ao=Eo(console.warn);var ko=Eo(console.warn);function Do(e){return la.str(e)&&("#"==e[0]||/\d/.test(e)||!fa()&&xo.test(e)||e in(ya||{}))}var Oo=fa()?o:l,jo=()=>{const e=a(!1);return Oo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Bo(){const e=s()[1],r=jo();return()=>{r.current&&e(Math.random())}}var zo=e=>o(e,So),So=[];function Io(e){const r=a();return o((()=>{r.current=e})),r.current}var Po=Symbol.for("Animated:node"),Mo=e=>e&&e[Po],To=(e,r)=>{return t=e,n=Po,i=r,Object.defineProperty(t,n,{value:i,writable:!0,configurable:!0});var t,n,i},Vo=e=>e&&e[Po]&&e[Po].getPayload(),Ro=class{constructor(){To(this,this)}getPayload(){return this.payload||[]}},Lo=class extends Ro{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,la.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Lo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,r){return la.num(e)&&(this.lastPosition=e,r&&(e=Math.round(e/r)*r,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,la.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},No=class extends Lo{constructor(e){super(0),this._string=null,this._toString=Za({output:[e,e]})}static create(e){return new No(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(la.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Za({output:[this.getValue(),e]})),this._value=0,super.reset()}},qo={dependencies:null},Qo=class extends Ro{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const r={};return ua(this.source,((t,n)=>{var i;(i=t)&&i[Po]===i?r[n]=t.getValue(e):so(t)?r[n]=ao(t):e||(r[n]=t)})),r}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ca(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const r=new Set;return ua(e,this._addToPayload,r),Array.from(r)}}_addToPayload(e){qo.dependencies&&so(e)&&qo.dependencies.add(e);const r=Vo(e);r&&ca(r,(e=>this.add(e)))}},Uo=class extends Qo{constructor(e){super(e)}static create(e){return new Uo(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const r=this.getPayload();return e.length==r.length?r.map(((r,t)=>r.setValue(e[t]))).some(Boolean):(super.setValue(e.map(Wo)),!0)}};function Wo(e){return(Do(e)?No:Lo).create(e)}function Go(e){const r=Mo(e);return r?r.constructor:la.arr(e)?Uo:Do(e)?No:Lo}var Ho=(e,r)=>{const t=!la.fun(e)||e.prototype&&e.prototype.isReactComponent;return d(((i,s)=>{const l=a(null),d=t&&c((e=>{l.current=function(e,r){e&&(la.fun(e)?e(r):e.current=r);return r}(s,e)}),[s]),[u,h]=function(e,r){const t=new Set;qo.dependencies=t,e.style&&(e={...e,style:r.createAnimatedStyle(e.style)});return e=new Qo(e),qo.dependencies=null,[e,t]}(i,r),g=Bo(),b=()=>{const e=l.current;if(t&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,u.getValue(!0)))&&g()},m=new Zo(b,h),p=a();Oo((()=>(p.current=m,ca(h,(e=>ho(e,m))),()=>{p.current&&(ca(p.current.deps,(e=>go(e,p.current))),Qs.cancel(p.current.update))}))),o(b,[]),zo((()=>()=>{const e=p.current;ca(e.deps,(r=>go(r,e)))}));const f=r.getComponentProps(u.getValue());return n.createElement(e,{...f,ref:d})}))},Zo=class{constructor(e,r){this.update=e,this.deps=r}eventObserved(e){"change"==e.type&&Qs.write(this.update)}};var Ko=Symbol.for("AnimatedComponent"),Jo=e=>la.str(e)?e:e&&la.str(e.displayName)?e.displayName:la.fun(e)&&e.name||null;function Xo(e,...r){return la.fun(e)?e(...r):e}var Yo=(e,r)=>!0===e||!!(r&&e&&(la.fun(e)?e(r):ha(e).includes(r))),el=(e,r)=>la.obj(e)?r&&e[r]:e,rl=(e,r)=>!0===e.default?e[r]:e.default?e.default[r]:void 0,tl=e=>e,nl=(e,r=tl)=>{let t=il;e.default&&!0!==e.default&&(e=e.default,t=Object.keys(e));const n={};for(const i of t){const t=r(e[i],i);la.und(t)||(n[i]=t)}return n},il=["config","onProps","onStart","onChange","onPause","onResume","onRest"],sl={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function al(e){const r=function(e){const r={};let t=0;if(ua(e,((e,n)=>{sl[n]||(r[n]=e,t++)})),t)return r}(e);if(r){const t={to:r};return ua(e,((e,n)=>n in r||(t[n]=e))),t}return{...e}}function ol(e){return e=ao(e),la.arr(e)?e.map(ol):Do(e)?Ns.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ll(e){return la.fun(e)||la.arr(e)&&la.obj(e[0])}var dl={tension:170,friction:26,mass:1,damping:1,easing:to.linear,clamp:!1},cl=class{constructor(){this.velocity=0,Object.assign(this,dl)}};function ul(e,r){if(la.und(r.decay)){const t=!la.und(r.tension)||!la.und(r.friction);!t&&la.und(r.frequency)&&la.und(r.damping)&&la.und(r.mass)||(e.duration=void 0,e.decay=void 0),t&&(e.frequency=void 0)}else e.duration=void 0}var hl=[],gl=class{constructor(){this.changed=!1,this.values=hl,this.toValues=null,this.fromValues=hl,this.config=new cl,this.immediate=!1}};function bl(e,{key:r,props:t,defaultProps:n,state:i,actions:s}){return new Promise(((a,o)=>{let l,d,c=Yo(t.cancel??n?.cancel,r);if(c)g();else{la.und(t.pause)||(i.paused=Yo(t.pause,r));let e=n?.pause;!0!==e&&(e=i.paused||Yo(e,r)),l=Xo(t.delay||0,r),e?(i.resumeQueue.add(h),s.pause()):(s.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-Qs.now()}function h(){l>0&&!Ns.skipAnimation?(i.delayed=!0,d=Qs.setTimeout(g,l),i.pauseQueue.add(u),i.timeouts.add(d)):g()}function g(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{s.start({...t,callId:e,cancel:c},a)}catch(e){o(e)}}}))}var ml=(e,r)=>1==r.length?r[0]:r.some((e=>e.cancelled))?yl(e.get()):r.every((e=>e.noop))?pl(e.get()):fl(e.get(),r.every((e=>e.finished))),pl=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),fl=(e,r,t=!1)=>({value:e,finished:r,cancelled:t}),yl=e=>({value:e,cancelled:!0,finished:!1});function vl(e,r,t,n){const{callId:i,parentId:s,onRest:a}=r,{asyncTo:o,promise:l}=t;return s||e!==o||r.reset?t.promise=(async()=>{t.asyncId=i,t.asyncTo=e;const d=nl(r,((e,r)=>"onRest"===r?void 0:e));let c,u;const h=new Promise(((e,r)=>(c=e,u=r))),g=e=>{const r=i<=(t.cancelId||0)&&yl(n)||i!==t.asyncId&&fl(n,!1);if(r)throw e.result=r,u(e),e},b=(e,r)=>{const s=new wl,a=new Fl;return(async()=>{if(Ns.skipAnimation)throw xl(t),a.result=fl(n,!1),u(a),a;g(s);const o=la.obj(e)?{...e}:{...r,to:e};o.parentId=i,ua(d,((e,r)=>{la.und(o[r])&&(o[r]=e)}));const l=await n.start(o);return g(s),t.paused&&await new Promise((e=>{t.resumeQueue.add(e)})),l})()};let m;if(Ns.skipAnimation)return xl(t),fl(n,!1);try{let r;r=la.arr(e)?(async e=>{for(const r of e)await b(r)})(e):Promise.resolve(e(b,n.stop.bind(n))),await Promise.all([r.then(c),h]),m=fl(n.get(),!0,!1)}catch(e){if(e instanceof wl)m=e.result;else{if(!(e instanceof Fl))throw e;m=e.result}}finally{i==t.asyncId&&(t.asyncId=s,t.asyncTo=s?o:void 0,t.promise=s?l:void 0)}return la.fun(a)&&Qs.batchedUpdates((()=>{a(m,n,n.item)})),m})():l}function xl(e,r){ga(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,r&&(e.cancelId=r)}var wl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Fl=class extends Error{constructor(){super("SkipAnimationSignal")}},$l=e=>e instanceof _l,Cl=1,_l=class extends co{constructor(){super(...arguments),this.id=Cl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Mo(this);return e&&e.getValue()}to(...e){return Ns.to(this,e)}interpolate(...e){return Ao(`${_o}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ns.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,r=!1){lo(this,{type:"change",parent:this,value:e,idle:r})}_onPriorityChange(e){this.idle||Ea.sort(this),lo(this,{type:"priority",parent:this,priority:e})}},El=Symbol.for("SpringPhase"),Al=e=>(1&e[El])>0,kl=e=>(2&e[El])>0,Dl=e=>(4&e[El])>0,Ol=(e,r)=>r?e[El]|=3:e[El]&=-3,jl=(e,r)=>r?e[El]|=4:e[El]&=-5,Bl=class extends _l{constructor(e,r){if(super(),this.animation=new gl,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!la.und(e)||!la.und(r)){const t=la.obj(e)?{...e}:{...r,from:e};la.und(t.default)&&(t.default=!0),this.start(t)}}get idle(){return!(kl(this)||this._state.asyncTo)||Dl(this)}get goal(){return ao(this.animation.to)}get velocity(){const e=Mo(this);return e instanceof Lo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Al(this)}get isAnimating(){return kl(this)}get isPaused(){return Dl(this)}get isDelayed(){return this._state.delayed}advance(e){let r=!0,t=!1;const n=this.animation;let{toValues:i}=n;const{config:s}=n,a=Vo(n.to);!a&&so(n.to)&&(i=ha(ao(n.to))),n.values.forEach(((o,l)=>{if(o.done)return;const d=o.constructor==No?1:a?a[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=o.lastPosition,s.tension<=0)return void(o.done=!0);let r=o.elapsedTime+=e;const t=n.fromValues[l],i=null!=o.v0?o.v0:o.v0=la.arr(s.velocity)?s.velocity[l]:s.velocity;let a;const h=s.precision||(t==d?.005:Math.min(1,.001*Math.abs(d-t)));if(la.und(s.duration))if(s.decay){const e=!0===s.decay?.998:s.decay,n=Math.exp(-(1-e)*r);u=t+i/(1-e)*(1-n),c=Math.abs(o.lastPosition-u)<=h,a=i*n}else{a=null==o.lastVelocity?i:o.lastVelocity;const r=s.restVelocity||h/10,n=s.clamp?0:s.bounce,l=!la.und(n),g=t==d?o.v0>0:t<d;let b,m=!1;const p=1,f=Math.ceil(e/p);for(let e=0;e<f&&(b=Math.abs(a)>r,b||(c=Math.abs(d-u)<=h,!c));++e){l&&(m=u==d||u>d==g,m&&(a=-a*n,u=d));a+=(1e-6*-s.tension*(u-d)+.001*-s.friction*a)/s.mass*p,u+=a*p}}else{let n=1;s.duration>0&&(this._memoizedDuration!==s.duration&&(this._memoizedDuration=s.duration,o.durationProgress>0&&(o.elapsedTime=s.duration*o.durationProgress,r=o.elapsedTime+=e)),n=(s.progress||0)+r/this._memoizedDuration,n=n>1?1:n<0?0:n,o.durationProgress=n),u=t+s.easing(n)*(d-t),a=(u-o.lastPosition)/e,c=1==n}o.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?o.done=!0:r=!1,o.setValue(u,s.round)&&(t=!0)}));const o=Mo(this),l=o.getValue();if(r){const e=ao(n.to);l===e&&!t||s.decay?t&&s.decay&&this._onChange(l):(o.setValue(e),this._onChange(e)),this._stop()}else t&&this._onChange(l)}set(e){return Qs.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(kl(this)){const{to:e,config:r}=this.animation;Qs.batchedUpdates((()=>{this._onStart(),r.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,r){let t;return la.und(e)?(t=this.queue||[],this.queue=[]):t=[la.obj(e)?e:{...r,to:e}],Promise.all(t.map((e=>this._update(e)))).then((e=>ml(this,e)))}stop(e){const{to:r}=this.animation;return this._focus(this.get()),xl(this._state,e&&this._lastCallId),Qs.batchedUpdates((()=>this._stop(r,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const r=this.key||"";let{to:t,from:n}=e;t=la.obj(t)?t[r]:t,(null==t||ll(t))&&(t=void 0),n=la.obj(n)?n[r]:n,null==n&&(n=void 0);const i={to:t,from:n};return Al(this)||(e.reverse&&([t,n]=[n,t]),n=ao(n),la.und(n)?Mo(this)||this._set(t):this._set(n)),i}_update({...e},r){const{key:t,defaultProps:n}=this;e.default&&Object.assign(n,nl(e,((e,r)=>/^on/.test(r)?el(e,t):e))),Vl(this,e,"onProps"),Rl(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const s=this._state;return bl(++this._lastCallId,{key:t,props:e,defaultProps:n,state:s,actions:{pause:()=>{Dl(this)||(jl(this,!0),pa(s.pauseQueue),Rl(this,"onPause",fl(this,zl(this,this.animation.to)),this))},resume:()=>{Dl(this)&&(jl(this,!1),kl(this)&&this._resume(),pa(s.resumeQueue),Rl(this,"onResume",fl(this,zl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((t=>{if(e.loop&&t.finished&&(!r||!t.noop)){const r=Sl(e);if(r)return this._update(r,!0)}return t}))}_merge(e,r,t){if(r.cancel)return this.stop(!0),t(yl(this));const n=!la.und(e.to),i=!la.und(e.from);if(n||i){if(!(r.callId>this._lastToId))return t(yl(this));this._lastToId=r.callId}const{key:s,defaultProps:a,animation:o}=this,{to:l,from:d}=o;let{to:c=l,from:u=d}=e;!i||n||r.default&&!la.und(c)||(c=u),r.reverse&&([c,u]=[u,c]);const h=!da(u,d);h&&(o.from=u),u=ao(u);const g=!da(c,l);g&&this._focus(c);const b=ll(r.to),{config:m}=o,{decay:p,velocity:f}=m;(n||i)&&(m.velocity=0),r.config&&!b&&function(e,r,t){t&&(ul(t={...t},r),r={...t,...r}),ul(e,r),Object.assign(e,r);for(const r in dl)null==e[r]&&(e[r]=dl[r]);let{frequency:n,damping:i}=e;const{mass:s}=e;la.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*s,e.friction=4*Math.PI*i*s/n)}(m,Xo(r.config,s),r.config!==a.config?Xo(a.config,s):void 0);let y=Mo(this);if(!y||la.und(c))return t(fl(this,!0));const v=la.und(r.reset)?i&&!r.default:!la.und(u)&&Yo(r.reset,s),x=v?u:this.get(),w=ol(c),F=la.num(w)||la.arr(w)||Do(w),$=!b&&(!F||Yo(a.immediate||r.immediate,s));if(g){const e=Go(c);if(e!==y.constructor){if(!$)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(w)}}const C=y.constructor;let _=so(c),E=!1;if(!_){const e=v||!Al(this)&&h;(g||e)&&(E=da(ol(x),w),_=!E),(da(o.immediate,$)||$)&&da(m.decay,p)&&da(m.velocity,f)||(_=!0)}if(E&&kl(this)&&(o.changed&&!v?_=!0:_||this._stop(l)),!b&&((_||so(l))&&(o.values=y.getPayload(),o.toValues=so(c)?null:C==No?[1]:ha(w)),o.immediate!=$&&(o.immediate=$,$||v||this._set(l)),_)){const{onRest:e}=o;ca(Tl,(e=>Vl(this,r,e)));const n=fl(this,zl(this,l));pa(this._pendingCalls,n),this._pendingCalls.add(t),o.changed&&Qs.batchedUpdates((()=>{o.changed=!v,e?.(n,this),v?Xo(a.onRest,n):o.onStart?.(n,this)}))}v&&this._set(x),b?t(vl(r.to,r,this._state,this)):_?this._start():kl(this)&&!g?this._pendingCalls.add(t):t(pl(x))}_focus(e){const r=this.animation;e!==r.to&&(oo(this)&&this._detach(),r.to=e,oo(this)&&this._attach())}_attach(){let e=0;const{to:r}=this.animation;so(r)&&(ho(r,this),$l(r)&&(e=r.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;so(e)&&go(e,this)}_set(e,r=!0){const t=ao(e);if(!la.und(t)){const e=Mo(this);if(!e||!da(t,e.getValue())){const n=Go(t);e&&e.constructor==n?e.setValue(t):To(this,n.create(t)),e&&Qs.batchedUpdates((()=>{this._onChange(t,r)}))}}return Mo(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Rl(this,"onStart",fl(this,zl(this,e.to)),this))}_onChange(e,r){r||(this._onStart(),Xo(this.animation.onChange,e,this)),Xo(this.defaultProps.onChange,e,this),super._onChange(e,r)}_start(){const e=this.animation;Mo(this).reset(ao(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),kl(this)||(Ol(this,!0),Dl(this)||this._resume())}_resume(){Ns.skipAnimation?this.finish():Ea.start(this)}_stop(e,r){if(kl(this)){Ol(this,!1);const t=this.animation;ca(t.values,(e=>{e.done=!0})),t.toValues&&(t.onChange=t.onPause=t.onResume=void 0),lo(this,{type:"idle",parent:this});const n=r?yl(this.get()):fl(this.get(),zl(this,e??t.to));pa(this._pendingCalls,n),t.changed&&(t.changed=!1,Rl(this,"onRest",n,this))}}};function zl(e,r){const t=ol(r);return da(ol(e.get()),t)}function Sl(e,r=e.loop,t=e.to){const n=Xo(r);if(n){const i=!0!==n&&al(n),s=(i||e).reverse,a=!i||i.reset;return Il({...e,loop:r,default:!1,pause:void 0,to:!s||ll(t)?t:void 0,from:a?e.from:void 0,reset:a,...i})}}function Il(e){const{to:r,from:t}=e=al(e),n=new Set;return la.obj(r)&&Ml(r,n),la.obj(t)&&Ml(t,n),e.keys=n.size?Array.from(n):null,e}function Pl(e){const r=Il(e);return la.und(r.default)&&(r.default=nl(r)),r}function Ml(e,r){ua(e,((e,t)=>null!=e&&r.add(t)))}var Tl=["onStart","onRest","onChange","onPause","onResume"];function Vl(e,r,t){e.animation[t]=r[t]!==rl(r,t)?el(r[t],e.key):void 0}function Rl(e,r,...t){e.animation[r]?.(...t),e.defaultProps[r]?.(...t)}var Ll=["onStart","onChange","onRest"],Nl=1,ql=class{constructor(e,r){this.id=Nl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),r&&(this._flush=r),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((r,t)=>e[t]=r.get())),e}set(e){for(const r in e){const t=e[r];la.und(t)||this.springs[r].set(t)}}update(e){return e&&this.queue.push(Il(e)),this}start(e){let{queue:r}=this;return e?r=ha(e).map(Il):this.queue=[],this._flush?this._flush(this,r):(Kl(this,r),Ql(this,r))}stop(e,r){if(e!==!!e&&(r=e),r){const t=this.springs;ca(ha(r),(r=>t[r].stop(!!e)))}else xl(this._state,this._lastAsyncId),this.each((r=>r.stop(!!e)));return this}pause(e){if(la.und(e))this.start({pause:!0});else{const r=this.springs;ca(ha(e),(e=>r[e].pause()))}return this}resume(e){if(la.und(e))this.start({pause:!1});else{const r=this.springs;ca(ha(e),(e=>r[e].resume()))}return this}each(e){ua(this.springs,e)}_onFrame(){const{onStart:e,onChange:r,onRest:t}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,ga(e,(([e,r])=>{r.value=this.get(),e(r,this,this._item)})));const s=!n&&this._started,a=i||s&&t.size?this.get():null;i&&r.size&&ga(r,(([e,r])=>{r.value=a,e(r,this,this._item)})),s&&(this._started=!1,ga(t,(([e,r])=>{r.value=a,e(r,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qs.onFrame(this._onFrame)}};function Ql(e,r){return Promise.all(r.map((r=>Ul(e,r)))).then((r=>ml(e,r)))}async function Ul(e,r,t){const{keys:n,to:i,from:s,loop:a,onRest:o,onResolve:l}=r,d=la.obj(r.default)&&r.default;a&&(r.loop=!1),!1===i&&(r.to=null),!1===s&&(r.from=null);const c=la.arr(i)||la.fun(i)?i:void 0;c?(r.to=void 0,r.onRest=void 0,d&&(d.onRest=void 0)):ca(Ll,(t=>{const n=r[t];if(la.fun(n)){const i=e._events[t];r[t]=({finished:e,cancelled:r})=>{const t=i.get(n);t?(e||(t.finished=!1),r&&(t.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:r||!1})},d&&(d[t]=r[t])}}));const u=e._state;r.pause===!u.paused?(u.paused=r.pause,pa(r.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(r.pause=!0);const h=(n||Object.keys(e.springs)).map((t=>e.springs[t].start(r))),g=!0===r.cancel||!0===rl(r,"cancel");(c||g&&u.asyncId)&&h.push(bl(++e._lastAsyncId,{props:r,state:u,actions:{pause:oa,resume:oa,start(r,t){g?(xl(u,e._lastAsyncId),t(yl(e))):(r.onRest=o,t(vl(c,r,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const b=ml(e,await Promise.all(h));if(a&&b.finished&&(!t||!b.noop)){const t=Sl(r,a,i);if(t)return Kl(e,[t]),Ul(e,t,!0)}return l&&Qs.batchedUpdates((()=>l(b,e,e.item))),b}function Wl(e,r){const t={...e.springs};return r&&ca(ha(r),(e=>{la.und(e.keys)&&(e=Il(e)),la.obj(e.to)||(e={...e,to:void 0}),Zl(t,e,(e=>Hl(e)))})),Gl(e,t),t}function Gl(e,r){ua(r,((r,t)=>{e.springs[t]||(e.springs[t]=r,ho(r,e))}))}function Hl(e,r){const t=new Bl;return t.key=e,r&&ho(t,r),t}function Zl(e,r,t){r.keys&&ca(r.keys,(n=>{(e[n]||(e[n]=t(n)))._prepareNode(r)}))}function Kl(e,r){ca(r,(r=>{Zl(e.springs,r,(r=>Hl(r,e)))}))}var Jl,Xl,Yl=({children:e,...r})=>{const t=u(ed),i=r.pause||!!t.pause,l=r.immediate||!!t.immediate;r=function(e,r){const[t]=s((()=>({inputs:r,result:e()}))),n=a(),i=n.current;let l=i;l?Boolean(r&&l.inputs&&function(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}(r,l.inputs))||(l={inputs:r,result:e()}):l=t;return o((()=>{n.current=l,i==t&&(t.inputs=t.result=void 0)}),[l]),l.result}((()=>({pause:i,immediate:l})),[i,l]);const{Provider:d}=ed;return n.createElement(d,{value:r},e)},ed=(Jl=Yl,Xl={},Object.assign(Jl,n.createContext(Xl)),Jl.Provider._context=Jl,Jl.Consumer._context=Jl,Jl);Yl.Provider=ed.Provider,Yl.Consumer=ed.Consumer;var rd=()=>{const e=[],r=function(r){ko(`${_o}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return ca(e,((e,i)=>{if(la.und(r))n.push(e.start());else{const s=t(r,e,i);s&&n.push(e.start(s))}})),n};r.current=e,r.add=function(r){e.includes(r)||e.push(r)},r.delete=function(r){const t=e.indexOf(r);~t&&e.splice(t,1)},r.pause=function(){return ca(e,(e=>e.pause(...arguments))),this},r.resume=function(){return ca(e,(e=>e.resume(...arguments))),this},r.set=function(r){ca(e,((e,t)=>{const n=la.fun(r)?r(t,e):r;n&&e.set(n)}))},r.start=function(r){const t=[];return ca(e,((e,n)=>{if(la.und(r))t.push(e.start());else{const i=this._getProps(r,e,n);i&&t.push(e.start(i))}})),t},r.stop=function(){return ca(e,(e=>e.stop(...arguments))),this},r.update=function(r){return ca(e,((e,t)=>e.update(this._getProps(r,e,t)))),this};const t=function(e,r,t){return la.fun(e)?e(t,r):e};return r._getProps=t,r};function td(e,r){const t=la.fun(e),[[n],i]=function(e,r,t){const n=la.fun(r)&&r;n&&!t&&(t=[]);const i=h((()=>n||3==arguments.length?rd():void 0),[]),s=a(0),o=Bo(),l=h((()=>({ctrls:[],queue:[],flush(e,r){const t=Wl(e,r);return s.current>0&&!l.queue.length&&!Object.keys(t).some((r=>!e.springs[r]))?Ql(e,r):new Promise((n=>{Gl(e,t),l.queue.push((()=>{n(Ql(e,r))})),o()}))}})),[]),d=a([...l.ctrls]),c=[],g=Io(e)||0;function b(e,t){for(let i=e;i<t;i++){const e=d.current[i]||(d.current[i]=new ql(null,l.flush)),t=n?n(i,e):r[i];t&&(c[i]=Pl(t))}}h((()=>{ca(d.current.slice(e,g),(e=>{!function(e,r){e.ref?.delete(e),r?.delete(e)}(e,i),e.stop(!0)})),d.current.length=e,b(g,e)}),[e]),h((()=>{b(0,Math.min(g,e))}),t);const m=d.current.map(((e,r)=>Wl(e,c[r]))),p=u(Yl),f=Io(p),y=p!==f&&function(e){for(const r in e)return!0;return!1}(p);Oo((()=>{s.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],ca(e,(e=>e()))),ca(d.current,((e,r)=>{i?.add(e),y&&e.start({default:p});const t=c[r];t&&(function(e,r){r&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r)}(e,t.ref),e.ref?e.queue.push(t):e.start(t))}))})),zo((()=>()=>{ca(l.ctrls,(e=>e.stop(!0)))}));const v=m.map((e=>({...e})));return i?[v,i]:v}(1,t?e:[e],t?r||[]:r);return t||2==arguments.length?[n,i]:n}var nd=class extends _l{constructor(e,r){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Za(...r);const t=this._get(),n=Go(t);To(this,n.create(t))}advance(e){const r=this._get();da(r,this.get())||(Mo(this).setValue(r),this._onChange(r,this.idle)),!this.idle&&sd(this._active)&&ad(this)}_get(){const e=la.arr(this.source)?this.source.map(ao):ha(ao(this.source));return this.calc(...e)}_start(){this.idle&&!sd(this._active)&&(this.idle=!1,ca(Vo(this),(e=>{e.done=!1})),Ns.skipAnimation?(Qs.batchedUpdates((()=>this.advance())),ad(this)):Ea.start(this))}_attach(){let e=1;ca(ha(this.source),(r=>{so(r)&&ho(r,this),$l(r)&&(r.idle||this._active.add(r),e=Math.max(e,r.priority+1))})),this.priority=e,this._start()}_detach(){ca(ha(this.source),(e=>{so(e)&&go(e,this)})),this._active.clear(),ad(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ha(this.source).reduce(((e,r)=>Math.max(e,($l(r)?r.priority:0)+1)),0))}};function id(e){return!1!==e.idle}function sd(e){return!e.size||Array.from(e).every(id)}function ad(e){e.idle||(e.idle=!0,ca(Vo(e),(e=>{e.done=!0})),lo(e,{type:"idle",parent:e}))}Ns.assign({createStringInterpolator:Co,to:(e,r)=>new nd(e,r)});var od=/^--/;function ld(e,r){return null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||od.test(e)||cd.hasOwnProperty(e)&&cd[e]?(""+r).trim():r+"px"}var dd={};var cd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ud=["Webkit","Ms","Moz","O"];cd=Object.keys(cd).reduce(((e,r)=>(ud.forEach((t=>e[((e,r)=>e+r.charAt(0).toUpperCase()+r.substring(1))(t,r)]=e[r])),e)),cd);var hd=/^(matrix|translate|scale|rotate|skew)/,gd=/^(translate)/,bd=/^(rotate|skew)/,md=(e,r)=>la.num(e)&&0!==e?e+r:e,pd=(e,r)=>la.arr(e)?e.every((e=>pd(e,r))):la.num(e)?e===r:parseFloat(e)===r,fd=class extends Qo{constructor({x:e,y:r,z:t,...n}){const i=[],s=[];(e||r||t)&&(i.push([e||0,r||0,t||0]),s.push((e=>[`translate3d(${e.map((e=>md(e,"px"))).join(",")})`,pd(e,0)]))),ua(n,((e,r)=>{if("transform"===r)i.push([e||""]),s.push((e=>[e,""===e]));else if(hd.test(r)){if(delete n[r],la.und(e))return;const t=gd.test(r)?"px":bd.test(r)?"deg":"";i.push(ha(e)),s.push("rotate3d"===r?([e,r,n,i])=>[`rotate3d(${e},${r},${n},${md(i,t)})`,pd(i,0)]:e=>[`${r}(${e.map((e=>md(e,t))).join(",")})`,pd(e,r.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new yd(i,s)),super(n)}},yd=class extends co{constructor(e,r){super(),this.inputs=e,this.transforms=r,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",r=!0;return ca(this.inputs,((t,n)=>{const i=ao(t[0]),[s,a]=this.transforms[n](la.arr(i)?i:t.map(ao));e+=" "+s,r=r&&a})),r?"none":e}observerAdded(e){1==e&&ca(this.inputs,(e=>ca(e,(e=>so(e)&&ho(e,this)))))}observerRemoved(e){0==e&&ca(this.inputs,(e=>ca(e,(e=>so(e)&&go(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),lo(this,e)}};Ns.assign({batchedUpdates:g,createStringInterpolator:Co,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var vd,xd=((e,{applyAnimatedValues:r=(()=>!1),createAnimatedStyle:t=(e=>new Qo(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:r,createAnimatedStyle:t,getComponentProps:n},s=e=>{const r=Jo(e)||"Anonymous";return(e=la.str(e)?s[e]||(s[e]=Ho(e,i)):e[Ko]||(e[Ko]=Ho(e,i))).displayName=`Animated(${r})`,e};return ua(e,((r,t)=>{la.arr(e)&&(t=Jo(r)),s[t]=s(r)})),{animated:s}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,r){if(!e.nodeType||!e.setAttribute)return!1;const t="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:s,scrollLeft:a,viewBox:o,...l}=r,d=Object.values(l),c=Object.keys(l).map((r=>t||e.hasAttribute(r)?r:dd[r]||(dd[r]=r.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const r in n)if(n.hasOwnProperty(r)){const t=ld(r,n[r]);od.test(r)?e.style.setProperty(r,t):e.style[r]=t}c.forEach(((r,t)=>{e.setAttribute(r,d[t])})),void 0!==s&&(e.scrollTop=s),void 0!==a&&(e.scrollLeft=a),void 0!==o&&e.setAttribute("viewBox",o)},createAnimatedStyle:e=>new fd(e),getComponentProps:({scrollTop:e,scrollLeft:r,...t})=>t}),wd=xd.animated;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let s=0;r>t&&(s=Math.floor((r-t)/i));const a=n+s;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const s=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,s)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:s="•",maskRegex:a,maskTransformer:o}=t;if(o)return o(e);if(a)return e.replace(a,s);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+s.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return s.repeat(e.substring(0,t).length)+e.substring(t,n+1)+s.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(vd||(vd={}));const Fd=(e,r,t)=>Li(t,r)||Li(e,r),$d=(e,r)=>{const t=r||e.defaultValue;return Li(e.collections,t)},Cd={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},_d=e=>r=>{var t;const n=r.theme,i=$d(Cd,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?Fd(i,e,n.overrides.motion):i[e]},Ed={"duration-150":_d("duration-150"),"duration-250":_d("duration-250"),"duration-350":_d("duration-350"),"duration-500":_d("duration-500"),"duration-800":_d("duration-800"),"duration-1000":_d("duration-1000"),"ease-default":_d("ease-default"),"ease-standard":_d("ease-standard"),"ease-entrance":_d("ease-entrance"),"ease-exit":_d("ease-exit")},Ad={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},kd=e=>r=>{var t;const n=r.theme,i=$d(Ad,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?Fd(i,e,n.overrides.primitiveColour):i[e]},Dd={"brand-10":kd("brand-10"),"brand-20":kd("brand-20"),"brand-30":kd("brand-30"),"brand-40":kd("brand-40"),"brand-50":kd("brand-50"),"brand-60":kd("brand-60"),"brand-70":kd("brand-70"),"brand-80":kd("brand-80"),"brand-90":kd("brand-90"),"brand-95":kd("brand-95"),"brand-100":kd("brand-100"),"primary-10":kd("primary-10"),"primary-20":kd("primary-20"),"primary-30":kd("primary-30"),"primary-40":kd("primary-40"),"primary-50":kd("primary-50"),"primary-60":kd("primary-60"),"primary-70":kd("primary-70"),"primary-80":kd("primary-80"),"primary-90":kd("primary-90"),"primary-95":kd("primary-95"),"primary-100":kd("primary-100"),"secondary-10":kd("secondary-10"),"secondary-20":kd("secondary-20"),"secondary-30":kd("secondary-30"),"secondary-40":kd("secondary-40"),"secondary-50":kd("secondary-50"),"secondary-60":kd("secondary-60"),"secondary-70":kd("secondary-70"),"secondary-80":kd("secondary-80"),"secondary-90":kd("secondary-90"),"secondary-95":kd("secondary-95"),"secondary-100":kd("secondary-100"),"neutral-10":kd("neutral-10"),"neutral-20":kd("neutral-20"),"neutral-30":kd("neutral-30"),"neutral-40":kd("neutral-40"),"neutral-50":kd("neutral-50"),"neutral-60":kd("neutral-60"),"neutral-70":kd("neutral-70"),"neutral-80":kd("neutral-80"),"neutral-90":kd("neutral-90"),"neutral-95":kd("neutral-95"),"neutral-100":kd("neutral-100"),"success-10":kd("success-10"),"success-20":kd("success-20"),"success-30":kd("success-30"),"success-40":kd("success-40"),"success-50":kd("success-50"),"success-60":kd("success-60"),"success-70":kd("success-70"),"success-80":kd("success-80"),"success-90":kd("success-90"),"success-95":kd("success-95"),"success-100":kd("success-100"),"warning-10":kd("warning-10"),"warning-20":kd("warning-20"),"warning-30":kd("warning-30"),"warning-40":kd("warning-40"),"warning-50":kd("warning-50"),"warning-60":kd("warning-60"),"warning-70":kd("warning-70"),"warning-80":kd("warning-80"),"warning-90":kd("warning-90"),"warning-95":kd("warning-95"),"warning-100":kd("warning-100"),"error-10":kd("error-10"),"error-20":kd("error-20"),"error-30":kd("error-30"),"error-40":kd("error-40"),"error-50":kd("error-50"),"error-60":kd("error-60"),"error-70":kd("error-70"),"error-80":kd("error-80"),"error-90":kd("error-90"),"error-95":kd("error-95"),"error-100":kd("error-100"),"info-10":kd("info-10"),"info-20":kd("info-20"),"info-30":kd("info-30"),"info-40":kd("info-40"),"info-50":kd("info-50"),"info-60":kd("info-60"),"info-70":kd("info-70"),"info-80":kd("info-80"),"info-90":kd("info-90"),"info-95":kd("info-95"),"info-100":kd("info-100"),white:kd("white"),black:kd("black"),"primary-inverse":kd("primary-inverse")},Od={text:kd("neutral-20"),"text-subtle":kd("neutral-30"),"text-subtler":kd("neutral-50"),"text-subtlest":kd("neutral-60"),"text-primary":kd("primary-50"),"text-hover":kd("primary-40"),"text-selected":kd("primary-50"),"text-selected-hover":kd("primary-40"),"text-disabled":kd("neutral-50"),"text-disabled-subtle":kd("neutral-60"),"text-disabled-subtlest":kd("neutral-80"),"text-selected-disabled":kd("neutral-20"),"text-success":kd("success-40"),"text-warning":kd("warning-40"),"text-error":kd("error-40"),"text-info":kd("info-40"),"text-inverse":kd("white"),icon:kd("neutral-50"),"icon-subtle":kd("neutral-60"),"icon-strongest":kd("neutral-20"),"icon-primary":kd("primary-50"),"icon-primary-subtle":kd("primary-60"),"icon-primary-subtlest":kd("primary-70"),"icon-hover":kd("primary-40"),"icon-selected":kd("primary-50"),"icon-selected-hover":kd("primary-40"),"icon-disabled":kd("neutral-50"),"icon-disabled-subtle":kd("neutral-60"),"icon-selected-disabled":kd("neutral-60"),"icon-success":kd("success-50"),"icon-warning":kd("warning-60"),"icon-error":kd("error-50"),"icon-error-strong":kd("error-40"),"icon-info":kd("info-50"),"icon-inverse":kd("white"),"icon-primary-inverse":kd("primary-inverse"),border:kd("neutral-90"),"border-strong":kd("neutral-70"),"border-stronger":kd("neutral-50"),"border-primary":kd("primary-50"),"border-primary-subtle":kd("primary-60"),"border-hover":kd("primary-90"),"border-hover-strong":kd("primary-60"),"border-selected":kd("primary-50"),"border-selected-subtle":kd("primary-70"),"border-selected-subtlest":kd("primary-90"),"border-selected-hover":kd("primary-40"),"border-focus":kd("primary-60"),"border-focus-strong":kd("primary-50"),"border-disabled":kd("neutral-90"),"border-selected-disabled":kd("neutral-70"),"border-success":kd("success-60"),"border-warning":kd("warning-60"),"border-error":kd("error-60"),"border-error-focus":kd("error-60"),"border-error-focus-strong":kd("error-40"),"border-error-strong":kd("error-40"),"border-info":kd("info-60"),bg:kd("white"),"bg-strong":kd("neutral-100"),"bg-stronger":kd("neutral-95"),"bg-strongest":kd("neutral-90"),"bg-hover":kd("primary-95"),"bg-hover-strong":kd("primary-90"),"bg-hover-subtle":kd("primary-100"),"bg-hover-neutral":kd("neutral-100"),"bg-hover-neutral-strong":kd("neutral-90"),"bg-selected":kd("primary-95"),"bg-selected-hover":kd("primary-90"),"bg-selected-strong":kd("primary-90"),"bg-selected-stronger":kd("primary-70"),"bg-selected-strongest":kd("primary-50"),"bg-selected-strongest-hover":kd("primary-40"),"bg-disabled":kd("neutral-95"),"bg-selected-disabled":kd("neutral-95"),"bg-selected-stronger-disabled":kd("neutral-70"),"bg-success":kd("success-100"),"bg-success-hover":kd("success-95"),"bg-success-strong":kd("success-50"),"bg-success-strong-hover":kd("success-40"),"bg-warning":kd("warning-100"),"bg-warning-hover":kd("warning-95"),"bg-warning-strong":kd("warning-50"),"bg-warning-strong-hover":kd("warning-40"),"bg-info":kd("info-100"),"bg-info-hover":kd("info-95"),"bg-info-strong":kd("info-50"),"bg-info-strong-hover":kd("info-40"),"bg-error":kd("error-100"),"bg-error-hover":kd("error-95"),"bg-error-strong":kd("error-50"),"bg-error-strong-hover":kd("error-40"),"bg-inverse":kd("neutral-20"),"bg-inverse-subtle":kd("neutral-30"),"bg-inverse-subtler":kd("neutral-50"),"bg-inverse-subtlest":kd("neutral-60"),"bg-inverse-hover":kd("neutral-40"),"bg-primary":kd("primary-50"),"bg-primary-subtle":kd("primary-60"),"bg-primary-subtler":kd("primary-95"),"bg-primary-subtlest":kd("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":kd("primary-40"),"bg-primary-subtlest-hover":kd("primary-90"),"bg-primary-subtlest-selected":kd("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:kd("primary-50"),"hyperlink-hover":kd("primary-40"),"hyperlink-visited":kd("primary-40"),"hyperlink-inverse":kd("primary-inverse"),"focus-ring":kd("black"),"focus-ring-inverse":kd("white")},jd={collections:{lifesg:Od,bookingsg:Od,rbs:Od,mylegacy:Od,ccube:Od},defaultValue:"lifesg"},Bd=e=>r=>{var t;const n=r.theme,i=$d(jd,null==n?void 0:n.colourScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?Fd(i,e,n.overrides.semanticColour):i[e];return"function"==typeof s?s(r):s},zd={text:Bd("text"),"text-subtle":Bd("text-subtle"),"text-subtler":Bd("text-subtler"),"text-subtlest":Bd("text-subtlest"),"text-primary":Bd("text-primary"),"text-hover":Bd("text-hover"),"text-selected":Bd("text-selected"),"text-selected-hover":Bd("text-selected-hover"),"text-disabled":Bd("text-disabled"),"text-disabled-subtle":Bd("text-disabled-subtle"),"text-disabled-subtlest":Bd("text-disabled-subtlest"),"text-selected-disabled":Bd("text-selected-disabled"),"text-success":Bd("text-success"),"text-warning":Bd("text-warning"),"text-error":Bd("text-error"),"text-info":Bd("text-info"),"text-inverse":Bd("text-inverse"),icon:Bd("icon"),"icon-subtle":Bd("icon-subtle"),"icon-strongest":Bd("icon-strongest"),"icon-primary":Bd("icon-primary"),"icon-primary-subtle":Bd("icon-primary-subtle"),"icon-primary-subtlest":Bd("icon-primary-subtlest"),"icon-hover":Bd("icon-hover"),"icon-selected":Bd("icon-selected"),"icon-selected-hover":Bd("icon-selected-hover"),"icon-disabled":Bd("icon-disabled"),"icon-disabled-subtle":Bd("icon-disabled-subtle"),"icon-selected-disabled":Bd("icon-selected-disabled"),"icon-success":Bd("icon-success"),"icon-warning":Bd("icon-warning"),"icon-error":Bd("icon-error"),"icon-error-strong":Bd("icon-error-strong"),"icon-info":Bd("icon-info"),"icon-inverse":Bd("icon-inverse"),"icon-primary-inverse":Bd("icon-primary-inverse"),border:Bd("border"),"border-strong":Bd("border-strong"),"border-stronger":Bd("border-stronger"),"border-primary":Bd("border-primary"),"border-primary-subtle":Bd("border-primary-subtle"),"border-hover":Bd("border-hover"),"border-hover-strong":Bd("border-hover-strong"),"border-selected":Bd("border-selected"),"border-selected-subtle":Bd("border-selected-subtle"),"border-selected-subtlest":Bd("border-selected-subtlest"),"border-selected-hover":Bd("border-selected-hover"),"border-focus":Bd("border-focus"),"border-focus-strong":Bd("border-focus-strong"),"border-disabled":Bd("border-disabled"),"border-selected-disabled":Bd("border-selected-disabled"),"border-success":Bd("border-success"),"border-warning":Bd("border-warning"),"border-error":Bd("border-error"),"border-error-focus":Bd("border-error-focus"),"border-error-focus-strong":Bd("border-error-focus-strong"),"border-error-strong":Bd("border-error-strong"),"border-info":Bd("border-info"),bg:Bd("bg"),"bg-strong":Bd("bg-strong"),"bg-stronger":Bd("bg-stronger"),"bg-strongest":Bd("bg-strongest"),"bg-hover":Bd("bg-hover"),"bg-hover-strong":Bd("bg-hover-strong"),"bg-hover-subtle":Bd("bg-hover-subtle"),"bg-hover-neutral":Bd("bg-hover-neutral"),"bg-hover-neutral-strong":Bd("bg-hover-neutral-strong"),"bg-selected":Bd("bg-selected"),"bg-selected-hover":Bd("bg-selected-hover"),"bg-selected-strong":Bd("bg-selected-strong"),"bg-selected-stronger":Bd("bg-selected-stronger"),"bg-selected-strongest":Bd("bg-selected-strongest"),"bg-selected-strongest-hover":Bd("bg-selected-strongest-hover"),"bg-disabled":Bd("bg-disabled"),"bg-selected-disabled":Bd("bg-selected-disabled"),"bg-selected-stronger-disabled":Bd("bg-selected-stronger-disabled"),"bg-success":Bd("bg-success"),"bg-success-hover":Bd("bg-success-hover"),"bg-success-strong":Bd("bg-success-strong"),"bg-success-strong-hover":Bd("bg-success-strong-hover"),"bg-warning":Bd("bg-warning"),"bg-warning-hover":Bd("bg-warning-hover"),"bg-warning-strong":Bd("bg-warning-strong"),"bg-warning-strong-hover":Bd("bg-warning-strong-hover"),"bg-info":Bd("bg-info"),"bg-info-hover":Bd("bg-info-hover"),"bg-info-strong":Bd("bg-info-strong"),"bg-info-strong-hover":Bd("bg-info-strong-hover"),"bg-error":Bd("bg-error"),"bg-error-hover":Bd("bg-error-hover"),"bg-error-strong":Bd("bg-error-strong"),"bg-error-strong-hover":Bd("bg-error-strong-hover"),"bg-inverse":Bd("bg-inverse"),"bg-inverse-subtle":Bd("bg-inverse-subtle"),"bg-inverse-subtler":Bd("bg-inverse-subtler"),"bg-inverse-subtlest":Bd("bg-inverse-subtlest"),"bg-inverse-hover":Bd("bg-inverse-hover"),"bg-primary":Bd("bg-primary"),"bg-primary-subtle":Bd("bg-primary-subtle"),"bg-primary-subtler":Bd("bg-primary-subtler"),"bg-primary-subtlest":Bd("bg-primary-subtlest"),"bg-available":Bd("bg-available"),"bg-primary-hover":Bd("bg-primary-hover"),"bg-primary-subtlest-hover":Bd("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Bd("bg-primary-subtlest-selected"),"overlay-strong":Bd("overlay-strong"),"overlay-subtle":Bd("overlay-subtle"),hyperlink:Bd("hyperlink"),"hyperlink-hover":Bd("hyperlink-hover"),"hyperlink-visited":Bd("hyperlink-visited"),"hyperlink-inverse":Bd("hyperlink-inverse"),"focus-ring":Bd("focus-ring"),"focus-ring-inverse":Bd("focus-ring-inverse")},Sd={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,i;const{thickness:s,radius:a,colour:o}=e||{},l=null!==(t="function"==typeof s?s(r):s)&&void 0!==t?t:Md["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(i="function"==typeof o?o(r):o)&&void 0!==i?i:zd.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return p`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},Id=e=>r=>{var t;const n=r.theme,i=$d(Sd,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${Fd(i,e,n.overrides.border)}px`:`${i[e]}px`},Pd=e=>1===e.length&&"theme"in e[0],Md={"width-010":Id("width-010"),"width-020":Id("width-020"),"width-040":Id("width-040"),solid:(Td="solid",e=>{var r;const t=e.theme,n=$d(Sd,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Fd(n,Td,t.overrides.border):n[Td];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>t=>{var n;const i=Pd(r)?[]:r,s=Pd(r)?r[0]:t,a=s.theme,o=$d(Sd,null==a?void 0:a.borderScheme);return((null===(n=null==a?void 0:a.overrides)||void 0===n?void 0:n.border)?Fd(o,e,a.overrides.border):o[e])(...i)(s)})("dashed-default")};var Td;const Vd={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Rd=e=>r=>{var t;const n=r.theme,i=$d(Vd,null==n?void 0:n.breakpointScheme);let s;return s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?Fd(i,e,n.overrides.breakpoint):i[e],s},Ld={"xxs-min":Rd("xxs-min"),"xxs-max":Rd("xxs-max"),"xs-min":Rd("xs-min"),"xs-max":Rd("xs-max"),"sm-min":Rd("sm-min"),"sm-max":Rd("sm-max"),"md-min":Rd("md-min"),"md-max":Rd("md-max"),"lg-min":Rd("lg-min"),"lg-max":Rd("lg-max"),"xl-min":Rd("xl-min"),"xl-max":Rd("xl-max"),"xxl-min":Rd("xxl-min"),"xxs-column":Rd("xxs-column"),"xs-column":Rd("xs-column"),"sm-column":Rd("sm-column"),"md-column":Rd("md-column"),"lg-column":Rd("lg-column"),"xl-column":Rd("xl-column"),"xxl-column":Rd("xxl-column"),"xxs-gutter":Rd("xxs-gutter"),"xs-gutter":Rd("xs-gutter"),"sm-gutter":Rd("sm-gutter"),"md-gutter":Rd("md-gutter"),"lg-gutter":Rd("lg-gutter"),"xl-gutter":Rd("xl-gutter"),"xxl-gutter":Rd("xxl-gutter"),"xxs-margin":Rd("xxs-margin"),"xs-margin":Rd("xs-margin"),"sm-margin":Rd("sm-margin"),"md-margin":Rd("md-margin"),"lg-margin":Rd("lg-margin"),"xl-margin":Rd("xl-margin"),"xxl-margin":Rd("xxl-margin")},Nd=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ld["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),qd={MaxWidth:Nd("max-width"),MinWidth:Nd("min-width")},Qd={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Ud={collections:{lifesg:Qd,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Qd,mylegacy:Qd,ccube:Qd},defaultValue:"lifesg"},Wd=e=>r=>{var t;const n=r.theme,i=$d(Ud,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?Fd(i,e,n.overrides.fontSpec):i[e]},Gd={"header-size-xxl":Wd("header-size-xxl"),"header-size-xl":Wd("header-size-xl"),"header-size-lg":Wd("header-size-lg"),"header-size-md":Wd("header-size-md"),"header-size-sm":Wd("header-size-sm"),"header-size-xs":Wd("header-size-xs"),"header-lh-xxl":Wd("header-lh-xxl"),"header-lh-xl":Wd("header-lh-xl"),"header-lh-lg":Wd("header-lh-lg"),"header-lh-md":Wd("header-lh-md"),"header-lh-sm":Wd("header-lh-sm"),"header-lh-xs":Wd("header-lh-xs"),"header-ls-xxl":Wd("header-ls-xxl"),"header-ls-xl":Wd("header-ls-xl"),"header-ls-lg":Wd("header-ls-lg"),"header-ls-md":Wd("header-ls-md"),"header-ls-sm":Wd("header-ls-sm"),"header-ls-xs":Wd("header-ls-xs"),"weight-light":Wd("weight-light"),"weight-regular":Wd("weight-regular"),"weight-semibold":Wd("weight-semibold"),"weight-bold":Wd("weight-bold"),"font-family":Wd("font-family"),"body-size-baseline":Wd("body-size-baseline"),"body-size-md":Wd("body-size-md"),"body-size-sm":Wd("body-size-sm"),"body-size-xs":Wd("body-size-xs"),"body-lh-baseline":Wd("body-lh-baseline"),"body-lh-md":Wd("body-lh-md"),"body-lh-sm":Wd("body-lh-sm"),"body-lh-xs":Wd("body-lh-xs"),"body-ls-baseline":Wd("body-ls-baseline"),"body-ls-md":Wd("body-ls-md"),"body-ls-sm":Wd("body-ls-sm"),"body-ls-xs":Wd("body-ls-xs"),"formlabel-size-baseline":Wd("formlabel-size-baseline"),"formlabel-size-lg":Wd("formlabel-size-lg"),"formlabel-lh-baseline":Wd("formlabel-lh-baseline"),"formlabel-lh-lg":Wd("formlabel-lh-lg"),"formlabel-ls-baseline":Wd("formlabel-ls-baseline"),"formlabel-ls-lg":Wd("formlabel-ls-lg")},Hd={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Zd=e=>r=>{var t;const n=r.theme,i=$d(Hd,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${Fd(i,e,n.overrides.radius)}px`:`${i[e]}px`},Kd={none:Zd("none"),xs:Zd("xs"),sm:Zd("sm"),md:Zd("md"),lg:Zd("lg"),full:Zd("full")},Jd={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Xd=e=>r=>{var t;const n=r.theme,i=$d(Jd,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${Fd(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Yd={"spacing-0":Xd("spacing-0"),"spacing-4":Xd("spacing-4"),"spacing-8":Xd("spacing-8"),"spacing-12":Xd("spacing-12"),"spacing-16":Xd("spacing-16"),"spacing-20":Xd("spacing-20"),"spacing-24":Xd("spacing-24"),"spacing-32":Xd("spacing-32"),"spacing-40":Xd("spacing-40"),"spacing-48":Xd("spacing-48"),"spacing-64":Xd("spacing-64"),"spacing-72":Xd("spacing-72"),"layout-xs":Xd("layout-xs"),"layout-sm":Xd("layout-sm"),"layout-md":Xd("layout-md"),"layout-lg":Xd("layout-lg"),"layout-xl":Xd("layout-xl"),"layout-xxl":Xd("layout-xxl"),"layout-xxxl":Xd("layout-xxxl")},ec=(e,r,t,n)=>p`
    font-family: ${Wd("font-family")};
    font-size: ${Wd(e)};
    font-weight: ${Wd(r)};
    line-height: ${Wd(t)};
    letter-spacing: ${Wd(n)};
`,rc={"header-xxl-light":ec("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":ec("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":ec("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":ec("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":ec("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":ec("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":ec("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":ec("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":ec("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":ec("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":ec("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":ec("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":ec("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":ec("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":ec("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":ec("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":ec("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":ec("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":ec("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":ec("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":ec("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":ec("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":ec("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":ec("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":ec("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":ec("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":ec("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":ec("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":ec("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":ec("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":ec("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":ec("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":ec("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":ec("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":ec("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":ec("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":ec("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":ec("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":ec("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":ec("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":ec("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":ec("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},tc={collections:{lifesg:rc,bookingsg:rc,rbs:rc,mylegacy:rc,ccube:rc},defaultValue:"lifesg"},nc=e=>r=>{var t;const n=r.theme,i=$d(tc,null==n?void 0:n.fontScheme),s=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?Fd(i,e,n.overrides.font):i[e];return"function"==typeof s?s(r):s},ic={"header-xxl-light":nc("header-xxl-light"),"header-xxl-regular":nc("header-xxl-regular"),"header-xxl-semibold":nc("header-xxl-semibold"),"header-xxl-bold":nc("header-xxl-bold"),"header-xl-light":nc("header-xl-light"),"header-xl-regular":nc("header-xl-regular"),"header-xl-semibold":nc("header-xl-semibold"),"header-xl-bold":nc("header-xl-bold"),"header-lg-light":nc("header-lg-light"),"header-lg-regular":nc("header-lg-regular"),"header-lg-semibold":nc("header-lg-semibold"),"header-lg-bold":nc("header-lg-bold"),"header-md-light":nc("header-md-light"),"header-md-regular":nc("header-md-regular"),"header-md-semibold":nc("header-md-semibold"),"header-md-bold":nc("header-md-bold"),"header-sm-light":nc("header-sm-light"),"header-sm-regular":nc("header-sm-regular"),"header-sm-semibold":nc("header-sm-semibold"),"header-sm-bold":nc("header-sm-bold"),"header-xs-light":nc("header-xs-light"),"header-xs-regular":nc("header-xs-regular"),"header-xs-semibold":nc("header-xs-semibold"),"header-xs-bold":nc("header-xs-bold"),"body-baseline-light":nc("body-baseline-light"),"body-baseline-regular":nc("body-baseline-regular"),"body-baseline-semibold":nc("body-baseline-semibold"),"body-baseline-bold":nc("body-baseline-bold"),"body-md-light":nc("body-md-light"),"body-md-regular":nc("body-md-regular"),"body-md-semibold":nc("body-md-semibold"),"body-md-bold":nc("body-md-bold"),"body-sm-light":nc("body-sm-light"),"body-sm-regular":nc("body-sm-regular"),"body-sm-semibold":nc("body-sm-semibold"),"body-sm-bold":nc("body-sm-bold"),"body-xs-light":nc("body-xs-light"),"body-xs-regular":nc("body-xs-regular"),"body-xs-semibold":nc("body-xs-semibold"),"body-xs-bold":nc("body-xs-bold"),"formlabel-baseline-semibold":nc("formlabel-baseline-semibold"),"formlabel-lg-semibold":nc("formlabel-lg-semibold")},sc=Object.assign(Object.assign({},zd),{Primitive:Dd}),ac=Object.assign(Object.assign({},ic),{Spec:Gd}),oc=Ed,lc=Md,dc=Yd,cc=Kd,uc=qd,hc=f`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,gc=m.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>p`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,bc=p`
    animation: ${oc["duration-150"]} ${oc["ease-default"]} ${hc};
    width: 100%;
    height: 100%;
    transition: color ${oc["duration-150"]} ${oc["ease-default"]};
`,mc=m(y)`
    ${bc}
    color: ${sc["icon-primary-subtlest"]};
`,pc=m(v)`
    ${bc}
    color: ${sc["icon-disabled-subtle"]};
`,fc=m(x)`
    ${bc}
    color: ${e=>e.$disabled?sc["icon-disabled-subtle"](e):sc["icon-selected"](e)};
`,yc=m(w)`
    ${bc}
    color: ${e=>e.$disabled?sc["icon-disabled-subtle"](e):sc["icon-selected"](e)};
`,vc=m.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${mc},
        &:hover
        + ${fc},
        &:hover
        + ${yc} {
        color: ${e=>!e.disabled&&sc["icon-hover"](e)};
    }
`,xc=m.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,wc=f`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Fc=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${wc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$c=m(Fc)`
    animation-delay: -0.45s;
`,Cc=m(Fc)`
    animation-delay: -0.3s;
`,_c=m(Fc)`
    animation-delay: -0.15s;
`,Ec=m(wd.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Ac=m.ul`
    border-bottom-left-radius: ${cc.sm};
    border-bottom-right-radius: ${cc.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${dc["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${sc["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${uc.MaxWidth.sm} {
        max-height: 15rem;
    }
`,kc=m.li`
    :hover,
    :focus,
    :active {
        background: ${sc["bg-hover"]};
    }
    ${e=>{if(e.$checked)return p`
                background: ${sc["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${sc["bg-selected-hover"]};
                }
            `}}
`,Dc=m.button`
    display: flex;
    ${e=>e.$multiSelect?p`
                padding: ${dc["spacing-8"]} ${dc["spacing-16"]};
            `:p`
                padding: 15px ${dc["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${dc["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${sc["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,Oc=p`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,jc=m.div`
    ${e=>"small"===e.$variant?ac["body-md-regular"]:ac["body-baseline-regular"]}
    color: ${sc.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Oc}
`,Bc=m.div`
    color: ${sc["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Oc}

    ${e=>"next-line"===e.$labelDisplayType?p`
                    ${ac["body-md-semibold"]}
                `:p`
                    ${ac["body-baseline-regular"]}
                `}
`,zc=m.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return p`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return p`
                    ${jc} {
                        display: inline;
                    }

                    ${Bc} {
                        display: inline;
                        margin-left: ${dc["spacing-8"]};
                    }
                `}}}
`,Sc=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,Ic=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Pc=m((t=>{var{className:n,checked:i,disabled:s,indeterminate:l,onChange:d,onKeyPress:c,displaySize:u="default"}=t,h=A(t,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const g=a();o((()=>{g.current.indeterminate=l}),[l]);const b=e=>{if(!s){const r=e;if(!(" "===r.key||"change"===e.type))return;d&&d(e),c&&c(r)}};return e(gc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:s?-1:0,onKeyDown:b,$displaySize:u,$disabled:s,$unchecked:!(l||i||s)},{children:[r(vc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:g,tabIndex:-1,onChange:b,disabled:s},h)),l?r(yc,{$disabled:s,"data-testid":"indeterminate"}):i?r(fc,{$disabled:s,"data-testid":"checkmark"}):s?r(pc,{"data-testid":"empty-disabled-checkbox"}):r(mc,{$disabled:s,"data-testid":"empty-checkbox"})]}))}))`
    flex-shrink: 0;
    margin-right: ${dc["spacing-16"]};
`,Mc=m.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${dc["spacing-16"]} 0 ${dc["spacing-8"]} 0;
`,Tc=m.button`
    ${e=>"small"===e.$variant?ac["body-md-semibold"]:ac["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${sc["text-primary"]};
`,Vc=m.div`
    width: 100%;
    display: flex;
    padding: 15px ${dc["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?ac["body-md-regular"]:ac["body-baseline-regular"]}
`,Rc=m(b)`
    height: 1em;
    width: 1em;
    margin-right: ${dc["spacing-4"]};
    color: ${sc["icon-error"]};
`,Lc=m((({color:t,className:n,size:i})=>e(xc,Object.assign({className:n,$size:i,$color:t},{children:[r(Fc,{id:"inner1"}),r($c,{id:"inner2"}),r(Cc,{id:"inner3"}),r(_c,{id:"inner4"})]}))))`
    margin-right: ${dc["spacing-4"]};
    color: ${sc.icon};
`,Nc=m.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${dc["spacing-32"]};
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

        ${({$highlight:e})=>e&&p`
                background-color: ${sc["bg-hover-neutral"]};
            `}
    }
`,qc=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:s="none",type:a="button"}=e,o=A(e,["children","focusHighlight","focusOutline","type"]);return r(Nc,Object.assign({ref:t,$outline:s,$highlight:i,type:a},o,{children:n}))})),Qc=p`
    outline-offset: -1px;
    outline: ${lc["width-020"]} ${lc.solid} ${sc["border-focus"]};
`,Uc=p`
    outline-color: ${sc["border-focus"]};
`,Wc=p`
    outline-color: ${sc["border-disabled"]};
`,Gc=p`
    outline-color: ${sc["border-error-focus"]};
`,Hc=m.div`
    border: ${lc["width-010"]} ${lc.solid} ${sc.border};
    border-radius: ${cc.sm};
    background: ${sc.bg};

    :focus-within {
        ${Qc}
    }
    ${e=>e.$focused&&Qc}

    ${e=>e.$readOnly?p`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Uc}
                }
                ${e.$focused&&Uc}
            `:e.$disabled?p`
                background: ${sc["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Wc}
                }
                ${e.$focused&&Wc}
            `:e.$error?p`
                border-color: ${sc["border-error"]};

                :focus-within {
                    ${Gc}
                }
                ${e.$focused&&Gc}
            `:void 0}
`;m(Hc)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${dc["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Zc=m.input`
    ${e=>"small"===e.$variant?ac["body-md-regular"]:ac["body-baseline-regular"]}
    color: ${sc.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${sc["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${sc["text-subtler"]};
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
`,Kc=m.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${lc["width-010"]} ${lc.solid}
            ${sc["border-focus"]};
        border-radius: ${cc.sm};
    }
`,Jc=e=>"small"===e?1:1.375,Xc=e=>p`
        height: ${Jc(e)}rem;
        width: ${Jc(e)}rem;
    `,Yc=m.li`
    background: ${sc["bg-strong"]};
    display: flex;
    border-radius: ${cc.sm};
    align-items: center;
`,eu=m(Zc)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${dc["spacing-8"]} 0 0;
    width: 100%;
`,ru=m(C)`
    ${e=>Xc(e.$variant)}
    margin: 0 ${dc["spacing-8"]};
    color: ${sc.icon};
`,tu=m(qc)`
    ${e=>Xc(e.$variant)}
    padding: 0;
    margin: 0 ${dc["spacing-8"]};
    color: ${sc.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return p`
                svg {
                    ${Xc(e.$variant)}
                }
            `}}
`,nu=d(((t,n)=>{const{onClear:i}=t,s=A(t,["onClear"]);return e(Yc,{children:[r(ru,{$variant:t.variant}),r(eu,Object.assign({ref:n,$variant:t.variant},s)),s.value&&r(tu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i,$variant:t.variant},{children:r(F,{})}))]},"search")})),iu=n=>{var{listItems:i,listExtractor:l,valueExtractor:d,onSelectItem:c,listStyleWidth:u,visible:h,enableSearch:g,searchPlaceholder:b="Search",onSearch:m,searchFunction:p,onDismiss:f,disableItemFocus:y,multiSelect:v,selectedItems:x,onSelectAll:w,onRetry:F,itemsLoadState:$="success",itemTruncationType:C="end",itemMaxLines:_=2,labelDisplayType:E="inline",renderListItem:k,onBlur:D,hideNoResultsDisplay:O,renderCustomCallToAction:j,variant:B="default"}=n,z=A(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[S,I]=s(0),[P,M]=s(""),[T,V]=s(i),[R,L]=s(0),N=td({height:R}),q=a(),Q=a(),U=a([]),W=a(),G=a(),H=a(S),Z=a(T),K=e=>{H.current=e,I(e)},J=e=>{Z.current=e,V(e)};o((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),o((()=>{re(P)}),[P]),o((()=>{if(M(""),h){if(setTimeout((()=>{L(te())})),y)return;W&&W.current?(W.current.focus(),K(-1)):U.current[S]&&U.current[S].focus()}else L(0)}),[h]),o((()=>{if(h){const e=te();L(e)}}),[T,$]),o((()=>{J(i),M(""),K(0)}),[i]);const X=e=>l?l(e):e.toString(),Y=e=>{if("inline"!==E)return!1;let r=0;Q&&Q.current&&(r=Q.current.getBoundingClientRect().width-60);return vd.getTextWidth(e,"1.125rem 'Open Sans'")>r*_},ee=e=>!!Ts(x,(r=>Rs(r,e))),re=e=>{if(""===e)J(i);else if(p){const r=p(e);J(r)}else{const r=i.filter((r=>{var t;const n=X(r),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),s="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||s&&s.includes(a)}));J(r)}},te=()=>(Q&&Q.current?Q.current.getBoundingClientRect().height:0)+(G.current?G.current.getBoundingClientRect().height:0),ne=e=>{if(q&&q.current.contains(e.target))switch(e.code){case"ArrowDown":if(H.current<Z.current.length-1){const e=H.current+1;U.current[e].focus(),K(e)}break;case"ArrowUp":if(H.current>0){const e=H.current-1;U.current[e].focus(),K(H.current-1)}break;case"Escape":f&&f(!0)}},ie=(e,r)=>{e.preventDefault(),c&&c(r,(e=>d?d(e):e)(r))},se=e=>{const r=e.target.value;M(r),m&&m()},ae=()=>{M(""),W.current.focus(),m&&m()},oe=()=>{F&&F()},le=()=>{D&&D()},de=n=>e(t,{children:[r(Sc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),r(Ic,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ce=t=>{const n=X(t),i="string"==typeof n?n:n.title,s="string"==typeof n?void 0:n.secondaryLabel,a=Y(i),o=s&&Y(s),l=a||o?"next-line":E;return e(zc,Object.assign({$labelDisplayType:l},{children:[r(jc,Object.assign({$truncateType:C,$maxLines:_,$variant:B,"aria-label":i},{children:"middle"===C&&a?de(i):i})),s&&r(Bc,Object.assign({$truncateType:C,$maxLines:_,$labelDisplayType:E,"aria-label":s},{children:"middle"===C&&o?de(s):s}))]}))},ue=()=>{if(!F||F&&"success"===$)return T.map(((t,n)=>r(kc,Object.assign({$checked:ee(t)&&!v},{children:e(Dc,Object.assign({$hasNextLineLabel:"next-line"===E&&T.length>0&&l&&"string"!=typeof l(T[0]),onClick:e=>{ie(e,t)},ref:e=>U.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:le,$variant:B},{children:[v&&r(Pc,{checked:ee(t),displaySize:"small"}),k?k(t,{selected:ee(t)}):ce(t)]}))}),((e,r)=>`item_${r}__${d?d(e):e}`)(t,n))))},he=()=>{if(v&&T.length>0&&!P&&"success"===$)return r(Mc,{children:r(Tc,Object.assign({onClick:w,type:"button",$variant:B},{children:0===x.length?"Select all":"Clear all"}))},"selectAll")},ge=()=>{if(!O&&(P||!g)&&0===T.length&&"success"===$)return e(Vc,Object.assign({"data-testid":"list-no-results",$variant:B},{children:[r(Rc,{"data-testid":"no-result-icon",$variant:B}),"No results found."]}),"noResults")},be=()=>{if(F&&"loading"===$)return e(Vc,Object.assign({"data-testid":"list-loading",$variant:B},{children:[r(Lc,{}),"Loading..."]}),"loading")},me=()=>{if(F&&"fail"===$)return e(Vc,Object.assign({"data-testid":"list-fail",$variant:B},{children:[r(Rc,{"data-testid":"load-error-icon",$variant:B}),"Failed to load. ",r(Tc,Object.assign({onClick:oe,type:"button",$variant:B},{children:"Try again."}))]}),"noResults")};return r(t,{children:e(Ec,Object.assign({style:N,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:q},{children:[(()=>{if(h)return e(Ac,Object.assign({ref:Q,"data-testid":"dropdown-list",width:u,role:"list"},z,{children:[(g||p)&&"success"===$?r(nu,{ref:W,onChange:se,value:P,placeholder:b,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:ae,variant:B}):null,he(),ge(),be(),me(),ue()]}))})(),(()=>{if(h&&j)return r("div",Object.assign({ref:G,"data-testid":"custom-cta"},{children:j(f,T)}))})()]}))})},su=e=>"small"===e?2.5:3,au=m.div`
    position: relative;
    width: 100%;
    ${e=>{const r=su(e.$variant);return p`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,ou=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${dc["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>su(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${cc.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${sc["border-focus"]};
    }
`,lu=m.button`
    ${ou}
    cursor: pointer;
`;m.div`
    ${ou}
`;const du=f`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`,cu=m.div`
    position: relative;
    border: ${lc["width-010"]} ${lc.solid} ${sc.border};
    border-radius: ${cc.sm};
    background: ${sc.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${sc["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${sc["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${du} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${sc["bg-disabled"]};

                ${lu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${sc.border};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${lu} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border-color: ${sc["border-error"]};

                :focus-within {
                    border-color: ${sc["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${sc["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;m.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${oc["duration-250"]} ${oc["ease-default"]};
    margin-left: ${dc["spacing-16"]};
`,m(_)`
    color: ${sc.icon};
`;const uu=m.div`
    height: 1px;
    background: ${sc.border};
    margin: 0 ${dc["spacing-8"]};
`,hu=m.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return p`
                color: ${sc["text-disabled"]};
            `}}
`,gu=m.div`
    ${e=>"small"===e.$variant?ac["body-md-regular"]:ac["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return p`
                    ${r=1,p`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var r}}
    overflow: hidden;
`,bu=m(gu)`
    color: ${sc["text-subtler"]};
`,mu=({children:e,show:t,error:n,disabled:i,testId:s,onBlur:l,readOnly:d,className:c,variant:u})=>{const h=a();return((e,r,t="window",n)=>{const i=a();o((()=>{i.current=r}),[r]),o((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const s=e=>i.current(e);return r.addEventListener(e,s,n),()=>{r.removeEventListener(e,s,n)}}),[e,t])})("mousedown",(function(e){if(!i){if(h&&h.current.contains(e.target))return;t&&l()}}),"document"),r(au,Object.assign({className:c,$variant:u},{children:r(cu,Object.assign({ref:h,error:n&&!t,disabled:i,$readOnly:d,expanded:t,"data-testid":s},{children:e}))}))};var pu;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(pu||(pu={})),m.div`
    display: flex;
    flex-direction: column;
`;const fu=m.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return p`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${ac.Spec["body-size-baseline"]} -
                            ${dc["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${dc["spacing-8"]};
                }
            `}}
`,yu=m.div`
    width: 100%; // Force next flex item to break to next line
`,vu=m.div`
    display: flex;
    flex: 1;
    align-items: center;
`,xu=m($)`
    color: ${sc.icon};
    width: ${ac.Spec["body-size-baseline"]};
    height: ${ac.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${dc["spacing-8"]};
    align-self: center;
`,wu=m.div`
    position: absolute;
    background: ${e=>e.$error?sc["border-error-focus-strong"]:sc["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${dc["spacing-8"]} - (${ac.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${oc["duration-350"]} ${oc["ease-standard"]},
        opacity ${oc["duration-350"]} ${oc["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return p`
                    opacity: 1;
                `;case"end":return p`
                    left: calc(50% + ${dc["spacing-16"]});
                    opacity: 1;
                `;case"none":return p`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return p`
                display: none;
            `}}
`,Fu=({children:t,currentActive:n,error:i,className:s,wrap:a})=>{const[o,l]=t;return e(fu,Object.assign({className:s,$wrap:a},{children:[r(vu,Object.assign({"data-id":"range-container-elem1-container"},{children:o})),r(xu,{}),a&&r(yu,{}),r(vu,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),r(wu,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:a})]}))};m(Zc)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&p`
            padding-left: ${dc["spacing-16"]};
            padding-right: ${e.$showClear?0:dc["spacing-16"]};
        `}
`;const $u=m(Kc)`
    height: auto;
    padding: ${dc["spacing-12"]} ${dc["spacing-16"]};

    cursor: pointer;
    color: ${sc.icon};

    ${e=>"no-border"===e.$styleType&&p`
            margin-right: -${dc["spacing-12"]};
        `}
`,Cu=m(E)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;m.div`
    display: flex;
    width: 100%;
`,m(Hc)`
    display: flex;
    align-items: center;
    width: 100%;
`;const _u=m.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,Eu=m($u)`
    position: absolute;
    right: 0;
    padding-left: ${dc["spacing-8"]};
    margin-right: 0;
`,Au=m(lu)`
    // space for clear icon
    padding-right: calc(1.25rem + ${dc["spacing-16"]});
`,ku=t=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:l,disabled:d,className:c,readOnly:u,error:h,"data-testid":g,id:b,enableSearch:m=!1,searchFunction:p,searchPlaceholder:f,valueExtractor:y,valueToStringFunction:v,listExtractor:x,displayValueExtractor:w,onSelectOption:F,listStyleWidth:$,onShowOptions:C,onHideOptions:_,onRetry:E,optionsLoadState:k={from:"success",to:"success"},optionTruncationType:D="middle",renderCustomSelectedOption:O,renderListItem:j,renderCustomCallToAction:B}=t,z=A(t,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[S,I]=s(),[P,M]=s(),T=a(),V={from:a(),to:a()},[R,L]=s("none");o((()=>{I(null==n?void 0:n.from),M(null==n?void 0:n.to)}),[n]);const N=e=>r=>{r.stopPropagation(),r.preventDefault(),d||u||L("from"===e?"from":"to"===e&&S?"to":"from")},q=e=>{const r="from"===e?S:P;return w?w(r):y?y(r):null==r?void 0:r.toString()},Q=(e,r)=>{if("middle"===D){let t=0;return V[e]&&V[e].current&&(t=V[e].current.getBoundingClientRect().width),vd.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(r),t,120,8)}return r},U=e=>{!e&&_&&_(),e&&C&&C()},W=e=>{const t="from"===e?S:P;return t?O?O(t):r(gu,Object.assign({truncateType:D},{children:Q(e,q(e))})):r(bu,Object.assign({truncateType:D},{children:Q(e,i[e])}))},G=e=>r(hu,Object.assign({onClick:N(e),ref:V[e],$disabled:d},{children:W(e)}));return e(mu,Object.assign({show:"none"!==R,"data-testid":z["data-testid"],error:h&&!("none"!==R),disabled:d,readOnly:u,testId:g,onBlur:()=>{U(!1),L("none"),S&&P||(M(void 0),I(void 0))},className:c},{children:[e(_u,{children:[r(Au,Object.assign({type:"button","data-testid":b||"selector",disabled:d,ref:T,onClick:N()},z,{children:e(Fu,Object.assign({currentActive:(()=>{switch(R){case"from":return"start";case"to":return"end";case"none":return R}})()},{children:[G("from"),G("to")]}))})),"none"===R&&S&&P&&!u&&!d&&r(Eu,Object.assign({onClick:e=>{e.stopPropagation(),I(void 0),M(void 0),F&&F({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:r(Cu,{"aria-hidden":!0})}))]}),"none"!==R&&r(uu,{}),(()=>{if("none"===R)return null;const e=l[R];if(e&&e.length>0){const t="from"===R?S:P;return r(iu,{listItems:e,onSelectItem:(e,r)=>{return t=e,n=r,"from"===(i=R)?I(t):M(t),U(!1),T&&T.current.focus(),F&&F({[i]:t},n),void("from"===i?(M(void 0),L("to"),U(!0)):L("none"));var t,n,i},onDismiss:()=>(L("none"),U(!1),T&&T.current.focus(),void(S&&P||(M(void 0),I(void 0)))),valueExtractor:y,listExtractor:x,listStyleWidth:$,visible:!0,enableSearch:m,searchPlaceholder:f,searchFunction:p,"data-testid":`${R}-dropdown-list`,selectedItems:t?[t]:[],onRetry:E,itemsLoadState:k[R],itemTruncationType:D,renderListItem:j,renderCustomCallToAction:B})}return null})()]}))};export{ku as InputRangeSelect};
//# sourceMappingURL=index.js.map
