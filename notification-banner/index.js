import{jsx as e,jsxs as t}from"react/jsx-runtime";import*as n from"react";import r,{useRef as o,useState as i,isValidElement as a,createRef as l,cloneElement as c,PureComponent as s,useEffect as u,useLayoutEffect as d}from"react";import{findDOMNode as f}from"react-dom";import{CrossIcon as p}from"@lifesg/react-icons/cross";import m,{css as h}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var v=function(e,t){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},v(e,t)};var b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)};var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var S=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},E="object"==typeof F&&F&&F.Object===Object&&F,D="object"==typeof self&&self&&self.Object===Object&&self,B=E||D||Function("return this")(),w=B,A=function(){return w.Date.now()},x=/\s/;var O=function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t},T=/^\s+/;var _=function(e){return e?e.slice(0,O(e)+1).replace(T,""):e},k=B.Symbol,C=k,$=Object.prototype,H=$.hasOwnProperty,N=$.toString,R=C?C.toStringTag:void 0;var L=function(e){var t=H.call(e,R),n=e[R];try{e[R]=void 0;var r=!0}catch(e){}var o=N.call(e);return r&&(t?e[R]=n:delete e[R]),o},z=Object.prototype.toString;var j=L,I=function(e){return z.call(e)},M=k?k.toStringTag:void 0;var W=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?j(e):I(e)},P=function(e){return null!=e&&"object"==typeof e};var U=_,G=S,V=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==W(e)},X=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,K=parseInt;var Z=S,J=A,Q=function(e){if("number"==typeof e)return e;if(V(e))return NaN;if(G(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=G(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=U(e);var n=q.test(e);return n||Y.test(e)?K(e.slice(2),n?2:8):X.test(e)?NaN:+e},ee=Math.max,te=Math.min;var ne=function(e,t,n){var r,o,i,a,l,c,s=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function m(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-s>=i}function h(){var e=J();if(m(e))return g(e);l=setTimeout(h,function(e){var n=t-(e-c);return d?te(n,i-(e-s)):n}(e))}function g(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function y(){var e=J(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(h,t),u?p(e):a}(c);if(d)return clearTimeout(l),l=setTimeout(h,t),p(c)}return void 0===l&&(l=setTimeout(h,t)),a}return t=Q(t)||0,Z(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ee(Q(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=o=l=void 0},y.flush=function(){return void 0===l?a:g(J())},y},re=ne,oe=S;var ie=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return oe(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),re(e,t,{leading:r,maxWait:t,trailing:o})},ae=function(e,t,n,r){switch(t){case"debounce":return ne(e,n,r);case"throttle":return ie(e,n,r);default:return e}},le=function(e){return"function"==typeof e},ce=function(){return"undefined"==typeof window},se=function(e){return e instanceof Element||e instanceof HTMLDocument},ue=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&le(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ce()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ce())return null;if(t)return document.querySelector(t);if(r&&se(r))return r;if(n.targetRef&&se(n.targetRef.current))return n.targetRef.current;var o=f(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,l=t.onResize;if(o||a){var c=ue(l,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ce()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return le(t)?"renderProp":le(r)?"childFunction":a(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,c=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ce()||(n.resizeHandler=ae(n.createResizeHandler,o,c,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ce()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=o)(s);case"child":if((e=o).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(s,["targetRef"]);return c(e,u)}return c(e,s);case"childArray":return(e=o).map((function(e){return!!e&&c(e,s)}));default:return n.createElement(a,null)}}}(s);var de=ce()?u:d;var fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var me=Array.isArray,he="object"==typeof fe&&fe&&fe.Object===Object&&fe,ge="object"==typeof self&&self&&self.Object===Object&&self,ye=he||ge||Function("return this")(),ve=ye.Symbol,be=ve,Fe=Object.prototype,Se=Fe.hasOwnProperty,Ee=Fe.toString,De=be?be.toStringTag:void 0;var Be=function(e){var t=Se.call(e,De),n=e[De];try{e[De]=void 0;var r=!0}catch(e){}var o=Ee.call(e);return r&&(t?e[De]=n:delete e[De]),o},we=Object.prototype.toString;var Ae=Be,xe=function(e){return we.call(e)},Oe=ve?ve.toStringTag:void 0;var Te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Oe&&Oe in Object(e)?Ae(e):xe(e)};var _e=Te,ke=function(e){return null!=e&&"object"==typeof e};var Ce=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==_e(e)},$e=me,He=Ce,Ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Re=/^\w*$/;var Le=function(e,t){if($e(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!He(e))||(Re.test(e)||!Ne.test(e)||null!=t&&e in Object(t))};var ze=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},je=Te,Ie=ze;var Me,We=function(e){if(!Ie(e))return!1;var t=je(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Pe=ye["__core-js_shared__"],Ue=(Me=/[^.]+$/.exec(Pe&&Pe.keys&&Pe.keys.IE_PROTO||""))?"Symbol(src)_1."+Me:"";var Ge=function(e){return!!Ue&&Ue in e},Ve=Function.prototype.toString;var Xe=We,qe=Ge,Ye=ze,Ke=function(e){if(null!=e){try{return Ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Ze=/^\[object .+?Constructor\]$/,Je=Function.prototype,Qe=Object.prototype,et=Je.toString,tt=Qe.hasOwnProperty,nt=RegExp("^"+et.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var rt=function(e){return!(!Ye(e)||qe(e))&&(Xe(e)?nt:Ze).test(Ke(e))},ot=function(e,t){return null==e?void 0:e[t]};var it=function(e,t){var n=ot(e,t);return rt(n)?n:void 0},at=it(Object,"create"),lt=at;var ct=function(){this.__data__=lt?lt(null):{},this.size=0};var st=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ut=at,dt=Object.prototype.hasOwnProperty;var ft=function(e){var t=this.__data__;if(ut){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return dt.call(t,e)?t[e]:void 0},pt=at,mt=Object.prototype.hasOwnProperty;var ht=at;var gt=ct,yt=st,vt=ft,bt=function(e){var t=this.__data__;return pt?void 0!==t[e]:mt.call(t,e)},Ft=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ht&&void 0===t?"__lodash_hash_undefined__":t,this};function St(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}St.prototype.clear=gt,St.prototype.delete=yt,St.prototype.get=vt,St.prototype.has=bt,St.prototype.set=Ft;var Et=St;var Dt=function(){this.__data__=[],this.size=0};var Bt=function(e,t){return e===t||e!=e&&t!=t};var wt=function(e,t){for(var n=e.length;n--;)if(Bt(e[n][0],t))return n;return-1},At=wt,xt=Array.prototype.splice;var Ot=wt;var Tt=wt;var _t=wt;var kt=Dt,Ct=function(e){var t=this.__data__,n=At(t,e);return!(n<0)&&(n==t.length-1?t.pop():xt.call(t,n,1),--this.size,!0)},$t=function(e){var t=this.__data__,n=Ot(t,e);return n<0?void 0:t[n][1]},Ht=function(e){return Tt(this.__data__,e)>-1},Nt=function(e,t){var n=this.__data__,r=_t(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Rt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Rt.prototype.clear=kt,Rt.prototype.delete=Ct,Rt.prototype.get=$t,Rt.prototype.has=Ht,Rt.prototype.set=Nt;var Lt=Rt,zt=it(ye,"Map"),jt=Et,It=Lt,Mt=zt;var Wt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pt=function(e,t){var n=e.__data__;return Wt(t)?n["string"==typeof t?"string":"hash"]:n.map},Ut=Pt;var Gt=Pt;var Vt=Pt;var Xt=Pt;var qt=function(){this.size=0,this.__data__={hash:new jt,map:new(Mt||It),string:new jt}},Yt=function(e){var t=Ut(this,e).delete(e);return this.size-=t?1:0,t},Kt=function(e){return Gt(this,e).get(e)},Zt=function(e){return Vt(this,e).has(e)},Jt=function(e,t){var n=Xt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qt.prototype.clear=qt,Qt.prototype.delete=Yt,Qt.prototype.get=Kt,Qt.prototype.has=Zt,Qt.prototype.set=Jt;var en=Qt;function tn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(tn.Cache||en),n}tn.Cache=en;var nn=tn;var rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,on=/\\(\\)?/g,an=function(e){var t=nn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rn,(function(e,n,r,o){t.push(r?o.replace(on,"$1"):n||e)})),t}));var ln=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},cn=me,sn=Ce,un=ve?ve.prototype:void 0,dn=un?un.toString:void 0;var fn=function e(t){if("string"==typeof t)return t;if(cn(t))return ln(t,e)+"";if(sn(t))return dn?dn.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},pn=fn;var mn=me,hn=Le,gn=an,yn=function(e){return null==e?"":pn(e)};var vn=Ce;var bn=function(e,t){return mn(e)?e:hn(e,t)?[e]:gn(yn(e))},Fn=function(e){if("string"==typeof e||vn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Sn=function(e,t){for(var n=0,r=(t=bn(t,e)).length;null!=e&&n<r;)e=e[Fn(t[n++])];return n&&n==r?e:void 0};var En=pe((function(e,t,n){var r=null==e?void 0:Sn(e,t);return void 0===r?n:r}));const Dn=(e,t,n)=>t?En(n,t)||En(e,t):n||e,Bn=(e,t)=>{const n=t||e.defaultValue;return En(e.collections,n)};var wn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(wn||(wn={}));const An={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xn=e=>t=>{const n=t.theme,r=Bn(An,n[wn.colorScheme]);return n.options&&n.options.color?Dn(r,e,n.options.color):Dn(r,e)},On=(xn("Brand.1"),xn("Brand.2"),xn("Brand.3"),xn("Brand.4"),xn("Brand.5"),xn("Brand.6"),xn("Primary")),Tn=(xn("PrimaryDark"),xn("Secondary")),_n=(xn("Accent.Light.1"),xn("Accent.Light.2"),xn("Accent.Light.3"),xn("Accent.Light.4"),xn("Accent.Light.5"),xn("Accent.Light.6"),xn("Accent.Dark.1"),xn("Accent.Dark.2"),xn("Accent.Dark.3"),{1:xn("Neutral.1"),2:xn("Neutral.2"),3:xn("Neutral.3"),4:xn("Neutral.4"),5:xn("Neutral.5"),6:xn("Neutral.6"),7:xn("Neutral.7"),8:xn("Neutral.8")}),kn={Green:{Text:xn("Validation.Green.Text"),Icon:xn("Validation.Green.Icon"),Border:xn("Validation.Green.Border"),Background:xn("Validation.Green.Background")},Orange:{Text:xn("Validation.Orange.Text"),Icon:xn("Validation.Orange.Icon"),Border:xn("Validation.Orange.Border"),Background:xn("Validation.Orange.Background"),Badge:xn("Validation.Orange.Badge")},Red:{Text:xn("Validation.Red.Text"),Icon:xn("Validation.Red.Icon"),Border:xn("Validation.Red.Border"),Background:xn("Validation.Red.Background")},Blue:{Text:xn("Validation.Blue.Text"),Icon:xn("Validation.Blue.Icon"),Border:xn("Validation.Blue.Border"),Background:xn("Validation.Blue.Background")}},Cn=(xn("Shadow.Accent"),xn("Shadow.Red"),xn("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),$n=e=>Object.keys(Cn).reduce(((t,n)=>{const r=Cn[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Hn=$n("max-width"),Nn=($n("min-width"),m.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return h`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Hn.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Hn.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Rn=r.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=y(t,["mobileCols","tabletCols","desktopCols"]);return e(Nn,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=Ln(i||o||r),a=Ln(e),l=Ln(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ln=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},zn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,l=y(t,["children","data-testid","type","stretch"]);return e(jn,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},l,{children:r}))})),jn=m.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?h`
                padding: 0 3rem;
            `:h`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Hn.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Hn.tablet} {
        max-width: 720px;
    }
    ${Hn.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return h`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Hn.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Hn.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return h`
                    display: flex;
                    flex-direction: column;
                `;default:return h`
                    display: flex;
                `}}}
`,In=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=y(t,["children","data-testid","stretch"]);return e(Mn,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Mn=m.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?h`
                ${Hn.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:h`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,Wn=r.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:l=!1}=t,c=y(t,["children","data-testid","className","type","stretch"]);return e(In,Object.assign({ref:n,"data-testid":o,className:i,stretch:l},c,{children:e(zn,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:l},{children:r}))}))})),Pn={Section:In,Container:zn,Content:Wn,ColDiv:Rn},Un=m.button`
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

        ${({$highlight:e})=>e&&h`
                background-color: ${_n[7]};
            `}
    }
`,Gn=r.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,l=y(t,["children","focusHighlight","focusOutline","type"]);return e(Un,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Vn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Xn={collections:{base:{D1:{fontFamily:Vn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Vn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Vn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Vn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Vn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Vn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Vn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Vn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Vn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Vn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Vn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Vn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Vn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Vn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},qn=e=>t=>{const n=t.theme,r=Bn(Xn,n[wn.textStyleScheme]);return n.options&&n.options.textStyle?Dn(r,e,n.options.textStyle):Dn(r,e)},Yn={D1:{fontFamily:qn("D1.fontFamily"),fontSize:qn("D1.fontSize"),fontWeight:qn("D1.fontWeight"),lineHeight:qn("D1.lineHeight"),letterSpacing:qn("D1.letterSpacing")},D2:{fontFamily:qn("D2.fontFamily"),fontSize:qn("D2.fontSize"),fontWeight:qn("D2.fontWeight"),lineHeight:qn("D2.lineHeight"),letterSpacing:qn("D2.letterSpacing")},D3:{fontFamily:qn("D3.fontFamily"),fontSize:qn("D3.fontSize"),fontWeight:qn("D3.fontWeight"),lineHeight:qn("D3.lineHeight"),letterSpacing:qn("D3.letterSpacing")},D4:{fontFamily:qn("D4.fontFamily"),fontSize:qn("D4.fontSize"),fontWeight:qn("D4.fontWeight"),lineHeight:qn("D4.lineHeight"),letterSpacing:qn("D4.letterSpacing")},DBody:{fontFamily:qn("DBody.fontFamily"),fontSize:qn("DBody.fontSize"),fontWeight:qn("DBody.fontWeight"),lineHeight:qn("DBody.lineHeight"),letterSpacing:qn("DBody.letterSpacing")},H1:{fontFamily:qn("H1.fontFamily"),fontSize:qn("H1.fontSize"),fontWeight:qn("H1.fontWeight"),lineHeight:qn("H1.lineHeight"),letterSpacing:qn("H1.letterSpacing")},H2:{fontFamily:qn("H2.fontFamily"),fontSize:qn("H2.fontSize"),fontWeight:qn("H2.fontWeight"),lineHeight:qn("H2.lineHeight"),letterSpacing:qn("H2.letterSpacing")},H3:{fontFamily:qn("H3.fontFamily"),fontSize:qn("H3.fontSize"),fontWeight:qn("H3.fontWeight"),lineHeight:qn("H3.lineHeight"),letterSpacing:qn("H3.letterSpacing")},H4:{fontFamily:qn("H4.fontFamily"),fontSize:qn("H4.fontSize"),fontWeight:qn("H4.fontWeight"),lineHeight:qn("H4.lineHeight"),letterSpacing:qn("H4.letterSpacing")},H5:{fontFamily:qn("H5.fontFamily"),fontSize:qn("H5.fontSize"),fontWeight:qn("H5.fontWeight"),lineHeight:qn("H5.lineHeight"),letterSpacing:qn("H5.letterSpacing")},H6:{fontFamily:qn("H6.fontFamily"),fontSize:qn("H6.fontSize"),fontWeight:qn("H6.fontWeight"),lineHeight:qn("H6.lineHeight"),letterSpacing:qn("H6.letterSpacing")},Body:{fontFamily:qn("Body.fontFamily"),fontSize:qn("Body.fontSize"),fontWeight:qn("Body.fontWeight"),lineHeight:qn("Body.lineHeight"),letterSpacing:qn("Body.letterSpacing")},BodySmall:{fontFamily:qn("BodySmall.fontFamily"),fontSize:qn("BodySmall.fontSize"),fontWeight:qn("BodySmall.fontWeight"),lineHeight:qn("BodySmall.lineHeight"),letterSpacing:qn("BodySmall.letterSpacing")},XSmall:{fontFamily:qn("XSmall.fontFamily"),fontSize:qn("XSmall.fontSize"),fontWeight:qn("XSmall.fontWeight"),lineHeight:qn("XSmall.lineHeight"),letterSpacing:qn("XSmall.letterSpacing")}},Kn=e=>{switch(e){case 700:case"bold":return Vn.Bold;case 600:case"semibold":return Vn.Semibold;case 300:case"light":return Vn.Light;case 400:case"regular":return Vn.Regular;default:return""}},Zn=(e,t)=>n=>{var r;const o=Yn[e].fontFamily(n),i=Yn[e].fontWeight(n);return Object.values(Vn).includes(o)?h`
                font-family: ${Kn(t)||Kn(i)||o};
                font-weight: normal !important;
            `:h`
            font-family: ${o};
            font-weight: ${null!==(r=Jn(t)||i)&&void 0!==r?r:"normal"};
        `},Jn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Qn=e=>{if(e>0)return h`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},er=Zn,tr=(e,t,n=!1)=>r=>{const o=Yn[e],i=o.fontSize(r);return h`
            ${Zn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${h`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},nr=(e=!1,t=!1,n=void 0)=>t?h`
            display: block;
            ${Qn(n)}
        `:e?h`
            display: inline;
        `:h`
            display: block;
            ${Qn(n)}
        `;var rr;!function(e){e.D1=m.h1`
        ${e=>h`
                ${tr("D1",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>h`
                ${tr("D2",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>h`
                ${tr("D3",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>h`
                ${tr("D4",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>h`
                ${tr("DBody",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>h`
                ${tr("H1",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>h`
                ${tr("H2",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>h`
                ${tr("H3",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>h`
                ${tr("H4",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>h`
                ${tr("H5",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>h`
                ${tr("H6",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>h`
                ${tr("Body",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>h`
                ${tr("BodySmall",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>h`
                ${tr("XSmall",e.weight,e.paragraph)}
                color: ${_n[1]};
                ${nr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>ar(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>ar(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(rr||(rr={}));const or=m.a`
    ${e=>h`
            ${tr(e.textStyle,e.weight)}
            color: ${On};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Tn};

                svg {
                    color: ${Tn};
                }
            }
        `}
`,ir=m(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ar=n=>{var{external:r=!1,children:o}=n,i=y(n,["external","children"]);return t(or,Object.assign({},i,{children:[o,r&&e(ir,{})]}))};var lr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(lr||(lr={}));const cr="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",sr=h`
    color: ${kn.Orange.Icon};

    svg {
        color: ${kn.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${kn.Orange.Icon};
        svg {
            color: ${kn.Orange.Icon};
        }
    }
`,ur=m.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${cr};
    background: ${_n[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,dr=m(Pn.Content)`
    display: flex;
`,fr=m.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,pr=m.div`
    display: inline-block;
    width: 100%;

    ${tr("Body","regular")}
    color: ${_n[8]};

    p {
        display: inline-block;
    }

    strong {
        ${er("Body","semibold")}
        color: ${_n[8]};
    }

    a {
        ${tr("Body","regular")}
        ${sr}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return h`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,mr=m(rr.Hyperlink.Default)`
    position: relative;

    ${sr}
`,hr=m(Gn)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,gr=m(p)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${_n[8]};
`,yr=m.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${kn.Orange.Icon};
    ${tr("BodySmall","semibold")};

    cursor: pointer;
`,vr=m.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,br=n=>{var{children:r,visible:a=!0,dismissible:l=!0,sticky:c=!0,onDismiss:s,id:d,forwardedRef:f,maxCollapsedHeight:p,onClick:m,actionButton:h}=n,g=y(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const v=g["data-testid"],[F,S]=i(a),{height:E,ref:D}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,l=void 0===a?1e3:a,c=e.refreshOptions,s=e.handleWidth,u=void 0===s||s,d=e.handleHeight,f=void 0===d||d,p=e.targetRef,m=e.observerOptions,h=e.onResize,g=o(n),y=o(null),v=null!=p?p:y,F=o(),S=i({width:void 0,height:void 0}),E=S[0],D=S[1];return de((function(){if(!ce()){var e=ue(h,D,u,f);F.current=ae((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!ce()&&e({width:r,height:o}),g.current=!1}))}),r,l,c);var t=new window.ResizeObserver(F.current);return v.current&&t.observe(v.current,m),function(){t.disconnect();var e=F.current;e&&e.cancel&&e.cancel()}}}),[r,l,c,u,f,h,m,v.current]),b({ref:v},E)}();u((()=>{S(a)}),[a]);const B=e=>{e.stopPropagation(),S(!1),l&&s&&s()},w=e=>{h.onClick&&(e.stopPropagation(),h.onClick(e))};if(!F)return null;return t(ur,Object.assign({ref:f,$sticky:c,$clickable:!!m,onClick:m},g,{children:[t(dr,Object.assign({id:Fr("container",d)},{children:[t(fr,{children:[e(pr,Object.assign({"data-testid":Fr("text-content",v),$maxCollapsedHeight:p&&E>p?p:void 0},{children:e("div",Object.assign({ref:D},{children:r}))})),h&&e(yr,Object.assign({id:Fr("action-button",d),"data-testid":Fr("action-button",v),type:"button"},h,{onClick:w},{children:h.children}))]}),l&&e(hr,Object.assign({onClick:B,id:Fr("dismiss-button",d),"data-testid":Fr("dismiss-button",v),focusHighlight:!1,type:"button"},{children:e(gr,{})}))]})),m&&e(vr,{"aria-label":"Clickable banner",type:"button"})]}))},Fr=(e,t="wrapper")=>`${t}-${e}`,Sr=r.forwardRef(((t,n)=>e(br,Object.assign({},t,{forwardedRef:n})))),Er=Object.assign(Sr,{Link:mr});var Dr={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */Dr.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,i){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(e,o));return r&&t(i,r.prototype),i},r.apply(null,arguments)}function o(e){return i(e)||a(e)||l(e)||s()}function i(e){if(Array.isArray(e))return c(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,d=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,m=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,v="undefined"!=typeof Reflect&&Reflect,b=v.apply,F=v.construct;b||(b=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),F||(F=function(e,t){return r(e,o(t))});var S=C(Array.prototype.forEach),E=C(Array.prototype.pop),D=C(Array.prototype.push),B=C(String.prototype.toLowerCase),w=C(String.prototype.toString),A=C(String.prototype.match),x=C(String.prototype.replace),O=C(String.prototype.indexOf),T=C(String.prototype.trim),_=C(RegExp.prototype.test),k=$(TypeError);function C(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return b(e,t,r)}}function $(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return F(e,n)}}function H(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:B,d&&d(e,null);for(var o=t.length;o--;){var i=t[o];if("string"==typeof i){var a=n(i);a!==i&&(f(t)||(t[o]=a),i=a)}e[i]=!0}return e}function N(e){var t,n=y(null);for(t in e)!0===b(u,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=m(e,t);if(n){if(n.get)return C(n.get);if("function"==typeof n.value)return C(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var L=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),z=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),j=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),M=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),W=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),P=h(["#text"]),U=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),G=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),V=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),X=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Y=g(/<%[\w\W]*|[\w\W]*%>/gm),K=g(/\${[\w\W]*}/gm),Z=g(/^data-[\-\w.\u00B7-\uFFFF]/),J=g(/^aria-[\-\w]+$/),Q=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=g(/^(?:\w+script|data):/i),te=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=g(/^html$/i),re=g(/^[a-z][.\w]*(-[.\w]+)+$/i),oe=function(){return"undefined"==typeof window?null:window},ie=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe(),n=function(e){return ae(e)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=t.document,a=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,d=t.NamedNodeMap,f=void 0===d?t.NamedNodeMap||t.MozNamedAttrMap:d,p=t.HTMLFormElement,m=t.DOMParser,g=t.trustedTypes,y=s.prototype,v=R(y,"cloneNode"),b=R(y,"nextSibling"),F=R(y,"childNodes"),C=R(y,"parentNode");if("function"==typeof l){var $=i.createElement("template");$.content&&$.content.ownerDocument&&(i=$.content.ownerDocument)}var le=ie(g,r),ce=le?le.createHTML(""):"",se=i,ue=se.implementation,de=se.createNodeIterator,fe=se.createDocumentFragment,pe=se.getElementsByTagName,me=r.importNode,he={};try{he=N(i).documentMode?i.documentMode:{}}catch(e){}var ge={};n.isSupported="function"==typeof C&&ue&&void 0!==ue.createHTMLDocument&&9!==he;var ye,ve,be=q,Fe=Y,Se=K,Ee=Z,De=J,Be=ee,we=te,Ae=re,xe=Q,Oe=null,Te=H({},[].concat(o(L),o(z),o(j),o(M),o(P))),_e=null,ke=H({},[].concat(o(U),o(G),o(V),o(X))),Ce=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$e=null,He=null,Ne=!0,Re=!0,Le=!1,ze=!0,je=!1,Ie=!0,Me=!1,We=!1,Pe=!1,Ue=!1,Ge=!1,Ve=!1,Xe=!0,qe=!1,Ye="user-content-",Ke=!0,Ze=!1,Je={},Qe=null,et=H({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=H({},["audio","video","img","source","image","track"]),rt=null,ot=H({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",lt="http://www.w3.org/1999/xhtml",ct=lt,st=!1,ut=null,dt=H({},[it,at,lt],w),ft=["application/xhtml+xml","text/html"],pt="text/html",mt=null,ht=i.createElement("form"),gt=function(e){return e instanceof RegExp||e instanceof Function},yt=function(t){mt&&mt===t||(t&&"object"===e(t)||(t={}),t=N(t),ye=ye=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?pt:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===ye?w:B,Oe="ALLOWED_TAGS"in t?H({},t.ALLOWED_TAGS,ve):Te,_e="ALLOWED_ATTR"in t?H({},t.ALLOWED_ATTR,ve):ke,ut="ALLOWED_NAMESPACES"in t?H({},t.ALLOWED_NAMESPACES,w):dt,rt="ADD_URI_SAFE_ATTR"in t?H(N(ot),t.ADD_URI_SAFE_ATTR,ve):ot,tt="ADD_DATA_URI_TAGS"in t?H(N(nt),t.ADD_DATA_URI_TAGS,ve):nt,Qe="FORBID_CONTENTS"in t?H({},t.FORBID_CONTENTS,ve):et,$e="FORBID_TAGS"in t?H({},t.FORBID_TAGS,ve):{},He="FORBID_ATTR"in t?H({},t.FORBID_ATTR,ve):{},Je="USE_PROFILES"in t&&t.USE_PROFILES,Ne=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,Le=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ze=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,je=t.SAFE_FOR_TEMPLATES||!1,Ie=!1!==t.SAFE_FOR_XML,Me=t.WHOLE_DOCUMENT||!1,Ue=t.RETURN_DOM||!1,Ge=t.RETURN_DOM_FRAGMENT||!1,Ve=t.RETURN_TRUSTED_TYPE||!1,Pe=t.FORCE_BODY||!1,Xe=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,Ke=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,xe=t.ALLOWED_URI_REGEXP||xe,ct=t.NAMESPACE||lt,Ce=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&gt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ce.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&gt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ce.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ce.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),je&&(Re=!1),Ge&&(Ue=!0),Je&&(Oe=H({},o(P)),_e=[],!0===Je.html&&(H(Oe,L),H(_e,U)),!0===Je.svg&&(H(Oe,z),H(_e,G),H(_e,X)),!0===Je.svgFilters&&(H(Oe,j),H(_e,G),H(_e,X)),!0===Je.mathMl&&(H(Oe,M),H(_e,V),H(_e,X))),t.ADD_TAGS&&(Oe===Te&&(Oe=N(Oe)),H(Oe,t.ADD_TAGS,ve)),t.ADD_ATTR&&(_e===ke&&(_e=N(_e)),H(_e,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&H(rt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Qe===et&&(Qe=N(Qe)),H(Qe,t.FORBID_CONTENTS,ve)),Ke&&(Oe["#text"]=!0),Me&&H(Oe,["html","head","body"]),Oe.table&&(H(Oe,["tbody"]),delete $e.tbody),h&&h(t),mt=t)},vt=H({},["mi","mo","mn","ms","mtext"]),bt=H({},["foreignobject","annotation-xml"]),Ft=H({},["title","style","font","a","script"]),St=H({},z);H(St,j),H(St,I);var Et=H({},M);H(Et,W);var Dt=function(e){var t=C(e);t&&t.tagName||(t={namespaceURI:ct,tagName:"template"});var n=B(e.tagName),r=B(t.tagName);return!!ut[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===lt?"svg"===n:t.namespaceURI===it?"svg"===n&&("annotation-xml"===r||vt[r]):Boolean(St[n]):e.namespaceURI===it?t.namespaceURI===lt?"math"===n:t.namespaceURI===at?"math"===n&&bt[r]:Boolean(Et[n]):e.namespaceURI===lt?!(t.namespaceURI===at&&!bt[r])&&!(t.namespaceURI===it&&!vt[r])&&!Et[n]&&(Ft[n]||!St[n]):!("application/xhtml+xml"!==ye||!ut[e.namespaceURI]))},Bt=function(e){D(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(t){e.remove()}}},wt=function(e,t){try{D(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){D(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Ue||Ge)try{Bt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},At=function(e){var t,n;if(Pe)e="<remove></remove>"+e;else{var r=A(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ye&&ct===lt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=le?le.createHTML(e):e;if(ct===lt)try{t=(new m).parseFromString(o,ye)}catch(e){}if(!t||!t.documentElement){t=ue.createDocument(ct,"template",null);try{t.documentElement.innerHTML=st?ce:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),ct===lt?pe.call(t,Me?"html":"body")[0]:Me?t.documentElement:a},xt=function(e){return de.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null,!1)},Ot=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Tt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,r){ge[e]&&S(ge[e],(function(e){e.call(n,t,r,mt)}))},kt=function(e){var t;if(_t("beforeSanitizeElements",e,null),Ot(e))return Bt(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return Bt(e),!0;var r=ve(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:r,allowedTags:Oe}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&(!Tt(e.content)||!Tt(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return Bt(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return Bt(e),!0;if(7===e.nodeType)return Bt(e),!0;if(Ie&&8===e.nodeType&&_(/<[/\w]/g,e.data))return Bt(e),!0;if(!Oe[r]||$e[r]){if(!$e[r]&&$t(r)){if(Ce.tagNameCheck instanceof RegExp&&_(Ce.tagNameCheck,r))return!1;if(Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(r))return!1}if(Ke&&!Qe[r]){var o=C(e)||e.parentNode,i=F(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a){var l=v(i[a],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,b(e))}}return Bt(e),!0}return e instanceof s&&!Dt(e)?(Bt(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(je&&3===e.nodeType&&(t=e.textContent,t=x(t,be," "),t=x(t,Fe," "),t=x(t,Se," "),e.textContent!==t&&(D(n.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(Bt(e),!0)},Ct=function(e,t,n){if(Xe&&("id"===t||"name"===t)&&(n in i||n in ht))return!1;if(Re&&!He[t]&&_(Ee,t));else if(Ne&&_(De,t));else if(!_e[t]||He[t]){if(!($t(e)&&(Ce.tagNameCheck instanceof RegExp&&_(Ce.tagNameCheck,e)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(e))&&(Ce.attributeNameCheck instanceof RegExp&&_(Ce.attributeNameCheck,t)||Ce.attributeNameCheck instanceof Function&&Ce.attributeNameCheck(t))||"is"===t&&Ce.allowCustomizedBuiltInElements&&(Ce.tagNameCheck instanceof RegExp&&_(Ce.tagNameCheck,n)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(n))))return!1}else if(rt[t]);else if(_(xe,x(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==O(n,"data:")||!tt[e])if(Le&&!_(Be,x(n,we,"")));else if(n)return!1;return!0},$t=function(e){return"annotation-xml"!==e&&A(e,Ae)},Ht=function(t){var r,o,i,a;_t("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(a=l.length;a--;){var s=r=l[a],u=s.name,d=s.namespaceURI;if(o="value"===u?r.value:T(r.value),i=ve(u),c.attrName=i,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(wt(u,t),c.keepAttr))if(ze||!_(/\/>/i,o))if(Ie&&_(/((--!?|])>)|<\/(style|title)/i,o))wt(u,t);else{je&&(o=x(o,be," "),o=x(o,Fe," "),o=x(o,Se," "));var f=ve(t.nodeName);if(Ct(f,i,o)){if(!qe||"id"!==i&&"name"!==i||(wt(u,t),o=Ye+o),le&&"object"===e(g)&&"function"==typeof g.getAttributeType)if(d);else switch(g.getAttributeType(f,i)){case"TrustedHTML":o=le.createHTML(o);break;case"TrustedScriptURL":o=le.createScriptURL(o)}try{d?t.setAttributeNS(d,u,o):t.setAttribute(u,o),Ot(t)?Bt(t):E(n.removed)}catch(e){}}}else wt(u,t)}_t("afterSanitizeAttributes",t,null)}},Nt=function e(t){var n,r=xt(t);for(_t("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_t("uponSanitizeShadowNode",n,null),kt(n)||(n.content instanceof a&&e(n.content),Ht(n));_t("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var i,l,s,u,d,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((st=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!Tt(o)){if("function"!=typeof o.toString)throw k("toString is not a function");if("string"!=typeof(o=o.toString()))throw k("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof o)return t.toStaticHTML(o);if(Tt(o))return t.toStaticHTML(o.outerHTML)}return o}if(We||yt(f),n.removed=[],"string"==typeof o&&(Ze=!1),Ze){if(o.nodeName){var p=ve(o.nodeName);if(!Oe[p]||$e[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(i=At("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?i=l:i.appendChild(l);else{if(!Ue&&!je&&!Me&&-1===o.indexOf("<"))return le&&Ve?le.createHTML(o):o;if(!(i=At(o)))return Ue?null:Ve?ce:""}i&&Pe&&Bt(i.firstChild);for(var m=xt(Ze?o:i);s=m.nextNode();)3===s.nodeType&&s===u||kt(s)||(s.content instanceof a&&Nt(s.content),Ht(s),u=s);if(u=null,Ze)return o;if(Ue){if(Ge)for(d=fe.call(i.ownerDocument);i.firstChild;)d.appendChild(i.firstChild);else d=i;return(_e.shadowroot||_e.shadowrootmod)&&(d=me.call(r,d,!0)),d}var h=Me?i.outerHTML:i.innerHTML;return Me&&Oe["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&_(ne,i.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+h),je&&(h=x(h,be," "),h=x(h,Fe," "),h=x(h,Se," ")),le&&Ve?le.createHTML(h):h},n.setConfig=function(e){yt(e),We=!0},n.clearConfig=function(){mt=null,We=!1},n.isValidAttribute=function(e,t,n){mt||yt({});var r=ve(e),o=ve(t);return Ct(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(ge[e]=ge[e]||[],D(ge[e],t))},n.removeHook=function(e){if(ge[e])return E(ge[e])},n.removeHooks=function(e){ge[e]&&(ge[e]=[])},n.removeAllHooks=function(){ge={}},n}var le=ae();return le}();var Br=pe(Dr.exports);const wr=t=>r.forwardRef(((n,r)=>e(br,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,o=Br.sanitize(t.content);return e("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:o}}),n)}{const r=t.otherAttributes;return e(Er.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))));export{br as NBComponent,Er as NotificationBanner,wr as withNotificationBanner};
//# sourceMappingURL=index.js.map
