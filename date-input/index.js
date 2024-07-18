import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useLayoutEffect as i,useEffect as a,useRef as l,useState as s,useCallback as c,useMemo as u,useImperativeHandle as d}from"react";import{ChevronDownIcon as f}from"@lifesg/react-icons/chevron-down";import h,{css as p,keyframes as g}from"styled-components";import{ExternalIcon as m}from"@lifesg/react-icons/external";import*as y from"react-dom";import{createPortal as v}from"react-dom";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as w}from"@lifesg/react-icons/chevron-right";function D(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function x(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S=Array.isArray,F="object"==typeof $&&$&&$.Object===Object&&$,B="object"==typeof self&&self&&self.Object===Object&&self,E=F||B||Function("return this")(),k=E.Symbol,O=k,A=Object.prototype,R=A.hasOwnProperty,C=A.toString,M=O?O.toStringTag:void 0;var L=function(e){var t=R.call(e,M),n=e[M];try{e[M]=void 0;var r=!0}catch(e){}var o=C.call(e);return r&&(t?e[M]=n:delete e[M]),o},H=Object.prototype.toString;var T=L,N=function(e){return H.call(e)},I=k?k.toStringTag:void 0;var j=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":I&&I in Object(e)?T(e):N(e)};var Y=j,P=function(e){return null!=e&&"object"==typeof e};var z=function(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==Y(e)},W=S,_=z,V=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,U=/^\w*$/;var Z=function(e,t){if(W(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!_(e))||(U.test(e)||!V.test(e)||null!=t&&e in Object(t))};var K=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},X=j,q=K;var G,J=function(e){if(!q(e))return!1;var t=X(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Q=E["__core-js_shared__"],ee=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"";var te=function(e){return!!ee&&ee in e},ne=Function.prototype.toString;var re=J,oe=te,ie=K,ae=function(e){if(null!=e){try{return ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""},le=/^\[object .+?Constructor\]$/,se=Function.prototype,ce=Object.prototype,ue=se.toString,de=ce.hasOwnProperty,fe=RegExp("^"+ue.call(de).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var he=function(e){return!(!ie(e)||oe(e))&&(re(e)?fe:le).test(ae(e))},pe=function(e,t){return null==e?void 0:e[t]};var ge=function(e,t){var n=pe(e,t);return he(n)?n:void 0},me=ge(Object,"create"),ye=me;var ve=function(){this.__data__=ye?ye(null):{},this.size=0};var be=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},we=me,De=Object.prototype.hasOwnProperty;var $e=function(e){var t=this.__data__;if(we){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return De.call(t,e)?t[e]:void 0},xe=me,Se=Object.prototype.hasOwnProperty;var Fe=me;var Be=ve,Ee=be,ke=$e,Oe=function(e){var t=this.__data__;return xe?void 0!==t[e]:Se.call(t,e)},Ae=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Fe&&void 0===t?"__lodash_hash_undefined__":t,this};function Re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Re.prototype.clear=Be,Re.prototype.delete=Ee,Re.prototype.get=ke,Re.prototype.has=Oe,Re.prototype.set=Ae;var Ce=Re;var Me=function(){this.__data__=[],this.size=0};var Le=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(Le(e[n][0],t))return n;return-1},Te=He,Ne=Array.prototype.splice;var Ie=function(e){var t=this.__data__,n=Te(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ne.call(t,n,1),--this.size,!0)},je=He;var Ye=function(e){var t=this.__data__,n=je(t,e);return n<0?void 0:t[n][1]},Pe=He;var ze=He;var We=function(e,t){var n=this.__data__,r=ze(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},_e=Me,Ve=Ie,Ue=Ye,Ze=function(e){return Pe(this.__data__,e)>-1},Ke=We;function Xe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xe.prototype.clear=_e,Xe.prototype.delete=Ve,Xe.prototype.get=Ue,Xe.prototype.has=Ze,Xe.prototype.set=Ke;var qe=Xe,Ge=ge(E,"Map"),Je=Ce,Qe=qe,et=Ge;var tt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var nt=function(e,t){var n=e.__data__;return tt(t)?n["string"==typeof t?"string":"hash"]:n.map},rt=nt;var ot=nt;var it=nt;var at=nt;var lt=function(e,t){var n=at(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},st=function(){this.size=0,this.__data__={hash:new Je,map:new(et||Qe),string:new Je}},ct=function(e){var t=rt(this,e).delete(e);return this.size-=t?1:0,t},ut=function(e){return ot(this,e).get(e)},dt=function(e){return it(this,e).has(e)},ft=lt;function ht(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=ct,ht.prototype.get=ut,ht.prototype.has=dt,ht.prototype.set=ft;var pt=ht;function gt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(gt.Cache||pt),n}gt.Cache=pt;var mt=gt;var yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vt=/\\(\\)?/g,bt=function(e){var t=mt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(yt,(function(e,n,r,o){t.push(r?o.replace(vt,"$1"):n||e)})),t}));var wt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Dt=wt,$t=S,xt=z,St=k?k.prototype:void 0,Ft=St?St.toString:void 0;var Bt=function e(t){if("string"==typeof t)return t;if($t(t))return Dt(t,e)+"";if(xt(t))return Ft?Ft.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Et=Bt;var kt=S,Ot=Z,At=bt,Rt=function(e){return null==e?"":Et(e)};var Ct=z;var Mt=function(e,t){return kt(e)?e:Ot(e,t)?[e]:At(Rt(e))},Lt=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ht=function(e,t){for(var n=0,r=(t=Mt(t,e)).length;null!=e&&n<r;)e=e[Lt(t[n++])];return n&&n==r?e:void 0},Tt=Ht;var Nt=x((function(e,t,n){var r=null==e?void 0:Tt(e,t);return void 0===r?n:r}));const It=(e,t,n)=>t?Nt(n,t)||Nt(e,t):n||e,jt=(e,t)=>{const n=t||e.defaultValue;return Nt(e.collections,n)};var Yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Yt||(Yt={}));const Pt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},zt=e=>t=>{const n=t.theme,r=jt(Pt,n[Yt.colorScheme]);return n.options&&n.options.color?It(r,e,n.options.color):It(r,e)},Wt={Brand:{1:zt("Brand.1"),2:zt("Brand.2"),3:zt("Brand.3"),4:zt("Brand.4"),5:zt("Brand.5"),6:zt("Brand.6")},Primary:zt("Primary"),PrimaryDark:zt("PrimaryDark"),Secondary:zt("Secondary"),Accent:{Light:{1:zt("Accent.Light.1"),2:zt("Accent.Light.2"),3:zt("Accent.Light.3"),4:zt("Accent.Light.4"),5:zt("Accent.Light.5"),6:zt("Accent.Light.6")},Dark:{1:zt("Accent.Dark.1"),2:zt("Accent.Dark.2"),3:zt("Accent.Dark.3")}},Neutral:{1:zt("Neutral.1"),2:zt("Neutral.2"),3:zt("Neutral.3"),4:zt("Neutral.4"),5:zt("Neutral.5"),6:zt("Neutral.6"),7:zt("Neutral.7"),8:zt("Neutral.8")},Validation:{Green:{Text:zt("Validation.Green.Text"),Icon:zt("Validation.Green.Icon"),Border:zt("Validation.Green.Border"),Background:zt("Validation.Green.Background")},Orange:{Text:zt("Validation.Orange.Text"),Icon:zt("Validation.Orange.Icon"),Border:zt("Validation.Orange.Border"),Background:zt("Validation.Orange.Background"),Badge:zt("Validation.Orange.Badge")},Red:{Text:zt("Validation.Red.Text"),Icon:zt("Validation.Red.Icon"),Border:zt("Validation.Red.Border"),Background:zt("Validation.Red.Background")},Blue:{Text:zt("Validation.Blue.Text"),Icon:zt("Validation.Blue.Icon"),Border:zt("Validation.Blue.Border"),Background:zt("Validation.Blue.Background")}},Shadow:{Accent:zt("Shadow.Accent"),Red:zt("Shadow.Red"),Elevation:zt("Shadow.Elevation")}},_t={collections:{base:{InputBoxShadow:p`
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
`;function gn(e){return vn(e)?(e.nodeName||"").toLowerCase():"#document"}function mn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function yn(e){var t;return null==(t=(vn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function vn(e){return e instanceof Node||e instanceof mn(e).Node}function bn(e){return e instanceof Element||e instanceof mn(e).Element}function wn(e){return e instanceof HTMLElement||e instanceof mn(e).HTMLElement}function Dn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof mn(e).ShadowRoot)}function $n(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=En(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function xn(e){return["table","td","th"].includes(gn(e))}function Sn(e){const t=Fn(),n=En(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Fn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Bn(e){return["html","body","#document"].includes(gn(e))}function En(e){return mn(e).getComputedStyle(e)}function kn(e){return bn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function On(e){if("html"===gn(e))return e;const t=e.assignedSlot||e.parentNode||Dn(e)&&e.host||yn(e);return Dn(t)?t.host:t}function An(e){const t=On(e);return Bn(t)?e.ownerDocument?e.ownerDocument.body:e.body:wn(t)&&$n(t)?t:An(t)}function Rn(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=An(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=mn(o);return i?t.concat(a,a.visualViewport||[],$n(o)?o:[],a.frameElement&&n?Rn(a.frameElement):[]):t.concat(o,Rn(o,[],n))}function Cn(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function Mn(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Dn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ln(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function Hn(e){return!Ln().includes("jsdom/")&&(!Tn()&&0===e.width&&0===e.height||Tn()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function Tn(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(Ln())}function Nn(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function In(e){return(null==e?void 0:e.ownerDocument)||document}function jn(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function Yn(e){return"composedPath"in e?e.composedPath()[0]:e.target}h(pn)`
    color: ${Wt.Neutral[3]};
`;const Pn="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function zn(e){return wn(e)&&e.matches(Pn)}function Wn(e){e.preventDefault(),e.stopPropagation()}const _n=Math.min,Vn=Math.max,Un=Math.round,Zn=Math.floor,Kn=e=>({x:e,y:e}),Xn={left:"right",right:"left",bottom:"top",top:"bottom"},qn={start:"end",end:"start"};function Gn(e,t,n){return Vn(e,_n(t,n))}function Jn(e,t){return"function"==typeof e?e(t):e}function Qn(e){return e.split("-")[0]}function er(e){return e.split("-")[1]}function tr(e){return"x"===e?"y":"x"}function nr(e){return"y"===e?"height":"width"}function rr(e){return["top","bottom"].includes(Qn(e))?"y":"x"}function or(e){return tr(rr(e))}function ir(e){return e.replace(/start|end/g,(e=>qn[e]))}function ar(e){return e.replace(/left|right|bottom|top/g,(e=>Xn[e]))}function lr(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function sr(e,t,n){let{reference:r,floating:o}=e;const i=rr(t),a=or(t),l=nr(a),s=Qn(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let h;switch(s){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(er(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function cr(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=Jn(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),g=l[f?"floating"===d?"reference":"floating":d],m=lr(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:s})),y="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=lr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:v,strategy:s}):y);return{top:(m.top-w.top+p.top)/b.y,bottom:(w.bottom-m.bottom+p.bottom)/b.y,left:(m.left-w.left+p.left)/b.x,right:(w.right-m.right+p.right)/b.x}}function ur(e){const t=En(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=wn(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=Un(n)!==i||Un(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function dr(e){return bn(e)?e:e.contextElement}function fr(e){const t=dr(e);if(!wn(t))return Kn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=ur(t);let a=(i?Un(n.width):n.width)/r,l=(i?Un(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const hr=Kn(0);function pr(e){const t=mn(e);return Fn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:hr}function gr(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=dr(e);let a=Kn(1);t&&(r?bn(r)&&(a=fr(r)):a=fr(e));const l=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==mn(e))&&t}(i,n,r)?pr(i):Kn(0);let s=(o.left+l.x)/a.x,c=(o.top+l.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=mn(i),t=r&&bn(r)?mn(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=fr(o),t=o.getBoundingClientRect(),r=En(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,u*=e.x,d*=e.y,s+=i,c+=a,n=mn(o),o=n.frameElement}}return lr({width:u,height:d,x:s,y:c})}const mr=[":popover-open",":modal"];function yr(e){return mr.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function vr(e){return gr(yn(e)).left+kn(e).scrollLeft}function br(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=mn(e),r=yn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;const e=Fn();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=function(e){const t=yn(e),n=kn(e),r=e.ownerDocument.body,o=Vn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Vn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+vr(e);const l=-n.scrollTop;return"rtl"===En(r).direction&&(a+=Vn(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(yn(e));else if(bn(t))r=function(e,t){const n=gr(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=wn(e)?fr(e):Kn(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=pr(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return lr(r)}function wr(e,t){const n=On(e);return!(n===t||!bn(n)||Bn(n))&&("fixed"===En(n).position||wr(n,t))}function Dr(e,t,n){const r=wn(t),o=yn(t),i="fixed"===n,a=gr(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const s=Kn(0);if(r||!r&&!i)if(("body"!==gn(t)||$n(o))&&(l=kn(t)),r){const e=gr(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=vr(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function $r(e){return"static"===En(e).position}function xr(e,t){return wn(e)&&"fixed"!==En(e).position?t?t(e):e.offsetParent:null}function Sr(e,t){const n=mn(e);if(yr(e))return n;if(!wn(e)){let t=On(e);for(;t&&!Bn(t);){if(bn(t)&&!$r(t))return t;t=On(t)}return n}let r=xr(e,t);for(;r&&xn(r)&&$r(r);)r=xr(r,t);return r&&Bn(r)&&$r(r)&&!Sn(r)?n:r||function(e){let t=On(e);for(;wn(t)&&!Bn(t);){if(Sn(t))return t;t=On(t)}return null}(e)||n}const Fr={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=yn(r),l=!!t&&yr(t.floating);if(r===a||l&&i)return n;let s={scrollLeft:0,scrollTop:0},c=Kn(1);const u=Kn(0),d=wn(r);if((d||!d&&!i)&&(("body"!==gn(r)||$n(a))&&(s=kn(r)),wn(r))){const e=gr(r);c=fr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:yn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?yr(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Rn(e,[],!1).filter((e=>bn(e)&&"body"!==gn(e))),o=null;const i="fixed"===En(e).position;let a=i?On(e):e;for(;bn(a)&&!Bn(a);){const t=En(a),n=Sn(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||$n(a)&&!n&&wr(e,a))?r=r.filter((e=>e!==a)):o=t,a=On(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],l=i.reduce(((e,n)=>{const r=br(t,n,o);return e.top=Vn(r.top,e.top),e.right=_n(r.right,e.right),e.bottom=_n(r.bottom,e.bottom),e.left=Vn(r.left,e.left),e}),br(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Sr,getElementRects:async function(e){const t=this.getOffsetParent||Sr,n=this.getDimensions,r=await n(e.floating);return{reference:Dr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=ur(e);return{width:t,height:n}},getScale:fr,isElement:bn,isRTL:function(e){return"rtl"===En(e).direction}};function Br(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=r,c=dr(e),u=o||i?[...c?Rn(c):[],...Rn(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&l?function(e,t){let n,r=null;const o=yn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;const h={rootMargin:-Zn(u)+"px "+-Zn(o.clientWidth-(c+d))+"px "+-Zn(o.clientHeight-(u+f))+"px "+-Zn(c)+"px",threshold:Vn(0,_n(1,s))||1};let p=!0;function g(e){const t=e[0].intersectionRatio;if(t!==s){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!s&&p.observe(c),p.observe(t));let g=s?gr(e):null;return s&&function t(){const r=gr(e);!g||r.x===g.x&&r.y===g.y&&r.width===g.width&&r.height===g.height||n();g=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,s&&cancelAnimationFrame(f)}}const Er=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:l}=t,s=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=Qn(n),l=er(n),s="y"===rr(n),c=["left","top"].includes(a)?-1:1,u=i&&s?-1:1,d=Jn(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof p&&(h="end"===l?-1*p:p),s?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(r=l.arrow)&&r.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}}},kr=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=Jn(e,t),c={x:n,y:r},u=await cr(t,s),d=rr(Qn(o)),f=tr(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=Gn(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=Gn(p+u["y"===d?"top":"left"],p,p-u[e])}const g=l.fn({...t,[f]:h,[d]:p});return{...g,data:{x:g.x-n,y:g.y-r}}}}},Or=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:l,platform:s,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Jn(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=Qn(o),v=Qn(l)===l,b=await(null==s.isRTL?void 0:s.isRTL(c.floating)),w=f||(v||!g?[ar(l)]:function(e){const t=ar(e);return[ir(e),t,ir(t)]}(l));f||"none"===p||w.push(...function(e,t,n,r){const o=er(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(Qn(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(ir)))),i}(l,g,p,b));const D=[l,...w],$=await cr(t,m),x=[];let S=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&x.push($[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=er(e),o=or(e),i=nr(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=ar(a)),[a,ar(a)]}(o,a,b);x.push($[e[0]],$[e[1]])}if(S=[...S,{placement:o,overflows:x}],!x.every((e=>e<=0))){var F,B;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=D[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let n=null==(B=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:B.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},Ar=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...l}=Jn(e,t),s=await cr(t,l),c=Qn(n),u=er(n),d="y"===rr(n),{width:f,height:h}=r.floating;let p,g;"top"===c||"bottom"===c?(p=c,g=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(g=c,p="end"===u?"top":"bottom");const m=h-s.top-s.bottom,y=f-s.left-s.right,v=_n(h-s[p],m),b=_n(f-s[g],y),w=!t.middlewareData.shift;let D=v,$=b;if(d?$=u||w?_n(b,y):y:D=u||w?_n(v,m):m,w&&!u){const e=Vn(s.left,0),t=Vn(s.right,0),n=Vn(s.top,0),r=Vn(s.bottom,0);d?$=f-2*(0!==e||0!==t?e+t:Vn(s.left,s.right)):D=h-2*(0!==n||0!==r?n+r:Vn(s.top,s.bottom))}await a({...t,availableWidth:$,availableHeight:D});const x=await o.getDimensions(i.floating);return f!==x.width||h!==x.height?{reset:{rects:!0}}:{}}}},Rr=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:s=!0,crossAxis:c=!0}=Jn(e,t),u={x:n,y:r},d=rr(o),f=tr(d);let h=u[f],p=u[d];const g=Jn(l,t),m="number"==typeof g?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(s){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+m.mainAxis,n=i.reference[f]+i.reference[e]-m.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(Qn(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:m.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?m.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},Cr=(e,t,n)=>{const r=new Map,o={platform:Fr,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=sr(c,r,s),f=r,h={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:g}=l[n],{x:m,y:y,data:v,reset:b}=await g({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=m?m:u,d=null!=y?y:d,h={...h,[i]:{...h[i],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=sr(c,f,s))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var Mr="undefined"!=typeof document?i:a;function Lr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Lr(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Lr(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Hr(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Tr(e,t){const n=Hr(e);return Math.round(t*n)/n}function Nr(e){const t=r.useRef(e);return Mr((()=>{t.current=e})),t}const Ir=(e,t)=>({...kr(e),options:[e,t]}),jr=(e,t)=>({...Rr(e),options:[e,t]}),Yr=(e,t)=>({...Or(e),options:[e,t]}),Pr=(e,t)=>({...Ar(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var zr=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),Wr="undefined"==typeof Element,_r=Wr?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Vr=!Wr&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},Ur=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},Zr=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Ur(a,!1))if("SLOT"===a.tagName){var l=a.assignedElements(),s=e(l.length?l:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{_r.call(a,zr)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!Ur(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},Kr=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},Xr=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!Kr(e)?0:e.tabIndex},qr=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Gr=function(e){return"INPUT"===e.tagName},Jr=function(e){return function(e){return Gr(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||Vr(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},Qr=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},eo=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=_r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(_r.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return Qr(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,l=Vr(e);if(a&&!a.shadowRoot&&!0===r(a))return Qr(e);e=e.assignedSlot?e.assignedSlot:a||l===e.ownerDocument?a:l.host}e=i}if(function(e){var t,n,r,o,i=e&&Vr(e),a=null===(t=i)||void 0===t?void 0:t.host,l=!1;if(i&&i!==e)for(l=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!l&&a;){var s,c,u;l=!(null===(c=a=null===(s=i=Vr(a))||void 0===s?void 0:s.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return l}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},to=function(e,t){return!(t.disabled||Ur(t)||function(e){return Gr(e)&&"hidden"===e.type}(t)||eo(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!_r.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},no=function(e,t){return!(Jr(t)||Xr(t)<0||!to(e,t))},ro=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},oo=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,l=function(e,t){var n=Xr(e);return n<0&&t&&!Kr(e)?0:n}(a,i),s=i?e(t.candidates):a;0===l?i?n.push.apply(n,s):n.push(a):r.push({documentOrder:o,tabIndex:l,item:t,isScope:i,content:s})})),r.sort(qr).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},io=function(e,t){var n;return n=(t=t||{}).getShadowRoot?Zr([e],t.includeContainer,{filter:no.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:ro}):function(e,t,n){if(Ur(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(zr));return t&&_r.call(e,zr)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,no.bind(null,t)),oo(n)},ao=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==_r.call(e,zr)&&no(t,e)};const lo={...r},so=lo.useInsertionEffect||(e=>e());function co(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return so((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let uo=0;function fo(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(uo);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():uo=requestAnimationFrame(i)}var ho="undefined"!=typeof document?i:a;function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}let go=!1,mo=0;const yo=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+mo++;const vo=lo.useId||function(){const[e,t]=r.useState((()=>go?yo():void 0));return ho((()=>{null==e&&t(yo())}),[]),r.useEffect((()=>{go=!0}),[]),e};let bo;"production"!==process.env.NODE_ENV&&(bo=new Set);const wo=r.createContext(null),Do=r.createContext(null),$o=()=>{var e;return(null==(e=r.useContext(wo))?void 0:e.id)||null},xo=()=>r.useContext(Do);function So(e){return"data-floating-ui-"+e}function Fo(e){const t=l(e);return ho((()=>{t.current=e})),t}function Bo(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let Eo=new WeakMap,ko=new WeakSet,Oo={},Ao=0;const Ro=e=>e&&(e.host||Ro(e.parentNode)),Co=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=Ro(t);return e.contains(n)?n:null})).filter((e=>null!=e));function Mo(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=In(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Co(t,e),l=new Set,s=new Set(a),c=[];Oo[o]||(Oo[o]=new WeakMap);const u=Oo[o];return a.forEach((function e(t){t&&!l.has(t)&&(l.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!s.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==gn(t))if(l.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(Eo.get(t)||0)+1,a=(u.get(t)||0)+1;Eo.set(t,r),u.set(t,a),c.push(t),1===r&&n&&ko.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),l.clear(),Ao++,()=>{c.forEach((e=>{const t=(Eo.get(e)||0)-1,n=(u.get(e)||0)-1;Eo.set(e,t),u.set(e,n),t||(!ko.has(e)&&i&&e.removeAttribute(i),ko.delete(e)),n||e.removeAttribute(o)})),Ao--,Ao||(Eo=new WeakMap,Eo=new WeakMap,ko=new WeakSet,Oo={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Lo=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Ho(e,t){const n=io(e,Lo());"prev"===t&&n.reverse();const r=n.indexOf(Cn(In(e)));return n.slice(r+1)[0]}function To(){return Ho(document.body,"next")}function No(){return Ho(document.body,"prev")}function Io(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!Mn(n,r)}function jo(e){io(e,Lo()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function Yo(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const Po={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function zo(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const Wo=r.forwardRef((function(e,t){const[n,o]=r.useState();ho((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",zo),()=>{document.removeEventListener("keydown",zo)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[So("focus-guard")]:"",style:Po};return r.createElement("span",po({},e,i))})),_o=r.createContext(null),Vo=So("portal");function Uo(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=vo(),i=Zo(),[a,l]=r.useState(null),s=r.useRef(null);return ho((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{s.current=null}))}),[a]),ho((()=>{if(!o)return;if(s.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(Vo,""),e.appendChild(n),s.current=n,l(n)}),[t,o]),ho((()=>{if(!o)return;if(s.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!bn(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(Vo,""),e=r||e,e.appendChild(a),s.current=a,l(a)}),[t,n,o,i]),a}({id:n,root:o}),[l,s]=r.useState(null),c=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!l&&!l.modal&&l.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==l||!l.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&Io(e)){("focusin"===e.type?Yo:jo)(a)}}}),[a,i,null==l?void 0:l.modal]),r.createElement(_o.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:s})),[i,a])},h&&a&&r.createElement(Wo,{"data-type":"outside",ref:c,onFocus:e=>{if(Io(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=No()||(null==l?void 0:l.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:Po}),a&&v(t,a),h&&a&&r.createElement(Wo,{"data-type":"outside",ref:u,onFocus:e=>{if(Io(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=To()||(null==l?void 0:l.refs.domReference.current);null==t||t.focus(),(null==l?void 0:l.closeOnFocusOut)&&(null==l||l.onOpenChange(!1,e.nativeEvent))}}}))}const Zo=()=>r.useContext(_o),Ko=20;let Xo=[];function qo(e){Xo=Xo.filter((e=>e.isConnected));let t=e;if(t&&"body"!==gn(t)){if(!ao(t,Lo())){const e=io(t,Lo())[0];e&&(t=e)}Xo.push(t),Xo.length>Ko&&(Xo=Xo.slice(-Ko))}}function Go(){return Xo.slice().reverse().find((e=>e.isConnected))}const Jo=r.forwardRef((function(e,t){return r.createElement("button",po({},e,{type:"button",ref:t,tabIndex:-1,style:Po}))}));function Qo(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:l=0,returnFocus:s=!0,modal:c=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:g,events:m,dataRef:y,elements:{domReference:v,floating:b}}=t,w="number"==typeof l&&l<0,D=!!($=v)&&"combobox"===$.getAttribute("role")&&zn($)&&w;var $;const x="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,S=Fo(i),F=Fo(l),B=Fo(s),E=xo(),k=Zo(),O=r.useRef(null),A=r.useRef(null),R=r.useRef(!1),C=r.useRef(!1),M=null!=k,L=r.useCallback((function(e){return void 0===e&&(e=b),e?io(e,Lo()):[]}),[b]),H=r.useCallback((e=>{const t=L(e);return S.current.map((e=>v&&"reference"===e?v:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[v,b,S,L]);function T(e){return!o&&u&&c?r.createElement(Jo,{ref:"start"===e?O:A,onClick:e=>g(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){Mn(b,Cn(In(b)))&&0===L().length&&!D&&Wn(e);const t=H(),n=Yn(e);"reference"===S.current[0]&&n===v&&(Wn(e),e.shiftKey?fo(t[t.length-1]):fo(t[1])),"floating"===S.current[1]&&n===b&&e.shiftKey&&(Wn(e),fo(t[0]))}}const t=In(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,v,b,c,S,D,L,H]),r.useEffect((()=>{if(!o&&d)return b&&wn(v)?(v.addEventListener("focusout",t),v.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{v.removeEventListener("focusout",t),v.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){C.current=!0,setTimeout((()=>{C.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(Mn(v,t)||Mn(b,t)||Mn(t,b)||Mn(null==k?void 0:k.portalNode,t)||null!=t&&t.hasAttribute(So("focus-guard"))||E&&(Bo(E.nodesRef.current,p).find((e=>{var n,r;return Mn(null==(n=e.context)?void 0:n.elements.floating,t)||Mn(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!C.current&&t!==Go()&&(R.current=!0,g(!1,e))}))}}),[o,v,b,c,p,E,k,g,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==k||null==(e=k.portalNode)?void 0:e.querySelectorAll("["+So("portal")+"]"))||[]);if(b){const e=[b,...t,O.current,A.current,S.current.includes("reference")||D?v:null].filter((e=>null!=e)),n=c||D?Mo(e,x,!x):Mo(e);return()=>{n()}}}),[o,v,b,c,S,k,D,x]),ho((()=>{if(o||!b)return;const e=Cn(In(b));queueMicrotask((()=>{const t=H(b),n=F.current,r=("number"==typeof n?t[n]:n.current)||b,o=Mn(b,e);w||o||!f||fo(r,{preventScroll:r===b})}))}),[o,f,b,w,H,F]),ho((()=>{if(o||!b)return;let e=!1;const t=In(b),n=Cn(t);let r=y.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&qo(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(R.current=!0),"outside-press"===o&&(a?(R.current=!1,e=!0):R.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(Tn()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||Hn(i)))}return qo(n),m.on("openchange",i),()=>{m.off("openchange",i);const n=Cn(t),o=Mn(b,n)||E&&Bo(E.nodesRef.current,p).some((e=>{var t;return Mn(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&qo(h.domReference.current);const a=Go();B.current&&!R.current&&wn(a)&&(a===n||n===t.body||o)&&fo(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,B,y,h,m,E,p]),ho((()=>{if(!o&&k)return k.setFocusManagerState({modal:c,closeOnFocusOut:d,open:f,onOpenChange:g,refs:h}),()=>{k.setFocusManagerState(null)}}),[o,k,c,f,g,h,d]),ho((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");S.current.includes("floating")||Cn(In(b))!==h.domReference.current&&0===L().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,S,L,w]);const N=!o&&x&&(M||c);return r.createElement(r.Fragment,null,N&&r.createElement(Wo,{"data-type":"inside",ref:null==k?void 0:k.beforeInsideRef,onFocus:e=>{if(c){const e=H();fo("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(R.current=!1,Io(e,k.portalNode)){const e=To()||v;null==e||e.focus()}else{var t;null==(t=k.beforeOutsideRef.current)||t.focus()}}}),!D&&T("start"),n,T("end"),N&&r.createElement(Wo,{"data-type":"inside",ref:null==k?void 0:k.afterInsideRef,onFocus:e=>{if(c)fo(H()[0]);else if(null!=k&&k.preserveTabOrder&&k.portalNode)if(d&&(R.current=!0),Io(e,k.portalNode)){const e=No()||v;null==e||e.focus()}else{var t;null==(t=k.afterOutsideRef.current)||t.focus()}}}))}function ei(e){return wn(e.target)&&"BUTTON"===e.target.tagName}function ti(e){return zn(e)}const ni={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},ri={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},oi=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function ii(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=vo(),a=r.useRef({}),[l]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),s=null!=$o();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!bn(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=bo)&&e.has(o)||(null==(i=bo)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=r.useState(o.reference),d=co(((e,t,r)=>{a.current.openEvent=e?t:void 0,l.emit("openchange",{open:e,event:t,reason:r,nested:s}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:c||o.reference||null,floating:o.floating||null,domReference:o.reference})),[c,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:l,floatingId:i,refs:f})),[t,d,h,l,i,f])}function ai(e){void 0===e&&(e={});const{nodeId:t}=e,n=ii({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,l]=r.useState(null),[s,c]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=xo();ho((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:l}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);Lr(h,o)||p(o);const[g,m]=r.useState(null),[v,b]=r.useState(null),w=r.useCallback((e=>{e!==S.current&&(S.current=e,m(e))}),[]),D=r.useCallback((e=>{e!==F.current&&(F.current=e,b(e))}),[]),$=a||g,x=l||v,S=r.useRef(null),F=r.useRef(null),B=r.useRef(d),E=null!=c,k=Nr(c),O=Nr(i),A=r.useCallback((()=>{if(!S.current||!F.current)return;const e={placement:t,strategy:n,middleware:h};O.current&&(e.platform=O.current),Cr(S.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};R.current&&!Lr(B.current,t)&&(B.current=t,y.flushSync((()=>{f(t)})))}))}),[h,t,n,O]);Mr((()=>{!1===u&&B.current.isPositioned&&(B.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const R=r.useRef(!1);Mr((()=>(R.current=!0,()=>{R.current=!1})),[]),Mr((()=>{if($&&(S.current=$),x&&(F.current=x),$&&x){if(k.current)return k.current($,x,A);A()}}),[$,x,A,k,E]);const C=r.useMemo((()=>({reference:S,floating:F,setReference:w,setFloating:D})),[w,D]),M=r.useMemo((()=>({reference:$,floating:x})),[$,x]),L=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Tr(M.floating,d.x),r=Tr(M.floating,d.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...Hr(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,s,M.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:A,refs:C,elements:M,floatingStyles:L})),[d,A,C,M,L])}({...e,elements:{...i,...s&&{reference:s}}}),p=r.useCallback((e=>{const t=bn(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),g=r.useCallback((e=>{(bn(e)||null===e)&&(d.current=e,l(e)),(bn(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!bn(e))&&h.refs.setReference(e)}),[h.refs]),m=r.useMemo((()=>({...h.refs,setReference:g,setPositionReference:p,domReference:d})),[h.refs,g,p]),v=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),b=r.useMemo((()=>({...h,...o,refs:m,elements:v,nodeId:t})),[h,m,v,t,o]);return ho((()=>{o.dataRef.current.floatingContext=b;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=b)})),r.useMemo((()=>({...h,context:b,refs:m,elements:v})),[h,m,v,b])}const li="active",si="selected";function ci(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[li]:t,[si]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[li,si].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const ui=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function di(e,t){return"function"==typeof e?e(t):e}function fi(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[l,s]=r.useState("unmounted"),c=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return c||"close"!==l||s("unmounted"),ho((()=>{if(o){if(n){s("initial");const e=requestAnimationFrame((()=>{s("open")}));return()=>{cancelAnimationFrame(e)}}s("close")}}),[n,o]),{isMounted:c,status:l}}const hi=({enabled:o,isOpen:i,onOpen:a,onClose:s,onDismiss:c,renderElement:u,renderDropdown:d,zIndex:f=50,clickToToggle:h=!1})=>{const p=l(null),{refs:g,floatingStyles:m,context:y}=ai({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!i?null==a||a():!e&&i&&(null==s||s())},whileElementsMounted:Br,placement:"bottom-start",middleware:[(v=16,{...Er(v),options:[v,b]}),Yr(),Ir({limiter:jr()}),Pr({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}})]});var v,b;const{isMounted:w,styles:D}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:l=250}=t,s=e.placement,c=s.split("-")[0],u=r.useMemo((()=>({side:c,placement:s})),[c,s]),d="number"==typeof l,f=(d?l:l.open)||0,h=(d?l:l.close)||0,[p,g]=r.useState((()=>({...di(a,u),...di(n,u)}))),{isMounted:m,status:y}=fi(e,{duration:l}),v=Fo(n),b=Fo(o),w=Fo(i),D=Fo(a);return ho((()=>{const e=di(v.current,u),t=di(w.current,u),n=di(D.current,u),r=di(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===y&&g((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===y&&g({transitionProperty:Object.keys(r).map(ui).join(","),transitionDuration:f+"ms",...n,...r}),"close"===y){const r=t||e;g({transitionProperty:Object.keys(r).map(ui).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,v,b,D,f,y,u]),{isMounted:m,styles:p}}(y,{initial:{opacity:0},open:{opacity:1},duration:300}),$=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:l=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>l?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(Nn(f.current,!0)&&u||"click"!==s&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===s&&f.current?f.current=void 0:Nn(f.current,!0)&&u||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||ei(e)||(" "!==e.key||ti(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||ei(e)||ti(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[l,i,s,u,d,a,c,n,o])}(y,{enabled:o,toggle:h}),x=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:l},dataRef:s}=e,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:g=!1,bubbles:m,capture:y}=t,v=xo(),b=co("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,D=r.useRef(!1),$=r.useRef(!1),{escapeKey:x,outsidePress:S}=oi(m),{escapeKey:F,outsidePress:B}=oi(y),E=co((e=>{var t;if(!n||!c||!u||"Escape"!==e.key)return;const r=null==(t=s.current.floatingContext)?void 0:t.nodeId,i=v?Bo(v.nodesRef.current,r):[];if(!x&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),k=co((e=>{var t;const n=()=>{var t;E(e),null==(t=Yn(e))||t.removeEventListener("keydown",n)};null==(t=Yn(e))||t.addEventListener("keydown",n)})),O=co((e=>{var t;const n=D.current;D.current=!1;const r=$.current;if($.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=Yn(e),c="["+So("inert")+"]",u=In(l).querySelectorAll(c);let d=bn(i)?i:null;for(;d&&!Bn(d);){const e=On(d);if(Bn(e)||!bn(e))break;d=e}if(u.length&&bn(i)&&!i.matches("html,body")&&!Mn(i,l)&&Array.from(u).every((e=>!Mn(d,e))))return;if(wn(i)&&l){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===En(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=s.current.floatingContext)?void 0:t.nodeId,p=v&&Bo(v.nodesRef.current,h).some((t=>{var n;return jn(e,null==(n=t.context)?void 0:n.elements.floating)}));if(jn(e,l)||jn(e,a)||p)return;const g=v?Bo(v.nodesRef.current,h):[];if(g.length>0){let e=!0;if(g.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),A=co((e=>{var t;const n=()=>{var t;O(e),null==(t=Yn(e))||t.removeEventListener(f,n)};null==(t=Yn(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!c)return;function e(e){o(!1,e,"ancestor-scroll")}s.current.__escapeKeyBubbles=x,s.current.__outsidePressBubbles=S;const t=In(l);u&&t.addEventListener("keydown",F?k:E,F),w&&t.addEventListener(f,B?A:O,B);let r=[];return g&&(bn(a)&&(r=Rn(a)),bn(l)&&(r=r.concat(Rn(l))),!bn(i)&&i&&i.contextElement&&(r=r.concat(Rn(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",F?k:E,F),w&&t.removeEventListener(f,B?A:O,B),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[s,l,a,i,u,w,f,n,o,g,c,x,S,E,F,k,O,B,A]),r.useEffect((()=>{D.current=!1}),[w,f]),r.useMemo((()=>c?{reference:{onKeyDown:E,[ni[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){$.current=!0},onMouseUp(){$.current=!0},[ri[f]]:()=>{D.current=!0}}}:{}),[c,h,f,p,o,E])}(y,{enabled:o}),{getReferenceProps:S,getFloatingProps:F}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>ci(t,e,"reference")),t),o=r.useCallback((t=>ci(t,e,"floating")),t),i=r.useCallback((t=>ci(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([$,x]);return e(n,{children:[t("div",Object.assign({ref:g.setReference},S(),{children:u()})),w&&t(Uo,{children:t(Qo,Object.assign({context:y,modal:!1,initialFocus:p,returnFocus:!1},{children:t("div",Object.assign({ref:g.setFloating,style:Object.assign(Object.assign({},m),{zIndex:f})},F(),{children:t("div",Object.assign({ref:p,style:Object.assign({},D),inert:D.opacity<1?"":void 0},{children:d()}))}))}))})]})},pi={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},gi=e=>Object.keys(pi).reduce(((t,n)=>{const r=pi[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),mi=gi("max-width"),yi=(gi("min-width"),h.div`
    max-width: 41rem;
    min-width: 21rem;

    ${mi.mobileL} {
        min-width: 17.5rem;
    }
`);var vi={exports:{}};vi.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",l="day",s="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:s,d:l,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var D="$isDayjsObject",$=function(e){return e instanceof B||!(!e||!e[D])},x=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var l=t.name;w[l]=t,o=l}return!r&&o&&(b=o),o||!r&&b},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new B(n)},F=v;F.l=x,F.i=$,F.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),h=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(l)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?y-w:y+(6-w),m);case l:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,s=F.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],p=s===l?this.$D+(t-this.$W):t;if(s===c||s===d){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=F.p(u),g=function(e){var t=S(h);return F.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===l)return g(1);if(p===s)return g(7);var m=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return F.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return l+1;case"MM":return F.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,s,2);case"ddd":return d(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(i);case"HH":return F.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return F.s(a,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,g=this,m=F.p(f),y=S(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return F.m(g,y)};switch(m){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case s:p=(b-v)/6048e5;break;case l:p=(b-v)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:F.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),E=B.prototype;return S.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",l],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,B,S),e.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var bi=x(vi.exports),wi={exports:{}};wi.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),l=a.length,s=0;s<l;s+=1){var c=a[s],u=d[c],f=u&&u[0],h=u&&u[1];a[s]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<l;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,s=o.parser,c=e.slice(r),u=i.exec(c)[0];s.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!s&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),g=o||h.getFullYear(),m=0;o&&!i||(m=i>0?i-1:h.getMonth());var y=l||0,v=s||0,b=c||0,w=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,l,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(l)&&(this.$d=new Date("")),i={}}else if(l instanceof Array)for(var h=l.length,p=1;p<=h;p+=1){a[1]=l[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Di,$i,xi=x(wi.exports),Si={exports:{}},Fi=x(Si.exports=(Di={year:0,month:1,day:2,hour:3,minute:4,second:5},$i={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=$i[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),$i[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=Di[s];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),l=Math.round((i-new Date(a))/1e3/60),s=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(o-c,"minute")}return s.$x.$timezone=e,s},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return l.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,l=o||t||r,s=i(+n(),l);if("string"!=typeof e)return n(e).tz(l);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),s,l),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=l,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Bi={exports:{}};Bi.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),l="("===(o=o||"()")[0],s=")"===o[1];return(l?this.isAfter(i,r):!this.isBefore(i,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(i,r):!this.isAfter(i,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var Ei=x(Bi.exports),ki={exports:{}};ki.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Oi=x(ki.exports),Ai={exports:{}};Ai.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ri,Ci=x(Ai.exports);bi.extend(Ei),bi.extend(Oi),bi.extend(Ci),bi.extend(xi),bi.extend(Fi),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=bi(t).startOf("week");return Mi(n).map((e=>Li(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Li(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(bi(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+bi(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=bi(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?bi(r):void 0,o?bi(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ri||(Ri={}));const Mi=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Li=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Hi=[1,3,5,7,8,10,12],Ti=[4,6,9,11];var Ni,Ii,ji,Yi;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Hi.includes(i)?Math.min(o,31).toString():Ti.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=bi(e,n);return bi(t,n).diff(r,"minute")},e.toDayjs=e=>e?bi(e):bi(),e.addMinutesToTime=(e,t,n="HH:mm")=>bi(e,n).add(t,"minutes").format(n)}(Ni||(Ni={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!bi(e).isBefore(r,"day"))||!(!o||!bi(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(bi(e).isValid())return e}return""}}(Ii||(Ii={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ji||(ji={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:l}=n;if(l)return l(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Yi||(Yi={}));const Pi=e=>{const[t,n]=s(e),r=l(e);return[t,c((e=>{r.current=e,n(e)}),[]),r]},zi=h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Wi=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,_i=h.div`
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
    animation: ${Wi} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Vi=h(_i)`
    animation-delay: -0.45s;
`,Ui=h(_i)`
    animation-delay: -0.3s;
`,Zi=h(_i)`
    animation-delay: -0.15s;
`,Ki=h.button`
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

                    ${mi.mobileL} {
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

                    ${mi.mobileS} {
                        height: auto;
                    }
                `:p`
                    height: 3rem;
                    ${tn("H4","semibold")}

                    ${mi.mobileS} {
                        height: auto;
                    }
                `}
`,Xi=h((({color:n,className:r,size:o=18})=>e(zi,Object.assign({className:r,$size:o,$color:n},{children:[t(_i,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(Vi,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(Ui,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(Zi,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ut.Button.Danger.Primary:Wt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Wt.Neutral[3](e);break;default:t=Wt.Neutral[8](e)}return p`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,qi={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=D(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Ki,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Xi,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:l="default",danger:s=!1}=n,c=D(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Ki,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(Xi,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},Gi=h.button`
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
`,Ji=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,l=D(e,["children","focusHighlight","focusOutline","type"]);return t(Gi,Object.assign({ref:n,$outline:i,$highlight:o,type:a},l,{children:r}))})),Qi=p`
    color: ${Wt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,ea=h(b)`
    ${Qi}
`,ta=h(w)`
    ${Qi}
`,na=h(f)`
    ${Qi}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ra=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,oa=h.div`
    display: flex;
    flex: 1;
    position: relative;
`,ia=h.div`
    isolation: isolate;
    width: 100%;
`,aa=h.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Wt.Neutral[8]};

    ${e=>{if(!e.$visible)return p`
                display: none;
            `}}
`,la=h.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,sa=h.div`
    display: flex;
`,ca=h.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?p`
                display: none;
            `:e.$expanded?p`
                ${na} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ua=h.p`
    ${tn("H5","regular")}
`,da=h.div`
    display: flex;
`,fa=h(Ji)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ha=h.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,pa=h(qi.Small)`
    flex: 1;
`,ga=h.div`
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
`,ma=h.div`
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
`,ya=h(rn.H5)`
    ${e=>{if(e.$disabledDisplay)return p`
                color: ${Wt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return p`
                    color: ${Wt.Neutral[3](e)};
                `;case"selected-month":return p`
                    ${tn("H5","semibold")}
                    color: ${Wt.Primary(e)};
                `}}}
`,va=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onMonthSelect:f})=>{const h=u((()=>Ri.generateMonths(bi(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&l,i="end"===n&&r&&e.isBefore(r,"month")&&l;return t||i},g=e=>{const t=e.format("MMMM"),n=(r=e,!Ri.isWithinRange(r,s?bi(s):void 0,c?bi(c):void 0,"month"));var r;const o=i.isSame(e,"month")?"selected-month":bi().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||d,month:t,variant:o}};return h.length?t(ga,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,month:i}=g(e);return t(ma,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(e,!r)},{children:t(ya,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n},{children:i}))}),i)}))})):null},ba=h.div`
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
`,wa=h.div`
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
`,Da=h(rn.H5)`
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
`,$a=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:l,minDate:s,maxDate:c,allowDisabledSelection:d,onYearSelect:f})=>{const h=u((()=>Ri.generateDecadeOfYears(bi(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&l,i="end"===n&&r&&e.isBefore(r,"year")&&l;return t||i},g=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(o=e,!Ri.isWithinRange(o,s?bi(s):void 0,c?bi(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":bi().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||d,year:n,variant:a}};return h.length?t(ba,Object.assign({$type:a},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,year:i}=g(e);return t(wa,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(e,!r)},{children:t(Da,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},xa=o.forwardRef(((r,o)=>{var{children:i,initialCalendarDate:c,type:u,minDate:f,maxDate:h,currentFocus:p,selectedStartDate:g,selectedEndDate:m,selectWithinRange:y,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:$,doneButtonDisabled:x,onDismiss:S,showNavigationHeader:F=!0,getLeftArrowDate:B,getRightArrowDate:E,isLeftArrowDisabled:k,isRightArrowDisabled:O,getMonthHeaderLabel:A,getYearHeaderLabel:R}=r,C=D(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[M,L]=s(Ni.toDayjs(c)),[H,T]=s(Ni.toDayjs(c)),[N,I]=s("default"),j=l(null),Y=l(null),P=l();d(o,(()=>({defaultView(){I("default")},resetView(){const e=Ni.toDayjs(c);L(e),T(e),I("default")},setCalendarDate(e){const t=Ni.toDayjs(e);L(t),T(t)}}))),a((()=>{const e=Ni.toDayjs(c);L(e),T(e)}),[c]),a((()=>{K(H)}),[H]);const z=()=>{"month-options"!==N?(I("month-options"),P.current.focus()):(I("default"),L(H))},W=()=>{"default"!==N?(I("default"),L(H)):I("year-options")},_=()=>{P.current.focus();const e=B?B(M):M.subtract(1,"month");switch(N){case"default":T(e),L(e);break;case"month-options":L((e=>e.subtract(1,"year")));break;case"year-options":L((e=>e.subtract(10,"year")))}},V=()=>{P.current.focus();const e=E?E(M):M.add(1,"month");switch(N){case"default":T(e),L(e);break;case"month-options":L((e=>e.add(1,"year")));break;case"year-options":L((e=>e.add(10,"year")))}},U=e=>{L(e),T(e),$||I("default")},Z=()=>{const e=Ni.toDayjs(c);L(e),T(e),"default"===N?X("reset"):I("default")},K=e=>{w&&w(e)},X=e=>{S&&S(e)},q=()=>{if(!f||b)return!1;const e=bi(f);return"month-options"===N?!Ri.isPreviousYearWithinRange(M,e):"year-options"===N?!Ri.isPreviousDecadeWithinRange(M,e):k?k(M):!Ri.isPreviousMonthWithinRange(M,e)},G=()=>{if(!h||b)return!1;const e=bi(h);return"month-options"===N?!Ri.isNextYearWithinRange(M,e):"year-options"===N?!Ri.isNextDecadeWithinRange(M,e):O?O(M):!Ri.isNextMonthWithinRange(M,e)},J=()=>{if("year-options"===N){const{beginDecade:e,endDecade:t}=Ri.getStartEndDecade(M);return`${e} to ${t}`}return R?R(M):M.format("YYYY")},Q=()=>{const r=A?A(M):M.format("MMM");return e(n,{children:[e(ca,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===N,$visible:"default"===N,id:"month-dropdown",onClick:z},{children:[t(ua,{children:r}),t(na,{})]})),e(ca,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==N,id:"year-dropdown",onClick:W},{children:[t(ua,{children:J()}),t(na,{})]}))]})},ee=()=>{switch(N){case"month-options":return t(va,{type:u,calendarDate:M,currentFocus:p,minDate:f,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:H,isNewSelection:y,onMonthSelect:U,allowDisabledSelection:b});case"year-options":return t($a,{type:u,calendarDate:M,currentFocus:p,minDate:f,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:H,isNewSelection:y,onYearSelect:U,allowDisabledSelection:b});default:return null}};return e(ra,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container"},C,{children:[F&&e(la,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(sa,{children:Q()}),e(da,{children:[t(fa,Object.assign({"data-testid":"left-arrow-btn",disabled:q(),focusHighlight:!1,tabIndex:-1,onClick:_},{children:t(ea,{})})),t(fa,Object.assign({"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(ta,{})}))]})]})),t(oa,{children:(()=>{const r="function"==typeof i?i({calendarDate:H,currentView:N}):i;return e(n,v?{children:["default"===N&&r,ee()]}:{children:[t(ia,{children:r}),t(aa,Object.assign({$visible:"default"!==N},{children:ee()}))]})})()}),(()=>{if(!$)return;const n=!!("default"===N)&&x;return e(ha,{children:[t(pa,Object.assign({ref:Y,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(pa,Object.assign({"data-testid":"done-button",ref:j,type:"button",onClick:()=>{n||(L(H),"default"===N?X("confirmed"):I("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Sa=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Fa=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Ba=h.div`
    grid-column: 1 / -1;
    display: flex;
`;h.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Ea=h.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return p`
                    left: 0;
                `;case"right":return p`
                    right: 0;
                `}}}
`,ka=h.div`
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
`,h(Ea)`
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
`,h(ka)`
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
`;const Oa=e=>{let t=Wt.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Wt.Accent.Light[5];break;case"hover-dash":t=Wt.Accent.Light[6],n=`1px dashed ${Wt.Accent.Light[4](e)}`;break;case"hover-current":t=Wt.Neutral[8],n=`1px solid ${Wt.Primary(e)}`;break;case"selected":t=Wt.Accent.Light[5],n=`1px solid ${Wt.Accent.Light[4](e)}`;break;case"selected-outline":t=Wt.Accent.Light[5],n=`1px solid ${Wt.Primary(e)}`;break;case"overlap":t=Wt.Accent.Light[4],n=`1px solid ${Wt.Accent.Light[4](e)}`;break;case"overlap-outline":t=Wt.Accent.Light[4],n=`1px solid ${Wt.Primary(e)}`}return{color:t,border:n}},Aa=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ra=h.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Oa(e);return p`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Ca=h(Ra)`
    left: 0;
`,Ma=h(Ra)`
    right: 0;
`,La=h.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Wt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Ha=h(La)`
    left: 0;
`,Ta=h(La)`
    right: 0;
`,Na=h.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Oa(e);return p`
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
`,Ia=h(Na)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Wt.Shadow.Accent};
    }
`,ja=h(Na)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Wt.Shadow.Accent};
    }
`,Ya=h(rn.H5)`
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
`,Pa=({bgLeft:n,bgRight:r,circleLeft:o,circleRight:i,shadow:a,circleShadow:l,labelType:s,disabled:c,interactive:u,date:d,onSelect:f,onHover:h,onHoverEnd:p})=>e(Aa,{children:[t(Ha,{$shadow:n&&a}),t(Ca,{$type:n,$shadow:n&&a}),t(Ia,{$type:o,$shadow:o&&l}),t(Ta,{$shadow:r&&a}),t(Ma,{$type:r,$shadow:r&&a}),t(ja,{$type:i,$shadow:i&&l}),t(Ya,Object.assign({weight:"regular",$type:s,$disabled:c,$interactive:u,onClick:()=>{f(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{p&&p(d)}},{children:d.date()}))]}),za=({date:e,calendarDate:n,startDate:r,endDate:o,currentFocus:i,hoverDate:a,minDate:l,maxDate:s,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,onSelect:f,onHover:h})=>{const p=Ri.isDisabledDay(e,c,l,s),g=!p||u,m=()=>{const e=bi(a),t=e.isBefore(o,"day"),n=e.isAfter(r,"day");let l,s,c,u;return"start"===i&&o&&t&&(r&&n?(c=a,u=o):(l=a,s=r||o)),"end"===i&&r&&n&&(o&&t?(c=r,u=a):(l=o||r,s=a)),{hoverStart:l,hoverEnd:s,overlapStart:c,overlapEnd:u}},y={date:e,calendarDate:n,disabled:p,interactive:g,onSelect:()=>{f(e,!g)},onHover:()=>{h(e.format("YYYY-MM-DD"),!g)}};return t(Pa,Object.assign({},y,(()=>{const t={};if(n.month()!==e.month())t.labelType="unavailable";else if(bi().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),a="start"===i&&o&&e.isAfter(o);(n||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},n=e.isSame(r,"day"),i=e.isSame(o,"day");return(r&&n||o&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&o&&e.isBetween(r,o,"day","[]")&&(t.labelType="selected",n||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!a)return;const t={};e.isSame(a,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:o,overlapEnd:i}=m();if(n&&r){if(e.isBetween(n,r,"day","[]")){const o=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",o||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(o&&i){if(e.isBetween(o,i,"day","[]")){const n=e.isSame(o,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};bi.extend(Ei);const Wa=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:d,minDate:f,maxDate:h,allowDisabledSelection:p})=>{const g=u((()=>Ri.generateDays(n)),[n]),[m,y]=s(""),v=(e,t)=>{t&&!p||l(e)},b=(e,t)=>{t&&!p||(y(e),c(e))},w=()=>{y(""),c("")};return e(Sa,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,n)=>t(Fa,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:bi(e).format("ddd")}))},`week-day-${n}`))),g.map(((e,l)=>t(Ba,Object.assign({onMouseLeave:w},{children:e.map(((e,l)=>t(za,{date:e,calendarDate:n,startDate:i,endDate:a,hoverDate:m,currentFocus:r,minDate:f,maxDate:h,disabledDates:o,allowDisabledSelection:p,isNewSelection:d,onSelect:v,onHover:b},`day-${l}`)))}),l)))]}))},_a=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,numberOfDays:c,onSelect:u,onHover:d})=>{const f=Ri.isDisabledDay(e,l,i,a),h=!f||s,{start:p,end:g}=r?Ri.getFixedRangeStartEnd(Ni.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:y}=o?Ri.getFixedRangeStartEnd(Ni.toDayjs(o),c):{start:void 0,end:void 0},v=r&&e.isBetween(p,g,"day","[]"),b=o&&e.isBetween(m,y,"day","[]"),w=v&&e.isSame(p,"day")||b&&e.isSame(m,"day"),D=v&&e.isSame(g,"day")||b&&e.isSame(y,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},x={date:e,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(Pa,Object.assign({},x,(()=>{const t={};return v||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":bi().isSame(e,"day")&&!f&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&$(t,"hover-dash",n===m,n===y),v&&$(t,"selected",n===p,n===g),v&&b&&$(t,"overlap",w,D),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===m&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,m>=p&&m<g&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Va=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:d,numberOfDays:f})=>{const h=u((()=>Ri.generateDays(n)),[n]),[p,g]=s(""),m=(e,t)=>{t&&!d||(i(e),e&&!bi(e).isSame(e,"month")&&g(""))},y=(e,t)=>{t&&!d||(g(e),a(e))},v=()=>{g(""),a("")};return e(Sa,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(Fa,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:bi(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(Ba,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(_a,{date:e,calendarDate:n,selectedDate:o,hoverDate:p,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:m,onHover:y,numberOfDays:f},`day-${i}`)))}),i)))]}))},Ua=h.div`
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
`,Za=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:l,allowDisabledSelection:s,onSelect:c,onHover:u})=>{const d=Ri.isDisabledDay(e,l,i,a),f=!d||s,{start:h,end:p}=Ri.getWeekStartEnd(Ni.toDayjs(r)),{start:g,end:m}=Ri.getWeekStartEnd(Ni.toDayjs(o)),y=r&&e.isBetween(h,p,"day","[]"),v=o&&e.isBetween(g,m,"day","[]"),b=y&&e.isSame(h)||v&&e.isSame(g),w=y&&e.isSame(p)||v&&e.isSame(m),D={date:e,calendarDate:n,disabled:d,interactive:f,onSelect:()=>{c(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(Pa,Object.assign({},D,(()=>{const t={};return y||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":bi().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&v?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):y?t="selected-outline":v&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},Ka=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:l,maxDate:c,allowDisabledSelection:d})=>{const f=u((()=>Ri.generateDays(n)),[n]),[h,p]=s(""),g=(e,t)=>{if(t&&!d)return;const n=e.startOf("week");i(n),e&&!bi(e).isSame(n,"month")&&p("")},m=(e,t)=>{t&&!d||(p(e),a(e))},y=()=>{p(""),a("")};return e(Sa,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(Fa,{children:t(rn.H6,Object.assign({weight:"semibold"},{children:bi(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,i)=>t(Ba,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Za,{date:e,calendarDate:n,selectedDate:o,hoverDate:h,minDate:l,maxDate:c,disabledDates:r,allowDisabledSelection:d,onSelect:g,onHover:m},`day-${i}`)))}),i)))]}))},Xa=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:o,onDismiss:i,value:a,endValue:s,currentFocus:c,withButton:u,variant:f,minDate:h,maxDate:p,allowDisabledSelection:g,type:m="standalone",selectWithinRange:y=!0,initialCalendarDate:v,numberOfDays:b},w)=>{const D=l(),$=l(void 0);d(w,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const x=e=>{const t=e.format("YYYY-MM-DD");D.current.setCalendarDate(t),F(t)},S=e=>{B(e)},F=e=>{r&&r(e)},B=e=>{o&&o(e)},E=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(Ua,Object.assign({$type:m},{children:t(xa,Object.assign({type:m,ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(f){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!s;break;case"week":e=!a&&!s}return e})(),onDismiss:i,minDate:h,maxDate:p,selectWithinRange:y,currentFocus:c,selectedStartDate:a,selectedEndDate:s,allowDisabledSelection:g,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||E(e),$.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(f){case"week":return t(Ka,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:x,onHover:S});case"fixed-range":return t(Va,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:h,maxDate:p,allowDisabledSelection:g,onSelect:x,onHover:S,numberOfDays:b});default:return t(Wa,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:s,minDate:h,maxDate:p,isNewSelection:y,allowDisabledSelection:g,onSelect:x,onHover:S})}})(n)}))}))})),qa=o.forwardRef(((e,n)=>t(yi,Object.assign({"data-testid":"calendar-dropdown"},{children:t(Xa,Object.assign({ref:n},e))})))),Ga=p`
    border: 1px solid ${Wt.Accent.Light[1]};
    box-shadow: ${Ut.InputBoxShadow};
`,Ja=p`
    border: 1px solid transparent;
    box-shadow: none;
`,Qa=p`
    border: 1px solid ${Wt.Neutral[5]};
    box-shadow: none;
`,el=p`
    border: 1px solid ${Wt.Validation.Red.Border};
    box-shadow: ${Ut.InputErrorBoxShadow};
`,tl=h.div`
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
        ${Ga}
    }
    ${e=>e.$focused&&Ga}

    ${e=>e.$readOnly?p`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ja}
                }
                ${e.$focused&&Ja}
            `:e.$disabled?p`
                background: ${Wt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${Qa}
                }
                ${e.$focused&&Qa}
            `:e.$error?p`
                border: 1px solid ${Wt.Validation.Red.Border};

                :focus-within {
                    ${el}
                }
                ${e.$focused&&el}
            `:void 0}
`,nl=h.input`
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
`,rl=h.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ol=h.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return p`
                ${il}, ${cl} {
                    color: ${Wt.Neutral[4]};
                }
            `}}
`,il=h(nl)`
    background: transparent;
    text-align: center;
`,al=h(il)`
    width: 2rem;
    margin-right: 0.25rem;
`,ll=h(il)`
    width: 2.5rem;
`,sl=h(il)`
    width: 3rem;
    margin-left: 0.25rem;
`,cl=h(rn.Body)`
    ${e=>{if(e.$inactive)return p`
                color: ${Wt.Neutral[3](e)};
            `}}
`,ul=h.div`
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
`;bi.extend(xi);const dl=o.forwardRef((({disabled:n,readOnly:r,names:o,value:i,focused:c,hoverValue:u,placeholder:f,label:h,onChange:p,onFocus:g,onBlur:m,hideInputKeyboard:y},v)=>{const b=y?"none":"numeric",[w,D,$]=Pi(""),[x,S,F]=Pi(""),[B,E,k]=Pi(""),[O,A]=s("none"),[R,C]=s(!1),M=l(null),L=l(null),H=l(null),T=l(null),[N,I,j]=V(u);a((()=>{const[e="",t="",n=""]=V(i);D(e),S(t),E(n)}),[i]),a((()=>{c||A("none"),c&&(C(!0),M.current.contains(document.activeElement)||L.current.focus())}),[c]),d(v,(()=>({ref:M,resetPlaceholder(){C(!1)},resetInput(){const[e="",t="",n=""]=V(i);D(e),S(t),E(n)}})),[i]);const Y=e=>{var t;e.preventDefault(),null===(t=L.current)||void 0===t||t.focus()},P=e=>{e.target.select();const t=e.target.name;A(t)},z=e=>{const[t,n,r]=o,i={[t]:$.current,[n]:F.current,[r]:k.current},a=e.target.name,l=i[a],s=a!==r?Yi.padValue(l,!0):l;switch(a){case t:i[t]=s,D(s);break;case n:i[n]=s,S(s)}const c=`${i[r]}-${i[n]}-${i[t]}`,u=bi(c,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&l!==s&&p(c),M.current.contains(e.relatedTarget)||(A("none"),null==m||m(d||u))},W=e=>{if(u)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:w,month:x,year:B};switch(t){case o[0]:r.day=n,D(n),2===n.length&&H.current.focus();break;case o[1]:r.month=n,S(n),2===n.length&&T.current.focus();break;case o[2]:r.year=n,E(n)}if(!r.day&&!r.month&&!r.year)return void p("");const i=`${r.year}-${r.month}-${r.day}`;bi(i,"YYYY-MM-DD",!0).isValid()&&p(i)},_=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===x.length&&L.current.focus(),O===o[2]&&0===B.length&&H.current.focus())};function V(e){if(e){const t=bi(new Date(e));return[Yi.padValue(t.date().toString()),Yi.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(rl,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(C(!0),M.current.contains(document.activeElement)||L.current.focus())},onFocus:e=>{n||(C(!0),c||null==g||g(e))}},{children:[e(ol,Object.assign({ref:M,$hover:!!u},{children:[t(al,{ref:L,name:o[0],maxLength:2,value:null!=N?N:w,onFocus:P,onBlur:z,onChange:W,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==o[0]||r?"DD":""}),t(cl,Object.assign({$inactive:0===w.length},{children:"/"})),t(ll,{ref:H,name:o[1],maxLength:2,value:null!=I?I:x,onFocus:P,onBlur:z,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==o[1]||r?"MM":""}),t(cl,Object.assign({$inactive:0===x.length},{children:"/"})),t(sl,{ref:T,name:o[2],maxLength:4,value:null!=j?j:B,onFocus:P,onBlur:z,onChange:W,onKeyDown:_,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:O!==o[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&f)return t(ul,Object.assign({$hide:R,$disabled:n,onMouseDown:Y},{children:f}))})()]}))})),fl=h(tl)`
    height: 3rem;
`,hl=e=>{var{minDate:n,maxDate:r,disabled:o,disabledDates:i,error:c,hideInputKeyboard:u,value:d,onChange:f,onFocus:h,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:y,id:v,allowDisabledSelection:b,zIndex:w=50}=e,$=D(e,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,S]=s(Ii.sanitizeInput(d)),[F,B]=s(Ii.sanitizeInput(d)),[E,k]=s(void 0),[O,A]=s(!1),[R,C]=s(!1),M=l(null),L=l();a((()=>{const e=Ii.sanitizeInput(d);S(e),B(e)}),[d]);const H=e=>{!b&&Ii.isDateDisabled(e,{disabledDates:i,minDate:n,maxDate:r})||(B(e),m||(P(e),S(e),e&&A(!1)))},T=e=>{B(e),m||(P(e),S(e),e&&(M.current.focus(),A(!1)))},N=()=>{y||o||(A(!0),R||(C(!0),h&&h()))},I=e=>{!R||O||M.current.contains(e.relatedTarget)||(L.current.resetInput(),B(x),C(!1),z())},j=e=>{k(e)},Y=e=>{switch(e){case"reset":B(x);break;case"confirmed":S(F),P(F)}M.current.focus(),A(!1)},P=e=>{f&&f(e)},z=()=>{p&&p()};return t(hi,{enabled:!y&&!o,isOpen:O,renderElement:()=>t(fl,Object.assign({tabIndex:-1,ref:M,onBlur:I,onFocus:N,$disabled:o,$readOnly:y,$focused:R,$error:c,id:v,"data-testid":$["data-testid"]},$,{children:t(dl,{ref:L,disabled:o,onChange:H,readOnly:y,focused:O,names:["start-day","start-month","start-year"],value:F,hoverValue:E,hideInputKeyboard:u})})),renderDropdown:()=>t(qa,{type:"input",variant:"single",initialCalendarDate:F,withButton:m,value:F,disabledDates:i,minDate:n,maxDate:r,allowDisabledSelection:b,onHover:j,onSelect:T,onDismiss:Y,onYearMonthDisplayChange:g}),onClose:()=>{L.current.resetInput(),B(x),A(!1),C(!1),z()},onDismiss:()=>{L.current.resetInput(),M.current.focus(),B(x),A(!1)},zIndex:w})};export{hl as DateInput};
//# sourceMappingURL=index.js.map
