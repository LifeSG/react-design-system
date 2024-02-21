import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import{useRef as i,useState as o,isValidElement as a,createRef as l,cloneElement as c,PureComponent as f,useEffect as u,useLayoutEffect as h,useCallback as d}from"react";import{findDOMNode as s}from"react-dom";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";import p,{css as y}from"styled-components";import{ExternalIcon as F}from"@lifesg/react-icons/external";function m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var v=function(t,e){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},v(t,e)};var b=function(){return b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},b.apply(this,arguments)};var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},D="object"==typeof S&&S&&S.Object===Object&&S,w="object"==typeof self&&self&&self.Object===Object&&self,E=D||w||Function("return this")(),H=E,$=function(){return H.Date.now()},O=/\s/;var _=function(t){for(var e=t.length;e--&&O.test(t.charAt(e)););return e},A=/^\s+/;var x=function(t){return t?t.slice(0,_(t)+1).replace(A,""):t},z=E.Symbol,j=z,k=Object.prototype,C=k.hasOwnProperty,W=k.toString,R=j?j.toStringTag:void 0;var T=function(t){var e=C.call(t,R),n=t[R];try{t[R]=void 0;var r=!0}catch(t){}var i=W.call(t);return r&&(e?t[R]=n:delete t[R]),i},L=Object.prototype.toString;var P=T,I=function(t){return L.call(t)},V=z?z.toStringTag:void 0;var N=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?P(t):I(t)},M=function(t){return null!=t&&"object"==typeof t};var G=x,X=B,U=function(t){return"symbol"==typeof t||M(t)&&"[object Symbol]"==N(t)},q=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt;var Y=B,Z=$,tt=function(t){if("number"==typeof t)return t;if(U(t))return NaN;if(X(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=X(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=G(t);var n=J.test(t);return n||K.test(t)?Q(t.slice(2),n?2:8):q.test(t)?NaN:+t},et=Math.max,nt=Math.min;var rt=function(t,e,n){var r,i,o,a,l,c,f=0,u=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function s(e){var n=r,o=i;return r=i=void 0,f=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-f>=o}function p(){var t=Z();if(g(t))return y(t);l=setTimeout(p,function(t){var n=e-(t-c);return h?nt(n,o-(t-f)):n}(t))}function y(t){return l=void 0,d&&r?s(t):(r=i=void 0,a)}function F(){var t=Z(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return f=t,l=setTimeout(p,e),u?s(t):a}(c);if(h)return clearTimeout(l),l=setTimeout(p,e),s(c)}return void 0===l&&(l=setTimeout(p,e)),a}return e=tt(e)||0,Y(n)&&(u=!!n.leading,o=(h="maxWait"in n)?et(tt(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),F.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},F.flush=function(){return void 0===l?a:y(Z())},F},it=rt,ot=B;var at=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return ot(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),it(t,e,{leading:r,maxWait:e,trailing:i})},lt=function(t,e,n,r){switch(e){case"debounce":return rt(t,n,r);case"throttle":return at(t,n,r);default:return t}},ct=function(t){return"function"==typeof t},ft=function(){return"undefined"==typeof window},ut=function(t){return t instanceof Element||t instanceof HTMLDocument},ht=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&ct(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!ft()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(ft())return null;if(e)return document.querySelector(e);if(r&&ut(r))return r;if(n.targetRef&&ut(n.targetRef.current))return n.targetRef.current;var i=s(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=ht(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!ft()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return ct(e)?"renderProp":ct(r)?"childFunction":a(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,c=void 0===o?1e3:o,f=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ft()||(n.resizeHandler=lt(n.createResizeHandler,i,c,f),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}v(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){ft()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,i=e.children,o=e.nodeType,a=void 0===o?"div":o,l=this.state,f={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(t=i)(f);case"child":if((t=i).type&&"string"==typeof t.type){var u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(f,["targetRef"]);return c(t,u)}return c(t,f);case"childArray":return(t=i).map((function(t){return!!t&&c(t,f)}));default:return r.createElement(a,null)}}}(f);var dt=ft()?u:h;const st={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var gt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function pt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yt=Array.isArray,Ft="object"==typeof gt&&gt&&gt.Object===Object&&gt,mt="object"==typeof self&&self&&self.Object===Object&&self,vt=Ft||mt||Function("return this")(),bt=vt.Symbol,St=bt,Bt=Object.prototype,Dt=Bt.hasOwnProperty,wt=Bt.toString,Et=St?St.toStringTag:void 0;var Ht=function(t){var e=Dt.call(t,Et),n=t[Et];try{t[Et]=void 0;var r=!0}catch(t){}var i=wt.call(t);return r&&(e?t[Et]=n:delete t[Et]),i},$t=Object.prototype.toString;var Ot=Ht,_t=function(t){return $t.call(t)},At=bt?bt.toStringTag:void 0;var xt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":At&&At in Object(t)?Ot(t):_t(t)};var zt=xt,jt=function(t){return null!=t&&"object"==typeof t};var kt=function(t){return"symbol"==typeof t||jt(t)&&"[object Symbol]"==zt(t)},Ct=yt,Wt=kt,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tt=/^\w*$/;var Lt=function(t,e){if(Ct(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Wt(t))||(Tt.test(t)||!Rt.test(t)||null!=e&&t in Object(e))};var Pt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},It=xt,Vt=Pt;var Nt,Mt=function(t){if(!Vt(t))return!1;var e=It(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Gt=vt["__core-js_shared__"],Xt=(Nt=/[^.]+$/.exec(Gt&&Gt.keys&&Gt.keys.IE_PROTO||""))?"Symbol(src)_1."+Nt:"";var Ut=function(t){return!!Xt&&Xt in t},qt=Function.prototype.toString;var Jt=Mt,Kt=Ut,Qt=Pt,Yt=function(t){if(null!=t){try{return qt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Zt=/^\[object .+?Constructor\]$/,te=Function.prototype,ee=Object.prototype,ne=te.toString,re=ee.hasOwnProperty,ie=RegExp("^"+ne.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var oe=function(t){return!(!Qt(t)||Kt(t))&&(Jt(t)?ie:Zt).test(Yt(t))},ae=function(t,e){return null==t?void 0:t[e]};var le=function(t,e){var n=ae(t,e);return oe(n)?n:void 0},ce=le(Object,"create"),fe=ce;var ue=function(){this.__data__=fe?fe(null):{},this.size=0};var he=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},de=ce,se=Object.prototype.hasOwnProperty;var ge=function(t){var e=this.__data__;if(de){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return se.call(e,t)?e[t]:void 0},pe=ce,ye=Object.prototype.hasOwnProperty;var Fe=ce;var me=ue,ve=he,be=ge,Se=function(t){var e=this.__data__;return pe?void 0!==e[t]:ye.call(e,t)},Be=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Fe&&void 0===e?"__lodash_hash_undefined__":e,this};function De(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}De.prototype.clear=me,De.prototype.delete=ve,De.prototype.get=be,De.prototype.has=Se,De.prototype.set=Be;var we=De;var Ee=function(){this.__data__=[],this.size=0};var He=function(t,e){return t===e||t!=t&&e!=e};var $e=function(t,e){for(var n=t.length;n--;)if(He(t[n][0],e))return n;return-1},Oe=$e,_e=Array.prototype.splice;var Ae=$e;var xe=$e;var ze=$e;var je=Ee,ke=function(t){var e=this.__data__,n=Oe(e,t);return!(n<0)&&(n==e.length-1?e.pop():_e.call(e,n,1),--this.size,!0)},Ce=function(t){var e=this.__data__,n=Ae(e,t);return n<0?void 0:e[n][1]},We=function(t){return xe(this.__data__,t)>-1},Re=function(t,e){var n=this.__data__,r=ze(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Te.prototype.clear=je,Te.prototype.delete=ke,Te.prototype.get=Ce,Te.prototype.has=We,Te.prototype.set=Re;var Le=Te,Pe=le(vt,"Map"),Ie=we,Ve=Le,Ne=Pe;var Me=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Ge=function(t,e){var n=t.__data__;return Me(e)?n["string"==typeof e?"string":"hash"]:n.map},Xe=Ge;var Ue=Ge;var qe=Ge;var Je=Ge;var Ke=function(){this.size=0,this.__data__={hash:new Ie,map:new(Ne||Ve),string:new Ie}},Qe=function(t){var e=Xe(this,t).delete(t);return this.size-=e?1:0,e},Ye=function(t){return Ue(this,t).get(t)},Ze=function(t){return qe(this,t).has(t)},tn=function(t,e){var n=Je(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function en(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}en.prototype.clear=Ke,en.prototype.delete=Qe,en.prototype.get=Ye,en.prototype.has=Ze,en.prototype.set=tn;var nn=en;function rn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(rn.Cache||nn),n}rn.Cache=nn;var on=rn;var an=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ln=/\\(\\)?/g,cn=function(t){var e=on(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(an,(function(t,n,r,i){e.push(r?i.replace(ln,"$1"):n||t)})),e}));var fn=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},un=yt,hn=kt,dn=bt?bt.prototype:void 0,sn=dn?dn.toString:void 0;var gn=function t(e){if("string"==typeof e)return e;if(un(e))return fn(e,t)+"";if(hn(e))return sn?sn.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},pn=gn;var yn=yt,Fn=Lt,mn=cn,vn=function(t){return null==t?"":pn(t)};var bn=kt;var Sn=function(t,e){return yn(t)?t:Fn(t,e)?[t]:mn(vn(t))},Bn=function(t){if("string"==typeof t||bn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Dn=function(t,e){for(var n=0,r=(e=Sn(e,t)).length;null!=t&&n<r;)t=t[Bn(e[n++])];return n&&n==r?t:void 0};var wn=pt((function(t,e,n){var r=null==t?void 0:Dn(t,e);return void 0===r?n:r}));const En=(t,e,n)=>e?wn(n,e)||wn(t,e):n||t,Hn=(t,e)=>{const n=e||t.defaultValue;return wn(t.collections,n)};var $n;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}($n||($n={}));const On={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},_n=t=>e=>{const n=e.theme,r=Hn(On,n[$n.colorScheme]);return n.options&&n.options.color?En(r,t,n.options.color):En(r,t)},An=(_n("Brand.1"),_n("Brand.2"),_n("Brand.3"),_n("Brand.4"),_n("Brand.5"),_n("Brand.6"),_n("Primary")),xn=(_n("PrimaryDark"),_n("Secondary")),zn=(_n("Accent.Light.1"),_n("Accent.Light.2"),_n("Accent.Light.3"),_n("Accent.Light.4"),_n("Accent.Light.5"),_n("Accent.Light.6"),_n("Accent.Dark.1"),_n("Accent.Dark.2"),_n("Accent.Dark.3"),{1:_n("Neutral.1"),2:_n("Neutral.2"),3:_n("Neutral.3"),4:_n("Neutral.4"),5:_n("Neutral.5"),6:_n("Neutral.6"),7:_n("Neutral.7"),8:_n("Neutral.8")}),jn=(_n("Validation.Green.Text"),_n("Validation.Green.Icon"),_n("Validation.Green.Border"),_n("Validation.Green.Background"),_n("Validation.Orange.Text"),_n("Validation.Orange.Icon"),_n("Validation.Orange.Border"),_n("Validation.Orange.Background"),_n("Validation.Orange.Badge"),_n("Validation.Red.Text"),_n("Validation.Red.Icon"),_n("Validation.Red.Border"),_n("Validation.Red.Background"),_n("Validation.Blue.Text"),_n("Validation.Blue.Icon"),_n("Validation.Blue.Border"),_n("Validation.Blue.Background"),_n("Shadow.Accent"),_n("Shadow.Red"),_n("Shadow.Elevation"),t=>Object.keys(st).reduce(((e,n)=>{const r=st[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{})),kn=jn("max-width"),Cn=(jn("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Wn={collections:{base:{D1:{fontFamily:Cn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Cn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Cn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Cn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Cn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Cn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Cn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Cn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Cn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Cn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Cn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Cn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Rn=t=>e=>{const n=e.theme,r=Hn(Wn,n[$n.textStyleScheme]);return n.options&&n.options.textStyle?En(r,t,n.options.textStyle):En(r,t)},Tn={D1:{fontFamily:Rn("D1.fontFamily"),fontSize:Rn("D1.fontSize"),fontWeight:Rn("D1.fontWeight"),lineHeight:Rn("D1.lineHeight"),letterSpacing:Rn("D1.letterSpacing")},D2:{fontFamily:Rn("D2.fontFamily"),fontSize:Rn("D2.fontSize"),fontWeight:Rn("D2.fontWeight"),lineHeight:Rn("D2.lineHeight"),letterSpacing:Rn("D2.letterSpacing")},D3:{fontFamily:Rn("D3.fontFamily"),fontSize:Rn("D3.fontSize"),fontWeight:Rn("D3.fontWeight"),lineHeight:Rn("D3.lineHeight"),letterSpacing:Rn("D3.letterSpacing")},D4:{fontFamily:Rn("D4.fontFamily"),fontSize:Rn("D4.fontSize"),fontWeight:Rn("D4.fontWeight"),lineHeight:Rn("D4.lineHeight"),letterSpacing:Rn("D4.letterSpacing")},DBody:{fontFamily:Rn("DBody.fontFamily"),fontSize:Rn("DBody.fontSize"),fontWeight:Rn("DBody.fontWeight"),lineHeight:Rn("DBody.lineHeight"),letterSpacing:Rn("DBody.letterSpacing")},H1:{fontFamily:Rn("H1.fontFamily"),fontSize:Rn("H1.fontSize"),fontWeight:Rn("H1.fontWeight"),lineHeight:Rn("H1.lineHeight"),letterSpacing:Rn("H1.letterSpacing")},H2:{fontFamily:Rn("H2.fontFamily"),fontSize:Rn("H2.fontSize"),fontWeight:Rn("H2.fontWeight"),lineHeight:Rn("H2.lineHeight"),letterSpacing:Rn("H2.letterSpacing")},H3:{fontFamily:Rn("H3.fontFamily"),fontSize:Rn("H3.fontSize"),fontWeight:Rn("H3.fontWeight"),lineHeight:Rn("H3.lineHeight"),letterSpacing:Rn("H3.letterSpacing")},H4:{fontFamily:Rn("H4.fontFamily"),fontSize:Rn("H4.fontSize"),fontWeight:Rn("H4.fontWeight"),lineHeight:Rn("H4.lineHeight"),letterSpacing:Rn("H4.letterSpacing")},H5:{fontFamily:Rn("H5.fontFamily"),fontSize:Rn("H5.fontSize"),fontWeight:Rn("H5.fontWeight"),lineHeight:Rn("H5.lineHeight"),letterSpacing:Rn("H5.letterSpacing")},H6:{fontFamily:Rn("H6.fontFamily"),fontSize:Rn("H6.fontSize"),fontWeight:Rn("H6.fontWeight"),lineHeight:Rn("H6.lineHeight"),letterSpacing:Rn("H6.letterSpacing")},Body:{fontFamily:Rn("Body.fontFamily"),fontSize:Rn("Body.fontSize"),fontWeight:Rn("Body.fontWeight"),lineHeight:Rn("Body.lineHeight"),letterSpacing:Rn("Body.letterSpacing")},BodySmall:{fontFamily:Rn("BodySmall.fontFamily"),fontSize:Rn("BodySmall.fontSize"),fontWeight:Rn("BodySmall.fontWeight"),lineHeight:Rn("BodySmall.lineHeight"),letterSpacing:Rn("BodySmall.letterSpacing")},XSmall:{fontFamily:Rn("XSmall.fontFamily"),fontSize:Rn("XSmall.fontSize"),fontWeight:Rn("XSmall.fontWeight"),lineHeight:Rn("XSmall.lineHeight"),letterSpacing:Rn("XSmall.letterSpacing")}},Ln=t=>{switch(t){case 700:case"bold":return Cn.Bold;case 600:case"semibold":return Cn.Semibold;case 300:case"light":return Cn.Light;case 400:case"regular":return Cn.Regular;default:return""}},Pn=(t,e)=>n=>{var r;const i=Tn[t].fontFamily(n),o=Tn[t].fontWeight(n);return Object.values(Cn).includes(i)?y`
                font-family: ${Ln(e)||Ln(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=In(e)||o)&&void 0!==r?r:"normal"};
        `},In=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vn=t=>{if(t>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Nn=(t,e,n=!1)=>r=>{const i=Tn[t],o=i.fontSize(r);return y`
            ${Pn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Mn=(t=!1,e=!1,n=void 0)=>e?y`
            display: block;
            ${Vn(n)}
        `:t?y`
            display: inline;
        `:y`
            display: block;
            ${Vn(n)}
        `;var Gn;!function(t){t.D1=p.h1`
        ${t=>y`
                ${Nn("D1",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=p.h1`
        ${t=>y`
                ${Nn("D2",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=p.h1`
        ${t=>y`
                ${Nn("D3",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=p.h1`
        ${t=>y`
                ${Nn("D4",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=p.h1`
        ${t=>y`
                ${Nn("DBody",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=p.h1`
        ${t=>y`
                ${Nn("H1",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=p.h2`
        ${t=>y`
                ${Nn("H2",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=p.h3`
        ${t=>y`
                ${Nn("H3",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=p.h4`
        ${t=>y`
                ${Nn("H4",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=p.h5`
        ${t=>y`
                ${Nn("H5",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=p.h6`
        ${t=>y`
                ${Nn("H6",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=p.p`
        ${t=>y`
                ${Nn("Body",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=p.p`
        ${t=>y`
                ${Nn("BodySmall",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=p.span`
        ${t=>y`
                ${Nn("XSmall",t.weight,t.paragraph)}
                color: ${zn[1]};
                ${Mn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>qn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>qn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Gn||(Gn={}));const Xn=p.a`
    ${t=>y`
            ${Nn(t.textStyle,t.weight)}
            color: ${An};
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
`,Un=p(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qn=n=>{var{external:r=!1,children:i}=n,o=m(n,["external","children"]);return t(Xn,Object.assign({},o,{children:[i,r&&e(Un,{})]}))},Jn=p.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${kn.desktopM} {
        margin: 1.5rem 0;
    }

    ${kn.tablet} {
        margin: 1rem 0;
    }
`,Kn=p.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -0.25rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${kn.tablet} {
        flex-wrap: nowrap;
    }
`,Qn=p.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{let e;const n="rgba(255,255,255,0.001)";return e="left"===t.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${kn.tablet} {\n\t\t\t\t${e}\n\t\t\t}\n\t\t`}};
`,Yn=p.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,Zn=p(g)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${zn[4]};
`,tr=p(Gn.BodySmall)`
    margin: 0.25rem !important;
`,er=p(Gn.Hyperlink.Small)`
    margin: 0.25rem !important;
`,nr=r=>{var{links:a,fadeColor:l,fadePosition:c="both",itemStyle:f,id:h}=r,s=m(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[g,p]=o(!!c),[y,F]=o("left"===c||"both"===c),[v,S]=o("right"===c||"both"===c),B=i(null),D=i(null);!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,a=t.refreshRate,l=void 0===a?1e3:a,c=t.refreshOptions,f=t.handleWidth,u=void 0===f||f,h=t.handleHeight,d=void 0===h||h,s=t.targetRef,g=t.observerOptions,p=t.onResize,y=i(n),F=i(null),m=null!=s?s:F,v=i(),S=o({width:void 0,height:void 0}),B=S[0],D=S[1];dt((function(){if(!ft()){var t=ht(p,D,u,d);v.current=lt((function(e){(u||d)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!y.current&&!ft()&&t({width:r,height:i}),y.current=!1}))}),r,l,c);var e=new window.ResizeObserver(v.current);return m.current&&e.observe(m.current,g),function(){e.disconnect();var t=v.current;t&&t.cancel&&t.cancel()}}}),[r,l,c,u,d,p,g,m.current]),b({ref:m},B)}({onResize:d((()=>{const t=D.current,e=B.current;t&&e&&a&&a.length>1&&window.innerWidth<=st.tablet&&(t.scrollLeft=t.scrollWidth-e.offsetWidth)}),[a.length]),targetRef:B,refreshMode:"debounce",refreshRate:50});const w=()=>{if(g){p(window.innerWidth<st.tablet);const t=D.current,e=B.current;t&&e&&t.scrollWidth>e.offsetWidth?(p(!0),F(t.scrollLeft>=1),S(t.scrollWidth-t.scrollLeft>e.offsetWidth)):p(!1)}};if(u((()=>{const t=D.current;return w(),window.addEventListener("resize",w),t&&t.addEventListener("scroll",w),()=>{window.removeEventListener("resize",w),t&&t.removeEventListener("scroll",w)}}),[]),!a)return null;return t(Jn,Object.assign({ref:B,id:h||"breadcrumb"},s,{children:[e("nav",{children:e(Kn,Object.assign({ref:D},{children:a.map(((n,r)=>{let i;return n.children?(i=r!==a.length-1&&n.href?e(er,Object.assign({},n,{weight:"semibold"})):e(tr,Object.assign({weight:"semibold"},{children:n.children})),t(Yn,Object.assign({$styleProps:f},{children:[i,r<a.length-1&&e(Zn,{})]}),r)):null}))}))}),g&&(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[y&&e(Qn,{$backgroundColor:r.left,$position:"left"}),v&&e(Qn,{$backgroundColor:r.right,$position:"right"})]})})()]}))};export{nr as Breadcrumb};
//# sourceMappingURL=index.js.map
