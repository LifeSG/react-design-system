import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import a,{useState as i,useRef as o,useEffect as s,useLayoutEffect as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as F,SquareIcon as $,CrossIcon as x}from"@lifesg/react-icons";import{MagnifierIcon as S}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as _}from"@lifesg/react-icons/chevron-down";function B(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O=function(e,t,r,n){for(var a=e.length,i=r+(n?1:-1);n?i--:++i<a;)if(t(e[i],i,e))return i;return-1};var E=function(){this.__data__=[],this.size=0};var A=function(e,t){return e===t||e!=e&&t!=t},j=A;var C=function(e,t){for(var r=e.length;r--;)if(j(e[r][0],t))return r;return-1},I=C,P=Array.prototype.splice;var z=C;var T=C;var H=C;var N=E,L=function(e){var t=this.__data__,r=I(t,e);return!(r<0)&&(r==t.length-1?t.pop():P.call(t,r,1),--this.size,!0)},R=function(e){var t=this.__data__,r=z(t,e);return r<0?void 0:t[r][1]},M=function(e){return T(this.__data__,e)>-1},V=function(e,t){var r=this.__data__,n=H(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function W(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}W.prototype.clear=N,W.prototype.delete=L,W.prototype.get=R,W.prototype.has=M,W.prototype.set=V;var q=W,U=q;var Q=function(){this.__data__=new U,this.size=0};var G=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var X=function(e){return this.__data__.get(e)};var Z=function(e){return this.__data__.has(e)},K="object"==typeof k&&k&&k.Object===Object&&k,Y=K,J="object"==typeof self&&self&&self.Object===Object&&self,ee=Y||J||Function("return this")(),te=ee.Symbol,re=te,ne=Object.prototype,ae=ne.hasOwnProperty,ie=ne.toString,oe=re?re.toStringTag:void 0;var se=function(e){var t=ae.call(e,oe),r=e[oe];try{e[oe]=void 0;var n=!0}catch(e){}var a=ie.call(e);return n&&(t?e[oe]=r:delete e[oe]),a},le=Object.prototype.toString;var ce=se,ue=function(e){return le.call(e)},de=te?te.toStringTag:void 0;var he=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?ce(e):ue(e)};var pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fe=he,ge=pe;var me,ye=function(e){if(!ge(e))return!1;var t=fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},be=ee["__core-js_shared__"],ve=(me=/[^.]+$/.exec(be&&be.keys&&be.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var we=function(e){return!!ve&&ve in e},Fe=Function.prototype.toString;var $e=function(e){if(null!=e){try{return Fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=ye,Se=we,_e=pe,Be=$e,ke=/^\[object .+?Constructor\]$/,De=Function.prototype,Oe=Object.prototype,Ee=De.toString,Ae=Oe.hasOwnProperty,je=RegExp("^"+Ee.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ce=function(e){return!(!_e(e)||Se(e))&&(xe(e)?je:ke).test(Be(e))},Ie=function(e,t){return null==e?void 0:e[t]};var Pe=function(e,t){var r=Ie(e,t);return Ce(r)?r:void 0},ze=Pe(ee,"Map"),Te=Pe(Object,"create"),He=Te;var Ne=function(){this.__data__=He?He(null):{},this.size=0};var Le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Re=Te,Me=Object.prototype.hasOwnProperty;var Ve=function(e){var t=this.__data__;if(Re){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Me.call(t,e)?t[e]:void 0},We=Te,qe=Object.prototype.hasOwnProperty;var Ue=Te;var Qe=Ne,Ge=Le,Xe=Ve,Ze=function(e){var t=this.__data__;return We?void 0!==t[e]:qe.call(t,e)},Ke=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Qe,Ye.prototype.delete=Ge,Ye.prototype.get=Xe,Ye.prototype.has=Ze,Ye.prototype.set=Ke;var Je=Ye,et=q,tt=ze;var rt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var r=e.__data__;return rt(t)?r["string"==typeof t?"string":"hash"]:r.map},at=nt;var it=nt;var ot=nt;var st=nt;var lt=function(){this.size=0,this.__data__={hash:new Je,map:new(tt||et),string:new Je}},ct=function(e){var t=at(this,e).delete(e);return this.size-=t?1:0,t},ut=function(e){return it(this,e).get(e)},dt=function(e){return ot(this,e).has(e)},ht=function(e,t){var r=st(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=lt,pt.prototype.delete=ct,pt.prototype.get=ut,pt.prototype.has=dt,pt.prototype.set=ht;var ft=pt,gt=q,mt=ze,yt=ft;var bt=q,vt=Q,wt=G,Ft=X,$t=Z,xt=function(e,t){var r=this.__data__;if(r instanceof gt){var n=r.__data__;if(!mt||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new yt(n)}return r.set(e,t),this.size=r.size,this};function St(e){var t=this.__data__=new bt(e);this.size=t.size}St.prototype.clear=vt,St.prototype.delete=wt,St.prototype.get=Ft,St.prototype.has=$t,St.prototype.set=xt;var _t=St;var Bt=ft,kt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Dt=function(e){return this.__data__.has(e)};function Ot(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Bt;++t<r;)this.add(e[t])}Ot.prototype.add=Ot.prototype.push=kt,Ot.prototype.has=Dt;var Et=Ot,At=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},jt=function(e,t){return e.has(t)};var Ct=function(e,t,r,n,a,i){var o=1&r,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=i.get(e),u=i.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&r?new Et:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var f=e[d],g=t[d];if(n)var m=o?n(g,f,d,t,e,i):n(f,g,d,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!At(t,(function(e,t){if(!jt(p,t)&&(f===e||a(f,e,r,n,i)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!a(f,g,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var It=ee.Uint8Array,Pt=A,zt=Ct,Tt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Ht=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Nt=te?te.prototype:void 0,Lt=Nt?Nt.valueOf:void 0;var Rt=function(e,t,r,n,a,i,o){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new It(e),new It(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Pt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Tt;case"[object Set]":var l=1&n;if(s||(s=Ht),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;n|=2,o.set(e,t);var u=zt(s(e),s(t),n,a,i,o);return o.delete(e),u;case"[object Symbol]":if(Lt)return Lt.call(e)==Lt.call(t)}return!1};var Mt=function(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e},Vt=Array.isArray,Wt=Mt,qt=Vt;var Ut=function(e,t,r){var n=t(e);return qt(e)?n:Wt(n,r(e))};var Qt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=0,i=[];++r<n;){var o=e[r];t(o,r,e)&&(i[a++]=o)}return i},Gt=function(){return[]},Xt=Object.prototype.propertyIsEnumerable,Zt=Object.getOwnPropertySymbols,Kt=Zt?function(e){return null==e?[]:(e=Object(e),Qt(Zt(e),(function(t){return Xt.call(e,t)})))}:Gt;var Yt=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var Jt=function(e){return null!=e&&"object"==typeof e},er=he,tr=Jt;var rr=function(e){return tr(e)&&"[object Arguments]"==er(e)},nr=Jt,ar=Object.prototype,ir=ar.hasOwnProperty,or=ar.propertyIsEnumerable,sr=rr(function(){return arguments}())?rr:function(e){return nr(e)&&ir.call(e,"callee")&&!or.call(e,"callee")},lr={exports:{}};var cr=function(){return!1};!function(e,t){var r=ee,n=cr,a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,o=i&&i.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||n;e.exports=s}(lr,lr.exports);var ur=lr.exports,dr=/^(?:0|[1-9]\d*)$/;var hr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&dr.test(e))&&e>-1&&e%1==0&&e<t};var pr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},fr=he,gr=pr,mr=Jt,yr={};yr["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0,yr["[object Arguments]"]=yr["[object Array]"]=yr["[object ArrayBuffer]"]=yr["[object Boolean]"]=yr["[object DataView]"]=yr["[object Date]"]=yr["[object Error]"]=yr["[object Function]"]=yr["[object Map]"]=yr["[object Number]"]=yr["[object Object]"]=yr["[object RegExp]"]=yr["[object Set]"]=yr["[object String]"]=yr["[object WeakMap]"]=!1;var br=function(e){return mr(e)&&gr(e.length)&&!!yr[fr(e)]};var vr=function(e){return function(t){return e(t)}},wr={exports:{}};!function(e,t){var r=K,n=t&&!t.nodeType&&t,a=n&&e&&!e.nodeType&&e,i=a&&a.exports===n&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=o}(wr,wr.exports);var Fr=wr.exports,$r=br,xr=vr,Sr=Fr&&Fr.isTypedArray,_r=Sr?xr(Sr):$r,Br=Yt,kr=sr,Dr=Vt,Or=ur,Er=hr,Ar=_r,jr=Object.prototype.hasOwnProperty;var Cr=function(e,t){var r=Dr(e),n=!r&&kr(e),a=!r&&!n&&Or(e),i=!r&&!n&&!a&&Ar(e),o=r||n||a||i,s=o?Br(e.length,String):[],l=s.length;for(var c in e)!t&&!jr.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Er(c,l))||s.push(c);return s},Ir=Object.prototype;var Pr=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ir)};var zr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Tr=Pr,Hr=zr,Nr=Object.prototype.hasOwnProperty;var Lr=ye,Rr=pr;var Mr=function(e){return null!=e&&Rr(e.length)&&!Lr(e)},Vr=Cr,Wr=function(e){if(!Tr(e))return Hr(e);var t=[];for(var r in Object(e))Nr.call(e,r)&&"constructor"!=r&&t.push(r);return t},qr=Mr;var Ur=function(e){return qr(e)?Vr(e):Wr(e)},Qr=Ut,Gr=Kt,Xr=Ur;var Zr=function(e){return Qr(e,Xr,Gr)},Kr=Object.prototype.hasOwnProperty;var Yr=function(e,t,r,n,a,i){var o=1&r,s=Zr(e),l=s.length;if(l!=Zr(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:Kr.call(t,u)))return!1}var d=i.get(e),h=i.get(t);if(d&&h)return d==t&&h==e;var p=!0;i.set(e,t),i.set(t,e);for(var f=o;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=o?n(m,g,u,t,e,i):n(g,m,u,e,t,i);if(!(void 0===y?g===m||a(g,m,r,n,i):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return i.delete(e),i.delete(t),p},Jr=Pe(ee,"DataView"),en=ze,tn=Pe(ee,"Promise"),rn=Pe(ee,"Set"),nn=Pe(ee,"WeakMap"),an=he,on=$e,sn="[object Map]",ln="[object Promise]",cn="[object Set]",un="[object WeakMap]",dn="[object DataView]",hn=on(Jr),pn=on(en),fn=on(tn),gn=on(rn),mn=on(nn),yn=an;(Jr&&yn(new Jr(new ArrayBuffer(1)))!=dn||en&&yn(new en)!=sn||tn&&yn(tn.resolve())!=ln||rn&&yn(new rn)!=cn||nn&&yn(new nn)!=un)&&(yn=function(e){var t=an(e),r="[object Object]"==t?e.constructor:void 0,n=r?on(r):"";if(n)switch(n){case hn:return dn;case pn:return sn;case fn:return ln;case gn:return cn;case mn:return un}return t});var bn=_t,vn=Ct,wn=Rt,Fn=Yr,$n=yn,xn=Vt,Sn=ur,_n=_r,Bn="[object Arguments]",kn="[object Array]",Dn="[object Object]",On=Object.prototype.hasOwnProperty;var En=function(e,t,r,n,a,i){var o=xn(e),s=xn(t),l=o?kn:$n(e),c=s?kn:$n(t),u=(l=l==Bn?Dn:l)==Dn,d=(c=c==Bn?Dn:c)==Dn,h=l==c;if(h&&Sn(e)){if(!Sn(t))return!1;o=!0,u=!1}if(h&&!u)return i||(i=new bn),o||_n(e)?vn(e,t,r,n,a,i):wn(e,t,l,r,n,a,i);if(!(1&r)){var p=u&&On.call(e,"__wrapped__"),f=d&&On.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return i||(i=new bn),a(g,m,r,n,i)}}return!!h&&(i||(i=new bn),Fn(e,t,r,n,a,i))},An=Jt;var jn=function e(t,r,n,a,i){return t===r||(null==t||null==r||!An(t)&&!An(r)?t!=t&&r!=r:En(t,r,n,a,e,i))},Cn=_t,In=jn;var Pn=pe;var zn=function(e){return e==e&&!Pn(e)},Tn=zn,Hn=Ur;var Nn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ln=function(e,t,r,n){var a=r.length,i=a,o=!n;if(null==e)return!i;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){var l=(s=r[a])[0],c=e[l],u=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Cn;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?In(u,c,3,n,d):h))return!1}}return!0},Rn=function(e){for(var t=Hn(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,Tn(a)]}return t},Mn=Nn;var Vn=function(e){var t=Rn(e);return 1==t.length&&t[0][2]?Mn(t[0][0],t[0][1]):function(r){return r===e||Ln(r,e,t)}},Wn=he,qn=Jt;var Un=function(e){return"symbol"==typeof e||qn(e)&&"[object Symbol]"==Wn(e)},Qn=Vt,Gn=Un,Xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/;var Kn=function(e,t){if(Qn(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Gn(e))||(Zn.test(e)||!Xn.test(e)||null!=t&&e in Object(t))},Yn=ft;function Jn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(Jn.Cache||Yn),r}Jn.Cache=Yn;var ea=Jn;var ta=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ra=/\\(\\)?/g,na=function(e){var t=ea(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ta,(function(e,r,n,a){t.push(n?a.replace(ra,"$1"):r||e)})),t}));var aa=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},ia=Vt,oa=Un,sa=te?te.prototype:void 0,la=sa?sa.toString:void 0;var ca=function e(t){if("string"==typeof t)return t;if(ia(t))return aa(t,e)+"";if(oa(t))return la?la.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},ua=ca;var da=Vt,ha=Kn,pa=na,fa=function(e){return null==e?"":ua(e)};var ga=function(e,t){return da(e)?e:ha(e,t)?[e]:pa(fa(e))},ma=Un;var ya=function(e){if("string"==typeof e||ma(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},ba=ga,va=ya;var wa=function(e,t){for(var r=0,n=(t=ba(t,e)).length;null!=e&&r<n;)e=e[va(t[r++])];return r&&r==n?e:void 0},Fa=wa;var $a=function(e,t,r){var n=null==e?void 0:Fa(e,t);return void 0===n?r:n},xa=D($a);var Sa=ga,_a=sr,Ba=Vt,ka=hr,Da=pr,Oa=ya;var Ea=function(e,t){return null!=e&&t in Object(e)},Aa=function(e,t,r){for(var n=-1,a=(t=Sa(t,e)).length,i=!1;++n<a;){var o=Oa(t[n]);if(!(i=null!=e&&r(e,o)))break;e=e[o]}return i||++n!=a?i:!!(a=null==e?0:e.length)&&Da(a)&&ka(o,a)&&(Ba(e)||_a(e))};var ja=jn,Ca=$a,Ia=function(e,t){return null!=e&&Aa(e,t,Ea)},Pa=Kn,za=zn,Ta=Nn,Ha=ya;var Na=wa;var La=function(e){return function(t){return null==t?void 0:t[e]}},Ra=function(e){return function(t){return Na(t,e)}},Ma=Kn,Va=ya;var Wa=Vn,qa=function(e,t){return Pa(e)&&za(t)?Ta(Ha(e),t):function(r){var n=Ca(r,e);return void 0===n&&n===t?Ia(r,e):ja(t,n,3)}},Ua=function(e){return e},Qa=Vt,Ga=function(e){return Ma(e)?La(Va(e)):Ra(e)};var Xa=function(e){return"function"==typeof e?e:null==e?Ua:"object"==typeof e?Qa(e)?qa(e[0],e[1]):Wa(e):Ga(e)},Za=/\s/;var Ka=function(e){for(var t=e.length;t--&&Za.test(e.charAt(t)););return t},Ya=/^\s+/;var Ja=function(e){return e?e.slice(0,Ka(e)+1).replace(Ya,""):e},ei=pe,ti=Un,ri=/^[-+]0x[0-9a-f]+$/i,ni=/^0b[01]+$/i,ai=/^0o[0-7]+$/i,ii=parseInt;var oi=function(e){if("number"==typeof e)return e;if(ti(e))return NaN;if(ei(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ei(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ja(e);var r=ni.test(e);return r||ai.test(e)?ii(e.slice(2),r?2:8):ri.test(e)?NaN:+e},si=1/0;var li=function(e){return e?(e=oi(e))===si||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var ci=O,ui=Xa,di=function(e){var t=li(e),r=t%1;return t==t?r?t-r:t:0},hi=Math.max;var pi=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var a=null==r?0:di(r);return a<0&&(a=hi(n+a,0)),ci(e,ui(t),a)},fi=D(pi),gi=Xa,mi=Mr,yi=Ur;var bi=D(function(e){return function(t,r,n){var a=Object(t);if(!mi(t)){var i=gi(r);t=yi(t),r=function(e){return i(a[e],e,a)}}var o=e(t,r,n);return o>-1?a[i?t[o]:o]:void 0}}(pi)),vi=jn;var wi=D((function(e,t){return vi(e,t)})),Fi=Object.defineProperty,$i={};((e,t)=>{for(var r in t)Fi(e,r,{get:t[r],enumerable:!0})})($i,{assign:()=>to,colors:()=>Yi,createStringInterpolator:()=>Gi,skipAnimation:()=>Ji,to:()=>Xi,willAdvance:()=>eo});var xi=Ni(),Si=e=>Pi(e,xi),_i=Ni();Si.write=e=>Pi(e,_i);var Bi=Ni();Si.onStart=e=>Pi(e,Bi);var ki=Ni();Si.onFrame=e=>Pi(e,ki);var Di=Ni();Si.onFinish=e=>Pi(e,Di);var Oi=[];Si.setTimeout=(e,t)=>{const r=Si.now()+t,n=()=>{const e=Oi.findIndex((e=>e.cancel==n));~e&&Oi.splice(e,1),Ci-=~e?1:0},a={time:r,handler:e,cancel:n};return Oi.splice(Ei(r),0,a),Ci+=1,zi(),a};var Ei=e=>~(~Oi.findIndex((t=>t.time>e))||~Oi.length);Si.cancel=e=>{Bi.delete(e),ki.delete(e),Di.delete(e),xi.delete(e),_i.delete(e)},Si.sync=e=>{Ii=!0,Si.batchedUpdates(e),Ii=!1},Si.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Si.onStart(r)}return n.handler=e,n.cancel=()=>{Bi.delete(r),t=null},n};var Ai="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Si.use=e=>Ai=e,Si.now="undefined"!=typeof performance?()=>performance.now():Date.now,Si.batchedUpdates=e=>e(),Si.catch=console.error,Si.frameLoop="always",Si.advance=()=>{"demand"!==Si.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Hi()};var ji=-1,Ci=0,Ii=!1;function Pi(e,t){Ii?(t.delete(e),e(0)):(t.add(e),zi())}function zi(){ji<0&&(ji=0,"demand"!==Si.frameLoop&&Ai(Ti))}function Ti(){~ji&&(Ai(Ti),Si.batchedUpdates(Hi))}function Hi(){const e=ji;ji=Si.now();const t=Ei(ji);t&&(Li(Oi.splice(0,t),(e=>e.handler())),Ci-=t),Ci?(Bi.flush(),xi.flush(e?Math.min(64,ji-e):16.667),ki.flush(),_i.flush(),Di.flush()):ji=-1}function Ni(){let e=new Set,t=e;return{add(r){Ci+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ci-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ci-=t.size,Li(t,(t=>t(r)&&e.add(t))),Ci+=e.size,t=e)}}}function Li(e,t){e.forEach((e=>{try{t(e)}catch(e){Si.catch(e)}}))}function Ri(){}var Mi={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Vi(e,t){if(Mi.arr(e)){if(!Mi.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Wi=(e,t)=>e.forEach(t);function qi(e,t,r){if(Mi.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Ui=e=>Mi.und(e)?[]:Mi.arr(e)?e:[e];function Qi(e,t){if(e.size){const r=Array.from(e);e.clear(),Wi(r,t)}}var Gi,Xi,Zi=(e,...t)=>Qi(e,(e=>e(...t))),Ki=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Yi=null,Ji=!1,eo=Ri,to=e=>{e.to&&(Xi=e.to),e.now&&(Si.now=e.now),void 0!==e.colors&&(Yi=e.colors),null!=e.skipAnimation&&(Ji=e.skipAnimation),e.createStringInterpolator&&(Gi=e.createStringInterpolator),e.requestAnimationFrame&&Si.use(e.requestAnimationFrame),e.batchedUpdates&&(Si.batchedUpdates=e.batchedUpdates),e.willAdvance&&(eo=e.willAdvance),e.frameLoop&&(Si.frameLoop=e.frameLoop)},ro=new Set,no=[],ao=[],io=0,oo={get idle(){return!ro.size&&!no.length},start(e){io>e.priority?(ro.add(e),Si.onStart(so)):(lo(e),Si(uo))},advance:uo,sort(e){if(io)Si.onFrame((()=>oo.sort(e)));else{const t=no.indexOf(e);~t&&(no.splice(t,1),co(e))}},clear(){no=[],ro.clear()}};function so(){ro.forEach(lo),ro.clear(),Si(uo)}function lo(e){no.includes(e)||co(e)}function co(e){no.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(no,(t=>t.priority>e.priority)),0,e)}function uo(e){const t=ao;for(let r=0;r<no.length;r++){const n=no[r];io=n.priority,n.idle||(eo(n),n.advance(e),n.idle||t.push(n))}return io=0,(ao=no).length=0,(no=t).length>0}var ho="[-+]?\\d*\\.?\\d+",po=ho+"%";function fo(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var go=new RegExp("rgb"+fo(ho,ho,ho)),mo=new RegExp("rgba"+fo(ho,ho,ho,ho)),yo=new RegExp("hsl"+fo(ho,po,po)),bo=new RegExp("hsla"+fo(ho,po,po,ho)),vo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wo=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Fo=/^#([0-9a-fA-F]{6})$/,$o=/^#([0-9a-fA-F]{8})$/;function xo(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function So(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=xo(a,n,e+1/3),o=xo(a,n,e),s=xo(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function _o(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Bo(e){return(parseFloat(e)%360+360)%360/360}function ko(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Do(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Oo(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Fo.exec(e))?parseInt(t[1]+"ff",16)>>>0:Yi&&void 0!==Yi[e]?Yi[e]:(t=go.exec(e))?(_o(t[1])<<24|_o(t[2])<<16|_o(t[3])<<8|255)>>>0:(t=mo.exec(e))?(_o(t[1])<<24|_o(t[2])<<16|_o(t[3])<<8|ko(t[4]))>>>0:(t=vo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=$o.exec(e))?parseInt(t[1],16)>>>0:(t=wo.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=yo.exec(e))?(255|So(Bo(t[1]),Do(t[2]),Do(t[3])))>>>0:(t=bo.exec(e))?(So(Bo(t[1]),Do(t[2]),Do(t[3]))|ko(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Eo=(e,t,r)=>{if(Mi.fun(e))return e;if(Mi.arr(e))return Eo({range:e,output:t,extrapolate:r});if(Mi.str(e.output[0]))return Gi(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=i(c),n===-1/0?c=-c:a===1/0?c+=n:c=c*(a-n)+n;return c}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};var Ao=1.70158,jo=1.525*Ao,Co=Ao+1,Io=2*Math.PI/3,Po=2*Math.PI/4.5,zo=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},To={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Co*e*e*e-Ao*e*e,easeOutBack:e=>1+Co*Math.pow(e-1,3)+Ao*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-jo)/2:(Math.pow(2*e-2,2)*((jo+1)*(2*e-2)+jo)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Io),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Io)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Po)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Po)/2+1,easeInBounce:e=>1-zo(1-e),easeOutBounce:zo,easeInOutBounce:e=>e<.5?(1-zo(1-2*e))/2:(1+zo(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(n):Math.ceil(n);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}},Ho=Symbol.for("FluidValue.get"),No=Symbol.for("FluidValue.observers"),Lo=e=>Boolean(e&&e[Ho]),Ro=e=>e&&e[Ho]?e[Ho]():e,Mo=e=>e[No]||null;function Vo(e,t){const r=e[No];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Wo=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");qo(this,e)}},qo=(e,t)=>Xo(e,Ho,t);function Uo(e,t){if(e[Ho]){let r=e[No];r||Xo(e,No,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Qo(e,t){const r=e[No];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[No]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Go,Xo=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Zo=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ko=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Yo=new RegExp(`(${Zo.source})(%|[a-z]+)`,"i"),Jo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,es=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ts=e=>{const[t,r]=rs(e);if(!t||Ki())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&es.test(r)?ts(r):r||e},rs=e=>{const t=es.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ns=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,as=e=>{Go||(Go=Yi?new RegExp(`(${Object.keys(Yi).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ro(e).replace(es,ts).replace(Ko,Oo).replace(Go,Oo))),r=t.map((e=>e.match(Zo).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Eo({...e,output:t})));return e=>{const r=!Yo.test(t[0])&&t.find((e=>Yo.test(e)))?.replace(Zo,"");let a=0;return t[0].replace(Zo,(()=>`${n[a++](e)}${r||""}`)).replace(Jo,ns)}},is="react-spring: ",os=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${is}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},ss=os(console.warn);var ls=os(console.warn);function cs(e){return Mi.str(e)&&("#"==e[0]||/\d/.test(e)||!Ki()&&es.test(e)||e in(Yi||{}))}var us=Ki()?s:l,ds=()=>{const e=o(!1);return us((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function hs(){const e=i()[1],t=ds();return()=>{t.current&&e(Math.random())}}var ps=e=>s(e,fs),fs=[];function gs(e){const t=o();return s((()=>{t.current=e})),t.current}var ms=Symbol.for("Animated:node"),ys=e=>e&&e[ms],bs=(e,t)=>{return r=e,n=ms,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},vs=e=>e&&e[ms]&&e[ms].getPayload(),ws=class{constructor(){bs(this,this)}getPayload(){return this.payload||[]}},Fs=class extends ws{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Mi.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Fs(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Mi.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Mi.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},$s=class extends Fs{constructor(e){super(0),this._string=null,this._toString=Eo({output:[e,e]})}static create(e){return new $s(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Mi.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Eo({output:[this.getValue(),e]})),this._value=0,super.reset()}},xs={dependencies:null},Ss=class extends ws{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qi(this.source,((r,n)=>{var a;(a=r)&&a[ms]===a?t[n]=r.getValue(e):Lo(r)?t[n]=Ro(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Wi(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qi(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){xs.dependencies&&Lo(e)&&xs.dependencies.add(e);const t=vs(e);t&&Wi(t,(e=>this.add(e)))}},_s=class extends Ss{constructor(e){super(e)}static create(e){return new _s(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Bs)),!0)}};function Bs(e){return(cs(e)?$s:Fs).create(e)}function ks(e){const t=ys(e);return t?t.constructor:Mi.arr(e)?_s:cs(e)?$s:Fs}var Ds=(e,t)=>{const r=!Mi.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((a,i)=>{const l=o(null),c=r&&u((e=>{l.current=function(e,t){e&&(Mi.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,h]=function(e,t){const r=new Set;xs.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ss(e),xs.dependencies=null,[e,r]}(a,t),p=hs(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Os(f,h),m=o();us((()=>(m.current=g,Wi(h,(e=>Uo(e,g))),()=>{m.current&&(Wi(m.current.deps,(e=>Qo(e,m.current))),Si.cancel(m.current.update))}))),s(f,[]),ps((()=>()=>{const e=m.current;Wi(e.deps,(t=>Qo(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,{...y,ref:c})}))},Os=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Si.write(this.update)}};var Es=Symbol.for("AnimatedComponent"),As=e=>Mi.str(e)?e:e&&Mi.str(e.displayName)?e.displayName:Mi.fun(e)&&e.name||null;function js(e,...t){return Mi.fun(e)?e(...t):e}var Cs=(e,t)=>!0===e||!!(t&&e&&(Mi.fun(e)?e(t):Ui(e).includes(t))),Is=(e,t)=>Mi.obj(e)?t&&e[t]:e,Ps=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,zs=e=>e,Ts=(e,t=zs)=>{let r=Hs;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const a of r){const r=t(e[a],a);Mi.und(r)||(n[a]=r)}return n},Hs=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ns={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ls(e){const t=function(e){const t={};let r=0;if(qi(e,((e,n)=>{Ns[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return qi(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Rs(e){return e=Ro(e),Mi.arr(e)?e.map(Rs):cs(e)?$i.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ms(e){return Mi.fun(e)||Mi.arr(e)&&Mi.obj(e[0])}var Vs={tension:170,friction:26,mass:1,damping:1,easing:To.linear,clamp:!1},Ws=class{constructor(){this.velocity=0,Object.assign(this,Vs)}};function qs(e,t){if(Mi.und(t.decay)){const r=!Mi.und(t.tension)||!Mi.und(t.friction);!r&&Mi.und(t.frequency)&&Mi.und(t.damping)&&Mi.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Us=[],Qs=class{constructor(){this.changed=!1,this.values=Us,this.toValues=null,this.fromValues=Us,this.config=new Ws,this.immediate=!1}};function Gs(e,{key:t,props:r,defaultProps:n,state:a,actions:i}){return new Promise(((o,s)=>{let l,c,u=Cs(r.cancel??n?.cancel,t);if(u)p();else{Mi.und(r.pause)||(a.paused=Cs(r.pause,t));let e=n?.pause;!0!==e&&(e=a.paused||Cs(e,t)),l=js(r.delay||0,t),e?(a.resumeQueue.add(h),i.pause()):(i.resume(),h())}function d(){a.resumeQueue.add(h),a.timeouts.delete(c),c.cancel(),l=c.time-Si.now()}function h(){l>0&&!$i.skipAnimation?(a.delayed=!0,c=Si.setTimeout(p,l),a.pauseQueue.add(d),a.timeouts.add(c)):p()}function p(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(d),a.timeouts.delete(c),e<=(a.cancelId||0)&&(u=!0);try{i.start({...r,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var Xs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ys(e.get()):t.every((e=>e.noop))?Zs(e.get()):Ks(e.get(),t.every((e=>e.finished))),Zs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ks=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ys=e=>({value:e,cancelled:!0,finished:!1});function Js(e,t,r,n){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const c=Ts(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=a<=(r.cancelId||0)&&Ys(n)||a!==r.asyncId&&Ks(n,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const i=new tl,o=new rl;return(async()=>{if($i.skipAnimation)throw el(r),o.result=Ks(n,!1),d(o),o;p(i);const s=Mi.obj(e)?{...e}:{...t,to:e};s.parentId=a,qi(c,((e,t)=>{Mi.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if($i.skipAnimation)return el(r),Ks(n,!1);try{let t;t=Mi.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Ks(n.get(),!0,!1)}catch(e){if(e instanceof tl)g=e.result;else{if(!(e instanceof rl))throw e;g=e.result}}finally{a==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return Mi.fun(o)&&Si.batchedUpdates((()=>{o(g,n,n.item)})),g})():l}function el(e,t){Qi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var tl=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},rl=class extends Error{constructor(){super("SkipAnimationSignal")}},nl=e=>e instanceof il,al=1,il=class extends Wo{constructor(){super(...arguments),this.id=al++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ys(this);return e&&e.getValue()}to(...e){return $i.to(this,e)}interpolate(...e){return ss(`${is}The "interpolate" function is deprecated in v9 (use "to" instead)`),$i.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Vo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||oo.sort(this),Vo(this,{type:"priority",parent:this,priority:e})}},ol=Symbol.for("SpringPhase"),sl=e=>(1&e[ol])>0,ll=e=>(2&e[ol])>0,cl=e=>(4&e[ol])>0,ul=(e,t)=>t?e[ol]|=3:e[ol]&=-3,dl=(e,t)=>t?e[ol]|=4:e[ol]&=-5,hl=class extends il{constructor(e,t){if(super(),this.animation=new Qs,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Mi.und(e)||!Mi.und(t)){const r=Mi.obj(e)?{...e}:{...t,from:e};Mi.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ll(this)||this._state.asyncTo)||cl(this)}get goal(){return Ro(this.animation.to)}get velocity(){const e=ys(this);return e instanceof Fs?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return sl(this)}get isAnimating(){return ll(this)}get isPaused(){return cl(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:a}=n;const{config:i}=n,o=vs(n.to);!o&&Lo(n.to)&&(a=Ui(Ro(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==$s?1:o?o[l].lastPosition:a[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],a=null!=s.v0?s.v0:s.v0=Mi.arr(i.velocity)?i.velocity[l]:i.velocity;let o;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Mi.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+a/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,o=a*n}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Mi.und(n),p=r==c?s.v0>0:r<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(o)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(o=-o*n,d=c));o+=(1e-6*-i.tension*(d-c)+.001*-i.friction*o)/i.mass*m,d+=o*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),o=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=ys(this),l=s.getValue();if(t){const e=Ro(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Si.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ll(this)){const{to:e,config:t}=this.animation;Si.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Mi.und(e)?(r=this.queue||[],this.queue=[]):r=[Mi.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Xs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),el(this._state,e&&this._lastCallId),Si.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Mi.obj(r)?r[t]:r,(null==r||Ms(r))&&(r=void 0),n=Mi.obj(n)?n[t]:n,null==n&&(n=void 0);const a={to:r,from:n};return sl(this)||(e.reverse&&([r,n]=[n,r]),n=Ro(n),Mi.und(n)?ys(this)||this._set(r):this._set(n)),a}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ts(e,((e,t)=>/^on/.test(t)?Is(e,r):e))),vl(this,e,"onProps"),wl(this,"onProps",e,this);const a=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return Gs(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{cl(this)||(dl(this,!0),Zi(i.pauseQueue),wl(this,"onPause",Ks(this,pl(this,this.animation.to)),this))},resume:()=>{cl(this)&&(dl(this,!1),ll(this)&&this._resume(),Zi(i.resumeQueue),wl(this,"onResume",Ks(this,pl(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=fl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ys(this));const n=!Mi.und(e.to),a=!Mi.und(e.from);if(n||a){if(!(t.callId>this._lastToId))return r(Ys(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!a||n||t.default&&!Mi.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Vi(d,c);h&&(s.from=d),d=Ro(d);const p=!Vi(u,l);p&&this._focus(u);const f=Ms(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||a)&&(g.velocity=0),t.config&&!f&&function(e,t,r){r&&(qs(r={...r},t),t={...r,...t}),qs(e,t),Object.assign(e,t);for(const t in Vs)null==e[t]&&(e[t]=Vs[t]);let{frequency:n,damping:a}=e;const{mass:i}=e;Mi.und(n)||(n<.01&&(n=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*a*i/n)}(g,js(t.config,i),t.config!==o.config?js(o.config,i):void 0);let b=ys(this);if(!b||Mi.und(u))return r(Ks(this,!0));const v=Mi.und(t.reset)?a&&!t.default:!Mi.und(d)&&Cs(t.reset,i),w=v?d:this.get(),F=Rs(u),$=Mi.num(F)||Mi.arr(F)||cs(F),x=!f&&(!$||Cs(o.immediate||t.immediate,i));if(p){const e=ks(u);if(e!==b.constructor){if(!x)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(F)}}const S=b.constructor;let _=Lo(u),B=!1;if(!_){const e=v||!sl(this)&&h;(p||e)&&(B=Vi(Rs(w),F),_=!B),(Vi(s.immediate,x)||x)&&Vi(g.decay,m)&&Vi(g.velocity,y)||(_=!0)}if(B&&ll(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!f&&((_||Lo(l))&&(s.values=b.getPayload(),s.toValues=Lo(u)?null:S==$s?[1]:Ui(F)),s.immediate!=x&&(s.immediate=x,x||v||this._set(l)),_)){const{onRest:e}=s;Wi(bl,(e=>vl(this,t,e)));const n=Ks(this,pl(this,l));Zi(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Si.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?js(o.onRest,n):s.onStart?.(n,this)}))}v&&this._set(w),f?r(Js(t.to,t,this._state,this)):_?this._start():ll(this)&&!p?this._pendingCalls.add(r):r(Zs(w))}_focus(e){const t=this.animation;e!==t.to&&(Mo(this)&&this._detach(),t.to=e,Mo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Lo(t)&&(Uo(t,this),nl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Lo(e)&&Qo(e,this)}_set(e,t=!0){const r=Ro(e);if(!Mi.und(r)){const e=ys(this);if(!e||!Vi(r,e.getValue())){const n=ks(r);e&&e.constructor==n?e.setValue(r):bs(this,n.create(r)),e&&Si.batchedUpdates((()=>{this._onChange(r,t)}))}}return ys(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,wl(this,"onStart",Ks(this,pl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),js(this.animation.onChange,e,this)),js(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ys(this).reset(Ro(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ll(this)||(ul(this,!0),cl(this)||this._resume())}_resume(){$i.skipAnimation?this.finish():oo.start(this)}_stop(e,t){if(ll(this)){ul(this,!1);const r=this.animation;Wi(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Vo(this,{type:"idle",parent:this});const n=t?Ys(this.get()):Ks(this.get(),pl(this,e??r.to));Zi(this._pendingCalls,n),r.changed&&(r.changed=!1,wl(this,"onRest",n,this))}}};function pl(e,t){const r=Rs(t);return Vi(Rs(e.get()),r)}function fl(e,t=e.loop,r=e.to){const n=js(t);if(n){const a=!0!==n&&Ls(n),i=(a||e).reverse,o=!a||a.reset;return gl({...e,loop:t,default:!1,pause:void 0,to:!i||Ms(r)?r:void 0,from:o?e.from:void 0,reset:o,...a})}}function gl(e){const{to:t,from:r}=e=Ls(e),n=new Set;return Mi.obj(t)&&yl(t,n),Mi.obj(r)&&yl(r,n),e.keys=n.size?Array.from(n):null,e}function ml(e){const t=gl(e);return Mi.und(t.default)&&(t.default=Ts(t)),t}function yl(e,t){qi(e,((e,r)=>null!=e&&t.add(r)))}var bl=["onStart","onRest","onChange","onPause","onResume"];function vl(e,t,r){e.animation[r]=t[r]!==Ps(t,r)?Is(t[r],e.key):void 0}function wl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Fl=["onStart","onChange","onRest"],$l=1,xl=class{constructor(e,t){this.id=$l++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Mi.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(gl(e)),this}start(e){let{queue:t}=this;return e?t=Ui(e).map(gl):this.queue=[],this._flush?this._flush(this,t):(El(this,t),Sl(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Wi(Ui(t),(t=>r[t].stop(!!e)))}else el(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Mi.und(e))this.start({pause:!0});else{const t=this.springs;Wi(Ui(e),(e=>t[e].pause()))}return this}resume(e){if(Mi.und(e))this.start({pause:!1});else{const t=this.springs;Wi(Ui(e),(e=>t[e].resume()))}return this}each(e){qi(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,a=this._changed.size>0;(n&&!this._started||a&&!this._started)&&(this._started=!0,Qi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,o=a||i&&r.size?this.get():null;a&&t.size&&Qi(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,Qi(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Si.onFrame(this._onFrame)}};function Sl(e,t){return Promise.all(t.map((t=>_l(e,t)))).then((t=>Xs(e,t)))}async function _l(e,t,r){const{keys:n,to:a,from:i,loop:o,onRest:s,onResolve:l}=t,c=Mi.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const u=Mi.arr(a)||Mi.fun(a)?a:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Wi(Fl,(r=>{const n=t[r];if(Mi.fun(n)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Zi(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Ps(t,"cancel");(u||p&&d.asyncId)&&h.push(Gs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ri,resume:Ri,start(t,r){p?(el(d,e._lastAsyncId),r(Ys(e))):(t.onRest=s,r(Js(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Xs(e,await Promise.all(h));if(o&&f.finished&&(!r||!f.noop)){const r=fl(t,o,a);if(r)return El(e,[r]),_l(e,r,!0)}return l&&Si.batchedUpdates((()=>l(f,e,e.item))),f}function Bl(e,t){const r={...e.springs};return t&&Wi(Ui(t),(e=>{Mi.und(e.keys)&&(e=gl(e)),Mi.obj(e.to)||(e={...e,to:void 0}),Ol(r,e,(e=>Dl(e)))})),kl(e,r),r}function kl(e,t){qi(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Uo(t,e))}))}function Dl(e,t){const r=new hl;return r.key=e,t&&Uo(r,t),r}function Ol(e,t,r){t.keys&&Wi(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function El(e,t){Wi(t,(t=>{Ol(e.springs,t,(t=>Dl(t,e)))}))}var Al,jl,Cl=({children:e,...t})=>{const r=d(Il),a=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=i((()=>({inputs:t,result:e()}))),n=o(),a=n.current;let l=a;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,a==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=Il;return n.createElement(c,{value:t},e)},Il=(Al=Cl,jl={},Object.assign(Al,n.createContext(jl)),Al.Provider._context=Al,Al.Consumer._context=Al,Al);Cl.Provider=Il.Provider,Cl.Consumer=Il.Consumer;var Pl=()=>{const e=[],t=function(t){ls(`${is}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Wi(e,((e,a)=>{if(Mi.und(t))n.push(e.start());else{const i=r(t,e,a);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Wi(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Wi(e,(e=>e.resume(...arguments))),this},t.set=function(t){Wi(e,((e,r)=>{const n=Mi.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Wi(e,((e,n)=>{if(Mi.und(t))r.push(e.start());else{const a=this._getProps(t,e,n);a&&r.push(e.start(a))}})),r},t.stop=function(){return Wi(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Wi(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Mi.fun(e)?e(r,t):e};return t._getProps=r,t};function zl(e,t){const r=Mi.fun(e),[[n],a]=function(e,t,r){const n=Mi.fun(t)&&t;n&&!r&&(r=[]);const a=h((()=>n||3==arguments.length?Pl():void 0),[]),i=o(0),s=hs(),l=h((()=>({ctrls:[],queue:[],flush(e,t){const r=Bl(e,t);return i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Sl(e,t):new Promise((n=>{kl(e,r),l.queue.push((()=>{n(Sl(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],p=gs(e)||0;function f(e,r){for(let a=e;a<r;a++){const e=c.current[a]||(c.current[a]=new xl(null,l.flush)),r=n?n(a,e):t[a];r&&(u[a]=ml(r))}}h((()=>{Wi(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),r);const g=c.current.map(((e,t)=>Bl(e,u[t]))),m=d(Cl),y=gs(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);us((()=>{i.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Wi(e,(e=>e()))),Wi(c.current,((e,t)=>{a?.add(e),b&&e.start({default:m});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ps((()=>()=>{Wi(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return a?[v,a]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}var Tl=class extends il{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Eo(...t);const r=this._get(),n=ks(r);bs(this,n.create(r))}advance(e){const t=this._get();Vi(t,this.get())||(ys(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Nl(this._active)&&Ll(this)}_get(){const e=Mi.arr(this.source)?this.source.map(Ro):Ui(Ro(this.source));return this.calc(...e)}_start(){this.idle&&!Nl(this._active)&&(this.idle=!1,Wi(vs(this),(e=>{e.done=!1})),$i.skipAnimation?(Si.batchedUpdates((()=>this.advance())),Ll(this)):oo.start(this))}_attach(){let e=1;Wi(Ui(this.source),(t=>{Lo(t)&&Uo(t,this),nl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Wi(Ui(this.source),(e=>{Lo(e)&&Qo(e,this)})),this._active.clear(),Ll(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Ui(this.source).reduce(((e,t)=>Math.max(e,(nl(t)?t.priority:0)+1)),0))}};function Hl(e){return!1!==e.idle}function Nl(e){return!e.size||Array.from(e).every(Hl)}function Ll(e){e.idle||(e.idle=!0,Wi(vs(e),(e=>{e.done=!0})),Vo(e,{type:"idle",parent:e}))}$i.assign({createStringInterpolator:as,to:(e,t)=>new Tl(e,t)});var Rl=/^--/;function Ml(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Rl.test(e)||Wl.hasOwnProperty(e)&&Wl[e]?(""+t).trim():t+"px"}var Vl={};var Wl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ql=["Webkit","Ms","Moz","O"];Wl=Object.keys(Wl).reduce(((e,t)=>(ql.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Wl);var Ul=/^(matrix|translate|scale|rotate|skew)/,Ql=/^(translate)/,Gl=/^(rotate|skew)/,Xl=(e,t)=>Mi.num(e)&&0!==e?e+t:e,Zl=(e,t)=>Mi.arr(e)?e.every((e=>Zl(e,t))):Mi.num(e)?e===t:parseFloat(e)===t,Kl=class extends Ss{constructor({x:e,y:t,z:r,...n}){const a=[],i=[];(e||t||r)&&(a.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>Xl(e,"px"))).join(",")})`,Zl(e,0)]))),qi(n,((e,t)=>{if("transform"===t)a.push([e||""]),i.push((e=>[e,""===e]));else if(Ul.test(t)){if(delete n[t],Mi.und(e))return;const r=Ql.test(t)?"px":Gl.test(t)?"deg":"";a.push(Ui(e)),i.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${Xl(a,r)})`,Zl(a,0)]:e=>[`${t}(${e.map((e=>Xl(e,r))).join(",")})`,Zl(e,t.startsWith("scale")?1:0)])}})),a.length&&(n.transform=new Yl(a,i)),super(n)}},Yl=class extends Wo{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Wi(this.inputs,((r,n)=>{const a=Ro(r[0]),[i,o]=this.transforms[n](Mi.arr(a)?a:r.map(Ro));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Wi(this.inputs,(e=>Wi(e,(e=>Lo(e)&&Uo(e,this)))))}observerRemoved(e){0==e&&Wi(this.inputs,(e=>Wi(e,(e=>Lo(e)&&Qo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Vo(this,e)}};$i.assign({batchedUpdates:p,createStringInterpolator:as,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Jl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Ss(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=As(e)||"Anonymous";return(e=Mi.str(e)?i[e]||(i[e]=Ds(e,a)):e[Es]||(e[Es]=Ds(e,a))).displayName=`Animated(${t})`,e};return qi(e,((t,r)=>{Mi.arr(e)&&(r=As(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:a,scrollTop:i,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Vl[t]||(Vl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const t in n)if(n.hasOwnProperty(t)){const r=Ml(t,n[t]);Rl.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==i&&(e.scrollTop=i),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Kl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),ec=Jl.animated;const tc=(e,t,r)=>t?xa(r,t)||xa(e,t):r||e,rc=(e,t)=>{const r=t||e.defaultValue;return xa(e.collections,r)};var nc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(nc||(nc={}));const ac={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ic=e=>t=>{const r=t.theme,n=rc(ac,r[nc.colorScheme]);return r.options&&r.options.color?tc(n,e,r.options.color):tc(n,e)},oc={Brand:{1:ic("Brand.1"),2:ic("Brand.2"),3:ic("Brand.3"),4:ic("Brand.4"),5:ic("Brand.5"),6:ic("Brand.6")},Primary:ic("Primary"),PrimaryDark:ic("PrimaryDark"),Secondary:ic("Secondary"),Accent:{Light:{1:ic("Accent.Light.1"),2:ic("Accent.Light.2"),3:ic("Accent.Light.3"),4:ic("Accent.Light.4"),5:ic("Accent.Light.5"),6:ic("Accent.Light.6")},Dark:{1:ic("Accent.Dark.1"),2:ic("Accent.Dark.2"),3:ic("Accent.Dark.3")}},Neutral:{1:ic("Neutral.1"),2:ic("Neutral.2"),3:ic("Neutral.3"),4:ic("Neutral.4"),5:ic("Neutral.5"),6:ic("Neutral.6"),7:ic("Neutral.7"),8:ic("Neutral.8")},Validation:{Green:{Text:ic("Validation.Green.Text"),Icon:ic("Validation.Green.Icon"),Border:ic("Validation.Green.Border"),Background:ic("Validation.Green.Background")},Orange:{Text:ic("Validation.Orange.Text"),Icon:ic("Validation.Orange.Icon"),Border:ic("Validation.Orange.Border"),Background:ic("Validation.Orange.Background"),Badge:ic("Validation.Orange.Badge")},Red:{Text:ic("Validation.Red.Text"),Icon:ic("Validation.Red.Icon"),Border:ic("Validation.Red.Border"),Background:ic("Validation.Red.Background")},Blue:{Text:ic("Validation.Blue.Text"),Icon:ic("Validation.Blue.Icon"),Border:ic("Validation.Blue.Border"),Background:ic("Validation.Blue.Background")}},Shadow:{Accent:ic("Shadow.Accent"),Red:ic("Shadow.Red"),Elevation:ic("Shadow.Elevation")}},sc={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},lc=e=>Object.keys(sc).reduce(((t,r)=>{const n=sc[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),cc=lc("max-width"),uc=(lc("min-width"),f.div`
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
    border-color: ${e=>e.$color||oc.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${dc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,pc=f(hc)`
    animation-delay: -0.45s;
`,fc=f(hc)`
    animation-delay: -0.3s;
`,gc=f(hc)`
    animation-delay: -0.15s;
`,mc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},yc={collections:{base:{D1:{fontFamily:mc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:mc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:mc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:mc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:mc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:mc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:mc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:mc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:mc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:mc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:mc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:mc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:mc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:mc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},bc=e=>t=>{const r=t.theme,n=rc(yc,r[nc.textStyleScheme]);return r.options&&r.options.textStyle?tc(n,e,r.options.textStyle):tc(n,e)},vc={D1:{fontFamily:bc("D1.fontFamily"),fontSize:bc("D1.fontSize"),fontWeight:bc("D1.fontWeight"),lineHeight:bc("D1.lineHeight"),letterSpacing:bc("D1.letterSpacing")},D2:{fontFamily:bc("D2.fontFamily"),fontSize:bc("D2.fontSize"),fontWeight:bc("D2.fontWeight"),lineHeight:bc("D2.lineHeight"),letterSpacing:bc("D2.letterSpacing")},D3:{fontFamily:bc("D3.fontFamily"),fontSize:bc("D3.fontSize"),fontWeight:bc("D3.fontWeight"),lineHeight:bc("D3.lineHeight"),letterSpacing:bc("D3.letterSpacing")},D4:{fontFamily:bc("D4.fontFamily"),fontSize:bc("D4.fontSize"),fontWeight:bc("D4.fontWeight"),lineHeight:bc("D4.lineHeight"),letterSpacing:bc("D4.letterSpacing")},DBody:{fontFamily:bc("DBody.fontFamily"),fontSize:bc("DBody.fontSize"),fontWeight:bc("DBody.fontWeight"),lineHeight:bc("DBody.lineHeight"),letterSpacing:bc("DBody.letterSpacing")},H1:{fontFamily:bc("H1.fontFamily"),fontSize:bc("H1.fontSize"),fontWeight:bc("H1.fontWeight"),lineHeight:bc("H1.lineHeight"),letterSpacing:bc("H1.letterSpacing")},H2:{fontFamily:bc("H2.fontFamily"),fontSize:bc("H2.fontSize"),fontWeight:bc("H2.fontWeight"),lineHeight:bc("H2.lineHeight"),letterSpacing:bc("H2.letterSpacing")},H3:{fontFamily:bc("H3.fontFamily"),fontSize:bc("H3.fontSize"),fontWeight:bc("H3.fontWeight"),lineHeight:bc("H3.lineHeight"),letterSpacing:bc("H3.letterSpacing")},H4:{fontFamily:bc("H4.fontFamily"),fontSize:bc("H4.fontSize"),fontWeight:bc("H4.fontWeight"),lineHeight:bc("H4.lineHeight"),letterSpacing:bc("H4.letterSpacing")},H5:{fontFamily:bc("H5.fontFamily"),fontSize:bc("H5.fontSize"),fontWeight:bc("H5.fontWeight"),lineHeight:bc("H5.lineHeight"),letterSpacing:bc("H5.letterSpacing")},H6:{fontFamily:bc("H6.fontFamily"),fontSize:bc("H6.fontSize"),fontWeight:bc("H6.fontWeight"),lineHeight:bc("H6.lineHeight"),letterSpacing:bc("H6.letterSpacing")},Body:{fontFamily:bc("Body.fontFamily"),fontSize:bc("Body.fontSize"),fontWeight:bc("Body.fontWeight"),lineHeight:bc("Body.lineHeight"),letterSpacing:bc("Body.letterSpacing")},BodySmall:{fontFamily:bc("BodySmall.fontFamily"),fontSize:bc("BodySmall.fontSize"),fontWeight:bc("BodySmall.fontWeight"),lineHeight:bc("BodySmall.lineHeight"),letterSpacing:bc("BodySmall.letterSpacing")},XSmall:{fontFamily:bc("XSmall.fontFamily"),fontSize:bc("XSmall.fontSize"),fontWeight:bc("XSmall.fontWeight"),lineHeight:bc("XSmall.lineHeight"),letterSpacing:bc("XSmall.letterSpacing")}},wc=e=>{switch(e){case 700:case"bold":return mc.Bold;case 600:case"semibold":return mc.Semibold;case 300:case"light":return mc.Light;case 400:case"regular":return mc.Regular;default:return""}},Fc=(e,t)=>r=>{var n;const a=vc[e].fontFamily(r),i=vc[e].fontWeight(r);return Object.values(mc).includes(a)?m`
                font-family: ${wc(t)||wc(i)||a};
                font-weight: normal !important;
            `:m`
            font-family: ${a};
            font-weight: ${null!==(n=$c(t)||i)&&void 0!==n?n:"normal"};
        `},$c=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xc=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Sc=(e,t,r=!1)=>n=>{const a=vc[e],i=a.fontSize(n);return m`
            ${Fc(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${m`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},_c=(e=!1,t=!1,r=void 0)=>t?m`
            display: block;
            ${xc(r)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${xc(r)}
        `;var Bc;!function(e){e.D1=f.h1`
        ${e=>m`
                ${Sc("D1",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${Sc("D2",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${Sc("D3",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${Sc("D4",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${Sc("DBody",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${Sc("H1",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${Sc("H2",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${Sc("H3",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${Sc("H4",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${Sc("H5",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${Sc("H6",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${Sc("Body",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${Sc("BodySmall",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${Sc("XSmall",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${_c(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Oc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Oc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Bc||(Bc={}));const kc=f.a`
    ${e=>m`
            ${Sc(e.textStyle,e.weight)}
            color: ${oc.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${oc.Secondary};

                svg {
                    color: ${oc.Secondary};
                }
            }
        `}
`,Dc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Oc=r=>{var{external:n=!1,children:a}=r,i=B(r,["external","children"]);return e(kc,Object.assign({},i,{children:[a,n&&t(Dc,{})]}))};var Ec;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ec||(Ec={}));const Ac={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${oc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${oc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${oc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${oc.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${oc.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${oc.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},jc=e=>t=>{var r;const n=t.theme,a=rc(Ac,n[nc.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?tc(a,e,n.options.designToken):tc(a,e)},Cc={InputBoxShadow:jc("InputBoxShadow"),InputErrorBoxShadow:jc("InputErrorBoxShadow"),ElevationBoxShadow:jc("ElevationBoxShadow"),Table:{Header:jc("Table.Header"),Cell:{Primary:jc("Table.Cell.Primary"),Secondary:jc("Table.Cell.Secondary"),Selected:jc("Table.Cell.Selected"),Hover:jc("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:jc("Button.Danger.BackgroundColor"),Hover:jc("Button.Danger.Hover"),Primary:jc("Button.Danger.Primary"),Border:jc("Button.Danger.Border")}}};f.button`
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
                    background-color: ${oc.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Cc.Button.Danger.Border:oc.Primary};

                    color: ${e.$buttonIsDanger?Cc.Button.Danger.Primary:oc.Primary};
                `;case"light":return m`
                    background-color: ${oc.Neutral[8]};
                    border: 1px solid ${oc.Neutral[5]};

                    color: ${e.$buttonIsDanger?Cc.Button.Danger.Primary:oc.Primary};
                `;case"disabled":return m`
                    background-color: ${oc.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${oc.Neutral[3]};
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Cc.Button.Danger.Primary:oc.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Cc.Button.Danger.Hover:oc.Secondary};
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Cc.Button.Danger.BackgroundColor:oc.Primary};
                    border: 1px solid transparent;

                    ${cc.mobileL} {
                        width: 100%;
                    }

                    color: ${oc.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    ${Sc("H5","semibold")}

                    ${cc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    ${Sc("H4","semibold")}

                    ${cc.mobileS} {
                        height: auto;
                    }
                `}
`;const Ic=f((({color:r,className:n,size:a=18})=>e(uc,Object.assign({className:n,$size:a,$color:r},{children:[t(hc,{id:"inner1",$size:a-2,$borderWidth:2,$color:r}),t(pc,{id:"inner2",$size:a-2,$borderWidth:2,$color:r}),t(fc,{id:"inner3",$size:a-2,$borderWidth:2,$color:r}),t(gc,{id:"inner4",$size:a-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Cc.Button.Danger.Primary:oc.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=oc.Neutral[3](e);break;default:t=oc.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Pc;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:r,endIndex:a}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,a+1).length)+e.substring(a+1)}if(a){const{startIndex:r,endIndex:n}=t(a[0],a[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Pc||(Pc={}));const zc=g`
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

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return m`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${zc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?oc.Neutral[4](e):e.$unchecked?oc.Accent.Light[2](e):oc.Primary(e)};
    }
`,Hc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Nc=f(ec.div)`
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
        background: ${oc.Neutral[4]};
        border-right: 5px solid ${oc.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${cc.mobileL} {
        max-height: 15rem;
    }
`,Rc=f.li`
    :hover,
    :focus,
    :active {
        background: ${oc.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return m`
                background: ${oc.Accent.Light[5]};
            `}}
`,Mc=f.button`
    display: flex;
    ${e=>e.$multiSelect?m`
                padding: 0.5rem 1rem;
            `:m`
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
        outline-color: ${oc.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,Vc=m`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Wc=f.div`
    ${e=>Sc("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${oc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vc}
`,qc=f.div`
    color: ${oc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Vc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${Sc("BodySmall","semibold")}
                `:m`
                    ${Sc("Body","regular")}
                `}
`,Uc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Wc} {
                        display: inline;
                    }

                    ${qc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Qc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Gc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Xc=f((r=>{var{className:n,checked:a,disabled:i,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=r,h=B(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=o();s((()=>{p.current.indeterminate=l}),[l]);const f=e=>{if(!i){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(Tc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":a,"aria-labelledby":"checkbox-input",tabIndex:i?-1:0,onKeyDown:f,$displaySize:d,$disabled:i,$unchecked:!(l||a||i)},{children:[t(Hc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:a,ref:p,tabIndex:-1,onChange:f,disabled:i},h)),l?t(v,{"data-testid":"indeterminate"}):a?t(w,{"data-testid":"checkmark"}):i?t(F,{"data-testid":"disabled-empty-checkbox"}):t($,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Zc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Kc=f.button`
    ${e=>Sc("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${oc.Primary(e)};\n\t\t`}
`,Yc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Jc=f.div`
    ${e=>Sc("small"===e.$variant?"BodySmall":"Body","regular")}
`,eu=f(b)`
    ${e=>{const t="small"===e.$variant?1:1.5;return m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${oc.Validation.Red.Icon};
`,tu=f.button`
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
                background-color: ${oc.Neutral[7]};
            `}
    }
`,ru=a.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(tu,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))}));f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${oc.Neutral[5]};
    border-radius: 4px;
    background: ${oc.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${oc.Accent.Light[1]};
        box-shadow: ${Cc.InputBoxShadow};
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
                background: ${oc.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${oc.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${oc.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${oc.Validation.Red.Border};
                    box-shadow: ${Cc.InputErrorBoxShadow};
                }
            `:void 0}
`;const nu=f.input`
    ${e=>Sc("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${oc.Neutral[1]};
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
        color: ${oc.Neutral[3]};
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
`,au=e=>"small"===e?1:1.375,iu=e=>m`
        height: ${au(e)}rem;
        width: ${au(e)}rem;
    `,ou=f.li`
    background: ${oc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,su=f(nu)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,lu=f(S)`
    ${e=>iu(e.$variant)}
    margin: 0 0.5rem;
    color: ${oc.Neutral[3]};
`,cu=f(ru)`
    ${e=>iu(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${oc.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return m`
                svg {
                    ${iu(e.$variant)}
                }
            `}}
`,uu=c(((r,n)=>{const{onClear:a}=r,i=B(r,["onClear"]);return e(ou,{children:[t(lu,{$variant:r.variant}),t(su,Object.assign({ref:n,$variant:r.variant},i)),i.value&&t(cu,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:r.variant},{children:t(x,{})}))]},"search")})),du=n=>{var{listItems:a,listExtractor:l,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:F,onRetry:$,itemsLoadState:x="success",itemTruncationType:S="end",itemMaxLines:_=2,labelDisplayType:k="inline",renderListItem:D,onBlur:O,hideNoResultsDisplay:E,renderCustomCallToAction:A,variant:j="default"}=n,C=B(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[I,P]=i(0),[z,T]=i(""),[H,N]=i(a),[L,R]=i(0),M=zl({height:L}),V=o(),W=o(),q=o([]),U=o(),Q=o(),G=o(I),X=o(H),Z=e=>{G.current=e,P(e)},K=e=>{X.current=e,N(e)};s((()=>(document.addEventListener("keydown",ne),()=>{document.removeEventListener("keydown",ne)})),[]),s((()=>{te(z)}),[z]),s((()=>{if(T(""),h){if(setTimeout((()=>{R(re())})),b)return;U&&U.current?(U.current.focus(),Z(-1)):q.current[I]&&q.current[I].focus()}else R(0)}),[h]),s((()=>{if(h){const e=re();R(e)}}),[H,x]),s((()=>{K(a),T(""),Z(0)}),[a]);const Y=e=>l?l(e):e.toString(),J=e=>{if("inline"!==k)return!1;let t=0;W&&W.current&&(t=W.current.getBoundingClientRect().width-60);return Pc.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},ee=e=>!!bi(w,(t=>wi(t,e))),te=e=>{if(""===e)K(a);else if(m){const t=m(e);K(t)}else{const t=a.filter((t=>{var r;const n=Y(t),a="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),o=e.trim().toLowerCase();return a.includes(o)||i&&i.includes(o)}));K(t)}},re=()=>(W&&W.current?W.current.getBoundingClientRect().height:0)+(Q.current?Q.current.getBoundingClientRect().height:0),ne=e=>{if(V&&V.current.contains(e.target))switch(e.code){case"ArrowDown":if(G.current<X.current.length-1){const e=G.current+1;q.current[e].focus(),Z(e)}break;case"ArrowUp":if(G.current>0){const e=G.current-1;q.current[e].focus(),Z(G.current-1)}break;case"Escape":y&&y(!0)}},ae=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;T(t),g&&g()},oe=()=>{T(""),U.current.focus(),g&&g()},se=()=>{$&&$()},le=()=>{O&&O()},ce=n=>e(r,{children:[t(Qc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(Gc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ue=r=>{const n=Y(r),a="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,o=J(a),s=i&&J(i),l=o||s?"next-line":k;return e(Uc,Object.assign({$labelDisplayType:l},{children:[t(Wc,Object.assign({$truncateType:S,$maxLines:_,$variant:j,"aria-label":a},{children:"middle"===S&&o?ce(a):a})),i&&t(qc,Object.assign({$truncateType:S,$maxLines:_,$labelDisplayType:k,"aria-label":i},{children:"middle"===S&&s?ce(i):i}))]}))},de=()=>{if(!$||$&&"success"===x)return H.map(((r,n)=>t(Rc,Object.assign({$checked:ee(r)&&!v},{children:e(Mc,Object.assign({$hasNextLineLabel:"next-line"===k&&H.length>0&&l&&"string"!=typeof l(H[0]),onClick:e=>{ae(e,r)},ref:e=>q.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:le,$variant:j},{children:[v&&t(Xc,{checked:ee(r),displaySize:"small"}),D?D(r,{selected:ee(r)}):ue(r)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(r,n))))},he=()=>{if(v&&H.length>0&&!z&&"success"===x)return t(Zc,{children:t(Kc,Object.assign({onClick:F,type:"button",$variant:j},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},pe=()=>{if(!E&&(z||!p)&&0===H.length&&"success"===x)return e(Yc,Object.assign({"data-testid":"list-no-results"},{children:[t(eu,{"data-testid":"no-result-icon",$variant:j}),t(Jc,Object.assign({$variant:j},{children:"No results found."}))]}),"noResults")},fe=()=>{if($&&"loading"===x){const r="small"===j?16:24;return e(Yc,Object.assign({"data-testid":"list-loading"},{children:[t(Ic,{$buttonStyle:"secondary",size:r}),t(Jc,Object.assign({$variant:j},{children:"Loading..."}))]}),"loading")}},ge=()=>{if($&&"fail"===x)return e(Yc,Object.assign({"data-testid":"list-fail"},{children:[t(eu,{"data-testid":"load-error-icon",$variant:j}),t(Jc,Object.assign({$variant:j},{children:"Failed to load."}))," ",t(Kc,Object.assign({onClick:se,type:"button",$variant:j},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(Nc,Object.assign({style:M,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:V},{children:[(()=>{if(h)return e(Lc,Object.assign({ref:W,"data-testid":"dropdown-list",width:d,role:"list"},C,{children:[(p||m)&&"success"===x?t(uu,{ref:U,onChange:ie,value:z,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe,variant:j}):null,he(),pe(),fe(),ge(),de()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:Q,"data-testid":"custom-cta"},{children:A(y,H)}))})()]}))})},hu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",pu=e=>"small"===e?2.5:3,fu=f.div`
    position: relative;
    width: 100%;
    ${e=>{const t=pu(e.$variant);return m`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,gu=m`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>pu(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${oc.Accent.Light[3]};
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
    border: 1px solid ${oc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${oc.Neutral[8]};

    :focus-within {
        border: 1px solid ${oc.Accent.Light[1]};
        box-shadow: ${Cc.InputBoxShadow};
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
                background: ${oc.Neutral[6](e)};

                ${mu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${oc.Neutral[5](e)};
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
                border: 1px solid ${oc.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${oc.Validation.Red.Border(e)};
                    box-shadow: ${Cc.InputErrorBoxShadow};
                }
            `:void 0}
`,vu=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${hu};
    margin-left: 1rem;
`,wu=f(_)`
    color: ${oc.Neutral[3]};
    ${e=>{let t=vc.Body.fontSize;return"small"===e.$variant&&(t=vc.BodySmall.fontSize),m`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,Fu=f.div`
    height: 1px;
    background: ${oc.Neutral[5]};
    margin: 0 0.5rem;
`,$u=f.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,xu=f.div`
    ${e=>Sc("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Su=f(xu)`
    color: ${oc.Neutral[3]};
`,_u=({children:e,show:r,error:n,disabled:a,testId:i,onBlur:l,readOnly:c,className:u,variant:d})=>{const h=o();return((e,t,r="window",n)=>{const a=o();s((()=>{a.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])})("mousedown",(function(e){if(!a){if(h&&h.current.contains(e.target))return;r&&l()}}),"document"),t(fu,Object.assign({className:u,$variant:d},{children:t(bu,Object.assign({ref:h,error:n&&!r,disabled:a,$readOnly:c,expanded:r,"data-testid":i},{children:e}))}))},Bu=n=>{var{selectedOptions:a,placeholder:l="Select",options:c,className:u,disabled:d,error:h,"data-testid":p,enableSearch:f=!1,searchFunction:g,searchPlaceholder:m,valueExtractor:y,listExtractor:b,onSelectOptions:v,listStyleWidth:w,onShowOptions:F,onHideOptions:$,onRetry:x,onBlur:S,optionsLoadState:_="success",optionTruncationType:k="end",variant:D="default"}=n,O=B(n,["selectedOptions","placeholder","options","className","disabled","error","data-testid","enableSearch","searchFunction","searchPlaceholder","valueExtractor","listExtractor","onSelectOptions","listStyleWidth","onShowOptions","onHideOptions","onRetry","onBlur","optionsLoadState","optionTruncationType","variant"]);const[E,A]=i(a||[]),[j,C]=i(!1),I=o();s((()=>{A(a||[])}),[a]);const P=(e,t)=>{const r=[...E],n=fi(E,(e=>(y?y(e):e)===t));n>-1?r.splice(n,1):r.push(e),A(r),H(!1),I&&I.current.focus(),N(r)},z=()=>{j&&(C(!1),H(!1)),I&&I.current.focus()},T=()=>{E&&E.length>0?(A([]),N([])):(A(c),N(c))},H=e=>{!e&&$&&$(),e&&F&&F()},N=e=>{v&&v(e)};return e(_u,Object.assign({show:j,error:h&&!j,disabled:d,testId:p,className:u,onBlur:()=>{null==S||S(),C(!1),H(!1)},variant:D},{children:[t(mu,Object.assign({ref:I,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),d||(C(!j),H(!j),j&&(null==S||S()))},onBlur:()=>{j||null==S||S()},$variant:D},O,{children:e(r,{children:[t($u,{children:E&&0!==E.length?t(xu,Object.assign({$variant:D},{children:E&&0!=E.length?c&&E.length===c.length?"All selected":`${E.length} selected`:l})):t(Su,Object.assign({truncateType:k,$variant:D},{children:l}))}),t(vu,Object.assign({expanded:j},{children:t(wu,{$variant:D})}))]})})),j&&t(Fu,{}),c&&c.length>0||x?t(du,{listItems:c,onSelectItem:P,onDismiss:z,valueExtractor:y,listExtractor:b,listStyleWidth:w,visible:j,enableSearch:f,searchFunction:g,searchPlaceholder:m,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:E,onSelectAll:T,onRetry:x,itemsLoadState:_,itemTruncationType:k,variant:D}):null]}))};export{Bu as InputMultiSelect};
//# sourceMappingURL=index.js.map
