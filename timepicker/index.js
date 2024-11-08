import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as a,useState as o,isValidElement as s,createRef as l,cloneElement as d,PureComponent as c,useEffect as u,useLayoutEffect as h,forwardRef as m,useCallback as g,useContext as f,useMemo as p}from"react";import b,{css as y,keyframes as v}from"styled-components";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as w}from"@lifesg/react-icons/chevron-up";import{findDOMNode as $,unstable_batchedUpdates as D}from"react-dom";import{ArrowRightIcon as S}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as B}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as E}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as C}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as k}from"@lifesg/react-icons/tick-circle-fill";import{ChevronDownIcon as A}from"@lifesg/react-icons";import{CircleIcon as O}from"@lifesg/react-icons/circle";import{CircleDotIcon as M}from"@lifesg/react-icons/circle-dot";import{CrossIcon as _}from"@lifesg/react-icons/cross";import{SquareIcon as z}from"@lifesg/react-icons/square";import{SquareTickFillIcon as H}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as T}from"@lifesg/react-icons/tick";function I(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L=Array.isArray,R="object"==typeof P&&P&&P.Object===Object&&P,W="object"==typeof self&&self&&self.Object===Object&&self,V=R||W||Function("return this")(),N=V.Symbol,Y=N,U=Object.prototype,q=U.hasOwnProperty,X=U.toString,J=Y?Y.toStringTag:void 0;var Q=function(e){var t=q.call(e,J),r=e[J];try{e[J]=void 0;var n=!0}catch(e){}var i=X.call(e);return n&&(t?e[J]=r:delete e[J]),i},Z=Object.prototype.toString;var G=Q,K=function(e){return Z.call(e)},ee=N?N.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?G(e):K(e)};var re=te,ne=function(e){return null!=e&&"object"==typeof e};var ie=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==re(e)},ae=L,oe=ie,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var de=function(e,t){if(ae(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!oe(e))||(le.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ce=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ue=te,he=ce;var me,ge=function(e){if(!he(e))return!1;var t=ue(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},fe=V["__core-js_shared__"],pe=(me=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||""))?"Symbol(src)_1."+me:"";var be=function(e){return!!pe&&pe in e},ye=Function.prototype.toString;var ve=ge,Fe=be,xe=ce,we=function(e){if(null!=e){try{return ye.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$e=/^\[object .+?Constructor\]$/,De=Function.prototype,Se=Object.prototype,Be=De.toString,Ee=Se.hasOwnProperty,Ce=RegExp("^"+Be.call(Ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ke=function(e){return!(!xe(e)||Fe(e))&&(ve(e)?Ce:$e).test(we(e))},Ae=function(e,t){return null==e?void 0:e[t]};var Oe=function(e,t){var r=Ae(e,t);return ke(r)?r:void 0},Me=Oe(Object,"create"),_e=Me;var ze=function(){this.__data__=_e?_e(null):{},this.size=0};var He=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Te=Me,Ie=Object.prototype.hasOwnProperty;var Pe=function(e){var t=this.__data__;if(Te){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ie.call(t,e)?t[e]:void 0},je=Me,Le=Object.prototype.hasOwnProperty;var Re=Me;var We=ze,Ve=He,Ne=Pe,Ye=function(e){var t=this.__data__;return je?void 0!==t[e]:Le.call(t,e)},Ue=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Re&&void 0===t?"__lodash_hash_undefined__":t,this};function qe(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}qe.prototype.clear=We,qe.prototype.delete=Ve,qe.prototype.get=Ne,qe.prototype.has=Ye,qe.prototype.set=Ue;var Xe=qe;var Je=function(){this.__data__=[],this.size=0};var Qe=function(e,t){return e===t||e!=e&&t!=t};var Ze=function(e,t){for(var r=e.length;r--;)if(Qe(e[r][0],t))return r;return-1},Ge=Ze,Ke=Array.prototype.splice;var et=Ze;var tt=Ze;var rt=Ze;var nt=Je,it=function(e){var t=this.__data__,r=Ge(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ke.call(t,r,1),--this.size,!0)},at=function(e){var t=this.__data__,r=et(t,e);return r<0?void 0:t[r][1]},ot=function(e){return tt(this.__data__,e)>-1},st=function(e,t){var r=this.__data__,n=rt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lt.prototype.clear=nt,lt.prototype.delete=it,lt.prototype.get=at,lt.prototype.has=ot,lt.prototype.set=st;var dt=lt,ct=Oe(V,"Map"),ut=Xe,ht=dt,mt=ct;var gt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ft=function(e,t){var r=e.__data__;return gt(t)?r["string"==typeof t?"string":"hash"]:r.map},pt=ft;var bt=ft;var yt=ft;var vt=ft;var Ft=function(){this.size=0,this.__data__={hash:new ut,map:new(mt||ht),string:new ut}},xt=function(e){var t=pt(this,e).delete(e);return this.size-=t?1:0,t},wt=function(e){return bt(this,e).get(e)},$t=function(e){return yt(this,e).has(e)},Dt=function(e,t){var r=vt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function St(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}St.prototype.clear=Ft,St.prototype.delete=xt,St.prototype.get=wt,St.prototype.has=$t,St.prototype.set=Dt;var Bt=St;function Et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(Et.Cache||Bt),r}Et.Cache=Bt;var Ct=Et;var kt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,At=/\\(\\)?/g,Ot=function(e){var t=Ct(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(kt,(function(e,r,n,i){t.push(n?i.replace(At,"$1"):r||e)})),t}));var Mt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},_t=L,zt=ie,Ht=N?N.prototype:void 0,Tt=Ht?Ht.toString:void 0;var It=function e(t){if("string"==typeof t)return t;if(_t(t))return Mt(t,e)+"";if(zt(t))return Tt?Tt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Pt=It;var jt=L,Lt=de,Rt=Ot,Wt=function(e){return null==e?"":Pt(e)};var Vt=ie;var Nt=function(e,t){return jt(e)?e:Lt(e,t)?[e]:Rt(Wt(e))},Yt=function(e){if("string"==typeof e||Vt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ut=function(e,t){for(var r=0,n=(t=Nt(t,e)).length;null!=e&&r<n;)e=e[Yt(t[r++])];return r&&r==n?e:void 0};var qt=j((function(e,t,r){var n=null==e?void 0:Ut(e,t);return void 0===n?r:n}));const Xt=(e,t,r)=>t?qt(r,t)||qt(e,t):r||e,Jt=(e,t)=>{const r=t||e.defaultValue;return qt(e.collections,r)};var Qt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Qt||(Qt={}));const Zt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Gt=e=>t=>{const r=t.theme,n=Jt(Zt,r[Qt.colorScheme]);return r.options&&r.options.color?Xt(n,e,r.options.color):Xt(n,e)},Kt=(Gt("Brand.1"),Gt("Brand.2"),Gt("Brand.3"),Gt("Brand.4"),Gt("Brand.5"),Gt("Brand.6"),Gt("Primary")),er=(Gt("PrimaryDark"),Gt("Secondary")),tr={Light:{1:Gt("Accent.Light.1"),2:Gt("Accent.Light.2"),3:Gt("Accent.Light.3"),4:Gt("Accent.Light.4"),5:Gt("Accent.Light.5"),6:Gt("Accent.Light.6")},Dark:{1:Gt("Accent.Dark.1"),2:Gt("Accent.Dark.2"),3:Gt("Accent.Dark.3")}},rr={1:Gt("Neutral.1"),2:Gt("Neutral.2"),3:Gt("Neutral.3"),4:Gt("Neutral.4"),5:Gt("Neutral.5"),6:Gt("Neutral.6"),7:Gt("Neutral.7"),8:Gt("Neutral.8")},nr={Green:{Text:Gt("Validation.Green.Text"),Icon:Gt("Validation.Green.Icon"),Border:Gt("Validation.Green.Border"),Background:Gt("Validation.Green.Background")},Orange:{Text:Gt("Validation.Orange.Text"),Icon:Gt("Validation.Orange.Icon"),Border:Gt("Validation.Orange.Border"),Background:Gt("Validation.Orange.Background"),Badge:Gt("Validation.Orange.Badge")},Red:{Text:Gt("Validation.Red.Text"),Icon:Gt("Validation.Red.Icon"),Border:Gt("Validation.Red.Border"),Background:Gt("Validation.Red.Background")},Blue:{Text:Gt("Validation.Blue.Text"),Icon:Gt("Validation.Blue.Icon"),Border:Gt("Validation.Blue.Border"),Background:Gt("Validation.Blue.Background")}},ir={Accent:Gt("Shadow.Accent"),Red:Gt("Shadow.Red"),Elevation:Gt("Shadow.Elevation")},ar={collections:{base:{InputBoxShadow:y`
        inset 0 0 4px 0px ${ir.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 4px 0px ${ir.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${ir.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:y`
        inset 0 0 3px 0px ${ir.Accent}
    `,InputErrorBoxShadow:y`
        inset 0 0 3px 0px ${ir.Red}
    `,ElevationBoxShadow:y`
      0px 2px 8px ${ir.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},or=e=>t=>{var r;const n=t.theme,i=Jt(ar,n[Qt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Xt(i,e,n.options.designToken):Xt(i,e)},sr=or("InputBoxShadow"),lr=or("InputErrorBoxShadow"),dr=(or("ElevationBoxShadow"),or("Table.Header"),or("Table.Cell.Primary"),or("Table.Cell.Secondary"),or("Table.Cell.Selected"),or("Table.Cell.Hover"),or("Button.Danger.BackgroundColor"),or("Button.Danger.Hover"),or("Button.Danger.Primary"),or("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),cr={D1:{fontFamily:dr.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:dr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:dr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dr.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:dr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:dr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:dr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:dr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:dr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:dr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:dr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:dr.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:dr.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ur={D1:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dr.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:dr.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:dr.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:dr.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:dr.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},hr={collections:{base:cr,oneservice:{D1:{fontFamily:dr.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:dr.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:dr.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dr.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:dr.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:dr.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:dr.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:dr.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:dr.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:dr.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:dr.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:dr.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:dr.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:ur},defaultValue:"base"},mr=e=>t=>{const r=t.theme,n=Jt(hr,r[Qt.textStyleScheme]);return r.options&&r.options.textStyle?Xt(n,e,r.options.textStyle):Xt(n,e)},gr={D1:{fontFamily:mr("D1.fontFamily"),fontSize:mr("D1.fontSize"),fontWeight:mr("D1.fontWeight"),lineHeight:mr("D1.lineHeight"),letterSpacing:mr("D1.letterSpacing")},D2:{fontFamily:mr("D2.fontFamily"),fontSize:mr("D2.fontSize"),fontWeight:mr("D2.fontWeight"),lineHeight:mr("D2.lineHeight"),letterSpacing:mr("D2.letterSpacing")},D3:{fontFamily:mr("D3.fontFamily"),fontSize:mr("D3.fontSize"),fontWeight:mr("D3.fontWeight"),lineHeight:mr("D3.lineHeight"),letterSpacing:mr("D3.letterSpacing")},D4:{fontFamily:mr("D4.fontFamily"),fontSize:mr("D4.fontSize"),fontWeight:mr("D4.fontWeight"),lineHeight:mr("D4.lineHeight"),letterSpacing:mr("D4.letterSpacing")},DBody:{fontFamily:mr("DBody.fontFamily"),fontSize:mr("DBody.fontSize"),fontWeight:mr("DBody.fontWeight"),lineHeight:mr("DBody.lineHeight"),letterSpacing:mr("DBody.letterSpacing")},H1:{fontFamily:mr("H1.fontFamily"),fontSize:mr("H1.fontSize"),fontWeight:mr("H1.fontWeight"),lineHeight:mr("H1.lineHeight"),letterSpacing:mr("H1.letterSpacing")},H2:{fontFamily:mr("H2.fontFamily"),fontSize:mr("H2.fontSize"),fontWeight:mr("H2.fontWeight"),lineHeight:mr("H2.lineHeight"),letterSpacing:mr("H2.letterSpacing")},H3:{fontFamily:mr("H3.fontFamily"),fontSize:mr("H3.fontSize"),fontWeight:mr("H3.fontWeight"),lineHeight:mr("H3.lineHeight"),letterSpacing:mr("H3.letterSpacing")},H4:{fontFamily:mr("H4.fontFamily"),fontSize:mr("H4.fontSize"),fontWeight:mr("H4.fontWeight"),lineHeight:mr("H4.lineHeight"),letterSpacing:mr("H4.letterSpacing")},H5:{fontFamily:mr("H5.fontFamily"),fontSize:mr("H5.fontSize"),fontWeight:mr("H5.fontWeight"),lineHeight:mr("H5.lineHeight"),letterSpacing:mr("H5.letterSpacing")},H6:{fontFamily:mr("H6.fontFamily"),fontSize:mr("H6.fontSize"),fontWeight:mr("H6.fontWeight"),lineHeight:mr("H6.lineHeight"),letterSpacing:mr("H6.letterSpacing")},Body:{fontFamily:mr("Body.fontFamily"),fontSize:mr("Body.fontSize"),fontWeight:mr("Body.fontWeight"),lineHeight:mr("Body.lineHeight"),letterSpacing:mr("Body.letterSpacing")},BodySmall:{fontFamily:mr("BodySmall.fontFamily"),fontSize:mr("BodySmall.fontSize"),fontWeight:mr("BodySmall.fontWeight"),lineHeight:mr("BodySmall.lineHeight"),letterSpacing:mr("BodySmall.letterSpacing")},XSmall:{fontFamily:mr("XSmall.fontFamily"),fontSize:mr("XSmall.fontSize"),fontWeight:mr("XSmall.fontWeight"),lineHeight:mr("XSmall.lineHeight"),letterSpacing:mr("XSmall.letterSpacing")}},fr=[dr.OpenSans,dr.PlusJakartaSans],pr=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},br=(e,t)=>r=>{var n;const i=gr[e].fontFamily(r),a=gr[e].fontWeight(r),o=fr.find((e=>Object.values(e).includes(i)));return o?y`
                font-family: ${pr(o,t)||pr(o,a)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(n=yr(t)||a)&&void 0!==n?n:"normal"};
        `},yr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},vr=e=>{if(e>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Fr=(e,t,r=!1)=>n=>{const i=gr[e],a=i.fontSize(n);return y`
            ${br(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${y`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},xr=(e=!1,t=!1,r=void 0)=>t?y`
            display: block;
            ${vr(r)}
        `:e?y`
            display: inline;
        `:y`
            display: block;
            ${vr(r)}
        `;var wr;!function(e){e.D1=b.h1`
        ${e=>y`
                ${Fr("D1",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=b.h1`
        ${e=>y`
                ${Fr("D2",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=b.h1`
        ${e=>y`
                ${Fr("D3",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=b.h1`
        ${e=>y`
                ${Fr("D4",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=b.h1`
        ${e=>y`
                ${Fr("DBody",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=b.h1`
        ${e=>y`
                ${Fr("H1",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=b.h2`
        ${e=>y`
                ${Fr("H2",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=b.h3`
        ${e=>y`
                ${Fr("H3",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=b.h4`
        ${e=>y`
                ${Fr("H4",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=b.h5`
        ${e=>y`
                ${Fr("H5",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=b.h6`
        ${e=>y`
                ${Fr("H6",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=b.p`
        ${e=>y`
                ${Fr("Body",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=b.p`
        ${e=>y`
                ${Fr("BodySmall",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=b.span`
        ${e=>y`
                ${Fr("XSmall",e.weight,e.paragraph)}
                color: ${rr[1]};
                ${xr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Sr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Sr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wr||(wr={}));const $r=b.a`
    ${e=>y`
            ${Fr(e.textStyle,e.weight)}
            color: ${Kt};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${er};

                svg {
                    color: ${er};
                }
            }
        `}
`,Dr=b(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Sr=r=>{var{external:n=!1,children:i}=r,a=I(r,["external","children"]);return e($r,Object.assign({},a,{children:[i,n&&t(Dr,{})]}))};var Br;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Br||(Br={}));const Er=y`
    border: 1px solid ${tr.Light[1]};
    box-shadow: ${sr};
`,Cr=y`
    border: 1px solid ${tr.Light[1]};
    box-shadow: none;
`,kr=y`
    border: 1px solid ${rr[5]};
    box-shadow: none;
`,Ar=y`
    border: 1px solid ${nr.Red.Border};
    box-shadow: ${lr};
`,Or=b.div`
    border: 1px solid ${rr[5]};
    border-radius: 4px;
    background: ${rr[8]};

    :focus-within {
        ${Er}
    }
    ${e=>e.$focused&&Er}

    ${e=>e.$readOnly?y`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Cr}
                }
                ${e.$focused&&Cr}
            `:e.$disabled?y`
                background: ${rr[6]};
                cursor: not-allowed;

                :focus-within {
                    ${kr}
                }
                ${e.$focused&&kr}
            `:e.$error?y`
                border: 1px solid ${nr.Red.Border};

                :focus-within {
                    ${Ar}
                }
                ${e.$focused&&Ar}
            `:void 0}
`,Mr=b(Or)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,_r=b.input`
    ${e=>Fr("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${rr[1]};
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
        color: ${rr[3]};
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
`;b.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${Kt};
    }
`;var zr=function(e,t){return zr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},zr(e,t)};var Hr=function(){return Hr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Hr.apply(this,arguments)};var Tr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ir=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Pr="object"==typeof Tr&&Tr&&Tr.Object===Object&&Tr,jr="object"==typeof self&&self&&self.Object===Object&&self,Lr=Pr||jr||Function("return this")(),Rr=Lr,Wr=function(){return Rr.Date.now()},Vr=/\s/;var Nr=function(e){for(var t=e.length;t--&&Vr.test(e.charAt(t)););return t},Yr=/^\s+/;var Ur=function(e){return e?e.slice(0,Nr(e)+1).replace(Yr,""):e},qr=Lr.Symbol,Xr=qr,Jr=Object.prototype,Qr=Jr.hasOwnProperty,Zr=Jr.toString,Gr=Xr?Xr.toStringTag:void 0;var Kr=function(e){var t=Qr.call(e,Gr),r=e[Gr];try{e[Gr]=void 0;var n=!0}catch(e){}var i=Zr.call(e);return n&&(t?e[Gr]=r:delete e[Gr]),i},en=Object.prototype.toString;var tn=Kr,rn=function(e){return en.call(e)},nn=qr?qr.toStringTag:void 0;var an=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":nn&&nn in Object(e)?tn(e):rn(e)},on=function(e){return null!=e&&"object"==typeof e};var sn=Ur,ln=Ir,dn=function(e){return"symbol"==typeof e||on(e)&&"[object Symbol]"==an(e)},cn=/^[-+]0x[0-9a-f]+$/i,un=/^0b[01]+$/i,hn=/^0o[0-7]+$/i,mn=parseInt;var gn=Ir,fn=Wr,pn=function(e){if("number"==typeof e)return e;if(dn(e))return NaN;if(ln(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ln(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=sn(e);var r=un.test(e);return r||hn.test(e)?mn(e.slice(2),r?2:8):cn.test(e)?NaN:+e},bn=Math.max,yn=Math.min;var vn=function(e,t,r){var n,i,a,o,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,a=i;return n=i=void 0,d=t,o=e.apply(a,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=a}function f(){var e=fn();if(g(e))return p(e);s=setTimeout(f,function(e){var r=t-(e-l);return u?yn(r,a-(e-d)):r}(e))}function p(e){return s=void 0,h&&n?m(e):(n=i=void 0,o)}function b(){var e=fn(),r=g(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(f,t),c?m(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(f,t),m(l)}return void 0===s&&(s=setTimeout(f,t)),o}return t=pn(t)||0,gn(r)&&(c=!!r.leading,a=(u="maxWait"in r)?bn(pn(r.maxWait)||0,t):a,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?o:p(fn())},b},Fn=vn,xn=Ir;var wn=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return xn(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Fn(e,t,{leading:n,maxWait:t,trailing:i})},$n=function(e,t,r,n){switch(t){case"debounce":return vn(e,r,n);case"throttle":return wn(e,r,n);default:return e}},Dn=function(e){return"function"==typeof e},Sn=function(){return"undefined"==typeof window},Bn=function(e){return e instanceof Element||e instanceof HTMLDocument},En=function(e,t,r,n){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!n||t.height===o&&!r?t:(e&&Dn(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Sn()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Sn())return null;if(t)return document.querySelector(t);if(n&&Bn(n))return n;if(r.targetRef&&Bn(r.targetRef.current))return r.targetRef.current;var i=$(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=En(s,r.setState.bind(r),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!Sn()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Dn(t)?"renderProp":Dn(n)?"childFunction":s(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,d=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=l(),r.observableElement=null,Sn()||(r.resizeHandler=$n(r.createResizeHandler,i,o,d),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}zr(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Sn()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=i).map((function(e){return!!e&&d(e,l)}));default:return n.createElement(o,null)}}}(c);var Cn=Sn()?u:h;function kn(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,m=e.targetRef,g=e.observerOptions,f=e.onResize,p=a(r),b=a(null),y=null!=m?m:b,v=a(),F=o({width:void 0,height:void 0}),x=F[0],w=F[1];return Cn((function(){if(!Sn()){var e=En(f,w,c,h);v.current=$n((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!p.current&&!Sn()&&e({width:n,height:i}),p.current=!1}))}),n,s,l);var t=new window.ResizeObserver(v.current);return y.current&&t.observe(y.current,g),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,s,l,c,h,f,g,y.current]),Hr({ref:y},x)}var An=Object.defineProperty,On={};((e,t)=>{for(var r in t)An(e,r,{get:t[r],enumerable:!0})})(On,{assign:()=>ci,colors:()=>si,createStringInterpolator:()=>ni,skipAnimation:()=>li,to:()=>ii,willAdvance:()=>di});var Mn=Xn(),_n=e=>Nn(e,Mn),zn=Xn();_n.write=e=>Nn(e,zn);var Hn=Xn();_n.onStart=e=>Nn(e,Hn);var Tn=Xn();_n.onFrame=e=>Nn(e,Tn);var In=Xn();_n.onFinish=e=>Nn(e,In);var Pn=[];_n.setTimeout=(e,t)=>{const r=_n.now()+t,n=()=>{const e=Pn.findIndex((e=>e.cancel==n));~e&&Pn.splice(e,1),Wn-=~e?1:0},i={time:r,handler:e,cancel:n};return Pn.splice(jn(r),0,i),Wn+=1,Yn(),i};var jn=e=>~(~Pn.findIndex((t=>t.time>e))||~Pn.length);_n.cancel=e=>{Hn.delete(e),Tn.delete(e),In.delete(e),Mn.delete(e),zn.delete(e)},_n.sync=e=>{Vn=!0,_n.batchedUpdates(e),Vn=!1},_n.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,_n.onStart(r)}return n.handler=e,n.cancel=()=>{Hn.delete(r),t=null},n};var Ln="undefined"!=typeof window?window.requestAnimationFrame:()=>{};_n.use=e=>Ln=e,_n.now="undefined"!=typeof performance?()=>performance.now():Date.now,_n.batchedUpdates=e=>e(),_n.catch=console.error,_n.frameLoop="always",_n.advance=()=>{"demand"!==_n.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):qn()};var Rn=-1,Wn=0,Vn=!1;function Nn(e,t){Vn?(t.delete(e),e(0)):(t.add(e),Yn())}function Yn(){Rn<0&&(Rn=0,"demand"!==_n.frameLoop&&Ln(Un))}function Un(){~Rn&&(Ln(Un),_n.batchedUpdates(qn))}function qn(){const e=Rn;Rn=_n.now();const t=jn(Rn);t&&(Jn(Pn.splice(0,t),(e=>e.handler())),Wn-=t),Wn?(Hn.flush(),Mn.flush(e?Math.min(64,Rn-e):16.667),Tn.flush(),zn.flush(),In.flush()):Rn=-1}function Xn(){let e=new Set,t=e;return{add(r){Wn+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Wn-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Wn-=t.size,Jn(t,(t=>t(r)&&e.add(t))),Wn+=e.size,t=e)}}}function Jn(e,t){e.forEach((e=>{try{t(e)}catch(e){_n.catch(e)}}))}function Qn(){}var Zn={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Gn(e,t){if(Zn.arr(e)){if(!Zn.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var Kn=(e,t)=>e.forEach(t);function ei(e,t,r){if(Zn.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var ti=e=>Zn.und(e)?[]:Zn.arr(e)?e:[e];function ri(e,t){if(e.size){const r=Array.from(e);e.clear(),Kn(r,t)}}var ni,ii,ai=(e,...t)=>ri(e,(e=>e(...t))),oi=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),si=null,li=!1,di=Qn,ci=e=>{e.to&&(ii=e.to),e.now&&(_n.now=e.now),void 0!==e.colors&&(si=e.colors),null!=e.skipAnimation&&(li=e.skipAnimation),e.createStringInterpolator&&(ni=e.createStringInterpolator),e.requestAnimationFrame&&_n.use(e.requestAnimationFrame),e.batchedUpdates&&(_n.batchedUpdates=e.batchedUpdates),e.willAdvance&&(di=e.willAdvance),e.frameLoop&&(_n.frameLoop=e.frameLoop)},ui=new Set,hi=[],mi=[],gi=0,fi={get idle(){return!ui.size&&!hi.length},start(e){gi>e.priority?(ui.add(e),_n.onStart(pi)):(bi(e),_n(vi))},advance:vi,sort(e){if(gi)_n.onFrame((()=>fi.sort(e)));else{const t=hi.indexOf(e);~t&&(hi.splice(t,1),yi(e))}},clear(){hi=[],ui.clear()}};function pi(){ui.forEach(bi),ui.clear(),_n(vi)}function bi(e){hi.includes(e)||yi(e)}function yi(e){hi.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(hi,(t=>t.priority>e.priority)),0,e)}function vi(e){const t=mi;for(let r=0;r<hi.length;r++){const n=hi[r];gi=n.priority,n.idle||(di(n),n.advance(e),n.idle||t.push(n))}return gi=0,(mi=hi).length=0,(hi=t).length>0}var Fi="[-+]?\\d*\\.?\\d+",xi=Fi+"%";function wi(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var $i=new RegExp("rgb"+wi(Fi,Fi,Fi)),Di=new RegExp("rgba"+wi(Fi,Fi,Fi,Fi)),Si=new RegExp("hsl"+wi(Fi,xi,xi)),Bi=new RegExp("hsla"+wi(Fi,xi,xi,Fi)),Ei=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ci=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ki=/^#([0-9a-fA-F]{6})$/,Ai=/^#([0-9a-fA-F]{8})$/;function Oi(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Mi(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=Oi(i,n,e+1/3),o=Oi(i,n,e),s=Oi(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function _i(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function zi(e){return(parseFloat(e)%360+360)%360/360}function Hi(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ti(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Ii(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ki.exec(e))?parseInt(t[1]+"ff",16)>>>0:si&&void 0!==si[e]?si[e]:(t=$i.exec(e))?(_i(t[1])<<24|_i(t[2])<<16|_i(t[3])<<8|255)>>>0:(t=Di.exec(e))?(_i(t[1])<<24|_i(t[2])<<16|_i(t[3])<<8|Hi(t[4]))>>>0:(t=Ei.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ai.exec(e))?parseInt(t[1],16)>>>0:(t=Ci.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Si.exec(e))?(255|Mi(zi(t[1]),Ti(t[2]),Ti(t[3])))>>>0:(t=Bi.exec(e))?(Mi(zi(t[1]),Ti(t[2]),Ti(t[3]))|Hi(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Pi=(e,t,r)=>{if(Zn.fun(e))return e;if(Zn.arr(e))return Pi({range:e,output:t,extrapolate:r});if(Zn.str(e.output[0]))return ni(e);const n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,s,l){let d=l?l(e):e;if(d<t){if("identity"===o)return d;"clamp"===o&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=a(d),n===-1/0?d=-d:i===1/0?d+=n:d=d*(i-n)+n;return d}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,n.map)}};var ji=1.70158,Li=1.525*ji,Ri=ji+1,Wi=2*Math.PI/3,Vi=2*Math.PI/4.5,Ni=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Yi={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Ri*e*e*e-ji*e*e,easeOutBack:e=>1+Ri*Math.pow(e-1,3)+ji*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Li)/2:(Math.pow(2*e-2,2)*((Li+1)*(2*e-2)+Li)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Wi),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Wi)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Vi)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Vi)/2+1,easeInBounce:e=>1-Ni(1-e),easeOutBounce:Ni,easeInOutBounce:e=>e<.5?(1-Ni(1-2*e))/2:(1+Ni(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},Ui=Symbol.for("FluidValue.get"),qi=Symbol.for("FluidValue.observers"),Xi=e=>Boolean(e&&e[Ui]),Ji=e=>e&&e[Ui]?e[Ui]():e,Qi=e=>e[qi]||null;function Zi(e,t){const r=e[qi];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var Gi=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");Ki(this,e)}},Ki=(e,t)=>na(e,Ui,t);function ea(e,t){if(e[Ui]){let r=e[qi];r||na(e,qi,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function ta(e,t){const r=e[qi];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[qi]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var ra,na=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),ia=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,aa=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,oa=new RegExp(`(${ia.source})(%|[a-z]+)`,"i"),sa=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,la=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,da=e=>{const[t,r]=ca(e);if(!t||oi())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&la.test(r)?da(r):r||e},ca=e=>{const t=la.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},ua=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,ha=e=>{ra||(ra=si?new RegExp(`(${Object.keys(si).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Ji(e).replace(la,da).replace(aa,Ii).replace(ra,Ii))),r=t.map((e=>e.match(ia).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Pi({...e,output:t})));return e=>{const r=!oa.test(t[0])&&t.find((e=>oa.test(e)))?.replace(ia,"");let i=0;return t[0].replace(ia,(()=>`${n[i++](e)}${r||""}`)).replace(sa,ua)}},ma="react-spring: ",ga=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${ma}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},fa=ga(console.warn);var pa=ga(console.warn);function ba(e){return Zn.str(e)&&("#"==e[0]||/\d/.test(e)||!oi()&&la.test(e)||e in(si||{}))}var ya=oi()?u:h,va=()=>{const e=a(!1);return ya((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Fa(){const e=o()[1],t=va();return()=>{t.current&&e(Math.random())}}var xa=e=>u(e,wa),wa=[];function $a(e){const t=a();return u((()=>{t.current=e})),t.current}var Da=Symbol.for("Animated:node"),Sa=e=>e&&e[Da],Ba=(e,t)=>{return r=e,n=Da,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Ea=e=>e&&e[Da]&&e[Da].getPayload(),Ca=class{constructor(){Ba(this,this)}getPayload(){return this.payload||[]}},ka=class extends Ca{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,Zn.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new ka(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Zn.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Zn.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Aa=class extends ka{constructor(e){super(0),this._string=null,this._toString=Pi({output:[e,e]})}static create(e){return new Aa(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Zn.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Pi({output:[this.getValue(),e]})),this._value=0,super.reset()}},Oa={dependencies:null},Ma=class extends Ca{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return ei(this.source,((r,n)=>{var i;(i=r)&&i[Da]===i?t[n]=r.getValue(e):Xi(r)?t[n]=Ji(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Kn(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return ei(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Oa.dependencies&&Xi(e)&&Oa.dependencies.add(e);const t=Ea(e);t&&Kn(t,(e=>this.add(e)))}},_a=class extends Ma{constructor(e){super(e)}static create(e){return new _a(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(za)),!0)}};function za(e){return(ba(e)?Aa:ka).create(e)}function Ha(e){const t=Sa(e);return t?t.constructor:Zn.arr(e)?_a:ba(e)?Aa:ka}var Ta=(e,t)=>{const r=!Zn.fun(e)||e.prototype&&e.prototype.isReactComponent;return m(((i,o)=>{const s=a(null),l=r&&g((e=>{s.current=function(e,t){e&&(Zn.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[d,c]=function(e,t){const r=new Set;Oa.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ma(e),Oa.dependencies=null,[e,r]}(i,t),h=Fa(),m=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&h()},f=new Ia(m,c),p=a();ya((()=>(p.current=f,Kn(c,(e=>ea(e,f))),()=>{p.current&&(Kn(p.current.deps,(e=>ta(e,p.current))),_n.cancel(p.current.update))}))),u(m,[]),xa((()=>()=>{const e=p.current;Kn(e.deps,(t=>ta(t,e)))}));const b=t.getComponentProps(d.getValue());return n.createElement(e,{...b,ref:l})}))},Ia=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&_n.write(this.update)}};var Pa=Symbol.for("AnimatedComponent"),ja=e=>Zn.str(e)?e:e&&Zn.str(e.displayName)?e.displayName:Zn.fun(e)&&e.name||null;function La(e,...t){return Zn.fun(e)?e(...t):e}var Ra=(e,t)=>!0===e||!!(t&&e&&(Zn.fun(e)?e(t):ti(e).includes(t))),Wa=(e,t)=>Zn.obj(e)?t&&e[t]:e,Va=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Na=e=>e,Ya=(e,t=Na)=>{let r=Ua;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Zn.und(r)||(n[i]=r)}return n},Ua=["config","onProps","onStart","onChange","onPause","onResume","onRest"],qa={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Xa(e){const t=function(e){const t={};let r=0;if(ei(e,((e,n)=>{qa[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return ei(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function Ja(e){return e=Ji(e),Zn.arr(e)?e.map(Ja):ba(e)?On.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Qa(e){return Zn.fun(e)||Zn.arr(e)&&Zn.obj(e[0])}var Za={tension:170,friction:26,mass:1,damping:1,easing:Yi.linear,clamp:!1},Ga=class{constructor(){this.velocity=0,Object.assign(this,Za)}};function Ka(e,t){if(Zn.und(t.decay)){const r=!Zn.und(t.tension)||!Zn.und(t.friction);!r&&Zn.und(t.frequency)&&Zn.und(t.damping)&&Zn.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var eo=[],to=class{constructor(){this.changed=!1,this.values=eo,this.toValues=null,this.fromValues=eo,this.config=new Ga,this.immediate=!1}};function ro(e,{key:t,props:r,defaultProps:n,state:i,actions:a}){return new Promise(((o,s)=>{let l,d,c=Ra(r.cancel??n?.cancel,t);if(c)m();else{Zn.und(r.pause)||(i.paused=Ra(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||Ra(e,t)),l=La(r.delay||0,t),e?(i.resumeQueue.add(h),a.pause()):(a.resume(),h())}function u(){i.resumeQueue.add(h),i.timeouts.delete(d),d.cancel(),l=d.time-_n.now()}function h(){l>0&&!On.skipAnimation?(i.delayed=!0,d=_n.setTimeout(m,l),i.pauseQueue.add(u),i.timeouts.add(d)):m()}function m(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(d),e<=(i.cancelId||0)&&(c=!0);try{a.start({...r,callId:e,cancel:c},o)}catch(e){s(e)}}}))}var no=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?oo(e.get()):t.every((e=>e.noop))?io(e.get()):ao(e.get(),t.every((e=>e.finished))),io=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ao=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),oo=e=>({value:e,cancelled:!0,finished:!1});function so(e,t,r,n){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=r;return a||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const d=Ya(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),m=e=>{const t=i<=(r.cancelId||0)&&oo(n)||i!==r.asyncId&&ao(n,!1);if(t)throw e.result=t,u(e),e},g=(e,t)=>{const a=new co,o=new uo;return(async()=>{if(On.skipAnimation)throw lo(r),o.result=ao(n,!1),u(o),o;m(a);const s=Zn.obj(e)?{...e}:{...t,to:e};s.parentId=i,ei(d,((e,t)=>{Zn.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return m(a),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(On.skipAnimation)return lo(r),ao(n,!1);try{let t;t=Zn.arr(e)?(async e=>{for(const t of e)await g(t)})(e):Promise.resolve(e(g,n.stop.bind(n))),await Promise.all([t.then(c),h]),f=ao(n.get(),!0,!1)}catch(e){if(e instanceof co)f=e.result;else{if(!(e instanceof uo))throw e;f=e.result}}finally{i==r.asyncId&&(r.asyncId=a,r.asyncTo=a?s:void 0,r.promise=a?l:void 0)}return Zn.fun(o)&&_n.batchedUpdates((()=>{o(f,n,n.item)})),f})():l}function lo(e,t){ri(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var co=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},uo=class extends Error{constructor(){super("SkipAnimationSignal")}},ho=e=>e instanceof go,mo=1,go=class extends Gi{constructor(){super(...arguments),this.id=mo++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Sa(this);return e&&e.getValue()}to(...e){return On.to(this,e)}interpolate(...e){return fa(`${ma}The "interpolate" function is deprecated in v9 (use "to" instead)`),On.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Zi(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||fi.sort(this),Zi(this,{type:"priority",parent:this,priority:e})}},fo=Symbol.for("SpringPhase"),po=e=>(1&e[fo])>0,bo=e=>(2&e[fo])>0,yo=e=>(4&e[fo])>0,vo=(e,t)=>t?e[fo]|=3:e[fo]&=-3,Fo=(e,t)=>t?e[fo]|=4:e[fo]&=-5,xo=class extends go{constructor(e,t){if(super(),this.animation=new to,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Zn.und(e)||!Zn.und(t)){const r=Zn.obj(e)?{...e}:{...t,from:e};Zn.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(bo(this)||this._state.asyncTo)||yo(this)}get goal(){return Ji(this.animation.to)}get velocity(){const e=Sa(this);return e instanceof ka?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return po(this)}get isAnimating(){return bo(this)}get isPaused(){return yo(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:a}=n,o=Ea(n.to);!o&&Xi(n.to)&&(i=ti(Ji(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==Aa?1:o?o[l].lastPosition:i[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=Zn.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(Zn.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,o=i*n}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,n=a.clamp?0:a.bounce,l=!Zn.und(n),m=r==d?s.v0>0:r<d;let g,f=!1;const p=1,b=Math.ceil(e/p);for(let e=0;e<b&&(g=Math.abs(o)>t,g||(c=Math.abs(d-u)<=h,!c));++e){l&&(f=u==d||u>d==m,f&&(o=-o*n,u=d));o+=(1e-6*-a.tension*(u-d)+.001*-a.friction*o)/a.mass*p,u+=o*p}}else{let n=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(a.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+a.easing(n)*(d-r),o=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,a.round)&&(r=!0)}));const s=Sa(this),l=s.getValue();if(t){const e=Ji(n.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return _n.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(bo(this)){const{to:e,config:t}=this.animation;_n.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Zn.und(e)?(r=this.queue||[],this.queue=[]):r=[Zn.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>no(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),lo(this._state,e&&this._lastCallId),_n.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Zn.obj(r)?r[t]:r,(null==r||Qa(r))&&(r=void 0),n=Zn.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return po(this)||(e.reverse&&([r,n]=[n,r]),n=Ji(n),Zn.und(n)?Sa(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,Ya(e,((e,t)=>/^on/.test(t)?Wa(e,r):e))),Co(this,e,"onProps"),ko(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return ro(++this._lastCallId,{key:r,props:e,defaultProps:n,state:a,actions:{pause:()=>{yo(this)||(Fo(this,!0),ai(a.pauseQueue),ko(this,"onPause",ao(this,wo(this,this.animation.to)),this))},resume:()=>{yo(this)&&(Fo(this,!1),bo(this)&&this._resume(),ai(a.resumeQueue),ko(this,"onResume",ao(this,wo(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=$o(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(oo(this));const n=!Zn.und(e.to),i=!Zn.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(oo(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!i||n||t.default&&!Zn.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Gn(u,d);h&&(s.from=u),u=Ji(u);const m=!Gn(c,l);m&&this._focus(c);const g=Qa(t.to),{config:f}=s,{decay:p,velocity:b}=f;(n||i)&&(f.velocity=0),t.config&&!g&&function(e,t,r){r&&(Ka(r={...r},t),t={...r,...t}),Ka(e,t),Object.assign(e,t);for(const t in Za)null==e[t]&&(e[t]=Za[t]);let{frequency:n,damping:i}=e;const{mass:a}=e;Zn.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*a,e.friction=4*Math.PI*i*a/n)}(f,La(t.config,a),t.config!==o.config?La(o.config,a):void 0);let y=Sa(this);if(!y||Zn.und(c))return r(ao(this,!0));const v=Zn.und(t.reset)?i&&!t.default:!Zn.und(u)&&Ra(t.reset,a),F=v?u:this.get(),x=Ja(c),w=Zn.num(x)||Zn.arr(x)||ba(x),$=!g&&(!w||Ra(o.immediate||t.immediate,a));if(m){const e=Ha(c);if(e!==y.constructor){if(!$)throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);y=this._set(x)}}const D=y.constructor;let S=Xi(c),B=!1;if(!S){const e=v||!po(this)&&h;(m||e)&&(B=Gn(Ja(F),x),S=!B),(Gn(s.immediate,$)||$)&&Gn(f.decay,p)&&Gn(f.velocity,b)||(S=!0)}if(B&&bo(this)&&(s.changed&&!v?S=!0:S||this._stop(l)),!g&&((S||Xi(l))&&(s.values=y.getPayload(),s.toValues=Xi(c)?null:D==Aa?[1]:ti(x)),s.immediate!=$&&(s.immediate=$,$||v||this._set(l)),S)){const{onRest:e}=s;Kn(Eo,(e=>Co(this,t,e)));const n=ao(this,wo(this,l));ai(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&_n.batchedUpdates((()=>{s.changed=!v,e?.(n,this),v?La(o.onRest,n):s.onStart?.(n,this)}))}v&&this._set(F),g?r(so(t.to,t,this._state,this)):S?this._start():bo(this)&&!m?this._pendingCalls.add(r):r(io(F))}_focus(e){const t=this.animation;e!==t.to&&(Qi(this)&&this._detach(),t.to=e,Qi(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Xi(t)&&(ea(t,this),ho(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Xi(e)&&ta(e,this)}_set(e,t=!0){const r=Ji(e);if(!Zn.und(r)){const e=Sa(this);if(!e||!Gn(r,e.getValue())){const n=Ha(r);e&&e.constructor==n?e.setValue(r):Ba(this,n.create(r)),e&&_n.batchedUpdates((()=>{this._onChange(r,t)}))}}return Sa(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,ko(this,"onStart",ao(this,wo(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),La(this.animation.onChange,e,this)),La(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Sa(this).reset(Ji(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),bo(this)||(vo(this,!0),yo(this)||this._resume())}_resume(){On.skipAnimation?this.finish():fi.start(this)}_stop(e,t){if(bo(this)){vo(this,!1);const r=this.animation;Kn(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Zi(this,{type:"idle",parent:this});const n=t?oo(this.get()):ao(this.get(),wo(this,e??r.to));ai(this._pendingCalls,n),r.changed&&(r.changed=!1,ko(this,"onRest",n,this))}}};function wo(e,t){const r=Ja(t);return Gn(Ja(e.get()),r)}function $o(e,t=e.loop,r=e.to){const n=La(t);if(n){const i=!0!==n&&Xa(n),a=(i||e).reverse,o=!i||i.reset;return Do({...e,loop:t,default:!1,pause:void 0,to:!a||Qa(r)?r:void 0,from:o?e.from:void 0,reset:o,...i})}}function Do(e){const{to:t,from:r}=e=Xa(e),n=new Set;return Zn.obj(t)&&Bo(t,n),Zn.obj(r)&&Bo(r,n),e.keys=n.size?Array.from(n):null,e}function So(e){const t=Do(e);return Zn.und(t.default)&&(t.default=Ya(t)),t}function Bo(e,t){ei(e,((e,r)=>null!=e&&t.add(r)))}var Eo=["onStart","onRest","onChange","onPause","onResume"];function Co(e,t,r){e.animation[r]=t[r]!==Va(t,r)?Wa(t[r],e.key):void 0}function ko(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Ao=["onStart","onChange","onRest"],Oo=1,Mo=class{constructor(e,t){this.id=Oo++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Zn.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Do(e)),this}start(e){let{queue:t}=this;return e?t=ti(e).map(Do):this.queue=[],this._flush?this._flush(this,t):(jo(this,t),_o(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Kn(ti(t),(t=>r[t].stop(!!e)))}else lo(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Zn.und(e))this.start({pause:!0});else{const t=this.springs;Kn(ti(e),(e=>t[e].pause()))}return this}resume(e){if(Zn.und(e))this.start({pause:!1});else{const t=this.springs;Kn(ti(e),(e=>t[e].resume()))}return this}each(e){ei(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,ri(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!n&&this._started,o=i||a&&r.size?this.get():null;i&&t.size&&ri(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,ri(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}_n.onFrame(this._onFrame)}};function _o(e,t){return Promise.all(t.map((t=>zo(e,t)))).then((t=>no(e,t)))}async function zo(e,t,r){const{keys:n,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,d=Zn.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const c=Zn.arr(i)||Zn.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):Kn(Ao,(r=>{const n=t[r];if(Zn.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,ai(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),m=!0===t.cancel||!0===Va(t,"cancel");(c||m&&u.asyncId)&&h.push(ro(++e._lastAsyncId,{props:t,state:u,actions:{pause:Qn,resume:Qn,start(t,r){m?(lo(u,e._lastAsyncId),r(oo(e))):(t.onRest=s,r(so(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const g=no(e,await Promise.all(h));if(o&&g.finished&&(!r||!g.noop)){const r=$o(t,o,i);if(r)return jo(e,[r]),zo(e,r,!0)}return l&&_n.batchedUpdates((()=>l(g,e,e.item))),g}function Ho(e,t){const r={...e.springs};return t&&Kn(ti(t),(e=>{Zn.und(e.keys)&&(e=Do(e)),Zn.obj(e.to)||(e={...e,to:void 0}),Po(r,e,(e=>Io(e)))})),To(e,r),r}function To(e,t){ei(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,ea(t,e))}))}function Io(e,t){const r=new xo;return r.key=e,t&&ea(r,t),r}function Po(e,t,r){t.keys&&Kn(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function jo(e,t){Kn(t,(t=>{Po(e.springs,t,(t=>Io(t,e)))}))}var Lo,Ro,Wo=({children:e,...t})=>{const r=f(Vo),i=t.pause||!!r.pause,s=t.immediate||!!r.immediate;t=function(e,t){const[r]=o((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=r;return u((()=>{n.current=s,i==r&&(r.inputs=r.result=void 0)}),[s]),s.result}((()=>({pause:i,immediate:s})),[i,s]);const{Provider:l}=Vo;return n.createElement(l,{value:t},e)},Vo=(Lo=Wo,Ro={},Object.assign(Lo,n.createContext(Ro)),Lo.Provider._context=Lo,Lo.Consumer._context=Lo,Lo);Wo.Provider=Vo.Provider,Wo.Consumer=Vo.Consumer;var No=()=>{const e=[],t=function(t){pa(`${ma}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Kn(e,((e,i)=>{if(Zn.und(t))n.push(e.start());else{const a=r(t,e,i);a&&n.push(e.start(a))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Kn(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Kn(e,(e=>e.resume(...arguments))),this},t.set=function(t){Kn(e,((e,r)=>{const n=Zn.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return Kn(e,((e,n)=>{if(Zn.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Kn(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Kn(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Zn.fun(e)?e(r,t):e};return t._getProps=r,t};function Yo(e,t){const r=Zn.fun(e),[[n],i]=function(e,t,r){const n=Zn.fun(t)&&t;n&&!r&&(r=[]);const i=p((()=>n||3==arguments.length?No():void 0),[]),o=a(0),s=Fa(),l=p((()=>({ctrls:[],queue:[],flush(e,t){const r=Ho(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?_o(e,t):new Promise((n=>{To(e,r),l.queue.push((()=>{n(_o(e,t))})),s()}))}})),[]),d=a([...l.ctrls]),c=[],u=$a(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=d.current[i]||(d.current[i]=new Mo(null,l.flush)),r=n?n(i,e):t[i];r&&(c[i]=So(r))}}p((()=>{Kn(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,i),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),p((()=>{h(0,Math.min(u,e))}),r);const m=d.current.map(((e,t)=>Ho(e,c[t]))),g=f(Wo),b=$a(g),y=g!==b&&function(e){for(const t in e)return!0;return!1}(g);ya((()=>{o.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],Kn(e,(e=>e()))),Kn(d.current,((e,t)=>{i?.add(e),y&&e.start({default:g});const r=c[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),xa((()=>()=>{Kn(l.ctrls,(e=>e.stop(!0)))}));const v=m.map((e=>({...e})));return i?[v,i]:v}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}var Uo=class extends go{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Pi(...t);const r=this._get(),n=Ha(r);Ba(this,n.create(r))}advance(e){const t=this._get();Gn(t,this.get())||(Sa(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Xo(this._active)&&Jo(this)}_get(){const e=Zn.arr(this.source)?this.source.map(Ji):ti(Ji(this.source));return this.calc(...e)}_start(){this.idle&&!Xo(this._active)&&(this.idle=!1,Kn(Ea(this),(e=>{e.done=!1})),On.skipAnimation?(_n.batchedUpdates((()=>this.advance())),Jo(this)):fi.start(this))}_attach(){let e=1;Kn(ti(this.source),(t=>{Xi(t)&&ea(t,this),ho(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Kn(ti(this.source),(e=>{Xi(e)&&ta(e,this)})),this._active.clear(),Jo(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=ti(this.source).reduce(((e,t)=>Math.max(e,(ho(t)?t.priority:0)+1)),0))}};function qo(e){return!1!==e.idle}function Xo(e){return!e.size||Array.from(e).every(qo)}function Jo(e){e.idle||(e.idle=!0,Kn(Ea(e),(e=>{e.done=!0})),Zi(e,{type:"idle",parent:e}))}On.assign({createStringInterpolator:ha,to:(e,t)=>new Uo(e,t)});var Qo=/^--/;function Zo(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Qo.test(e)||Ko.hasOwnProperty(e)&&Ko[e]?(""+t).trim():t+"px"}var Go={};var Ko={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},es=["Webkit","Ms","Moz","O"];Ko=Object.keys(Ko).reduce(((e,t)=>(es.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),Ko);var ts=/^(matrix|translate|scale|rotate|skew)/,rs=/^(translate)/,ns=/^(rotate|skew)/,is=(e,t)=>Zn.num(e)&&0!==e?e+t:e,as=(e,t)=>Zn.arr(e)?e.every((e=>as(e,t))):Zn.num(e)?e===t:parseFloat(e)===t,os=class extends Ma{constructor({x:e,y:t,z:r,...n}){const i=[],a=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>is(e,"px"))).join(",")})`,as(e,0)]))),ei(n,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(ts.test(t)){if(delete n[t],Zn.und(e))return;const r=rs.test(t)?"px":ns.test(t)?"deg":"";i.push(ti(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${is(i,r)})`,as(i,0)]:e=>[`${t}(${e.map((e=>is(e,r))).join(",")})`,as(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new ss(i,a)),super(n)}},ss=class extends Gi{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Kn(this.inputs,((r,n)=>{const i=Ji(r[0]),[a,o]=this.transforms[n](Zn.arr(i)?i:r.map(Ji));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&Kn(this.inputs,(e=>Kn(e,(e=>Xi(e)&&ea(e,this)))))}observerRemoved(e){0==e&&Kn(this.inputs,(e=>Kn(e,(e=>Xi(e)&&ta(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Zi(this,e)}};On.assign({batchedUpdates:D,createStringInterpolator:ha,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ls,ds=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Ma(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},a=e=>{const t=ja(e)||"Anonymous";return(e=Zn.str(e)?a[e]||(a[e]=Ta(e,i)):e[Pa]||(e[Pa]=Ta(e,i))).displayName=`Animated(${t})`,e};return ei(e,((t,r)=>{Zn.arr(e)&&(r=ja(t)),a[r]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,d=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:Go[t]||(Go[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=Zo(t,n[t]);Qo.test(t)?e.style.setProperty(t,r):e.style[t]=r}c.forEach(((t,r)=>{e.setAttribute(t,d[r])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new os(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),cs=ds.animated;!function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+a.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return a.repeat(e.substring(0,r).length)+e.substring(r,n+1)+a.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ls||(ls={}));var us={exports:{}};us.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,d),a=r-i<0,o=t.clone().add(n+(a?-1:1),d);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",F={};F[v]=p;var x="$isDayjsObject",w=function(e){return e instanceof B||!(!e||!e[x])},$=function e(t,r,n){var i;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();F[a]&&(i=a),r&&(F[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;F[s]=t,i=s}return!n&&i&&(v=i),i||!n&&v},D=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},S=y;S.l=$,S.i=w,S.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function p(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===m)},b.isSame=function(e,t){var r=D(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return D(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<D(e)},b.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!S.u(t)||t,c=S.p(e),m=function(e,t){var i=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,p=this.$M,b=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,p):m(0,p+1);case l:var v=this.$locale().weekStart||0,F=(f<v?f+7:f)-v;return m(n?b-F:b+(6-F),p);case s:case h:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case a:return g(y+"Seconds",2);case i:return g(y+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=S.p(e),c="set"+(this.$u?"UTC":""),m=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[o]=c+"Hours",r[a]=c+"Minutes",r[i]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var f=this.clone().set(h,1);f.$d[m](g),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[S.p(e)]()},b.add=function(n,c){var h,m=this;n=Number(n);var g=S.p(c),f=function(e){var t=D(m);return S.w(t.date(t.date()+Math.round(e*n)),m)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return f(1);if(g===l)return f(7);var p=(h={},h[a]=t,h[o]=r,h[i]=e,h)[g]||1,b=this.$d.getTime()+n*p;return S.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},h=function(e){return S.s(a%12||12,e,"0")},g=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return s+1;case"MM":return S.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return S.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return S.s(o,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,m){var g,f=this,p=S.p(h),b=D(n),y=(b.utcOffset()-this.utcOffset())*t,v=this-b,F=function(){return S.m(f,b)};switch(p){case u:g=F()/12;break;case d:g=F();break;case c:g=F()/3;break;case l:g=(v-y)/6048e5;break;case s:g=(v-y)/864e5;break;case o:g=v/r;break;case a:g=v/t;break;case i:g=v/e;break;default:g=v}return m?g:S.a(g)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return F[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=$(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),E=B.prototype;return D.prototype=E,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,B,D),e.$i=!0),D},D.locale=$,D.isDayjs=w,D.unix=function(e){return D(1e3*e)},D.en=F[v],D.Ls=F,D.p={},D}();var hs,ms,gs=j(us.exports);!function(e){e.AM="AM",e.PM="PM"}(hs||(hs={})),function(e){e.roundToNearestHour=(e,t)=>{const r=gs(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=gs(e,n),a=gs(t,n);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(r)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:hs.AM};if(!t)return r;try{if("24hr"===e){const n=bs(t,e);r.minute=ls.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=hs.AM,r.hour=0===i?"12":ls.padValue(i.toString())):(r.period=hs.PM,r.hour=12===i?i.toString():ls.padValue((i-12).toString()))}else{const n=bs(t,e);r.hour=ls.padValue(n.hour),r.minute=ls.padValue(n.minute),r.period="am"===n.period.toLowerCase()?hs.AM:hs.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?ls.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return ls.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?ls.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?ls.padValue(n.toString()):13===n?ls.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===hs.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return ls.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const r=bs(e,t),n=ls.padValue(r.hour);let i=`${n}:${ls.padValue(r.minute)}`;return"12hr"===t?(i+=r.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let a=n;return"pm"===r&&a<12&&(a+=12),"am"===r&&12===a&&(a=0),ys(a,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const a=[];let o=0,s=1440-t;for(n&&(o=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const n=o%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=ys(e,n,t);a.push(r)}else{const t=ys(e,n);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const a=parseInt(n[3]||"0",10);let o=n[4];if(void 0===n[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),ys(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return ys(i,a,o)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",a=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<a)a=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let a=n;return"pm"===r&&12!==a&&(a+=12),"am"===r&&12===a&&(a=0),60*a+i}}(ms||(ms={}));const fs=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},ps=e=>{const t=parseInt(e);return t>=0&&t<=59},bs=(e,t)=>{const r=e.split(":"),n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),a=r[1].substring(2);if(!fs(r[0],t)||!ps(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!fs(r[0],t)||!ps(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},ys=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,vs=b.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Fs=v`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,xs=b.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${Fs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ws=b(xs)`
    animation-delay: -0.45s;
`,$s=b(xs)`
    animation-delay: -0.3s;
`,Ds=b(xs)`
    animation-delay: -0.15s;
`,Ss=(e,t,r)=>qt(r,t)||qt(e,t),Bs=(e,t)=>{const r=t||e.defaultValue;return qt(e.collections,r)},Es={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},Cs=e=>t=>{const r=t.theme,n=Bs(Es,r.colourScheme);return r.overrides&&r.overrides.primitiveColour?Ss(n,e,r.overrides.primitiveColour):n[e]},ks={"primary-10":Cs("primary-10"),"primary-20":Cs("primary-20"),"primary-30":Cs("primary-30"),"primary-40":Cs("primary-40"),"primary-50":Cs("primary-50"),"primary-60":Cs("primary-60"),"primary-70":Cs("primary-70"),"primary-80":Cs("primary-80"),"primary-90":Cs("primary-90"),"primary-95":Cs("primary-95"),"primary-100":Cs("primary-100"),"secondary-10":Cs("secondary-10"),"secondary-20":Cs("secondary-20"),"secondary-30":Cs("secondary-30"),"secondary-40":Cs("secondary-40"),"secondary-50":Cs("secondary-50"),"secondary-60":Cs("secondary-60"),"secondary-70":Cs("secondary-70"),"secondary-80":Cs("secondary-80"),"secondary-90":Cs("secondary-90"),"secondary-95":Cs("secondary-95"),"secondary-100":Cs("secondary-100"),"neutral-10":Cs("neutral-10"),"neutral-20":Cs("neutral-20"),"neutral-30":Cs("neutral-30"),"neutral-40":Cs("neutral-40"),"neutral-50":Cs("neutral-50"),"neutral-60":Cs("neutral-60"),"neutral-70":Cs("neutral-70"),"neutral-80":Cs("neutral-80"),"neutral-90":Cs("neutral-90"),"neutral-95":Cs("neutral-95"),"neutral-100":Cs("neutral-100"),"success-10":Cs("success-10"),"success-20":Cs("success-20"),"success-30":Cs("success-30"),"success-40":Cs("success-40"),"success-50":Cs("success-50"),"success-60":Cs("success-60"),"success-70":Cs("success-70"),"success-80":Cs("success-80"),"success-90":Cs("success-90"),"success-95":Cs("success-95"),"success-100":Cs("success-100"),"warning-10":Cs("warning-10"),"warning-20":Cs("warning-20"),"warning-30":Cs("warning-30"),"warning-40":Cs("warning-40"),"warning-50":Cs("warning-50"),"warning-60":Cs("warning-60"),"warning-70":Cs("warning-70"),"warning-80":Cs("warning-80"),"warning-90":Cs("warning-90"),"warning-95":Cs("warning-95"),"warning-100":Cs("warning-100"),"error-10":Cs("error-10"),"error-20":Cs("error-20"),"error-30":Cs("error-30"),"error-40":Cs("error-40"),"error-50":Cs("error-50"),"error-60":Cs("error-60"),"error-70":Cs("error-70"),"error-80":Cs("error-80"),"error-90":Cs("error-90"),"error-95":Cs("error-95"),"error-100":Cs("error-100"),"info-10":Cs("info-10"),"info-20":Cs("info-20"),"info-30":Cs("info-30"),"info-40":Cs("info-40"),"info-50":Cs("info-50"),"info-60":Cs("info-60"),"info-70":Cs("info-70"),"info-80":Cs("info-80"),"info-90":Cs("info-90"),"info-95":Cs("info-95"),"info-100":Cs("info-100"),white:Cs("white"),black:Cs("black")},As={text:Cs("neutral-20"),"text-subtle":Cs("neutral-30"),"text-subtler":Cs("neutral-50"),"text-subtlest":Cs("neutral-60"),"text-primary":Cs("primary-50"),"text-hover":Cs("primary-40"),"text-selected":Cs("primary-50"),"text-selected-hover":Cs("primary-40"),"text-disabled":Cs("neutral-50"),"text-disabled-subtle":Cs("neutral-60"),"text-disabled-subtlest":Cs("neutral-80"),"text-selected-disabled":Cs("neutral-50"),"text-success":Cs("success-40"),"text-warning":Cs("warning-40"),"text-error":Cs("error-40"),"text-info":Cs("info-40"),"text-inverse":Cs("white"),icon:Cs("neutral-50"),"icon-subtle":Cs("neutral-60"),"icon-strongest":Cs("neutral-20"),"icon-primary":Cs("primary-50"),"icon-primary-subtle":Cs("primary-60"),"icon-primary-subtlest":Cs("primary-70"),"icon-hover":Cs("primary-40"),"icon-selected":Cs("primary-50"),"icon-selected-hover":Cs("primary-40"),"icon-disabled":Cs("neutral-50"),"icon-disabled-subtle":Cs("neutral-60"),"icon-selected-disabled":Cs("neutral-60"),"icon-success":Cs("success-50"),"icon-warning":Cs("warning-60"),"icon-error":Cs("error-50"),"icon-error-strong":Cs("error-40"),"icon-info":Cs("info-50"),"icon-inverse":Cs("white"),"icon-primary-inverse":"#FEAB10",border:Cs("neutral-90"),"border-strong":Cs("neutral-70"),"border-stronger":Cs("neutral-30"),"border-primary":Cs("primary-50"),"border-primary-subtle":Cs("primary-60"),"border-hover":Cs("primary-90"),"border-hover-strong":Cs("primary-60"),"border-selected":Cs("primary-50"),"border-selected-subtle":Cs("primary-70"),"border-selected-subtlest":Cs("primary-90"),"border-selected-hover":Cs("primary-40"),"border-focus":Cs("primary-60"),"border-focus-strong":Cs("primary-50"),"border-disabled":Cs("neutral-90"),"border-selected-disabled":Cs("neutral-70"),"border-success":Cs("success-60"),"border-warning":Cs("warning-60"),"border-error":Cs("error-60"),"border-error-focus":Cs("error-60"),"border-error-strong":Cs("error-40"),"border-info":Cs("info-60"),bg:Cs("white"),"bg-strong":Cs("neutral-100"),"bg-stronger":Cs("neutral-95"),"bg-strongest":Cs("neutral-90"),"bg-hover":Cs("primary-95"),"bg-hover-strong":Cs("primary-90"),"bg-hover-subtle":Cs("primary-100"),"bg-hover-neutral":Cs("neutral-95"),"bg-selected":Cs("primary-95"),"bg-selected-hover":Cs("primary-90"),"bg-selected-strong":Cs("primary-90"),"bg-selected-strongest":Cs("primary-90"),"bg-disabled":Cs("neutral-95"),"bg-selected-disabled":Cs("neutral-95"),"bg-success":Cs("success-100"),"bg-success-strong":Cs("success-50"),"bg-warning":Cs("warning-100"),"bg-warning-strong":Cs("warning-50"),"bg-info":Cs("info-100"),"bg-info-strong":Cs("info-50"),"bg-error":Cs("error-100"),"bg-error-strong":Cs("error-50"),"bg-error-strong-hover":Cs("error-30"),"bg-inverse":Cs("neutral-20"),"bg-inverse-subtle":Cs("neutral-30"),"bg-inverse-subtler":Cs("neutral-50"),"bg-inverse-subtlest":Cs("neutral-60"),"bg-primary":Cs("primary-50"),"bg-primary-subtle":Cs("primary-60"),"bg-primary-subtler":Cs("primary-80"),"bg-primary-subtlest":Cs("primary-100"),"bg-primary-hover":Cs("primary-40"),"bg-primary-subtlest-hover":Cs("primary-90"),"bg-primary-subtlest-selected":Cs("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Cs("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":Cs("black"),"focus-ring-inverse":Cs("white")},Os={collections:{lifesg:As,bookingsg:As,rbs:As,mylegacy:As,ccube:As},defaultValue:"lifesg"},Ms=e=>t=>{const r=t.theme,n=Bs(Os,r.colourScheme),i=r.overrides&&r.overrides.semanticColour?Ss(n,e,r.overrides.semanticColour):n[e];return"function"==typeof i?i(t):i},_s={text:Ms("text"),"text-subtle":Ms("text-subtle"),"text-subtler":Ms("text-subtler"),"text-subtlest":Ms("text-subtlest"),"text-primary":Ms("text-primary"),"text-hover":Ms("text-hover"),"text-selected":Ms("text-selected"),"text-selected-hover":Ms("text-selected-hover"),"text-disabled":Ms("text-disabled"),"text-disabled-subtle":Ms("text-disabled-subtle"),"text-disabled-subtlest":Ms("text-disabled-subtlest"),"text-selected-disabled":Ms("text-selected-disabled"),"text-success":Ms("text-success"),"text-warning":Ms("text-warning"),"text-error":Ms("text-error"),"text-info":Ms("text-info"),"text-inverse":Ms("text-inverse"),icon:Ms("icon"),"icon-subtle":Ms("icon-subtle"),"icon-strongest":Ms("icon-strongest"),"icon-primary":Ms("icon-primary"),"icon-primary-subtle":Ms("icon-primary-subtle"),"icon-primary-subtlest":Ms("icon-primary-subtlest"),"icon-hover":Ms("icon-hover"),"icon-selected":Ms("icon-selected"),"icon-selected-hover":Ms("icon-selected-hover"),"icon-disabled":Ms("icon-disabled"),"icon-disabled-subtle":Ms("icon-disabled-subtle"),"icon-selected-disabled":Ms("icon-selected-disabled"),"icon-success":Ms("icon-success"),"icon-warning":Ms("icon-warning"),"icon-error":Ms("icon-error"),"icon-error-strong":Ms("icon-error-strong"),"icon-info":Ms("icon-info"),"icon-inverse":Ms("icon-inverse"),"icon-primary-inverse":Ms("icon-primary-inverse"),border:Ms("border"),"border-strong":Ms("border-strong"),"border-stronger":Ms("border-stronger"),"border-primary":Ms("border-primary"),"border-primary-subtle":Ms("border-primary-subtle"),"border-hover":Ms("border-hover"),"border-hover-strong":Ms("border-hover-strong"),"border-selected":Ms("border-selected"),"border-selected-subtle":Ms("border-selected-subtle"),"border-selected-subtlest":Ms("border-selected-subtlest"),"border-selected-hover":Ms("border-selected-hover"),"border-focus":Ms("border-focus"),"border-focus-strong":Ms("border-focus-strong"),"border-disabled":Ms("border-disabled"),"border-selected-disabled":Ms("border-selected-disabled"),"border-success":Ms("border-success"),"border-warning":Ms("border-warning"),"border-error":Ms("border-error"),"border-error-focus":Ms("border-error-focus"),"border-error-strong":Ms("border-error-strong"),"border-info":Ms("border-info"),bg:Ms("bg"),"bg-strong":Ms("bg-strong"),"bg-stronger":Ms("bg-stronger"),"bg-strongest":Ms("bg-strongest"),"bg-hover":Ms("bg-hover"),"bg-hover-strong":Ms("bg-hover-strong"),"bg-hover-subtle":Ms("bg-hover-subtle"),"bg-hover-neutral":Ms("bg-hover-neutral"),"bg-selected":Ms("bg-selected"),"bg-selected-hover":Ms("bg-selected-hover"),"bg-selected-strong":Ms("bg-selected-strong"),"bg-selected-strongest":Ms("bg-selected-strongest"),"bg-disabled":Ms("bg-disabled"),"bg-selected-disabled":Ms("bg-selected-disabled"),"bg-success":Ms("bg-success"),"bg-success-strong":Ms("bg-success-strong"),"bg-warning":Ms("bg-warning"),"bg-warning-strong":Ms("bg-warning-strong"),"bg-info":Ms("bg-info"),"bg-info-strong":Ms("bg-info-strong"),"bg-error":Ms("bg-error"),"bg-error-strong":Ms("bg-error-strong"),"bg-error-strong-hover":Ms("bg-error-strong-hover"),"bg-inverse":Ms("bg-inverse"),"bg-inverse-subtle":Ms("bg-inverse-subtle"),"bg-inverse-subtler":Ms("bg-inverse-subtler"),"bg-inverse-subtlest":Ms("bg-inverse-subtlest"),"bg-primary":Ms("bg-primary"),"bg-primary-subtle":Ms("bg-primary-subtle"),"bg-primary-subtler":Ms("bg-primary-subtler"),"bg-primary-subtlest":Ms("bg-primary-subtlest"),"bg-primary-hover":Ms("bg-primary-hover"),"bg-primary-subtlest-hover":Ms("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Ms("bg-primary-subtlest-selected"),"bg-available":Ms("bg-available"),"overlay-strong":Ms("overlay-strong"),"overlay-subtle":Ms("overlay-subtle"),hyperlink:Ms("hyperlink"),"hyperlink-inverse":Ms("hyperlink-inverse"),"focus-ring":Ms("focus-ring"),"focus-ring-inverse":Ms("focus-ring-inverse")},zs={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},Hs=e=>t=>{var r;const n=t.theme,i=Bs(zs,null==n?void 0:n.breakpointScheme);let a;return a=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Ss(i,e,n.overrides.breakpoint):i[e],a},Ts={"xxs-min":Hs("xxs-min"),"xxs-max":Hs("xxs-max"),"xs-min":Hs("xs-min"),"xs-max":Hs("xs-max"),"sm-min":Hs("sm-min"),"sm-max":Hs("sm-max"),"md-min":Hs("md-min"),"md-max":Hs("md-max"),"lg-min":Hs("lg-min"),"lg-max":Hs("lg-max"),"xl-min":Hs("xl-min"),"xl-max":Hs("xl-max"),"xxl-min":Hs("xxl-min"),"xxs-column":Hs("xxs-column"),"xs-column":Hs("xs-column"),"sm-column":Hs("sm-column"),"md-column":Hs("md-column"),"lg-column":Hs("lg-column"),"xl-column":Hs("xl-column"),"xxl-column":Hs("xxl-column"),"xxs-gutter":Hs("xxs-gutter"),"xs-gutter":Hs("xs-gutter"),"sm-gutter":Hs("sm-gutter"),"md-gutter":Hs("md-gutter"),"lg-gutter":Hs("lg-gutter"),"xl-gutter":Hs("xl-gutter"),"xxl-gutter":Hs("xxl-gutter"),"xxs-margin":Hs("xxs-margin"),"xs-margin":Hs("xs-margin"),"sm-margin":Hs("sm-margin"),"md-margin":Hs("md-margin"),"lg-margin":Hs("lg-margin"),"xl-margin":Hs("xl-margin"),"xxl-margin":Hs("xxl-margin")},Is=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Ts["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Ps={MaxWidth:Is("max-width"),MinWidth:Is("min-width")},js={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Ls={collections:{lifesg:js,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:js,mylegacy:js,ccube:js},defaultValue:"lifesg"},Rs=e=>t=>{const r=t.theme,n=Bs(Ls,r.fontScheme);return r.overrides&&r.overrides.fontSpec?Ss(n,e,r.overrides.fontSpec):n[e]},Ws={"header-size-xxl":Rs("header-size-xxl"),"header-size-xl":Rs("header-size-xl"),"header-size-lg":Rs("header-size-lg"),"header-size-md":Rs("header-size-md"),"header-size-sm":Rs("header-size-sm"),"header-size-xs":Rs("header-size-xs"),"header-lh-xxl":Rs("header-lh-xxl"),"header-lh-xl":Rs("header-lh-xl"),"header-lh-lg":Rs("header-lh-lg"),"header-lh-md":Rs("header-lh-md"),"header-lh-sm":Rs("header-lh-sm"),"header-lh-xs":Rs("header-lh-xs"),"header-ls-xxl":Rs("header-ls-xxl"),"header-ls-xl":Rs("header-ls-xl"),"header-ls-lg":Rs("header-ls-lg"),"header-ls-md":Rs("header-ls-md"),"header-ls-sm":Rs("header-ls-sm"),"header-ls-xs":Rs("header-ls-xs"),"weight-light":Rs("weight-light"),"weight-regular":Rs("weight-regular"),"weight-semibold":Rs("weight-semibold"),"weight-bold":Rs("weight-bold"),"font-family":Rs("font-family"),"body-size-baseline":Rs("body-size-baseline"),"body-size-md":Rs("body-size-md"),"body-size-sm":Rs("body-size-sm"),"body-size-xs":Rs("body-size-xs"),"body-lh-baseline":Rs("body-lh-baseline"),"body-lh-md":Rs("body-lh-md"),"body-lh-sm":Rs("body-lh-sm"),"body-lh-xs":Rs("body-lh-xs"),"body-ls-baseline":Rs("body-ls-baseline"),"body-ls-md":Rs("body-ls-md"),"body-ls-sm":Rs("body-ls-sm"),"body-ls-xs":Rs("body-ls-xs"),"formlabel-size-baseline":Rs("formlabel-size-baseline"),"formlabel-size-lg":Rs("formlabel-size-lg"),"formlabel-lh-baseline":Rs("formlabel-lh-baseline"),"formlabel-lh-lg":Rs("formlabel-lh-lg"),"formlabel-ls-baseline":Rs("formlabel-ls-baseline"),"formlabel-ls-lg":Rs("formlabel-ls-lg")},Vs=(e,t,r,n)=>y`
    font-family: ${Rs("font-family")};
    font-size: ${Rs(e)};
    font-weight: ${Rs(t)};
    line-height: ${Rs(r)};
    letter-spacing: ${Rs(n)};
`,Ns={"header-xxl-light":Vs("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Vs("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Vs("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Vs("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Vs("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Vs("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Vs("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Vs("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Vs("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Vs("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Vs("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Vs("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Vs("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Vs("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Vs("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Vs("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Vs("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Vs("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Vs("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Vs("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Vs("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Vs("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Vs("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Vs("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Vs("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Vs("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Vs("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Vs("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Vs("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Vs("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Vs("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Vs("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Vs("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Vs("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Vs("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Vs("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Vs("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Vs("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Vs("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Vs("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Vs("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Vs("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Ys={collections:{lifesg:Ns,bookingsg:Ns,rbs:Ns,mylegacy:Ns,ccube:Ns},defaultValue:"lifesg"},Us=e=>t=>{const r=t.theme,n=Bs(Ys,r.fontScheme),i=r.overrides&&r.overrides.font?Ss(n,e,r.overrides.font):n[e];return"function"==typeof i?i(t):i},qs={"header-xxl-light":Us("header-xxl-light"),"header-xxl-regular":Us("header-xxl-regular"),"header-xxl-semibold":Us("header-xxl-semibold"),"header-xxl-bold":Us("header-xxl-bold"),"header-xl-light":Us("header-xl-light"),"header-xl-regular":Us("header-xl-regular"),"header-xl-semibold":Us("header-xl-semibold"),"header-xl-bold":Us("header-xl-bold"),"header-lg-light":Us("header-lg-light"),"header-lg-regular":Us("header-lg-regular"),"header-lg-semibold":Us("header-lg-semibold"),"header-lg-bold":Us("header-lg-bold"),"header-md-light":Us("header-md-light"),"header-md-regular":Us("header-md-regular"),"header-md-semibold":Us("header-md-semibold"),"header-md-bold":Us("header-md-bold"),"header-sm-light":Us("header-sm-light"),"header-sm-regular":Us("header-sm-regular"),"header-sm-semibold":Us("header-sm-semibold"),"header-sm-bold":Us("header-sm-bold"),"header-xs-light":Us("header-xs-light"),"header-xs-regular":Us("header-xs-regular"),"header-xs-semibold":Us("header-xs-semibold"),"header-xs-bold":Us("header-xs-bold"),"body-baseline-light":Us("body-baseline-light"),"body-baseline-regular":Us("body-baseline-regular"),"body-baseline-semibold":Us("body-baseline-semibold"),"body-baseline-bold":Us("body-baseline-bold"),"body-md-light":Us("body-md-light"),"body-md-regular":Us("body-md-regular"),"body-md-semibold":Us("body-md-semibold"),"body-md-bold":Us("body-md-bold"),"body-sm-light":Us("body-sm-light"),"body-sm-regular":Us("body-sm-regular"),"body-sm-semibold":Us("body-sm-semibold"),"body-sm-bold":Us("body-sm-bold"),"body-xs-light":Us("body-xs-light"),"body-xs-regular":Us("body-xs-regular"),"body-xs-semibold":Us("body-xs-semibold"),"body-xs-bold":Us("body-xs-bold"),"formlabel-baseline-semibold":Us("formlabel-baseline-semibold"),"formlabel-lg-semibold":Us("formlabel-lg-semibold")},Xs=Object.assign(Object.assign({},_s),{Primitive:ks}),Js=Ws,Qs=qs,Zs=Ps,Gs=b.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return y`
                    background-color: ${Xs.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?Xs["border-error-strong"]:Xs["border-primary"]};

                    color: ${e.$buttonIsDanger?Xs["text-error"]:Xs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Xs["bg-hover-neutral"]};
                    }
                `;case"light":return y`
                    background-color: ${Xs.bg};
                    border: 1px solid ${Xs.border};

                    color: ${e.$buttonIsDanger?Xs["text-error"]:Xs["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Xs["bg-hover-neutral"]};
                    }
                `;case"link":return y`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?Xs["text-error"]:Xs["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Xs["bg-hover-neutral"]};
                    }
                `;case"disabled":return y`
                    background-color: ${Xs["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Xs["text-disabled"]};
                `;default:return y`
                    background-color: ${e.$buttonIsDanger?Xs["bg-error-strong"]:Xs["bg-primary"]};
                    border: 1px solid transparent;

                    ${Zs.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Xs["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Xs["bg-error-strong-hover"]:Xs["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return y`
                    height: 2.5rem;
                    ${Qs["body-md-semibold"]}

                    ${Zs.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return y`
                    height: 4rem;
                    ${Qs["header-md-semibold"]}

                    ${Zs.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return y`
                    height: 3rem;
                    ${Qs["header-xs-semibold"]}

                    ${Zs.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ks=b((({color:r,className:n,size:i})=>e(vs,Object.assign({className:n,$size:i,$color:r},{children:[t(xs,{id:"inner1"}),t(ws,{id:"inner2"}),t($s,{id:"inner3"}),t(Ds,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,el={Default:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=I(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Gs,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(Ks,{}),t("span",{children:i})]}))})),Small:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=I(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Gs,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(Ks,{}),t("span",{children:i})]}))})),Large:i.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,d=I(r,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Gs,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&t(Ks,{}),t("span",{children:i})]}))}))},tl={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},rl=e=>Object.keys(tl).reduce(((t,r)=>{const n=tl[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),nl=rl("max-width");rl("min-width");var il={exports:{}};il.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],m=c&&c[1];o[l]=m?{regex:h,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,g=o||(i||a?1:m.getDate()),f=i||m.getFullYear(),p=0;i&&!a||(p=a>0?a-1:m.getMonth());var b=s||0,y=l||0,v=d||0,F=c||0;return u?new Date(Date.UTC(f,p,g,b,y,v,F+60*u.offset*1e3)):r?new Date(Date.UTC(f,p,g,b,y,v,F)):new Date(f,p,g,b,y,v,F)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var m=s.length,g=1;g<=m;g+=1){o[1]=s[g-1];var f=r.apply(this,o);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}g===m&&(this.$d=new Date(""))}else i.call(this,e)}}}();var al=j(il.exports),ol={exports:{}};ol.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var sl=j(ol.exports),ll={exports:{}};ll.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var dl=j(ll.exports),cl={exports:{}};cl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var ul,hl,ml,gl=j(cl.exports),fl={exports:{}},pl=j(fl.exports=(ul={year:0,month:1,day:2,hour:3,minute:4,second:5},hl={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=hl[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),hl[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=ul[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],h=24===u?0:u,m=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(m).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}));gs.extend(sl),gs.extend(gl),gs.extend(dl),gs.extend(al),gs.extend(pl),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=gs(t).startOf("week");return bl(r).map((e=>yl(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return yl(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(gs(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+gs(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=gs(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?gs(n):void 0,i?gs(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(ml||(ml={}));const bl=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},yl=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},vl=[1,3,5,7,8,10,12],Fl=[4,6,9,11];var xl,wl,$l;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":vl.includes(a)?Math.min(i,31).toString():Fl.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=gs(e,r);return gs(t,r).diff(n,"minute")},e.toDayjs=e=>e?gs(e):gs(),e.addMinutesToTime=(e,t,r="HH:mm")=>gs(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>gs(e).isSame(gs(t),r)}(xl||(xl={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!gs(e).isBefore(n,"day"))||!(!i||!gs(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(gs(e).isValid())return e}return""}}(wl||(wl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}($l||($l={}));const Dl=(e,t,r="window",n)=>{const i=a();u((()=>{i.current=t}),[t]),u((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const a=e=>i.current(e);return t.addEventListener(e,a,n),()=>{t.removeEventListener(e,a,n)}}),[e,r])},Sl=e=>{const{textSize:t}=e||{};return y`
        // Text styling
        ${t&&Qs[`${t}-regular`]}

        strong {
            font-weight: ${Js["weight-semibold"]};
            ${t&&Qs[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Js["weight-semibold"]};
            ${t&&Qs[`${t}-semibold`]}
            color: ${Xs.hyperlink};
            text-decoration: none;

            svg {
                color: ${Xs["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Xs["hyperlink-hover"]};

                svg {
                    color: ${Xs["icon-hover"]};
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
    `},Bl=(e,t,r=!1)=>{const n=`${e}-${t.toLowerCase()}`;return y`
        ${Qs[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},El=(e,t)=>y`
    ${Bl(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1)=>t?y`
            display: block;
        `:e?y`
            display: inline;
        `:y`
            display: block;
        `)(t.inline,t.paragraph)}
    color: ${Xs.text};
`;var Cl;!function(r){const n=(e,t,r)=>{const n=b(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>El(t,e)}
        `;return n.displayName=`Typography.${r}`,n};r.HeaderXXL=n("h1","header-xxl","HeaderXXL"),r.HeaderXL=n("h2","header-xl","HeaderXL"),r.HeaderLG=n("h3","header-lg","HeaderLG"),r.HeaderMD=n("h4","header-md","HeaderMD"),r.HeaderSM=n("h5","header-sm","HeaderSM"),r.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,t)=>{const r=b.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>El(e,t)}
        `;return r.displayName=`Typography.${t}`,r};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=b.a`
            ${e=>y`
                ${Bl(r,e.weight||"regular")}
                color: ${Xs.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Xs["text-hover"]};
                }
            `}
        `,a=r=>{var{external:n=!1,children:a}=r,o=I(r,["external","children"]);return e(i,Object.assign({},o,{children:[a,n&&t(kl,{})]}))};return a.displayName=`Typography.${n}`,a};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Cl||(Cl={}));const kl=b(F)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,Al=b.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Xs["bg-error"](e),r=Xs["border-error"](e);break;case"success":t=Xs["bg-success"](e),r=Xs["border-success"](e);break;case"warning":default:t=Xs["bg-warning"](e),r=Xs["border-warning"](e);break;case"info":t=Xs["bg-info"](e),r=Xs["border-info"](e);break;case"description":t=Xs["bg-strong"](e),r=Xs["border-strong"](e)}return y`
            background: ${t};
            border-left: 2px solid ${r};
        `}}

    color: ${Xs.text};
    ${e=>"small"===e.$sizeType?Sl({textSize:"body-sm"}):Sl({textSize:"body-md"})}
`,Ol=b.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&y`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Xs["icon-error"](e);break;case"success":t=Xs["icon-success"](e);break;case"warning":default:t=Xs["icon-warning"](e);break;case"info":t=Xs["icon-info"](e);break;case"description":t=Xs["icon-subtle"](e)}return y`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Ml=b(Cl.LinkSM)`
    ${e=>"small"===e.$sizeType?y`
                ${Qs["body-sm-semibold"]}
                margin-top: 0.25rem;
            `:y`
                ${Qs["body-md-semibold"]}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
    }
`,_l=b.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,zl=b.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Hl=b.button`
    ${e=>"small"===e.$sizeType?y`
                ${Qs["body-sm-semibold"]}
            `:y`
                ${Qs["body-md-semibold"]}
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

    color: ${Xs["text-primary"]};
`,Tl=b(A)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,Il=b.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?y`
                    color: ${Xs["icon-selected-disabled"]};
                `:y`
                    color: ${Xs["icon-disabled-subtle"]};
                `:e.$active?y`
                color: ${Xs["icon-selected"]};
            `:y`
            color: ${Xs["icon-subtle"]};
        `};
`,Pl=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,jl=(b.ol`
    ${e=>Pl(e.bottomMargin)}
    margin-left: ${3}rem;

    ${nl.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Fr(e.size,"regular")}
        position: relative;
        color: ${rr[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return y`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return y`
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
`,b.ul`
    ${e=>Pl(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Fr(e.size,"regular")}
        color: ${rr[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`),Ll=e=>{var{size:r="Body",children:n}=e,i=I(e,["size","children"]);return t(jl,Object.assign({size:r},i,{children:n}))},Rl=b.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Xs.bg};

    ${e=>{if(!e.$indicator)return y`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return y`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?y`
                        border-color: ${Xs["border-error-strong"]};
                    `:e.$disabled?e.$selected?y`
                            border: none;
                            background: ${Xs["bg-selected-disabled"]};
                        `:y`
                            border: none;
                        `:e.$selected?y`
                        border: none;
                        background: ${Xs["bg-selected"]};

                        :hover {
                            background: ${Xs["bg-selected-hover"]};
                        }
                    `:y`
                    border: none;

                    :hover {
                        background: ${Xs["bg-hover-subtle"]};
                    }
                `:e.$error?y`
                        border-color: ${Xs["border-error-strong"]};
                    `:e.$disabled?e.$selected?y`
                            border-color: ${Xs["border-selected-disabled"]};
                            background: ${Xs["bg-selected-disabled"]};
                        `:y`
                            border-color: ${Xs["border-disabled"]};
                            background: ${Xs["bg-disabled"]};
                        `:e.$selected?y`
                        border-color: ${Xs["border-selected"]};
                        background: ${Xs["bg-selected"]};

                        :hover {
                            border-color: ${Xs["border-selected-hover"]};
                            background: ${Xs["bg-selected-hover"]};
                        }
                    `:y`
                    border-color: ${Xs.border};

                    :hover {
                        border-color: ${Xs["border-hover-strong"]};
                    }
                `}
`,Wl=b.input`
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
`,Vl=b.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?y`
                    color: ${Xs["text-selected-disabled"]};
                `:y`
                    color: ${Xs["text-disabled"]};
                `:e.$selected?y`
                color: ${Xs["text-selected"]};

                // this syntax is a workaround for this issue:
                // https://github.com/styled-components/styled-components/issues/3265#issuecomment-1199263511
                &:is(${Rl}:hover *) {
                    color: ${Xs["text-selected-hover"]};
                }
            `:y`
            color: ${Xs.text};

            &:is(${Rl}:hover *) {
                color: ${Xs["text-hover"]};
            }
        `}
`,Nl=b.label`
    ${Qs["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${Zs.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${Zs.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Yl=b.div`
    ${Qs["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Qs["body-md-semibold"]}
    }
`,Ul=b.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,ql=b.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,Xl=b.button`
    color: ${e=>e.$disabled?Xs["text-disabled"]:Xs["text-error"]};
    white-space: nowrap;
    ${Qs["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Jl=b.button`
    color: ${e=>e.disabled?Xs["text-disabled"]:Xs["text-primary"]};
    ${Qs["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Xs.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Ql=b.div`
    width: 100%;
    color: ${e=>e.$disabled?Xs["text-disabled"]:Xs["text-error"]};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Zl=b((r=>{var{type:n,className:i,children:a,actionLink:s,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:h,maxCollapsedHeight:m}=r,g=I(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,p]=o(!1),[b,y]=o(!1),{height:v,ref:F}=kn();u((()=>{x()}),[m,v]);const x=()=>{p(!m),y(w())},w=()=>!!m&&v>m;return e(Al,Object.assign({className:i,$type:n,$sizeType:d,"data-testid":g["data-testid"]},{children:[c&&t(Ol,Object.assign({$sizeType:d,$type:n},{children:(()=>{if(n&&h)return h;switch(n){case"success":return t(k,{});case"warning":return t(E,{});case"error":return t(B,{});case"info":case"description":return t(C,{});default:return null}})()})),e(_l,{children:[e(zl,Object.assign({$maxCollapsedHeight:w()?m:void 0,$showMore:f,$hasActionLink:!!s},{children:[t("div",Object.assign({ref:F},{children:a})),s&&e(Ml,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d},s,{children:[s.children,l||t(S,{})]}))]})),b&&e(Hl,Object.assign({$sizeType:d,$type:n,type:"button",onClick:()=>p(!f)},{children:["Show ",f?"less":"more",t(Tl,{$expanded:f})]}))]})]}))}))`
    width: 100%;
    user-select: none;
`,Gl=b.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Xs.bg};
    ${Sl({textSize:"body-md"})}

    ${e=>e.$disabled?y`
                color: ${Xs["text-disabled"]};
            `:e.$selected?y`
                color: ${Xs["text-selected"]};
            `:y`
                color: ${Xs.text};
            `}
`,Kl=b(Cl.BodyMD)`
    color: ${e=>e.$disabled?Xs["text-disabled"]:Xs["text-error"]};
`,ed=b(Ll)`
    color: ${e=>e.$disabled?Xs["text-disabled"]:Xs["text-error"]};
`,td=b((({type:e,active:r=!1,disabled:n,className:i})=>{let a;switch(e){case"checkbox":a=t(r?H:z,{});break;case"radio":a=t(r?M:O,{});break;case"tick":a=t(T,{});break;case"cross":a=t(_,{});break;default:a=null}return t(Il,Object.assign({className:i,$active:r,$disabled:n},{children:a}))}))`
    ${e=>e.$disabled?e.$selected?y`
                    color: ${Xs["icon-selected-disabled"]};
                `:y`
                    color: ${Xs["icon-disabled-subtle"]};
                `:e.$selected?y`
                color: ${Xs["icon-selected"]};

                &:is(${Rl}:hover *) {
                    color: ${Xs["icon-selected-hover"]};
                }
            `:y`
            color: ${Xs["icon-subtle"]};

            &:is(${Rl}:hover *) {
                color: ${Xs["icon-hover"]};
            }
        `};
`,rd=b.button`
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
                background-color: ${rr[7]};
            `}
    }
`,nd=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=I(e,["children","focusHighlight","focusOutline","type"]);return t(rd,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),id=b(cs.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${rr[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${nl.mobileS} {
        max-width: 100%;
    }
`,ad=b.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,od=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${nl.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,sd=b.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${nl.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,ld=b.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${nl.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,dd=b.div`
    display: flex;
    gap: 0.5rem;

    ${nl.tablet} {
        flex-direction: column;
    }

    ${nl.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,cd=b.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${nl.mobileS} {
        width: 6rem;
    }
`,ud=b(nd)`
    width: 5rem;
    padding: 1rem 0;
    color: ${rr[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Kt};
    }
`,hd=b(wr.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${nl.tablet} {
        margin: 0;
    }

    ${nl.mobileS} {
        margin: 0 0.25rem;
    }
`,md=b(_r)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${rr[5]};
    background: ${rr[8]};

    :focus,
    :active {
        border: 1px solid ${tr.Light[1]};
        box-shadow: inset 0 0 5px 1px ${ir.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${nl.mobileS} {
        width: 100%;
    }
`,gd=b((({type:n="checkbox",indicator:i,checked:s,styleType:l="default",children:d,childrenMaxLines:c,subLabel:h,disabled:m,error:g,name:f,id:b,className:y,compositeSection:v,removable:F,onRemove:$,"data-testid":D,onChange:S,useContentWidth:B})=>{const{collapsible:E=!0,errors:C,children:k,initialExpanded:A}=v||{},[O,M]=o(s),[_,z]=o(A),H=p((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[T]=o($l.generate()),I=b?`${b}`:`tg-${T}`,P=a();u((()=>{M(s)}),[s]),u((()=>{O&&z(null==A||A)}),[O]);const j=e=>{if(!m){if(S)return void S(e);switch(n){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":O||M(!0)}}},L=()=>{m||z(!_)},R=()=>{m||!$||$()},W=()=>{let e;switch(n){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=n}return t(td,{type:e,active:O,disabled:m,$selected:O,$disabled:m})},V=()=>{if(!h)return null;let e;return e="function"==typeof h?h():h,t(Yl,Object.assign({"data-id":"toggle-sublabel"},{children:e}))},N=()=>{const r=!_&&!H;return E&&e(Jl,Object.assign({$paddingTopRequired:r,disabled:m,onClick:L,"data-testid":_?"collapse-button":"expand-button"},{children:[_?"Show less":"Show more",t(_?w:x,{"aria-hidden":!0})]}))},Y=n=>e(r,{children:[t(Kl,Object.assign({weight:"semibold",$disabled:m},{children:"Error"})),t(ed,Object.assign({$disabled:m},{children:null==n?void 0:n.map(((e,r)=>t("li",Object.assign({id:`${I}-error-list-item-${r}`},{children:t(Kl,Object.assign({weight:"semibold",$disabled:m},{children:e}))}),r)))}))]});return e(Rl,Object.assign({$selected:O,$disabled:m,className:y,$styleType:l,$error:g,$indicator:i,$useContentWidth:B,id:b,"data-testid":D},{children:[e(Ul,Object.assign({id:`${I}-header-container`,$disabled:m,$error:g,$selected:O,$indicator:i,$styleType:l},{children:[e(ql,Object.assign({$addPadding:F},{children:[t(Wl,{ref:P,name:f,id:`${I}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:m,onChange:j,checked:O}),i&&W(),e(Vl,Object.assign({$selected:O,$disabled:m},{children:[t(Nl,Object.assign({htmlFor:`${I}-input`,"data-testid":`${I}-toggle-label`,$maxLines:c},{children:d})),h&&V()]}))]})),F&&t(Xl,Object.assign({type:"button",$disabled:m,onClick:R,id:`${I}-remove-button`},{children:"Remove"}))]})),k&&e("div",{children:[(!E||_)&&t(Gl,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:m},{children:k})),E&&!_&&H&&t(Ql,Object.assign({$disabled:m,onClick:L,id:`${I}-error-alert`},{children:t(Zl,Object.assign({type:m?"description":"error",className:y,showIcon:!0},{children:Array.isArray(C)?Y(C):C}))})),N()]})]}))}))`
    min-width: 5rem;
    flex: 1;
`,fd=b(el.Small)`
    width: 7rem;

    ${nl.mobileL} {
        flex: 1;
    }

    ${nl.mobileS} {
        width: 100%;
    }
`;var pd,bd,yd;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(pd||(pd={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(bd||(bd={})),function(e){e.AM="am",e.PM="pm"}(yd||(yd={}));const vd=({id:r,value:n,show:i,format:s,onChange:l,onCancel:d})=>{const c=ms.getTimeValues(s,n),[h,m]=o(c.hour),[f,p]=o(c.minute),[b,y]=o(c.period),v=a(),F=a(),$=kn();u((()=>{if(i&&v.current&&v.current.focus(),i){const{hour:e,minute:t,period:r}=ms.getTimeValues(s,n);m(e),p(t),y(r)}}),[i,n,s]),u((()=>{const e=v.current,t=F.current;return e&&e.addEventListener("keydown",D),t&&t.addEventListener("keydown",D),()=>{e&&e.removeEventListener("keydown",D),t&&t.removeEventListener("keydown",D)}}),[]);const D=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=g((e=>{switch(e.currentTarget.name){case pd.MINUTE_UP:p(ms.updateMinutes(f,"add"));break;case pd.MINUTE_DOWN:p(ms.updateMinutes(f,"minus"));break;case pd.HOUR_UP:m(ms.updateHours(h,"add"));break;case pd.HOUR_DOWN:m(ms.updateHours(h,"minus"))}}),[h,f]),B=e=>{e.target.select()},E=e=>{const t=e.target.value;switch(e.target.name){case bd.HOUR:t.length<=2&&m(t);break;case bd.MINUTE:t.length<=2&&p(t)}},C=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case bd.HOUR:{const r=t>23||t<0?c.hour:ms.convertHourTo12HourFormat(e.target.value);m(r);break}case bd.MINUTE:{const r=t>59||t<0?c.minute:e.target.value;p(ls.padValue(r));break}}},k=e=>{switch(e.target.name){case yd.AM:y(hs.AM);break;case yd.PM:y(hs.PM)}},A=e=>r?`${r}-${e}`:e,O=Yo({height:i?$.height+32:0});return t(id,Object.assign({"data-testid":"animated-dropdown-wrapper",style:O},{children:e(ad,Object.assign({ref:$.ref,"data-testid":A("timepicker-dropdown"),inert:i?void 0:""},{children:[e(od,{children:[e(ld,{children:[e(cd,{children:[t(ud,Object.assign({"aria-label":"increase hour",name:pd.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":A("hour-increment-button")},{children:t(w,{})})),t(md,{"aria-label":"hour",type:"number",name:bd.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onFocus:B,onChange:E,onBlur:C,min:1,max:12,placeholder:"HH","data-testid":A("hour-input")}),t(ud,Object.assign({"aria-label":"decrease hour",name:pd.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":A("hour-decrement-button")},{children:t(x,{})}))]}),t(hd,{children:":"}),e(cd,{children:[t(ud,Object.assign({"aria-label":"increase minute",name:pd.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":A("minute-increment-button")},{children:t(w,{})})),t(md,{"aria-label":"minute",type:"number",name:bd.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:F,value:f,onChange:E,onBlur:C,onFocus:B,min:0,max:59,placeholder:"MM","data-testid":A("minute-input")}),t(ud,Object.assign({"aria-label":"decrease minute",name:pd.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":A("minute-decrement-button")},{children:t(x,{})}))]})]}),e(dd,{children:[t(gd,Object.assign({checked:b===hs.AM,name:yd.AM,type:"radio",onChange:k,"data-testid":A("am-toggle"),"aria-label":"AM"},{children:"AM"})),t(gd,Object.assign({checked:b===hs.PM,name:yd.PM,type:"radio",onChange:k,"data-testid":A("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e(sd,{children:[t(fd,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":A("cancel-button")},{children:"Cancel"})),t(fd,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===s?ms.convertTo24HourFormat({hour:h,minute:f,period:b}):`${h}:${f}${b}`,l(e)},disabled:""===h||""===f,"data-testid":A("confirm-button")},{children:"Done"}))]})]}))}))};b.div`
    position: relative;
`;const Fd=b(_r)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,xd=r=>{var{id:n,disabled:i=!1,readOnly:s=!1,error:l,value:d,placeholder:c,format:u="24hr",onChange:h,onFocus:m,onBlur:f}=r,p=I(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,y]=o(!1),v=a();Dl("mousedown",(function(e){i||s||w(e)}),"document"),Dl("keyup",(function(e){if("Tab"===e.code)w(e)}),"document");const F=()=>{i||s||b||(y(!0),m&&m())};const x=()=>{y(!1),f&&f()},w=e=>{v&&!v.current.contains(e.target)&&b&&x()},$=g((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return e(Mr,Object.assign({ref:v,id:n,$readOnly:s,$disabled:i,$error:l},p,{children:[t(Fd,{onFocus:F,focused:b,readOnly:!0,placeholder:c||$(),value:ms.formatDisplayValue(d,u),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),t(vd,{id:n,show:b,value:d,format:u,onCancel:()=>{x()},onChange:e=>{h&&h(e),x()}})]}))};export{xd as Timepicker};
//# sourceMappingURL=index.js.map
