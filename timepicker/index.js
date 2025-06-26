import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g}from"react";import y,{css as b,keyframes as v}from"styled-components";import{ExternalIcon as $}from"@lifesg/react-icons/external";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as S}from"@lifesg/react-icons/chevron-up";import{findDOMNode as F,unstable_batchedUpdates as x}from"react-dom";import{CircleIcon as B}from"@lifesg/react-icons/circle";import{CircleDotIcon as D}from"@lifesg/react-icons/circle-dot";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{SquareIcon as O}from"@lifesg/react-icons/square";import{SquareTickFillIcon as _}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as M}from"@lifesg/react-icons/tick";import{ArrowRightIcon as H}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as E}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as A}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as C}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as I}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as P}from"@lifesg/react-icons";function T(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function V(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N=Array.isArray,j="object"==typeof z&&z&&z.Object===Object&&z,R="object"==typeof self&&self&&self.Object===Object&&self,L=j||R||Function("return this")(),W=L.Symbol,Y=W,U=Object.prototype,q=U.hasOwnProperty,Q=U.toString,J=Y?Y.toStringTag:void 0;var Z=function(e){var t=q.call(e,J),n=e[J];try{e[J]=void 0;var r=!0}catch(e){}var i=Q.call(e);return r&&(t?e[J]=n:delete e[J]),i},G=Object.prototype.toString;var X=Z,K=function(e){return G.call(e)},ee=W?W.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?X(e):K(e)};var ne=te,re=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||re(e)&&"[object Symbol]"==ne(e)},ae=N,oe=ie,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var ce=function(e,t){if(ae(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!oe(e))||(le.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},de=te,he=ue;var fe,pe=function(e){if(!he(e))return!1;var t=de(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=L["__core-js_shared__"],ge=(fe=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+fe:"";var ye=function(e){return!!ge&&ge in e},be=Function.prototype.toString;var ve=pe,$e=ye,we=ue,Se=function(e){if(null!=e){try{return be.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Fe=/^\[object .+?Constructor\]$/,xe=Function.prototype,Be=Object.prototype,De=xe.toString,ke=Be.hasOwnProperty,Oe=RegExp("^"+De.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _e=function(e){return!(!we(e)||$e(e))&&(ve(e)?Oe:Fe).test(Se(e))},Me=function(e,t){return null==e?void 0:e[t]};var He=function(e,t){var n=Me(e,t);return _e(n)?n:void 0},Ee=He(Object,"create"),Ae=Ee;var Ce=function(){this.__data__=Ae?Ae(null):{},this.size=0};var Ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Pe=Ee,Te=Object.prototype.hasOwnProperty;var ze=function(e){var t=this.__data__;if(Pe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Te.call(t,e)?t[e]:void 0},Ve=Ee,Ne=Object.prototype.hasOwnProperty;var je=Ee;var Re=Ce,Le=Ie,We=ze,Ye=function(e){var t=this.__data__;return Ve?void 0!==t[e]:Ne.call(t,e)},Ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=je&&void 0===t?"__lodash_hash_undefined__":t,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Re,qe.prototype.delete=Le,qe.prototype.get=We,qe.prototype.has=Ye,qe.prototype.set=Ue;var Qe=qe;var Je=function(){this.__data__=[],this.size=0};var Ze=function(e,t){return e===t||e!=e&&t!=t};var Ge=function(e,t){for(var n=e.length;n--;)if(Ze(e[n][0],t))return n;return-1},Xe=Ge,Ke=Array.prototype.splice;var et=Ge;var tt=Ge;var nt=Ge;var rt=Je,it=function(e){var t=this.__data__,n=Xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ke.call(t,n,1),--this.size,!0)},at=function(e){var t=this.__data__,n=et(t,e);return n<0?void 0:t[n][1]},ot=function(e){return tt(this.__data__,e)>-1},st=function(e,t){var n=this.__data__,r=nt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function lt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}lt.prototype.clear=rt,lt.prototype.delete=it,lt.prototype.get=at,lt.prototype.has=ot,lt.prototype.set=st;var ct=lt,ut=He(L,"Map"),dt=Qe,ht=ct,ft=ut;var pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var n=e.__data__;return pt(t)?n["string"==typeof t?"string":"hash"]:n.map},gt=mt;var yt=mt;var bt=mt;var vt=mt;var $t=function(){this.size=0,this.__data__={hash:new dt,map:new(ft||ht),string:new dt}},wt=function(e){var t=gt(this,e).delete(e);return this.size-=t?1:0,t},St=function(e){return yt(this,e).get(e)},Ft=function(e){return bt(this,e).has(e)},xt=function(e,t){var n=vt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Bt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Bt.prototype.clear=$t,Bt.prototype.delete=wt,Bt.prototype.get=St,Bt.prototype.has=Ft,Bt.prototype.set=xt;var Dt=Bt;function kt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(kt.Cache||Dt),n}kt.Cache=Dt;var Ot=kt;var _t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mt=/\\(\\)?/g,Ht=function(e){var t=Ot(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(_t,(function(e,n,r,i){t.push(r?i.replace(Mt,"$1"):n||e)})),t}));var Et=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},At=N,Ct=ie,It=W?W.prototype:void 0,Pt=It?It.toString:void 0;var Tt=function e(t){if("string"==typeof t)return t;if(At(t))return Et(t,e)+"";if(Ct(t))return Pt?Pt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},zt=Tt;var Vt=N,Nt=ce,jt=Ht,Rt=function(e){return null==e?"":zt(e)};var Lt=ie;var Wt=function(e,t){return Vt(e)?e:Nt(e,t)?[e]:jt(Rt(e))},Yt=function(e){if("string"==typeof e||Lt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ut=function(e,t){for(var n=0,r=(t=Wt(t,e)).length;null!=e&&n<r;)e=e[Yt(t[n++])];return n&&n==r?e:void 0};var qt=V((function(e,t,n){var r=null==e?void 0:Ut(e,t);return void 0===r?n:r}));const Qt=(e,t,n)=>t?qt(n,t)||qt(e,t):n||e,Jt=(e,t)=>{const n=t||e.defaultValue;return qt(e.collections,n)};var Zt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Zt||(Zt={}));const Gt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=Jt(Gt,n[Zt.colorScheme]);return n.options&&n.options.color?Qt(r,e,n.options.color):Qt(r,e)},Kt={Brand:{1:Xt("Brand.1"),2:Xt("Brand.2"),3:Xt("Brand.3"),4:Xt("Brand.4"),5:Xt("Brand.5"),6:Xt("Brand.6")},Primary:Xt("Primary"),PrimaryDark:Xt("PrimaryDark"),Secondary:Xt("Secondary"),Accent:{Light:{1:Xt("Accent.Light.1"),2:Xt("Accent.Light.2"),3:Xt("Accent.Light.3"),4:Xt("Accent.Light.4"),5:Xt("Accent.Light.5"),6:Xt("Accent.Light.6")},Dark:{1:Xt("Accent.Dark.1"),2:Xt("Accent.Dark.2"),3:Xt("Accent.Dark.3")}},Neutral:{1:Xt("Neutral.1"),2:Xt("Neutral.2"),3:Xt("Neutral.3"),4:Xt("Neutral.4"),5:Xt("Neutral.5"),6:Xt("Neutral.6"),7:Xt("Neutral.7"),8:Xt("Neutral.8")},Validation:{Green:{Text:Xt("Validation.Green.Text"),Icon:Xt("Validation.Green.Icon"),Border:Xt("Validation.Green.Border"),Background:Xt("Validation.Green.Background")},Orange:{Text:Xt("Validation.Orange.Text"),Icon:Xt("Validation.Orange.Icon"),Border:Xt("Validation.Orange.Border"),Background:Xt("Validation.Orange.Background"),Badge:Xt("Validation.Orange.Badge")},Red:{Text:Xt("Validation.Red.Text"),Icon:Xt("Validation.Red.Icon"),Border:Xt("Validation.Red.Border"),Background:Xt("Validation.Red.Background")},Blue:{Text:Xt("Validation.Blue.Text"),Icon:Xt("Validation.Blue.Icon"),Border:Xt("Validation.Blue.Border"),Background:Xt("Validation.Blue.Background")}},Shadow:{Accent:Xt("Shadow.Accent"),Red:Xt("Shadow.Red"),Elevation:Xt("Shadow.Elevation")}},en={collections:{base:{InputBoxShadow:b`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},tn=e=>t=>{var n;const r=t.theme,i=Jt(en,r[Zt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Qt(i,e,r.options.designToken):Qt(i,e)},nn={InputBoxShadow:tn("InputBoxShadow"),InputErrorBoxShadow:tn("InputErrorBoxShadow"),ElevationBoxShadow:tn("ElevationBoxShadow"),Table:{Header:tn("Table.Header"),Cell:{Primary:tn("Table.Cell.Primary"),Secondary:tn("Table.Cell.Secondary"),Selected:tn("Table.Cell.Selected"),Hover:tn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:tn("Button.Danger.BackgroundColor"),Hover:tn("Button.Danger.Hover"),Primary:tn("Button.Danger.Primary"),Border:tn("Button.Danger.Border")}}},rn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},an={D1:{fontFamily:rn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:rn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:rn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:rn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:rn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:rn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:rn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:rn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:rn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:rn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:rn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:rn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:rn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:rn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},on={D1:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:rn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:rn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:rn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:rn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:rn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},sn={collections:{base:an,oneservice:{D1:{fontFamily:rn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:rn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:rn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:rn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:rn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:rn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:rn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:rn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:rn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:rn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:rn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:rn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:rn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:rn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:on},defaultValue:"base"},ln=e=>t=>{const n=t.theme,r=Jt(sn,n[Zt.textStyleScheme]);return n.options&&n.options.textStyle?Qt(r,e,n.options.textStyle):Qt(r,e)},cn={D1:{fontFamily:ln("D1.fontFamily"),fontSize:ln("D1.fontSize"),fontWeight:ln("D1.fontWeight"),lineHeight:ln("D1.lineHeight"),letterSpacing:ln("D1.letterSpacing"),fontVariant:ln("D1.fontVariant")},D2:{fontFamily:ln("D2.fontFamily"),fontSize:ln("D2.fontSize"),fontWeight:ln("D2.fontWeight"),lineHeight:ln("D2.lineHeight"),letterSpacing:ln("D2.letterSpacing"),fontVariant:ln("D2.fontVariant")},D3:{fontFamily:ln("D3.fontFamily"),fontSize:ln("D3.fontSize"),fontWeight:ln("D3.fontWeight"),lineHeight:ln("D3.lineHeight"),letterSpacing:ln("D3.letterSpacing"),fontVariant:ln("D3.fontVariant")},D4:{fontFamily:ln("D4.fontFamily"),fontSize:ln("D4.fontSize"),fontWeight:ln("D4.fontWeight"),lineHeight:ln("D4.lineHeight"),letterSpacing:ln("D4.letterSpacing"),fontVariant:ln("D4.fontVariant")},DBody:{fontFamily:ln("DBody.fontFamily"),fontSize:ln("DBody.fontSize"),fontWeight:ln("DBody.fontWeight"),lineHeight:ln("DBody.lineHeight"),letterSpacing:ln("DBody.letterSpacing"),fontVariant:ln("DBody.fontVariant")},H1:{fontFamily:ln("H1.fontFamily"),fontSize:ln("H1.fontSize"),fontWeight:ln("H1.fontWeight"),lineHeight:ln("H1.lineHeight"),letterSpacing:ln("H1.letterSpacing"),fontVariant:ln("H1.fontVariant")},H2:{fontFamily:ln("H2.fontFamily"),fontSize:ln("H2.fontSize"),fontWeight:ln("H2.fontWeight"),lineHeight:ln("H2.lineHeight"),letterSpacing:ln("H2.letterSpacing"),fontVariant:ln("H2.fontVariant")},H3:{fontFamily:ln("H3.fontFamily"),fontSize:ln("H3.fontSize"),fontWeight:ln("H3.fontWeight"),lineHeight:ln("H3.lineHeight"),letterSpacing:ln("H3.letterSpacing"),fontVariant:ln("H3.fontVariant")},H4:{fontFamily:ln("H4.fontFamily"),fontSize:ln("H4.fontSize"),fontWeight:ln("H4.fontWeight"),lineHeight:ln("H4.lineHeight"),letterSpacing:ln("H4.letterSpacing"),fontVariant:ln("H4.fontVariant")},H5:{fontFamily:ln("H5.fontFamily"),fontSize:ln("H5.fontSize"),fontWeight:ln("H5.fontWeight"),lineHeight:ln("H5.lineHeight"),letterSpacing:ln("H5.letterSpacing"),fontVariant:ln("H5.fontVariant")},H6:{fontFamily:ln("H6.fontFamily"),fontSize:ln("H6.fontSize"),fontWeight:ln("H6.fontWeight"),lineHeight:ln("H6.lineHeight"),letterSpacing:ln("H6.letterSpacing"),fontVariant:ln("H6.fontVariant")},Body:{fontFamily:ln("Body.fontFamily"),fontSize:ln("Body.fontSize"),fontWeight:ln("Body.fontWeight"),lineHeight:ln("Body.lineHeight"),letterSpacing:ln("Body.letterSpacing"),fontVariant:ln("Body.fontVariant")},BodySmall:{fontFamily:ln("BodySmall.fontFamily"),fontSize:ln("BodySmall.fontSize"),fontWeight:ln("BodySmall.fontWeight"),lineHeight:ln("BodySmall.lineHeight"),letterSpacing:ln("BodySmall.letterSpacing"),fontVariant:ln("BodySmall.fontVariant")},XSmall:{fontFamily:ln("XSmall.fontFamily"),fontSize:ln("XSmall.fontSize"),fontWeight:ln("XSmall.fontWeight"),lineHeight:ln("XSmall.lineHeight"),letterSpacing:ln("XSmall.letterSpacing"),fontVariant:ln("XSmall.fontVariant")}},un=[rn.OpenSans,rn.PlusJakartaSans],dn=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},hn=(e,t)=>n=>{var r;const i=cn[e].fontFamily(n),a=cn[e].fontWeight(n),o=un.find((e=>Object.values(e).includes(i)));return o?b`
                font-family: ${dn(o,t)||dn(o,a)||i};
                font-weight: normal !important;
            `:b`
            font-family: ${i};
            font-weight: ${null!==(r=fn(t)||a)&&void 0!==r?r:"normal"};
        `},fn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},pn=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},mn=hn,gn=(e,t,n=!1)=>r=>{const i=cn[e],a=i.fontSize(r);return b`
            ${hn(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            font-variant: ${i.fontVariant(r)||"normal"};
            ${b`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},yn=(e=!1,t=!1,n=void 0)=>t?b`
            display: block;
            ${pn(n)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${pn(n)}
        `;var bn;!function(e){e.D1=y.h1`
        ${e=>b`
                ${gn("D1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=y.h1`
        ${e=>b`
                ${gn("D2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=y.h1`
        ${e=>b`
                ${gn("D3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=y.h1`
        ${e=>b`
                ${gn("D4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=y.h1`
        ${e=>b`
                ${gn("DBody",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=y.h1`
        ${e=>b`
                ${gn("H1",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=y.h2`
        ${e=>b`
                ${gn("H2",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=y.h3`
        ${e=>b`
                ${gn("H3",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=y.h4`
        ${e=>b`
                ${gn("H4",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=y.h5`
        ${e=>b`
                ${gn("H5",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=y.h6`
        ${e=>b`
                ${gn("H6",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=y.p`
        ${e=>b`
                ${gn("Body",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=y.p`
        ${e=>b`
                ${gn("BodySmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=y.span`
        ${e=>b`
                ${gn("XSmall",e.weight,e.paragraph)}
                color: ${Kt.Neutral[1]};
                ${yn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>wn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>wn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(bn||(bn={}));const vn=y.a`
    ${e=>b`
            ${gn(e.textStyle,e.weight)}
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
`,$n=y($)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,wn=n=>{var{external:r=!1,children:i}=n,a=T(n,["external","children"]);return e(vn,Object.assign({},a,{children:[i,r&&t($n,{})]}))};var Sn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Sn||(Sn={}));const Fn=b`
    border: 1px solid ${Kt.Accent.Light[1]};
    box-shadow: ${nn.InputBoxShadow};
`,xn=b`
    border: 1px solid ${Kt.Accent.Light[1]};
    box-shadow: none;
`,Bn=b`
    border: 1px solid ${Kt.Neutral[5]};
    box-shadow: none;
`,Dn=b`
    border: 1px solid ${Kt.Validation.Red.Border};
    box-shadow: ${nn.InputErrorBoxShadow};
`,kn=y.div`
    border: 1px solid ${Kt.Neutral[5]};
    border-radius: 4px;
    background: ${Kt.Neutral[8]};

    :focus-within {
        ${Fn}
    }
    ${e=>e.$focused&&Fn}

    ${e=>e.$readOnly?b`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${xn}
                }
                ${e.$focused&&xn}
            `:e.$disabled?b`
                background: ${Kt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Bn}
                }
                ${e.$focused&&Bn}
            `:e.$error?b`
                border: 1px solid ${Kt.Validation.Red.Border};

                :focus-within {
                    ${Dn}
                }
                ${e.$focused&&Dn}
            `:void 0}
`,On=y(kn)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,_n=y.input`
    ${e=>gn("small"===e.$variant?"BodySmall":"Body","regular")}
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
`;var Mn=function(e,t){return Mn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},Mn(e,t)};var Hn=function(){return Hn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Hn.apply(this,arguments)};var En="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var An=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Cn="object"==typeof En&&En&&En.Object===Object&&En,In="object"==typeof self&&self&&self.Object===Object&&self,Pn=Cn||In||Function("return this")(),Tn=Pn,zn=function(){return Tn.Date.now()},Vn=/\s/;var Nn=function(e){for(var t=e.length;t--&&Vn.test(e.charAt(t)););return t},jn=/^\s+/;var Rn=function(e){return e?e.slice(0,Nn(e)+1).replace(jn,""):e},Ln=Pn.Symbol,Wn=Ln,Yn=Object.prototype,Un=Yn.hasOwnProperty,qn=Yn.toString,Qn=Wn?Wn.toStringTag:void 0;var Jn=function(e){var t=Un.call(e,Qn),n=e[Qn];try{e[Qn]=void 0;var r=!0}catch(e){}var i=qn.call(e);return r&&(t?e[Qn]=n:delete e[Qn]),i},Zn=Object.prototype.toString;var Gn=Jn,Xn=function(e){return Zn.call(e)},Kn=Ln?Ln.toStringTag:void 0;var er=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Kn&&Kn in Object(e)?Gn(e):Xn(e)},tr=function(e){return null!=e&&"object"==typeof e};var nr=Rn,rr=An,ir=function(e){return"symbol"==typeof e||tr(e)&&"[object Symbol]"==er(e)},ar=/^[-+]0x[0-9a-f]+$/i,or=/^0b[01]+$/i,sr=/^0o[0-7]+$/i,lr=parseInt;var cr=An,ur=zn,dr=function(e){if("number"==typeof e)return e;if(ir(e))return NaN;if(rr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=rr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=nr(e);var n=or.test(e);return n||sr.test(e)?lr(e.slice(2),n?2:8):ar.test(e)?NaN:+e},hr=Math.max,fr=Math.min;var pr=function(e,t,n){var r,i,a,o,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function m(){var e=ur();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?fr(n,a-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=i=void 0,o)}function y(){var e=ur(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=dr(t)||0,cr(n)&&(u=!!n.leading,a=(d="maxWait"in n)?hr(dr(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?o:g(ur())},y},mr=pr,gr=An;var yr=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return gr(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),mr(e,t,{leading:r,maxWait:t,trailing:i})},br=function(e,t,n,r){switch(t){case"debounce":return pr(e,n,r);case"throttle":return yr(e,n,r);default:return e}},vr=function(e){return"function"==typeof e},$r=function(){return"undefined"==typeof window},wr=function(e){return e instanceof Element||e instanceof HTMLDocument},Sr=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&vr(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!$r()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if($r())return null;if(t)return document.querySelector(t);if(r&&wr(r))return r;if(n.targetRef&&wr(n.targetRef.current))return n.targetRef.current;var i=F(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=Sr(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!$r()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return vr(t)?"renderProp":vr(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,c=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,$r()||(n.resizeHandler=br(n.createResizeHandler,i,o,c),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Mn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){$r()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return c(e,u)}return c(e,l);case"childArray":return(e=i).map((function(e){return!!e&&c(e,l)}));default:return r.createElement(o,null)}}}(u);var Fr=$r()?d:h;function xr(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=a(n),y=a(null),b=null!=f?f:y,v=a(),$=o({width:void 0,height:void 0}),w=$[0],S=$[1];return Fr((function(){if(!$r()){var e=Sr(m,S,u,h);v.current=br((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!$r()&&e({width:r,height:i}),g.current=!1}))}),r,s,l);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,p),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,u,h,m,p,b.current]),Hn({ref:b},w)}var Br=jr(),Dr=e=>Tr(e,Br),kr=jr();Dr.write=e=>Tr(e,kr);var Or=jr();Dr.onStart=e=>Tr(e,Or);var _r=jr();Dr.onFrame=e=>Tr(e,_r);var Mr=jr();Dr.onFinish=e=>Tr(e,Mr);var Hr=[];Dr.setTimeout=(e,t)=>{const n=Dr.now()+t,r=()=>{const e=Hr.findIndex((e=>e.cancel==r));~e&&Hr.splice(e,1),Ir-=~e?1:0},i={time:n,handler:e,cancel:r};return Hr.splice(Er(n),0,i),Ir+=1,zr(),i};var Er=e=>~(~Hr.findIndex((t=>t.time>e))||~Hr.length);Dr.cancel=e=>{Or.delete(e),_r.delete(e),Mr.delete(e),Br.delete(e),kr.delete(e)},Dr.sync=e=>{Pr=!0,Dr.batchedUpdates(e),Pr=!1},Dr.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Dr.onStart(n)}return r.handler=e,r.cancel=()=>{Or.delete(n),t=null},r};var Ar="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Dr.use=e=>Ar=e,Dr.now="undefined"!=typeof performance?()=>performance.now():Date.now,Dr.batchedUpdates=e=>e(),Dr.catch=console.error,Dr.frameLoop="always",Dr.advance=()=>{"demand"!==Dr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Nr()};var Cr=-1,Ir=0,Pr=!1;function Tr(e,t){Pr?(t.delete(e),e(0)):(t.add(e),zr())}function zr(){Cr<0&&(Cr=0,"demand"!==Dr.frameLoop&&Ar(Vr))}function Vr(){~Cr&&(Ar(Vr),Dr.batchedUpdates(Nr))}function Nr(){const e=Cr;Cr=Dr.now();const t=Er(Cr);t&&(Rr(Hr.splice(0,t),(e=>e.handler())),Ir-=t),Ir?(Or.flush(),Br.flush(e?Math.min(64,Cr-e):16.667),_r.flush(),kr.flush(),Mr.flush()):Cr=-1}function jr(){let e=new Set,t=e;return{add(n){Ir+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ir-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ir-=t.size,Rr(t,(t=>t(n)&&e.add(t))),Ir+=e.size,t=e)}}}function Rr(e,t){e.forEach((e=>{try{t(e)}catch(e){Dr.catch(e)}}))}var Lr=Object.defineProperty,Wr={};function Yr(){}((e,t)=>{for(var n in t)Lr(e,n,{get:t[n],enumerable:!0})})(Wr,{assign:()=>ai,colors:()=>ni,createStringInterpolator:()=>Xr,skipAnimation:()=>ri,to:()=>Kr,willAdvance:()=>ii});var Ur={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function qr(e,t){if(Ur.arr(e)){if(!Ur.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Qr=(e,t)=>e.forEach(t);function Jr(e,t,n){if(Ur.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Zr=e=>Ur.und(e)?[]:Ur.arr(e)?e:[e];function Gr(e,t){if(e.size){const n=Array.from(e);e.clear(),Qr(n,t)}}var Xr,Kr,ei=(e,...t)=>Gr(e,(e=>e(...t))),ti=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ni=null,ri=!1,ii=Yr,ai=e=>{e.to&&(Kr=e.to),e.now&&(Dr.now=e.now),void 0!==e.colors&&(ni=e.colors),null!=e.skipAnimation&&(ri=e.skipAnimation),e.createStringInterpolator&&(Xr=e.createStringInterpolator),e.requestAnimationFrame&&Dr.use(e.requestAnimationFrame),e.batchedUpdates&&(Dr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ii=e.willAdvance),e.frameLoop&&(Dr.frameLoop=e.frameLoop)},oi=new Set,si=[],li=[],ci=0,ui={get idle(){return!oi.size&&!si.length},start(e){ci>e.priority?(oi.add(e),Dr.onStart(di)):(hi(e),Dr(pi))},advance:pi,sort(e){if(ci)Dr.onFrame((()=>ui.sort(e)));else{const t=si.indexOf(e);~t&&(si.splice(t,1),fi(e))}},clear(){si=[],oi.clear()}};function di(){oi.forEach(hi),oi.clear(),Dr(pi)}function hi(e){si.includes(e)||fi(e)}function fi(e){si.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(si,(t=>t.priority>e.priority)),0,e)}function pi(e){const t=li;for(let n=0;n<si.length;n++){const r=si[n];ci=r.priority,r.idle||(ii(r),r.advance(e),r.idle||t.push(r))}return ci=0,(li=si).length=0,(si=t).length>0}var mi="[-+]?\\d*\\.?\\d+",gi=mi+"%";function yi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var bi=new RegExp("rgb"+yi(mi,mi,mi)),vi=new RegExp("rgba"+yi(mi,mi,mi,mi)),$i=new RegExp("hsl"+yi(mi,gi,gi)),wi=new RegExp("hsla"+yi(mi,gi,gi,mi)),Si=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Fi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xi=/^#([0-9a-fA-F]{6})$/,Bi=/^#([0-9a-fA-F]{8})$/;function Di(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ki(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=Di(i,r,e+1/3),o=Di(i,r,e),s=Di(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Oi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function _i(e){return(parseFloat(e)%360+360)%360/360}function Mi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Hi(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ei(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=xi.exec(e))?parseInt(t[1]+"ff",16)>>>0:ni&&void 0!==ni[e]?ni[e]:(t=bi.exec(e))?(Oi(t[1])<<24|Oi(t[2])<<16|Oi(t[3])<<8|255)>>>0:(t=vi.exec(e))?(Oi(t[1])<<24|Oi(t[2])<<16|Oi(t[3])<<8|Mi(t[4]))>>>0:(t=Si.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Bi.exec(e))?parseInt(t[1],16)>>>0:(t=Fi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=$i.exec(e))?(255|ki(_i(t[1]),Hi(t[2]),Hi(t[3])))>>>0:(t=wi.exec(e))?(ki(_i(t[1]),Hi(t[2]),Hi(t[3]))|Mi(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Ai=(e,t,n)=>{if(Ur.fun(e))return e;if(Ur.arr(e))return Ai({range:e,output:t,extrapolate:n});if(Ur.str(e.output[0]))return Xr(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var Ci=1.70158,Ii=1.525*Ci,Pi=Ci+1,Ti=2*Math.PI/3,zi=2*Math.PI/4.5,Vi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Ni={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Pi*e*e*e-Ci*e*e,easeOutBack:e=>1+Pi*Math.pow(e-1,3)+Ci*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Ii)/2:(Math.pow(2*e-2,2)*((Ii+1)*(2*e-2)+Ii)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ti),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ti)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*zi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*zi)/2+1,easeInBounce:e=>1-Vi(1-e),easeOutBounce:Vi,easeInOutBounce:e=>e<.5?(1-Vi(1-2*e))/2:(1+Vi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},ji=Symbol.for("FluidValue.get"),Ri=Symbol.for("FluidValue.observers"),Li=e=>Boolean(e&&e[ji]),Wi=e=>e&&e[ji]?e[ji]():e,Yi=e=>e[Ri]||null;function Ui(e,t){const n=e[Ri];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var qi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Qi(this,e)}},Qi=(e,t)=>Xi(e,ji,t);function Ji(e,t){if(e[ji]){let n=e[Ri];n||Xi(e,Ri,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Zi(e,t){const n=e[Ri];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ri]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Gi,Xi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ki=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ea=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ta=new RegExp(`(${Ki.source})(%|[a-z]+)`,"i"),na=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ra=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ia=e=>{const[t,n]=aa(e);if(!t||ti())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&ra.test(n)?ia(n):n||e},aa=e=>{const t=ra.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},oa=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,sa=e=>{Gi||(Gi=ni?new RegExp(`(${Object.keys(ni).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Wi(e).replace(ra,ia).replace(ea,Ei).replace(Gi,Ei))),n=t.map((e=>e.match(Ki).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ai({...e,output:t})));return e=>{const n=!ta.test(t[0])&&t.find((e=>ta.test(e)))?.replace(Ki,"");let i=0;return t[0].replace(Ki,(()=>`${r[i++](e)}${n||""}`)).replace(na,oa)}},la="react-spring: ",ca=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${la}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},ua=ca(console.warn);var da=ca(console.warn);function ha(e){return Ur.str(e)&&("#"==e[0]||/\d/.test(e)||!ti()&&ra.test(e)||e in(ni||{}))}var fa=ti()?d:h;function pa(){const e=o()[1],t=(()=>{const e=a(!1);return fa((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ma=e=>d(e,ga),ga=[];function ya(e){const t=a();return d((()=>{t.current=e})),t.current}var ba=Symbol.for("Animated:node"),va=e=>e&&e[ba],$a=(e,t)=>{return n=e,r=ba,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},wa=e=>e&&e[ba]&&e[ba].getPayload(),Sa=class{constructor(){$a(this,this)}getPayload(){return this.payload||[]}},Fa=class extends Sa{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Ur.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Fa(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ur.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ur.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},xa=class extends Fa{constructor(e){super(0),this._string=null,this._toString=Ai({output:[e,e]})}static create(e){return new xa(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ur.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ai({output:[this.getValue(),e]})),this._value=0,super.reset()}},Ba={dependencies:null},Da=class extends Sa{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Jr(this.source,((n,r)=>{var i;(i=n)&&i[ba]===i?t[r]=n.getValue(e):Li(n)?t[r]=Wi(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Qr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Jr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Ba.dependencies&&Li(e)&&Ba.dependencies.add(e);const t=wa(e);t&&Qr(t,(e=>this.add(e)))}},ka=class extends Da{constructor(e){super(e)}static create(e){return new ka(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Oa)),!0)}};function Oa(e){return(ha(e)?xa:Fa).create(e)}function _a(e){const t=va(e);return t?t.constructor:Ur.arr(e)?ka:ha(e)?xa:Fa}var Ma=(e,t)=>{const n=!Ur.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,o)=>{const s=a(null),l=n&&p((e=>{s.current=function(e,t){e&&(Ur.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,u]=function(e,t){const n=new Set;Ba.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Da(e),Ba.dependencies=null,[e,n]}(i,t),h=pa(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},m=new Ha(f,u),g=a();fa((()=>(g.current=m,Qr(u,(e=>Ji(e,m))),()=>{g.current&&(Qr(g.current.deps,(e=>Zi(e,g.current))),Dr.cancel(g.current.update))}))),d(f,[]),ma((()=>()=>{const e=g.current;Qr(e.deps,(t=>Zi(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,{...y,ref:l})}))},Ha=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Dr.write(this.update)}};var Ea=Symbol.for("AnimatedComponent"),Aa=e=>Ur.str(e)?e:e&&Ur.str(e.displayName)?e.displayName:Ur.fun(e)&&e.name||null;function Ca(e,...t){return Ur.fun(e)?e(...t):e}var Ia=(e,t)=>!0===e||!!(t&&e&&(Ur.fun(e)?e(t):Zr(e).includes(t))),Pa=(e,t)=>Ur.obj(e)?t&&e[t]:e,Ta=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,za=e=>e,Va=(e,t=za)=>{let n=Na;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Ur.und(n)||(r[i]=n)}return r},Na=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ja={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Ra(e){const t=function(e){const t={};let n=0;if(Jr(e,((e,r)=>{ja[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Jr(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function La(e){return e=Wi(e),Ur.arr(e)?e.map(La):ha(e)?Wr.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Wa(e){return Ur.fun(e)||Ur.arr(e)&&Ur.obj(e[0])}var Ya={tension:170,friction:26,mass:1,damping:1,easing:Ni.linear,clamp:!1},Ua=class{constructor(){this.velocity=0,Object.assign(this,Ya)}};function qa(e,t){if(Ur.und(t.decay)){const n=!Ur.und(t.tension)||!Ur.und(t.friction);!n&&Ur.und(t.frequency)&&Ur.und(t.damping)&&Ur.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Qa=[],Ja=class{constructor(){this.changed=!1,this.values=Qa,this.toValues=null,this.fromValues=Qa,this.config=new Ua,this.immediate=!1}};function Za(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,u=Ia(n.cancel??r?.cancel,t);if(u)f();else{Ur.und(n.pause)||(i.paused=Ia(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||Ia(e,t)),l=Ca(n.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(c),c.cancel(),l=c.time-Dr.now()}function h(){l>0&&!Wr.skipAnimation?(i.delayed=!0,c=Dr.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(c),e<=(i.cancelId||0)&&(u=!0);try{a.start({...n,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var Ga=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?eo(e.get()):t.every((e=>e.noop))?Xa(e.get()):Ka(e.get(),t.every((e=>e.finished))),Xa=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Ka=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),eo=e=>({value:e,cancelled:!0,finished:!1});function to(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Va(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&eo(r)||i!==n.asyncId&&Ka(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new ro,o=new io;return(async()=>{if(Wr.skipAnimation)throw no(n),o.result=Ka(r,!1),d(o),o;f(a);const s=Ur.obj(e)?{...e}:{...t,to:e};s.parentId=i,Jr(c,((e,t)=>{Ur.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(Wr.skipAnimation)return no(n),Ka(r,!1);try{let t;t=Ur.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=Ka(r.get(),!0,!1)}catch(e){if(e instanceof ro)m=e.result;else{if(!(e instanceof io))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return Ur.fun(o)&&Dr.batchedUpdates((()=>{o(m,r,r.item)})),m})():l}function no(e,t){Gr(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var ro=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},io=class extends Error{constructor(){super("SkipAnimationSignal")}},ao=e=>e instanceof so,oo=1,so=class extends qi{constructor(){super(...arguments),this.id=oo++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=va(this);return e&&e.getValue()}to(...e){return Wr.to(this,e)}interpolate(...e){return ua(`${la}The "interpolate" function is deprecated in v9 (use "to" instead)`),Wr.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Ui(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||ui.sort(this),Ui(this,{type:"priority",parent:this,priority:e})}},lo=Symbol.for("SpringPhase"),co=e=>(1&e[lo])>0,uo=e=>(2&e[lo])>0,ho=e=>(4&e[lo])>0,fo=(e,t)=>t?e[lo]|=3:e[lo]&=-3,po=(e,t)=>t?e[lo]|=4:e[lo]&=-5,mo=class extends so{constructor(e,t){if(super(),this.animation=new Ja,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ur.und(e)||!Ur.und(t)){const n=Ur.obj(e)?{...e}:{...t,from:e};Ur.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(uo(this)||this._state.asyncTo)||ho(this)}get goal(){return Wi(this.animation.to)}get velocity(){const e=va(this);return e instanceof Fa?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return co(this)}get isAnimating(){return uo(this)}get isPaused(){return ho(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=wa(r.to);!o&&Li(r.to)&&(i=Zr(Wi(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==xa?1:o?o[l].lastPosition:i[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Ur.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Ur.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,r=a.clamp?0:a.bounce,l=!Ur.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(o=-o*r,d=c));o+=(1e-6*-a.tension*(d-c)+.001*-a.friction*o)/a.mass*g,d+=o*g}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+a.easing(r)*(c-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,a.round)&&(n=!0)}));const s=va(this),l=s.getValue();if(t){const e=Wi(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Dr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(uo(this)){const{to:e,config:t}=this.animation;Dr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Ur.und(e)?(n=this.queue||[],this.queue=[]):n=[Ur.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>Ga(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),no(this._state,e&&this._lastCallId),Dr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Ur.obj(n)?n[t]:n,(null==n||Wa(n))&&(n=void 0),r=Ur.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return co(this)||(e.reverse&&([n,r]=[r,n]),r=Wi(r),Ur.und(r)?va(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Va(e,((e,t)=>/^on/.test(t)?Pa(e,n):e))),So(this,e,"onProps"),Fo(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Za(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{ho(this)||(po(this,!0),ei(a.pauseQueue),Fo(this,"onPause",Ka(this,go(this,this.animation.to)),this))},resume:()=>{ho(this)&&(po(this,!1),uo(this)&&this._resume(),ei(a.resumeQueue),Fo(this,"onResume",Ka(this,go(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=yo(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(eo(this));const r=!Ur.und(e.to),i=!Ur.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(eo(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Ur.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!qr(d,c);h&&(s.from=d),d=Wi(d);const f=!qr(u,l);f&&this._focus(u);const p=Wa(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(qa(n={...n},t),t={...n,...t}),qa(e,t),Object.assign(e,t);for(const t in Ya)null==e[t]&&(e[t]=Ya[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;Ur.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(m,Ca(t.config,a),t.config!==o.config?Ca(o.config,a):void 0);let b=va(this);if(!b||Ur.und(u))return n(Ka(this,!0));const v=Ur.und(t.reset)?i&&!t.default:!Ur.und(d)&&Ia(t.reset,a),$=v?d:this.get(),w=La(u),S=Ur.num(w)||Ur.arr(w)||ha(w),F=!p&&(!S||Ia(o.immediate||t.immediate,a));if(f){const e=_a(u);if(e!==b.constructor){if(!F)throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);b=this._set(w)}}const x=b.constructor;let B=Li(u),D=!1;if(!B){const e=v||!co(this)&&h;(f||e)&&(D=qr(La($),w),B=!D),(qr(s.immediate,F)||F)&&qr(m.decay,g)&&qr(m.velocity,y)||(B=!0)}if(D&&uo(this)&&(s.changed&&!v?B=!0:B||this._stop(l)),!p&&((B||Li(l))&&(s.values=b.getPayload(),s.toValues=Li(u)?null:x==xa?[1]:Zr(w)),s.immediate!=F&&(s.immediate=F,F||v||this._set(l)),B)){const{onRest:e}=s;Qr(wo,(e=>So(this,t,e)));const r=Ka(this,go(this,l));ei(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Dr.batchedUpdates((()=>{s.changed=!v,e?.(r,this),v?Ca(o.onRest,r):s.onStart?.(r,this)}))}v&&this._set($),p?n(to(t.to,t,this._state,this)):B?this._start():uo(this)&&!f?this._pendingCalls.add(n):n(Xa($))}_focus(e){const t=this.animation;e!==t.to&&(Yi(this)&&this._detach(),t.to=e,Yi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Li(t)&&(Ji(t,this),ao(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Li(e)&&Zi(e,this)}_set(e,t=!0){const n=Wi(e);if(!Ur.und(n)){const e=va(this);if(!e||!qr(n,e.getValue())){const r=_a(n);e&&e.constructor==r?e.setValue(n):$a(this,r.create(n)),e&&Dr.batchedUpdates((()=>{this._onChange(n,t)}))}}return va(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Fo(this,"onStart",Ka(this,go(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Ca(this.animation.onChange,e,this)),Ca(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;va(this).reset(Wi(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),uo(this)||(fo(this,!0),ho(this)||this._resume())}_resume(){Wr.skipAnimation?this.finish():ui.start(this)}_stop(e,t){if(uo(this)){fo(this,!1);const n=this.animation;Qr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Ui(this,{type:"idle",parent:this});const r=t?eo(this.get()):Ka(this.get(),go(this,e??n.to));ei(this._pendingCalls,r),n.changed&&(n.changed=!1,Fo(this,"onRest",r,this))}}};function go(e,t){const n=La(t);return qr(La(e.get()),n)}function yo(e,t=e.loop,n=e.to){const r=Ca(t);if(r){const i=!0!==r&&Ra(r),a=(i||e).reverse,o=!i||i.reset;return bo({...e,loop:t,default:!1,pause:void 0,to:!a||Wa(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function bo(e){const{to:t,from:n}=e=Ra(e),r=new Set;return Ur.obj(t)&&$o(t,r),Ur.obj(n)&&$o(n,r),e.keys=r.size?Array.from(r):null,e}function vo(e){const t=bo(e);return Ur.und(t.default)&&(t.default=Va(t)),t}function $o(e,t){Jr(e,((e,n)=>null!=e&&t.add(n)))}var wo=["onStart","onRest","onChange","onPause","onResume"];function So(e,t,n){e.animation[n]=t[n]!==Ta(t,n)?Pa(t[n],e.key):void 0}function Fo(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var xo=["onStart","onChange","onRest"],Bo=1,Do=class{constructor(e,t){this.id=Bo++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Ur.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(bo(e)),this}start(e){let{queue:t}=this;return e?t=Zr(e).map(bo):this.queue=[],this._flush?this._flush(this,t):(Ao(this,t),ko(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Qr(Zr(t),(t=>n[t].stop(!!e)))}else no(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ur.und(e))this.start({pause:!0});else{const t=this.springs;Qr(Zr(e),(e=>t[e].pause()))}return this}resume(e){if(Ur.und(e))this.start({pause:!1});else{const t=this.springs;Qr(Zr(e),(e=>t[e].resume()))}return this}each(e){Jr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Gr(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&Gr(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,Gr(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Dr.onFrame(this._onFrame)}};function ko(e,t){return Promise.all(t.map((t=>Oo(e,t)))).then((t=>Ga(e,t)))}async function Oo(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=Ur.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const u=Ur.arr(i)||Ur.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Qr(xo,(n=>{const r=t[n];if(Ur.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,ei(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Ta(t,"cancel");(u||f&&d.asyncId)&&h.push(Za(++e._lastAsyncId,{props:t,state:d,actions:{pause:Yr,resume:Yr,start(t,n){f?(no(d,e._lastAsyncId),n(eo(e))):(t.onRest=s,n(to(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Ga(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=yo(t,o,i);if(n)return Ao(e,[n]),Oo(e,n,!0)}return l&&Dr.batchedUpdates((()=>l(p,e,e.item))),p}function _o(e,t){const n={...e.springs};return t&&Qr(Zr(t),(e=>{Ur.und(e.keys)&&(e=bo(e)),Ur.obj(e.to)||(e={...e,to:void 0}),Eo(n,e,(e=>Ho(e)))})),Mo(e,n),n}function Mo(e,t){Jr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ji(t,e))}))}function Ho(e,t){const n=new mo;return n.key=e,t&&Ji(n,t),n}function Eo(e,t,n){t.keys&&Qr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Ao(e,t){Qr(t,(t=>{Eo(e.springs,t,(t=>Ho(t,e)))}))}var Co,Io,Po=({children:e,...t})=>{const n=m(To),i=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=a(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return d((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=To;return r.createElement(l,{value:t},e)},To=(Co=Po,Io={},Object.assign(Co,r.createContext(Io)),Co.Provider._context=Co,Co.Consumer._context=Co,Co);Po.Provider=To.Provider,Po.Consumer=To.Consumer;var zo=()=>{const e=[],t=function(t){da(`${la}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Qr(e,((e,i)=>{if(Ur.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Qr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Qr(e,(e=>e.resume(...arguments))),this},t.set=function(t){Qr(e,((e,n)=>{const r=Ur.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Qr(e,((e,r)=>{if(Ur.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Qr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Qr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Ur.fun(e)?e(n,t):e};return t._getProps=n,t};function Vo(e,t){const n=Ur.fun(e),[[r],i]=function(e,t,n){const r=Ur.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?zo():void 0),[]),o=a(0),s=pa(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=_o(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ko(e,t):new Promise((r=>{Mo(e,n),l.queue.push((()=>{r(ko(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=ya(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Do(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=vo(n))}}g((()=>{Qr(c.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>_o(e,u[t]))),p=m(Po),y=ya(p),b=p!==y&&function(e){for(const t in e)return!0;return!1}(p);fa((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Qr(e,(e=>e()))),Qr(c.current,((e,t)=>{i?.add(e),b&&e.start({default:p});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ma((()=>()=>{Qr(l.ctrls,(e=>e.stop(!0)))}));const v=f.map((e=>({...e})));return i?[v,i]:v}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}var No=class extends so{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Ai(...t);const n=this._get(),r=_a(n);$a(this,r.create(n))}advance(e){const t=this._get();qr(t,this.get())||(va(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Ro(this._active)&&Lo(this)}_get(){const e=Ur.arr(this.source)?this.source.map(Wi):Zr(Wi(this.source));return this.calc(...e)}_start(){this.idle&&!Ro(this._active)&&(this.idle=!1,Qr(wa(this),(e=>{e.done=!1})),Wr.skipAnimation?(Dr.batchedUpdates((()=>this.advance())),Lo(this)):ui.start(this))}_attach(){let e=1;Qr(Zr(this.source),(t=>{Li(t)&&Ji(t,this),ao(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Qr(Zr(this.source),(e=>{Li(e)&&Zi(e,this)})),this._active.clear(),Lo(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Zr(this.source).reduce(((e,t)=>Math.max(e,(ao(t)?t.priority:0)+1)),0))}};function jo(e){return!1!==e.idle}function Ro(e){return!e.size||Array.from(e).every(jo)}function Lo(e){e.idle||(e.idle=!0,Qr(wa(e),(e=>{e.done=!0})),Ui(e,{type:"idle",parent:e}))}Wr.assign({createStringInterpolator:sa,to:(e,t)=>new No(e,t)});var Wo=/^--/;function Yo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Wo.test(e)||qo.hasOwnProperty(e)&&qo[e]?(""+t).trim():t+"px"}var Uo={};var qo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qo=["Webkit","Ms","Moz","O"];qo=Object.keys(qo).reduce(((e,t)=>(Qo.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),qo);var Jo=/^(matrix|translate|scale|rotate|skew)/,Zo=/^(translate)/,Go=/^(rotate|skew)/,Xo=(e,t)=>Ur.num(e)&&0!==e?e+t:e,Ko=(e,t)=>Ur.arr(e)?e.every((e=>Ko(e,t))):Ur.num(e)?e===t:parseFloat(e)===t,es=class extends Da{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>Xo(e,"px"))).join(",")})`,Ko(e,0)]))),Jr(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Jo.test(t)){if(delete r[t],Ur.und(e))return;const n=Zo.test(t)?"px":Go.test(t)?"deg":"";i.push(Zr(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Xo(i,n)})`,Ko(i,0)]:e=>[`${t}(${e.map((e=>Xo(e,n))).join(",")})`,Ko(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new ts(i,a)),super(r)}},ts=class extends qi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Qr(this.inputs,((n,r)=>{const i=Wi(n[0]),[a,o]=this.transforms[r](Ur.arr(i)?i:n.map(Wi));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Qr(this.inputs,(e=>Qr(e,(e=>Li(e)&&Ji(e,this)))))}observerRemoved(e){0==e&&Qr(this.inputs,(e=>Qr(e,(e=>Li(e)&&Zi(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Ui(this,e)}};Wr.assign({batchedUpdates:x,createStringInterpolator:sa,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ns,rs=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new Da(e),getComponentProps:r=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=Aa(e)||"Anonymous";return(e=Ur.str(e)?a[e]||(a[e]=Ma(e,i)):e[Ea]||(e[Ea]=Ma(e,i))).displayName=`Animated(${t})`,e};return Jr(e,((t,n)=>{Ur.arr(e)&&(n=Aa(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:r,style:i,children:a,scrollTop:o,scrollLeft:s,viewBox:l,...c}=t,u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:Uo[t]||(Uo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const t in i)if(i.hasOwnProperty(t)){const n=Yo(t,i[t]);Wo.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==r&&(e.className=r),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new es(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),is=rs.animated;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ns||(ns={}));var as={exports:{}};as.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},b={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",$={};$[v]=g;var w="$isDayjsObject",S=function(e){return e instanceof D||!(!e||!e[w])},F=function e(t,n,r){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(v=i),i||!r&&v},x=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},B=b;B.l=F,B.i=S,B.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return B.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!B.u(t)||t,u=B.p(e),f=function(e,t){var i=B.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return B.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,b="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var v=this.$locale().weekStart||0,$=(m<v?m+7:m)-v;return f(r?y-$:y+(6-$),g);case s:case h:return p(b+"Hours",0);case o:return p(b+"Minutes",1);case a:return p(b+"Seconds",2);case i:return p(b+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=B.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[B.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=B.p(u),m=function(e){var t=x(f);return B.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[a]=t,h[o]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return B.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},h=function(e){return B.s(a%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return B.s(t.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return B.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return B.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return B.s(o,2,"0");case"s":return String(t.$s);case"ss":return B.s(t.$s,2,"0");case"SSS":return B.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=this,g=B.p(h),y=x(r),b=(y.utcOffset()-this.utcOffset())*t,v=this-y,$=function(){return B.m(m,y)};switch(g){case d:p=$()/12;break;case c:p=$();break;case u:p=$()/3;break;case l:p=(v-b)/6048e5;break;case s:p=(v-b)/864e5;break;case o:p=v/n;break;case a:p=v/t;break;case i:p=v/e;break;default:p=v}return f?p:B.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=F(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),k=D.prototype;return x.prototype=k,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=F,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=$[v],x.Ls=$,x.p={},x}();var os,ss,ls=V(as.exports);!function(e){e.AM="AM",e.PM="PM"}(os||(os={})),function(e){e.roundToNearestInterval=(e,t,n)=>{const[r,i]=e.split(":"),a=parseInt(r,10),o=parseInt(i,10);if(isNaN(a)||isNaN(o)||o<0||o>=60)throw new Error("Invalid time format");const s=60*a+o,l=s%t,c=0===l?s:n?s+(t-l):s-l,u=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=ls(e,r),a=ls(t,r);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(n)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:os.AM};if(!t)return n;try{if("24hr"===e){const r=ds(t,e);n.minute=ns.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=os.AM,n.hour=0===i?"12":ns.padValue(i.toString())):(n.period=os.PM,n.hour=12===i?i.toString():ns.padValue((i-12).toString()))}else{const r=ds(t,e);n.hour=ns.padValue(r.hour),n.minute=ns.padValue(r.minute),n.period="am"===r.period.toLowerCase()?os.AM:os.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?ns.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return ns.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?ns.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?ns.padValue(r.toString()):13===r?ns.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===os.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return ns.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=ds(e,t),r=ns.padValue(n.hour);let i=`${r}:${ns.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&a<12&&(a+=12),"am"===n&&12===a&&(a=0),hs(a,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const a=[];let o=0,s=1440-t;for(r&&(o=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const r=o%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=hs(e,r,t);a.push(n)}else{const t=hs(e,r);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const a=parseInt(r[3]||"0",10);let o=r[4];if(void 0===r[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),hs(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return hs(i,a,o)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",a=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<a)a=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&12!==a&&(a+=12),"am"===n&&12===a&&(a=0),60*a+i}}(ss||(ss={}));const cs=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},us=e=>{const t=parseInt(e);return t>=0&&t<=59},ds=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!cs(n[0],t)||!us(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!cs(n[0],t)||!us(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},hs=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,fs={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ps=e=>Object.keys(fs).reduce(((t,n)=>{const r=fs[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ms=ps("max-width"),gs=(ps("min-width"),y.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ys=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,bs=y.div`
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
    animation: ${ys} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,vs=y(bs)`
    animation-delay: -0.45s;
`,$s=y(bs)`
    animation-delay: -0.3s;
`,ws=y(bs)`
    animation-delay: -0.15s;
`,Ss=y.button`
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
                        ${e.$buttonIsDanger?nn.Button.Danger.Border:Kt.Primary};

                    color: ${e.$buttonIsDanger?nn.Button.Danger.Primary:Kt.Primary};
                `;case"light":return b`
                    background-color: ${Kt.Neutral[8]};
                    border: 1px solid ${Kt.Neutral[5]};

                    color: ${e.$buttonIsDanger?nn.Button.Danger.Primary:Kt.Primary};
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

                    color: ${e.$buttonIsDanger?nn.Button.Danger.Primary:Kt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?nn.Button.Danger.Hover:Kt.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?nn.Button.Danger.BackgroundColor:Kt.Primary};
                    border: 1px solid transparent;

                    ${ms.mobileL} {
                        width: 100%;
                    }

                    color: ${Kt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    ${gn("H5","semibold")}

                    ${ms.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${gn("H4","semibold")}

                    ${ms.mobileS} {
                        height: auto;
                    }
                `}
`,Fs=y((({color:n,className:r,size:i=18})=>e(gs,Object.assign({className:r,$size:i,$color:n,"data-testid":"component-loading-spinner"},{children:[t(bs,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(vs,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t($s,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(ws,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    ${e=>{let t=e.$buttonIsDanger?nn.Button.Danger.Primary:Kt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Kt.Neutral[3](e);break;default:t=Kt.Neutral[8](e)}return b`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,xs={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=T(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ss,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(Fs,Object.assign({},u)),t("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=T(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ss,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(Fs,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},Bs=y.div`
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
`,Ds=({type:e,active:n=!1,disabled:r,className:i})=>{let a;switch(e){case"checkbox":a=t(n?_:O,{});break;case"radio":a=t(n?D:B,{});break;case"tick":a=t(M,{});break;case"cross":a=t(k,{});break;default:a=null}return t(Bs,Object.assign({className:i,$active:n,disabled:r},{children:a}))};var ks={exports:{}};ks.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},h={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[r,l("day")],Do:[a,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],w:[i,l("week")],ww:[r,l("week")],M:[i,l("month")],MM:[r,l("month")],MMM:[a,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=h[c],d=u&&u[0],f=u&&u[1];a[l]=f?{regex:d,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=f(t)(e),a=i.year,o=i.month,s=i.day,l=i.hours,c=i.minutes,u=i.seconds,d=i.milliseconds,h=i.zone,p=i.week,m=new Date,g=s||(a||o?1:m.getDate()),y=a||m.getFullYear(),b=0;a&&!o||(b=o>0?o-1:m.getMonth());var v,$=l||0,w=c||0,S=u||0,F=d||0;return h?new Date(Date.UTC(y,b,g,$,w,S,F+60*h.offset*1e3)):n?new Date(Date.UTC(y,b,g,$,w,S,F)):(v=new Date(y,b,g,$,w,S,F),p&&(v=r(v).week(p).toDate()),v)}catch(e){return new Date("")}}(t,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Os=V(ks.exports),_s={exports:{}};_s.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var Ms=V(_s.exports),Hs={exports:{}};Hs.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Es=V(Hs.exports),As={exports:{}};As.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Cs,Is,Ps,Ts=V(As.exports),zs={exports:{}},Vs=V(zs.exports=(Cs={year:0,month:1,day:2,hour:3,minute:4,second:5},Is={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Is[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Is[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=Cs[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i,a=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),l=Math.round((o-new Date(s))/1e3/60),c=15*-Math.round(o.getTimezoneOffset()/15)-l;if(Number(c)){if(i=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var u=i.utcOffset();i=i.add(a-u,"minute")}}else i=this.utcOffset(0,t);return i.$x.$timezone=e,i},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));ls.extend(Ms),ls.extend(Ts),ls.extend(Es),ls.extend(Os),ls.extend(Vs),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=ls(t).startOf("week");return Ns(n).map((e=>js(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return js(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(ls(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ls(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ls(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?ls(r):void 0,i?ls(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Ps||(Ps={}));const Ns=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},js=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Rs=[1,3,5,7,8,10,12],Ls=[4,6,9,11];var Ws,Ys,Us;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":Rs.includes(a)?Math.min(i,31).toString():Ls.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=ls(e,n);return ls(t,n).diff(r,"minute")},e.toDayjs=e=>e?ls(e):ls(),e.addMinutesToTime=(e,t,n="HH:mm")=>ls(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>ls(e).isSame(ls(t),n)}(Ws||(Ws={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!ls(e).isBefore(r,"day"))||!(!i||!ls(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(ls(e).isValid())return e}return""}}(Ys||(Ys={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Us||(Us={}));const qs=(e,t,n="window",r)=>{const i=a();d((()=>{i.current=t}),[t]),d((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,r),()=>{t.removeEventListener(e,a,r)}}),[e,n])},Qs=e=>{const{textSize:t}=e||{};return b`
        // Text styling
        ${t&&gn(t,"regular")}

        strong {
            font-family: ${rn.OpenSans.Semibold};
            ${t&&gn(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${rn.OpenSans.Semibold};
            ${t&&gn(t,"semibold")}
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
    `},Js=y.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=Kt.Validation.Red.Background(e),n=Kt.Validation.Red.Border(e);break;case"success":t=Kt.Validation.Green.Background(e),n=Kt.Validation.Green.Border(e);break;case"warning":default:t=Kt.Validation.Orange.Background(e),n=Kt.Validation.Orange.Border(e);break;case"info":t=Kt.Validation.Blue.Background(e),n=Kt.Validation.Blue.Border(e);break;case"description":t=Kt.Neutral[7](e),n=Kt.Neutral[4](e)}return b`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${Kt.Neutral[1]};
    ${e=>"small"===e.$sizeType?Qs({textSize:"H6"}):Qs({textSize:"BodySmall"})}
`,Zs=y.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&b`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Kt.Validation.Red.Icon(e);break;case"success":t=Kt.Validation.Green.Icon(e);break;case"warning":default:t=Kt.Validation.Orange.Icon(e);break;case"info":t=Kt.Validation.Blue.Icon(e);break;case"description":t=Kt.Neutral[4](e)}return b`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,Gs=y(bn.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?b`
                ${gn("H6","semibold")}
                margin-top: 0.25rem;
            `:b`
                ${gn("H5","semibold")}
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
`,Xs=y.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Ks=y.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,el=y.button`
    ${e=>"small"===e.$sizeType?b`
                ${gn("H6","semibold")}
            `:b`
                ${gn("H5","semibold")}
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
`,tl=y(P)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,nl=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,rl=(y.ol`
    ${e=>nl(e.bottomMargin)}
    margin-left: ${3}rem;

    ${ms.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>gn(e.size,"regular")}
        position: relative;
        color: ${Kt.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return b`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){return b`
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
`,y.ul`
    ${e=>nl(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>gn(e.size,"regular")}
        color: ${Kt.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),il=e=>{var{size:n="Body",children:r}=e,i=T(e,["size","children"]);return t(rl,Object.assign({size:n},i,{children:r}))},al=y.div`
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

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return b`
                min-width: unset;
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
`,ol=y.input`
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
`,sl=y.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,ll=y.label`
    ${e=>e.$selected&&!e.$indicator?b`
                ${gn("H4","semibold")}
            `:b`
                ${gn("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${ms.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${ms.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${Kt.Neutral[1]};

    ${e=>e.$disabled?b`
                color: ${Kt.Neutral[3]};
            `:e.$selected?b`
                color: ${Kt.Primary};
            `:void 0}
`,cl=y.div`
    ${gn("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${mn("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?b`
                color: ${Kt.Neutral[3]};
            `:e.$selected?b`
                color: ${Kt.Primary};
            `:b`
                color: ${Kt.Neutral[1]};
            `}
`,ul=y.div`
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
`,dl=y.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,hl=y.button`
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Icon};
    white-space: nowrap;
    ${gn("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,fl=y.button`
    color: ${e=>e.disabled?Kt.Neutral[3]:Kt.Primary};
    ${gn("H4","semibold")}
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
`,pl=y.div`
    width: 100%;
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ml=y((n=>{var{type:r,className:i,children:a,actionLink:s,actionLinkIcon:l,sizeType:c="default",showIcon:u=!1,customIcon:h,maxCollapsedHeight:f}=n,p=T(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[m,g]=o(!1),[y,b]=o(!1),{height:v,ref:$}=xr();d((()=>{w()}),[f,v]);const w=()=>{g(!f),b(S())},S=()=>!!f&&v>f;return e(Js,Object.assign({className:i,$type:r,$sizeType:c,"data-testid":p["data-testid"]},{children:[u&&t(Zs,Object.assign({$sizeType:c,$type:r},{children:(()=>{if(r&&h)return h;switch(r){case"success":return t(I,{});case"warning":return t(A,{});case"error":return t(E,{});case"info":case"description":return t(C,{});default:return null}})()})),e(Xs,{children:[e(Ks,Object.assign({$maxCollapsedHeight:S()?f:void 0,$showMore:m,$hasActionLink:!!s},{children:[t("div",Object.assign({ref:$},{children:a})),s&&e(Gs,Object.assign({"data-testid":"action-link",$type:r,$sizeType:c},s,{children:[s.children,l||t(H,{})]}))]})),y&&e(el,Object.assign({$sizeType:c,$type:r,type:"button",onClick:()=>g(!m)},{children:["Show ",m?"less":"more",t(tl,{$expanded:m})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,gl=y.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${Qs({textSize:"BodySmall"})}

    ${e=>e.$disabled?b`
                color: ${Kt.Neutral[3]};
            `:e.$selected?b`
                color: ${Kt.Primary};
            `:b`
                color: ${Kt.Neutral[1]};
            `}
`,yl=y(bn.BodySmall)`
    color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Text};
`,bl=y(il)`
    li {
        color: ${e=>e.$disabled?Kt.Neutral[3]:Kt.Validation.Red.Text};
    }
`,vl=y.button`
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
`,$l=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=T(e,["children","focusHighlight","focusOutline","type"]);return t(vl,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),wl=y(is.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Kt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${ms.mobileS} {
        max-width: 100%;
    }
`,Sl=y.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Fl=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${ms.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,xl=y.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${ms.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Bl=y.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${ms.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Dl=y.div`
    display: flex;
    gap: 0.5rem;

    ${ms.tablet} {
        flex-direction: column;
    }

    ${ms.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,kl=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${ms.mobileS} {
        width: 6rem;
    }
`,Ol=y($l)`
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
`,_l=y(bn.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${ms.tablet} {
        margin: 0;
    }

    ${ms.mobileS} {
        margin: 0 0.25rem;
    }
`,Ml=y(_n)`
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

    ${ms.mobileS} {
        width: 100%;
    }
`,Hl=y((({type:r="checkbox",indicator:i,checked:s,styleType:l="default",children:c,childrenMaxLines:u,subLabel:h,disabled:f,error:p,name:m,id:y,className:b,compositeSection:v,removable:$,onRemove:F,"data-testid":x,onChange:B,useContentWidth:D})=>{const{collapsible:k=!0,errors:O,children:_,initialExpanded:M}=v||{},[H,E]=o(s),[A,C]=o(M),I=g((()=>{const e=Array.isArray(O)&&(null==O?void 0:O.length)>0,t=!Array.isArray(O)&&!!O;return e||t}),[O]),[P]=o(Us.generate()),T=y?`${y}`:`tg-${P}`,z=a();d((()=>{E(s)}),[s]),d((()=>{H&&C(null==M||M)}),[H]);const V=e=>{if(!f){if(B)return void B(e);switch(r){case"checkbox":E((e=>!e));break;case"radio":case"yes":case"no":H||E(!0)}}},N=()=>{f||C(!A)},j=()=>{f||!F||F()},R=()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(Ds,{type:e,active:H,disabled:f})},L=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(cl,Object.assign({"data-id":"toggle-sublabel",$disabled:f,$selected:H},{children:e}))},W=()=>{const n=!A&&!I;return k&&e(fl,Object.assign({$paddingTopRequired:n,disabled:f,onClick:N,"data-testid":A?"collapse-button":"expand-button"},{children:[A?"Show less":"Show more",t(A?S:w,{"aria-hidden":!0})]}))},Y=r=>e(n,{children:[t(yl,Object.assign({weight:"semibold",$disabled:f},{children:"Error"})),t(bl,Object.assign({$disabled:f},{children:null==r?void 0:r.map(((e,n)=>t("li",Object.assign({id:`${T}-error-list-item-${n}`},{children:t(yl,Object.assign({weight:"semibold",$disabled:f},{children:e}))}),n)))}))]});return e(al,Object.assign({$selected:H,$disabled:f,className:b,$styleType:l,$error:p,$indicator:i,$useContentWidth:D,id:y,"data-testid":x},{children:[e(ul,Object.assign({id:`${T}-header-container`,$disabled:f,$error:p,$selected:H,$indicator:i,$styleType:l},{children:[e(dl,Object.assign({$addPadding:$},{children:[t(ol,{ref:z,name:m,id:`${T}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:V,checked:H}),i&&R(),e(sl,{children:[t(ll,Object.assign({htmlFor:`${T}-input`,$selected:H,$indicator:i,$disabled:f,"data-testid":`${T}-toggle-label`,$maxLines:u},{children:c})),h&&L()]})]})),$&&t(hl,Object.assign({type:"button",$disabled:f,onClick:j,id:`${T}-remove-button`},{children:"Remove"}))]})),_&&e("div",{children:[(!k||A)&&t(gl,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!k,$disabled:f},{children:_})),k&&!A&&I&&t(pl,Object.assign({$disabled:f,onClick:N,id:`${T}-error-alert`},{children:t(ml,Object.assign({type:f?"description":"error",className:b,showIcon:!0},{children:Array.isArray(O)?Y(O):O}))})),W()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,El=y(xs.Small)`
    width: 7rem;

    ${ms.mobileL} {
        flex: 1;
    }

    ${ms.mobileS} {
        width: 100%;
    }
`;var Al,Cl,Il;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Al||(Al={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Cl||(Cl={})),function(e){e.AM="am",e.PM="pm"}(Il||(Il={}));const Pl=({id:n,value:r,show:i,format:s,onChange:l,onCancel:c})=>{const u=ss.getTimeValues(s,r),[h,f]=o(u.hour),[m,g]=o(u.minute),[y,b]=o(u.period),v=a(),$=a(),F=xr();d((()=>{if(i&&v.current&&v.current.focus(),i){const{hour:e,minute:t,period:n}=ss.getTimeValues(s,r);f(e),g(t),b(n)}}),[i,r,s]),d((()=>{const e=v.current,t=$.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},B=p((e=>{switch(e.currentTarget.name){case Al.MINUTE_UP:g(ss.updateMinutes(m,"add"));break;case Al.MINUTE_DOWN:g(ss.updateMinutes(m,"minus"));break;case Al.HOUR_UP:f(ss.updateHours(h,"add"));break;case Al.HOUR_DOWN:f(ss.updateHours(h,"minus"))}}),[h,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case Cl.HOUR:t.length<=2&&f(t);break;case Cl.MINUTE:t.length<=2&&g(t)}},O=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Cl.HOUR:{const n=t>23||t<0?u.hour:ss.convertHourTo12HourFormat(e.target.value);f(n);break}case Cl.MINUTE:{const n=t>59||t<0?u.minute:e.target.value;g(ns.padValue(n));break}}},_=e=>{switch(e.target.name){case Il.AM:b(os.AM);break;case Il.PM:b(os.PM)}},M=e=>n?`${n}-${e}`:e,H=Vo({height:i?F.height+32:0});return t(wl,Object.assign({"data-testid":"animated-dropdown-wrapper",style:H},{children:e(Sl,Object.assign({ref:F.ref,"data-testid":M("timepicker-dropdown"),inert:i?void 0:""},{children:[e(Fl,{children:[e(Bl,{children:[e(kl,{children:[t(Ol,Object.assign({"aria-label":"increase hour",name:Al.HOUR_UP,tabIndex:-1,onClick:B,"data-testid":M("hour-increment-button")},{children:t(S,{})})),t(Ml,{"aria-label":"hour",type:"number",name:Cl.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:D,onChange:k,onBlur:O,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Ol,Object.assign({"aria-label":"decrease hour",name:Al.HOUR_DOWN,tabIndex:-1,onClick:B,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(_l,{children:":"}),e(kl,{children:[t(Ol,Object.assign({"aria-label":"increase minute",name:Al.MINUTE_UP,tabIndex:-1,onClick:B,"data-testid":M("minute-increment-button")},{children:t(S,{})})),t(Ml,{"aria-label":"minute",type:"number",name:Cl.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:$,value:m,onChange:k,onBlur:O,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Ol,Object.assign({"aria-label":"decrease minute",name:Al.MINUTE_DOWN,tabIndex:-1,onClick:B,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Dl,{children:[t(Hl,Object.assign({checked:y===os.AM,name:Il.AM,type:"radio",onChange:_,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(Hl,Object.assign({checked:y===os.PM,name:Il.PM,type:"radio",onChange:_,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(xl,{children:[t(El,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:c,"data-testid":M("cancel-button")},{children:"Cancel"})),t(El,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?ss.convertTo24HourFormat({hour:h,minute:m,period:y}):`${h}:${m}${y}`,l(e)},disabled:""===h||""===m,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))};y.div`
    position: relative;
`;const Tl=y(_n)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,zl=n=>{var{id:r,disabled:i=!1,readOnly:s=!1,error:l,value:c,placeholder:u,format:d="24hr",onChange:h,onFocus:f,onBlur:m}=n,g=T(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[y,b]=o(!1),v=a();qs("mousedown",(function(e){i||s||S(e)}),"document"),qs("keyup",(function(e){if("Tab"===e.code)S(e)}),"document");const $=()=>{i||s||y||(b(!0),f&&f())};const w=()=>{b(!1),m&&m()},S=e=>{v.current&&!v.current.contains(e.target)&&y&&w()},F=p((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,u]);return e(On,Object.assign({ref:v,id:r,$readOnly:s,$disabled:i,$error:l},g,{children:[t(Tl,{onFocus:$,focused:y,readOnly:!0,placeholder:u||F(),value:ss.formatDisplayValue(c,d),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),t(Pl,{id:r,show:y,value:c,format:d,onCancel:()=>{w()},onChange:e=>{h&&h(e),w()}})]}))};export{zl as Timepicker};
//# sourceMappingURL=index.js.map
