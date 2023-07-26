import{jsxs as t,jsx as e}from"react/jsx-runtime";import{useState as n,useRef as r,useEffect as i}from"react";import{ExternalIcon as o}from"@lifesg/react-icons/external";import a,{css as l}from"styled-components";var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var h=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},p="object"==typeof c&&c&&c.Object===Object&&c,f="object"==typeof self&&self&&self.Object===Object&&self,d=p||f||Function("return this")(),s=d,g=function(){return s.Date.now()},u=/\s/;var F=function(t){for(var e=t.length;e--&&u.test(t.charAt(e)););return e},m=/^\s+/;var y=function(t){return t?t.slice(0,F(t)+1).replace(m,""):t},v=d.Symbol,b=v,S=Object.prototype,B=S.hasOwnProperty,x=S.toString,D=b?b.toStringTag:void 0;var H=function(t){var e=B.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(t){}var i=x.call(t);return r&&(e?t[D]=n:delete t[D]),i},$=Object.prototype.toString;var w=H,E=function(t){return $.call(t)},_=v?v.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?w(t):E(t)};var A=z,k=function(t){return null!=t&&"object"==typeof t};var W=function(t){return"symbol"==typeof t||k(t)&&"[object Symbol]"==A(t)},C=y,O=h,T=W,j=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,I=/^0o[0-7]+$/i,L=parseInt;var R=h,N=g,P=function(t){if("number"==typeof t)return t;if(T(t))return NaN;if(O(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=O(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=C(t);var n=V.test(t);return n||I.test(t)?L(t.slice(2),n?2:8):j.test(t)?NaN:+t},X=Math.max,G=Math.min;var Y=function(t,e,n){var r,i,o,a,l,c,h=0,p=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function s(e){var n=r,o=i;return r=i=void 0,h=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-h>=o}function u(){var t=N();if(g(t))return F(t);l=setTimeout(u,function(t){var n=e-(t-c);return f?G(n,o-(t-h)):n}(t))}function F(t){return l=void 0,d&&r?s(t):(r=i=void 0,a)}function m(){var t=N(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return h=t,l=setTimeout(u,e),p?s(t):a}(c);if(f)return clearTimeout(l),l=setTimeout(u,e),s(c)}return void 0===l&&(l=setTimeout(u,e)),a}return e=P(e)||0,R(n)&&(p=!!n.leading,o=(f="maxWait"in n)?X(P(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),m.cancel=function(){void 0!==l&&clearTimeout(l),h=0,r=c=i=l=void 0},m.flush=function(){return void 0===l?a:F(N())},m};var M=Array.isArray,U=M,q=W,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/;var Q=function(t,e){if(U(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!q(t))||(K.test(t)||!J.test(t)||null!=e&&t in Object(e))},Z=z,tt=h;var et,nt=function(t){if(!tt(t))return!1;var e=Z(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},rt=d["__core-js_shared__"],it=(et=/[^.]+$/.exec(rt&&rt.keys&&rt.keys.IE_PROTO||""))?"Symbol(src)_1."+et:"";var ot=function(t){return!!it&&it in t},at=Function.prototype.toString;var lt=nt,ct=ot,ht=h,pt=function(t){if(null!=t){try{return at.call(t)}catch(t){}try{return t+""}catch(t){}}return""},ft=/^\[object .+?Constructor\]$/,dt=Function.prototype,st=Object.prototype,gt=dt.toString,ut=st.hasOwnProperty,Ft=RegExp("^"+gt.call(ut).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var mt=function(t){return!(!ht(t)||ct(t))&&(lt(t)?Ft:ft).test(pt(t))},yt=function(t,e){return null==t?void 0:t[e]};var vt=function(t,e){var n=yt(t,e);return mt(n)?n:void 0},bt=vt(Object,"create"),St=bt;var Bt=function(){this.__data__=St?St(null):{},this.size=0};var xt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Dt=bt,Ht=Object.prototype.hasOwnProperty;var $t=function(t){var e=this.__data__;if(Dt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ht.call(e,t)?e[t]:void 0},wt=bt,Et=Object.prototype.hasOwnProperty;var _t=bt;var zt=Bt,At=xt,kt=$t,Wt=function(t){var e=this.__data__;return wt?void 0!==e[t]:Et.call(e,t)},Ct=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=_t&&void 0===e?"__lodash_hash_undefined__":e,this};function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ot.prototype.clear=zt,Ot.prototype.delete=At,Ot.prototype.get=kt,Ot.prototype.has=Wt,Ot.prototype.set=Ct;var Tt=Ot;var jt=function(){this.__data__=[],this.size=0};var Vt=function(t,e){return t===e||t!=t&&e!=e};var It=function(t,e){for(var n=t.length;n--;)if(Vt(t[n][0],e))return n;return-1},Lt=It,Rt=Array.prototype.splice;var Nt=It;var Pt=It;var Xt=It;var Gt=jt,Yt=function(t){var e=this.__data__,n=Lt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Rt.call(e,n,1),--this.size,!0)},Mt=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},Ut=function(t){return Pt(this.__data__,t)>-1},qt=function(t,e){var n=this.__data__,r=Xt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function Jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Jt.prototype.clear=Gt,Jt.prototype.delete=Yt,Jt.prototype.get=Mt,Jt.prototype.has=Ut,Jt.prototype.set=qt;var Kt=Jt,Qt=vt(d,"Map"),Zt=Tt,te=Kt,ee=Qt;var ne=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var re=function(t,e){var n=t.__data__;return ne(e)?n["string"==typeof e?"string":"hash"]:n.map},ie=re;var oe=re;var ae=re;var le=re;var ce=function(){this.size=0,this.__data__={hash:new Zt,map:new(ee||te),string:new Zt}},he=function(t){var e=ie(this,t).delete(t);return this.size-=e?1:0,e},pe=function(t){return oe(this,t).get(t)},fe=function(t){return ae(this,t).has(t)},de=function(t,e){var n=le(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function se(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}se.prototype.clear=ce,se.prototype.delete=he,se.prototype.get=pe,se.prototype.has=fe,se.prototype.set=de;var ge=se;function ue(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ue.Cache||ge),n}ue.Cache=ge;var Fe=ue;var me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/\\(\\)?/g,ve=function(t){var e=Fe(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(me,(function(t,n,r,i){e.push(r?i.replace(ye,"$1"):n||t)})),e}));var be=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Se=M,Be=W,xe=v?v.prototype:void 0,De=xe?xe.toString:void 0;var He=function t(e){if("string"==typeof e)return e;if(Se(e))return be(e,t)+"";if(Be(e))return De?De.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},$e=He;var we=M,Ee=Q,_e=ve,ze=function(t){return null==t?"":$e(t)};var Ae=W;var ke=function(t,e){return we(t)?t:Ee(t,e)?[t]:_e(ze(t))},We=function(t){if("string"==typeof t||Ae(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Ce=function(t,e){for(var n=0,r=(e=ke(e,t)).length;null!=t&&n<r;)t=t[We(e[n++])];return n&&n==r?t:void 0};var Oe=function(t,e,n){var r=null==t?void 0:Ce(t,e);return void 0===r?n:r};const Te=(t,e,n)=>e?Oe(n,e)||Oe(t,e):n||t,je=(t,e)=>{const n=e||t.defaultValue;return Oe(t.collections,n)};var Ve;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ve||(Ve={}));const Ie={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Le=t=>e=>{const n=e.theme,r=je(Ie,n[Ve.colorScheme]);return n.options&&n.options.color?Te(r,t,n.options.color):Te(r,t)},Re=(Le("Brand.1"),Le("Brand.2"),Le("Brand.3"),Le("Brand.4"),Le("Brand.5"),Le("Brand.6"),Le("Primary")),Ne=(Le("PrimaryDark"),Le("Secondary")),Pe=(Le("Accent.Light.1"),Le("Accent.Light.2"),Le("Accent.Light.3"),Le("Accent.Light.4"),Le("Accent.Light.5"),Le("Accent.Light.6"),Le("Accent.Dark.1"),Le("Accent.Dark.2"),Le("Accent.Dark.3"),{1:Le("Neutral.1"),2:Le("Neutral.2"),3:Le("Neutral.3"),4:Le("Neutral.4"),5:Le("Neutral.5"),6:Le("Neutral.6"),7:Le("Neutral.7"),8:Le("Neutral.8")}),Xe=(Le("Validation.Green.Text"),Le("Validation.Green.Icon"),Le("Validation.Green.Border"),Le("Validation.Green.Background"),Le("Validation.Orange.Text"),Le("Validation.Orange.Icon"),Le("Validation.Orange.Border"),Le("Validation.Orange.Background"),Le("Validation.Orange.Badge"),Le("Validation.Red.Text"),Le("Validation.Red.Icon"),Le("Validation.Red.Border"),Le("Validation.Red.Background"),Le("Validation.Blue.Text"),Le("Validation.Blue.Icon"),Le("Validation.Blue.Border"),Le("Validation.Blue.Background"),Le("Shadow.Accent"),Le("Shadow.Red"),Le("Shadow.Elevation"),{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"}),Ge={collections:{base:{D1:{fontFamily:Xe.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Xe.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Xe.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Xe.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Xe.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Xe.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Xe.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Xe.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Xe.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Xe.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Xe.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Xe.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Xe.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Xe.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ye=t=>e=>{const n=e.theme,r=je(Ge,n[Ve.textStyleScheme]);return n.options&&n.options.textStyle?Te(r,t,n.options.textStyle):Te(r,t)},Me={D1:{fontFamily:Ye("D1.fontFamily"),fontSize:Ye("D1.fontSize"),fontWeight:Ye("D1.fontWeight"),lineHeight:Ye("D1.lineHeight"),letterSpacing:Ye("D1.letterSpacing")},D2:{fontFamily:Ye("D2.fontFamily"),fontSize:Ye("D2.fontSize"),fontWeight:Ye("D2.fontWeight"),lineHeight:Ye("D2.lineHeight"),letterSpacing:Ye("D2.letterSpacing")},D3:{fontFamily:Ye("D3.fontFamily"),fontSize:Ye("D3.fontSize"),fontWeight:Ye("D3.fontWeight"),lineHeight:Ye("D3.lineHeight"),letterSpacing:Ye("D3.letterSpacing")},D4:{fontFamily:Ye("D4.fontFamily"),fontSize:Ye("D4.fontSize"),fontWeight:Ye("D4.fontWeight"),lineHeight:Ye("D4.lineHeight"),letterSpacing:Ye("D4.letterSpacing")},DBody:{fontFamily:Ye("DBody.fontFamily"),fontSize:Ye("DBody.fontSize"),fontWeight:Ye("DBody.fontWeight"),lineHeight:Ye("DBody.lineHeight"),letterSpacing:Ye("DBody.letterSpacing")},H1:{fontFamily:Ye("H1.fontFamily"),fontSize:Ye("H1.fontSize"),fontWeight:Ye("H1.fontWeight"),lineHeight:Ye("H1.lineHeight"),letterSpacing:Ye("H1.letterSpacing")},H2:{fontFamily:Ye("H2.fontFamily"),fontSize:Ye("H2.fontSize"),fontWeight:Ye("H2.fontWeight"),lineHeight:Ye("H2.lineHeight"),letterSpacing:Ye("H2.letterSpacing")},H3:{fontFamily:Ye("H3.fontFamily"),fontSize:Ye("H3.fontSize"),fontWeight:Ye("H3.fontWeight"),lineHeight:Ye("H3.lineHeight"),letterSpacing:Ye("H3.letterSpacing")},H4:{fontFamily:Ye("H4.fontFamily"),fontSize:Ye("H4.fontSize"),fontWeight:Ye("H4.fontWeight"),lineHeight:Ye("H4.lineHeight"),letterSpacing:Ye("H4.letterSpacing")},H5:{fontFamily:Ye("H5.fontFamily"),fontSize:Ye("H5.fontSize"),fontWeight:Ye("H5.fontWeight"),lineHeight:Ye("H5.lineHeight"),letterSpacing:Ye("H5.letterSpacing")},H6:{fontFamily:Ye("H6.fontFamily"),fontSize:Ye("H6.fontSize"),fontWeight:Ye("H6.fontWeight"),lineHeight:Ye("H6.lineHeight"),letterSpacing:Ye("H6.letterSpacing")},Body:{fontFamily:Ye("Body.fontFamily"),fontSize:Ye("Body.fontSize"),fontWeight:Ye("Body.fontWeight"),lineHeight:Ye("Body.lineHeight"),letterSpacing:Ye("Body.letterSpacing")},BodySmall:{fontFamily:Ye("BodySmall.fontFamily"),fontSize:Ye("BodySmall.fontSize"),fontWeight:Ye("BodySmall.fontWeight"),lineHeight:Ye("BodySmall.lineHeight"),letterSpacing:Ye("BodySmall.letterSpacing")},XSmall:{fontFamily:Ye("XSmall.fontFamily"),fontSize:Ye("XSmall.fontSize"),fontWeight:Ye("XSmall.fontWeight"),lineHeight:Ye("XSmall.lineHeight"),letterSpacing:Ye("XSmall.letterSpacing")}},Ue=t=>{switch(t){case 700:case"bold":return Xe.Bold;case 600:case"semibold":return Xe.Semibold;case 300:case"light":return Xe.Light;case 400:case"regular":return Xe.Regular;default:return""}},qe=(t,e)=>n=>{const r=Me[t].fontFamily(n),i=Me[t].fontWeight(n);return Object.values(Xe).includes(r)?l`
                font-family: ${Ue(e)||Ue(i)||r};
                font-weight: normal !important;
            `:l`
            font-family: ${r};
            font-weight: ${(Je(e)||i)??"normal"};
        `},Je=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ke=(t,e,n=!1)=>r=>{const i=Me[t],o=i.fontSize(r);return l`
            ${qe(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${l`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Qe=(t=!1,e=!1)=>e?l`
            display: block;
        `:t?l`
            display: inline;
        `:l`
            display: block;
        `;var Ze;!function(t){t.D1=a.h1`
        ${t=>l`
                ${Ke("D1",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.D2=a.h1`
        ${t=>l`
                ${Ke("D2",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.D3=a.h1`
        ${t=>l`
                ${Ke("D3",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.D4=a.h1`
        ${t=>l`
                ${Ke("D4",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.DBody=a.h1`
        ${t=>l`
                ${Ke("DBody",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.H1=a.h1`
        ${t=>l`
                ${Ke("H1",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.H2=a.h2`
        ${t=>l`
                ${Ke("H2",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.H3=a.h3`
        ${t=>l`
                ${Ke("H3",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.H4=a.h4`
        ${t=>l`
                ${Ke("H4",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.H5=a.h5`
        ${t=>l`
                ${Ke("H5",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.H6=a.h6`
        ${t=>l`
                ${Ke("H6",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.Body=a.p`
        ${t=>l`
                ${Ke("Body",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=a.p`
        ${t=>l`
                ${Ke("BodySmall",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.XSmall=a.span`
        ${t=>l`
                ${Ke("XSmall",t.weight,t.paragraph)}
                color: ${Pe[1]};
                ${Qe(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>nn({...t,textStyle:"Body"}),Small:t=>nn({...t,textStyle:"BodySmall"})}}(Ze||(Ze={}));const tn=a.a`
    ${t=>l`
            ${Ke(t.textStyle,t.weight)}
            color: ${Re};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ne};

                svg {
                    color: ${Ne};
                }
            }
        `}
`,en=a(o)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,nn=({external:n=!1,children:r,...i})=>t(tn,{...i,children:[r,n&&e(en,{})]}),rn=a.div`
    border-radius: 0.5rem;
    background: ${Pe[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,on={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},an=t=>Object.keys(on).reduce(((e,n)=>{const r=on[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),ln=an("max-width"),cn=(an("min-width"),"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)"),hn=a.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${t=>(t=>{switch(t){case"left":return l`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${ln.mobileL} {
                    width: auto;
                }
            `;case"right":return l`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${ln.mobileL} {
                    width: auto;
                }
            `;case"bottom":return l`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${ln.mobileL} {
                    max-width: 80vw;
                }
            `;default:return l`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${ln.mobileL} {
                    max-width: 80vw;
                }
            `}})(t.position)}
    ${t=>t.visible?l`
            visibility: "visible";
            opacity: 1;
            transition: ${cn};
            z-index: 2;
        `:l`
            visibility: "hidden";
            opacity: 0;
            transition: ${cn};
            z-index: -1;
        `}
`,pn=a((({children:t,...n})=>{const r=n["data-testid"]||"card";return e(rn,{...n,"data-testid":r,children:"string"==typeof t?e(Ze.Body,{children:t}):t})}))`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,fn=a.div`
    position: absolute;
    overflow: hidden;

    ${t=>{switch(t.position){case"top":default:return l`
                    width: 50%;
                    height: 30px;
                    top: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px 2px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 16px 8px 0 8px;
                        border-color: ${Pe[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return l`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    left: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        right: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 2px 3px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        right: -10%;
                        border-style: solid;
                        border-width: 8px 16px 8px 0;
                        border-color: transparent ${Pe[8]}
                            transparent transparent;
                    }
                `;case"left":return l`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    right: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        left: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 4px 0px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        left: -10%;
                        border-style: solid;
                        border-width: 8px 0 8px 16px;
                        border-color: transparent transparent transparent
                            ${Pe[8]};
                    }
                `;case"bottom":return l`
                    width: 50%;
                    height: 30px;
                    bottom: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        bottom: -10px;
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px -9px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 0 8px 16px 8px;
                        border-color: transparent transparent
                            ${Pe[8]} transparent;
                    }
                `}}}
`,dn=a.div`
    position: relative;
`,sn=({visible:o,position:a="top",children:l,...c})=>{const h=c["data-testid"]||"tooltip",[p,f]=n(a),d=r(null);i((()=>(g(),window.addEventListener("resize",Y(s,300)),()=>{window.removeEventListener("resize",Y(s,300))})),[]);const s=()=>{g()},g=()=>{if(d.current){const t=d.current.getBoundingClientRect();if(t.x<0)switch(a){case"left":case"top":case"bottom":f("right");break;case"right":f("top")}else if(t.x+t.width>window.outerWidth)switch(a){case"right":case"top":case"bottom":f("left");break;case"left":f("top")}else f(a)}};return t(hn,{position:p,"data-testid":h,visible:o,ref:d,...c,children:[e(pn,{children:"string"==typeof l?e(Ze.BodySmall,{children:l}):l}),e(fn,{position:p})]})},gn=(n,r)=>i=>{const{tooltipVisible:o,position:a,...l}=i;return t(dn,{children:[e(n,{...l}),e(sn,{visible:o,position:a,children:r.content})]})};export{sn as Tooltip,gn as withTooltip};
//# sourceMappingURL=index.js.map
