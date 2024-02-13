import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useState as o,useRef as a,useEffect as s,useLayoutEffect as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{ExclamationCircleFillIcon as b}from"@lifesg/react-icons/exclamation-circle-fill";import{MinusSquareFillIcon as v,SquareTickFillIcon as w,SquareFillIcon as x,SquareIcon as S,ArrowRightIcon as $}from"@lifesg/react-icons";import{CrossIcon as F}from"@lifesg/react-icons/cross";import{MagnifierIcon as _}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as B}from"@lifesg/react-icons/chevron-down";function k(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function D(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j=function(){this.__data__=[],this.size=0};var A=function(e,t){return e===t||e!=e&&t!=t},E=A;var C=function(e,t){for(var r=e.length;r--;)if(E(e[r][0],t))return r;return-1},I=C,P=Array.prototype.splice;var z=C;var T=C;var H=C;var N=j,L=function(e){var t=this.__data__,r=I(t,e);return!(r<0)&&(r==t.length-1?t.pop():P.call(t,r,1),--this.size,!0)},M=function(e){var t=this.__data__,r=z(t,e);return r<0?void 0:t[r][1]},R=function(e){return T(this.__data__,e)>-1},V=function(e,t){var r=this.__data__,n=H(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function W(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}W.prototype.clear=N,W.prototype.delete=L,W.prototype.get=M,W.prototype.has=R,W.prototype.set=V;var q=W,U=q;var Q=function(){this.__data__=new U,this.size=0};var G=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var X=function(e){return this.__data__.get(e)};var Z=function(e){return this.__data__.has(e)},K="object"==typeof O&&O&&O.Object===Object&&O,Y=K,J="object"==typeof self&&self&&self.Object===Object&&self,ee=Y||J||Function("return this")(),te=ee.Symbol,re=te,ne=Object.prototype,ie=ne.hasOwnProperty,oe=ne.toString,ae=re?re.toStringTag:void 0;var se=function(e){var t=ie.call(e,ae),r=e[ae];try{e[ae]=void 0;var n=!0}catch(e){}var i=oe.call(e);return n&&(t?e[ae]=r:delete e[ae]),i},le=Object.prototype.toString;var ce=se,ue=function(e){return le.call(e)},de=te?te.toStringTag:void 0;var he=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":de&&de in Object(e)?ce(e):ue(e)};var pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fe=he,ge=pe;var me,ye=function(e){if(!ge(e))return!1;var t=fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},be=ee["__core-js_shared__"],ve=(me=/[^.]+$/.exec(be&&be.keys&&be.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var we=function(e){return!!ve&&ve in e},xe=Function.prototype.toString;var Se=function(e){if(null!=e){try{return xe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$e=ye,Fe=we,_e=pe,Be=Se,ke=/^\[object .+?Constructor\]$/,Oe=Function.prototype,De=Object.prototype,je=Oe.toString,Ae=De.hasOwnProperty,Ee=RegExp("^"+je.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ce=function(e){return!(!_e(e)||Fe(e))&&($e(e)?Ee:ke).test(Be(e))},Ie=function(e,t){return null==e?void 0:e[t]};var Pe=function(e,t){var r=Ie(e,t);return Ce(r)?r:void 0},ze=Pe(ee,"Map"),Te=Pe(Object,"create"),He=Te;var Ne=function(){this.__data__=He?He(null):{},this.size=0};var Le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Me=Te,Re=Object.prototype.hasOwnProperty;var Ve=function(e){var t=this.__data__;if(Me){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Re.call(t,e)?t[e]:void 0},We=Te,qe=Object.prototype.hasOwnProperty;var Ue=Te;var Qe=Ne,Ge=Le,Xe=Ve,Ze=function(e){var t=this.__data__;return We?void 0!==t[e]:qe.call(t,e)},Ke=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ue&&void 0===t?"__lodash_hash_undefined__":t,this};function Ye(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ye.prototype.clear=Qe,Ye.prototype.delete=Ge,Ye.prototype.get=Xe,Ye.prototype.has=Ze,Ye.prototype.set=Ke;var Je=Ye,et=q,tt=ze;var rt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var r=e.__data__;return rt(t)?r["string"==typeof t?"string":"hash"]:r.map},it=nt;var ot=nt;var at=nt;var st=nt;var lt=function(){this.size=0,this.__data__={hash:new Je,map:new(tt||et),string:new Je}},ct=function(e){var t=it(this,e).delete(e);return this.size-=t?1:0,t},ut=function(e){return ot(this,e).get(e)},dt=function(e){return at(this,e).has(e)},ht=function(e,t){var r=st(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function pt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=lt,pt.prototype.delete=ct,pt.prototype.get=ut,pt.prototype.has=dt,pt.prototype.set=ht;var ft=pt,gt=q,mt=ze,yt=ft;var bt=q,vt=Q,wt=G,xt=X,St=Z,$t=function(e,t){var r=this.__data__;if(r instanceof gt){var n=r.__data__;if(!mt||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new yt(n)}return r.set(e,t),this.size=r.size,this};function Ft(e){var t=this.__data__=new bt(e);this.size=t.size}Ft.prototype.clear=vt,Ft.prototype.delete=wt,Ft.prototype.get=xt,Ft.prototype.has=St,Ft.prototype.set=$t;var _t=Ft;var Bt=ft,kt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ot=function(e){return this.__data__.has(e)};function Dt(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Bt;++t<r;)this.add(e[t])}Dt.prototype.add=Dt.prototype.push=kt,Dt.prototype.has=Ot;var jt=Dt,At=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Et=function(e,t){return e.has(t)};var Ct=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&r?new jt:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],g=t[d];if(n)var m=a?n(g,f,d,t,e,o):n(f,g,d,e,t,o);if(void 0!==m){if(m)continue;h=!1;break}if(p){if(!At(t,(function(e,t){if(!Et(p,t)&&(f===e||i(f,e,r,n,o)))return p.push(t)}))){h=!1;break}}else if(f!==g&&!i(f,g,r,n,o)){h=!1;break}}return o.delete(e),o.delete(t),h};var It=ee.Uint8Array,Pt=A,zt=Ct,Tt=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r},Ht=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Nt=te?te.prototype:void 0,Lt=Nt?Nt.valueOf:void 0;var Mt=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new It(e),new It(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Pt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Tt;case"[object Set]":var l=1&n;if(s||(s=Ht),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var u=zt(s(e),s(t),n,i,o,a);return a.delete(e),u;case"[object Symbol]":if(Lt)return Lt.call(e)==Lt.call(t)}return!1};var Rt=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},Vt=Array.isArray,Wt=Rt,qt=Vt;var Ut=function(e,t,r){var n=t(e);return qt(e)?n:Wt(n,r(e))};var Qt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Gt=function(){return[]},Xt=Object.prototype.propertyIsEnumerable,Zt=Object.getOwnPropertySymbols,Kt=Zt?function(e){return null==e?[]:(e=Object(e),Qt(Zt(e),(function(t){return Xt.call(e,t)})))}:Gt;var Yt=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n};var Jt=function(e){return null!=e&&"object"==typeof e},er=he,tr=Jt;var rr=function(e){return tr(e)&&"[object Arguments]"==er(e)},nr=Jt,ir=Object.prototype,or=ir.hasOwnProperty,ar=ir.propertyIsEnumerable,sr=rr(function(){return arguments}())?rr:function(e){return nr(e)&&or.call(e,"callee")&&!ar.call(e,"callee")},lr={exports:{}};var cr=function(){return!1};!function(e,t){var r=ee,n=cr,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(lr,lr.exports);var ur=lr.exports,dr=/^(?:0|[1-9]\d*)$/;var hr=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&dr.test(e))&&e>-1&&e%1==0&&e<t};var pr=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},fr=he,gr=pr,mr=Jt,yr={};yr["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0,yr["[object Arguments]"]=yr["[object Array]"]=yr["[object ArrayBuffer]"]=yr["[object Boolean]"]=yr["[object DataView]"]=yr["[object Date]"]=yr["[object Error]"]=yr["[object Function]"]=yr["[object Map]"]=yr["[object Number]"]=yr["[object Object]"]=yr["[object RegExp]"]=yr["[object Set]"]=yr["[object String]"]=yr["[object WeakMap]"]=!1;var br=function(e){return mr(e)&&gr(e.length)&&!!yr[fr(e)]};var vr=function(e){return function(t){return e(t)}},wr={exports:{}};!function(e,t){var r=K,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(wr,wr.exports);var xr=wr.exports,Sr=br,$r=vr,Fr=xr&&xr.isTypedArray,_r=Fr?$r(Fr):Sr,Br=Yt,kr=sr,Or=Vt,Dr=ur,jr=hr,Ar=_r,Er=Object.prototype.hasOwnProperty;var Cr=function(e,t){var r=Or(e),n=!r&&kr(e),i=!r&&!n&&Dr(e),o=!r&&!n&&!i&&Ar(e),a=r||n||i||o,s=a?Br(e.length,String):[],l=s.length;for(var c in e)!t&&!Er.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||jr(c,l))||s.push(c);return s},Ir=Object.prototype;var Pr=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ir)};var zr=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Tr=Pr,Hr=zr,Nr=Object.prototype.hasOwnProperty;var Lr=ye,Mr=pr;var Rr=function(e){return null!=e&&Mr(e.length)&&!Lr(e)},Vr=Cr,Wr=function(e){if(!Tr(e))return Hr(e);var t=[];for(var r in Object(e))Nr.call(e,r)&&"constructor"!=r&&t.push(r);return t},qr=Rr;var Ur=function(e){return qr(e)?Vr(e):Wr(e)},Qr=Ut,Gr=Kt,Xr=Ur;var Zr=function(e){return Qr(e,Xr,Gr)},Kr=Object.prototype.hasOwnProperty;var Yr=function(e,t,r,n,i,o){var a=1&r,s=Zr(e),l=s.length;if(l!=Zr(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:Kr.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var g=e[u=s[c]],m=t[u];if(n)var y=a?n(m,g,u,t,e,o):n(g,m,u,e,t,o);if(!(void 0===y?g===m||i(g,m,r,n,o):y)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var b=e.constructor,v=t.constructor;b==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p},Jr=Pe(ee,"DataView"),en=ze,tn=Pe(ee,"Promise"),rn=Pe(ee,"Set"),nn=Pe(ee,"WeakMap"),on=he,an=Se,sn="[object Map]",ln="[object Promise]",cn="[object Set]",un="[object WeakMap]",dn="[object DataView]",hn=an(Jr),pn=an(en),fn=an(tn),gn=an(rn),mn=an(nn),yn=on;(Jr&&yn(new Jr(new ArrayBuffer(1)))!=dn||en&&yn(new en)!=sn||tn&&yn(tn.resolve())!=ln||rn&&yn(new rn)!=cn||nn&&yn(new nn)!=un)&&(yn=function(e){var t=on(e),r="[object Object]"==t?e.constructor:void 0,n=r?an(r):"";if(n)switch(n){case hn:return dn;case pn:return sn;case fn:return ln;case gn:return cn;case mn:return un}return t});var bn=_t,vn=Ct,wn=Mt,xn=Yr,Sn=yn,$n=Vt,Fn=ur,_n=_r,Bn="[object Arguments]",kn="[object Array]",On="[object Object]",Dn=Object.prototype.hasOwnProperty;var jn=function(e,t,r,n,i,o){var a=$n(e),s=$n(t),l=a?kn:Sn(e),c=s?kn:Sn(t),u=(l=l==Bn?On:l)==On,d=(c=c==Bn?On:c)==On,h=l==c;if(h&&Fn(e)){if(!Fn(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new bn),a||_n(e)?vn(e,t,r,n,i,o):wn(e,t,l,r,n,i,o);if(!(1&r)){var p=u&&Dn.call(e,"__wrapped__"),f=d&&Dn.call(t,"__wrapped__");if(p||f){var g=p?e.value():e,m=f?t.value():t;return o||(o=new bn),i(g,m,r,n,o)}}return!!h&&(o||(o=new bn),xn(e,t,r,n,i,o))},An=Jt;var En=function e(t,r,n,i,o){return t===r||(null==t||null==r||!An(t)&&!An(r)?t!=t&&r!=r:jn(t,r,n,i,e,o))},Cn=_t,In=En;var Pn=pe;var zn=function(e){return e==e&&!Pn(e)},Tn=zn,Hn=Ur;var Nn=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Ln=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new Cn;if(n)var h=n(c,u,l,e,t,d);if(!(void 0===h?In(u,c,3,n,d):h))return!1}}return!0},Mn=function(e){for(var t=Hn(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Tn(i)]}return t},Rn=Nn;var Vn=function(e){var t=Mn(e);return 1==t.length&&t[0][2]?Rn(t[0][0],t[0][1]):function(r){return r===e||Ln(r,e,t)}},Wn=he,qn=Jt;var Un=function(e){return"symbol"==typeof e||qn(e)&&"[object Symbol]"==Wn(e)},Qn=Vt,Gn=Un,Xn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zn=/^\w*$/;var Kn=function(e,t){if(Qn(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Gn(e))||(Zn.test(e)||!Xn.test(e)||null!=t&&e in Object(t))},Yn=ft;function Jn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Jn.Cache||Yn),r}Jn.Cache=Yn;var ei=Jn;var ti=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ri=/\\(\\)?/g,ni=function(e){var t=ei(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ti,(function(e,r,n,i){t.push(n?i.replace(ri,"$1"):r||e)})),t}));var ii=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},oi=Vt,ai=Un,si=te?te.prototype:void 0,li=si?si.toString:void 0;var ci=function e(t){if("string"==typeof t)return t;if(oi(t))return ii(t,e)+"";if(ai(t))return li?li.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},ui=ci;var di=Vt,hi=Kn,pi=ni,fi=function(e){return null==e?"":ui(e)};var gi=function(e,t){return di(e)?e:hi(e,t)?[e]:pi(fi(e))},mi=Un;var yi=function(e){if("string"==typeof e||mi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},bi=gi,vi=yi;var wi=function(e,t){for(var r=0,n=(t=bi(t,e)).length;null!=e&&r<n;)e=e[vi(t[r++])];return r&&r==n?e:void 0},xi=wi;var Si=function(e,t,r){var n=null==e?void 0:xi(e,t);return void 0===n?r:n},$i=D(Si);var Fi=gi,_i=sr,Bi=Vt,ki=hr,Oi=pr,Di=yi;var ji=function(e,t){return null!=e&&t in Object(e)},Ai=function(e,t,r){for(var n=-1,i=(t=Fi(t,e)).length,o=!1;++n<i;){var a=Di(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Oi(i)&&ki(a,i)&&(Bi(e)||_i(e))};var Ei=En,Ci=Si,Ii=function(e,t){return null!=e&&Ai(e,t,ji)},Pi=Kn,zi=zn,Ti=Nn,Hi=yi;var Ni=wi;var Li=function(e){return function(t){return null==t?void 0:t[e]}},Mi=function(e){return function(t){return Ni(t,e)}},Ri=Kn,Vi=yi;var Wi=Vn,qi=function(e,t){return Pi(e)&&zi(t)?Ti(Hi(e),t):function(r){var n=Ci(r,e);return void 0===n&&n===t?Ii(r,e):Ei(t,n,3)}},Ui=function(e){return e},Qi=Vt,Gi=function(e){return Ri(e)?Li(Vi(e)):Mi(e)};var Xi=function(e){return"function"==typeof e?e:null==e?Ui:"object"==typeof e?Qi(e)?qi(e[0],e[1]):Wi(e):Gi(e)},Zi=Xi,Ki=Rr,Yi=Ur;var Ji=function(e){return function(t,r,n){var i=Object(t);if(!Ki(t)){var o=Zi(r);t=Yi(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var eo=/\s/;var to=function(e){for(var t=e.length;t--&&eo.test(e.charAt(t)););return t},ro=/^\s+/;var no=function(e){return e?e.slice(0,to(e)+1).replace(ro,""):e},io=pe,oo=Un,ao=/^[-+]0x[0-9a-f]+$/i,so=/^0b[01]+$/i,lo=/^0o[0-7]+$/i,co=parseInt;var uo=function(e){if("number"==typeof e)return e;if(oo(e))return NaN;if(io(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=io(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=no(e);var r=so.test(e);return r||lo.test(e)?co(e.slice(2),r?2:8):ao.test(e)?NaN:+e},ho=1/0;var po=function(e){return e?(e=uo(e))===ho||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var fo=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},go=Xi,mo=function(e){var t=po(e),r=t%1;return t==t?r?t-r:t:0},yo=Math.max;var bo=D(Ji((function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:mo(r);return i<0&&(i=yo(n+i,0)),fo(e,go(t),i)}))),vo=En;var wo=D((function(e,t){return vo(e,t)})),xo=Object.defineProperty,So={};((e,t)=>{for(var r in t)xo(e,r,{get:t[r],enumerable:!0})})(So,{assign:()=>ta,colors:()=>Yo,createStringInterpolator:()=>Go,skipAnimation:()=>Jo,to:()=>Xo,willAdvance:()=>ea});var $o=No(),Fo=e=>Po(e,$o),_o=No();Fo.write=e=>Po(e,_o);var Bo=No();Fo.onStart=e=>Po(e,Bo);var ko=No();Fo.onFrame=e=>Po(e,ko);var Oo=No();Fo.onFinish=e=>Po(e,Oo);var Do=[];Fo.setTimeout=(e,t)=>{const r=Fo.now()+t,n=()=>{const e=Do.findIndex((e=>e.cancel==n));~e&&Do.splice(e,1),Co-=~e?1:0},i={time:r,handler:e,cancel:n};return Do.splice(jo(r),0,i),Co+=1,zo(),i};var jo=e=>~(~Do.findIndex((t=>t.time>e))||~Do.length);Fo.cancel=e=>{Bo.delete(e),ko.delete(e),Oo.delete(e),$o.delete(e),_o.delete(e)},Fo.sync=e=>{Io=!0,Fo.batchedUpdates(e),Io=!1},Fo.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Fo.onStart(r)}return n.handler=e,n.cancel=()=>{Bo.delete(r),t=null},n};var Ao="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Fo.use=e=>Ao=e,Fo.now="undefined"!=typeof performance?()=>performance.now():Date.now,Fo.batchedUpdates=e=>e(),Fo.catch=console.error,Fo.frameLoop="always",Fo.advance=()=>{"demand"!==Fo.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ho()};var Eo=-1,Co=0,Io=!1;function Po(e,t){Io?(t.delete(e),e(0)):(t.add(e),zo())}function zo(){Eo<0&&(Eo=0,"demand"!==Fo.frameLoop&&Ao(To))}function To(){~Eo&&(Ao(To),Fo.batchedUpdates(Ho))}function Ho(){const e=Eo;Eo=Fo.now();const t=jo(Eo);t&&(Lo(Do.splice(0,t),(e=>e.handler())),Co-=t),Co?(Bo.flush(),$o.flush(e?Math.min(64,Eo-e):16.667),ko.flush(),_o.flush(),Oo.flush()):Eo=-1}function No(){let e=new Set,t=e;return{add(r){Co+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Co-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Co-=t.size,Lo(t,(t=>t(r)&&e.add(t))),Co+=e.size,t=e)}}}function Lo(e,t){e.forEach((e=>{try{t(e)}catch(e){Fo.catch(e)}}))}function Mo(){}var Ro={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Vo(e,t){if(Ro.arr(e)){if(!Ro.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Wo=(e,t)=>e.forEach(t);function qo(e,t,r){if(Ro.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Uo=e=>Ro.und(e)?[]:Ro.arr(e)?e:[e];function Qo(e,t){if(e.size){const r=Array.from(e);e.clear(),Wo(r,t)}}var Go,Xo,Zo=(e,...t)=>Qo(e,(e=>e(...t))),Ko=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Yo=null,Jo=!1,ea=Mo,ta=e=>{e.to&&(Xo=e.to),e.now&&(Fo.now=e.now),void 0!==e.colors&&(Yo=e.colors),null!=e.skipAnimation&&(Jo=e.skipAnimation),e.createStringInterpolator&&(Go=e.createStringInterpolator),e.requestAnimationFrame&&Fo.use(e.requestAnimationFrame),e.batchedUpdates&&(Fo.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ea=e.willAdvance),e.frameLoop&&(Fo.frameLoop=e.frameLoop)},ra=new Set,na=[],ia=[],oa=0,aa={get idle(){return!ra.size&&!na.length},start(e){oa>e.priority?(ra.add(e),Fo.onStart(sa)):(la(e),Fo(ua))},advance:ua,sort(e){if(oa)Fo.onFrame((()=>aa.sort(e)));else{const t=na.indexOf(e);~t&&(na.splice(t,1),ca(e))}},clear(){na=[],ra.clear()}};function sa(){ra.forEach(la),ra.clear(),Fo(ua)}function la(e){na.includes(e)||ca(e)}function ca(e){na.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(na,(t=>t.priority>e.priority)),0,e)}function ua(e){const t=ia;for(let r=0;r<na.length;r++){const n=na[r];oa=n.priority,n.idle||(ea(n),n.advance(e),n.idle||t.push(n))}return oa=0,(ia=na).length=0,(na=t).length>0}var da="[-+]?\\d*\\.?\\d+",ha=da+"%";function pa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var fa=new RegExp("rgb"+pa(da,da,da)),ga=new RegExp("rgba"+pa(da,da,da,da)),ma=new RegExp("hsl"+pa(da,ha,ha)),ya=new RegExp("hsla"+pa(da,ha,ha,da)),ba=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,va=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wa=/^#([0-9a-fA-F]{6})$/,xa=/^#([0-9a-fA-F]{8})$/;function Sa(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function $a(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Sa(i,n,e+1/3),a=Sa(i,n,e),s=Sa(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Fa(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function _a(e){return(parseFloat(e)%360+360)%360/360}function Ba(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ka(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Oa(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=wa.exec(e))?parseInt(t[1]+"ff",16)>>>0:Yo&&void 0!==Yo[e]?Yo[e]:(t=fa.exec(e))?(Fa(t[1])<<24|Fa(t[2])<<16|Fa(t[3])<<8|255)>>>0:(t=ga.exec(e))?(Fa(t[1])<<24|Fa(t[2])<<16|Fa(t[3])<<8|Ba(t[4]))>>>0:(t=ba.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=xa.exec(e))?parseInt(t[1],16)>>>0:(t=va.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ma.exec(e))?(255|$a(_a(t[1]),ka(t[2]),ka(t[3])))>>>0:(t=ya.exec(e))?($a(_a(t[1]),ka(t[2]),ka(t[3]))|Ba(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Da=(e,t,r)=>{if(Ro.fun(e))return e;if(Ro.arr(e))return Da({range:e,output:t,extrapolate:r});if(Ro.str(e.output[0]))return Go(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var ja=1.70158,Aa=1.525*ja,Ea=ja+1,Ca=2*Math.PI/3,Ia=2*Math.PI/4.5,Pa=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},za={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ea*e*e*e-ja*e*e,easeOutBack:e=>1+Ea*Math.pow(e-1,3)+ja*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Aa)/2:(Math.pow(2*e-2,2)*((Aa+1)*(2*e-2)+Aa)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ca),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ca)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ia)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ia)/2+1,easeInBounce:e=>1-Pa(1-e),easeOutBounce:Pa,easeInOutBounce:e=>e<.5?(1-Pa(1-2*e))/2:(1+Pa(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Ta=Symbol.for("FluidValue.get"),Ha=Symbol.for("FluidValue.observers"),Na=e=>Boolean(e&&e[Ta]),La=e=>e&&e[Ta]?e[Ta]():e,Ma=e=>e[Ha]||null;function Ra(e,t){const r=e[Ha];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Va=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Wa(this,e)}},Wa=(e,t)=>Ga(e,Ta,t);function qa(e,t){if(e[Ta]){let r=e[Ha];r||Ga(e,Ha,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ua(e,t){const r=e[Ha];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ha]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Qa,Ga=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Xa=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Za=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ka=new RegExp(`(${Xa.source})(%|[a-z]+)`,"i"),Ya=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ja=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,es=e=>{const[t,r]=ts(e);if(!t||Ko())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ja.test(r)?es(r):r||e},ts=e=>{const t=Ja.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},rs=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,ns=e=>{Qa||(Qa=Yo?new RegExp(`(${Object.keys(Yo).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>La(e).replace(Ja,es).replace(Za,Oa).replace(Qa,Oa))),r=t.map((e=>e.match(Xa).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Da({...e,output:t})));return e=>{const r=!Ka.test(t[0])&&t.find((e=>Ka.test(e)))?.replace(Xa,"");let i=0;return t[0].replace(Xa,(()=>`${n[i++](e)}${r||""}`)).replace(Ya,rs)}},is="react-spring: ",os=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${is}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},as=os(console.warn);var ss=os(console.warn);function ls(e){return Ro.str(e)&&("#"==e[0]||/\d/.test(e)||!Ko()&&Ja.test(e)||e in(Yo||{}))}var cs=Ko()?s:l,us=()=>{const e=a(!1);return cs((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function ds(){const e=o()[1],t=us();return()=>{t.current&&e(Math.random())}}var hs=e=>s(e,ps),ps=[];function fs(e){const t=a();return s((()=>{t.current=e})),t.current}var gs=Symbol.for("Animated:node"),ms=e=>e&&e[gs],ys=(e,t)=>{return r=e,n=gs,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},bs=e=>e&&e[gs]&&e[gs].getPayload(),vs=class{constructor(){ys(this,this)}getPayload(){return this.payload||[]}},ws=class extends vs{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ro.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ws(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ro.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ro.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},xs=class extends ws{constructor(e){super(0),this._string=null,this._toString=Da({output:[e,e]})}static create(e){return new xs(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ro.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Da({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ss={dependencies:null},$s=class extends vs{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return qo(this.source,((r,n)=>{var i;(i=r)&&i[gs]===i?t[n]=r.getValue(e):Na(r)?t[n]=La(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Wo(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return qo(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ss.dependencies&&Na(e)&&Ss.dependencies.add(e);const t=bs(e);t&&Wo(t,(e=>this.add(e)))}},Fs=class extends $s{constructor(e){super(e)}static create(e){return new Fs(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(_s)),!0)}};function _s(e){return(ls(e)?xs:ws).create(e)}function Bs(e){const t=ms(e);return t?t.constructor:Ro.arr(e)?Fs:ls(e)?xs:ws}var ks=(e,t)=>{const r=!Ro.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,o)=>{const l=a(null),c=r&&u((e=>{l.current=function(e,t){e&&(Ro.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[d,h]=function(e,t){const r=new Set;Ss.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new $s(e),Ss.dependencies=null,[e,r]}(i,t),p=ds(),f=()=>{const e=l.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Os(f,h),m=a();cs((()=>(m.current=g,Wo(h,(e=>qa(e,g))),()=>{m.current&&(Wo(m.current.deps,(e=>Ua(e,m.current))),Fo.cancel(m.current.update))}))),s(f,[]),hs((()=>()=>{const e=m.current;Wo(e.deps,(t=>Ua(t,e)))}));const y=t.getComponentProps(d.getValue());return n.createElement(e,{...y,ref:c})}))},Os=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Fo.write(this.update)}};var Ds=Symbol.for("AnimatedComponent"),js=e=>Ro.str(e)?e:e&&Ro.str(e.displayName)?e.displayName:Ro.fun(e)&&e.name||null;function As(e,...t){return Ro.fun(e)?e(...t):e}var Es=(e,t)=>!0===e||!!(t&&e&&(Ro.fun(e)?e(t):Uo(e).includes(t))),Cs=(e,t)=>Ro.obj(e)?t&&e[t]:e,Is=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ps=e=>e,zs=(e,t=Ps)=>{let r=Ts;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Ro.und(r)||(n[i]=r)}return n},Ts=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Hs={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ns(e){const t=function(e){const t={};let r=0;if(qo(e,((e,n)=>{Hs[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return qo(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Ls(e){return e=La(e),Ro.arr(e)?e.map(Ls):ls(e)?So.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ms(e){return Ro.fun(e)||Ro.arr(e)&&Ro.obj(e[0])}var Rs={tension:170,friction:26,mass:1,damping:1,easing:za.linear,clamp:!1},Vs=class{constructor(){this.velocity=0,Object.assign(this,Rs)}};function Ws(e,t){if(Ro.und(t.decay)){const r=!Ro.und(t.tension)||!Ro.und(t.friction);!r&&Ro.und(t.frequency)&&Ro.und(t.damping)&&Ro.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var qs=[],Us=class{constructor(){this.changed=!1,this.values=qs,this.toValues=null,this.fromValues=qs,this.config=new Vs,this.immediate=!1}};function Qs(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=Es(r.cancel??n?.cancel,t);if(u)p();else{Ro.und(r.pause)||(i.paused=Es(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Es(e,t)),l=As(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-Fo.now()}function h(){l>0&&!So.skipAnimation?(i.delayed=!0,c=Fo.setTimeout(p,l),i.pauseQueue.add(d),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...r,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Gs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ks(e.get()):t.every((e=>e.noop))?Xs(e.get()):Zs(e.get(),t.every((e=>e.finished))),Xs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Zs=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ks=e=>({value:e,cancelled:!0,finished:!1});function Ys(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=zs(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(r.cancelId||0)&&Ks(n)||i!==r.asyncId&&Zs(n,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new el,a=new tl;return(async()=>{if(So.skipAnimation)throw Js(r),a.result=Zs(n,!1),d(a),a;p(o);const s=Ro.obj(e)?{...e}:{...t,to:e};s.parentId=i,qo(c,((e,t)=>{Ro.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return p(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(So.skipAnimation)return Js(r),Zs(n,!1);try{let t;t=Ro.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Zs(n.get(),!0,!1)}catch(e){if(e instanceof el)g=e.result;else{if(!(e instanceof tl))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Ro.fun(a)&&Fo.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Js(e,t){Qo(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var el=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},tl=class extends Error{constructor(){super("SkipAnimationSignal")}},rl=e=>e instanceof il,nl=1,il=class extends Va{constructor(){super(...arguments),this.id=nl++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ms(this);return e&&e.getValue()}to(...e){return So.to(this,e)}interpolate(...e){return as(`${is}The "interpolate" function is deprecated in v9 (use "to" instead)`),So.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ra(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||aa.sort(this),Ra(this,{type:"priority",parent:this,priority:e})}},ol=Symbol.for("SpringPhase"),al=e=>(1&e[ol])>0,sl=e=>(2&e[ol])>0,ll=e=>(4&e[ol])>0,cl=(e,t)=>t?e[ol]|=3:e[ol]&=-3,ul=(e,t)=>t?e[ol]|=4:e[ol]&=-5,dl=class extends il{constructor(e,t){if(super(),this.animation=new Us,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ro.und(e)||!Ro.und(t)){const r=Ro.obj(e)?{...e}:{...t,from:e};Ro.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(sl(this)||this._state.asyncTo)||ll(this)}get goal(){return La(this.animation.to)}get velocity(){const e=ms(this);return e instanceof ws?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return al(this)}get isAnimating(){return sl(this)}get isPaused(){return ll(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=bs(n.to);!a&&Na(n.to)&&(i=Uo(La(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==xs?1:a?a[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ro.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Ro.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Ro.und(n),p=r==c?s.v0>0:r<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*n,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+o.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(r=!0)}));const s=ms(this),l=s.getValue();if(t){const e=La(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Fo.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(sl(this)){const{to:e,config:t}=this.animation;Fo.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Ro.und(e)?(r=this.queue||[],this.queue=[]):r=[Ro.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Gs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Js(this._state,e&&this._lastCallId),Fo.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Ro.obj(r)?r[t]:r,(null==r||Ms(r))&&(r=void 0),n=Ro.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return al(this)||(e.reverse&&([r,n]=[n,r]),n=La(n),Ro.und(n)?ms(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,zs(e,((e,t)=>/^on/.test(t)?Cs(e,r):e))),bl(this,e,"onProps"),vl(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Qs(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{ll(this)||(ul(this,!0),Zo(o.pauseQueue),vl(this,"onPause",Zs(this,hl(this,this.animation.to)),this))},resume:()=>{ll(this)&&(ul(this,!1),sl(this)&&this._resume(),Zo(o.resumeQueue),vl(this,"onResume",Zs(this,hl(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=pl(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ks(this));const n=!Ro.und(e.to),i=!Ro.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Ks(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Ro.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Vo(d,c);h&&(s.from=d),d=La(d);const p=!Vo(u,l);p&&this._focus(u);const f=Ms(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!f&&function(e,t,r){r&&(Ws(r={...r},t),t={...r,...t}),Ws(e,t),Object.assign(e,t);for(const t in Rs)null==e[t]&&(e[t]=Rs[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Ro.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,As(t.config,o),t.config!==a.config?As(a.config,o):void 0);let b=ms(this);if(!b||Ro.und(u))return r(Zs(this,!0));const v=Ro.und(t.reset)?i&&!t.default:!Ro.und(d)&&Es(t.reset,o),w=v?d:this.get(),x=Ls(u),S=Ro.num(x)||Ro.arr(x)||ls(x),$=!f&&(!S||Es(a.immediate||t.immediate,o));if(p){const e=Bs(u);if(e!==b.constructor){if(!$)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(x)}}const F=b.constructor;let _=Na(u),B=!1;if(!_){const e=v||!al(this)&&h;(p||e)&&(B=Vo(Ls(w),x),_=!B),(Vo(s.immediate,$)||$)&&Vo(g.decay,m)&&Vo(g.velocity,y)||(_=!0)}if(B&&sl(this)&&(s.changed&&!v?_=!0:_||this._stop(l)),!f&&((_||Na(l))&&(s.values=b.getPayload(),s.toValues=Na(u)?null:F==xs?[1]:Uo(x)),s.immediate!=$&&(s.immediate=$,$||v||this._set(l)),_)){const{onRest:e}=s;Wo(yl,(e=>bl(this,t,e)));const n=Zs(this,hl(this,l));Zo(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Fo.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?As(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set(w),f?r(Ys(t.to,t,this._state,this)):_?this._start():sl(this)&&!p?this._pendingCalls.add(r):r(Xs(w))}_focus(e){const t=this.animation;e!==t.to&&(Ma(this)&&this._detach(),t.to=e,Ma(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Na(t)&&(qa(t,this),rl(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Na(e)&&Ua(e,this)}_set(e,t=!0){const r=La(e);if(!Ro.und(r)){const e=ms(this);if(!e||!Vo(r,e.getValue())){const n=Bs(r);e&&e.constructor==n?e.setValue(r):ys(this,n.create(r)),e&&Fo.batchedUpdates((()=>{this._onChange(r,t)}))}}return ms(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,vl(this,"onStart",Zs(this,hl(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),As(this.animation.onChange,e,this)),As(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ms(this).reset(La(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),sl(this)||(cl(this,!0),ll(this)||this._resume())}_resume(){So.skipAnimation?this.finish():aa.start(this)}_stop(e,t){if(sl(this)){cl(this,!1);const r=this.animation;Wo(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Ra(this,{type:"idle",parent:this});const n=t?Ks(this.get()):Zs(this.get(),hl(this,e??r.to));Zo(this._pendingCalls,n),r.changed&&(r.changed=!1,vl(this,"onRest",n,this))}}};function hl(e,t){const r=Ls(t);return Vo(Ls(e.get()),r)}function pl(e,t=e.loop,r=e.to){const n=As(t);if(n){const i=!0!==n&&Ns(n),o=(i||e).reverse,a=!i||i.reset;return fl({...e,loop:t,default:!1,pause:void 0,to:!o||Ms(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function fl(e){const{to:t,from:r}=e=Ns(e),n=new Set;return Ro.obj(t)&&ml(t,n),Ro.obj(r)&&ml(r,n),e.keys=n.size?Array.from(n):null,e}function gl(e){const t=fl(e);return Ro.und(t.default)&&(t.default=zs(t)),t}function ml(e,t){qo(e,((e,r)=>null!=e&&t.add(r)))}var yl=["onStart","onRest","onChange","onPause","onResume"];function bl(e,t,r){e.animation[r]=t[r]!==Is(t,r)?Cs(t[r],e.key):void 0}function vl(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var wl=["onStart","onChange","onRest"],xl=1,Sl=class{constructor(e,t){this.id=xl++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Ro.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(fl(e)),this}start(e){let{queue:t}=this;return e?t=Uo(e).map(fl):this.queue=[],this._flush?this._flush(this,t):(Dl(this,t),$l(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Wo(Uo(t),(t=>r[t].stop(!!e)))}else Js(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ro.und(e))this.start({pause:!0});else{const t=this.springs;Wo(Uo(e),(e=>t[e].pause()))}return this}resume(e){if(Ro.und(e))this.start({pause:!1});else{const t=this.springs;Wo(Uo(e),(e=>t[e].resume()))}return this}each(e){qo(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Qo(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Qo(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Qo(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Fo.onFrame(this._onFrame)}};function $l(e,t){return Promise.all(t.map((t=>Fl(e,t)))).then((t=>Gs(e,t)))}async function Fl(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Ro.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Ro.arr(i)||Ro.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Wo(wl,(r=>{const n=t[r];if(Ro.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Zo(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),p=!0===t.cancel||!0===Is(t,"cancel");(u||p&&d.asyncId)&&h.push(Qs(++e._lastAsyncId,{props:t,state:d,actions:{pause:Mo,resume:Mo,start(t,r){p?(Js(d,e._lastAsyncId),r(Ks(e))):(t.onRest=s,r(Ys(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Gs(e,await Promise.all(h));if(a&&f.finished&&(!r||!f.noop)){const r=pl(t,a,i);if(r)return Dl(e,[r]),Fl(e,r,!0)}return l&&Fo.batchedUpdates((()=>l(f,e,e.item))),f}function _l(e,t){const r={...e.springs};return t&&Wo(Uo(t),(e=>{Ro.und(e.keys)&&(e=fl(e)),Ro.obj(e.to)||(e={...e,to:void 0}),Ol(r,e,(e=>kl(e)))})),Bl(e,r),r}function Bl(e,t){qo(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,qa(t,e))}))}function kl(e,t){const r=new dl;return r.key=e,t&&qa(r,t),r}function Ol(e,t,r){t.keys&&Wo(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Dl(e,t){Wo(t,(t=>{Ol(e.springs,t,(t=>kl(t,e)))}))}var jl,Al,El=({children:e,...t})=>{const r=d(Cl),i=t.pause||!!r.pause,l=t.immediate||!!r.immediate;t=function(e,t){const[r]=o((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let l=i;l?Boolean(t&&l.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,l.inputs))||(l={inputs:t,result:e()}):l=r;return s((()=>{n.current=l,i==r&&(r.inputs=r.result=void 0)}),[l]),l.result}((()=>({pause:i,immediate:l})),[i,l]);const{Provider:c}=Cl;return n.createElement(c,{value:t},e)},Cl=(jl=El,Al={},Object.assign(jl,n.createContext(Al)),jl.Provider._context=jl,jl.Consumer._context=jl,jl);El.Provider=Cl.Provider,El.Consumer=Cl.Consumer;var Il=()=>{const e=[],t=function(t){ss(`${is}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Wo(e,((e,i)=>{if(Ro.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Wo(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Wo(e,(e=>e.resume(...arguments))),this},t.set=function(t){Wo(e,((e,r)=>{const n=Ro.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Wo(e,((e,n)=>{if(Ro.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Wo(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Wo(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Ro.fun(e)?e(r,t):e};return t._getProps=r,t};function Pl(e,t){const r=Ro.fun(e),[[n],i]=function(e,t,r){const n=Ro.fun(t)&&t;n&&!r&&(r=[]);const i=h((()=>n||3==arguments.length?Il():void 0),[]),o=a(0),s=ds(),l=h((()=>({ctrls:[],queue:[],flush(e,t){const r=_l(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?$l(e,t):new Promise((n=>{Bl(e,r),l.queue.push((()=>{n($l(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],p=fs(e)||0;function f(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new Sl(null,l.flush)),r=n?n(i,e):t[i];r&&(u[i]=gl(r))}}h((()=>{Wo(c.current.slice(e,p),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),r);const g=c.current.map(((e,t)=>_l(e,u[t]))),m=d(El),y=fs(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);cs((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Wo(e,(e=>e()))),Wo(c.current,((e,t)=>{i?.add(e),b&&e.start({default:m});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),hs((()=>()=>{Wo(l.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var zl=class extends il{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Da(...t);const r=this._get(),n=Bs(r);ys(this,n.create(r))}advance(e){const t=this._get();Vo(t,this.get())||(ms(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Hl(this._active)&&Nl(this)}_get(){const e=Ro.arr(this.source)?this.source.map(La):Uo(La(this.source));return this.calc(...e)}_start(){this.idle&&!Hl(this._active)&&(this.idle=!1,Wo(bs(this),(e=>{e.done=!1})),So.skipAnimation?(Fo.batchedUpdates((()=>this.advance())),Nl(this)):aa.start(this))}_attach(){let e=1;Wo(Uo(this.source),(t=>{Na(t)&&qa(t,this),rl(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Wo(Uo(this.source),(e=>{Na(e)&&Ua(e,this)})),this._active.clear(),Nl(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Uo(this.source).reduce(((e,t)=>Math.max(e,(rl(t)?t.priority:0)+1)),0))}};function Tl(e){return!1!==e.idle}function Hl(e){return!e.size||Array.from(e).every(Tl)}function Nl(e){e.idle||(e.idle=!0,Wo(bs(e),(e=>{e.done=!0})),Ra(e,{type:"idle",parent:e}))}So.assign({createStringInterpolator:ns,to:(e,t)=>new zl(e,t)});var Ll=/^--/;function Ml(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ll.test(e)||Vl.hasOwnProperty(e)&&Vl[e]?(""+t).trim():t+"px"}var Rl={};var Vl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wl=["Webkit","Ms","Moz","O"];Vl=Object.keys(Vl).reduce(((e,t)=>(Wl.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Vl);var ql=/^(matrix|translate|scale|rotate|skew)/,Ul=/^(translate)/,Ql=/^(rotate|skew)/,Gl=(e,t)=>Ro.num(e)&&0!==e?e+t:e,Xl=(e,t)=>Ro.arr(e)?e.every((e=>Xl(e,t))):Ro.num(e)?e===t:parseFloat(e)===t,Zl=class extends $s{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Gl(e,"px"))).join(",")})`,Xl(e,0)]))),qo(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(ql.test(t)){if(delete n[t],Ro.und(e))return;const r=Ul.test(t)?"px":Ql.test(t)?"deg":"";i.push(Uo(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Gl(i,r)})`,Xl(i,0)]:e=>[`${t}(${e.map((e=>Gl(e,r))).join(",")})`,Xl(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Kl(i,o)),super(n)}},Kl=class extends Va{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Wo(this.inputs,((r,n)=>{const i=La(r[0]),[o,a]=this.transforms[n](Ro.arr(i)?i:r.map(La));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Wo(this.inputs,(e=>Wo(e,(e=>Na(e)&&qa(e,this)))))}observerRemoved(e){0==e&&Wo(this.inputs,(e=>Wo(e,(e=>Na(e)&&Ua(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ra(this,e)}};So.assign({batchedUpdates:p,createStringInterpolator:ns,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Yl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new $s(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=js(e)||"Anonymous";return(e=Ro.str(e)?o[e]||(o[e]=ks(e,i)):e[Ds]||(e[Ds]=ks(e,i))).displayName=`Animated(${t})`,e};return qo(e,((t,r)=>{Ro.arr(e)&&(r=js(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Rl[t]||(Rl[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Ml(t,n[t]);Ll.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Zl(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Jl=Yl.animated;const ec=(e,t,r)=>t?$i(r,t)||$i(e,t):r||e,tc=(e,t)=>{const r=t||e.defaultValue;return $i(e.collections,r)};var rc;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(rc||(rc={}));const nc={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ic=e=>t=>{const r=t.theme,n=tc(nc,r[rc.colorScheme]);return r.options&&r.options.color?ec(n,e,r.options.color):ec(n,e)},oc={Brand:{1:ic("Brand.1"),2:ic("Brand.2"),3:ic("Brand.3"),4:ic("Brand.4"),5:ic("Brand.5"),6:ic("Brand.6")},Primary:ic("Primary"),PrimaryDark:ic("PrimaryDark"),Secondary:ic("Secondary"),Accent:{Light:{1:ic("Accent.Light.1"),2:ic("Accent.Light.2"),3:ic("Accent.Light.3"),4:ic("Accent.Light.4"),5:ic("Accent.Light.5"),6:ic("Accent.Light.6")},Dark:{1:ic("Accent.Dark.1"),2:ic("Accent.Dark.2"),3:ic("Accent.Dark.3")}},Neutral:{1:ic("Neutral.1"),2:ic("Neutral.2"),3:ic("Neutral.3"),4:ic("Neutral.4"),5:ic("Neutral.5"),6:ic("Neutral.6"),7:ic("Neutral.7"),8:ic("Neutral.8")},Validation:{Green:{Text:ic("Validation.Green.Text"),Icon:ic("Validation.Green.Icon"),Border:ic("Validation.Green.Border"),Background:ic("Validation.Green.Background")},Orange:{Text:ic("Validation.Orange.Text"),Icon:ic("Validation.Orange.Icon"),Border:ic("Validation.Orange.Border"),Background:ic("Validation.Orange.Background"),Badge:ic("Validation.Orange.Badge")},Red:{Text:ic("Validation.Red.Text"),Icon:ic("Validation.Red.Icon"),Border:ic("Validation.Red.Border"),Background:ic("Validation.Red.Background")},Blue:{Text:ic("Validation.Blue.Text"),Icon:ic("Validation.Blue.Icon"),Border:ic("Validation.Blue.Border"),Background:ic("Validation.Blue.Background")}},Shadow:{Accent:ic("Shadow.Accent"),Red:ic("Shadow.Red"),Elevation:ic("Shadow.Elevation")}},ac={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},sc=e=>Object.keys(ac).reduce(((t,r)=>{const n=ac[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),lc=sc("max-width"),cc=(sc("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),uc=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,dc=f.div`
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
    animation: ${uc} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,hc=f(dc)`
    animation-delay: -0.45s;
`,pc=f(dc)`
    animation-delay: -0.3s;
`,fc=f(dc)`
    animation-delay: -0.15s;
`,gc={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},mc={collections:{base:{D1:{fontFamily:gc.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:gc.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:gc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:gc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:gc.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:gc.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:gc.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:gc.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:gc.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:gc.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:gc.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:gc.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:gc.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:gc.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},yc=e=>t=>{const r=t.theme,n=tc(mc,r[rc.textStyleScheme]);return r.options&&r.options.textStyle?ec(n,e,r.options.textStyle):ec(n,e)},bc={D1:{fontFamily:yc("D1.fontFamily"),fontSize:yc("D1.fontSize"),fontWeight:yc("D1.fontWeight"),lineHeight:yc("D1.lineHeight"),letterSpacing:yc("D1.letterSpacing")},D2:{fontFamily:yc("D2.fontFamily"),fontSize:yc("D2.fontSize"),fontWeight:yc("D2.fontWeight"),lineHeight:yc("D2.lineHeight"),letterSpacing:yc("D2.letterSpacing")},D3:{fontFamily:yc("D3.fontFamily"),fontSize:yc("D3.fontSize"),fontWeight:yc("D3.fontWeight"),lineHeight:yc("D3.lineHeight"),letterSpacing:yc("D3.letterSpacing")},D4:{fontFamily:yc("D4.fontFamily"),fontSize:yc("D4.fontSize"),fontWeight:yc("D4.fontWeight"),lineHeight:yc("D4.lineHeight"),letterSpacing:yc("D4.letterSpacing")},DBody:{fontFamily:yc("DBody.fontFamily"),fontSize:yc("DBody.fontSize"),fontWeight:yc("DBody.fontWeight"),lineHeight:yc("DBody.lineHeight"),letterSpacing:yc("DBody.letterSpacing")},H1:{fontFamily:yc("H1.fontFamily"),fontSize:yc("H1.fontSize"),fontWeight:yc("H1.fontWeight"),lineHeight:yc("H1.lineHeight"),letterSpacing:yc("H1.letterSpacing")},H2:{fontFamily:yc("H2.fontFamily"),fontSize:yc("H2.fontSize"),fontWeight:yc("H2.fontWeight"),lineHeight:yc("H2.lineHeight"),letterSpacing:yc("H2.letterSpacing")},H3:{fontFamily:yc("H3.fontFamily"),fontSize:yc("H3.fontSize"),fontWeight:yc("H3.fontWeight"),lineHeight:yc("H3.lineHeight"),letterSpacing:yc("H3.letterSpacing")},H4:{fontFamily:yc("H4.fontFamily"),fontSize:yc("H4.fontSize"),fontWeight:yc("H4.fontWeight"),lineHeight:yc("H4.lineHeight"),letterSpacing:yc("H4.letterSpacing")},H5:{fontFamily:yc("H5.fontFamily"),fontSize:yc("H5.fontSize"),fontWeight:yc("H5.fontWeight"),lineHeight:yc("H5.lineHeight"),letterSpacing:yc("H5.letterSpacing")},H6:{fontFamily:yc("H6.fontFamily"),fontSize:yc("H6.fontSize"),fontWeight:yc("H6.fontWeight"),lineHeight:yc("H6.lineHeight"),letterSpacing:yc("H6.letterSpacing")},Body:{fontFamily:yc("Body.fontFamily"),fontSize:yc("Body.fontSize"),fontWeight:yc("Body.fontWeight"),lineHeight:yc("Body.lineHeight"),letterSpacing:yc("Body.letterSpacing")},BodySmall:{fontFamily:yc("BodySmall.fontFamily"),fontSize:yc("BodySmall.fontSize"),fontWeight:yc("BodySmall.fontWeight"),lineHeight:yc("BodySmall.lineHeight"),letterSpacing:yc("BodySmall.letterSpacing")},XSmall:{fontFamily:yc("XSmall.fontFamily"),fontSize:yc("XSmall.fontSize"),fontWeight:yc("XSmall.fontWeight"),lineHeight:yc("XSmall.lineHeight"),letterSpacing:yc("XSmall.letterSpacing")}},vc=e=>{switch(e){case 700:case"bold":return gc.Bold;case 600:case"semibold":return gc.Semibold;case 300:case"light":return gc.Light;case 400:case"regular":return gc.Regular;default:return""}},wc=(e,t)=>r=>{var n;const i=bc[e].fontFamily(r),o=bc[e].fontWeight(r);return Object.values(gc).includes(i)?m`
                font-family: ${vc(t)||vc(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(n=xc(t)||o)&&void 0!==n?n:"normal"};
        `},xc=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Sc=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$c=(e,t,r=!1)=>n=>{const i=bc[e],o=i.fontSize(n);return m`
            ${wc(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${m`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Fc=(e=!1,t=!1,r=void 0)=>t?m`
            display: block;
            ${Sc(r)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${Sc(r)}
        `;var _c;!function(e){e.D1=f.h1`
        ${e=>m`
                ${$c("D1",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${$c("D2",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${$c("D3",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${$c("D4",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${$c("DBody",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${$c("H1",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${$c("H2",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${$c("H3",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${$c("H4",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${$c("H5",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${$c("H6",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${$c("Body",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${$c("BodySmall",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${$c("XSmall",e.weight,e.paragraph)}
                color: ${oc.Neutral[1]};
                ${Fc(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Oc(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Oc(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(_c||(_c={}));const Bc=f.a`
    ${e=>m`
            ${$c(e.textStyle,e.weight)}
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
`,kc=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Oc=r=>{var{external:n=!1,children:i}=r,o=k(r,["external","children"]);return e(Bc,Object.assign({},o,{children:[i,n&&t(kc,{})]}))};var Dc;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Dc||(Dc={}));const jc={collections:{base:{InputBoxShadow:m`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ac=e=>t=>{var r;const n=t.theme,i=tc(jc,n[rc.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?ec(i,e,n.options.designToken):ec(i,e)},Ec={InputBoxShadow:Ac("InputBoxShadow"),InputErrorBoxShadow:Ac("InputErrorBoxShadow"),ElevationBoxShadow:Ac("ElevationBoxShadow"),Table:{Header:Ac("Table.Header"),Cell:{Primary:Ac("Table.Cell.Primary"),Secondary:Ac("Table.Cell.Secondary"),Selected:Ac("Table.Cell.Selected"),Hover:Ac("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ac("Button.Danger.BackgroundColor"),Hover:Ac("Button.Danger.Hover"),Primary:Ac("Button.Danger.Primary"),Border:Ac("Button.Danger.Border")}}};f.button`
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
                        ${e.$buttonIsDanger?Ec.Button.Danger.Border:oc.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Ec.Button.Danger.Primary:oc.Primary};
                    }
                `;case"light":return m`
                    background-color: ${oc.Neutral[8]};
                    border: 1px solid ${oc.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Ec.Button.Danger.Primary:oc.Primary};
                    }
                `;case"disabled":return m`
                    background-color: ${oc.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${oc.Neutral[3]};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ec.Button.Danger.Primary:oc.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Ec.Button.Danger.Hover:oc.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?Ec.Button.Danger.BackgroundColor:oc.Primary};
                    border: 1px solid transparent;

                    ${lc.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${oc.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${$c("H5","semibold")}
                    }

                    ${lc.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${$c("H4","semibold")}
                    }

                    ${lc.mobileS} {
                        height: auto;
                    }
                `}
`;const Cc=f((({color:r,className:n,size:i=18})=>e(cc,Object.assign({className:n,$size:i,$color:r},{children:[t(dc,{id:"inner1",$size:i-2,$borderWidth:2}),t(hc,{id:"inner2",$size:i-2,$borderWidth:2}),t(pc,{id:"inner3",$size:i-2,$borderWidth:2}),t(fc,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ec.Button.Danger.Primary:oc.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=oc.Neutral[3](e);break;default:t=oc.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Ic;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Ic||(Ic={}));const Pc=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,zc=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return m`
            height: ${t};
            width: ${r};
        `}}

    svg {
        animation: 200ms ease-in-out ${Pc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?oc.Neutral[4](e):e.$unchecked?oc.Accent.Light[2](e):oc.Primary(e)};
    }
`,Tc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Hc=f(Jl.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Nc=f.ul`
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

    ${lc.mobileL} {
        max-height: 15rem;
    }
`,Lc=f.li`
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
        outline-color: ${oc.Accent.Light[3]};
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
    ${$c("Body","regular")}
    color: ${oc.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}
`,Wc=f.div`
    color: ${oc.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Rc}

    ${e=>"next-line"===e.$labelDisplayType?m`
                    ${$c("BodySmall","semibold")}
                `:m`
                    ${$c("Body","regular")}
                `}
`,qc=f.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return m`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return m`
                    ${Vc} {
                        display: inline;
                    }

                    ${Wc} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,Uc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Qc=f.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Gc=f((r=>{var{className:n,checked:i,disabled:o,indeterminate:l,onChange:c,onKeyPress:u,displaySize:d="default"}=r,h=k(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=a();s((()=>{p.current.indeterminate=l}),[l]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;c&&c(e),u&&u(t)}};return e(zc,Object.assign({className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":l?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:d,$disabled:o,$unchecked:!(l||i||o)},{children:[t(Tc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:o},h)),l?t(v,{"data-testid":"indeterminate"}):i?t(w,{"data-testid":"checkmark"}):o?t(x,{"data-testid":"disabled-empty-checkbox"}):t(S,{"data-testid":"empty-checkbox"})]}))}))`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,Xc=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,Zc=f.button`
    ${$c("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${oc.Primary(e)};\n\t\t`}
`,Kc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Yc=f(_c.Body)``,Jc=f(b)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${oc.Validation.Red.Icon};
`,eu=f.button`
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
`,tu=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(eu,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))}));f.div`
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
        box-shadow: ${Ec.InputBoxShadow};
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
                    box-shadow: ${Ec.InputErrorBoxShadow};
                }
            `:void 0}
`;const ru=f.input`
    ${$c("Body","regular")}
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
`,nu=f.li`
    background: ${oc.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,iu=f(ru)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,ou=f(_)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${oc.Neutral[3]};
`,au=f(tu)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${oc.Neutral[3]};
    cursor: pointer;
`,su=f(F)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${oc.Neutral[3]};
`,lu=c(((r,n)=>{const{onClear:i}=r,o=k(r,["onClear"]);return e(nu,{children:[t(ou,{}),t(iu,Object.assign({ref:n},o)),o.value&&t(au,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(su,{})}))]},"search")})),cu=n=>{var{listItems:i,listExtractor:l,valueExtractor:c,onSelectItem:u,listStyleWidth:d,visible:h,enableSearch:p,searchPlaceholder:f="Search",onSearch:g,searchFunction:m,onDismiss:y,disableItemFocus:b,multiSelect:v,selectedItems:w,onSelectAll:x,onRetry:S,itemsLoadState:$="success",itemTruncationType:F="end",itemMaxLines:_=2,labelDisplayType:B="inline",renderListItem:O,onBlur:D,hideNoResultsDisplay:j,renderCustomCallToAction:A}=n,E=k(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction"]);const[C,I]=o(0),[P,z]=o(""),[T,H]=o(i),[N,L]=o(0),M=Pl({height:N}),R=a(),V=a(),W=a([]),q=a(),U=a(),Q=a(C),G=a(T),X=e=>{Q.current=e,I(e)},Z=e=>{G.current=e,H(e)};s((()=>(document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)})),[]),s((()=>{ee(P)}),[P]),s((()=>{if(z(""),h){if(setTimeout((()=>{L(te())})),b)return;q&&q.current?(q.current.focus(),X(-1)):W.current[C]&&W.current[C].focus()}else L(0)}),[h]),s((()=>{if(h){const e=te();L(e)}}),[T,$]),s((()=>{Z(i),z(""),X(0)}),[i]);const K=e=>l?l(e):e.toString(),Y=e=>{if("inline"!==B)return!1;let t=0;V&&V.current&&(t=V.current.getBoundingClientRect().width-60);return Ic.getTextWidth(e,"1.125rem 'Open Sans'")>t*_},J=e=>!!bo(w,(t=>wo(t,e))),ee=e=>{if(""===e)Z(i);else if(m){const t=m(e);Z(t)}else{const t=i.filter((t=>{var r;const n=K(t),i="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(r=n.secondaryLabel)||void 0===r?void 0:r.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));Z(t)}},te=()=>(V&&V.current?V.current.getBoundingClientRect().height:0)+(U.current?U.current.getBoundingClientRect().height:0),re=e=>{if(R&&R.current.contains(e.target))switch(e.code){case"ArrowDown":if(Q.current<G.current.length-1){const e=Q.current+1;W.current[e].focus(),X(e)}break;case"ArrowUp":if(Q.current>0){const e=Q.current-1;W.current[e].focus(),X(Q.current-1)}break;case"Escape":y&&y(!0)}},ne=(e,t)=>{e.preventDefault(),u&&u(t,(e=>c?c(e):e)(t))},ie=e=>{const t=e.target.value;z(t),g&&g()},oe=()=>{z(""),q.current.focus(),g&&g()},ae=()=>{S&&S()},se=()=>{D&&D()},le=n=>e(r,{children:[t(Uc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n})),t(Qc,Object.assign({$maxLines:_,"aria-hidden":!0},{children:n}))]}),ce=r=>{const n=K(r),i="string"==typeof n?n:n.title,o="string"==typeof n?void 0:n.secondaryLabel,a=Y(i),s=o&&Y(o),l=a||s?"next-line":B;return e(qc,Object.assign({$labelDisplayType:l},{children:[t(Vc,Object.assign({$truncateType:F,$maxLines:_,"aria-label":i},{children:"middle"===F&&a?le(i):i})),o&&t(Wc,Object.assign({$truncateType:F,$maxLines:_,$labelDisplayType:B,"aria-label":o},{children:"middle"===F&&s?le(o):o}))]}))},ue=()=>{if(!S||S&&"success"===$)return T.map(((r,n)=>t(Lc,Object.assign({$checked:J(r)&&!v},{children:e(Mc,Object.assign({$hasNextLineLabel:"next-line"===B&&T.length>0&&l&&"string"!=typeof l(T[0]),onClick:e=>{ne(e,r)},ref:e=>W.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:h?0:-1,$multiSelect:v,onBlur:se},{children:[v&&t(Gc,{checked:J(r),displaySize:"small"}),O?O(r,{selected:J(r)}):ce(r)]}))}),((e,t)=>`item_${t}__${c?c(e):e}`)(r,n))))},de=()=>{if(v&&T.length>0&&!P&&"success"===$)return t(Xc,{children:t(Zc,Object.assign({onClick:x,type:"button"},{children:0===w.length?"Select all":"Clear all"}))},"selectAll")},he=()=>{if(!j&&(P||!p)&&0===T.length&&"success"===$)return e(Kc,Object.assign({"data-testid":"list-no-results"},{children:[t(Jc,{"data-testid":"no-result-icon"}),t(Yc,{children:"No results found."})]}),"noResults")},pe=()=>{if(S&&"loading"===$)return e(Kc,Object.assign({"data-testid":"list-loading"},{children:[t(Cc,{$buttonStyle:"secondary",size:24}),t(Yc,{children:"Loading..."})]}),"loading")},fe=()=>{if(S&&"fail"===$)return e(Kc,Object.assign({"data-testid":"list-fail"},{children:[t(Jc,{"data-testid":"load-error-icon"}),t(Yc,{children:"Failed to load."}),t(Zc,Object.assign({onClick:ae,type:"button"},{children:"Try again."}))]}),"noResults")};return t(r,{children:e(Hc,Object.assign({style:M,"data-testid":h?"dropdown-container":"dropdown-container-hidden",ref:R},{children:[(()=>{if(h)return e(Nc,Object.assign({ref:V,"data-testid":"dropdown-list",width:d,role:"list"},E,{children:[(p||m)&&"success"===$?t(lu,{ref:q,onChange:ie,value:P,placeholder:f,"data-testid":"search-input","aria-label":"search-input",tabIndex:h?0:-1,onClear:oe}):null,de(),he(),pe(),fe(),ue()]}))})(),(()=>{if(h&&A)return t("div",Object.assign({ref:U,"data-testid":"custom-cta"},{children:A(y,T)}))})()]}))})},uu="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",du=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,hu=m`
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
        outline: 2px solid ${oc.Accent.Light[3]};
    }
`,pu=f.button`
    ${hu}
    cursor: pointer;
`;f.div`
    ${hu}
`;const fu=g`
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
`,gu=f.div`
    position: relative;
    border: 1px solid ${oc.Neutral[5]};
    border-radius: ${"4px"};
    background: ${oc.Neutral[8]};

    :focus-within {
        border: 1px solid ${oc.Accent.Light[1]};
        box-shadow: ${Ec.InputBoxShadow};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${fu} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${oc.Neutral[6](e)};

                ${pu} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${oc.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${pu} {
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
                    box-shadow: ${Ec.InputErrorBoxShadow};
                }
            `:void 0}
`;f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${uu};
    margin-left: 1rem;
`,f(B)`
    color: ${oc.Neutral[3]};
    height: ${bc.Body.fontSize}rem;
    width: ${bc.Body.fontSize}rem;
`;const mu=f.div`
    height: 1px;
    background: ${oc.Neutral[5]};
    margin: 0 0.5rem;
`,yu=f.div`
    display: flex;
    flex: 1;
`,bu=f(_c.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,vu=f(bu)`
    color: ${oc.Neutral[3]};
`,wu=({children:e,show:r,error:n,disabled:i,testId:o,onBlur:l,readOnly:c,className:u})=>{const d=a();return((e,t,r="window",n)=>{const i=a();s((()=>{i.current=t}),[t]),s((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])})("mousedown",(function(e){if(!i){if(d&&d.current.contains(e.target))return;r&&l()}}),"document"),t(du,Object.assign({className:u},{children:t(gu,Object.assign({ref:d,error:n&&!r,disabled:i,$readOnly:c,expanded:r,"data-testid":o},{children:e}))}))},xu=f.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return m`
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
`,Su=f.div`
    width: 100%; // Force next flex item to break to next line
`,$u=f.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Fu=f($)`
    color: ${oc.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,_u=f.div`
    position: absolute;
    background: ${e=>e.$error?oc.Validation.Red.Border(e):oc.Primary(e)};
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

    ${e=>{if(e.$wrap)return m`
                display: none;
            `}}
`,Bu=({children:r,currentActive:n,error:i,className:o,wrap:a})=>{const[s,l]=r;return e(xu,Object.assign({className:o,$wrap:a},{children:[t($u,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Fu,{}),a&&t(Su,{}),t($u,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(_u,{"data-id":"range-container-indicator",$position:n,$error:i,$wrap:a})]}))};f.input`
    ${$c("Body","regular")}
    color: ${oc.Neutral[1]};

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
        color: ${oc.Neutral[3]};
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
`;const ku=f.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${oc.Neutral[3]};
    background-color: transparent;
    border: none;
`,Ou=f(F)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;f.div`
    display: flex;
    width: 100%;
`;const Du=f.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,ju=f(ku)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,Au=f(pu)`
    padding-right: 2.75rem;
`,Eu=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:l,disabled:c,className:u,readOnly:d,error:h,"data-testid":p,id:f,enableSearch:g=!1,searchFunction:m,searchPlaceholder:y,valueExtractor:b,valueToStringFunction:v,listExtractor:w,displayValueExtractor:x,onSelectOption:S,listStyleWidth:$,onShowOptions:F,onHideOptions:_,onRetry:B,optionsLoadState:O={from:"success",to:"success"},optionTruncationType:D="middle",renderCustomSelectedOption:j,renderListItem:A,renderCustomCallToAction:E}=r,C=k(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,P]=o(),[z,T]=o(),H=a(),N={from:a(),to:a()},[L,M]=o("none");s((()=>{P(null==n?void 0:n.from),T(null==n?void 0:n.to)}),[n]);const R=e=>t=>{t.stopPropagation(),t.preventDefault(),c||d||M("from"===e?"from":"to"===e&&I?"to":"from")},V=e=>{const t="from"===e?I:z;return x?x(t):b?b(t):null==t?void 0:t.toString()},W=(e,t)=>{if("middle"===D){let r=0;return N[e]&&N[e].current&&(r=N[e].current.getBoundingClientRect().width),Ic.truncateOneLine((e=>"string"==typeof e?e:v(e)||e.toString())(t),r,120,8)}return t},q=e=>{!e&&_&&_(),e&&F&&F()},U=e=>{const r="from"===e?I:z;return r?j?j(r):t(bu,Object.assign({truncateType:D},{children:W(e,V(e))})):t(vu,Object.assign({truncateType:D},{children:W(e,i[e])}))},Q=e=>t(yu,Object.assign({onClick:R(e),ref:N[e]},{children:U(e)}));return e(wu,Object.assign({show:"none"!==L,"data-testid":C["data-testid"],error:h&&!("none"!==L),disabled:c,readOnly:d,testId:p,onBlur:()=>{q(!1),M("none"),I&&z||(T(void 0),P(void 0))},className:u},{children:[e(Du,{children:[t(Au,Object.assign({type:"button","data-testid":f||"selector",disabled:c,ref:H,onClick:R()},C,{children:e(Bu,Object.assign({currentActive:(()=>{switch(L){case"from":return"start";case"to":return"end";case"none":return L}})()},{children:[Q("from"),Q("to")]}))})),"none"===L&&I&&z&&!d&&!c&&t(ju,Object.assign({onClick:e=>{e.stopPropagation(),P(void 0),T(void 0),S&&S({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:t(Ou,{"aria-hidden":!0})}))]}),"none"!==L&&t(mu,{}),(()=>{if("none"===L)return null;const e=l[L];if(e&&e.length>0){const r="from"===L?I:z;return t(cu,{listItems:e,onSelectItem:(e,t)=>{return r=e,n=t,"from"===(i=L)?P(r):T(r),q(!1),H&&H.current.focus(),S&&S({[i]:r},n),void("from"===i?(T(void 0),M("to"),q(!0)):M("none"));var r,n,i},onDismiss:()=>(M("none"),q(!1),H&&H.current.focus(),void(I&&z||(T(void 0),P(void 0)))),valueExtractor:b,listExtractor:w,listStyleWidth:$,visible:!0,enableSearch:g,searchPlaceholder:y,searchFunction:m,"data-testid":`${L}-dropdown-list`,selectedItems:r?[r]:[],onRetry:B,itemsLoadState:O[L],itemTruncationType:D,renderListItem:A,renderCustomCallToAction:E})}return null})()]}))};export{Eu as InputRangeSelect};
//# sourceMappingURL=index.js.map
