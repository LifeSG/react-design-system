import{jsxs as t,jsx as e,Fragment as n}from"react/jsx-runtime";import r,{css as i}from"styled-components";import{ExternalIcon as a}from"@lifesg/react-icons/external";import o from"react";function l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;const c={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},s={D1:{fontFamily:c.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:c.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:c.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:c.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:c.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:c.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:c.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:c.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:c.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:c.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:c.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:c.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},d={D1:{fontFamily:c.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:c.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:c.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:c.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:c.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:c.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:c.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:c.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:c.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:c.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:c.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:c.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:c.Regular,fontSize:.75,lineHeight:1.125}};var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h=Array.isArray,f="object"==typeof u&&u&&u.Object===Object&&u,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),F=m.Symbol,y=F,$=Object.prototype,S=$.hasOwnProperty,B=$.toString,D=y?y.toStringTag:void 0;var b=function(t){var e=S.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(t){}var i=B.call(t);return r&&(e?t[D]=n:delete t[D]),i},v=Object.prototype.toString;var H=b,E=function(t){return v.call(t)},w=F?F.toStringTag:void 0;var k=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":w&&w in Object(t)?H(t):E(t)};var x=k,A=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||A(t)&&"[object Symbol]"==x(t)},C=h,_=O,j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/;var L=function(t,e){if(C(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!_(t))||(z.test(t)||!j.test(t)||null!=e&&t in Object(e))};var W=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},M=k,T=W;var I,R=function(t){if(!T(t))return!1;var e=M(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},V=m["__core-js_shared__"],P=(I=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"";var N=function(t){return!!P&&P in t},Y=Function.prototype.toString;var G=R,U=N,X=W,J=function(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,q=Function.prototype,Q=Object.prototype,K=q.toString,tt=Q.hasOwnProperty,et=RegExp("^"+K.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nt=function(t){return!(!X(t)||U(t))&&(G(t)?et:Z).test(J(t))},rt=function(t,e){return null==t?void 0:t[e]};var it=function(t,e){var n=rt(t,e);return nt(n)?n:void 0},at=it(Object,"create"),ot=at;var lt=function(){this.__data__=ot?ot(null):{},this.size=0};var ct=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},st=at,dt=Object.prototype.hasOwnProperty;var ut=function(t){var e=this.__data__;if(st){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return dt.call(e,t)?e[t]:void 0},gt=at,ht=Object.prototype.hasOwnProperty;var ft=at;var pt=lt,mt=ct,Ft=ut,yt=function(t){var e=this.__data__;return gt?void 0!==e[t]:ht.call(e,t)},$t=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ft&&void 0===e?"__lodash_hash_undefined__":e,this};function St(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}St.prototype.clear=pt,St.prototype.delete=mt,St.prototype.get=Ft,St.prototype.has=yt,St.prototype.set=$t;var Bt=St;var Dt=function(){this.__data__=[],this.size=0};var bt=function(t,e){return t===e||t!=t&&e!=e};var vt=function(t,e){for(var n=t.length;n--;)if(bt(t[n][0],e))return n;return-1},Ht=vt,Et=Array.prototype.splice;var wt=vt;var kt=vt;var xt=vt;var At=Dt,Ot=function(t){var e=this.__data__,n=Ht(e,t);return!(n<0)&&(n==e.length-1?e.pop():Et.call(e,n,1),--this.size,!0)},Ct=function(t){var e=this.__data__,n=wt(e,t);return n<0?void 0:e[n][1]},_t=function(t){return kt(this.__data__,t)>-1},jt=function(t,e){var n=this.__data__,r=xt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}zt.prototype.clear=At,zt.prototype.delete=Ot,zt.prototype.get=Ct,zt.prototype.has=_t,zt.prototype.set=jt;var Lt=zt,Wt=it(m,"Map"),Mt=Bt,Tt=Lt,It=Wt;var Rt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Vt=function(t,e){var n=t.__data__;return Rt(e)?n["string"==typeof e?"string":"hash"]:n.map},Pt=Vt;var Nt=Vt;var Yt=Vt;var Gt=Vt;var Ut=function(){this.size=0,this.__data__={hash:new Mt,map:new(It||Tt),string:new Mt}},Xt=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},Jt=function(t){return Nt(this,t).get(t)},Zt=function(t){return Yt(this,t).has(t)},qt=function(t,e){var n=Gt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Qt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qt.prototype.clear=Ut,Qt.prototype.delete=Xt,Qt.prototype.get=Jt,Qt.prototype.has=Zt,Qt.prototype.set=qt;var Kt=Qt;function te(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(te.Cache||Kt),n}te.Cache=Kt;var ee=te;var ne=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/\\(\\)?/g,ie=function(t){var e=ee(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ne,(function(t,n,r,i){e.push(r?i.replace(re,"$1"):n||t)})),e}));var ae=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},oe=h,le=O,ce=F?F.prototype:void 0,se=ce?ce.toString:void 0;var de=function t(e){if("string"==typeof e)return e;if(oe(e))return ae(e,t)+"";if(le(e))return se?se.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},ue=de;var ge=h,he=L,fe=ie,pe=function(t){return null==t?"":ue(t)};var me=O;var Fe=function(t,e){return ge(t)?t:he(t,e)?[t]:fe(pe(t))},ye=function(t){if("string"==typeof t||me(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var $e=function(t,e){for(var n=0,r=(e=Fe(e,t)).length;null!=t&&n<r;)t=t[ye(e[n++])];return n&&n==r?t:void 0};var Se=g((function(t,e,n){var r=null==t?void 0:$e(t,e);return void 0===r?n:r}));const Be=(t,e,n)=>e?Se(n,e)||Se(t,e):n||t,De=(t,e)=>{const n=e||t.defaultValue;return Se(t.collections,n)};var be;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(be||(be={}));const ve={collections:{base:s,oneservice:d},defaultValue:"base"},He=t=>e=>{const n=e.theme,r=De(ve,n[be.textStyleScheme]);return n.options&&n.options.textStyle?Be(r,t,n.options.textStyle):Be(r,t)},Ee={D1:{fontFamily:He("D1.fontFamily"),fontSize:He("D1.fontSize"),fontWeight:He("D1.fontWeight"),lineHeight:He("D1.lineHeight"),letterSpacing:He("D1.letterSpacing")},D2:{fontFamily:He("D2.fontFamily"),fontSize:He("D2.fontSize"),fontWeight:He("D2.fontWeight"),lineHeight:He("D2.lineHeight"),letterSpacing:He("D2.letterSpacing")},D3:{fontFamily:He("D3.fontFamily"),fontSize:He("D3.fontSize"),fontWeight:He("D3.fontWeight"),lineHeight:He("D3.lineHeight"),letterSpacing:He("D3.letterSpacing")},D4:{fontFamily:He("D4.fontFamily"),fontSize:He("D4.fontSize"),fontWeight:He("D4.fontWeight"),lineHeight:He("D4.lineHeight"),letterSpacing:He("D4.letterSpacing")},DBody:{fontFamily:He("DBody.fontFamily"),fontSize:He("DBody.fontSize"),fontWeight:He("DBody.fontWeight"),lineHeight:He("DBody.lineHeight"),letterSpacing:He("DBody.letterSpacing")},H1:{fontFamily:He("H1.fontFamily"),fontSize:He("H1.fontSize"),fontWeight:He("H1.fontWeight"),lineHeight:He("H1.lineHeight"),letterSpacing:He("H1.letterSpacing")},H2:{fontFamily:He("H2.fontFamily"),fontSize:He("H2.fontSize"),fontWeight:He("H2.fontWeight"),lineHeight:He("H2.lineHeight"),letterSpacing:He("H2.letterSpacing")},H3:{fontFamily:He("H3.fontFamily"),fontSize:He("H3.fontSize"),fontWeight:He("H3.fontWeight"),lineHeight:He("H3.lineHeight"),letterSpacing:He("H3.letterSpacing")},H4:{fontFamily:He("H4.fontFamily"),fontSize:He("H4.fontSize"),fontWeight:He("H4.fontWeight"),lineHeight:He("H4.lineHeight"),letterSpacing:He("H4.letterSpacing")},H5:{fontFamily:He("H5.fontFamily"),fontSize:He("H5.fontSize"),fontWeight:He("H5.fontWeight"),lineHeight:He("H5.lineHeight"),letterSpacing:He("H5.letterSpacing")},H6:{fontFamily:He("H6.fontFamily"),fontSize:He("H6.fontSize"),fontWeight:He("H6.fontWeight"),lineHeight:He("H6.lineHeight"),letterSpacing:He("H6.letterSpacing")},Body:{fontFamily:He("Body.fontFamily"),fontSize:He("Body.fontSize"),fontWeight:He("Body.fontWeight"),lineHeight:He("Body.lineHeight"),letterSpacing:He("Body.letterSpacing")},BodySmall:{fontFamily:He("BodySmall.fontFamily"),fontSize:He("BodySmall.fontSize"),fontWeight:He("BodySmall.fontWeight"),lineHeight:He("BodySmall.lineHeight"),letterSpacing:He("BodySmall.letterSpacing")},XSmall:{fontFamily:He("XSmall.fontFamily"),fontSize:He("XSmall.fontSize"),fontWeight:He("XSmall.fontWeight"),lineHeight:He("XSmall.lineHeight"),letterSpacing:He("XSmall.letterSpacing")}},we=t=>{switch(t){case 700:case"bold":return c.Bold;case 600:case"semibold":return c.Semibold;case 300:case"light":return c.Light;case 400:case"regular":return c.Regular;default:return""}},ke=(t,e)=>n=>{var r;const a=Ee[t].fontFamily(n),o=Ee[t].fontWeight(n);return Object.values(c).includes(a)?i`
                font-family: ${we(e)||we(o)||a};
                font-weight: normal !important;
            `:i`
            font-family: ${a};
            font-weight: ${null!==(r=xe(e)||o)&&void 0!==r?r:"normal"};
        `},xe=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ae=t=>{if(t>0)return i`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Oe=(t,e,n=!1)=>r=>{const a=Ee[t],o=a.fontSize(r);return i`
            ${ke(t,e)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${i`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Ce=(t=!1,e=!1,n=void 0)=>e?i`
            display: block;
            ${Ae(n)}
        `:t?i`
            display: inline;
        `:i`
            display: block;
            ${Ae(n)}
        `,_e={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},je=t=>e=>{const n=e.theme,r=De(_e,n[be.colorScheme]);return n.options&&n.options.color?Be(r,t,n.options.color):Be(r,t)},ze=(je("Brand.1"),je("Brand.2"),je("Brand.3"),je("Brand.4"),je("Brand.5"),je("Brand.6"),je("Primary")),Le=(je("PrimaryDark"),je("Secondary")),We=(je("Accent.Light.1"),je("Accent.Light.2"),je("Accent.Light.3"),je("Accent.Light.4"),je("Accent.Light.5"),je("Accent.Light.6"),je("Accent.Dark.1"),je("Accent.Dark.2"),je("Accent.Dark.3"),{1:je("Neutral.1"),2:je("Neutral.2"),3:je("Neutral.3"),4:je("Neutral.4"),5:je("Neutral.5"),6:je("Neutral.6"),7:je("Neutral.7"),8:je("Neutral.8")});je("Validation.Green.Text"),je("Validation.Green.Icon"),je("Validation.Green.Border"),je("Validation.Green.Background"),je("Validation.Orange.Text"),je("Validation.Orange.Icon"),je("Validation.Orange.Border"),je("Validation.Orange.Background"),je("Validation.Orange.Badge"),je("Validation.Red.Text"),je("Validation.Red.Icon"),je("Validation.Red.Border"),je("Validation.Red.Background"),je("Validation.Blue.Text"),je("Validation.Blue.Icon"),je("Validation.Blue.Border"),je("Validation.Blue.Background"),je("Shadow.Accent"),je("Shadow.Red"),je("Shadow.Elevation");var Me;!function(t){t.D1=r.h1`
        ${t=>i`
                ${Oe("D1",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=r.h1`
        ${t=>i`
                ${Oe("D2",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=r.h1`
        ${t=>i`
                ${Oe("D3",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=r.h1`
        ${t=>i`
                ${Oe("D4",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=r.h1`
        ${t=>i`
                ${Oe("DBody",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=r.h1`
        ${t=>i`
                ${Oe("H1",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=r.h2`
        ${t=>i`
                ${Oe("H2",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=r.h3`
        ${t=>i`
                ${Oe("H3",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=r.h4`
        ${t=>i`
                ${Oe("H4",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=r.h5`
        ${t=>i`
                ${Oe("H5",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=r.h6`
        ${t=>i`
                ${Oe("H6",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=r.p`
        ${t=>i`
                ${Oe("Body",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=r.p`
        ${t=>i`
                ${Oe("BodySmall",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=r.span`
        ${t=>i`
                ${Oe("XSmall",t.weight,t.paragraph)}
                color: ${We[1]};
                ${Ce(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Re(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Re(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Me||(Me={}));const Te=r.a`
    ${t=>i`
            ${Oe(t.textStyle,t.weight)}
            color: ${ze};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Le};

                svg {
                    color: ${Le};
                }
            }
        `}
`,Ie=r(a)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Re=n=>{var{external:r=!1,children:i}=n,a=l(n,["external","children"]);return t(Te,Object.assign({},a,{children:[i,r&&e(Ie,{})]}))};var Ve;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ve||(Ve={}));const Pe={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ne=t=>Object.keys(Pe).reduce(((e,n)=>{const r=Pe[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),Ye=Ne("max-width"),Ge=(Ne("min-width"),r.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${Ye.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`),Ue=r(Me.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Xe=r.div`
    display: flex;
    align-items: flex-start;
`,Je=r.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${Ye.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,Ze=()=>t(Ge,Object.assign({"data-testid":"download-app-section"},{children:[e(Ue,Object.assign({weight:"semibold"},{children:"Download the app"})),t(Xe,{children:[e(Je,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e(Je,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]}));var qe,Qe={exports:{}},Ke=g(Qe.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",l="day",c="week",s="month",d="quarter",u="year",g="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},F=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:F,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+F(r,2,"0")+":"+F(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),a=n-i<0,o=e.clone().add(r+(a?-1:1),s);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:u,w:c,d:l,D:g,h:o,m:a,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var B="$isDayjsObject",D=function(t){return t instanceof E||!(!t||!t[B])},b=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var a=e.toLowerCase();S[a]&&(i=a),n&&(S[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&($=i),i||!r&&$},v=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},H=y;H.l=b,H.i=D,H.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[B]=!0}var F=m.prototype;return F.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(H.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},F.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},F.$utils=function(){return H},F.isValid=function(){return!(this.$d.toString()===h)},F.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},F.isAfter=function(t,e){return v(t)<this.startOf(e)},F.isBefore=function(t,e){return this.endOf(e)<v(t)},F.$g=function(t,e,n){return H.u(t)?this[e]:this.set(n,t)},F.unix=function(){return Math.floor(this.valueOf()/1e3)},F.valueOf=function(){return this.$d.getTime()},F.startOf=function(t,e){var n=this,r=!!H.u(e)||e,d=H.p(t),h=function(t,e){var i=H.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},f=function(t,e){return H.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,F=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return r?h(1,0):h(31,11);case s:return r?h(1,m):h(0,m+1);case c:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return h(r?F-S:F+(6-S),m);case l:case g:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case a:return f(y+"Seconds",2);case i:return f(y+"Milliseconds",3);default:return this.clone()}},F.endOf=function(t){return this.startOf(t,!1)},F.$set=function(t,e){var n,c=H.p(t),d="set"+(this.$u?"UTC":""),h=(n={},n[l]=d+"Date",n[g]=d+"Date",n[s]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[c],f=c===l?this.$D+(e-this.$W):e;if(c===s||c===u){var p=this.clone().set(g,1);p.$d[h](f),p.init(),this.$d=p.set(g,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},F.set=function(t,e){return this.clone().$set(t,e)},F.get=function(t){return this[H.p(t)]()},F.add=function(r,d){var g,h=this;r=Number(r);var f=H.p(d),p=function(t){var e=v(h);return H.w(e.date(e.date()+Math.round(t*r)),h)};if(f===s)return this.set(s,this.$M+r);if(f===u)return this.set(u,this.$y+r);if(f===l)return p(1);if(f===c)return p(7);var m=(g={},g[a]=e,g[o]=n,g[i]=t,g)[f]||1,F=this.$d.getTime()+r*m;return H.w(F,this)},F.subtract=function(t,e){return this.add(-1*t,e)},F.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=H.z(this),a=this.$H,o=this.$m,l=this.$M,c=n.weekdays,s=n.months,d=n.meridiem,u=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},g=function(t){return H.s(a%12||12,t,"0")},f=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return H.s(e.$y,4,"0");case"M":return l+1;case"MM":return H.s(l+1,2,"0");case"MMM":return u(n.monthsShort,l,s,3);case"MMMM":return u(s,l);case"D":return e.$D;case"DD":return H.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return u(n.weekdaysMin,e.$W,c,2);case"ddd":return u(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(a);case"HH":return H.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return f(a,o,!0);case"A":return f(a,o,!1);case"m":return String(o);case"mm":return H.s(o,2,"0");case"s":return String(e.$s);case"ss":return H.s(e.$s,2,"0");case"SSS":return H.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},F.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},F.diff=function(r,g,h){var f,p=this,m=H.p(g),F=v(r),y=(F.utcOffset()-this.utcOffset())*e,$=this-F,S=function(){return H.m(p,F)};switch(m){case u:f=S()/12;break;case s:f=S();break;case d:f=S()/3;break;case c:f=($-y)/6048e5;break;case l:f=($-y)/864e5;break;case o:f=$/n;break;case a:f=$/e;break;case i:f=$/t;break;default:f=$}return h?f:H.a(f)},F.daysInMonth=function(){return this.endOf(s).$D},F.$locale=function(){return S[this.$L]},F.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},F.clone=function(){return H.w(this.$d,this)},F.toDate=function(){return new Date(this.valueOf())},F.toJSON=function(){return this.isValid()?this.toISOString():null},F.toISOString=function(){return this.$d.toISOString()},F.toString=function(){return this.$d.toUTCString()},m}(),w=E.prototype;return v.prototype=w,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",l],["$M",s],["$y",u],["$D",g]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),v.extend=function(t,e){return t.$i||(t(e,E,v),t.$i=!0),v},v.locale=b,v.isDayjs=D,v.unix=function(t){return v(1e3*t)},v.en=S[$],v.Ls=S,v.p={},v}());!function(t){t.getCopyrightInfo=(t=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${Ke(t).format("D MMMM YYYY")}`,t.getDisclaimerLinks=t=>({privacy:Object.assign(Object.assign({href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign({href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign({href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0},t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})})}(qe||(qe={}));const tn=r.div`
    position: relative;
    ${t=>{const{$desktopStart:e,$desktopSpan:n,$tabletStart:r,$tabletSpan:a,$mobileStart:o,$mobileSpan:l}=t;return i`
            grid-column: ${e||"auto"} / span ${n||1};

            ${Ye.tablet} {
                grid-column: ${r||"auto"} / span
                    ${a||1};
            }

            ${Ye.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${l||1};
            }
        `}}
`,en=o.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=l(t,["mobileCols","tabletCols","desktopCols"]);return e(tn,Object.assign({ref:n},(()=>{const t=i||r,e=r,n=nn(a||i||r),o=nn(t),l=nn(e);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:l.span,$mobileStart:l.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),nn=t=>{if(Array.isArray(t)&&t.length>1){const[e,n]=t,r=e<=n?e:n,i=e<=n?n:e;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof t?{start:void 0,span:t}:{start:void 0,span:void 0}},rn=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,c=l(t,["children","data-testid","type","stretch"]);return e(an,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},c,{children:r}))})),an=r.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${t=>t.$stretch?i`
                padding: 0 3rem;
            `:i`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Ye.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Ye.tablet} {
        max-width: 720px;
    }
    ${Ye.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${t=>{switch(t.$type){case"grid":return i`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Ye.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Ye.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i`
                    display: flex;
                    flex-direction: column;
                `;default:return i`
                    display: flex;
                `}}}
`,on=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=l(t,["children","data-testid","stretch"]);return e(ln,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),ln=r.section`
    display: block;
    position: relative;
    ${t=>t.$stretch?i`
                ${Ye.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:i`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,cn=o.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:c=!1}=t,s=l(t,["children","data-testid","className","type","stretch"]);return e(on,Object.assign({ref:n,"data-testid":i,className:a,stretch:c},s,{children:e(rn,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:c},{children:r}))}))})),sn={Section:on,Container:rn,Content:cn,ColDiv:en},dn=r.footer`
    background: ${We[7]};
`,un=r(Me.Hyperlink.Small)`
    color: ${We[1]};
`,gn=r(sn.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${We[5]};

    ${Ye.tablet} {
        padding: 2rem 0;
    }
`,hn=r.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,fn=r.ul`
    // first col
    grid-column: 3 / span 2;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 5 / span 2;
    }

    li {
        :not(:last-child) {
            margin-bottom: 0.5rem;
        }

        a {
            display: inline-block;
            vertical-align: top;
            line-height: 1rem;
        }
    }

    ${Ye.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${Ye.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,pn=r.div`
    grid-column: 9 / span 4;

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,mn=r.div`
    display: none;

    ${Ye.tablet} {
        display: block;
        height: 1px;
        background: ${We[6]};
    }
`,Fn=r(sn.Content)`
    padding: 1.375rem 0;

    ${Ye.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,yn=r.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${Ye.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,$n=r(yn)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${Ye.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${Ye.mobileL} {
        grid-column: 1 / span 4;
    }
`,Sn=r(Me.Hyperlink.Small)`
    ${Oe("XSmall","regular")}
    color: ${We[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${We[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${We[3]};
        svg {
            color: ${We[3]};
        }
    }

    ${Ye.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${Ye.tablet} {
        margin-bottom: 0.625rem;
    }
`,Bn=r=>{var{children:i,links:a,lastUpdated:o,disclaimerLinks:c,showDownloadAddon:s,logoSrc:d,copyrightInfo:u,onFooterLinkClick:g,layout:h="default"}=r,f=l(r,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const p="stretch"===h,m=t=>t.map(((t,n)=>{const r=l(t,["data-options"]);return e("li",{children:e(un,Object.assign({},r,{onClick:e=>((t,e)=>{e.onClick?(t.preventDefault(),e.onClick(t)):g&&(t.preventDefault(),g(e))})(e,t)}))},n)}));return t(dn,Object.assign({},f,{children:[(()=>{let r=null;return i||((a||s)&&(r=t(n,{children:[e(hn,Object.assign({"data-testid":"logo-section"},{children:e("img",{src:d||"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",alt:"LifeSG","data-testid":"logo"})})),(null==a?void 0:a[0])&&e(fn,Object.assign({"data-testid":"link-col-1"},{children:m(a[0])}),"link-col-1"),(null==a?void 0:a[1])&&e(fn,Object.assign({"data-testid":"link-col-2"},{children:m(a[1])}),"link-col-2"),s&&e(pn,{children:e(Ze,{})})]})),r?e(gn,Object.assign({type:"grid",stretch:p},{children:r})):null)})(),e(mn,{}),t(Fn,Object.assign({type:"grid",stretch:p},{children:[e(yn,{children:(()=>{const t=qe.getDisclaimerLinks(c);return Object.keys(t).map((n=>e(Sn,Object.assign({},t[n]),n)))})()},"disclaimer"),e($n,{children:e(Me.XSmall,Object.assign({"data-testid":"copyright-text"},{children:u||t(n,{children:["©"," ",qe.getCopyrightInfo(o)]})}))},"copyright")]}))]}))};export{Bn as Footer};
//# sourceMappingURL=index.js.map
