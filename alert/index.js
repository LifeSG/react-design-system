import e,{jsxs as t,jsx as n}from"react/jsx-runtime";import r,{css as a}from"styled-components";var i,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},l={};Object.defineProperty(l,"__esModule",{value:!0});var c=e;const g=e=>c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:c.jsx("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});g.displayName="ArrowRightIcon",i=l.ArrowRightIcon=g;var h=Array.isArray,d="object"==typeof o&&o&&o.Object===Object&&o,f="object"==typeof self&&self&&self.Object===Object&&self,u=d||f||Function("return this")(),p=u.Symbol,s=p,F=Object.prototype,y=F.hasOwnProperty,m=F.toString,B=s?s.toStringTag:void 0;var S=function(e){var t=y.call(e,B),n=e[B];try{e[B]=void 0;var r=!0}catch(e){}var a=m.call(e);return r&&(t?e[B]=n:delete e[B]),a},v=Object.prototype.toString;var D=S,H=function(e){return v.call(e)},$=p?p.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$&&$ in Object(e)?D(e):H(e)};var b=C,_=function(e){return null!=e&&"object"==typeof e};var E=function(e){return"symbol"==typeof e||_(e)&&"[object Symbol]"==b(e)},w=h,A=E,z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var x=function(e,t){if(w(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!A(e))||(k.test(e)||!z.test(e)||null!=t&&e in Object(t))};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O=C,V=W;var j,N=function(e){if(!V(e))return!1;var t=O(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=u["__core-js_shared__"],I=(j=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var R=function(e){return!!I&&I in e},P=Function.prototype.toString;var L=N,G=R,X=W,M=function(e){if(null!=e){try{return P.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Z=/^\[object .+?Constructor\]$/,U=Function.prototype,q=Object.prototype,J=U.toString,K=q.hasOwnProperty,Q=RegExp("^"+J.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!X(e)||G(e))&&(L(e)?Q:Z).test(M(e))},ee=function(e,t){return null==e?void 0:e[t]};var te=function(e,t){var n=ee(e,t);return Y(n)?n:void 0},ne=te(Object,"create"),re=ne;var ae=function(){this.__data__=re?re(null):{},this.size=0};var ie=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},oe=ne,le=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(oe){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return le.call(t,e)?t[e]:void 0},ge=ne,he=Object.prototype.hasOwnProperty;var de=ne;var fe=ae,ue=ie,pe=ce,se=function(e){var t=this.__data__;return ge?void 0!==t[e]:he.call(t,e)},Fe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=de&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ye.prototype.clear=fe,ye.prototype.delete=ue,ye.prototype.get=pe,ye.prototype.has=se,ye.prototype.set=Fe;var me=ye;var Be=function(){this.__data__=[],this.size=0};var Se=function(e,t){return e===t||e!=e&&t!=t};var ve=function(e,t){for(var n=e.length;n--;)if(Se(e[n][0],t))return n;return-1},De=ve,He=Array.prototype.splice;var $e=ve;var Ce=ve;var be=ve;var _e=Be,Ee=function(e){var t=this.__data__,n=De(t,e);return!(n<0)&&(n==t.length-1?t.pop():He.call(t,n,1),--this.size,!0)},we=function(e){var t=this.__data__,n=$e(t,e);return n<0?void 0:t[n][1]},Ae=function(e){return Ce(this.__data__,e)>-1},ze=function(e,t){var n=this.__data__,r=be(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ke.prototype.clear=_e,ke.prototype.delete=Ee,ke.prototype.get=we,ke.prototype.has=Ae,ke.prototype.set=ze;var xe=ke,We=te(u,"Map"),Oe=me,Ve=xe,je=We;var Ne=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Te=function(e,t){var n=e.__data__;return Ne(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Te;var Re=Te;var Pe=Te;var Le=Te;var Ge=function(){this.size=0,this.__data__={hash:new Oe,map:new(je||Ve),string:new Oe}},Xe=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Me=function(e){return Re(this,e).get(e)},Ze=function(e){return Pe(this,e).has(e)},Ue=function(e,t){var n=Le(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function qe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qe.prototype.clear=Ge,qe.prototype.delete=Xe,qe.prototype.get=Me,qe.prototype.has=Ze,qe.prototype.set=Ue;var Je=qe;function Ke(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Ke.Cache||Je),n}Ke.Cache=Je;var Qe=Ke;var Ye=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,et=/\\(\\)?/g,tt=function(e){var t=Qe(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ye,(function(e,n,r,a){t.push(r?a.replace(et,"$1"):n||e)})),t}));var nt=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},rt=h,at=E,it=p?p.prototype:void 0,ot=it?it.toString:void 0;var lt=function e(t){if("string"==typeof t)return t;if(rt(t))return nt(t,e)+"";if(at(t))return ot?ot.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},ct=lt;var gt=h,ht=x,dt=tt,ft=function(e){return null==e?"":ct(e)};var ut=E;var pt=function(e,t){return gt(e)?e:ht(e,t)?[e]:dt(ft(e))},st=function(e){if("string"==typeof e||ut(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ft=function(e,t){for(var n=0,r=(t=pt(t,e)).length;null!=e&&n<r;)e=e[st(t[n++])];return n&&n==r?e:void 0};var yt=function(e,t,n){var r=null==e?void 0:Ft(e,t);return void 0===r?n:r};const mt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,Bt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var St;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(St||(St={}));const vt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Dt=e=>t=>{const n=t.theme,r=Bt(vt,n[St.colorScheme]);return n.options&&n.options.color?mt(r,e,n.options.color):mt(r,e)},Ht={Brand:{1:Dt("Brand.1"),2:Dt("Brand.2"),3:Dt("Brand.3"),4:Dt("Brand.4"),5:Dt("Brand.5"),6:Dt("Brand.6")},Primary:Dt("Primary"),PrimaryDark:Dt("PrimaryDark"),Secondary:Dt("Secondary"),Accent:{Light:{1:Dt("Accent.Light.1"),2:Dt("Accent.Light.2"),3:Dt("Accent.Light.3"),4:Dt("Accent.Light.4"),5:Dt("Accent.Light.5"),6:Dt("Accent.Light.6")},Dark:{1:Dt("Accent.Dark.1"),2:Dt("Accent.Dark.2"),3:Dt("Accent.Dark.3")}},Neutral:{1:Dt("Neutral.1"),2:Dt("Neutral.2"),3:Dt("Neutral.3"),4:Dt("Neutral.4"),5:Dt("Neutral.5"),6:Dt("Neutral.6"),7:Dt("Neutral.7"),8:Dt("Neutral.8")},Validation:{Green:{Text:Dt("Validation.Green.Text"),Icon:Dt("Validation.Green.Icon"),Border:Dt("Validation.Green.Border"),Background:Dt("Validation.Green.Background")},Orange:{Text:Dt("Validation.Orange.Text"),Icon:Dt("Validation.Orange.Icon"),Border:Dt("Validation.Orange.Border"),Background:Dt("Validation.Orange.Background"),Badge:Dt("Validation.Orange.Badge")},Red:{Text:Dt("Validation.Red.Text"),Icon:Dt("Validation.Red.Icon"),Border:Dt("Validation.Red.Border"),Background:Dt("Validation.Red.Background")},Blue:{Text:Dt("Validation.Blue.Text"),Icon:Dt("Validation.Blue.Icon"),Border:Dt("Validation.Blue.Border"),Background:Dt("Validation.Blue.Background")}},Shadow:{Accent:Dt("Shadow.Accent"),Red:Dt("Shadow.Red"),Elevation:Dt("Shadow.Elevation")}},$t={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ct={collections:{base:{D1:{fontFamily:$t.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:$t.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:$t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:$t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:$t.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:$t.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:$t.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:$t.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:$t.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:$t.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:$t.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:$t.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:$t.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:$t.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},bt=e=>t=>{const n=t.theme,r=Bt(Ct,n[St.textStyleScheme]);return n.options&&n.options.textStyle?mt(r,e,n.options.textStyle):mt(r,e)},_t={D1:{fontFamily:bt("D1.fontFamily"),fontSize:bt("D1.fontSize"),fontWeight:bt("D1.fontWeight"),lineHeight:bt("D1.lineHeight"),letterSpacing:bt("D1.letterSpacing")},D2:{fontFamily:bt("D2.fontFamily"),fontSize:bt("D2.fontSize"),fontWeight:bt("D2.fontWeight"),lineHeight:bt("D2.lineHeight"),letterSpacing:bt("D2.letterSpacing")},D3:{fontFamily:bt("D3.fontFamily"),fontSize:bt("D3.fontSize"),fontWeight:bt("D3.fontWeight"),lineHeight:bt("D3.lineHeight"),letterSpacing:bt("D3.letterSpacing")},D4:{fontFamily:bt("D4.fontFamily"),fontSize:bt("D4.fontSize"),fontWeight:bt("D4.fontWeight"),lineHeight:bt("D4.lineHeight"),letterSpacing:bt("D4.letterSpacing")},DBody:{fontFamily:bt("DBody.fontFamily"),fontSize:bt("DBody.fontSize"),fontWeight:bt("DBody.fontWeight"),lineHeight:bt("DBody.lineHeight"),letterSpacing:bt("DBody.letterSpacing")},H1:{fontFamily:bt("H1.fontFamily"),fontSize:bt("H1.fontSize"),fontWeight:bt("H1.fontWeight"),lineHeight:bt("H1.lineHeight"),letterSpacing:bt("H1.letterSpacing")},H2:{fontFamily:bt("H2.fontFamily"),fontSize:bt("H2.fontSize"),fontWeight:bt("H2.fontWeight"),lineHeight:bt("H2.lineHeight"),letterSpacing:bt("H2.letterSpacing")},H3:{fontFamily:bt("H3.fontFamily"),fontSize:bt("H3.fontSize"),fontWeight:bt("H3.fontWeight"),lineHeight:bt("H3.lineHeight"),letterSpacing:bt("H3.letterSpacing")},H4:{fontFamily:bt("H4.fontFamily"),fontSize:bt("H4.fontSize"),fontWeight:bt("H4.fontWeight"),lineHeight:bt("H4.lineHeight"),letterSpacing:bt("H4.letterSpacing")},H5:{fontFamily:bt("H5.fontFamily"),fontSize:bt("H5.fontSize"),fontWeight:bt("H5.fontWeight"),lineHeight:bt("H5.lineHeight"),letterSpacing:bt("H5.letterSpacing")},H6:{fontFamily:bt("H6.fontFamily"),fontSize:bt("H6.fontSize"),fontWeight:bt("H6.fontWeight"),lineHeight:bt("H6.lineHeight"),letterSpacing:bt("H6.letterSpacing")},Body:{fontFamily:bt("Body.fontFamily"),fontSize:bt("Body.fontSize"),fontWeight:bt("Body.fontWeight"),lineHeight:bt("Body.lineHeight"),letterSpacing:bt("Body.letterSpacing")},BodySmall:{fontFamily:bt("BodySmall.fontFamily"),fontSize:bt("BodySmall.fontSize"),fontWeight:bt("BodySmall.fontWeight"),lineHeight:bt("BodySmall.lineHeight"),letterSpacing:bt("BodySmall.letterSpacing")},XSmall:{fontFamily:bt("XSmall.fontFamily"),fontSize:bt("XSmall.fontSize"),fontWeight:bt("XSmall.fontWeight"),lineHeight:bt("XSmall.lineHeight"),letterSpacing:bt("XSmall.letterSpacing")}},Et=e=>{switch(e){case 700:case"bold":return $t.Bold;case 600:case"semibold":return $t.Semibold;case 300:case"light":return $t.Light;case 400:case"regular":return $t.Regular;default:return""}},wt=(e,t)=>n=>{const r=_t[e].fontFamily(n),i=_t[e].fontWeight(n);return Object.values($t).includes(r)?a`
                font-family: ${Et(t)||Et(i)||r};
                font-weight: normal !important;
            `:a`
            font-family: ${r};
            font-weight: ${(At(t)||i)??"normal"};
        `},At=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},zt=wt,kt=(e,t,n=!1)=>r=>{const i=_t[e],o=i.fontSize(r);return a`
            ${wt(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${a`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},xt=(e=!1,t=!1)=>t?a`
            display: block;
        `:e?a`
            display: inline;
        `:a`
            display: block;
        `;var Wt,Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});var Vt=e;const jt=e=>Vt.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:Vt.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Nt;jt.displayName="ExternalIcon",Wt=Ot.ExternalIcon=jt,function(e){e.D1=r.h1`
        ${e=>a`
                ${kt("D1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.D2=r.h1`
        ${e=>a`
                ${kt("D2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.D3=r.h1`
        ${e=>a`
                ${kt("D3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.D4=r.h1`
        ${e=>a`
                ${kt("D4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.DBody=r.h1`
        ${e=>a`
                ${kt("DBody",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H1=r.h1`
        ${e=>a`
                ${kt("H1",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H2=r.h2`
        ${e=>a`
                ${kt("H2",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H3=r.h3`
        ${e=>a`
                ${kt("H3",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H4=r.h4`
        ${e=>a`
                ${kt("H4",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H5=r.h5`
        ${e=>a`
                ${kt("H5",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.H6=r.h6`
        ${e=>a`
                ${kt("H6",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.Body=r.p`
        ${e=>a`
                ${kt("Body",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=r.p`
        ${e=>a`
                ${kt("BodySmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.XSmall=r.span`
        ${e=>a`
                ${kt("XSmall",e.weight,e.paragraph)}
                color: ${Ht.Neutral[1]};
                ${xt(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Rt({...e,textStyle:"Body"}),Small:e=>Rt({...e,textStyle:"BodySmall"})}}(Nt||(Nt={}));const Tt=r.a`
    ${e=>a`
            ${kt(e.textStyle,e.weight)}
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};

                svg {
                    color: ${Ht.Secondary};
                }
            }
        `}
`,It=r(Wt)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rt=({external:e=!1,children:r,...a})=>t(Tt,{...a,children:[r,e&&n(It,{})]});var Pt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Pt||(Pt={}));const Lt=r.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${kt("BodySmall","regular")}

    ${e=>{let t,n;switch(e.$type){case"error":t=Ht.Validation.Red.Background(e),n=Ht.Validation.Red.Border(e);break;case"success":default:t=Ht.Validation.Green.Background(e),n=Ht.Validation.Green.Border(e);break;case"warning":t=Ht.Validation.Orange.Background(e),n=Ht.Validation.Orange.Border(e)}return`\n\t\t\tbackground: ${t};\n\t\t\tborder-left: 2pt solid ${n};\n\t\t`}}

	p {
        ${kt("BodySmall","regular")}
        margin: 0;

        strong {
            ${zt("BodySmall","semibold")}
        }

        a {
            color: ${Ht.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ht.Secondary};
            }
        }
    }
`,Gt=r(Nt.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`,Xt=r(i)`
    height: 1.375rem;
    width: 1.375rem;
    margin-left: 0.25rem;
`,Mt=({type:e,className:r,children:a,actionLink:i,...o})=>t(Lt,{className:r,$type:e,"data-testid":o["data-testid"],children:[a,i&&t(Gt,{weight:"semibold",...i,"data-testid":"action-link",children:[i.children,n(Xt,{})]})]});export{Mt as Alert};
//# sourceMappingURL=index.js.map
