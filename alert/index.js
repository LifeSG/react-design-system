import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ArrowRightIcon as r}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as n}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as i}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as o}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as a}from"@lifesg/react-icons/tick-circle-fill";import*as l from"react";import{useRef as c,useState as u,isValidElement as s,createRef as d,cloneElement as f,PureComponent as g,useEffect as h,useLayoutEffect as p}from"react";import{findDOMNode as y}from"react-dom";import{ChevronDownIcon as m}from"@lifesg/react-icons";import F,{css as v}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";function b(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var S=function(e,t){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},S(e,t)};var D=function(){return D=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},D.apply(this,arguments)};var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var E=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},H="object"==typeof $&&$&&$.Object===Object&&$,w="object"==typeof self&&self&&self.Object===Object&&self,x=H||w||Function("return this")(),O=x,A=function(){return O.Date.now()},k=/\s/;var z=function(e){for(var t=e.length;t--&&k.test(e.charAt(t)););return t},_=/^\s+/;var C=function(e){return e?e.slice(0,z(e)+1).replace(_,""):e},j=x.Symbol,T=j,R=Object.prototype,W=R.hasOwnProperty,I=R.toString,N=T?T.toStringTag:void 0;var P=function(e){var t=W.call(e,N),r=e[N];try{e[N]=void 0;var n=!0}catch(e){}var i=I.call(e);return n&&(t?e[N]=r:delete e[N]),i},L=Object.prototype.toString;var V=P,M=function(e){return L.call(e)},G=j?j.toStringTag:void 0;var X=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":G&&G in Object(e)?V(e):M(e)},U=function(e){return null!=e&&"object"==typeof e};var q=C,J=E,K=function(e){return"symbol"==typeof e||U(e)&&"[object Symbol]"==X(e)},Q=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,ee=parseInt;var te=E,re=A,ne=function(e){if("number"==typeof e)return e;if(K(e))return NaN;if(J(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=J(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=q(e);var r=Y.test(e);return r||Z.test(e)?ee(e.slice(2),r?2:8):Q.test(e)?NaN:+e},ie=Math.max,oe=Math.min;var ae=function(e,t,r){var n,i,o,a,l,c,u=0,s=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=i;return n=i=void 0,u=t,a=e.apply(o,r)}function h(e){var r=e-c;return void 0===c||r>=t||r<0||d&&e-u>=o}function p(){var e=re();if(h(e))return y(e);l=setTimeout(p,function(e){var r=t-(e-c);return d?oe(r,o-(e-u)):r}(e))}function y(e){return l=void 0,f&&n?g(e):(n=i=void 0,a)}function m(){var e=re(),r=h(e);if(n=arguments,i=this,c=e,r){if(void 0===l)return function(e){return u=e,l=setTimeout(p,t),s?g(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(p,t),g(c)}return void 0===l&&(l=setTimeout(p,t)),a}return t=ne(t)||0,te(r)&&(s=!!r.leading,o=(d="maxWait"in r)?ie(ne(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),m.cancel=function(){void 0!==l&&clearTimeout(l),u=0,n=c=i=l=void 0},m.flush=function(){return void 0===l?a:y(re())},m},le=ae,ce=E;var ue=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ce(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),le(e,t,{leading:n,maxWait:t,trailing:i})},se=function(e,t,r,n){switch(t){case"debounce":return ae(e,r,n);case"throttle":return ue(e,r,n);default:return e}},de=function(e){return"function"==typeof e},fe=function(){return"undefined"==typeof window},ge=function(e){return e instanceof Element||e instanceof HTMLDocument},he=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&de(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!fe()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(fe())return null;if(t)return document.querySelector(t);if(n&&ge(n))return n;if(r.targetRef&&ge(r.targetRef.current))return r.targetRef.current;var i=y(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,l=t.onResize;if(i||a){var c=he(l,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!fe()&&c({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return de(t)?"renderProp":de(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,l=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,fe()||(r.resizeHandler=se(r.createResizeHandler,i,a,l),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}S(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){fe()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,o=void 0===i?"div":i,a=this.state,c={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(c);case"childFunction":return(e=n)(c);case"child":if((e=n).type&&"string"==typeof e.type){var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(c,["targetRef"]);return f(e,u)}return f(e,c);case"childArray":return(e=n).map((function(e){return!!e&&f(e,c)}));default:return l.createElement(o,null)}}}(g);var pe=fe()?h:p;var ye="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function me(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fe=Array.isArray,ve="object"==typeof ye&&ye&&ye.Object===Object&&ye,Be="object"==typeof self&&self&&self.Object===Object&&self,be=ve||Be||Function("return this")(),Se=be.Symbol,De=Se,$e=Object.prototype,Ee=$e.hasOwnProperty,He=$e.toString,we=De?De.toStringTag:void 0;var xe=function(e){var t=Ee.call(e,we),r=e[we];try{e[we]=void 0;var n=!0}catch(e){}var i=He.call(e);return n&&(t?e[we]=r:delete e[we]),i},Oe=Object.prototype.toString;var Ae=xe,ke=function(e){return Oe.call(e)},ze=Se?Se.toStringTag:void 0;var _e=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ze&&ze in Object(e)?Ae(e):ke(e)};var Ce=_e,je=function(e){return null!=e&&"object"==typeof e};var Te=function(e){return"symbol"==typeof e||je(e)&&"[object Symbol]"==Ce(e)},Re=Fe,We=Te,Ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ne=/^\w*$/;var Pe=function(e,t){if(Re(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!We(e))||(Ne.test(e)||!Ie.test(e)||null!=t&&e in Object(t))};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ve=_e,Me=Le;var Ge,Xe=function(e){if(!Me(e))return!1;var t=Ve(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ue=be["__core-js_shared__"],qe=(Ge=/[^.]+$/.exec(Ue&&Ue.keys&&Ue.keys.IE_PROTO||""))?"Symbol(src)_1."+Ge:"";var Je=function(e){return!!qe&&qe in e},Ke=Function.prototype.toString;var Qe=Xe,Ye=Je,Ze=Le,et=function(e){if(null!=e){try{return Ke.call(e)}catch(e){}try{return e+""}catch(e){}}return""},tt=/^\[object .+?Constructor\]$/,rt=Function.prototype,nt=Object.prototype,it=rt.toString,ot=nt.hasOwnProperty,at=RegExp("^"+it.call(ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var lt=function(e){return!(!Ze(e)||Ye(e))&&(Qe(e)?at:tt).test(et(e))},ct=function(e,t){return null==e?void 0:e[t]};var ut=function(e,t){var r=ct(e,t);return lt(r)?r:void 0},st=ut(Object,"create"),dt=st;var ft=function(){this.__data__=dt?dt(null):{},this.size=0};var gt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ht=st,pt=Object.prototype.hasOwnProperty;var yt=function(e){var t=this.__data__;if(ht){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return pt.call(t,e)?t[e]:void 0},mt=st,Ft=Object.prototype.hasOwnProperty;var vt=st;var Bt=ft,bt=gt,St=yt,Dt=function(e){var t=this.__data__;return mt?void 0!==t[e]:Ft.call(t,e)},$t=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=vt&&void 0===t?"__lodash_hash_undefined__":t,this};function Et(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Et.prototype.clear=Bt,Et.prototype.delete=bt,Et.prototype.get=St,Et.prototype.has=Dt,Et.prototype.set=$t;var Ht=Et;var wt=function(){this.__data__=[],this.size=0};var xt=function(e,t){return e===t||e!=e&&t!=t};var Ot=function(e,t){for(var r=e.length;r--;)if(xt(e[r][0],t))return r;return-1},At=Ot,kt=Array.prototype.splice;var zt=Ot;var _t=Ot;var Ct=Ot;var jt=wt,Tt=function(e){var t=this.__data__,r=At(t,e);return!(r<0)&&(r==t.length-1?t.pop():kt.call(t,r,1),--this.size,!0)},Rt=function(e){var t=this.__data__,r=zt(t,e);return r<0?void 0:t[r][1]},Wt=function(e){return _t(this.__data__,e)>-1},It=function(e,t){var r=this.__data__,n=Ct(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function Nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Nt.prototype.clear=jt,Nt.prototype.delete=Tt,Nt.prototype.get=Rt,Nt.prototype.has=Wt,Nt.prototype.set=It;var Pt=Nt,Lt=ut(be,"Map"),Vt=Ht,Mt=Pt,Gt=Lt;var Xt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ut=function(e,t){var r=e.__data__;return Xt(t)?r["string"==typeof t?"string":"hash"]:r.map},qt=Ut;var Jt=Ut;var Kt=Ut;var Qt=Ut;var Yt=function(){this.size=0,this.__data__={hash:new Vt,map:new(Gt||Mt),string:new Vt}},Zt=function(e){var t=qt(this,e).delete(e);return this.size-=t?1:0,t},er=function(e){return Jt(this,e).get(e)},tr=function(e){return Kt(this,e).has(e)},rr=function(e,t){var r=Qt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function nr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}nr.prototype.clear=Yt,nr.prototype.delete=Zt,nr.prototype.get=er,nr.prototype.has=tr,nr.prototype.set=rr;var ir=nr;function or(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(or.Cache||ir),r}or.Cache=ir;var ar=or;var lr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cr=/\\(\\)?/g,ur=function(e){var t=ar(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(lr,(function(e,r,n,i){t.push(n?i.replace(cr,"$1"):r||e)})),t}));var sr=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},dr=Fe,fr=Te,gr=Se?Se.prototype:void 0,hr=gr?gr.toString:void 0;var pr=function e(t){if("string"==typeof t)return t;if(dr(t))return sr(t,e)+"";if(fr(t))return hr?hr.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},yr=pr;var mr=Fe,Fr=Pe,vr=ur,Br=function(e){return null==e?"":yr(e)};var br=Te;var Sr=function(e,t){return mr(e)?e:Fr(e,t)?[e]:vr(Br(e))},Dr=function(e){if("string"==typeof e||br(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var $r=function(e,t){for(var r=0,n=(t=Sr(t,e)).length;null!=e&&r<n;)e=e[Dr(t[r++])];return r&&r==n?e:void 0};var Er=me((function(e,t,r){var n=null==e?void 0:$r(e,t);return void 0===n?r:n}));const Hr=(e,t,r)=>t?Er(r,t)||Er(e,t):r||e,wr=(e,t)=>{const r=t||e.defaultValue;return Er(e.collections,r)};var xr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(xr||(xr={}));const Or={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ar=e=>t=>{const r=t.theme,n=wr(Or,r[xr.colorScheme]);return r.options&&r.options.color?Hr(n,e,r.options.color):Hr(n,e)},kr={Brand:{1:Ar("Brand.1"),2:Ar("Brand.2"),3:Ar("Brand.3"),4:Ar("Brand.4"),5:Ar("Brand.5"),6:Ar("Brand.6")},Primary:Ar("Primary"),PrimaryDark:Ar("PrimaryDark"),Secondary:Ar("Secondary"),Accent:{Light:{1:Ar("Accent.Light.1"),2:Ar("Accent.Light.2"),3:Ar("Accent.Light.3"),4:Ar("Accent.Light.4"),5:Ar("Accent.Light.5"),6:Ar("Accent.Light.6")},Dark:{1:Ar("Accent.Dark.1"),2:Ar("Accent.Dark.2"),3:Ar("Accent.Dark.3")}},Neutral:{1:Ar("Neutral.1"),2:Ar("Neutral.2"),3:Ar("Neutral.3"),4:Ar("Neutral.4"),5:Ar("Neutral.5"),6:Ar("Neutral.6"),7:Ar("Neutral.7"),8:Ar("Neutral.8")},Validation:{Green:{Text:Ar("Validation.Green.Text"),Icon:Ar("Validation.Green.Icon"),Border:Ar("Validation.Green.Border"),Background:Ar("Validation.Green.Background")},Orange:{Text:Ar("Validation.Orange.Text"),Icon:Ar("Validation.Orange.Icon"),Border:Ar("Validation.Orange.Border"),Background:Ar("Validation.Orange.Background"),Badge:Ar("Validation.Orange.Badge")},Red:{Text:Ar("Validation.Red.Text"),Icon:Ar("Validation.Red.Icon"),Border:Ar("Validation.Red.Border"),Background:Ar("Validation.Red.Background")},Blue:{Text:Ar("Validation.Blue.Text"),Icon:Ar("Validation.Blue.Icon"),Border:Ar("Validation.Blue.Border"),Background:Ar("Validation.Blue.Background")}},Shadow:{Accent:Ar("Shadow.Accent"),Red:Ar("Shadow.Red"),Elevation:Ar("Shadow.Elevation")}},zr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},_r={collections:{base:{D1:{fontFamily:zr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:zr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:zr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:zr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:zr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:zr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:zr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:zr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:zr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:zr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:zr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:zr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:zr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:zr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Cr=e=>t=>{const r=t.theme,n=wr(_r,r[xr.textStyleScheme]);return r.options&&r.options.textStyle?Hr(n,e,r.options.textStyle):Hr(n,e)},jr={D1:{fontFamily:Cr("D1.fontFamily"),fontSize:Cr("D1.fontSize"),fontWeight:Cr("D1.fontWeight"),lineHeight:Cr("D1.lineHeight"),letterSpacing:Cr("D1.letterSpacing")},D2:{fontFamily:Cr("D2.fontFamily"),fontSize:Cr("D2.fontSize"),fontWeight:Cr("D2.fontWeight"),lineHeight:Cr("D2.lineHeight"),letterSpacing:Cr("D2.letterSpacing")},D3:{fontFamily:Cr("D3.fontFamily"),fontSize:Cr("D3.fontSize"),fontWeight:Cr("D3.fontWeight"),lineHeight:Cr("D3.lineHeight"),letterSpacing:Cr("D3.letterSpacing")},D4:{fontFamily:Cr("D4.fontFamily"),fontSize:Cr("D4.fontSize"),fontWeight:Cr("D4.fontWeight"),lineHeight:Cr("D4.lineHeight"),letterSpacing:Cr("D4.letterSpacing")},DBody:{fontFamily:Cr("DBody.fontFamily"),fontSize:Cr("DBody.fontSize"),fontWeight:Cr("DBody.fontWeight"),lineHeight:Cr("DBody.lineHeight"),letterSpacing:Cr("DBody.letterSpacing")},H1:{fontFamily:Cr("H1.fontFamily"),fontSize:Cr("H1.fontSize"),fontWeight:Cr("H1.fontWeight"),lineHeight:Cr("H1.lineHeight"),letterSpacing:Cr("H1.letterSpacing")},H2:{fontFamily:Cr("H2.fontFamily"),fontSize:Cr("H2.fontSize"),fontWeight:Cr("H2.fontWeight"),lineHeight:Cr("H2.lineHeight"),letterSpacing:Cr("H2.letterSpacing")},H3:{fontFamily:Cr("H3.fontFamily"),fontSize:Cr("H3.fontSize"),fontWeight:Cr("H3.fontWeight"),lineHeight:Cr("H3.lineHeight"),letterSpacing:Cr("H3.letterSpacing")},H4:{fontFamily:Cr("H4.fontFamily"),fontSize:Cr("H4.fontSize"),fontWeight:Cr("H4.fontWeight"),lineHeight:Cr("H4.lineHeight"),letterSpacing:Cr("H4.letterSpacing")},H5:{fontFamily:Cr("H5.fontFamily"),fontSize:Cr("H5.fontSize"),fontWeight:Cr("H5.fontWeight"),lineHeight:Cr("H5.lineHeight"),letterSpacing:Cr("H5.letterSpacing")},H6:{fontFamily:Cr("H6.fontFamily"),fontSize:Cr("H6.fontSize"),fontWeight:Cr("H6.fontWeight"),lineHeight:Cr("H6.lineHeight"),letterSpacing:Cr("H6.letterSpacing")},Body:{fontFamily:Cr("Body.fontFamily"),fontSize:Cr("Body.fontSize"),fontWeight:Cr("Body.fontWeight"),lineHeight:Cr("Body.lineHeight"),letterSpacing:Cr("Body.letterSpacing")},BodySmall:{fontFamily:Cr("BodySmall.fontFamily"),fontSize:Cr("BodySmall.fontSize"),fontWeight:Cr("BodySmall.fontWeight"),lineHeight:Cr("BodySmall.lineHeight"),letterSpacing:Cr("BodySmall.letterSpacing")},XSmall:{fontFamily:Cr("XSmall.fontFamily"),fontSize:Cr("XSmall.fontSize"),fontWeight:Cr("XSmall.fontWeight"),lineHeight:Cr("XSmall.lineHeight"),letterSpacing:Cr("XSmall.letterSpacing")}},Tr=e=>{switch(e){case 700:case"bold":return zr.Bold;case 600:case"semibold":return zr.Semibold;case 300:case"light":return zr.Light;case 400:case"regular":return zr.Regular;default:return""}},Rr=(e,t)=>r=>{var n;const i=jr[e].fontFamily(r),o=jr[e].fontWeight(r);return Object.values(zr).includes(i)?v`
                font-family: ${Tr(t)||Tr(o)||i};
                font-weight: normal !important;
            `:v`
            font-family: ${i};
            font-weight: ${null!==(n=Wr(t)||o)&&void 0!==n?n:"normal"};
        `},Wr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ir=e=>{if(e>0)return v`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Nr=(e,t,r=!1)=>n=>{const i=jr[e],o=i.fontSize(n);return v`
            ${Rr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${v`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},Pr=(e=!1,t=!1,r=void 0)=>t?v`
            display: block;
            ${Ir(r)}
        `:e?v`
            display: inline;
        `:v`
            display: block;
            ${Ir(r)}
        `;var Lr;!function(e){e.D1=F.h1`
        ${e=>v`
                ${Nr("D1",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=F.h1`
        ${e=>v`
                ${Nr("D2",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=F.h1`
        ${e=>v`
                ${Nr("D3",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=F.h1`
        ${e=>v`
                ${Nr("D4",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=F.h1`
        ${e=>v`
                ${Nr("DBody",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=F.h1`
        ${e=>v`
                ${Nr("H1",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=F.h2`
        ${e=>v`
                ${Nr("H2",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=F.h3`
        ${e=>v`
                ${Nr("H3",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=F.h4`
        ${e=>v`
                ${Nr("H4",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=F.h5`
        ${e=>v`
                ${Nr("H5",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=F.h6`
        ${e=>v`
                ${Nr("H6",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=F.p`
        ${e=>v`
                ${Nr("Body",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=F.p`
        ${e=>v`
                ${Nr("BodySmall",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=F.span`
        ${e=>v`
                ${Nr("XSmall",e.weight,e.paragraph)}
                color: ${kr.Neutral[1]};
                ${Pr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Gr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Gr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Lr||(Lr={}));const Vr=F.a`
    ${e=>v`
            ${Nr(e.textStyle,e.weight)}
            color: ${kr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${kr.Secondary};

                svg {
                    color: ${kr.Secondary};
                }
            }
        `}
`,Mr=F(B)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gr=r=>{var{external:n=!1,children:i}=r,o=b(r,["external","children"]);return e(Vr,Object.assign({},o,{children:[i,n&&t(Mr,{})]}))};var Xr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Xr||(Xr={}));const Ur=e=>{const{textSize:t}=e||{};return v`
        // Text styling
        ${t&&Nr(t,"regular")}

        strong {
            font-family: ${zr.Semibold};
            ${t&&Nr(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${zr.Semibold};
            ${t&&Nr(t,"semibold")}
            color: ${kr.Primary};
            text-decoration: none;

            svg {
                color: ${kr.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${kr.Secondary};

                svg {
                    color: ${kr.Secondary};
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
    `},qr=F.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=kr.Validation.Red.Background(e),r=kr.Validation.Red.Border(e);break;case"success":t=kr.Validation.Green.Background(e),r=kr.Validation.Green.Border(e);break;case"warning":default:t=kr.Validation.Orange.Background(e),r=kr.Validation.Orange.Border(e);break;case"info":t=kr.Validation.Blue.Background(e),r=kr.Validation.Blue.Border(e);break;case"description":t=kr.Neutral[7](e),r=kr.Neutral[4](e)}return v`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${kr.Neutral[1]};
    ${e=>"small"===e.$sizeType?Ur({textSize:"H6"}):Ur({textSize:"BodySmall"})}
`,Jr=F.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&v`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=kr.Validation.Red.Icon(e);break;case"success":t=kr.Validation.Green.Icon(e);break;case"warning":default:t=kr.Validation.Orange.Icon(e);break;case"info":t=kr.Validation.Blue.Icon(e);break;case"description":t=kr.Neutral[4](e)}return v`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Kr=F(Lr.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?v`
                ${Nr("H6","semibold")}
                margin-top: 0.25rem;
            `:v`
                ${Nr("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${kr.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${kr.Primary};
    }
`,Qr=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Yr=F.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Zr=F.button`
    ${e=>"small"===e.$sizeType?v`
                ${Nr("H6","semibold")}
            `:v`
                ${Nr("H5","semibold")}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${kr.Primary};
`,en=F(m)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,tn=l=>{var{type:s,className:d,children:f,actionLink:g,actionLinkIcon:p,sizeType:y="default",showIcon:m=!1,customIcon:F,maxCollapsedHeight:v}=l,B=b(l,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[S,$]=u(!1),[E,H]=u(!1),{height:w,ref:x}=function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,l=e.handleWidth,s=void 0===l||l,d=e.handleHeight,f=void 0===d||d,g=e.targetRef,h=e.observerOptions,p=e.onResize,y=c(r),m=c(null),F=null!=g?g:m,v=c(),B=u({width:void 0,height:void 0}),b=B[0],S=B[1];return pe((function(){if(!fe()){var e=he(p,S,s,f);v.current=se((function(t){(s||f)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!y.current&&!fe()&&e({width:n,height:i}),y.current=!1}))}),n,o,a);var t=new window.ResizeObserver(v.current);return F.current&&t.observe(F.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,a,s,f,p,h,F.current]),D({ref:F},b)}();h((()=>{O()}),[v,w]);const O=()=>{$(!v),H(A())},A=()=>!!v&&w>v;return e(qr,Object.assign({className:d,$type:s,$sizeType:y,"data-testid":B["data-testid"]},{children:[m&&t(Jr,Object.assign({$sizeType:y,$type:s},{children:(()=>{if(s&&F)return F;switch(s){case"success":return t(a,{});case"warning":return t(i,{});case"error":return t(n,{});case"info":case"description":return t(o,{});default:return null}})()})),e(Qr,{children:[e(Yr,Object.assign({$maxCollapsedHeight:A()?v:void 0,$showMore:S,$hasActionLink:!!g},{children:[t("div",Object.assign({ref:x},{children:f})),g&&e(Kr,Object.assign({"data-testid":"action-link",$type:s,$sizeType:y},g,{children:[g.children,p||t(r,{})]}))]})),E&&e(Zr,Object.assign({$sizeType:y,$type:s,type:"button",onClick:()=>$(!S)},{children:["Show ",S?"less":"more",t(en,{$expanded:S})]}))]})]}))};export{tn as Alert};
//# sourceMappingURL=index.js.map
