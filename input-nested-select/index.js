import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as c,forwardRef as l,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{MinusSquareFillIcon as b,SquareTickFillIcon as v,SquareFillIcon as w,SquareIcon as _}from"@lifesg/react-icons";import{TriangleForwardFillIcon as S}from"@lifesg/react-icons/triangle-forward-fill";import{CrossIcon as $}from"@lifesg/react-icons/cross";import{MagnifierIcon as x}from"@lifesg/react-icons/magnifier";import{ExclamationCircleFillIcon as k}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as F}from"@lifesg/react-icons/chevron-down";function O(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},P=Object.prototype;var B=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||P)};var M=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),j=B,A=M,I=Object.prototype.hasOwnProperty;var z=function(e){if(!j(e))return A(e);var t=[];for(var n in Object(e))I.call(e,n)&&"constructor"!=n&&t.push(n);return t},C="object"==typeof D&&D&&D.Object===Object&&D,E=C,T="object"==typeof self&&self&&self.Object===Object&&self,N=E||T||Function("return this")(),H=N.Symbol,R=H,V=Object.prototype,L=V.hasOwnProperty,W=V.toString,Y=R?R.toStringTag:void 0;var U=function(e){var t=L.call(e,Y),n=e[Y];try{e[Y]=void 0;var r=!0}catch(e){}var i=W.call(e);return r&&(t?e[Y]=n:delete e[Y]),i},q=Object.prototype.toString;var Q=U,Z=function(e){return q.call(e)},K=H?H.toStringTag:void 0;var G=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":K&&K in Object(e)?Q(e):Z(e)};var X=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},J=G,ee=X;var te,ne=function(e){if(!ee(e))return!1;var t=J(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},re=N["__core-js_shared__"],ie=(te=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+te:"";var oe=function(e){return!!ie&&ie in e},ae=Function.prototype.toString;var se=function(e){if(null!=e){try{return ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ce=ne,le=oe,ue=X,de=se,he=/^\[object .+?Constructor\]$/,pe=Function.prototype,fe=Object.prototype,ge=pe.toString,me=fe.hasOwnProperty,ye=RegExp("^"+ge.call(me).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var be=function(e){return!(!ue(e)||le(e))&&(ce(e)?ye:he).test(de(e))},ve=function(e,t){return null==e?void 0:e[t]};var we=function(e,t){var n=ve(e,t);return be(n)?n:void 0},_e=we(N,"DataView"),Se=we(N,"Map"),$e=_e,xe=Se,ke=we(N,"Promise"),Fe=we(N,"Set"),Oe=we(N,"WeakMap"),De=G,Pe=se,Be="[object Map]",Me="[object Promise]",je="[object Set]",Ae="[object WeakMap]",Ie="[object DataView]",ze=Pe($e),Ce=Pe(xe),Ee=Pe(ke),Te=Pe(Fe),Ne=Pe(Oe),He=De;($e&&He(new $e(new ArrayBuffer(1)))!=Ie||xe&&He(new xe)!=Be||ke&&He(ke.resolve())!=Me||Fe&&He(new Fe)!=je||Oe&&He(new Oe)!=Ae)&&(He=function(e){var t=De(e),n="[object Object]"==t?e.constructor:void 0,r=n?Pe(n):"";if(r)switch(r){case ze:return Ie;case Ce:return Be;case Ee:return Me;case Te:return je;case Ne:return Ae}return t});var Re=He;var Ve=function(e){return null!=e&&"object"==typeof e},Le=G,We=Ve;var Ye=function(e){return We(e)&&"[object Arguments]"==Le(e)},Ue=Ve,qe=Object.prototype,Qe=qe.hasOwnProperty,Ze=qe.propertyIsEnumerable,Ke=Ye(function(){return arguments}())?Ye:function(e){return Ue(e)&&Qe.call(e,"callee")&&!Ze.call(e,"callee")},Ge=Array.isArray;var Xe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Je=ne,et=Xe;var tt=function(e){return null!=e&&et(e.length)&&!Je(e)},nt={exports:{}};var rt=function(){return!1};!function(e,t){var n=N,r=rt,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(nt,nt.exports);var it=G,ot=Xe,at=Ve,st={};st["[object Float32Array]"]=st["[object Float64Array]"]=st["[object Int8Array]"]=st["[object Int16Array]"]=st["[object Int32Array]"]=st["[object Uint8Array]"]=st["[object Uint8ClampedArray]"]=st["[object Uint16Array]"]=st["[object Uint32Array]"]=!0,st["[object Arguments]"]=st["[object Array]"]=st["[object ArrayBuffer]"]=st["[object Boolean]"]=st["[object DataView]"]=st["[object Date]"]=st["[object Error]"]=st["[object Function]"]=st["[object Map]"]=st["[object Number]"]=st["[object Object]"]=st["[object RegExp]"]=st["[object Set]"]=st["[object String]"]=st["[object WeakMap]"]=!1;var ct=function(e){return at(e)&&ot(e.length)&&!!st[it(e)]};var lt=function(e){return function(t){return e(t)}},ut={exports:{}};!function(e,t){var n=C,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(ut,ut.exports);var dt=ct,ht=lt,pt=ut.exports,ft=pt&&pt.isTypedArray,gt=ft?ht(ft):dt,mt=z,yt=Re,bt=Ke,vt=Ge,wt=tt,_t=nt.exports,St=B,$t=gt,xt=Object.prototype.hasOwnProperty;var kt=function(e){if(null==e)return!0;if(wt(e)&&(vt(e)||"string"==typeof e||"function"==typeof e.splice||_t(e)||$t(e)||bt(e)))return!e.length;var t=yt(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(St(e))return!mt(e).length;for(var n in e)if(xt.call(e,n))return!1;return!0},Ft=Symbol.for("immer-nothing"),Ot=Symbol.for("immer-draftable"),Dt=Symbol.for("immer-state"),Pt="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Bt(e,...t){if("production"!==process.env.NODE_ENV){const n=Pt[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Mt=Object.getPrototypeOf;function jt(e){return!!e&&!!e[Dt]}function At(e){return!!e&&(zt(e)||Array.isArray(e)||!!e[Ot]||!!e.constructor?.[Ot]||Ht(e)||Rt(e))}var It=Object.prototype.constructor.toString();function zt(e){if(!e||"object"!=typeof e)return!1;const t=Mt(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===It}function Ct(e,t){0===Et(e)?Object.entries(e).forEach((([n,r])=>{t(n,r,e)})):e.forEach(((n,r)=>t(r,n,e)))}function Et(e){const t=e[Dt];return t?t.type_:Array.isArray(e)?1:Ht(e)?2:Rt(e)?3:0}function Tt(e,t){return 2===Et(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Nt(e,t,n){const r=Et(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Ht(e){return e instanceof Map}function Rt(e){return e instanceof Set}function Vt(e){return e.copy_||e.base_}function Lt(e,t){if(Ht(e))return new Map(e);if(Rt(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&zt(e)){if(!Mt(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const n=Object.getOwnPropertyDescriptors(e);delete n[Dt];let r=Reflect.ownKeys(n);for(let t=0;t<r.length;t++){const i=r[t],o=n[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Mt(e),n)}function Wt(e,t=!1){return Ut(e)||jt(e)||!At(e)||(Et(e)>1&&(e.set=e.add=e.clear=e.delete=Yt),Object.freeze(e),t&&Ct(e,((e,t)=>Wt(t,!0)))),e}function Yt(){Bt(2)}function Ut(e){return Object.isFrozen(e)}var qt,Qt={};function Zt(e){const t=Qt[e];return t||Bt(0,e),t}function Kt(){return qt}function Gt(e,t){t&&(Zt("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Xt(e){Jt(e),e.drafts_.forEach(tn),e.drafts_=null}function Jt(e){e===qt&&(qt=e.parent_)}function en(e){return qt={drafts_:[],parent_:qt,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function tn(e){const t=e[Dt];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function nn(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[Dt].modified_&&(Xt(t),Bt(4)),At(e)&&(e=rn(t,e),t.parent_||an(t,e)),t.patches_&&Zt("Patches").generateReplacementPatches_(n[Dt].base_,e,t.patches_,t.inversePatches_)):e=rn(t,n,[]),Xt(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Ft?e:void 0}function rn(e,t,n){if(Ut(t))return t;const r=t[Dt];if(!r)return Ct(t,((i,o)=>on(e,r,t,i,o,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return an(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,o=!1;3===r.type_&&(i=new Set(t),t.clear(),o=!0),Ct(i,((i,a)=>on(e,r,t,i,a,n,o))),an(e,t,!1),n&&e.patches_&&Zt("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function on(e,t,n,r,i,o,a){if("production"!==process.env.NODE_ENV&&i===n&&Bt(5),jt(i)){const a=rn(e,i,o&&t&&3!==t.type_&&!Tt(t.assigned_,r)?o.concat(r):void 0);if(Nt(n,r,a),!jt(a))return;e.canAutoFreeze_=!1}else a&&n.add(i);if(At(i)&&!Ut(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;rn(e,i),t&&t.scope_.parent_||an(e,i)}}function an(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Wt(t,n)}var sn={get(e,t){if(t===Dt)return e;const n=Vt(e);if(!Tt(n,t))return function(e,t,n){const r=un(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!At(r)?r:r===ln(e.base_,t)?(hn(e),e.copy_[t]=pn(r,e)):r},has:(e,t)=>t in Vt(e),ownKeys:e=>Reflect.ownKeys(Vt(e)),set(e,t,n){const r=un(Vt(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=ln(Vt(e),t),a=r?.[Dt];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((i=n)===(o=r)?0!==i||1/i==1/o:i!=i&&o!=o)&&(void 0!==n||Tt(e.base_,t)))return!0;hn(e),dn(e)}var i,o;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==ln(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,hn(e),dn(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Vt(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){Bt(11)},getPrototypeOf:e=>Mt(e.base_),setPrototypeOf(){Bt(12)}},cn={};function ln(e,t){const n=e[Dt];return(n?Vt(n):e)[t]}function un(e,t){if(!(t in e))return;let n=Mt(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Mt(n)}}function dn(e){e.modified_||(e.modified_=!0,e.parent_&&dn(e.parent_))}function hn(e){e.copy_||(e.copy_=Lt(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Ct(sn,((e,t)=>{cn[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),cn.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Bt(13),cn.set.call(this,e,t,void 0)},cn.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Bt(14),sn.set.call(this,e[0],t,n,e[0])};function pn(e,t){const n=Ht(e)?Zt("MapSet").proxyMap_(e,t):Rt(e)?Zt("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:Kt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=sn;n&&(i=[r],o=cn);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:Kt()).drafts_.push(n),n}function fn(e){if(!At(e)||Ut(e))return e;const t=e[Dt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Lt(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Lt(e,!0);return Ct(n,((e,t)=>{Nt(n,e,fn(t))})),t&&(t.finalized_=!1),n}var gn=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&Bt(6),void 0!==n&&"function"!=typeof n&&Bt(7),At(e)){const i=en(this),o=pn(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?Xt(i):Jt(i)}return Gt(i,n),nn(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===Ft&&(r=void 0),this.autoFreeze_&&Wt(r,!0),n){const t=[],i=[];Zt("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}Bt(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){At(e)||Bt(8),jt(e)&&(e=function(e){jt(e)||Bt(10,e);return fn(e)}(e));const t=en(this),n=pn(e,void 0);return n[Dt].isManual_=!0,Jt(t),n}finishDraft(e,t){const n=e&&e[Dt];n&&n.isManual_||Bt(9);const{scope_:r}=n;return Gt(r,t),nn(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Zt("Patches").applyPatches_;return jt(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},mn=gn.produce;gn.produceWithPatches.bind(gn),gn.setAutoFreeze.bind(gn),gn.setUseStrictShallowCopy.bind(gn),gn.applyPatches.bind(gn),gn.createDraft.bind(gn),gn.finishDraft.bind(gn);var yn=G,bn=Ve;var vn=function(e){return"symbol"==typeof e||bn(e)&&"[object Symbol]"==yn(e)},wn=Ge,_n=vn,Sn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$n=/^\w*$/;var xn=function(e,t){if(wn(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_n(e))||($n.test(e)||!Sn.test(e)||null!=t&&e in Object(t))},kn=we(Object,"create"),Fn=kn;var On=function(){this.__data__=Fn?Fn(null):{},this.size=0};var Dn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Pn=kn,Bn=Object.prototype.hasOwnProperty;var Mn=function(e){var t=this.__data__;if(Pn){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Bn.call(t,e)?t[e]:void 0},jn=kn,An=Object.prototype.hasOwnProperty;var In=kn;var zn=On,Cn=Dn,En=Mn,Tn=function(e){var t=this.__data__;return jn?void 0!==t[e]:An.call(t,e)},Nn=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=In&&void 0===t?"__lodash_hash_undefined__":t,this};function Hn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Hn.prototype.clear=zn,Hn.prototype.delete=Cn,Hn.prototype.get=En,Hn.prototype.has=Tn,Hn.prototype.set=Nn;var Rn=Hn;var Vn=function(){this.__data__=[],this.size=0};var Ln=function(e,t){return e===t||e!=e&&t!=t};var Wn=function(e,t){for(var n=e.length;n--;)if(Ln(e[n][0],t))return n;return-1},Yn=Wn,Un=Array.prototype.splice;var qn=Wn;var Qn=Wn;var Zn=Wn;var Kn=Vn,Gn=function(e){var t=this.__data__,n=Yn(t,e);return!(n<0)&&(n==t.length-1?t.pop():Un.call(t,n,1),--this.size,!0)},Xn=function(e){var t=this.__data__,n=qn(t,e);return n<0?void 0:t[n][1]},Jn=function(e){return Qn(this.__data__,e)>-1},er=function(e,t){var n=this.__data__,r=Zn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tr.prototype.clear=Kn,tr.prototype.delete=Gn,tr.prototype.get=Xn,tr.prototype.has=Jn,tr.prototype.set=er;var nr=Rn,rr=tr,ir=Se;var or=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ar=function(e,t){var n=e.__data__;return or(t)?n["string"==typeof t?"string":"hash"]:n.map},sr=ar;var cr=ar;var lr=ar;var ur=ar;var dr=function(){this.size=0,this.__data__={hash:new nr,map:new(ir||rr),string:new nr}},hr=function(e){var t=sr(this,e).delete(e);return this.size-=t?1:0,t},pr=function(e){return cr(this,e).get(e)},fr=function(e){return lr(this,e).has(e)},gr=function(e,t){var n=ur(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function mr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}mr.prototype.clear=dr,mr.prototype.delete=hr,mr.prototype.get=pr,mr.prototype.has=fr,mr.prototype.set=gr;var yr=mr;function br(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(br.Cache||yr),n}br.Cache=yr;var vr=br;var wr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_r=/\\(\\)?/g,Sr=function(e){var t=vr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(wr,(function(e,n,r,i){t.push(r?i.replace(_r,"$1"):n||e)})),t}));var $r=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},xr=Ge,kr=vn,Fr=H?H.prototype:void 0,Or=Fr?Fr.toString:void 0;var Dr=function e(t){if("string"==typeof t)return t;if(xr(t))return $r(t,e)+"";if(kr(t))return Or?Or.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Pr=Dr;var Br=Ge,Mr=xn,jr=Sr,Ar=function(e){return null==e?"":Pr(e)};var Ir=vn;var zr=function(e,t){return Br(e)?e:Mr(e,t)?[e]:jr(Ar(e))},Cr=function(e){if("string"==typeof e||Ir(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Er=function(e,t){for(var n=0,r=(t=zr(t,e)).length;null!=e&&n<r;)e=e[Cr(t[n++])];return n&&n==r?e:void 0};var Tr=function(e,t,n){var r=null==e?void 0:Er(e,t);return void 0===r?n:r};let Nr=ti();const Hr=e=>Gr(e,Nr);let Rr=ti();Hr.write=e=>Gr(e,Rr);let Vr=ti();Hr.onStart=e=>Gr(e,Vr);let Lr=ti();Hr.onFrame=e=>Gr(e,Lr);let Wr=ti();Hr.onFinish=e=>Gr(e,Wr);let Yr=[];Hr.setTimeout=(e,t)=>{let n=Hr.now()+t,r=()=>{let e=Yr.findIndex((e=>e.cancel==r));~e&&Yr.splice(e,1),Zr-=~e?1:0},i={time:n,handler:e,cancel:r};return Yr.splice(Ur(n),0,i),Zr+=1,Xr(),i};let Ur=e=>~(~Yr.findIndex((t=>t.time>e))||~Yr.length);Hr.cancel=e=>{Vr.delete(e),Lr.delete(e),Wr.delete(e),Nr.delete(e),Rr.delete(e)},Hr.sync=e=>{Kr=!0,Hr.batchedUpdates(e),Kr=!1},Hr.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Hr.onStart(n)}return r.handler=e,r.cancel=()=>{Vr.delete(n),t=null},r};let qr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Hr.use=e=>qr=e,Hr.now="undefined"!=typeof performance?()=>performance.now():Date.now,Hr.batchedUpdates=e=>e(),Hr.catch=console.error,Hr.frameLoop="always",Hr.advance=()=>{"demand"!==Hr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ei()};let Qr=-1,Zr=0,Kr=!1;function Gr(e,t){Kr?(t.delete(e),e(0)):(t.add(e),Xr())}function Xr(){Qr<0&&(Qr=0,"demand"!==Hr.frameLoop&&qr(Jr))}function Jr(){~Qr&&(qr(Jr),Hr.batchedUpdates(ei))}function ei(){let e=Qr;Qr=Hr.now();let t=Ur(Qr);t&&(ni(Yr.splice(0,t),(e=>e.handler())),Zr-=t),Zr?(Vr.flush(),Nr.flush(e?Math.min(64,Qr-e):16.667),Lr.flush(),Rr.flush(),Wr.flush()):Qr=-1}function ti(){let e=new Set,t=e;return{add(n){Zr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Zr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Zr-=t.size,ni(t,(t=>t(n)&&e.add(t))),Zr+=e.size,t=e)}}}function ni(e,t){e.forEach((e=>{try{t(e)}catch(e){Hr.catch(e)}}))}function ri(){}const ii={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function oi(e,t){if(ii.arr(e)){if(!ii.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const ai=(e,t)=>e.forEach(t);function si(e,t,n){if(ii.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const ci=e=>ii.und(e)?[]:ii.arr(e)?e:[e];function li(e,t){if(e.size){const n=Array.from(e);e.clear(),ai(n,t)}}const ui=(e,...t)=>li(e,(e=>e(...t))),di=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let hi,pi,fi=null,gi=!1,mi=ri;var yi=Object.freeze({__proto__:null,get createStringInterpolator(){return hi},get to(){return pi},get colors(){return fi},get skipAnimation(){return gi},get willAdvance(){return mi},assign:e=>{e.to&&(pi=e.to),e.now&&(Hr.now=e.now),void 0!==e.colors&&(fi=e.colors),null!=e.skipAnimation&&(gi=e.skipAnimation),e.createStringInterpolator&&(hi=e.createStringInterpolator),e.requestAnimationFrame&&Hr.use(e.requestAnimationFrame),e.batchedUpdates&&(Hr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(mi=e.willAdvance),e.frameLoop&&(Hr.frameLoop=e.frameLoop)}});const bi=new Set;let vi=[],wi=[],_i=0;const Si={get idle(){return!bi.size&&!vi.length},start(e){_i>e.priority?(bi.add(e),Hr.onStart($i)):(xi(e),Hr(Fi))},advance:Fi,sort(e){if(_i)Hr.onFrame((()=>Si.sort(e)));else{const t=vi.indexOf(e);~t&&(vi.splice(t,1),ki(e))}},clear(){vi=[],bi.clear()}};function $i(){bi.forEach(xi),bi.clear(),Hr(Fi)}function xi(e){vi.includes(e)||ki(e)}function ki(e){vi.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(vi,(t=>t.priority>e.priority)),0,e)}function Fi(e){const t=wi;for(let n=0;n<vi.length;n++){const r=vi[n];_i=r.priority,r.idle||(mi(r),r.advance(e),r.idle||t.push(r))}return _i=0,wi=vi,wi.length=0,vi=t,vi.length>0}const Oi="[-+]?\\d*\\.?\\d+",Di=Oi+"%";function Pi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Bi=new RegExp("rgb"+Pi(Oi,Oi,Oi)),Mi=new RegExp("rgba"+Pi(Oi,Oi,Oi,Oi)),ji=new RegExp("hsl"+Pi(Oi,Di,Di)),Ai=new RegExp("hsla"+Pi(Oi,Di,Di,Oi)),Ii=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,zi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ci=/^#([0-9a-fA-F]{6})$/,Ei=/^#([0-9a-fA-F]{8})$/;function Ti(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ni(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Ti(i,r,e+1/3),a=Ti(i,r,e),s=Ti(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Hi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ri(e){return(parseFloat(e)%360+360)%360/360}function Vi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Li(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Wi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ci.exec(e))?parseInt(t[1]+"ff",16)>>>0:fi&&void 0!==fi[e]?fi[e]:(t=Bi.exec(e))?(Hi(t[1])<<24|Hi(t[2])<<16|Hi(t[3])<<8|255)>>>0:(t=Mi.exec(e))?(Hi(t[1])<<24|Hi(t[2])<<16|Hi(t[3])<<8|Vi(t[4]))>>>0:(t=Ii.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ei.exec(e))?parseInt(t[1],16)>>>0:(t=zi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ji.exec(e))?(255|Ni(Ri(t[1]),Li(t[2]),Li(t[3])))>>>0:(t=Ai.exec(e))?(Ni(Ri(t[1]),Li(t[2]),Li(t[3]))|Vi(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Yi=(e,t,n)=>{if(ii.fun(e))return e;if(ii.arr(e))return Yi({range:e,output:t,extrapolate:n});if(ii.str(e.output[0]))return hi(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",c=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,c){let l=c?c(e):e;if(l<t){if("identity"===a)return l;"clamp"===a&&(l=t)}if(l>n){if("identity"===s)return l;"clamp"===s&&(l=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?l=-l:n===1/0?l-=t:l=(l-t)/(n-t);l=o(l),r===-1/0?l=-l:i===1/0?l+=r:l=l*(i-r)+r;return l}(e,o[t],o[t+1],i[t],i[t+1],c,a,s,r.map)}};const Ui=1.70158,qi=1.525*Ui,Qi=Ui+1,Zi=2*Math.PI/3,Ki=2*Math.PI/4.5,Gi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Xi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Qi*e*e*e-Ui*e*e,easeOutBack:e=>1+Qi*Math.pow(e-1,3)+Ui*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-qi)/2:(Math.pow(2*e-2,2)*((qi+1)*(2*e-2)+qi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Zi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Zi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ki)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ki)/2+1,easeInBounce:e=>1-Gi(1-e),easeOutBounce:Gi,easeInOutBounce:e=>e<.5?(1-Gi(1-2*e))/2:(1+Gi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}const eo=Symbol.for("FluidValue.get"),to=Symbol.for("FluidValue.observers"),no=e=>Boolean(e&&e[eo]),ro=e=>e&&e[eo]?e[eo]():e,io=e=>e[to]||null;function oo(e,t){let n=e[to];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class ao{constructor(e){if(this[eo]=void 0,this[to]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");so(this,e)}}const so=(e,t)=>uo(e,eo,t);function co(e,t){if(e[eo]){let n=e[to];n||uo(e,to,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function lo(e,t){let n=e[to];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[to]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const uo=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),ho=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,po=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,fo=new RegExp(`(${ho.source})(%|[a-z]+)`,"i"),go=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,mo=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,yo=e=>{const[t,n]=bo(e);if(!t||di())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&mo.test(n)?yo(n):n||e},bo=e=>{const t=mo.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let vo;const wo=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,_o=e=>{vo||(vo=fi?new RegExp(`(${Object.keys(fi).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ro(e).replace(mo,yo).replace(po,Wi).replace(vo,Wi))),n=t.map((e=>e.match(ho).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Yi(Ji({},e,{output:t}))));return e=>{var n;const i=!fo.test(t[0])&&(null==(n=t.find((e=>fo.test(e))))?void 0:n.replace(ho,""));let o=0;return t[0].replace(ho,(()=>`${r[o++](e)}${i||""}`)).replace(go,wo)}},So="react-spring: ",$o=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${So}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},xo=$o(console.warn);const ko=$o(console.warn);function Fo(e){return ii.str(e)&&("#"==e[0]||/\d/.test(e)||!di()&&mo.test(e)||e in(fi||{}))}const Oo=di()?o:a,Do=()=>{const e=c(!1);return Oo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Po(){const e=s()[1],t=Do();return()=>{t.current&&e(Math.random())}}const Bo=e=>o(e,Mo),Mo=[];function jo(e){const t=c();return o((()=>{t.current=e})),t.current}const Ao=Symbol.for("Animated:node"),Io=e=>e&&e[Ao],zo=(e,t)=>{return n=e,r=Ao,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Co=e=>e&&e[Ao]&&e[Ao].getPayload();class Eo{constructor(){this.payload=void 0,zo(this,this)}getPayload(){return this.payload||[]}}class To extends Eo{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,ii.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new To(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ii.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ii.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class No extends To{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Yi({output:[e,e]})}static create(e){return new No(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ii.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Yi({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Ho={dependencies:null};class Ro extends Eo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return si(this.source,((n,r)=>{var i;(i=n)&&i[Ao]===i?t[r]=n.getValue(e):no(n)?t[r]=ro(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ai(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return si(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ho.dependencies&&no(e)&&Ho.dependencies.add(e);const t=Co(e);t&&ai(t,(e=>this.add(e)))}}class Vo extends Ro{constructor(e){super(e)}static create(e){return new Vo(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Lo)),!0)}}function Lo(e){return(Fo(e)?No:To).create(e)}function Wo(e){const t=Io(e);return t?t.constructor:ii.arr(e)?Vo:Fo(e)?No:To}function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}const Uo=(e,t)=>{const n=!ii.fun(e)||e.prototype&&e.prototype.isReactComponent;return l(((i,a)=>{const s=c(null),l=n&&u((e=>{s.current=function(e,t){e&&(ii.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;Ho.dependencies=n,e.style&&(e=Yo({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Ro(e),Ho.dependencies=null,[e,n]}(i,t),p=Po(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new qo(f,h),m=c();Oo((()=>(m.current=g,ai(h,(e=>co(e,g))),()=>{m.current&&(ai(m.current.deps,(e=>lo(e,m.current))),Hr.cancel(m.current.update))}))),o(f,[]),Bo((()=>()=>{const e=m.current;ai(e.deps,(t=>lo(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,Yo({},y,{ref:l}))}))};class qo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Hr.write(this.update)}}const Qo=Symbol.for("AnimatedComponent"),Zo=e=>ii.str(e)?e:e&&ii.str(e.displayName)?e.displayName:ii.fun(e)&&e.name||null;function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}function Go(e,...t){return ii.fun(e)?e(...t):e}const Xo=(e,t)=>!0===e||!!(t&&e&&(ii.fun(e)?e(t):ci(e).includes(t))),Jo=(e,t)=>ii.obj(e)?t&&e[t]:e,ea=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ta=e=>e,na=(e,t=ta)=>{let n=ra;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);ii.und(n)||(r[i]=n)}return r},ra=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ia={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function oa(e){const t=function(e){const t={};let n=0;if(si(e,((e,r)=>{ia[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return si(e,((e,r)=>r in t||(n[r]=e))),n}return Ko({},e)}function aa(e){return e=ro(e),ii.arr(e)?e.map(aa):Fo(e)?yi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function sa(e){return ii.fun(e)||ii.arr(e)&&ii.obj(e[0])}const ca=Ko({},{tension:170,friction:26},{mass:1,damping:1,easing:Xi.linear,clamp:!1});class la{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,ca)}}function ua(e,t){if(ii.und(t.decay)){const n=!ii.und(t.tension)||!ii.und(t.friction);!n&&ii.und(t.frequency)&&ii.und(t.damping)&&ii.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const da=[];class ha{constructor(){this.changed=!1,this.values=da,this.toValues=null,this.fromValues=da,this.to=void 0,this.from=void 0,this.config=new la,this.immediate=!1}}function pa(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var c;let l,u,d=Xo(null!=(c=n.cancel)?c:null==r?void 0:r.cancel,t);if(d)f();else{ii.und(n.pause)||(i.paused=Xo(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Xo(e,t)),l=Go(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),l=u.time-Hr.now()}function p(){l>0&&!yi.skipAnimation?(i.delayed=!0,u=Hr.setTimeout(f,l),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Ko({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const fa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ya(e.get()):t.every((e=>e.noop))?ga(e.get()):ma(e.get(),t.every((e=>e.finished))),ga=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ma=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),ya=e=>({value:e,cancelled:!0,finished:!1});function ba(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:c}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const l=na(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&ya(r)||i!==n.asyncId&&ma(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new wa,a=new _a;return(async()=>{if(yi.skipAnimation)throw va(n),a.result=ma(r,!1),d(a),a;p(o);const s=ii.obj(e)?Ko({},e):Ko({},t,{to:e});s.parentId=i,si(l,((e,t)=>{ii.und(s[t])&&(s[t]=e)}));const c=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),c})()};let g;if(yi.skipAnimation)return va(n),ma(r,!1);try{let t;t=ii.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=ma(r.get(),!0,!1)}catch(e){if(e instanceof wa)g=e.result;else{if(!(e instanceof _a))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?c:void 0)}return ii.fun(a)&&Hr.batchedUpdates((()=>{a(g,r,r.item)})),g})():c}function va(e,t){li(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class wa extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class _a extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Sa=e=>e instanceof xa;let $a=1;class xa extends ao{constructor(...e){super(...e),this.id=$a++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Io(this);return e&&e.getValue()}to(...e){return yi.to(this,e)}interpolate(...e){return xo(`${So}The "interpolate" function is deprecated in v9 (use "to" instead)`),yi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){oo(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Si.sort(this),oo(this,{type:"priority",parent:this,priority:e})}}const ka=Symbol.for("SpringPhase"),Fa=e=>(1&e[ka])>0,Oa=e=>(2&e[ka])>0,Da=e=>(4&e[ka])>0,Pa=(e,t)=>t?e[ka]|=3:e[ka]&=-3,Ba=(e,t)=>t?e[ka]|=4:e[ka]&=-5;class Ma extends xa{constructor(e,t){if(super(),this.key=void 0,this.animation=new ha,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ii.und(e)||!ii.und(t)){const n=ii.obj(e)?Ko({},e):Ko({},t,{from:e});ii.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Oa(this)||this._state.asyncTo)||Da(this)}get goal(){return ro(this.animation.to)}get velocity(){const e=Io(this);return e instanceof To?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Fa(this)}get isAnimating(){return Oa(this)}get isPaused(){return Da(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Co(r.to);!a&&no(r.to)&&(o=ci(ro(r.to))),r.values.forEach(((s,c)=>{if(s.done)return;const l=s.constructor==No?1:a?a[c].lastPosition:o[c];let u=r.immediate,d=l;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[c],o=null!=s.v0?s.v0:s.v0=ii.arr(i.velocity)?i.velocity[c]:i.velocity;let a;const h=i.precision||(n==l?.005:Math.min(1,.001*Math.abs(l-n)));if(ii.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,c=!ii.und(r),p=n==l?s.v0>0:n<l;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(l-d)<=h,!u));++e){c&&(g=d==l||d>l==p,g&&(a=-a*r,d=l));a+=(1e-6*-i.tension*(d-l)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(l-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[c].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Io(this),c=s.getValue();if(t){const e=ro(r.to);c===e&&!n||i.decay?n&&i.decay&&this._onChange(c):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(c)}set(e){return Hr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Oa(this)){const{to:e,config:t}=this.animation;Hr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return ii.und(e)?(n=this.queue||[],this.queue=[]):n=[ii.obj(e)?e:Ko({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>fa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),va(this._state,e&&this._lastCallId),Hr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=ii.obj(n)?n[t]:n,(null==n||sa(n))&&(n=void 0),r=ii.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Fa(this)||(e.reverse&&([n,r]=[r,n]),r=ro(r),ii.und(r)?Io(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Ko({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,na(n,((e,t)=>/^on/.test(t)?Jo(e,r):e))),Ta(this,n,"onProps"),Na(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return pa(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Da(this)||(Ba(this,!0),ui(a.pauseQueue),Na(this,"onPause",ma(this,ja(this,this.animation.to)),this))},resume:()=>{Da(this)&&(Ba(this,!1),Oa(this)&&this._resume(),ui(a.resumeQueue),Na(this,"onResume",ma(this,ja(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Aa(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(ya(this));const r=!ii.und(e.to),i=!ii.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(ya(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:c,from:l}=s;let{to:u=c,from:d=l}=e;!i||r||t.default&&!ii.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!oi(d,l);h&&(s.from=d),d=ro(d);const p=!oi(u,c);p&&this._focus(u);const f=sa(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(ua(n=Ko({},n),t),t=Ko({},n,t)),ua(e,t),Object.assign(e,t);for(const t in ca)null==e[t]&&(e[t]=ca[t]);let{mass:r,frequency:i,damping:o}=e;ii.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Go(t.config,o),t.config!==a.config?Go(a.config,o):void 0);let b=Io(this);if(!b||ii.und(u))return n(ma(this,!0));const v=ii.und(t.reset)?i&&!t.default:!ii.und(d)&&Xo(t.reset,o),w=v?d:this.get(),_=aa(u),S=ii.num(_)||ii.arr(_)||Fo(_),$=!f&&(!S||Xo(a.immediate||t.immediate,o));if(p){const e=Wo(u);if(e!==b.constructor){if(!$)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(_)}}const x=b.constructor;let k=no(u),F=!1;if(!k){const e=v||!Fa(this)&&h;(p||e)&&(F=oi(aa(w),_),k=!F),(oi(s.immediate,$)||$)&&oi(g.decay,m)&&oi(g.velocity,y)||(k=!0)}if(F&&Oa(this)&&(s.changed&&!v?k=!0:k||this._stop(c)),!f&&((k||no(c))&&(s.values=b.getPayload(),s.toValues=no(u)?null:x==No?[1]:ci(_)),s.immediate!=$&&(s.immediate=$,$||v||this._set(c)),k)){const{onRest:e}=s;ai(Ea,(e=>Ta(this,t,e)));const r=ma(this,ja(this,c));ui(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Hr.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?Go(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),f?n(ba(t.to,t,this._state,this)):k?this._start():Oa(this)&&!p?this._pendingCalls.add(n):n(ga(w))}_focus(e){const t=this.animation;e!==t.to&&(io(this)&&this._detach(),t.to=e,io(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;no(t)&&(co(t,this),Sa(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;no(e)&&lo(e,this)}_set(e,t=!0){const n=ro(e);if(!ii.und(n)){const e=Io(this);if(!e||!oi(n,e.getValue())){const r=Wo(n);e&&e.constructor==r?e.setValue(n):zo(this,r.create(n)),e&&Hr.batchedUpdates((()=>{this._onChange(n,t)}))}}return Io(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Na(this,"onStart",ma(this,ja(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Go(this.animation.onChange,e,this)),Go(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Io(this).reset(ro(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Oa(this)||(Pa(this,!0),Da(this)||this._resume())}_resume(){yi.skipAnimation?this.finish():Si.start(this)}_stop(e,t){if(Oa(this)){Pa(this,!1);const n=this.animation;ai(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),oo(this,{type:"idle",parent:this});const r=t?ya(this.get()):ma(this.get(),ja(this,null!=e?e:n.to));ui(this._pendingCalls,r),n.changed&&(n.changed=!1,Na(this,"onRest",r,this))}}}function ja(e,t){const n=aa(t);return oi(aa(e.get()),n)}function Aa(e,t=e.loop,n=e.to){let r=Go(t);if(r){const i=!0!==r&&oa(r),o=(i||e).reverse,a=!i||i.reset;return Ia(Ko({},e,{loop:t,default:!1,pause:void 0,to:!o||sa(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Ia(e){const{to:t,from:n}=e=oa(e),r=new Set;return ii.obj(t)&&Ca(t,r),ii.obj(n)&&Ca(n,r),e.keys=r.size?Array.from(r):null,e}function za(e){const t=Ia(e);return ii.und(t.default)&&(t.default=na(t)),t}function Ca(e,t){si(e,((e,n)=>null!=e&&t.add(n)))}const Ea=["onStart","onRest","onChange","onPause","onResume"];function Ta(e,t,n){e.animation[n]=t[n]!==ea(t,n)?Jo(t[n],e.key):void 0}function Na(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Ha=["onStart","onChange","onRest"];let Ra=1;class Va{constructor(e,t){this.id=Ra++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Ko({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];ii.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Ia(e)),this}start(e){let{queue:t}=this;return e?t=ci(e).map(Ia):this.queue=[],this._flush?this._flush(this,t):(Za(this,t),La(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;ai(ci(t),(t=>n[t].stop(!!e)))}else va(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ii.und(e))this.start({pause:!0});else{const t=this.springs;ai(ci(e),(e=>t[e].pause()))}return this}resume(e){if(ii.und(e))this.start({pause:!1});else{const t=this.springs;ai(ci(e),(e=>t[e].resume()))}return this}each(e){si(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,li(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&li(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,li(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Hr.onFrame(this._onFrame)}}function La(e,t){return Promise.all(t.map((t=>Wa(e,t)))).then((t=>fa(e,t)))}async function Wa(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:c}=t,l=ii.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=ii.arr(i)||ii.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,l&&(l.onRest=void 0)):ai(Ha,(n=>{const r=t[n];if(ii.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},l&&(l[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ui(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===ea(t,"cancel");(u||p&&d.asyncId)&&h.push(pa(++e._lastAsyncId,{props:t,state:d,actions:{pause:ri,resume:ri,start(t,n){p?(va(d,e._lastAsyncId),n(ya(e))):(t.onRest=s,n(ba(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=fa(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=Aa(t,a,i);if(n)return Za(e,[n]),Wa(e,n,!0)}return c&&Hr.batchedUpdates((()=>c(f,e,e.item))),f}function Ya(e,t){const n=Ko({},e.springs);return t&&ai(ci(t),(e=>{ii.und(e.keys)&&(e=Ia(e)),ii.obj(e.to)||(e=Ko({},e,{to:void 0})),Qa(n,e,(e=>qa(e)))})),Ua(e,n),n}function Ua(e,t){si(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,co(t,e))}))}function qa(e,t){const n=new Ma;return n.key=e,t&&co(n,t),n}function Qa(e,t,n){t.keys&&ai(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Za(e,t){ai(t,(t=>{Qa(e.springs,t,(t=>qa(t,e)))}))}const Ka=["children"],Ga=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Ka);const i=d(Xa),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=c(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:u}=Xa;return r.createElement(u,{value:n},t)},Xa=(Ja=Ga,es={},Object.assign(Ja,r.createContext(es)),Ja.Provider._context=Ja,Ja.Consumer._context=Ja,Ja);var Ja,es;Ga.Provider=Xa.Provider,Ga.Consumer=Xa.Consumer;const ts=()=>{const e=[],t=function(t){ko(`${So}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return ai(e,((e,i)=>{if(ii.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return ai(e,(e=>e.pause(...arguments))),this},t.resume=function(){return ai(e,(e=>e.resume(...arguments))),this},t.set=function(t){ai(e,(e=>e.set(t)))},t.start=function(t){const n=[];return ai(e,((e,r)=>{if(ii.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return ai(e,(e=>e.stop(...arguments))),this},t.update=function(t){return ai(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return ii.fun(e)?e(n,t):e};return t._getProps=n,t};function ns(e,t){const n=ii.fun(e),[[r],i]=function(e,t,n){const r=ii.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?ts():void 0),[]),o=c(0),a=Po(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=Ya(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?La(e,t):new Promise((r=>{Ua(e,n),s.queue.push((()=>{r(La(e,t))})),a()}))}})),[]),l=c([...s.ctrls]),u=[],p=jo(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=l.current[i]||(l.current[i]=new Va(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=za(n))}}h((()=>{ai(l.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=l.current.map(((e,t)=>Ya(e,u[t]))),m=d(Ga),y=jo(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Oo((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],ai(e,(e=>e()))),ai(l.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Bo((()=>()=>{ai(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>Ko({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let rs;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(rs||(rs={}));class is extends xa{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Yi(...t);const n=this._get(),r=Wo(n);zo(this,r.create(n))}advance(e){const t=this._get();oi(t,this.get())||(Io(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&as(this._active)&&ss(this)}_get(){const e=ii.arr(this.source)?this.source.map(ro):ci(ro(this.source));return this.calc(...e)}_start(){this.idle&&!as(this._active)&&(this.idle=!1,ai(Co(this),(e=>{e.done=!1})),yi.skipAnimation?(Hr.batchedUpdates((()=>this.advance())),ss(this)):Si.start(this))}_attach(){let e=1;ai(ci(this.source),(t=>{no(t)&&co(t,this),Sa(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){ai(ci(this.source),(e=>{no(e)&&lo(e,this)})),this._active.clear(),ss(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ci(this.source).reduce(((e,t)=>Math.max(e,(Sa(t)?t.priority:0)+1)),0))}}function os(e){return!1!==e.idle}function as(e){return!e.size||Array.from(e).every(os)}function ss(e){e.idle||(e.idle=!0,ai(Co(e),(e=>{e.done=!0})),oo(e,{type:"idle",parent:e}))}function cs(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}yi.assign({createStringInterpolator:_o,to:(e,t)=>new is(e,t)});const ls=["style","children","scrollTop","scrollLeft","viewBox"],us=/^--/;function ds(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||us.test(e)||ps.hasOwnProperty(e)&&ps[e]?(""+t).trim():t+"px"}const hs={};let ps={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const fs=["Webkit","Ms","Moz","O"];ps=Object.keys(ps).reduce(((e,t)=>(fs.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ps);const gs=["x","y","z"],ms=/^(matrix|translate|scale|rotate|skew)/,ys=/^(translate)/,bs=/^(rotate|skew)/,vs=(e,t)=>ii.num(e)&&0!==e?e+t:e,ws=(e,t)=>ii.arr(e)?e.every((e=>ws(e,t))):ii.num(e)?e===t:parseFloat(e)===t;class _s extends Ro{constructor(e){let{x:t,y:n,z:r}=e,i=cs(e,gs);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>vs(e,"px"))).join(",")})`,ws(e,0)]))),si(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(ms.test(t)){if(delete i[t],ii.und(e))return;const n=ys.test(t)?"px":bs.test(t)?"deg":"";o.push(ci(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${vs(i,n)})`,ws(i,0)]:e=>[`${t}(${e.map((e=>vs(e,n))).join(",")})`,ws(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Ss(o,a)),super(i)}}class Ss extends ao{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ai(this.inputs,((n,r)=>{const i=ro(n[0]),[o,a]=this.transforms[r](ii.arr(i)?i:n.map(ro));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&ai(this.inputs,(e=>ai(e,(e=>no(e)&&co(e,this)))))}observerRemoved(e){0==e&&ai(this.inputs,(e=>ai(e,(e=>no(e)&&lo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),oo(this,e)}}const $s=["scrollTop","scrollLeft"];yi.assign({batchedUpdates:p,createStringInterpolator:_o,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const xs=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Ro(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Zo(e)||"Anonymous";return(e=ii.str(e)?o[e]||(o[e]=Uo(e,i)):e[Qo]||(e[Qo]=Uo(e,i))).displayName=`Animated(${t})`,e};return si(e,((t,n)=>{ii.arr(e)&&(n=Zo(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:c}=r,l=cs(r,ls),u=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:hs[t]||(hs[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=ds(t,i[t]);us.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==c&&e.setAttribute("viewBox",c)},createAnimatedStyle:e=>new _s(e),getComponentProps:e=>cs(e,$s)}),ks=xs.animated,Fs=(e,t,n)=>t?Tr(n,t)||Tr(e,t):n||e,Os=(e,t)=>{const n=t||e.defaultValue;return Tr(e.collections,n)};var Ds;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ds||(Ds={}));const Ps={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bs=e=>t=>{const n=t.theme,r=Os(Ps,n[Ds.colorScheme]);return n.options&&n.options.color?Fs(r,e,n.options.color):Fs(r,e)},Ms={Brand:{1:Bs("Brand.1"),2:Bs("Brand.2"),3:Bs("Brand.3"),4:Bs("Brand.4"),5:Bs("Brand.5"),6:Bs("Brand.6")},Primary:Bs("Primary"),PrimaryDark:Bs("PrimaryDark"),Secondary:Bs("Secondary"),Accent:{Light:{1:Bs("Accent.Light.1"),2:Bs("Accent.Light.2"),3:Bs("Accent.Light.3"),4:Bs("Accent.Light.4"),5:Bs("Accent.Light.5"),6:Bs("Accent.Light.6")},Dark:{1:Bs("Accent.Dark.1"),2:Bs("Accent.Dark.2"),3:Bs("Accent.Dark.3")}},Neutral:{1:Bs("Neutral.1"),2:Bs("Neutral.2"),3:Bs("Neutral.3"),4:Bs("Neutral.4"),5:Bs("Neutral.5"),6:Bs("Neutral.6"),7:Bs("Neutral.7"),8:Bs("Neutral.8")},Validation:{Green:{Text:Bs("Validation.Green.Text"),Icon:Bs("Validation.Green.Icon"),Border:Bs("Validation.Green.Border"),Background:Bs("Validation.Green.Background")},Orange:{Text:Bs("Validation.Orange.Text"),Icon:Bs("Validation.Orange.Icon"),Border:Bs("Validation.Orange.Border"),Background:Bs("Validation.Orange.Background"),Badge:Bs("Validation.Orange.Badge")},Red:{Text:Bs("Validation.Red.Text"),Icon:Bs("Validation.Red.Icon"),Border:Bs("Validation.Red.Border"),Background:Bs("Validation.Red.Background")},Blue:{Text:Bs("Validation.Blue.Text"),Icon:Bs("Validation.Blue.Icon"),Border:Bs("Validation.Blue.Border"),Background:Bs("Validation.Blue.Background")}},Shadow:{Accent:Bs("Shadow.Accent"),Red:Bs("Shadow.Red"),Elevation:Bs("Shadow.Elevation")}},js={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},As=e=>Object.keys(js).reduce(((t,n)=>{const r=js[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Is=As("max-width"),zs=(As("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Cs=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Es=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ms.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Cs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ts=f(Es)`
    animation-delay: -0.45s;
`,Ns=f(Es)`
    animation-delay: -0.3s;
`,Hs=f(Es)`
    animation-delay: -0.15s;
`,Rs={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Vs={collections:{base:{D1:{fontFamily:Rs.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Rs.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Rs.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Rs.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Rs.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Rs.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Rs.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Rs.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Rs.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Rs.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Rs.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Rs.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Rs.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Rs.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ls=e=>t=>{const n=t.theme,r=Os(Vs,n[Ds.textStyleScheme]);return n.options&&n.options.textStyle?Fs(r,e,n.options.textStyle):Fs(r,e)},Ws={D1:{fontFamily:Ls("D1.fontFamily"),fontSize:Ls("D1.fontSize"),fontWeight:Ls("D1.fontWeight"),lineHeight:Ls("D1.lineHeight"),letterSpacing:Ls("D1.letterSpacing")},D2:{fontFamily:Ls("D2.fontFamily"),fontSize:Ls("D2.fontSize"),fontWeight:Ls("D2.fontWeight"),lineHeight:Ls("D2.lineHeight"),letterSpacing:Ls("D2.letterSpacing")},D3:{fontFamily:Ls("D3.fontFamily"),fontSize:Ls("D3.fontSize"),fontWeight:Ls("D3.fontWeight"),lineHeight:Ls("D3.lineHeight"),letterSpacing:Ls("D3.letterSpacing")},D4:{fontFamily:Ls("D4.fontFamily"),fontSize:Ls("D4.fontSize"),fontWeight:Ls("D4.fontWeight"),lineHeight:Ls("D4.lineHeight"),letterSpacing:Ls("D4.letterSpacing")},DBody:{fontFamily:Ls("DBody.fontFamily"),fontSize:Ls("DBody.fontSize"),fontWeight:Ls("DBody.fontWeight"),lineHeight:Ls("DBody.lineHeight"),letterSpacing:Ls("DBody.letterSpacing")},H1:{fontFamily:Ls("H1.fontFamily"),fontSize:Ls("H1.fontSize"),fontWeight:Ls("H1.fontWeight"),lineHeight:Ls("H1.lineHeight"),letterSpacing:Ls("H1.letterSpacing")},H2:{fontFamily:Ls("H2.fontFamily"),fontSize:Ls("H2.fontSize"),fontWeight:Ls("H2.fontWeight"),lineHeight:Ls("H2.lineHeight"),letterSpacing:Ls("H2.letterSpacing")},H3:{fontFamily:Ls("H3.fontFamily"),fontSize:Ls("H3.fontSize"),fontWeight:Ls("H3.fontWeight"),lineHeight:Ls("H3.lineHeight"),letterSpacing:Ls("H3.letterSpacing")},H4:{fontFamily:Ls("H4.fontFamily"),fontSize:Ls("H4.fontSize"),fontWeight:Ls("H4.fontWeight"),lineHeight:Ls("H4.lineHeight"),letterSpacing:Ls("H4.letterSpacing")},H5:{fontFamily:Ls("H5.fontFamily"),fontSize:Ls("H5.fontSize"),fontWeight:Ls("H5.fontWeight"),lineHeight:Ls("H5.lineHeight"),letterSpacing:Ls("H5.letterSpacing")},H6:{fontFamily:Ls("H6.fontFamily"),fontSize:Ls("H6.fontSize"),fontWeight:Ls("H6.fontWeight"),lineHeight:Ls("H6.lineHeight"),letterSpacing:Ls("H6.letterSpacing")},Body:{fontFamily:Ls("Body.fontFamily"),fontSize:Ls("Body.fontSize"),fontWeight:Ls("Body.fontWeight"),lineHeight:Ls("Body.lineHeight"),letterSpacing:Ls("Body.letterSpacing")},BodySmall:{fontFamily:Ls("BodySmall.fontFamily"),fontSize:Ls("BodySmall.fontSize"),fontWeight:Ls("BodySmall.fontWeight"),lineHeight:Ls("BodySmall.lineHeight"),letterSpacing:Ls("BodySmall.letterSpacing")},XSmall:{fontFamily:Ls("XSmall.fontFamily"),fontSize:Ls("XSmall.fontSize"),fontWeight:Ls("XSmall.fontWeight"),lineHeight:Ls("XSmall.lineHeight"),letterSpacing:Ls("XSmall.letterSpacing")}},Ys=e=>{switch(e){case 700:case"bold":return Rs.Bold;case 600:case"semibold":return Rs.Semibold;case 300:case"light":return Rs.Light;case 400:case"regular":return Rs.Regular;default:return""}},Us=(e,t)=>n=>{var r;const i=Ws[e].fontFamily(n),o=Ws[e].fontWeight(n);return Object.values(Rs).includes(i)?m`
                font-family: ${Ys(t)||Ys(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=qs(t)||o)&&void 0!==r?r:"normal"};
        `},qs=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Qs=(e,t,n=!1)=>r=>{const i=Ws[e],o=i.fontSize(r);return m`
            ${Us(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Zs=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `;var Ks;!function(e){e.D1=f.h1`
        ${e=>m`
                ${Qs("D1",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${Qs("D2",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${Qs("D3",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${Qs("D4",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${Qs("DBody",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${Qs("H1",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${Qs("H2",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${Qs("H3",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${Qs("H4",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${Qs("H5",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${Qs("H6",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${Qs("Body",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${Qs("BodySmall",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${Qs("XSmall",e.weight,e.paragraph)}
                color: ${Ms.Neutral[1]};
                ${Zs(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Js(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Js(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ks||(Ks={}));const Gs=f.a`
    ${e=>m`
            ${Qs(e.textStyle,e.weight)}
            color: ${Ms.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ms.Secondary};

                svg {
                    color: ${Ms.Secondary};
                }
            }
        `}
`,Xs=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Js=n=>{var{external:r=!1,children:i}=n,o=O(n,["external","children"]);return e(Gs,Object.assign({},o,{children:[i,r&&t(Xs,{})]}))};var ec;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ec||(ec={})),f.button`
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
                    background-color: ${Ms.Neutral[8](e)};
                    border: 1px solid ${Ms.Primary(e)};

                    span {
                        color: ${Ms.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${Ms.Neutral[8](e)};
                    border: 1px solid ${Ms.Neutral[5](e)};

                    span {
                        color: ${Ms.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${Ms.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ms.Neutral[3](e)};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ms.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Ms.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${Ms.Primary(e)};
                    border: 1px solid transparent;

                    ${Is.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ms.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${Qs("H5","semibold")}
                    }

                    ${Is.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${Qs("H4","semibold")}
                    }

                    ${Is.mobileS} {
                        height: auto;
                    }
                `}
`;const tc=f((({color:n,className:r,size:i=18})=>e(zs,Object.assign({className:r,$size:i,$color:n},{children:[t(Es,{id:"inner1",$size:i-2,$borderWidth:2}),t(Ts,{id:"inner2",$size:i-2,$borderWidth:2}),t(Ns,{id:"inner3",$size:i-2,$borderWidth:2}),t(Hs,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Ms.Primary(e);break;case"disabled":t=Ms.Neutral[3](e);break;default:t=Ms.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,nc=(e,t,n="window",r)=>{const i=c();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])};var rc={exports:{}};rc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],l=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=l("months"),n=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=d[l],h=u&&u[0],p=u&&u[1];a[c]=p?{regex:h,parser:p}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,c=i.parser,l=e.slice(r),u=o.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,f=a||(i||o?1:p.getDate()),g=i||p.getFullYear(),m=0;i&&!o||(m=o>0?o-1:p.getMonth());var y=s||0,b=c||0,v=l||0,w=u||0;return d?new Date(Date.UTC(g,m,f,y,b,v,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,f,y,b,v,w)):new Date(g,m,f,y,b,v,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var p=s.length,f=1;f<=p;f+=1){a[1]=s[f-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ic,oc,ac=rc.exports,sc={exports:{}},cc=sc.exports=(ic={year:0,month:1,day:2,hour:3,minute:4,second:5},oc={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=oc[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),oc[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],c=s.type,l=s.value,u=ic[c];u>=0&&(o[u]=parseInt(l,10))}var d=o[3],h=24===d?0:d,p=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(n.utc(p).valueOf()-(f-=f%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),c=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var l=c.utcOffset();c=c.add(i-l,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,c=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),c,s),u=l[0],d=l[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),lc={exports:{}};lc.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),o=n-i<0,a=t.clone().add(r+(o?-1:1),l);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=m;var _=function(e){return e instanceof k},S=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},$=function(e,t){if(_(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},x=b;x.l=S,x.i=_,x.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return $(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<$(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),p=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},f=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,m):p(0,m+1);case c:var v=this.$locale().weekStart||0,w=(g<v?g+7:g)-v;return p(r?y-w:y+(6-w),m);case s:case h:return f(b+"Hours",0);case a:return f(b+"Minutes",1);case o:return f(b+"Seconds",2);case i:return f(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=x.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],f=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var g=this.clone().set(h,1);g.$d[p](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,u){var h,p=this;r=Number(r);var f=x.p(u),g=function(e){var t=$(p);return x.w(t.date(t.date()+Math.round(e*r)),p)};if(f===l)return this.set(l,this.$M+r);if(f===d)return this.set(d,this.$y+r);if(f===s)return g(1);if(f===c)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[f]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return x.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:x.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||f[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,p){var f,g=x.p(h),m=$(r),y=(m.utcOffset()-this.utcOffset())*t,b=this-m,v=x.m(this,m);return v=(f={},f[d]=v/12,f[l]=v,f[u]=v/3,f[c]=(b-y)/6048e5,f[s]=(b-y)/864e5,f[a]=b/n,f[o]=b/t,f[i]=b/e,f)[g]||b,p?v:x.a(v)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),F=k.prototype;return $.prototype=F,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,k,$),e.$i=!0),$},$.locale=S,$.isDayjs=_,$.unix=function(e){return $(1e3*e)},$.en=w[v],$.Ls=w,$.p={},$}();var uc=lc.exports,dc={exports:{}};dc.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var hc=dc.exports,pc={exports:{}};pc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var fc=pc.exports,gc={exports:{}};gc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var mc,yc=gc.exports;uc.extend(hc),uc.extend(fc),uc.extend(yc),uc.extend(ac),uc.extend(cc),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=uc(t).startOf("week");return bc(n).map((e=>vc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return vc(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(uc(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+uc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=uc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(mc||(mc={}));const bc=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},vc=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},wc=[1,3,5,7,8,10,12],_c=[4,6,9,11];var Sc,$c,xc,kc;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":wc.includes(o)?Math.min(i,31).toString():_c.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=uc(e,n);return uc(t,n).diff(r,"minute")},e.toDayjs=e=>e?uc(e):uc()}(Sc||(Sc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!uc(e).isBefore(r,"day"))||!(!i||!uc(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(uc(e).isValid())return e}return""}}($c||($c={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(xc||(xc={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(kc||(kc={}));const Fc=g`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Oc=f.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return m`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Fc};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?Ms.Neutral[4](e):e.$unchecked?Ms.Accent.Light[2](e):Ms.Primary(e)};
    }
`,Dc=f.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Pc=f.button`
    align-items: center;
    background-color: ${Ms.Primary};
    border-radius: 0.25rem;
    color: ${Ms.Neutral[8]};
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return m`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return m`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return m`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return m`
                    background-color: ${Ms.Neutral[8]};
                    border: 1px solid ${Ms.Primary};
                    color: ${Ms.Primary};
                `;case"light":return m`
                    background-color: ${Ms.Neutral[8]};
                    border: 1px solid ${Ms.Neutral[5]};
                    color: ${Ms.Primary};
                `;default:return m`
                    background-color: ${Ms.Primary};
                    border: none;
                    color: ${Ms.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${Ms.Neutral[6]};
        border: 1px solid ${Ms.Neutral[6]};
        color: ${Ms.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,Bc=i.forwardRef(((e,n)=>{var{"data-testid":r,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=e,c=O(e,["data-testid","styleType","children","sizeType","type"]);return t(Pc,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:i},c,{children:o}))})),Mc=f.div`
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    min-height: 2.625rem;
`,jc=f.button`
    display: flex;
    width: 100%;
    border: none;
    cursor: pointer;
    background: transparent;
    text-align: left;
    padding: 0.5rem;
    min-height: 2.625rem;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ms.Accent.Light[3]};
    }

    :hover {
        background-color: ${e=>e.$multiSelect?"transparent":Ms.Accent.Light[5]};
    }

    ${e=>{const{$selected:t,$multiSelect:n}=e;if(!n&&t)return m`
                background: ${Ms.Accent.Light[5]};
            `}}
`,Ac=f.li`
    ${e=>{if(e.$multiSelect)return m`
                margin-left: 2.125rem;
            `}}
`,Ic=f.div`
    ${Qs("Body","regular")}
    overflow: hidden;

    ${e=>{if("middle"!==e.$truncateType)return m`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,zc=f.span`
    ${Qs("Body","semibold")}
`,Cc=f.div`
    display: flex;
    flex-direction: column;
`,Ec=f.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Tc=f.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Nc=f.div`
    display: flex;
`,Hc=f((n=>{var{className:r,checked:i,disabled:a,indeterminate:s,onChange:l,onKeyPress:u,displaySize:d="default"}=n,h=O(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const p=c();o((()=>{p.current.indeterminate=s}),[s]);const f=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;l&&l(e),u&&u(t)}};return e(Oc,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":s?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:f,$displaySize:d,$disabled:a,$unchecked:!(s||i||a)},{children:[t(Dc,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:p,tabIndex:-1,onChange:f,disabled:a},h)),s?t(b,{"data-testid":"indeterminate"}):i?t(v,{"data-testid":"checkmark"}):a?t(w,{"data-testid":"disabled-empty-checkbox"}):t(_,{"data-testid":"empty-checkbox"})]}))}))`
    min-width: 1.5rem;
    max-width: 1.5rem;

    ${e=>{switch(e.$type){case"category":return m`
                    margin-left: 0.5rem;
                `;case"label":return m`
                    margin-right: 0.5rem;
                `}}};
`,Rc=f(Bc)`
    border: none;
    background: transparent;
    cursor: pointer;
    width: 1.625rem;
    height: 1.625rem;
    transition: transform 250ms ease-in-out;

    :hover,
    :focus {
        box-shadow: unset;
    }

    ${e=>{if(e.$expanded)return m`
                transform: rotate(90deg);
            `}}
`,Vc=f(S)`
    color: ${Ms.Primary};
`,Lc=f.button`
    ${Qs("H4","semibold")}
    color: ${Ms.Neutral[1]};
    text-align: left;
    line-height: 1.625rem;
    margin-left: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 0;
    overflow: hidden;
`,Wc=f.div`
    ${e=>{if("middle"!==e.$truncateType)return m`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Yc=f.ul`
    display: ${e=>e.$expanded?"flex":"none"};
    flex-direction: column;
    margin-left: 2.125rem;
`,Uc=({item:r,selectableCategory:i,searchValue:o,itemTruncationType:a,multiSelect:s,visible:l,onBlur:u,onExpand:d,onRef:h,onSelect:p,onSelectCategory:f})=>{const g=c(),m=c(),y=e=>{e.preventDefault(),d(r.keyPath)},b=e=>{e.preventDefault(),p(r)},v=e=>{e.stopPropagation(),f(r)},w=()=>{u&&u()},_=(e,t)=>{const n=e.label;let r=0;return"label"===t&&g&&g.current&&(r=g.current.getBoundingClientRect().width),"category"===t&&m&&m.current&&(r=m.current.getBoundingClientRect().width),kc.shouldTruncateToTwoLines(n,r)},S=n=>e(Cc,Object.assign({"data-testid":"truncate-middle-container"},{children:[t(Ec,{children:$(n)}),t(Tc,{children:$(n)})]})),$=r=>{if(!r.isSearchTerm)return t(n,{children:r.label});const i=r.label,a=o.toLowerCase().trim(),s=i.toLowerCase().indexOf(a),c=s+a.length;return-1==s?t(n,{children:i}):e(n,{children:[`${i.slice(0,s)}`,t(zc,{children:i.slice(s,c)}),`${i.slice(c)}`]})};return r.subItems?e("li",{children:[(()=>{let n={},o={};return i&&(o={onClick:b}),s?o={onClick:y,tabIndex:-1}:n={onClick:y},e(Mc,Object.assign({},n,{children:[e(Nc,{children:[t(Rc,Object.assign({ref:e=>h(e,r.keyPath),$expanded:r.expanded,"aria-expanded":r.expanded,onClick:y},{children:t(Vc,{})})),s&&t(Hc,{displaySize:"small",$type:"category",checked:r.checked,indeterminate:r.indeterminate,onChange:v})]}),t(Lc,Object.assign({},o,{children:t(Wc,Object.assign({ref:m,$truncateType:a},{children:"middle"===a&&_(r,"category")?S(r):r.label}))}))]}))})(),(()=>{const e=r.subItems.values();return t(Yc,Object.assign({$expanded:r.expanded,$multiSelect:s},{children:[...e].map((e=>t(Uc,{item:e,selectableCategory:i,searchValue:o,itemTruncationType:a,multiSelect:s,visible:l,onBlur:u,onExpand:d,onRef:h,onSelect:p,onSelectCategory:f},e.keyPath.join("-"))))}))})()]}):t(Ac,Object.assign({ref:g,$level:r.keyPath.length,$multiSelect:s},{children:t(jc,Object.assign({ref:e=>h(e,r.keyPath),type:"button",tabIndex:l?0:-1,$selected:r.selected,$multiSelect:s,onBlur:w,onClick:b},{children:e(n,{children:[s&&t(Hc,{displaySize:"small",checked:r.checked,$type:"label"}),t(Ic,Object.assign({$truncateType:a},{children:"middle"===a&&_(r,"label")?S(r):$(r)}))]})}))}))},qc=f.button`
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
                background-color: ${Ms.Neutral[7]};
            `}
    }
`,Qc=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=O(e,["children","focusHighlight","focusOutline","type"]);return t(qc,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Zc={collections:{base:{InputBoxShadow:m`
        inset 0 0 4px 0px ${Ms.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 4px 0px ${Ms.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${Ms.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:m`
        inset 0 0 3px 0px ${Ms.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 3px 0px ${Ms.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${Ms.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Kc=e=>t=>{var n;const r=t.theme,i=Os(Zc,r[Ds.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Fs(i,e,r.options.designToken):Fs(i,e)},Gc=Kc("InputBoxShadow"),Xc=Kc("InputErrorBoxShadow");Kc("ElevationBoxShadow"),Kc("Table.Header"),Kc("Table.Cell.Primary"),Kc("Table.Cell.Secondary"),Kc("Table.Cell.Selected"),Kc("Table.Cell.Hover");f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ms.Neutral[5]};
    border-radius: 4px;
    background: ${Ms.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ms.Accent.Light[1]};
        box-shadow: ${Gc};
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
                background: ${Ms.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ms.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${Ms.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ms.Validation.Red.Border};
                    box-shadow: ${Xc};
                }
            `:void 0}
`;const Jc=f.input`
    ${Qs("Body","regular")}
    color: ${Ms.Neutral[1]};
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
        color: ${Ms.Neutral[3]};
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
`,el=f.li`
    background: ${Ms.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,tl=f(Jc)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,nl=f(x)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Ms.Neutral[3]};
`,rl=f(Qc)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Ms.Neutral[3]};
    cursor: pointer;
`,il=f($)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Ms.Neutral[3]};
`,ol=l(((n,r)=>{const{onClear:i}=n,o=O(n,["onClear"]);return e(el,{children:[t(nl,{}),t(tl,Object.assign({ref:r},o)),o.value&&t(rl,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(il,{})}))]},"search")}));var al;!function(e){e.getInitialItems=(e,t,n)=>{const r=(e,t)=>e.reduce(((e,i)=>{const{key:o,label:a,value:s,subItems:c}=i,l=o.toString(),u=[...t,l],d={label:a,value:s,expanded:"expand"===n,isSearchTerm:!1,selected:!1,checked:!1,indeterminate:!1,keyPath:u,subItems:c?r(c,u):void 0};return e.set(l,d),e}),new Map);return r(e,t)},e.getInitialDropdown=(t,n)=>{let r=n;r&&r.length||(r=[sl(t)]);return mn(t,(t=>{let i=[];r.forEach((r=>{i=[],r.forEach((r=>{i.push(r);const o=e.getItemAtKeyPath(t,i),a=n.some((e=>JSON.stringify(e)===JSON.stringify(o.keyPath)));o.subItems&&(o.expanded=!0),a&&(o.selected=!0)}))}))}))},e.updateSelectedAll=(e,t)=>{let n=e,r=[],i=[];if(t){const{keyPaths:t,items:o}=cl(n);r=t,i=o,n=mn(e,(e=>{for(const t of e.values()){const e=t=>{if(t.subItems)return t.expanded=!0,t.subItems.forEach((t=>e(t)))};e(t)}}))}return{keyPaths:r,items:i,list:n}},e.getVisibleKeyPaths=e=>{const t=[],n=e=>{if(e&&e.size)for(const r of e.values())t.push(r.keyPath),r.expanded&&n(r.subItems)};return n(e),t},e.getUpdateCheckbox=(e,t)=>{const n=mn(e,(e=>{const n=e=>{for(const r of e.values())if(r.subItems){n(r.subItems);const e=r.subItems,{checked:t,indeterminate:i}=Array.from(e).reduce(((e,t)=>{const n=t[1];return e.checked.push(n.checked),e.indeterminate.push(n.indeterminate),e}),{checked:[],indeterminate:[]}),o=t.every(Boolean),a=t.some(Boolean),s=i.some(Boolean);o?(r.checked=!0,r.indeterminate=!1):a||s?(r.checked=!1,r.indeterminate=!0):(r.checked=!1,r.indeterminate=!1)}else{const e=t.some((e=>JSON.stringify(e)===JSON.stringify(r.keyPath)));r.checked=e}};n(e)}));return n},e.getItemAtKeyPath=(e,t)=>t.reduce(((t,n)=>t?t.subItems.get(n):e.get(n)),null)}(al||(al={}));const sl=e=>{for(const t of e.values())if(t.subItems&&t.subItems.size)return sl(t.subItems);return e.values().next().value.keyPath},cl=e=>{const t=[],n=[],r=e=>{if(e&&e.size)for(const i of e.values()){const{keyPath:e,label:o,value:a}=i;i.subItems&&i.subItems.size?r(i.subItems):(t.push(i.keyPath),n.push({label:o,value:a,keyPath:e}))}};return r(e),{keyPaths:t,items:n}},ll=f(ks.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,ul=f.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;
    max-height: 20rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ms.Neutral[4]};
        border-right: 5px solid ${Ms.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${Is.mobileL} {
        max-height: 15rem;
    }
`,dl=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,hl=f(Ks.Body)``,pl=f(k)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ms.Validation.Red.Icon};
`,fl=f.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0;
`,gl=f.button`
    ${Qs("Body","semibold")}
    color: ${Ms.Primary};
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
`;!function(){class e extends Map{constructor(e,t){super(),this[Dt]={type_:2,parent_:t,scope_:t?t.scope_:Kt(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:e,draft_:this,isManual_:!1,revoked_:!1}}get size(){return Vt(this[Dt]).size}has(e){return Vt(this[Dt]).has(e)}set(e,n){const r=this[Dt];return i(r),Vt(r).has(e)&&Vt(r).get(e)===n||(t(r),dn(r),r.assigned_.set(e,!0),r.copy_.set(e,n),r.assigned_.set(e,!0)),this}delete(e){if(!this.has(e))return!1;const n=this[Dt];return i(n),t(n),dn(n),n.base_.has(e)?n.assigned_.set(e,!1):n.assigned_.delete(e),n.copy_.delete(e),!0}clear(){const e=this[Dt];i(e),Vt(e).size&&(t(e),dn(e),e.assigned_=new Map,Ct(e.base_,(t=>{e.assigned_.set(t,!1)})),e.copy_.clear())}forEach(e,t){Vt(this[Dt]).forEach(((n,r,i)=>{e.call(t,this.get(r),r,this)}))}get(e){const n=this[Dt];i(n);const r=Vt(n).get(e);if(n.finalized_||!At(r))return r;if(r!==n.base_.get(e))return r;const o=pn(r,n);return t(n),n.copy_.set(e,o),o}keys(){return Vt(this[Dt]).keys()}values(){const e=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const t=e.next();if(t.done)return t;return{done:!1,value:this.get(t.value)}}}}entries(){const e=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const n=this.get(t.value);return{done:!1,value:[t.value,n]}}}}[Symbol.iterator](){return this.entries()}}function t(e){e.copy_||(e.assigned_=new Map,e.copy_=new Map(e.base_))}class n extends Set{constructor(e,t){super(),this[Dt]={type_:3,parent_:t,scope_:t?t.scope_:Kt(),modified_:!1,finalized_:!1,copy_:void 0,base_:e,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return Vt(this[Dt]).size}has(e){const t=this[Dt];return i(t),t.copy_?!!t.copy_.has(e)||!(!t.drafts_.has(e)||!t.copy_.has(t.drafts_.get(e))):t.base_.has(e)}add(e){const t=this[Dt];return i(t),this.has(e)||(r(t),dn(t),t.copy_.add(e)),this}delete(e){if(!this.has(e))return!1;const t=this[Dt];return i(t),r(t),dn(t),t.copy_.delete(e)||!!t.drafts_.has(e)&&t.copy_.delete(t.drafts_.get(e))}clear(){const e=this[Dt];i(e),Vt(e).size&&(r(e),dn(e),e.copy_.clear())}values(){const e=this[Dt];return i(e),r(e),e.copy_.values()}entries(){const e=this[Dt];return i(e),r(e),e.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(e,t){const n=this.values();let r=n.next();for(;!r.done;)e.call(t,r.value,r.value,this),r=n.next()}}function r(e){e.copy_||(e.copy_=new Set,e.base_.forEach((t=>{if(At(t)){const n=pn(t,e);e.drafts_.set(t,n),e.copy_.add(n)}else e.copy_.add(t)})))}function i(e){e.revoked_&&Bt(3,JSON.stringify(Vt(e)))}var o,a;a={proxyMap_:function(t,n){return new e(t,n)},proxySet_:function(e,t){return new n(e,t)}},Qt[o="MapSet"]||(Qt[o]=a)}();const ml=r=>{var{listItems:i,listStyleWidth:a,hideNoResultsDisplay:l,enableSearch:u,searchPlaceholder:d="Search",visible:p,mode:f="default",multiSelect:g,selectedKeyPaths:m,selectableCategory:y,itemsLoadState:b="success",itemTruncationType:v="end",onBlur:w,onDismiss:_,onSelectAll:S,onRetry:$,onSearch:x,onSelectItem:k}=r,F=O(r,["listItems","listStyleWidth","hideNoResultsDisplay","enableSearch","searchPlaceholder","visible","mode","multiSelect","selectedKeyPaths","selectableCategory","itemsLoadState","itemTruncationType","onBlur","onDismiss","onSelectAll","onRetry","onSearch","onSelectItem"]);const D=h((()=>i&&i.length?al.getInitialItems(i,[],f):new Map([])),[i]),[P,B]=s(""),[M,j]=s(0),[A,I]=s(!1),[z,C]=s(D),[E,T]=s(D),[N,H]=s(0),[R,V]=s([]),L=ns({height:M}),W=c(),Y=c(),U=c({}),q=c();o((()=>{var e;if(p){const t=ae(),n=al.getVisibleKeyPaths(t);if(q.current)q.current.focus();else if(U.current){const t=n[N];null===(e=U.current[t[0]])||void 0===e||e.ref.focus()}if(g){const e=al.getUpdateCheckbox(t,m);C(e)}else C(t);V(n),setTimeout((()=>{j(ie())}))}else U.current={},H(0),j(0),B(""),C(D)}),[p]),o((()=>{if(p){const e=ie();j(e)}}),[z,E]),o((()=>{ce(P)}),[P]),o((()=>{if(p&&g){const e=A?E:z,t=al.getUpdateCheckbox(e,m);A?T(t):C(t)}}),[m,A]),nc("keydown",(function(e){if(W.current&&W.current.contains(e.target))switch(e.code){case"ArrowDown":if(N+1>=R.length)return;J("down");break;case"ArrowUp":if(N-1<0)return void(u&&q.current.focus());J("up");break;case"Escape":_&&_(!0)}}),"document");const Q=e=>{const{label:t,keyPath:n,value:r}=e;k({label:t,keyPath:n,value:r})},Z=e=>{const t=A?E:z,{label:n,keyPath:r,value:i}=e,o=mn(t,(e=>{const t=al.getItemAtKeyPath(e,r);if(t.expanded=!0,t.subItems&&t.subItems.size)for(const e of t.subItems.values())e.expanded=!0})),a=al.getVisibleKeyPaths(o);V(a),A?T(o):C(o),k({label:n,keyPath:r,value:i})},K=()=>{const e=!m.length,{keyPaths:t,items:n,list:r}=al.updateSelectedAll(z,e);S&&(C(r),e?S(t,n):S([],[]))},G=e=>{const t=mn(A?E:z,(t=>{const n=al.getItemAtKeyPath(t,e);n.expanded=!n.expanded})),n=al.getVisibleKeyPaths(t);V(n),A?T(t):C(t)},X=(e,t,n=U.current)=>{const[r,...i]=t;n[r]||(n[r]={ref:void 0,subItems:{}}),i.length?X(e,i,n[r].subItems):n[r].ref=e},J=e=>{const t="down"===e?N+1:N-1;H(t);const n=R[t];Tr(U.current,n.join(".subItems.")).ref.focus()},ee=e=>{const t=e.target.value;B(t),x&&x()},te=()=>{B(""),q.current.focus(),x&&x()};const ne=()=>{},re=()=>{$&&$()},ie=()=>Y&&Y.current?Y.current.getBoundingClientRect().height:0,oe=()=>{const e=(t,n)=>{const r=P.toLowerCase().trim(),i=-1!=t.label.toLowerCase().indexOf(r),o=-1!=D.get(t.keyPath[0]).label.toLowerCase().indexOf(r);if(!t.subItems)return i?Object.assign(Object.assign({},t),{expanded:!1,isSearchTerm:!0}):n||o?Object.assign(Object.assign({},t),{expanded:!1,isSearchTerm:!1}):void 0;const a=new Map;t.subItems.forEach((t=>{const n=e(t,i);if(n){const e=n.keyPath[n.keyPath.length-1];a.set(e,n)}}));let s=!1;for(const e of a.values())if((e.isSearchTerm||e.expanded)&&(s=!0),e.subItems&&0===e.subItems.size){const t=e.keyPath[e.keyPath.length-1];a.delete(t)}return Object.assign(Object.assign({},t),{expanded:s,isSearchTerm:i,subItems:a})},t=new Map;for(const[n,r]of D){const i=e(r);i&&i.subItems&&i.subItems.size&&t.set(n,i)}return t},ae=()=>{if(["expand","collapse"].includes(f))return D;return al.getInitialDropdown(z,m)},se=e=>{const t=al.getVisibleKeyPaths(e);V(t),H(0)},ce=e=>{if(""===e)se(z),T(D),I(!1);else if(e.trim().length>=3){U.current={};const e=oe();if(T(e),se(e),I(!0),g){const t=al.getUpdateCheckbox(e,m);T(t)}}},le=()=>{if(!$||$&&"success"===b){const e=A?E:z;return Array.from(e).map((([e,n])=>t(Uc,{item:n,selectableCategory:y,searchValue:P,itemTruncationType:v,multiSelect:g,visible:p,onBlur:ne,onExpand:G,onRef:X,onSelect:Q,onSelectCategory:Z},e)))}},ue=()=>{if(g&&D.size>0&&!A&&"success"===b)return t(fl,{children:t(gl,Object.assign({onClick:K,type:"button"},{children:0===m.length?"Select all":"Clear all"}))})},de=()=>{if(A&&!l&&!E.size)return e(dl,Object.assign({"data-testid":"list-no-results"},{children:[t(pl,{"data-testid":"no-result-icon"}),t(hl,{children:"No results found."})]}),"noResults")},he=()=>{if($&&"loading"===b)return e(dl,Object.assign({"data-testid":"list-loading"},{children:[t(tc,{$buttonStyle:"secondary",size:24}),t(hl,{children:"Loading..."})]}),"loading")},pe=()=>{if($&&"fail"===b)return e(dl,Object.assign({"data-testid":"list-fail"},{children:[t(pl,{"data-testid":"load-error-icon"}),t(hl,{children:"Failed to load."}),t(gl,Object.assign({onClick:re,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:t(ll,Object.assign({style:L,"data-testid":p?"dropdown-container":"dropdown-container-hidden",ref:W},{children:(()=>{if(p)return e(ul,Object.assign({ref:Y,"data-testid":"dropdown-list",width:a,role:"list"},F,{children:[u&&"success"===b?t(ol,{ref:q,onChange:ee,value:P,placeholder:d,"data-testid":"search-input","aria-label":"Type to search",tabIndex:p?0:-1,onClear:te}):null,ue(),he(),de(),pe(),le()]}))})()}))})},yl="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",bl=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,vl=m`
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
        outline: 2px solid ${Ms.Accent.Light[3]};
    }
`,wl=f.button`
    ${vl}
    cursor: pointer;
`;f.div`
    ${vl}
`;const _l=g`
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
`,Sl=f.div`
    position: relative;
    border: 1px solid ${Ms.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Ms.Neutral[8]};

    :focus-within {
        border: 1px solid ${Ms.Accent.Light[1]};
        box-shadow: ${Gc};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${_l} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${Ms.Neutral[6](e)};

                ${wl} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Ms.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${wl} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${Ms.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Ms.Validation.Red.Border(e)};
                    box-shadow: ${Xc};
                }
            `:void 0}
`,$l=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${yl};
    margin-left: 1rem;
`,xl=f(F)`
    color: ${Ms.Neutral[3]};
    height: ${Ws.Body.fontSize}rem;
    width: ${Ws.Body.fontSize}rem;
`,kl=f.div`
    height: 1px;
    background: ${Ms.Neutral[5]};
    margin: 0 0.5rem;
`,Fl=f.div`
    display: flex;
    flex: 1;
`,Ol=f(Ks.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,Dl=f(Ol)`
    color: ${Ms.Neutral[3]};
`,Pl=({children:e,show:n,error:r,disabled:i,testId:o,onBlur:a,readOnly:s,className:l})=>{const u=c();return nc("mousedown",(function(e){if(!i){if(u&&u.current.contains(e.target))return;n&&a()}}),"document"),t(bl,Object.assign({className:l},{children:t(Sl,Object.assign({ref:u,error:r&&!n,disabled:i,$readOnly:s,expanded:n,"data-testid":o},{children:e}))}))},Bl=r=>{var{placeholder:i="Select",options:a,disabled:l,error:u,className:d,"data-testid":h,id:p,selectedKeyPath:f,mode:g,valueToStringFunction:m,enableSearch:y,searchPlaceholder:b,selectableCategory:v,hideNoResultsDisplay:w,listStyleWidth:_,readOnly:S,onSearch:$,onSelectOption:x,onShowOptions:k,onHideOptions:F,onRetry:D,optionsLoadState:P="success",optionTruncationType:B="end"}=r,M=O(r,["placeholder","options","disabled","error","className","data-testid","id","selectedKeyPath","mode","valueToStringFunction","enableSearch","searchPlaceholder","selectableCategory","hideNoResultsDisplay","listStyleWidth","readOnly","onSearch","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType"]);const[j,A]=s(f?[f]:[]),[I,z]=s(),[C,E]=s(!1),T=c(),N=c();o((()=>{A(f?[f]:[]),L(a,f||[])}),[f,a]);const H=e=>{const{keyPath:t,value:n,label:r}=e;A([t]),z({label:r,value:n}),E(!1),Y(!1),T.current&&T.current.focus(),x&&x(t,n)},R=e=>{C&&(E(!1),Y(!1)),e&&T.current&&T.current.focus()},V=()=>{const{label:e,value:t}=I;return m?m(t)||t.toString():e},L=(e,t)=>{const n=(e,t)=>{const[r,...i]=t;if(kt(e)||!r)return;const o=e.find((e=>e.key===r));return o&&i.length?n(o.subItems,i):o},r=n(e,t);if(r){const{label:e,value:t}=r;z({label:e,value:t})}else z(void 0)},W=e=>{if("middle"===B){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),kc.truncateOneLine(e,t,120,6)}return e},Y=e=>{!e&&F&&F(),e&&k&&k()};return e(Pl,Object.assign({className:d,show:C,error:u&&!C,disabled:l,readOnly:S,testId:h,onBlur:()=>{E(!1),Y(!1)}},{children:[t(wl,Object.assign({ref:T,type:"button","data-testid":p||"selector",disabled:l,onClick:e=>{e.preventDefault(),l||S||(E(!C),Y(!C))}},M,{children:e(n,{children:[t(Fl,Object.assign({ref:N},{children:kt(I)?t(Dl,Object.assign({truncateType:B},{children:i})):t(Ol,Object.assign({truncateType:B},{children:W(V())}))})),!S&&t($l,Object.assign({expanded:C},{children:t(xl,{})}))]})})),C&&t(kl,{}),a&&a.length>0||D?t(ml,{"data-testid":"nested-dropdown-list",listItems:a,listStyleWidth:_,visible:C,mode:g,selectedKeyPaths:j,selectableCategory:v,itemsLoadState:P,itemTruncationType:B,enableSearch:y,searchPlaceholder:b,hideNoResultsDisplay:w,onDismiss:R,onSelectItem:H,onSearch:$,onRetry:D}):null]}))};export{Bl as InputNestedSelect};
//# sourceMappingURL=index.js.map
