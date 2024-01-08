import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as n from"react";import r,{cloneElement as i,useRef as o,useState as a,isValidElement as s,createRef as l,PureComponent as u,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as f,useContext as p,useMemo as g}from"react";import m,{css as y,keyframes as v}from"styled-components";import{ExternalIcon as b}from"@lifesg/react-icons/external";import{ChevronDownIcon as w}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as $}from"@lifesg/react-icons/chevron-up";import{findDOMNode as S,unstable_batchedUpdates as x}from"react-dom";import{CircleIcon as F}from"@lifesg/react-icons/circle";import{CircleDotIcon as D}from"@lifesg/react-icons/circle-dot";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{SquareIcon as O}from"@lifesg/react-icons/square";import{SquareTickFillIcon as B}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as k}from"@lifesg/react-icons/tick";function M(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var E="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},A=Array.isArray,H="object"==typeof E&&E&&E.Object===Object&&E,P="object"==typeof self&&self&&self.Object===Object&&self,C=H||P||Function("return this")(),I=C.Symbol,T=I,z=Object.prototype,j=z.hasOwnProperty,N=z.toString,R=T?T.toStringTag:void 0;var V=function(e){var t=j.call(e,R),n=e[R];try{e[R]=void 0;var r=!0}catch(e){}var i=N.call(e);return r&&(t?e[R]=n:delete e[R]),i},L=Object.prototype.toString;var W=V,Y=function(e){return L.call(e)},U=I?I.toStringTag:void 0;var q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":U&&U in Object(e)?W(e):Y(e)};var Q=q,Z=function(e){return null!=e&&"object"==typeof e};var G=function(e){return"symbol"==typeof e||Z(e)&&"[object Symbol]"==Q(e)},X=A,J=G,K=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/;var te=function(e,t){if(X(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!J(e))||(ee.test(e)||!K.test(e)||null!=t&&e in Object(t))};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},re=q,ie=ne;var oe,ae=function(e){if(!ie(e))return!1;var t=re(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},se=C["__core-js_shared__"],le=(oe=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||""))?"Symbol(src)_1."+oe:"";var ue=function(e){return!!le&&le in e},ce=Function.prototype.toString;var de=ae,he=ue,fe=ne,pe=function(e){if(null!=e){try{return ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ge=/^\[object .+?Constructor\]$/,me=Function.prototype,ye=Object.prototype,ve=me.toString,be=ye.hasOwnProperty,we=RegExp("^"+ve.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $e=function(e){return!(!fe(e)||he(e))&&(de(e)?we:ge).test(pe(e))},Se=function(e,t){return null==e?void 0:e[t]};var xe=function(e,t){var n=Se(e,t);return $e(n)?n:void 0},Fe=xe(Object,"create"),De=Fe;var _e=function(){this.__data__=De?De(null):{},this.size=0};var Oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Be=Fe,ke=Object.prototype.hasOwnProperty;var Me=function(e){var t=this.__data__;if(Be){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ke.call(t,e)?t[e]:void 0},Ee=Fe,Ae=Object.prototype.hasOwnProperty;var He=Fe;var Pe=_e,Ce=Oe,Ie=Me,Te=function(e){var t=this.__data__;return Ee?void 0!==t[e]:Ae.call(t,e)},ze=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=He&&void 0===t?"__lodash_hash_undefined__":t,this};function je(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}je.prototype.clear=Pe,je.prototype.delete=Ce,je.prototype.get=Ie,je.prototype.has=Te,je.prototype.set=ze;var Ne=je;var Re=function(){this.__data__=[],this.size=0};var Ve=function(e,t){return e===t||e!=e&&t!=t};var Le=function(e,t){for(var n=e.length;n--;)if(Ve(e[n][0],t))return n;return-1},We=Le,Ye=Array.prototype.splice;var Ue=Le;var qe=Le;var Qe=Le;var Ze=Re,Ge=function(e){var t=this.__data__,n=We(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ye.call(t,n,1),--this.size,!0)},Xe=function(e){var t=this.__data__,n=Ue(t,e);return n<0?void 0:t[n][1]},Je=function(e){return qe(this.__data__,e)>-1},Ke=function(e,t){var n=this.__data__,r=Qe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function et(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}et.prototype.clear=Ze,et.prototype.delete=Ge,et.prototype.get=Xe,et.prototype.has=Je,et.prototype.set=Ke;var tt=et,nt=xe(C,"Map"),rt=Ne,it=tt,ot=nt;var at=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var st=function(e,t){var n=e.__data__;return at(t)?n["string"==typeof t?"string":"hash"]:n.map},lt=st;var ut=st;var ct=st;var dt=st;var ht=function(){this.size=0,this.__data__={hash:new rt,map:new(ot||it),string:new rt}},ft=function(e){var t=lt(this,e).delete(e);return this.size-=t?1:0,t},pt=function(e){return ut(this,e).get(e)},gt=function(e){return ct(this,e).has(e)},mt=function(e,t){var n=dt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function yt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}yt.prototype.clear=ht,yt.prototype.delete=ft,yt.prototype.get=pt,yt.prototype.has=gt,yt.prototype.set=mt;var vt=yt;function bt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(bt.Cache||vt),n}bt.Cache=vt;var wt=bt;var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/\\(\\)?/g,xt=function(e){var t=wt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace($t,(function(e,n,r,i){t.push(r?i.replace(St,"$1"):n||e)})),t}));var Ft=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Dt=A,_t=G,Ot=I?I.prototype:void 0,Bt=Ot?Ot.toString:void 0;var kt=function e(t){if("string"==typeof t)return t;if(Dt(t))return Ft(t,e)+"";if(_t(t))return Bt?Bt.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Mt=kt;var Et=A,At=te,Ht=xt,Pt=function(e){return null==e?"":Mt(e)};var Ct=G;var It=function(e,t){return Et(e)?e:At(e,t)?[e]:Ht(Pt(e))},Tt=function(e){if("string"==typeof e||Ct(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var zt=function(e,t){for(var n=0,r=(t=It(t,e)).length;null!=e&&n<r;)e=e[Tt(t[n++])];return n&&n==r?e:void 0};var jt=function(e,t,n){var r=null==e?void 0:zt(e,t);return void 0===r?n:r};const Nt=(e,t,n)=>t?jt(n,t)||jt(e,t):n||e,Rt=(e,t)=>{const n=t||e.defaultValue;return jt(e.collections,n)};var Vt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Vt||(Vt={}));const Lt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Wt=e=>t=>{const n=t.theme,r=Rt(Lt,n[Vt.colorScheme]);return n.options&&n.options.color?Nt(r,e,n.options.color):Nt(r,e)},Yt={Brand:{1:Wt("Brand.1"),2:Wt("Brand.2"),3:Wt("Brand.3"),4:Wt("Brand.4"),5:Wt("Brand.5"),6:Wt("Brand.6")},Primary:Wt("Primary"),PrimaryDark:Wt("PrimaryDark"),Secondary:Wt("Secondary"),Accent:{Light:{1:Wt("Accent.Light.1"),2:Wt("Accent.Light.2"),3:Wt("Accent.Light.3"),4:Wt("Accent.Light.4"),5:Wt("Accent.Light.5"),6:Wt("Accent.Light.6")},Dark:{1:Wt("Accent.Dark.1"),2:Wt("Accent.Dark.2"),3:Wt("Accent.Dark.3")}},Neutral:{1:Wt("Neutral.1"),2:Wt("Neutral.2"),3:Wt("Neutral.3"),4:Wt("Neutral.4"),5:Wt("Neutral.5"),6:Wt("Neutral.6"),7:Wt("Neutral.7"),8:Wt("Neutral.8")},Validation:{Green:{Text:Wt("Validation.Green.Text"),Icon:Wt("Validation.Green.Icon"),Border:Wt("Validation.Green.Border"),Background:Wt("Validation.Green.Background")},Orange:{Text:Wt("Validation.Orange.Text"),Icon:Wt("Validation.Orange.Icon"),Border:Wt("Validation.Orange.Border"),Background:Wt("Validation.Orange.Background"),Badge:Wt("Validation.Orange.Badge")},Red:{Text:Wt("Validation.Red.Text"),Icon:Wt("Validation.Red.Icon"),Border:Wt("Validation.Red.Border"),Background:Wt("Validation.Red.Background")},Blue:{Text:Wt("Validation.Blue.Text"),Icon:Wt("Validation.Blue.Icon"),Border:Wt("Validation.Blue.Border"),Background:Wt("Validation.Blue.Background")}},Shadow:{Accent:Wt("Shadow.Accent"),Red:Wt("Shadow.Red"),Elevation:Wt("Shadow.Elevation")}},Ut={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${Yt.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${Yt.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Yt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${Yt.Shadow.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${Yt.Shadow.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${Yt.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},qt=e=>t=>{var n;const r=t.theme,i=Rt(Ut,r[Vt.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Nt(i,e,r.options.designToken):Nt(i,e)},Qt={InputBoxShadow:qt("InputBoxShadow"),InputErrorBoxShadow:qt("InputErrorBoxShadow"),ElevationBoxShadow:qt("ElevationBoxShadow"),Table:{Header:qt("Table.Header"),Cell:{Primary:qt("Table.Cell.Primary"),Secondary:qt("Table.Cell.Secondary"),Selected:qt("Table.Cell.Selected"),Hover:qt("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:qt("Button.Danger.BackgroundColor"),Hover:qt("Button.Danger.Hover"),Primary:qt("Button.Danger.Primary"),Border:qt("Button.Danger.Border")}}},Zt={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Gt={collections:{base:{D1:{fontFamily:Zt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Zt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Zt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Zt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Zt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Zt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Zt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Zt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Zt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Zt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Zt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Zt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Xt=e=>t=>{const n=t.theme,r=Rt(Gt,n[Vt.textStyleScheme]);return n.options&&n.options.textStyle?Nt(r,e,n.options.textStyle):Nt(r,e)},Jt={D1:{fontFamily:Xt("D1.fontFamily"),fontSize:Xt("D1.fontSize"),fontWeight:Xt("D1.fontWeight"),lineHeight:Xt("D1.lineHeight"),letterSpacing:Xt("D1.letterSpacing")},D2:{fontFamily:Xt("D2.fontFamily"),fontSize:Xt("D2.fontSize"),fontWeight:Xt("D2.fontWeight"),lineHeight:Xt("D2.lineHeight"),letterSpacing:Xt("D2.letterSpacing")},D3:{fontFamily:Xt("D3.fontFamily"),fontSize:Xt("D3.fontSize"),fontWeight:Xt("D3.fontWeight"),lineHeight:Xt("D3.lineHeight"),letterSpacing:Xt("D3.letterSpacing")},D4:{fontFamily:Xt("D4.fontFamily"),fontSize:Xt("D4.fontSize"),fontWeight:Xt("D4.fontWeight"),lineHeight:Xt("D4.lineHeight"),letterSpacing:Xt("D4.letterSpacing")},DBody:{fontFamily:Xt("DBody.fontFamily"),fontSize:Xt("DBody.fontSize"),fontWeight:Xt("DBody.fontWeight"),lineHeight:Xt("DBody.lineHeight"),letterSpacing:Xt("DBody.letterSpacing")},H1:{fontFamily:Xt("H1.fontFamily"),fontSize:Xt("H1.fontSize"),fontWeight:Xt("H1.fontWeight"),lineHeight:Xt("H1.lineHeight"),letterSpacing:Xt("H1.letterSpacing")},H2:{fontFamily:Xt("H2.fontFamily"),fontSize:Xt("H2.fontSize"),fontWeight:Xt("H2.fontWeight"),lineHeight:Xt("H2.lineHeight"),letterSpacing:Xt("H2.letterSpacing")},H3:{fontFamily:Xt("H3.fontFamily"),fontSize:Xt("H3.fontSize"),fontWeight:Xt("H3.fontWeight"),lineHeight:Xt("H3.lineHeight"),letterSpacing:Xt("H3.letterSpacing")},H4:{fontFamily:Xt("H4.fontFamily"),fontSize:Xt("H4.fontSize"),fontWeight:Xt("H4.fontWeight"),lineHeight:Xt("H4.lineHeight"),letterSpacing:Xt("H4.letterSpacing")},H5:{fontFamily:Xt("H5.fontFamily"),fontSize:Xt("H5.fontSize"),fontWeight:Xt("H5.fontWeight"),lineHeight:Xt("H5.lineHeight"),letterSpacing:Xt("H5.letterSpacing")},H6:{fontFamily:Xt("H6.fontFamily"),fontSize:Xt("H6.fontSize"),fontWeight:Xt("H6.fontWeight"),lineHeight:Xt("H6.lineHeight"),letterSpacing:Xt("H6.letterSpacing")},Body:{fontFamily:Xt("Body.fontFamily"),fontSize:Xt("Body.fontSize"),fontWeight:Xt("Body.fontWeight"),lineHeight:Xt("Body.lineHeight"),letterSpacing:Xt("Body.letterSpacing")},BodySmall:{fontFamily:Xt("BodySmall.fontFamily"),fontSize:Xt("BodySmall.fontSize"),fontWeight:Xt("BodySmall.fontWeight"),lineHeight:Xt("BodySmall.lineHeight"),letterSpacing:Xt("BodySmall.letterSpacing")},XSmall:{fontFamily:Xt("XSmall.fontFamily"),fontSize:Xt("XSmall.fontSize"),fontWeight:Xt("XSmall.fontWeight"),lineHeight:Xt("XSmall.lineHeight"),letterSpacing:Xt("XSmall.letterSpacing")}},Kt=e=>{switch(e){case 700:case"bold":return Zt.Bold;case 600:case"semibold":return Zt.Semibold;case 300:case"light":return Zt.Light;case 400:case"regular":return Zt.Regular;default:return""}},en=(e,t)=>n=>{var r;const i=Jt[e].fontFamily(n),o=Jt[e].fontWeight(n);return Object.values(Zt).includes(i)?y`
                font-family: ${Kt(t)||Kt(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=tn(t)||o)&&void 0!==r?r:"normal"};
        `},tn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},nn=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},rn=en,on=(e,t,n=!1)=>r=>{const i=Jt[e],o=i.fontSize(r);return y`
            ${en(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},an=(e=!1,t=!1,n=void 0)=>t?y`
            display: block;
            ${nn(n)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${nn(n)}
        `;var sn;!function(e){e.D1=m.h1`
        ${e=>y`
                ${on("D1",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=m.h1`
        ${e=>y`
                ${on("D2",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=m.h1`
        ${e=>y`
                ${on("D3",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=m.h1`
        ${e=>y`
                ${on("D4",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=m.h1`
        ${e=>y`
                ${on("DBody",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=m.h1`
        ${e=>y`
                ${on("H1",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=m.h2`
        ${e=>y`
                ${on("H2",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=m.h3`
        ${e=>y`
                ${on("H3",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=m.h4`
        ${e=>y`
                ${on("H4",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=m.h5`
        ${e=>y`
                ${on("H5",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=m.h6`
        ${e=>y`
                ${on("H6",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=m.p`
        ${e=>y`
                ${on("Body",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=m.p`
        ${e=>y`
                ${on("BodySmall",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=m.span`
        ${e=>y`
                ${on("XSmall",e.weight,e.paragraph)}
                color: ${Yt.Neutral[1]};
                ${an(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>cn(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>cn(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(sn||(sn={}));const ln=m.a`
    ${e=>y`
            ${on(e.textStyle,e.weight)}
            color: ${Yt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Yt.Secondary};

                svg {
                    color: ${Yt.Secondary};
                }
            }
        `}
`,un=m(b)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,cn=n=>{var{external:r=!1,children:i}=n,o=M(n,["external","children"]);return e(ln,Object.assign({},o,{children:[i,r&&t(un,{})]}))};var dn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(dn||(dn={}));const hn=m.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Yt.Neutral[5]};
    border-radius: 4px;
    background: ${Yt.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Yt.Accent.Light[1]};
        box-shadow: ${Qt.InputBoxShadow};
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
                background: ${Yt.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Yt.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?y`
                border: 1px solid ${Yt.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Yt.Validation.Red.Border};
                    box-shadow: ${Qt.InputErrorBoxShadow};
                }
            `:void 0}
`,fn=m.input`
    ${on("Body","regular")}
    color: ${Yt.Neutral[1]};
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
        color: ${Yt.Neutral[3]};
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
`;var pn=function(e,t){return pn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},pn(e,t)};var gn=function(){return gn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},gn.apply(this,arguments)};var mn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var yn=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},vn="object"==typeof mn&&mn&&mn.Object===Object&&mn,bn="object"==typeof self&&self&&self.Object===Object&&self,wn=vn||bn||Function("return this")(),$n=wn,Sn=function(){return $n.Date.now()},xn=/\s/;var Fn=function(e){for(var t=e.length;t--&&xn.test(e.charAt(t)););return t},Dn=/^\s+/;var _n=function(e){return e?e.slice(0,Fn(e)+1).replace(Dn,""):e},On=wn.Symbol,Bn=On,kn=Object.prototype,Mn=kn.hasOwnProperty,En=kn.toString,An=Bn?Bn.toStringTag:void 0;var Hn=function(e){var t=Mn.call(e,An),n=e[An];try{e[An]=void 0;var r=!0}catch(e){}var i=En.call(e);return r&&(t?e[An]=n:delete e[An]),i},Pn=Object.prototype.toString;var Cn=Hn,In=function(e){return Pn.call(e)},Tn=On?On.toStringTag:void 0;var zn=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Tn&&Tn in Object(e)?Cn(e):In(e)},jn=function(e){return null!=e&&"object"==typeof e};var Nn=_n,Rn=yn,Vn=function(e){return"symbol"==typeof e||jn(e)&&"[object Symbol]"==zn(e)},Ln=/^[-+]0x[0-9a-f]+$/i,Wn=/^0b[01]+$/i,Yn=/^0o[0-7]+$/i,Un=parseInt;var qn=yn,Qn=Sn,Zn=function(e){if("number"==typeof e)return e;if(Vn(e))return NaN;if(Rn(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Rn(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Nn(e);var n=Wn.test(e);return n||Yn.test(e)?Un(e.slice(2),n?2:8):Ln.test(e)?NaN:+e},Gn=Math.max,Xn=Math.min;var Jn=function(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function g(){var e=Qn();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Xn(n,o-(e-u)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,a)}function y(){var e=Qn(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(g,t),c?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Zn(t)||0,qn(n)&&(c=!!n.leading,o=(d="maxWait"in n)?Gn(Zn(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:m(Qn())},y},Kn=Jn,er=yn;var tr=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return er(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Kn(e,t,{leading:r,maxWait:t,trailing:i})},nr=function(e,t,n,r){switch(t){case"debounce":return Jn(e,n,r);case"throttle":return tr(e,n,r);default:return e}},rr=function(e){return"function"==typeof e},ir=function(){return"undefined"==typeof window},or=function(e){return e instanceof Element||e instanceof HTMLDocument},ar=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&rr(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ir()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ir())return null;if(t)return document.querySelector(t);if(r&&or(r))return r;if(n.targetRef&&or(n.targetRef.current))return n.targetRef.current;var i=S(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ar(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!ir()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return rr(t)?"renderProp":rr(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,u=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ir()||(n.resizeHandler=nr(n.createResizeHandler,i,a,u),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}pn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ir()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,a=t.nodeType,s=void 0===a?"div":a,l=this.state,u={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(u);case"childFunction":return(e=o)(u);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(u,["targetRef"]);return i(e,c)}return i(e,u);case"childArray":return(e=o).map((function(e){return!!e&&i(e,u)}));default:return n.createElement(s,null)}}}(u);var sr=ir()?c:d;let lr=Fr();const ur=e=>wr(e,lr);let cr=Fr();ur.write=e=>wr(e,cr);let dr=Fr();ur.onStart=e=>wr(e,dr);let hr=Fr();ur.onFrame=e=>wr(e,hr);let fr=Fr();ur.onFinish=e=>wr(e,fr);let pr=[];ur.setTimeout=(e,t)=>{let n=ur.now()+t,r=()=>{let e=pr.findIndex((e=>e.cancel==r));~e&&pr.splice(e,1),vr-=~e?1:0},i={time:n,handler:e,cancel:r};return pr.splice(gr(n),0,i),vr+=1,$r(),i};let gr=e=>~(~pr.findIndex((t=>t.time>e))||~pr.length);ur.cancel=e=>{dr.delete(e),hr.delete(e),fr.delete(e),lr.delete(e),cr.delete(e)},ur.sync=e=>{br=!0,ur.batchedUpdates(e),br=!1},ur.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,ur.onStart(n)}return r.handler=e,r.cancel=()=>{dr.delete(n),t=null},r};let mr="undefined"!=typeof window?window.requestAnimationFrame:()=>{};ur.use=e=>mr=e,ur.now="undefined"!=typeof performance?()=>performance.now():Date.now,ur.batchedUpdates=e=>e(),ur.catch=console.error,ur.frameLoop="always",ur.advance=()=>{"demand"!==ur.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):xr()};let yr=-1,vr=0,br=!1;function wr(e,t){br?(t.delete(e),e(0)):(t.add(e),$r())}function $r(){yr<0&&(yr=0,"demand"!==ur.frameLoop&&mr(Sr))}function Sr(){~yr&&(mr(Sr),ur.batchedUpdates(xr))}function xr(){let e=yr;yr=ur.now();let t=gr(yr);t&&(Dr(pr.splice(0,t),(e=>e.handler())),vr-=t),vr?(dr.flush(),lr.flush(e?Math.min(64,yr-e):16.667),hr.flush(),cr.flush(),fr.flush()):yr=-1}function Fr(){let e=new Set,t=e;return{add(n){vr+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(vr-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,vr-=t.size,Dr(t,(t=>t(n)&&e.add(t))),vr+=e.size,t=e)}}}function Dr(e,t){e.forEach((e=>{try{t(e)}catch(e){ur.catch(e)}}))}function _r(){}const Or={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Br(e,t){if(Or.arr(e)){if(!Or.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const kr=(e,t)=>e.forEach(t);function Mr(e,t,n){if(Or.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Er=e=>Or.und(e)?[]:Or.arr(e)?e:[e];function Ar(e,t){if(e.size){const n=Array.from(e);e.clear(),kr(n,t)}}const Hr=(e,...t)=>Ar(e,(e=>e(...t))),Pr=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Cr,Ir,Tr=null,zr=!1,jr=_r;var Nr=Object.freeze({__proto__:null,get createStringInterpolator(){return Cr},get to(){return Ir},get colors(){return Tr},get skipAnimation(){return zr},get willAdvance(){return jr},assign:e=>{e.to&&(Ir=e.to),e.now&&(ur.now=e.now),void 0!==e.colors&&(Tr=e.colors),null!=e.skipAnimation&&(zr=e.skipAnimation),e.createStringInterpolator&&(Cr=e.createStringInterpolator),e.requestAnimationFrame&&ur.use(e.requestAnimationFrame),e.batchedUpdates&&(ur.batchedUpdates=e.batchedUpdates),e.willAdvance&&(jr=e.willAdvance),e.frameLoop&&(ur.frameLoop=e.frameLoop)}});const Rr=new Set;let Vr=[],Lr=[],Wr=0;const Yr={get idle(){return!Rr.size&&!Vr.length},start(e){Wr>e.priority?(Rr.add(e),ur.onStart(Ur)):(qr(e),ur(Zr))},advance:Zr,sort(e){if(Wr)ur.onFrame((()=>Yr.sort(e)));else{const t=Vr.indexOf(e);~t&&(Vr.splice(t,1),Qr(e))}},clear(){Vr=[],Rr.clear()}};function Ur(){Rr.forEach(qr),Rr.clear(),ur(Zr)}function qr(e){Vr.includes(e)||Qr(e)}function Qr(e){Vr.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Vr,(t=>t.priority>e.priority)),0,e)}function Zr(e){const t=Lr;for(let n=0;n<Vr.length;n++){const r=Vr[n];Wr=r.priority,r.idle||(jr(r),r.advance(e),r.idle||t.push(r))}return Wr=0,Lr=Vr,Lr.length=0,Vr=t,Vr.length>0}const Gr="[-+]?\\d*\\.?\\d+",Xr=Gr+"%";function Jr(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Kr=new RegExp("rgb"+Jr(Gr,Gr,Gr)),ei=new RegExp("rgba"+Jr(Gr,Gr,Gr,Gr)),ti=new RegExp("hsl"+Jr(Gr,Xr,Xr)),ni=new RegExp("hsla"+Jr(Gr,Xr,Xr,Gr)),ri=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ii=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,oi=/^#([0-9a-fA-F]{6})$/,ai=/^#([0-9a-fA-F]{8})$/;function si(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function li(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=si(i,r,e+1/3),a=si(i,r,e),s=si(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function ui(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ci(e){return(parseFloat(e)%360+360)%360/360}function di(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function hi(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function fi(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=oi.exec(e))?parseInt(t[1]+"ff",16)>>>0:Tr&&void 0!==Tr[e]?Tr[e]:(t=Kr.exec(e))?(ui(t[1])<<24|ui(t[2])<<16|ui(t[3])<<8|255)>>>0:(t=ei.exec(e))?(ui(t[1])<<24|ui(t[2])<<16|ui(t[3])<<8|di(t[4]))>>>0:(t=ri.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ai.exec(e))?parseInt(t[1],16)>>>0:(t=ii.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ti.exec(e))?(255|li(ci(t[1]),hi(t[2]),hi(t[3])))>>>0:(t=ni.exec(e))?(li(ci(t[1]),hi(t[2]),hi(t[3]))|di(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const pi=(e,t,n)=>{if(Or.fun(e))return e;if(Or.arr(e))return pi({range:e,output:t,extrapolate:n});if(Or.str(e.output[0]))return Cr(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};const gi=1.70158,mi=1.525*gi,yi=gi+1,vi=2*Math.PI/3,bi=2*Math.PI/4.5,wi=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},$i={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>yi*e*e*e-gi*e*e,easeOutBack:e=>1+yi*Math.pow(e-1,3)+gi*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-mi)/2:(Math.pow(2*e-2,2)*((mi+1)*(2*e-2)+mi)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*vi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*vi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*bi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*bi)/2+1,easeInBounce:e=>1-wi(1-e),easeOutBounce:wi,easeInOutBounce:e=>e<.5?(1-wi(1-2*e))/2:(1+wi(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function Si(){return Si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(this,arguments)}const xi=Symbol.for("FluidValue.get"),Fi=Symbol.for("FluidValue.observers"),Di=e=>Boolean(e&&e[xi]),_i=e=>e&&e[xi]?e[xi]():e,Oi=e=>e[Fi]||null;function Bi(e,t){let n=e[Fi];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class ki{constructor(e){if(this[xi]=void 0,this[Fi]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");Mi(this,e)}}const Mi=(e,t)=>Hi(e,xi,t);function Ei(e,t){if(e[xi]){let n=e[Fi];n||Hi(e,Fi,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Ai(e,t){let n=e[Fi];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Fi]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const Hi=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Pi=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Ci=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Ii=new RegExp(`(${Pi.source})(%|[a-z]+)`,"i"),Ti=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,zi=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,ji=e=>{const[t,n]=Ni(e);if(!t||Pr())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&zi.test(n)?ji(n):n||e},Ni=e=>{const t=zi.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ri;const Vi=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Li=e=>{Ri||(Ri=Tr?new RegExp(`(${Object.keys(Tr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>_i(e).replace(zi,ji).replace(Ci,fi).replace(Ri,fi))),n=t.map((e=>e.match(Pi).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>pi(Si({},e,{output:t}))));return e=>{var n;const i=!Ii.test(t[0])&&(null==(n=t.find((e=>Ii.test(e))))?void 0:n.replace(Pi,""));let o=0;return t[0].replace(Pi,(()=>`${r[o++](e)}${i||""}`)).replace(Ti,Vi)}},Wi="react-spring: ",Yi=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Wi}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Ui=Yi(console.warn);const qi=Yi(console.warn);function Qi(e){return Or.str(e)&&("#"==e[0]||/\d/.test(e)||!Pr()&&zi.test(e)||e in(Tr||{}))}const Zi=Pr()?c:d,Gi=()=>{const e=o(!1);return Zi((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Xi(){const e=a()[1],t=Gi();return()=>{t.current&&e(Math.random())}}const Ji=e=>c(e,Ki),Ki=[];function eo(e){const t=o();return c((()=>{t.current=e})),t.current}const to=Symbol.for("Animated:node"),no=e=>e&&e[to],ro=(e,t)=>{return n=e,r=to,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},io=e=>e&&e[to]&&e[to].getPayload();class oo{constructor(){this.payload=void 0,ro(this,this)}getPayload(){return this.payload||[]}}class ao extends oo{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Or.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ao(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Or.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Or.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class so extends ao{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=pi({output:[e,e]})}static create(e){return new so(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Or.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=pi({output:[this.getValue(),e]})),this._value=0,super.reset()}}const lo={dependencies:null};class uo extends oo{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Mr(this.source,((n,r)=>{var i;(i=n)&&i[to]===i?t[r]=n.getValue(e):Di(n)?t[r]=_i(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&kr(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Mr(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){lo.dependencies&&Di(e)&&lo.dependencies.add(e);const t=io(e);t&&kr(t,(e=>this.add(e)))}}class co extends uo{constructor(e){super(e)}static create(e){return new co(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(ho)),!0)}}function ho(e){return(Qi(e)?so:ao).create(e)}function fo(e){const t=no(e);return t?t.constructor:Or.arr(e)?co:Qi(e)?so:ao}function po(){return po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},po.apply(this,arguments)}const go=(e,t)=>{const r=!Or.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((i,a)=>{const s=o(null),l=r&&f((e=>{s.current=function(e,t){e&&(Or.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[u,d]=function(e,t){const n=new Set;lo.dependencies=n,e.style&&(e=po({},e,{style:t.createAnimatedStyle(e.style)}));return e=new uo(e),lo.dependencies=null,[e,n]}(i,t),h=Xi(),p=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new mo(p,d),m=o();Zi((()=>(m.current=g,kr(d,(e=>Ei(e,g))),()=>{m.current&&(kr(m.current.deps,(e=>Ai(e,m.current))),ur.cancel(m.current.update))}))),c(p,[]),Ji((()=>()=>{const e=m.current;kr(e.deps,(t=>Ai(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,po({},y,{ref:l}))}))};class mo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&ur.write(this.update)}}const yo=Symbol.for("AnimatedComponent"),vo=e=>Or.str(e)?e:e&&Or.str(e.displayName)?e.displayName:Or.fun(e)&&e.name||null;function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bo.apply(this,arguments)}function wo(e,...t){return Or.fun(e)?e(...t):e}const $o=(e,t)=>!0===e||!!(t&&e&&(Or.fun(e)?e(t):Er(e).includes(t))),So=(e,t)=>Or.obj(e)?t&&e[t]:e,xo=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Fo=e=>e,Do=(e,t=Fo)=>{let n=_o;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Or.und(n)||(r[i]=n)}return r},_o=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Oo={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Bo(e){const t=function(e){const t={};let n=0;if(Mr(e,((e,r)=>{Oo[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Mr(e,((e,r)=>r in t||(n[r]=e))),n}return bo({},e)}function ko(e){return e=_i(e),Or.arr(e)?e.map(ko):Qi(e)?Nr.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Mo(e){return Or.fun(e)||Or.arr(e)&&Or.obj(e[0])}const Eo=bo({},{tension:170,friction:26},{mass:1,damping:1,easing:$i.linear,clamp:!1});class Ao{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Eo)}}function Ho(e,t){if(Or.und(t.decay)){const n=!Or.und(t.tension)||!Or.und(t.friction);!n&&Or.und(t.frequency)&&Or.und(t.damping)&&Or.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Po=[];class Co{constructor(){this.changed=!1,this.values=Po,this.toValues=null,this.fromValues=Po,this.to=void 0,this.from=void 0,this.config=new Ao,this.immediate=!1}}function Io(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=$o(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Or.und(n.pause)||(i.paused=$o(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||$o(e,t)),u=wo(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),u=c.time-ur.now()}function f(){u>0&&!Nr.skipAnimation?(i.delayed=!0,c=ur.setTimeout(p,u),i.pauseQueue.add(h),i.timeouts.add(c)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(bo({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const To=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?No(e.get()):t.every((e=>e.noop))?zo(e.get()):jo(e.get(),t.every((e=>e.finished))),zo=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),jo=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),No=e=>({value:e,cancelled:!0,finished:!1});function Ro(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=Do(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&No(r)||i!==n.asyncId&&jo(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new Lo,a=new Wo;return(async()=>{if(Nr.skipAnimation)throw Vo(n),a.result=jo(r,!1),d(a),a;f(o);const s=Or.obj(e)?bo({},e):bo({},t,{to:e});s.parentId=i,Mr(u,((e,t)=>{Or.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Nr.skipAnimation)return Vo(n),jo(r,!1);try{let t;t=Or.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=jo(r.get(),!0,!1)}catch(e){if(e instanceof Lo)g=e.result;else{if(!(e instanceof Wo))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return Or.fun(a)&&ur.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Vo(e,t){Ar(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Lo extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Wo extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const Yo=e=>e instanceof qo;let Uo=1;class qo extends ki{constructor(...e){super(...e),this.id=Uo++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=no(this);return e&&e.getValue()}to(...e){return Nr.to(this,e)}interpolate(...e){return Ui(`${Wi}The "interpolate" function is deprecated in v9 (use "to" instead)`),Nr.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Bi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Yr.sort(this),Bi(this,{type:"priority",parent:this,priority:e})}}const Qo=Symbol.for("SpringPhase"),Zo=e=>(1&e[Qo])>0,Go=e=>(2&e[Qo])>0,Xo=e=>(4&e[Qo])>0,Jo=(e,t)=>t?e[Qo]|=3:e[Qo]&=-3,Ko=(e,t)=>t?e[Qo]|=4:e[Qo]&=-5;class ea extends qo{constructor(e,t){if(super(),this.key=void 0,this.animation=new Co,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Or.und(e)||!Or.und(t)){const n=Or.obj(e)?bo({},e):bo({},t,{from:e});Or.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Go(this)||this._state.asyncTo)||Xo(this)}get goal(){return _i(this.animation.to)}get velocity(){const e=no(this);return e instanceof ao?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Zo(this)}get isAnimating(){return Go(this)}get isPaused(){return Xo(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=io(r.to);!a&&Di(r.to)&&(o=Er(_i(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==so?1:a?a[l].lastPosition:o[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=Or.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n)));if(Or.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<=h,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Or.und(r),f=n==u?s.v0>0:n<u;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(c=Math.abs(u-d)<=h,!c));++e){l&&(g=d==u||d>u==f,g&&(a=-a*r,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(u-n),a=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=no(this),l=s.getValue();if(t){const e=_i(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return ur.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Go(this)){const{to:e,config:t}=this.animation;ur.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Or.und(e)?(n=this.queue||[],this.queue=[]):n=[Or.obj(e)?e:bo({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>To(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Vo(this._state,e&&this._lastCallId),ur.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Or.obj(n)?n[t]:n,(null==n||Mo(n))&&(n=void 0),r=Or.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Zo(this)||(e.reverse&&([n,r]=[r,n]),r=_i(r),Or.und(r)?no(this)||this._set(n):this._set(r)),i}_update(e,t){let n=bo({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Do(n,((e,t)=>/^on/.test(t)?So(e,r):e))),sa(this,n,"onProps"),la(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Io(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{Xo(this)||(Ko(this,!0),Hr(a.pauseQueue),la(this,"onPause",jo(this,ta(this,this.animation.to)),this))},resume:()=>{Xo(this)&&(Ko(this,!1),Go(this)&&this._resume(),Hr(a.resumeQueue),la(this,"onResume",jo(this,ta(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=na(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(No(this));const r=!Or.und(e.to),i=!Or.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(No(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!Or.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Br(d,u);h&&(s.from=d),d=_i(d);const f=!Br(c,l);f&&this._focus(c);const p=Mo(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(Ho(n=bo({},n),t),t=bo({},n,t)),Ho(e,t),Object.assign(e,t);for(const t in Eo)null==e[t]&&(e[t]=Eo[t]);let{mass:r,frequency:i,damping:o}=e;Or.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,wo(t.config,o),t.config!==a.config?wo(a.config,o):void 0);let v=no(this);if(!v||Or.und(c))return n(jo(this,!0));const b=Or.und(t.reset)?i&&!t.default:!Or.und(d)&&$o(t.reset,o),w=b?d:this.get(),$=ko(c),S=Or.num($)||Or.arr($)||Qi($),x=!p&&(!S||$o(a.immediate||t.immediate,o));if(f){const e=fo(c);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const F=v.constructor;let D=Di(c),_=!1;if(!D){const e=b||!Zo(this)&&h;(f||e)&&(_=Br(ko(w),$),D=!_),(Br(s.immediate,x)||x)&&Br(g.decay,m)&&Br(g.velocity,y)||(D=!0)}if(_&&Go(this)&&(s.changed&&!b?D=!0:D||this._stop(l)),!p&&((D||Di(l))&&(s.values=v.getPayload(),s.toValues=Di(c)?null:F==so?[1]:Er($)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),D)){const{onRest:e}=s;kr(aa,(e=>sa(this,t,e)));const r=jo(this,ta(this,l));Hr(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&ur.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?wo(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(Ro(t.to,t,this._state,this)):D?this._start():Go(this)&&!f?this._pendingCalls.add(n):n(zo(w))}_focus(e){const t=this.animation;e!==t.to&&(Oi(this)&&this._detach(),t.to=e,Oi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Di(t)&&(Ei(t,this),Yo(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Di(e)&&Ai(e,this)}_set(e,t=!0){const n=_i(e);if(!Or.und(n)){const e=no(this);if(!e||!Br(n,e.getValue())){const r=fo(n);e&&e.constructor==r?e.setValue(n):ro(this,r.create(n)),e&&ur.batchedUpdates((()=>{this._onChange(n,t)}))}}return no(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,la(this,"onStart",jo(this,ta(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),wo(this.animation.onChange,e,this)),wo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;no(this).reset(_i(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Go(this)||(Jo(this,!0),Xo(this)||this._resume())}_resume(){Nr.skipAnimation?this.finish():Yr.start(this)}_stop(e,t){if(Go(this)){Jo(this,!1);const n=this.animation;kr(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Bi(this,{type:"idle",parent:this});const r=t?No(this.get()):jo(this.get(),ta(this,null!=e?e:n.to));Hr(this._pendingCalls,r),n.changed&&(n.changed=!1,la(this,"onRest",r,this))}}}function ta(e,t){const n=ko(t);return Br(ko(e.get()),n)}function na(e,t=e.loop,n=e.to){let r=wo(t);if(r){const i=!0!==r&&Bo(r),o=(i||e).reverse,a=!i||i.reset;return ra(bo({},e,{loop:t,default:!1,pause:void 0,to:!o||Mo(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function ra(e){const{to:t,from:n}=e=Bo(e),r=new Set;return Or.obj(t)&&oa(t,r),Or.obj(n)&&oa(n,r),e.keys=r.size?Array.from(r):null,e}function ia(e){const t=ra(e);return Or.und(t.default)&&(t.default=Do(t)),t}function oa(e,t){Mr(e,((e,n)=>null!=e&&t.add(n)))}const aa=["onStart","onRest","onChange","onPause","onResume"];function sa(e,t,n){e.animation[n]=t[n]!==xo(t,n)?So(t[n],e.key):void 0}function la(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const ua=["onStart","onChange","onRest"];let ca=1;class da{constructor(e,t){this.id=ca++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(bo({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Or.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(ra(e)),this}start(e){let{queue:t}=this;return e?t=Er(e).map(ra):this.queue=[],this._flush?this._flush(this,t):(va(this,t),ha(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;kr(Er(t),(t=>n[t].stop(!!e)))}else Vo(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Or.und(e))this.start({pause:!0});else{const t=this.springs;kr(Er(e),(e=>t[e].pause()))}return this}resume(e){if(Or.und(e))this.start({pause:!1});else{const t=this.springs;kr(Er(e),(e=>t[e].resume()))}return this}each(e){Mr(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,Ar(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&Ar(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,Ar(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}ur.onFrame(this._onFrame)}}function ha(e,t){return Promise.all(t.map((t=>fa(e,t)))).then((t=>To(e,t)))}async function fa(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=Or.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=Or.arr(i)||Or.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):kr(ua,(n=>{const r=t[n];if(Or.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Hr(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===xo(t,"cancel");(c||f&&d.asyncId)&&h.push(Io(++e._lastAsyncId,{props:t,state:d,actions:{pause:_r,resume:_r,start(t,n){f?(Vo(d,e._lastAsyncId),n(No(e))):(t.onRest=s,n(Ro(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=To(e,await Promise.all(h));if(a&&p.finished&&(!n||!p.noop)){const n=na(t,a,i);if(n)return va(e,[n]),fa(e,n,!0)}return l&&ur.batchedUpdates((()=>l(p,e,e.item))),p}function pa(e,t){const n=bo({},e.springs);return t&&kr(Er(t),(e=>{Or.und(e.keys)&&(e=ra(e)),Or.obj(e.to)||(e=bo({},e,{to:void 0})),ya(n,e,(e=>ma(e)))})),ga(e,n),n}function ga(e,t){Mr(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Ei(t,e))}))}function ma(e,t){const n=new ea;return n.key=e,t&&Ei(n,t),n}function ya(e,t,n){t.keys&&kr(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function va(e,t){kr(t,(t=>{ya(e.springs,t,(t=>ma(t,e)))}))}const ba=["children"],wa=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,ba);const i=p($a),s=r.pause||!!i.pause,l=r.immediate||!!i.immediate;r=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return c((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:s,immediate:l})),[s,l]);const{Provider:u}=$a;return n.createElement(u,{value:r},t)},$a=(Sa=wa,xa={},Object.assign(Sa,n.createContext(xa)),Sa.Provider._context=Sa,Sa.Consumer._context=Sa,Sa);var Sa,xa;wa.Provider=$a.Provider,wa.Consumer=$a.Consumer;const Fa=()=>{const e=[],t=function(t){qi(`${Wi}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return kr(e,((e,i)=>{if(Or.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return kr(e,(e=>e.pause(...arguments))),this},t.resume=function(){return kr(e,(e=>e.resume(...arguments))),this},t.set=function(t){kr(e,(e=>e.set(t)))},t.start=function(t){const n=[];return kr(e,((e,r)=>{if(Or.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return kr(e,(e=>e.stop(...arguments))),this},t.update=function(t){return kr(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Or.fun(e)?e(n,t):e};return t._getProps=n,t};function Da(e,t){const n=Or.fun(e),[[r],i]=function(e,t,n){const r=Or.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?Fa():void 0),[]),a=o(0),s=Xi(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=pa(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?ha(e,t):new Promise((r=>{ga(e,n),l.queue.push((()=>{r(ha(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=eo(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new da(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=ia(n))}}g((()=>{kr(u.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),u.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=u.current.map(((e,t)=>pa(e,c[t]))),m=p(wa),y=eo(m),v=m!==y&&function(e){for(const t in e)return!0;return!1}(m);Zi((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],kr(e,(e=>e()))),kr(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=c[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Ji((()=>()=>{kr(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>bo({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let _a;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(_a||(_a={}));class Oa extends qo{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=pi(...t);const n=this._get(),r=fo(n);ro(this,r.create(n))}advance(e){const t=this._get();Br(t,this.get())||(no(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ka(this._active)&&Ma(this)}_get(){const e=Or.arr(this.source)?this.source.map(_i):Er(_i(this.source));return this.calc(...e)}_start(){this.idle&&!ka(this._active)&&(this.idle=!1,kr(io(this),(e=>{e.done=!1})),Nr.skipAnimation?(ur.batchedUpdates((()=>this.advance())),Ma(this)):Yr.start(this))}_attach(){let e=1;kr(Er(this.source),(t=>{Di(t)&&Ei(t,this),Yo(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){kr(Er(this.source),(e=>{Di(e)&&Ai(e,this)})),this._active.clear(),Ma(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Er(this.source).reduce(((e,t)=>Math.max(e,(Yo(t)?t.priority:0)+1)),0))}}function Ba(e){return!1!==e.idle}function ka(e){return!e.size||Array.from(e).every(Ba)}function Ma(e){e.idle||(e.idle=!0,kr(io(e),(e=>{e.done=!0})),Bi(e,{type:"idle",parent:e}))}function Ea(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Nr.assign({createStringInterpolator:Li,to:(e,t)=>new Oa(e,t)});const Aa=["style","children","scrollTop","scrollLeft","viewBox"],Ha=/^--/;function Pa(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Ha.test(e)||Ia.hasOwnProperty(e)&&Ia[e]?(""+t).trim():t+"px"}const Ca={};let Ia={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Ta=["Webkit","Ms","Moz","O"];Ia=Object.keys(Ia).reduce(((e,t)=>(Ta.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Ia);const za=["x","y","z"],ja=/^(matrix|translate|scale|rotate|skew)/,Na=/^(translate)/,Ra=/^(rotate|skew)/,Va=(e,t)=>Or.num(e)&&0!==e?e+t:e,La=(e,t)=>Or.arr(e)?e.every((e=>La(e,t))):Or.num(e)?e===t:parseFloat(e)===t;class Wa extends uo{constructor(e){let{x:t,y:n,z:r}=e,i=Ea(e,za);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Va(e,"px"))).join(",")})`,La(e,0)]))),Mr(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(ja.test(t)){if(delete i[t],Or.und(e))return;const n=Na.test(t)?"px":Ra.test(t)?"deg":"";o.push(Er(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Va(i,n)})`,La(i,0)]:e=>[`${t}(${e.map((e=>Va(e,n))).join(",")})`,La(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new Ya(o,a)),super(i)}}class Ya extends ki{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return kr(this.inputs,((n,r)=>{const i=_i(n[0]),[o,a]=this.transforms[r](Or.arr(i)?i:n.map(_i));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&kr(this.inputs,(e=>kr(e,(e=>Di(e)&&Ei(e,this)))))}observerRemoved(e){0==e&&kr(this.inputs,(e=>kr(e,(e=>Di(e)&&Ai(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Bi(this,e)}}const Ua=["scrollTop","scrollLeft"];Nr.assign({batchedUpdates:x,createStringInterpolator:Li,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const qa=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new uo(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=vo(e)||"Anonymous";return(e=Or.str(e)?o[e]||(o[e]=go(e,i)):e[yo]||(e[yo]=go(e,i))).displayName=`Animated(${t})`,e};return Mr(e,((t,n)=>{Or.arr(e)&&(n=vo(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=r,u=Ea(r,Aa),c=Object.values(u),d=Object.keys(u).map((t=>n||e.hasAttribute(t)?t:Ca[t]||(Ca[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Pa(t,i[t]);Ha.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new Wa(e),getComponentProps:e=>Ea(e,Ua)}),Qa=qa.animated;var Za,Ga,Xa;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(Za||(Za={})),function(e){e.AM="AM",e.PM="PM"}(Ga||(Ga={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:Ga.AM};if(!t)return n;try{if("24hr"===e){const r=es(t,e);n.minute=Za.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=Ga.AM,n.hour=0===i?"12":Za.padValue(i.toString())):(n.period=Ga.PM,n.hour=12===i?i.toString():Za.padValue((i-12).toString()))}else{const r=es(t,e);n.hour=Za.padValue(r.hour),n.minute=Za.padValue(r.minute),n.period="am"===r.period.toLowerCase()?Ga.AM:Ga.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Za.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return Za.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?Za.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?Za.padValue(r.toString()):13===r?Za.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===Ga.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return Za.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=es(e,t),r=Za.padValue(n.hour);let i=`${r}:${Za.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60})}(Xa||(Xa={}));const Ja=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},Ka=e=>{const t=parseInt(e);return t>=0&&t<=59},es=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!Ja(n[0],t)||!Ka(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!Ja(n[0],t)||!Ka(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},ts={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ns=e=>Object.keys(ts).reduce(((t,n)=>{const r=ts[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),rs=ns("max-width"),is=(ns("min-width"),m.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),os=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,as=m.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Yt.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${os} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ss=m(as)`
    animation-delay: -0.45s;
`,ls=m(as)`
    animation-delay: -0.3s;
`,us=m(as)`
    animation-delay: -0.15s;
`,cs=m.button`
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
                    background-color: ${Yt.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Qt.Button.Danger.Border:Yt.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Qt.Button.Danger.Primary:Yt.Primary};
                    }
                `;case"light":return y`
                    background-color: ${Yt.Neutral[8]};
                    border: 1px solid ${Yt.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Qt.Button.Danger.Primary:Yt.Primary};
                    }
                `;case"disabled":return y`
                    background-color: ${Yt.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Yt.Neutral[3]};
                    }
                `;case"link":return y`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Qt.Button.Danger.Primary:Yt.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Qt.Button.Danger.Hover:Yt.Secondary};
                        }
                    }
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Qt.Button.Danger.BackgroundColor:Yt.Primary};
                    border: 1px solid transparent;

                    ${rs.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Yt.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?y`
                    height: 2.5rem;
                    span {
                        ${on("H5","semibold")}
                    }

                    ${rs.mobileS} {
                        height: auto;
                    }
                `:y`
                    height: 3rem;
                    span {
                        ${on("H4","semibold")}
                    }

                    ${rs.mobileS} {
                        height: auto;
                    }
                `}
`,ds=m((({color:n,className:r,size:i=18})=>e(is,Object.assign({className:r,$size:i,$color:n},{children:[t(as,{id:"inner1",$size:i-2,$borderWidth:2}),t(ss,{id:"inner2",$size:i-2,$borderWidth:2}),t(ls,{id:"inner3",$size:i-2,$borderWidth:2}),t(us,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Qt.Button.Danger.Primary:Yt.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Yt.Neutral[3](e);break;default:t=Yt.Neutral[8](e)}return y`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,hs={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,u=M(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(cs,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:o},c,u,{children:[a&&t(ds,Object.assign({},c)),t("span",{children:i})]}))})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,u=M(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(cs,Object.assign({ref:r,"data-testid":u["data-testid"]||"button",disabled:o},c,u,{children:[a&&t(ds,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},fs=m.div`
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
                        border-color: ${Yt.Validation.Red.Icon};
                        background: ${Yt.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Red};
                        }
                    `:e.$disabled?y`
                        border-color: transparent;
                    `:y`
                        border-color: transparent;

                        :hover {
                            background: ${Yt.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?y`
                        background: ${Yt.Neutral[6]};
                        border-color: ${Yt.Neutral[5]};
                    `:e.$disabled&&e.$selected?y`
                        background: ${Yt.Neutral[6]};
                        border-color: ${Yt.Neutral[4]};
                    `:e.$error?y`
                        background: ${Yt.Neutral[8]};
                        border-color: ${Yt.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Red};
                        }
                    `:e.$selected?y`
                        background: ${Yt.Accent.Light[5]};
                        border-color: ${Yt.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Accent};
                        }
                    `:y`
                        background: ${Yt.Neutral[8]};
                        border-color: ${Yt.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Yt.Shadow.Accent};
                            border-color: ${Yt.Accent.Light[1]};
                        }
                    `}
`,ps=m.input`
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
`,gs=m.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,ms=m.label`
    ${e=>e.$selected&&!e.$indicator?y`
                ${on("H4","semibold")}
            `:y`
                ${on("H4","regular")}
            `}

    color: ${Yt.Neutral[1]};

    ${e=>e.$disabled?y`
                color: ${Yt.Neutral[3]};
            `:e.$selected?y`
                color: ${Yt.Primary};
            `:void 0}
`,ys=m.div`
    ${on("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${rn("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?y`
                color: ${Yt.Neutral[3]};
            `:e.$selected?y`
                color: ${Yt.Primary};
            `:y`
                color: ${Yt.Neutral[1]};
            `}
`,vs=m.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?y`
                    color: ${Yt.Primary};
                `:y`
                    color: ${Yt.Neutral[4]};
                `};
    }
`,bs=({type:e,active:n=!1,disabled:r,className:i})=>{let o;switch(e){case"checkbox":o=t(n?B:O,{});break;case"radio":o=t(n?D:F,{});break;case"tick":o=t(k,{});break;case"cross":o=t(_,{});break;default:o=null}return t(vs,Object.assign({className:i,$active:n,disabled:r},{children:o}))};var ws={exports:{}};ws.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=u("months"),n=(u("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=u("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var u=a[l],c=d[u],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:u.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,u=e.slice(r),c=o.exec(u)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],u=!0===a[3],c=l||u,d=a[2];u&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,u=r.seconds,c=r.milliseconds,d=r.zone,f=new Date,p=a||(i||o?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=u||0,w=c||0;return d?new Date(Date.UTC(g,m,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,w)):new Date(g,m,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var $s,Ss,xs=ws.exports,Fs={exports:{}},Ds=Fs.exports=($s={year:0,month:1,day:2,hour:3,minute:4,second:5},Ss={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Ss[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ss[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,u=s.value,c=$s[l];c>=0&&(o[c]=parseInt(u,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var u=l.utcOffset();l=l.add(i-u,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var u=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),c=u[0],d=u[1],h=n(c).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),_s={exports:{}};_s.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",u="month",c="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),o=n-i<0,a=t.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=m;var $=function(e){return e instanceof D},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},F=v;F.l=S,F.i=$,F.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,c=F.p(e),f=function(e,t){var i=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case d:return r?f(1,0):f(31,11);case u:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return f(r?y-w:y+(6-w),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),c="set"+(this.$u?"UTC":""),f=(n={},n[s]=c+"Date",n[h]=c+"Date",n[u]=c+"Month",n[d]=c+"FullYear",n[a]=c+"Hours",n[o]=c+"Minutes",n[i]=c+"Seconds",n[r]=c+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===u||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,c){var h,f=this;r=Number(r);var p=F.p(c),g=function(e){var t=x(f);return F.w(t.date(t.date()+Math.round(e*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[o]=t,h[a]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,u=n.months,c=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},d=function(e){return F.s(o%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:F.s(s+1,2,"0"),MMM:c(n.monthsShort,s,u,3),MMMM:c(u,s),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:F.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:F.s(a,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=F.p(h),m=x(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=F.m(this,m);return b=(p={},p[d]=b/12,p[u]=b,p[c]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/n,p[o]=v/t,p[i]=v/e,p)[g]||v,f?b:F.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),_=D.prototype;return x.prototype=_,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,D,x),e.$i=!0),x},x.locale=S,x.isDayjs=$,x.unix=function(e){return x(1e3*e)},x.en=w[b],x.Ls=w,x.p={},x}();var Os=_s.exports,Bs={exports:{}};Bs.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var ks=Bs.exports,Ms={exports:{}};Ms.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Es=Ms.exports,As={exports:{}};As.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Hs,Ps=As.exports;Os.extend(ks),Os.extend(Es),Os.extend(Ps),Os.extend(xs),Os.extend(Ds),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Os(t).startOf("week");return Cs(n).map((e=>Is(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Is(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Os(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Os(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Os(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Os(r):void 0,i?Os(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Hs||(Hs={}));const Cs=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Is=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ts=[1,3,5,7,8,10,12],zs=[4,6,9,11];var js,Ns,Rs;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":Ts.includes(o)?Math.min(i,31).toString():zs.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Os(e,n);return Os(t,n).diff(r,"minute")},e.toDayjs=e=>e?Os(e):Os()}(js||(js={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Os(e).isBefore(r,"day"))||!(!i||!Os(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Os(e).isValid())return e}return""}}(Ns||(Ns={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Rs||(Rs={}));const Vs=(e,t,n="window",r)=>{const i=o();c((()=>{i.current=t}),[t]),c((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!(t&&t.addEventListener))return;const o=e=>i.current(e);return t.addEventListener(e,o,r),()=>{t.removeEventListener(e,o,r)}}),[e,n])},Ls=m.button`
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
                background-color: ${Yt.Neutral[7]};
            `}
    }
`,Ws=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=M(e,["children","focusHighlight","focusOutline","type"]);return t(Ls,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),Ys=m(Qa.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Yt.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${rs.mobileS} {
        max-width: 100%;
    }
`,Us=m.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,qs=m.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${rs.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,Qs=m.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${rs.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,Zs=m.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${rs.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,Gs=m.div`
    display: flex;
    gap: 0.5rem;

    ${rs.tablet} {
        flex-direction: column;
    }

    ${rs.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,Xs=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${rs.mobileS} {
        width: 6rem;
    }
`,Js=m(Ws)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Yt.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Yt.Primary};
    }
`,Ks=m(sn.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${rs.tablet} {
        margin: 0;
    }

    ${rs.mobileS} {
        margin: 0 0.25rem;
    }
`,el=m(fn)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Yt.Neutral[5]};
    background: ${Yt.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${Yt.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Yt.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${rs.mobileS} {
        width: 100%;
    }
`,tl=m((({type:n="checkbox",indicator:r,checked:i,styleType:s="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:p,className:g,"data-testid":m,onChange:y})=>{const[v,b]=a(i),[w]=a(Rs.generate()),$=p?`${p}-input`:`tg-${w}-input`,S=o();c((()=>{b(i)}),[i]);return e(fs,Object.assign({$selected:v,$disabled:d,className:g,$styleType:s,$error:h,$indicator:r,id:p,"data-testid":m},{children:[r&&(()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(bs,{type:e,active:v,disabled:d})})(),t(ps,{ref:S,name:f,id:$,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:e=>{if(!d){if(y)return void y(e);switch(n){case"checkbox":b((e=>!e));break;case"radio":case"yes":case"no":v||b(!0)}}},checked:v}),e(gs,{children:[t(ms,Object.assign({htmlFor:$,$selected:v,$indicator:r,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let e;return"string"==typeof u?e=u:"function"==typeof u&&(e=u()),t(ys,Object.assign({$disabled:d,$selected:v},{children:e}))})()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,nl=m(hs.Small)`
    width: 7rem;

    ${rs.mobileL} {
        flex: 1;
    }

    ${rs.mobileS} {
        width: 100%;
    }
`;var rl,il,ol;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(rl||(rl={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(il||(il={})),function(e){e.AM="am",e.PM="pm"}(ol||(ol={}));const al=({id:n,value:r,show:i,format:s,onChange:l,onCancel:u})=>{const d=Xa.getTimeValues(s,r),[h,p]=a(d.hour),[g,m]=a(d.minute),[y,v]=a(d.period),b=o(),S=o(),x=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,u=e.handleWidth,c=void 0===u||u,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=o(n),y=o(null),v=null!=f?f:y,b=o(),w=a({width:void 0,height:void 0}),$=w[0],S=w[1];return sr((function(){if(!ir()){var e=ar(g,S,c,h);b.current=nr((function(t){(c||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!ir()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,c,h,g,p,v.current]),gn({ref:v},$)}();c((()=>{if(i&&b.current&&b.current.focus(),i){const{hour:e,minute:t,period:n}=Xa.getTimeValues(s,r);p(e),m(t),v(n)}}),[i,r,s]),c((()=>{const e=b.current,t=S.current;return e&&e.addEventListener("keydown",F),t&&t.addEventListener("keydown",F),()=>{e&&e.removeEventListener("keydown",F),t&&t.removeEventListener("keydown",F)}}),[]);const F=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},D=f((e=>{switch(e.currentTarget.name){case rl.MINUTE_UP:m(Xa.updateMinutes(g,"add"));break;case rl.MINUTE_DOWN:m(Xa.updateMinutes(g,"minus"));break;case rl.HOUR_UP:p(Xa.updateHours(h,"add"));break;case rl.HOUR_DOWN:p(Xa.updateHours(h,"minus"))}}),[h,g]),_=e=>{e.target.select()},O=e=>{const t=e.target.value;switch(e.target.name){case il.HOUR:t.length<=2&&p(t);break;case il.MINUTE:t.length<=2&&m(t)}},B=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case il.HOUR:{const n=t>23||t<0?d.hour:Xa.convertHourTo12HourFormat(e.target.value);p(n);break}case il.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(Za.padValue(n));break}}},k=e=>{switch(e.target.name){case ol.AM:v(Ga.AM);break;case ol.PM:v(Ga.PM)}},M=e=>n?`${n}-${e}`:e,E=Da({height:i?x.height+32:0});return t(Ys,Object.assign({"data-testid":"animated-dropdown-wrapper",style:E},{children:e(Us,Object.assign({ref:x.ref,"data-testid":M("timepicker-dropdown"),inert:i?void 0:""},{children:[e(qs,{children:[e(Zs,{children:[e(Xs,{children:[t(Js,Object.assign({"aria-label":"increase hour",name:rl.HOUR_UP,tabIndex:-1,onClick:D,"data-testid":M("hour-increment-button")},{children:t($,{})})),t(el,{"aria-label":"hour",type:"number",name:il.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:_,onChange:O,onBlur:B,min:1,max:12,placeholder:"HH","data-testid":M("hour-input")}),t(Js,Object.assign({"aria-label":"decrease hour",name:rl.HOUR_DOWN,tabIndex:-1,onClick:D,"data-testid":M("hour-decrement-button")},{children:t(w,{})}))]}),t(Ks,{children:":"}),e(Xs,{children:[t(Js,Object.assign({"aria-label":"increase minute",name:rl.MINUTE_UP,tabIndex:-1,onClick:D,"data-testid":M("minute-increment-button")},{children:t($,{})})),t(el,{"aria-label":"minute",type:"number",name:il.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:S,value:g,onChange:O,onBlur:B,onFocus:_,min:0,max:59,placeholder:"MM","data-testid":M("minute-input")}),t(Js,Object.assign({"aria-label":"decrease minute",name:rl.MINUTE_DOWN,tabIndex:-1,onClick:D,"data-testid":M("minute-decrement-button")},{children:t(w,{})}))]})]}),e(Gs,{children:[t(tl,Object.assign({checked:y===Ga.AM,name:ol.AM,type:"radio",onChange:k,"data-testid":M("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(tl,Object.assign({checked:y===Ga.PM,name:ol.PM,type:"radio",onChange:k,"data-testid":M("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(Qs,{children:[t(nl,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:u,"data-testid":M("cancel-button")},{children:"Cancel"})),t(nl,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?Xa.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":M("confirm-button")},{children:"Done"}))]})]}))}))};m.div`
    position: relative;
`;const sl=m(fn)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,ll=n=>{var{id:r,disabled:i=!1,readOnly:s=!1,error:l,value:u,placeholder:c,format:d="24hr",onChange:h,onFocus:p,onBlur:g}=n,m=M(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[y,v]=a(!1),b=o();Vs("mousedown",(function(e){i||s||S(e)}),"document"),Vs("keyup",(function(e){if("Tab"===e.code)S(e)}),"document");const w=()=>{i||s||y||(v(!0),p&&p())};const $=()=>{v(!1),g&&g()},S=e=>{b&&!b.current.contains(e.target)&&y&&$()},x=f((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,c]);return e(hn,Object.assign({ref:b,id:r,$readOnly:s,$disabled:i,$error:l},m,{children:[t(sl,{onFocus:w,focused:y,readOnly:!0,placeholder:c||x(),value:Xa.formatDisplayValue(u,d),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),t(al,{id:r,show:y,value:u,format:d,onCancel:()=>{$()},onChange:e=>{h&&h(e),$()}})]}))};export{ll as Timepicker};
//# sourceMappingURL=index.js.map
