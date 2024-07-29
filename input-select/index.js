import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useRef as i,useState as a,isValidElement as l,createRef as c,cloneElement as s,PureComponent as u,useEffect as d,useLayoutEffect as f,useCallback as h,useMemo as p,forwardRef as g,useContext as m}from"react";import v,{css as y,useTheme as b,keyframes as w}from"styled-components";import{ExternalIcon as x}from"@lifesg/react-icons/external";import*as S from"react-dom";import{findDOMNode as $,createPortal as F}from"react-dom";import{ExclamationCircleFillIcon as D}from"@lifesg/react-icons/exclamation-circle-fill";import{SquareIcon as B}from"@lifesg/react-icons/square";import{SquareTickFillIcon as E}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as O}from"@lifesg/react-icons/tick";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{MagnifierIcon as A}from"@lifesg/react-icons/magnifier";import{ChevronDownIcon as R}from"@lifesg/react-icons/chevron-down";var T=function(e,t){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},T(e,t)};var C=function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)};var H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var M=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},j="object"==typeof H&&H&&H.Object===Object&&H,L="object"==typeof self&&self&&self.Object===Object&&self,_=j||L||Function("return this")(),z=_,I=function(){return z.Date.now()},N=/\s/;var P=function(e){for(var t=e.length;t--&&N.test(e.charAt(t)););return t},W=P,Y=/^\s+/;var V=function(e){return e?e.slice(0,W(e)+1).replace(Y,""):e},U=_.Symbol,Z=U,q=Object.prototype,X=q.hasOwnProperty,G=q.toString,K=Z?Z.toStringTag:void 0;var J=function(e){var t=X.call(e,K),n=e[K];try{e[K]=void 0;var r=!0}catch(e){}var o=G.call(e);return r&&(t?e[K]=n:delete e[K]),o},Q=Object.prototype.toString;var ee=J,te=function(e){return Q.call(e)},ne=U?U.toStringTag:void 0;var re=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ne&&ne in Object(e)?ee(e):te(e)},oe=function(e){return null!=e&&"object"==typeof e};var ie=V,ae=M,le=function(e){return"symbol"==typeof e||oe(e)&&"[object Symbol]"==re(e)},ce=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,de=parseInt;var fe=M,he=I,pe=function(e){if("number"==typeof e)return e;if(le(e))return NaN;if(ae(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ae(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ie(e);var n=se.test(e);return n||ue.test(e)?de(e.slice(2),n?2:8):ce.test(e)?NaN:+e},ge=Math.max,me=Math.min;var ve=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function g(){var e=he();if(p(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-c);return d?me(n,i-(e-s)):n}(e))}function m(e){return l=void 0,f&&r?h(e):(r=o=void 0,a)}function v(){var e=he(),n=p(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(g,t),u?h(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(g,t),h(c)}return void 0===l&&(l=setTimeout(g,t)),a}return t=pe(t)||0,fe(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ge(pe(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},v.flush=function(){return void 0===l?a:m(he())},v},ye=ve,be=M;var we=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return be(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ye(e,t,{leading:r,maxWait:t,trailing:o})},xe=function(e,t,n,r){switch(t){case"debounce":return ve(e,n,r);case"throttle":return we(e,n,r);default:return e}},Se=function(e){return"function"==typeof e},$e=function(){return"undefined"==typeof window},Fe=function(e){return e instanceof Element||e instanceof HTMLDocument},De=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&Se(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!$e()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if($e())return null;if(t)return document.querySelector(t);if(r&&Fe(r))return r;if(n.targetRef&&Fe(n.targetRef.current))return n.targetRef.current;var o=$(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var c=De(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!$e()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Se(t)?"renderProp":Se(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,$e()||(n.resizeHandler=xe(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){$e()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=o)(c);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(c,["targetRef"]);return s(e,u)}return s(e,c);case"childArray":return(e=o).map((function(e){return!!e&&s(e,c)}));default:return r.createElement(a,null)}}}(u);var Be=$e()?d:f;function Ee(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,l=void 0===o?1e3:o,c=e.refreshOptions,s=e.handleWidth,u=void 0===s||s,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),v=i(null),y=null!=h?h:v,b=i(),w=a({width:void 0,height:void 0}),x=w[0],S=w[1];return Be((function(){if(!$e()){var e=De(g,S,u,f);b.current=xe((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!m.current&&!$e()&&e({width:r,height:o}),m.current=!1}))}),r,l,c);var t=new window.ResizeObserver(b.current);return y.current&&t.observe(y.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,c,u,f,g,p,y.current]),C({ref:y},x)}const Oe={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ke={D1:{fontFamily:Oe.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oe.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oe.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oe.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oe.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oe.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oe.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oe.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oe.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oe.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oe.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oe.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oe.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oe.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ae={D1:{fontFamily:Oe.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Oe.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Oe.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oe.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oe.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Oe.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Oe.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Oe.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Oe.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Oe.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Oe.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Oe.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Oe.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Oe.Regular,fontSize:.75,lineHeight:1.125}};var Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Te(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ce=Array.isArray,He="object"==typeof Re&&Re&&Re.Object===Object&&Re,Me=He,je="object"==typeof self&&self&&self.Object===Object&&self,Le=Me||je||Function("return this")(),_e=Le.Symbol,ze=_e,Ie=Object.prototype,Ne=Ie.hasOwnProperty,Pe=Ie.toString,We=ze?ze.toStringTag:void 0;var Ye=function(e){var t=Ne.call(e,We),n=e[We];try{e[We]=void 0;var r=!0}catch(e){}var o=Pe.call(e);return r&&(t?e[We]=n:delete e[We]),o},Ve=Object.prototype.toString;var Ue=Ye,Ze=function(e){return Ve.call(e)},qe=_e?_e.toStringTag:void 0;var Xe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qe&&qe in Object(e)?Ue(e):Ze(e)};var Ge=function(e){return null!=e&&"object"==typeof e},Ke=Xe,Je=Ge;var Qe=function(e){return"symbol"==typeof e||Je(e)&&"[object Symbol]"==Ke(e)},et=Ce,tt=Qe,nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rt=/^\w*$/;var ot=function(e,t){if(et(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!tt(e))||(rt.test(e)||!nt.test(e)||null!=t&&e in Object(t))};var it=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},at=Xe,lt=it;var ct,st=function(e){if(!lt(e))return!1;var t=at(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ut=Le["__core-js_shared__"],dt=(ct=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||""))?"Symbol(src)_1."+ct:"";var ft=function(e){return!!dt&&dt in e},ht=Function.prototype.toString;var pt=function(e){if(null!=e){try{return ht.call(e)}catch(e){}try{return e+""}catch(e){}}return""},gt=st,mt=ft,vt=it,yt=pt,bt=/^\[object .+?Constructor\]$/,wt=Function.prototype,xt=Object.prototype,St=wt.toString,$t=xt.hasOwnProperty,Ft=RegExp("^"+St.call($t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Dt=function(e){return!(!vt(e)||mt(e))&&(gt(e)?Ft:bt).test(yt(e))},Bt=function(e,t){return null==e?void 0:e[t]};var Et=function(e,t){var n=Bt(e,t);return Dt(n)?n:void 0},Ot=Et(Object,"create"),kt=Ot;var At=function(){this.__data__=kt?kt(null):{},this.size=0};var Rt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Tt=Ot,Ct=Object.prototype.hasOwnProperty;var Ht=function(e){var t=this.__data__;if(Tt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ct.call(t,e)?t[e]:void 0},Mt=Ot,jt=Object.prototype.hasOwnProperty;var Lt=Ot;var _t=At,zt=Rt,It=Ht,Nt=function(e){var t=this.__data__;return Mt?void 0!==t[e]:jt.call(t,e)},Pt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Lt&&void 0===t?"__lodash_hash_undefined__":t,this};function Wt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Wt.prototype.clear=_t,Wt.prototype.delete=zt,Wt.prototype.get=It,Wt.prototype.has=Nt,Wt.prototype.set=Pt;var Yt=Wt;var Vt=function(){this.__data__=[],this.size=0};var Ut=function(e,t){return e===t||e!=e&&t!=t},Zt=Ut;var qt=function(e,t){for(var n=e.length;n--;)if(Zt(e[n][0],t))return n;return-1},Xt=qt,Gt=Array.prototype.splice;var Kt=function(e){var t=this.__data__,n=Xt(t,e);return!(n<0)&&(n==t.length-1?t.pop():Gt.call(t,n,1),--this.size,!0)},Jt=qt;var Qt=function(e){var t=this.__data__,n=Jt(t,e);return n<0?void 0:t[n][1]},en=qt;var tn=qt;var nn=function(e,t){var n=this.__data__,r=tn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},rn=Vt,on=Kt,an=Qt,ln=function(e){return en(this.__data__,e)>-1},cn=nn;function sn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}sn.prototype.clear=rn,sn.prototype.delete=on,sn.prototype.get=an,sn.prototype.has=ln,sn.prototype.set=cn;var un=sn,dn=Et(Le,"Map"),fn=Yt,hn=un,pn=dn;var gn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mn=function(e,t){var n=e.__data__;return gn(t)?n["string"==typeof t?"string":"hash"]:n.map},vn=mn;var yn=mn;var bn=mn;var wn=mn;var xn=function(e,t){var n=wn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Sn=function(){this.size=0,this.__data__={hash:new fn,map:new(pn||hn),string:new fn}},$n=function(e){var t=vn(this,e).delete(e);return this.size-=t?1:0,t},Fn=function(e){return yn(this,e).get(e)},Dn=function(e){return bn(this,e).has(e)},Bn=xn;function En(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}En.prototype.clear=Sn,En.prototype.delete=$n,En.prototype.get=Fn,En.prototype.has=Dn,En.prototype.set=Bn;var On=En,kn=On;function An(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(An.Cache||kn),n}An.Cache=kn;var Rn=An;var Tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Cn=/\\(\\)?/g,Hn=function(e){var t=Rn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Tn,(function(e,n,r,o){t.push(r?o.replace(Cn,"$1"):n||e)})),t}));var Mn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},jn=Mn,Ln=Ce,_n=Qe,zn=_e?_e.prototype:void 0,In=zn?zn.toString:void 0;var Nn=function e(t){if("string"==typeof t)return t;if(Ln(t))return jn(t,e)+"";if(_n(t))return In?In.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Pn=Nn;var Wn=Ce,Yn=ot,Vn=Hn,Un=function(e){return null==e?"":Pn(e)};var Zn=function(e,t){return Wn(e)?e:Yn(e,t)?[e]:Vn(Un(e))},qn=Qe;var Xn=function(e){if("string"==typeof e||qn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Gn=Zn,Kn=Xn;var Jn=function(e,t){for(var n=0,r=(t=Gn(t,e)).length;null!=e&&n<r;)e=e[Kn(t[n++])];return n&&n==r?e:void 0},Qn=Jn;var er=function(e,t,n){var r=null==e?void 0:Qn(e,t);return void 0===r?n:r},tr=Te(er);const nr=(e,t,n)=>t?tr(n,t)||tr(e,t):n||e,rr=(e,t)=>{const n=t||e.defaultValue;return tr(e.collections,n)};var or;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(or||(or={}));const ir={collections:{base:ke,oneservice:Ae},defaultValue:"base"},ar=e=>t=>{const n=t.theme,r=rr(ir,n[or.textStyleScheme]);return n.options&&n.options.textStyle?nr(r,e,n.options.textStyle):nr(r,e)},lr={D1:{fontFamily:ar("D1.fontFamily"),fontSize:ar("D1.fontSize"),fontWeight:ar("D1.fontWeight"),lineHeight:ar("D1.lineHeight"),letterSpacing:ar("D1.letterSpacing")},D2:{fontFamily:ar("D2.fontFamily"),fontSize:ar("D2.fontSize"),fontWeight:ar("D2.fontWeight"),lineHeight:ar("D2.lineHeight"),letterSpacing:ar("D2.letterSpacing")},D3:{fontFamily:ar("D3.fontFamily"),fontSize:ar("D3.fontSize"),fontWeight:ar("D3.fontWeight"),lineHeight:ar("D3.lineHeight"),letterSpacing:ar("D3.letterSpacing")},D4:{fontFamily:ar("D4.fontFamily"),fontSize:ar("D4.fontSize"),fontWeight:ar("D4.fontWeight"),lineHeight:ar("D4.lineHeight"),letterSpacing:ar("D4.letterSpacing")},DBody:{fontFamily:ar("DBody.fontFamily"),fontSize:ar("DBody.fontSize"),fontWeight:ar("DBody.fontWeight"),lineHeight:ar("DBody.lineHeight"),letterSpacing:ar("DBody.letterSpacing")},H1:{fontFamily:ar("H1.fontFamily"),fontSize:ar("H1.fontSize"),fontWeight:ar("H1.fontWeight"),lineHeight:ar("H1.lineHeight"),letterSpacing:ar("H1.letterSpacing")},H2:{fontFamily:ar("H2.fontFamily"),fontSize:ar("H2.fontSize"),fontWeight:ar("H2.fontWeight"),lineHeight:ar("H2.lineHeight"),letterSpacing:ar("H2.letterSpacing")},H3:{fontFamily:ar("H3.fontFamily"),fontSize:ar("H3.fontSize"),fontWeight:ar("H3.fontWeight"),lineHeight:ar("H3.lineHeight"),letterSpacing:ar("H3.letterSpacing")},H4:{fontFamily:ar("H4.fontFamily"),fontSize:ar("H4.fontSize"),fontWeight:ar("H4.fontWeight"),lineHeight:ar("H4.lineHeight"),letterSpacing:ar("H4.letterSpacing")},H5:{fontFamily:ar("H5.fontFamily"),fontSize:ar("H5.fontSize"),fontWeight:ar("H5.fontWeight"),lineHeight:ar("H5.lineHeight"),letterSpacing:ar("H5.letterSpacing")},H6:{fontFamily:ar("H6.fontFamily"),fontSize:ar("H6.fontSize"),fontWeight:ar("H6.fontWeight"),lineHeight:ar("H6.lineHeight"),letterSpacing:ar("H6.letterSpacing")},Body:{fontFamily:ar("Body.fontFamily"),fontSize:ar("Body.fontSize"),fontWeight:ar("Body.fontWeight"),lineHeight:ar("Body.lineHeight"),letterSpacing:ar("Body.letterSpacing")},BodySmall:{fontFamily:ar("BodySmall.fontFamily"),fontSize:ar("BodySmall.fontSize"),fontWeight:ar("BodySmall.fontWeight"),lineHeight:ar("BodySmall.lineHeight"),letterSpacing:ar("BodySmall.letterSpacing")},XSmall:{fontFamily:ar("XSmall.fontFamily"),fontSize:ar("XSmall.fontSize"),fontWeight:ar("XSmall.fontWeight"),lineHeight:ar("XSmall.lineHeight"),letterSpacing:ar("XSmall.letterSpacing")}},cr=e=>{switch(e){case 700:case"bold":return Oe.Bold;case 600:case"semibold":return Oe.Semibold;case 300:case"light":return Oe.Light;case 400:case"regular":return Oe.Regular;default:return""}},sr=(e,t)=>n=>{var r;const o=lr[e].fontFamily(n),i=lr[e].fontWeight(n);return Object.values(Oe).includes(o)?y`
                font-family: ${cr(t)||cr(i)||o};
                font-weight: normal !important;
            `:y`
            font-family: ${o};
            font-weight: ${null!==(r=ur(t)||i)&&void 0!==r?r:"normal"};
        `},ur=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},dr=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},fr=(e,t,n=!1)=>r=>{const o=lr[e],i=o.fontSize(r);return y`
            ${sr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},hr=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${dr(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${dr(n)}
        `;function pr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const gr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},mr=e=>t=>{const n=t.theme,r=rr(gr,n[or.colorScheme]);return n.options&&n.options.color?nr(r,e,n.options.color):nr(r,e)},vr={Brand:{1:mr("Brand.1"),2:mr("Brand.2"),3:mr("Brand.3"),4:mr("Brand.4"),5:mr("Brand.5"),6:mr("Brand.6")},Primary:mr("Primary"),PrimaryDark:mr("PrimaryDark"),Secondary:mr("Secondary"),Accent:{Light:{1:mr("Accent.Light.1"),2:mr("Accent.Light.2"),3:mr("Accent.Light.3"),4:mr("Accent.Light.4"),5:mr("Accent.Light.5"),6:mr("Accent.Light.6")},Dark:{1:mr("Accent.Dark.1"),2:mr("Accent.Dark.2"),3:mr("Accent.Dark.3")}},Neutral:{1:mr("Neutral.1"),2:mr("Neutral.2"),3:mr("Neutral.3"),4:mr("Neutral.4"),5:mr("Neutral.5"),6:mr("Neutral.6"),7:mr("Neutral.7"),8:mr("Neutral.8")},Validation:{Green:{Text:mr("Validation.Green.Text"),Icon:mr("Validation.Green.Icon"),Border:mr("Validation.Green.Border"),Background:mr("Validation.Green.Background")},Orange:{Text:mr("Validation.Orange.Text"),Icon:mr("Validation.Orange.Icon"),Border:mr("Validation.Orange.Border"),Background:mr("Validation.Orange.Background"),Badge:mr("Validation.Orange.Badge")},Red:{Text:mr("Validation.Red.Text"),Icon:mr("Validation.Red.Icon"),Border:mr("Validation.Red.Border"),Background:mr("Validation.Red.Background")},Blue:{Text:mr("Validation.Blue.Text"),Icon:mr("Validation.Blue.Icon"),Border:mr("Validation.Blue.Border"),Background:mr("Validation.Blue.Background")}},Shadow:{Accent:mr("Shadow.Accent"),Red:mr("Shadow.Red"),Elevation:mr("Shadow.Elevation")}};var yr;!function(e){e.D1=v.h1`
        ${e=>y`
                ${fr("D1",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>y`
                ${fr("D2",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>y`
                ${fr("D3",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>y`
                ${fr("D4",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>y`
                ${fr("DBody",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>y`
                ${fr("H1",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>y`
                ${fr("H2",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>y`
                ${fr("H3",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>y`
                ${fr("H4",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>y`
                ${fr("H5",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>y`
                ${fr("H6",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>y`
                ${fr("Body",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>y`
                ${fr("BodySmall",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>y`
                ${fr("XSmall",e.weight,e.paragraph)}
                color: ${vr.Neutral[1]};
                ${hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>xr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>xr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(yr||(yr={}));const br=v.a`
    ${e=>y`
            ${fr(e.textStyle,e.weight)}
            color: ${vr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${vr.Secondary};

                svg {
                    color: ${vr.Secondary};
                }
            }
        `}
`,wr=v(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,xr=n=>{var{external:r=!1,children:o}=n,i=pr(n,["external","children"]);return e(br,Object.assign({},i,{children:[o,r&&t(wr,{})]}))};var Sr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Sr||(Sr={}));const $r={[or.colorScheme]:"base",[or.textStyleScheme]:"base",[or.designTokenScheme]:"base",[or.resourceScheme]:"base"};var Fr;or.colorScheme,or.textStyleScheme,or.designTokenScheme,or.resourceScheme,or.colorScheme,or.textStyleScheme,or.designTokenScheme,or.resourceScheme,or.colorScheme,or.textStyleScheme,or.designTokenScheme,or.resourceScheme,or.colorScheme,or.textStyleScheme,or.designTokenScheme,or.resourceScheme,or.colorScheme,or.textStyleScheme,or.designTokenScheme,or.resourceScheme,function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Fr||(Fr={}));const Dr=y`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,Br=v.div`
    ${e=>fr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${e=>e.$selected?vr.Primary:vr.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Dr}
`,Er=v.div`
    color: ${vr.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Dr}

    ${e=>"next-line"===e.$labelDisplayType?y`
                    ${fr("BodySmall","semibold")}
                `:y`
                    ${fr("Body","regular")}
                `}
`,Or=v.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return y`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return y`
                    ${Br} {
                        display: inline;
                    }

                    ${Er} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,kr=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,Ar=v.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,Rr=({displayType:r="inline",label:o,maxLines:i=2,selected:a,sublabel:l,truncationType:c="middle",variant:s})=>{const u=b()||$r,d=lr.Body.fontSize({theme:u}),f=lr.Body.fontFamily({theme:u}),{ref:g,width:m}=Ee(),v=h((e=>{if("inline"!==r)return!1;return Fr.getTextWidth(e,`${d}rem '${f}'`)>m*i-50}),[m,r,d,f,i]),y=p((()=>v(o)),[v,o]),w=p((()=>l&&v(l)),[v,l]),x=y||w?"next-line":r,S=r=>e(n,{children:[t(kr,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r})),t(Ar,Object.assign({$maxLines:i,"aria-hidden":!0},{children:r}))]});return e(Or,Object.assign({ref:g,$labelDisplayType:x},{children:[t(Br,Object.assign({"aria-label":o,$maxLines:i,$selected:a,$truncateType:c,$variant:s},{children:"middle"===c&&y?S(o):o})),l&&t(Er,Object.assign({"aria-label":l,$maxLines:i,$truncateType:c,$labelDisplayType:r},{children:"middle"===c&&w?S(l):l}))]}))};var Tr=un;var Cr=un,Hr=dn,Mr=On;var jr=un,Lr=function(){this.__data__=new Tr,this.size=0},_r=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},zr=function(e){return this.__data__.get(e)},Ir=function(e){return this.__data__.has(e)},Nr=function(e,t){var n=this.__data__;if(n instanceof Cr){var r=n.__data__;if(!Hr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Mr(r)}return n.set(e,t),this.size=n.size,this};function Pr(e){var t=this.__data__=new jr(e);this.size=t.size}Pr.prototype.clear=Lr,Pr.prototype.delete=_r,Pr.prototype.get=zr,Pr.prototype.has=Ir,Pr.prototype.set=Nr;var Wr=Pr;var Yr=On,Vr=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ur=function(e){return this.__data__.has(e)};function Zr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Yr;++t<n;)this.add(e[t])}Zr.prototype.add=Zr.prototype.push=Vr,Zr.prototype.has=Ur;var qr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var Xr=Zr,Gr=qr,Kr=function(e,t){return e.has(t)};var Jr=function(e,t,n,r,o,i){var a=1&n,l=e.length,c=t.length;if(l!=c&&!(a&&c>l))return!1;var s=i.get(e),u=i.get(t);if(s&&u)return s==t&&u==e;var d=-1,f=!0,h=2&n?new Xr:void 0;for(i.set(e,t),i.set(t,e);++d<l;){var p=e[d],g=t[d];if(r)var m=a?r(g,p,d,t,e,i):r(p,g,d,e,t,i);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Gr(t,(function(e,t){if(!Kr(h,t)&&(p===e||o(p,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!o(p,g,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var Qr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var eo=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},to=Le.Uint8Array,no=Ut,ro=Jr,oo=Qr,io=eo,ao=_e?_e.prototype:void 0,lo=ao?ao.valueOf:void 0;var co=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new to(e),new to(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return no(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var l=oo;case"[object Set]":var c=1&r;if(l||(l=io),e.size!=t.size&&!c)return!1;var s=a.get(e);if(s)return s==t;r|=2,a.set(e,t);var u=ro(l(e),l(t),r,o,i,a);return a.delete(e),u;case"[object Symbol]":if(lo)return lo.call(e)==lo.call(t)}return!1};var so=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},uo=so,fo=Ce;var ho=function(e,t,n){var r=t(e);return fo(e)?r:uo(r,n(e))};var po=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var go=po,mo=function(){return[]},vo=Object.prototype.propertyIsEnumerable,yo=Object.getOwnPropertySymbols,bo=yo?function(e){return null==e?[]:(e=Object(e),go(yo(e),(function(t){return vo.call(e,t)})))}:mo;var wo=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},xo=Xe,So=Ge;var $o=function(e){return So(e)&&"[object Arguments]"==xo(e)},Fo=Ge,Do=Object.prototype,Bo=Do.hasOwnProperty,Eo=Do.propertyIsEnumerable,Oo=$o(function(){return arguments}())?$o:function(e){return Fo(e)&&Bo.call(e,"callee")&&!Eo.call(e,"callee")},ko={exports:{}};var Ao=function(){return!1};!function(e,t){var n=Le,r=Ao,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=(a?a.isBuffer:void 0)||r;e.exports=l}(ko,ko.exports);var Ro=ko.exports,To=/^(?:0|[1-9]\d*)$/;var Co=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&To.test(e))&&e>-1&&e%1==0&&e<t};var Ho=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Mo=Xe,jo=Ho,Lo=Ge,_o={};_o["[object Float32Array]"]=_o["[object Float64Array]"]=_o["[object Int8Array]"]=_o["[object Int16Array]"]=_o["[object Int32Array]"]=_o["[object Uint8Array]"]=_o["[object Uint8ClampedArray]"]=_o["[object Uint16Array]"]=_o["[object Uint32Array]"]=!0,_o["[object Arguments]"]=_o["[object Array]"]=_o["[object ArrayBuffer]"]=_o["[object Boolean]"]=_o["[object DataView]"]=_o["[object Date]"]=_o["[object Error]"]=_o["[object Function]"]=_o["[object Map]"]=_o["[object Number]"]=_o["[object Object]"]=_o["[object RegExp]"]=_o["[object Set]"]=_o["[object String]"]=_o["[object WeakMap]"]=!1;var zo=function(e){return Lo(e)&&jo(e.length)&&!!_o[Mo(e)]};var Io=function(e){return function(t){return e(t)}},No={exports:{}};!function(e,t){var n=He,r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(No,No.exports);var Po=No.exports,Wo=zo,Yo=Io,Vo=Po&&Po.isTypedArray,Uo=Vo?Yo(Vo):Wo,Zo=wo,qo=Oo,Xo=Ce,Go=Ro,Ko=Co,Jo=Uo,Qo=Object.prototype.hasOwnProperty;var ei=function(e,t){var n=Xo(e),r=!n&&qo(e),o=!n&&!r&&Go(e),i=!n&&!r&&!o&&Jo(e),a=n||r||o||i,l=a?Zo(e.length,String):[],c=l.length;for(var s in e)!t&&!Qo.call(e,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ko(s,c))||l.push(s);return l},ti=Object.prototype;var ni=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ti)};var ri=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),oi=ni,ii=ri,ai=Object.prototype.hasOwnProperty;var li=st,ci=Ho;var si=function(e){return null!=e&&ci(e.length)&&!li(e)},ui=ei,di=function(e){if(!oi(e))return ii(e);var t=[];for(var n in Object(e))ai.call(e,n)&&"constructor"!=n&&t.push(n);return t},fi=si;var hi=function(e){return fi(e)?ui(e):di(e)},pi=ho,gi=bo,mi=hi;var vi=function(e){return pi(e,mi,gi)},yi=Object.prototype.hasOwnProperty;var bi=function(e,t,n,r,o,i){var a=1&n,l=vi(e),c=l.length;if(c!=vi(t).length&&!a)return!1;for(var s=c;s--;){var u=l[s];if(!(a?u in t:yi.call(t,u)))return!1}var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var h=!0;i.set(e,t),i.set(t,e);for(var p=a;++s<c;){var g=e[u=l[s]],m=t[u];if(r)var v=a?r(m,g,u,t,e,i):r(g,m,u,e,t,i);if(!(void 0===v?g===m||o(g,m,n,r,i):v)){h=!1;break}p||(p="constructor"==u)}if(h&&!p){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},wi=Et(Le,"DataView"),xi=dn,Si=Et(Le,"Promise"),$i=Et(Le,"Set"),Fi=Et(Le,"WeakMap"),Di=Xe,Bi=pt,Ei="[object Map]",Oi="[object Promise]",ki="[object Set]",Ai="[object WeakMap]",Ri="[object DataView]",Ti=Bi(wi),Ci=Bi(xi),Hi=Bi(Si),Mi=Bi($i),ji=Bi(Fi),Li=Di;(wi&&Li(new wi(new ArrayBuffer(1)))!=Ri||xi&&Li(new xi)!=Ei||Si&&Li(Si.resolve())!=Oi||$i&&Li(new $i)!=ki||Fi&&Li(new Fi)!=Ai)&&(Li=function(e){var t=Di(e),n="[object Object]"==t?e.constructor:void 0,r=n?Bi(n):"";if(r)switch(r){case Ti:return Ri;case Ci:return Ei;case Hi:return Oi;case Mi:return ki;case ji:return Ai}return t});var _i=Wr,zi=Jr,Ii=co,Ni=bi,Pi=Li,Wi=Ce,Yi=Ro,Vi=Uo,Ui="[object Arguments]",Zi="[object Array]",qi="[object Object]",Xi=Object.prototype.hasOwnProperty;var Gi=function(e,t,n,r,o,i){var a=Wi(e),l=Wi(t),c=a?Zi:Pi(e),s=l?Zi:Pi(t),u=(c=c==Ui?qi:c)==qi,d=(s=s==Ui?qi:s)==qi,f=c==s;if(f&&Yi(e)){if(!Yi(t))return!1;a=!0,u=!1}if(f&&!u)return i||(i=new _i),a||Vi(e)?zi(e,t,n,r,o,i):Ii(e,t,c,n,r,o,i);if(!(1&n)){var h=u&&Xi.call(e,"__wrapped__"),p=d&&Xi.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return i||(i=new _i),o(g,m,n,r,i)}}return!!f&&(i||(i=new _i),Ni(e,t,n,r,o,i))},Ki=Ge;var Ji=function e(t,n,r,o,i){return t===n||(null==t||null==n||!Ki(t)&&!Ki(n)?t!=t&&n!=n:Gi(t,n,r,o,e,i))},Qi=Wr,ea=Ji;var ta=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){var c=(l=n[o])[0],s=e[c],u=l[1];if(a&&l[2]){if(void 0===s&&!(c in e))return!1}else{var d=new Qi;if(r)var f=r(s,u,c,e,t,d);if(!(void 0===f?ea(u,s,3,r,d):f))return!1}}return!0},na=it;var ra=function(e){return e==e&&!na(e)},oa=ra,ia=hi;var aa=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},la=ta,ca=function(e){for(var t=ia(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,oa(o)]}return t},sa=aa;var ua=Zn,da=Oo,fa=Ce,ha=Co,pa=Ho,ga=Xn;var ma=function(e,t,n){for(var r=-1,o=(t=ua(t,e)).length,i=!1;++r<o;){var a=ga(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&pa(o)&&ha(a,o)&&(fa(e)||da(e))},va=function(e,t){return null!=e&&t in Object(e)},ya=ma;var ba=Ji,wa=er,xa=function(e,t){return null!=e&&ya(e,t,va)},Sa=ot,$a=ra,Fa=aa,Da=Xn;var Ba=Jn;var Ea=function(e){return function(t){return null==t?void 0:t[e]}},Oa=function(e){return function(t){return Ba(t,e)}},ka=ot,Aa=Xn;var Ra=function(e){var t=ca(e);return 1==t.length&&t[0][2]?sa(t[0][0],t[0][1]):function(n){return n===e||la(n,e,t)}},Ta=function(e,t){return Sa(e)&&$a(t)?Fa(Da(e),t):function(n){var r=wa(n,e);return void 0===r&&r===t?xa(n,e):ba(t,r,3)}},Ca=function(e){return e},Ha=Ce,Ma=function(e){return ka(e)?Ea(Aa(e)):Oa(e)};var ja=function(e){return"function"==typeof e?e:null==e?Ca:"object"==typeof e?Ha(e)?Ta(e[0],e[1]):Ra(e):Ma(e)},La=ja,_a=si,za=hi;var Ia=function(e){return function(t,n,r){var o=Object(t);if(!_a(t)){var i=La(n);t=za(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}};var Na=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Pa=/\s/;var Wa=function(e){for(var t=e.length;t--&&Pa.test(e.charAt(t)););return t},Ya=Wa,Va=/^\s+/;var Ua=function(e){return e?e.slice(0,Ya(e)+1).replace(Va,""):e},Za=it,qa=Qe,Xa=/^[-+]0x[0-9a-f]+$/i,Ga=/^0b[01]+$/i,Ka=/^0o[0-7]+$/i,Ja=parseInt;var Qa=function(e){if("number"==typeof e)return e;if(qa(e))return NaN;if(Za(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Za(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ua(e);var n=Ga.test(e);return n||Ka.test(e)?Ja(e.slice(2),n?2:8):Xa.test(e)?NaN:+e},el=1/0;var tl=function(e){return e?(e=Qa(e))===el||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var nl=Na,rl=ja,ol=function(e){var t=tl(e),n=t%1;return t==t?n?t-n:t:0},il=Math.max;var al=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:ol(n);return o<0&&(o=il(r+o,0)),nl(e,rl(t),o)},ll=Te(Ia(al)),cl=Ji;var sl=Te((function(e,t){return cl(e,t)}));const ul={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},dl=e=>Object.keys(ul).reduce(((t,n)=>{const r=ul[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),fl=dl("max-width"),hl=(dl("min-width"),v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),pl=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,gl=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||vr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${pl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ml=v(gl)`
    animation-delay: -0.45s;
`,vl=v(gl)`
    animation-delay: -0.3s;
`,yl=v(gl)`
    animation-delay: -0.15s;
`,bl={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${vr.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${vr.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${vr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${vr.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${vr.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${vr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},wl=e=>t=>{var n;const r=t.theme,o=rr(bl,r[or.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?nr(o,e,r.options.designToken):nr(o,e)},xl={InputBoxShadow:wl("InputBoxShadow"),InputErrorBoxShadow:wl("InputErrorBoxShadow"),ElevationBoxShadow:wl("ElevationBoxShadow"),Table:{Header:wl("Table.Header"),Cell:{Primary:wl("Table.Cell.Primary"),Secondary:wl("Table.Cell.Secondary"),Selected:wl("Table.Cell.Selected"),Hover:wl("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:wl("Button.Danger.BackgroundColor"),Hover:wl("Button.Danger.Hover"),Primary:wl("Button.Danger.Primary"),Border:wl("Button.Danger.Border")}}};v.button`
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
                    background-color: ${vr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?xl.Button.Danger.Border:vr.Primary};

                    color: ${e.$buttonIsDanger?xl.Button.Danger.Primary:vr.Primary};
                `;case"light":return y`
                    background-color: ${vr.Neutral[8]};
                    border: 1px solid ${vr.Neutral[5]};

                    color: ${e.$buttonIsDanger?xl.Button.Danger.Primary:vr.Primary};
                `;case"disabled":return y`
                    background-color: ${vr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${vr.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?xl.Button.Danger.Primary:vr.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?xl.Button.Danger.Hover:vr.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?xl.Button.Danger.BackgroundColor:vr.Primary};
                    border: 1px solid transparent;

                    ${fl.mobileL} {
                        width: 100%;
                    }

                    color: ${vr.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${fr("H5","semibold")}

                    ${fl.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${fr("H4","semibold")}

                    ${fl.mobileS} {
                        height: auto;
                    }
                `}
`;const Sl=v((({color:n,className:r,size:o=18})=>e(hl,Object.assign({className:r,$size:o,$color:n},{children:[t(gl,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(ml,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(vl,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(yl,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?xl.Button.Danger.Primary:vr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=vr.Neutral[3](e);break;default:t=vr.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`;var $l={exports:{}};$l.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],s=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=s("months"),n=(s("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=s("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,c=0;c<l;c+=1){var s=a[c],u=d[s],f=u&&u[0],h=u&&u[1];a[c]=h?{regex:f,parser:h}:s.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,c=o.parser,s=e.slice(r),u=i.exec(s)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var c=!0===a[2],s=!0===a[3],u=c||s,d=a[2];s&&(d=a[2]),i=this.$locale(),!c&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,c=r.minutes,s=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var v=l||0,y=c||0,b=s||0,w=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,w)):new Date(g,m,p,v,y,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Fl,Dl,Bl=Te($l.exports),El={exports:{}},Ol=Te(El.exports=(Fl={year:0,month:1,day:2,hour:3,minute:4,second:5},Dl={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Dl[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Dl[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],c=l.type,s=l.value,u=Fl[c];u>=0&&(i[u]=parseInt(s,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),c=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var s=c.utcOffset();c=c.add(o-s,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,c=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var s=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),c,l),u=s[0],d=s[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),kl={exports:{}};kl.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",c="week",s="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,s),i=n-o<0,a=t.clone().add(r+(i?-1:1),s);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:s,y:d,w:c,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var x="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},F=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},D=y;D.l=$,D.i=S,D.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return F(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<F(e)},v.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),h=function(e,t){var o=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case s:return r?h(1,m):h(0,m+1);case c:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?v-w:v+(6-w),m);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,c=D.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[s]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],p=c===l?this.$D+(t-this.$W):t;if(c===s||c===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[D.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=D.p(u),g=function(e){var t=F(h);return D.w(t.date(t.date()+Math.round(e*r)),h)};if(p===s)return this.set(s,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===c)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return D.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,l=this.$M,c=n.weekdays,s=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return D.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return l+1;case"MM":return D.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,s,3);case"MMMM":return d(s,l);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=D.p(f),v=F(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,w=function(){return D.m(g,v)};switch(m){case d:p=w()/12;break;case s:p=w();break;case u:p=w()/3;break;case c:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:D.a(p)},v.daysInMonth=function(){return this.endOf(s).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),E=B.prototype;return F.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",s],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,B,F),e.$i=!0),F},F.locale=$,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var Al=Te(kl.exports),Rl={exports:{}};Rl.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],c=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var Tl=Te(Rl.exports),Cl={exports:{}};Cl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Hl=Te(Cl.exports),Ml={exports:{}};Ml.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var jl,Ll=Te(Ml.exports);Al.extend(Tl),Al.extend(Hl),Al.extend(Ll),Al.extend(Bl),Al.extend(Ol),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Al(t).startOf("week");return _l(n).map((e=>zl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return zl(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Al(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Al(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Al(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Al(r):void 0,o?Al(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(jl||(jl={}));const _l=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},zl=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Il=[1,3,5,7,8,10,12],Nl=[4,6,9,11];var Pl,Wl,Yl;function Vl(e){const t=i(null);return f((()=>{t.current=e}),[e]),h(((...e)=>t.current(...e)),[])}!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Il.includes(i)?Math.min(o,31).toString():Nl.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Al(e,n);return Al(t,n).diff(r,"minute")},e.toDayjs=e=>e?Al(e):Al(),e.addMinutesToTime=(e,t,n="HH:mm")=>Al(e,n).add(t,"minutes").format(n)}(Pl||(Pl={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Al(e).isBefore(r,"day"))||!(!o||!Al(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Al(e).isValid())return e}return""}}(Wl||(Wl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Yl||(Yl={}));const Ul=e=>{const t=(e=>{const t=i(e),n=i();return d((()=>{n.current=t.current,t.current=e}),[e]),n.current})(e);return t!==e},Zl=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),ql=({children:e})=>{const[n,r]=a(-1);return t(Zl.Provider,Object.assign({value:{focusedIndex:n,setFocusedIndex:r}},{children:e}))},Xl=y`
    border: 1px solid ${vr.Accent.Light[1]};
    box-shadow: ${xl.InputBoxShadow};
`,Gl=y`
    border: 1px solid ${vr.Accent.Light[1]};
    box-shadow: none;
`,Kl=y`
    border: 1px solid ${vr.Neutral[5]};
    box-shadow: none;
`,Jl=y`
    border: 1px solid ${vr.Validation.Red.Border};
    box-shadow: ${xl.InputErrorBoxShadow};
`,Ql=v.div`
    border: 1px solid ${vr.Neutral[5]};
    border-radius: 4px;
    background: ${vr.Neutral[8]};

    :focus-within {
        ${Xl}
    }
    ${e=>e.$focused&&Xl}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Gl}
                }
                ${e.$focused&&Gl}
            `:e.$disabled?y`
                background: ${vr.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Kl}
                }
                ${e.$focused&&Kl}
            `:e.$error?y`
                border: 1px solid ${vr.Validation.Red.Border};

                :focus-within {
                    ${Jl}
                }
                ${e.$focused&&Jl}
            `:void 0}
`;v(Ql)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const ec=v.input`
    ${e=>fr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${vr.Neutral[1]};
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
        color: ${vr.Neutral[3]};
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
`,tc=v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${vr.Primary};
    }
`,nc=v.div`
    overflow: hidden;
    border: 1px solid ${vr.Neutral[5]};
    border-radius: 4px;
    background: ${vr.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${fl.mobileL} {
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
        background: ${vr.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,rc=v.div`
    background: transparent;
    padding: 0.5rem;
`,oc=v.ul`
    list-style-type: none;
`,ic=v.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${vr.Accent.Light[3]};

    ${e=>e.$active&&y`
            background: ${vr.Accent.Light[5]};
        `}
`,ac=v(O)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${vr.Primary};
`,lc=v.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,cc=v(E)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${vr.Primary};
`,sc=v(B)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${vr.Accent.Light[2]};
`,uc=v.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,dc=v(tc)`
    ${e=>fr("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${vr.Primary};
`,fc=v(dc)`
    outline-offset: 0.25rem;
`,hc=v(dc)`
    padding: 0.5rem 1rem;
`,pc=v.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,gc=v.div`
    ${e=>fr("small"===e.$variant?"BodySmall":"Body","regular")}
`,mc=v(D)`
    ${e=>{const t="small"===e.$variant?1:1.125;return y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${vr.Validation.Red.Icon};
`,vc=v.button`
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
                background-color: ${vr.Neutral[7]};
            `}
    }
`,yc=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=pr(e,["children","focusHighlight","focusOutline","type"]);return t(vc,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),bc=e=>"small"===e?1:1.125,wc=e=>y`
        height: ${bc(e)}rem;
        width: ${bc(e)}rem;
    `,xc=v.div`
    background: ${vr.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,Sc=v.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,$c=v(ec)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,Fc=v(A)`
    color: ${vr.Neutral[3]};
    flex-shrink: 0;
    ${e=>wc(e.$variant)}
`,Dc=v(yc)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${vr.Neutral[3]};
    cursor: pointer;

    ${e=>y`
            svg {
                ${wc(e.$variant)}
            }
        `}
`,Bc=g(((n,r)=>{var{value:o,variant:i,onClear:a}=n,l=pr(n,["value","variant","onClear"]);return e(xc,{children:[e(Sc,{children:[t(Fc,{$variant:i,"aria-hidden":!0}),t($c,Object.assign({ref:r,value:o,$variant:i},l))]}),o&&t(Dc,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:t(k,{"aria-hidden":!0})}))]})})),Ec=({listItems:n,multiSelect:r,selectedItems:o,disableItemFocus:l,itemsLoadState:c="success",itemTruncationType:s="end",itemMaxLines:u=2,labelDisplayType:f="inline",variant:h="default",listboxId:p,width:g,onSelectItem:v,onSelectAll:y,onDismiss:b,onRetry:w,valueExtractor:x,listExtractor:S,renderListItem:$,renderCustomCallToAction:F,enableSearch:D,hideNoResultsDisplay:B,searchPlaceholder:E="Search",searchFunction:O,onSearch:k})=>{const{focusedIndex:A,setFocusedIndex:R}=m(Zl),[T,C]=a(""),[H,M]=a(n),j=Ul(c),L=(()=>{const[e,t]=a(!1);return d((()=>{t(!0)}),[]),e})(),_=i(),z=i(),I=i([]),N=i(),P=e=>S?S(e):e.toString(),W=Vl((()=>O(T))),Y=Vl((()=>n.filter((e=>{var t;const n=P(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),o="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),i=T.trim().toLowerCase();return r.includes(i)||o&&o.includes(i)})))),V=(e,t)=>{R(t),null==v||v(e,(e=>x?x(e):e)(e))},U=e=>{const t=e.target.value;C(t),null==k||k()},Z=()=>{var e;C(""),null===(e=N.current)||void 0===e||e.focus(),null==k||k()},q=()=>{null==w||w()};((e,t,n="window",r)=>{const o=i();d((()=>{o.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])})("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),A<H.length-1){const e=A+1;null===(t=I.current[e])||void 0===t||t.focus(),R(e)}break;case"ArrowUp":if(e.preventDefault(),A>0){const e=A-1;null===(n=I.current[e])||void 0===n||n.focus(),R(e)}else 0===A&&N.current&&(N.current.focus(),R(-1));break;case"Space":document.activeElement===I.current[A]&&(e.preventDefault(),H[A]&&V(H[A],A))}})),d((()=>{L||l||(N.current?(R(-1),setTimeout((()=>{var e;return null===(e=N.current)||void 0===e?void 0:e.focus()}),200)):I.current[A]?setTimeout((()=>{var e;return null===(e=I.current[A])||void 0===e?void 0:e.focus()}),200):(R(0),setTimeout((()=>{var e;return null===(e=I.current[0])||void 0===e?void 0:e.focus()}),200)))}),[l,A,L,R]),d((()=>{L&&j&&(l||"success"===c&&N.current&&(R(-1),N.current.focus()))}),[L,j,c,R,l]),d((()=>{M(""===T?n:O?W():Y())}),[W,Y,n,O,T]);const X=e=>r?t(e?cc:sc,{"aria-hidden":!0}):e?t(ac,{"aria-hidden":!0}):t(lc,{}),G=(e,n)=>{const r=P(e),o="string"==typeof r?r:r.title,i="string"==typeof r?void 0:r.secondaryLabel;return t(Rr,{displayType:f,label:o,maxLines:u,selected:n,sublabel:i,truncationType:s,variant:h})},K=()=>{if(!w||w&&"success"===c)return H.map(((t,n)=>{const i=(e=>!!ll(o,(t=>sl(t,e))))(t),a=n===A;return e(ic,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>V(t,n),onMouseEnter:()=>(e=>{R(e)})(n),ref:e=>I.current[n]=e,role:"option",tabIndex:a?0:-1,$active:a},{children:[X(i),$?$(t,{selected:i}):G(t,i)]}),((e,t)=>`item_${t}__${x?x(e):e}`)(t,n))}))},J=()=>{if((D||O)&&"success"===c)return t(Bc,{ref:N,onChange:U,value:T,placeholder:E,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Z,variant:h})},Q=()=>{if(r&&H.length>0&&!T&&"success"===c)return t(uc,{children:t(hc,Object.assign({onClick:y,type:"button",$variant:h},{children:0===o.length?"Select all":"Clear all"}))})},ee=()=>{if(!B&&(T||!D)&&0===H.length&&"success"===c)return e(pc,Object.assign({"data-testid":"list-no-results"},{children:[t(mc,{"data-testid":"no-result-icon",$variant:h}),t(gc,Object.assign({$variant:h},{children:"No results found."}))]}))},te=()=>{if(w&&"loading"===c){const n="small"===h?16:18;return e(pc,Object.assign({"data-testid":"list-loading"},{children:[t(Sl,{$buttonStyle:"secondary",size:n}),t(gc,Object.assign({$variant:h},{children:"Loading..."}))]}))}},ne=()=>{if(w&&"fail"===c)return e(pc,Object.assign({"data-testid":"list-fail"},{children:[t(mc,{"data-testid":"load-error-icon",$variant:h}),t(gc,Object.assign({$variant:h},{children:"Failed to load."}))," ",t(fc,Object.assign({onClick:q,type:"button",$variant:h},{children:"Try again."}))]}))};return e(nc,Object.assign({"data-testid":"dropdown-container",ref:_,$width:g},{children:[e(rc,Object.assign({ref:z,"data-testid":"dropdown-list"},{children:[J(),Q(),ee(),te(),ne(),t(oc,Object.assign({role:"listbox",id:p},{children:K()}))]})),(()=>{if(F)return t("div",Object.assign({"data-testid":"custom-cta"},{children:F(b,H)}))})()]}))},Oc="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",kc=v(tc)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>fr("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,Ac=v.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Oc};

    svg {
        color: ${vr.Neutral[3]};
        ${e=>{const t="small"===e.$variant?lr.BodySmall.fontSize:lr.Body.fontSize;return y`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,Rc=g((({children:n,disabled:r,expanded:o,listboxId:i,readOnly:a,variant:l},c)=>e(kc,Object.assign({ref:c,type:"button","aria-expanded":o,"aria-haspopup":"listbox","data-testid":"selector",disabled:r,"aria-controls":i,$variant:l},{children:[n,!a&&t(Ac,Object.assign({$expanded:o,$variant:l},{children:t(R,{"aria-hidden":!0})}))]})))),Tc=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Tc(e.$variant);return y`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Cc=y`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>Tc(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${vr.Accent.Light[3]};
    }
`,Hc=v.button`
    ${Cc}
    cursor: pointer;
`;v.div`
    ${Cc}
`;const Mc=w`
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
    border: 1px solid ${vr.Neutral[5]};
    border-radius: ${"4px"};
    background: ${vr.Neutral[8]};

    :focus-within {
        border: 1px solid ${vr.Accent.Light[1]};
        box-shadow: ${xl.InputBoxShadow};
    }

    ${e=>e.expanded?y`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:y`
                animation: ${Mc} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?y`
                background: ${vr.Neutral[6](e)};

                ${Hc} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${vr.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?y`
                border: none;
                background: transparent !important;

                ${Hc} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?y`
                border: 1px solid ${vr.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${vr.Validation.Red.Border(e)};
                    box-shadow: ${xl.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Oc};
    margin-left: 1rem;
`,v(R)`
    color: ${vr.Neutral[3]};
    ${e=>{let t=lr.Body.fontSize;return"small"===e.$variant&&(t=lr.BodySmall.fontSize),y`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${vr.Neutral[5]};
    margin: 0 0.5rem;
`;const jc=v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`,Lc=v.div`
    ${e=>fr("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return y`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,_c=v(Lc)`
    color: ${vr.Neutral[3]};
`;function zc(e){return Pc(e)?(e.nodeName||"").toLowerCase():"#document"}function Ic(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Nc(e){var t;return null==(t=(Pc(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Pc(e){return e instanceof Node||e instanceof Ic(e).Node}function Wc(e){return e instanceof Element||e instanceof Ic(e).Element}function Yc(e){return e instanceof HTMLElement||e instanceof Ic(e).HTMLElement}function Vc(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof Ic(e).ShadowRoot)}function Uc(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Kc(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Zc(e){return["table","td","th"].includes(zc(e))}function qc(e){const t=Xc(),n=Kc(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Xc(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Gc(e){return["html","body","#document"].includes(zc(e))}function Kc(e){return Ic(e).getComputedStyle(e)}function Jc(e){return Wc(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Qc(e){if("html"===zc(e))return e;const t=e.assignedSlot||e.parentNode||Vc(e)&&e.host||Nc(e);return Vc(t)?t.host:t}function es(e){const t=Qc(e);return Gc(t)?e.ownerDocument?e.ownerDocument.body:e.body:Yc(t)&&Uc(t)?t:es(t)}function ts(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=es(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=Ic(o);return i?t.concat(a,a.visualViewport||[],Uc(o)?o:[],a.frameElement&&n?ts(a.frameElement):[]):t.concat(o,ts(o,[],n))}function ns(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function rs(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Vc(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function os(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function is(e){return!os().includes("jsdom/")&&(!as()&&0===e.width&&0===e.height||as()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function as(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(os())}function ls(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function cs(e){return(null==e?void 0:e.ownerDocument)||document}function ss(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function us(e){return"composedPath"in e?e.composedPath()[0]:e.target}const ds="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function fs(e){return Yc(e)&&e.matches(ds)}function hs(e){e.preventDefault(),e.stopPropagation()}const ps=Math.min,gs=Math.max,ms=Math.round,vs=Math.floor,ys=e=>({x:e,y:e}),bs={left:"right",right:"left",bottom:"top",top:"bottom"},ws={start:"end",end:"start"};function xs(e,t,n){return gs(e,ps(t,n))}function Ss(e,t){return"function"==typeof e?e(t):e}function $s(e){return e.split("-")[0]}function Fs(e){return e.split("-")[1]}function Ds(e){return"x"===e?"y":"x"}function Bs(e){return"y"===e?"height":"width"}function Es(e){return["top","bottom"].includes($s(e))?"y":"x"}function Os(e){return Ds(Es(e))}function ks(e){return e.replace(/start|end/g,(e=>ws[e]))}function As(e){return e.replace(/left|right|bottom|top/g,(e=>bs[e]))}function Rs(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Ts(e,t,n){let{reference:r,floating:o}=e;const i=Es(t),a=Os(t),l=Bs(a),c=$s(t),s="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(c){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(Fs(t)){case"start":h[a]-=f*(n&&s?-1:1);break;case"end":h[a]+=f*(n&&s?-1:1)}return h}async function Cs(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:c}=e,{boundary:s="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Ss(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===d?"reference":"floating":d],m=Rs(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:s,rootBoundary:u,strategy:c})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=Rs(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:c}):v);return{top:(m.top-w.top+p.top)/b.y,bottom:(w.bottom-m.bottom+p.bottom)/b.y,left:(m.left-w.left+p.left)/b.x,right:(w.right-m.right+p.right)/b.x}}function Hs(e){const t=Kc(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Yc(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=ms(n)!==i||ms(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function Ms(e){return Wc(e)?e:e.contextElement}function js(e){const t=Ms(e);if(!Yc(t))return ys(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Hs(t);let a=(i?ms(n.width):n.width)/r,l=(i?ms(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const Ls=ys(0);function _s(e){const t=Ic(e);return Xc()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Ls}function zs(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Ms(e);let a=ys(1);t&&(r?Wc(r)&&(a=js(r)):a=js(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Ic(e))&&t}(i,n,r)?_s(i):ys(0);let c=(o.left+l.x)/a.x,s=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=Ic(i),t=r&&Wc(r)?Ic(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=js(o),t=o.getBoundingClientRect(),r=Kc(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,s*=e.y,u*=e.x,d*=e.y,c+=i,s+=a,n=Ic(o),o=n.frameElement}}return Rs({width:u,height:d,x:c,y:s})}const Is=[":popover-open",":modal"];function Ns(e){return Is.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Ps(e){return zs(Nc(e)).left+Jc(e).scrollLeft}function Ws(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Ic(e),r=Nc(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,c=0;if(o){i=o.width,a=o.height;const e=Xc();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:l,y:c}}(e,n);else if("document"===t)r=function(e){const t=Nc(e),n=Jc(e),r=e.ownerDocument.body,o=gs(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=gs(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Ps(e);const l=-n.scrollTop;return"rtl"===Kc(r).direction&&(a+=gs(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(Nc(e));else if(Wc(t))r=function(e,t){const n=zs(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Yc(e)?js(e):ys(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=_s(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return Rs(r)}function Ys(e,t){const n=Qc(e);return!(n===t||!Wc(n)||Gc(n))&&("fixed"===Kc(n).position||Ys(n,t))}function Vs(e,t,n){const r=Yc(t),o=Nc(t),i="fixed"===n,a=zs(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=ys(0);if(r||!r&&!i)if(("body"!==zc(t)||Uc(o))&&(l=Jc(t)),r){const e=zs(t,!0,i,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else o&&(c.x=Ps(o));return{x:a.left+l.scrollLeft-c.x,y:a.top+l.scrollTop-c.y,width:a.width,height:a.height}}function Us(e){return"static"===Kc(e).position}function Zs(e,t){return Yc(e)&&"fixed"!==Kc(e).position?t?t(e):e.offsetParent:null}function qs(e,t){const n=Ic(e);if(Ns(e))return n;if(!Yc(e)){let t=Qc(e);for(;t&&!Gc(t);){if(Wc(t)&&!Us(t))return t;t=Qc(t)}return n}let r=Zs(e,t);for(;r&&Zc(r)&&Us(r);)r=Zs(r,t);return r&&Gc(r)&&Us(r)&&!qc(r)?n:r||function(e){let t=Qc(e);for(;Yc(t)&&!Gc(t);){if(qc(t))return t;t=Qc(t)}return null}(e)||n}const Xs={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Nc(r),l=!!t&&Ns(t.floating);if(r===a||l&&i)return n;let c={scrollLeft:0,scrollTop:0},s=ys(1);const u=ys(0),d=Yc(r);if((d||!d&&!i)&&(("body"!==zc(r)||Uc(a))&&(c=Jc(r)),Yc(r))){const e=zs(r);s=js(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-c.scrollLeft*s.x+u.x,y:n.y*s.y-c.scrollTop*s.y+u.y}},getDocumentElement:Nc,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Ns(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=ts(e,[],!1).filter((e=>Wc(e)&&"body"!==zc(e))),o=null;const i="fixed"===Kc(e).position;let a=i?Qc(e):e;for(;Wc(a)&&!Gc(a);){const t=Kc(a),n=qc(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Uc(a)&&!n&&Ys(e,a))?r=r.filter((e=>e!==a)):o=t,a=Qc(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=Ws(t,n,o);return e.top=gs(r.top,e.top),e.right=ps(r.right,e.right),e.bottom=ps(r.bottom,e.bottom),e.left=gs(r.left,e.left),e}),Ws(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:qs,getElementRects:async function(e){const t=this.getOffsetParent||qs,n=this.getDimensions,r=await n(e.floating);return{reference:Vs(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Hs(e);return{width:t,height:n}},getScale:js,isElement:Wc,isRTL:function(e){return"rtl"===Kc(e).direction}};function Gs(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:c=!1}=r,s=Ms(e),u=o||i?[...s?ts(s):[],...ts(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=s&&l?function(e,t){let n,r=null;const o=Nc(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),i();const{left:s,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h={rootMargin:-vs(u)+"px "+-vs(o.clientWidth-(s+d))+"px "+-vs(o.clientHeight-(u+f))+"px "+-vs(s)+"px",threshold:gs(0,ps(1,c))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==c){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(s,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===s&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),s&&!c&&p.observe(s),p.observe(t));let g=c?zs(e):null;return c&&function t(){const r=zs(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,c&&cancelAnimationFrame(f)}}const Ks=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,c=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=$s(n),l=Fs(n),c="y"===Es(n),s=["left","top"].includes(a)?-1:1,u=i&&c?-1:1,d=Ss(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),c?{x:h*u,y:f*s}:{x:f*s,y:h*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+c.x,y:i+c.y,data:{...c,placement:a}}}}},Js=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Ss(e,t),s={x:n,y:r},u=await Cs(t,c),d=Es($s(o)),f=Ds(d);let h=s[f],p=s[d];if(i){const e="y"===f?"bottom":"right";h=xs(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=xs(p+u["y"===d?"top":"left"],p,p-u[e])}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},Qs=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:c,elements:s}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Ss(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=$s(o),y=$s(l)===l,b=await(null==c.isRTL?void 0:c.isRTL(s.floating)),w=f||(y||!g?[As(l)]:function(e){const t=As(e);return[ks(e),t,ks(t)]}(l));f||"none"===p||w.push(...function(e,t,n,r){const o=Fs(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}($s(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(ks)))),i}(l,g,p,b));const x=[l,...w],S=await Cs(t,m),$=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(S[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=Fs(e),o=Os(e),i=Bs(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=As(a)),[a,As(a)]}(o,a,b);$.push(S[e[0]],S[e[1]])}if(F=[...F,{placement:o,overflows:$}],!$.every((e=>e<=0))){var D,B;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(B=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:B.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},eu=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=Ss(e,t),c=await Cs(t,l),s=$s(n),u=Fs(n),d="y"===Es(n),{width:f,height:h}=r.floating;let p,g;"top"===s||"bottom"===s?(p=s,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=s,p="end"===u?"top":"bottom");const m=h-c.top-c.bottom,v=f-c.left-c.right,y=ps(h-c[p],m),b=ps(f-c[g],v),w=!t.middlewareData.shift;let x=y,S=b;if(d?S=u||w?ps(b,v):v:x=u||w?ps(y,m):m,w&&!u){const e=gs(c.left,0),t=gs(c.right,0),n=gs(c.top,0),r=gs(c.bottom,0);d?S=f-2*(0!==e||0!==t?e+t:gs(c.left,c.right)):x=h-2*(0!==n||0!==r?n+r:gs(c.top,c.bottom))}await a({...t,availableWidth:S,availableHeight:x});const $=await o.getDimensions(i.floating);return f!==$.width||h!==$.height?{reset:{rects:!0}}:{}}}},tu=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:c=!0,crossAxis:s=!0}=Ss(e,t),u={x:n,y:r},d=Es(o),f=Ds(d);let h=u[f],p=u[d];const g=Ss(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(s){var v,y;const e="y"===f?"width":"height",t=["top","left"].includes($s(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(v=a.offset)?void 0:v[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(y=a.offset)?void 0:y[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},nu=(e,t,n)=>{const r=new Map,o={platform:Xs,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let s=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Ts(s,r,c),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:v,data:y,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:s,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=v?v:d,h={...h,[i]:{...h[i],...y}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(s=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=Ts(s,f,c))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var ru="undefined"!=typeof document?f:d;function ou(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!ou(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!ou(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function iu(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function au(e,t){const n=iu(e);return Math.round(t*n)/n}function lu(e){const t=r.useRef(e);return ru((()=>{t.current=e})),t}const cu=(e,t)=>({...Js(e),options:[e,t]}),su=(e,t)=>({...tu(e),options:[e,t]}),uu=(e,t)=>({...Qs(e),options:[e,t]}),du=(e,t)=>({...eu(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var fu=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),hu="undefined"==typeof Element,pu=hu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,gu=!hu&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},mu=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},vu=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!mu(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),c=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:a,candidates:c})}else{pu.call(a,fu)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var s=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!mu(s,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(s&&u){var d=e(!0===s?a.children:s.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},yu=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},bu=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!yu(e)?0:e.tabIndex},wu=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},xu=function(e){return"INPUT"===e.tagName},Su=function(e){return function(e){return xu(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||gu(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},$u=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Fu=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=pu.call(e,"details>summary:first-of-type")?e.parentElement:e;if(pu.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return $u(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=gu(e);if(a&&!a.shadowRoot&&!0===r(a))return $u(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&gu(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var c,s,u;l=!(null===(s=a=null===(c=i=gu(a))||void 0===c?void 0:c.host)||void 0===s||null===(u=s.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Du=function(e,t){return!(t.disabled||mu(t)||function(e){return xu(e)&&"hidden"===e.type}(t)||Fu(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!pu.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},Bu=function(e,t){return!(Su(t)||bu(t)<0||!Du(e,t))},Eu=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Ou=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=bu(e);return n<0&&t&&!yu(e)?0:n}(a,i),c=i?e(t.candidates):a;0===l?i?n.push.apply(n,c):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:c})})),r.sort(wu).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},ku=function(e,t){var n;return n=(t=t||{}).getShadowRoot?vu([e],t.includeContainer,{filter:Bu.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Eu}):function(e,t,n){if(mu(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(fu));return t&&pu.call(e,fu)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,Bu.bind(null,t)),Ou(n)},Au=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==pu.call(e,fu)&&Bu(t,e)};const Ru={...r},Tu=Ru.useInsertionEffect||(e=>e());function Cu(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Tu((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let Hu=0;function Mu(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(Hu);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():Hu=requestAnimationFrame(i)}var ju="undefined"!=typeof document?f:d;function Lu(){return Lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lu.apply(this,arguments)}let _u=!1,zu=0;const Iu=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+zu++;const Nu=Ru.useId||function(){const[e,t]=r.useState((()=>_u?Iu():void 0));return ju((()=>{null==e&&t(Iu())}),[]),r.useEffect((()=>{_u=!0}),[]),e};let Pu;"production"!==process.env.NODE_ENV&&(Pu=new Set);const Wu=r.createContext(null),Yu=r.createContext(null),Vu=()=>{var e;return(null==(e=r.useContext(Wu))?void 0:e.id)||null},Uu=()=>r.useContext(Yu);function Zu(e){return"data-floating-ui-"+e}function qu(e){const t=i(e);return ju((()=>{t.current=e})),t}function Xu(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let Gu=new WeakMap,Ku=new WeakSet,Ju={},Qu=0;const ed=e=>e&&(e.host||ed(e.parentNode)),td=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=ed(t);return e.contains(n)?n:null})).filter((e=>null!=e));function nd(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=cs(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=td(t,e),l=new Set,c=new Set(a),s=[];Ju[o]||(Ju[o]=new WeakMap);const u=Ju[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!c.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==zc(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(Gu.get(t)||0)+1,a=(u.get(t)||0)+1;Gu.set(t,r),u.set(t,a),s.push(t),1===r&&n&&Ku.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),Qu++,()=>{s.forEach((e=>{const t=(Gu.get(e)||0)-1,n=(u.get(e)||0)-1;Gu.set(e,t),u.set(e,n),t||(!Ku.has(e)&&i&&e.removeAttribute(i),Ku.delete(e)),n||e.removeAttribute(o)})),Qu--,Qu||(Gu=new WeakMap,Gu=new WeakMap,Ku=new WeakSet,Ju={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const rd=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function od(e,t){const n=ku(e,rd());"prev"===t&&n.reverse();const r=n.indexOf(ns(cs(e)));return n.slice(r+1)[0]}function id(){return od(document.body,"next")}function ad(){return od(document.body,"prev")}function ld(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!rs(n,r)}function cd(e){ku(e,rd()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function sd(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const ud={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function dd(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const fd=r.forwardRef((function(e,t){const[n,o]=r.useState();ju((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",dd),()=>{document.removeEventListener("keydown",dd)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Zu("focus-guard")]:"",style:ud};return r.createElement("span",Lu({},e,i))})),hd=r.createContext(null),pd=Zu("portal");function gd(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=Nu(),i=md(),[a,l]=r.useState(null),c=r.useRef(null);return ju((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{c.current=null}))}),[a]),ju((()=>{if(!o)return;if(c.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(pd,""),e.appendChild(n),c.current=n,l(n)}),[t,o]),ju((()=>{if(!o)return;if(c.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!Wc(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(pd,""),e=r||e,e.appendChild(a),c.current=a,l(a)}),[t,n,o,i]),a}({id:n,root:o}),[l,c]=r.useState(null),s=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&ld(e)){("focusin"===e.type?sd:cd)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(hd.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:s,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:c})),[i,a])},h&&a&&r.createElement(fd,{"data-type":"outside",ref:s,onFocus:e=>{if(ld(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=ad()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:ud}),a&&F(t,a),h&&a&&r.createElement(fd,{"data-type":"outside",ref:u,onFocus:e=>{if(ld(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=id()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const md=()=>r.useContext(hd),vd=20;let yd=[];function bd(e){yd=yd.filter((e=>e.isConnected));let t=e;if(t&&"body"!==zc(t)){if(!Au(t,rd())){const e=ku(t,rd())[0];e&&(t=e)}yd.push(t),yd.length>vd&&(yd=yd.slice(-vd))}}function wd(){return yd.slice().reverse().find((e=>e.isConnected))}const xd=r.forwardRef((function(e,t){return r.createElement("button",Lu({},e,{type:"button",ref:t,tabIndex:-1,style:ud}))}));function Sd(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:c=!0,modal:s=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:v,elements:{domReference:y,floating:b}}=t,w="number"==typeof l&&l<0,x=!!(S=y)&&"combobox"===S.getAttribute("role")&&fs(S)&&w;var S;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,F=qu(i),D=qu(l),B=qu(c),E=Uu(),O=md(),k=r.useRef(null),A=r.useRef(null),R=r.useRef(!1),T=r.useRef(!1),C=null!=O,H=r.useCallback((function(e){return void 0===e&&(e=b),e?ku(e,rd()):[]}),[b]),M=r.useCallback((e=>{const t=H(e);return F.current.map((e=>y&&"reference"===e?y:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[y,b,F,H]);function j(e){return!o&&u&&s?r.createElement(xd,{ref:"start"===e?k:A,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!s)return;function e(e){if("Tab"===e.key){rs(b,ns(cs(b)))&&0===H().length&&!x&&hs(e);const t=M(),n=us(e);"reference"===F.current[0]&&n===y&&(hs(e),e.shiftKey?Mu(t[t.length-1]):Mu(t[1])),"floating"===F.current[1]&&n===b&&e.shiftKey&&(hs(e),Mu(t[0]))}}const t=cs(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,y,b,s,F,x,H,M]),r.useEffect((()=>{if(!o&&d)return b&&Yc(y)?(y.addEventListener("focusout",t),y.addEventListener("pointerdown",e),!s&&b.addEventListener("focusout",t),()=>{y.removeEventListener("focusout",t),y.removeEventListener("pointerdown",e),!s&&b.removeEventListener("focusout",t)}):void 0;function e(){T.current=!0,setTimeout((()=>{T.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(rs(y,t)||rs(b,t)||rs(t,b)||rs(null==O?void 0:O.portalNode,t)||null!=t&&t.hasAttribute(Zu("focus-guard"))||E&&(Xu(E.nodesRef.current,p).find((e=>{var n,r;return rs(null==(n=e.context)?void 0:n.elements.floating,t)||rs(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!T.current&&t!==wd()&&(R.current=!0,g(!1,e))}))}}),[o,y,b,s,p,E,O,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==O||null==(e=O.portalNode)?void 0:e.querySelectorAll("["+Zu("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,A.current,F.current.includes("reference")||x?y:null].filter((e=>null!=e)),n=s||x?nd(e,$,!$):nd(e);return()=>{n()}}}),[o,y,b,s,F,O,x,$]),ju((()=>{if(o||!b)return;const e=ns(cs(b));queueMicrotask((()=>{const t=M(b),n=D.current,r=("number"==typeof n?t[n]:n.current)||b,o=rs(b,e);w||o||!f||Mu(r,{preventScroll:r===b})}))}),[o,f,b,w,M,D]),ju((()=>{if(o||!b)return;let e=!1;const t=cs(b),n=ns(t);let r=v.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&bd(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(as()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||is(i)))}return bd(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=ns(t),o=rs(b,n)||E&&Xu(E.nodesRef.current,p).some((e=>{var t;return rs(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&bd(h.domReference.current);const a=wd();B.current&&!R.current&&Yc(a)&&(a===n||n===t.body||o)&&Mu(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,B,v,h,m,E,p]),ju((()=>{if(!o&&O)return O.setFocusManagerState({modal:s,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{O.setFocusManagerState(null)}}),[o,O,s,f,g,h,d]),ju((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");F.current.includes("floating")||ns(cs(b))!==h.domReference.current&&0===H().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,F,H,w]);const L=!o&&$&&(C||s);return r.createElement(r.Fragment,null,L&&r.createElement(fd,{"data-type":"inside",ref:null==O?void 0:O.beforeInsideRef,onFocus:e=>{if(s){const e=M();Mu("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(R.current=!1,ld(e,O.portalNode)){const e=id()||y;null==e||e.focus()}else{var t;null==(t=O.beforeOutsideRef.current)||t.focus()}}}),!x&&j("start"),n,j("end"),L&&r.createElement(fd,{"data-type":"inside",ref:null==O?void 0:O.afterInsideRef,onFocus:e=>{if(s)Mu(M()[0]);else if(null!=O&&O.preserveTabOrder&&O.portalNode)if(d&&(R.current=!0),ld(e,O.portalNode)){const e=ad()||y;null==e||e.focus()}else{var t;null==(t=O.afterOutsideRef.current)||t.focus()}}}))}function $d(e){return Yc(e.target)&&"BUTTON"===e.target.tagName}function Fd(e){return fs(e)}const Dd={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Bd={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ed=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function Od(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=Nu(),a=r.useRef({}),[l]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),c=null!=Vu();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!Wc(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Pu)&&e.has(o)||(null==(i=Pu)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[s,u]=r.useState(o.reference),d=Cu(((e,t,r)=>{a.current.openEvent=e?t:void 0,l.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:s||o.reference||null,floating:o.floating||null,domReference:o.reference})),[s,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:l,floatingId:i,refs:f})),[t,d,h,l,i,f])}function kd(e){void 0===e&&(e={});const{nodeId:t}=e,n=Od({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,l]=r.useState(null),[c,s]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=Uu();ju((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:c=!0,whileElementsMounted:s,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);ou(h,o)||p(o);const[g,m]=r.useState(null),[v,y]=r.useState(null),b=r.useCallback((e=>{e!==F.current&&(F.current=e,m(e))}),[]),w=r.useCallback((e=>{e!==D.current&&(D.current=e,y(e))}),[]),x=a||g,$=l||v,F=r.useRef(null),D=r.useRef(null),B=r.useRef(d),E=null!=s,O=lu(s),k=lu(i),A=r.useCallback((()=>{if(!F.current||!D.current)return;const e={placement:t,strategy:n,middleware:h};k.current&&(e.platform=k.current),nu(F.current,D.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!ou(B.current,t)&&(B.current=t,S.flushSync((()=>{f(t)})))}))}),[h,t,n,k]);ru((()=>{!1===u&&B.current.isPositioned&&(B.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);ru((()=>(R.current=!0,()=>{R.current=!1})),[]),ru((()=>{if(x&&(F.current=x),$&&(D.current=$),x&&$){if(O.current)return O.current(x,$,A);A()}}),[x,$,A,O,E]);const T=r.useMemo((()=>({reference:F,floating:D,setReference:b,setFloating:w})),[b,w]),C=r.useMemo((()=>({reference:x,floating:$})),[x,$]),H=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!C.floating)return e;const t=au(C.floating,d.x),r=au(C.floating,d.y);return c?{...e,transform:"translate("+t+"px, "+r+"px)",...iu(C.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,c,C.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:A,refs:T,elements:C,floatingStyles:H})),[d,A,T,C,H])}({...e,elements:{...i,...c&&{reference:c}}}),p=r.useCallback((e=>{const t=Wc(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;s(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(Wc(e)||null===e)&&(d.current=e,l(e)),(Wc(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!Wc(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),v=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),y=r.useMemo((()=>({...h,...o,refs:m,elements:v,nodeId:t})),[h,m,v,t,o]);return ju((()=>{o.dataRef.current.floatingContext=y;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=y)})),r.useMemo((()=>({...h,context:y,refs:m,elements:v})),[h,m,v,y])}const Ad="active",Rd="selected";function Td(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[Ad]:t,[Rd]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Ad,Rd].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const Cd=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function Hd(e,t){return"function"==typeof e?e(t):e}function Md(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,c]=r.useState("unmounted"),s=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return s||"close"!==l||c("unmounted"),ju((()=>{if(o){if(n){c("initial");const e=requestAnimationFrame((()=>{c("open")}));return()=>{cancelAnimationFrame(e)}}c("close")}}),[n,o]),{isMounted:s,status:l}}const jd=v.div`
    display: flex;
    flex-direction: column;
`,Ld=e=>"right"===e?"bottom-end":"bottom-start",_d=({enabled:o,isOpen:a,onOpen:l,onClose:c,onDismiss:s,renderElement:u,renderDropdown:d,zIndex:f=50,clickToToggle:h=!1,offset:p=0,alignment:g="left",fitAvailableHeight:m})=>{const v=i(null),y=i(null),{width:b}=Ee({targetRef:v,handleHeight:!1}),{refs:w,floatingStyles:x,context:S}=kd({open:a,onOpenChange:(e,t,n)=>{"escape-key"===n?null==s||s():e&&!a?null==l||l():!e&&a&&(null==c||c(n))},whileElementsMounted:Gs,placement:Ld(g),middleware:[($=p,{...Ks($),options:[$,F]}),uu(),cu({limiter:su()}),du({apply({availableHeight:e}){y.current&&Object.assign(y.current.style,{maxHeight:m?`${e}px`:void 0,overflowY:m?"hidden":void 0})}})]});var $,F;const{isMounted:D,styles:B}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,c=e.placement,s=c.split("-")[0],u=r.useMemo((()=>({side:s,placement:c})),[s,c]),d="number"==typeof l,f=(d?l:l.open)||0,h=(d?l:l.close)||0,[p,g]=r.useState((()=>({...Hd(a,u),...Hd(n,u)}))),{isMounted:m,status:v}=Md(e,{duration:l}),y=qu(n),b=qu(o),w=qu(i),x=qu(a);return ju((()=>{const e=Hd(y.current,u),t=Hd(w.current,u),n=Hd(x.current,u),r=Hd(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===v&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===v&&g({transitionProperty:Object.keys(r).map(Cd).join(","),transitionDuration:f+"ms",...n,...r}),"close"===v){const r=t||e;g({transitionProperty:Object.keys(r).map(Cd).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,y,b,x,f,v,u]),{isMounted:m,styles:p}}(S,{initial:{opacity:0},open:{opacity:1},duration:300}),E=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:c="click",toggle:s=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(ls(f.current,!0)&&u||"click"!==c&&(!n||!s||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===c&&f.current?f.current=void 0:ls(f.current,!0)&&u||(!n||!s||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||$d(e)||(" "!==e.key||Fd(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!s,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||$d(e)||Fd(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!s,e.nativeEvent,"click"))}}}:{}),[l,i,c,u,d,a,s,n,o])}(S,{enabled:o,toggle:h}),O=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:l},dataRef:c}=e,{enabled:s=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:v}=t,y=Uu(),b=Cu("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,x=r.useRef(!1),S=r.useRef(!1),{escapeKey:$,outsidePress:F}=Ed(m),{escapeKey:D,outsidePress:B}=Ed(v),E=Cu((e=>{var t;if(!n||!s||!u||"Escape"!==e.key)return;const r=null==(t=c.current.floatingContext)?void 0:t.nodeId,i=y?Xu(y.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),O=Cu((e=>{var t;const n=()=>{var t;E(e),null==(t=us(e))||t.removeEventListener("keydown",n)};null==(t=us(e))||t.addEventListener("keydown",n)})),k=Cu((e=>{var t;const n=x.current;x.current=!1;const r=S.current;if(S.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=us(e),s="["+Zu("inert")+"]",u=cs(l).querySelectorAll(s);let d=Wc(i)?i:null;for(;d&&!Gc(d);){const e=Qc(d);if(Gc(e)||!Wc(e))break;d=e}if(u.length&&Wc(i)&&!i.matches("html,body")&&!rs(i,l)&&Array.from(u).every((e=>!rs(d,e))))return;if(Yc(i)&&l){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===Kc(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=c.current.floatingContext)?void 0:t.nodeId,p=y&&Xu(y.nodesRef.current,h).some((t=>{var n;return ss(e,null==(n=t.context)?void 0:n.elements.floating)}));if(ss(e,l)||ss(e,a)||p)return;const g=y?Xu(y.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),A=Cu((e=>{var t;const n=()=>{var t;k(e),null==(t=us(e))||t.removeEventListener(f,n)};null==(t=us(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!s)return;function e(e){o(!1,e,"ancestor-scroll")}c.current.__escapeKeyBubbles=$,c.current.__outsidePressBubbles=F;const t=cs(l);u&&t.addEventListener("keydown",D?O:E,D),w&&t.addEventListener(f,B?A:k,B);let r=[];return g&&(Wc(a)&&(r=ts(a)),Wc(l)&&(r=r.concat(ts(l))),!Wc(i)&&i&&i.contextElement&&(r=r.concat(ts(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",D?O:E,D),w&&t.removeEventListener(f,B?A:k,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[c,l,a,i,u,w,f,n,o,g,s,$,F,E,D,O,k,B,A]),r.useEffect((()=>{x.current=!1}),[w,f]),r.useMemo((()=>s?{reference:{onKeyDown:E,[Dd[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){S.current=!0},onMouseUp(){S.current=!0},[Bd[f]]:()=>{x.current=!0}}}:{}),[s,h,f,p,o,E])}(S,{enabled:o}),{getReferenceProps:k,getFloatingProps:A}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>Td(t,e,"reference")),t),o=r.useCallback((t=>Td(t,e,"floating")),t),i=r.useCallback((t=>Td(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([E,O]);return e(n,{children:[t("div",Object.assign({ref:e=>{v.current=e,w.setReference(e)}},k(),{children:u()})),D&&t(gd,{children:t(Sd,Object.assign({context:S,modal:!1,initialFocus:y,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},x),{zIndex:f})},A(),{children:t(jd,Object.assign({ref:y,style:Object.assign({},B),inert:B.opacity<1?"":void 0},{children:d({elementWidth:b})}))}))}))})]})},zd=({selectedOption:e,placeholder:n="Select",options:r,disabled:o,error:l,className:c,"data-testid":s,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:v,displayValueExtractor:y,onSelectOption:b,onShowOptions:w,onHideOptions:x,onRetry:S,optionsLoadState:$="success",optionTruncationType:F="end",renderCustomSelectedOption:D,renderListItem:B,hideNoResultsDisplay:E,renderCustomCallToAction:O,onBlur:k,variant:A="default",readOnly:R,alignment:T,dropdownZIndex:C})=>{const[H,M]=a(e),[j,L]=a(!1),[_,z]=a(!1),[I]=a((()=>Yl.generate())),N=i(),P=i(),W=i();d((()=>{M(e)}),[e]);const Y=(e,t)=>{P.current.focus(),M(e),L(!1),X(!1),null==b||b(e,t)},V=()=>{j&&(L(!1),X(!1))},U=()=>{_||j||z(!0)},Z=e=>{!_||j||N.current.contains(e.relatedTarget)||(z(!1),null==k||k())},q=e=>{if("middle"===F){let t=0;return W&&W.current&&(t=W.current.getBoundingClientRect().width),Fr.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(e),t,120,8)}return e},X=e=>{e?null==w||w():null==x||x()};return t(ql,{children:t(_d,{enabled:!R&&!o,isOpen:j,renderElement:()=>t(Ql,Object.assign({className:c,"data-testid":s,id:u,ref:N,tabIndex:-1,onFocus:U,onBlur:Z,$focused:_,$disabled:o,$readOnly:R,$error:l},{children:t(Rc,Object.assign({ref:P,disabled:o,expanded:j,listboxId:I,readOnly:R,variant:A},{children:t(jc,Object.assign({ref:W},{children:H?D?D(H):t(Lc,Object.assign({truncateType:F,$variant:A},{children:q(y?y(H):g?g(H):H.toString())})):t(_c,Object.assign({truncateType:F,$variant:A},{children:n}))}))}))})),renderDropdown:({elementWidth:e})=>t(Ec,{listboxId:I,listItems:r,onSelectItem:Y,onDismiss:V,valueExtractor:g,listExtractor:v,enableSearch:f,searchPlaceholder:p,searchFunction:h,selectedItems:H?[H]:[],onRetry:S,itemsLoadState:$,itemTruncationType:F,renderListItem:B,hideNoResultsDisplay:E,renderCustomCallToAction:O,variant:A,width:e}),onOpen:()=>{L(!0),X(!0),z(!0)},onClose:e=>{L(!1),X(!1),"click"!==e&&(z(!1),null==k||k())},onDismiss:()=>{P.current.focus(),L(!1),X(!1)},clickToToggle:!0,offset:8,alignment:T,fitAvailableHeight:!0,zIndex:C})})};export{zd as InputSelect};
//# sourceMappingURL=index.js.map
