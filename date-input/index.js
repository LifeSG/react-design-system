import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useLayoutEffect as i,useEffect as a,useRef as l,useState as s,useCallback as c,useMemo as u,useImperativeHandle as d}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import h,{css as p,keyframes as g}from"styled-components";import{ExternalIcon as m}from"@lifesg/react-icons/external";import*as v from"react-dom";import{createPortal as y}from"react-dom";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as w}from"@lifesg/react-icons/chevron-right";function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var x="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S=Array.isArray,F="object"==typeof x&&x&&x.Object===Object&&x,E="object"==typeof self&&self&&self.Object===Object&&self,B=F||E||Function("return this")(),k=B.Symbol,O=k,A=Object.prototype,R=A.hasOwnProperty,C=A.toString,M=O?O.toStringTag:void 0;var L=function(e){var t=R.call(e,M),n=e[M];try{e[M]=void 0;var r=!0}catch(e){}var o=C.call(e);return r&&(t?e[M]=n:delete e[M]),o},H=Object.prototype.toString;var T=L,N=function(e){return H.call(e)},I=k?k.toStringTag:void 0;var j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?T(e):N(e)};var Y=j,P=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==Y(e)},W=S,_=z,V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/;var Z=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(U.test(e)||!V.test(e)||null!=t&&e in Object(t))};var K=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},X=j,q=K;var G,J=function(e){if(!q(e))return!1;var t=X(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Q=B["__core-js_shared__"],ee=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var te=function(e){return!!ee&&ee in e},ne=Function.prototype.toString;var re=J,oe=te,ie=K,ae=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},le=/^\[object .+?Constructor\]$/,se=Function.prototype,ce=Object.prototype,ue=se.toString,de=ce.hasOwnProperty,fe=RegExp("^"+ue.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var he=function(e){return!(!ie(e)||oe(e))&&(re(e)?fe:le).test(ae(e))},pe=function(e,t){return null==e?void 0:e[t]};var ge=function(e,t){var n=pe(e,t);return he(n)?n:void 0},me=ge(Object,"create"),ve=me;var ye=function(){this.__data__=ve?ve(null):{},this.size=0};var be=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},we=me,De=Object.prototype.hasOwnProperty;var xe=function(e){var t=this.__data__;if(we){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return De.call(t,e)?t[e]:void 0},$e=me,Se=Object.prototype.hasOwnProperty;var Fe=me;var Ee=ye,Be=be,ke=xe,Oe=function(e){var t=this.__data__;return $e?void 0!==t[e]:Se.call(t,e)},Ae=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Re.prototype.clear=Ee,Re.prototype.delete=Be,Re.prototype.get=ke,Re.prototype.has=Oe,Re.prototype.set=Ae;var Ce=Re;var Me=function(){this.__data__=[],this.size=0};var Le=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(Le(e[n][0],t))return n;return-1},Te=He,Ne=Array.prototype.splice;var Ie=function(e){var t=this.__data__,n=Te(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ne.call(t,n,1),--this.size,!0)},je=He;var Ye=function(e){var t=this.__data__,n=je(t,e);return n<0?void 0:t[n][1]},Pe=He;var ze=He;var We=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},_e=Me,Ve=Ie,Ue=Ye,Ze=function(e){return Pe(this.__data__,e)>-1},Ke=We;function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=_e,Xe.prototype.delete=Ve,Xe.prototype.get=Ue,Xe.prototype.has=Ze,Xe.prototype.set=Ke;var qe=Xe,Ge=ge(B,"Map"),Je=Ce,Qe=qe,et=Ge;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var ot=nt;var it=nt;var at=nt;var lt=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},st=function(){this.size=0,this.__data__={hash:new Je,map:new(et||Qe),string:new Je}},ct=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},ut=function(e){return ot(this,e).get(e)},dt=function(e){return it(this,e).has(e)},ft=lt;function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=ct,ht.prototype.get=ut,ht.prototype.has=dt,ht.prototype.set=ft;var pt=ht;function gt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(gt.Cache||pt),n}gt.Cache=pt;var mt=gt;var vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yt=/\\(\\)?/g,bt=function(e){var t=mt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(vt,(function(e,n,r,o){t.push(r?o.replace(yt,"$1"):n||e)})),t}));var wt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Dt=wt,xt=S,$t=z,St=k?k.prototype:void 0,Ft=St?St.toString:void 0;var Et=function e(t){if("string"==typeof t)return t;if(xt(t))return Dt(t,e)+"";if($t(t))return Ft?Ft.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Bt=Et;var kt=S,Ot=Z,At=bt,Rt=function(e){return null==e?"":Bt(e)};var Ct=z;var Mt=function(e,t){return kt(e)?e:Ot(e,t)?[e]:At(Rt(e))},Lt=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ht=function(e,t){for(var n=0,r=(t=Mt(t,e)).length;null!=e&&n<r;)e=e[Lt(t[n++])];return n&&n==r?e:void 0},Tt=Ht;var Nt=$((function(e,t,n){var r=null==e?void 0:Tt(e,t);return void 0===r?n:r}));const It=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,jt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Yt||(Yt={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=jt(Pt,n[Yt.colorScheme]);return n.options&&n.options.color?It(r,e,n.options.color):It(r,e)},Wt={Brand:{1:zt("Brand.1"),2:zt("Brand.2"),3:zt("Brand.3"),4:zt("Brand.4"),5:zt("Brand.5"),6:zt("Brand.6")},Primary:zt("Primary"),PrimaryDark:zt("PrimaryDark"),Secondary:zt("Secondary"),Accent:{Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Neutral:{1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Validation:{Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")},Blue:{Text:zt("Validation.Blue.Text"),Icon:zt("Validation.Blue.Icon"),Border:zt("Validation.Blue.Border"),Background:zt("Validation.Blue.Background")}},Shadow:{Accent:zt("Shadow.Accent"),Red:zt("Shadow.Red"),Elevation:zt("Shadow.Elevation")}},_t={collections:{base:{InputBoxShadow:p`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Vt=e=>t=>{var n;const r=t.theme,o=jt(_t,r[Yt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?It(o,e,r.options.designToken):It(o,e)},Ut={InputBoxShadow:Vt("InputBoxShadow"),InputErrorBoxShadow:Vt("InputErrorBoxShadow"),ElevationBoxShadow:Vt("ElevationBoxShadow"),Table:{Header:Vt("Table.Header"),Cell:{Primary:Vt("Table.Cell.Primary"),Secondary:Vt("Table.Cell.Secondary"),Selected:Vt("Table.Cell.Selected"),Hover:Vt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Vt("Button.Danger.BackgroundColor"),Hover:Vt("Button.Danger.Hover"),Primary:Vt("Button.Danger.Primary"),Border:Vt("Button.Danger.Border")}}},Zt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Kt={collections:{base:{D1:{fontFamily:Zt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Zt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Zt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Zt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Zt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Zt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Zt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Zt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Zt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Zt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=jt(Kt,n[Yt.textStyleScheme]);return n.options&&n.options.textStyle?It(r,e,n.options.textStyle):It(r,e)},qt={D1:{fontFamily:Xt("D1.fontFamily"),fontSize:Xt("D1.fontSize"),fontWeight:Xt("D1.fontWeight"),lineHeight:Xt("D1.lineHeight"),letterSpacing:Xt("D1.letterSpacing")},D2:{fontFamily:Xt("D2.fontFamily"),fontSize:Xt("D2.fontSize"),fontWeight:Xt("D2.fontWeight"),lineHeight:Xt("D2.lineHeight"),letterSpacing:Xt("D2.letterSpacing")},D3:{fontFamily:Xt("D3.fontFamily"),fontSize:Xt("D3.fontSize"),fontWeight:Xt("D3.fontWeight"),lineHeight:Xt("D3.lineHeight"),letterSpacing:Xt("D3.letterSpacing")},D4:{fontFamily:Xt("D4.fontFamily"),fontSize:Xt("D4.fontSize"),fontWeight:Xt("D4.fontWeight"),lineHeight:Xt("D4.lineHeight"),letterSpacing:Xt("D4.letterSpacing")},DBody:{fontFamily:Xt("DBody.fontFamily"),fontSize:Xt("DBody.fontSize"),fontWeight:Xt("DBody.fontWeight"),lineHeight:Xt("DBody.lineHeight"),letterSpacing:Xt("DBody.letterSpacing")},H1:{fontFamily:Xt("H1.fontFamily"),fontSize:Xt("H1.fontSize"),fontWeight:Xt("H1.fontWeight"),lineHeight:Xt("H1.lineHeight"),letterSpacing:Xt("H1.letterSpacing")},H2:{fontFamily:Xt("H2.fontFamily"),fontSize:Xt("H2.fontSize"),fontWeight:Xt("H2.fontWeight"),lineHeight:Xt("H2.lineHeight"),letterSpacing:Xt("H2.letterSpacing")},H3:{fontFamily:Xt("H3.fontFamily"),fontSize:Xt("H3.fontSize"),fontWeight:Xt("H3.fontWeight"),lineHeight:Xt("H3.lineHeight"),letterSpacing:Xt("H3.letterSpacing")},H4:{fontFamily:Xt("H4.fontFamily"),fontSize:Xt("H4.fontSize"),fontWeight:Xt("H4.fontWeight"),lineHeight:Xt("H4.lineHeight"),letterSpacing:Xt("H4.letterSpacing")},H5:{fontFamily:Xt("H5.fontFamily"),fontSize:Xt("H5.fontSize"),fontWeight:Xt("H5.fontWeight"),lineHeight:Xt("H5.lineHeight"),letterSpacing:Xt("H5.letterSpacing")},H6:{fontFamily:Xt("H6.fontFamily"),fontSize:Xt("H6.fontSize"),fontWeight:Xt("H6.fontWeight"),lineHeight:Xt("H6.lineHeight"),letterSpacing:Xt("H6.letterSpacing")},Body:{fontFamily:Xt("Body.fontFamily"),fontSize:Xt("Body.fontSize"),fontWeight:Xt("Body.fontWeight"),lineHeight:Xt("Body.lineHeight"),letterSpacing:Xt("Body.letterSpacing")},BodySmall:{fontFamily:Xt("BodySmall.fontFamily"),fontSize:Xt("BodySmall.fontSize"),fontWeight:Xt("BodySmall.fontWeight"),lineHeight:Xt("BodySmall.lineHeight"),letterSpacing:Xt("BodySmall.letterSpacing")},XSmall:{fontFamily:Xt("XSmall.fontFamily"),fontSize:Xt("XSmall.fontSize"),fontWeight:Xt("XSmall.fontWeight"),lineHeight:Xt("XSmall.lineHeight"),letterSpacing:Xt("XSmall.letterSpacing")}},Gt=e=>{switch(e){case 700:case"bold":return Zt.Bold;case 600:case"semibold":return Zt.Semibold;case 300:case"light":return Zt.Light;case 400:case"regular":return Zt.Regular;default:return""}},Jt=(e,t)=>n=>{var r;const o=qt[e].fontFamily(n),i=qt[e].fontWeight(n);return Object.values(Zt).includes(o)?p`
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
`,ln=n=>{var{external:r=!1,children:o}=n,i=D(n,["external","children"]);return e(on,Object.assign({},i,{children:[o,r&&t(an,{})]}))};var sn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(sn||(sn={}));const cn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",un=e=>"small"===e?2.5:3;h.div`
    position: relative;
    width: 100%;
    ${e=>{const t=un(e.$variant);return p`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const dn=p`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>un(e.$variant)}rem - 2px);
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
`,fn=h.button`
    ${dn}
    cursor: pointer;
`;h.div`
    ${dn}
`;const hn=g`
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
                animation: ${hn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?p`
                background: ${Wt.Neutral[6](e)};

                ${fn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Wt.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?p`
                border: none;
                background: transparent !important;

                ${fn} {
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
    ${e=>{let t=qt.Body.fontSize;return"small"===e.$variant&&(t=qt.BodySmall.fontSize),p`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,h.div`
    height: 1px;
    background: ${Wt.Neutral[5]};
    margin: 0 0.5rem;
`,h.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const pn=h.div`
    ${e=>tn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return p`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;function gn(e){return yn(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function vn(e){var t;return null==(t=(yn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function yn(e){return e instanceof Node||e instanceof mn(e).Node}function bn(e){return e instanceof Element||e instanceof mn(e).Element}function wn(e){return e instanceof HTMLElement||e instanceof mn(e).HTMLElement}function Dn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot)}function xn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Bn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function $n(e){return["table","td","th"].includes(gn(e))}function Sn(e){const t=Fn(),n=Bn(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Fn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function En(e){return["html","body","#document"].includes(gn(e))}function Bn(e){return mn(e).getComputedStyle(e)}function kn(e){return bn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function On(e){if("html"===gn(e))return e;const t=e.assignedSlot||e.parentNode||Dn(e)&&e.host||vn(e);return Dn(t)?t.host:t}function An(e){const t=On(e);return En(t)?e.ownerDocument?e.ownerDocument.body:e.body:wn(t)&&xn(t)?t:An(t)}function Rn(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=An(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=mn(o);return i?t.concat(a,a.visualViewport||[],xn(o)?o:[],a.frameElement&&n?Rn(a.frameElement):[]):t.concat(o,Rn(o,[],n))}function Cn(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function Mn(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Dn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ln(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}function Hn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function Tn(e){return!Hn().includes("jsdom/")&&(!In()&&0===e.width&&0===e.height||In()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function Nn(){return/apple/i.test(navigator.vendor)}function In(){const e=/android/i;return e.test(Ln())||e.test(Hn())}function jn(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Yn(e){return(null==e?void 0:e.ownerDocument)||document}function Pn(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function zn(e){return"composedPath"in e?e.composedPath()[0]:e.target}h(pn)`
    color: ${Wt.Neutral[3]};
`;const Wn="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function _n(e){return wn(e)&&e.matches(Wn)}function Vn(e){e.preventDefault(),e.stopPropagation()}const Un=Math.min,Zn=Math.max,Kn=Math.round,Xn=Math.floor,qn=e=>({x:e,y:e}),Gn={left:"right",right:"left",bottom:"top",top:"bottom"},Jn={start:"end",end:"start"};function Qn(e,t,n){return Zn(e,Un(t,n))}function er(e,t){return"function"==typeof e?e(t):e}function tr(e){return e.split("-")[0]}function nr(e){return e.split("-")[1]}function rr(e){return"x"===e?"y":"x"}function or(e){return"y"===e?"height":"width"}function ir(e){return["top","bottom"].includes(tr(e))?"y":"x"}function ar(e){return rr(ir(e))}function lr(e){return e.replace(/start|end/g,(e=>Jn[e]))}function sr(e){return e.replace(/left|right|bottom|top/g,(e=>Gn[e]))}function cr(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function ur(e,t,n){let{reference:r,floating:o}=e;const i=ir(t),a=ar(t),l=or(a),s=tr(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(s){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(nr(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function dr(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=er(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===d?"reference":"floating":d],m=cr(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:s})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=cr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:y,strategy:s}):v);return{top:(m.top-w.top+p.top)/b.y,bottom:(w.bottom-m.bottom+p.bottom)/b.y,left:(m.left-w.left+p.left)/b.x,right:(w.right-m.right+p.right)/b.x}}function fr(e){const t=Bn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=wn(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Kn(n)!==i||Kn(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function hr(e){return bn(e)?e:e.contextElement}function pr(e){const t=hr(e);if(!wn(t))return qn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=fr(t);let a=(i?Kn(n.width):n.width)/r,l=(i?Kn(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const gr=qn(0);function mr(e){const t=mn(e);return Fn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:gr}function vr(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=hr(e);let a=qn(1);t&&(r?bn(r)&&(a=pr(r)):a=pr(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==mn(e))&&t}(i,n,r)?mr(i):qn(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=mn(i),t=r&&bn(r)?mn(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=pr(o),t=o.getBoundingClientRect(),r=Bn(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,u*=e.x,d*=e.y,s+=i,c+=a,n=mn(o),o=n.frameElement}}return cr({width:u,height:d,x:s,y:c})}const yr=[":popover-open",":modal"];function br(e){return yr.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function wr(e){return vr(vn(e)).left+kn(e).scrollLeft}function Dr(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=mn(e),r=vn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const e=Fn();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=function(e){const t=vn(e),n=kn(e),r=e.ownerDocument.body,o=Zn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Zn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+wr(e);const l=-n.scrollTop;return"rtl"===Bn(r).direction&&(a+=Zn(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(vn(e));else if(bn(t))r=function(e,t){const n=vr(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=wn(e)?pr(e):qn(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=mr(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return cr(r)}function xr(e,t){const n=On(e);return!(n===t||!bn(n)||En(n))&&("fixed"===Bn(n).position||xr(n,t))}function $r(e,t,n){const r=wn(t),o=vn(t),i="fixed"===n,a=vr(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=qn(0);if(r||!r&&!i)if(("body"!==gn(t)||xn(o))&&(l=kn(t)),r){const e=vr(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=wr(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function Sr(e){return"static"===Bn(e).position}function Fr(e,t){return wn(e)&&"fixed"!==Bn(e).position?t?t(e):e.offsetParent:null}function Er(e,t){const n=mn(e);if(br(e))return n;if(!wn(e)){let t=On(e);for(;t&&!En(t);){if(bn(t)&&!Sr(t))return t;t=On(t)}return n}let r=Fr(e,t);for(;r&&$n(r)&&Sr(r);)r=Fr(r,t);return r&&En(r)&&Sr(r)&&!Sn(r)?n:r||function(e){let t=On(e);for(;wn(t)&&!En(t);){if(Sn(t))return t;t=On(t)}return null}(e)||n}const Br={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=vn(r),l=!!t&&br(t.floating);if(r===a||l&&i)return n;let s={scrollLeft:0,scrollTop:0},c=qn(1);const u=qn(0),d=wn(r);if((d||!d&&!i)&&(("body"!==gn(r)||xn(a))&&(s=kn(r)),wn(r))){const e=vr(r);c=pr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:vn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?br(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Rn(e,[],!1).filter((e=>bn(e)&&"body"!==gn(e))),o=null;const i="fixed"===Bn(e).position;let a=i?On(e):e;for(;bn(a)&&!En(a);){const t=Bn(a),n=Sn(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||xn(a)&&!n&&xr(e,a))?r=r.filter((e=>e!==a)):o=t,a=On(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=Dr(t,n,o);return e.top=Zn(r.top,e.top),e.right=Un(r.right,e.right),e.bottom=Un(r.bottom,e.bottom),e.left=Zn(r.left,e.left),e}),Dr(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Er,getElementRects:async function(e){const t=this.getOffsetParent||Er,n=this.getDimensions,r=await n(e.floating);return{reference:$r(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=fr(e);return{width:t,height:n}},getScale:pr,isElement:bn,isRTL:function(e){return"rtl"===Bn(e).direction}};function kr(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=hr(e),u=o||i?[...c?Rn(c):[],...Rn(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&l?function(e,t){let n,r=null;const o=vn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h={rootMargin:-Xn(u)+"px "+-Xn(o.clientWidth-(c+d))+"px "+-Xn(o.clientHeight-(u+f))+"px "+-Xn(c)+"px",threshold:Zn(0,Un(1,s))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==s){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!s&&p.observe(c),p.observe(t));let g=s?vr(e):null;return s&&function t(){const r=vr(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,s&&cancelAnimationFrame(f)}}const Or=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=tr(n),l=nr(n),s="y"===ir(n),c=["left","top"].includes(a)?-1:1,u=i&&s?-1:1,d=er(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),s?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}}},Ar=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=er(e,t),c={x:n,y:r},u=await dr(t,s),d=ir(tr(o)),f=rr(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=Qn(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=Qn(p+u["y"===d?"top":"left"],p,p-u[e])}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},Rr=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:s,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=er(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=tr(o),y=tr(l)===l,b=await(null==s.isRTL?void 0:s.isRTL(c.floating)),w=f||(y||!g?[sr(l)]:function(e){const t=sr(e);return[lr(e),t,lr(t)]}(l));f||"none"===p||w.push(...function(e,t,n,r){const o=nr(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(tr(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(lr)))),i}(l,g,p,b));const D=[l,...w],x=await dr(t,m),$=[];let S=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(x[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=nr(e),o=ar(e),i=or(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=sr(a)),[a,sr(a)]}(o,a,b);$.push(x[e[0]],x[e[1]])}if(S=[...S,{placement:o,overflows:$}],!$.every((e=>e<=0))){var F,E;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let n=null==(E=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:E.placement;if(!n)switch(h){case"bestFit":{var B;const e=null==(B=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:B[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},Cr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=er(e,t),s=await dr(t,l),c=tr(n),u=nr(n),d="y"===ir(n),{width:f,height:h}=r.floating;let p,g;"top"===c||"bottom"===c?(p=c,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,p="end"===u?"top":"bottom");const m=h-s.top-s.bottom,v=f-s.left-s.right,y=Un(h-s[p],m),b=Un(f-s[g],v),w=!t.middlewareData.shift;let D=y,x=b;if(d?x=u||w?Un(b,v):v:D=u||w?Un(y,m):m,w&&!u){const e=Zn(s.left,0),t=Zn(s.right,0),n=Zn(s.top,0),r=Zn(s.bottom,0);d?x=f-2*(0!==e||0!==t?e+t:Zn(s.left,s.right)):D=h-2*(0!==n||0!==r?n+r:Zn(s.top,s.bottom))}await a({...t,availableWidth:x,availableHeight:D});const $=await o.getDimensions(i.floating);return f!==$.width||h!==$.height?{reset:{rects:!0}}:{}}}},Mr=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=er(e,t),u={x:n,y:r},d=ir(o),f=rr(d);let h=u[f],p=u[d];const g=er(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(s){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var v,y;const e="y"===f?"width":"height",t=["top","left"].includes(tr(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(v=a.offset)?void 0:v[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(y=a.offset)?void 0:y[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},Lr=(e,t,n)=>{const r=new Map,o={platform:Br,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=ur(c,r,s),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:v,data:y,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=v?v:d,h={...h,[i]:{...h[i],...y}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=ur(c,f,s))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var Hr="undefined"!=typeof document?i:a;function Tr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Tr(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Tr(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Nr(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ir(e,t){const n=Nr(e);return Math.round(t*n)/n}function jr(e){const t=r.useRef(e);return Hr((()=>{t.current=e})),t}const Yr=(e,t)=>({...Ar(e),options:[e,t]}),Pr=(e,t)=>({...Mr(e),options:[e,t]}),zr=(e,t)=>({...Rr(e),options:[e,t]}),Wr=(e,t)=>({...Cr(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var _r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Vr="undefined"==typeof Element,Ur=Vr?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Zr=!Vr&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},Kr=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Xr=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Kr(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),s=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{Ur.call(a,_r)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!Kr(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},qr=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Gr=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!qr(e)?0:e.tabIndex},Jr=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Qr=function(e){return"INPUT"===e.tagName},eo=function(e){return function(e){return Qr(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Zr(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},to=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},no=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=Ur.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Ur.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return to(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=Zr(e);if(a&&!a.shadowRoot&&!0===r(a))return to(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&Zr(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var s,c,u;l=!(null===(c=a=null===(s=i=Zr(a))||void 0===s?void 0:s.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},ro=function(e,t){return!(t.disabled||Kr(t)||function(e){return Qr(e)&&"hidden"===e.type}(t)||no(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!Ur.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},oo=function(e,t){return!(eo(t)||Gr(t)<0||!ro(e,t))},io=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},ao=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=Gr(e);return n<0&&t&&!qr(e)?0:n}(a,i),s=i?e(t.candidates):a;0===l?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:s})})),r.sort(Jr).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},lo=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Xr([e],t.includeContainer,{filter:oo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:io}):function(e,t,n){if(Kr(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(_r));return t&&Ur.call(e,_r)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,oo.bind(null,t)),ao(n)},so=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==Ur.call(e,_r)&&oo(t,e)};const co={...r},uo=co.useInsertionEffect||(e=>e());function fo(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return uo((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let ho=0;function po(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(ho);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():ho=requestAnimationFrame(i)}var go="undefined"!=typeof document?i:a;function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}let vo=!1,yo=0;const bo=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+yo++;const wo=co.useId||function(){const[e,t]=r.useState((()=>vo?bo():void 0));return go((()=>{null==e&&t(bo())}),[]),r.useEffect((()=>{vo=!0}),[]),e};let Do;"production"!==process.env.NODE_ENV&&(Do=new Set);const xo=r.createContext(null),$o=r.createContext(null),So=()=>{var e;return(null==(e=r.useContext(xo))?void 0:e.id)||null},Fo=()=>r.useContext($o);function Eo(e){return"data-floating-ui-"+e}function Bo(e){const t=l(e);return go((()=>{t.current=e})),t}function ko(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let Oo=new WeakMap,Ao=new WeakSet,Ro={},Co=0;const Mo=e=>e&&(e.host||Mo(e.parentNode)),Lo=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=Mo(t);return e.contains(n)?n:null})).filter((e=>null!=e));function Ho(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=Yn(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Lo(t,e),l=new Set,s=new Set(a),c=[];Ro[o]||(Ro[o]=new WeakMap);const u=Ro[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!s.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==gn(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(Oo.get(t)||0)+1,a=(u.get(t)||0)+1;Oo.set(t,r),u.set(t,a),c.push(t),1===r&&n&&Ao.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),Co++,()=>{c.forEach((e=>{const t=(Oo.get(e)||0)-1,n=(u.get(e)||0)-1;Oo.set(e,t),u.set(e,n),t||(!Ao.has(e)&&i&&e.removeAttribute(i),Ao.delete(e)),n||e.removeAttribute(o)})),Co--,Co||(Oo=new WeakMap,Oo=new WeakMap,Ao=new WeakSet,Ro={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const To=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function No(e,t){const n=lo(e,To());"prev"===t&&n.reverse();const r=n.indexOf(Cn(Yn(e)));return n.slice(r+1)[0]}function Io(){return No(document.body,"next")}function jo(){return No(document.body,"prev")}function Yo(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!Mn(n,r)}function Po(e){lo(e,To()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function zo(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const Wo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function _o(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const Vo=r.forwardRef((function(e,t){const[n,o]=r.useState();go((()=>(Nn()&&o("button"),document.addEventListener("keydown",_o),()=>{document.removeEventListener("keydown",_o)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Eo("focus-guard")]:"",style:Wo};return r.createElement("span",mo({},e,i))})),Uo=r.createContext(null),Zo=Eo("portal");function Ko(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=wo(),i=Xo(),[a,l]=r.useState(null),s=r.useRef(null);return go((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{s.current=null}))}),[a]),go((()=>{if(!o)return;if(s.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(Zo,""),e.appendChild(n),s.current=n,l(n)}),[t,o]),go((()=>{if(!o)return;if(s.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!bn(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(Zo,""),e=r||e,e.appendChild(a),s.current=a,l(a)}),[t,n,o,i]),a}({id:n,root:o}),[l,s]=r.useState(null),c=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&Yo(e)){("focusin"===e.type?zo:Po)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(Uo.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:s})),[i,a])},h&&a&&r.createElement(Vo,{"data-type":"outside",ref:c,onFocus:e=>{if(Yo(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=jo()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:Wo}),a&&y(t,a),h&&a&&r.createElement(Vo,{"data-type":"outside",ref:u,onFocus:e=>{if(Yo(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=Io()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const Xo=()=>r.useContext(Uo),qo=20;let Go=[];function Jo(e){Go=Go.filter((e=>e.isConnected));let t=e;if(t&&"body"!==gn(t)){if(!so(t,To())){const e=lo(t,To())[0];e&&(t=e)}Go.push(t),Go.length>qo&&(Go=Go.slice(-qo))}}function Qo(){return Go.slice().reverse().find((e=>e.isConnected))}const ei=r.forwardRef((function(e,t){return r.createElement("button",mo({},e,{type:"button",ref:t,tabIndex:-1,style:Wo}))}));function ti(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:s=!0,modal:c=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:v,elements:{domReference:y,floating:b}}=t,w="number"==typeof l&&l<0,D=!!(x=y)&&"combobox"===x.getAttribute("role")&&_n(x)&&w;var x;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,S=Bo(i),F=Bo(l),E=Bo(s),B=Fo(),k=Xo(),O=r.useRef(null),A=r.useRef(null),R=r.useRef(!1),C=r.useRef(!1),M=null!=k,L=r.useCallback((function(e){return void 0===e&&(e=b),e?lo(e,To()):[]}),[b]),H=r.useCallback((e=>{const t=L(e);return S.current.map((e=>y&&"reference"===e?y:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[y,b,S,L]);function T(e){return!o&&u&&c?r.createElement(ei,{ref:"start"===e?O:A,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){Mn(b,Cn(Yn(b)))&&0===L().length&&!D&&Vn(e);const t=H(),n=zn(e);"reference"===S.current[0]&&n===y&&(Vn(e),e.shiftKey?po(t[t.length-1]):po(t[1])),"floating"===S.current[1]&&n===b&&e.shiftKey&&(Vn(e),po(t[0]))}}const t=Yn(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,y,b,c,S,D,L,H]),r.useEffect((()=>{if(!o&&d)return b&&wn(y)?(y.addEventListener("focusout",t),y.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{y.removeEventListener("focusout",t),y.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){C.current=!0,setTimeout((()=>{C.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(Mn(y,t)||Mn(b,t)||Mn(t,b)||Mn(null==k?void 0:k.portalNode,t)||null!=t&&t.hasAttribute(Eo("focus-guard"))||B&&(ko(B.nodesRef.current,p).find((e=>{var n,r;return Mn(null==(n=e.context)?void 0:n.elements.floating,t)||Mn(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(B.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!C.current&&t!==Qo()&&(R.current=!0,g(!1,e))}))}}),[o,y,b,c,p,B,k,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==k||null==(e=k.portalNode)?void 0:e.querySelectorAll("["+Eo("portal")+"]"))||[]);if(b){const e=[b,...t,O.current,A.current,S.current.includes("reference")||D?y:null].filter((e=>null!=e)),n=c||D?Ho(e,$,!$):Ho(e);return()=>{n()}}}),[o,y,b,c,S,k,D,$]),go((()=>{if(o||!b)return;const e=Cn(Yn(b));queueMicrotask((()=>{const t=H(b),n=F.current,r=("number"==typeof n?t[n]:n.current)||b,o=Mn(b,e);w||o||!f||po(r,{preventScroll:r===b})}))}),[o,f,b,w,H,F]),go((()=>{if(o||!b)return;let e=!1;const t=Yn(b),n=Cn(t);let r=v.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&Jo(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(In()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||Tn(i)))}return Jo(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=Cn(t),o=Mn(b,n)||B&&ko(B.nodesRef.current,p).some((e=>{var t;return Mn(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&Jo(h.domReference.current);const a=Qo();E.current&&!R.current&&wn(a)&&(a===n||n===t.body||o)&&po(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,E,v,h,m,B,p]),go((()=>{if(!o&&k)return k.setFocusManagerState({modal:c,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{k.setFocusManagerState(null)}}),[o,k,c,f,g,h,d]),go((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");S.current.includes("floating")||Cn(Yn(b))!==h.domReference.current&&0===L().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,S,L,w]);const N=!o&&$&&(M||c);return r.createElement(r.Fragment,null,N&&r.createElement(Vo,{"data-type":"inside",ref:null==k?void 0:k.beforeInsideRef,onFocus:e=>{if(c){const e=H();po("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(R.current=!1,Yo(e,k.portalNode)){const e=Io()||y;null==e||e.focus()}else{var t;null==(t=k.beforeOutsideRef.current)||t.focus()}}}),!D&&T("start"),n,T("end"),N&&r.createElement(Vo,{"data-type":"inside",ref:null==k?void 0:k.afterInsideRef,onFocus:e=>{if(c)po(H()[0]);else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(d&&(R.current=!0),Yo(e,k.portalNode)){const e=jo()||y;null==e||e.focus()}else{var t;null==(t=k.afterOutsideRef.current)||t.focus()}}}))}function ni(e){return wn(e.target)&&"BUTTON"===e.target.tagName}function ri(e){return _n(e)}const oi={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},ii={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},ai=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function li(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=wo(),a=r.useRef({}),[l]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),s=null!=So();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!bn(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Do)&&e.has(o)||(null==(i=Do)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=r.useState(o.reference),d=fo(((e,t,r)=>{a.current.openEvent=e?t:void 0,l.emit("openchange",{open:e,event:t,reason:r,nested:s}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:c||o.reference||null,floating:o.floating||null,domReference:o.reference})),[c,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:l,floatingId:i,refs:f})),[t,d,h,l,i,f])}function si(e){void 0===e&&(e={});const{nodeId:t}=e,n=li({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,l]=r.useState(null),[s,c]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=Fo();go((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);Tr(h,o)||p(o);const[g,m]=r.useState(null),[y,b]=r.useState(null),w=r.useCallback((e=>{e!==S.current&&(S.current=e,m(e))}),[]),D=r.useCallback((e=>{e!==F.current&&(F.current=e,b(e))}),[]),x=a||g,$=l||y,S=r.useRef(null),F=r.useRef(null),E=r.useRef(d),B=null!=c,k=jr(c),O=jr(i),A=r.useCallback((()=>{if(!S.current||!F.current)return;const e={placement:t,strategy:n,middleware:h};O.current&&(e.platform=O.current),Lr(S.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!Tr(E.current,t)&&(E.current=t,v.flushSync((()=>{f(t)})))}))}),[h,t,n,O]);Hr((()=>{!1===u&&E.current.isPositioned&&(E.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);Hr((()=>(R.current=!0,()=>{R.current=!1})),[]),Hr((()=>{if(x&&(S.current=x),$&&(F.current=$),x&&$){if(k.current)return k.current(x,$,A);A()}}),[x,$,A,k,B]);const C=r.useMemo((()=>({reference:S,floating:F,setReference:w,setFloating:D})),[w,D]),M=r.useMemo((()=>({reference:x,floating:$})),[x,$]),L=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Ir(M.floating,d.x),r=Ir(M.floating,d.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...Nr(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,M.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:A,refs:C,elements:M,floatingStyles:L})),[d,A,C,M,L])}({...e,elements:{...i,...s&&{reference:s}}}),p=r.useCallback((e=>{const t=bn(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(bn(e)||null===e)&&(d.current=e,l(e)),(bn(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!bn(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),y=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),b=r.useMemo((()=>({...h,...o,refs:m,elements:y,nodeId:t})),[h,m,y,t,o]);return go((()=>{o.dataRef.current.floatingContext=b;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=b)})),r.useMemo((()=>({...h,context:b,refs:m,elements:y})),[h,m,y,b])}function ci(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,events:i,dataRef:a,elements:{domReference:l}}=e,{enabled:s=!0,visibleOnly:c=!0}=t,u=r.useRef(!1),d=r.useRef(),f=r.useRef(!0);return r.useEffect((()=>{if(!s)return;const e=mn(l);function t(){!n&&wn(l)&&l===Cn(Yn(l))&&(u.current=!0)}function r(){f.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}}),[l,n,s]),r.useEffect((()=>{if(s)return i.on("openchange",e),()=>{i.off("openchange",e)};function e(e){let{reason:t}=e;"reference-press"!==t&&"escape-key"!==t||(u.current=!0)}}),[i,s]),r.useEffect((()=>()=>{clearTimeout(d.current)}),[]),r.useMemo((()=>s?{reference:{onPointerDown(e){Tn(e.nativeEvent)||(f.current=!1)},onMouseLeave(){u.current=!1},onFocus(e){if(u.current)return;const t=zn(e.nativeEvent);if(c&&bn(t))try{if(Nn()&&Ln().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints)throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!f.current&&!_n(t))return}o(!0,e.nativeEvent,"focus")},onBlur(e){u.current=!1;const t=e.relatedTarget,n=bn(t)&&t.hasAttribute(Eo("focus-guard"))&&"outside"===t.getAttribute("data-type");d.current=window.setTimeout((()=>{var r;const i=Cn(l?l.ownerDocument:document);(t||i!==l)&&(Mn(null==(r=a.current.floatingContext)?void 0:r.refs.floating.current,i)||Mn(l,i)||n||o(!1,e.nativeEvent,"focus"))}))}}}:{}),[s,c,a,l,o])}const ui="active",di="selected";function fi(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[ui]:t,[di]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[ui,di].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const hi=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function pi(e,t){return"function"==typeof e?e(t):e}function gi(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,s]=r.useState("unmounted"),c=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return c||"close"!==l||s("unmounted"),go((()=>{if(o){if(n){s("initial");const e=requestAnimationFrame((()=>{s("open")}));return()=>{cancelAnimationFrame(e)}}s("close")}}),[n,o]),{isMounted:c,status:l}}const mi=({enabled:o,isOpen:i,onOpen:a,onClose:s,onDismiss:c,renderElement:u,renderDropdown:d,zIndex:f=50})=>{const h=l(null),{refs:p,floatingStyles:g,context:m}=si({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!i?null==a||a():!e&&i&&(null==s||s())},whileElementsMounted:kr,placement:"bottom-start",middleware:[(v=16,{...Or(v),options:[v,y]}),zr(),Yr({limiter:Pr()}),Wr({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}})]});var v,y;const{isMounted:b,styles:w}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,s=e.placement,c=s.split("-")[0],u=r.useMemo((()=>({side:c,placement:s})),[c,s]),d="number"==typeof l,f=(d?l:l.open)||0,h=(d?l:l.close)||0,[p,g]=r.useState((()=>({...pi(a,u),...pi(n,u)}))),{isMounted:m,status:v}=gi(e,{duration:l}),y=Bo(n),b=Bo(o),w=Bo(i),D=Bo(a);return go((()=>{const e=pi(y.current,u),t=pi(w.current,u),n=pi(D.current,u),r=pi(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===v&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===v&&g({transitionProperty:Object.keys(r).map(hi).join(","),transitionDuration:f+"ms",...n,...r}),"close"===v){const r=t||e;g({transitionProperty:Object.keys(r).map(hi).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,y,b,D,f,v,u]),{isMounted:m,styles:p}}(m,{initial:{opacity:0},open:{opacity:1},duration:300}),D=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(jn(f.current,!0)&&u||"click"!==s&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===s&&f.current?f.current=void 0:jn(f.current,!0)&&u||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||ni(e)||(" "!==e.key||ri(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||ni(e)||ri(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[l,i,s,u,d,a,c,n,o])}(m,{enabled:o}),x=ci(m,{enabled:o}),$=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:l},dataRef:s}=e,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:v}=t,y=Fo(),b=fo("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,D=r.useRef(!1),x=r.useRef(!1),{escapeKey:$,outsidePress:S}=ai(m),{escapeKey:F,outsidePress:E}=ai(v),B=fo((e=>{var t;if(!n||!c||!u||"Escape"!==e.key)return;const r=null==(t=s.current.floatingContext)?void 0:t.nodeId,i=y?ko(y.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),k=fo((e=>{var t;const n=()=>{var t;B(e),null==(t=zn(e))||t.removeEventListener("keydown",n)};null==(t=zn(e))||t.addEventListener("keydown",n)})),O=fo((e=>{var t;const n=D.current;D.current=!1;const r=x.current;if(x.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=zn(e),c="["+Eo("inert")+"]",u=Yn(l).querySelectorAll(c);let d=bn(i)?i:null;for(;d&&!En(d);){const e=On(d);if(En(e)||!bn(e))break;d=e}if(u.length&&bn(i)&&!i.matches("html,body")&&!Mn(i,l)&&Array.from(u).every((e=>!Mn(d,e))))return;if(wn(i)&&l){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===Bn(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=s.current.floatingContext)?void 0:t.nodeId,p=y&&ko(y.nodesRef.current,h).some((t=>{var n;return Pn(e,null==(n=t.context)?void 0:n.elements.floating)}));if(Pn(e,l)||Pn(e,a)||p)return;const g=y?ko(y.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),A=fo((e=>{var t;const n=()=>{var t;O(e),null==(t=zn(e))||t.removeEventListener(f,n)};null==(t=zn(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!c)return;function e(e){o(!1,e,"ancestor-scroll")}s.current.__escapeKeyBubbles=$,s.current.__outsidePressBubbles=S;const t=Yn(l);u&&t.addEventListener("keydown",F?k:B,F),w&&t.addEventListener(f,E?A:O,E);let r=[];return g&&(bn(a)&&(r=Rn(a)),bn(l)&&(r=r.concat(Rn(l))),!bn(i)&&i&&i.contextElement&&(r=r.concat(Rn(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",F?k:B,F),w&&t.removeEventListener(f,E?A:O,E),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[s,l,a,i,u,w,f,n,o,g,c,$,S,B,F,k,O,E,A]),r.useEffect((()=>{D.current=!1}),[w,f]),r.useMemo((()=>c?{reference:{onKeyDown:B,[oi[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:B,onMouseDown(){x.current=!0},onMouseUp(){x.current=!0},[ii[f]]:()=>{D.current=!0}}}:{}),[c,h,f,p,o,B])}(m,{enabled:o}),{getReferenceProps:S,getFloatingProps:F}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>fi(t,e,"reference")),t),o=r.useCallback((t=>fi(t,e,"floating")),t),i=r.useCallback((t=>fi(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([D,x,$]);return e(n,{children:[t("div",Object.assign({ref:p.setReference},S(),{children:u()})),b&&t(Ko,{children:t(ti,Object.assign({context:m,modal:!1,initialFocus:h,returnFocus:!1},{children:t("div",Object.assign({ref:p.setFloating,style:Object.assign(Object.assign({},g),{zIndex:f})},F(),{children:t("div",Object.assign({ref:h,style:Object.assign({},w),inert:w.opacity<1?"":void 0},{children:d()}))}))}))})]})},vi={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},yi=e=>Object.keys(vi).reduce(((t,n)=>{const r=vi[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),bi=yi("max-width"),wi=(yi("min-width"),h.div`
    max-width: 41rem;
    min-width: 21rem;

    ${bi.mobileL} {
        min-width: 17.5rem;
    }
`);var Di={exports:{}};Di.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var D="$isDayjsObject",x=function(e){return e instanceof E||!(!e||!e[D])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},S=function(e,t){if(x(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new E(n)},F=y;F.l=$,F.i=x,F.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var v=m.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return F},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return S(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<S(e)},v.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),h=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?v-w:v+(6-w),m);case l:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case i:return p(y+"Seconds",2);case o:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,s=F.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[F.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=F.p(u),g=function(e){var t=S(h);return F.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,v=this.$d.getTime()+r*m;return F.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return F.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return l+1;case"MM":return F.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return F.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return F.s(a,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,g=this,m=F.p(f),v=S(r),y=(v.utcOffset()-this.utcOffset())*t,b=this-v,w=function(){return F.m(g,v)};switch(m){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case s:p=(b-y)/6048e5;break;case l:p=(b-y)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:F.a(p)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return w[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return F.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),B=E.prototype;return S.prototype=B,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,E,S),e.$i=!0),S},S.locale=$,S.isDayjs=x,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var xi=$(Di.exports),$i={exports:{}};$i.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],f=u&&u[0],h=u&&u[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,s=o.parser,c=e.slice(r),u=i.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!s&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var v=l||0,y=s||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,v,y,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,v,y,b,w)):new Date(g,m,p,v,y,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Si,Fi,Ei=$($i.exports),Bi={exports:{}},ki=$(Bi.exports=(Si={year:0,month:1,day:2,hour:3,minute:4,second:5},Fi={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Fi[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Fi[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Si[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(o-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Oi={exports:{}};Oi.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var Ai=$(Oi.exports),Ri={exports:{}};Ri.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ci=$(Ri.exports),Mi={exports:{}};Mi.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Li,Hi=$(Mi.exports);xi.extend(Ai),xi.extend(Ci),xi.extend(Hi),xi.extend(Ei),xi.extend(ki),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=xi(t).startOf("week");return Ti(n).map((e=>Ni(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ni(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(xi(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+xi(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=xi(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?xi(r):void 0,o?xi(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Li||(Li={}));const Ti=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ni=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ii=[1,3,5,7,8,10,12],ji=[4,6,9,11];var Yi,Pi,zi,Wi;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Ii.includes(i)?Math.min(o,31).toString():ji.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=xi(e,n);return xi(t,n).diff(r,"minute")},e.toDayjs=e=>e?xi(e):xi(),e.addMinutesToTime=(e,t,n="HH:mm")=>xi(e,n).add(t,"minutes").format(n)}(Yi||(Yi={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!xi(e).isBefore(r,"day"))||!(!o||!xi(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(xi(e).isValid())return e}return""}}(Pi||(Pi={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(zi||(zi={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Wi||(Wi={}));const _i=e=>{const[t,n]=s(e),r=l(e);return[t,c((e=>{r.current=e,n(e)}),[]),r]},Vi=h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ui=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Zi=h.div`
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
    animation: ${Ui} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ki=h(Zi)`
    animation-delay: -0.45s;
`,Xi=h(Zi)`
    animation-delay: -0.3s;
`,qi=h(Zi)`
    animation-delay: -0.15s;
`,Gi=h.button`
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

                    ${bi.mobileL} {
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

                    ${bi.mobileS} {
                        height: auto;
                    }
                `:p`
                    height: 3rem;
                    ${tn("H4","semibold")}

                    ${bi.mobileS} {
                        height: auto;
                    }
                `}
`,Ji=h((({color:n,className:r,size:o=18})=>e(Vi,Object.assign({className:r,$size:o,$color:n},{children:[t(Zi,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Ki,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Xi,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(qi,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ut.Button.Danger.Primary:Wt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Wt.Neutral[3](e);break;default:t=Wt.Neutral[8](e)}return p`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Qi={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=D(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Gi,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Ji,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=D(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Gi,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Ji,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},ea=h.button`
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
`,ta=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=D(e,["children","focusHighlight","focusOutline","type"]);return t(ea,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),na=p`
    color: ${Wt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,ra=h(b)`
    ${na}
`,oa=h(w)`
    ${na}
`,ia=h(f)`
    ${na}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,aa=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,la=h.div`
    display: flex;
    flex: 1;
    position: relative;
`,sa=h.div`
    isolation: isolate;
    width: 100%;
`,ca=h.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Wt.Neutral[8]};

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,ua=h.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,da=h.div`
    display: flex;
`,fa=h.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${ia} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ha=h.p`
    ${tn("H5","regular")}
`,pa=h.div`
    display: flex;
`,ga=h(ta)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ma=h.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,va=h(Qi.Small)`
    flex: 1;
`,ya=h.div`
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
`,ba=h.div`
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
`,wa=h(rn.H5)`
    ${e=>{if(e.$disabledDisplay)return p`
                color: ${Wt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return p`
                    color: ${Wt.Neutral[3](e)};
                `;case"selected-month":return p`
                    ${tn("H5","semibold")}
                    color: ${Wt.Primary(e)};
                `}}}
`,Da=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onMonthSelect:f})=>{const h=u((()=>Li.generateMonths(xi(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},g=e=>{const t=e.format("MMMM"),n=(r=e,!Li.isWithinRange(r,s?xi(s):void 0,c?xi(c):void 0,"month"));var r;const o=i.isSame(e,"month")?"selected-month":xi().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||d,month:t,variant:o}};return h.length?t(ya,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,month:i}=g(e);return t(ba,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(e,!r)},{children:t(wa,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n},{children:i}))}),i)}))})):null},xa=h.div`
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
`,$a=h.div`
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
`,Sa=h(rn.H5)`
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
`,Fa=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onYearSelect:f})=>{const h=u((()=>Li.generateDecadeOfYears(xi(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},g=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(o=e,!Li.isWithinRange(o,s?xi(s):void 0,c?xi(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":xi().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||d,year:n,variant:a}};return h.length?t(xa,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,year:i}=g(e);return t($a,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(e,!r)},{children:t(Sa,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},Ea=o.forwardRef(((r,o)=>{var{children:i,initialCalendarDate:c,type:u,minDate:f,maxDate:h,currentFocus:p,selectedStartDate:g,selectedEndDate:m,selectWithinRange:v,dynamicHeight:y=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:x,doneButtonDisabled:$,onDismiss:S,showNavigationHeader:F=!0,getLeftArrowDate:E,getRightArrowDate:B,isLeftArrowDisabled:k,isRightArrowDisabled:O,getMonthHeaderLabel:A,getYearHeaderLabel:R}=r,C=D(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,L]=s(Yi.toDayjs(c)),[H,T]=s(Yi.toDayjs(c)),[N,I]=s("default"),j=l(null),Y=l(null),P=l();d(o,(()=>({defaultView(){I("default")},resetView(){const e=Yi.toDayjs(c);L(e),T(e),I("default")},setCalendarDate(e){const t=Yi.toDayjs(e);L(t),T(t)}}))),a((()=>{const e=Yi.toDayjs(c);L(e),T(e)}),[c]),a((()=>{K(H)}),[H]);const z=()=>{"month-options"!==N?(I("month-options"),P.current.focus()):(I("default"),L(H))},W=()=>{"default"!==N?(I("default"),L(H)):I("year-options")},_=()=>{P.current.focus();const e=E?E(M):M.subtract(1,"month");switch(N){case"default":T(e),L(e);break;case"month-options":L((e=>e.subtract(1,"year")));break;case"year-options":L((e=>e.subtract(10,"year")))}},V=()=>{P.current.focus();const e=B?B(M):M.add(1,"month");switch(N){case"default":T(e),L(e);break;case"month-options":L((e=>e.add(1,"year")));break;case"year-options":L((e=>e.add(10,"year")))}},U=e=>{L(e),T(e),x||I("default")},Z=()=>{const e=Yi.toDayjs(c);L(e),T(e),"default"===N?X("reset"):I("default")},K=e=>{w&&w(e)},X=e=>{S&&S(e)},q=()=>{if(!f||b)return!1;const e=xi(f);return"month-options"===N?!Li.isPreviousYearWithinRange(M,e):"year-options"===N?!Li.isPreviousDecadeWithinRange(M,e):k?k(M):!Li.isPreviousMonthWithinRange(M,e)},G=()=>{if(!h||b)return!1;const e=xi(h);return"month-options"===N?!Li.isNextYearWithinRange(M,e):"year-options"===N?!Li.isNextDecadeWithinRange(M,e):O?O(M):!Li.isNextMonthWithinRange(M,e)},J=()=>{if("year-options"===N){const{beginDecade:e,endDecade:t}=Li.getStartEndDecade(M);return`${e} to ${t}`}return R?R(M):M.format("YYYY")},Q=()=>{const r=A?A(M):M.format("MMM");return e(n,{children:[e(fa,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===N,$visible:"default"===N,id:"month-dropdown",onClick:z},{children:[t(ha,{children:r}),t(ia,{})]})),e(fa,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==N,id:"year-dropdown",onClick:W},{children:[t(ha,{children:J()}),t(ia,{})]}))]})},ee=()=>{switch(N){case"month-options":return t(Da,{type:u,calendarDate:M,currentFocus:p,minDate:f,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:H,isNewSelection:v,onMonthSelect:U,allowDisabledSelection:b});case"year-options":return t(Fa,{type:u,calendarDate:M,currentFocus:p,minDate:f,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:H,isNewSelection:v,onYearSelect:U,allowDisabledSelection:b});default:return null}};return e(aa,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},C,{children:[F&&e(ua,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(da,{children:Q()}),e(pa,{children:[t(ga,Object.assign({"data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:_},{children:t(ra,{})})),t(ga,Object.assign({"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(oa,{})}))]})]})),t(la,{children:(()=>{const r="function"==typeof i?i({calendarDate:H,currentView:N}):i;return e(n,y?{children:["default"===N&&r,ee()]}:{children:[t(sa,{children:r}),t(ca,Object.assign({$visible:"default"!==N},{children:ee()}))]})})()}),(()=>{if(!x)return;const n=!!("default"===N)&&$;return e(ma,{children:[t(va,Object.assign({ref:Y,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(va,Object.assign({"data-testid":"done-button",ref:j,type:"button",onClick:()=>{n||(L(H),"default"===N?X("confirmed"):I("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Ba=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ka=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Oa=h.div`
    grid-column: 1 / -1;
    display: flex;
`;h.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Aa=h.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return p`
                    left: 0;
                `;case"right":return p`
                    right: 0;
                `}}}
`,Ra=h.div`
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
`,h(Aa)`
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
`,h(Ra)`
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
`;const Ca=e=>{let t=Wt.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Wt.Accent.Light[5];break;case"hover-dash":t=Wt.Accent.Light[6],n=`1px dashed ${Wt.Accent.Light[4](e)}`;break;case"hover-current":t=Wt.Neutral[8],n=`1px solid ${Wt.Primary(e)}`;break;case"selected":t=Wt.Accent.Light[5],n=`1px solid ${Wt.Accent.Light[4](e)}`;break;case"selected-outline":t=Wt.Accent.Light[5],n=`1px solid ${Wt.Primary(e)}`;break;case"overlap":t=Wt.Accent.Light[4],n=`1px solid ${Wt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Wt.Accent.Light[4],n=`1px solid ${Wt.Primary(e)}`}return{color:t,border:n}},Ma=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,La=h.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Ca(e);return p`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Ha=h(La)`
    left: 0;
`,Ta=h(La)`
    right: 0;
`,Na=h.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Wt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Ia=h(Na)`
    left: 0;
`,ja=h(Na)`
    right: 0;
`,Ya=h.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Ca(e);return p`
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
`,Pa=h(Ya)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Wt.Shadow.Accent};
    }
`,za=h(Ya)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Wt.Shadow.Accent};
    }
`,Wa=h(rn.H5)`
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
`,_a=({bgLeft:n,bgRight:r,circleLeft:o,circleRight:i,shadow:a,circleShadow:l,labelType:s,disabled:c,interactive:u,date:d,onSelect:f,onHover:h,onHoverEnd:p})=>e(Ma,{children:[t(Ia,{$shadow:n&&a}),t(Ha,{$type:n,$shadow:n&&a}),t(Pa,{$type:o,$shadow:o&&l}),t(ja,{$shadow:r&&a}),t(Ta,{$type:r,$shadow:r&&a}),t(za,{$type:i,$shadow:i&&l}),t(Wa,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:u,onClick:()=>{f(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{p&&p(d)}},{children:d.date()}))]}),Va=({date:e,calendarDate:n,startDate:r,endDate:o,currentFocus:i,hoverDate:a,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,onSelect:f,onHover:h})=>{const p=Li.isDisabledDay(e,c,l,s),g=!p||u,m=()=>{const e=xi(a),t=e.isBefore(o,"day"),n=e.isAfter(r,"day");let l,s,c,u;return"start"===i&&o&&t&&(r&&n?(c=a,u=o):(l=a,s=r||o)),"end"===i&&r&&n&&(o&&t?(c=r,u=a):(l=o||r,s=a)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:u}},v={date:e,calendarDate:n,disabled:p,interactive:g,onSelect:()=>{f(e,!g)},onHover:()=>{h(e.format("YYYY-MM-DD"),!g)}};return t(_a,Object.assign({},v,(()=>{const t={};if(n.month()!==e.month())t.labelType="unavailable";else if(xi().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),a="start"===i&&o&&e.isAfter(o);(n||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},n=e.isSame(r,"day"),i=e.isSame(o,"day");return(r&&n||o&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&o&&e.isBetween(r,o,"day","[]")&&(t.labelType="selected",n||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!a)return;const t={};e.isSame(a,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:o,overlapEnd:i}=m();if(n&&r){if(e.isBetween(n,r,"day","[]")){const o=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",o||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(o&&i){if(e.isBetween(o,i,"day","[]")){const n=e.isSame(o,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};xi.extend(Ai);const Ua=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:d,minDate:f,maxDate:h,allowDisabledSelection:p})=>{const g=u((()=>Li.generateDays(n)),[n]),[m,v]=s(""),y=(e,t)=>{t&&!p||l(e)},b=(e,t)=>{t&&!p||(v(e),c(e))},w=()=>{v(""),c("")};return e(Ba,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,n)=>t(ka,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:xi(e).format("ddd")}))},`week-day-${n}`))),g.map(((e,l)=>t(Oa,Object.assign({onMouseLeave:w},{children:e.map(((e,l)=>t(Va,{date:e,calendarDate:n,startDate:i,endDate:a,hoverDate:m,currentFocus:r,minDate:f,maxDate:h,disabledDates:o,allowDisabledSelection:p,isNewSelection:d,onSelect:y,onHover:b},`day-${l}`)))}),l)))]}))},Za=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:u,onHover:d})=>{const f=Li.isDisabledDay(e,l,i,a),h=!f||s,{start:p,end:g}=r?Li.getFixedRangeStartEnd(Yi.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:v}=o?Li.getFixedRangeStartEnd(Yi.toDayjs(o),c):{start:void 0,end:void 0},y=r&&e.isBetween(p,g,"day","[]"),b=o&&e.isBetween(m,v,"day","[]"),w=y&&e.isSame(p,"day")||b&&e.isSame(m,"day"),D=y&&e.isSame(g,"day")||b&&e.isSame(v,"day"),x=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},$={date:e,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(_a,Object.assign({},$,(()=>{const t={};return y||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":xi().isSame(e,"day")&&!f&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&x(t,"hover-dash",n===m,n===v),y&&x(t,"selected",n===p,n===g),y&&b&&x(t,"overlap",w,D),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=p&&m<g&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Ka=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:f})=>{const h=u((()=>Li.generateDays(n)),[n]),[p,g]=s(""),m=(e,t)=>{t&&!d||(i(e),e&&!xi(e).isSame(e,"month")&&g(""))},v=(e,t)=>{t&&!d||(g(e),a(e))},y=()=>{g(""),a("")};return e(Ba,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(ka,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:xi(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(Oa,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Za,{date:e,calendarDate:n,selectedDate:o,hoverDate:p,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:m,onHover:v,numberOfDays:f},`day-${i}`)))}),i)))]}))},Xa=h.div`
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
`,qa=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:u})=>{const d=Li.isDisabledDay(e,l,i,a),f=!d||s,{start:h,end:p}=Li.getWeekStartEnd(Yi.toDayjs(r)),{start:g,end:m}=Li.getWeekStartEnd(Yi.toDayjs(o)),v=r&&e.isBetween(h,p,"day","[]"),y=o&&e.isBetween(g,m,"day","[]"),b=v&&e.isSame(h)||y&&e.isSame(g),w=v&&e.isSame(p)||y&&e.isSame(m),D={date:e,calendarDate:n,disabled:d,interactive:f,onSelect:()=>{c(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(_a,Object.assign({},D,(()=>{const t={};return v||y?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":xi().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return v&&y?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):v?t="selected-outline":y&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},Ga=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const f=u((()=>Li.generateDays(n)),[n]),[h,p]=s(""),g=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");i(n),e&&!xi(e).isSame(n,"month")&&p("")},m=(e,t)=>{t&&!d||(p(e),a(e))},v=()=>{p(""),a("")};return e(Ba,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(ka,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:xi(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,i)=>t(Oa,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(qa,{date:e,calendarDate:n,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:g,onHover:m},`day-${i}`)))}),i)))]}))},Ja=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:o,onDismiss:i,value:a,endValue:s,currentFocus:c,withButton:u,variant:f,minDate:h,maxDate:p,allowDisabledSelection:g,type:m="standalone",selectWithinRange:v=!0,initialCalendarDate:y,numberOfDays:b},w)=>{const D=l(),x=l(void 0);d(w,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const $=e=>{const t=e.format("YYYY-MM-DD");D.current.setCalendarDate(t),F(t)},S=e=>{E(e)},F=e=>{r&&r(e)},E=e=>{o&&o(e)},B=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(Xa,Object.assign({$type:m},{children:t(Ea,Object.assign({type:m,ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(f){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!s;break;case"week":e=!a&&!s}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:v,currentFocus:c,selectedStartDate:a,selectedEndDate:s,allowDisabledSelection:g,onCalendarDateChange:e=>{x.current&&x.current.isSame(e,"month")||B(e),x.current=e},initialCalendarDate:y},{children:({calendarDate:n})=>(n=>{switch(f){case"week":return t(Ga,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:$,onHover:S});case"fixed-range":return t(Ka,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:$,onHover:S,numberOfDays:b});default:return t(Ua,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:s,minDate:h,maxDate:p,isNewSelection:v,allowDisabledSelection:g,onSelect:$,onHover:S})}})(n)}))}))})),Qa=o.forwardRef(((e,n)=>t(wi,{children:t(Ja,Object.assign({ref:n},e))}))),el=h.div`
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
`,tl=h.input`
    ${e=>tn("small"===e.$variant?"BodySmall":"Body","regular")}
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
`,nl=h.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,rl=h.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return p`
                ${ol}, ${sl} {
                    color: ${Wt.Neutral[4]};
                }
            `}}
`,ol=h(tl)`
    background: transparent;
    text-align: center;
`,il=h(ol)`
    width: 2rem;
    margin-right: 0.25rem;
`,al=h(ol)`
    width: 2.5rem;
`,ll=h(ol)`
    width: 3rem;
    margin-left: 0.25rem;
`,sl=h(rn.Body)`
    ${e=>{if(e.$inactive)return p`
                color: ${Wt.Neutral[3](e)};
            `}}
`,cl=h.div`
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
`;xi.extend(Ei);const ul=o.forwardRef((({disabled:n,readOnly:r,names:o,value:i,focused:c,hoverValue:u,placeholder:f,label:h,onChange:p,onFocus:g,onBlur:m,hideInputKeyboard:v},y)=>{const b=v?"none":"numeric",[w,D,x]=_i(""),[$,S,F]=_i(""),[E,B,k]=_i(""),[O,A]=s("none"),[R,C]=s(!1),M=l(null),L=l(null),H=l(null),T=l(null),[N,I,j]=V(u);a((()=>{const[e="",t="",n=""]=V(i);D(e),S(t),B(n)}),[i]),a((()=>{c||A("none"),c&&(C(!0),M.current.contains(document.activeElement)||L.current.focus())}),[c]),d(y,(()=>({ref:M,resetPlaceholder(){C(!1)},resetInput(){const[e="",t="",n=""]=V(i);D(e),S(t),B(n)}})),[i]);const Y=e=>{var t;e.preventDefault(),null===(t=L.current)||void 0===t||t.focus()},P=e=>{e.target.select();const t=e.target.name;A(t)},z=e=>{const[t,n,r]=o,i={[t]:x.current,[n]:F.current,[r]:k.current},a=e.target.name,l=i[a],s=a!==r?Wi.padValue(l,!0):l;switch(a){case t:i[t]=s,D(s);break;case n:i[n]=s,S(s)}const c=`${i[r]}-${i[n]}-${i[t]}`,u=xi(c,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&l!==s&&p(c),M.current.contains(e.relatedTarget)||(A("none"),null==m||m(d||u))},W=e=>{if(u)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:w,month:$,year:E};switch(t){case o[0]:r.day=n,D(n),2===n.length&&H.current.focus();break;case o[1]:r.month=n,S(n),2===n.length&&T.current.focus();break;case o[2]:r.year=n,B(n)}if(!r.day&&!r.month&&!r.year)return void p("");const i=`${r.year}-${r.month}-${r.day}`;xi(i,"YYYY-MM-DD",!0).isValid()&&p(i)},_=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===$.length&&L.current.focus(),O===o[2]&&0===E.length&&H.current.focus())};function V(e){if(e){const t=xi(new Date(e));return[Wi.padValue(t.date().toString()),Wi.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(nl,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(C(!0),M.current.contains(document.activeElement)||L.current.focus())},onFocus:()=>{n||(C(!0),c||g())}},{children:[e(rl,Object.assign({ref:M,$hover:!!u},{children:[t(il,{ref:L,name:o[0],maxLength:2,value:null!=N?N:w,onFocus:P,onBlur:z,onChange:W,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==o[0]||r?"DD":""}),t(sl,Object.assign({$inactive:0===w.length},{children:"/"})),t(al,{ref:H,name:o[1],maxLength:2,value:null!=I?I:$,onFocus:P,onBlur:z,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==o[1]||r?"MM":""}),t(sl,Object.assign({$inactive:0===$.length},{children:"/"})),t(ll,{ref:T,name:o[2],maxLength:4,value:null!=j?j:E,onFocus:P,onBlur:z,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==o[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&f)return t(cl,Object.assign({$hide:R,$disabled:n,onMouseDown:Y},{children:f}))})()]}))})),dl=h(el)`
    height: 3rem;
`,fl=e=>{var{minDate:n,maxDate:r,disabled:o,disabledDates:i,error:c,hideInputKeyboard:u,value:d,onChange:f,onFocus:h,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:v,id:y,allowDisabledSelection:b,zIndex:w=50}=e,x=D(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[$,S]=s(Pi.sanitizeInput(d)),[F,E]=s(Pi.sanitizeInput(d)),[B,k]=s(void 0),[O,A]=s(!1),R=l(null),C=l();a((()=>{const e=Pi.sanitizeInput(d);S(e),E(e)}),[d]);const M=e=>{!b&&Pi.isDateDisabled(e,{disabledDates:i,minDate:n,maxDate:r})||(E(e),m||(N(e),S(e),e&&(A(!1),I())))},L=()=>{v||(A(!0),h&&h())},H=e=>{k(e)},T=e=>{switch(e){case"reset":E($);break;case"confirmed":S(F),N(F)}A(!1),I()},N=e=>{f&&f(e)},I=()=>{p&&p()};return t(mi,{enabled:!v&&!o,isOpen:O,renderElement:()=>t(dl,Object.assign({ref:R,$disabled:o,$readOnly:v,$error:c,id:y,"data-testid":x["data-testid"]},x,{children:t(ul,{ref:C,disabled:o,onChange:M,onFocus:L,readOnly:v,focused:O,names:["start-day","start-month","start-year"],value:F,hoverValue:B,hideInputKeyboard:u})})),renderDropdown:()=>t(Qa,{type:"input",variant:"single",initialCalendarDate:F,withButton:m,value:F,disabledDates:i,minDate:n,maxDate:r,allowDisabledSelection:b,onHover:H,onSelect:M,onDismiss:T,onYearMonthDisplayChange:g}),onClose:()=>{A(!1),I()},onDismiss:()=>{C.current.resetInput(),E($),A(!1),I()},zIndex:w})};export{fl as DateInput};
//# sourceMappingURL=index.js.map
