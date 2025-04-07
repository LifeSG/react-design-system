import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import{SquareIcon as s,SquareFillIcon as i,SquareTickFillIcon as n,MinusSquareFillIcon as o,ArrowUpIcon as a,ArrowDownIcon as l}from"@lifesg/react-icons";import*as g from"react";import d,{useRef as c,useState as u,isValidElement as m,createRef as h,cloneElement as b,PureComponent as p,useEffect as y,useLayoutEffect as f,lazy as v,Suspense as x,useCallback as w}from"react";import{findDOMNode as F}from"react-dom";import E,{css as $,useTheme as C,keyframes as D}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";function A(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(t[s[i]]=e[s[i]])}return t}function k(e,r,t,s){return new(t||(t=Promise))((function(i,n){function o(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,a)}l((s=s.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var z=new Map,S=new WeakMap,O=0,j=void 0;function _(e){return Object.keys(e).sort().filter((r=>void 0!==e[r])).map((r=>`${r}_${"root"===r?function(e){return e?(S.has(e)||(O+=1,S.set(e,O.toString())),S.get(e)):"0"}(e.root):e[r]}`)).toString()}function T(e,r,t={},s=j){if(void 0===window.IntersectionObserver&&void 0!==s){const i=e.getBoundingClientRect();return r(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:n,elements:o}=function(e){const r=_(e);let t=z.get(r);if(!t){const s=new Map;let i;const n=new IntersectionObserver((r=>{r.forEach((r=>{var t;const n=r.isIntersecting&&i.some((e=>r.intersectionRatio>=e));e.trackVisibility&&void 0===r.isVisible&&(r.isVisible=n),null==(t=s.get(r.target))||t.forEach((e=>{e(n,r)}))}))}),e);i=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:n,elements:s},z.set(r,t)}return t}(t),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(r),n.observe(e),function(){a.splice(a.indexOf(r),1),0===a.length&&(o.delete(e),n.unobserve(e)),0===o.size&&(n.disconnect(),z.delete(i))}}var L=function(e,r){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},L(e,r)};var R=function(){return R=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},R.apply(this,arguments)};var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var M=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},I="object"==typeof H&&H&&H.Object===Object&&H,P="object"==typeof self&&self&&self.Object===Object&&self,V=I||P||Function("return this")(),N=V,W=function(){return N.Date.now()},X=/\s/;var Y=function(e){for(var r=e.length;r--&&X.test(e.charAt(r)););return r},U=/^\s+/;var K=function(e){return e?e.slice(0,Y(e)+1).replace(U,""):e},q=V.Symbol,G=q,Z=Object.prototype,J=Z.hasOwnProperty,Q=Z.toString,ee=G?G.toStringTag:void 0;var re=function(e){var r=J.call(e,ee),t=e[ee];try{e[ee]=void 0;var s=!0}catch(e){}var i=Q.call(e);return s&&(r?e[ee]=t:delete e[ee]),i},te=Object.prototype.toString;var se=re,ie=function(e){return te.call(e)},ne=q?q.toStringTag:void 0;var oe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ne&&ne in Object(e)?se(e):ie(e)},ae=function(e){return null!=e&&"object"==typeof e};var le=K,ge=M,de=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==oe(e)},ce=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,me=/^0o[0-7]+$/i,he=parseInt;var be=M,pe=W,ye=function(e){if("number"==typeof e)return e;if(de(e))return NaN;if(ge(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ge(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=le(e);var t=ue.test(e);return t||me.test(e)?he(e.slice(2),t?2:8):ce.test(e)?NaN:+e},fe=Math.max,ve=Math.min;var xe=function(e,r,t){var s,i,n,o,a,l,g=0,d=!1,c=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=s,n=i;return s=i=void 0,g=r,o=e.apply(n,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||c&&e-g>=n}function b(){var e=pe();if(h(e))return p(e);a=setTimeout(b,function(e){var t=r-(e-l);return c?ve(t,n-(e-g)):t}(e))}function p(e){return a=void 0,u&&s?m(e):(s=i=void 0,o)}function y(){var e=pe(),t=h(e);if(s=arguments,i=this,l=e,t){if(void 0===a)return function(e){return g=e,a=setTimeout(b,r),d?m(e):o}(l);if(c)return clearTimeout(a),a=setTimeout(b,r),m(l)}return void 0===a&&(a=setTimeout(b,r)),o}return r=ye(r)||0,be(t)&&(d=!!t.leading,n=(c="maxWait"in t)?fe(ye(t.maxWait)||0,r):n,u="trailing"in t?!!t.trailing:u),y.cancel=function(){void 0!==a&&clearTimeout(a),g=0,s=l=i=a=void 0},y.flush=function(){return void 0===a?o:p(pe())},y},we=xe,Fe=M;var Ee=function(e,r,t){var s=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fe(t)&&(s="leading"in t?!!t.leading:s,i="trailing"in t?!!t.trailing:i),we(e,r,{leading:s,maxWait:r,trailing:i})},$e=function(e,r,t,s){switch(r){case"debounce":return xe(e,t,s);case"throttle":return Ee(e,t,s);default:return e}},Ce=function(e){return"function"==typeof e},De=function(){return"undefined"==typeof window},Be=function(e){return e instanceof Element||e instanceof HTMLDocument},Ae=function(e,r,t,s){return function(i){var n=i.width,o=i.height;r((function(r){return r.width===n&&r.height===o||r.width===n&&!s||r.height===o&&!t?r:(e&&Ce(e)&&e(n,o),{width:n,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,s=e.observerOptions;if(!De()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,s)))}},t.getElement=function(){var e=t.props,r=e.querySelector,s=e.targetDomEl;if(De())return null;if(r)return document.querySelector(r);if(s&&Be(s))return s;if(t.targetRef&&Be(t.targetRef.current))return t.targetRef.current;var i=F(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,s=r.handleWidth,i=void 0===s||s,n=r.handleHeight,o=void 0===n||n,a=r.onResize;if(i||o){var l=Ae(a,t.setState.bind(t),i,o);e.forEach((function(e){var r=e&&e.contentRect||{},s=r.width,i=r.height;!t.skipOnMount&&!De()&&l({width:s,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,s=e.children;return Ce(r)?"renderProp":Ce(s)?"childFunction":m(s)?"child":Array.isArray(s)?"childArray":"parent"};var s=r.skipOnMount,i=r.refreshMode,n=r.refreshRate,o=void 0===n?1e3:n,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=s,t.targetRef=h(),t.observableElement=null,De()||(t.resizeHandler=$e(t.createResizeHandler,i,o,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}L(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){De()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,s=r.children,i=r.nodeType,n=void 0===i?"div":i,o=this.state,a={width:o.width,height:o.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(a);case"childFunction":return(e=s)(a);case"child":if((e=s).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(t[s[i]]=e[s[i]])}return t}(a,["targetRef"]);return b(e,l)}return b(e,a);case"childArray":return(e=s).map((function(e){return!!e&&b(e,a)}));default:return g.createElement(n,null)}}}(p);var ke=De()?y:f;var ze="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oe=Array.isArray,je="object"==typeof ze&&ze&&ze.Object===Object&&ze,_e="object"==typeof self&&self&&self.Object===Object&&self,Te=je||_e||Function("return this")(),Le=Te.Symbol,Re=Le,He=Object.prototype,Me=He.hasOwnProperty,Ie=He.toString,Pe=Re?Re.toStringTag:void 0;var Ve=function(e){var r=Me.call(e,Pe),t=e[Pe];try{e[Pe]=void 0;var s=!0}catch(e){}var i=Ie.call(e);return s&&(r?e[Pe]=t:delete e[Pe]),i},Ne=Object.prototype.toString;var We=Ve,Xe=function(e){return Ne.call(e)},Ye=Le?Le.toStringTag:void 0;var Ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ye&&Ye in Object(e)?We(e):Xe(e)};var Ke=Ue,qe=function(e){return null!=e&&"object"==typeof e};var Ge=function(e){return"symbol"==typeof e||qe(e)&&"[object Symbol]"==Ke(e)},Ze=Oe,Je=Ge,Qe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,er=/^\w*$/;var rr=function(e,r){if(Ze(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Je(e))||(er.test(e)||!Qe.test(e)||null!=r&&e in Object(r))};var tr=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},sr=Ue,ir=tr;var nr,or=function(e){if(!ir(e))return!1;var r=sr(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ar=Te["__core-js_shared__"],lr=(nr=/[^.]+$/.exec(ar&&ar.keys&&ar.keys.IE_PROTO||""))?"Symbol(src)_1."+nr:"";var gr=function(e){return!!lr&&lr in e},dr=Function.prototype.toString;var cr=or,ur=gr,mr=tr,hr=function(e){if(null!=e){try{return dr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},br=/^\[object .+?Constructor\]$/,pr=Function.prototype,yr=Object.prototype,fr=pr.toString,vr=yr.hasOwnProperty,xr=RegExp("^"+fr.call(vr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var wr=function(e,r){return null==e?void 0:e[r]},Fr=function(e){return!(!mr(e)||ur(e))&&(cr(e)?xr:br).test(hr(e))},Er=wr;var $r=function(e,r){var t=Er(e,r);return Fr(t)?t:void 0},Cr=$r(Object,"create"),Dr=Cr;var Br=function(){this.__data__=Dr?Dr(null):{},this.size=0};var Ar=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},kr=Cr,zr=Object.prototype.hasOwnProperty;var Sr=function(e){var r=this.__data__;if(kr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return zr.call(r,e)?r[e]:void 0},Or=Cr,jr=Object.prototype.hasOwnProperty;var _r=function(e){var r=this.__data__;return Or?void 0!==r[e]:jr.call(r,e)},Tr=Cr;var Lr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Tr&&void 0===r?"__lodash_hash_undefined__":r,this},Rr=Br,Hr=Ar,Mr=Sr,Ir=_r,Pr=Lr;function Vr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}Vr.prototype.clear=Rr,Vr.prototype.delete=Hr,Vr.prototype.get=Mr,Vr.prototype.has=Ir,Vr.prototype.set=Pr;var Nr=Vr;var Wr=function(){this.__data__=[],this.size=0};var Xr=function(e,r){return e===r||e!=e&&r!=r};var Yr=function(e,r){for(var t=e.length;t--;)if(Xr(e[t][0],r))return t;return-1},Ur=Yr,Kr=Array.prototype.splice;var qr=function(e){var r=this.__data__,t=Ur(r,e);return!(t<0)&&(t==r.length-1?r.pop():Kr.call(r,t,1),--this.size,!0)},Gr=Yr;var Zr=function(e){var r=this.__data__,t=Gr(r,e);return t<0?void 0:r[t][1]},Jr=Yr;var Qr=function(e){return Jr(this.__data__,e)>-1},et=Yr;var rt=function(e,r){var t=this.__data__,s=et(t,e);return s<0?(++this.size,t.push([e,r])):t[s][1]=r,this},tt=Wr,st=qr,it=Zr,nt=Qr,ot=rt;function at(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}at.prototype.clear=tt,at.prototype.delete=st,at.prototype.get=it,at.prototype.has=nt,at.prototype.set=ot;var lt=at,gt=$r(Te,"Map"),dt=Nr,ct=lt,ut=gt;var mt=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var ht=function(e,r){var t=e.__data__;return mt(r)?t["string"==typeof r?"string":"hash"]:t.map},bt=ht;var pt=function(e){var r=bt(this,e).delete(e);return this.size-=r?1:0,r},yt=ht;var ft=function(e){return yt(this,e).get(e)},vt=ht;var xt=function(e){return vt(this,e).has(e)},wt=ht;var Ft=function(e,r){var t=wt(this,e),s=t.size;return t.set(e,r),this.size+=t.size==s?0:1,this},Et=function(){this.size=0,this.__data__={hash:new dt,map:new(ut||ct),string:new dt}},$t=pt,Ct=ft,Dt=xt,Bt=Ft;function At(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}At.prototype.clear=Et,At.prototype.delete=$t,At.prototype.get=Ct,At.prototype.has=Dt,At.prototype.set=Bt;var kt=At;function zt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var s=arguments,i=r?r.apply(this,s):s[0],n=t.cache;if(n.has(i))return n.get(i);var o=e.apply(this,s);return t.cache=n.set(i,o)||n,o};return t.cache=new(zt.Cache||kt),t}zt.Cache=kt;var St=zt;var Ot=function(e){var r=St(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_t=/\\(\\)?/g,Tt=Ot((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(jt,(function(e,t,s,i){r.push(s?i.replace(_t,"$1"):t||e)})),r}));var Lt=function(e,r){for(var t=-1,s=null==e?0:e.length,i=Array(s);++t<s;)i[t]=r(e[t],t,e);return i},Rt=Oe,Ht=Ge,Mt=Le?Le.prototype:void 0,It=Mt?Mt.toString:void 0;var Pt=function e(r){if("string"==typeof r)return r;if(Rt(r))return Lt(r,e)+"";if(Ht(r))return It?It.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Vt=Pt;var Nt=Oe,Wt=rr,Xt=Tt,Yt=function(e){return null==e?"":Vt(e)};var Ut=Ge;var Kt=function(e,r){return Nt(e)?e:Wt(e,r)?[e]:Xt(Yt(e))},qt=function(e){if("string"==typeof e||Ut(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var Gt=function(e,r){for(var t=0,s=(r=Kt(r,e)).length;null!=e&&t<s;)e=e[qt(r[t++])];return t&&t==s?e:void 0};var Zt=Se((function(e,r,t){var s=null==e?void 0:Gt(e,r);return void 0===s?t:s}));const Jt=(e,r,t)=>Zt(t,r)||Zt(e,r),Qt=(e,r)=>{const t=r||e.defaultValue;return Zt(e.collections,t)},es={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},rs=e=>r=>{var t;const s=r.theme,i=Qt(es,null==s?void 0:s.borderScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.border)?`${Jt(i,e,s.overrides.border)}px`:`${i[e]}px`},ts={"width-005":rs("width-005"),"width-010":rs("width-010"),"width-020":rs("width-020"),"width-040":rs("width-040"),solid:(ss="solid",e=>{var r;const t=e.theme,s=Qt(es,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Jt(s,ss,t.overrides.border):s[ss];return"function"==typeof i?i(e):i})};var ss;const is={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#E21F26","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ns=e=>r=>{var t;const s=r.theme,i=Qt(is,null==s?void 0:s.colourScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.primitiveColour)?Jt(i,e,s.overrides.primitiveColour):i[e]},os={"brand-10":ns("brand-10"),"brand-20":ns("brand-20"),"brand-30":ns("brand-30"),"brand-40":ns("brand-40"),"brand-50":ns("brand-50"),"brand-60":ns("brand-60"),"brand-70":ns("brand-70"),"brand-80":ns("brand-80"),"brand-90":ns("brand-90"),"brand-95":ns("brand-95"),"brand-100":ns("brand-100"),"primary-10":ns("primary-10"),"primary-20":ns("primary-20"),"primary-30":ns("primary-30"),"primary-40":ns("primary-40"),"primary-50":ns("primary-50"),"primary-60":ns("primary-60"),"primary-70":ns("primary-70"),"primary-80":ns("primary-80"),"primary-90":ns("primary-90"),"primary-95":ns("primary-95"),"primary-100":ns("primary-100"),"secondary-10":ns("secondary-10"),"secondary-20":ns("secondary-20"),"secondary-30":ns("secondary-30"),"secondary-40":ns("secondary-40"),"secondary-50":ns("secondary-50"),"secondary-60":ns("secondary-60"),"secondary-70":ns("secondary-70"),"secondary-80":ns("secondary-80"),"secondary-90":ns("secondary-90"),"secondary-95":ns("secondary-95"),"secondary-100":ns("secondary-100"),"neutral-10":ns("neutral-10"),"neutral-20":ns("neutral-20"),"neutral-30":ns("neutral-30"),"neutral-40":ns("neutral-40"),"neutral-50":ns("neutral-50"),"neutral-60":ns("neutral-60"),"neutral-70":ns("neutral-70"),"neutral-80":ns("neutral-80"),"neutral-90":ns("neutral-90"),"neutral-95":ns("neutral-95"),"neutral-100":ns("neutral-100"),"success-10":ns("success-10"),"success-20":ns("success-20"),"success-30":ns("success-30"),"success-40":ns("success-40"),"success-50":ns("success-50"),"success-60":ns("success-60"),"success-70":ns("success-70"),"success-80":ns("success-80"),"success-90":ns("success-90"),"success-95":ns("success-95"),"success-100":ns("success-100"),"warning-10":ns("warning-10"),"warning-20":ns("warning-20"),"warning-30":ns("warning-30"),"warning-40":ns("warning-40"),"warning-50":ns("warning-50"),"warning-60":ns("warning-60"),"warning-70":ns("warning-70"),"warning-80":ns("warning-80"),"warning-90":ns("warning-90"),"warning-95":ns("warning-95"),"warning-100":ns("warning-100"),"error-10":ns("error-10"),"error-20":ns("error-20"),"error-30":ns("error-30"),"error-40":ns("error-40"),"error-50":ns("error-50"),"error-60":ns("error-60"),"error-70":ns("error-70"),"error-80":ns("error-80"),"error-90":ns("error-90"),"error-95":ns("error-95"),"error-100":ns("error-100"),"info-10":ns("info-10"),"info-20":ns("info-20"),"info-30":ns("info-30"),"info-40":ns("info-40"),"info-50":ns("info-50"),"info-60":ns("info-60"),"info-70":ns("info-70"),"info-80":ns("info-80"),"info-90":ns("info-90"),"info-95":ns("info-95"),"info-100":ns("info-100"),white:ns("white"),black:ns("black"),"primary-inverse":ns("primary-inverse")},as={text:ns("neutral-20"),"text-subtle":ns("neutral-30"),"text-subtler":ns("neutral-50"),"text-subtlest":ns("neutral-60"),"text-primary":ns("primary-50"),"text-hover":ns("primary-40"),"text-selected":ns("primary-50"),"text-selected-hover":ns("primary-40"),"text-disabled":ns("neutral-50"),"text-disabled-subtle":ns("neutral-60"),"text-disabled-subtlest":ns("neutral-80"),"text-selected-disabled":ns("neutral-20"),"text-success":ns("success-40"),"text-warning":ns("warning-40"),"text-error":ns("error-40"),"text-info":ns("info-40"),"text-inverse":ns("white"),icon:ns("neutral-50"),"icon-subtle":ns("neutral-60"),"icon-strongest":ns("neutral-20"),"icon-primary":ns("primary-50"),"icon-primary-subtle":ns("primary-60"),"icon-primary-subtlest":ns("primary-70"),"icon-hover":ns("primary-40"),"icon-selected":ns("primary-50"),"icon-selected-hover":ns("primary-40"),"icon-disabled":ns("neutral-50"),"icon-disabled-subtle":ns("neutral-60"),"icon-selected-disabled":ns("neutral-60"),"icon-success":ns("success-50"),"icon-warning":ns("warning-60"),"icon-error":ns("error-50"),"icon-error-strong":ns("error-40"),"icon-info":ns("info-50"),"icon-inverse":ns("white"),"icon-primary-inverse":ns("primary-inverse"),border:ns("neutral-90"),"border-strong":ns("neutral-70"),"border-stronger":ns("neutral-50"),"border-primary":ns("primary-50"),"border-primary-subtle":ns("primary-60"),"border-hover":ns("primary-90"),"border-hover-strong":ns("primary-60"),"border-selected":ns("primary-50"),"border-selected-subtle":ns("primary-70"),"border-selected-subtlest":ns("primary-90"),"border-selected-hover":ns("primary-40"),"border-focus":ns("primary-60"),"border-focus-strong":ns("primary-50"),"border-disabled":ns("neutral-90"),"border-selected-disabled":ns("neutral-70"),"border-success":ns("success-60"),"border-warning":ns("warning-60"),"border-error":ns("error-60"),"border-error-focus":ns("error-60"),"border-error-focus-strong":ns("error-40"),"border-error-strong":ns("error-40"),"border-info":ns("info-60"),bg:ns("white"),"bg-strong":ns("neutral-100"),"bg-stronger":ns("neutral-95"),"bg-strongest":ns("neutral-90"),"bg-hover":ns("primary-95"),"bg-hover-strong":ns("primary-90"),"bg-hover-subtle":ns("primary-100"),"bg-hover-neutral":ns("neutral-100"),"bg-hover-neutral-strong":ns("neutral-90"),"bg-selected":ns("primary-95"),"bg-selected-hover":ns("primary-90"),"bg-selected-strong":ns("primary-90"),"bg-selected-stronger":ns("primary-70"),"bg-selected-strongest":ns("primary-50"),"bg-selected-strongest-hover":ns("primary-40"),"bg-disabled":ns("neutral-95"),"bg-selected-disabled":ns("neutral-95"),"bg-selected-stronger-disabled":ns("neutral-70"),"bg-success":ns("success-100"),"bg-success-hover":ns("success-95"),"bg-success-strong":ns("success-50"),"bg-success-strong-hover":ns("success-40"),"bg-warning":ns("warning-100"),"bg-warning-hover":ns("warning-95"),"bg-warning-strong":ns("warning-50"),"bg-warning-strong-hover":ns("warning-40"),"bg-info":ns("info-100"),"bg-info-hover":ns("info-95"),"bg-info-strong":ns("info-50"),"bg-info-strong-hover":ns("info-40"),"bg-error":ns("error-100"),"bg-error-hover":ns("error-95"),"bg-error-strong":ns("error-50"),"bg-error-strong-hover":ns("error-40"),"bg-inverse":ns("neutral-20"),"bg-inverse-subtle":ns("neutral-30"),"bg-inverse-subtler":ns("neutral-50"),"bg-inverse-subtlest":ns("neutral-60"),"bg-inverse-hover":ns("neutral-40"),"bg-primary":ns("primary-50"),"bg-primary-subtle":ns("primary-60"),"bg-primary-subtler":ns("primary-95"),"bg-primary-subtlest":ns("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ns("primary-40"),"bg-primary-subtlest-hover":ns("primary-90"),"bg-primary-subtlest-selected":ns("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ns("primary-50"),"hyperlink-hover":ns("primary-40"),"hyperlink-visited":ns("primary-40"),"hyperlink-inverse":ns("primary-inverse"),"focus-ring":ns("black"),"focus-ring-inverse":ns("white")},ls={collections:{lifesg:as,bookingsg:as,rbs:as,mylegacy:as,ccube:as,oneservice:as,pa:{text:ns("neutral-30"),"text-subtle":ns("neutral-40"),"text-subtler":ns("neutral-50"),"text-subtlest":ns("neutral-70"),"text-primary":ns("neutral-10"),"text-hover":ns("neutral-70"),"text-selected":ns("neutral-20"),"text-selected-hover":ns("neutral-10"),"text-disabled":ns("neutral-50"),"text-disabled-subtle":ns("neutral-60"),"text-disabled-subtlest":ns("neutral-80"),"text-selected-disabled":ns("neutral-40"),"text-success":ns("success-40"),"text-warning":ns("warning-40"),"text-error":ns("brand-30"),"text-info":ns("neutral-40"),"text-inverse":ns("neutral-100"),icon:ns("neutral-40"),"icon-subtle":ns("neutral-50"),"icon-strongest":ns("neutral-10"),"icon-primary":ns("neutral-10"),"icon-primary-subtle":ns("neutral-30"),"icon-primary-subtlest":ns("neutral-60"),"icon-hover":ns("neutral-70"),"icon-selected":ns("brand-20"),"icon-selected-hover":ns("brand-10"),"icon-disabled":ns("neutral-50"),"icon-disabled-subtle":ns("neutral-60"),"icon-selected-disabled":ns("neutral-40"),"icon-success":ns("success-40"),"icon-warning":ns("warning-60"),"icon-error":ns("brand-30"),"icon-error-strong":ns("brand-10"),"icon-info":ns("neutral-40"),"icon-inverse":ns("neutral-100"),"icon-primary-inverse":"#F9B371",border:ns("neutral-90"),"border-strong":ns("neutral-30"),"border-stronger":ns("neutral-20"),"border-primary":ns("neutral-40"),"border-primary-subtle":ns("neutral-60"),"border-hover":ns("neutral-80"),"border-hover-strong":ns("neutral-10"),"border-selected":ns("brand-20"),"border-selected-subtle":ns("neutral-40"),"border-selected-subtlest":ns("neutral-70"),"border-selected-hover":ns("neutral-10"),"border-focus":ns("brand-60"),"border-focus-strong":ns("brand-40"),"border-disabled":ns("neutral-90"),"border-selected-disabled":ns("neutral-80"),"border-success":ns("success-40"),"border-warning":ns("warning-60"),"border-error":ns("brand-30"),"border-error-focus":ns("brand-20"),"border-error-focus-strong":ns("brand-10"),"border-error-strong":ns("brand-20"),"border-info":ns("neutral-40"),bg:ns("neutral-100"),"bg-strong":ns("neutral-95"),"bg-stronger":ns("neutral-90"),"bg-strongest":ns("neutral-80"),"bg-hover":ns("brand-90"),"bg-hover-strong":ns("brand-80"),"bg-hover-subtle":ns("neutral-90"),"bg-hover-neutral":ns("neutral-90"),"bg-hover-neutral-strong":ns("neutral-90"),"bg-selected":ns("brand-50"),"bg-selected-hover":ns("brand-70"),"bg-selected-strong":ns("brand-90"),"bg-selected-stronger":ns("brand-40"),"bg-selected-strongest":ns("brand-20"),"bg-selected-strongest-hover":ns("brand-10"),"bg-disabled":ns("neutral-90"),"bg-selected-disabled":ns("neutral-90"),"bg-selected-stronger-disabled":ns("neutral-80"),"bg-success":ns("success-100"),"bg-success-hover":ns("success-95"),"bg-success-strong":ns("success-50"),"bg-success-strong-hover":ns("success-40"),"bg-warning":ns("warning-100"),"bg-warning-hover":ns("warning-95"),"bg-warning-strong":ns("warning-50"),"bg-warning-strong-hover":ns("warning-40"),"bg-info":ns("neutral-95"),"bg-info-hover":ns("info-95"),"bg-info-strong":ns("info-50"),"bg-info-strong-hover":ns("info-40"),"bg-error":ns("brand-100"),"bg-error-hover":ns("error-95"),"bg-error-strong":ns("error-50"),"bg-error-strong-hover":ns("error-40"),"bg-inverse":ns("neutral-40"),"bg-inverse-subtle":ns("neutral-60"),"bg-inverse-subtler":ns("neutral-70"),"bg-inverse-subtlest":ns("neutral-80"),"bg-inverse-hover":ns("neutral-30"),"bg-primary":ns("brand-20"),"bg-primary-subtle":ns("brand-60"),"bg-primary-subtler":ns("brand-80"),"bg-primary-subtlest":ns("brand-100"),"bg-available":ns("success-60"),"bg-primary-hover":ns("brand-10"),"bg-primary-subtlest-hover":ns("brand-80"),"bg-primary-subtlest-selected":ns("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ns("neutral-10"),"hyperlink-hover":ns("neutral-40"),"hyperlink-visited":ns("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ns("black"),"focus-ring-inverse":ns("white")}},defaultValue:"lifesg"},gs=e=>r=>{var t;const s=r.theme,i=Qt(ls,null==s?void 0:s.colourScheme),n=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.semanticColour)?Jt(i,e,s.overrides.semanticColour):i[e];return"function"==typeof n?n(r):n},ds={text:gs("text"),"text-subtle":gs("text-subtle"),"text-subtler":gs("text-subtler"),"text-subtlest":gs("text-subtlest"),"text-primary":gs("text-primary"),"text-hover":gs("text-hover"),"text-selected":gs("text-selected"),"text-selected-hover":gs("text-selected-hover"),"text-disabled":gs("text-disabled"),"text-disabled-subtle":gs("text-disabled-subtle"),"text-disabled-subtlest":gs("text-disabled-subtlest"),"text-selected-disabled":gs("text-selected-disabled"),"text-success":gs("text-success"),"text-warning":gs("text-warning"),"text-error":gs("text-error"),"text-info":gs("text-info"),"text-inverse":gs("text-inverse"),icon:gs("icon"),"icon-subtle":gs("icon-subtle"),"icon-strongest":gs("icon-strongest"),"icon-primary":gs("icon-primary"),"icon-primary-subtle":gs("icon-primary-subtle"),"icon-primary-subtlest":gs("icon-primary-subtlest"),"icon-hover":gs("icon-hover"),"icon-selected":gs("icon-selected"),"icon-selected-hover":gs("icon-selected-hover"),"icon-disabled":gs("icon-disabled"),"icon-disabled-subtle":gs("icon-disabled-subtle"),"icon-selected-disabled":gs("icon-selected-disabled"),"icon-success":gs("icon-success"),"icon-warning":gs("icon-warning"),"icon-error":gs("icon-error"),"icon-error-strong":gs("icon-error-strong"),"icon-info":gs("icon-info"),"icon-inverse":gs("icon-inverse"),"icon-primary-inverse":gs("icon-primary-inverse"),border:gs("border"),"border-strong":gs("border-strong"),"border-stronger":gs("border-stronger"),"border-primary":gs("border-primary"),"border-primary-subtle":gs("border-primary-subtle"),"border-hover":gs("border-hover"),"border-hover-strong":gs("border-hover-strong"),"border-selected":gs("border-selected"),"border-selected-subtle":gs("border-selected-subtle"),"border-selected-subtlest":gs("border-selected-subtlest"),"border-selected-hover":gs("border-selected-hover"),"border-focus":gs("border-focus"),"border-focus-strong":gs("border-focus-strong"),"border-disabled":gs("border-disabled"),"border-selected-disabled":gs("border-selected-disabled"),"border-success":gs("border-success"),"border-warning":gs("border-warning"),"border-error":gs("border-error"),"border-error-focus":gs("border-error-focus"),"border-error-focus-strong":gs("border-error-focus-strong"),"border-error-strong":gs("border-error-strong"),"border-info":gs("border-info"),bg:gs("bg"),"bg-strong":gs("bg-strong"),"bg-stronger":gs("bg-stronger"),"bg-strongest":gs("bg-strongest"),"bg-hover":gs("bg-hover"),"bg-hover-strong":gs("bg-hover-strong"),"bg-hover-subtle":gs("bg-hover-subtle"),"bg-hover-neutral":gs("bg-hover-neutral"),"bg-hover-neutral-strong":gs("bg-hover-neutral-strong"),"bg-selected":gs("bg-selected"),"bg-selected-hover":gs("bg-selected-hover"),"bg-selected-strong":gs("bg-selected-strong"),"bg-selected-stronger":gs("bg-selected-stronger"),"bg-selected-strongest":gs("bg-selected-strongest"),"bg-selected-strongest-hover":gs("bg-selected-strongest-hover"),"bg-disabled":gs("bg-disabled"),"bg-selected-disabled":gs("bg-selected-disabled"),"bg-selected-stronger-disabled":gs("bg-selected-stronger-disabled"),"bg-success":gs("bg-success"),"bg-success-hover":gs("bg-success-hover"),"bg-success-strong":gs("bg-success-strong"),"bg-success-strong-hover":gs("bg-success-strong-hover"),"bg-warning":gs("bg-warning"),"bg-warning-hover":gs("bg-warning-hover"),"bg-warning-strong":gs("bg-warning-strong"),"bg-warning-strong-hover":gs("bg-warning-strong-hover"),"bg-info":gs("bg-info"),"bg-info-hover":gs("bg-info-hover"),"bg-info-strong":gs("bg-info-strong"),"bg-info-strong-hover":gs("bg-info-strong-hover"),"bg-error":gs("bg-error"),"bg-error-hover":gs("bg-error-hover"),"bg-error-strong":gs("bg-error-strong"),"bg-error-strong-hover":gs("bg-error-strong-hover"),"bg-inverse":gs("bg-inverse"),"bg-inverse-subtle":gs("bg-inverse-subtle"),"bg-inverse-subtler":gs("bg-inverse-subtler"),"bg-inverse-subtlest":gs("bg-inverse-subtlest"),"bg-inverse-hover":gs("bg-inverse-hover"),"bg-primary":gs("bg-primary"),"bg-primary-subtle":gs("bg-primary-subtle"),"bg-primary-subtler":gs("bg-primary-subtler"),"bg-primary-subtlest":gs("bg-primary-subtlest"),"bg-available":gs("bg-available"),"bg-primary-hover":gs("bg-primary-hover"),"bg-primary-subtlest-hover":gs("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":gs("bg-primary-subtlest-selected"),"overlay-strong":gs("overlay-strong"),"overlay-subtle":gs("overlay-subtle"),hyperlink:gs("hyperlink"),"hyperlink-hover":gs("hyperlink-hover"),"hyperlink-visited":gs("hyperlink-visited"),"hyperlink-inverse":gs("hyperlink-inverse"),"focus-ring":gs("focus-ring"),"focus-ring-inverse":gs("focus-ring-inverse")},cs={collections:{default:{solid:e=>r=>{var t,s,i;const{thickness:n,radius:o,colour:a}=e||{},l=null!==(t="function"==typeof n?n(r):n)&&void 0!==t?t:ts["width-010"](r),g=null!==(s="function"==typeof o?o(r):o)&&void 0!==s?s:0,d=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ds.border(r),c=ts.solid;return $`
            border: ${l} ${c} ${d};
            border-radius: ${g};
        `},"dashed-default":e=>r=>{var t,s,i;const{thickness:n,radius:o,colour:a}=e||{},l=null!==(t="function"==typeof n?n(r):n)&&void 0!==t?t:ts["width-010"](r),g=null!==(s="function"==typeof o?o(r):o)&&void 0!==s?s:0,d=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ds.border(r),c=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${g}' ry='${g}' stroke='${d}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return $`
            background-image: url("data:image/svg+xml,${c}");
            border-radius: ${g};
        `}}},defaultValue:"default"},us=e=>1===e.length&&"theme"in e[0],ms=e=>(...r)=>t=>{const s=us(r)?[]:r,i=us(r)?r[0]:t,n=i.theme;return(0,Qt(cs,null==n?void 0:n.borderScheme)[e])(...s)(i)},hs={solid:ms("solid"),"dashed-default":ms("dashed-default")},bs={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},ps=e=>r=>{var t;const s=r.theme,i=Qt(bs,null==s?void 0:s.breakpointScheme);let n;return n=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.breakpoint)?Jt(i,e,s.overrides.breakpoint):i[e],n},ys={"xxs-min":ps("xxs-min"),"xxs-max":ps("xxs-max"),"xs-min":ps("xs-min"),"xs-max":ps("xs-max"),"sm-min":ps("sm-min"),"sm-max":ps("sm-max"),"md-min":ps("md-min"),"md-max":ps("md-max"),"lg-min":ps("lg-min"),"lg-max":ps("lg-max"),"xl-min":ps("xl-min"),"xl-max":ps("xl-max"),"xxl-min":ps("xxl-min"),"xxs-column":ps("xxs-column"),"xs-column":ps("xs-column"),"sm-column":ps("sm-column"),"md-column":ps("md-column"),"lg-column":ps("lg-column"),"xl-column":ps("xl-column"),"xxl-column":ps("xxl-column"),"xxs-gutter":ps("xxs-gutter"),"xs-gutter":ps("xs-gutter"),"sm-gutter":ps("sm-gutter"),"md-gutter":ps("md-gutter"),"lg-gutter":ps("lg-gutter"),"xl-gutter":ps("xl-gutter"),"xxl-gutter":ps("xxl-gutter"),"xxs-margin":ps("xxs-margin"),"xs-margin":ps("xs-margin"),"sm-margin":ps("sm-margin"),"md-margin":ps("md-margin"),"lg-margin":ps("lg-margin"),"xl-margin":ps("xl-margin"),"xxl-margin":ps("xxl-margin")},fs=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=ys["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const s=t(r);return`@media screen and (${e}: ${s}px)`}})(e,t),r)),{}),vs={MaxWidth:fs("max-width"),MinWidth:fs("min-width")},xs={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},ws=e=>r=>{var t;const s=r.theme,i=Qt(xs,null==s?void 0:s.fontScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.fontSpec)?Jt(i,e,s.overrides.fontSpec):i[e]},Fs={"heading-size-xxl":ws("heading-size-xxl"),"heading-size-xl":ws("heading-size-xl"),"heading-size-lg":ws("heading-size-lg"),"heading-size-md":ws("heading-size-md"),"heading-size-sm":ws("heading-size-sm"),"heading-size-xs":ws("heading-size-xs"),"heading-lh-xxl":ws("heading-lh-xxl"),"heading-lh-xl":ws("heading-lh-xl"),"heading-lh-lg":ws("heading-lh-lg"),"heading-lh-md":ws("heading-lh-md"),"heading-lh-sm":ws("heading-lh-sm"),"heading-lh-xs":ws("heading-lh-xs"),"heading-ls-xxl":ws("heading-ls-xxl"),"heading-ls-xl":ws("heading-ls-xl"),"heading-ls-lg":ws("heading-ls-lg"),"heading-ls-md":ws("heading-ls-md"),"heading-ls-sm":ws("heading-ls-sm"),"heading-ls-xs":ws("heading-ls-xs"),"weight-light":ws("weight-light"),"weight-regular":ws("weight-regular"),"weight-semibold":ws("weight-semibold"),"weight-bold":ws("weight-bold"),"font-family":ws("font-family"),"body-size-baseline":ws("body-size-baseline"),"body-size-md":ws("body-size-md"),"body-size-sm":ws("body-size-sm"),"body-size-xs":ws("body-size-xs"),"body-lh-baseline":ws("body-lh-baseline"),"body-lh-md":ws("body-lh-md"),"body-lh-sm":ws("body-lh-sm"),"body-lh-xs":ws("body-lh-xs"),"body-ls-baseline":ws("body-ls-baseline"),"body-ls-md":ws("body-ls-md"),"body-ls-sm":ws("body-ls-sm"),"body-ls-xs":ws("body-ls-xs"),"form-label-size":ws("form-label-size"),"form-description-size":ws("form-description-size"),"form-label-lh":ws("form-label-lh"),"form-description-lh":ws("form-description-lh"),"form-label-ls":ws("form-label-ls"),"form-description-ls":ws("form-description-ls")},Es=(e,r,t,s,i)=>{const{disableLigatures:n}=i||{};return $`
        font-family: ${ws("font-family")};
        font-size: ${ws(e)};
        font-weight: ${ws(r)};
        line-height: ${ws(t)};
        letter-spacing: ${ws(s)};

        font-variant: ${n?"no-common-ligatures":"normal"};
    `},$s=(e={})=>({"heading-xxl-light":Es("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Es("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Es("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Es("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Es("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Es("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Es("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Es("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Es("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Es("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Es("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Es("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Es("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Es("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Es("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Es("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Es("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Es("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Es("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Es("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Es("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Es("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Es("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Es("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Es("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Es("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Es("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Es("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Es("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Es("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Es("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Es("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Es("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Es("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Es("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Es("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Es("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Es("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Es("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Es("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Es("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Es("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Cs=$s({disableLigatures:!0}),Ds={collections:{default:$s(),bookingsg:Cs,pa:$s({disableLigatures:!0})},defaultValue:"default"},Bs=e=>r=>{var t;const s=r.theme,i=Qt(Ds,null==s?void 0:s.fontScheme),n=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.font)?Jt(i,e,s.overrides.font):i[e];return"function"==typeof n?n(r):n},As={"heading-xxl-light":Bs("heading-xxl-light"),"heading-xxl-regular":Bs("heading-xxl-regular"),"heading-xxl-semibold":Bs("heading-xxl-semibold"),"heading-xxl-bold":Bs("heading-xxl-bold"),"heading-xl-light":Bs("heading-xl-light"),"heading-xl-regular":Bs("heading-xl-regular"),"heading-xl-semibold":Bs("heading-xl-semibold"),"heading-xl-bold":Bs("heading-xl-bold"),"heading-lg-light":Bs("heading-lg-light"),"heading-lg-regular":Bs("heading-lg-regular"),"heading-lg-semibold":Bs("heading-lg-semibold"),"heading-lg-bold":Bs("heading-lg-bold"),"heading-md-light":Bs("heading-md-light"),"heading-md-regular":Bs("heading-md-regular"),"heading-md-semibold":Bs("heading-md-semibold"),"heading-md-bold":Bs("heading-md-bold"),"heading-sm-light":Bs("heading-sm-light"),"heading-sm-regular":Bs("heading-sm-regular"),"heading-sm-semibold":Bs("heading-sm-semibold"),"heading-sm-bold":Bs("heading-sm-bold"),"heading-xs-light":Bs("heading-xs-light"),"heading-xs-regular":Bs("heading-xs-regular"),"heading-xs-semibold":Bs("heading-xs-semibold"),"heading-xs-bold":Bs("heading-xs-bold"),"body-baseline-light":Bs("body-baseline-light"),"body-baseline-regular":Bs("body-baseline-regular"),"body-baseline-semibold":Bs("body-baseline-semibold"),"body-baseline-bold":Bs("body-baseline-bold"),"body-md-light":Bs("body-md-light"),"body-md-regular":Bs("body-md-regular"),"body-md-semibold":Bs("body-md-semibold"),"body-md-bold":Bs("body-md-bold"),"body-sm-light":Bs("body-sm-light"),"body-sm-regular":Bs("body-sm-regular"),"body-sm-semibold":Bs("body-sm-semibold"),"body-sm-bold":Bs("body-sm-bold"),"body-xs-light":Bs("body-xs-light"),"body-xs-regular":Bs("body-xs-regular"),"body-xs-semibold":Bs("body-xs-semibold"),"body-xs-bold":Bs("body-xs-bold"),"form-label":Bs("form-label"),"form-description":Bs("form-description")},ks={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},zs=e=>r=>{var t;const s=r.theme,i=Qt(ks,null==s?void 0:s.motionScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.motion)?Jt(i,e,s.overrides.motion):i[e]},Ss={"duration-150":zs("duration-150"),"duration-250":zs("duration-250"),"duration-350":zs("duration-350"),"duration-500":zs("duration-500"),"duration-800":zs("duration-800"),"duration-1000":zs("duration-1000"),"ease-default":zs("ease-default"),"ease-standard":zs("ease-standard"),"ease-entrance":zs("ease-entrance"),"ease-exit":zs("ease-exit")},Os={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},js=e=>r=>{var t;const s=r.theme,i=Qt(Os,null==s?void 0:s.radiusScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.radius)?`${Jt(i,e,s.overrides.radius)}px`:`${i[e]}px`},_s={none:js("none"),xs:js("xs"),sm:js("sm"),md:js("md"),lg:js("lg"),full:js("full")},Ts={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ls=e=>r=>{var t;const s=r.theme,i=Qt(Ts,null==s?void 0:s.spacingScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.spacing)?`${Jt(i,e,s.overrides.spacing)}px`:`${i[e]}px`},Rs={"spacing-0":Ls("spacing-0"),"spacing-4":Ls("spacing-4"),"spacing-8":Ls("spacing-8"),"spacing-12":Ls("spacing-12"),"spacing-16":Ls("spacing-16"),"spacing-20":Ls("spacing-20"),"spacing-24":Ls("spacing-24"),"spacing-32":Ls("spacing-32"),"spacing-40":Ls("spacing-40"),"spacing-48":Ls("spacing-48"),"spacing-64":Ls("spacing-64"),"spacing-72":Ls("spacing-72"),"layout-xs":Ls("layout-xs"),"layout-sm":Ls("layout-sm"),"layout-md":Ls("layout-md"),"layout-lg":Ls("layout-lg"),"layout-xl":Ls("layout-xl"),"layout-xxl":Ls("layout-xxl"),"layout-xxxl":Ls("layout-xxxl")},Hs=Object.assign(Object.assign({},ds),{Primitive:os}),Ms=Object.assign(Object.assign({},As),{Spec:Fs}),Is=Ss,Ps=Object.assign(Object.assign({},ts),{Util:hs}),Vs=Rs,Ns=_s,Ws=ys,Xs=vs,Ys={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}};v((()=>k(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.97fee541.js")).LottieSpinner}})))),E.div`
    margin: 0 auto;
    padding: ${Vs["spacing-32"]} ${Vs["spacing-16"]};
`,v((()=>k(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.2338887e.js")).LottieLoadingDots}})))),E.div`
    margin: 0 auto;
`;const Us=v((()=>k(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.7a68d7d8.js")).LottieLoadingDotsSpinner}})))),Ks=r=>{var{color:t}=r,s=A(r,["color"]);const i=C(),n=t||Hs["icon-primary"]({theme:i});return e(Gs,Object.assign({},s,{children:e(x,{fallback:e(qs,{}),children:e(Us,{color:n})})}))},qs=()=>e("div",{style:{height:"200px",width:"200px"}}),Gs=E.div`
    margin: 0 auto;
`,Zs=D`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Js=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>$`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Qs=$`
    animation: ${Is["duration-150"]} ${Is["ease-default"]} ${Zs};
    width: 100%;
    height: 100%;
    transition: color ${Is["duration-150"]} ${Is["ease-default"]};
`,ei=E(s)`
    ${Qs}
    color: ${Hs["icon-primary-subtlest"]};
`,ri=E(i)`
    ${Qs}
    color: ${Hs["icon-disabled-subtle"]};
`,ti=E(n)`
    ${Qs}
    color: ${e=>e.$disabled?Hs["icon-disabled-subtle"](e):Hs["icon-selected"](e)};
`,si=E(o)`
    ${Qs}
    color: ${e=>e.$disabled?Hs["icon-disabled-subtle"](e):Hs["icon-selected"](e)};
`,ii=E.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${ei},
        &:hover
        + ${ti},
        &:hover
        + ${si} {
        color: ${e=>!e.disabled&&Hs["icon-hover"](e)};
    }
`,ni=t=>{var{className:s,checked:i,disabled:n,indeterminate:o,onChange:a,onKeyPress:l,displaySize:g="default"}=t,d=A(t,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=c(null);y((()=>{u.current&&(u.current.indeterminate=null!=o&&o)}),[o]);const m=e=>{if(!n){const r=e;if(!(" "===r.key||"change"===e.type))return;a&&a(e),l&&l(r)}};return r(Js,{className:s,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:n?-1:0,onKeyDown:m,$displaySize:g,$disabled:n,$unchecked:!(o||i||n),children:[e(ii,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:m,disabled:n},d)),o?e(si,{$disabled:n,"data-testid":"indeterminate"}):i?e(ti,{$disabled:n,"data-testid":"checkmark"}):n?e(ri,{"data-testid":"empty-disabled-checkbox"}):e(ei,{$disabled:n,"data-testid":"empty-checkbox"})]})},oi=s=>i=>{switch(s){case"maintenance":return r(t,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const s=i,n=Math.floor(s.secondsLeft/60),o=s.secondsLeft%60;return r(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var ai;!function(e){e.imgAttributeHelper=(e,r)=>{const{base:t,md:s,lg:i,width:n,height:o}=e;return{srcSet:`${t} 400w, ${s} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${Ws["sm-max"]({theme:r})}px) 400px, (max-width: ${Ws["lg-max"]({theme:r})}px) 800px, 1200px`,width:n,height:o}}}(ai||(ai={}));const{imgAttributeHelper:li}=ai,gi={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},di={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},ci=Object.assign(Object.assign({},gi),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),ui=Object.assign(Object.assign({},gi),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),mi=(e,r)=>new Map([["400",{img:li(e[400],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:li(e[403],r),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:li(e[404],r),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:li(e[408],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:li(e[500],r),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:li(e[502],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:li(e[503],r),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:li(e[504],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:li(e.confirmation,r),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:li(e["link-error"],r),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:li(e.logout,r),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:li(e["insufficient-credits"],r),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:li(e.inactivity,r),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:oi("inactivity")}],["maintenance",{img:li(e[503],r),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:oi("maintenance")}],["no-item-found",{img:li(e["no-item-found"],r),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:li(e["payment-unsuccessful"],r),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:li(e["transfer-unsuccessful"],r),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:li(e["unsupported-browser"],r),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:li(e["unsupported-browser"],r),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:li(e.warning,r),title:"Are you sure?",description:"You will lose your progress."}]]),hi=E.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,bi=D`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,pi=E.div`
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
    animation: ${bi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,yi=E(pi)`
    animation-delay: -0.45s;
`,fi=E(pi)`
    animation-delay: -0.3s;
`,vi=E(pi)`
    animation-delay: -0.15s;
`,xi=E.button`
    padding: ${Vs["spacing-8"]} ${Vs["spacing-16"]};
    min-width: 4rem;
    border: ${Ps["width-010"]} ${Ps.solid} transparent;
    border-radius: ${Ns.sm};
    transition: all ${Is["duration-250"]} ${Is["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return $`
                    background-color: ${Hs.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Hs["border-error-strong"]:Hs["border-primary"]};

                    color: ${e.$buttonIsDanger?Hs["text-error"]:Hs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Hs["bg-hover-neutral"]};
                    }
                `;case"light":return $`
                    background-color: ${Hs.bg};
                    border-color: ${Hs.border};

                    color: ${e.$buttonIsDanger?Hs["text-error"]:Hs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Hs["bg-hover-neutral"]};
                    }
                `;case"link":return $`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Hs["text-error"]:Hs["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Hs["bg-hover-neutral"]};
                    }
                `;case"disabled":return $`
                    background-color: ${Hs["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Hs["text-disabled"]};
                `;default:return $`
                    background-color: ${e.$buttonIsDanger?Hs["bg-error-strong"]:Hs["bg-primary"]};

                    ${Xs.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Hs["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Hs["bg-error-strong-hover"]:Hs["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return $`
                    height: 2.5rem;
                    ${Ms["body-md-semibold"]}

                    ${Xs.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return $`
                    height: 4rem;
                    ${Ms["heading-md-semibold"]}

                    ${Xs.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return $`
                    height: 3rem;
                    ${Ms["heading-xs-semibold"]}

                    ${Xs.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,wi=E((({color:t,className:s,size:i})=>r(hi,{className:s,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(pi,{id:"inner1"}),e(yi,{id:"inner2"}),e(fi,{id:"inner3"}),e(vi,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Fi=(t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,g=A(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(xi,Object.assign({ref:s,"data-testid":g["data-testid"]||"button",disabled:n},d,g,{children:[o&&e(wi,{}),e("span",{children:i})]}))};Fi.displayName="Button.Default";const Ei=(t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,g=A(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(xi,Object.assign({ref:s,"data-testid":g["data-testid"]||"button",disabled:n},d,g,{children:[o&&e(wi,{}),e("span",{children:i})]}))};Ei.displayName="Button.Small";const $i=(t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,g=A(t,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(xi,Object.assign({ref:s,"data-testid":g["data-testid"]||"button",disabled:n},d,g,{children:[o&&e(wi,{}),e("span",{children:i})]}))};$i.displayName="Button.Large";const Ci={Default:d.forwardRef(Fi),Small:d.forwardRef(Ei),Large:d.forwardRef($i)},Di=e=>$`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Bi=(e,r,t=!1)=>$`
        ${Ms[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Ai=e=>{if(e)return $`
            ${Di(e)}
        `},ki=(e,r)=>$`
    ${Bi(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?$`
            display: block;
            ${Ai(t)}
        `:e?$`
            display: inline;
        `:$`
            display: block;
            ${Ai(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Hs.text};
`;var zi;!function(t){const s=(e,r,t)=>{const s=E(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ki(r,e)}
        `;return s.displayName=`Typography.${t}`,s};t.HeadingXXL=s("h1","heading-xxl","HeadingXXL"),t.HeadingXL=s("h2","heading-xl","HeadingXL"),t.HeadingLG=s("h3","heading-lg","HeadingLG"),t.HeadingMD=s("h4","heading-md","HeadingMD"),t.HeadingSM=s("h5","heading-sm","HeadingSM"),t.HeadingXS=s("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=E.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>ki(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const n=(t,s)=>{const i=E.a`
            ${e=>$`
                ${Bi(t,e.weight||"regular")}
                color: ${Hs.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Hs["text-hover"]};
                }
            `}
        `,n=t=>{var{external:s=!1,children:n}=t,o=A(t,["external","children"]);return r(i,Object.assign({},o,{children:[n,s&&e(Si,{})]}))};return n.displayName=`Typography.${s}`,n};t.LinkBL=n("body-baseline","LinkBL"),t.LinkMD=n("body-md","LinkMD"),t.LinkSM=n("body-sm","LinkSM"),t.LinkXS=n("body-xs","LinkXS")}(zi||(zi={}));const Si=E(B)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Oi=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,ji=E.img`
    position: relative;
    width: 400px;
    height: auto;

    ${Xs.MaxWidth.sm} {
        width: 320px;
    }

    ${Xs.MaxWidth.xs} {
        width: 288px;
    }

    ${Xs.MaxWidth.xxs} {
        width: 240px;
    }
`,_i=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,Ti=E(zi.HeadingMD)`
    margin: ${Vs["spacing-32"]} 0 ${Vs["spacing-16"]};
    text-align: center;
`,Li=E.div`
    color: ${Hs.text};
    text-align: center;

    ${(e=>{const{textSize:r}=e||{};return $`
        // Text styling
        ${r&&Ms[`${r}-regular`]}

        strong {
            font-weight: ${Ms.Spec["weight-semibold"]};
            ${r&&Ms[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Ms.Spec["weight-semibold"]};
            ${r&&Ms[`${r}-semibold`]}
            color: ${Hs.hyperlink};
            text-decoration: none;

            svg {
                color: ${Hs["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Hs["hyperlink-hover"]};

                svg {
                    color: ${Hs["icon-hover"]};
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
`,Ri=E(Ci.Default)`
    margin: ${Vs["spacing-32"]} auto 0;
    width: 21rem;

    ${Xs.MaxWidth.sm} {
        width: 100%;
    }
`,Hi=t=>{var{type:s,img:i,title:n,description:o,actionButton:a,additionalProps:l,imageOnly:g,illustrationScheme:d}=t,c=A(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const u=C(),m=((e,r,t)=>{switch(r){case"bookingsg":return mi(di,t).get(e);case"ccube":return mi(ci,t).get(e);case"mylegacy":return mi(ui,t).get(e);default:return mi(gi,t).get(e)}})(s,d||(u||Ys).resourceScheme,u),h=c["data-testid"]||"error-display",b=()=>{var e,r;switch(s){case"maintenance":{const r=l;return l&&r.dateString?null===(e=null==m?void 0:m.renderDescription)||void 0===e?void 0:e.call(m,r):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(r=null==m?void 0:m.renderDescription)||void 0===r?void 0:r.call(m,e):o||void 0}default:return o||void 0}};if(!m)return null;const p=Object.assign(Object.assign(Object.assign(Object.assign({},m),i&&{img:i}),n&&{title:n}),b()&&{description:b()});return r(Oi,Object.assign({},c,{"data-testid":h,children:[e(ji,Object.assign({},p.img,{alt:"","data-id":"error-display-image"})),!g&&(p.title||p.description?r(_i,{children:[p.title&&("string"==typeof p.title?e(Ti,{"data-testid":`${h}--title`,"data-id":"error-display-title",weight:"semibold",children:p.title}):p.title),p.description&&e(Li,{"data-testid":`${h}--description`,"data-id":"error-display-description",children:"string"==typeof p.description?e("p",{children:p.description}):p.description})]}):null),a&&(()=>{const r=Object.assign({children:"Proceed"},a);return e(Ri,Object.assign({},r))})()]}))},Mi=$`
    outline-offset: -1px;
    outline: ${Ps["width-020"]} ${Ps.solid} ${Hs["border-focus"]};
`,Ii=$`
    outline-color: ${Hs["border-focus"]};
`,Pi=$`
    outline-color: ${Hs["border-disabled"]};
`,Vi=$`
    outline-color: ${Hs["border-error-focus"]};
`,Ni=E.div`
    border: ${Ps["width-010"]} ${Ps.solid} ${Hs.border};
    border-radius: ${Ns.sm};
    background: ${Hs.bg};

    :focus-within {
        ${Mi}
    }
    ${e=>e.$focused&&Mi}

    ${e=>e.$readOnly?$`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ii}
                }
                ${e.$focused&&Ii}
            `:e.$disabled?$`
                background: ${Hs["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Pi}
                }
                ${e.$focused&&Pi}
            `:e.$error?$`
                border-color: ${Hs["border-error"]};

                :focus-within {
                    ${Vi}
                }
                ${e.$focused&&Vi}
            `:void 0}
`;E(Ni)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Vs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,E.input`
    ${e=>"small"===e.$variant?Ms["body-md-regular"]:Ms["body-baseline-regular"]}
    color: ${Hs.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Hs["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Hs["text-subtler"]};
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
`;const Wi=E.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Ps["width-010"]} ${Ps.solid}
            ${Hs["border-focus"]};
        border-radius: ${Ns.sm};
    }
`,Xi=Hs.border,Yi=Hs.text,Ui=E.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Ps["width-010"]} ${Ps.solid} ${Xi};
    border-radius: ${Ns.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Ki=E.div`
    flex: 1;
`,qi=E.table`
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

    ${e=>{if(e.$stickyHeader)return $`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,Gi=E.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Ps["width-010"]} ${Ps.solid} ${Xi}`:"none"};
        }
    }
`,Zi=E.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const r=e.$left?`${e.$left}px`:"0",t=e.$width?`${e.$width}px`:"100%";return $`
                position: fixed;
                left: ${r};
                width: ${t};
            `}return $`
                position: sticky;
                left: 0;
            `}};
`,Ji=E(Wi)`
    ${Ms["body-md-semibold"]}
    cursor: pointer;
    color: ${Hs["text-primary"]};
    transition: ${Is["duration-150"]} ${Is["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Hs["text-hover"]};
    }
`,Qi=E.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&$`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${Ns.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Ps["width-010"]} ${Ps.solid} ${Xi};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Ps["width-010"]} ${Ps.solid} ${Xi};
    border-radius: 0 0 ${Ns.sm} ${Ns.sm};
    background-color: ${Hs["bg-selected"]};
    transition: all 300ms ease;
`,en=E.tr`
    background-color: ${Hs["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Ps["width-010"]} ${Ps.solid} ${Xi};
`,rn=E.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Yi};
    border-bottom: ${Ps["width-010"]} ${Ps.solid} ${Xi};
    ${e=>{if(e.$isCheckbox)return $`
                width: 4rem;
            `}};
`,tn=E.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Yi};
        margin-left: 0.5rem;
    }
`,sn=E.tr`
    background-color: ${e=>e.$isSelected?$`
                ${Hs["bg-selected"]};
            `:e.$alternating?$`
                ${Hs["bg-strong"]};
            `:$`
                ${Hs.bg};
            `};
    border-top: ${Ps["width-010"]} ${Ps.solid} ${Xi};
    &:hover {
        ${e=>{if(e.$isSelectable)return $`
                    background-color: ${Hs["bg-hover-strong"]};
                `}};
    }
`,nn=E.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Yi};
    border-bottom: ${Ps["width-010"]} ${Ps.solid} ${Xi};
`,on=E(zi.BodyBL)`
    ${Di(2)}
    text-overflow: ellipsis;
`,an=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,ln=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,gn=E(zi.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,dn=E.td`
    padding: 4rem 0;
`,cn=s=>{var{id:i,headers:n,rows:o,className:d,sortIndicators:m,alternatingRows:h,loadState:b="success",enableMultiSelect:p,selectedIds:f,disabledIds:v,enableActionBar:x,enableSelectAll:F,enableStickyHeader:E,emptyView:$,actionBarContent:C,renderCustomEmptyView:D,onHeaderClick:B,onSelect:k,onSelectAll:z,onClearSelectionClick:S}=s,O=A(s,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=c(null),_=c(null),L=c(null),H=c(null),M=c(null),[I,P]=u(!1),[V,N]=u(!1),[W,X]=u(!1),[Y,U]=u(!1),[K,q]=u(!1),{ref:G,inView:Z}=function({threshold:e,delay:r,trackVisibility:t,rootMargin:s,root:i,triggerOnce:n,skip:o,initialInView:a,fallbackInView:l,onChange:d}={}){var c;const[u,m]=g.useState(null),h=g.useRef(),[b,p]=g.useState({inView:!!a,entry:void 0});h.current=d,g.useEffect((()=>{if(o||!u)return;let a;return a=T(u,((e,r)=>{p({inView:e,entry:r}),h.current&&h.current(e,r),r.isIntersecting&&n&&a&&(a(),a=void 0)}),{root:i,rootMargin:s,threshold:e,trackVisibility:t,delay:r},l),()=>{a&&a()}}),[Array.isArray(e)?e.toString():e,u,i,s,n,o,t,l,r]);const y=null==(c=b.entry)?void 0:c.target,f=g.useRef();u||!y||n||o||f.current===y||(f.current=y,p({inView:!!a,entry:void 0}));const v=[m,b.inView,b.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),J=w((()=>{if(!M.current||!H.current)return;const e=M.current.scrollHeight>M.current.clientHeight;P(e),e?H.current.style.transform="translateY(0)":oe()}),[]);y((()=>{J()}),[]),function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,s=e.refreshMode,i=e.refreshRate,n=void 0===i?1e3:i,o=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,g=e.handleHeight,d=void 0===g||g,m=e.targetRef,h=e.observerOptions,b=e.onResize,p=c(t),y=c(null),f=null!=m?m:y,v=c(),x=u({width:void 0,height:void 0}),w=x[0],F=x[1];ke((function(){if(!De()){var e=Ae(b,F,l,d);v.current=$e((function(r){(l||d)&&r.forEach((function(r){var t=r&&r.contentRect||{},s=t.width,i=t.height;!p.current&&!De()&&e({width:s,height:i}),p.current=!1}))}),s,n,o);var r=new window.ResizeObserver(v.current);return f.current&&r.observe(f.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[s,n,o,l,d,b,h,f.current]),R({ref:f},w)}({onResize:J});((e,r,t="window",s)=>{const i=c();y((()=>{i.current=r}),[r]),y((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const n=e=>{var r;return null===(r=i.current)||void 0===r?void 0:r.call(i,e)};return r.addEventListener(e,n,s),()=>{null==r||r.removeEventListener(e,n,s)}}),[e,t])})("scroll",(()=>{requestAnimationFrame((()=>{I?ne():oe()})),M.current&&X(M.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),y((()=>{ae()}),[o]);const Q=()=>(null==f?void 0:f.length)===(null==o?void 0:o.length),ee=e=>!!(null==f?void 0:f.includes(e)),re=e=>!!h&&e%2==1,te=e=>!!(null==v?void 0:v.includes(e)),se=e=>{if(O["data-testid"])return`${O["data-testid"]}-${e}`},ie=()=>n.length+(p?1:0),ne=()=>{if(!M.current)return;const e=M.current.getBoundingClientRect();U(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},oe=()=>{if(!(j.current&&_.current&&M.current&&H.current&&L.current))return;const e=_.current.getBoundingClientRect();if(e.top>window.innerHeight){const r=e.bottom-window.innerHeight,t=j.current.getBoundingClientRect().height-L.current.clientHeight-32,s=Math.min(r,t);H.current.style.transform=`translateY(-${s}px)`}else H.current.style.transform="translateY(0)"},ae=()=>{j.current&&M.current&&q(j.current.clientHeight+(x?56:0)<M.current.clientHeight)},le=t=>{const{fieldKey:s,label:i,clickable:n=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e(rn,{"data-testid":se(`header-${s}`),$clickable:n,onClick:()=>n&&(null==B?void 0:B(s)),style:o,$isCheckbox:!1,children:r(tn,{children:["string"==typeof i?e(zi.BodyBL,{weight:"bold",children:i}):i,ge(s)]})},s)},ge=r=>{const s=null==m?void 0:m[r];return s?"asc"===s?e(a,{"data-testid":se(`header-${r}-arrowup`)}):e(l,{"data-testid":se(`header-${r}-arrowdown`)}):e(t,{})},de=()=>e(rn,{"data-testid":se("header-selection"),$clickable:!1,$isCheckbox:!0,children:e(an,{children:F&&e(ni,{checked:Q(),indeterminate:!!f&&0!==f.length&&!Q(),onClick:()=>{z&&z(Q())}})})}),ce=(r,t)=>{const s="string"!=typeof r?r.style:void 0,i="string"==typeof r?r:r.fieldKey,n=t.id.toString(),o=t[i],a=`${n}-${i}`;return e(nn,{"data-testid":se(`row-${a}`),style:s,$isCheckbox:!1,children:"string"==typeof o||"number"==typeof o?e(on,{children:o}):"function"==typeof o?o(t,{isSelected:ee(n)}):o},a)},ue=r=>e(nn,{"data-testid":se(`row-${r}-selection`),$isCheckbox:!0,children:e(an,{children:e(ni,{checked:ee(r),onClick:()=>{k&&k(r,!ee(r))},disabled:te(r)})})}),me=()=>e(Hi,Object.assign({type:"no-item-found"},$,{title:(null==$?void 0:$.title)?"string"==typeof $.title?e(gn,{weight:"bold",children:$.title}):$.title:e(gn,{weight:"bold",children:"No <items> found"}),description:(null==$?void 0:$.description)?$.description:"No matching rows"}));return r(Ui,{id:i||"table-wrapper","data-testid":O["data-testid"]||"table",className:d,ref:M,onScroll:()=>{I&&M.current&&N(M.current.scrollTop+M.current.clientHeight>=M.current.scrollHeight)},children:[e(Ki,{children:r(qi,{$end:W,$scrollable:I,ref:j,$stickyHeader:E,children:[e("thead",{ref:L,children:r(en,{children:[p&&de(),n.map(le)]})}),e(Gi,{$showLastRowBottomBorder:K,children:"success"===b?!o||o.length<1?e("tr",{children:e(dn,{colSpan:ie(),children:D?D():me()})}):e(t,{children:null==o?void 0:o.map(((e,t)=>r(sn,{"data-testid":se(`row-${e.id.toString()}`),$alternating:re(t),$isSelectable:p,$isSelected:ee(e.id.toString()),children:[p&&ue(e.id.toString()),n.map((r=>ce(r,e)))]},e.id.toString())))}):e("tr",{children:e("td",{colSpan:ie(),children:e(ln,{children:"loading"===b&&e(Ks,{})})})})})]})}),x&&f&&f.length>0&&(()=>{var t,s,i,n;const o=null!==(t=null==f?void 0:f.length)&&void 0!==t?t:0;return e(Zi,{ref:H,$fixed:Y,$left:null===(i=null===(s=null==j?void 0:j.current)||void 0===s?void 0:s.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(n=null==j?void 0:j.current)||void 0===n?void 0:n.clientWidth,children:r(Qi,{$float:(I?!V:!Z)||Y,$scrollable:I,children:[e(zi.BodyMD,{weight:"semibold",children:`${o} item${o>1?"s":""} selected`}),e(Ji,{type:"button",onClick:S,children:"Clear selection"}),C]})})})(),e("div",{ref:e=>{_.current=e,G(e)}})]})};export{cn as D,ze as c};
//# sourceMappingURL=index.c5d6f8c5.js.map
