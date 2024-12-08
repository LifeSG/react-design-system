import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as a,useImperativeHandle as i}from"react";import o,{css as s}from"styled-components";import{ExternalIcon as l}from"@lifesg/react-icons/external";import{CrossIcon as c}from"@lifesg/react-icons/cross";function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,p="object"==typeof self&&self&&self.Object===Object&&self,m=g||p||Function("return this")(),F=m.Symbol,y=F,S=Object.prototype,B=S.hasOwnProperty,D=S.toString,v=y?y.toStringTag:void 0;var $=function(e){var t=B.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch(e){}var a=D.call(e);return r&&(t?e[v]=n:delete e[v]),a},b=Object.prototype.toString;var x=$,H=function(e){return b.call(e)},E=F?F.toStringTag:void 0;var w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?x(e):H(e)};var O=w,k=function(e){return null!=e&&"object"==typeof e};var M=function(e){return"symbol"==typeof e||k(e)&&"[object Symbol]"==O(e)},A=h,C=M,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var W=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(_.test(e)||!z.test(e)||null!=t&&e in Object(t))};var T=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y=w,L=T;var I,R=function(e){if(!L(e))return!1;var t=Y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=m["__core-js_shared__"],j=(I=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var V=function(e){return!!j&&j in e},N=Function.prototype.toString;var J=R,Z=V,X=T,G=function(e){if(null!=e){try{return N.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,Q=Object.prototype,K=q.toString,ee=Q.hasOwnProperty,te=RegExp("^"+K.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!X(e)||Z(e))&&(J(e)?te:U).test(G(e))},re=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=re(e,t);return ne(n)?n:void 0},ie=ae(Object,"create"),oe=ie;var se=function(){this.__data__=oe?oe(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,ue=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},fe=ie,he=Object.prototype.hasOwnProperty;var ge=ie;var pe=se,me=le,Fe=de,ye=function(e){var t=this.__data__;return fe?void 0!==t[e]:he.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function Be(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Be.prototype.clear=pe,Be.prototype.delete=me,Be.prototype.get=Fe,Be.prototype.has=ye,Be.prototype.set=Se;var De=Be;var ve=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},xe=be,He=Array.prototype.splice;var Ee=be;var we=be;var Oe=be;var ke=ve,Me=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return we(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=Oe(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function _e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_e.prototype.clear=ke,_e.prototype.delete=Me,_e.prototype.get=Ae,_e.prototype.has=Ce,_e.prototype.set=ze;var We=_e,Te=ae(m,"Map"),Ye=De,Le=We,Ie=Te;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Pe=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},je=Pe;var Ve=Pe;var Ne=Pe;var Je=Pe;var Ze=function(){this.size=0,this.__data__={hash:new Ye,map:new(Ie||Le),string:new Ye}},Xe=function(e){var t=je(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Ve(this,e).get(e)},Ue=function(e){return Ne(this,e).has(e)},qe=function(e,t){var n=Je(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Ze,Qe.prototype.delete=Xe,Qe.prototype.get=Ge,Qe.prototype.has=Ue,Qe.prototype.set=qe;var Ke=Qe;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(et.Cache||Ke),n}et.Cache=Ke;var tt=et;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,a){t.push(r?a.replace(rt,"$1"):n||e)})),t}));var it=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},ot=h,st=M,lt=F?F.prototype:void 0,ct=lt?lt.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(ot(t))return it(t,e)+"";if(st(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},dt=ut;var ft=h,ht=W,gt=at,pt=function(e){return null==e?"":dt(e)};var mt=M;var Ft=function(e,t){return ft(e)?e:ht(e,t)?[e]:gt(pt(e))},yt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var Bt=f((function(e,t,n){var r=null==e?void 0:St(e,t);return void 0===r?n:r}));const Dt=(e,t,n)=>t?Bt(n,t)||Bt(e,t):n||e,vt=(e,t)=>{const n=t||e.defaultValue;return Bt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=vt(bt,n[$t.colorScheme]);return n.options&&n.options.color?Dt(r,e,n.options.color):Dt(r,e)},Ht=(xt("Brand.1"),xt("Brand.2"),xt("Brand.3"),xt("Brand.4"),xt("Brand.5"),xt("Brand.6"),xt("Primary")),Et=(xt("PrimaryDark"),xt("Secondary")),wt={Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Ot={1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},kt={Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},Mt={Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")},At={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${Mt.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${Mt.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Mt.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${Mt.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${Mt.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${Mt.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ct=e=>t=>{var n;const r=t.theme,a=vt(At,r[$t.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Dt(a,e,r.options.designToken):Dt(a,e)},zt=Ct("InputBoxShadow"),_t=Ct("InputErrorBoxShadow"),Wt=(Ct("ElevationBoxShadow"),Ct("Table.Header"),Ct("Table.Cell.Primary"),Ct("Table.Cell.Secondary"),Ct("Table.Cell.Selected"),Ct("Table.Cell.Hover"),Ct("Button.Danger.BackgroundColor"),Ct("Button.Danger.Hover"),Ct("Button.Danger.Primary"),Ct("Button.Danger.Border"),{OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"}),Tt={D1:{fontFamily:Wt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Yt={D1:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Lt={collections:{base:Tt,oneservice:{D1:{fontFamily:Wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Wt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Wt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Wt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Yt},defaultValue:"base"},It=e=>t=>{const n=t.theme,r=vt(Lt,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?Dt(r,e,n.options.textStyle):Dt(r,e)},Rt={D1:{fontFamily:It("D1.fontFamily"),fontSize:It("D1.fontSize"),fontWeight:It("D1.fontWeight"),lineHeight:It("D1.lineHeight"),letterSpacing:It("D1.letterSpacing")},D2:{fontFamily:It("D2.fontFamily"),fontSize:It("D2.fontSize"),fontWeight:It("D2.fontWeight"),lineHeight:It("D2.lineHeight"),letterSpacing:It("D2.letterSpacing")},D3:{fontFamily:It("D3.fontFamily"),fontSize:It("D3.fontSize"),fontWeight:It("D3.fontWeight"),lineHeight:It("D3.lineHeight"),letterSpacing:It("D3.letterSpacing")},D4:{fontFamily:It("D4.fontFamily"),fontSize:It("D4.fontSize"),fontWeight:It("D4.fontWeight"),lineHeight:It("D4.lineHeight"),letterSpacing:It("D4.letterSpacing")},DBody:{fontFamily:It("DBody.fontFamily"),fontSize:It("DBody.fontSize"),fontWeight:It("DBody.fontWeight"),lineHeight:It("DBody.lineHeight"),letterSpacing:It("DBody.letterSpacing")},H1:{fontFamily:It("H1.fontFamily"),fontSize:It("H1.fontSize"),fontWeight:It("H1.fontWeight"),lineHeight:It("H1.lineHeight"),letterSpacing:It("H1.letterSpacing")},H2:{fontFamily:It("H2.fontFamily"),fontSize:It("H2.fontSize"),fontWeight:It("H2.fontWeight"),lineHeight:It("H2.lineHeight"),letterSpacing:It("H2.letterSpacing")},H3:{fontFamily:It("H3.fontFamily"),fontSize:It("H3.fontSize"),fontWeight:It("H3.fontWeight"),lineHeight:It("H3.lineHeight"),letterSpacing:It("H3.letterSpacing")},H4:{fontFamily:It("H4.fontFamily"),fontSize:It("H4.fontSize"),fontWeight:It("H4.fontWeight"),lineHeight:It("H4.lineHeight"),letterSpacing:It("H4.letterSpacing")},H5:{fontFamily:It("H5.fontFamily"),fontSize:It("H5.fontSize"),fontWeight:It("H5.fontWeight"),lineHeight:It("H5.lineHeight"),letterSpacing:It("H5.letterSpacing")},H6:{fontFamily:It("H6.fontFamily"),fontSize:It("H6.fontSize"),fontWeight:It("H6.fontWeight"),lineHeight:It("H6.lineHeight"),letterSpacing:It("H6.letterSpacing")},Body:{fontFamily:It("Body.fontFamily"),fontSize:It("Body.fontSize"),fontWeight:It("Body.fontWeight"),lineHeight:It("Body.lineHeight"),letterSpacing:It("Body.letterSpacing")},BodySmall:{fontFamily:It("BodySmall.fontFamily"),fontSize:It("BodySmall.fontSize"),fontWeight:It("BodySmall.fontWeight"),lineHeight:It("BodySmall.lineHeight"),letterSpacing:It("BodySmall.letterSpacing")},XSmall:{fontFamily:It("XSmall.fontFamily"),fontSize:It("XSmall.fontSize"),fontWeight:It("XSmall.fontWeight"),lineHeight:It("XSmall.lineHeight"),letterSpacing:It("XSmall.letterSpacing")}},Pt=[Wt.OpenSans,Wt.PlusJakartaSans],jt=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Vt=(e,t)=>n=>{var r;const a=Rt[e].fontFamily(n),i=Rt[e].fontWeight(n),o=Pt.find((e=>Object.values(e).includes(a)));return o?s`
                font-family: ${jt(o,t)||jt(o,i)||a};
                font-weight: normal !important;
            `:s`
            font-family: ${a};
            font-weight: ${null!==(r=Nt(t)||i)&&void 0!==r?r:"normal"};
        `},Nt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Jt=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Zt=(e,t,n=!1)=>r=>{const a=Rt[e],i=a.fontSize(r);return s`
            ${Vt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Xt=(e=!1,t=!1,n=void 0)=>t?s`
            display: block;
            ${Jt(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Jt(n)}
        `;var Gt;!function(e){e.D1=o.h1`
        ${e=>s`
                ${Zt("D1",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>s`
                ${Zt("D2",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>s`
                ${Zt("D3",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>s`
                ${Zt("D4",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>s`
                ${Zt("DBody",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>s`
                ${Zt("H1",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>s`
                ${Zt("H2",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>s`
                ${Zt("H3",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>s`
                ${Zt("H4",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>s`
                ${Zt("H5",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>s`
                ${Zt("H6",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>s`
                ${Zt("Body",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>s`
                ${Zt("BodySmall",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>s`
                ${Zt("XSmall",e.weight,e.paragraph)}
                color: ${Ot[1]};
                ${Xt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Qt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Gt||(Gt={}));const Ut=o.a`
    ${e=>s`
            ${Zt(e.textStyle,e.weight)}
            color: ${Ht};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Et};

                svg {
                    color: ${Et};
                }
            }
        `}
`,qt=o(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Qt=n=>{var{external:r=!1,children:a}=n,i=u(n,["external","children"]);return e(Ut,Object.assign({},i,{children:[a,r&&t(qt,{})]}))};var Kt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Kt||(Kt={}));const en=s`
    border: 1px solid ${wt.Light[1]};
    box-shadow: ${zt};
`,tn=s`
    border: 1px solid ${wt.Light[1]};
    box-shadow: none;
`,nn=s`
    border: 1px solid ${Ot[5]};
    box-shadow: none;
`,rn=s`
    border: 1px solid ${kt.Red.Border};
    box-shadow: ${_t};
`,an=o.div`
    border: 1px solid ${Ot[5]};
    border-radius: 4px;
    background: ${Ot[8]};

    :focus-within {
        ${en}
    }
    ${e=>e.$focused&&en}

    ${e=>e.$readOnly?s`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${tn}
                }
                ${e.$focused&&tn}
            `:e.$disabled?s`
                background: ${Ot[6]};
                cursor: not-allowed;

                :focus-within {
                    ${nn}
                }
                ${e.$focused&&nn}
            `:e.$error?s`
                border: 1px solid ${kt.Red.Border};

                :focus-within {
                    ${rn}
                }
                ${e.$focused&&rn}
            `:void 0}
`,on=o(an)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;o.input`
    ${e=>Zt("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Ot[1]};
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
        color: ${Ot[3]};
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
        outline: 2px auto ${Ht};
    }
`;var sn={exports:{}};sn.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},F=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:F,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+F(r,2,"0")+":"+F(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:o,m:i,s:a,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},S="en",B={};B[S]=m;var D="$isDayjsObject",v=function(e){return e instanceof H||!(!e||!e[D])},$=function e(t,n,r){var a;if(!t)return S;if("string"==typeof t){var i=t.toLowerCase();B[i]&&(a=i),n&&(B[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;B[s]=t,a=s}return!r&&a&&(S=a),a||!r&&S},b=function(e,t){if(v(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new H(n)},x=y;x.l=$,x.i=v,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var H=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var F=m.prototype;return F.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},F.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},F.$utils=function(){return x},F.isValid=function(){return!(this.$d.toString()===h)},F.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},F.isAfter=function(e,t){return b(e)<this.startOf(t)},F.isBefore=function(e,t){return this.endOf(t)<b(e)},F.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),h=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(s)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var S=this.$locale().weekStart||0,B=(p<S?p+7:p)-S;return h(r?F-B:F+(6-B),m);case s:case f:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case i:return g(y+"Seconds",2);case a:return g(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(e){return this.startOf(e,!1)},F.$set=function(e,t){var n,l=x.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[i]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var p=this.clone().set(f,1);p.$d[h](g),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},F.set=function(e,t){return this.clone().$set(e,t)},F.get=function(e){return this[x.p(e)]()},F.add=function(r,u){var f,h=this;r=Number(r);var g=x.p(u),p=function(e){var t=b(h);return x.w(t.date(t.date()+Math.round(e*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(f={},f[i]=t,f[o]=n,f[a]=e,f)[g]||1,F=this.$d.getTime()+r*m;return x.w(F,this)},F.subtract=function(e,t){return this.add(-1*e,t)},F.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},f=function(e){return x.s(i%12||12,e,"0")},g=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,f,h){var g,p=this,m=x.p(f),F=b(r),y=(F.utcOffset()-this.utcOffset())*t,S=this-F,B=function(){return x.m(p,F)};switch(m){case d:g=B()/12;break;case c:g=B();break;case u:g=B()/3;break;case l:g=(S-y)/6048e5;break;case s:g=(S-y)/864e5;break;case o:g=S/n;break;case i:g=S/t;break;case a:g=S/e;break;default:g=S}return h?g:x.a(g)},F.daysInMonth=function(){return this.endOf(c).$D},F.$locale=function(){return B[this.$L]},F.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},F.clone=function(){return x.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),E=H.prototype;return b.prototype=E,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,H,b),e.$i=!0),b},b.locale=$,b.isDayjs=v,b.unix=function(e){return b(1e3*e)},b.en=B[S],b.Ls=B,b.p={},b}();var ln=f(sn.exports),cn={exports:{}};cn.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],f=u&&u[0],h=u&&u[1];o[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),a=r.year,i=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,g=o||(a||i?1:h.getDate()),p=a||h.getFullYear(),m=0;a&&!i||(m=i>0?i-1:h.getMonth());var F=s||0,y=l||0,S=c||0,B=u||0;return d?new Date(Date.UTC(p,m,g,F,y,S,B+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,F,y,S,B)):new Date(p,m,g,F,y,S,B)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,g=1;g<=h;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else a.call(this,e)}}}();var un=f(cn.exports),dn={exports:{}};dn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var fn=f(dn.exports),hn={exports:{}};hn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var gn=f(hn.exports),pn={exports:{}};pn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var mn,Fn,yn,Sn=f(pn.exports),Bn={exports:{}},Dn=f(Bn.exports=(mn={year:0,month:1,day:2,hour:3,minute:4,second:5},Fn={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=Fn[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Fn[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=mn[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,s=a||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}));ln.extend(fn),ln.extend(Sn),ln.extend(gn),ln.extend(un),ln.extend(Dn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=ln(t).startOf("week");return vn(n).map((e=>$n(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return $n(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(ln(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+ln(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=ln(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?ln(r):void 0,a?ln(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(yn||(yn={}));const vn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},$n=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},bn=[1,3,5,7,8,10,12],xn=[4,6,9,11];var Hn,En,wn,On;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":bn.includes(i)?Math.min(a,31).toString():xn.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=ln(e,n);return ln(t,n).diff(r,"minute")},e.toDayjs=e=>e?ln(e):ln(),e.addMinutesToTime=(e,t,n="HH:mm")=>ln(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>ln(e).isSame(ln(t),n)}(Hn||(Hn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!ln(e).isBefore(r,"day"))||!(!a||!ln(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(ln(e).isValid())return e}return""}}(En||(En={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(wn||(wn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const a=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(On||(On={}));const kn=o.input`
    ${Zt("Body","regular")}
    color: ${Ot[1]};

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
        color: ${Ot[3]};
    }

    ${e=>"number"===e.type?s`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?s`
                cursor: not-allowed;
            `:void 0}
`,Mn=o.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Ot[3]};
    background-color: transparent;
    border: none;
`,An=o(c)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Cn=o.div`
    display: flex;
    width: 100%;
`,zn=r.forwardRef(((r,o)=>{var{value:s,spacing:l,type:c,error:d,disabled:f,readOnly:h,onChange:g,onClear:p,allowClear:m=!1,className:F,styleType:y="bordered"}=r,S=u(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const B=a();i(o,(()=>B.current),[]);const D=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,a=t(r),i=r.substring(0,n.selectionEnd),o=t(i),s=i.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{n.value=a,n.setSelectionRange(l,l)}}}}({ref:B,formatter:e=>On.transformWithSpaces(e,l)}),v=e=>{g&&(b()?x(e):g(e))},$=()=>{p&&p(),B&&B.current&&B.current.focus()},b=()=>"tel"===c&&l,x=e=>{const{nextValue:t,updateCaretPosition:n}=D(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},H=s?(e=>e?b()?On.transformWithSpaces(e,l):e:"")(s):s,E=()=>e(n,{children:[t(kn,Object.assign({"data-testid":"input",ref:B,disabled:f,value:H,onChange:v,type:c,readOnly:h},S)),m&&!f&&!h&&!!s&&t(Mn,Object.assign({onClick:$,type:"button"},{children:t(An,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(Cn,Object.assign({className:F},{children:E()})):t(on,Object.assign({$disabled:f,$error:d,$readOnly:h,className:F},{children:E()}))})}));export{zn as Input};
//# sourceMappingURL=index.js.map
