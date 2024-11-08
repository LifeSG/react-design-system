import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import a,{useState as i,useRef as o,useEffect as s,useLayoutEffect as l,forwardRef as c,useCallback as d,useContext as u,useMemo as h}from"react";import{unstable_batchedUpdates as g}from"react-dom";import{ExclamationCircleFillIcon as p}from"@lifesg/react-icons/exclamation-circle-fill";import m,{css as f,keyframes as b}from"styled-components";import{MinusSquareFillIcon as y,SquareTickFillIcon as F,SquareFillIcon as v,SquareIcon as x,CrossIcon as w,ArrowRightIcon as B}from"@lifesg/react-icons";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{MagnifierIcon as E}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as C}from"@lifesg/react-icons/chevron-down";import"@floating-ui/react";import{CrossIcon as D}from"@lifesg/react-icons/cross";function $(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function k(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _=function(){this.__data__=[],this.size=0};var O=function(e,t){return e===t||e!=e&&t!=t},z=O;var j=function(e,t){for(var r=e.length;r--;)if(z(e[r][0],t))return r;return-1},P=j,I=Array.prototype.splice;var H=j;var T=j;var R=j;var L=_,N=function(e){var t=this.__data__,r=P(t,e);return!(r<0)&&(r==t.length-1?t.pop():I.call(t,r,1),--this.size,!0)},M=function(e){var t=this.__data__,r=H(t,e);return r<0?void 0:t[r][1]},V=function(e){return T(this.__data__,e)>-1},W=function(e,t){var r=this.__data__,n=R(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function q(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}q.prototype.clear=L,q.prototype.delete=N,q.prototype.get=M,q.prototype.has=V,q.prototype.set=W;var Q=q,U=Q;var J=function(){this.__data__=new U,this.size=0};var G=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var X=function(e){return this.__data__.get(e)};var Z=function(e){return this.__data__.has(e)},K="object"==typeof A&&A&&A.Object===Object&&A,Y=K,ee="object"==typeof self&&self&&self.Object===Object&&self,te=Y||ee||Function("return this")(),re=te.Symbol,ne=re,ae=Object.prototype,ie=ae.hasOwnProperty,oe=ae.toString,se=ne?ne.toStringTag:void 0;var le=function(e){var t=ie.call(e,se),r=e[se];try{e[se]=void 0;var n=!0}catch(e){}var a=oe.call(e);return n&&(t?e[se]=r:delete e[se]),a},ce=Object.prototype.toString;var de=le,ue=function(e){return ce.call(e)},he=re?re.toStringTag:void 0;var ge=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?de(e):ue(e)};var pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},me=ge,fe=pe;var be,ye=function(e){if(!fe(e))return!1;var t=me(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Fe=te["__core-js_shared__"],ve=(be=/[^.]+$/.exec(Fe&&Fe.keys&&Fe.keys.IE_PROTO||""))?"Symbol(src)_1."+be:"";var xe=function(e){return!!ve&&ve in e},we=Function.prototype.toString;var Be=function(e){if(null!=e){try{return we.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=ye,Ee=xe,Ce=pe,De=Be,$e=/^\[object .+?Constructor\]$/,Ae=Function.prototype,ke=Object.prototype,_e=Ae.toString,Oe=ke.hasOwnProperty,ze=RegExp("^"+_e.call(Oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var je=function(e){return!(!Ce(e)||Ee(e))&&(Se(e)?ze:$e).test(De(e))},Pe=function(e,t){return null==e?void 0:e[t]};var Ie=function(e,t){var r=Pe(e,t);return je(r)?r:void 0},He=Ie(te,"Map"),Te=Ie(Object,"create"),Re=Te;var Le=function(){this.__data__=Re?Re(null):{},this.size=0};var Ne=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=Te,Ve=Object.prototype.hasOwnProperty;var We=function(e){var t=this.__data__;if(Me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ve.call(t,e)?t[e]:void 0},qe=Te,Qe=Object.prototype.hasOwnProperty;var Ue=Te;var Je=Le,Ge=Ne,Xe=We,Ze=function(e){var t=this.__data__;return qe?void 0!==t[e]:Qe.call(t,e)},Ke=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Je,Ye.prototype.delete=Ge,Ye.prototype.get=Xe,Ye.prototype.has=Ze,Ye.prototype.set=Ke;var et=Ye,tt=Q,rt=He;var nt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var at=function(e,t){var r=e.__data__;return nt(t)?r["string"==typeof t?"string":"hash"]:r.map},it=at;var ot=at;var st=at;var lt=at;var ct=function(){this.size=0,this.__data__={hash:new et,map:new(rt||tt),string:new et}},dt=function(e){var t=it(this,e).delete(e);return this.size-=t?1:0,t},ut=function(e){return ot(this,e).get(e)},ht=function(e){return st(this,e).has(e)},gt=function(e,t){var r=lt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=ct,pt.prototype.delete=dt,pt.prototype.get=ut,pt.prototype.has=ht,pt.prototype.set=gt;var mt=pt,ft=Q,bt=He,yt=mt;var Ft=Q,vt=J,xt=G,wt=X,Bt=Z,St=function(e,t){var r=this.__data__;if(r instanceof ft){var n=r.__data__;if(!bt||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new yt(n)}return r.set(e,t),this.size=r.size,this};function Et(e){var t=this.__data__=new Ft(e);this.size=t.size}Et.prototype.clear=vt,Et.prototype.delete=xt,Et.prototype.get=wt,Et.prototype.has=Bt,Et.prototype.set=St;var Ct=Et;var Dt=mt,$t=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},At=function(e){return this.__data__.has(e)};function kt(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Dt;++t<r;)this.add(e[t])}kt.prototype.add=kt.prototype.push=$t,kt.prototype.has=At;var _t=kt,Ot=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},zt=function(e,t){return e.has(t)};var jt=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var u=-1,h=!0,g=2&r?new _t:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],m=t[u];if(n)var f=o?n(m,p,u,t,e,i):n(p,m,u,e,t,i);if(void 0!==f){if(f)continue;h=!1;break}if(g){if(!Ot(t,(function(e,t){if(!zt(g,t)&&(p===e||a(p,e,r,n,i)))return g.push(t)}))){h=!1;break}}else if(p!==m&&!a(p,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Pt=te.Uint8Array,It=O,Ht=jt,Tt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Rt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Lt=re?re.prototype:void 0,Nt=Lt?Lt.valueOf:void 0;var Mt=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Pt(e),new Pt(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return It(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Tt;case"[object Set]":var l=1&n;if(s||(s=Rt),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var d=Ht(s(e),s(t),n,a,i,o);return o.delete(e),d;case"[object Symbol]":if(Nt)return Nt.call(e)==Nt.call(t)}return!1};var Vt=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},Wt=Array.isArray,qt=Vt,Qt=Wt;var Ut=function(e,t,r){var n=t(e);return Qt(e)?n:qt(n,r(e))};var Jt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},Gt=function(){return[]},Xt=Object.prototype.propertyIsEnumerable,Zt=Object.getOwnPropertySymbols,Kt=Zt?function(e){return null==e?[]:(e=Object(e),Jt(Zt(e),(function(t){return Xt.call(e,t)})))}:Gt;var Yt=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var er=function(e){return null!=e&&"object"==typeof e},tr=ge,rr=er;var nr=function(e){return rr(e)&&"[object Arguments]"==tr(e)},ar=er,ir=Object.prototype,or=ir.hasOwnProperty,sr=ir.propertyIsEnumerable,lr=nr(function(){return arguments}())?nr:function(e){return ar(e)&&or.call(e,"callee")&&!sr.call(e,"callee")},cr={exports:{}};var dr=function(){return!1};!function(e,t){var r=te,n=dr,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(cr,cr.exports);var ur=cr.exports,hr=/^(?:0|[1-9]\d*)$/;var gr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&hr.test(e))&&e>-1&&e%1==0&&e<t};var pr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},mr=ge,fr=pr,br=er,yr={};yr["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0,yr["[object Arguments]"]=yr["[object Array]"]=yr["[object ArrayBuffer]"]=yr["[object Boolean]"]=yr["[object DataView]"]=yr["[object Date]"]=yr["[object Error]"]=yr["[object Function]"]=yr["[object Map]"]=yr["[object Number]"]=yr["[object Object]"]=yr["[object RegExp]"]=yr["[object Set]"]=yr["[object String]"]=yr["[object WeakMap]"]=!1;var Fr=function(e){return br(e)&&fr(e.length)&&!!yr[mr(e)]};var vr=function(e){return function(t){return e(t)}},xr={exports:{}};!function(e,t){var r=K,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(xr,xr.exports);var wr=xr.exports,Br=Fr,Sr=vr,Er=wr&&wr.isTypedArray,Cr=Er?Sr(Er):Br,Dr=Yt,$r=lr,Ar=Wt,kr=ur,_r=gr,Or=Cr,zr=Object.prototype.hasOwnProperty;var jr=function(e,t){var r=Ar(e),n=!r&&$r(e),a=!r&&!n&&kr(e),i=!r&&!n&&!a&&Or(e),o=r||n||a||i,s=o?Dr(e.length,String):[],l=s.length;for(var c in e)!t&&!zr.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||_r(c,l))||s.push(c);return s},Pr=Object.prototype;var Ir=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pr)};var Hr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Tr=Ir,Rr=Hr,Lr=Object.prototype.hasOwnProperty;var Nr=ye,Mr=pr;var Vr=function(e){return null!=e&&Mr(e.length)&&!Nr(e)},Wr=jr,qr=function(e){if(!Tr(e))return Rr(e);var t=[];for(var r in Object(e))Lr.call(e,r)&&"constructor"!=r&&t.push(r);return t},Qr=Vr;var Ur=function(e){return Qr(e)?Wr(e):qr(e)},Jr=Ut,Gr=Kt,Xr=Ur;var Zr=function(e){return Jr(e,Xr,Gr)},Kr=Object.prototype.hasOwnProperty;var Yr=function(e,t,r,n,a,i){var o=1&r,s=Zr(e),l=s.length;if(l!=Zr(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:Kr.call(t,d)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var g=!0;i.set(e,t),i.set(t,e);for(var p=o;++c<l;){var m=e[d=s[c]],f=t[d];if(n)var b=o?n(f,m,d,t,e,i):n(m,f,d,e,t,i);if(!(void 0===b?m===f||a(m,f,r,n,i):b)){g=!1;break}p||(p="constructor"==d)}if(g&&!p){var y=e.constructor,F=t.constructor;y==F||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof F&&F instanceof F||(g=!1)}return i.delete(e),i.delete(t),g},en=Ie(te,"DataView"),tn=He,rn=Ie(te,"Promise"),nn=Ie(te,"Set"),an=Ie(te,"WeakMap"),on=ge,sn=Be,ln="[object Map]",cn="[object Promise]",dn="[object Set]",un="[object WeakMap]",hn="[object DataView]",gn=sn(en),pn=sn(tn),mn=sn(rn),fn=sn(nn),bn=sn(an),yn=on;(en&&yn(new en(new ArrayBuffer(1)))!=hn||tn&&yn(new tn)!=ln||rn&&yn(rn.resolve())!=cn||nn&&yn(new nn)!=dn||an&&yn(new an)!=un)&&(yn=function(e){var t=on(e),r="[object Object]"==t?e.constructor:void 0,n=r?sn(r):"";if(n)switch(n){case gn:return hn;case pn:return ln;case mn:return cn;case fn:return dn;case bn:return un}return t});var Fn=Ct,vn=jt,xn=Mt,wn=Yr,Bn=yn,Sn=Wt,En=ur,Cn=Cr,Dn="[object Arguments]",$n="[object Array]",An="[object Object]",kn=Object.prototype.hasOwnProperty;var _n=function(e,t,r,n,a,i){var o=Sn(e),s=Sn(t),l=o?$n:Bn(e),c=s?$n:Bn(t),d=(l=l==Dn?An:l)==An,u=(c=c==Dn?An:c)==An,h=l==c;if(h&&En(e)){if(!En(t))return!1;o=!0,d=!1}if(h&&!d)return i||(i=new Fn),o||Cn(e)?vn(e,t,r,n,a,i):xn(e,t,l,r,n,a,i);if(!(1&r)){var g=d&&kn.call(e,"__wrapped__"),p=u&&kn.call(t,"__wrapped__");if(g||p){var m=g?e.value():e,f=p?t.value():t;return i||(i=new Fn),a(m,f,r,n,i)}}return!!h&&(i||(i=new Fn),wn(e,t,r,n,a,i))},On=er;var zn=function e(t,r,n,a,i){return t===r||(null==t||null==r||!On(t)&&!On(r)?t!=t&&r!=r:_n(t,r,n,a,e,i))},jn=Ct,Pn=zn;var In=pe;var Hn=function(e){return e==e&&!In(e)},Tn=Hn,Rn=Ur;var Ln=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Nn=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new jn;if(n)var h=n(c,d,l,e,t,u);if(!(void 0===h?Pn(d,c,3,n,u):h))return!1}}return!0},Mn=function(e){for(var t=Rn(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Tn(a)]}return t},Vn=Ln;var Wn=function(e){var t=Mn(e);return 1==t.length&&t[0][2]?Vn(t[0][0],t[0][1]):function(r){return r===e||Nn(r,e,t)}},qn=ge,Qn=er;var Un=function(e){return"symbol"==typeof e||Qn(e)&&"[object Symbol]"==qn(e)},Jn=Wt,Gn=Un,Xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/;var Kn=function(e,t){if(Jn(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Gn(e))||(Zn.test(e)||!Xn.test(e)||null!=t&&e in Object(t))},Yn=mt;function ea(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(ea.Cache||Yn),r}ea.Cache=Yn;var ta=ea;var ra=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,na=/\\(\\)?/g,aa=function(e){var t=ta(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ra,(function(e,r,n,a){t.push(n?a.replace(na,"$1"):r||e)})),t}));var ia=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},oa=Wt,sa=Un,la=re?re.prototype:void 0,ca=la?la.toString:void 0;var da=function e(t){if("string"==typeof t)return t;if(oa(t))return ia(t,e)+"";if(sa(t))return ca?ca.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ua=da;var ha=Wt,ga=Kn,pa=aa,ma=function(e){return null==e?"":ua(e)};var fa=function(e,t){return ha(e)?e:ga(e,t)?[e]:pa(ma(e))},ba=Un;var ya=function(e){if("string"==typeof e||ba(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Fa=fa,va=ya;var xa=function(e,t){for(var r=0,n=(t=Fa(t,e)).length;null!=e&&r<n;)e=e[va(t[r++])];return r&&r==n?e:void 0},wa=xa;var Ba=function(e,t,r){var n=null==e?void 0:wa(e,t);return void 0===n?r:n},Sa=k(Ba);var Ea=fa,Ca=lr,Da=Wt,$a=gr,Aa=pr,ka=ya;var _a=function(e,t){return null!=e&&t in Object(e)},Oa=function(e,t,r){for(var n=-1,a=(t=Ea(t,e)).length,i=!1;++n<a;){var o=ka(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&Aa(a)&&$a(o,a)&&(Da(e)||Ca(e))};var za=zn,ja=Ba,Pa=function(e,t){return null!=e&&Oa(e,t,_a)},Ia=Kn,Ha=Hn,Ta=Ln,Ra=ya;var La=xa;var Na=function(e){return function(t){return null==t?void 0:t[e]}},Ma=function(e){return function(t){return La(t,e)}},Va=Kn,Wa=ya;var qa=Wn,Qa=function(e,t){return Ia(e)&&Ha(t)?Ta(Ra(e),t):function(r){var n=ja(r,e);return void 0===n&&n===t?Pa(r,e):za(t,n,3)}},Ua=function(e){return e},Ja=Wt,Ga=function(e){return Va(e)?Na(Wa(e)):Ma(e)};var Xa=function(e){return"function"==typeof e?e:null==e?Ua:"object"==typeof e?Ja(e)?Qa(e[0],e[1]):qa(e):Ga(e)},Za=Xa,Ka=Vr,Ya=Ur;var ei=function(e){return function(t,r,n){var a=Object(t);if(!Ka(t)){var i=Za(r);t=Ya(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}};var ti=/\s/;var ri=function(e){for(var t=e.length;t--&&ti.test(e.charAt(t)););return t},ni=/^\s+/;var ai=function(e){return e?e.slice(0,ri(e)+1).replace(ni,""):e},ii=pe,oi=Un,si=/^[-+]0x[0-9a-f]+$/i,li=/^0b[01]+$/i,ci=/^0o[0-7]+$/i,di=parseInt;var ui=function(e){if("number"==typeof e)return e;if(oi(e))return NaN;if(ii(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ii(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ai(e);var r=li.test(e);return r||ci.test(e)?di(e.slice(2),r?2:8):si.test(e)?NaN:+e},hi=1/0;var gi=function(e){return e?(e=ui(e))===hi||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var pi=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1},mi=Xa,fi=function(e){var t=gi(e),r=t%1;return t==t?r?t-r:t:0},bi=Math.max;var yi=k(ei((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:fi(r);return a<0&&(a=bi(n+a,0)),pi(e,mi(t),a)}))),Fi=zn;var vi=k((function(e,t){return Fi(e,t)})),xi=Object.defineProperty,wi={};((e,t)=>{for(var r in t)xi(e,r,{get:t[r],enumerable:!0})})(wi,{assign:()=>to,colors:()=>Ki,createStringInterpolator:()=>Ji,skipAnimation:()=>Yi,to:()=>Gi,willAdvance:()=>eo});var Bi=Ri(),Si=e=>Pi(e,Bi),Ei=Ri();Si.write=e=>Pi(e,Ei);var Ci=Ri();Si.onStart=e=>Pi(e,Ci);var Di=Ri();Si.onFrame=e=>Pi(e,Di);var $i=Ri();Si.onFinish=e=>Pi(e,$i);var Ai=[];Si.setTimeout=(e,t)=>{const r=Si.now()+t,n=()=>{const e=Ai.findIndex((e=>e.cancel==n));~e&&Ai.splice(e,1),zi-=~e?1:0},a={time:r,handler:e,cancel:n};return Ai.splice(ki(r),0,a),zi+=1,Ii(),a};var ki=e=>~(~Ai.findIndex((t=>t.time>e))||~Ai.length);Si.cancel=e=>{Ci.delete(e),Di.delete(e),$i.delete(e),Bi.delete(e),Ei.delete(e)},Si.sync=e=>{ji=!0,Si.batchedUpdates(e),ji=!1},Si.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Si.onStart(r)}return n.handler=e,n.cancel=()=>{Ci.delete(r),t=null},n};var _i="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Si.use=e=>_i=e,Si.now="undefined"!=typeof performance?()=>performance.now():Date.now,Si.batchedUpdates=e=>e(),Si.catch=console.error,Si.frameLoop="always",Si.advance=()=>{"demand"!==Si.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ti()};var Oi=-1,zi=0,ji=!1;function Pi(e,t){ji?(t.delete(e),e(0)):(t.add(e),Ii())}function Ii(){Oi<0&&(Oi=0,"demand"!==Si.frameLoop&&_i(Hi))}function Hi(){~Oi&&(_i(Hi),Si.batchedUpdates(Ti))}function Ti(){const e=Oi;Oi=Si.now();const t=ki(Oi);t&&(Li(Ai.splice(0,t),(e=>e.handler())),zi-=t),zi?(Ci.flush(),Bi.flush(e?Math.min(64,Oi-e):16.667),Di.flush(),Ei.flush(),$i.flush()):Oi=-1}function Ri(){let e=new Set,t=e;return{add(r){zi+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(zi-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,zi-=t.size,Li(t,(t=>t(r)&&e.add(t))),zi+=e.size,t=e)}}}function Li(e,t){e.forEach((e=>{try{t(e)}catch(e){Si.catch(e)}}))}function Ni(){}var Mi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Vi(e,t){if(Mi.arr(e)){if(!Mi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Wi=(e,t)=>e.forEach(t);function qi(e,t,r){if(Mi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Qi=e=>Mi.und(e)?[]:Mi.arr(e)?e:[e];function Ui(e,t){if(e.size){const r=Array.from(e);e.clear(),Wi(r,t)}}var Ji,Gi,Xi=(e,...t)=>Ui(e,(e=>e(...t))),Zi=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ki=null,Yi=!1,eo=Ni,to=e=>{e.to&&(Gi=e.to),e.now&&(Si.now=e.now),void 0!==e.colors&&(Ki=e.colors),null!=e.skipAnimation&&(Yi=e.skipAnimation),e.createStringInterpolator&&(Ji=e.createStringInterpolator),e.requestAnimationFrame&&Si.use(e.requestAnimationFrame),e.batchedUpdates&&(Si.batchedUpdates=e.batchedUpdates),e.willAdvance&&(eo=e.willAdvance),e.frameLoop&&(Si.frameLoop=e.frameLoop)},ro=new Set,no=[],ao=[],io=0,oo={get idle(){return!ro.size&&!no.length},start(e){io>e.priority?(ro.add(e),Si.onStart(so)):(lo(e),Si(uo))},advance:uo,sort(e){if(io)Si.onFrame((()=>oo.sort(e)));else{const t=no.indexOf(e);~t&&(no.splice(t,1),co(e))}},clear(){no=[],ro.clear()}};function so(){ro.forEach(lo),ro.clear(),Si(uo)}function lo(e){no.includes(e)||co(e)}function co(e){no.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(no,(t=>t.priority>e.priority)),0,e)}function uo(e){const t=ao;for(let r=0;r<no.length;r++){const n=no[r];io=n.priority,n.idle||(eo(n),n.advance(e),n.idle||t.push(n))}return io=0,(ao=no).length=0,(no=t).length>0}var ho="[-+]?\\d*\\.?\\d+",go=ho+"%";function po(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var mo=new RegExp("rgb"+po(ho,ho,ho)),fo=new RegExp("rgba"+po(ho,ho,ho,ho)),bo=new RegExp("hsl"+po(ho,go,go)),yo=new RegExp("hsla"+po(ho,go,go,ho)),Fo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,vo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xo=/^#([0-9a-fA-F]{6})$/,wo=/^#([0-9a-fA-F]{8})$/;function Bo(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function So(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=Bo(a,n,e+1/3),o=Bo(a,n,e),s=Bo(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Eo(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Co(e){return(parseFloat(e)%360+360)%360/360}function Do(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function $o(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ao(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xo.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ki&&void 0!==Ki[e]?Ki[e]:(t=mo.exec(e))?(Eo(t[1])<<24|Eo(t[2])<<16|Eo(t[3])<<8|255)>>>0:(t=fo.exec(e))?(Eo(t[1])<<24|Eo(t[2])<<16|Eo(t[3])<<8|Do(t[4]))>>>0:(t=Fo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=wo.exec(e))?parseInt(t[1],16)>>>0:(t=vo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=bo.exec(e))?(255|So(Co(t[1]),$o(t[2]),$o(t[3])))>>>0:(t=yo.exec(e))?(So(Co(t[1]),$o(t[2]),$o(t[3]))|Do(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ko=(e,t,r)=>{if(Mi.fun(e))return e;if(Mi.arr(e))return ko({range:e,output:t,extrapolate:r});if(Mi.str(e.output[0]))return Ji(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:a===1/0?c+=n:c=c*(a-n)+n;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};var _o=1.70158,Oo=1.525*_o,zo=_o+1,jo=2*Math.PI/3,Po=2*Math.PI/4.5,Io=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ho={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>zo*e*e*e-_o*e*e,easeOutBack:e=>1+zo*Math.pow(e-1,3)+_o*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Oo)/2:(Math.pow(2*e-2,2)*((Oo+1)*(2*e-2)+Oo)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*jo),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*jo)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Po)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Po)/2+1,easeInBounce:e=>1-Io(1-e),easeOutBounce:Io,easeInOutBounce:e=>e<.5?(1-Io(1-2*e))/2:(1+Io(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}},To=Symbol.for("FluidValue.get"),Ro=Symbol.for("FluidValue.observers"),Lo=e=>Boolean(e&&e[To]),No=e=>e&&e[To]?e[To]():e,Mo=e=>e[Ro]||null;function Vo(e,t){const r=e[Ro];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Wo=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");qo(this,e)}},qo=(e,t)=>Go(e,To,t);function Qo(e,t){if(e[To]){let r=e[Ro];r||Go(e,Ro,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Uo(e,t){const r=e[Ro];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ro]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Jo,Go=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Xo=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Zo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ko=new RegExp(`(${Xo.source})(%|[a-z]+)`,"i"),Yo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,es=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ts=e=>{const[t,r]=rs(e);if(!t||Zi())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&es.test(r)?ts(r):r||e},rs=e=>{const t=es.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ns=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,as=e=>{Jo||(Jo=Ki?new RegExp(`(${Object.keys(Ki).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>No(e).replace(es,ts).replace(Zo,Ao).replace(Jo,Ao))),r=t.map((e=>e.match(Xo).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ko({...e,output:t})));return e=>{const r=!Ko.test(t[0])&&t.find((e=>Ko.test(e)))?.replace(Xo,"");let a=0;return t[0].replace(Xo,(()=>`${n[a++](e)}${r||""}`)).replace(Yo,ns)}},is="react-spring: ",os=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${is}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ss=os(console.warn);var ls=os(console.warn);function cs(e){return Mi.str(e)&&("#"==e[0]||/\d/.test(e)||!Zi()&&es.test(e)||e in(Ki||{}))}var ds=Zi()?s:l,us=()=>{const e=o(!1);return ds((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function hs(){const e=i()[1],t=us();return()=>{t.current&&e(Math.random())}}var gs=e=>s(e,ps),ps=[];function ms(e){const t=o();return s((()=>{t.current=e})),t.current}var fs=Symbol.for("Animated:node"),bs=e=>e&&e[fs],ys=(e,t)=>{return r=e,n=fs,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},Fs=e=>e&&e[fs]&&e[fs].getPayload(),vs=class{constructor(){ys(this,this)}getPayload(){return this.payload||[]}},xs=class extends vs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Mi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new xs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Mi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Mi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ws=class extends xs{constructor(e){super(0),this._string=null,this._toString=ko({output:[e,e]})}static create(e){return new ws(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Mi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ko({output:[this.getValue(),e]})),this._value=0,super.reset()}},Bs={dependencies:null},Ss=class extends vs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qi(this.source,((r,n)=>{var a;(a=r)&&a[fs]===a?t[n]=r.getValue(e):Lo(r)?t[n]=No(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Wi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Bs.dependencies&&Lo(e)&&Bs.dependencies.add(e);const t=Fs(e);t&&Wi(t,(e=>this.add(e)))}},Es=class extends Ss{constructor(e){super(e)}static create(e){return new Es(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Cs)),!0)}};function Cs(e){return(cs(e)?ws:xs).create(e)}function Ds(e){const t=bs(e);return t?t.constructor:Mi.arr(e)?Es:cs(e)?ws:xs}var $s=(e,t)=>{const r=!Mi.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((a,i)=>{const l=o(null),c=r&&d((e=>{l.current=function(e,t){e&&(Mi.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,h]=function(e,t){const r=new Set;Bs.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ss(e),Bs.dependencies=null,[e,r]}(a,t),g=hs(),p=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&g()},m=new As(p,h),f=o();ds((()=>(f.current=m,Wi(h,(e=>Qo(e,m))),()=>{f.current&&(Wi(f.current.deps,(e=>Uo(e,f.current))),Si.cancel(f.current.update))}))),s(p,[]),gs((()=>()=>{const e=f.current;Wi(e.deps,(t=>Uo(t,e)))}));const b=t.getComponentProps(u.getValue());return n.createElement(e,{...b,ref:c})}))},As=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Si.write(this.update)}};var ks=Symbol.for("AnimatedComponent"),_s=e=>Mi.str(e)?e:e&&Mi.str(e.displayName)?e.displayName:Mi.fun(e)&&e.name||null;function Os(e,...t){return Mi.fun(e)?e(...t):e}var zs=(e,t)=>!0===e||!!(t&&e&&(Mi.fun(e)?e(t):Qi(e).includes(t))),js=(e,t)=>Mi.obj(e)?t&&e[t]:e,Ps=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Is=e=>e,Hs=(e,t=Is)=>{let r=Ts;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Mi.und(r)||(n[a]=r)}return n},Ts=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Rs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ls(e){const t=function(e){const t={};let r=0;if(qi(e,((e,n)=>{Rs[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return qi(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Ns(e){return e=No(e),Mi.arr(e)?e.map(Ns):cs(e)?wi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ms(e){return Mi.fun(e)||Mi.arr(e)&&Mi.obj(e[0])}var Vs={tension:170,friction:26,mass:1,damping:1,easing:Ho.linear,clamp:!1},Ws=class{constructor(){this.velocity=0,Object.assign(this,Vs)}};function qs(e,t){if(Mi.und(t.decay)){const r=!Mi.und(t.tension)||!Mi.und(t.friction);!r&&Mi.und(t.frequency)&&Mi.und(t.damping)&&Mi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Qs=[],Us=class{constructor(){this.changed=!1,this.values=Qs,this.toValues=null,this.fromValues=Qs,this.config=new Ws,this.immediate=!1}};function Js(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{let l,c,d=zs(r.cancel??n?.cancel,t);if(d)g();else{Mi.und(r.pause)||(a.paused=zs(r.pause,t));let e=n?.pause;!0!==e&&(e=a.paused||zs(e,t)),l=Os(r.delay||0,t),e?(a.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){a.resumeQueue.add(h),a.timeouts.delete(c),c.cancel(),l=c.time-Si.now()}function h(){l>0&&!wi.skipAnimation?(a.delayed=!0,c=Si.setTimeout(g,l),a.pauseQueue.add(u),a.timeouts.add(c)):g()}function g(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(u),a.timeouts.delete(c),e<=(a.cancelId||0)&&(d=!0);try{i.start({...r,callId:e,cancel:d},o)}catch(e){s(e)}}}))}var Gs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ks(e.get()):t.every((e=>e.noop))?Xs(e.get()):Zs(e.get(),t.every((e=>e.finished))),Xs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Zs=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ks=e=>({value:e,cancelled:!0,finished:!1});function Ys(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const c=Hs(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const h=new Promise(((e,t)=>(d=e,u=t))),g=e=>{const t=a<=(r.cancelId||0)&&Ks(n)||a!==r.asyncId&&Zs(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new tl,o=new rl;return(async()=>{if(wi.skipAnimation)throw el(r),o.result=Zs(n,!1),u(o),o;g(i);const s=Mi.obj(e)?{...e}:{...t,to:e};s.parentId=a,qi(c,((e,t)=>{Mi.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return g(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(wi.skipAnimation)return el(r),Zs(n,!1);try{let t;t=Mi.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),h]),m=Zs(n.get(),!0,!1)}catch(e){if(e instanceof tl)m=e.result;else{if(!(e instanceof rl))throw e;m=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Mi.fun(o)&&Si.batchedUpdates((()=>{o(m,n,n.item)})),m})():l}function el(e,t){Ui(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var tl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},rl=class extends Error{constructor(){super("SkipAnimationSignal")}},nl=e=>e instanceof il,al=1,il=class extends Wo{constructor(){super(...arguments),this.id=al++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=bs(this);return e&&e.getValue()}to(...e){return wi.to(this,e)}interpolate(...e){return ss(`${is}The "interpolate" function is deprecated in v9 (use "to" instead)`),wi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Vo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||oo.sort(this),Vo(this,{type:"priority",parent:this,priority:e})}},ol=Symbol.for("SpringPhase"),sl=e=>(1&e[ol])>0,ll=e=>(2&e[ol])>0,cl=e=>(4&e[ol])>0,dl=(e,t)=>t?e[ol]|=3:e[ol]&=-3,ul=(e,t)=>t?e[ol]|=4:e[ol]&=-5,hl=class extends il{constructor(e,t){if(super(),this.animation=new Us,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Mi.und(e)||!Mi.und(t)){const r=Mi.obj(e)?{...e}:{...t,from:e};Mi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ll(this)||this._state.asyncTo)||cl(this)}get goal(){return No(this.animation.to)}get velocity(){const e=bs(this);return e instanceof xs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return sl(this)}get isAnimating(){return ll(this)}get isPaused(){return cl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:a}=n;const{config:i}=n,o=Fs(n.to);!o&&Lo(n.to)&&(a=Qi(No(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ws?1:o?o[l].lastPosition:a[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],a=null!=s.v0?s.v0:s.v0=Mi.arr(i.velocity)?i.velocity[l]:i.velocity;let o;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Mi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+a/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=h,o=a*n}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Mi.und(n),g=r==c?s.v0>0:r<c;let p,m=!1;const f=1,b=Math.ceil(e/f);for(let e=0;e<b&&(p=Math.abs(o)>t,p||(d=Math.abs(c-u)<=h,!d));++e){l&&(m=u==c||u>c==g,m&&(o=-o*n,u=c));o+=(1e-6*-i.tension*(u-c)+.001*-i.friction*o)/i.mass*f,u+=o*f}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(c-r),o=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=bs(this),l=s.getValue();if(t){const e=No(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Si.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ll(this)){const{to:e,config:t}=this.animation;Si.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Mi.und(e)?(r=this.queue||[],this.queue=[]):r=[Mi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Gs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),el(this._state,e&&this._lastCallId),Si.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Mi.obj(r)?r[t]:r,(null==r||Ms(r))&&(r=void 0),n=Mi.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return sl(this)||(e.reverse&&([r,n]=[n,r]),n=No(n),Mi.und(n)?bs(this)||this._set(r):this._set(n)),a}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Hs(e,((e,t)=>/^on/.test(t)?js(e,r):e))),Fl(this,e,"onProps"),vl(this,"onProps",e,this);const a=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Js(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{cl(this)||(ul(this,!0),Xi(i.pauseQueue),vl(this,"onPause",Zs(this,gl(this,this.animation.to)),this))},resume:()=>{cl(this)&&(ul(this,!1),ll(this)&&this._resume(),Xi(i.resumeQueue),vl(this,"onResume",Zs(this,gl(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=pl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ks(this));const n=!Mi.und(e.to),a=!Mi.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(Ks(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!a||n||t.default&&!Mi.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const h=!Vi(u,c);h&&(s.from=u),u=No(u);const g=!Vi(d,l);g&&this._focus(d);const p=Ms(t.to),{config:m}=s,{decay:f,velocity:b}=m;(n||a)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(qs(r={...r},t),t={...r,...t}),qs(e,t),Object.assign(e,t);for(const t in Vs)null==e[t]&&(e[t]=Vs[t]);let{frequency:n,damping:a}=e;const{mass:i}=e;Mi.und(n)||(n<.01&&(n=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*a*i/n)}(m,Os(t.config,i),t.config!==o.config?Os(o.config,i):void 0);let y=bs(this);if(!y||Mi.und(d))return r(Zs(this,!0));const F=Mi.und(t.reset)?a&&!t.default:!Mi.und(u)&&zs(t.reset,i),v=F?u:this.get(),x=Ns(d),w=Mi.num(x)||Mi.arr(x)||cs(x),B=!p&&(!w||zs(o.immediate||t.immediate,i));if(g){const e=Ds(d);if(e!==y.constructor){if(!B)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(x)}}const S=y.constructor;let E=Lo(d),C=!1;if(!E){const e=F||!sl(this)&&h;(g||e)&&(C=Vi(Ns(v),x),E=!C),(Vi(s.immediate,B)||B)&&Vi(m.decay,f)&&Vi(m.velocity,b)||(E=!0)}if(C&&ll(this)&&(s.changed&&!F?E=!0:E||this._stop(l)),!p&&((E||Lo(l))&&(s.values=y.getPayload(),s.toValues=Lo(d)?null:S==ws?[1]:Qi(x)),s.immediate!=B&&(s.immediate=B,B||F||this._set(l)),E)){const{onRest:e}=s;Wi(yl,(e=>Fl(this,t,e)));const n=Zs(this,gl(this,l));Xi(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Si.batchedUpdates((()=>{s.changed=!F,e?.(n,this),F?Os(o.onRest,n):s.onStart?.(n,this)}))}F&&this._set(v),p?r(Ys(t.to,t,this._state,this)):E?this._start():ll(this)&&!g?this._pendingCalls.add(r):r(Xs(v))}_focus(e){const t=this.animation;e!==t.to&&(Mo(this)&&this._detach(),t.to=e,Mo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Lo(t)&&(Qo(t,this),nl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Lo(e)&&Uo(e,this)}_set(e,t=!0){const r=No(e);if(!Mi.und(r)){const e=bs(this);if(!e||!Vi(r,e.getValue())){const n=Ds(r);e&&e.constructor==n?e.setValue(r):ys(this,n.create(r)),e&&Si.batchedUpdates((()=>{this._onChange(r,t)}))}}return bs(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,vl(this,"onStart",Zs(this,gl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Os(this.animation.onChange,e,this)),Os(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;bs(this).reset(No(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ll(this)||(dl(this,!0),cl(this)||this._resume())}_resume(){wi.skipAnimation?this.finish():oo.start(this)}_stop(e,t){if(ll(this)){dl(this,!1);const r=this.animation;Wi(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Vo(this,{type:"idle",parent:this});const n=t?Ks(this.get()):Zs(this.get(),gl(this,e??r.to));Xi(this._pendingCalls,n),r.changed&&(r.changed=!1,vl(this,"onRest",n,this))}}};function gl(e,t){const r=Ns(t);return Vi(Ns(e.get()),r)}function pl(e,t=e.loop,r=e.to){const n=Os(t);if(n){const a=!0!==n&&Ls(n),i=(a||e).reverse,o=!a||a.reset;return ml({...e,loop:t,default:!1,pause:void 0,to:!i||Ms(r)?r:void 0,from:o?e.from:void 0,reset:o,...a})}}function ml(e){const{to:t,from:r}=e=Ls(e),n=new Set;return Mi.obj(t)&&bl(t,n),Mi.obj(r)&&bl(r,n),e.keys=n.size?Array.from(n):null,e}function fl(e){const t=ml(e);return Mi.und(t.default)&&(t.default=Hs(t)),t}function bl(e,t){qi(e,((e,r)=>null!=e&&t.add(r)))}var yl=["onStart","onRest","onChange","onPause","onResume"];function Fl(e,t,r){e.animation[r]=t[r]!==Ps(t,r)?js(t[r],e.key):void 0}function vl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var xl=["onStart","onChange","onRest"],wl=1,Bl=class{constructor(e,t){this.id=wl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Mi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ml(e)),this}start(e){let{queue:t}=this;return e?t=Qi(e).map(ml):this.queue=[],this._flush?this._flush(this,t):(kl(this,t),Sl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Wi(Qi(t),(t=>r[t].stop(!!e)))}else el(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Mi.und(e))this.start({pause:!0});else{const t=this.springs;Wi(Qi(e),(e=>t[e].pause()))}return this}resume(e){if(Mi.und(e))this.start({pause:!1});else{const t=this.springs;Wi(Qi(e),(e=>t[e].resume()))}return this}each(e){qi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,Ui(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&Ui(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Ui(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Si.onFrame(this._onFrame)}};function Sl(e,t){return Promise.all(t.map((t=>El(e,t)))).then((t=>Gs(e,t)))}async function El(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Mi.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const d=Mi.arr(a)||Mi.fun(a)?a:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Wi(xl,(r=>{const n=t[r];if(Mi.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Xi(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),g=!0===t.cancel||!0===Ps(t,"cancel");(d||g&&u.asyncId)&&h.push(Js(++e._lastAsyncId,{props:t,state:u,actions:{pause:Ni,resume:Ni,start(t,r){g?(el(u,e._lastAsyncId),r(Ks(e))):(t.onRest=s,r(Ys(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Gs(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=pl(t,o,a);if(r)return kl(e,[r]),El(e,r,!0)}return l&&Si.batchedUpdates((()=>l(p,e,e.item))),p}function Cl(e,t){const r={...e.springs};return t&&Wi(Qi(t),(e=>{Mi.und(e.keys)&&(e=ml(e)),Mi.obj(e.to)||(e={...e,to:void 0}),Al(r,e,(e=>$l(e)))})),Dl(e,r),r}function Dl(e,t){qi(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Qo(t,e))}))}function $l(e,t){const r=new hl;return r.key=e,t&&Qo(r,t),r}function Al(e,t,r){t.keys&&Wi(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function kl(e,t){Wi(t,(t=>{Al(e.springs,t,(t=>$l(t,e)))}))}var _l,Ol,zl=({children:e,...t})=>{const r=u(jl),a=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=i((()=>({inputs:t,result:e()}))),n=o(),a=n.current;let l=a;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,a==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=jl;return n.createElement(c,{value:t},e)},jl=(_l=zl,Ol={},Object.assign(_l,n.createContext(Ol)),_l.Provider._context=_l,_l.Consumer._context=_l,_l);zl.Provider=jl.Provider,zl.Consumer=jl.Consumer;var Pl=()=>{const e=[],t=function(t){ls(`${is}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Wi(e,((e,a)=>{if(Mi.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Wi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Wi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Wi(e,((e,r)=>{const n=Mi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Wi(e,((e,n)=>{if(Mi.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return Wi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Wi(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Mi.fun(e)?e(r,t):e};return t._getProps=r,t};function Il(e,t){const r=Mi.fun(e),[[n],a]=function(e,t,r){const n=Mi.fun(t)&&t;n&&!r&&(r=[]);const a=h((()=>n||3==arguments.length?Pl():void 0),[]),i=o(0),s=hs(),l=h((()=>({ctrls:[],queue:[],flush(e,t){const r=Cl(e,t);return i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Sl(e,t):new Promise((n=>{Dl(e,r),l.queue.push((()=>{n(Sl(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),d=[],g=ms(e)||0;function p(e,r){for(let a=e;a<r;a++){const e=c.current[a]||(c.current[a]=new Bl(null,l.flush)),r=n?n(a,e):t[a];r&&(d[a]=fl(r))}}h((()=>{Wi(c.current.slice(e,g),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,p(g,e)}),[e]),h((()=>{p(0,Math.min(g,e))}),r);const m=c.current.map(((e,t)=>Cl(e,d[t]))),f=u(zl),b=ms(f),y=f!==b&&function(e){for(const t in e)return!0;return!1}(f);ds((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Wi(e,(e=>e()))),Wi(c.current,((e,t)=>{a?.add(e),y&&e.start({default:f});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),gs((()=>()=>{Wi(l.ctrls,(e=>e.stop(!0)))}));const F=m.map((e=>({...e})));return a?[F,a]:F}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}var Hl=class extends il{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ko(...t);const r=this._get(),n=Ds(r);ys(this,n.create(r))}advance(e){const t=this._get();Vi(t,this.get())||(bs(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Rl(this._active)&&Ll(this)}_get(){const e=Mi.arr(this.source)?this.source.map(No):Qi(No(this.source));return this.calc(...e)}_start(){this.idle&&!Rl(this._active)&&(this.idle=!1,Wi(Fs(this),(e=>{e.done=!1})),wi.skipAnimation?(Si.batchedUpdates((()=>this.advance())),Ll(this)):oo.start(this))}_attach(){let e=1;Wi(Qi(this.source),(t=>{Lo(t)&&Qo(t,this),nl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Wi(Qi(this.source),(e=>{Lo(e)&&Uo(e,this)})),this._active.clear(),Ll(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Qi(this.source).reduce(((e,t)=>Math.max(e,(nl(t)?t.priority:0)+1)),0))}};function Tl(e){return!1!==e.idle}function Rl(e){return!e.size||Array.from(e).every(Tl)}function Ll(e){e.idle||(e.idle=!0,Wi(Fs(e),(e=>{e.done=!0})),Vo(e,{type:"idle",parent:e}))}wi.assign({createStringInterpolator:as,to:(e,t)=>new Hl(e,t)});var Nl=/^--/;function Ml(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Nl.test(e)||Wl.hasOwnProperty(e)&&Wl[e]?(""+t).trim():t+"px"}var Vl={};var Wl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ql=["Webkit","Ms","Moz","O"];Wl=Object.keys(Wl).reduce(((e,t)=>(ql.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Wl);var Ql=/^(matrix|translate|scale|rotate|skew)/,Ul=/^(translate)/,Jl=/^(rotate|skew)/,Gl=(e,t)=>Mi.num(e)&&0!==e?e+t:e,Xl=(e,t)=>Mi.arr(e)?e.every((e=>Xl(e,t))):Mi.num(e)?e===t:parseFloat(e)===t,Zl=class extends Ss{constructor({x:e,y:t,z:r,...n}){const a=[],i=[];(e||t||r)&&(a.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Gl(e,"px"))).join(",")})`,Xl(e,0)]))),qi(n,((e,t)=>{if("transform"===t)a.push([e||""]),i.push((e=>[e,""===e]));else if(Ql.test(t)){if(delete n[t],Mi.und(e))return;const r=Ul.test(t)?"px":Jl.test(t)?"deg":"";a.push(Qi(e)),i.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${Gl(a,r)})`,Xl(a,0)]:e=>[`${t}(${e.map((e=>Gl(e,r))).join(",")})`,Xl(e,t.startsWith("scale")?1:0)])}})),a.length&&(n.transform=new Kl(a,i)),super(n)}},Kl=class extends Wo{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Wi(this.inputs,((r,n)=>{const a=No(r[0]),[i,o]=this.transforms[n](Mi.arr(a)?a:r.map(No));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Wi(this.inputs,(e=>Wi(e,(e=>Lo(e)&&Qo(e,this)))))}observerRemoved(e){0==e&&Wi(this.inputs,(e=>Wi(e,(e=>Lo(e)&&Uo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Vo(this,e)}};wi.assign({batchedUpdates:g,createStringInterpolator:as,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Yl,ec=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Ss(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=_s(e)||"Anonymous";return(e=Mi.str(e)?i[e]||(i[e]=$s(e,a)):e[ks]||(e[ks]=$s(e,a))).displayName=`Animated(${t})`,e};return qi(e,((t,r)=>{Mi.arr(e)&&(r=_s(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:a,scrollTop:i,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Vl[t]||(Vl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const t in n)if(n.hasOwnProperty(t)){const r=Ml(t,n[t]);Nl.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==i&&(e.scrollTop=i),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Zl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),tc=ec.animated;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const a=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:r,endIndex:a}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,a+1).length)+e.substring(a+1)}if(a){const{startIndex:r,endIndex:n}=t(a[0],a[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Yl||(Yl={}));const rc=(e,t,r)=>Sa(r,t)||Sa(e,t),nc=(e,t)=>{const r=t||e.defaultValue;return Sa(e.collections,r)},ac={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},ic=e=>t=>{const r=t.theme,n=nc(ac,r.colourScheme);return r.overrides&&r.overrides.primitiveColour?rc(n,e,r.overrides.primitiveColour):n[e]},oc={"primary-10":ic("primary-10"),"primary-20":ic("primary-20"),"primary-30":ic("primary-30"),"primary-40":ic("primary-40"),"primary-50":ic("primary-50"),"primary-60":ic("primary-60"),"primary-70":ic("primary-70"),"primary-80":ic("primary-80"),"primary-90":ic("primary-90"),"primary-95":ic("primary-95"),"primary-100":ic("primary-100"),"secondary-10":ic("secondary-10"),"secondary-20":ic("secondary-20"),"secondary-30":ic("secondary-30"),"secondary-40":ic("secondary-40"),"secondary-50":ic("secondary-50"),"secondary-60":ic("secondary-60"),"secondary-70":ic("secondary-70"),"secondary-80":ic("secondary-80"),"secondary-90":ic("secondary-90"),"secondary-95":ic("secondary-95"),"secondary-100":ic("secondary-100"),"neutral-10":ic("neutral-10"),"neutral-20":ic("neutral-20"),"neutral-30":ic("neutral-30"),"neutral-40":ic("neutral-40"),"neutral-50":ic("neutral-50"),"neutral-60":ic("neutral-60"),"neutral-70":ic("neutral-70"),"neutral-80":ic("neutral-80"),"neutral-90":ic("neutral-90"),"neutral-95":ic("neutral-95"),"neutral-100":ic("neutral-100"),"success-10":ic("success-10"),"success-20":ic("success-20"),"success-30":ic("success-30"),"success-40":ic("success-40"),"success-50":ic("success-50"),"success-60":ic("success-60"),"success-70":ic("success-70"),"success-80":ic("success-80"),"success-90":ic("success-90"),"success-95":ic("success-95"),"success-100":ic("success-100"),"warning-10":ic("warning-10"),"warning-20":ic("warning-20"),"warning-30":ic("warning-30"),"warning-40":ic("warning-40"),"warning-50":ic("warning-50"),"warning-60":ic("warning-60"),"warning-70":ic("warning-70"),"warning-80":ic("warning-80"),"warning-90":ic("warning-90"),"warning-95":ic("warning-95"),"warning-100":ic("warning-100"),"error-10":ic("error-10"),"error-20":ic("error-20"),"error-30":ic("error-30"),"error-40":ic("error-40"),"error-50":ic("error-50"),"error-60":ic("error-60"),"error-70":ic("error-70"),"error-80":ic("error-80"),"error-90":ic("error-90"),"error-95":ic("error-95"),"error-100":ic("error-100"),"info-10":ic("info-10"),"info-20":ic("info-20"),"info-30":ic("info-30"),"info-40":ic("info-40"),"info-50":ic("info-50"),"info-60":ic("info-60"),"info-70":ic("info-70"),"info-80":ic("info-80"),"info-90":ic("info-90"),"info-95":ic("info-95"),"info-100":ic("info-100"),white:ic("white"),black:ic("black")},sc={text:ic("neutral-20"),"text-subtle":ic("neutral-30"),"text-subtler":ic("neutral-50"),"text-subtlest":ic("neutral-60"),"text-primary":ic("primary-50"),"text-hover":ic("primary-40"),"text-selected":ic("primary-50"),"text-selected-hover":ic("primary-40"),"text-disabled":ic("neutral-50"),"text-disabled-subtle":ic("neutral-60"),"text-disabled-subtlest":ic("neutral-80"),"text-selected-disabled":ic("neutral-50"),"text-success":ic("success-40"),"text-warning":ic("warning-40"),"text-error":ic("error-40"),"text-info":ic("info-40"),"text-inverse":ic("white"),icon:ic("neutral-50"),"icon-subtle":ic("neutral-60"),"icon-strongest":ic("neutral-20"),"icon-primary":ic("primary-50"),"icon-primary-subtle":ic("primary-60"),"icon-primary-subtlest":ic("primary-70"),"icon-hover":ic("primary-40"),"icon-selected":ic("primary-50"),"icon-selected-hover":ic("primary-40"),"icon-disabled":ic("neutral-50"),"icon-disabled-subtle":ic("neutral-60"),"icon-selected-disabled":ic("neutral-60"),"icon-success":ic("success-50"),"icon-warning":ic("warning-60"),"icon-error":ic("error-50"),"icon-error-strong":ic("error-40"),"icon-info":ic("info-50"),"icon-inverse":ic("white"),"icon-primary-inverse":"#FEAB10",border:ic("neutral-90"),"border-strong":ic("neutral-70"),"border-stronger":ic("neutral-30"),"border-primary":ic("primary-50"),"border-primary-subtle":ic("primary-60"),"border-hover":ic("primary-90"),"border-hover-strong":ic("primary-60"),"border-selected":ic("primary-50"),"border-selected-subtle":ic("primary-70"),"border-selected-subtlest":ic("primary-90"),"border-selected-hover":ic("primary-40"),"border-focus":ic("primary-60"),"border-focus-strong":ic("primary-50"),"border-disabled":ic("neutral-90"),"border-selected-disabled":ic("neutral-70"),"border-success":ic("success-60"),"border-warning":ic("warning-60"),"border-error":ic("error-60"),"border-error-focus":ic("error-60"),"border-error-strong":ic("error-40"),"border-info":ic("info-60"),bg:ic("white"),"bg-strong":ic("neutral-100"),"bg-stronger":ic("neutral-95"),"bg-strongest":ic("neutral-90"),"bg-hover":ic("primary-95"),"bg-hover-strong":ic("primary-90"),"bg-hover-subtle":ic("primary-100"),"bg-hover-neutral":ic("neutral-95"),"bg-selected":ic("primary-95"),"bg-selected-hover":ic("primary-90"),"bg-selected-strong":ic("primary-90"),"bg-selected-strongest":ic("primary-90"),"bg-disabled":ic("neutral-95"),"bg-selected-disabled":ic("neutral-95"),"bg-success":ic("success-100"),"bg-success-strong":ic("success-50"),"bg-warning":ic("warning-100"),"bg-warning-strong":ic("warning-50"),"bg-info":ic("info-100"),"bg-info-strong":ic("info-50"),"bg-error":ic("error-100"),"bg-error-strong":ic("error-50"),"bg-error-strong-hover":ic("error-30"),"bg-inverse":ic("neutral-20"),"bg-inverse-subtle":ic("neutral-30"),"bg-inverse-subtler":ic("neutral-50"),"bg-inverse-subtlest":ic("neutral-60"),"bg-primary":ic("primary-50"),"bg-primary-subtle":ic("primary-60"),"bg-primary-subtler":ic("primary-80"),"bg-primary-subtlest":ic("primary-100"),"bg-primary-hover":ic("primary-40"),"bg-primary-subtlest-hover":ic("primary-90"),"bg-primary-subtlest-selected":ic("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ic("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":ic("black"),"focus-ring-inverse":ic("white")},lc={collections:{lifesg:sc,bookingsg:sc,rbs:sc,mylegacy:sc,ccube:sc},defaultValue:"lifesg"},cc=e=>t=>{const r=t.theme,n=nc(lc,r.colourScheme),a=r.overrides&&r.overrides.semanticColour?rc(n,e,r.overrides.semanticColour):n[e];return"function"==typeof a?a(t):a},dc={text:cc("text"),"text-subtle":cc("text-subtle"),"text-subtler":cc("text-subtler"),"text-subtlest":cc("text-subtlest"),"text-primary":cc("text-primary"),"text-hover":cc("text-hover"),"text-selected":cc("text-selected"),"text-selected-hover":cc("text-selected-hover"),"text-disabled":cc("text-disabled"),"text-disabled-subtle":cc("text-disabled-subtle"),"text-disabled-subtlest":cc("text-disabled-subtlest"),"text-selected-disabled":cc("text-selected-disabled"),"text-success":cc("text-success"),"text-warning":cc("text-warning"),"text-error":cc("text-error"),"text-info":cc("text-info"),"text-inverse":cc("text-inverse"),icon:cc("icon"),"icon-subtle":cc("icon-subtle"),"icon-strongest":cc("icon-strongest"),"icon-primary":cc("icon-primary"),"icon-primary-subtle":cc("icon-primary-subtle"),"icon-primary-subtlest":cc("icon-primary-subtlest"),"icon-hover":cc("icon-hover"),"icon-selected":cc("icon-selected"),"icon-selected-hover":cc("icon-selected-hover"),"icon-disabled":cc("icon-disabled"),"icon-disabled-subtle":cc("icon-disabled-subtle"),"icon-selected-disabled":cc("icon-selected-disabled"),"icon-success":cc("icon-success"),"icon-warning":cc("icon-warning"),"icon-error":cc("icon-error"),"icon-error-strong":cc("icon-error-strong"),"icon-info":cc("icon-info"),"icon-inverse":cc("icon-inverse"),"icon-primary-inverse":cc("icon-primary-inverse"),border:cc("border"),"border-strong":cc("border-strong"),"border-stronger":cc("border-stronger"),"border-primary":cc("border-primary"),"border-primary-subtle":cc("border-primary-subtle"),"border-hover":cc("border-hover"),"border-hover-strong":cc("border-hover-strong"),"border-selected":cc("border-selected"),"border-selected-subtle":cc("border-selected-subtle"),"border-selected-subtlest":cc("border-selected-subtlest"),"border-selected-hover":cc("border-selected-hover"),"border-focus":cc("border-focus"),"border-focus-strong":cc("border-focus-strong"),"border-disabled":cc("border-disabled"),"border-selected-disabled":cc("border-selected-disabled"),"border-success":cc("border-success"),"border-warning":cc("border-warning"),"border-error":cc("border-error"),"border-error-focus":cc("border-error-focus"),"border-error-strong":cc("border-error-strong"),"border-info":cc("border-info"),bg:cc("bg"),"bg-strong":cc("bg-strong"),"bg-stronger":cc("bg-stronger"),"bg-strongest":cc("bg-strongest"),"bg-hover":cc("bg-hover"),"bg-hover-strong":cc("bg-hover-strong"),"bg-hover-subtle":cc("bg-hover-subtle"),"bg-hover-neutral":cc("bg-hover-neutral"),"bg-selected":cc("bg-selected"),"bg-selected-hover":cc("bg-selected-hover"),"bg-selected-strong":cc("bg-selected-strong"),"bg-selected-strongest":cc("bg-selected-strongest"),"bg-disabled":cc("bg-disabled"),"bg-selected-disabled":cc("bg-selected-disabled"),"bg-success":cc("bg-success"),"bg-success-strong":cc("bg-success-strong"),"bg-warning":cc("bg-warning"),"bg-warning-strong":cc("bg-warning-strong"),"bg-info":cc("bg-info"),"bg-info-strong":cc("bg-info-strong"),"bg-error":cc("bg-error"),"bg-error-strong":cc("bg-error-strong"),"bg-error-strong-hover":cc("bg-error-strong-hover"),"bg-inverse":cc("bg-inverse"),"bg-inverse-subtle":cc("bg-inverse-subtle"),"bg-inverse-subtler":cc("bg-inverse-subtler"),"bg-inverse-subtlest":cc("bg-inverse-subtlest"),"bg-primary":cc("bg-primary"),"bg-primary-subtle":cc("bg-primary-subtle"),"bg-primary-subtler":cc("bg-primary-subtler"),"bg-primary-subtlest":cc("bg-primary-subtlest"),"bg-primary-hover":cc("bg-primary-hover"),"bg-primary-subtlest-hover":cc("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":cc("bg-primary-subtlest-selected"),"bg-available":cc("bg-available"),"overlay-strong":cc("overlay-strong"),"overlay-subtle":cc("overlay-subtle"),hyperlink:cc("hyperlink"),"hyperlink-inverse":cc("hyperlink-inverse"),"focus-ring":cc("focus-ring"),"focus-ring-inverse":cc("focus-ring-inverse")},uc={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},hc=e=>t=>{var r;const n=t.theme,a=nc(uc,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?rc(a,e,n.overrides.breakpoint):a[e],i},gc={"xxs-min":hc("xxs-min"),"xxs-max":hc("xxs-max"),"xs-min":hc("xs-min"),"xs-max":hc("xs-max"),"sm-min":hc("sm-min"),"sm-max":hc("sm-max"),"md-min":hc("md-min"),"md-max":hc("md-max"),"lg-min":hc("lg-min"),"lg-max":hc("lg-max"),"xl-min":hc("xl-min"),"xl-max":hc("xl-max"),"xxl-min":hc("xxl-min"),"xxs-column":hc("xxs-column"),"xs-column":hc("xs-column"),"sm-column":hc("sm-column"),"md-column":hc("md-column"),"lg-column":hc("lg-column"),"xl-column":hc("xl-column"),"xxl-column":hc("xxl-column"),"xxs-gutter":hc("xxs-gutter"),"xs-gutter":hc("xs-gutter"),"sm-gutter":hc("sm-gutter"),"md-gutter":hc("md-gutter"),"lg-gutter":hc("lg-gutter"),"xl-gutter":hc("xl-gutter"),"xxl-gutter":hc("xxl-gutter"),"xxs-margin":hc("xxs-margin"),"xs-margin":hc("xs-margin"),"sm-margin":hc("sm-margin"),"md-margin":hc("md-margin"),"lg-margin":hc("lg-margin"),"xl-margin":hc("xl-margin"),"xxl-margin":hc("xxl-margin")},pc=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=gc["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{});pc("max-width"),pc("min-width");const mc={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},fc={collections:{lifesg:mc,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:mc,mylegacy:mc,ccube:mc},defaultValue:"lifesg"},bc=e=>t=>{const r=t.theme,n=nc(fc,r.fontScheme);return r.overrides&&r.overrides.fontSpec?rc(n,e,r.overrides.fontSpec):n[e]},yc=(e,t,r,n)=>f`
    font-family: ${bc("font-family")};
    font-size: ${bc(e)};
    font-weight: ${bc(t)};
    line-height: ${bc(r)};
    letter-spacing: ${bc(n)};
`;yc("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),yc("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),yc("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),yc("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),yc("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),yc("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),yc("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),yc("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),yc("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),yc("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),yc("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),yc("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),yc("header-size-md","weight-light","header-lh-md","header-ls-md"),yc("header-size-md","weight-regular","header-lh-md","header-ls-md"),yc("header-size-md","weight-semibold","header-lh-md","header-ls-md"),yc("header-size-md","weight-bold","header-lh-md","header-ls-md"),yc("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),yc("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),yc("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),yc("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),yc("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),yc("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),yc("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),yc("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),yc("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),yc("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),yc("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),yc("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),yc("body-size-md","weight-light","body-lh-md","body-ls-md"),yc("body-size-md","weight-regular","body-lh-md","body-ls-md"),yc("body-size-md","weight-semibold","body-lh-md","body-ls-md"),yc("body-size-md","weight-bold","body-lh-md","body-ls-md"),yc("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),yc("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),yc("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),yc("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),yc("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),yc("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),yc("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),yc("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),yc("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),yc("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg");const Fc=Object.assign(Object.assign({},dc),{Primitive:oc}),vc=b`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,xc=m.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return f`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${vc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?Fc["icon-disabled-subtle"](e):e.$unchecked?Fc["icon-primary-subtlest"](e):Fc["icon-primary"](e)};
    }
`,wc=m.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Bc=(e,t,r)=>t?Sa(r,t)||Sa(e,t):r||e,Sc=(e,t)=>{const r=t||e.defaultValue;return Sa(e.collections,r)};var Ec;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ec||(Ec={}));const Cc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dc=e=>t=>{const r=t.theme,n=Sc(Cc,r[Ec.colorScheme]);return r.options&&r.options.color?Bc(n,e,r.options.color):Bc(n,e)},$c={Brand:{1:Dc("Brand.1"),2:Dc("Brand.2"),3:Dc("Brand.3"),4:Dc("Brand.4"),5:Dc("Brand.5"),6:Dc("Brand.6")},Primary:Dc("Primary"),PrimaryDark:Dc("PrimaryDark"),Secondary:Dc("Secondary"),Accent:{Light:{1:Dc("Accent.Light.1"),2:Dc("Accent.Light.2"),3:Dc("Accent.Light.3"),4:Dc("Accent.Light.4"),5:Dc("Accent.Light.5"),6:Dc("Accent.Light.6")},Dark:{1:Dc("Accent.Dark.1"),2:Dc("Accent.Dark.2"),3:Dc("Accent.Dark.3")}},Neutral:{1:Dc("Neutral.1"),2:Dc("Neutral.2"),3:Dc("Neutral.3"),4:Dc("Neutral.4"),5:Dc("Neutral.5"),6:Dc("Neutral.6"),7:Dc("Neutral.7"),8:Dc("Neutral.8")},Validation:{Green:{Text:Dc("Validation.Green.Text"),Icon:Dc("Validation.Green.Icon"),Border:Dc("Validation.Green.Border"),Background:Dc("Validation.Green.Background")},Orange:{Text:Dc("Validation.Orange.Text"),Icon:Dc("Validation.Orange.Icon"),Border:Dc("Validation.Orange.Border"),Background:Dc("Validation.Orange.Background"),Badge:Dc("Validation.Orange.Badge")},Red:{Text:Dc("Validation.Red.Text"),Icon:Dc("Validation.Red.Icon"),Border:Dc("Validation.Red.Border"),Background:Dc("Validation.Red.Background")},Blue:{Text:Dc("Validation.Blue.Text"),Icon:Dc("Validation.Blue.Icon"),Border:Dc("Validation.Blue.Border"),Background:Dc("Validation.Blue.Background")}},Shadow:{Accent:Dc("Shadow.Accent"),Red:Dc("Shadow.Red"),Elevation:Dc("Shadow.Elevation")}},Ac={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},kc=e=>Object.keys(Ac).reduce(((t,r)=>{const n=Ac[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),_c=kc("max-width"),Oc=(kc("min-width"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),zc={D1:{fontFamily:Oc.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oc.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oc.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oc.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oc.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oc.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oc.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oc.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oc.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oc.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oc.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oc.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},jc={D1:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oc.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Oc.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Oc.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Oc.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oc.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Pc={collections:{base:zc,oneservice:{D1:{fontFamily:Oc.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Oc.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Oc.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oc.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Oc.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Oc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Oc.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Oc.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Oc.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Oc.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Oc.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Oc.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Oc.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:jc},defaultValue:"base"},Ic=e=>t=>{const r=t.theme,n=Sc(Pc,r[Ec.textStyleScheme]);return r.options&&r.options.textStyle?Bc(n,e,r.options.textStyle):Bc(n,e)},Hc={D1:{fontFamily:Ic("D1.fontFamily"),fontSize:Ic("D1.fontSize"),fontWeight:Ic("D1.fontWeight"),lineHeight:Ic("D1.lineHeight"),letterSpacing:Ic("D1.letterSpacing")},D2:{fontFamily:Ic("D2.fontFamily"),fontSize:Ic("D2.fontSize"),fontWeight:Ic("D2.fontWeight"),lineHeight:Ic("D2.lineHeight"),letterSpacing:Ic("D2.letterSpacing")},D3:{fontFamily:Ic("D3.fontFamily"),fontSize:Ic("D3.fontSize"),fontWeight:Ic("D3.fontWeight"),lineHeight:Ic("D3.lineHeight"),letterSpacing:Ic("D3.letterSpacing")},D4:{fontFamily:Ic("D4.fontFamily"),fontSize:Ic("D4.fontSize"),fontWeight:Ic("D4.fontWeight"),lineHeight:Ic("D4.lineHeight"),letterSpacing:Ic("D4.letterSpacing")},DBody:{fontFamily:Ic("DBody.fontFamily"),fontSize:Ic("DBody.fontSize"),fontWeight:Ic("DBody.fontWeight"),lineHeight:Ic("DBody.lineHeight"),letterSpacing:Ic("DBody.letterSpacing")},H1:{fontFamily:Ic("H1.fontFamily"),fontSize:Ic("H1.fontSize"),fontWeight:Ic("H1.fontWeight"),lineHeight:Ic("H1.lineHeight"),letterSpacing:Ic("H1.letterSpacing")},H2:{fontFamily:Ic("H2.fontFamily"),fontSize:Ic("H2.fontSize"),fontWeight:Ic("H2.fontWeight"),lineHeight:Ic("H2.lineHeight"),letterSpacing:Ic("H2.letterSpacing")},H3:{fontFamily:Ic("H3.fontFamily"),fontSize:Ic("H3.fontSize"),fontWeight:Ic("H3.fontWeight"),lineHeight:Ic("H3.lineHeight"),letterSpacing:Ic("H3.letterSpacing")},H4:{fontFamily:Ic("H4.fontFamily"),fontSize:Ic("H4.fontSize"),fontWeight:Ic("H4.fontWeight"),lineHeight:Ic("H4.lineHeight"),letterSpacing:Ic("H4.letterSpacing")},H5:{fontFamily:Ic("H5.fontFamily"),fontSize:Ic("H5.fontSize"),fontWeight:Ic("H5.fontWeight"),lineHeight:Ic("H5.lineHeight"),letterSpacing:Ic("H5.letterSpacing")},H6:{fontFamily:Ic("H6.fontFamily"),fontSize:Ic("H6.fontSize"),fontWeight:Ic("H6.fontWeight"),lineHeight:Ic("H6.lineHeight"),letterSpacing:Ic("H6.letterSpacing")},Body:{fontFamily:Ic("Body.fontFamily"),fontSize:Ic("Body.fontSize"),fontWeight:Ic("Body.fontWeight"),lineHeight:Ic("Body.lineHeight"),letterSpacing:Ic("Body.letterSpacing")},BodySmall:{fontFamily:Ic("BodySmall.fontFamily"),fontSize:Ic("BodySmall.fontSize"),fontWeight:Ic("BodySmall.fontWeight"),lineHeight:Ic("BodySmall.lineHeight"),letterSpacing:Ic("BodySmall.letterSpacing")},XSmall:{fontFamily:Ic("XSmall.fontFamily"),fontSize:Ic("XSmall.fontSize"),fontWeight:Ic("XSmall.fontWeight"),lineHeight:Ic("XSmall.lineHeight"),letterSpacing:Ic("XSmall.letterSpacing")}},Tc=[Oc.OpenSans,Oc.PlusJakartaSans],Rc=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Lc=(e,t)=>r=>{var n;const a=Hc[e].fontFamily(r),i=Hc[e].fontWeight(r),o=Tc.find((e=>Object.values(e).includes(a)));return o?f`
                font-family: ${Rc(o,t)||Rc(o,i)||a};
                font-weight: normal !important;
            `:f`
            font-family: ${a};
            font-weight: ${null!==(n=Nc(t)||i)&&void 0!==n?n:"normal"};
        `},Nc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Mc=e=>{if(e>0)return f`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Vc=(e,t,r=!1)=>n=>{const a=Hc[e],i=a.fontSize(n);return f`
            ${Lc(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${f`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Wc=(e=!1,t=!1,r=void 0)=>t?f`
            display: block;
            ${Mc(r)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${Mc(r)}
        `;var qc;!function(e){e.D1=m.h1`
        ${e=>f`
                ${Vc("D1",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>f`
                ${Vc("D2",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>f`
                ${Vc("D3",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>f`
                ${Vc("D4",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>f`
                ${Vc("DBody",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>f`
                ${Vc("H1",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>f`
                ${Vc("H2",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>f`
                ${Vc("H3",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>f`
                ${Vc("H4",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>f`
                ${Vc("H5",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>f`
                ${Vc("H6",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>f`
                ${Vc("Body",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>f`
                ${Vc("BodySmall",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>f`
                ${Vc("XSmall",e.weight,e.paragraph)}
                color: ${$c.Neutral[1]};
                ${Wc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Jc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Jc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(qc||(qc={}));const Qc=m.a`
    ${e=>f`
            ${Vc(e.textStyle,e.weight)}
            color: ${$c.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${$c.Secondary};

                svg {
                    color: ${$c.Secondary};
                }
            }
        `}
`,Uc=m(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Jc=r=>{var{external:n=!1,children:a}=r,i=$(r,["external","children"]);return e(Qc,Object.assign({},i,{children:[a,n&&t(Uc,{})]}))};var Gc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Gc||(Gc={}));const Xc=m.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Zc=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Kc=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Zc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Yc=m(Kc)`
    animation-delay: -0.45s;
`,ed=m(Kc)`
    animation-delay: -0.3s;
`,td=m(Kc)`
    animation-delay: -0.15s;
`,rd=m(tc.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,nd=m.ul`
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
        background: ${$c.Neutral[4]};
        border-right: 5px solid ${$c.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${_c.mobileL} {
        max-height: 15rem;
    }
`,ad=m.li`
    :hover,
    :focus,
    :active {
        background: ${$c.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return f`
                background: ${$c.Accent.Light[5]};
            `}}
`,id=m.button`
    display: flex;
    ${e=>e.$multiSelect?f`
                padding: 0.5rem 1rem;
            `:f`
                padding: 0 1rem;
                min-height: ${(e=>{let t=3.5;return"small"===e.$variant&&(t=3.25),e.$hasNextLineLabel&&(t=4.255),t})(e)}rem;
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
        outline-color: ${$c.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,od=f`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,sd=m.div`
    ${e=>Vc("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${$c.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&od}
`,ld=m.div`
    color: ${$c.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&od}

    ${e=>"next-line"===e.$labelDisplayType?f`
                    ${Vc("BodySmall","semibold")}
                `:f`
                    ${Vc("Body","regular")}
                `}
`,cd=m.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return f`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return f`
                    ${sd} {
                        display: inline;
                    }

                    ${ld} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,dd=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,ud=m.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,hd=m((r=>{var{className:n,checked:a,disabled:i,indeterminate:l,onChange:c,onKeyPress:d,displaySize:u="default"}=r,h=$(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const g=o();s((()=>{g.current.indeterminate=l}),[l]);const p=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),d&&d(t)}};return e(xc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":a,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:p,$displaySize:u,$disabled:i,$unchecked:!(l||a||i)},{children:[t(wc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:a,ref:g,tabIndex:-1,onChange:p,disabled:i},h)),l?t(y,{"data-testid":"indeterminate"}):a?t(F,{"data-testid":"checkmark"}):i?t(v,{"data-testid":"disabled-empty-checkbox"}):t(x,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,gd=m.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,pd=m.button`
    ${e=>Vc("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${$c.Primary(e)};\n\t\t`}
`,md=m.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;

    ${e=>Vc("small"===e.$variant?"BodySmall":"Body","regular")}
`,fd=m(p)`
    ${e=>{const t="small"===e.$variant?1:1.5;return f`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${$c.Validation.Red.Icon};
`,bd=m((({color:r,className:n,size:a})=>e(Xc,Object.assign({className:n,$size:a,$color:r},{children:[t(Kc,{id:"inner1"}),t(Yc,{id:"inner2"}),t(ed,{id:"inner3"}),t(td,{id:"inner4"})]}))))`
    margin-right: 0.625rem;
    color: ${$c.Primary};
`,yd=m.button`
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

        ${({$highlight:e})=>e&&f`
                background-color: ${$c.Neutral[7]};
            `}
    }
`,Fd=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=$(e,["children","focusHighlight","focusOutline","type"]);return t(yd,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),vd={collections:{base:{InputBoxShadow:f`
        inset 0 0 4px 0px ${$c.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 4px 0px ${$c.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${$c.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:f`
        inset 0 0 3px 0px ${$c.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 3px 0px ${$c.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${$c.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},xd=e=>t=>{var r;const n=t.theme,a=Sc(vd,n[Ec.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Bc(a,e,n.options.designToken):Bc(a,e)},wd=xd("InputBoxShadow"),Bd=xd("InputErrorBoxShadow"),Sd=(xd("ElevationBoxShadow"),xd("Table.Header"),xd("Table.Cell.Primary"),xd("Table.Cell.Secondary"),xd("Table.Cell.Selected"),xd("Table.Cell.Hover"),xd("Button.Danger.BackgroundColor"),xd("Button.Danger.Hover"),xd("Button.Danger.Primary"),xd("Button.Danger.Border"),f`
    border: 1px solid ${$c.Accent.Light[1]};
    box-shadow: ${wd};
`),Ed=f`
    border: 1px solid ${$c.Accent.Light[1]};
    box-shadow: none;
`,Cd=f`
    border: 1px solid ${$c.Neutral[5]};
    box-shadow: none;
`,Dd=f`
    border: 1px solid ${$c.Validation.Red.Border};
    box-shadow: ${Bd};
`,$d=m.div`
    border: 1px solid ${$c.Neutral[5]};
    border-radius: 4px;
    background: ${$c.Neutral[8]};

    :focus-within {
        ${Sd}
    }
    ${e=>e.$focused&&Sd}

    ${e=>e.$readOnly?f`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ed}
                }
                ${e.$focused&&Ed}
            `:e.$disabled?f`
                background: ${$c.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Cd}
                }
                ${e.$focused&&Cd}
            `:e.$error?f`
                border: 1px solid ${$c.Validation.Red.Border};

                :focus-within {
                    ${Dd}
                }
                ${e.$focused&&Dd}
            `:void 0}
`;m($d)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Ad=m.input`
    ${e=>Vc("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${$c.Neutral[1]};
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
        color: ${$c.Neutral[3]};
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
`;m.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${$c.Primary};
    }
`;const kd=e=>"small"===e?1:1.375,_d=e=>f`
        height: ${kd(e)}rem;
        width: ${kd(e)}rem;
    `,Od=m.li`
    background: ${$c.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,zd=m(Ad)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,jd=m(E)`
    ${e=>_d(e.$variant)}
    margin: 0 0.5rem;
    color: ${$c.Neutral[3]};
`,Pd=m(Fd)`
    ${e=>_d(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${$c.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return f`
                svg {
                    ${_d(e.$variant)}
                }
            `}}
`,Id=c(((r,n)=>{const{onClear:a}=r,i=$(r,["onClear"]);return e(Od,{children:[t(jd,{$variant:r.variant}),t(zd,Object.assign({ref:n,$variant:r.variant},i)),i.value&&t(Pd,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:r.variant},{children:t(w,{})}))]},"search")})),Hd=n=>{var{listItems:a,listExtractor:l,valueExtractor:c,onSelectItem:d,listStyleWidth:u,visible:h,enableSearch:g,searchPlaceholder:p="Search",onSearch:m,searchFunction:f,onDismiss:b,disableItemFocus:y,multiSelect:F,selectedItems:v,onSelectAll:x,onRetry:w,itemsLoadState:B="success",itemTruncationType:S="end",itemMaxLines:E=2,labelDisplayType:C="inline",renderListItem:D,onBlur:A,hideNoResultsDisplay:k,renderCustomCallToAction:_,variant:O="default"}=n,z=$(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[j,P]=i(0),[I,H]=i(""),[T,R]=i(a),[L,N]=i(0),M=Il({height:L}),V=o(),W=o(),q=o([]),Q=o(),U=o(),J=o(j),G=o(T),X=e=>{J.current=e,P(e)},Z=e=>{G.current=e,R(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{te(I)}),[I]),s((()=>{if(H(""),h){if(setTimeout((()=>{N(re())})),y)return;Q&&Q.current?(Q.current.focus(),X(-1)):q.current[j]&&q.current[j].focus()}else N(0)}),[h]),s((()=>{if(h){const e=re();N(e)}}),[T,B]),s((()=>{Z(a),H(""),X(0)}),[a]);const K=e=>l?l(e):e.toString(),Y=e=>{if("inline"!==C)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Yl.getTextWidth(e,"1.125rem 'Open Sans'")>t*E},ee=e=>!!yi(v,(t=>vi(t,e))),te=e=>{if(""===e)Z(a);else if(f){const t=f(e);Z(t)}else{const t=a.filter((t=>{var r;const n=K(t),a="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return a.includes(o)||i&&i.includes(o)}));Z(t)}},re=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),ne=e=>{if(V&&V.current.contains(e.target))switch(e.code){case"ArrowDown":if(J.current<G.current.length-1){const e=J.current+1;q.current[e].focus(),X(e)}break;case"ArrowUp":if(J.current>0){const e=J.current-1;q.current[e].focus(),X(J.current-1)}break;case"Escape":b&&b(!0)}},ae=(e,t)=>{e.preventDefault(),d&&d(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;H(t),m&&m()},oe=()=>{H(""),Q.current.focus(),m&&m()},se=()=>{w&&w()},le=()=>{A&&A()},ce=n=>e(r,{children:[t(dd,Object.assign({$maxLines:E,"aria-hidden":!0},{children:n})),t(ud,Object.assign({$maxLines:E,"aria-hidden":!0},{children:n}))]}),de=r=>{const n=K(r),a="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,o=Y(a),s=i&&Y(i),l=o||s?"next-line":C;return e(cd,Object.assign({$labelDisplayType:l},{children:[t(sd,Object.assign({$truncateType:S,$maxLines:E,$variant:O,"aria-label":a},{children:"middle"===S&&o?ce(a):a})),i&&t(ld,Object.assign({$truncateType:S,$maxLines:E,$labelDisplayType:C,"aria-label":i},{children:"middle"===S&&s?ce(i):i}))]}))},ue=()=>{if(!w||w&&"success"===B)return T.map(((r,n)=>t(ad,Object.assign({$checked:ee(r)&&!F},{children:e(id,Object.assign({$hasNextLineLabel:"next-line"===C&&T.length>0&&l&&"string"!=typeof l(T[0]),onClick:e=>{ae(e,r)},ref:e=>q.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:F,onBlur:le,$variant:O},{children:[F&&t(hd,{checked:ee(r),displaySize:"small"}),D?D(r,{selected:ee(r)}):de(r)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(r,n))))},he=()=>{if(F&&T.length>0&&!I&&"success"===B)return t(gd,{children:t(pd,Object.assign({onClick:x,type:"button",$variant:O},{children:0===v.length?"Select all":"Clear all"}))},"selectAll")},ge=()=>{if(!k&&(I||!g)&&0===T.length&&"success"===B)return e(md,Object.assign({"data-testid":"list-no-results",$variant:O},{children:[t(fd,{"data-testid":"no-result-icon",$variant:O}),"No results found."]}),"noResults")},pe=()=>{if(w&&"loading"===B)return e(md,Object.assign({"data-testid":"list-loading",$variant:O},{children:[t(bd,{}),"Loading..."]}),"loading")},me=()=>{if(w&&"fail"===B)return e(md,Object.assign({"data-testid":"list-fail",$variant:O},{children:[t(fd,{"data-testid":"load-error-icon",$variant:O}),"Failed to load. ",t(pd,Object.assign({onClick:se,type:"button",$variant:O},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(rd,Object.assign({style:M,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:V},{children:[(()=>{if(h)return e(nd,Object.assign({ref:W,"data-testid":"dropdown-list",width:u,role:"list"},z,{children:[(g||f)&&"success"===B?t(Id,{ref:Q,onChange:ie,value:I,placeholder:p,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:O}):null,he(),ge(),pe(),me(),ue()]}))})(),(()=>{if(h&&_)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:_(b,T)}))})()]}))})},Td="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Rd=e=>"small"===e?2.5:3,Ld=m.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Rd(e.$variant);return f`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Nd=f`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Rd(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${$c.Accent.Light[3]};
    }
`,Md=m.button`
    ${Nd}
    cursor: pointer;
`;m.div`
    ${Nd}
`;const Vd=b`
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
`,Wd=m.div`
    position: relative;
    border: 1px solid ${$c.Neutral[5]};
    border-radius: ${"4px"};
    background: ${$c.Neutral[8]};

    :focus-within {
        border: 1px solid ${$c.Accent.Light[1]};
        box-shadow: ${wd};
    }

    ${e=>e.expanded?f`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:f`
                animation: ${Vd} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?f`
                background: ${$c.Neutral[6](e)};

                ${Md} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${$c.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?f`
                border: none;
                background: transparent !important;

                ${Md} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?f`
                border: 1px solid ${$c.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${$c.Validation.Red.Border(e)};
                    box-shadow: ${Bd};
                }
            `:void 0}
`;m.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Td};
    margin-left: 1rem;
`,m(C)`
    color: ${$c.Neutral[3]};
    ${e=>{let t=Hc.Body.fontSize;return"small"===e.$variant&&(t=Hc.BodySmall.fontSize),f`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const qd=m.div`
    height: 1px;
    background: ${$c.Neutral[5]};
    margin: 0 0.5rem;
`,Qd=m.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Ud=m.div`
    ${e=>Vc("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return f`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Jd=m(Ud)`
    color: ${$c.Neutral[3]};
`,Gd=({children:e,show:r,error:n,disabled:a,testId:i,onBlur:l,readOnly:c,className:d,variant:u})=>{const h=o();return((e,t,r="window",n)=>{const a=o();s((()=>{a.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])})("mousedown",(function(e){if(!a){if(h&&h.current.contains(e.target))return;r&&l()}}),"document"),t(Ld,Object.assign({className:d,$variant:u},{children:t(Wd,Object.assign({ref:h,error:n&&!r,disabled:a,$readOnly:c,expanded:r,"data-testid":i},{children:e}))}))};var Xd;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Xd||(Xd={})),m.div`
    display: flex;
    flex-direction: column;
`;const Zd=m.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return f`
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
            `}}
`,Kd=m.div`
    width: 100%; // Force next flex item to break to next line
`,Yd=m.div`
    display: flex;
    flex: 1;
    align-items: center;
`,eu=m(B)`
    color: ${$c.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,tu=m.div`
    position: absolute;
    background: ${e=>e.$error?$c.Validation.Red.Border(e):$c.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return f`
                    opacity: 1;
                `;case"end":return f`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return f`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return f`
                display: none;
            `}}
`,ru=({children:r,currentActive:n,error:a,className:i,wrap:o})=>{const[s,l]=r;return e(Zd,Object.assign({className:i,$wrap:o},{children:[t(Yd,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(eu,{}),o&&t(Kd,{}),t(Yd,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(tu,{"data-id":"range-container-indicator",$position:n,$error:a,$wrap:o})]}))};m.input`
    ${Vc("Body","regular")}
    color: ${$c.Neutral[1]};

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
        color: ${$c.Neutral[3]};
    }

    ${e=>"number"===e.type?f`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?f`
                cursor: not-allowed;
            `:void 0}
`;const nu=m.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${$c.Neutral[3]};
    background-color: transparent;
    border: none;
`,au=m(D)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;m.div`
    display: flex;
    width: 100%;
`;const iu=m.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,ou=m(nu)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,su=m(Md)`
    padding-right: 2.75rem;
`,lu=r=>{var{selectedOptions:n,placeholders:a={from:"Select",to:"Select"},options:l,disabled:c,className:d,readOnly:u,error:h,"data-testid":g,id:p,enableSearch:m=!1,searchFunction:f,searchPlaceholder:b,valueExtractor:y,valueToStringFunction:F,listExtractor:v,displayValueExtractor:x,onSelectOption:w,listStyleWidth:B,onShowOptions:S,onHideOptions:E,onRetry:C,optionsLoadState:D={from:"success",to:"success"},optionTruncationType:A="middle",renderCustomSelectedOption:k,renderListItem:_,renderCustomCallToAction:O}=r,z=$(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[j,P]=i(),[I,H]=i(),T=o(),R={from:o(),to:o()},[L,N]=i("none");s((()=>{P(null==n?void 0:n.from),H(null==n?void 0:n.to)}),[n]);const M=e=>t=>{t.stopPropagation(),t.preventDefault(),c||u||N("from"===e?"from":"to"===e&&j?"to":"from")},V=e=>{const t="from"===e?j:I;return x?x(t):y?y(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===A){let r=0;return R[e]&&R[e].current&&(r=R[e].current.getBoundingClientRect().width),Yl.truncateOneLine((e=>"string"==typeof e?e:F(e)||e.toString())(t),r,120,8)}return t},q=e=>{!e&&E&&E(),e&&S&&S()},Q=e=>{const r="from"===e?j:I;return r?k?k(r):t(Ud,Object.assign({truncateType:A},{children:W(e,V(e))})):t(Jd,Object.assign({truncateType:A},{children:W(e,a[e])}))},U=e=>t(Qd,Object.assign({onClick:M(e),ref:R[e]},{children:Q(e)}));return e(Gd,Object.assign({show:"none"!==L,"data-testid":z["data-testid"],error:h&&!("none"!==L),disabled:c,readOnly:u,testId:g,onBlur:()=>{q(!1),N("none"),j&&I||(H(void 0),P(void 0))},className:d},{children:[e(iu,{children:[t(su,Object.assign({type:"button","data-testid":p||"selector",disabled:c,ref:T,onClick:M()},z,{children:e(ru,Object.assign({currentActive:(()=>{switch(L){case"from":return"start";case"to":return"end";case"none":return L}})()},{children:[U("from"),U("to")]}))})),"none"===L&&j&&I&&!u&&!c&&t(ou,Object.assign({onClick:e=>{e.stopPropagation(),P(void 0),H(void 0),w&&w({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:t(au,{"aria-hidden":!0})}))]}),"none"!==L&&t(qd,{}),(()=>{if("none"===L)return null;const e=l[L];if(e&&e.length>0){const r="from"===L?j:I;return t(Hd,{listItems:e,onSelectItem:(e,t)=>{return r=e,n=t,"from"===(a=L)?P(r):H(r),q(!1),T&&T.current.focus(),w&&w({[a]:r},n),void("from"===a?(H(void 0),N("to"),q(!0)):N("none"));var r,n,a},onDismiss:()=>(N("none"),q(!1),T&&T.current.focus(),void(j&&I||(H(void 0),P(void 0)))),valueExtractor:y,listExtractor:v,listStyleWidth:B,visible:!0,enableSearch:m,searchPlaceholder:b,searchFunction:f,"data-testid":`${L}-dropdown-list`,selectedItems:r?[r]:[],onRetry:C,itemsLoadState:D[L],itemTruncationType:A,renderListItem:_,renderCustomCallToAction:O})}return null})()]}))};export{lu as InputRangeSelect};
//# sourceMappingURL=index.js.map
