import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import{EyeIcon as r}from"@lifesg/react-icons/eye";import{EyeSlashIcon as o}from"@lifesg/react-icons/eye-slash";import*as i from"react";import a,{useLayoutEffect as s,useEffect as l,useRef as c,useState as u,isValidElement as d,createRef as f,cloneElement as p,PureComponent as h}from"react";import{ICircleFillIcon as m}from"@lifesg/react-icons/i-circle-fill";import*as g from"react-dom";import y,{createPortal as v,findDOMNode as b}from"react-dom";import w,{css as x,keyframes as $}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{CrossIcon as O}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as F}from"@lifesg/react-icons/exclamation-triangle";import{ArrowRightIcon as D}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as E}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as k}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as B}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as j}from"@lifesg/react-icons";function C(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function T(e){return M(e)?(e.nodeName||"").toLowerCase():"#document"}function R(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function A(e){var t;return null==(t=(M(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function M(e){return e instanceof Node||e instanceof R(e).Node}function _(e){return e instanceof Element||e instanceof R(e).Element}function H(e){return e instanceof HTMLElement||e instanceof R(e).HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof R(e).ShadowRoot)}function z(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Y(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function I(e){return["table","td","th"].includes(T(e))}function P(e){const t=N(),n=Y(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function N(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function W(e){return["html","body","#document"].includes(T(e))}function Y(e){return R(e).getComputedStyle(e)}function V(e){return _(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function U(e){if("html"===T(e))return e;const t=e.assignedSlot||e.parentNode||L(e)&&e.host||A(e);return L(t)?t.host:t}function q(e){const t=U(e);return W(t)?e.ownerDocument?e.ownerDocument.body:e.body:H(t)&&z(t)?t:q(t)}function Z(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=q(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=R(o);return i?t.concat(a,a.visualViewport||[],z(o)?o:[],a.frameElement&&n?Z(a.frameElement):[]):t.concat(o,Z(o,[],n))}"function"==typeof SuppressedError&&SuppressedError;const Q=Math.min,G=Math.max,X=Math.round,J=Math.floor,K=e=>({x:e,y:e}),ee={left:"right",right:"left",bottom:"top",top:"bottom"},te={start:"end",end:"start"};function ne(e,t,n){return G(e,Q(t,n))}function re(e,t){return"function"==typeof e?e(t):e}function oe(e){return e.split("-")[0]}function ie(e){return e.split("-")[1]}function ae(e){return"x"===e?"y":"x"}function se(e){return"y"===e?"height":"width"}function le(e){return["top","bottom"].includes(oe(e))?"y":"x"}function ce(e){return ae(le(e))}function ue(e){return e.replace(/start|end/g,(e=>te[e]))}function de(e){return e.replace(/left|right|bottom|top/g,(e=>ee[e]))}function fe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function pe(e,t,n){let{reference:r,floating:o}=e;const i=le(t),a=ce(t),s=se(a),l=oe(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let p;switch(l){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-o.width,y:d};break;default:p={x:r.x,y:r.y}}switch(ie(t)){case"start":p[a]-=f*(n&&c?-1:1);break;case"end":p[a]+=f*(n&&c?-1:1)}return p}async function he(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=re(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(p),m=s[f?"floating"===d?"reference":"floating":d],g=fe(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{...a.floating,x:r,y:o}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=fe(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}const me=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=oe(n),s=ie(n),l="y"===le(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=re(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof h&&(p="end"===s?-1*h:h),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}};function ge(e){const t=Y(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=H(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=X(n)!==i||X(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function ye(e){return _(e)?e:e.contextElement}function ve(e){const t=ye(e);if(!H(t))return K(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=ge(t);let a=(i?X(n.width):n.width)/r,s=(i?X(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const be=K(0);function we(e){const t=R(e);return N()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:be}function xe(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=ye(e);let a=K(1);t&&(r?_(r)&&(a=ve(r)):a=ve(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==R(e))&&t}(i,n,r)?we(i):K(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=R(i),t=r&&_(r)?R(r):r;let n=e.frameElement;for(;n&&r&&t!==e;){const e=ve(n),t=n.getBoundingClientRect(),r=Y(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=o,c+=i,n=R(n).frameElement}}return fe({width:u,height:d,x:l,y:c})}function $e(e){return xe(A(e)).left+V(e).scrollLeft}function Se(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=R(e),r=A(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=N();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=A(e),n=V(e),r=e.ownerDocument.body,o=G(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=G(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+$e(e);const s=-n.scrollTop;return"rtl"===Y(r).direction&&(a+=G(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(A(e));else if(_(t))r=function(e,t){const n=xe(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=H(e)?ve(e):K(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=we(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return fe(r)}function Oe(e,t){const n=U(e);return!(n===t||!_(n)||W(n))&&("fixed"===Y(n).position||Oe(n,t))}function Fe(e,t,n){const r=H(t),o=A(t),i="fixed"===n,a=xe(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=K(0);if(r||!r&&!i)if(("body"!==T(t)||z(o))&&(s=V(t)),r){const e=xe(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=$e(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function De(e,t){return H(e)&&"fixed"!==Y(e).position?t?t(e):e.offsetParent:null}function Ee(e,t){const n=R(e);if(!H(e))return n;let r=De(e,t);for(;r&&I(r)&&"static"===Y(r).position;)r=De(r,t);return r&&("html"===T(r)||"body"===T(r)&&"static"===Y(r).position&&!P(r))?n:r||function(e){let t=U(e);for(;H(t)&&!W(t);){if(P(t))return t;t=U(t)}return null}(e)||n}const ke={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=H(n),i=A(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},s=K(1);const l=K(0);if((o||!o&&"fixed"!==r)&&(("body"!==T(n)||z(i))&&(a=V(n)),H(n))){const e=xe(n);s=ve(n),l.x=e.x+n.clientLeft,l.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-a.scrollLeft*s.x+l.x,y:t.y*s.y-a.scrollTop*s.y+l.y}},getDocumentElement:A,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=Z(e,[],!1).filter((e=>_(e)&&"body"!==T(e))),o=null;const i="fixed"===Y(e).position;let a=i?U(e):e;for(;_(a)&&!W(a);){const t=Y(a),n=P(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||z(a)&&!n&&Oe(e,a))?r=r.filter((e=>e!==a)):o=t,a=U(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=Se(t,n,o);return e.top=G(r.top,e.top),e.right=Q(r.right,e.right),e.bottom=Q(r.bottom,e.bottom),e.left=G(r.left,e.left),e}),Se(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Ee,getElementRects:async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Ee,i=this.getDimensions;return{reference:Fe(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=ge(e);return{width:t,height:n}},getScale:ve,isElement:_,isRTL:function(e){return"rtl"===Y(e).direction}};function Be(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=ye(e),u=o||i?[...c?Z(c):[],...Z(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=A(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const p={rootMargin:-J(u)+"px "+-J(o.clientWidth-(c+d))+"px "+-J(o.clientHeight-(u+f))+"px "+-J(c)+"px",threshold:G(0,Q(1,l))||1};let h=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!h)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),100)}h=!1}try{r=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,p)}r.observe(e)}(!0),i}(c,n):null;let f,p=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{h&&h.observe(t)}))),n()})),c&&!l&&h.observe(c),h.observe(t));let m=l?xe(e):null;return l&&function t(){const r=xe(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),d&&d(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(f)}}const je=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=re(e,t),c={x:n,y:r},u=await he(t,l),d=le(oe(o)),f=ae(d);let p=c[f],h=c[d];if(i){const e="y"===f?"bottom":"right";p=ne(p+u["y"===f?"top":"left"],p,p-u[e])}if(a){const e="y"===d?"bottom":"right";h=ne(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[f]:p,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Ce=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=re(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=oe(o),v=oe(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=f||(v||!m?[de(s)]:function(e){const t=de(e);return[ue(e),t,ue(t)]}(s));f||"none"===h||w.push(...function(e,t,n,r){const o=ie(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(oe(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(ue)))),i}(s,m,h,b));const x=[s,...w],$=await he(t,g),S=[];let O=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&S.push($[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=ie(e),o=ce(e),i=se(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=de(a)),[a,de(a)]}(o,a,b);S.push($[e[0]],$[e[1]])}if(O=[...O,{placement:o,overflows:S}],!S.every((e=>e<=0))){var F,D;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let n=null==(D=O.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:D.placement;if(!n)switch(p){case"bestFit":{var E;const e=null==(E=O.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},Te=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=re(e,t),u={x:n,y:r},d=le(o),f=ae(d);let p=u[f],h=u[d];const m=re(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(oe(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[f]:p,[d]:h}}}},Re=(e,t,n)=>{const r=new Map,o={platform:ke,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=pe(c,r,l),f=r,p={},h=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,p={...p,[i]:{...p[i],...v}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=pe(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var Ae="undefined"!=typeof document?s:l;function Me(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Me(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Me(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function _e(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function He(e,t){const n=_e(e);return Math.round(t*n)/n}function Le(e){const t=i.useRef(e);return Ae((()=>{t.current=e})),t}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var ze=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Ie="undefined"==typeof Element,Pe=Ie?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Ne=!Ie&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},We=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Ye=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!We(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{Pe.call(a,ze)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!We(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Ve=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Ue=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Ve(e)?0:e.tabIndex},qe=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ze=function(e){return"INPUT"===e.tagName},Qe=function(e){return function(e){return Ze(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Ne(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Ge=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Xe=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=Pe.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Pe.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Ge(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=Ne(e);if(a&&!a.shadowRoot&&!0===r(a))return Ge(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&Ne(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=Ne(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Je=function(e,t){return!(t.disabled||We(t)||function(e){return Ze(e)&&"hidden"===e.type}(t)||Xe(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Pe.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},Ke=function(e,t){return!(Qe(t)||Ue(t)<0||!Je(e,t))},et=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},tt=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=Ue(e);return n<0&&t&&!Ve(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort(qe).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},nt=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Ye([e],t.includeContainer,{filter:Ke.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:et}):function(e,t,n){if(We(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(ze));return t&&Pe.call(e,ze)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,Ke.bind(null,t)),tt(n)};const rt=i["useInsertionEffect".toString()]||(e=>e());var ot="undefined"!=typeof document?s:l;function it(){return it=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},it.apply(this,arguments)}let at=!1,st=0;const lt=()=>"floating-ui-"+st++;const ct=i["useId".toString()]||function(){const[e,t]=i.useState((()=>at?lt():void 0));return ot((()=>{null==e&&t(lt())}),[]),i.useEffect((()=>{at||(at=!0)}),[]),e};const ut=i.createContext(null),dt=i.createContext(null);function ft(e){return"data-floating-ui-"+e}const pt=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function ht(e,t){const n=nt(e,pt());"prev"===t&&n.reverse();const r=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(o=e)?void 0:o.ownerDocument)||document));var o;return n.slice(r+1)[0]}function mt(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&L(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,r)}function gt(e){nt(e,pt()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function yt(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const vt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function bt(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const wt=i.forwardRef((function(e,t){const[n,r]=i.useState();ot((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",bt),()=>{document.removeEventListener("keydown",bt)})),[]);const o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[ft("focus-guard")]:"",style:vt};return i.createElement("span",it({},e,o))})),xt=i.createContext(null);function $t(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const a=function(e){let{id:t,root:n}=void 0===e?{}:e;const[r,o]=i.useState(null),a=ct(),s=St(),l=i.useMemo((()=>({id:t,root:n,portalContext:s,uniqueId:a})),[t,n,s,a]),c=i.useRef();return ot((()=>()=>{null==r||r.remove()}),[r,l]),ot((()=>{if(c.current===l)return;c.current=l;const{id:e,root:t,portalContext:n,uniqueId:r}=l,i=e?document.getElementById(e):null,a=ft("portal");if(i){const e=document.createElement("div");e.id=r,e.setAttribute(a,""),i.appendChild(e),o(e)}else{let i=t||(null==n?void 0:n.portalNode);i&&!_(i)&&(i=i.current),i=i||document.body;let s=null;e&&(s=document.createElement("div"),s.id=e,i.appendChild(s));const l=document.createElement("div");l.id=r,l.setAttribute(a,""),i=s||i,i.appendChild(l),o(l)}}),[l]),r}({id:n,root:r}),[s,l]=i.useState(null),c=i.useRef(null),u=i.useRef(null),d=i.useRef(null),f=i.useRef(null),p=!!s&&!s.modal&&s.open&&o&&!(!r&&!a);return i.useEffect((()=>{if(a&&o&&(null==s||!s.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&mt(e)){("focusin"===e.type?yt:gt)(a)}}}),[a,o,null==s?void 0:s.modal]),i.createElement(xt.Provider,{value:i.useMemo((()=>({preserveTabOrder:o,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:l})),[o,a])},p&&a&&i.createElement(wt,{"data-type":"outside",ref:c,onFocus:e=>{if(mt(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=ht(document.body,"prev")||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),p&&a&&i.createElement("span",{"aria-owns":a.id,style:vt}),a&&v(t,a),p&&a&&i.createElement(wt,{"data-type":"outside",ref:u,onFocus:e=>{if(mt(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=ht(document.body,"next")||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const St=()=>i.useContext(xt);let Ot;function Ft(e){var t;void 0===e&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e;if("production"!==process.env.NODE_ENV){var a;const t="Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";var s,l;if(null!=(a=e.elements)&&a.reference&&!_(e.elements.reference))if(null==(s=Ot)||!s.has(t))null==(l=Ot)||l.add(t),console.error(t)}const[c,u]=i.useState(null),d=(null==(t=e.elements)?void 0:t.reference)||c,f=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,f]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=i.useState(r);Me(p,r)||h(r);const[m,y]=i.useState(null),[v,b]=i.useState(null),w=i.useCallback((e=>{e!==O.current&&(O.current=e,y(e))}),[]),x=i.useCallback((e=>{e!==F.current&&(F.current=e,b(e))}),[]),$=a||m,S=s||v,O=i.useRef(null),F=i.useRef(null),D=i.useRef(d),E=null!=c,k=Le(c),B=Le(o),j=i.useCallback((()=>{if(!O.current||!F.current)return;const e={placement:t,strategy:n,middleware:p};B.current&&(e.platform=B.current),Re(O.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};C.current&&!Me(D.current,t)&&(D.current=t,g.flushSync((()=>{f(t)})))}))}),[p,t,n,B]);Ae((()=>{!1===u&&D.current.isPositioned&&(D.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const C=i.useRef(!1);Ae((()=>(C.current=!0,()=>{C.current=!1})),[]),Ae((()=>{if($&&(O.current=$),S&&(F.current=S),$&&S){if(k.current)return k.current($,S,j);j()}}),[$,S,j,k,E]);const T=i.useMemo((()=>({reference:O,floating:F,setReference:w,setFloating:x})),[w,x]),R=i.useMemo((()=>({reference:$,floating:S})),[$,S]),A=i.useMemo((()=>{const e={position:n,left:0,top:0};if(!R.floating)return e;const t=He(R.floating,d.x),r=He(R.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",..._e(R.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,R.floating,d.x,d.y]);return i.useMemo((()=>({...d,update:j,refs:T,elements:R,floatingStyles:A})),[d,j,T,R,A])}(e),p=i.useContext(dt),h=null!=((null==(m=i.useContext(ut))?void 0:m.id)||null);var m;const y=function(e){const t=i.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return rt((()=>{t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}(((e,t,n)=>{e&&(b.current.openEvent=t),w.emit("openchange",{open:e,event:t,reason:n,nested:h}),null==r||r(e,t,n)})),v=i.useRef(null),b=i.useRef({}),w=i.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}()))[0],x=ct(),$=i.useCallback((e=>{const t=_(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;f.refs.setReference(t)}),[f.refs]),S=i.useCallback((e=>{(_(e)||null===e)&&(v.current=e,u(e)),(_(f.refs.reference.current)||null===f.refs.reference.current||null!==e&&!_(e))&&f.refs.setReference(e)}),[f.refs]),O=i.useMemo((()=>({...f.refs,setReference:S,setPositionReference:$,domReference:v})),[f.refs,S,$]),F=i.useMemo((()=>({...f.elements,domReference:d})),[f.elements,d]),D=i.useMemo((()=>({...f,refs:O,elements:F,dataRef:b,nodeId:o,floatingId:x,events:w,open:n,onOpenChange:y})),[f,o,x,w,n,y,O,F]);return ot((()=>{const e=null==p?void 0:p.nodesRef.current.find((e=>e.id===o));e&&(e.context=D)})),i.useMemo((()=>({...f,context:D,refs:O,elements:F})),[f,O,F,D])}"production"!==process.env.NODE_ENV&&(Ot=new Set);var Dt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Et(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kt,Bt={exports:{}};kt=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(p(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,w(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new h("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return y(r,o,l,f,w(p));if(!p)return new h("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(c,f,r,o,l+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,l,c,u,f,p){if(c=c||d,f=f||l,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case l:case d:case m:case h:case s:return g;default:return t}}case r:return t}}}var x=c,$=u,S=l,O=s,F=n,D=d,E=o,k=m,B=h,j=r,C=a,T=i,R=f,A=!1;function M(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=O,t.Element=F,t.ForwardRef=D,t.Fragment=E,t.Lazy=k,t.Memo=B,t.Portal=j,t.Profiler=C,t.StrictMode=T,t.Suspense=R,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||w(e)===c},t.isConcurrentMode=M,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var jt=Bt.exports=kt(a);const Ct={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Tt=e=>Object.keys(Ct).reduce(((t,n)=>{const r=Ct[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Rt=Tt("max-width"),At=(Tt("min-width"),Ct);var Mt={exports:{}};Mt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],p=u&&u[1];a[l]=p?{regex:f,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(o||i?1:p.getDate()),m=o||p.getFullYear(),g=0;o&&!i||(g=i>0?i-1:p.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,h,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,y,v,b,w)):new Date(m,g,h,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}();var _t,Ht,Lt=Et(Mt.exports),zt={exports:{}},It=Et(zt.exports=(_t={year:0,month:1,day:2,hour:3,minute:4,second:5},Ht={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Ht[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ht[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=_t[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,p=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Pt={exports:{}};Pt.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x=function(e){return e instanceof F},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},S=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},O=v;O.l=$,O.i=x,O.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),p=function(e,t){var o=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},h=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return p(r?y-w:y+(6-w),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case i:return h(v+"Seconds",2);case o:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=O.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],h=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,u){var f,p=this;r=Number(r);var h=O.p(u),m=function(e){var t=S(p);return O.w(t.date(t.date()+Math.round(e*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===s)return m(1);if(h===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[h]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=O.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},d=function(e){return O.s(i%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:O.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:O.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:O.s(a,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:o};return r.replace(m,(function(e,t){return t||h[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=O.p(f),g=S(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=O.m(this,g);return b=(h={},h[d]=b/12,h[c]=b,h[u]=b/3,h[l]=(v-y)/6048e5,h[s]=(v-y)/864e5,h[a]=v/n,h[i]=v/t,h[o]=v/e,h)[m]||v,p?b:O.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),D=F.prototype;return S.prototype=D,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,F,S),e.$i=!0),S},S.locale=$,S.isDayjs=x,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var Nt=Et(Pt.exports),Wt={exports:{}};Wt.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Yt=Et(Wt.exports),Vt={exports:{}};Vt.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ut=Et(Vt.exports),qt={exports:{}};qt.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Zt,Qt=Et(qt.exports);Nt.extend(Yt),Nt.extend(Ut),Nt.extend(Qt),Nt.extend(Lt),Nt.extend(It),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Nt(t).startOf("week");return Gt(n).map((e=>Xt(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Xt(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Nt(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Nt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Nt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Nt(r):void 0,o?Nt(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Zt||(Zt={}));const Gt=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Xt=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Jt=[1,3,5,7,8,10,12],Kt=[4,6,9,11];var en,tn,nn,rn;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Jt.includes(i)?Math.min(o,31).toString():Kt.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Nt(e,n);return Nt(t,n).diff(r,"minute")},e.toDayjs=e=>e?Nt(e):Nt(),e.addMinutesToTime=(e,t,n="HH:mm")=>Nt(e,n).add(t,"minutes").format(n)}(en||(en={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Nt(e).isBefore(r,"day"))||!(!o||!Nt(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Nt(e).isValid())return e}return""}}(tn||(tn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(nn||(nn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(rn||(rn={}));var on=function(e,t){return on=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},on(e,t)};var an=function(){return an=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},an.apply(this,arguments)};var sn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ln=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},cn="object"==typeof sn&&sn&&sn.Object===Object&&sn,un="object"==typeof self&&self&&self.Object===Object&&self,dn=cn||un||Function("return this")(),fn=dn,pn=function(){return fn.Date.now()},hn=/\s/;var mn=function(e){for(var t=e.length;t--&&hn.test(e.charAt(t)););return t},gn=mn,yn=/^\s+/;var vn=function(e){return e?e.slice(0,gn(e)+1).replace(yn,""):e},bn=dn.Symbol,wn=bn,xn=Object.prototype,$n=xn.hasOwnProperty,Sn=xn.toString,On=wn?wn.toStringTag:void 0;var Fn=function(e){var t=$n.call(e,On),n=e[On];try{e[On]=void 0;var r=!0}catch(e){}var o=Sn.call(e);return r&&(t?e[On]=n:delete e[On]),o},Dn=Object.prototype.toString;var En=Fn,kn=function(e){return Dn.call(e)},Bn=bn?bn.toStringTag:void 0;var jn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Bn&&Bn in Object(e)?En(e):kn(e)},Cn=function(e){return null!=e&&"object"==typeof e};var Tn=vn,Rn=ln,An=function(e){return"symbol"==typeof e||Cn(e)&&"[object Symbol]"==jn(e)},Mn=/^[-+]0x[0-9a-f]+$/i,_n=/^0b[01]+$/i,Hn=/^0o[0-7]+$/i,Ln=parseInt;var zn=ln,In=pn,Pn=function(e){if("number"==typeof e)return e;if(An(e))return NaN;if(Rn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Rn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Tn(e);var n=_n.test(e);return n||Hn.test(e)?Ln(e.slice(2),n?2:8):Mn.test(e)?NaN:+e},Nn=Math.max,Wn=Math.min;var Yn=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=In();if(h(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?Wn(n,i-(e-c)):n}(e))}function g(e){return s=void 0,f&&r?p(e):(r=o=void 0,a)}function y(){var e=In(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Pn(t)||0,zn(n)&&(u=!!n.leading,i=(d="maxWait"in n)?Nn(Pn(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},y.flush=function(){return void 0===s?a:g(In())},y},Vn=Yn,Un=ln;var qn=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Un(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Vn(e,t,{leading:r,maxWait:t,trailing:o})},Zn=function(e,t,n,r){switch(t){case"debounce":return Yn(e,n,r);case"throttle":return qn(e,n,r);default:return e}},Qn=function(e){return"function"==typeof e},Gn=function(){return"undefined"==typeof window},Xn=function(e){return e instanceof Element||e instanceof HTMLDocument},Jn=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&Qn(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Gn()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Gn())return null;if(t)return document.querySelector(t);if(r&&Xn(r))return r;if(n.targetRef&&Xn(n.targetRef.current))return n.targetRef.current;var o=b(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Jn(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!Gn()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Qn(t)?"renderProp":Qn(r)?"childFunction":d(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=f(),n.observableElement=null,Gn()||(n.resizeHandler=Zn(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}on(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Gn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return p(e,c)}return p(e,l);case"childArray":return(e=r).map((function(e){return!!e&&p(e,l)}));default:return i.createElement(a,null)}}}(h);var Kn=Gn()?l:s;const er=w.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return x`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,tr=w.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=x`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=x`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=x`
                transition: none;
            `),t}}
`,nr=({show:t=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:d=!1,enableOverlayClick:f=!1,zIndex:p,id:h})=>{const[m,g]=u(null),[v,b]=u(),[w]=u((()=>nn.generate())),x=c(),$=c(null),S=o&&a.cloneElement(o,{ref:$}),O=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root";l((()=>(k(),g(D()),()=>{T(),j().length<1&&B("remove")})),[]),l((()=>{if(t){const e=E();F(e),C();const t=setTimeout((()=>{B("add")}),200);return()=>clearTimeout(t)}{T();const e=setTimeout((()=>{j().length<1&&B("remove")}),200);return()=>clearTimeout(e)}}),[t]);const F=e=>{x.current=e,b(e)},D=()=>document&&n?document.getElementById(n):document?document.body:null,E=()=>j().length>0,k=()=>{if(!document.getElementById(rr)){const e=document.createElement("style");e.id=rr;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${or} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${or}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},B=e=>{const t=document.body.classList.contains(or);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(or):document.body.classList.add(or)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},C=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,w].join(",")},T=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==w)).join(",")},R=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&f&&(e.preventDefault(),r())};return m?y.createPortal(e(er,Object.assign({id:O,"data-testid":O,$show:t,zIndex:p,$stacked:v},{children:o&&e(tr,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:i||(v?.5:.8),$backgroundBlur:s,$disableTransition:d,$enableOverlayClick:f,onClick:R},{children:S}))})),m):null},rr="lifesg-ds-overlay-stylesheet",or="lifesg-ds-overlay-open",ir=w.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Rt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,ar=t=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=t,p=C(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,m]=u(),[g,y]=u();l((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),l((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;m(e)},b=()=>{const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)};return e(nr,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:d,id:n,rootId:s,zIndex:c},{children:e(ir,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},p,{children:i}))}))};var sr=Array.isArray,lr="object"==typeof Dt&&Dt&&Dt.Object===Object&&Dt,cr="object"==typeof self&&self&&self.Object===Object&&self,ur=lr||cr||Function("return this")(),dr=ur.Symbol,fr=dr,pr=Object.prototype,hr=pr.hasOwnProperty,mr=pr.toString,gr=fr?fr.toStringTag:void 0;var yr=function(e){var t=hr.call(e,gr),n=e[gr];try{e[gr]=void 0;var r=!0}catch(e){}var o=mr.call(e);return r&&(t?e[gr]=n:delete e[gr]),o},vr=Object.prototype.toString;var br=yr,wr=function(e){return vr.call(e)},xr=dr?dr.toStringTag:void 0;var $r=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xr&&xr in Object(e)?br(e):wr(e)};var Sr=$r,Or=function(e){return null!=e&&"object"==typeof e};var Fr=function(e){return"symbol"==typeof e||Or(e)&&"[object Symbol]"==Sr(e)},Dr=sr,Er=Fr,kr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Br=/^\w*$/;var jr=function(e,t){if(Dr(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Er(e))||(Br.test(e)||!kr.test(e)||null!=t&&e in Object(t))};var Cr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Tr=$r,Rr=Cr;var Ar,Mr=function(e){if(!Rr(e))return!1;var t=Tr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},_r=ur["__core-js_shared__"],Hr=(Ar=/[^.]+$/.exec(_r&&_r.keys&&_r.keys.IE_PROTO||""))?"Symbol(src)_1."+Ar:"";var Lr=function(e){return!!Hr&&Hr in e},zr=Function.prototype.toString;var Ir=Mr,Pr=Lr,Nr=Cr,Wr=function(e){if(null!=e){try{return zr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Yr=/^\[object .+?Constructor\]$/,Vr=Function.prototype,Ur=Object.prototype,qr=Vr.toString,Zr=Ur.hasOwnProperty,Qr=RegExp("^"+qr.call(Zr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Gr=function(e){return!(!Nr(e)||Pr(e))&&(Ir(e)?Qr:Yr).test(Wr(e))},Xr=function(e,t){return null==e?void 0:e[t]};var Jr=function(e,t){var n=Xr(e,t);return Gr(n)?n:void 0},Kr=Jr(Object,"create"),eo=Kr;var to=function(){this.__data__=eo?eo(null):{},this.size=0};var no=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ro=Kr,oo=Object.prototype.hasOwnProperty;var io=function(e){var t=this.__data__;if(ro){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return oo.call(t,e)?t[e]:void 0},ao=Kr,so=Object.prototype.hasOwnProperty;var lo=Kr;var co=to,uo=no,fo=io,po=function(e){var t=this.__data__;return ao?void 0!==t[e]:so.call(t,e)},ho=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=lo&&void 0===t?"__lodash_hash_undefined__":t,this};function mo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}mo.prototype.clear=co,mo.prototype.delete=uo,mo.prototype.get=fo,mo.prototype.has=po,mo.prototype.set=ho;var go=mo;var yo=function(){this.__data__=[],this.size=0};var vo=function(e,t){return e===t||e!=e&&t!=t};var bo=function(e,t){for(var n=e.length;n--;)if(vo(e[n][0],t))return n;return-1},wo=bo,xo=Array.prototype.splice;var $o=function(e){var t=this.__data__,n=wo(t,e);return!(n<0)&&(n==t.length-1?t.pop():xo.call(t,n,1),--this.size,!0)},So=bo;var Oo=function(e){var t=this.__data__,n=So(t,e);return n<0?void 0:t[n][1]},Fo=bo;var Do=bo;var Eo=function(e,t){var n=this.__data__,r=Do(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},ko=yo,Bo=$o,jo=Oo,Co=function(e){return Fo(this.__data__,e)>-1},To=Eo;function Ro(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ro.prototype.clear=ko,Ro.prototype.delete=Bo,Ro.prototype.get=jo,Ro.prototype.has=Co,Ro.prototype.set=To;var Ao=Ro,Mo=Jr(ur,"Map"),_o=go,Ho=Ao,Lo=Mo;var zo=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Io=function(e,t){var n=e.__data__;return zo(t)?n["string"==typeof t?"string":"hash"]:n.map},Po=Io;var No=Io;var Wo=Io;var Yo=Io;var Vo=function(){this.size=0,this.__data__={hash:new _o,map:new(Lo||Ho),string:new _o}},Uo=function(e){var t=Po(this,e).delete(e);return this.size-=t?1:0,t},qo=function(e){return No(this,e).get(e)},Zo=function(e){return Wo(this,e).has(e)},Qo=function(e,t){var n=Yo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Go(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Go.prototype.clear=Vo,Go.prototype.delete=Uo,Go.prototype.get=qo,Go.prototype.has=Zo,Go.prototype.set=Qo;var Xo=Go;function Jo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Jo.Cache||Xo),n}Jo.Cache=Xo;var Ko=Jo;var ei=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ti=/\\(\\)?/g,ni=function(e){var t=Ko(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ei,(function(e,n,r,o){t.push(r?o.replace(ti,"$1"):n||e)})),t}));var ri=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},oi=ri,ii=sr,ai=Fr,si=dr?dr.prototype:void 0,li=si?si.toString:void 0;var ci=function e(t){if("string"==typeof t)return t;if(ii(t))return oi(t,e)+"";if(ai(t))return li?li.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ui=ci;var di=sr,fi=jr,pi=ni,hi=function(e){return null==e?"":ui(e)};var mi=Fr;var gi=function(e,t){return di(e)?e:fi(e,t)?[e]:pi(hi(e))},yi=function(e){if("string"==typeof e||mi(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var vi=function(e,t){for(var n=0,r=(t=gi(t,e)).length;null!=e&&n<r;)e=e[yi(t[n++])];return n&&n==r?e:void 0},bi=vi;var wi=Et((function(e,t,n){var r=null==e?void 0:bi(e,t);return void 0===r?n:r}));const xi=(e,t,n)=>t?wi(n,t)||wi(e,t):n||e,$i=(e,t)=>{const n=t||e.defaultValue;return wi(e.collections,n)};var Si;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Si||(Si={}));const Oi={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Fi=e=>t=>{const n=t.theme,r=$i(Oi,n[Si.colorScheme]);return n.options&&n.options.color?xi(r,e,n.options.color):xi(r,e)},Di={Brand:{1:Fi("Brand.1"),2:Fi("Brand.2"),3:Fi("Brand.3"),4:Fi("Brand.4"),5:Fi("Brand.5"),6:Fi("Brand.6")},Primary:Fi("Primary"),PrimaryDark:Fi("PrimaryDark"),Secondary:Fi("Secondary"),Accent:{Light:{1:Fi("Accent.Light.1"),2:Fi("Accent.Light.2"),3:Fi("Accent.Light.3"),4:Fi("Accent.Light.4"),5:Fi("Accent.Light.5"),6:Fi("Accent.Light.6")},Dark:{1:Fi("Accent.Dark.1"),2:Fi("Accent.Dark.2"),3:Fi("Accent.Dark.3")}},Neutral:{1:Fi("Neutral.1"),2:Fi("Neutral.2"),3:Fi("Neutral.3"),4:Fi("Neutral.4"),5:Fi("Neutral.5"),6:Fi("Neutral.6"),7:Fi("Neutral.7"),8:Fi("Neutral.8")},Validation:{Green:{Text:Fi("Validation.Green.Text"),Icon:Fi("Validation.Green.Icon"),Border:Fi("Validation.Green.Border"),Background:Fi("Validation.Green.Background")},Orange:{Text:Fi("Validation.Orange.Text"),Icon:Fi("Validation.Orange.Icon"),Border:Fi("Validation.Orange.Border"),Background:Fi("Validation.Orange.Background"),Badge:Fi("Validation.Orange.Badge")},Red:{Text:Fi("Validation.Red.Text"),Icon:Fi("Validation.Red.Icon"),Border:Fi("Validation.Red.Border"),Background:Fi("Validation.Red.Background")},Blue:{Text:Fi("Validation.Blue.Text"),Icon:Fi("Validation.Blue.Icon"),Border:Fi("Validation.Blue.Border"),Background:Fi("Validation.Blue.Background")}},Shadow:{Accent:Fi("Shadow.Accent"),Red:Fi("Shadow.Red"),Elevation:Fi("Shadow.Elevation")}},Ei={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ki={collections:{base:{D1:{fontFamily:Ei.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ei.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ei.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ei.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ei.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ei.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ei.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ei.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ei.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ei.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ei.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ei.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ei.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ei.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Bi=e=>t=>{const n=t.theme,r=$i(ki,n[Si.textStyleScheme]);return n.options&&n.options.textStyle?xi(r,e,n.options.textStyle):xi(r,e)},ji={D1:{fontFamily:Bi("D1.fontFamily"),fontSize:Bi("D1.fontSize"),fontWeight:Bi("D1.fontWeight"),lineHeight:Bi("D1.lineHeight"),letterSpacing:Bi("D1.letterSpacing")},D2:{fontFamily:Bi("D2.fontFamily"),fontSize:Bi("D2.fontSize"),fontWeight:Bi("D2.fontWeight"),lineHeight:Bi("D2.lineHeight"),letterSpacing:Bi("D2.letterSpacing")},D3:{fontFamily:Bi("D3.fontFamily"),fontSize:Bi("D3.fontSize"),fontWeight:Bi("D3.fontWeight"),lineHeight:Bi("D3.lineHeight"),letterSpacing:Bi("D3.letterSpacing")},D4:{fontFamily:Bi("D4.fontFamily"),fontSize:Bi("D4.fontSize"),fontWeight:Bi("D4.fontWeight"),lineHeight:Bi("D4.lineHeight"),letterSpacing:Bi("D4.letterSpacing")},DBody:{fontFamily:Bi("DBody.fontFamily"),fontSize:Bi("DBody.fontSize"),fontWeight:Bi("DBody.fontWeight"),lineHeight:Bi("DBody.lineHeight"),letterSpacing:Bi("DBody.letterSpacing")},H1:{fontFamily:Bi("H1.fontFamily"),fontSize:Bi("H1.fontSize"),fontWeight:Bi("H1.fontWeight"),lineHeight:Bi("H1.lineHeight"),letterSpacing:Bi("H1.letterSpacing")},H2:{fontFamily:Bi("H2.fontFamily"),fontSize:Bi("H2.fontSize"),fontWeight:Bi("H2.fontWeight"),lineHeight:Bi("H2.lineHeight"),letterSpacing:Bi("H2.letterSpacing")},H3:{fontFamily:Bi("H3.fontFamily"),fontSize:Bi("H3.fontSize"),fontWeight:Bi("H3.fontWeight"),lineHeight:Bi("H3.lineHeight"),letterSpacing:Bi("H3.letterSpacing")},H4:{fontFamily:Bi("H4.fontFamily"),fontSize:Bi("H4.fontSize"),fontWeight:Bi("H4.fontWeight"),lineHeight:Bi("H4.lineHeight"),letterSpacing:Bi("H4.letterSpacing")},H5:{fontFamily:Bi("H5.fontFamily"),fontSize:Bi("H5.fontSize"),fontWeight:Bi("H5.fontWeight"),lineHeight:Bi("H5.lineHeight"),letterSpacing:Bi("H5.letterSpacing")},H6:{fontFamily:Bi("H6.fontFamily"),fontSize:Bi("H6.fontSize"),fontWeight:Bi("H6.fontWeight"),lineHeight:Bi("H6.lineHeight"),letterSpacing:Bi("H6.letterSpacing")},Body:{fontFamily:Bi("Body.fontFamily"),fontSize:Bi("Body.fontSize"),fontWeight:Bi("Body.fontWeight"),lineHeight:Bi("Body.lineHeight"),letterSpacing:Bi("Body.letterSpacing")},BodySmall:{fontFamily:Bi("BodySmall.fontFamily"),fontSize:Bi("BodySmall.fontSize"),fontWeight:Bi("BodySmall.fontWeight"),lineHeight:Bi("BodySmall.lineHeight"),letterSpacing:Bi("BodySmall.letterSpacing")},XSmall:{fontFamily:Bi("XSmall.fontFamily"),fontSize:Bi("XSmall.fontSize"),fontWeight:Bi("XSmall.fontWeight"),lineHeight:Bi("XSmall.lineHeight"),letterSpacing:Bi("XSmall.letterSpacing")}},Ci=e=>{switch(e){case 700:case"bold":return Ei.Bold;case 600:case"semibold":return Ei.Semibold;case 300:case"light":return Ei.Light;case 400:case"regular":return Ei.Regular;default:return""}},Ti=(e,t)=>n=>{var r;const o=ji[e].fontFamily(n),i=ji[e].fontWeight(n);return Object.values(Ei).includes(o)?x`
                font-family: ${Ci(t)||Ci(i)||o};
                font-weight: normal !important;
            `:x`
            font-family: ${o};
            font-weight: ${null!==(r=Ri(t)||i)&&void 0!==r?r:"normal"};
        `},Ri=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ai=e=>{if(e>0)return x`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Mi=Ti,_i=(e,t,n=!1)=>r=>{const o=ji[e],i=o.fontSize(r);return x`
            ${Ti(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${x`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Hi=(e=!1,t=!1,n=void 0)=>t?x`
            display: block;
            ${Ai(n)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${Ai(n)}
        `;var Li;!function(e){e.D1=w.h1`
        ${e=>x`
                ${_i("D1",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=w.h1`
        ${e=>x`
                ${_i("D2",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=w.h1`
        ${e=>x`
                ${_i("D3",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=w.h1`
        ${e=>x`
                ${_i("D4",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=w.h1`
        ${e=>x`
                ${_i("DBody",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=w.h1`
        ${e=>x`
                ${_i("H1",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=w.h2`
        ${e=>x`
                ${_i("H2",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=w.h3`
        ${e=>x`
                ${_i("H3",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=w.h4`
        ${e=>x`
                ${_i("H4",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=w.h5`
        ${e=>x`
                ${_i("H5",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=w.h6`
        ${e=>x`
                ${_i("H6",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=w.p`
        ${e=>x`
                ${_i("Body",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=w.p`
        ${e=>x`
                ${_i("BodySmall",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=w.span`
        ${e=>x`
                ${_i("XSmall",e.weight,e.paragraph)}
                color: ${Di.Neutral[1]};
                ${Hi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Pi(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Pi(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Li||(Li={}));const zi=w.a`
    ${e=>x`
            ${_i(e.textStyle,e.weight)}
            color: ${Di.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Di.Secondary};

                svg {
                    color: ${Di.Secondary};
                }
            }
        `}
`,Ii=w(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Pi=n=>{var{external:r=!1,children:o}=n,i=C(n,["external","children"]);return t(zi,Object.assign({},i,{children:[o,r&&e(Ii,{})]}))},Ni=w.div`
    border-radius: 0.5rem;
    background: ${Di.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Wi=w.button`
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

        ${({$highlight:e})=>e&&x`
                background-color: ${Di.Neutral[7]};
            `}
    }
`,Yi=a.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=C(t,["children","focusHighlight","focusOutline","type"]);return e(Wi,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),Vi=w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Di.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Rt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Ui=w(Yi)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Di.Accent.Light[1]};
    }
`,qi=w(O)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Di.Neutral[3]};
`;var Zi;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Zi||(Zi={}));const Qi=e=>{const{textSize:t}=e||{};return x`
        // Text styling
        ${t&&_i(t,"regular")}

        strong {
            font-family: ${Ei.Semibold};
            ${t&&_i(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Ei.Semibold};
            ${t&&_i(t,"semibold")}
            color: ${Di.Primary};
            text-decoration: none;

            svg {
                color: ${Di.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Di.Secondary};

                svg {
                    color: ${Di.Secondary};
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
    `},Gi=w.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Xi=w((t=>{var{children:n}=t,r=C(t,["children"]);const o=r["data-testid"]||"card";return e(Ni,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?e(Li.Body,{children:n}):n}))}))`
    color: ${Di.Neutral[1]};
    ${Qi({textSize:"BodySmall"})}

    ${Rt.mobileL} {
        display: none;
    }
`,Ji=w((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=C(n,["id","children","onClose","showCloseButton"]);return t(Vi,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(Ui,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e(qi,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Ki=w.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Di.Neutral[1]};
    ${Qi({textSize:"BodySmall"})}
`,ea=r=>{var{children:o,visible:i,onMobileClose:a}=r,s=C(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=jt.useMediaQuery({maxWidth:Ct.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof o?e(Li.BodySmall,{children:o}):o;return t(n,{children:[i&&e(Gi,Object.assign({"data-testid":l},s,{children:e(Xi,{children:d()})})),c&&e(ar,Object.assign({show:i,onOverlayClick:u},{children:e(Ji,Object.assign({onClose:u},{children:e(Ki,{children:d()})}))}))]})},ta=w.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,na=r=>{var{children:o,popoverContent:i,trigger:a="click",position:s="top",zIndex:d,rootNode:f,onPopoverAppear:p,onPopoverDismiss:h}=r,m=C(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[g,y]=u(!1),v=c(),b=c(),w=jt.useMediaQuery({maxWidth:At.mobileL}),{refs:x,floatingStyles:$}=Ft({open:g,placement:s,whileElementsMounted:Be,middleware:[me(16),Ce(),je({limiter:Te()})]});l((()=>{if(!w&&g)return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}}),[g]);const S=e=>{var t,n;(null===(t=v.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=b.current)||void 0===n?void 0:n.contains(e.target))||(y(!1),h&&h())},O=()=>{y(!1)};return t(n,{children:[g&&e($t,Object.assign({root:f},{children:e("div",Object.assign({ref:e=>{b.current=e,x.setFloating(e)},style:Object.assign(Object.assign({},$),{zIndex:d})},{children:"function"==typeof i?i():e(ea,Object.assign({visible:!0,onMobileClose:O},{children:i}))}))})),e(ta,Object.assign({ref:e=>{v.current=e,x.setReference(e)},onClick:e=>{e.preventDefault(),("click"===a||w)&&(y(!g),!g&&p&&p(),g&&h&&h())},onMouseEnter:()=>{"hover"!==a||w||y(!0)},onMouseLeave:()=>{"hover"===a&&g&&!w&&y(!1)}},m,{children:o}))]})},ra=w.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Di.Primary};
    }
`,oa=w.div`
    display: inline;
    position: relative;
    width: fit-content;
`,ia=({addon:t,rootNode:n})=>{const{content:r,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(na,Object.assign({trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s},{children:e(oa,{children:e(ra,{children:i||e(m,{id:`${o}-icon`})})})}))},aa=w.label`
    ${_i("H5","semibold")}
    color: ${Di.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${_i("H5","semibold")}
    }

    a {
        color: ${Di.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${Di.Secondary};

            svg {
                color: ${Di.Secondary};
            }
        }
    }
`;w(Li.H6)`
    color: ${Di.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const sa=w(Li.BodySmall)`
    && {
        color: ${Di.Neutral[3]};
        ${Mi("BodySmall","regular")}
    }
`,la=n=>{var{children:r,addon:o,subtitle:i,"data-testid":a}=n,s=C(n,["children","addon","subtitle","data-testid"]);return t(aa,Object.assign({},s,{children:[r,o&&o.type&&("popover"===o.type?e(ia,{addon:o}):null),"string"==typeof i?e(sa,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},ca=w.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,ua=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,da=w.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Di.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ua} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,fa=w(da)`
    animation-delay: -0.45s;
`,pa=w(da)`
    animation-delay: -0.3s;
`,ha=w(da)`
    animation-delay: -0.15s;
`,ma=w.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Di.Validation.Red.Background(e),n=Di.Validation.Red.Border(e);break;case"success":t=Di.Validation.Green.Background(e),n=Di.Validation.Green.Border(e);break;case"warning":default:t=Di.Validation.Orange.Background(e),n=Di.Validation.Orange.Border(e);break;case"info":t=Di.Validation.Blue.Background(e),n=Di.Validation.Blue.Border(e);break;case"description":t=Di.Neutral[7](e),n=Di.Neutral[4](e)}return x`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Di.Neutral[1]};
    ${e=>"small"===e.$sizeType?Qi({textSize:"H6"}):Qi({textSize:"BodySmall"})}
`,ga=w.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&x`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Di.Validation.Red.Icon(e);break;case"success":t=Di.Validation.Green.Icon(e);break;case"warning":default:t=Di.Validation.Orange.Icon(e);break;case"info":t=Di.Validation.Blue.Icon(e);break;case"description":t=Di.Neutral[4](e)}return x`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,ya=w(Li.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?x`
                ${_i("H6","semibold")}
                margin-top: 0.25rem;
            `:x`
                ${_i("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Di.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Di.Primary};
    }
`,va=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ba=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,wa=w.button`
    ${e=>"small"===e.$sizeType?x`
                ${_i("H6","semibold")}
            `:x`
                ${_i("H5","semibold")}
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

    color: ${Di.Primary};
`,xa=w(j)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,$a=w.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return x`
                    grid-column: auto / span 4;
                `;case"full":return x`
                    grid-column: auto / span 8;
                `}}}

    ${Rt.tablet} {
        grid-column: auto / span 8;
    }

    ${Rt.mobileL} {
        grid-column: auto / span 4;
    }
`,Sa=w.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Di.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,Oa=w.button`
    ${_i("Body","regular")}
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
`,Fa=w.span`
    color: ${Di.Neutral[3]};
`,Da=w((({color:n,className:r,size:o=18})=>t(ca,Object.assign({className:r,$size:o,$color:n},{children:[e(da,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),e(fa,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),e(pa,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),e(ha,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${Di.Neutral[3]} transparent transparent transparent;
    }
`,Ea=w(F)`
    color: ${Di.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,ka=w.span`
    color: ${Di.Validation.Orange.Text};
`,Ba=w.span`
    ${_i("Body","semibold")}
    color: ${Di.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,ja=w((n=>{var{type:r,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:d="default",showIcon:f=!1,customIcon:p,maxCollapsedHeight:h}=n,g=C(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[y,v]=u(!1),[b,w]=u(!1),{height:x,ref:$}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,d=e.handleHeight,f=void 0===d||d,p=e.targetRef,h=e.observerOptions,m=e.onResize,g=c(n),y=c(null),v=null!=p?p:y,b=c(),w=u({width:void 0,height:void 0}),x=w[0],$=w[1];return Kn((function(){if(!Gn()){var e=Jn(m,$,l,f);b.current=Zn((function(t){(l||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!Gn()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,l,f,m,h,v.current]),an({ref:v},x)}();l((()=>{S()}),[h,x]);const S=()=>{v(!h),w(O())},O=()=>!!h&&x>h;return t(ma,Object.assign({className:o,$type:r,$sizeType:d,"data-testid":g["data-testid"]},{children:[f&&e(ga,Object.assign({$sizeType:d,$type:r},{children:(()=>{if(r&&p)return p;switch(r){case"success":return e(B,{});case"warning":return e(k,{});case"error":return e(E,{});case"info":case"description":return e(m,{});default:return null}})()})),t(va,{children:[t(ba,Object.assign({$maxCollapsedHeight:O()?h:void 0,$showMore:y,$hasActionLink:!!a},{children:[e("div",Object.assign({ref:$},{children:i})),a&&t(ya,Object.assign({"data-testid":"action-link",$type:r,$sizeType:d},a,{children:[a.children,s||e(D,{})]}))]})),b&&t(wa,Object.assign({$sizeType:d,$type:r,type:"button",onClick:()=>v(!y)},{children:["Show ",y?"less":"more",e(xa,{$expanded:y})]}))]})]}))}))`
    margin-top: 0.5rem;
`,Ca=({label:i,value:a,displayWidth:s="full",maskState:c,maskLoadingState:d,maskChar:f="•",maskRange:p,unmaskRange:h,maskRegex:m,disableMaskUnmask:g,alert:y,maskTransformer:v,onMask:b,onUnmask:w,onTryAgain:x})=>{const[$,S]=u(c);l((()=>{S(c)}),[c]);const O=()=>{switch("fail"===d&&x&&x(),$){case"masked":w&&w(),S("unmasked");break;case"unmasked":b&&b(),S("masked")}},F=()=>"masked"===$?rn.maskValue(a,{maskChar:f,maskRange:p,unmaskRange:h,maskRegex:m,maskTransformer:v}):a,D=()=>{switch(d){case"fail":return t(n,{children:[e(Ea,{}),e(ka,{children:"Error"}),e(Ba,{children:"Try again?"})]});case"loading":return t(n,{children:[e(Da,{}),e(Fa,{children:"Retrieving..."})]});default:return t(n,{children:[F(),e(Sa,{children:"masked"===$?e(r,{"data-testid":"masked-icon"}):e(o,{"data-testid":"unmasked-icon"})})]})}};return t($a,Object.assign({$widthStyle:s},{children:[e(la,{children:i}),$?g?e(Li.Body,{children:F()}):e(Oa,Object.assign({"data-testid":"clickable-label",onClick:O,"aria-busy":"loading"===d,"aria-live":"polite",type:"button"},{children:D()})):e(Li.Body,{children:a}),y&&e(ja,Object.assign({sizeType:"small"},y))]}))},Ta=w.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return x`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Rt.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Rt.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`,Ra=a.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=C(t,["mobileCols","tabletCols","desktopCols"]);return e(Ta,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=Aa(i||o||r),a=Aa(e),s=Aa(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Aa=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Ma=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,s=C(t,["children","data-testid","type","stretch"]);return e(_a,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},s,{children:r}))})),_a=w.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?x`
                padding: 0 3rem;
            `:x`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Rt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Rt.tablet} {
        max-width: 720px;
    }
    ${Rt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return x`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Rt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Rt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return x`
                    display: flex;
                    flex-direction: column;
                `;default:return x`
                    display: flex;
                `}}}
`,Ha=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=C(t,["children","data-testid","stretch"]);return e(La,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),La=w.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?x`
                ${Rt.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:x`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,za=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:s=!1}=t,l=C(t,["children","data-testid","className","type","stretch"]);return e(Ha,Object.assign({ref:n,"data-testid":o,className:i,stretch:s},l,{children:e(Ma,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),Ia=w({Section:Ha,Container:Ma,Content:za,ColDiv:Ra}.Content)`
    background: ${({$background:e})=>e?Di.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,Pa=w(Li.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`,Na=w(Li.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`,Wa=w.div`
    grid-column: span 8;
`,Ya=w.ul`
    grid-column: span 8;
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${Rt.tablet} {
        column-gap: 1.5rem;
    }

    ${Rt.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,Va=Object.assign((r=>{var{items:o,title:i,description:a,topSection:s,bottomSection:l,children:c,background:u=!0,onMask:d,onUnmask:f,onTryAgain:p}=r,h=C(r,["items","title","description","topSection","bottomSection","children","background","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{d&&d(e)},g=e=>()=>{f&&f(e)},y=e=>()=>{p&&p(e)},v=()=>{if(o&&o.length>0){const t=o.map(((t,n)=>e(Ca,Object.assign({},t,{onMask:m(t),onUnmask:g(t),onTryAgain:y(t)}),n)));return e(Ya,{children:t})}return null};return e(Ia,Object.assign({$background:u},h,{type:"grid"},{children:c||t(n,{children:[i&&e(Pa,Object.assign({weight:"semibold"},{children:i})),a&&e(Na,{children:a}),s&&e(Wa,Object.assign({"data-id":"top-section"},{children:s})),v(),l&&e(Wa,Object.assign({"data-id":"bottom-section"},{children:l}))]})}))}),{ItemSection:Ya,Item:Ca});export{Va as UneditableSection};
//# sourceMappingURL=index.js.map
