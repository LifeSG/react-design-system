import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useState as a,isValidElement as l,createRef as c,cloneElement as s,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as p,forwardRef as g,useContext as m}from"react";import v,{css as y,useTheme as b,keyframes as w}from"styled-components";import{ExternalIcon as x}from"@lifesg/react-icons/external";import*as S from"react-dom";import{findDOMNode as $,createPortal as F}from"react-dom";import{ExclamationCircleFillIcon as D}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as B}from"@lifesg/react-icons/square";import{SquareTickFillIcon as E}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as O}from"@lifesg/react-icons/tick";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{MagnifierIcon as A}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as R}from"@lifesg/react-icons/chevron-down";var T="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function C(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1};var M=function(){this.__data__=[],this.size=0};var j=function(e,t){return e===t||e!=e&&t!=t},L=j;var _=function(e,t){for(var n=e.length;n--;)if(L(e[n][0],t))return n;return-1},z=_,I=Array.prototype.splice;var N=function(e){var t=this.__data__,n=z(t,e);return!(n<0)&&(n==t.length-1?t.pop():I.call(t,n,1),--this.size,!0)},P=_;var W=function(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]},Y=_;var V=_;var U=function(e,t){var n=this.__data__,r=V(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Z=M,q=N,X=W,G=function(e){return Y(this.__data__,e)>-1},K=U;function J(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}J.prototype.clear=Z,J.prototype.delete=q,J.prototype.get=X,J.prototype.has=G,J.prototype.set=K;var Q=J,ee=Q;var te=function(){this.__data__=new ee,this.size=0};var ne=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var re=function(e){return this.__data__.get(e)};var oe=function(e){return this.__data__.has(e)},ie="object"==typeof T&&T&&T.Object===Object&&T,ae=ie,le="object"==typeof self&&self&&self.Object===Object&&self,ce=ae||le||Function("return this")(),se=ce.Symbol,ue=se,de=Object.prototype,fe=de.hasOwnProperty,he=de.toString,pe=ue?ue.toStringTag:void 0;var ge=function(e){var t=fe.call(e,pe),n=e[pe];try{e[pe]=void 0;var r=!0}catch(e){}var o=he.call(e);return r&&(t?e[pe]=n:delete e[pe]),o},me=Object.prototype.toString;var ve=ge,ye=function(e){return me.call(e)},be=se?se.toStringTag:void 0;var we=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":be&&be in Object(e)?ve(e):ye(e)};var xe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Se=we,$e=xe;var Fe,De=function(e){if(!$e(e))return!1;var t=Se(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Be=ce["__core-js_shared__"],Ee=(Fe=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var Oe=function(e){return!!Ee&&Ee in e},ke=Function.prototype.toString;var Ae=function(e){if(null!=e){try{return ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Re=De,Te=Oe,Ce=xe,He=Ae,Me=/^\[object .+?Constructor\]$/,je=Function.prototype,Le=Object.prototype,_e=je.toString,ze=Le.hasOwnProperty,Ie=RegExp("^"+_e.call(ze).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ne=function(e){return!(!Ce(e)||Te(e))&&(Re(e)?Ie:Me).test(He(e))},Pe=function(e,t){return null==e?void 0:e[t]};var We=function(e,t){var n=Pe(e,t);return Ne(n)?n:void 0},Ye=We(ce,"Map"),Ve=We(Object,"create"),Ue=Ve;var Ze=function(){this.__data__=Ue?Ue(null):{},this.size=0};var qe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Xe=Ve,Ge=Object.prototype.hasOwnProperty;var Ke=function(e){var t=this.__data__;if(Xe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ge.call(t,e)?t[e]:void 0},Je=Ve,Qe=Object.prototype.hasOwnProperty;var et=Ve;var tt=Ze,nt=qe,rt=Ke,ot=function(e){var t=this.__data__;return Je?void 0!==t[e]:Qe.call(t,e)},it=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this};function at(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}at.prototype.clear=tt,at.prototype.delete=nt,at.prototype.get=rt,at.prototype.has=ot,at.prototype.set=it;var lt=at,ct=Q,st=Ye;var ut=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var dt=function(e,t){var n=e.__data__;return ut(t)?n["string"==typeof t?"string":"hash"]:n.map},ft=dt;var ht=dt;var pt=dt;var gt=dt;var mt=function(e,t){var n=gt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},vt=function(){this.size=0,this.__data__={hash:new lt,map:new(st||ct),string:new lt}},yt=function(e){var t=ft(this,e).delete(e);return this.size-=t?1:0,t},bt=function(e){return ht(this,e).get(e)},wt=function(e){return pt(this,e).has(e)},xt=mt;function St(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}St.prototype.clear=vt,St.prototype.delete=yt,St.prototype.get=bt,St.prototype.has=wt,St.prototype.set=xt;var $t=St,Ft=Q,Dt=Ye,Bt=$t;var Et=Q,Ot=te,kt=ne,At=re,Rt=oe,Tt=function(e,t){var n=this.__data__;if(n instanceof Ft){var r=n.__data__;if(!Dt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Bt(r)}return n.set(e,t),this.size=n.size,this};function Ct(e){var t=this.__data__=new Et(e);this.size=t.size}Ct.prototype.clear=Ot,Ct.prototype.delete=kt,Ct.prototype.get=At,Ct.prototype.has=Rt,Ct.prototype.set=Tt;var Ht=Ct;var Mt=$t,jt=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Lt=function(e){return this.__data__.has(e)};function _t(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Mt;++t<n;)this.add(e[t])}_t.prototype.add=_t.prototype.push=jt,_t.prototype.has=Lt;var zt=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var It=_t,Nt=zt,Pt=function(e,t){return e.has(t)};var Wt=function(e,t,n,r,o,i){var a=1&n,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=i.get(e),u=i.get(t);if(s&&u)return s==t&&u==e;var d=-1,f=!0,h=2&n?new It:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,i):r(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Nt(t,(function(e,t){if(!Pt(h,t)&&(p===e||o(p,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var Yt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var Vt=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Ut=ce.Uint8Array,Zt=j,qt=Wt,Xt=Yt,Gt=Vt,Kt=se?se.prototype:void 0,Jt=Kt?Kt.valueOf:void 0;var Qt=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Ut(e),new Ut(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Zt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=Xt;case"[object Set]":var c=1&r;if(l||(l=Gt),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;r|=2,a.set(e,t);var u=qt(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(Jt)return Jt.call(e)==Jt.call(t)}return!1};var en=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},tn=Array.isArray,nn=en,rn=tn;var on=function(e,t,n){var r=t(e);return rn(e)?r:nn(r,n(e))};var an=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var ln=an,cn=function(){return[]},sn=Object.prototype.propertyIsEnumerable,un=Object.getOwnPropertySymbols,dn=un?function(e){return null==e?[]:(e=Object(e),ln(un(e),(function(t){return sn.call(e,t)})))}:cn;var fn=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var hn=function(e){return null!=e&&"object"==typeof e},pn=we,gn=hn;var mn=function(e){return gn(e)&&"[object Arguments]"==pn(e)},vn=hn,yn=Object.prototype,bn=yn.hasOwnProperty,wn=yn.propertyIsEnumerable,xn=mn(function(){return arguments}())?mn:function(e){return vn(e)&&bn.call(e,"callee")&&!wn.call(e,"callee")},Sn={exports:{}};var $n=function(){return!1};!function(e,t){var n=ce,r=$n,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(Sn,Sn.exports);var Fn=Sn.exports,Dn=/^(?:0|[1-9]\d*)$/;var Bn=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Dn.test(e))&&e>-1&&e%1==0&&e<t};var En=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},On=we,kn=En,An=hn,Rn={};Rn["[object Float32Array]"]=Rn["[object Float64Array]"]=Rn["[object Int8Array]"]=Rn["[object Int16Array]"]=Rn["[object Int32Array]"]=Rn["[object Uint8Array]"]=Rn["[object Uint8ClampedArray]"]=Rn["[object Uint16Array]"]=Rn["[object Uint32Array]"]=!0,Rn["[object Arguments]"]=Rn["[object Array]"]=Rn["[object ArrayBuffer]"]=Rn["[object Boolean]"]=Rn["[object DataView]"]=Rn["[object Date]"]=Rn["[object Error]"]=Rn["[object Function]"]=Rn["[object Map]"]=Rn["[object Number]"]=Rn["[object Object]"]=Rn["[object RegExp]"]=Rn["[object Set]"]=Rn["[object String]"]=Rn["[object WeakMap]"]=!1;var Tn=function(e){return An(e)&&kn(e.length)&&!!Rn[On(e)]};var Cn=function(e){return function(t){return e(t)}},Hn={exports:{}};!function(e,t){var n=ie,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Hn,Hn.exports);var Mn=Hn.exports,jn=Tn,Ln=Cn,_n=Mn&&Mn.isTypedArray,zn=_n?Ln(_n):jn,In=fn,Nn=xn,Pn=tn,Wn=Fn,Yn=Bn,Vn=zn,Un=Object.prototype.hasOwnProperty;var Zn=function(e,t){var n=Pn(e),r=!n&&Nn(e),o=!n&&!r&&Wn(e),i=!n&&!r&&!o&&Vn(e),a=n||r||o||i,l=a?In(e.length,String):[],c=l.length;for(var s in e)!t&&!Un.call(e,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Yn(s,c))||l.push(s);return l},qn=Object.prototype;var Xn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||qn)};var Gn=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Kn=Xn,Jn=Gn,Qn=Object.prototype.hasOwnProperty;var er=De,tr=En;var nr=function(e){return null!=e&&tr(e.length)&&!er(e)},rr=Zn,or=function(e){if(!Kn(e))return Jn(e);var t=[];for(var n in Object(e))Qn.call(e,n)&&"constructor"!=n&&t.push(n);return t},ir=nr;var ar=function(e){return ir(e)?rr(e):or(e)},lr=on,cr=dn,sr=ar;var ur=function(e){return lr(e,sr,cr)},dr=Object.prototype.hasOwnProperty;var fr=function(e,t,n,r,o,i){var a=1&n,l=ur(e),c=l.length;if(c!=ur(t).length&&!a)return!1;for(var s=c;s--;){var u=l[s];if(!(a?u in t:dr.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++s<c;){var g=e[u=l[s]],m=t[u];if(r)var v=a?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===v?g===m||o(g,m,n,r,i):v)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},hr=We(ce,"DataView"),pr=Ye,gr=We(ce,"Promise"),mr=We(ce,"Set"),vr=We(ce,"WeakMap"),yr=we,br=Ae,wr="[object Map]",xr="[object Promise]",Sr="[object Set]",$r="[object WeakMap]",Fr="[object DataView]",Dr=br(hr),Br=br(pr),Er=br(gr),Or=br(mr),kr=br(vr),Ar=yr;(hr&&Ar(new hr(new ArrayBuffer(1)))!=Fr||pr&&Ar(new pr)!=wr||gr&&Ar(gr.resolve())!=xr||mr&&Ar(new mr)!=Sr||vr&&Ar(new vr)!=$r)&&(Ar=function(e){var t=yr(e),n="[object Object]"==t?e.constructor:void 0,r=n?br(n):"";if(r)switch(r){case Dr:return Fr;case Br:return wr;case Er:return xr;case Or:return Sr;case kr:return $r}return t});var Rr=Ht,Tr=Wt,Cr=Qt,Hr=fr,Mr=Ar,jr=tn,Lr=Fn,_r=zn,zr="[object Arguments]",Ir="[object Array]",Nr="[object Object]",Pr=Object.prototype.hasOwnProperty;var Wr=function(e,t,n,r,o,i){var a=jr(e),l=jr(t),c=a?Ir:Mr(e),s=l?Ir:Mr(t),u=(c=c==zr?Nr:c)==Nr,d=(s=s==zr?Nr:s)==Nr,f=c==s;if(f&&Lr(e)){if(!Lr(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new Rr),a||_r(e)?Tr(e,t,n,r,o,i):Cr(e,t,c,n,r,o,i);if(!(1&n)){var h=u&&Pr.call(e,"__wrapped__"),p=d&&Pr.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new Rr),o(g,m,n,r,i)}}return!!f&&(i||(i=new Rr),Hr(e,t,n,r,o,i))},Yr=hn;var Vr=function e(t,n,r,o,i){return t===n||(null==t||null==n||!Yr(t)&&!Yr(n)?t!=t&&n!=n:Wr(t,n,r,o,e,i))},Ur=Ht,Zr=Vr;var qr=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var c=(l=n[o])[0],s=e[c],u=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var d=new Ur;if(r)var f=r(s,u,c,e,t,d);if(!(void 0===f?Zr(u,s,3,r,d):f))return!1}}return!0},Xr=xe;var Gr=function(e){return e==e&&!Xr(e)},Kr=Gr,Jr=ar;var Qr=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},eo=qr,to=function(e){for(var t=Jr(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Kr(o)]}return t},no=Qr;var ro=function(e){var t=to(e);return 1==t.length&&t[0][2]?no(t[0][0],t[0][1]):function(n){return n===e||eo(n,e,t)}},oo=we,io=hn;var ao=function(e){return"symbol"==typeof e||io(e)&&"[object Symbol]"==oo(e)},lo=tn,co=ao,so=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,uo=/^\w*$/;var fo=function(e,t){if(lo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!co(e))||(uo.test(e)||!so.test(e)||null!=t&&e in Object(t))},ho=$t;function po(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(po.Cache||ho),n}po.Cache=ho;var go=po;var mo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vo=/\\(\\)?/g,yo=function(e){var t=go(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mo,(function(e,n,r,o){t.push(r?o.replace(vo,"$1"):n||e)})),t}));var bo=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},wo=bo,xo=tn,So=ao,$o=se?se.prototype:void 0,Fo=$o?$o.toString:void 0;var Do=function e(t){if("string"==typeof t)return t;if(xo(t))return wo(t,e)+"";if(So(t))return Fo?Fo.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Bo=Do;var Eo=tn,Oo=fo,ko=yo,Ao=function(e){return null==e?"":Bo(e)};var Ro=function(e,t){return Eo(e)?e:Oo(e,t)?[e]:ko(Ao(e))},To=ao;var Co=function(e){if("string"==typeof e||To(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Ho=Ro,Mo=Co;var jo=function(e,t){for(var n=0,r=(t=Ho(t,e)).length;null!=e&&n<r;)e=e[Mo(t[n++])];return n&&n==r?e:void 0},Lo=jo;var _o=function(e,t,n){var r=null==e?void 0:Lo(e,t);return void 0===r?n:r},zo=C(_o);var Io=Ro,No=xn,Po=tn,Wo=Bn,Yo=En,Vo=Co;var Uo=function(e,t,n){for(var r=-1,o=(t=Io(t,e)).length,i=!1;++r<o;){var a=Vo(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Yo(o)&&Wo(a,o)&&(Po(e)||No(e))},Zo=function(e,t){return null!=e&&t in Object(e)},qo=Uo;var Xo=Vr,Go=_o,Ko=function(e,t){return null!=e&&qo(e,t,Zo)},Jo=fo,Qo=Gr,ei=Qr,ti=Co;var ni=jo;var ri=function(e){return function(t){return null==t?void 0:t[e]}},oi=function(e){return function(t){return ni(t,e)}},ii=fo,ai=Co;var li=ro,ci=function(e,t){return Jo(e)&&Qo(t)?ei(ti(e),t):function(n){var r=Go(n,e);return void 0===r&&r===t?Ko(n,e):Xo(t,r,3)}},si=function(e){return e},ui=tn,di=function(e){return ii(e)?ri(ai(e)):oi(e)};var fi=function(e){return"function"==typeof e?e:null==e?si:"object"==typeof e?ui(e)?ci(e[0],e[1]):li(e):di(e)},hi=/\s/;var pi=function(e){for(var t=e.length;t--&&hi.test(e.charAt(t)););return t},gi=pi,mi=/^\s+/;var vi=function(e){return e?e.slice(0,gi(e)+1).replace(mi,""):e},yi=xe,bi=ao,wi=/^[-+]0x[0-9a-f]+$/i,xi=/^0b[01]+$/i,Si=/^0o[0-7]+$/i,$i=parseInt;var Fi=function(e){if("number"==typeof e)return e;if(bi(e))return NaN;if(yi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=yi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=vi(e);var n=xi.test(e);return n||Si.test(e)?$i(e.slice(2),n?2:8):wi.test(e)?NaN:+e},Di=1/0;var Bi=function(e){return e?(e=Fi(e))===Di||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Ei=H,Oi=fi,ki=function(e){var t=Bi(e),n=t%1;return t==t?n?t-n:t:0},Ai=Math.max;var Ri=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:ki(n);return o<0&&(o=Ai(r+o,0)),Ei(e,Oi(t),o)},Ti=C(Ri),Ci=function(e,t){return Ci=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Ci(e,t)};var Hi=function(){return Hi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Hi.apply(this,arguments)};var Mi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ji=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Li="object"==typeof Mi&&Mi&&Mi.Object===Object&&Mi,_i="object"==typeof self&&self&&self.Object===Object&&self,zi=Li||_i||Function("return this")(),Ii=zi,Ni=function(){return Ii.Date.now()},Pi=/\s/;var Wi=function(e){for(var t=e.length;t--&&Pi.test(e.charAt(t)););return t},Yi=Wi,Vi=/^\s+/;var Ui=function(e){return e?e.slice(0,Yi(e)+1).replace(Vi,""):e},Zi=zi.Symbol,qi=Zi,Xi=Object.prototype,Gi=Xi.hasOwnProperty,Ki=Xi.toString,Ji=qi?qi.toStringTag:void 0;var Qi=function(e){var t=Gi.call(e,Ji),n=e[Ji];try{e[Ji]=void 0;var r=!0}catch(e){}var o=Ki.call(e);return r&&(t?e[Ji]=n:delete e[Ji]),o},ea=Object.prototype.toString;var ta=Qi,na=function(e){return ea.call(e)},ra=Zi?Zi.toStringTag:void 0;var oa=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ra&&ra in Object(e)?ta(e):na(e)},ia=function(e){return null!=e&&"object"==typeof e};var aa=Ui,la=ji,ca=function(e){return"symbol"==typeof e||ia(e)&&"[object Symbol]"==oa(e)},sa=/^[-+]0x[0-9a-f]+$/i,ua=/^0b[01]+$/i,da=/^0o[0-7]+$/i,fa=parseInt;var ha=ji,pa=Ni,ga=function(e){if("number"==typeof e)return e;if(ca(e))return NaN;if(la(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=la(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=aa(e);var n=ua.test(e);return n||da.test(e)?fa(e.slice(2),n?2:8):sa.test(e)?NaN:+e},ma=Math.max,va=Math.min;var ya=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function g(){var e=pa();if(p(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-c);return d?va(n,i-(e-s)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=pa(),n=p(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(g,t),u?h(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(g,t),h(c)}return void 0===l&&(l=setTimeout(g,t)),a}return t=ga(t)||0,ha(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ma(ga(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},v.flush=function(){return void 0===l?a:m(pa())},v},ba=ya,wa=ji;var xa=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return wa(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ba(e,t,{leading:r,maxWait:t,trailing:o})},Sa=function(e,t,n,r){switch(t){case"debounce":return ya(e,n,r);case"throttle":return xa(e,n,r);default:return e}},$a=function(e){return"function"==typeof e},Fa=function(){return"undefined"==typeof window},Da=function(e){return e instanceof Element||e instanceof HTMLDocument},Ba=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&$a(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Fa()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Fa())return null;if(t)return document.querySelector(t);if(r&&Da(r))return r;if(n.targetRef&&Da(n.targetRef.current))return n.targetRef.current;var o=$(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var c=Ba(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Fa()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return $a(t)?"renderProp":$a(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,Fa()||(n.resizeHandler=Sa(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Ci(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Fa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=o)(c);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(c,["targetRef"]);return s(e,u)}return s(e,c);case"childArray":return(e=o).map((function(e){return!!e&&s(e,c)}));default:return r.createElement(a,null)}}}(u);var Ea=Fa()?d:f;function Oa(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,l=void 0===o?1e3:o,c=e.refreshOptions,s=e.handleWidth,u=void 0===s||s,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),v=i(null),y=null!=h?h:v,b=i(),w=a({width:void 0,height:void 0}),x=w[0],S=w[1];return Ea((function(){if(!Fa()){var e=Ba(g,S,u,f);b.current=Sa((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!Fa()&&e({width:r,height:o}),m.current=!1}))}),r,l,c);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,c,u,f,g,p,y.current]),Hi({ref:y},x)}const ka={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Aa={D1:{fontFamily:ka.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ka.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ka.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ka.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ka.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ka.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ka.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ka.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ka.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ka.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ka.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ka.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ka.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ka.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ra={D1:{fontFamily:ka.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ka.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ka.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ka.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ka.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ka.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ka.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ka.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ka.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ka.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ka.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ka.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ka.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ka.Regular,fontSize:.75,lineHeight:1.125}},Ta=(e,t,n)=>t?zo(n,t)||zo(e,t):n||e,Ca=(e,t)=>{const n=t||e.defaultValue;return zo(e.collections,n)};var Ha;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ha||(Ha={}));const Ma={collections:{base:Aa,oneservice:Ra},defaultValue:"base"},ja=e=>t=>{const n=t.theme,r=Ca(Ma,n[Ha.textStyleScheme]);return n.options&&n.options.textStyle?Ta(r,e,n.options.textStyle):Ta(r,e)},La={D1:{fontFamily:ja("D1.fontFamily"),fontSize:ja("D1.fontSize"),fontWeight:ja("D1.fontWeight"),lineHeight:ja("D1.lineHeight"),letterSpacing:ja("D1.letterSpacing")},D2:{fontFamily:ja("D2.fontFamily"),fontSize:ja("D2.fontSize"),fontWeight:ja("D2.fontWeight"),lineHeight:ja("D2.lineHeight"),letterSpacing:ja("D2.letterSpacing")},D3:{fontFamily:ja("D3.fontFamily"),fontSize:ja("D3.fontSize"),fontWeight:ja("D3.fontWeight"),lineHeight:ja("D3.lineHeight"),letterSpacing:ja("D3.letterSpacing")},D4:{fontFamily:ja("D4.fontFamily"),fontSize:ja("D4.fontSize"),fontWeight:ja("D4.fontWeight"),lineHeight:ja("D4.lineHeight"),letterSpacing:ja("D4.letterSpacing")},DBody:{fontFamily:ja("DBody.fontFamily"),fontSize:ja("DBody.fontSize"),fontWeight:ja("DBody.fontWeight"),lineHeight:ja("DBody.lineHeight"),letterSpacing:ja("DBody.letterSpacing")},H1:{fontFamily:ja("H1.fontFamily"),fontSize:ja("H1.fontSize"),fontWeight:ja("H1.fontWeight"),lineHeight:ja("H1.lineHeight"),letterSpacing:ja("H1.letterSpacing")},H2:{fontFamily:ja("H2.fontFamily"),fontSize:ja("H2.fontSize"),fontWeight:ja("H2.fontWeight"),lineHeight:ja("H2.lineHeight"),letterSpacing:ja("H2.letterSpacing")},H3:{fontFamily:ja("H3.fontFamily"),fontSize:ja("H3.fontSize"),fontWeight:ja("H3.fontWeight"),lineHeight:ja("H3.lineHeight"),letterSpacing:ja("H3.letterSpacing")},H4:{fontFamily:ja("H4.fontFamily"),fontSize:ja("H4.fontSize"),fontWeight:ja("H4.fontWeight"),lineHeight:ja("H4.lineHeight"),letterSpacing:ja("H4.letterSpacing")},H5:{fontFamily:ja("H5.fontFamily"),fontSize:ja("H5.fontSize"),fontWeight:ja("H5.fontWeight"),lineHeight:ja("H5.lineHeight"),letterSpacing:ja("H5.letterSpacing")},H6:{fontFamily:ja("H6.fontFamily"),fontSize:ja("H6.fontSize"),fontWeight:ja("H6.fontWeight"),lineHeight:ja("H6.lineHeight"),letterSpacing:ja("H6.letterSpacing")},Body:{fontFamily:ja("Body.fontFamily"),fontSize:ja("Body.fontSize"),fontWeight:ja("Body.fontWeight"),lineHeight:ja("Body.lineHeight"),letterSpacing:ja("Body.letterSpacing")},BodySmall:{fontFamily:ja("BodySmall.fontFamily"),fontSize:ja("BodySmall.fontSize"),fontWeight:ja("BodySmall.fontWeight"),lineHeight:ja("BodySmall.lineHeight"),letterSpacing:ja("BodySmall.letterSpacing")},XSmall:{fontFamily:ja("XSmall.fontFamily"),fontSize:ja("XSmall.fontSize"),fontWeight:ja("XSmall.fontWeight"),lineHeight:ja("XSmall.lineHeight"),letterSpacing:ja("XSmall.letterSpacing")}},_a=e=>{switch(e){case 700:case"bold":return ka.Bold;case 600:case"semibold":return ka.Semibold;case 300:case"light":return ka.Light;case 400:case"regular":return ka.Regular;default:return""}},za=(e,t)=>n=>{var r;const o=La[e].fontFamily(n),i=La[e].fontWeight(n);return Object.values(ka).includes(o)?y`
                font-family: ${_a(t)||_a(i)||o};
                font-weight: normal !important;
            `:y`
            font-family: ${o};
            font-weight: ${null!==(r=Ia(t)||i)&&void 0!==r?r:"normal"};
        `},Ia=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Na=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Pa=(e,t,n=!1)=>r=>{const o=La[e],i=o.fontSize(r);return y`
            ${za(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Wa=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${Na(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${Na(n)}
        `;function Ya(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const Va={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ua=e=>t=>{const n=t.theme,r=Ca(Va,n[Ha.colorScheme]);return n.options&&n.options.color?Ta(r,e,n.options.color):Ta(r,e)},Za={Brand:{1:Ua("Brand.1"),2:Ua("Brand.2"),3:Ua("Brand.3"),4:Ua("Brand.4"),5:Ua("Brand.5"),6:Ua("Brand.6")},Primary:Ua("Primary"),PrimaryDark:Ua("PrimaryDark"),Secondary:Ua("Secondary"),Accent:{Light:{1:Ua("Accent.Light.1"),2:Ua("Accent.Light.2"),3:Ua("Accent.Light.3"),4:Ua("Accent.Light.4"),5:Ua("Accent.Light.5"),6:Ua("Accent.Light.6")},Dark:{1:Ua("Accent.Dark.1"),2:Ua("Accent.Dark.2"),3:Ua("Accent.Dark.3")}},Neutral:{1:Ua("Neutral.1"),2:Ua("Neutral.2"),3:Ua("Neutral.3"),4:Ua("Neutral.4"),5:Ua("Neutral.5"),6:Ua("Neutral.6"),7:Ua("Neutral.7"),8:Ua("Neutral.8")},Validation:{Green:{Text:Ua("Validation.Green.Text"),Icon:Ua("Validation.Green.Icon"),Border:Ua("Validation.Green.Border"),Background:Ua("Validation.Green.Background")},Orange:{Text:Ua("Validation.Orange.Text"),Icon:Ua("Validation.Orange.Icon"),Border:Ua("Validation.Orange.Border"),Background:Ua("Validation.Orange.Background"),Badge:Ua("Validation.Orange.Badge")},Red:{Text:Ua("Validation.Red.Text"),Icon:Ua("Validation.Red.Icon"),Border:Ua("Validation.Red.Border"),Background:Ua("Validation.Red.Background")},Blue:{Text:Ua("Validation.Blue.Text"),Icon:Ua("Validation.Blue.Icon"),Border:Ua("Validation.Blue.Border"),Background:Ua("Validation.Blue.Background")}},Shadow:{Accent:Ua("Shadow.Accent"),Red:Ua("Shadow.Red"),Elevation:Ua("Shadow.Elevation")}};var qa;!function(e){e.D1=v.h1`
        ${e=>y`
                ${Pa("D1",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${Pa("D2",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${Pa("D3",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${Pa("D4",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${Pa("DBody",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${Pa("H1",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${Pa("H2",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${Pa("H3",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${Pa("H4",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${Pa("H5",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${Pa("H6",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${Pa("Body",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${Pa("BodySmall",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${Pa("XSmall",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${Wa(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ka(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ka(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(qa||(qa={}));const Xa=v.a`
    ${e=>y`
            ${Pa(e.textStyle,e.weight)}
            color: ${Za.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Za.Secondary};

                svg {
                    color: ${Za.Secondary};
                }
            }
        `}
`,Ga=v(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ka=n=>{var{external:r=!1,children:o}=n,i=Ya(n,["external","children"]);return e(Xa,Object.assign({},i,{children:[o,r&&t(Ga,{})]}))};var Ja;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ja||(Ja={}));const Qa={[Ha.colorScheme]:"base",[Ha.textStyleScheme]:"base",[Ha.designTokenScheme]:"base",[Ha.resourceScheme]:"base"};var el;Ha.colorScheme,Ha.textStyleScheme,Ha.designTokenScheme,Ha.resourceScheme,Ha.colorScheme,Ha.textStyleScheme,Ha.designTokenScheme,Ha.resourceScheme,Ha.colorScheme,Ha.textStyleScheme,Ha.designTokenScheme,Ha.resourceScheme,Ha.colorScheme,Ha.textStyleScheme,Ha.designTokenScheme,Ha.resourceScheme,Ha.colorScheme,Ha.textStyleScheme,Ha.designTokenScheme,Ha.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(el||(el={}));const tl=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,nl=v.div`
    ${e=>Pa("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?Za.Primary:Za.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&tl}
`,rl=v.div`
    color: ${Za.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&tl}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${Pa("BodySmall","semibold")}
                `:y`
                    ${Pa("Body","regular")}
                `}
`,ol=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${nl} {
                        display: inline;
                    }

                    ${rl} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,il=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,al=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ll=({displayType:r="inline",label:o,maxLines:i=2,selected:a,sublabel:l,truncationType:c="middle",variant:s})=>{const u=b()||Qa,d=La.Body.fontSize({theme:u}),f=La.Body.fontFamily({theme:u}),{ref:g,width:m}=Oa(),v=h((e=>{if("inline"!==r)return!1;return el.getTextWidth(e,`${d}rem '${f}'`)>m*i-50}),[m,r,d,f,i]),y=p((()=>v(o)),[v,o]),w=p((()=>l&&v(l)),[v,l]),x=y||w?"next-line":r,S=r=>e(n,{children:[t(il,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r})),t(al,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r}))]});return e(ol,Object.assign({ref:g,$labelDisplayType:x},{children:[t(nl,Object.assign({"aria-label":o,$maxLines:i,$selected:a,$truncateType:c,$variant:s},{children:"middle"===c&&y?S(o):o})),l&&t(rl,Object.assign({"aria-label":l,$maxLines:i,$truncateType:c,$labelDisplayType:r},{children:"middle"===c&&w?S(l):l}))]}))};var cl=fi,sl=nr,ul=ar;var dl=function(e){return function(t,n,r){var o=Object(t);if(!sl(t)){var i=cl(n);t=ul(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}},fl=C(dl(Ri)),hl=Vr;var pl=C((function(e,t){return hl(e,t)}));const gl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ml=e=>Object.keys(gl).reduce(((t,n)=>{const r=gl[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),vl=ml("max-width"),yl=(ml("min-width"),v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),bl=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,wl=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Za.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${bl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,xl=v(wl)`
    animation-delay: -0.45s;
`,Sl=v(wl)`
    animation-delay: -0.3s;
`,$l=v(wl)`
    animation-delay: -0.15s;
`,Fl={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${Za.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${Za.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Za.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${Za.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${Za.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Za.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Dl=e=>t=>{var n;const r=t.theme,o=Ca(Fl,r[Ha.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ta(o,e,r.options.designToken):Ta(o,e)},Bl={InputBoxShadow:Dl("InputBoxShadow"),InputErrorBoxShadow:Dl("InputErrorBoxShadow"),ElevationBoxShadow:Dl("ElevationBoxShadow"),Table:{Header:Dl("Table.Header"),Cell:{Primary:Dl("Table.Cell.Primary"),Secondary:Dl("Table.Cell.Secondary"),Selected:Dl("Table.Cell.Selected"),Hover:Dl("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Dl("Button.Danger.BackgroundColor"),Hover:Dl("Button.Danger.Hover"),Primary:Dl("Button.Danger.Primary"),Border:Dl("Button.Danger.Border")}}};v.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Za.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Bl.Button.Danger.Border:Za.Primary};

                    color: ${e.$buttonIsDanger?Bl.Button.Danger.Primary:Za.Primary};
                `;case"light":return y`
                    background-color: ${Za.Neutral[8]};
                    border: 1px solid ${Za.Neutral[5]};

                    color: ${e.$buttonIsDanger?Bl.Button.Danger.Primary:Za.Primary};
                `;case"disabled":return y`
                    background-color: ${Za.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Za.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Bl.Button.Danger.Primary:Za.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Bl.Button.Danger.Hover:Za.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Bl.Button.Danger.BackgroundColor:Za.Primary};
                    border: 1px solid transparent;

                    ${vl.mobileL} {
                        width: 100%;
                    }

                    color: ${Za.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${Pa("H5","semibold")}

                    ${vl.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${Pa("H4","semibold")}

                    ${vl.mobileS} {
                        height: auto;
                    }
                `}
`;const El=v((({color:n,className:r,size:o=18})=>e(yl,Object.assign({className:r,$size:o,$color:n},{children:[t(wl,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(xl,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Sl,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t($l,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Bl.Button.Danger.Primary:Za.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Za.Neutral[3](e);break;default:t=Za.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var Ol={exports:{}};Ol.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],s=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=s("months"),n=(s("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=s("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,c=0;c<l;c+=1){var s=a[c],u=d[s],f=u&&u[0],h=u&&u[1];a[c]=h?{regex:f,parser:h}:s.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,c=o.parser,s=e.slice(r),u=i.exec(s)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var c=!0===a[2],s=!0===a[3],u=c||s,d=a[2];s&&(d=a[2]),i=this.$locale(),!c&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,c=r.minutes,s=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var v=l||0,y=c||0,b=s||0,w=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,w)):new Date(g,m,p,v,y,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var kl,Al,Rl=C(Ol.exports),Tl={exports:{}},Cl=C(Tl.exports=(kl={year:0,month:1,day:2,hour:3,minute:4,second:5},Al={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Al[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Al[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],c=l.type,s=l.value,u=kl[c];u>=0&&(i[u]=parseInt(s,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),c=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var s=c.utcOffset();c=c.add(o-s,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,c=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var s=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),c,l),u=s[0],d=s[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Hl={exports:{}};Hl.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",c="week",s="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,s),i=n-o<0,a=t.clone().add(r+(i?-1:1),s);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:s,y:d,w:c,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var x="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},D=y;D.l=$,D.i=S,D.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case s:return r?h(1,m):h(0,m+1);case c:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?v-w:v+(6-w),m);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,c=D.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[s]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],p=c===l?this.$D+(t-this.$W):t;if(c===s||c===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[D.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=D.p(u),g=function(e){var t=F(h);return D.w(t.date(t.date()+Math.round(e*r)),h)};if(p===s)return this.set(s,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===c)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return D.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,l=this.$M,c=n.weekdays,s=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return l+1;case"MM":return D.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,s,3);case"MMMM":return d(s,l);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=D.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,w=function(){return D.m(g,v)};switch(m){case d:p=w()/12;break;case s:p=w();break;case u:p=w()/3;break;case c:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:D.a(p)},v.daysInMonth=function(){return this.endOf(s).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=B.prototype;return F.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",s],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=$,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var Ml=C(Hl.exports),jl={exports:{}};jl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],c=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var Ll=C(jl.exports),_l={exports:{}};_l.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var zl=C(_l.exports),Il={exports:{}};Il.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Nl,Pl=C(Il.exports);Ml.extend(Ll),Ml.extend(zl),Ml.extend(Pl),Ml.extend(Rl),Ml.extend(Cl),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Ml(t).startOf("week");return Wl(n).map((e=>Yl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Yl(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Ml(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ml(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ml(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Ml(r):void 0,o?Ml(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Nl||(Nl={}));const Wl=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Yl=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Vl=[1,3,5,7,8,10,12],Ul=[4,6,9,11];var Zl,ql,Xl;function Gl(e){const t=i(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Vl.includes(i)?Math.min(o,31).toString():Ul.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Ml(e,n);return Ml(t,n).diff(r,"minute")},e.toDayjs=e=>e?Ml(e):Ml(),e.addMinutesToTime=(e,t,n="HH:mm")=>Ml(e,n).add(t,"minutes").format(n)}(Zl||(Zl={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Ml(e).isBefore(r,"day"))||!(!o||!Ml(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Ml(e).isValid())return e}return""}}(ql||(ql={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Xl||(Xl={}));const Kl=e=>{const t=(e=>{const t=i(e),n=i();return d((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Jl=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Ql=({children:e})=>{const[n,r]=a(-1);return t(Jl.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},ec=y`
    border: 1px solid ${Za.Accent.Light[1]};
    box-shadow: ${Bl.InputBoxShadow};
`,tc=y`
    border: 1px solid ${Za.Accent.Light[1]};
    box-shadow: none;
`,nc=y`
    border: 1px solid ${Za.Neutral[5]};
    box-shadow: none;
`,rc=y`
    border: 1px solid ${Za.Validation.Red.Border};
    box-shadow: ${Bl.InputErrorBoxShadow};
`,oc=v.div`
    border: 1px solid ${Za.Neutral[5]};
    border-radius: 4px;
    background: ${Za.Neutral[8]};

    :focus-within {
        ${ec}
    }
    ${e=>e.$focused&&ec}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${tc}
                }
                ${e.$focused&&tc}
            `:e.$disabled?y`
                background: ${Za.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${nc}
                }
                ${e.$focused&&nc}
            `:e.$error?y`
                border: 1px solid ${Za.Validation.Red.Border};

                :focus-within {
                    ${rc}
                }
                ${e.$focused&&rc}
            `:void 0}
`;v(oc)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ic=v.input`
    ${e=>Pa("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Za.Neutral[1]};
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
        color: ${Za.Neutral[3]};
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
`,ac=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Za.Primary};
    }
`,lc=v.div`
    overflow: hidden;
    border: 1px solid ${Za.Neutral[5]};
    border-radius: 4px;
    background: ${Za.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${vl.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Za.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,cc=v.div`
    background: transparent;
    padding: 0.5rem;
`,sc=v.ul`
    list-style-type: none;
`,uc=v.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${Za.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${Za.Accent.Light[5]};
        `}
`,dc=v(O)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Za.Primary};
`,fc=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,hc=v(E)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Za.Primary};
`,pc=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Za.Accent.Light[2]};
`,gc=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,mc=v(ac)`
    ${e=>Pa("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${Za.Primary};
`,vc=v(mc)`
    outline-offset: 0.25rem;
`,yc=v(mc)`
    padding: 0.5rem 1rem;
`,bc=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,wc=v.div`
    ${e=>Pa("small"===e.$variant?"BodySmall":"Body","regular")}
`,xc=v(D)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${Za.Validation.Red.Icon};
`,Sc=v.button`
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

        ${({$highlight:e})=>e&&y`
                background-color: ${Za.Neutral[7]};
            `}
    }
`,$c=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=Ya(e,["children","focusHighlight","focusOutline","type"]);return t(Sc,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Fc=e=>"small"===e?1:1.125,Dc=e=>y`
        height: ${Fc(e)}rem;
        width: ${Fc(e)}rem;
    `,Bc=v.div`
    background: ${Za.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Ec=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,Oc=v(ic)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,kc=v(A)`
    color: ${Za.Neutral[3]};
    flex-shrink: 0;
    ${e=>Dc(e.$variant)}
`,Ac=v($c)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${Za.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${Dc(e.$variant)}
            }
        `}
`,Rc=g(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=Ya(n,["value","variant","onClear"]);return e(Bc,{children:[e(Ec,{children:[t(kc,{$variant:i,"aria-hidden":!0}),t(Oc,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(Ac,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(k,{"aria-hidden":!0})}))]})})),Tc=({listItems:n,multiSelect:r,selectedItems:o,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:s="end",itemMaxLines:u=2,labelDisplayType:f="inline",variant:h="default",listboxId:p,width:g,onSelectItem:v,onSelectAll:y,onDismiss:b,onRetry:w,valueExtractor:x,listExtractor:S,renderListItem:$,renderCustomCallToAction:F,enableSearch:D,hideNoResultsDisplay:B,searchPlaceholder:E="Search",searchFunction:O,onSearch:k})=>{const{focusedIndex:A,setFocusedIndex:R}=m(Jl),[T,C]=a(""),[H,M]=a(n),j=Kl(c),L=(()=>{const[e,t]=a(!1);return d((()=>{t(!0)}),[]),e})(),_=i(),z=i(),I=i([]),N=i(),P=e=>S?S(e):e.toString(),W=Gl((()=>O(T))),Y=Gl((()=>n.filter((e=>{var t;const n=P(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=T.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),V=(e,t)=>{R(t),null==v||v(e,(e=>x?x(e):e)(e))},U=e=>{const t=e.target.value;C(t),null==k||k()},Z=()=>{var e;C(""),null===(e=N.current)||void 0===e||e.focus(),null==k||k()},q=()=>{null==w||w()};((e,t,n="window",r)=>{const o=i();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),A<H.length-1){const e=A+1;null===(t=I.current[e])||void 0===t||t.focus(),R(e)}break;case"ArrowUp":if(e.preventDefault(),A>0){const e=A-1;null===(n=I.current[e])||void 0===n||n.focus(),R(e)}else 0===A&&N.current&&(N.current.focus(),R(-1));break;case"Space":document.activeElement===I.current[A]&&(e.preventDefault(),H[A]&&V(H[A],A))}})),d((()=>{L||l||(N.current?(R(-1),setTimeout((()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.focus()}),200)):I.current[A]?setTimeout((()=>{var e;return null===(e=I.current[A])||void 0===e?void 0:e.focus()}),200):(R(0),setTimeout((()=>{var e;return null===(e=I.current[0])||void 0===e?void 0:e.focus()}),200)))}),[l,A,L,R]),d((()=>{L&&j&&(l||"success"===c&&N.current&&(R(-1),N.current.focus()))}),[L,j,c,R,l]),d((()=>{M(""===T?n:O?W():Y())}),[W,Y,n,O,T]);const X=e=>r?t(e?hc:pc,{"aria-hidden":!0}):e?t(dc,{"aria-hidden":!0}):t(fc,{}),G=(e,n)=>{const r=P(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(ll,{displayType:f,label:o,maxLines:u,selected:n,sublabel:i,truncationType:s,variant:h})},K=()=>{if(!w||w&&"success"===c)return H.map(((t,n)=>{const i=(e=>!!fl(o,(t=>pl(t,e))))(t),a=n===A;return e(uc,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>V(t,n),onMouseEnter:()=>(e=>{R(e)})(n),ref:e=>I.current[n]=e,role:"option",tabIndex:a?0:-1,$active:a},{children:[X(i),$?$(t,{selected:i}):G(t,i)]}),((e,t)=>`item_${t}__${x?x(e):e}`)(t,n))}))},J=()=>{if((D||O)&&"success"===c)return t(Rc,{ref:N,onChange:U,value:T,placeholder:E,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Z,variant:h})},Q=()=>{if(r&&H.length>0&&!T&&"success"===c)return t(gc,{children:t(yc,Object.assign({onClick:y,type:"button",$variant:h},{children:0===o.length?"Select all":"Clear all"}))})},ee=()=>{if(!B&&(T||!D)&&0===H.length&&"success"===c)return e(bc,Object.assign({"data-testid":"list-no-results"},{children:[t(xc,{"data-testid":"no-result-icon",$variant:h}),t(wc,Object.assign({$variant:h},{children:"No results found."}))]}))},te=()=>{if(w&&"loading"===c){const n="small"===h?16:18;return e(bc,Object.assign({"data-testid":"list-loading"},{children:[t(El,{$buttonStyle:"secondary",size:n}),t(wc,Object.assign({$variant:h},{children:"Loading..."}))]}))}},ne=()=>{if(w&&"fail"===c)return e(bc,Object.assign({"data-testid":"list-fail"},{children:[t(xc,{"data-testid":"load-error-icon",$variant:h}),t(wc,Object.assign({$variant:h},{children:"Failed to load."}))," ",t(vc,Object.assign({onClick:q,type:"button",$variant:h},{children:"Try again."}))]}))};return e(lc,Object.assign({"data-testid":"dropdown-container",ref:_,$width:g},{children:[e(cc,Object.assign({ref:z,"data-testid":"dropdown-list"},{children:[J(),Q(),ee(),te(),ne(),t(sc,Object.assign({role:"listbox",id:p},{children:K()}))]})),(()=>{if(F)return t("div",Object.assign({"data-testid":"custom-cta"},{children:F(b,H)}))})()]}))},Cc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Hc=v(ac)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>Pa("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Mc=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Cc};

    svg {
        color: ${Za.Neutral[3]};
        ${e=>{const t="small"===e.$variant?La.BodySmall.fontSize:La.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,jc=g((({children:n,disabled:r,expanded:o,listboxId:i,readOnly:a,variant:l},c)=>e(Hc,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":"listbox","data-testid":"selector",disabled:r,"aria-controls":i,$variant:l},{children:[n,!a&&t(Mc,Object.assign({$expanded:o,$variant:l},{children:t(R,{"aria-hidden":!0})}))]})))),Lc=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Lc(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const _c=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Lc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Za.Accent.Light[3]};
    }
`,zc=v.button`
    ${_c}
    cursor: pointer;
`;v.div`
    ${_c}
`;const Ic=w`
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
`;v.div`
    position: relative;
    border: 1px solid ${Za.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Za.Neutral[8]};

    :focus-within {
        border: 1px solid ${Za.Accent.Light[1]};
        box-shadow: ${Bl.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Ic} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${Za.Neutral[6](e)};

                ${zc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Za.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${zc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${Za.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Za.Validation.Red.Border(e)};
                    box-shadow: ${Bl.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Cc};
    margin-left: 1rem;
`,v(R)`
    color: ${Za.Neutral[3]};
    ${e=>{let t=La.Body.fontSize;return"small"===e.$variant&&(t=La.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${Za.Neutral[5]};
    margin: 0 0.5rem;
`;const Nc=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Pc=v.div`
    ${e=>Pa("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Wc=v(Pc)`
    color: ${Za.Neutral[3]};
`;function Yc(e){return Zc(e)?(e.nodeName||"").toLowerCase():"#document"}function Vc(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Uc(e){var t;return null==(t=(Zc(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Zc(e){return e instanceof Node||e instanceof Vc(e).Node}function qc(e){return e instanceof Element||e instanceof Vc(e).Element}function Xc(e){return e instanceof HTMLElement||e instanceof Vc(e).HTMLElement}function Gc(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Vc(e).ShadowRoot)}function Kc(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=ns(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Jc(e){return["table","td","th"].includes(Yc(e))}function Qc(e){const t=es(),n=ns(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function es(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function ts(e){return["html","body","#document"].includes(Yc(e))}function ns(e){return Vc(e).getComputedStyle(e)}function rs(e){return qc(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function os(e){if("html"===Yc(e))return e;const t=e.assignedSlot||e.parentNode||Gc(e)&&e.host||Uc(e);return Gc(t)?t.host:t}function is(e){const t=os(e);return ts(t)?e.ownerDocument?e.ownerDocument.body:e.body:Xc(t)&&Kc(t)?t:is(t)}function as(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=is(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=Vc(o);return i?t.concat(a,a.visualViewport||[],Kc(o)?o:[],a.frameElement&&n?as(a.frameElement):[]):t.concat(o,as(o,[],n))}function ls(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function cs(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Gc(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function ss(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function us(e){return!ss().includes("jsdom/")&&(!ds()&&0===e.width&&0===e.height||ds()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function ds(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(ss())}function fs(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function hs(e){return(null==e?void 0:e.ownerDocument)||document}function ps(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function gs(e){return"composedPath"in e?e.composedPath()[0]:e.target}const ms="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function vs(e){return Xc(e)&&e.matches(ms)}function ys(e){e.preventDefault(),e.stopPropagation()}const bs=Math.min,ws=Math.max,xs=Math.round,Ss=Math.floor,$s=e=>({x:e,y:e}),Fs={left:"right",right:"left",bottom:"top",top:"bottom"},Ds={start:"end",end:"start"};function Bs(e,t,n){return ws(e,bs(t,n))}function Es(e,t){return"function"==typeof e?e(t):e}function Os(e){return e.split("-")[0]}function ks(e){return e.split("-")[1]}function As(e){return"x"===e?"y":"x"}function Rs(e){return"y"===e?"height":"width"}function Ts(e){return["top","bottom"].includes(Os(e))?"y":"x"}function Cs(e){return As(Ts(e))}function Hs(e){return e.replace(/start|end/g,(e=>Ds[e]))}function Ms(e){return e.replace(/left|right|bottom|top/g,(e=>Fs[e]))}function js(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Ls(e,t,n){let{reference:r,floating:o}=e;const i=Ts(t),a=Cs(t),l=Rs(a),c=Os(t),s="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(c){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(ks(t)){case"start":h[a]-=f*(n&&s?-1:1);break;case"end":h[a]+=f*(n&&s?-1:1)}return h}async function _s(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:c}=e,{boundary:s="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Es(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===d?"reference":"floating":d],m=js(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:s,rootBoundary:u,strategy:c})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=js(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:c}):v);return{top:(m.top-w.top+p.top)/b.y,bottom:(w.bottom-m.bottom+p.bottom)/b.y,left:(m.left-w.left+p.left)/b.x,right:(w.right-m.right+p.right)/b.x}}function zs(e){const t=ns(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Xc(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=xs(n)!==i||xs(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function Is(e){return qc(e)?e:e.contextElement}function Ns(e){const t=Is(e);if(!Xc(t))return $s(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=zs(t);let a=(i?xs(n.width):n.width)/r,l=(i?xs(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Ps=$s(0);function Ws(e){const t=Vc(e);return es()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Ps}function Ys(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Is(e);let a=$s(1);t&&(r?qc(r)&&(a=Ns(r)):a=Ns(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Vc(e))&&t}(i,n,r)?Ws(i):$s(0);let c=(o.left+l.x)/a.x,s=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=Vc(i),t=r&&qc(r)?Vc(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=Ns(o),t=o.getBoundingClientRect(),r=ns(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,s*=e.y,u*=e.x,d*=e.y,c+=i,s+=a,n=Vc(o),o=n.frameElement}}return js({width:u,height:d,x:c,y:s})}const Vs=[":popover-open",":modal"];function Us(e){return Vs.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Zs(e){return Ys(Uc(e)).left+rs(e).scrollLeft}function qs(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Vc(e),r=Uc(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,c=0;if(o){i=o.width,a=o.height;const e=es();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:l,y:c}}(e,n);else if("document"===t)r=function(e){const t=Uc(e),n=rs(e),r=e.ownerDocument.body,o=ws(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ws(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Zs(e);const l=-n.scrollTop;return"rtl"===ns(r).direction&&(a+=ws(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(Uc(e));else if(qc(t))r=function(e,t){const n=Ys(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Xc(e)?Ns(e):$s(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Ws(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return js(r)}function Xs(e,t){const n=os(e);return!(n===t||!qc(n)||ts(n))&&("fixed"===ns(n).position||Xs(n,t))}function Gs(e,t,n){const r=Xc(t),o=Uc(t),i="fixed"===n,a=Ys(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=$s(0);if(r||!r&&!i)if(("body"!==Yc(t)||Kc(o))&&(l=rs(t)),r){const e=Ys(t,!0,i,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else o&&(c.x=Zs(o));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function Ks(e){return"static"===ns(e).position}function Js(e,t){return Xc(e)&&"fixed"!==ns(e).position?t?t(e):e.offsetParent:null}function Qs(e,t){const n=Vc(e);if(Us(e))return n;if(!Xc(e)){let t=os(e);for(;t&&!ts(t);){if(qc(t)&&!Ks(t))return t;t=os(t)}return n}let r=Js(e,t);for(;r&&Jc(r)&&Ks(r);)r=Js(r,t);return r&&ts(r)&&Ks(r)&&!Qc(r)?n:r||function(e){let t=os(e);for(;Xc(t)&&!ts(t);){if(Qc(t))return t;t=os(t)}return null}(e)||n}const eu={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Uc(r),l=!!t&&Us(t.floating);if(r===a||l&&i)return n;let c={scrollLeft:0,scrollTop:0},s=$s(1);const u=$s(0),d=Xc(r);if((d||!d&&!i)&&(("body"!==Yc(r)||Kc(a))&&(c=rs(r)),Xc(r))){const e=Ys(r);s=Ns(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-c.scrollLeft*s.x+u.x,y:n.y*s.y-c.scrollTop*s.y+u.y}},getDocumentElement:Uc,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Us(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=as(e,[],!1).filter((e=>qc(e)&&"body"!==Yc(e))),o=null;const i="fixed"===ns(e).position;let a=i?os(e):e;for(;qc(a)&&!ts(a);){const t=ns(a),n=Qc(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Kc(a)&&!n&&Xs(e,a))?r=r.filter((e=>e!==a)):o=t,a=os(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=qs(t,n,o);return e.top=ws(r.top,e.top),e.right=bs(r.right,e.right),e.bottom=bs(r.bottom,e.bottom),e.left=ws(r.left,e.left),e}),qs(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Qs,getElementRects:async function(e){const t=this.getOffsetParent||Qs,n=this.getDimensions,r=await n(e.floating);return{reference:Gs(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=zs(e);return{width:t,height:n}},getScale:Ns,isElement:qc,isRTL:function(e){return"rtl"===ns(e).direction}};function tu(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=r,s=Is(e),u=o||i?[...s?as(s):[],...as(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=s&&l?function(e,t){let n,r=null;const o=Uc(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),i();const{left:s,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h={rootMargin:-Ss(u)+"px "+-Ss(o.clientWidth-(s+d))+"px "+-Ss(o.clientHeight-(u+f))+"px "+-Ss(s)+"px",threshold:ws(0,bs(1,c))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==c){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(s,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===s&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),s&&!c&&p.observe(s),p.observe(t));let g=c?Ys(e):null;return c&&function t(){const r=Ys(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,c&&cancelAnimationFrame(f)}}const nu=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Os(n),l=ks(n),c="y"===Ts(n),s=["left","top"].includes(a)?-1:1,u=i&&c?-1:1,d=Es(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),c?{x:h*u,y:f*s}:{x:f*s,y:h*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+c.x,y:i+c.y,data:{...c,placement:a}}}}},ru=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Es(e,t),s={x:n,y:r},u=await _s(t,c),d=Ts(Os(o)),f=As(d);let h=s[f],p=s[d];if(i){const e="y"===f?"bottom":"right";h=Bs(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=Bs(p+u["y"===d?"top":"left"],p,p-u[e])}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},ou=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:c,elements:s}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Es(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=Os(o),y=Os(l)===l,b=await(null==c.isRTL?void 0:c.isRTL(s.floating)),w=f||(y||!g?[Ms(l)]:function(e){const t=Ms(e);return[Hs(e),t,Hs(t)]}(l));f||"none"===p||w.push(...function(e,t,n,r){const o=ks(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Os(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(Hs)))),i}(l,g,p,b));const x=[l,...w],S=await _s(t,m),$=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(S[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=ks(e),o=Cs(e),i=Rs(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Ms(a)),[a,Ms(a)]}(o,a,b);$.push(S[e[0]],S[e[1]])}if(F=[...F,{placement:o,overflows:$}],!$.every((e=>e<=0))){var D,B;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(B=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:B.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},iu=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=Es(e,t),c=await _s(t,l),s=Os(n),u=ks(n),d="y"===Ts(n),{width:f,height:h}=r.floating;let p,g;"top"===s||"bottom"===s?(p=s,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=s,p="end"===u?"top":"bottom");const m=h-c.top-c.bottom,v=f-c.left-c.right,y=bs(h-c[p],m),b=bs(f-c[g],v),w=!t.middlewareData.shift;let x=y,S=b;if(d?S=u||w?bs(b,v):v:x=u||w?bs(y,m):m,w&&!u){const e=ws(c.left,0),t=ws(c.right,0),n=ws(c.top,0),r=ws(c.bottom,0);d?S=f-2*(0!==e||0!==t?e+t:ws(c.left,c.right)):x=h-2*(0!==n||0!==r?n+r:ws(c.top,c.bottom))}await a({...t,availableWidth:S,availableHeight:x});const $=await o.getDimensions(i.floating);return f!==$.width||h!==$.height?{reset:{rects:!0}}:{}}}},au=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:c=!0,crossAxis:s=!0}=Es(e,t),u={x:n,y:r},d=Ts(o),f=As(d);let h=u[f],p=u[d];const g=Es(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(s){var v,y;const e="y"===f?"width":"height",t=["top","left"].includes(Os(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(v=a.offset)?void 0:v[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(y=a.offset)?void 0:y[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},lu=(e,t,n)=>{const r=new Map,o={platform:eu,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let s=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Ls(s,r,c),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:v,data:y,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:s,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=v?v:d,h={...h,[i]:{...h[i],...y}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(s=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=Ls(s,f,c))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var cu="undefined"!=typeof document?f:d;function su(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!su(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!su(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function uu(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function du(e,t){const n=uu(e);return Math.round(t*n)/n}function fu(e){const t=r.useRef(e);return cu((()=>{t.current=e})),t}const hu=(e,t)=>({...ru(e),options:[e,t]}),pu=(e,t)=>({...au(e),options:[e,t]}),gu=(e,t)=>({...ou(e),options:[e,t]}),mu=(e,t)=>({...iu(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var vu=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),yu="undefined"==typeof Element,bu=yu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,wu=!yu&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},xu=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Su=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!xu(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),c=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:a,candidates:c})}else{bu.call(a,vu)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var s=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!xu(s,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(s&&u){var d=e(!0===s?a.children:s.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},$u=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Fu=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!$u(e)?0:e.tabIndex},Du=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Bu=function(e){return"INPUT"===e.tagName},Eu=function(e){return function(e){return Bu(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||wu(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Ou=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},ku=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=bu.call(e,"details>summary:first-of-type")?e.parentElement:e;if(bu.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Ou(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=wu(e);if(a&&!a.shadowRoot&&!0===r(a))return Ou(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&wu(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var c,s,u;l=!(null===(s=a=null===(c=i=wu(a))||void 0===c?void 0:c.host)||void 0===s||null===(u=s.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Au=function(e,t){return!(t.disabled||xu(t)||function(e){return Bu(e)&&"hidden"===e.type}(t)||ku(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!bu.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},Ru=function(e,t){return!(Eu(t)||Fu(t)<0||!Au(e,t))},Tu=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Cu=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=Fu(e);return n<0&&t&&!$u(e)?0:n}(a,i),c=i?e(t.candidates):a;0===l?i?n.push.apply(n,c):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:c})})),r.sort(Du).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},Hu=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Su([e],t.includeContainer,{filter:Ru.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Tu}):function(e,t,n){if(xu(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(vu));return t&&bu.call(e,vu)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,Ru.bind(null,t)),Cu(n)},Mu=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==bu.call(e,vu)&&Ru(t,e)};const ju={...r},Lu=ju.useInsertionEffect||(e=>e());function _u(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Lu((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let zu=0;function Iu(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(zu);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():zu=requestAnimationFrame(i)}var Nu="undefined"!=typeof document?f:d;function Pu(){return Pu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pu.apply(this,arguments)}let Wu=!1,Yu=0;const Vu=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Yu++;const Uu=ju.useId||function(){const[e,t]=r.useState((()=>Wu?Vu():void 0));return Nu((()=>{null==e&&t(Vu())}),[]),r.useEffect((()=>{Wu=!0}),[]),e};let Zu;"production"!==process.env.NODE_ENV&&(Zu=new Set);const qu=r.createContext(null),Xu=r.createContext(null),Gu=()=>{var e;return(null==(e=r.useContext(qu))?void 0:e.id)||null},Ku=()=>r.useContext(Xu);function Ju(e){return"data-floating-ui-"+e}function Qu(e){const t=i(e);return Nu((()=>{t.current=e})),t}function ed(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let td=new WeakMap,nd=new WeakSet,rd={},od=0;const id=e=>e&&(e.host||id(e.parentNode)),ad=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=id(t);return e.contains(n)?n:null})).filter((e=>null!=e));function ld(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=hs(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=ad(t,e),l=new Set,c=new Set(a),s=[];rd[o]||(rd[o]=new WeakMap);const u=rd[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!c.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==Yc(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(td.get(t)||0)+1,a=(u.get(t)||0)+1;td.set(t,r),u.set(t,a),s.push(t),1===r&&n&&nd.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),od++,()=>{s.forEach((e=>{const t=(td.get(e)||0)-1,n=(u.get(e)||0)-1;td.set(e,t),u.set(e,n),t||(!nd.has(e)&&i&&e.removeAttribute(i),nd.delete(e)),n||e.removeAttribute(o)})),od--,od||(td=new WeakMap,td=new WeakMap,nd=new WeakSet,rd={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const cd=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function sd(e,t){const n=Hu(e,cd());"prev"===t&&n.reverse();const r=n.indexOf(ls(hs(e)));return n.slice(r+1)[0]}function ud(){return sd(document.body,"next")}function dd(){return sd(document.body,"prev")}function fd(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!cs(n,r)}function hd(e){Hu(e,cd()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function pd(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const gd={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function md(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const vd=r.forwardRef((function(e,t){const[n,o]=r.useState();Nu((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",md),()=>{document.removeEventListener("keydown",md)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Ju("focus-guard")]:"",style:gd};return r.createElement("span",Pu({},e,i))})),yd=r.createContext(null),bd=Ju("portal");function wd(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=Uu(),i=xd(),[a,l]=r.useState(null),c=r.useRef(null);return Nu((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{c.current=null}))}),[a]),Nu((()=>{if(!o)return;if(c.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(bd,""),e.appendChild(n),c.current=n,l(n)}),[t,o]),Nu((()=>{if(!o)return;if(c.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!qc(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(bd,""),e=r||e,e.appendChild(a),c.current=a,l(a)}),[t,n,o,i]),a}({id:n,root:o}),[l,c]=r.useState(null),s=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&fd(e)){("focusin"===e.type?pd:hd)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(yd.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:s,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:c})),[i,a])},h&&a&&r.createElement(vd,{"data-type":"outside",ref:s,onFocus:e=>{if(fd(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=dd()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:gd}),a&&F(t,a),h&&a&&r.createElement(vd,{"data-type":"outside",ref:u,onFocus:e=>{if(fd(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=ud()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const xd=()=>r.useContext(yd),Sd=20;let $d=[];function Fd(e){$d=$d.filter((e=>e.isConnected));let t=e;if(t&&"body"!==Yc(t)){if(!Mu(t,cd())){const e=Hu(t,cd())[0];e&&(t=e)}$d.push(t),$d.length>Sd&&($d=$d.slice(-Sd))}}function Dd(){return $d.slice().reverse().find((e=>e.isConnected))}const Bd=r.forwardRef((function(e,t){return r.createElement("button",Pu({},e,{type:"button",ref:t,tabIndex:-1,style:gd}))}));function Ed(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:c=!0,modal:s=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:v,elements:{domReference:y,floating:b}}=t,w="number"==typeof l&&l<0,x=!!(S=y)&&"combobox"===S.getAttribute("role")&&vs(S)&&w;var S;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,F=Qu(i),D=Qu(l),B=Qu(c),E=Ku(),O=xd(),k=r.useRef(null),A=r.useRef(null),R=r.useRef(!1),T=r.useRef(!1),C=null!=O,H=r.useCallback((function(e){return void 0===e&&(e=b),e?Hu(e,cd()):[]}),[b]),M=r.useCallback((e=>{const t=H(e);return F.current.map((e=>y&&"reference"===e?y:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[y,b,F,H]);function j(e){return!o&&u&&s?r.createElement(Bd,{ref:"start"===e?k:A,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!s)return;function e(e){if("Tab"===e.key){cs(b,ls(hs(b)))&&0===H().length&&!x&&ys(e);const t=M(),n=gs(e);"reference"===F.current[0]&&n===y&&(ys(e),e.shiftKey?Iu(t[t.length-1]):Iu(t[1])),"floating"===F.current[1]&&n===b&&e.shiftKey&&(ys(e),Iu(t[0]))}}const t=hs(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,y,b,s,F,x,H,M]),r.useEffect((()=>{if(!o&&d)return b&&Xc(y)?(y.addEventListener("focusout",t),y.addEventListener("pointerdown",e),!s&&b.addEventListener("focusout",t),()=>{y.removeEventListener("focusout",t),y.removeEventListener("pointerdown",e),!s&&b.removeEventListener("focusout",t)}):void 0;function e(){T.current=!0,setTimeout((()=>{T.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(cs(y,t)||cs(b,t)||cs(t,b)||cs(null==O?void 0:O.portalNode,t)||null!=t&&t.hasAttribute(Ju("focus-guard"))||E&&(ed(E.nodesRef.current,p).find((e=>{var n,r;return cs(null==(n=e.context)?void 0:n.elements.floating,t)||cs(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!T.current&&t!==Dd()&&(R.current=!0,g(!1,e))}))}}),[o,y,b,s,p,E,O,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==O||null==(e=O.portalNode)?void 0:e.querySelectorAll("["+Ju("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,A.current,F.current.includes("reference")||x?y:null].filter((e=>null!=e)),n=s||x?ld(e,$,!$):ld(e);return()=>{n()}}}),[o,y,b,s,F,O,x,$]),Nu((()=>{if(o||!b)return;const e=ls(hs(b));queueMicrotask((()=>{const t=M(b),n=D.current,r=("number"==typeof n?t[n]:n.current)||b,o=cs(b,e);w||o||!f||Iu(r,{preventScroll:r===b})}))}),[o,f,b,w,M,D]),Nu((()=>{if(o||!b)return;let e=!1;const t=hs(b),n=ls(t);let r=v.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&Fd(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(ds()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||us(i)))}return Fd(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=ls(t),o=cs(b,n)||E&&ed(E.nodesRef.current,p).some((e=>{var t;return cs(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&Fd(h.domReference.current);const a=Dd();B.current&&!R.current&&Xc(a)&&(a===n||n===t.body||o)&&Iu(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,B,v,h,m,E,p]),Nu((()=>{if(!o&&O)return O.setFocusManagerState({modal:s,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{O.setFocusManagerState(null)}}),[o,O,s,f,g,h,d]),Nu((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");F.current.includes("floating")||ls(hs(b))!==h.domReference.current&&0===H().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,F,H,w]);const L=!o&&$&&(C||s);return r.createElement(r.Fragment,null,L&&r.createElement(vd,{"data-type":"inside",ref:null==O?void 0:O.beforeInsideRef,onFocus:e=>{if(s){const e=M();Iu("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(R.current=!1,fd(e,O.portalNode)){const e=ud()||y;null==e||e.focus()}else{var t;null==(t=O.beforeOutsideRef.current)||t.focus()}}}),!x&&j("start"),n,j("end"),L&&r.createElement(vd,{"data-type":"inside",ref:null==O?void 0:O.afterInsideRef,onFocus:e=>{if(s)Iu(M()[0]);else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(d&&(R.current=!0),fd(e,O.portalNode)){const e=dd()||y;null==e||e.focus()}else{var t;null==(t=O.afterOutsideRef.current)||t.focus()}}}))}function Od(e){return Xc(e.target)&&"BUTTON"===e.target.tagName}function kd(e){return vs(e)}const Ad={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Rd={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Td=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function Cd(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=Uu(),a=r.useRef({}),[l]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),c=null!=Gu();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!qc(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Zu)&&e.has(o)||(null==(i=Zu)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[s,u]=r.useState(o.reference),d=_u(((e,t,r)=>{a.current.openEvent=e?t:void 0,l.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:s||o.reference||null,floating:o.floating||null,domReference:o.reference})),[s,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:l,floatingId:i,refs:f})),[t,d,h,l,i,f])}function Hd(e){void 0===e&&(e={});const{nodeId:t}=e,n=Cd({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,l]=r.useState(null),[c,s]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=Ku();Nu((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:c=!0,whileElementsMounted:s,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);su(h,o)||p(o);const[g,m]=r.useState(null),[v,y]=r.useState(null),b=r.useCallback((e=>{e!==F.current&&(F.current=e,m(e))}),[]),w=r.useCallback((e=>{e!==D.current&&(D.current=e,y(e))}),[]),x=a||g,$=l||v,F=r.useRef(null),D=r.useRef(null),B=r.useRef(d),E=null!=s,O=fu(s),k=fu(i),A=r.useCallback((()=>{if(!F.current||!D.current)return;const e={placement:t,strategy:n,middleware:h};k.current&&(e.platform=k.current),lu(F.current,D.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!su(B.current,t)&&(B.current=t,S.flushSync((()=>{f(t)})))}))}),[h,t,n,k]);cu((()=>{!1===u&&B.current.isPositioned&&(B.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);cu((()=>(R.current=!0,()=>{R.current=!1})),[]),cu((()=>{if(x&&(F.current=x),$&&(D.current=$),x&&$){if(O.current)return O.current(x,$,A);A()}}),[x,$,A,O,E]);const T=r.useMemo((()=>({reference:F,floating:D,setReference:b,setFloating:w})),[b,w]),C=r.useMemo((()=>({reference:x,floating:$})),[x,$]),H=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!C.floating)return e;const t=du(C.floating,d.x),r=du(C.floating,d.y);return c?{...e,transform:"translate("+t+"px, "+r+"px)",...uu(C.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,c,C.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:A,refs:T,elements:C,floatingStyles:H})),[d,A,T,C,H])}({...e,elements:{...i,...c&&{reference:c}}}),p=r.useCallback((e=>{const t=qc(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;s(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(qc(e)||null===e)&&(d.current=e,l(e)),(qc(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!qc(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),v=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),y=r.useMemo((()=>({...h,...o,refs:m,elements:v,nodeId:t})),[h,m,v,t,o]);return Nu((()=>{o.dataRef.current.floatingContext=y;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=y)})),r.useMemo((()=>({...h,context:y,refs:m,elements:v})),[h,m,v,y])}const Md="active",jd="selected";function Ld(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[Md]:t,[jd]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Md,jd].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const _d=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function zd(e,t){return"function"==typeof e?e(t):e}function Id(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,c]=r.useState("unmounted"),s=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return s||"close"!==l||c("unmounted"),Nu((()=>{if(o){if(n){c("initial");const e=requestAnimationFrame((()=>{c("open")}));return()=>{cancelAnimationFrame(e)}}c("close")}}),[n,o]),{isMounted:s,status:l}}const Nd=v.div`
    display: flex;
    flex-direction: column;
`,Pd=e=>"right"===e?"bottom-end":"bottom-start",Wd=({enabled:o,isOpen:a,onOpen:l,onClose:c,onDismiss:s,renderElement:u,renderDropdown:d,zIndex:f=50,clickToToggle:h=!1,offset:p=0,alignment:g="left",fitAvailableHeight:m})=>{const v=i(null),y=i(null),{width:b}=Oa({targetRef:v,handleHeight:!1}),{refs:w,floatingStyles:x,context:S}=Hd({open:a,onOpenChange:(e,t,n)=>{"escape-key"===n?null==s||s():e&&!a?null==l||l():!e&&a&&(null==c||c(n))},whileElementsMounted:tu,placement:Pd(g),middleware:[($=p,{...nu($),options:[$,F]}),gu(),hu({limiter:pu()}),mu({apply({availableHeight:e}){y.current&&Object.assign(y.current.style,{maxHeight:m?`${e}px`:void 0,overflowY:m?"hidden":void 0})}})]});var $,F;const{isMounted:D,styles:B}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,c=e.placement,s=c.split("-")[0],u=r.useMemo((()=>({side:s,placement:c})),[s,c]),d="number"==typeof l,f=(d?l:l.open)||0,h=(d?l:l.close)||0,[p,g]=r.useState((()=>({...zd(a,u),...zd(n,u)}))),{isMounted:m,status:v}=Id(e,{duration:l}),y=Qu(n),b=Qu(o),w=Qu(i),x=Qu(a);return Nu((()=>{const e=zd(y.current,u),t=zd(w.current,u),n=zd(x.current,u),r=zd(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===v&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===v&&g({transitionProperty:Object.keys(r).map(_d).join(","),transitionDuration:f+"ms",...n,...r}),"close"===v){const r=t||e;g({transitionProperty:Object.keys(r).map(_d).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,y,b,x,f,v,u]),{isMounted:m,styles:p}}(S,{initial:{opacity:0},open:{opacity:1},duration:300}),E=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:c="click",toggle:s=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(fs(f.current,!0)&&u||"click"!==c&&(!n||!s||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===c&&f.current?f.current=void 0:fs(f.current,!0)&&u||(!n||!s||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||Od(e)||(" "!==e.key||kd(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!s,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||Od(e)||kd(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!s,e.nativeEvent,"click"))}}}:{}),[l,i,c,u,d,a,s,n,o])}(S,{enabled:o,toggle:h}),O=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:l},dataRef:c}=e,{enabled:s=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:v}=t,y=Ku(),b=_u("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,x=r.useRef(!1),S=r.useRef(!1),{escapeKey:$,outsidePress:F}=Td(m),{escapeKey:D,outsidePress:B}=Td(v),E=_u((e=>{var t;if(!n||!s||!u||"Escape"!==e.key)return;const r=null==(t=c.current.floatingContext)?void 0:t.nodeId,i=y?ed(y.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),O=_u((e=>{var t;const n=()=>{var t;E(e),null==(t=gs(e))||t.removeEventListener("keydown",n)};null==(t=gs(e))||t.addEventListener("keydown",n)})),k=_u((e=>{var t;const n=x.current;x.current=!1;const r=S.current;if(S.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=gs(e),s="["+Ju("inert")+"]",u=hs(l).querySelectorAll(s);let d=qc(i)?i:null;for(;d&&!ts(d);){const e=os(d);if(ts(e)||!qc(e))break;d=e}if(u.length&&qc(i)&&!i.matches("html,body")&&!cs(i,l)&&Array.from(u).every((e=>!cs(d,e))))return;if(Xc(i)&&l){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===ns(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=c.current.floatingContext)?void 0:t.nodeId,p=y&&ed(y.nodesRef.current,h).some((t=>{var n;return ps(e,null==(n=t.context)?void 0:n.elements.floating)}));if(ps(e,l)||ps(e,a)||p)return;const g=y?ed(y.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),A=_u((e=>{var t;const n=()=>{var t;k(e),null==(t=gs(e))||t.removeEventListener(f,n)};null==(t=gs(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!s)return;function e(e){o(!1,e,"ancestor-scroll")}c.current.__escapeKeyBubbles=$,c.current.__outsidePressBubbles=F;const t=hs(l);u&&t.addEventListener("keydown",D?O:E,D),w&&t.addEventListener(f,B?A:k,B);let r=[];return g&&(qc(a)&&(r=as(a)),qc(l)&&(r=r.concat(as(l))),!qc(i)&&i&&i.contextElement&&(r=r.concat(as(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",D?O:E,D),w&&t.removeEventListener(f,B?A:k,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[c,l,a,i,u,w,f,n,o,g,s,$,F,E,D,O,k,B,A]),r.useEffect((()=>{x.current=!1}),[w,f]),r.useMemo((()=>s?{reference:{onKeyDown:E,[Ad[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[Rd[f]]:()=>{x.current=!0}}}:{}),[s,h,f,p,o,E])}(S,{enabled:o}),{getReferenceProps:k,getFloatingProps:A}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>Ld(t,e,"reference")),t),o=r.useCallback((t=>Ld(t,e,"floating")),t),i=r.useCallback((t=>Ld(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([E,O]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,w.setReference(e)}},k(),{children:u()})),D&&t(wd,{children:t(Ed,Object.assign({context:S,modal:!1,initialFocus:y,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},x),{zIndex:f})},A(),{children:t(Nd,Object.assign({ref:y,style:Object.assign({},B),inert:B.opacity<1?"":void 0},{children:d({elementWidth:b})}))}))}))})]})},Yd=({selectedOptions:e,placeholder:n="Select",options:r,disabled:o,error:l,className:c,"data-testid":s,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,listExtractor:m,onSelectOptions:v,onShowOptions:y,onHideOptions:b,onRetry:w,optionsLoadState:x="success",optionTruncationType:S="end",renderListItem:$,hideNoResultsDisplay:F,renderCustomCallToAction:D,onBlur:B,variant:E="default",readOnly:O,alignment:k,dropdownZIndex:A})=>{const[R,T]=a(e||[]),[C,H]=a(!1),[M,j]=a(!1),[L]=a((()=>Xl.generate())),_=i(),z=i();d((()=>{T(e||[])}),[e]);const I=()=>{R&&R.length>0?(T([]),U([])):(T(r),U(r))},N=(e,t)=>{const n=[...R],r=Ti(R,(e=>(g?g(e):e)===t));r>-1?n.splice(r,1):n.push(e),T(n),U(n)},P=()=>{C&&(H(!1),V(!1))},W=()=>{M||C||j(!0)},Y=e=>{!M||C||_.current.contains(e.relatedTarget)||(j(!1),null==B||B())},V=e=>{!e&&b&&b(),e&&y&&y()},U=e=>{v&&v(e)};return t(Ql,{children:t(Wd,{enabled:!O&&!o,isOpen:C,renderElement:()=>t(oc,Object.assign({className:c,"data-testid":s,id:u,ref:_,tabIndex:-1,onFocus:W,onBlur:Y,$focused:M,$disabled:o,$readOnly:O,$error:l},{children:t(jc,Object.assign({ref:z,disabled:o,expanded:C,listboxId:L,readOnly:O,variant:E},{children:t(Nc,{children:R&&0!==R.length?t(Pc,Object.assign({$variant:E},{children:r&&R.length===r.length?"All selected":`${R.length} selected`})):t(Wc,Object.assign({truncateType:S,$variant:E},{children:n}))})}))})),renderDropdown:({elementWidth:e})=>t(Tc,{listboxId:L,listItems:r,onSelectItem:N,onDismiss:P,valueExtractor:g,listExtractor:m,enableSearch:f,searchFunction:h,searchPlaceholder:p,multiSelect:!0,selectedItems:R,onSelectAll:I,onRetry:w,itemsLoadState:x,itemTruncationType:S,renderListItem:$,hideNoResultsDisplay:F,renderCustomCallToAction:D,variant:E,width:e}),onOpen:()=>{H(!0),V(!0),j(!0)},onClose:e=>{H(!1),V(!1),"click"!==e&&(j(!1),null==B||B())},onDismiss:()=>{z.current.focus(),H(!1),V(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,zIndex:A})})};export{Yd as InputMultiSelect};
//# sourceMappingURL=index.js.map
