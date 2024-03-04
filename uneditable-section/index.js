import{jsx as e,jsxs as t,Fragment as n}from"react/jsx-runtime";import r,{css as o}from"styled-components";import{ICircleFillIcon as i}from"@lifesg/react-icons/i-circle-fill";import*as a from"react";import s,{useLayoutEffect as l,useEffect as c,useState as u,useRef as d}from"react";import*as f from"react-dom";import p,{createPortal as h}from"react-dom";import{ExternalIcon as m}from"@lifesg/react-icons/external";import{CrossIcon as g}from"@lifesg/react-icons/cross";function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;const v={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},b=e=>Object.keys(v).reduce(((t,n)=>{const r=v[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),w=b("max-width"),x=(b("min-width"),v),S=r.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return o`
                    grid-column: auto / span 4;
                `;case"full":return o`
                    grid-column: auto / span 8;
                `}}}

    ${w.tablet} {
        grid-column: auto / span 8;
    }

    ${w.mobileL} {
        grid-column: auto / span 4;
    }
`;function $(e){return O(e)?(e.nodeName||"").toLowerCase():"#document"}function F(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function D(e){var t;return null==(t=(O(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function O(e){return e instanceof Node||e instanceof F(e).Node}function E(e){return e instanceof Element||e instanceof F(e).Element}function B(e){return e instanceof HTMLElement||e instanceof F(e).HTMLElement}function C(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof F(e).ShadowRoot)}function j(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=R(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function k(e){return["table","td","th"].includes($(e))}function M(e){const t=_(),n=R(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function _(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function A(e){return["html","body","#document"].includes($(e))}function R(e){return F(e).getComputedStyle(e)}function T(e){return E(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function H(e){if("html"===$(e))return e;const t=e.assignedSlot||e.parentNode||C(e)&&e.host||D(e);return C(t)?t.host:t}function L(e){const t=H(e);return A(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&j(t)?t:L(t)}function I(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=L(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=F(o);return i?t.concat(a,a.visualViewport||[],j(o)?o:[],a.frameElement&&n?I(a.frameElement):[]):t.concat(o,I(o,[],n))}const P=Math.min,z=Math.max,N=Math.round,W=Math.floor,Y=e=>({x:e,y:e}),V={left:"right",right:"left",bottom:"top",top:"bottom"},q={start:"end",end:"start"};function U(e,t,n){return z(e,P(t,n))}function Z(e,t){return"function"==typeof e?e(t):e}function Q(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function G(e){return"x"===e?"y":"x"}function J(e){return"y"===e?"height":"width"}function K(e){return["top","bottom"].includes(Q(e))?"y":"x"}function ee(e){return G(K(e))}function te(e){return e.replace(/start|end/g,(e=>q[e]))}function ne(e){return e.replace(/left|right|bottom|top/g,(e=>V[e]))}function re(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function oe(e,t,n){let{reference:r,floating:o}=e;const i=K(t),a=ee(t),s=J(a),l=Q(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let p;switch(l){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-o.width,y:d};break;default:p={x:r.x,y:r.y}}switch(X(t)){case"start":p[a]-=f*(n&&c?-1:1);break;case"end":p[a]+=f*(n&&c?-1:1)}return p}async function ie(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Z(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(p),m=s[f?"floating"===d?"reference":"floating":d],g=re(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{...a.floating,x:r,y:o}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=re(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}const ae=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Q(n),s=X(n),l="y"===K(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=Z(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof h&&(p="end"===s?-1*h:h),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}};function se(e){const t=R(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=B(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=N(n)!==i||N(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function le(e){return E(e)?e:e.contextElement}function ce(e){const t=le(e);if(!B(t))return Y(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=se(t);let a=(i?N(n.width):n.width)/r,s=(i?N(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const ue=Y(0);function de(e){const t=F(e);return _()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ue}function fe(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=le(e);let a=Y(1);t&&(r?E(r)&&(a=ce(r)):a=ce(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==F(e))&&t}(i,n,r)?de(i):Y(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=F(i),t=r&&E(r)?F(r):r;let n=e.frameElement;for(;n&&r&&t!==e;){const e=ce(n),t=n.getBoundingClientRect(),r=R(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=o,c+=i,n=F(n).frameElement}}return re({width:u,height:d,x:l,y:c})}function pe(e){return fe(D(e)).left+T(e).scrollLeft}function he(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=F(e),r=D(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=_();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=D(e),n=T(e),r=e.ownerDocument.body,o=z(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=z(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+pe(e);const s=-n.scrollTop;return"rtl"===R(r).direction&&(a+=z(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(D(e));else if(E(t))r=function(e,t){const n=fe(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=B(e)?ce(e):Y(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=de(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return re(r)}function me(e,t){const n=H(e);return!(n===t||!E(n)||A(n))&&("fixed"===R(n).position||me(n,t))}function ge(e,t,n){const r=B(t),o=D(t),i="fixed"===n,a=fe(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=Y(0);if(r||!r&&!i)if(("body"!==$(t)||j(o))&&(s=T(t)),r){const e=fe(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=pe(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function ye(e,t){return B(e)&&"fixed"!==R(e).position?t?t(e):e.offsetParent:null}function ve(e,t){const n=F(e);if(!B(e))return n;let r=ye(e,t);for(;r&&k(r)&&"static"===R(r).position;)r=ye(r,t);return r&&("html"===$(r)||"body"===$(r)&&"static"===R(r).position&&!M(r))?n:r||function(e){let t=H(e);for(;B(t)&&!A(t);){if(M(t))return t;t=H(t)}return null}(e)||n}const be={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=B(n),i=D(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},s=Y(1);const l=Y(0);if((o||!o&&"fixed"!==r)&&(("body"!==$(n)||j(i))&&(a=T(n)),B(n))){const e=fe(n);s=ce(n),l.x=e.x+n.clientLeft,l.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-a.scrollLeft*s.x+l.x,y:t.y*s.y-a.scrollTop*s.y+l.y}},getDocumentElement:D,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=I(e,[],!1).filter((e=>E(e)&&"body"!==$(e))),o=null;const i="fixed"===R(e).position;let a=i?H(e):e;for(;E(a)&&!A(a);){const t=R(a),n=M(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||j(a)&&!n&&me(e,a))?r=r.filter((e=>e!==a)):o=t,a=H(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=he(t,n,o);return e.top=z(r.top,e.top),e.right=P(r.right,e.right),e.bottom=P(r.bottom,e.bottom),e.left=z(r.left,e.left),e}),he(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:ve,getElementRects:async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||ve,i=this.getDimensions;return{reference:ge(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=se(e);return{width:t,height:n}},getScale:ce,isElement:E,isRTL:function(e){return"rtl"===R(e).direction}};function we(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=le(e),u=o||i?[...c?I(c):[],...I(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=D(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const p={rootMargin:-W(u)+"px "+-W(o.clientWidth-(c+d))+"px "+-W(o.clientHeight-(u+f))+"px "+-W(c)+"px",threshold:z(0,P(1,l))||1};let h=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!h)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),100)}h=!1}try{r=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,p)}r.observe(e)}(!0),i}(c,n):null;let f,p=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{h&&h.observe(t)}))),n()})),c&&!l&&h.observe(c),h.observe(t));let m=l?fe(e):null;return l&&function t(){const r=fe(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),d&&d(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(f)}}const xe=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Z(e,t),c={x:n,y:r},u=await ie(t,l),d=K(Q(o)),f=G(d);let p=c[f],h=c[d];if(i){const e="y"===f?"bottom":"right";p=U(p+u["y"===f?"top":"left"],p,p-u[e])}if(a){const e="y"===d?"bottom":"right";h=U(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[f]:p,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Se=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=Z(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=Q(o),v=Q(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=f||(v||!m?[ne(s)]:function(e){const t=ne(e);return[te(e),t,te(t)]}(s));f||"none"===h||w.push(...function(e,t,n,r){const o=X(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Q(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(te)))),i}(s,m,h,b));const x=[s,...w],S=await ie(t,g),$=[];let F=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(S[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=X(e),o=ee(e),i=J(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=ne(a)),[a,ne(a)]}(o,a,b);$.push(S[e[0]],S[e[1]])}if(F=[...F,{placement:o,overflows:$}],!$.every((e=>e<=0))){var D,O;const e=((null==(D=i.flip)?void 0:D.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(O=F.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!n)switch(p){case"bestFit":{var E;const e=null==(E=F.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},$e=(e,t,n)=>{const r=new Map,o={platform:be,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=oe(c,r,l),f=r,p={},h=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,p={...p,[i]:{...p[i],...v}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=oe(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var Fe="undefined"!=typeof document?l:c;function De(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!De(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!De(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Oe(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ee(e,t){const n=Oe(e);return Math.round(t*n)/n}function Be(e){const t=a.useRef(e);return Fe((()=>{t.current=e})),t}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Ce=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),je="undefined"==typeof Element,ke=je?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Me=!je&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},_e=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Ae=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!_e(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{ke.call(a,Ce)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!_e(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Re=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Te=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Re(e)?0:e.tabIndex},He=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Le=function(e){return"INPUT"===e.tagName},Ie=function(e){return function(e){return Le(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Me(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Pe=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},ze=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=ke.call(e,"details>summary:first-of-type")?e.parentElement:e;if(ke.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Pe(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=Me(e);if(a&&!a.shadowRoot&&!0===r(a))return Pe(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&Me(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=Me(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Ne=function(e,t){return!(t.disabled||_e(t)||function(e){return Le(e)&&"hidden"===e.type}(t)||ze(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!ke.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},We=function(e,t){return!(Ie(t)||Te(t)<0||!Ne(e,t))},Ye=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Ve=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=Te(e);return n<0&&t&&!Re(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort(He).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},qe=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Ae([e],t.includeContainer,{filter:We.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ye}):function(e,t,n){if(_e(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Ce));return t&&ke.call(e,Ce)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,We.bind(null,t)),Ve(n)};const Ue=a["useInsertionEffect".toString()]||(e=>e());var Ze="undefined"!=typeof document?l:c;function Qe(){return Qe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qe.apply(this,arguments)}let Xe=!1,Ge=0;const Je=()=>"floating-ui-"+Ge++;const Ke=a["useId".toString()]||function(){const[e,t]=a.useState((()=>Xe?Je():void 0));return Ze((()=>{null==e&&t(Je())}),[]),a.useEffect((()=>{Xe||(Xe=!0)}),[]),e};const et=a.createContext(null),tt=a.createContext(null);function nt(e){return"data-floating-ui-"+e}const rt=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function ot(e,t){const n=qe(e,rt());"prev"===t&&n.reverse();const r=n.indexOf(function(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}((null==(o=e)?void 0:o.ownerDocument)||document));var o;return n.slice(r+1)[0]}function it(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!function(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&C(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}(n,r)}function at(e){qe(e,rt()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function st(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const lt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function ct(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const ut=a.forwardRef((function(e,t){const[n,r]=a.useState();Ze((()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",ct),()=>{document.removeEventListener("keydown",ct)})),[]);const o={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[nt("focus-guard")]:"",style:lt};return a.createElement("span",Qe({},e,o))})),dt=a.createContext(null);function ft(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const i=function(e){let{id:t,root:n}=void 0===e?{}:e;const[r,o]=a.useState(null),i=Ke(),s=pt(),l=a.useMemo((()=>({id:t,root:n,portalContext:s,uniqueId:i})),[t,n,s,i]),c=a.useRef();return Ze((()=>()=>{null==r||r.remove()}),[r,l]),Ze((()=>{if(c.current===l)return;c.current=l;const{id:e,root:t,portalContext:n,uniqueId:r}=l,i=e?document.getElementById(e):null,a=nt("portal");if(i){const e=document.createElement("div");e.id=r,e.setAttribute(a,""),i.appendChild(e),o(e)}else{let i=t||(null==n?void 0:n.portalNode);i&&!E(i)&&(i=i.current),i=i||document.body;let s=null;e&&(s=document.createElement("div"),s.id=e,i.appendChild(s));const l=document.createElement("div");l.id=r,l.setAttribute(a,""),i=s||i,i.appendChild(l),o(l)}}),[l]),r}({id:n,root:r}),[s,l]=a.useState(null),c=a.useRef(null),u=a.useRef(null),d=a.useRef(null),f=a.useRef(null),p=!!s&&!s.modal&&s.open&&o&&!(!r&&!i);return a.useEffect((()=>{if(i&&o&&(null==s||!s.modal))return i.addEventListener("focusin",e,!0),i.addEventListener("focusout",e,!0),()=>{i.removeEventListener("focusin",e,!0),i.removeEventListener("focusout",e,!0)};function e(e){if(i&&it(e)){("focusin"===e.type?st:at)(i)}}}),[i,o,null==s?void 0:s.modal]),a.createElement(dt.Provider,{value:a.useMemo((()=>({preserveTabOrder:o,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:i,setFocusManagerState:l})),[o,i])},p&&i&&a.createElement(ut,{"data-type":"outside",ref:c,onFocus:e=>{if(it(e,i)){var t;null==(t=d.current)||t.focus()}else{const e=ot(document.body,"prev")||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),p&&i&&a.createElement("span",{"aria-owns":i.id,style:lt}),i&&h(t,i),p&&i&&a.createElement(ut,{"data-type":"outside",ref:u,onFocus:e=>{if(it(e,i)){var t;null==(t=f.current)||t.focus()}else{const t=ot(document.body,"next")||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const pt=()=>a.useContext(dt);let ht;function mt(e){var t;void 0===e&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e;if("production"!==process.env.NODE_ENV){var i;const t="Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";var s,l;if(null!=(i=e.elements)&&i.reference&&!E(e.elements.reference))if(null==(s=ht)||!s.has(t))null==(l=ht)||l.add(t),console.error(t)}const[c,u]=a.useState(null),d=(null==(t=e.elements)?void 0:t.reference)||c,p=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,p]=a.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,m]=a.useState(r);De(h,r)||m(r);const[g,y]=a.useState(null),[v,b]=a.useState(null),w=a.useCallback((e=>{e!==F.current&&(F.current=e,y(e))}),[]),x=a.useCallback((e=>{e!==D.current&&(D.current=e,b(e))}),[]),S=i||g,$=s||v,F=a.useRef(null),D=a.useRef(null),O=a.useRef(d),E=null!=c,B=Be(c),C=Be(o),j=a.useCallback((()=>{if(!F.current||!D.current)return;const e={placement:t,strategy:n,middleware:h};C.current&&(e.platform=C.current),$e(F.current,D.current,e).then((e=>{const t={...e,isPositioned:!0};k.current&&!De(O.current,t)&&(O.current=t,f.flushSync((()=>{p(t)})))}))}),[h,t,n,C]);Fe((()=>{!1===u&&O.current.isPositioned&&(O.current.isPositioned=!1,p((e=>({...e,isPositioned:!1}))))}),[u]);const k=a.useRef(!1);Fe((()=>(k.current=!0,()=>{k.current=!1})),[]),Fe((()=>{if(S&&(F.current=S),$&&(D.current=$),S&&$){if(B.current)return B.current(S,$,j);j()}}),[S,$,j,B,E]);const M=a.useMemo((()=>({reference:F,floating:D,setReference:w,setFloating:x})),[w,x]),_=a.useMemo((()=>({reference:S,floating:$})),[S,$]),A=a.useMemo((()=>{const e={position:n,left:0,top:0};if(!_.floating)return e;const t=Ee(_.floating,d.x),r=Ee(_.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...Oe(_.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,_.floating,d.x,d.y]);return a.useMemo((()=>({...d,update:j,refs:M,elements:_,floatingStyles:A})),[d,j,M,_,A])}(e),h=a.useContext(tt),m=null!=((null==(g=a.useContext(et))?void 0:g.id)||null);var g;const y=function(e){const t=a.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Ue((()=>{t.current=e})),a.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}(((e,t,n)=>{e&&(b.current.openEvent=t),w.emit("openchange",{open:e,event:t,reason:n,nested:m}),null==r||r(e,t,n)})),v=a.useRef(null),b=a.useRef({}),w=a.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}()))[0],x=Ke(),S=a.useCallback((e=>{const t=E(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;p.refs.setReference(t)}),[p.refs]),$=a.useCallback((e=>{(E(e)||null===e)&&(v.current=e,u(e)),(E(p.refs.reference.current)||null===p.refs.reference.current||null!==e&&!E(e))&&p.refs.setReference(e)}),[p.refs]),F=a.useMemo((()=>({...p.refs,setReference:$,setPositionReference:S,domReference:v})),[p.refs,$,S]),D=a.useMemo((()=>({...p.elements,domReference:d})),[p.elements,d]),O=a.useMemo((()=>({...p,refs:F,elements:D,dataRef:b,nodeId:o,floatingId:x,events:w,open:n,onOpenChange:y})),[p,o,x,w,n,y,F,D]);return Ze((()=>{const e=null==h?void 0:h.nodesRef.current.find((e=>e.id===o));e&&(e.context=O)})),a.useMemo((()=>({...p,context:O,refs:F,elements:D})),[p,F,D,O])}"production"!==process.env.NODE_ENV&&(ht=new Set);var gt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function yt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vt,bt={exports:{}};vt=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case c:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case l:case d:case m:case h:case s:return g;default:return t}}case r:return t}}}var x=c,S=u,$=l,F=s,D=n,O=d,E=o,B=m,C=h,j=r,k=a,M=i,_=f,A=!1;function R(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=S,t.ContextConsumer=$,t.ContextProvider=F,t.Element=D,t.ForwardRef=O,t.Fragment=E,t.Lazy=B,t.Memo=C,t.Portal=j,t.Profiler=k,t.StrictMode=M,t.Suspense=_,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||w(e)===c},t.isConcurrentMode=R,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var wt=bt.exports=vt(s),xt={exports:{}};xt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],p=u&&u[1];a[l]=p?{regex:f,parser:p}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(o||i?1:p.getDate()),m=o||p.getFullYear(),g=0;o&&!i||(g=i>0?i-1:p.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,h,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,y,v,b,w)):new Date(m,g,h,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}();var St,$t,Ft=yt(xt.exports),Dt={exports:{}},Ot=yt(Dt.exports=(St={year:0,month:1,day:2,hour:3,minute:4,second:5},$t={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=$t[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$t[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=St[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,p=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Et={exports:{}};Et.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x=function(e){return e instanceof D},S=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},$=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=S,F.i=x,F.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return $(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<$(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),p=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},h=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return p(r?y-w:y+(6-w),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case i:return h(v+"Seconds",2);case o:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],h=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,p=this;r=Number(r);var h=F.p(u),m=function(e){var t=$(p);return F.w(t.date(t.date()+Math.round(e*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===s)return m(1);if(h===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[h]||1,y=this.$d.getTime()+r*g;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},d=function(e){return F.s(i%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:F.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:o};return r.replace(m,(function(e,t){return t||h[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=F.p(f),g=$(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=F.m(this,g);return b=(h={},h[d]=b/12,h[c]=b,h[u]=b/3,h[l]=(v-y)/6048e5,h[s]=(v-y)/864e5,h[a]=v/n,h[i]=v/t,h[o]=v/e,h)[m]||v,p?b:F.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=D.prototype;return $.prototype=O,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,D,$),e.$i=!0),$},$.locale=S,$.isDayjs=x,$.unix=function(e){return $(1e3*e)},$.en=w[b],$.Ls=w,$.p={},$}();var Bt=yt(Et.exports),Ct={exports:{}};Ct.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var jt=yt(Ct.exports),kt={exports:{}};kt.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Mt=yt(kt.exports),_t={exports:{}};_t.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var At,Rt=yt(_t.exports);Bt.extend(jt),Bt.extend(Mt),Bt.extend(Rt),Bt.extend(Ft),Bt.extend(Ot),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Bt(t).startOf("week");return Tt(n).map((e=>Ht(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ht(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Bt(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Bt(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Bt(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?Bt(r):void 0,o?Bt(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(At||(At={}));const Tt=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ht=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Lt=[1,3,5,7,8,10,12],It=[4,6,9,11];var Pt,zt,Nt,Wt;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Lt.includes(i)?Math.min(o,31).toString():It.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Bt(e,n);return Bt(t,n).diff(r,"minute")},e.toDayjs=e=>e?Bt(e):Bt(),e.addMinutesToTime=(e,t,n="HH:mm")=>Bt(e,n).add(t,"minutes").format(n)}(Pt||(Pt={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Bt(e).isBefore(r,"day"))||!(!o||!Bt(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(Bt(e).isValid())return e}return""}}(zt||(zt={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Nt||(Nt={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Wt||(Wt={}));const Yt=r.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return o`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Vt=r.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=o`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=o`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=o`
                transition: none;
            `),t}}
`,qt=({show:t=!1,rootId:n,onOverlayClick:r,children:o,backgroundOpacity:i,backgroundBlur:a=!0,disableTransition:l=!1,enableOverlayClick:f=!1,zIndex:h,id:m})=>{const[g,y]=u(null),[v,b]=u(),[w]=u((()=>Nt.generate())),x=d(),S=d(null),$=o&&s.cloneElement(o,{ref:S}),F=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root";c((()=>(B(),y(O()),()=>{M(),j().length<1&&C("remove")})),[]),c((()=>{if(t){const e=E();D(e),k();const t=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(t)}{M();const e=setTimeout((()=>{j().length<1&&C("remove")}),200);return()=>clearTimeout(e)}}),[t]);const D=e=>{x.current=e,b(e)},O=()=>document&&n?document.getElementById(n):document?document.body:null,E=()=>j().length>0,B=()=>{if(!document.getElementById(Ut)){const e=document.createElement("style");e.id=Ut;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Zt} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Zt}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(Zt);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Zt):document.body.classList.add(Zt)},j=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},k=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=[...e,w].join(",")},M=()=>{const e=j();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==w)).join(",")},_=e=>{var t;const n=null===(t=S.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||r&&f&&(e.preventDefault(),r())};return g?p.createPortal(e(Yt,Object.assign({id:F,"data-testid":F,$show:t,zIndex:h,$stacked:v},{children:o&&e(Vt,Object.assign({"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:i||(v?.5:.8),$backgroundBlur:a,$disableTransition:l,$enableOverlayClick:f,onClick:_},{children:$}))})),g):null},Ut="lifesg-ds-overlay-stylesheet",Zt="lifesg-ds-overlay-open",Qt=r.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${w.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Xt=t=>{var{id:n="modal",show:r,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:f=!0}=t,p=y(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,m]=u(),[g,v]=u();c((()=>window.visualViewport?(w(),window.visualViewport.addEventListener("resize",w),()=>{window.visualViewport.removeEventListener("resize",w)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),c((()=>{var e,t;r&&f&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[r]);const b=()=>{const e=.01*window.innerHeight;m(e)},w=()=>{const e=.01*window.visualViewport.height;m(e),v(window.visualViewport.offsetTop)};return e(qt,Object.assign({"data-testid":`${n}-overlay`,show:r,enableOverlayClick:a,onOverlayClick:d,id:n,rootId:s,zIndex:l},{children:e(Qt,Object.assign({show:r,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},p,{children:i}))}))};var Gt=Array.isArray,Jt="object"==typeof gt&&gt&&gt.Object===Object&&gt,Kt="object"==typeof self&&self&&self.Object===Object&&self,en=Jt||Kt||Function("return this")(),tn=en.Symbol,nn=tn,rn=Object.prototype,on=rn.hasOwnProperty,an=rn.toString,sn=nn?nn.toStringTag:void 0;var ln=function(e){var t=on.call(e,sn),n=e[sn];try{e[sn]=void 0;var r=!0}catch(e){}var o=an.call(e);return r&&(t?e[sn]=n:delete e[sn]),o},cn=Object.prototype.toString;var un=ln,dn=function(e){return cn.call(e)},fn=tn?tn.toStringTag:void 0;var pn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":fn&&fn in Object(e)?un(e):dn(e)};var hn=pn,mn=function(e){return null!=e&&"object"==typeof e};var gn=function(e){return"symbol"==typeof e||mn(e)&&"[object Symbol]"==hn(e)},yn=Gt,vn=gn,bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/;var xn=function(e,t){if(yn(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!vn(e))||(wn.test(e)||!bn.test(e)||null!=t&&e in Object(t))};var Sn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},$n=pn,Fn=Sn;var Dn,On=function(e){if(!Fn(e))return!1;var t=$n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},En=en["__core-js_shared__"],Bn=(Dn=/[^.]+$/.exec(En&&En.keys&&En.keys.IE_PROTO||""))?"Symbol(src)_1."+Dn:"";var Cn=function(e){return!!Bn&&Bn in e},jn=Function.prototype.toString;var kn=On,Mn=Cn,_n=Sn,An=function(e){if(null!=e){try{return jn.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Rn=/^\[object .+?Constructor\]$/,Tn=Function.prototype,Hn=Object.prototype,Ln=Tn.toString,In=Hn.hasOwnProperty,Pn=RegExp("^"+Ln.call(In).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var zn=function(e){return!(!_n(e)||Mn(e))&&(kn(e)?Pn:Rn).test(An(e))},Nn=function(e,t){return null==e?void 0:e[t]};var Wn=function(e,t){var n=Nn(e,t);return zn(n)?n:void 0},Yn=Wn(Object,"create"),Vn=Yn;var qn=function(){this.__data__=Vn?Vn(null):{},this.size=0};var Un=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Zn=Yn,Qn=Object.prototype.hasOwnProperty;var Xn=function(e){var t=this.__data__;if(Zn){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Qn.call(t,e)?t[e]:void 0},Gn=Yn,Jn=Object.prototype.hasOwnProperty;var Kn=Yn;var er=qn,tr=Un,nr=Xn,rr=function(e){var t=this.__data__;return Gn?void 0!==t[e]:Jn.call(t,e)},or=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Kn&&void 0===t?"__lodash_hash_undefined__":t,this};function ir(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ir.prototype.clear=er,ir.prototype.delete=tr,ir.prototype.get=nr,ir.prototype.has=rr,ir.prototype.set=or;var ar=ir;var sr=function(){this.__data__=[],this.size=0};var lr=function(e,t){return e===t||e!=e&&t!=t};var cr=function(e,t){for(var n=e.length;n--;)if(lr(e[n][0],t))return n;return-1},ur=cr,dr=Array.prototype.splice;var fr=function(e){var t=this.__data__,n=ur(t,e);return!(n<0)&&(n==t.length-1?t.pop():dr.call(t,n,1),--this.size,!0)},pr=cr;var hr=function(e){var t=this.__data__,n=pr(t,e);return n<0?void 0:t[n][1]},mr=cr;var gr=cr;var yr=function(e,t){var n=this.__data__,r=gr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},vr=sr,br=fr,wr=hr,xr=function(e){return mr(this.__data__,e)>-1},Sr=yr;function $r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$r.prototype.clear=vr,$r.prototype.delete=br,$r.prototype.get=wr,$r.prototype.has=xr,$r.prototype.set=Sr;var Fr=$r,Dr=Wn(en,"Map"),Or=ar,Er=Fr,Br=Dr;var Cr=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var jr=function(e,t){var n=e.__data__;return Cr(t)?n["string"==typeof t?"string":"hash"]:n.map},kr=jr;var Mr=jr;var _r=jr;var Ar=jr;var Rr=function(){this.size=0,this.__data__={hash:new Or,map:new(Br||Er),string:new Or}},Tr=function(e){var t=kr(this,e).delete(e);return this.size-=t?1:0,t},Hr=function(e){return Mr(this,e).get(e)},Lr=function(e){return _r(this,e).has(e)},Ir=function(e,t){var n=Ar(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Pr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pr.prototype.clear=Rr,Pr.prototype.delete=Tr,Pr.prototype.get=Hr,Pr.prototype.has=Lr,Pr.prototype.set=Ir;var zr=Pr;function Nr(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Nr.Cache||zr),n}Nr.Cache=zr;var Wr=Nr;var Yr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vr=/\\(\\)?/g,qr=function(e){var t=Wr(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Yr,(function(e,n,r,o){t.push(r?o.replace(Vr,"$1"):n||e)})),t}));var Ur=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Zr=Ur,Qr=Gt,Xr=gn,Gr=tn?tn.prototype:void 0,Jr=Gr?Gr.toString:void 0;var Kr=function e(t){if("string"==typeof t)return t;if(Qr(t))return Zr(t,e)+"";if(Xr(t))return Jr?Jr.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},eo=Kr;var to=Gt,no=xn,ro=qr,oo=function(e){return null==e?"":eo(e)};var io=gn;var ao=function(e,t){return to(e)?e:no(e,t)?[e]:ro(oo(e))},so=function(e){if("string"==typeof e||io(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var lo=function(e,t){for(var n=0,r=(t=ao(t,e)).length;null!=e&&n<r;)e=e[so(t[n++])];return n&&n==r?e:void 0},co=lo;var uo=yt((function(e,t,n){var r=null==e?void 0:co(e,t);return void 0===r?n:r}));const fo=(e,t,n)=>t?uo(n,t)||uo(e,t):n||e,po=(e,t)=>{const n=t||e.defaultValue;return uo(e.collections,n)};var ho;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ho||(ho={}));const mo={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},go=e=>t=>{const n=t.theme,r=po(mo,n[ho.colorScheme]);return n.options&&n.options.color?fo(r,e,n.options.color):fo(r,e)},yo={Brand:{1:go("Brand.1"),2:go("Brand.2"),3:go("Brand.3"),4:go("Brand.4"),5:go("Brand.5"),6:go("Brand.6")},Primary:go("Primary"),PrimaryDark:go("PrimaryDark"),Secondary:go("Secondary"),Accent:{Light:{1:go("Accent.Light.1"),2:go("Accent.Light.2"),3:go("Accent.Light.3"),4:go("Accent.Light.4"),5:go("Accent.Light.5"),6:go("Accent.Light.6")},Dark:{1:go("Accent.Dark.1"),2:go("Accent.Dark.2"),3:go("Accent.Dark.3")}},Neutral:{1:go("Neutral.1"),2:go("Neutral.2"),3:go("Neutral.3"),4:go("Neutral.4"),5:go("Neutral.5"),6:go("Neutral.6"),7:go("Neutral.7"),8:go("Neutral.8")},Validation:{Green:{Text:go("Validation.Green.Text"),Icon:go("Validation.Green.Icon"),Border:go("Validation.Green.Border"),Background:go("Validation.Green.Background")},Orange:{Text:go("Validation.Orange.Text"),Icon:go("Validation.Orange.Icon"),Border:go("Validation.Orange.Border"),Background:go("Validation.Orange.Background"),Badge:go("Validation.Orange.Badge")},Red:{Text:go("Validation.Red.Text"),Icon:go("Validation.Red.Icon"),Border:go("Validation.Red.Border"),Background:go("Validation.Red.Background")},Blue:{Text:go("Validation.Blue.Text"),Icon:go("Validation.Blue.Icon"),Border:go("Validation.Blue.Border"),Background:go("Validation.Blue.Background")}},Shadow:{Accent:go("Shadow.Accent"),Red:go("Shadow.Red"),Elevation:go("Shadow.Elevation")}},vo={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},bo={collections:{base:{D1:{fontFamily:vo.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:vo.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:vo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:vo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:vo.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:vo.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:vo.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:vo.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:vo.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:vo.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:vo.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:vo.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:vo.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:vo.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},wo=e=>t=>{const n=t.theme,r=po(bo,n[ho.textStyleScheme]);return n.options&&n.options.textStyle?fo(r,e,n.options.textStyle):fo(r,e)},xo={D1:{fontFamily:wo("D1.fontFamily"),fontSize:wo("D1.fontSize"),fontWeight:wo("D1.fontWeight"),lineHeight:wo("D1.lineHeight"),letterSpacing:wo("D1.letterSpacing")},D2:{fontFamily:wo("D2.fontFamily"),fontSize:wo("D2.fontSize"),fontWeight:wo("D2.fontWeight"),lineHeight:wo("D2.lineHeight"),letterSpacing:wo("D2.letterSpacing")},D3:{fontFamily:wo("D3.fontFamily"),fontSize:wo("D3.fontSize"),fontWeight:wo("D3.fontWeight"),lineHeight:wo("D3.lineHeight"),letterSpacing:wo("D3.letterSpacing")},D4:{fontFamily:wo("D4.fontFamily"),fontSize:wo("D4.fontSize"),fontWeight:wo("D4.fontWeight"),lineHeight:wo("D4.lineHeight"),letterSpacing:wo("D4.letterSpacing")},DBody:{fontFamily:wo("DBody.fontFamily"),fontSize:wo("DBody.fontSize"),fontWeight:wo("DBody.fontWeight"),lineHeight:wo("DBody.lineHeight"),letterSpacing:wo("DBody.letterSpacing")},H1:{fontFamily:wo("H1.fontFamily"),fontSize:wo("H1.fontSize"),fontWeight:wo("H1.fontWeight"),lineHeight:wo("H1.lineHeight"),letterSpacing:wo("H1.letterSpacing")},H2:{fontFamily:wo("H2.fontFamily"),fontSize:wo("H2.fontSize"),fontWeight:wo("H2.fontWeight"),lineHeight:wo("H2.lineHeight"),letterSpacing:wo("H2.letterSpacing")},H3:{fontFamily:wo("H3.fontFamily"),fontSize:wo("H3.fontSize"),fontWeight:wo("H3.fontWeight"),lineHeight:wo("H3.lineHeight"),letterSpacing:wo("H3.letterSpacing")},H4:{fontFamily:wo("H4.fontFamily"),fontSize:wo("H4.fontSize"),fontWeight:wo("H4.fontWeight"),lineHeight:wo("H4.lineHeight"),letterSpacing:wo("H4.letterSpacing")},H5:{fontFamily:wo("H5.fontFamily"),fontSize:wo("H5.fontSize"),fontWeight:wo("H5.fontWeight"),lineHeight:wo("H5.lineHeight"),letterSpacing:wo("H5.letterSpacing")},H6:{fontFamily:wo("H6.fontFamily"),fontSize:wo("H6.fontSize"),fontWeight:wo("H6.fontWeight"),lineHeight:wo("H6.lineHeight"),letterSpacing:wo("H6.letterSpacing")},Body:{fontFamily:wo("Body.fontFamily"),fontSize:wo("Body.fontSize"),fontWeight:wo("Body.fontWeight"),lineHeight:wo("Body.lineHeight"),letterSpacing:wo("Body.letterSpacing")},BodySmall:{fontFamily:wo("BodySmall.fontFamily"),fontSize:wo("BodySmall.fontSize"),fontWeight:wo("BodySmall.fontWeight"),lineHeight:wo("BodySmall.lineHeight"),letterSpacing:wo("BodySmall.letterSpacing")},XSmall:{fontFamily:wo("XSmall.fontFamily"),fontSize:wo("XSmall.fontSize"),fontWeight:wo("XSmall.fontWeight"),lineHeight:wo("XSmall.lineHeight"),letterSpacing:wo("XSmall.letterSpacing")}},So=e=>{switch(e){case 700:case"bold":return vo.Bold;case 600:case"semibold":return vo.Semibold;case 300:case"light":return vo.Light;case 400:case"regular":return vo.Regular;default:return""}},$o=(e,t)=>n=>{var r;const i=xo[e].fontFamily(n),a=xo[e].fontWeight(n);return Object.values(vo).includes(i)?o`
                font-family: ${So(t)||So(a)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${null!==(r=Fo(t)||a)&&void 0!==r?r:"normal"};
        `},Fo=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Do=e=>{if(e>0)return o`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Oo=(e,t,n=!1)=>r=>{const i=xo[e],a=i.fontSize(r);return o`
            ${$o(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Eo=(e=!1,t=!1,n=void 0)=>t?o`
            display: block;
            ${Do(n)}
        `:e?o`
            display: inline;
        `:o`
            display: block;
            ${Do(n)}
        `;var Bo;!function(e){e.D1=r.h1`
        ${e=>o`
                ${Oo("D1",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>o`
                ${Oo("D2",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>o`
                ${Oo("D3",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>o`
                ${Oo("D4",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>o`
                ${Oo("DBody",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>o`
                ${Oo("H1",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>o`
                ${Oo("H2",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>o`
                ${Oo("H3",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>o`
                ${Oo("H4",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>o`
                ${Oo("H5",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>o`
                ${Oo("H6",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>o`
                ${Oo("Body",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>o`
                ${Oo("BodySmall",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>o`
                ${Oo("XSmall",e.weight,e.paragraph)}
                color: ${yo.Neutral[1]};
                ${Eo(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>ko(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>ko(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Bo||(Bo={}));const Co=r.a`
    ${e=>o`
            ${Oo(e.textStyle,e.weight)}
            color: ${yo.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${yo.Secondary};

                svg {
                    color: ${yo.Secondary};
                }
            }
        `}
`,jo=r(m)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ko=n=>{var{external:r=!1,children:o}=n,i=y(n,["external","children"]);return t(Co,Object.assign({},i,{children:[o,r&&e(jo,{})]}))},Mo=r.div`
    border-radius: 0.5rem;
    background: ${yo.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,_o=r.button`
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

        ${({$highlight:e})=>e&&o`
                background-color: ${yo.Neutral[7]};
            `}
    }
`,Ao=s.forwardRef(((t,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=y(t,["children","focusHighlight","focusOutline","type"]);return e(_o,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),Ro=r.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${yo.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${w.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,To=r(Ao)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${yo.Accent.Light[1]};
    }
`,Ho=r(g)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${yo.Neutral[3]};
`;var Lo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lo||(Lo={}));const Io=(e,t)=>{const{textColor:n=yo.Neutral[1]}=t||{};return o`
        // Text
        ${Oo(e,"regular")}
        color: ${n};

        a,
        strong {
            ${Oo(e,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            color: ${yo.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${yo.Secondary};

                svg {
                    color: ${yo.Secondary};
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
    `},Po=r.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,zo=r((t=>{var{children:n}=t,r=y(t,["children"]);const o=r["data-testid"]||"card";return e(Mo,Object.assign({},r,{"data-testid":o},{children:"string"==typeof n?e(Bo.Body,{children:n}):n}))}))`
    ${Io("BodySmall")}

    ${w.mobileL} {
        display: none;
    }
`,No=r((n=>{var{id:r="modal-box",children:o,onClose:i,showCloseButton:a=!0}=n,s=y(n,["id","children","onClose","showCloseButton"]);return t(Ro,Object.assign({"data-testid":r},s,{onClick:e=>{e.stopPropagation()}},{children:[a&&e(To,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e(Ho,{})})),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,Wo=r.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${Io("BodySmall")}
`,Yo=r=>{var{children:o,visible:i,onMobileClose:a}=r,s=y(r,["children","visible","onMobileClose"]);const l=s["data-testid"]||"popover",c=wt.useMediaQuery({maxWidth:v.mobileL}),u=()=>{a&&a()},d=()=>"string"==typeof o?e(Bo.BodySmall,{children:o}):o;return t(n,{children:[i&&e(Po,Object.assign({"data-testid":l},s,{children:e(zo,{children:d()})})),c&&e(Xt,Object.assign({show:i,onOverlayClick:u},{children:e(No,Object.assign({onClose:u},{children:e(Wo,{children:d()})}))}))]})},Vo=r.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,qo=r=>{var{children:o,popoverContent:i,trigger:a="click",rootNode:s,onPopoverAppear:l,onPopoverDismiss:f}=r,p=y(r,["children","popoverContent","trigger","rootNode","onPopoverAppear","onPopoverDismiss"]);const[h,m]=u(!1),g=d(),v=wt.useMediaQuery({maxWidth:x.mobileL}),{refs:b,floatingStyles:w}=mt({open:h,placement:"top",whileElementsMounted:we,middleware:[ae(16),Se(),xe()]});c((()=>{if(!v&&h)return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}}),[h]);const S=e=>{g&&!g.current.contains(e.target)&&(m(!1),f&&f())};return t(n,{children:[h&&e(ft,Object.assign({root:s},{children:e("div",Object.assign({ref:b.setFloating,style:Object.assign({},w)},{children:e(Yo,Object.assign({visible:!0,onMobileClose:()=>{m(!1)}},{children:i}))}))})),e(Vo,Object.assign({ref:e=>{g.current=e,b.setReference(e)},onClick:e=>{e.preventDefault(),("click"===a||v)&&(m(!h),!h&&l&&l(),h&&f&&f())},onMouseEnter:()=>{"hover"!==a||v||m(!0)},onMouseLeave:()=>{"hover"===a&&h&&!v&&m(!1)}},p,{children:o}))]})},Uo=r.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${yo.Primary};
    }
`,Zo=r.div`
    display: inline;
    position: relative;
    width: fit-content;
`,Qo=({addon:t,rootNode:n})=>{const{content:r,type:o,icon:a,id:s,"data-testid":l}=t;return e(qo,Object.assign({trigger:"click",id:s,"data-testid":l,popoverContent:r,rootNode:n},{children:e(Zo,{children:e(Uo,{children:a||e(i,{id:`${o}-icon`})})})}))},Xo=r.label`
    ${Oo("H5","semibold")}
    color: ${yo.Neutral[3]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${Oo("H5","semibold")}
    }

    a {
        color: ${yo.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${yo.Secondary};

            svg {
                color: ${yo.Secondary};
            }
        }
    }
`;r(Bo.H6)`
    color: ${yo.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;const Go=r(Bo.BodySmall)`
    color: ${yo.Neutral[3]};
`,Jo=n=>{var{children:r,addon:o,subtitle:i,"data-testid":a}=n,s=y(n,["children","addon","subtitle","data-testid"]);return t(Xo,Object.assign({},s,{children:[r,o&&o.type&&("popover"===o.type?e(Qo,{addon:o}):null),"string"==typeof i?e(Go,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},s,{children:i})):i]}))},Ko=({label:n,value:r,displayWidth:o="full"})=>t(S,Object.assign({$widthStyle:o},{children:[e(Jo,{children:n}),e(Bo.Body,{children:r})]})),ei=r.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:i,$mobileStart:a,$mobileSpan:s}=e;return o`
            grid-column: ${t||"auto"} / span ${n||1};

            ${w.tablet} {
                grid-column: ${r||"auto"} / span
                    ${i||1};
            }

            ${w.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,ti=s.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:o,desktopCols:i}=t,a=y(t,["mobileCols","tabletCols","desktopCols"]);return e(ei,Object.assign({ref:n},(()=>{const e=o||r,t=r,n=ni(i||o||r),a=ni(e),s=ni(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),ni=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,o=t<=n?n:t;let i;return i=o===r?1:o-r,{start:r,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},ri=s.forwardRef(((t,n)=>{const{children:r,"data-testid":o="container",type:i="flex",stretch:a=!1}=t,s=y(t,["children","data-testid","type","stretch"]);return e(oi,Object.assign({ref:n,"data-testid":o,$type:i,$stretch:a},s,{children:r}))})),oi=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?o`
                padding: 0 3rem;
            `:o`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${w.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${w.tablet} {
        max-width: 720px;
    }
    ${w.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return o`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${w.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${w.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return o`
                    display: flex;
                    flex-direction: column;
                `;default:return o`
                    display: flex;
                `}}}
`,ii=s.forwardRef(((t,n)=>{const{children:r,"data-testid":o="section",stretch:i=!1}=t,a=y(t,["children","data-testid","stretch"]);return e(ai,Object.assign({ref:n,"data-testid":o,$stretch:i},a,{children:r}))})),ai=r.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?o`
                ${w.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:o`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,si=s.forwardRef(((t,n)=>{const{children:r,"data-testid":o="content",className:i,type:a="flex",stretch:s=!1}=t,l=y(t,["children","data-testid","className","type","stretch"]);return e(ii,Object.assign({ref:n,"data-testid":o,className:i,stretch:s},l,{children:e(ri,Object.assign({"data-testid":`${o}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),li=r({Section:ii,Container:ri,Content:si,ColDiv:ti}.Content)`
    background: ${yo.Neutral[7]};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,ci=r(Bo.H3)`
    margin-bottom: 1rem;
    grid-column: span 8;
`,ui=r(Bo.Body)`
    margin-bottom: 2rem;
    grid-column: span 8;
`,di=r.div`
    grid-column: span 8;
`,fi=r.ul`
    grid-column: span 8;
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${w.tablet} {
        column-gap: 1.5rem;
    }

    ${w.mobileL} {
        grid-column: 0 / span 4;
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,pi=Object.assign((r=>{var{items:o,title:i,description:a,topSection:s,bottomSection:l,children:c}=r,u=y(r,["items","title","description","topSection","bottomSection","children"]);const d=()=>{if(o&&o.length>0){const t=o.map(((t,n)=>e(Ko,Object.assign({},t),n)));return e(fi,{children:t})}return null};return e(li,Object.assign({},u,{type:"grid"},{children:c||t(n,{children:[i&&e(ci,Object.assign({weight:"semibold"},{children:i})),a&&e(ui,{children:a}),s&&e(di,Object.assign({"data-id":"top-section"},{children:s})),d(),l&&e(di,Object.assign({"data-id":"bottom-section"},{children:l}))]})}))}),{ItemSection:fi,Item:Ko});export{pi as UneditableSection};
//# sourceMappingURL=index.js.map
