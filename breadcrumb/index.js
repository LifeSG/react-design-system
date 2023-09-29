import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import{cloneElement as i,useRef as o,useState as a,isValidElement as l,createRef as c,PureComponent as f,useEffect as u,useLayoutEffect as h,useCallback as d}from"react";import{findDOMNode as s}from"react-dom";import{ChevronRightIcon as g}from"@lifesg/react-icons/chevron-right";import p,{css as y}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";function m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}var F=function(t,e){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},F(t,e)};var b=function(){return b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},b.apply(this,arguments)};var S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},w="object"==typeof S&&S&&S.Object===Object&&S,H="object"==typeof self&&self&&self.Object===Object&&self,D=w||H||Function("return this")(),$=D,O=function(){return $.Date.now()},E=/\s/;var _=function(t){for(var e=t.length;e--&&E.test(t.charAt(e)););return e},z=/^\s+/;var j=function(t){return t?t.slice(0,_(t)+1).replace(z,""):t},A=D.Symbol,k=A,x=Object.prototype,W=x.hasOwnProperty,C=x.toString,R=k?k.toStringTag:void 0;var T=function(t){var e=W.call(t,R),n=t[R];try{t[R]=void 0;var r=!0}catch(t){}var i=C.call(t);return r&&(e?t[R]=n:delete t[R]),i},P=Object.prototype.toString;var I=T,V=function(t){return P.call(t)},L=A?A.toStringTag:void 0;var N=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":L&&L in Object(t)?I(t):V(t)},M=function(t){return null!=t&&"object"==typeof t};var X=j,G=B,U=function(t){return"symbol"==typeof t||M(t)&&"[object Symbol]"==N(t)},q=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt;var Y=B,Z=O,tt=function(t){if("number"==typeof t)return t;if(U(t))return NaN;if(G(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=G(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=X(t);var n=J.test(t);return n||K.test(t)?Q(t.slice(2),n?2:8):q.test(t)?NaN:+t},et=Math.max,nt=Math.min;var rt=function(t,e,n){var r,i,o,a,l,c,f=0,u=!1,h=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function s(e){var n=r,o=i;return r=i=void 0,f=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||h&&t-f>=o}function p(){var t=Z();if(g(t))return y(t);l=setTimeout(p,function(t){var n=e-(t-c);return h?nt(n,o-(t-f)):n}(t))}function y(t){return l=void 0,d&&r?s(t):(r=i=void 0,a)}function v(){var t=Z(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return f=t,l=setTimeout(p,e),u?s(t):a}(c);if(h)return clearTimeout(l),l=setTimeout(p,e),s(c)}return void 0===l&&(l=setTimeout(p,e)),a}return e=tt(e)||0,Y(n)&&(u=!!n.leading,o=(h="maxWait"in n)?et(tt(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),v.cancel=function(){void 0!==l&&clearTimeout(l),f=0,r=c=i=l=void 0},v.flush=function(){return void 0===l?a:y(Z())},v},it=rt,ot=B;var at=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return ot(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),it(t,e,{leading:r,maxWait:e,trailing:i})},lt=function(t,e,n,r){switch(e){case"debounce":return rt(t,n,r);case"throttle":return at(t,n,r);default:return t}},ct=function(t){return"function"==typeof t},ft=function(){return"undefined"==typeof window},ut=function(t){return t instanceof Element||t instanceof HTMLDocument},ht=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&ct(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!ft()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(ft())return null;if(e)return document.querySelector(e);if(r&&ut(r))return r;if(n.targetRef&&ut(n.targetRef.current))return n.targetRef.current;var i=s(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=ht(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!ft()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return ct(e)?"renderProp":ct(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,f=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,ft()||(n.resizeHandler=lt(n.createResizeHandler,i,a,f),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}F(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){ft()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,o=e.children,a=e.nodeType,l=void 0===a?"div":a,c=this.state,f={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(f);case"childFunction":return(t=o)(f);case"child":if((t=o).type&&"string"==typeof t.type){var u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(f,["targetRef"]);return i(t,u)}return i(t,f);case"childArray":return(t=o).map((function(t){return!!t&&i(t,f)}));default:return r.createElement(l,null)}}}(f);var dt=ft()?u:h;const st={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840};var gt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},pt=Array.isArray,yt="object"==typeof gt&&gt&&gt.Object===Object&&gt,vt="object"==typeof self&&self&&self.Object===Object&&self,mt=yt||vt||Function("return this")(),Ft=mt.Symbol,bt=Ft,St=Object.prototype,Bt=St.hasOwnProperty,wt=St.toString,Ht=bt?bt.toStringTag:void 0;var Dt=function(t){var e=Bt.call(t,Ht),n=t[Ht];try{t[Ht]=void 0;var r=!0}catch(t){}var i=wt.call(t);return r&&(e?t[Ht]=n:delete t[Ht]),i},$t=Object.prototype.toString;var Ot=Dt,Et=function(t){return $t.call(t)},_t=Ft?Ft.toStringTag:void 0;var zt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_t&&_t in Object(t)?Ot(t):Et(t)};var jt=zt,At=function(t){return null!=t&&"object"==typeof t};var kt=function(t){return"symbol"==typeof t||At(t)&&"[object Symbol]"==jt(t)},xt=pt,Wt=kt,Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rt=/^\w*$/;var Tt=function(t,e){if(xt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Wt(t))||(Rt.test(t)||!Ct.test(t)||null!=e&&t in Object(e))};var Pt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},It=zt,Vt=Pt;var Lt,Nt=function(t){if(!Vt(t))return!1;var e=It(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Mt=mt["__core-js_shared__"],Xt=(Lt=/[^.]+$/.exec(Mt&&Mt.keys&&Mt.keys.IE_PROTO||""))?"Symbol(src)_1."+Lt:"";var Gt=function(t){return!!Xt&&Xt in t},Ut=Function.prototype.toString;var qt=Nt,Jt=Gt,Kt=Pt,Qt=function(t){if(null!=t){try{return Ut.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Yt=/^\[object .+?Constructor\]$/,Zt=Function.prototype,te=Object.prototype,ee=Zt.toString,ne=te.hasOwnProperty,re=RegExp("^"+ee.call(ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ie=function(t){return!(!Kt(t)||Jt(t))&&(qt(t)?re:Yt).test(Qt(t))},oe=function(t,e){return null==t?void 0:t[e]};var ae=function(t,e){var n=oe(t,e);return ie(n)?n:void 0},le=ae(Object,"create"),ce=le;var fe=function(){this.__data__=ce?ce(null):{},this.size=0};var ue=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},he=le,de=Object.prototype.hasOwnProperty;var se=function(t){var e=this.__data__;if(he){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return de.call(e,t)?e[t]:void 0},ge=le,pe=Object.prototype.hasOwnProperty;var ye=le;var ve=fe,me=ue,Fe=se,be=function(t){var e=this.__data__;return ge?void 0!==e[t]:pe.call(e,t)},Se=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ye&&void 0===e?"__lodash_hash_undefined__":e,this};function Be(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Be.prototype.clear=ve,Be.prototype.delete=me,Be.prototype.get=Fe,Be.prototype.has=be,Be.prototype.set=Se;var we=Be;var He=function(){this.__data__=[],this.size=0};var De=function(t,e){return t===e||t!=t&&e!=e};var $e=function(t,e){for(var n=t.length;n--;)if(De(t[n][0],e))return n;return-1},Oe=$e,Ee=Array.prototype.splice;var _e=$e;var ze=$e;var je=$e;var Ae=He,ke=function(t){var e=this.__data__,n=Oe(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ee.call(e,n,1),--this.size,!0)},xe=function(t){var e=this.__data__,n=_e(e,t);return n<0?void 0:e[n][1]},We=function(t){return ze(this.__data__,t)>-1},Ce=function(t,e){var n=this.__data__,r=je(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Re(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Re.prototype.clear=Ae,Re.prototype.delete=ke,Re.prototype.get=xe,Re.prototype.has=We,Re.prototype.set=Ce;var Te=Re,Pe=ae(mt,"Map"),Ie=we,Ve=Te,Le=Pe;var Ne=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Me=function(t,e){var n=t.__data__;return Ne(e)?n["string"==typeof e?"string":"hash"]:n.map},Xe=Me;var Ge=Me;var Ue=Me;var qe=Me;var Je=function(){this.size=0,this.__data__={hash:new Ie,map:new(Le||Ve),string:new Ie}},Ke=function(t){var e=Xe(this,t).delete(t);return this.size-=e?1:0,e},Qe=function(t){return Ge(this,t).get(t)},Ye=function(t){return Ue(this,t).has(t)},Ze=function(t,e){var n=qe(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function tn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}tn.prototype.clear=Je,tn.prototype.delete=Ke,tn.prototype.get=Qe,tn.prototype.has=Ye,tn.prototype.set=Ze;var en=tn;function nn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(nn.Cache||en),n}nn.Cache=en;var rn=nn;var on=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,an=/\\(\\)?/g,ln=function(t){var e=rn(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(on,(function(t,n,r,i){e.push(r?i.replace(an,"$1"):n||t)})),e}));var cn=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},fn=pt,un=kt,hn=Ft?Ft.prototype:void 0,dn=hn?hn.toString:void 0;var sn=function t(e){if("string"==typeof e)return e;if(fn(e))return cn(e,t)+"";if(un(e))return dn?dn.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},gn=sn;var pn=pt,yn=Tt,vn=ln,mn=function(t){return null==t?"":gn(t)};var Fn=kt;var bn=function(t,e){return pn(t)?t:yn(t,e)?[t]:vn(mn(t))},Sn=function(t){if("string"==typeof t||Fn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Bn=function(t,e){for(var n=0,r=(e=bn(e,t)).length;null!=t&&n<r;)t=t[Sn(e[n++])];return n&&n==r?t:void 0};var wn=function(t,e,n){var r=null==t?void 0:Bn(t,e);return void 0===r?n:r};const Hn=(t,e,n)=>e?wn(n,e)||wn(t,e):n||t,Dn=(t,e)=>{const n=e||t.defaultValue;return wn(t.collections,n)};var $n;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}($n||($n={}));const On={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},En=t=>e=>{const n=e.theme,r=Dn(On,n[$n.colorScheme]);return n.options&&n.options.color?Hn(r,t,n.options.color):Hn(r,t)},_n=(En("Brand.1"),En("Brand.2"),En("Brand.3"),En("Brand.4"),En("Brand.5"),En("Brand.6"),En("Primary")),zn=(En("PrimaryDark"),En("Secondary")),jn=(En("Accent.Light.1"),En("Accent.Light.2"),En("Accent.Light.3"),En("Accent.Light.4"),En("Accent.Light.5"),En("Accent.Light.6"),En("Accent.Dark.1"),En("Accent.Dark.2"),En("Accent.Dark.3"),{1:En("Neutral.1"),2:En("Neutral.2"),3:En("Neutral.3"),4:En("Neutral.4"),5:En("Neutral.5"),6:En("Neutral.6"),7:En("Neutral.7"),8:En("Neutral.8")}),An=(En("Validation.Green.Text"),En("Validation.Green.Icon"),En("Validation.Green.Border"),En("Validation.Green.Background"),En("Validation.Orange.Text"),En("Validation.Orange.Icon"),En("Validation.Orange.Border"),En("Validation.Orange.Background"),En("Validation.Orange.Badge"),En("Validation.Red.Text"),En("Validation.Red.Icon"),En("Validation.Red.Border"),En("Validation.Red.Background"),En("Validation.Blue.Text"),En("Validation.Blue.Icon"),En("Validation.Blue.Border"),En("Validation.Blue.Background"),En("Shadow.Accent"),En("Shadow.Red"),En("Shadow.Elevation"),t=>Object.keys(st).reduce(((e,n)=>{const r=st[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{})),kn=An("max-width"),xn=(An("min-width"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Wn={collections:{base:{D1:{fontFamily:xn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:xn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:xn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:xn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:xn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:xn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:xn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:xn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:xn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:xn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:xn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:xn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:xn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:xn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Cn=t=>e=>{const n=e.theme,r=Dn(Wn,n[$n.textStyleScheme]);return n.options&&n.options.textStyle?Hn(r,t,n.options.textStyle):Hn(r,t)},Rn={D1:{fontFamily:Cn("D1.fontFamily"),fontSize:Cn("D1.fontSize"),fontWeight:Cn("D1.fontWeight"),lineHeight:Cn("D1.lineHeight"),letterSpacing:Cn("D1.letterSpacing")},D2:{fontFamily:Cn("D2.fontFamily"),fontSize:Cn("D2.fontSize"),fontWeight:Cn("D2.fontWeight"),lineHeight:Cn("D2.lineHeight"),letterSpacing:Cn("D2.letterSpacing")},D3:{fontFamily:Cn("D3.fontFamily"),fontSize:Cn("D3.fontSize"),fontWeight:Cn("D3.fontWeight"),lineHeight:Cn("D3.lineHeight"),letterSpacing:Cn("D3.letterSpacing")},D4:{fontFamily:Cn("D4.fontFamily"),fontSize:Cn("D4.fontSize"),fontWeight:Cn("D4.fontWeight"),lineHeight:Cn("D4.lineHeight"),letterSpacing:Cn("D4.letterSpacing")},DBody:{fontFamily:Cn("DBody.fontFamily"),fontSize:Cn("DBody.fontSize"),fontWeight:Cn("DBody.fontWeight"),lineHeight:Cn("DBody.lineHeight"),letterSpacing:Cn("DBody.letterSpacing")},H1:{fontFamily:Cn("H1.fontFamily"),fontSize:Cn("H1.fontSize"),fontWeight:Cn("H1.fontWeight"),lineHeight:Cn("H1.lineHeight"),letterSpacing:Cn("H1.letterSpacing")},H2:{fontFamily:Cn("H2.fontFamily"),fontSize:Cn("H2.fontSize"),fontWeight:Cn("H2.fontWeight"),lineHeight:Cn("H2.lineHeight"),letterSpacing:Cn("H2.letterSpacing")},H3:{fontFamily:Cn("H3.fontFamily"),fontSize:Cn("H3.fontSize"),fontWeight:Cn("H3.fontWeight"),lineHeight:Cn("H3.lineHeight"),letterSpacing:Cn("H3.letterSpacing")},H4:{fontFamily:Cn("H4.fontFamily"),fontSize:Cn("H4.fontSize"),fontWeight:Cn("H4.fontWeight"),lineHeight:Cn("H4.lineHeight"),letterSpacing:Cn("H4.letterSpacing")},H5:{fontFamily:Cn("H5.fontFamily"),fontSize:Cn("H5.fontSize"),fontWeight:Cn("H5.fontWeight"),lineHeight:Cn("H5.lineHeight"),letterSpacing:Cn("H5.letterSpacing")},H6:{fontFamily:Cn("H6.fontFamily"),fontSize:Cn("H6.fontSize"),fontWeight:Cn("H6.fontWeight"),lineHeight:Cn("H6.lineHeight"),letterSpacing:Cn("H6.letterSpacing")},Body:{fontFamily:Cn("Body.fontFamily"),fontSize:Cn("Body.fontSize"),fontWeight:Cn("Body.fontWeight"),lineHeight:Cn("Body.lineHeight"),letterSpacing:Cn("Body.letterSpacing")},BodySmall:{fontFamily:Cn("BodySmall.fontFamily"),fontSize:Cn("BodySmall.fontSize"),fontWeight:Cn("BodySmall.fontWeight"),lineHeight:Cn("BodySmall.lineHeight"),letterSpacing:Cn("BodySmall.letterSpacing")},XSmall:{fontFamily:Cn("XSmall.fontFamily"),fontSize:Cn("XSmall.fontSize"),fontWeight:Cn("XSmall.fontWeight"),lineHeight:Cn("XSmall.lineHeight"),letterSpacing:Cn("XSmall.letterSpacing")}},Tn=t=>{switch(t){case 700:case"bold":return xn.Bold;case 600:case"semibold":return xn.Semibold;case 300:case"light":return xn.Light;case 400:case"regular":return xn.Regular;default:return""}},Pn=(t,e)=>n=>{var r;const i=Rn[t].fontFamily(n),o=Rn[t].fontWeight(n);return Object.values(xn).includes(i)?y`
                font-family: ${Tn(e)||Tn(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=In(e)||o)&&void 0!==r?r:"normal"};
        `},In=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vn=(t,e,n=!1)=>r=>{const i=Rn[t],o=i.fontSize(r);return y`
            ${Pn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ln=(t=!1,e=!1)=>e?y`
            display: block;
        `:t?y`
            display: inline;
        `:y`
            display: block;
        `;var Nn;!function(t){t.D1=p.h1`
        ${t=>y`
                ${Vn("D1",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.D2=p.h1`
        ${t=>y`
                ${Vn("D2",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.D3=p.h1`
        ${t=>y`
                ${Vn("D3",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.D4=p.h1`
        ${t=>y`
                ${Vn("D4",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.DBody=p.h1`
        ${t=>y`
                ${Vn("DBody",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.H1=p.h1`
        ${t=>y`
                ${Vn("H1",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.H2=p.h2`
        ${t=>y`
                ${Vn("H2",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.H3=p.h3`
        ${t=>y`
                ${Vn("H3",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.H4=p.h4`
        ${t=>y`
                ${Vn("H4",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.H5=p.h5`
        ${t=>y`
                ${Vn("H5",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.H6=p.h6`
        ${t=>y`
                ${Vn("H6",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.Body=p.p`
        ${t=>y`
                ${Vn("Body",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=p.p`
        ${t=>y`
                ${Vn("BodySmall",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.XSmall=p.span`
        ${t=>y`
                ${Vn("XSmall",t.weight,t.paragraph)}
                color: ${jn[1]};
                ${Ln(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Gn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Gn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Nn||(Nn={}));const Mn=p.a`
    ${t=>y`
            ${Vn(t.textStyle,t.weight)}
            color: ${_n};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${zn};

                svg {
                    color: ${zn};
                }
            }
        `}
`,Xn=p(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Gn=n=>{var{external:r=!1,children:i}=n,o=m(n,["external","children"]);return t(Mn,Object.assign({},o,{children:[i,r&&e(Xn,{})]}))},Un=p.div`
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
`,qn=p.ul`
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
`,Jn=p.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${t=>{let e;const n="rgba(255,255,255,0.001)";return e="left"===t.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${t.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${t.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${kn.tablet} {\n\t\t\t\t${e}\n\t\t\t}\n\t\t`}};
`,Kn=p.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${t=>t.$styleProps||""};
`,Qn=p(g)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${jn[4]};
`,Yn=p(Nn.BodySmall)`
    margin: 0.25rem !important;
`,Zn=p(Nn.Hyperlink.Small)`
    margin: 0.25rem !important;
`,tr=r=>{var{links:i,fadeColor:l,fadePosition:c="both",itemStyle:f,id:h}=r,s=m(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[g,p]=a(!!c),[y,v]=a("left"===c||"both"===c),[F,S]=a("right"===c||"both"===c),B=o(null),w=o(null);!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,i=t.refreshRate,l=void 0===i?1e3:i,c=t.refreshOptions,f=t.handleWidth,u=void 0===f||f,h=t.handleHeight,d=void 0===h||h,s=t.targetRef,g=t.observerOptions,p=t.onResize,y=o(n),v=o(null),m=null!=s?s:v,F=o(),S=a({width:void 0,height:void 0}),B=S[0],w=S[1];dt((function(){if(!ft()){var t=ht(p,w,u,d);F.current=lt((function(e){(u||d)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!y.current&&!ft()&&t({width:r,height:i}),y.current=!1}))}),r,l,c);var e=new window.ResizeObserver(F.current);return m.current&&e.observe(m.current,g),function(){e.disconnect();var t=F.current;t&&t.cancel&&t.cancel()}}}),[r,l,c,u,d,p,g,m.current]),b({ref:m},B)}({onResize:d((()=>{const t=w.current,e=B.current;t&&e&&i&&i.length>1&&window.innerWidth<=st.tablet&&(t.scrollLeft=t.scrollWidth-e.offsetWidth)}),[i.length]),targetRef:B,refreshMode:"debounce",refreshRate:50});const H=()=>{if(g){p(window.innerWidth<st.tablet);const t=w.current,e=B.current;t&&e&&t.scrollWidth>e.offsetWidth?(p(!0),v(t.scrollLeft>=1),S(t.scrollWidth-t.scrollLeft>e.offsetWidth)):p(!1)}};if(u((()=>{const t=w.current;return H(),window.addEventListener("resize",H),t&&t.addEventListener("scroll",H),()=>{window.removeEventListener("resize",H),t&&t.removeEventListener("scroll",H)}}),[]),!i)return null;return t(Un,Object.assign({ref:B,id:h||"breadcrumb"},s,{children:[e("nav",{children:e(qn,Object.assign({ref:w},{children:i.map(((n,r)=>{let o;return n.children?(o=r!==i.length-1&&n.href?e(Zn,Object.assign({},n,{weight:"semibold"})):e(Yn,Object.assign({weight:"semibold"},{children:n.children})),t(Kn,Object.assign({$styleProps:f},{children:[o,r<i.length-1&&e(Qn,{})]}),r)):null}))}))}),g&&(()=>{let r;return r=Array.isArray(l)&&l.length>0?{left:l,right:l}:l||{left:void 0,right:void 0},t(n,{children:[y&&e(Jn,{$backgroundColor:r.left,$position:"left"}),F&&e(Jn,{$backgroundColor:r.right,$position:"right"})]})})()]}))};export{tr as Breadcrumb};
//# sourceMappingURL=index.js.map
