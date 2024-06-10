import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as r from"react";import n,{useRef as i,useState as a,isValidElement as o,createRef as s,cloneElement as u,PureComponent as l,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import m,{css as y,keyframes as v}from"styled-components";import{ExternalIcon as b}from"@lifesg/react-icons/external";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as F}from"react-dom";import{CircleIcon as x}from"@lifesg/react-icons/circle";import{CircleDotIcon as D}from"@lifesg/react-icons/circle-dot";import{CrossIcon as B}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as k}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as O}from"@lifesg/react-icons/tick";function M(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function A(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H=Array.isArray,C="object"==typeof E&&E&&E.Object===Object&&E,I="object"==typeof self&&self&&self.Object===Object&&self,P=C||I||Function("return this")(),T=P.Symbol,z=T,j=Object.prototype,R=j.hasOwnProperty,N=j.toString,V=z?z.toStringTag:void 0;var L=function(e){var t=R.call(e,V),r=e[V];try{e[V]=void 0;var n=!0}catch(e){}var i=N.call(e);return n&&(t?e[V]=r:delete e[V]),i},W=Object.prototype.toString;var Y=L,U=function(e){return W.call(e)},q=T?T.toStringTag:void 0;var Q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?Y(e):U(e)};var Z=Q,G=function(e){return null!=e&&"object"==typeof e};var X=function(e){return"symbol"==typeof e||G(e)&&"[object Symbol]"==Z(e)},J=H,K=X,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/;var re=function(e,t){if(J(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!K(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Object(t))};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=Q,ae=ne;var oe,se=function(e){if(!ae(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ue=P["__core-js_shared__"],le=(oe=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var ce=function(e){return!!le&&le in e},de=Function.prototype.toString;var he=se,fe=ce,pe=ne,ge=function(e){if(null!=e){try{return de.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,ye=Function.prototype,ve=Object.prototype,be=ye.toString,we=ve.hasOwnProperty,$e=RegExp("^"+be.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!pe(e)||fe(e))&&(he(e)?$e:me).test(ge(e))},Fe=function(e,t){return null==e?void 0:e[t]};var xe=function(e,t){var r=Fe(e,t);return Se(r)?r:void 0},De=xe(Object,"create"),Be=De;var _e=function(){this.__data__=Be?Be(null):{},this.size=0};var ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=De,Me=Object.prototype.hasOwnProperty;var Ee=function(e){var t=this.__data__;if(Oe){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Me.call(t,e)?t[e]:void 0},Ae=De,He=Object.prototype.hasOwnProperty;var Ce=De;var Ie=_e,Pe=ke,Te=Ee,ze=function(e){var t=this.__data__;return Ae?void 0!==t[e]:He.call(t,e)},je=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ce&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Re.prototype.clear=Ie,Re.prototype.delete=Pe,Re.prototype.get=Te,Re.prototype.has=ze,Re.prototype.set=je;var Ne=Re;var Ve=function(){this.__data__=[],this.size=0};var Le=function(e,t){return e===t||e!=e&&t!=t};var We=function(e,t){for(var r=e.length;r--;)if(Le(e[r][0],t))return r;return-1},Ye=We,Ue=Array.prototype.splice;var qe=We;var Qe=We;var Ze=We;var Ge=Ve,Xe=function(e){var t=this.__data__,r=Ye(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ue.call(t,r,1),--this.size,!0)},Je=function(e){var t=this.__data__,r=qe(t,e);return r<0?void 0:t[r][1]},Ke=function(e){return Qe(this.__data__,e)>-1},et=function(e,t){var r=this.__data__,n=Ze(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function tt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var rt=tt,nt=xe(P,"Map"),it=Ne,at=rt,ot=nt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ut=function(e,t){var r=e.__data__;return st(t)?r["string"==typeof t?"string":"hash"]:r.map},lt=ut;var ct=ut;var dt=ut;var ht=ut;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(ot||at),string:new it}},pt=function(e){var t=lt(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ct(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},yt=function(e,t){var r=ht(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function vt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}vt.prototype.clear=ft,vt.prototype.delete=pt,vt.prototype.get=gt,vt.prototype.has=mt,vt.prototype.set=yt;var bt=vt;function wt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(wt.Cache||bt),r}wt.Cache=bt;var $t=wt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ft=/\\(\\)?/g,xt=function(e){var t=$t(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,r,n,i){t.push(n?i.replace(Ft,"$1"):r||e)})),t}));var Dt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Bt=H,_t=X,kt=T?T.prototype:void 0,Ot=kt?kt.toString:void 0;var Mt=function e(t){if("string"==typeof t)return t;if(Bt(t))return Dt(t,e)+"";if(_t(t))return Ot?Ot.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Et=Mt;var At=H,Ht=re,Ct=xt,It=function(e){return null==e?"":Et(e)};var Pt=X;var Tt=function(e,t){return At(e)?e:Ht(e,t)?[e]:Ct(It(e))},zt=function(e){if("string"==typeof e||Pt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var jt=function(e,t){for(var r=0,n=(t=Tt(t,e)).length;null!=e&&r<n;)e=e[zt(t[r++])];return r&&r==n?e:void 0};var Rt=A((function(e,t,r){var n=null==e?void 0:jt(e,t);return void 0===n?r:n}));const Nt=(e,t,r)=>t?Rt(r,t)||Rt(e,t):r||e,Vt=(e,t)=>{const r=t||e.defaultValue;return Rt(e.collections,r)};var Lt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Lt||(Lt={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const r=t.theme,n=Vt(Wt,r[Lt.colorScheme]);return r.options&&r.options.color?Nt(n,e,r.options.color):Nt(n,e)},Ut={Brand:{1:Yt("Brand.1"),2:Yt("Brand.2"),3:Yt("Brand.3"),4:Yt("Brand.4"),5:Yt("Brand.5"),6:Yt("Brand.6")},Primary:Yt("Primary"),PrimaryDark:Yt("PrimaryDark"),Secondary:Yt("Secondary"),Accent:{Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},Neutral:{1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},Validation:{Green:{Text:Yt("Validation.Green.Text"),Icon:Yt("Validation.Green.Icon"),Border:Yt("Validation.Green.Border"),Background:Yt("Validation.Green.Background")},Orange:{Text:Yt("Validation.Orange.Text"),Icon:Yt("Validation.Orange.Icon"),Border:Yt("Validation.Orange.Border"),Background:Yt("Validation.Orange.Background"),Badge:Yt("Validation.Orange.Badge")},Red:{Text:Yt("Validation.Red.Text"),Icon:Yt("Validation.Red.Icon"),Border:Yt("Validation.Red.Border"),Background:Yt("Validation.Red.Background")},Blue:{Text:Yt("Validation.Blue.Text"),Icon:Yt("Validation.Blue.Icon"),Border:Yt("Validation.Blue.Border"),Background:Yt("Validation.Blue.Background")}},Shadow:{Accent:Yt("Shadow.Accent"),Red:Yt("Shadow.Red"),Elevation:Yt("Shadow.Elevation")}},qt={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${Ut.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${Ut.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Ut.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Qt=e=>t=>{var r;const n=t.theme,i=Vt(qt,n[Lt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Nt(i,e,n.options.designToken):Nt(i,e)},Zt={InputBoxShadow:Qt("InputBoxShadow"),InputErrorBoxShadow:Qt("InputErrorBoxShadow"),ElevationBoxShadow:Qt("ElevationBoxShadow"),Table:{Header:Qt("Table.Header"),Cell:{Primary:Qt("Table.Cell.Primary"),Secondary:Qt("Table.Cell.Secondary"),Selected:Qt("Table.Cell.Selected"),Hover:Qt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Qt("Button.Danger.BackgroundColor"),Hover:Qt("Button.Danger.Hover"),Primary:Qt("Button.Danger.Primary"),Border:Qt("Button.Danger.Border")}}},Gt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Xt={collections:{base:{D1:{fontFamily:Gt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Gt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Gt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Gt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Gt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Gt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Jt=e=>t=>{const r=t.theme,n=Vt(Xt,r[Lt.textStyleScheme]);return r.options&&r.options.textStyle?Nt(n,e,r.options.textStyle):Nt(n,e)},Kt={D1:{fontFamily:Jt("D1.fontFamily"),fontSize:Jt("D1.fontSize"),fontWeight:Jt("D1.fontWeight"),lineHeight:Jt("D1.lineHeight"),letterSpacing:Jt("D1.letterSpacing")},D2:{fontFamily:Jt("D2.fontFamily"),fontSize:Jt("D2.fontSize"),fontWeight:Jt("D2.fontWeight"),lineHeight:Jt("D2.lineHeight"),letterSpacing:Jt("D2.letterSpacing")},D3:{fontFamily:Jt("D3.fontFamily"),fontSize:Jt("D3.fontSize"),fontWeight:Jt("D3.fontWeight"),lineHeight:Jt("D3.lineHeight"),letterSpacing:Jt("D3.letterSpacing")},D4:{fontFamily:Jt("D4.fontFamily"),fontSize:Jt("D4.fontSize"),fontWeight:Jt("D4.fontWeight"),lineHeight:Jt("D4.lineHeight"),letterSpacing:Jt("D4.letterSpacing")},DBody:{fontFamily:Jt("DBody.fontFamily"),fontSize:Jt("DBody.fontSize"),fontWeight:Jt("DBody.fontWeight"),lineHeight:Jt("DBody.lineHeight"),letterSpacing:Jt("DBody.letterSpacing")},H1:{fontFamily:Jt("H1.fontFamily"),fontSize:Jt("H1.fontSize"),fontWeight:Jt("H1.fontWeight"),lineHeight:Jt("H1.lineHeight"),letterSpacing:Jt("H1.letterSpacing")},H2:{fontFamily:Jt("H2.fontFamily"),fontSize:Jt("H2.fontSize"),fontWeight:Jt("H2.fontWeight"),lineHeight:Jt("H2.lineHeight"),letterSpacing:Jt("H2.letterSpacing")},H3:{fontFamily:Jt("H3.fontFamily"),fontSize:Jt("H3.fontSize"),fontWeight:Jt("H3.fontWeight"),lineHeight:Jt("H3.lineHeight"),letterSpacing:Jt("H3.letterSpacing")},H4:{fontFamily:Jt("H4.fontFamily"),fontSize:Jt("H4.fontSize"),fontWeight:Jt("H4.fontWeight"),lineHeight:Jt("H4.lineHeight"),letterSpacing:Jt("H4.letterSpacing")},H5:{fontFamily:Jt("H5.fontFamily"),fontSize:Jt("H5.fontSize"),fontWeight:Jt("H5.fontWeight"),lineHeight:Jt("H5.lineHeight"),letterSpacing:Jt("H5.letterSpacing")},H6:{fontFamily:Jt("H6.fontFamily"),fontSize:Jt("H6.fontSize"),fontWeight:Jt("H6.fontWeight"),lineHeight:Jt("H6.lineHeight"),letterSpacing:Jt("H6.letterSpacing")},Body:{fontFamily:Jt("Body.fontFamily"),fontSize:Jt("Body.fontSize"),fontWeight:Jt("Body.fontWeight"),lineHeight:Jt("Body.lineHeight"),letterSpacing:Jt("Body.letterSpacing")},BodySmall:{fontFamily:Jt("BodySmall.fontFamily"),fontSize:Jt("BodySmall.fontSize"),fontWeight:Jt("BodySmall.fontWeight"),lineHeight:Jt("BodySmall.lineHeight"),letterSpacing:Jt("BodySmall.letterSpacing")},XSmall:{fontFamily:Jt("XSmall.fontFamily"),fontSize:Jt("XSmall.fontSize"),fontWeight:Jt("XSmall.fontWeight"),lineHeight:Jt("XSmall.lineHeight"),letterSpacing:Jt("XSmall.letterSpacing")}},er=e=>{switch(e){case 700:case"bold":return Gt.Bold;case 600:case"semibold":return Gt.Semibold;case 300:case"light":return Gt.Light;case 400:case"regular":return Gt.Regular;default:return""}},tr=(e,t)=>r=>{var n;const i=Kt[e].fontFamily(r),a=Kt[e].fontWeight(r);return Object.values(Gt).includes(i)?y`
                font-family: ${er(t)||er(a)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(n=rr(t)||a)&&void 0!==n?n:"normal"};
        `},rr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nr=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ir=tr,ar=(e,t,r=!1)=>n=>{const i=Kt[e],a=i.fontSize(n);return y`
            ${tr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${y`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},or=(e=!1,t=!1,r=void 0)=>t?y`
            display: block;
            ${nr(r)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${nr(r)}
        `;var sr;!function(e){e.D1=m.h1`
        ${e=>y`
                ${ar("D1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>y`
                ${ar("D2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>y`
                ${ar("D3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>y`
                ${ar("D4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>y`
                ${ar("DBody",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>y`
                ${ar("H1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>y`
                ${ar("H2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>y`
                ${ar("H3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>y`
                ${ar("H4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>y`
                ${ar("H5",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>y`
                ${ar("H6",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>y`
                ${ar("Body",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>y`
                ${ar("BodySmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>y`
                ${ar("XSmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${or(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>cr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>cr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(sr||(sr={}));const ur=m.a`
    ${e=>y`
            ${ar(e.textStyle,e.weight)}
            color: ${Ut.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ut.Secondary};

                svg {
                    color: ${Ut.Secondary};
                }
            }
        `}
`,lr=m(b)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,cr=r=>{var{external:n=!1,children:i}=r,a=M(r,["external","children"]);return e(ur,Object.assign({},a,{children:[i,n&&t(lr,{})]}))};var dr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(dr||(dr={}));const hr=m.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ut.Neutral[5]};
    border-radius: 4px;
    background: ${Ut.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: ${Zt.InputBoxShadow};
    }

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?y`
                background: ${Ut.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ut.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?y`
                border: 1px solid ${Ut.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ut.Validation.Red.Border};
                    box-shadow: ${Zt.InputErrorBoxShadow};
                }
            `:void 0}
`,fr=m.input`
    ${ar("Body","regular")}
    color: ${Ut.Neutral[1]};
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
        color: ${Ut.Neutral[3]};
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
`;var pr=function(e,t){return pr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},pr(e,t)};var gr=function(){return gr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},gr.apply(this,arguments)};var mr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var yr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},vr="object"==typeof mr&&mr&&mr.Object===Object&&mr,br="object"==typeof self&&self&&self.Object===Object&&self,wr=vr||br||Function("return this")(),$r=wr,Sr=function(){return $r.Date.now()},Fr=/\s/;var xr=function(e){for(var t=e.length;t--&&Fr.test(e.charAt(t)););return t},Dr=/^\s+/;var Br=function(e){return e?e.slice(0,xr(e)+1).replace(Dr,""):e},_r=wr.Symbol,kr=_r,Or=Object.prototype,Mr=Or.hasOwnProperty,Er=Or.toString,Ar=kr?kr.toStringTag:void 0;var Hr=function(e){var t=Mr.call(e,Ar),r=e[Ar];try{e[Ar]=void 0;var n=!0}catch(e){}var i=Er.call(e);return n&&(t?e[Ar]=r:delete e[Ar]),i},Cr=Object.prototype.toString;var Ir=Hr,Pr=function(e){return Cr.call(e)},Tr=_r?_r.toStringTag:void 0;var zr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Tr&&Tr in Object(e)?Ir(e):Pr(e)},jr=function(e){return null!=e&&"object"==typeof e};var Rr=Br,Nr=yr,Vr=function(e){return"symbol"==typeof e||jr(e)&&"[object Symbol]"==zr(e)},Lr=/^[-+]0x[0-9a-f]+$/i,Wr=/^0b[01]+$/i,Yr=/^0o[0-7]+$/i,Ur=parseInt;var qr=yr,Qr=Sr,Zr=function(e){if("number"==typeof e)return e;if(Vr(e))return NaN;if(Nr(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Nr(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Rr(e);var r=Wr.test(e);return r||Yr.test(e)?Ur(e.slice(2),r?2:8):Lr.test(e)?NaN:+e},Gr=Math.max,Xr=Math.min;var Jr=function(e,t,r){var n,i,a,o,s,u,l=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,a=i;return n=i=void 0,l=t,o=e.apply(a,r)}function p(e){var r=e-u;return void 0===u||r>=t||r<0||d&&e-l>=a}function g(){var e=Qr();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-u);return d?Xr(r,a-(e-l)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=i=void 0,o)}function y(){var e=Qr(),r=p(e);if(n=arguments,i=this,u=e,r){if(void 0===s)return function(e){return l=e,s=setTimeout(g,t),c?f(e):o}(u);if(d)return clearTimeout(s),s=setTimeout(g,t),f(u)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Zr(t)||0,qr(r)&&(c=!!r.leading,a=(d="maxWait"in r)?Gr(Zr(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,n=u=i=s=void 0},y.flush=function(){return void 0===s?o:m(Qr())},y},Kr=Jr,en=yr;var tn=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return en(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Kr(e,t,{leading:n,maxWait:t,trailing:i})},rn=function(e,t,r,n){switch(t){case"debounce":return Jr(e,r,n);case"throttle":return tn(e,r,n);default:return e}},nn=function(e){return"function"==typeof e},an=function(){return"undefined"==typeof window},on=function(e){return e instanceof Element||e instanceof HTMLDocument},sn=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&nn(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!an()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(an())return null;if(t)return document.querySelector(t);if(n&&on(n))return n;if(r.targetRef&&on(r.targetRef.current))return r.targetRef.current;var i=S(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var u=sn(s,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!an()&&u({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return nn(t)?"renderProp":nn(n)?"childFunction":o(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,u=void 0===a?1e3:a,l=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=s(),r.observableElement=null,an()||(r.resizeHandler=rn(r.createResizeHandler,i,u,l),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}pr(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){an()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return u(e,c)}return u(e,l);case"childArray":return(e=i).map((function(e){return!!e&&u(e,l)}));default:return r.createElement(o,null)}}}(l);var un=an()?c:d;var ln=Object.defineProperty,cn={};((e,t)=>{for(var r in t)ln(e,r,{get:t[r],enumerable:!0})})(cn,{assign:()=>Ln,colors:()=>Rn,createStringInterpolator:()=>Pn,skipAnimation:()=>Nn,to:()=>Tn,willAdvance:()=>Vn});var dn=_n(),hn=e=>Fn(e,dn),fn=_n();hn.write=e=>Fn(e,fn);var pn=_n();hn.onStart=e=>Fn(e,pn);var gn=_n();hn.onFrame=e=>Fn(e,gn);var mn=_n();hn.onFinish=e=>Fn(e,mn);var yn=[];hn.setTimeout=(e,t)=>{const r=hn.now()+t,n=()=>{const e=yn.findIndex((e=>e.cancel==n));~e&&yn.splice(e,1),$n-=~e?1:0},i={time:r,handler:e,cancel:n};return yn.splice(vn(r),0,i),$n+=1,xn(),i};var vn=e=>~(~yn.findIndex((t=>t.time>e))||~yn.length);hn.cancel=e=>{pn.delete(e),gn.delete(e),mn.delete(e),dn.delete(e),fn.delete(e)},hn.sync=e=>{Sn=!0,hn.batchedUpdates(e),Sn=!1},hn.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,hn.onStart(r)}return n.handler=e,n.cancel=()=>{pn.delete(r),t=null},n};var bn="undefined"!=typeof window?window.requestAnimationFrame:()=>{};hn.use=e=>bn=e,hn.now="undefined"!=typeof performance?()=>performance.now():Date.now,hn.batchedUpdates=e=>e(),hn.catch=console.error,hn.frameLoop="always",hn.advance=()=>{"demand"!==hn.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Bn()};var wn=-1,$n=0,Sn=!1;function Fn(e,t){Sn?(t.delete(e),e(0)):(t.add(e),xn())}function xn(){wn<0&&(wn=0,"demand"!==hn.frameLoop&&bn(Dn))}function Dn(){~wn&&(bn(Dn),hn.batchedUpdates(Bn))}function Bn(){const e=wn;wn=hn.now();const t=vn(wn);t&&(kn(yn.splice(0,t),(e=>e.handler())),$n-=t),$n?(pn.flush(),dn.flush(e?Math.min(64,wn-e):16.667),gn.flush(),fn.flush(),mn.flush()):wn=-1}function _n(){let e=new Set,t=e;return{add(r){$n+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>($n-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,$n-=t.size,kn(t,(t=>t(r)&&e.add(t))),$n+=e.size,t=e)}}}function kn(e,t){e.forEach((e=>{try{t(e)}catch(e){hn.catch(e)}}))}function On(){}var Mn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function En(e,t){if(Mn.arr(e)){if(!Mn.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var An=(e,t)=>e.forEach(t);function Hn(e,t,r){if(Mn.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var Cn=e=>Mn.und(e)?[]:Mn.arr(e)?e:[e];function In(e,t){if(e.size){const r=Array.from(e);e.clear(),An(r,t)}}var Pn,Tn,zn=(e,...t)=>In(e,(e=>e(...t))),jn=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Rn=null,Nn=!1,Vn=On,Ln=e=>{e.to&&(Tn=e.to),e.now&&(hn.now=e.now),void 0!==e.colors&&(Rn=e.colors),null!=e.skipAnimation&&(Nn=e.skipAnimation),e.createStringInterpolator&&(Pn=e.createStringInterpolator),e.requestAnimationFrame&&hn.use(e.requestAnimationFrame),e.batchedUpdates&&(hn.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Vn=e.willAdvance),e.frameLoop&&(hn.frameLoop=e.frameLoop)},Wn=new Set,Yn=[],Un=[],qn=0,Qn={get idle(){return!Wn.size&&!Yn.length},start(e){qn>e.priority?(Wn.add(e),hn.onStart(Zn)):(Gn(e),hn(Jn))},advance:Jn,sort(e){if(qn)hn.onFrame((()=>Qn.sort(e)));else{const t=Yn.indexOf(e);~t&&(Yn.splice(t,1),Xn(e))}},clear(){Yn=[],Wn.clear()}};function Zn(){Wn.forEach(Gn),Wn.clear(),hn(Jn)}function Gn(e){Yn.includes(e)||Xn(e)}function Xn(e){Yn.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Yn,(t=>t.priority>e.priority)),0,e)}function Jn(e){const t=Un;for(let r=0;r<Yn.length;r++){const n=Yn[r];qn=n.priority,n.idle||(Vn(n),n.advance(e),n.idle||t.push(n))}return qn=0,(Un=Yn).length=0,(Yn=t).length>0}var Kn="[-+]?\\d*\\.?\\d+",ei=Kn+"%";function ti(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ri=new RegExp("rgb"+ti(Kn,Kn,Kn)),ni=new RegExp("rgba"+ti(Kn,Kn,Kn,Kn)),ii=new RegExp("hsl"+ti(Kn,ei,ei)),ai=new RegExp("hsla"+ti(Kn,ei,ei,Kn)),oi=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,si=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ui=/^#([0-9a-fA-F]{6})$/,li=/^#([0-9a-fA-F]{8})$/;function ci(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function di(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=ci(i,n,e+1/3),o=ci(i,n,e),s=ci(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function hi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fi(e){return(parseFloat(e)%360+360)%360/360}function pi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function gi(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function mi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ui.exec(e))?parseInt(t[1]+"ff",16)>>>0:Rn&&void 0!==Rn[e]?Rn[e]:(t=ri.exec(e))?(hi(t[1])<<24|hi(t[2])<<16|hi(t[3])<<8|255)>>>0:(t=ni.exec(e))?(hi(t[1])<<24|hi(t[2])<<16|hi(t[3])<<8|pi(t[4]))>>>0:(t=oi.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=li.exec(e))?parseInt(t[1],16)>>>0:(t=si.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ii.exec(e))?(255|di(fi(t[1]),gi(t[2]),gi(t[3])))>>>0:(t=ai.exec(e))?(di(fi(t[1]),gi(t[2]),gi(t[3]))|pi(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var yi=(e,t,r)=>{if(Mn.fun(e))return e;if(Mn.arr(e))return yi({range:e,output:t,extrapolate:r});if(Mn.str(e.output[0]))return Pn(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",u=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,u){let l=u?u(e):e;if(l<t){if("identity"===o)return l;"clamp"===o&&(l=t)}if(l>r){if("identity"===s)return l;"clamp"===s&&(l=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?l=-l:r===1/0?l-=t:l=(l-t)/(r-t);l=a(l),n===-1/0?l=-l:i===1/0?l+=n:l=l*(i-n)+n;return l}(e,a[t],a[t+1],i[t],i[t+1],u,o,s,n.map)}};var vi=1.70158,bi=1.525*vi,wi=vi+1,$i=2*Math.PI/3,Si=2*Math.PI/4.5,Fi=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},xi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>wi*e*e*e-vi*e*e,easeOutBack:e=>1+wi*Math.pow(e-1,3)+vi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-bi)/2:(Math.pow(2*e-2,2)*((bi+1)*(2*e-2)+bi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*$i),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*$i)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Si)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Si)/2+1,easeInBounce:e=>1-Fi(1-e),easeOutBounce:Fi,easeInOutBounce:e=>e<.5?(1-Fi(1-2*e))/2:(1+Fi(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},Di=Symbol.for("FluidValue.get"),Bi=Symbol.for("FluidValue.observers"),_i=e=>Boolean(e&&e[Di]),ki=e=>e&&e[Di]?e[Di]():e,Oi=e=>e[Bi]||null;function Mi(e,t){const r=e[Bi];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ei=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ai(this,e)}},Ai=(e,t)=>Pi(e,Di,t);function Hi(e,t){if(e[Di]){let r=e[Bi];r||Pi(e,Bi,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function Ci(e,t){const r=e[Bi];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Bi]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var Ii,Pi=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Ti=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,zi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ji=new RegExp(`(${Ti.source})(%|[a-z]+)`,"i"),Ri=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ni=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Vi=e=>{const[t,r]=Li(e);if(!t||jn())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Ni.test(r)?Vi(r):r||e},Li=e=>{const t=Ni.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Wi=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Yi=e=>{Ii||(Ii=Rn?new RegExp(`(${Object.keys(Rn).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ki(e).replace(Ni,Vi).replace(zi,mi).replace(Ii,mi))),r=t.map((e=>e.match(Ti).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>yi({...e,output:t})));return e=>{const r=!ji.test(t[0])&&t.find((e=>ji.test(e)))?.replace(Ti,"");let i=0;return t[0].replace(Ti,(()=>`${n[i++](e)}${r||""}`)).replace(Ri,Wi)}},Ui="react-spring: ",qi=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ui}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Qi=qi(console.warn);var Zi=qi(console.warn);function Gi(e){return Mn.str(e)&&("#"==e[0]||/\d/.test(e)||!jn()&&Ni.test(e)||e in(Rn||{}))}var Xi=jn()?c:d,Ji=()=>{const e=i(!1);return Xi((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ki(){const e=a()[1],t=Ji();return()=>{t.current&&e(Math.random())}}var ea=e=>c(e,ta),ta=[];function ra(e){const t=i();return c((()=>{t.current=e})),t.current}var na=Symbol.for("Animated:node"),ia=e=>e&&e[na],aa=(e,t)=>{return r=e,n=na,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},oa=e=>e&&e[na]&&e[na].getPayload(),sa=class{constructor(){aa(this,this)}getPayload(){return this.payload||[]}},ua=class extends sa{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Mn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ua(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Mn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Mn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},la=class extends ua{constructor(e){super(0),this._string=null,this._toString=yi({output:[e,e]})}static create(e){return new la(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Mn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=yi({output:[this.getValue(),e]})),this._value=0,super.reset()}},ca={dependencies:null},da=class extends sa{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Hn(this.source,((r,n)=>{var i;(i=r)&&i[na]===i?t[n]=r.getValue(e):_i(r)?t[n]=ki(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&An(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Hn(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){ca.dependencies&&_i(e)&&ca.dependencies.add(e);const t=oa(e);t&&An(t,(e=>this.add(e)))}},ha=class extends da{constructor(e){super(e)}static create(e){return new ha(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(fa)),!0)}};function fa(e){return(Gi(e)?la:ua).create(e)}function pa(e){const t=ia(e);return t?t.constructor:Mn.arr(e)?ha:Gi(e)?la:ua}var ga=(e,t)=>{const n=!Mn.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((a,o)=>{const s=i(null),u=n&&f((e=>{s.current=function(e,t){e&&(Mn.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,d]=function(e,t){const r=new Set;ca.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new da(e),ca.dependencies=null,[e,r]}(a,t),h=Ki(),p=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,l.getValue(!0)))&&h()},g=new ma(p,d),m=i();Xi((()=>(m.current=g,An(d,(e=>Hi(e,g))),()=>{m.current&&(An(m.current.deps,(e=>Ci(e,m.current))),hn.cancel(m.current.update))}))),c(p,[]),ea((()=>()=>{const e=m.current;An(e.deps,(t=>Ci(t,e)))}));const y=t.getComponentProps(l.getValue());return r.createElement(e,{...y,ref:u})}))},ma=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&hn.write(this.update)}};var ya=Symbol.for("AnimatedComponent"),va=e=>Mn.str(e)?e:e&&Mn.str(e.displayName)?e.displayName:Mn.fun(e)&&e.name||null;function ba(e,...t){return Mn.fun(e)?e(...t):e}var wa=(e,t)=>!0===e||!!(t&&e&&(Mn.fun(e)?e(t):Cn(e).includes(t))),$a=(e,t)=>Mn.obj(e)?t&&e[t]:e,Sa=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Fa=e=>e,xa=(e,t=Fa)=>{let r=Da;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Mn.und(r)||(n[i]=r)}return n},Da=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Ba={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function _a(e){const t=function(e){const t={};let r=0;if(Hn(e,((e,n)=>{Ba[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return Hn(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function ka(e){return e=ki(e),Mn.arr(e)?e.map(ka):Gi(e)?cn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Oa(e){return Mn.fun(e)||Mn.arr(e)&&Mn.obj(e[0])}var Ma={tension:170,friction:26,mass:1,damping:1,easing:xi.linear,clamp:!1},Ea=class{constructor(){this.velocity=0,Object.assign(this,Ma)}};function Aa(e,t){if(Mn.und(t.decay)){const r=!Mn.und(t.tension)||!Mn.und(t.friction);!r&&Mn.und(t.frequency)&&Mn.und(t.damping)&&Mn.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var Ha=[],Ca=class{constructor(){this.changed=!1,this.values=Ha,this.toValues=null,this.fromValues=Ha,this.config=new Ea,this.immediate=!1}};function Ia(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let u,l,c=wa(r.cancel??n?.cancel,t);if(c)f();else{Mn.und(r.pause)||(i.paused=wa(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||wa(e,t)),u=ba(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(l),l.cancel(),u=l.time-hn.now()}function h(){u>0&&!cn.skipAnimation?(i.delayed=!0,l=hn.setTimeout(f,u),i.pauseQueue.add(d),i.timeouts.add(l)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(l),e<=(i.cancelId||0)&&(c=!0);try{a.start({...r,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var Pa=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?ja(e.get()):t.every((e=>e.noop))?Ta(e.get()):za(e.get(),t.every((e=>e.finished))),Ta=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),za=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),ja=e=>({value:e,cancelled:!0,finished:!1});function Ra(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:u}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const l=xa(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&ja(n)||i!==r.asyncId&&za(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new Va,o=new La;return(async()=>{if(cn.skipAnimation)throw Na(r),o.result=za(n,!1),d(o),o;f(a);const s=Mn.obj(e)?{...e}:{...t,to:e};s.parentId=i,Hn(l,((e,t)=>{Mn.und(s[t])&&(s[t]=e)}));const u=await n.start(s);return f(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),u})()};let g;if(cn.skipAnimation)return Na(r),za(n,!1);try{let t;t=Mn.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=za(n.get(),!0,!1)}catch(e){if(e instanceof Va)g=e.result;else{if(!(e instanceof La))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?u:void 0)}return Mn.fun(o)&&hn.batchedUpdates((()=>{o(g,n,n.item)})),g})():u}function Na(e,t){In(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Va=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},La=class extends Error{constructor(){super("SkipAnimationSignal")}},Wa=e=>e instanceof Ua,Ya=1,Ua=class extends Ei{constructor(){super(...arguments),this.id=Ya++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=ia(this);return e&&e.getValue()}to(...e){return cn.to(this,e)}interpolate(...e){return Qi(`${Ui}The "interpolate" function is deprecated in v9 (use "to" instead)`),cn.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Mi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Qn.sort(this),Mi(this,{type:"priority",parent:this,priority:e})}},qa=Symbol.for("SpringPhase"),Qa=e=>(1&e[qa])>0,Za=e=>(2&e[qa])>0,Ga=e=>(4&e[qa])>0,Xa=(e,t)=>t?e[qa]|=3:e[qa]&=-3,Ja=(e,t)=>t?e[qa]|=4:e[qa]&=-5,Ka=class extends Ua{constructor(e,t){if(super(),this.animation=new Ca,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Mn.und(e)||!Mn.und(t)){const r=Mn.obj(e)?{...e}:{...t,from:e};Mn.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Za(this)||this._state.asyncTo)||Ga(this)}get goal(){return ki(this.animation.to)}get velocity(){const e=ia(this);return e instanceof ua?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Qa(this)}get isAnimating(){return Za(this)}get isPaused(){return Ga(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=oa(n.to);!o&&_i(n.to)&&(i=Cn(ki(n.to))),n.values.forEach(((s,u)=>{if(s.done)return;const l=s.constructor==la?1:o?o[u].lastPosition:i[u];let c=n.immediate,d=l;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[u],i=null!=s.v0?s.v0:s.v0=Mn.arr(a.velocity)?a.velocity[u]:a.velocity;let o;const h=a.precision||(r==l?.005:Math.min(1,.001*Math.abs(l-r)));if(Mn.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);d=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-d)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,u=!Mn.und(n),f=r==l?s.v0>0:r<l;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(c=Math.abs(l-d)<=h,!c));++e){u&&(g=d==l||d>l==f,g&&(o=-o*n,d=l));o+=(1e-6*-a.tension*(d-l)+.001*-a.friction*o)/a.mass*m,d+=o*m}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+a.easing(n)*(l-r),o=(d-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[u].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=ia(this),u=s.getValue();if(t){const e=ki(n.to);u===e&&!r||a.decay?r&&a.decay&&this._onChange(u):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(u)}set(e){return hn.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Za(this)){const{to:e,config:t}=this.animation;hn.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Mn.und(e)?(r=this.queue||[],this.queue=[]):r=[Mn.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Pa(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Na(this._state,e&&this._lastCallId),hn.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Mn.obj(r)?r[t]:r,(null==r||Oa(r))&&(r=void 0),n=Mn.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Qa(this)||(e.reverse&&([r,n]=[n,r]),n=ki(n),Mn.und(n)?ia(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,xa(e,((e,t)=>/^on/.test(t)?$a(e,r):e))),oo(this,e,"onProps"),so(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Ia(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{Ga(this)||(Ja(this,!0),zn(a.pauseQueue),so(this,"onPause",za(this,eo(this,this.animation.to)),this))},resume:()=>{Ga(this)&&(Ja(this,!1),Za(this)&&this._resume(),zn(a.resumeQueue),so(this,"onResume",za(this,eo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=to(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(ja(this));const n=!Mn.und(e.to),i=!Mn.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(ja(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:u,from:l}=s;let{to:c=u,from:d=l}=e;!i||n||t.default&&!Mn.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!En(d,l);h&&(s.from=d),d=ki(d);const f=!En(c,u);f&&this._focus(c);const p=Oa(t.to),{config:g}=s,{decay:m,velocity:y}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(Aa(r={...r},t),t={...r,...t}),Aa(e,t),Object.assign(e,t);for(const t in Ma)null==e[t]&&(e[t]=Ma[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;Mn.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(g,ba(t.config,a),t.config!==o.config?ba(o.config,a):void 0);let v=ia(this);if(!v||Mn.und(c))return r(za(this,!0));const b=Mn.und(t.reset)?i&&!t.default:!Mn.und(d)&&wa(t.reset,a),w=b?d:this.get(),$=ka(c),S=Mn.num($)||Mn.arr($)||Gi($),F=!p&&(!S||wa(o.immediate||t.immediate,a));if(f){const e=pa(c);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const x=v.constructor;let D=_i(c),B=!1;if(!D){const e=b||!Qa(this)&&h;(f||e)&&(B=En(ka(w),$),D=!B),(En(s.immediate,F)||F)&&En(g.decay,m)&&En(g.velocity,y)||(D=!0)}if(B&&Za(this)&&(s.changed&&!b?D=!0:D||this._stop(u)),!p&&((D||_i(u))&&(s.values=v.getPayload(),s.toValues=_i(c)?null:x==la?[1]:Cn($)),s.immediate!=F&&(s.immediate=F,F||b||this._set(u)),D)){const{onRest:e}=s;An(ao,(e=>oo(this,t,e)));const n=za(this,eo(this,u));zn(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&hn.batchedUpdates((()=>{s.changed=!b,e?.(n,this),b?ba(o.onRest,n):s.onStart?.(n,this)}))}b&&this._set(w),p?r(Ra(t.to,t,this._state,this)):D?this._start():Za(this)&&!f?this._pendingCalls.add(r):r(Ta(w))}_focus(e){const t=this.animation;e!==t.to&&(Oi(this)&&this._detach(),t.to=e,Oi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;_i(t)&&(Hi(t,this),Wa(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;_i(e)&&Ci(e,this)}_set(e,t=!0){const r=ki(e);if(!Mn.und(r)){const e=ia(this);if(!e||!En(r,e.getValue())){const n=pa(r);e&&e.constructor==n?e.setValue(r):aa(this,n.create(r)),e&&hn.batchedUpdates((()=>{this._onChange(r,t)}))}}return ia(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,so(this,"onStart",za(this,eo(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ba(this.animation.onChange,e,this)),ba(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;ia(this).reset(ki(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Za(this)||(Xa(this,!0),Ga(this)||this._resume())}_resume(){cn.skipAnimation?this.finish():Qn.start(this)}_stop(e,t){if(Za(this)){Xa(this,!1);const r=this.animation;An(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Mi(this,{type:"idle",parent:this});const n=t?ja(this.get()):za(this.get(),eo(this,e??r.to));zn(this._pendingCalls,n),r.changed&&(r.changed=!1,so(this,"onRest",n,this))}}};function eo(e,t){const r=ka(t);return En(ka(e.get()),r)}function to(e,t=e.loop,r=e.to){const n=ba(t);if(n){const i=!0!==n&&_a(n),a=(i||e).reverse,o=!i||i.reset;return ro({...e,loop:t,default:!1,pause:void 0,to:!a||Oa(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function ro(e){const{to:t,from:r}=e=_a(e),n=new Set;return Mn.obj(t)&&io(t,n),Mn.obj(r)&&io(r,n),e.keys=n.size?Array.from(n):null,e}function no(e){const t=ro(e);return Mn.und(t.default)&&(t.default=xa(t)),t}function io(e,t){Hn(e,((e,r)=>null!=e&&t.add(r)))}var ao=["onStart","onRest","onChange","onPause","onResume"];function oo(e,t,r){e.animation[r]=t[r]!==Sa(t,r)?$a(t[r],e.key):void 0}function so(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var uo=["onStart","onChange","onRest"],lo=1,co=class{constructor(e,t){this.id=lo++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Mn.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(ro(e)),this}start(e){let{queue:t}=this;return e?t=Cn(e).map(ro):this.queue=[],this._flush?this._flush(this,t):(vo(this,t),ho(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;An(Cn(t),(t=>r[t].stop(!!e)))}else Na(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Mn.und(e))this.start({pause:!0});else{const t=this.springs;An(Cn(e),(e=>t[e].pause()))}return this}resume(e){if(Mn.und(e))this.start({pause:!1});else{const t=this.springs;An(Cn(e),(e=>t[e].resume()))}return this}each(e){Hn(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,In(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&In(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,In(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}hn.onFrame(this._onFrame)}};function ho(e,t){return Promise.all(t.map((t=>fo(e,t)))).then((t=>Pa(e,t)))}async function fo(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:u}=t,l=Mn.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=Mn.arr(i)||Mn.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,l&&(l.onRest=void 0)):An(uo,(r=>{const n=t[r];if(Mn.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},l&&(l[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,zn(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===Sa(t,"cancel");(c||f&&d.asyncId)&&h.push(Ia(++e._lastAsyncId,{props:t,state:d,actions:{pause:On,resume:On,start(t,r){f?(Na(d,e._lastAsyncId),r(ja(e))):(t.onRest=s,r(Ra(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=Pa(e,await Promise.all(h));if(o&&p.finished&&(!r||!p.noop)){const r=to(t,o,i);if(r)return vo(e,[r]),fo(e,r,!0)}return u&&hn.batchedUpdates((()=>u(p,e,e.item))),p}function po(e,t){const r={...e.springs};return t&&An(Cn(t),(e=>{Mn.und(e.keys)&&(e=ro(e)),Mn.obj(e.to)||(e={...e,to:void 0}),yo(r,e,(e=>mo(e)))})),go(e,r),r}function go(e,t){Hn(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,Hi(t,e))}))}function mo(e,t){const r=new Ka;return r.key=e,t&&Hi(r,t),r}function yo(e,t,r){t.keys&&An(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function vo(e,t){An(t,(t=>{yo(e.springs,t,(t=>mo(t,e)))}))}var bo,wo,$o=({children:e,...t})=>{const n=p(So),o=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[r]=a((()=>({inputs:t,result:e()}))),n=i(),o=n.current;let s=o;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return c((()=>{n.current=s,o==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:o,immediate:s})),[o,s]);const{Provider:u}=So;return r.createElement(u,{value:t},e)},So=(bo=$o,wo={},Object.assign(bo,r.createContext(wo)),bo.Provider._context=bo,bo.Consumer._context=bo,bo);$o.Provider=So.Provider,$o.Consumer=So.Consumer;var Fo=()=>{const e=[],t=function(t){Zi(`${Ui}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return An(e,((e,i)=>{if(Mn.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return An(e,(e=>e.pause(...arguments))),this},t.resume=function(){return An(e,(e=>e.resume(...arguments))),this},t.set=function(t){An(e,((e,r)=>{const n=Mn.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return An(e,((e,n)=>{if(Mn.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return An(e,(e=>e.stop(...arguments))),this},t.update=function(t){return An(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Mn.fun(e)?e(r,t):e};return t._getProps=r,t};function xo(e,t){const r=Mn.fun(e),[[n],a]=function(e,t,r){const n=Mn.fun(t)&&t;n&&!r&&(r=[]);const a=g((()=>n||3==arguments.length?Fo():void 0),[]),o=i(0),s=Ki(),u=g((()=>({ctrls:[],queue:[],flush(e,t){const r=po(e,t);return o.current>0&&!u.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?ho(e,t):new Promise((n=>{go(e,r),u.queue.push((()=>{n(ho(e,t))})),s()}))}})),[]),l=i([...u.ctrls]),c=[],d=ra(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=l.current[i]||(l.current[i]=new co(null,u.flush)),r=n?n(i,e):t[i];r&&(c[i]=no(r))}}g((()=>{An(l.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),l.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),r);const f=l.current.map(((e,t)=>po(e,c[t]))),m=p($o),y=ra(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Xi((()=>{o.current++,u.ctrls=l.current;const{queue:e}=u;e.length&&(u.queue=[],An(e,(e=>e()))),An(l.current,((e,t)=>{a?.add(e),v&&e.start({default:m});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),ea((()=>()=>{An(u.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>({...e})));return a?[b,a]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,a]:n}var Do=class extends Ua{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=yi(...t);const r=this._get(),n=pa(r);aa(this,n.create(r))}advance(e){const t=this._get();En(t,this.get())||(ia(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&_o(this._active)&&ko(this)}_get(){const e=Mn.arr(this.source)?this.source.map(ki):Cn(ki(this.source));return this.calc(...e)}_start(){this.idle&&!_o(this._active)&&(this.idle=!1,An(oa(this),(e=>{e.done=!1})),cn.skipAnimation?(hn.batchedUpdates((()=>this.advance())),ko(this)):Qn.start(this))}_attach(){let e=1;An(Cn(this.source),(t=>{_i(t)&&Hi(t,this),Wa(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){An(Cn(this.source),(e=>{_i(e)&&Ci(e,this)})),this._active.clear(),ko(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Cn(this.source).reduce(((e,t)=>Math.max(e,(Wa(t)?t.priority:0)+1)),0))}};function Bo(e){return!1!==e.idle}function _o(e){return!e.size||Array.from(e).every(Bo)}function ko(e){e.idle||(e.idle=!0,An(oa(e),(e=>{e.done=!0})),Mi(e,{type:"idle",parent:e}))}cn.assign({createStringInterpolator:Yi,to:(e,t)=>new Do(e,t)});var Oo=/^--/;function Mo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Oo.test(e)||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}var Eo={};var Ao={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ho=["Webkit","Ms","Moz","O"];Ao=Object.keys(Ao).reduce(((e,t)=>(Ho.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ao);var Co=/^(matrix|translate|scale|rotate|skew)/,Io=/^(translate)/,Po=/^(rotate|skew)/,To=(e,t)=>Mn.num(e)&&0!==e?e+t:e,zo=(e,t)=>Mn.arr(e)?e.every((e=>zo(e,t))):Mn.num(e)?e===t:parseFloat(e)===t,jo=class extends da{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>To(e,"px"))).join(",")})`,zo(e,0)]))),Hn(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(Co.test(t)){if(delete n[t],Mn.und(e))return;const r=Io.test(t)?"px":Po.test(t)?"deg":"";i.push(Cn(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${To(i,r)})`,zo(i,0)]:e=>[`${t}(${e.map((e=>To(e,r))).join(",")})`,zo(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new Ro(i,a)),super(n)}},Ro=class extends Ei{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return An(this.inputs,((r,n)=>{const i=ki(r[0]),[a,o]=this.transforms[n](Mn.arr(i)?i:r.map(ki));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&An(this.inputs,(e=>An(e,(e=>_i(e)&&Hi(e,this)))))}observerRemoved(e){0==e&&An(this.inputs,(e=>An(e,(e=>_i(e)&&Ci(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Mi(this,e)}};cn.assign({batchedUpdates:F,createStringInterpolator:Yi,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var No,Vo,Lo,Wo=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new da(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=va(e)||"Anonymous";return(e=Mn.str(e)?a[e]||(a[e]=ga(e,i)):e[ya]||(e[ya]=ga(e,i))).displayName=`Animated(${t})`,e};return Hn(e,((t,r)=>{Mn.arr(e)&&(r=va(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...u}=t,l=Object.values(u),c=Object.keys(u).map((t=>r||e.hasAttribute(t)?t:Eo[t]||(Eo[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Mo(t,n[t]);Oo.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,l[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new jo(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Yo=Wo.animated;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(No||(No={})),function(e){e.AM="AM",e.PM="PM"}(Vo||(Vo={})),function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Vo.AM};if(!t)return r;try{if("24hr"===e){const n=Qo(t,e);r.minute=No.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=Vo.AM,r.hour=0===i?"12":No.padValue(i.toString())):(r.period=Vo.PM,r.hour=12===i?i.toString():No.padValue((i-12).toString()))}else{const n=Qo(t,e);r.hour=No.padValue(n.hour),r.minute=No.padValue(n.minute),r.period="am"===n.period.toLowerCase()?Vo.AM:Vo.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?No.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return No.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?No.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?No.padValue(n.toString()):13===n?No.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Vo.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return No.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=Qo(e,t),n=No.padValue(r.hour);let i=`${n}:${No.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(Lo||(Lo={}));const Uo=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},qo=e=>{const t=parseInt(e);return t>=0&&t<=59},Qo=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),a=r[1].substring(2);if(!Uo(r[0],t)||!qo(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Uo(r[0],t)||!qo(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},Zo={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Go=e=>Object.keys(Zo).reduce(((t,r)=>{const n=Zo[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Xo=Go("max-width"),Jo=(Go("min-width"),m.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Ko=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,es=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ut.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ko} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ts=m(es)`
    animation-delay: -0.45s;
`,rs=m(es)`
    animation-delay: -0.3s;
`,ns=m(es)`
    animation-delay: -0.15s;
`,is=m.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Ut.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Zt.Button.Danger.Border:Ut.Primary};

                    color: ${e.$buttonIsDanger?Zt.Button.Danger.Primary:Ut.Primary};
                `;case"light":return y`
                    background-color: ${Ut.Neutral[8]};
                    border: 1px solid ${Ut.Neutral[5]};

                    color: ${e.$buttonIsDanger?Zt.Button.Danger.Primary:Ut.Primary};
                `;case"disabled":return y`
                    background-color: ${Ut.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ut.Neutral[3]};
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Zt.Button.Danger.Primary:Ut.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Zt.Button.Danger.Hover:Ut.Secondary};
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Zt.Button.Danger.BackgroundColor:Ut.Primary};
                    border: 1px solid transparent;

                    ${Xo.mobileL} {
                        width: 100%;
                    }

                    color: ${Ut.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    ${ar("H5","semibold")}

                    ${Xo.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    ${ar("H4","semibold")}

                    ${Xo.mobileS} {
                        height: auto;
                    }
                `}
`,as=m((({color:r,className:n,size:i=18})=>e(Jo,Object.assign({className:n,$size:i,$color:r},{children:[t(es,{id:"inner1",$size:i-2,$borderWidth:2,$color:r}),t(ts,{id:"inner2",$size:i-2,$borderWidth:2,$color:r}),t(rs,{id:"inner3",$size:i-2,$borderWidth:2,$color:r}),t(ns,{id:"inner4",$size:i-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Zt.Button.Danger.Primary:Ut.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ut.Neutral[3](e);break;default:t=Ut.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,os={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:u=!1}=r,l=M(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:u};return e(is,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(as,Object.assign({},c)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:u=!1}=r,l=M(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:u};return e(is,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(as,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},ss=m.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return y`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?y`
                        border-color: ${Ut.Validation.Red.Icon};
                        background: ${Ut.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Red};
                        }
                    `:e.$disabled?y`
                        border-color: transparent;
                    `:y`
                        border-color: transparent;

                        :hover {
                            background: ${Ut.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?y`
                        background: ${Ut.Neutral[6]};
                        border-color: ${Ut.Neutral[5]};
                    `:e.$disabled&&e.$selected?y`
                        background: ${Ut.Neutral[6]};
                        border-color: ${Ut.Neutral[4]};
                    `:e.$error?y`
                        background: ${Ut.Neutral[8]};
                        border-color: ${Ut.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Red};
                        }
                    `:e.$selected?y`
                        background: ${Ut.Accent.Light[5]};
                        border-color: ${Ut.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Accent};
                        }
                    `:y`
                        background: ${Ut.Neutral[8]};
                        border-color: ${Ut.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Ut.Shadow.Accent};
                            border-color: ${Ut.Accent.Light[1]};
                        }
                    `}
`,us=m.input`
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
`,ls=m.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
`,cs=m.label`
    ${e=>e.$selected&&!e.$indicator?y`
                ${ar("H4","semibold")}
            `:y`
                ${ar("H4","regular")}
            `}

    color: ${Ut.Neutral[1]};

    ${e=>e.$disabled?y`
                color: ${Ut.Neutral[3]};
            `:e.$selected?y`
                color: ${Ut.Primary};
            `:void 0}
`,ds=m.div`
    ${ar("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ir("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?y`
                color: ${Ut.Neutral[3]};
            `:e.$selected?y`
                color: ${Ut.Primary};
            `:y`
                color: ${Ut.Neutral[1]};
            `}
`,hs=m.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?y`
                    color: ${Ut.Primary};
                `:y`
                    color: ${Ut.Neutral[4]};
                `};
    }
`,fs=({type:e,active:r=!1,disabled:n,className:i})=>{let a;switch(e){case"checkbox":a=t(r?k:_,{});break;case"radio":a=t(r?D:x,{});break;case"tick":a=t(O,{});break;case"cross":a=t(B,{});break;default:a=null}return t(hs,Object.assign({className:i,$active:r,disabled:n},{children:a}))};var ps={exports:{}};ps.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],l=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=l("months"),r=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:u,ZZ:u};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,u=0;u<s;u+=1){var l=o[u],c=d[l],h=c&&c[0],f=c&&c[1];o[u]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,u=i.parser,l=e.slice(n),c=a.exec(l)[0];u.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var u=!0===o[2],l=!0===o[3],c=u||l,d=o[2];l&&(d=o[2]),a=this.$locale(),!u&&d&&(a=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,u=n.minutes,l=n.seconds,c=n.milliseconds,d=n.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,v=u||0,b=l||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):r?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=r.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var gs,ms,ys=A(ps.exports),vs={exports:{}},bs=A(vs.exports=(gs={year:0,month:1,day:2,hour:3,minute:4,second:5},ms={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=ms[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),ms[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],u=s.type,l=s.value,c=gs[u];c>=0&&(a[c]=parseInt(l,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),u=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var l=u.utcOffset();u=u.add(i-l,"minute")}return u.$x.$timezone=e,u},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,u=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var l=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),u,s),c=l[0],d=l[1],h=r(c).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),ws={exports:{}};ws.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",u="week",l="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,l),a=r-i<0,o=t.clone().add(n+(a?-1:1),l);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:u,d:s,D:h,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $="$isDayjsObject",S=function(e){return e instanceof B||!(!e||!e[$])},F=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();w[a]&&(i=a),r&&(w[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},x=function(e,t){if(S(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},D=v;D.l=F,D.i=S,D.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!D.u(t)||t,c=D.p(e),f=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return n?f(1,0):f(31,11);case l:return n?f(1,m):f(0,m+1);case u:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(n?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,u=D.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[l]=c+"Month",r[d]=c+"FullYear",r[o]=c+"Hours",r[a]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[u],p=u===s?this.$D+(t-this.$W):t;if(u===l||u===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,c){var h,f=this;n=Number(n);var p=D.p(c),g=function(e){var t=x(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return g(1);if(p===u)return g(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,u=r.weekdays,l=r.months,c=r.meridiem,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return D.s(a%12||12,e,"0")},p=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return d(r.monthsShort,s,l,3);case"MMMM":return d(l,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(r.weekdaysMin,t.$W,u,2);case"ddd":return d(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(a);case"HH":return D.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return D.s(o,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,g=this,m=D.p(h),y=x(n),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return D.m(g,y)};switch(m){case d:p=w()/12;break;case l:p=w();break;case c:p=w()/3;break;case u:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case o:p=b/r;break;case a:p=b/t;break;case i:p=b/e;break;default:p=b}return f?p:D.a(p)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=F(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),_=B.prototype;return x.prototype=_,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,B,x),e.$i=!0),x},x.locale=F,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var $s=A(ws.exports),Ss={exports:{}};Ss.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],u=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(u?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(u?this.isAfter(o,n):!this.isBefore(o,n))}};var Fs=A(Ss.exports),xs={exports:{}};xs.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ds=A(xs.exports),Bs={exports:{}};Bs.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var _s,ks=A(Bs.exports);$s.extend(Fs),$s.extend(Ds),$s.extend(ks),$s.extend(ys),$s.extend(bs),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=$s(t).startOf("week");return Os(r).map((e=>Ms(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ms(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push($s(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+$s(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=$s(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?$s(n):void 0,i?$s(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(_s||(_s={}));const Os=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ms=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Es=[1,3,5,7,8,10,12],As=[4,6,9,11];var Hs,Cs,Is;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":Es.includes(a)?Math.min(i,31).toString():As.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=$s(e,r);return $s(t,r).diff(n,"minute")},e.toDayjs=e=>e?$s(e):$s(),e.addMinutesToTime=(e,t,r="HH:mm")=>$s(e,r).add(t,"minutes").format(r)}(Hs||(Hs={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!$s(e).isBefore(n,"day"))||!(!i||!$s(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if($s(e).isValid())return e}return""}}(Cs||(Cs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Is||(Is={}));const Ps=(e,t,r="window",n)=>{const a=i();c((()=>{a.current=t}),[t]),c((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const i=e=>a.current(e);return t.addEventListener(e,i,n),()=>{t.removeEventListener(e,i,n)}}),[e,r])},Ts=m.button`
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

        ${({$highlight:e})=>e&&y`
                background-color: ${Ut.Neutral[7]};
            `}
    }
`,zs=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=M(e,["children","focusHighlight","focusOutline","type"]);return t(Ts,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),js=m(Yo.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Ut.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Xo.mobileS} {
        max-width: 100%;
    }
`,Rs=m.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Ns=m.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Xo.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Vs=m.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Xo.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Ls=m.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Xo.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Ws=m.div`
    display: flex;
    gap: 0.5rem;

    ${Xo.tablet} {
        flex-direction: column;
    }

    ${Xo.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Ys=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Xo.mobileS} {
        width: 6rem;
    }
`,Us=m(zs)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Ut.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Ut.Primary};
    }
`,qs=m(sr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Xo.tablet} {
        margin: 0;
    }

    ${Xo.mobileS} {
        margin: 0 0.25rem;
    }
`,Qs=m(fr)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Ut.Neutral[5]};
    background: ${Ut.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Ut.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Ut.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${Xo.mobileS} {
        width: 100%;
    }
`,Zs=m((({type:r="checkbox",indicator:n,checked:o,styleType:s="default",children:u,subLabel:l,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=a(o),[w]=a(Is.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=i();c((()=>{b(o)}),[o]);return e(ss,Object.assign({$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:n,id:p,"data-testid":m},{children:[n&&(()=>{let e;switch(r){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=r}return t(fs,{type:e,active:v,disabled:d})})(),t(us,{ref:S,name:f,id:$,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(r){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(ls,{children:[t(cs,Object.assign({htmlFor:$,$selected:v,$indicator:n,$disabled:d,"data-testid":"toggle-label"},{children:u})),l&&(()=>{if(!l)return null;let e;return"string"==typeof l?e=l:"function"==typeof l&&(e=l()),t(ds,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:v},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,Gs=m(os.Small)`
    width: 7rem;

    ${Xo.mobileL} {
        flex: 1;
    }

    ${Xo.mobileS} {
        width: 100%;
    }
`;var Xs,Js,Ks;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Xs||(Xs={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Js||(Js={})),function(e){e.AM="am",e.PM="pm"}(Ks||(Ks={}));const eu=({id:r,value:n,show:o,format:s,onChange:u,onCancel:l})=>{const d=Lo.getTimeValues(s,n),[h,p]=a(d.hour),[g,m]=a(d.minute),[y,v]=a(d.period),b=i(),S=i(),F=function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,s=void 0===o?1e3:o,u=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(r),y=i(null),v=null!=f?f:y,b=i(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return un((function(){if(!an()){var e=sn(g,S,c,h);b.current=rn((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!m.current&&!an()&&e({width:n,height:i}),m.current=!1}))}),n,s,u);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[n,s,u,c,h,g,p,v.current]),gr({ref:v},$)}();c((()=>{if(o&&b.current&&b.current.focus(),o){const{hour:e,minute:t,period:r}=Lo.getTimeValues(s,n);p(e),m(t),v(r)}}),[o,n,s]),c((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},D=f((e=>{switch(e.currentTarget.name){case Xs.MINUTE_UP:m(Lo.updateMinutes(g,"add"));break;case Xs.MINUTE_DOWN:m(Lo.updateMinutes(g,"minus"));break;case Xs.HOUR_UP:p(Lo.updateHours(h,"add"));break;case Xs.HOUR_DOWN:p(Lo.updateHours(h,"minus"))}}),[h,g]),B=e=>{e.target.select()},_=e=>{const t=e.target.value;switch(e.target.name){case Js.HOUR:t.length<=2&&p(t);break;case Js.MINUTE:t.length<=2&&m(t)}},k=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Js.HOUR:{const r=t>23||t<0?d.hour:Lo.convertHourTo12HourFormat(e.target.value);p(r);break}case Js.MINUTE:{const r=t>59||t<0?d.minute:e.target.value;m(No.padValue(r));break}}},O=e=>{switch(e.target.name){case Ks.AM:v(Vo.AM);break;case Ks.PM:v(Vo.PM)}},M=e=>r?`${r}-${e}`:e,E=xo({height:o?F.height+32:0});return t(js,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(Rs,Object.assign({ref:F.ref,"data-testid":M("timepicker-dropdown"),inert:o?void 0:""},{children:[e(Ns,{children:[e(Ls,{children:[e(Ys,{children:[t(Us,Object.assign({"aria-label":"increase hour",name:Xs.HOUR_UP,tabIndex:-1,onClick:D,"data-testid":M("hour-increment-button")},{children:t($,{})})),t(Qs,{"aria-label":"hour",type:"number",name:Js.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:B,onChange:_,onBlur:k,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Us,Object.assign({"aria-label":"decrease hour",name:Xs.HOUR_DOWN,tabIndex:-1,onClick:D,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(qs,{children:":"}),e(Ys,{children:[t(Us,Object.assign({"aria-label":"increase minute",name:Xs.MINUTE_UP,tabIndex:-1,onClick:D,"data-testid":M("minute-increment-button")},{children:t($,{})})),t(Qs,{"aria-label":"minute",type:"number",name:Js.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:_,onBlur:k,onFocus:B,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Us,Object.assign({"aria-label":"decrease minute",name:Xs.MINUTE_DOWN,tabIndex:-1,onClick:D,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Ws,{children:[t(Zs,Object.assign({checked:y===Vo.AM,name:Ks.AM,type:"radio",onChange:O,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(Zs,Object.assign({checked:y===Vo.PM,name:Ks.PM,type:"radio",onChange:O,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Vs,{children:[t(Gs,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":M("cancel-button")},{children:"Cancel"})),t(Gs,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Lo.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,u(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))};m.div`
    position: relative;
`;const tu=m(fr)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,ru=r=>{var{id:n,disabled:o=!1,readOnly:s=!1,error:u,value:l,placeholder:c,format:d="24hr",onChange:h,onFocus:p,onBlur:g}=r,m=M(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[y,v]=a(!1),b=i();Ps("mousedown",(function(e){o||s||S(e)}),"document"),Ps("keyup",(function(e){if("Tab"===e.code)S(e)}),"document");const w=()=>{o||s||y||(v(!0),p&&p())};const $=()=>{v(!1),g&&g()},S=e=>{b&&!b.current.contains(e.target)&&y&&$()},F=f((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,c]);return e(hr,Object.assign({ref:b,id:n,$readOnly:s,$disabled:o,$error:u},m,{children:[t(tu,{onFocus:w,focused:y,readOnly:!0,placeholder:c||F(),value:Lo.formatDisplayValue(l,d),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(eu,{id:n,show:y,value:l,format:d,onCancel:()=>{$()},onChange:e=>{h&&h(e),$()}})]}))};export{ru as Timepicker};
//# sourceMappingURL=index.js.map
