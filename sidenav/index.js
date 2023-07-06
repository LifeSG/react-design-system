import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import*as r from"react";import i,{useEffect as o,useLayoutEffect as a,useState as s,useRef as l,forwardRef as c,useCallback as u,useContext as d,useMemo as h,createContext as p,cloneElement as f,isValidElement as g,createRef as m,PureComponent as y}from"react";import v,{css as b,keyframes as w}from"styled-components";import{unstable_batchedUpdates as S,findDOMNode as _}from"react-dom";var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$=Array.isArray,x="object"==typeof F&&F&&F.Object===Object&&F,k="object"==typeof self&&self&&self.Object===Object&&self,B=x||k||Function("return this")(),O=B.Symbol,C=O,I=Object.prototype,E=I.hasOwnProperty,P=I.toString,A=C?C.toStringTag:void 0;var D=function(e){var t=E.call(e,A),n=e[A];try{e[A]=void 0;var r=!0}catch(e){}var i=P.call(e);return r&&(t?e[A]=n:delete e[A]),i},H=Object.prototype.toString;var z=D,j=function(e){return H.call(e)},M=O?O.toStringTag:void 0;var T=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?z(e):j(e)};var R=T,V=function(e){return null!=e&&"object"==typeof e};var N=function(e){return"symbol"==typeof e||V(e)&&"[object Symbol]"==R(e)},W=$,L=N,q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/;var Q=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!L(e))||(U.test(e)||!q.test(e)||null!=t&&e in Object(t))};var G=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},X=T,Z=G;var Y,J=function(e){if(!Z(e))return!1;var t=X(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},K=B["__core-js_shared__"],ee=(Y=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+Y:"";var te=function(e){return!!ee&&ee in e},ne=Function.prototype.toString;var re=J,ie=te,oe=G,ae=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},se=/^\[object .+?Constructor\]$/,le=Function.prototype,ce=Object.prototype,ue=le.toString,de=ce.hasOwnProperty,he=RegExp("^"+ue.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var pe=function(e){return!(!oe(e)||ie(e))&&(re(e)?he:se).test(ae(e))},fe=function(e,t){return null==e?void 0:e[t]};var ge=function(e,t){var n=fe(e,t);return pe(n)?n:void 0},me=ge(Object,"create"),ye=me;var ve=function(){this.__data__=ye?ye(null):{},this.size=0};var be=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},we=me,Se=Object.prototype.hasOwnProperty;var _e=function(e){var t=this.__data__;if(we){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Se.call(t,e)?t[e]:void 0},Fe=me,$e=Object.prototype.hasOwnProperty;var xe=me;var ke=ve,Be=be,Oe=_e,Ce=function(e){var t=this.__data__;return Fe?void 0!==t[e]:$e.call(t,e)},Ie=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=xe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ee(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ee.prototype.clear=ke,Ee.prototype.delete=Be,Ee.prototype.get=Oe,Ee.prototype.has=Ce,Ee.prototype.set=Ie;var Pe=Ee;var Ae=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1},ze=He,je=Array.prototype.splice;var Me=He;var Te=He;var Re=He;var Ve=Ae,Ne=function(e){var t=this.__data__,n=ze(t,e);return!(n<0)&&(n==t.length-1?t.pop():je.call(t,n,1),--this.size,!0)},We=function(e){var t=this.__data__,n=Me(t,e);return n<0?void 0:t[n][1]},Le=function(e){return Te(this.__data__,e)>-1},qe=function(e,t){var n=this.__data__,r=Re(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Ve,Ue.prototype.delete=Ne,Ue.prototype.get=We,Ue.prototype.has=Le,Ue.prototype.set=qe;var Qe=Ue,Ge=ge(B,"Map"),Xe=Pe,Ze=Qe,Ye=Ge;var Je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Ke=function(e,t){var n=e.__data__;return Je(t)?n["string"==typeof t?"string":"hash"]:n.map},et=Ke;var tt=Ke;var nt=Ke;var rt=Ke;var it=function(){this.size=0,this.__data__={hash:new Xe,map:new(Ye||Ze),string:new Xe}},ot=function(e){var t=et(this,e).delete(e);return this.size-=t?1:0,t},at=function(e){return tt(this,e).get(e)},st=function(e){return nt(this,e).has(e)},lt=function(e,t){var n=rt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=it,ct.prototype.delete=ot,ct.prototype.get=at,ct.prototype.has=st,ct.prototype.set=lt;var ut=ct;function dt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(dt.Cache||ut),n}dt.Cache=ut;var ht=dt;var pt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ft=/\\(\\)?/g,gt=function(e){var t=ht(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(pt,(function(e,n,r,i){t.push(r?i.replace(ft,"$1"):n||e)})),t}));var mt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},yt=$,vt=N,bt=O?O.prototype:void 0,wt=bt?bt.toString:void 0;var St=function e(t){if("string"==typeof t)return t;if(yt(t))return mt(t,e)+"";if(vt(t))return wt?wt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},_t=St;var Ft=$,$t=Q,xt=gt,kt=function(e){return null==e?"":_t(e)};var Bt=N;var Ot=function(e,t){return Ft(e)?e:$t(e,t)?[e]:xt(kt(e))},Ct=function(e){if("string"==typeof e||Bt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var It=function(e,t){for(var n=0,r=(t=Ot(t,e)).length;null!=e&&n<r;)e=e[Ct(t[n++])];return n&&n==r?e:void 0};var Et=function(e,t,n){var r=null==e?void 0:It(e,t);return void 0===r?n:r};const Pt=(e,t,n)=>t?Et(n,t)||Et(e,t):n||e,At=(e,t)=>{const n=t||e.defaultValue;return Et(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const Ht={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=At(Ht,n[Dt.colorScheme]);return n.options&&n.options.color?Pt(r,e,n.options.color):Pt(r,e)},jt={Brand:{1:zt("Brand.1"),2:zt("Brand.2"),3:zt("Brand.3"),4:zt("Brand.4"),5:zt("Brand.5"),6:zt("Brand.6")},Primary:zt("Primary"),PrimaryDark:zt("PrimaryDark"),Secondary:zt("Secondary"),Accent:{Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Neutral:{1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Validation:{Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")},Blue:{Text:zt("Validation.Blue.Text"),Icon:zt("Validation.Blue.Icon"),Border:zt("Validation.Blue.Border"),Background:zt("Validation.Blue.Background")}},Shadow:{Accent:zt("Shadow.Accent"),Red:zt("Shadow.Red"),Elevation:zt("Shadow.Elevation")}},Mt={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Tt=e=>Object.keys(Mt).reduce(((t,n)=>{const r=Mt[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Rt=Tt("max-width");Tt("min-width");let Vt=rn();const Nt=e=>Kt(e,Vt);let Wt=rn();Nt.write=e=>Kt(e,Wt);let Lt=rn();Nt.onStart=e=>Kt(e,Lt);let qt=rn();Nt.onFrame=e=>Kt(e,qt);let Ut=rn();Nt.onFinish=e=>Kt(e,Ut);let Qt=[];Nt.setTimeout=(e,t)=>{let n=Nt.now()+t,r=()=>{let e=Qt.findIndex((e=>e.cancel==r));~e&&Qt.splice(e,1),Yt-=~e?1:0},i={time:n,handler:e,cancel:r};return Qt.splice(Gt(n),0,i),Yt+=1,en(),i};let Gt=e=>~(~Qt.findIndex((t=>t.time>e))||~Qt.length);Nt.cancel=e=>{Lt.delete(e),qt.delete(e),Ut.delete(e),Vt.delete(e),Wt.delete(e)},Nt.sync=e=>{Jt=!0,Nt.batchedUpdates(e),Jt=!1},Nt.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Nt.onStart(n)}return r.handler=e,r.cancel=()=>{Lt.delete(n),t=null},r};let Xt="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Nt.use=e=>Xt=e,Nt.now="undefined"!=typeof performance?()=>performance.now():Date.now,Nt.batchedUpdates=e=>e(),Nt.catch=console.error,Nt.frameLoop="always",Nt.advance=()=>{"demand"!==Nt.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):nn()};let Zt=-1,Yt=0,Jt=!1;function Kt(e,t){Jt?(t.delete(e),e(0)):(t.add(e),en())}function en(){Zt<0&&(Zt=0,"demand"!==Nt.frameLoop&&Xt(tn))}function tn(){~Zt&&(Xt(tn),Nt.batchedUpdates(nn))}function nn(){let e=Zt;Zt=Nt.now();let t=Gt(Zt);t&&(on(Qt.splice(0,t),(e=>e.handler())),Yt-=t),Yt?(Lt.flush(),Vt.flush(e?Math.min(64,Zt-e):16.667),qt.flush(),Wt.flush(),Ut.flush()):Zt=-1}function rn(){let e=new Set,t=e;return{add(n){Yt+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Yt-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Yt-=t.size,on(t,(t=>t(n)&&e.add(t))),Yt+=e.size,t=e)}}}function on(e,t){e.forEach((e=>{try{t(e)}catch(e){Nt.catch(e)}}))}function an(){}const sn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ln(e,t){if(sn.arr(e)){if(!sn.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const cn=(e,t)=>e.forEach(t);function un(e,t,n){if(sn.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const dn=e=>sn.und(e)?[]:sn.arr(e)?e:[e];function hn(e,t){if(e.size){const n=Array.from(e);e.clear(),cn(n,t)}}const pn=(e,...t)=>hn(e,(e=>e(...t))),fn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let gn,mn,yn=null,vn=!1,bn=an;var wn=Object.freeze({__proto__:null,get createStringInterpolator(){return gn},get to(){return mn},get colors(){return yn},get skipAnimation(){return vn},get willAdvance(){return bn},assign:e=>{e.to&&(mn=e.to),e.now&&(Nt.now=e.now),void 0!==e.colors&&(yn=e.colors),null!=e.skipAnimation&&(vn=e.skipAnimation),e.createStringInterpolator&&(gn=e.createStringInterpolator),e.requestAnimationFrame&&Nt.use(e.requestAnimationFrame),e.batchedUpdates&&(Nt.batchedUpdates=e.batchedUpdates),e.willAdvance&&(bn=e.willAdvance),e.frameLoop&&(Nt.frameLoop=e.frameLoop)}});const Sn=new Set;let _n=[],Fn=[],$n=0;const xn={get idle(){return!Sn.size&&!_n.length},start(e){$n>e.priority?(Sn.add(e),Nt.onStart(kn)):(Bn(e),Nt(Cn))},advance:Cn,sort(e){if($n)Nt.onFrame((()=>xn.sort(e)));else{const t=_n.indexOf(e);~t&&(_n.splice(t,1),On(e))}},clear(){_n=[],Sn.clear()}};function kn(){Sn.forEach(Bn),Sn.clear(),Nt(Cn)}function Bn(e){_n.includes(e)||On(e)}function On(e){_n.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(_n,(t=>t.priority>e.priority)),0,e)}function Cn(e){const t=Fn;for(let n=0;n<_n.length;n++){const r=_n[n];$n=r.priority,r.idle||(bn(r),r.advance(e),r.idle||t.push(r))}return $n=0,Fn=_n,Fn.length=0,_n=t,_n.length>0}const In="[-+]?\\d*\\.?\\d+",En=In+"%";function Pn(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const An=new RegExp("rgb"+Pn(In,In,In)),Dn=new RegExp("rgba"+Pn(In,In,In,In)),Hn=new RegExp("hsl"+Pn(In,En,En)),zn=new RegExp("hsla"+Pn(In,En,En,In)),jn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Mn=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Tn=/^#([0-9a-fA-F]{6})$/,Rn=/^#([0-9a-fA-F]{8})$/;function Vn(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Nn(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Vn(i,r,e+1/3),a=Vn(i,r,e),s=Vn(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Wn(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ln(e){return(parseFloat(e)%360+360)%360/360}function qn(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Un(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Qn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Tn.exec(e))?parseInt(t[1]+"ff",16)>>>0:yn&&void 0!==yn[e]?yn[e]:(t=An.exec(e))?(Wn(t[1])<<24|Wn(t[2])<<16|Wn(t[3])<<8|255)>>>0:(t=Dn.exec(e))?(Wn(t[1])<<24|Wn(t[2])<<16|Wn(t[3])<<8|qn(t[4]))>>>0:(t=jn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Rn.exec(e))?parseInt(t[1],16)>>>0:(t=Mn.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Hn.exec(e))?(255|Nn(Ln(t[1]),Un(t[2]),Un(t[3])))>>>0:(t=zn.exec(e))?(Nn(Ln(t[1]),Un(t[2]),Un(t[3]))|qn(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Gn=(e,t,n)=>{if(sn.fun(e))return e;if(sn.arr(e))return Gn({range:e,output:t,extrapolate:n});if(sn.str(e.output[0]))return gn(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const Xn=1.70158,Zn=1.525*Xn,Yn=Xn+1,Jn=2*Math.PI/3,Kn=2*Math.PI/4.5,er=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},tr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Yn*e*e*e-Xn*e*e,easeOutBack:e=>1+Yn*Math.pow(e-1,3)+Xn*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Zn)/2:(Math.pow(2*e-2,2)*((Zn+1)*(2*e-2)+Zn)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Jn),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Jn)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Kn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Kn)/2+1,easeInBounce:e=>1-er(1-e),easeOutBounce:er,easeInOutBounce:e=>e<.5?(1-er(1-2*e))/2:(1+er(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function nr(){return nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nr.apply(this,arguments)}const rr=Symbol.for("FluidValue.get"),ir=Symbol.for("FluidValue.observers"),or=e=>Boolean(e&&e[rr]),ar=e=>e&&e[rr]?e[rr]():e,sr=e=>e[ir]||null;function lr(e,t){let n=e[ir];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class cr{constructor(e){if(this[rr]=void 0,this[ir]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");ur(this,e)}}const ur=(e,t)=>pr(e,rr,t);function dr(e,t){if(e[rr]){let n=e[ir];n||pr(e,ir,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function hr(e,t){let n=e[ir];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[ir]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const pr=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),fr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,gr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,mr=new RegExp(`(${fr.source})(%|[a-z]+)`,"i"),yr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,vr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,br=e=>{const[t,n]=wr(e);if(!t||fn())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&vr.test(n)?br(n):n||e},wr=e=>{const t=vr.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Sr;const _r=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Fr=e=>{Sr||(Sr=yn?new RegExp(`(${Object.keys(yn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ar(e).replace(vr,br).replace(gr,Qn).replace(Sr,Qn))),n=t.map((e=>e.match(fr).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Gn(nr({},e,{output:t}))));return e=>{var n;const i=!mr.test(t[0])&&(null==(n=t.find((e=>mr.test(e))))?void 0:n.replace(fr,""));let o=0;return t[0].replace(fr,(()=>`${r[o++](e)}${i||""}`)).replace(yr,_r)}},$r="react-spring: ",xr=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${$r}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},kr=xr(console.warn);const Br=xr(console.warn);function Or(e){return sn.str(e)&&("#"==e[0]||/\d/.test(e)||!fn()&&vr.test(e)||e in(yn||{}))}const Cr=fn()?o:a,Ir=()=>{const e=l(!1);return Cr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Er(){const e=s()[1],t=Ir();return()=>{t.current&&e(Math.random())}}const Pr=e=>o(e,Ar),Ar=[];function Dr(e){const t=l();return o((()=>{t.current=e})),t.current}const Hr=Symbol.for("Animated:node"),zr=e=>e&&e[Hr],jr=(e,t)=>{return n=e,r=Hr,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Mr=e=>e&&e[Hr]&&e[Hr].getPayload();class Tr{constructor(){this.payload=void 0,jr(this,this)}getPayload(){return this.payload||[]}}class Rr extends Tr{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,sn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Rr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return sn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,sn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Vr extends Rr{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Gn({output:[e,e]})}static create(e){return new Vr(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(sn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Gn({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Nr={dependencies:null};class Wr extends Tr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return un(this.source,((n,r)=>{var i;(i=n)&&i[Hr]===i?t[r]=n.getValue(e):or(n)?t[r]=ar(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&cn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return un(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Nr.dependencies&&or(e)&&Nr.dependencies.add(e);const t=Mr(e);t&&cn(t,(e=>this.add(e)))}}class Lr extends Wr{constructor(e){super(e)}static create(e){return new Lr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(qr)),!0)}}function qr(e){return(Or(e)?Vr:Rr).create(e)}function Ur(e){const t=zr(e);return t?t.constructor:sn.arr(e)?Lr:Or(e)?Vr:Rr}function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(this,arguments)}const Gr=(e,t)=>{const n=!sn.fun(e)||e.prototype&&e.prototype.isReactComponent;return c(((i,a)=>{const s=l(null),c=n&&u((e=>{s.current=function(e,t){e&&(sn.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[d,h]=function(e,t){const n=new Set;Nr.dependencies=n,e.style&&(e=Qr({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Wr(e),Nr.dependencies=null,[e,n]}(i,t),p=Er(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&p()},g=new Xr(f,h),m=l();Cr((()=>(m.current=g,cn(h,(e=>dr(e,g))),()=>{m.current&&(cn(m.current.deps,(e=>hr(e,m.current))),Nt.cancel(m.current.update))}))),o(f,[]),Pr((()=>()=>{const e=m.current;cn(e.deps,(t=>hr(t,e)))}));const y=t.getComponentProps(d.getValue());return r.createElement(e,Qr({},y,{ref:c}))}))};class Xr{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Nt.write(this.update)}}const Zr=Symbol.for("AnimatedComponent"),Yr=e=>sn.str(e)?e:e&&sn.str(e.displayName)?e.displayName:sn.fun(e)&&e.name||null;function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}function Kr(e,...t){return sn.fun(e)?e(...t):e}const ei=(e,t)=>!0===e||!!(t&&e&&(sn.fun(e)?e(t):dn(e).includes(t))),ti=(e,t)=>sn.obj(e)?t&&e[t]:e,ni=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ri=e=>e,ii=(e,t=ri)=>{let n=oi;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);sn.und(n)||(r[i]=n)}return r},oi=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ai={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function si(e){const t=function(e){const t={};let n=0;if(un(e,((e,r)=>{ai[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return un(e,((e,r)=>r in t||(n[r]=e))),n}return Jr({},e)}function li(e){return e=ar(e),sn.arr(e)?e.map(li):Or(e)?wn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ci(e){return sn.fun(e)||sn.arr(e)&&sn.obj(e[0])}const ui=Jr({},{tension:170,friction:26},{mass:1,damping:1,easing:tr.linear,clamp:!1});class di{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,ui)}}function hi(e,t){if(sn.und(t.decay)){const n=!sn.und(t.tension)||!sn.und(t.friction);!n&&sn.und(t.frequency)&&sn.und(t.damping)&&sn.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const pi=[];class fi{constructor(){this.changed=!1,this.values=pi,this.toValues=null,this.fromValues=pi,this.to=void 0,this.from=void 0,this.config=new di,this.immediate=!1}}function gi(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=ei(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{sn.und(n.pause)||(i.paused=ei(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||ei(e,t)),c=Kr(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(u),u.cancel(),c=u.time-Nt.now()}function p(){c>0&&!wn.skipAnimation?(i.delayed=!0,u=Nt.setTimeout(f,c),i.pauseQueue.add(h),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Jr({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const mi=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?bi(e.get()):t.every((e=>e.noop))?yi(e.get()):vi(e.get(),t.every((e=>e.finished))),yi=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),vi=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),bi=e=>({value:e,cancelled:!0,finished:!1});function wi(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ii(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&bi(r)||i!==n.asyncId&&vi(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new _i,a=new Fi;return(async()=>{if(wn.skipAnimation)throw Si(n),a.result=vi(r,!1),d(a),a;p(o);const s=sn.obj(e)?Jr({},e):Jr({},t,{to:e});s.parentId=i,un(c,((e,t)=>{sn.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(wn.skipAnimation)return Si(n),vi(r,!1);try{let t;t=sn.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=vi(r.get(),!0,!1)}catch(e){if(e instanceof _i)g=e.result;else{if(!(e instanceof Fi))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return sn.fun(a)&&Nt.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Si(e,t){hn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class _i extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Fi extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const $i=e=>e instanceof ki;let xi=1;class ki extends cr{constructor(...e){super(...e),this.id=xi++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=zr(this);return e&&e.getValue()}to(...e){return wn.to(this,e)}interpolate(...e){return kr(`${$r}The "interpolate" function is deprecated in v9 (use "to" instead)`),wn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){lr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||xn.sort(this),lr(this,{type:"priority",parent:this,priority:e})}}const Bi=Symbol.for("SpringPhase"),Oi=e=>(1&e[Bi])>0,Ci=e=>(2&e[Bi])>0,Ii=e=>(4&e[Bi])>0,Ei=(e,t)=>t?e[Bi]|=3:e[Bi]&=-3,Pi=(e,t)=>t?e[Bi]|=4:e[Bi]&=-5;class Ai extends ki{constructor(e,t){if(super(),this.key=void 0,this.animation=new fi,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!sn.und(e)||!sn.und(t)){const n=sn.obj(e)?Jr({},e):Jr({},t,{from:e});sn.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Ci(this)||this._state.asyncTo)||Ii(this)}get goal(){return ar(this.animation.to)}get velocity(){const e=zr(this);return e instanceof Rr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Oi(this)}get isAnimating(){return Ci(this)}get isPaused(){return Ii(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=Mr(r.to);!a&&or(r.to)&&(o=dn(ar(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Vr?1:a?a[l].lastPosition:o[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=sn.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(sn.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!sn.und(r),p=n==c?s.v0>0:n<c;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>t,f||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==p,g&&(a=-a*r,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),a=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=zr(this),l=s.getValue();if(t){const e=ar(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Nt.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Ci(this)){const{to:e,config:t}=this.animation;Nt.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return sn.und(e)?(n=this.queue||[],this.queue=[]):n=[sn.obj(e)?e:Jr({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>mi(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Si(this._state,e&&this._lastCallId),Nt.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=sn.obj(n)?n[t]:n,(null==n||ci(n))&&(n=void 0),r=sn.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Oi(this)||(e.reverse&&([n,r]=[r,n]),r=ar(r),sn.und(r)?zr(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Jr({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,ii(n,((e,t)=>/^on/.test(t)?ti(e,r):e))),Ri(this,n,"onProps"),Vi(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return gi(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Ii(this)||(Pi(this,!0),pn(a.pauseQueue),Vi(this,"onPause",vi(this,Di(this,this.animation.to)),this))},resume:()=>{Ii(this)&&(Pi(this,!1),Ci(this)&&this._resume(),pn(a.resumeQueue),Vi(this,"onResume",vi(this,Di(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Hi(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(bi(this));const r=!sn.und(e.to),i=!sn.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(bi(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!sn.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!ln(d,c);h&&(s.from=d),d=ar(d);const p=!ln(u,l);p&&this._focus(u);const f=ci(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(hi(n=Jr({},n),t),t=Jr({},n,t)),hi(e,t),Object.assign(e,t);for(const t in ui)null==e[t]&&(e[t]=ui[t]);let{mass:r,frequency:i,damping:o}=e;sn.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,Kr(t.config,o),t.config!==a.config?Kr(a.config,o):void 0);let v=zr(this);if(!v||sn.und(u))return n(vi(this,!0));const b=sn.und(t.reset)?i&&!t.default:!sn.und(d)&&ei(t.reset,o),w=b?d:this.get(),S=li(u),_=sn.num(S)||sn.arr(S)||Or(S),F=!f&&(!_||ei(a.immediate||t.immediate,o));if(p){const e=Ur(u);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(S)}}const $=v.constructor;let x=or(u),k=!1;if(!x){const e=b||!Oi(this)&&h;(p||e)&&(k=ln(li(w),S),x=!k),(ln(s.immediate,F)||F)&&ln(g.decay,m)&&ln(g.velocity,y)||(x=!0)}if(k&&Ci(this)&&(s.changed&&!b?x=!0:x||this._stop(l)),!f&&((x||or(l))&&(s.values=v.getPayload(),s.toValues=or(u)?null:$==Vr?[1]:dn(S)),s.immediate!=F&&(s.immediate=F,F||b||this._set(l)),x)){const{onRest:e}=s;cn(Ti,(e=>Ri(this,t,e)));const r=vi(this,Di(this,l));pn(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Nt.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Kr(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(wi(t.to,t,this._state,this)):x?this._start():Ci(this)&&!p?this._pendingCalls.add(n):n(yi(w))}_focus(e){const t=this.animation;e!==t.to&&(sr(this)&&this._detach(),t.to=e,sr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;or(t)&&(dr(t,this),$i(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;or(e)&&hr(e,this)}_set(e,t=!0){const n=ar(e);if(!sn.und(n)){const e=zr(this);if(!e||!ln(n,e.getValue())){const r=Ur(n);e&&e.constructor==r?e.setValue(n):jr(this,r.create(n)),e&&Nt.batchedUpdates((()=>{this._onChange(n,t)}))}}return zr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Vi(this,"onStart",vi(this,Di(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Kr(this.animation.onChange,e,this)),Kr(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;zr(this).reset(ar(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Ci(this)||(Ei(this,!0),Ii(this)||this._resume())}_resume(){wn.skipAnimation?this.finish():xn.start(this)}_stop(e,t){if(Ci(this)){Ei(this,!1);const n=this.animation;cn(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),lr(this,{type:"idle",parent:this});const r=t?bi(this.get()):vi(this.get(),Di(this,null!=e?e:n.to));pn(this._pendingCalls,r),n.changed&&(n.changed=!1,Vi(this,"onRest",r,this))}}}function Di(e,t){const n=li(t);return ln(li(e.get()),n)}function Hi(e,t=e.loop,n=e.to){let r=Kr(t);if(r){const i=!0!==r&&si(r),o=(i||e).reverse,a=!i||i.reset;return zi(Jr({},e,{loop:t,default:!1,pause:void 0,to:!o||ci(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function zi(e){const{to:t,from:n}=e=si(e),r=new Set;return sn.obj(t)&&Mi(t,r),sn.obj(n)&&Mi(n,r),e.keys=r.size?Array.from(r):null,e}function ji(e){const t=zi(e);return sn.und(t.default)&&(t.default=ii(t)),t}function Mi(e,t){un(e,((e,n)=>null!=e&&t.add(n)))}const Ti=["onStart","onRest","onChange","onPause","onResume"];function Ri(e,t,n){e.animation[n]=t[n]!==ni(t,n)?ti(t[n],e.key):void 0}function Vi(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const Ni=["onStart","onChange","onRest"];let Wi=1;class Li{constructor(e,t){this.id=Wi++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Jr({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];sn.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(zi(e)),this}start(e){let{queue:t}=this;return e?t=dn(e).map(zi):this.queue=[],this._flush?this._flush(this,t):(Yi(this,t),qi(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;cn(dn(t),(t=>n[t].stop(!!e)))}else Si(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(sn.und(e))this.start({pause:!0});else{const t=this.springs;cn(dn(e),(e=>t[e].pause()))}return this}resume(e){if(sn.und(e))this.start({pause:!1});else{const t=this.springs;cn(dn(e),(e=>t[e].resume()))}return this}each(e){un(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,hn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&hn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,hn(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Nt.onFrame(this._onFrame)}}function qi(e,t){return Promise.all(t.map((t=>Ui(e,t)))).then((t=>mi(e,t)))}async function Ui(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=sn.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=sn.arr(i)||sn.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):cn(Ni,(n=>{const r=t[n];if(sn.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,pn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===ni(t,"cancel");(u||p&&d.asyncId)&&h.push(gi(++e._lastAsyncId,{props:t,state:d,actions:{pause:an,resume:an,start(t,n){p?(Si(d,e._lastAsyncId),n(bi(e))):(t.onRest=s,n(wi(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=mi(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=Hi(t,a,i);if(n)return Yi(e,[n]),Ui(e,n,!0)}return l&&Nt.batchedUpdates((()=>l(f,e,e.item))),f}function Qi(e,t){const n=Jr({},e.springs);return t&&cn(dn(t),(e=>{sn.und(e.keys)&&(e=zi(e)),sn.obj(e.to)||(e=Jr({},e,{to:void 0})),Zi(n,e,(e=>Xi(e)))})),Gi(e,n),n}function Gi(e,t){un(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,dr(t,e))}))}function Xi(e,t){const n=new Ai;return n.key=e,t&&dr(n,t),n}function Zi(e,t,n){t.keys&&cn(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Yi(e,t){cn(t,(t=>{Zi(e.springs,t,(t=>Xi(t,e)))}))}const Ji=["children"],Ki=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Ji);const i=d(eo),a=n.pause||!!i.pause,c=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=l(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return o((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:c})),[a,c]);const{Provider:u}=eo;return r.createElement(u,{value:n},t)},eo=(to=Ki,no={},Object.assign(to,r.createContext(no)),to.Provider._context=to,to.Consumer._context=to,to);var to,no;Ki.Provider=eo.Provider,Ki.Consumer=eo.Consumer;const ro=()=>{const e=[],t=function(t){Br(`${$r}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return cn(e,((e,i)=>{if(sn.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return cn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return cn(e,(e=>e.resume(...arguments))),this},t.set=function(t){cn(e,(e=>e.set(t)))},t.start=function(t){const n=[];return cn(e,((e,r)=>{if(sn.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return cn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return cn(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return sn.fun(e)?e(n,t):e};return t._getProps=n,t};function io(e,t){const n=sn.fun(e),[[r],i]=function(e,t,n){const r=sn.fun(t)&&t;r&&!n&&(n=[]);const i=h((()=>r||3==arguments.length?ro():void 0),[]),o=l(0),a=Er(),s=h((()=>({ctrls:[],queue:[],flush(e,t){const n=Qi(e,t);return o.current>0&&!s.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?qi(e,t):new Promise((r=>{Gi(e,n),s.queue.push((()=>{r(qi(e,t))})),a()}))}})),[]),c=l([...s.ctrls]),u=[],p=Dr(e)||0;function f(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Li(null,s.flush)),n=r?r(i,e):t[i];n&&(u[i]=ji(n))}}h((()=>{cn(c.current.slice(e,p),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,f(p,e)}),[e]),h((()=>{f(0,Math.min(p,e))}),n);const g=c.current.map(((e,t)=>Qi(e,u[t]))),m=d(Ki),y=Dr(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Cr((()=>{o.current++,s.ctrls=c.current;const{queue:e}=s;e.length&&(s.queue=[],cn(e,(e=>e()))),cn(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Pr((()=>()=>{cn(s.ctrls,(e=>e.stop(!0)))}));const b=g.map((e=>Jr({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let oo;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(oo||(oo={}));class ao extends ki{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Gn(...t);const n=this._get(),r=Ur(n);jr(this,r.create(n))}advance(e){const t=this._get();ln(t,this.get())||(zr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&lo(this._active)&&co(this)}_get(){const e=sn.arr(this.source)?this.source.map(ar):dn(ar(this.source));return this.calc(...e)}_start(){this.idle&&!lo(this._active)&&(this.idle=!1,cn(Mr(this),(e=>{e.done=!1})),wn.skipAnimation?(Nt.batchedUpdates((()=>this.advance())),co(this)):xn.start(this))}_attach(){let e=1;cn(dn(this.source),(t=>{or(t)&&dr(t,this),$i(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){cn(dn(this.source),(e=>{or(e)&&hr(e,this)})),this._active.clear(),co(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=dn(this.source).reduce(((e,t)=>Math.max(e,($i(t)?t.priority:0)+1)),0))}}function so(e){return!1!==e.idle}function lo(e){return!e.size||Array.from(e).every(so)}function co(e){e.idle||(e.idle=!0,cn(Mr(e),(e=>{e.done=!0})),lr(e,{type:"idle",parent:e}))}function uo(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}wn.assign({createStringInterpolator:Fr,to:(e,t)=>new ao(e,t)});const ho=["style","children","scrollTop","scrollLeft","viewBox"],po=/^--/;function fo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||po.test(e)||mo.hasOwnProperty(e)&&mo[e]?(""+t).trim():t+"px"}const go={};let mo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const yo=["Webkit","Ms","Moz","O"];mo=Object.keys(mo).reduce(((e,t)=>(yo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),mo);const vo=["x","y","z"],bo=/^(matrix|translate|scale|rotate|skew)/,wo=/^(translate)/,So=/^(rotate|skew)/,_o=(e,t)=>sn.num(e)&&0!==e?e+t:e,Fo=(e,t)=>sn.arr(e)?e.every((e=>Fo(e,t))):sn.num(e)?e===t:parseFloat(e)===t;class $o extends Wr{constructor(e){let{x:t,y:n,z:r}=e,i=uo(e,vo);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>_o(e,"px"))).join(",")})`,Fo(e,0)]))),un(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(bo.test(t)){if(delete i[t],sn.und(e))return;const n=wo.test(t)?"px":So.test(t)?"deg":"";o.push(dn(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${_o(i,n)})`,Fo(i,0)]:e=>[`${t}(${e.map((e=>_o(e,n))).join(",")})`,Fo(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new xo(o,a)),super(i)}}class xo extends cr{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return cn(this.inputs,((n,r)=>{const i=ar(n[0]),[o,a]=this.transforms[r](sn.arr(i)?i:n.map(ar));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&cn(this.inputs,(e=>cn(e,(e=>or(e)&&dr(e,this)))))}observerRemoved(e){0==e&&cn(this.inputs,(e=>cn(e,(e=>or(e)&&hr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),lr(this,e)}}const ko=["scrollTop","scrollLeft"];wn.assign({batchedUpdates:S,createStringInterpolator:Fr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const Bo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Wr(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=Yr(e)||"Anonymous";return(e=sn.str(e)?o[e]||(o[e]=Gr(e,i)):e[Zr]||(e[Zr]=Gr(e,i))).displayName=`Animated(${t})`,e};return un(e,((t,n)=>{sn.arr(e)&&(n=Yr(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,c=uo(r,ho),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:go[t]||(go[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=fo(t,i[t]);po.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new $o(e),getComponentProps:e=>uo(e,ko)}),Oo=Bo.animated,Co=v.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,Io=v.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${jt.Neutral[5]};
    background-color: ${jt.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,Eo=v(Io)`
    height: 100vh;
    left: 0;
    top: 0;
    ${Rt.mobileL} {
        display: none;
        visibility: hidden;
    }
`,Po=v(Io)`
    display: none;
    visibility: hidden;
    ${Rt.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,Ao=v(Oo.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${jt.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${jt.Neutral[5]};

    ${e=>e.$showDrawer?b`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:b`
                  border: 0;
                  padding: 0;
              `};
`,Do={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ho={collections:{base:{D1:{fontFamily:Do.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Do.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Do.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Do.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Do.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Do.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Do.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Do.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Do.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Do.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Do.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Do.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Do.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Do.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},zo=e=>t=>{const n=t.theme,r=At(Ho,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?Pt(r,e,n.options.textStyle):Pt(r,e)},jo={D1:{fontFamily:zo("D1.fontFamily"),fontSize:zo("D1.fontSize"),fontWeight:zo("D1.fontWeight"),lineHeight:zo("D1.lineHeight"),letterSpacing:zo("D1.letterSpacing")},D2:{fontFamily:zo("D2.fontFamily"),fontSize:zo("D2.fontSize"),fontWeight:zo("D2.fontWeight"),lineHeight:zo("D2.lineHeight"),letterSpacing:zo("D2.letterSpacing")},D3:{fontFamily:zo("D3.fontFamily"),fontSize:zo("D3.fontSize"),fontWeight:zo("D3.fontWeight"),lineHeight:zo("D3.lineHeight"),letterSpacing:zo("D3.letterSpacing")},D4:{fontFamily:zo("D4.fontFamily"),fontSize:zo("D4.fontSize"),fontWeight:zo("D4.fontWeight"),lineHeight:zo("D4.lineHeight"),letterSpacing:zo("D4.letterSpacing")},DBody:{fontFamily:zo("DBody.fontFamily"),fontSize:zo("DBody.fontSize"),fontWeight:zo("DBody.fontWeight"),lineHeight:zo("DBody.lineHeight"),letterSpacing:zo("DBody.letterSpacing")},H1:{fontFamily:zo("H1.fontFamily"),fontSize:zo("H1.fontSize"),fontWeight:zo("H1.fontWeight"),lineHeight:zo("H1.lineHeight"),letterSpacing:zo("H1.letterSpacing")},H2:{fontFamily:zo("H2.fontFamily"),fontSize:zo("H2.fontSize"),fontWeight:zo("H2.fontWeight"),lineHeight:zo("H2.lineHeight"),letterSpacing:zo("H2.letterSpacing")},H3:{fontFamily:zo("H3.fontFamily"),fontSize:zo("H3.fontSize"),fontWeight:zo("H3.fontWeight"),lineHeight:zo("H3.lineHeight"),letterSpacing:zo("H3.letterSpacing")},H4:{fontFamily:zo("H4.fontFamily"),fontSize:zo("H4.fontSize"),fontWeight:zo("H4.fontWeight"),lineHeight:zo("H4.lineHeight"),letterSpacing:zo("H4.letterSpacing")},H5:{fontFamily:zo("H5.fontFamily"),fontSize:zo("H5.fontSize"),fontWeight:zo("H5.fontWeight"),lineHeight:zo("H5.lineHeight"),letterSpacing:zo("H5.letterSpacing")},H6:{fontFamily:zo("H6.fontFamily"),fontSize:zo("H6.fontSize"),fontWeight:zo("H6.fontWeight"),lineHeight:zo("H6.lineHeight"),letterSpacing:zo("H6.letterSpacing")},Body:{fontFamily:zo("Body.fontFamily"),fontSize:zo("Body.fontSize"),fontWeight:zo("Body.fontWeight"),lineHeight:zo("Body.lineHeight"),letterSpacing:zo("Body.letterSpacing")},BodySmall:{fontFamily:zo("BodySmall.fontFamily"),fontSize:zo("BodySmall.fontSize"),fontWeight:zo("BodySmall.fontWeight"),lineHeight:zo("BodySmall.lineHeight"),letterSpacing:zo("BodySmall.letterSpacing")},XSmall:{fontFamily:zo("XSmall.fontFamily"),fontSize:zo("XSmall.fontSize"),fontWeight:zo("XSmall.fontWeight"),lineHeight:zo("XSmall.lineHeight"),letterSpacing:zo("XSmall.letterSpacing")}},Mo=e=>{switch(e){case 700:case"bold":return Do.Bold;case 600:case"semibold":return Do.Semibold;case 300:case"light":return Do.Light;case 400:case"regular":return Do.Regular;default:return""}},To=(e,t)=>n=>{const r=jo[e].fontFamily(n),i=jo[e].fontWeight(n);return Object.values(Do).includes(r)?b`
                font-family: ${Mo(t)||Mo(i)||r};
                font-weight: normal !important;
            `:b`
            font-family: ${r};
            font-weight: ${(Ro(t)||i)??"normal"};
        `},Ro=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Vo=To,No=(e,t,n=!1)=>r=>{const i=jo[e],o=i.fontSize(r);return b`
            ${To(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${b`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Wo=(e=!1,t=!1)=>t?b`
            display: block;
        `:e?b`
            display: inline;
        `:b`
            display: block;
        `;var Lo,qo={};Object.defineProperty(qo,"__esModule",{value:!0});var Uo=e;const Qo=e=>Uo.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Uo.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Go;Qo.displayName="ExternalIcon",Lo=qo.ExternalIcon=Qo,function(e){e.D1=v.h1`
        ${e=>b`
                ${No("D1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.D2=v.h1`
        ${e=>b`
                ${No("D2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.D3=v.h1`
        ${e=>b`
                ${No("D3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.D4=v.h1`
        ${e=>b`
                ${No("D4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.DBody=v.h1`
        ${e=>b`
                ${No("DBody",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.H1=v.h1`
        ${e=>b`
                ${No("H1",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.H2=v.h2`
        ${e=>b`
                ${No("H2",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.H3=v.h3`
        ${e=>b`
                ${No("H3",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.H4=v.h4`
        ${e=>b`
                ${No("H4",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.H5=v.h5`
        ${e=>b`
                ${No("H5",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.H6=v.h6`
        ${e=>b`
                ${No("H6",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.Body=v.p`
        ${e=>b`
                ${No("Body",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=v.p`
        ${e=>b`
                ${No("BodySmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.XSmall=v.span`
        ${e=>b`
                ${No("XSmall",e.weight,e.paragraph)}
                color: ${jt.Neutral[1]};
                ${Wo(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Yo({...e,textStyle:"Body"}),Small:e=>Yo({...e,textStyle:"BodySmall"})}}(Go||(Go={}));const Xo=v.a`
    ${e=>b`
            ${No(e.textStyle,e.weight)}
            color: ${jt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${jt.Secondary};

                svg {
                    color: ${jt.Secondary};
                }
            }
        `}
`,Zo=v(Lo)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Yo=({external:e=!1,children:r,...i})=>t(Xo,{...i,children:[r,e&&n(Zo,{})]});var Jo;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jo||(Jo={}));const Ko=v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,ea=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ta=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||jt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ea} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,na=v(ta)`
    animation-delay: -0.45s;
`,ra=v(ta)`
    animation-delay: -0.3s;
`,ia=v(ta)`
    animation-delay: -0.15s;
`,oa=v.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${jt.Neutral[8](e)};
                    border: 1px solid ${jt.Primary(e)};

                    span {
                        color: ${jt.Primary(e)};
                    }
                `;case"light":return b`
                    background-color: ${jt.Neutral[8](e)};
                    border: 1px solid ${jt.Neutral[5](e)};

                    span {
                        color: ${jt.Primary(e)};
                    }
                `;case"disabled":return b`
                    background-color: ${jt.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${jt.Neutral[3](e)};
                    }
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${jt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${jt.Secondary};
                        }
                    }
                `;default:return b`
                    background-color: ${jt.Primary(e)};
                    border: 1px solid transparent;

                    ${Rt.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${jt.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    span {
                        ${No("H5","semibold")}
                    }

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    span {
                        ${No("H4","semibold")}
                    }

                    ${Rt.mobileS} {
                        height: auto;
                    }
                `}
`,aa=v((({color:e,className:r,size:i=18})=>t(Ko,{className:r,$size:i,$color:e,children:[n(ta,{id:"inner1",$size:i-2,$borderWidth:2}),n(na,{id:"inner2",$size:i-2,$borderWidth:2}),n(ra,{id:"inner3",$size:i-2,$borderWidth:2}),n(ia,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=jt.Primary(e);break;case"disabled":t=jt.Neutral[3](e);break;default:t=jt.Neutral[8](e)}return b`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,sa={Default:i.forwardRef(((e,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return t(oa,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&n(aa,{...c}),n("span",{children:i})]})})),Small:i.forwardRef(((e,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=e,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return t(oa,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&n(aa,{...c,size:16}),n("span",{children:i})]})}))},la=v.li`
    width: 100%;
`,ca=v(sa.Default)`
    width: 100%;
    height: unset;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            height: 1.25rem;
            width: 1.25rem;
            margin-top: 0.25rem;
        }

        span {
            ${Vo("XSmall","regular")}
            font-size: 0.75rem !important;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    :hover,
    :focus {
        span {
            div {
                background-color: ${jt.Accent.Light[5]};
                color: ${jt.Primary} !important;
            }

            span {
                ${Vo("XSmall","semibold")}
                color: ${jt.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&b`
            span {
                div {
                    background-color: ${jt.Accent.Light[5]};
                }

                span {
                    ${Vo("XSmall","semibold")}
                    color: ${jt.Primary};
                }
            }
        `}
`,ua=v.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,da=v(Go.XSmall)``,ha=p({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),pa=v.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`,fa=v.div`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${jt.Neutral[5]};
`;var ga=function(e,t){return ga=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ga(e,t)};var ma=function(){return ma=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ma.apply(this,arguments)};var ya="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var va=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ba="object"==typeof ya&&ya&&ya.Object===Object&&ya,wa="object"==typeof self&&self&&self.Object===Object&&self,Sa=ba||wa||Function("return this")(),_a=Sa,Fa=function(){return _a.Date.now()},$a=/\s/;var xa=function(e){for(var t=e.length;t--&&$a.test(e.charAt(t)););return t},ka=/^\s+/;var Ba=function(e){return e?e.slice(0,xa(e)+1).replace(ka,""):e},Oa=Sa.Symbol,Ca=Oa,Ia=Object.prototype,Ea=Ia.hasOwnProperty,Pa=Ia.toString,Aa=Ca?Ca.toStringTag:void 0;var Da=function(e){var t=Ea.call(e,Aa),n=e[Aa];try{e[Aa]=void 0;var r=!0}catch(e){}var i=Pa.call(e);return r&&(t?e[Aa]=n:delete e[Aa]),i},Ha=Object.prototype.toString;var za=Da,ja=function(e){return Ha.call(e)},Ma=Oa?Oa.toStringTag:void 0;var Ta=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ma&&Ma in Object(e)?za(e):ja(e)},Ra=function(e){return null!=e&&"object"==typeof e};var Va=Ba,Na=va,Wa=function(e){return"symbol"==typeof e||Ra(e)&&"[object Symbol]"==Ta(e)},La=/^[-+]0x[0-9a-f]+$/i,qa=/^0b[01]+$/i,Ua=/^0o[0-7]+$/i,Qa=parseInt;var Ga=va,Xa=Fa,Za=function(e){if("number"==typeof e)return e;if(Wa(e))return NaN;if(Na(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Na(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Va(e);var n=qa.test(e);return n||Ua.test(e)?Qa(e.slice(2),n?2:8):La.test(e)?NaN:+e},Ya=Math.max,Ja=Math.min;var Ka=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=Xa();if(f(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Ja(n,o-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?p(e):(r=i=void 0,a)}function y(){var e=Xa(),n=f(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Za(t)||0,Ga(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Ya(Za(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(Xa())},y},es=Ka,ts=va;var ns=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ts(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),es(e,t,{leading:r,maxWait:t,trailing:i})},rs=function(e,t,n,r){switch(t){case"debounce":return Ka(e,n,r);case"throttle":return ns(e,n,r);default:return e}},is=function(e){return"function"==typeof e},os=function(){return"undefined"==typeof window},as=function(e){return e instanceof Element||e instanceof HTMLDocument},ss=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&is(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!os()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(os())return null;if(t)return document.querySelector(t);if(r&&as(r))return r;if(n.targetRef&&as(n.targetRef.current))return n.targetRef.current;var i=_(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ss(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!os()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return is(t)?"renderProp":is(r)?"childFunction":g(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=m(),n.observableElement=null,os()||(n.resizeHandler=rs(n.createResizeHandler,i,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ga(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){os()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return f(e,c)}return f(e,l);case"childArray":return(e=i).map((function(e){return!!e&&f(e,l)}));default:return r.createElement(a,null)}}}(y);var ls=os()?o:a;var cs,us={};Object.defineProperty(us,"__esModule",{value:!0});var ds=e;const hs=e=>ds.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:ds.jsx("path",{d:"M17.7279 14.2091C17.5059 14.4311 17.2492 14.5421 16.9579 14.5421C16.6659 14.5421 16.4089 14.4311 16.1869 14.2091L10.1659 8.18812L4.12389 14.2301C3.91589 14.4381 3.66589 14.5421 3.37389 14.5421C3.08256 14.5421 2.82589 14.4311 2.60389 14.2091C2.39523 14.0005 2.29089 13.7468 2.29089 13.4481C2.29089 13.1495 2.39523 12.8961 2.60389 12.6881L9.54089 5.75012C9.63823 5.65346 9.73889 5.58412 9.84289 5.54212C9.94689 5.50079 10.0546 5.48012 10.1659 5.48012C10.2772 5.48012 10.3849 5.50079 10.4889 5.54212C10.5929 5.58412 10.6936 5.65346 10.7909 5.75012L17.7489 12.7091C17.9716 12.9311 18.0759 13.1845 18.0619 13.4691C18.0479 13.7538 17.9366 14.0005 17.7279 14.2091Z",fill:"currentColor"})});hs.displayName="ChevronUpIcon",cs=us.ChevronUpIcon=hs;const ps=v(Oo.li)``,fs=v(sa.Default)`
    justify-content: flex-start;
    width: 100%;
    height: unset;
    padding: 0.75rem 1rem;
    border-radius: 8px;

    span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${Vo("H5","semibold")}
        font-size: 1rem !important;
        color: ${jt.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${jt.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&b`
                    color: ${jt.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&b`
            background-color: ${jt.Accent.Light[4]};
        `}
`,gs=v(Oo.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,ms=v.div`
    align-self: center;
    padding-left: 0.5rem;
`,ys=v(cs)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${jt.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,vs=v.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,bs=v(Oo.ul)``,ws=v.li``,Ss=v(sa.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${Vo("H5","regular")}
        font-size: 1rem !important;
        color: ${jt.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${jt.Accent.Light[5]};
        span {
            ${Vo("H5","semibold")}
            color: ${jt.Primary} !important;
        }
    }
`,_s=Object.assign((({fixed:e=!0,children:r,...i})=>{const a=l(null),[c,u]=s(void 0),[d,p]=s(void 0),[f,g]=s(void 0),[m,y]=s(!1),v=h((()=>({currentItem:c,selectedItem:d,previouslySelectedItemId:f,setCurrentItem:u,setSelectedItem:p,setPreviouslySelectedItemId:g})),[c,d,f,u,p,g]),b=io({width:m?240:0,borderRightWidth:m?1:0,borderTopWidth:m?1:0,borderBottomWidth:m?1:0,borderLeftWidth:0});return((e,t,n="window",r)=>{const i=l();o((()=>{i.current=t}),[t]),o((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])})("click",(e=>{a.current&&!a.current.contains(e.target)&&(p({itemId:f||(d?d.itemId:void 0),content:void 0}),g(void 0),u(void 0))}),"window",!0),o((()=>{y(d&&!!d.content||c&&!!c.content)}),[c,d]),n(ha.Provider,{value:v,children:t(Co,{$fixed:e,...i,ref:a,onMouseLeave:()=>{u(void 0)},children:[n(Eo,{children:r}),n(Ao,{style:b,$showDrawer:m,"data-testid":"sidenav-drawer",children:c&&c.content||d&&d.content}),n(Po,{})]})})}),{Group:({separator:e,children:r,...i})=>t(pa,{...i,children:[r,e&&n(fa,{"data-testid":"divider"})]}),Item:({children:e,icon:r,title:i,onClick:a,...s})=>{const l=s.id||i.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:u,selectedItem:h,setCurrentItem:p,setPreviouslySelectedItemId:f,setSelectedItem:g}=d(ha);o((()=>{s.selected&&g({itemId:l,content:void 0})}),[s.selected]);return n(la,{children:t(ca,{styleType:"link",type:"button",onClick:()=>{f((()=>{if(e&&h)return u||h.itemId})()),p({itemId:l,content:e}),g({itemId:l,content:e}),a&&!e&&a(l)},onMouseEnter:()=>{p({itemId:l,content:e})},...s,$highlight:h&&h.itemId===l||c&&c.itemId===l,children:[n(ua,{children:r}),n(da,{children:i})]})})},DrawerItem:({id:e,title:r,onClick:i,children:o,...a})=>{const[c,u]=s(!0),[h,p]=s(!1),{currentItem:f,setSelectedItem:g,setPreviouslySelectedItemId:m,setCurrentItem:y}=d(ha),v=io({from:{opacity:0},to:{opacity:1}}),b=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,a=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,p=e.targetRef,f=e.observerOptions,g=e.onResize,m=l(n),y=l(null),v=null!=p?p:y,b=l(),w=s({width:void 0,height:void 0}),S=w[0],_=w[1];return ls((function(){if(!os()){var e=ss(g,_,u,h);b.current=rs((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!os()&&e({width:r,height:i}),m.current=!1}))}),r,o,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,o,a,u,h,g,f,v.current]),ma({ref:v},S)}(),w=b.ref,S=io({height:o&&c?b.height:0});return t(ps,{onMouseEnter:()=>{p(!0)},onMouseLeave:()=>{p(!1)},...a,style:v,children:[t(fs,{styleType:"link",type:"button",onClick:()=>{o?u(!c):(g({itemId:f.itemId,content:void 0}),y(void 0),m(void 0),i&&i(e))},$highlight:h&&c,$noChildren:!o,children:[n(vs,{children:r}),o&&n(ms,{children:n(ys,{"aria-hidden":!0,$expanded:c})})]}),n(gs,{style:S,children:n(bs,{ref:w,children:o})})]})},DrawerSubitem:({id:e,title:t,onClick:r,...i})=>{const{currentItem:o,setSelectedItem:a,setCurrentItem:s,setPreviouslySelectedItemId:l}=d(ha);return n(ws,{...i,children:n(Ss,{styleType:"link",type:"button",onClick:()=>{r&&r(e),a({itemId:o.itemId,content:void 0}),s(void 0),l(void 0)},children:t})})}});export{_s as Sidenav};
//# sourceMappingURL=index.js.map
