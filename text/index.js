import e,{css as t}from"styled-components";import{jsxs as n,jsx as a}from"react/jsx-runtime";import{ExternalIcon as i}from"@lifesg/react-icons/external";const r={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},o={D1:{fontFamily:r.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:r.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:r.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:r.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:r.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:r.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:r.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:r.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:r.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:r.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:r.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:r.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:r.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:r.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},l={D1:{fontFamily:r.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:r.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:r.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:r.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:r.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:r.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:r.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:r.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:r.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:r.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:r.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:r.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:r.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:r.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},g={D1:{fontFamily:r.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:r.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:r.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:r.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:r.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:r.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:r.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:r.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:r.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:r.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:r.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:r.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:r.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:r.OpenSans.Regular,fontSize:.75,lineHeight:1.125}};var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f=Array.isArray,h="object"==typeof c&&c&&c.Object===Object&&c,s="object"==typeof self&&self&&self.Object===Object&&self,d=h||s||Function("return this")(),u=d.Symbol,p=u,S=Object.prototype,y=S.hasOwnProperty,B=S.toString,m=p?p.toStringTag:void 0;var D=function(e){var t=y.call(e,m),n=e[m];try{e[m]=void 0;var a=!0}catch(e){}var i=B.call(e);return a&&(t?e[m]=n:delete e[m]),i},H=Object.prototype.toString;var E=D,v=function(e){return H.call(e)},b=u?u.toStringTag:void 0;var A=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?E(e):v(e)};var z=A,$=function(e){return null!=e&&"object"==typeof e};var O=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==z(e)},x=f,k=O,C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var W=function(e,t){if(x(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!k(e))||(_.test(e)||!C.test(e)||null!=t&&e in Object(t))};var w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},T=A,P=w;var j,R=function(e){if(!P(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},L=d["__core-js_shared__"],I=(j=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"";var V=function(e){return!!I&&I in e},J=Function.prototype.toString;var N=R,G=V,X=w,M=function(e){if(null!=e){try{return J.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,q=Function.prototype,K=Object.prototype,Q=q.toString,Y=K.hasOwnProperty,Z=RegExp("^"+Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ee=function(e){return!(!X(e)||G(e))&&(N(e)?Z:U).test(M(e))},te=function(e,t){return null==e?void 0:e[t]};var ne=function(e,t){var n=te(e,t);return ee(n)?n:void 0},ae=ne(Object,"create"),ie=ae;var re=function(){this.__data__=ie?ie(null):{},this.size=0};var oe=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},le=ae,ge=Object.prototype.hasOwnProperty;var ce=function(e){var t=this.__data__;if(le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return ge.call(t,e)?t[e]:void 0},Fe=ae,fe=Object.prototype.hasOwnProperty;var he=ae;var se=re,de=oe,ue=ce,pe=function(e){var t=this.__data__;return Fe?void 0!==t[e]:fe.call(t,e)},Se=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=he&&void 0===t?"__lodash_hash_undefined__":t,this};function ye(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}ye.prototype.clear=se,ye.prototype.delete=de,ye.prototype.get=ue,ye.prototype.has=pe,ye.prototype.set=Se;var Be=ye;var me=function(){this.__data__=[],this.size=0};var De=function(e,t){return e===t||e!=e&&t!=t};var He=function(e,t){for(var n=e.length;n--;)if(De(e[n][0],t))return n;return-1},Ee=He,ve=Array.prototype.splice;var be=He;var Ae=He;var ze=He;var $e=me,Oe=function(e){var t=this.__data__,n=Ee(t,e);return!(n<0)&&(n==t.length-1?t.pop():ve.call(t,n,1),--this.size,!0)},xe=function(e){var t=this.__data__,n=be(t,e);return n<0?void 0:t[n][1]},ke=function(e){return Ae(this.__data__,e)>-1},Ce=function(e,t){var n=this.__data__,a=ze(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this};function _e(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}_e.prototype.clear=$e,_e.prototype.delete=Oe,_e.prototype.get=xe,_e.prototype.has=ke,_e.prototype.set=Ce;var We=_e,we=ne(d,"Map"),Te=Be,Pe=We,je=we;var Re=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Le=function(e,t){var n=e.__data__;return Re(t)?n["string"==typeof t?"string":"hash"]:n.map},Ie=Le;var Ve=Le;var Je=Le;var Ne=Le;var Ge=function(){this.size=0,this.__data__={hash:new Te,map:new(je||Pe),string:new Te}},Xe=function(e){var t=Ie(this,e).delete(e);return this.size-=t?1:0,t},Me=function(e){return Ve(this,e).get(e)},Ue=function(e){return Je(this,e).has(e)},qe=function(e,t){var n=Ne(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this};function Ke(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}Ke.prototype.clear=Ge,Ke.prototype.delete=Xe,Ke.prototype.get=Me,Ke.prototype.has=Ue,Ke.prototype.set=qe;var Qe=Ke;function Ye(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var a=arguments,i=t?t.apply(this,a):a[0],r=n.cache;if(r.has(i))return r.get(i);var o=e.apply(this,a);return n.cache=r.set(i,o)||r,o};return n.cache=new(Ye.Cache||Qe),n}Ye.Cache=Qe;var Ze=Ye;var et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,tt=/\\(\\)?/g,nt=function(e){var t=Ze(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(et,(function(e,n,a,i){t.push(a?i.replace(tt,"$1"):n||e)})),t}));var at=function(e,t){for(var n=-1,a=null==e?0:e.length,i=Array(a);++n<a;)i[n]=t(e[n],n,e);return i},it=f,rt=O,ot=u?u.prototype:void 0,lt=ot?ot.toString:void 0;var gt=function e(t){if("string"==typeof t)return t;if(it(t))return at(t,e)+"";if(rt(t))return lt?lt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},ct=gt;var Ft=f,ft=W,ht=nt,st=function(e){return null==e?"":ct(e)};var dt=O;var ut=function(e,t){return Ft(e)?e:ft(e,t)?[e]:ht(st(e))},pt=function(e){if("string"==typeof e||dt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var St=function(e,t){for(var n=0,a=(t=ut(t,e)).length;null!=e&&n<a;)e=e[pt(t[n++])];return n&&n==a?e:void 0};var yt=F((function(e,t,n){var a=null==e?void 0:St(e,t);return void 0===a?n:a}));const Bt=(e,t,n)=>t?yt(n,t)||yt(e,t):n||e,mt=(e,t)=>{const n=t||e.defaultValue;return yt(e.collections,n)};var Dt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Dt||(Dt={}));const Ht={collections:{base:o,oneservice:g,plusJakartaSans:l},defaultValue:"base"},Et=e=>t=>{const n=t.theme,a=mt(Ht,n[Dt.textStyleScheme]);return n.options&&n.options.textStyle?Bt(a,e,n.options.textStyle):Bt(a,e)},vt={D1:{fontFamily:Et("D1.fontFamily"),fontSize:Et("D1.fontSize"),fontWeight:Et("D1.fontWeight"),lineHeight:Et("D1.lineHeight"),letterSpacing:Et("D1.letterSpacing")},D2:{fontFamily:Et("D2.fontFamily"),fontSize:Et("D2.fontSize"),fontWeight:Et("D2.fontWeight"),lineHeight:Et("D2.lineHeight"),letterSpacing:Et("D2.letterSpacing")},D3:{fontFamily:Et("D3.fontFamily"),fontSize:Et("D3.fontSize"),fontWeight:Et("D3.fontWeight"),lineHeight:Et("D3.lineHeight"),letterSpacing:Et("D3.letterSpacing")},D4:{fontFamily:Et("D4.fontFamily"),fontSize:Et("D4.fontSize"),fontWeight:Et("D4.fontWeight"),lineHeight:Et("D4.lineHeight"),letterSpacing:Et("D4.letterSpacing")},DBody:{fontFamily:Et("DBody.fontFamily"),fontSize:Et("DBody.fontSize"),fontWeight:Et("DBody.fontWeight"),lineHeight:Et("DBody.lineHeight"),letterSpacing:Et("DBody.letterSpacing")},H1:{fontFamily:Et("H1.fontFamily"),fontSize:Et("H1.fontSize"),fontWeight:Et("H1.fontWeight"),lineHeight:Et("H1.lineHeight"),letterSpacing:Et("H1.letterSpacing")},H2:{fontFamily:Et("H2.fontFamily"),fontSize:Et("H2.fontSize"),fontWeight:Et("H2.fontWeight"),lineHeight:Et("H2.lineHeight"),letterSpacing:Et("H2.letterSpacing")},H3:{fontFamily:Et("H3.fontFamily"),fontSize:Et("H3.fontSize"),fontWeight:Et("H3.fontWeight"),lineHeight:Et("H3.lineHeight"),letterSpacing:Et("H3.letterSpacing")},H4:{fontFamily:Et("H4.fontFamily"),fontSize:Et("H4.fontSize"),fontWeight:Et("H4.fontWeight"),lineHeight:Et("H4.lineHeight"),letterSpacing:Et("H4.letterSpacing")},H5:{fontFamily:Et("H5.fontFamily"),fontSize:Et("H5.fontSize"),fontWeight:Et("H5.fontWeight"),lineHeight:Et("H5.lineHeight"),letterSpacing:Et("H5.letterSpacing")},H6:{fontFamily:Et("H6.fontFamily"),fontSize:Et("H6.fontSize"),fontWeight:Et("H6.fontWeight"),lineHeight:Et("H6.lineHeight"),letterSpacing:Et("H6.letterSpacing")},Body:{fontFamily:Et("Body.fontFamily"),fontSize:Et("Body.fontSize"),fontWeight:Et("Body.fontWeight"),lineHeight:Et("Body.lineHeight"),letterSpacing:Et("Body.letterSpacing")},BodySmall:{fontFamily:Et("BodySmall.fontFamily"),fontSize:Et("BodySmall.fontSize"),fontWeight:Et("BodySmall.fontWeight"),lineHeight:Et("BodySmall.lineHeight"),letterSpacing:Et("BodySmall.letterSpacing")},XSmall:{fontFamily:Et("XSmall.fontFamily"),fontSize:Et("XSmall.fontSize"),fontWeight:Et("XSmall.fontWeight"),lineHeight:Et("XSmall.lineHeight"),letterSpacing:Et("XSmall.letterSpacing")}},bt=[r.OpenSans,r.PlusJakartaSans],At=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},zt=(e,n)=>a=>{var i;const r=vt[e].fontFamily(a),o=vt[e].fontWeight(a),l=bt.find((e=>Object.values(e).includes(r)));return l?t`
                font-family: ${At(l,n)||At(l,o)||r};
                font-weight: normal !important;
            `:t`
            font-family: ${r};
            font-weight: ${null!==(i=$t(n)||o)&&void 0!==i?i:"normal"};
        `},$t=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ot=e=>{if(e>0)return t`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},xt={getFontFamily:zt,getTextStyle:(e,n,a=!1)=>i=>{const r=vt[e],o=r.fontSize(i);return t`
            ${zt(e,n)}
            font-size: ${o}rem !important;
            line-height: ${r.lineHeight}rem !important;
            letter-spacing: ${r.letterSpacing(i)||0}rem !important;
            ${t`
                margin-bottom: ${o*(a?1.05:0)}rem;
            `}
        `},getDisplayStyle:(e=!1,n=!1,a=void 0)=>n?t`
            display: block;
            ${Ot(a)}
        `:e?t`
            display: inline;
        `:t`
            display: block;
            ${Ot(a)}
        `};"function"==typeof SuppressedError&&SuppressedError;const kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ct=e=>t=>{const n=t.theme,a=mt(kt,n[Dt.colorScheme]);return n.options&&n.options.color?Bt(a,e,n.options.color):Bt(a,e)},_t=(Ct("Brand.1"),Ct("Brand.2"),Ct("Brand.3"),Ct("Brand.4"),Ct("Brand.5"),Ct("Brand.6"),Ct("Primary")),Wt=(Ct("PrimaryDark"),Ct("Secondary")),wt=(Ct("Accent.Light.1"),Ct("Accent.Light.2"),Ct("Accent.Light.3"),Ct("Accent.Light.4"),Ct("Accent.Light.5"),Ct("Accent.Light.6"),Ct("Accent.Dark.1"),Ct("Accent.Dark.2"),Ct("Accent.Dark.3"),{1:Ct("Neutral.1"),2:Ct("Neutral.2"),3:Ct("Neutral.3"),4:Ct("Neutral.4"),5:Ct("Neutral.5"),6:Ct("Neutral.6"),7:Ct("Neutral.7"),8:Ct("Neutral.8")});Ct("Validation.Green.Text"),Ct("Validation.Green.Icon"),Ct("Validation.Green.Border"),Ct("Validation.Green.Background"),Ct("Validation.Orange.Text"),Ct("Validation.Orange.Icon"),Ct("Validation.Orange.Border"),Ct("Validation.Orange.Background"),Ct("Validation.Orange.Badge"),Ct("Validation.Red.Text"),Ct("Validation.Red.Icon"),Ct("Validation.Red.Border"),Ct("Validation.Red.Background"),Ct("Validation.Blue.Text"),Ct("Validation.Blue.Icon"),Ct("Validation.Blue.Border"),Ct("Validation.Blue.Background"),Ct("Shadow.Accent"),Ct("Shadow.Red"),Ct("Shadow.Elevation");var Tt;!function(n){n.D1=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D2=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D3=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.D4=e.h1`
        ${e=>t`
                ${xt.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.DBody=e.h1`
        ${e=>t`
                ${xt.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H1=e.h1`
        ${e=>t`
                ${xt.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H2=e.h2`
        ${e=>t`
                ${xt.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H3=e.h3`
        ${e=>t`
                ${xt.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H4=e.h4`
        ${e=>t`
                ${xt.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H5=e.h5`
        ${e=>t`
                ${xt.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.H6=e.h6`
        ${e=>t`
                ${xt.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Body=e.p`
        ${e=>t`
                ${xt.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.BodySmall=e.p`
        ${e=>t`
                ${xt.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.XSmall=e.span`
        ${e=>t`
                ${xt.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${wt[1]};
                ${xt.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,n.Hyperlink={Default:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Rt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tt||(Tt={}));const Pt=e.a`
    ${e=>t`
            ${xt.getTextStyle(e.textStyle,e.weight)}
            color: ${_t};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Wt};

                svg {
                    color: ${Wt};
                }
            }
        `}
`,jt=e(i)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Rt=e=>{var{external:t=!1,children:i}=e,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["external","children"]);return n(Pt,Object.assign({},r,{children:[i,t&&a(jt,{})]}))};var Lt;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Lt||(Lt={}));export{Lt as RedirectScope,Tt as Text,vt as TextStyle,xt as TextStyleHelper};
//# sourceMappingURL=index.js.map
