import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useLayoutEffect as i,useEffect as a,useRef as l,useState as s,useCallback as c,useMemo as d,useImperativeHandle as u}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import h,{css as p,keyframes as g}from"styled-components";import{ExternalIcon as m}from"@lifesg/react-icons/external";import*as y from"react-dom";import{createPortal as v}from"react-dom";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as D}from"@lifesg/react-icons/chevron-right";function w(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S=Array.isArray,F="object"==typeof x&&x&&x.Object===Object&&x,E="object"==typeof self&&self&&self.Object===Object&&self,B=F||E||Function("return this")(),k=B.Symbol,A=k,O=Object.prototype,R=O.hasOwnProperty,C=O.toString,M=A?A.toStringTag:void 0;var L=function(e){var t=R.call(e,M),n=e[M];try{e[M]=void 0;var r=!0}catch(e){}var o=C.call(e);return r&&(t?e[M]=n:delete e[M]),o},H=Object.prototype.toString;var T=L,N=function(e){return H.call(e)},I=k?k.toStringTag:void 0;var Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?T(e):N(e)};var j=Y,P=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==j(e)},W=S,_=z,V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/;var Z=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(U.test(e)||!V.test(e)||null!=t&&e in Object(t))};var K=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},X=Y,q=K;var G,J=function(e){if(!q(e))return!1;var t=X(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Q=B["__core-js_shared__"],ee=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var te=function(e){return!!ee&&ee in e},ne=Function.prototype.toString;var re=J,oe=te,ie=K,ae=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},le=/^\[object .+?Constructor\]$/,se=Function.prototype,ce=Object.prototype,de=se.toString,ue=ce.hasOwnProperty,fe=RegExp("^"+de.call(ue).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var he=function(e){return!(!ie(e)||oe(e))&&(re(e)?fe:le).test(ae(e))},pe=function(e,t){return null==e?void 0:e[t]};var ge=function(e,t){var n=pe(e,t);return he(n)?n:void 0},me=ge(Object,"create"),ye=me;var ve=function(){this.__data__=ye?ye(null):{},this.size=0};var be=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},De=me,we=Object.prototype.hasOwnProperty;var xe=function(e){var t=this.__data__;if(De){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return we.call(t,e)?t[e]:void 0},$e=me,Se=Object.prototype.hasOwnProperty;var Fe=me;var Ee=ve,Be=be,ke=xe,Ae=function(e){var t=this.__data__;return $e?void 0!==t[e]:Se.call(t,e)},Oe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Re.prototype.clear=Ee,Re.prototype.delete=Be,Re.prototype.get=ke,Re.prototype.has=Ae,Re.prototype.set=Oe;var Ce=Re;var Me=function(){this.__data__=[],this.size=0};var Le=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(Le(e[n][0],t))return n;return-1},Te=He,Ne=Array.prototype.splice;var Ie=function(e){var t=this.__data__,n=Te(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ne.call(t,n,1),--this.size,!0)},Ye=He;var je=function(e){var t=this.__data__,n=Ye(t,e);return n<0?void 0:t[n][1]},Pe=He;var ze=He;var We=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},_e=Me,Ve=Ie,Ue=je,Ze=function(e){return Pe(this.__data__,e)>-1},Ke=We;function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=_e,Xe.prototype.delete=Ve,Xe.prototype.get=Ue,Xe.prototype.has=Ze,Xe.prototype.set=Ke;var qe=Xe,Ge=ge(B,"Map"),Je=Ce,Qe=qe,et=Ge;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var ot=nt;var it=nt;var at=nt;var lt=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},st=function(){this.size=0,this.__data__={hash:new Je,map:new(et||Qe),string:new Je}},ct=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},dt=function(e){return ot(this,e).get(e)},ut=function(e){return it(this,e).has(e)},ft=lt;function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=ct,ht.prototype.get=dt,ht.prototype.has=ut,ht.prototype.set=ft;var pt=ht;function gt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(gt.Cache||pt),n}gt.Cache=pt;var mt=gt;var yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vt=/\\(\\)?/g,bt=function(e){var t=mt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(yt,(function(e,n,r,o){t.push(r?o.replace(vt,"$1"):n||e)})),t}));var Dt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},wt=Dt,xt=S,$t=z,St=k?k.prototype:void 0,Ft=St?St.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(xt(t))return wt(t,e)+"";if($t(t))return Ft?Ft.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Bt=Et;var kt=S,At=Z,Ot=bt,Rt=function(e){return null==e?"":Bt(e)};var Ct=z;var Mt=function(e,t){return kt(e)?e:At(e,t)?[e]:Ot(Rt(e))},Lt=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ht=function(e,t){for(var n=0,r=(t=Mt(t,e)).length;null!=e&&n<r;)e=e[Lt(t[n++])];return n&&n==r?e:void 0},Tt=Ht;var Nt=$((function(e,t,n){var r=null==e?void 0:Tt(e,t);return void 0===r?n:r}));const It=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,Yt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var jt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(jt||(jt={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=Yt(Pt,n[jt.colorScheme]);return n.options&&n.options.color?It(r,e,n.options.color):It(r,e)},Wt={Brand:{1:zt("Brand.1"),2:zt("Brand.2"),3:zt("Brand.3"),4:zt("Brand.4"),5:zt("Brand.5"),6:zt("Brand.6")},Primary:zt("Primary"),PrimaryDark:zt("PrimaryDark"),Secondary:zt("Secondary"),Accent:{Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Neutral:{1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Validation:{Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")},Blue:{Text:zt("Validation.Blue.Text"),Icon:zt("Validation.Blue.Icon"),Border:zt("Validation.Blue.Border"),Background:zt("Validation.Blue.Background")}},Shadow:{Accent:zt("Shadow.Accent"),Red:zt("Shadow.Red"),Elevation:zt("Shadow.Elevation")}},_t={collections:{base:{InputBoxShadow:p`
        inset 0 0 4px 0px ${Wt.Shadow.Accent}
    `,InputErrorBoxShadow:p`
        inset 0 0 4px 0px ${Wt.Shadow.Red}
    `,ElevationBoxShadow:p`
      0px 2px 8px ${Wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:p`
        inset 0 0 3px 0px ${Wt.Shadow.Accent}
    `,InputErrorBoxShadow:p`
        inset 0 0 3px 0px ${Wt.Shadow.Red}
    `,ElevationBoxShadow:p`
      0px 2px 8px ${Wt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Vt=e=>t=>{var n;const r=t.theme,o=Yt(_t,r[jt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?It(o,e,r.options.designToken):It(o,e)},Ut={InputBoxShadow:Vt("InputBoxShadow"),InputErrorBoxShadow:Vt("InputErrorBoxShadow"),ElevationBoxShadow:Vt("ElevationBoxShadow"),Table:{Header:Vt("Table.Header"),Cell:{Primary:Vt("Table.Cell.Primary"),Secondary:Vt("Table.Cell.Secondary"),Selected:Vt("Table.Cell.Selected"),Hover:Vt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Vt("Button.Danger.BackgroundColor"),Hover:Vt("Button.Danger.Hover"),Primary:Vt("Button.Danger.Primary"),Border:Vt("Button.Danger.Border")}}},Zt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Kt={collections:{base:{D1:{fontFamily:Zt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Zt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Zt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Zt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Zt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Zt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Zt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Zt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Zt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Zt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=Yt(Kt,n[jt.textStyleScheme]);return n.options&&n.options.textStyle?It(r,e,n.options.textStyle):It(r,e)},qt={D1:{fontFamily:Xt("D1.fontFamily"),fontSize:Xt("D1.fontSize"),fontWeight:Xt("D1.fontWeight"),lineHeight:Xt("D1.lineHeight"),letterSpacing:Xt("D1.letterSpacing")},D2:{fontFamily:Xt("D2.fontFamily"),fontSize:Xt("D2.fontSize"),fontWeight:Xt("D2.fontWeight"),lineHeight:Xt("D2.lineHeight"),letterSpacing:Xt("D2.letterSpacing")},D3:{fontFamily:Xt("D3.fontFamily"),fontSize:Xt("D3.fontSize"),fontWeight:Xt("D3.fontWeight"),lineHeight:Xt("D3.lineHeight"),letterSpacing:Xt("D3.letterSpacing")},D4:{fontFamily:Xt("D4.fontFamily"),fontSize:Xt("D4.fontSize"),fontWeight:Xt("D4.fontWeight"),lineHeight:Xt("D4.lineHeight"),letterSpacing:Xt("D4.letterSpacing")},DBody:{fontFamily:Xt("DBody.fontFamily"),fontSize:Xt("DBody.fontSize"),fontWeight:Xt("DBody.fontWeight"),lineHeight:Xt("DBody.lineHeight"),letterSpacing:Xt("DBody.letterSpacing")},H1:{fontFamily:Xt("H1.fontFamily"),fontSize:Xt("H1.fontSize"),fontWeight:Xt("H1.fontWeight"),lineHeight:Xt("H1.lineHeight"),letterSpacing:Xt("H1.letterSpacing")},H2:{fontFamily:Xt("H2.fontFamily"),fontSize:Xt("H2.fontSize"),fontWeight:Xt("H2.fontWeight"),lineHeight:Xt("H2.lineHeight"),letterSpacing:Xt("H2.letterSpacing")},H3:{fontFamily:Xt("H3.fontFamily"),fontSize:Xt("H3.fontSize"),fontWeight:Xt("H3.fontWeight"),lineHeight:Xt("H3.lineHeight"),letterSpacing:Xt("H3.letterSpacing")},H4:{fontFamily:Xt("H4.fontFamily"),fontSize:Xt("H4.fontSize"),fontWeight:Xt("H4.fontWeight"),lineHeight:Xt("H4.lineHeight"),letterSpacing:Xt("H4.letterSpacing")},H5:{fontFamily:Xt("H5.fontFamily"),fontSize:Xt("H5.fontSize"),fontWeight:Xt("H5.fontWeight"),lineHeight:Xt("H5.lineHeight"),letterSpacing:Xt("H5.letterSpacing")},H6:{fontFamily:Xt("H6.fontFamily"),fontSize:Xt("H6.fontSize"),fontWeight:Xt("H6.fontWeight"),lineHeight:Xt("H6.lineHeight"),letterSpacing:Xt("H6.letterSpacing")},Body:{fontFamily:Xt("Body.fontFamily"),fontSize:Xt("Body.fontSize"),fontWeight:Xt("Body.fontWeight"),lineHeight:Xt("Body.lineHeight"),letterSpacing:Xt("Body.letterSpacing")},BodySmall:{fontFamily:Xt("BodySmall.fontFamily"),fontSize:Xt("BodySmall.fontSize"),fontWeight:Xt("BodySmall.fontWeight"),lineHeight:Xt("BodySmall.lineHeight"),letterSpacing:Xt("BodySmall.letterSpacing")},XSmall:{fontFamily:Xt("XSmall.fontFamily"),fontSize:Xt("XSmall.fontSize"),fontWeight:Xt("XSmall.fontWeight"),lineHeight:Xt("XSmall.lineHeight"),letterSpacing:Xt("XSmall.letterSpacing")}},Gt=e=>{switch(e){case 700:case"bold":return Zt.Bold;case 600:case"semibold":return Zt.Semibold;case 300:case"light":return Zt.Light;case 400:case"regular":return Zt.Regular;default:return""}},Jt=(e,t)=>n=>{var r;const o=qt[e].fontFamily(n),i=qt[e].fontWeight(n);return Object.values(Zt).includes(o)?p`
                font-family: ${Gt(t)||Gt(i)||o};
                font-weight: normal !important;
            `:p`
            font-family: ${o};
            font-weight: ${null!==(r=Qt(t)||i)&&void 0!==r?r:"normal"};
        `},Qt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},en=e=>{if(e>0)return p`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},tn=(e,t,n=!1)=>r=>{const o=qt[e],i=o.fontSize(r);return p`
            ${Jt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${p`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},nn=(e=!1,t=!1,n=void 0)=>t?p`
            display: block;
            ${en(n)}
        `:e?p`
            display: inline;
        `:p`
            display: block;
            ${en(n)}
        `;var rn;!function(e){e.D1=h.h1`
        ${e=>p`
                ${tn("D1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=h.h1`
        ${e=>p`
                ${tn("D2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=h.h1`
        ${e=>p`
                ${tn("D3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=h.h1`
        ${e=>p`
                ${tn("D4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=h.h1`
        ${e=>p`
                ${tn("DBody",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=h.h1`
        ${e=>p`
                ${tn("H1",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=h.h2`
        ${e=>p`
                ${tn("H2",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=h.h3`
        ${e=>p`
                ${tn("H3",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=h.h4`
        ${e=>p`
                ${tn("H4",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=h.h5`
        ${e=>p`
                ${tn("H5",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=h.h6`
        ${e=>p`
                ${tn("H6",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=h.p`
        ${e=>p`
                ${tn("Body",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=h.p`
        ${e=>p`
                ${tn("BodySmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=h.span`
        ${e=>p`
                ${tn("XSmall",e.weight,e.paragraph)}
                color: ${Wt.Neutral[1]};
                ${nn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>ln(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>ln(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(rn||(rn={}));const on=h.a`
    ${e=>p`
            ${tn(e.textStyle,e.weight)}
            color: ${Wt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Wt.Secondary};

                svg {
                    color: ${Wt.Secondary};
                }
            }
        `}
`,an=h(m)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ln=n=>{var{external:r=!1,children:o}=n,i=w(n,["external","children"]);return e(on,Object.assign({},i,{children:[o,r&&t(an,{})]}))};var sn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(sn||(sn={}));const cn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)";h.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;
`;const dn=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Wt.Accent.Light[3]};
    }
`,un=h.button`
    ${dn}
    cursor: pointer;
`;h.div`
    ${dn}
`;const fn=g`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`;h.div`
    position: relative;
    border: 1px solid ${Wt.Neutral[5]};
    border-radius: ${"4px"};
    background: ${Wt.Neutral[8]};

    :focus-within {
        border: 1px solid ${Wt.Accent.Light[1]};
        box-shadow: ${Ut.InputBoxShadow};
    }

    ${e=>e.expanded?p`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:p`
                animation: ${fn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${Wt.Neutral[6](e)};

                ${un} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Wt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${un} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?p`
                border: 1px solid ${Wt.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Wt.Validation.Red.Border(e)};
                    box-shadow: ${Ut.InputErrorBoxShadow};
                }
            `:void 0}
`,h.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${cn};
    margin-left: 1rem;
`,h(f)`
    color: ${Wt.Neutral[3]};
    height: ${qt.Body.fontSize}rem;
    width: ${qt.Body.fontSize}rem;
`,h.div`
    height: 1px;
    background: ${Wt.Neutral[5]};
    margin: 0 0.5rem;
`,h.div`
    display: flex;
    flex: 1;
`;const hn=h(rn.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return p`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;function pn(e){return yn(e)?(e.nodeName||"").toLowerCase():"#document"}function gn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function mn(e){var t;return null==(t=(yn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function yn(e){return e instanceof Node||e instanceof gn(e).Node}function vn(e){return e instanceof Element||e instanceof gn(e).Element}function bn(e){return e instanceof HTMLElement||e instanceof gn(e).HTMLElement}function Dn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof gn(e).ShadowRoot)}function wn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=En(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function xn(e){return["table","td","th"].includes(pn(e))}function $n(e){const t=Sn(),n=En(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Sn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Fn(e){return["html","body","#document"].includes(pn(e))}function En(e){return gn(e).getComputedStyle(e)}function Bn(e){return vn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function kn(e){if("html"===pn(e))return e;const t=e.assignedSlot||e.parentNode||Dn(e)&&e.host||mn(e);return Dn(t)?t.host:t}function An(e){const t=kn(e);return Fn(t)?e.ownerDocument?e.ownerDocument.body:e.body:bn(t)&&wn(t)?t:An(t)}function On(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=An(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=gn(o);return i?t.concat(a,a.visualViewport||[],wn(o)?o:[],a.frameElement&&n?On(a.frameElement):[]):t.concat(o,On(o,[],n))}function Rn(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function Cn(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Dn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Mn(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}function Ln(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function Hn(e){return!Ln().includes("jsdom/")&&(!Nn()&&0===e.width&&0===e.height||Nn()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function Tn(){return/apple/i.test(navigator.vendor)}function Nn(){const e=/android/i;return e.test(Mn())||e.test(Ln())}function In(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Yn(e){return(null==e?void 0:e.ownerDocument)||document}function jn(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function Pn(e){return"composedPath"in e?e.composedPath()[0]:e.target}h(hn)`
    color: ${Wt.Neutral[3]};
`;const zn="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Wn(e){return bn(e)&&e.matches(zn)}function _n(e){e.preventDefault(),e.stopPropagation()}const Vn=Math.min,Un=Math.max,Zn=Math.round,Kn=Math.floor,Xn=e=>({x:e,y:e}),qn={left:"right",right:"left",bottom:"top",top:"bottom"},Gn={start:"end",end:"start"};function Jn(e,t,n){return Un(e,Vn(t,n))}function Qn(e,t){return"function"==typeof e?e(t):e}function er(e){return e.split("-")[0]}function tr(e){return e.split("-")[1]}function nr(e){return"x"===e?"y":"x"}function rr(e){return"y"===e?"height":"width"}function or(e){return["top","bottom"].includes(er(e))?"y":"x"}function ir(e){return nr(or(e))}function ar(e){return e.replace(/start|end/g,(e=>Gn[e]))}function lr(e){return e.replace(/left|right|bottom|top/g,(e=>qn[e]))}function sr(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function cr(e,t,n){let{reference:r,floating:o}=e;const i=or(t),a=ir(t),l=rr(a),s=er(t),c="y"===i,d=r.x+r.width/2-o.width/2,u=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(s){case"top":h={x:d,y:r.y-o.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:u};break;case"left":h={x:r.x-o.width,y:u};break;default:h={x:r.x,y:r.y}}switch(tr(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function dr(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:h=0}=Qn(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===u?"reference":"floating":u],m=sr(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:s})),y="floating"===u?{...a.floating,x:r,y:o}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},D=sr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:v,strategy:s}):y);return{top:(m.top-D.top+p.top)/b.y,bottom:(D.bottom-m.bottom+p.bottom)/b.y,left:(m.left-D.left+p.left)/b.x,right:(D.right-m.right+p.right)/b.x}}const ur=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=er(n),l=tr(n),s="y"===or(n),c=["left","top"].includes(a)?-1:1,d=i&&s?-1:1,u=Qn(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),s?{x:h*d,y:f*c}:{x:f*c,y:h*d}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}}};function fr(e){const t=En(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=bn(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Zn(n)!==i||Zn(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function hr(e){return vn(e)?e:e.contextElement}function pr(e){const t=hr(e);if(!bn(t))return Xn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=fr(t);let a=(i?Zn(n.width):n.width)/r,l=(i?Zn(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const gr=Xn(0);function mr(e){const t=gn(e);return Sn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:gr}function yr(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=hr(e);let a=Xn(1);t&&(r?vn(r)&&(a=pr(r)):a=pr(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==gn(e))&&t}(i,n,r)?mr(i):Xn(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,d=o.width/a.x,u=o.height/a.y;if(i){const e=gn(i),t=r&&vn(r)?gn(r):r;let n=e.frameElement;for(;n&&r&&t!==e;){const e=pr(n),t=n.getBoundingClientRect(),r=En(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,d*=e.x,u*=e.y,s+=o,c+=i,n=gn(n).frameElement}}return sr({width:d,height:u,x:s,y:c})}function vr(e){return yr(mn(e)).left+Bn(e).scrollLeft}function br(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=gn(e),r=mn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const e=Sn();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=function(e){const t=mn(e),n=Bn(e),r=e.ownerDocument.body,o=Un(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Un(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+vr(e);const l=-n.scrollTop;return"rtl"===En(r).direction&&(a+=Un(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(mn(e));else if(vn(t))r=function(e,t){const n=yr(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=bn(e)?pr(e):Xn(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=mr(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return sr(r)}function Dr(e,t){const n=kn(e);return!(n===t||!vn(n)||Fn(n))&&("fixed"===En(n).position||Dr(n,t))}function wr(e,t,n){const r=bn(t),o=mn(t),i="fixed"===n,a=yr(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=Xn(0);if(r||!r&&!i)if(("body"!==pn(t)||wn(o))&&(l=Bn(t)),r){const e=yr(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=vr(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function xr(e,t){return bn(e)&&"fixed"!==En(e).position?t?t(e):e.offsetParent:null}function $r(e,t){const n=gn(e);if(!bn(e))return n;let r=xr(e,t);for(;r&&xn(r)&&"static"===En(r).position;)r=xr(r,t);return r&&("html"===pn(r)||"body"===pn(r)&&"static"===En(r).position&&!$n(r))?n:r||function(e){let t=kn(e);for(;bn(t)&&!Fn(t);){if($n(t))return t;t=kn(t)}return null}(e)||n}const Sr={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=bn(n),i=mn(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},l=Xn(1);const s=Xn(0);if((o||!o&&"fixed"!==r)&&(("body"!==pn(n)||wn(i))&&(a=Bn(n)),bn(n))){const e=yr(n);l=pr(n),s.x=e.x+n.clientLeft,s.y=e.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+s.x,y:t.y*l.y-a.scrollTop*l.y+s.y}},getDocumentElement:mn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let r=On(e,[],!1).filter((e=>vn(e)&&"body"!==pn(e))),o=null;const i="fixed"===En(e).position;let a=i?kn(e):e;for(;vn(a)&&!Fn(a);){const t=En(a),n=$n(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||wn(a)&&!n&&Dr(e,a))?r=r.filter((e=>e!==a)):o=t,a=kn(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=br(t,n,o);return e.top=Un(r.top,e.top),e.right=Vn(r.right,e.right),e.bottom=Vn(r.bottom,e.bottom),e.left=Un(r.left,e.left),e}),br(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:$r,getElementRects:async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||$r,i=this.getDimensions;return{reference:wr(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=fr(e);return{width:t,height:n}},getScale:pr,isElement:vn,isRTL:function(e){return"rtl"===En(e).direction}};function Fr(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=hr(e),d=o||i?[...c?On(c):[],...On(t)]:[];d.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const u=c&&l?function(e,t){let n,r=null;const o=mn(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();const{left:c,top:d,width:u,height:f}=e.getBoundingClientRect();if(l||t(),!u||!f)return;const h={rootMargin:-Kn(d)+"px "+-Kn(o.clientWidth-(c+u))+"px "+-Kn(o.clientHeight-(d+f))+"px "+-Kn(c)+"px",threshold:Un(0,Vn(1,s))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==s){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),100)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{p&&p.observe(t)}))),n()})),c&&!s&&p.observe(c),p.observe(t));let g=s?yr(e):null;return s&&function t(){const r=yr(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{d.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),u&&u(),p&&p.disconnect(),p=null,s&&cancelAnimationFrame(f)}}const Er=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=Qn(e,t),c={x:n,y:r},d=await dr(t,s),u=or(er(o)),f=nr(u);let h=c[f],p=c[u];if(i){const e="y"===f?"bottom":"right";h=Jn(h+d["y"===f?"top":"left"],h,h-d[e])}if(a){const e="y"===u?"bottom":"right";p=Jn(p+d["y"===u?"top":"left"],p,p-d[e])}const g=l.fn({...t,[f]:h,[u]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},Br=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:s,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Qn(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=er(o),v=er(l)===l,b=await(null==s.isRTL?void 0:s.isRTL(c.floating)),D=f||(v||!g?[lr(l)]:function(e){const t=lr(e);return[ar(e),t,ar(t)]}(l));f||"none"===p||D.push(...function(e,t,n,r){const o=tr(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(er(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(ar)))),i}(l,g,p,b));const w=[l,...D],x=await dr(t,m),$=[];let S=(null==(r=i.flip)?void 0:r.overflows)||[];if(d&&$.push(x[y]),u){const e=function(e,t,n){void 0===n&&(n=!1);const r=tr(e),o=ir(e),i=rr(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=lr(a)),[a,lr(a)]}(o,a,b);$.push(x[e[0]],x[e[1]])}if(S=[...S,{placement:o,overflows:$}],!$.every((e=>e<=0))){var F,E;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=w[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let n=null==(E=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!n)switch(h){case"bestFit":{var B;const e=null==(B=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:B[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},kr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=Qn(e,t),s=await dr(t,l),c=er(n),d=tr(n),u="y"===or(n),{width:f,height:h}=r.floating;let p,g;"top"===c||"bottom"===c?(p=c,g=d===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,p="end"===d?"top":"bottom");const m=h-s[p],y=f-s[g],v=!t.middlewareData.shift;let b=m,D=y;if(u){const e=f-s.left-s.right;D=d||v?Vn(y,e):e}else{const e=h-s.top-s.bottom;b=d||v?Vn(m,e):e}if(v&&!d){const e=Un(s.left,0),t=Un(s.right,0),n=Un(s.top,0),r=Un(s.bottom,0);u?D=f-2*(0!==e||0!==t?e+t:Un(s.left,s.right)):b=h-2*(0!==n||0!==r?n+r:Un(s.top,s.bottom))}await a({...t,availableWidth:D,availableHeight:b});const w=await o.getDimensions(i.floating);return f!==w.width||h!==w.height?{reset:{rects:!0}}:{}}}},Ar=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=Qn(e,t),d={x:n,y:r},u=or(o),f=nr(u);let h=d[f],p=d[u];const g=Qn(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(s){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(er(o)),n=i.reference[u]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[u])||0)+(t?0:m.crossAxis),r=i.reference[u]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[u])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[u]:p}}}},Or=(e,t,n)=>{const r=new Map,o={platform:Sr,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:u}=cr(c,r,s),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:y,data:v,reset:b}=await g({x:d,y:u,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});d=null!=m?m:d,u=null!=y?y:u,h={...h,[i]:{...h[i],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:d,y:u}=cr(c,f,s))),n=-1)}return{x:d,y:u,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var Rr="undefined"!=typeof document?i:a;function Cr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Cr(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Cr(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Mr(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Lr(e,t){const n=Mr(e);return Math.round(t*n)/n}function Hr(e){const t=r.useRef(e);return Rr((()=>{t.current=e})),t}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Tr=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Nr="undefined"==typeof Element,Ir=Nr?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Yr=!Nr&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},jr=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Pr=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!jr(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),s=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{Ir.call(a,Tr)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),d=!jr(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&d){var u=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else i.unshift.apply(i,a.children)}}return o},zr=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Wr=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!zr(e)?0:e.tabIndex},_r=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Vr=function(e){return"INPUT"===e.tagName},Ur=function(e){return function(e){return Vr(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Yr(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Zr=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},Kr=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=Ir.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Ir.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Zr(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=Yr(e);if(a&&!a.shadowRoot&&!0===r(a))return Zr(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&Yr(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var s,c,d;l=!(null===(c=a=null===(s=i=Yr(a))||void 0===s?void 0:s.host)||void 0===c||null===(d=c.ownerDocument)||void 0===d||!d.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},Xr=function(e,t){return!(t.disabled||jr(t)||function(e){return Vr(e)&&"hidden"===e.type}(t)||Kr(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Ir.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},qr=function(e,t){return!(Ur(t)||Wr(t)<0||!Xr(e,t))},Gr=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Jr=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=Wr(e);return n<0&&t&&!zr(e)?0:n}(a,i),s=i?e(t.candidates):a;0===l?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:s})})),r.sort(_r).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},Qr=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Pr([e],t.includeContainer,{filter:qr.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Gr}):function(e,t,n){if(jr(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(Tr));return t&&Ir.call(e,Tr)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,qr.bind(null,t)),Jr(n)};const eo=r["useInsertionEffect".toString()]||(e=>e());function to(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return eo((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let no=0;function ro(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(no);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():no=requestAnimationFrame(i)}var oo="undefined"!=typeof document?i:a;function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}let ao=!1,lo=0;const so=()=>"floating-ui-"+lo++;const co=r["useId".toString()]||function(){const[e,t]=r.useState((()=>ao?so():void 0));return oo((()=>{null==e&&t(so())}),[]),r.useEffect((()=>{ao||(ao=!0)}),[]),e};const uo=r.createContext(null),fo=r.createContext(null),ho=()=>r.useContext(fo);function po(e){return"data-floating-ui-"+e}function go(e){const t=l(e);return oo((()=>{t.current=e})),t}function mo(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let yo=new WeakMap,vo=new WeakSet,bo={},Do=0;const wo=e=>e&&(e.host||wo(e.parentNode)),xo=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=wo(t);return e.contains(n)?n:null})).filter((e=>null!=e));function $o(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=Yn(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=xo(t,e),l=new Set,s=new Set(a),c=[];bo[o]||(bo[o]=new WeakMap);const d=bo[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!s.has(t)&&Array.prototype.forEach.call(t.children,(t=>{if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(yo.get(t)||0)+1,a=(d.get(t)||0)+1;yo.set(t,r),d.set(t,a),c.push(t),1===r&&n&&vo.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),Do++,()=>{c.forEach((e=>{const t=(yo.get(e)||0)-1,n=(d.get(e)||0)-1;yo.set(e,t),d.set(e,n),t||(!vo.has(e)&&i&&e.removeAttribute(i),vo.delete(e)),n||e.removeAttribute(o)})),Do--,Do||(yo=new WeakMap,yo=new WeakMap,vo=new WeakSet,bo={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const So=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Fo(e,t){const n=Qr(e,So());"prev"===t&&n.reverse();const r=n.indexOf(Rn(Yn(e)));return n.slice(r+1)[0]}function Eo(){return Fo(document.body,"next")}function Bo(){return Fo(document.body,"prev")}function ko(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!Cn(n,r)}function Ao(e){Qr(e,So()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function Oo(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const Ro={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Co(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const Mo=r.forwardRef((function(e,t){const[n,o]=r.useState();oo((()=>(Tn()&&o("button"),document.addEventListener("keydown",Co),()=>{document.removeEventListener("keydown",Co)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[po("focus-guard")]:"",style:Ro};return r.createElement("span",io({},e,i))})),Lo=r.createContext(null);function Ho(e){let{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e;const a=function(e){let{id:t,root:n}=void 0===e?{}:e;const[o,i]=r.useState(null),a=co(),l=To(),s=r.useMemo((()=>({id:t,root:n,portalContext:l,uniqueId:a})),[t,n,l,a]),c=r.useRef();return oo((()=>()=>{null==o||o.remove()}),[o,s]),oo((()=>{if(c.current===s)return;c.current=s;const{id:e,root:t,portalContext:n,uniqueId:r}=s,o=e?document.getElementById(e):null,a=po("portal");if(o){const e=document.createElement("div");e.id=r,e.setAttribute(a,""),o.appendChild(e),i(e)}else{let o=t||(null==n?void 0:n.portalNode);o&&!vn(o)&&(o=o.current),o=o||document.body;let l=null;e&&(l=document.createElement("div"),l.id=e,o.appendChild(l));const s=document.createElement("div");s.id=r,s.setAttribute(a,""),o=l||o,o.appendChild(s),i(s)}}),[s]),o}({id:n,root:o}),[l,s]=r.useState(null),c=r.useRef(null),d=r.useRef(null),u=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&ko(e)){("focusin"===e.type?Oo:Ao)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(Lo.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:d,beforeInsideRef:u,afterInsideRef:f,portalNode:a,setFocusManagerState:s})),[i,a])},h&&a&&r.createElement(Mo,{"data-type":"outside",ref:c,onFocus:e=>{if(ko(e,a)){var t;null==(t=u.current)||t.focus()}else{const e=Bo()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:Ro}),a&&v(t,a),h&&a&&r.createElement(Mo,{"data-type":"outside",ref:d,onFocus:e=>{if(ko(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=Eo()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const To=()=>r.useContext(Lo),No=20;let Io=[];function Yo(e){Io=Io.filter((e=>e.isConnected)),e&&"body"!==pn(e)&&(Io.push(e),Io.length>No&&(Io=Io.slice(-No)))}function jo(){return Io.slice().reverse().find((e=>e.isConnected))}const Po=r.forwardRef((function(e,t){return r.createElement("button",io({},e,{type:"button",ref:t,tabIndex:-1,style:Ro}))}));function zo(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:s=!0,modal:c=!0,visuallyHiddenDismiss:d=!1,closeOnFocusOut:u=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:y,elements:{domReference:v,floating:b}}=t,D="number"==typeof l&&l<0,w=!!(x=v)&&"combobox"===x.getAttribute("role")&&Wn(x)&&D;var x;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,S=go(i),F=go(l),E=go(s),B=ho(),k=To(),A=r.useRef(null),O=r.useRef(null),R=r.useRef(!1),C=r.useRef(!1),M=null!=k,L=r.useCallback((function(e){return void 0===e&&(e=b),e?Qr(e,So()):[]}),[b]),H=r.useCallback((e=>{const t=L(e);return S.current.map((e=>v&&"reference"===e?v:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[v,b,S,L]);function T(e){return!o&&d&&c?r.createElement(Po,{ref:"start"===e?A:O,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof d?d:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){Cn(b,Rn(Yn(b)))&&0===L().length&&!w&&_n(e);const t=H(),n=Pn(e);"reference"===S.current[0]&&n===v&&(_n(e),e.shiftKey?ro(t[t.length-1]):ro(t[1])),"floating"===S.current[1]&&n===b&&e.shiftKey&&(_n(e),ro(t[0]))}}const t=Yn(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,v,b,c,S,w,L,H]),r.useEffect((()=>{if(!o&&u)return b&&bn(v)?(v.addEventListener("focusout",t),v.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{v.removeEventListener("focusout",t),v.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){C.current=!0,setTimeout((()=>{C.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(Cn(v,t)||Cn(b,t)||Cn(t,b)||Cn(null==k?void 0:k.portalNode,t)||null!=t&&t.hasAttribute(po("focus-guard"))||B&&(mo(B.nodesRef.current,p).find((e=>{var n,r;return Cn(null==(n=e.context)?void 0:n.elements.floating,t)||Cn(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(B.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!C.current&&t!==jo()&&(R.current=!0,g(!1,e))}))}}),[o,v,b,c,p,B,k,g,u]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==k||null==(e=k.portalNode)?void 0:e.querySelectorAll("["+po("portal")+"]"))||[]);if(b){const e=[b,...t,A.current,O.current,S.current.includes("reference")||w?v:null].filter((e=>null!=e)),n=c||w?$o(e,$,!$):$o(e);return()=>{n()}}}),[o,v,b,c,S,k,w,$]),oo((()=>{if(o||!b)return;const e=Rn(Yn(b));queueMicrotask((()=>{const t=H(b),n=F.current,r=("number"==typeof n?t[n]:n.current)||b,o=Cn(b,e);D||o||!f||ro(r,{preventScroll:r===b})}))}),[o,f,b,D,H,F]),oo((()=>{if(o||!b)return;let e=!1;const t=Yn(b),n=Rn(t),r=y.current;function i(t){let{reason:n,event:r,nested:o}=t;"escape-key"===n&&h.domReference.current&&Yo(h.domReference.current),"hover"===n&&"mouseleave"===r.type&&(R.current=!0),"outside-press"===n&&(o?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(Nn()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(r)||Hn(r)))}return Yo(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=Rn(t),o=Cn(b,n)||B&&mo(B.nodesRef.current,p).some((e=>{var t;return Cn(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r.openEvent&&["click","mousedown"].includes(r.openEvent.type))&&h.domReference.current&&Yo(h.domReference.current);const a=jo();E.current&&!R.current&&bn(a)&&(a===n||n===t.body||o)&&ro(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,E,y,h,m,B,p]),oo((()=>{if(!o&&k)return k.setFocusManagerState({modal:c,closeOnFocusOut:u,open:f,onOpenChange:g,refs:h}),()=>{k.setFocusManagerState(null)}}),[o,k,c,f,g,h,u]),oo((()=>{if(o||!b||"function"!=typeof MutationObserver||D)return;const e=()=>{const e=b.getAttribute("tabindex");S.current.includes("floating")||Rn(Yn(b))!==h.domReference.current&&0===L().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,S,L,D]);const N=!o&&$&&(M||c);return r.createElement(r.Fragment,null,N&&r.createElement(Mo,{"data-type":"inside",ref:null==k?void 0:k.beforeInsideRef,onFocus:e=>{if(c){const e=H();ro("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(R.current=!1,ko(e,k.portalNode)){const e=Eo()||v;null==e||e.focus()}else{var t;null==(t=k.beforeOutsideRef.current)||t.focus()}}}),!w&&T("start"),n,T("end"),N&&r.createElement(Mo,{"data-type":"inside",ref:null==k?void 0:k.afterInsideRef,onFocus:e=>{if(c)ro(H()[0]);else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(u&&(R.current=!0),ko(e,k.portalNode)){const e=Bo()||v;null==e||e.focus()}else{var t;null==(t=k.afterOutsideRef.current)||t.focus()}}}))}function Wo(e){return bn(e.target)&&"BUTTON"===e.target.tagName}function _o(e){return Wn(e)}const Vo={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Uo={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Zo=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};let Ko;function Xo(e){var t;void 0===e&&(e={});const{open:n=!1,onOpenChange:o,nodeId:i}=e;if("production"!==process.env.NODE_ENV){var a;const t="Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";var l,s;if(null!=(a=e.elements)&&a.reference&&!vn(e.elements.reference))if(null==(l=Ko)||!l.has(t))null==(s=Ko)||s.add(t),console.error(t)}const[c,d]=r.useState(null),u=(null==(t=e.elements)?void 0:t.reference)||c,f=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:s=!0,whileElementsMounted:c,open:d}=e,[u,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);Cr(h,o)||p(o);const[g,m]=r.useState(null),[v,b]=r.useState(null),D=r.useCallback((e=>{e!==S.current&&(S.current=e,m(e))}),[]),w=r.useCallback((e=>{e!==F.current&&(F.current=e,b(e))}),[]),x=a||g,$=l||v,S=r.useRef(null),F=r.useRef(null),E=r.useRef(u),B=null!=c,k=Hr(c),A=Hr(i),O=r.useCallback((()=>{if(!S.current||!F.current)return;const e={placement:t,strategy:n,middleware:h};A.current&&(e.platform=A.current),Or(S.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!Cr(E.current,t)&&(E.current=t,y.flushSync((()=>{f(t)})))}))}),[h,t,n,A]);Rr((()=>{!1===d&&E.current.isPositioned&&(E.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[d]);const R=r.useRef(!1);Rr((()=>(R.current=!0,()=>{R.current=!1})),[]),Rr((()=>{if(x&&(S.current=x),$&&(F.current=$),x&&$){if(k.current)return k.current(x,$,O);O()}}),[x,$,O,k,B]);const C=r.useMemo((()=>({reference:S,floating:F,setReference:D,setFloating:w})),[D,w]),M=r.useMemo((()=>({reference:x,floating:$})),[x,$]),L=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Lr(M.floating,u.x),r=Lr(M.floating,u.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...Mr(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,M.floating,u.x,u.y]);return r.useMemo((()=>({...u,update:O,refs:C,elements:M,floatingStyles:L})),[u,O,C,M,L])}(e),h=ho(),p=null!=((null==(g=r.useContext(uo))?void 0:g.id)||null);var g;const m=to(((e,t,n)=>{e&&(b.current.openEvent=t),D.emit("openchange",{open:e,event:t,reason:n,nested:p}),null==o||o(e,t,n)})),v=r.useRef(null),b=r.useRef({}),D=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}()))[0],w=co(),x=r.useCallback((e=>{const t=vn(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;f.refs.setReference(t)}),[f.refs]),$=r.useCallback((e=>{(vn(e)||null===e)&&(v.current=e,d(e)),(vn(f.refs.reference.current)||null===f.refs.reference.current||null!==e&&!vn(e))&&f.refs.setReference(e)}),[f.refs]),S=r.useMemo((()=>({...f.refs,setReference:$,setPositionReference:x,domReference:v})),[f.refs,$,x]),F=r.useMemo((()=>({...f.elements,domReference:u})),[f.elements,u]),E=r.useMemo((()=>({...f,refs:S,elements:F,dataRef:b,nodeId:i,floatingId:w,events:D,open:n,onOpenChange:m})),[f,i,w,D,n,m,S,F]);return oo((()=>{const e=null==h?void 0:h.nodesRef.current.find((e=>e.id===i));e&&(e.context=E)})),r.useMemo((()=>({...f,context:E,refs:S,elements:F})),[f,S,F,E])}function qo(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,events:i,refs:a,elements:{floating:l,domReference:s}}=e,{enabled:c=!0,visibleOnly:d=!0}=t,u=r.useRef(!1),f=r.useRef(),h=r.useRef(!0);return r.useEffect((()=>{if(!c)return;const e=gn(s);function t(){!n&&bn(s)&&s===Rn(Yn(s))&&(u.current=!0)}function r(){h.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}}),[s,n,c]),r.useEffect((()=>{if(c)return i.on("openchange",e),()=>{i.off("openchange",e)};function e(e){let{reason:t}=e;"reference-press"!==t&&"escape-key"!==t||(u.current=!0)}}),[i,c]),r.useEffect((()=>()=>{clearTimeout(f.current)}),[]),r.useMemo((()=>c?{reference:{onPointerDown(e){Hn(e.nativeEvent)||(h.current=!1)},onMouseLeave(){u.current=!1},onFocus(e){if(u.current)return;const t=Pn(e.nativeEvent);if(d&&vn(t))try{if(Tn()&&Mn().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints)throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!h.current&&!Wn(t))return}o(!0,e.nativeEvent,"focus")},onBlur(e){u.current=!1;const t=e.relatedTarget,n=vn(t)&&t.hasAttribute(po("focus-guard"))&&"outside"===t.getAttribute("data-type");f.current=window.setTimeout((()=>{const r=Rn(s?s.ownerDocument:document);(t||r!==s)&&(Cn(a.floating.current,t)||Cn(s,t)||n||o(!1,e.nativeEvent,"focus"))}))}}}:{}),[c,d,s,a,o])}"production"!==process.env.NODE_ENV&&(Ko=new Set);const Go="active",Jo="selected";function Qo(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[Go]:t,[Jo]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Go,Jo].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const ei=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function ti(e,t){return"function"==typeof e?e(t):e}function ni(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,s]=r.useState(!1),[c,d]=r.useState("unmounted"),u=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,t]),n}(n,a);return oo((()=>{l&&!u&&d("unmounted")}),[l,u]),oo((()=>{if(o){if(n){d("initial");const e=requestAnimationFrame((()=>{d("open")}));return()=>{cancelAnimationFrame(e)}}s(!0),d("close")}}),[n,o]),{isMounted:u,status:c}}const ri=({enabled:o,isOpen:i,onOpen:a,onClose:s,onDismiss:c,renderElement:d,renderDropdown:u,zIndex:f=50})=>{const h=l(null),{refs:p,floatingStyles:g,context:m}=Xo({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!i?null==a||a():!e&&i&&(null==s||s())},whileElementsMounted:Fr,placement:"bottom-start",middleware:[ur(16),Br(),Er({limiter:Ar()}),kr({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}})]}),{isMounted:y,styles:v}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,s=e.placement,c=s.split("-")[0],d=r.useMemo((()=>({side:c,placement:s})),[c,s]),u="number"==typeof l,f=(u?l:l.open)||0,h=(u?l:l.close)||0,[p,g]=r.useState((()=>({...ti(a,d),...ti(n,d)}))),{isMounted:m,status:y}=ni(e,{duration:l}),v=go(n),b=go(o),D=go(i),w=go(a);return oo((()=>{const e=ti(v.current,d),t=ti(D.current,d),n=ti(w.current,d),r=ti(b.current,d)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===y&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===y&&g({transitionProperty:Object.keys(r).map(ei).join(","),transitionDuration:f+"ms",...n,...r}),"close"===y){const r=t||e;g({transitionProperty:Object.keys(r).map(ei).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,D,v,b,w,f,y,d]),{isMounted:m,styles:p}}(m,{initial:{opacity:0},open:{opacity:1},duration:300}),b=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:s="click",toggle:c=!0,ignoreMouse:d=!1,keyboardHandlers:u=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(In(f.current,!0)&&d||"click"!==s&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===s&&f.current?f.current=void 0:In(f.current,!0)&&d||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!u||Wo(e)||(" "!==e.key||_o(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!u||Wo(e)||_o(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[l,i,s,d,u,a,c,n,o])}(m,{enabled:o}),D=qo(m,{enabled:o}),w=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,nodeId:i,elements:{reference:a,domReference:l,floating:s},dataRef:c}=e,{enabled:d=!0,escapeKey:u=!0,outsidePress:f=!0,outsidePressEvent:h="pointerdown",referencePress:p=!1,referencePressEvent:g="pointerdown",ancestorScroll:m=!1,bubbles:y,capture:v}=t,b=ho(),D=to("function"==typeof f?f:()=>!1),w="function"==typeof f?D:f,x=r.useRef(!1),$=r.useRef(!1),{escapeKey:S,outsidePress:F}=Zo(y),{escapeKey:E,outsidePress:B}=Zo(v),k=to((e=>{if(!n||!d||!u||"Escape"!==e.key)return;const t=b?mo(b.nodesRef.current,i):[];if(!S&&(e.stopPropagation(),t.length>0)){let e=!0;if(t.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),A=to((e=>{var t;const n=()=>{var t;k(e),null==(t=Pn(e))||t.removeEventListener("keydown",n)};null==(t=Pn(e))||t.addEventListener("keydown",n)})),O=to((e=>{const t=x.current;x.current=!1;const n=$.current;if($.current=!1,"click"===h&&n)return;if(t)return;if("function"==typeof w&&!w(e))return;const r=Pn(e),a="["+po("inert")+"]",c=Yn(s).querySelectorAll(a);let d=vn(r)?r:null;for(;d&&!Fn(d);){const e=kn(d);if(Fn(e)||!vn(e))break;d=e}if(c.length&&vn(r)&&!r.matches("html,body")&&!Cn(r,s)&&Array.from(c).every((e=>!Cn(d,e))))return;if(bn(r)&&s){const t=r.clientWidth>0&&r.scrollWidth>r.clientWidth,n=r.clientHeight>0&&r.scrollHeight>r.clientHeight;let o=n&&e.offsetX>r.clientWidth;if(n&&"rtl"===En(r).direction&&(o=e.offsetX<=r.offsetWidth-r.clientWidth),o||t&&e.offsetY>r.clientHeight)return}const u=b&&mo(b.nodesRef.current,i).some((t=>{var n;return jn(e,null==(n=t.context)?void 0:n.elements.floating)}));if(jn(e,s)||jn(e,l)||u)return;const f=b?mo(b.nodesRef.current,i):[];if(f.length>0){let e=!0;if(f.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),R=to((e=>{var t;const n=()=>{var t;O(e),null==(t=Pn(e))||t.removeEventListener(h,n)};null==(t=Pn(e))||t.addEventListener(h,n)}));return r.useEffect((()=>{if(!n||!d)return;function e(e){o(!1,e,"ancestor-scroll")}c.current.__escapeKeyBubbles=S,c.current.__outsidePressBubbles=F;const t=Yn(s);u&&t.addEventListener("keydown",E?A:k,E),w&&t.addEventListener(h,B?R:O,B);let r=[];return m&&(vn(l)&&(r=On(l)),vn(s)&&(r=r.concat(On(s))),!vn(a)&&a&&a.contextElement&&(r=r.concat(On(a.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",E?A:k,E),w&&t.removeEventListener(h,B?R:O,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[c,s,l,a,u,w,h,n,o,m,d,S,F,k,E,A,O,B,R]),r.useEffect((()=>{x.current=!1}),[w,h]),r.useMemo((()=>d?{reference:{onKeyDown:k,[Vo[g]]:e=>{p&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:k,onMouseDown(){$.current=!0},onMouseUp(){$.current=!0},[Uo[h]]:()=>{x.current=!0}}}:{}),[d,p,h,g,o,k])}(m,{enabled:o}),{getReferenceProps:x,getFloatingProps:$}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>Qo(t,e,"reference")),t),o=r.useCallback((t=>Qo(t,e,"floating")),t),i=r.useCallback((t=>Qo(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([b,D,w]);return e(n,{children:[t("div",Object.assign({ref:p.setReference},x(),{children:d()})),y&&t(Ho,{children:t(zo,Object.assign({context:m,modal:!1,initialFocus:h,returnFocus:!1},{children:t("div",Object.assign({ref:p.setFloating,style:Object.assign(Object.assign({},g),{zIndex:f})},$(),{children:t("div",Object.assign({ref:h,style:Object.assign({},v),inert:v.opacity<1?"":void 0},{children:u()}))}))}))})]})},oi={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ii=e=>Object.keys(oi).reduce(((t,n)=>{const r=oi[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),ai=ii("max-width"),li=(ii("min-width"),h.div`
    max-width: 41rem;
    min-width: 21rem;

    ${ai.mobileL} {
        min-width: 17.5rem;
    }
`);var si={exports:{}};si.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",D={};D[b]=m;var w=function(e){return e instanceof F},x=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();D[i]&&(o=i),n&&(D[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;D[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},$=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},S=v;S.l=x,S.i=w,S.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return $(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<$(e)},y.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!S.u(t)||t,d=S.p(e),h=function(e,t){var o=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,D=(g<b?g+7:g)-b;return h(r?y-D:y+(6-D),m);case l:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=S.p(e),d="set"+(this.$u?"UTC":""),h=(n={},n[l]=d+"Date",n[f]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[i]=d+"Minutes",n[o]=d+"Seconds",n[r]=d+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[S.p(e)]()},y.add=function(r,d){var f,h=this;r=Number(r);var p=S.p(d),g=function(e){var t=$(h);return S.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*m;return S.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=S.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},u=function(e){return S.s(i%12||12,e,"0")},f=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:S.s(l+1,2,"0"),MMM:d(n.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,s,2),ddd:d(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:S.s(i,2,"0"),h:u(1),hh:u(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:o};return r.replace(g,(function(e,t){return t||p[e]||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,g=S.p(f),m=$(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=S.m(this,m);return b=(p={},p[u]=b/12,p[c]=b,p[d]=b/3,p[s]=(v-y)/6048e5,p[l]=(v-y)/864e5,p[a]=v/n,p[i]=v/t,p[o]=v/e,p)[g]||v,h?b:S.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return D[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),E=F.prototype;return $.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",u],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,F,$),e.$i=!0),$},$.locale=x,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=D[b],$.Ls=D,$.p={},$}();var ci=$(si.exports),di={exports:{}};di.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[o,function(e){this.afternoon=d(e,!1)}],a:[o,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],d=u[c],f=d&&d[0],h=d&&d[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,s=o.parser,c=e.slice(r),d=i.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],d=s||c,u=a[2];c&&(u=a[2]),i=this.$locale(),!s&&u&&(i=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var y=l||0,v=s||0,b=c||0,D=d||0;return u?new Date(Date.UTC(g,m,p,y,v,b,D+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,D)):new Date(g,m,p,y,v,b,D)}catch(e){return new Date("")}}(t,l,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var ui,fi,hi=$(di.exports),pi={exports:{}},gi=$(pi.exports=(ui={year:0,month:1,day:2,hour:3,minute:4,second:5},fi={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=fi[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),fi[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,d=ui[s];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],f=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(o-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),d=c[0],u=c[1],f=n(d).utcOffset(u);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),mi={exports:{}};mi.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var yi=$(mi.exports),vi={exports:{}};vi.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var bi=$(vi.exports),Di={exports:{}};Di.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var wi,xi=$(Di.exports);ci.extend(yi),ci.extend(bi),ci.extend(xi),ci.extend(hi),ci.extend(gi),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=ci(t).startOf("week");return $i(n).map((e=>Si(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Si(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(ci(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ci(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ci(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?ci(r):void 0,o?ci(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(wi||(wi={}));const $i=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Si=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Fi=[1,3,5,7,8,10,12],Ei=[4,6,9,11];var Bi,ki,Ai,Oi;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Fi.includes(i)?Math.min(o,31).toString():Ei.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=ci(e,n);return ci(t,n).diff(r,"minute")},e.toDayjs=e=>e?ci(e):ci(),e.addMinutesToTime=(e,t,n="HH:mm")=>ci(e,n).add(t,"minutes").format(n)}(Bi||(Bi={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!ci(e).isBefore(r,"day"))||!(!o||!ci(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(ci(e).isValid())return e}return""}}(ki||(ki={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ai||(Ai={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Oi||(Oi={}));const Ri=e=>{const[t,n]=s(e),r=l(e);return[t,c((e=>{r.current=e,n(e)}),[]),r]},Ci=h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Mi=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Li=h.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Wt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Mi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Hi=h(Li)`
    animation-delay: -0.45s;
`,Ti=h(Li)`
    animation-delay: -0.3s;
`,Ni=h(Li)`
    animation-delay: -0.15s;
`,Ii=h.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return p`
                    background-color: ${Wt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ut.Button.Danger.Border:Wt.Primary};

                    color: ${e.$buttonIsDanger?Ut.Button.Danger.Primary:Wt.Primary};
                `;case"light":return p`
                    background-color: ${Wt.Neutral[8]};
                    border: 1px solid ${Wt.Neutral[5]};

                    color: ${e.$buttonIsDanger?Ut.Button.Danger.Primary:Wt.Primary};
                `;case"disabled":return p`
                    background-color: ${Wt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Wt.Neutral[3]};
                `;case"link":return p`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ut.Button.Danger.Primary:Wt.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Ut.Button.Danger.Hover:Wt.Secondary};
                    }
                `;default:return p`
                    background-color: ${e.$buttonIsDanger?Ut.Button.Danger.BackgroundColor:Wt.Primary};
                    border: 1px solid transparent;

                    ${ai.mobileL} {
                        width: 100%;
                    }

                    color: ${Wt.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?p`
                    height: 2.5rem;
                    ${tn("H5","semibold")}

                    ${ai.mobileS} {
                        height: auto;
                    }
                `:p`
                    height: 3rem;
                    ${tn("H4","semibold")}

                    ${ai.mobileS} {
                        height: auto;
                    }
                `}
`,Yi=h((({color:n,className:r,size:o=18})=>e(Ci,Object.assign({className:r,$size:o,$color:n},{children:[t(Li,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Hi,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Ti,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Ni,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ut.Button.Danger.Primary:Wt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Wt.Neutral[3](e);break;default:t=Wt.Neutral[8](e)}return p`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ji={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=w(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Ii,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&t(Yi,Object.assign({},d)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=w(n,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Ii,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[a&&t(Yi,Object.assign({},d,{size:16})),t("span",{children:o})]}))}))},Pi=h.button`
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

        ${({$highlight:e})=>e&&p`
                background-color: ${Wt.Neutral[7]};
            `}
    }
`,zi=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=w(e,["children","focusHighlight","focusOutline","type"]);return t(Pi,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Wi=p`
    color: ${Wt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,_i=h(b)`
    ${Wi}
`,Vi=h(D)`
    ${Wi}
`,Ui=h(f)`
    ${Wi}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Zi=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ki=h.div`
    display: flex;
    flex: 1;
    position: relative;
`,Xi=h.div`
    isolation: isolate;
    width: 100%;
`,qi=h.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Wt.Neutral[8]};

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,Gi=h.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Ji=h.div`
    display: flex;
`,Qi=h.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${Ui} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ea=h.p`
    ${tn("H5","regular")}
`,ta=h.div`
    display: flex;
`,na=h(zi)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ra=h.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,oa=h(ji.Small)`
    flex: 1;
`,ia=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return p`
                    gap: 0.5rem 2.5rem;
                `;case"input":return p`
                    gap: 0.5rem 1rem;
                `}}}
`,aa=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?p`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Wt.Shadow.Accent};
                    border: 1px solid ${Wt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return p`
                    background-color: ${Wt.Accent.Light[6](e)};
                `;case"selected-month":return p`
                    background-color: ${Wt.Accent.Light[5](e)};
                    border: 1px solid ${Wt.Primary(e)};
                `}}}
`,la=h(rn.H5)`
    ${e=>{if(e.$disabledDisplay)return p`
                color: ${Wt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return p`
                    color: ${Wt.Neutral[3](e)};
                `;case"selected-month":return p`
                    ${tn("H5","semibold")}
                    color: ${Wt.Primary(e)};
                `}}}
`,sa=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:u,onMonthSelect:f})=>{const h=d((()=>wi.generateMonths(ci(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},g=e=>{const t=e.format("MMMM"),n=(r=e,!wi.isWithinRange(r,s?ci(s):void 0,c?ci(c):void 0,"month"));var r;const o=i.isSame(e,"month")?"selected-month":ci().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||u,month:t,variant:o}};return h.length?t(ia,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,month:i}=g(e);return t(aa,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(e,!r)},{children:t(la,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n},{children:i}))}),i)}))})):null},ca=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return p`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return p`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,da=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?p`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Wt.Shadow.Accent};
                    border: 1px solid ${Wt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?p`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return p`
                    background: ${Wt.Accent.Light[6](e)};
                `;case"selected-year":return p`
                    background: ${Wt.Accent.Light[5](e)};
                    border: 1px solid ${Wt.Primary(e)};
                `}}};
`,ua=h(rn.H5)`
    ${e=>{if(e.$disabledDisplay)return p`
                color: ${Wt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return p`
                    color: ${Wt.Neutral[3](e)};
                `;case"selected-year":return p`
                    ${tn("H5","semibold")}
                    color: ${Wt.Primary(e)};
                `;case"other-decade":return p`
                    color: ${Wt.Neutral[4](e)};
                `}}}
`,fa=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:u,onYearSelect:f})=>{const h=d((()=>wi.generateDecadeOfYears(ci(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},g=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(o=e,!wi.isWithinRange(o,s?ci(s):void 0,c?ci(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":ci().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||u,year:n,variant:a}};return h.length?t(ca,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,year:i}=g(e);return t(da,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(e,!r)},{children:t(ua,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},ha=o.forwardRef(((r,o)=>{var{children:i,initialCalendarDate:c,type:d,minDate:f,maxDate:h,currentFocus:p,selectedStartDate:g,selectedEndDate:m,selectWithinRange:y,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:D,withButton:x,doneButtonDisabled:$,onDismiss:S,showNavigationHeader:F=!0,getLeftArrowDate:E,getRightArrowDate:B,isLeftArrowDisabled:k,isRightArrowDisabled:A,getMonthHeaderLabel:O,getYearHeaderLabel:R}=r,C=w(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,L]=s(Bi.toDayjs(c)),[H,T]=s(Bi.toDayjs(c)),[N,I]=s("default"),Y=l(null),j=l(null),P=l();u(o,(()=>({defaultView(){I("default")},resetView(){const e=Bi.toDayjs(c);L(e),T(e),I("default")},setCalendarDate(e){const t=Bi.toDayjs(e);L(t),T(t)}}))),a((()=>{const e=Bi.toDayjs(c);L(e),T(e)}),[c]),a((()=>{K(H)}),[H]);const z=()=>{"month-options"!==N?(I("month-options"),P.current.focus()):(I("default"),L(H))},W=()=>{"default"!==N?(I("default"),L(H)):I("year-options")},_=()=>{P.current.focus();const e=E?E(M):M.subtract(1,"month");switch(N){case"default":T(e),L(e);break;case"month-options":L((e=>e.subtract(1,"year")));break;case"year-options":L((e=>e.subtract(10,"year")))}},V=()=>{P.current.focus();const e=B?B(M):M.add(1,"month");switch(N){case"default":T(e),L(e);break;case"month-options":L((e=>e.add(1,"year")));break;case"year-options":L((e=>e.add(10,"year")))}},U=e=>{L(e),T(e),x||I("default")},Z=()=>{const e=Bi.toDayjs(c);L(e),T(e),"default"===N?X("reset"):I("default")},K=e=>{D&&D(e)},X=e=>{S&&S(e)},q=()=>{if(!f||b)return!1;const e=ci(f);return"month-options"===N?!wi.isPreviousYearWithinRange(M,e):"year-options"===N?!wi.isPreviousDecadeWithinRange(M,e):k?k(M):!wi.isPreviousMonthWithinRange(M,e)},G=()=>{if(!h||b)return!1;const e=ci(h);return"month-options"===N?!wi.isNextYearWithinRange(M,e):"year-options"===N?!wi.isNextDecadeWithinRange(M,e):A?A(M):!wi.isNextMonthWithinRange(M,e)},J=()=>{if("year-options"===N){const{beginDecade:e,endDecade:t}=wi.getStartEndDecade(M);return`${e} to ${t}`}return R?R(M):M.format("YYYY")},Q=()=>{const r=O?O(M):M.format("MMM");return e(n,{children:[e(Qi,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===N,$visible:"default"===N,id:"month-dropdown",onClick:z},{children:[t(ea,{children:r}),t(Ui,{})]})),e(Qi,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==N,id:"year-dropdown",onClick:W},{children:[t(ea,{children:J()}),t(Ui,{})]}))]})},ee=()=>{switch(N){case"month-options":return t(sa,{type:d,calendarDate:M,currentFocus:p,minDate:f,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:H,isNewSelection:y,onMonthSelect:U,allowDisabledSelection:b});case"year-options":return t(fa,{type:d,calendarDate:M,currentFocus:p,minDate:f,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:H,isNewSelection:y,onYearSelect:U,allowDisabledSelection:b});default:return null}};return e(Zi,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},C,{children:[F&&e(Gi,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Ji,{children:Q()}),e(ta,{children:[t(na,Object.assign({"data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:_},{children:t(_i,{})})),t(na,Object.assign({"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(Vi,{})}))]})]})),t(Ki,{children:(()=>{const r="function"==typeof i?i({calendarDate:H,currentView:N}):i;return e(n,v?{children:["default"===N&&r,ee()]}:{children:[t(Xi,{children:r}),t(qi,Object.assign({$visible:"default"!==N},{children:ee()}))]})})()}),(()=>{if(!x)return;const n=!!("default"===N)&&$;return e(ra,{children:[t(oa,Object.assign({ref:j,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(oa,Object.assign({"data-testid":"done-button",ref:Y,type:"button",onClick:()=>{n||(L(H),"default"===N?X("confirmed"):I("default"))},disabled:n},{children:"Done"}))]})})()]}))})),pa=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ga=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,ma=h.div`
    grid-column: 1 / -1;
    display: flex;
`;h.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const ya=h.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return p`
                    left: 0;
                `;case"right":return p`
                    right: 0;
                `}}}
`,va=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;h(rn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return p`
                ${tn("H5","semibold")};
                color: ${Wt.Accent.Light[2]};
            `;if(t)return p`
                color: ${Wt.Neutral[4]};
            `;if(n)return p`
                ${tn("H5","semibold")};
                color: ${Wt.Primary};
            `;switch(r){case"other-month":return p`
                    color: ${Wt.Neutral[4]};
                `;case"today":return p`
                    color: ${Wt.Neutral[3]};
                `;case"default":return p`
                    color: ${Wt.Neutral[1]};
                `}}}
`,h(ya)`
    ${e=>{const{$selected:t}=e;if(t)return p`
                border-top: 1px solid ${Wt.Accent.Light[4]};
                border-bottom: 1px solid ${Wt.Accent.Light[4]};
                background-color: ${Wt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?p`
                border-top: 1px dashed ${Wt.Accent.Light[4]};
                border-bottom: 1px dashed ${Wt.Accent.Light[4]};
                background-color: ${Wt.Accent.Light[6]};
            `:n?p`
                background-color: ${Wt.Accent.Light[4]};
            `:void 0}}
`,h(va)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?p`
                background: ${Wt.Accent.Light[5]};
                border: 1px solid ${Wt.Primary};
            `:t?p`
                box-shadow: 0px 0px 4px 1px ${Wt.Shadow.Accent};
                border: 1px solid ${Wt.Accent.Light[1]};
                background-color: ${Wt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?p`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Wt.Shadow.Accent};
                    border: 1px solid ${Wt.Accent.Light[1]};
                    background-color: ${Wt.Neutral[8]};
                }
            `:n?p`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?p`
                border: 1px solid ${Wt.Accent.Light[1]};
                background: ${Wt.Accent.Light[4]};

                :hover {
                    background: ${Wt.Accent.Light[4]};
                }
            `:t?p`
                color: ${Wt.Neutral[4]};
            `:"today"===r?p`
                    background: ${Wt.Accent.Light[5]};
                `:void 0}}
`;const ba=e=>{let t=Wt.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Wt.Accent.Light[5];break;case"hover-dash":t=Wt.Accent.Light[6],n=`1px dashed ${Wt.Accent.Light[4](e)}`;break;case"hover-current":t=Wt.Neutral[8],n=`1px solid ${Wt.Primary(e)}`;break;case"selected":t=Wt.Accent.Light[5],n=`1px solid ${Wt.Accent.Light[4](e)}`;break;case"selected-outline":t=Wt.Accent.Light[5],n=`1px solid ${Wt.Primary(e)}`;break;case"overlap":t=Wt.Accent.Light[4],n=`1px solid ${Wt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Wt.Accent.Light[4],n=`1px solid ${Wt.Primary(e)}`}return{color:t,border:n}},Da=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,wa=h.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=ba(e);return p`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,xa=h(wa)`
    left: 0;
`,$a=h(wa)`
    right: 0;
`,Sa=h.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Wt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Fa=h(Sa)`
    left: 0;
`,Ea=h(Sa)`
    right: 0;
`,Ba=h.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=ba(e);return p`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&p`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,ka=h(Ba)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Wt.Shadow.Accent};
    }
`,Aa=h(Ba)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Wt.Shadow.Accent};
    }
`,Oa=h(rn.H5)`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?p`
                    ${tn("H5","semibold")};
                    color: ${Wt.Accent.Light[2]};
                `:p`
                color: ${Wt.Neutral[4]};
            `;switch(n){case"selected":return p`
                    ${tn("H5","semibold")};
                    color: ${Wt.Primary};
                `;case"current":return p`
                    color: ${Wt.Neutral[3]};
                `;case"unavailable":return p`
                    color: ${Wt.Neutral[4]};
                `;default:return p`
                    color: ${Wt.Neutral[1]};
                `}}}
`,Ra=({bgLeft:n,bgRight:r,circleLeft:o,circleRight:i,shadow:a,circleShadow:l,labelType:s,disabled:c,interactive:d,date:u,onSelect:f,onHover:h,onHoverEnd:p})=>e(Da,{children:[t(Fa,{$shadow:n&&a}),t(xa,{$type:n,$shadow:n&&a}),t(ka,{$type:o,$shadow:o&&l}),t(Ea,{$shadow:r&&a}),t($a,{$type:r,$shadow:r&&a}),t(Aa,{$type:i,$shadow:i&&l}),t(Oa,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:d,onClick:()=>{f(u)},onMouseEnter:()=>{h(u)},onMouseLeave:()=>{p&&p(u)}},{children:u.date()}))]}),Ca=({date:e,calendarDate:n,startDate:r,endDate:o,currentFocus:i,hoverDate:a,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,onSelect:f,onHover:h})=>{const p=wi.isDisabledDay(e,c,l,s),g=!p||d,m=()=>{const e=ci(a),t=e.isBefore(o,"day"),n=e.isAfter(r,"day");let l,s,c,d;return"start"===i&&o&&t&&(r&&n?(c=a,d=o):(l=a,s=r||o)),"end"===i&&r&&n&&(o&&t?(c=r,d=a):(l=o||r,s=a)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:d}},y={date:e,calendarDate:n,disabled:p,interactive:g,onSelect:()=>{f(e,!g)},onHover:()=>{h(e.format("YYYY-MM-DD"),!g)}};return t(Ra,Object.assign({},y,(()=>{const t={};if(n.month()!==e.month())t.labelType="unavailable";else if(ci().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(u){const n="end"===i&&r&&e.isBefore(r),a="start"===i&&o&&e.isAfter(o);(n||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},n=e.isSame(r,"day"),i=e.isSame(o,"day");return(r&&n||o&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&o&&e.isBetween(r,o,"day","[]")&&(t.labelType="selected",n||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!a)return;const t={};e.isSame(a,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:o,overlapEnd:i}=m();if(n&&r){if(e.isBetween(n,r,"day","[]")){const o=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",o||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(o&&i){if(e.isBetween(o,i,"day","[]")){const n=e.isSame(o,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};ci.extend(yi);const Ma=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:u,minDate:f,maxDate:h,allowDisabledSelection:p})=>{const g=d((()=>wi.generateDays(n)),[n]),[m,y]=s(""),v=(e,t)=>{t&&!p||l(e)},b=(e,t)=>{t&&!p||(y(e),c(e))},D=()=>{y(""),c("")};return e(pa,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,n)=>t(ga,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:ci(e).format("ddd")}))},`week-day-${n}`))),g.map(((e,l)=>t(ma,Object.assign({onMouseLeave:D},{children:e.map(((e,l)=>t(Ca,{date:e,calendarDate:n,startDate:i,endDate:a,hoverDate:m,currentFocus:r,minDate:f,maxDate:h,disabledDates:o,allowDisabledSelection:p,isNewSelection:u,onSelect:v,onHover:b},`day-${l}`)))}),l)))]}))},La=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:d,onHover:u})=>{const f=wi.isDisabledDay(e,l,i,a),h=!f||s,{start:p,end:g}=r?wi.getFixedRangeStartEnd(Bi.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:y}=o?wi.getFixedRangeStartEnd(Bi.toDayjs(o),c):{start:void 0,end:void 0},v=r&&e.isBetween(p,g,"day","[]"),b=o&&e.isBetween(m,y,"day","[]"),D=v&&e.isSame(p,"day")||b&&e.isSame(m,"day"),w=v&&e.isSame(g,"day")||b&&e.isSame(y,"day"),x=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},$={date:e,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{d(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(Ra,Object.assign({},$,(()=>{const t={};return v||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":ci().isSame(e,"day")&&!f&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&x(t,"hover-dash",n===m,n===y),v&&x(t,"selected",n===p,n===g),v&&b&&x(t,"overlap",D,w),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=p&&m<g&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Ha=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u,numberOfDays:f})=>{const h=d((()=>wi.generateDays(n)),[n]),[p,g]=s(""),m=(e,t)=>{t&&!u||(i(e),e&&!ci(e).isSame(e,"month")&&g(""))},y=(e,t)=>{t&&!u||(g(e),a(e))},v=()=>{g(""),a("")};return e(pa,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(ga,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:ci(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(ma,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(La,{date:e,calendarDate:n,selectedDate:o,hoverDate:p,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:y,numberOfDays:f},`day-${i}`)))}),i)))]}))},Ta=h.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Wt.Neutral[8]};

    ${e=>{if("input"===e.$type)return p`
                border: 1px solid ${Wt.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Na=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:d})=>{const u=wi.isDisabledDay(e,l,i,a),f=!u||s,{start:h,end:p}=wi.getWeekStartEnd(Bi.toDayjs(r)),{start:g,end:m}=wi.getWeekStartEnd(Bi.toDayjs(o)),y=r&&e.isBetween(h,p,"day","[]"),v=o&&e.isBetween(g,m,"day","[]"),b=y&&e.isSame(h)||v&&e.isSame(g),D=y&&e.isSame(p)||v&&e.isSame(m),w={date:e,calendarDate:n,disabled:u,interactive:f,onSelect:()=>{c(e,!f)},onHover:()=>{d(e.format("YYYY-MM-DD"),!f)}};return t(Ra,Object.assign({},w,(()=>{const t={};return y||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":ci().isSame(e,"day")&&!u&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&v?(t="hover-current",e.shadow=!0,e.circleShadow=b||D):y?t="selected-outline":v&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,D?e.circleRight=t:e.bgRight=t),e})()))},Ia=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:u})=>{const f=d((()=>wi.generateDays(n)),[n]),[h,p]=s(""),g=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");i(n),e&&!ci(e).isSame(n,"month")&&p("")},m=(e,t)=>{t&&!u||(p(e),a(e))},y=()=>{p(""),a("")};return e(pa,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(ga,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:ci(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,i)=>t(ma,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Na,{date:e,calendarDate:n,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:g,onHover:m},`day-${i}`)))}),i)))]}))},Ya=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:o,onDismiss:i,value:a,endValue:s,currentFocus:c,withButton:d,variant:f,minDate:h,maxDate:p,allowDisabledSelection:g,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:v,numberOfDays:b},D)=>{const w=l(),x=l(void 0);u(D,(()=>({reset(){w.current.resetView()},setCalendarDate(e){w.current.setCalendarDate(e)}})));const $=e=>{const t=e.format("YYYY-MM-DD");w.current.setCalendarDate(t),F(t)},S=e=>{E(e)},F=e=>{r&&r(e)},E=e=>{o&&o(e)},B=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(Ta,Object.assign({$type:m},{children:t(ha,Object.assign({type:m,ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(f){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!s;break;case"week":e=!a&&!s}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:y,currentFocus:c,selectedStartDate:a,selectedEndDate:s,allowDisabledSelection:g,onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"month")||B(e),x.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(f){case"week":return t(Ia,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:$,onHover:S});case"fixed-range":return t(Ha,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:$,onHover:S,numberOfDays:b});default:return t(Ma,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:s,minDate:h,maxDate:p,isNewSelection:y,allowDisabledSelection:g,onSelect:$,onHover:S})}})(n)}))}))})),ja=o.forwardRef(((e,n)=>t(li,{children:t(Ya,Object.assign({ref:n},e))}))),Pa=h.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Wt.Neutral[5]};
    border-radius: 4px;
    background: ${Wt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Wt.Accent.Light[1]};
        box-shadow: ${Ut.InputBoxShadow};
    }

    ${e=>e.$readOnly?p`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?p`
                background: ${Wt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Wt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?p`
                border: 1px solid ${Wt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Wt.Validation.Red.Border};
                    box-shadow: ${Ut.InputErrorBoxShadow};
                }
            `:void 0}
`,za=h.input`
    ${tn("Body","regular")}
    color: ${Wt.Neutral[1]};
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
        color: ${Wt.Neutral[3]};
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
`,Wa=h.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,_a=h.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return p`
                ${Va}, ${Xa} {
                    color: ${Wt.Neutral[4]};
                }
            `}}
`,Va=h(za)`
    background: transparent;
    text-align: center;
`,Ua=h(Va)`
    width: 2rem;
    margin-right: 0.25rem;
`,Za=h(Va)`
    width: 2.5rem;
`,Ka=h(Va)`
    width: 3rem;
    margin-left: 0.25rem;
`,Xa=h(rn.Body)`
    ${e=>{if(e.$inactive)return p`
                color: ${Wt.Neutral[3](e)};
            `}}
`,qa=h.div`
    ${tn("Body","regular")}
    background-color: ${Wt.Neutral[8]};
    color: ${Wt.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?p`
                background-color: ${Wt.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?p`
                display: none;
            `:void 0}
`;ci.extend(hi);const Ga=o.forwardRef((({disabled:n,readOnly:r,names:o,value:i,focused:c,hoverValue:d,placeholder:f,label:h,onChange:p,onFocus:g,onBlur:m,hideInputKeyboard:y},v)=>{const b=y?"none":"numeric",[D,w,x]=Ri(""),[$,S,F]=Ri(""),[E,B,k]=Ri(""),[A,O]=s("none"),[R,C]=s(!1),M=l(null),L=l(null),H=l(null),T=l(null),[N,I,Y]=V(d);a((()=>{const[e="",t="",n=""]=V(i);w(e),S(t),B(n)}),[i]),a((()=>{c||O("none"),c&&(C(!0),M.current.contains(document.activeElement)||L.current.focus())}),[c]),u(v,(()=>({ref:M,resetPlaceholder(){C(!1)},resetInput(){const[e="",t="",n=""]=V(i);w(e),S(t),B(n)}})),[i]);const j=e=>{var t;e.preventDefault(),null===(t=L.current)||void 0===t||t.focus()},P=e=>{e.target.select();const t=e.target.name;O(t)},z=e=>{const[t,n,r]=o,i={[t]:x.current,[n]:F.current,[r]:k.current},a=e.target.name,l=i[a],s=a!==r?Oi.padValue(l,!0):l;switch(a){case t:i[t]=s,w(s);break;case n:i[n]=s,S(s)}const c=`${i[r]}-${i[n]}-${i[t]}`,d=ci(c,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[n]&&!i[r];d&&l!==s&&p(c),M.current.contains(e.relatedTarget)||(O("none"),null==m||m(u||d))},W=e=>{if(d)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:D,month:$,year:E};switch(t){case o[0]:r.day=n,w(n),2===n.length&&H.current.focus();break;case o[1]:r.month=n,S(n),2===n.length&&T.current.focus();break;case o[2]:r.year=n,B(n)}if(!r.day&&!r.month&&!r.year)return void p("");const i=`${r.year}-${r.month}-${r.day}`;ci(i,"YYYY-MM-DD",!0).isValid()&&p(i)},_=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(A===o[1]&&0===$.length&&L.current.focus(),A===o[2]&&0===E.length&&H.current.focus())};function V(e){if(e){const t=ci(new Date(e));return[Oi.padValue(t.date().toString()),Oi.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(Wa,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(C(!0),M.current.contains(document.activeElement)||L.current.focus())},onFocus:()=>{n||(C(!0),c||g())}},{children:[e(_a,Object.assign({ref:M,$hover:!!d},{children:[t(Ua,{ref:L,name:o[0],maxLength:2,value:null!=N?N:D,onFocus:P,onBlur:z,onChange:W,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:A!==o[0]||r?"DD":""}),t(Xa,Object.assign({$inactive:0===D.length},{children:"/"})),t(Za,{ref:H,name:o[1],maxLength:2,value:null!=I?I:$,onFocus:P,onBlur:z,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:A!==o[1]||r?"MM":""}),t(Xa,Object.assign({$inactive:0===$.length},{children:"/"})),t(Ka,{ref:T,name:o[2],maxLength:4,value:null!=Y?Y:E,onFocus:P,onBlur:z,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:A!==o[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&f)return t(qa,Object.assign({$hide:R,$disabled:n,onMouseDown:j},{children:f}))})()]}))})),Ja=h(Pa)`
    height: 3rem;
`,Qa=e=>{var{minDate:n,maxDate:r,disabled:o,disabledDates:i,error:c,hideInputKeyboard:d,value:u,onChange:f,onFocus:h,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:y,id:v,allowDisabledSelection:b,zIndex:D=50}=e,x=w(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,S]=s(ki.sanitizeInput(u)),[F,E]=s(ki.sanitizeInput(u)),[B,k]=s(void 0),[A,O]=s(!1),R=l(null),C=l();a((()=>{const e=ki.sanitizeInput(u);S(e),E(e)}),[u]);const M=e=>{!b&&ki.isDateDisabled(e,{disabledDates:i,minDate:n,maxDate:r})||(E(e),m||(N(e),S(e),e&&(O(!1),I())))},L=()=>{y||(O(!0),h&&h())},H=e=>{k(e)},T=e=>{switch(e){case"reset":E($);break;case"confirmed":S(F),N(F)}O(!1),I()},N=e=>{f&&f(e)},I=()=>{p&&p()};return t(ri,{enabled:!y&&!o,isOpen:A,renderElement:()=>t(Ja,Object.assign({ref:R,$disabled:o,$readOnly:y,$error:c,id:v,"data-testid":x["data-testid"]},x,{children:t(Ga,{ref:C,disabled:o,onChange:M,onFocus:L,readOnly:y,focused:A,names:["start-day","start-month","start-year"],value:F,hoverValue:B,hideInputKeyboard:d})})),renderDropdown:()=>t(ja,{type:"input",variant:"single",initialCalendarDate:F,withButton:m,value:F,disabledDates:i,minDate:n,maxDate:r,allowDisabledSelection:b,onHover:H,onSelect:M,onDismiss:T,onYearMonthDisplayChange:g}),onClose:()=>{O(!1),I()},onDismiss:()=>{C.current.resetInput(),E($),O(!1),I()},zIndex:D})};export{Qa as DateInput};
//# sourceMappingURL=index.js.map
