import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{useState as r,useEffect as i}from"react";import o,{css as a}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h=Array.isArray,p="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,f=p||d||Function("return this")(),g=f.Symbol,m=g,F=Object.prototype,y=F.hasOwnProperty,v=F.toString,b=m?m.toStringTag:void 0;var B=function(e){var t=y.call(e,b),n=e[b];try{e[b]=void 0;var r=!0}catch(e){}var i=v.call(e);return r&&(t?e[b]=n:delete e[b]),i},S=Object.prototype.toString;var D=B,E=function(e){return S.call(e)},x=g?g.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?D(e):E(e)};var k=C,w=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==k(e)},$=h,H=A,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var T=function(e,t){if($(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!H(e))||(O.test(e)||!z.test(e)||null!=t&&e in Object(t))};var _=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},M=C,P=_;var L,N=function(e){if(!P(e))return!1;var t=M(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=f["__core-js_shared__"],R=(L=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var I=function(e){return!!R&&R in e},V=Function.prototype.toString;var W=N,K=I,U=_,X=function(e){if(null!=e){try{return V.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,Y=Function.prototype,q=Object.prototype,J=Y.toString,Q=q.hasOwnProperty,Z=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!U(e)||K(e))&&(W(e)?Z:G).test(X(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},re=ne(Object,"create"),ie=re;var oe=function(){this.__data__=ie?ie(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=re,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(se){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},ue=re,he=Object.prototype.hasOwnProperty;var pe=re;var de=oe,fe=ae,ge=ce,me=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=de,ye.prototype.delete=fe,ye.prototype.get=ge,ye.prototype.has=me,ye.prototype.set=Fe;var ve=ye;var be=function(){this.__data__=[],this.size=0};var Be=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var n=e.length;n--;)if(Be(e[n][0],t))return n;return-1},De=Se,Ee=Array.prototype.splice;var xe=Se;var Ce=Se;var ke=Se;var we=be,Ae=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ee.call(t,n,1),--this.size,!0)},$e=function(e){var t=this.__data__,n=xe(t,e);return n<0?void 0:t[n][1]},He=function(e){return Ce(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=ke(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Oe.prototype.clear=we,Oe.prototype.delete=Ae,Oe.prototype.get=$e,Oe.prototype.has=He,Oe.prototype.set=ze;var Te=Oe,_e=ne(f,"Map"),Me=ve,Pe=Te,Le=_e;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Re=je;var Ie=je;var Ve=je;var We=je;var Ke=function(){this.size=0,this.__data__={hash:new Me,map:new(Le||Pe),string:new Me}},Ue=function(e){var t=Re(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ie(this,e).get(e)},Ge=function(e){return Ve(this,e).has(e)},Ye=function(e,t){var n=We(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ke,qe.prototype.delete=Ue,qe.prototype.get=Xe,qe.prototype.has=Ge,qe.prototype.set=Ye;var Je=qe;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Qe.Cache||Je),n}Qe.Cache=Je;var Ze=Qe;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ze(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,r,i){t.push(r?i.replace(tt,"$1"):n||e)})),t}));var rt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},it=h,ot=A,at=g?g.prototype:void 0,st=at?at.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(it(t))return rt(t,e)+"";if(ot(t))return st?st.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ct=lt;var ut=h,ht=T,pt=nt,dt=function(e){return null==e?"":ct(e)};var ft=A;var gt=function(e,t){return ut(e)?e:ht(e,t)?[e]:pt(dt(e))},mt=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=gt(t,e)).length;null!=e&&n<r;)e=e[mt(t[n++])];return n&&n==r?e:void 0};var yt=u((function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r}));const vt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,bt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var Bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Bt||(Bt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=bt(St,n[Bt.colorScheme]);return n.options&&n.options.color?vt(r,e,n.options.color):vt(r,e)},Et={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}};function xt(e,t){return xt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},xt(e,t)}function Ct(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function kt(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function wt(e){return null!==e&&1===e.length?e[0]:e.slice()}function At(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function $t(e,t){return Ht(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function Ht(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let zt=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),At(r.getMouseEventMap())}))}Ct(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=$t(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),At(r.getKeyDownEventMap()),Ct(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),At(r.getMouseEventMap()),Ct(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),At(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:wt(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:wt(r.state.value)};return r.props.renderTrack(i,o)};let i=kt(t.value);i.length||(i=kt(t.defaultValue)),r.pendingResizeTimeouts=[];const o=[];for(let e=0;e<i.length;e+=1)i[e]=$t(i[e],t),o.push(e);return r.resizeObserver=null,r.resizeElementRef=n.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:i,zIndices:o},r}var r,i;i=e,(r=t).prototype=Object.create(i.prototype),r.prototype.constructor=r,xt(r,i);var o=t.prototype;return o.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=kt(e.value);return n.length?t.pending?null:{value:n.map((t=>$t(t,e)))}:null},o.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},o.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},o.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},o.getValue=function(){return wt(this.state.value)},o.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},o.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},o.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},o.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},o.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},o.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},o.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return $t(this.state.startValue+t,this.props)},o.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},o.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},o.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},o.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},o.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},o.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=$t(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},o.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},o.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},o.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=$t(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},o.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=$t(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},o.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},o.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=Ht(i,this.props)},o.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=Ht(i,this.props)},o.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},o.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},o.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},o.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},o.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},o.fireChangeEvent=function(e){this.props[e]&&this.props[e](wt(this.state.value),this.state.index)},o.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},o.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},o.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},o.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},o.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},o.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},o.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const i=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return n.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},i,o,a)},t}(n.Component);zt.displayName="ReactSlider",zt.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>n.createElement("div",e),renderTrack:e=>n.createElement("div",e),renderMark:e=>n.createElement("span",e)};var Ot=zt;const Tt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},_t={collections:{base:{D1:{fontFamily:Tt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Tt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Tt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Tt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Tt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Tt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Tt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Tt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Tt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Tt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Mt=e=>t=>{const n=t.theme,r=bt(_t,n[Bt.textStyleScheme]);return n.options&&n.options.textStyle?vt(r,e,n.options.textStyle):vt(r,e)},Pt={D1:{fontFamily:Mt("D1.fontFamily"),fontSize:Mt("D1.fontSize"),fontWeight:Mt("D1.fontWeight"),lineHeight:Mt("D1.lineHeight"),letterSpacing:Mt("D1.letterSpacing")},D2:{fontFamily:Mt("D2.fontFamily"),fontSize:Mt("D2.fontSize"),fontWeight:Mt("D2.fontWeight"),lineHeight:Mt("D2.lineHeight"),letterSpacing:Mt("D2.letterSpacing")},D3:{fontFamily:Mt("D3.fontFamily"),fontSize:Mt("D3.fontSize"),fontWeight:Mt("D3.fontWeight"),lineHeight:Mt("D3.lineHeight"),letterSpacing:Mt("D3.letterSpacing")},D4:{fontFamily:Mt("D4.fontFamily"),fontSize:Mt("D4.fontSize"),fontWeight:Mt("D4.fontWeight"),lineHeight:Mt("D4.lineHeight"),letterSpacing:Mt("D4.letterSpacing")},DBody:{fontFamily:Mt("DBody.fontFamily"),fontSize:Mt("DBody.fontSize"),fontWeight:Mt("DBody.fontWeight"),lineHeight:Mt("DBody.lineHeight"),letterSpacing:Mt("DBody.letterSpacing")},H1:{fontFamily:Mt("H1.fontFamily"),fontSize:Mt("H1.fontSize"),fontWeight:Mt("H1.fontWeight"),lineHeight:Mt("H1.lineHeight"),letterSpacing:Mt("H1.letterSpacing")},H2:{fontFamily:Mt("H2.fontFamily"),fontSize:Mt("H2.fontSize"),fontWeight:Mt("H2.fontWeight"),lineHeight:Mt("H2.lineHeight"),letterSpacing:Mt("H2.letterSpacing")},H3:{fontFamily:Mt("H3.fontFamily"),fontSize:Mt("H3.fontSize"),fontWeight:Mt("H3.fontWeight"),lineHeight:Mt("H3.lineHeight"),letterSpacing:Mt("H3.letterSpacing")},H4:{fontFamily:Mt("H4.fontFamily"),fontSize:Mt("H4.fontSize"),fontWeight:Mt("H4.fontWeight"),lineHeight:Mt("H4.lineHeight"),letterSpacing:Mt("H4.letterSpacing")},H5:{fontFamily:Mt("H5.fontFamily"),fontSize:Mt("H5.fontSize"),fontWeight:Mt("H5.fontWeight"),lineHeight:Mt("H5.lineHeight"),letterSpacing:Mt("H5.letterSpacing")},H6:{fontFamily:Mt("H6.fontFamily"),fontSize:Mt("H6.fontSize"),fontWeight:Mt("H6.fontWeight"),lineHeight:Mt("H6.lineHeight"),letterSpacing:Mt("H6.letterSpacing")},Body:{fontFamily:Mt("Body.fontFamily"),fontSize:Mt("Body.fontSize"),fontWeight:Mt("Body.fontWeight"),lineHeight:Mt("Body.lineHeight"),letterSpacing:Mt("Body.letterSpacing")},BodySmall:{fontFamily:Mt("BodySmall.fontFamily"),fontSize:Mt("BodySmall.fontSize"),fontWeight:Mt("BodySmall.fontWeight"),lineHeight:Mt("BodySmall.lineHeight"),letterSpacing:Mt("BodySmall.letterSpacing")},XSmall:{fontFamily:Mt("XSmall.fontFamily"),fontSize:Mt("XSmall.fontSize"),fontWeight:Mt("XSmall.fontWeight"),lineHeight:Mt("XSmall.lineHeight"),letterSpacing:Mt("XSmall.letterSpacing")}},Lt=e=>{switch(e){case 700:case"bold":return Tt.Bold;case 600:case"semibold":return Tt.Semibold;case 300:case"light":return Tt.Light;case 400:case"regular":return Tt.Regular;default:return""}},Nt=(e,t)=>n=>{var r;const i=Pt[e].fontFamily(n),o=Pt[e].fontWeight(n);return Object.values(Tt).includes(i)?a`
                font-family: ${Lt(t)||Lt(o)||i};
                font-weight: normal !important;
            `:a`
            font-family: ${i};
            font-weight: ${null!==(r=jt(t)||o)&&void 0!==r?r:"normal"};
        `},jt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Rt=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},It=(e,t,n=!1)=>r=>{const i=Pt[e],o=i.fontSize(r);return a`
            ${Nt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Vt=(e=!1,t=!1,n=void 0)=>t?a`
            display: block;
            ${Rt(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${Rt(n)}
        `;var Wt;!function(e){e.D1=o.h1`
        ${e=>a`
                ${It("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>a`
                ${It("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>a`
                ${It("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>a`
                ${It("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>a`
                ${It("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>a`
                ${It("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>a`
                ${It("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>a`
                ${It("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>a`
                ${It("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>a`
                ${It("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>a`
                ${It("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>a`
                ${It("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>a`
                ${It("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>a`
                ${It("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${Vt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Wt||(Wt={}));const Kt=o.a`
    ${e=>a`
            ${It(e.textStyle,e.weight)}
            color: ${Et.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et.Secondary};

                svg {
                    color: ${Et.Secondary};
                }
            }
        `}
`,Ut=o(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xt=n=>{var{external:r=!1,children:i}=n,o=l(n,["external","children"]);return e(Kt,Object.assign({},o,{children:[i,r&&t(Ut,{})]}))};var Gt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Gt||(Gt={}));const Yt=o.div`
    isolation: isolate;
`,qt=o.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Jt=o.div`
    margin-bottom: 1rem;
`,Qt=o(Wt.Body)`
    overflow-wrap: anywhere;
`,Zt=o(Ot)`
    height: 0.875rem;
`,en=o.div`
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

        background-color: ${Et.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${Et.Neutral[4]};
        border-radius: 50%;
    }
`,tn=o.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${en}:after {
        border: 1px solid ${Et.Primary};
    }
`,nn=o.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Et.Neutral[4](e)};
`,rn=n=>{var{value:o,min:a=0,max:s=100,step:c=1,minRange:u,numOfThumbs:h=2,colors:p,disabled:d,readOnly:f,ariaLabels:g,showSliderLabels:m,sliderLabelPrefix:F,sliderLabelSuffix:y,showIndicatorLabel:v,indicatorLabelPrefix:b,indicatorLabelSuffix:B,renderSliderLabel:S,onChange:D,onChangeEnd:E}=n,x=l(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,k]=r(A()),w=function(){const e=function(){const e=d||f?Et.Neutral[5]:Et.Neutral[4],t=d||f?Et.Neutral[4]:Et.Primary;if(1===h)return[t,e];const n=[];n.push(e);for(let e=0;e<h-1;e++)n.push(t);return n.push(e),n}();return new Array(h+1).fill(0).map(((t,n)=>(null==p?void 0:p[n])||e[n]))}();i((()=>{o!==C&&k(A())}),[o]);function A(){if(o&&o.length===h)return o;const e=[];for(let t=0;t<h;t++)e.push(a+c*t);return e}const $=t=>S?S(t):e(Qt,{children:[F,t,y]});return e(Yt,Object.assign({},x,{children:[v&&t(Jt,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e(Qt,{children:[b,t,B]})})()}),t(Zt,{step:c,min:a,max:s,value:C,disabled:d||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==D||D(t)}else{if(t>-1&&C[t]===e[t])return;k(e),null==D||D(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==E||E(t)}else k(e),null==E||E(e)},minDistance:u,ariaLabel:g,renderThumb:(e,n)=>t(tn,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:d?void 0:e.tabIndex},{children:t(en,{$disabled:d,$readOnly:f})})),renderTrack:(e,n)=>t(nn,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:w[n.index]}))}),m&&e(qt,{children:[t("div",{children:$(a)}),t("div",{children:$(s)})]})]}))},on=e=>{var{value:n,ariaLabel:o,onChange:a,onChangeEnd:s}=e,c=l(e,["value","ariaLabel","onChange","onChangeEnd"]);const[u,h]=r(p());i((()=>{n!==u[0]&&h(p())}),[n]);function p(){return null!=n?[n]:[0]}return t(rn,Object.assign({},c,{value:u,numOfThumbs:1,onChange:e=>{const[t]=e;h([t]),null==a||a(t)},onChangeEnd:e=>{const[t]=e;h([t]),null==s||s(t)},ariaLabels:o?[o]:void 0}))};export{on as InputSlider};
//# sourceMappingURL=index.js.map
