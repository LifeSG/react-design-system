import{jsxs as e,jsx as t}from"react/jsx-runtime";import{ExternalIcon as n}from"@lifesg/react-icons/external";import r,{css as i}from"styled-components";function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c=Array.isArray,g="object"==typeof a&&a&&a.Object===Object&&a,F="object"==typeof self&&self&&self.Object===Object&&self,h=g||F||Function("return this")(),f=h.Symbol,d=f,u=Object.prototype,p=u.hasOwnProperty,B=u.toString,s=d?d.toStringTag:void 0;var y=function(e){var t=p.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var i=B.call(e);return r&&(t?e[s]=n:delete e[s]),i},m=Object.prototype.toString;var S=y,D=function(e){return m.call(e)},E=f?f.toStringTag:void 0;var v=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?S(e):D(e)};var H=v,b=function(e){return null!=e&&"object"==typeof e};var A=function(e){return"symbol"==typeof e||b(e)&&"[object Symbol]"==H(e)},$=c,C=A,_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var x=function(e,t){if($(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!C(e))||(z.test(e)||!_.test(e)||null!=t&&e in Object(t))};var k=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},w=v,O=k;var W,j=function(e){if(!O(e))return!1;var t=w(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=h["__core-js_shared__"],I=(W=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"";var L=function(e){return!!I&&I in e},R=Function.prototype.toString;var V=j,P=L,N=k,G=function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""},X=/^\[object .+?Constructor\]$/,M=Function.prototype,U=Object.prototype,q=M.toString,J=U.hasOwnProperty,K=RegExp("^"+q.call(J).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(e){return!(!N(e)||P(e))&&(V(e)?K:X).test(G(e))},Y=function(e,t){return null==e?void 0:e[t]};var Z=function(e,t){var n=Y(e,t);return Q(n)?n:void 0},ee=Z(Object,"create"),te=ee;var ne=function(){this.__data__=te?te(null):{},this.size=0};var re=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ie=ee,oe=Object.prototype.hasOwnProperty;var ae=function(e){var t=this.__data__;if(ie){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return oe.call(t,e)?t[e]:void 0},le=ee,ce=Object.prototype.hasOwnProperty;var ge=ee;var Fe=ne,he=re,fe=ae,de=function(e){var t=this.__data__;return le?void 0!==t[e]:ce.call(t,e)},ue=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=ge&&void 0===t?"__lodash_hash_undefined__":t,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=Fe,pe.prototype.delete=he,pe.prototype.get=fe,pe.prototype.has=de,pe.prototype.set=ue;var Be=pe;var se=function(){this.__data__=[],this.size=0};var ye=function(e,t){return e===t||e!=e&&t!=t};var me=function(e,t){for(var n=e.length;n--;)if(ye(e[n][0],t))return n;return-1},Se=me,De=Array.prototype.splice;var Ee=me;var ve=me;var He=me;var be=se,Ae=function(e){var t=this.__data__,n=Se(t,e);return!(n<0)&&(n==t.length-1?t.pop():De.call(t,n,1),--this.size,!0)},$e=function(e){var t=this.__data__,n=Ee(t,e);return n<0?void 0:t[n][1]},Ce=function(e){return ve(this.__data__,e)>-1},_e=function(e,t){var n=this.__data__,r=He(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ze(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ze.prototype.clear=be,ze.prototype.delete=Ae,ze.prototype.get=$e,ze.prototype.has=Ce,ze.prototype.set=_e;var xe=ze,ke=Z(h,"Map"),we=Be,Oe=xe,We=ke;var je=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var n=e.__data__;return je(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Te;var Le=Te;var Re=Te;var Ve=Te;var Pe=function(){this.size=0,this.__data__={hash:new we,map:new(We||Oe),string:new we}},Ne=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Ge=function(e){return Le(this,e).get(e)},Xe=function(e){return Re(this,e).has(e)},Me=function(e,t){var n=Ve(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Pe,Ue.prototype.delete=Ne,Ue.prototype.get=Ge,Ue.prototype.has=Xe,Ue.prototype.set=Me;var qe=Ue;function Je(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Je.Cache||qe),n}Je.Cache=qe;var Ke=Je;var Qe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,Ze=function(e){var t=Ke(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Qe,(function(e,n,r,i){t.push(r?i.replace(Ye,"$1"):n||e)})),t}));var et=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},tt=c,nt=A,rt=f?f.prototype:void 0,it=rt?rt.toString:void 0;var ot=function e(t){if("string"==typeof t)return t;if(tt(t))return et(t,e)+"";if(nt(t))return it?it.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},at=ot;var lt=c,ct=x,gt=Ze,Ft=function(e){return null==e?"":at(e)};var ht=A;var ft=function(e,t){return lt(e)?e:ct(e,t)?[e]:gt(Ft(e))},dt=function(e){if("string"==typeof e||ht(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var ut=function(e,t){for(var n=0,r=(t=ft(t,e)).length;null!=e&&n<r;)e=e[dt(t[n++])];return n&&n==r?e:void 0};var pt=l((function(e,t,n){var r=null==e?void 0:ut(e,t);return void 0===r?n:r}));const Bt=(e,t,n)=>t?pt(n,t)||pt(e,t):n||e,st=(e,t)=>{const n=t||e.defaultValue;return pt(e.collections,n)};var yt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(yt||(yt={}));const mt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},St=e=>t=>{const n=t.theme,r=st(mt,n[yt.colorScheme]);return n.options&&n.options.color?Bt(r,e,n.options.color):Bt(r,e)},Dt=(St("Brand.1"),St("Brand.2"),St("Brand.3"),St("Brand.4"),St("Brand.5"),St("Brand.6"),St("Primary")),Et=(St("PrimaryDark"),St("Secondary")),vt=(St("Accent.Light.1"),St("Accent.Light.2"),St("Accent.Light.3"),St("Accent.Light.4"),St("Accent.Light.5"),St("Accent.Light.6"),St("Accent.Dark.1"),St("Accent.Dark.2"),St("Accent.Dark.3"),{1:St("Neutral.1"),2:St("Neutral.2"),3:St("Neutral.3"),4:St("Neutral.4"),5:St("Neutral.5"),6:St("Neutral.6"),7:St("Neutral.7"),8:St("Neutral.8")}),Ht=(St("Validation.Green.Text"),St("Validation.Green.Icon"),St("Validation.Green.Border"),St("Validation.Green.Background"),St("Validation.Orange.Text"),St("Validation.Orange.Icon"),St("Validation.Orange.Border"),St("Validation.Orange.Background"),St("Validation.Orange.Badge"),St("Validation.Red.Text"),St("Validation.Red.Icon"),St("Validation.Red.Border"),St("Validation.Red.Background"),St("Validation.Blue.Text"),St("Validation.Blue.Icon"),St("Validation.Blue.Border"),St("Validation.Blue.Background"),St("Shadow.Accent"),St("Shadow.Red"),St("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),bt={collections:{base:{D1:{fontFamily:Ht.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:Ht.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Ht.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Ht.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ht.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Ht.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Ht.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Ht.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Ht.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Ht.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Ht.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Ht.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Ht.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Ht.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},At=e=>t=>{const n=t.theme,r=st(bt,n[yt.textStyleScheme]);return n.options&&n.options.textStyle?Bt(r,e,n.options.textStyle):Bt(r,e)},$t={D1:{fontFamily:At("D1.fontFamily"),fontSize:At("D1.fontSize"),fontWeight:At("D1.fontWeight"),lineHeight:At("D1.lineHeight"),letterSpacing:At("D1.letterSpacing")},D2:{fontFamily:At("D2.fontFamily"),fontSize:At("D2.fontSize"),fontWeight:At("D2.fontWeight"),lineHeight:At("D2.lineHeight"),letterSpacing:At("D2.letterSpacing")},D3:{fontFamily:At("D3.fontFamily"),fontSize:At("D3.fontSize"),fontWeight:At("D3.fontWeight"),lineHeight:At("D3.lineHeight"),letterSpacing:At("D3.letterSpacing")},D4:{fontFamily:At("D4.fontFamily"),fontSize:At("D4.fontSize"),fontWeight:At("D4.fontWeight"),lineHeight:At("D4.lineHeight"),letterSpacing:At("D4.letterSpacing")},DBody:{fontFamily:At("DBody.fontFamily"),fontSize:At("DBody.fontSize"),fontWeight:At("DBody.fontWeight"),lineHeight:At("DBody.lineHeight"),letterSpacing:At("DBody.letterSpacing")},H1:{fontFamily:At("H1.fontFamily"),fontSize:At("H1.fontSize"),fontWeight:At("H1.fontWeight"),lineHeight:At("H1.lineHeight"),letterSpacing:At("H1.letterSpacing")},H2:{fontFamily:At("H2.fontFamily"),fontSize:At("H2.fontSize"),fontWeight:At("H2.fontWeight"),lineHeight:At("H2.lineHeight"),letterSpacing:At("H2.letterSpacing")},H3:{fontFamily:At("H3.fontFamily"),fontSize:At("H3.fontSize"),fontWeight:At("H3.fontWeight"),lineHeight:At("H3.lineHeight"),letterSpacing:At("H3.letterSpacing")},H4:{fontFamily:At("H4.fontFamily"),fontSize:At("H4.fontSize"),fontWeight:At("H4.fontWeight"),lineHeight:At("H4.lineHeight"),letterSpacing:At("H4.letterSpacing")},H5:{fontFamily:At("H5.fontFamily"),fontSize:At("H5.fontSize"),fontWeight:At("H5.fontWeight"),lineHeight:At("H5.lineHeight"),letterSpacing:At("H5.letterSpacing")},H6:{fontFamily:At("H6.fontFamily"),fontSize:At("H6.fontSize"),fontWeight:At("H6.fontWeight"),lineHeight:At("H6.lineHeight"),letterSpacing:At("H6.letterSpacing")},Body:{fontFamily:At("Body.fontFamily"),fontSize:At("Body.fontSize"),fontWeight:At("Body.fontWeight"),lineHeight:At("Body.lineHeight"),letterSpacing:At("Body.letterSpacing")},BodySmall:{fontFamily:At("BodySmall.fontFamily"),fontSize:At("BodySmall.fontSize"),fontWeight:At("BodySmall.fontWeight"),lineHeight:At("BodySmall.lineHeight"),letterSpacing:At("BodySmall.letterSpacing")},XSmall:{fontFamily:At("XSmall.fontFamily"),fontSize:At("XSmall.fontSize"),fontWeight:At("XSmall.fontWeight"),lineHeight:At("XSmall.lineHeight"),letterSpacing:At("XSmall.letterSpacing")}},Ct=e=>{switch(e){case 700:case"bold":return Ht.Bold;case 600:case"semibold":return Ht.Semibold;case 300:case"light":return Ht.Light;case 400:case"regular":return Ht.Regular;default:return""}},_t=(e,t)=>n=>{var r;const o=$t[e].fontFamily(n),a=$t[e].fontWeight(n);return Object.values(Ht).includes(o)?i`
                font-family: ${Ct(t)||Ct(a)||o};
                font-weight: normal !important;
            `:i`
            font-family: ${o};
            font-weight: ${null!==(r=zt(t)||a)&&void 0!==r?r:"normal"};
        `},zt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},xt=e=>{if(e>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},kt=(e,t,n=!1)=>r=>{const o=$t[e],a=o.fontSize(r);return i`
            ${_t(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},wt=(e=!1,t=!1,n=void 0)=>t?i`
            display: block;
            ${xt(n)}
        `:e?i`
            display: inline;
        `:i`
            display: block;
            ${xt(n)}
        `;var Ot;!function(e){e.D1=r.h1`
        ${e=>i`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=r.h1`
        ${e=>i`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=r.h1`
        ${e=>i`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=r.h1`
        ${e=>i`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=r.h1`
        ${e=>i`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=r.h1`
        ${e=>i`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=r.h2`
        ${e=>i`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=r.h3`
        ${e=>i`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=r.h4`
        ${e=>i`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=r.h5`
        ${e=>i`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=r.h6`
        ${e=>i`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=r.p`
        ${e=>i`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=r.p`
        ${e=>i`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=r.span`
        ${e=>i`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${vt[1]};
                ${wt(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Tt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Ot||(Ot={}));const Wt=r.a`
    ${e=>i`
            ${kt(e.textStyle,e.weight)}
            color: ${Dt};
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
`,jt=r(n)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Tt=n=>{var{external:r=!1,children:i}=n,a=o(n,["external","children"]);return e(Wt,Object.assign({},a,{children:[i,r&&t(jt,{})]}))},It=r.div`
    border-radius: 0.5rem;
    background: ${vt[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Lt=e=>{var{children:n}=e,r=o(e,["children"]);const i=r["data-testid"]||"card";return t(It,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?t(Ot.Body,{children:n}):n}))};export{Lt as Card};
//# sourceMappingURL=index.js.map
