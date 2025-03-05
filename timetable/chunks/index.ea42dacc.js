import{jsxs as e,Fragment as t,jsx as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as s,isValidElement as a,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as g,useMemo as f,useImperativeHandle as h,lazy as p,Suspense as m,createElement as b}from"react";import y,{findDOMNode as v}from"react-dom";import{RefreshIcon as x}from"@lifesg/react-icons";import w,{css as $,keyframes as _,useTheme as D}from"styled-components";import{ChevronDownIcon as F}from"@lifesg/react-icons/chevron-down";import{useFloatingTree as C,useFloating as S,autoUpdate as O,offset as E,flip as j,shift as k,limitShift as A,size as M,useTransitionStyles as B,useClick as T,useDismiss as z,useInteractions as R,FloatingPortal as L,FloatingFocusManager as I,FloatingTree as H,useFloatingNodeId as P,FloatingNode as Y,useHover as W}from"@floating-ui/react";import{ChevronLeftIcon as N}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as U}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as V}from"@lifesg/react-icons/external";import{CrossIcon as q}from"@lifesg/react-icons/cross";function Z(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function X(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function a(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function J(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K,G,ee={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */K=ee,G=ee.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",i=16,o=32,s=64,a=128,l=256,c=1/0,u=9007199254740991,d=NaN,g=4294967295,f=[["ary",a],["bind",1],["bindKey",2],["curry",8],["curryRight",i],["flip",512],["partial",o],["partialRight",s],["rearg",l]],h="[object Arguments]",p="[object Array]",m="[object Boolean]",b="[object Date]",y="[object Error]",v="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",_="[object Object]",D="[object Promise]",F="[object RegExp]",C="[object Set]",S="[object String]",O="[object Symbol]",E="[object WeakMap]",j="[object ArrayBuffer]",k="[object DataView]",A="[object Float32Array]",M="[object Float64Array]",B="[object Int8Array]",T="[object Int16Array]",z="[object Int32Array]",R="[object Uint8Array]",L="[object Uint8ClampedArray]",I="[object Uint16Array]",H="[object Uint32Array]",P=/\b__p \+= '';/g,Y=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,N=/&(?:amp|lt|gt|quot|#39);/g,U=/[&<>"']/g,V=RegExp(N.source),q=RegExp(U.source),Z=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,J=/<%=([\s\S]+?)%>/g,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/,re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,ie=RegExp(ne.source),oe=/^\s+/,se=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,le=/\{\n\/\* \[wrapped with (.+)\] \*/,ce=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ge=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,be=/^\[object .+?Constructor\]$/,ye=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,xe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,we=/($^)/,$e=/['\n\r\u2028\u2029\\]/g,_e="\\ud800-\\udfff",De="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Fe="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Ee="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",je="['’]",ke="["+_e+"]",Ae="["+Ee+"]",Me="["+De+"]",Be="\\d+",Te="["+Fe+"]",ze="["+Ce+"]",Re="[^"+_e+Ee+Be+Fe+Ce+Se+"]",Le="\\ud83c[\\udffb-\\udfff]",Ie="[^"+_e+"]",He="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",Ye="["+Se+"]",We="\\u200d",Ne="(?:"+ze+"|"+Re+")",Ue="(?:"+Ye+"|"+Re+")",Ve="(?:['’](?:d|ll|m|re|s|t|ve))?",qe="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ze="(?:"+Me+"|"+Le+")?",Xe="["+Oe+"]?",Qe=Xe+Ze+"(?:"+We+"(?:"+[Ie,He,Pe].join("|")+")"+Xe+Ze+")*",Je="(?:"+[Te,He,Pe].join("|")+")"+Qe,Ke="(?:"+[Ie+Me+"?",Me,He,Pe,ke].join("|")+")",Ge=RegExp(je,"g"),et=RegExp(Me,"g"),tt=RegExp(Le+"(?="+Le+")|"+Ke+Qe,"g"),rt=RegExp([Ye+"?"+ze+"+"+Ve+"(?="+[Ae,Ye,"$"].join("|")+")",Ue+"+"+qe+"(?="+[Ae,Ye+Ne,"$"].join("|")+")",Ye+"?"+Ne+"+"+Ve,Ye+"+"+qe,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Be,Je].join("|"),"g"),nt=RegExp("["+We+_e+De+Oe+"]"),it=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ot=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],st=-1,at={};at[A]=at[M]=at[B]=at[T]=at[z]=at[R]=at[L]=at[I]=at[H]=!0,at[h]=at[p]=at[j]=at[m]=at[k]=at[b]=at[y]=at[v]=at[w]=at[$]=at[_]=at[F]=at[C]=at[S]=at[E]=!1;var lt={};lt[h]=lt[p]=lt[j]=lt[k]=lt[m]=lt[b]=lt[A]=lt[M]=lt[B]=lt[T]=lt[z]=lt[w]=lt[$]=lt[_]=lt[F]=lt[C]=lt[S]=lt[O]=lt[R]=lt[L]=lt[I]=lt[H]=!0,lt[y]=lt[v]=lt[E]=!1;var ct={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ut=parseFloat,dt=parseInt,gt="object"==typeof Q&&Q&&Q.Object===Object&&Q,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=gt||ft||Function("return this")(),pt=G&&!G.nodeType&&G,mt=pt&&K&&!K.nodeType&&K,bt=mt&&mt.exports===pt,yt=bt&&gt.process,vt=function(){try{var e=mt&&mt.require&&mt.require("util").types;return e||yt&&yt.binding&&yt.binding("util")}catch(e){}}(),xt=vt&&vt.isArrayBuffer,wt=vt&&vt.isDate,$t=vt&&vt.isMap,_t=vt&&vt.isRegExp,Dt=vt&&vt.isSet,Ft=vt&&vt.isTypedArray;function Ct(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function St(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i];t(n,s,r(s),e)}return n}function Ot(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function jt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function kt(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var s=e[r];t(s,r,e)&&(o[i++]=s)}return o}function At(e,t){return!(null==e||!e.length)&&Yt(e,t,0)>-1}function Mt(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Bt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Tt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function zt(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function Rt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Lt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var It=Vt("length");function Ht(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Pt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Yt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,i=e.length;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Pt(e,Nt,r)}function Wt(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Nt(e){return e!=e}function Ut(e,t){var r=null==e?0:e.length;return r?Xt(e,t)/r:d}function Vt(t){return function(r){return null==r?e:r[t]}}function qt(t){return function(r){return null==t?e:t[r]}}function Zt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function Xt(t,r){for(var n,i=-1,o=t.length;++i<o;){var s=r(t[i]);s!==e&&(n=n===e?s:n+s)}return n}function Qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Jt(e){return e?e.slice(0,hr(e)+1).replace(oe,""):e}function Kt(e){return function(t){return e(t)}}function Gt(e,t){return Bt(t,(function(t){return e[t]}))}function er(e,t){return e.has(t)}function tr(e,t){for(var r=-1,n=e.length;++r<n&&Yt(t,e[r],0)>-1;);return r}function rr(e,t){for(var r=e.length;r--&&Yt(t,e[r],0)>-1;);return r}var nr=qt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),ir=qt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function or(e){return"\\"+ct[e]}function sr(e){return nt.test(e)}function ar(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function lr(e,t){return function(r){return e(t(r))}}function cr(e,t){for(var r=-1,i=e.length,o=0,s=[];++r<i;){var a=e[r];a!==t&&a!==n||(e[r]=n,s[o++]=r)}return s}function ur(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function gr(e){return sr(e)?function(e){for(var t=tt.lastIndex=0;tt.test(e);)++t;return t}(e):It(e)}function fr(e){return sr(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&se.test(e.charAt(t)););return t}var pr=qt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),mr=function Q(K){var G,se=(K=null==K?ht:mr.defaults(ht.Object(),K,mr.pick(ht,ot))).Array,_e=K.Date,De=K.Error,Fe=K.Function,Ce=K.Math,Se=K.Object,Oe=K.RegExp,Ee=K.String,je=K.TypeError,ke=se.prototype,Ae=Fe.prototype,Me=Se.prototype,Be=K["__core-js_shared__"],Te=Ae.toString,ze=Me.hasOwnProperty,Re=0,Le=(G=/[^.]+$/.exec(Be&&Be.keys&&Be.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Ie=Me.toString,He=Te.call(Se),Pe=ht._,Ye=Oe("^"+Te.call(ze).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),We=bt?K.Buffer:e,Ne=K.Symbol,Ue=K.Uint8Array,Ve=We?We.allocUnsafe:e,qe=lr(Se.getPrototypeOf,Se),Ze=Se.create,Xe=Me.propertyIsEnumerable,Qe=ke.splice,Je=Ne?Ne.isConcatSpreadable:e,Ke=Ne?Ne.iterator:e,tt=Ne?Ne.toStringTag:e,nt=function(){try{var e=fo(Se,"defineProperty");return e({},"",{}),e}catch(e){}}(),ct=K.clearTimeout!==ht.clearTimeout&&K.clearTimeout,gt=_e&&_e.now!==ht.Date.now&&_e.now,ft=K.setTimeout!==ht.setTimeout&&K.setTimeout,pt=Ce.ceil,mt=Ce.floor,yt=Se.getOwnPropertySymbols,vt=We?We.isBuffer:e,It=K.isFinite,qt=ke.join,br=lr(Se.keys,Se),yr=Ce.max,vr=Ce.min,xr=_e.now,wr=K.parseInt,$r=Ce.random,_r=ke.reverse,Dr=fo(K,"DataView"),Fr=fo(K,"Map"),Cr=fo(K,"Promise"),Sr=fo(K,"Set"),Or=fo(K,"WeakMap"),Er=fo(Se,"create"),jr=Or&&new Or,kr={},Ar=Io(Dr),Mr=Io(Fr),Br=Io(Cr),Tr=Io(Sr),zr=Io(Or),Rr=Ne?Ne.prototype:e,Lr=Rr?Rr.valueOf:e,Ir=Rr?Rr.toString:e;function Hr(e){if(ra(e)&&!Us(e)&&!(e instanceof Nr)){if(e instanceof Wr)return e;if(ze.call(e,"__wrapped__"))return Ho(e)}return new Wr(e)}var Pr=function(){function t(){}return function(r){if(!ta(r))return{};if(Ze)return Ze(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Yr(){}function Wr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Nr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=g,this.__views__=[]}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function qr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Zr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new qr;++t<r;)this.add(e[t])}function Xr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Qr(e,t){var r=Us(e),n=!r&&Ns(e),i=!r&&!n&&Xs(e),o=!r&&!n&&!i&&ua(e),s=r||n||i||o,a=s?Qt(e.length,Ee):[],l=a.length;for(var c in e)!t&&!ze.call(e,c)||s&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||xo(c,l))||a.push(c);return a}function Jr(t){var r=t.length;return r?t[Xn(0,r-1)]:e}function Kr(e,t){return zo(ji(e),ln(t,0,e.length))}function Gr(e){return zo(ji(e))}function en(t,r,n){(n!==e&&!Ps(t[r],n)||n===e&&!(r in t))&&sn(t,r,n)}function tn(t,r,n){var i=t[r];ze.call(t,r)&&Ps(i,n)&&(n!==e||r in t)||sn(t,r,n)}function rn(e,t){for(var r=e.length;r--;)if(Ps(e[r][0],t))return r;return-1}function nn(e,t,r,n){return fn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function on(e,t){return e&&ki(t,Aa(t),e)}function sn(e,t,r){"__proto__"==t&&nt?nt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,i=r.length,o=se(i),s=null==t;++n<i;)o[n]=s?e:Sa(t,r[n]);return o}function ln(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function cn(t,r,n,i,o,s){var a,l=1&r,c=2&r,u=4&r;if(n&&(a=o?n(t,i,o,s):n(t)),a!==e)return a;if(!ta(t))return t;var d=Us(t);if(d){if(a=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&ze.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return ji(t,a)}else{var g=mo(t),f=g==v||g==x;if(Xs(t))return Di(t,l);if(g==_||g==h||f&&!o){if(a=c||f?{}:yo(t),!l)return c?function(e,t){return ki(e,po(e),t)}(t,function(e,t){return e&&ki(t,Ma(t),e)}(a,t)):function(e,t){return ki(e,ho(e),t)}(t,on(a,t))}else{if(!lt[g])return o?t:{};a=function(e,t,r){var n,i=e.constructor;switch(t){case j:return Fi(e);case m:case b:return new i(+e);case k:return function(e,t){var r=t?Fi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case A:case M:case B:case T:case z:case R:case L:case I:case H:return Ci(e,r);case w:return new i;case $:case S:return new i(e);case F:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case C:return new i;case O:return n=e,Lr?Se(Lr.call(n)):{}}}(t,g,l)}}s||(s=new Xr);var p=s.get(t);if(p)return p;s.set(t,a),aa(t)?t.forEach((function(e){a.add(cn(e,r,n,e,t,s))})):na(t)&&t.forEach((function(e,i){a.set(i,cn(e,r,n,i,t,s))}));var y=d?e:(u?c?oo:io:c?Ma:Aa)(t);return Ot(y||t,(function(e,i){y&&(e=t[i=e]),tn(a,i,cn(e,r,n,i,t,s))})),a}function un(t,r,n){var i=n.length;if(null==t)return!i;for(t=Se(t);i--;){var o=n[i],s=r[o],a=t[o];if(a===e&&!(o in t)||!s(a))return!1}return!0}function dn(r,n,i){if("function"!=typeof r)throw new je(t);return Ao((function(){r.apply(e,i)}),n)}function gn(e,t,r,n){var i=-1,o=At,s=!0,a=e.length,l=[],c=t.length;if(!a)return l;r&&(t=Bt(t,Kt(r))),n?(o=Mt,s=!1):t.length>=200&&(o=er,s=!1,t=new Zr(t));e:for(;++i<a;){var u=e[i],d=null==r?u:r(u);if(u=n||0!==u?u:0,s&&d==d){for(var g=c;g--;)if(t[g]===d)continue e;l.push(u)}else o(t,d,n)||l.push(u)}return l}Hr.templateSettings={escape:Z,evaluate:X,interpolate:J,variable:"",imports:{_:Hr}},Hr.prototype=Yr.prototype,Hr.prototype.constructor=Hr,Wr.prototype=Pr(Yr.prototype),Wr.prototype.constructor=Wr,Nr.prototype=Pr(Yr.prototype),Nr.prototype.constructor=Nr,Ur.prototype.clear=function(){this.__data__=Er?Er(null):{},this.size=0},Ur.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ur.prototype.get=function(t){var n=this.__data__;if(Er){var i=n[t];return i===r?e:i}return ze.call(n,t)?n[t]:e},Ur.prototype.has=function(t){var r=this.__data__;return Er?r[t]!==e:ze.call(r,t)},Ur.prototype.set=function(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Er&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=rn(t,e);return!(r<0||(r==t.length-1?t.pop():Qe.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=rn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return rn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=rn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},qr.prototype.clear=function(){this.size=0,this.__data__={hash:new Ur,map:new(Fr||Vr),string:new Ur}},qr.prototype.delete=function(e){var t=uo(this,e).delete(e);return this.size-=t?1:0,t},qr.prototype.get=function(e){return uo(this,e).get(e)},qr.prototype.has=function(e){return uo(this,e).has(e)},qr.prototype.set=function(e,t){var r=uo(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Zr.prototype.add=Zr.prototype.push=function(e){return this.__data__.set(e,r),this},Zr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Xr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Xr.prototype.get=function(e){return this.__data__.get(e)},Xr.prototype.has=function(e){return this.__data__.has(e)},Xr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Fr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new qr(n)}return r.set(e,t),this.size=r.size,this};var fn=Bi(wn),hn=Bi($n,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function mn(t,r,n){for(var i=-1,o=t.length;++i<o;){var s=t[i],a=r(s);if(null!=a&&(l===e?a==a&&!ca(a):n(a,l)))var l=a,c=s}return c}function bn(e,t){var r=[];return fn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function yn(e,t,r,n,i){var o=-1,s=e.length;for(r||(r=vo),i||(i=[]);++o<s;){var a=e[o];t>0&&r(a)?t>1?yn(a,t-1,r,n,i):Tt(i,a):n||(i[i.length]=a)}return i}var vn=Ti(),xn=Ti(!0);function wn(e,t){return e&&vn(e,t,Aa)}function $n(e,t){return e&&xn(e,t,Aa)}function _n(e,t){return kt(t,(function(t){return Ks(e[t])}))}function Dn(t,r){for(var n=0,i=(r=xi(r,t)).length;null!=t&&n<i;)t=t[Lo(r[n++])];return n&&n==i?t:e}function Fn(e,t,r){var n=t(e);return Us(e)?n:Tt(n,r(e))}function Cn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in Se(t)?function(t){var r=ze.call(t,tt),n=t[tt];try{t[tt]=e;var i=!0}catch(e){}var o=Ie.call(t);return i&&(r?t[tt]=n:delete t[tt]),o}(t):function(e){return Ie.call(e)}(t)}function Sn(e,t){return e>t}function On(e,t){return null!=e&&ze.call(e,t)}function En(e,t){return null!=e&&t in Se(e)}function jn(t,r,n){for(var i=n?Mt:At,o=t[0].length,s=t.length,a=s,l=se(s),c=1/0,u=[];a--;){var d=t[a];a&&r&&(d=Bt(d,Kt(r))),c=vr(d.length,c),l[a]=!n&&(r||o>=120&&d.length>=120)?new Zr(a&&d):e}d=t[0];var g=-1,f=l[0];e:for(;++g<o&&u.length<c;){var h=d[g],p=r?r(h):h;if(h=n||0!==h?h:0,!(f?er(f,p):i(u,p,n))){for(a=s;--a;){var m=l[a];if(!(m?er(m,p):i(t[a],p,n)))continue e}f&&f.push(p),u.push(h)}}return u}function kn(t,r,n){var i=null==(t=Eo(t,r=xi(r,t)))?t:t[Lo(Jo(r))];return null==i?e:Ct(i,t,n)}function An(e){return ra(e)&&Cn(e)==h}function Mn(t,r,n,i,o){return t===r||(null==t||null==r||!ra(t)&&!ra(r)?t!=t&&r!=r:function(t,r,n,i,o,s){var a=Us(t),l=Us(r),c=a?p:mo(t),u=l?p:mo(r),d=(c=c==h?_:c)==_,g=(u=u==h?_:u)==_,f=c==u;if(f&&Xs(t)){if(!Xs(r))return!1;a=!0,d=!1}if(f&&!d)return s||(s=new Xr),a||ua(t)?ro(t,r,n,i,o,s):function(e,t,r,n,i,o,s){switch(r){case k:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case j:return!(e.byteLength!=t.byteLength||!o(new Ue(e),new Ue(t)));case m:case b:case $:return Ps(+e,+t);case y:return e.name==t.name&&e.message==t.message;case F:case S:return e==t+"";case w:var a=ar;case C:var l=1&n;if(a||(a=ur),e.size!=t.size&&!l)return!1;var c=s.get(e);if(c)return c==t;n|=2,s.set(e,t);var u=ro(a(e),a(t),n,i,o,s);return s.delete(e),u;case O:if(Lr)return Lr.call(e)==Lr.call(t)}return!1}(t,r,c,n,i,o,s);if(!(1&n)){var v=d&&ze.call(t,"__wrapped__"),x=g&&ze.call(r,"__wrapped__");if(v||x){var D=v?t.value():t,E=x?r.value():r;return s||(s=new Xr),o(D,E,n,i,s)}}return!!f&&(s||(s=new Xr),function(t,r,n,i,o,s){var a=1&n,l=io(t),c=l.length,u=io(r),d=u.length;if(c!=d&&!a)return!1;for(var g=c;g--;){var f=l[g];if(!(a?f in r:ze.call(r,f)))return!1}var h=s.get(t),p=s.get(r);if(h&&p)return h==r&&p==t;var m=!0;s.set(t,r),s.set(r,t);for(var b=a;++g<c;){var y=t[f=l[g]],v=r[f];if(i)var x=a?i(v,y,f,r,t,s):i(y,v,f,t,r,s);if(!(x===e?y===v||o(y,v,n,i,s):x)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return s.delete(t),s.delete(r),m}(t,r,n,i,o,s))}(t,r,n,i,Mn,o))}function Bn(t,r,n,i){var o=n.length,s=o,a=!i;if(null==t)return!s;for(t=Se(t);o--;){var l=n[o];if(a&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++o<s;){var c=(l=n[o])[0],u=t[c],d=l[1];if(a&&l[2]){if(u===e&&!(c in t))return!1}else{var g=new Xr;if(i)var f=i(u,d,c,t,r,g);if(!(f===e?Mn(d,u,3,i,g):f))return!1}}return!0}function Tn(e){return!(!ta(e)||(t=e,Le&&Le in t))&&(Ks(e)?Ye:be).test(Io(e));var t}function zn(e){return"function"==typeof e?e:null==e?il:"object"==typeof e?Us(e)?Yn(e[0],e[1]):Pn(e):fl(e)}function Rn(e){if(!Fo(e))return br(e);var t=[];for(var r in Se(e))ze.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Ln(e){if(!ta(e))return function(e){var t=[];if(null!=e)for(var r in Se(e))t.push(r);return t}(e);var t=Fo(e),r=[];for(var n in e)("constructor"!=n||!t&&ze.call(e,n))&&r.push(n);return r}function In(e,t){return e<t}function Hn(e,t){var r=-1,n=qs(e)?se(e.length):[];return fn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Pn(e){var t=go(e);return 1==t.length&&t[0][2]?So(t[0][0],t[0][1]):function(r){return r===e||Bn(r,e,t)}}function Yn(t,r){return $o(t)&&Co(r)?So(Lo(t),r):function(n){var i=Sa(n,t);return i===e&&i===r?Oa(n,t):Mn(r,i,3)}}function Wn(t,r,n,i,o){t!==r&&vn(r,(function(s,a){if(o||(o=new Xr),ta(s))!function(t,r,n,i,o,s,a){var l=jo(t,n),c=jo(r,n),u=a.get(c);if(u)en(t,n,u);else{var d=s?s(l,c,n+"",t,r,a):e,g=d===e;if(g){var f=Us(c),h=!f&&Xs(c),p=!f&&!h&&ua(c);d=c,f||h||p?Us(l)?d=l:Zs(l)?d=ji(l):h?(g=!1,d=Di(c,!0)):p?(g=!1,d=Ci(c,!0)):d=[]:oa(c)||Ns(c)?(d=l,Ns(l)?d=ya(l):ta(l)&&!Ks(l)||(d=yo(c))):g=!1}g&&(a.set(c,d),o(d,c,i,s,a),a.delete(c)),en(t,n,d)}}(t,r,a,n,Wn,i,o);else{var l=i?i(jo(t,a),s,a+"",t,r,o):e;l===e&&(l=s),en(t,a,l)}}),Ma)}function Nn(t,r){var n=t.length;if(n)return xo(r+=r<0?n:0,n)?t[r]:e}function Un(e,t,r){t=t.length?Bt(t,(function(e){return Us(e)?function(t){return Dn(t,1===e.length?e[0]:e)}:e})):[il];var n=-1;t=Bt(t,Kt(co()));var i=Hn(e,(function(e,r,i){var o=Bt(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){for(var n=-1,i=e.criteria,o=t.criteria,s=i.length,a=r.length;++n<s;){var l=Si(i[n],o[n]);if(l)return n>=a?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var s=t[n],a=Dn(e,s);r(a,s)&&ei(o,xi(s,e),a)}return o}function qn(e,t,r,n){var i=n?Wt:Yt,o=-1,s=t.length,a=e;for(e===t&&(t=ji(t)),r&&(a=Bt(e,Kt(r)));++o<s;)for(var l=0,c=t[o],u=r?r(c):c;(l=i(a,u,l,n))>-1;)a!==e&&Qe.call(a,l,1),Qe.call(e,l,1);return e}function Zn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;xo(i)?Qe.call(e,i,1):gi(e,i)}}return e}function Xn(e,t){return e+mt($r()*(t-e+1))}function Qn(e,t){var r="";if(!e||t<1||t>u)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Jn(e,t){return Mo(Oo(e,t,il),e+"")}function Kn(e){return Jr(Pa(e))}function Gn(e,t){var r=Pa(e);return zo(r,ln(t,0,r.length))}function ei(t,r,n,i){if(!ta(t))return t;for(var o=-1,s=(r=xi(r,t)).length,a=s-1,l=t;null!=l&&++o<s;){var c=Lo(r[o]),u=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return t;if(o!=a){var d=l[c];(u=i?i(d,c,l):e)===e&&(u=ta(d)?d:xo(r[o+1])?[]:{})}tn(l,c,u),l=l[c]}return t}var ti=jr?function(e,t){return jr.set(e,t),e}:il,ri=nt?function(e,t){return nt(e,"toString",{configurable:!0,enumerable:!1,value:tl(t),writable:!0})}:il;function ni(e){return zo(Pa(e))}function ii(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=se(i);++n<i;)o[n]=e[n+t];return o}function oi(e,t){var r;return fn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function si(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,s=e[o];null!==s&&!ca(s)&&(r?s<=t:s<t)?n=o+1:i=o}return i}return ai(e,t,il,r)}function ai(t,r,n,i){var o=0,s=null==t?0:t.length;if(0===s)return 0;for(var a=(r=n(r))!=r,l=null===r,c=ca(r),u=r===e;o<s;){var d=mt((o+s)/2),g=n(t[d]),f=g!==e,h=null===g,p=g==g,m=ca(g);if(a)var b=i||p;else b=u?p&&(i||f):l?p&&f&&(i||!h):c?p&&f&&!h&&(i||!m):!h&&!m&&(i?g<=r:g<r);b?o=d+1:s=d}return vr(s,4294967294)}function li(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var s=e[r],a=t?t(s):s;if(!r||!Ps(a,l)){var l=a;o[i++]=0===s?0:s}}return o}function ci(e){return"number"==typeof e?e:ca(e)?d:+e}function ui(e){if("string"==typeof e)return e;if(Us(e))return Bt(e,ui)+"";if(ca(e))return Ir?Ir.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=At,o=e.length,s=!0,a=[],l=a;if(r)s=!1,i=Mt;else if(o>=200){var c=t?null:Qi(e);if(c)return ur(c);s=!1,i=er,l=new Zr}else l=t?[]:a;e:for(;++n<o;){var u=e[n],d=t?t(u):u;if(u=r||0!==u?u:0,s&&d==d){for(var g=l.length;g--;)if(l[g]===d)continue e;t&&l.push(d),a.push(u)}else i(l,d,r)||(l!==a&&l.push(d),a.push(u))}return a}function gi(e,t){return null==(e=Eo(e,t=xi(t,e)))||delete e[Lo(Jo(t))]}function fi(e,t,r,n){return ei(e,t,r(Dn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ii(e,n?0:o,n?o+1:i):ii(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e;return r instanceof Nr&&(r=r.value()),zt(t,(function(e,t){return t.func.apply(t.thisArg,Tt([e],t.args))}),r)}function mi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=se(n);++i<n;)for(var s=e[i],a=-1;++a<n;)a!=i&&(o[i]=gn(o[i]||s,e[a],t,r));return di(yn(o,1),t,r)}function bi(t,r,n){for(var i=-1,o=t.length,s=r.length,a={};++i<o;){var l=i<s?r[i]:e;n(a,t[i],l)}return a}function yi(e){return Zs(e)?e:[]}function vi(e){return"function"==typeof e?e:il}function xi(e,t){return Us(e)?e:$o(e,t)?[e]:Ro(va(e))}var wi=Jn;function $i(t,r,n){var i=t.length;return n=n===e?i:n,!r&&n>=i?t:ii(t,r,n)}var _i=ct||function(e){return ht.clearTimeout(e)};function Di(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Fi(e){var t=new e.constructor(e.byteLength);return new Ue(t).set(new Ue(e)),t}function Ci(e,t){var r=t?Fi(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Si(t,r){if(t!==r){var n=t!==e,i=null===t,o=t==t,s=ca(t),a=r!==e,l=null===r,c=r==r,u=ca(r);if(!l&&!u&&!s&&t>r||s&&a&&c&&!l&&!u||i&&a&&c||!n&&c||!o)return 1;if(!i&&!s&&!u&&t<r||u&&n&&o&&!i&&!s||l&&n&&o||!a&&o||!c)return-1}return 0}function Oi(e,t,r,n){for(var i=-1,o=e.length,s=r.length,a=-1,l=t.length,c=yr(o-s,0),u=se(l+c),d=!n;++a<l;)u[a]=t[a];for(;++i<s;)(d||i<o)&&(u[r[i]]=e[i]);for(;c--;)u[a++]=e[i++];return u}function Ei(e,t,r,n){for(var i=-1,o=e.length,s=-1,a=r.length,l=-1,c=t.length,u=yr(o-a,0),d=se(u+c),g=!n;++i<u;)d[i]=e[i];for(var f=i;++l<c;)d[f+l]=t[l];for(;++s<a;)(g||i<o)&&(d[f+r[s]]=e[i++]);return d}function ji(e,t){var r=-1,n=e.length;for(t||(t=se(n));++r<n;)t[r]=e[r];return t}function ki(t,r,n,i){var o=!n;n||(n={});for(var s=-1,a=r.length;++s<a;){var l=r[s],c=i?i(n[l],t[l],l,n,t):e;c===e&&(c=t[l]),o?sn(n,l,c):tn(n,l,c)}return n}function Ai(e,t){return function(r,n){var i=Us(r)?St:nn,o=t?t():{};return i(r,e,co(n,2),o)}}function Mi(t){return Jn((function(r,n){var i=-1,o=n.length,s=o>1?n[o-1]:e,a=o>2?n[2]:e;for(s=t.length>3&&"function"==typeof s?(o--,s):e,a&&wo(n[0],n[1],a)&&(s=o<3?e:s,o=1),r=Se(r);++i<o;){var l=n[i];l&&t(r,l,i,s)}return r}))}function Bi(e,t){return function(r,n){if(null==r)return r;if(!qs(r))return e(r,n);for(var i=r.length,o=t?i:-1,s=Se(r);(t?o--:++o<i)&&!1!==n(s[o],o,s););return r}}function Ti(e){return function(t,r,n){for(var i=-1,o=Se(t),s=n(t),a=s.length;a--;){var l=s[e?a:++i];if(!1===r(o[l],l,o))break}return t}}function zi(t){return function(r){var n=sr(r=va(r))?fr(r):e,i=n?n[0]:r.charAt(0),o=n?$i(n,1).join(""):r.slice(1);return i[t]()+o}}function Ri(e){return function(t){return zt(Ka(Na(t).replace(Ge,"")),e,"")}}function Li(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return ta(n)?n:r}}function Ii(t){return function(r,n,i){var o=Se(r);if(!qs(r)){var s=co(n,3);r=Aa(r),n=function(e){return s(o[e],e,o)}}var a=t(r,n,i);return a>-1?o[s?r[a]:a]:e}}function Hi(r){return no((function(n){var i=n.length,o=i,s=Wr.prototype.thru;for(r&&n.reverse();o--;){var a=n[o];if("function"!=typeof a)throw new je(t);if(s&&!l&&"wrapper"==ao(a))var l=new Wr([],!0)}for(o=l?o:i;++o<i;){var c=ao(a=n[o]),u="wrapper"==c?so(a):e;l=u&&_o(u[0])&&424==u[1]&&!u[4].length&&1==u[9]?l[ao(u[0])].apply(l,u[3]):1==a.length&&_o(a)?l[c]():l.thru(a)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Us(t))return l.plant(t).value();for(var r=0,o=i?n[r].apply(this,e):t;++r<i;)o=n[r].call(this,o);return o}}))}function Pi(t,r,n,i,o,s,l,c,u,d){var g=r&a,f=1&r,h=2&r,p=24&r,m=512&r,b=h?e:Li(t);return function a(){for(var y=arguments.length,v=se(y),x=y;x--;)v[x]=arguments[x];if(p)var w=lo(a),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(v,w);if(i&&(v=Oi(v,i,o,p)),s&&(v=Ei(v,s,l,p)),y-=$,p&&y<d){var _=cr(v,w);return Zi(t,r,Pi,a.placeholder,n,v,_,c,u,d-y)}var D=f?n:this,F=h?D[t]:t;return y=v.length,c?v=function(t,r){for(var n=t.length,i=vr(r.length,n),o=ji(t);i--;){var s=r[i];t[i]=xo(s,n)?o[s]:e}return t}(v,c):m&&y>1&&v.reverse(),g&&u<y&&(v.length=u),this&&this!==ht&&this instanceof a&&(F=b||Li(F)),F.apply(D,v)}}function Yi(e,t){return function(r,n){return function(e,t,r,n){return wn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Wi(t,r){return function(n,i){var o;if(n===e&&i===e)return r;if(n!==e&&(o=n),i!==e){if(o===e)return i;"string"==typeof n||"string"==typeof i?(n=ui(n),i=ui(i)):(n=ci(n),i=ci(i)),o=t(n,i)}return o}}function Ni(e){return no((function(t){return t=Bt(t,Kt(co())),Jn((function(r){var n=this;return e(t,(function(e){return Ct(e,n,r)}))}))}))}function Ui(t,r){var n=(r=r===e?" ":ui(r)).length;if(n<2)return n?Qn(r,t):r;var i=Qn(r,pt(t/gr(r)));return sr(r)?$i(fr(i),0,t).join(""):i.slice(0,t)}function Vi(t){return function(r,n,i){return i&&"number"!=typeof i&&wo(r,n,i)&&(n=i=e),r=ha(r),n===e?(n=r,r=0):n=ha(n),function(e,t,r,n){for(var i=-1,o=yr(pt((t-e)/(r||1)),0),s=se(o);o--;)s[n?o:++i]=e,e+=r;return s}(r,n,i=i===e?r<n?1:-1:ha(i),t)}}function qi(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ba(t),r=ba(r)),e(t,r)}}function Zi(t,r,n,i,a,l,c,u,d,g){var f=8&r;r|=f?o:s,4&(r&=~(f?s:o))||(r&=-4);var h=[t,r,a,f?l:e,f?c:e,f?e:l,f?e:c,u,d,g],p=n.apply(e,h);return _o(t)&&ko(p,h),p.placeholder=i,Bo(p,t,r)}function Xi(e){var t=Ce[e];return function(e,r){if(e=ba(e),(r=null==r?0:vr(pa(r),292))&&It(e)){var n=(va(e)+"e").split("e");return+((n=(va(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Qi=Sr&&1/ur(new Sr([,-0]))[1]==c?function(e){return new Sr(e)}:cl;function Ji(e){return function(t){var r=mo(t);return r==w?ar(t):r==C?dr(t):function(e,t){return Bt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Ki(r,c,u,d,g,f,h,p){var m=2&c;if(!m&&"function"!=typeof r)throw new je(t);var b=d?d.length:0;if(b||(c&=-97,d=g=e),h=h===e?h:yr(pa(h),0),p=p===e?p:pa(p),b-=g?g.length:0,c&s){var y=d,v=g;d=g=e}var x=m?e:so(r),w=[r,c,u,d,g,y,v,f,h,p];if(x&&function(e,t){var r=e[1],i=t[1],o=r|i,s=o<131,c=i==a&&8==r||i==a&&r==l&&e[7].length<=t[8]||384==i&&t[7].length<=t[8]&&8==r;if(!s&&!c)return e;1&i&&(e[2]=t[2],o|=1&r?0:4);var u=t[3];if(u){var d=e[3];e[3]=d?Oi(d,u,t[4]):u,e[4]=d?cr(e[3],n):t[4]}(u=t[5])&&(d=e[5],e[5]=d?Ei(d,u,t[6]):u,e[6]=d?cr(e[5],n):t[6]),(u=t[7])&&(e[7]=u),i&a&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o}(w,x),r=w[0],c=w[1],u=w[2],d=w[3],g=w[4],!(p=w[9]=w[9]===e?m?0:r.length:yr(w[9]-b,0))&&24&c&&(c&=-25),c&&1!=c)$=8==c||c==i?function(t,r,n){var i=Li(t);return function o(){for(var s=arguments.length,a=se(s),l=s,c=lo(o);l--;)a[l]=arguments[l];var u=s<3&&a[0]!==c&&a[s-1]!==c?[]:cr(a,c);return(s-=u.length)<n?Zi(t,r,Pi,o.placeholder,e,a,u,e,e,n-s):Ct(this&&this!==ht&&this instanceof o?i:t,this,a)}}(r,c,p):c!=o&&33!=c||g.length?Pi.apply(e,w):function(e,t,r,n){var i=1&t,o=Li(e);return function t(){for(var s=-1,a=arguments.length,l=-1,c=n.length,u=se(c+a),d=this&&this!==ht&&this instanceof t?o:e;++l<c;)u[l]=n[l];for(;a--;)u[l++]=arguments[++s];return Ct(d,i?r:this,u)}}(r,c,u,d);else var $=function(e,t,r){var n=1&t,i=Li(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(n?r:this,arguments)}}(r,c,u);return Bo((x?ti:ko)($,w),r,c)}function Gi(t,r,n,i){return t===e||Ps(t,Me[n])&&!ze.call(i,n)?r:t}function eo(t,r,n,i,o,s){return ta(t)&&ta(r)&&(s.set(r,t),Wn(t,r,e,eo,s),s.delete(r)),t}function to(t){return oa(t)?e:t}function ro(t,r,n,i,o,s){var a=1&n,l=t.length,c=r.length;if(l!=c&&!(a&&c>l))return!1;var u=s.get(t),d=s.get(r);if(u&&d)return u==r&&d==t;var g=-1,f=!0,h=2&n?new Zr:e;for(s.set(t,r),s.set(r,t);++g<l;){var p=t[g],m=r[g];if(i)var b=a?i(m,p,g,r,t,s):i(p,m,g,t,r,s);if(b!==e){if(b)continue;f=!1;break}if(h){if(!Lt(r,(function(e,t){if(!er(h,t)&&(p===e||o(p,e,n,i,s)))return h.push(t)}))){f=!1;break}}else if(p!==m&&!o(p,m,n,i,s)){f=!1;break}}return s.delete(t),s.delete(r),f}function no(t){return Mo(Oo(t,e,Vo),t+"")}function io(e){return Fn(e,Aa,ho)}function oo(e){return Fn(e,Ma,po)}var so=jr?function(e){return jr.get(e)}:cl;function ao(e){for(var t=e.name+"",r=kr[t],n=ze.call(kr,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function lo(e){return(ze.call(Hr,"placeholder")?Hr:e).placeholder}function co(){var e=Hr.iteratee||ol;return e=e===ol?zn:e,arguments.length?e(arguments[0],arguments[1]):e}function uo(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function go(e){for(var t=Aa(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,Co(i)]}return t}function fo(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return Tn(n)?n:e}var ho=yt?function(e){return null==e?[]:(e=Se(e),kt(yt(e),(function(t){return Xe.call(e,t)})))}:ml,po=yt?function(e){for(var t=[];e;)Tt(t,ho(e)),e=qe(e);return t}:ml,mo=Cn;function bo(e,t,r){for(var n=-1,i=(t=xi(t,e)).length,o=!1;++n<i;){var s=Lo(t[n]);if(!(o=null!=e&&r(e,s)))break;e=e[s]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&ea(i)&&xo(s,i)&&(Us(e)||Ns(e))}function yo(e){return"function"!=typeof e.constructor||Fo(e)?{}:Pr(qe(e))}function vo(e){return Us(e)||Ns(e)||!!(Je&&e&&e[Je])}function xo(e,t){var r=typeof e;return!!(t=null==t?u:t)&&("number"==r||"symbol"!=r&&ve.test(e))&&e>-1&&e%1==0&&e<t}function wo(e,t,r){if(!ta(r))return!1;var n=typeof t;return!!("number"==n?qs(r)&&xo(t,r.length):"string"==n&&t in r)&&Ps(r[t],e)}function $o(e,t){if(Us(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ca(e))||te.test(e)||!ee.test(e)||null!=t&&e in Se(t)}function _o(e){var t=ao(e),r=Hr[t];if("function"!=typeof r||!(t in Nr.prototype))return!1;if(e===r)return!0;var n=so(r);return!!n&&e===n[0]}(Dr&&mo(new Dr(new ArrayBuffer(1)))!=k||Fr&&mo(new Fr)!=w||Cr&&mo(Cr.resolve())!=D||Sr&&mo(new Sr)!=C||Or&&mo(new Or)!=E)&&(mo=function(t){var r=Cn(t),n=r==_?t.constructor:e,i=n?Io(n):"";if(i)switch(i){case Ar:return k;case Mr:return w;case Br:return D;case Tr:return C;case zr:return E}return r});var Do=Be?Ks:bl;function Fo(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Me)}function Co(e){return e==e&&!ta(e)}function So(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in Se(n))}}function Oo(t,r,n){return r=yr(r===e?t.length-1:r,0),function(){for(var e=arguments,i=-1,o=yr(e.length-r,0),s=se(o);++i<o;)s[i]=e[r+i];i=-1;for(var a=se(r+1);++i<r;)a[i]=e[i];return a[r]=n(s),Ct(t,this,a)}}function Eo(e,t){return t.length<2?e:Dn(e,ii(t,0,-1))}function jo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var ko=To(ti),Ao=ft||function(e,t){return ht.setTimeout(e,t)},Mo=To(ri);function Bo(e,t,r){var n=t+"";return Mo(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Ot(f,(function(r){var n="_."+r[0];t&r[1]&&!At(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(le);return t?t[1].split(ce):[]}(n),r)))}function To(t){var r=0,n=0;return function(){var i=xr(),o=16-(i-n);if(n=i,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function zo(t,r){var n=-1,i=t.length,o=i-1;for(r=r===e?i:r;++n<r;){var s=Xn(n,o),a=t[s];t[s]=t[n],t[n]=a}return t.length=r,t}var Ro=function(e){var t=Ts(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(re,(function(e,r,n,i){t.push(n?i.replace(ge,"$1"):r||e)})),t}));function Lo(e){if("string"==typeof e||ca(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Io(e){if(null!=e){try{return Te.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ho(e){if(e instanceof Nr)return e.clone();var t=new Wr(e.__wrapped__,e.__chain__);return t.__actions__=ji(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Po=Jn((function(e,t){return Zs(e)?gn(e,yn(t,1,Zs,!0)):[]})),Yo=Jn((function(t,r){var n=Jo(r);return Zs(n)&&(n=e),Zs(t)?gn(t,yn(r,1,Zs,!0),co(n,2)):[]})),Wo=Jn((function(t,r){var n=Jo(r);return Zs(n)&&(n=e),Zs(t)?gn(t,yn(r,1,Zs,!0),e,n):[]}));function No(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:pa(r);return i<0&&(i=yr(n+i,0)),Pt(e,co(t,3),i)}function Uo(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i-1;return n!==e&&(o=pa(n),o=n<0?yr(i+o,0):vr(o,i-1)),Pt(t,co(r,3),o,!0)}function Vo(e){return null!=e&&e.length?yn(e,1):[]}function qo(t){return t&&t.length?t[0]:e}var Zo=Jn((function(e){var t=Bt(e,yi);return t.length&&t[0]===e[0]?jn(t):[]})),Xo=Jn((function(t){var r=Jo(t),n=Bt(t,yi);return r===Jo(n)?r=e:n.pop(),n.length&&n[0]===t[0]?jn(n,co(r,2)):[]})),Qo=Jn((function(t){var r=Jo(t),n=Bt(t,yi);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?jn(n,e,r):[]}));function Jo(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Ko=Jn(Go);function Go(e,t){return e&&e.length&&t&&t.length?qn(e,t):e}var es=no((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Zn(e,Bt(t,(function(e){return xo(e,r)?+e:e})).sort(Si)),n}));function ts(e){return null==e?e:_r.call(e)}var rs=Jn((function(e){return di(yn(e,1,Zs,!0))})),ns=Jn((function(t){var r=Jo(t);return Zs(r)&&(r=e),di(yn(t,1,Zs,!0),co(r,2))})),is=Jn((function(t){var r=Jo(t);return r="function"==typeof r?r:e,di(yn(t,1,Zs,!0),e,r)}));function os(e){if(!e||!e.length)return[];var t=0;return e=kt(e,(function(e){if(Zs(e))return t=yr(e.length,t),!0})),Qt(t,(function(t){return Bt(e,Vt(t))}))}function ss(t,r){if(!t||!t.length)return[];var n=os(t);return null==r?n:Bt(n,(function(t){return Ct(r,e,t)}))}var as=Jn((function(e,t){return Zs(e)?gn(e,t):[]})),ls=Jn((function(e){return mi(kt(e,Zs))})),cs=Jn((function(t){var r=Jo(t);return Zs(r)&&(r=e),mi(kt(t,Zs),co(r,2))})),us=Jn((function(t){var r=Jo(t);return r="function"==typeof r?r:e,mi(kt(t,Zs),e,r)})),ds=Jn(os),gs=Jn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ss(t,n)}));function fs(e){var t=Hr(e);return t.__chain__=!0,t}function hs(e,t){return t(e)}var ps=no((function(t){var r=t.length,n=r?t[0]:0,i=this.__wrapped__,o=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&i instanceof Nr&&xo(n)?((i=i.slice(n,+n+(r?1:0))).__actions__.push({func:hs,args:[o],thisArg:e}),new Wr(i,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(o)})),ms=Ai((function(e,t,r){ze.call(e,r)?++e[r]:sn(e,r,1)})),bs=Ii(No),ys=Ii(Uo);function vs(e,t){return(Us(e)?Ot:fn)(e,co(t,3))}function xs(e,t){return(Us(e)?Et:hn)(e,co(t,3))}var ws=Ai((function(e,t,r){ze.call(e,r)?e[r].push(t):sn(e,r,[t])})),$s=Jn((function(e,t,r){var n=-1,i="function"==typeof t,o=qs(e)?se(e.length):[];return fn(e,(function(e){o[++n]=i?Ct(t,e,r):kn(e,t,r)})),o})),_s=Ai((function(e,t,r){sn(e,r,t)}));function Ds(e,t){return(Us(e)?Bt:Hn)(e,co(t,3))}var Fs=Ai((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Cs=Jn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&wo(e,t[0],t[1])?t=[]:r>2&&wo(t[0],t[1],t[2])&&(t=[t[0]]),Un(e,yn(t,1),[])})),Ss=gt||function(){return ht.Date.now()};function Os(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Ki(t,a,e,e,e,e,r)}function Es(r,n){var i;if("function"!=typeof n)throw new je(t);return r=pa(r),function(){return--r>0&&(i=n.apply(this,arguments)),r<=1&&(n=e),i}}var js=Jn((function(e,t,r){var n=1;if(r.length){var i=cr(r,lo(js));n|=o}return Ki(e,n,t,r,i)})),ks=Jn((function(e,t,r){var n=3;if(r.length){var i=cr(r,lo(ks));n|=o}return Ki(t,n,e,r,i)}));function As(r,n,i){var o,s,a,l,c,u,d=0,g=!1,f=!1,h=!0;if("function"!=typeof r)throw new je(t);function p(t){var n=o,i=s;return o=s=e,d=t,l=r.apply(i,n)}function m(t){var r=t-u;return u===e||r>=n||r<0||f&&t-d>=a}function b(){var e=Ss();if(m(e))return y(e);c=Ao(b,function(e){var t=n-(e-u);return f?vr(t,a-(e-d)):t}(e))}function y(t){return c=e,h&&o?p(t):(o=s=e,l)}function v(){var t=Ss(),r=m(t);if(o=arguments,s=this,u=t,r){if(c===e)return function(e){return d=e,c=Ao(b,n),g?p(e):l}(u);if(f)return _i(c),c=Ao(b,n),p(u)}return c===e&&(c=Ao(b,n)),l}return n=ba(n)||0,ta(i)&&(g=!!i.leading,a=(f="maxWait"in i)?yr(ba(i.maxWait)||0,n):a,h="trailing"in i?!!i.trailing:h),v.cancel=function(){c!==e&&_i(c),d=0,o=u=s=c=e},v.flush=function(){return c===e?l:y(Ss())},v}var Ms=Jn((function(e,t){return dn(e,1,t)})),Bs=Jn((function(e,t,r){return dn(e,ba(t)||0,r)}));function Ts(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new je(t);var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,t);return n.cache=o.set(i,s)||o,s};return n.cache=new(Ts.Cache||qr),n}function zs(e){if("function"!=typeof e)throw new je(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ts.Cache=qr;var Rs=wi((function(e,t){var r=(t=1==t.length&&Us(t[0])?Bt(t[0],Kt(co())):Bt(yn(t,1),Kt(co()))).length;return Jn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return Ct(e,this,n)}))})),Ls=Jn((function(t,r){var n=cr(r,lo(Ls));return Ki(t,o,e,r,n)})),Is=Jn((function(t,r){var n=cr(r,lo(Is));return Ki(t,s,e,r,n)})),Hs=no((function(t,r){return Ki(t,l,e,e,e,r)}));function Ps(e,t){return e===t||e!=e&&t!=t}var Ys=qi(Sn),Ws=qi((function(e,t){return e>=t})),Ns=An(function(){return arguments}())?An:function(e){return ra(e)&&ze.call(e,"callee")&&!Xe.call(e,"callee")},Us=se.isArray,Vs=xt?Kt(xt):function(e){return ra(e)&&Cn(e)==j};function qs(e){return null!=e&&ea(e.length)&&!Ks(e)}function Zs(e){return ra(e)&&qs(e)}var Xs=vt||bl,Qs=wt?Kt(wt):function(e){return ra(e)&&Cn(e)==b};function Js(e){if(!ra(e))return!1;var t=Cn(e);return t==y||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!oa(e)}function Ks(e){if(!ta(e))return!1;var t=Cn(e);return t==v||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Gs(e){return"number"==typeof e&&e==pa(e)}function ea(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=u}function ta(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ra(e){return null!=e&&"object"==typeof e}var na=$t?Kt($t):function(e){return ra(e)&&mo(e)==w};function ia(e){return"number"==typeof e||ra(e)&&Cn(e)==$}function oa(e){if(!ra(e)||Cn(e)!=_)return!1;var t=qe(e);if(null===t)return!0;var r=ze.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Te.call(r)==He}var sa=_t?Kt(_t):function(e){return ra(e)&&Cn(e)==F},aa=Dt?Kt(Dt):function(e){return ra(e)&&mo(e)==C};function la(e){return"string"==typeof e||!Us(e)&&ra(e)&&Cn(e)==S}function ca(e){return"symbol"==typeof e||ra(e)&&Cn(e)==O}var ua=Ft?Kt(Ft):function(e){return ra(e)&&ea(e.length)&&!!at[Cn(e)]},da=qi(In),ga=qi((function(e,t){return e<=t}));function fa(e){if(!e)return[];if(qs(e))return la(e)?fr(e):ji(e);if(Ke&&e[Ke])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ke]());var t=mo(e);return(t==w?ar:t==C?ur:Pa)(e)}function ha(e){return e?(e=ba(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function pa(e){var t=ha(e),r=t%1;return t==t?r?t-r:t:0}function ma(e){return e?ln(pa(e),0,g):0}function ba(e){if("number"==typeof e)return e;if(ca(e))return d;if(ta(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ta(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jt(e);var r=me.test(e);return r||ye.test(e)?dt(e.slice(2),r?2:8):pe.test(e)?d:+e}function ya(e){return ki(e,Ma(e))}function va(e){return null==e?"":ui(e)}var xa=Mi((function(e,t){if(Fo(t)||qs(t))ki(t,Aa(t),e);else for(var r in t)ze.call(t,r)&&tn(e,r,t[r])})),wa=Mi((function(e,t){ki(t,Ma(t),e)})),$a=Mi((function(e,t,r,n){ki(t,Ma(t),e,n)})),_a=Mi((function(e,t,r,n){ki(t,Aa(t),e,n)})),Da=no(an),Fa=Jn((function(t,r){t=Se(t);var n=-1,i=r.length,o=i>2?r[2]:e;for(o&&wo(r[0],r[1],o)&&(i=1);++n<i;)for(var s=r[n],a=Ma(s),l=-1,c=a.length;++l<c;){var u=a[l],d=t[u];(d===e||Ps(d,Me[u])&&!ze.call(t,u))&&(t[u]=s[u])}return t})),Ca=Jn((function(t){return t.push(e,eo),Ct(Ta,e,t)}));function Sa(t,r,n){var i=null==t?e:Dn(t,r);return i===e?n:i}function Oa(e,t){return null!=e&&bo(e,t,En)}var Ea=Yi((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Ie.call(t)),e[t]=r}),tl(il)),ja=Yi((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Ie.call(t)),ze.call(e,t)?e[t].push(r):e[t]=[r]}),co),ka=Jn(kn);function Aa(e){return qs(e)?Qr(e):Rn(e)}function Ma(e){return qs(e)?Qr(e,!0):Ln(e)}var Ba=Mi((function(e,t,r){Wn(e,t,r)})),Ta=Mi((function(e,t,r,n){Wn(e,t,r,n)})),za=no((function(e,t){var r={};if(null==e)return r;var n=!1;t=Bt(t,(function(t){return t=xi(t,e),n||(n=t.length>1),t})),ki(e,oo(e),r),n&&(r=cn(r,7,to));for(var i=t.length;i--;)gi(r,t[i]);return r})),Ra=no((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Oa(e,r)}))}(e,t)}));function La(e,t){if(null==e)return{};var r=Bt(oo(e),(function(e){return[e]}));return t=co(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Ia=Ji(Aa),Ha=Ji(Ma);function Pa(e){return null==e?[]:Gt(e,Aa(e))}var Ya=Ri((function(e,t,r){return t=t.toLowerCase(),e+(r?Wa(t):t)}));function Wa(e){return Ja(va(e).toLowerCase())}function Na(e){return(e=va(e))&&e.replace(xe,nr).replace(et,"")}var Ua=Ri((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Va=Ri((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),qa=zi("toLowerCase"),Za=Ri((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Xa=Ri((function(e,t,r){return e+(r?" ":"")+Ja(t)})),Qa=Ri((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Ja=zi("toUpperCase");function Ka(t,r,n){return t=va(t),(r=n?e:r)===e?function(e){return it.test(e)}(t)?function(e){return e.match(rt)||[]}(t):function(e){return e.match(ue)||[]}(t):t.match(r)||[]}var Ga=Jn((function(t,r){try{return Ct(t,e,r)}catch(e){return Js(e)?e:new De(e)}})),el=no((function(e,t){return Ot(t,(function(t){t=Lo(t),sn(e,t,js(e[t],e))})),e}));function tl(e){return function(){return e}}var rl=Hi(),nl=Hi(!0);function il(e){return e}function ol(e){return zn("function"==typeof e?e:cn(e,1))}var sl=Jn((function(e,t){return function(r){return kn(r,e,t)}})),al=Jn((function(e,t){return function(r){return kn(e,r,t)}}));function ll(e,t,r){var n=Aa(t),i=_n(t,n);null!=r||ta(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=_n(t,Aa(t)));var o=!(ta(r)&&"chain"in r&&!r.chain),s=Ks(e);return Ot(i,(function(r){var n=t[r];e[r]=n,s&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=ji(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Tt([this.value()],arguments))})})),e}function cl(){}var ul=Ni(Bt),dl=Ni(jt),gl=Ni(Lt);function fl(e){return $o(e)?Vt(Lo(e)):function(e){return function(t){return Dn(t,e)}}(e)}var hl=Vi(),pl=Vi(!0);function ml(){return[]}function bl(){return!1}var yl,vl=Wi((function(e,t){return e+t}),0),xl=Xi("ceil"),wl=Wi((function(e,t){return e/t}),1),$l=Xi("floor"),_l=Wi((function(e,t){return e*t}),1),Dl=Xi("round"),Fl=Wi((function(e,t){return e-t}),0);return Hr.after=function(e,r){if("function"!=typeof r)throw new je(t);return e=pa(e),function(){if(--e<1)return r.apply(this,arguments)}},Hr.ary=Os,Hr.assign=xa,Hr.assignIn=wa,Hr.assignInWith=$a,Hr.assignWith=_a,Hr.at=Da,Hr.before=Es,Hr.bind=js,Hr.bindAll=el,Hr.bindKey=ks,Hr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Us(e)?e:[e]},Hr.chain=fs,Hr.chunk=function(t,r,n){r=(n?wo(t,r,n):r===e)?1:yr(pa(r),0);var i=null==t?0:t.length;if(!i||r<1)return[];for(var o=0,s=0,a=se(pt(i/r));o<i;)a[s++]=ii(t,o,o+=r);return a},Hr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Hr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=se(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Tt(Us(r)?ji(r):[r],yn(t,1))},Hr.cond=function(e){var r=null==e?0:e.length,n=co();return e=r?Bt(e,(function(e){if("function"!=typeof e[1])throw new je(t);return[n(e[0]),e[1]]})):[],Jn((function(t){for(var n=-1;++n<r;){var i=e[n];if(Ct(i[0],this,t))return Ct(i[1],this,t)}}))},Hr.conforms=function(e){return function(e){var t=Aa(e);return function(r){return un(r,e,t)}}(cn(e,1))},Hr.constant=tl,Hr.countBy=ms,Hr.create=function(e,t){var r=Pr(e);return null==t?r:on(r,t)},Hr.curry=function t(r,n,i){var o=Ki(r,8,e,e,e,e,e,n=i?e:n);return o.placeholder=t.placeholder,o},Hr.curryRight=function t(r,n,o){var s=Ki(r,i,e,e,e,e,e,n=o?e:n);return s.placeholder=t.placeholder,s},Hr.debounce=As,Hr.defaults=Fa,Hr.defaultsDeep=Ca,Hr.defer=Ms,Hr.delay=Bs,Hr.difference=Po,Hr.differenceBy=Yo,Hr.differenceWith=Wo,Hr.drop=function(t,r,n){var i=null==t?0:t.length;return i?ii(t,(r=n||r===e?1:pa(r))<0?0:r,i):[]},Hr.dropRight=function(t,r,n){var i=null==t?0:t.length;return i?ii(t,0,(r=i-(r=n||r===e?1:pa(r)))<0?0:r):[]},Hr.dropRightWhile=function(e,t){return e&&e.length?hi(e,co(t,3),!0,!0):[]},Hr.dropWhile=function(e,t){return e&&e.length?hi(e,co(t,3),!0):[]},Hr.fill=function(t,r,n,i){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&wo(t,r,n)&&(n=0,i=o),function(t,r,n,i){var o=t.length;for((n=pa(n))<0&&(n=-n>o?0:o+n),(i=i===e||i>o?o:pa(i))<0&&(i+=o),i=n>i?0:ma(i);n<i;)t[n++]=r;return t}(t,r,n,i)):[]},Hr.filter=function(e,t){return(Us(e)?kt:bn)(e,co(t,3))},Hr.flatMap=function(e,t){return yn(Ds(e,t),1)},Hr.flatMapDeep=function(e,t){return yn(Ds(e,t),c)},Hr.flatMapDepth=function(t,r,n){return n=n===e?1:pa(n),yn(Ds(t,r),n)},Hr.flatten=Vo,Hr.flattenDeep=function(e){return null!=e&&e.length?yn(e,c):[]},Hr.flattenDepth=function(t,r){return null!=t&&t.length?yn(t,r=r===e?1:pa(r)):[]},Hr.flip=function(e){return Ki(e,512)},Hr.flow=rl,Hr.flowRight=nl,Hr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Hr.functions=function(e){return null==e?[]:_n(e,Aa(e))},Hr.functionsIn=function(e){return null==e?[]:_n(e,Ma(e))},Hr.groupBy=ws,Hr.initial=function(e){return null!=e&&e.length?ii(e,0,-1):[]},Hr.intersection=Zo,Hr.intersectionBy=Xo,Hr.intersectionWith=Qo,Hr.invert=Ea,Hr.invertBy=ja,Hr.invokeMap=$s,Hr.iteratee=ol,Hr.keyBy=_s,Hr.keys=Aa,Hr.keysIn=Ma,Hr.map=Ds,Hr.mapKeys=function(e,t){var r={};return t=co(t,3),wn(e,(function(e,n,i){sn(r,t(e,n,i),e)})),r},Hr.mapValues=function(e,t){var r={};return t=co(t,3),wn(e,(function(e,n,i){sn(r,n,t(e,n,i))})),r},Hr.matches=function(e){return Pn(cn(e,1))},Hr.matchesProperty=function(e,t){return Yn(e,cn(t,1))},Hr.memoize=Ts,Hr.merge=Ba,Hr.mergeWith=Ta,Hr.method=sl,Hr.methodOf=al,Hr.mixin=ll,Hr.negate=zs,Hr.nthArg=function(e){return e=pa(e),Jn((function(t){return Nn(t,e)}))},Hr.omit=za,Hr.omitBy=function(e,t){return La(e,zs(co(t)))},Hr.once=function(e){return Es(2,e)},Hr.orderBy=function(t,r,n,i){return null==t?[]:(Us(r)||(r=null==r?[]:[r]),Us(n=i?e:n)||(n=null==n?[]:[n]),Un(t,r,n))},Hr.over=ul,Hr.overArgs=Rs,Hr.overEvery=dl,Hr.overSome=gl,Hr.partial=Ls,Hr.partialRight=Is,Hr.partition=Fs,Hr.pick=Ra,Hr.pickBy=La,Hr.property=fl,Hr.propertyOf=function(t){return function(r){return null==t?e:Dn(t,r)}},Hr.pull=Ko,Hr.pullAll=Go,Hr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?qn(e,t,co(r,2)):e},Hr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?qn(t,r,e,n):t},Hr.pullAt=es,Hr.range=hl,Hr.rangeRight=pl,Hr.rearg=Hs,Hr.reject=function(e,t){return(Us(e)?kt:bn)(e,zs(co(t,3)))},Hr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=co(t,3);++n<o;){var s=e[n];t(s,n,e)&&(r.push(s),i.push(n))}return Zn(e,i),r},Hr.rest=function(r,n){if("function"!=typeof r)throw new je(t);return Jn(r,n=n===e?n:pa(n))},Hr.reverse=ts,Hr.sampleSize=function(t,r,n){return r=(n?wo(t,r,n):r===e)?1:pa(r),(Us(t)?Kr:Gn)(t,r)},Hr.set=function(e,t,r){return null==e?e:ei(e,t,r)},Hr.setWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:ei(t,r,n,i)},Hr.shuffle=function(e){return(Us(e)?Gr:ni)(e)},Hr.slice=function(t,r,n){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&wo(t,r,n)?(r=0,n=i):(r=null==r?0:pa(r),n=n===e?i:pa(n)),ii(t,r,n)):[]},Hr.sortBy=Cs,Hr.sortedUniq=function(e){return e&&e.length?li(e):[]},Hr.sortedUniqBy=function(e,t){return e&&e.length?li(e,co(t,2)):[]},Hr.split=function(t,r,n){return n&&"number"!=typeof n&&wo(t,r,n)&&(r=n=e),(n=n===e?g:n>>>0)?(t=va(t))&&("string"==typeof r||null!=r&&!sa(r))&&!(r=ui(r))&&sr(t)?$i(fr(t),0,n):t.split(r,n):[]},Hr.spread=function(e,r){if("function"!=typeof e)throw new je(t);return r=null==r?0:yr(pa(r),0),Jn((function(t){var n=t[r],i=$i(t,0,r);return n&&Tt(i,n),Ct(e,this,i)}))},Hr.tail=function(e){var t=null==e?0:e.length;return t?ii(e,1,t):[]},Hr.take=function(t,r,n){return t&&t.length?ii(t,0,(r=n||r===e?1:pa(r))<0?0:r):[]},Hr.takeRight=function(t,r,n){var i=null==t?0:t.length;return i?ii(t,(r=i-(r=n||r===e?1:pa(r)))<0?0:r,i):[]},Hr.takeRightWhile=function(e,t){return e&&e.length?hi(e,co(t,3),!1,!0):[]},Hr.takeWhile=function(e,t){return e&&e.length?hi(e,co(t,3)):[]},Hr.tap=function(e,t){return t(e),e},Hr.throttle=function(e,r,n){var i=!0,o=!0;if("function"!=typeof e)throw new je(t);return ta(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),As(e,r,{leading:i,maxWait:r,trailing:o})},Hr.thru=hs,Hr.toArray=fa,Hr.toPairs=Ia,Hr.toPairsIn=Ha,Hr.toPath=function(e){return Us(e)?Bt(e,Lo):ca(e)?[e]:ji(Ro(va(e)))},Hr.toPlainObject=ya,Hr.transform=function(e,t,r){var n=Us(e),i=n||Xs(e)||ua(e);if(t=co(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:ta(e)&&Ks(o)?Pr(qe(e)):{}}return(i?Ot:wn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Hr.unary=function(e){return Os(e,1)},Hr.union=rs,Hr.unionBy=ns,Hr.unionWith=is,Hr.uniq=function(e){return e&&e.length?di(e):[]},Hr.uniqBy=function(e,t){return e&&e.length?di(e,co(t,2)):[]},Hr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?di(t,e,r):[]},Hr.unset=function(e,t){return null==e||gi(e,t)},Hr.unzip=os,Hr.unzipWith=ss,Hr.update=function(e,t,r){return null==e?e:fi(e,t,vi(r))},Hr.updateWith=function(t,r,n,i){return i="function"==typeof i?i:e,null==t?t:fi(t,r,vi(n),i)},Hr.values=Pa,Hr.valuesIn=function(e){return null==e?[]:Gt(e,Ma(e))},Hr.without=as,Hr.words=Ka,Hr.wrap=function(e,t){return Ls(vi(t),e)},Hr.xor=ls,Hr.xorBy=cs,Hr.xorWith=us,Hr.zip=ds,Hr.zipObject=function(e,t){return bi(e||[],t||[],tn)},Hr.zipObjectDeep=function(e,t){return bi(e||[],t||[],ei)},Hr.zipWith=gs,Hr.entries=Ia,Hr.entriesIn=Ha,Hr.extend=wa,Hr.extendWith=$a,ll(Hr,Hr),Hr.add=vl,Hr.attempt=Ga,Hr.camelCase=Ya,Hr.capitalize=Wa,Hr.ceil=xl,Hr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ba(n))==n?n:0),r!==e&&(r=(r=ba(r))==r?r:0),ln(ba(t),r,n)},Hr.clone=function(e){return cn(e,4)},Hr.cloneDeep=function(e){return cn(e,5)},Hr.cloneDeepWith=function(t,r){return cn(t,5,r="function"==typeof r?r:e)},Hr.cloneWith=function(t,r){return cn(t,4,r="function"==typeof r?r:e)},Hr.conformsTo=function(e,t){return null==t||un(e,t,Aa(t))},Hr.deburr=Na,Hr.defaultTo=function(e,t){return null==e||e!=e?t:e},Hr.divide=wl,Hr.endsWith=function(t,r,n){t=va(t),r=ui(r);var i=t.length,o=n=n===e?i:ln(pa(n),0,i);return(n-=r.length)>=0&&t.slice(n,o)==r},Hr.eq=Ps,Hr.escape=function(e){return(e=va(e))&&q.test(e)?e.replace(U,ir):e},Hr.escapeRegExp=function(e){return(e=va(e))&&ie.test(e)?e.replace(ne,"\\$&"):e},Hr.every=function(t,r,n){var i=Us(t)?jt:pn;return n&&wo(t,r,n)&&(r=e),i(t,co(r,3))},Hr.find=bs,Hr.findIndex=No,Hr.findKey=function(e,t){return Ht(e,co(t,3),wn)},Hr.findLast=ys,Hr.findLastIndex=Uo,Hr.findLastKey=function(e,t){return Ht(e,co(t,3),$n)},Hr.floor=$l,Hr.forEach=vs,Hr.forEachRight=xs,Hr.forIn=function(e,t){return null==e?e:vn(e,co(t,3),Ma)},Hr.forInRight=function(e,t){return null==e?e:xn(e,co(t,3),Ma)},Hr.forOwn=function(e,t){return e&&wn(e,co(t,3))},Hr.forOwnRight=function(e,t){return e&&$n(e,co(t,3))},Hr.get=Sa,Hr.gt=Ys,Hr.gte=Ws,Hr.has=function(e,t){return null!=e&&bo(e,t,On)},Hr.hasIn=Oa,Hr.head=qo,Hr.identity=il,Hr.includes=function(e,t,r,n){e=qs(e)?e:Pa(e),r=r&&!n?pa(r):0;var i=e.length;return r<0&&(r=yr(i+r,0)),la(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Yt(e,t,r)>-1},Hr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:pa(r);return i<0&&(i=yr(n+i,0)),Yt(e,t,i)},Hr.inRange=function(t,r,n){return r=ha(r),n===e?(n=r,r=0):n=ha(n),function(e,t,r){return e>=vr(t,r)&&e<yr(t,r)}(t=ba(t),r,n)},Hr.invoke=ka,Hr.isArguments=Ns,Hr.isArray=Us,Hr.isArrayBuffer=Vs,Hr.isArrayLike=qs,Hr.isArrayLikeObject=Zs,Hr.isBoolean=function(e){return!0===e||!1===e||ra(e)&&Cn(e)==m},Hr.isBuffer=Xs,Hr.isDate=Qs,Hr.isElement=function(e){return ra(e)&&1===e.nodeType&&!oa(e)},Hr.isEmpty=function(e){if(null==e)return!0;if(qs(e)&&(Us(e)||"string"==typeof e||"function"==typeof e.splice||Xs(e)||ua(e)||Ns(e)))return!e.length;var t=mo(e);if(t==w||t==C)return!e.size;if(Fo(e))return!Rn(e).length;for(var r in e)if(ze.call(e,r))return!1;return!0},Hr.isEqual=function(e,t){return Mn(e,t)},Hr.isEqualWith=function(t,r,n){var i=(n="function"==typeof n?n:e)?n(t,r):e;return i===e?Mn(t,r,e,n):!!i},Hr.isError=Js,Hr.isFinite=function(e){return"number"==typeof e&&It(e)},Hr.isFunction=Ks,Hr.isInteger=Gs,Hr.isLength=ea,Hr.isMap=na,Hr.isMatch=function(e,t){return e===t||Bn(e,t,go(t))},Hr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Bn(t,r,go(r),n)},Hr.isNaN=function(e){return ia(e)&&e!=+e},Hr.isNative=function(e){if(Do(e))throw new De("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Tn(e)},Hr.isNil=function(e){return null==e},Hr.isNull=function(e){return null===e},Hr.isNumber=ia,Hr.isObject=ta,Hr.isObjectLike=ra,Hr.isPlainObject=oa,Hr.isRegExp=sa,Hr.isSafeInteger=function(e){return Gs(e)&&e>=-9007199254740991&&e<=u},Hr.isSet=aa,Hr.isString=la,Hr.isSymbol=ca,Hr.isTypedArray=ua,Hr.isUndefined=function(t){return t===e},Hr.isWeakMap=function(e){return ra(e)&&mo(e)==E},Hr.isWeakSet=function(e){return ra(e)&&"[object WeakSet]"==Cn(e)},Hr.join=function(e,t){return null==e?"":qt.call(e,t)},Hr.kebabCase=Ua,Hr.last=Jo,Hr.lastIndexOf=function(t,r,n){var i=null==t?0:t.length;if(!i)return-1;var o=i;return n!==e&&(o=(o=pa(n))<0?yr(i+o,0):vr(o,i-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,o):Pt(t,Nt,o,!0)},Hr.lowerCase=Va,Hr.lowerFirst=qa,Hr.lt=da,Hr.lte=ga,Hr.max=function(t){return t&&t.length?mn(t,il,Sn):e},Hr.maxBy=function(t,r){return t&&t.length?mn(t,co(r,2),Sn):e},Hr.mean=function(e){return Ut(e,il)},Hr.meanBy=function(e,t){return Ut(e,co(t,2))},Hr.min=function(t){return t&&t.length?mn(t,il,In):e},Hr.minBy=function(t,r){return t&&t.length?mn(t,co(r,2),In):e},Hr.stubArray=ml,Hr.stubFalse=bl,Hr.stubObject=function(){return{}},Hr.stubString=function(){return""},Hr.stubTrue=function(){return!0},Hr.multiply=_l,Hr.nth=function(t,r){return t&&t.length?Nn(t,pa(r)):e},Hr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Hr.noop=cl,Hr.now=Ss,Hr.pad=function(e,t,r){e=va(e);var n=(t=pa(t))?gr(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Ui(mt(i),r)+e+Ui(pt(i),r)},Hr.padEnd=function(e,t,r){e=va(e);var n=(t=pa(t))?gr(e):0;return t&&n<t?e+Ui(t-n,r):e},Hr.padStart=function(e,t,r){e=va(e);var n=(t=pa(t))?gr(e):0;return t&&n<t?Ui(t-n,r)+e:e},Hr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),wr(va(e).replace(oe,""),t||0)},Hr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&wo(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=ha(t),r===e?(r=t,t=0):r=ha(r)),t>r){var i=t;t=r,r=i}if(n||t%1||r%1){var o=$r();return vr(t+o*(r-t+ut("1e-"+((o+"").length-1))),r)}return Xn(t,r)},Hr.reduce=function(e,t,r){var n=Us(e)?zt:Zt,i=arguments.length<3;return n(e,co(t,4),r,i,fn)},Hr.reduceRight=function(e,t,r){var n=Us(e)?Rt:Zt,i=arguments.length<3;return n(e,co(t,4),r,i,hn)},Hr.repeat=function(t,r,n){return r=(n?wo(t,r,n):r===e)?1:pa(r),Qn(va(t),r)},Hr.replace=function(){var e=arguments,t=va(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Hr.result=function(t,r,n){var i=-1,o=(r=xi(r,t)).length;for(o||(o=1,t=e);++i<o;){var s=null==t?e:t[Lo(r[i])];s===e&&(i=o,s=n),t=Ks(s)?s.call(t):s}return t},Hr.round=Dl,Hr.runInContext=Q,Hr.sample=function(e){return(Us(e)?Jr:Kn)(e)},Hr.size=function(e){if(null==e)return 0;if(qs(e))return la(e)?gr(e):e.length;var t=mo(e);return t==w||t==C?e.size:Rn(e).length},Hr.snakeCase=Za,Hr.some=function(t,r,n){var i=Us(t)?Lt:oi;return n&&wo(t,r,n)&&(r=e),i(t,co(r,3))},Hr.sortedIndex=function(e,t){return si(e,t)},Hr.sortedIndexBy=function(e,t,r){return ai(e,t,co(r,2))},Hr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=si(e,t);if(n<r&&Ps(e[n],t))return n}return-1},Hr.sortedLastIndex=function(e,t){return si(e,t,!0)},Hr.sortedLastIndexBy=function(e,t,r){return ai(e,t,co(r,2),!0)},Hr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=si(e,t,!0)-1;if(Ps(e[r],t))return r}return-1},Hr.startCase=Xa,Hr.startsWith=function(e,t,r){return e=va(e),r=null==r?0:ln(pa(r),0,e.length),t=ui(t),e.slice(r,r+t.length)==t},Hr.subtract=Fl,Hr.sum=function(e){return e&&e.length?Xt(e,il):0},Hr.sumBy=function(e,t){return e&&e.length?Xt(e,co(t,2)):0},Hr.template=function(t,r,n){var i=Hr.templateSettings;n&&wo(t,r,n)&&(r=e),t=va(t),r=$a({},r,i,Gi);var o,s,a=$a({},r.imports,i.imports,Gi),l=Aa(a),c=Gt(a,l),u=0,d=r.interpolate||we,g="__p += '",f=Oe((r.escape||we).source+"|"+d.source+"|"+(d===J?fe:we).source+"|"+(r.evaluate||we).source+"|$","g"),h="//# sourceURL="+(ze.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++st+"]")+"\n";t.replace(f,(function(e,r,n,i,a,l){return n||(n=i),g+=t.slice(u,l).replace($e,or),r&&(o=!0,g+="' +\n__e("+r+") +\n'"),a&&(s=!0,g+="';\n"+a+";\n__p += '"),n&&(g+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),u=l+e.length,e})),g+="';\n";var p=ze.call(r,"variable")&&r.variable;if(p){if(de.test(p))throw new De("Invalid `variable` option passed into `_.template`")}else g="with (obj) {\n"+g+"\n}\n";g=(s?g.replace(P,""):g).replace(Y,"$1").replace(W,"$1;"),g="function("+(p||"obj")+") {\n"+(p?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+g+"return __p\n}";var m=Ga((function(){return Fe(l,h+"return "+g).apply(e,c)}));if(m.source=g,Js(m))throw m;return m},Hr.times=function(e,t){if((e=pa(e))<1||e>u)return[];var r=g,n=vr(e,g);t=co(t),e-=g;for(var i=Qt(n,t);++r<e;)t(r);return i},Hr.toFinite=ha,Hr.toInteger=pa,Hr.toLength=ma,Hr.toLower=function(e){return va(e).toLowerCase()},Hr.toNumber=ba,Hr.toSafeInteger=function(e){return e?ln(pa(e),-9007199254740991,u):0===e?e:0},Hr.toString=va,Hr.toUpper=function(e){return va(e).toUpperCase()},Hr.trim=function(t,r,n){if((t=va(t))&&(n||r===e))return Jt(t);if(!t||!(r=ui(r)))return t;var i=fr(t),o=fr(r);return $i(i,tr(i,o),rr(i,o)+1).join("")},Hr.trimEnd=function(t,r,n){if((t=va(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=ui(r)))return t;var i=fr(t);return $i(i,0,rr(i,fr(r))+1).join("")},Hr.trimStart=function(t,r,n){if((t=va(t))&&(n||r===e))return t.replace(oe,"");if(!t||!(r=ui(r)))return t;var i=fr(t);return $i(i,tr(i,fr(r))).join("")},Hr.truncate=function(t,r){var n=30,i="...";if(ta(r)){var o="separator"in r?r.separator:o;n="length"in r?pa(r.length):n,i="omission"in r?ui(r.omission):i}var s=(t=va(t)).length;if(sr(t)){var a=fr(t);s=a.length}if(n>=s)return t;var l=n-gr(i);if(l<1)return i;var c=a?$i(a,0,l).join(""):t.slice(0,l);if(o===e)return c+i;if(a&&(l+=c.length-l),sa(o)){if(t.slice(l).search(o)){var u,d=c;for(o.global||(o=Oe(o.source,va(he.exec(o))+"g")),o.lastIndex=0;u=o.exec(d);)var g=u.index;c=c.slice(0,g===e?l:g)}}else if(t.indexOf(ui(o),l)!=l){var f=c.lastIndexOf(o);f>-1&&(c=c.slice(0,f))}return c+i},Hr.unescape=function(e){return(e=va(e))&&V.test(e)?e.replace(N,pr):e},Hr.uniqueId=function(e){var t=++Re;return va(e)+t},Hr.upperCase=Qa,Hr.upperFirst=Ja,Hr.each=vs,Hr.eachRight=xs,Hr.first=qo,ll(Hr,(yl={},wn(Hr,(function(e,t){ze.call(Hr.prototype,t)||(yl[t]=e)})),yl),{chain:!1}),Hr.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Hr[e].placeholder=Hr})),Ot(["drop","take"],(function(t,r){Nr.prototype[t]=function(n){n=n===e?1:yr(pa(n),0);var i=this.__filtered__&&!r?new Nr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,g),type:t+(i.__dir__<0?"Right":"")}),i},Nr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Nr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:co(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Ot(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Nr.prototype[e]=function(){return this[r](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Nr.prototype[e]=function(){return this.__filtered__?new Nr(this):this[r](1)}})),Nr.prototype.compact=function(){return this.filter(il)},Nr.prototype.find=function(e){return this.filter(e).head()},Nr.prototype.findLast=function(e){return this.reverse().find(e)},Nr.prototype.invokeMap=Jn((function(e,t){return"function"==typeof e?new Nr(this):this.map((function(r){return kn(r,e,t)}))})),Nr.prototype.reject=function(e){return this.filter(zs(co(e)))},Nr.prototype.slice=function(t,r){t=pa(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Nr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=pa(r))<0?n.dropRight(-r):n.take(r-t)),n)},Nr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Nr.prototype.toArray=function(){return this.take(g)},wn(Nr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),i=/^(?:head|last)$/.test(r),o=Hr[i?"take"+("last"==r?"Right":""):r],s=i||/^find/.test(r);o&&(Hr.prototype[r]=function(){var r=this.__wrapped__,a=i?[1]:arguments,l=r instanceof Nr,c=a[0],u=l||Us(r),d=function(e){var t=o.apply(Hr,Tt([e],a));return i&&g?t[0]:t};u&&n&&"function"==typeof c&&1!=c.length&&(l=u=!1);var g=this.__chain__,f=!!this.__actions__.length,h=s&&!g,p=l&&!f;if(!s&&u){r=p?r:new Nr(this);var m=t.apply(r,a);return m.__actions__.push({func:hs,args:[d],thisArg:e}),new Wr(m,g)}return h&&p?t.apply(this,a):(m=this.thru(d),h?i?m.value()[0]:m.value():m)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=ke[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Hr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Us(i)?i:[],e)}return this[r]((function(r){return t.apply(Us(r)?r:[],e)}))}})),wn(Nr.prototype,(function(e,t){var r=Hr[t];if(r){var n=r.name+"";ze.call(kr,n)||(kr[n]=[]),kr[n].push({name:t,func:r})}})),kr[Pi(e,2).name]=[{name:"wrapper",func:e}],Nr.prototype.clone=function(){var e=new Nr(this.__wrapped__);return e.__actions__=ji(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ji(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ji(this.__views__),e},Nr.prototype.reverse=function(){if(this.__filtered__){var e=new Nr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Nr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Us(e),n=t<0,i=r?e.length:0,o=function(e,t,r){for(var n=-1,i=r.length;++n<i;){var o=r[n],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=vr(t,e+s);break;case"takeRight":e=yr(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,l=a-s,c=n?a:s-1,u=this.__iteratees__,d=u.length,g=0,f=vr(l,this.__takeCount__);if(!r||!n&&i==l&&f==l)return pi(e,this.__actions__);var h=[];e:for(;l--&&g<f;){for(var p=-1,m=e[c+=t];++p<d;){var b=u[p],y=b.iteratee,v=b.type,x=y(m);if(2==v)m=x;else if(!x){if(1==v)continue e;break e}}h[g++]=m}return h},Hr.prototype.at=ps,Hr.prototype.chain=function(){return fs(this)},Hr.prototype.commit=function(){return new Wr(this.value(),this.__chain__)},Hr.prototype.next=function(){this.__values__===e&&(this.__values__=fa(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Hr.prototype.plant=function(t){for(var r,n=this;n instanceof Yr;){var i=Ho(n);i.__index__=0,i.__values__=e,r?o.__wrapped__=i:r=i;var o=i;n=n.__wrapped__}return o.__wrapped__=t,r},Hr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Nr){var r=t;return this.__actions__.length&&(r=new Nr(this)),(r=r.reverse()).__actions__.push({func:hs,args:[ts],thisArg:e}),new Wr(r,this.__chain__)}return this.thru(ts)},Hr.prototype.toJSON=Hr.prototype.valueOf=Hr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Hr.prototype.first=Hr.prototype.head,Ke&&(Hr.prototype[Ke]=function(){return this}),Hr}();mt?((mt.exports=mr)._=mr,pt._=mr):ht._=mr}.call(Q);var te=ee.exports,re=function(e,t){return re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},re(e,t)};var ne=function(){return ne=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ne.apply(this,arguments)};var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},se="object"==typeof ie&&ie&&ie.Object===Object&&ie,ae="object"==typeof self&&self&&self.Object===Object&&self,le=se||ae||Function("return this")(),ce=le,ue=function(){return ce.Date.now()},de=/\s/;var ge=function(e){for(var t=e.length;t--&&de.test(e.charAt(t)););return t},fe=/^\s+/;var he=function(e){return e?e.slice(0,ge(e)+1).replace(fe,""):e},pe=le.Symbol,me=pe,be=Object.prototype,ye=be.hasOwnProperty,ve=be.toString,xe=me?me.toStringTag:void 0;var we=function(e){var t=ye.call(e,xe),r=e[xe];try{e[xe]=void 0;var n=!0}catch(e){}var i=ve.call(e);return n&&(t?e[xe]=r:delete e[xe]),i},$e=Object.prototype.toString;var _e=we,De=function(e){return $e.call(e)},Fe=pe?pe.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Fe&&Fe in Object(e)?_e(e):De(e)},Se=function(e){return null!=e&&"object"==typeof e};var Oe=he,Ee=oe,je=function(e){return"symbol"==typeof e||Se(e)&&"[object Symbol]"==Ce(e)},ke=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,Me=/^0o[0-7]+$/i,Be=parseInt;var Te=oe,ze=ue,Re=function(e){if("number"==typeof e)return e;if(je(e))return NaN;if(Ee(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ee(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Oe(e);var r=Ae.test(e);return r||Me.test(e)?Be(e.slice(2),r?2:8):ke.test(e)?NaN:+e},Le=Math.max,Ie=Math.min;var He=function(e,t,r){var n,i,o,s,a,l,c=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,o=i;return n=i=void 0,c=t,s=e.apply(o,r)}function h(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=o}function p(){var e=ze();if(h(e))return m(e);a=setTimeout(p,function(e){var r=t-(e-l);return d?Ie(r,o-(e-c)):r}(e))}function m(e){return a=void 0,g&&n?f(e):(n=i=void 0,s)}function b(){var e=ze(),r=h(e);if(n=arguments,i=this,l=e,r){if(void 0===a)return function(e){return c=e,a=setTimeout(p,t),u?f(e):s}(l);if(d)return clearTimeout(a),a=setTimeout(p,t),f(l)}return void 0===a&&(a=setTimeout(p,t)),s}return t=Re(t)||0,Te(r)&&(u=!!r.leading,o=(d="maxWait"in r)?Le(Re(r.maxWait)||0,t):o,g="trailing"in r?!!r.trailing:g),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=l=i=a=void 0},b.flush=function(){return void 0===a?s:m(ze())},b},Pe=He,Ye=oe;var We=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ye(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Pe(e,t,{leading:n,maxWait:t,trailing:i})},Ne=function(e,t,r,n){switch(t){case"debounce":return He(e,r,n);case"throttle":return We(e,r,n);default:return e}},Ue=function(e){return"function"==typeof e},Ve=function(){return"undefined"==typeof window},qe=function(e){return e instanceof Element||e instanceof HTMLDocument},Ze=function(e,t,r,n){return function(i){var o=i.width,s=i.height;t((function(t){return t.width===o&&t.height===s||t.width===o&&!n||t.height===s&&!r?t:(e&&Ue(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Ve()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Ve())return null;if(t)return document.querySelector(t);if(n&&qe(n))return n;if(r.targetRef&&qe(r.targetRef.current))return r.targetRef.current;var i=v(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,s=void 0===o||o,a=t.onResize;if(i||s){var l=Ze(a,r.setState.bind(r),i,s);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!Ve()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Ue(t)?"renderProp":Ue(n)?"childFunction":a(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,s=void 0===o?1e3:o,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,Ve()||(r.resizeHandler=Ne(r.createResizeHandler,i,s,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}re(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ve()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,s=void 0===o?"div":o,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(s,null)}}}(u);var Xe=Ve()?d:g;function Qe(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,g=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,m=o(r),b=o(null),y=null!=f?f:b,v=o(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return Xe((function(){if(!Ve()){var e=Ze(p,$,u,g);v.current=Ne((function(t){(u||g)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!Ve()&&e({width:n,height:i}),m.current=!1}))}),n,a,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,a,l,u,g,p,h,y.current]),ne({ref:y},w)}var Je={exports:{}};Je.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",c="month",u="quarter",d="year",g="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,s=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:a,D:g,h:s,m:o,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=m;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},_=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=t.name;x[a]=t,i=a}return!n&&i&&(v=i),i||!n&&v},D=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new C(r)},F=y;F.l=_,F.i=$,F.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function m(e){this.$L=_(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(h);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return F},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=D(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return D(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<D(e)},b.$g=function(e,t,r){return F.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!F.u(t)||t,u=F.p(e),f=function(e,t){var i=F.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(a)},h=function(e,t){return F.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,x=(p<v?p+7:p)-v;return f(n?b-x:b+(6-x),m);case a:case g:return h(y+"Hours",0);case s:return h(y+"Minutes",1);case o:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=F.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[a]=u+"Date",r[g]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[s]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],h=l===a?this.$D+(t-this.$W):t;if(l===c||l===d){var p=this.clone().set(g,1);p.$d[f](h),p.init(),this.$d=p.set(g,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[F.p(e)]()},b.add=function(n,u){var g,f=this;n=Number(n);var h=F.p(u),p=function(e){var t=D(f);return F.w(t.date(t.date()+Math.round(e*n)),f)};if(h===c)return this.set(c,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===a)return p(1);if(h===l)return p(7);var m=(g={},g[o]=t,g[s]=r,g[i]=e,g)[h]||1,b=this.$d.getTime()+n*m;return F.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),o=this.$H,s=this.$m,a=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},g=function(e){return F.s(o%12||12,e,"0")},h=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return a+1;case"MM":return F.s(a+1,2,"0");case"MMM":return d(r.monthsShort,a,c,3);case"MMMM":return d(c,a);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return F.s(o,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(o,s,!0);case"A":return h(o,s,!1);case"m":return String(s);case"mm":return F.s(s,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,g,f){var h,p=this,m=F.p(g),b=D(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,x=function(){return F.m(p,b)};switch(m){case d:h=x()/12;break;case c:h=x();break;case u:h=x()/3;break;case l:h=(v-y)/6048e5;break;case a:h=(v-y)/864e5;break;case s:h=v/r;break;case o:h=v/t;break;case i:h=v/e;break;default:h=v}return f?h:F.a(h)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=_(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return F.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),S=C.prototype;return D.prototype=S,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",c],["$y",d],["$D",g]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,C,D),e.$i=!0),D},D.locale=_,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var Ke,Ge,et,tt=J(Je.exports);!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const s=n+o;if(s<e.length){const t=Math.floor(s/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=r;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ke||(Ke={})),function(e){e.AM="AM",e.PM="PM"}(Ge||(Ge={})),function(e){e.roundToNearestHour=(e,t)=>{const r=tt(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=tt(e,n),o=tt(t,n);i.isSame(o)&&(o=o.add(1,"day"));const s=[];for(;i.isBefore(o);)s.push(i.format(r)),i=i.add(1,"hour");return s},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Ge.AM};if(!t)return r;try{if("24hr"===e){const n=it(t,e);r.minute=Ke.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=Ge.AM,r.hour=0===i?"12":Ke.padValue(i.toString())):(r.period=Ge.PM,r.hour=12===i?i.toString():Ke.padValue((i-12).toString()))}else{const n=it(t,e);r.hour=Ke.padValue(n.hour),r.minute=Ke.padValue(n.minute),r.period="am"===n.period.toLowerCase()?Ge.AM:Ge.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Ke.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Ke.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Ke.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Ke.padValue(n.toString()):13===n?Ke.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Ge.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Ke.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=it(e,t),n=Ke.padValue(r.hour);let i=`${n}:${Ke.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),ot(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let s=0,a=1440-t;for(n&&(s=e.timeToMinutes(n)),i&&(a=e.timeToMinutes(i));s<=a;){let e=Math.floor(s/60);const n=s%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=ot(e,n,t);o.push(r)}else{const t=ot(e,n);o.push(t)}s+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let s=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===s?s="am":"p"===s&&(s="pm"),"24hr"===t)return"pm"===s&&i<12?i+=12:("am"===s&&12===i||24===i)&&(i=0),ot(i,o);s?0===i||24===i?(s="am",i=12):i>12&&(s="pm",i-=12):(s=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return ot(i,o,s)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(et||(et={}));const rt=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},nt=e=>{const t=parseInt(e);return t>=0&&t<=59},it=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!rt(r[0],t)||!nt(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!rt(r[0],t)||!nt(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},ot=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,st=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],at=252;var lt=Array.isArray,ct="object"==typeof Q&&Q&&Q.Object===Object&&Q,ut="object"==typeof self&&self&&self.Object===Object&&self,dt=ct||ut||Function("return this")(),gt=dt.Symbol,ft=gt,ht=Object.prototype,pt=ht.hasOwnProperty,mt=ht.toString,bt=ft?ft.toStringTag:void 0;var yt=function(e){var t=pt.call(e,bt),r=e[bt];try{e[bt]=void 0;var n=!0}catch(e){}var i=mt.call(e);return n&&(t?e[bt]=r:delete e[bt]),i},vt=Object.prototype.toString;var xt=yt,wt=function(e){return vt.call(e)},$t=gt?gt.toStringTag:void 0;var _t=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$t&&$t in Object(e)?xt(e):wt(e)};var Dt=_t,Ft=function(e){return null!=e&&"object"==typeof e};var Ct=function(e){return"symbol"==typeof e||Ft(e)&&"[object Symbol]"==Dt(e)},St=lt,Ot=Ct,Et=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jt=/^\w*$/;var kt=function(e,t){if(St(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ot(e))||(jt.test(e)||!Et.test(e)||null!=t&&e in Object(t))};var At=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Mt=_t,Bt=At;var Tt,zt=function(e){if(!Bt(e))return!1;var t=Mt(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Rt=dt["__core-js_shared__"],Lt=(Tt=/[^.]+$/.exec(Rt&&Rt.keys&&Rt.keys.IE_PROTO||""))?"Symbol(src)_1."+Tt:"";var It=function(e){return!!Lt&&Lt in e},Ht=Function.prototype.toString;var Pt=zt,Yt=It,Wt=At,Nt=function(e){if(null!=e){try{return Ht.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ut=/^\[object .+?Constructor\]$/,Vt=Function.prototype,qt=Object.prototype,Zt=Vt.toString,Xt=qt.hasOwnProperty,Qt=RegExp("^"+Zt.call(Xt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Jt=function(e,t){return null==e?void 0:e[t]},Kt=function(e){return!(!Wt(e)||Yt(e))&&(Pt(e)?Qt:Ut).test(Nt(e))},Gt=Jt;var er=function(e,t){var r=Gt(e,t);return Kt(r)?r:void 0},tr=er(Object,"create"),rr=tr;var nr=function(){this.__data__=rr?rr(null):{},this.size=0};var ir=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},or=tr,sr=Object.prototype.hasOwnProperty;var ar=function(e){var t=this.__data__;if(or){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return sr.call(t,e)?t[e]:void 0},lr=tr,cr=Object.prototype.hasOwnProperty;var ur=function(e){var t=this.__data__;return lr?void 0!==t[e]:cr.call(t,e)},dr=tr;var gr=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=dr&&void 0===t?"__lodash_hash_undefined__":t,this},fr=nr,hr=ir,pr=ar,mr=ur,br=gr;function yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}yr.prototype.clear=fr,yr.prototype.delete=hr,yr.prototype.get=pr,yr.prototype.has=mr,yr.prototype.set=br;var vr=yr;var xr=function(){this.__data__=[],this.size=0};var wr=function(e,t){return e===t||e!=e&&t!=t};var $r=function(e,t){for(var r=e.length;r--;)if(wr(e[r][0],t))return r;return-1},_r=$r,Dr=Array.prototype.splice;var Fr=function(e){var t=this.__data__,r=_r(t,e);return!(r<0)&&(r==t.length-1?t.pop():Dr.call(t,r,1),--this.size,!0)},Cr=$r;var Sr=function(e){var t=this.__data__,r=Cr(t,e);return r<0?void 0:t[r][1]},Or=$r;var Er=function(e){return Or(this.__data__,e)>-1},jr=$r;var kr=function(e,t){var r=this.__data__,n=jr(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ar=xr,Mr=Fr,Br=Sr,Tr=Er,zr=kr;function Rr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Rr.prototype.clear=Ar,Rr.prototype.delete=Mr,Rr.prototype.get=Br,Rr.prototype.has=Tr,Rr.prototype.set=zr;var Lr=Rr,Ir=er(dt,"Map"),Hr=vr,Pr=Lr,Yr=Ir;var Wr=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Nr=function(e,t){var r=e.__data__;return Wr(t)?r["string"==typeof t?"string":"hash"]:r.map},Ur=Nr;var Vr=function(e){var t=Ur(this,e).delete(e);return this.size-=t?1:0,t},qr=Nr;var Zr=function(e){return qr(this,e).get(e)},Xr=Nr;var Qr=function(e){return Xr(this,e).has(e)},Jr=Nr;var Kr=function(e,t){var r=Jr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Gr=function(){this.size=0,this.__data__={hash:new Hr,map:new(Yr||Pr),string:new Hr}},en=Vr,tn=Zr,rn=Qr,nn=Kr;function on(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}on.prototype.clear=Gr,on.prototype.delete=en,on.prototype.get=tn,on.prototype.has=rn,on.prototype.set=nn;var sn=on;function an(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(an.Cache||sn),r}an.Cache=sn;var ln=an;var cn=function(e){var t=ln(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dn=/\\(\\)?/g,gn=cn((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(un,(function(e,r,n,i){t.push(n?i.replace(dn,"$1"):r||e)})),t}));var fn=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},hn=lt,pn=Ct,mn=gt?gt.prototype:void 0,bn=mn?mn.toString:void 0;var yn=function e(t){if("string"==typeof t)return t;if(hn(t))return fn(t,e)+"";if(pn(t))return bn?bn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},vn=yn;var xn=lt,wn=kt,$n=gn,_n=function(e){return null==e?"":vn(e)};var Dn=Ct;var Fn=function(e,t){return xn(e)?e:wn(e,t)?[e]:$n(_n(e))},Cn=function(e){if("string"==typeof e||Dn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Sn=function(e,t){for(var r=0,n=(t=Fn(t,e)).length;null!=e&&r<n;)e=e[Cn(t[r++])];return r&&r==n?e:void 0};var On=J((function(e,t,r){var n=null==e?void 0:Sn(e,t);return void 0===n?r:n}));const En=(e,t,r)=>On(r,t)||On(e,t),jn=(e,t)=>{const r=t||e.defaultValue;return On(e.collections,r)},kn={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},An=e=>t=>{var r;const n=t.theme,i=jn(kn,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?En(i,e,n.overrides.motion):i[e]},Mn={"duration-150":An("duration-150"),"duration-250":An("duration-250"),"duration-350":An("duration-350"),"duration-500":An("duration-500"),"duration-800":An("duration-800"),"duration-1000":An("duration-1000"),"ease-default":An("ease-default"),"ease-standard":An("ease-standard"),"ease-entrance":An("ease-entrance"),"ease-exit":An("ease-exit")},Bn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Tn=e=>t=>{var r;const n=t.theme,i=jn(Bn,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?En(i,e,n.overrides.primitiveColour):i[e]},zn={"brand-10":Tn("brand-10"),"brand-20":Tn("brand-20"),"brand-30":Tn("brand-30"),"brand-40":Tn("brand-40"),"brand-50":Tn("brand-50"),"brand-60":Tn("brand-60"),"brand-70":Tn("brand-70"),"brand-80":Tn("brand-80"),"brand-90":Tn("brand-90"),"brand-95":Tn("brand-95"),"brand-100":Tn("brand-100"),"primary-10":Tn("primary-10"),"primary-20":Tn("primary-20"),"primary-30":Tn("primary-30"),"primary-40":Tn("primary-40"),"primary-50":Tn("primary-50"),"primary-60":Tn("primary-60"),"primary-70":Tn("primary-70"),"primary-80":Tn("primary-80"),"primary-90":Tn("primary-90"),"primary-95":Tn("primary-95"),"primary-100":Tn("primary-100"),"secondary-10":Tn("secondary-10"),"secondary-20":Tn("secondary-20"),"secondary-30":Tn("secondary-30"),"secondary-40":Tn("secondary-40"),"secondary-50":Tn("secondary-50"),"secondary-60":Tn("secondary-60"),"secondary-70":Tn("secondary-70"),"secondary-80":Tn("secondary-80"),"secondary-90":Tn("secondary-90"),"secondary-95":Tn("secondary-95"),"secondary-100":Tn("secondary-100"),"neutral-10":Tn("neutral-10"),"neutral-20":Tn("neutral-20"),"neutral-30":Tn("neutral-30"),"neutral-40":Tn("neutral-40"),"neutral-50":Tn("neutral-50"),"neutral-60":Tn("neutral-60"),"neutral-70":Tn("neutral-70"),"neutral-80":Tn("neutral-80"),"neutral-90":Tn("neutral-90"),"neutral-95":Tn("neutral-95"),"neutral-100":Tn("neutral-100"),"success-10":Tn("success-10"),"success-20":Tn("success-20"),"success-30":Tn("success-30"),"success-40":Tn("success-40"),"success-50":Tn("success-50"),"success-60":Tn("success-60"),"success-70":Tn("success-70"),"success-80":Tn("success-80"),"success-90":Tn("success-90"),"success-95":Tn("success-95"),"success-100":Tn("success-100"),"warning-10":Tn("warning-10"),"warning-20":Tn("warning-20"),"warning-30":Tn("warning-30"),"warning-40":Tn("warning-40"),"warning-50":Tn("warning-50"),"warning-60":Tn("warning-60"),"warning-70":Tn("warning-70"),"warning-80":Tn("warning-80"),"warning-90":Tn("warning-90"),"warning-95":Tn("warning-95"),"warning-100":Tn("warning-100"),"error-10":Tn("error-10"),"error-20":Tn("error-20"),"error-30":Tn("error-30"),"error-40":Tn("error-40"),"error-50":Tn("error-50"),"error-60":Tn("error-60"),"error-70":Tn("error-70"),"error-80":Tn("error-80"),"error-90":Tn("error-90"),"error-95":Tn("error-95"),"error-100":Tn("error-100"),"info-10":Tn("info-10"),"info-20":Tn("info-20"),"info-30":Tn("info-30"),"info-40":Tn("info-40"),"info-50":Tn("info-50"),"info-60":Tn("info-60"),"info-70":Tn("info-70"),"info-80":Tn("info-80"),"info-90":Tn("info-90"),"info-95":Tn("info-95"),"info-100":Tn("info-100"),white:Tn("white"),black:Tn("black"),"primary-inverse":Tn("primary-inverse")},Rn={text:Tn("neutral-20"),"text-subtle":Tn("neutral-30"),"text-subtler":Tn("neutral-50"),"text-subtlest":Tn("neutral-60"),"text-primary":Tn("primary-50"),"text-hover":Tn("primary-40"),"text-selected":Tn("primary-50"),"text-selected-hover":Tn("primary-40"),"text-disabled":Tn("neutral-50"),"text-disabled-subtle":Tn("neutral-60"),"text-disabled-subtlest":Tn("neutral-80"),"text-selected-disabled":Tn("neutral-20"),"text-success":Tn("success-40"),"text-warning":Tn("warning-40"),"text-error":Tn("error-40"),"text-info":Tn("info-40"),"text-inverse":Tn("white"),icon:Tn("neutral-50"),"icon-subtle":Tn("neutral-60"),"icon-strongest":Tn("neutral-20"),"icon-primary":Tn("primary-50"),"icon-primary-subtle":Tn("primary-60"),"icon-primary-subtlest":Tn("primary-70"),"icon-hover":Tn("primary-40"),"icon-selected":Tn("primary-50"),"icon-selected-hover":Tn("primary-40"),"icon-disabled":Tn("neutral-50"),"icon-disabled-subtle":Tn("neutral-60"),"icon-selected-disabled":Tn("neutral-60"),"icon-success":Tn("success-50"),"icon-warning":Tn("warning-60"),"icon-error":Tn("error-50"),"icon-error-strong":Tn("error-40"),"icon-info":Tn("info-50"),"icon-inverse":Tn("white"),"icon-primary-inverse":Tn("primary-inverse"),border:Tn("neutral-90"),"border-strong":Tn("neutral-70"),"border-stronger":Tn("neutral-50"),"border-primary":Tn("primary-50"),"border-primary-subtle":Tn("primary-60"),"border-hover":Tn("primary-90"),"border-hover-strong":Tn("primary-60"),"border-selected":Tn("primary-50"),"border-selected-subtle":Tn("primary-70"),"border-selected-subtlest":Tn("primary-90"),"border-selected-hover":Tn("primary-40"),"border-focus":Tn("primary-60"),"border-focus-strong":Tn("primary-50"),"border-disabled":Tn("neutral-90"),"border-selected-disabled":Tn("neutral-70"),"border-success":Tn("success-60"),"border-warning":Tn("warning-60"),"border-error":Tn("error-60"),"border-error-focus":Tn("error-60"),"border-error-focus-strong":Tn("error-40"),"border-error-strong":Tn("error-40"),"border-info":Tn("info-60"),bg:Tn("white"),"bg-strong":Tn("neutral-100"),"bg-stronger":Tn("neutral-95"),"bg-strongest":Tn("neutral-90"),"bg-hover":Tn("primary-95"),"bg-hover-strong":Tn("primary-90"),"bg-hover-subtle":Tn("primary-100"),"bg-hover-neutral":Tn("neutral-100"),"bg-hover-neutral-strong":Tn("neutral-90"),"bg-selected":Tn("primary-95"),"bg-selected-hover":Tn("primary-90"),"bg-selected-strong":Tn("primary-90"),"bg-selected-stronger":Tn("primary-70"),"bg-selected-strongest":Tn("primary-50"),"bg-selected-strongest-hover":Tn("primary-40"),"bg-disabled":Tn("neutral-95"),"bg-selected-disabled":Tn("neutral-95"),"bg-selected-stronger-disabled":Tn("neutral-70"),"bg-success":Tn("success-100"),"bg-success-hover":Tn("success-95"),"bg-success-strong":Tn("success-50"),"bg-success-strong-hover":Tn("success-40"),"bg-warning":Tn("warning-100"),"bg-warning-hover":Tn("warning-95"),"bg-warning-strong":Tn("warning-50"),"bg-warning-strong-hover":Tn("warning-40"),"bg-info":Tn("info-100"),"bg-info-hover":Tn("info-95"),"bg-info-strong":Tn("info-50"),"bg-info-strong-hover":Tn("info-40"),"bg-error":Tn("error-100"),"bg-error-hover":Tn("error-95"),"bg-error-strong":Tn("error-50"),"bg-error-strong-hover":Tn("error-40"),"bg-inverse":Tn("neutral-20"),"bg-inverse-subtle":Tn("neutral-30"),"bg-inverse-subtler":Tn("neutral-50"),"bg-inverse-subtlest":Tn("neutral-60"),"bg-inverse-hover":Tn("neutral-40"),"bg-primary":Tn("primary-50"),"bg-primary-subtle":Tn("primary-60"),"bg-primary-subtler":Tn("primary-95"),"bg-primary-subtlest":Tn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Tn("primary-40"),"bg-primary-subtlest-hover":Tn("primary-90"),"bg-primary-subtlest-selected":Tn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Tn("primary-50"),"hyperlink-hover":Tn("primary-40"),"hyperlink-visited":Tn("primary-40"),"hyperlink-inverse":Tn("primary-inverse"),"focus-ring":Tn("black"),"focus-ring-inverse":Tn("white")},Ln={collections:{lifesg:Rn,bookingsg:Rn,rbs:Rn,mylegacy:Rn,ccube:Rn,pa:Rn},defaultValue:"lifesg"},In=e=>t=>{var r;const n=t.theme,i=jn(Ln,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?En(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},Hn={text:In("text"),"text-subtle":In("text-subtle"),"text-subtler":In("text-subtler"),"text-subtlest":In("text-subtlest"),"text-primary":In("text-primary"),"text-hover":In("text-hover"),"text-selected":In("text-selected"),"text-selected-hover":In("text-selected-hover"),"text-disabled":In("text-disabled"),"text-disabled-subtle":In("text-disabled-subtle"),"text-disabled-subtlest":In("text-disabled-subtlest"),"text-selected-disabled":In("text-selected-disabled"),"text-success":In("text-success"),"text-warning":In("text-warning"),"text-error":In("text-error"),"text-info":In("text-info"),"text-inverse":In("text-inverse"),icon:In("icon"),"icon-subtle":In("icon-subtle"),"icon-strongest":In("icon-strongest"),"icon-primary":In("icon-primary"),"icon-primary-subtle":In("icon-primary-subtle"),"icon-primary-subtlest":In("icon-primary-subtlest"),"icon-hover":In("icon-hover"),"icon-selected":In("icon-selected"),"icon-selected-hover":In("icon-selected-hover"),"icon-disabled":In("icon-disabled"),"icon-disabled-subtle":In("icon-disabled-subtle"),"icon-selected-disabled":In("icon-selected-disabled"),"icon-success":In("icon-success"),"icon-warning":In("icon-warning"),"icon-error":In("icon-error"),"icon-error-strong":In("icon-error-strong"),"icon-info":In("icon-info"),"icon-inverse":In("icon-inverse"),"icon-primary-inverse":In("icon-primary-inverse"),border:In("border"),"border-strong":In("border-strong"),"border-stronger":In("border-stronger"),"border-primary":In("border-primary"),"border-primary-subtle":In("border-primary-subtle"),"border-hover":In("border-hover"),"border-hover-strong":In("border-hover-strong"),"border-selected":In("border-selected"),"border-selected-subtle":In("border-selected-subtle"),"border-selected-subtlest":In("border-selected-subtlest"),"border-selected-hover":In("border-selected-hover"),"border-focus":In("border-focus"),"border-focus-strong":In("border-focus-strong"),"border-disabled":In("border-disabled"),"border-selected-disabled":In("border-selected-disabled"),"border-success":In("border-success"),"border-warning":In("border-warning"),"border-error":In("border-error"),"border-error-focus":In("border-error-focus"),"border-error-focus-strong":In("border-error-focus-strong"),"border-error-strong":In("border-error-strong"),"border-info":In("border-info"),bg:In("bg"),"bg-strong":In("bg-strong"),"bg-stronger":In("bg-stronger"),"bg-strongest":In("bg-strongest"),"bg-hover":In("bg-hover"),"bg-hover-strong":In("bg-hover-strong"),"bg-hover-subtle":In("bg-hover-subtle"),"bg-hover-neutral":In("bg-hover-neutral"),"bg-hover-neutral-strong":In("bg-hover-neutral-strong"),"bg-selected":In("bg-selected"),"bg-selected-hover":In("bg-selected-hover"),"bg-selected-strong":In("bg-selected-strong"),"bg-selected-stronger":In("bg-selected-stronger"),"bg-selected-strongest":In("bg-selected-strongest"),"bg-selected-strongest-hover":In("bg-selected-strongest-hover"),"bg-disabled":In("bg-disabled"),"bg-selected-disabled":In("bg-selected-disabled"),"bg-selected-stronger-disabled":In("bg-selected-stronger-disabled"),"bg-success":In("bg-success"),"bg-success-hover":In("bg-success-hover"),"bg-success-strong":In("bg-success-strong"),"bg-success-strong-hover":In("bg-success-strong-hover"),"bg-warning":In("bg-warning"),"bg-warning-hover":In("bg-warning-hover"),"bg-warning-strong":In("bg-warning-strong"),"bg-warning-strong-hover":In("bg-warning-strong-hover"),"bg-info":In("bg-info"),"bg-info-hover":In("bg-info-hover"),"bg-info-strong":In("bg-info-strong"),"bg-info-strong-hover":In("bg-info-strong-hover"),"bg-error":In("bg-error"),"bg-error-hover":In("bg-error-hover"),"bg-error-strong":In("bg-error-strong"),"bg-error-strong-hover":In("bg-error-strong-hover"),"bg-inverse":In("bg-inverse"),"bg-inverse-subtle":In("bg-inverse-subtle"),"bg-inverse-subtler":In("bg-inverse-subtler"),"bg-inverse-subtlest":In("bg-inverse-subtlest"),"bg-inverse-hover":In("bg-inverse-hover"),"bg-primary":In("bg-primary"),"bg-primary-subtle":In("bg-primary-subtle"),"bg-primary-subtler":In("bg-primary-subtler"),"bg-primary-subtlest":In("bg-primary-subtlest"),"bg-available":In("bg-available"),"bg-primary-hover":In("bg-primary-hover"),"bg-primary-subtlest-hover":In("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":In("bg-primary-subtlest-selected"),"overlay-strong":In("overlay-strong"),"overlay-subtle":In("overlay-subtle"),hyperlink:In("hyperlink"),"hyperlink-hover":In("hyperlink-hover"),"hyperlink-visited":In("hyperlink-visited"),"hyperlink-inverse":In("hyperlink-inverse"),"focus-ring":In("focus-ring"),"focus-ring-inverse":In("focus-ring-inverse")},Pn={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>t=>{var r,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(r="function"==typeof o?o(t):o)&&void 0!==r?r:Nn["width-010"](t),c=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(i="function"==typeof a?a(t):a)&&void 0!==i?i:Hn.border(t),d=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return $`
            background-image: url("data:image/svg+xml,${d}");
            border-radius: ${c};
        `}}},defaultValue:"lifesg"},Yn=e=>t=>{var r;const n=t.theme,i=jn(Pn,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${En(i,e,n.overrides.border)}px`:`${i[e]}px`},Wn=e=>1===e.length&&"theme"in e[0],Nn={"width-005":Yn("width-005"),"width-010":Yn("width-010"),"width-020":Yn("width-020"),"width-040":Yn("width-040"),solid:(Un="solid",e=>{var t;const r=e.theme,n=jn(Pn,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?En(n,Un,r.overrides.border):n[Un];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...t)=>r=>{var n;const i=Wn(t)?[]:t,o=Wn(t)?t[0]:r,s=o.theme,a=jn(Pn,null==s?void 0:s.borderScheme);return((null===(n=null==s?void 0:s.overrides)||void 0===n?void 0:n.border)?En(a,e,s.overrides.border):a[e])(...i)(o)})("dashed-default")};var Un;const Vn={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},qn=e=>t=>{var r;const n=t.theme,i=jn(Vn,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?En(i,e,n.overrides.breakpoint):i[e],o},Zn={"xxs-min":qn("xxs-min"),"xxs-max":qn("xxs-max"),"xs-min":qn("xs-min"),"xs-max":qn("xs-max"),"sm-min":qn("sm-min"),"sm-max":qn("sm-max"),"md-min":qn("md-min"),"md-max":qn("md-max"),"lg-min":qn("lg-min"),"lg-max":qn("lg-max"),"xl-min":qn("xl-min"),"xl-max":qn("xl-max"),"xxl-min":qn("xxl-min"),"xxs-column":qn("xxs-column"),"xs-column":qn("xs-column"),"sm-column":qn("sm-column"),"md-column":qn("md-column"),"lg-column":qn("lg-column"),"xl-column":qn("xl-column"),"xxl-column":qn("xxl-column"),"xxs-gutter":qn("xxs-gutter"),"xs-gutter":qn("xs-gutter"),"sm-gutter":qn("sm-gutter"),"md-gutter":qn("md-gutter"),"lg-gutter":qn("lg-gutter"),"xl-gutter":qn("xl-gutter"),"xxl-gutter":qn("xxl-gutter"),"xxs-margin":qn("xxs-margin"),"xs-margin":qn("xs-margin"),"sm-margin":qn("sm-margin"),"md-margin":qn("md-margin"),"lg-margin":qn("lg-margin"),"xl-margin":qn("xl-margin"),"xxl-margin":qn("xxl-margin")},Xn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Zn["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Qn={MaxWidth:Xn("max-width"),MinWidth:Xn("min-width")},Jn={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Kn={collections:{lifesg:Jn,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:Jn,mylegacy:Jn,ccube:Jn,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},Gn=e=>t=>{var r;const n=t.theme,i=jn(Kn,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?En(i,e,n.overrides.fontSpec):i[e]},ei={"header-size-xxl":Gn("header-size-xxl"),"header-size-xl":Gn("header-size-xl"),"header-size-lg":Gn("header-size-lg"),"header-size-md":Gn("header-size-md"),"header-size-sm":Gn("header-size-sm"),"header-size-xs":Gn("header-size-xs"),"header-lh-xxl":Gn("header-lh-xxl"),"header-lh-xl":Gn("header-lh-xl"),"header-lh-lg":Gn("header-lh-lg"),"header-lh-md":Gn("header-lh-md"),"header-lh-sm":Gn("header-lh-sm"),"header-lh-xs":Gn("header-lh-xs"),"header-ls-xxl":Gn("header-ls-xxl"),"header-ls-xl":Gn("header-ls-xl"),"header-ls-lg":Gn("header-ls-lg"),"header-ls-md":Gn("header-ls-md"),"header-ls-sm":Gn("header-ls-sm"),"header-ls-xs":Gn("header-ls-xs"),"weight-light":Gn("weight-light"),"weight-regular":Gn("weight-regular"),"weight-semibold":Gn("weight-semibold"),"weight-bold":Gn("weight-bold"),"font-family":Gn("font-family"),"body-size-baseline":Gn("body-size-baseline"),"body-size-md":Gn("body-size-md"),"body-size-sm":Gn("body-size-sm"),"body-size-xs":Gn("body-size-xs"),"body-lh-baseline":Gn("body-lh-baseline"),"body-lh-md":Gn("body-lh-md"),"body-lh-sm":Gn("body-lh-sm"),"body-lh-xs":Gn("body-lh-xs"),"body-ls-baseline":Gn("body-ls-baseline"),"body-ls-md":Gn("body-ls-md"),"body-ls-sm":Gn("body-ls-sm"),"body-ls-xs":Gn("body-ls-xs"),"formlabel-size-baseline":Gn("formlabel-size-baseline"),"formlabel-size-lg":Gn("formlabel-size-lg"),"formlabel-lh-baseline":Gn("formlabel-lh-baseline"),"formlabel-lh-lg":Gn("formlabel-lh-lg"),"formlabel-ls-baseline":Gn("formlabel-ls-baseline"),"formlabel-ls-lg":Gn("formlabel-ls-lg")},ti={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},ri=e=>t=>{var r;const n=t.theme,i=jn(ti,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${En(i,e,n.overrides.radius)}px`:`${i[e]}px`},ni={none:ri("none"),xs:ri("xs"),sm:ri("sm"),md:ri("md"),lg:ri("lg"),full:ri("full")},ii={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},oi=e=>t=>{var r;const n=t.theme,i=jn(ii,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${En(i,e,n.overrides.spacing)}px`:`${i[e]}px`},si={"spacing-0":oi("spacing-0"),"spacing-4":oi("spacing-4"),"spacing-8":oi("spacing-8"),"spacing-12":oi("spacing-12"),"spacing-16":oi("spacing-16"),"spacing-20":oi("spacing-20"),"spacing-24":oi("spacing-24"),"spacing-32":oi("spacing-32"),"spacing-40":oi("spacing-40"),"spacing-48":oi("spacing-48"),"spacing-64":oi("spacing-64"),"spacing-72":oi("spacing-72"),"layout-xs":oi("layout-xs"),"layout-sm":oi("layout-sm"),"layout-md":oi("layout-md"),"layout-lg":oi("layout-lg"),"layout-xl":oi("layout-xl"),"layout-xxl":oi("layout-xxl"),"layout-xxxl":oi("layout-xxxl")},ai=(e,t,r,n)=>$`
    font-family: ${Gn("font-family")};
    font-size: ${Gn(e)};
    font-weight: ${Gn(t)};
    line-height: ${Gn(r)};
    letter-spacing: ${Gn(n)};
`,li={"header-xxl-light":ai("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":ai("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":ai("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":ai("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":ai("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":ai("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":ai("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":ai("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":ai("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":ai("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":ai("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":ai("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":ai("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":ai("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":ai("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":ai("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":ai("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":ai("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":ai("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":ai("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":ai("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":ai("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":ai("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":ai("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":ai("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":ai("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":ai("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":ai("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":ai("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":ai("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":ai("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":ai("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":ai("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":ai("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":ai("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":ai("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":ai("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":ai("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":ai("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":ai("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":ai("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":ai("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},ci={collections:{lifesg:li,bookingsg:li,rbs:li,mylegacy:li,ccube:li,pa:li},defaultValue:"lifesg"},ui=e=>t=>{var r;const n=t.theme,i=jn(ci,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?En(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},di={"header-xxl-light":ui("header-xxl-light"),"header-xxl-regular":ui("header-xxl-regular"),"header-xxl-semibold":ui("header-xxl-semibold"),"header-xxl-bold":ui("header-xxl-bold"),"header-xl-light":ui("header-xl-light"),"header-xl-regular":ui("header-xl-regular"),"header-xl-semibold":ui("header-xl-semibold"),"header-xl-bold":ui("header-xl-bold"),"header-lg-light":ui("header-lg-light"),"header-lg-regular":ui("header-lg-regular"),"header-lg-semibold":ui("header-lg-semibold"),"header-lg-bold":ui("header-lg-bold"),"header-md-light":ui("header-md-light"),"header-md-regular":ui("header-md-regular"),"header-md-semibold":ui("header-md-semibold"),"header-md-bold":ui("header-md-bold"),"header-sm-light":ui("header-sm-light"),"header-sm-regular":ui("header-sm-regular"),"header-sm-semibold":ui("header-sm-semibold"),"header-sm-bold":ui("header-sm-bold"),"header-xs-light":ui("header-xs-light"),"header-xs-regular":ui("header-xs-regular"),"header-xs-semibold":ui("header-xs-semibold"),"header-xs-bold":ui("header-xs-bold"),"body-baseline-light":ui("body-baseline-light"),"body-baseline-regular":ui("body-baseline-regular"),"body-baseline-semibold":ui("body-baseline-semibold"),"body-baseline-bold":ui("body-baseline-bold"),"body-md-light":ui("body-md-light"),"body-md-regular":ui("body-md-regular"),"body-md-semibold":ui("body-md-semibold"),"body-md-bold":ui("body-md-bold"),"body-sm-light":ui("body-sm-light"),"body-sm-regular":ui("body-sm-regular"),"body-sm-semibold":ui("body-sm-semibold"),"body-sm-bold":ui("body-sm-bold"),"body-xs-light":ui("body-xs-light"),"body-xs-regular":ui("body-xs-regular"),"body-xs-semibold":ui("body-xs-semibold"),"body-xs-bold":ui("body-xs-bold"),"formlabel-baseline-semibold":ui("formlabel-baseline-semibold"),"formlabel-lg-semibold":ui("formlabel-lg-semibold")},gi=Object.assign(Object.assign({},Hn),{Primitive:zn}),fi=Object.assign(Object.assign({},di),{Spec:ei}),hi=Mn,pi=Nn,mi=si,bi=ni,yi=Zn,vi=Qn,xi={colourScheme:"lifesg",fontScheme:"lifesg",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},wi=e=>"small"===e?2.5:3;w.div`
    position: relative;
    width: 100%;
    ${e=>{const t=wi(e.$variant);return $`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const $i=$`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${mi["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>wi(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${bi.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${gi["border-focus"]};
    }
`,_i=w.button`
    ${$i}
    cursor: pointer;
`;w.div`
    ${$i}
`;const Di=_`
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
`;w.div`
    position: relative;
    border: ${pi["width-010"]} ${pi.solid} ${gi.border};
    border-radius: ${bi.sm};
    background: ${gi.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${gi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${gi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?$`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:$`
                animation: ${Di} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?$`
                background: ${gi["bg-disabled"]};

                ${_i} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${gi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?$`
                border: none;
                background: transparent !important;

                ${_i} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?$`
                border-color: ${gi["border-error"]};

                :focus-within {
                    border-color: ${gi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${gi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,w.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${hi["duration-250"]} ${hi["ease-default"]};
    margin-left: ${mi["spacing-16"]};
`,w(F)`
    color: ${gi.icon};
`,w.div`
    height: 1px;
    background: ${gi.border};
    margin: 0 ${mi["spacing-8"]};
`,w.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return $`
                color: ${gi["text-disabled"]};
            `}}
`;const Fi=w.div`
    ${e=>"small"===e.$variant?fi["body-md-regular"]:fi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return $`
                    ${t=1,$`
    display: -webkit-box;
    -webkit-line-clamp: ${t};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
                `;var t}}
    overflow: hidden;
`;var Ci;w(Fi)`
    color: ${gi["text-subtler"]};
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Ci||(Ci={}));const Si=()=>{const[e,t]=s(void 0),r=C();return d((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Ci.Change,e),r.events.emit(Ci.Ready),()=>r.events.off(Ci.Change,e)}),[r]),e},Oi=w.div`
    display: flex;
    flex-direction: column;
`,Ei=e=>"right"===e?"bottom-end":"bottom-start",ji=({enabled:n,isOpen:i,onOpen:s,onClose:a,onDismiss:l,renderElement:c,renderDropdown:u,customZIndex:d,clickToToggle:g=!1,offset:f=0,alignment:h="left",fitAvailableHeight:p})=>{var m;const b=D(),y=yi["sm-max"]({theme:b}),v=o(null),x=o(null),{width:w}=Qe({targetRef:v,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<y;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:_,floatingStyles:F,context:C}=S({open:i,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!i?null==s||s():!e&&i&&(null==a||a(r))},whileElementsMounted:O,placement:Ei(h),middleware:[E(f),j(),k({limiter:A()}),M({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),$]}),H=Si(),{isMounted:P,styles:Y}=B(C,{initial:{opacity:0},open:{opacity:1},duration:300}),W=T(C,{enabled:n,toggle:g}),N=z(C,{enabled:n}),{getReferenceProps:U,getFloatingProps:V}=R([W,N]);return e(t,{children:[r("div",Object.assign({ref:e=>{v.current=e,_.setReference(e)}},U(),{children:c()})),P&&r(L,{children:r(I,Object.assign({context:C,modal:!1,initialFocus:x,returnFocus:!1},{children:r("div",Object.assign({ref:_.setFloating,style:Object.assign(Object.assign({},F),{zIndex:null!==(m=null!=d?d:H)&&void 0!==m?m:50})},V(),{children:r(Oi,Object.assign({ref:x,style:Object.assign({},Y),inert:Y.opacity<1?"":void 0},{children:u({elementWidth:w})}))}))}))})]})},ki=w.div`
    --vertical-inset: ${mi["spacing-24"]};
    --horizontal-inset: ${mi["spacing-20"]};
    --header-bottom-spacing: ${mi["spacing-4"]};

    border: ${pi["width-010"]} ${pi.solid} ${gi.border};
    border-radius: ${bi.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${vi.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`;var Ai={exports:{}};Ai.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[r,a("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[r,a("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function g(r){var n,i;n=r,i=o&&o.formats;for(var s=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),a=s.length,l=0;l<a;l+=1){var c=s[l],u=d[c],g=u&&u[0],f=u&&u[1];s[l]=f?{regex:g,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<a;r+=1){var i=s[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],c=!0===s[3],u=l||c,d=s[2];c&&(d=s[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=g(t)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,h=s||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var b=a||0,y=l||0,v=c||0,x=u||0;return d?new Date(Date.UTC(p,m,h,b,y,v,x+60*d.offset*1e3)):r?new Date(Date.UTC(p,m,h,b,y,v,x)):new Date(p,m,h,b,y,v,x)}catch(e){return new Date("")}}(t,a,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var f=a.length,h=1;h<=f;h+=1){s[1]=a[h-1];var p=r.apply(this,s);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}h===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Mi=J(Ai.exports),Bi={exports:{}};Bi.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),s=r(t),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var Ti=J(Bi.exports),zi={exports:{}};zi.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ri=J(zi.exports),Li={exports:{}};Li.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ii,Hi,Pi,Yi=J(Li.exports),Wi={exports:{}},Ni=J(Wi.exports=(Ii={year:0,month:1,day:2,hour:3,minute:4,second:5},Hi={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Hi[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Hi[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,c=a.value,u=Ii[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],g=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+g+":"+o[4]+":"+o[5]+":000",h=+e;return(r.utc(f).valueOf()-(h-=h%1e3))/6e4},s=t.prototype;s.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=r(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return a.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var s=i&&t,a=i||t||n,l=o(+r(),a);if("string"!=typeof e)return r(e).tz(a);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var s=o(n-=60*(i-t)*1e3,r);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(r.utc(e,s).valueOf(),l,a),u=c[0],d=c[1],g=r(u).utcOffset(d);return g.$x.$timezone=a,g},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));tt.extend(Ti),tt.extend(Yi),tt.extend(Ri),tt.extend(Mi),tt.extend(Ni),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=tt(t).startOf("week");return Ui(r).map((e=>Vi(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Vi(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(tt(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+tt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=tt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?tt(n):void 0,i?tt(i):void 0),s=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!s}}(Pi||(Pi={}));const Ui=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Vi=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},qi=[1,3,5,7,8,10,12],Zi=[4,6,9,11];var Xi,Qi,Ji;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),s=parseInt(n);return 0==i?"1":qi.includes(o)?Math.min(i,31).toString():Zi.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=tt(e,r);return tt(t,r).diff(n,"minute")},e.toDayjs=e=>e?tt(e):tt(),e.addMinutesToTime=(e,t,r="HH:mm")=>tt(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>tt(e).isSame(tt(t),r)}(Xi||(Xi={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!tt(e).isBefore(n,"day"))||!(!i||!tt(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(tt(e).isValid())return e}return""}}(Qi||(Qi={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ji||(Ji={}));const Ki=w.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Gi=_`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,eo=w.div`
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
    animation: ${Gi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,to=w(eo)`
    animation-delay: -0.45s;
`,ro=w(eo)`
    animation-delay: -0.3s;
`,no=w(eo)`
    animation-delay: -0.15s;
`,io=w.button`
    padding: ${mi["spacing-8"]} ${mi["spacing-16"]};
    min-width: 4rem;
    border: ${pi["width-010"]} ${pi.solid} transparent;
    border-radius: ${bi.sm};
    transition: all ${hi["duration-250"]} ${hi["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return $`
                    background-color: ${gi.Primitive.white};
                    border-color: ${e.$buttonIsDanger?gi["border-error-strong"]:gi["border-primary"]};

                    color: ${e.$buttonIsDanger?gi["text-error"]:gi["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${gi["bg-hover-neutral"]};
                    }
                `;case"light":return $`
                    background-color: ${gi.bg};
                    border-color: ${gi.border};

                    color: ${e.$buttonIsDanger?gi["text-error"]:gi["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${gi["bg-hover-neutral"]};
                    }
                `;case"link":return $`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?gi["text-error"]:gi["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${gi["bg-hover-neutral"]};
                    }
                `;case"disabled":return $`
                    background-color: ${gi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${gi["text-disabled"]};
                `;default:return $`
                    background-color: ${e.$buttonIsDanger?gi["bg-error-strong"]:gi["bg-primary"]};

                    ${vi.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${gi["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?gi["bg-error-strong-hover"]:gi["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return $`
                    height: 2.5rem;
                    ${fi["body-md-semibold"]}

                    ${vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return $`
                    height: 4rem;
                    ${fi["header-md-semibold"]}

                    ${vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return $`
                    height: 3rem;
                    ${fi["header-xs-semibold"]}

                    ${vi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,oo=w((({color:t,className:n,size:i})=>e(Ki,Object.assign({className:n,$size:i,$color:t},{children:[r(eo,{id:"inner1"}),r(to,{id:"inner2"}),r(ro,{id:"inner3"}),r(no,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,so=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,c=Z(t,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(io,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[s&&r(oo,{}),r("span",{children:i})]}))};so.displayName="Button.Default";const ao=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,c=Z(t,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(io,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[s&&r(oo,{}),r("span",{children:i})]}))};ao.displayName="Button.Small";const lo=(t,n)=>{const{children:i,disabled:o=!1,loading:s=!1,styleType:a="default",danger:l=!1}=t,c=Z(t,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(io,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[s&&r(oo,{}),r("span",{children:i})]}))};lo.displayName="Button.Large";const co={Default:i.forwardRef(so),Small:i.forwardRef(ao),Large:i.forwardRef(lo)},uo=w.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${mi["spacing-24"]};
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

        ${({$highlight:e})=>e&&$`
                background-color: ${gi["bg-hover-neutral"]};
            `}
    }
`,go=i.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:s="button"}=e,a=Z(e,["children","focusHighlight","focusOutline","type"]);return r(uo,Object.assign({ref:t,$outline:o,$highlight:i,type:s},a,{children:n}))})),fo=$`
    color: ${gi.icon};
    height: 1rem;
    width: 1rem;
`,ho=w(N)`
    ${fo}
`,po=w(U)`
    ${fo}
`,mo=w(F)`
    ${fo}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,bo=w.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,yo=w.div`
    display: flex;
    flex: 1;
    position: relative;
`,vo=w.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,xo=w.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${gi.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return $`
                display: none;
            `}}
`,wo=w.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,$o=w.div`
    display: flex;
`,_o=w.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?$`
                display: none;
            `:e.$expanded?$`
                ${mo} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Do=w.span`
    ${fi["body-md-regular"]}
    color: ${gi.text};
`,Fo=w.div`
    display: flex;
`,Co=w(go)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,So=w.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Oo=w(co.Small)`
    flex: 1;
`,Eo=w.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,jo=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${bi.md};
    margin: 0 0.5rem;
    transition: ${hi["duration-150"]} ${hi["ease-default"]};

    // default styles
    ${fi["body-md-regular"]}
    border-radius: ${bi.md};
    border: ${pi["width-010"]} ${pi.solid} transparent;
    background-clip: border-box;
    color: ${gi.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?$`
                cursor: pointer;
            `:e.$disabledDisplay?$`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?$`
                background: ${gi["bg-selected"]};
                border-color: ${gi["border-selected"]};
                color: ${gi["text-selected"]};
                font-weight: ${fi.Spec["weight-semibold"]};

                ${t&&$`
                    &:hover {
                        background: ${gi["bg-selected-hover"]};
                        border-color: ${gi["border-selected-hover"]};
                        color: ${gi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?$`
                color: ${gi["text-primary"]};
                font-weight: ${fi.Spec["weight-semibold"]};
            `:r?$`
                color: ${gi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?$`
                &:hover {
                    background: ${gi["bg-selected-hover"]};
                    border-color: ${gi["border-selected-hover"]};
                    color: ${gi["text-selected-hover"]};
                    font-weight: ${fi.Spec["weight-semibold"]};
                }
            `:$`
            &:hover {
                background: ${gi["bg-hover"]};
                color: ${gi["text-hover"]};
                font-weight: ${fi.Spec["weight-semibold"]};
            }
        `}}
`,ko=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:s,minDate:a,maxDate:l,allowDisabledSelection:c,onMonthSelect:u})=>{const d=f((()=>Pi.generateMonths(tt(e))),[e]),g=e=>{const r="start"===t&&i&&e.isAfter(i,"month")&&s,o="end"===t&&n&&e.isBefore(n,"month")&&s;return r||o},h=e=>{const t=e.format("MMMM"),r=(n=e,!Pi.isWithinRange(n,a?tt(a):void 0,l?tt(l):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":tt().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||g(e),interactive:!r||c,month:t,variant:i}};return d.length?r(Eo,{children:d.map((e=>{const{disabledDisplay:t,interactive:n,variant:i,month:o}=h(e);return r(jo,Object.assign({$variant:i,$disabledDisplay:t,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n)},{children:o}),o)}))}):null},Ao=w.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Mo=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${hi["duration-150"]} ${hi["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${fi["body-md-regular"]}
    border-radius: ${bi.md};
    border: ${pi["width-010"]} ${pi.solid} transparent;
    background-clip: border-box;
    color: ${gi.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?$`
                cursor: pointer;
            `:t?$`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?$`
                background: ${gi["bg-selected"]};
                border-color: ${gi["border-selected"]};
                color: ${gi["text-selected"]};
                font-weight: ${fi.Spec["weight-semibold"]};

                ${t&&$`
                    &:hover {
                        background: ${gi["bg-selected-hover"]};
                        border-color: ${gi["border-selected-hover"]};
                        color: ${gi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?$`
                color: ${gi["text-primary"]};
                font-weight: ${fi.Spec["weight-semibold"]};
            `:"other-decade"===e||r?$`
                color: ${gi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?$`
                &:hover {
                    background: ${gi["bg-selected-hover"]};
                    border-color: ${gi["border-selected-hover"]};
                    color: ${gi["text-selected-hover"]};
                    font-weight: ${fi.Spec["weight-semibold"]};
                }
            `:$`
            &:hover {
                background: ${gi["bg-hover"]};
                color: ${gi["text-hover"]};
                font-weight: ${fi.Spec["weight-semibold"]};
            }
        `}}
`,Bo=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:s,minDate:a,maxDate:l,allowDisabledSelection:c,onYearSelect:u})=>{const d=f((()=>Pi.generateDecadeOfYears(tt(e))),[e]),g=e=>{const r="start"===t&&i&&e.isAfter(i,"year")&&s,o="end"===t&&n&&e.isBefore(n,"year")&&s;return r||o},h=e=>{const t=[0,11].includes(d.indexOf(e)),r=e.year(),n=(i=e,!Pi.isWithinRange(i,a?tt(a):void 0,l?tt(l):void 0,"year"));var i;const s=t?"other-decade":o.isSame(e,"year")?"selected-year":tt().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||g(e),interactive:!n||c,year:r,variant:s}};return d.length?r(Ao,{children:d.map((e=>{const{disabledDisplay:t,interactive:n,variant:i,year:o}=h(e);return r(Mo,Object.assign({$variant:i,$disabledDisplay:t,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(e,!n)},{children:o}),o)}))}):null},To=i.forwardRef(((n,i)=>{var{children:a,initialCalendarDate:l,minDate:c,maxDate:u,currentFocus:g,selectedStartDate:f,selectedEndDate:p,selectWithinRange:m,dynamicHeight:b=!1,allowDisabledSelection:y,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:_=!0,getLeftArrowDate:D,getRightArrowDate:F,isLeftArrowDisabled:C,isRightArrowDisabled:S,getMonthHeaderLabel:O,getYearHeaderLabel:E}=n,j=Z(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[k,A]=s(Xi.toDayjs(l)),[M,B]=s(Xi.toDayjs(l)),[T,z]=s("default"),R=o(null),L=o(null),I=o();h(i,(()=>({defaultView(){z("default")},resetView(){const e=Xi.toDayjs(l);A(e),B(e),z("default")},setCalendarDate(e){const t=Xi.toDayjs(e);A(t),B(t)}}))),d((()=>{const e=Xi.toDayjs(l);A(e),B(e)}),[l]),d((()=>{V(M)}),[M]);const H=()=>{"month-options"!==T?(z("month-options"),I.current.focus()):(z("default"),A(M))},P=()=>{"default"!==T?(z("default"),A(M)):z("year-options")},Y=()=>{I.current.focus();const e=D?D(k):k.subtract(1,"month");switch(T){case"default":B(e),A(e);break;case"month-options":A((e=>e.subtract(1,"year")));break;case"year-options":A((e=>e.subtract(10,"year")))}},W=()=>{I.current.focus();const e=F?F(k):k.add(1,"month");switch(T){case"default":B(e),A(e);break;case"month-options":A((e=>e.add(1,"year")));break;case"year-options":A((e=>e.add(10,"year")))}},N=e=>{A(e),B(e),x||z("default")},U=()=>{const e=Xi.toDayjs(l);A(e),B(e),"default"===T?q("reset"):z("default")},V=e=>{v&&v(e)},q=e=>{$&&$(e)},X=()=>{if(!c||y)return!1;const e=tt(c);return"month-options"===T?!Pi.isPreviousYearWithinRange(k,e):"year-options"===T?!Pi.isPreviousDecadeWithinRange(k,e):C?C(k):!Pi.isPreviousMonthWithinRange(k,e)},Q=()=>{if(!u||y)return!1;const e=tt(u);return"month-options"===T?!Pi.isNextYearWithinRange(k,e):"year-options"===T?!Pi.isNextDecadeWithinRange(k,e):S?S(k):!Pi.isNextMonthWithinRange(k,e)},J=()=>{if("year-options"===T){const{beginDecade:e,endDecade:t}=Pi.getStartEndDecade(k);return`${e} to ${t}`}return E?E(k):k.format("YYYY")},K=()=>{const n=O?O(k):k.format("MMM");return e(t,{children:[e(_o,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:H},{children:[r(Do,{children:n}),r(mo,{})]})),e(_o,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:P},{children:[r(Do,{children:J()}),r(mo,{})]}))]})},G=()=>{switch(T){case"month-options":return r(ko,{calendarDate:k,currentFocus:g,minDate:c,maxDate:u,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:M,isNewSelection:m,onMonthSelect:N,allowDisabledSelection:y});case"year-options":return r(Bo,{calendarDate:k,currentFocus:g,minDate:c,maxDate:u,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:M,isNewSelection:m,onYearSelect:N,allowDisabledSelection:y});default:return null}};return e(bo,Object.assign({ref:I,"data-id":"calendar-container","data-testid":"calendar-container"},j,{children:[_&&e(wo,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[r($o,{children:K()}),e(Fo,{children:[r(Co,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:Y},{children:r(ho,{})})),r(Co,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:Q(),focusHighlight:!1,tabIndex:-1,onClick:W},{children:r(po,{})}))]})]})),r(yo,{children:(()=>{const n="function"==typeof a?a({calendarDate:M,currentView:T}):a;return e(t,b?{children:["default"===T&&n,G()]}:{children:[r(vo,{children:n}),r(xo,Object.assign({$visible:"default"!==T},{children:G()}))]})})()}),(()=>{if(!x)return;const t=!!("default"===T)&&w;return e(So,{children:[r(Oo,Object.assign({ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),r(Oo,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{t||(A(M),"default"===T?q("confirmed"):z("default"))},disabled:t},{children:"Done"}))]})})()]}))})),zo=w.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Ro=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${fi["body-sm-semibold"]};
    color: ${gi.text};
`,Lo=w.div`
    grid-column: 1 / -1;
    display: flex;
`,Io=e=>{let t=gi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=gi["bg-hover"],r=gi["bg-hover"];break;case"hover":t=gi["bg-hover-strong"],r=gi["bg-hover-strong"];break;case"hover-outline":t=gi["bg-hover-subtle"],r=gi["border-hover"];break;case"selected-outline":t=gi["bg-selected"],r=gi["border-selected"];break;case"selected-outline-subtle":t=gi["bg-selected"],r=gi["border-selected-subtle"];break;case"selected-hover":t=gi["bg-selected-hover"];break;case"selected-hover-outline":t=gi["bg-selected-hover"],r=gi["border-selected-hover"]}return{color:t,borderColor:r}},Ho=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Po=w.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${hi["duration-150"]} ${hi["ease-default"]};
    border: ${pi["width-010"]} ${pi.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Io(e);return $`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Yo=w(Po)`
    left: 0;
`,Wo=w(Po)`
    right: 0;
`,No=w.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${hi["duration-150"]} ${hi["ease-default"]};

    border: ${pi["width-010"]} ${pi.solid} transparent;
    border-radius: ${bi.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Io(e);return $`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Uo=w(No)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Vo=w(No)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,qo=w.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${fi["body-md-regular"]}
    transition: ${hi["duration-150"]} ${hi["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return $`
                color: ${gi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return $`
                    font-weight: ${fi.Spec["weight-semibold"]};
                    color: ${gi["text-selected"]};
                `;case"selected-hover":return $`
                    font-weight: ${fi.Spec["weight-semibold"]};
                    color: ${gi["text-selected-hover"]};
                `;case"current":return $`
                    font-weight: ${fi.Spec["weight-semibold"]};
                    color: ${gi["text-primary"]};
                `;case"hover":return $`
                    font-weight: ${fi.Spec["weight-semibold"]};
                    color: ${gi["text-hover"]};
                `;case"unavailable":return $`
                    color: ${gi["text-disabled-subtlest"]};
                `;case"hidden":return $`
                    visibility: hidden;
                `;default:return $`
                    color: ${gi.text};
                `}}}
`,Zo=w.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Xo=({bgLeft:t,bgRight:n,circleLeft:i,circleRight:o,labelType:s,disabled:a,interactive:l,currentDateIndicator:c,date:u,onSelect:d,onHover:g,onHoverEnd:f})=>{const h=tt().isSame(u,"day");return e(Ho,{children:[r(Yo,{$type:t}),r(Uo,{$type:i}),r(Wo,{$type:n}),r(Vo,{$type:o}),e(qo,Object.assign({$type:s,$disabled:a,$interactive:l,onClick:()=>{d(u)},onMouseEnter:()=>{g(u)},onMouseLeave:()=>{f&&f(u)}},{children:[u.date(),c&&h&&r(Zo,{$disabled:a})]}))]})},Qo=({date:e,calendarDate:t,startDate:n,endDate:i,currentFocus:o,hoverDate:s,minDate:a,maxDate:l,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,showActiveMonthDaysOnly:g,onSelect:f,onHover:h})=>{const p=Pi.isDisabledDay(e,c,a,l),m=!p||u,b=()=>{const e=tt(s),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let a,l,c,u;return"start"===o&&i&&t&&(n&&r?(c=s,u=i):(a=s,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,u=s):(a=i||n,l=s)),{hoverStart:a,hoverEnd:l,overlapStart:c,overlapEnd:u}},y={date:e,calendarDate:t,disabled:p,interactive:m,currentDateIndicator:!0,onSelect:()=>{f(e,!m)},onHover:()=>{h(e.format("YYYY-MM-DD"),!m)}};return r(Xo,Object.assign({},y,(()=>{const r={};if(t.month()!==e.month())r.labelType=g?"hidden":"unavailable";else if(tt().isSame(e,"day")&&!p)r.labelType="current";else if(d){const t="end"===o&&n&&e.isBefore(n),s="start"===o&&i&&e.isAfter(i);(t||s)&&(r.labelType="unavailable")}return r})(),(()=>{const r={},o=e.isSame(n,"day"),s=e.isSame(i,"day");return g&&t.month()!==e.month()?(r.labelType="hidden",r):((n&&o||i&&s)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),n&&i&&e.isBetween(n,i,"day","[]")&&(r.labelType="selected",o||(r.bgLeft="selected-outline-subtle"),s||(r.bgRight="selected-outline-subtle")),r)})(),(()=>{if(!s)return;const t={},r=e.isSame(s,"day"),{hoverStart:o,hoverEnd:a,overlapStart:l,overlapEnd:c}=b();if(r){const r=e.isSame(n,"day"),o=e.isSame(i,"day");r||o?(t.labelType="selected-hover",t.circleLeft="selected-hover-outline",t.circleRight="selected-hover-outline"):(t.labelType="hover",t.circleLeft="hover",t.circleRight="hover")}if(o&&a){if(e.isBetween(o,a,"day","[]")){const r=e.isSame(o,"day"),n=e.isSame(a,"day");r||(t.labelType="hover",t.bgLeft="hover-outline"),n||(t.labelType="hover",t.bgRight="hover-outline")}return t}return l&&c?(e.isBetween(l,c,"day","[]")&&r&&(t.labelType="selected-hover",t.circleLeft="selected-hover",t.circleRight="selected-hover"),t):t})()))};tt.extend(Ti);const Jo=({calendarDate:t,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:g,allowDisabledSelection:h,showActiveMonthDaysOnly:p})=>{const m=f((()=>Pi.generateDays(t)),[t]),[b,y]=s(""),v=(e,t)=>{t&&!h||l(e)},x=(e,t)=>{t&&!h||(y(e),c(e))},w=()=>{y(""),c("")};return e(zo,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,t)=>r(Ro,{children:tt(e).format("ddd")},`week-day-${t}`))),m.map(((e,s)=>r(Lo,Object.assign({onMouseLeave:w},{children:e.map(((e,s)=>r(Qo,{date:e,calendarDate:t,startDate:o,endDate:a,hoverDate:b,currentFocus:n,minDate:d,maxDate:g,disabledDates:i,allowDisabledSelection:h,isNewSelection:u,showActiveMonthDaysOnly:p,onSelect:v,onHover:x},`day-${s}`)))}),s)))]}))},Ko=({date:e,calendarDate:t,selectedDate:n,hoverDate:i,minDate:o,maxDate:s,disabledDates:a,allowDisabledSelection:l,numberOfDays:c,onSelect:u,onHover:d})=>{const g=Pi.isDisabledDay(e,a,o,s),f=!g||l,{start:h,end:p}=n?Pi.getFixedRangeStartEnd(Xi.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?Pi.getFixedRangeStartEnd(Xi.toDayjs(i),c):{start:void 0,end:void 0},y=n&&e.isBetween(h,p,"day","[]"),v=i&&e.isBetween(m,b,"day","[]"),x=y&&e.isSame(h,"day")||v&&e.isSame(m,"day"),w=y&&e.isSame(p,"day")||v&&e.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},_={date:e,calendarDate:t,disabled:g,interactive:f,currentDateIndicator:!0,onSelect:()=>{u(e,!f)},onHover:()=>{d(e.format("YYYY-MM-DD"),!f)}};return r(Xo,Object.assign({},_,(()=>{const r={};return y||v?r.labelType="selected":t.month()!==e.month()?r.labelType="unavailable":tt().isSame(e,"day")&&!g&&(r.labelType="current"),r})(),(()=>{const t={},r=e.format("YYYY-MM-DD");return v&&$(t,"hover",r===m,r===b),y&&$(t,"selected-outline",r===h,r===p),y&&v&&($(t,"selected-hover-outline",x,w),r===m&&r!==h&&(t.circleLeft="selected-hover")),t})()))},Go=({calendarDate:t,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u,numberOfDays:d})=>{const g=f((()=>Pi.generateDays(t)),[t]),[h,p]=s(""),m=(e,t)=>{t&&!u||(o(e),e&&!tt(e).isSame(e,"month")&&p(""))},b=(e,t)=>{t&&!u||(p(e),a(e))},y=()=>{p(""),a("")};return e(zo,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,t)=>r(Ro,{children:tt(e).format("ddd")},`week-day-${t}`))),g.map(((e,o)=>r(Lo,Object.assign({onMouseLeave:y},{children:e.map(((e,o)=>r(Ko,{date:e,calendarDate:t,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:m,onHover:b,numberOfDays:d},`day-${o}`)))}),o)))]}))},es=w.div`
    width: 100%;
    background: ${gi.bg};
`,ts=({date:e,calendarDate:t,selectedDate:n,hoverDate:i,minDate:o,maxDate:s,disabledDates:a,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:u,onHover:d})=>{const g=Pi.isDisabledDay(e,a,o,s),f=!g||l,h={date:e,calendarDate:t,disabled:g,interactive:f,currentDateIndicator:!0,onSelect:()=>{u(e,!f)},onHover:()=>{d(e.format("YYYY-MM-DD"),!f)}};return r(Xo,Object.assign({},h,(()=>{const r={};t.month()!==e.month()?r.labelType=c?"hidden":"unavailable":tt().isSame(e,"day")&&!g&&(r.labelType="current");const o=e.isSame(n,"day"),s=e.isSame(i,"day");return o&&s?(r.labelType="selected-hover",r.circleLeft="selected-hover-outline",r.circleRight="selected-hover-outline"):o?(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"):s&&(r.labelType="hover",r.circleLeft="hover-subtle",r.circleRight="hover-subtle"),r})()))};tt.extend(Ti);const rs=({calendarDate:t,disabledDates:n,selectedDate:i,onSelect:o,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:d})=>{const g=f((()=>Pi.generateDays(t)),[t]),[h,p]=s(""),m=(e,t)=>{t&&!u||o(e)},b=(e,t)=>{t&&!u||(p(e),a(e))},y=()=>{p(""),a("")};return e(zo,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,t)=>r(Ro,{children:tt(e).format("ddd")},`week-day-${t}`))),g.map(((e,o)=>r(Lo,Object.assign({onMouseLeave:y},{children:e.map(((e,o)=>r(ts,{date:e,calendarDate:t,selectedDate:i,hoverDate:h,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:d,onSelect:m,onHover:b},`day-${o}`)))}),o)))]}))},ns=({date:e,calendarDate:t,selectedDate:n,hoverDate:i,minDate:o,maxDate:s,disabledDates:a,allowDisabledSelection:l,onSelect:c,onHover:u})=>{const d=Pi.isDisabledDay(e,a,o,s),g=!d||l,{start:f,end:h}=Pi.getWeekStartEnd(Xi.toDayjs(n)),{start:p,end:m}=Pi.getWeekStartEnd(Xi.toDayjs(i)),b=n&&e.isBetween(f,h,"day","[]"),y=i&&e.isBetween(p,m,"day","[]"),v=b&&e.isSame(f)||y&&e.isSame(p),x=b&&e.isSame(h)||y&&e.isSame(m),w={date:e,calendarDate:t,disabled:d,interactive:g,currentDateIndicator:!0,onSelect:()=>{c(e,!g)},onHover:()=>{u(e.format("YYYY-MM-DD"),!g)}};return r(Xo,Object.assign({},w,(()=>{const r={};return t.month()!==e.month()?r.labelType="unavailable":tt().isSame(e,"day")&&!d&&(r.labelType="current"),r})(),(()=>{const e={};let t,r;return b&&y?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):y&&(t="hover",r="hover"),t&&(e.labelType=r,v?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},is=({calendarDate:t,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u})=>{const d=f((()=>Pi.generateDays(t)),[t]),[g,h]=s(""),p=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");o(r),e&&!tt(e).isSame(r,"month")&&h("")},m=(e,t)=>{t&&!u||(h(e),a(e))},b=()=>{h(""),a("")};return e(zo,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((e,t)=>r(Ro,{children:tt(e).format("ddd")},`week-day-${t}`))),d.map(((e,o)=>r(Lo,Object.assign({onMouseLeave:b},{children:e.map(((e,o)=>r(ns,{date:e,calendarDate:t,selectedDate:i,hoverDate:g,minDate:l,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:p,onHover:m},`day-${o}`)))}),o)))]}))},os=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:t,onSelect:n,onHover:i,onDismiss:s,value:a,endValue:l,currentFocus:c,withButton:u,variant:d,minDate:g,maxDate:f,allowDisabledSelection:p,selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:y,showActiveMonthDaysOnly:v=!1},x)=>{const w=o(),$=o(void 0);h(x,(()=>({reset(){w.current.resetView()},setCalendarDate(e){w.current.setCalendarDate(e)}})));const _=e=>{const t=e.format("YYYY-MM-DD");w.current.setCalendarDate(t),F(t)},D=e=>{C(e)},F=e=>{n&&n(e)},C=e=>{i&&i(e)},S=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}};return r(es,{children:r(To,Object.assign({ref:w,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:s,minDate:g,maxDate:f,selectWithinRange:m,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||S(e),$.current=e},initialCalendarDate:b},{children:({calendarDate:t})=>(t=>{switch(d){case"week":return r(is,{calendarDate:t,disabledDates:e,selectedStartDate:a,minDate:g,maxDate:f,allowDisabledSelection:p,onSelect:_,onHover:D});case"fixed-range":return r(Go,{calendarDate:t,disabledDates:e,selectedStartDate:a,minDate:g,maxDate:f,allowDisabledSelection:p,onSelect:_,onHover:D,numberOfDays:y});case"single":return r(rs,{calendarDate:t,disabledDates:e,selectedDate:a,minDate:g,maxDate:f,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:_,onHover:D});default:return r(Jo,{calendarDate:t,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:l,minDate:g,maxDate:f,isNewSelection:m,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:_,onHover:D})}})(t)}))})})),ss=i.forwardRef(((e,t)=>{var{width:n}=e,i=Z(e,["width"]);return r(ki,Object.assign({$width:n,"data-testid":"calendar-dropdown"},{children:r(os,Object.assign({ref:t},i))}))})),as=w.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return $`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return $`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return $`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return $`
                    background-color: ${gi.bg};
                    border: ${pi["width-010"]} ${pi.solid}
                        ${gi["border-primary"]};
                    color: ${gi["text-primary"]};

                    :hover {
                        background-color: ${gi["bg-hover-neutral"]};
                    }
                `;case"light":return $`
                    background-color: ${gi.bg};
                    border: ${pi["width-010"]} ${pi.solid}
                        ${gi.border};
                    color: ${gi["text-primary"]};

                    :hover {
                        background-color: ${gi["bg-hover-neutral"]};
                    }
                `;default:return $`
                    background-color: ${gi["bg-primary"]};
                    border: none;
                    color: ${gi["text-inverse"]};

                    :hover {
                        background-color: ${gi["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${gi["bg-disabled"]};
        border: ${pi["width-010"]} ${pi.solid}
            ${gi["border-disabled"]};
        color: ${gi["text-disabled"]};
        cursor: not-allowed;
    }
`,ls=i.forwardRef(((e,t)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:s="default",type:a="button"}=e,l=Z(e,["data-testid","styleType","children","sizeType","type"]);return r(as,Object.assign({"data-testid":n||"iconButton",ref:t,type:a,$sizeType:s,$styleType:i},l,{children:o}))})),cs=w(ls)`
    margin: ${mi["spacing-8"]};
`,us=w.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${gi["bg-strong"]};
    border-radius: ${bi.sm};
`,ds=w(co.Default)`
    color: ${e=>e.$enableDateClick?gi["text-primary"]:gi.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return $`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,gs=(e,t,r=!1)=>{const n=`${e}-${t.toLowerCase()}`;return $`
        ${fi[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},fs=(e,t)=>$`
    ${gs(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1)=>t?$`
            display: block;
        `:e?$`
            display: inline;
        `:$`
            display: block;
        `)(t.inline,t.paragraph)}
    color: ${gi.text};
`;var hs;!function(t){const n=(e,t,r)=>{const n=w(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>fs(t,e)}
        `;return n.displayName=`Typography.${r}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const r=w.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>fs(e,t)}
        `;return r.displayName=`Typography.${t}`,r};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=w.a`
            ${e=>$`
                ${gs(t,e.weight||"regular")}
                color: ${gi.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${gi["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=Z(t,["external","children"]);return e(i,Object.assign({},s,{children:[o,n&&r(ps,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(hs||(hs={}));const ps=w(V)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,ms=_`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,bs=w(ls)`
    color: ${gi.icon};
    svg {
        ${e=>{if(e.$loading)return $`
                    animation: ${ms} 4s linear infinite;
                `}}
    }
`,ys=w.div`
    display: flex;
    padding-bottom: ${mi["spacing-16"]};
    justify-content: space-between;
    gap: ${mi["spacing-8"]};
`,vs=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${mi["spacing-8"]};
`,xs=w(hs.BodySM)`
    color: ${gi["text-subtler"]};
`,ws=w((t=>{var{selectedDate:n,minDate:i,maxDate:o,loading:a,showDateAsShortForm:l,showCurrentDateAsToday:c,onLeftArrowClick:u,onRightArrowClick:d,onCalendarDateSelect:g}=t,f=Z(t,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const h=Xi.toDayjs(n),p=Xi.toDayjs(n).format(l?"D MMM YYYY":"D MMMM YYYY").toString(),m=Xi.isSame(n,tt())&&c?"Today":h.format(l?"ddd":"dddd"),[b,y]=s(!1),v=e=>{g&&g(e),y(!b)},x=()=>{y(!1),u(n)},w=()=>{y(!1),d(n)};return r(ji,{enabled:!a,isOpen:b,renderElement:()=>e(us,Object.assign({},f,{children:[r(cs,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:a||!!i&&(Pi.isDisabledDay(h,void 0,i)||Xi.isSame(h,i)),"aria-label":"Previous day",onClick:x,styleType:"light",sizeType:"small"},{children:r(ho,{})})),r(ds,Object.assign({onClick:()=>!!g&&!a&&y(!b),$enableDateClick:!!g&&!a,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!g||a},{children:`${p}, ${m}`})),r(cs,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:a||!!o&&(Pi.isDisabledDay(h,void 0,void 0,o)||Xi.isSame(h,o)),"aria-label":"Next day",onClick:w,styleType:"light",sizeType:"small"},{children:r(po,{})}))]})),renderDropdown:({elementWidth:e})=>r(ss,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:v,width:e}),onDismiss:()=>y(!1),onClose:()=>y(!1),offset:8})}))`
    width: 400px;
`,$s=n=>{var{selectedDate:i,loading:o,tableContainerRef:s,totalRecords:a,onPreviousDayClick:l,onNextDayClick:c,onRefresh:u,onCalendarDateSelect:d}=n,g=Z(n,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{s.current&&(s.current.scrollTop=0)},h=()=>{u&&(f(),u())};return e(ys,{children:[r(ws,Object.assign({selectedDate:i,loading:o},g,{onRightArrowClick:e=>{f(),c(e)},onLeftArrowClick:e=>{f(),l(e)},onCalendarDateSelect:d})),void 0===a?r(t,{}):e(vs,{children:[e(xs,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[a," results found"]})),u&&r(bs,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:o,onClick:h,$loading:o},{children:r(x,{})}))]})]})},_s=w.div`
    display: flex;
    width: 100%;
`;var Ds,Fs={exports:{}};Ds=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return a(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=a;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function a(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],s=t[2],a=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=s?s.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],l.expressions=a.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=/[A-Z]/g,i=/^ms-/,o={};function s(e){return"-"+e.toLowerCase()}const a=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(n,s);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,r){var o=this;if(i&&!r){var s=i.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(a)}else this.matches=n(e,t),this.media=e;function a(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){s&&s.addListener(e)},this.removeListener=function(e){s&&s.removeListener(e)},this.dispose=function(){s&&s.removeListener(a)}}e.exports=function(e,t,r){return new o(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))r.call(o,c)&&(a[c]=o[c]);if(t){s=t(o);for(var u=0;u<s.length;u++)n.call(o,s[u])&&(a[s[u]]=o[s[u]])}}return a}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function a(e,t,r,a,l){for(var c in e)if(s(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((a||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,a,r,null,i)}catch(e){u=e}if(!u||u instanceof Error||n((a||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var g=l?l():"";n("Failed "+r+" type: "+u.message+(null!=g?g:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},a.resetWarningCache=function(){o={}},e.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),s=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",g={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(c),arrayOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var a=t[r];if(!Array.isArray(a))return new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<a.length;l++){var c=e(a,l,n,i,o+"["+l+"]",s);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,i,o){var s=t[r];return e(s)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,o){var s=e[t];return i.isValidElementType(s)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(s)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var s=e.name||d;return new h("Invalid "+i+" `"+o+"` of type `"+((a=t[r]).constructor&&a.constructor.name?a.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+s+"`.")}var a;return null}))},node:p((function(e,t,r,n,i){return y(e[t])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new h("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var u in l)if(a(l,u)){var d=e(l,u,n,i,o+"."+u,s);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var s=t[r],a=0;a<e.length;a++)if(f(s,e[a]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(s)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return p((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,r,n,i,o,s);if(null==u)return null;u.data&&a(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,i,o){var a=t[r],l=v(a);if("object"!==l)return new h("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return b(n,i,o,c,x(u));var d=u(a,c,n,i,o+"."+c,s);if(d)return d}return null}))},exact:function(e){return p((function(t,r,n,i,l){var c=t[r],u=v(c);if("object"!==u)return new h("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var d=o({},t[r],e);for(var g in d){var f=e[g];if(a(e,g)&&"function"!=typeof f)return b(n,i,l,g,x(f));if(!f)return new h("Invalid "+i+" `"+l+"` key `"+g+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var p=f(c,g,n,i,l+"."+g,s);if(p)return p}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},i=0;function o(o,a,l,c,u,g,f){if(c=c||d,g=g||l,f!==s){if(t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+g+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==a[l]?o?null===a[l]?new h("The "+u+" `"+g+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+g+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,l,c,u,g)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function m(e){return p((function(t,r,n,i,o,s){var a=t[r];return v(a)!==e?new h("Invalid "+i+" `"+o+"` of type `"+x(a)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[u]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!y(i.value))return!1}else for(;!(i=o.next()).done;){var s=i.value;if(s&&!y(s[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,g.checkPropTypes=l,g.resetWarningCache=l.resetWarningCache,g.PropTypes=g,g}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case u:case i:case s:case o:case g:return f;default:var m=f&&f.$$typeof;switch(m){case l:case d:case p:case h:case a:return m;default:return t}}case n:return t}}}var w=c,$=u,_=l,D=a,F=r,C=d,S=i,O=p,E=h,j=n,k=s,A=o,M=g,B=!1;function T(e){return x(e)===u}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=_,t.ContextProvider=D,t.Element=F,t.ForwardRef=C,t.Fragment=S,t.Lazy=O,t.Memo=E,t.Portal=j,t.Profiler=k,t.StrictMode=A,t.Suspense=M,t.isAsyncMode=function(e){return B||(B=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||x(e)===c},t.isConcurrentMode=T,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===p},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===g},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===s||e===o||e===g||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===y||e.$$typeof===v||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var s=r[o];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,i=e.onChange,s=n(e,["children","device","onChange"]),a=(0,o.default)(s,r,i);return"function"==typeof t?t(a):a?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=n(r(/*! ./Component */"./src/Component.ts"));t.default=o.default;var s=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=s.default;var a=n(r(/*! ./Context */"./src/Context.ts"));t.Context=a.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),a=s.default.oneOfType([s.default.string,s.default.number]),l={all:s.default.bool,grid:s.default.bool,aural:s.default.bool,braille:s.default.bool,handheld:s.default.bool,print:s.default.bool,projection:s.default.bool,screen:s.default.bool,tty:s.default.bool,tv:s.default.bool,embossed:s.default.bool},c={orientation:s.default.oneOf(["portrait","landscape"]),scan:s.default.oneOf(["progressive","interlace"]),aspectRatio:s.default.string,deviceAspectRatio:s.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:s.default.bool,colorIndex:s.default.bool,monochrome:s.default.bool,resolution:a,type:Object.keys(l)},u=i(c,["type"]),d=n({minAspectRatio:s.default.string,maxAspectRatio:s.default.string,minDeviceAspectRatio:s.default.string,maxDeviceAspectRatio:s.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:s.default.number,maxColor:s.default.number,minColorIndex:s.default.number,maxColorIndex:s.default.number,minMonochrome:s.default.number,maxMonochrome:s.default.number,minResolution:a,maxResolution:a},u),g=n(n({},l),d);t.default={all:g,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),s=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,s.default)(r)]=e[r],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},g=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return u(e)||u(t)},n=(0,i.useState)(r),o=n[0],s=n[1];return(0,i.useEffect)((function(){var e=r();(0,a.shallowEqualObjects)(o,e)||s(e)}),[e,t]),o}(t),s=g(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),s=n[0],a=n[1],l=d();return(0,i.useEffect)((function(){if(l){var e=r();return a(e),function(){e&&e.dispose()}}}),[e,t]),s}(s,n),f=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),h=d();return(0,i.useEffect)((function(){h&&r&&r(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Cs=Fs.exports=Ds(i);const Ss=w.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return $`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Os=w.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?gi["overlay-subtle"]:gi["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=$`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=$`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=$`
                transition: none;
            `),t}}
`,Es=({show:e=!1,rootId:t,onOverlayClick:n,children:a,backgroundOpacity:l,backgroundBlur:c=!0,disableTransition:u=!1,enableOverlayClick:g=!1,zIndex:f,id:h})=>{const[p,m]=s(null),[b,v]=s(),[x]=s((()=>Ji.generate())),w=P(),$=o(),_=o(null),D=a&&i.cloneElement(a,{ref:_}),F=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",S=null!=f?f:b?99999:99998;(e=>{const t=C();d((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Ci.Change,r)}),[t,e]),d((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Ci.Change,r)};return null==t||t.events.on(Ci.Ready,r),()=>null==t?void 0:t.events.off(Ci.Ready,r)}),[t,e])})(S),d((()=>(k(),m(E()),()=>{T(),M().length<1&&A("remove")})),[]),d((()=>{if(e){const e=j();O(e),B();const t=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{M().length<1&&A("remove")}),200);return()=>clearTimeout(e)}}),[e]);const O=e=>{$.current=e,v(e)},E=()=>document&&t?document.getElementById(t):document?document.body:null,j=()=>M().length>0,k=()=>{if(!document.getElementById(ks)){const e=document.createElement("style");e.id=ks;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${As} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${As}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},A=e=>{const t=document.body.classList.contains(As);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(As):document.body.classList.add(As)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},B=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,x].join(",")},T=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==x)).join(",")},z=e=>{var t;const r=null===(t=_.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&g&&(e.preventDefault(),n())};return p?y.createPortal(r(Ss,Object.assign({id:F,"data-testid":F,$show:e,$zIndex:S},{children:a&&r(Y,Object.assign({id:w},{children:r(Os,Object.assign({"data-testid":"overlay-wrapper",$show:e,$stacked:b,$backgroundBlur:c,$disableTransition:u,onClick:z},{children:D}))}))})),p):null},js=e=>r(H,{children:r(Es,Object.assign({},e))}),ks="lifesg-ds-overlay-stylesheet",As="lifesg-ds-overlay-open",Ms=w.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${vi.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Bs=e=>{var{id:t="modal",show:n,animationFrom:i="bottom",children:o,enableOverlayClick:a=!0,rootComponentId:l,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:g=!0}=e,f=Z(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=s(),[m,b]=s();d((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),d((()=>{var e,t;n&&g&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]);const y=()=>{const e=.01*window.innerHeight;p(e)},v=()=>{const e=.01*window.visualViewport.height;p(e),b(window.visualViewport.offsetTop)};return r(js,Object.assign({"data-testid":`${t}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:u,id:t,rootId:l,zIndex:c},{children:r(Ms,Object.assign({show:n,animationFrom:i,"data-testid":t,verticalHeight:h,offsetTop:m},f,{children:o}))}))},Ts=w.div`
    border-radius: ${bi.md};
    background: ${gi.bg};
    padding: ${mi["spacing-16"]} ${mi["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,zs=w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${gi.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${vi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Rs=w(go)`
    position: absolute;
    top: var(--close-button-top-inset, ${mi["spacing-16"]});
    right: var(--close-button-right-inset, ${mi["spacing-16"]});
    padding: 0;
    color: ${gi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${vi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${mi["spacing-20"]});
    }
`,Ls=e=>{const{textSize:t}=e||{};return $`
        // Text styling
        ${t&&fi[`${t}-regular`]}

        strong {
            font-weight: ${fi.Spec["weight-semibold"]};
            ${t&&fi[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${fi.Spec["weight-semibold"]};
            ${t&&fi[`${t}-semibold`]}
            color: ${gi.hyperlink};
            text-decoration: none;

            svg {
                color: ${gi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${gi["hyperlink-hover"]};

                svg {
                    color: ${gi["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},Is=w.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Hs=w((e=>{var{children:t}=e,n=Z(e,["children"]);const i=n["data-testid"]||"card";return r(Ts,Object.assign({},n,{"data-testid":i},{children:"string"==typeof t?r(hs.BodyBL,{children:t}):t}))}))`
    color: ${gi.text};
    ${Ls({textSize:"body-md"})}

    ${vi.MaxWidth.sm} {
        display: none;
    }
`,Ps=w((t=>{var{id:n="modal-box",children:i,onClose:o,showCloseButton:s=!0}=t,a=Z(t,["id","children","onClose","showCloseButton"]);return e(zs,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()}},{children:[s&&r(Rs,Object.assign({onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser"},{children:r(q,{})})),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Ys=w.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${gi.text};
    ${Ls({textSize:"body-md"})}
`,Ws=n=>{var{children:i,visible:o,onMobileClose:s}=n,a=Z(n,["children","visible","onMobileClose"]);const l=a["data-testid"]||"popover",c=D(),u=yi["sm-max"]({theme:c}),d=Cs.useMediaQuery({maxWidth:u}),g=()=>{s&&s()},f=()=>"string"==typeof i?r(hs.BodyMD,{children:i}):i;return e(t,{children:[o&&r(Is,Object.assign({"data-testid":l},a,{children:r(Hs,{children:f()})})),d&&r(Bs,Object.assign({show:o,onOverlayClick:g},{children:r(Ps,Object.assign({onClose:g},{children:r(Ys,{children:f()})}))}))]})},Ns=w.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Us=n=>{var i,a,{children:l,popoverContent:c,trigger:u="click",position:d="top",zIndex:g,rootNode:f,customOffset:h,delay:p,onPopoverAppear:m,onPopoverDismiss:b}=n,y=Z(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,x]=s(!1),w=o(),$=o(),_=D(),F=yi["sm-max"]({theme:_}),C=Cs.useMediaQuery({maxWidth:F}),{refs:M,floatingStyles:B,context:H}=S({open:v,placement:d,whileElementsMounted:O,middleware:[E(null!=h?h:16),j(),k({limiter:A()})],onOpenChange:e=>{x(e),v!==e&&J(e)}}),P=Si(),Y=C?"click":u,N=T(H,{ignoreMouse:"hover"===Y}),U=z(H),V=W(H,{enabled:"hover"===Y,delay:{open:null!==(i=null==p?void 0:p.open)&&void 0!==i?i:0,close:null!==(a=null==p?void 0:p.close)&&void 0!==a?a:500}}),{getReferenceProps:q,getFloatingProps:X}=R([N,U,V]),Q=()=>{x(!1),J(!1)},J=e=>{e&&m&&m(),!e&&b&&b()};return e(t,{children:[r(Ns,Object.assign({ref:e=>{w.current=e,M.setReference(e)}},q({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),y,{children:l})),v&&r(L,Object.assign({root:f},{children:r(I,Object.assign({context:H},{children:r("div",Object.assign({ref:e=>{$.current=e,M.setFloating(e)},style:Object.assign(Object.assign({},B),{outline:"none",zIndex:null!=g?g:P})},X(),{children:"function"==typeof c?c():r(Ws,Object.assign({visible:!0,onMobileClose:Q},{children:c}))}))}))}))]})},Vs=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};w.span`
    color: ${gi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Vs(e)}

    &:hover,
    &:focus-visible {
        color: ${gi["text-hover"]};
        ${({$hoverStyle:e})=>Vs(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,w.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`;const qs=w.div`
    border-bottom: ${pi["width-010"]} ${pi.solid} ${gi.border};
    ${e=>{if(e.$isOnTheHour)return $`
                box-shadow: inset -0.5px 0px ${gi["border-primary"]};
            `}}
`,Zs=w.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,Xs=w.div`
    width: 2px;
    height: 100%;
`,Qs=w.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${bi.sm};
    box-sizing: border-box;
    padding: ${mi["spacing-4"]};
    ${({$status:e,$bgColour:t,$isClickable:r})=>{switch(e){case"blocked":return $`
                    background: repeating-linear-gradient(
                        135deg,
                        ${gi["bg-stronger"]} 0px 6px,
                        ${gi["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"filled":return $`
                    background: ${t};
                    &:hover {
                        cursor: ${r?"pointer":"default"};
                    }
                `;case"disabled":return $`
                    background: ${gi["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return $`
                    &:hover {
                        background-color: ${r?gi["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,Js=w(hs.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Ks=w(hs.BodyXS)`
    color: ${gi["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Gs=i.memo((({id:t,startTime:n,endTime:i,title:o,subtitle:s,status:a,intervalWidth:l,rowBarColor:c,containerRef:u,customPopover:d,onClick:g})=>{const f=0===tt(i,"HH:mm").get("minutes"),h=Xi.getTimeDiffInMinutes(n,i)/15*l-2,p=!!g||d&&"click"===d.trigger;return r((({wrapper:e,children:t})=>d?e(t):t),Object.assign({wrapper:e=>(e=>{const t={position:"bottom-start",rootNode:u,customOffset:d.offset,children:e,trigger:d.trigger,delay:d.delay,popoverContent:d.content};return r(Us,Object.assign({},t,{children:e}))})(e)},{children:r(qs,Object.assign({"data-testid":"block-container",$isOnTheHour:f},{children:e(Zs,{children:[e(Qs,Object.assign({$width:h,$status:a,$bgColour:c,$isClickable:p,onClick:e=>{g&&g({id:t,startTime:n,endTime:i,status:a,title:o,subtitle:s,customPopover:d},e)}},{children:[o&&r(Js,Object.assign({weight:"semibold"},{children:o})),s&&r(Ks,Object.assign({weight:"bold"},{children:s}))]})),r(Xs,{})]})}),"block-container-key")}))})),ea=e=>{var{id:t,timetableMinTime:n,timetableMaxTime:i,rowMinTime:o=n,rowMaxTime:s=i,rowCells:a,rowBarColor:l,intervalWidth:c,containerRef:u,outOfRangeCellPopover:d}=e,g=Z(e,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const h=g["data-testid"]||"timetable-row",p=f((()=>{const e=[];tt(n,"HH:mm").isBefore(tt(o,"HH:mm"))&&e.push({id:t,startTime:n,endTime:o,status:"blocked",customPopover:d});return[...a].sort(((e,t)=>{const r=tt(e.startTime,"HH:mm"),n=tt(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0})).forEach(((r,n)=>{var i;const{endTime:o}=r;e.push(r);const l=tt((null===(i=a[n+1])||void 0===i?void 0:i.startTime)||s,"HH:mm");let c=tt(o,"HH:mm");for(;c.isBefore(l);)if(u=l,c.get("hour")!=u.get("hour")){const r=c.add(1,"hour").startOf("hour");e.push({id:t,startTime:c.format("HH:mm").toString(),endTime:r.format("HH:mm").toString(),status:"disabled"}),c=r}else e.push({id:t,startTime:c.format("HH:mm").toString(),endTime:l.format("HH:mm").toString(),status:"disabled"}),c=l;var u})),tt(i,"HH:mm").isAfter(tt(s,"HH:mm"))&&e.push({id:t,startTime:s,endTime:i,status:"blocked",customPopover:d}),e}),[t,n,i,o,s,a,d]);return r(_s,Object.assign({"data-testid":h},g,{children:p.map(((e,t)=>r(Gs,Object.assign({},e,{intervalWidth:c,rowBarColor:l,containerRef:u}),`${t}-row-cell-key`)))}))};p((()=>X(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.8d8a81d8.js")).LottieSpinner}})))),w.div`
    margin: 0 auto;
    padding: ${mi["spacing-32"]} ${mi["spacing-16"]};
`,p((()=>X(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.26c644d6.js")).LottieLoadingDots}})))),w.div`
    margin: 0 auto;
`;const ta=p((()=>X(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.1019a8bf.js")).LottieLoadingDotsSpinner}})))),ra=()=>r("div",{style:{height:"200px",width:"200px"}}),na=w.div`
    margin: 0 auto;
`,ia=n=>i=>{switch(n){case"maintenance":return e(t,{children:["This service is currently unavailable. Please try again after ",r("strong",{children:i.dateString}),"."]});case"inactivity":{const n=i,o=Math.floor(n.secondsLeft/60),s=n.secondsLeft%60;return e(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",o," minutes"," ",s," seconds.",r("br",{}),r("br",{}),"If you wish to stay on this page, let us know now."]})}}};var oa;!function(e){e.imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:s}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${yi["sm-max"]({theme:t})}px) 400px, (max-width: ${yi["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:s}}}(oa||(oa={}));const{imgAttributeHelper:sa}=oa,aa={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},la={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},ca=Object.assign(Object.assign({},aa),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),ua=Object.assign(Object.assign({},aa),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),da=(e,t)=>new Map([["400",{img:sa(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:sa(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:sa(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:sa(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:sa(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:sa(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:sa(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:sa(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:sa(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:sa(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:sa(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:sa(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:sa(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:ia("inactivity")}],["maintenance",{img:sa(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:ia("maintenance")}],["no-item-found",{img:sa(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:sa(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:sa(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:sa(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:sa(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:sa(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),ga=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,fa=w.img`
    position: relative;
    width: 400px;
    height: auto;

    ${vi.MaxWidth.sm} {
        width: 320px;
    }

    ${vi.MaxWidth.xs} {
        width: 288px;
    }

    ${vi.MaxWidth.xxs} {
        width: 240px;
    }
`,ha=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,pa=w(hs.HeaderMD)`
    margin: ${mi["spacing-32"]} 0 ${mi["spacing-16"]};
    text-align: center;
`,ma=w.div`
    color: ${gi.text};
    text-align: center;

    ${Ls({textSize:"body-baseline"})}
`,ba=w(co.Default)`
    margin: ${mi["spacing-32"]} auto 0;
    width: 21rem;

    ${vi.MaxWidth.sm} {
        width: 100%;
    }
`,ya=w.div``,va=w.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${at}px auto;
`,xa=w.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${at}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return $`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,wa=w.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${gi.bg};
    width: ${at}px;
    z-index: 2;
    border-bottom: ${pi["width-010"]} ${pi.solid} ${gi.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?$`
                box-shadow: 2px 2px 8px
                    rgb(from ${gi.Primitive["neutral-20"]} r g b / 25%);
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:$`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,$a=w.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${gi.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,_a=w.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${gi.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${pi["width-010"]} ${pi.solid} ${gi.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return $`
                box-shadow: 2px 2px 8px
                    rgb(from ${gi.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,Da=w.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${mi["spacing-4"]};
`,Fa=w(hs.BodySM)`
    color: ${gi["text-subtler"]};
`,Ca=w.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,Sa=w.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${gi.bg};
    width: ${at}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${mi["spacing-16"]} 0 ${mi["spacing-32"]};
    border-bottom: ${pi["width-010"]} ${pi.solid} ${gi.border};
    border-left: ${pi["width-010"]} ${pi.solid}
        ${gi["border-primary"]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?$`
                box-shadow: 2px 2px 8px
                    rgb(from ${gi.Primitive["neutral-20"]} r g b / 25%);
            `:$`
                box-shadow: inset -0.5px 0px ${gi["border-primary"]};
            `};
`,Oa=w(hs.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${gi["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,Ea=w(hs.BodyXS)`
    display: inline-flex;
    gap: ${mi["spacing-4"]};
    align-items: center;
    color: ${gi["text-subtler"]};
    ${e=>{if(!e.$show)return $`
                display: none;
            `}}
`,ja=w((e=>{var{color:t}=e,n=Z(e,["color"]);const i=D(),o=t||gi["icon-primary"]({theme:i});return r(na,Object.assign({},n,{children:r(m,Object.assign({fallback:r(ra,{})},{children:r(ta,{color:o})}))}))}))`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,ka=w((t=>{var{type:n,img:i,title:o,description:s,actionButton:a,additionalProps:l,imageOnly:c,illustrationScheme:u}=t,d=Z(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const g=D(),f=((e,t,r)=>{switch(t){case"bookingsg":return da(la,r).get(e);case"ccube":return da(ca,r).get(e);case"mylegacy":return da(ua,r).get(e);default:return da(aa,r).get(e)}})(n,u||(g||xi).resourceScheme,g),h=d["data-testid"]||"error-display",p=()=>{switch(n){case"maintenance":{const e=l;return l&&e.dateString?f.renderDescription(e):s||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?f.renderDescription(e):s||void 0}default:return s||void 0}};if(!f)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},f),i&&{img:i}),o&&{title:o}),p()&&{description:p()});return e(ga,Object.assign({},d,{"data-testid":h},{children:[r(fa,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?e(ha,{children:[m.title&&("string"==typeof m.title?r(pa,Object.assign({"data-testid":`${h}--title`,"data-id":"error-display-title",weight:"semibold"},{children:m.title})):m.title),m.description&&r(ma,Object.assign({"data-testid":`${h}--description`,"data-id":"error-display-description"},{children:"string"==typeof m.description?r("p",{children:m.description}):m.description}))]}):null),a&&(()=>{const e=Object.assign({children:"Proceed"},a);return r(ba,Object.assign({},e))})()]}))}))`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${mi["spacing-72"]} 0;
`,Aa=w.div`
    display: flex;
    border-bottom: ${pi["width-010"]} ${pi.solid} ${gi.border};
`,Ma=w.div`
    border-right: ${pi["width-005"]} ${pi.solid}
        ${gi["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${mi["spacing-20"]} ${mi["spacing-12"]};
`,Ba=_`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,Ta=w.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${gi.Primitive["neutral-95"]} 8%,
        ${gi.Primitive["neutral-100"]} 18%,
        ${gi.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${Ba} 1.5s forwards infinite;
`,za=w(Us)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,Ra=n=>{var{date:i,emptyContentMessage:a,rowData:l,loading:c,minTime:u="00:00",maxTime:g="23:00",minDate:f,maxDate:h,totalRecords:p,showCurrentDateAsToday:m,showDateAsShortForm:y,onPage:v,onRefresh:x,onNextDayClick:w,onPreviousDayClick:$,onCalendarDateSelect:_}=n,D=Z(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const F=D["data-testid"]||"timetable",C=et.roundToNearestHour(u),S=et.roundToNearestHour(g,!0),O=et.generateHourlyIntervals(C,S),E=0===p||te.isEmpty(l),j=E||l.length===p,k=o(null),A=o(null),[M,B]=s(!1),[T,z]=s(!1),[R,L]=s(0),[I,H]=s(!1);d((()=>{const e=te.throttle((()=>{if(k.current&&(B(k.current.scrollLeft>0),z(k.current.scrollTop>0)),I)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=k.current;Math.ceil(e+t)>=r-1&&!j&&v&&!c&&(H(!0),v())}),100),t=k.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[j,I,c,v]),d((()=>{H(!1)}),[l]);Qe({onResize:()=>{if(k.current){const e=Math.ceil(60*O.length/15),t=(k.current.clientWidth-at)/e;L(t>21?t:21)}},targetRef:k,refreshMode:"debounce",refreshRate:50});const P=(()=>{let e=0;const t=st.length;return()=>{const r=st[e];return e=(e+1)%t,r}})(),Y=({wrapper:e,children:t})=>e(t),W=()=>{if(!c&&I)return r(Sa,Object.assign({$isScrolled:M},{children:r(Ta,{})}))},N=()=>{if(!c&&I)return r(Aa,Object.assign({"data-testid":"lazy-loader"},{children:O.map(((e,t)=>r(Ma,Object.assign({$width:4*R},{children:r(Ta,{})}),`lazy-load-cell-${t}`)))}))};return e(ya,E?Object.assign({},D,{"data-testid":F},{children:[r($s,{selectedDate:i,loading:c||I,tableContainerRef:k,minDate:f,maxDate:h,totalRecords:p,showCurrentDateAsToday:m,showDateAsShortForm:y,onPreviousDayClick:$,onNextDayClick:w,onRefresh:x,onCalendarDateSelect:_}),r(va,Object.assign({className:"empty-container"},{children:c?r(ja,{$isEmptyContent:E}):r(ka,{type:"no-item-found",description:a})}))]}):Object.assign({},D,{"data-testid":F},{children:[r($s,{"data-id":"timetable-date-navigator",selectedDate:i,loading:c||I,tableContainerRef:k,minDate:f,maxDate:h,totalRecords:p,showCurrentDateAsToday:m,showDateAsShortForm:y,onPreviousDayClick:$,onNextDayClick:w,onRefresh:x,onCalendarDateSelect:_}),e(xa,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:k,$loading:c,$allRecordsLoaded:j||!v},{children:[r(wa,{$isScrolledY:T,$isScrolledX:M}),r($a,Object.assign({$numOfRows:l.length,$isScrolled:M,"data-testid":"row-header-column-id"},{children:e(t,{children:[l.map(((t,n)=>r(Y,Object.assign({wrapper:e=>((e,t)=>{if(!e.rowHeaderPopover)return t;const r={position:"bottom-start",rootNode:k,customOffset:e.rowHeaderPopover.offset,children:t,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return b(za,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),t)})(t,e)},{children:e(Sa,Object.assign({$isScrolled:M},{children:[r(Oa,Object.assign({$isClickable:!!t.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(t,e),weight:"semibold","data-testid":`${t.id}-row-header-title`},{children:t.name})),r(Ea,Object.assign({weight:"bold",$show:!!t.subtitle,"data-testid":`${t.id}-row-header-subtitle`},{children:t.subtitle}))]}),`${t.id}-row-header`)}),n))),W()]})})),r(_a,Object.assign({$numOfColumns:O.length,$isScrolled:T},{children:O.map((e=>r(Da,Object.assign({"data-testid":`${e}-column`},{children:r(Fa,Object.assign({weight:"semibold"},{children:e}))}),`${e}-column-key`)))})),c?r(ja,{$isEmptyContent:E}):e(Ca,Object.assign({"data-testid":"content-container-id",ref:A,$numOfRows:l.length},{children:[l.map(((e,t)=>r(ea,Object.assign({timetableMinTime:C,timetableMaxTime:S,rowBarColor:P(),intervalWidth:R,containerRef:A},e),`${t}-row-bar`))),N()]}))]}))]}))};export{Ra as T,Q as c};
//# sourceMappingURL=index.ea42dacc.js.map
