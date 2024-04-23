import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import{EyeIcon as r}from"@lifesg/react-icons/eye";import{EyeSlashIcon as o}from"@lifesg/react-icons/eye-slash";import*as i from"react";import a,{useLayoutEffect as s,useEffect as l,useState as c,useRef as u}from"react";import{ICircleFillIcon as d}from"@lifesg/react-icons/i-circle-fill";import*as f from"react-dom";import p,{createPortal as h}from"react-dom";import m,{css as g,keyframes as y}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";import{CrossIcon as b}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as x}from"@lifesg/react-icons/exclamation-triangle";import{TickCircleFillIcon as w}from"@lifesg/react-icons/tick-circle-fill";import{ExclamationTriangleFillIcon as $}from"@lifesg/react-icons/exclamation-triangle-fill";import{ExclamationCircleFillIcon as S}from"@lifesg/react-icons/exclamation-circle-fill";import{ArrowRightIcon as F}from"@lifesg/react-icons/arrow-right";function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function O(e){return k(e)?(e.nodeName||"").toLowerCase():"#document"}function E(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function B(e){var t;return null==(t=(k(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function k(e){return e instanceof Node||e instanceof E(e).Node}function C(e){return e instanceof Element||e instanceof E(e).Element}function A(e){return e instanceof HTMLElement||e instanceof E(e).HTMLElement}function j(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof E(e).ShadowRoot)}function T(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=L(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function M(e){return["table","td","th"].includes(O(e))}function R(e){const t=_(),n=L(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function _(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function H(e){return["html","body","#document"].includes(O(e))}function L(e){return E(e).getComputedStyle(e)}function I(e){return C(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function z(e){if("html"===O(e))return e;const t=e.assignedSlot||e.parentNode||j(e)&&e.host||B(e);return j(t)?t.host:t}function P(e){const t=z(e);return H(t)?e.ownerDocument?e.ownerDocument.body:e.body:A(t)&&T(t)?t:P(t)}function N(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=P(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=E(o);return i?t.concat(a,a.visualViewport||[],T(o)?o:[],a.frameElement&&n?N(a.frameElement):[]):t.concat(o,N(o,[],n))}"function"==typeof SuppressedError&&SuppressedError;const W=Math.min,Y=Math.max,V=Math.round,U=Math.floor,q=e=>({x:e,y:e}),Z={left:"right",right:"left",bottom:"top",top:"bottom"},Q={start:"end",end:"start"};function G(e,t,n){return Y(e,W(t,n))}function X(e,t){return"function"==typeof e?e(t):e}function J(e){return e.split("-")[0]}function K(e){return e.split("-")[1]}function ee(e){return"x"===e?"y":"x"}function te(e){return"y"===e?"height":"width"}function ne(e){return["top","bottom"].includes(J(e))?"y":"x"}function re(e){return ee(ne(e))}function oe(e){return e.replace(/start|end/g,(e=>Q[e]))}function ie(e){return e.replace(/left|right|bottom|top/g,(e=>Z[e]))}function ae(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function se(e,t,n){let{reference:r,floating:o}=e;const i=ne(t),a=re(t),s=te(a),l=J(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let p;switch(l){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-o.width,y:d};break;default:p={x:r.x,y:r.y}}switch(K(t)){case"start":p[a]-=f*(n&&c?-1:1);break;case"end":p[a]+=f*(n&&c?-1:1)}return p}async function le(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=X(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(p),m=s[f?"floating"===d?"reference":"floating":d],g=ae(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{...a.floating,x:r,y:o}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},x=ae(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-x.top+h.top)/b.y,bottom:(x.bottom-g.bottom+h.bottom)/b.y,left:(g.left-x.left+h.left)/b.x,right:(x.right-g.right+h.right)/b.x}}const ce=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=J(n),s=K(n),l="y"===ne(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=X(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof h&&(p="end"===s?-1*h:h),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}};function ue(e){const t=L(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=A(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=V(n)!==i||V(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function de(e){return C(e)?e:e.contextElement}function fe(e){const t=de(e);if(!A(t))return q(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=ue(t);let a=(i?V(n.width):n.width)/r,s=(i?V(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const pe=q(0);function he(e){const t=E(e);return _()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:pe}function me(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=de(e);let a=q(1);t&&(r?C(r)&&(a=fe(r)):a=fe(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==E(e))&&t}(i,n,r)?he(i):q(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=E(i),t=r&&C(r)?E(r):r;let n=e.frameElement;for(;n&&r&&t!==e;){const e=fe(n),t=n.getBoundingClientRect(),r=L(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=o,c+=i,n=E(n).frameElement}}return ae({width:u,height:d,x:l,y:c})}function ge(e){return me(B(e)).left+I(e).scrollLeft}function ye(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=E(e),r=B(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=_();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=B(e),n=I(e),r=e.ownerDocument.body,o=Y(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Y(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+ge(e);const s=-n.scrollTop;return"rtl"===L(r).direction&&(a+=Y(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(B(e));else if(C(t))r=function(e,t){const n=me(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=A(e)?fe(e):q(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=he(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return ae(r)}function ve(e,t){const n=z(e);return!(n===t||!C(n)||H(n))&&("fixed"===L(n).position||ve(n,t))}function be(e,t,n){const r=A(t),o=B(t),i="fixed"===n,a=me(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=q(0);if(r||!r&&!i)if(("body"!==O(t)||T(o))&&(s=I(t)),r){const e=me(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=ge(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function xe(e,t){return A(e)&&"fixed"!==L(e).position?t?t(e):e.offsetParent:null}function we(e,t){const n=E(e);if(!A(e))return n;let r=xe(e,t);for(;r&&M(r)&&"static"===L(r).position;)r=xe(r,t);return r&&("html"===O(r)||"body"===O(r)&&"static"===L(r).position&&!R(r))?n:r||function(e){let t=z(e);for(;A(t)&&!H(t);){if(R(t))return t;t=z(t)}return null}(e)||n}const $e={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=A(n),i=B(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},s=q(1);const l=q(0);if((o||!o&&"fixed"!==r)&&(("body"!==O(n)||T(i))&&(a=I(n)),A(n))){const e=me(n);s=fe(n),l.x=e.x+n.clientLeft,l.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-a.scrollLeft*s.x+l.x,y:t.y*s.y-a.scrollTop*s.y+l.y}},getDocumentElement:B,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=N(e,[],!1).filter((e=>C(e)&&"body"!==O(e))),o=null;const i="fixed"===L(e).position;let a=i?z(e):e;for(;C(a)&&!H(a);){const t=L(a),n=R(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||T(a)&&!n&&ve(e,a))?r=r.filter((e=>e!==a)):o=t,a=z(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=ye(t,n,o);return e.top=Y(r.top,e.top),e.right=W(r.right,e.right),e.bottom=W(r.bottom,e.bottom),e.left=Y(r.left,e.left),e}),ye(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:we,getElementRects:async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||we,i=this.getDimensions;return{reference:be(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=ue(e);return{width:t,height:n}},getScale:fe,isElement:C,isRTL:function(e){return"rtl"===L(e).direction}};function Se(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=de(e),u=o||i?[...c?N(c):[],...N(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=B(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const p={rootMargin:-U(u)+"px "+-U(o.clientWidth-(c+d))+"px "+-U(o.clientHeight-(u+f))+"px "+-U(c)+"px",threshold:Y(0,W(1,l))||1};let h=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!h)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),100)}h=!1}try{r=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,p)}r.observe(e)}(!0),i}(c,n):null;let f,p=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{h&&h.observe(t)}))),n()})),c&&!l&&h.observe(c),h.observe(t));let m=l?me(e):null;return l&&function t(){const r=me(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),d&&d(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(f)}}const Fe=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=X(e,t),c={x:n,y:r},u=await le(t,l),d=ne(J(o)),f=ee(d);let p=c[f],h=c[d];if(i){const e="y"===f?"bottom":"right";p=G(p+u["y"===f?"top":"left"],p,p-u[e])}if(a){const e="y"===d?"bottom":"right";h=G(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[f]:p,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r}}}}},De=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=X(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=J(o),v=J(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),x=f||(v||!m?[ie(s)]:function(e){const t=ie(e);return[oe(e),t,oe(t)]}(s));f||"none"===h||x.push(...function(e,t,n,r){const o=K(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(J(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(oe)))),i}(s,m,h,b));const w=[s,...x],$=await le(t,g),S=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&S.push($[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=K(e),o=re(e),i=te(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=ie(a)),[a,ie(a)]}(o,a,b);S.push($[e[0]],$[e[1]])}if(F=[...F,{placement:o,overflows:S}],!S.every((e=>e<=0))){var D,O;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=w[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(O=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!n)switch(p){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},Oe=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=X(e,t),u={x:n,y:r},d=ne(o),f=ee(d);let p=u[f],h=u[d];const m=X(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(J(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[f]:p,[d]:h}}}},Ee=(e,t,n)=>{const r=new Map,o={platform:$e,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=se(c,r,l),f=r,p={},h=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,p={...p,[i]:{...p[i],...v}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=se(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var Be="undefined"!=typeof document?s:l;function ke(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!ke(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!ke(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Ce(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ae(e,t){const n=Ce(e);return Math.round(t*n)/n}function je(e){const t=i.useRef(e);return Be((()=>{t.current=e})),t}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Te=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Me="undefined"==typeof Element,Re=Me?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,_e=!Me&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},He=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Le=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!He(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{Re.call(a,Te)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!He(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Ie=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},ze=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Ie(e)?0:e.tabIndex},Pe=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ne=function(e){return"INPUT"===e.tagName},We=function(e){return function(e){return Ne(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||_e(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Ye=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Ve=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=Re.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Re.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Ye(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=_e(e);if(a&&!a.shadowRoot&&!0===r(a))return Ye(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&_e(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=_e(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Ue=function(e,t){return!(t.disabled||He(t)||function(e){return Ne(e)&&"hidden"===e.type}(t)||Ve(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Re.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},qe=function(e,t){return!(We(t)||ze(t)<0||!Ue(e,t))},Ze=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Qe=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=ze(e);return n<0&&t&&!Ie(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort(Pe).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},Ge=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Le([e],t.includeContainer,{filter:qe.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ze}):function(e,t,n){if(He(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Te));return t&&Re.call(e,Te)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,qe.bind(null,t)),Qe(n)};const Xe=i["useInsertionEffect".toString()]||(e=>e());var Je="undefined"!=typeof document?s:l;function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}let et=!1,tt=0;const nt=()=>"floating-ui-"+tt++;const rt=i["useId".toString()]||function(){const[e,t]=i.useState((()=>et?nt():void 0));return Je((()=>{null==e&&t(nt())}),[]),i.useEffect((()=>{et||(et=!0)}),[]),e};const ot=i.createContext(null),it=i.createContext(null);function at(e){return"data-floating-ui-"+e}const st=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function lt(e,t){const n=Ge(e,st());"prev"===t&&n.reverse();const r=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(o=e)?void 0:o.ownerDocument)||document));var o;return n.slice(r+1)[0]}function ct(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&j(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,r)}function ut(e){Ge(e,st()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function dt(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const ft={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function pt(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const ht=i.forwardRef((function(e,t){const[n,r]=i.useState();Je((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",pt),()=>{document.removeEventListener("keydown",pt)})),[]);const o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[at("focus-guard")]:"",style:ft};return i.createElement("span",Ke({},e,o))})),mt=i.createContext(null);function gt(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const a=function(e){let{id:t,root:n}=void 0===e?{}:e;const[r,o]=i.useState(null),a=rt(),s=yt(),l=i.useMemo((()=>({id:t,root:n,portalContext:s,uniqueId:a})),[t,n,s,a]),c=i.useRef();return Je((()=>()=>{null==r||r.remove()}),[r,l]),Je((()=>{if(c.current===l)return;c.current=l;const{id:e,root:t,portalContext:n,uniqueId:r}=l,i=e?document.getElementById(e):null,a=at("portal");if(i){const e=document.createElement("div");e.id=r,e.setAttribute(a,""),i.appendChild(e),o(e)}else{let i=t||(null==n?void 0:n.portalNode);i&&!C(i)&&(i=i.current),i=i||document.body;let s=null;e&&(s=document.createElement("div"),s.id=e,i.appendChild(s));const l=document.createElement("div");l.id=r,l.setAttribute(a,""),i=s||i,i.appendChild(l),o(l)}}),[l]),r}({id:n,root:r}),[s,l]=i.useState(null),c=i.useRef(null),u=i.useRef(null),d=i.useRef(null),f=i.useRef(null),p=!!s&&!s.modal&&s.open&&o&&!(!r&&!a);return i.useEffect((()=>{if(a&&o&&(null==s||!s.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&ct(e)){("focusin"===e.type?dt:ut)(a)}}}),[a,o,null==s?void 0:s.modal]),i.createElement(mt.Provider,{value:i.useMemo((()=>({preserveTabOrder:o,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:l})),[o,a])},p&&a&&i.createElement(ht,{"data-type":"outside",ref:c,onFocus:e=>{if(ct(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=lt(document.body,"prev")||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),p&&a&&i.createElement("span",{"aria-owns":a.id,style:ft}),a&&h(t,a),p&&a&&i.createElement(ht,{"data-type":"outside",ref:u,onFocus:e=>{if(ct(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=lt(document.body,"next")||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const yt=()=>i.useContext(mt);let vt;function bt(e){var t;void 0===e&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e;if("production"!==process.env.NODE_ENV){var a;const t="Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";var s,l;if(null!=(a=e.elements)&&a.reference&&!C(e.elements.reference))if(null==(s=vt)||!s.has(t))null==(l=vt)||l.add(t),console.error(t)}const[c,u]=i.useState(null),d=(null==(t=e.elements)?void 0:t.reference)||c,p=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,p]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,m]=i.useState(r);ke(h,r)||m(r);const[g,y]=i.useState(null),[v,b]=i.useState(null),x=i.useCallback((e=>{e!==F.current&&(F.current=e,y(e))}),[]),w=i.useCallback((e=>{e!==D.current&&(D.current=e,b(e))}),[]),$=a||g,S=s||v,F=i.useRef(null),D=i.useRef(null),O=i.useRef(d),E=null!=c,B=je(c),k=je(o),C=i.useCallback((()=>{if(!F.current||!D.current)return;const e={placement:t,strategy:n,middleware:h};k.current&&(e.platform=k.current),Ee(F.current,D.current,e).then((e=>{const t={...e,isPositioned:!0};A.current&&!ke(O.current,t)&&(O.current=t,f.flushSync((()=>{p(t)})))}))}),[h,t,n,k]);Be((()=>{!1===u&&O.current.isPositioned&&(O.current.isPositioned=!1,p((e=>({...e,isPositioned:!1}))))}),[u]);const A=i.useRef(!1);Be((()=>(A.current=!0,()=>{A.current=!1})),[]),Be((()=>{if($&&(F.current=$),S&&(D.current=S),$&&S){if(B.current)return B.current($,S,C);C()}}),[$,S,C,B,E]);const j=i.useMemo((()=>({reference:F,floating:D,setReference:x,setFloating:w})),[x,w]),T=i.useMemo((()=>({reference:$,floating:S})),[$,S]),M=i.useMemo((()=>{const e={position:n,left:0,top:0};if(!T.floating)return e;const t=Ae(T.floating,d.x),r=Ae(T.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...Ce(T.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,T.floating,d.x,d.y]);return i.useMemo((()=>({...d,update:C,refs:j,elements:T,floatingStyles:M})),[d,C,j,T,M])}(e),h=i.useContext(it),m=null!=((null==(g=i.useContext(ot))?void 0:g.id)||null);var g;const y=function(e){const t=i.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Xe((()=>{t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}(((e,t,n)=>{e&&(b.current.openEvent=t),x.emit("openchange",{open:e,event:t,reason:n,nested:m}),null==r||r(e,t,n)})),v=i.useRef(null),b=i.useRef({}),x=i.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}()))[0],w=rt(),$=i.useCallback((e=>{const t=C(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;p.refs.setReference(t)}),[p.refs]),S=i.useCallback((e=>{(C(e)||null===e)&&(v.current=e,u(e)),(C(p.refs.reference.current)||null===p.refs.reference.current||null!==e&&!C(e))&&p.refs.setReference(e)}),[p.refs]),F=i.useMemo((()=>({...p.refs,setReference:S,setPositionReference:$,domReference:v})),[p.refs,S,$]),D=i.useMemo((()=>({...p.elements,domReference:d})),[p.elements,d]),O=i.useMemo((()=>({...p,refs:F,elements:D,dataRef:b,nodeId:o,floatingId:w,events:x,open:n,onOpenChange:y})),[p,o,w,x,n,y,F,D]);return Je((()=>{const e=null==h?void 0:h.nodesRef.current.find((e=>e.id===o));e&&(e.context=O)})),i.useMemo((()=>({...p,context:O,refs:F,elements:D})),[p,F,D,O])}"production"!==process.env.NODE_ENV&&(vt=new Set);var xt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function wt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $t,St={exports:{}};$t=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(p(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,x(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new h("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return y(r,o,l,f,x(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,f,r,o,l+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,l,c,u,f,p){if(c=c||d,f=f||l,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,n)=>{var r=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case l:case d:case m:case h:case s:return g;default:return t}}case r:return t}}}var w=c,$=u,S=l,F=s,D=n,O=d,E=o,B=m,k=h,C=r,A=a,j=i,T=f,M=!1;function R(e){return x(e)===u}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=F,t.Element=D,t.ForwardRef=O,t.Fragment=E,t.Lazy=B,t.Memo=k,t.Portal=C,t.Profiler=A,t.StrictMode=j,t.Suspense=T,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||x(e)===c},t.isConcurrentMode=R,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),s=(0,i.default)(a,n,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],l=d();return(0,o.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),h=d();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Ft=St.exports=$t(a);const Dt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ot=e=>Object.keys(Dt).reduce(((t,n)=>{const r=Dt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Et=Ot("max-width"),Bt=(Ot("min-width"),Dt);var kt={exports:{}};kt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],p=u&&u[1];a[l]=p?{regex:f,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(o||i?1:p.getDate()),m=o||p.getFullYear(),g=0;o&&!i||(g=i>0?i-1:p.getMonth());var y=s||0,v=l||0,b=c||0,x=u||0;return d?new Date(Date.UTC(m,g,h,y,v,b,x+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,y,v,b,x)):new Date(m,g,h,y,v,b,x)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ct,At,jt=wt(kt.exports),Tt={exports:{}},Mt=wt(Tt.exports=(Ct={year:0,month:1,day:2,hour:3,minute:4,second:5},At={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=At[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),At[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Ct[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,p=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Rt={exports:{}};Rt.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",x={};x[b]=g;var w=function(e){return e instanceof D},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),n&&(x[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},S=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=$,F.i=w,F.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),p=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},h=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case l:var b=this.$locale().weekStart||0,x=(m<b?m+7:m)-b;return p(r?y-x:y+(6-x),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case i:return h(v+"Seconds",2);case o:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],h=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,p=this;r=Number(r);var h=F.p(u),m=function(e){var t=S(p);return F.w(t.date(t.date()+Math.round(e*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===s)return m(1);if(h===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[h]||1,y=this.$d.getTime()+r*g;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},d=function(e){return F.s(i%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:F.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:o};return r.replace(m,(function(e,t){return t||h[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=F.p(f),g=S(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=F.m(this,g);return b=(h={},h[d]=b/12,h[c]=b,h[u]=b/3,h[l]=(v-y)/6048e5,h[s]=(v-y)/864e5,h[a]=v/n,h[i]=v/t,h[o]=v/e,h)[m]||v,p?b:F.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=D.prototype;return S.prototype=O,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=$,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=x[b],S.Ls=x,S.p={},S}();var _t=wt(Rt.exports),Ht={exports:{}};Ht.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Lt=wt(Ht.exports),It={exports:{}};It.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var zt=wt(It.exports),Pt={exports:{}};Pt.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Nt,Wt=wt(Pt.exports);_t.extend(Lt),_t.extend(zt),_t.extend(Wt),_t.extend(jt),_t.extend(Mt),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=_t(t).startOf("week");return Yt(n).map((e=>Vt(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Vt(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(_t(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+_t(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=_t(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?_t(r):void 0,o?_t(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Nt||(Nt={}));const Yt=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Vt=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ut=[1,3,5,7,8,10,12],qt=[4,6,9,11];var Zt,Qt,Gt,Xt;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Ut.includes(i)?Math.min(o,31).toString():qt.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=_t(e,n);return _t(t,n).diff(r,"minute")},e.toDayjs=e=>e?_t(e):_t(),e.addMinutesToTime=(e,t,n="HH:mm")=>_t(e,n).add(t,"minutes").format(n)}(Zt||(Zt={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!_t(e).isBefore(r,"day"))||!(!o||!_t(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(_t(e).isValid())return e}return""}}(Qt||(Qt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Gt||(Gt={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Xt||(Xt={}));const Jt=m.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return g`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Kt=m.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=g`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=g`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=g`
                transition: none;
            `),t}}
`,en=({show:t=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:d=!1,enableOverlayClick:f=!1,zIndex:h,id:m})=>{const[g,y]=c(null),[v,b]=c(),[x]=c((()=>Gt.generate())),w=u(),$=u(null),S=o&&a.cloneElement(o,{ref:$}),F=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";l((()=>(B(),y(O()),()=>{j(),C().length<1&&k("remove")})),[]),l((()=>{if(t){const e=E();D(e),A();const t=setTimeout((()=>{k("add")}),200);return()=>clearTimeout(t)}{j();const e=setTimeout((()=>{C().length<1&&k("remove")}),200);return()=>clearTimeout(e)}}),[t]);const D=e=>{w.current=e,b(e)},O=()=>document&&n?document.getElementById(n):document?document.body:null,E=()=>C().length>0,B=()=>{if(!document.getElementById(tn)){const e=document.createElement("style");e.id=tn;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${nn} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${nn}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},k=e=>{const t=document.body.classList.contains(nn);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(nn):document.body.classList.add(nn)},C=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},A=()=>{const e=C();document.body.dataset.lifesgDsOverlayOrder=[...e,x].join(",")},j=()=>{const e=C();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==x)).join(",")},T=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&f&&(e.preventDefault(),r())};return g?p.createPortal(e(Jt,Object.assign({id:F,"data-testid":F,$show:t,zIndex:h,$stacked:v},{children:o&&e(Kt,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:i||(v?.5:.8),$backgroundBlur:s,$disableTransition:d,$enableOverlayClick:f,onClick:T},{children:S}))})),g):null},tn="lifesg-ds-overlay-stylesheet",nn="lifesg-ds-overlay-open",rn=m.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Et.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,on=t=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:u,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=t,p=D(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,m]=c(),[g,y]=c();l((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),l((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;m(e)},b=()=>{const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)};return e(en,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:d,id:n,rootId:s,zIndex:u},{children:e(rn,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},p,{children:i}))}))};var an=Array.isArray,sn="object"==typeof xt&&xt&&xt.Object===Object&&xt,ln="object"==typeof self&&self&&self.Object===Object&&self,cn=sn||ln||Function("return this")(),un=cn.Symbol,dn=un,fn=Object.prototype,pn=fn.hasOwnProperty,hn=fn.toString,mn=dn?dn.toStringTag:void 0;var gn=function(e){var t=pn.call(e,mn),n=e[mn];try{e[mn]=void 0;var r=!0}catch(e){}var o=hn.call(e);return r&&(t?e[mn]=n:delete e[mn]),o},yn=Object.prototype.toString;var vn=gn,bn=function(e){return yn.call(e)},xn=un?un.toStringTag:void 0;var wn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xn&&xn in Object(e)?vn(e):bn(e)};var $n=wn,Sn=function(e){return null!=e&&"object"==typeof e};var Fn=function(e){return"symbol"==typeof e||Sn(e)&&"[object Symbol]"==$n(e)},Dn=an,On=Fn,En=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bn=/^\w*$/;var kn=function(e,t){if(Dn(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!On(e))||(Bn.test(e)||!En.test(e)||null!=t&&e in Object(t))};var Cn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},An=wn,jn=Cn;var Tn,Mn=function(e){if(!jn(e))return!1;var t=An(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Rn=cn["__core-js_shared__"],_n=(Tn=/[^.]+$/.exec(Rn&&Rn.keys&&Rn.keys.IE_PROTO||""))?"Symbol(src)_1."+Tn:"";var Hn=function(e){return!!_n&&_n in e},Ln=Function.prototype.toString;var In=Mn,zn=Hn,Pn=Cn,Nn=function(e){if(null!=e){try{return Ln.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Wn=/^\[object .+?Constructor\]$/,Yn=Function.prototype,Vn=Object.prototype,Un=Yn.toString,qn=Vn.hasOwnProperty,Zn=RegExp("^"+Un.call(qn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Qn=function(e){return!(!Pn(e)||zn(e))&&(In(e)?Zn:Wn).test(Nn(e))},Gn=function(e,t){return null==e?void 0:e[t]};var Xn=function(e,t){var n=Gn(e,t);return Qn(n)?n:void 0},Jn=Xn(Object,"create"),Kn=Jn;var er=function(){this.__data__=Kn?Kn(null):{},this.size=0};var tr=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},nr=Jn,rr=Object.prototype.hasOwnProperty;var or=function(e){var t=this.__data__;if(nr){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return rr.call(t,e)?t[e]:void 0},ir=Jn,ar=Object.prototype.hasOwnProperty;var sr=Jn;var lr=er,cr=tr,ur=or,dr=function(e){var t=this.__data__;return ir?void 0!==t[e]:ar.call(t,e)},fr=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=sr&&void 0===t?"__lodash_hash_undefined__":t,this};function pr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pr.prototype.clear=lr,pr.prototype.delete=cr,pr.prototype.get=ur,pr.prototype.has=dr,pr.prototype.set=fr;var hr=pr;var mr=function(){this.__data__=[],this.size=0};var gr=function(e,t){return e===t||e!=e&&t!=t};var yr=function(e,t){for(var n=e.length;n--;)if(gr(e[n][0],t))return n;return-1},vr=yr,br=Array.prototype.splice;var xr=function(e){var t=this.__data__,n=vr(t,e);return!(n<0)&&(n==t.length-1?t.pop():br.call(t,n,1),--this.size,!0)},wr=yr;var $r=function(e){var t=this.__data__,n=wr(t,e);return n<0?void 0:t[n][1]},Sr=yr;var Fr=yr;var Dr=function(e,t){var n=this.__data__,r=Fr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Or=mr,Er=xr,Br=$r,kr=function(e){return Sr(this.__data__,e)>-1},Cr=Dr;function Ar(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ar.prototype.clear=Or,Ar.prototype.delete=Er,Ar.prototype.get=Br,Ar.prototype.has=kr,Ar.prototype.set=Cr;var jr=Ar,Tr=Xn(cn,"Map"),Mr=hr,Rr=jr,_r=Tr;var Hr=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Lr=function(e,t){var n=e.__data__;return Hr(t)?n["string"==typeof t?"string":"hash"]:n.map},Ir=Lr;var zr=Lr;var Pr=Lr;var Nr=Lr;var Wr=function(){this.size=0,this.__data__={hash:new Mr,map:new(_r||Rr),string:new Mr}},Yr=function(e){var t=Ir(this,e).delete(e);return this.size-=t?1:0,t},Vr=function(e){return zr(this,e).get(e)},Ur=function(e){return Pr(this,e).has(e)},qr=function(e,t){var n=Nr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Zr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zr.prototype.clear=Wr,Zr.prototype.delete=Yr,Zr.prototype.get=Vr,Zr.prototype.has=Ur,Zr.prototype.set=qr;var Qr=Zr;function Gr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Gr.Cache||Qr),n}Gr.Cache=Qr;var Xr=Gr;var Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kr=/\\(\\)?/g,eo=function(e){var t=Xr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Jr,(function(e,n,r,o){t.push(r?o.replace(Kr,"$1"):n||e)})),t}));var to=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},no=to,ro=an,oo=Fn,io=un?un.prototype:void 0,ao=io?io.toString:void 0;var so=function e(t){if("string"==typeof t)return t;if(ro(t))return no(t,e)+"";if(oo(t))return ao?ao.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lo=so;var co=an,uo=kn,fo=eo,po=function(e){return null==e?"":lo(e)};var ho=Fn;var mo=function(e,t){return co(e)?e:uo(e,t)?[e]:fo(po(e))},go=function(e){if("string"==typeof e||ho(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var yo=function(e,t){for(var n=0,r=(t=mo(t,e)).length;null!=e&&n<r;)e=e[go(t[n++])];return n&&n==r?e:void 0},vo=yo;var bo=wt((function(e,t,n){var r=null==e?void 0:vo(e,t);return void 0===r?n:r}));const xo=(e,t,n)=>t?bo(n,t)||bo(e,t):n||e,wo=(e,t)=>{const n=t||e.defaultValue;return bo(e.collections,n)};var $o;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($o||($o={}));const So={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Fo=e=>t=>{const n=t.theme,r=wo(So,n[$o.colorScheme]);return n.options&&n.options.color?xo(r,e,n.options.color):xo(r,e)},Do={Brand:{1:Fo("Brand.1"),2:Fo("Brand.2"),3:Fo("Brand.3"),4:Fo("Brand.4"),5:Fo("Brand.5"),6:Fo("Brand.6")},Primary:Fo("Primary"),PrimaryDark:Fo("PrimaryDark"),Secondary:Fo("Secondary"),Accent:{Light:{1:Fo("Accent.Light.1"),2:Fo("Accent.Light.2"),3:Fo("Accent.Light.3"),4:Fo("Accent.Light.4"),5:Fo("Accent.Light.5"),6:Fo("Accent.Light.6")},Dark:{1:Fo("Accent.Dark.1"),2:Fo("Accent.Dark.2"),3:Fo("Accent.Dark.3")}},Neutral:{1:Fo("Neutral.1"),2:Fo("Neutral.2"),3:Fo("Neutral.3"),4:Fo("Neutral.4"),5:Fo("Neutral.5"),6:Fo("Neutral.6"),7:Fo("Neutral.7"),8:Fo("Neutral.8")},Validation:{Green:{Text:Fo("Validation.Green.Text"),Icon:Fo("Validation.Green.Icon"),Border:Fo("Validation.Green.Border"),Background:Fo("Validation.Green.Background")},Orange:{Text:Fo("Validation.Orange.Text"),Icon:Fo("Validation.Orange.Icon"),Border:Fo("Validation.Orange.Border"),Background:Fo("Validation.Orange.Background"),Badge:Fo("Validation.Orange.Badge")},Red:{Text:Fo("Validation.Red.Text"),Icon:Fo("Validation.Red.Icon"),Border:Fo("Validation.Red.Border"),Background:Fo("Validation.Red.Background")},Blue:{Text:Fo("Validation.Blue.Text"),Icon:Fo("Validation.Blue.Icon"),Border:Fo("Validation.Blue.Border"),Background:Fo("Validation.Blue.Background")}},Shadow:{Accent:Fo("Shadow.Accent"),Red:Fo("Shadow.Red"),Elevation:Fo("Shadow.Elevation")}},Oo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Eo={collections:{base:{D1:{fontFamily:Oo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Oo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Oo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Oo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Oo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Oo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Oo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Oo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Oo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Oo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Oo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Oo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Oo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Oo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Bo=e=>t=>{const n=t.theme,r=wo(Eo,n[$o.textStyleScheme]);return n.options&&n.options.textStyle?xo(r,e,n.options.textStyle):xo(r,e)},ko={D1:{fontFamily:Bo("D1.fontFamily"),fontSize:Bo("D1.fontSize"),fontWeight:Bo("D1.fontWeight"),lineHeight:Bo("D1.lineHeight"),letterSpacing:Bo("D1.letterSpacing")},D2:{fontFamily:Bo("D2.fontFamily"),fontSize:Bo("D2.fontSize"),fontWeight:Bo("D2.fontWeight"),lineHeight:Bo("D2.lineHeight"),letterSpacing:Bo("D2.letterSpacing")},D3:{fontFamily:Bo("D3.fontFamily"),fontSize:Bo("D3.fontSize"),fontWeight:Bo("D3.fontWeight"),lineHeight:Bo("D3.lineHeight"),letterSpacing:Bo("D3.letterSpacing")},D4:{fontFamily:Bo("D4.fontFamily"),fontSize:Bo("D4.fontSize"),fontWeight:Bo("D4.fontWeight"),lineHeight:Bo("D4.lineHeight"),letterSpacing:Bo("D4.letterSpacing")},DBody:{fontFamily:Bo("DBody.fontFamily"),fontSize:Bo("DBody.fontSize"),fontWeight:Bo("DBody.fontWeight"),lineHeight:Bo("DBody.lineHeight"),letterSpacing:Bo("DBody.letterSpacing")},H1:{fontFamily:Bo("H1.fontFamily"),fontSize:Bo("H1.fontSize"),fontWeight:Bo("H1.fontWeight"),lineHeight:Bo("H1.lineHeight"),letterSpacing:Bo("H1.letterSpacing")},H2:{fontFamily:Bo("H2.fontFamily"),fontSize:Bo("H2.fontSize"),fontWeight:Bo("H2.fontWeight"),lineHeight:Bo("H2.lineHeight"),letterSpacing:Bo("H2.letterSpacing")},H3:{fontFamily:Bo("H3.fontFamily"),fontSize:Bo("H3.fontSize"),fontWeight:Bo("H3.fontWeight"),lineHeight:Bo("H3.lineHeight"),letterSpacing:Bo("H3.letterSpacing")},H4:{fontFamily:Bo("H4.fontFamily"),fontSize:Bo("H4.fontSize"),fontWeight:Bo("H4.fontWeight"),lineHeight:Bo("H4.lineHeight"),letterSpacing:Bo("H4.letterSpacing")},H5:{fontFamily:Bo("H5.fontFamily"),fontSize:Bo("H5.fontSize"),fontWeight:Bo("H5.fontWeight"),lineHeight:Bo("H5.lineHeight"),letterSpacing:Bo("H5.letterSpacing")},H6:{fontFamily:Bo("H6.fontFamily"),fontSize:Bo("H6.fontSize"),fontWeight:Bo("H6.fontWeight"),lineHeight:Bo("H6.lineHeight"),letterSpacing:Bo("H6.letterSpacing")},Body:{fontFamily:Bo("Body.fontFamily"),fontSize:Bo("Body.fontSize"),fontWeight:Bo("Body.fontWeight"),lineHeight:Bo("Body.lineHeight"),letterSpacing:Bo("Body.letterSpacing")},BodySmall:{fontFamily:Bo("BodySmall.fontFamily"),fontSize:Bo("BodySmall.fontSize"),fontWeight:Bo("BodySmall.fontWeight"),lineHeight:Bo("BodySmall.lineHeight"),letterSpacing:Bo("BodySmall.letterSpacing")},XSmall:{fontFamily:Bo("XSmall.fontFamily"),fontSize:Bo("XSmall.fontSize"),fontWeight:Bo("XSmall.fontWeight"),lineHeight:Bo("XSmall.lineHeight"),letterSpacing:Bo("XSmall.letterSpacing")}},Co=e=>{switch(e){case 700:case"bold":return Oo.Bold;case 600:case"semibold":return Oo.Semibold;case 300:case"light":return Oo.Light;case 400:case"regular":return Oo.Regular;default:return""}},Ao=(e,t)=>n=>{var r;const o=ko[e].fontFamily(n),i=ko[e].fontWeight(n);return Object.values(Oo).includes(o)?g`
                font-family: ${Co(t)||Co(i)||o};
                font-weight: normal !important;
            `:g`
            font-family: ${o};
            font-weight: ${null!==(r=jo(t)||i)&&void 0!==r?r:"normal"};
        `},jo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},To=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Mo=Ao,Ro=(e,t,n=!1)=>r=>{const o=ko[e],i=o.fontSize(r);return g`
            ${Ao(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${g`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},_o=(e=!1,t=!1,n=void 0)=>t?g`
            display: block;
            ${To(n)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${To(n)}
        `;var Ho;!function(e){e.D1=m.h1`
        ${e=>g`
                ${Ro("D1",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>g`
                ${Ro("D2",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>g`
                ${Ro("D3",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>g`
                ${Ro("D4",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>g`
                ${Ro("DBody",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>g`
                ${Ro("H1",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>g`
                ${Ro("H2",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>g`
                ${Ro("H3",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>g`
                ${Ro("H4",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>g`
                ${Ro("H5",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>g`
                ${Ro("H6",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>g`
                ${Ro("Body",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>g`
                ${Ro("BodySmall",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>g`
                ${Ro("XSmall",e.weight,e.paragraph)}
                color: ${Do.Neutral[1]};
                ${_o(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>zo(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>zo(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ho||(Ho={}));const Lo=m.a`
    ${e=>g`
            ${Ro(e.textStyle,e.weight)}
            color: ${Do.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Do.Secondary};

                svg {
                    color: ${Do.Secondary};
                }
            }
        `}
`,Io=m(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,zo=n=>{var{external:r=!1,children:o}=n,i=D(n,["external","children"]);return t(Lo,Object.assign({},i,{children:[o,r&&e(Io,{})]}))},Po=m.div`
    border-radius: 0.5rem;
    background: ${Do.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,No=m.button`
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
                background-color: ${Do.Neutral[7]};
            `}
    }
`,Wo=a.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=D(t,["children","focusHighlight","focusOutline","type"]);return e(No,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),Yo=m.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Do.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Et.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Vo=m(Wo)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Do.Accent.Light[1]};
    }
`,Uo=m(b)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Do.Neutral[3]};
`;var qo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(qo||(qo={}));const Zo=(e,t)=>{const{textColor:n=Do.Neutral[1]}=t||{};return g`
        // Text
        ${Ro(e,"regular")}
        color: ${n};

        a,
        strong {
            ${Ro(e,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            color: ${Do.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Do.Secondary};

                svg {
                    color: ${Do.Secondary};
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
    `},Qo=m.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Go=m((t=>{var{children:n}=t,r=D(t,["children"]);const o=r["data-testid"]||"card";return e(Po,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?e(Ho.Body,{children:n}):n}))}))`
    ${Zo("BodySmall")}

    ${Et.mobileL} {
        display: none;
    }
`,Xo=m((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=D(n,["id","children","onClose","showCloseButton"]);return t(Yo,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(Vo,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e(Uo,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Jo=m.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${Zo("BodySmall")}
`,Ko=r=>{var{children:o,visible:i,onMobileClose:a}=r,s=D(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=Ft.useMediaQuery({maxWidth:Dt.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof o?e(Ho.BodySmall,{children:o}):o;return t(n,{children:[i&&e(Qo,Object.assign({"data-testid":l},s,{children:e(Go,{children:d()})})),c&&e(on,Object.assign({show:i,onOverlayClick:u},{children:e(Xo,Object.assign({onClose:u},{children:e(Jo,{children:d()})}))}))]})},ei=m.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ti=r=>{var{children:o,popoverContent:i,trigger:a="click",position:s="top",zIndex:d,rootNode:f,onPopoverAppear:p,onPopoverDismiss:h}=r,m=D(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[g,y]=c(!1),v=u(),b=u(),x=Ft.useMediaQuery({maxWidth:Bt.mobileL}),{refs:w,floatingStyles:$}=bt({open:g,placement:s,whileElementsMounted:Se,middleware:[ce(16),De(),Fe({limiter:Oe()})]});l((()=>{if(!x&&g)return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}}),[g]);const S=e=>{var t,n;(null===(t=v.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=b.current)||void 0===n?void 0:n.contains(e.target))||(y(!1),h&&h())},F=()=>{y(!1)};return t(n,{children:[g&&e(gt,Object.assign({root:f},{children:e("div",Object.assign({ref:e=>{b.current=e,w.setFloating(e)},style:Object.assign(Object.assign({},$),{zIndex:d})},{children:"function"==typeof i?i():e(Ko,Object.assign({visible:!0,onMobileClose:F},{children:i}))}))})),e(ei,Object.assign({ref:e=>{v.current=e,w.setReference(e)},onClick:e=>{e.preventDefault(),("click"===a||x)&&(y(!g),!g&&p&&p(),g&&h&&h())},onMouseEnter:()=>{"hover"!==a||x||y(!0)},onMouseLeave:()=>{"hover"===a&&g&&!x&&y(!1)}},m,{children:o}))]})},ni=m.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Do.Primary};
    }
`,ri=m.div`
    display: inline;
    position: relative;
    width: fit-content;
`,oi=({addon:t,rootNode:n})=>{const{content:r,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(ti,Object.assign({trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s},{children:e(ri,{children:e(ni,{children:i||e(d,{id:`${o}-icon`})})})}))},ii=m.label`
    ${Ro("H5","semibold")}
    color: ${Do.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Ro("H5","semibold")}
    }

    a {
        color: ${Do.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Do.Secondary};

            svg {
                color: ${Do.Secondary};
            }
        }
    }
`;m(Ho.H6)`
    color: ${Do.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const ai=m(Ho.BodySmall)`
    && {
        color: ${Do.Neutral[3]};
        ${Mo("BodySmall","regular")}
    }
`,si=n=>{var{children:r,addon:o,subtitle:i,"data-testid":a}=n,s=D(n,["children","addon","subtitle","data-testid"]);return t(ii,Object.assign({},s,{children:[r,o&&o.type&&("popover"===o.type?e(oi,{addon:o}):null),"string"==typeof i?e(ai,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},li=m.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,ci=y`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ui=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Do.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ci} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,di=m(ui)`
    animation-delay: -0.45s;
`,fi=m(ui)`
    animation-delay: -0.3s;
`,pi=m(ui)`
    animation-delay: -0.15s;
`,hi=m.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Do.Validation.Red.Background(e),n=Do.Validation.Red.Border(e);break;case"success":t=Do.Validation.Green.Background(e),n=Do.Validation.Green.Border(e);break;case"warning":default:t=Do.Validation.Orange.Background(e),n=Do.Validation.Orange.Border(e);break;case"info":t=Do.Validation.Blue.Background(e),n=Do.Validation.Blue.Border(e);break;case"description":t=Do.Neutral[7](e),n=Do.Neutral[4](e)}return g`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    ${e=>"small"===e.$sizeType?Zo("H6"):Zo("BodySmall")}
`,mi=m.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&g`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Do.Validation.Red.Icon(e);break;case"success":t=Do.Validation.Green.Icon(e);break;case"warning":default:t=Do.Validation.Orange.Icon(e);break;case"info":t=Do.Validation.Blue.Icon(e);break;case"description":t=Do.Neutral[4](e)}return g`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,gi=m(Ho.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?g`
                ${Ro("H6","semibold")}
                margin-top: 0.25rem;
            `:g`
                ${Ro("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    color: ${Do.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Do.Primary};
    }
`,yi=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,vi=m.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return g`
                    grid-column: auto / span 4;
                `;case"full":return g`
                    grid-column: auto / span 8;
                `}}}

    ${Et.tablet} {
        grid-column: auto / span 8;
    }

    ${Et.mobileL} {
        grid-column: auto / span 4;
    }
`,bi=m.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Do.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,xi=m.button`
    ${Ro("Body","regular")}
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,wi=m.span`
    color: ${Do.Neutral[3]};
`,$i=m((({color:n,className:r,size:o=18})=>t(li,Object.assign({className:r,$size:o,$color:n},{children:[e(ui,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),e(di,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),e(fi,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),e(pi,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Do.Neutral[3]} transparent transparent transparent;
    }
`,Si=m(x)`
    color: ${Do.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,Fi=m.span`
    color: ${Do.Validation.Orange.Text};
`,Di=m.span`
    ${Ro("Body","semibold")}
    color: ${Do.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,Oi=m((n=>{var{type:r,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:l="default",showIcon:c=!1}=n,u=D(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon"]);return t(hi,Object.assign({className:o,$type:r,$sizeType:l,"data-testid":u["data-testid"]},{children:[c&&e(mi,Object.assign({$sizeType:l,$type:r},{children:(()=>{switch(r){case"success":return e(w,{});case"warning":return e($,{});case"error":return e(S,{});case"info":case"description":return e(d,{});default:return null}})()})),t(yi,{children:[i,a&&t(gi,Object.assign({"data-testid":"action-link",$type:r,$sizeType:l},a,{children:[a.children,s||e(F,{})]}))]})]}))}))`
    margin-top: 0.5rem;
`,Ei=({label:i,value:a,displayWidth:s="full",maskState:u,maskLoadingState:d,maskChar:f="•",maskRange:p,unmaskRange:h,maskRegex:m,disableMaskUnmask:g,alert:y,maskTransformer:v,onMask:b,onUnmask:x,onTryAgain:w})=>{const[$,S]=c(u);l((()=>{S(u)}),[u]);const F=()=>{switch("fail"===d&&w&&w(),$){case"masked":x&&x(),S("unmasked");break;case"unmasked":b&&b(),S("masked")}},D=()=>"masked"===$?Xt.maskValue(a,{maskChar:f,maskRange:p,unmaskRange:h,maskRegex:m,maskTransformer:v}):a,O=()=>{switch(d){case"fail":return t(n,{children:[e(Si,{}),e(Fi,{children:"Error"}),e(Di,{children:"Try again?"})]});case"loading":return t(n,{children:[e($i,{}),e(wi,{children:"Retrieving..."})]});default:return t(n,{children:[D(),e(bi,{children:"masked"===$?e(r,{"data-testid":"masked-icon"}):e(o,{"data-testid":"unmasked-icon"})})]})}};return t(vi,Object.assign({$widthStyle:s},{children:[e(si,{children:i}),$?g?e(Ho.Body,{children:D()}):e(xi,Object.assign({"data-testid":"clickable-label",onClick:F,"aria-busy":"loading"===d,"aria-live":"polite"},{children:O()})):e(Ho.Body,{children:a}),y&&e(Oi,Object.assign({sizeType:"small"},y))]}))},Bi=m.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return g`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Et.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Et.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`,ki=a.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=D(t,["mobileCols","tabletCols","desktopCols"]);return e(Bi,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=Ci(i||o||r),a=Ci(e),s=Ci(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ci=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Ai=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,s=D(t,["children","data-testid","type","stretch"]);return e(ji,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},s,{children:r}))})),ji=m.div`
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

                ${Et.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Et.tablet} {
        max-width: 720px;
    }
    ${Et.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return g`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Et.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Et.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return g`
                    display: flex;
                    flex-direction: column;
                `;default:return g`
                    display: flex;
                `}}}
`,Ti=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=D(t,["children","data-testid","stretch"]);return e(Mi,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Mi=m.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?g`
                ${Et.tablet} {
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
`,Ri=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:s=!1}=t,l=D(t,["children","data-testid","className","type","stretch"]);return e(Ti,Object.assign({ref:n,"data-testid":o,className:i,stretch:s},l,{children:e(Ai,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),_i=m({Section:Ti,Container:Ai,Content:Ri,ColDiv:ki}.Content)`
    background: ${({$background:e})=>e?Do.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,Hi=m(Ho.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`,Li=m(Ho.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`,Ii=m.div`
    grid-column: span 8;
`,zi=m.ul`
    grid-column: span 8;
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${Et.tablet} {
        column-gap: 1.5rem;
    }

    ${Et.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,Pi=Object.assign((r=>{var{items:o,title:i,description:a,topSection:s,bottomSection:l,children:c,background:u=!0,onMask:d,onUnmask:f,onTryAgain:p}=r,h=D(r,["items","title","description","topSection","bottomSection","children","background","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{d&&d(e)},g=e=>()=>{f&&f(e)},y=e=>()=>{p&&p(e)},v=()=>{if(o&&o.length>0){const t=o.map(((t,n)=>e(Ei,Object.assign({},t,{onMask:m(t),onUnmask:g(t),onTryAgain:y(t)}),n)));return e(zi,{children:t})}return null};return e(_i,Object.assign({$background:u},h,{type:"grid"},{children:c||t(n,{children:[i&&e(Hi,Object.assign({weight:"semibold"},{children:i})),a&&e(Li,{children:a}),s&&e(Ii,Object.assign({"data-id":"top-section"},{children:s})),v(),l&&e(Ii,Object.assign({"data-id":"bottom-section"},{children:l}))]})}))}),{ItemSection:zi,Item:Ei});export{Pi as UneditableSection};
//# sourceMappingURL=index.js.map
