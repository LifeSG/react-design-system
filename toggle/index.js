import{jsxs as t,jsx as e}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i}from"react";import a,{css as o}from"styled-components";import{ExternalIcon as s}from"@lifesg/react-icons/external";import{CircleIcon as c}from"@lifesg/react-icons/circle";import{CircleDotIcon as l}from"@lifesg/react-icons/circle-dot";import{CrossIcon as u}from"@lifesg/react-icons/cross";import{SquareIcon as d}from"@lifesg/react-icons/square";import{SquareTickFillIcon as h}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as f}from"@lifesg/react-icons/tick";var g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},p=Array.isArray,m="object"==typeof g&&g&&g.Object===Object&&g,y="object"==typeof self&&self&&self.Object===Object&&self,$=m||y||Function("return this")(),v=$.Symbol,F=v,D=Object.prototype,S=D.hasOwnProperty,B=D.toString,b=F?F.toStringTag:void 0;var x=function(t){var e=S.call(t,b),n=t[b];try{t[b]=void 0;var r=!0}catch(t){}var i=B.call(t);return r&&(e?t[b]=n:delete t[b]),i},H=Object.prototype.toString;var w=x,M=function(t){return H.call(t)},O=v?v.toStringTag:void 0;var E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":O&&O in Object(t)?w(t):M(t)};var A=E,k=function(t){return null!=t&&"object"==typeof t};var _=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==A(t)},Y=p,z=_,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/;var L=function(t,e){if(Y(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!z(t))||(T.test(t)||!W.test(t)||null!=e&&t in Object(e))};var C=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},j=E,I=C;var R,V=function(t){if(!I(t))return!1;var e=j(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},N=$["__core-js_shared__"],P=(R=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var Z=function(t){return!!P&&P in t},U=Function.prototype.toString;var X=V,G=Z,J=C,q=function(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Q=/^\[object .+?Constructor\]$/,K=Function.prototype,tt=Object.prototype,et=K.toString,nt=tt.hasOwnProperty,rt=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var it=function(t){return!(!J(t)||G(t))&&(X(t)?rt:Q).test(q(t))},at=function(t,e){return null==t?void 0:t[e]};var ot=function(t,e){var n=at(t,e);return it(n)?n:void 0},st=ot(Object,"create"),ct=st;var lt=function(){this.__data__=ct?ct(null):{},this.size=0};var ut=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt=st,ht=Object.prototype.hasOwnProperty;var ft=function(t){var e=this.__data__;if(dt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ht.call(e,t)?e[t]:void 0},gt=st,pt=Object.prototype.hasOwnProperty;var mt=st;var yt=lt,$t=ut,vt=ft,Ft=function(t){var e=this.__data__;return gt?void 0!==e[t]:pt.call(e,t)},Dt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=mt&&void 0===e?"__lodash_hash_undefined__":e,this};function St(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}St.prototype.clear=yt,St.prototype.delete=$t,St.prototype.get=vt,St.prototype.has=Ft,St.prototype.set=Dt;var Bt=St;var bt=function(){this.__data__=[],this.size=0};var xt=function(t,e){return t===e||t!=t&&e!=e};var Ht=function(t,e){for(var n=t.length;n--;)if(xt(t[n][0],e))return n;return-1},wt=Ht,Mt=Array.prototype.splice;var Ot=Ht;var Et=Ht;var At=Ht;var kt=bt,_t=function(t){var e=this.__data__,n=wt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Mt.call(e,n,1),--this.size,!0)},Yt=function(t){var e=this.__data__,n=Ot(e,t);return n<0?void 0:e[n][1]},zt=function(t){return Et(this.__data__,t)>-1},Wt=function(t,e){var n=this.__data__,r=At(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Tt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Tt.prototype.clear=kt,Tt.prototype.delete=_t,Tt.prototype.get=Yt,Tt.prototype.has=zt,Tt.prototype.set=Wt;var Lt=Tt,Ct=ot($,"Map"),jt=Bt,It=Lt,Rt=Ct;var Vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Nt=function(t,e){var n=t.__data__;return Vt(e)?n["string"==typeof e?"string":"hash"]:n.map},Pt=Nt;var Zt=Nt;var Ut=Nt;var Xt=Nt;var Gt=function(){this.size=0,this.__data__={hash:new jt,map:new(Rt||It),string:new jt}},Jt=function(t){var e=Pt(this,t).delete(t);return this.size-=e?1:0,e},qt=function(t){return Zt(this,t).get(t)},Qt=function(t){return Ut(this,t).has(t)},Kt=function(t,e){var n=Xt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function te(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}te.prototype.clear=Gt,te.prototype.delete=Jt,te.prototype.get=qt,te.prototype.has=Qt,te.prototype.set=Kt;var ee=te;function ne(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(ne.Cache||ee),n}ne.Cache=ee;var re=ne;var ie=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ae=/\\(\\)?/g,oe=function(t){var e=re(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ie,(function(t,n,r,i){e.push(r?i.replace(ae,"$1"):n||t)})),e}));var se=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ce=p,le=_,ue=v?v.prototype:void 0,de=ue?ue.toString:void 0;var he=function t(e){if("string"==typeof e)return e;if(ce(e))return se(e,t)+"";if(le(e))return de?de.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},fe=he;var ge=p,pe=L,me=oe,ye=function(t){return null==t?"":fe(t)};var $e=_;var ve=function(t,e){return ge(t)?t:pe(t,e)?[t]:me(ye(t))},Fe=function(t){if("string"==typeof t||$e(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var De=function(t,e){for(var n=0,r=(e=ve(e,t)).length;null!=t&&n<r;)t=t[Fe(e[n++])];return n&&n==r?t:void 0};var Se=function(t,e,n){var r=null==t?void 0:De(t,e);return void 0===r?n:r};const Be=(t,e,n)=>e?Se(n,e)||Se(t,e):n||t,be=(t,e)=>{const n=e||t.defaultValue;return Se(t.collections,n)};var xe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(xe||(xe={}));const He={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},we=t=>e=>{const n=e.theme,r=be(He,n[xe.colorScheme]);return n.options&&n.options.color?Be(r,t,n.options.color):Be(r,t)},Me=(we("Brand.1"),we("Brand.2"),we("Brand.3"),we("Brand.4"),we("Brand.5"),we("Brand.6"),we("Primary")),Oe=(we("PrimaryDark"),we("Secondary")),Ee={Light:{1:we("Accent.Light.1"),2:we("Accent.Light.2"),3:we("Accent.Light.3"),4:we("Accent.Light.4"),5:we("Accent.Light.5"),6:we("Accent.Light.6")},Dark:{1:we("Accent.Dark.1"),2:we("Accent.Dark.2"),3:we("Accent.Dark.3")}},Ae={1:we("Neutral.1"),2:we("Neutral.2"),3:we("Neutral.3"),4:we("Neutral.4"),5:we("Neutral.5"),6:we("Neutral.6"),7:we("Neutral.7"),8:we("Neutral.8")},ke={Green:{Text:we("Validation.Green.Text"),Icon:we("Validation.Green.Icon"),Border:we("Validation.Green.Border"),Background:we("Validation.Green.Background")},Orange:{Text:we("Validation.Orange.Text"),Icon:we("Validation.Orange.Icon"),Border:we("Validation.Orange.Border"),Background:we("Validation.Orange.Background"),Badge:we("Validation.Orange.Badge")},Red:{Text:we("Validation.Red.Text"),Icon:we("Validation.Red.Icon"),Border:we("Validation.Red.Border"),Background:we("Validation.Red.Background")},Blue:{Text:we("Validation.Blue.Text"),Icon:we("Validation.Blue.Icon"),Border:we("Validation.Blue.Border"),Background:we("Validation.Blue.Background")}},_e={Accent:we("Shadow.Accent"),Red:we("Shadow.Red"),Elevation:we("Shadow.Elevation")},Ye={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ze={collections:{base:{D1:{fontFamily:Ye.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Ye.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Ye.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Ye.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Ye.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Ye.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Ye.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Ye.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Ye.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Ye.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Ye.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Ye.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Ye.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Ye.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},We=t=>e=>{const n=e.theme,r=be(ze,n[xe.textStyleScheme]);return n.options&&n.options.textStyle?Be(r,t,n.options.textStyle):Be(r,t)},Te={D1:{fontFamily:We("D1.fontFamily"),fontSize:We("D1.fontSize"),fontWeight:We("D1.fontWeight"),lineHeight:We("D1.lineHeight"),letterSpacing:We("D1.letterSpacing")},D2:{fontFamily:We("D2.fontFamily"),fontSize:We("D2.fontSize"),fontWeight:We("D2.fontWeight"),lineHeight:We("D2.lineHeight"),letterSpacing:We("D2.letterSpacing")},D3:{fontFamily:We("D3.fontFamily"),fontSize:We("D3.fontSize"),fontWeight:We("D3.fontWeight"),lineHeight:We("D3.lineHeight"),letterSpacing:We("D3.letterSpacing")},D4:{fontFamily:We("D4.fontFamily"),fontSize:We("D4.fontSize"),fontWeight:We("D4.fontWeight"),lineHeight:We("D4.lineHeight"),letterSpacing:We("D4.letterSpacing")},DBody:{fontFamily:We("DBody.fontFamily"),fontSize:We("DBody.fontSize"),fontWeight:We("DBody.fontWeight"),lineHeight:We("DBody.lineHeight"),letterSpacing:We("DBody.letterSpacing")},H1:{fontFamily:We("H1.fontFamily"),fontSize:We("H1.fontSize"),fontWeight:We("H1.fontWeight"),lineHeight:We("H1.lineHeight"),letterSpacing:We("H1.letterSpacing")},H2:{fontFamily:We("H2.fontFamily"),fontSize:We("H2.fontSize"),fontWeight:We("H2.fontWeight"),lineHeight:We("H2.lineHeight"),letterSpacing:We("H2.letterSpacing")},H3:{fontFamily:We("H3.fontFamily"),fontSize:We("H3.fontSize"),fontWeight:We("H3.fontWeight"),lineHeight:We("H3.lineHeight"),letterSpacing:We("H3.letterSpacing")},H4:{fontFamily:We("H4.fontFamily"),fontSize:We("H4.fontSize"),fontWeight:We("H4.fontWeight"),lineHeight:We("H4.lineHeight"),letterSpacing:We("H4.letterSpacing")},H5:{fontFamily:We("H5.fontFamily"),fontSize:We("H5.fontSize"),fontWeight:We("H5.fontWeight"),lineHeight:We("H5.lineHeight"),letterSpacing:We("H5.letterSpacing")},H6:{fontFamily:We("H6.fontFamily"),fontSize:We("H6.fontSize"),fontWeight:We("H6.fontWeight"),lineHeight:We("H6.lineHeight"),letterSpacing:We("H6.letterSpacing")},Body:{fontFamily:We("Body.fontFamily"),fontSize:We("Body.fontSize"),fontWeight:We("Body.fontWeight"),lineHeight:We("Body.lineHeight"),letterSpacing:We("Body.letterSpacing")},BodySmall:{fontFamily:We("BodySmall.fontFamily"),fontSize:We("BodySmall.fontSize"),fontWeight:We("BodySmall.fontWeight"),lineHeight:We("BodySmall.lineHeight"),letterSpacing:We("BodySmall.letterSpacing")},XSmall:{fontFamily:We("XSmall.fontFamily"),fontSize:We("XSmall.fontSize"),fontWeight:We("XSmall.fontWeight"),lineHeight:We("XSmall.lineHeight"),letterSpacing:We("XSmall.letterSpacing")}},Le=t=>{switch(t){case 700:case"bold":return Ye.Bold;case 600:case"semibold":return Ye.Semibold;case 300:case"light":return Ye.Light;case 400:case"regular":return Ye.Regular;default:return""}},Ce=(t,e)=>n=>{var r;const i=Te[t].fontFamily(n),a=Te[t].fontWeight(n);return Object.values(Ye).includes(i)?o`
                font-family: ${Le(e)||Le(a)||i};
                font-weight: normal !important;
            `:o`
            font-family: ${i};
            font-weight: ${null!==(r=je(e)||a)&&void 0!==r?r:"normal"};
        `},je=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ie=t=>{if(t>0)return o`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Re=Ce,Ve=(t,e,n=!1)=>r=>{const i=Te[t],a=i.fontSize(r);return o`
            ${Ce(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${o`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Ne=(t=!1,e=!1,n=void 0)=>e?o`
            display: block;
            ${Ie(n)}
        `:t?o`
            display: inline;
        `:o`
            display: block;
            ${Ie(n)}
        `;var Pe;!function(t){t.D1=a.h1`
        ${t=>o`
                ${Ve("D1",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=a.h1`
        ${t=>o`
                ${Ve("D2",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=a.h1`
        ${t=>o`
                ${Ve("D3",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=a.h1`
        ${t=>o`
                ${Ve("D4",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=a.h1`
        ${t=>o`
                ${Ve("DBody",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=a.h1`
        ${t=>o`
                ${Ve("H1",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=a.h2`
        ${t=>o`
                ${Ve("H2",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=a.h3`
        ${t=>o`
                ${Ve("H3",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=a.h4`
        ${t=>o`
                ${Ve("H4",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=a.h5`
        ${t=>o`
                ${Ve("H5",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=a.h6`
        ${t=>o`
                ${Ve("H6",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=a.p`
        ${t=>o`
                ${Ve("Body",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=a.p`
        ${t=>o`
                ${Ve("BodySmall",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=a.span`
        ${t=>o`
                ${Ve("XSmall",t.weight,t.paragraph)}
                color: ${Ae[1]};
                ${Ne(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Xe(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Xe(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Pe||(Pe={}));const Ze=a.a`
    ${t=>o`
            ${Ve(t.textStyle,t.weight)}
            color: ${Me};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Oe};

                svg {
                    color: ${Oe};
                }
            }
        `}
`,Ue=a(s)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Xe=n=>{var{external:r=!1,children:i}=n,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(n,["external","children"]);return t(Ze,Object.assign({},a,{children:[i,r&&e(Ue,{})]}))};var Ge;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Ge||(Ge={}));const Je=a.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${t=>t.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${t=>{if(!t.$indicator)return o`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${t=>"no-border"===t.$styleType?t.$error?o`
                        border-color: ${ke.Red.Icon};
                        background: ${Ae[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_e.Red};
                        }
                    `:t.$disabled?o`
                        border-color: transparent;
                    `:o`
                        border-color: transparent;

                        :hover {
                            background: ${Ee.Light[6]};
                        }
                    `:t.$disabled&&!t.$selected?o`
                        background: ${Ae[6]};
                        border-color: ${Ae[5]};
                    `:t.$disabled&&t.$selected?o`
                        background: ${Ae[6]};
                        border-color: ${Ae[4]};
                    `:t.$error?o`
                        background: ${Ae[8]};
                        border-color: ${ke.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_e.Red};
                        }
                    `:t.$selected?o`
                        background: ${Ee.Light[5]};
                        border-color: ${Me};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_e.Accent};
                        }
                    `:o`
                        background: ${Ae[8]};
                        border-color: ${Ae[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${_e.Accent};
                            border-color: ${Ee.Light[1]};
                        }
                    `}
`,qe=a.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,Qe=a.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
`,Ke=a.label`
    ${t=>t.$selected&&!t.$indicator?o`
                ${Ve("H4","semibold")}
            `:o`
                ${Ve("H4","regular")}
            `}

    color: ${Ae[1]};

    ${t=>t.$disabled?o`
                color: ${Ae[3]};
            `:t.$selected?o`
                color: ${Me};
            `:void 0}
`,tn=a.div`
    ${Ve("BodySmall","regular")}
    margin-top: 0.5rem;

    strong,
    b {
        ${Re("BodySmall","semibold")}
        color: inherit;
    }

    ${t=>t.$disabled?o`
                color: ${Ae[3]};
            `:t.$selected?o`
                color: ${Me};
            `:o`
                color: ${Ae[1]};
            `}
`,en=a.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${t=>t.$active&&!t.disabled?o`
                    color: ${Me};
                `:o`
                    color: ${Ae[4]};
                `};
    }
`,nn=({type:t,active:n=!1,disabled:r,className:i})=>{let a;switch(t){case"checkbox":a=e(n?h:d,{});break;case"radio":a=e(n?l:c,{});break;case"tick":a=e(f,{});break;case"cross":a=e(u,{});break;default:a=null}return e(en,Object.assign({className:i,$active:n,disabled:r},{children:a}))};var rn={exports:{}};rn.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],l=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=a.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=l("months"),n=(l("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=l("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=o(t)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var a=r&&r.toUpperCase();return n||i[r]||t[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=o.length,c=0;c<s;c+=1){var l=o[c],u=d[l],h=u&&u[0],f=u&&u[1];o[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,c=i.parser,l=t.slice(r),u=a.exec(l)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var s=o[1];if("string"==typeof s){var c=!0===o[2],l=!0===o[3],u=c||l,d=o[2];l&&(d=o[2]),a=this.$locale(),!c&&d&&(a=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,a=r.month,o=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,$=c||0,v=l||0,F=u||0;return d?new Date(Date.UTC(p,m,g,y,$,v,F+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,$,v,F)):new Date(p,m,g,y,$,v,F)}catch(t){return new Date("")}}(e,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var an,on,sn=rn.exports,cn={exports:{}},ln=cn.exports=(an={year:0,month:1,day:2,hour:3,minute:4,second:5},on={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=on[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),on[r]=i),i}(e,n);return i.formatToParts(r)},a=function(t,e){for(var r=i(t,e),a=[],o=0;o<r.length;o+=1){var s=r[o],c=s.type,l=s.value,u=an[c];u>=0&&(a[u]=parseInt(l,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+t;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:t}),s=Math.round((a-new Date(o))/1e3/60),c=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(e){var l=c.utcOffset();c=c.add(i-l,"minute")}return c.$x.$timezone=t,c},o.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var o=i&&e,s=i||e||r,c=a(+n(),s);if("string"!=typeof t)return n(t).tz(s);var l=function(t,e,n){var r=t-60*e*1e3,i=a(r,n);if(e===i)return[r,e];var o=a(r-=60*(i-e)*1e3,n);return i===o?[r,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(t,o).valueOf(),c,s),u=l[0],d=l[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),un={exports:{}};un.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,l),a=n-i<0,o=e.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:d,w:c,d:s,D:h,h:o,m:a,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",F={};F[v]=m;var D=function(t){return t instanceof x},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();F[a]&&(i=a),n&&(F[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;F[s]=e,i=s}return!r&&i&&(v=i),i||!r&&v},B=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},b=$;b.l=S,b.i=D,b.w=function(t,e){return B(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return b},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=B(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return B(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<B(t)},y.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!b.u(e)||e,u=b.p(t),f=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,m):f(0,m+1);case c:var v=this.$locale().weekStart||0,F=(p<v?p+7:p)-v;return f(r?y-F:y+(6-F),m);case s:case h:return g($+"Hours",0);case o:return g($+"Minutes",1);case a:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=b.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],g=c===s?this.$D+(e-this.$W):e;if(c===l||c===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[b.p(t)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=b.p(u),p=function(t){var e=B(f);return b.w(e.date(e.date()+Math.round(t*r)),f)};if(g===l)return this.set(l,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===c)return p(7);var m=(h={},h[a]=e,h[o]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return b.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},d=function(t){return b.s(a%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:b.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:b.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:b.s(o,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=b.p(h),m=B(r),y=(m.utcOffset()-this.utcOffset())*e,$=this-m,v=b.m(this,m);return v=(g={},g[d]=v/12,g[l]=v,g[u]=v/3,g[c]=($-y)/6048e5,g[s]=($-y)/864e5,g[o]=$/n,g[a]=$/e,g[i]=$/t,g)[p]||$,f?v:b.a(v)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return F[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return b.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=x.prototype;return B.prototype=H,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),B.extend=function(t,e){return t.$i||(t(e,x,B),t.$i=!0),B},B.locale=S,B.isDayjs=D,B.unix=function(t){return B(1e3*t)},B.en=F[v],B.Ls=F,B.p={},B}();var dn=un.exports,hn={exports:{}};hn.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var a=n(t),o=n(e),s="("===(i=i||"()")[0],c=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(c?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(c?this.isAfter(o,r):!this.isBefore(o,r))}};var fn=hn.exports,gn={exports:{}};gn.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var pn=gn.exports,mn={exports:{}};mn.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var yn,$n=mn.exports;dn.extend(fn),dn.extend(pn),dn.extend($n),dn.extend(sn),dn.extend(ln),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=dn(e).startOf("week");return vn(n).map((t=>Fn(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return Fn(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(dn(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+dn(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=dn(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const a=t.isWithinRange(e,r?dn(r):void 0,i?dn(i):void 0),o=n&&n.includes(e.format("YYYY-MM-DD"));return!a||!!o}}(yn||(yn={}));const vn=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},Fn=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},Dn=[1,3,5,7,8,10,12],Sn=[4,6,9,11];var Bn,bn,xn,Hn;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),a=parseInt(n),o=parseInt(r);return 0==i?"1":Dn.includes(a)?Math.min(i,31).toString():Sn.includes(a)?Math.min(i,30).toString():2===a?t.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=dn(t,n);return dn(e,n).diff(r,"minute")},t.toDayjs=t=>t?dn(t):dn()}(Bn||(Bn={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!dn(t).isBefore(r,"day"))||!(!i||!dn(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(dn(t).isValid())return t}return""}}(bn||(bn={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(xn||(xn={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let a=0;e>n&&(a=Math.floor((e-n)/i));const o=r+a;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(Hn||(Hn={}));const wn=({type:a="checkbox",indicator:o,checked:s,styleType:c="default",children:l,subLabel:u,disabled:d,error:h,name:f,id:g,className:p,"data-testid":m,onChange:y})=>{const[$,v]=n(s),[F]=n(xn.generate()),D=g?`${g}-input`:`tg-${F}-input`,S=r();i((()=>{v(s)}),[s]);return t(Je,Object.assign({$selected:$,$disabled:d,className:p,$styleType:c,$error:h,$indicator:o,id:g,"data-testid":m},{children:[o&&(()=>{let t;switch(a){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=a}return e(nn,{type:t,active:$,disabled:d})})(),e(qe,{ref:S,name:f,id:D,type:"checkbox"===a?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:t=>{if(!d){if(y)return void y(t);switch(a){case"checkbox":v((t=>!t));break;case"radio":case"yes":case"no":$||v(!0)}}},checked:$}),t(Qe,{children:[e(Ke,Object.assign({htmlFor:D,$selected:$,$indicator:o,$disabled:d,"data-testid":"toggle-label"},{children:l})),u&&(()=>{if(!u)return null;let t;return"string"==typeof u?t=u:"function"==typeof u&&(t=u()),e(tn,Object.assign({$disabled:d,$selected:$},{children:t}))})()]})]}))};export{wn as Toggle};
//# sourceMappingURL=index.js.map