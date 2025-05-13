import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import{SquareIcon as s,SquareFillIcon as i,SquareTickFillIcon as n,MinusSquareFillIcon as o,ArrowUpIcon as a,ArrowDownIcon as l}from"@lifesg/react-icons";import*as d from"react";import g,{useRef as c,useState as u,isValidElement as m,createRef as h,cloneElement as b,PureComponent as p,useEffect as y,useLayoutEffect as f,lazy as v,Suspense as x,useCallback as w}from"react";import{findDOMNode as F}from"react-dom";import E,{css as $,useTheme as C,keyframes as B}from"styled-components";import{ExternalIcon as D}from"@lifesg/react-icons/external";function A(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(t[s[i]]=e[s[i]])}return t}function k(e,r,t,s){return new(t||(t=Promise))((function(i,n){function o(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(o,a)}l((s=s.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var z=new Map,S=new WeakMap,O=0;function j(e){return Object.keys(e).sort().filter((r=>void 0!==e[r])).map((r=>`${r}_${"root"===r?function(e){return e?(S.has(e)||(O+=1,S.set(e,O.toString())),S.get(e)):"0"}(e.root):e[r]}`)).toString()}function _(e,r,t={},s=undefined){if(void 0===window.IntersectionObserver&&void 0!==s){const i=e.getBoundingClientRect();return r(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof t.threshold?t.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:n,elements:o}=function(e){const r=j(e);let t=z.get(r);if(!t){const s=new Map;let i;const n=new IntersectionObserver((r=>{r.forEach((r=>{var t;const n=r.isIntersecting&&i.some((e=>r.intersectionRatio>=e));e.trackVisibility&&void 0===r.isVisible&&(r.isVisible=n),null==(t=s.get(r.target))||t.forEach((e=>{e(n,r)}))}))}),e);i=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:n,elements:s},z.set(r,t)}return t}(t),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(r),n.observe(e),function(){a.splice(a.indexOf(r),1),0===a.length&&(o.delete(e),n.unobserve(e)),0===o.size&&(n.disconnect(),z.delete(i))}}var T=function(e,r){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},T(e,r)};var L=function(){return L=Object.assign||function(e){for(var r,t=1,s=arguments.length;t<s;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},L.apply(this,arguments)};var R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var H=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},M="object"==typeof R&&R&&R.Object===Object&&R,I="object"==typeof self&&self&&self.Object===Object&&self,P=M||I||Function("return this")(),V=P,N=function(){return V.Date.now()},W=/\s/;var X=function(e){for(var r=e.length;r--&&W.test(e.charAt(r)););return r},Y=/^\s+/;var U=function(e){return e?e.slice(0,X(e)+1).replace(Y,""):e},K=P.Symbol,q=K,G=Object.prototype,Z=G.hasOwnProperty,J=G.toString,Q=q?q.toStringTag:void 0;var ee=function(e){var r=Z.call(e,Q),t=e[Q];try{e[Q]=void 0;var s=!0}catch(e){}var i=J.call(e);return s&&(r?e[Q]=t:delete e[Q]),i},re=Object.prototype.toString;var te=ee,se=function(e){return re.call(e)},ie=K?K.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ie&&ie in Object(e)?te(e):se(e)},oe=function(e){return null!=e&&"object"==typeof e};var ae=U,le=H,de=function(e){return"symbol"==typeof e||oe(e)&&"[object Symbol]"==ne(e)},ge=/^[-+]0x[0-9a-f]+$/i,ce=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,me=parseInt;var he=H,be=N,pe=function(e){if("number"==typeof e)return e;if(de(e))return NaN;if(le(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=le(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=ae(e);var t=ce.test(e);return t||ue.test(e)?me(e.slice(2),t?2:8):ge.test(e)?NaN:+e},ye=Math.max,fe=Math.min;var ve=function(e,r,t){var s,i,n,o,a,l,d=0,g=!1,c=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=s,n=i;return s=i=void 0,d=r,o=e.apply(n,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||c&&e-d>=n}function b(){var e=be();if(h(e))return p(e);a=setTimeout(b,function(e){var t=r-(e-l);return c?fe(t,n-(e-d)):t}(e))}function p(e){return a=void 0,u&&s?m(e):(s=i=void 0,o)}function y(){var e=be(),t=h(e);if(s=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(b,r),g?m(e):o}(l);if(c)return clearTimeout(a),a=setTimeout(b,r),m(l)}return void 0===a&&(a=setTimeout(b,r)),o}return r=pe(r)||0,he(t)&&(g=!!t.leading,n=(c="maxWait"in t)?ye(pe(t.maxWait)||0,r):n,u="trailing"in t?!!t.trailing:u),y.cancel=function(){void 0!==a&&clearTimeout(a),d=0,s=l=i=a=void 0},y.flush=function(){return void 0===a?o:p(be())},y},xe=ve,we=H;var Fe=function(e,r,t){var s=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return we(t)&&(s="leading"in t?!!t.leading:s,i="trailing"in t?!!t.trailing:i),xe(e,r,{leading:s,maxWait:r,trailing:i})},Ee=function(e,r,t,s){switch(r){case"debounce":return ve(e,t,s);case"throttle":return Fe(e,t,s);default:return e}},$e=function(e){return"function"==typeof e},Ce=function(){return"undefined"==typeof window},Be=function(e){return e instanceof Element||e instanceof HTMLDocument},De=function(e,r,t,s){return function(i){var n=i.width,o=i.height;r((function(r){return r.width===n&&r.height===o||r.width===n&&!s||r.height===o&&!t?r:(e&&$e(e)&&e(n,o),{width:n,height:o})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,s=e.observerOptions;if(!Ce()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,s)))}},t.getElement=function(){var e=t.props,r=e.querySelector,s=e.targetDomEl;if(Ce())return null;if(r)return document.querySelector(r);if(s&&Be(s))return s;if(t.targetRef&&Be(t.targetRef.current))return t.targetRef.current;var i=F(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,s=r.handleWidth,i=void 0===s||s,n=r.handleHeight,o=void 0===n||n,a=r.onResize;if(i||o){var l=De(a,t.setState.bind(t),i,o);e.forEach((function(e){var r=e&&e.contentRect||{},s=r.width,i=r.height;!t.skipOnMount&&!Ce()&&l({width:s,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,s=e.children;return $e(r)?"renderProp":$e(s)?"childFunction":m(s)?"child":Array.isArray(s)?"childArray":"parent"};var s=r.skipOnMount,i=r.refreshMode,n=r.refreshRate,o=void 0===n?1e3:n,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=s,t.targetRef=h(),t.observableElement=null,Ce()||(t.resizeHandler=Ee(t.createResizeHandler,i,o,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}T(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ce()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,s=r.children,i=r.nodeType,n=void 0===i?"div":i,o=this.state,a={width:o.width,height:o.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(a);case"childFunction":return(e=s)(a);case"child":if((e=s).type&&"string"==typeof e.type){var l=function(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(t[s[i]]=e[s[i]])}return t}(a,["targetRef"]);return b(e,l)}return b(e,a);case"childArray":return(e=s).map((function(e){return!!e&&b(e,a)}));default:return d.createElement(n,null)}}}(p);var Ae=Ce()?y:f;var ke="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ze(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Se=Array.isArray,Oe="object"==typeof ke&&ke&&ke.Object===Object&&ke,je="object"==typeof self&&self&&self.Object===Object&&self,_e=Oe||je||Function("return this")(),Te=_e.Symbol,Le=Te,Re=Object.prototype,He=Re.hasOwnProperty,Me=Re.toString,Ie=Le?Le.toStringTag:void 0;var Pe=function(e){var r=He.call(e,Ie),t=e[Ie];try{e[Ie]=void 0;var s=!0}catch(e){}var i=Me.call(e);return s&&(r?e[Ie]=t:delete e[Ie]),i},Ve=Object.prototype.toString;var Ne=Pe,We=function(e){return Ve.call(e)},Xe=Te?Te.toStringTag:void 0;var Ye=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Xe&&Xe in Object(e)?Ne(e):We(e)};var Ue=Ye,Ke=function(e){return null!=e&&"object"==typeof e};var qe=function(e){return"symbol"==typeof e||Ke(e)&&"[object Symbol]"==Ue(e)},Ge=Se,Ze=qe,Je=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Qe=/^\w*$/;var er=function(e,r){if(Ge(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Ze(e))||(Qe.test(e)||!Je.test(e)||null!=r&&e in Object(r))};var rr=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},tr=Ye,sr=rr;var ir,nr=function(e){if(!sr(e))return!1;var r=tr(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},or=_e["__core-js_shared__"],ar=(ir=/[^.]+$/.exec(or&&or.keys&&or.keys.IE_PROTO||""))?"Symbol(src)_1."+ir:"";var lr=function(e){return!!ar&&ar in e},dr=Function.prototype.toString;var gr=nr,cr=lr,ur=rr,mr=function(e){if(null!=e){try{return dr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},hr=/^\[object .+?Constructor\]$/,br=Function.prototype,pr=Object.prototype,yr=br.toString,fr=pr.hasOwnProperty,vr=RegExp("^"+yr.call(fr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var xr=function(e,r){return null==e?void 0:e[r]},wr=function(e){return!(!ur(e)||cr(e))&&(gr(e)?vr:hr).test(mr(e))},Fr=xr;var Er=function(e,r){var t=Fr(e,r);return wr(t)?t:void 0},$r=Er(Object,"create"),Cr=$r;var Br=function(){this.__data__=Cr?Cr(null):{},this.size=0};var Dr=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ar=$r,kr=Object.prototype.hasOwnProperty;var zr=function(e){var r=this.__data__;if(Ar){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return kr.call(r,e)?r[e]:void 0},Sr=$r,Or=Object.prototype.hasOwnProperty;var jr=function(e){var r=this.__data__;return Sr?void 0!==r[e]:Or.call(r,e)},_r=$r;var Tr=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=_r&&void 0===r?"__lodash_hash_undefined__":r,this},Lr=Br,Rr=Dr,Hr=zr,Mr=jr,Ir=Tr;function Pr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}Pr.prototype.clear=Lr,Pr.prototype.delete=Rr,Pr.prototype.get=Hr,Pr.prototype.has=Mr,Pr.prototype.set=Ir;var Vr=Pr;var Nr=function(){this.__data__=[],this.size=0};var Wr=function(e,r){return e===r||e!=e&&r!=r};var Xr=function(e,r){for(var t=e.length;t--;)if(Wr(e[t][0],r))return t;return-1},Yr=Xr,Ur=Array.prototype.splice;var Kr=function(e){var r=this.__data__,t=Yr(r,e);return!(t<0)&&(t==r.length-1?r.pop():Ur.call(r,t,1),--this.size,!0)},qr=Xr;var Gr=function(e){var r=this.__data__,t=qr(r,e);return t<0?void 0:r[t][1]},Zr=Xr;var Jr=function(e){return Zr(this.__data__,e)>-1},Qr=Xr;var et=function(e,r){var t=this.__data__,s=Qr(t,e);return s<0?(++this.size,t.push([e,r])):t[s][1]=r,this},rt=Nr,tt=Kr,st=Gr,it=Jr,nt=et;function ot(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}ot.prototype.clear=rt,ot.prototype.delete=tt,ot.prototype.get=st,ot.prototype.has=it,ot.prototype.set=nt;var at=ot,lt=Er(_e,"Map"),dt=Vr,gt=at,ct=lt;var ut=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var mt=function(e,r){var t=e.__data__;return ut(r)?t["string"==typeof r?"string":"hash"]:t.map},ht=mt;var bt=function(e){var r=ht(this,e).delete(e);return this.size-=r?1:0,r},pt=mt;var yt=function(e){return pt(this,e).get(e)},ft=mt;var vt=function(e){return ft(this,e).has(e)},xt=mt;var wt=function(e,r){var t=xt(this,e),s=t.size;return t.set(e,r),this.size+=t.size==s?0:1,this},Ft=function(){this.size=0,this.__data__={hash:new dt,map:new(ct||gt),string:new dt}},Et=bt,$t=yt,Ct=vt,Bt=wt;function Dt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var s=e[r];this.set(s[0],s[1])}}Dt.prototype.clear=Ft,Dt.prototype.delete=Et,Dt.prototype.get=$t,Dt.prototype.has=Ct,Dt.prototype.set=Bt;var At=Dt;function kt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var s=arguments,i=r?r.apply(this,s):s[0],n=t.cache;if(n.has(i))return n.get(i);var o=e.apply(this,s);return t.cache=n.set(i,o)||n,o};return t.cache=new(kt.Cache||At),t}kt.Cache=At;var zt=kt;var St=function(e){var r=zt(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/\\(\\)?/g,_t=St((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Ot,(function(e,t,s,i){r.push(s?i.replace(jt,"$1"):t||e)})),r}));var Tt=function(e,r){for(var t=-1,s=null==e?0:e.length,i=Array(s);++t<s;)i[t]=r(e[t],t,e);return i},Lt=Se,Rt=qe,Ht=Te?Te.prototype:void 0,Mt=Ht?Ht.toString:void 0;var It=function e(r){if("string"==typeof r)return r;if(Lt(r))return Tt(r,e)+"";if(Rt(r))return Mt?Mt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Pt=It;var Vt=Se,Nt=er,Wt=_t,Xt=function(e){return null==e?"":Pt(e)};var Yt=qe;var Ut=function(e,r){return Vt(e)?e:Nt(e,r)?[e]:Wt(Xt(e))},Kt=function(e){if("string"==typeof e||Yt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var qt=function(e,r){for(var t=0,s=(r=Ut(r,e)).length;null!=e&&t<s;)e=e[Kt(r[t++])];return t&&t==s?e:void 0};var Gt=ze((function(e,r,t){var s=null==e?void 0:qt(e,r);return void 0===s?t:s}));const Zt=(e,r,t)=>Gt(t,r)||Gt(e,r),Jt=(e,r)=>{const t=r||e.defaultValue;return Gt(e.collections,t)},Qt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},es=e=>r=>{var t;const s=r.theme,i=Jt(Qt,null==s?void 0:s.borderScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.border)?`${Zt(i,e,s.overrides.border)}px`:`${i[e]}px`},rs={"width-005":es("width-005"),"width-010":es("width-010"),"width-020":es("width-020"),"width-040":es("width-040"),solid:(ts="solid",e=>{var r;const t=e.theme,s=Jt(Qt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?Zt(s,ts,t.overrides.border):s[ts];return"function"==typeof i?i(e):i})};var ts;const ss={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},is=e=>r=>{var t;const s=r.theme,i=Jt(ss,null==s?void 0:s.colourScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.primitiveColour)?Zt(i,e,s.overrides.primitiveColour):i[e]},ns={"brand-10":is("brand-10"),"brand-20":is("brand-20"),"brand-30":is("brand-30"),"brand-40":is("brand-40"),"brand-50":is("brand-50"),"brand-60":is("brand-60"),"brand-70":is("brand-70"),"brand-80":is("brand-80"),"brand-90":is("brand-90"),"brand-95":is("brand-95"),"brand-100":is("brand-100"),"primary-10":is("primary-10"),"primary-20":is("primary-20"),"primary-30":is("primary-30"),"primary-40":is("primary-40"),"primary-50":is("primary-50"),"primary-60":is("primary-60"),"primary-70":is("primary-70"),"primary-80":is("primary-80"),"primary-90":is("primary-90"),"primary-95":is("primary-95"),"primary-100":is("primary-100"),"secondary-10":is("secondary-10"),"secondary-20":is("secondary-20"),"secondary-30":is("secondary-30"),"secondary-40":is("secondary-40"),"secondary-50":is("secondary-50"),"secondary-60":is("secondary-60"),"secondary-70":is("secondary-70"),"secondary-80":is("secondary-80"),"secondary-90":is("secondary-90"),"secondary-95":is("secondary-95"),"secondary-100":is("secondary-100"),"neutral-10":is("neutral-10"),"neutral-20":is("neutral-20"),"neutral-30":is("neutral-30"),"neutral-40":is("neutral-40"),"neutral-50":is("neutral-50"),"neutral-60":is("neutral-60"),"neutral-70":is("neutral-70"),"neutral-80":is("neutral-80"),"neutral-90":is("neutral-90"),"neutral-95":is("neutral-95"),"neutral-100":is("neutral-100"),"success-10":is("success-10"),"success-20":is("success-20"),"success-30":is("success-30"),"success-40":is("success-40"),"success-50":is("success-50"),"success-60":is("success-60"),"success-70":is("success-70"),"success-80":is("success-80"),"success-90":is("success-90"),"success-95":is("success-95"),"success-100":is("success-100"),"warning-10":is("warning-10"),"warning-20":is("warning-20"),"warning-30":is("warning-30"),"warning-40":is("warning-40"),"warning-50":is("warning-50"),"warning-60":is("warning-60"),"warning-70":is("warning-70"),"warning-80":is("warning-80"),"warning-90":is("warning-90"),"warning-95":is("warning-95"),"warning-100":is("warning-100"),"error-10":is("error-10"),"error-20":is("error-20"),"error-30":is("error-30"),"error-40":is("error-40"),"error-50":is("error-50"),"error-60":is("error-60"),"error-70":is("error-70"),"error-80":is("error-80"),"error-90":is("error-90"),"error-95":is("error-95"),"error-100":is("error-100"),"info-10":is("info-10"),"info-20":is("info-20"),"info-30":is("info-30"),"info-40":is("info-40"),"info-50":is("info-50"),"info-60":is("info-60"),"info-70":is("info-70"),"info-80":is("info-80"),"info-90":is("info-90"),"info-95":is("info-95"),"info-100":is("info-100"),white:is("white"),black:is("black"),"primary-inverse":is("primary-inverse")},os={text:is("neutral-20"),"text-subtle":is("neutral-30"),"text-subtler":is("neutral-50"),"text-subtlest":is("neutral-60"),"text-primary":is("primary-50"),"text-hover":is("primary-40"),"text-selected":is("primary-50"),"text-selected-hover":is("primary-40"),"text-disabled":is("neutral-50"),"text-disabled-subtle":is("neutral-60"),"text-disabled-subtlest":is("neutral-80"),"text-selected-disabled":is("neutral-20"),"text-success":is("success-40"),"text-warning":is("warning-40"),"text-error":is("error-40"),"text-info":is("info-40"),"text-inverse":is("white"),icon:is("neutral-50"),"icon-subtle":is("neutral-60"),"icon-strongest":is("neutral-20"),"icon-primary":is("primary-50"),"icon-primary-subtle":is("primary-60"),"icon-primary-subtlest":is("primary-70"),"icon-hover":is("primary-40"),"icon-selected":is("primary-50"),"icon-selected-hover":is("primary-40"),"icon-disabled":is("neutral-50"),"icon-disabled-subtle":is("neutral-60"),"icon-selected-disabled":is("neutral-60"),"icon-success":is("success-50"),"icon-warning":is("warning-60"),"icon-error":is("error-50"),"icon-error-strong":is("error-40"),"icon-info":is("info-50"),"icon-inverse":is("white"),"icon-primary-inverse":is("primary-inverse"),border:is("neutral-90"),"border-strong":is("neutral-70"),"border-stronger":is("neutral-50"),"border-primary":is("primary-50"),"border-primary-subtle":is("primary-60"),"border-hover":is("primary-90"),"border-hover-strong":is("primary-60"),"border-selected":is("primary-50"),"border-selected-subtle":is("primary-70"),"border-selected-subtlest":is("primary-90"),"border-selected-hover":is("primary-40"),"border-focus":is("primary-60"),"border-focus-strong":is("primary-50"),"border-disabled":is("neutral-90"),"border-selected-disabled":is("neutral-70"),"border-success":is("success-60"),"border-warning":is("warning-60"),"border-error":is("error-60"),"border-error-focus":is("error-60"),"border-error-focus-strong":is("error-40"),"border-error-strong":is("error-40"),"border-info":is("info-60"),bg:is("white"),"bg-strong":is("neutral-100"),"bg-stronger":is("neutral-95"),"bg-strongest":is("neutral-90"),"bg-hover":is("primary-95"),"bg-hover-strong":is("primary-90"),"bg-hover-subtle":is("primary-100"),"bg-hover-neutral":is("neutral-100"),"bg-hover-neutral-strong":is("neutral-90"),"bg-selected":is("primary-95"),"bg-selected-hover":is("primary-90"),"bg-selected-strong":is("primary-90"),"bg-selected-stronger":is("primary-70"),"bg-selected-strongest":is("primary-50"),"bg-selected-strongest-hover":is("primary-40"),"bg-disabled":is("neutral-95"),"bg-selected-disabled":is("neutral-95"),"bg-selected-stronger-disabled":is("neutral-70"),"bg-success":is("success-100"),"bg-success-hover":is("success-95"),"bg-success-strong":is("success-50"),"bg-success-strong-hover":is("success-40"),"bg-warning":is("warning-100"),"bg-warning-hover":is("warning-95"),"bg-warning-strong":is("warning-50"),"bg-warning-strong-hover":is("warning-40"),"bg-info":is("info-100"),"bg-info-hover":is("info-95"),"bg-info-strong":is("info-50"),"bg-info-strong-hover":is("info-40"),"bg-error":is("error-100"),"bg-error-hover":is("error-95"),"bg-error-strong":is("error-50"),"bg-error-strong-hover":is("error-40"),"bg-inverse":is("neutral-20"),"bg-inverse-subtle":is("neutral-30"),"bg-inverse-subtler":is("neutral-50"),"bg-inverse-subtlest":is("neutral-60"),"bg-inverse-hover":is("neutral-40"),"bg-primary":is("primary-50"),"bg-primary-subtle":is("primary-60"),"bg-primary-subtler":is("primary-95"),"bg-primary-subtlest":is("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":is("primary-40"),"bg-primary-subtlest-hover":is("primary-90"),"bg-primary-subtlest-selected":is("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:is("primary-50"),"hyperlink-hover":is("primary-40"),"hyperlink-visited":is("primary-40"),"hyperlink-inverse":is("primary-inverse"),"focus-ring":is("black"),"focus-ring-inverse":is("white")},as={collections:{lifesg:os,bookingsg:os,rbs:os,mylegacy:os,ccube:os,oneservice:os,pa:{text:is("neutral-30"),"text-subtle":is("neutral-40"),"text-subtler":is("neutral-50"),"text-subtlest":is("neutral-70"),"text-primary":is("neutral-10"),"text-hover":is("neutral-70"),"text-selected":is("neutral-20"),"text-selected-hover":is("neutral-10"),"text-disabled":is("neutral-50"),"text-disabled-subtle":is("neutral-60"),"text-disabled-subtlest":is("neutral-80"),"text-selected-disabled":is("neutral-40"),"text-success":is("success-40"),"text-warning":is("warning-40"),"text-error":is("brand-30"),"text-info":is("neutral-40"),"text-inverse":is("neutral-100"),icon:is("neutral-40"),"icon-subtle":is("neutral-50"),"icon-strongest":is("neutral-10"),"icon-primary":is("neutral-10"),"icon-primary-subtle":is("neutral-30"),"icon-primary-subtlest":is("neutral-60"),"icon-hover":is("neutral-70"),"icon-selected":is("brand-20"),"icon-selected-hover":is("brand-10"),"icon-disabled":is("neutral-50"),"icon-disabled-subtle":is("neutral-60"),"icon-selected-disabled":is("neutral-40"),"icon-success":is("success-40"),"icon-warning":is("warning-60"),"icon-error":is("brand-30"),"icon-error-strong":is("brand-10"),"icon-info":is("neutral-40"),"icon-inverse":is("neutral-100"),"icon-primary-inverse":"#F9B371",border:is("neutral-90"),"border-strong":is("neutral-30"),"border-stronger":is("neutral-20"),"border-primary":is("neutral-40"),"border-primary-subtle":is("neutral-60"),"border-hover":is("neutral-80"),"border-hover-strong":is("neutral-10"),"border-selected":is("brand-20"),"border-selected-subtle":is("neutral-40"),"border-selected-subtlest":is("neutral-70"),"border-selected-hover":is("neutral-10"),"border-focus":is("neutral-20"),"border-focus-strong":is("neutral-10"),"border-disabled":is("neutral-90"),"border-selected-disabled":is("neutral-80"),"border-success":is("success-40"),"border-warning":is("warning-60"),"border-error":is("brand-30"),"border-error-focus":is("brand-20"),"border-error-focus-strong":is("brand-10"),"border-error-strong":is("brand-20"),"border-info":is("neutral-40"),bg:is("neutral-100"),"bg-strong":is("neutral-95"),"bg-stronger":is("neutral-90"),"bg-strongest":is("neutral-80"),"bg-hover":is("brand-90"),"bg-hover-strong":is("brand-80"),"bg-hover-subtle":is("neutral-90"),"bg-hover-neutral":is("neutral-90"),"bg-hover-neutral-strong":is("neutral-90"),"bg-selected":is("brand-100"),"bg-selected-hover":is("brand-30"),"bg-selected-strong":is("brand-50"),"bg-selected-stronger":is("brand-40"),"bg-selected-strongest":is("brand-20"),"bg-selected-strongest-hover":is("brand-10"),"bg-disabled":is("neutral-90"),"bg-selected-disabled":is("neutral-90"),"bg-selected-stronger-disabled":is("neutral-80"),"bg-success":is("success-100"),"bg-success-hover":is("success-95"),"bg-success-strong":is("success-50"),"bg-success-strong-hover":is("success-40"),"bg-warning":is("warning-100"),"bg-warning-hover":is("warning-95"),"bg-warning-strong":is("warning-50"),"bg-warning-strong-hover":is("warning-40"),"bg-info":is("neutral-95"),"bg-info-hover":is("info-95"),"bg-info-strong":is("info-50"),"bg-info-strong-hover":is("info-40"),"bg-error":is("brand-100"),"bg-error-hover":is("error-95"),"bg-error-strong":is("error-50"),"bg-error-strong-hover":is("error-40"),"bg-inverse":is("neutral-40"),"bg-inverse-subtle":is("neutral-60"),"bg-inverse-subtler":is("neutral-70"),"bg-inverse-subtlest":is("neutral-80"),"bg-inverse-hover":is("neutral-30"),"bg-primary":is("brand-20"),"bg-primary-subtle":is("brand-60"),"bg-primary-subtler":is("brand-80"),"bg-primary-subtlest":is("brand-100"),"bg-available":is("success-60"),"bg-primary-hover":is("brand-10"),"bg-primary-subtlest-hover":is("brand-80"),"bg-primary-subtlest-selected":is("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:is("neutral-10"),"hyperlink-hover":is("neutral-40"),"hyperlink-visited":is("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":is("black"),"focus-ring-inverse":is("white")}},defaultValue:"lifesg"},ls=e=>r=>{var t;const s=r.theme,i=Jt(as,null==s?void 0:s.colourScheme),n=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.semanticColour)?Zt(i,e,s.overrides.semanticColour):i[e];return"function"==typeof n?n(r):n},ds={text:ls("text"),"text-subtle":ls("text-subtle"),"text-subtler":ls("text-subtler"),"text-subtlest":ls("text-subtlest"),"text-primary":ls("text-primary"),"text-hover":ls("text-hover"),"text-selected":ls("text-selected"),"text-selected-hover":ls("text-selected-hover"),"text-disabled":ls("text-disabled"),"text-disabled-subtle":ls("text-disabled-subtle"),"text-disabled-subtlest":ls("text-disabled-subtlest"),"text-selected-disabled":ls("text-selected-disabled"),"text-success":ls("text-success"),"text-warning":ls("text-warning"),"text-error":ls("text-error"),"text-info":ls("text-info"),"text-inverse":ls("text-inverse"),icon:ls("icon"),"icon-subtle":ls("icon-subtle"),"icon-strongest":ls("icon-strongest"),"icon-primary":ls("icon-primary"),"icon-primary-subtle":ls("icon-primary-subtle"),"icon-primary-subtlest":ls("icon-primary-subtlest"),"icon-hover":ls("icon-hover"),"icon-selected":ls("icon-selected"),"icon-selected-hover":ls("icon-selected-hover"),"icon-disabled":ls("icon-disabled"),"icon-disabled-subtle":ls("icon-disabled-subtle"),"icon-selected-disabled":ls("icon-selected-disabled"),"icon-success":ls("icon-success"),"icon-warning":ls("icon-warning"),"icon-error":ls("icon-error"),"icon-error-strong":ls("icon-error-strong"),"icon-info":ls("icon-info"),"icon-inverse":ls("icon-inverse"),"icon-primary-inverse":ls("icon-primary-inverse"),border:ls("border"),"border-strong":ls("border-strong"),"border-stronger":ls("border-stronger"),"border-primary":ls("border-primary"),"border-primary-subtle":ls("border-primary-subtle"),"border-hover":ls("border-hover"),"border-hover-strong":ls("border-hover-strong"),"border-selected":ls("border-selected"),"border-selected-subtle":ls("border-selected-subtle"),"border-selected-subtlest":ls("border-selected-subtlest"),"border-selected-hover":ls("border-selected-hover"),"border-focus":ls("border-focus"),"border-focus-strong":ls("border-focus-strong"),"border-disabled":ls("border-disabled"),"border-selected-disabled":ls("border-selected-disabled"),"border-success":ls("border-success"),"border-warning":ls("border-warning"),"border-error":ls("border-error"),"border-error-focus":ls("border-error-focus"),"border-error-focus-strong":ls("border-error-focus-strong"),"border-error-strong":ls("border-error-strong"),"border-info":ls("border-info"),bg:ls("bg"),"bg-strong":ls("bg-strong"),"bg-stronger":ls("bg-stronger"),"bg-strongest":ls("bg-strongest"),"bg-hover":ls("bg-hover"),"bg-hover-strong":ls("bg-hover-strong"),"bg-hover-subtle":ls("bg-hover-subtle"),"bg-hover-neutral":ls("bg-hover-neutral"),"bg-hover-neutral-strong":ls("bg-hover-neutral-strong"),"bg-selected":ls("bg-selected"),"bg-selected-hover":ls("bg-selected-hover"),"bg-selected-strong":ls("bg-selected-strong"),"bg-selected-stronger":ls("bg-selected-stronger"),"bg-selected-strongest":ls("bg-selected-strongest"),"bg-selected-strongest-hover":ls("bg-selected-strongest-hover"),"bg-disabled":ls("bg-disabled"),"bg-selected-disabled":ls("bg-selected-disabled"),"bg-selected-stronger-disabled":ls("bg-selected-stronger-disabled"),"bg-success":ls("bg-success"),"bg-success-hover":ls("bg-success-hover"),"bg-success-strong":ls("bg-success-strong"),"bg-success-strong-hover":ls("bg-success-strong-hover"),"bg-warning":ls("bg-warning"),"bg-warning-hover":ls("bg-warning-hover"),"bg-warning-strong":ls("bg-warning-strong"),"bg-warning-strong-hover":ls("bg-warning-strong-hover"),"bg-info":ls("bg-info"),"bg-info-hover":ls("bg-info-hover"),"bg-info-strong":ls("bg-info-strong"),"bg-info-strong-hover":ls("bg-info-strong-hover"),"bg-error":ls("bg-error"),"bg-error-hover":ls("bg-error-hover"),"bg-error-strong":ls("bg-error-strong"),"bg-error-strong-hover":ls("bg-error-strong-hover"),"bg-inverse":ls("bg-inverse"),"bg-inverse-subtle":ls("bg-inverse-subtle"),"bg-inverse-subtler":ls("bg-inverse-subtler"),"bg-inverse-subtlest":ls("bg-inverse-subtlest"),"bg-inverse-hover":ls("bg-inverse-hover"),"bg-primary":ls("bg-primary"),"bg-primary-subtle":ls("bg-primary-subtle"),"bg-primary-subtler":ls("bg-primary-subtler"),"bg-primary-subtlest":ls("bg-primary-subtlest"),"bg-available":ls("bg-available"),"bg-primary-hover":ls("bg-primary-hover"),"bg-primary-subtlest-hover":ls("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ls("bg-primary-subtlest-selected"),"overlay-strong":ls("overlay-strong"),"overlay-subtle":ls("overlay-subtle"),hyperlink:ls("hyperlink"),"hyperlink-hover":ls("hyperlink-hover"),"hyperlink-visited":ls("hyperlink-visited"),"hyperlink-inverse":ls("hyperlink-inverse"),"focus-ring":ls("focus-ring"),"focus-ring-inverse":ls("focus-ring-inverse")},gs={collections:{default:{solid:e=>r=>{var t,s,i;const{thickness:n,radius:o,colour:a}=e||{},l=null!==(t="function"==typeof n?n(r):n)&&void 0!==t?t:rs["width-010"](r),d=null!==(s="function"==typeof o?o(r):o)&&void 0!==s?s:0,g=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ds.border(r),c=rs.solid;return $`
            border: ${l} ${c} ${g};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,s,i;const{thickness:n,radius:o,colour:a}=e||{},l=null!==(t="function"==typeof n?n(r):n)&&void 0!==t?t:rs["width-010"](r),d=null!==(s="function"==typeof o?o(r):o)&&void 0!==s?s:0,g=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:ds.border(r),c=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${g}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return $`
            background-image: url("data:image/svg+xml,${c}");
            border-radius: ${d};
        `}}},defaultValue:"default"},cs=e=>1===e.length&&"theme"in e[0],us=e=>(...r)=>t=>{const s=cs(r)?[]:r,i=cs(r)?r[0]:t,n=i.theme;return(0,Jt(gs,null==n?void 0:n.borderScheme)[e])(...s)(i)},ms={solid:us("solid"),"dashed-default":us("dashed-default")},hs={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},bs=e=>r=>{var t;const s=r.theme,i=Jt(hs,null==s?void 0:s.breakpointScheme);let n;return n=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.breakpoint)?Zt(i,e,s.overrides.breakpoint):i[e],n},ps={"xxs-min":bs("xxs-min"),"xxs-max":bs("xxs-max"),"xs-min":bs("xs-min"),"xs-max":bs("xs-max"),"sm-min":bs("sm-min"),"sm-max":bs("sm-max"),"md-min":bs("md-min"),"md-max":bs("md-max"),"lg-min":bs("lg-min"),"lg-max":bs("lg-max"),"xl-min":bs("xl-min"),"xl-max":bs("xl-max"),"xxl-min":bs("xxl-min"),"xxs-column":bs("xxs-column"),"xs-column":bs("xs-column"),"sm-column":bs("sm-column"),"md-column":bs("md-column"),"lg-column":bs("lg-column"),"xl-column":bs("xl-column"),"xxl-column":bs("xxl-column"),"xxs-gutter":bs("xxs-gutter"),"xs-gutter":bs("xs-gutter"),"sm-gutter":bs("sm-gutter"),"md-gutter":bs("md-gutter"),"lg-gutter":bs("lg-gutter"),"xl-gutter":bs("xl-gutter"),"xxl-gutter":bs("xxl-gutter"),"xxs-margin":bs("xxs-margin"),"xs-margin":bs("xs-margin"),"sm-margin":bs("sm-margin"),"md-margin":bs("md-margin"),"lg-margin":bs("lg-margin"),"xl-margin":bs("xl-margin"),"xxl-margin":bs("xxl-margin")},ys=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=ps["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const s=t(r);return`@media screen and (${e}: ${s}px)`}})(e,t),r)),{}),fs={MaxWidth:ys("max-width"),MinWidth:ys("min-width")},vs={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},xs=e=>r=>{var t;const s=r.theme,i=Jt(vs,null==s?void 0:s.fontScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.fontSpec)?Zt(i,e,s.overrides.fontSpec):i[e]},ws={"heading-size-xxl":xs("heading-size-xxl"),"heading-size-xl":xs("heading-size-xl"),"heading-size-lg":xs("heading-size-lg"),"heading-size-md":xs("heading-size-md"),"heading-size-sm":xs("heading-size-sm"),"heading-size-xs":xs("heading-size-xs"),"heading-lh-xxl":xs("heading-lh-xxl"),"heading-lh-xl":xs("heading-lh-xl"),"heading-lh-lg":xs("heading-lh-lg"),"heading-lh-md":xs("heading-lh-md"),"heading-lh-sm":xs("heading-lh-sm"),"heading-lh-xs":xs("heading-lh-xs"),"heading-ls-xxl":xs("heading-ls-xxl"),"heading-ls-xl":xs("heading-ls-xl"),"heading-ls-lg":xs("heading-ls-lg"),"heading-ls-md":xs("heading-ls-md"),"heading-ls-sm":xs("heading-ls-sm"),"heading-ls-xs":xs("heading-ls-xs"),"weight-light":xs("weight-light"),"weight-regular":xs("weight-regular"),"weight-semibold":xs("weight-semibold"),"weight-bold":xs("weight-bold"),"font-family":xs("font-family"),"body-size-baseline":xs("body-size-baseline"),"body-size-md":xs("body-size-md"),"body-size-sm":xs("body-size-sm"),"body-size-xs":xs("body-size-xs"),"body-lh-baseline":xs("body-lh-baseline"),"body-lh-md":xs("body-lh-md"),"body-lh-sm":xs("body-lh-sm"),"body-lh-xs":xs("body-lh-xs"),"body-ls-baseline":xs("body-ls-baseline"),"body-ls-md":xs("body-ls-md"),"body-ls-sm":xs("body-ls-sm"),"body-ls-xs":xs("body-ls-xs"),"form-label-size":xs("form-label-size"),"form-description-size":xs("form-description-size"),"form-label-lh":xs("form-label-lh"),"form-description-lh":xs("form-description-lh"),"form-label-ls":xs("form-label-ls"),"form-description-ls":xs("form-description-ls")},Fs=(e,r,t,s,i)=>{const{disableLigatures:n}=i||{};return $`
        font-family: ${xs("font-family")};
        font-size: ${xs(e)};
        font-weight: ${xs(r)};
        line-height: ${xs(t)};
        letter-spacing: ${xs(s)};

        font-variant: ${n?"no-common-ligatures":"normal"};
    `},Es=(e={})=>({"heading-xxl-light":Fs("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Fs("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Fs("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Fs("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Fs("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Fs("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Fs("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Fs("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Fs("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Fs("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Fs("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Fs("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Fs("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Fs("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Fs("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Fs("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Fs("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Fs("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Fs("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Fs("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Fs("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Fs("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Fs("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Fs("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Fs("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Fs("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Fs("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Fs("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Fs("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Fs("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Fs("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Fs("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Fs("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Fs("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Fs("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Fs("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Fs("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Fs("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Fs("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Fs("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Fs("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Fs("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),$s=Es({disableLigatures:!0}),Cs={collections:{default:Es(),bookingsg:$s,pa:Es({disableLigatures:!0})},defaultValue:"default"},Bs=e=>r=>{var t;const s=r.theme,i=Jt(Cs,null==s?void 0:s.fontScheme),n=(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.font)?Zt(i,e,s.overrides.font):i[e];return"function"==typeof n?n(r):n},Ds={"heading-xxl-light":Bs("heading-xxl-light"),"heading-xxl-regular":Bs("heading-xxl-regular"),"heading-xxl-semibold":Bs("heading-xxl-semibold"),"heading-xxl-bold":Bs("heading-xxl-bold"),"heading-xl-light":Bs("heading-xl-light"),"heading-xl-regular":Bs("heading-xl-regular"),"heading-xl-semibold":Bs("heading-xl-semibold"),"heading-xl-bold":Bs("heading-xl-bold"),"heading-lg-light":Bs("heading-lg-light"),"heading-lg-regular":Bs("heading-lg-regular"),"heading-lg-semibold":Bs("heading-lg-semibold"),"heading-lg-bold":Bs("heading-lg-bold"),"heading-md-light":Bs("heading-md-light"),"heading-md-regular":Bs("heading-md-regular"),"heading-md-semibold":Bs("heading-md-semibold"),"heading-md-bold":Bs("heading-md-bold"),"heading-sm-light":Bs("heading-sm-light"),"heading-sm-regular":Bs("heading-sm-regular"),"heading-sm-semibold":Bs("heading-sm-semibold"),"heading-sm-bold":Bs("heading-sm-bold"),"heading-xs-light":Bs("heading-xs-light"),"heading-xs-regular":Bs("heading-xs-regular"),"heading-xs-semibold":Bs("heading-xs-semibold"),"heading-xs-bold":Bs("heading-xs-bold"),"body-baseline-light":Bs("body-baseline-light"),"body-baseline-regular":Bs("body-baseline-regular"),"body-baseline-semibold":Bs("body-baseline-semibold"),"body-baseline-bold":Bs("body-baseline-bold"),"body-md-light":Bs("body-md-light"),"body-md-regular":Bs("body-md-regular"),"body-md-semibold":Bs("body-md-semibold"),"body-md-bold":Bs("body-md-bold"),"body-sm-light":Bs("body-sm-light"),"body-sm-regular":Bs("body-sm-regular"),"body-sm-semibold":Bs("body-sm-semibold"),"body-sm-bold":Bs("body-sm-bold"),"body-xs-light":Bs("body-xs-light"),"body-xs-regular":Bs("body-xs-regular"),"body-xs-semibold":Bs("body-xs-semibold"),"body-xs-bold":Bs("body-xs-bold"),"form-label":Bs("form-label"),"form-description":Bs("form-description")},As={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ks=e=>r=>{var t;const s=r.theme,i=Jt(As,null==s?void 0:s.motionScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.motion)?Zt(i,e,s.overrides.motion):i[e]},zs={"duration-150":ks("duration-150"),"duration-250":ks("duration-250"),"duration-350":ks("duration-350"),"duration-500":ks("duration-500"),"duration-800":ks("duration-800"),"duration-1000":ks("duration-1000"),"ease-default":ks("ease-default"),"ease-standard":ks("ease-standard"),"ease-entrance":ks("ease-entrance"),"ease-exit":ks("ease-exit")},Ss={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Os=e=>r=>{var t;const s=r.theme,i=Jt(Ss,null==s?void 0:s.radiusScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.radius)?`${Zt(i,e,s.overrides.radius)}px`:`${i[e]}px`},js={none:Os("none"),xs:Os("xs"),sm:Os("sm"),md:Os("md"),lg:Os("lg"),full:Os("full")},_s={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ts=e=>r=>{var t;const s=r.theme,i=Jt(_s,null==s?void 0:s.spacingScheme);return(null===(t=null==s?void 0:s.overrides)||void 0===t?void 0:t.spacing)?`${Zt(i,e,s.overrides.spacing)}px`:`${i[e]}px`},Ls={"spacing-0":Ts("spacing-0"),"spacing-4":Ts("spacing-4"),"spacing-8":Ts("spacing-8"),"spacing-12":Ts("spacing-12"),"spacing-16":Ts("spacing-16"),"spacing-20":Ts("spacing-20"),"spacing-24":Ts("spacing-24"),"spacing-32":Ts("spacing-32"),"spacing-40":Ts("spacing-40"),"spacing-48":Ts("spacing-48"),"spacing-64":Ts("spacing-64"),"spacing-72":Ts("spacing-72"),"layout-xs":Ts("layout-xs"),"layout-sm":Ts("layout-sm"),"layout-md":Ts("layout-md"),"layout-lg":Ts("layout-lg"),"layout-xl":Ts("layout-xl"),"layout-xxl":Ts("layout-xxl"),"layout-xxxl":Ts("layout-xxxl")},Rs=Object.assign(Object.assign({},ds),{Primitive:ns}),Hs=Object.assign(Object.assign({},Ds),{Spec:ws}),Ms=zs,Is=Object.assign(Object.assign({},rs),{Util:ms}),Ps=Ls,Vs=js,Ns=ps,Ws=fs,Xs={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}};v((()=>k(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.34cc80cd.js")).LottieSpinner}})))),E.div`
    margin: 0 auto;
    padding: ${Ps["spacing-32"]} ${Ps["spacing-16"]};
`,v((()=>k(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.30aaf2f9.js")).LottieLoadingDots}})))),E.div`
    margin: 0 auto;
`;const Ys=v((()=>k(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.6180b72f.js")).LottieLoadingDotsSpinner}})))),Us=r=>{var{color:t}=r,s=A(r,["color"]);const i=C(),n=t||Rs["icon-primary"]({theme:i});return e(qs,Object.assign({},s,{children:e(x,{fallback:e(Ks,{}),children:e(Ys,{color:n})})}))},Ks=()=>e("div",{style:{height:"200px",width:"200px"}}),qs=E.div`
    margin: 0 auto;
`,Gs=B`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Zs=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>$`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,Js=$`
    animation: ${Ms["duration-150"]} ${Ms["ease-default"]} ${Gs};
    width: 100%;
    height: 100%;
    transition: color ${Ms["duration-150"]} ${Ms["ease-default"]};
`,Qs=E(s)`
    ${Js}
    color: ${Rs["icon-primary-subtlest"]};
`,ei=E(i)`
    ${Js}
    color: ${Rs["icon-disabled-subtle"]};
`,ri=E(n)`
    ${Js}
    color: ${e=>e.$disabled?Rs["icon-disabled-subtle"](e):Rs["icon-selected"](e)};
`,ti=E(o)`
    ${Js}
    color: ${e=>e.$disabled?Rs["icon-disabled-subtle"](e):Rs["icon-selected"](e)};
`,si=E.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${Qs},
        &:hover
        + ${ri},
        &:hover
        + ${ti} {
        color: ${e=>!e.disabled&&Rs["icon-hover"](e)};
    }
`,ii=t=>{var{className:s,checked:i,disabled:n,indeterminate:o,onChange:a,onKeyPress:l,displaySize:d="default"}=t,g=A(t,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=c(null);y((()=>{u.current&&(u.current.indeterminate=null!=o&&o)}),[o]);const m=e=>{if(!n){const r=e;if(!(" "===r.key||"change"===e.type))return;a&&a(e),l&&l(r)}};return r(Zs,{className:s,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:n?-1:0,onKeyDown:m,$displaySize:d,$disabled:n,$unchecked:!(o||i||n),children:[e(si,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:m,disabled:n},g)),o?e(ti,{$disabled:n,"data-testid":"indeterminate"}):i?e(ri,{$disabled:n,"data-testid":"checkmark"}):n?e(ei,{"data-testid":"empty-disabled-checkbox"}):e(Qs,{$disabled:n,"data-testid":"empty-checkbox"})]})},ni=s=>i=>{switch(s){case"maintenance":return r(t,{children:["This service is currently unavailable. Please try again after ",e("strong",{children:i.dateString}),"."]});case"inactivity":{const s=i,n=Math.floor(s.secondsLeft/60),o=s.secondsLeft%60;return r(t,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",o," seconds.",e("br",{}),e("br",{}),"If you wish to stay on this page, let us know now."]})}}};var oi;!function(e){e.imgAttributeHelper=(e,r)=>{const{base:t,md:s,lg:i,width:n,height:o}=e;return{srcSet:`${t} 400w, ${s} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${Ns["sm-max"]({theme:r})}px) 400px, (max-width: ${Ns["lg-max"]({theme:r})}px) 800px, 1200px`,width:n,height:o}}}(oi||(oi={}));const{imgAttributeHelper:ai}=oi,li={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},di={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},gi=Object.assign(Object.assign({},li),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),ci=Object.assign(Object.assign({},li),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),ui=(e,r)=>new Map([["400",{img:ai(e[400],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:ai(e[403],r),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:ai(e[404],r),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:ai(e[408],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:ai(e[500],r),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:ai(e[502],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:ai(e[503],r),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:ai(e[504],r),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:ai(e.confirmation,r),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:ai(e["link-error"],r),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:ai(e.logout,r),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:ai(e["insufficient-credits"],r),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:ai(e.inactivity,r),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:ni("inactivity")}],["maintenance",{img:ai(e[503],r),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:ni("maintenance")}],["no-item-found",{img:ai(e["no-item-found"],r),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:ai(e["payment-unsuccessful"],r),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:ai(e["transfer-unsuccessful"],r),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:ai(e["unsupported-browser"],r),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:ai(e["unsupported-browser"],r),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:ai(e.warning,r),title:"Are you sure?",description:"You will lose your progress."}]]),mi=E.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,hi=B`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,bi=E.div`
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
    animation: ${hi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,pi=E(bi)`
    animation-delay: -0.45s;
`,yi=E(bi)`
    animation-delay: -0.3s;
`,fi=E(bi)`
    animation-delay: -0.15s;
`,vi={collections:{default:{Button:{"button-radius":js.sm,"button-default-colour-bg":ds["bg-primary"],"button-default-colour-bg-hover":ds["bg-primary-hover"],"button-default-colour-text":ds["text-inverse"],"button-secondary-colour-border":ds["border-primary"],"button-secondary-colour-text":ds["text-primary"],"button-light-colour-text":ds["text-primary"],"button-link-colour-text":ds["text-primary"]}},pa:{Button:{"button-radius":js.full,"button-default-colour-bg":ds["bg-primary"],"button-default-colour-bg-hover":ds["bg-primary-hover"],"button-default-colour-text":ds["text-inverse"],"button-secondary-colour-border":ds["border-primary"],"button-secondary-colour-text":ds["text-primary"],"button-light-colour-text":ds["text-primary"],"button-link-colour-text":ds["text-primary"]}}},defaultValue:"default"},xi=(e,r)=>t=>{var s,i;const n=t.theme,o=Jt(vi,null==n?void 0:n.componentScheme);return wi((null===(i=null===(s=null==n?void 0:n.componentOverrides)||void 0===s?void 0:s[e])||void 0===i?void 0:i[r])||o[e][r],t)},wi=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Fi=xi("Button","button-radius"),Ei=xi("Button","button-default-colour-bg"),$i=xi("Button","button-default-colour-bg-hover"),Ci=xi("Button","button-default-colour-text"),Bi=xi("Button","button-secondary-colour-border"),Di=xi("Button","button-secondary-colour-text"),Ai=xi("Button","button-light-colour-text"),ki=xi("Button","button-link-colour-text"),zi=E.button`
    padding: ${Ps["spacing-8"]} ${Ps["spacing-16"]};
    min-width: 4rem;
    border: ${Is["width-010"]} ${Is.solid} transparent;
    transition: all ${Ms["duration-250"]} ${Ms["ease-default"]};
    border-radius: ${Fi};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return $`
                    background-color: ${Rs.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Rs["border-error-strong"]:Bi};

                    color: ${e.$buttonIsDanger?Rs["text-error"]:Di};

                    &:hover,
                    &:active {
                        background-color: ${Rs["bg-hover-neutral"]};
                    }
                `;case"light":return $`
                    background-color: ${Rs.bg};
                    border-color: ${Rs.border};

                    color: ${e.$buttonIsDanger?Rs["text-error"]:Ai};

                    &:hover,
                    &:active {
                        background-color: ${Rs["bg-hover-neutral"]};
                    }
                `;case"link":return $`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Rs["text-error"]:ki};
                    &:hover,
                    &:active {
                        background-color: ${Rs["bg-hover-neutral"]};
                    }
                `;case"disabled":return $`
                    background-color: ${Rs["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Rs["text-disabled"]};
                `;default:return $`
                    background-color: ${e.$buttonIsDanger?Rs["bg-error-strong"]:Ei};};

                    ${Ws.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Ci}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Rs["bg-error-strong-hover"]:$i}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return $`
                    height: 2.5rem;
                    ${Hs["body-md-semibold"]}

                    ${Ws.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return $`
                    height: 4rem;
                    ${Hs["heading-md-semibold"]}

                    ${Ws.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return $`
                    height: 3rem;
                    ${Hs["heading-xs-semibold"]}

                    ${Ws.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Si=E((({color:t,className:s,size:i})=>r(mi,{className:s,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[e(bi,{id:"inner1"}),e(pi,{id:"inner2"}),e(yi,{id:"inner3"}),e(fi,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Oi=(t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,d=A(t,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(zi,Object.assign({ref:s,"data-testid":d["data-testid"]||"button",disabled:n},g,d,{children:[o&&e(Si,{}),e("span",{children:i})]}))};Oi.displayName="Button.Default";const ji=(t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,d=A(t,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(zi,Object.assign({ref:s,"data-testid":d["data-testid"]||"button",disabled:n},g,d,{children:[o&&e(Si,{}),e("span",{children:i})]}))};ji.displayName="Button.Small";const _i=(t,s)=>{const{children:i,disabled:n=!1,loading:o=!1,styleType:a="default",danger:l=!1}=t,d=A(t,["children","disabled","loading","styleType","danger"]),g={$buttonStyle:n?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(zi,Object.assign({ref:s,"data-testid":d["data-testid"]||"button",disabled:n},g,d,{children:[o&&e(Si,{}),e("span",{children:i})]}))};_i.displayName="Button.Large";const Ti={Default:g.forwardRef(Oi),Small:g.forwardRef(ji),Large:g.forwardRef(_i)},Li=e=>$`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Ri=(e,r,t=!1)=>$`
        ${Hs[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Hi=e=>{if(e)return $`
            ${Li(e)}
        `},Mi=(e,r)=>$`
    ${Ri(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?$`
            display: block;
            ${Hi(t)}
        `:e?$`
            display: inline;
        `:$`
            display: block;
            ${Hi(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Rs.text};
`;var Ii;!function(t){const s=(e,r,t)=>{const s=E(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Mi(r,e)}
        `;return s.displayName=`Typography.${t}`,s};t.HeadingXXL=s("h1","heading-xxl","HeadingXXL"),t.HeadingXL=s("h2","heading-xl","HeadingXL"),t.HeadingLG=s("h3","heading-lg","HeadingLG"),t.HeadingMD=s("h4","heading-md","HeadingMD"),t.HeadingSM=s("h5","heading-sm","HeadingSM"),t.HeadingXS=s("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=E.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Mi(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const n=(t,s)=>{const i=E.a`
            ${e=>$`
                ${Ri(t,e.weight||"regular")}
                color: ${Rs.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Rs["text-hover"]};
                }
            `}
        `,n=t=>{var{external:s=!1,children:n}=t,o=A(t,["external","children"]);return r(i,Object.assign({},o,{children:[n,s&&e(Pi,{})]}))};return n.displayName=`Typography.${s}`,n};t.LinkBL=n("body-baseline","LinkBL"),t.LinkMD=n("body-md","LinkMD"),t.LinkSM=n("body-sm","LinkSM"),t.LinkXS=n("body-xs","LinkXS")}(Ii||(Ii={}));const Pi=E(D)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Vi=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Ni=E.img`
    position: relative;
    width: 400px;
    height: auto;

    ${Ws.MaxWidth.sm} {
        width: 320px;
    }

    ${Ws.MaxWidth.xs} {
        width: 288px;
    }

    ${Ws.MaxWidth.xxs} {
        width: 240px;
    }
`,Wi=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,Xi=E(Ii.HeadingMD)`
    margin: ${Ps["spacing-32"]} 0 ${Ps["spacing-16"]};
    text-align: center;
`,Yi=E.div`
    color: ${Rs.text};
    text-align: center;

    ${(e=>{const{textSize:r}=e||{};return $`
        // Text styling
        ${r&&Hs[`${r}-regular`]}

        strong {
            font-weight: ${Hs.Spec["weight-semibold"]};
            ${r&&Hs[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Hs.Spec["weight-semibold"]};
            ${r&&Hs[`${r}-semibold`]}
            color: ${Rs.hyperlink};
            text-decoration: none;

            svg {
                color: ${Rs["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Rs["hyperlink-hover"]};

                svg {
                    color: ${Rs["icon-hover"]};
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
`,Ui=E(Ti.Default)`
    margin: ${Ps["spacing-32"]} auto 0;
    width: 21rem;

    ${Ws.MaxWidth.sm} {
        width: 100%;
    }
`,Ki=t=>{var{type:s,img:i,title:n,description:o,actionButton:a,additionalProps:l,imageOnly:d,illustrationScheme:g}=t,c=A(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const u=C(),m=((e,r,t)=>{switch(r){case"bookingsg":return ui(di,t).get(e);case"ccube":return ui(gi,t).get(e);case"mylegacy":return ui(ci,t).get(e);default:return ui(li,t).get(e)}})(s,g||(u||Xs).resourceScheme,u),h=c["data-testid"]||"error-display",b=()=>{var e,r;switch(s){case"maintenance":{const r=l;return l&&r.dateString?null===(e=null==m?void 0:m.renderDescription)||void 0===e?void 0:e.call(m,r):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(r=null==m?void 0:m.renderDescription)||void 0===r?void 0:r.call(m,e):o||void 0}default:return o||void 0}};if(!m)return null;const p=Object.assign(Object.assign(Object.assign(Object.assign({},m),i&&{img:i}),n&&{title:n}),b()&&{description:b()});return r(Vi,Object.assign({},c,{"data-testid":h,children:[e(Ni,Object.assign({},p.img,{alt:"","data-id":"error-display-image"})),!d&&(p.title||p.description?r(Wi,{children:[p.title&&("string"==typeof p.title?e(Xi,{"data-testid":`${h}--title`,"data-id":"error-display-title",weight:"semibold",children:p.title}):p.title),p.description&&e(Yi,{"data-testid":`${h}--description`,"data-id":"error-display-description",children:"string"==typeof p.description?e("p",{children:p.description}):p.description})]}):null),a&&(()=>{const r=Object.assign({children:"Proceed"},a);return e(Ui,Object.assign({},r))})()]}))},qi=$`
    outline-offset: -1px;
    outline: ${Is["width-020"]} ${Is.solid} ${Rs["border-focus"]};
`,Gi=$`
    outline-color: ${Rs["border-focus"]};
`,Zi=$`
    outline-color: ${Rs["border-disabled"]};
`,Ji=$`
    outline-color: ${Rs["border-error-focus"]};
`,Qi=E.div`
    border: ${Is["width-010"]} ${Is.solid} ${Rs.border};
    border-radius: ${Vs.sm};
    background: ${Rs.bg};

    :focus-within {
        ${qi}
    }
    ${e=>e.$focused&&qi}

    ${e=>e.$readOnly?$`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Gi}
                }
                ${e.$focused&&Gi}
            `:e.$disabled?$`
                background: ${Rs["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Zi}
                }
                ${e.$focused&&Zi}
            `:e.$error?$`
                border-color: ${Rs["border-error"]};

                :focus-within {
                    ${Ji}
                }
                ${e.$focused&&Ji}
            `:void 0}
`;E(Qi)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Ps["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,E.input`
    ${e=>"small"===e.$variant?Hs["body-md-regular"]:Hs["body-baseline-regular"]}
    color: ${Rs.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Rs["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Rs["text-subtler"]};
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
`;const en=E.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Is["width-010"]} ${Is.solid}
            ${Rs["border-focus"]};
        border-radius: ${Vs.sm};
    }
`,rn=Rs.border,tn=Rs.text,sn=E.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Is["width-010"]} ${Is.solid} ${rn};
    border-radius: ${Vs.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,nn=E.div`
    flex: 1;
`,on=E.table`
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
`,an=E.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Is["width-010"]} ${Is.solid} ${rn}`:"none"};
        }
    }
`,ln=E.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const r=e.$left?`${e.$left}px`:"0",t=e.$width?`${e.$width}px`:"100%";return $`
                position: fixed;
                left: ${r};
                width: ${t};
            `}return $`
                position: sticky;
                left: 0;
            `}};
`,dn=E(en)`
    ${Hs["body-md-semibold"]}
    cursor: pointer;
    color: ${Rs["text-primary"]};
    transition: ${Ms["duration-150"]} ${Ms["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Rs["text-hover"]};
    }
`,gn=E.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&$`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${Vs.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Is["width-010"]} ${Is.solid} ${rn};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Is["width-010"]} ${Is.solid} ${rn};
    border-radius: 0 0 ${Vs.sm} ${Vs.sm};
    background-color: ${Rs["bg-selected"]};
    transition: all 300ms ease;
`,cn=E.tr`
    background-color: ${Rs["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Is["width-010"]} ${Is.solid} ${rn};
`,un=E.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${tn};
    border-bottom: ${Is["width-010"]} ${Is.solid} ${rn};
    ${e=>{if(e.$isCheckbox)return $`
                width: 4rem;
            `}};
`,mn=E.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${tn};
        margin-left: 0.5rem;
    }
`,hn=E.tr`
    background-color: ${e=>e.$isSelected?$`
                ${Rs["bg-selected"]};
            `:e.$alternating?$`
                ${Rs["bg-strong"]};
            `:$`
                ${Rs.bg};
            `};
    border-top: ${Is["width-010"]} ${Is.solid} ${rn};
    &:hover {
        ${e=>{if(e.$isSelectable)return $`
                    background-color: ${Rs["bg-hover-strong"]};
                `}};
    }
`,bn=E.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${tn};
    border-bottom: ${Is["width-010"]} ${Is.solid} ${rn};
`,pn=E(Ii.BodyBL)`
    ${Li(2)}
    text-overflow: ellipsis;
`,yn=E.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,fn=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,vn=E(Ii.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,xn=E.td`
    padding: 4rem 0;
`,wn=s=>{var{id:i,headers:n,rows:o,className:g,sortIndicators:m,alternatingRows:h,loadState:b="success",enableMultiSelect:p,selectedIds:f,disabledIds:v,enableActionBar:x,enableSelectAll:F,enableStickyHeader:E,emptyView:$,actionBarContent:C,renderCustomEmptyView:B,onHeaderClick:D,onSelect:k,onSelectAll:z,onClearSelectionClick:S}=s,O=A(s,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=c(null),T=c(null),R=c(null),H=c(null),M=c(null),[I,P]=u(!1),[V,N]=u(!1),[W,X]=u(!1),[Y,U]=u(!1),[K,q]=u(!1),{ref:G,inView:Z}=function({threshold:e,delay:r,trackVisibility:t,rootMargin:s,root:i,triggerOnce:n,skip:o,initialInView:a,fallbackInView:l,onChange:g}={}){var c;const[u,m]=d.useState(null),h=d.useRef(),[b,p]=d.useState({inView:!!a,entry:void 0});h.current=g,d.useEffect((()=>{if(o||!u)return;let a;return a=_(u,((e,r)=>{p({inView:e,entry:r}),h.current&&h.current(e,r),r.isIntersecting&&n&&a&&(a(),a=void 0)}),{root:i,rootMargin:s,threshold:e,trackVisibility:t,delay:r},l),()=>{a&&a()}}),[Array.isArray(e)?e.toString():e,u,i,s,n,o,t,l,r]);const y=null==(c=b.entry)?void 0:c.target,f=d.useRef();u||!y||n||o||f.current===y||(f.current=y,p({inView:!!a,entry:void 0}));const v=[m,b.inView,b.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(),J=w((()=>{if(!M.current||!H.current)return;const e=M.current.scrollHeight>M.current.clientHeight;P(e),e?H.current.style.transform="translateY(0)":oe()}),[]);y((()=>{J()}),[]),function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,s=e.refreshMode,i=e.refreshRate,n=void 0===i?1e3:i,o=e.refreshOptions,a=e.handleWidth,l=void 0===a||a,d=e.handleHeight,g=void 0===d||d,m=e.targetRef,h=e.observerOptions,b=e.onResize,p=c(t),y=c(null),f=null!=m?m:y,v=c(),x=u({width:void 0,height:void 0}),w=x[0],F=x[1];Ae((function(){if(!Ce()){var e=De(b,F,l,g);v.current=Ee((function(r){(l||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},s=t.width,i=t.height;!p.current&&!Ce()&&e({width:s,height:i}),p.current=!1}))}),s,n,o);var r=new window.ResizeObserver(v.current);return f.current&&r.observe(f.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[s,n,o,l,g,b,h,f.current]),L({ref:f},w)}({onResize:J});((e,r,t="window",s)=>{const i=c();y((()=>{i.current=r}),[r]),y((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const n=e=>{var r;return null===(r=i.current)||void 0===r?void 0:r.call(i,e)};return r.addEventListener(e,n,s),()=>{null==r||r.removeEventListener(e,n,s)}}),[e,t])})("scroll",(()=>{requestAnimationFrame((()=>{I?ne():oe()})),M.current&&X(M.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),y((()=>{ae()}),[o]);const Q=()=>(null==f?void 0:f.length)===(null==o?void 0:o.length),ee=e=>!!(null==f?void 0:f.includes(e)),re=e=>!!h&&e%2==1,te=e=>!!(null==v?void 0:v.includes(e)),se=e=>{if(O["data-testid"])return`${O["data-testid"]}-${e}`},ie=()=>n.length+(p?1:0),ne=()=>{if(!M.current)return;const e=M.current.getBoundingClientRect();U(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},oe=()=>{if(!(j.current&&T.current&&M.current&&H.current&&R.current))return;const e=T.current.getBoundingClientRect();if(e.top>window.innerHeight){const r=e.bottom-window.innerHeight,t=j.current.getBoundingClientRect().height-R.current.clientHeight-32,s=Math.min(r,t);H.current.style.transform=`translateY(-${s}px)`}else H.current.style.transform="translateY(0)"},ae=()=>{j.current&&M.current&&q(j.current.clientHeight+(x?56:0)<M.current.clientHeight)},le=t=>{const{fieldKey:s,label:i,clickable:n=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e(un,{"data-testid":se(`header-${s}`),$clickable:n,onClick:()=>n&&(null==D?void 0:D(s)),style:o,$isCheckbox:!1,children:r(mn,{children:["string"==typeof i?e(Ii.BodyBL,{weight:"bold",children:i}):i,de(s)]})},s)},de=r=>{const s=null==m?void 0:m[r];return s?"asc"===s?e(a,{"data-testid":se(`header-${r}-arrowup`)}):e(l,{"data-testid":se(`header-${r}-arrowdown`)}):e(t,{})},ge=()=>e(un,{"data-testid":se("header-selection"),$clickable:!1,$isCheckbox:!0,children:e(yn,{children:F&&e(ii,{checked:Q(),indeterminate:!!f&&0!==f.length&&!Q(),onClick:()=>{z&&z(Q())}})})}),ce=(r,t)=>{const s="string"!=typeof r?r.style:void 0,i="string"==typeof r?r:r.fieldKey,n=t.id.toString(),o=t[i],a=`${n}-${i}`;return e(bn,{"data-testid":se(`row-${a}`),style:s,$isCheckbox:!1,children:"string"==typeof o||"number"==typeof o?e(pn,{children:o}):"function"==typeof o?o(t,{isSelected:ee(n)}):o},a)},ue=r=>e(bn,{"data-testid":se(`row-${r}-selection`),$isCheckbox:!0,children:e(yn,{children:e(ii,{checked:ee(r),onClick:()=>{k&&k(r,!ee(r))},disabled:te(r)})})}),me=()=>e(Ki,Object.assign({type:"no-item-found"},$,{title:(null==$?void 0:$.title)?"string"==typeof $.title?e(vn,{weight:"bold",children:$.title}):$.title:e(vn,{weight:"bold",children:"No <items> found"}),description:(null==$?void 0:$.description)?$.description:"No matching rows"}));return r(sn,{id:i||"table-wrapper","data-testid":O["data-testid"]||"table",className:g,ref:M,onScroll:()=>{I&&M.current&&N(M.current.scrollTop+M.current.clientHeight>=M.current.scrollHeight)},children:[e(nn,{children:r(on,{$end:W,$scrollable:I,ref:j,$stickyHeader:E,children:[e("thead",{ref:R,children:r(cn,{children:[p&&ge(),n.map(le)]})}),e(an,{$showLastRowBottomBorder:K,children:"success"===b?!o||o.length<1?e("tr",{children:e(xn,{colSpan:ie(),children:B?B():me()})}):e(t,{children:null==o?void 0:o.map(((e,t)=>r(hn,{"data-testid":se(`row-${e.id.toString()}`),$alternating:re(t),$isSelectable:p,$isSelected:ee(e.id.toString()),children:[p&&ue(e.id.toString()),n.map((r=>ce(r,e)))]},e.id.toString())))}):e("tr",{children:e("td",{colSpan:ie(),children:e(fn,{children:"loading"===b&&e(Us,{})})})})})]})}),x&&f&&f.length>0&&(()=>{var t,s,i,n;const o=null!==(t=null==f?void 0:f.length)&&void 0!==t?t:0;return e(ln,{ref:H,$fixed:Y,$left:null===(i=null===(s=null==j?void 0:j.current)||void 0===s?void 0:s.getBoundingClientRect())||void 0===i?void 0:i.left,$width:null===(n=null==j?void 0:j.current)||void 0===n?void 0:n.clientWidth,children:r(gn,{$float:(I?!V:!Z)||Y,$scrollable:I,children:[e(Ii.BodyMD,{weight:"semibold",children:`${o} item${o>1?"s":""} selected`}),e(dn,{type:"button",onClick:S,children:"Clear selection"}),C]})})})(),e("div",{ref:e=>{T.current=e,G(e)}})]})};export{wn as D,ke as c};
//# sourceMappingURL=index.4db8c42e.js.map
