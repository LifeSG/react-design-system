import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import{EyeIcon as r}from"@lifesg/react-icons/eye";import{EyeSlashIcon as o}from"@lifesg/react-icons/eye-slash";import*as i from"react";import a,{useLayoutEffect as s,useEffect as l,useRef as c,useState as u,isValidElement as d,createRef as f,cloneElement as p,PureComponent as h}from"react";import{ICircleFillIcon as m}from"@lifesg/react-icons/i-circle-fill";import*as g from"react-dom";import y,{createPortal as v,findDOMNode as b}from"react-dom";import w,{css as x,keyframes as $}from"styled-components";import{ExternalIcon as S}from"@lifesg/react-icons/external";import{CrossIcon as O}from"@lifesg/react-icons/cross";import{ExclamationTriangleIcon as F}from"@lifesg/react-icons/exclamation-triangle";import{ArrowRightIcon as D}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as E}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as k}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as B}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as j}from"@lifesg/react-icons";function C(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function R(e){return A(e)?(e.nodeName||"").toLowerCase():"#document"}function T(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function M(e){var t;return null==(t=(A(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function A(e){return e instanceof Node||e instanceof T(e).Node}function _(e){return e instanceof Element||e instanceof T(e).Element}function H(e){return e instanceof HTMLElement||e instanceof T(e).HTMLElement}function L(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof T(e).ShadowRoot)}function z(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Y(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function I(e){return["table","td","th"].includes(R(e))}function P(e){const t=N(),n=Y(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function N(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function W(e){return["html","body","#document"].includes(R(e))}function Y(e){return T(e).getComputedStyle(e)}function V(e){return _(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function U(e){if("html"===R(e))return e;const t=e.assignedSlot||e.parentNode||L(e)&&e.host||M(e);return L(t)?t.host:t}function q(e){const t=U(e);return W(t)?e.ownerDocument?e.ownerDocument.body:e.body:H(t)&&z(t)?t:q(t)}function Z(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=q(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=T(o);return i?t.concat(a,a.visualViewport||[],z(o)?o:[],a.frameElement&&n?Z(a.frameElement):[]):t.concat(o,Z(o,[],n))}"function"==typeof SuppressedError&&SuppressedError;const Q=Math.min,G=Math.max,X=Math.round,J=Math.floor,K=e=>({x:e,y:e}),ee={left:"right",right:"left",bottom:"top",top:"bottom"},te={start:"end",end:"start"};function ne(e,t,n){return G(e,Q(t,n))}function re(e,t){return"function"==typeof e?e(t):e}function oe(e){return e.split("-")[0]}function ie(e){return e.split("-")[1]}function ae(e){return"x"===e?"y":"x"}function se(e){return"y"===e?"height":"width"}function le(e){return["top","bottom"].includes(oe(e))?"y":"x"}function ce(e){return ae(le(e))}function ue(e){return e.replace(/start|end/g,(e=>te[e]))}function de(e){return e.replace(/left|right|bottom|top/g,(e=>ee[e]))}function fe(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function pe(e,t,n){let{reference:r,floating:o}=e;const i=le(t),a=ce(t),s=se(a),l=oe(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let p;switch(l){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-o.width,y:d};break;default:p={x:r.x,y:r.y}}switch(ie(t)){case"start":p[a]-=f*(n&&c?-1:1);break;case"end":p[a]+=f*(n&&c?-1:1)}return p}async function he(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=re(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(p),m=s[f?"floating"===d?"reference":"floating":d],g=fe(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=fe(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}function me(e){const t=Y(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=H(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=X(n)!==i||X(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function ge(e){return _(e)?e:e.contextElement}function ye(e){const t=ge(e);if(!H(t))return K(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=me(t);let a=(i?X(n.width):n.width)/r,s=(i?X(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const ve=K(0);function be(e){const t=T(e);return N()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ve}function we(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=ge(e);let a=K(1);t&&(r?_(r)&&(a=ye(r)):a=ye(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==T(e))&&t}(i,n,r)?be(i):K(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=T(i),t=r&&_(r)?T(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=ye(o),t=o.getBoundingClientRect(),r=Y(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=i,c+=a,n=T(o),o=n.frameElement}}return fe({width:u,height:d,x:l,y:c})}const xe=[":popover-open",":modal"];function $e(e){return xe.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Se(e){return we(M(e)).left+V(e).scrollLeft}function Oe(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=T(e),r=M(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=N();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=M(e),n=V(e),r=e.ownerDocument.body,o=G(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=G(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Se(e);const s=-n.scrollTop;return"rtl"===Y(r).direction&&(a+=G(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(M(e));else if(_(t))r=function(e,t){const n=we(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=H(e)?ye(e):K(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=be(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return fe(r)}function Fe(e,t){const n=U(e);return!(n===t||!_(n)||W(n))&&("fixed"===Y(n).position||Fe(n,t))}function De(e,t,n){const r=H(t),o=M(t),i="fixed"===n,a=we(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=K(0);if(r||!r&&!i)if(("body"!==R(t)||z(o))&&(s=V(t)),r){const e=we(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=Se(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function Ee(e){return"static"===Y(e).position}function ke(e,t){return H(e)&&"fixed"!==Y(e).position?t?t(e):e.offsetParent:null}function Be(e,t){const n=T(e);if($e(e))return n;if(!H(e)){let t=U(e);for(;t&&!W(t);){if(_(t)&&!Ee(t))return t;t=U(t)}return n}let r=ke(e,t);for(;r&&I(r)&&Ee(r);)r=ke(r,t);return r&&W(r)&&Ee(r)&&!P(r)?n:r||function(e){let t=U(e);for(;H(t)&&!W(t);){if(P(t))return t;t=U(t)}return null}(e)||n}const je={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=M(r),s=!!t&&$e(t.floating);if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},c=K(1);const u=K(0),d=H(r);if((d||!d&&!i)&&(("body"!==R(r)||z(a))&&(l=V(r)),H(r))){const e=we(r);c=ye(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}},getDocumentElement:M,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?$e(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Z(e,[],!1).filter((e=>_(e)&&"body"!==R(e))),o=null;const i="fixed"===Y(e).position;let a=i?U(e):e;for(;_(a)&&!W(a);){const t=Y(a),n=P(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||z(a)&&!n&&Fe(e,a))?r=r.filter((e=>e!==a)):o=t,a=U(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=Oe(t,n,o);return e.top=G(r.top,e.top),e.right=Q(r.right,e.right),e.bottom=Q(r.bottom,e.bottom),e.left=G(r.left,e.left),e}),Oe(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Be,getElementRects:async function(e){const t=this.getOffsetParent||Be,n=this.getDimensions,r=await n(e.floating);return{reference:De(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=me(e);return{width:t,height:n}},getScale:ye,isElement:_,isRTL:function(e){return"rtl"===Y(e).direction}};function Ce(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=ge(e),u=o||i?[...c?Z(c):[],...Z(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=M(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const p={rootMargin:-J(u)+"px "+-J(o.clientWidth-(c+d))+"px "+-J(o.clientHeight-(u+f))+"px "+-J(c)+"px",threshold:G(0,Q(1,l))||1};let h=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!h)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}h=!1}try{r=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,p)}r.observe(e)}(!0),i}(c,n):null;let f,p=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var e;null==(e=h)||e.observe(t)}))),n()})),c&&!l&&h.observe(c),h.observe(t));let m=l?we(e):null;return l&&function t(){const r=we(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=h)||e.disconnect(),h=null,l&&cancelAnimationFrame(f)}}const Re=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=oe(n),s=ie(n),l="y"===le(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=re(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof h&&(p="end"===s?-1*h:h),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},Te=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=re(e,t),c={x:n,y:r},u=await he(t,l),d=le(oe(o)),f=ae(d);let p=c[f],h=c[d];if(i){const e="y"===f?"bottom":"right";p=ne(p+u["y"===f?"top":"left"],p,p-u[e])}if(a){const e="y"===d?"bottom":"right";h=ne(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[f]:p,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Me=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=re(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=oe(o),v=oe(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=f||(v||!m?[de(s)]:function(e){const t=de(e);return[ue(e),t,ue(t)]}(s));f||"none"===h||w.push(...function(e,t,n,r){const o=ie(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(oe(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(ue)))),i}(s,m,h,b));const x=[s,...w],$=await he(t,g),S=[];let O=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&S.push($[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=ie(e),o=ce(e),i=se(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=de(a)),[a,de(a)]}(o,a,b);S.push($[e[0]],$[e[1]])}if(O=[...O,{placement:o,overflows:S}],!S.every((e=>e<=0))){var F,D;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:O},reset:{placement:t}};let n=null==(D=O.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:D.placement;if(!n)switch(p){case"bestFit":{var E;const e=null==(E=O.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},Ae=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=re(e,t),u={x:n,y:r},d=le(o),f=ae(d);let p=u[f],h=u[d];const m=re(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(oe(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[f]:p,[d]:h}}}},_e=(e,t,n)=>{const r=new Map,o={platform:je,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=pe(c,r,l),f=r,p={},h=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,p={...p,[i]:{...p[i],...v}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=pe(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var He="undefined"!=typeof document?s:l;function Le(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Le(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Le(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ze(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ie(e,t){const n=ze(e);return Math.round(t*n)/n}function Pe(e){const t=i.useRef(e);return He((()=>{t.current=e})),t}const Ne=(e,t)=>({...Te(e),options:[e,t]}),We=(e,t)=>({...Ae(e),options:[e,t]}),Ye=(e,t)=>({...Me(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var Ve=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Ue="undefined"==typeof Element,qe=Ue?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Ze=!Ue&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},Qe=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Ge=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Qe(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{qe.call(a,Ve)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!Qe(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Xe=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Je=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Xe(e)?0:e.tabIndex},Ke=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},et=function(e){return"INPUT"===e.tagName},tt=function(e){return function(e){return et(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Ze(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},nt=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},rt=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=qe.call(e,"details>summary:first-of-type")?e.parentElement:e;if(qe.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return nt(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=Ze(e);if(a&&!a.shadowRoot&&!0===r(a))return nt(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&Ze(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=Ze(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},ot=function(e,t){return!(t.disabled||Qe(t)||function(e){return et(e)&&"hidden"===e.type}(t)||rt(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!qe.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},it=function(e,t){return!(tt(t)||Je(t)<0||!ot(e,t))},at=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},st=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=Je(e);return n<0&&t&&!Xe(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort(Ke).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},lt=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Ge([e],t.includeContainer,{filter:it.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:at}):function(e,t,n){if(Qe(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Ve));return t&&qe.call(e,Ve)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,it.bind(null,t)),st(n)};const ct={...i},ut=ct.useInsertionEffect||(e=>e());var dt="undefined"!=typeof document?s:l;function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ft.apply(this,arguments)}let pt=!1,ht=0;const mt=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+ht++;const gt=ct.useId||function(){const[e,t]=i.useState((()=>pt?mt():void 0));return dt((()=>{null==e&&t(mt())}),[]),i.useEffect((()=>{pt=!0}),[]),e};let yt;"production"!==process.env.NODE_ENV&&(yt=new Set);const vt=i.createContext(null),bt=i.createContext(null),wt=()=>{var e;return(null==(e=i.useContext(vt))?void 0:e.id)||null};function xt(e){return"data-floating-ui-"+e}const $t=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function St(e,t){const n=lt(e,$t());"prev"===t&&n.reverse();const r=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(o=e)?void 0:o.ownerDocument)||document));var o;return n.slice(r+1)[0]}function Ot(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&L(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,r)}function Ft(e){lt(e,$t()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function Dt(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const Et={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function kt(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const Bt=i.forwardRef((function(e,t){const[n,r]=i.useState();dt((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",kt),()=>{document.removeEventListener("keydown",kt)})),[]);const o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[xt("focus-guard")]:"",style:Et};return i.createElement("span",ft({},e,o))})),jt=i.createContext(null),Ct=xt("portal");function Rt(e){const{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,r=gt(),o=Tt(),[a,s]=i.useState(null),l=i.useRef(null);return dt((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{l.current=null}))}),[a]),dt((()=>{if(!r)return;if(l.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=r,n.setAttribute(Ct,""),e.appendChild(n),l.current=n,s(n)}),[t,r]),dt((()=>{if(!r)return;if(l.current)return;let e=n||(null==o?void 0:o.portalNode);e&&!_(e)&&(e=e.current),e=e||document.body;let i=null;t&&(i=document.createElement("div"),i.id=t,e.appendChild(i));const a=document.createElement("div");a.id=r,a.setAttribute(Ct,""),e=i||e,e.appendChild(a),l.current=a,s(a)}),[t,n,r,o]),a}({id:n,root:r}),[s,l]=i.useState(null),c=i.useRef(null),u=i.useRef(null),d=i.useRef(null),f=i.useRef(null),p=!!s&&!s.modal&&s.open&&o&&!(!r&&!a);return i.useEffect((()=>{if(a&&o&&(null==s||!s.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&Ot(e)){("focusin"===e.type?Dt:Ft)(a)}}}),[a,o,null==s?void 0:s.modal]),i.createElement(jt.Provider,{value:i.useMemo((()=>({preserveTabOrder:o,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:l})),[o,a])},p&&a&&i.createElement(Bt,{"data-type":"outside",ref:c,onFocus:e=>{if(Ot(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=St(document.body,"prev")||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),p&&a&&i.createElement("span",{"aria-owns":a.id,style:Et}),a&&v(t,a),p&&a&&i.createElement(Bt,{"data-type":"outside",ref:u,onFocus:e=>{if(Ot(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=St(document.body,"next")||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const Tt=()=>i.useContext(jt);function Mt(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=gt(),a=i.useRef({}),[s]=i.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),l=null!=wt();if("production"!==process.env.NODE_ENV){const e=r.reference;e&&!_(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=yt)&&e.has(o)||(null==(i=yt)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=i.useState(r.reference),d=function(e){const t=i.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return ut((()=>{t.current=e})),i.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}(((e,t,r)=>{a.current.openEvent=e?t:void 0,s.emit("openchange",{open:e,event:t,reason:r,nested:l}),null==n||n(e,t,r)})),f=i.useMemo((()=>({setPositionReference:u})),[]),p=i.useMemo((()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference})),[c,r.reference,r.floating]);return i.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:p,events:s,floatingId:o,refs:f})),[t,d,p,s,o,f])}function At(e){void 0===e&&(e={});const{nodeId:t}=e,n=Mt({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[a,s]=i.useState(null),[l,c]=i.useState(null),u=(null==o?void 0:o.reference)||a,d=i.useRef(null),f=i.useContext(bt);dt((()=>{u&&(d.current=u)}),[u]);const p=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,f]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=i.useState(r);Le(p,r)||h(r);const[m,y]=i.useState(null),[v,b]=i.useState(null),w=i.useCallback((e=>{e!==O.current&&(O.current=e,y(e))}),[]),x=i.useCallback((e=>{e!==F.current&&(F.current=e,b(e))}),[]),$=a||m,S=s||v,O=i.useRef(null),F=i.useRef(null),D=i.useRef(d),E=null!=c,k=Pe(c),B=Pe(o),j=i.useCallback((()=>{if(!O.current||!F.current)return;const e={placement:t,strategy:n,middleware:p};B.current&&(e.platform=B.current),_e(O.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};C.current&&!Le(D.current,t)&&(D.current=t,g.flushSync((()=>{f(t)})))}))}),[p,t,n,B]);He((()=>{!1===u&&D.current.isPositioned&&(D.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const C=i.useRef(!1);He((()=>(C.current=!0,()=>{C.current=!1})),[]),He((()=>{if($&&(O.current=$),S&&(F.current=S),$&&S){if(k.current)return k.current($,S,j);j()}}),[$,S,j,k,E]);const R=i.useMemo((()=>({reference:O,floating:F,setReference:w,setFloating:x})),[w,x]),T=i.useMemo((()=>({reference:$,floating:S})),[$,S]),M=i.useMemo((()=>{const e={position:n,left:0,top:0};if(!T.floating)return e;const t=Ie(T.floating,d.x),r=Ie(T.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...ze(T.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,T.floating,d.x,d.y]);return i.useMemo((()=>({...d,update:j,refs:R,elements:T,floatingStyles:M})),[d,j,R,T,M])}({...e,elements:{...o,...l&&{reference:l}}}),h=i.useCallback((e=>{const t=_(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),p.refs.setReference(t)}),[p.refs]),m=i.useCallback((e=>{(_(e)||null===e)&&(d.current=e,s(e)),(_(p.refs.reference.current)||null===p.refs.reference.current||null!==e&&!_(e))&&p.refs.setReference(e)}),[p.refs]),y=i.useMemo((()=>({...p.refs,setReference:m,setPositionReference:h,domReference:d})),[p.refs,m,h]),v=i.useMemo((()=>({...p.elements,domReference:u})),[p.elements,u]),b=i.useMemo((()=>({...p,...r,refs:y,elements:v,nodeId:t})),[p,y,v,t,r]);return dt((()=>{r.dataRef.current.floatingContext=b;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=b)})),i.useMemo((()=>({...p,context:b,refs:y,elements:v})),[p,y,v,b])}var _t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ht(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lt,zt={exports:{}};Lt=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case l:case d:case m:case h:case s:return g;default:return t}}case r:return t}}}var x=c,$=u,S=l,O=s,F=n,D=d,E=o,k=m,B=h,j=r,C=a,R=i,T=f,M=!1;function A(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=O,t.Element=F,t.ForwardRef=D,t.Fragment=E,t.Lazy=k,t.Memo=B,t.Portal=j,t.Profiler=C,t.StrictMode=R,t.Suspense=T,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||w(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var It=zt.exports=Lt(a);const Pt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Nt=e=>Object.keys(Pt).reduce(((t,n)=>{const r=Pt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Wt=Nt("max-width"),Yt=(Nt("min-width"),Pt);var Vt={exports:{}};Vt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],p=u&&u[1];a[l]=p?{regex:f,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(o||i?1:p.getDate()),m=o||p.getFullYear(),g=0;o&&!i||(g=i>0?i-1:p.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,h,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,y,v,b,w)):new Date(m,g,h,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ut,qt,Zt=Ht(Vt.exports),Qt={exports:{}},Gt=Ht(Qt.exports=(Ut={year:0,month:1,day:2,hour:3,minute:4,second:5},qt={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=qt[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),qt[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Ut[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,p=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Xt={exports:{}};Xt.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[x])},S=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},O=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=S,F.i=$,F.w=function(e,t){return O(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=O(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return O(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<O(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),p=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},h=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return p(r?y-w:y+(6-w),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case i:return h(v+"Seconds",2);case o:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],h=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,p=this;r=Number(r);var h=F.p(u),m=function(e){var t=O(p);return F.w(t.date(t.date()+Math.round(e*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===s)return m(1);if(h===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[h]||1,y=this.$d.getTime()+r*g;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return F.s(i%12||12,e,"0")},h=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return s+1;case"MM":return F.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return F.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(i,a,!0);case"A":return h(i,a,!1);case"m":return String(a);case"mm":return F.s(a,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=this,g=F.p(f),y=O(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return F.m(m,y)};switch(g){case d:h=w()/12;break;case c:h=w();break;case u:h=w()/3;break;case l:h=(b-v)/6048e5;break;case s:h=(b-v)/864e5;break;case a:h=b/n;break;case i:h=b/t;break;case o:h=b/e;break;default:h=b}return p?h:F.a(h)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),E=D.prototype;return O.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),O.extend=function(e,t){return e.$i||(e(t,D,O),e.$i=!0),O},O.locale=S,O.isDayjs=$,O.unix=function(e){return O(1e3*e)},O.en=w[b],O.Ls=w,O.p={},O}();var Jt=Ht(Xt.exports),Kt={exports:{}};Kt.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var en=Ht(Kt.exports),tn={exports:{}};tn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var nn=Ht(tn.exports),rn={exports:{}};rn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var on,an=Ht(rn.exports);Jt.extend(en),Jt.extend(nn),Jt.extend(an),Jt.extend(Zt),Jt.extend(Gt),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Jt(t).startOf("week");return sn(n).map((e=>ln(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ln(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Jt(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Jt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Jt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Jt(r):void 0,o?Jt(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(on||(on={}));const sn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},ln=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},cn=[1,3,5,7,8,10,12],un=[4,6,9,11];var dn,fn,pn,hn;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":cn.includes(i)?Math.min(o,31).toString():un.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Jt(e,n);return Jt(t,n).diff(r,"minute")},e.toDayjs=e=>e?Jt(e):Jt(),e.addMinutesToTime=(e,t,n="HH:mm")=>Jt(e,n).add(t,"minutes").format(n)}(dn||(dn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Jt(e).isBefore(r,"day"))||!(!o||!Jt(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Jt(e).isValid())return e}return""}}(fn||(fn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(pn||(pn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(hn||(hn={}));var mn=function(e,t){return mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},mn(e,t)};var gn=function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},gn.apply(this,arguments)};var yn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var vn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},bn="object"==typeof yn&&yn&&yn.Object===Object&&yn,wn="object"==typeof self&&self&&self.Object===Object&&self,xn=bn||wn||Function("return this")(),$n=xn,Sn=function(){return $n.Date.now()},On=/\s/;var Fn=function(e){for(var t=e.length;t--&&On.test(e.charAt(t)););return t},Dn=Fn,En=/^\s+/;var kn=function(e){return e?e.slice(0,Dn(e)+1).replace(En,""):e},Bn=xn.Symbol,jn=Bn,Cn=Object.prototype,Rn=Cn.hasOwnProperty,Tn=Cn.toString,Mn=jn?jn.toStringTag:void 0;var An=function(e){var t=Rn.call(e,Mn),n=e[Mn];try{e[Mn]=void 0;var r=!0}catch(e){}var o=Tn.call(e);return r&&(t?e[Mn]=n:delete e[Mn]),o},_n=Object.prototype.toString;var Hn=An,Ln=function(e){return _n.call(e)},zn=Bn?Bn.toStringTag:void 0;var In=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":zn&&zn in Object(e)?Hn(e):Ln(e)},Pn=function(e){return null!=e&&"object"==typeof e};var Nn=kn,Wn=vn,Yn=function(e){return"symbol"==typeof e||Pn(e)&&"[object Symbol]"==In(e)},Vn=/^[-+]0x[0-9a-f]+$/i,Un=/^0b[01]+$/i,qn=/^0o[0-7]+$/i,Zn=parseInt;var Qn=vn,Gn=Sn,Xn=function(e){if("number"==typeof e)return e;if(Yn(e))return NaN;if(Wn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Wn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Nn(e);var n=Un.test(e);return n||qn.test(e)?Zn(e.slice(2),n?2:8):Vn.test(e)?NaN:+e},Jn=Math.max,Kn=Math.min;var er=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=Gn();if(h(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?Kn(n,i-(e-c)):n}(e))}function g(e){return s=void 0,f&&r?p(e):(r=o=void 0,a)}function y(){var e=Gn(),n=h(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Xn(t)||0,Qn(n)&&(u=!!n.leading,i=(d="maxWait"in n)?Jn(Xn(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},y.flush=function(){return void 0===s?a:g(Gn())},y},tr=er,nr=vn;var rr=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return nr(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),tr(e,t,{leading:r,maxWait:t,trailing:o})},or=function(e,t,n,r){switch(t){case"debounce":return er(e,n,r);case"throttle":return rr(e,n,r);default:return e}},ir=function(e){return"function"==typeof e},ar=function(){return"undefined"==typeof window},sr=function(e){return e instanceof Element||e instanceof HTMLDocument},lr=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&ir(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ar()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ar())return null;if(t)return document.querySelector(t);if(r&&sr(r))return r;if(n.targetRef&&sr(n.targetRef.current))return n.targetRef.current;var o=b(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=lr(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!ar()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ir(t)?"renderProp":ir(r)?"childFunction":d(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=f(),n.observableElement=null,ar()||(n.resizeHandler=or(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}mn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ar()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,r=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=r)(l);case"child":if((e=r).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return p(e,c)}return p(e,l);case"childArray":return(e=r).map((function(e){return!!e&&p(e,l)}));default:return i.createElement(a,null)}}}(h);var cr=ar()?l:s;const ur=w.div`
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
`,dr=w.div`
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
`,fr=({show:t=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:i,backgroundBlur:s=!0,disableTransition:d=!1,enableOverlayClick:f=!1,zIndex:p,id:h})=>{const[m,g]=u(null),[v,b]=u(),[w]=u((()=>pn.generate())),x=c(),$=c(null),S=o&&a.cloneElement(o,{ref:$}),O=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root";l((()=>(k(),g(D()),()=>{R(),j().length<1&&B("remove")})),[]),l((()=>{if(t){const e=E();F(e),C();const t=setTimeout((()=>{B("add")}),200);return()=>clearTimeout(t)}{R();const e=setTimeout((()=>{j().length<1&&B("remove")}),200);return()=>clearTimeout(e)}}),[t]);const F=e=>{x.current=e,b(e)},D=()=>document&&n?document.getElementById(n):document?document.body:null,E=()=>j().length>0,k=()=>{if(!document.getElementById(pr)){const e=document.createElement("style");e.id=pr;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${hr} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${hr}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},B=e=>{const t=document.body.classList.contains(hr);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(hr):document.body.classList.add(hr)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},C=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,w].join(",")},R=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==w)).join(",")},T=e=>{var t;const n=null===(t=$.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&f&&(e.preventDefault(),r())};return m?y.createPortal(e(ur,Object.assign({id:O,"data-testid":O,$show:t,zIndex:p,$stacked:v},{children:o&&e(dr,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:i||(v?.5:.8),$backgroundBlur:s,$disableTransition:d,$enableOverlayClick:f,onClick:T},{children:S}))})),m):null},pr="lifesg-ds-overlay-stylesheet",hr="lifesg-ds-overlay-open",mr=w.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${Wt.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,gr=t=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=t,p=C(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,m]=u(),[g,y]=u();l((()=>window.visualViewport?(b(),window.visualViewport.addEventListener("resize",b),()=>{window.visualViewport.removeEventListener("resize",b)}):(v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)})),[]),l((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const v=()=>{const e=.01*window.innerHeight;m(e)},b=()=>{const e=.01*window.visualViewport.height;m(e),y(window.visualViewport.offsetTop)};return e(fr,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:d,id:n,rootId:s,zIndex:c},{children:e(mr,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},p,{children:i}))}))};var yr=Array.isArray,vr="object"==typeof _t&&_t&&_t.Object===Object&&_t,br="object"==typeof self&&self&&self.Object===Object&&self,wr=vr||br||Function("return this")(),xr=wr.Symbol,$r=xr,Sr=Object.prototype,Or=Sr.hasOwnProperty,Fr=Sr.toString,Dr=$r?$r.toStringTag:void 0;var Er=function(e){var t=Or.call(e,Dr),n=e[Dr];try{e[Dr]=void 0;var r=!0}catch(e){}var o=Fr.call(e);return r&&(t?e[Dr]=n:delete e[Dr]),o},kr=Object.prototype.toString;var Br=Er,jr=function(e){return kr.call(e)},Cr=xr?xr.toStringTag:void 0;var Rr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Cr&&Cr in Object(e)?Br(e):jr(e)};var Tr=Rr,Mr=function(e){return null!=e&&"object"==typeof e};var Ar=function(e){return"symbol"==typeof e||Mr(e)&&"[object Symbol]"==Tr(e)},_r=yr,Hr=Ar,Lr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zr=/^\w*$/;var Ir=function(e,t){if(_r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Hr(e))||(zr.test(e)||!Lr.test(e)||null!=t&&e in Object(t))};var Pr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Nr=Rr,Wr=Pr;var Yr,Vr=function(e){if(!Wr(e))return!1;var t=Nr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ur=wr["__core-js_shared__"],qr=(Yr=/[^.]+$/.exec(Ur&&Ur.keys&&Ur.keys.IE_PROTO||""))?"Symbol(src)_1."+Yr:"";var Zr=function(e){return!!qr&&qr in e},Qr=Function.prototype.toString;var Gr=Vr,Xr=Zr,Jr=Pr,Kr=function(e){if(null!=e){try{return Qr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},eo=/^\[object .+?Constructor\]$/,to=Function.prototype,no=Object.prototype,ro=to.toString,oo=no.hasOwnProperty,io=RegExp("^"+ro.call(oo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ao=function(e){return!(!Jr(e)||Xr(e))&&(Gr(e)?io:eo).test(Kr(e))},so=function(e,t){return null==e?void 0:e[t]};var lo=function(e,t){var n=so(e,t);return ao(n)?n:void 0},co=lo(Object,"create"),uo=co;var fo=function(){this.__data__=uo?uo(null):{},this.size=0};var po=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ho=co,mo=Object.prototype.hasOwnProperty;var go=function(e){var t=this.__data__;if(ho){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return mo.call(t,e)?t[e]:void 0},yo=co,vo=Object.prototype.hasOwnProperty;var bo=co;var wo=fo,xo=po,$o=go,So=function(e){var t=this.__data__;return yo?void 0!==t[e]:vo.call(t,e)},Oo=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=bo&&void 0===t?"__lodash_hash_undefined__":t,this};function Fo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fo.prototype.clear=wo,Fo.prototype.delete=xo,Fo.prototype.get=$o,Fo.prototype.has=So,Fo.prototype.set=Oo;var Do=Fo;var Eo=function(){this.__data__=[],this.size=0};var ko=function(e,t){return e===t||e!=e&&t!=t};var Bo=function(e,t){for(var n=e.length;n--;)if(ko(e[n][0],t))return n;return-1},jo=Bo,Co=Array.prototype.splice;var Ro=function(e){var t=this.__data__,n=jo(t,e);return!(n<0)&&(n==t.length-1?t.pop():Co.call(t,n,1),--this.size,!0)},To=Bo;var Mo=function(e){var t=this.__data__,n=To(t,e);return n<0?void 0:t[n][1]},Ao=Bo;var _o=Bo;var Ho=function(e,t){var n=this.__data__,r=_o(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Lo=Eo,zo=Ro,Io=Mo,Po=function(e){return Ao(this.__data__,e)>-1},No=Ho;function Wo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Wo.prototype.clear=Lo,Wo.prototype.delete=zo,Wo.prototype.get=Io,Wo.prototype.has=Po,Wo.prototype.set=No;var Yo=Wo,Vo=lo(wr,"Map"),Uo=Do,qo=Yo,Zo=Vo;var Qo=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Go=function(e,t){var n=e.__data__;return Qo(t)?n["string"==typeof t?"string":"hash"]:n.map},Xo=Go;var Jo=Go;var Ko=Go;var ei=Go;var ti=function(){this.size=0,this.__data__={hash:new Uo,map:new(Zo||qo),string:new Uo}},ni=function(e){var t=Xo(this,e).delete(e);return this.size-=t?1:0,t},ri=function(e){return Jo(this,e).get(e)},oi=function(e){return Ko(this,e).has(e)},ii=function(e,t){var n=ei(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ai(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ai.prototype.clear=ti,ai.prototype.delete=ni,ai.prototype.get=ri,ai.prototype.has=oi,ai.prototype.set=ii;var si=ai;function li(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(li.Cache||si),n}li.Cache=si;var ci=li;var ui=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,di=/\\(\\)?/g,fi=function(e){var t=ci(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ui,(function(e,n,r,o){t.push(r?o.replace(di,"$1"):n||e)})),t}));var pi=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},hi=pi,mi=yr,gi=Ar,yi=xr?xr.prototype:void 0,vi=yi?yi.toString:void 0;var bi=function e(t){if("string"==typeof t)return t;if(mi(t))return hi(t,e)+"";if(gi(t))return vi?vi.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},wi=bi;var xi=yr,$i=Ir,Si=fi,Oi=function(e){return null==e?"":wi(e)};var Fi=Ar;var Di=function(e,t){return xi(e)?e:$i(e,t)?[e]:Si(Oi(e))},Ei=function(e){if("string"==typeof e||Fi(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var ki=function(e,t){for(var n=0,r=(t=Di(t,e)).length;null!=e&&n<r;)e=e[Ei(t[n++])];return n&&n==r?e:void 0},Bi=ki;var ji=Ht((function(e,t,n){var r=null==e?void 0:Bi(e,t);return void 0===r?n:r}));const Ci=(e,t,n)=>t?ji(n,t)||ji(e,t):n||e,Ri=(e,t)=>{const n=t||e.defaultValue;return ji(e.collections,n)};var Ti;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Ti||(Ti={}));const Mi={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ai=e=>t=>{const n=t.theme,r=Ri(Mi,n[Ti.colorScheme]);return n.options&&n.options.color?Ci(r,e,n.options.color):Ci(r,e)},_i={Brand:{1:Ai("Brand.1"),2:Ai("Brand.2"),3:Ai("Brand.3"),4:Ai("Brand.4"),5:Ai("Brand.5"),6:Ai("Brand.6")},Primary:Ai("Primary"),PrimaryDark:Ai("PrimaryDark"),Secondary:Ai("Secondary"),Accent:{Light:{1:Ai("Accent.Light.1"),2:Ai("Accent.Light.2"),3:Ai("Accent.Light.3"),4:Ai("Accent.Light.4"),5:Ai("Accent.Light.5"),6:Ai("Accent.Light.6")},Dark:{1:Ai("Accent.Dark.1"),2:Ai("Accent.Dark.2"),3:Ai("Accent.Dark.3")}},Neutral:{1:Ai("Neutral.1"),2:Ai("Neutral.2"),3:Ai("Neutral.3"),4:Ai("Neutral.4"),5:Ai("Neutral.5"),6:Ai("Neutral.6"),7:Ai("Neutral.7"),8:Ai("Neutral.8")},Validation:{Green:{Text:Ai("Validation.Green.Text"),Icon:Ai("Validation.Green.Icon"),Border:Ai("Validation.Green.Border"),Background:Ai("Validation.Green.Background")},Orange:{Text:Ai("Validation.Orange.Text"),Icon:Ai("Validation.Orange.Icon"),Border:Ai("Validation.Orange.Border"),Background:Ai("Validation.Orange.Background"),Badge:Ai("Validation.Orange.Badge")},Red:{Text:Ai("Validation.Red.Text"),Icon:Ai("Validation.Red.Icon"),Border:Ai("Validation.Red.Border"),Background:Ai("Validation.Red.Background")},Blue:{Text:Ai("Validation.Blue.Text"),Icon:Ai("Validation.Blue.Icon"),Border:Ai("Validation.Blue.Border"),Background:Ai("Validation.Blue.Background")}},Shadow:{Accent:Ai("Shadow.Accent"),Red:Ai("Shadow.Red"),Elevation:Ai("Shadow.Elevation")}},Hi={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Li={collections:{base:{D1:{fontFamily:Hi.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Hi.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Hi.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Hi.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Hi.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Hi.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Hi.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Hi.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Hi.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Hi.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Hi.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Hi.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Hi.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Hi.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},zi=e=>t=>{const n=t.theme,r=Ri(Li,n[Ti.textStyleScheme]);return n.options&&n.options.textStyle?Ci(r,e,n.options.textStyle):Ci(r,e)},Ii={D1:{fontFamily:zi("D1.fontFamily"),fontSize:zi("D1.fontSize"),fontWeight:zi("D1.fontWeight"),lineHeight:zi("D1.lineHeight"),letterSpacing:zi("D1.letterSpacing")},D2:{fontFamily:zi("D2.fontFamily"),fontSize:zi("D2.fontSize"),fontWeight:zi("D2.fontWeight"),lineHeight:zi("D2.lineHeight"),letterSpacing:zi("D2.letterSpacing")},D3:{fontFamily:zi("D3.fontFamily"),fontSize:zi("D3.fontSize"),fontWeight:zi("D3.fontWeight"),lineHeight:zi("D3.lineHeight"),letterSpacing:zi("D3.letterSpacing")},D4:{fontFamily:zi("D4.fontFamily"),fontSize:zi("D4.fontSize"),fontWeight:zi("D4.fontWeight"),lineHeight:zi("D4.lineHeight"),letterSpacing:zi("D4.letterSpacing")},DBody:{fontFamily:zi("DBody.fontFamily"),fontSize:zi("DBody.fontSize"),fontWeight:zi("DBody.fontWeight"),lineHeight:zi("DBody.lineHeight"),letterSpacing:zi("DBody.letterSpacing")},H1:{fontFamily:zi("H1.fontFamily"),fontSize:zi("H1.fontSize"),fontWeight:zi("H1.fontWeight"),lineHeight:zi("H1.lineHeight"),letterSpacing:zi("H1.letterSpacing")},H2:{fontFamily:zi("H2.fontFamily"),fontSize:zi("H2.fontSize"),fontWeight:zi("H2.fontWeight"),lineHeight:zi("H2.lineHeight"),letterSpacing:zi("H2.letterSpacing")},H3:{fontFamily:zi("H3.fontFamily"),fontSize:zi("H3.fontSize"),fontWeight:zi("H3.fontWeight"),lineHeight:zi("H3.lineHeight"),letterSpacing:zi("H3.letterSpacing")},H4:{fontFamily:zi("H4.fontFamily"),fontSize:zi("H4.fontSize"),fontWeight:zi("H4.fontWeight"),lineHeight:zi("H4.lineHeight"),letterSpacing:zi("H4.letterSpacing")},H5:{fontFamily:zi("H5.fontFamily"),fontSize:zi("H5.fontSize"),fontWeight:zi("H5.fontWeight"),lineHeight:zi("H5.lineHeight"),letterSpacing:zi("H5.letterSpacing")},H6:{fontFamily:zi("H6.fontFamily"),fontSize:zi("H6.fontSize"),fontWeight:zi("H6.fontWeight"),lineHeight:zi("H6.lineHeight"),letterSpacing:zi("H6.letterSpacing")},Body:{fontFamily:zi("Body.fontFamily"),fontSize:zi("Body.fontSize"),fontWeight:zi("Body.fontWeight"),lineHeight:zi("Body.lineHeight"),letterSpacing:zi("Body.letterSpacing")},BodySmall:{fontFamily:zi("BodySmall.fontFamily"),fontSize:zi("BodySmall.fontSize"),fontWeight:zi("BodySmall.fontWeight"),lineHeight:zi("BodySmall.lineHeight"),letterSpacing:zi("BodySmall.letterSpacing")},XSmall:{fontFamily:zi("XSmall.fontFamily"),fontSize:zi("XSmall.fontSize"),fontWeight:zi("XSmall.fontWeight"),lineHeight:zi("XSmall.lineHeight"),letterSpacing:zi("XSmall.letterSpacing")}},Pi=e=>{switch(e){case 700:case"bold":return Hi.Bold;case 600:case"semibold":return Hi.Semibold;case 300:case"light":return Hi.Light;case 400:case"regular":return Hi.Regular;default:return""}},Ni=(e,t)=>n=>{var r;const o=Ii[e].fontFamily(n),i=Ii[e].fontWeight(n);return Object.values(Hi).includes(o)?x`
                font-family: ${Pi(t)||Pi(i)||o};
                font-weight: normal !important;
            `:x`
            font-family: ${o};
            font-weight: ${null!==(r=Wi(t)||i)&&void 0!==r?r:"normal"};
        `},Wi=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Yi=e=>{if(e>0)return x`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Vi=Ni,Ui=(e,t,n=!1)=>r=>{const o=Ii[e],i=o.fontSize(r);return x`
            ${Ni(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${x`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},qi=(e=!1,t=!1,n=void 0)=>t?x`
            display: block;
            ${Yi(n)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${Yi(n)}
        `;var Zi;!function(e){e.D1=w.h1`
        ${e=>x`
                ${Ui("D1",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=w.h1`
        ${e=>x`
                ${Ui("D2",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=w.h1`
        ${e=>x`
                ${Ui("D3",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=w.h1`
        ${e=>x`
                ${Ui("D4",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=w.h1`
        ${e=>x`
                ${Ui("DBody",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=w.h1`
        ${e=>x`
                ${Ui("H1",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=w.h2`
        ${e=>x`
                ${Ui("H2",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=w.h3`
        ${e=>x`
                ${Ui("H3",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=w.h4`
        ${e=>x`
                ${Ui("H4",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=w.h5`
        ${e=>x`
                ${Ui("H5",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=w.h6`
        ${e=>x`
                ${Ui("H6",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=w.p`
        ${e=>x`
                ${Ui("Body",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=w.p`
        ${e=>x`
                ${Ui("BodySmall",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=w.span`
        ${e=>x`
                ${Ui("XSmall",e.weight,e.paragraph)}
                color: ${_i.Neutral[1]};
                ${qi(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xi(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xi(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Zi||(Zi={}));const Qi=w.a`
    ${e=>x`
            ${Ui(e.textStyle,e.weight)}
            color: ${_i.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${_i.Secondary};

                svg {
                    color: ${_i.Secondary};
                }
            }
        `}
`,Gi=w(S)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xi=n=>{var{external:r=!1,children:o}=n,i=C(n,["external","children"]);return t(Qi,Object.assign({},i,{children:[o,r&&e(Gi,{})]}))},Ji=w.div`
    border-radius: 0.5rem;
    background: ${_i.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Ki=w.button`
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
                background-color: ${_i.Neutral[7]};
            `}
    }
`,ea=a.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=C(t,["children","focusHighlight","focusOutline","type"]);return e(Ki,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),ta=w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${_i.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Wt.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,na=w(ea)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${_i.Accent.Light[1]};
    }
`,ra=w(O)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${_i.Neutral[3]};
`;var oa;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(oa||(oa={}));const ia=e=>{const{textSize:t}=e||{};return x`
        // Text styling
        ${t&&Ui(t,"regular")}

        strong {
            font-family: ${Hi.Semibold};
            ${t&&Ui(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Hi.Semibold};
            ${t&&Ui(t,"semibold")}
            color: ${_i.Primary};
            text-decoration: none;

            svg {
                color: ${_i.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${_i.Secondary};

                svg {
                    color: ${_i.Secondary};
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
    `},aa=w.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,sa=w((t=>{var{children:n}=t,r=C(t,["children"]);const o=r["data-testid"]||"card";return e(Ji,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?e(Zi.Body,{children:n}):n}))}))`
    color: ${_i.Neutral[1]};
    ${ia({textSize:"BodySmall"})}

    ${Wt.mobileL} {
        display: none;
    }
`,la=w((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=C(n,["id","children","onClose","showCloseButton"]);return t(ta,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(na,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e(ra,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,ca=w.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${_i.Neutral[1]};
    ${ia({textSize:"BodySmall"})}
`,ua=r=>{var{children:o,visible:i,onMobileClose:a}=r,s=C(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=It.useMediaQuery({maxWidth:Pt.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof o?e(Zi.BodySmall,{children:o}):o;return t(n,{children:[i&&e(aa,Object.assign({"data-testid":l},s,{children:e(sa,{children:d()})})),c&&e(gr,Object.assign({show:i,onOverlayClick:u},{children:e(la,Object.assign({onClose:u},{children:e(ca,{children:d()})}))}))]})},da=w.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,fa=r=>{var{children:o,popoverContent:i,trigger:a="click",position:s="top",zIndex:d,rootNode:f,onPopoverAppear:p,onPopoverDismiss:h}=r,m=C(r,["children","popoverContent","trigger","position","zIndex","rootNode","onPopoverAppear","onPopoverDismiss"]);const[g,y]=u(!1),v=c(),b=c(),w=It.useMediaQuery({maxWidth:Yt.mobileL}),{refs:x,floatingStyles:$}=At({open:g,placement:s,whileElementsMounted:Ce,middleware:[(S=16,{...Re(S),options:[S,O]}),Ye(),Ne({limiter:We()})]});var S,O;l((()=>{if(!w&&g)return document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}}),[g]);const F=e=>{var t,n;(null===(t=v.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=b.current)||void 0===n?void 0:n.contains(e.target))||(y(!1),h&&h())},D=()=>{y(!1)};return t(n,{children:[g&&e(Rt,Object.assign({root:f},{children:e("div",Object.assign({ref:e=>{b.current=e,x.setFloating(e)},style:Object.assign(Object.assign({},$),{zIndex:d})},{children:"function"==typeof i?i():e(ua,Object.assign({visible:!0,onMobileClose:D},{children:i}))}))})),e(da,Object.assign({ref:e=>{v.current=e,x.setReference(e)},onClick:e=>{e.preventDefault(),("click"===a||w)&&(y(!g),!g&&p&&p(),g&&h&&h())},onMouseEnter:()=>{"hover"!==a||w||y(!0)},onMouseLeave:()=>{"hover"===a&&g&&!w&&y(!1)}},m,{children:o}))]})},pa=w.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${_i.Primary};
    }
`,ha=w.div`
    display: inline;
    position: relative;
    width: fit-content;
`,ma=({addon:t,rootNode:n})=>{const{content:r,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(fa,Object.assign({trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s},{children:e(ha,{children:e(pa,{children:i||e(m,{id:`${o}-icon`})})})}))},ga=w.label`
    ${Ui("H5","semibold")}
    color: ${_i.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Ui("H5","semibold")}
    }

    a {
        color: ${_i.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${_i.Secondary};

            svg {
                color: ${_i.Secondary};
            }
        }
    }
`;w(Zi.H6)`
    color: ${_i.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const ya=w(Zi.BodySmall)`
    && {
        color: ${_i.Neutral[3]};
        ${Vi("BodySmall","regular")}
    }
`,va=n=>{var{children:r,addon:o,subtitle:i,"data-testid":a}=n,s=C(n,["children","addon","subtitle","data-testid"]);return t(ga,Object.assign({},s,{children:[r,o&&o.type&&("popover"===o.type?e(ma,{addon:o}):null),"string"==typeof i?e(ya,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},ba=w.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,wa=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,xa=w.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||_i.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${wa} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$a=w(xa)`
    animation-delay: -0.45s;
`,Sa=w(xa)`
    animation-delay: -0.3s;
`,Oa=w(xa)`
    animation-delay: -0.15s;
`,Fa=w.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=_i.Validation.Red.Background(e),n=_i.Validation.Red.Border(e);break;case"success":t=_i.Validation.Green.Background(e),n=_i.Validation.Green.Border(e);break;case"warning":default:t=_i.Validation.Orange.Background(e),n=_i.Validation.Orange.Border(e);break;case"info":t=_i.Validation.Blue.Background(e),n=_i.Validation.Blue.Border(e);break;case"description":t=_i.Neutral[7](e),n=_i.Neutral[4](e)}return x`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${_i.Neutral[1]};
    ${e=>"small"===e.$sizeType?ia({textSize:"H6"}):ia({textSize:"BodySmall"})}
`,Da=w.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&x`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=_i.Validation.Red.Icon(e);break;case"success":t=_i.Validation.Green.Icon(e);break;case"warning":default:t=_i.Validation.Orange.Icon(e);break;case"info":t=_i.Validation.Blue.Icon(e);break;case"description":t=_i.Neutral[4](e)}return x`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Ea=w(Zi.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?x`
                ${Ui("H6","semibold")}
                margin-top: 0.25rem;
            `:x`
                ${Ui("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${_i.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${_i.Primary};
    }
`,ka=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ba=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,ja=w.button`
    ${e=>"small"===e.$sizeType?x`
                ${Ui("H6","semibold")}
            `:x`
                ${Ui("H5","semibold")}
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

    color: ${_i.Primary};
`,Ca=w(j)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Ra=w.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return x`
                    grid-column: auto / span 4;
                `;case"full":return x`
                    grid-column: auto / span 8;
                `}}}

    ${Wt.tablet} {
        grid-column: auto / span 8;
    }

    ${Wt.mobileL} {
        grid-column: auto / span 4;
    }
`,Ta=w.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${_i.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,Ma=w.button`
    ${Ui("Body","regular")}
    color: ${_i.Neutral[1]};
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
`,Aa=w.span`
    color: ${_i.Neutral[3]};
`,_a=w((({color:n,className:r,size:o=18})=>t(ba,Object.assign({className:r,$size:o,$color:n},{children:[e(xa,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),e($a,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),e(Sa,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),e(Oa,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${_i.Neutral[3]} transparent transparent transparent;
    }
`,Ha=w(F)`
    color: ${_i.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,La=w.span`
    color: ${_i.Validation.Orange.Text};
`,za=w.span`
    ${Ui("Body","semibold")}
    color: ${_i.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,Ia=w((n=>{var{type:r,className:o,children:i,actionLink:a,actionLinkIcon:s,sizeType:d="default",showIcon:f=!1,customIcon:p,maxCollapsedHeight:h}=n,g=C(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[y,v]=u(!1),[b,w]=u(!1),{height:x,ref:$}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,d=e.handleHeight,f=void 0===d||d,p=e.targetRef,h=e.observerOptions,m=e.onResize,g=c(n),y=c(null),v=null!=p?p:y,b=c(),w=u({width:void 0,height:void 0}),x=w[0],$=w[1];return cr((function(){if(!ar()){var e=lr(m,$,l,f);b.current=or((function(t){(l||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!ar()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,l,f,m,h,v.current]),gn({ref:v},x)}();l((()=>{S()}),[h,x]);const S=()=>{v(!h),w(O())},O=()=>!!h&&x>h;return t(Fa,Object.assign({className:o,$type:r,$sizeType:d,"data-testid":g["data-testid"]},{children:[f&&e(Da,Object.assign({$sizeType:d,$type:r},{children:(()=>{if(r&&p)return p;switch(r){case"success":return e(B,{});case"warning":return e(k,{});case"error":return e(E,{});case"info":case"description":return e(m,{});default:return null}})()})),t(ka,{children:[t(Ba,Object.assign({$maxCollapsedHeight:O()?h:void 0,$showMore:y,$hasActionLink:!!a},{children:[e("div",Object.assign({ref:$},{children:i})),a&&t(Ea,Object.assign({"data-testid":"action-link",$type:r,$sizeType:d},a,{children:[a.children,s||e(D,{})]}))]})),b&&t(ja,Object.assign({$sizeType:d,$type:r,type:"button",onClick:()=>v(!y)},{children:["Show ",y?"less":"more",e(Ca,{$expanded:y})]}))]})]}))}))`
    margin-top: 0.5rem;
`,Pa=({label:i,value:a,displayWidth:s="full",maskState:c,maskLoadingState:d,maskChar:f="•",maskRange:p,unmaskRange:h,maskRegex:m,disableMaskUnmask:g,alert:y,maskTransformer:v,onMask:b,onUnmask:w,onTryAgain:x})=>{const[$,S]=u(c);l((()=>{S(c)}),[c]);const O=()=>{switch("fail"===d&&x&&x(),$){case"masked":w&&w(),S("unmasked");break;case"unmasked":b&&b(),S("masked")}},F=()=>"masked"===$?hn.maskValue(a,{maskChar:f,maskRange:p,unmaskRange:h,maskRegex:m,maskTransformer:v}):a,D=()=>{switch(d){case"fail":return t(n,{children:[e(Ha,{}),e(La,{children:"Error"}),e(za,{children:"Try again?"})]});case"loading":return t(n,{children:[e(_a,{}),e(Aa,{children:"Retrieving..."})]});default:return t(n,{children:[F(),e(Ta,{children:"masked"===$?e(r,{"data-testid":"masked-icon"}):e(o,{"data-testid":"unmasked-icon"})})]})}};return t(Ra,Object.assign({$widthStyle:s},{children:[e(va,{children:i}),$?g?e(Zi.Body,{children:F()}):e(Ma,Object.assign({"data-testid":"clickable-label",onClick:O,"aria-busy":"loading"===d,"aria-live":"polite",type:"button"},{children:D()})):e(Zi.Body,{children:a}),y&&e(Ia,Object.assign({sizeType:"small"},y))]}))},Na=w.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return x`
            grid-column: ${t||"auto"} / span ${n||1};

            ${Wt.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${Wt.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`,Wa=a.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=C(t,["mobileCols","tabletCols","desktopCols"]);return e(Na,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=Ya(i||o||r),a=Ya(e),s=Ya(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Ya=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Va=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,s=C(t,["children","data-testid","type","stretch"]);return e(Ua,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},s,{children:r}))})),Ua=w.div`
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

                ${Wt.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Wt.tablet} {
        max-width: 720px;
    }
    ${Wt.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return x`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Wt.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Wt.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return x`
                    display: flex;
                    flex-direction: column;
                `;default:return x`
                    display: flex;
                `}}}
`,qa=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=C(t,["children","data-testid","stretch"]);return e(Za,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),Za=w.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?x`
                ${Wt.tablet} {
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
`,Qa=a.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:s=!1}=t,l=C(t,["children","data-testid","className","type","stretch"]);return e(qa,Object.assign({ref:n,"data-testid":o,className:i,stretch:s},l,{children:e(Va,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),Ga=w({Section:qa,Container:Va,Content:Qa,ColDiv:Wa}.Content)`
    background: ${({$background:e})=>e?_i.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,Xa=w(Zi.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`,Ja=w(Zi.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`,Ka=w.div`
    grid-column: span 8;
`,es=w.ul`
    grid-column: span 8;
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${Wt.tablet} {
        column-gap: 1.5rem;
    }

    ${Wt.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,ts=Object.assign((r=>{var{items:o,title:i,description:a,topSection:s,bottomSection:l,children:c,background:u=!0,onMask:d,onUnmask:f,onTryAgain:p}=r,h=C(r,["items","title","description","topSection","bottomSection","children","background","onMask","onUnmask","onTryAgain"]);const m=e=>()=>{d&&d(e)},g=e=>()=>{f&&f(e)},y=e=>()=>{p&&p(e)},v=()=>{if(o&&o.length>0){const t=o.map(((t,n)=>e(Pa,Object.assign({},t,{onMask:m(t),onUnmask:g(t),onTryAgain:y(t)}),n)));return e(es,{children:t})}return null};return e(Ga,Object.assign({$background:u},h,{type:"grid"},{children:c||t(n,{children:[i&&e(Xa,Object.assign({weight:"semibold"},{children:i})),a&&e(Ja,{children:a}),s&&e(Ka,Object.assign({"data-id":"top-section"},{children:s})),v(),l&&e(Ka,Object.assign({"data-id":"bottom-section"},{children:l}))]})}))}),{ItemSection:es,Item:Pa});export{ts as UneditableSection};
//# sourceMappingURL=index.js.map
