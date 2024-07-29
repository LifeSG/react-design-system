import{jsxs as e,jsx as t}from"react/jsx-runtime";import n,{useState as i,useEffect as r}from"react";import o,{css as a}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";function l(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h=Array.isArray,p="object"==typeof c&&c&&c.Object===Object&&c,d="object"==typeof self&&self&&self.Object===Object&&self,f=p||d||Function("return this")(),g=f.Symbol,m=g,F=Object.prototype,y=F.hasOwnProperty,v=F.toString,B=m?m.toStringTag:void 0;var b=function(e){var t=y.call(e,B),n=e[B];try{e[B]=void 0;var i=!0}catch(e){}var r=v.call(e);return i&&(t?e[B]=n:delete e[B]),r},S=Object.prototype.toString;var D=b,E=function(e){return S.call(e)},x=g?g.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?D(e):E(e)};var H=C,A=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==H(e)},w=h,z=k,$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,O=/^\w*$/;var T=function(e,t){if(w(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!z(e))||(O.test(e)||!$.test(e)||null!=t&&e in Object(t))};var _=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P=C,M=_;var L,N=function(e){if(!M(e))return!1;var t=P(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},R=f["__core-js_shared__"],W=(L=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var j=function(e){return!!W&&W in e},I=Function.prototype.toString;var V=N,K=j,U=_,X=function(e){if(null!=e){try{return I.call(e)}catch(e){}try{return e+""}catch(e){}}return""},G=/^\[object .+?Constructor\]$/,Y=Function.prototype,q=Object.prototype,J=Y.toString,Q=q.hasOwnProperty,Z=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!U(e)||K(e))&&(V(e)?Z:G).test(X(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},ie=ne(Object,"create"),re=ie;var oe=function(){this.__data__=re?re(null):{},this.size=0};var ae=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},se=ie,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(se){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},ue=ie,he=Object.prototype.hasOwnProperty;var pe=ie;var de=oe,fe=ae,ge=ce,me=function(e){var t=this.__data__;return ue?void 0!==t[e]:he.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pe&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ye.prototype.clear=de,ye.prototype.delete=fe,ye.prototype.get=ge,ye.prototype.has=me,ye.prototype.set=Fe;var ve=ye;var Be=function(){this.__data__=[],this.size=0};var be=function(e,t){return e===t||e!=e&&t!=t};var Se=function(e,t){for(var n=e.length;n--;)if(be(e[n][0],t))return n;return-1},De=Se,Ee=Array.prototype.splice;var xe=Se;var Ce=Se;var He=Se;var Ae=Be,ke=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ee.call(t,n,1),--this.size,!0)},we=function(e){var t=this.__data__,n=xe(t,e);return n<0?void 0:t[n][1]},ze=function(e){return Ce(this.__data__,e)>-1},$e=function(e,t){var n=this.__data__,i=He(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this};function Oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}Oe.prototype.clear=Ae,Oe.prototype.delete=ke,Oe.prototype.get=we,Oe.prototype.has=ze,Oe.prototype.set=$e;var Te=Oe,_e=ne(f,"Map"),Pe=ve,Me=Te,Le=_e;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Re=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},We=Re;var je=Re;var Ie=Re;var Ve=Re;var Ke=function(){this.size=0,this.__data__={hash:new Pe,map:new(Le||Me),string:new Pe}},Ue=function(e){var t=We(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return je(this,e).get(e)},Ge=function(e){return Ie(this,e).has(e)},Ye=function(e,t){var n=Ve(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}qe.prototype.clear=Ke,qe.prototype.delete=Ue,qe.prototype.get=Xe,qe.prototype.has=Ge,qe.prototype.set=Ye;var Je=qe;function Qe(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var i=arguments,r=t?t.apply(this,i):i[0],o=n.cache;if(o.has(r))return o.get(r);var a=e.apply(this,i);return n.cache=o.set(r,a)||o,a};return n.cache=new(Qe.Cache||Je),n}Qe.Cache=Je;var Ze=Qe;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ze(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,i,r){t.push(i?r.replace(tt,"$1"):n||e)})),t}));var it=function(e,t){for(var n=-1,i=null==e?0:e.length,r=Array(i);++n<i;)r[n]=t(e[n],n,e);return r},rt=h,ot=k,at=g?g.prototype:void 0,st=at?at.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(rt(t))return it(t,e)+"";if(ot(t))return st?st.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ct=lt;var ut=h,ht=T,pt=nt,dt=function(e){return null==e?"":ct(e)};var ft=k;var gt=function(e,t){return ut(e)?e:ht(e,t)?[e]:pt(dt(e))},mt=function(e){if("string"==typeof e||ft(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ft=function(e,t){for(var n=0,i=(t=gt(t,e)).length;null!=e&&n<i;)e=e[mt(t[n++])];return n&&n==i?e:void 0};var yt=u((function(e,t,n){var i=null==e?void 0:Ft(e,t);return void 0===i?n:i}));const vt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var bt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(bt||(bt={}));const St={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,i=Bt(St,n[bt.colorScheme]);return n.options&&n.options.color?vt(i,e,n.options.color):vt(i,e)},Et={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}};function xt(e,t){return xt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},xt(e,t)}function Ct(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Ht(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function At(e){return null!==e&&1===e.length?e[0]:e.slice()}function kt(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function wt(e,t){return zt(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function zt(e,t){const n=(e-t.min)%t.step;let i=e-n;return 2*Math.abs(n)>=t.step&&(i+=n>0?t.step:-t.step),parseFloat(i.toFixed(5))}let $t=function(e){function t(t){var i;(i=e.call(this,t)||this).onKeyUp=()=>{i.onEnd()},i.onMouseUp=()=>{i.onEnd(i.getMouseEventMap())},i.onTouchEnd=e=>{e.preventDefault(),i.onEnd(i.getTouchEventMap())},i.onBlur=()=>{i.setState({index:-1},i.onEnd(i.getKeyDownEventMap()))},i.onMouseMove=e=>{i.setState({pending:!0});const t=i.getMousePosition(e),n=i.getDiffPosition(t[0]),r=i.getValueFromPosition(n);i.move(r)},i.onTouchMove=e=>{if(e.touches.length>1)return;i.setState({pending:!0});const t=i.getTouchPosition(e);if(void 0===i.isScrolling){const e=t[0]-i.startPosition[0],n=t[1]-i.startPosition[1];i.isScrolling=Math.abs(n)>Math.abs(e)}if(i.isScrolling)return void i.setState({index:-1});const n=i.getDiffPosition(t[0]),r=i.getValueFromPosition(n);i.move(r)},i.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(i.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),i.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),i.moveUpByStep();break;case"Home":e.preventDefault(),i.move(i.props.min);break;case"End":e.preventDefault(),i.move(i.props.max);break;case"PageDown":e.preventDefault(),i.moveDownByStep(i.props.pageFn(i.props.step));break;case"PageUp":e.preventDefault(),i.moveUpByStep(i.props.pageFn(i.props.step))}},i.onSliderMouseDown=e=>{if(!i.props.disabled&&2!==e.button){if(i.setState({pending:!0}),!i.props.snapDragDisabled){const t=i.getMousePosition(e);i.forceValueFromPosition(t[0],(e=>{i.start(e,t[0]),kt(i.getMouseEventMap())}))}Ct(e)}},i.onSliderClick=e=>{if(!i.props.disabled&&i.props.onSliderClick&&!i.hasMoved){const t=i.getMousePosition(e),n=wt(i.calcValue(i.calcOffsetFromPosition(t[0])),i.props);i.props.onSliderClick(n)}},i.createOnKeyDown=e=>t=>{i.props.disabled||(i.start(e),kt(i.getKeyDownEventMap()),Ct(t))},i.createOnMouseDown=e=>t=>{if(i.props.disabled||2===t.button)return;i.setState({pending:!0});const n=i.getMousePosition(t);i.start(e,n[0]),kt(i.getMouseEventMap()),Ct(t)},i.createOnTouchStart=e=>t=>{if(i.props.disabled||t.touches.length>1)return;i.setState({pending:!0});const n=i.getTouchPosition(t);i.startPosition=n,i.isScrolling=void 0,i.start(e,n[0]),kt(i.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},i.handleResize=()=>{const e=window.setTimeout((()=>{i.pendingResizeTimeouts.shift(),i.resize()}),0);i.pendingResizeTimeouts.push(e)},i.renderThumb=(e,t)=>{const n=i.props.thumbClassName+" "+i.props.thumbClassName+"-"+t+" "+(i.state.index===t?i.props.thumbActiveClassName:""),r={ref:e=>{i["thumb"+t]=e},key:i.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:i.createOnMouseDown(t),onTouchStart:i.createOnTouchStart(t),onFocus:i.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":i.props.orientation,"aria-valuenow":i.state.value[t],"aria-valuemin":i.props.min,"aria-valuemax":i.props.max,"aria-label":Array.isArray(i.props.ariaLabel)?i.props.ariaLabel[t]:i.props.ariaLabel,"aria-labelledby":Array.isArray(i.props.ariaLabelledby)?i.props.ariaLabelledby[t]:i.props.ariaLabelledby,"aria-disabled":i.props.disabled},o={index:t,value:At(i.state.value),valueNow:i.state.value[t]};return i.props.ariaValuetext&&(r["aria-valuetext"]="string"==typeof i.props.ariaValuetext?i.props.ariaValuetext:i.props.ariaValuetext(o)),i.props.renderThumb(r,o)},i.renderTrack=(e,t,n)=>{const r={key:i.props.trackClassName+"-"+e,className:i.props.trackClassName+" "+i.props.trackClassName+"-"+e,style:i.buildTrackStyle(t,i.state.upperBound-n)},o={index:e,value:At(i.state.value)};return i.props.renderTrack(r,o)};let r=Ht(t.value);r.length||(r=Ht(t.defaultValue)),i.pendingResizeTimeouts=[];const o=[];for(let e=0;e<r.length;e+=1)r[e]=wt(r[e],t),o.push(e);return i.resizeObserver=null,i.resizeElementRef=n.createRef(),i.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:o},i}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,xt(e,t)}(t,e);var i=t.prototype;return i.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=Ht(e.value);return n.length?t.pending?null:{value:n.map((t=>wt(t,e)))}:null},i.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},i.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},i.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},i.getValue=function(){return At(this.state.value)},i.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:i}=this.state,r=i.length;for(let o=0;o<r;o+=1){const r=this.calcOffset(i[o]),a=Math.abs(e-r);a<t&&(t=a,n=o)}return n},i.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},i.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},i.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},i.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},i.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},i.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return wt(this.state.startValue+t,this.props)},i.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},i.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),i=e.getBoundingClientRect(),r=e[n],o=i[this.posMaxKey()],a=i[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=r-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},i.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},i.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},i.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),i=n[this.posMaxKey()],r=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?i:r));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},i.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),i=this.getClosestIndex(n),r=wt(this.calcValue(n),this.props),o=this.state.value.slice();o[i]=r;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(i),this.fireChangeEvent("onChange")}))},i.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},i.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:i}=this.state;i.splice(i.indexOf(e),1),i.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:i})))},i.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=wt(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},i.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=wt(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},i.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:i}=t,r=t[n];if(e===r)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const i=t[n-1];e<i+l&&(e=i+l)}if(n<i-1){const i=t[n+1];e>i-l&&(e=i-l)}}t[n]=e,o&&i>1&&(e>r?(this.pushSucceeding(t,l,n),function(e,t,n,i){for(let r=0;r<e;r+=1){const o=i-r*n;t[e-1-r]>o&&(t[e-1-r]=o)}}(i,t,l,a)):e<r&&(this.pushPreceding(t,l,n),function(e,t,n,i){for(let r=0;r<e;r+=1){const e=i+r*n;t[r]<e&&(t[r]=e)}}(i,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},i.pushSucceeding=function(e,t,n){let i,r;for(i=n,r=e[i]+t;null!==e[i+1]&&r>e[i+1];i+=1,r=e[i]+t)e[i+1]=zt(r,this.props)},i.pushPreceding=function(e,t,n){for(let i=n,r=e[i]-t;null!==e[i-1]&&r<e[i-1];i-=1,r=e[i]-t)e[i-1]=zt(r,this.props)},i.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},i.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},i.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},i.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},i.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},i.fireChangeEvent=function(e){this.props[e]&&this.props[e](At(this.state.value),this.state.index)},i.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},i.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},i.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},i.renderThumbs=function(e){const{length:t}=e,n=[];for(let i=0;i<t;i+=1)n[i]=this.buildThumbStyle(e[i],i);const i=[];for(let e=0;e<t;e+=1)i[e]=this.renderThumb(n[e],e);return i},i.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let i=0;i<n;i+=1)t.push(this.renderTrack(i+1,e[i],e[i+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},i.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},i.render=function(){const e=[],{value:t}=this.state,i=t.length;for(let n=0;n<i;n+=1)e[n]=this.calcOffset(t[n],n);const r=this.props.withTracks?this.renderTracks(e):null,o=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return n.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,o,a)},t}(n.Component);$t.displayName="ReactSlider",$t.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>n.createElement("div",e),renderTrack:e=>n.createElement("div",e),renderMark:e=>n.createElement("span",e)};var Ot=$t;const Tt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},_t={collections:{base:{D1:{fontFamily:Tt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Tt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Tt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Tt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Tt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Tt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Tt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Tt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Tt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Tt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Tt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Tt.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Tt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Tt.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Tt.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Tt.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Tt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Tt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Tt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Tt.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Tt.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Tt.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Tt.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},Pt=e=>t=>{const n=t.theme,i=Bt(_t,n[bt.textStyleScheme]);return n.options&&n.options.textStyle?vt(i,e,n.options.textStyle):vt(i,e)},Mt={D1:{fontFamily:Pt("D1.fontFamily"),fontSize:Pt("D1.fontSize"),fontWeight:Pt("D1.fontWeight"),lineHeight:Pt("D1.lineHeight"),letterSpacing:Pt("D1.letterSpacing")},D2:{fontFamily:Pt("D2.fontFamily"),fontSize:Pt("D2.fontSize"),fontWeight:Pt("D2.fontWeight"),lineHeight:Pt("D2.lineHeight"),letterSpacing:Pt("D2.letterSpacing")},D3:{fontFamily:Pt("D3.fontFamily"),fontSize:Pt("D3.fontSize"),fontWeight:Pt("D3.fontWeight"),lineHeight:Pt("D3.lineHeight"),letterSpacing:Pt("D3.letterSpacing")},D4:{fontFamily:Pt("D4.fontFamily"),fontSize:Pt("D4.fontSize"),fontWeight:Pt("D4.fontWeight"),lineHeight:Pt("D4.lineHeight"),letterSpacing:Pt("D4.letterSpacing")},DBody:{fontFamily:Pt("DBody.fontFamily"),fontSize:Pt("DBody.fontSize"),fontWeight:Pt("DBody.fontWeight"),lineHeight:Pt("DBody.lineHeight"),letterSpacing:Pt("DBody.letterSpacing")},H1:{fontFamily:Pt("H1.fontFamily"),fontSize:Pt("H1.fontSize"),fontWeight:Pt("H1.fontWeight"),lineHeight:Pt("H1.lineHeight"),letterSpacing:Pt("H1.letterSpacing")},H2:{fontFamily:Pt("H2.fontFamily"),fontSize:Pt("H2.fontSize"),fontWeight:Pt("H2.fontWeight"),lineHeight:Pt("H2.lineHeight"),letterSpacing:Pt("H2.letterSpacing")},H3:{fontFamily:Pt("H3.fontFamily"),fontSize:Pt("H3.fontSize"),fontWeight:Pt("H3.fontWeight"),lineHeight:Pt("H3.lineHeight"),letterSpacing:Pt("H3.letterSpacing")},H4:{fontFamily:Pt("H4.fontFamily"),fontSize:Pt("H4.fontSize"),fontWeight:Pt("H4.fontWeight"),lineHeight:Pt("H4.lineHeight"),letterSpacing:Pt("H4.letterSpacing")},H5:{fontFamily:Pt("H5.fontFamily"),fontSize:Pt("H5.fontSize"),fontWeight:Pt("H5.fontWeight"),lineHeight:Pt("H5.lineHeight"),letterSpacing:Pt("H5.letterSpacing")},H6:{fontFamily:Pt("H6.fontFamily"),fontSize:Pt("H6.fontSize"),fontWeight:Pt("H6.fontWeight"),lineHeight:Pt("H6.lineHeight"),letterSpacing:Pt("H6.letterSpacing")},Body:{fontFamily:Pt("Body.fontFamily"),fontSize:Pt("Body.fontSize"),fontWeight:Pt("Body.fontWeight"),lineHeight:Pt("Body.lineHeight"),letterSpacing:Pt("Body.letterSpacing")},BodySmall:{fontFamily:Pt("BodySmall.fontFamily"),fontSize:Pt("BodySmall.fontSize"),fontWeight:Pt("BodySmall.fontWeight"),lineHeight:Pt("BodySmall.lineHeight"),letterSpacing:Pt("BodySmall.letterSpacing")},XSmall:{fontFamily:Pt("XSmall.fontFamily"),fontSize:Pt("XSmall.fontSize"),fontWeight:Pt("XSmall.fontWeight"),lineHeight:Pt("XSmall.lineHeight"),letterSpacing:Pt("XSmall.letterSpacing")}},Lt=e=>{switch(e){case 700:case"bold":return Tt.Bold;case 600:case"semibold":return Tt.Semibold;case 300:case"light":return Tt.Light;case 400:case"regular":return Tt.Regular;default:return""}},Nt=(e,t)=>n=>{var i;const r=Mt[e].fontFamily(n),o=Mt[e].fontWeight(n);return Object.values(Tt).includes(r)?a`
                font-family: ${Lt(t)||Lt(o)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${null!==(i=Rt(t)||o)&&void 0!==i?i:"normal"};
        `},Rt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Wt=e=>{if(e>0)return a`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},jt=(e,t,n=!1)=>i=>{const r=Mt[e],o=r.fontSize(i);return a`
            ${Nt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},It=(e=!1,t=!1,n=void 0)=>t?a`
            display: block;
            ${Wt(n)}
        `:e?a`
            display: inline;
        `:a`
            display: block;
            ${Wt(n)}
        `;var Vt;!function(e){e.D1=o.h1`
        ${e=>a`
                ${jt("D1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>a`
                ${jt("D2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>a`
                ${jt("D3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>a`
                ${jt("D4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>a`
                ${jt("DBody",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>a`
                ${jt("H1",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>a`
                ${jt("H2",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>a`
                ${jt("H3",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>a`
                ${jt("H4",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>a`
                ${jt("H5",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>a`
                ${jt("H6",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>a`
                ${jt("Body",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>a`
                ${jt("BodySmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>a`
                ${jt("XSmall",e.weight,e.paragraph)}
                color: ${Et.Neutral[1]};
                ${It(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Vt||(Vt={}));const Kt=o.a`
    ${e=>a`
            ${jt(e.textStyle,e.weight)}
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
`,Xt=n=>{var{external:i=!1,children:r}=n,o=l(n,["external","children"]);return e(Kt,Object.assign({},o,{children:[r,i&&t(Ut,{})]}))};var Gt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Gt||(Gt={}));const Yt=o.div`
    isolation: isolate;
`,qt=o.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Jt=o.div`
    margin-bottom: 1rem;
`,Qt=o(Vt.Body)`
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
`,rn=n=>{var{value:o,min:a=0,max:s=100,step:c=1,minRange:u,numOfThumbs:h=2,colors:p,disabled:d,readOnly:f,ariaLabels:g,showSliderLabels:m,sliderLabelPrefix:F,sliderLabelSuffix:y,showIndicatorLabel:v,indicatorLabelPrefix:B,indicatorLabelSuffix:b,renderSliderLabel:S,onChange:D,onChangeEnd:E}=n,x=l(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,H]=i(k()),A=function(){const e=function(){const e=d||f?Et.Neutral[5]:Et.Neutral[4],t=d||f?Et.Neutral[4]:Et.Primary;if(1===h)return[t,e];const n=[];n.push(e);for(let e=0;e<h-1;e++)n.push(t);return n.push(e),n}();return new Array(h+1).fill(0).map(((t,n)=>(null==p?void 0:p[n])||e[n]))}();r((()=>{o!==C&&H(k())}),[o]);function k(){if(o&&o.length===h)return o;const e=[];for(let t=0;t<h;t++)e.push(a+c*t);return e}const w=t=>S?S(t):e(Qt,{children:[F,t,y]});return e(Yt,Object.assign({},x,{children:[v&&t(Jt,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e(Qt,{children:[B,t,b]})})()}),t(Zt,{step:c,min:a,max:s,value:C,disabled:d||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];H(t),null==D||D(t)}else{if(t>-1&&C[t]===e[t])return;H(e),null==D||D(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];H(t),null==E||E(t)}else H(e),null==E||E(e)},minDistance:u,ariaLabel:g,renderThumb:(e,n)=>t(tn,Object.assign({"data-testid":`slider-thumb-${n.index}`},e,{tabIndex:d?void 0:e.tabIndex},{children:t(en,{$disabled:d,$readOnly:f})})),renderTrack:(e,n)=>t(nn,Object.assign({"data-testid":`slider-track-${n.index}`},e,{$color:A[n.index]}))}),m&&e(qt,{children:[t("div",{children:w(a)}),t("div",{children:w(s)})]})]}))},on=e=>{var{value:n,ariaLabel:o,onChange:a,onChangeEnd:s}=e,c=l(e,["value","ariaLabel","onChange","onChangeEnd"]);const[u,h]=i(p());r((()=>{n!==u[0]&&h(p())}),[n]);function p(){return null!=n?[n]:[0]}return t(rn,Object.assign({},c,{value:u,numOfThumbs:1,onChange:e=>{const[t]=e;h([t]),null==a||a(t)},onChangeEnd:e=>{const[t]=e;h([t]),null==s||s(t)},ariaLabels:o?[o]:void 0}))};export{on as InputSlider};
//# sourceMappingURL=index.js.map
