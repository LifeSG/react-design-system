import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{useRef as a,useImperativeHandle as i}from"react";import o,{css as s}from"styled-components";import{ExternalIcon as l}from"@lifesg/react-icons/external";import{CrossIcon as c}from"@lifesg/react-icons/cross";function u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,p="object"==typeof self&&self&&self.Object===Object&&self,m=g||p||Function("return this")(),F=m.Symbol,y=F,S=Object.prototype,B=S.hasOwnProperty,D=S.toString,v=y?y.toStringTag:void 0;var $=function(t){var e=B.call(t,v),n=t[v];try{t[v]=void 0;var r=!0}catch(t){}var a=D.call(t);return r&&(e?t[v]=n:delete t[v]),a},b=Object.prototype.toString;var x=$,H=function(t){return b.call(t)},w=F?F.toStringTag:void 0;var E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?x(t):H(t)};var O=E,k=function(t){return null!=t&&"object"==typeof t};var M=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==O(t)},A=h,C=M,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var W=function(t,e){if(A(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!C(t))||(_.test(t)||!z.test(t)||null!=e&&t in Object(e))};var T=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},Y=E,V=T;var L,I=function(t){if(!V(t))return!1;var e=Y(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},R=m["__core-js_shared__"],P=(L=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"";var j=function(t){return!!P&&P in t},N=Function.prototype.toString;var J=I,Z=j,X=T,G=function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,Q=Function.prototype,q=Object.prototype,K=Q.toString,tt=q.hasOwnProperty,et=RegExp("^"+K.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nt=function(t){return!(!X(t)||Z(t))&&(J(t)?et:U).test(G(t))},rt=function(t,e){return null==t?void 0:t[e]};var at=function(t,e){var n=rt(t,e);return nt(n)?n:void 0},it=at(Object,"create"),ot=it;var st=function(){this.__data__=ot?ot(null):{},this.size=0};var lt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ct=it,ut=Object.prototype.hasOwnProperty;var dt=function(t){var e=this.__data__;if(ct){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ut.call(e,t)?e[t]:void 0},ft=it,ht=Object.prototype.hasOwnProperty;var gt=it;var pt=st,mt=lt,Ft=dt,yt=function(t){var e=this.__data__;return ft?void 0!==e[t]:ht.call(e,t)},St=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gt&&void 0===e?"__lodash_hash_undefined__":e,this};function Bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Bt.prototype.clear=pt,Bt.prototype.delete=mt,Bt.prototype.get=Ft,Bt.prototype.has=yt,Bt.prototype.set=St;var Dt=Bt;var vt=function(){this.__data__=[],this.size=0};var $t=function(t,e){return t===e||t!=t&&e!=e};var bt=function(t,e){for(var n=t.length;n--;)if($t(t[n][0],e))return n;return-1},xt=bt,Ht=Array.prototype.splice;var wt=bt;var Et=bt;var Ot=bt;var kt=vt,Mt=function(t){var e=this.__data__,n=xt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ht.call(e,n,1),--this.size,!0)},At=function(t){var e=this.__data__,n=wt(e,t);return n<0?void 0:e[n][1]},Ct=function(t){return Et(this.__data__,t)>-1},zt=function(t,e){var n=this.__data__,r=Ot(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function _t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}_t.prototype.clear=kt,_t.prototype.delete=Mt,_t.prototype.get=At,_t.prototype.has=Ct,_t.prototype.set=zt;var Wt=_t,Tt=at(m,"Map"),Yt=Dt,Vt=Wt,Lt=Tt;var It=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Rt=function(t,e){var n=t.__data__;return It(e)?n["string"==typeof e?"string":"hash"]:n.map},Pt=Rt;var jt=Rt;var Nt=Rt;var Jt=Rt;var Zt=function(){this.size=0,this.__data__={hash:new Yt,map:new(Lt||Vt),string:new Yt}},Xt=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},Gt=function(t){return jt(this,t).get(t)},Ut=function(t){return Nt(this,t).has(t)},Qt=function(t,e){var n=Jt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}qt.prototype.clear=Zt,qt.prototype.delete=Xt,qt.prototype.get=Gt,qt.prototype.has=Ut,qt.prototype.set=Qt;var Kt=qt;function te(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(te.Cache||Kt),n}te.Cache=Kt;var ee=te;var ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/\\(\\)?/g,ae=function(t){var e=ee(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ne,(function(t,n,r,a){e.push(r?a.replace(re,"$1"):n||t)})),e}));var ie=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a},oe=h,se=M,le=F?F.prototype:void 0,ce=le?le.toString:void 0;var ue=function t(e){if("string"==typeof e)return e;if(oe(e))return ie(e,t)+"";if(se(e))return ce?ce.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},de=ue;var fe=h,he=W,ge=ae,pe=function(t){return null==t?"":de(t)};var me=M;var Fe=function(t,e){return fe(t)?t:he(t,e)?[t]:ge(pe(t))},ye=function(t){if("string"==typeof t||me(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var Se=function(t,e){for(var n=0,r=(e=Fe(e,t)).length;null!=t&&n<r;)t=t[ye(e[n++])];return n&&n==r?t:void 0};var Be=f((function(t,e,n){var r=null==t?void 0:Se(t,e);return void 0===r?n:r}));const De=(t,e,n)=>e?Be(n,e)||Be(t,e):n||t,ve=(t,e)=>{const n=e||t.defaultValue;return Be(t.collections,n)};var $e;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}($e||($e={}));const be={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xe=t=>e=>{const n=e.theme,r=ve(be,n[$e.colorScheme]);return n.options&&n.options.color?De(r,t,n.options.color):De(r,t)},He=(xe("Brand.1"),xe("Brand.2"),xe("Brand.3"),xe("Brand.4"),xe("Brand.5"),xe("Brand.6"),xe("Primary")),we=(xe("PrimaryDark"),xe("Secondary")),Ee={Light:{1:xe("Accent.Light.1"),2:xe("Accent.Light.2"),3:xe("Accent.Light.3"),4:xe("Accent.Light.4"),5:xe("Accent.Light.5"),6:xe("Accent.Light.6")},Dark:{1:xe("Accent.Dark.1"),2:xe("Accent.Dark.2"),3:xe("Accent.Dark.3")}},Oe={1:xe("Neutral.1"),2:xe("Neutral.2"),3:xe("Neutral.3"),4:xe("Neutral.4"),5:xe("Neutral.5"),6:xe("Neutral.6"),7:xe("Neutral.7"),8:xe("Neutral.8")},ke={Green:{Text:xe("Validation.Green.Text"),Icon:xe("Validation.Green.Icon"),Border:xe("Validation.Green.Border"),Background:xe("Validation.Green.Background")},Orange:{Text:xe("Validation.Orange.Text"),Icon:xe("Validation.Orange.Icon"),Border:xe("Validation.Orange.Border"),Background:xe("Validation.Orange.Background"),Badge:xe("Validation.Orange.Badge")},Red:{Text:xe("Validation.Red.Text"),Icon:xe("Validation.Red.Icon"),Border:xe("Validation.Red.Border"),Background:xe("Validation.Red.Background")},Blue:{Text:xe("Validation.Blue.Text"),Icon:xe("Validation.Blue.Icon"),Border:xe("Validation.Blue.Border"),Background:xe("Validation.Blue.Background")}},Me={Accent:xe("Shadow.Accent"),Red:xe("Shadow.Red"),Elevation:xe("Shadow.Elevation")},Ae={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${Me.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${Me.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Me.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${Me.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${Me.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Me.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ce=t=>e=>{var n;const r=e.theme,a=ve(Ae,r[$e.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?De(a,t,r.options.designToken):De(a,t)},ze=Ce("InputBoxShadow"),_e=Ce("InputErrorBoxShadow"),We=(Ce("ElevationBoxShadow"),Ce("Table.Header"),Ce("Table.Cell.Primary"),Ce("Table.Cell.Secondary"),Ce("Table.Cell.Selected"),Ce("Table.Cell.Hover"),Ce("Button.Danger.BackgroundColor"),Ce("Button.Danger.Hover"),Ce("Button.Danger.Primary"),Ce("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Te={D1:{fontFamily:We.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:We.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:We.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:We.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:We.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:We.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:We.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:We.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:We.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:We.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:We.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:We.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Ye={D1:{fontFamily:We.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:We.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:We.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:We.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:We.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:We.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:We.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:We.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:We.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Ve={collections:{base:Te,oneservice:{D1:{fontFamily:We.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:We.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:We.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:We.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:We.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:We.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:We.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:We.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:We.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:We.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:We.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:We.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:We.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Ye},defaultValue:"base"},Le=t=>e=>{const n=e.theme,r=ve(Ve,n[$e.textStyleScheme]);return n.options&&n.options.textStyle?De(r,t,n.options.textStyle):De(r,t)},Ie={D1:{fontFamily:Le("D1.fontFamily"),fontSize:Le("D1.fontSize"),fontWeight:Le("D1.fontWeight"),lineHeight:Le("D1.lineHeight"),letterSpacing:Le("D1.letterSpacing"),fontVariant:Le("D1.fontVariant")},D2:{fontFamily:Le("D2.fontFamily"),fontSize:Le("D2.fontSize"),fontWeight:Le("D2.fontWeight"),lineHeight:Le("D2.lineHeight"),letterSpacing:Le("D2.letterSpacing"),fontVariant:Le("D2.fontVariant")},D3:{fontFamily:Le("D3.fontFamily"),fontSize:Le("D3.fontSize"),fontWeight:Le("D3.fontWeight"),lineHeight:Le("D3.lineHeight"),letterSpacing:Le("D3.letterSpacing"),fontVariant:Le("D3.fontVariant")},D4:{fontFamily:Le("D4.fontFamily"),fontSize:Le("D4.fontSize"),fontWeight:Le("D4.fontWeight"),lineHeight:Le("D4.lineHeight"),letterSpacing:Le("D4.letterSpacing"),fontVariant:Le("D4.fontVariant")},DBody:{fontFamily:Le("DBody.fontFamily"),fontSize:Le("DBody.fontSize"),fontWeight:Le("DBody.fontWeight"),lineHeight:Le("DBody.lineHeight"),letterSpacing:Le("DBody.letterSpacing"),fontVariant:Le("DBody.fontVariant")},H1:{fontFamily:Le("H1.fontFamily"),fontSize:Le("H1.fontSize"),fontWeight:Le("H1.fontWeight"),lineHeight:Le("H1.lineHeight"),letterSpacing:Le("H1.letterSpacing"),fontVariant:Le("H1.fontVariant")},H2:{fontFamily:Le("H2.fontFamily"),fontSize:Le("H2.fontSize"),fontWeight:Le("H2.fontWeight"),lineHeight:Le("H2.lineHeight"),letterSpacing:Le("H2.letterSpacing"),fontVariant:Le("H2.fontVariant")},H3:{fontFamily:Le("H3.fontFamily"),fontSize:Le("H3.fontSize"),fontWeight:Le("H3.fontWeight"),lineHeight:Le("H3.lineHeight"),letterSpacing:Le("H3.letterSpacing"),fontVariant:Le("H3.fontVariant")},H4:{fontFamily:Le("H4.fontFamily"),fontSize:Le("H4.fontSize"),fontWeight:Le("H4.fontWeight"),lineHeight:Le("H4.lineHeight"),letterSpacing:Le("H4.letterSpacing"),fontVariant:Le("H4.fontVariant")},H5:{fontFamily:Le("H5.fontFamily"),fontSize:Le("H5.fontSize"),fontWeight:Le("H5.fontWeight"),lineHeight:Le("H5.lineHeight"),letterSpacing:Le("H5.letterSpacing"),fontVariant:Le("H5.fontVariant")},H6:{fontFamily:Le("H6.fontFamily"),fontSize:Le("H6.fontSize"),fontWeight:Le("H6.fontWeight"),lineHeight:Le("H6.lineHeight"),letterSpacing:Le("H6.letterSpacing"),fontVariant:Le("H6.fontVariant")},Body:{fontFamily:Le("Body.fontFamily"),fontSize:Le("Body.fontSize"),fontWeight:Le("Body.fontWeight"),lineHeight:Le("Body.lineHeight"),letterSpacing:Le("Body.letterSpacing"),fontVariant:Le("Body.fontVariant")},BodySmall:{fontFamily:Le("BodySmall.fontFamily"),fontSize:Le("BodySmall.fontSize"),fontWeight:Le("BodySmall.fontWeight"),lineHeight:Le("BodySmall.lineHeight"),letterSpacing:Le("BodySmall.letterSpacing"),fontVariant:Le("BodySmall.fontVariant")},XSmall:{fontFamily:Le("XSmall.fontFamily"),fontSize:Le("XSmall.fontSize"),fontWeight:Le("XSmall.fontWeight"),lineHeight:Le("XSmall.lineHeight"),letterSpacing:Le("XSmall.letterSpacing"),fontVariant:Le("XSmall.fontVariant")}},Re=[We.OpenSans,We.PlusJakartaSans],Pe=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},je=(t,e)=>n=>{var r;const a=Ie[t].fontFamily(n),i=Ie[t].fontWeight(n),o=Re.find((t=>Object.values(t).includes(a)));return o?s`
                font-family: ${Pe(o,e)||Pe(o,i)||a};
                font-weight: normal !important;
            `:s`
            font-family: ${a};
            font-weight: ${null!==(r=Ne(e)||i)&&void 0!==r?r:"normal"};
        `},Ne=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Je=t=>{if(t>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Ze=(t,e,n=!1)=>r=>{const a=Ie[t],i=a.fontSize(r);return s`
            ${je(t,e)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            font-variant: ${a.fontVariant(r)||"normal"};
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Xe=(t=!1,e=!1,n=void 0)=>e?s`
            display: block;
            ${Je(n)}
        `:t?s`
            display: inline;
        `:s`
            display: block;
            ${Je(n)}
        `;var Ge;!function(t){t.D1=o.h1`
        ${t=>s`
                ${Ze("D1",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=o.h1`
        ${t=>s`
                ${Ze("D2",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=o.h1`
        ${t=>s`
                ${Ze("D3",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=o.h1`
        ${t=>s`
                ${Ze("D4",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=o.h1`
        ${t=>s`
                ${Ze("DBody",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=o.h1`
        ${t=>s`
                ${Ze("H1",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=o.h2`
        ${t=>s`
                ${Ze("H2",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=o.h3`
        ${t=>s`
                ${Ze("H3",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=o.h4`
        ${t=>s`
                ${Ze("H4",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=o.h5`
        ${t=>s`
                ${Ze("H5",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=o.h6`
        ${t=>s`
                ${Ze("H6",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=o.p`
        ${t=>s`
                ${Ze("Body",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=o.p`
        ${t=>s`
                ${Ze("BodySmall",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=o.span`
        ${t=>s`
                ${Ze("XSmall",t.weight,t.paragraph)}
                color: ${Oe[1]};
                ${Xe(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>qe(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>qe(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Ge||(Ge={}));const Ue=o.a`
    ${t=>s`
            ${Ze(t.textStyle,t.weight)}
            color: ${He};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${we};

                svg {
                    color: ${we};
                }
            }
        `}
`,Qe=o(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,qe=n=>{var{external:r=!1,children:a}=n,i=u(n,["external","children"]);return t(Ue,Object.assign({},i,{children:[a,r&&e(Qe,{})]}))};var Ke;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ke||(Ke={}));const tn=s`
    border: 1px solid ${Ee.Light[1]};
    box-shadow: ${ze};
`,en=s`
    border: 1px solid ${Ee.Light[1]};
    box-shadow: none;
`,nn=s`
    border: 1px solid ${Oe[5]};
    box-shadow: none;
`,rn=s`
    border: 1px solid ${ke.Red.Border};
    box-shadow: ${_e};
`,an=o.div`
    border: 1px solid ${Oe[5]};
    border-radius: 4px;
    background: ${Oe[8]};

    :focus-within {
        ${tn}
    }
    ${t=>t.$focused&&tn}

    ${t=>t.$readOnly?s`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${en}
                }
                ${t.$focused&&en}
            `:t.$disabled?s`
                background: ${Oe[6]};
                cursor: not-allowed;

                :focus-within {
                    ${nn}
                }
                ${t.$focused&&nn}
            `:t.$error?s`
                border: 1px solid ${ke.Red.Border};

                :focus-within {
                    ${rn}
                }
                ${t.$focused&&rn}
            `:void 0}
`,on=o(an)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${t=>"right"===t.$position?"row-reverse":"row"};
`;o.input`
    ${t=>Ze("small"===t.$variant?"BodySmall":"Body","regular")}
    color: ${Oe[1]};
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
        color: ${Oe[3]};
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
`,o.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${He};
    }
`;var sn={exports:{}};sn.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},F=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:F,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+F(r,2,"0")+":"+F(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,c),i=n-a<0,o=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:s,D:f,h:o,m:i,s:a,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",B={};B[S]=m;var D="$isDayjsObject",v=function(t){return t instanceof H||!(!t||!t[D])},$=function t(e,n,r){var a;if(!e)return S;if("string"==typeof e){var i=e.toLowerCase();B[i]&&(a=i),n&&(B[i]=n,a=i);var o=e.split("-");if(!a&&o.length>1)return t(o[0])}else{var s=e.name;B[s]=e,a=s}return!r&&a&&(S=a),a||!r&&S},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new H(n)},x=y;x.l=$,x.i=v,x.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var H=function(){function m(t){this.$L=$(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var F=m.prototype;return F.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},F.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},F.$utils=function(){return x},F.isValid=function(){return!(this.$d.toString()===h)},F.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},F.isAfter=function(t,e){return b(t)<this.startOf(e)},F.isBefore=function(t,e){return this.endOf(e)<b(t)},F.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(t,e){var n=this,r=!!x.u(e)||e,u=x.p(t),h=function(t,e){var a=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?a:a.endOf(s)},g=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var S=this.$locale().weekStart||0,B=(p<S?p+7:p)-S;return h(r?F-B:F+(6-B),m);case s:case f:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case i:return g(y+"Seconds",2);case a:return g(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(t){return this.startOf(t,!1)},F.$set=function(t,e){var n,l=x.p(t),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[i]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===d){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},F.set=function(t,e){return this.clone().$set(t,e)},F.get=function(t){return this[x.p(t)]()},F.add=function(r,u){var f,h=this;r=Number(r);var g=x.p(u),p=function(t){var e=b(h);return x.w(e.date(e.date()+Math.round(t*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(f={},f[i]=e,f[o]=n,f[a]=t,f)[g]||1,F=this.$d.getTime()+r*m;return x.w(F,this)},F.subtract=function(t,e){return this.add(-1*t,e)},F.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},f=function(t){return x.s(i%12||12,t,"0")},g=u||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return a}return null}(t)||a.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,f,h){var g,p=this,m=x.p(f),F=b(r),y=(F.utcOffset()-this.utcOffset())*e,S=this-F,B=function(){return x.m(p,F)};switch(m){case d:g=B()/12;break;case c:g=B();break;case u:g=B()/3;break;case l:g=(S-y)/6048e5;break;case s:g=(S-y)/864e5;break;case o:g=S/n;break;case i:g=S/e;break;case a:g=S/t;break;default:g=S}return h?g:x.a(g)},F.daysInMonth=function(){return this.endOf(c).$D},F.$locale=function(){return B[this.$L]},F.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},F.clone=function(){return x.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),w=H.prototype;return b.prototype=w,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,H,b),t.$i=!0),b},b.locale=$,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=B[S],b.Ls=B,b.p={},b}();var ln=f(sn.exports),cn={exports:{}};cn.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,a=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,r=o.meridiem;if(r){for(var a=1;a<=24;a+=1)if(t.indexOf(r(a,0,e))>-1){n=a>12;break}}else n=t===(e?"pm":"PM");return n},f={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],Q:[n,function(t){this.month=3*(t-1)+1}],S:[n,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[a,l("seconds")],ss:[a,l("seconds")],m:[a,l("minutes")],mm:[a,l("minutes")],H:[a,l("hours")],h:[a,l("hours")],HH:[a,l("hours")],hh:[a,l("hours")],D:[a,l("day")],DD:[r,l("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],w:[a,l("week")],ww:[r,l("week")],M:[a,l("month")],MM:[r,l("month")],MMM:[i,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(t){this.year=s(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(n){var r,a;r=n,a=o&&o.formats;for(var i=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var i=r&&r.toUpperCase();return n||a[r]||t[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=i.length,l=0;l<s;l+=1){var c=i[l],u=f[c],d=u&&u[0],h=u&&u[1];i[l]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var a=i[n];if("string"==typeof a)r+=a.length;else{var o=a.regex,l=a.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,a=r.parse;r.parse=function(t){var e=t.date,r=t.utc,i=t.args;this.$u=r;var s=i[1];if("string"==typeof s){var l=!0===i[2],c=!0===i[3],u=l||c,d=i[2];c&&(d=i[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(t,e,n,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var a=h(e)(t),i=a.year,o=a.month,s=a.day,l=a.hours,c=a.minutes,u=a.seconds,d=a.milliseconds,f=a.zone,g=a.week,p=new Date,m=s||(i||o?1:p.getDate()),F=i||p.getFullYear(),y=0;i&&!o||(y=o>0?o-1:p.getMonth());var S,B=l||0,D=c||0,v=u||0,$=d||0;return f?new Date(Date.UTC(F,y,m,B,D,v,$+60*f.offset*1e3)):n?new Date(Date.UTC(F,y,m,B,D,v,$)):(S=new Date(F,y,m,B,D,v,$),g&&(S=r(S).week(g).toDate()),S)}catch(t){return new Date("")}}(e,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){i[1]=s[g-1];var p=n.apply(this,i);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,t)}}}();var un=f(cn.exports),dn={exports:{}};dn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,a){var i=n(t),o=n(e),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var fn=f(dn.exports),hn={exports:{}};hn.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var gn=f(hn.exports),pn={exports:{}};pn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var mn,Fn,yn,Sn=f(pn.exports),Bn={exports:{}},Dn=f(Bn.exports=(mn={year:0,month:1,day:2,hour:3,minute:4,second:5},Fn={},function(t,e,n){var r,a=function(t,e,n){void 0===n&&(n={});var r=new Date(t),a=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,a=Fn[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Fn[r]=a),a}(e,n);return a.formatToParts(r)},i=function(t,e){for(var r=a(t,e),i=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=mn[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",g=+t;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=r);var a,i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(s))/1e3/60),c=15*-Math.round(o.getTimezoneOffset()/15)-l;if(Number(c)){if(a=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),e){var u=a.utcOffset();a=a.add(i-u,"minute")}}else a=this.utcOffset(0,e);return a.$x.$timezone=t,a},o.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,a){var o=a&&e,s=a||e||r,l=i(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,a=i(r,n);if(e===a)return[r,e];var o=i(r-=60*(a-e)*1e3,n);return a===o?[r,a]:[t-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(t,o).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}));ln.extend(fn),ln.extend(Sn),ln.extend(gn),ln.extend(un),ln.extend(Dn),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=ln(e).startOf("week");return vn(n).map((t=>$n(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return $n(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(ln(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),a=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)a.push(r.add(t,"year"));return a},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+ln(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=ln(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,a)=>{const i=t.isWithinRange(e,r?ln(r):void 0,a?ln(a):void 0),o=n&&n.includes(e.format("YYYY-MM-DD"));return!i||!!o}}(yn||(yn={}));const vn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},$n=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},bn=[1,3,5,7,8,10,12],xn=[4,6,9,11];var Hn,wn,En,On;!function(t){t.clampDay=(e,n,r)=>{const a=parseInt(e),i=parseInt(n),o=parseInt(r);return 0==a?"1":bn.includes(i)?Math.min(a,31).toString():xn.includes(i)?Math.min(a,30).toString():2===i?t.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=ln(t,n);return ln(e,n).diff(r,"minute")},t.toDayjs=t=>t?ln(t):ln(),t.addMinutesToTime=(t,e,n="HH:mm")=>ln(t,n).add(e,"minutes").format(n),t.isSame=(t,e,n="day")=>ln(t).isSame(ln(e),n)}(Hn||(Hn={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:a}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!ln(t).isBefore(r,"day"))||!(!a||!ln(t).isAfter(a,"day")))},t.sanitizeInput=t=>{if(t){if(ln(t).isValid())return t}return""}}(wn||(wn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(En||(En={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,a=8)=>{let i=0;e>n&&(i=Math.floor((e-n)/a));const o=r+i;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.truncateTwoLines=(t,e,n,r=1.2)=>{const a=Math.floor(2*e/(.6*n))*(2/r);if(t.length<=a)return t;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${t.substring(0,i)}...${t.substring(t.length-o)}`},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width},t.maskValue=(t,n)=>{if(!t)return t;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(t);if(o)return t.replace(o,i);if(r){const{startIndex:n,endIndex:a}=e(r[0],r[1]);return t.substring(0,n)+i.repeat(t.substring(n,a+1).length)+t.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=e(a[0],a[1]);return i.repeat(t.substring(0,n).length)+t.substring(n,r+1)+i.repeat(t.substring(r+1).length)}return t};const e=(t,e)=>t<e?{startIndex:t,endIndex:e}:{startIndex:e,endIndex:t}}(On||(On={}));const kn=o.input`
    ${Ze("Body","regular")}
    color: ${Oe[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Oe[3]};
    }

    ${t=>"number"===t.type?s`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:t.disabled?s`
                cursor: not-allowed;
            `:void 0}
`,Mn=o.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Oe[3]};
    background-color: transparent;
    border: none;
`,An=o(c)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Cn=o.div`
    display: flex;
    width: 100%;
`,zn=r.forwardRef(((r,o)=>{var{value:s,spacing:l,type:c,error:d,disabled:f,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:F,styleType:y="bordered"}=r,S=u(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const B=a();i(o,(()=>B.current),[]);const D=function({ref:t,formatter:e}){return()=>{const n=t.current,r=n.value,a=e(r),i=r.substring(0,n.selectionEnd),o=e(i),s=i.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{n.value=a,n.setSelectionRange(l,l)}}}}({ref:B,formatter:t=>On.transformWithSpaces(t,l)}),v=t=>{g&&(b()?x(t):g(t))},$=()=>{p&&p(),B&&B.current&&B.current.focus()},b=()=>"tel"===c&&l,x=t=>{const{nextValue:e,updateCaretPosition:n}=D(),r=e.replace(/\s/g,"");t.target.value=r,g(t),n()},H=s?(t=>t?b()?On.transformWithSpaces(t,l):t:"")(s):s,w=()=>t(n,{children:[e(kn,Object.assign({"data-testid":"input",ref:B,disabled:f,value:H,onChange:v,type:c,readOnly:h},S)),m&&!f&&!h&&!!s&&e(Mn,Object.assign({onClick:$,type:"button"},{children:e(An,{"aria-hidden":!0})}))]});return e(n,{children:"no-border"===y?e(Cn,Object.assign({className:F},{children:w()})):e(on,Object.assign({$disabled:f,$error:d,$readOnly:h,className:F},{children:w()}))})}));export{zn as Input};
//# sourceMappingURL=index.js.map
