import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as g,useMemo as m}from"react";import{ArrowRightIcon as y,ChevronDownIcon as b}from"@lifesg/react-icons";import v,{css as $,keyframes as w}from"styled-components";import{ChevronDownIcon as S}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";import{findDOMNode as x,unstable_batchedUpdates as B}from"react-dom";import{ExternalIcon as k}from"@lifesg/react-icons/external";import{CircleIcon as D}from"@lifesg/react-icons/circle";import{CircleDotIcon as O}from"@lifesg/react-icons/circle-dot";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{SquareIcon as M}from"@lifesg/react-icons/square";import{SquareTickFillIcon as H}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as E}from"@lifesg/react-icons/tick";import{ArrowRightIcon as A}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as C}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as P}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as I}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as z}from"@lifesg/react-icons/tick-circle-fill";function T(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function R(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N=Array.isArray,L="object"==typeof j&&j&&j.Object===Object&&j,V="object"==typeof self&&self&&self.Object===Object&&self,W=L||V||Function("return this")(),Y=W.Symbol,U=Y,q=Object.prototype,J=q.hasOwnProperty,Q=q.toString,Z=U?U.toStringTag:void 0;var G=function(e){var t=J.call(e,Z),n=e[Z];try{e[Z]=void 0;var r=!0}catch(e){}var i=Q.call(e);return r&&(t?e[Z]=n:delete e[Z]),i},X=Object.prototype.toString;var K=G,ee=function(e){return X.call(e)},te=Y?Y.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":te&&te in Object(e)?K(e):ee(e)};var re=ne,ie=function(e){return null!=e&&"object"==typeof e};var ae=function(e){return"symbol"==typeof e||ie(e)&&"[object Symbol]"==re(e)},oe=N,se=ae,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/;var ue=function(e,t){if(oe(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!se(e))||(ce.test(e)||!le.test(e)||null!=t&&e in Object(t))};var de=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},he=ne,fe=de;var pe,ge=function(e){if(!fe(e))return!1;var t=he(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=W["__core-js_shared__"],ye=(pe=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var be=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var $e=ge,we=be,Se=de,Fe=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=/^\[object .+?Constructor\]$/,Be=Function.prototype,ke=Object.prototype,De=Be.toString,Oe=ke.hasOwnProperty,_e=RegExp("^"+De.call(Oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e){return!(!Se(e)||we(e))&&($e(e)?_e:xe).test(Fe(e))},He=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var n=He(e,t);return Me(n)?n:void 0},Ae=Ee(Object,"create"),Ce=Ae;var Pe=function(){this.__data__=Ce?Ce(null):{},this.size=0};var Ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ze=Ae,Te=Object.prototype.hasOwnProperty;var je=function(e){var t=this.__data__;if(ze){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Te.call(t,e)?t[e]:void 0},Re=Ae,Ne=Object.prototype.hasOwnProperty;var Le=Ae;var Ve=Pe,We=Ie,Ye=je,Ue=function(e){var t=this.__data__;return Re?void 0!==t[e]:Ne.call(t,e)},qe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Le&&void 0===t?"__lodash_hash_undefined__":t,this};function Je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Je.prototype.clear=Ve,Je.prototype.delete=We,Je.prototype.get=Ye,Je.prototype.has=Ue,Je.prototype.set=qe;var Qe=Je;var Ze=function(){this.__data__=[],this.size=0};var Ge=function(e,t){return e===t||e!=e&&t!=t};var Xe=function(e,t){for(var n=e.length;n--;)if(Ge(e[n][0],t))return n;return-1},Ke=Xe,et=Array.prototype.splice;var tt=Xe;var nt=Xe;var rt=Xe;var it=Ze,at=function(e){var t=this.__data__,n=Ke(t,e);return!(n<0)&&(n==t.length-1?t.pop():et.call(t,n,1),--this.size,!0)},ot=function(e){var t=this.__data__,n=tt(t,e);return n<0?void 0:t[n][1]},st=function(e){return nt(this.__data__,e)>-1},lt=function(e,t){var n=this.__data__,r=rt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ct(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ct.prototype.clear=it,ct.prototype.delete=at,ct.prototype.get=ot,ct.prototype.has=st,ct.prototype.set=lt;var ut=ct,dt=Ee(W,"Map"),ht=Qe,ft=ut,pt=dt;var gt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var n=e.__data__;return gt(t)?n["string"==typeof t?"string":"hash"]:n.map},yt=mt;var bt=mt;var vt=mt;var $t=mt;var wt=function(){this.size=0,this.__data__={hash:new ht,map:new(pt||ft),string:new ht}},St=function(e){var t=yt(this,e).delete(e);return this.size-=t?1:0,t},Ft=function(e){return bt(this,e).get(e)},xt=function(e){return vt(this,e).has(e)},Bt=function(e,t){var n=$t(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function kt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}kt.prototype.clear=wt,kt.prototype.delete=St,kt.prototype.get=Ft,kt.prototype.has=xt,kt.prototype.set=Bt;var Dt=kt;function Ot(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ot.Cache||Dt),n}Ot.Cache=Dt;var _t=Ot;var Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ht=/\\(\\)?/g,Et=function(e){var t=_t(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Mt,(function(e,n,r,i){t.push(r?i.replace(Ht,"$1"):n||e)})),t}));var At=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ct=N,Pt=ae,It=Y?Y.prototype:void 0,zt=It?It.toString:void 0;var Tt=function e(t){if("string"==typeof t)return t;if(Ct(t))return At(t,e)+"";if(Pt(t))return zt?zt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},jt=Tt;var Rt=N,Nt=ue,Lt=Et,Vt=function(e){return null==e?"":jt(e)};var Wt=ae;var Yt=function(e,t){return Rt(e)?e:Nt(e,t)?[e]:Lt(Vt(e))},Ut=function(e){if("string"==typeof e||Wt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var qt=function(e,t){for(var n=0,r=(t=Yt(t,e)).length;null!=e&&n<r;)e=e[Ut(t[n++])];return n&&n==r?e:void 0};var Jt=R((function(e,t,n){var r=null==e?void 0:qt(e,t);return void 0===r?n:r}));const Qt=(e,t,n)=>t?Jt(n,t)||Jt(e,t):n||e,Zt=(e,t)=>{const n=t||e.defaultValue;return Jt(e.collections,n)};var Gt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Gt||(Gt={}));const Xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Kt=e=>t=>{const n=t.theme,r=Zt(Xt,n[Gt.colorScheme]);return n.options&&n.options.color?Qt(r,e,n.options.color):Qt(r,e)},en={Brand:{1:Kt("Brand.1"),2:Kt("Brand.2"),3:Kt("Brand.3"),4:Kt("Brand.4"),5:Kt("Brand.5"),6:Kt("Brand.6")},Primary:Kt("Primary"),PrimaryDark:Kt("PrimaryDark"),Secondary:Kt("Secondary"),Accent:{Light:{1:Kt("Accent.Light.1"),2:Kt("Accent.Light.2"),3:Kt("Accent.Light.3"),4:Kt("Accent.Light.4"),5:Kt("Accent.Light.5"),6:Kt("Accent.Light.6")},Dark:{1:Kt("Accent.Dark.1"),2:Kt("Accent.Dark.2"),3:Kt("Accent.Dark.3")}},Neutral:{1:Kt("Neutral.1"),2:Kt("Neutral.2"),3:Kt("Neutral.3"),4:Kt("Neutral.4"),5:Kt("Neutral.5"),6:Kt("Neutral.6"),7:Kt("Neutral.7"),8:Kt("Neutral.8")},Validation:{Green:{Text:Kt("Validation.Green.Text"),Icon:Kt("Validation.Green.Icon"),Border:Kt("Validation.Green.Border"),Background:Kt("Validation.Green.Background")},Orange:{Text:Kt("Validation.Orange.Text"),Icon:Kt("Validation.Orange.Icon"),Border:Kt("Validation.Orange.Border"),Background:Kt("Validation.Orange.Background"),Badge:Kt("Validation.Orange.Badge")},Red:{Text:Kt("Validation.Red.Text"),Icon:Kt("Validation.Red.Icon"),Border:Kt("Validation.Red.Border"),Background:Kt("Validation.Red.Background")},Blue:{Text:Kt("Validation.Blue.Text"),Icon:Kt("Validation.Blue.Icon"),Border:Kt("Validation.Blue.Border"),Background:Kt("Validation.Blue.Background")}},Shadow:{Accent:Kt("Shadow.Accent"),Red:Kt("Shadow.Red"),Elevation:Kt("Shadow.Elevation")}},tn=v.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return $`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `}}
`,nn=v.div`
    width: 100%; // Force next flex item to break to next line
`,rn=v.div`
    display: flex;
    flex: 1;
    align-items: center;
`,an=v(y)`
    color: ${en.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,on=v.div`
    position: absolute;
    background: ${e=>e.$error?en.Validation.Red.Border(e):en.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return $`
                    opacity: 1;
                `;case"end":return $`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return $`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return $`
                display: none;
            `}}
`,sn=({children:n,currentActive:r,error:i,className:a,wrap:o})=>{const[s,l]=n;return e(tn,Object.assign({className:a,$wrap:o},{children:[t(rn,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(an,{}),o&&t(nn,{}),t(rn,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(on,{"data-id":"range-container-indicator",$position:r,$error:i,$wrap:o})]}))};var ln=function(e,t){return ln=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ln(e,t)};var cn=function(){return cn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},cn.apply(this,arguments)};var un="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var dn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},hn="object"==typeof un&&un&&un.Object===Object&&un,fn="object"==typeof self&&self&&self.Object===Object&&self,pn=hn||fn||Function("return this")(),gn=pn,mn=function(){return gn.Date.now()},yn=/\s/;var bn=function(e){for(var t=e.length;t--&&yn.test(e.charAt(t)););return t},vn=/^\s+/;var $n=function(e){return e?e.slice(0,bn(e)+1).replace(vn,""):e},wn=pn.Symbol,Sn=wn,Fn=Object.prototype,xn=Fn.hasOwnProperty,Bn=Fn.toString,kn=Sn?Sn.toStringTag:void 0;var Dn=function(e){var t=xn.call(e,kn),n=e[kn];try{e[kn]=void 0;var r=!0}catch(e){}var i=Bn.call(e);return r&&(t?e[kn]=n:delete e[kn]),i},On=Object.prototype.toString;var _n=Dn,Mn=function(e){return On.call(e)},Hn=wn?wn.toStringTag:void 0;var En=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Hn&&Hn in Object(e)?_n(e):Mn(e)},An=function(e){return null!=e&&"object"==typeof e};var Cn=$n,Pn=dn,In=function(e){return"symbol"==typeof e||An(e)&&"[object Symbol]"==En(e)},zn=/^[-+]0x[0-9a-f]+$/i,Tn=/^0b[01]+$/i,jn=/^0o[0-7]+$/i,Rn=parseInt;var Nn=dn,Ln=mn,Vn=function(e){if("number"==typeof e)return e;if(In(e))return NaN;if(Pn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Pn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Cn(e);var n=Tn.test(e);return n||jn.test(e)?Rn(e.slice(2),n?2:8):zn.test(e)?NaN:+e},Wn=Math.max,Yn=Math.min;var Un=function(e,t,n){var r,i,a,o,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function g(){var e=Ln();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Yn(n,a-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,o)}function y(){var e=Ln(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Vn(t)||0,Nn(n)&&(u=!!n.leading,a=(d="maxWait"in n)?Wn(Vn(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(Ln())},y},qn=Un,Jn=dn;var Qn=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Jn(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),qn(e,t,{leading:r,maxWait:t,trailing:i})},Zn=function(e,t,n,r){switch(t){case"debounce":return Un(e,n,r);case"throttle":return Qn(e,n,r);default:return e}},Gn=function(e){return"function"==typeof e},Xn=function(){return"undefined"==typeof window},Kn=function(e){return e instanceof Element||e instanceof HTMLDocument},er=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&Gn(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Xn()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Xn())return null;if(t)return document.querySelector(t);if(r&&Kn(r))return r;if(n.targetRef&&Kn(n.targetRef.current))return n.targetRef.current;var i=x(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=er(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Xn()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Gn(t)?"renderProp":Gn(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,Xn()||(n.resizeHandler=Zn(n.createResizeHandler,i,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ln(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Xn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(o,null)}}}(u);var tr=Xn()?d:h;function nr(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=a(n),y=a(null),b=null!=f?f:y,v=a(),$=o({width:void 0,height:void 0}),w=$[0],S=$[1];return tr((function(){if(!Xn()){var e=er(g,S,u,h);v.current=Zn((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Xn()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,u,h,g,p,b.current]),cn({ref:b},w)}var rr=Object.defineProperty,ir={};((e,t)=>{for(var n in t)rr(e,n,{get:t[n],enumerable:!0})})(ir,{assign:()=>zr,colors:()=>Cr,createStringInterpolator:()=>Mr,skipAnimation:()=>Pr,to:()=>Hr,willAdvance:()=>Ir});var ar=wr(),or=e=>yr(e,ar),sr=wr();or.write=e=>yr(e,sr);var lr=wr();or.onStart=e=>yr(e,lr);var cr=wr();or.onFrame=e=>yr(e,cr);var ur=wr();or.onFinish=e=>yr(e,ur);var dr=[];or.setTimeout=(e,t)=>{const n=or.now()+t,r=()=>{const e=dr.findIndex((e=>e.cancel==r));~e&&dr.splice(e,1),gr-=~e?1:0},i={time:n,handler:e,cancel:r};return dr.splice(hr(n),0,i),gr+=1,br(),i};var hr=e=>~(~dr.findIndex((t=>t.time>e))||~dr.length);or.cancel=e=>{lr.delete(e),cr.delete(e),ur.delete(e),ar.delete(e),sr.delete(e)},or.sync=e=>{mr=!0,or.batchedUpdates(e),mr=!1},or.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,or.onStart(n)}return r.handler=e,r.cancel=()=>{lr.delete(n),t=null},r};var fr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};or.use=e=>fr=e,or.now="undefined"!=typeof performance?()=>performance.now():Date.now,or.batchedUpdates=e=>e(),or.catch=console.error,or.frameLoop="always",or.advance=()=>{"demand"!==or.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):$r()};var pr=-1,gr=0,mr=!1;function yr(e,t){mr?(t.delete(e),e(0)):(t.add(e),br())}function br(){pr<0&&(pr=0,"demand"!==or.frameLoop&&fr(vr))}function vr(){~pr&&(fr(vr),or.batchedUpdates($r))}function $r(){const e=pr;pr=or.now();const t=hr(pr);t&&(Sr(dr.splice(0,t),(e=>e.handler())),gr-=t),gr?(lr.flush(),ar.flush(e?Math.min(64,pr-e):16.667),cr.flush(),sr.flush(),ur.flush()):pr=-1}function wr(){let e=new Set,t=e;return{add(n){gr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(gr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,gr-=t.size,Sr(t,(t=>t(n)&&e.add(t))),gr+=e.size,t=e)}}}function Sr(e,t){e.forEach((e=>{try{t(e)}catch(e){or.catch(e)}}))}function Fr(){}var xr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Br(e,t){if(xr.arr(e)){if(!xr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var kr=(e,t)=>e.forEach(t);function Dr(e,t,n){if(xr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Or=e=>xr.und(e)?[]:xr.arr(e)?e:[e];function _r(e,t){if(e.size){const n=Array.from(e);e.clear(),kr(n,t)}}var Mr,Hr,Er=(e,...t)=>_r(e,(e=>e(...t))),Ar=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Cr=null,Pr=!1,Ir=Fr,zr=e=>{e.to&&(Hr=e.to),e.now&&(or.now=e.now),void 0!==e.colors&&(Cr=e.colors),null!=e.skipAnimation&&(Pr=e.skipAnimation),e.createStringInterpolator&&(Mr=e.createStringInterpolator),e.requestAnimationFrame&&or.use(e.requestAnimationFrame),e.batchedUpdates&&(or.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ir=e.willAdvance),e.frameLoop&&(or.frameLoop=e.frameLoop)},Tr=new Set,jr=[],Rr=[],Nr=0,Lr={get idle(){return!Tr.size&&!jr.length},start(e){Nr>e.priority?(Tr.add(e),or.onStart(Vr)):(Wr(e),or(Ur))},advance:Ur,sort(e){if(Nr)or.onFrame((()=>Lr.sort(e)));else{const t=jr.indexOf(e);~t&&(jr.splice(t,1),Yr(e))}},clear(){jr=[],Tr.clear()}};function Vr(){Tr.forEach(Wr),Tr.clear(),or(Ur)}function Wr(e){jr.includes(e)||Yr(e)}function Yr(e){jr.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(jr,(t=>t.priority>e.priority)),0,e)}function Ur(e){const t=Rr;for(let n=0;n<jr.length;n++){const r=jr[n];Nr=r.priority,r.idle||(Ir(r),r.advance(e),r.idle||t.push(r))}return Nr=0,(Rr=jr).length=0,(jr=t).length>0}var qr="[-+]?\\d*\\.?\\d+",Jr=qr+"%";function Qr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Zr=new RegExp("rgb"+Qr(qr,qr,qr)),Gr=new RegExp("rgba"+Qr(qr,qr,qr,qr)),Xr=new RegExp("hsl"+Qr(qr,Jr,Jr)),Kr=new RegExp("hsla"+Qr(qr,Jr,Jr,qr)),ei=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ti=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ni=/^#([0-9a-fA-F]{6})$/,ri=/^#([0-9a-fA-F]{8})$/;function ii(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ai(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=ii(i,r,e+1/3),o=ii(i,r,e),s=ii(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function oi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function si(e){return(parseFloat(e)%360+360)%360/360}function li(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function ci(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function ui(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ni.exec(e))?parseInt(t[1]+"ff",16)>>>0:Cr&&void 0!==Cr[e]?Cr[e]:(t=Zr.exec(e))?(oi(t[1])<<24|oi(t[2])<<16|oi(t[3])<<8|255)>>>0:(t=Gr.exec(e))?(oi(t[1])<<24|oi(t[2])<<16|oi(t[3])<<8|li(t[4]))>>>0:(t=ei.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ri.exec(e))?parseInt(t[1],16)>>>0:(t=ti.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Xr.exec(e))?(255|ai(si(t[1]),ci(t[2]),ci(t[3])))>>>0:(t=Kr.exec(e))?(ai(si(t[1]),ci(t[2]),ci(t[3]))|li(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var di=(e,t,n)=>{if(xr.fun(e))return e;if(xr.arr(e))return di({range:e,output:t,extrapolate:n});if(xr.str(e.output[0]))return Mr(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var hi=1.70158,fi=1.525*hi,pi=hi+1,gi=2*Math.PI/3,mi=2*Math.PI/4.5,yi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},bi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>pi*e*e*e-hi*e*e,easeOutBack:e=>1+pi*Math.pow(e-1,3)+hi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-fi)/2:(Math.pow(2*e-2,2)*((fi+1)*(2*e-2)+fi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*gi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*gi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*mi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*mi)/2+1,easeInBounce:e=>1-yi(1-e),easeOutBounce:yi,easeInOutBounce:e=>e<.5?(1-yi(1-2*e))/2:(1+yi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},vi=Symbol.for("FluidValue.get"),$i=Symbol.for("FluidValue.observers"),wi=e=>Boolean(e&&e[vi]),Si=e=>e&&e[vi]?e[vi]():e,Fi=e=>e[$i]||null;function xi(e,t){const n=e[$i];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Bi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");ki(this,e)}},ki=(e,t)=>Mi(e,vi,t);function Di(e,t){if(e[vi]){let n=e[$i];n||Mi(e,$i,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Oi(e,t){const n=e[$i];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[$i]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var _i,Mi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Hi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ei=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ai=new RegExp(`(${Hi.source})(%|[a-z]+)`,"i"),Ci=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Pi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Ii=e=>{const[t,n]=zi(e);if(!t||Ar())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Pi.test(n)?Ii(n):n||e},zi=e=>{const t=Pi.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Ti=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,ji=e=>{_i||(_i=Cr?new RegExp(`(${Object.keys(Cr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Si(e).replace(Pi,Ii).replace(Ei,ui).replace(_i,ui))),n=t.map((e=>e.match(Hi).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>di({...e,output:t})));return e=>{const n=!Ai.test(t[0])&&t.find((e=>Ai.test(e)))?.replace(Hi,"");let i=0;return t[0].replace(Hi,(()=>`${r[i++](e)}${n||""}`)).replace(Ci,Ti)}},Ri="react-spring: ",Ni=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ri}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Li=Ni(console.warn);var Vi=Ni(console.warn);function Wi(e){return xr.str(e)&&("#"==e[0]||/\d/.test(e)||!Ar()&&Pi.test(e)||e in(Cr||{}))}var Yi=Ar()?d:h,Ui=()=>{const e=a(!1);return Yi((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function qi(){const e=o()[1],t=Ui();return()=>{t.current&&e(Math.random())}}var Ji=e=>d(e,Qi),Qi=[];function Zi(e){const t=a();return d((()=>{t.current=e})),t.current}var Gi=Symbol.for("Animated:node"),Xi=e=>e&&e[Gi],Ki=(e,t)=>{return n=e,r=Gi,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ea=e=>e&&e[Gi]&&e[Gi].getPayload(),ta=class{constructor(){Ki(this,this)}getPayload(){return this.payload||[]}},na=class extends ta{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,xr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new na(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return xr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,xr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},ra=class extends na{constructor(e){super(0),this._string=null,this._toString=di({output:[e,e]})}static create(e){return new ra(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(xr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=di({output:[this.getValue(),e]})),this._value=0,super.reset()}},ia={dependencies:null},aa=class extends ta{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Dr(this.source,((n,r)=>{var i;(i=n)&&i[Gi]===i?t[r]=n.getValue(e):wi(n)?t[r]=Si(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&kr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Dr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ia.dependencies&&wi(e)&&ia.dependencies.add(e);const t=ea(e);t&&kr(t,(e=>this.add(e)))}},oa=class extends aa{constructor(e){super(e)}static create(e){return new oa(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(sa)),!0)}};function sa(e){return(Wi(e)?ra:na).create(e)}function la(e){const t=Xi(e);return t?t.constructor:xr.arr(e)?oa:Wi(e)?ra:na}var ca=(e,t)=>{const n=!xr.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,o)=>{const s=a(null),l=n&&p((e=>{s.current=function(e,t){e&&(xr.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,u]=function(e,t){const n=new Set;ia.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new aa(e),ia.dependencies=null,[e,n]}(i,t),h=qi(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new ua(f,u),m=a();Yi((()=>(m.current=g,kr(u,(e=>Di(e,g))),()=>{m.current&&(kr(m.current.deps,(e=>Oi(e,m.current))),or.cancel(m.current.update))}))),d(f,[]),Ji((()=>()=>{const e=m.current;kr(e.deps,(t=>Oi(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,{...y,ref:l})}))},ua=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&or.write(this.update)}};var da=Symbol.for("AnimatedComponent"),ha=e=>xr.str(e)?e:e&&xr.str(e.displayName)?e.displayName:xr.fun(e)&&e.name||null;function fa(e,...t){return xr.fun(e)?e(...t):e}var pa=(e,t)=>!0===e||!!(t&&e&&(xr.fun(e)?e(t):Or(e).includes(t))),ga=(e,t)=>xr.obj(e)?t&&e[t]:e,ma=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ya=e=>e,ba=(e,t=ya)=>{let n=va;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);xr.und(n)||(r[i]=n)}return r},va=["config","onProps","onStart","onChange","onPause","onResume","onRest"],$a={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function wa(e){const t=function(e){const t={};let n=0;if(Dr(e,((e,r)=>{$a[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Dr(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Sa(e){return e=Si(e),xr.arr(e)?e.map(Sa):Wi(e)?ir.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Fa(e){return xr.fun(e)||xr.arr(e)&&xr.obj(e[0])}var xa={tension:170,friction:26,mass:1,damping:1,easing:bi.linear,clamp:!1},Ba=class{constructor(){this.velocity=0,Object.assign(this,xa)}};function ka(e,t){if(xr.und(t.decay)){const n=!xr.und(t.tension)||!xr.und(t.friction);!n&&xr.und(t.frequency)&&xr.und(t.damping)&&xr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Da=[],Oa=class{constructor(){this.changed=!1,this.values=Da,this.toValues=null,this.fromValues=Da,this.config=new Ba,this.immediate=!1}};function _a(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,u=pa(n.cancel??r?.cancel,t);if(u)f();else{xr.und(n.pause)||(i.paused=pa(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||pa(e,t)),l=fa(n.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-or.now()}function h(){l>0&&!ir.skipAnimation?(i.delayed=!0,c=or.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{a.start({...n,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var Ma=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Aa(e.get()):t.every((e=>e.noop))?Ha(e.get()):Ea(e.get(),t.every((e=>e.finished))),Ha=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ea=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Aa=e=>({value:e,cancelled:!0,finished:!1});function Ca(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ba(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&Aa(r)||i!==n.asyncId&&Ea(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new Ia,o=new za;return(async()=>{if(ir.skipAnimation)throw Pa(n),o.result=Ea(r,!1),d(o),o;f(a);const s=xr.obj(e)?{...e}:{...t,to:e};s.parentId=i,Dr(c,((e,t)=>{xr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(ir.skipAnimation)return Pa(n),Ea(r,!1);try{let t;t=xr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=Ea(r.get(),!0,!1)}catch(e){if(e instanceof Ia)g=e.result;else{if(!(e instanceof za))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return xr.fun(o)&&or.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function Pa(e,t){_r(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Ia=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},za=class extends Error{constructor(){super("SkipAnimationSignal")}},Ta=e=>e instanceof Ra,ja=1,Ra=class extends Bi{constructor(){super(...arguments),this.id=ja++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Xi(this);return e&&e.getValue()}to(...e){return ir.to(this,e)}interpolate(...e){return Li(`${Ri}The "interpolate" function is deprecated in v9 (use "to" instead)`),ir.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){xi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Lr.sort(this),xi(this,{type:"priority",parent:this,priority:e})}},Na=Symbol.for("SpringPhase"),La=e=>(1&e[Na])>0,Va=e=>(2&e[Na])>0,Wa=e=>(4&e[Na])>0,Ya=(e,t)=>t?e[Na]|=3:e[Na]&=-3,Ua=(e,t)=>t?e[Na]|=4:e[Na]&=-5,qa=class extends Ra{constructor(e,t){if(super(),this.animation=new Oa,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!xr.und(e)||!xr.und(t)){const n=xr.obj(e)?{...e}:{...t,from:e};xr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Va(this)||this._state.asyncTo)||Wa(this)}get goal(){return Si(this.animation.to)}get velocity(){const e=Xi(this);return e instanceof na?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return La(this)}get isAnimating(){return Va(this)}get isPaused(){return Wa(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=ea(r.to);!o&&wi(r.to)&&(i=Or(Si(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==ra?1:o?o[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=xr.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(xr.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,r=a.clamp?0:a.bounce,l=!xr.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(o=-o*r,d=c));o+=(1e-6*-a.tension*(d-c)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+a.easing(r)*(c-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,a.round)&&(n=!0)}));const s=Xi(this),l=s.getValue();if(t){const e=Si(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return or.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Va(this)){const{to:e,config:t}=this.animation;or.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return xr.und(e)?(n=this.queue||[],this.queue=[]):n=[xr.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ma(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Pa(this._state,e&&this._lastCallId),or.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=xr.obj(n)?n[t]:n,(null==n||Fa(n))&&(n=void 0),r=xr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return La(this)||(e.reverse&&([n,r]=[r,n]),r=Si(r),xr.und(r)?Xi(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ba(e,((e,t)=>/^on/.test(t)?ga(e,n):e))),eo(this,e,"onProps"),to(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return _a(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{Wa(this)||(Ua(this,!0),Er(a.pauseQueue),to(this,"onPause",Ea(this,Ja(this,this.animation.to)),this))},resume:()=>{Wa(this)&&(Ua(this,!1),Va(this)&&this._resume(),Er(a.resumeQueue),to(this,"onResume",Ea(this,Ja(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Qa(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Aa(this));const r=!xr.und(e.to),i=!xr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Aa(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!xr.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Br(d,c);h&&(s.from=d),d=Si(d);const f=!Br(u,l);f&&this._focus(u);const p=Fa(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(ka(n={...n},t),t={...n,...t}),ka(e,t),Object.assign(e,t);for(const t in xa)null==e[t]&&(e[t]=xa[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;xr.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(g,fa(t.config,a),t.config!==o.config?fa(o.config,a):void 0);let b=Xi(this);if(!b||xr.und(u))return n(Ea(this,!0));const v=xr.und(t.reset)?i&&!t.default:!xr.und(d)&&pa(t.reset,a),$=v?d:this.get(),w=Sa(u),S=xr.num(w)||xr.arr(w)||Wi(w),F=!p&&(!S||pa(o.immediate||t.immediate,a));if(f){const e=la(u);if(e!==b.constructor){if(!F)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const x=b.constructor;let B=wi(u),k=!1;if(!B){const e=v||!La(this)&&h;(f||e)&&(k=Br(Sa($),w),B=!k),(Br(s.immediate,F)||F)&&Br(g.decay,m)&&Br(g.velocity,y)||(B=!0)}if(k&&Va(this)&&(s.changed&&!v?B=!0:B||this._stop(l)),!p&&((B||wi(l))&&(s.values=b.getPayload(),s.toValues=wi(u)?null:x==ra?[1]:Or(w)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),B)){const{onRest:e}=s;kr(Ka,(e=>eo(this,t,e)));const r=Ea(this,Ja(this,l));Er(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&or.batchedUpdates((()=>{s.changed=!v,e?.(r,this),v?fa(o.onRest,r):s.onStart?.(r,this)}))}v&&this._set($),p?n(Ca(t.to,t,this._state,this)):B?this._start():Va(this)&&!f?this._pendingCalls.add(n):n(Ha($))}_focus(e){const t=this.animation;e!==t.to&&(Fi(this)&&this._detach(),t.to=e,Fi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;wi(t)&&(Di(t,this),Ta(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;wi(e)&&Oi(e,this)}_set(e,t=!0){const n=Si(e);if(!xr.und(n)){const e=Xi(this);if(!e||!Br(n,e.getValue())){const r=la(n);e&&e.constructor==r?e.setValue(n):Ki(this,r.create(n)),e&&or.batchedUpdates((()=>{this._onChange(n,t)}))}}return Xi(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,to(this,"onStart",Ea(this,Ja(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),fa(this.animation.onChange,e,this)),fa(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Xi(this).reset(Si(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Va(this)||(Ya(this,!0),Wa(this)||this._resume())}_resume(){ir.skipAnimation?this.finish():Lr.start(this)}_stop(e,t){if(Va(this)){Ya(this,!1);const n=this.animation;kr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),xi(this,{type:"idle",parent:this});const r=t?Aa(this.get()):Ea(this.get(),Ja(this,e??n.to));Er(this._pendingCalls,r),n.changed&&(n.changed=!1,to(this,"onRest",r,this))}}};function Ja(e,t){const n=Sa(t);return Br(Sa(e.get()),n)}function Qa(e,t=e.loop,n=e.to){const r=fa(t);if(r){const i=!0!==r&&wa(r),a=(i||e).reverse,o=!i||i.reset;return Za({...e,loop:t,default:!1,pause:void 0,to:!a||Fa(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Za(e){const{to:t,from:n}=e=wa(e),r=new Set;return xr.obj(t)&&Xa(t,r),xr.obj(n)&&Xa(n,r),e.keys=r.size?Array.from(r):null,e}function Ga(e){const t=Za(e);return xr.und(t.default)&&(t.default=ba(t)),t}function Xa(e,t){Dr(e,((e,n)=>null!=e&&t.add(n)))}var Ka=["onStart","onRest","onChange","onPause","onResume"];function eo(e,t,n){e.animation[n]=t[n]!==ma(t,n)?ga(t[n],e.key):void 0}function to(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var no=["onStart","onChange","onRest"],ro=1,io=class{constructor(e,t){this.id=ro++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];xr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Za(e)),this}start(e){let{queue:t}=this;return e?t=Or(e).map(Za):this.queue=[],this._flush?this._flush(this,t):(ho(this,t),ao(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;kr(Or(t),(t=>n[t].stop(!!e)))}else Pa(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(xr.und(e))this.start({pause:!0});else{const t=this.springs;kr(Or(e),(e=>t[e].pause()))}return this}resume(e){if(xr.und(e))this.start({pause:!1});else{const t=this.springs;kr(Or(e),(e=>t[e].resume()))}return this}each(e){Dr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,_r(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&_r(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,_r(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}or.onFrame(this._onFrame)}};function ao(e,t){return Promise.all(t.map((t=>oo(e,t)))).then((t=>Ma(e,t)))}async function oo(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=xr.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const u=xr.arr(i)||xr.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):kr(no,(n=>{const r=t[n];if(xr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Er(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===ma(t,"cancel");(u||f&&d.asyncId)&&h.push(_a(++e._lastAsyncId,{props:t,state:d,actions:{pause:Fr,resume:Fr,start(t,n){f?(Pa(d,e._lastAsyncId),n(Aa(e))):(t.onRest=s,n(Ca(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Ma(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=Qa(t,o,i);if(n)return ho(e,[n]),oo(e,n,!0)}return l&&or.batchedUpdates((()=>l(p,e,e.item))),p}function so(e,t){const n={...e.springs};return t&&kr(Or(t),(e=>{xr.und(e.keys)&&(e=Za(e)),xr.obj(e.to)||(e={...e,to:void 0}),uo(n,e,(e=>co(e)))})),lo(e,n),n}function lo(e,t){Dr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Di(t,e))}))}function co(e,t){const n=new qa;return n.key=e,t&&Di(n,t),n}function uo(e,t,n){t.keys&&kr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ho(e,t){kr(t,(t=>{uo(e.springs,t,(t=>co(t,e)))}))}var fo,po,go=({children:e,...t})=>{const n=g(mo),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return d((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=mo;return r.createElement(l,{value:t},e)},mo=(fo=go,po={},Object.assign(fo,r.createContext(po)),fo.Provider._context=fo,fo.Consumer._context=fo,fo);go.Provider=mo.Provider,go.Consumer=mo.Consumer;var yo=()=>{const e=[],t=function(t){Vi(`${Ri}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return kr(e,((e,i)=>{if(xr.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return kr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return kr(e,(e=>e.resume(...arguments))),this},t.set=function(t){kr(e,((e,n)=>{const r=xr.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return kr(e,((e,r)=>{if(xr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return kr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return kr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return xr.fun(e)?e(n,t):e};return t._getProps=n,t};function bo(e,t){const n=xr.fun(e),[[r],i]=function(e,t,n){const r=xr.fun(t)&&t;r&&!n&&(n=[]);const i=m((()=>r||3==arguments.length?yo():void 0),[]),o=a(0),s=qi(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const n=so(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ao(e,t):new Promise((r=>{lo(e,n),l.queue.push((()=>{r(ao(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=Zi(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new io(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=Ga(n))}}m((()=>{kr(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),m((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>so(e,u[t]))),p=g(go),y=Zi(p),b=p!==y&&function(e){for(const t in e)return!0;return!1}(p);Yi((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],kr(e,(e=>e()))),kr(c.current,((e,t)=>{i?.add(e),b&&e.start({default:p});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Ji((()=>()=>{kr(l.ctrls,(e=>e.stop(!0)))}));const v=f.map((e=>({...e})));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var vo=class extends Ra{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=di(...t);const n=this._get(),r=la(n);Ki(this,r.create(n))}advance(e){const t=this._get();Br(t,this.get())||(Xi(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&wo(this._active)&&So(this)}_get(){const e=xr.arr(this.source)?this.source.map(Si):Or(Si(this.source));return this.calc(...e)}_start(){this.idle&&!wo(this._active)&&(this.idle=!1,kr(ea(this),(e=>{e.done=!1})),ir.skipAnimation?(or.batchedUpdates((()=>this.advance())),So(this)):Lr.start(this))}_attach(){let e=1;kr(Or(this.source),(t=>{wi(t)&&Di(t,this),Ta(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){kr(Or(this.source),(e=>{wi(e)&&Oi(e,this)})),this._active.clear(),So(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Or(this.source).reduce(((e,t)=>Math.max(e,(Ta(t)?t.priority:0)+1)),0))}};function $o(e){return!1!==e.idle}function wo(e){return!e.size||Array.from(e).every($o)}function So(e){e.idle||(e.idle=!0,kr(ea(e),(e=>{e.done=!0})),xi(e,{type:"idle",parent:e}))}ir.assign({createStringInterpolator:ji,to:(e,t)=>new vo(e,t)});var Fo=/^--/;function xo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Fo.test(e)||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}var Bo={};var ko={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Do=["Webkit","Ms","Moz","O"];ko=Object.keys(ko).reduce(((e,t)=>(Do.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ko);var Oo=/^(matrix|translate|scale|rotate|skew)/,_o=/^(translate)/,Mo=/^(rotate|skew)/,Ho=(e,t)=>xr.num(e)&&0!==e?e+t:e,Eo=(e,t)=>xr.arr(e)?e.every((e=>Eo(e,t))):xr.num(e)?e===t:parseFloat(e)===t,Ao=class extends aa{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>Ho(e,"px"))).join(",")})`,Eo(e,0)]))),Dr(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Oo.test(t)){if(delete r[t],xr.und(e))return;const n=_o.test(t)?"px":Mo.test(t)?"deg":"";i.push(Or(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ho(i,n)})`,Eo(i,0)]:e=>[`${t}(${e.map((e=>Ho(e,n))).join(",")})`,Eo(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Co(i,a)),super(r)}},Co=class extends Bi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return kr(this.inputs,((n,r)=>{const i=Si(n[0]),[a,o]=this.transforms[r](xr.arr(i)?i:n.map(Si));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&kr(this.inputs,(e=>kr(e,(e=>wi(e)&&Di(e,this)))))}observerRemoved(e){0==e&&kr(this.inputs,(e=>kr(e,(e=>wi(e)&&Oi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),xi(this,e)}};ir.assign({batchedUpdates:B,createStringInterpolator:ji,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Po,Io,zo,To=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new aa(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=ha(e)||"Anonymous";return(e=xr.str(e)?a[e]||(a[e]=ca(e,i)):e[da]||(e[da]=ca(e,i))).displayName=`Animated(${t})`,e};return Dr(e,((t,n)=>{xr.arr(e)&&(n=ha(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Bo[t]||(Bo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=xo(t,r[t]);Fo.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Ao(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),jo=To.animated;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Po||(Po={})),function(e){e.AM="AM",e.PM="PM"}(Io||(Io={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Io.AM};if(!t)return n;try{if("24hr"===e){const r=Lo(t,e);n.minute=Po.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Io.AM,n.hour=0===i?"12":Po.padValue(i.toString())):(n.period=Io.PM,n.hour=12===i?i.toString():Po.padValue((i-12).toString()))}else{const r=Lo(t,e);n.hour=Po.padValue(r.hour),n.minute=Po.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Io.AM:Io.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Po.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Po.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Po.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Po.padValue(r.toString()):13===r?Po.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Io.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Po.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Lo(e,t),r=Po.padValue(n.hour);let i=`${r}:${Po.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(zo||(zo={}));const Ro=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},No=e=>{const t=parseInt(e);return t>=0&&t<=59},Lo=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!Ro(n[0],t)||!No(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Ro(n[0],t)||!No(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Vo={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Wo=e=>Object.keys(Vo).reduce(((t,n)=>{const r=Vo[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Yo=Wo("max-width"),Uo=(Wo("min-width"),v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),qo=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Jo=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||en.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${qo} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Qo=v(Jo)`
    animation-delay: -0.45s;
`,Zo=v(Jo)`
    animation-delay: -0.3s;
`,Go=v(Jo)`
    animation-delay: -0.15s;
`,Xo={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Ko={D1:{fontFamily:Xo.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Xo.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Xo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xo.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xo.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Xo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xo.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Xo.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Xo.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Xo.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Xo.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xo.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},es={D1:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xo.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Xo.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Xo.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Xo.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xo.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ts={collections:{base:Ko,oneservice:{D1:{fontFamily:Xo.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Xo.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Xo.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xo.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Xo.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Xo.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Xo.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Xo.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Xo.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Xo.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Xo.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Xo.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Xo.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:es},defaultValue:"base"},ns=e=>t=>{const n=t.theme,r=Zt(ts,n[Gt.textStyleScheme]);return n.options&&n.options.textStyle?Qt(r,e,n.options.textStyle):Qt(r,e)},rs={D1:{fontFamily:ns("D1.fontFamily"),fontSize:ns("D1.fontSize"),fontWeight:ns("D1.fontWeight"),lineHeight:ns("D1.lineHeight"),letterSpacing:ns("D1.letterSpacing")},D2:{fontFamily:ns("D2.fontFamily"),fontSize:ns("D2.fontSize"),fontWeight:ns("D2.fontWeight"),lineHeight:ns("D2.lineHeight"),letterSpacing:ns("D2.letterSpacing")},D3:{fontFamily:ns("D3.fontFamily"),fontSize:ns("D3.fontSize"),fontWeight:ns("D3.fontWeight"),lineHeight:ns("D3.lineHeight"),letterSpacing:ns("D3.letterSpacing")},D4:{fontFamily:ns("D4.fontFamily"),fontSize:ns("D4.fontSize"),fontWeight:ns("D4.fontWeight"),lineHeight:ns("D4.lineHeight"),letterSpacing:ns("D4.letterSpacing")},DBody:{fontFamily:ns("DBody.fontFamily"),fontSize:ns("DBody.fontSize"),fontWeight:ns("DBody.fontWeight"),lineHeight:ns("DBody.lineHeight"),letterSpacing:ns("DBody.letterSpacing")},H1:{fontFamily:ns("H1.fontFamily"),fontSize:ns("H1.fontSize"),fontWeight:ns("H1.fontWeight"),lineHeight:ns("H1.lineHeight"),letterSpacing:ns("H1.letterSpacing")},H2:{fontFamily:ns("H2.fontFamily"),fontSize:ns("H2.fontSize"),fontWeight:ns("H2.fontWeight"),lineHeight:ns("H2.lineHeight"),letterSpacing:ns("H2.letterSpacing")},H3:{fontFamily:ns("H3.fontFamily"),fontSize:ns("H3.fontSize"),fontWeight:ns("H3.fontWeight"),lineHeight:ns("H3.lineHeight"),letterSpacing:ns("H3.letterSpacing")},H4:{fontFamily:ns("H4.fontFamily"),fontSize:ns("H4.fontSize"),fontWeight:ns("H4.fontWeight"),lineHeight:ns("H4.lineHeight"),letterSpacing:ns("H4.letterSpacing")},H5:{fontFamily:ns("H5.fontFamily"),fontSize:ns("H5.fontSize"),fontWeight:ns("H5.fontWeight"),lineHeight:ns("H5.lineHeight"),letterSpacing:ns("H5.letterSpacing")},H6:{fontFamily:ns("H6.fontFamily"),fontSize:ns("H6.fontSize"),fontWeight:ns("H6.fontWeight"),lineHeight:ns("H6.lineHeight"),letterSpacing:ns("H6.letterSpacing")},Body:{fontFamily:ns("Body.fontFamily"),fontSize:ns("Body.fontSize"),fontWeight:ns("Body.fontWeight"),lineHeight:ns("Body.lineHeight"),letterSpacing:ns("Body.letterSpacing")},BodySmall:{fontFamily:ns("BodySmall.fontFamily"),fontSize:ns("BodySmall.fontSize"),fontWeight:ns("BodySmall.fontWeight"),lineHeight:ns("BodySmall.lineHeight"),letterSpacing:ns("BodySmall.letterSpacing")},XSmall:{fontFamily:ns("XSmall.fontFamily"),fontSize:ns("XSmall.fontSize"),fontWeight:ns("XSmall.fontWeight"),lineHeight:ns("XSmall.lineHeight"),letterSpacing:ns("XSmall.letterSpacing")}},is=[Xo.OpenSans,Xo.PlusJakartaSans],as=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},os=(e,t)=>n=>{var r;const i=rs[e].fontFamily(n),a=rs[e].fontWeight(n),o=is.find((e=>Object.values(e).includes(i)));return o?$`
                font-family: ${as(o,t)||as(o,a)||i};
                font-weight: normal !important;
            `:$`
            font-family: ${i};
            font-weight: ${null!==(r=ss(t)||a)&&void 0!==r?r:"normal"};
        `},ss=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ls=e=>{if(e>0)return $`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},cs=os,us=(e,t,n=!1)=>r=>{const i=rs[e],a=i.fontSize(r);return $`
            ${os(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${$`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},ds=(e=!1,t=!1,n=void 0)=>t?$`
            display: block;
            ${ls(n)}
        `:e?$`
            display: inline;
        `:$`
            display: block;
            ${ls(n)}
        `;var hs;!function(e){e.D1=v.h1`
        ${e=>$`
                ${us("D1",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>$`
                ${us("D2",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>$`
                ${us("D3",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>$`
                ${us("D4",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>$`
                ${us("DBody",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>$`
                ${us("H1",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>$`
                ${us("H2",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>$`
                ${us("H3",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>$`
                ${us("H4",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>$`
                ${us("H5",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>$`
                ${us("H6",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>$`
                ${us("Body",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>$`
                ${us("BodySmall",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>$`
                ${us("XSmall",e.weight,e.paragraph)}
                color: ${en.Neutral[1]};
                ${ds(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>gs(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>gs(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(hs||(hs={}));const fs=v.a`
    ${e=>$`
            ${us(e.textStyle,e.weight)}
            color: ${en.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${en.Secondary};

                svg {
                    color: ${en.Secondary};
                }
            }
        `}
`,ps=v(k)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,gs=n=>{var{external:r=!1,children:i}=n,a=T(n,["external","children"]);return e(fs,Object.assign({},a,{children:[i,r&&t(ps,{})]}))};var ms;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ms||(ms={}));const ys={collections:{base:{InputBoxShadow:$`
        inset 0 0 4px 0px ${en.Shadow.Accent}
    `,InputErrorBoxShadow:$`
        inset 0 0 4px 0px ${en.Shadow.Red}
    `,ElevationBoxShadow:$`
      0px 2px 8px ${en.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:$`
        inset 0 0 3px 0px ${en.Shadow.Accent}
    `,InputErrorBoxShadow:$`
        inset 0 0 3px 0px ${en.Shadow.Red}
    `,ElevationBoxShadow:$`
      0px 2px 8px ${en.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},bs=e=>t=>{var n;const r=t.theme,i=Zt(ys,r[Gt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Qt(i,e,r.options.designToken):Qt(i,e)},vs={InputBoxShadow:bs("InputBoxShadow"),InputErrorBoxShadow:bs("InputErrorBoxShadow"),ElevationBoxShadow:bs("ElevationBoxShadow"),Table:{Header:bs("Table.Header"),Cell:{Primary:bs("Table.Cell.Primary"),Secondary:bs("Table.Cell.Secondary"),Selected:bs("Table.Cell.Selected"),Hover:bs("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:bs("Button.Danger.BackgroundColor"),Hover:bs("Button.Danger.Hover"),Primary:bs("Button.Danger.Primary"),Border:bs("Button.Danger.Border")}}},$s=v.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return $`
                    background-color: ${en.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?vs.Button.Danger.Border:en.Primary};

                    color: ${e.$buttonIsDanger?vs.Button.Danger.Primary:en.Primary};
                `;case"light":return $`
                    background-color: ${en.Neutral[8]};
                    border: 1px solid ${en.Neutral[5]};

                    color: ${e.$buttonIsDanger?vs.Button.Danger.Primary:en.Primary};
                `;case"disabled":return $`
                    background-color: ${en.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${en.Neutral[3]};
                `;case"link":return $`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?vs.Button.Danger.Primary:en.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?vs.Button.Danger.Hover:en.Secondary};
                    }
                `;default:return $`
                    background-color: ${e.$buttonIsDanger?vs.Button.Danger.BackgroundColor:en.Primary};
                    border: 1px solid transparent;

                    ${Yo.mobileL} {
                        width: 100%;
                    }

                    color: ${en.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?$`
                    height: 2.5rem;
                    ${us("H5","semibold")}

                    ${Yo.mobileS} {
                        height: auto;
                    }
                `:$`
                    height: 3rem;
                    ${us("H4","semibold")}

                    ${Yo.mobileS} {
                        height: auto;
                    }
                `}
`,ws=v((({color:n,className:r,size:i=18})=>e(Uo,Object.assign({className:r,$size:i,$color:n},{children:[t(Jo,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(Qo,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(Zo,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(Go,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?vs.Button.Danger.Primary:en.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=en.Neutral[3](e);break;default:t=en.Neutral[8](e)}return $`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Ss={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=T(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e($s,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(ws,Object.assign({},u)),t("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=T(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e($s,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(ws,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},Fs=v.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?$`
                    color: ${en.Primary};
                `:$`
                    color: ${en.Neutral[4]};
                `};
    }
`,xs=({type:e,active:n=!1,disabled:r,className:i})=>{let a;switch(e){case"checkbox":a=t(n?H:M,{});break;case"radio":a=t(n?O:D,{});break;case"tick":a=t(E,{});break;case"cross":a=t(_,{});break;default:a=null}return t(Fs,Object.assign({className:i,$active:n,disabled:r},{children:a}))};var Bs={exports:{}};Bs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=u||0;return d?new Date(Date.UTC(g,m,p,y,b,v,$+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,b,v,$)):new Date(g,m,p,y,b,v,$)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var ks,Ds,Os=R(Bs.exports),_s={exports:{}},Ms=R(_s.exports=(ks={year:0,month:1,day:2,hour:3,minute:4,second:5},Ds={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Ds[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ds[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=ks[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Hs={exports:{}};Hs.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var w="$isDayjsObject",S=function(e){return e instanceof k||!(!e||!e[w])},F=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},x=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},B=b;B.l=F,B.i=S,B.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(g<v?g+7:g)-v;return f(r?y-$:y+(6-$),m);case s:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=B.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=B.p(u),g=function(e){var t=x(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return B.s(a%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return B.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return B.s(o,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=this,m=B.p(h),y=x(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return B.m(g,y)};switch(m){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case l:p=(v-b)/6048e5;break;case s:p=(v-b)/864e5;break;case o:p=v/n;break;case a:p=v/t;break;case i:p=v/e;break;default:p=v}return f?p:B.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=F(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return x.prototype=D,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,k,x),e.$i=!0),x},x.locale=F,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=$[v],x.Ls=$,x.p={},x}();var Es=R(Hs.exports),As={exports:{}};As.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var Cs=R(As.exports),Ps={exports:{}};Ps.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Is=R(Ps.exports),zs={exports:{}};zs.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ts,js=R(zs.exports);Es.extend(Cs),Es.extend(Is),Es.extend(js),Es.extend(Os),Es.extend(Ms),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Es(t).startOf("week");return Rs(n).map((e=>Ns(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ns(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Es(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Es(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Es(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Es(r):void 0,i?Es(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Ts||(Ts={}));const Rs=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ns=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ls=[1,3,5,7,8,10,12],Vs=[4,6,9,11];var Ws,Ys,Us;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":Ls.includes(a)?Math.min(i,31).toString():Vs.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Es(e,n);return Es(t,n).diff(r,"minute")},e.toDayjs=e=>e?Es(e):Es(),e.addMinutesToTime=(e,t,n="HH:mm")=>Es(e,n).add(t,"minutes").format(n)}(Ws||(Ws={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Es(e).isBefore(r,"day"))||!(!i||!Es(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Es(e).isValid())return e}return""}}(Ys||(Ys={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Us||(Us={}));const qs=(e,t,n="window",r)=>{const i=a();d((()=>{i.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}),[e,n])},Js=e=>{const{textSize:t}=e||{};return $`
        // Text styling
        ${t&&us(t,"regular")}

        strong {
            font-family: ${Xo.OpenSans.Semibold};
            ${t&&us(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${Xo.OpenSans.Semibold};
            ${t&&us(t,"semibold")}
            color: ${en.Primary};
            text-decoration: none;

            svg {
                color: ${en.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${en.Secondary};

                svg {
                    color: ${en.Secondary};
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
    `},Qs=v.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=en.Validation.Red.Background(e),n=en.Validation.Red.Border(e);break;case"success":t=en.Validation.Green.Background(e),n=en.Validation.Green.Border(e);break;case"warning":default:t=en.Validation.Orange.Background(e),n=en.Validation.Orange.Border(e);break;case"info":t=en.Validation.Blue.Background(e),n=en.Validation.Blue.Border(e);break;case"description":t=en.Neutral[7](e),n=en.Neutral[4](e)}return $`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${en.Neutral[1]};
    ${e=>"small"===e.$sizeType?Js({textSize:"H6"}):Js({textSize:"BodySmall"})}
`,Zs=v.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&$`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=en.Validation.Red.Icon(e);break;case"success":t=en.Validation.Green.Icon(e);break;case"warning":default:t=en.Validation.Orange.Icon(e);break;case"info":t=en.Validation.Blue.Icon(e);break;case"description":t=en.Neutral[4](e)}return $`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Gs=v(hs.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?$`
                ${us("H6","semibold")}
                margin-top: 0.25rem;
            `:$`
                ${us("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${en.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${en.Primary};
    }
`,Xs=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ks=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,el=v.button`
    ${e=>"small"===e.$sizeType?$`
                ${us("H6","semibold")}
            `:$`
                ${us("H5","semibold")}
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

    color: ${en.Primary};
`,tl=v(b)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,nl=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,rl=(v.ol`
    ${e=>nl(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Yo.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>us(e.size,"regular")}
        position: relative;
        color: ${en.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return $`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return $`
                counter-reset: list ${t?n+1:n-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,v.ul`
    ${e=>nl(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>us(e.size,"regular")}
        color: ${en.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),il=e=>{var{size:n="Body",children:r}=e,i=T(e,["size","children"]);return t(rl,Object.assign({size:n},i,{children:r}))},al=v.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;

    // Content positioning style
    ${e=>{if(!e.$indicator)return $`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return $`
                min-width: unset;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?$`
                        border-color: ${en.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${en.Shadow.Red};
                        }
                    `:e.$disabled?$`
                        border-color: transparent;
                    `:$`
                        border-color: transparent;

                        :hover {
                            background: ${en.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?$`
                        border-color: ${en.Neutral[5]};
                    `:e.$disabled&&e.$selected?$`
                        border-color: ${en.Neutral[4]};
                    `:e.$error?$`
                        border-color: ${en.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${en.Shadow.Red};
                        }
                    `:e.$selected?$`
                        border-color: ${en.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${en.Shadow.Accent};
                        }
                    `:$`
                        background: ${en.Neutral[8]};
                        border-color: ${en.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${en.Shadow.Accent};
                            border-color: ${en.Accent.Light[1]};
                        }
                    `}
`,ol=v.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,sl=v.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,ll=v.label`
    ${e=>e.$selected&&!e.$indicator?$`
                ${us("H4","semibold")}
            `:$`
                ${us("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${Yo.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${Yo.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${en.Neutral[1]};

    ${e=>e.$disabled?$`
                color: ${en.Neutral[3]};
            `:e.$selected?$`
                color: ${en.Primary};
            `:void 0}
`,cl=v.div`
    ${us("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${cs("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?$`
                color: ${en.Neutral[3]};
            `:e.$selected?$`
                color: ${en.Primary};
            `:$`
                color: ${en.Neutral[1]};
            `}
`,ul=v.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?$`
                        background: ${en.Neutral[8]};
                    `:e.$disabled?$``:$`
                        :hover {
                            background: ${en.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?$`
                        background: ${en.Neutral[6]};
                    `:e.$error?$`
                        background: ${en.Neutral[8]};
                    `:e.$selected?$`
                        background: ${en.Accent.Light[5]};
                    `:$`
                        background: ${en.Neutral[8]};
                    `}
`,dl=v.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,hl=v.button`
    color: ${e=>e.$disabled?en.Neutral[3]:en.Validation.Red.Icon};
    white-space: nowrap;
    ${us("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,fl=v.button`
    color: ${e=>e.disabled?en.Neutral[3]:en.Primary};
    ${us("H4","semibold")}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`,pl=v.div`
    width: 100%;
    color: ${e=>e.$disabled?en.Neutral[3]:en.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,gl=v((n=>{var{type:r,className:i,children:a,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:f}=n,p=T(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,m]=o(!1),[y,b]=o(!1),{height:v,ref:$}=nr();d((()=>{w()}),[f,v]);const w=()=>{m(!f),b(S())},S=()=>!!f&&v>f;return e(Qs,Object.assign({className:i,$type:r,$sizeType:c,"data-testid":p["data-testid"]},{children:[u&&t(Zs,Object.assign({$sizeType:c,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return t(z,{});case"warning":return t(P,{});case"error":return t(C,{});case"info":case"description":return t(I,{});default:return null}})()})),e(Xs,{children:[e(Ks,Object.assign({$maxCollapsedHeight:S()?f:void 0,$showMore:g,$hasActionLink:!!s},{children:[t("div",Object.assign({ref:$},{children:a})),s&&e(Gs,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},s,{children:[s.children,l||t(A,{})]}))]})),y&&e(el,Object.assign({$sizeType:c,$type:r,type:"button",onClick:()=>m(!g)},{children:["Show ",g?"less":"more",t(tl,{$expanded:g})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,ml=v.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Js({textSize:"BodySmall"})}

    ${e=>e.$disabled?$`
                color: ${en.Neutral[3]};
            `:e.$selected?$`
                color: ${en.Primary};
            `:$`
                color: ${en.Neutral[1]};
            `}
`,yl=v(hs.BodySmall)`
    color: ${e=>e.$disabled?en.Neutral[3]:en.Validation.Red.Text};
`,bl=v(il)`
    li {
        color: ${e=>e.$disabled?en.Neutral[3]:en.Validation.Red.Text};
    }
`,vl=v.button`
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

        ${({$highlight:e})=>e&&$`
                background-color: ${en.Neutral[7]};
            `}
    }
`,$l=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=T(e,["children","focusHighlight","focusOutline","type"]);return t(vl,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),wl=$`
    border: 1px solid ${en.Accent.Light[1]};
    box-shadow: ${vs.InputBoxShadow};
`,Sl=$`
    border: 1px solid ${en.Accent.Light[1]};
    box-shadow: none;
`,Fl=$`
    border: 1px solid ${en.Neutral[5]};
    box-shadow: none;
`,xl=$`
    border: 1px solid ${en.Validation.Red.Border};
    box-shadow: ${vs.InputErrorBoxShadow};
`,Bl=v.div`
    border: 1px solid ${en.Neutral[5]};
    border-radius: 4px;
    background: ${en.Neutral[8]};

    :focus-within {
        ${wl}
    }
    ${e=>e.$focused&&wl}

    ${e=>e.$readOnly?$`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Sl}
                }
                ${e.$focused&&Sl}
            `:e.$disabled?$`
                background: ${en.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Fl}
                }
                ${e.$focused&&Fl}
            `:e.$error?$`
                border: 1px solid ${en.Validation.Red.Border};

                :focus-within {
                    ${xl}
                }
                ${e.$focused&&xl}
            `:void 0}
`,kl=v(Bl)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Dl=v.input`
    ${e=>us("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${en.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${en.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`;v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${en.Primary};
    }
`;const Ol=v(jo.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${en.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Yo.mobileS} {
        max-width: 100%;
    }
`,_l=v.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Ml=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Yo.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Hl=v.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Yo.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,El=v.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Yo.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Al=v.div`
    display: flex;
    gap: 0.5rem;

    ${Yo.tablet} {
        flex-direction: column;
    }

    ${Yo.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Cl=v.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Yo.mobileS} {
        width: 6rem;
    }
`,Pl=v($l)`
    width: 5rem;
    padding: 1rem 0;
    color: ${en.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${en.Primary};
    }
`,Il=v(hs.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Yo.tablet} {
        margin: 0;
    }

    ${Yo.mobileS} {
        margin: 0 0.25rem;
    }
`,zl=v(Dl)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${en.Neutral[5]};
    background: ${en.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${en.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${en.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${Yo.mobileS} {
        width: 100%;
    }
`,Tl=v((({type:r="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:u,subLabel:h,disabled:f,error:p,name:g,id:y,className:b,compositeSection:v,removable:$,onRemove:w,"data-testid":x,onChange:B,useContentWidth:k})=>{const{collapsible:D=!0,errors:O,children:_,initialExpanded:M}=v||{},[H,E]=o(s),[A,C]=o(M),P=m((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[I]=o(Us.generate()),z=y?`${y}`:`tg-${I}`,T=a();d((()=>{E(s)}),[s]),d((()=>{H&&C(null==M||M)}),[H]);const j=e=>{if(!f){if(B)return void B(e);switch(r){case"checkbox":E((e=>!e));break;case"radio":case"yes":case"no":H||E(!0)}}},R=()=>{f||C(!A)},N=()=>{f||!w||w()},L=()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(xs,{type:e,active:H,disabled:f})},V=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(cl,Object.assign({"data-id":"toggle-sublabel",$disabled:f,$selected:H},{children:e}))},W=()=>{const n=!A&&!P;return D&&e(fl,Object.assign({$paddingTopRequired:n,disabled:f,onClick:R,"data-testid":A?"collapse-button":"expand-button"},{children:[A?"Show less":"Show more",t(A?F:S,{"aria-hidden":!0})]}))},Y=r=>e(n,{children:[t(yl,Object.assign({weight:"semibold",$disabled:f},{children:"Error"})),t(bl,Object.assign({$disabled:f},{children:null==r?void 0:r.map(((e,n)=>t("li",Object.assign({id:`${z}-error-list-item-${n}`},{children:t(yl,Object.assign({weight:"semibold",$disabled:f},{children:e}))}),n)))}))]});return e(al,Object.assign({$selected:H,$disabled:f,className:b,$styleType:l,$error:p,$indicator:i,$useContentWidth:k,id:y,"data-testid":x},{children:[e(ul,Object.assign({id:`${z}-header-container`,$disabled:f,$error:p,$selected:H,$indicator:i,$styleType:l},{children:[e(dl,Object.assign({$addPadding:$},{children:[t(ol,{ref:T,name:g,id:`${z}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:j,checked:H}),i&&L(),e(sl,{children:[t(ll,Object.assign({htmlFor:`${z}-input`,$selected:H,$indicator:i,$disabled:f,"data-testid":`${z}-toggle-label`,$maxLines:u},{children:c})),h&&V()]})]})),$&&t(hl,Object.assign({type:"button",$disabled:f,onClick:N,id:`${z}-remove-button`},{children:"Remove"}))]})),_&&e("div",{children:[(!D||A)&&t(ml,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!D,$disabled:f},{children:_})),D&&!A&&P&&t(pl,Object.assign({$disabled:f,onClick:R,id:`${z}-error-alert`},{children:t(gl,Object.assign({type:f?"description":"error",className:b,showIcon:!0},{children:Array.isArray(O)?Y(O):O}))})),W()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,jl=v(Ss.Small)`
    width: 7rem;

    ${Yo.mobileL} {
        flex: 1;
    }

    ${Yo.mobileS} {
        width: 100%;
    }
`;var Rl,Nl,Ll;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Rl||(Rl={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Nl||(Nl={})),function(e){e.AM="am",e.PM="pm"}(Ll||(Ll={}));const Vl=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{const u=zo.getTimeValues(s,r),[h,f]=o(u.hour),[g,m]=o(u.minute),[y,b]=o(u.period),v=a(),$=a(),w=nr();d((()=>{if(i&&v.current&&v.current.focus(),i){const{hour:e,minute:t,period:n}=zo.getTimeValues(s,r);f(e),m(t),b(n)}}),[i,r,s]),d((()=>{const e=v.current,t=$.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},B=p((e=>{switch(e.currentTarget.name){case Rl.MINUTE_UP:m(zo.updateMinutes(g,"add"));break;case Rl.MINUTE_DOWN:m(zo.updateMinutes(g,"minus"));break;case Rl.HOUR_UP:f(zo.updateHours(h,"add"));break;case Rl.HOUR_DOWN:f(zo.updateHours(h,"minus"))}}),[h,g]),k=e=>{e.target.select()},D=e=>{const t=e.target.value;switch(e.target.name){case Nl.HOUR:t.length<=2&&f(t);break;case Nl.MINUTE:t.length<=2&&m(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Nl.HOUR:{const n=t>23||t<0?u.hour:zo.convertHourTo12HourFormat(e.target.value);f(n);break}case Nl.MINUTE:{const n=t>59||t<0?u.minute:e.target.value;m(Po.padValue(n));break}}},_=e=>{switch(e.target.name){case Ll.AM:b(Io.AM);break;case Ll.PM:b(Io.PM)}},M=e=>n?`${n}-${e}`:e,H=bo({height:i?w.height+32:0});return t(Ol,Object.assign({"data-testid":"animated-dropdown-wrapper",style:H},{children:e(_l,Object.assign({ref:w.ref,"data-testid":M("timepicker-dropdown"),inert:i?void 0:""},{children:[e(Ml,{children:[e(El,{children:[e(Cl,{children:[t(Pl,Object.assign({"aria-label":"increase hour",name:Rl.HOUR_UP,tabIndex:-1,onClick:B,"data-testid":M("hour-increment-button")},{children:t(F,{})})),t(zl,{"aria-label":"hour",type:"number",name:Nl.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:k,onChange:D,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Pl,Object.assign({"aria-label":"decrease hour",name:Rl.HOUR_DOWN,tabIndex:-1,onClick:B,"data-testid":M("hour-decrement-button")},{children:t(S,{})}))]}),t(Il,{children:":"}),e(Cl,{children:[t(Pl,Object.assign({"aria-label":"increase minute",name:Rl.MINUTE_UP,tabIndex:-1,onClick:B,"data-testid":M("minute-increment-button")},{children:t(F,{})})),t(zl,{"aria-label":"minute",type:"number",name:Nl.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:$,value:g,onChange:D,onBlur:O,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Pl,Object.assign({"aria-label":"decrease minute",name:Rl.MINUTE_DOWN,tabIndex:-1,onClick:B,"data-testid":M("minute-decrement-button")},{children:t(S,{})}))]})]}),e(Al,{children:[t(Tl,Object.assign({checked:y===Io.AM,name:Ll.AM,type:"radio",onChange:_,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(Tl,Object.assign({checked:y===Io.PM,name:Ll.PM,type:"radio",onChange:_,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Hl,{children:[t(jl,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":M("cancel-button")},{children:"Cancel"})),t(jl,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?zo.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))},Wl=v.div`
    position: relative;
`,Yl=v(kl)`
    height: 3rem;
    gap: 0.5rem;
`,Ul=v(Dl)`
    display: block;
    width: 100%;
    flex: 1;
`,ql=n=>{var{id:r,disabled:i=!1,error:s,value:l,format:c="24hr",readOnly:u,onChange:h,onFocus:f,onBlur:p}=n,g=T(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,y]=o(!1),[b,v]=o(!1),[$,w]=o(""),[S,F]=o(""),x=a();d((()=>{l&&(w(l.start),F(l.end))}),[]),qs("mousedown",(function(e){i||O(e)}),"document"),qs("keyup",(function(e){if("Tab"===e.code)O(e)}),"document");const B=()=>{D()},k=()=>{m||b||f&&f()},D=()=>{y(!1),v(!1),p&&p()},O=e=>{x&&!x.current.contains(e.target)&&(b||m)&&D()};return t(Wl,Object.assign({ref:x,id:r},g,{children:e(Yl,Object.assign({$disabled:i,$error:s,$readOnly:u},{children:[e(sn,Object.assign({error:s,currentActive:m?"start":b?"end":"none"},{children:[t(Ul,{onFocus:()=>{i||u||m||(v(!1),y(!0),k())},readOnly:!0,placeholder:"From",value:zo.formatDisplayValue($,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),t(Ul,{onFocus:()=>{i||u||b||(y(!1),v(!0),k())},readOnly:!0,placeholder:"To",value:zo.formatDisplayValue(S,c),disabled:i,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),t(Vl,{id:r,show:m,value:$,format:c,onCancel:B,onChange:e=>{y(!1),v(!0),w(e);h&&h({start:e,end:S})}}),t(Vl,{id:r,show:b,value:S,format:c,onCancel:B,onChange:e=>{v(!1),F(e);h&&h({start:$,end:e}),""==$?y(!0):p&&p()}})]}))}))};export{ql as TimeRangePicker};
//# sourceMappingURL=index.js.map
