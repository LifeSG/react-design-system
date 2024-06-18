import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import r,{useRef as a,useImperativeHandle as i}from"react";import o,{css as s}from"styled-components";import{ExternalIcon as l}from"@lifesg/react-icons/external";import{CrossIcon as c}from"@lifesg/react-icons/cross";function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f=Array.isArray,g="object"==typeof d&&d&&d.Object===Object&&d,p="object"==typeof self&&self&&self.Object===Object&&self,m=g||p||Function("return this")(),F=m.Symbol,y=F,v=Object.prototype,D=v.hasOwnProperty,B=v.toString,S=y?y.toStringTag:void 0;var $=function(e){var t=D.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var a=B.call(e);return r&&(t?e[S]=n:delete e[S]),a},b=Object.prototype.toString;var x=$,w=function(e){return b.call(e)},E=F?F.toStringTag:void 0;var H=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?x(e):w(e)};var M=H,O=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==M(e)},A=f,C=k,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var Y=function(e,t){if(A(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(T.test(e)||!_.test(e)||null!=t&&e in Object(t))};var z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W=H,L=z;var I,R=function(e){if(!L(e))return!1;var t=W(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},j=m["__core-js_shared__"],P=(I=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var V=function(e){return!!P&&P in e},N=Function.prototype.toString;var Z=R,G=V,U=z,X=function(e){if(null!=e){try{return N.call(e)}catch(e){}try{return e+""}catch(e){}}return""},J=/^\[object .+?Constructor\]$/,q=Function.prototype,Q=Object.prototype,K=q.toString,ee=Q.hasOwnProperty,te=RegExp("^"+K.call(ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ne=function(e){return!(!U(e)||G(e))&&(Z(e)?te:J).test(X(e))},re=function(e,t){return null==e?void 0:e[t]};var ae=function(e,t){var n=re(e,t);return ne(n)?n:void 0},ie=ae(Object,"create"),oe=ie;var se=function(){this.__data__=oe?oe(null):{},this.size=0};var le=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ce=ie,ue=Object.prototype.hasOwnProperty;var de=function(e){var t=this.__data__;if(ce){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ue.call(t,e)?t[e]:void 0},he=ie,fe=Object.prototype.hasOwnProperty;var ge=ie;var pe=se,me=le,Fe=de,ye=function(e){var t=this.__data__;return he?void 0!==t[e]:fe.call(t,e)},ve=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function De(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}De.prototype.clear=pe,De.prototype.delete=me,De.prototype.get=Fe,De.prototype.has=ye,De.prototype.set=ve;var Be=De;var Se=function(){this.__data__=[],this.size=0};var $e=function(e,t){return e===t||e!=e&&t!=t};var be=function(e,t){for(var n=e.length;n--;)if($e(e[n][0],t))return n;return-1},xe=be,we=Array.prototype.splice;var Ee=be;var He=be;var Me=be;var Oe=Se,ke=function(e){var t=this.__data__,n=xe(t,e);return!(n<0)&&(n==t.length-1?t.pop():we.call(t,n,1),--this.size,!0)},Ae=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return He(this.__data__,e)>-1},_e=function(e,t){var n=this.__data__,r=Me(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Te(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Te.prototype.clear=Oe,Te.prototype.delete=ke,Te.prototype.get=Ae,Te.prototype.has=Ce,Te.prototype.set=_e;var Ye=Te,ze=ae(m,"Map"),We=Be,Le=Ye,Ie=ze;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var je=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},Pe=je;var Ve=je;var Ne=je;var Ze=je;var Ge=function(){this.size=0,this.__data__={hash:new We,map:new(Ie||Le),string:new We}},Ue=function(e){var t=Pe(this,e).delete(e);return this.size-=t?1:0,t},Xe=function(e){return Ve(this,e).get(e)},Je=function(e){return Ne(this,e).has(e)},qe=function(e,t){var n=Ze(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qe.prototype.clear=Ge,Qe.prototype.delete=Ue,Qe.prototype.get=Xe,Qe.prototype.has=Je,Qe.prototype.set=qe;var Ke=Qe;function et(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(et.Cache||Ke),n}et.Cache=Ke;var tt=et;var nt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rt=/\\(\\)?/g,at=function(e){var t=tt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(nt,(function(e,n,r,a){t.push(r?a.replace(rt,"$1"):n||e)})),t}));var it=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},ot=f,st=k,lt=F?F.prototype:void 0,ct=lt?lt.toString:void 0;var ut=function e(t){if("string"==typeof t)return t;if(ot(t))return it(t,e)+"";if(st(t))return ct?ct.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},dt=ut;var ht=f,ft=Y,gt=at,pt=function(e){return null==e?"":dt(e)};var mt=k;var Ft=function(e,t){return ht(e)?e:ft(e,t)?[e]:gt(pt(e))},yt=function(e){if("string"==typeof e||mt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var vt=function(e,t){for(var n=0,r=(t=Ft(t,e)).length;null!=e&&n<r;)e=e[yt(t[n++])];return n&&n==r?e:void 0};var Dt=h((function(e,t,n){var r=null==e?void 0:vt(e,t);return void 0===r?n:r}));const Bt=(e,t,n)=>t?Dt(n,t)||Dt(e,t):n||e,St=(e,t)=>{const n=t||e.defaultValue;return Dt(e.collections,n)};var $t;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}($t||($t={}));const bt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},xt=e=>t=>{const n=t.theme,r=St(bt,n[$t.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},wt=(xt("Brand.1"),xt("Brand.2"),xt("Brand.3"),xt("Brand.4"),xt("Brand.5"),xt("Brand.6"),xt("Primary")),Et=(xt("PrimaryDark"),xt("Secondary")),Ht={Light:{1:xt("Accent.Light.1"),2:xt("Accent.Light.2"),3:xt("Accent.Light.3"),4:xt("Accent.Light.4"),5:xt("Accent.Light.5"),6:xt("Accent.Light.6")},Dark:{1:xt("Accent.Dark.1"),2:xt("Accent.Dark.2"),3:xt("Accent.Dark.3")}},Mt={1:xt("Neutral.1"),2:xt("Neutral.2"),3:xt("Neutral.3"),4:xt("Neutral.4"),5:xt("Neutral.5"),6:xt("Neutral.6"),7:xt("Neutral.7"),8:xt("Neutral.8")},Ot={Green:{Text:xt("Validation.Green.Text"),Icon:xt("Validation.Green.Icon"),Border:xt("Validation.Green.Border"),Background:xt("Validation.Green.Background")},Orange:{Text:xt("Validation.Orange.Text"),Icon:xt("Validation.Orange.Icon"),Border:xt("Validation.Orange.Border"),Background:xt("Validation.Orange.Background"),Badge:xt("Validation.Orange.Badge")},Red:{Text:xt("Validation.Red.Text"),Icon:xt("Validation.Red.Icon"),Border:xt("Validation.Red.Border"),Background:xt("Validation.Red.Background")},Blue:{Text:xt("Validation.Blue.Text"),Icon:xt("Validation.Blue.Icon"),Border:xt("Validation.Blue.Border"),Background:xt("Validation.Blue.Background")}},kt={Accent:xt("Shadow.Accent"),Red:xt("Shadow.Red"),Elevation:xt("Shadow.Elevation")},At={collections:{base:{InputBoxShadow:s`
        inset 0 0 4px 0px ${kt.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 4px 0px ${kt.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${kt.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:s`
        inset 0 0 3px 0px ${kt.Accent}
    `,InputErrorBoxShadow:s`
        inset 0 0 3px 0px ${kt.Red}
    `,ElevationBoxShadow:s`
      0px 2px 8px ${kt.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ct=e=>t=>{var n;const r=t.theme,a=St(At,r[$t.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Bt(a,e,r.options.designToken):Bt(a,e)},_t=Ct("InputBoxShadow"),Tt=Ct("InputErrorBoxShadow"),Yt=(Ct("ElevationBoxShadow"),Ct("Table.Header"),Ct("Table.Cell.Primary"),Ct("Table.Cell.Secondary"),Ct("Table.Cell.Selected"),Ct("Table.Cell.Hover"),Ct("Button.Danger.BackgroundColor"),Ct("Button.Danger.Hover"),Ct("Button.Danger.Primary"),Ct("Button.Danger.Border"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),zt={collections:{base:{D1:{fontFamily:Yt.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Yt.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Yt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Yt.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Yt.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Yt.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Yt.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Yt.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Yt.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Yt.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Yt.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Yt.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Yt.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Wt=e=>t=>{const n=t.theme,r=St(zt,n[$t.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},Lt={D1:{fontFamily:Wt("D1.fontFamily"),fontSize:Wt("D1.fontSize"),fontWeight:Wt("D1.fontWeight"),lineHeight:Wt("D1.lineHeight"),letterSpacing:Wt("D1.letterSpacing")},D2:{fontFamily:Wt("D2.fontFamily"),fontSize:Wt("D2.fontSize"),fontWeight:Wt("D2.fontWeight"),lineHeight:Wt("D2.lineHeight"),letterSpacing:Wt("D2.letterSpacing")},D3:{fontFamily:Wt("D3.fontFamily"),fontSize:Wt("D3.fontSize"),fontWeight:Wt("D3.fontWeight"),lineHeight:Wt("D3.lineHeight"),letterSpacing:Wt("D3.letterSpacing")},D4:{fontFamily:Wt("D4.fontFamily"),fontSize:Wt("D4.fontSize"),fontWeight:Wt("D4.fontWeight"),lineHeight:Wt("D4.lineHeight"),letterSpacing:Wt("D4.letterSpacing")},DBody:{fontFamily:Wt("DBody.fontFamily"),fontSize:Wt("DBody.fontSize"),fontWeight:Wt("DBody.fontWeight"),lineHeight:Wt("DBody.lineHeight"),letterSpacing:Wt("DBody.letterSpacing")},H1:{fontFamily:Wt("H1.fontFamily"),fontSize:Wt("H1.fontSize"),fontWeight:Wt("H1.fontWeight"),lineHeight:Wt("H1.lineHeight"),letterSpacing:Wt("H1.letterSpacing")},H2:{fontFamily:Wt("H2.fontFamily"),fontSize:Wt("H2.fontSize"),fontWeight:Wt("H2.fontWeight"),lineHeight:Wt("H2.lineHeight"),letterSpacing:Wt("H2.letterSpacing")},H3:{fontFamily:Wt("H3.fontFamily"),fontSize:Wt("H3.fontSize"),fontWeight:Wt("H3.fontWeight"),lineHeight:Wt("H3.lineHeight"),letterSpacing:Wt("H3.letterSpacing")},H4:{fontFamily:Wt("H4.fontFamily"),fontSize:Wt("H4.fontSize"),fontWeight:Wt("H4.fontWeight"),lineHeight:Wt("H4.lineHeight"),letterSpacing:Wt("H4.letterSpacing")},H5:{fontFamily:Wt("H5.fontFamily"),fontSize:Wt("H5.fontSize"),fontWeight:Wt("H5.fontWeight"),lineHeight:Wt("H5.lineHeight"),letterSpacing:Wt("H5.letterSpacing")},H6:{fontFamily:Wt("H6.fontFamily"),fontSize:Wt("H6.fontSize"),fontWeight:Wt("H6.fontWeight"),lineHeight:Wt("H6.lineHeight"),letterSpacing:Wt("H6.letterSpacing")},Body:{fontFamily:Wt("Body.fontFamily"),fontSize:Wt("Body.fontSize"),fontWeight:Wt("Body.fontWeight"),lineHeight:Wt("Body.lineHeight"),letterSpacing:Wt("Body.letterSpacing")},BodySmall:{fontFamily:Wt("BodySmall.fontFamily"),fontSize:Wt("BodySmall.fontSize"),fontWeight:Wt("BodySmall.fontWeight"),lineHeight:Wt("BodySmall.lineHeight"),letterSpacing:Wt("BodySmall.letterSpacing")},XSmall:{fontFamily:Wt("XSmall.fontFamily"),fontSize:Wt("XSmall.fontSize"),fontWeight:Wt("XSmall.fontWeight"),lineHeight:Wt("XSmall.lineHeight"),letterSpacing:Wt("XSmall.letterSpacing")}},It=e=>{switch(e){case 700:case"bold":return Yt.Bold;case 600:case"semibold":return Yt.Semibold;case 300:case"light":return Yt.Light;case 400:case"regular":return Yt.Regular;default:return""}},Rt=(e,t)=>n=>{var r;const a=Lt[e].fontFamily(n),i=Lt[e].fontWeight(n);return Object.values(Yt).includes(a)?s`
                font-family: ${It(t)||It(i)||a};
                font-weight: normal !important;
            `:s`
            font-family: ${a};
            font-weight: ${null!==(r=jt(t)||i)&&void 0!==r?r:"normal"};
        `},jt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Pt=e=>{if(e>0)return s`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Vt=(e,t,n=!1)=>r=>{const a=Lt[e],i=a.fontSize(r);return s`
            ${Rt(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${s`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},Nt=(e=!1,t=!1,n=void 0)=>t?s`
            display: block;
            ${Pt(n)}
        `:e?s`
            display: inline;
        `:s`
            display: block;
            ${Pt(n)}
        `;var Zt;!function(e){e.D1=o.h1`
        ${e=>s`
                ${Vt("D1",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=o.h1`
        ${e=>s`
                ${Vt("D2",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=o.h1`
        ${e=>s`
                ${Vt("D3",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=o.h1`
        ${e=>s`
                ${Vt("D4",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=o.h1`
        ${e=>s`
                ${Vt("DBody",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=o.h1`
        ${e=>s`
                ${Vt("H1",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=o.h2`
        ${e=>s`
                ${Vt("H2",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=o.h3`
        ${e=>s`
                ${Vt("H3",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=o.h4`
        ${e=>s`
                ${Vt("H4",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=o.h5`
        ${e=>s`
                ${Vt("H5",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=o.h6`
        ${e=>s`
                ${Vt("H6",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=o.p`
        ${e=>s`
                ${Vt("Body",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=o.p`
        ${e=>s`
                ${Vt("BodySmall",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=o.span`
        ${e=>s`
                ${Vt("XSmall",e.weight,e.paragraph)}
                color: ${Mt[1]};
                ${Nt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Xt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Zt||(Zt={}));const Gt=o.a`
    ${e=>s`
            ${Vt(e.textStyle,e.weight)}
            color: ${wt};
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
`,Ut=o(l)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xt=n=>{var{external:r=!1,children:a}=n,i=u(n,["external","children"]);return e(Gt,Object.assign({},i,{children:[a,r&&t(Ut,{})]}))};var Jt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Jt||(Jt={}));const qt=o.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Mt[5]};
    border-radius: 4px;
    background: ${Mt[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ht.Light[1]};
        box-shadow: ${_t};
    }

    ${e=>e.$readOnly?s`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?s`
                background: ${Mt[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Mt[5]};
                    box-shadow: none;
                }
            `:e.$error?s`
                border: 1px solid ${Ot.Red.Border};

                :focus-within {
                    border: 1px solid ${Ot.Red.Border};
                    box-shadow: ${Tt};
                }
            `:void 0}
`;o.input`
    ${e=>Vt("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${Mt[1]};
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
        color: ${Mt[3]};
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
`;var Qt={exports:{}};Qt.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[a,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=o||(a||i?1:f.getDate()),p=a||f.getFullYear(),m=0;a&&!i||(m=i>0?i-1:f.getMonth());var F=s||0,y=l||0,v=c||0,D=u||0;return d?new Date(Date.UTC(p,m,g,F,y,v,D+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,F,y,v,D)):new Date(p,m,g,F,y,v,D)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Kt,en,tn=h(Qt.exports),nn={exports:{}},rn=h(nn.exports=(Kt={year:0,month:1,day:2,hour:3,minute:4,second:5},en={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=en[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),en[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=Kt[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,s=a||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),an={exports:{}};an.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},F=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:F,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+F(r,2,"0")+":"+F(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,c),i=n-a<0,o=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:i,s:a,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",D={};D[v]=m;var B="$isDayjsObject",S=function(e){return e instanceof w||!(!e||!e[B])},$=function e(t,n,r){var a;if(!t)return v;if("string"==typeof t){var i=t.toLowerCase();D[i]&&(a=i),n&&(D[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;D[s]=t,a=s}return!r&&a&&(v=a),a||!r&&v},b=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new w(n)},x=y;x.l=$,x.i=S,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[B]=!0}var F=m.prototype;return F.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},F.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},F.$utils=function(){return x},F.isValid=function(){return!(this.$d.toString()===f)},F.isSame=function(e,t){var n=b(e);return this.startOf(t)<=n&&n<=this.endOf(t)},F.isAfter=function(e,t){return b(e)<this.startOf(t)},F.isBefore=function(e,t){return this.endOf(t)<b(e)},F.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(s)},g=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,D=(p<v?p+7:p)-v;return f(r?F-D:F+(6-D),m);case s:case h:return g(y+"Hours",0);case o:return g(y+"Minutes",1);case i:return g(y+"Seconds",2);case a:return g(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(e){return this.startOf(e,!1)},F.$set=function(e,t){var n,l=x.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[i]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},F.set=function(e,t){return this.clone().$set(e,t)},F.get=function(e){return this[x.p(e)]()},F.add=function(r,u){var h,f=this;r=Number(r);var g=x.p(u),p=function(e){var t=b(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[i]=t,h[o]=n,h[a]=e,h)[g]||1,F=this.$d.getTime()+r*m;return x.w(F,this)},F.subtract=function(e,t){return this.add(-1*e,t)},F.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},h=function(e){return x.s(i%12||12,e,"0")},g=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return s+1;case"MM":return x.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return x.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,h,f){var g,p=this,m=x.p(h),F=b(r),y=(F.utcOffset()-this.utcOffset())*t,v=this-F,D=function(){return x.m(p,F)};switch(m){case d:g=D()/12;break;case c:g=D();break;case u:g=D()/3;break;case l:g=(v-y)/6048e5;break;case s:g=(v-y)/864e5;break;case o:g=v/n;break;case i:g=v/t;break;case a:g=v/e;break;default:g=v}return f?g:x.a(g)},F.daysInMonth=function(){return this.endOf(c).$D},F.$locale=function(){return D[this.$L]},F.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},F.clone=function(){return x.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),E=w.prototype;return b.prototype=E,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e.$i||(e(t,w,b),e.$i=!0),b},b.locale=$,b.isDayjs=S,b.unix=function(e){return b(1e3*e)},b.en=D[v],b.Ls=D,b.p={},b}();var on=h(an.exports),sn={exports:{}};sn.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var ln=h(sn.exports),cn={exports:{}};cn.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var un=h(cn.exports),dn={exports:{}};dn.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var hn,fn=h(dn.exports);on.extend(ln),on.extend(un),on.extend(fn),on.extend(tn),on.extend(rn),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=on(t).startOf("week");return gn(n).map((e=>pn(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return pn(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(on(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+on(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=on(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?on(r):void 0,a?on(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(hn||(hn={}));const gn=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},pn=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},mn=[1,3,5,7,8,10,12],Fn=[4,6,9,11];var yn,vn,Dn,Bn;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":mn.includes(i)?Math.min(a,31).toString():Fn.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=on(e,n);return on(t,n).diff(r,"minute")},e.toDayjs=e=>e?on(e):on(),e.addMinutesToTime=(e,t,n="HH:mm")=>on(e,n).add(t,"minutes").format(n)}(yn||(yn={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!on(e).isBefore(r,"day"))||!(!a||!on(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(on(e).isValid())return e}return""}}(vn||(vn={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Dn||(Dn={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Bn||(Bn={}));const Sn=o.input`
    ${Vt("Body","regular")}
    color: ${Mt[1]};

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
        color: ${Mt[3]};
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
`,$n=o.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Mt[3]};
    background-color: transparent;
    border: none;
`,bn=o(c)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,xn=o.div`
    display: flex;
    width: 100%;
`,wn=r.forwardRef(((r,o)=>{var{value:s,spacing:l,type:c,error:d,disabled:h,readOnly:f,onChange:g,onClear:p,allowClear:m=!1,className:F,styleType:y="bordered"}=r,v=u(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const D=a();i(o,(()=>D.current),[]);const B=function({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,a=t(r),i=r.substring(0,n.selectionEnd),o=t(i),s=i.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:a,updateCaretPosition:()=>{n.value=a,n.setSelectionRange(l,l)}}}}({ref:D,formatter:e=>Bn.transformWithSpaces(e,l)}),S=e=>{g&&(b()?x(e):g(e))},$=()=>{p&&p(),D&&D.current&&D.current.focus()},b=()=>"tel"===c&&l,x=e=>{const{nextValue:t,updateCaretPosition:n}=B(),r=t.replace(/\s/g,"");e.target.value=r,g(e),n()},w=s?(e=>e?b()?Bn.transformWithSpaces(e,l):e:"")(s):s,E=()=>e(n,{children:[t(Sn,Object.assign({"data-testid":"input",ref:D,disabled:h,value:w,onChange:S,type:c,readOnly:f},v)),m&&!h&&!f&&!!s&&t($n,Object.assign({onClick:$,type:"button"},{children:t(bn,{"aria-hidden":!0})}))]});return t(n,{children:"no-border"===y?t(xn,Object.assign({className:F},{children:E()})):t(qt,Object.assign({$disabled:h,$error:d,$readOnly:f,className:F},{children:E()}))})}));export{wn as Input};
//# sourceMappingURL=index.js.map
