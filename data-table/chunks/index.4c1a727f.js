import{jsx as e,jsxs as r,Fragment as s}from"react/jsx-runtime";import{SquareIcon as t,SquareFillIcon as i,SquareTickFillIcon as n,MinusSquareFillIcon as o,ArrowUpIcon as a,ArrowDownIcon as l}from"@lifesg/react-icons";import*as d from"react";import g,{useRef as c,useState as m,isValidElement as h,createRef as u,cloneElement as b,PureComponent as p,useEffect as y,useLayoutEffect as f,lazy as v,Suspense as x,useCallback as w}from"react";import{findDOMNode as F}from"react-dom";import $,{css as E,useTheme as C,keyframes as B}from"styled-components";import{ExternalIcon as D}from"@lifesg/react-icons/external";function k(e,r){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(s[t[i]]=e[t[i]])}return s}function A(e,r,s,t){return new(s||(s=Promise))((function(i,n){function o(e){try{l(t.next(e))}catch(e){n(e)}}function a(e){try{l(t.throw(e))}catch(e){n(e)}}function l(e){var r;e.done?i(e.value):(r=e.value,r instanceof s?r:new s((function(e){e(r)}))).then(o,a)}l((t=t.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var z=new Map,S=new WeakMap,O=0,j=void 0;function _(e){return Object.keys(e).sort().filter((r=>void 0!==e[r])).map((r=>`${r}_${"root"===r?function(e){return e?(S.has(e)||(O+=1,S.set(e,O.toString())),S.get(e)):"0"}(e.root):e[r]}`)).toString()}function T(e,r,s={},t=j){if(void 0===window.IntersectionObserver&&void 0!==t){const i=e.getBoundingClientRect();return r(t,{isIntersecting:t,target:e,intersectionRatio:"number"==typeof s.threshold?s.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:n,elements:o}=function(e){const r=_(e);let s=z.get(r);if(!s){const t=new Map;let i;const n=new IntersectionObserver((r=>{r.forEach((r=>{var s;const n=r.isIntersecting&&i.some((e=>r.intersectionRatio>=e));e.trackVisibility&&void 0===r.isVisible&&(r.isVisible=n),null==(s=t.get(r.target))||s.forEach((e=>{e(n,r)}))}))}),e);i=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:r,observer:n,elements:t},z.set(r,s)}return s}(s),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(r),n.observe(e),function(){a.splice(a.indexOf(r),1),0===a.length&&(o.delete(e),n.unobserve(e)),0===o.size&&(n.disconnect(),z.delete(i))}}var R=function(e,r){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])},R(e,r)};var H=function(){return H=Object.assign||function(e){for(var r,s=1,t=arguments.length;s<t;s++)for(var i in r=arguments[s])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},H.apply(this,arguments)};var M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var L=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},I="object"==typeof M&&M&&M.Object===Object&&M,P="object"==typeof self&&self&&self.Object===Object&&self,V=I||P||Function("return this")(),N=V,W=function(){return N.Date.now()},X=/\s/;var Y=function(e){for(var r=e.length;r--&&X.test(e.charAt(r)););return r},U=/^\s+/;var K=function(e){return e?e.slice(0,Y(e)+1).replace(U,""):e},q=V.Symbol,G=q,Z=Object.prototype,J=Z.hasOwnProperty,Q=Z.toString,ee=G?G.toStringTag:void 0;var re=function(e){var r=J.call(e,ee),s=e[ee];try{e[ee]=void 0;var t=!0}catch(e){}var i=Q.call(e);return t&&(r?e[ee]=s:delete e[ee]),i},se=Object.prototype.toString;var te=re,ie=function(e){return se.call(e)},ne=q?q.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ne&&ne in Object(e)?te(e):ie(e)},ae=function(e){return null!=e&&"object"==typeof e};var le=K,de=L,ge=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==oe(e)},ce=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,he=/^0o[0-7]+$/i,ue=parseInt;var be=L,pe=W,ye=function(e){if("number"==typeof e)return e;if(ge(e))return NaN;if(de(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=de(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=le(e);var s=me.test(e);return s||he.test(e)?ue(e.slice(2),s?2:8):ce.test(e)?NaN:+e},fe=Math.max,ve=Math.min;var xe=function(e,r,s){var t,i,n,o,a,l,d=0,g=!1,c=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var s=t,n=i;return t=i=void 0,d=r,o=e.apply(n,s)}function u(e){var s=e-l;return void 0===l||s>=r||s<0||c&&e-d>=n}function b(){var e=pe();if(u(e))return p(e);a=setTimeout(b,function(e){var s=r-(e-l);return c?ve(s,n-(e-d)):s}(e))}function p(e){return a=void 0,m&&t?h(e):(t=i=void 0,o)}function y(){var e=pe(),s=u(e);if(t=arguments,i=this,l=e,s){if(void 0===a)return function(e){return d=e,a=setTimeout(b,r),g?h(e):o}(l);if(c)return clearTimeout(a),a=setTimeout(b,r),h(l)}return void 0===a&&(a=setTimeout(b,r)),o}return r=ye(r)||0,be(s)&&(g=!!s.leading,n=(c="maxWait"in s)?fe(ye(s.maxWait)||0,r):n,m="trailing"in s?!!s.trailing:m),y.cancel=function(){void 0!==a&&clearTimeout(a),d=0,t=l=i=a=void 0},y.flush=function(){return void 0===a?o:p(pe())},y},we=xe,Fe=L;var $e=function(e,r,s){var t=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fe(s)&&(t="leading"in s?!!s.leading:t,i="trailing"in s?!!s.trailing:i),we(e,r,{leading:t,maxWait:r,trailing:i})},Ee=function(e,r,s,t){switch(r){case"debounce":return xe(e,s,t);case"throttle":return $e(e,s,t);default:return e}},Ce=function(e){return"function"==typeof e},Be=function(){return"undefined"==typeof window},De=function(e){return e instanceof Element||e instanceof HTMLDocument},ke=function(e,r,s,t){return function(i){var n=i.width,o=i.height;r((function(r){return r.width===n&&r.height===o||r.width===n&&!t||r.height===o&&!s?r:(e&&Ce(e)&&e(n,o),{width:n,height:o})}))}};!function(e){function r(r){var s=e.call(this,r)||this;s.cancelHandler=function(){s.resizeHandler&&s.resizeHandler.cancel&&(s.resizeHandler.cancel(),s.resizeHandler=null)},s.attachObserver=function(){var e=s.props,r=e.targetRef,t=e.observerOptions;if(!Be()){r&&r.current&&(s.targetRef.current=r.current);var i=s.getElement();i&&(s.observableElement&&s.observableElement===i||(s.observableElement=i,s.resizeObserver.observe(i,t)))}},s.getElement=function(){var e=s.props,r=e.querySelector,t=e.targetDomEl;if(Be())return null;if(r)return document.querySelector(r);if(t&&De(t))return t;if(s.targetRef&&De(s.targetRef.current))return s.targetRef.current;var i=F(s);if(!i)return null;switch(s.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},s.createResizeHandler=function(e){var r=s.props,t=r.handleWidth,i=void 0===t||t,n=r.handleHeight,o=void 0===n||n,a=r.onResize;if(i||o){var l=ke(a,s.setState.bind(s),i,o);e.forEach((function(e){var r=e&&e.contentRect||{},t=r.width,i=r.height;!s.skipOnMount&&!Be()&&l({width:t,height:i}),s.skipOnMount=!1}))}},s.getRenderType=function(){var e=s.props,r=e.render,t=e.children;return Ce(r)?"renderProp":Ce(t)?"childFunction":h(t)?"child":Array.isArray(t)?"childArray":"parent"};var t=r.skipOnMount,i=r.refreshMode,n=r.refreshRate,o=void 0===n?1e3:n,a=r.refreshOptions;return s.state={width:void 0,height:void 0},s.skipOnMount=t,s.targetRef=u(),s.observableElement=null,Be()||(s.resizeHandler=Ee(s.createResizeHandler,i,o,a),s.resizeObserver=new window.ResizeObserver(s.resizeHandler)),s}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function s(){this.constructor=e}R(e,r),e.prototype=null===r?Object.create(r):(s.prototype=r.prototype,new s)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Be()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,s=r.render,t=r.children,i=r.nodeType,n=void 0===i?"div":i,o=this.state,a={width:o.width,height:o.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return s&&s(a);case"childFunction":return(e=t)(a);case"child":if((e=t).type&&"string"==typeof e.type){var l=function(e,r){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(s[t[i]]=e[t[i]])}return s}(a,["targetRef"]);return b(e,l)}return b(e,a);case"childArray":return(e=t).map((function(e){return!!e&&b(e,a)}));default:return d.createElement(n,null)}}}(p);var Ae=Be()?y:f;var ze="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oe=Array.isArray,je="object"==typeof ze&&ze&&ze.Object===Object&&ze,_e="object"==typeof self&&self&&self.Object===Object&&self,Te=je||_e||Function("return this")(),Re=Te.Symbol,He=Re,Me=Object.prototype,Le=Me.hasOwnProperty,Ie=Me.toString,Pe=He?He.toStringTag:void 0;var Ve=function(e){var r=Le.call(e,Pe),s=e[Pe];try{e[Pe]=void 0;var t=!0}catch(e){}var i=Ie.call(e);return t&&(r?e[Pe]=s:delete e[Pe]),i},Ne=Object.prototype.toString;var We=Ve,Xe=function(e){return Ne.call(e)},Ye=Re?Re.toStringTag:void 0;var Ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ye&&Ye in Object(e)?We(e):Xe(e)};var Ke=Ue,qe=function(e){return null!=e&&"object"==typeof e};var Ge=function(e){return"symbol"==typeof e||qe(e)&&"[object Symbol]"==Ke(e)},Ze=Oe,Je=Ge,Qe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,er=/^\w*$/;var rr=function(e,r){if(Ze(e))return!1;var s=typeof e;return!("number"!=s&&"symbol"!=s&&"boolean"!=s&&null!=e&&!Je(e))||(er.test(e)||!Qe.test(e)||null!=r&&e in Object(r))};var sr=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},tr=Ue,ir=sr;var nr,or=function(e){if(!ir(e))return!1;var r=tr(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ar=Te["__core-js_shared__"],lr=(nr=/[^.]+$/.exec(ar&&ar.keys&&ar.keys.IE_PROTO||""))?"Symbol(src)_1."+nr:"";var dr=function(e){return!!lr&&lr in e},gr=Function.prototype.toString;var cr=or,mr=dr,hr=sr,ur=function(e){if(null!=e){try{return gr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},br=/^\[object .+?Constructor\]$/,pr=Function.prototype,yr=Object.prototype,fr=pr.toString,vr=yr.hasOwnProperty,xr=RegExp("^"+fr.call(vr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var wr=function(e,r){return null==e?void 0:e[r]},Fr=function(e){return!(!hr(e)||mr(e))&&(cr(e)?xr:br).test(ur(e))},$r=wr;var Er=function(e,r){var s=$r(e,r);return Fr(s)?s:void 0},Cr=Er(Object,"create"),Br=Cr;var Dr=function(){this.__data__=Br?Br(null):{},this.size=0};var kr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ar=Cr,zr=Object.prototype.hasOwnProperty;var Sr=function(e){var r=this.__data__;if(Ar){var s=r[e];return"__lodash_hash_undefined__"===s?void 0:s}return zr.call(r,e)?r[e]:void 0},Or=Cr,jr=Object.prototype.hasOwnProperty;var _r=function(e){var r=this.__data__;return Or?void 0!==r[e]:jr.call(r,e)},Tr=Cr;var Rr=function(e,r){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=Tr&&void 0===r?"__lodash_hash_undefined__":r,this},Hr=Dr,Mr=kr,Lr=Sr,Ir=_r,Pr=Rr;function Vr(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var t=e[r];this.set(t[0],t[1])}}Vr.prototype.clear=Hr,Vr.prototype.delete=Mr,Vr.prototype.get=Lr,Vr.prototype.has=Ir,Vr.prototype.set=Pr;var Nr=Vr;var Wr=function(){this.__data__=[],this.size=0};var Xr=function(e,r){return e===r||e!=e&&r!=r};var Yr=function(e,r){for(var s=e.length;s--;)if(Xr(e[s][0],r))return s;return-1},Ur=Yr,Kr=Array.prototype.splice;var qr=function(e){var r=this.__data__,s=Ur(r,e);return!(s<0)&&(s==r.length-1?r.pop():Kr.call(r,s,1),--this.size,!0)},Gr=Yr;var Zr=function(e){var r=this.__data__,s=Gr(r,e);return s<0?void 0:r[s][1]},Jr=Yr;var Qr=function(e){return Jr(this.__data__,e)>-1},es=Yr;var rs=function(e,r){var s=this.__data__,t=es(s,e);return t<0?(++this.size,s.push([e,r])):s[t][1]=r,this},ss=Wr,ts=qr,is=Zr,ns=Qr,os=rs;function as(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var t=e[r];this.set(t[0],t[1])}}as.prototype.clear=ss,as.prototype.delete=ts,as.prototype.get=is,as.prototype.has=ns,as.prototype.set=os;var ls=as,ds=Er(Te,"Map"),gs=Nr,cs=ls,ms=ds;var hs=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var us=function(e,r){var s=e.__data__;return hs(r)?s["string"==typeof r?"string":"hash"]:s.map},bs=us;var ps=function(e){var r=bs(this,e).delete(e);return this.size-=r?1:0,r},ys=us;var fs=function(e){return ys(this,e).get(e)},vs=us;var xs=function(e){return vs(this,e).has(e)},ws=us;var Fs=function(e,r){var s=ws(this,e),t=s.size;return s.set(e,r),this.size+=s.size==t?0:1,this},$s=function(){this.size=0,this.__data__={hash:new gs,map:new(ms||cs),string:new gs}},Es=ps,Cs=fs,Bs=xs,Ds=Fs;function ks(e){var r=-1,s=null==e?0:e.length;for(this.clear();++r<s;){var t=e[r];this.set(t[0],t[1])}}ks.prototype.clear=$s,ks.prototype.delete=Es,ks.prototype.get=Cs,ks.prototype.has=Bs,ks.prototype.set=Ds;var As=ks;function zs(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var s=function(){var t=arguments,i=r?r.apply(this,t):t[0],n=s.cache;if(n.has(i))return n.get(i);var o=e.apply(this,t);return s.cache=n.set(i,o)||n,o};return s.cache=new(zs.Cache||As),s}zs.Cache=As;var Ss=zs;var Os=function(e){var r=Ss(e,(function(e){return 500===s.size&&s.clear(),e})),s=r.cache;return r},js=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_s=/\\(\\)?/g,Ts=Os((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(js,(function(e,s,t,i){r.push(t?i.replace(_s,"$1"):s||e)})),r}));var Rs=function(e,r){for(var s=-1,t=null==e?0:e.length,i=Array(t);++s<t;)i[s]=r(e[s],s,e);return i},Hs=Oe,Ms=Ge,Ls=Re?Re.prototype:void 0,Is=Ls?Ls.toString:void 0;var Ps=function e(r){if("string"==typeof r)return r;if(Hs(r))return Rs(r,e)+"";if(Ms(r))return Is?Is.call(r):"";var s=r+"";return"0"==s&&1/r==-1/0?"-0":s},Vs=Ps;var Ns=Oe,Ws=rr,Xs=Ts,Ys=function(e){return null==e?"":Vs(e)};var Us=Ge;var Ks=function(e,r){return Ns(e)?e:Ws(e,r)?[e]:Xs(Ys(e))},qs=function(e){if("string"==typeof e||Us(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Gs=function(e,r){for(var s=0,t=(r=Ks(r,e)).length;null!=e&&s<t;)e=e[qs(r[s++])];return s&&s==t?e:void 0};var Zs=Se((function(e,r,s){var t=null==e?void 0:Gs(e,r);return void 0===t?s:t}));const Js=(e,r,s)=>Zs(s,r)||Zs(e,r),Qs=(e,r)=>{const s=r||e.defaultValue;return Zs(e.collections,s)},et={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},rt=e=>r=>{var s;const t=r.theme,i=Qs(et,null==t?void 0:t.motionScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.motion)?Js(i,e,t.overrides.motion):i[e]},st={"duration-150":rt("duration-150"),"duration-250":rt("duration-250"),"duration-350":rt("duration-350"),"duration-500":rt("duration-500"),"duration-800":rt("duration-800"),"duration-1000":rt("duration-1000"),"ease-default":rt("ease-default"),"ease-standard":rt("ease-standard"),"ease-entrance":rt("ease-entrance"),"ease-exit":rt("ease-exit")},tt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#89000B","primary-20":"#B0000E","primary-30":"#C4000F","primary-40":"#D0333F","primary-50":"#DC666F","primary-60":"#E28087","primary-70":"#E7999F","primary-80":"#EDB3B7","primary-90":"#F3CCCF","primary-95":"#F9E6E7","primary-100":"#FCF2F3","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4d4d4d","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},it=e=>r=>{var s;const t=r.theme,i=Qs(tt,null==t?void 0:t.colourScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.primitiveColour)?Js(i,e,t.overrides.primitiveColour):i[e]},nt={"brand-10":it("brand-10"),"brand-20":it("brand-20"),"brand-30":it("brand-30"),"brand-40":it("brand-40"),"brand-50":it("brand-50"),"brand-60":it("brand-60"),"brand-70":it("brand-70"),"brand-80":it("brand-80"),"brand-90":it("brand-90"),"brand-95":it("brand-95"),"brand-100":it("brand-100"),"primary-10":it("primary-10"),"primary-20":it("primary-20"),"primary-30":it("primary-30"),"primary-40":it("primary-40"),"primary-50":it("primary-50"),"primary-60":it("primary-60"),"primary-70":it("primary-70"),"primary-80":it("primary-80"),"primary-90":it("primary-90"),"primary-95":it("primary-95"),"primary-100":it("primary-100"),"secondary-10":it("secondary-10"),"secondary-20":it("secondary-20"),"secondary-30":it("secondary-30"),"secondary-40":it("secondary-40"),"secondary-50":it("secondary-50"),"secondary-60":it("secondary-60"),"secondary-70":it("secondary-70"),"secondary-80":it("secondary-80"),"secondary-90":it("secondary-90"),"secondary-95":it("secondary-95"),"secondary-100":it("secondary-100"),"neutral-10":it("neutral-10"),"neutral-20":it("neutral-20"),"neutral-30":it("neutral-30"),"neutral-40":it("neutral-40"),"neutral-50":it("neutral-50"),"neutral-60":it("neutral-60"),"neutral-70":it("neutral-70"),"neutral-80":it("neutral-80"),"neutral-90":it("neutral-90"),"neutral-95":it("neutral-95"),"neutral-100":it("neutral-100"),"success-10":it("success-10"),"success-20":it("success-20"),"success-30":it("success-30"),"success-40":it("success-40"),"success-50":it("success-50"),"success-60":it("success-60"),"success-70":it("success-70"),"success-80":it("success-80"),"success-90":it("success-90"),"success-95":it("success-95"),"success-100":it("success-100"),"warning-10":it("warning-10"),"warning-20":it("warning-20"),"warning-30":it("warning-30"),"warning-40":it("warning-40"),"warning-50":it("warning-50"),"warning-60":it("warning-60"),"warning-70":it("warning-70"),"warning-80":it("warning-80"),"warning-90":it("warning-90"),"warning-95":it("warning-95"),"warning-100":it("warning-100"),"error-10":it("error-10"),"error-20":it("error-20"),"error-30":it("error-30"),"error-40":it("error-40"),"error-50":it("error-50"),"error-60":it("error-60"),"error-70":it("error-70"),"error-80":it("error-80"),"error-90":it("error-90"),"error-95":it("error-95"),"error-100":it("error-100"),"info-10":it("info-10"),"info-20":it("info-20"),"info-30":it("info-30"),"info-40":it("info-40"),"info-50":it("info-50"),"info-60":it("info-60"),"info-70":it("info-70"),"info-80":it("info-80"),"info-90":it("info-90"),"info-95":it("info-95"),"info-100":it("info-100"),white:it("white"),black:it("black"),"primary-inverse":it("primary-inverse")},ot={text:it("neutral-20"),"text-subtle":it("neutral-30"),"text-subtler":it("neutral-50"),"text-subtlest":it("neutral-60"),"text-primary":it("primary-50"),"text-hover":it("primary-40"),"text-selected":it("primary-50"),"text-selected-hover":it("primary-40"),"text-disabled":it("neutral-50"),"text-disabled-subtle":it("neutral-60"),"text-disabled-subtlest":it("neutral-80"),"text-selected-disabled":it("neutral-20"),"text-success":it("success-40"),"text-warning":it("warning-40"),"text-error":it("error-40"),"text-info":it("info-40"),"text-inverse":it("white"),icon:it("neutral-50"),"icon-subtle":it("neutral-60"),"icon-strongest":it("neutral-20"),"icon-primary":it("primary-50"),"icon-primary-subtle":it("primary-60"),"icon-primary-subtlest":it("primary-70"),"icon-hover":it("primary-40"),"icon-selected":it("primary-50"),"icon-selected-hover":it("primary-40"),"icon-disabled":it("neutral-50"),"icon-disabled-subtle":it("neutral-60"),"icon-selected-disabled":it("neutral-60"),"icon-success":it("success-50"),"icon-warning":it("warning-60"),"icon-error":it("error-50"),"icon-error-strong":it("error-40"),"icon-info":it("info-50"),"icon-inverse":it("white"),"icon-primary-inverse":it("primary-inverse"),border:it("neutral-90"),"border-strong":it("neutral-70"),"border-stronger":it("neutral-50"),"border-primary":it("primary-50"),"border-primary-subtle":it("primary-60"),"border-hover":it("primary-90"),"border-hover-strong":it("primary-60"),"border-selected":it("primary-50"),"border-selected-subtle":it("primary-70"),"border-selected-subtlest":it("primary-90"),"border-selected-hover":it("primary-40"),"border-focus":it("primary-60"),"border-focus-strong":it("primary-50"),"border-disabled":it("neutral-90"),"border-selected-disabled":it("neutral-70"),"border-success":it("success-60"),"border-warning":it("warning-60"),"border-error":it("error-60"),"border-error-focus":it("error-60"),"border-error-focus-strong":it("error-40"),"border-error-strong":it("error-40"),"border-info":it("info-60"),bg:it("white"),"bg-strong":it("neutral-100"),"bg-stronger":it("neutral-95"),"bg-strongest":it("neutral-90"),"bg-hover":it("primary-95"),"bg-hover-strong":it("primary-90"),"bg-hover-subtle":it("primary-100"),"bg-hover-neutral":it("neutral-100"),"bg-hover-neutral-strong":it("neutral-90"),"bg-selected":it("primary-95"),"bg-selected-hover":it("primary-90"),"bg-selected-strong":it("primary-90"),"bg-selected-stronger":it("primary-70"),"bg-selected-strongest":it("primary-50"),"bg-selected-strongest-hover":it("primary-40"),"bg-disabled":it("neutral-95"),"bg-selected-disabled":it("neutral-95"),"bg-selected-stronger-disabled":it("neutral-70"),"bg-success":it("success-100"),"bg-success-hover":it("success-95"),"bg-success-strong":it("success-50"),"bg-success-strong-hover":it("success-40"),"bg-warning":it("warning-100"),"bg-warning-hover":it("warning-95"),"bg-warning-strong":it("warning-50"),"bg-warning-strong-hover":it("warning-40"),"bg-info":it("info-100"),"bg-info-hover":it("info-95"),"bg-info-strong":it("info-50"),"bg-info-strong-hover":it("info-40"),"bg-error":it("error-100"),"bg-error-hover":it("error-95"),"bg-error-strong":it("error-50"),"bg-error-strong-hover":it("error-40"),"bg-inverse":it("neutral-20"),"bg-inverse-subtle":it("neutral-30"),"bg-inverse-subtler":it("neutral-50"),"bg-inverse-subtlest":it("neutral-60"),"bg-inverse-hover":it("neutral-40"),"bg-primary":it("primary-50"),"bg-primary-subtle":it("primary-60"),"bg-primary-subtler":it("primary-95"),"bg-primary-subtlest":it("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":it("primary-40"),"bg-primary-subtlest-hover":it("primary-90"),"bg-primary-subtlest-selected":it("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:it("primary-50"),"hyperlink-hover":it("primary-40"),"hyperlink-visited":it("primary-40"),"hyperlink-inverse":it("primary-inverse"),"focus-ring":it("black"),"focus-ring-inverse":it("white")},at={collections:{lifesg:ot,bookingsg:ot,rbs:ot,mylegacy:ot,ccube:ot,pa:ot},defaultValue:"lifesg"},lt=e=>r=>{var s;const t=r.theme,i=Qs(at,null==t?void 0:t.colourScheme),n=(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.semanticColour)?Js(i,e,t.overrides.semanticColour):i[e];return"function"==typeof n?n(r):n},dt={text:lt("text"),"text-subtle":lt("text-subtle"),"text-subtler":lt("text-subtler"),"text-subtlest":lt("text-subtlest"),"text-primary":lt("text-primary"),"text-hover":lt("text-hover"),"text-selected":lt("text-selected"),"text-selected-hover":lt("text-selected-hover"),"text-disabled":lt("text-disabled"),"text-disabled-subtle":lt("text-disabled-subtle"),"text-disabled-subtlest":lt("text-disabled-subtlest"),"text-selected-disabled":lt("text-selected-disabled"),"text-success":lt("text-success"),"text-warning":lt("text-warning"),"text-error":lt("text-error"),"text-info":lt("text-info"),"text-inverse":lt("text-inverse"),icon:lt("icon"),"icon-subtle":lt("icon-subtle"),"icon-strongest":lt("icon-strongest"),"icon-primary":lt("icon-primary"),"icon-primary-subtle":lt("icon-primary-subtle"),"icon-primary-subtlest":lt("icon-primary-subtlest"),"icon-hover":lt("icon-hover"),"icon-selected":lt("icon-selected"),"icon-selected-hover":lt("icon-selected-hover"),"icon-disabled":lt("icon-disabled"),"icon-disabled-subtle":lt("icon-disabled-subtle"),"icon-selected-disabled":lt("icon-selected-disabled"),"icon-success":lt("icon-success"),"icon-warning":lt("icon-warning"),"icon-error":lt("icon-error"),"icon-error-strong":lt("icon-error-strong"),"icon-info":lt("icon-info"),"icon-inverse":lt("icon-inverse"),"icon-primary-inverse":lt("icon-primary-inverse"),border:lt("border"),"border-strong":lt("border-strong"),"border-stronger":lt("border-stronger"),"border-primary":lt("border-primary"),"border-primary-subtle":lt("border-primary-subtle"),"border-hover":lt("border-hover"),"border-hover-strong":lt("border-hover-strong"),"border-selected":lt("border-selected"),"border-selected-subtle":lt("border-selected-subtle"),"border-selected-subtlest":lt("border-selected-subtlest"),"border-selected-hover":lt("border-selected-hover"),"border-focus":lt("border-focus"),"border-focus-strong":lt("border-focus-strong"),"border-disabled":lt("border-disabled"),"border-selected-disabled":lt("border-selected-disabled"),"border-success":lt("border-success"),"border-warning":lt("border-warning"),"border-error":lt("border-error"),"border-error-focus":lt("border-error-focus"),"border-error-focus-strong":lt("border-error-focus-strong"),"border-error-strong":lt("border-error-strong"),"border-info":lt("border-info"),bg:lt("bg"),"bg-strong":lt("bg-strong"),"bg-stronger":lt("bg-stronger"),"bg-strongest":lt("bg-strongest"),"bg-hover":lt("bg-hover"),"bg-hover-strong":lt("bg-hover-strong"),"bg-hover-subtle":lt("bg-hover-subtle"),"bg-hover-neutral":lt("bg-hover-neutral"),"bg-hover-neutral-strong":lt("bg-hover-neutral-strong"),"bg-selected":lt("bg-selected"),"bg-selected-hover":lt("bg-selected-hover"),"bg-selected-strong":lt("bg-selected-strong"),"bg-selected-stronger":lt("bg-selected-stronger"),"bg-selected-strongest":lt("bg-selected-strongest"),"bg-selected-strongest-hover":lt("bg-selected-strongest-hover"),"bg-disabled":lt("bg-disabled"),"bg-selected-disabled":lt("bg-selected-disabled"),"bg-selected-stronger-disabled":lt("bg-selected-stronger-disabled"),"bg-success":lt("bg-success"),"bg-success-hover":lt("bg-success-hover"),"bg-success-strong":lt("bg-success-strong"),"bg-success-strong-hover":lt("bg-success-strong-hover"),"bg-warning":lt("bg-warning"),"bg-warning-hover":lt("bg-warning-hover"),"bg-warning-strong":lt("bg-warning-strong"),"bg-warning-strong-hover":lt("bg-warning-strong-hover"),"bg-info":lt("bg-info"),"bg-info-hover":lt("bg-info-hover"),"bg-info-strong":lt("bg-info-strong"),"bg-info-strong-hover":lt("bg-info-strong-hover"),"bg-error":lt("bg-error"),"bg-error-hover":lt("bg-error-hover"),"bg-error-strong":lt("bg-error-strong"),"bg-error-strong-hover":lt("bg-error-strong-hover"),"bg-inverse":lt("bg-inverse"),"bg-inverse-subtle":lt("bg-inverse-subtle"),"bg-inverse-subtler":lt("bg-inverse-subtler"),"bg-inverse-subtlest":lt("bg-inverse-subtlest"),"bg-inverse-hover":lt("bg-inverse-hover"),"bg-primary":lt("bg-primary"),"bg-primary-subtle":lt("bg-primary-subtle"),"bg-primary-subtler":lt("bg-primary-subtler"),"bg-primary-subtlest":lt("bg-primary-subtlest"),"bg-available":lt("bg-available"),"bg-primary-hover":lt("bg-primary-hover"),"bg-primary-subtlest-hover":lt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":lt("bg-primary-subtlest-selected"),"overlay-strong":lt("overlay-strong"),"overlay-subtle":lt("overlay-subtle"),hyperlink:lt("hyperlink"),"hyperlink-hover":lt("hyperlink-hover"),"hyperlink-visited":lt("hyperlink-visited"),"hyperlink-inverse":lt("hyperlink-inverse"),"focus-ring":lt("focus-ring"),"focus-ring-inverse":lt("focus-ring-inverse")},gt={collections:{lifesg:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var s,t,i;const{thickness:n,radius:o,colour:a}=e||{},l=null!==(s="function"==typeof n?n(r):n)&&void 0!==s?s:ht["width-010"](r),d=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:0,g=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:dt.border(r),c=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${g}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return E`
            background-image: url("data:image/svg+xml,${c}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},ct=e=>r=>{var s;const t=r.theme,i=Qs(gt,null==t?void 0:t.borderScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.border)?`${Js(i,e,t.overrides.border)}px`:`${i[e]}px`},mt=e=>1===e.length&&"theme"in e[0],ht={"width-005":ct("width-005"),"width-010":ct("width-010"),"width-020":ct("width-020"),"width-040":ct("width-040"),solid:(ut="solid",e=>{var r;const s=e.theme,t=Qs(gt,null==s?void 0:s.borderScheme),i=(null===(r=null==s?void 0:s.overrides)||void 0===r?void 0:r.border)?Js(t,ut,s.overrides.border):t[ut];return"function"==typeof i?i(e):i}),"dashed-default":(e=>(...r)=>s=>{var t;const i=mt(r)?[]:r,n=mt(r)?r[0]:s,o=n.theme,a=Qs(gt,null==o?void 0:o.borderScheme);return((null===(t=null==o?void 0:o.overrides)||void 0===t?void 0:t.border)?Js(a,e,o.overrides.border):a[e])(...i)(n)})("dashed-default")};var ut;const bt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},pt=e=>r=>{var s;const t=r.theme,i=Qs(bt,null==t?void 0:t.breakpointScheme);let n;return n=(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.breakpoint)?Js(i,e,t.overrides.breakpoint):i[e],n},yt={"xxs-min":pt("xxs-min"),"xxs-max":pt("xxs-max"),"xs-min":pt("xs-min"),"xs-max":pt("xs-max"),"sm-min":pt("sm-min"),"sm-max":pt("sm-max"),"md-min":pt("md-min"),"md-max":pt("md-max"),"lg-min":pt("lg-min"),"lg-max":pt("lg-max"),"xl-min":pt("xl-min"),"xl-max":pt("xl-max"),"xxl-min":pt("xxl-min"),"xxs-column":pt("xxs-column"),"xs-column":pt("xs-column"),"sm-column":pt("sm-column"),"md-column":pt("md-column"),"lg-column":pt("lg-column"),"xl-column":pt("xl-column"),"xxl-column":pt("xxl-column"),"xxs-gutter":pt("xxs-gutter"),"xs-gutter":pt("xs-gutter"),"sm-gutter":pt("sm-gutter"),"md-gutter":pt("md-gutter"),"lg-gutter":pt("lg-gutter"),"xl-gutter":pt("xl-gutter"),"xxl-gutter":pt("xxl-gutter"),"xxs-margin":pt("xxs-margin"),"xs-margin":pt("xs-margin"),"sm-margin":pt("sm-margin"),"md-margin":pt("md-margin"),"lg-margin":pt("lg-margin"),"xl-margin":pt("xl-margin"),"xxl-margin":pt("xxl-margin")},ft=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,s)=>(r[s]=((e,r)=>{const s=yt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=s(r);return`@media screen and (${e}: ${t}px)`}})(e,s),r)),{}),vt={MaxWidth:ft("max-width"),MinWidth:ft("min-width")},xt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},wt={collections:{lifesg:xt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:xt,mylegacy:xt,ccube:xt,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"}},defaultValue:"lifesg"},Ft=e=>r=>{var s;const t=r.theme,i=Qs(wt,null==t?void 0:t.fontScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.fontSpec)?Js(i,e,t.overrides.fontSpec):i[e]},$t={"header-size-xxl":Ft("header-size-xxl"),"header-size-xl":Ft("header-size-xl"),"header-size-lg":Ft("header-size-lg"),"header-size-md":Ft("header-size-md"),"header-size-sm":Ft("header-size-sm"),"header-size-xs":Ft("header-size-xs"),"header-lh-xxl":Ft("header-lh-xxl"),"header-lh-xl":Ft("header-lh-xl"),"header-lh-lg":Ft("header-lh-lg"),"header-lh-md":Ft("header-lh-md"),"header-lh-sm":Ft("header-lh-sm"),"header-lh-xs":Ft("header-lh-xs"),"header-ls-xxl":Ft("header-ls-xxl"),"header-ls-xl":Ft("header-ls-xl"),"header-ls-lg":Ft("header-ls-lg"),"header-ls-md":Ft("header-ls-md"),"header-ls-sm":Ft("header-ls-sm"),"header-ls-xs":Ft("header-ls-xs"),"weight-light":Ft("weight-light"),"weight-regular":Ft("weight-regular"),"weight-semibold":Ft("weight-semibold"),"weight-bold":Ft("weight-bold"),"font-family":Ft("font-family"),"body-size-baseline":Ft("body-size-baseline"),"body-size-md":Ft("body-size-md"),"body-size-sm":Ft("body-size-sm"),"body-size-xs":Ft("body-size-xs"),"body-lh-baseline":Ft("body-lh-baseline"),"body-lh-md":Ft("body-lh-md"),"body-lh-sm":Ft("body-lh-sm"),"body-lh-xs":Ft("body-lh-xs"),"body-ls-baseline":Ft("body-ls-baseline"),"body-ls-md":Ft("body-ls-md"),"body-ls-sm":Ft("body-ls-sm"),"body-ls-xs":Ft("body-ls-xs"),"formlabel-size-baseline":Ft("formlabel-size-baseline"),"formlabel-size-lg":Ft("formlabel-size-lg"),"formlabel-lh-baseline":Ft("formlabel-lh-baseline"),"formlabel-lh-lg":Ft("formlabel-lh-lg"),"formlabel-ls-baseline":Ft("formlabel-ls-baseline"),"formlabel-ls-lg":Ft("formlabel-ls-lg")},Et={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Ct=e=>r=>{var s;const t=r.theme,i=Qs(Et,null==t?void 0:t.radiusScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.radius)?`${Js(i,e,t.overrides.radius)}px`:`${i[e]}px`},Bt={none:Ct("none"),xs:Ct("xs"),sm:Ct("sm"),md:Ct("md"),lg:Ct("lg"),full:Ct("full")},Dt={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},kt=e=>r=>{var s;const t=r.theme,i=Qs(Dt,null==t?void 0:t.spacingScheme);return(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.spacing)?`${Js(i,e,t.overrides.spacing)}px`:`${i[e]}px`},At={"spacing-0":kt("spacing-0"),"spacing-4":kt("spacing-4"),"spacing-8":kt("spacing-8"),"spacing-12":kt("spacing-12"),"spacing-16":kt("spacing-16"),"spacing-20":kt("spacing-20"),"spacing-24":kt("spacing-24"),"spacing-32":kt("spacing-32"),"spacing-40":kt("spacing-40"),"spacing-48":kt("spacing-48"),"spacing-64":kt("spacing-64"),"spacing-72":kt("spacing-72"),"layout-xs":kt("layout-xs"),"layout-sm":kt("layout-sm"),"layout-md":kt("layout-md"),"layout-lg":kt("layout-lg"),"layout-xl":kt("layout-xl"),"layout-xxl":kt("layout-xxl"),"layout-xxxl":kt("layout-xxxl")},zt=(e,r,s,t)=>E`
    font-family: ${Ft("font-family")};
    font-size: ${Ft(e)};
    font-weight: ${Ft(r)};
    line-height: ${Ft(s)};
    letter-spacing: ${Ft(t)};
`,St={"header-xxl-light":zt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":zt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":zt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":zt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":zt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":zt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":zt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":zt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":zt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":zt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":zt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":zt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":zt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":zt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":zt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":zt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":zt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":zt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":zt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":zt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":zt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":zt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":zt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":zt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":zt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":zt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":zt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":zt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":zt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":zt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":zt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":zt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":zt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":zt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":zt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":zt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":zt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":zt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":zt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":zt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":zt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":zt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Ot={collections:{lifesg:St,bookingsg:St,rbs:St,mylegacy:St,ccube:St,pa:St},defaultValue:"lifesg"},jt=e=>r=>{var s;const t=r.theme,i=Qs(Ot,null==t?void 0:t.fontScheme),n=(null===(s=null==t?void 0:t.overrides)||void 0===s?void 0:s.font)?Js(i,e,t.overrides.font):i[e];return"function"==typeof n?n(r):n},_t={"header-xxl-light":jt("header-xxl-light"),"header-xxl-regular":jt("header-xxl-regular"),"header-xxl-semibold":jt("header-xxl-semibold"),"header-xxl-bold":jt("header-xxl-bold"),"header-xl-light":jt("header-xl-light"),"header-xl-regular":jt("header-xl-regular"),"header-xl-semibold":jt("header-xl-semibold"),"header-xl-bold":jt("header-xl-bold"),"header-lg-light":jt("header-lg-light"),"header-lg-regular":jt("header-lg-regular"),"header-lg-semibold":jt("header-lg-semibold"),"header-lg-bold":jt("header-lg-bold"),"header-md-light":jt("header-md-light"),"header-md-regular":jt("header-md-regular"),"header-md-semibold":jt("header-md-semibold"),"header-md-bold":jt("header-md-bold"),"header-sm-light":jt("header-sm-light"),"header-sm-regular":jt("header-sm-regular"),"header-sm-semibold":jt("header-sm-semibold"),"header-sm-bold":jt("header-sm-bold"),"header-xs-light":jt("header-xs-light"),"header-xs-regular":jt("header-xs-regular"),"header-xs-semibold":jt("header-xs-semibold"),"header-xs-bold":jt("header-xs-bold"),"body-baseline-light":jt("body-baseline-light"),"body-baseline-regular":jt("body-baseline-regular"),"body-baseline-semibold":jt("body-baseline-semibold"),"body-baseline-bold":jt("body-baseline-bold"),"body-md-light":jt("body-md-light"),"body-md-regular":jt("body-md-regular"),"body-md-semibold":jt("body-md-semibold"),"body-md-bold":jt("body-md-bold"),"body-sm-light":jt("body-sm-light"),"body-sm-regular":jt("body-sm-regular"),"body-sm-semibold":jt("body-sm-semibold"),"body-sm-bold":jt("body-sm-bold"),"body-xs-light":jt("body-xs-light"),"body-xs-regular":jt("body-xs-regular"),"body-xs-semibold":jt("body-xs-semibold"),"body-xs-bold":jt("body-xs-bold"),"formlabel-baseline-semibold":jt("formlabel-baseline-semibold"),"formlabel-lg-semibold":jt("formlabel-lg-semibold")},Tt=Object.assign(Object.assign({},dt),{Primitive:nt}),Rt=Object.assign(Object.assign({},_t),{Spec:$t}),Ht=st,Mt=ht,Lt=At,It=Bt,Pt=yt,Vt=vt,Nt={colourScheme:"lifesg",fontScheme:"lifesg",motionScheme:"lifesg",borderScheme:"lifesg",spacingScheme:"lifesg",radiusScheme:"lifesg",breakpointScheme:"lifesg",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}};v((()=>A(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.d023c835.js")).LottieSpinner}})))),$.div`
    margin: 0 auto;
    padding: ${Lt["spacing-32"]} ${Lt["spacing-16"]};
`,v((()=>A(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.c484fd05.js")).LottieLoadingDots}})))),$.div`
    margin: 0 auto;
`;const Wt=v((()=>A(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.abf1f2c9.js")).LottieLoadingDotsSpinner}})))),Xt=r=>{var{color:s}=r,t=k(r,["color"]);const i=C(),n=s||Tt["icon-primary"]({theme:i});return e(Ut,Object.assign({},t,{children:e(x,Object.assign({fallback:e(Yt,{})},{children:e(Wt,{color:n})}))}))},Yt=()=>e("div",{style:{height:"200px",width:"200px"}}),Ut=$.div`
    margin: 0 auto;
`,Kt=B`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,qt=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>E`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Gt=E`
    animation: ${Ht["duration-150"]} ${Ht["ease-default"]} ${Kt};
    width: 100%;
    height: 100%;
    transition: color ${Ht["duration-150"]} ${Ht["ease-default"]};
`,Zt=$(t)`
    ${Gt}
    color: ${Tt["icon-primary-subtlest"]};
`,Jt=$(i)`
    ${Gt}
    color: ${Tt["icon-disabled-subtle"]};
`,Qt=$(n)`
    ${Gt}
    color: ${e=>e.$disabled?Tt["icon-disabled-subtle"](e):Tt["icon-selected"](e)};
`,ei=$(o)`
    ${Gt}
    color: ${e=>e.$disabled?Tt["icon-disabled-subtle"](e):Tt["icon-selected"](e)};
`,ri=$.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Zt},
        &:hover
        + ${Qt},
        &:hover
        + ${ei} {
        color: ${e=>!e.disabled&&Tt["icon-hover"](e)};
    }
`,si=s=>{var{className:t,checked:i,disabled:n,indeterminate:o,onChange:a,onKeyPress:l,displaySize:d="default"}=s,g=k(s,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const m=c();y((()=>{m.current.indeterminate=o}),[o]);const h=e=>{if(!n){const r=e;if(!(" "===r.key||"change"===e.type))return;a&&a(e),l&&l(r)}};return r(qt,Object.assign({className:t,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:n?-1:0,onKeyDown:h,$displaySize:d,$disabled:n,$unchecked:!(o||i||n)},{children:[e(ri,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:m,tabIndex:-1,onChange:h,disabled:n},g)),o?e(ei,{$disabled:n,"data-testid":"indeterminate"}):i?e(Qt,{$disabled:n,"data-testid":"checkmark"}):n?e(Jt,{"data-testid":"empty-disabled-checkbox"}):e(Zt,{$disabled:n,"data-testid":"empty-checkbox"})]}))},ti=t=>i=>{switch(t){case"maintenance":return r(s,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const t=i,n=Math.floor(t.secondsLeft/60),o=t.secondsLeft%60;return r(s,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var ii;!function(e){e.imgAttributeHelper=(e,r)=>{const{base:s,md:t,lg:i,width:n,height:o}=e;return{srcSet:`${s} 400w, ${t} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${Pt["sm-max"]({theme:r})}px) 400px, (max-width: ${Pt["lg-max"]({theme:r})}px) 800px, 1200px`,width:n,height:o}}}(ii||(ii={}));const{imgAttributeHelper:ni}=ii,oi={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},ai={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},li=Object.assign(Object.assign({},oi),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),di=Object.assign(Object.assign({},oi),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),gi=(e,r)=>new Map([["400",{img:ni(e[400],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:ni(e[403],r),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:ni(e[404],r),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:ni(e[408],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:ni(e[500],r),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:ni(e[502],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:ni(e[503],r),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:ni(e[504],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:ni(e.confirmation,r),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:ni(e["link-error"],r),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:ni(e.logout,r),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:ni(e["insufficient-credits"],r),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:ni(e.inactivity,r),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:ti("inactivity")}],["maintenance",{img:ni(e[503],r),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:ti("maintenance")}],["no-item-found",{img:ni(e["no-item-found"],r),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:ni(e["payment-unsuccessful"],r),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:ni(e["transfer-unsuccessful"],r),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:ni(e["unsupported-browser"],r),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:ni(e["unsupported-browser"],r),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:ni(e.warning,r),title:"Are you sure?",description:"You will lose your progress."}]]),ci=$.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,mi=B`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,hi=$.div`
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
    animation: ${mi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ui=$(hi)`
    animation-delay: -0.45s;
`,bi=$(hi)`
    animation-delay: -0.3s;
`,pi=$(hi)`
    animation-delay: -0.15s;
`,yi=$.button`
    padding: ${Lt["spacing-8"]} ${Lt["spacing-16"]};
    min-width: 4rem;
    border: ${Mt["width-010"]} ${Mt.solid} transparent;
    border-radius: ${It.sm};
    transition: all ${Ht["duration-250"]} ${Ht["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return E`
                    background-color: ${Tt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Tt["border-error-strong"]:Tt["border-primary"]};

                    color: ${e.$buttonIsDanger?Tt["text-error"]:Tt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Tt["bg-hover-neutral"]};
                    }
                `;case"light":return E`
                    background-color: ${Tt.bg};
                    border-color: ${Tt.border};

                    color: ${e.$buttonIsDanger?Tt["text-error"]:Tt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Tt["bg-hover-neutral"]};
                    }
                `;case"link":return E`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Tt["text-error"]:Tt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Tt["bg-hover-neutral"]};
                    }
                `;case"disabled":return E`
                    background-color: ${Tt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Tt["text-disabled"]};
                `;default:return E`
                    background-color: ${e.$buttonIsDanger?Tt["bg-error-strong"]:Tt["bg-primary"]};

                    ${Vt.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Tt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Tt["bg-error-strong-hover"]:Tt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return E`
                    height: 2.5rem;
                    ${Rt["body-md-semibold"]}

                    ${Vt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return E`
                    height: 4rem;
                    ${Rt["header-md-semibold"]}

                    ${Vt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return E`
                    height: 3rem;
                    ${Rt["header-xs-semibold"]}

                    ${Vt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,fi=$((({color:s,className:t,size:i})=>r(ci,Object.assign({className:t,$size:i,$color:s},{children:[e(hi,{id:"inner1"}),e(ui,{id:"inner2"}),e(bi,{id:"inner3"}),e(pi,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,vi=(s,t)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=s,d=k(s,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(yi,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:n},g,d,{children:[o&&e(fi,{}),e("span",{children:i})]}))};vi.displayName="Button.Default";const xi=(s,t)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=s,d=k(s,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(yi,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:n},g,d,{children:[o&&e(fi,{}),e("span",{children:i})]}))};xi.displayName="Button.Small";const wi=(s,t)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=s,d=k(s,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(yi,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:n},g,d,{children:[o&&e(fi,{}),e("span",{children:i})]}))};wi.displayName="Button.Large";const Fi={Default:g.forwardRef(vi),Small:g.forwardRef(xi),Large:g.forwardRef(wi)},$i=(e,r,s=!1)=>{const t=`${e}-${r.toLowerCase()}`;return E`
        ${Rt[t]}
        ${s?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Ei=(e,r)=>E`
    ${$i(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?E`
            display: block;
        `:e?E`
            display: inline;
        `:E`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${Tt.text};
`;var Ci;!function(s){const t=(e,r,s)=>{const t=$(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Ei(r,e)}
        `;return t.displayName=`Typography.${s}`,t};s.HeaderXXL=t("h1","header-xxl","HeaderXXL"),s.HeaderXL=t("h2","header-xl","HeaderXL"),s.HeaderLG=t("h3","header-lg","HeaderLG"),s.HeaderMD=t("h4","header-md","HeaderMD"),s.HeaderSM=t("h5","header-sm","HeaderSM"),s.HeaderXS=t("h6","header-xs","HeaderXS");const i=(e,r)=>{const s=$.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Ei(e,r)}
        `;return s.displayName=`Typography.${r}`,s};s.BodyBL=i("body-baseline","BodyBL"),s.BodyMD=i("body-md","BodyMD"),s.BodySM=i("body-sm","BodySM"),s.BodyXS=i("body-xs","BodyXS");const n=(s,t)=>{const i=$.a`
            ${e=>E`
                ${$i(s,e.weight||"regular")}
                color: ${Tt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Tt["text-hover"]};
                }
            `}
        `,n=s=>{var{external:t=!1,children:n}=s,o=k(s,["external","children"]);return r(i,Object.assign({},o,{children:[n,t&&e(Bi,{})]}))};return n.displayName=`Typography.${t}`,n};s.LinkBL=n("body-baseline","LinkBL"),s.LinkMD=n("body-md","LinkMD"),s.LinkSM=n("body-sm","LinkSM"),s.LinkXS=n("body-xs","LinkXS")}(Ci||(Ci={}));const Bi=$(D)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Di=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,ki=$.img`
    position: relative;
    width: 400px;
    height: auto;

    ${Vt.MaxWidth.sm} {
        width: 320px;
    }

    ${Vt.MaxWidth.xs} {
        width: 288px;
    }

    ${Vt.MaxWidth.xxs} {
        width: 240px;
    }
`,Ai=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,zi=$(Ci.HeaderMD)`
    margin: ${Lt["spacing-32"]} 0 ${Lt["spacing-16"]};
    text-align: center;
`,Si=$.div`
    color: ${Tt.text};
    text-align: center;

    ${(e=>{const{textSize:r}=e||{};return E`
        // Text styling
        ${r&&Rt[`${r}-regular`]}

        strong {
            font-weight: ${Rt.Spec["weight-semibold"]};
            ${r&&Rt[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Rt.Spec["weight-semibold"]};
            ${r&&Rt[`${r}-semibold`]}
            color: ${Tt.hyperlink};
            text-decoration: none;

            svg {
                color: ${Tt["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Tt["hyperlink-hover"]};

                svg {
                    color: ${Tt["icon-hover"]};
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
    `})({textSize:"body-baseline"})}
`,Oi=$(Fi.Default)`
    margin: ${Lt["spacing-32"]} auto 0;
    width: 21rem;

    ${Vt.MaxWidth.sm} {
        width: 100%;
    }
`,ji=s=>{var{type:t,img:i,title:n,description:o,actionButton:a,additionalProps:l,imageOnly:d,illustrationScheme:g}=s,c=k(s,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const m=C(),h=((e,r,s)=>{switch(r){case"bookingsg":return gi(ai,s).get(e);case"ccube":return gi(li,s).get(e);case"mylegacy":return gi(di,s).get(e);default:return gi(oi,s).get(e)}})(t,g||(m||Nt).resourceScheme,m),u=c["data-testid"]||"error-display",b=()=>{switch(t){case"maintenance":{const e=l;return l&&e.dateString?h.renderDescription(e):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?h.renderDescription(e):o||void 0}default:return o||void 0}};if(!h)return null;const p=Object.assign(Object.assign(Object.assign(Object.assign({},h),i&&{img:i}),n&&{title:n}),b()&&{description:b()});return r(Di,Object.assign({},c,{"data-testid":u},{children:[e(ki,Object.assign({},p.img,{alt:"","data-id":"error-display-image"})),!d&&(p.title||p.description?r(Ai,{children:[p.title&&("string"==typeof p.title?e(zi,Object.assign({"data-testid":`${u}--title`,"data-id":"error-display-title",weight:"semibold"},{children:p.title})):p.title),p.description&&e(Si,Object.assign({"data-testid":`${u}--description`,"data-id":"error-display-description"},{children:"string"==typeof p.description?e("p",{children:p.description}):p.description}))]}):null),a&&(()=>{const r=Object.assign({children:"Proceed"},a);return e(Oi,Object.assign({},r))})()]}))},_i=E`
    outline-offset: -1px;
    outline: ${Mt["width-020"]} ${Mt.solid} ${Tt["border-focus"]};
`,Ti=E`
    outline-color: ${Tt["border-focus"]};
`,Ri=E`
    outline-color: ${Tt["border-disabled"]};
`,Hi=E`
    outline-color: ${Tt["border-error-focus"]};
`,Mi=$.div`
    border: ${Mt["width-010"]} ${Mt.solid} ${Tt.border};
    border-radius: ${It.sm};
    background: ${Tt.bg};

    :focus-within {
        ${_i}
    }
    ${e=>e.$focused&&_i}

    ${e=>e.$readOnly?E`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ti}
                }
                ${e.$focused&&Ti}
            `:e.$disabled?E`
                background: ${Tt["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ri}
                }
                ${e.$focused&&Ri}
            `:e.$error?E`
                border-color: ${Tt["border-error"]};

                :focus-within {
                    ${Hi}
                }
                ${e.$focused&&Hi}
            `:void 0}
`;$(Mi)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Lt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,$.input`
    ${e=>"small"===e.$variant?Rt["body-md-regular"]:Rt["body-baseline-regular"]}
    color: ${Tt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Tt["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Tt["text-subtler"]};
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
`;const Li=$.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Mt["width-010"]} ${Mt.solid}
            ${Tt["border-focus"]};
        border-radius: ${It.sm};
    }
`,Ii=Tt.border,Pi=Tt.text,Vi=$.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Mt["width-010"]} ${Mt.solid} ${Ii};
    border-radius: ${It.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Ni=$.div`
    flex: 1;
`,Wi=$.table`
    th:last-child,
    td:last-child {
        padding-right: 1.5rem;
    }
    th:first-child,
    td:first-child {
        padding-left: 1.5rem;
    }
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;

    ${e=>{if(e.$stickyHeader)return E`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,Xi=$.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Mt["width-010"]} ${Mt.solid} ${Ii}`:"none"};
        }
    }
`,Yi=$.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const r=e.$left?`${e.$left}px`:"0",s=e.$width?`${e.$width}px`:"100%";return E`
                position: fixed;
                left: ${r};
                width: ${s};
            `}return E`
                position: sticky;
                left: 0;
            `}};
`,Ui=$(Li)`
    ${Rt["body-md-semibold"]}
    cursor: pointer;
    color: ${Tt["text-primary"]};
    transition: ${Ht["duration-150"]} ${Ht["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Tt["text-hover"]};
    }
`,Ki=$.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&E`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${It.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Mt["width-010"]} ${Mt.solid} ${Ii};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Mt["width-010"]} ${Mt.solid} ${Ii};
    border-radius: 0 0 ${It.sm} ${It.sm};
    background-color: ${Tt["bg-selected"]};
    transition: all 300ms ease;
`,qi=$.tr`
    background-color: ${Tt["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Mt["width-010"]} ${Mt.solid} ${Ii};
`,Gi=$.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Pi};
    border-bottom: ${Mt["width-010"]} ${Mt.solid} ${Ii};
    ${e=>{if(e.$isCheckbox)return E`
                width: 4rem;
            `}};
`,Zi=$.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Pi};
        margin-left: 0.5rem;
    }
`,Ji=$.tr`
    background-color: ${e=>e.$isSelected?E`
                ${Tt["bg-selected"]};
            `:e.$alternating?E`
                ${Tt["bg-strong"]};
            `:E`
                ${Tt.bg};
            `};
    border-top: ${Mt["width-010"]} ${Mt.solid} ${Ii};
    &:hover {
        ${e=>{if(e.$isSelectable)return E`
                    background-color: ${Tt["bg-hover-strong"]};
                `}};
    }
`,Qi=$.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Pi};
    border-bottom: ${Mt["width-010"]} ${Mt.solid} ${Ii};
`,en=$(Ci.BodyBL)`
    ${rn=2,E`
    display: -webkit-box;
    -webkit-line-clamp: ${rn};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
    text-overflow: ellipsis;
`;var rn;const sn=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,tn=$.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,nn=$(Ci.HeaderSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,on=$.td`
    padding: 4rem 0;
`,an=t=>{var{id:i,headers:n,rows:o,className:g,sortIndicators:h,alternatingRows:u,loadState:b="success",enableMultiSelect:p,selectedIds:f,disabledIds:v,enableActionBar:x,enableSelectAll:F,enableStickyHeader:$,emptyView:E,actionBarContent:C,renderCustomEmptyView:B,onHeaderClick:D,onSelect:A,onSelectAll:z,onClearSelectionClick:S}=t,O=k(t,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=c(null),_=c(null),R=c(null),M=c(null),L=c(null),[I,P]=m(!1),[V,N]=m(!1),[W,X]=m(!1),[Y,U]=m(!1),[K,q]=m(!1),{ref:G,inView:Z}=function({threshold:e,delay:r,trackVisibility:s,rootMargin:t,root:i,triggerOnce:n,skip:o,initialInView:a,fallbackInView:l,onChange:g}={}){var c;const[m,h]=d.useState(null),u=d.useRef(),[b,p]=d.useState({inView:!!a,entry:void 0});u.current=g,d.useEffect((()=>{if(o||!m)return;let a;return a=T(m,((e,r)=>{p({inView:e,entry:r}),u.current&&u.current(e,r),r.isIntersecting&&n&&a&&(a(),a=void 0)}),{root:i,rootMargin:t,threshold:e,trackVisibility:s,delay:r},l),()=>{a&&a()}}),[Array.isArray(e)?e.toString():e,m,i,t,n,o,s,l,r]);const y=null==(c=b.entry)?void 0:c.target,f=d.useRef();m||!y||n||o||f.current===y||(f.current=y,p({inView:!!a,entry:void 0}));const v=[h,b.inView,b.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),J=w((()=>{if(!L.current||!M.current)return;const e=L.current.scrollHeight>L.current.clientHeight;P(e),e?M.current.style.transform="translateY(0)":oe()}),[]);y((()=>{J()}),[]),function(e){void 0===e&&(e={});var r=e.skipOnMount,s=void 0!==r&&r,t=e.refreshMode,i=e.refreshRate,n=void 0===i?1e3:i,o=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,g=void 0===d||d,h=e.targetRef,u=e.observerOptions,b=e.onResize,p=c(s),y=c(null),f=null!=h?h:y,v=c(),x=m({width:void 0,height:void 0}),w=x[0],F=x[1];Ae((function(){if(!Be()){var e=ke(b,F,l,g);v.current=Ee((function(r){(l||g)&&r.forEach((function(r){var s=r&&r.contentRect||{},t=s.width,i=s.height;!p.current&&!Be()&&e({width:t,height:i}),p.current=!1}))}),t,n,o);var r=new window.ResizeObserver(v.current);return f.current&&r.observe(f.current,u),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[t,n,o,l,g,b,u,f.current]),H({ref:f},w)}({onResize:J});((e,r,s="window",t)=>{const i=c();y((()=>{i.current=r}),[r]),y((()=>{let r;switch(s){case"window":r=window;break;case"document":r=document;break;default:r=s}if(!r||!r.addEventListener)return;const n=e=>i.current(e);return r.addEventListener(e,n,t),()=>{r.removeEventListener(e,n,t)}}),[e,s])})("scroll",(()=>{requestAnimationFrame((()=>{I?ne():oe()})),L.current&&X(L.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),y((()=>{ae()}),[o]);const Q=()=>(null==f?void 0:f.length)===o.length,ee=e=>!!(null==f?void 0:f.includes(e)),re=e=>!!u&&e%2==1,se=e=>!!(null==v?void 0:v.includes(e)),te=e=>{if(O["data-testid"])return`${O["data-testid"]}-${e}`},ie=()=>n.length+(p?1:0),ne=()=>{if(!L.current)return;const e=L.current.getBoundingClientRect();U(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},oe=()=>{if(!(j.current&&_.current&&L.current&&M.current&&R.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const r=e.bottom-window.innerHeight,s=j.current.getBoundingClientRect().height-R.current.clientHeight-32,t=Math.min(r,s);M.current.style.transform=`translateY(-${t}px)`}else M.current.style.transform="translateY(0)"},ae=()=>{j.current&&L.current&&q(j.current.clientHeight+(x?56:0)<L.current.clientHeight)},le=s=>{const{fieldKey:t,label:i,clickable:n=!1,style:o}="string"==typeof s?{fieldKey:s,label:s,style:void 0}:s;return e(Gi,Object.assign({"data-testid":te(`header-${t}`),$clickable:n,onClick:()=>n&&(null==D?void 0:D(t)),style:o,$isCheckbox:!1},{children:r(Zi,{children:["string"==typeof i?e(Ci.BodyBL,Object.assign({weight:"bold"},{children:i})):i,de(t)]})}),t)},de=r=>{const t=null==h?void 0:h[r];return t?"asc"===t?e(a,{"data-testid":te(`header-${r}-arrowup`)}):e(l,{"data-testid":te(`header-${r}-arrowdown`)}):e(s,{})},ge=()=>e(Gi,Object.assign({"data-testid":te("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e(sn,{children:F&&e(si,{checked:Q(),indeterminate:f&&0!==f.length&&!Q(),onClick:()=>{z&&z(Q())}})})})),ce=(r,s)=>{const t="string"!=typeof r?r.style:void 0,i="string"==typeof r?r:r.fieldKey,n=s.id.toString(),o=s[i],a=`${n}-${i}`;return e(Qi,Object.assign({"data-testid":te(`row-${a}`),style:t,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e(en,{children:o}):"function"==typeof o?o(s,{isSelected:ee(n)}):o}),a)},me=r=>e(Qi,Object.assign({"data-testid":te(`row-${r}-selection`),$isCheckbox:!0},{children:e(sn,{children:e(si,{checked:ee(r),onClick:()=>{A&&A(r,!ee(r))},disabled:se(r)})})})),he=()=>e(ji,Object.assign({type:"no-item-found"},E,{title:(null==E?void 0:E.title)?"string"==typeof E.title?e(nn,Object.assign({weight:"bold"},{children:E.title})):E.title:e(nn,Object.assign({weight:"bold"},{children:"No <items> found"})),description:(null==E?void 0:E.description)?E.description:"No matching rows"}));return r(Vi,Object.assign({id:i||"table-wrapper","data-testid":O["data-testid"]||"table",className:g,ref:L,onScroll:()=>{I&&L.current&&N(L.current.scrollTop+L.current.clientHeight>=L.current.scrollHeight)}},{children:[e(Ni,{children:r(Wi,Object.assign({$end:W,$scrollable:I,ref:j,$stickyHeader:$},{children:[e("thead",Object.assign({ref:R},{children:r(qi,{children:[p&&ge(),n.map(le)]})})),e(Xi,Object.assign({$showLastRowBottomBorder:K},{children:"success"===b?!o||o.length<1?e("tr",{children:e(on,Object.assign({colSpan:ie()},{children:B?B():he()}))}):e(s,{children:null==o?void 0:o.map(((e,s)=>r(Ji,Object.assign({"data-testid":te(`row-${e.id.toString()}`),$alternating:re(s),$isSelectable:p,$isSelected:ee(e.id.toString())},{children:[p&&me(e.id.toString()),n.map((r=>ce(r,e)))]}),e.id.toString())))}):e("tr",{children:e("td",Object.assign({colSpan:ie()},{children:e(tn,{children:"loading"===b&&e(Xt,{})})}))})}))]}))}),x&&f&&f.length>0&&(()=>{var s,t,i;return e(Yi,Object.assign({ref:M,$fixed:Y,$left:null===(t=null===(s=null==j?void 0:j.current)||void 0===s?void 0:s.getBoundingClientRect())||void 0===t?void 0:t.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth},{children:r(Ki,Object.assign({$float:(I?!V:!Z)||Y,$scrollable:I},{children:[e(Ci.BodyMD,Object.assign({weight:"semibold"},{children:`${f.length} item${f.length>1?"s":""} selected`})),e(Ui,Object.assign({type:"button",onClick:S},{children:"Clear selection"})),C]}))}))})(),e("div",{ref:e=>{_.current=e,G(e)}})]}))};export{an as D,ze as c};
//# sourceMappingURL=index.4c1a727f.js.map
