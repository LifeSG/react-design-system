import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import{PlaceholderImageIcon as i,CrossIcon as o,MagnifierPlusIcon as r,MagnifierMinusIcon as a,ChevronLeftIcon as s,ChevronRightIcon as l}from"@lifesg/react-icons";import c,{useRef as u,useImperativeHandle as d,useEffect as f,useContext as h,useState as m,lazy as p,Suspense as g,forwardRef as v}from"react";import{useFloatingTree as y,FloatingTree as S,useFloatingNodeId as b,FloatingNode as F}from"@floating-ui/react";import w from"react-dom";import D,{css as x}from"styled-components";import{CrossIcon as B}from"@lifesg/react-icons/cross";import{ExternalIcon as $}from"@lifesg/react-icons/external";function C(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}function O(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var E=function(t,e){return Number(t.toFixed(e))},k=function(t,e,n){n&&"function"==typeof n&&n(t,e)},H={easeOut:function(t){return-Math.cos(t*Math.PI)/2+.5},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},T=function(t){"number"==typeof t&&cancelAnimationFrame(t)},z=function(t){t.mounted&&(T(t.animation),t.animate=!1,t.animation=null,t.velocity=null)};function P(t,e,n,i){if(t.mounted){var o=(new Date).getTime();z(t),t.animation=function(){if(!t.mounted)return T(t.animation);var r=(new Date).getTime()-o,a=(0,H[e])(r/n);r>=n?(i(1),t.animation=null):t.animation&&(i(a),requestAnimationFrame(t.animation))},requestAnimationFrame(t.animation)}}function Y(t,e,n,i){var o=function(t){var e=t.scale,n=t.positionX,i=t.positionY;return!(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(i))}(e);if(t.mounted&&o){var r=t.setTransformState,a=t.transformState,s=a.scale,l=a.positionX,c=a.positionY,u=e.scale-s,d=e.positionX-l,f=e.positionY-c;0===n?r(e.scale,e.positionX,e.positionY):P(t,i,n,(function(t){r(s+u*t,l+d*t,c+f*t)}))}}var A=function(t,e){var n=t.wrapperComponent,i=t.contentComponent,o=t.setup.centerZoomedOut;if(!n||!i)throw new Error("Components are not mounted");var r=function(t,e,n){var i=t.offsetWidth,o=t.offsetHeight,r=e.offsetWidth*n,a=e.offsetHeight*n;return{wrapperWidth:i,wrapperHeight:o,newContentWidth:r,newDiffWidth:i-r,newContentHeight:a,newDiffHeight:o-a}}(n,i,e),a=r.wrapperWidth,s=r.wrapperHeight,l=function(t,e,n,i,o,r,a){var s=t>e?n*(a?1:.5):0,l=i>o?r*(a?1:.5):0;return{minPositionX:t-e-s,maxPositionX:s,minPositionY:i-o-l,maxPositionY:l}}(a,r.newContentWidth,r.newDiffWidth,s,r.newContentHeight,r.newDiffHeight,Boolean(o));return l},M=function(t,e,n,i){return E(i?t<e?e:t>n?n:t:t,2)},W=function(t,e){var n=A(t,e);return t.bounds=n,n};function L(t,e,n,i,o,r,a){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,u=n.maxPositionY,d=0,f=0;return a&&(d=o,f=r),{x:M(t,s-d,c+d,i),y:M(e,l-f,u+f,i)}}function I(t,e,n,i,o,r){var a=t.transformState,s=a.scale,l=a.positionX,c=a.positionY,u=i-s;return"number"!=typeof e||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):L(l-e*u,c-n*u,o,r,0,0,null)}function _(t,e,n,i,o){var r=e-(o?i:0);return!Number.isNaN(n)&&t>=n?n:!Number.isNaN(e)&&t<=r?r:t}var j=function(t,e){var n=t.setup.panning.excluded,i=t.isInitialized,o=t.wrapperComponent,r=e.target,a="shadowRoot"in r&&"composedPath"in e?e.composedPath().some((function(t){return t instanceof Element&&(null==o?void 0:o.contains(t))})):null==o?void 0:o.contains(r);return!!(i&&r&&a)&&!Dt(r,n)},V=function(t){var e=t.isInitialized,n=t.isPanning,i=t.setup.panning.disabled;return!(!e||!n||i)};function X(t,e,n,i,o){var r=t.setup.limitToBounds,a=t.wrapperComponent,s=t.bounds,l=t.transformState,c=l.scale,u=l.positionX,d=l.positionY;if(null!==a&&null!==s&&(e!==u||n!==d)){var f=L(e,n,s,r,i,o,a),h=f.x,m=f.y;t.setTransformState(c,h,m)}}var N=function(t,e){var n=t.setup,i=t.transformState.scale,o=n.minScale,r=n.disablePadding;return e>0&&i>=o&&!r?e:0};function R(t,e,n,i,o,r,a,s,l,c){if(o){var u;if(e>a&&n>a)return(u=a+(t-a)*c)>l?l:u<a?a:u;if(e<r&&n<r)return(u=r+(t-r)*c)<s?s:u>r?r:u}return i?e:M(t,r,a,o)}function Z(t,e){var n=function(t){var e=t.mounted,n=t.setup,i=n.disabled,o=n.velocityAnimation,r=t.transformState.scale;return!(o.disabled&&!(r>1)&&i&&!e)}(t);if(n){var i=t.lastMousePosition,o=t.velocityTime,r=t.setup,a=t.wrapperComponent,s=r.velocityAnimation.equalToMove,l=Date.now();if(i&&o&&a){var c=function(t,e){return e?Math.min(1,t.offsetWidth/window.innerWidth):1}(a,s),u=e.x-i.x,d=e.y-i.y,f=u/c,h=d/c,m=l-o,p=u*u+d*d,g=Math.sqrt(p)/m;t.velocity={velocityX:f,velocityY:h,total:g}}t.lastMousePosition=e,t.velocityTime=l}}function K(t,e){var n=t.transformState.scale;z(t),W(t,n),void 0!==window.TouchEvent&&e instanceof TouchEvent?function(t,e){var n=e.touches,i=t.transformState,o=i.positionX,r=i.positionY;if(t.isPanning=!0,1===n.length){var a=n[0].clientX,s=n[0].clientY;t.startCoords={x:a-o,y:s-r}}}(t,e):function(t,e){var n=t.transformState,i=n.positionX,o=n.positionY;t.isPanning=!0;var r=e.clientX,a=e.clientY;t.startCoords={x:r-i,y:a-o}}(t,e)}function J(t,e){var n=t.transformState.scale,i=t.setup,o=i.minScale,r=i.alignmentAnimation,a=r.disabled,s=r.sizeX,l=r.sizeY,c=r.animationTime,u=r.animationType;if(!(a||n<o||!s&&!l)){var d=function(t){var e=t.transformState,n=e.positionX,i=e.positionY,o=e.scale,r=t.setup,a=r.disabled,s=r.limitToBounds,l=r.centerZoomedOut,c=t.wrapperComponent;if(!a&&c&&t.bounds){var u=t.bounds,d=u.maxPositionX,f=u.minPositionX,h=u.maxPositionY,m=u.minPositionY,p=n>d||n<f,g=i>h||i<m,v=I(t,n>d?c.offsetWidth:t.setup.minPositionX||0,i>h?c.offsetHeight:t.setup.minPositionY||0,o,t.bounds,s||l),y=v.x,S=v.y;return{scale:o,positionX:p?y:n,positionY:g?S:i}}}(t);d&&Y(t,d,null!=e?e:c,u)}}function U(t,e,n){var i=t.startCoords,o=t.setup.alignmentAnimation,r=o.sizeX,a=o.sizeY;if(i){var s=function(t,e,n){var i=t.startCoords,o=t.transformState,r=t.setup.panning,a=r.lockAxisX,s=r.lockAxisY,l=o.positionX,c=o.positionY;if(!i)return{x:l,y:c};var u=e-i.x,d=n-i.y;return{x:a?l:u,y:s?c:d}}(t,e,n),l=s.x,c=s.y,u=N(t,r),d=N(t,a);Z(t,{x:l,y:c}),X(t,l,c,u,d)}}function Q(t){if(t.isPanning){var e=t.setup.panning.velocityDisabled,n=t.velocity,i=t.wrapperComponent,o=t.contentComponent;t.isPanning=!1,t.animate=!1,t.animation=null;var r=null==i?void 0:i.getBoundingClientRect(),a=null==o?void 0:o.getBoundingClientRect(),s=(null==r?void 0:r.width)||0,l=(null==r?void 0:r.height)||0,c=(null==a?void 0:a.width)||0,u=(null==a?void 0:a.height)||0,d=s<c||l<u;!e&&n&&(null==n?void 0:n.total)>.1&&d?function(t){var e=t.velocity,n=t.bounds,i=t.setup,o=t.wrapperComponent,r=function(t){var e=t.mounted,n=t.velocity,i=t.bounds,o=t.setup,r=o.disabled,a=o.velocityAnimation,s=t.transformState.scale;return!(a.disabled&&!(s>1)&&r&&!e||!n||!i)}(t);if(r&&e&&n&&o){var a=e.velocityX,s=e.velocityY,l=e.total,c=n.maxPositionX,u=n.minPositionX,d=n.maxPositionY,f=n.minPositionY,h=i.limitToBounds,m=i.alignmentAnimation,p=i.zoomAnimation,g=i.panning,v=g.lockAxisY,y=g.lockAxisX,S=p.animationType,b=m.sizeX,F=m.sizeY,w=m.velocityAlignmentTime,D=function(t,e){var n=t.setup.velocityAnimation,i=n.equalToMove,o=n.animationTime,r=n.sensitivity;return i?o*e*r:o}(t,l),x=Math.max(D,w),B=N(t,b),$=N(t,F),C=B*o.offsetWidth/100,O=$*o.offsetHeight/100,E=c+C,k=u-C,T=d+O,z=f-O,Y=t.transformState,A=(new Date).getTime();P(t,S,x,(function(e){var n=t.transformState,i=n.scale,o=n.positionX,r=n.positionY,l=((new Date).getTime()-A)/w,p=1-(0,H[m.animationType])(Math.min(1,l)),g=1-e,S=o+a*g,b=r+s*g,F=R(S,Y.positionX,o,y,h,u,c,k,E,p),D=R(b,Y.positionY,r,v,h,f,d,z,T,p);o===S&&r===b||t.setTransformState(i,F,D)}))}}(t):J(t)}}function G(t,e,n,i){var o=t.setup,r=o.minScale,a=o.maxScale,s=o.limitToBounds,l=_(E(e,2),r,a,0,!1),c=I(t,n,i,l,W(t,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function q(t,e,n){var i=t.transformState.scale,o=t.wrapperComponent,r=t.setup,a=r.minScale,s=r.limitToBounds,l=r.zoomAnimation,c=l.disabled,u=l.animationTime,d=l.animationType,f=c||i>=a;if((i>=1||s)&&J(t),!f&&o&&t.mounted){var h=G(t,a,e||o.offsetWidth/2,n||o.offsetHeight/2);h&&Y(t,h,u,d)}}var tt=function(){return tt=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},tt.apply(this,arguments)};function et(t,e,n){if(n||2===arguments.length)for(var i,o=0,r=e.length;o<r;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var nt=1,it=0,ot=0,rt={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},at="react-transform-wrapper",st="react-transform-component",lt=function(t){var e,n,i,o;return{previousScale:null!==(e=t.initialScale)&&void 0!==e?e:nt,scale:null!==(n=t.initialScale)&&void 0!==n?n:nt,positionX:null!==(i=t.initialPositionX)&&void 0!==i?i:it,positionY:null!==(o=t.initialPositionY)&&void 0!==o?o:ot}},ct=function(t){var e=tt({},rt);return Object.keys(t).forEach((function(n){var i=void 0!==t[n];if(void 0!==rt[n]&&i){var o=Object.prototype.toString.call(rt[n]),r="[object Object]"===o,a="[object Array]"===o;e[n]=r?tt(tt({},rt[n]),t[n]):a?et(et([],rt[n],!0),t[n],!0):t[n]}})),e},ut=function(t,e,n){var i=t.transformState.scale,o=t.wrapperComponent,r=t.setup,a=r.maxScale,s=r.minScale,l=r.zoomAnimation,c=r.smooth,u=l.size;if(!o)throw new Error("Wrapper is not mounted");var d=c?i*Math.exp(e*n):i+e*n;return _(E(d,3),s,a,u,!1)};function dt(t,e,n,i,o){var r=t.wrapperComponent,a=t.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!r)return console.error("No WrapperComponent found");var u=(r.offsetWidth/2-l)/s,d=(r.offsetHeight/2-c)/s,f=G(t,ut(t,e,n),u,d);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");Y(t,f,i,o)}function ft(t,e,n,i){var o=t.setup,r=t.wrapperComponent,a=o.limitToBounds,s=lt(t.props),l=t.transformState,c=l.scale,u=l.positionX,d=l.positionY;if(r){var f=A(t,s.scale),h=L(s.positionX,s.positionY,f,a,0,0,r),m={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&u===s.positionX&&d===s.positionY||(null==i||i(),Y(t,m,e,n))}}var ht=function(t){return function(e,n,i){void 0===e&&(e=.5),void 0===n&&(n=300),void 0===i&&(i="easeOut"),dt(t,1,e,n,i)}},mt=function(t){return function(e,n,i){void 0===e&&(e=.5),void 0===n&&(n=300),void 0===i&&(i="easeOut"),dt(t,-1,e,n,i)}},pt=function(t){return function(e,n,i,o,r){void 0===o&&(o=300),void 0===r&&(r="easeOut");var a=t.transformState,s=a.positionX,l=a.positionY,c=a.scale,u=t.wrapperComponent,d=t.contentComponent;if(!t.setup.disabled&&u&&d){var f={positionX:Number.isNaN(e)?s:e,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(i)?c:i};Y(t,f,o,r)}}},gt=function(t){return function(e,n){void 0===e&&(e=200),void 0===n&&(n="easeOut"),ft(t,e,n)}},vt=function(t){return function(e,n,i){void 0===n&&(n=200),void 0===i&&(i="easeOut");var o=t.transformState,r=t.wrapperComponent,a=t.contentComponent;if(r&&a){var s=Bt(e||o.scale,r,a);Y(t,s,n,i)}}},yt=function(t){return function(e,n,i,o){void 0===i&&(i=600),void 0===o&&(o="easeOut"),z(t);var r=t.wrapperComponent,a="string"==typeof e?document.getElementById(e):e;if(r&&a&&r.contains(a)){var s=function(t,e,n){var i=t.wrapperComponent,o=t.contentComponent,r=t.transformState,a=t.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!i||!o)return r;var u,d,f,h,m,p,g,v,y=i.getBoundingClientRect(),S=e.getBoundingClientRect(),b=(u=i,d=o,f=r,h=e.getBoundingClientRect(),m=u.getBoundingClientRect(),p=d.getBoundingClientRect(),g=m.x*f.scale,v=m.y*f.scale,{x:(h.x-p.x+g)/f.scale,y:(h.y-p.y+v)/f.scale}),F=b.x,w=b.y,D=S.width/r.scale,x=S.height/r.scale,B=i.offsetWidth/D,$=i.offsetHeight/x,C=_(n||Math.min(B,$),l,c,0,!1),O=(y.width-D*C)/2,E=(y.height-x*C)/2,k=L((y.left-F)*C+O,(y.top-w)*C+E,A(t,C),s,0,0,i);return{positionX:k.x,positionY:k.y,scale:C}}(t,a,n);Y(t,s,i,o)}}},St=function(t){return{instance:t,zoomIn:ht(t),zoomOut:mt(t),setTransform:pt(t),resetTransform:gt(t),centerView:vt(t),zoomToElement:yt(t)}},bt=function(t){var e={};return Object.assign(e,function(t){return{instance:t,state:t.transformState}}(t)),Object.assign(e,St(t)),e};function Ft(){try{return{get passive(){return!1}}}catch(t){return!1}}var wt=".".concat(at),Dt=function(t,e){return e.some((function(e){return t.matches("".concat(wt," ").concat(e,", ").concat(wt," .").concat(e,", ").concat(wt," ").concat(e," *, ").concat(wt," .").concat(e," *"))}))},xt=function(t){t&&clearTimeout(t)},Bt=function(t,e,n){var i=n.offsetWidth*t,o=n.offsetHeight*t;return{scale:t,positionX:(e.offsetWidth-i)/2,positionY:(e.offsetHeight-o)/2}};function $t(t,e,n){var i=e.getBoundingClientRect(),o=0,r=0;if("clientX"in t)o=(t.clientX-i.left)/n,r=(t.clientY-i.top)/n;else{var a=t.touches[0];o=(a.clientX-i.left)/n,r=(a.clientY-i.top)/n}return(Number.isNaN(o)||Number.isNaN(r))&&console.error("No mouse or touch offset found"),{x:o,y:r}}var Ct=function(t){return Math.sqrt(Math.pow(t.touches[0].pageX-t.touches[1].pageX,2)+Math.pow(t.touches[0].pageY-t.touches[1].pageY,2))},Ot=function(t,e){var n=t.props,i=n.onWheel,o=n.onZoom,r=t.contentComponent,a=t.setup,s=t.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,u=a.zoomAnimation,d=a.wheel,f=a.disablePadding,h=a.smooth,m=u.size,p=u.disabled,g=d.step,v=d.smoothStep;if(!r)throw new Error("Component not mounted");e.preventDefault(),e.stopPropagation();var y=function(t,e){var n,i,o=function(t){return t?t.deltaY<0?1:-1:0}(t);return i=o,"number"==typeof(n=e)?n:i}(e,null),S=function(t,e,n,i,o){var r=t.transformState.scale,a=t.wrapperComponent,s=t.setup,l=s.maxScale,c=s.minScale,u=s.zoomAnimation,d=s.disablePadding,f=u.size,h=u.disabled;if(!a)throw new Error("Wrapper is not mounted");var m=r+e*n;if(o)return m;var p=!i&&!h;return _(E(m,3),c,l,f,p&&!d)}(t,y,h?v*Math.abs(e.deltaY):g,!e.ctrlKey);if(s!==S){var b=W(t,S),F=$t(e,r,s),w=l&&(p||0===m||c||f),D=I(t,F.x,F.y,S,b,w),x=D.x,B=D.y;t.previousWheelEvent=e,t.setTransformState(S,x,B),k(bt(t),e,i),k(bt(t),e,o)}},Et=function(t,e){var n=t.props,i=n.onWheelStop,o=n.onZoomStop;xt(t.wheelAnimationTimer),t.wheelAnimationTimer=setTimeout((function(){t.mounted&&(q(t,e.x,e.y),t.wheelAnimationTimer=null)}),100);var r=function(t,e){var n=t.previousWheelEvent,i=t.transformState.scale,o=t.setup,r=o.maxScale,a=o.minScale;return!!n&&(i<r||i>a||Math.sign(n.deltaY)!==Math.sign(e.deltaY)||n.deltaY>0&&n.deltaY<e.deltaY||n.deltaY<0&&n.deltaY>e.deltaY||Math.sign(n.deltaY)!==Math.sign(e.deltaY))}(t,e);r&&(xt(t.wheelStopEventTimer),t.wheelStopEventTimer=setTimeout((function(){t.mounted&&(t.wheelStopEventTimer=null,k(bt(t),e,i),k(bt(t),e,o))}),160))},kt=function(t){for(var e=0,n=0,i=0;i<2;i+=1)e+=t.touches[i].clientX,n+=t.touches[i].clientY;return{x:e/2,y:n/2}},Ht=function(t,e){var n=t.contentComponent,i=t.pinchStartDistance,o=t.wrapperComponent,r=t.transformState.scale,a=t.setup,s=a.limitToBounds,l=a.centerZoomedOut,c=a.zoomAnimation,u=a.alignmentAnimation,d=c.disabled,f=c.size;if(null!==i&&n){var h=function(t,e,n){var i=n.getBoundingClientRect(),o=t.touches,r=E(o[0].clientX-i.left,5),a=E(o[0].clientY-i.top,5);return{x:(r+E(o[1].clientX-i.left,5))/2/e,y:(a+E(o[1].clientY-i.top,5))/2/e}}(e,r,n);if(Number.isFinite(h.x)&&Number.isFinite(h.y)){var m=Ct(e),p=function(t,e){var n=t.pinchStartScale,i=t.pinchStartDistance,o=t.setup,r=o.maxScale,a=o.minScale,s=o.zoomAnimation,l=o.disablePadding,c=s.size,u=s.disabled;if(!n||null===i||!e)throw new Error("Pinch touches distance was not provided");return e<0?t.transformState.scale:_(E(e/i*n,2),a,r,c,!u&&!l)}(t,m),g=kt(e),v=g.x-(t.pinchLastCenterX||0),y=g.y-(t.pinchLastCenterY||0);if(p!==r||0!==v||0!==y){t.pinchLastCenterX=g.x,t.pinchLastCenterY=g.y;var S=W(t,p),b=s&&(d||0===f||l),F=I(t,h.x,h.y,p,S,b),w=F.x,D=F.y;t.pinchMidpoint=h,t.lastDistance=m;var x=u.sizeX,B=u.sizeY,$=L(w+v,D+y,S,s,N(t,x),N(t,B),o),C=$.x,O=$.y;t.setTransformState(p,C,O)}}}},Tt=function(t,e){var n=t.props.onZoomStop,i=t.setup.doubleClick.animationTime;xt(t.doubleClickStopEventTimer),t.doubleClickStopEventTimer=setTimeout((function(){t.doubleClickStopEventTimer=null,k(bt(t),e,n)}),i)};function zt(t,e){var n=t.setup,i=t.doubleClickStopEventTimer,o=t.transformState,r=t.contentComponent,a=o.scale,s=t.props,l=s.onZoomStart,c=s.onZoom,u=n.doubleClick,d=u.disabled,f=u.mode,h=u.step,m=u.animationTime,p=u.animationType;if(!d&&!i){if("reset"===f)return function(t,e){var n=t.props,i=n.onZoomStart,o=n.onZoom,r=t.setup.doubleClick,a=r.animationTime,s=r.animationType;k(bt(t),e,i),ft(t,a,s,(function(){return k(bt(t),e,o)})),Tt(t,e)}(t,e);if(!r)return console.error("No ContentComponent found");var g=function(t,e){return"toggle"===t?1===e?1:-1:"zoomOut"===t?-1:1}(f,t.transformState.scale),v=ut(t,g,h);if(a!==v){k(bt(t),e,l);var y=$t(e,r,a),S=G(t,v,y.x,y.y);if(!S)return console.error("Error during zoom event. New transformation state was not calculated.");k(bt(t),e,c),Y(t,S,m,p),Tt(t,e)}}}var Pt=function(t){var e=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){e.initializeWindowEvents()},this.unmount=function(){e.cleanupWindowEvents()},this.update=function(t){e.props=t,W(e,e.transformState.scale),e.setup=ct(t)},this.initializeWindowEvents=function(){var t,n,i=Ft(),o=null===(t=e.wrapperComponent)||void 0===t?void 0:t.ownerDocument,r=null==o?void 0:o.defaultView;null===(n=e.wrapperComponent)||void 0===n||n.addEventListener("wheel",e.onWheelPanning,i),null==r||r.addEventListener("mousedown",e.onPanningStart,i),null==r||r.addEventListener("mousemove",e.onPanning,i),null==r||r.addEventListener("mouseup",e.onPanningStop,i),null==o||o.addEventListener("mouseleave",e.clearPanning,i),null==r||r.addEventListener("keyup",e.setKeyUnPressed,i),null==r||r.addEventListener("keydown",e.setKeyPressed,i)},this.cleanupWindowEvents=function(){var t,n,i=Ft(),o=null===(t=e.wrapperComponent)||void 0===t?void 0:t.ownerDocument,r=null==o?void 0:o.defaultView;null==r||r.removeEventListener("mousedown",e.onPanningStart,i),null==r||r.removeEventListener("mousemove",e.onPanning,i),null==r||r.removeEventListener("mouseup",e.onPanningStop,i),null==o||o.removeEventListener("mouseleave",e.clearPanning,i),null==r||r.removeEventListener("keyup",e.setKeyUnPressed,i),null==r||r.removeEventListener("keydown",e.setKeyPressed,i),document.removeEventListener("mouseleave",e.clearPanning,i),z(e),null===(n=e.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(t){var n=Ft();t.addEventListener("wheel",e.onWheelZoom,n),t.addEventListener("dblclick",e.onDoubleClick,n),t.addEventListener("touchstart",e.onTouchPanningStart,n),t.addEventListener("touchmove",e.onTouchPanning,n),t.addEventListener("touchend",e.onTouchPanningStop,n)},this.handleInitialize=function(t,n){var i=!1,o=e.setup.centerOnInit,r=function(t,e){for(var n=0,i=t;n<i.length;n++)if(i[n].target===e)return!0;return!1};e.applyTransformation(),e.onInitCallbacks.forEach((function(t){t(bt(e))})),e.observer=new ResizeObserver((function(a){if(r(a,t)||r(a,n))if(o&&!i){var s=n.offsetWidth,l=n.offsetHeight;(s>0||l>0)&&(i=!0,e.setCenter())}else z(e),W(e,e.transformState.scale),J(e,0)})),e.observer.observe(t),e.observer.observe(n)},this.onWheelZoom=function(t){if(!e.setup.disabled){var n=function(t,e){var n=t.setup.wheel,i=n.disabled,o=n.wheelDisabled,r=n.touchPadDisabled,a=n.excluded,s=t.isInitialized,l=t.isPanning,c=e.target;return!(!s||l||i||!c||o&&!e.ctrlKey||r&&e.ctrlKey||Dt(c,a))}(e,t);n&&e.isPressingKeys(e.setup.wheel.activationKeys)&&(function(t,e){var n=t.props,i=n.onWheelStart,o=n.onZoomStart;t.wheelStopEventTimer||(z(t),k(bt(t),e,i),k(bt(t),e,o))}(e,t),Ot(e,t),Et(e,t))}},this.onWheelPanning=function(t){var n=e.setup,i=n.disabled,o=n.wheel,r=n.panning;if(e.wrapperComponent&&e.contentComponent&&!i&&o.wheelDisabled&&!r.disabled&&r.wheelPanning&&!t.ctrlKey){t.preventDefault(),t.stopPropagation();var a=e.transformState,s=a.positionX,l=a.positionY,c=s-t.deltaX,u=l-t.deltaY,d=r.lockAxisX?s:c,f=r.lockAxisY?l:u,h=e.setup.alignmentAnimation,m=h.sizeX,p=h.sizeY,g=N(e,m),v=N(e,p);d===s&&f===l||X(e,d,f,g,v)}},this.onPanningStart=function(t){var n=e.setup.disabled,i=e.props.onPanningStart;n||j(e,t)&&e.isPressingKeys(e.setup.panning.activationKeys)&&(0!==t.button||e.setup.panning.allowLeftClickPan)&&(1!==t.button||e.setup.panning.allowMiddleClickPan)&&(2!==t.button||e.setup.panning.allowRightClickPan)&&(t.preventDefault(),t.stopPropagation(),z(e),K(e,t),k(bt(e),t,i))},this.onPanning=function(t){var n=e.setup.disabled,i=e.props.onPanning;n||V(e)&&e.isPressingKeys(e.setup.panning.activationKeys)&&(t.preventDefault(),t.stopPropagation(),U(e,t.clientX,t.clientY),k(bt(e),t,i))},this.onPanningStop=function(t){var n=e.props.onPanningStop;e.isPanning&&(Q(e),k(bt(e),t,n))},this.onPinchStart=function(t){var n=e.setup.disabled,i=e.props,o=i.onPinchingStart,r=i.onZoomStart;if(!n){var a=function(t,e){var n=t.setup.pinch,i=n.disabled,o=n.excluded,r=t.isInitialized,a=e.target;return!(!r||i||!a||Dt(a,o))}(e,t);a&&(function(t,e){var n=Ct(e);t.pinchStartDistance=n,t.lastDistance=n,t.pinchStartScale=t.transformState.scale,t.isPanning=!1;var i=kt(e);t.pinchLastCenterX=i.x,t.pinchLastCenterY=i.y,z(t)}(e,t),z(e),k(bt(e),t,o),k(bt(e),t,r))}},this.onPinch=function(t){var n=e.setup.disabled,i=e.props,o=i.onPinching,r=i.onZoom;if(!n){var a=function(t){var e=t.setup.pinch.disabled,n=t.isInitialized,i=t.pinchStartDistance;return!(!n||e||!i)}(e);a&&(t.preventDefault(),t.stopPropagation(),Ht(e,t),k(bt(e),t,o),k(bt(e),t,r))}},this.onPinchStop=function(t){var n,i,o=e.props,r=o.onPinchingStop,a=o.onZoomStop;e.pinchStartScale&&(i=(n=e).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,q(n,null==i?void 0:i.x,null==i?void 0:i.y),k(bt(e),t,r),k(bt(e),t,a))},this.onTouchPanningStart=function(t){var n=e.setup.disabled,i=e.props.onPanningStart;if(!n&&j(e,t)&&!(e.lastTouch&&+new Date-e.lastTouch<200&&1===t.touches.length)){e.lastTouch=+new Date,z(e);var o=t.touches,r=1===o.length,a=2===o.length;r&&(z(e),K(e,t),k(bt(e),t,i)),a&&e.onPinchStart(t)}},this.onTouchPanning=function(t){var n=e.setup.disabled,i=e.props.onPanning;if(e.isPanning&&1===t.touches.length){if(n)return;if(!V(e))return;t.preventDefault(),t.stopPropagation();var o=t.touches[0];U(e,o.clientX,o.clientY),k(bt(e),t,i)}else t.touches.length>1&&e.onPinch(t)},this.onTouchPanningStop=function(t){e.onPanningStop(t),e.onPinchStop(t)},this.onDoubleClick=function(t){if(!e.setup.disabled){var n=function(t,e){var n=t.isInitialized,i=t.setup,o=t.wrapperComponent,r=i.doubleClick,a=r.disabled,s=r.excluded,l=e.target,c=null==o?void 0:o.contains(l);return!(!(n&&l&&c)||a||Dt(l,s))}(e,t);n&&zt(e,t)}},this.clearPanning=function(t){e.isPanning&&e.onPanningStop(t)},this.setKeyPressed=function(t){e.pressedKeys[t.key]=!0},this.setKeyUnPressed=function(t){e.pressedKeys[t.key]=!1},this.isPressingKeys=function(t){return!t.length||Boolean(t.find((function(t){return e.pressedKeys[t]})))},this.setTransformState=function(t,n,i){var o=e.props.onTransformed;if(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(i))console.error("Detected NaN set state values");else{t!==e.transformState.scale&&(e.transformState.previousScale=e.transformState.scale,e.transformState.scale=t),e.transformState.positionX=n,e.transformState.positionY=i,e.applyTransformation();var r=bt(e);e.onChangeCallbacks.forEach((function(t){return t(r)})),k(r,{scale:t,positionX:n,positionY:i},o)}},this.setCenter=function(){if(e.wrapperComponent&&e.contentComponent){var t=Bt(e.transformState.scale,e.wrapperComponent,e.contentComponent);e.setTransformState(t.scale,t.positionX,t.positionY)}},this.handleTransformStyles=function(t,n,i){return e.props.customTransform?e.props.customTransform(t,n,i):function(t,e,n){return"translate(".concat(t,"px, ").concat(e,"px) scale(").concat(n,")")}(t,n,i)},this.applyTransformation=function(){if(e.mounted&&e.contentComponent){var t=e.transformState,n=t.scale,i=t.positionX,o=t.positionY,r=e.handleTransformStyles(i,o,n);e.contentComponent.style.transform=r}},this.getContext=function(){return bt(e)},this.onChange=function(t){return e.onChangeCallbacks.has(t)||e.onChangeCallbacks.add(t),function(){e.onChangeCallbacks.delete(t)}},this.onInit=function(t){return e.onInitCallbacks.has(t)||e.onInitCallbacks.add(t),function(){e.onInitCallbacks.delete(t)}},this.init=function(t,n){e.cleanupWindowEvents(),e.wrapperComponent=t,e.contentComponent=n,W(e,e.transformState.scale),e.handleInitializeWrapperEvents(t),e.handleInitialize(t,n),e.initializeWindowEvents(),e.isInitialized=!0;var i=bt(e);k(i,void 0,e.props.onInit)},this.props=t,this.setup=ct(this.props),this.transformState=lt(this.props)},Yt=c.createContext(null),At=c.forwardRef((function(t,e){var n,i,o=u(new Pt(t)).current,r=(n=t.children,i=St(o),"function"==typeof n?n(i):n);return d(e,(function(){return St(o)}),[o]),f((function(){o.update(t)}),[o,t]),c.createElement(Yt.Provider,{value:o},r)}));c.forwardRef((function(t,e){var n,i=u(null),o=h(Yt);return f((function(){return o.onChange((function(t){if(i.current){i.current.style.transform=o.handleTransformStyles(0,0,1/t.instance.transformState.scale)}}))}),[o]),c.createElement("div",tt({},t,{ref:(n=[i,e],function(t){n.forEach((function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)}))})}))}));var Mt="transform-component-module_wrapper__SPB86",Wt="transform-component-module_content__FBWxo";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  transform: translate3d(0, 0, 0);\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var Lt=function(t){var e=t.children,n=t.wrapperClass,i=void 0===n?"":n,o=t.contentClass,r=void 0===o?"":o,a=t.wrapperStyle,s=t.contentStyle,l=t.wrapperProps,d=void 0===l?{}:l,m=t.contentProps,p=void 0===m?{}:m,g=h(Yt),v=g.init,y=g.cleanupWindowEvents,S=u(null),b=u(null);return f((function(){var t=S.current,e=b.current;return null!==t&&null!==e&&v&&(null==v||v(t,e)),function(){null==y||y()}}),[]),c.createElement("div",tt({},d,{ref:S,className:"".concat(at," ").concat(Mt," ").concat(i),style:a}),c.createElement("div",tt({},p,{ref:b,className:"".concat(st," ").concat(Wt," ").concat(r),style:s}),e))},It="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function _t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jt={exports:{}};jt.exports=function(){var t=1e3,e=6e4,n=36e5,i="millisecond",o="second",r="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(i,c),r=n-o<0,a=e.clone().add(i+(r?-1:1),c);return+(-(i+(n-o)/(r?o-a:a-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:s,D:f,h:a,m:r,s:o,ms:i,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",b={};b[S]=g;var F="$isDayjsObject",w=function(t){return t instanceof $||!(!t||!t[F])},D=function t(e,n,i){var o;if(!e)return S;if("string"==typeof e){var r=e.toLowerCase();b[r]&&(o=r),n&&(b[r]=n,o=r);var a=e.split("-");if(!o&&a.length>1)return t(a[0])}else{var s=e.name;b[s]=e,o=s}return!i&&o&&(S=o),o||!i&&S},x=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},B=y;B.l=D,B.i=w,B.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $=function(){function g(t){this.$L=D(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[F]=!0}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var o=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],o,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return B},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return x(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<x(t)},v.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,i=!!B.u(e)||e,u=B.p(t),h=function(t,e){var o=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?o:o.endOf(s)},m=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return i?h(1,0):h(31,11);case c:return i?h(1,g):h(0,g+1);case l:var S=this.$locale().weekStart||0,b=(p<S?p+7:p)-S;return h(i?v-b:v+(6-b),g);case s:case f:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case r:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,l=B.p(t),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[r]=u+"Minutes",n[o]=u+"Seconds",n[i]=u+"Milliseconds",n)[l],m=l===s?this.$D+(e-this.$W):e;if(l===c||l===d){var p=this.clone().set(f,1);p.$d[h](m),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[B.p(t)]()},v.add=function(i,u){var f,h=this;i=Number(i);var m=B.p(u),p=function(t){var e=x(h);return B.w(e.date(e.date()+Math.round(t*i)),h)};if(m===c)return this.set(c,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===s)return p(1);if(m===l)return p(7);var g=(f={},f[r]=e,f[a]=n,f[o]=t,f)[m]||1,v=this.$d.getTime()+i*g;return B.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",o=B.z(this),r=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(t,n,o,r){return t&&(t[n]||t(e,i))||o[n].slice(0,r)},f=function(t){return B.s(r%12||12,t,"0")},m=u||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(p,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return B.s(e.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return e.$D;case"DD":return B.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(r);case"HH":return B.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(r,a,!0);case"A":return m(r,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(e.$s);case"ss":return B.s(e.$s,2,"0");case"SSS":return B.s(e.$ms,3,"0");case"Z":return o}return null}(t)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(i,f,h){var m,p=this,g=B.p(f),v=x(i),y=(v.utcOffset()-this.utcOffset())*e,S=this-v,b=function(){return B.m(p,v)};switch(g){case d:m=b()/12;break;case c:m=b();break;case u:m=b()/3;break;case l:m=(S-y)/6048e5;break;case s:m=(S-y)/864e5;break;case a:m=S/n;break;case r:m=S/e;break;case o:m=S/t;break;default:m=S}return h?m:B.a(m)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return b[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=D(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return B.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),C=$.prototype;return x.prototype=C,[["$ms",i],["$s",o],["$m",r],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(t){C[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,$,x),t.$i=!0),x},x.locale=D,x.isDayjs=w,x.unix=function(t){return x(1e3*t)},x.en=b[S],x.Ls=b,x.p={},x}();var Vt=_t(jt.exports),Xt={exports:{}};Xt.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,i=/\d\d/,o=/\d\d?/,r=/\d*[^-_:/,()\s\d]+/,a={},s=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],u=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,i=a.meridiem;if(i){for(var o=1;o<=24;o+=1)if(t.indexOf(i(o,0,e))>-1){n=o>12;break}}else n=t===(e?"pm":"PM");return n},f={A:[r,function(t){this.afternoon=d(t,!1)}],a:[r,function(t){this.afternoon=d(t,!0)}],Q:[n,function(t){this.month=3*(t-1)+1}],S:[n,function(t){this.milliseconds=100*+t}],SS:[i,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[o,l("seconds")],ss:[o,l("seconds")],m:[o,l("minutes")],mm:[o,l("minutes")],H:[o,l("hours")],h:[o,l("hours")],HH:[o,l("hours")],hh:[o,l("hours")],D:[o,l("day")],DD:[i,l("day")],Do:[r,function(t){var e=a.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var i=1;i<=31;i+=1)e(i).replace(/\[|\]/g,"")===t&&(this.day=i)}],w:[o,l("week")],ww:[i,l("week")],M:[o,l("month")],MM:[i,l("month")],MMM:[r,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[r,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[i,function(t){this.year=s(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(n){var i,o;i=n,o=a&&a.formats;for(var r=(n=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var r=i&&i.toUpperCase();return n||o[i]||t[i]||o[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=r.length,l=0;l<s;l+=1){var c=r[l],u=f[c],d=u&&u[0],h=u&&u[1];r[l]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,i=0;n<s;n+=1){var o=r[n];if("string"==typeof o)i+=o.length;else{var a=o.regex,l=o.parser,c=t.slice(i),u=a.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var i=e.prototype,o=i.parse;i.parse=function(t){var e=t.date,i=t.utc,r=t.args;this.$u=i;var s=r[1];if("string"==typeof s){var l=!0===r[2],c=!0===r[3],u=l||c,d=r[2];c&&(d=r[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(t,e,n,i){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var o=h(e)(t),r=o.year,a=o.month,s=o.day,l=o.hours,c=o.minutes,u=o.seconds,d=o.milliseconds,f=o.zone,m=o.week,p=new Date,g=s||(r||a?1:p.getDate()),v=r||p.getFullYear(),y=0;r&&!a||(y=a>0?a-1:p.getMonth());var S,b=l||0,F=c||0,w=u||0,D=d||0;return f?new Date(Date.UTC(v,y,g,b,F,w,D+60*f.offset*1e3)):n?new Date(Date.UTC(v,y,g,b,F,w,D)):(S=new Date(v,y,g,b,F,w,D),m&&(S=i(S).week(m).toDate()),S)}catch(t){return new Date("")}}(e,s,i,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,m=1;m<=f;m+=1){r[1]=s[m-1];var p=n.apply(this,r);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===f&&(this.$d=new Date(""))}else o.call(this,t)}}}();var Nt=_t(Xt.exports),Rt={exports:{}};Rt.exports=function(t,e,n){e.prototype.isBetween=function(t,e,i,o){var r=n(t),a=n(e),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(r,i):!this.isBefore(r,i))&&(l?this.isBefore(a,i):!this.isAfter(a,i))||(s?this.isBefore(r,i):!this.isAfter(r,i))&&(l?this.isAfter(a,i):!this.isBefore(a,i))}};var Zt=_t(Rt.exports),Kt={exports:{}};Kt.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var Jt=_t(Kt.exports),Ut={exports:{}};Ut.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var Qt,Gt,qt,te=_t(Ut.exports),ee={exports:{}},ne=_t(ee.exports=(Qt={year:0,month:1,day:2,hour:3,minute:4,second:5},Gt={},function(t,e,n){var i,o=function(t,e,n){void 0===n&&(n={});var i=new Date(t),o=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",i=t+"|"+n,o=Gt[i];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Gt[i]=o),o}(e,n);return o.formatToParts(i)},r=function(t,e){for(var i=o(t,e),r=[],a=0;a<i.length;a+=1){var s=i[a],l=s.type,c=s.value,u=Qt[l];u>=0&&(r[u]=parseInt(c,10))}var d=r[3],f=24===d?0:d,h=r[0]+"-"+r[1]+"-"+r[2]+" "+f+":"+r[4]+":"+r[5]+":000",m=+t;return(n.utc(h).valueOf()-(m-=m%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=i);var o,r=this.utcOffset(),a=this.toDate(),s=a.toLocaleString("en-US",{timeZone:t}),l=Math.round((a-new Date(s))/1e3/60),c=15*-Math.round(a.getTimezoneOffset()/15)-l;if(Number(c)){if(o=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),e){var u=o.utcOffset();o=o.add(r-u,"minute")}}else o=this.utcOffset(0,e);return o.$x.$timezone=t,o},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),i=o(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return i&&i.value};var s=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var i=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(i,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,o){var a=o&&e,s=o||e||i,l=r(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var i=t-60*e*1e3,o=r(i,n);if(e===o)return[i,e];var a=r(i-=60*(o-e)*1e3,n);return o===a?[i,o]:[t-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(t,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){i=t}}));Vt.extend(Zt),Vt.extend(te),Vt.extend(Jt),Vt.extend(Nt),Vt.extend(ne),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=Vt(e).startOf("week");return ie(n).map((t=>oe(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return oe(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const i=t.month(n);e.push(Vt(i))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),i=t.year(n),o=[i.subtract(1,"year"),i];for(let t=1;t<11;t++)o.push(i.add(t,"year"));return o},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+Vt(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=Vt(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,i="day")=>!e&&!n||(e&&n?t.isBetween(e,n,i,"[]"):e?t.isSameOrAfter(e,i):t.isSameOrBefore(n,i)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:i}=t.getStartEndDecade(e);return t.isWithinRange(e.year(i).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:i}=t.getStartEndDecade(e);return t.isWithinRange(e.year(i).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,i,o)=>{const r=t.isWithinRange(e,i?Vt(i):void 0,o?Vt(o):void 0),a=n&&n.includes(e.format("YYYY-MM-DD"));return!r||!!a}}(qt||(qt={}));const ie=t=>{const e=[t];for(let n=1;n<6;n++){const i=t.add(n,"week");e.push(i)}return e},oe=t=>{const e=[];for(let n=0;n<7;n++){const i=t.add(n,"day");e.push(i)}return e},re=[1,3,5,7,8,10,12],ae=[4,6,9,11];var se,le,ce,ue;!function(t){t.clampDay=(e,n,i)=>{const o=parseInt(e),r=parseInt(n),a=parseInt(i);return 0==o?"1":re.includes(r)?Math.min(o,31).toString():ae.includes(r)?Math.min(o,30).toString():2===r?t.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const i=Vt(t,n);return Vt(e,n).diff(i,"minute")},t.toDayjs=t=>t?Vt(t):Vt(),t.addMinutesToTime=(t,e,n="HH:mm")=>Vt(t,n).add(e,"minutes").format(n),t.isSame=(t,e,n="day")=>Vt(t).isSame(Vt(e),n)}(se||(se={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:i,maxDate:o}=e;return!!(n&&n.length&&n.includes(t))||(!(!i||!Vt(t).isBefore(i,"day"))||!(!o||!Vt(t).isAfter(o,"day")))},t.sanitizeInput=t=>{if(t){if(Vt(t).isValid())return t}return""}}(le||(le={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(ce||(ce={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,i,o=8)=>{let r=0;e>n&&(r=Math.floor((e-n)/o));const a=i+r;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.truncateTwoLines=(t,e,n,i=1.2)=>{const o=Math.floor(2*e/(.6*n))*(2/i);if(t.length<=o)return t;const r=Math.floor(.6*o),a=Math.floor(.2*o);return`${t.substring(0,r)}...${t.substring(t.length-a)}`},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const i=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");i.font=n;return i.measureText(e).width},t.maskValue=(t,n)=>{if(!t)return t;const{maskRange:i,unmaskRange:o,maskChar:r="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(t);if(a)return t.replace(a,r);if(i){const{startIndex:n,endIndex:o}=e(i[0],i[1]);return t.substring(0,n)+r.repeat(t.substring(n,o+1).length)+t.substring(o+1)}if(o){const{startIndex:n,endIndex:i}=e(o[0],o[1]);return r.repeat(t.substring(0,n).length)+t.substring(n,i+1)+r.repeat(t.substring(i+1).length)}return t};const e=(t,e)=>t<e?{startIndex:t,endIndex:e}:{startIndex:e,endIndex:t}}(ue||(ue={}));const de=D.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.$zIndex};

    ${t=>{if(t.$show)return x`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,fe=D.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=x`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=x`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=x`
                transition: none;
            `),e}}
`;var he;!function(t){t.Ready="overlay-context-ready",t.Change="overlay-context-change"}(he||(he={}));const me=({show:e=!1,rootId:n,onOverlayClick:i,children:o,backgroundOpacity:r,backgroundBlur:a=!0,disableTransition:s=!1,enableOverlayClick:l=!1,zIndex:d,id:h})=>{const[p,g]=m(null),[v,S]=m(),[D]=m((()=>ce.generate())),x=b(),B=u(),$=u(null),C=o&&c.cloneElement(o,{ref:$}),O=h?`lifesg-ds-overlay-root-${h}`:"lifesg-ds-overlay-root",E=null!=d?d:v?99999:99998;(t=>{const e=y();f((()=>{if(!e)return;const n={zIndex:t};e.events.emit(he.Change,n)}),[e,t]),f((()=>{if(!e)return;const n=()=>{const n={zIndex:t};e.events.emit(he.Change,n)};return null==e||e.events.on(he.Ready,n),()=>null==e?void 0:e.events.off(he.Ready,n)}),[e,t])})(E),f((()=>(P(),g(T()),()=>{W(),A().length<1&&Y("remove")})),[]),f((()=>{if(e){const t=z();k(t),M(),H()&&1===A().length&&(I(),L("add"));const e=setTimeout((()=>{Y("add")}),200);return()=>clearTimeout(e)}{W(),H()&&A().length<1&&(L("remove"),_());const t=setTimeout((()=>{A().length<1&&Y("remove")}),200);return()=>clearTimeout(t)}}),[e]);const k=t=>{B.current=t,S(t)},H=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),T=()=>document&&n?document.getElementById(n):document?document.body:null,z=()=>A().length>0,P=()=>{if(!document.getElementById(ge)){const t=document.createElement("style");t.id=ge;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${ve} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ve}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${ye} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Se}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},Y=t=>{const e=document.body.classList.contains(ve);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(ve):document.body.classList.add(ve)},A=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},M=()=>{const t=A();document.body.dataset.lifesgDsOverlayOrder=[...t,D].join(",")},W=()=>{const t=A();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==D)).join(",")},L=t=>{if(!H())return;const e=document.body.classList.contains(ye);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(ye):document.body.classList.add(ye)},I=()=>{const t=document.body.style,e=t.top?t.top:window.scrollY+"px";document.body.style.setProperty(Se,e)},_=()=>{const t=document.body.style.getPropertyValue(Se);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(t)})}))},j=t=>{var e;const n=null===(e=$.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||i&&l&&(t.preventDefault(),i())};return p?w.createPortal(t(de,Object.assign({id:O,"data-testid":O,$show:e,$zIndex:E},{children:o&&t(F,Object.assign({id:x},{children:t(fe,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:r||(v?.5:.8),$backgroundBlur:a,$disableTransition:s,onClick:j},{children:C}))}))})),p):null},pe=e=>t(S,{children:t(me,Object.assign({},e))}),ge="lifesg-ds-overlay-stylesheet",ve="lifesg-ds-overlay-open",ye="lifesg-ds-overlay-scroll-lock",Se="--lifesg-ds-overlay-scroll-y",be={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Fe=t=>Object.keys(be).reduce(((e,n)=>{const i=be[n];return e[n]=`@media screen and (${t}: ${i}px)`,e}),{}),we=Fe("max-width"),De=(Fe("min-width"),D.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${t=>{return e=t.show,n=t.animationFrom||"bottom",e?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var e,n}}

    ${we.mobileL} {
        height: calc(
            ${t=>t.verticalHeight?`${t.verticalHeight}px`:"1vh"} * 100
        );

        top: ${t=>t.offsetTop||0}px;
    }
`);var xe=Array.isArray,Be="object"==typeof It&&It&&It.Object===Object&&It,$e="object"==typeof self&&self&&self.Object===Object&&self,Ce=Be||$e||Function("return this")(),Oe=Ce.Symbol,Ee=Oe,ke=Object.prototype,He=ke.hasOwnProperty,Te=ke.toString,ze=Ee?Ee.toStringTag:void 0;var Pe=function(t){var e=He.call(t,ze),n=t[ze];try{t[ze]=void 0;var i=!0}catch(t){}var o=Te.call(t);return i&&(e?t[ze]=n:delete t[ze]),o},Ye=Object.prototype.toString;var Ae=Pe,Me=function(t){return Ye.call(t)},We=Oe?Oe.toStringTag:void 0;var Le=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":We&&We in Object(t)?Ae(t):Me(t)};var Ie=Le,_e=function(t){return null!=t&&"object"==typeof t};var je=function(t){return"symbol"==typeof t||_e(t)&&"[object Symbol]"==Ie(t)},Ve=xe,Xe=je,Ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Re=/^\w*$/;var Ze=function(t,e){if(Ve(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Xe(t))||(Re.test(t)||!Ne.test(t)||null!=e&&t in Object(e))};var Ke=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Je=Le,Ue=Ke;var Qe,Ge=function(t){if(!Ue(t))return!1;var e=Je(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},qe=Ce["__core-js_shared__"],tn=(Qe=/[^.]+$/.exec(qe&&qe.keys&&qe.keys.IE_PROTO||""))?"Symbol(src)_1."+Qe:"";var en=function(t){return!!tn&&tn in t},nn=Function.prototype.toString;var on=Ge,rn=en,an=Ke,sn=function(t){if(null!=t){try{return nn.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ln=/^\[object .+?Constructor\]$/,cn=Function.prototype,un=Object.prototype,dn=cn.toString,fn=un.hasOwnProperty,hn=RegExp("^"+dn.call(fn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var mn=function(t){return!(!an(t)||rn(t))&&(on(t)?hn:ln).test(sn(t))},pn=function(t,e){return null==t?void 0:t[e]};var gn=function(t,e){var n=pn(t,e);return mn(n)?n:void 0},vn=gn(Object,"create"),yn=vn;var Sn=function(){this.__data__=yn?yn(null):{},this.size=0};var bn=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Fn=vn,wn=Object.prototype.hasOwnProperty;var Dn=function(t){var e=this.__data__;if(Fn){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return wn.call(e,t)?e[t]:void 0},xn=vn,Bn=Object.prototype.hasOwnProperty;var $n=vn;var Cn=Sn,On=bn,En=Dn,kn=function(t){var e=this.__data__;return xn?void 0!==e[t]:Bn.call(e,t)},Hn=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=$n&&void 0===e?"__lodash_hash_undefined__":e,this};function Tn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Tn.prototype.clear=Cn,Tn.prototype.delete=On,Tn.prototype.get=En,Tn.prototype.has=kn,Tn.prototype.set=Hn;var zn=Tn;var Pn=function(){this.__data__=[],this.size=0};var Yn=function(t,e){return t===e||t!=t&&e!=e};var An=function(t,e){for(var n=t.length;n--;)if(Yn(t[n][0],e))return n;return-1},Mn=An,Wn=Array.prototype.splice;var Ln=An;var In=An;var _n=An;var jn=Pn,Vn=function(t){var e=this.__data__,n=Mn(e,t);return!(n<0)&&(n==e.length-1?e.pop():Wn.call(e,n,1),--this.size,!0)},Xn=function(t){var e=this.__data__,n=Ln(e,t);return n<0?void 0:e[n][1]},Nn=function(t){return In(this.__data__,t)>-1},Rn=function(t,e){var n=this.__data__,i=_n(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this};function Zn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}Zn.prototype.clear=jn,Zn.prototype.delete=Vn,Zn.prototype.get=Xn,Zn.prototype.has=Nn,Zn.prototype.set=Rn;var Kn=Zn,Jn=gn(Ce,"Map"),Un=zn,Qn=Kn,Gn=Jn;var qn=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ti=function(t,e){var n=t.__data__;return qn(e)?n["string"==typeof e?"string":"hash"]:n.map},ei=ti;var ni=ti;var ii=ti;var oi=ti;var ri=function(){this.size=0,this.__data__={hash:new Un,map:new(Gn||Qn),string:new Un}},ai=function(t){var e=ei(this,t).delete(t);return this.size-=e?1:0,e},si=function(t){return ni(this,t).get(t)},li=function(t){return ii(this,t).has(t)},ci=function(t,e){var n=oi(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this};function ui(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ui.prototype.clear=ri,ui.prototype.delete=ai,ui.prototype.get=si,ui.prototype.has=li,ui.prototype.set=ci;var di=ui;function fi(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],r=n.cache;if(r.has(o))return r.get(o);var a=t.apply(this,i);return n.cache=r.set(o,a)||r,a};return n.cache=new(fi.Cache||di),n}fi.Cache=di;var hi=fi;var mi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pi=/\\(\\)?/g,gi=function(t){var e=hi(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(mi,(function(t,n,i,o){e.push(i?o.replace(pi,"$1"):n||t)})),e}));var vi=function(t,e){for(var n=-1,i=null==t?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o},yi=xe,Si=je,bi=Oe?Oe.prototype:void 0,Fi=bi?bi.toString:void 0;var wi=function t(e){if("string"==typeof e)return e;if(yi(e))return vi(e,t)+"";if(Si(e))return Fi?Fi.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},Di=wi;var xi=xe,Bi=Ze,$i=gi,Ci=function(t){return null==t?"":Di(t)};var Oi=je;var Ei=function(t,e){return xi(t)?t:Bi(t,e)?[t]:$i(Ci(t))},ki=function(t){if("string"==typeof t||Oi(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var Hi=function(t,e){for(var n=0,i=(e=Ei(e,t)).length;null!=t&&n<i;)t=t[ki(e[n++])];return n&&n==i?t:void 0};var Ti=_t((function(t,e,n){var i=null==t?void 0:Hi(t,e);return void 0===i?n:i}));const zi=(t,e,n)=>e?Ti(n,e)||Ti(t,e):n||t,Pi=(t,e)=>{const n=e||t.defaultValue;return Ti(t.collections,n)};var Yi;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Yi||(Yi={}));const Ai={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mi=t=>e=>{const n=e.theme,i=Pi(Ai,n[Yi.colorScheme]);return n.options&&n.options.color?zi(i,t,n.options.color):zi(i,t)},Wi=(Mi("Brand.1"),Mi("Brand.2"),Mi("Brand.3"),Mi("Brand.4"),Mi("Brand.5"),Mi("Brand.6"),Mi("Primary")),Li=(Mi("PrimaryDark"),Mi("Secondary")),Ii={Light:{1:Mi("Accent.Light.1"),2:Mi("Accent.Light.2"),3:Mi("Accent.Light.3"),4:Mi("Accent.Light.4"),5:Mi("Accent.Light.5"),6:Mi("Accent.Light.6")},Dark:{1:Mi("Accent.Dark.1"),2:Mi("Accent.Dark.2"),3:Mi("Accent.Dark.3")}},_i={1:Mi("Neutral.1"),2:Mi("Neutral.2"),3:Mi("Neutral.3"),4:Mi("Neutral.4"),5:Mi("Neutral.5"),6:Mi("Neutral.6"),7:Mi("Neutral.7"),8:Mi("Neutral.8")},ji=(Mi("Validation.Green.Text"),Mi("Validation.Green.Icon"),Mi("Validation.Green.Border"),Mi("Validation.Green.Background"),Mi("Validation.Orange.Text"),Mi("Validation.Orange.Icon"),Mi("Validation.Orange.Border"),Mi("Validation.Orange.Background"),Mi("Validation.Orange.Badge"),Mi("Validation.Red.Text"),Mi("Validation.Red.Icon"),Mi("Validation.Red.Border"),Mi("Validation.Red.Background"),Mi("Validation.Blue.Text"),Mi("Validation.Blue.Icon"),Mi("Validation.Blue.Border"),Mi("Validation.Blue.Background"),Mi("Shadow.Accent"),Mi("Shadow.Red"),Mi("Shadow.Elevation"),D.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&x`
                background-color: ${_i[7]};
            `}
    }
`),Vi=c.forwardRef(((e,n)=>{var{children:i,focusHighlight:o=!0,focusOutline:r="none",type:a="button"}=e,s=C(e,["children","focusHighlight","focusOutline","type"]);return t(ji,Object.assign({ref:n,$outline:r,$highlight:o,type:a},s,{children:i}))})),Xi=D.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${_i[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${we.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,Ni=D(Vi)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${_i[3]};

    :focus-visible {
        outline: 4px solid ${Ii.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${we.mobileL} {
        right: 1.25rem;
    }
`,Ri=Object.assign((e=>{var{id:n="modal",show:i,animationFrom:o="bottom",children:r,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:c,dismissKeyboardOnShow:u=!0}=e,d=C(e,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=m(),[g,v]=m();f((()=>window.visualViewport?(S(),window.visualViewport.addEventListener("resize",S),()=>{window.visualViewport.removeEventListener("resize",S)}):(y(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)})),[]),f((()=>{var t,e;i&&u&&(null===(e=null===(t=document.activeElement)||void 0===t?void 0:t.blur)||void 0===e||e.call(t))}),[i]);const y=()=>{const t=.01*window.innerHeight;p(t)},S=()=>{const t=.01*window.visualViewport.height;p(t),v(window.visualViewport.offsetTop)};return t(pe,Object.assign({"data-testid":`${n}-overlay`,show:i,enableOverlayClick:a,onOverlayClick:c,id:n,rootId:s,zIndex:l},{children:t(De,Object.assign({show:i,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},d,{children:r}))}))}),{Box:n=>{var{id:i="modal-box",children:o,onClose:r,showCloseButton:a=!0}=n,s=C(n,["id","children","onClose","showCloseButton"]);return e(Xi,Object.assign({"data-testid":i},s,{onClick:t=>{t.stopPropagation()}},{children:[a&&t(Ni,Object.assign({onClick:r,"data-testid":"close-button",focusHighlight:!1},{children:t(B,{})})),o]}))}}),Zi=D.div`
    background-color: ${_i[6]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 3rem;
        width: 18%;
        height: auto;
    }
`,Ki=e=>t(Zi,Object.assign({},e,{children:t(i,{})})),Ji={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ui={D1:{fontFamily:Ji.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ji.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ji.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ji.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ji.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ji.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ji.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ji.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ji.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ji.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ji.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ji.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ji.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ji.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Qi={D1:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:Ji.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:Ji.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:Ji.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:Ji.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:Ji.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Gi={collections:{base:Ui,oneservice:{D1:{fontFamily:Ji.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ji.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ji.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ji.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ji.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ji.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ji.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ji.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ji.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ji.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ji.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ji.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ji.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ji.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Qi},defaultValue:"base"},qi=t=>e=>{const n=e.theme,i=Pi(Gi,n[Yi.textStyleScheme]);return n.options&&n.options.textStyle?zi(i,t,n.options.textStyle):zi(i,t)},to={D1:{fontFamily:qi("D1.fontFamily"),fontSize:qi("D1.fontSize"),fontWeight:qi("D1.fontWeight"),lineHeight:qi("D1.lineHeight"),letterSpacing:qi("D1.letterSpacing"),fontVariant:qi("D1.fontVariant")},D2:{fontFamily:qi("D2.fontFamily"),fontSize:qi("D2.fontSize"),fontWeight:qi("D2.fontWeight"),lineHeight:qi("D2.lineHeight"),letterSpacing:qi("D2.letterSpacing"),fontVariant:qi("D2.fontVariant")},D3:{fontFamily:qi("D3.fontFamily"),fontSize:qi("D3.fontSize"),fontWeight:qi("D3.fontWeight"),lineHeight:qi("D3.lineHeight"),letterSpacing:qi("D3.letterSpacing"),fontVariant:qi("D3.fontVariant")},D4:{fontFamily:qi("D4.fontFamily"),fontSize:qi("D4.fontSize"),fontWeight:qi("D4.fontWeight"),lineHeight:qi("D4.lineHeight"),letterSpacing:qi("D4.letterSpacing"),fontVariant:qi("D4.fontVariant")},DBody:{fontFamily:qi("DBody.fontFamily"),fontSize:qi("DBody.fontSize"),fontWeight:qi("DBody.fontWeight"),lineHeight:qi("DBody.lineHeight"),letterSpacing:qi("DBody.letterSpacing"),fontVariant:qi("DBody.fontVariant")},H1:{fontFamily:qi("H1.fontFamily"),fontSize:qi("H1.fontSize"),fontWeight:qi("H1.fontWeight"),lineHeight:qi("H1.lineHeight"),letterSpacing:qi("H1.letterSpacing"),fontVariant:qi("H1.fontVariant")},H2:{fontFamily:qi("H2.fontFamily"),fontSize:qi("H2.fontSize"),fontWeight:qi("H2.fontWeight"),lineHeight:qi("H2.lineHeight"),letterSpacing:qi("H2.letterSpacing"),fontVariant:qi("H2.fontVariant")},H3:{fontFamily:qi("H3.fontFamily"),fontSize:qi("H3.fontSize"),fontWeight:qi("H3.fontWeight"),lineHeight:qi("H3.lineHeight"),letterSpacing:qi("H3.letterSpacing"),fontVariant:qi("H3.fontVariant")},H4:{fontFamily:qi("H4.fontFamily"),fontSize:qi("H4.fontSize"),fontWeight:qi("H4.fontWeight"),lineHeight:qi("H4.lineHeight"),letterSpacing:qi("H4.letterSpacing"),fontVariant:qi("H4.fontVariant")},H5:{fontFamily:qi("H5.fontFamily"),fontSize:qi("H5.fontSize"),fontWeight:qi("H5.fontWeight"),lineHeight:qi("H5.lineHeight"),letterSpacing:qi("H5.letterSpacing"),fontVariant:qi("H5.fontVariant")},H6:{fontFamily:qi("H6.fontFamily"),fontSize:qi("H6.fontSize"),fontWeight:qi("H6.fontWeight"),lineHeight:qi("H6.lineHeight"),letterSpacing:qi("H6.letterSpacing"),fontVariant:qi("H6.fontVariant")},Body:{fontFamily:qi("Body.fontFamily"),fontSize:qi("Body.fontSize"),fontWeight:qi("Body.fontWeight"),lineHeight:qi("Body.lineHeight"),letterSpacing:qi("Body.letterSpacing"),fontVariant:qi("Body.fontVariant")},BodySmall:{fontFamily:qi("BodySmall.fontFamily"),fontSize:qi("BodySmall.fontSize"),fontWeight:qi("BodySmall.fontWeight"),lineHeight:qi("BodySmall.lineHeight"),letterSpacing:qi("BodySmall.letterSpacing"),fontVariant:qi("BodySmall.fontVariant")},XSmall:{fontFamily:qi("XSmall.fontFamily"),fontSize:qi("XSmall.fontSize"),fontWeight:qi("XSmall.fontWeight"),lineHeight:qi("XSmall.lineHeight"),letterSpacing:qi("XSmall.letterSpacing"),fontVariant:qi("XSmall.fontVariant")}},eo=[Ji.OpenSans,Ji.PlusJakartaSans],no=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},io=(t,e)=>n=>{var i;const o=to[t].fontFamily(n),r=to[t].fontWeight(n),a=eo.find((t=>Object.values(t).includes(o)));return a?x`
                font-family: ${no(a,e)||no(a,r)||o};
                font-weight: normal !important;
            `:x`
            font-family: ${o};
            font-weight: ${null!==(i=oo(e)||r)&&void 0!==i?i:"normal"};
        `},oo=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ro=t=>{if(t>0)return x`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},ao=(t,e,n=!1)=>i=>{const o=to[t],r=o.fontSize(i);return x`
            ${io(t,e)}
            font-size: ${r}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(i)||0}rem !important;
            font-variant: ${o.fontVariant(i)||"normal"};
            ${x`
                margin-bottom: ${r*(n?1.05:0)}rem;
            `}
        `},so=(t=!1,e=!1,n=void 0)=>e?x`
            display: block;
            ${ro(n)}
        `:t?x`
            display: inline;
        `:x`
            display: block;
            ${ro(n)}
        `;var lo;!function(t){t.D1=D.h1`
        ${t=>x`
                ${ao("D1",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=D.h1`
        ${t=>x`
                ${ao("D2",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=D.h1`
        ${t=>x`
                ${ao("D3",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=D.h1`
        ${t=>x`
                ${ao("D4",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=D.h1`
        ${t=>x`
                ${ao("DBody",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=D.h1`
        ${t=>x`
                ${ao("H1",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=D.h2`
        ${t=>x`
                ${ao("H2",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=D.h3`
        ${t=>x`
                ${ao("H3",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=D.h4`
        ${t=>x`
                ${ao("H4",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=D.h5`
        ${t=>x`
                ${ao("H5",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=D.h6`
        ${t=>x`
                ${ao("H6",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=D.p`
        ${t=>x`
                ${ao("Body",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=D.p`
        ${t=>x`
                ${ao("BodySmall",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=D.span`
        ${t=>x`
                ${ao("XSmall",t.weight,t.paragraph)}
                color: ${_i[1]};
                ${so(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>fo(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>fo(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(lo||(lo={}));const co=D.a`
    ${t=>x`
            ${ao(t.textStyle,t.weight)}
            color: ${Wi};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Li};

                svg {
                    color: ${Li};
                }
            }
        `}
`,uo=D($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,fo=n=>{var{external:i=!1,children:o}=n,r=C(n,["external","children"]);return e(co,Object.assign({},r,{children:[o,i&&t(uo,{})]}))};var ho;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(ho||(ho={})),p((()=>O(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.ff4bedfd.js")).LottieSpinner}})))),D.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`;const mo=p((()=>O(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.33223186.js")).LottieLoadingDots}})))),po=e=>t(vo,Object.assign({},e,{children:t(g,Object.assign({fallback:t(go,{})},{children:t(mo,{})}))})),go=()=>t("div",{style:{height:"16px",width:"64px"}}),vo=D.div`
    margin: 0 auto;
`;Yi.colorScheme,Yi.textStyleScheme,Yi.designTokenScheme,Yi.resourceScheme,Yi.colorScheme,Yi.textStyleScheme,Yi.designTokenScheme,Yi.resourceScheme,Yi.colorScheme,Yi.textStyleScheme,Yi.designTokenScheme,Yi.resourceScheme,Yi.colorScheme,Yi.textStyleScheme,Yi.designTokenScheme,Yi.resourceScheme,Yi.colorScheme,Yi.textStyleScheme,Yi.designTokenScheme,Yi.resourceScheme,Yi.colorScheme,Yi.textStyleScheme,Yi.designTokenScheme,Yi.resourceScheme,p((()=>O(void 0,void 0,void 0,(function*(){return{default:(yield import("./lottie-animation.63eef872.js")).LottieLoadingDotsSpinner}})))),D.div`
    margin: 0 auto;
`;const yo=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,So=D.img`
    height: 100%;
    width: 100%;
    object-fit: ${t=>t.$fit||"contain"};
`,bo=D(Ki)`
    width: 100%;
    height: 100%;
`,Fo=({src:e,className:n,alt:i,fit:o,placeholder:r,retrieveImageDimension:a,setDimension:s})=>{const[l,c]=m(!0),[u,d]=m();f((()=>{c(!0),d(void 0);const t=new Image;t.src=e,t.onload=()=>{a&&s({src:e,width:t.width,height:t.height}),c(!1)},t.onerror=t=>{c(!1),d(t)}}),[e]);return t(yo,Object.assign({className:n},{children:u?null!=r?r:t(bo,{}):l?t(po,{}):t(So,{src:e,alt:i,$fit:o})}))},wo=D(Vi)`
    padding: 0;
    border-radius: 100%;
    background: ${_i[8]};
    color: ${Wi};
    height: 2.5rem;
    width: 2.5rem;
`,Do=D(wo)`
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 5;

    ${we.mobileL} {
        top: 1.25rem;
        right: 1.25rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,xo=D(wo)`
    position: absolute;
    top: 3rem;
    right: 6.5rem;
    z-index: 5;

    ${we.mobileL} {
        top: 1.25rem;
        right: 4.75rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,Bo=D(wo)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${t=>"left"===t.$position&&x`
            left: 3rem;
            ${we.mobileL} {
                left: 1.25rem;
            }
        `}

    ${t=>"right"===t.$position&&x`
            right: 3rem;
            ${we.mobileL} {
                right: 1.25rem;
            }
        `}

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,$o=D.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,Co=D.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,Oo=D.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,Eo=D.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,ko=D.div`
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .react-transform-wrapper {
        height: 100%;
        width: 100%;
    }
    .react-transform-component {
        height: 100%;
        width: 100%;
    }
`,Ho=D(Fo)`
    height: 100%;
    width: 100%;
`,To=D(Ki)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,zo=D.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,Po=D(lo.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${_i[8]};
    text-align: center;
`,Yo=D.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${_i[1]};
    padding: 1.5rem 1rem;

    ${we.mobileL} {
        padding: 1rem 1.25rem;
    }
`,Ao=D.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,Mo=D.div`
    cursor: pointer;
    background-color: ${_i[1]};
    border-radius: 10px;

    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.25rem;
    width: 6.25rem;

    ${we.mobileL} {
        height: 4rem;
        width: 4rem;
    }

    ${t=>t.$active?x`
                  border: 4px solid ${Wi};

                  ${we.mobileL} {
                      border: 2px solid ${Wi};
                  }
              `:x`
                  :hover {
                      border: 1px solid ${_i[5]};
                  }
              `};
`,Wo=D(Fo)`
    height: 100%;
    width: 100%;
`,Lo=(i,c)=>{var{items:h,initialActiveItemIndex:p,hideThumbnail:g=!1,hideNavigation:v=!1,hideCounter:y=!1,hideMagnifier:S=!1,onClose:b}=i,F=C(i,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[w,D]=m(null!=p?p:0),[x,B]=m({}),[$,O]=m(1),[E,k]=m(null),[H,T]=m(null),z=u(null),P=u([]),Y=u([]),A=E&&H?E-H:0;d(c,(()=>({currentItemIndex:w,setCurrentItem:j,goToPrevItem:I,goToNextItem:_}))),((t,e,n="window",i)=>{const o=u();f((()=>{o.current=e}),[e]),f((()=>{let e;switch(n){case"window":e=window;break;case"document":e=document;break;default:e=n}if(!e||!e.addEventListener)return;const r=t=>o.current(t);return e.addEventListener(t,r,i),()=>{e.removeEventListener(t,r,i)}}),[t,n])})("keydown",(function(t){"ArrowRight"===t.key?_():"ArrowLeft"===t.key?I():"Escape"===t.key&&b&&b()}),"document"),f((()=>{var t,e;null===(e=null===(t=P.current)||void 0===t?void 0:t[w])||void 0===e||e.scrollIntoView({behavior:"smooth",inline:"center"}),O(1)}),[w]);const M=t=>{O(t.state.scale)};const W=({src:t,height:e,width:n})=>{B((i=>Object.assign(Object.assign({},i),{[t]:{height:e,width:n}})))},L=()=>{const t=x[h[w].src];if((null==z?void 0:z.current)&&t){const{clientHeight:e,clientWidth:n}=z.current,{width:i,height:o}=t,r=o/i<e/n;return i<n&&o<e?r?n/i:e/o:r?e/(o/(i/n)):n/(i/(o/e))}},I=()=>{var t,e;null===(e=null===(t=Y.current)||void 0===t?void 0:t[w])||void 0===e||e.resetTransform(),D((t=>0===t?h.length-1:t-1))},_=()=>{var t,e;null===(e=null===(t=Y.current)||void 0===t?void 0:t[w])||void 0===e||e.resetTransform(),D((t=>t===h.length-1?0:t+1))},j=t=>{var e,n;null===(n=null===(e=Y.current)||void 0===e?void 0:e[w])||void 0===n||n.resetTransform(),D(t)};return e(Ri,Object.assign({},F,{"data-testid":"image-carousel-modal"},{children:[t(Do,Object.assign({"aria-label":"Close image carousel",onClick:b,focusHighlight:!1},{children:t(o,{"aria-hidden":!0})})),!S&&t(xo,Object.assign({"aria-label":1===$?"Zoom in":"Zoom out",onClick:()=>{var t,e,n,i;if(1===$){const n=L();null===(e=null===(t=Y.current)||void 0===t?void 0:t[w])||void 0===e||e.centerView(n),O(n)}else O(1),null===(i=null===(n=Y.current)||void 0===n?void 0:n[w])||void 0===i||i.resetTransform()},focusHighlight:!1},{children:t(1===$?r:a,{"aria-hidden":!0})})),e($o,{children:[e(Co,{children:[!v&&e(n,{children:[t(Bo,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:I},{children:t(s,{"aria-hidden":!0})})),t(Bo,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:_},{children:t(l,{"aria-hidden":!0})}))]}),t(Oo,Object.assign({ref:z,onTouchStart:t=>{$<=1&&k(t.touches[0].clientX)},onTouchMove:t=>{!E||$>1||T(t.touches[0].clientX)},onTouchEnd:()=>{z.current&&Math.abs(A)>z.current.offsetWidth/3&&(A>0?_():I()),k(null),T(null)}},{children:t(Eo,Object.assign({style:{transform:`translateX(calc(${100*-w}% - ${A}px))`}},{children:h.map(((e,n)=>{var i;return t(ko,Object.assign({"data-testid":"slide-item"},{children:t(At,Object.assign({ref:t=>Y.current[n]=t,panning:{disabled:$<=1},initialScale:1,onZoom:M,onZoomStop:M,onWheel:M},{children:t(Lt,{children:t(Ho,{src:e.src,alt:null!==(i=e.alt)&&void 0!==i?i:`Image ${n+1}`,placeholder:t(To,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:W})})}))}),n)}))}))})),!y&&t(zo,{children:t(Po,Object.assign({weight:"semibold"},{children:`${w+1}/${h.length}`}))})]}),!g&&t(Yo,{children:t(Ao,{children:h.map(((e,n)=>{var i;const o=null!==(i=e.thumbnailSrc)&&void 0!==i?i:e.src;return t(Mo,Object.assign({"data-testid":"thumbnail-item",$active:n===w,onClick:()=>j(n),ref:t=>P.current[n]=t},{children:t(Wo,{src:o,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},Io=v(Lo);export{Lo as C,Io as F,It as c};
//# sourceMappingURL=index.81d03d1b.js.map
