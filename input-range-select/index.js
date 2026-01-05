import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import a,{useState as i,useRef as o,useEffect as s,useLayoutEffect as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{css as g,keyframes as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as S,SquareFillIcon as w,SquareIcon as F,CrossIcon as $,ArrowRightIcon as x}from"@lifesg/react-icons";import{MagnifierIcon as B}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";import"@floating-ui/react";import{CrossIcon as k}from"@lifesg/react-icons/cross";function O(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var A=function(){this.__data__=[],this.size=0};var C=function(e,t){return e===t||e!=e&&t!=t},j=C;var P=function(e,t){for(var n=e.length;n--;)if(j(e[n][0],t))return n;return-1},I=P,H=Array.prototype.splice;var z=P;var V=P;var T=P;var N=A,R=function(e){var t=this.__data__,n=I(t,e);return!(n<0)&&(n==t.length-1?t.pop():H.call(t,n,1),--this.size,!0)},L=function(e){var t=this.__data__,n=z(t,e);return n<0?void 0:t[n][1]},M=function(e){return V(this.__data__,e)>-1},W=function(e,t){var n=this.__data__,r=T(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function q(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}q.prototype.clear=N,q.prototype.delete=R,q.prototype.get=L,q.prototype.has=M,q.prototype.set=W;var U=q,Q=U;var J=function(){this.__data__=new Q,this.size=0};var G=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var X=function(e){return this.__data__.get(e)};var Z=function(e){return this.__data__.has(e)},K="object"==typeof D&&D&&D.Object===Object&&D,Y=K,ee="object"==typeof self&&self&&self.Object===Object&&self,te=Y||ee||Function("return this")(),ne=te.Symbol,re=ne,ae=Object.prototype,ie=ae.hasOwnProperty,oe=ae.toString,se=re?re.toStringTag:void 0;var le=function(e){var t=ie.call(e,se),n=e[se];try{e[se]=void 0;var r=!0}catch(e){}var a=oe.call(e);return r&&(t?e[se]=n:delete e[se]),a},ce=Object.prototype.toString;var ue=le,de=function(e){return ce.call(e)},he=ne?ne.toStringTag:void 0;var pe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":he&&he in Object(e)?ue(e):de(e)};var fe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ge=pe,me=fe;var ye,be=function(e){if(!me(e))return!1;var t=ge(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ve=te["__core-js_shared__"],Se=(ye=/[^.]+$/.exec(ve&&ve.keys&&ve.keys.IE_PROTO||""))?"Symbol(src)_1."+ye:"";var we=function(e){return!!Se&&Se in e},Fe=Function.prototype.toString;var $e=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=be,Be=we,_e=fe,ke=$e,Oe=/^\[object .+?Constructor\]$/,De=Function.prototype,Ee=Object.prototype,Ae=De.toString,Ce=Ee.hasOwnProperty,je=RegExp("^"+Ae.call(Ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pe=function(e){return!(!_e(e)||Be(e))&&(xe(e)?je:Oe).test(ke(e))},Ie=function(e,t){return null==e?void 0:e[t]};var He=function(e,t){var n=Ie(e,t);return Pe(n)?n:void 0},ze=He(te,"Map"),Ve=He(Object,"create"),Te=Ve;var Ne=function(){this.__data__=Te?Te(null):{},this.size=0};var Re=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Le=Ve,Me=Object.prototype.hasOwnProperty;var We=function(e){var t=this.__data__;if(Le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Me.call(t,e)?t[e]:void 0},qe=Ve,Ue=Object.prototype.hasOwnProperty;var Qe=Ve;var Je=Ne,Ge=Re,Xe=We,Ze=function(e){var t=this.__data__;return qe?void 0!==t[e]:Ue.call(t,e)},Ke=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Qe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Je,Ye.prototype.delete=Ge,Ye.prototype.get=Xe,Ye.prototype.has=Ze,Ye.prototype.set=Ke;var et=Ye,tt=U,nt=ze;var rt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var at=function(e,t){var n=e.__data__;return rt(t)?n["string"==typeof t?"string":"hash"]:n.map},it=at;var ot=at;var st=at;var lt=at;var ct=function(){this.size=0,this.__data__={hash:new et,map:new(nt||tt),string:new et}},ut=function(e){var t=it(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return ot(this,e).get(e)},ht=function(e){return st(this,e).has(e)},pt=function(e,t){var n=lt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ft(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ft.prototype.clear=ct,ft.prototype.delete=ut,ft.prototype.get=dt,ft.prototype.has=ht,ft.prototype.set=pt;var gt=ft,mt=U,yt=ze,bt=gt;var vt=U,St=J,wt=G,Ft=X,$t=Z,xt=function(e,t){var n=this.__data__;if(n instanceof mt){var r=n.__data__;if(!yt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new bt(r)}return n.set(e,t),this.size=n.size,this};function Bt(e){var t=this.__data__=new vt(e);this.size=t.size}Bt.prototype.clear=St,Bt.prototype.delete=wt,Bt.prototype.get=Ft,Bt.prototype.has=$t,Bt.prototype.set=xt;var _t=Bt;var kt=gt,Ot=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Dt=function(e){return this.__data__.has(e)};function Et(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new kt;++t<n;)this.add(e[t])}Et.prototype.add=Et.prototype.push=Ot,Et.prototype.has=Dt;var At=Et,Ct=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},jt=function(e,t){return e.has(t)};var Pt=function(e,t,n,r,a,i){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new At:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var f=e[d],g=t[d];if(r)var m=o?r(g,f,d,t,e,i):r(f,g,d,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!Ct(t,(function(e,t){if(!jt(p,t)&&(f===e||a(f,e,n,r,i)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!a(f,g,n,r,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var It=te.Uint8Array,Ht=C,zt=Pt,Vt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Tt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Nt=ne?ne.prototype:void 0,Rt=Nt?Nt.valueOf:void 0;var Lt=function(e,t,n,r,a,i,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new It(e),new It(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ht(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Vt;case"[object Set]":var l=1&r;if(s||(s=Tt),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var u=zt(s(e),s(t),r,a,i,o);return o.delete(e),u;case"[object Symbol]":if(Rt)return Rt.call(e)==Rt.call(t)}return!1};var Mt=function(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e},Wt=Array.isArray,qt=Mt,Ut=Wt;var Qt=function(e,t,n){var r=t(e);return Ut(e)?r:qt(r,n(e))};var Jt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=0,i=[];++n<r;){var o=e[n];t(o,n,e)&&(i[a++]=o)}return i},Gt=function(){return[]},Xt=Object.prototype.propertyIsEnumerable,Zt=Object.getOwnPropertySymbols,Kt=Zt?function(e){return null==e?[]:(e=Object(e),Jt(Zt(e),(function(t){return Xt.call(e,t)})))}:Gt;var Yt=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var en=function(e){return null!=e&&"object"==typeof e},tn=pe,nn=en;var rn=function(e){return nn(e)&&"[object Arguments]"==tn(e)},an=en,on=Object.prototype,sn=on.hasOwnProperty,ln=on.propertyIsEnumerable,cn=rn(function(){return arguments}())?rn:function(e){return an(e)&&sn.call(e,"callee")&&!ln.call(e,"callee")},un={exports:{}};var dn=function(){return!1};!function(e,t){var n=te,r=dn,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(un,un.exports);var hn=un.exports,pn=/^(?:0|[1-9]\d*)$/;var fn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&pn.test(e))&&e>-1&&e%1==0&&e<t};var gn=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},mn=pe,yn=gn,bn=en,vn={};vn["[object Float32Array]"]=vn["[object Float64Array]"]=vn["[object Int8Array]"]=vn["[object Int16Array]"]=vn["[object Int32Array]"]=vn["[object Uint8Array]"]=vn["[object Uint8ClampedArray]"]=vn["[object Uint16Array]"]=vn["[object Uint32Array]"]=!0,vn["[object Arguments]"]=vn["[object Array]"]=vn["[object ArrayBuffer]"]=vn["[object Boolean]"]=vn["[object DataView]"]=vn["[object Date]"]=vn["[object Error]"]=vn["[object Function]"]=vn["[object Map]"]=vn["[object Number]"]=vn["[object Object]"]=vn["[object RegExp]"]=vn["[object Set]"]=vn["[object String]"]=vn["[object WeakMap]"]=!1;var Sn=function(e){return bn(e)&&yn(e.length)&&!!vn[mn(e)]};var wn=function(e){return function(t){return e(t)}},Fn={exports:{}};!function(e,t){var n=K,r=t&&!t.nodeType&&t,a=r&&e&&!e.nodeType&&e,i=a&&a.exports===r&&n.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(Fn,Fn.exports);var $n=Fn.exports,xn=Sn,Bn=wn,_n=$n&&$n.isTypedArray,kn=_n?Bn(_n):xn,On=Yt,Dn=cn,En=Wt,An=hn,Cn=fn,jn=kn,Pn=Object.prototype.hasOwnProperty;var In=function(e,t){var n=En(e),r=!n&&Dn(e),a=!n&&!r&&An(e),i=!n&&!r&&!a&&jn(e),o=n||r||a||i,s=o?On(e.length,String):[],l=s.length;for(var c in e)!t&&!Pn.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Cn(c,l))||s.push(c);return s},Hn=Object.prototype;var zn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Hn)};var Vn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Tn=zn,Nn=Vn,Rn=Object.prototype.hasOwnProperty;var Ln=be,Mn=gn;var Wn=function(e){return null!=e&&Mn(e.length)&&!Ln(e)},qn=In,Un=function(e){if(!Tn(e))return Nn(e);var t=[];for(var n in Object(e))Rn.call(e,n)&&"constructor"!=n&&t.push(n);return t},Qn=Wn;var Jn=function(e){return Qn(e)?qn(e):Un(e)},Gn=Qt,Xn=Kt,Zn=Jn;var Kn=function(e){return Gn(e,Zn,Xn)},Yn=Object.prototype.hasOwnProperty;var er=function(e,t,n,r,a,i){var o=1&n,s=Kn(e),l=s.length;if(l!=Kn(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:Yn.call(t,u)))return!1}var d=i.get(e),h=i.get(t);if(d&&h)return d==t&&h==e;var p=!0;i.set(e,t),i.set(t,e);for(var f=o;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=o?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===y?g===m||a(g,m,n,r,i):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return i.delete(e),i.delete(t),p},tr=He(te,"DataView"),nr=ze,rr=He(te,"Promise"),ar=He(te,"Set"),ir=He(te,"WeakMap"),or=pe,sr=$e,lr="[object Map]",cr="[object Promise]",ur="[object Set]",dr="[object WeakMap]",hr="[object DataView]",pr=sr(tr),fr=sr(nr),gr=sr(rr),mr=sr(ar),yr=sr(ir),br=or;(tr&&br(new tr(new ArrayBuffer(1)))!=hr||nr&&br(new nr)!=lr||rr&&br(rr.resolve())!=cr||ar&&br(new ar)!=ur||ir&&br(new ir)!=dr)&&(br=function(e){var t=or(e),n="[object Object]"==t?e.constructor:void 0,r=n?sr(n):"";if(r)switch(r){case pr:return hr;case fr:return lr;case gr:return cr;case mr:return ur;case yr:return dr}return t});var vr=_t,Sr=Pt,wr=Lt,Fr=er,$r=br,xr=Wt,Br=hn,_r=kn,kr="[object Arguments]",Or="[object Array]",Dr="[object Object]",Er=Object.prototype.hasOwnProperty;var Ar=function(e,t,n,r,a,i){var o=xr(e),s=xr(t),l=o?Or:$r(e),c=s?Or:$r(t),u=(l=l==kr?Dr:l)==Dr,d=(c=c==kr?Dr:c)==Dr,h=l==c;if(h&&Br(e)){if(!Br(t))return!1;o=!0,u=!1}if(h&&!u)return i||(i=new vr),o||_r(e)?Sr(e,t,n,r,a,i):wr(e,t,l,n,r,a,i);if(!(1&n)){var p=u&&Er.call(e,"__wrapped__"),f=d&&Er.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return i||(i=new vr),a(g,m,n,r,i)}}return!!h&&(i||(i=new vr),Fr(e,t,n,r,a,i))},Cr=en;var jr=function e(t,n,r,a,i){return t===n||(null==t||null==n||!Cr(t)&&!Cr(n)?t!=t&&n!=n:Ar(t,n,r,a,e,i))},Pr=_t,Ir=jr;var Hr=fe;var zr=function(e){return e==e&&!Hr(e)},Vr=zr,Tr=Jn;var Nr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},Rr=function(e,t,n,r){var a=n.length,i=a,o=!r;if(null==e)return!i;for(e=Object(e);a--;){var s=n[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=n[a])[0],c=e[l],u=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Pr;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Ir(u,c,3,r,d):h))return!1}}return!0},Lr=function(e){for(var t=Tr(e),n=t.length;n--;){var r=t[n],a=e[r];t[n]=[r,a,Vr(a)]}return t},Mr=Nr;var Wr=function(e){var t=Lr(e);return 1==t.length&&t[0][2]?Mr(t[0][0],t[0][1]):function(n){return n===e||Rr(n,e,t)}},qr=pe,Ur=en;var Qr=function(e){return"symbol"==typeof e||Ur(e)&&"[object Symbol]"==qr(e)},Jr=Wt,Gr=Qr,Xr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zr=/^\w*$/;var Kr=function(e,t){if(Jr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Gr(e))||(Zr.test(e)||!Xr.test(e)||null!=t&&e in Object(t))},Yr=gt;function ea(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(ea.Cache||Yr),n}ea.Cache=Yr;var ta=ea;var na=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ra=/\\(\\)?/g,aa=function(e){var t=ta(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(na,(function(e,n,r,a){t.push(r?a.replace(ra,"$1"):n||e)})),t}));var ia=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},oa=Wt,sa=Qr,la=ne?ne.prototype:void 0,ca=la?la.toString:void 0;var ua=function e(t){if("string"==typeof t)return t;if(oa(t))return ia(t,e)+"";if(sa(t))return ca?ca.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},da=ua;var ha=Wt,pa=Kr,fa=aa,ga=function(e){return null==e?"":da(e)};var ma=function(e,t){return ha(e)?e:pa(e,t)?[e]:fa(ga(e))},ya=Qr;var ba=function(e){if("string"==typeof e||ya(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},va=ma,Sa=ba;var wa=function(e,t){for(var n=0,r=(t=va(t,e)).length;null!=e&&n<r;)e=e[Sa(t[n++])];return n&&n==r?e:void 0},Fa=wa;var $a=function(e,t,n){var r=null==e?void 0:Fa(e,t);return void 0===r?n:r},xa=E($a);var Ba=ma,_a=cn,ka=Wt,Oa=fn,Da=gn,Ea=ba;var Aa=function(e,t){return null!=e&&t in Object(e)},Ca=function(e,t,n){for(var r=-1,a=(t=Ba(t,e)).length,i=!1;++r<a;){var o=Ea(t[r]);if(!(i=null!=e&&n(e,o)))break;e=e[o]}return i||++r!=a?i:!!(a=null==e?0:e.length)&&Da(a)&&Oa(o,a)&&(ka(e)||_a(e))};var ja=jr,Pa=$a,Ia=function(e,t){return null!=e&&Ca(e,t,Aa)},Ha=Kr,za=zr,Va=Nr,Ta=ba;var Na=wa;var Ra=function(e){return function(t){return null==t?void 0:t[e]}},La=function(e){return function(t){return Na(t,e)}},Ma=Kr,Wa=ba;var qa=Wr,Ua=function(e,t){return Ha(e)&&za(t)?Va(Ta(e),t):function(n){var r=Pa(n,e);return void 0===r&&r===t?Ia(n,e):ja(t,r,3)}},Qa=function(e){return e},Ja=Wt,Ga=function(e){return Ma(e)?Ra(Wa(e)):La(e)};var Xa=function(e){return"function"==typeof e?e:null==e?Qa:"object"==typeof e?Ja(e)?Ua(e[0],e[1]):qa(e):Ga(e)},Za=Xa,Ka=Wn,Ya=Jn;var ei=function(e){return function(t,n,r){var a=Object(t);if(!Ka(t)){var i=Za(n);t=Ya(t),n=function(e){return i(a[e],e,a)}}var o=e(t,n,r);return o>-1?a[i?t[o]:o]:void 0}};var ti=/\s/;var ni=function(e){for(var t=e.length;t--&&ti.test(e.charAt(t)););return t},ri=/^\s+/;var ai=function(e){return e?e.slice(0,ni(e)+1).replace(ri,""):e},ii=fe,oi=Qr,si=/^[-+]0x[0-9a-f]+$/i,li=/^0b[01]+$/i,ci=/^0o[0-7]+$/i,ui=parseInt;var di=function(e){if("number"==typeof e)return e;if(oi(e))return NaN;if(ii(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ii(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ai(e);var n=li.test(e);return n||ci.test(e)?ui(e.slice(2),n?2:8):si.test(e)?NaN:+e},hi=1/0;var pi=function(e){return e?(e=di(e))===hi||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var fi=function(e,t,n,r){for(var a=e.length,i=n+(r?1:-1);r?i--:++i<a;)if(t(e[i],i,e))return i;return-1},gi=Xa,mi=function(e){var t=pi(e),n=t%1;return t==t?n?t-n:t:0},yi=Math.max;var bi=E(ei((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var a=null==n?0:mi(n);return a<0&&(a=yi(r+a,0)),fi(e,gi(t),a)}))),vi=jr;var Si=E((function(e,t){return vi(e,t)})),wi=zi(),Fi=e=>ji(e,wi),$i=zi();Fi.write=e=>ji(e,$i);var xi=zi();Fi.onStart=e=>ji(e,xi);var Bi=zi();Fi.onFrame=e=>ji(e,Bi);var _i=zi();Fi.onFinish=e=>ji(e,_i);var ki=[];Fi.setTimeout=(e,t)=>{const n=Fi.now()+t,r=()=>{const e=ki.findIndex((e=>e.cancel==r));~e&&ki.splice(e,1),Ai-=~e?1:0},a={time:n,handler:e,cancel:r};return ki.splice(Oi(n),0,a),Ai+=1,Pi(),a};var Oi=e=>~(~ki.findIndex((t=>t.time>e))||~ki.length);Fi.cancel=e=>{xi.delete(e),Bi.delete(e),_i.delete(e),wi.delete(e),$i.delete(e)},Fi.sync=e=>{Ci=!0,Fi.batchedUpdates(e),Ci=!1},Fi.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Fi.onStart(n)}return r.handler=e,r.cancel=()=>{xi.delete(n),t=null},r};var Di="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Fi.use=e=>Di=e,Fi.now="undefined"!=typeof performance?()=>performance.now():Date.now,Fi.batchedUpdates=e=>e(),Fi.catch=console.error,Fi.frameLoop="always",Fi.advance=()=>{"demand"!==Fi.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Hi()};var Ei=-1,Ai=0,Ci=!1;function ji(e,t){Ci?(t.delete(e),e(0)):(t.add(e),Pi())}function Pi(){Ei<0&&(Ei=0,"demand"!==Fi.frameLoop&&Di(Ii))}function Ii(){~Ei&&(Di(Ii),Fi.batchedUpdates(Hi))}function Hi(){const e=Ei;Ei=Fi.now();const t=Oi(Ei);t&&(Vi(ki.splice(0,t),(e=>e.handler())),Ai-=t),Ai?(xi.flush(),wi.flush(e?Math.min(64,Ei-e):16.667),Bi.flush(),$i.flush(),_i.flush()):Ei=-1}function zi(){let e=new Set,t=e;return{add(n){Ai+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ai-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ai-=t.size,Vi(t,(t=>t(n)&&e.add(t))),Ai+=e.size,t=e)}}}function Vi(e,t){e.forEach((e=>{try{t(e)}catch(e){Fi.catch(e)}}))}var Ti=Object.defineProperty,Ni={};function Ri(){}((e,t)=>{for(var n in t)Ti(e,n,{get:t[n],enumerable:!0})})(Ni,{assign:()=>to,colors:()=>Ki,createStringInterpolator:()=>Ji,skipAnimation:()=>Yi,to:()=>Gi,willAdvance:()=>eo});var Li={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Mi(e,t){if(Li.arr(e)){if(!Li.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Wi=(e,t)=>e.forEach(t);function qi(e,t,n){if(Li.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Ui=e=>Li.und(e)?[]:Li.arr(e)?e:[e];function Qi(e,t){if(e.size){const n=Array.from(e);e.clear(),Wi(n,t)}}var Ji,Gi,Xi=(e,...t)=>Qi(e,(e=>e(...t))),Zi=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ki=null,Yi=!1,eo=Ri,to=e=>{e.to&&(Gi=e.to),e.now&&(Fi.now=e.now),void 0!==e.colors&&(Ki=e.colors),null!=e.skipAnimation&&(Yi=e.skipAnimation),e.createStringInterpolator&&(Ji=e.createStringInterpolator),e.requestAnimationFrame&&Fi.use(e.requestAnimationFrame),e.batchedUpdates&&(Fi.batchedUpdates=e.batchedUpdates),e.willAdvance&&(eo=e.willAdvance),e.frameLoop&&(Fi.frameLoop=e.frameLoop)},no=new Set,ro=[],ao=[],io=0,oo={get idle(){return!no.size&&!ro.length},start(e){io>e.priority?(no.add(e),Fi.onStart(so)):(lo(e),Fi(uo))},advance:uo,sort(e){if(io)Fi.onFrame((()=>oo.sort(e)));else{const t=ro.indexOf(e);~t&&(ro.splice(t,1),co(e))}},clear(){ro=[],no.clear()}};function so(){no.forEach(lo),no.clear(),Fi(uo)}function lo(e){ro.includes(e)||co(e)}function co(e){ro.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(ro,(t=>t.priority>e.priority)),0,e)}function uo(e){const t=ao;for(let n=0;n<ro.length;n++){const r=ro[n];io=r.priority,r.idle||(eo(r),r.advance(e),r.idle||t.push(r))}return io=0,(ao=ro).length=0,(ro=t).length>0}var ho="[-+]?\\d*\\.?\\d+",po=ho+"%";function fo(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var go=new RegExp("rgb"+fo(ho,ho,ho)),mo=new RegExp("rgba"+fo(ho,ho,ho,ho)),yo=new RegExp("hsl"+fo(ho,po,po)),bo=new RegExp("hsla"+fo(ho,po,po,ho)),vo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,So=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wo=/^#([0-9a-fA-F]{6})$/,Fo=/^#([0-9a-fA-F]{8})$/;function $o(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xo(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,a=2*n-r,i=$o(a,r,e+1/3),o=$o(a,r,e),s=$o(a,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Bo(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function _o(e){return(parseFloat(e)%360+360)%360/360}function ko(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Oo(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Do(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=wo.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ki&&void 0!==Ki[e]?Ki[e]:(t=go.exec(e))?(Bo(t[1])<<24|Bo(t[2])<<16|Bo(t[3])<<8|255)>>>0:(t=mo.exec(e))?(Bo(t[1])<<24|Bo(t[2])<<16|Bo(t[3])<<8|ko(t[4]))>>>0:(t=vo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Fo.exec(e))?parseInt(t[1],16)>>>0:(t=So.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=yo.exec(e))?(255|xo(_o(t[1]),Oo(t[2]),Oo(t[3])))>>>0:(t=bo.exec(e))?(xo(_o(t[1]),Oo(t[2]),Oo(t[3]))|ko(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Eo=(e,t,n)=>{if(Li.fun(e))return e;if(Li.arr(e))return Eo({range:e,output:t,extrapolate:n});if(Li.str(e.output[0]))return Ji(e);const r=e,a=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===a)return r;if(t===n)return e<=t?r:a;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=i(c),r===-1/0?c=-c:a===1/0?c+=r:c=c*(a-r)+r;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,r.map)}};var Ao=1.70158,Co=1.525*Ao,jo=Ao+1,Po=2*Math.PI/3,Io=2*Math.PI/4.5,Ho=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},zo={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>jo*e*e*e-Ao*e*e,easeOutBack:e=>1+jo*Math.pow(e-1,3)+Ao*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Co)/2:(Math.pow(2*e-2,2)*((Co+1)*(2*e-2)+Co)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Po),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Po)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Io)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Io)/2+1,easeInBounce:e=>1-Ho(1-e),easeOutBounce:Ho,easeInOutBounce:e=>e<.5?(1-Ho(1-2*e))/2:(1+Ho(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,a="end"===t?Math.floor(r):Math.ceil(r);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}},Vo=Symbol.for("FluidValue.get"),To=Symbol.for("FluidValue.observers"),No=e=>Boolean(e&&e[Vo]),Ro=e=>e&&e[Vo]?e[Vo]():e,Lo=e=>e[To]||null;function Mo(e,t){const n=e[To];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Wo=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");qo(this,e)}},qo=(e,t)=>Go(e,Vo,t);function Uo(e,t){if(e[Vo]){let n=e[To];n||Go(e,To,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Qo(e,t){const n=e[To];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[To]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Jo,Go=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Xo=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Zo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ko=new RegExp(`(${Xo.source})(%|[a-z]+)`,"i"),Yo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,es=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ts=e=>{const[t,n]=ns(e);if(!t||Zi())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&es.test(n)?ts(n):n||e},ns=e=>{const t=es.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},rs=(e,t,n,r,a)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,as=e=>{Jo||(Jo=Ki?new RegExp(`(${Object.keys(Ki).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ro(e).replace(es,ts).replace(Zo,Do).replace(Jo,Do))),n=t.map((e=>e.match(Xo).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Eo({...e,output:t})));return e=>{const n=!Ko.test(t[0])&&t.find((e=>Ko.test(e)))?.replace(Xo,"");let a=0;return t[0].replace(Xo,(()=>`${r[a++](e)}${n||""}`)).replace(Yo,rs)}},is="react-spring: ",os=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${is}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},ss=os(console.warn);var ls=os(console.warn);function cs(e){return Li.str(e)&&("#"==e[0]||/\d/.test(e)||!Zi()&&es.test(e)||e in(Ki||{}))}var us=Zi()?s:l;function ds(){const e=i()[1],t=(()=>{const e=o(!1);return us((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var hs=e=>s(e,ps),ps=[];function fs(e){const t=o();return s((()=>{t.current=e})),t.current}var gs=Symbol.for("Animated:node"),ms=e=>e&&e[gs],ys=(e,t)=>{return n=e,r=gs,a=t,Object.defineProperty(n,r,{value:a,writable:!0,configurable:!0});var n,r,a},bs=e=>e&&e[gs]&&e[gs].getPayload(),vs=class{constructor(){ys(this,this)}getPayload(){return this.payload||[]}},Ss=class extends vs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Li.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ss(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Li.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Li.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ws=class extends Ss{constructor(e){super(0),this._string=null,this._toString=Eo({output:[e,e]})}static create(e){return new ws(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Li.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Eo({output:[this.getValue(),e]})),this._value=0,super.reset()}},Fs={dependencies:null},$s=class extends vs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qi(this.source,((n,r)=>{var a;(a=n)&&a[gs]===a?t[r]=n.getValue(e):No(n)?t[r]=Ro(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Wi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Fs.dependencies&&No(e)&&Fs.dependencies.add(e);const t=bs(e);t&&Wi(t,(e=>this.add(e)))}},xs=class extends $s{constructor(e){super(e)}static create(e){return new xs(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Bs)),!0)}};function Bs(e){return(cs(e)?ws:Ss).create(e)}function _s(e){const t=ms(e);return t?t.constructor:Li.arr(e)?xs:cs(e)?ws:Ss}var ks=(e,t)=>{const n=!Li.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((a,i)=>{const l=o(null),c=n&&u((e=>{l.current=function(e,t){e&&(Li.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,h]=function(e,t){const n=new Set;Fs.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new $s(e),Fs.dependencies=null,[e,n]}(a,t),p=ds(),f=()=>{const e=l.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Os(f,h),m=o();us((()=>(m.current=g,Wi(h,(e=>Uo(e,g))),()=>{m.current&&(Wi(m.current.deps,(e=>Qo(e,m.current))),Fi.cancel(m.current.update))}))),s(f,[]),hs((()=>()=>{const e=m.current;Wi(e.deps,(t=>Qo(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,{...y,ref:c})}))},Os=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Fi.write(this.update)}};var Ds=Symbol.for("AnimatedComponent"),Es=e=>Li.str(e)?e:e&&Li.str(e.displayName)?e.displayName:Li.fun(e)&&e.name||null;function As(e,...t){return Li.fun(e)?e(...t):e}var Cs=(e,t)=>!0===e||!!(t&&e&&(Li.fun(e)?e(t):Ui(e).includes(t))),js=(e,t)=>Li.obj(e)?t&&e[t]:e,Ps=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Is=e=>e,Hs=(e,t=Is)=>{let n=zs;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const a of n){const n=t(e[a],a);Li.und(n)||(r[a]=n)}return r},zs=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Vs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ts(e){const t=function(e){const t={};let n=0;if(qi(e,((e,r)=>{Vs[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return qi(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Ns(e){return e=Ro(e),Li.arr(e)?e.map(Ns):cs(e)?Ni.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Rs(e){return Li.fun(e)||Li.arr(e)&&Li.obj(e[0])}var Ls={tension:170,friction:26,mass:1,damping:1,easing:zo.linear,clamp:!1},Ms=class{constructor(){this.velocity=0,Object.assign(this,Ls)}};function Ws(e,t){if(Li.und(t.decay)){const n=!Li.und(t.tension)||!Li.und(t.friction);!n&&Li.und(t.frequency)&&Li.und(t.damping)&&Li.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var qs=[],Us=class{constructor(){this.changed=!1,this.values=qs,this.toValues=null,this.fromValues=qs,this.config=new Ms,this.immediate=!1}};function Qs(e,{key:t,props:n,defaultProps:r,state:a,actions:i}){return new Promise(((o,s)=>{let l,c,u=Cs(n.cancel??r?.cancel,t);if(u)p();else{Li.und(n.pause)||(a.paused=Cs(n.pause,t));let e=r?.pause;!0!==e&&(e=a.paused||Cs(e,t)),l=As(n.delay||0,t),e?(a.resumeQueue.add(h),i.pause()):(i.resume(),h())}function d(){a.resumeQueue.add(h),a.timeouts.delete(c),c.cancel(),l=c.time-Fi.now()}function h(){l>0&&!Ni.skipAnimation?(a.delayed=!0,c=Fi.setTimeout(p,l),a.pauseQueue.add(d),a.timeouts.add(c)):p()}function p(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(d),a.timeouts.delete(c),e<=(a.cancelId||0)&&(u=!0);try{i.start({...n,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var Js=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Zs(e.get()):t.every((e=>e.noop))?Gs(e.get()):Xs(e.get(),t.every((e=>e.finished))),Gs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Xs=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Zs=e=>({value:e,cancelled:!0,finished:!1});function Ks(e,t,n,r){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=a,n.asyncTo=e;const c=Hs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=a<=(n.cancelId||0)&&Zs(r)||a!==n.asyncId&&Xs(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const i=new el,o=new tl;return(async()=>{if(Ni.skipAnimation)throw Ys(n),o.result=Xs(r,!1),d(o),o;p(i);const s=Li.obj(e)?{...e}:{...t,to:e};s.parentId=a,qi(c,((e,t)=>{Li.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Ni.skipAnimation)return Ys(n),Xs(r,!1);try{let t;t=Li.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Xs(r.get(),!0,!1)}catch(e){if(e instanceof el)g=e.result;else{if(!(e instanceof tl))throw e;g=e.result}}finally{a==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?l:void 0)}return Li.fun(o)&&Fi.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function Ys(e,t){Qi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var el=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},tl=class extends Error{constructor(){super("SkipAnimationSignal")}},nl=e=>e instanceof al,rl=1,al=class extends Wo{constructor(){super(...arguments),this.id=rl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ms(this);return e&&e.getValue()}to(...e){return Ni.to(this,e)}interpolate(...e){return ss(`${is}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ni.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Mo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||oo.sort(this),Mo(this,{type:"priority",parent:this,priority:e})}},il=Symbol.for("SpringPhase"),ol=e=>(1&e[il])>0,sl=e=>(2&e[il])>0,ll=e=>(4&e[il])>0,cl=(e,t)=>t?e[il]|=3:e[il]&=-3,ul=(e,t)=>t?e[il]|=4:e[il]&=-5,dl=class extends al{constructor(e,t){if(super(),this.animation=new Us,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Li.und(e)||!Li.und(t)){const n=Li.obj(e)?{...e}:{...t,from:e};Li.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(sl(this)||this._state.asyncTo)||ll(this)}get goal(){return Ro(this.animation.to)}get velocity(){const e=ms(this);return e instanceof Ss?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ol(this)}get isAnimating(){return sl(this)}get isPaused(){return ll(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:a}=r;const{config:i}=r,o=bs(r.to);!o&&No(r.to)&&(a=Ui(Ro(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ws?1:o?o[l].lastPosition:a[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],a=null!=s.v0?s.v0:s.v0=Li.arr(i.velocity)?i.velocity[l]:i.velocity;let o;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Li.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+a/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=a*r}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Li.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(o)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(o=-o*r,d=c));o+=(1e-6*-i.tension*(d-c)+.001*-i.friction*o)/i.mass*m,d+=o*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=ms(this),l=s.getValue();if(t){const e=Ro(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Fi.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(sl(this)){const{to:e,config:t}=this.animation;Fi.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Li.und(e)?(n=this.queue||[],this.queue=[]):n=[Li.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Js(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ys(this._state,e&&this._lastCallId),Fi.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Li.obj(n)?n[t]:n,(null==n||Rs(n))&&(n=void 0),r=Li.obj(r)?r[t]:r,null==r&&(r=void 0);const a={to:n,from:r};return ol(this)||(e.reverse&&([n,r]=[r,n]),r=Ro(r),Li.und(r)?ms(this)||this._set(n):this._set(r)),a}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Hs(e,((e,t)=>/^on/.test(t)?js(e,n):e))),bl(this,e,"onProps"),vl(this,"onProps",e,this);const a=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Qs(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{ll(this)||(ul(this,!0),Xi(i.pauseQueue),vl(this,"onPause",Xs(this,hl(this,this.animation.to)),this))},resume:()=>{ll(this)&&(ul(this,!1),sl(this)&&this._resume(),Xi(i.resumeQueue),vl(this,"onResume",Xs(this,hl(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=pl(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Zs(this));const r=!Li.und(e.to),a=!Li.und(e.from);if(r||a){if(!(t.callId>this._lastToId))return n(Zs(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!a||r||t.default&&!Li.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Mi(d,c);h&&(s.from=d),d=Ro(d);const p=!Mi(u,l);p&&this._focus(u);const f=Rs(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||a)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Ws(n={...n},t),t={...n,...t}),Ws(e,t),Object.assign(e,t);for(const t in Ls)null==e[t]&&(e[t]=Ls[t]);let{frequency:r,damping:a}=e;const{mass:i}=e;Li.und(r)||(r<.01&&(r=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*a*i/r)}(g,As(t.config,i),t.config!==o.config?As(o.config,i):void 0);let b=ms(this);if(!b||Li.und(u))return n(Xs(this,!0));const v=Li.und(t.reset)?a&&!t.default:!Li.und(d)&&Cs(t.reset,i),S=v?d:this.get(),w=Ns(u),F=Li.num(w)||Li.arr(w)||cs(w),$=!f&&(!F||Cs(o.immediate||t.immediate,i));if(p){const e=_s(u);if(e!==b.constructor){if(!$)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const x=b.constructor;let B=No(u),_=!1;if(!B){const e=v||!ol(this)&&h;(p||e)&&(_=Mi(Ns(S),w),B=!_),(Mi(s.immediate,$)||$)&&Mi(g.decay,m)&&Mi(g.velocity,y)||(B=!0)}if(_&&sl(this)&&(s.changed&&!v?B=!0:B||this._stop(l)),!f&&((B||No(l))&&(s.values=b.getPayload(),s.toValues=No(u)?null:x==ws?[1]:Ui(w)),s.immediate!=$&&(s.immediate=$,$||v||this._set(l)),B)){const{onRest:e}=s;Wi(yl,(e=>bl(this,t,e)));const r=Xs(this,hl(this,l));Xi(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Fi.batchedUpdates((()=>{s.changed=!v,e?.(r,this),v?As(o.onRest,r):s.onStart?.(r,this)}))}v&&this._set(S),f?n(Ks(t.to,t,this._state,this)):B?this._start():sl(this)&&!p?this._pendingCalls.add(n):n(Gs(S))}_focus(e){const t=this.animation;e!==t.to&&(Lo(this)&&this._detach(),t.to=e,Lo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;No(t)&&(Uo(t,this),nl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;No(e)&&Qo(e,this)}_set(e,t=!0){const n=Ro(e);if(!Li.und(n)){const e=ms(this);if(!e||!Mi(n,e.getValue())){const r=_s(n);e&&e.constructor==r?e.setValue(n):ys(this,r.create(n)),e&&Fi.batchedUpdates((()=>{this._onChange(n,t)}))}}return ms(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,vl(this,"onStart",Xs(this,hl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),As(this.animation.onChange,e,this)),As(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ms(this).reset(Ro(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),sl(this)||(cl(this,!0),ll(this)||this._resume())}_resume(){Ni.skipAnimation?this.finish():oo.start(this)}_stop(e,t){if(sl(this)){cl(this,!1);const n=this.animation;Wi(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Mo(this,{type:"idle",parent:this});const r=t?Zs(this.get()):Xs(this.get(),hl(this,e??n.to));Xi(this._pendingCalls,r),n.changed&&(n.changed=!1,vl(this,"onRest",r,this))}}};function hl(e,t){const n=Ns(t);return Mi(Ns(e.get()),n)}function pl(e,t=e.loop,n=e.to){const r=As(t);if(r){const a=!0!==r&&Ts(r),i=(a||e).reverse,o=!a||a.reset;return fl({...e,loop:t,default:!1,pause:void 0,to:!i||Rs(n)?n:void 0,from:o?e.from:void 0,reset:o,...a})}}function fl(e){const{to:t,from:n}=e=Ts(e),r=new Set;return Li.obj(t)&&ml(t,r),Li.obj(n)&&ml(n,r),e.keys=r.size?Array.from(r):null,e}function gl(e){const t=fl(e);return Li.und(t.default)&&(t.default=Hs(t)),t}function ml(e,t){qi(e,((e,n)=>null!=e&&t.add(n)))}var yl=["onStart","onRest","onChange","onPause","onResume"];function bl(e,t,n){e.animation[n]=t[n]!==Ps(t,n)?js(t[n],e.key):void 0}function vl(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Sl=["onStart","onChange","onRest"],wl=1,Fl=class{constructor(e,t){this.id=wl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Li.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(fl(e)),this}start(e){let{queue:t}=this;return e?t=Ui(e).map(fl):this.queue=[],this._flush?this._flush(this,t):(Dl(this,t),$l(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Wi(Ui(t),(t=>n[t].stop(!!e)))}else Ys(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Li.und(e))this.start({pause:!0});else{const t=this.springs;Wi(Ui(e),(e=>t[e].pause()))}return this}resume(e){if(Li.und(e))this.start({pause:!1});else{const t=this.springs;Wi(Ui(e),(e=>t[e].resume()))}return this}each(e){qi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,a=this._changed.size>0;(r&&!this._started||a&&!this._started)&&(this._started=!0,Qi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,o=a||i&&n.size?this.get():null;a&&t.size&&Qi(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Qi(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Fi.onFrame(this._onFrame)}};function $l(e,t){return Promise.all(t.map((t=>xl(e,t)))).then((t=>Js(e,t)))}async function xl(e,t,n){const{keys:r,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Li.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const u=Li.arr(a)||Li.fun(a)?a:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Wi(Sl,(n=>{const r=t[n];if(Li.fun(r)){const a=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=a.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):a.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Xi(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Ps(t,"cancel");(u||p&&d.asyncId)&&h.push(Qs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ri,resume:Ri,start(t,n){p?(Ys(d,e._lastAsyncId),n(Zs(e))):(t.onRest=s,n(Ks(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Js(e,await Promise.all(h));if(o&&f.finished&&(!n||!f.noop)){const n=pl(t,o,a);if(n)return Dl(e,[n]),xl(e,n,!0)}return l&&Fi.batchedUpdates((()=>l(f,e,e.item))),f}function Bl(e,t){const n={...e.springs};return t&&Wi(Ui(t),(e=>{Li.und(e.keys)&&(e=fl(e)),Li.obj(e.to)||(e={...e,to:void 0}),Ol(n,e,(e=>kl(e)))})),_l(e,n),n}function _l(e,t){qi(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Uo(t,e))}))}function kl(e,t){const n=new dl;return n.key=e,t&&Uo(n,t),n}function Ol(e,t,n){t.keys&&Wi(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Dl(e,t){Wi(t,(t=>{Ol(e.springs,t,(t=>kl(t,e)))}))}var El,Al,Cl=({children:e,...t})=>{const n=d(jl),a=t.pause||!!n.pause,l=t.immediate||!!n.immediate;t=function(e,t){const[n]=i((()=>({inputs:t,result:e()}))),r=o(),a=r.current;let l=a;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=n;return s((()=>{r.current=l,a==n&&(n.inputs=n.result=void 0)}),[l]),l.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=jl;return r.createElement(c,{value:t},e)},jl=(El=Cl,Al={},Object.assign(El,r.createContext(Al)),El.Provider._context=El,El.Consumer._context=El,El);Cl.Provider=jl.Provider,Cl.Consumer=jl.Consumer;var Pl=()=>{const e=[],t=function(t){ls(`${is}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Wi(e,((e,a)=>{if(Li.und(t))r.push(e.start());else{const i=n(t,e,a);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Wi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Wi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Wi(e,((e,n)=>{const r=Li.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Wi(e,((e,r)=>{if(Li.und(t))n.push(e.start());else{const a=this._getProps(t,e,r);a&&n.push(e.start(a))}})),n},t.stop=function(){return Wi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Wi(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Li.fun(e)?e(n,t):e};return t._getProps=n,t};function Il(e,t){const n=Li.fun(e),[[r],a]=function(e,t,n){const r=Li.fun(t)&&t;r&&!n&&(n=[]);const a=h((()=>r||3==arguments.length?Pl():void 0),[]),i=o(0),s=ds(),l=h((()=>({ctrls:[],queue:[],flush(e,t){const n=Bl(e,t);return i.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?$l(e,t):new Promise((r=>{_l(e,n),l.queue.push((()=>{r($l(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],p=fs(e)||0;function f(e,n){for(let a=e;a<n;a++){const e=c.current[a]||(c.current[a]=new Fl(null,l.flush)),n=r?r(a,e):t[a];n&&(u[a]=gl(n))}}h((()=>{Wi(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>Bl(e,u[t]))),m=d(Cl),y=fs(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);us((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Wi(e,(e=>e()))),Wi(c.current,((e,t)=>{a?.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),hs((()=>()=>{Wi(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return a?[v,a]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,a]:r}var Hl=class extends al{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Eo(...t);const n=this._get(),r=_s(n);ys(this,r.create(n))}advance(e){const t=this._get();Mi(t,this.get())||(ms(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Vl(this._active)&&Tl(this)}_get(){const e=Li.arr(this.source)?this.source.map(Ro):Ui(Ro(this.source));return this.calc(...e)}_start(){this.idle&&!Vl(this._active)&&(this.idle=!1,Wi(bs(this),(e=>{e.done=!1})),Ni.skipAnimation?(Fi.batchedUpdates((()=>this.advance())),Tl(this)):oo.start(this))}_attach(){let e=1;Wi(Ui(this.source),(t=>{No(t)&&Uo(t,this),nl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Wi(Ui(this.source),(e=>{No(e)&&Qo(e,this)})),this._active.clear(),Tl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ui(this.source).reduce(((e,t)=>Math.max(e,(nl(t)?t.priority:0)+1)),0))}};function zl(e){return!1!==e.idle}function Vl(e){return!e.size||Array.from(e).every(zl)}function Tl(e){e.idle||(e.idle=!0,Wi(bs(e),(e=>{e.done=!0})),Mo(e,{type:"idle",parent:e}))}Ni.assign({createStringInterpolator:as,to:(e,t)=>new Hl(e,t)});var Nl=/^--/;function Rl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Nl.test(e)||Ml.hasOwnProperty(e)&&Ml[e]?(""+t).trim():t+"px"}var Ll={};var Ml={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wl=["Webkit","Ms","Moz","O"];Ml=Object.keys(Ml).reduce(((e,t)=>(Wl.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ml);var ql=/^(matrix|translate|scale|rotate|skew)/,Ul=/^(translate)/,Ql=/^(rotate|skew)/,Jl=(e,t)=>Li.num(e)&&0!==e?e+t:e,Gl=(e,t)=>Li.arr(e)?e.every((e=>Gl(e,t))):Li.num(e)?e===t:parseFloat(e)===t,Xl=class extends $s{constructor({x:e,y:t,z:n,...r}){const a=[],i=[];(e||t||n)&&(a.push([e||0,t||0,n||0]),i.push((e=>[`translate3d(${e.map((e=>Jl(e,"px"))).join(",")})`,Gl(e,0)]))),qi(r,((e,t)=>{if("transform"===t)a.push([e||""]),i.push((e=>[e,""===e]));else if(ql.test(t)){if(delete r[t],Li.und(e))return;const n=Ul.test(t)?"px":Ql.test(t)?"deg":"";a.push(Ui(e)),i.push("rotate3d"===t?([e,t,r,a])=>[`rotate3d(${e},${t},${r},${Jl(a,n)})`,Gl(a,0)]:e=>[`${t}(${e.map((e=>Jl(e,n))).join(",")})`,Gl(e,t.startsWith("scale")?1:0)])}})),a.length&&(r.transform=new Zl(a,i)),super(r)}},Zl=class extends Wo{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Wi(this.inputs,((n,r)=>{const a=Ro(n[0]),[i,o]=this.transforms[r](Li.arr(a)?a:n.map(Ro));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Wi(this.inputs,(e=>Wi(e,(e=>No(e)&&Uo(e,this)))))}observerRemoved(e){0==e&&Wi(this.inputs,(e=>Wi(e,(e=>No(e)&&Qo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Mo(this,e)}};Ni.assign({batchedUpdates:p,createStringInterpolator:as,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Kl=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new $s(e),getComponentProps:r=e=>e}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=Es(e)||"Anonymous";return(e=Li.str(e)?i[e]||(i[e]=ks(e,a)):e[Ds]||(e[Ds]=ks(e,a))).displayName=`Animated(${t})`,e};return qi(e,((t,n)=>{Li.arr(e)&&(n=Es(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:r,style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:l,...c}=t,u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Ll[t]||(Ll[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in a)if(a.hasOwnProperty(t)){const n=Rl(t,a[t]);Nl.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==r&&(e.className=r),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Xl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Yl=Kl.animated;const ec=(e,t,n)=>t?xa(n,t)||xa(e,t):n||e,tc=(e,t)=>{const n=t||e.defaultValue;return xa(e.collections,n)};var nc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(nc||(nc={}));const rc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ac=e=>t=>{const n=t.theme,r=tc(rc,n[nc.colorScheme]);return n.options&&n.options.color?ec(r,e,n.options.color):ec(r,e)},ic={Brand:{1:ac("Brand.1"),2:ac("Brand.2"),3:ac("Brand.3"),4:ac("Brand.4"),5:ac("Brand.5"),6:ac("Brand.6")},Primary:ac("Primary"),PrimaryDark:ac("PrimaryDark"),Secondary:ac("Secondary"),Accent:{Light:{1:ac("Accent.Light.1"),2:ac("Accent.Light.2"),3:ac("Accent.Light.3"),4:ac("Accent.Light.4"),5:ac("Accent.Light.5"),6:ac("Accent.Light.6")},Dark:{1:ac("Accent.Dark.1"),2:ac("Accent.Dark.2"),3:ac("Accent.Dark.3")}},Neutral:{1:ac("Neutral.1"),2:ac("Neutral.2"),3:ac("Neutral.3"),4:ac("Neutral.4"),5:ac("Neutral.5"),6:ac("Neutral.6"),7:ac("Neutral.7"),8:ac("Neutral.8")},Validation:{Green:{Text:ac("Validation.Green.Text"),Icon:ac("Validation.Green.Icon"),Border:ac("Validation.Green.Border"),Background:ac("Validation.Green.Background")},Orange:{Text:ac("Validation.Orange.Text"),Icon:ac("Validation.Orange.Icon"),Border:ac("Validation.Orange.Border"),Background:ac("Validation.Orange.Background"),Badge:ac("Validation.Orange.Badge")},Red:{Text:ac("Validation.Red.Text"),Icon:ac("Validation.Red.Icon"),Border:ac("Validation.Red.Border"),Background:ac("Validation.Red.Background")},Blue:{Text:ac("Validation.Blue.Text"),Icon:ac("Validation.Blue.Icon"),Border:ac("Validation.Blue.Border"),Background:ac("Validation.Blue.Background")}},Shadow:{Accent:ac("Shadow.Accent"),Red:ac("Shadow.Red"),Elevation:ac("Shadow.Elevation")}},oc={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${ic.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${ic.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${ic.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${ic.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${ic.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${ic.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},sc=e=>t=>{var n;const r=t.theme,a=tc(oc,r[nc.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ec(a,e,r.options.designToken):ec(a,e)},lc={InputBoxShadow:sc("InputBoxShadow"),InputErrorBoxShadow:sc("InputErrorBoxShadow"),ElevationBoxShadow:sc("ElevationBoxShadow"),Table:{Header:sc("Table.Header"),Cell:{Primary:sc("Table.Cell.Primary"),Secondary:sc("Table.Cell.Secondary"),Selected:sc("Table.Cell.Selected"),Hover:sc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:sc("Button.Danger.BackgroundColor"),Hover:sc("Button.Danger.Hover"),Primary:sc("Button.Danger.Primary"),Border:sc("Button.Danger.Border")}}},cc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},uc=e=>Object.keys(cc).reduce(((t,n)=>{const r=cc[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),dc=uc("max-width"),hc=(uc("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),pc=m`
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
    border-color: ${e=>e.$color||ic.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${pc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,gc=f(fc)`
    animation-delay: -0.45s;
`,mc=f(fc)`
    animation-delay: -0.3s;
`,yc=f(fc)`
    animation-delay: -0.15s;
`,bc={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},vc={D1:{fontFamily:bc.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:bc.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:bc.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bc.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:bc.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:bc.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:bc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:bc.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:bc.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:bc.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:bc.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:bc.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:bc.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Sc={D1:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:bc.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:bc.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:bc.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:bc.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:bc.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},wc={collections:{base:vc,oneservice:{D1:{fontFamily:bc.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:bc.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:bc.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:bc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:bc.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:bc.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:bc.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:bc.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:bc.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:bc.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:bc.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:bc.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:bc.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:bc.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Sc},defaultValue:"base"},Fc=e=>t=>{const n=t.theme,r=tc(wc,n[nc.textStyleScheme]);return n.options&&n.options.textStyle?ec(r,e,n.options.textStyle):ec(r,e)},$c={D1:{fontFamily:Fc("D1.fontFamily"),fontSize:Fc("D1.fontSize"),fontWeight:Fc("D1.fontWeight"),lineHeight:Fc("D1.lineHeight"),letterSpacing:Fc("D1.letterSpacing"),fontVariant:Fc("D1.fontVariant")},D2:{fontFamily:Fc("D2.fontFamily"),fontSize:Fc("D2.fontSize"),fontWeight:Fc("D2.fontWeight"),lineHeight:Fc("D2.lineHeight"),letterSpacing:Fc("D2.letterSpacing"),fontVariant:Fc("D2.fontVariant")},D3:{fontFamily:Fc("D3.fontFamily"),fontSize:Fc("D3.fontSize"),fontWeight:Fc("D3.fontWeight"),lineHeight:Fc("D3.lineHeight"),letterSpacing:Fc("D3.letterSpacing"),fontVariant:Fc("D3.fontVariant")},D4:{fontFamily:Fc("D4.fontFamily"),fontSize:Fc("D4.fontSize"),fontWeight:Fc("D4.fontWeight"),lineHeight:Fc("D4.lineHeight"),letterSpacing:Fc("D4.letterSpacing"),fontVariant:Fc("D4.fontVariant")},DBody:{fontFamily:Fc("DBody.fontFamily"),fontSize:Fc("DBody.fontSize"),fontWeight:Fc("DBody.fontWeight"),lineHeight:Fc("DBody.lineHeight"),letterSpacing:Fc("DBody.letterSpacing"),fontVariant:Fc("DBody.fontVariant")},H1:{fontFamily:Fc("H1.fontFamily"),fontSize:Fc("H1.fontSize"),fontWeight:Fc("H1.fontWeight"),lineHeight:Fc("H1.lineHeight"),letterSpacing:Fc("H1.letterSpacing"),fontVariant:Fc("H1.fontVariant")},H2:{fontFamily:Fc("H2.fontFamily"),fontSize:Fc("H2.fontSize"),fontWeight:Fc("H2.fontWeight"),lineHeight:Fc("H2.lineHeight"),letterSpacing:Fc("H2.letterSpacing"),fontVariant:Fc("H2.fontVariant")},H3:{fontFamily:Fc("H3.fontFamily"),fontSize:Fc("H3.fontSize"),fontWeight:Fc("H3.fontWeight"),lineHeight:Fc("H3.lineHeight"),letterSpacing:Fc("H3.letterSpacing"),fontVariant:Fc("H3.fontVariant")},H4:{fontFamily:Fc("H4.fontFamily"),fontSize:Fc("H4.fontSize"),fontWeight:Fc("H4.fontWeight"),lineHeight:Fc("H4.lineHeight"),letterSpacing:Fc("H4.letterSpacing"),fontVariant:Fc("H4.fontVariant")},H5:{fontFamily:Fc("H5.fontFamily"),fontSize:Fc("H5.fontSize"),fontWeight:Fc("H5.fontWeight"),lineHeight:Fc("H5.lineHeight"),letterSpacing:Fc("H5.letterSpacing"),fontVariant:Fc("H5.fontVariant")},H6:{fontFamily:Fc("H6.fontFamily"),fontSize:Fc("H6.fontSize"),fontWeight:Fc("H6.fontWeight"),lineHeight:Fc("H6.lineHeight"),letterSpacing:Fc("H6.letterSpacing"),fontVariant:Fc("H6.fontVariant")},Body:{fontFamily:Fc("Body.fontFamily"),fontSize:Fc("Body.fontSize"),fontWeight:Fc("Body.fontWeight"),lineHeight:Fc("Body.lineHeight"),letterSpacing:Fc("Body.letterSpacing"),fontVariant:Fc("Body.fontVariant")},BodySmall:{fontFamily:Fc("BodySmall.fontFamily"),fontSize:Fc("BodySmall.fontSize"),fontWeight:Fc("BodySmall.fontWeight"),lineHeight:Fc("BodySmall.lineHeight"),letterSpacing:Fc("BodySmall.letterSpacing"),fontVariant:Fc("BodySmall.fontVariant")},XSmall:{fontFamily:Fc("XSmall.fontFamily"),fontSize:Fc("XSmall.fontSize"),fontWeight:Fc("XSmall.fontWeight"),lineHeight:Fc("XSmall.lineHeight"),letterSpacing:Fc("XSmall.letterSpacing"),fontVariant:Fc("XSmall.fontVariant")}},xc=[bc.OpenSans,bc.PlusJakartaSans],Bc=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},_c=(e,t)=>n=>{var r;const a=$c[e].fontFamily(n),i=$c[e].fontWeight(n),o=xc.find((e=>Object.values(e).includes(a)));return o?g`
                font-family: ${Bc(o,t)||Bc(o,i)||a};
                font-weight: normal !important;
            `:g`
            font-family: ${a};
            font-weight: ${null!==(r=kc(t)||i)&&void 0!==r?r:"normal"};
        `},kc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Oc=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Dc=(e,t,n=!1)=>r=>{const a=$c[e],i=a.fontSize(r);return g`
            ${_c(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${g`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Ec=(e=!1,t=!1,n=void 0)=>t?g`
            display: block;
            ${Oc(n)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Oc(n)}
        `;var Ac;!function(e){e.D1=f.h1`
        ${e=>g`
                ${Dc("D1",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>g`
                ${Dc("D2",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>g`
                ${Dc("D3",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>g`
                ${Dc("D4",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>g`
                ${Dc("DBody",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>g`
                ${Dc("H1",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>g`
                ${Dc("H2",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>g`
                ${Dc("H3",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>g`
                ${Dc("H4",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>g`
                ${Dc("H5",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>g`
                ${Dc("H6",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>g`
                ${Dc("Body",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>g`
                ${Dc("BodySmall",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>g`
                ${Dc("XSmall",e.weight,e.paragraph)}
                color: ${ic.Neutral[1]};
                ${Ec(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Pc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Pc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ac||(Ac={}));const Cc=f.a`
    ${e=>g`
            ${Dc(e.textStyle,e.weight)}
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
`,jc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Pc=n=>{var{external:r=!1,children:a}=n,i=O(n,["external","children"]);return e(Cc,Object.assign({},i,{children:[a,r&&t(jc,{})]}))};var Ic;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ic||(Ic={})),f.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${ic.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?lc.Button.Danger.Border:ic.Primary};

                    color: ${e.$buttonIsDanger?lc.Button.Danger.Primary:ic.Primary};
                `;case"light":return g`
                    background-color: ${ic.Neutral[8]};
                    border: 1px solid ${ic.Neutral[5]};

                    color: ${e.$buttonIsDanger?lc.Button.Danger.Primary:ic.Primary};
                `;case"disabled":return g`
                    background-color: ${ic.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ic.Neutral[3]};
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?lc.Button.Danger.Primary:ic.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?lc.Button.Danger.Hover:ic.Secondary};
                    }
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?lc.Button.Danger.BackgroundColor:ic.Primary};
                    border: 1px solid transparent;

                    ${dc.mobileL} {
                        width: 100%;
                    }

                    color: ${ic.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    ${Dc("H5","semibold")}

                    ${dc.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    ${Dc("H4","semibold")}

                    ${dc.mobileS} {
                        height: auto;
                    }
                `}
`;const Hc=f((({color:n,className:r,size:a=18})=>e(hc,Object.assign({className:r,$size:a,$color:n,"data-testid":"component-loading-spinner"},{children:[t(fc,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(gc,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(mc,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(yc,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?lc.Button.Danger.Primary:ic.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ic.Neutral[3](e);break;default:t=ic.Neutral[8](e)}return g`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var zc;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(zc||(zc={}));const Vc=m`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Tc=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return g`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Vc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?ic.Neutral[4](e):e.$unchecked?ic.Accent.Light[2](e):ic.Primary(e)};
    }
`,Nc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Rc=f(Yl.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Lc=f.ul`
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

    ${dc.mobileL} {
        max-height: 15rem;
    }
`,Mc=f.li`
    :hover,
    :focus,
    :active {
        background: ${ic.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return g`
                background: ${ic.Accent.Light[5]};
            `}}
`,Wc=f.button`
    display: flex;
    ${e=>e.$multiSelect?g`
                padding: 0.5rem 1rem;
            `:g`
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
        outline-color: ${ic.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,qc=g`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Uc=f.div`
    ${e=>Dc("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${ic.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&qc}
`,Qc=f.div`
    color: ${ic.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&qc}

    ${e=>"next-line"===e.$labelDisplayType?g`
                    ${Dc("BodySmall","semibold")}
                `:g`
                    ${Dc("Body","regular")}
                `}
`,Jc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return g`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return g`
                    ${Uc} {
                        display: inline;
                    }

                    ${Qc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Gc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Xc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Zc=f((n=>{var{className:r,checked:a,disabled:i,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=n,h=O(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=o();s((()=>{p.current.indeterminate=l}),[l]);const f=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Tc,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":a,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:f,$displaySize:d,$disabled:i,$unchecked:!(l||a||i)},{children:[t(Nc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:a,ref:p,tabIndex:-1,onChange:f,disabled:i},h)),l?t(v,{"data-testid":"indeterminate"}):a?t(S,{"data-testid":"checkmark"}):i?t(w,{"data-testid":"disabled-empty-checkbox"}):t(F,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Kc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Yc=f.button`
    ${e=>Dc("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ic.Primary(e)};\n\t\t`}
`,eu=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,tu=f.div`
    ${e=>Dc("small"===e.$variant?"BodySmall":"Body","regular")}
`,nu=f(b)`
    ${e=>{const t="small"===e.$variant?1:1.5;return g`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ic.Validation.Red.Icon};
`,ru=f.button`
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

        ${({$highlight:e})=>e&&g`
                background-color: ${ic.Neutral[7]};
            `}
    }
`,au=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=O(e,["children","focusHighlight","focusOutline","type"]);return t(ru,Object.assign({ref:n,$outline:i,$highlight:a,type:o},s,{children:r}))})),iu=g`
    border: 1px solid ${ic.Accent.Light[1]};
    box-shadow: ${lc.InputBoxShadow};
`,ou=g`
    border: 1px solid ${ic.Accent.Light[1]};
    box-shadow: none;
`,su=g`
    border: 1px solid ${ic.Neutral[5]};
    box-shadow: none;
`,lu=g`
    border: 1px solid ${ic.Validation.Red.Border};
    box-shadow: ${lc.InputErrorBoxShadow};
`,cu=f.div`
    border: 1px solid ${ic.Neutral[5]};
    border-radius: 4px;
    background: ${ic.Neutral[8]};

    :focus-within {
        ${iu}
    }
    ${e=>e.$focused&&iu}

    ${e=>e.$readOnly?g`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${ou}
                }
                ${e.$focused&&ou}
            `:e.$disabled?g`
                background: ${ic.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${su}
                }
                ${e.$focused&&su}
            `:e.$error?g`
                border: 1px solid ${ic.Validation.Red.Border};

                :focus-within {
                    ${lu}
                }
                ${e.$focused&&lu}
            `:void 0}
`;f(cu)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const uu=f.input`
    ${e=>Dc("small"===e.$variant?"BodySmall":"Body","regular")}
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
`;f.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${ic.Primary};
    }
`;const du=e=>"small"===e?1:1.375,hu=e=>g`
        height: ${du(e)}rem;
        width: ${du(e)}rem;
    `,pu=f.li`
    background: ${ic.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,fu=f(uu)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,gu=f(B)`
    ${e=>hu(e.$variant)}
    margin: 0 0.5rem;
    color: ${ic.Neutral[3]};
`,mu=f(au)`
    ${e=>hu(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${ic.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return g`
                svg {
                    ${hu(e.$variant)}
                }
            `}}
`,yu=c(((n,r)=>{const{onClear:a}=n,i=O(n,["onClear"]);return e(pu,{children:[t(gu,{$variant:n.variant}),t(fu,Object.assign({ref:r,$variant:n.variant},i)),i.value&&t(mu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:n.variant},{children:t($,{})}))]},"search")})),bu=r=>{var{listItems:a,listExtractor:l,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:S,onSelectAll:w,onRetry:F,itemsLoadState:$="success",itemTruncationType:x="end",itemMaxLines:B=2,labelDisplayType:_="inline",renderListItem:k,onBlur:D,hideNoResultsDisplay:E,renderCustomCallToAction:A,variant:C="default"}=r,j=O(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[P,I]=i(0),[H,z]=i(""),[V,T]=i(a),[N,R]=i(0),L=Il({height:N}),M=o(),W=o(),q=o([]),U=o(),Q=o(),J=o(P),G=o(V),X=e=>{J.current=e,I(e)},Z=e=>{G.current=e,T(e)};s((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),s((()=>{te(H)}),[H]),s((()=>{if(z(""),h){if(setTimeout((()=>{R(ne())})),b)return;U&&U.current?(U.current.focus(),X(-1)):q.current[P]&&q.current[P].focus()}else R(0)}),[h]),s((()=>{if(h){const e=ne();R(e)}}),[V,$]),s((()=>{Z(a),z(""),X(0)}),[a]);const K=e=>l?l(e):e.toString(),Y=e=>{if("inline"!==_)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return zc.getTextWidth(e,"1.125rem 'Open Sans'")>t*B},ee=e=>!!bi(S,(t=>Si(t,e))),te=e=>{if(""===e)Z(a);else if(m){const t=m(e);Z(t)}else{const t=a.filter((t=>{var n;const r=K(t),a="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),i="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),o=e.trim().toLowerCase();return a.includes(o)||i&&i.includes(o)}));Z(t)}},ne=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(Q.current?Q.current.getBoundingClientRect().height:0),re=e=>{if(M&&M.current.contains(e.target))switch(e.code){case"ArrowDown":if(J.current&&G.current&&J.current<G.current.length-1){const e=J.current+1;q.current[e].focus(),X(e)}break;case"ArrowUp":if(J.current>0){const e=J.current-1;q.current[e].focus(),X(J.current-1)}break;case"Escape":y&&y(!0)}},ae=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{var e;z(""),null===(e=U.current)||void 0===e||e.focus(),g&&g()},se=()=>{F&&F()},le=()=>{D&&D()},ce=r=>e(n,{children:[t(Gc,Object.assign({$maxLines:B,"aria-hidden":!0},{children:r})),t(Xc,Object.assign({$maxLines:B,"aria-hidden":!0},{children:r}))]}),ue=n=>{const r=K(n),a="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel,o=Y(a),s=i&&Y(i),l=o||s?"next-line":_;return e(Jc,Object.assign({$labelDisplayType:l},{children:[t(Uc,Object.assign({$truncateType:x,$maxLines:B,$variant:C,"aria-label":a},{children:"middle"===x&&o?ce(a):a})),i&&t(Qc,Object.assign({$truncateType:x,$maxLines:B,$labelDisplayType:_,"aria-label":i},{children:"middle"===x&&s?ce(i):i}))]}))},de=()=>{if(!F||F&&"success"===$)return V.map(((n,r)=>t(Mc,Object.assign({$checked:ee(n)&&!v},{children:e(Wc,Object.assign({$hasNextLineLabel:"next-line"===_&&V.length>0&&l&&"string"!=typeof l(V[0]),onClick:e=>{ae(e,n)},ref:e=>q.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:le,$variant:C},{children:[v&&t(Zc,{checked:ee(n),displaySize:"small"}),k?k(n,{selected:ee(n)}):ue(n)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(n,r))))},he=()=>{if(v&&V.length>0&&!H&&"success"===$)return t(Kc,{children:t(Yc,Object.assign({onClick:w,type:"button",$variant:C},{children:0===S.length?"Select all":"Clear all"}))},"selectAll")},pe=()=>{if(!E&&(H||!p)&&0===V.length&&"success"===$)return e(eu,Object.assign({"data-testid":"list-no-results"},{children:[t(nu,{"data-testid":"no-result-icon",$variant:C}),t(tu,Object.assign({$variant:C},{children:"No results found."}))]}),"noResults")},fe=()=>{if(F&&"loading"===$){const n="small"===C?16:24;return e(eu,Object.assign({"data-testid":"list-loading"},{children:[t(Hc,{$buttonStyle:"secondary",size:n}),t(tu,Object.assign({$variant:C},{children:"Loading..."}))]}),"loading")}},ge=()=>{if(F&&"fail"===$)return e(eu,Object.assign({"data-testid":"list-fail"},{children:[t(nu,{"data-testid":"load-error-icon",$variant:C}),t(tu,Object.assign({$variant:C},{children:"Failed to load."}))," ",t(Yc,Object.assign({onClick:se,type:"button",$variant:C},{children:"Try again."}))]}),"noResults")};return t(n,{children:e(Rc,Object.assign({style:L,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:M},{children:[(()=>{if(h)return e(Lc,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},j,{children:[(p||m)&&"success"===$?t(yu,{ref:U,onChange:ie,value:H,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:C}):null,he(),pe(),fe(),ge(),de()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:Q,"data-testid":"custom-cta"},{children:A(y,V)}))})()]}))})},vu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Su=e=>"small"===e?2.5:3,wu=f.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Su(e.$variant);return g`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Fu=g`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Su(e.$variant)}rem - 2px);
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
`,$u=f.button`
    ${Fu}
    cursor: pointer;
`;f.div`
    ${Fu}
`;const xu=m`
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
`,Bu=f.div`
    position: relative;
    border: 1px solid ${ic.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ic.Neutral[8]};

    :focus-within {
        border: 1px solid ${ic.Accent.Light[1]};
        box-shadow: ${lc.InputBoxShadow};
    }

    ${e=>e.expanded?g`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:g`
                animation: ${xu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?g`
                background: ${ic.Neutral[6](e)};

                ${$u} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ic.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?g`
                border: none;
                background: transparent !important;

                ${$u} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?g`
                border: 1px solid ${ic.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ic.Validation.Red.Border(e)};
                    box-shadow: ${lc.InputErrorBoxShadow};
                }
            `:void 0}
`;f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${vu};
    margin-left: 1rem;
`,f(_)`
    color: ${ic.Neutral[3]};
    ${e=>{let t=$c.Body.fontSize;return"small"===e.$variant&&(t=$c.BodySmall.fontSize),g`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const _u=f.div`
    height: 1px;
    background: ${ic.Neutral[5]};
    margin: 0 0.5rem;
`,ku=f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return g`
                color: ${ic.Neutral[3]};
            `}}
`,Ou=f.div`
    ${e=>Dc("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return g`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Du=f(Ou)`
    color: ${ic.Neutral[3]};
`,Eu=({children:e,show:n,error:r,disabled:a,testId:i,onBlur:l,readOnly:c,className:u,variant:d})=>{const h=o();return((e,t,n="window",r)=>{const a=o();s((()=>{a.current=t}),[t]),s((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>a.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("mousedown",(function(e){if(!a){if(h&&h.current.contains(e.target))return;n&&l()}}),"document"),t(wu,Object.assign({className:u,$variant:d},{children:t(Bu,Object.assign({ref:h,error:r&&!n,disabled:a,$readOnly:c,expanded:n,"data-testid":i},{children:e}))}))};var Au;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Au||(Au={})),f.div`
    display: flex;
    flex-direction: column;
`;const Cu=f.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return g`
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
`,ju=f.div`
    width: 100%; // Force next flex item to break to next line
`,Pu=f.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Iu=f(x)`
    color: ${ic.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Hu=f.div`
    position: absolute;
    background: ${e=>e.$error?ic.Validation.Red.Border(e):ic.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return g`
                    opacity: 1;
                `;case"end":return g`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return g`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return g`
                display: none;
            `}}
`,zu=({children:n,currentActive:r,error:a,className:i,wrap:o})=>{const[s,l]=n;return e(Cu,Object.assign({className:i,$wrap:o},{children:[t(Pu,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Iu,{}),o&&t(ju,{}),t(Pu,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Hu,{"data-id":"range-container-indicator",$position:r,$error:a,$wrap:o})]}))};f.input`
    ${Dc("Body","regular")}
    color: ${ic.Neutral[1]};

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
        color: ${ic.Neutral[3]};
    }

    ${e=>"number"===e.type?g`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?g`
                cursor: not-allowed;
            `:void 0}
`;const Vu=f.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${ic.Neutral[3]};
    background-color: transparent;
    border: none;
`,Tu=f(k)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;f.div`
    display: flex;
    width: 100%;
`;const Nu=f.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,Ru=f(Vu)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,Lu=f($u)`
    padding-right: 2.75rem;
`,Mu=n=>{var{selectedOptions:r,placeholders:a={from:"Select",to:"Select"},options:l,disabled:c,className:u,readOnly:d,error:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:y,valueExtractor:b,valueToStringFunction:v,listExtractor:S,displayValueExtractor:w,onSelectOption:F,listStyleWidth:$,onShowOptions:x,onHideOptions:B,onRetry:_,optionsLoadState:k={from:"success",to:"success"},optionTruncationType:D="middle",renderCustomSelectedOption:E,renderListItem:A,renderCustomCallToAction:C}=n,j=O(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[P,I]=i(),[H,z]=i(),V=o(),T={from:o(),to:o()},[N,R]=i("none");s((()=>{I(null==r?void 0:r.from),z(null==r?void 0:r.to)}),[r]);const L=e=>t=>{t.stopPropagation(),t.preventDefault(),c||d||R("from"===e?"from":"to"===e&&P?"to":"from")},M=e=>{const t="from"===e?P:H;return w?w(t):b?b(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===D){let n=0;return T[e]&&T[e].current&&(n=T[e].current.getBoundingClientRect().width),zc.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(t),n,120,8)}return t},q=e=>{!e&&B&&B(),e&&x&&x()},U=e=>{const n="from"===e?P:H;return n?E?E(n):t(Ou,Object.assign({truncateType:D},{children:W(e,M(e))})):t(Du,Object.assign({truncateType:D},{children:W(e,a[e])}))},Q=e=>t(ku,Object.assign({onClick:L(e),ref:T[e],$disabled:c},{children:U(e)}));return e(Eu,Object.assign({show:"none"!==N,"data-testid":j["data-testid"],error:h&&!("none"!==N),disabled:c,readOnly:d,testId:p,onBlur:()=>{q(!1),R("none"),P&&H||(z(void 0),I(void 0))},className:u},{children:[e(Nu,{children:[t(Lu,Object.assign({type:"button","data-testid":f||"selector",disabled:c,ref:V,onClick:L()},j,{children:e(zu,Object.assign({currentActive:(()=>{switch(N){case"from":return"start";case"to":return"end";case"none":return N}})()},{children:[Q("from"),Q("to")]}))})),"none"===N&&P&&H&&!d&&!c&&t(Ru,Object.assign({onClick:e=>{e.stopPropagation(),I(void 0),z(void 0),F&&F({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:t(Tu,{"aria-hidden":!0})}))]}),"none"!==N&&t(_u,{}),(()=>{if("none"===N)return null;const e=l[N];if(e&&e.length>0){const n="from"===N?P:H;return t(bu,{listItems:e,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(a=N)?I(n):z(n),q(!1),V&&V.current&&V.current.focus(),F&&F({[a]:n},r),void("from"===a?(z(void 0),R("to"),q(!0)):R("none"));var n,r,a},onDismiss:()=>(R("none"),q(!1),V&&V.current&&V.current.focus(),void(P&&H||(z(void 0),I(void 0)))),valueExtractor:b,listExtractor:S,listStyleWidth:$,visible:!0,enableSearch:g,searchPlaceholder:y,searchFunction:m,"data-testid":`${N}-dropdown-list`,selectedItems:n?[n]:[],onRetry:_,itemsLoadState:k[N],itemTruncationType:D,renderListItem:A,renderCustomCallToAction:C})}return null})()]}))};export{Mu as InputRangeSelect};
//# sourceMappingURL=index.js.map
