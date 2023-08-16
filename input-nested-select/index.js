import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as c,forwardRef as l,useCallback as u,useContext as d,useMemo as h}from"react";import{unstable_batchedUpdates as p}from"react-dom";import f,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as y}from"@lifesg/react-icons/external";import{TriangleForwardFillIcon as b}from"@lifesg/react-icons/triangle-forward-fill";import{CrossIcon as v}from"@lifesg/react-icons/cross";import{MagnifierIcon as w}from"@lifesg/react-icons/magnifier";import{ExclamationCircleFillIcon as _}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";function $(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F=Object.prototype;var O=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||F)};var k=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),D=O,B=k,P=Object.prototype.hasOwnProperty;var M=function(e){if(!D(e))return B(e);var t=[];for(var n in Object(e))P.call(e,n)&&"constructor"!=n&&t.push(n);return t},j="object"==typeof x&&x&&x.Object===Object&&x,A=j,z="object"==typeof self&&self&&self.Object===Object&&self,I=A||z||Function("return this")(),E=I.Symbol,T=E,C=Object.prototype,H=C.hasOwnProperty,N=C.toString,R=T?T.toStringTag:void 0;var V=function(e){var t=H.call(e,R),n=e[R];try{e[R]=void 0;var r=!0}catch(e){}var i=N.call(e);return r&&(t?e[R]=n:delete e[R]),i},L=Object.prototype.toString;var W=V,Y=function(e){return L.call(e)},q=E?E.toStringTag:void 0;var U=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?W(e):Y(e)};var Q=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Z=U,K=Q;var G,X=function(e){if(!K(e))return!1;var t=Z(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},J=I["__core-js_shared__"],ee=(G=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var te=function(e){return!!ee&&ee in e},ne=Function.prototype.toString;var re=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ie=X,oe=te,ae=Q,se=re,ce=/^\[object .+?Constructor\]$/,le=Function.prototype,ue=Object.prototype,de=le.toString,he=ue.hasOwnProperty,pe=RegExp("^"+de.call(he).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var fe=function(e){return!(!ae(e)||oe(e))&&(ie(e)?pe:ce).test(se(e))},ge=function(e,t){return null==e?void 0:e[t]};var me=function(e,t){var n=ge(e,t);return fe(n)?n:void 0},ye=me(I,"DataView"),be=me(I,"Map"),ve=ye,we=be,_e=me(I,"Promise"),Se=me(I,"Set"),$e=me(I,"WeakMap"),xe=U,Fe=re,Oe="[object Map]",ke="[object Promise]",De="[object Set]",Be="[object WeakMap]",Pe="[object DataView]",Me=Fe(ve),je=Fe(we),Ae=Fe(_e),ze=Fe(Se),Ie=Fe($e),Ee=xe;(ve&&Ee(new ve(new ArrayBuffer(1)))!=Pe||we&&Ee(new we)!=Oe||_e&&Ee(_e.resolve())!=ke||Se&&Ee(new Se)!=De||$e&&Ee(new $e)!=Be)&&(Ee=function(e){var t=xe(e),n="[object Object]"==t?e.constructor:void 0,r=n?Fe(n):"";if(r)switch(r){case Me:return Pe;case je:return Oe;case Ae:return ke;case ze:return De;case Ie:return Be}return t});var Te=Ee;var Ce=function(e){return null!=e&&"object"==typeof e},He=U,Ne=Ce;var Re=function(e){return Ne(e)&&"[object Arguments]"==He(e)},Ve=Ce,Le=Object.prototype,We=Le.hasOwnProperty,Ye=Le.propertyIsEnumerable,qe=Re(function(){return arguments}())?Re:function(e){return Ve(e)&&We.call(e,"callee")&&!Ye.call(e,"callee")},Ue=Array.isArray;var Qe=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ze=X,Ke=Qe;var Ge=function(e){return null!=e&&Ke(e.length)&&!Ze(e)},Xe={exports:{}};var Je=function(){return!1};!function(e,t){var n=I,r=Je,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(Xe,Xe.exports);var et=U,tt=Qe,nt=Ce,rt={};rt["[object Float32Array]"]=rt["[object Float64Array]"]=rt["[object Int8Array]"]=rt["[object Int16Array]"]=rt["[object Int32Array]"]=rt["[object Uint8Array]"]=rt["[object Uint8ClampedArray]"]=rt["[object Uint16Array]"]=rt["[object Uint32Array]"]=!0,rt["[object Arguments]"]=rt["[object Array]"]=rt["[object ArrayBuffer]"]=rt["[object Boolean]"]=rt["[object DataView]"]=rt["[object Date]"]=rt["[object Error]"]=rt["[object Function]"]=rt["[object Map]"]=rt["[object Number]"]=rt["[object Object]"]=rt["[object RegExp]"]=rt["[object Set]"]=rt["[object String]"]=rt["[object WeakMap]"]=!1;var it=function(e){return nt(e)&&tt(e.length)&&!!rt[et(e)]};var ot=function(e){return function(t){return e(t)}},at={exports:{}};!function(e,t){var n=j,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(at,at.exports);var st=it,ct=ot,lt=at.exports,ut=lt&&lt.isTypedArray,dt=ut?ct(ut):st,ht=M,pt=Te,ft=qe,gt=Ue,mt=Ge,yt=Xe.exports,bt=O,vt=dt,wt=Object.prototype.hasOwnProperty;var _t=function(e){if(null==e)return!0;if(mt(e)&&(gt(e)||"string"==typeof e||"function"==typeof e.splice||yt(e)||vt(e)||ft(e)))return!e.length;var t=pt(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(bt(e))return!ht(e).length;for(var n in e)if(wt.call(e,n))return!1;return!0},St=Symbol.for("immer-nothing"),$t=Symbol.for("immer-draftable"),xt=Symbol.for("immer-state"),Ft="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function Ot(e,...t){if("production"!==process.env.NODE_ENV){const n=Ft[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var kt=Object.getPrototypeOf;function Dt(e){return!!e&&!!e[xt]}function Bt(e){return!!e&&(Mt(e)||Array.isArray(e)||!!e[$t]||!!e.constructor?.[$t]||Et(e)||Tt(e))}var Pt=Object.prototype.constructor.toString();function Mt(e){if(!e||"object"!=typeof e)return!1;const t=kt(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Pt}function jt(e,t){0===At(e)?Object.entries(e).forEach((([n,r])=>{t(n,r,e)})):e.forEach(((n,r)=>t(r,n,e)))}function At(e){const t=e[xt];return t?t.type_:Array.isArray(e)?1:Et(e)?2:Tt(e)?3:0}function zt(e,t){return 2===At(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function It(e,t,n){const r=At(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function Et(e){return e instanceof Map}function Tt(e){return e instanceof Set}function Ct(e){return e.copy_||e.base_}function Ht(e,t){if(Et(e))return new Map(e);if(Tt(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&Mt(e)){if(!kt(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const n=Object.getOwnPropertyDescriptors(e);delete n[xt];let r=Reflect.ownKeys(n);for(let t=0;t<r.length;t++){const i=r[t],o=n[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(n[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(kt(e),n)}function Nt(e,t=!1){return Vt(e)||Dt(e)||!Bt(e)||(At(e)>1&&(e.set=e.add=e.clear=e.delete=Rt),Object.freeze(e),t&&jt(e,((e,t)=>Nt(t,!0)))),e}function Rt(){Ot(2)}function Vt(e){return Object.isFrozen(e)}var Lt,Wt={};function Yt(e){const t=Wt[e];return t||Ot(0,e),t}function qt(){return Lt}function Ut(e,t){t&&(Yt("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Qt(e){Zt(e),e.drafts_.forEach(Gt),e.drafts_=null}function Zt(e){e===Lt&&(Lt=e.parent_)}function Kt(e){return Lt={drafts_:[],parent_:Lt,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Gt(e){const t=e[xt];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Xt(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[xt].modified_&&(Qt(t),Ot(4)),Bt(e)&&(e=Jt(t,e),t.parent_||tn(t,e)),t.patches_&&Yt("Patches").generateReplacementPatches_(n[xt].base_,e,t.patches_,t.inversePatches_)):e=Jt(t,n,[]),Qt(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==St?e:void 0}function Jt(e,t,n){if(Vt(t))return t;const r=t[xt];if(!r)return jt(t,((i,o)=>en(e,r,t,i,o,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return tn(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,o=!1;3===r.type_&&(i=new Set(t),t.clear(),o=!0),jt(i,((i,a)=>en(e,r,t,i,a,n,o))),tn(e,t,!1),n&&e.patches_&&Yt("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function en(e,t,n,r,i,o,a){if("production"!==process.env.NODE_ENV&&i===n&&Ot(5),Dt(i)){const a=Jt(e,i,o&&t&&3!==t.type_&&!zt(t.assigned_,r)?o.concat(r):void 0);if(It(n,r,a),!Dt(a))return;e.canAutoFreeze_=!1}else a&&n.add(i);if(Bt(i)&&!Vt(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Jt(e,i),t&&t.scope_.parent_||tn(e,i)}}function tn(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Nt(t,n)}var nn={get(e,t){if(t===xt)return e;const n=Ct(e);if(!zt(n,t))return function(e,t,n){const r=an(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!Bt(r)?r:r===on(e.base_,t)?(cn(e),e.copy_[t]=ln(r,e)):r},has:(e,t)=>t in Ct(e),ownKeys:e=>Reflect.ownKeys(Ct(e)),set(e,t,n){const r=an(Ct(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=on(Ct(e),t),a=r?.[xt];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((i=n)===(o=r)?0!==i||1/i==1/o:i!=i&&o!=o)&&(void 0!==n||zt(e.base_,t)))return!0;cn(e),sn(e)}var i,o;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==on(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,cn(e),sn(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Ct(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){Ot(11)},getPrototypeOf:e=>kt(e.base_),setPrototypeOf(){Ot(12)}},rn={};function on(e,t){const n=e[xt];return(n?Ct(n):e)[t]}function an(e,t){if(!(t in e))return;let n=kt(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=kt(n)}}function sn(e){e.modified_||(e.modified_=!0,e.parent_&&sn(e.parent_))}function cn(e){e.copy_||(e.copy_=Ht(e.base_,e.scope_.immer_.useStrictShallowCopy_))}jt(nn,((e,t)=>{rn[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),rn.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&Ot(13),rn.set.call(this,e,t,void 0)},rn.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&Ot(14),nn.set.call(this,e[0],t,n,e[0])};function ln(e,t){const n=Et(e)?Yt("MapSet").proxyMap_(e,t):Tt(e)?Yt("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:qt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=nn;n&&(i=[r],o=rn);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:qt()).drafts_.push(n),n}function un(e){if(!Bt(e)||Vt(e))return e;const t=e[xt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ht(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Ht(e,!0);return jt(n,((e,t)=>{It(n,e,un(t))})),t&&(t.finalized_=!1),n}var dn=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&Ot(6),void 0!==n&&"function"!=typeof n&&Ot(7),Bt(e)){const i=Kt(this),o=ln(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?Qt(i):Zt(i)}return Ut(i,n),Xt(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===St&&(r=void 0),this.autoFreeze_&&Nt(r,!0),n){const t=[],i=[];Yt("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}Ot(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Bt(e)||Ot(8),Dt(e)&&(e=function(e){Dt(e)||Ot(10,e);return un(e)}(e));const t=Kt(this),n=ln(e,void 0);return n[xt].isManual_=!0,Zt(t),n}finishDraft(e,t){const n=e&&e[xt];n&&n.isManual_||Ot(9);const{scope_:r}=n;return Ut(r,t),Xt(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=Yt("Patches").applyPatches_;return Dt(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},hn=dn.produce;dn.produceWithPatches.bind(dn),dn.setAutoFreeze.bind(dn),dn.setUseStrictShallowCopy.bind(dn),dn.applyPatches.bind(dn),dn.createDraft.bind(dn),dn.finishDraft.bind(dn);var pn=U,fn=Ce;var gn=function(e){return"symbol"==typeof e||fn(e)&&"[object Symbol]"==pn(e)},mn=Ue,yn=gn,bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vn=/^\w*$/;var wn=function(e,t){if(mn(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!yn(e))||(vn.test(e)||!bn.test(e)||null!=t&&e in Object(t))},_n=me(Object,"create"),Sn=_n;var $n=function(){this.__data__=Sn?Sn(null):{},this.size=0};var xn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Fn=_n,On=Object.prototype.hasOwnProperty;var kn=function(e){var t=this.__data__;if(Fn){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return On.call(t,e)?t[e]:void 0},Dn=_n,Bn=Object.prototype.hasOwnProperty;var Pn=_n;var Mn=$n,jn=xn,An=kn,zn=function(e){var t=this.__data__;return Dn?void 0!==t[e]:Bn.call(t,e)},In=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pn&&void 0===t?"__lodash_hash_undefined__":t,this};function En(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}En.prototype.clear=Mn,En.prototype.delete=jn,En.prototype.get=An,En.prototype.has=zn,En.prototype.set=In;var Tn=En;var Cn=function(){this.__data__=[],this.size=0};var Hn=function(e,t){return e===t||e!=e&&t!=t};var Nn=function(e,t){for(var n=e.length;n--;)if(Hn(e[n][0],t))return n;return-1},Rn=Nn,Vn=Array.prototype.splice;var Ln=Nn;var Wn=Nn;var Yn=Nn;var qn=Cn,Un=function(e){var t=this.__data__,n=Rn(t,e);return!(n<0)&&(n==t.length-1?t.pop():Vn.call(t,n,1),--this.size,!0)},Qn=function(e){var t=this.__data__,n=Ln(t,e);return n<0?void 0:t[n][1]},Zn=function(e){return Wn(this.__data__,e)>-1},Kn=function(e,t){var n=this.__data__,r=Yn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Gn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Gn.prototype.clear=qn,Gn.prototype.delete=Un,Gn.prototype.get=Qn,Gn.prototype.has=Zn,Gn.prototype.set=Kn;var Xn=Tn,Jn=Gn,er=be;var tr=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nr=function(e,t){var n=e.__data__;return tr(t)?n["string"==typeof t?"string":"hash"]:n.map},rr=nr;var ir=nr;var or=nr;var ar=nr;var sr=function(){this.size=0,this.__data__={hash:new Xn,map:new(er||Jn),string:new Xn}},cr=function(e){var t=rr(this,e).delete(e);return this.size-=t?1:0,t},lr=function(e){return ir(this,e).get(e)},ur=function(e){return or(this,e).has(e)},dr=function(e,t){var n=ar(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function hr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}hr.prototype.clear=sr,hr.prototype.delete=cr,hr.prototype.get=lr,hr.prototype.has=ur,hr.prototype.set=dr;var pr=hr;function fr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(fr.Cache||pr),n}fr.Cache=pr;var gr=fr;var mr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yr=/\\(\\)?/g,br=function(e){var t=gr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(mr,(function(e,n,r,i){t.push(r?i.replace(yr,"$1"):n||e)})),t}));var vr=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},wr=Ue,_r=gn,Sr=E?E.prototype:void 0,$r=Sr?Sr.toString:void 0;var xr=function e(t){if("string"==typeof t)return t;if(wr(t))return vr(t,e)+"";if(_r(t))return $r?$r.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Fr=xr;var Or=Ue,kr=wn,Dr=br,Br=function(e){return null==e?"":Fr(e)};var Pr=gn;var Mr=function(e,t){return Or(e)?e:kr(e,t)?[e]:Dr(Br(e))},jr=function(e){if("string"==typeof e||Pr(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ar=function(e,t){for(var n=0,r=(t=Mr(t,e)).length;null!=e&&n<r;)e=e[jr(t[n++])];return n&&n==r?e:void 0};var zr=function(e,t,n){var r=null==e?void 0:Ar(e,t);return void 0===r?n:r};let Ir=Gr();const Er=e=>Ur(e,Ir);let Tr=Gr();Er.write=e=>Ur(e,Tr);let Cr=Gr();Er.onStart=e=>Ur(e,Cr);let Hr=Gr();Er.onFrame=e=>Ur(e,Hr);let Nr=Gr();Er.onFinish=e=>Ur(e,Nr);let Rr=[];Er.setTimeout=(e,t)=>{let n=Er.now()+t,r=()=>{let e=Rr.findIndex((e=>e.cancel==r));~e&&Rr.splice(e,1),Yr-=~e?1:0},i={time:n,handler:e,cancel:r};return Rr.splice(Vr(n),0,i),Yr+=1,Qr(),i};let Vr=e=>~(~Rr.findIndex((t=>t.time>e))||~Rr.length);Er.cancel=e=>{Cr.delete(e),Hr.delete(e),Nr.delete(e),Ir.delete(e),Tr.delete(e)},Er.sync=e=>{qr=!0,Er.batchedUpdates(e),qr=!1},Er.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Er.onStart(n)}return r.handler=e,r.cancel=()=>{Cr.delete(n),t=null},r};let Lr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Er.use=e=>Lr=e,Er.now="undefined"!=typeof performance?()=>performance.now():Date.now,Er.batchedUpdates=e=>e(),Er.catch=console.error,Er.frameLoop="always",Er.advance=()=>{"demand"!==Er.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Kr()};let Wr=-1,Yr=0,qr=!1;function Ur(e,t){qr?(t.delete(e),e(0)):(t.add(e),Qr())}function Qr(){Wr<0&&(Wr=0,"demand"!==Er.frameLoop&&Lr(Zr))}function Zr(){~Wr&&(Lr(Zr),Er.batchedUpdates(Kr))}function Kr(){let e=Wr;Wr=Er.now();let t=Vr(Wr);t&&(Xr(Rr.splice(0,t),(e=>e.handler())),Yr-=t),Yr?(Cr.flush(),Ir.flush(e?Math.min(64,Wr-e):16.667),Hr.flush(),Tr.flush(),Nr.flush()):Wr=-1}function Gr(){let e=new Set,t=e;return{add(n){Yr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Yr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Yr-=t.size,Xr(t,(t=>t(n)&&e.add(t))),Yr+=e.size,t=e)}}}function Xr(e,t){e.forEach((e=>{try{t(e)}catch(e){Er.catch(e)}}))}function Jr(){}const ei={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ti(e,t){if(ei.arr(e)){if(!ei.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const ni=(e,t)=>e.forEach(t);function ri(e,t,n){if(ei.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const ii=e=>ei.und(e)?[]:ei.arr(e)?e:[e];function oi(e,t){if(e.size){const n=Array.from(e);e.clear(),ni(n,t)}}const ai=(e,...t)=>oi(e,(e=>e(...t))),si=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ci,li,ui=null,di=!1,hi=Jr;var pi=Object.freeze({__proto__:null,get createStringInterpolator(){return ci},get to(){return li},get colors(){return ui},get skipAnimation(){return di},get willAdvance(){return hi},assign:e=>{e.to&&(li=e.to),e.now&&(Er.now=e.now),void 0!==e.colors&&(ui=e.colors),null!=e.skipAnimation&&(di=e.skipAnimation),e.createStringInterpolator&&(ci=e.createStringInterpolator),e.requestAnimationFrame&&Er.use(e.requestAnimationFrame),e.batchedUpdates&&(Er.batchedUpdates=e.batchedUpdates),e.willAdvance&&(hi=e.willAdvance),e.frameLoop&&(Er.frameLoop=e.frameLoop)}});const fi=new Set;let gi=[],mi=[],yi=0;const bi={get idle(){return!fi.size&&!gi.length},start(e){yi>e.priority?(fi.add(e),Er.onStart(vi)):(wi(e),Er(Si))},advance:Si,sort(e){if(yi)Er.onFrame((()=>bi.sort(e)));else{const t=gi.indexOf(e);~t&&(gi.splice(t,1),_i(e))}},clear(){gi=[],fi.clear()}};function vi(){fi.forEach(wi),fi.clear(),Er(Si)}function wi(e){gi.includes(e)||_i(e)}function _i(e){gi.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(gi,(t=>t.priority>e.priority)),0,e)}function Si(e){const t=mi;for(let n=0;n<gi.length;n++){const r=gi[n];yi=r.priority,r.idle||(hi(r),r.advance(e),r.idle||t.push(r))}return yi=0,mi=gi,mi.length=0,gi=t,gi.length>0}const $i="[-+]?\\d*\\.?\\d+",xi=$i+"%";function Fi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Oi=new RegExp("rgb"+Fi($i,$i,$i)),ki=new RegExp("rgba"+Fi($i,$i,$i,$i)),Di=new RegExp("hsl"+Fi($i,xi,xi)),Bi=new RegExp("hsla"+Fi($i,xi,xi,$i)),Pi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Mi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ji=/^#([0-9a-fA-F]{6})$/,Ai=/^#([0-9a-fA-F]{8})$/;function zi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ii(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=zi(i,r,e+1/3),a=zi(i,r,e),s=zi(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Ei(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ti(e){return(parseFloat(e)%360+360)%360/360}function Ci(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Hi(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ni(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ji.exec(e))?parseInt(t[1]+"ff",16)>>>0:ui&&void 0!==ui[e]?ui[e]:(t=Oi.exec(e))?(Ei(t[1])<<24|Ei(t[2])<<16|Ei(t[3])<<8|255)>>>0:(t=ki.exec(e))?(Ei(t[1])<<24|Ei(t[2])<<16|Ei(t[3])<<8|Ci(t[4]))>>>0:(t=Pi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ai.exec(e))?parseInt(t[1],16)>>>0:(t=Mi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Di.exec(e))?(255|Ii(Ti(t[1]),Hi(t[2]),Hi(t[3])))>>>0:(t=Bi.exec(e))?(Ii(Ti(t[1]),Hi(t[2]),Hi(t[3]))|Ci(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Ri=(e,t,n)=>{if(ei.fun(e))return e;if(ei.arr(e))return Ri({range:e,output:t,extrapolate:n});if(ei.str(e.output[0]))return ci(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",c=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,c){let l=c?c(e):e;if(l<t){if("identity"===a)return l;"clamp"===a&&(l=t)}if(l>n){if("identity"===s)return l;"clamp"===s&&(l=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?l=-l:n===1/0?l-=t:l=(l-t)/(n-t);l=o(l),r===-1/0?l=-l:i===1/0?l+=r:l=l*(i-r)+r;return l}(e,o[t],o[t+1],i[t],i[t+1],c,a,s,r.map)}};const Vi=1.70158,Li=1.525*Vi,Wi=Vi+1,Yi=2*Math.PI/3,qi=2*Math.PI/4.5,Ui=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Qi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Wi*e*e*e-Vi*e*e,easeOutBack:e=>1+Wi*Math.pow(e-1,3)+Vi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Li)/2:(Math.pow(2*e-2,2)*((Li+1)*(2*e-2)+Li)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Yi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Yi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*qi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*qi)/2+1,easeInBounce:e=>1-Ui(1-e),easeOutBounce:Ui,easeInOutBounce:e=>e<.5?(1-Ui(1-2*e))/2:(1+Ui(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}const Ki=Symbol.for("FluidValue.get"),Gi=Symbol.for("FluidValue.observers"),Xi=e=>Boolean(e&&e[Ki]),Ji=e=>e&&e[Ki]?e[Ki]():e,eo=e=>e[Gi]||null;function to(e,t){let n=e[Gi];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class no{constructor(e){if(this[Ki]=void 0,this[Gi]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");ro(this,e)}}const ro=(e,t)=>ao(e,Ki,t);function io(e,t){if(e[Ki]){let n=e[Gi];n||ao(e,Gi,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function oo(e,t){let n=e[Gi];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Gi]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const ao=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),so=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,co=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,lo=new RegExp(`(${so.source})(%|[a-z]+)`,"i"),uo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ho=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,po=e=>{const[t,n]=fo(e);if(!t||si())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&ho.test(n)?po(n):n||e},fo=e=>{const t=ho.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let go;const mo=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,yo=e=>{go||(go=ui?new RegExp(`(${Object.keys(ui).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ji(e).replace(ho,po).replace(co,Ni).replace(go,Ni))),n=t.map((e=>e.match(so).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ri(Zi({},e,{output:t}))));return e=>{var n;const i=!lo.test(t[0])&&(null==(n=t.find((e=>lo.test(e))))?void 0:n.replace(so,""));let o=0;return t[0].replace(so,(()=>`${r[o++](e)}${i||""}`)).replace(uo,mo)}},bo="react-spring: ",vo=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${bo}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},wo=vo(console.warn);const _o=vo(console.warn);function So(e){return ei.str(e)&&("#"==e[0]||/\d/.test(e)||!si()&&ho.test(e)||e in(ui||{}))}const $o=si()?o:a,xo=()=>{const e=c(!1);return $o((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Fo(){const e=s()[1],t=xo();return()=>{t.current&&e(Math.random())}}const Oo=e=>o(e,ko),ko=[];function Do(e){const t=c();return o((()=>{t.current=e})),t.current}const Bo=Symbol.for("Animated:node"),Po=e=>e&&e[Bo],Mo=(e,t)=>{return n=e,r=Bo,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},jo=e=>e&&e[Bo]&&e[Bo].getPayload();class Ao{constructor(){this.payload=void 0,Mo(this,this)}getPayload(){return this.payload||[]}}class zo extends Ao{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,ei.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new zo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return ei.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,ei.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Io extends zo{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Ri({output:[e,e]})}static create(e){return new Io(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(ei.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ri({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Eo={dependencies:null};class To extends Ao{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return ri(this.source,((n,r)=>{var i;(i=n)&&i[Bo]===i?t[r]=n.getValue(e):Xi(n)?t[r]=Ji(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ni(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return ri(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Eo.dependencies&&Xi(e)&&Eo.dependencies.add(e);const t=jo(e);t&&ni(t,(e=>this.add(e)))}}class Co extends To{constructor(e){super(e)}static create(e){return new Co(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ho)),!0)}}function Ho(e){return(So(e)?Io:zo).create(e)}function No(e){const t=Po(e);return t?t.constructor:ei.arr(e)?Co:So(e)?Io:zo}function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const Vo=(e,t)=>{const n=!ei.fun(e)||e.prototype&&e.prototype.isReactComponent;return l(((i,a)=>{const s=c(null),l=n&&u((e=>{s.current=function(e,t){e&&(ei.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;Eo.dependencies=n,e.style&&(e=Ro({},e,{style:t.createAnimatedStyle(e.style)}));return e=new To(e),Eo.dependencies=null,[e,n]}(i,t),p=Fo(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Lo(f,h),m=c();$o((()=>(m.current=g,ni(h,(e=>io(e,g))),()=>{m.current&&(ni(m.current.deps,(e=>oo(e,m.current))),Er.cancel(m.current.update))}))),o(f,[]),Oo((()=>()=>{const e=m.current;ni(e.deps,(t=>oo(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,Ro({},y,{ref:l}))}))};class Lo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Er.write(this.update)}}const Wo=Symbol.for("AnimatedComponent"),Yo=e=>ei.str(e)?e:e&&ei.str(e.displayName)?e.displayName:ei.fun(e)&&e.name||null;function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}function Uo(e,...t){return ei.fun(e)?e(...t):e}const Qo=(e,t)=>!0===e||!!(t&&e&&(ei.fun(e)?e(t):ii(e).includes(t))),Zo=(e,t)=>ei.obj(e)?t&&e[t]:e,Ko=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Go=e=>e,Xo=(e,t=Go)=>{let n=Jo;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);ei.und(n)||(r[i]=n)}return r},Jo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ea={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ta(e){const t=function(e){const t={};let n=0;if(ri(e,((e,r)=>{ea[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return ri(e,((e,r)=>r in t||(n[r]=e))),n}return qo({},e)}function na(e){return e=Ji(e),ei.arr(e)?e.map(na):So(e)?pi.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ra(e){return ei.fun(e)||ei.arr(e)&&ei.obj(e[0])}const ia=qo({},{tension:170,friction:26},{mass:1,damping:1,easing:Qi.linear,clamp:!1});class oa{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,ia)}}function aa(e,t){if(ei.und(t.decay)){const n=!ei.und(t.tension)||!ei.und(t.friction);!n&&ei.und(t.frequency)&&ei.und(t.damping)&&ei.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const sa=[];class ca{constructor(){this.changed=!1,this.values=sa,this.toValues=null,this.fromValues=sa,this.to=void 0,this.from=void 0,this.config=new oa,this.immediate=!1}}function la(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var c;let l,u,d=Qo(null!=(c=n.cancel)?c:null==r?void 0:r.cancel,t);if(d)f();else{ei.und(n.pause)||(i.paused=Qo(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Qo(e,t)),l=Uo(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),l=u.time-Er.now()}function p(){l>0&&!pi.skipAnimation?(i.delayed=!0,u=Er.setTimeout(f,l),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(qo({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const ua=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?pa(e.get()):t.every((e=>e.noop))?da(e.get()):ha(e.get(),t.every((e=>e.finished))),da=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ha=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),pa=e=>({value:e,cancelled:!0,finished:!1});function fa(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:c}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const l=Xo(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&pa(r)||i!==n.asyncId&&ha(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new ma,a=new ya;return(async()=>{if(pi.skipAnimation)throw ga(n),a.result=ha(r,!1),d(a),a;p(o);const s=ei.obj(e)?qo({},e):qo({},t,{to:e});s.parentId=i,ri(l,((e,t)=>{ei.und(s[t])&&(s[t]=e)}));const c=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),c})()};let g;if(pi.skipAnimation)return ga(n),ha(r,!1);try{let t;t=ei.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=ha(r.get(),!0,!1)}catch(e){if(e instanceof ma)g=e.result;else{if(!(e instanceof ya))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?c:void 0)}return ei.fun(a)&&Er.batchedUpdates((()=>{a(g,r,r.item)})),g})():c}function ga(e,t){oi(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class ma extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class ya extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const ba=e=>e instanceof wa;let va=1;class wa extends no{constructor(...e){super(...e),this.id=va++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Po(this);return e&&e.getValue()}to(...e){return pi.to(this,e)}interpolate(...e){return wo(`${bo}The "interpolate" function is deprecated in v9 (use "to" instead)`),pi.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){to(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||bi.sort(this),to(this,{type:"priority",parent:this,priority:e})}}const _a=Symbol.for("SpringPhase"),Sa=e=>(1&e[_a])>0,$a=e=>(2&e[_a])>0,xa=e=>(4&e[_a])>0,Fa=(e,t)=>t?e[_a]|=3:e[_a]&=-3,Oa=(e,t)=>t?e[_a]|=4:e[_a]&=-5;class ka extends wa{constructor(e,t){if(super(),this.key=void 0,this.animation=new ca,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!ei.und(e)||!ei.und(t)){const n=ei.obj(e)?qo({},e):qo({},t,{from:e});ei.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!($a(this)||this._state.asyncTo)||xa(this)}get goal(){return Ji(this.animation.to)}get velocity(){const e=Po(this);return e instanceof zo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Sa(this)}get isAnimating(){return $a(this)}get isPaused(){return xa(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=jo(r.to);!a&&Xi(r.to)&&(o=ii(Ji(r.to))),r.values.forEach(((s,c)=>{if(s.done)return;const l=s.constructor==Io?1:a?a[c].lastPosition:o[c];let u=r.immediate,d=l;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[c],o=null!=s.v0?s.v0:s.v0=ei.arr(i.velocity)?i.velocity[c]:i.velocity;let a;const h=i.precision||(n==l?.005:Math.min(1,.001*Math.abs(l-n)));if(ei.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,c=!ei.und(r),p=n==l?s.v0>0:n<l;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(l-d)<=h,!u));++e){c&&(g=d==l||d>l==p,g&&(a=-a*r,d=l));a+=(1e-6*-i.tension*(d-l)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(l-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[c].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Po(this),c=s.getValue();if(t){const e=Ji(r.to);c===e&&!n||i.decay?n&&i.decay&&this._onChange(c):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(c)}set(e){return Er.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if($a(this)){const{to:e,config:t}=this.animation;Er.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return ei.und(e)?(n=this.queue||[],this.queue=[]):n=[ei.obj(e)?e:qo({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>ua(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ga(this._state,e&&this._lastCallId),Er.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=ei.obj(n)?n[t]:n,(null==n||ra(n))&&(n=void 0),r=ei.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Sa(this)||(e.reverse&&([n,r]=[r,n]),r=Ji(r),ei.und(r)?Po(this)||this._set(n):this._set(r)),i}_update(e,t){let n=qo({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Xo(n,((e,t)=>/^on/.test(t)?Zo(e,r):e))),za(this,n,"onProps"),Ia(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return la(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{xa(this)||(Oa(this,!0),ai(a.pauseQueue),Ia(this,"onPause",ha(this,Da(this,this.animation.to)),this))},resume:()=>{xa(this)&&(Oa(this,!1),$a(this)&&this._resume(),ai(a.resumeQueue),Ia(this,"onResume",ha(this,Da(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Ba(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(pa(this));const r=!ei.und(e.to),i=!ei.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(pa(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:c,from:l}=s;let{to:u=c,from:d=l}=e;!i||r||t.default&&!ei.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!ti(d,l);h&&(s.from=d),d=Ji(d);const p=!ti(u,c);p&&this._focus(u);const f=ra(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(aa(n=qo({},n),t),t=qo({},n,t)),aa(e,t),Object.assign(e,t);for(const t in ia)null==e[t]&&(e[t]=ia[t]);let{mass:r,frequency:i,damping:o}=e;ei.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Uo(t.config,o),t.config!==a.config?Uo(a.config,o):void 0);let b=Po(this);if(!b||ei.und(u))return n(ha(this,!0));const v=ei.und(t.reset)?i&&!t.default:!ei.und(d)&&Qo(t.reset,o),w=v?d:this.get(),_=na(u),S=ei.num(_)||ei.arr(_)||So(_),$=!f&&(!S||Qo(a.immediate||t.immediate,o));if(p){const e=No(u);if(e!==b.constructor){if(!$)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(_)}}const x=b.constructor;let F=Xi(u),O=!1;if(!F){const e=v||!Sa(this)&&h;(p||e)&&(O=ti(na(w),_),F=!O),(ti(s.immediate,$)||$)&&ti(g.decay,m)&&ti(g.velocity,y)||(F=!0)}if(O&&$a(this)&&(s.changed&&!v?F=!0:F||this._stop(c)),!f&&((F||Xi(c))&&(s.values=b.getPayload(),s.toValues=Xi(u)?null:x==Io?[1]:ii(_)),s.immediate!=$&&(s.immediate=$,$||v||this._set(c)),F)){const{onRest:e}=s;ni(Aa,(e=>za(this,t,e)));const r=ha(this,Da(this,c));ai(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Er.batchedUpdates((()=>{s.changed=!v,null==e||e(r,this),v?Uo(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}v&&this._set(w),f?n(fa(t.to,t,this._state,this)):F?this._start():$a(this)&&!p?this._pendingCalls.add(n):n(da(w))}_focus(e){const t=this.animation;e!==t.to&&(eo(this)&&this._detach(),t.to=e,eo(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Xi(t)&&(io(t,this),ba(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Xi(e)&&oo(e,this)}_set(e,t=!0){const n=Ji(e);if(!ei.und(n)){const e=Po(this);if(!e||!ti(n,e.getValue())){const r=No(n);e&&e.constructor==r?e.setValue(n):Mo(this,r.create(n)),e&&Er.batchedUpdates((()=>{this._onChange(n,t)}))}}return Po(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ia(this,"onStart",ha(this,Da(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Uo(this.animation.onChange,e,this)),Uo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Po(this).reset(Ji(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),$a(this)||(Fa(this,!0),xa(this)||this._resume())}_resume(){pi.skipAnimation?this.finish():bi.start(this)}_stop(e,t){if($a(this)){Fa(this,!1);const n=this.animation;ni(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),to(this,{type:"idle",parent:this});const r=t?pa(this.get()):ha(this.get(),Da(this,null!=e?e:n.to));ai(this._pendingCalls,r),n.changed&&(n.changed=!1,Ia(this,"onRest",r,this))}}}function Da(e,t){const n=na(t);return ti(na(e.get()),n)}function Ba(e,t=e.loop,n=e.to){let r=Uo(t);if(r){const i=!0!==r&&ta(r),o=(i||e).reverse,a=!i||i.reset;return Pa(qo({},e,{loop:t,default:!1,pause:void 0,to:!o||ra(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function Pa(e){const{to:t,from:n}=e=ta(e),r=new Set;return ei.obj(t)&&ja(t,r),ei.obj(n)&&ja(n,r),e.keys=r.size?Array.from(r):null,e}function Ma(e){const t=Pa(e);return ei.und(t.default)&&(t.default=Xo(t)),t}function ja(e,t){ri(e,((e,n)=>null!=e&&t.add(n)))}const Aa=["onStart","onRest","onChange","onPause","onResume"];function za(e,t,n){e.animation[n]=t[n]!==Ko(t,n)?Zo(t[n],e.key):void 0}function Ia(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Ea=["onStart","onChange","onRest"];let Ta=1;class Ca{constructor(e,t){this.id=Ta++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(qo({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];ei.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Pa(e)),this}start(e){let{queue:t}=this;return e?t=ii(e).map(Pa):this.queue=[],this._flush?this._flush(this,t):(Ya(this,t),Ha(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;ni(ii(t),(t=>n[t].stop(!!e)))}else ga(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(ei.und(e))this.start({pause:!0});else{const t=this.springs;ni(ii(e),(e=>t[e].pause()))}return this}resume(e){if(ei.und(e))this.start({pause:!1});else{const t=this.springs;ni(ii(e),(e=>t[e].resume()))}return this}each(e){ri(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,oi(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&oi(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,oi(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Er.onFrame(this._onFrame)}}function Ha(e,t){return Promise.all(t.map((t=>Na(e,t)))).then((t=>ua(e,t)))}async function Na(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:c}=t,l=ei.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=ei.arr(i)||ei.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,l&&(l.onRest=void 0)):ni(Ea,(n=>{const r=t[n];if(ei.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},l&&(l[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ai(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Ko(t,"cancel");(u||p&&d.asyncId)&&h.push(la(++e._lastAsyncId,{props:t,state:d,actions:{pause:Jr,resume:Jr,start(t,n){p?(ga(d,e._lastAsyncId),n(pa(e))):(t.onRest=s,n(fa(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=ua(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=Ba(t,a,i);if(n)return Ya(e,[n]),Na(e,n,!0)}return c&&Er.batchedUpdates((()=>c(f,e,e.item))),f}function Ra(e,t){const n=qo({},e.springs);return t&&ni(ii(t),(e=>{ei.und(e.keys)&&(e=Pa(e)),ei.obj(e.to)||(e=qo({},e,{to:void 0})),Wa(n,e,(e=>La(e)))})),Va(e,n),n}function Va(e,t){ri(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,io(t,e))}))}function La(e,t){const n=new ka;return n.key=e,t&&io(n,t),n}function Wa(e,t,n){t.keys&&ni(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ya(e,t){ni(t,(t=>{Wa(e.springs,t,(t=>La(t,e)))}))}const qa=["children"],Ua=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,qa);const i=d(Qa),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=c(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:u}=Qa;return r.createElement(u,{value:n},t)},Qa=(Za=Ua,Ka={},Object.assign(Za,r.createContext(Ka)),Za.Provider._context=Za,Za.Consumer._context=Za,Za);var Za,Ka;Ua.Provider=Qa.Provider,Ua.Consumer=Qa.Consumer;const Ga=()=>{const e=[],t=function(t){_o(`${bo}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return ni(e,((e,i)=>{if(ei.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return ni(e,(e=>e.pause(...arguments))),this},t.resume=function(){return ni(e,(e=>e.resume(...arguments))),this},t.set=function(t){ni(e,(e=>e.set(t)))},t.start=function(t){const n=[];return ni(e,((e,r)=>{if(ei.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return ni(e,(e=>e.stop(...arguments))),this},t.update=function(t){return ni(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return ei.fun(e)?e(n,t):e};return t._getProps=n,t};function Xa(e,t){const n=ei.fun(e),[[r],i]=function(e,t,n){const r=ei.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?Ga():void 0),[]),o=c(0),a=Fo(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=Ra(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Ha(e,t):new Promise((r=>{Va(e,n),s.queue.push((()=>{r(Ha(e,t))})),a()}))}})),[]),l=c([...s.ctrls]),u=[],p=Do(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=l.current[i]||(l.current[i]=new Ca(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=Ma(n))}}h((()=>{ni(l.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),l.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=l.current.map(((e,t)=>Ra(e,u[t]))),m=d(Ua),y=Do(m),b=m!==y&&function(e){for(const t in e)return!0;return!1}(m);$o((()=>{o.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],ni(e,(e=>e()))),ni(l.current,((e,t)=>{null==i||i.add(e),b&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Oo((()=>()=>{ni(s.ctrls,(e=>e.stop(!0)))}));const v=g.map((e=>qo({},e)));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Ja;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ja||(Ja={}));class es extends wa{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Ri(...t);const n=this._get(),r=No(n);Mo(this,r.create(n))}advance(e){const t=this._get();ti(t,this.get())||(Po(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ns(this._active)&&rs(this)}_get(){const e=ei.arr(this.source)?this.source.map(Ji):ii(Ji(this.source));return this.calc(...e)}_start(){this.idle&&!ns(this._active)&&(this.idle=!1,ni(jo(this),(e=>{e.done=!1})),pi.skipAnimation?(Er.batchedUpdates((()=>this.advance())),rs(this)):bi.start(this))}_attach(){let e=1;ni(ii(this.source),(t=>{Xi(t)&&io(t,this),ba(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){ni(ii(this.source),(e=>{Xi(e)&&oo(e,this)})),this._active.clear(),rs(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ii(this.source).reduce(((e,t)=>Math.max(e,(ba(t)?t.priority:0)+1)),0))}}function ts(e){return!1!==e.idle}function ns(e){return!e.size||Array.from(e).every(ts)}function rs(e){e.idle||(e.idle=!0,ni(jo(e),(e=>{e.done=!0})),to(e,{type:"idle",parent:e}))}function is(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}pi.assign({createStringInterpolator:yo,to:(e,t)=>new es(e,t)});const os=["style","children","scrollTop","scrollLeft","viewBox"],as=/^--/;function ss(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||as.test(e)||ls.hasOwnProperty(e)&&ls[e]?(""+t).trim():t+"px"}const cs={};let ls={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const us=["Webkit","Ms","Moz","O"];ls=Object.keys(ls).reduce(((e,t)=>(us.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ls);const ds=["x","y","z"],hs=/^(matrix|translate|scale|rotate|skew)/,ps=/^(translate)/,fs=/^(rotate|skew)/,gs=(e,t)=>ei.num(e)&&0!==e?e+t:e,ms=(e,t)=>ei.arr(e)?e.every((e=>ms(e,t))):ei.num(e)?e===t:parseFloat(e)===t;class ys extends To{constructor(e){let{x:t,y:n,z:r}=e,i=is(e,ds);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>gs(e,"px"))).join(",")})`,ms(e,0)]))),ri(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(hs.test(t)){if(delete i[t],ei.und(e))return;const n=ps.test(t)?"px":fs.test(t)?"deg":"";o.push(ii(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${gs(i,n)})`,ms(i,0)]:e=>[`${t}(${e.map((e=>gs(e,n))).join(",")})`,ms(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new bs(o,a)),super(i)}}class bs extends no{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ni(this.inputs,((n,r)=>{const i=Ji(n[0]),[o,a]=this.transforms[r](ei.arr(i)?i:n.map(Ji));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&ni(this.inputs,(e=>ni(e,(e=>Xi(e)&&io(e,this)))))}observerRemoved(e){0==e&&ni(this.inputs,(e=>ni(e,(e=>Xi(e)&&oo(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),to(this,e)}}const vs=["scrollTop","scrollLeft"];pi.assign({batchedUpdates:p,createStringInterpolator:yo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const ws=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new To(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Yo(e)||"Anonymous";return(e=ei.str(e)?o[e]||(o[e]=Vo(e,i)):e[Wo]||(e[Wo]=Vo(e,i))).displayName=`Animated(${t})`,e};return ri(e,((t,n)=>{ei.arr(e)&&(n=Yo(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:c}=r,l=is(r,os),u=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:cs[t]||(cs[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=ss(t,i[t]);as.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==c&&e.setAttribute("viewBox",c)},createAnimatedStyle:e=>new ys(e),getComponentProps:e=>is(e,vs)}),_s=ws.animated,Ss=(e,t,n)=>t?zr(n,t)||zr(e,t):n||e,$s=(e,t)=>{const n=t||e.defaultValue;return zr(e.collections,n)};var xs;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xs||(xs={}));const Fs={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Os=e=>t=>{const n=t.theme,r=$s(Fs,n[xs.colorScheme]);return n.options&&n.options.color?Ss(r,e,n.options.color):Ss(r,e)},ks={Brand:{1:Os("Brand.1"),2:Os("Brand.2"),3:Os("Brand.3"),4:Os("Brand.4"),5:Os("Brand.5"),6:Os("Brand.6")},Primary:Os("Primary"),PrimaryDark:Os("PrimaryDark"),Secondary:Os("Secondary"),Accent:{Light:{1:Os("Accent.Light.1"),2:Os("Accent.Light.2"),3:Os("Accent.Light.3"),4:Os("Accent.Light.4"),5:Os("Accent.Light.5"),6:Os("Accent.Light.6")},Dark:{1:Os("Accent.Dark.1"),2:Os("Accent.Dark.2"),3:Os("Accent.Dark.3")}},Neutral:{1:Os("Neutral.1"),2:Os("Neutral.2"),3:Os("Neutral.3"),4:Os("Neutral.4"),5:Os("Neutral.5"),6:Os("Neutral.6"),7:Os("Neutral.7"),8:Os("Neutral.8")},Validation:{Green:{Text:Os("Validation.Green.Text"),Icon:Os("Validation.Green.Icon"),Border:Os("Validation.Green.Border"),Background:Os("Validation.Green.Background")},Orange:{Text:Os("Validation.Orange.Text"),Icon:Os("Validation.Orange.Icon"),Border:Os("Validation.Orange.Border"),Background:Os("Validation.Orange.Background"),Badge:Os("Validation.Orange.Badge")},Red:{Text:Os("Validation.Red.Text"),Icon:Os("Validation.Red.Icon"),Border:Os("Validation.Red.Border"),Background:Os("Validation.Red.Background")},Blue:{Text:Os("Validation.Blue.Text"),Icon:Os("Validation.Blue.Icon"),Border:Os("Validation.Blue.Border"),Background:Os("Validation.Blue.Background")}},Shadow:{Accent:Os("Shadow.Accent"),Red:Os("Shadow.Red"),Elevation:Os("Shadow.Elevation")}},Ds={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Bs=e=>Object.keys(Ds).reduce(((t,n)=>{const r=Ds[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Ps=Bs("max-width"),Ms=(Bs("min-width"),f.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),js=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,As=f.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||ks.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${js} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,zs=f(As)`
    animation-delay: -0.45s;
`,Is=f(As)`
    animation-delay: -0.3s;
`,Es=f(As)`
    animation-delay: -0.15s;
`,Ts={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Cs={collections:{base:{D1:{fontFamily:Ts.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ts.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ts.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ts.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ts.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ts.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ts.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ts.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ts.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ts.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ts.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ts.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ts.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ts.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Hs=e=>t=>{const n=t.theme,r=$s(Cs,n[xs.textStyleScheme]);return n.options&&n.options.textStyle?Ss(r,e,n.options.textStyle):Ss(r,e)},Ns={D1:{fontFamily:Hs("D1.fontFamily"),fontSize:Hs("D1.fontSize"),fontWeight:Hs("D1.fontWeight"),lineHeight:Hs("D1.lineHeight"),letterSpacing:Hs("D1.letterSpacing")},D2:{fontFamily:Hs("D2.fontFamily"),fontSize:Hs("D2.fontSize"),fontWeight:Hs("D2.fontWeight"),lineHeight:Hs("D2.lineHeight"),letterSpacing:Hs("D2.letterSpacing")},D3:{fontFamily:Hs("D3.fontFamily"),fontSize:Hs("D3.fontSize"),fontWeight:Hs("D3.fontWeight"),lineHeight:Hs("D3.lineHeight"),letterSpacing:Hs("D3.letterSpacing")},D4:{fontFamily:Hs("D4.fontFamily"),fontSize:Hs("D4.fontSize"),fontWeight:Hs("D4.fontWeight"),lineHeight:Hs("D4.lineHeight"),letterSpacing:Hs("D4.letterSpacing")},DBody:{fontFamily:Hs("DBody.fontFamily"),fontSize:Hs("DBody.fontSize"),fontWeight:Hs("DBody.fontWeight"),lineHeight:Hs("DBody.lineHeight"),letterSpacing:Hs("DBody.letterSpacing")},H1:{fontFamily:Hs("H1.fontFamily"),fontSize:Hs("H1.fontSize"),fontWeight:Hs("H1.fontWeight"),lineHeight:Hs("H1.lineHeight"),letterSpacing:Hs("H1.letterSpacing")},H2:{fontFamily:Hs("H2.fontFamily"),fontSize:Hs("H2.fontSize"),fontWeight:Hs("H2.fontWeight"),lineHeight:Hs("H2.lineHeight"),letterSpacing:Hs("H2.letterSpacing")},H3:{fontFamily:Hs("H3.fontFamily"),fontSize:Hs("H3.fontSize"),fontWeight:Hs("H3.fontWeight"),lineHeight:Hs("H3.lineHeight"),letterSpacing:Hs("H3.letterSpacing")},H4:{fontFamily:Hs("H4.fontFamily"),fontSize:Hs("H4.fontSize"),fontWeight:Hs("H4.fontWeight"),lineHeight:Hs("H4.lineHeight"),letterSpacing:Hs("H4.letterSpacing")},H5:{fontFamily:Hs("H5.fontFamily"),fontSize:Hs("H5.fontSize"),fontWeight:Hs("H5.fontWeight"),lineHeight:Hs("H5.lineHeight"),letterSpacing:Hs("H5.letterSpacing")},H6:{fontFamily:Hs("H6.fontFamily"),fontSize:Hs("H6.fontSize"),fontWeight:Hs("H6.fontWeight"),lineHeight:Hs("H6.lineHeight"),letterSpacing:Hs("H6.letterSpacing")},Body:{fontFamily:Hs("Body.fontFamily"),fontSize:Hs("Body.fontSize"),fontWeight:Hs("Body.fontWeight"),lineHeight:Hs("Body.lineHeight"),letterSpacing:Hs("Body.letterSpacing")},BodySmall:{fontFamily:Hs("BodySmall.fontFamily"),fontSize:Hs("BodySmall.fontSize"),fontWeight:Hs("BodySmall.fontWeight"),lineHeight:Hs("BodySmall.lineHeight"),letterSpacing:Hs("BodySmall.letterSpacing")},XSmall:{fontFamily:Hs("XSmall.fontFamily"),fontSize:Hs("XSmall.fontSize"),fontWeight:Hs("XSmall.fontWeight"),lineHeight:Hs("XSmall.lineHeight"),letterSpacing:Hs("XSmall.letterSpacing")}},Rs=e=>{switch(e){case 700:case"bold":return Ts.Bold;case 600:case"semibold":return Ts.Semibold;case 300:case"light":return Ts.Light;case 400:case"regular":return Ts.Regular;default:return""}},Vs=(e,t)=>n=>{var r;const i=Ns[e].fontFamily(n),o=Ns[e].fontWeight(n);return Object.values(Ts).includes(i)?m`
                font-family: ${Rs(t)||Rs(o)||i};
                font-weight: normal !important;
            `:m`
            font-family: ${i};
            font-weight: ${null!==(r=Ls(t)||o)&&void 0!==r?r:"normal"};
        `},Ls=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ws=(e,t,n=!1)=>r=>{const i=Ns[e],o=i.fontSize(r);return m`
            ${Vs(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${m`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ys=(e=!1,t=!1)=>t?m`
            display: block;
        `:e?m`
            display: inline;
        `:m`
            display: block;
        `;var qs;!function(e){e.D1=f.h1`
        ${e=>m`
                ${Ws("D1",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.D2=f.h1`
        ${e=>m`
                ${Ws("D2",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.D3=f.h1`
        ${e=>m`
                ${Ws("D3",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.D4=f.h1`
        ${e=>m`
                ${Ws("D4",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.DBody=f.h1`
        ${e=>m`
                ${Ws("DBody",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.H1=f.h1`
        ${e=>m`
                ${Ws("H1",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.H2=f.h2`
        ${e=>m`
                ${Ws("H2",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.H3=f.h3`
        ${e=>m`
                ${Ws("H3",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.H4=f.h4`
        ${e=>m`
                ${Ws("H4",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.H5=f.h5`
        ${e=>m`
                ${Ws("H5",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.H6=f.h6`
        ${e=>m`
                ${Ws("H6",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.Body=f.p`
        ${e=>m`
                ${Ws("Body",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=f.p`
        ${e=>m`
                ${Ws("BodySmall",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.XSmall=f.span`
        ${e=>m`
                ${Ws("XSmall",e.weight,e.paragraph)}
                color: ${ks.Neutral[1]};
                ${Ys(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Zs(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Zs(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(qs||(qs={}));const Us=f.a`
    ${e=>m`
            ${Ws(e.textStyle,e.weight)}
            color: ${ks.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ks.Secondary};

                svg {
                    color: ${ks.Secondary};
                }
            }
        `}
`,Qs=f(y)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Zs=n=>{var{external:r=!1,children:i}=n,o=$(n,["external","children"]);return e(Us,Object.assign({},o,{children:[i,r&&t(Qs,{})]}))};var Ks;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ks||(Ks={})),f.button`
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
                    background-color: ${ks.Neutral[8](e)};
                    border: 1px solid ${ks.Primary(e)};

                    span {
                        color: ${ks.Primary(e)};
                    }
                `;case"light":return m`
                    background-color: ${ks.Neutral[8](e)};
                    border: 1px solid ${ks.Neutral[5](e)};

                    span {
                        color: ${ks.Primary(e)};
                    }
                `;case"disabled":return m`
                    background-color: ${ks.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${ks.Neutral[3](e)};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ks.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${ks.Secondary};
                        }
                    }
                `;default:return m`
                    background-color: ${ks.Primary(e)};
                    border: 1px solid transparent;

                    ${Ps.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${ks.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?m`
                    height: 2.5rem;
                    span {
                        ${Ws("H5","semibold")}
                    }

                    ${Ps.mobileS} {
                        height: auto;
                    }
                `:m`
                    height: 3rem;
                    span {
                        ${Ws("H4","semibold")}
                    }

                    ${Ps.mobileS} {
                        height: auto;
                    }
                `}
`;const Gs=f((({color:n,className:r,size:i=18})=>e(Ms,Object.assign({className:r,$size:i,$color:n},{children:[t(As,{id:"inner1",$size:i-2,$borderWidth:2}),t(zs,{id:"inner2",$size:i-2,$borderWidth:2}),t(Is,{id:"inner3",$size:i-2,$borderWidth:2}),t(Es,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=ks.Primary(e);break;case"disabled":t=ks.Neutral[3](e);break;default:t=ks.Neutral[8](e)}return m`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Xs=(e,t,n="window",r)=>{const i=c();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])};var Js={exports:{}};Js.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],l=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=l("months"),n=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=d[l],h=u&&u[0],p=u&&u[1];a[c]=p?{regex:h,parser:p}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,c=i.parser,l=e.slice(r),u=o.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,f=a||(i||o?1:p.getDate()),g=i||p.getFullYear(),m=0;i&&!o||(m=o>0?o-1:p.getMonth());var y=s||0,b=c||0,v=l||0,w=u||0;return d?new Date(Date.UTC(g,m,f,y,b,v,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,f,y,b,v,w)):new Date(g,m,f,y,b,v,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var p=s.length,f=1;f<=p;f+=1){a[1]=s[f-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}f===p&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ec,tc,nc=Js.exports,rc={exports:{}},ic=rc.exports=(ec={year:0,month:1,day:2,hour:3,minute:4,second:5},tc={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=tc[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),tc[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],c=s.type,l=s.value,u=ec[c];u>=0&&(o[u]=parseInt(l,10))}var d=o[3],h=24===d?0:d,p=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",f=+e;return(n.utc(p).valueOf()-(f-=f%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),c=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var l=c.utcOffset();c=c.add(i-l,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,c=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),c,s),u=l[0],d=l[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),oc={exports:{}};oc.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),o=n-i<0,a=t.clone().add(r+(o?-1:1),l);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",w={};w[v]=m;var _=function(e){return e instanceof F},S=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},$=function(e,t){if(_(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},x=b;x.l=S,x.i=_,x.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return $(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<$(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),p=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},f=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,m):p(0,m+1);case c:var v=this.$locale().weekStart||0,w=(g<v?g+7:g)-v;return p(r?y-w:y+(6-w),m);case s:case h:return f(b+"Hours",0);case a:return f(b+"Minutes",1);case o:return f(b+"Seconds",2);case i:return f(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=x.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],f=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var g=this.clone().set(h,1);g.$d[p](f),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,u){var h,p=this;r=Number(r);var f=x.p(u),g=function(e){var t=$(p);return x.w(t.date(t.date()+Math.round(e*r)),p)};if(f===l)return this.set(l,this.$M+r);if(f===d)return this.set(d,this.$y+r);if(f===s)return g(1);if(f===c)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[f]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,a=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return x.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:x.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||f[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,p){var f,g=x.p(h),m=$(r),y=(m.utcOffset()-this.utcOffset())*t,b=this-m,v=x.m(this,m);return v=(f={},f[d]=v/12,f[l]=v,f[u]=v/3,f[c]=(b-y)/6048e5,f[s]=(b-y)/864e5,f[a]=b/n,f[o]=b/t,f[i]=b/e,f)[g]||b,p?v:x.a(v)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),O=F.prototype;return $.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,F,$),e.$i=!0),$},$.locale=S,$.isDayjs=_,$.unix=function(e){return $(1e3*e)},$.en=w[v],$.Ls=w,$.p={},$}();var ac=oc.exports,sc={exports:{}};sc.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var cc=sc.exports,lc={exports:{}};lc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var uc=lc.exports,dc={exports:{}};dc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var hc,pc=dc.exports;ac.extend(cc),ac.extend(uc),ac.extend(pc),ac.extend(nc),ac.extend(ic),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=ac(t).startOf("week");return fc(n).map((e=>gc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return gc(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(ac(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ac(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ac(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(hc||(hc={}));const fc=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},gc=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},mc=[1,3,5,7,8,10,12],yc=[4,6,9,11];var bc,vc,wc;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":mc.includes(o)?Math.min(i,31).toString():yc.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=ac(e,n);return ac(t,n).diff(r,"minute")}}(bc||(bc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(vc||(vc={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(wc||(wc={}));const _c=f.button`
    align-items: center;
    background-color: ${ks.Primary};
    border-radius: 0.25rem;
    color: ${ks.Neutral[8]};
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
                    background-color: ${ks.Neutral[8]};
                    border: 1px solid ${ks.Primary};
                    color: ${ks.Primary};
                `;case"light":return m`
                    background-color: ${ks.Neutral[8]};
                    border: 1px solid ${ks.Neutral[5]};
                    color: ${ks.Primary};
                `;default:return m`
                    background-color: ${ks.Primary};
                    border: none;
                    color: ${ks.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${ks.Neutral[6]};
        border: 1px solid ${ks.Neutral[6]};
        color: ${ks.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,Sc=i.forwardRef(((e,n)=>{var{"data-testid":r,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=e,c=$(e,["data-testid","styleType","children","sizeType","type"]);return t(_c,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:i},c,{children:o}))})),$c=f.div`
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    min-height: 2.625rem;
`,xc=f.button`
    width: 100%;
    border: none;
    cursor: pointer;
    background: transparent;
    text-align: left;
    padding: 0.5rem;
    min-height: 2.625rem;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${ks.Accent.Light[3]};
    }

    :hover {
        background-color: ${ks.Accent.Light[5]};
    }

    ${e=>{if(e.$level_3)return m`
                margin-left: 0.5rem;
                width: calc(100% - 0.5rem);
            `}}

    ${e=>{if(e.$selected)return m`
                background: ${ks.Accent.Light[5]};
            `}}
`,Fc=f.div`
    ${Ws("Body","regular")}
    overflow: hidden;

    ${e=>{if("middle"!==e.$truncateType)return m`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,Oc=f.span`
    ${Ws("Body","semibold")}
`,kc=f.div`
    display: flex;
    flex-direction: column;
`,Dc=f.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Bc=f.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Pc=f(Sc)`
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
`,Mc=f(b)`
    color: ${ks.Primary};
`,jc=f.button`
    ${Ws("H4","semibold")}
    color: ${ks.Neutral[1]};
    text-align: left;
    line-height: 1.625rem;
    margin-left: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    overflow-wrap: anywhere;

    span {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`,Ac=f.ul`
    display: ${e=>e.$expanded?"flex":"none"};
    flex-direction: column;
    cursor: pointer;
    margin-left: 2.125rem;
`,zc=({item:r,selectedKeyPath:i,selectableCategory:o,searchValue:a,itemTruncationType:s,visible:l,onBlur:u,onExpand:d,onRef:h,onSelect:p})=>{const f=c(),g=e=>{e.preventDefault(),d(r.keyPath)},m=e=>{e.preventDefault(),p(r)},y=()=>{u&&u()},b=e=>{const t=e.label;let n=0;return f&&f.current&&(n=f.current.getBoundingClientRect().width),wc.shouldTruncateToTwoLines(t,n)},v=n=>e(kc,Object.assign({"data-testid":"truncate-middle-container"},{children:[t(Dc,{children:w(n)}),t(Bc,{children:w(n)})]})),w=r=>{if(!r.isSearchTerm)return t(n,{children:r.label});const i=r.label,o=a.toLowerCase().trim(),s=i.toLowerCase().indexOf(o),c=s+o.length;return-1==s?t(n,{children:r.label}):e(n,{children:[`${i.slice(0,s)}`,t(Oc,{children:i.slice(s,c)}),`${i.slice(c)}`]})};return r.subItems?e("li",{children:[e($c,o?{children:[t(Pc,Object.assign({ref:e=>h(e,r.keyPath),onClick:g,$expanded:r.expanded,"aria-expanded":r.expanded},{children:t(Mc,{})})),t(jc,Object.assign({onClick:m},{children:t("span",{children:r.label})}))]}:Object.assign({onClick:g},{children:[t(Pc,Object.assign({ref:e=>h(e,r.keyPath),$expanded:r.expanded,"aria-expanded":r.expanded},{children:t(Mc,{})})),t(jc,Object.assign({tabIndex:-1},{children:t("span",{children:r.label})}))]})),(()=>{const e=r.subItems.values();return t(Ac,Object.assign({$expanded:r.expanded},{children:[...e].map((e=>t(zc,{item:e,selectedKeyPath:i,selectableCategory:o,searchValue:a,itemTruncationType:s,visible:l,onBlur:u,onExpand:d,onRef:h,onSelect:p},e.keyPath.join("-"))))}))})()]}):t("li",Object.assign({ref:f},{children:t(xc,Object.assign({ref:e=>h(e,r.keyPath),type:"button",tabIndex:l?0:-1,$selected:(_=r.keyPath,JSON.stringify(i)===JSON.stringify(_)),$level_3:3===r.keyPath.length,onBlur:y,onClick:m},{children:t(Fc,Object.assign({$truncateType:s},{children:"middle"===s&&b(r)?v(r):w(r)}))}))}));var _},Ic=f.button`
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
                background-color: ${ks.Neutral[7]};
            `}
    }
`,Ec=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=$(e,["children","focusHighlight","focusOutline","type"]);return t(Ic,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Tc={collections:{base:{InputBoxShadow:m`
        inset 0 0 6px 1px ${ks.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${ks.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ks.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:m`
        inset 0 0 6px 1px ${ks.Shadow.Accent}
    `,InputErrorBoxShadow:m`
        inset 0 0 6px 1px ${ks.Shadow.Red}
    `,ElevationBoxShadow:m`
      0px 2px 8px ${ks.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Cc=e=>t=>{var n;const r=t.theme,i=$s(Tc,r[xs.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ss(i,e,r.options.designToken):Ss(i,e)},Hc=Cc("InputBoxShadow"),Nc=Cc("InputErrorBoxShadow");Cc("ElevationBoxShadow"),Cc("Table.Header"),Cc("Table.Cell.Primary"),Cc("Table.Cell.Secondary"),Cc("Table.Cell.Selected"),Cc("Table.Cell.Hover");f.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${ks.Neutral[5]};
    border-radius: 4px;
    background: ${ks.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${ks.Accent.Light[1]};
        box-shadow: ${Hc};
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
                background: ${ks.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${ks.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?m`
                border: 1px solid ${ks.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${ks.Validation.Red.Border};
                    box-shadow: ${Nc};
                }
            `:void 0}
`;const Rc=f.input`
    ${Ws("Body","regular")}
    color: ${ks.Neutral[1]};
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
        color: ${ks.Neutral[3]};
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
`,Vc=f.li`
    background: ${ks.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Lc=f(Rc)`
    height: 3rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Wc=f(w)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${ks.Neutral[3]};
`,Yc=f(Ec)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${ks.Neutral[3]};
    cursor: pointer;
`,qc=f(v)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${ks.Neutral[3]};
`,Uc=l(((n,r)=>{const{onClear:i}=n,o=$(n,["onClear"]);return e(Vc,{children:[t(Wc,{}),t(Lc,Object.assign({ref:r},o)),o.value&&t(Yc,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:i},{children:t(qc,{})}))]},"search")})),Qc=f(_s.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,Zc=f.ul`
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
        background: ${ks.Neutral[4]};
        border-right: 5px solid ${ks.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${Ps.mobileL} {
        max-height: 15rem;
    }
`,Kc=f.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,Gc=f(qs.Body)``,Xc=f(_)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${ks.Validation.Red.Icon};
`,Jc=f.button`
    ${Ws("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ks.Primary(e)};\n\t\t`}
`;var el;!function(e){e.getInitialDropdown=(t,n)=>{let r=n;r&&r.length||(r=tl(t),r=r.slice(0,-1));return hn(t,(t=>{const n=[];r.forEach((r=>{n.push(r);e.getItemAtKeyPath(t,n).expanded=!0}))}))},e.getVisibleKeyPaths=e=>{const t=[],n=e=>{if(e&&e.size)for(const r of e.values())t.push(r.keyPath),r.expanded&&n(r.subItems)};return n(e),t},e.getItemAtKeyPath=(e,t)=>t.reduce(((t,n)=>t?t.subItems.get(n):e.get(n)),null)}(el||(el={}));const tl=e=>{for(const t of e.values())if(t.subItems&&t.subItems.size)return tl(t.subItems);return e.values().next().value.keyPath};!function(){class e extends Map{constructor(e,t){super(),this[xt]={type_:2,parent_:t,scope_:t?t.scope_:qt(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:e,draft_:this,isManual_:!1,revoked_:!1}}get size(){return Ct(this[xt]).size}has(e){return Ct(this[xt]).has(e)}set(e,n){const r=this[xt];return i(r),Ct(r).has(e)&&Ct(r).get(e)===n||(t(r),sn(r),r.assigned_.set(e,!0),r.copy_.set(e,n),r.assigned_.set(e,!0)),this}delete(e){if(!this.has(e))return!1;const n=this[xt];return i(n),t(n),sn(n),n.base_.has(e)?n.assigned_.set(e,!1):n.assigned_.delete(e),n.copy_.delete(e),!0}clear(){const e=this[xt];i(e),Ct(e).size&&(t(e),sn(e),e.assigned_=new Map,jt(e.base_,(t=>{e.assigned_.set(t,!1)})),e.copy_.clear())}forEach(e,t){Ct(this[xt]).forEach(((n,r,i)=>{e.call(t,this.get(r),r,this)}))}get(e){const n=this[xt];i(n);const r=Ct(n).get(e);if(n.finalized_||!Bt(r))return r;if(r!==n.base_.get(e))return r;const o=ln(r,n);return t(n),n.copy_.set(e,o),o}keys(){return Ct(this[xt]).keys()}values(){const e=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const t=e.next();if(t.done)return t;return{done:!1,value:this.get(t.value)}}}}entries(){const e=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const n=this.get(t.value);return{done:!1,value:[t.value,n]}}}}[Symbol.iterator](){return this.entries()}}function t(e){e.copy_||(e.assigned_=new Map,e.copy_=new Map(e.base_))}class n extends Set{constructor(e,t){super(),this[xt]={type_:3,parent_:t,scope_:t?t.scope_:qt(),modified_:!1,finalized_:!1,copy_:void 0,base_:e,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return Ct(this[xt]).size}has(e){const t=this[xt];return i(t),t.copy_?!!t.copy_.has(e)||!(!t.drafts_.has(e)||!t.copy_.has(t.drafts_.get(e))):t.base_.has(e)}add(e){const t=this[xt];return i(t),this.has(e)||(r(t),sn(t),t.copy_.add(e)),this}delete(e){if(!this.has(e))return!1;const t=this[xt];return i(t),r(t),sn(t),t.copy_.delete(e)||!!t.drafts_.has(e)&&t.copy_.delete(t.drafts_.get(e))}clear(){const e=this[xt];i(e),Ct(e).size&&(r(e),sn(e),e.copy_.clear())}values(){const e=this[xt];return i(e),r(e),e.copy_.values()}entries(){const e=this[xt];return i(e),r(e),e.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(e,t){const n=this.values();let r=n.next();for(;!r.done;)e.call(t,r.value,r.value,this),r=n.next()}}function r(e){e.copy_||(e.copy_=new Set,e.base_.forEach((t=>{if(Bt(t)){const n=ln(t,e);e.drafts_.set(t,n),e.copy_.add(n)}else e.copy_.add(t)})))}function i(e){e.revoked_&&Ot(3,JSON.stringify(Ct(e)))}var o,a;a={proxyMap_:function(t,n){return new e(t,n)},proxySet_:function(e,t){return new n(e,t)}},Wt[o="MapSet"]||(Wt[o]=a)}();const nl=r=>{var{listItems:i,listStyleWidth:a,hideNoResultsDisplay:l,enableSearch:u,searchPlaceholder:d="Search",visible:p,mode:f="default",selectedKeyPath:g,selectableCategory:m,itemsLoadState:y="success",itemTruncationType:b="end",onBlur:v,onDismiss:w,onRetry:_,onSearch:S,onSelectItem:x}=r,F=$(r,["listItems","listStyleWidth","hideNoResultsDisplay","enableSearch","searchPlaceholder","visible","mode","selectedKeyPath","selectableCategory","itemsLoadState","itemTruncationType","onBlur","onDismiss","onRetry","onSearch","onSelectItem"]);const O=h((()=>{if(!i||!i.length)return new Map([]);const e=(t,n)=>t.reduce(((t,r)=>{const{key:i,label:o,value:a,subItems:s}=r,c=i.toString(),l=[...n,c],u={label:o,value:a,expanded:"expand"===f,selected:!1,isSearchTerm:!1,keyPath:l,subItems:s?e(s,l):void 0};return t.set(c,u),t}),new Map);return e(i,[])}),[i]),[k,D]=s(""),[B,P]=s(0),[M,j]=s(!1),[A,z]=s(O),[I,E]=s(O),[T,C]=s(0),[H,N]=s([]),R=Xa({height:B}),V=c(),L=c(),W=c({}),Y=c();o((()=>{if(p){const e=ne(),t=el.getVisibleKeyPaths(e);if(z(e),N(t),Y.current)Y.current.focus();else if(W.current){const e=t[T];W.current[e[0]].ref.focus()}setTimeout((()=>{P(ee())}))}else W.current={},C(0),P(0),D(""),z(O)}),[p]),o((()=>{if(p){const e=ee();P(e)}}),[A,I]),o((()=>{ie(k)}),[k]),Xs("keydown",(function(e){if(V.current&&V.current.contains(e.target))switch(e.code){case"ArrowDown":if(T+1>=H.length)return;Z("down");break;case"ArrowUp":if(T-1<0)return void(u&&Y.current.focus());Z("up");break;case"Escape":w&&w(!0)}}),"document");const q=e=>{x(e)},U=e=>{const t=hn(M?I:A,(t=>{const n=el.getItemAtKeyPath(t,e);n.expanded=!n.expanded})),n=el.getVisibleKeyPaths(t);N(n),M?E(t):z(t)},Q=(e,t,n=W.current)=>{const[r,...i]=t;n[r]||(n[r]={ref:void 0,subItems:{}}),i.length?Q(e,i,n[r].subItems):n[r].ref=e},Z=e=>{const t="down"===e?T+1:T-1;C(t);const n=H[t];zr(W.current,n.join(".subItems.")).ref.focus()},K=e=>{const t=e.target.value;D(t),S&&S()},G=()=>{D(""),Y.current.focus(),S&&S()};const X=()=>{},J=()=>{_&&_()},ee=()=>L&&L.current?L.current.getBoundingClientRect().height:0,te=()=>{const e=(t,n)=>{const r=k.toLowerCase().trim(),i=-1!=t.label.toLowerCase().indexOf(r),o=-1!=O.get(t.keyPath[0]).label.toLowerCase().indexOf(r);if(!t.subItems)return i?Object.assign(Object.assign({},t),{expanded:!1,isSearchTerm:!0}):n||o?Object.assign(Object.assign({},t),{expanded:!1,isSearchTerm:!1}):void 0;const a=new Map;t.subItems.forEach((t=>{const n=e(t,i);if(n){const e=n.keyPath[n.keyPath.length-1];a.set(e,n)}}));let s=!1;for(const e of a.values())if((e.isSearchTerm||e.expanded)&&(s=!0),e.subItems&&0===e.subItems.size){const t=e.keyPath[e.keyPath.length-1];a.delete(t)}return Object.assign(Object.assign({},t),{expanded:s,isSearchTerm:i,subItems:a})},t=new Map;for(const[n,r]of O){const i=e(r);i&&i.subItems&&i.subItems.size&&t.set(n,i)}return t},ne=()=>{if(["expand","collapse"].includes(f))return O;return el.getInitialDropdown(A,g)},re=e=>{const t=el.getVisibleKeyPaths(e);N(t),C(0)},ie=e=>{if(""===e)re(A),E(O),j(!1);else if(e.trim().length>=3){W.current={};const e=!0,t=te();E(t),re(t),j(e)}},oe=()=>{if(!_||_&&"success"===y){const e=M?I:A;return Array.from(e).map((([e,n])=>t(zc,{item:n,selectedKeyPath:g,selectableCategory:m,searchValue:k,itemTruncationType:b,visible:p,onBlur:X,onExpand:U,onRef:Q,onSelect:q},e)))}},ae=()=>{if(M&&!l&&!I.size)return e(Kc,Object.assign({"data-testid":"list-no-results"},{children:[t(Xc,{"data-testid":"no-result-icon"}),t(Gc,{children:"No results found."})]}),"noResults")},se=()=>{if(_&&"loading"===y)return e(Kc,Object.assign({"data-testid":"list-loading"},{children:[t(Gs,{$buttonStyle:"secondary",size:24}),t(Gc,{children:"Loading..."})]}),"loading")},ce=()=>{if(_&&"fail"===y)return e(Kc,Object.assign({"data-testid":"list-fail"},{children:[t(Xc,{"data-testid":"load-error-icon"}),t(Gc,{children:"Failed to load."}),t(Jc,Object.assign({onClick:J,type:"button"},{children:"Try again."}))]}),"noResults")};return t(n,{children:t(Qc,Object.assign({style:R,"data-testid":p?"dropdown-container":"dropdown-container-hidden",ref:V},{children:(()=>{if(p)return e(Zc,Object.assign({ref:L,"data-testid":"dropdown-list",width:a,role:"list"},F,{children:[u&&"success"===y?t(Uc,{ref:Y,onChange:K,value:k,placeholder:d,"data-testid":"search-input","aria-label":"Type to search",tabIndex:p?0:-1,onClear:G}):null,se(),ae(),ce(),oe()]}))})()}))})},rl="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",il=f.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`,ol=m`
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
        outline: 2px solid ${ks.Accent.Light[3]};
    }
`,al=f.button`
    ${ol}
    cursor: pointer;
`;f.div`
    ${ol}
`;const sl=g`
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
`,cl=f.div`
    position: relative;
    border: 1px solid ${ks.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ks.Neutral[8]};

    :focus-within {
        border: 1px solid ${ks.Accent.Light[1]};
        box-shadow: ${Hc};
    }

    ${e=>e.expanded?m`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:m`
                animation: ${sl} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?m`
                background: ${ks.Neutral[6](e)};

                ${al} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ks.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?m`
                border: none;
                background: transparent !important;

                ${al} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?m`
                border: 1px solid ${ks.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ks.Validation.Red.Border(e)};
                    box-shadow: ${Nc};
                }
            `:void 0}
`,ll=f.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${rl};
    margin-left: 1rem;
`,ul=f(S)`
    color: ${ks.Neutral[3]};
    height: ${Ns.Body.fontSize}rem;
    width: ${Ns.Body.fontSize}rem;
`,dl=f.div`
    height: 1px;
    background: ${ks.Neutral[5]};
    margin: 0 0.5rem;
`,hl=f.div`
    display: flex;
    flex: 1;
`,pl=f(qs.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return m`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,fl=f(pl)`
    color: ${ks.Neutral[3]};
`,gl=({children:e,show:n,error:r,disabled:i,testId:o,onBlur:a,readOnly:s})=>{const l=c();return Xs("mousedown",(function(e){if(!i){if(l&&l.current.contains(e.target))return;n&&a()}}),"document"),t(il,{children:t(cl,Object.assign({ref:l,error:r&&!n,disabled:i,$readOnly:s,expanded:n,"data-testid":o},{children:e}))})},ml=r=>{var{placeholder:i="Select",options:a,disabled:l,error:u,className:d,"data-testid":h,id:p,selectedKeyPath:f,mode:g,valueToStringFunction:m,enableSearch:y,searchPlaceholder:b,selectableCategory:v,hideNoResultsDisplay:w,listStyleWidth:_,readOnly:S,onSearch:x,onSelectOption:F,onShowOptions:O,onHideOptions:k,onRetry:D,optionsLoadState:B="success",optionTruncationType:P="end"}=r,M=$(r,["placeholder","options","disabled","error","className","data-testid","id","selectedKeyPath","mode","valueToStringFunction","enableSearch","searchPlaceholder","selectableCategory","hideNoResultsDisplay","listStyleWidth","readOnly","onSearch","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType"]);const[j,A]=s(f||[]),[z,I]=s(),[E,T]=s(!1),C=c(),H=c();o((()=>{const e=f||[];A(e),L(a,e)}),[f,a]);const N=e=>{const{keyPath:t,value:n,label:r}=e;A(t),I({label:r,value:n}),T(!1),Y(!1),C.current&&C.current.focus(),F&&F(t,n)},R=e=>{E&&(T(!1),Y(!1)),e&&C.current&&C.current.focus()},V=()=>{const{label:e,value:t}=z;return m?m(t)||t.toString():e},L=(e,t)=>{const n=(e,t)=>{const[r,...i]=t;if(_t(e)||!r)return;const o=e.find((e=>e.key===r));return o&&i.length?n(o.subItems,i):o},r=n(e,t);if(r){const{label:e,value:t}=r;I({label:e,value:t})}else I(void 0)},W=e=>{if("middle"===P){let t=0;return H&&H.current&&(t=H.current.getBoundingClientRect().width),wc.truncateOneLine(e,t,120,6)}return e},Y=e=>{!e&&k&&k(),e&&O&&O()};return e(gl,Object.assign({className:d,show:E,error:u&&!E,disabled:l,readOnly:S,testId:h,onBlur:()=>{T(!1),Y(!1)}},{children:[t(al,Object.assign({ref:C,type:"button","data-testid":p||"selector",disabled:l,onClick:e=>{e.preventDefault(),l||S||(T(!E),Y(!E))}},M,{children:e(n,{children:[t(hl,Object.assign({ref:H},{children:_t(z)?t(fl,Object.assign({truncateType:P},{children:i})):t(pl,Object.assign({truncateType:P},{children:W(V())}))})),!S&&t(ll,Object.assign({expanded:E},{children:t(ul,{})}))]})})),E&&t(dl,{}),a&&a.length>0||D?t(nl,{"data-testid":"dropdown-list",listItems:a,listStyleWidth:_,visible:E,mode:g,selectedKeyPath:j,selectableCategory:v,itemsLoadState:B,itemTruncationType:P,enableSearch:y,searchPlaceholder:b,hideNoResultsDisplay:w,onDismiss:R,onSelectItem:N,onSearch:x,onRetry:D}):null]}))};export{ml as InputNestedSelect};
//# sourceMappingURL=index.js.map
