import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{useState as r,useEffect as i}from"react";import o,{css as a}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},u=Array.isArray,h="object"==typeof c&&c&&c.Object===Object&&c,p="object"==typeof self&&self&&self.Object===Object&&self,d=h||p||Function("return this")(),f=d.Symbol,g=f,m=Object.prototype,y=m.hasOwnProperty,v=m.toString,F=g?g.toStringTag:void 0;var b=function(e){var t=y.call(e,F),n=e[F];try{e[F]=void 0;var r=!0}catch(e){}var i=v.call(e);return r&&(t?e[F]=n:delete e[F]),i},S=Object.prototype.toString;var B=b,D=function(e){return S.call(e)},x=f?f.toStringTag:void 0;var E=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?B(e):D(e)};var w=E,k=function(e){return null!=e&&"object"==typeof e};var H=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==w(e)},$=u,A=H,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C=/^\w*$/;var O=function(e,t){if($(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(C.test(e)||!z.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},_=E,M=T;var P,L=function(e){if(!M(e))return!1;var t=_(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=d["__core-js_shared__"],j=(P=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var R=function(e){return!!j&&j in e},V=Function.prototype.toString;var W=L,I=R,K=T,U=function(e){if(null!=e){try{return V.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,G=Function.prototype,Y=Object.prototype,q=G.toString,J=Y.hasOwnProperty,Q=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Z=function(e){return!(!K(e)||I(e))&&(W(e)?Q:X).test(U(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Z(n)?n:void 0},ne=te(Object,"create"),re=ne;var ie=function(){this.__data__=re?re(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ae=ne,se=Object.prototype.hasOwnProperty;var le=function(e){var t=this.__data__;if(ae){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return se.call(t,e)?t[e]:void 0},ce=ne,ue=Object.prototype.hasOwnProperty;var he=ne;var pe=ie,de=oe,fe=le,ge=function(e){var t=this.__data__;return ce?void 0!==t[e]:ue.call(t,e)},me=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=pe,ye.prototype.delete=de,ye.prototype.get=fe,ye.prototype.has=ge,ye.prototype.set=me;var ve=ye;var Fe=function(){this.__data__=[],this.size=0};var be=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var n=e.length;n--;)if(be(e[n][0],t))return n;return-1},Be=Se,De=Array.prototype.splice;var xe=Se;var Ee=Se;var we=Se;var ke=Fe,He=function(e){var t=this.__data__,n=Be(t,e);return!(n<0)&&(n==t.length-1?t.pop():De.call(t,n,1),--this.size,!0)},$e=function(e){var t=this.__data__,n=xe(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return Ee(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=we(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ce(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ce.prototype.clear=ke,Ce.prototype.delete=He,Ce.prototype.get=$e,Ce.prototype.has=Ae,Ce.prototype.set=ze;var Oe=Ce,Te=te(d,"Map"),_e=ve,Me=Oe,Pe=Te;var Le=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ne=function(e,t){var n=e.__data__;return Le(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Ne;var Re=Ne;var Ve=Ne;var We=Ne;var Ie=function(){this.size=0,this.__data__={hash:new _e,map:new(Pe||Me),string:new _e}},Ke=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Ue=function(e){return Re(this,e).get(e)},Xe=function(e){return Ve(this,e).has(e)},Ge=function(e,t){var n=We(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ye.prototype.clear=Ie,Ye.prototype.delete=Ke,Ye.prototype.get=Ue,Ye.prototype.has=Xe,Ye.prototype.set=Ge;var qe=Ye;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Je.Cache||qe),n}Je.Cache=qe;var Qe=Je;var Ze=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ze,(function(e,n,r,i){t.push(r?i.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},rt=u,it=H,ot=f?f.prototype:void 0,at=ot?ot.toString:void 0;var st=function e(t){if("string"==typeof t)return t;if(rt(t))return nt(t,e)+"";if(it(t))return at?at.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},lt=st;var ct=u,ut=O,ht=tt,pt=function(e){return null==e?"":lt(e)};var dt=H;var ft=function(e,t){return ct(e)?e:ut(e,t)?[e]:ht(pt(e))},gt=function(e){if("string"==typeof e||dt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var mt=function(e,t){for(var n=0,r=(t=ft(t,e)).length;null!=e&&n<r;)e=e[gt(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:mt(e,t);return void 0===r?n:r};const vt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,Ft=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(bt||(bt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Bt=e=>t=>{const n=t.theme,r=Ft(St,n[bt.colorScheme]);return n.options&&n.options.color?vt(r,e,n.options.color):vt(r,e)},Dt={Brand:{1:Bt("Brand.1"),2:Bt("Brand.2"),3:Bt("Brand.3"),4:Bt("Brand.4"),5:Bt("Brand.5"),6:Bt("Brand.6")},Primary:Bt("Primary"),PrimaryDark:Bt("PrimaryDark"),Secondary:Bt("Secondary"),Accent:{Light:{1:Bt("Accent.Light.1"),2:Bt("Accent.Light.2"),3:Bt("Accent.Light.3"),4:Bt("Accent.Light.4"),5:Bt("Accent.Light.5"),6:Bt("Accent.Light.6")},Dark:{1:Bt("Accent.Dark.1"),2:Bt("Accent.Dark.2"),3:Bt("Accent.Dark.3")}},Neutral:{1:Bt("Neutral.1"),2:Bt("Neutral.2"),3:Bt("Neutral.3"),4:Bt("Neutral.4"),5:Bt("Neutral.5"),6:Bt("Neutral.6"),7:Bt("Neutral.7"),8:Bt("Neutral.8")},Validation:{Green:{Text:Bt("Validation.Green.Text"),Icon:Bt("Validation.Green.Icon"),Border:Bt("Validation.Green.Border"),Background:Bt("Validation.Green.Background")},Orange:{Text:Bt("Validation.Orange.Text"),Icon:Bt("Validation.Orange.Icon"),Border:Bt("Validation.Orange.Border"),Background:Bt("Validation.Orange.Background"),Badge:Bt("Validation.Orange.Badge")},Red:{Text:Bt("Validation.Red.Text"),Icon:Bt("Validation.Red.Icon"),Border:Bt("Validation.Red.Border"),Background:Bt("Validation.Red.Background")},Blue:{Text:Bt("Validation.Blue.Text"),Icon:Bt("Validation.Blue.Icon"),Border:Bt("Validation.Blue.Border"),Background:Bt("Validation.Blue.Background")}},Shadow:{Accent:Bt("Shadow.Accent"),Red:Bt("Shadow.Red"),Elevation:Bt("Shadow.Elevation")}};function xt(e,t){return xt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},xt(e,t)}function Et(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function wt(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function kt(e){return null!==e&&1===e.length?e[0]:e.slice()}function Ht(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function $t(e,t){return At(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function At(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let zt=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Ht(r.getMouseEventMap())}))}Et(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=$t(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Ht(r.getKeyDownEventMap()),Et(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Ht(r.getMouseEventMap()),Et(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Ht(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:kt(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:kt(r.state.value)};return r.props.renderTrack(i,o)};let i=wt(t.value);i.length||(i=wt(t.defaultValue)),r.pendingResizeTimeouts=[];const o=[];for(let e=0;e<i.length;e+=1)i[e]=$t(i[e],t),o.push(e);return r.resizeObserver=null,r.resizeElementRef=n.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:i,zIndices:o},r}var r,i;i=e,(r=t).prototype=Object.create(i.prototype),r.prototype.constructor=r,xt(r,i);var o=t.prototype;return o.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=wt(e.value);return n.length?t.pending?null:{value:n.map((t=>$t(t,e)))}:null},o.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},o.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},o.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},o.getValue=function(){return kt(this.state.value)},o.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},o.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},o.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},o.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},o.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},o.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},o.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return $t(this.state.startValue+t,this.props)},o.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},o.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},o.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},o.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},o.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},o.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=$t(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},o.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},o.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},o.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=$t(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},o.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=$t(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},o.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},o.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=At(i,this.props)},o.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=At(i,this.props)},o.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},o.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},o.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},o.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},o.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},o.fireChangeEvent=function(e){this.props[e]&&this.props[e](kt(this.state.value),this.state.index)},o.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},o.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},o.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},o.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},o.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},o.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},o.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const i=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return n.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},i,o,a)},t}(n.Component);zt.displayName="ReactSlider",zt.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>n.createElement("div",e),renderTrack:e=>n.createElement("div",e),renderMark:e=>n.createElement("span",e)};var Ct=zt;const Ot={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Tt={collections:{base:{D1:{fontFamily:Ot.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ot.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ot.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ot.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ot.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ot.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ot.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ot.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ot.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ot.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ot.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ot.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},_t=e=>t=>{const n=t.theme,r=Ft(Tt,n[bt.textStyleScheme]);return n.options&&n.options.textStyle?vt(r,e,n.options.textStyle):vt(r,e)},Mt={D1:{fontFamily:_t("D1.fontFamily"),fontSize:_t("D1.fontSize"),fontWeight:_t("D1.fontWeight"),lineHeight:_t("D1.lineHeight"),letterSpacing:_t("D1.letterSpacing")},D2:{fontFamily:_t("D2.fontFamily"),fontSize:_t("D2.fontSize"),fontWeight:_t("D2.fontWeight"),lineHeight:_t("D2.lineHeight"),letterSpacing:_t("D2.letterSpacing")},D3:{fontFamily:_t("D3.fontFamily"),fontSize:_t("D3.fontSize"),fontWeight:_t("D3.fontWeight"),lineHeight:_t("D3.lineHeight"),letterSpacing:_t("D3.letterSpacing")},D4:{fontFamily:_t("D4.fontFamily"),fontSize:_t("D4.fontSize"),fontWeight:_t("D4.fontWeight"),lineHeight:_t("D4.lineHeight"),letterSpacing:_t("D4.letterSpacing")},DBody:{fontFamily:_t("DBody.fontFamily"),fontSize:_t("DBody.fontSize"),fontWeight:_t("DBody.fontWeight"),lineHeight:_t("DBody.lineHeight"),letterSpacing:_t("DBody.letterSpacing")},H1:{fontFamily:_t("H1.fontFamily"),fontSize:_t("H1.fontSize"),fontWeight:_t("H1.fontWeight"),lineHeight:_t("H1.lineHeight"),letterSpacing:_t("H1.letterSpacing")},H2:{fontFamily:_t("H2.fontFamily"),fontSize:_t("H2.fontSize"),fontWeight:_t("H2.fontWeight"),lineHeight:_t("H2.lineHeight"),letterSpacing:_t("H2.letterSpacing")},H3:{fontFamily:_t("H3.fontFamily"),fontSize:_t("H3.fontSize"),fontWeight:_t("H3.fontWeight"),lineHeight:_t("H3.lineHeight"),letterSpacing:_t("H3.letterSpacing")},H4:{fontFamily:_t("H4.fontFamily"),fontSize:_t("H4.fontSize"),fontWeight:_t("H4.fontWeight"),lineHeight:_t("H4.lineHeight"),letterSpacing:_t("H4.letterSpacing")},H5:{fontFamily:_t("H5.fontFamily"),fontSize:_t("H5.fontSize"),fontWeight:_t("H5.fontWeight"),lineHeight:_t("H5.lineHeight"),letterSpacing:_t("H5.letterSpacing")},H6:{fontFamily:_t("H6.fontFamily"),fontSize:_t("H6.fontSize"),fontWeight:_t("H6.fontWeight"),lineHeight:_t("H6.lineHeight"),letterSpacing:_t("H6.letterSpacing")},Body:{fontFamily:_t("Body.fontFamily"),fontSize:_t("Body.fontSize"),fontWeight:_t("Body.fontWeight"),lineHeight:_t("Body.lineHeight"),letterSpacing:_t("Body.letterSpacing")},BodySmall:{fontFamily:_t("BodySmall.fontFamily"),fontSize:_t("BodySmall.fontSize"),fontWeight:_t("BodySmall.fontWeight"),lineHeight:_t("BodySmall.lineHeight"),letterSpacing:_t("BodySmall.letterSpacing")},XSmall:{fontFamily:_t("XSmall.fontFamily"),fontSize:_t("XSmall.fontSize"),fontWeight:_t("XSmall.fontWeight"),lineHeight:_t("XSmall.lineHeight"),letterSpacing:_t("XSmall.letterSpacing")}},Pt=e=>{switch(e){case 700:case"bold":return Ot.Bold;case 600:case"semibold":return Ot.Semibold;case 300:case"light":return Ot.Light;case 400:case"regular":return Ot.Regular;default:return""}},Lt=(e,t)=>n=>{var r;const i=Mt[e].fontFamily(n),o=Mt[e].fontWeight(n);return Object.values(Ot).includes(i)?a`
                font-family: ${Pt(t)||Pt(o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=Nt(t)||o)&&void 0!==r?r:"normal"};
        `},Nt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},jt=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Rt=(e,t,n=!1)=>r=>{const i=Mt[e],o=i.fontSize(r);return a`
            ${Lt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Vt=(e=!1,t=!1,n=void 0)=>t?a`
            display: block;
            ${jt(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${jt(n)}
        `;var Wt;!function(e){e.D1=o.h1`
        ${e=>a`
                ${Rt("D1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>a`
                ${Rt("D2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>a`
                ${Rt("D3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>a`
                ${Rt("D4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>a`
                ${Rt("DBody",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>a`
                ${Rt("H1",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>a`
                ${Rt("H2",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>a`
                ${Rt("H3",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>a`
                ${Rt("H4",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>a`
                ${Rt("H5",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>a`
                ${Rt("H6",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>a`
                ${Rt("Body",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>a`
                ${Rt("BodySmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>a`
                ${Rt("XSmall",e.weight,e.paragraph)}
                color: ${Dt.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ut(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ut(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const It=o.a`
    ${e=>a`
            ${Rt(e.textStyle,e.weight)}
            color: ${Dt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Dt.Secondary};

                svg {
                    color: ${Dt.Secondary};
                }
            }
        `}
`,Kt=o(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ut=n=>{var{external:r=!1,children:i}=n,o=l(n,["external","children"]);return e(It,Object.assign({},o,{children:[i,r&&t(Kt,{})]}))};var Xt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Xt||(Xt={}));const Gt=o.div`
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Yt=o(Wt.BodySmall)`
    overflow-wrap: anywhere;
`,qt=o(Ct)`
    height: 0.875rem;
`,Jt=o.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?a`
                cursor: not-allowed;
            `:e.$readOnly?void 0:a`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${Dt.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${Dt.Neutral[4]};
        border-radius: 50%;
    }
`,Qt=o.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${Jt}:after {
        border: 1px solid ${Dt.Primary};
    }
`,Zt=o.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Dt.Neutral[4](e)};
`,en=n=>{var{value:o,min:a=0,max:s=100,step:c=1,minRange:u,numOfThumbs:h=2,colors:p,disabled:d,readOnly:f,ariaLabels:g,showSliderLabels:m,sliderLabelPrefix:y,sliderLabelSuffix:v,renderSliderLabel:F,onChange:b}=n,S=l(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","renderSliderLabel","onChange"]);const[B,D]=r(E()),x=function(){const e=function(){const e=d||f?Dt.Neutral[5]:Dt.Neutral[4],t=d||f?Dt.Neutral[4]:Dt.Primary;if(1===h)return[t,e];const n=[];n.push(e);for(let e=0;e<h-1;e++)n.push(t);return n.push(e),n}();return new Array(h+1).fill(0).map(((t,n)=>(null==p?void 0:p[n])||e[n]))}();i((()=>{o!==B&&D(E())}),[o]);function E(){if(o&&o.length===h)return o;const e=[];for(let t=0;t<h;t++)e.push(a+c*t);return e}const w=t=>F?F(t):e(Yt,{children:[y,t,v]});return e("div",Object.assign({},S,{children:[t(qt,{step:c,min:a,max:s,value:B,disabled:d||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];D(t),null==b||b(t)}else{if(t>-1&&B[t]===e[t])return;D(e),null==b||b(e)}},minDistance:u,ariaLabel:g,renderThumb:(e,n)=>t(Qt,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:d?void 0:e.tabIndex},{children:t(Jt,{$disabled:d,$readOnly:f})})),renderTrack:(e,n)=>t(Zt,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:x[n.index]}))}),m&&e(Gt,{children:[t("div",{children:w(a)}),t("div",{children:w(s)})]})]}))};export{en as InputRangeSlider};
//# sourceMappingURL=index.js.map
