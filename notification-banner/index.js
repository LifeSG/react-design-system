import{jsx as e,jsxs as t}from"react/jsx-runtime";import*as n from"react";import r,{useRef as o,useState as i,isValidElement as a,createRef as l,cloneElement as c,PureComponent as s,useEffect as u,useLayoutEffect as f}from"react";import{findDOMNode as d}from"react-dom";import{CrossIcon as p}from"@lifesg/react-icons/cross";import m,{css as g}from"styled-components";import{ExternalIcon as h}from"@lifesg/react-icons/external";function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var F=function(e,t){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},F(e,t)};var v=function(){return v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)};var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},B="object"==typeof b&&b&&b.Object===Object&&b,E="object"==typeof self&&self&&self.Object===Object&&self,D=B||E||Function("return this")(),O=D,w=function(){return O.Date.now()},A=/\s/;var k=function(e){for(var t=e.length;t--&&A.test(e.charAt(t)););return t},x=/^\s+/;var H=function(e){return e?e.slice(0,k(e)+1).replace(x,""):e},T=D.Symbol,_=T,C=Object.prototype,$=C.hasOwnProperty,N=C.toString,R=_?_.toStringTag:void 0;var z=function(e){var t=$.call(e,R),n=e[R];try{e[R]=void 0;var r=!0}catch(e){}var o=N.call(e);return r&&(t?e[R]=n:delete e[R]),o},L=Object.prototype.toString;var I=z,j=function(e){return L.call(e)},M=T?T.toStringTag:void 0;var W=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?I(e):j(e)},P=function(e){return null!=e&&"object"==typeof e};var V=H,U=S,G=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==W(e)},J=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,q=/^0o[0-7]+$/i,Y=parseInt;var K=S,Z=w,Q=function(e){if("number"==typeof e)return e;if(G(e))return NaN;if(U(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=U(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=V(e);var n=X.test(e);return n||q.test(e)?Y(e.slice(2),n?2:8):J.test(e)?NaN:+e},ee=Math.max,te=Math.min;var ne=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function m(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-s>=i}function g(){var e=Z();if(m(e))return h(e);l=setTimeout(g,function(e){var n=t-(e-c);return f?te(n,i-(e-s)):n}(e))}function h(e){return l=void 0,d&&r?p(e):(r=o=void 0,a)}function y(){var e=Z(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(g,t),u?p(e):a}(c);if(f)return clearTimeout(l),l=setTimeout(g,t),p(c)}return void 0===l&&(l=setTimeout(g,t)),a}return t=Q(t)||0,K(n)&&(u=!!n.leading,i=(f="maxWait"in n)?ee(Q(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},y.flush=function(){return void 0===l?a:h(Z())},y},re=ne,oe=S;var ie=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return oe(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),re(e,t,{leading:r,maxWait:t,trailing:o})},ae=function(e,t,n,r){switch(t){case"debounce":return ne(e,n,r);case"throttle":return ie(e,n,r);default:return e}},le=function(e){return"function"==typeof e},ce=function(){return"undefined"==typeof window},se=function(e){return e instanceof Element||e instanceof HTMLDocument},ue=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&le(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ce()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ce())return null;if(t)return document.querySelector(t);if(r&&se(r))return r;if(n.targetRef&&se(n.targetRef.current))return n.targetRef.current;var o=d(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var c=ue(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ce()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return le(t)?"renderProp":le(r)?"childFunction":a(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,c=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ce()||(n.resizeHandler=ae(n.createResizeHandler,o,c,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}F(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ce()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return n.createElement(a,null)}}}(s);var fe=ce()?u:f;var de="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var me=Array.isArray,ge="object"==typeof de&&de&&de.Object===Object&&de,he="object"==typeof self&&self&&self.Object===Object&&self,ye=ge||he||Function("return this")(),Fe=ye.Symbol,ve=Fe,be=Object.prototype,Se=be.hasOwnProperty,Be=be.toString,Ee=ve?ve.toStringTag:void 0;var De=function(e){var t=Se.call(e,Ee),n=e[Ee];try{e[Ee]=void 0;var r=!0}catch(e){}var o=Be.call(e);return r&&(t?e[Ee]=n:delete e[Ee]),o},Oe=Object.prototype.toString;var we=De,Ae=function(e){return Oe.call(e)},ke=Fe?Fe.toStringTag:void 0;var xe=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ke&&ke in Object(e)?we(e):Ae(e)};var He=xe,Te=function(e){return null!=e&&"object"==typeof e};var _e=function(e){return"symbol"==typeof e||Te(e)&&"[object Symbol]"==He(e)},Ce=me,$e=_e,Ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Re=/^\w*$/;var ze=function(e,t){if(Ce(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!$e(e))||(Re.test(e)||!Ne.test(e)||null!=t&&e in Object(t))};var Le=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ie=xe,je=Le;var Me,We=function(e){if(!je(e))return!1;var t=Ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Pe=ye["__core-js_shared__"],Ve=(Me=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var Ue=function(e){return!!Ve&&Ve in e},Ge=Function.prototype.toString;var Je=We,Xe=Ue,qe=Le,Ye=function(e){if(null!=e){try{return Ge.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ke=/^\[object .+?Constructor\]$/,Ze=Function.prototype,Qe=Object.prototype,et=Ze.toString,tt=Qe.hasOwnProperty,nt=RegExp("^"+et.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(e){return!(!qe(e)||Xe(e))&&(Je(e)?nt:Ke).test(Ye(e))},ot=function(e,t){return null==e?void 0:e[t]};var it=function(e,t){var n=ot(e,t);return rt(n)?n:void 0},at=it(Object,"create"),lt=at;var ct=function(){this.__data__=lt?lt(null):{},this.size=0};var st=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ut=at,ft=Object.prototype.hasOwnProperty;var dt=function(e){var t=this.__data__;if(ut){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ft.call(t,e)?t[e]:void 0},pt=at,mt=Object.prototype.hasOwnProperty;var gt=at;var ht=ct,yt=st,Ft=dt,vt=function(e){var t=this.__data__;return pt?void 0!==t[e]:mt.call(t,e)},bt=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=gt&&void 0===t?"__lodash_hash_undefined__":t,this};function St(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}St.prototype.clear=ht,St.prototype.delete=yt,St.prototype.get=Ft,St.prototype.has=vt,St.prototype.set=bt;var Bt=St;var Et=function(){this.__data__=[],this.size=0};var Dt=function(e,t){return e===t||e!=e&&t!=t};var Ot=function(e,t){for(var n=e.length;n--;)if(Dt(e[n][0],t))return n;return-1},wt=Ot,At=Array.prototype.splice;var kt=Ot;var xt=Ot;var Ht=Ot;var Tt=Et,_t=function(e){var t=this.__data__,n=wt(t,e);return!(n<0)&&(n==t.length-1?t.pop():At.call(t,n,1),--this.size,!0)},Ct=function(e){var t=this.__data__,n=kt(t,e);return n<0?void 0:t[n][1]},$t=function(e){return xt(this.__data__,e)>-1},Nt=function(e,t){var n=this.__data__,r=Ht(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Rt.prototype.clear=Tt,Rt.prototype.delete=_t,Rt.prototype.get=Ct,Rt.prototype.has=$t,Rt.prototype.set=Nt;var zt=Rt,Lt=it(ye,"Map"),It=Bt,jt=zt,Mt=Lt;var Wt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pt=function(e,t){var n=e.__data__;return Wt(t)?n["string"==typeof t?"string":"hash"]:n.map},Vt=Pt;var Ut=Pt;var Gt=Pt;var Jt=Pt;var Xt=function(){this.size=0,this.__data__={hash:new It,map:new(Mt||jt),string:new It}},qt=function(e){var t=Vt(this,e).delete(e);return this.size-=t?1:0,t},Yt=function(e){return Ut(this,e).get(e)},Kt=function(e){return Gt(this,e).has(e)},Zt=function(e,t){var n=Jt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qt.prototype.clear=Xt,Qt.prototype.delete=qt,Qt.prototype.get=Yt,Qt.prototype.has=Kt,Qt.prototype.set=Zt;var en=Qt;function tn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(tn.Cache||en),n}tn.Cache=en;var nn=tn;var rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/\\(\\)?/g,an=function(e){var t=nn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rn,(function(e,n,r,o){t.push(r?o.replace(on,"$1"):n||e)})),t}));var ln=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},cn=me,sn=_e,un=Fe?Fe.prototype:void 0,fn=un?un.toString:void 0;var dn=function e(t){if("string"==typeof t)return t;if(cn(t))return ln(t,e)+"";if(sn(t))return fn?fn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},pn=dn;var mn=me,gn=ze,hn=an,yn=function(e){return null==e?"":pn(e)};var Fn=_e;var vn=function(e,t){return mn(e)?e:gn(e,t)?[e]:hn(yn(e))},bn=function(e){if("string"==typeof e||Fn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Sn=function(e,t){for(var n=0,r=(t=vn(t,e)).length;null!=e&&n<r;)e=e[bn(t[n++])];return n&&n==r?e:void 0};var Bn=pe((function(e,t,n){var r=null==e?void 0:Sn(e,t);return void 0===r?n:r}));const En=(e,t,n)=>t?Bn(n,t)||Bn(e,t):n||e,Dn=(e,t)=>{const n=t||e.defaultValue;return Bn(e.collections,n)};var On;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(On||(On={}));const wn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},An=e=>t=>{const n=t.theme,r=Dn(wn,n[On.colorScheme]);return n.options&&n.options.color?En(r,e,n.options.color):En(r,e)},kn=(An("Brand.1"),An("Brand.2"),An("Brand.3"),An("Brand.4"),An("Brand.5"),An("Brand.6"),An("Primary")),xn=(An("PrimaryDark"),An("Secondary")),Hn=(An("Accent.Light.1"),An("Accent.Light.2"),An("Accent.Light.3"),An("Accent.Light.4"),An("Accent.Light.5"),An("Accent.Light.6"),An("Accent.Dark.1"),An("Accent.Dark.2"),An("Accent.Dark.3"),{1:An("Neutral.1"),2:An("Neutral.2"),3:An("Neutral.3"),4:An("Neutral.4"),5:An("Neutral.5"),6:An("Neutral.6"),7:An("Neutral.7"),8:An("Neutral.8")}),Tn={Green:{Text:An("Validation.Green.Text"),Icon:An("Validation.Green.Icon"),Border:An("Validation.Green.Border"),Background:An("Validation.Green.Background")},Orange:{Text:An("Validation.Orange.Text"),Icon:An("Validation.Orange.Icon"),Border:An("Validation.Orange.Border"),Background:An("Validation.Orange.Background"),Badge:An("Validation.Orange.Badge")},Red:{Text:An("Validation.Red.Text"),Icon:An("Validation.Red.Icon"),Border:An("Validation.Red.Border"),Background:An("Validation.Red.Background")},Blue:{Text:An("Validation.Blue.Text"),Icon:An("Validation.Blue.Icon"),Border:An("Validation.Blue.Border"),Background:An("Validation.Blue.Background")}},_n=(An("Shadow.Accent"),An("Shadow.Red"),An("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),Cn=e=>Object.keys(_n).reduce(((t,n)=>{const r=_n[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),$n=Cn("max-width"),Nn=(Cn("min-width"),m.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return g`
            grid-column: ${t||"auto"} / span ${n||1};

            ${$n.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${$n.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Rn=r.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=y(t,["mobileCols","tabletCols","desktopCols"]);return e(Nn,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=zn(i||o||r),a=zn(e),l=zn(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),zn=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Ln=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,l=y(t,["children","data-testid","type","stretch"]);return e(In,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},l,{children:r}))})),In=m.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?g`
                padding: 0 3rem;
            `:g`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${$n.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${$n.tablet} {
        max-width: 720px;
    }
    ${$n.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return g`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${$n.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${$n.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return g`
                    display: flex;
                    flex-direction: column;
                `;default:return g`
                    display: flex;
                `}}}
`,jn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=y(t,["children","data-testid","stretch"]);return e(Mn,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Mn=m.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?g`
                ${$n.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:g`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Wn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:l=!1}=t,c=y(t,["children","data-testid","className","type","stretch"]);return e(jn,Object.assign({ref:n,"data-testid":o,className:i,stretch:l},c,{children:e(Ln,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),Pn={Section:jn,Container:Ln,Content:Wn,ColDiv:Rn},Vn=m.button`
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

        ${({$highlight:e})=>e&&g`
                background-color: ${Hn[7]};
            `}
    }
`,Un=r.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,l=y(t,["children","focusHighlight","focusOutline","type"]);return e(Vn,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Gn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Jn={D1:{fontFamily:Gn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Gn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Gn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Gn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Gn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Gn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Gn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Gn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Xn={D1:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Gn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Gn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Gn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Gn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Gn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},qn={collections:{base:Jn,oneservice:{D1:{fontFamily:Gn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Gn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Gn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Gn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Gn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Gn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Gn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Gn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Gn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Gn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Gn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Gn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Xn},defaultValue:"base"},Yn=e=>t=>{const n=t.theme,r=Dn(qn,n[On.textStyleScheme]);return n.options&&n.options.textStyle?En(r,e,n.options.textStyle):En(r,e)},Kn={D1:{fontFamily:Yn("D1.fontFamily"),fontSize:Yn("D1.fontSize"),fontWeight:Yn("D1.fontWeight"),lineHeight:Yn("D1.lineHeight"),letterSpacing:Yn("D1.letterSpacing"),fontVariant:Yn("D1.fontVariant")},D2:{fontFamily:Yn("D2.fontFamily"),fontSize:Yn("D2.fontSize"),fontWeight:Yn("D2.fontWeight"),lineHeight:Yn("D2.lineHeight"),letterSpacing:Yn("D2.letterSpacing"),fontVariant:Yn("D2.fontVariant")},D3:{fontFamily:Yn("D3.fontFamily"),fontSize:Yn("D3.fontSize"),fontWeight:Yn("D3.fontWeight"),lineHeight:Yn("D3.lineHeight"),letterSpacing:Yn("D3.letterSpacing"),fontVariant:Yn("D3.fontVariant")},D4:{fontFamily:Yn("D4.fontFamily"),fontSize:Yn("D4.fontSize"),fontWeight:Yn("D4.fontWeight"),lineHeight:Yn("D4.lineHeight"),letterSpacing:Yn("D4.letterSpacing"),fontVariant:Yn("D4.fontVariant")},DBody:{fontFamily:Yn("DBody.fontFamily"),fontSize:Yn("DBody.fontSize"),fontWeight:Yn("DBody.fontWeight"),lineHeight:Yn("DBody.lineHeight"),letterSpacing:Yn("DBody.letterSpacing"),fontVariant:Yn("DBody.fontVariant")},H1:{fontFamily:Yn("H1.fontFamily"),fontSize:Yn("H1.fontSize"),fontWeight:Yn("H1.fontWeight"),lineHeight:Yn("H1.lineHeight"),letterSpacing:Yn("H1.letterSpacing"),fontVariant:Yn("H1.fontVariant")},H2:{fontFamily:Yn("H2.fontFamily"),fontSize:Yn("H2.fontSize"),fontWeight:Yn("H2.fontWeight"),lineHeight:Yn("H2.lineHeight"),letterSpacing:Yn("H2.letterSpacing"),fontVariant:Yn("H2.fontVariant")},H3:{fontFamily:Yn("H3.fontFamily"),fontSize:Yn("H3.fontSize"),fontWeight:Yn("H3.fontWeight"),lineHeight:Yn("H3.lineHeight"),letterSpacing:Yn("H3.letterSpacing"),fontVariant:Yn("H3.fontVariant")},H4:{fontFamily:Yn("H4.fontFamily"),fontSize:Yn("H4.fontSize"),fontWeight:Yn("H4.fontWeight"),lineHeight:Yn("H4.lineHeight"),letterSpacing:Yn("H4.letterSpacing"),fontVariant:Yn("H4.fontVariant")},H5:{fontFamily:Yn("H5.fontFamily"),fontSize:Yn("H5.fontSize"),fontWeight:Yn("H5.fontWeight"),lineHeight:Yn("H5.lineHeight"),letterSpacing:Yn("H5.letterSpacing"),fontVariant:Yn("H5.fontVariant")},H6:{fontFamily:Yn("H6.fontFamily"),fontSize:Yn("H6.fontSize"),fontWeight:Yn("H6.fontWeight"),lineHeight:Yn("H6.lineHeight"),letterSpacing:Yn("H6.letterSpacing"),fontVariant:Yn("H6.fontVariant")},Body:{fontFamily:Yn("Body.fontFamily"),fontSize:Yn("Body.fontSize"),fontWeight:Yn("Body.fontWeight"),lineHeight:Yn("Body.lineHeight"),letterSpacing:Yn("Body.letterSpacing"),fontVariant:Yn("Body.fontVariant")},BodySmall:{fontFamily:Yn("BodySmall.fontFamily"),fontSize:Yn("BodySmall.fontSize"),fontWeight:Yn("BodySmall.fontWeight"),lineHeight:Yn("BodySmall.lineHeight"),letterSpacing:Yn("BodySmall.letterSpacing"),fontVariant:Yn("BodySmall.fontVariant")},XSmall:{fontFamily:Yn("XSmall.fontFamily"),fontSize:Yn("XSmall.fontSize"),fontWeight:Yn("XSmall.fontWeight"),lineHeight:Yn("XSmall.lineHeight"),letterSpacing:Yn("XSmall.letterSpacing"),fontVariant:Yn("XSmall.fontVariant")}},Zn=[Gn.OpenSans,Gn.PlusJakartaSans],Qn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},er=(e,t)=>n=>{var r;const o=Kn[e].fontFamily(n),i=Kn[e].fontWeight(n),a=Zn.find((e=>Object.values(e).includes(o)));return a?g`
                font-family: ${Qn(a,t)||Qn(a,i)||o};
                font-weight: normal !important;
            `:g`
            font-family: ${o};
            font-weight: ${null!==(r=tr(t)||i)&&void 0!==r?r:"normal"};
        `},tr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nr=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},rr=er,or=(e,t,n=!1)=>r=>{const o=Kn[e],i=o.fontSize(r);return g`
            ${er(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${g`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},ir=(e=!1,t=!1,n=void 0)=>t?g`
            display: block;
            ${nr(n)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${nr(n)}
        `;var ar;!function(e){e.D1=m.h1`
        ${e=>g`
                ${or("D1",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>g`
                ${or("D2",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>g`
                ${or("D3",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>g`
                ${or("D4",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>g`
                ${or("DBody",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>g`
                ${or("H1",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>g`
                ${or("H2",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>g`
                ${or("H3",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>g`
                ${or("H4",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>g`
                ${or("H5",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>g`
                ${or("H6",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>g`
                ${or("Body",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>g`
                ${or("BodySmall",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>g`
                ${or("XSmall",e.weight,e.paragraph)}
                color: ${Hn[1]};
                ${ir(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>sr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>sr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ar||(ar={}));const lr=m.a`
    ${e=>g`
            ${or(e.textStyle,e.weight)}
            color: ${kn};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${xn};

                svg {
                    color: ${xn};
                }
            }
        `}
`,cr=m(h)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,sr=n=>{var{external:r=!1,children:o}=n,i=y(n,["external","children"]);return t(lr,Object.assign({},i,{children:[o,r&&e(cr,{})]}))};var ur;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ur||(ur={}));const fr="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",dr=g`
    color: ${Tn.Orange.Icon};

    svg {
        color: ${Tn.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Tn.Orange.Icon};
        svg {
            color: ${Tn.Orange.Icon};
        }
    }
`,pr=m.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${fr};
    background: ${Hn[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,mr=m(Pn.Content)`
    display: flex;
`,gr=m.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,hr=m.div`
    display: inline-block;
    width: 100%;

    ${or("Body","regular")}
    color: ${Hn[8]};

    p {
        display: inline-block;
    }

    strong {
        ${rr("Body","semibold")}
        color: ${Hn[8]};
    }

    a {
        ${or("Body","regular")}
        ${dr}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return g`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,yr=m(ar.Hyperlink.Default)`
    position: relative;

    ${dr}
`,Fr=m(Un)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,vr=m(p)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Hn[8]};
`,br=m.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Tn.Orange.Icon};
    ${or("BodySmall","semibold")};

    cursor: pointer;
`,Sr=m.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,Br=n=>{var{children:r,visible:a=!0,dismissible:l=!0,sticky:c=!0,onDismiss:s,id:f,forwardedRef:d,maxCollapsedHeight:p,onClick:m,actionButton:g}=n,h=y(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const F=h["data-testid"],[b,S]=i(a),{height:B,ref:E}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,c=e.refreshOptions,s=e.handleWidth,u=void 0===s||s,f=e.handleHeight,d=void 0===f||f,p=e.targetRef,m=e.observerOptions,g=e.onResize,h=o(n),y=o(null),F=null!=p?p:y,b=o(),S=i({width:void 0,height:void 0}),B=S[0],E=S[1];return fe((function(){if(!ce()){var e=ue(g,E,u,d);b.current=ae((function(t){(u||d)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!h.current&&!ce()&&e({width:r,height:o}),h.current=!1}))}),r,l,c);var t=new window.ResizeObserver(b.current);return F.current&&t.observe(F.current,m),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,l,c,u,d,g,m,F.current]),v({ref:F},B)}();u((()=>{S(a)}),[a]);const D=e=>{e.stopPropagation(),S(!1),l&&s&&s()},O=e=>{g.onClick&&(e.stopPropagation(),g.onClick(e))};if(!b)return null;return t(pr,Object.assign({ref:d,$sticky:c,$clickable:!!m,onClick:m},h,{children:[t(mr,Object.assign({id:Er("container",f)},{children:[t(gr,{children:[e(hr,Object.assign({"data-testid":Er("text-content",F),$maxCollapsedHeight:p&&B>p?p:void 0},{children:e("div",Object.assign({ref:E},{children:r}))})),g&&e(br,Object.assign({id:Er("action-button",f),"data-testid":Er("action-button",F),type:"button"},g,{onClick:O},{children:g.children}))]}),l&&e(Fr,Object.assign({onClick:D,id:Er("dismiss-button",f),"data-testid":Er("dismiss-button",F),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e(vr,{"aria-hidden":!0})}))]})),m&&e(Sr,{"aria-label":"Clickable banner",type:"button"})]}))},Er=(e,t="wrapper")=>`${t}-${e}`,Dr=r.forwardRef(((t,n)=>e(Br,Object.assign({},t,{forwardedRef:n})))),Or=Object.assign(Dr,{Link:yr});var wr={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */wr.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,i){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(e,o));return r&&t(i,r.prototype),i},r.apply(null,arguments)}function o(e){return i(e)||a(e)||l(e)||s()}function i(e){if(Array.isArray(e))return c(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,f=Object.setPrototypeOf,d=Object.isFrozen,p=Object.getPrototypeOf,m=Object.getOwnPropertyDescriptor,g=Object.freeze,h=Object.seal,y=Object.create,F="undefined"!=typeof Reflect&&Reflect,v=F.apply,b=F.construct;v||(v=function(e,t,n){return e.apply(t,n)}),g||(g=function(e){return e}),h||(h=function(e){return e}),b||(b=function(e,t){return r(e,o(t))});var S=_(Array.prototype.forEach),B=_(Array.prototype.pop),E=_(Array.prototype.push),D=_(String.prototype.toLowerCase),O=_(String.prototype.toString),w=_(String.prototype.match),A=_(String.prototype.replace),k=_(String.prototype.indexOf),x=_(String.prototype.trim),H=_(RegExp.prototype.test),T=C(TypeError);function _(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return v(e,t,r)}}function C(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(e,n)}}function $(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:D,f&&f(e,null);for(var o=t.length;o--;){var i=t[o];if("string"==typeof i){var a=n(i);a!==i&&(d(t)||(t[o]=a),i=a)}e[i]=!0}return e}function N(e){var t,n=y(null);for(t in e)!0===v(u,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=m(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var z=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),j=g(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),M=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),W=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),P=g(["#text"]),V=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),U=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),G=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),J=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),X=h(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=h(/<%[\w\W]*|[\w\W]*%>/gm),Y=h(/\${[\w\W]*}/gm),K=h(/^data-[\-\w.\u00B7-\uFFFF]/),Z=h(/^aria-[\-\w]+$/),Q=h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=h(/^(?:\w+script|data):/i),te=h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=h(/^html$/i),re=h(/^[a-z][.\w]*(-[.\w]+)+$/i),oe=function(){return"undefined"==typeof window?null:window},ie=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe(),n=function(e){return ae(e)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,f=t.NamedNodeMap,d=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,p=t.HTMLFormElement,m=t.DOMParser,h=t.trustedTypes,y=s.prototype,F=R(y,"cloneNode"),v=R(y,"nextSibling"),b=R(y,"childNodes"),_=R(y,"parentNode");if("function"==typeof l){var C=i.createElement("template");C.content&&C.content.ownerDocument&&(i=C.content.ownerDocument)}var le=ie(h,r),ce=le?le.createHTML(""):"",se=i,ue=se.implementation,fe=se.createNodeIterator,de=se.createDocumentFragment,pe=se.getElementsByTagName,me=r.importNode,ge={};try{ge=N(i).documentMode?i.documentMode:{}}catch(e){}var he={};n.isSupported="function"==typeof _&&ue&&void 0!==ue.createHTMLDocument&&9!==ge;var ye,Fe,ve=X,be=q,Se=Y,Be=K,Ee=Z,De=ee,Oe=te,we=re,Ae=Q,ke=null,xe=$({},[].concat(o(z),o(L),o(I),o(M),o(P))),He=null,Te=$({},[].concat(o(V),o(U),o(G),o(J))),_e=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,$e=null,Ne=!0,Re=!0,ze=!1,Le=!0,Ie=!1,je=!0,Me=!1,We=!1,Pe=!1,Ve=!1,Ue=!1,Ge=!1,Je=!0,Xe=!1,qe="user-content-",Ye=!0,Ke=!1,Ze={},Qe=null,et=$({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=$({},["audio","video","img","source","image","track"]),rt=null,ot=$({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",lt="http://www.w3.org/1999/xhtml",ct=lt,st=!1,ut=null,ft=$({},[it,at,lt],O),dt=["application/xhtml+xml","text/html"],pt="text/html",mt=null,gt=i.createElement("form"),ht=function(e){return e instanceof RegExp||e instanceof Function},yt=function(t){mt&&mt===t||(t&&"object"===e(t)||(t={}),t=N(t),ye=ye=-1===dt.indexOf(t.PARSER_MEDIA_TYPE)?pt:t.PARSER_MEDIA_TYPE,Fe="application/xhtml+xml"===ye?O:D,ke="ALLOWED_TAGS"in t?$({},t.ALLOWED_TAGS,Fe):xe,He="ALLOWED_ATTR"in t?$({},t.ALLOWED_ATTR,Fe):Te,ut="ALLOWED_NAMESPACES"in t?$({},t.ALLOWED_NAMESPACES,O):ft,rt="ADD_URI_SAFE_ATTR"in t?$(N(ot),t.ADD_URI_SAFE_ATTR,Fe):ot,tt="ADD_DATA_URI_TAGS"in t?$(N(nt),t.ADD_DATA_URI_TAGS,Fe):nt,Qe="FORBID_CONTENTS"in t?$({},t.FORBID_CONTENTS,Fe):et,Ce="FORBID_TAGS"in t?$({},t.FORBID_TAGS,Fe):{},$e="FORBID_ATTR"in t?$({},t.FORBID_ATTR,Fe):{},Ze="USE_PROFILES"in t&&t.USE_PROFILES,Ne=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,ze=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Ie=t.SAFE_FOR_TEMPLATES||!1,je=!1!==t.SAFE_FOR_XML,Me=t.WHOLE_DOCUMENT||!1,Ve=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,Ge=t.RETURN_TRUSTED_TYPE||!1,Pe=t.FORCE_BODY||!1,Je=!1!==t.SANITIZE_DOM,Xe=t.SANITIZE_NAMED_PROPS||!1,Ye=!1!==t.KEEP_CONTENT,Ke=t.IN_PLACE||!1,Ae=t.ALLOWED_URI_REGEXP||Ae,ct=t.NAMESPACE||lt,_e=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ht(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_e.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ht(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_e.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(_e.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ie&&(Re=!1),Ue&&(Ve=!0),Ze&&(ke=$({},o(P)),He=[],!0===Ze.html&&($(ke,z),$(He,V)),!0===Ze.svg&&($(ke,L),$(He,U),$(He,J)),!0===Ze.svgFilters&&($(ke,I),$(He,U),$(He,J)),!0===Ze.mathMl&&($(ke,M),$(He,G),$(He,J))),t.ADD_TAGS&&(ke===xe&&(ke=N(ke)),$(ke,t.ADD_TAGS,Fe)),t.ADD_ATTR&&(He===Te&&(He=N(He)),$(He,t.ADD_ATTR,Fe)),t.ADD_URI_SAFE_ATTR&&$(rt,t.ADD_URI_SAFE_ATTR,Fe),t.FORBID_CONTENTS&&(Qe===et&&(Qe=N(Qe)),$(Qe,t.FORBID_CONTENTS,Fe)),Ye&&(ke["#text"]=!0),Me&&$(ke,["html","head","body"]),ke.table&&($(ke,["tbody"]),delete Ce.tbody),g&&g(t),mt=t)},Ft=$({},["mi","mo","mn","ms","mtext"]),vt=$({},["foreignobject","annotation-xml"]),bt=$({},["title","style","font","a","script"]),St=$({},L);$(St,I),$(St,j);var Bt=$({},M);$(Bt,W);var Et=function(e){var t=_(e);t&&t.tagName||(t={namespaceURI:ct,tagName:"template"});var n=D(e.tagName),r=D(t.tagName);return!!ut[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===lt?"svg"===n:t.namespaceURI===it?"svg"===n&&("annotation-xml"===r||Ft[r]):Boolean(St[n]):e.namespaceURI===it?t.namespaceURI===lt?"math"===n:t.namespaceURI===at?"math"===n&&vt[r]:Boolean(Bt[n]):e.namespaceURI===lt?!(t.namespaceURI===at&&!vt[r])&&!(t.namespaceURI===it&&!Ft[r])&&!Bt[n]&&(bt[n]||!St[n]):!("application/xhtml+xml"!==ye||!ut[e.namespaceURI]))},Dt=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(t){e.remove()}}},Ot=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!He[e])if(Ve||Ue)try{Dt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},wt=function(e){var t,n;if(Pe)e="<remove></remove>"+e;else{var r=w(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ye&&ct===lt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=le?le.createHTML(e):e;if(ct===lt)try{t=(new m).parseFromString(o,ye)}catch(e){}if(!t||!t.documentElement){t=ue.createDocument(ct,"template",null);try{t.documentElement.innerHTML=st?ce:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),ct===lt?pe.call(t,Me?"html":"body")[0]:Me?t.documentElement:a},At=function(e){return fe.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null,!1)},kt=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},xt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Ht=function(e,t,r){he[e]&&S(he[e],(function(e){e.call(n,t,r,mt)}))},Tt=function(e){var t;if(Ht("beforeSanitizeElements",e,null),kt(e))return Dt(e),!0;if(H(/[\u0080-\uFFFF]/,e.nodeName))return Dt(e),!0;var r=Fe(e.nodeName);if(Ht("uponSanitizeElement",e,{tagName:r,allowedTags:ke}),e.hasChildNodes()&&!xt(e.firstElementChild)&&(!xt(e.content)||!xt(e.content.firstElementChild))&&H(/<[/\w]/g,e.innerHTML)&&H(/<[/\w]/g,e.textContent))return Dt(e),!0;if("select"===r&&H(/<template/i,e.innerHTML))return Dt(e),!0;if(7===e.nodeType)return Dt(e),!0;if(je&&8===e.nodeType&&H(/<[/\w]/g,e.data))return Dt(e),!0;if(!ke[r]||Ce[r]){if(!Ce[r]&&Ct(r)){if(_e.tagNameCheck instanceof RegExp&&H(_e.tagNameCheck,r))return!1;if(_e.tagNameCheck instanceof Function&&_e.tagNameCheck(r))return!1}if(Ye&&!Qe[r]){var o=_(e)||e.parentNode,i=b(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a){var l=F(i[a],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,v(e))}}return Dt(e),!0}return e instanceof s&&!Et(e)?(Dt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!H(/<\/no(script|embed|frames)/i,e.innerHTML)?(Ie&&3===e.nodeType&&(t=e.textContent,t=A(t,ve," "),t=A(t,be," "),t=A(t,Se," "),e.textContent!==t&&(E(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ht("afterSanitizeElements",e,null),!1):(Dt(e),!0)},_t=function(e,t,n){if(Je&&("id"===t||"name"===t)&&(n in i||n in gt))return!1;if(Re&&!$e[t]&&H(Be,t));else if(Ne&&H(Ee,t));else if(!He[t]||$e[t]){if(!(Ct(e)&&(_e.tagNameCheck instanceof RegExp&&H(_e.tagNameCheck,e)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(e))&&(_e.attributeNameCheck instanceof RegExp&&H(_e.attributeNameCheck,t)||_e.attributeNameCheck instanceof Function&&_e.attributeNameCheck(t))||"is"===t&&_e.allowCustomizedBuiltInElements&&(_e.tagNameCheck instanceof RegExp&&H(_e.tagNameCheck,n)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(n))))return!1}else if(rt[t]);else if(H(Ae,A(n,Oe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==k(n,"data:")||!tt[e])if(ze&&!H(De,A(n,Oe,"")));else if(n)return!1;return!0},Ct=function(e){return"annotation-xml"!==e&&w(e,we)},$t=function(t){var r,o,i,a;Ht("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:He};for(a=l.length;a--;){var s=r=l[a],u=s.name,f=s.namespaceURI;if(o="value"===u?r.value:x(r.value),i=Fe(u),c.attrName=i,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Ht("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(Ot(u,t),c.keepAttr))if(Le||!H(/\/>/i,o))if(je&&H(/((--!?|])>)|<\/(style|title)/i,o))Ot(u,t);else{Ie&&(o=A(o,ve," "),o=A(o,be," "),o=A(o,Se," "));var d=Fe(t.nodeName);if(_t(d,i,o)){if(!Xe||"id"!==i&&"name"!==i||(Ot(u,t),o=qe+o),le&&"object"===e(h)&&"function"==typeof h.getAttributeType)if(f);else switch(h.getAttributeType(d,i)){case"TrustedHTML":o=le.createHTML(o);break;case"TrustedScriptURL":o=le.createScriptURL(o)}try{f?t.setAttributeNS(f,u,o):t.setAttribute(u,o),kt(t)?Dt(t):B(n.removed)}catch(e){}}}else Ot(u,t)}Ht("afterSanitizeAttributes",t,null)}},Nt=function e(t){var n,r=At(t);for(Ht("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ht("uponSanitizeShadowNode",n,null),Tt(n)||(n.content instanceof a&&e(n.content),$t(n));Ht("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var i,l,s,u,f,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((st=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!xt(o)){if("function"!=typeof o.toString)throw T("toString is not a function");if("string"!=typeof(o=o.toString()))throw T("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof o)return t.toStaticHTML(o);if(xt(o))return t.toStaticHTML(o.outerHTML)}return o}if(We||yt(d),n.removed=[],"string"==typeof o&&(Ke=!1),Ke){if(o.nodeName){var p=Fe(o.nodeName);if(!ke[p]||Ce[p])throw T("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(i=wt("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!Ve&&!Ie&&!Me&&-1===o.indexOf("<"))return le&&Ge?le.createHTML(o):o;if(!(i=wt(o)))return Ve?null:Ge?ce:""}i&&Pe&&Dt(i.firstChild);for(var m=At(Ke?o:i);s=m.nextNode();)3===s.nodeType&&s===u||Tt(s)||(s.content instanceof a&&Nt(s.content),$t(s),u=s);if(u=null,Ke)return o;if(Ve){if(Ue)for(f=de.call(i.ownerDocument);i.firstChild;)f.appendChild(i.firstChild);else f=i;return(He.shadowroot||He.shadowrootmod)&&(f=me.call(r,f,!0)),f}var g=Me?i.outerHTML:i.innerHTML;return Me&&ke["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&H(ne,i.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+g),Ie&&(g=A(g,ve," "),g=A(g,be," "),g=A(g,Se," ")),le&&Ge?le.createHTML(g):g},n.setConfig=function(e){yt(e),We=!0},n.clearConfig=function(){mt=null,We=!1},n.isValidAttribute=function(e,t,n){mt||yt({});var r=Fe(e),o=Fe(t);return _t(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(he[e]=he[e]||[],E(he[e],t))},n.removeHook=function(e){if(he[e])return B(he[e])},n.removeHooks=function(e){he[e]&&(he[e]=[])},n.removeAllHooks=function(){he={}},n}var le=ae();return le}();var Ar=pe(wr.exports);const kr=t=>r.forwardRef(((n,r)=>e(Br,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,o=Ar.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:o}}),n)}{const r=t.otherAttributes;return e(Or.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))));export{Br as NBComponent,Or as NotificationBanner,kr as withNotificationBanner};
//# sourceMappingURL=index.js.map
