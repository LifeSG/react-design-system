import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as s,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as g,useMemo as m}from"react";import y,{css as b,keyframes as v}from"styled-components";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as F}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as x}from"react-dom";import{CircleIcon as B}from"@lifesg/react-icons/circle";import{CircleDotIcon as D}from"@lifesg/react-icons/circle-dot";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as O}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";import{ArrowRightIcon as E}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as A}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as H}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as C}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as I}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as T}from"@lifesg/react-icons";function P(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N=Array.isArray,R="object"==typeof z&&z&&z.Object===Object&&z,L="object"==typeof self&&self&&self.Object===Object&&self,V=R||L||Function("return this")(),W=V.Symbol,Y=W,U=Object.prototype,q=U.hasOwnProperty,Q=U.toString,Z=Y?Y.toStringTag:void 0;var G=function(e){var t=q.call(e,Z),r=e[Z];try{e[Z]=void 0;var n=!0}catch(e){}var i=Q.call(e);return n&&(t?e[Z]=r:delete e[Z]),i},X=Object.prototype.toString;var J=G,K=function(e){return X.call(e)},ee=W?W.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?J(e):K(e)};var re=te,ne=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==re(e)},oe=N,ae=ie,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var ce=function(e,t){if(oe(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ae(e))||(le.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},de=te,he=ue;var fe,pe=function(e){if(!he(e))return!1;var t=de(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ge=V["__core-js_shared__"],me=(fe=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||""))?"Symbol(src)_1."+fe:"";var ye=function(e){return!!me&&me in e},be=Function.prototype.toString;var ve=pe,$e=ye,we=ue,Fe=function(e){if(null!=e){try{return be.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Se=/^\[object .+?Constructor\]$/,xe=Function.prototype,Be=Object.prototype,De=xe.toString,ke=Be.hasOwnProperty,_e=RegExp("^"+De.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Oe=function(e){return!(!we(e)||$e(e))&&(ve(e)?_e:Se).test(Fe(e))},Me=function(e,t){return null==e?void 0:e[t]};var Ee=function(e,t){var r=Me(e,t);return Oe(r)?r:void 0},Ae=Ee(Object,"create"),He=Ae;var Ce=function(){this.__data__=He?He(null):{},this.size=0};var Ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Te=Ae,Pe=Object.prototype.hasOwnProperty;var ze=function(e){var t=this.__data__;if(Te){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Pe.call(t,e)?t[e]:void 0},je=Ae,Ne=Object.prototype.hasOwnProperty;var Re=Ae;var Le=Ce,Ve=Ie,We=ze,Ye=function(e){var t=this.__data__;return je?void 0!==t[e]:Ne.call(t,e)},Ue=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Re&&void 0===t?"__lodash_hash_undefined__":t,this};function qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}qe.prototype.clear=Le,qe.prototype.delete=Ve,qe.prototype.get=We,qe.prototype.has=Ye,qe.prototype.set=Ue;var Qe=qe;var Ze=function(){this.__data__=[],this.size=0};var Ge=function(e,t){return e===t||e!=e&&t!=t};var Xe=function(e,t){for(var r=e.length;r--;)if(Ge(e[r][0],t))return r;return-1},Je=Xe,Ke=Array.prototype.splice;var et=Xe;var tt=Xe;var rt=Xe;var nt=Ze,it=function(e){var t=this.__data__,r=Je(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ke.call(t,r,1),--this.size,!0)},ot=function(e){var t=this.__data__,r=et(t,e);return r<0?void 0:t[r][1]},at=function(e){return tt(this.__data__,e)>-1},st=function(e,t){var r=this.__data__,n=rt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lt.prototype.clear=nt,lt.prototype.delete=it,lt.prototype.get=ot,lt.prototype.has=at,lt.prototype.set=st;var ct=lt,ut=Ee(V,"Map"),dt=Qe,ht=ct,ft=ut;var pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var gt=function(e,t){var r=e.__data__;return pt(t)?r["string"==typeof t?"string":"hash"]:r.map},mt=gt;var yt=gt;var bt=gt;var vt=gt;var $t=function(){this.size=0,this.__data__={hash:new dt,map:new(ft||ht),string:new dt}},wt=function(e){var t=mt(this,e).delete(e);return this.size-=t?1:0,t},Ft=function(e){return yt(this,e).get(e)},St=function(e){return bt(this,e).has(e)},xt=function(e,t){var r=vt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Bt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Bt.prototype.clear=$t,Bt.prototype.delete=wt,Bt.prototype.get=Ft,Bt.prototype.has=St,Bt.prototype.set=xt;var Dt=Bt;function kt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(kt.Cache||Dt),r}kt.Cache=Dt;var _t=kt;var Ot=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mt=/\\(\\)?/g,Et=function(e){var t=_t(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ot,(function(e,r,n,i){t.push(n?i.replace(Mt,"$1"):r||e)})),t}));var At=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ht=N,Ct=ie,It=W?W.prototype:void 0,Tt=It?It.toString:void 0;var Pt=function e(t){if("string"==typeof t)return t;if(Ht(t))return At(t,e)+"";if(Ct(t))return Tt?Tt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},zt=Pt;var jt=N,Nt=ce,Rt=Et,Lt=function(e){return null==e?"":zt(e)};var Vt=ie;var Wt=function(e,t){return jt(e)?e:Nt(e,t)?[e]:Rt(Lt(e))},Yt=function(e){if("string"==typeof e||Vt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ut=function(e,t){for(var r=0,n=(t=Wt(t,e)).length;null!=e&&r<n;)e=e[Yt(t[r++])];return r&&r==n?e:void 0};var qt=j((function(e,t,r){var n=null==e?void 0:Ut(e,t);return void 0===n?r:n}));const Qt=(e,t,r)=>t?qt(r,t)||qt(e,t):r||e,Zt=(e,t)=>{const r=t||e.defaultValue;return qt(e.collections,r)};var Gt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Gt||(Gt={}));const Xt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jt=e=>t=>{const r=t.theme,n=Zt(Xt,r[Gt.colorScheme]);return r.options&&r.options.color?Qt(n,e,r.options.color):Qt(n,e)},Kt={Brand:{1:Jt("Brand.1"),2:Jt("Brand.2"),3:Jt("Brand.3"),4:Jt("Brand.4"),5:Jt("Brand.5"),6:Jt("Brand.6")},Primary:Jt("Primary"),PrimaryDark:Jt("PrimaryDark"),Secondary:Jt("Secondary"),Accent:{Light:{1:Jt("Accent.Light.1"),2:Jt("Accent.Light.2"),3:Jt("Accent.Light.3"),4:Jt("Accent.Light.4"),5:Jt("Accent.Light.5"),6:Jt("Accent.Light.6")},Dark:{1:Jt("Accent.Dark.1"),2:Jt("Accent.Dark.2"),3:Jt("Accent.Dark.3")}},Neutral:{1:Jt("Neutral.1"),2:Jt("Neutral.2"),3:Jt("Neutral.3"),4:Jt("Neutral.4"),5:Jt("Neutral.5"),6:Jt("Neutral.6"),7:Jt("Neutral.7"),8:Jt("Neutral.8")},Validation:{Green:{Text:Jt("Validation.Green.Text"),Icon:Jt("Validation.Green.Icon"),Border:Jt("Validation.Green.Border"),Background:Jt("Validation.Green.Background")},Orange:{Text:Jt("Validation.Orange.Text"),Icon:Jt("Validation.Orange.Icon"),Border:Jt("Validation.Orange.Border"),Background:Jt("Validation.Orange.Background"),Badge:Jt("Validation.Orange.Badge")},Red:{Text:Jt("Validation.Red.Text"),Icon:Jt("Validation.Red.Icon"),Border:Jt("Validation.Red.Border"),Background:Jt("Validation.Red.Background")},Blue:{Text:Jt("Validation.Blue.Text"),Icon:Jt("Validation.Blue.Icon"),Border:Jt("Validation.Blue.Border"),Background:Jt("Validation.Blue.Background")}},Shadow:{Accent:Jt("Shadow.Accent"),Red:Jt("Shadow.Red"),Elevation:Jt("Shadow.Elevation")}},er={collections:{base:{InputBoxShadow:b`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},tr=e=>t=>{var r;const n=t.theme,i=Zt(er,n[Gt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Qt(i,e,n.options.designToken):Qt(i,e)},rr={InputBoxShadow:tr("InputBoxShadow"),InputErrorBoxShadow:tr("InputErrorBoxShadow"),ElevationBoxShadow:tr("ElevationBoxShadow"),Table:{Header:tr("Table.Header"),Cell:{Primary:tr("Table.Cell.Primary"),Secondary:tr("Table.Cell.Secondary"),Selected:tr("Table.Cell.Selected"),Hover:tr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:tr("Button.Danger.BackgroundColor"),Hover:tr("Button.Danger.Hover"),Primary:tr("Button.Danger.Primary"),Border:tr("Button.Danger.Border")}}},nr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ir={collections:{base:{D1:{fontFamily:nr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:nr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:nr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:nr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:nr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:nr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:nr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:nr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:nr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:nr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:nr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:nr.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:nr.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:nr.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:nr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:nr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:nr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:nr.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:nr.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:nr.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:nr.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},or=e=>t=>{const r=t.theme,n=Zt(ir,r[Gt.textStyleScheme]);return r.options&&r.options.textStyle?Qt(n,e,r.options.textStyle):Qt(n,e)},ar={D1:{fontFamily:or("D1.fontFamily"),fontSize:or("D1.fontSize"),fontWeight:or("D1.fontWeight"),lineHeight:or("D1.lineHeight"),letterSpacing:or("D1.letterSpacing")},D2:{fontFamily:or("D2.fontFamily"),fontSize:or("D2.fontSize"),fontWeight:or("D2.fontWeight"),lineHeight:or("D2.lineHeight"),letterSpacing:or("D2.letterSpacing")},D3:{fontFamily:or("D3.fontFamily"),fontSize:or("D3.fontSize"),fontWeight:or("D3.fontWeight"),lineHeight:or("D3.lineHeight"),letterSpacing:or("D3.letterSpacing")},D4:{fontFamily:or("D4.fontFamily"),fontSize:or("D4.fontSize"),fontWeight:or("D4.fontWeight"),lineHeight:or("D4.lineHeight"),letterSpacing:or("D4.letterSpacing")},DBody:{fontFamily:or("DBody.fontFamily"),fontSize:or("DBody.fontSize"),fontWeight:or("DBody.fontWeight"),lineHeight:or("DBody.lineHeight"),letterSpacing:or("DBody.letterSpacing")},H1:{fontFamily:or("H1.fontFamily"),fontSize:or("H1.fontSize"),fontWeight:or("H1.fontWeight"),lineHeight:or("H1.lineHeight"),letterSpacing:or("H1.letterSpacing")},H2:{fontFamily:or("H2.fontFamily"),fontSize:or("H2.fontSize"),fontWeight:or("H2.fontWeight"),lineHeight:or("H2.lineHeight"),letterSpacing:or("H2.letterSpacing")},H3:{fontFamily:or("H3.fontFamily"),fontSize:or("H3.fontSize"),fontWeight:or("H3.fontWeight"),lineHeight:or("H3.lineHeight"),letterSpacing:or("H3.letterSpacing")},H4:{fontFamily:or("H4.fontFamily"),fontSize:or("H4.fontSize"),fontWeight:or("H4.fontWeight"),lineHeight:or("H4.lineHeight"),letterSpacing:or("H4.letterSpacing")},H5:{fontFamily:or("H5.fontFamily"),fontSize:or("H5.fontSize"),fontWeight:or("H5.fontWeight"),lineHeight:or("H5.lineHeight"),letterSpacing:or("H5.letterSpacing")},H6:{fontFamily:or("H6.fontFamily"),fontSize:or("H6.fontSize"),fontWeight:or("H6.fontWeight"),lineHeight:or("H6.lineHeight"),letterSpacing:or("H6.letterSpacing")},Body:{fontFamily:or("Body.fontFamily"),fontSize:or("Body.fontSize"),fontWeight:or("Body.fontWeight"),lineHeight:or("Body.lineHeight"),letterSpacing:or("Body.letterSpacing")},BodySmall:{fontFamily:or("BodySmall.fontFamily"),fontSize:or("BodySmall.fontSize"),fontWeight:or("BodySmall.fontWeight"),lineHeight:or("BodySmall.lineHeight"),letterSpacing:or("BodySmall.letterSpacing")},XSmall:{fontFamily:or("XSmall.fontFamily"),fontSize:or("XSmall.fontSize"),fontWeight:or("XSmall.fontWeight"),lineHeight:or("XSmall.lineHeight"),letterSpacing:or("XSmall.letterSpacing")}},sr=e=>{switch(e){case 700:case"bold":return nr.Bold;case 600:case"semibold":return nr.Semibold;case 300:case"light":return nr.Light;case 400:case"regular":return nr.Regular;default:return""}},lr=(e,t)=>r=>{var n;const i=ar[e].fontFamily(r),o=ar[e].fontWeight(r);return Object.values(nr).includes(i)?b`
                font-family: ${sr(t)||sr(o)||i};
                font-weight: normal !important;
            `:b`
            font-family: ${i};
            font-weight: ${null!==(n=cr(t)||o)&&void 0!==n?n:"normal"};
        `},cr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ur=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},dr=lr,hr=(e,t,r=!1)=>n=>{const i=ar[e],o=i.fontSize(n);return b`
            ${lr(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${b`
                margin-bottom: ${o*(r?1.05:0)}rem;
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
`,yr=r=>{var{external:n=!1,children:i}=r,o=P(r,["external","children"]);return e(gr,Object.assign({},o,{children:[i,n&&t(mr,{})]}))};var br;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(br||(br={}));const vr=b`
    border: 1px solid ${Kt.Accent.Light[1]};
    box-shadow: ${rr.InputBoxShadow};
`,$r=b`
    border: 1px solid ${Kt.Accent.Light[1]};
    box-shadow: none;
`,wr=b`
    border: 1px solid ${Kt.Neutral[5]};
    box-shadow: none;
`,Fr=b`
    border: 1px solid ${Kt.Validation.Red.Border};
    box-shadow: ${rr.InputErrorBoxShadow};
`,Sr=y.div`
    border: 1px solid ${Kt.Neutral[5]};
    border-radius: 4px;
    background: ${Kt.Neutral[8]};

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
                    ${Fr}
                }
                ${e.$focused&&Fr}
            `:void 0}
`,xr=y(Sr)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Br=y.input`
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
`;y.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Kt.Primary};
    }
`;var Dr=function(e,t){return Dr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},Dr(e,t)};var kr=function(){return kr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},kr.apply(this,arguments)};var _r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Or=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Mr="object"==typeof _r&&_r&&_r.Object===Object&&_r,Er="object"==typeof self&&self&&self.Object===Object&&self,Ar=Mr||Er||Function("return this")(),Hr=Ar,Cr=function(){return Hr.Date.now()},Ir=/\s/;var Tr=function(e){for(var t=e.length;t--&&Ir.test(e.charAt(t)););return t},Pr=/^\s+/;var zr=function(e){return e?e.slice(0,Tr(e)+1).replace(Pr,""):e},jr=Ar.Symbol,Nr=jr,Rr=Object.prototype,Lr=Rr.hasOwnProperty,Vr=Rr.toString,Wr=Nr?Nr.toStringTag:void 0;var Yr=function(e){var t=Lr.call(e,Wr),r=e[Wr];try{e[Wr]=void 0;var n=!0}catch(e){}var i=Vr.call(e);return n&&(t?e[Wr]=r:delete e[Wr]),i},Ur=Object.prototype.toString;var qr=Yr,Qr=function(e){return Ur.call(e)},Zr=jr?jr.toStringTag:void 0;var Gr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Zr&&Zr in Object(e)?qr(e):Qr(e)},Xr=function(e){return null!=e&&"object"==typeof e};var Jr=zr,Kr=Or,en=function(e){return"symbol"==typeof e||Xr(e)&&"[object Symbol]"==Gr(e)},tn=/^[-+]0x[0-9a-f]+$/i,rn=/^0b[01]+$/i,nn=/^0o[0-7]+$/i,on=parseInt;var an=Or,sn=Cr,ln=function(e){if("number"==typeof e)return e;if(en(e))return NaN;if(Kr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Kr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Jr(e);var r=rn.test(e);return r||nn.test(e)?on(e.slice(2),r?2:8):tn.test(e)?NaN:+e},cn=Math.max,un=Math.min;var dn=function(e,t,r){var n,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=o}function g(){var e=sn();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return d?un(r,o-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=i=void 0,a)}function y(){var e=sn(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=ln(t)||0,an(r)&&(u=!!r.leading,o=(d="maxWait"in r)?cn(ln(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(sn())},y},hn=dn,fn=Or;var pn=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return fn(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),hn(e,t,{leading:n,maxWait:t,trailing:i})},gn=function(e,t,r,n){switch(t){case"debounce":return dn(e,r,n);case"throttle":return pn(e,r,n);default:return e}},mn=function(e){return"function"==typeof e},yn=function(){return"undefined"==typeof window},bn=function(e){return e instanceof Element||e instanceof HTMLDocument},vn=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&mn(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!yn()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(yn())return null;if(t)return document.querySelector(t);if(n&&bn(n))return n;if(r.targetRef&&bn(r.targetRef.current))return r.targetRef.current;var i=S(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=vn(s,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!yn()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return mn(t)?"renderProp":mn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,c=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,yn()||(r.resizeHandler=gn(r.createResizeHandler,i,a,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}Dr(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){yn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var $n=yn()?d:h;function wn(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=o(r),y=o(null),b=null!=f?f:y,v=o(),$=a({width:void 0,height:void 0}),w=$[0],F=$[1];return $n((function(){if(!yn()){var e=vn(g,F,u,h);v.current=gn((function(t){(u||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!yn()&&e({width:n,height:i}),m.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,u,h,g,p,b.current]),kr({ref:b},w)}var Fn=Object.defineProperty,Sn={};((e,t)=>{for(var r in t)Fn(e,r,{get:t[r],enumerable:!0})})(Sn,{assign:()=>ri,colors:()=>Kn,createStringInterpolator:()=>Zn,skipAnimation:()=>ei,to:()=>Gn,willAdvance:()=>ti});var xn=Nn(),Bn=e=>Tn(e,xn),Dn=Nn();Bn.write=e=>Tn(e,Dn);var kn=Nn();Bn.onStart=e=>Tn(e,kn);var _n=Nn();Bn.onFrame=e=>Tn(e,_n);var On=Nn();Bn.onFinish=e=>Tn(e,On);var Mn=[];Bn.setTimeout=(e,t)=>{const r=Bn.now()+t,n=()=>{const e=Mn.findIndex((e=>e.cancel==n));~e&&Mn.splice(e,1),Cn-=~e?1:0},i={time:r,handler:e,cancel:n};return Mn.splice(En(r),0,i),Cn+=1,Pn(),i};var En=e=>~(~Mn.findIndex((t=>t.time>e))||~Mn.length);Bn.cancel=e=>{kn.delete(e),_n.delete(e),On.delete(e),xn.delete(e),Dn.delete(e)},Bn.sync=e=>{In=!0,Bn.batchedUpdates(e),In=!1},Bn.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Bn.onStart(r)}return n.handler=e,n.cancel=()=>{kn.delete(r),t=null},n};var An="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Bn.use=e=>An=e,Bn.now="undefined"!=typeof performance?()=>performance.now():Date.now,Bn.batchedUpdates=e=>e(),Bn.catch=console.error,Bn.frameLoop="always",Bn.advance=()=>{"demand"!==Bn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):jn()};var Hn=-1,Cn=0,In=!1;function Tn(e,t){In?(t.delete(e),e(0)):(t.add(e),Pn())}function Pn(){Hn<0&&(Hn=0,"demand"!==Bn.frameLoop&&An(zn))}function zn(){~Hn&&(An(zn),Bn.batchedUpdates(jn))}function jn(){const e=Hn;Hn=Bn.now();const t=En(Hn);t&&(Rn(Mn.splice(0,t),(e=>e.handler())),Cn-=t),Cn?(kn.flush(),xn.flush(e?Math.min(64,Hn-e):16.667),_n.flush(),Dn.flush(),On.flush()):Hn=-1}function Nn(){let e=new Set,t=e;return{add(r){Cn+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Cn-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Cn-=t.size,Rn(t,(t=>t(r)&&e.add(t))),Cn+=e.size,t=e)}}}function Rn(e,t){e.forEach((e=>{try{t(e)}catch(e){Bn.catch(e)}}))}function Ln(){}var Vn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Wn(e,t){if(Vn.arr(e)){if(!Vn.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Yn=(e,t)=>e.forEach(t);function Un(e,t,r){if(Vn.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var qn=e=>Vn.und(e)?[]:Vn.arr(e)?e:[e];function Qn(e,t){if(e.size){const r=Array.from(e);e.clear(),Yn(r,t)}}var Zn,Gn,Xn=(e,...t)=>Qn(e,(e=>e(...t))),Jn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Kn=null,ei=!1,ti=Ln,ri=e=>{e.to&&(Gn=e.to),e.now&&(Bn.now=e.now),void 0!==e.colors&&(Kn=e.colors),null!=e.skipAnimation&&(ei=e.skipAnimation),e.createStringInterpolator&&(Zn=e.createStringInterpolator),e.requestAnimationFrame&&Bn.use(e.requestAnimationFrame),e.batchedUpdates&&(Bn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ti=e.willAdvance),e.frameLoop&&(Bn.frameLoop=e.frameLoop)},ni=new Set,ii=[],oi=[],ai=0,si={get idle(){return!ni.size&&!ii.length},start(e){ai>e.priority?(ni.add(e),Bn.onStart(li)):(ci(e),Bn(di))},advance:di,sort(e){if(ai)Bn.onFrame((()=>si.sort(e)));else{const t=ii.indexOf(e);~t&&(ii.splice(t,1),ui(e))}},clear(){ii=[],ni.clear()}};function li(){ni.forEach(ci),ni.clear(),Bn(di)}function ci(e){ii.includes(e)||ui(e)}function ui(e){ii.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ii,(t=>t.priority>e.priority)),0,e)}function di(e){const t=oi;for(let r=0;r<ii.length;r++){const n=ii[r];ai=n.priority,n.idle||(ti(n),n.advance(e),n.idle||t.push(n))}return ai=0,(oi=ii).length=0,(ii=t).length>0}var hi="[-+]?\\d*\\.?\\d+",fi=hi+"%";function pi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var gi=new RegExp("rgb"+pi(hi,hi,hi)),mi=new RegExp("rgba"+pi(hi,hi,hi,hi)),yi=new RegExp("hsl"+pi(hi,fi,fi)),bi=new RegExp("hsla"+pi(hi,fi,fi,hi)),vi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,$i=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wi=/^#([0-9a-fA-F]{6})$/,Fi=/^#([0-9a-fA-F]{8})$/;function Si(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function xi(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Si(i,n,e+1/3),a=Si(i,n,e),s=Si(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Bi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Di(e){return(parseFloat(e)%360+360)%360/360}function ki(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function _i(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Oi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=wi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Kn&&void 0!==Kn[e]?Kn[e]:(t=gi.exec(e))?(Bi(t[1])<<24|Bi(t[2])<<16|Bi(t[3])<<8|255)>>>0:(t=mi.exec(e))?(Bi(t[1])<<24|Bi(t[2])<<16|Bi(t[3])<<8|ki(t[4]))>>>0:(t=vi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Fi.exec(e))?parseInt(t[1],16)>>>0:(t=$i.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=yi.exec(e))?(255|xi(Di(t[1]),_i(t[2]),_i(t[3])))>>>0:(t=bi.exec(e))?(xi(Di(t[1]),_i(t[2]),_i(t[3]))|ki(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Mi=(e,t,r)=>{if(Vn.fun(e))return e;if(Vn.arr(e))return Mi({range:e,output:t,extrapolate:r});if(Vn.str(e.output[0]))return Zn(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var Ei=1.70158,Ai=1.525*Ei,Hi=Ei+1,Ci=2*Math.PI/3,Ii=2*Math.PI/4.5,Ti=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Pi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Hi*e*e*e-Ei*e*e,easeOutBack:e=>1+Hi*Math.pow(e-1,3)+Ei*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ai)/2:(Math.pow(2*e-2,2)*((Ai+1)*(2*e-2)+Ai)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ci),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ci)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Ii)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Ii)/2+1,easeInBounce:e=>1-Ti(1-e),easeOutBounce:Ti,easeInOutBounce:e=>e<.5?(1-Ti(1-2*e))/2:(1+Ti(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},zi=Symbol.for("FluidValue.get"),ji=Symbol.for("FluidValue.observers"),Ni=e=>Boolean(e&&e[zi]),Ri=e=>e&&e[zi]?e[zi]():e,Li=e=>e[ji]||null;function Vi(e,t){const r=e[ji];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Wi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Yi(this,e)}},Yi=(e,t)=>Zi(e,zi,t);function Ui(e,t){if(e[zi]){let r=e[ji];r||Zi(e,ji,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function qi(e,t){const r=e[ji];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[ji]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Qi,Zi=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Gi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Xi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ji=new RegExp(`(${Gi.source})(%|[a-z]+)`,"i"),Ki=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,eo=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,to=e=>{const[t,r]=ro(e);if(!t||Jn())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&eo.test(r)?to(r):r||e},ro=e=>{const t=eo.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},no=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,io=e=>{Qi||(Qi=Kn?new RegExp(`(${Object.keys(Kn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ri(e).replace(eo,to).replace(Xi,Oi).replace(Qi,Oi))),r=t.map((e=>e.match(Gi).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Mi({...e,output:t})));return e=>{const r=!Ji.test(t[0])&&t.find((e=>Ji.test(e)))?.replace(Gi,"");let i=0;return t[0].replace(Gi,(()=>`${n[i++](e)}${r||""}`)).replace(Ki,no)}},oo="react-spring: ",ao=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${oo}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},so=ao(console.warn);var lo=ao(console.warn);function co(e){return Vn.str(e)&&("#"==e[0]||/\d/.test(e)||!Jn()&&eo.test(e)||e in(Kn||{}))}var uo=Jn()?d:h,ho=()=>{const e=o(!1);return uo((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function fo(){const e=a()[1],t=ho();return()=>{t.current&&e(Math.random())}}var po=e=>d(e,go),go=[];function mo(e){const t=o();return d((()=>{t.current=e})),t.current}var yo=Symbol.for("Animated:node"),bo=e=>e&&e[yo],vo=(e,t)=>{return r=e,n=yo,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},$o=e=>e&&e[yo]&&e[yo].getPayload(),wo=class{constructor(){vo(this,this)}getPayload(){return this.payload||[]}},Fo=class extends wo{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Vn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Fo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Vn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Vn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},So=class extends Fo{constructor(e){super(0),this._string=null,this._toString=Mi({output:[e,e]})}static create(e){return new So(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Vn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Mi({output:[this.getValue(),e]})),this._value=0,super.reset()}},xo={dependencies:null},Bo=class extends wo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Un(this.source,((r,n)=>{var i;(i=r)&&i[yo]===i?t[n]=r.getValue(e):Ni(r)?t[n]=Ri(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Yn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Un(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){xo.dependencies&&Ni(e)&&xo.dependencies.add(e);const t=$o(e);t&&Yn(t,(e=>this.add(e)))}},Do=class extends Bo{constructor(e){super(e)}static create(e){return new Do(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(ko)),!0)}};function ko(e){return(co(e)?So:Fo).create(e)}function _o(e){const t=bo(e);return t?t.constructor:Vn.arr(e)?Do:co(e)?So:Fo}var Oo=(e,t)=>{const r=!Vn.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,a)=>{const s=o(null),l=r&&p((e=>{s.current=function(e,t){e&&(Vn.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const r=new Set;xo.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Bo(e),xo.dependencies=null,[e,r]}(i,t),h=fo(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},g=new Mo(f,u),m=o();uo((()=>(m.current=g,Yn(u,(e=>Ui(e,g))),()=>{m.current&&(Yn(m.current.deps,(e=>qi(e,m.current))),Bn.cancel(m.current.update))}))),d(f,[]),po((()=>()=>{const e=m.current;Yn(e.deps,(t=>qi(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,{...y,ref:l})}))},Mo=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Bn.write(this.update)}};var Eo=Symbol.for("AnimatedComponent"),Ao=e=>Vn.str(e)?e:e&&Vn.str(e.displayName)?e.displayName:Vn.fun(e)&&e.name||null;function Ho(e,...t){return Vn.fun(e)?e(...t):e}var Co=(e,t)=>!0===e||!!(t&&e&&(Vn.fun(e)?e(t):qn(e).includes(t))),Io=(e,t)=>Vn.obj(e)?t&&e[t]:e,To=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Po=e=>e,zo=(e,t=Po)=>{let r=jo;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Vn.und(r)||(n[i]=r)}return n},jo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],No={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ro(e){const t=function(e){const t={};let r=0;if(Un(e,((e,n)=>{No[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Un(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Lo(e){return e=Ri(e),Vn.arr(e)?e.map(Lo):co(e)?Sn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Vo(e){return Vn.fun(e)||Vn.arr(e)&&Vn.obj(e[0])}var Wo={tension:170,friction:26,mass:1,damping:1,easing:Pi.linear,clamp:!1},Yo=class{constructor(){this.velocity=0,Object.assign(this,Wo)}};function Uo(e,t){if(Vn.und(t.decay)){const r=!Vn.und(t.tension)||!Vn.und(t.friction);!r&&Vn.und(t.frequency)&&Vn.und(t.damping)&&Vn.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var qo=[],Qo=class{constructor(){this.changed=!1,this.values=qo,this.toValues=null,this.fromValues=qo,this.config=new Yo,this.immediate=!1}};function Zo(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,u=Co(r.cancel??n?.cancel,t);if(u)f();else{Vn.und(r.pause)||(i.paused=Co(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Co(e,t)),l=Ho(r.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-Bn.now()}function h(){l>0&&!Sn.skipAnimation?(i.delayed=!0,c=Bn.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{o.start({...r,callId:e,cancel:u},a)}catch(e){s(e)}}}))}var Go=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Ko(e.get()):t.every((e=>e.noop))?Xo(e.get()):Jo(e.get(),t.every((e=>e.finished))),Xo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Jo=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),Ko=e=>({value:e,cancelled:!0,finished:!1});function ea(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=zo(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&Ko(n)||i!==r.asyncId&&Jo(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new ra,a=new na;return(async()=>{if(Sn.skipAnimation)throw ta(r),a.result=Jo(n,!1),d(a),a;f(o);const s=Vn.obj(e)?{...e}:{...t,to:e};s.parentId=i,Un(c,((e,t)=>{Vn.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Sn.skipAnimation)return ta(r),Jo(n,!1);try{let t;t=Vn.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),g=Jo(n.get(),!0,!1)}catch(e){if(e instanceof ra)g=e.result;else{if(!(e instanceof na))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Vn.fun(a)&&Bn.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function ta(e,t){Qn(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ra=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},na=class extends Error{constructor(){super("SkipAnimationSignal")}},ia=e=>e instanceof aa,oa=1,aa=class extends Wi{constructor(){super(...arguments),this.id=oa++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=bo(this);return e&&e.getValue()}to(...e){return Sn.to(this,e)}interpolate(...e){return so(`${oo}The "interpolate" function is deprecated in v9 (use "to" instead)`),Sn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Vi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||si.sort(this),Vi(this,{type:"priority",parent:this,priority:e})}},sa=Symbol.for("SpringPhase"),la=e=>(1&e[sa])>0,ca=e=>(2&e[sa])>0,ua=e=>(4&e[sa])>0,da=(e,t)=>t?e[sa]|=3:e[sa]&=-3,ha=(e,t)=>t?e[sa]|=4:e[sa]&=-5,fa=class extends aa{constructor(e,t){if(super(),this.animation=new Qo,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Vn.und(e)||!Vn.und(t)){const r=Vn.obj(e)?{...e}:{...t,from:e};Vn.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(ca(this)||this._state.asyncTo)||ua(this)}get goal(){return Ri(this.animation.to)}get velocity(){const e=bo(this);return e instanceof Fo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return la(this)}get isAnimating(){return ca(this)}get isPaused(){return ua(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=$o(n.to);!a&&Ni(n.to)&&(i=qn(Ri(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==So?1:a?a[l].lastPosition:i[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Vn.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Vn.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,n=o.clamp?0:o.bounce,l=!Vn.und(n),f=r==c?s.v0>0:r<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(a=-a*n,d=c));a+=(1e-6*-o.tension*(d-c)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+o.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,o.round)&&(r=!0)}));const s=bo(this),l=s.getValue();if(t){const e=Ri(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Bn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(ca(this)){const{to:e,config:t}=this.animation;Bn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Vn.und(e)?(r=this.queue||[],this.queue=[]):r=[Vn.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Go(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ta(this._state,e&&this._lastCallId),Bn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Vn.obj(r)?r[t]:r,(null==r||Vo(r))&&(r=void 0),n=Vn.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return la(this)||(e.reverse&&([r,n]=[n,r]),n=Ri(n),Vn.und(n)?bo(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,zo(e,((e,t)=>/^on/.test(t)?Io(e,r):e))),$a(this,e,"onProps"),wa(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Zo(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{ua(this)||(ha(this,!0),Xn(o.pauseQueue),wa(this,"onPause",Jo(this,pa(this,this.animation.to)),this))},resume:()=>{ua(this)&&(ha(this,!1),ca(this)&&this._resume(),Xn(o.resumeQueue),wa(this,"onResume",Jo(this,pa(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=ga(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(Ko(this));const n=!Vn.und(e.to),i=!Vn.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(Ko(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Vn.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Wn(d,c);h&&(s.from=d),d=Ri(d);const f=!Wn(u,l);f&&this._focus(u);const p=Vo(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Uo(r={...r},t),t={...r,...t}),Uo(e,t),Object.assign(e,t);for(const t in Wo)null==e[t]&&(e[t]=Wo[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;Vn.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,Ho(t.config,o),t.config!==a.config?Ho(a.config,o):void 0);let b=bo(this);if(!b||Vn.und(u))return r(Jo(this,!0));const v=Vn.und(t.reset)?i&&!t.default:!Vn.und(d)&&Co(t.reset,o),$=v?d:this.get(),w=Lo(u),F=Vn.num(w)||Vn.arr(w)||co(w),S=!p&&(!F||Co(a.immediate||t.immediate,o));if(f){const e=_o(u);if(e!==b.constructor){if(!S)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const x=b.constructor;let B=Ni(u),D=!1;if(!B){const e=v||!la(this)&&h;(f||e)&&(D=Wn(Lo($),w),B=!D),(Wn(s.immediate,S)||S)&&Wn(g.decay,m)&&Wn(g.velocity,y)||(B=!0)}if(D&&ca(this)&&(s.changed&&!v?B=!0:B||this._stop(l)),!p&&((B||Ni(l))&&(s.values=b.getPayload(),s.toValues=Ni(u)?null:x==So?[1]:qn(w)),s.immediate!=S&&(s.immediate=S,S||v||this._set(l)),B)){const{onRest:e}=s;Yn(va,(e=>$a(this,t,e)));const n=Jo(this,pa(this,l));Xn(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Bn.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?Ho(a.onRest,n):s.onStart?.(n,this)}))}v&&this._set($),p?r(ea(t.to,t,this._state,this)):B?this._start():ca(this)&&!f?this._pendingCalls.add(r):r(Xo($))}_focus(e){const t=this.animation;e!==t.to&&(Li(this)&&this._detach(),t.to=e,Li(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ni(t)&&(Ui(t,this),ia(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ni(e)&&qi(e,this)}_set(e,t=!0){const r=Ri(e);if(!Vn.und(r)){const e=bo(this);if(!e||!Wn(r,e.getValue())){const n=_o(r);e&&e.constructor==n?e.setValue(r):vo(this,n.create(r)),e&&Bn.batchedUpdates((()=>{this._onChange(r,t)}))}}return bo(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,wa(this,"onStart",Jo(this,pa(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ho(this.animation.onChange,e,this)),Ho(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;bo(this).reset(Ri(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),ca(this)||(da(this,!0),ua(this)||this._resume())}_resume(){Sn.skipAnimation?this.finish():si.start(this)}_stop(e,t){if(ca(this)){da(this,!1);const r=this.animation;Yn(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Vi(this,{type:"idle",parent:this});const n=t?Ko(this.get()):Jo(this.get(),pa(this,e??r.to));Xn(this._pendingCalls,n),r.changed&&(r.changed=!1,wa(this,"onRest",n,this))}}};function pa(e,t){const r=Lo(t);return Wn(Lo(e.get()),r)}function ga(e,t=e.loop,r=e.to){const n=Ho(t);if(n){const i=!0!==n&&Ro(n),o=(i||e).reverse,a=!i||i.reset;return ma({...e,loop:t,default:!1,pause:void 0,to:!o||Vo(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function ma(e){const{to:t,from:r}=e=Ro(e),n=new Set;return Vn.obj(t)&&ba(t,n),Vn.obj(r)&&ba(r,n),e.keys=n.size?Array.from(n):null,e}function ya(e){const t=ma(e);return Vn.und(t.default)&&(t.default=zo(t)),t}function ba(e,t){Un(e,((e,r)=>null!=e&&t.add(r)))}var va=["onStart","onRest","onChange","onPause","onResume"];function $a(e,t,r){e.animation[r]=t[r]!==To(t,r)?Io(t[r],e.key):void 0}function wa(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Fa=["onStart","onChange","onRest"],Sa=1,xa=class{constructor(e,t){this.id=Sa++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Vn.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ma(e)),this}start(e){let{queue:t}=this;return e?t=qn(e).map(ma):this.queue=[],this._flush?this._flush(this,t):(Ea(this,t),Ba(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Yn(qn(t),(t=>r[t].stop(!!e)))}else ta(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Vn.und(e))this.start({pause:!0});else{const t=this.springs;Yn(qn(e),(e=>t[e].pause()))}return this}resume(e){if(Vn.und(e))this.start({pause:!1});else{const t=this.springs;Yn(qn(e),(e=>t[e].resume()))}return this}each(e){Un(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,Qn(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&Qn(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Qn(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Bn.onFrame(this._onFrame)}};function Ba(e,t){return Promise.all(t.map((t=>Da(e,t)))).then((t=>Go(e,t)))}async function Da(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Vn.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Vn.arr(i)||Vn.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Yn(Fa,(r=>{const n=t[r];if(Vn.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Xn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===To(t,"cancel");(u||f&&d.asyncId)&&h.push(Zo(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ln,resume:Ln,start(t,r){f?(ta(d,e._lastAsyncId),r(Ko(e))):(t.onRest=s,r(ea(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Go(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=ga(t,a,i);if(r)return Ea(e,[r]),Da(e,r,!0)}return l&&Bn.batchedUpdates((()=>l(p,e,e.item))),p}function ka(e,t){const r={...e.springs};return t&&Yn(qn(t),(e=>{Vn.und(e.keys)&&(e=ma(e)),Vn.obj(e.to)||(e={...e,to:void 0}),Ma(r,e,(e=>Oa(e)))})),_a(e,r),r}function _a(e,t){Un(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Ui(t,e))}))}function Oa(e,t){const r=new fa;return r.key=e,t&&Ui(r,t),r}function Ma(e,t,r){t.keys&&Yn(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Ea(e,t){Yn(t,(t=>{Ma(e.springs,t,(t=>Oa(t,e)))}))}var Aa,Ha,Ca=({children:e,...t})=>{const r=g(Ia),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=o(),i=n.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return d((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=Ia;return n.createElement(l,{value:t},e)},Ia=(Aa=Ca,Ha={},Object.assign(Aa,n.createContext(Ha)),Aa.Provider._context=Aa,Aa.Consumer._context=Aa,Aa);Ca.Provider=Ia.Provider,Ca.Consumer=Ia.Consumer;var Ta=()=>{const e=[],t=function(t){lo(`${oo}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Yn(e,((e,i)=>{if(Vn.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Yn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Yn(e,(e=>e.resume(...arguments))),this},t.set=function(t){Yn(e,((e,r)=>{const n=Vn.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Yn(e,((e,n)=>{if(Vn.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Yn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Yn(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Vn.fun(e)?e(r,t):e};return t._getProps=r,t};function Pa(e,t){const r=Vn.fun(e),[[n],i]=function(e,t,r){const n=Vn.fun(t)&&t;n&&!r&&(r=[]);const i=m((()=>n||3==arguments.length?Ta():void 0),[]),a=o(0),s=fo(),l=m((()=>({ctrls:[],queue:[],flush(e,t){const r=ka(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Ba(e,t):new Promise((n=>{_a(e,r),l.queue.push((()=>{n(Ba(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],d=mo(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new xa(null,l.flush)),r=n?n(i,e):t[i];r&&(u[i]=ya(r))}}m((()=>{Yn(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),m((()=>{h(0,Math.min(d,e))}),r);const f=c.current.map(((e,t)=>ka(e,u[t]))),p=g(Ca),y=mo(p),b=p!==y&&function(e){for(const t in e)return!0;return!1}(p);uo((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Yn(e,(e=>e()))),Yn(c.current,((e,t)=>{i?.add(e),b&&e.start({default:p});const r=u[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),po((()=>()=>{Yn(l.ctrls,(e=>e.stop(!0)))}));const v=f.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var za=class extends aa{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Mi(...t);const r=this._get(),n=_o(r);vo(this,n.create(r))}advance(e){const t=this._get();Wn(t,this.get())||(bo(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Na(this._active)&&Ra(this)}_get(){const e=Vn.arr(this.source)?this.source.map(Ri):qn(Ri(this.source));return this.calc(...e)}_start(){this.idle&&!Na(this._active)&&(this.idle=!1,Yn($o(this),(e=>{e.done=!1})),Sn.skipAnimation?(Bn.batchedUpdates((()=>this.advance())),Ra(this)):si.start(this))}_attach(){let e=1;Yn(qn(this.source),(t=>{Ni(t)&&Ui(t,this),ia(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Yn(qn(this.source),(e=>{Ni(e)&&qi(e,this)})),this._active.clear(),Ra(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=qn(this.source).reduce(((e,t)=>Math.max(e,(ia(t)?t.priority:0)+1)),0))}};function ja(e){return!1!==e.idle}function Na(e){return!e.size||Array.from(e).every(ja)}function Ra(e){e.idle||(e.idle=!0,Yn($o(e),(e=>{e.done=!0})),Vi(e,{type:"idle",parent:e}))}Sn.assign({createStringInterpolator:io,to:(e,t)=>new za(e,t)});var La=/^--/;function Va(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||La.test(e)||Ya.hasOwnProperty(e)&&Ya[e]?(""+t).trim():t+"px"}var Wa={};var Ya={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ua=["Webkit","Ms","Moz","O"];Ya=Object.keys(Ya).reduce(((e,t)=>(Ua.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ya);var qa=/^(matrix|translate|scale|rotate|skew)/,Qa=/^(translate)/,Za=/^(rotate|skew)/,Ga=(e,t)=>Vn.num(e)&&0!==e?e+t:e,Xa=(e,t)=>Vn.arr(e)?e.every((e=>Xa(e,t))):Vn.num(e)?e===t:parseFloat(e)===t,Ja=class extends Bo{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Ga(e,"px"))).join(",")})`,Xa(e,0)]))),Un(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(qa.test(t)){if(delete n[t],Vn.und(e))return;const r=Qa.test(t)?"px":Za.test(t)?"deg":"";i.push(qn(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Ga(i,r)})`,Xa(i,0)]:e=>[`${t}(${e.map((e=>Ga(e,r))).join(",")})`,Xa(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Ka(i,o)),super(n)}},Ka=class extends Wi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Yn(this.inputs,((r,n)=>{const i=Ri(r[0]),[o,a]=this.transforms[n](Vn.arr(i)?i:r.map(Ri));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Yn(this.inputs,(e=>Yn(e,(e=>Ni(e)&&Ui(e,this)))))}observerRemoved(e){0==e&&Yn(this.inputs,(e=>Yn(e,(e=>Ni(e)&&qi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Vi(this,e)}};Sn.assign({batchedUpdates:x,createStringInterpolator:io,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var es,ts,rs,ns=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Bo(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Ao(e)||"Anonymous";return(e=Vn.str(e)?o[e]||(o[e]=Oo(e,i)):e[Eo]||(e[Eo]=Oo(e,i))).displayName=`Animated(${t})`,e};return Un(e,((t,r)=>{Vn.arr(e)&&(r=Ao(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),u=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Wa[t]||(Wa[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Va(t,n[t]);La.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Ja(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),is=ns.animated;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(es||(es={})),function(e){e.AM="AM",e.PM="PM"}(ts||(ts={})),function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:ts.AM};if(!t)return r;try{if("24hr"===e){const n=ss(t,e);r.minute=es.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=ts.AM,r.hour=0===i?"12":es.padValue(i.toString())):(r.period=ts.PM,r.hour=12===i?i.toString():es.padValue((i-12).toString()))}else{const n=ss(t,e);r.hour=es.padValue(n.hour),r.minute=es.padValue(n.minute),r.period="am"===n.period.toLowerCase()?ts.AM:ts.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?es.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return es.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?es.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?es.padValue(n.toString()):13===n?es.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===ts.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return es.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=ss(e,t),n=es.padValue(r.hour);let i=`${n}:${es.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(rs||(rs={}));const os=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},as=e=>{const t=parseInt(e);return t>=0&&t<=59},ss=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!os(r[0],t)||!as(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!os(r[0],t)||!as(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},ls={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},cs=e=>Object.keys(ls).reduce(((t,r)=>{const n=ls[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),us=cs("max-width"),ds=(cs("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),hs=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,fs=y.div`
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
    animation: ${hs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ps=y(fs)`
    animation-delay: -0.45s;
`,gs=y(fs)`
    animation-delay: -0.3s;
`,ms=y(fs)`
    animation-delay: -0.15s;
`,ys=y.button`
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

                    ${us.mobileL} {
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

                    ${us.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${hr("H4","semibold")}

                    ${us.mobileS} {
                        height: auto;
                    }
                `}
`,bs=y((({color:r,className:n,size:i=18})=>e(ds,Object.assign({className:n,$size:i,$color:r},{children:[t(fs,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(ps,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(gs,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(ms,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?rr.Button.Danger.Primary:Kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Kt.Neutral[3](e);break;default:t=Kt.Neutral[8](e)}return b`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,vs={Default:i.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=P(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(ys,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(bs,Object.assign({},u)),t("span",{children:i})]}))})),Small:i.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=r,c=P(r,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(ys,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:o},u,c,{children:[a&&t(bs,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},$s=y.div`
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
`,ws=({type:e,active:r=!1,disabled:n,className:i})=>{let o;switch(e){case"checkbox":o=t(r?O:_,{});break;case"radio":o=t(r?D:B,{});break;case"tick":o=t(M,{});break;case"cross":o=t(k,{});break;default:o=null}return t($s,Object.assign({className:i,$active:r,disabled:n},{children:o}))};var Fs={exports:{}};Fs.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,b=l||0,v=c||0,$=u||0;return d?new Date(Date.UTC(g,m,p,y,b,v,$+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,b,v,$)):new Date(g,m,p,y,b,v,$)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Ss,xs,Bs=j(Fs.exports),Ds={exports:{}},ks=j(Ds.exports=(Ss={year:0,month:1,day:2,hour:3,minute:4,second:5},xs={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=xs[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),xs[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,u=Ss[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),_s={exports:{}};_s.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},b={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=m;var w="$isDayjsObject",F=function(e){return e instanceof D||!(!e||!e[w])},S=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),r&&($[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},x=function(e,t){if(F(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new D(r)},B=b;B.l=S,B.i=F,B.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return B.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!B.u(t)||t,u=B.p(e),f=function(e,t){var i=B.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return B.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,$=(g<v?g+7:g)-v;return f(n?y-$:y+(6-$),m);case s:case h:return p(b+"Hours",0);case a:return p(b+"Minutes",1);case o:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=B.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var p=B.p(u),g=function(e){var t=x(f);return B.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=r.meridiem,d=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},h=function(e){return B.s(o%12||12,e,"0")},p=u||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,l,2);case"ddd":return d(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return B.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return B.s(a,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=this,m=B.p(h),y=x(n),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return B.m(g,y)};switch(m){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case l:p=(v-b)/6048e5;break;case s:p=(v-b)/864e5;break;case a:p=v/r;break;case o:p=v/t;break;case i:p=v/e;break;default:p=v}return f?p:B.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=D.prototype;return x.prototype=k,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=S,x.isDayjs=F,x.unix=function(e){return x(1e3*e)},x.en=$[v],x.Ls=$,x.p={},x}();var Os=j(_s.exports),Ms={exports:{}};Ms.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Es=j(Ms.exports),As={exports:{}};As.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Hs=j(As.exports),Cs={exports:{}};Cs.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Is,Ts=j(Cs.exports);Os.extend(Es),Os.extend(Hs),Os.extend(Ts),Os.extend(Bs),Os.extend(ks),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Os(t).startOf("week");return Ps(r).map((e=>zs(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return zs(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Os(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Os(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Os(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Os(n):void 0,i?Os(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Is||(Is={}));const Ps=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},zs=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},js=[1,3,5,7,8,10,12],Ns=[4,6,9,11];var Rs,Ls,Vs;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":js.includes(o)?Math.min(i,31).toString():Ns.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Os(e,r);return Os(t,r).diff(n,"minute")},e.toDayjs=e=>e?Os(e):Os(),e.addMinutesToTime=(e,t,r="HH:mm")=>Os(e,r).add(t,"minutes").format(r)}(Rs||(Rs={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!Os(e).isBefore(n,"day"))||!(!i||!Os(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Os(e).isValid())return e}return""}}(Ls||(Ls={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Vs||(Vs={}));const Ws=(e,t,r="window",n)=>{const i=o();d((()=>{i.current=t}),[t]),d((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,n),()=>{t.removeEventListener(e,o,n)}}),[e,r])},Ys=e=>{const{textSize:t}=e||{};return b`
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
    `},Us=y.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Kt.Validation.Red.Background(e),r=Kt.Validation.Red.Border(e);break;case"success":t=Kt.Validation.Green.Background(e),r=Kt.Validation.Green.Border(e);break;case"warning":default:t=Kt.Validation.Orange.Background(e),r=Kt.Validation.Orange.Border(e);break;case"info":t=Kt.Validation.Blue.Background(e),r=Kt.Validation.Blue.Border(e);break;case"description":t=Kt.Neutral[7](e),r=Kt.Neutral[4](e)}return b`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${Kt.Neutral[1]};
    ${e=>"small"===e.$sizeType?Ys({textSize:"H6"}):Ys({textSize:"BodySmall"})}
`,qs=y.div`
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
`,Qs=y(pr.Hyperlink.Small)`
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
`,Zs=y.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Gs=y.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Xs=y.button`
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
`,Js=y(T)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Ks=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,el=(y.ol`
    ${e=>Ks(e.bottomMargin)}
    margin-left: ${3}rem;

    ${us.tablet} {
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
    ${e=>Ks(e.bottomMargin)}
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
`),tl=e=>{var{size:r="Body",children:n}=e,i=P(e,["size","children"]);return t(el,Object.assign({size:r},i,{children:n}))},rl=y.div`
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
`,nl=y.input`
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
`,il=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,ol=y.label`
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
    ${us.tablet} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${us.mobileL} {
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
`,sl=y.div`
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
`,ll=y.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,cl=y.button`
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Icon};
    white-space: nowrap;
    ${hr("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ul=y.button`
    color: ${e=>e.disabled?Kt.Neutral[3]:Kt.Primary};
    ${hr("H4","semibold")}
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
`,dl=y.div`
    width: 100%;
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,hl=y((r=>{var{type:n,className:i,children:o,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:f}=r,p=P(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[g,m]=a(!1),[y,b]=a(!1),{height:v,ref:$}=wn();d((()=>{w()}),[f,v]);const w=()=>{m(!f),b(F())},F=()=>!!f&&v>f;return e(Us,Object.assign({className:i,$type:n,$sizeType:c,"data-testid":p["data-testid"]},{children:[u&&t(qs,Object.assign({$sizeType:c,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return t(I,{});case"warning":return t(H,{});case"error":return t(A,{});case"info":case"description":return t(C,{});default:return null}})()})),e(Zs,{children:[e(Gs,Object.assign({$maxCollapsedHeight:F()?f:void 0,$showMore:g,$hasActionLink:!!s},{children:[t("div",Object.assign({ref:$},{children:o})),s&&e(Qs,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},s,{children:[s.children,l||t(E,{})]}))]})),y&&e(Xs,Object.assign({$sizeType:c,$type:n,type:"button",onClick:()=>m(!g)},{children:["Show ",g?"less":"more",t(Js,{$expanded:g})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,fl=y.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Ys({textSize:"BodySmall"})}

    ${e=>e.$disabled?b`
                color: ${Kt.Neutral[3]};
            `:e.$selected?b`
                color: ${Kt.Primary};
            `:b`
                color: ${Kt.Neutral[1]};
            `}
`,pl=y(pr.BodySmall)`
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Text};
`,gl=y(tl)`
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
`,yl=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=P(e,["children","focusHighlight","focusOutline","type"]);return t(ml,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),bl=y(is.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Kt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${us.mobileS} {
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

    ${us.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,wl=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${us.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Fl=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${us.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Sl=y.div`
    display: flex;
    gap: 0.5rem;

    ${us.tablet} {
        flex-direction: column;
    }

    ${us.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,xl=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${us.mobileS} {
        width: 6rem;
    }
`,Bl=y(yl)`
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
`,Dl=y(pr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${us.tablet} {
        margin: 0;
    }

    ${us.mobileS} {
        margin: 0 0.25rem;
    }
`,kl=y(Br)`
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

    ${us.mobileS} {
        width: 100%;
    }
`,_l=y((({type:n="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:u,subLabel:h,disabled:f,error:p,name:g,id:y,className:b,compositeSection:v,removable:$,onRemove:S,"data-testid":x,onChange:B})=>{const{collapsible:D=!0,errors:k,children:_,initialExpanded:O}=v||{},[M,E]=a(s),[A,H]=a(O),C=m((()=>{const e=Array.isArray(k)&&(null==k?void 0:k.length)>0,t=!Array.isArray(k)&&!!k;return e||t}),[k]),[I]=a(Vs.generate()),T=y?`${y}`:`tg-${I}`,P=o();d((()=>{E(s)}),[s]),d((()=>{M&&H(null==O||O)}),[M]);const z=e=>{if(!f){if(B)return void B(e);switch(n){case"checkbox":E((e=>!e));break;case"radio":case"yes":case"no":M||E(!0)}}},j=()=>{f||H(!A)},N=()=>{f||!S||S()},R=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(ws,{type:e,active:M,disabled:f})},L=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(al,Object.assign({"data-id":"toggle-sublabel",$disabled:f,$selected:M},{children:e}))},V=()=>{const r=!A&&!C;return D&&e(ul,Object.assign({$paddingTopRequired:r,disabled:f,onClick:j,"data-testid":A?"collapse-button":"expand-button"},{children:[A?"Show less":"Show more",t(A?F:w,{"aria-hidden":!0})]}))},W=n=>e(r,{children:[t(pl,Object.assign({weight:"semibold",$disabled:f},{children:"Error"})),t(gl,Object.assign({$disabled:f},{children:null==n?void 0:n.map(((e,r)=>t("li",Object.assign({id:`${T}-error-list-item-${r}`},{children:t(pl,Object.assign({weight:"semibold",$disabled:f},{children:e}))}),r)))}))]});return e(rl,Object.assign({$selected:M,$disabled:f,className:b,$styleType:l,$error:p,$indicator:i,id:y,"data-testid":x},{children:[e(sl,Object.assign({id:`${T}-header-container`,$disabled:f,$error:p,$selected:M,$indicator:i,$styleType:l},{children:[e(ll,Object.assign({$addPadding:$},{children:[t(nl,{ref:P,name:g,id:`${T}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:z,checked:M}),i&&R(),e(il,{children:[t(ol,Object.assign({htmlFor:`${T}-input`,$selected:M,$indicator:i,$disabled:f,"data-testid":`${T}-toggle-label`,$maxLines:u},{children:c})),h&&L()]})]})),$&&t(cl,Object.assign({type:"button",$disabled:f,onClick:N,id:`${T}-remove-button`},{children:"Remove"}))]})),_&&e("div",{children:[(!D||A)&&t(fl,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!D,$disabled:f},{children:_})),D&&!A&&C&&t(dl,Object.assign({$disabled:f,onClick:j,id:`${T}-error-alert`},{children:t(hl,Object.assign({type:f?"description":"error",className:b,showIcon:!0},{children:Array.isArray(k)?W(k):k}))})),V()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,Ol=y(vs.Small)`
    width: 7rem;

    ${us.mobileL} {
        flex: 1;
    }

    ${us.mobileS} {
        width: 100%;
    }
`;var Ml,El,Al;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Ml||(Ml={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(El||(El={})),function(e){e.AM="am",e.PM="pm"}(Al||(Al={}));const Hl=({id:r,value:n,show:i,format:s,onChange:l,onCancel:c})=>{const u=rs.getTimeValues(s,n),[h,f]=a(u.hour),[g,m]=a(u.minute),[y,b]=a(u.period),v=o(),$=o(),S=wn();d((()=>{if(i&&v.current&&v.current.focus(),i){const{hour:e,minute:t,period:r}=rs.getTimeValues(s,n);f(e),m(t),b(r)}}),[i,n,s]),d((()=>{const e=v.current,t=$.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},B=p((e=>{switch(e.currentTarget.name){case Ml.MINUTE_UP:m(rs.updateMinutes(g,"add"));break;case Ml.MINUTE_DOWN:m(rs.updateMinutes(g,"minus"));break;case Ml.HOUR_UP:f(rs.updateHours(h,"add"));break;case Ml.HOUR_DOWN:f(rs.updateHours(h,"minus"))}}),[h,g]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case El.HOUR:t.length<=2&&f(t);break;case El.MINUTE:t.length<=2&&m(t)}},_=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case El.HOUR:{const r=t>23||t<0?u.hour:rs.convertHourTo12HourFormat(e.target.value);f(r);break}case El.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;m(es.padValue(r));break}}},O=e=>{switch(e.target.name){case Al.AM:b(ts.AM);break;case Al.PM:b(ts.PM)}},M=e=>r?`${r}-${e}`:e,E=Pa({height:i?S.height+32:0});return t(bl,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(vl,Object.assign({ref:S.ref,"data-testid":M("timepicker-dropdown"),inert:i?void 0:""},{children:[e($l,{children:[e(Fl,{children:[e(xl,{children:[t(Bl,Object.assign({"aria-label":"increase hour",name:Ml.HOUR_UP,tabIndex:-1,onClick:B,"data-testid":M("hour-increment-button")},{children:t(F,{})})),t(kl,{"aria-label":"hour",type:"number",name:El.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:D,onChange:k,onBlur:_,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Bl,Object.assign({"aria-label":"decrease hour",name:Ml.HOUR_DOWN,tabIndex:-1,onClick:B,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(Dl,{children:":"}),e(xl,{children:[t(Bl,Object.assign({"aria-label":"increase minute",name:Ml.MINUTE_UP,tabIndex:-1,onClick:B,"data-testid":M("minute-increment-button")},{children:t(F,{})})),t(kl,{"aria-label":"minute",type:"number",name:El.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:$,value:g,onChange:k,onBlur:_,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Bl,Object.assign({"aria-label":"decrease minute",name:Ml.MINUTE_DOWN,tabIndex:-1,onClick:B,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Sl,{children:[t(_l,Object.assign({checked:y===ts.AM,name:Al.AM,type:"radio",onChange:O,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(_l,Object.assign({checked:y===ts.PM,name:Al.PM,type:"radio",onChange:O,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(wl,{children:[t(Ol,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":M("cancel-button")},{children:"Cancel"})),t(Ol,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?rs.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))};y.div`
    position: relative;
`;const Cl=y(Br)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,Il=r=>{var{id:n,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:u,format:d="24hr",onChange:h,onFocus:f,onBlur:g}=r,m=P(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[y,b]=a(!1),v=o();Ws("mousedown",(function(e){i||s||F(e)}),"document"),Ws("keyup",(function(e){if("Tab"===e.code)F(e)}),"document");const $=()=>{i||s||y||(b(!0),f&&f())};const w=()=>{b(!1),g&&g()},F=e=>{v&&!v.current.contains(e.target)&&y&&w()},S=p((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,u]);return e(xr,Object.assign({ref:v,id:n,$readOnly:s,$disabled:i,$error:l},m,{children:[t(Cl,{onFocus:$,focused:y,readOnly:!0,placeholder:u||S(),value:rs.formatDisplayValue(c,d),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(Hl,{id:n,show:y,value:c,format:d,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))};export{Il as Timepicker};
//# sourceMappingURL=index.js.map
