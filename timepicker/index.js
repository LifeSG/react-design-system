import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{useRef as i,useState as o,isValidElement as a,createRef as s,cloneElement as l,PureComponent as u,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import m,{css as y,keyframes as v}from"styled-components";import{ExternalIcon as b}from"@lifesg/react-icons/external";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as F}from"react-dom";import{CircleIcon as x}from"@lifesg/react-icons/circle";import{CircleDotIcon as D}from"@lifesg/react-icons/circle-dot";import{CrossIcon as B}from"@lifesg/react-icons/cross";import{SquareIcon as _}from"@lifesg/react-icons/square";import{SquareTickFillIcon as k}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as O}from"@lifesg/react-icons/tick";function M(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function A(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H=Array.isArray,C="object"==typeof E&&E&&E.Object===Object&&E,I="object"==typeof self&&self&&self.Object===Object&&self,P=C||I||Function("return this")(),T=P.Symbol,z=T,j=Object.prototype,N=j.hasOwnProperty,R=j.toString,V=z?z.toStringTag:void 0;var L=function(e){var t=N.call(e,V),n=e[V];try{e[V]=void 0;var r=!0}catch(e){}var i=R.call(e);return r&&(t?e[V]=n:delete e[V]),i},W=Object.prototype.toString;var Y=L,U=function(e){return W.call(e)},q=T?T.toStringTag:void 0;var Q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":q&&q in Object(e)?Y(e):U(e)};var Z=Q,G=function(e){return null!=e&&"object"==typeof e};var X=function(e){return"symbol"==typeof e||G(e)&&"[object Symbol]"==Z(e)},J=H,K=X,ee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,te=/^\w*$/;var ne=function(e,t){if(J(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!K(e))||(te.test(e)||!ee.test(e)||null!=t&&e in Object(t))};var re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie=Q,oe=re;var ae,se=function(e){if(!oe(e))return!1;var t=ie(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},le=P["__core-js_shared__"],ue=(ae=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+ae:"";var ce=function(e){return!!ue&&ue in e},de=Function.prototype.toString;var he=se,fe=ce,pe=re,ge=function(e){if(null!=e){try{return de.call(e)}catch(e){}try{return e+""}catch(e){}}return""},me=/^\[object .+?Constructor\]$/,ye=Function.prototype,ve=Object.prototype,be=ye.toString,we=ve.hasOwnProperty,$e=RegExp("^"+be.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e){return!(!pe(e)||fe(e))&&(he(e)?$e:me).test(ge(e))},Fe=function(e,t){return null==e?void 0:e[t]};var xe=function(e,t){var n=Fe(e,t);return Se(n)?n:void 0},De=xe(Object,"create"),Be=De;var _e=function(){this.__data__=Be?Be(null):{},this.size=0};var ke=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Oe=De,Me=Object.prototype.hasOwnProperty;var Ee=function(e){var t=this.__data__;if(Oe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Me.call(t,e)?t[e]:void 0},Ae=De,He=Object.prototype.hasOwnProperty;var Ce=De;var Ie=_e,Pe=ke,Te=Ee,ze=function(e){var t=this.__data__;return Ae?void 0!==t[e]:He.call(t,e)},je=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ce&&void 0===t?"__lodash_hash_undefined__":t,this};function Ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ne.prototype.clear=Ie,Ne.prototype.delete=Pe,Ne.prototype.get=Te,Ne.prototype.has=ze,Ne.prototype.set=je;var Re=Ne;var Ve=function(){this.__data__=[],this.size=0};var Le=function(e,t){return e===t||e!=e&&t!=t};var We=function(e,t){for(var n=e.length;n--;)if(Le(e[n][0],t))return n;return-1},Ye=We,Ue=Array.prototype.splice;var qe=We;var Qe=We;var Ze=We;var Ge=Ve,Xe=function(e){var t=this.__data__,n=Ye(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ue.call(t,n,1),--this.size,!0)},Je=function(e){var t=this.__data__,n=qe(t,e);return n<0?void 0:t[n][1]},Ke=function(e){return Qe(this.__data__,e)>-1},et=function(e,t){var n=this.__data__,r=Ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function tt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}tt.prototype.clear=Ge,tt.prototype.delete=Xe,tt.prototype.get=Je,tt.prototype.has=Ke,tt.prototype.set=et;var nt=tt,rt=xe(P,"Map"),it=Re,ot=nt,at=rt;var st=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var lt=function(e,t){var n=e.__data__;return st(t)?n["string"==typeof t?"string":"hash"]:n.map},ut=lt;var ct=lt;var dt=lt;var ht=lt;var ft=function(){this.size=0,this.__data__={hash:new it,map:new(at||ot),string:new it}},pt=function(e){var t=ut(this,e).delete(e);return this.size-=t?1:0,t},gt=function(e){return ct(this,e).get(e)},mt=function(e){return dt(this,e).has(e)},yt=function(e,t){var n=ht(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vt.prototype.clear=ft,vt.prototype.delete=pt,vt.prototype.get=gt,vt.prototype.has=mt,vt.prototype.set=yt;var bt=vt;function wt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(wt.Cache||bt),n}wt.Cache=bt;var $t=wt;var St=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ft=/\\(\\)?/g,xt=function(e){var t=$t(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(St,(function(e,n,r,i){t.push(r?i.replace(Ft,"$1"):n||e)})),t}));var Dt=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Bt=H,_t=X,kt=T?T.prototype:void 0,Ot=kt?kt.toString:void 0;var Mt=function e(t){if("string"==typeof t)return t;if(Bt(t))return Dt(t,e)+"";if(_t(t))return Ot?Ot.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Et=Mt;var At=H,Ht=ne,Ct=xt,It=function(e){return null==e?"":Et(e)};var Pt=X;var Tt=function(e,t){return At(e)?e:Ht(e,t)?[e]:Ct(It(e))},zt=function(e){if("string"==typeof e||Pt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var jt=function(e,t){for(var n=0,r=(t=Tt(t,e)).length;null!=e&&n<r;)e=e[zt(t[n++])];return n&&n==r?e:void 0};var Nt=A((function(e,t,n){var r=null==e?void 0:jt(e,t);return void 0===r?n:r}));const Rt=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,Vt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Lt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Lt||(Lt={}));const Wt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Yt=e=>t=>{const n=t.theme,r=Vt(Wt,n[Lt.colorScheme]);return n.options&&n.options.color?Rt(r,e,n.options.color):Rt(r,e)},Ut={Brand:{1:Yt("Brand.1"),2:Yt("Brand.2"),3:Yt("Brand.3"),4:Yt("Brand.4"),5:Yt("Brand.5"),6:Yt("Brand.6")},Primary:Yt("Primary"),PrimaryDark:Yt("PrimaryDark"),Secondary:Yt("Secondary"),Accent:{Light:{1:Yt("Accent.Light.1"),2:Yt("Accent.Light.2"),3:Yt("Accent.Light.3"),4:Yt("Accent.Light.4"),5:Yt("Accent.Light.5"),6:Yt("Accent.Light.6")},Dark:{1:Yt("Accent.Dark.1"),2:Yt("Accent.Dark.2"),3:Yt("Accent.Dark.3")}},Neutral:{1:Yt("Neutral.1"),2:Yt("Neutral.2"),3:Yt("Neutral.3"),4:Yt("Neutral.4"),5:Yt("Neutral.5"),6:Yt("Neutral.6"),7:Yt("Neutral.7"),8:Yt("Neutral.8")},Validation:{Green:{Text:Yt("Validation.Green.Text"),Icon:Yt("Validation.Green.Icon"),Border:Yt("Validation.Green.Border"),Background:Yt("Validation.Green.Background")},Orange:{Text:Yt("Validation.Orange.Text"),Icon:Yt("Validation.Orange.Icon"),Border:Yt("Validation.Orange.Border"),Background:Yt("Validation.Orange.Background"),Badge:Yt("Validation.Orange.Badge")},Red:{Text:Yt("Validation.Red.Text"),Icon:Yt("Validation.Red.Icon"),Border:Yt("Validation.Red.Border"),Background:Yt("Validation.Red.Background")},Blue:{Text:Yt("Validation.Blue.Text"),Icon:Yt("Validation.Blue.Icon"),Border:Yt("Validation.Blue.Border"),Background:Yt("Validation.Blue.Background")}},Shadow:{Accent:Yt("Shadow.Accent"),Red:Yt("Shadow.Red"),Elevation:Yt("Shadow.Elevation")}},qt={collections:{base:{InputBoxShadow:y`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Qt=e=>t=>{var n;const r=t.theme,i=Vt(qt,r[Lt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Rt(i,e,r.options.designToken):Rt(i,e)},Zt={InputBoxShadow:Qt("InputBoxShadow"),InputErrorBoxShadow:Qt("InputErrorBoxShadow"),ElevationBoxShadow:Qt("ElevationBoxShadow"),Table:{Header:Qt("Table.Header"),Cell:{Primary:Qt("Table.Cell.Primary"),Secondary:Qt("Table.Cell.Secondary"),Selected:Qt("Table.Cell.Selected"),Hover:Qt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Qt("Button.Danger.BackgroundColor"),Hover:Qt("Button.Danger.Hover"),Primary:Qt("Button.Danger.Primary"),Border:Qt("Button.Danger.Border")}}},Gt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Xt={collections:{base:{D1:{fontFamily:Gt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Gt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Gt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Gt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Gt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Gt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Gt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Gt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Gt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Gt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Gt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Gt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Jt=e=>t=>{const n=t.theme,r=Vt(Xt,n[Lt.textStyleScheme]);return n.options&&n.options.textStyle?Rt(r,e,n.options.textStyle):Rt(r,e)},Kt={D1:{fontFamily:Jt("D1.fontFamily"),fontSize:Jt("D1.fontSize"),fontWeight:Jt("D1.fontWeight"),lineHeight:Jt("D1.lineHeight"),letterSpacing:Jt("D1.letterSpacing")},D2:{fontFamily:Jt("D2.fontFamily"),fontSize:Jt("D2.fontSize"),fontWeight:Jt("D2.fontWeight"),lineHeight:Jt("D2.lineHeight"),letterSpacing:Jt("D2.letterSpacing")},D3:{fontFamily:Jt("D3.fontFamily"),fontSize:Jt("D3.fontSize"),fontWeight:Jt("D3.fontWeight"),lineHeight:Jt("D3.lineHeight"),letterSpacing:Jt("D3.letterSpacing")},D4:{fontFamily:Jt("D4.fontFamily"),fontSize:Jt("D4.fontSize"),fontWeight:Jt("D4.fontWeight"),lineHeight:Jt("D4.lineHeight"),letterSpacing:Jt("D4.letterSpacing")},DBody:{fontFamily:Jt("DBody.fontFamily"),fontSize:Jt("DBody.fontSize"),fontWeight:Jt("DBody.fontWeight"),lineHeight:Jt("DBody.lineHeight"),letterSpacing:Jt("DBody.letterSpacing")},H1:{fontFamily:Jt("H1.fontFamily"),fontSize:Jt("H1.fontSize"),fontWeight:Jt("H1.fontWeight"),lineHeight:Jt("H1.lineHeight"),letterSpacing:Jt("H1.letterSpacing")},H2:{fontFamily:Jt("H2.fontFamily"),fontSize:Jt("H2.fontSize"),fontWeight:Jt("H2.fontWeight"),lineHeight:Jt("H2.lineHeight"),letterSpacing:Jt("H2.letterSpacing")},H3:{fontFamily:Jt("H3.fontFamily"),fontSize:Jt("H3.fontSize"),fontWeight:Jt("H3.fontWeight"),lineHeight:Jt("H3.lineHeight"),letterSpacing:Jt("H3.letterSpacing")},H4:{fontFamily:Jt("H4.fontFamily"),fontSize:Jt("H4.fontSize"),fontWeight:Jt("H4.fontWeight"),lineHeight:Jt("H4.lineHeight"),letterSpacing:Jt("H4.letterSpacing")},H5:{fontFamily:Jt("H5.fontFamily"),fontSize:Jt("H5.fontSize"),fontWeight:Jt("H5.fontWeight"),lineHeight:Jt("H5.lineHeight"),letterSpacing:Jt("H5.letterSpacing")},H6:{fontFamily:Jt("H6.fontFamily"),fontSize:Jt("H6.fontSize"),fontWeight:Jt("H6.fontWeight"),lineHeight:Jt("H6.lineHeight"),letterSpacing:Jt("H6.letterSpacing")},Body:{fontFamily:Jt("Body.fontFamily"),fontSize:Jt("Body.fontSize"),fontWeight:Jt("Body.fontWeight"),lineHeight:Jt("Body.lineHeight"),letterSpacing:Jt("Body.letterSpacing")},BodySmall:{fontFamily:Jt("BodySmall.fontFamily"),fontSize:Jt("BodySmall.fontSize"),fontWeight:Jt("BodySmall.fontWeight"),lineHeight:Jt("BodySmall.lineHeight"),letterSpacing:Jt("BodySmall.letterSpacing")},XSmall:{fontFamily:Jt("XSmall.fontFamily"),fontSize:Jt("XSmall.fontSize"),fontWeight:Jt("XSmall.fontWeight"),lineHeight:Jt("XSmall.lineHeight"),letterSpacing:Jt("XSmall.letterSpacing")}},en=e=>{switch(e){case 700:case"bold":return Gt.Bold;case 600:case"semibold":return Gt.Semibold;case 300:case"light":return Gt.Light;case 400:case"regular":return Gt.Regular;default:return""}},tn=(e,t)=>n=>{var r;const i=Kt[e].fontFamily(n),o=Kt[e].fontWeight(n);return Object.values(Gt).includes(i)?y`
                font-family: ${en(t)||en(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=nn(t)||o)&&void 0!==r?r:"normal"};
        `},nn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},rn=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},on=tn,an=(e,t,n=!1)=>r=>{const i=Kt[e],o=i.fontSize(r);return y`
            ${tn(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},sn=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${rn(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${rn(n)}
        `;var ln;!function(e){e.D1=m.h1`
        ${e=>y`
                ${an("D1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>y`
                ${an("D2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>y`
                ${an("D3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>y`
                ${an("D4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>y`
                ${an("DBody",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>y`
                ${an("H1",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>y`
                ${an("H2",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>y`
                ${an("H3",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>y`
                ${an("H4",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>y`
                ${an("H5",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>y`
                ${an("H6",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>y`
                ${an("Body",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>y`
                ${an("BodySmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>y`
                ${an("XSmall",e.weight,e.paragraph)}
                color: ${Ut.Neutral[1]};
                ${sn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>dn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>dn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(ln||(ln={}));const un=m.a`
    ${e=>y`
            ${an(e.textStyle,e.weight)}
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
`,cn=m(b)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,dn=n=>{var{external:r=!1,children:i}=n,o=M(n,["external","children"]);return e(un,Object.assign({},o,{children:[i,r&&t(cn,{})]}))};var hn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(hn||(hn={}));const fn=m.div`
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
`,pn=m.input`
    ${an("Body","regular")}
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
`;var gn=function(e,t){return gn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},gn(e,t)};var mn=function(){return mn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},mn.apply(this,arguments)};var yn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var vn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},bn="object"==typeof yn&&yn&&yn.Object===Object&&yn,wn="object"==typeof self&&self&&self.Object===Object&&self,$n=bn||wn||Function("return this")(),Sn=$n,Fn=function(){return Sn.Date.now()},xn=/\s/;var Dn=function(e){for(var t=e.length;t--&&xn.test(e.charAt(t)););return t},Bn=/^\s+/;var _n=function(e){return e?e.slice(0,Dn(e)+1).replace(Bn,""):e},kn=$n.Symbol,On=kn,Mn=Object.prototype,En=Mn.hasOwnProperty,An=Mn.toString,Hn=On?On.toStringTag:void 0;var Cn=function(e){var t=En.call(e,Hn),n=e[Hn];try{e[Hn]=void 0;var r=!0}catch(e){}var i=An.call(e);return r&&(t?e[Hn]=n:delete e[Hn]),i},In=Object.prototype.toString;var Pn=Cn,Tn=function(e){return In.call(e)},zn=kn?kn.toStringTag:void 0;var jn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":zn&&zn in Object(e)?Pn(e):Tn(e)},Nn=function(e){return null!=e&&"object"==typeof e};var Rn=_n,Vn=vn,Ln=function(e){return"symbol"==typeof e||Nn(e)&&"[object Symbol]"==jn(e)},Wn=/^[-+]0x[0-9a-f]+$/i,Yn=/^0b[01]+$/i,Un=/^0o[0-7]+$/i,qn=parseInt;var Qn=vn,Zn=Fn,Gn=function(e){if("number"==typeof e)return e;if(Ln(e))return NaN;if(Vn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Vn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Rn(e);var n=Yn.test(e);return n||Un.test(e)?qn(e.slice(2),n?2:8):Wn.test(e)?NaN:+e},Xn=Math.max,Jn=Math.min;var Kn=function(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function g(){var e=Zn();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Jn(n,o-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=Zn(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Gn(t)||0,Qn(n)&&(c=!!n.leading,o=(d="maxWait"in n)?Xn(Gn(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(Zn())},y},er=Kn,tr=vn;var nr=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return tr(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),er(e,t,{leading:r,maxWait:t,trailing:i})},rr=function(e,t,n,r){switch(t){case"debounce":return Kn(e,n,r);case"throttle":return nr(e,n,r);default:return e}},ir=function(e){return"function"==typeof e},or=function(){return"undefined"==typeof window},ar=function(e){return e instanceof Element||e instanceof HTMLDocument},sr=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&ir(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!or()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(or())return null;if(t)return document.querySelector(t);if(r&&ar(r))return r;if(n.targetRef&&ar(n.targetRef.current))return n.targetRef.current;var i=S(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=sr(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!or()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ir(t)?"renderProp":ir(r)?"childFunction":a(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,l=void 0===o?1e3:o,u=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,or()||(n.resizeHandler=rr(n.createResizeHandler,i,l,u),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}gn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){or()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,o=t.nodeType,a=void 0===o?"div":o,s=this.state,u={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(u);case"childFunction":return(e=i)(u);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(u,["targetRef"]);return l(e,c)}return l(e,u);case"childArray":return(e=i).map((function(e){return!!e&&l(e,u)}));default:return n.createElement(a,null)}}}(u);var lr=or()?c:d;var ur=Object.defineProperty,cr={};((e,t)=>{for(var n in t)ur(e,n,{get:t[n],enumerable:!0})})(cr,{assign:()=>Lr,colors:()=>Nr,createStringInterpolator:()=>Pr,skipAnimation:()=>Rr,to:()=>Tr,willAdvance:()=>Vr});var dr=_r(),hr=e=>Fr(e,dr),fr=_r();hr.write=e=>Fr(e,fr);var pr=_r();hr.onStart=e=>Fr(e,pr);var gr=_r();hr.onFrame=e=>Fr(e,gr);var mr=_r();hr.onFinish=e=>Fr(e,mr);var yr=[];hr.setTimeout=(e,t)=>{const n=hr.now()+t,r=()=>{const e=yr.findIndex((e=>e.cancel==r));~e&&yr.splice(e,1),$r-=~e?1:0},i={time:n,handler:e,cancel:r};return yr.splice(vr(n),0,i),$r+=1,xr(),i};var vr=e=>~(~yr.findIndex((t=>t.time>e))||~yr.length);hr.cancel=e=>{pr.delete(e),gr.delete(e),mr.delete(e),dr.delete(e),fr.delete(e)},hr.sync=e=>{Sr=!0,hr.batchedUpdates(e),Sr=!1},hr.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,hr.onStart(n)}return r.handler=e,r.cancel=()=>{pr.delete(n),t=null},r};var br="undefined"!=typeof window?window.requestAnimationFrame:()=>{};hr.use=e=>br=e,hr.now="undefined"!=typeof performance?()=>performance.now():Date.now,hr.batchedUpdates=e=>e(),hr.catch=console.error,hr.frameLoop="always",hr.advance=()=>{"demand"!==hr.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Br()};var wr=-1,$r=0,Sr=!1;function Fr(e,t){Sr?(t.delete(e),e(0)):(t.add(e),xr())}function xr(){wr<0&&(wr=0,"demand"!==hr.frameLoop&&br(Dr))}function Dr(){~wr&&(br(Dr),hr.batchedUpdates(Br))}function Br(){const e=wr;wr=hr.now();const t=vr(wr);t&&(kr(yr.splice(0,t),(e=>e.handler())),$r-=t),$r?(pr.flush(),dr.flush(e?Math.min(64,wr-e):16.667),gr.flush(),fr.flush(),mr.flush()):wr=-1}function _r(){let e=new Set,t=e;return{add(n){$r+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>($r-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,$r-=t.size,kr(t,(t=>t(n)&&e.add(t))),$r+=e.size,t=e)}}}function kr(e,t){e.forEach((e=>{try{t(e)}catch(e){hr.catch(e)}}))}function Or(){}var Mr={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Er(e,t){if(Mr.arr(e)){if(!Mr.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var Ar=(e,t)=>e.forEach(t);function Hr(e,t,n){if(Mr.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var Cr=e=>Mr.und(e)?[]:Mr.arr(e)?e:[e];function Ir(e,t){if(e.size){const n=Array.from(e);e.clear(),Ar(n,t)}}var Pr,Tr,zr=(e,...t)=>Ir(e,(e=>e(...t))),jr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Nr=null,Rr=!1,Vr=Or,Lr=e=>{e.to&&(Tr=e.to),e.now&&(hr.now=e.now),void 0!==e.colors&&(Nr=e.colors),null!=e.skipAnimation&&(Rr=e.skipAnimation),e.createStringInterpolator&&(Pr=e.createStringInterpolator),e.requestAnimationFrame&&hr.use(e.requestAnimationFrame),e.batchedUpdates&&(hr.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Vr=e.willAdvance),e.frameLoop&&(hr.frameLoop=e.frameLoop)},Wr=new Set,Yr=[],Ur=[],qr=0,Qr={get idle(){return!Wr.size&&!Yr.length},start(e){qr>e.priority?(Wr.add(e),hr.onStart(Zr)):(Gr(e),hr(Jr))},advance:Jr,sort(e){if(qr)hr.onFrame((()=>Qr.sort(e)));else{const t=Yr.indexOf(e);~t&&(Yr.splice(t,1),Xr(e))}},clear(){Yr=[],Wr.clear()}};function Zr(){Wr.forEach(Gr),Wr.clear(),hr(Jr)}function Gr(e){Yr.includes(e)||Xr(e)}function Xr(e){Yr.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Yr,(t=>t.priority>e.priority)),0,e)}function Jr(e){const t=Ur;for(let n=0;n<Yr.length;n++){const r=Yr[n];qr=r.priority,r.idle||(Vr(r),r.advance(e),r.idle||t.push(r))}return qr=0,(Ur=Yr).length=0,(Yr=t).length>0}var Kr="[-+]?\\d*\\.?\\d+",ei=Kr+"%";function ti(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var ni=new RegExp("rgb"+ti(Kr,Kr,Kr)),ri=new RegExp("rgba"+ti(Kr,Kr,Kr,Kr)),ii=new RegExp("hsl"+ti(Kr,ei,ei)),oi=new RegExp("hsla"+ti(Kr,ei,ei,Kr)),ai=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,si=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,li=/^#([0-9a-fA-F]{6})$/,ui=/^#([0-9a-fA-F]{8})$/;function ci(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function di(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=ci(i,r,e+1/3),a=ci(i,r,e),s=ci(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function hi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function fi(e){return(parseFloat(e)%360+360)%360/360}function pi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function gi(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function mi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=li.exec(e))?parseInt(t[1]+"ff",16)>>>0:Nr&&void 0!==Nr[e]?Nr[e]:(t=ni.exec(e))?(hi(t[1])<<24|hi(t[2])<<16|hi(t[3])<<8|255)>>>0:(t=ri.exec(e))?(hi(t[1])<<24|hi(t[2])<<16|hi(t[3])<<8|pi(t[4]))>>>0:(t=ai.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ui.exec(e))?parseInt(t[1],16)>>>0:(t=si.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ii.exec(e))?(255|di(fi(t[1]),gi(t[2]),gi(t[3])))>>>0:(t=oi.exec(e))?(di(fi(t[1]),gi(t[2]),gi(t[3]))|pi(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var yi=(e,t,n)=>{if(Mr.fun(e))return e;if(Mr.arr(e))return yi({range:e,output:t,extrapolate:n});if(Mr.str(e.output[0]))return Pr(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var vi=1.70158,bi=1.525*vi,wi=vi+1,$i=2*Math.PI/3,Si=2*Math.PI/4.5,Fi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},xi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>wi*e*e*e-vi*e*e,easeOutBack:e=>1+wi*Math.pow(e-1,3)+vi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-bi)/2:(Math.pow(2*e-2,2)*((bi+1)*(2*e-2)+bi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*$i),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*$i)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Si)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Si)/2+1,easeInBounce:e=>1-Fi(1-e),easeOutBounce:Fi,easeInOutBounce:e=>e<.5?(1-Fi(1-2*e))/2:(1+Fi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},Di=Symbol.for("FluidValue.get"),Bi=Symbol.for("FluidValue.observers"),_i=e=>Boolean(e&&e[Di]),ki=e=>e&&e[Di]?e[Di]():e,Oi=e=>e[Bi]||null;function Mi(e,t){const n=e[Bi];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Ei=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ai(this,e)}},Ai=(e,t)=>Pi(e,Di,t);function Hi(e,t){if(e[Di]){let n=e[Bi];n||Pi(e,Bi,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ci(e,t){const n=e[Bi];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Bi]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var Ii,Pi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Ti=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,zi=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ji=new RegExp(`(${Ti.source})(%|[a-z]+)`,"i"),Ni=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Ri=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Vi=e=>{const[t,n]=Li(e);if(!t||jr())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Ri.test(n)?Vi(n):n||e},Li=e=>{const t=Ri.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},Wi=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Yi=e=>{Ii||(Ii=Nr?new RegExp(`(${Object.keys(Nr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>ki(e).replace(Ri,Vi).replace(zi,mi).replace(Ii,mi))),n=t.map((e=>e.match(Ti).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>yi({...e,output:t})));return e=>{const n=!ji.test(t[0])&&t.find((e=>ji.test(e)))?.replace(Ti,"");let i=0;return t[0].replace(Ti,(()=>`${r[i++](e)}${n||""}`)).replace(Ni,Wi)}},Ui="react-spring: ",qi=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Ui}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Qi=qi(console.warn);var Zi=qi(console.warn);function Gi(e){return Mr.str(e)&&("#"==e[0]||/\d/.test(e)||!jr()&&Ri.test(e)||e in(Nr||{}))}var Xi=jr()?c:d,Ji=()=>{const e=i(!1);return Xi((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ki(){const e=o()[1],t=Ji();return()=>{t.current&&e(Math.random())}}var eo=e=>c(e,to),to=[];function no(e){const t=i();return c((()=>{t.current=e})),t.current}var ro=Symbol.for("Animated:node"),io=e=>e&&e[ro],oo=(e,t)=>{return n=e,r=ro,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ao=e=>e&&e[ro]&&e[ro].getPayload(),so=class{constructor(){oo(this,this)}getPayload(){return this.payload||[]}},lo=class extends so{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Mr.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new lo(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Mr.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Mr.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},uo=class extends lo{constructor(e){super(0),this._string=null,this._toString=yi({output:[e,e]})}static create(e){return new uo(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Mr.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=yi({output:[this.getValue(),e]})),this._value=0,super.reset()}},co={dependencies:null},ho=class extends so{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Hr(this.source,((n,r)=>{var i;(i=n)&&i[ro]===i?t[r]=n.getValue(e):_i(n)?t[r]=ki(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ar(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Hr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){co.dependencies&&_i(e)&&co.dependencies.add(e);const t=ao(e);t&&Ar(t,(e=>this.add(e)))}},fo=class extends ho{constructor(e){super(e)}static create(e){return new fo(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(po)),!0)}};function po(e){return(Gi(e)?uo:lo).create(e)}function go(e){const t=io(e);return t?t.constructor:Mr.arr(e)?fo:Gi(e)?uo:lo}var mo=(e,t)=>{const r=!Mr.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((o,a)=>{const s=i(null),l=r&&f((e=>{s.current=function(e,t){e&&(Mr.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[u,d]=function(e,t){const n=new Set;co.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new ho(e),co.dependencies=null,[e,n]}(o,t),h=Ki(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new yo(p,d),m=i();Xi((()=>(m.current=g,Ar(d,(e=>Hi(e,g))),()=>{m.current&&(Ar(m.current.deps,(e=>Ci(e,m.current))),hr.cancel(m.current.update))}))),c(p,[]),eo((()=>()=>{const e=m.current;Ar(e.deps,(t=>Ci(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,{...y,ref:l})}))},yo=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&hr.write(this.update)}};var vo=Symbol.for("AnimatedComponent"),bo=e=>Mr.str(e)?e:e&&Mr.str(e.displayName)?e.displayName:Mr.fun(e)&&e.name||null;function wo(e,...t){return Mr.fun(e)?e(...t):e}var $o=(e,t)=>!0===e||!!(t&&e&&(Mr.fun(e)?e(t):Cr(e).includes(t))),So=(e,t)=>Mr.obj(e)?t&&e[t]:e,Fo=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,xo=e=>e,Do=(e,t=xo)=>{let n=Bo;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Mr.und(n)||(r[i]=n)}return r},Bo=["config","onProps","onStart","onChange","onPause","onResume","onRest"],_o={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function ko(e){const t=function(e){const t={};let n=0;if(Hr(e,((e,r)=>{_o[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Hr(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function Oo(e){return e=ki(e),Mr.arr(e)?e.map(Oo):Gi(e)?cr.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Mo(e){return Mr.fun(e)||Mr.arr(e)&&Mr.obj(e[0])}var Eo={tension:170,friction:26,mass:1,damping:1,easing:xi.linear,clamp:!1},Ao=class{constructor(){this.velocity=0,Object.assign(this,Eo)}};function Ho(e,t){if(Mr.und(t.decay)){const n=!Mr.und(t.tension)||!Mr.und(t.friction);!n&&Mr.und(t.frequency)&&Mr.und(t.damping)&&Mr.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var Co=[],Io=class{constructor(){this.changed=!1,this.values=Co,this.toValues=null,this.fromValues=Co,this.config=new Ao,this.immediate=!1}};function Po(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,u,c=$o(n.cancel??r?.cancel,t);if(c)f();else{Mr.und(n.pause)||(i.paused=$o(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||$o(e,t)),l=wo(n.delay||0,t),e?(i.resumeQueue.add(h),o.pause()):(o.resume(),h())}function d(){i.resumeQueue.add(h),i.timeouts.delete(u),u.cancel(),l=u.time-hr.now()}function h(){l>0&&!cr.skipAnimation?(i.delayed=!0,u=hr.setTimeout(f,l),i.pauseQueue.add(d),i.timeouts.add(u)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(d),i.timeouts.delete(u),e<=(i.cancelId||0)&&(c=!0);try{o.start({...n,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var To=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?No(e.get()):t.every((e=>e.noop))?zo(e.get()):jo(e.get(),t.every((e=>e.finished))),zo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),jo=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),No=e=>({value:e,cancelled:!0,finished:!1});function Ro(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=Do(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&No(r)||i!==n.asyncId&&jo(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Lo,a=new Wo;return(async()=>{if(cr.skipAnimation)throw Vo(n),a.result=jo(r,!1),d(a),a;f(o);const s=Mr.obj(e)?{...e}:{...t,to:e};s.parentId=i,Hr(u,((e,t)=>{Mr.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(cr.skipAnimation)return Vo(n),jo(r,!1);try{let t;t=Mr.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=jo(r.get(),!0,!1)}catch(e){if(e instanceof Lo)g=e.result;else{if(!(e instanceof Wo))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Mr.fun(a)&&hr.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Vo(e,t){Ir(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Lo=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Wo=class extends Error{constructor(){super("SkipAnimationSignal")}},Yo=e=>e instanceof qo,Uo=1,qo=class extends Ei{constructor(){super(...arguments),this.id=Uo++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=io(this);return e&&e.getValue()}to(...e){return cr.to(this,e)}interpolate(...e){return Qi(`${Ui}The "interpolate" function is deprecated in v9 (use "to" instead)`),cr.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Mi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Qr.sort(this),Mi(this,{type:"priority",parent:this,priority:e})}},Qo=Symbol.for("SpringPhase"),Zo=e=>(1&e[Qo])>0,Go=e=>(2&e[Qo])>0,Xo=e=>(4&e[Qo])>0,Jo=(e,t)=>t?e[Qo]|=3:e[Qo]&=-3,Ko=(e,t)=>t?e[Qo]|=4:e[Qo]&=-5,ea=class extends qo{constructor(e,t){if(super(),this.animation=new Io,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Mr.und(e)||!Mr.und(t)){const n=Mr.obj(e)?{...e}:{...t,from:e};Mr.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Go(this)||this._state.asyncTo)||Xo(this)}get goal(){return ki(this.animation.to)}get velocity(){const e=io(this);return e instanceof lo?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Zo(this)}get isAnimating(){return Go(this)}get isPaused(){return Xo(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=ao(r.to);!a&&_i(r.to)&&(i=Cr(ki(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==uo?1:a?a[l].lastPosition:i[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=Mr.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const h=o.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(Mr.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||h/10,r=o.clamp?0:o.bounce,l=!Mr.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*r,d=u));a+=(1e-6*-o.tension*(d-u)+.001*-o.friction*a)/o.mass*m,d+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+o.easing(r)*(u-n),a=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,o.round)&&(n=!0)}));const s=io(this),l=s.getValue();if(t){const e=ki(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return hr.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Go(this)){const{to:e,config:t}=this.animation;hr.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Mr.und(e)?(n=this.queue||[],this.queue=[]):n=[Mr.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>To(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Vo(this._state,e&&this._lastCallId),hr.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Mr.obj(n)?n[t]:n,(null==n||Mo(n))&&(n=void 0),r=Mr.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Zo(this)||(e.reverse&&([n,r]=[r,n]),r=ki(r),Mr.und(r)?io(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Do(e,((e,t)=>/^on/.test(t)?So(e,n):e))),sa(this,e,"onProps"),la(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return Po(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Xo(this)||(Ko(this,!0),zr(o.pauseQueue),la(this,"onPause",jo(this,ta(this,this.animation.to)),this))},resume:()=>{Xo(this)&&(Ko(this,!1),Go(this)&&this._resume(),zr(o.resumeQueue),la(this,"onResume",jo(this,ta(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=na(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(No(this));const r=!Mr.und(e.to),i=!Mr.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(No(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!Mr.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Er(d,u);h&&(s.from=d),d=ki(d);const f=!Er(c,l);f&&this._focus(c);const p=Mo(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ho(n={...n},t),t={...n,...t}),Ho(e,t),Object.assign(e,t);for(const t in Eo)null==e[t]&&(e[t]=Eo[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;Mr.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(g,wo(t.config,o),t.config!==a.config?wo(a.config,o):void 0);let v=io(this);if(!v||Mr.und(c))return n(jo(this,!0));const b=Mr.und(t.reset)?i&&!t.default:!Mr.und(d)&&$o(t.reset,o),w=b?d:this.get(),$=Oo(c),S=Mr.num($)||Mr.arr($)||Gi($),F=!p&&(!S||$o(a.immediate||t.immediate,o));if(f){const e=go(c);if(e!==v.constructor){if(!F)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const x=v.constructor;let D=_i(c),B=!1;if(!D){const e=b||!Zo(this)&&h;(f||e)&&(B=Er(Oo(w),$),D=!B),(Er(s.immediate,F)||F)&&Er(g.decay,m)&&Er(g.velocity,y)||(D=!0)}if(B&&Go(this)&&(s.changed&&!b?D=!0:D||this._stop(l)),!p&&((D||_i(l))&&(s.values=v.getPayload(),s.toValues=_i(c)?null:x==uo?[1]:Cr($)),s.immediate!=F&&(s.immediate=F,F||b||this._set(l)),D)){const{onRest:e}=s;Ar(aa,(e=>sa(this,t,e)));const r=jo(this,ta(this,l));zr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&hr.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?wo(a.onRest,r):s.onStart?.(r,this)}))}b&&this._set(w),p?n(Ro(t.to,t,this._state,this)):D?this._start():Go(this)&&!f?this._pendingCalls.add(n):n(zo(w))}_focus(e){const t=this.animation;e!==t.to&&(Oi(this)&&this._detach(),t.to=e,Oi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;_i(t)&&(Hi(t,this),Yo(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;_i(e)&&Ci(e,this)}_set(e,t=!0){const n=ki(e);if(!Mr.und(n)){const e=io(this);if(!e||!Er(n,e.getValue())){const r=go(n);e&&e.constructor==r?e.setValue(n):oo(this,r.create(n)),e&&hr.batchedUpdates((()=>{this._onChange(n,t)}))}}return io(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,la(this,"onStart",jo(this,ta(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),wo(this.animation.onChange,e,this)),wo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;io(this).reset(ki(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Go(this)||(Jo(this,!0),Xo(this)||this._resume())}_resume(){cr.skipAnimation?this.finish():Qr.start(this)}_stop(e,t){if(Go(this)){Jo(this,!1);const n=this.animation;Ar(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Mi(this,{type:"idle",parent:this});const r=t?No(this.get()):jo(this.get(),ta(this,e??n.to));zr(this._pendingCalls,r),n.changed&&(n.changed=!1,la(this,"onRest",r,this))}}};function ta(e,t){const n=Oo(t);return Er(Oo(e.get()),n)}function na(e,t=e.loop,n=e.to){const r=wo(t);if(r){const i=!0!==r&&ko(r),o=(i||e).reverse,a=!i||i.reset;return ra({...e,loop:t,default:!1,pause:void 0,to:!o||Mo(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function ra(e){const{to:t,from:n}=e=ko(e),r=new Set;return Mr.obj(t)&&oa(t,r),Mr.obj(n)&&oa(n,r),e.keys=r.size?Array.from(r):null,e}function ia(e){const t=ra(e);return Mr.und(t.default)&&(t.default=Do(t)),t}function oa(e,t){Hr(e,((e,n)=>null!=e&&t.add(n)))}var aa=["onStart","onRest","onChange","onPause","onResume"];function sa(e,t,n){e.animation[n]=t[n]!==Fo(t,n)?So(t[n],e.key):void 0}function la(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var ua=["onStart","onChange","onRest"],ca=1,da=class{constructor(e,t){this.id=ca++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Mr.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(ra(e)),this}start(e){let{queue:t}=this;return e?t=Cr(e).map(ra):this.queue=[],this._flush?this._flush(this,t):(va(this,t),ha(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Ar(Cr(t),(t=>n[t].stop(!!e)))}else Vo(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Mr.und(e))this.start({pause:!0});else{const t=this.springs;Ar(Cr(e),(e=>t[e].pause()))}return this}resume(e){if(Mr.und(e))this.start({pause:!1});else{const t=this.springs;Ar(Cr(e),(e=>t[e].resume()))}return this}each(e){Hr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ir(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ir(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ir(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}hr.onFrame(this._onFrame)}};function ha(e,t){return Promise.all(t.map((t=>fa(e,t)))).then((t=>To(e,t)))}async function fa(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Mr.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Mr.arr(i)||Mr.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Ar(ua,(n=>{const r=t[n];if(Mr.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,zr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Fo(t,"cancel");(c||f&&d.asyncId)&&h.push(Po(++e._lastAsyncId,{props:t,state:d,actions:{pause:Or,resume:Or,start(t,n){f?(Vo(d,e._lastAsyncId),n(No(e))):(t.onRest=s,n(Ro(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=To(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=na(t,a,i);if(n)return va(e,[n]),fa(e,n,!0)}return l&&hr.batchedUpdates((()=>l(p,e,e.item))),p}function pa(e,t){const n={...e.springs};return t&&Ar(Cr(t),(e=>{Mr.und(e.keys)&&(e=ra(e)),Mr.obj(e.to)||(e={...e,to:void 0}),ya(n,e,(e=>ma(e)))})),ga(e,n),n}function ga(e,t){Hr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Hi(t,e))}))}function ma(e,t){const n=new ea;return n.key=e,t&&Hi(n,t),n}function ya(e,t,n){t.keys&&Ar(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function va(e,t){Ar(t,(t=>{ya(e.springs,t,(t=>ma(t,e)))}))}var ba,wa,$a=({children:e,...t})=>{const r=p(Sa),a=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=i(),a=r.current;let s=a;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return c((()=>{r.current=s,a==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:a,immediate:s})),[a,s]);const{Provider:l}=Sa;return n.createElement(l,{value:t},e)},Sa=(ba=$a,wa={},Object.assign(ba,n.createContext(wa)),ba.Provider._context=ba,ba.Consumer._context=ba,ba);$a.Provider=Sa.Provider,$a.Consumer=Sa.Consumer;var Fa=()=>{const e=[],t=function(t){Zi(`${Ui}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Ar(e,((e,i)=>{if(Mr.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Ar(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ar(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ar(e,((e,n)=>{const r=Mr.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return Ar(e,((e,r)=>{if(Mr.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Ar(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ar(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Mr.fun(e)?e(n,t):e};return t._getProps=n,t};function xa(e,t){const n=Mr.fun(e),[[r],o]=function(e,t,n){const r=Mr.fun(t)&&t;r&&!n&&(n=[]);const o=g((()=>r||3==arguments.length?Fa():void 0),[]),a=i(0),s=Ki(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=pa(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ha(e,t):new Promise((r=>{ga(e,n),l.queue.push((()=>{r(ha(e,t))})),s()}))}})),[]),u=i([...l.ctrls]),c=[],d=no(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new da(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=ia(n))}}g((()=>{Ar(u.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),u.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=u.current.map(((e,t)=>pa(e,c[t]))),m=p($a),y=no(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Xi((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],Ar(e,(e=>e()))),Ar(u.current,((e,t)=>{o?.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),eo((()=>()=>{Ar(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>({...e})));return o?[b,o]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}var Da=class extends qo{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=yi(...t);const n=this._get(),r=go(n);oo(this,r.create(n))}advance(e){const t=this._get();Er(t,this.get())||(io(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&_a(this._active)&&ka(this)}_get(){const e=Mr.arr(this.source)?this.source.map(ki):Cr(ki(this.source));return this.calc(...e)}_start(){this.idle&&!_a(this._active)&&(this.idle=!1,Ar(ao(this),(e=>{e.done=!1})),cr.skipAnimation?(hr.batchedUpdates((()=>this.advance())),ka(this)):Qr.start(this))}_attach(){let e=1;Ar(Cr(this.source),(t=>{_i(t)&&Hi(t,this),Yo(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ar(Cr(this.source),(e=>{_i(e)&&Ci(e,this)})),this._active.clear(),ka(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Cr(this.source).reduce(((e,t)=>Math.max(e,(Yo(t)?t.priority:0)+1)),0))}};function Ba(e){return!1!==e.idle}function _a(e){return!e.size||Array.from(e).every(Ba)}function ka(e){e.idle||(e.idle=!0,Ar(ao(e),(e=>{e.done=!0})),Mi(e,{type:"idle",parent:e}))}cr.assign({createStringInterpolator:Yi,to:(e,t)=>new Da(e,t)});var Oa=/^--/;function Ma(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Oa.test(e)||Aa.hasOwnProperty(e)&&Aa[e]?(""+t).trim():t+"px"}var Ea={};var Aa={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ha=["Webkit","Ms","Moz","O"];Aa=Object.keys(Aa).reduce(((e,t)=>(Ha.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Aa);var Ca=/^(matrix|translate|scale|rotate|skew)/,Ia=/^(translate)/,Pa=/^(rotate|skew)/,Ta=(e,t)=>Mr.num(e)&&0!==e?e+t:e,za=(e,t)=>Mr.arr(e)?e.every((e=>za(e,t))):Mr.num(e)?e===t:parseFloat(e)===t,ja=class extends ho{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>Ta(e,"px"))).join(",")})`,za(e,0)]))),Hr(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(Ca.test(t)){if(delete r[t],Mr.und(e))return;const n=Ia.test(t)?"px":Pa.test(t)?"deg":"";i.push(Cr(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Ta(i,n)})`,za(i,0)]:e=>[`${t}(${e.map((e=>Ta(e,n))).join(",")})`,za(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Na(i,o)),super(r)}},Na=class extends Ei{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ar(this.inputs,((n,r)=>{const i=ki(n[0]),[o,a]=this.transforms[r](Mr.arr(i)?i:n.map(ki));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ar(this.inputs,(e=>Ar(e,(e=>_i(e)&&Hi(e,this)))))}observerRemoved(e){0==e&&Ar(this.inputs,(e=>Ar(e,(e=>_i(e)&&Ci(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Mi(this,e)}};cr.assign({batchedUpdates:F,createStringInterpolator:Yi,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ra,Va,La,Wa=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new ho(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=bo(e)||"Anonymous";return(e=Mr.str(e)?o[e]||(o[e]=mo(e,i)):e[vo]||(e[vo]=mo(e,i))).displayName=`Animated(${t})`,e};return Hr(e,((t,n)=>{Mr.arr(e)&&(n=bo(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,u=Object.values(l),c=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:Ea[t]||(Ea[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=Ma(t,r[t]);Oa.test(t)?e.style.setProperty(t,n):e.style[t]=n}c.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ja(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ya=Wa.animated;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Ra||(Ra={})),function(e){e.AM="AM",e.PM="PM"}(Va||(Va={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Va.AM};if(!t)return n;try{if("24hr"===e){const r=Qa(t,e);n.minute=Ra.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Va.AM,n.hour=0===i?"12":Ra.padValue(i.toString())):(n.period=Va.PM,n.hour=12===i?i.toString():Ra.padValue((i-12).toString()))}else{const r=Qa(t,e);n.hour=Ra.padValue(r.hour),n.minute=Ra.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Va.AM:Va.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Ra.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Ra.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Ra.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Ra.padValue(r.toString()):13===r?Ra.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Va.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Ra.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=Qa(e,t),r=Ra.padValue(n.hour);let i=`${r}:${Ra.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(La||(La={}));const Ua=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},qa=e=>{const t=parseInt(e);return t>=0&&t<=59},Qa=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!Ua(n[0],t)||!qa(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Ua(n[0],t)||!qa(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},Za={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ga=e=>Object.keys(Za).reduce(((t,n)=>{const r=Za[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Xa=Ga("max-width"),Ja=(Ga("min-width"),m.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),Ka=v`
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
    animation: ${Ka} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ts=m(es)`
    animation-delay: -0.45s;
`,ns=m(es)`
    animation-delay: -0.3s;
`,rs=m(es)`
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

                    span {
                        color: ${e.$buttonIsDanger?Zt.Button.Danger.Primary:Ut.Primary};
                    }
                `;case"light":return y`
                    background-color: ${Ut.Neutral[8]};
                    border: 1px solid ${Ut.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Zt.Button.Danger.Primary:Ut.Primary};
                    }
                `;case"disabled":return y`
                    background-color: ${Ut.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ut.Neutral[3]};
                    }
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
                        span {
                            color: ${e.$buttonIsDanger?Zt.Button.Danger.Hover:Ut.Secondary};
                        }
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Zt.Button.Danger.BackgroundColor:Ut.Primary};
                    border: 1px solid transparent;

                    ${Xa.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ut.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    span {
                        ${an("H5","semibold")}
                    }

                    ${Xa.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    span {
                        ${an("H4","semibold")}
                    }

                    ${Xa.mobileS} {
                        height: auto;
                    }
                `}
`,os=m((({color:n,className:r,size:i=18})=>e(Ja,Object.assign({className:r,$size:i,$color:n},{children:[t(es,{id:"inner1",$size:i-2,$borderWidth:2,$color:n}),t(ts,{id:"inner2",$size:i-2,$borderWidth:2,$color:n}),t(ns,{id:"inner3",$size:i-2,$borderWidth:2,$color:n}),t(rs,{id:"inner4",$size:i-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Zt.Button.Danger.Primary:Ut.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ut.Neutral[3](e);break;default:t=Ut.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,as={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,u=M(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(is,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:o},c,u,{children:[a&&t(os,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,u=M(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(is,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:o},c,u,{children:[a&&t(os,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},ss=m.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;
    isolation: isolate;

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
`,ls=m.input`
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
`,us=m.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
`,cs=m.label`
    ${e=>e.$selected&&!e.$indicator?y`
                ${an("H4","semibold")}
            `:y`
                ${an("H4","regular")}
            `}

    color: ${Ut.Neutral[1]};

    ${e=>e.$disabled?y`
                color: ${Ut.Neutral[3]};
            `:e.$selected?y`
                color: ${Ut.Primary};
            `:void 0}
`,ds=m.div`
    ${an("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${on("BodySmall","semibold")}
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
`,fs=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?k:_,{});break;case"radio":o=t(n?D:x,{});break;case"tick":o=t(O,{});break;case"cross":o=t(B,{});break;default:o=null}return t(hs,Object.assign({className:i,$active:n,disabled:r},{children:o}))};var ps={exports:{}};ps.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(r),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var gs,ms,ys=A(ps.exports),vs={exports:{}},bs=A(vs.exports=(gs={year:0,month:1,day:2,hour:3,minute:4,second:5},ms={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=ms[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),ms[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,u=s.value,c=gs[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),ws={exports:{}};ws.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof D},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},F=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},x=v;x.l=S,x.i=$,x.w=function(e,t){return F(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=F(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return F(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<F(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,c=x.p(e),f=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=x.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=x.p(c),g=function(e){var t=F(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return x.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:x.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:x.s(a,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=x.p(h),m=F(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=x.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:x.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=D.prototype;return F.prototype=B,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),F.extend=function(e,t){return e.$i||(e(t,D,F),e.$i=!0),F},F.locale=S,F.isDayjs=$,F.unix=function(e){return F(1e3*e)},F.en=w[b],F.Ls=w,F.p={},F}();var $s=A(ws.exports),Ss={exports:{}};Ss.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Fs=A(Ss.exports),xs={exports:{}};xs.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ds=A(xs.exports),Bs={exports:{}};Bs.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var _s,ks=A(Bs.exports);$s.extend(Fs),$s.extend(Ds),$s.extend(ks),$s.extend(ys),$s.extend(bs),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=$s(t).startOf("week");return Os(n).map((e=>Ms(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ms(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push($s(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+$s(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=$s(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?$s(r):void 0,i?$s(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(_s||(_s={}));const Os=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ms=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Es=[1,3,5,7,8,10,12],As=[4,6,9,11];var Hs,Cs,Is;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Es.includes(o)?Math.min(i,31).toString():As.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=$s(e,n);return $s(t,n).diff(r,"minute")},e.toDayjs=e=>e?$s(e):$s(),e.addMinutesToTime=(e,t,n="HH:mm")=>$s(e,n).add(t,"minutes").format(n)}(Hs||(Hs={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!$s(e).isBefore(r,"day"))||!(!i||!$s(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if($s(e).isValid())return e}return""}}(Cs||(Cs={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Is||(Is={}));const Ps=(e,t,n="window",r)=>{const o=i();c((()=>{o.current=t}),[t]),c((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const i=e=>o.current(e);return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}),[e,n])},Ts=m.button`
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
`,zs=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=M(e,["children","focusHighlight","focusOutline","type"]);return t(Ts,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),js=m(Ya.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Ut.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Xa.mobileS} {
        max-width: 100%;
    }
`,Ns=m.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,Rs=m.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Xa.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Vs=m.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${Xa.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Ls=m.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Xa.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Ws=m.div`
    display: flex;
    gap: 0.5rem;

    ${Xa.tablet} {
        flex-direction: column;
    }

    ${Xa.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Ys=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Xa.mobileS} {
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
`,qs=m(ln.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${Xa.tablet} {
        margin: 0;
    }

    ${Xa.mobileS} {
        margin: 0 0.25rem;
    }
`,Qs=m(pn)`
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

    ${Xa.mobileS} {
        width: 100%;
    }
`,Zs=m((({type:n="checkbox",indicator:r,checked:a,styleType:s="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=o(a),[w]=o(Is.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=i();c((()=>{b(a)}),[a]);return e(ss,Object.assign({$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:r,id:p,"data-testid":m},{children:[r&&(()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(fs,{type:e,active:v,disabled:d})})(),t(ls,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(us,{children:[t(cs,Object.assign({htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let e;return"string"==typeof u?e=u:"function"==typeof u&&(e=u()),t(ds,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:v},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,Gs=m(as.Small)`
    width: 7rem;

    ${Xa.mobileL} {
        flex: 1;
    }

    ${Xa.mobileS} {
        width: 100%;
    }
`;var Xs,Js,Ks;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Xs||(Xs={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Js||(Js={})),function(e){e.AM="am",e.PM="pm"}(Ks||(Ks={}));const el=({id:n,value:r,show:a,format:s,onChange:l,onCancel:u})=>{const d=La.getTimeValues(s,r),[h,p]=o(d.hour),[g,m]=o(d.minute),[y,v]=o(d.period),b=i(),S=i(),F=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,l=e.refreshOptions,u=e.handleWidth,c=void 0===u||u,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=i(n),y=i(null),v=null!=f?f:y,b=i(),w=o({width:void 0,height:void 0}),$=w[0],S=w[1];return lr((function(){if(!or()){var e=sr(g,S,c,h);b.current=rr((function(t){(c||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!or()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,c,h,g,p,v.current]),mn({ref:v},$)}();c((()=>{if(a&&b.current&&b.current.focus(),a){const{hour:e,minute:t,period:n}=La.getTimeValues(s,r);p(e),m(t),v(n)}}),[a,r,s]),c((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},D=f((e=>{switch(e.currentTarget.name){case Xs.MINUTE_UP:m(La.updateMinutes(g,"add"));break;case Xs.MINUTE_DOWN:m(La.updateMinutes(g,"minus"));break;case Xs.HOUR_UP:p(La.updateHours(h,"add"));break;case Xs.HOUR_DOWN:p(La.updateHours(h,"minus"))}}),[h,g]),B=e=>{e.target.select()},_=e=>{const t=e.target.value;switch(e.target.name){case Js.HOUR:t.length<=2&&p(t);break;case Js.MINUTE:t.length<=2&&m(t)}},k=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Js.HOUR:{const n=t>23||t<0?d.hour:La.convertHourTo12HourFormat(e.target.value);p(n);break}case Js.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(Ra.padValue(n));break}}},O=e=>{switch(e.target.name){case Ks.AM:v(Va.AM);break;case Ks.PM:v(Va.PM)}},M=e=>n?`${n}-${e}`:e,E=xa({height:a?F.height+32:0});return t(js,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(Ns,Object.assign({ref:F.ref,"data-testid":M("timepicker-dropdown"),inert:a?void 0:""},{children:[e(Rs,{children:[e(Ls,{children:[e(Ys,{children:[t(Us,Object.assign({"aria-label":"increase hour",name:Xs.HOUR_UP,tabIndex:-1,onClick:D,"data-testid":M("hour-increment-button")},{children:t($,{})})),t(Qs,{"aria-label":"hour",type:"number",name:Js.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:B,onChange:_,onBlur:k,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Us,Object.assign({"aria-label":"decrease hour",name:Xs.HOUR_DOWN,tabIndex:-1,onClick:D,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(qs,{children:":"}),e(Ys,{children:[t(Us,Object.assign({"aria-label":"increase minute",name:Xs.MINUTE_UP,tabIndex:-1,onClick:D,"data-testid":M("minute-increment-button")},{children:t($,{})})),t(Qs,{"aria-label":"minute",type:"number",name:Js.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:_,onBlur:k,onFocus:B,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Us,Object.assign({"aria-label":"decrease minute",name:Xs.MINUTE_DOWN,tabIndex:-1,onClick:D,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Ws,{children:[t(Zs,Object.assign({checked:y===Va.AM,name:Ks.AM,type:"radio",onChange:O,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(Zs,Object.assign({checked:y===Va.PM,name:Ks.PM,type:"radio",onChange:O,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Vs,{children:[t(Gs,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":M("cancel-button")},{children:"Cancel"})),t(Gs,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?La.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))};m.div`
    position: relative;
`;const tl=m(pn)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,nl=n=>{var{id:r,disabled:a=!1,readOnly:s=!1,error:l,value:u,placeholder:c,format:d="24hr",onChange:h,onFocus:p,onBlur:g}=n,m=M(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[y,v]=o(!1),b=i();Ps("mousedown",(function(e){a||s||S(e)}),"document"),Ps("keyup",(function(e){if("Tab"===e.code)S(e)}),"document");const w=()=>{a||s||y||(v(!0),p&&p())};const $=()=>{v(!1),g&&g()},S=e=>{b&&!b.current.contains(e.target)&&y&&$()},F=f((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,c]);return e(fn,Object.assign({ref:b,id:r,$readOnly:s,$disabled:a,$error:l},m,{children:[t(tl,{onFocus:w,focused:y,readOnly:!0,placeholder:c||F(),value:La.formatDisplayValue(u,d),disabled:a,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),t(el,{id:r,show:y,value:u,format:d,onCancel:()=>{$()},onChange:e=>{h&&h(e),$()}})]}))};export{nl as Timepicker};
//# sourceMappingURL=index.js.map
