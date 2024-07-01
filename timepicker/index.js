import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as g,useMemo as m}from"react";import y,{css as b,keyframes as v}from"styled-components";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as S}from"@lifesg/react-icons/chevron-up";import{findDOMNode as x,unstable_batchedUpdates as F}from"react-dom";import{CircleIcon as D}from"@lifesg/react-icons/circle";import{CircleDotIcon as k}from"@lifesg/react-icons/circle-dot";import{CrossIcon as B}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as O}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";import{ArrowRightIcon as E}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as H}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as C}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as I}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as T}from"@lifesg/react-icons";function P(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N=Array.isArray,R="object"==typeof z&&z&&z.Object===Object&&z,V="object"==typeof self&&self&&self.Object===Object&&self,L=R||V||Function("return this")(),W=L.Symbol,Y=W,U=Object.prototype,q=U.hasOwnProperty,Q=U.toString,Z=Y?Y.toStringTag:void 0;var G=function(e){var t=q.call(e,Z),r=e[Z];try{e[Z]=void 0;var n=!0}catch(e){}var i=Q.call(e);return n&&(t?e[Z]=r:delete e[Z]),i},X=Object.prototype.toString;var J=G,K=function(e){return X.call(e)},ee=W?W.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?J(e):K(e)};var re=te,ne=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==re(e)},ae=N,oe=ie,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var ce=function(e,t){if(ae(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!oe(e))||(le.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},de=te,he=ue;var fe,pe=function(e){if(!he(e))return!1;var t=de(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ge=L["__core-js_shared__"],me=(fe=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||""))?"Symbol(src)_1."+fe:"";var ye=function(e){return!!me&&me in e},be=Function.prototype.toString;var ve=pe,$e=ye,we=ue,Se=function(e){if(null!=e){try{return be.call(e)}catch(e){}try{return e+""}catch(e){}}return""},xe=/^\[object .+?Constructor\]$/,Fe=Function.prototype,De=Object.prototype,ke=Fe.toString,Be=De.hasOwnProperty,_e=RegExp("^"+ke.call(Be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Oe=function(e){return!(!we(e)||$e(e))&&(ve(e)?_e:xe).test(Se(e))},Me=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var r=Me(e,t);return Oe(r)?r:void 0},Ae=Ee(Object,"create"),He=Ae;var Ce=function(){this.__data__=He?He(null):{},this.size=0};var Ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Te=Ae,Pe=Object.prototype.hasOwnProperty;var ze=function(e){var t=this.__data__;if(Te){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Pe.call(t,e)?t[e]:void 0},je=Ae,Ne=Object.prototype.hasOwnProperty;var Re=Ae;var Ve=Ce,Le=Ie,We=ze,Ye=function(e){var t=this.__data__;return je?void 0!==t[e]:Ne.call(t,e)},Ue=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Re&&void 0===t?"__lodash_hash_undefined__":t,this};function qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}qe.prototype.clear=Ve,qe.prototype.delete=Le,qe.prototype.get=We,qe.prototype.has=Ye,qe.prototype.set=Ue;var Qe=qe;var Ze=function(){this.__data__=[],this.size=0};var Ge=function(e,t){return e===t||e!=e&&t!=t};var Xe=function(e,t){for(var r=e.length;r--;)if(Ge(e[r][0],t))return r;return-1},Je=Xe,Ke=Array.prototype.splice;var et=Xe;var tt=Xe;var rt=Xe;var nt=Ze,it=function(e){var t=this.__data__,r=Je(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ke.call(t,r,1),--this.size,!0)},at=function(e){var t=this.__data__,r=et(t,e);return r<0?void 0:t[r][1]},ot=function(e){return tt(this.__data__,e)>-1},st=function(e,t){var r=this.__data__,n=rt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lt.prototype.clear=nt,lt.prototype.delete=it,lt.prototype.get=at,lt.prototype.has=ot,lt.prototype.set=st;var ct=lt,ut=Ee(L,"Map"),dt=Qe,ht=ct,ft=ut;var pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var gt=function(e,t){var r=e.__data__;return pt(t)?r["string"==typeof t?"string":"hash"]:r.map},mt=gt;var yt=gt;var bt=gt;var vt=gt;var $t=function(){this.size=0,this.__data__={hash:new dt,map:new(ft||ht),string:new dt}},wt=function(e){var t=mt(this,e).delete(e);return this.size-=t?1:0,t},St=function(e){return yt(this,e).get(e)},xt=function(e){return bt(this,e).has(e)},Ft=function(e,t){var r=vt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Dt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Dt.prototype.clear=$t,Dt.prototype.delete=wt,Dt.prototype.get=St,Dt.prototype.has=xt,Dt.prototype.set=Ft;var kt=Dt;function Bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Bt.Cache||kt),r}Bt.Cache=kt;var _t=Bt;var Ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mt=/\\(\\)?/g,Et=function(e){var t=_t(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ot,(function(e,r,n,i){t.push(n?i.replace(Mt,"$1"):r||e)})),t}));var At=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ht=N,Ct=ie,It=W?W.prototype:void 0,Tt=It?It.toString:void 0;var Pt=function e(t){if("string"==typeof t)return t;if(Ht(t))return At(t,e)+"";if(Ct(t))return Tt?Tt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},zt=Pt;var jt=N,Nt=ce,Rt=Et,Vt=function(e){return null==e?"":zt(e)};var Lt=ie;var Wt=function(e,t){return jt(e)?e:Nt(e,t)?[e]:Rt(Vt(e))},Yt=function(e){if("string"==typeof e||Lt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ut=function(e,t){for(var r=0,n=(t=Wt(t,e)).length;null!=e&&r<n;)e=e[Yt(t[r++])];return r&&r==n?e:void 0};var qt=j((function(e,t,r){var n=null==e?void 0:Ut(e,t);return void 0===n?r:n}));const Qt=(e,t,r)=>t?qt(r,t)||qt(e,t):r||e,Zt=(e,t)=>{const r=t||e.defaultValue;return qt(e.collections,r)};var Gt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Gt||(Gt={}));const Xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jt=e=>t=>{const r=t.theme,n=Zt(Xt,r[Gt.colorScheme]);return r.options&&r.options.color?Qt(n,e,r.options.color):Qt(n,e)},Kt={Brand:{1:Jt("Brand.1"),2:Jt("Brand.2"),3:Jt("Brand.3"),4:Jt("Brand.4"),5:Jt("Brand.5"),6:Jt("Brand.6")},Primary:Jt("Primary"),PrimaryDark:Jt("PrimaryDark"),Secondary:Jt("Secondary"),Accent:{Light:{1:Jt("Accent.Light.1"),2:Jt("Accent.Light.2"),3:Jt("Accent.Light.3"),4:Jt("Accent.Light.4"),5:Jt("Accent.Light.5"),6:Jt("Accent.Light.6")},Dark:{1:Jt("Accent.Dark.1"),2:Jt("Accent.Dark.2"),3:Jt("Accent.Dark.3")}},Neutral:{1:Jt("Neutral.1"),2:Jt("Neutral.2"),3:Jt("Neutral.3"),4:Jt("Neutral.4"),5:Jt("Neutral.5"),6:Jt("Neutral.6"),7:Jt("Neutral.7"),8:Jt("Neutral.8")},Validation:{Green:{Text:Jt("Validation.Green.Text"),Icon:Jt("Validation.Green.Icon"),Border:Jt("Validation.Green.Border"),Background:Jt("Validation.Green.Background")},Orange:{Text:Jt("Validation.Orange.Text"),Icon:Jt("Validation.Orange.Icon"),Border:Jt("Validation.Orange.Border"),Background:Jt("Validation.Orange.Background"),Badge:Jt("Validation.Orange.Badge")},Red:{Text:Jt("Validation.Red.Text"),Icon:Jt("Validation.Red.Icon"),Border:Jt("Validation.Red.Border"),Background:Jt("Validation.Red.Background")},Blue:{Text:Jt("Validation.Blue.Text"),Icon:Jt("Validation.Blue.Icon"),Border:Jt("Validation.Blue.Border"),Background:Jt("Validation.Blue.Background")}},Shadow:{Accent:Jt("Shadow.Accent"),Red:Jt("Shadow.Red"),Elevation:Jt("Shadow.Elevation")}},er={collections:{base:{InputBoxShadow:b`
        inset 0 0 4px 0px ${Kt.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 4px 0px ${Kt.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${Kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:b`
        inset 0 0 3px 0px ${Kt.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 3px 0px ${Kt.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${Kt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},tr=e=>t=>{var r;const n=t.theme,i=Zt(er,n[Gt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Qt(i,e,n.options.designToken):Qt(i,e)},rr={InputBoxShadow:tr("InputBoxShadow"),InputErrorBoxShadow:tr("InputErrorBoxShadow"),ElevationBoxShadow:tr("ElevationBoxShadow"),Table:{Header:tr("Table.Header"),Cell:{Primary:tr("Table.Cell.Primary"),Secondary:tr("Table.Cell.Secondary"),Selected:tr("Table.Cell.Selected"),Hover:tr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:tr("Button.Danger.BackgroundColor"),Hover:tr("Button.Danger.Hover"),Primary:tr("Button.Danger.Primary"),Border:tr("Button.Danger.Border")}}},nr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ir={collections:{base:{D1:{fontFamily:nr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:nr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:nr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:nr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:nr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:nr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:nr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:nr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:nr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:nr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ar=e=>t=>{const r=t.theme,n=Zt(ir,r[Gt.textStyleScheme]);return r.options&&r.options.textStyle?Qt(n,e,r.options.textStyle):Qt(n,e)},or={D1:{fontFamily:ar("D1.fontFamily"),fontSize:ar("D1.fontSize"),fontWeight:ar("D1.fontWeight"),lineHeight:ar("D1.lineHeight"),letterSpacing:ar("D1.letterSpacing")},D2:{fontFamily:ar("D2.fontFamily"),fontSize:ar("D2.fontSize"),fontWeight:ar("D2.fontWeight"),lineHeight:ar("D2.lineHeight"),letterSpacing:ar("D2.letterSpacing")},D3:{fontFamily:ar("D3.fontFamily"),fontSize:ar("D3.fontSize"),fontWeight:ar("D3.fontWeight"),lineHeight:ar("D3.lineHeight"),letterSpacing:ar("D3.letterSpacing")},D4:{fontFamily:ar("D4.fontFamily"),fontSize:ar("D4.fontSize"),fontWeight:ar("D4.fontWeight"),lineHeight:ar("D4.lineHeight"),letterSpacing:ar("D4.letterSpacing")},DBody:{fontFamily:ar("DBody.fontFamily"),fontSize:ar("DBody.fontSize"),fontWeight:ar("DBody.fontWeight"),lineHeight:ar("DBody.lineHeight"),letterSpacing:ar("DBody.letterSpacing")},H1:{fontFamily:ar("H1.fontFamily"),fontSize:ar("H1.fontSize"),fontWeight:ar("H1.fontWeight"),lineHeight:ar("H1.lineHeight"),letterSpacing:ar("H1.letterSpacing")},H2:{fontFamily:ar("H2.fontFamily"),fontSize:ar("H2.fontSize"),fontWeight:ar("H2.fontWeight"),lineHeight:ar("H2.lineHeight"),letterSpacing:ar("H2.letterSpacing")},H3:{fontFamily:ar("H3.fontFamily"),fontSize:ar("H3.fontSize"),fontWeight:ar("H3.fontWeight"),lineHeight:ar("H3.lineHeight"),letterSpacing:ar("H3.letterSpacing")},H4:{fontFamily:ar("H4.fontFamily"),fontSize:ar("H4.fontSize"),fontWeight:ar("H4.fontWeight"),lineHeight:ar("H4.lineHeight"),letterSpacing:ar("H4.letterSpacing")},H5:{fontFamily:ar("H5.fontFamily"),fontSize:ar("H5.fontSize"),fontWeight:ar("H5.fontWeight"),lineHeight:ar("H5.lineHeight"),letterSpacing:ar("H5.letterSpacing")},H6:{fontFamily:ar("H6.fontFamily"),fontSize:ar("H6.fontSize"),fontWeight:ar("H6.fontWeight"),lineHeight:ar("H6.lineHeight"),letterSpacing:ar("H6.letterSpacing")},Body:{fontFamily:ar("Body.fontFamily"),fontSize:ar("Body.fontSize"),fontWeight:ar("Body.fontWeight"),lineHeight:ar("Body.lineHeight"),letterSpacing:ar("Body.letterSpacing")},BodySmall:{fontFamily:ar("BodySmall.fontFamily"),fontSize:ar("BodySmall.fontSize"),fontWeight:ar("BodySmall.fontWeight"),lineHeight:ar("BodySmall.lineHeight"),letterSpacing:ar("BodySmall.letterSpacing")},XSmall:{fontFamily:ar("XSmall.fontFamily"),fontSize:ar("XSmall.fontSize"),fontWeight:ar("XSmall.fontWeight"),lineHeight:ar("XSmall.lineHeight"),letterSpacing:ar("XSmall.letterSpacing")}},sr=e=>{switch(e){case 700:case"bold":return nr.Bold;case 600:case"semibold":return nr.Semibold;case 300:case"light":return nr.Light;case 400:case"regular":return nr.Regular;default:return""}},lr=(e,t)=>r=>{var n;const i=or[e].fontFamily(r),a=or[e].fontWeight(r);return Object.values(nr).includes(i)?b`
                font-family: ${sr(t)||sr(a)||i};
                font-weight: normal !important;
            `:b`
            font-family: ${i};
            font-weight: ${null!==(n=cr(t)||a)&&void 0!==n?n:"normal"};
        `},cr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ur=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},dr=lr,hr=(e,t,r=!1)=>n=>{const i=or[e],a=i.fontSize(n);return b`
            ${lr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${b`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},fr=(e=!1,t=!1,r=void 0)=>t?b`
            display: block;
            ${ur(r)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${ur(r)}
        `;var pr;!function(e){e.D1=y.h1`
        ${e=>b`
                ${hr("D1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>b`
                ${hr("D2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>b`
                ${hr("D3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>b`
                ${hr("D4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>b`
                ${hr("DBody",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>b`
                ${hr("H1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>b`
                ${hr("H2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>b`
                ${hr("H3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>b`
                ${hr("H4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>b`
                ${hr("H5",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>b`
                ${hr("H6",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>b`
                ${hr("Body",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>b`
                ${hr("BodySmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>b`
                ${hr("XSmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${fr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>yr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>yr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(pr||(pr={}));const gr=y.a`
    ${e=>b`
            ${hr(e.textStyle,e.weight)}
            color: ${Kt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Kt.Secondary};

                svg {
                    color: ${Kt.Secondary};
                }
            }
        `}
`,mr=y($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,yr=r=>{var{external:n=!1,children:i}=r,a=P(r,["external","children"]);return e(gr,Object.assign({},a,{children:[i,n&&t(mr,{})]}))};var br;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(br||(br={}));const vr=b`
    border: 1px solid ${Kt.Accent.Light[1]};
    box-shadow: ${rr.InputBoxShadow};
`,$r=b`
    border: 1px solid transparent;
    box-shadow: none;
`,wr=b`
    border: 1px solid ${Kt.Neutral[5]};
    box-shadow: none;
`,Sr=b`
    border: 1px solid ${Kt.Validation.Red.Border};
    box-shadow: ${rr.InputErrorBoxShadow};
`,xr=y.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Kt.Neutral[5]};
    border-radius: 4px;
    background: ${Kt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        ${vr}
    }
    ${e=>e.$focused&&vr}

    ${e=>e.$readOnly?b`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${$r}
                }
                ${e.$focused&&$r}
            `:e.$disabled?b`
                background: ${Kt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${wr}
                }
                ${e.$focused&&wr}
            `:e.$error?b`
                border: 1px solid ${Kt.Validation.Red.Border};

                :focus-within {
                    ${Sr}
                }
                ${e.$focused&&Sr}
            `:void 0}
`,Fr=y.input`
    ${e=>hr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Kt.Neutral[1]};
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
        color: ${Kt.Neutral[3]};
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
`;var Dr=function(e,t){return Dr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Dr(e,t)};var kr=function(){return kr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},kr.apply(this,arguments)};var Br="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var _r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Or="object"==typeof Br&&Br&&Br.Object===Object&&Br,Mr="object"==typeof self&&self&&self.Object===Object&&self,Er=Or||Mr||Function("return this")(),Ar=Er,Hr=function(){return Ar.Date.now()},Cr=/\s/;var Ir=function(e){for(var t=e.length;t--&&Cr.test(e.charAt(t)););return t},Tr=/^\s+/;var Pr=function(e){return e?e.slice(0,Ir(e)+1).replace(Tr,""):e},zr=Er.Symbol,jr=zr,Nr=Object.prototype,Rr=Nr.hasOwnProperty,Vr=Nr.toString,Lr=jr?jr.toStringTag:void 0;var Wr=function(e){var t=Rr.call(e,Lr),r=e[Lr];try{e[Lr]=void 0;var n=!0}catch(e){}var i=Vr.call(e);return n&&(t?e[Lr]=r:delete e[Lr]),i},Yr=Object.prototype.toString;var Ur=Wr,qr=function(e){return Yr.call(e)},Qr=zr?zr.toStringTag:void 0;var Zr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Qr&&Qr in Object(e)?Ur(e):qr(e)},Gr=function(e){return null!=e&&"object"==typeof e};var Xr=Pr,Jr=_r,Kr=function(e){return"symbol"==typeof e||Gr(e)&&"[object Symbol]"==Zr(e)},en=/^[-+]0x[0-9a-f]+$/i,tn=/^0b[01]+$/i,rn=/^0o[0-7]+$/i,nn=parseInt;var an=_r,on=Hr,sn=function(e){if("number"==typeof e)return e;if(Kr(e))return NaN;if(Jr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Jr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Xr(e);var r=tn.test(e);return r||rn.test(e)?nn(e.slice(2),r?2:8):en.test(e)?NaN:+e},ln=Math.max,cn=Math.min;var un=function(e,t,r){var n,i,a,o,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,a=i;return n=i=void 0,c=t,o=e.apply(a,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=a}function g(){var e=on();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?cn(r,a-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=i=void 0,o)}function y(){var e=on(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=sn(t)||0,an(r)&&(u=!!r.leading,a=(d="maxWait"in r)?ln(sn(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(on())},y},dn=un,hn=_r;var fn=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return hn(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),dn(e,t,{leading:n,maxWait:t,trailing:i})},pn=function(e,t,r,n){switch(t){case"debounce":return un(e,r,n);case"throttle":return fn(e,r,n);default:return e}},gn=function(e){return"function"==typeof e},mn=function(){return"undefined"==typeof window},yn=function(e){return e instanceof Element||e instanceof HTMLDocument},bn=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&gn(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!mn()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(mn())return null;if(t)return document.querySelector(t);if(n&&yn(n))return n;if(r.targetRef&&yn(r.targetRef.current))return r.targetRef.current;var i=x(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=bn(s,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!mn()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return gn(t)?"renderProp":gn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,mn()||(r.resizeHandler=pn(r.createResizeHandler,i,o,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Dr(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){mn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(o,null)}}}(u);var vn=mn()?d:h;function $n(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=a(r),y=a(null),b=null!=f?f:y,v=a(),$=o({width:void 0,height:void 0}),w=$[0],S=$[1];return vn((function(){if(!mn()){var e=bn(g,S,u,h);v.current=pn((function(t){(u||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!mn()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,u,h,g,p,b.current]),kr({ref:b},w)}var wn=Object.defineProperty,Sn={};((e,t)=>{for(var r in t)wn(e,r,{get:t[r],enumerable:!0})})(Sn,{assign:()=>ti,colors:()=>Jn,createStringInterpolator:()=>Qn,skipAnimation:()=>Kn,to:()=>Zn,willAdvance:()=>ei});var xn=jn(),Fn=e=>In(e,xn),Dn=jn();Fn.write=e=>In(e,Dn);var kn=jn();Fn.onStart=e=>In(e,kn);var Bn=jn();Fn.onFrame=e=>In(e,Bn);var _n=jn();Fn.onFinish=e=>In(e,_n);var On=[];Fn.setTimeout=(e,t)=>{const r=Fn.now()+t,n=()=>{const e=On.findIndex((e=>e.cancel==n));~e&&On.splice(e,1),Hn-=~e?1:0},i={time:r,handler:e,cancel:n};return On.splice(Mn(r),0,i),Hn+=1,Tn(),i};var Mn=e=>~(~On.findIndex((t=>t.time>e))||~On.length);Fn.cancel=e=>{kn.delete(e),Bn.delete(e),_n.delete(e),xn.delete(e),Dn.delete(e)},Fn.sync=e=>{Cn=!0,Fn.batchedUpdates(e),Cn=!1},Fn.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Fn.onStart(r)}return n.handler=e,n.cancel=()=>{kn.delete(r),t=null},n};var En="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Fn.use=e=>En=e,Fn.now="undefined"!=typeof performance?()=>performance.now():Date.now,Fn.batchedUpdates=e=>e(),Fn.catch=console.error,Fn.frameLoop="always",Fn.advance=()=>{"demand"!==Fn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):zn()};var An=-1,Hn=0,Cn=!1;function In(e,t){Cn?(t.delete(e),e(0)):(t.add(e),Tn())}function Tn(){An<0&&(An=0,"demand"!==Fn.frameLoop&&En(Pn))}function Pn(){~An&&(En(Pn),Fn.batchedUpdates(zn))}function zn(){const e=An;An=Fn.now();const t=Mn(An);t&&(Nn(On.splice(0,t),(e=>e.handler())),Hn-=t),Hn?(kn.flush(),xn.flush(e?Math.min(64,An-e):16.667),Bn.flush(),Dn.flush(),_n.flush()):An=-1}function jn(){let e=new Set,t=e;return{add(r){Hn+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Hn-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Hn-=t.size,Nn(t,(t=>t(r)&&e.add(t))),Hn+=e.size,t=e)}}}function Nn(e,t){e.forEach((e=>{try{t(e)}catch(e){Fn.catch(e)}}))}function Rn(){}var Vn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ln(e,t){if(Vn.arr(e)){if(!Vn.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Wn=(e,t)=>e.forEach(t);function Yn(e,t,r){if(Vn.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Un=e=>Vn.und(e)?[]:Vn.arr(e)?e:[e];function qn(e,t){if(e.size){const r=Array.from(e);e.clear(),Wn(r,t)}}var Qn,Zn,Gn=(e,...t)=>qn(e,(e=>e(...t))),Xn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Jn=null,Kn=!1,ei=Rn,ti=e=>{e.to&&(Zn=e.to),e.now&&(Fn.now=e.now),void 0!==e.colors&&(Jn=e.colors),null!=e.skipAnimation&&(Kn=e.skipAnimation),e.createStringInterpolator&&(Qn=e.createStringInterpolator),e.requestAnimationFrame&&Fn.use(e.requestAnimationFrame),e.batchedUpdates&&(Fn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ei=e.willAdvance),e.frameLoop&&(Fn.frameLoop=e.frameLoop)},ri=new Set,ni=[],ii=[],ai=0,oi={get idle(){return!ri.size&&!ni.length},start(e){ai>e.priority?(ri.add(e),Fn.onStart(si)):(li(e),Fn(ui))},advance:ui,sort(e){if(ai)Fn.onFrame((()=>oi.sort(e)));else{const t=ni.indexOf(e);~t&&(ni.splice(t,1),ci(e))}},clear(){ni=[],ri.clear()}};function si(){ri.forEach(li),ri.clear(),Fn(ui)}function li(e){ni.includes(e)||ci(e)}function ci(e){ni.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ni,(t=>t.priority>e.priority)),0,e)}function ui(e){const t=ii;for(let r=0;r<ni.length;r++){const n=ni[r];ai=n.priority,n.idle||(ei(n),n.advance(e),n.idle||t.push(n))}return ai=0,(ii=ni).length=0,(ni=t).length>0}var di="[-+]?\\d*\\.?\\d+",hi=di+"%";function fi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var pi=new RegExp("rgb"+fi(di,di,di)),gi=new RegExp("rgba"+fi(di,di,di,di)),mi=new RegExp("hsl"+fi(di,hi,hi)),yi=new RegExp("hsla"+fi(di,hi,hi,di)),bi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,vi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$i=/^#([0-9a-fA-F]{6})$/,wi=/^#([0-9a-fA-F]{8})$/;function Si(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function xi(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=Si(i,n,e+1/3),o=Si(i,n,e),s=Si(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Fi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Di(e){return(parseFloat(e)%360+360)%360/360}function ki(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Bi(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function _i(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=$i.exec(e))?parseInt(t[1]+"ff",16)>>>0:Jn&&void 0!==Jn[e]?Jn[e]:(t=pi.exec(e))?(Fi(t[1])<<24|Fi(t[2])<<16|Fi(t[3])<<8|255)>>>0:(t=gi.exec(e))?(Fi(t[1])<<24|Fi(t[2])<<16|Fi(t[3])<<8|ki(t[4]))>>>0:(t=bi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=wi.exec(e))?parseInt(t[1],16)>>>0:(t=vi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=mi.exec(e))?(255|xi(Di(t[1]),Bi(t[2]),Bi(t[3])))>>>0:(t=yi.exec(e))?(xi(Di(t[1]),Bi(t[2]),Bi(t[3]))|ki(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Oi=(e,t,r)=>{if(Vn.fun(e))return e;if(Vn.arr(e))return Oi({range:e,output:t,extrapolate:r});if(Vn.str(e.output[0]))return Qn(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=a(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,n.map)}};var Mi=1.70158,Ei=1.525*Mi,Ai=Mi+1,Hi=2*Math.PI/3,Ci=2*Math.PI/4.5,Ii=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Ti={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ai*e*e*e-Mi*e*e,easeOutBack:e=>1+Ai*Math.pow(e-1,3)+Mi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ei)/2:(Math.pow(2*e-2,2)*((Ei+1)*(2*e-2)+Ei)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Hi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Hi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ci)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ci)/2+1,easeInBounce:e=>1-Ii(1-e),easeOutBounce:Ii,easeInOutBounce:e=>e<.5?(1-Ii(1-2*e))/2:(1+Ii(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},Pi=Symbol.for("FluidValue.get"),zi=Symbol.for("FluidValue.observers"),ji=e=>Boolean(e&&e[Pi]),Ni=e=>e&&e[Pi]?e[Pi]():e,Ri=e=>e[zi]||null;function Vi(e,t){const r=e[zi];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Li=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Wi(this,e)}},Wi=(e,t)=>Qi(e,Pi,t);function Yi(e,t){if(e[Pi]){let r=e[zi];r||Qi(e,zi,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ui(e,t){const r=e[zi];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[zi]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var qi,Qi=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Zi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Gi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Xi=new RegExp(`(${Zi.source})(%|[a-z]+)`,"i"),Ji=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ki=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ea=e=>{const[t,r]=ta(e);if(!t||Xn())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ki.test(r)?ea(r):r||e},ta=e=>{const t=Ki.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ra=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,na=e=>{qi||(qi=Jn?new RegExp(`(${Object.keys(Jn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ni(e).replace(Ki,ea).replace(Gi,_i).replace(qi,_i))),r=t.map((e=>e.match(Zi).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Oi({...e,output:t})));return e=>{const r=!Xi.test(t[0])&&t.find((e=>Xi.test(e)))?.replace(Zi,"");let i=0;return t[0].replace(Zi,(()=>`${n[i++](e)}${r||""}`)).replace(Ji,ra)}},ia="react-spring: ",aa=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ia}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},oa=aa(console.warn);var sa=aa(console.warn);function la(e){return Vn.str(e)&&("#"==e[0]||/\d/.test(e)||!Xn()&&Ki.test(e)||e in(Jn||{}))}var ca=Xn()?d:h,ua=()=>{const e=a(!1);return ca((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function da(){const e=o()[1],t=ua();return()=>{t.current&&e(Math.random())}}var ha=e=>d(e,fa),fa=[];function pa(e){const t=a();return d((()=>{t.current=e})),t.current}var ga=Symbol.for("Animated:node"),ma=e=>e&&e[ga],ya=(e,t)=>{return r=e,n=ga,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},ba=e=>e&&e[ga]&&e[ga].getPayload(),va=class{constructor(){ya(this,this)}getPayload(){return this.payload||[]}},$a=class extends va{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Vn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new $a(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Vn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Vn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},wa=class extends $a{constructor(e){super(0),this._string=null,this._toString=Oi({output:[e,e]})}static create(e){return new wa(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Vn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Oi({output:[this.getValue(),e]})),this._value=0,super.reset()}},Sa={dependencies:null},xa=class extends va{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Yn(this.source,((r,n)=>{var i;(i=r)&&i[ga]===i?t[n]=r.getValue(e):ji(r)?t[n]=Ni(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Wn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Yn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Sa.dependencies&&ji(e)&&Sa.dependencies.add(e);const t=ba(e);t&&Wn(t,(e=>this.add(e)))}},Fa=class extends xa{constructor(e){super(e)}static create(e){return new Fa(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Da)),!0)}};function Da(e){return(la(e)?wa:$a).create(e)}function ka(e){const t=ma(e);return t?t.constructor:Vn.arr(e)?Fa:la(e)?wa:$a}var Ba=(e,t)=>{const r=!Vn.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,o)=>{const s=a(null),l=r&&p((e=>{s.current=function(e,t){e&&(Vn.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,u]=function(e,t){const r=new Set;Sa.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new xa(e),Sa.dependencies=null,[e,r]}(i,t),h=da(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new _a(f,u),m=a();ca((()=>(m.current=g,Wn(u,(e=>Yi(e,g))),()=>{m.current&&(Wn(m.current.deps,(e=>Ui(e,m.current))),Fn.cancel(m.current.update))}))),d(f,[]),ha((()=>()=>{const e=m.current;Wn(e.deps,(t=>Ui(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,{...y,ref:l})}))},_a=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Fn.write(this.update)}};var Oa=Symbol.for("AnimatedComponent"),Ma=e=>Vn.str(e)?e:e&&Vn.str(e.displayName)?e.displayName:Vn.fun(e)&&e.name||null;function Ea(e,...t){return Vn.fun(e)?e(...t):e}var Aa=(e,t)=>!0===e||!!(t&&e&&(Vn.fun(e)?e(t):Un(e).includes(t))),Ha=(e,t)=>Vn.obj(e)?t&&e[t]:e,Ca=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ia=e=>e,Ta=(e,t=Ia)=>{let r=Pa;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Vn.und(r)||(n[i]=r)}return n},Pa=["config","onProps","onStart","onChange","onPause","onResume","onRest"],za={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ja(e){const t=function(e){const t={};let r=0;if(Yn(e,((e,n)=>{za[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Yn(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Na(e){return e=Ni(e),Vn.arr(e)?e.map(Na):la(e)?Sn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Ra(e){return Vn.fun(e)||Vn.arr(e)&&Vn.obj(e[0])}var Va={tension:170,friction:26,mass:1,damping:1,easing:Ti.linear,clamp:!1},La=class{constructor(){this.velocity=0,Object.assign(this,Va)}};function Wa(e,t){if(Vn.und(t.decay)){const r=!Vn.und(t.tension)||!Vn.und(t.friction);!r&&Vn.und(t.frequency)&&Vn.und(t.damping)&&Vn.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ya=[],Ua=class{constructor(){this.changed=!1,this.values=Ya,this.toValues=null,this.fromValues=Ya,this.config=new La,this.immediate=!1}};function qa(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,u=Aa(r.cancel??n?.cancel,t);if(u)f();else{Vn.und(r.pause)||(i.paused=Aa(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Aa(e,t)),l=Ea(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-Fn.now()}function h(){l>0&&!Sn.skipAnimation?(i.delayed=!0,c=Fn.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{a.start({...r,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var Qa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Xa(e.get()):t.every((e=>e.noop))?Za(e.get()):Ga(e.get(),t.every((e=>e.finished))),Za=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ga=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Xa=e=>({value:e,cancelled:!0,finished:!1});function Ja(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Ta(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&Xa(n)||i!==r.asyncId&&Ga(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new eo,o=new to;return(async()=>{if(Sn.skipAnimation)throw Ka(r),o.result=Ga(n,!1),d(o),o;f(a);const s=Vn.obj(e)?{...e}:{...t,to:e};s.parentId=i,Yn(c,((e,t)=>{Vn.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Sn.skipAnimation)return Ka(r),Ga(n,!1);try{let t;t=Vn.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Ga(n.get(),!0,!1)}catch(e){if(e instanceof eo)g=e.result;else{if(!(e instanceof to))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?l:void 0)}return Vn.fun(o)&&Fn.batchedUpdates((()=>{o(g,n,n.item)})),g})():l}function Ka(e,t){qn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var eo=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},to=class extends Error{constructor(){super("SkipAnimationSignal")}},ro=e=>e instanceof io,no=1,io=class extends Li{constructor(){super(...arguments),this.id=no++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ma(this);return e&&e.getValue()}to(...e){return Sn.to(this,e)}interpolate(...e){return oa(`${ia}The "interpolate" function is deprecated in v9 (use "to" instead)`),Sn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Vi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||oi.sort(this),Vi(this,{type:"priority",parent:this,priority:e})}},ao=Symbol.for("SpringPhase"),oo=e=>(1&e[ao])>0,so=e=>(2&e[ao])>0,lo=e=>(4&e[ao])>0,co=(e,t)=>t?e[ao]|=3:e[ao]&=-3,uo=(e,t)=>t?e[ao]|=4:e[ao]&=-5,ho=class extends io{constructor(e,t){if(super(),this.animation=new Ua,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Vn.und(e)||!Vn.und(t)){const r=Vn.obj(e)?{...e}:{...t,from:e};Vn.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(so(this)||this._state.asyncTo)||lo(this)}get goal(){return Ni(this.animation.to)}get velocity(){const e=ma(this);return e instanceof $a?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return oo(this)}get isAnimating(){return so(this)}get isPaused(){return lo(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=ba(n.to);!o&&ji(n.to)&&(i=Un(Ni(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==wa?1:o?o[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Vn.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Vn.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Vn.und(n),f=r==c?s.v0>0:r<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(o=-o*n,d=c));o+=(1e-6*-a.tension*(d-c)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(c-r),o=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=ma(this),l=s.getValue();if(t){const e=Ni(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Fn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(so(this)){const{to:e,config:t}=this.animation;Fn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Vn.und(e)?(r=this.queue||[],this.queue=[]):r=[Vn.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Qa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Ka(this._state,e&&this._lastCallId),Fn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Vn.obj(r)?r[t]:r,(null==r||Ra(r))&&(r=void 0),n=Vn.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return oo(this)||(e.reverse&&([r,n]=[n,r]),n=Ni(n),Vn.und(n)?ma(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ta(e,((e,t)=>/^on/.test(t)?Ha(e,r):e))),vo(this,e,"onProps"),$o(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return qa(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{lo(this)||(uo(this,!0),Gn(a.pauseQueue),$o(this,"onPause",Ga(this,fo(this,this.animation.to)),this))},resume:()=>{lo(this)&&(uo(this,!1),so(this)&&this._resume(),Gn(a.resumeQueue),$o(this,"onResume",Ga(this,fo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=po(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Xa(this));const n=!Vn.und(e.to),i=!Vn.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Xa(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Vn.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ln(d,c);h&&(s.from=d),d=Ni(d);const f=!Ln(u,l);f&&this._focus(u);const p=Ra(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Wa(r={...r},t),t={...r,...t}),Wa(e,t),Object.assign(e,t);for(const t in Va)null==e[t]&&(e[t]=Va[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;Vn.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(g,Ea(t.config,a),t.config!==o.config?Ea(o.config,a):void 0);let b=ma(this);if(!b||Vn.und(u))return r(Ga(this,!0));const v=Vn.und(t.reset)?i&&!t.default:!Vn.und(d)&&Aa(t.reset,a),$=v?d:this.get(),w=Na(u),S=Vn.num(w)||Vn.arr(w)||la(w),x=!p&&(!S||Aa(o.immediate||t.immediate,a));if(f){const e=ka(u);if(e!==b.constructor){if(!x)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const F=b.constructor;let D=ji(u),k=!1;if(!D){const e=v||!oo(this)&&h;(f||e)&&(k=Ln(Na($),w),D=!k),(Ln(s.immediate,x)||x)&&Ln(g.decay,m)&&Ln(g.velocity,y)||(D=!0)}if(k&&so(this)&&(s.changed&&!v?D=!0:D||this._stop(l)),!p&&((D||ji(l))&&(s.values=b.getPayload(),s.toValues=ji(u)?null:F==wa?[1]:Un(w)),s.immediate!=x&&(s.immediate=x,x||v||this._set(l)),D)){const{onRest:e}=s;Wn(bo,(e=>vo(this,t,e)));const n=Ga(this,fo(this,l));Gn(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Fn.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?Ea(o.onRest,n):s.onStart?.(n,this)}))}v&&this._set($),p?r(Ja(t.to,t,this._state,this)):D?this._start():so(this)&&!f?this._pendingCalls.add(r):r(Za($))}_focus(e){const t=this.animation;e!==t.to&&(Ri(this)&&this._detach(),t.to=e,Ri(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;ji(t)&&(Yi(t,this),ro(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;ji(e)&&Ui(e,this)}_set(e,t=!0){const r=Ni(e);if(!Vn.und(r)){const e=ma(this);if(!e||!Ln(r,e.getValue())){const n=ka(r);e&&e.constructor==n?e.setValue(r):ya(this,n.create(r)),e&&Fn.batchedUpdates((()=>{this._onChange(r,t)}))}}return ma(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,$o(this,"onStart",Ga(this,fo(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ea(this.animation.onChange,e,this)),Ea(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ma(this).reset(Ni(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),so(this)||(co(this,!0),lo(this)||this._resume())}_resume(){Sn.skipAnimation?this.finish():oi.start(this)}_stop(e,t){if(so(this)){co(this,!1);const r=this.animation;Wn(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Vi(this,{type:"idle",parent:this});const n=t?Xa(this.get()):Ga(this.get(),fo(this,e??r.to));Gn(this._pendingCalls,n),r.changed&&(r.changed=!1,$o(this,"onRest",n,this))}}};function fo(e,t){const r=Na(t);return Ln(Na(e.get()),r)}function po(e,t=e.loop,r=e.to){const n=Ea(t);if(n){const i=!0!==n&&ja(n),a=(i||e).reverse,o=!i||i.reset;return go({...e,loop:t,default:!1,pause:void 0,to:!a||Ra(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function go(e){const{to:t,from:r}=e=ja(e),n=new Set;return Vn.obj(t)&&yo(t,n),Vn.obj(r)&&yo(r,n),e.keys=n.size?Array.from(n):null,e}function mo(e){const t=go(e);return Vn.und(t.default)&&(t.default=Ta(t)),t}function yo(e,t){Yn(e,((e,r)=>null!=e&&t.add(r)))}var bo=["onStart","onRest","onChange","onPause","onResume"];function vo(e,t,r){e.animation[r]=t[r]!==Ca(t,r)?Ha(t[r],e.key):void 0}function $o(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var wo=["onStart","onChange","onRest"],So=1,xo=class{constructor(e,t){this.id=So++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Vn.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(go(e)),this}start(e){let{queue:t}=this;return e?t=Un(e).map(go):this.queue=[],this._flush?this._flush(this,t):(Mo(this,t),Fo(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Wn(Un(t),(t=>r[t].stop(!!e)))}else Ka(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Vn.und(e))this.start({pause:!0});else{const t=this.springs;Wn(Un(e),(e=>t[e].pause()))}return this}resume(e){if(Vn.und(e))this.start({pause:!1});else{const t=this.springs;Wn(Un(e),(e=>t[e].resume()))}return this}each(e){Yn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,qn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&qn(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,qn(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Fn.onFrame(this._onFrame)}};function Fo(e,t){return Promise.all(t.map((t=>Do(e,t)))).then((t=>Qa(e,t)))}async function Do(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=Vn.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const u=Vn.arr(i)||Vn.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Wn(wo,(r=>{const n=t[r];if(Vn.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Gn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Ca(t,"cancel");(u||f&&d.asyncId)&&h.push(qa(++e._lastAsyncId,{props:t,state:d,actions:{pause:Rn,resume:Rn,start(t,r){f?(Ka(d,e._lastAsyncId),r(Xa(e))):(t.onRest=s,r(Ja(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Qa(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=po(t,o,i);if(r)return Mo(e,[r]),Do(e,r,!0)}return l&&Fn.batchedUpdates((()=>l(p,e,e.item))),p}function ko(e,t){const r={...e.springs};return t&&Wn(Un(t),(e=>{Vn.und(e.keys)&&(e=go(e)),Vn.obj(e.to)||(e={...e,to:void 0}),Oo(r,e,(e=>_o(e)))})),Bo(e,r),r}function Bo(e,t){Yn(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Yi(t,e))}))}function _o(e,t){const r=new ho;return r.key=e,t&&Yi(r,t),r}function Oo(e,t,r){t.keys&&Wn(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Mo(e,t){Wn(t,(t=>{Oo(e.springs,t,(t=>_o(t,e)))}))}var Eo,Ao,Ho=({children:e,...t})=>{const r=g(Co),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=o((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return d((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=Co;return n.createElement(l,{value:t},e)},Co=(Eo=Ho,Ao={},Object.assign(Eo,n.createContext(Ao)),Eo.Provider._context=Eo,Eo.Consumer._context=Eo,Eo);Ho.Provider=Co.Provider,Ho.Consumer=Co.Consumer;var Io=()=>{const e=[],t=function(t){sa(`${ia}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Wn(e,((e,i)=>{if(Vn.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Wn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Wn(e,(e=>e.resume(...arguments))),this},t.set=function(t){Wn(e,((e,r)=>{const n=Vn.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Wn(e,((e,n)=>{if(Vn.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Wn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Wn(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Vn.fun(e)?e(r,t):e};return t._getProps=r,t};function To(e,t){const r=Vn.fun(e),[[n],i]=function(e,t,r){const n=Vn.fun(t)&&t;n&&!r&&(r=[]);const i=m((()=>n||3==arguments.length?Io():void 0),[]),o=a(0),s=da(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const r=ko(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Fo(e,t):new Promise((n=>{Bo(e,r),l.queue.push((()=>{n(Fo(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=pa(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new xo(null,l.flush)),r=n?n(i,e):t[i];r&&(u[i]=mo(r))}}m((()=>{Wn(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),m((()=>{h(0,Math.min(d,e))}),r);const f=c.current.map(((e,t)=>ko(e,u[t]))),p=g(Ho),y=pa(p),b=p!==y&&function(e){for(const t in e)return!0;return!1}(p);ca((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Wn(e,(e=>e()))),Wn(c.current,((e,t)=>{i?.add(e),b&&e.start({default:p});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ha((()=>()=>{Wn(l.ctrls,(e=>e.stop(!0)))}));const v=f.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Po=class extends io{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Oi(...t);const r=this._get(),n=ka(r);ya(this,n.create(r))}advance(e){const t=this._get();Ln(t,this.get())||(ma(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&jo(this._active)&&No(this)}_get(){const e=Vn.arr(this.source)?this.source.map(Ni):Un(Ni(this.source));return this.calc(...e)}_start(){this.idle&&!jo(this._active)&&(this.idle=!1,Wn(ba(this),(e=>{e.done=!1})),Sn.skipAnimation?(Fn.batchedUpdates((()=>this.advance())),No(this)):oi.start(this))}_attach(){let e=1;Wn(Un(this.source),(t=>{ji(t)&&Yi(t,this),ro(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Wn(Un(this.source),(e=>{ji(e)&&Ui(e,this)})),this._active.clear(),No(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Un(this.source).reduce(((e,t)=>Math.max(e,(ro(t)?t.priority:0)+1)),0))}};function zo(e){return!1!==e.idle}function jo(e){return!e.size||Array.from(e).every(zo)}function No(e){e.idle||(e.idle=!0,Wn(ba(e),(e=>{e.done=!0})),Vi(e,{type:"idle",parent:e}))}Sn.assign({createStringInterpolator:na,to:(e,t)=>new Po(e,t)});var Ro=/^--/;function Vo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ro.test(e)||Wo.hasOwnProperty(e)&&Wo[e]?(""+t).trim():t+"px"}var Lo={};var Wo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yo=["Webkit","Ms","Moz","O"];Wo=Object.keys(Wo).reduce(((e,t)=>(Yo.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Wo);var Uo=/^(matrix|translate|scale|rotate|skew)/,qo=/^(translate)/,Qo=/^(rotate|skew)/,Zo=(e,t)=>Vn.num(e)&&0!==e?e+t:e,Go=(e,t)=>Vn.arr(e)?e.every((e=>Go(e,t))):Vn.num(e)?e===t:parseFloat(e)===t,Xo=class extends xa{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Zo(e,"px"))).join(",")})`,Go(e,0)]))),Yn(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Uo.test(t)){if(delete n[t],Vn.und(e))return;const r=qo.test(t)?"px":Qo.test(t)?"deg":"";i.push(Un(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Zo(i,r)})`,Go(i,0)]:e=>[`${t}(${e.map((e=>Zo(e,r))).join(",")})`,Go(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Jo(i,a)),super(n)}},Jo=class extends Li{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Wn(this.inputs,((r,n)=>{const i=Ni(r[0]),[a,o]=this.transforms[n](Vn.arr(i)?i:r.map(Ni));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Wn(this.inputs,(e=>Wn(e,(e=>ji(e)&&Yi(e,this)))))}observerRemoved(e){0==e&&Wn(this.inputs,(e=>Wn(e,(e=>ji(e)&&Ui(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Vi(this,e)}};Sn.assign({batchedUpdates:F,createStringInterpolator:na,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ko,es,ts,rs=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new xa(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=Ma(e)||"Anonymous";return(e=Vn.str(e)?a[e]||(a[e]=Ba(e,i)):e[Oa]||(e[Oa]=Ba(e,i))).displayName=`Animated(${t})`,e};return Yn(e,((t,r)=>{Vn.arr(e)&&(r=Ma(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Lo[t]||(Lo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Vo(t,n[t]);Ro.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Xo(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),ns=rs.animated;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ko||(Ko={})),function(e){e.AM="AM",e.PM="PM"}(es||(es={})),function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:es.AM};if(!t)return r;try{if("24hr"===e){const n=os(t,e);r.minute=Ko.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=es.AM,r.hour=0===i?"12":Ko.padValue(i.toString())):(r.period=es.PM,r.hour=12===i?i.toString():Ko.padValue((i-12).toString()))}else{const n=os(t,e);r.hour=Ko.padValue(n.hour),r.minute=Ko.padValue(n.minute),r.period="am"===n.period.toLowerCase()?es.AM:es.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Ko.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Ko.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Ko.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Ko.padValue(n.toString()):13===n?Ko.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===es.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Ko.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=os(e,t),n=Ko.padValue(r.hour);let i=`${n}:${Ko.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(ts||(ts={}));const is=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},as=e=>{const t=parseInt(e);return t>=0&&t<=59},os=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),a=r[1].substring(2);if(!is(r[0],t)||!as(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!is(r[0],t)||!as(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},ss={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ls=e=>Object.keys(ss).reduce(((t,r)=>{const n=ss[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),cs=ls("max-width"),us=(ls("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ds=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,hs=y.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Kt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ds} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,fs=y(hs)`
    animation-delay: -0.45s;
`,ps=y(hs)`
    animation-delay: -0.3s;
`,gs=y(hs)`
    animation-delay: -0.15s;
`,ms=y.button`
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
                    background-color: ${Kt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?rr.Button.Danger.Border:Kt.Primary};

                    color: ${e.$buttonIsDanger?rr.Button.Danger.Primary:Kt.Primary};
                `;case"light":return b`
                    background-color: ${Kt.Neutral[8]};
                    border: 1px solid ${Kt.Neutral[5]};

                    color: ${e.$buttonIsDanger?rr.Button.Danger.Primary:Kt.Primary};
                `;case"disabled":return b`
                    background-color: ${Kt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Kt.Neutral[3]};
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?rr.Button.Danger.Primary:Kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?rr.Button.Danger.Hover:Kt.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?rr.Button.Danger.BackgroundColor:Kt.Primary};
                    border: 1px solid transparent;

                    ${cs.mobileL} {
                        width: 100%;
                    }

                    color: ${Kt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    ${hr("H5","semibold")}

                    ${cs.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${hr("H4","semibold")}

                    ${cs.mobileS} {
                        height: auto;
                    }
                `}
`,ys=y((({color:r,className:n,size:i=18})=>e(us,Object.assign({className:n,$size:i,$color:r},{children:[t(hs,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(fs,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(ps,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(gs,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?rr.Button.Danger.Primary:Kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Kt.Neutral[3](e);break;default:t=Kt.Neutral[8](e)}return b`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,bs={Default:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=P(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ms,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(ys,Object.assign({},u)),t("span",{children:i})]}))})),Small:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=P(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ms,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(ys,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},vs=y.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?b`
                    color: ${Kt.Primary};
                `:b`
                    color: ${Kt.Neutral[4]};
                `};
    }
`,$s=({type:e,active:r=!1,disabled:n,className:i})=>{let a;switch(e){case"checkbox":a=t(r?O:_,{});break;case"radio":a=t(r?k:D,{});break;case"tick":a=t(M,{});break;case"cross":a=t(B,{});break;default:a=null}return t(vs,Object.assign({className:i,$active:r,disabled:n},{children:a}))};var ws={exports:{}};ws.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=u||0;return d?new Date(Date.UTC(g,m,p,y,b,v,$+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,b,v,$)):new Date(g,m,p,y,b,v,$)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ss,xs,Fs=j(ws.exports),Ds={exports:{}},ks=j(Ds.exports=(Ss={year:0,month:1,day:2,hour:3,minute:4,second:5},xs={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=xs[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),xs[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,u=Ss[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),Bs={exports:{}};Bs.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var w="$isDayjsObject",S=function(e){return e instanceof k||!(!e||!e[w])},x=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),r&&($[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},F=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=b;D.l=x,D.i=S,D.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=F(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!D.u(t)||t,u=D.p(e),f=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(g<v?g+7:g)-v;return f(n?y-$:y+(6-$),m);case s:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=D.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[o]=u+"Hours",r[a]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var p=D.p(u),g=function(e){var t=F(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=this,m=D.p(h),y=F(n),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return D.m(g,y)};switch(m){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case l:p=(v-b)/6048e5;break;case s:p=(v-b)/864e5;break;case o:p=v/r;break;case a:p=v/t;break;case i:p=v/e;break;default:p=v}return f?p:D.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=k.prototype;return F.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,k,F),e.$i=!0),F},F.locale=x,F.isDayjs=S,F.unix=function(e){return F(1e3*e)},F.en=$[v],F.Ls=$,F.p={},F}();var _s=j(Bs.exports),Os={exports:{}};Os.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var Ms=j(Os.exports),Es={exports:{}};Es.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var As=j(Es.exports),Hs={exports:{}};Hs.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Cs,Is=j(Hs.exports);_s.extend(Ms),_s.extend(As),_s.extend(Is),_s.extend(Fs),_s.extend(ks),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=_s(t).startOf("week");return Ts(r).map((e=>Ps(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ps(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(_s(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+_s(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=_s(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?_s(n):void 0,i?_s(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Cs||(Cs={}));const Ts=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ps=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},zs=[1,3,5,7,8,10,12],js=[4,6,9,11];var Ns,Rs,Vs;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":zs.includes(a)?Math.min(i,31).toString():js.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=_s(e,r);return _s(t,r).diff(n,"minute")},e.toDayjs=e=>e?_s(e):_s(),e.addMinutesToTime=(e,t,r="HH:mm")=>_s(e,r).add(t,"minutes").format(r)}(Ns||(Ns={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!_s(e).isBefore(n,"day"))||!(!i||!_s(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(_s(e).isValid())return e}return""}}(Rs||(Rs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Vs||(Vs={}));const Ls=(e,t,r="window",n)=>{const i=a();d((()=>{i.current=t}),[t]),d((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])},Ws=e=>{const{textSize:t}=e||{};return b`
        // Text styling
        ${t&&hr(t,"regular")}

        strong {
            font-family: ${nr.Semibold};
            ${t&&hr(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${nr.Semibold};
            ${t&&hr(t,"semibold")}
            color: ${Kt.Primary};
            text-decoration: none;

            svg {
                color: ${Kt.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Kt.Secondary};

                svg {
                    color: ${Kt.Secondary};
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
    `},Ys=y.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Kt.Validation.Red.Background(e),r=Kt.Validation.Red.Border(e);break;case"success":t=Kt.Validation.Green.Background(e),r=Kt.Validation.Green.Border(e);break;case"warning":default:t=Kt.Validation.Orange.Background(e),r=Kt.Validation.Orange.Border(e);break;case"info":t=Kt.Validation.Blue.Background(e),r=Kt.Validation.Blue.Border(e);break;case"description":t=Kt.Neutral[7](e),r=Kt.Neutral[4](e)}return b`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${Kt.Neutral[1]};
    ${e=>"small"===e.$sizeType?Ws({textSize:"H6"}):Ws({textSize:"BodySmall"})}
`,Us=y.div`
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&b`
            display: flex;
            align-items: center;
            height: 1.625rem;
        `}

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Kt.Validation.Red.Icon(e);break;case"success":t=Kt.Validation.Green.Icon(e);break;case"warning":default:t=Kt.Validation.Orange.Icon(e);break;case"info":t=Kt.Validation.Blue.Icon(e);break;case"description":t=Kt.Neutral[4](e)}return b`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,qs=y(pr.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?b`
                ${hr("H6","semibold")}
                margin-top: 0.25rem;
            `:b`
                ${hr("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${Kt.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${Kt.Primary};
    }
`,Qs=y.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Zs=y.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Gs=y.button`
    ${e=>"small"===e.$sizeType?b`
                ${hr("H6","semibold")}
            `:b`
                ${hr("H5","semibold")}
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

    color: ${Kt.Primary};
`,Xs=y(T)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Js=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,Ks=(y.ol`
    ${e=>Js(e.bottomMargin)}
    margin-left: ${3}rem;

    ${cs.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>hr(e.size,"regular")}
        position: relative;
        color: ${Kt.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return b`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return b`
                counter-reset: list ${t?r+1:r-1};
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
`,y.ul`
    ${e=>Js(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>hr(e.size,"regular")}
        color: ${Kt.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),el=e=>{var{size:r="Body",children:n}=e,i=P(e,["size","children"]);return t(Ks,Object.assign({size:r},i,{children:n}))},tl=y.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    width: 100%;

    // Content positioning style
    ${e=>{if(!e.$indicator)return b`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?b`
                        border-color: ${Kt.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kt.Shadow.Red};
                        }
                    `:e.$disabled?b`
                        border-color: transparent;
                    `:b`
                        border-color: transparent;

                        :hover {
                            background: ${Kt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?b`
                        border-color: ${Kt.Neutral[5]};
                    `:e.$disabled&&e.$selected?b`
                        border-color: ${Kt.Neutral[4]};
                    `:e.$error?b`
                        border-color: ${Kt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kt.Shadow.Red};
                        }
                    `:e.$selected?b`
                        border-color: ${Kt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kt.Shadow.Accent};
                        }
                    `:b`
                        background: ${Kt.Neutral[8]};
                        border-color: ${Kt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Kt.Shadow.Accent};
                            border-color: ${Kt.Accent.Light[1]};
                        }
                    `}
`,rl=y.input`
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
`,nl=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,il=y.label`
    ${e=>e.$selected&&!e.$indicator?b`
                ${hr("H4","semibold")}
            `:b`
                ${hr("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${cs.tablet} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${cs.mobileL} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
    color: ${Kt.Neutral[1]};

    ${e=>e.$disabled?b`
                color: ${Kt.Neutral[3]};
            `:e.$selected?b`
                color: ${Kt.Primary};
            `:void 0}
`,al=y.div`
    ${hr("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${dr("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?b`
                color: ${Kt.Neutral[3]};
            `:e.$selected?b`
                color: ${Kt.Primary};
            `:b`
                color: ${Kt.Neutral[1]};
            `}
`,ol=y.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?b`
                        background: ${Kt.Neutral[8]};
                    `:e.$disabled?b``:b`
                        :hover {
                            background: ${Kt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?b`
                        background: ${Kt.Neutral[6]};
                    `:e.$error?b`
                        background: ${Kt.Neutral[8]};
                    `:e.$selected?b`
                        background: ${Kt.Accent.Light[5]};
                    `:b`
                        background: ${Kt.Neutral[8]};
                    `}
`,sl=y.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,ll=y.button`
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Icon};
    white-space: nowrap;
    ${hr("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,cl=y.button`
    color: ${e=>e.disabled?Kt.Neutral[3]:Kt.Primary};
    ${hr("H4","semibold")}
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 0.6875rem;
    border: none;
    background: none;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`,ul=y.div`
    width: 100%;
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding-top: 0.6875rem;
    padding-bottom: 0.5rem;
`,dl=y((r=>{var{type:n,className:i,children:a,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:f}=r,p=P(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,m]=o(!1),[y,b]=o(!1),{height:v,ref:$}=$n();d((()=>{w()}),[f,v]);const w=()=>{m(!f),b(S())},S=()=>!!f&&v>f;return e(Ys,Object.assign({className:i,$type:n,$sizeType:c,"data-testid":p["data-testid"]},{children:[u&&t(Us,Object.assign({$sizeType:c,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return t(I,{});case"warning":return t(H,{});case"error":return t(A,{});case"info":case"description":return t(C,{});default:return null}})()})),e(Qs,{children:[e(Zs,Object.assign({$maxCollapsedHeight:S()?f:void 0,$showMore:g,$hasActionLink:!!s},{children:[t("div",Object.assign({ref:$},{children:a})),s&&e(qs,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},s,{children:[s.children,l||t(E,{})]}))]})),y&&e(Gs,Object.assign({$sizeType:c,$type:n,type:"button",onClick:()=>m(!g)},{children:["Show ",g?"less":"more",t(Xs,{$expanded:g})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,hl=y.div`
    padding: 0 1rem;
`,fl=y.div`
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Ws({textSize:"BodySmall"})}

    ${e=>e.$disabled?b`
                color: ${Kt.Neutral[3]};
            `:e.$selected?b`
                color: ${Kt.Primary};
            `:b`
                color: ${Kt.Neutral[1]};
            `}
`,pl=y(pr.BodySmall)`
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Text};
`,gl=y(el)`
    li {
        color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Text};
    }
`,ml=y.button`
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

        ${({$highlight:e})=>e&&b`
                background-color: ${Kt.Neutral[7]};
            `}
    }
`,yl=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=P(e,["children","focusHighlight","focusOutline","type"]);return t(ml,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),bl=y(ns.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Kt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${cs.mobileS} {
        max-width: 100%;
    }
`,vl=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,$l=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${cs.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,wl=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${cs.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Sl=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${cs.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,xl=y.div`
    display: flex;
    gap: 0.5rem;

    ${cs.tablet} {
        flex-direction: column;
    }

    ${cs.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Fl=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${cs.mobileS} {
        width: 6rem;
    }
`,Dl=y(yl)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Kt.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Kt.Primary};
    }
`,kl=y(pr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${cs.tablet} {
        margin: 0;
    }

    ${cs.mobileS} {
        margin: 0 0.25rem;
    }
`,Bl=y(Fr)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Kt.Neutral[5]};
    background: ${Kt.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Kt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Kt.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${cs.mobileS} {
        width: 100%;
    }
`,_l=y((({type:n="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:u,subLabel:h,disabled:f,error:p,name:g,id:y,className:b,compositeSection:v,removable:$,onRemove:x,"data-testid":F,onChange:D})=>{const{collapsible:k=!0,errors:B,children:_,initialExpanded:O}=v||{},[M,E]=o(s),[A,H]=o(O),C=m((()=>{const e=Array.isArray(B)&&(null==B?void 0:B.length)>0,t=!Array.isArray(B)&&!!B;return e||t}),[B]),[I]=o(Vs.generate()),T=y?`${y}`:`tg-${I}`,P=a();d((()=>{E(s)}),[s]),d((()=>{M&&H(null==O||O)}),[M]);const z=e=>{if(!f){if(D)return void D(e);switch(n){case"checkbox":E((e=>!e));break;case"radio":case"yes":case"no":M||E(!0)}}},j=()=>{f||H(!A)},N=()=>{f||!x||x()},R=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t($s,{type:e,active:M,disabled:f})},V=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(al,Object.assign({"data-id":"toggle-sublabel",$disabled:f,$selected:M},{children:e}))},L=()=>{const r=!A&&!C;return k&&e(cl,Object.assign({$paddingTopRequired:r,disabled:f,onClick:j,"data-testid":A?"collapse-button":"expand-button"},{children:[A?"Show less":"Show more",t(A?S:w,{"aria-hidden":!0})]}))},W=n=>e(r,{children:[t(pl,Object.assign({weight:"semibold",$disabled:f},{children:"Error"})),t(gl,Object.assign({$disabled:f},{children:null==n?void 0:n.map(((e,r)=>t("li",Object.assign({id:`${T}-error-list-item-${r}`},{children:t(pl,Object.assign({weight:"semibold",$disabled:f},{children:e}))}),r)))}))]});return e(tl,Object.assign({$selected:M,$disabled:f,className:b,$styleType:l,$error:p,$indicator:i,id:y,"data-testid":F},{children:[e(ol,Object.assign({id:`${T}-header-container`,$disabled:f,$error:p,$selected:M,$indicator:i,$styleType:l},{children:[e(sl,Object.assign({$addPadding:$},{children:[t(rl,{ref:P,name:g,id:`${T}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:z,checked:M}),i&&R(),e(nl,{children:[t(il,Object.assign({htmlFor:`${T}-input`,$selected:M,$indicator:i,$disabled:f,"data-testid":`${T}-toggle-label`,$maxLines:u},{children:c})),h&&V()]})]})),$&&t(ll,Object.assign({type:"button",$disabled:f,onClick:N,id:`${T}-remove-button`},{children:"Remove"}))]})),_&&e(hl,{children:[(!k||A)&&t(fl,Object.assign({$isFinalItem:!k,$disabled:f},{children:_})),k&&!A&&C&&t(ul,Object.assign({$disabled:f,onClick:j,id:`${T}-error-alert`},{children:t(dl,Object.assign({type:f?"description":"error",className:b,showIcon:!0},{children:Array.isArray(B)?W(B):B}))})),L()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,Ol=y(bs.Small)`
    width: 7rem;

    ${cs.mobileL} {
        flex: 1;
    }

    ${cs.mobileS} {
        width: 100%;
    }
`;var Ml,El,Al;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Ml||(Ml={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(El||(El={})),function(e){e.AM="am",e.PM="pm"}(Al||(Al={}));const Hl=({id:r,value:n,show:i,format:s,onChange:l,onCancel:c})=>{const u=ts.getTimeValues(s,n),[h,f]=o(u.hour),[g,m]=o(u.minute),[y,b]=o(u.period),v=a(),$=a(),x=$n();d((()=>{if(i&&v.current&&v.current.focus(),i){const{hour:e,minute:t,period:r}=ts.getTimeValues(s,n);f(e),m(t),b(r)}}),[i,n,s]),d((()=>{const e=v.current,t=$.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},D=p((e=>{switch(e.currentTarget.name){case Ml.MINUTE_UP:m(ts.updateMinutes(g,"add"));break;case Ml.MINUTE_DOWN:m(ts.updateMinutes(g,"minus"));break;case Ml.HOUR_UP:f(ts.updateHours(h,"add"));break;case Ml.HOUR_DOWN:f(ts.updateHours(h,"minus"))}}),[h,g]),k=e=>{e.target.select()},B=e=>{const t=e.target.value;switch(e.target.name){case El.HOUR:t.length<=2&&f(t);break;case El.MINUTE:t.length<=2&&m(t)}},_=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case El.HOUR:{const r=t>23||t<0?u.hour:ts.convertHourTo12HourFormat(e.target.value);f(r);break}case El.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;m(Ko.padValue(r));break}}},O=e=>{switch(e.target.name){case Al.AM:b(es.AM);break;case Al.PM:b(es.PM)}},M=e=>r?`${r}-${e}`:e,E=To({height:i?x.height+32:0});return t(bl,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(vl,Object.assign({ref:x.ref,"data-testid":M("timepicker-dropdown"),inert:i?void 0:""},{children:[e($l,{children:[e(Sl,{children:[e(Fl,{children:[t(Dl,Object.assign({"aria-label":"increase hour",name:Ml.HOUR_UP,tabIndex:-1,onClick:D,"data-testid":M("hour-increment-button")},{children:t(S,{})})),t(Bl,{"aria-label":"hour",type:"number",name:El.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:k,onChange:B,onBlur:_,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Dl,Object.assign({"aria-label":"decrease hour",name:Ml.HOUR_DOWN,tabIndex:-1,onClick:D,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(kl,{children:":"}),e(Fl,{children:[t(Dl,Object.assign({"aria-label":"increase minute",name:Ml.MINUTE_UP,tabIndex:-1,onClick:D,"data-testid":M("minute-increment-button")},{children:t(S,{})})),t(Bl,{"aria-label":"minute",type:"number",name:El.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:$,value:g,onChange:B,onBlur:_,onFocus:k,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Dl,Object.assign({"aria-label":"decrease minute",name:Ml.MINUTE_DOWN,tabIndex:-1,onClick:D,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(xl,{children:[t(_l,Object.assign({checked:y===es.AM,name:Al.AM,type:"radio",onChange:O,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(_l,Object.assign({checked:y===es.PM,name:Al.PM,type:"radio",onChange:O,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(wl,{children:[t(Ol,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":M("cancel-button")},{children:"Cancel"})),t(Ol,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?ts.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))};y.div`
    position: relative;
`;const Cl=y(Fr)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,Il=r=>{var{id:n,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:u,format:d="24hr",onChange:h,onFocus:f,onBlur:g}=r,m=P(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[y,b]=o(!1),v=a();Ls("mousedown",(function(e){i||s||S(e)}),"document"),Ls("keyup",(function(e){if("Tab"===e.code)S(e)}),"document");const $=()=>{i||s||y||(b(!0),f&&f())};const w=()=>{b(!1),g&&g()},S=e=>{v&&!v.current.contains(e.target)&&y&&w()},x=p((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,u]);return e(xr,Object.assign({ref:v,id:n,$readOnly:s,$disabled:i,$error:l},m,{children:[t(Cl,{onFocus:$,focused:y,readOnly:!0,placeholder:u||x(),value:ts.formatDisplayValue(c,d),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(Hl,{id:n,show:y,value:c,format:d,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))};export{Il as Timepicker};
//# sourceMappingURL=index.js.map
